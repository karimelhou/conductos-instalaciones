/**
 * Structural parity between the Spanish and English halves of every copy
 * module. Types already catch a missing field; this catches the things types
 * cannot see — an array that lost an item, a string left empty, a TODO that
 * shipped. It runs at module scope in registry.ts, so a failure stops the
 * build with a path rather than producing a quietly shorter English page.
 *
 * It proves STRUCTURE, never MEANING. A bad translation still needs a human.
 */
import type { Bi } from './types';

const problems: string[] = [];

function walk(path: string, es: unknown, en: unknown): void {
  if (typeof es !== typeof en) {
    problems.push(`${path}: type mismatch es=${typeof es} en=${typeof en}`);
    return;
  }

  if (typeof es === 'string') {
    const enS = en as string;
    if (es.trim() === '') problems.push(`${path}: empty Spanish string`);
    if (enS.trim() === '') problems.push(`${path}: empty English string`);
    if (/\bTODO\b/.test(es) || /\bTODO\b/.test(enS)) {
      problems.push(`${path}: contains TODO`);
    }
    // Identical strings usually mean a forgotten translation — but photo ids,
    // slugs and bare numbers are identical on purpose.
    const isIdentifier = /^[a-z0-9]+(-[a-z0-9]+)*$/.test(es);
    const isNumeric = /^[\d\s.,·×–-]+$/.test(es);
    const inIdField = /\.(photos|diagram)(\[|$)/.test(path);
    if (es === enS && es.length > 30 && !isIdentifier && !isNumeric && !inIdField) {
      problems.push(`${path}: Spanish and English are identical — untranslated?`);
    }
    return;
  }

  if (Array.isArray(es)) {
    const enA = en as unknown[];
    if (es.length !== enA.length) {
      problems.push(`${path}: length mismatch es=${es.length} en=${enA.length}`);
      return;
    }
    es.forEach((v, i) => walk(`${path}[${i}]`, v, enA[i]));
    return;
  }

  if (es && typeof es === 'object') {
    const eo = es as Record<string, unknown>;
    const no = en as Record<string, unknown>;
    const ek = Object.keys(eo).sort();
    const nk = Object.keys(no).sort();
    const onlyEs = ek.filter((k) => !nk.includes(k));
    const onlyEn = nk.filter((k) => !ek.includes(k));
    if (onlyEs.length) problems.push(`${path}: keys only in es: ${onlyEs.join(', ')}`);
    if (onlyEn.length) problems.push(`${path}: keys only in en: ${onlyEn.join(', ')}`);
    ek.filter((k) => nk.includes(k)).forEach((k) => walk(`${path}.${k}`, eo[k], no[k]));
  }
}

export function assertParity(modules: Record<string, Bi<unknown>>): void {
  problems.length = 0;
  for (const [name, mod] of Object.entries(modules)) {
    walk(name, mod.es, mod.en);
  }
  if (problems.length > 0) {
    throw new Error(
      'Paridad ES/EN rota — la web no se construye hasta arreglarlo:\n  ' +
        problems.join('\n  ')
    );
  }
}

// Shared runtime for the page components in src/pages.
//
// Every page is a class extending DCLogic. The class keeps its state, handlers
// and lifecycle methods; `renderVals()` returns the values its template reads,
// and the template itself is attached as `Page.template = (v) => <jsx/>`.
import React from 'react';
import { ASSETS } from './assets.js';

export class DCLogic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderVals() {
    return {};
  }

  render() {
    const template = this.constructor.template;
    return template ? template(this.renderVals() || {}) : null;
  }
}

/** Text value for a {{hole}}: nothing for null/undefined/booleans. */
export function T(x) {
  if (x == null || x === false || x === true) return '';
  return x;
}

/** List for <sc-for>: anything that is not an array renders nothing. */
export function L(x) {
  return Array.isArray(x) ? x : [];
}

const BLOB_RE = /\/_blob\/([0-9a-f]{32})/g;

/** Rewrites design-asset URLs (/_blob/<id>) to the files in public/images. */
export function A(x) {
  if (typeof x !== 'string' || x.indexOf('/_blob/') === -1) return x;
  return x.replace(BLOB_RE, (m, id) => (ASSETS[id] ? '/images/' + ASSETS[id] : m));
}

const styleCache = new Map();

function camel(prop) {
  if (prop.startsWith('--')) return prop;
  if (prop.startsWith('-ms-')) prop = prop.slice(1);
  return prop.replace(/-([a-z])/g, (m, c) => c.toUpperCase());
}

/** Splits a CSS declaration list on `;`, ignoring ones inside quotes or parens. */
export function parseStyle(str) {
  const out = {};
  let depth = 0;
  let quote = null;
  let start = 0;
  const push = (decl) => {
    const i = decl.indexOf(':');
    if (i === -1) return;
    const k = decl.slice(0, i).trim();
    const val = decl.slice(i + 1).trim();
    if (k) out[camel(k.toLowerCase().startsWith('--') ? k : k.toLowerCase())] = A(val);
  };
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (quote) {
      if (c === quote) quote = null;
    } else if (c === '"' || c === "'") quote = c;
    else if (c === '(') depth++;
    else if (c === ')') depth--;
    else if (c === ';' && depth === 0) {
      push(str.slice(start, i));
      start = i + 1;
    }
  }
  push(str.slice(start));
  return out;
}

/** Style for an element: a CSS string or a style object from renderVals(). */
export function S(x) {
  if (x == null || x === '') return undefined;
  if (typeof x === 'string') {
    let hit = styleCache.get(x);
    if (!hit) {
      hit = parseStyle(x);
      if (styleCache.size > 2000) styleCache.clear();
      styleCache.set(x, hit);
    }
    return hit;
  }
  if (typeof x === 'object') {
    let changed = false;
    const o = {};
    for (const k in x) {
      const val = typeof x[k] === 'string' ? A(x[k]) : x[k];
      if (val !== x[k]) changed = true;
      o[k] = val;
    }
    return changed ? o : x;
  }
  return undefined;
}

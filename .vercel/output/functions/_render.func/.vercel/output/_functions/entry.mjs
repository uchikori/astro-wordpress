import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_SSyCbQe8.mjs';
import { manifest } from './manifest_CpkgtVP2.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/page-data/_---uri_.json.astro.mjs');
const _page2 = () => import('./pages/_---slug_.astro.mjs');
const _page3 = () => import('./pages/_---ssr_.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/page-data/[...uri].json.ts", _page1],
    ["src/pages/[...slug].astro", _page2],
    ["src/pages/[...ssr].astro", _page3]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "a21d27a6-1ecf-4ee7-b160-ea76f2ecb4d6",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

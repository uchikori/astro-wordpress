import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D_qYvWwf.mjs';
import { manifest } from './manifest_D821E88F.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/page-data/properties.json.astro.mjs');
const _page3 = () => import('./pages/api/page-data/_---uri_.json.astro.mjs');
const _page4 = () => import('./pages/api/page-data/_---urissr_.json.astro.mjs');
const _page5 = () => import('./pages/_---slug_.astro.mjs');
const _page6 = () => import('./pages/_---ssr_.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/page-data/properties.json.ts", _page2],
    ["src/pages/api/page-data/[...uri].json.ts", _page3],
    ["src/pages/api/page-data/[...urissr].json.ts", _page4],
    ["src/pages/[...slug].astro", _page5],
    ["src/pages/[...ssr].astro", _page6]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "14d5aa89-ba66-4352-9e53-15cf8614a9e8",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

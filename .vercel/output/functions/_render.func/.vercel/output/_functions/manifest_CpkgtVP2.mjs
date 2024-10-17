import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_FLF8pFtN.mjs';
import { d as decodeKey } from './chunks/astro/server_DjZn0K9P.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Astro/astro-wordpress/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/[...ssr]","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/?$","segments":[[{"content":"...ssr","dynamic":true,"spread":true}]],"params":["...ssr"],"component":"src/pages/[...ssr].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Astro/astro-wordpress/src/pages/[...slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/api/page-data/[...uri].json@_@ts":"pages/api/page-data/_---uri_.json.astro.mjs","\u0000@astro-page:src/pages/[...ssr]@_@astro":"pages/_---ssr_.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/[...slug]@_@astro":"pages/_---slug_.astro.mjs","D:/Astro/astro-wordpress/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","D:/Astro/astro-wordpress/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_CpkgtVP2.mjs","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/poppins-latin-ext-500-normal.H4Q0z8D2.woff2","/_astro/poppins-latin-400-normal.cpxAROuN.woff2","/_astro/poppins-latin-ext-400-normal.CIpeJEZw.woff2","/_astro/poppins-latin-ext-300-normal.7Zg2msWE.woff2","/_astro/poppins-latin-ext-100-normal.BYGiT0vt.woff2","/_astro/poppins-latin-300-normal.Dku2WoCh.woff2","/_astro/poppins-latin-600-normal.zEkxB9Mr.woff2","/_astro/poppins-latin-500-normal.C8OXljZJ.woff2","/_astro/poppins-latin-100-normal.CY-M_i9k.woff2","/_astro/poppins-latin-700-normal.Qrb0O0WB.woff2","/_astro/poppins-latin-800-normal.Bd8-pIP1.woff2","/_astro/poppins-latin-ext-200-normal.UNJ7d0fR.woff2","/_astro/poppins-latin-ext-600-normal.Cn4C8475.woff2","/_astro/poppins-latin-900-normal.BmL1zqjw.woff2","/_astro/poppins-latin-ext-100-italic.BPM7Osc_.woff2","/_astro/poppins-latin-200-normal.B8tqA5oA.woff2","/_astro/poppins-latin-ext-800-normal.CTiPmeYq.woff2","/_astro/poppins-latin-ext-700-normal.DDaViAzG.woff2","/_astro/poppins-latin-ext-900-normal.Bz6n_4o4.woff2","/_astro/poppins-latin-ext-200-italic.BPNuh9KU.woff2","/_astro/poppins-latin-200-italic.CeOz3Dg2.woff2","/_astro/poppins-latin-ext-400-italic.BiCGV3eO.woff2","/_astro/poppins-latin-ext-300-italic.DdDvTq5-.woff2","/_astro/poppins-latin-400-italic.B4GYq972.woff2","/_astro/poppins-latin-300-italic.EWCPeN2Y.woff2","/_astro/poppins-latin-500-italic.o28Otv0U.woff2","/_astro/poppins-latin-ext-600-italic.BqeDa496.woff2","/_astro/poppins-latin-ext-500-italic.CwrTHwbn.woff2","/_astro/poppins-latin-700-italic.RKf6esGj.woff2","/_astro/poppins-latin-ext-900-italic.D1-DXUS9.woff2","/_astro/poppins-latin-ext-700-italic.BAdhB_WS.woff2","/_astro/poppins-latin-600-italic.CZ4wqKBi.woff2","/_astro/poppins-latin-900-italic.DzxCezIC.woff2","/_astro/poppins-latin-ext-800-italic.DnE_k2k8.woff2","/_astro/poppins-latin-800-italic.B-yag6pl.woff2","/_astro/poppins-latin-100-italic.DuNkhShJ.woff2","/_astro/poppins-latin-400-normal.BOb3E3N0.woff","/_astro/poppins-latin-ext-400-normal.Ce_uWq1Z.woff","/_astro/poppins-latin-ext-300-normal.C9p7gvmA.woff","/_astro/poppins-latin-ext-100-normal.DCo_AZ8Z.woff","/_astro/poppins-latin-300-normal.DCNuMXUj.woff","/_astro/poppins-latin-500-normal.DGXqpDMm.woff","/_astro/poppins-latin-ext-200-normal.DXUl_1bM.woff","/_astro/poppins-latin-100-normal.PssVh1UL.woff","/_astro/poppins-latin-ext-500-normal.Bl1-S02S.woff","/_astro/poppins-latin-ext-600-normal.DB6FJURc.woff","/_astro/poppins-latin-900-normal.By5LX1Cr.woff","/_astro/poppins-latin-700-normal.BVuQR_eA.woff","/_astro/poppins-latin-600-normal.BJdTmd5m.woff","/_astro/poppins-latin-800-normal.YoItoZZV.woff","/_astro/poppins-latin-ext-800-normal.Dc5wQtSP.woff","/_astro/poppins-latin-ext-900-normal.CdmgbwZ2.woff","/_astro/poppins-latin-200-normal.BxK-3Qw6.woff","/_astro/poppins-latin-ext-700-normal.CE2WFKmF.woff","/_astro/poppins-latin-200-italic.BgWkyn91.woff","/_astro/poppins-latin-ext-300-italic.CBzyU4Pf.woff","/_astro/poppins-latin-400-italic.BPejoDS-.woff","/_astro/poppins-latin-300-italic.4WBEAciR.woff","/_astro/poppins-latin-ext-200-italic.C2FOosxT.woff","/_astro/poppins-latin-500-italic.Ce_qjtl5.woff","/_astro/poppins-latin-ext-600-italic.C7MQPb_A.woff","/_astro/poppins-latin-ext-400-italic.gsPYOGqV.woff","/_astro/poppins-latin-ext-100-italic.CnTqRwhJ.woff","/_astro/poppins-latin-ext-500-italic.jdc8Bv4M.woff","/_astro/poppins-latin-700-italic.CW91C-LJ.woff","/_astro/poppins-latin-ext-900-italic.NarrncdC.woff","/_astro/poppins-latin-ext-700-italic.WKTwQMp8.woff","/_astro/poppins-latin-600-italic.BhOZippK.woff","/_astro/poppins-latin-900-italic.CbHLOeDC.woff","/_astro/poppins-latin-ext-800-italic.Bf9uxA7a.woff","/_astro/poppins-latin-800-italic.C1L4USJS.woff","/_astro/poppins-latin-100-italic.C5n1jwGB.woff","/_astro/_slug_.DcfbMdFo.css","/favicon.svg","/_astro/client.5I5BMcNS.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"UMVqNvxNsozIpeiDz6TcPJ87szpMFkrFRLsvYW14VEE=","experimentalEnvGetSecretEnabled":false});

export { manifest };

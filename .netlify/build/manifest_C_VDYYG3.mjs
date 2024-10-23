import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { g as decodeKey } from './chunks/astro/server_J_2pVC_J.mjs';

const NOOP_MIDDLEWARE_FN = (_, next) => next();

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

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
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
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
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/paulo/Documents/Integrador/portafolio/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DTWY9ZnP.js"}],"styles":[{"type":"external","src":"/_astro/aboutme.C2pstCP3.css"},{"type":"inline","content":"@import\"https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap\";[data-astro-cid-ysruilfg]{box-sizing:border-box;margin:0;padding:0}body{font-family:Poppins,sans-serif;font-size:1.2rem;min-height:100vh;padding:20px;background-color:#f5f5f5}.grid-container[data-astro-cid-ysruilfg]{display:grid;gap:20px;grid-template-columns:repeat(12,1fr);max-width:1200px;margin:auto}.grid-item[data-astro-cid-ysruilfg]{box-shadow:0 4px 20px #0000001a;border-radius:10px;padding:20px;background-color:#000;transition:transform .3s,box-shadow .3s;text-align:center}.grid-item[data-astro-cid-ysruilfg]:hover{transform:translateY(-5px);box-shadow:0 8px 30px #0003}.header[data-astro-cid-ysruilfg]{margin-top:5rem;grid-column:span 12;background-color:#36a2ebe6;color:#fff;padding:40px 20px;border-radius:10px}.navbar[data-astro-cid-ysruilfg],.sidebar[data-astro-cid-ysruilfg],.main[data-astro-cid-ysruilfg],.footer[data-astro-cid-ysruilfg]{padding:20px;border-radius:10px}.certification-list[data-astro-cid-ysruilfg]{margin-left:20px;justify-content:flex-end;display:flex}.navbar[data-astro-cid-ysruilfg]{grid-column:span 8;background-color:#ff6384cc;color:#fff}.sidebar[data-astro-cid-ysruilfg]{grid-column:span 4;background:linear-gradient(to bottom,#00f,#000);color:#fff;grid-row:span 2}.main[data-astro-cid-ysruilfg]{grid-column:span 8;background:linear-gradient(to bottom,#00f,#87cefa)}.footer[data-astro-cid-ysruilfg]{grid-column:span 12;background-color:#ff9f40cc;color:#fff}h2[data-astro-cid-ysruilfg].title{margin-bottom:20px;font-weight:600;text-align:left;font-size:2.5rem}ul[data-astro-cid-ysruilfg]{list-style-type:none;padding:0;display:flex;flex-direction:column;align-items:flex-start;gap:10px}li[data-astro-cid-ysruilfg]{margin:5px 0;padding-left:10px;position:relative}.img-container[data-astro-cid-ysruilfg]{display:flex;justify-content:center;align-items:center;margin:10px 0}img[data-astro-cid-ysruilfg]{max-width:100%;height:auto;border-radius:10px}.hobbies-container[data-astro-cid-ysruilfg]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:20px;padding:10px}@media (max-width: 768px){.grid-container[data-astro-cid-ysruilfg]{grid-template-columns:1fr}.grid-item[data-astro-cid-ysruilfg]{grid-column:span 1}.hobbies-container[data-astro-cid-ysruilfg]{flex-direction:column;align-items:flex-start}ul[data-astro-cid-ysruilfg]{align-items:flex-start}}\n"}],"routeData":{"route":"/aboutme","isIndex":false,"type":"page","pattern":"^\\/aboutme\\/?$","segments":[[{"content":"aboutme","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/aboutme.astro","pathname":"/aboutme","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DTWY9ZnP.js"}],"styles":[{"type":"external","src":"/_astro/aboutme.C2pstCP3.css"},{"type":"inline","content":".svg-container[data-astro-cid-n2wrhnsw]{width:100%;height:auto;max-width:100px}.svg-container[data-astro-cid-n2wrhnsw] svg[data-astro-cid-n2wrhnsw]{width:100%;height:auto}\n"}],"routeData":{"route":"/proyects_externos","isIndex":false,"type":"page","pattern":"^\\/proyects_externos\\/?$","segments":[[{"content":"proyects_externos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/proyects_externos.astro","pathname":"/proyects_externos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.iU2EiSZA.js"}],"styles":[{"type":"external","src":"/_astro/aboutme.C2pstCP3.css"}],"routeData":{"route":"/proyects_tecsup","isIndex":false,"type":"page","pattern":"^\\/proyects_tecsup\\/?$","segments":[[{"content":"proyects_tecsup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/proyects_tecsup.astro","pathname":"/proyects_tecsup","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DTWY9ZnP.js"}],"styles":[{"type":"external","src":"/_astro/aboutme.C2pstCP3.css"},{"type":"inline","content":"@keyframes scroll{0%{transform:translate(0)}to{transform:translate(-3000px)}}.slider[data-astro-cid-xtuj4xfy]{background:transparent;box-shadow:0 10px 20px -5px #00000020;height:100px;margin:auto;overflow:hidden;position:relative;width:100%}.slider[data-astro-cid-xtuj4xfy]:before,.slider[data-astro-cid-xtuj4xfy]:after{background:transparent;content:\"\";height:100px;position:absolute;width:200px;z-index:2}.slider[data-astro-cid-xtuj4xfy]:after{right:0;top:0;transform:rotate(180deg)}.slider[data-astro-cid-xtuj4xfy]:before{left:0;top:0}.slide-track[data-astro-cid-xtuj4xfy]{display:flex;animation:scroll 20s linear infinite;width:4250px}.slide[data-astro-cid-xtuj4xfy]{display:flex;justify-content:center;align-items:center;height:100px;width:250px}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/paulo/Documents/Integrador/portafolio/src/pages/aboutme.astro",{"propagation":"none","containsHead":true}],["C:/Users/paulo/Documents/Integrador/portafolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/paulo/Documents/Integrador/portafolio/src/pages/proyects_externos.astro",{"propagation":"none","containsHead":true}],["C:/Users/paulo/Documents/Integrador/portafolio/src/pages/proyects_tecsup.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/aboutme@_@astro":"pages/aboutme.astro.mjs","\u0000@astro-page:src/pages/proyects_externos@_@astro":"pages/proyects_externos.astro.mjs","\u0000@astro-page:src/pages/proyects_tecsup@_@astro":"pages/proyects_tecsup.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_C_VDYYG3.mjs","C:/Users/paulo/Documents/Integrador/portafolio/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","/astro/hoisted.js?q=0":"_astro/hoisted.iU2EiSZA.js","/astro/hoisted.js?q=1":"_astro/hoisted.DTWY9ZnP.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/onest-cyrillic-wght-normal.CiQTuMoU.woff2","/_astro/onest-latin-ext-wght-normal.0BME-IPC.woff2","/_astro/onest-latin-wght-normal.DJzCSW5i.woff2","/_astro/aboutme.C2pstCP3.css","/favicon.svg","/_astro/client.5I5BMcNS.js","/_astro/hoisted.DTWY9ZnP.js","/_astro/hoisted.iU2EiSZA.js","/images/blandas.png","/images/certificado1.png","/images/codeclimber.png","/images/codefun.png","/images/habiliades.png","/images/historia.png","/images/pasatiempos.png","/images/vsg/calculadora-python/inicio blanco.PNG","/images/vsg/creador de facturas (svg)/factura.PNG","/images/vsg/encriptacion de letras/inicio.PNG","/images/vsg/inicio front/inicio.PNG","/images/vsg/sistema de gestion de estudiantes(svg)/inicio.PNG","/images/vsg/sistema de gestion de eventos(svg(/otros usuarios.PNG"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"L4+SQPl0tB4+0J72V4W9wXQqrMswlQbXcG2yZ4fgLZg=","experimentalEnvGetSecretEnabled":false});

export { manifest };

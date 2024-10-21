import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Di7_EmxV.mjs';
import 'kleur/colors';
import { $ as $$BlockRenderer } from '../chunks/BlockRenderer_B4kLWq83.mjs';
import { $ as $$CommonHead } from '../chunks/CommonHead_Dym4zYWV.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astro-wordpress-lime.vercel.app");
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { ssr } = Astro2.params;
  const response = await fetch(`${Astro2.url.origin}/api/page-data/${ssr ? `/${ssr}` : ""}.json`);
  const { data } = await response.json();
  if (!data) {
    return Astro2.redirect("/404");
  }
  const { blocks } = data;
  const { title, metaDesc } = data.seo || {};
  return renderTemplate`<html lang="ja"> ${renderComponent($$result, "CommonHead", $$CommonHead, { "title": title || "", "description": metaDesc || "" })}${maybeRenderHead()}<body> ${renderComponent($$result, "BlockRenderer", $$BlockRenderer, { "blocks": blocks, "postId": data.databaseId })} </body></html>`;
}, "D:/Astro/astro-wordpress/src/pages/[...ssr].astro", void 0);

const $$file = "D:/Astro/astro-wordpress/src/pages/[...ssr].astro";
const $$url = "/[...ssr]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

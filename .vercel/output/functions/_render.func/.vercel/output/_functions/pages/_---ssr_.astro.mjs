import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as createAstro } from '../chunks/astro/server_D6AYqLb_.mjs';
import 'kleur/colors';
import { $ as $$BlockRenderer } from '../chunks/BlockRenderer_BEPQhJ-c.mjs';
import { $ as $$CommonHead } from '../chunks/CommonHead_Byl7XkLm.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
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

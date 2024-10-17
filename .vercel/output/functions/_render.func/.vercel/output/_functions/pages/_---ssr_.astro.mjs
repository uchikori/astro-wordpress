import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DjZn0K9P.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div>this is the ssr page</div>`;
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

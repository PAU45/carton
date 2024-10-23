import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, a as addAttribute, f as renderHead, d as renderComponent, e as renderSlot } from './astro/server_J_2pVC_J.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                           */
import 'clsx';

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const currentPage = Astro2.props.currentPage || "other";
  return renderTemplate`${maybeRenderHead()}<header class="bg-black text-white p-4 fixed w-full top-0 z-50"> <div class="container mx-auto flex justify-between items-center"> <div class="text-lg font-bold">Mi Portafolio v1.0</div> <button id="menu-btn" class="md:hidden"> <svg id="menu-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path> </svg> <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <nav class="hidden md:flex space-x-4"> <a href="/aboutme" class="hover:underline">Sobre mí</a> <a href="/#experiencia" class="hover:underline">Experiencia</a> <a href="/#proyectos" class="hover:underline">Proyectos</a> ${currentPage !== "index" && renderTemplate`<a href="/" class="hover:underline">Inicio</a>`} </nav> </div> <div id="menu" class="absolute top-full left-0 w-full hidden md:hidden flex flex-col items-center py-5 bg-black text-white z-50"> <a href="/aboutme" class="block py-2 hover:underline">Sobre mí</a> <a href="/#experiencia" class="block py-2 hover:underline">Experiencia</a> <a href="/#proyectos" class="block py-2 hover:underline">Proyectos</a> ${currentPage !== "index" && renderTemplate`<a href="/" class="block py-2 hover:underline">Inicio</a>`} </div> </header> `;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title, currentPage } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> ${renderComponent($$result, "Header", $$Header, { "currentPage": currentPage })} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/layouts/Layout.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800"> <div class="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center"> <ul class="flex flex-wrap justify-center items-center text-sm font-medium text-gray-500 dark:text-gray-400"> <li> <a href="#" class="hover:underline mx-4">Acerca de mí</a> </li> <li> <a href="https://protecciondatos-lopd.com/empresas/politica-de-privacidad-web/" class="hover:underline mx-4">Políticas de Privacidad</a> </li> <li> <a href="https://blog.orange.es/consejos-y-trucos/que-son-las-licencias-de-software-y-que-tipos-hay/" class="hover:underline mx-4">Licencias</a> </li> <li> <a href="#" class="hover:underline mx-4">Contacto</a> </li> </ul> <p class="text-xs text-gray-400 mt-2">© 2024 Todos los derechos reservados.</p> </div> </footer>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/Footer.astro", void 0);

export { $$Footer as $, $$Layout as a };

/* empty css                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent, b as createAstro } from '../chunks/astro/server_J_2pVC_J.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Footer, a as $$Layout } from '../chunks/Footer_BZU-t1UO.mjs';
import { $ as $$Php, a as $$Laravel, b as $$Mysql, c as $$Vite } from '../chunks/Vite_BxKs30eU.mjs';
import { b as $$JS, a as $$CSS, $ as $$Html } from '../chunks/JS_BcBZ9OEr.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Blogitem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blogitem;
  const { title, description, img, languages, githubLink } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6 mb-6 max-w-4xl w-full mx-auto transition-transform transform hover:scale-105"> <h2 class="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors duration-300 hover:text-blue-500">${title}</h2> <img class="rounded-lg mb-4 w-full"${addAttribute(img, "src")}${addAttribute(title, "alt")}> <p class="mb-4 font-normal text-gray-700 dark:text-gray-400 transition-colors duration-300 hover:text-blue-500">${description}</p> <div class="mb-4"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Lenguajes Utilizados:</h3> <div class="flex space-x-2"> ${languages.map((LanguageIcon) => renderTemplate`<div class="transition-transform duration-300 hover:scale-125"> ${renderComponent($$result, "LanguageIcon", LanguageIcon, { "class": "w-8 h-8 text-gray-700 dark:text-gray-400" })} </div>`)} </div> </div> <a${addAttribute(githubLink, "href")} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-transform duration-300 transform hover:scale-105">
Ver en GitHub
<svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/blogitem.astro", void 0);

const $$Bloglist = createComponent(($$result, $$props, $$slots) => {
  const blogPosts = [
    {
      title: "Proyecto 1: CodeClimber",
      description: "CodeClimber es una plataforma en l\xEDnea que ofrece cursos de programaci\xF3n gratuitos y de pago. Facilita la compra de cursos premium con m\xE9todos de pago seguros y variados. La interfaz es intuitiva y \xE1gil, mejorando la experiencia de los estudiantes. Los administradores y profesores tienen acceso a herramientas anal\xEDticas para seguir el progreso de los estudiantes y el rendimiento de los cursos, optimizando la ense\xF1anza y mejorando la calidad educativa continuamente.",
      img: "/images/codeclimber.png",
      // Ruta de la imagen corregida
      languages: [$$Php, $$Laravel, $$JS, $$CSS, $$Mysql, $$Vite],
      githubLink: "https://github.com/Blendingcolor/CodeClimberP"
    },
    {
      title: "Proyecto 2: EduFun",
      description: "EduFun es una plataforma interactiva dise\xF1ada para la ense\xF1anza del idioma ingl\xE9s a trav\xE9s de juegos. Su objetivo es hacer el aprendizaje divertido y accesible para los ni\xF1os, utilizando actividades l\xFAdicas que fomentan la participaci\xF3n activa y el inter\xE9s continuo.",
      img: "/images/codefun.png",
      // Ruta de la imagen corregida
      languages: [$$Php, $$Html, $$CSS, $$JS, $$Mysql],
      githubLink: "https://github.com/PAU45/PROYECTO-DE-EDUFUN"
    }
    // Agrega más proyectos según sea necesario
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-8 mt-24 max-w-4xl mx-auto"> ${blogPosts.map((post) => renderTemplate`${renderComponent($$result, "BlogItem", $$Blogitem, { "title": post.title, "description": post.description, "img": post.img, "languages": post.languages, "githubLink": post.githubLink })}`)} </div>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/bloglist.astro", void 0);

const $$ProyectsTecsup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Proyectos Tecsup - Blog", "description": "Blog de proyectos realizados en Tecsup", "currentPage": "proyectos_tecsup" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-2 mt-24"> <section class="py-12"> <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white leading-tight transition-transform transform hover:scale-105 hover:text-blue-500 duration-300 ease-in-out animate-pulse">
Proyectos De Tecsup
</h2> ${renderComponent($$result2, "BlogList", $$Bloglist, {})} </section> ${renderComponent($$result2, "Footer", $$Footer, {})} </main>  ` })}`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/pages/proyects_tecsup.astro", void 0);

const $$file = "C:/Users/paulo/Documents/Integrador/portafolio/src/pages/proyects_tecsup.astro";
const $$url = "/proyects_tecsup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProyectsTecsup,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

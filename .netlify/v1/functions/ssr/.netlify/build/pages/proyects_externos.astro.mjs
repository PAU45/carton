/* empty css                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent, b as createAstro, s as spreadAttributes } from '../chunks/astro/server_J_2pVC_J.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Footer, a as $$Layout } from '../chunks/Footer_BZU-t1UO.mjs';
/* empty css                                             */
import 'clsx';
import { $ as $$Sqlite, a as $$Django, b as $$React, c as $$Tailwinds } from '../chunks/Tailwinds_DHKQrTBM.mjs';
import { $ as $$Html, a as $$CSS, b as $$JS } from '../chunks/JS_BcBZ9OEr.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ExternosItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ExternosItem;
  const { title, description, videos, languages, projectLink } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6 mb-6 max-w-full w-full mx-auto transition-transform transform hover:scale-105"> <h2 class="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors duration-300 hover:text-blue-500">${title}</h2> <div class="grid grid-cols-1 gap-4 mb-4"> ${videos.map((video) => renderTemplate`<div class="relative group h-64 overflow-hidden rounded-lg shadow-md"> ${video.type === "youtube" ? renderTemplate`<iframe class="w-full h-full"${addAttribute(video.src, "src")}${addAttribute(video.alt, "title")} style="border:0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : renderTemplate`<video class="w-full h-full object-cover" controls style="max-width: 500px;"> <source${addAttribute(video.src, "src")} type="video/mp4"> ${video.alt} </video>`} </div>`)} </div> <p class="mb-4 font-normal text-gray-700 dark:text-gray-400 transition-colors duration-300 hover:text-blue-500">${description}</p> <div class="mb-4"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Lenguajes Utilizados:</h3> <div class="flex space-x-2"> ${languages.map((LanguageIcon) => renderTemplate`<div class="transition-transform duration-300 hover:scale-125"> ${renderComponent($$result, "LanguageIcon", LanguageIcon, { "class": "w-8 h-8 text-gray-700 dark:text-gray-400" })} </div>`)} </div> </div> <a${addAttribute(projectLink, "href")} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-transform duration-300 transform hover:scale-105">
Ver Proyecto
<svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/externosItem.astro", void 0);

const $$Astro = createAstro();
const $$Python = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Python;
  return renderTemplate`${maybeRenderHead()}<div class="svg-container" data-astro-cid-n2wrhnsw> <svg${spreadAttributes(Astro2.props, void 0, { "class": "astro-n2wrhnsw" })} xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" fill="none" viewBox="0 0 100 100" data-astro-cid-n2wrhnsw> <path fill="url(#a)" d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z" data-astro-cid-n2wrhnsw></path> <path fill="url(#b)" d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z" data-astro-cid-n2wrhnsw></path> <defs data-astro-cid-n2wrhnsw> <linearGradient id="a" x1="19.075" x2="34.898" y1="18.782" y2="34.658" gradientUnits="userSpaceOnUse" data-astro-cid-n2wrhnsw> <stop stop-color="#387EB8" data-astro-cid-n2wrhnsw></stop> <stop offset="1" stop-color="#366994" data-astro-cid-n2wrhnsw></stop> </linearGradient> <linearGradient id="b" x1="28.809" x2="45.803" y1="28.882" y2="45.163" gradientUnits="userSpaceOnUse" data-astro-cid-n2wrhnsw> <stop stop-color="#FFE052" data-astro-cid-n2wrhnsw></stop> <stop offset="1" stop-color="#FFC331" data-astro-cid-n2wrhnsw></stop> </linearGradient> </defs> </svg> </div>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/icons/Python.astro", void 0);

const $$Externoslist = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "Sistema de Gestion de Estudiantes",
      description: "Este proyecto es un sistema completo para gestionar estudiantes, desarrollado utilizando Python y SQLite. Permite a los usuarios registrar, actualizar y eliminar informaci\xF3n de estudiantes. Adem\xE1s, incluye funcionalidades para la gesti\xF3n de cursos y calificaciones.",
      videos: [
        { src: "https://www.youtube.com/embed/9wyZwnOc7yM", alt: "Sistema de Gestion de Estudiantes", type: "youtube" }
      ],
      languages: [$$Python, $$Sqlite],
      projectLink: "https://github.com/PAU45/sistema-de-notas.git",
      anchor: "proyecto1"
    },
    {
      title: "Encriptador de Textos",
      description: "Esta aplicaci\xF3n web permite encriptar y desencriptar textos utilizando HTML, CSS y JavaScript. Es ideal para proteger informaci\xF3n sensible y aprender sobre t\xE9cnicas b\xE1sicas de encriptaci\xF3n. La interfaz es intuitiva y f\xE1cil de usar.",
      videos: [
        { src: "https://www.youtube.com/embed/c1kJ2cOuz1o", alt: "Encriptacion de Letras", type: "youtube" }
      ],
      languages: [$$Html, $$CSS, $$JS],
      projectLink: "https://github.com/PAU45/encriptacion-de-letras.git",
      anchor: "proyecto2"
    },
    {
      title: "Calculadora de Python",
      description: "Una calculadora desarrollada en Python que permite realizar operaciones matem\xE1ticas b\xE1sicas. Este proyecto es una excelente manera de aprender sobre la l\xF3gica de programaci\xF3n y el manejo de funciones en Python.",
      videos: [
        { src: "https://www.youtube.com/embed/IvyVVCykx-Y", alt: "Calculadora de Python", type: "youtube" }
      ],
      languages: [$$Python],
      projectLink: "https://github.com/PAU45/calculadora-python.git",
      anchor: "proyecto3"
    },
    {
      title: "Creador de Facturas",
      description: "Aplicaci\xF3n para crear y gestionar facturas, desarrollada utilizando Django, HTML, CSS y SQLite. Permite a los usuarios generar facturas detalladas, gestionar clientes y productos, y mantener un registro de todas las transacciones.",
      videos: [
        { src: "https://www.youtube.com/embed/UGIRHIcTocY", alt: "Creador de Facturas", type: "youtube" }
      ],
      languages: [$$Django, $$Html, $$CSS, $$Sqlite],
      projectLink: "https://github.com/PAU45/lab06.git",
      anchor: "proyecto4"
    },
    {
      title: "Sistema de Gestion de Eventos",
      description: "Este sistema permite gestionar eventos, incluyendo la creaci\xF3n, actualizaci\xF3n y eliminaci\xF3n de eventos. Desarrollado con Django, HTML, CSS y SQLite, facilita la organizaci\xF3n y seguimiento de eventos, as\xED como la gesti\xF3n de asistentes.",
      videos: [
        { src: "https://www.youtube.com/embed/wQImHuWyhmk", alt: "Sistema de Gestion de Eventos", type: "youtube" }
      ],
      languages: [$$Django, $$Html, $$CSS, $$Sqlite],
      projectLink: "https://github.com/PAU45/lab07django.git",
      anchor: "proyecto5"
    },
    {
      title: "Front de Proyecto Integrador",
      description: "Este proyecto es el frontend de un proyecto integrador, desarrollado utilizando React, HTML y Tailwind CSS. La interfaz es moderna y responsiva, proporcionando una excelente experiencia de usuario. Incluye componentes reutilizables y un dise\xF1o limpio.",
      videos: [
        { src: "https://www.youtube.com/embed/v9IfUrLcX-Q", alt: "Front de Proyecto Integrador", type: "youtube" }
      ],
      languages: [$$React, $$Html, $$Tailwinds],
      projectLink: "https://github.com/PAU45/inicio-front-caserito.git",
      anchor: "proyecto6"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center gap-6"> ${projects.map((project) => renderTemplate`<div${addAttribute(project.anchor, "id")} class="w-full max-w-2xl"> ${renderComponent($$result, "ExternosItem", $$ExternosItem, { "title": project.title, "description": project.description, "videos": project.videos, "languages": project.languages, "projectLink": project.projectLink })} </div>`)} </div>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/externoslist.astro", void 0);

const $$ProyectsExternos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Proyectos Externos", "description": "Lista de proyectos externos realizados", "currentPage": "proyectos_externos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-2 mt-24"> <section class="py-12"> <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white leading-tight transition-transform transform hover:scale-105 hover:text-blue-500 duration-300 ease-in-out animate-pulse">
Proyectos Externos
</h2> ${renderComponent($$result2, "ExternosList", $$Externoslist, {})} </section> ${renderComponent($$result2, "Footer", $$Footer, {})} </main> ` })}`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/pages/proyects_externos.astro", void 0);

const $$file = "C:/Users/paulo/Documents/Integrador/portafolio/src/pages/proyects_externos.astro";
const $$url = "/proyects_externos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProyectsExternos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

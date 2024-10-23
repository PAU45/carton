/* empty css                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, a as addAttribute, b as createAstro, s as spreadAttributes, d as renderComponent } from '../chunks/astro/server_J_2pVC_J.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Footer, a as $$Layout } from '../chunks/Footer_BZU-t1UO.mjs';
import 'clsx';
import { c as $$Tailwinds, b as $$React, a as $$Django, $ as $$Sqlite } from '../chunks/Tailwinds_DHKQrTBM.mjs';
import { a as $$Laravel, b as $$Mysql, $ as $$Php, c as $$Vite } from '../chunks/Vite_BxKs30eU.mjs';
import { b as $$JS, a as $$CSS, $ as $$Html } from '../chunks/JS_BcBZ9OEr.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center "> <span class="relative inline-flex overflow-hidden rounded-full p-[1px]"> <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span> <div class="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap"> ${renderSlot($$result, $$slots["default"])} </div> </span> </div>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/Badge.astro", void 0);

const $$Astro$d = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`w-full mx-auto lg:w-[740px] ${className || ""}`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/SectionContainer.astro", void 0);

const $$Astro$c = createAstro();
const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2"></path></svg>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/icons/LinkedIn.astro", void 0);

const $$Astro$b = createAstro();
const $$SocialPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$SocialPill;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`
    bg-white/5
    border-white/10 
    rounded-full 
    border 
   
    flex justify-center 
    items-center 
    gap-x-2 
    py-1
    px-2
    md:py-2
    md:px-4
    text-xs 
    md:text-base
    transition
    hover:scale-110 hover:bg-white/10
    `, "class")}${spreadAttributes(Astro2.props)} target="_blank" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/SocialPill.astro", void 0);

const $$Astro$a = createAstro();
const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 250" width="50" height="50" fill="#fff" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path> </svg>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/icons/GitHub.astro", void 0);

const $$Astro$9 = createAstro();
const $$Gmail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Gmail;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 49.4 512 399.42"> <g fill="none" fill-rule="evenodd"> <g fill-rule="nonzero"> <path fill="#4285f4" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"></path> <path fill="#34a853" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"></path> <path fill="#fbbc04" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"></path> </g> <path fill="#ea4335" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"></path> <path fill="#c5221f" fill-rule="nonzero" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"></path> </g> </svg>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/icons/Gmail.astro", void 0);

const $$Astro$8 = createAstro();
const $$Whatsapp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Whatsapp;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 259" width="100" height="100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="m67.663 221.823 4.185 2.093c17.44 10.463 36.971 15.346 56.503 15.346 61.385 0 111.609-50.224 111.609-111.609 0-29.297-11.859-57.897-32.785-78.824-20.927-20.927-48.83-32.785-78.824-32.785-61.385 0-111.61 50.224-110.912 112.307 0 20.926 6.278 41.156 16.741 58.594l2.79 4.186-11.16 41.156 41.853-10.464Z" fill="#00E676"></path> <path d="M219.033 37.668C195.316 13.254 162.531 0 129.048 0 57.898 0 .698 57.897 1.395 128.35c0 22.322 6.278 43.947 16.742 63.478L0 258.096l67.663-17.439c18.834 10.464 39.76 15.347 60.688 15.347 70.453 0 127.653-57.898 127.653-128.35 0-34.181-13.254-66.269-36.97-89.986ZM129.048 234.38c-18.834 0-37.668-4.882-53.712-14.648l-4.185-2.093-40.458 10.463 10.463-39.76-2.79-4.186C7.673 134.63 22.322 69.058 72.546 38.365c50.224-30.692 115.097-16.043 145.79 34.181 30.692 50.224 16.043 115.097-34.18 145.79-16.045 10.463-35.576 16.043-55.108 16.043Zm61.385-77.428-7.673-3.488s-11.16-4.883-18.136-8.371c-.698 0-1.395-.698-2.093-.698-2.093 0-3.488.698-4.883 1.396 0 0-.697.697-10.463 11.858-.698 1.395-2.093 2.093-3.488 2.093h-.698c-.697 0-2.092-.698-2.79-1.395l-3.488-1.395c-7.673-3.488-14.648-7.674-20.229-13.254-1.395-1.395-3.488-2.79-4.883-4.185-4.883-4.883-9.766-10.464-13.253-16.742l-.698-1.395c-.697-.698-.697-1.395-1.395-2.79 0-1.395 0-2.79.698-3.488 0 0 2.79-3.488 4.882-5.58 1.396-1.396 2.093-3.488 3.488-4.883 1.395-2.093 2.093-4.883 1.395-6.976-.697-3.488-9.068-22.322-11.16-26.507-1.396-2.093-2.79-2.79-4.883-3.488H83.01c-1.396 0-2.79.698-4.186.698l-.698.697c-1.395.698-2.79 2.093-4.185 2.79-1.395 1.396-2.093 2.79-3.488 4.186-4.883 6.278-7.673 13.951-7.673 21.624 0 5.58 1.395 11.161 3.488 16.044l.698 2.093c6.278 13.253 14.648 25.112 25.81 35.575l2.79 2.79c2.092 2.093 4.185 3.488 5.58 5.58 14.649 12.557 31.39 21.625 50.224 26.508 2.093.697 4.883.697 6.976 1.395h6.975c3.488 0 7.673-1.395 10.464-2.79 2.092-1.395 3.487-1.395 4.882-2.79l1.396-1.396c1.395-1.395 2.79-2.092 4.185-3.487 1.395-1.395 2.79-2.79 3.488-4.186 1.395-2.79 2.092-6.278 2.79-9.765v-4.883s-.698-.698-2.093-1.395Z" fill="#FFF"></path> </svg>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/icons/Whatsapp.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="text-blue-500"> <div class="container mx-auto flex flex-col items-start md:flex-row my-10 md:my-10 pb-12"> <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8"> <p class="ml-2 text-blue-300 uppercase tracking-loose">Proyectos:</p> <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 text-blue-500">Realizados en Tecsup</p> <p class="text-sm md:text-base text-blue-200 mb-4">
Breve resumen de los proyectos desarrollados en Tecsup.
</p> <a href="/proyects_tecsup" class="bg-transparent mr-auto hover:bg-blue-300 text-blue-500 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-blue-500 hover:border-transparent transition-all duration-300 ease-in-out">
Explorar Ahora
</a> </div> <div class="ml-0 md:ml-12 lg:w-2/3 sticky"> <div class="container mx-auto w-full h-full"> <div class="relative wrap overflow-hidden p-10 h-full"> <div class="border-2 border-blue-500 absolute h-full" style="right: 50%; border-radius: 1%;"></div> <div class="border-2 border-blue-500 absolute h-full" style="left: 50%; border-radius: 1%;"></div> <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"> <div class="order-1 w-5/12"></div> <div class="order-1 w-5/12 px-1 py-4 text-right"> <p class="mb-3 text-base text-blue-300">3er Ciclo, 2024</p> <h4 class="mb-3 font-bold text-lg md:text-2xl text-blue-500">CodeClimber</h4> <p class="text-sm md:text-base leading-snug text-blue-200">
Desarrollo de una web de enseñanza de programación con cursos gratuitos y de pago. Me encargué del frontend, backend y documentación.
</p> </div> </div> <div class="mb-8 flex justify-between items-center w-full right-timeline"> <div class="order-1 w-5/12"></div> <div class="order-1 w-5/12 px-1 py-4 text-left"> <p class="mb-3 text-base text-blue-300">2do Ciclo, 2023</p> <h4 class="mb-3 font-bold text-lg md:text-2xl text-blue-500">EduFun</h4> <p class="text-sm md:text-base leading-snug text-blue-200">
Página de aprendizaje de inglés mediante juegos para niños. Diseñé interfaces, implementé audios y gestioné la base de datos.
</p> </div> </div> </div> <img src="/public/images/blandas.png" class="slide justify items-center h-80 w-auto"> </div> </div> </div> </div> </section>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/experience.astro", void 0);

const $$Astro$7 = createAstro();
const $$Work = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Work;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-briefcase"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z"></path></svg>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/icons/Work.astro", void 0);

const $$Astro$6 = createAstro();
const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/icons/Code.astro", void 0);

const $$Astro$5 = createAstro();
const $$ProjectsItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ProjectsItems;
  const { title, description, image, link, anchor } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105"> <a${addAttribute(`${link}#${anchor}`, "href")} class="block overflow-hidden rounded-t-lg"> <img class="w-full h-48 object-cover"${addAttribute(image, "src")}${addAttribute(title, "alt")}> </a> <div class="p-5"> <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${title}</h5> <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${description}</p> ${link && renderTemplate`<a${addAttribute(`${link}#${anchor}`, "href")} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Saber más
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </a>`} </div> </div>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/projectsItems.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const PROJECTS = [
    {
      title: "Proyecto 1",
      description: "Sistema de Gestion de Notas",
      image: "public/images/vsg/sistema de gestion de estudiantes(svg)/inicio.PNG",
      link: "/proyects_externos",
      anchor: "proyecto1"
    },
    {
      title: "Proyecto 2",
      description: "Encriptacion de letras",
      image: "public/images/vsg/encriptacion de letras/inicio.PNG",
      link: "/proyects_externos",
      anchor: "proyecto2"
    },
    {
      title: "Proyecto 3",
      description: "Calculadora de python.",
      image: "public/images/vsg/calculadora-python/inicio blanco.PNG",
      link: "/proyects_externos",
      anchor: "proyecto3"
    },
    {
      title: "Proyecto 4",
      description: "Crear Factura de una Tienda",
      image: "public/images/vsg/creador de facturas (svg)/factura.PNG",
      link: "/proyects_externos",
      anchor: "proyecto4"
    },
    {
      title: "Proyecto 5",
      description: "Sistema de Gestion de eventos",
      image: "public/images/vsg/sistema de gestion de eventos(svg(/otros usuarios.PNG",
      link: "/proyects_externos",
      anchor: "proyecto5"
    },
    {
      title: "Proyecto 6",
      description: "front de proyecto integrador",
      image: "public/images/vsg/inicio front/inicio.PNG",
      link: "/proyects_externos",
      anchor: "proyecto6"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 my-20"> ${PROJECTS.map((project) => renderTemplate`${renderComponent($$result, "ProjectItem", $$ProjectsItems, { ...project })}`)} </div>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/projects.astro", void 0);

const $$Astro$4 = createAstro();
const $$Vue = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Vue;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 221" width="50" height="50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"> <path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z" fill="#41B883"></path> <path d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z" fill="#41B883"></path> <path d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z" fill="#35495E"></path> </svg>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/icons/Vue.astro", void 0);

const $$Astro$3 = createAstro();
const $$Node = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Node;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" fill="none" viewBox="0 0 64 64"><path fill="url(#a)" d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"></path><path fill="url(#b)" d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z"></path><defs><linearGradient id="a" x1="19.075" x2="34.898" y1="18.782" y2="34.658" gradientUnits="userSpaceOnUse"><stop stop-color="#387EB8"></stop><stop offset="1" stop-color="#366994"></stop></linearGradient><linearGradient id="b" x1="28.809" x2="45.803" y1="28.882" y2="45.163" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE052"></stop><stop offset="1" stop-color="#FFC331"></stop></linearGradient></defs></svg>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/icons/Node.astro", void 0);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="42.5" height="53.5" viewBox="0 0 85 107" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M27.5894 91.1365C22.7555 86.7178 21.3444 77.4335 23.3583 70.7072C26.8503 74.948 31.6888 76.2914 36.7005 77.0497C44.4375 78.2199 52.0359 77.7822 59.2232 74.2459C60.0454 73.841 60.8052 73.3027 61.7036 72.7574C62.378 74.714 62.5535 76.6892 62.318 78.6996C61.7452 83.5957 59.3086 87.3778 55.4332 90.2448C53.8835 91.3916 52.2437 92.4167 50.6432 93.4979C45.7262 96.8213 44.3959 100.718 46.2435 106.386C46.2874 106.525 46.3267 106.663 46.426 107C43.9155 105.876 42.0817 104.24 40.6845 102.089C39.2087 99.8193 38.5066 97.3081 38.4696 94.5909C38.4511 93.2686 38.4511 91.9345 38.2733 90.6309C37.8391 87.4527 36.3471 86.0297 33.5364 85.9478C30.6518 85.8636 28.37 87.6469 27.7649 90.4554C27.7187 90.6707 27.6517 90.8837 27.5847 91.1341L27.5894 91.1365Z" fill="white"></path> <path d="M27.5894 91.1365C22.7555 86.7178 21.3444 77.4335 23.3583 70.7072C26.8503 74.948 31.6888 76.2914 36.7005 77.0497C44.4375 78.2199 52.0359 77.7822 59.2232 74.2459C60.0454 73.841 60.8052 73.3027 61.7036 72.7574C62.378 74.714 62.5535 76.6892 62.318 78.6996C61.7452 83.5957 59.3086 87.3778 55.4332 90.2448C53.8835 91.3916 52.2437 92.4167 50.6432 93.4979C45.7262 96.8213 44.3959 100.718 46.2435 106.386C46.2874 106.525 46.3267 106.663 46.426 107C43.9155 105.876 42.0817 104.24 40.6845 102.089C39.2087 99.8193 38.5066 97.3081 38.4696 94.5909C38.4511 93.2686 38.4511 91.9345 38.2733 90.6309C37.8391 87.4527 36.3471 86.0297 33.5364 85.9478C30.6518 85.8636 28.37 87.6469 27.7649 90.4554C27.7187 90.6707 27.6517 90.8837 27.5847 91.1341L27.5894 91.1365Z" fill="url(#paint0_linear_1_59)"></path> <path d="M0 69.5866C0 69.5866 14.3139 62.6137 28.6678 62.6137L39.4901 29.1204C39.8953 27.5007 41.0783 26.3999 42.4139 26.3999C43.7495 26.3999 44.9325 27.5007 45.3377 29.1204L56.1601 62.6137C73.1601 62.6137 84.8278 69.5866 84.8278 69.5866C84.8278 69.5866 60.5145 3.35233 60.467 3.21944C59.7692 1.2612 58.5911 0 57.0029 0H27.8274C26.2392 0 25.1087 1.2612 24.3634 3.21944C24.3108 3.34983 0 69.5866 0 69.5866Z" fill="white"></path> <defs> <linearGradient id="paint0_linear_1_59" x1="22.4702" y1="107" x2="69.1451" y2="84.9468" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"></stop> <stop offset="1" stop-color="#F041FF"></stop> </linearGradient> </defs> </svg>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/icons/logo.astro", void 0);

const $$Astro$2 = createAstro();
const $$Mongodb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Mongodb;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 549" xmlns="http://www.w3.org/2000/svg" width="256" height="549" preserveAspectRatio="xMidYMid"><path fill="#01EC64" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z"></path></svg>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/icons/mongodb.astro", void 0);

const $$Astro$1 = createAstro();
const $$Springboot = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Springboot;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" width="50" height="50"><path d="M58.2 3.365a29.503 29.503 0 0 1-3.419 6.064A32.094 32.094 0 1 0 9.965 55.372l1.186 1.047a32.08 32.08 0 0 0 52.67-22.253c.875-8.17-1.524-18.51-5.62-30.8zM14.53 55.558a2.744 2.744 0 1 1-.404-3.857 2.744 2.744 0 0 1 .404 3.857zm43.538-9.61c-7.92 10.55-24.83 6.99-35.672 7.502 0 0-1.922.113-3.857.43 0 0 .73-.31 1.663-.663 7.614-2.65 11.213-3.16 15.838-5.54 8.708-4.427 17.322-14.122 19.112-24.2-3.313 9.695-13.373 18.032-22.53 21.418-6.276 2.313-17.614 4.566-17.614 4.566l-.457-.245c-7.714-3.75-7.952-20.457 6.077-25.845 6.143-2.366 12.02-1.067 18.654-2.65 7.084-1.683 15.28-6.99 18.615-13.916 3.73 11.08 8.224 28.422.166 39.15z" fill="#68bd45"></path></svg>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/icons/Springboot.astro", void 0);

const $$LogoGrid = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-12" data-astro-cid-xtuj4xfy> <div class="container mx-auto px-4" data-astro-cid-xtuj4xfy> <h2 class="text-center text-white text-4xl font-bold mb-8" data-astro-cid-xtuj4xfy>Mis Herramientas</h2> <div class="slider" data-astro-cid-xtuj4xfy> <div class="slide-track" data-astro-cid-xtuj4xfy> <!-- Iconos --> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Springboot", $$Springboot, { "class": "h-15 w-20 mx-4", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "JS", $$JS, { "class": "h-15 w-20 mx-4", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Laravel", $$Laravel, { "class": "h-15 w-20 mx-4", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "CSS", $$CSS, { "class": "h-15 w-20 mx-4", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Tailwinds", $$Tailwinds, { "class": "h-15 w-20 mx-4", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "HTML", $$Html, { "class": "h-15 w-20 mx-4", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "GitHub", $$GitHub, { "class": "h-15 w-20 mx-4", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "React", $$React, { "class": "h-20 w-20 mx-4", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Vue", $$Vue, { "class": "h-15 w-20 mx-4", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Django", $$Django, { "class": "h-20 w-20", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Node", $$Node, { "class": "h-20 w-20", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Logo", $$Logo, { "class": "h-20 w-20 mx-4", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Mysql", $$Mysql, { "class": "h-20 w-20", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Php", $$Php, { "class": "h-20 w-20", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Sqlite", $$Sqlite, { "class": "h-20 w-20", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Mongodb", $$Mongodb, { "class": "h-20 w-20", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Vite", $$Vite, { "class": "h-20 w-20", "data-astro-cid-xtuj4xfy": true })}</div> <!-- Repetimos los iconos para el efecto de carrusel continuo --> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "JS", $$JS, { "class": "h-15 w-20 mx-4", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Springboot", $$Springboot, { "class": "h-15 w-20 mx-4", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Laravel", $$Laravel, { "class": "h-15 w-20 mx-4", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Tailwinds", $$Tailwinds, { "class": "h-15 w-20 mx-4", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "CSS", $$CSS, { "class": "h-15 w-20 mx-4", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "HTML", $$Html, { "class": "h-15 w-20 mx-4", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "GitHub", $$GitHub, { "class": "h-15 w-20 mx-4", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "React", $$React, { "class": "h-15 w-20 mx-4", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Vue", $$Vue, { "class": "h-15 w-20 mx-4", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Django", $$Django, { "class": "h-20 w-20", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Node", $$Node, { "class": "h-20 w-20", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Logo", $$Logo, { "class": "h-16 w-20 mx-4", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Mysql", $$Mysql, { "class": "h-20 w-20", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Php", $$Php, { "class": "h-20 w-20", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Sqlite", $$Sqlite, { "class": "h-20 w-20", "data-astro-cid-xtuj4xfy": true })}</div> <div class="slide" data-astro-cid-xtuj4xfy>${renderComponent($$result, "Mongodb", $$Mongodb, { "class": "h-20 w-20", "data-astro-cid-xtuj4xfy": true })}</div> </div> </div> </div> </section> `;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/LogoGrid.astro", void 0);

const $$Astro = createAstro();
const $$CV = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CV;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-cv"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path><path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0"></path><path d="M13 11l1.5 6l1.5 -6"></path></svg>`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/components/icons/CV.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portafolio de Paulo Melendez - Desarrollador y Programador web +1 a\xF1o de experiencia", "description": "Si buscas un desarrollador web que pueda crear p\xE1ginas de excelente calidad, paulito_god es tu mejor opci\xF3n. Con experiencia en dise\xF1o y desarrollo web, paulito_god garantiza resultados profesionales y personalizados para tu negocio o proyecto personal.", "currentPage": "index" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-2"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "pt-60 pb-60" }, { "default": ($$result3) => renderTemplate` <div class="flex items-center"> <div class="flex flex-col"> <h1 class="text-white text-2xl md:text-3xl lg:text-4xl font-bold flex flex-row gap-x-2 pb-3 lg:pb-5">hola soy Paulo melendez
<a href="https://www.linkedin.com/in/paulo-melendez/" target="_blank" class="flex justify-center items-center" rel="noopener"> ${renderComponent($$result3, "Badge", $$Badge, {}, { "default": ($$result4) => renderTemplate`disponible para trabajar` })} </a> </h1> <h2 class="text-lg lg:text-xl text-wrap max-w-[700px] py-12"> <span class="text-blue-500">Con más de un año de experiencia</span>, me especializo en el desarrollo de aplicaciones y sitios web, con un enfoque sólido en <span class="text-green-500">front-end</span>. Estoy motivado por la constante búsqueda de nuevos lenguajes y metodologías para enriquecer mis habilidades.
<span class="text-yellow-200/90 opacity-80">
Desarrollador Web en formación en <a href="https://www.tecsup.edu.pe" class="text-blue-300 underline" target="_blank">TECSUP</a>.
</span> <span class="text-red-100/90">Originario de Lima, Perú.</span> </h2> </div> </div> <nav class="flex gap-2 mt-4 flex-wrap mb-10"> ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://www.linkedin.com/in/paulo-melendez/" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedInIcon", $$LinkedIn, { "class": "size-4 md:size-6" })} LinkedIn
` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://github.com/PAU45" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "GithubIcon", $$GitHub, { "class": "size-4 md:size-6" })} Github
` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "mailto:paulo.melendez@tecsup.edu.pe?subject=Consulta&body=Escribe%20tu%20mensaje%20aqu\xED" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "GmailIcon", $$Gmail, { "class": "size-4 md:size-6" })} Gmail
` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://wa.me/+51908976340?text=Hola%20quiero%20hacer%20una%20consulta" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "WhatsappIcon", $$Whatsapp, { "class": "size-4 md:size-6" })} Whatsapp
` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "src/components/CV/paulo_cv-1.pdf", "class": "flex items-center bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CV", $$CV, { "class": "h-6 w-6 mr-2" })} <span>Curriculum Vitae</span> ` })} </nav> ` })}  ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "mb-5 mt-20", "id": "experiencia" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-semibold mb-3 flex gap-x-1 items-center"> ${renderComponent($$result3, "Work", $$Work, { "class": "size-7" })} experiencia Educativa:
</h2> ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "LogoGrid", $$LogoGrid, {})} ` })}  ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "proyectos", "class": "mb-5 mt-20" }, { "default": ($$result3) => renderTemplate`<div class="proyectos-content"> <h2 class="text-3xl font-semibold mb-6 flex gap-x-2 items-center"> ${renderComponent($$result3, "CodeIcon", $$Code, { "class": "size-7" })} proyectos:
</h2> ${renderComponent($$result3, "Projects", $$Projects, {})} </div> ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Footer", $$Footer, {})} ` })} </main> ` })}`;
}, "C:/Users/paulo/Documents/Integrador/portafolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/paulo/Documents/Integrador/portafolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { defineComponent, ref, mergeProps, unref, useSSRContext, createApp } from "vue";
import { renderToString } from "@vue/server-renderer";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon, FacebookIcon, PhoneIcon } from "lucide-vue-next";
const _imports_0 = "/img/profile.png";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Main",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = ref([
      {
        name: "M.A. Dating App",
        description: "A modern dating application featuring real-time chat, secure authentication, and a scalable architecture. Built with TypeScript, Express.js, Vue.js, TailwindCSS, and WebSockets, the app leverages polyglot persistence (SQL & NoSQL) and forward-thinking system design to deliver a seamless user experience.",
        image: "/img/M.A-DatingApp.png",
        github: "https://github.com/yourusername/ma-dating-app"
      },
      {
        name: "Bacacay Transparency Web App",
        description: "A citizen-friendly web portal for Bacacay, Albay, providing access to government projects, agendas, feedback mechanisms, and transparency reports.",
        image: "/img/Bacacay.png",
        github: "https://github.com/yourusername/bacacay-transparency-app"
      },
      {
        name: "Cake Amiga Store",
        description: "A static web application designed to showcase a variety of delicious products including cakes, cookies, and drinks. This project demonstrates strong frontend development skills, attention to design, and the ability to present information in a visually engaging and user-friendly way.",
        image: "https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/533189716_1082066040731624_5238632614958201563_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF9B_YBUiArlp7zfW35AUO-cbrca5rc_YNxutxrmtz9gybg6JMt68k-bi4wmQh8XBHw5_FQrkWAYcIHwdt15JiX&_nc_ohc=421zAxByZJIQ7kNvwFwZTrt&_nc_oc=AdlXQZiQtnBk_qDkGIymWZg71yNS6LUSeTyu7hIs1XWSfZgIJjLkX5nXqVgb3gP_AAk&_nc_zt=23&_nc_ht=scontent.fmnl13-1.fna&_nc_gid=znqk1n7dLWuqRhc-yNNeEw&oh=00_AfaSt1l_T5PEE2hMaWsaJxgLP9ScOaRUvmDGZufP4es0yQ&oe=68D939B7",
        github: "https://github.com/yourusername/cake-amiga-store"
      },
      {
        name: "CLI Utility Projects",
        description: "A collection of small-scale command-line applications including a calculator, basic CRUD operations, and other educational utilities. These projects highlight problem-solving and critical thinking skills by breaking down complex tasks into simple, functional solutions.",
        image: "https://learntocodewith.me/wp-content/uploads/2021/10/command-line-1024x768.jpg",
        github: "https://github.com/yourusername/cli-utility-projects"
      }
    ]);
    const skills = ref([
      { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "Vue.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
      { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Express.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
      { name: "Vite", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
      { name: "Websockets", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" },
      { name: "RESTful API", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "WebRTC", image: "https://www.gstatic.com/devrel-devsite/prod/vc12d84b6edb3e25e1619b575cf813e1849a1c95098b711a6c56ab3968c9a4fa9/webrtc/images/touchicon-180.png" },
      { name: "JWT", image: "https://www.jwt.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjwt-flower.f20616b0.png&w=3840&q=75" },
      { name: "Session Cookie", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0c5E1kE9x0OO44McKKaxHPnHYcyJ5YNNm_w&s" },
      { name: "Lucide", image: "https://avatars.githubusercontent.com/u/66879934?v=4" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "antialiased text-gray-100 bg-gray-900 min-h-screen font-sans transition-colors duration-300" }, _attrs))}><div class="container mx-auto px-4 py-10 sm:py-16 md:py-20 max-w-7xl"><header class="text-center mb-14 sm:mb-20 md:mb-24"><div class="relative inline-block mb-6"><img${ssrRenderAttr("src", _imports_0)} alt="Hunter&#39;s profile picture" class="rounded-full w-38 h-38 sm:w-42 sm:h-42 md:w-50 md:h-50 object-cover border-4 border-gray-700 shadow-xl"></div><h1 class="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-2 tracking-tight"> Aldrin Belardo </h1><p class="text-lg sm:text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto"> | Backend Developer | </p></header><section class="mb-10 sm:mb-12 md:mb-16"><h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-center">About Me</h2><div class="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-700"><p class="text-base sm:text-lg text-gray-300 leading-relaxed text-center"> As a forward-thinking software engineer, I specialize in backend development with a strong foundation in JavaScript and TypeScript. I build scalable and maintainable applications using Express.js, Vue.js, and TailwindCSS, while integrating real-time communication through WebSockets, WebRTC, and REST APIs. <br><br> I have led projects such as the M.A. Dating App, the Bacacay Transparency Web App, and the Cake Amiga Store, showcasing both technical expertise and creativity. I also develop smaller CLI utilities like calculators and CRUD apps to sharpen my problem-solving and critical thinking skills. <br><br> Beyond coding, I explore distributed architectures, load balancing, session management, and caching to ensure high performance at scale. I see mistakes as opportunities for growth, staying updated with the latest technologies to deliver innovative, citizen-friendly, and user-focused solutions. </p></div></section><section class="flex justify-center mb-14 sm:mb-20 md:mb-24"><a href="https://drive.google.com/file/d/1zefb_Vg6-7fHHGDVIUZUVwUJ24LESr7T/view?usp=drive_link" download class="inline-flex items-center px-5 sm:px-6 py-3 bg-teal-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-teal-500 hover:scale-105">`);
      _push(ssrRenderComponent(unref(DownloadIcon), { class: "w-5 h-5 mr-2" }, null, _parent));
      _push(` Download CV </a></section><section><h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center">My Projects</h2><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"><!--[-->`);
      ssrRenderList(projects.value, (project) => {
        _push(`<a${ssrRenderAttr("href", project.github)} target="_blank" rel="noopener noreferrer" class="group flex flex-col bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl"><div class="h-40 sm:h-48 overflow-hidden"><img${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.name)} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"></div><div class="p-4 sm:p-6 flex flex-col flex-1"><h3 class="text-lg sm:text-xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">${ssrInterpolate(project.name)}</h3><p class="text-gray-400 mt-2 text-xs sm:text-sm flex-1">${ssrInterpolate(project.description)}</p><div class="mt-4 inline-flex items-center text-teal-400 font-medium group-hover:text-teal-300 transition-colors duration-300 text-sm">`);
        _push(ssrRenderComponent(unref(GithubIcon), { class: "w-4 h-4 mr-2" }, null, _parent));
        _push(`<span>View on GitHub</span></div></div></a>`);
      });
      _push(`<!--]--></div></section><section class="mb-14 sm:mb-20 md:mb-24"><h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center">My Skills</h2><div class="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-700 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"><!--[-->`);
      ssrRenderList(skills.value, (skill) => {
        _push(`<div class="bg-gray-700 text-gray-200 py-2 sm:py-3 px-3 sm:px-4 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-teal-600 hover:text-white transform hover:scale-105 shadow-md flex items-center justify-center space-x-2"><img${ssrRenderAttr("src", skill.image)}${ssrRenderAttr("alt", `${skill.name} logo`)} class="w-4 h-4"><span>${ssrInterpolate(skill.name)}</span></div>`);
      });
      _push(`<!--]--></div></section></div><footer class="mt-20 sm:mt-24 text-center bg-gray-500/50 p-5 pb-10"><div class="flex justify-center space-x-6 text-gray-400"><a href="https://github.com/hunter123322" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors duration-300" aria-label="GitHub Profile">`);
      _push(ssrRenderComponent(unref(GithubIcon), { class: "w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" }, null, _parent));
      _push(`</a><a href="https://www.linkedin.com/in/aldrin-belardo-1a018a29a/" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors duration-300" aria-label="LinkedIn Profile">`);
      _push(ssrRenderComponent(unref(LinkedinIcon), { class: "w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" }, null, _parent));
      _push(`</a><a href="belardoaldrin90@gmail.com" class="hover:text-white transition-colors duration-300" aria-label="Email Me">`);
      _push(ssrRenderComponent(unref(MailIcon), { class: "w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" }, null, _parent));
      _push(`</a><a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors duration-300" aria-label="Facebook Profile">`);
      _push(ssrRenderComponent(unref(FacebookIcon), { class: "w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" }, null, _parent));
      _push(`</a><a href="tel:+639123456789" class="hover:text-white transition-colors duration-300" aria-label="Call Me">`);
      _push(ssrRenderComponent(unref(PhoneIcon), { class: "w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" }, null, _parent));
      _push(`</a></div></footer></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Main.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
async function render() {
  const app = createApp(_sfc_main);
  const html = await renderToString(app);
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>My App</title>
      <link rel="stylesheet" href="./style.css">
    </head>
    <body>
      <div id="app">${html}</div>
    </body>
  </html>`;
}
export {
  render
};

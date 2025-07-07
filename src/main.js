import "./style.css";
import data from "../data.json"

document.querySelector("#app").innerHTML = `
  <main>
    <header class="relative">
      <img src="/evan2.jpg" alt="Evan Alifian' photo" title="Evan Alifian" class="size-full">
      <div class="absolute bottom-0 w-full bg-gradient-to-t from-white from-40% h-56 flex flex-col justify-end text-center gap-y-2 p-4">
      <span class="font-bold text-2xl">${data.alias}</span>
      <p class="text-gray-700 font-medium">Hi! i'm ${data.name}.</p>
      </div>
    </header>
    <section class="flex justify-center gap-x-4">
      ${data.socials.map(social => `
        <a href="${social.url}" target="_blank">
          ${social.icon}
        </a>
      `).join("")}
    </section>
  </main>
`;

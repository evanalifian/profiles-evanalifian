import data from "../../data.json";

export default function Main() {
  return `
    <main>
      <header class="relative">
        <img src="/evan2.jpg" alt="Evan Alifian' photo" title="Evan Alifian" class="size-full">
        <div class="absolute bottom-0 w-full bg-gradient-to-t from-white from-40% h-60 flex flex-col justify-end text-center p-4">
          <span class="font-bold text-xl">${data.alias}</span>
          <p class="text-gray-700">Hi! i'm ${data.name}.</p>
        </div>
      </header>
      <section class="flex justify-center gap-x-6">
        ${data.socials
          .map(
            (social) => `
          <a href="${social.url}" target="_blank" class="text-gray-700 transition-colors hover:text-black">
            ${social.icon}
          </a>
        `
          )
          .join("")}
      </section>
    </main>
  `;
}

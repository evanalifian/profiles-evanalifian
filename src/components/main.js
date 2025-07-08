import data from "../../data.json";

export default function Main() {
  return html`
    <main>
      <header class="relative">
        <img
          src="/evan2.jpg"
          alt="Evan Alifian' photo"
          title="Evan Alifian"
          class="size-full"
        />
        <div
          class="absolute bottom-0 flex h-60 w-full flex-col justify-end bg-gradient-to-t from-white from-40% p-4 text-center"
        >
          <span class="text-xl font-bold">${data.alias}</span>
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
        `,
          )
          .join("")}
      </section>
    </main>
  `;
}

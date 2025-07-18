import data from "../../data.json";

export default function Main() {
  return /* HTML */ `
    <div
      class="aspect-2/1 w-full border-b border-zinc-300 bg-[url(/abstract-bg.jpeg)] bg-cover bg-center bg-no-repeat md:aspect-auto md:h-56"
    ></div>
    <main class="mx-auto max-w-md pb-32">
      <header class="space-y-4 px-6">
        <figure class="mx-auto -mt-20 flex w-max flex-col items-center">
          <img
            src="${data.avatar}"
            alt="${data.nickname} img"
            title="${data.name}"
            class="w-36 rounded-full border-8 border-white bg-white"
          />
          <figcation class="text-2xl font-medium text-gray-900"
            >${data.name}</figcation
          >
        </figure>
        <p class="text-center text-gray-500">${data.tagline}</p>
        <ul class="flex justify-center gap-x-4">
          ${data.socials
            .map(
              (s) => `
            <li>
              <a href="${s.url}" target="_blank" class="block bg-zinc-950 text-gray-200 w-max p-2 rounded-full hover:text-gray-50 hover:bg-zinc-900">${s.icon}</a>
            </li>
          `,
            )
            .join("")}
        </ul>
      </header>
      <section class="mt-16 px-4">
        <h1 class="mb-4 text-2xl font-semibold text-gray-900">Portfolio</h1>
        <a href="${data.portfolio}" target="_blank">
          <img
            src="/portfolio.png"
            alt="Portfolio img"
            class="w-full rounded-lg border border-zinc-300"
          />
        </a>
      </section>
      <section class="mt-16 px-4">
        <h2 class="mb-4 text-xl font-semibold text-gray-900">
          Perhaps, you want to see my CV?
        </h2>
        <a
          href="/cv.pdf"
          target="_blank"
          class="flex items-center gap-x-4 rounded-lg border border-zinc-300 bg-zinc-50 p-4 text-sm font-medium text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path
              d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5ZM7.52746 17H16.4725C16.2238 14.75 14.3163 13 12 13C9.68372 13 7.77619 14.75 7.52746 17Z"
            ></path>
          </svg>
          Download CV
        </a>
      </section>
    </main>
  `;
}

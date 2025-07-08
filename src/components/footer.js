import data from "../../data.json";

export default function Footer() {
  const year = new Date().getFullYear();
  return html`
    <footer class="mt-auto p-4">
      <p class="text-center text-sm text-gray-500">
        Copyright &copy; ${year} ${data.alias}
      </p>
    </footer>
  `;
}

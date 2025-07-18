import data from "../../data.json";

export default function Footer() {
  const year = new Date().getFullYear();
  return /* HTML */ `
    <footer class="mt-auto p-4">
      <div class="mx-auto max-w-md">
        <p class="text-center text-sm text-gray-500">
          &copy; ${year}, ${data.alias}.
        </p>
      </div>
    </footer>
  `;
}

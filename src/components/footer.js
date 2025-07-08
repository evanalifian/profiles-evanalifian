import data from "../../data.json"

export default function Footer() {
  const year = new Date().getFullYear()
  return `
    <footer class="mt-auto p-4">
      <p class="text-gray-500 text-sm text-center">Copyright &copy; ${year} ${data.alias}</p>
    </footer>
  `
}
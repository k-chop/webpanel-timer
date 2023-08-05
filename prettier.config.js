/** @type {import("prettier").Options} */
const config = {
  semi: false,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["clsx", "cva"],
}

module.exports = config

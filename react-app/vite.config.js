import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // added to maintain backwards compatibility with existing codelabs
  esbuild: {
    include: /\.js$/,
    exclude: [],
    loader: "jsx",
  },
  // added to maintain backwards compatibility with existing codelabs
  define: {
    "import.meta.env.REACT_APP_ORDERS_URL": JSON.stringify(
      process.env.REACT_APP_ORDERS_URL
    ),
    "import.meta.env.REACT_APP_PRODUCTS_URL": JSON.stringify(
      process.env.REACT_APP_PRODUCTS_URL
    ),
  },
});

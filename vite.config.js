import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  console.log("VITE_BASE_URL: " + env.VITE_BASE_URL);
  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
        },
      },
    },
  };
});
// export default defineConfig({
//   server: {
//     proxy: {
//       "/api": { target: "http://localhost:3000", secure: false },
//     },
//   },
//   plugins: [react()],
// });

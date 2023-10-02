// vite.config.js
import { sveltekit } from "file:///C:/Users/mensageiro.captacao/Documents/popkorn/node_modules/.pnpm/@sveltejs+kit@1.24.0_svelte@4.2.0_vite@4.4.9/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import removeConsole from "file:///C:/Users/mensageiro.captacao/Documents/popkorn/node_modules/.pnpm/vite-plugin-remove-console@0.0.7/node_modules/vite-plugin-remove-console/dist/index.js";
import viteCompression from "file:///C:/Users/mensageiro.captacao/Documents/popkorn/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@4.4.9/node_modules/vite-plugin-compression/dist/index.mjs";
import lightningcss from "file:///C:/Users/mensageiro.captacao/Documents/popkorn/node_modules/.pnpm/vite-plugin-lightningcss@0.0.5/node_modules/vite-plugin-lightningcss/dist/index.js";
var config = {
  define: {
    "process.env": {}
  },
  build: {
    reportCompressedSize: false,
    target: "esnext",
    minify: "esbuild"
  },
  plugins: [
    sveltekit(),
    lightningcss({
      browserslist: ">= 1%"
    }),
    removeConsole(),
    viteCompression({
      algorithm: "brotliCompress",
      verbose: false,
      threshold: 512,
      compressionOptions: {
        level: 3
      }
    })
  ]
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtZW5zYWdlaXJvLmNhcHRhY2FvXFxcXERvY3VtZW50c1xcXFxwb3Brb3JuXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtZW5zYWdlaXJvLmNhcHRhY2FvXFxcXERvY3VtZW50c1xcXFxwb3Brb3JuXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9tZW5zYWdlaXJvLmNhcHRhY2FvL0RvY3VtZW50cy9wb3Brb3JuL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgc3ZlbHRla2l0IH0gZnJvbSAnQHN2ZWx0ZWpzL2tpdC92aXRlJztcclxuaW1wb3J0IHJlbW92ZUNvbnNvbGUgZnJvbSAndml0ZS1wbHVnaW4tcmVtb3ZlLWNvbnNvbGUnO1xyXG5pbXBvcnQgdml0ZUNvbXByZXNzaW9uIGZyb20gJ3ZpdGUtcGx1Z2luLWNvbXByZXNzaW9uJztcclxuaW1wb3J0IGxpZ2h0bmluZ2NzcyBmcm9tICd2aXRlLXBsdWdpbi1saWdodG5pbmdjc3MnO1xyXG4vKiogQHR5cGUge2ltcG9ydCgndml0ZScpLlVzZXJDb25maWd9ICovXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuXHRkZWZpbmU6IHtcclxuXHRcdCdwcm9jZXNzLmVudic6IHt9XHJcblx0fSxcclxuXHRidWlsZDoge1xyXG5cdFx0cmVwb3J0Q29tcHJlc3NlZFNpemU6IGZhbHNlLFxyXG5cdFx0dGFyZ2V0OiAnZXNuZXh0JyxcclxuXHRcdG1pbmlmeTogJ2VzYnVpbGQnXHJcblx0fSxcclxuXHRwbHVnaW5zOiBbXHJcblx0XHRzdmVsdGVraXQoKSxcclxuXHRcdGxpZ2h0bmluZ2Nzcyh7XHJcblx0XHRcdGJyb3dzZXJzbGlzdDogJz49IDElJyxcclxuXHRcdH0pLFxyXG5cdFx0cmVtb3ZlQ29uc29sZSgpLFxyXG5cdFx0dml0ZUNvbXByZXNzaW9uKHtcclxuXHRcdFx0YWxnb3JpdGhtOiAnYnJvdGxpQ29tcHJlc3MnLFxyXG5cdFx0XHR2ZXJib3NlOiBmYWxzZSxcclxuXHRcdFx0dGhyZXNob2xkOiA1MTIsXHJcblx0XHRcdGNvbXByZXNzaW9uT3B0aW9uczoge1xyXG5cdFx0XHRcdGxldmVsOiAzXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0XVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNVLFNBQVMsaUJBQWlCO0FBQ2hXLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sa0JBQWtCO0FBRXpCLElBQU0sU0FBUztBQUFBLEVBQ2QsUUFBUTtBQUFBLElBQ1AsZUFBZSxDQUFDO0FBQUEsRUFDakI7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNOLHNCQUFzQjtBQUFBLElBQ3RCLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxFQUNUO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixhQUFhO0FBQUEsTUFDWixjQUFjO0FBQUEsSUFDZixDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsSUFDZCxnQkFBZ0I7QUFBQSxNQUNmLFdBQVc7QUFBQSxNQUNYLFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxNQUNYLG9CQUFvQjtBQUFBLFFBQ25CLE9BQU87QUFBQSxNQUNSO0FBQUEsSUFDRCxDQUFDO0FBQUEsRUFDRjtBQUNEO0FBRUEsSUFBTyxzQkFBUTsiLAogICJuYW1lcyI6IFtdCn0K

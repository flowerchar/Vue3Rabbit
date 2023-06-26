// import { fileURLToPath, URL } from "node:url";

// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// import AutoImport from "unplugin-auto-import/vite";
// import Components from "unplugin-vue-components/vite";
// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     AutoImport({ resolvers: [ElementPlusResolver()] }),
//     Components({ resolvers: [ElementPlusResolver({importStyle:"sass"})] }),
//   ],
//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//     },
//   },
//   css:{
//     preprocessorOptions:{
//       scss:{
//         additionalData:
//       }
//     }
//   }
// });
// import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    // 配置插件
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
// import { fileURLToPath, URL } from "node:url";
// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// import AutoImport from "unplugin-auto-import/vite";
// import Components from "unplugin-vue-components/vite";
// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// // 导入对应包
// import ElementPlus from "unplugin-element-plus/vite";
// export default defineConfig({
//   plugins: [
//     vue(),
//     AutoImport({
//       resolvers: [ElementPlusResolver()],
//     }),
//     Components({
//       resolvers: [ElementPlusResolver()],
//     }),
//     // 按需定制主题配置
//     ElementPlus({
//       useSource: true,
//     }),
//   ],
//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//     },
//   },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         // 自动导入定制化样式文件进行样式覆盖
//         additionalData: `
//           @use "@/styles/element/index.scss" as *;
//         `,
//       },
//     },
//   },
// });

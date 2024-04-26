import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	build: {
		minify: "terser",
		sourcemap: true,
	},
	logLevel: "warn",
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "src/styles/vars.scss";`,
			},
		},
	},
	esbuild: {
		jsxInject: `import React from 'react'`,
	},
	resolve: {
		alias: {
			"@/": "/src/",
			"@hooks": "/src/hooks",
			"@pages": "/src/app/pages",
			"@network": "/src/api/network.ts",
			"@components": "/src/app/components",
			"@vars": "/src/styles/vars.scss",
		},
	},
});

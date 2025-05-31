import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { visualizer } from "rollup-plugin-visualizer";
import { peerDependencies } from "./package.json";

const externals = [...Object.keys(peerDependencies)];

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({
			compilerOptions: { declarationMap: true },
		}),
		visualizer({
			open: false,
			gzipSize: true,
			brotliSize: true,
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src/@"),
		},
	},
	build: {
		outDir: "dist",
		lib: {
			entry: {
				index: "src/@/index.ts",
				"client-only-component": "src/client-only-component/index.ts",
				"side-effect-component": "src/side-effect-component/index.ts",
			},
			name: "shared",
			formats: ["es"],
		},
		copyPublicDir: false,
		rollupOptions: {
			external: [...externals],
		},
	},
});

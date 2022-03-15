import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import cssbundle from 'rollup-plugin-css-bundle';

const packageJson = require("./package.json");

export default [
  {
    // main project
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      cssbundle(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json", exclude: ["**/__tests__", "**/*.test.tsx"]}),
      terser(),
    ],
    external: ["react", "react-dom", "styled-components", /\.test.tsx$/]
  },
  // types
  {
    input: "dist/esm/types/index.d.ts",
    external: [/\.css$/],
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
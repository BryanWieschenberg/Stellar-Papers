import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tseslint from "typescript-eslint";

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,

    {
        ignores: [".next/**", "node_modules/**", "dist/**"],
    },

    {
        files: ["**/*.{js,jsx,ts,tsx}"],

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },

        plugins: {
            react,
            "react-hooks": reactHooks,
            "jsx-a11y": jsxA11y,
        },

        rules: {
            indent: "off",
            quotes: "off",
            semi: "off",
            "max-len": "off",
            curly: "off",
            "no-console": ["warn", { allow: ["error"] }],
            "prefer-const": "error",
            "no-var": "error",
            eqeqeq: ["error", "always"],
            "react/react-in-jsx-scope": "off",
        },
    },
];

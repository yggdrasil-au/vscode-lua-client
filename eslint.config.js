import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ignores: ["out/", "dist/", "**/*.d.ts"],
    },
    {
        files: ["**/*.ts", "**/*.tsx"],
        rules: {
            "eqeqeq": "warn",
            "default-case": "warn",
            "default-case-last": "warn",
            "@typescript-eslint/no-unused-expressions": "warn",
            "semi": ["warn", "always"],
            "prefer-const": "warn",
            "no-duplicate-imports": "warn",
            "no-prototype-builtins": "warn",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-namespace": "off",
            "linebreak-style": "off",
        },
    }
);
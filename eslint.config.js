import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import es6Import from "eslint-plugin-import";
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

// To use eslint flat config:
//   1. Set "type": "module" in package.json
//   2. Check 'Experimental: Use Flat Config' in VSCode settings

export default [
    "eslint:recommended",
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            '@typescript-eslint': typescript,
            typescript,
            import: es6Import,
            'jsx-a11y': jsxA11y,
            react,
            'react-hooks': reactHooks,
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: { jsx: true, modules: true },
                // project: 'tsconfig.json',
            },
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            ...jsxA11y.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            ...typescript.configs['eslint-recommended'].rules,
            ...typescript.configs['recommended'].rules,
            "react/prop-types": 0,
            "camelcase": ["error"],
            "prefer-template": "error",
            "prefer-const": "error",
            "eqeqeq": ["error", "smart"],
            "import/order": [
                "warn",
                {
                    "groups": [
                        "builtin",
                        "external",
                        "internal"
                    ],
                    "pathGroups": [
                        {
                            "pattern": "react",
                            "group": "external",
                            "position": "before"
                        }
                    ],
                    "pathGroupsExcludedImportTypes": [
                        "react"
                    ],
                    "newlines-between": "always",
                    "alphabetize": {
                        "order": "asc",
                        "caseInsensitive": true
                    }
                }
            ],
            "no-restricted-imports": [
                "error",
                {
                    "patterns": ["@mui/*/*/*", "!@mui/material/test-utils/*"]
                }
            ]
        }
    }
];

// eslint-disable-next-line no-undef
module.exports = {
    "parser": "@typescript-eslint/parser",
    "env": {
        "browser": true,
        "es2021": true,
        // "node": true
    },
    "extends": [
        "react-app",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/recommended",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "tsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "react-hooks",
        "tsx-a11y",
        "import"
    ],
    "rules": {
        "@typescript-eslint/rule-name": "error",
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


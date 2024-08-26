module.exports = {
    "extends": [
      "airbnb",
      "airbnb-typescript"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "project": "./tsconfig.json",
      "tsconfigRootDir": __dirname,
      "sourceType": "module"
    },
    "rules": {
      "arrow-parens": "off",
      "react/jsx-props-no-spreading": "off",
      "react/react-in-jsx-scope": "off",
      "react/no-children-prop": "off",
      "no-return-await": "off",
      "no-nested-ternary": "off",
      "react/prop-types": 0,
      "react/require-default-props": "off",
      "no-param-reassign": ["error", {"props": false}],
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "react/jsx-max-props-per-line": [1, {"maximum": 1, "when": "always"}],
      "consistent-return": "off",
      "import/prefer-default-export": "off",
      "import/extensions": "off",
      "max-classes-per-file": "off",
      "no-else-return": "off",
      "prefer-const": "off",
      "max-len": [
        1,
        {
          "code": 140,
          "tabWidth": 2,
          "ignoreUrls": true
        }
      ],
      "react/jsx-filename-extension": [
        1,
        {
          "extensions": [
            ".js",
            ".jsx",
            ".tsx",
            ".ts"
          ]
        }
      ],
      "quotes": [
        "error",
        "single",
        {
          "allowTemplateLiterals": true
        }
      ],
      "jsx-quotes": [
        "error",
        "prefer-single"
      ],
      "no-console": [2, {"allow": ["error", "warn", "info"]}],
      "react/function-component-definition": [2, {
        "namedComponents": ["function-declaration", "function-expression", "arrow-function"],
        "unnamedComponents": ["function-expression", "arrow-function", "arrow-function"],
      }],
      "no-restricted-exports": "off",
      "no-underscore-dangle": 0,
      "react/no-danger": 0,
      // TODO remove it and fix
      "jsx-a11y/control-has-associated-label": "off"
    },
    "env": {
      "browser": true,
      "node": true
    },
    "globals": {
      "window": true,
      "document": true
    },
    "ignorePatterns": [".eslintrc.js"]
  }
  
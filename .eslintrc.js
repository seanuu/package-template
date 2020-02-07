module.exports = {
    'root': true,
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "standard",
        "prettier"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "prettier",
        "@typescript-eslint",
    ],
    "rules": {
        'prettier/prettier': 'warn',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'strict': 'off'
    }
};

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    // "parser":require.resolve("vue-eslint-parser"),
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
        "parser": "babel-eslint"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        // 不允许使用var定义变量
        "no-var":2,
        // 只允许使用双引号定义字符串
        "quotes":["error","double"]
    }
};

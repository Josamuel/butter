module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "off"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-unused-vars": [
          "off"
        ],
        "no-undef":[
          "warn"
        ],
        "no-console":[
          "warn"
        ]
    }
};
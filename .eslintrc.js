module.exports = {
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "script",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "semi": 2,
        "no-trailing-spaces": 0
    },
    "env": {
        "node": true,
        "commonjs": true,
        "es6": true,
        "mocha": true
    },
    "extends": "standard",
    "plugins": [
        "standard",
        "promise"
    ]
};
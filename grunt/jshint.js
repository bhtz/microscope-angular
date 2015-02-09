var stylish = require('jshint-stylish');

module.exports = {

    options: {
        "browser": true,
        "esnext": true,
        "bitwise": true,
        "camelcase": true,
        "curly": true,
        "eqeqeq": true,
        "immed": true,
        "indent": 2,
        "latedef": false,
        "newcap": true,
        "noarg": true,
        "quotmark": "single",
        "regexp": true,
        "undef": true,
        "unused": true,
        "strict": true,
        "trailing": true,
        "smarttabs": true,
        "browserify": true,

        globals: {
            "console": true
        },

        reporter: stylish
    },

    all: ['src/**/*.js']
};
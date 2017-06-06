"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var v = new vue_1["default"]({
    el: '#app',
    template: "\n    <div>\n        Name: <input v-model=\"name\" type=\"text\">        \n    </div>\n    ",
    data: { name: 'World' }
});

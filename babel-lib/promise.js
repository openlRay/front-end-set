"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var isHas = [1, 2, 3].includes(2);
var p = new Promise(function (resolve, reject) {
  resolve(100);
});
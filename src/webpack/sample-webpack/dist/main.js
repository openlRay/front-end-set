(function(graph){      
      function require(module){        
        function localRequire(relativePath){          
          return require(graph[module].dependecies[relativePath])        
        }        
        var exports = {};        
        (function(require,exports,code){          
          eval(code)        
        })(localRequire,exports,graph[module].code);        
        return exports;      
      }      
      require('e:\front-end-set\src\webpack\sample-webpack\src\index.js')    
    })({"e:\\front-end-set\\src\\webpack\\sample-webpack\\src\\index.js":{"dependecies":{"./hello.js":"e:\\front-end-set\\src\\webpack\\sample-webpack\\src\\hello.js"},"code":"\"use strict\";\n\nvar _hello = require(\"./hello.js\");\n\ndocument.write((0, _hello.say)('webpack'));"},"e:\\front-end-set\\src\\webpack\\sample-webpack\\src\\hello.js":{"dependecies":{},"code":"\"use strict\";\n\nrequire(\"core-js/modules/es6.object.define-property\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.say = say;\n\nfunction say(name) {\n  return \"hello \".concat(name);\n}"}})
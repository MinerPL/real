            "use strict";
            t.exports = function(t) {
                return null === t ? "Null" : void 0 === t ? "Undefined" : "function" == typeof t || "object" == typeof t ? "Object" : "number" == typeof t ? "Number" : "boolean" == typeof t ? "Boolean" : "string" == typeof t ? "String" : void 0
            }
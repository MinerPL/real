            var r = "[object Arguments]" == function() {
                return Object.prototype.toString.call(arguments)
            }();

            function i(t) {
                return "[object Arguments]" == Object.prototype.toString.call(t)
            }

            function o(t) {
                return t && "object" == typeof t && "number" == typeof t.length && Object.prototype.hasOwnProperty.call(t, "callee") && !Object.prototype.propertyIsEnumerable.call(t, "callee") || !1
            }(e = t.exports = r ? i : o).supported = i, e.unsupported = o
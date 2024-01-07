            var Symbol = A("506264"),
                a = A("754892"),
                l = A("19797"),
                n = Symbol ? Symbol.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : n && n in Object(e) ? a(e) : l(e)
            }
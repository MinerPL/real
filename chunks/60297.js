            var Symbol = r("506264"),
                n = r("754892"),
                i = r("19797"),
                o = Symbol ? Symbol.toStringTag : void 0;
            t.exports = function(t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : o && o in Object(t) ? n(t) : i(t)
            }
            "use strict";
            r("70102");
            var i = Object.getOwnPropertySymbols,
                n = Object.prototype.hasOwnProperty,
                a = Object.prototype.propertyIsEnumerable;
            t.exports = ! function() {
                try {
                    if (!Object.assign) return !1;
                    var t = new String("abc");
                    if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                    for (var e = {}, r = 0; r < 10; r++) e["_" + String.fromCharCode(r)] = r;
                    var i = Object.getOwnPropertyNames(e).map(function(t) {
                        return e[t]
                    });
                    if ("0123456789" !== i.join("")) return !1;
                    var n = {};
                    if ("abcdefghijklmnopqrst".split("").forEach(function(t) {
                            n[t] = t
                        }), "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, n)).join("")) return !1;
                    return !0
                } catch (t) {
                    return !1
                }
            }() ? function(t, e) {
                for (var r, o, s = function(t) {
                        if (null == t) throw TypeError("Object.assign cannot be called with null or undefined");
                        return Object(t)
                    }(t), f = 1; f < arguments.length; f++) {
                    for (var h in r = Object(arguments[f]), r) n.call(r, h) && (s[h] = r[h]);
                    if (i) {
                        o = i(r);
                        for (var c = 0; c < o.length; c++) a.call(r, o[c]) && (s[o[c]] = r[o[c]])
                    }
                }
                return s
            } : Object.assign
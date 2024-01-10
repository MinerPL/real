            "use strict";
            var i = Array.prototype.slice,
                n = r("142726"),
                o = Object.keys,
                a = o ? function(t) {
                    return o(t)
                } : r("847480"),
                s = Object.keys;
            a.shim = function() {
                return Object.keys ? ! function() {
                    var t = Object.keys(arguments);
                    return t && t.length === arguments.length
                }(1, 2) && (Object.keys = function(t) {
                    return n(t) ? s(i.call(t)) : s(t)
                }) : Object.keys = a, Object.keys || a
            }, t.exports = a
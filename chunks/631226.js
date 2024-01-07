            "use strict";
            var e = n("113763"),
                o = n("979095"),
                i = n("504074").f,
                u = n("739952"),
                s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
                c = function(t) {
                    try {
                        return i(t)
                    } catch (t) {
                        return u(s)
                    }
                };
            t.exports.f = function(t) {
                return s && "Window" === e(t) ? c(t) : i(o(t))
            }
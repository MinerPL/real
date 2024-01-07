                "use strict";
                var e = r("406219"),
                    o = Function.prototype,
                    u = o.apply,
                    i = o.call;
                t.exports = "object" == typeof Reflect && Reflect.apply || (e ? i.bind(u) : function() {
                    return i.apply(u, arguments)
                })
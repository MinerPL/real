            "use strict";
            var e = n("814026"),
                o = n("59393"),
                i = Function.prototype,
                u = e && Object.getOwnPropertyDescriptor,
                c = o(i, "name"),
                s = c && (!e || e && u(i, "name").configurable);
            t.exports = {
                EXISTS: c,
                PROPER: c && "something" === (function() {}).name,
                CONFIGURABLE: s
            }
            "use strict";
            var e = n("597018"),
                o = n("605357"),
                i = Function.prototype,
                u = e && Object.getOwnPropertyDescriptor,
                s = o(i, "name"),
                c = s && (!e || e && u(i, "name").configurable);
            t.exports = {
                EXISTS: s,
                PROPER: s && "something" === (function() {}).name,
                CONFIGURABLE: c
            }
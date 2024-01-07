            "use strict";
            var e = n("597018"),
                o = n("522552");
            t.exports = e && o(function() {
                return 42 !== Object.defineProperty(function() {}, "prototype", {
                    value: 42,
                    writable: !1
                }).prototype
            })
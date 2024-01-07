            "use strict";
            var r = n("714919"),
                a = n("751779"),
                o = n("130170"),
                i = n("151790").set;
            r({
                target: "Map",
                proto: !0,
                real: !0,
                arity: 1,
                forced: !0
            }, {
                merge: function(e) {
                    for (var t = a(this), n = arguments.length, r = 0; r < n;) o(arguments[r++], function(e, n) {
                        i(t, e, n)
                    }, {
                        AS_ENTRIES: !0
                    });
                    return t
                }
            })
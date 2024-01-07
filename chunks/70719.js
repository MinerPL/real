            "use strict";
            var r = n("714919"),
                a = n("362776"),
                o = n("751779"),
                i = n("688274");
            r({
                target: "Map",
                proto: !0,
                real: !0,
                forced: !0
            }, {
                find: function(e) {
                    var t = o(this),
                        n = a(e, arguments.length > 1 ? arguments[1] : void 0),
                        r = i(t, function(e, r) {
                            if (n(e, r, t)) return {
                                value: e
                            }
                        }, !0);
                    return r && r.value
                }
            })
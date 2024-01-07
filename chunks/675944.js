            "use strict";
            var r = n("714919"),
                a = n("27249"),
                o = n("522552"),
                i = n("490653"),
                l = n("556028").onFreeze,
                u = Object.freeze;
            r({
                target: "Object",
                stat: !0,
                forced: o(function() {
                    u(1)
                }),
                sham: !a
            }, {
                freeze: function(e) {
                    return u && i(e) ? u(l(e)) : e
                }
            })
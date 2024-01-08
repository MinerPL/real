            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                },
                getVideoPermission: function() {
                    return u
                }
            });
            var a = n("446674"),
                s = n("223913"),
                r = n("305961"),
                i = n("957255");

            function l(e) {
                let t = (0, a.useStateFromStores)([r.default, i.default], () => e.isPrivate() || (0, s.canStreamInChannel)(e, r.default, i.default, !1), [e]);
                return t
            }

            function u(e) {
                return e.isPrivate() || (0, s.canStreamInChannel)(e, r.default, i.default, !1)
            }
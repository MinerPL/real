            "use strict";
            n.r(t), n.d(t, {
                useGuildIdsToFetchSoundsFor: function() {
                    return o
                },
                getGuildIdsToFetchSoundsFor: function() {
                    return u
                }
            });
            var l = n("884691"),
                a = n("65597"),
                s = n("305961"),
                i = n("235004");

            function r(e, t) {
                let n = Object.keys(e);
                return n.filter(e => null == t.get(e))
            }

            function o() {
                let e = (0, a.default)([s.default], () => s.default.getGuilds()),
                    t = (0, a.default)([i.default], () => i.default.getSounds());
                return (0, l.useMemo)(() => r(e, t), [e, t])
            }

            function u() {
                let e = s.default.getGuilds(),
                    t = i.default.getSounds();
                return r(e, t)
            }
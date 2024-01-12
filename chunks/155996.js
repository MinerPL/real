            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("884691"),
                i = n("298386"),
                r = n("65597"),
                a = n("656038"),
                s = n("42203"),
                o = n("923959"),
                u = n("449008");

            function d(e) {
                let t = (0, r.useStateFromStoresArray)([o.default], () => o.default.getVocalChannelIds(e)),
                    n = (0, r.useStateFromStoresArray)([s.default], () => t.map(e => s.default.getChannel(e)).filter(u.isNotNullish), [t]),
                    d = l.useMemo(() => n.filter(e => !(0, a.default)(e) && e.type === i.ChannelTypes.GUILD_VOICE), [n]);
                return d
            }
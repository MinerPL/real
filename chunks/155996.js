            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("884691"),
                i = n("298386"),
                r = n("65597"),
                s = n("656038"),
                a = n("42203"),
                u = n("923959"),
                o = n("449008");

            function d(e) {
                let t = (0, r.useStateFromStoresArray)([u.default], () => u.default.getVocalChannelIds(e)),
                    n = (0, r.useStateFromStoresArray)([a.default], () => t.map(e => a.default.getChannel(e)).filter(o.isNotNullish), [t]),
                    d = l.useMemo(() => n.filter(e => !(0, s.default)(e) && e.type === i.ChannelTypes.GUILD_VOICE), [n]);
                return d
            }
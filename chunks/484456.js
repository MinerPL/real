            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                s = n("430568"),
                a = n("20606"),
                u = n("629126"),
                o = n("915675"),
                d = n("6914");

            function c(e) {
                var t;
                let {
                    guildId: n,
                    emojiId: l,
                    emojiName: c,
                    className: f
                } = e, E = (0, u.default)(n, l), _ = null != E || null != c;
                return _ ? (0, i.jsx)(s.default, {
                    emojiId: null == E ? void 0 : E.id,
                    emojiName: null != c ? c : null == E ? void 0 : E.name,
                    animated: null !== (t = null == E ? void 0 : E.animated) && void 0 !== t && t,
                    className: r(d.emojiIcon, f)
                }) : (0, i.jsx)(o.default, {
                    className: r(d.emojiIcon, f),
                    color: a.default.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
                })
            }
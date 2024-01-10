            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                s = n("430568"),
                a = n("20606"),
                o = n("629126"),
                u = n("915675"),
                d = n("6914");

            function c(e) {
                var t;
                let {
                    guildId: n,
                    emojiId: i,
                    emojiName: c,
                    className: f
                } = e, E = (0, o.default)(n, i), _ = null != E || null != c;
                return _ ? (0, l.jsx)(s.default, {
                    emojiId: null == E ? void 0 : E.id,
                    emojiName: null != c ? c : null == E ? void 0 : E.name,
                    animated: null !== (t = null == E ? void 0 : E.animated) && void 0 !== t && t,
                    className: r(d.emojiIcon, f)
                }) : (0, l.jsx)(u.default, {
                    className: r(d.emojiIcon, f),
                    color: a.default.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
                })
            }
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("943722"),
                r = n("462339");

            function u(e) {
                let {
                    activity: t,
                    className: n,
                    emojiClassName: l,
                    textClassName: u,
                    placeholderText: o,
                    soloEmojiClassName: c,
                    animate: d = !0,
                    hideTooltip: f = !1,
                    hideEmoji: T = !1,
                    children: E
                } = e;
                if (null == t) return null;
                let {
                    emoji: A
                } = t, _ = null != t.state && "" !== t.state ? t.state : o;
                return (0, a.jsxs)("div", {
                    className: s(r.container, n),
                    children: [T || null == A ? null : (0, a.jsx)(i.ActivityEmoji, {
                        emoji: A,
                        className: s(r.emoji, l, null != c ? {
                            [c]: null == _ || "" === _
                        } : null),
                        animate: d,
                        hideTooltip: f
                    }), null != _ && _.length > 0 ? (0, a.jsx)("span", {
                        className: u,
                        children: _
                    }) : null, E]
                })
            }
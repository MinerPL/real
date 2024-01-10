            "use strict";
            n.r(t), n.d(t, {
                CTAEmojiSize: function() {
                    return a
                },
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("430568"),
                s = n("569912"),
                l = n("286667");
            let a = {
                SMALL: l.small,
                MEDIUM: l.medium,
                LARGE: l.large
            };

            function o(e) {
                let {
                    emojiId: t,
                    emojiName: n,
                    defaultComponent: l,
                    size: o = a.MEDIUM
                } = e, {
                    customEmoji: u,
                    unicodeEmoji: c
                } = (0, s.default)(t, n);
                return null == u && null == c ? (0, r.jsx)(r.Fragment, {
                    children: l
                }) : (0, r.jsx)(i.default, {
                    emojiName: null != u ? null == u ? void 0 : u.name : n,
                    animated: null != u && u.animated,
                    emojiId: null == u ? void 0 : u.id,
                    autoplay: !0,
                    className: o
                })
            }
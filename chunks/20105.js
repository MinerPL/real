            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var l = s("37983");
            s("884691");
            var a = s("446674"),
                n = s("77078"),
                i = s("430568"),
                r = s("385976"),
                o = s("79945"),
                d = s("779371");

            function u(e) {
                let {
                    reactionEmoji: t
                } = e, s = (0, a.useStateFromStores)([r.default], () => (null == t ? void 0 : t.emojiId) != null ? r.default.getUsableCustomEmojiById(t.emojiId) : null);
                return (0, l.jsxs)("div", {
                    className: d.container,
                    children: [(0, l.jsxs)("div", {
                        className: d.body,
                        children: [(0, l.jsxs)("div", {
                            className: d.placeholderLines,
                            children: [(0, l.jsx)(c, {
                                width: "100%",
                                marginBottom: 8
                            }), (0, l.jsx)(c, {
                                width: "80%",
                                marginBottom: 16
                            }), (0, l.jsx)(c, {
                                width: "50%",
                                marginBottom: 8
                            }), (0, l.jsx)(c, {
                                width: "60%",
                                marginBottom: 16
                            })]
                        }), (0, l.jsx)("div", {
                            className: d.placeholderMedia
                        })]
                    }), (0, l.jsxs)("div", {
                        className: d.footer,
                        children: [(0, l.jsxs)("div", {
                            className: d.reaction,
                            children: [null != t ? (0, l.jsx)(i.default, {
                                className: d.reactionEmote,
                                emojiId: t.emojiId,
                                emojiName: t.emojiName,
                                animated: !!(null == s ? void 0 : s.animated)
                            }) : (0, l.jsx)(o.default, {
                                className: d.reactionEmote
                            }), (0, l.jsx)(n.Text, {
                                variant: "text-sm/semibold",
                                color: "interactive-normal",
                                children: 17
                            })]
                        }), (0, l.jsx)(c, {
                            width: "24px",
                            marginBottom: 0
                        }), (0, l.jsx)("div", {
                            className: d.dot
                        }), (0, l.jsx)(c, {
                            width: "24px",
                            marginBottom: 0
                        })]
                    })]
                })
            }

            function c(e) {
                let {
                    width: t,
                    marginBottom: s
                } = e;
                return (0, l.jsx)("div", {
                    className: d.placeholderLine,
                    style: {
                        width: t,
                        marginBottom: s
                    }
                })
            }
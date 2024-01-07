            "use strict";
            o.r(t), o.d(t, {
                default: function() {
                    return u
                }
            });
            var i = o("37983");
            o("884691");
            var l = o("446674"),
                a = o("77078"),
                s = o("430568"),
                n = o("385976"),
                d = o("79945"),
                r = o("779371");

            function u(e) {
                let {
                    reactionEmoji: t
                } = e, o = (0, l.useStateFromStores)([n.default], () => (null == t ? void 0 : t.emojiId) != null ? n.default.getUsableCustomEmojiById(t.emojiId) : null);
                return (0, i.jsxs)("div", {
                    className: r.container,
                    children: [(0, i.jsxs)("div", {
                        className: r.body,
                        children: [(0, i.jsxs)("div", {
                            className: r.placeholderLines,
                            children: [(0, i.jsx)(c, {
                                width: "100%",
                                marginBottom: 8
                            }), (0, i.jsx)(c, {
                                width: "80%",
                                marginBottom: 16
                            }), (0, i.jsx)(c, {
                                width: "50%",
                                marginBottom: 8
                            }), (0, i.jsx)(c, {
                                width: "60%",
                                marginBottom: 16
                            })]
                        }), (0, i.jsx)("div", {
                            className: r.placeholderMedia
                        })]
                    }), (0, i.jsxs)("div", {
                        className: r.footer,
                        children: [(0, i.jsxs)("div", {
                            className: r.reaction,
                            children: [null != t ? (0, i.jsx)(s.default, {
                                className: r.reactionEmote,
                                emojiId: t.emojiId,
                                emojiName: t.emojiName,
                                animated: !!(null == o ? void 0 : o.animated)
                            }) : (0, i.jsx)(d.default, {
                                className: r.reactionEmote
                            }), (0, i.jsx)(a.Text, {
                                variant: "text-sm/semibold",
                                color: "interactive-normal",
                                children: 17
                            })]
                        }), (0, i.jsx)(c, {
                            width: "24px",
                            marginBottom: 0
                        }), (0, i.jsx)("div", {
                            className: r.dot
                        }), (0, i.jsx)(c, {
                            width: "24px",
                            marginBottom: 0
                        })]
                    })]
                })
            }

            function c(e) {
                let {
                    width: t,
                    marginBottom: o
                } = e;
                return (0, i.jsx)("div", {
                    className: r.placeholderLine,
                    style: {
                        width: t,
                        marginBottom: o
                    }
                })
            }
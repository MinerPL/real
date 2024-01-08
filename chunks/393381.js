            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("461380"),
                i = n("484456"),
                r = n("559979"),
                u = n("70695"),
                o = n("73495");

            function d(e) {
                let {
                    benefit: t,
                    guildId: n,
                    onClick: d
                } = e, c = (0, u.default)(n, t.ref_id), f = (0, a.jsx)(i.default, {
                    guildId: n,
                    emojiId: t.emoji_id,
                    emojiName: t.emoji_name
                });
                return (0, a.jsxs)(l.Clickable, {
                    className: o.container,
                    onClick: () => {
                        null == c || c.navigateToChannel(), d()
                    },
                    "aria-label": null == c ? void 0 : c.ariaLabel,
                    role: "link",
                    children: [(0, a.jsx)("div", {
                        className: o.emojiContainer,
                        children: f
                    }), (0, a.jsxs)("div", {
                        className: o.infoContainer,
                        children: [(0, a.jsx)(l.Text, {
                            variant: "text-md/medium",
                            color: "header-primary",
                            className: o.name,
                            children: (0, r.default)(t)
                        }), (0, a.jsx)(l.Text, {
                            color: "interactive-normal",
                            variant: "text-sm/normal",
                            children: t.description
                        })]
                    }), (0, a.jsx)(s.default, {
                        direction: s.default.Directions.RIGHT,
                        className: o.caret
                    })]
                })
            }
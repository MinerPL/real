            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("77078"),
                r = n("484456"),
                u = n("559979"),
                o = n("70695"),
                d = n("441641");

            function c(e) {
                let {
                    benefit: t,
                    guildId: n
                } = e, l = (0, o.default)(n, t.ref_id), c = (0, a.jsx)(r.default, {
                    guildId: n,
                    emojiId: t.emoji_id,
                    emojiName: t.emoji_name
                }), f = null != l ? (0, a.jsx)(i.Clickable, {
                    className: d.channelLink,
                    onClick: l.navigateToChannel,
                    "aria-label": l.ariaLabel,
                    role: "link",
                    children: (0, a.jsx)(i.Text, {
                        variant: "text-md/medium",
                        color: "header-primary",
                        className: s(d.name, d.linkedName),
                        children: (0, u.default)(t)
                    })
                }) : (0, a.jsx)(i.Text, {
                    variant: "text-md/medium",
                    color: "header-primary",
                    className: d.name,
                    children: (0, u.default)(t)
                });
                return (0, a.jsxs)("div", {
                    className: d.container,
                    children: [(0, a.jsxs)("div", {
                        className: d.infoContainer,
                        children: [f, (0, a.jsx)(i.Text, {
                            color: "interactive-normal",
                            variant: "text-sm/normal",
                            children: t.description
                        })]
                    }), (0, a.jsx)("div", {
                        className: d.emojiContainer,
                        children: c
                    })]
                })
            }
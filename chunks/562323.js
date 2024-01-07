            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return m
                }
            });
            var n = i("37983");
            i("884691");
            var l = i("414456"),
                s = i.n(l),
                a = i("77078"),
                r = i("346314"),
                o = i("642032"),
                u = i("290581"),
                c = i("115279"),
                d = i("782340"),
                f = i("428606");
            let E = e => {
                let {
                    emojiSubCategory: t
                } = e;
                return (0, n.jsxs)("div", {
                    className: s(f.badgeLabel, t === c.EmojiSubCategory.TOP_GUILD_EMOJI ? f.topGuildEmojiBadge : f.newlyAddedBadge),
                    children: [t === c.EmojiSubCategory.TOP_GUILD_EMOJI ? (0, n.jsx)(r.default, {
                        foreground: f.newlyAddedBadgeIcon
                    }) : (0, n.jsx)(o.default, {
                        foreground: f.newlyAddedBadgeIcon
                    }), (0, n.jsx)(a.Text, {
                        variant: "text-sm/semibold",
                        color: "always-white",
                        children: t === c.EmojiSubCategory.TOP_GUILD_EMOJI ? d.default.Messages.TOP_GUILD_EMOJI_BADGE : d.default.Messages.NEWLY_ADDED_GUILD_EMOJI_BADGE
                    })]
                })
            };
            var m = e => {
                let {
                    className: t,
                    graphicPrimary: i,
                    graphicSecondary: l,
                    titlePrimary: r,
                    titleSecondary: o,
                    isFavorite: m = !1,
                    emojiSubCategory: I = c.EmojiSubCategory.NONE
                } = e;
                return (0, n.jsxs)("div", {
                    className: s(f.inspector, t),
                    children: [(0, n.jsx)("div", {
                        className: f.graphicPrimary,
                        "aria-hidden": !0,
                        children: i
                    }), (0, n.jsxs)("div", {
                        className: f.textWrapper,
                        children: [(0, n.jsxs)(a.Text, {
                            className: f.titlePrimary,
                            variant: "text-md/semibold",
                            children: [m ? (0, n.jsx)(u.default, {
                                "aria-label": m ? d.default.Messages.EMOJI_IS_FAVORITE_ARIA_LABEL.format({
                                    names: r
                                }) : void 0,
                                width: 15,
                                height: 15,
                                className: f.favorite
                            }) : null, r]
                        }), null != o && (0, n.jsx)(a.Text, {
                            className: f.titleSecondary,
                            variant: "text-xs/normal",
                            children: o
                        })]
                    }), I === c.EmojiSubCategory.NONE ? null != l && (0, n.jsx)("div", {
                        className: f.graphicSecondary,
                        "aria-hidden": !0,
                        children: l
                    }) : (0, n.jsx)(E, {
                        emojiSubCategory: I
                    })]
                })
            }
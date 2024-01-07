            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var i = l("37983"),
                a = l("884691"),
                n = l("77078"),
                s = l("998944"),
                r = l("288914"),
                c = l("721908"),
                o = l("401709");

            function d(e) {
                var t, l, d, u, p;
                let {
                    application: m,
                    onClick: _,
                    imageSrc: f,
                    className: h,
                    animatesOnHover: C
                } = e, g = (0, c.default)({
                    application: m
                }), I = null === (t = m.categories) || void 0 === t ? void 0 : t[0], A = (null !== (u = null === (l = m.directory_entry) || void 0 === l ? void 0 : l.guild_count) && void 0 !== u ? u : 0) > 0 || g.length > 0, E = a.useCallback(() => {
                    _({
                        mutualGuilds: g
                    })
                }, [_, g]), v = (0, i.jsx)(s.default, {
                    application: m,
                    textVariant: "text-xs/normal",
                    mutualGuilds: g,
                    mutualGuildShownMax: 3,
                    guildIconSize: s.GuildIconSize.SMALL,
                    compact: !0
                });
                return (0, i.jsx)(r.default, {
                    className: h,
                    imageSrc: f,
                    onClick: E,
                    header: m.name,
                    subheader: (0, i.jsxs)("div", {
                        className: o.subheader,
                        children: [null != I && (0, i.jsx)(n.Text, {
                            tag: "span",
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            children: I.name
                        }), A && (0, i.jsxs)(i.Fragment, {
                            children: [null != I && (0, i.jsx)("span", {
                                className: o.bullet,
                                children: "•"
                            }), v]
                        })]
                    }),
                    animatesOnHover: C,
                    children: null != m.description && (0, i.jsx)("div", {
                        className: o.children,
                        children: (0, i.jsx)(n.Text, {
                            className: o.listingDescription,
                            variant: "text-sm/normal",
                            lineClamp: 2,
                            children: null !== (p = null === (d = m.directory_entry) || void 0 === d ? void 0 : d.short_description) && void 0 !== p ? p : m.description
                        })
                    })
                })
            }
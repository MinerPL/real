            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return R
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("917351"),
                u = s.n(r),
                d = s("509043"),
                o = s("669491"),
                c = s("77078"),
                E = s("437822"),
                T = s("327037"),
                _ = s("68130"),
                f = s("697218"),
                L = s("461380"),
                S = s("593195"),
                I = s("368121"),
                p = s("767517"),
                A = s("5487"),
                C = s("932180"),
                m = s("473759"),
                M = s("49111"),
                N = s("782340"),
                g = s("953066");

            function R(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    [s, l] = n.useState(""),
                    [i, r] = n.useState(null),
                    [u, d] = n.useState(null),
                    o = (0, A.default)(e.code);
                n.useEffect(() => {
                    (async function e() {
                        let e = f.default.getCurrentUser();
                        if (null == e) try {
                            e = await (0, T.fetchCurrentUser)()
                        } catch (e) {
                            E.default.verifySSOToken(null)
                        }
                        null != e && l(o.defaultName.format({
                            username: e.username
                        }))
                    })()
                }, [o.defaultName]);
                (0, C.default)(e);
                let L = (0, a.jsxs)(a.Fragment, {
                        children: [t ? (0, a.jsx)(m.default, {
                            guildTemplate: e
                        }) : null, (0, a.jsx)("div", {
                            className: g.icon,
                            children: (0, a.jsx)(_.default, {
                                icon: i,
                                onChange: r
                            })
                        }), (0, a.jsx)(c.FormItem, {
                            title: o.nameLabel,
                            children: (0, a.jsx)(c.TextInput, {
                                type: "text",
                                value: s,
                                maxLength: 100,
                                onChange: l,
                                error: null == u ? void 0 : u.name
                            })
                        }), (0, a.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: g.guidelines,
                            children: o.terms.format({
                                guidelinesURL: M.MarketingURLs.GUIDELINES
                            })
                        })]
                    }),
                    S = e.serializedSourceGuild.roles.filter(e => "@everyone" !== e.name),
                    I = (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: g.divider
                        }), (0, a.jsxs)(c.FormItem, {
                            className: g.previewSection,
                            title: N.default.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_HEADER,
                            children: [(0, a.jsx)(O, {
                                channels: e.serializedSourceGuild.channels
                            }), (0, a.jsxs)(c.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: g.protip,
                                children: [(0, a.jsxs)("span", {
                                    className: g.protipText,
                                    children: [N.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                                }), " ", N.default.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_TIP]
                            })]
                        }), S.length > 0 ? (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(c.FormItem, {
                                className: g.previewSection,
                                title: N.default.Messages.GUILD_TEMPLATE_MODAL_ROLES_HEADER2,
                                children: (0, a.jsx)(D, {
                                    roles: S
                                })
                            })
                        }) : null]
                    });
                return {
                    form: L,
                    preview: I,
                    handleSubmit: () => p.default.acceptGuildTemplate(e.code, s, i).catch(e => d(e))
                }
            }

            function O(e) {
                let {
                    channels: t
                } = e, s = u(t).sortBy(e => null == e.parent_id ? 1e4 * Number(e.id) : 1e4 * Number(e.parent_id) + e.id).map(e => {
                    let t = function(e) {
                        let {
                            type: t
                        } = e;
                        return t === M.ChannelTypes.GUILD_VOICE ? I.default : t === M.ChannelTypes.GUILD_CATEGORY ? L.default : S.default
                    }(e);
                    return (0, a.jsxs)("div", {
                        className: i(g.channel, {
                            [g.category]: e.type === M.ChannelTypes.GUILD_CATEGORY
                        }),
                        children: [(0, a.jsx)(t, {
                            className: g.channelIcon
                        }), (0, a.jsx)(c.Text, {
                            className: g.channelText,
                            variant: "text-sm/normal",
                            children: e.name
                        })]
                    }, e.id)
                }).value();
                return (0, a.jsx)("div", {
                    className: g.channelsWrapper,
                    children: s
                })
            }
            s("721247");

            function D(e) {
                let {
                    roles: t
                } = e, s = t.slice().reverse().map(e => (0, a.jsx)(h, {
                    role: e
                }, e.id));
                return (0, a.jsx)("ul", {
                    className: g.rolesWrapper,
                    children: s
                })
            }

            function h(e) {
                var t;
                let {
                    role: s
                } = e, n = null == s.color ? o.default.unsafe_rawColors.PRIMARY_300.css : (0, d.int2hex)(s.color);
                return (0, a.jsxs)("li", {
                    className: g.role,
                    style: {
                        borderColor: null !== (t = (0, d.hex2rgb)(n, .6)) && void 0 !== t ? t : void 0
                    },
                    children: [(0, a.jsx)(c.RoleCircle, {
                        className: g.roleCircle,
                        color: n
                    }), (0, a.jsx)("div", {
                        className: g.roleName,
                        children: s.name
                    })]
                })
            }
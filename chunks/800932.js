            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("222007");
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("917351"),
                u = n.n(r),
                o = n("509043"),
                d = n("669491"),
                c = n("77078"),
                f = n("437822"),
                E = n("327037"),
                I = n("68130"),
                _ = n("697218"),
                p = n("461380"),
                h = n("593195"),
                N = n("368121"),
                m = n("767517"),
                T = n("5487"),
                g = n("932180"),
                A = n("473759"),
                S = n("49111"),
                C = n("782340"),
                v = n("953066");

            function x(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    [n, l] = a.useState(""),
                    [i, r] = a.useState(null),
                    [u, o] = a.useState(null),
                    d = (0, T.default)(e.code);
                a.useEffect(() => {
                    (async function e() {
                        let e = _.default.getCurrentUser();
                        if (null == e) try {
                            e = await (0, E.fetchCurrentUser)()
                        } catch (e) {
                            f.default.verifySSOToken(null)
                        }
                        null != e && l(d.defaultName.format({
                            username: e.username
                        }))
                    })()
                }, [d.defaultName]);
                (0, g.default)(e);
                let p = (0, s.jsxs)(s.Fragment, {
                        children: [t ? (0, s.jsx)(A.default, {
                            guildTemplate: e
                        }) : null, (0, s.jsx)("div", {
                            className: v.icon,
                            children: (0, s.jsx)(I.default, {
                                icon: i,
                                onChange: r
                            })
                        }), (0, s.jsx)(c.FormItem, {
                            title: d.nameLabel,
                            children: (0, s.jsx)(c.TextInput, {
                                type: "text",
                                value: n,
                                maxLength: 100,
                                onChange: l,
                                error: null == u ? void 0 : u.name
                            })
                        }), (0, s.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: v.guidelines,
                            children: d.terms.format({
                                guidelinesURL: S.MarketingURLs.GUIDELINES
                            })
                        })]
                    }),
                    h = e.serializedSourceGuild.roles.filter(e => "@everyone" !== e.name),
                    N = (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: v.divider
                        }), (0, s.jsxs)(c.FormItem, {
                            className: v.previewSection,
                            title: C.default.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_HEADER,
                            children: [(0, s.jsx)(R, {
                                channels: e.serializedSourceGuild.channels
                            }), (0, s.jsxs)(c.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: v.protip,
                                children: [(0, s.jsxs)("span", {
                                    className: v.protipText,
                                    children: [C.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                                }), " ", C.default.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_TIP]
                            })]
                        }), h.length > 0 ? (0, s.jsx)(s.Fragment, {
                            children: (0, s.jsx)(c.FormItem, {
                                className: v.previewSection,
                                title: C.default.Messages.GUILD_TEMPLATE_MODAL_ROLES_HEADER2,
                                children: (0, s.jsx)(L, {
                                    roles: h
                                })
                            })
                        }) : null]
                    });
                return {
                    form: p,
                    preview: N,
                    handleSubmit: () => m.default.acceptGuildTemplate(e.code, n, i).catch(e => o(e))
                }
            }

            function R(e) {
                let {
                    channels: t
                } = e, n = u(t).sortBy(e => null == e.parent_id ? 1e4 * Number(e.id) : 1e4 * Number(e.parent_id) + e.id).map(e => {
                    let t = function(e) {
                        let {
                            type: t
                        } = e;
                        return t === S.ChannelTypes.GUILD_VOICE ? N.default : t === S.ChannelTypes.GUILD_CATEGORY ? p.default : h.default
                    }(e);
                    return (0, s.jsxs)("div", {
                        className: i(v.channel, {
                            [v.category]: e.type === S.ChannelTypes.GUILD_CATEGORY
                        }),
                        children: [(0, s.jsx)(t, {
                            className: v.channelIcon
                        }), (0, s.jsx)(c.Text, {
                            className: v.channelText,
                            variant: "text-sm/normal",
                            children: e.name
                        })]
                    }, e.id)
                }).value();
                return (0, s.jsx)("div", {
                    className: v.channelsWrapper,
                    children: n
                })
            }
            n("721247");

            function L(e) {
                let {
                    roles: t
                } = e, n = t.slice().reverse().map(e => (0, s.jsx)(O, {
                    role: e
                }, e.id));
                return (0, s.jsx)("ul", {
                    className: v.rolesWrapper,
                    children: n
                })
            }

            function O(e) {
                var t;
                let {
                    role: n
                } = e, a = null == n.color ? d.default.unsafe_rawColors.PRIMARY_300.css : (0, o.int2hex)(n.color);
                return (0, s.jsxs)("li", {
                    className: v.role,
                    style: {
                        borderColor: null !== (t = (0, o.hex2rgb)(a, .6)) && void 0 !== t ? t : void 0
                    },
                    children: [(0, s.jsx)(c.RoleCircle, {
                        className: v.roleCircle,
                        color: a
                    }), (0, s.jsx)("div", {
                        className: v.roleName,
                        children: n.name
                    })]
                })
            }
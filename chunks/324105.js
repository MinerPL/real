            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return g
                }
            }), a("222007");
            var l = a("37983"),
                t = a("884691"),
                n = a("414456"),
                i = a.n(n),
                d = a("819855"),
                r = a("77078"),
                c = a("841098"),
                o = a("407063"),
                u = a("580357"),
                m = a("587974"),
                h = a("315102"),
                f = a("159885"),
                x = a("782340"),
                v = a("583810"),
                N = a("68422"),
                S = a("578817");
            let j = [16, 16, 14, 14, 12, 10, 8];
            var g = function(e) {
                var s, a;
                let {
                    guild: n,
                    disabled: g,
                    small: C,
                    loading: E = !1,
                    description: p,
                    memberCount: I,
                    presenceCount: _,
                    className: M
                } = e, R = (0, c.default)(), [T, O] = t.useState(!1);
                if (null == n || E) return (0, l.jsx)("div", {
                    className: i(M, v.card, v.cardPlaceholder, {
                        [v.cardSmall]: C,
                        [v.cardDisabled]: g
                    })
                });
                let {
                    name: D
                } = n, A = null != n.discoverySplash && /^data:/.test(n.discoverySplash) ? n.discoverySplash : h.default.getGuildDiscoverySplashURL({
                    id: n.id,
                    splash: n.discoverySplash,
                    size: 240 * (0, o.getDevicePixelRatio)()
                }), b = (0, d.isThemeDark)(R) ? N : S, y = null !== (s = h.default.getGuildIconURL({
                    id: n.id,
                    icon: n.icon,
                    size: 40
                })) && void 0 !== s ? s : void 0, k = null != n.description ? n.description : p, L = null != I ? I : null == n ? void 0 : n.memberCount, U = null != _ ? _ : null == n ? void 0 : n.presenceCount, V = null;
                if (null != y) V = (0, l.jsx)("img", {
                    src: y,
                    alt: "",
                    className: v.avatar
                });
                else {
                    let e = (0, f.getAcronym)(n.name);
                    V = (0, l.jsx)("div", {
                        className: v.defaultIcon,
                        children: (0, l.jsx)(r.Text, {
                            className: v.acronym,
                            style: {
                                fontSize: null !== (a = j[e.length]) && void 0 !== a ? a : j[j.length - 1]
                            },
                            variant: "text-sm/normal",
                            children: e
                        })
                    })
                }
                return (0, l.jsxs)("div", {
                    className: i(M, v.card, {
                        [v.cardSmall]: C,
                        [v.cardDisabled]: g,
                        [v.splashLoaded]: T
                    }),
                    children: [(0, l.jsxs)("div", {
                        className: v.cardHeader,
                        children: [(0, l.jsx)("div", {
                            className: v.splash,
                            children: (0, l.jsx)("img", {
                                src: null != A ? A : b,
                                alt: "",
                                className: v.splashImage,
                                onLoad: () => O(!0)
                            })
                        }), (0, l.jsx)("div", {
                            className: v.guildIcon,
                            children: (0, l.jsx)(m.default, {
                                mask: m.default.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: v.iconMask,
                                    children: (0, l.jsx)(m.default, {
                                        mask: m.default.Masks.SQUIRCLE,
                                        width: 40,
                                        height: 40,
                                        children: null != V ? V : null
                                    })
                                })
                            })
                        })]
                    }), (0, l.jsxs)("div", {
                        className: v.guildInfo,
                        children: [(0, l.jsxs)("div", {
                            className: v.title,
                            children: [(0, l.jsx)(u.default, {
                                className: v.verifiedIcon,
                                guild: n,
                                tooltipColor: r.Tooltip.Colors.PRIMARY
                            }), (0, l.jsx)(r.Text, {
                                className: v.guildName,
                                variant: "text-md/normal",
                                children: (0, l.jsx)("span", {
                                    children: D
                                })
                            })]
                        }), (0, l.jsx)(r.Text, {
                            className: v.description,
                            variant: "text-sm/normal",
                            children: (0, l.jsx)("span", {
                                children: k
                            })
                        }), (0, l.jsxs)("div", {
                            className: v.memberInfo,
                            children: [null != U && (0, l.jsxs)("div", {
                                className: v.memberCount,
                                children: [(0, l.jsx)("div", {
                                    className: v.dotOnline
                                }), (0, l.jsx)(r.Text, {
                                    variant: "text-xs/normal",
                                    children: C ? x.default.Messages.NUMBERS_ONLY.format({
                                        count: U
                                    }) : x.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                        membersOnline: U
                                    })
                                })]
                            }), null != L && (0, l.jsxs)("div", {
                                className: v.memberCount,
                                children: [(0, l.jsx)("div", {
                                    className: v.dotOffline
                                }), (0, l.jsx)(r.Text, {
                                    variant: "text-xs/normal",
                                    children: C ? x.default.Messages.NUMBERS_ONLY.format({
                                        count: L
                                    }) : x.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                        count: L
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            }
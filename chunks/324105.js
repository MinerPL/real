            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return j
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
                f = a("315102"),
                h = a("159885"),
                x = a("782340"),
                v = a("583810"),
                N = a("68422"),
                S = a("578817");
            let g = [16, 16, 14, 14, 12, 10, 8];
            var j = function(e) {
                var s, a;
                let {
                    guild: n,
                    disabled: j,
                    small: C,
                    loading: p = !1,
                    description: I,
                    memberCount: E,
                    presenceCount: _,
                    className: M
                } = e, R = (0, c.default)(), [T, O] = t.useState(!1);
                if (null == n || p) return (0, l.jsx)("div", {
                    className: i(M, v.card, v.cardPlaceholder, {
                        [v.cardSmall]: C,
                        [v.cardDisabled]: j
                    })
                });
                let {
                    name: A
                } = n, k = null != n.discoverySplash && /^data:/.test(n.discoverySplash) ? n.discoverySplash : f.default.getGuildDiscoverySplashURL({
                    id: n.id,
                    splash: n.discoverySplash,
                    size: 240 * (0, o.getDevicePixelRatio)()
                }), D = (0, d.isThemeDark)(R) ? N : S, w = null !== (s = f.default.getGuildIconURL({
                    id: n.id,
                    icon: n.icon,
                    size: 40
                })) && void 0 !== s ? s : void 0, y = null != n.description ? n.description : I, b = null != E ? E : null == n ? void 0 : n.memberCount, L = null != _ ? _ : null == n ? void 0 : n.presenceCount, U = null;
                if (null != w) U = (0, l.jsx)("img", {
                    src: w,
                    alt: "",
                    className: v.avatar
                });
                else {
                    let e = (0, h.getAcronym)(n.name);
                    U = (0, l.jsx)("div", {
                        className: v.defaultIcon,
                        children: (0, l.jsx)(r.Text, {
                            className: v.acronym,
                            style: {
                                fontSize: null !== (a = g[e.length]) && void 0 !== a ? a : g[g.length - 1]
                            },
                            variant: "text-sm/normal",
                            children: e
                        })
                    })
                }
                return (0, l.jsxs)("div", {
                    className: i(M, v.card, {
                        [v.cardSmall]: C,
                        [v.cardDisabled]: j,
                        [v.splashLoaded]: T
                    }),
                    children: [(0, l.jsxs)("div", {
                        className: v.cardHeader,
                        children: [(0, l.jsx)("div", {
                            className: v.splash,
                            children: (0, l.jsx)("img", {
                                src: null != k ? k : D,
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
                                        children: null != U ? U : null
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
                                    children: A
                                })
                            })]
                        }), (0, l.jsx)(r.Text, {
                            className: v.description,
                            variant: "text-sm/normal",
                            children: (0, l.jsx)("span", {
                                children: y
                            })
                        }), (0, l.jsxs)("div", {
                            className: v.memberInfo,
                            children: [null != L && (0, l.jsxs)("div", {
                                className: v.memberCount,
                                children: [(0, l.jsx)("div", {
                                    className: v.dotOnline
                                }), (0, l.jsx)(r.Text, {
                                    variant: "text-xs/normal",
                                    children: C ? x.default.Messages.NUMBERS_ONLY.format({
                                        count: L
                                    }) : x.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                        membersOnline: L
                                    })
                                })]
                            }), null != b && (0, l.jsxs)("div", {
                                className: v.memberCount,
                                children: [(0, l.jsx)("div", {
                                    className: v.dotOffline
                                }), (0, l.jsx)(r.Text, {
                                    variant: "text-xs/normal",
                                    children: C ? x.default.Messages.NUMBERS_ONLY.format({
                                        count: b
                                    }) : x.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                        count: b
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            }
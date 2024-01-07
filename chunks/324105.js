            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return A
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("819855"),
                o = s("77078"),
                d = s("841098"),
                u = s("407063"),
                c = s("580357"),
                E = s("587974"),
                _ = s("315102"),
                T = s("159885"),
                I = s("782340"),
                S = s("583810"),
                N = s("68422"),
                g = s("578817");
            let f = [16, 16, 14, 14, 12, 10, 8];
            var A = function(e) {
                var t, s;
                let {
                    guild: l,
                    disabled: A,
                    small: L,
                    loading: m = !1,
                    description: C,
                    memberCount: O,
                    presenceCount: h,
                    className: R
                } = e, D = (0, d.default)(), [M, G] = n.useState(!1);
                if (null == l || m) return (0, a.jsx)("div", {
                    className: i(R, S.card, S.cardPlaceholder, {
                        [S.cardSmall]: L,
                        [S.cardDisabled]: A
                    })
                });
                let {
                    name: x
                } = l, p = null != l.discoverySplash && /^data:/.test(l.discoverySplash) ? l.discoverySplash : _.default.getGuildDiscoverySplashURL({
                    id: l.id,
                    splash: l.discoverySplash,
                    size: 240 * (0, u.getDevicePixelRatio)()
                }), U = (0, r.isThemeDark)(D) ? N : g, v = null !== (t = _.default.getGuildIconURL({
                    id: l.id,
                    icon: l.icon,
                    size: 40
                })) && void 0 !== t ? t : void 0, j = null != l.description ? l.description : C, P = null != O ? O : null == l ? void 0 : l.memberCount, y = null != h ? h : null == l ? void 0 : l.presenceCount, b = null;
                if (null != v) b = (0, a.jsx)("img", {
                    src: v,
                    alt: "",
                    className: S.avatar
                });
                else {
                    let e = (0, T.getAcronym)(l.name);
                    b = (0, a.jsx)("div", {
                        className: S.defaultIcon,
                        children: (0, a.jsx)(o.Text, {
                            className: S.acronym,
                            style: {
                                fontSize: null !== (s = f[e.length]) && void 0 !== s ? s : f[f.length - 1]
                            },
                            variant: "text-sm/normal",
                            children: e
                        })
                    })
                }
                return (0, a.jsxs)("div", {
                    className: i(R, S.card, {
                        [S.cardSmall]: L,
                        [S.cardDisabled]: A,
                        [S.splashLoaded]: M
                    }),
                    children: [(0, a.jsxs)("div", {
                        className: S.cardHeader,
                        children: [(0, a.jsx)("div", {
                            className: S.splash,
                            children: (0, a.jsx)("img", {
                                src: null != p ? p : U,
                                alt: "",
                                className: S.splashImage,
                                onLoad: () => G(!0)
                            })
                        }), (0, a.jsx)("div", {
                            className: S.guildIcon,
                            children: (0, a.jsx)(E.default, {
                                mask: E.default.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, a.jsx)("div", {
                                    className: S.iconMask,
                                    children: (0, a.jsx)(E.default, {
                                        mask: E.default.Masks.SQUIRCLE,
                                        width: 40,
                                        height: 40,
                                        children: null != b ? b : null
                                    })
                                })
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: S.guildInfo,
                        children: [(0, a.jsxs)("div", {
                            className: S.title,
                            children: [(0, a.jsx)(c.default, {
                                className: S.verifiedIcon,
                                guild: l,
                                tooltipColor: o.Tooltip.Colors.PRIMARY
                            }), (0, a.jsx)(o.Text, {
                                className: S.guildName,
                                variant: "text-md/normal",
                                children: (0, a.jsx)("span", {
                                    children: x
                                })
                            })]
                        }), (0, a.jsx)(o.Text, {
                            className: S.description,
                            variant: "text-sm/normal",
                            children: (0, a.jsx)("span", {
                                children: j
                            })
                        }), (0, a.jsxs)("div", {
                            className: S.memberInfo,
                            children: [null != y && (0, a.jsxs)("div", {
                                className: S.memberCount,
                                children: [(0, a.jsx)("div", {
                                    className: S.dotOnline
                                }), (0, a.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    children: L ? I.default.Messages.NUMBERS_ONLY.format({
                                        count: y
                                    }) : I.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                        membersOnline: y
                                    })
                                })]
                            }), null != P && (0, a.jsxs)("div", {
                                className: S.memberCount,
                                children: [(0, a.jsx)("div", {
                                    className: S.dotOffline
                                }), (0, a.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    children: L ? I.default.Messages.NUMBERS_ONLY.format({
                                        count: P
                                    }) : I.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                        count: P
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            }
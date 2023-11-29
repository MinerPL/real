(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["72439"], {
        68422: function(e, s, a) {
            "use strict";
            e.exports = a.p + "467602d632b5f9c1ce4b.svg"
        },
        578817: function(e, s, a) {
            "use strict";
            e.exports = a.p + "d4d9f2bff23beec65b1f.svg"
        },
        276825: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                CheckmarkSmallIcon: function() {
                    return i
                }
            });
            var l = a("37983");
            a("884691");
            var t = a("669491"),
                n = a("75196");
            let i = e => {
                let {
                    width: s = 24,
                    height: a = 24,
                    color: i = t.default.colors.INTERACTIVE_NORMAL,
                    colorClass: d = "",
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, n.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: s,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: d
                    })
                })
            }
        },
        502155: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return x
                }
            }), a("222007");
            var l = a("37983"),
                t = a("884691"),
                n = a("446674"),
                i = a("77078"),
                d = a("716241"),
                r = a("592407"),
                c = a("525065"),
                o = a("476765"),
                u = a("324105"),
                m = a("49111"),
                f = a("782340"),
                h = a("140631"),
                x = e => {
                    let {
                        transitionState: s,
                        onClose: a,
                        guild: x
                    } = e, v = (0, o.useUID)();
                    t.useEffect(() => {
                        d.default.trackWithMetadata(m.AnalyticEvents.OPEN_MODAL, {
                            type: m.AnalyticsSections.DISCOVERY_SETUP_SUCCESS_MODAL
                        })
                    }, []);
                    let [N, S] = (0, n.useStateFromStoresArray)([c.default], () => [c.default.getOnlineCount(x.id), c.default.getMemberCount(x.id)], [x.id]);
                    return (0, l.jsxs)(i.ModalRoot, {
                        transitionState: s,
                        "aria-labelledby": v,
                        className: h.root,
                        children: [(0, l.jsx)(i.ModalHeader, {
                            className: h.modalHeader,
                            separator: !1,
                            children: (0, l.jsx)(i.ModalCloseButton, {
                                onClick: a,
                                className: h.modalCloseButton
                            })
                        }), (0, l.jsx)(i.Heading, {
                            variant: "heading-xl/semibold",
                            id: v,
                            className: h.header,
                            children: f.default.Messages.SERVER_DISCOVERY_SETUP_CONFIRMATION_PAGE_HEADER
                        }), (0, l.jsxs)(i.ModalContent, {
                            className: h.modalContent,
                            children: [(0, l.jsx)(i.Text, {
                                variant: "text-md/normal",
                                className: h.subheader,
                                children: f.default.Messages.SERVER_DISCOVERY_SETUP_CONFIRMATION_PAGE_SUBHEADING.format({
                                    onServerSettingsClick: () => {
                                        a(), r.default.setSection(m.GuildSettingsSections.DISCOVERY), d.default.trackWithMetadata(m.AnalyticEvents.SETTINGS_PANE_VIEWED, {
                                            settings_type: "guild",
                                            origin_pane: "DISCOVERY",
                                            destination_pane: "DISCOVERY"
                                        })
                                    }
                                })
                            }), (0, l.jsx)(u.default, {
                                className: h.previewCard,
                                guild: x,
                                presenceCount: N,
                                memberCount: S
                            })]
                        }), (0, l.jsx)(i.ModalFooter, {
                            children: (0, l.jsx)(i.Button, {
                                onClick: a,
                                children: f.default.Messages.GOT_IT
                            })
                        })]
                    })
                }
        },
        324105: function(e, s, a) {
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
        },
        931138: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return o
                }
            });
            var l = a("37983"),
                t = a("884691"),
                n = a("414456"),
                i = a.n(n),
                d = a("77078"),
                r = a("760607"),
                c = a("89976");

            function o(e) {
                let {
                    children: s,
                    size: a = 16,
                    className: n,
                    flowerStarClassName: o,
                    ...u
                } = e, m = t.Children.only(s), f = (0, d.useRedesignIconContext)().enabled;
                return (0, l.jsxs)("div", {
                    className: i(c.flowerStarContainer, n),
                    style: {
                        width: a,
                        height: a
                    },
                    children: [(0, l.jsx)(r.default, {
                        ...u,
                        className: i(o, c.flowerStar)
                    }), (0, l.jsx)("div", {
                        className: i(c.childContainer, {
                            [c.redesignIconChildContainer]: f
                        }),
                        children: m
                    })]
                })
            }
        },
        760607: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return n
                }
            });
            var l = a("37983");
            a("884691");
            var t = a("75196"),
                n = function(e) {
                    let {
                        width: s = 16,
                        height: a = 16,
                        color: n = "currentColor",
                        foreground: i,
                        ...d
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, t.default)(d),
                        width: s,
                        height: a,
                        viewBox: "0 0 16 15.2",
                        children: (0, l.jsx)("path", {
                            className: i,
                            fill: n,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        486952: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return d
                }
            });
            var l = a("37983");
            a("884691");
            var t = a("469563"),
                n = a("276825"),
                i = a("75196"),
                d = (0, t.replaceIcon)(function(e) {
                    let {
                        width: s = 16,
                        height: a = 16,
                        color: t = "currentColor",
                        ...n
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(n),
                        width: s,
                        height: a,
                        viewBox: "0 0 16 15.2",
                        children: (0, l.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: t
                        })
                    })
                }, n.CheckmarkSmallIcon, void 0, {
                    size: 16
                })
        }
    }
]);
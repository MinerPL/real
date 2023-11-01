(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["5373"], {
        68422: function(e, s, a) {
            "use strict";
            e.exports = a.p + "467602d632b5f9c1ce4b.svg"
        },
        578817: function(e, s, a) {
            "use strict";
            e.exports = a.p + "d4d9f2bff23beec65b1f.svg"
        },
        502155: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return x
                }
            });
            var l = a("37983"),
                t = a("884691"),
                i = a("446674"),
                n = a("77078"),
                d = a("716241"),
                r = a("592407"),
                c = a("525065"),
                o = a("476765"),
                u = a("324105"),
                m = a("49111"),
                h = a("782340"),
                f = a("140631"),
                x = e => {
                    let {
                        transitionState: s,
                        onClose: a,
                        guild: x
                    } = e, N = (0, o.useUID)();
                    t.useEffect(() => {
                        d.default.trackWithMetadata(m.AnalyticEvents.OPEN_MODAL, {
                            type: m.AnalyticsSections.DISCOVERY_SETUP_SUCCESS_MODAL
                        })
                    }, []);
                    let [v, S] = (0, i.useStateFromStoresArray)([c.default], () => [c.default.getOnlineCount(x.id), c.default.getMemberCount(x.id)], [x.id]);
                    return (0, l.jsxs)(n.ModalRoot, {
                        transitionState: s,
                        "aria-labelledby": N,
                        className: f.root,
                        children: [(0, l.jsx)(n.ModalHeader, {
                            className: f.modalHeader,
                            separator: !1,
                            children: (0, l.jsx)(n.ModalCloseButton, {
                                onClick: a,
                                className: f.modalCloseButton
                            })
                        }), (0, l.jsx)(n.Heading, {
                            variant: "heading-xl/semibold",
                            id: N,
                            className: f.header,
                            children: h.default.Messages.SERVER_DISCOVERY_SETUP_CONFIRMATION_PAGE_HEADER
                        }), (0, l.jsxs)(n.ModalContent, {
                            className: f.modalContent,
                            children: [(0, l.jsx)(n.Text, {
                                variant: "text-md/normal",
                                className: f.subheader,
                                children: h.default.Messages.SERVER_DISCOVERY_SETUP_CONFIRMATION_PAGE_SUBHEADING.format({
                                    onServerSettingsClick: () => {
                                        a(), r.default.setSection(m.GuildSettingsSections.DISCOVERY), d.default.trackWithMetadata(m.AnalyticEvents.SETTINGS_PANE_VIEWED, {
                                            settings_type: "guild",
                                            origin_pane: "DISCOVERY",
                                            destination_pane: "DISCOVERY"
                                        })
                                    }
                                })
                            }), (0, l.jsx)(u.default, {
                                className: f.previewCard,
                                guild: x,
                                presenceCount: v,
                                memberCount: S
                            })]
                        }), (0, l.jsx)(n.ModalFooter, {
                            children: (0, l.jsx)(n.Button, {
                                onClick: a,
                                children: h.default.Messages.GOT_IT
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
            });
            var l = a("37983"),
                t = a("884691"),
                i = a("414456"),
                n = a.n(i),
                d = a("819855"),
                r = a("77078"),
                c = a("841098"),
                o = a("407063"),
                u = a("580357"),
                m = a("587974"),
                h = a("315102"),
                f = a("159885"),
                x = a("782340"),
                N = a("583810"),
                v = a("68422"),
                S = a("578817");
            let E = [16, 16, 14, 14, 12, 10, 8];
            var j = function(e) {
                var s, a;
                let {
                    guild: i,
                    disabled: j,
                    small: p,
                    loading: g = !1,
                    description: I,
                    memberCount: C,
                    presenceCount: _,
                    className: M
                } = e, R = (0, c.default)(), [T, O] = t.useState(!1);
                if (null == i || g) return (0, l.jsx)("div", {
                    className: n(M, N.card, N.cardPlaceholder, {
                        [N.cardSmall]: p,
                        [N.cardDisabled]: j
                    })
                });
                let {
                    name: D
                } = i, A = null != i.discoverySplash && /^data:/.test(i.discoverySplash) ? i.discoverySplash : h.default.getGuildDiscoverySplashURL({
                    id: i.id,
                    splash: i.discoverySplash,
                    size: 240 * (0, o.getDevicePixelRatio)()
                }), b = (0, d.isThemeDark)(R) ? v : S, k = null !== (s = h.default.getGuildIconURL({
                    id: i.id,
                    icon: i.icon,
                    size: 40
                })) && void 0 !== s ? s : void 0, y = null != i.description ? i.description : I, L = null != C ? C : null == i ? void 0 : i.memberCount, U = null != _ ? _ : null == i ? void 0 : i.presenceCount, V = null;
                if (null != k) V = (0, l.jsx)("img", {
                    src: k,
                    alt: "",
                    className: N.avatar
                });
                else {
                    let e = (0, f.getAcronym)(i.name);
                    V = (0, l.jsx)("div", {
                        className: N.defaultIcon,
                        children: (0, l.jsx)(r.Text, {
                            className: N.acronym,
                            style: {
                                fontSize: null !== (a = E[e.length]) && void 0 !== a ? a : E[E.length - 1]
                            },
                            variant: "text-sm/normal",
                            children: e
                        })
                    })
                }
                return (0, l.jsxs)("div", {
                    className: n(M, N.card, {
                        [N.cardSmall]: p,
                        [N.cardDisabled]: j,
                        [N.splashLoaded]: T
                    }),
                    children: [(0, l.jsxs)("div", {
                        className: N.cardHeader,
                        children: [(0, l.jsx)("div", {
                            className: N.splash,
                            children: (0, l.jsx)("img", {
                                src: null != A ? A : b,
                                alt: "",
                                className: N.splashImage,
                                onLoad: () => O(!0)
                            })
                        }), (0, l.jsx)("div", {
                            className: N.guildIcon,
                            children: (0, l.jsx)(m.default, {
                                mask: m.default.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: N.iconMask,
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
                        className: N.guildInfo,
                        children: [(0, l.jsxs)("div", {
                            className: N.title,
                            children: [(0, l.jsx)(u.default, {
                                className: N.verifiedIcon,
                                guild: i,
                                tooltipColor: r.Tooltip.Colors.PRIMARY
                            }), (0, l.jsx)(r.Text, {
                                className: N.guildName,
                                variant: "text-md/normal",
                                children: (0, l.jsx)("span", {
                                    children: D
                                })
                            })]
                        }), (0, l.jsx)(r.Text, {
                            className: N.description,
                            variant: "text-sm/normal",
                            children: (0, l.jsx)("span", {
                                children: y
                            })
                        }), (0, l.jsxs)("div", {
                            className: N.memberInfo,
                            children: [null != U && (0, l.jsxs)("div", {
                                className: N.memberCount,
                                children: [(0, l.jsx)("div", {
                                    className: N.dotOnline
                                }), (0, l.jsx)(r.Text, {
                                    variant: "text-xs/normal",
                                    children: p ? x.default.Messages.NUMBERS_ONLY.format({
                                        count: U
                                    }) : x.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                        membersOnline: U
                                    })
                                })]
                            }), null != L && (0, l.jsxs)("div", {
                                className: N.memberCount,
                                children: [(0, l.jsx)("div", {
                                    className: N.dotOffline
                                }), (0, l.jsx)(r.Text, {
                                    variant: "text-xs/normal",
                                    children: p ? x.default.Messages.NUMBERS_ONLY.format({
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
        }
    }
]);
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["5373"], {
        68422: function(e, l, t) {
            "use strict";
            e.exports = t.p + "467602d632b5f9c1ce4b.svg"
        },
        578817: function(e, l, t) {
            "use strict";
            e.exports = t.p + "d4d9f2bff23beec65b1f.svg"
        },
        276825: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                CheckmarkSmallIcon: function() {
                    return i
                }
            });
            var s = t("920040");
            t("773670");
            var a = t("912557"),
                n = t("75196");
            let i = e => {
                let {
                    width: l = 24,
                    height: t = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, n.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: t,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        502155: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return h
                }
            });
            var s = t("920040"),
                a = t("773670"),
                n = t("498225"),
                i = t("77078"),
                r = t("716241"),
                d = t("592407"),
                u = t("525065"),
                c = t("476765"),
                o = t("324105"),
                C = t("49111"),
                L = t("782340"),
                f = t("278672"),
                h = e => {
                    let {
                        transitionState: l,
                        onClose: t,
                        guild: h
                    } = e, E = (0, c.useUID)();
                    a.useEffect(() => {
                        r.default.trackWithMetadata(C.AnalyticEvents.OPEN_MODAL, {
                            type: C.AnalyticsSections.DISCOVERY_SETUP_SUCCESS_MODAL
                        })
                    }, []);
                    let [x, N] = (0, n.useStateFromStoresArray)([u.default], () => [u.default.getOnlineCount(h.id), u.default.getMemberCount(h.id)], [h.id]);
                    return (0, s.jsxs)(i.ModalRoot, {
                        transitionState: l,
                        "aria-labelledby": E,
                        className: f.root,
                        children: [(0, s.jsx)(i.ModalHeader, {
                            className: f.modalHeader,
                            separator: !1,
                            children: (0, s.jsx)(i.ModalCloseButton, {
                                onClick: t,
                                className: f.modalCloseButton
                            })
                        }), (0, s.jsx)(i.Heading, {
                            variant: "heading-xl/semibold",
                            id: E,
                            className: f.header,
                            children: L.default.Messages.SERVER_DISCOVERY_SETUP_CONFIRMATION_PAGE_HEADER
                        }), (0, s.jsxs)(i.ModalContent, {
                            className: f.modalContent,
                            children: [(0, s.jsx)(i.Text, {
                                variant: "text-md/normal",
                                className: f.subheader,
                                children: L.default.Messages.SERVER_DISCOVERY_SETUP_CONFIRMATION_PAGE_SUBHEADING.format({
                                    onServerSettingsClick: () => {
                                        t(), d.default.setSection(C.GuildSettingsSections.DISCOVERY), r.default.trackWithMetadata(C.AnalyticEvents.SETTINGS_PANE_VIEWED, {
                                            settings_type: "guild",
                                            origin_pane: "DISCOVERY",
                                            destination_pane: "DISCOVERY"
                                        })
                                    }
                                })
                            }), (0, s.jsx)(o.default, {
                                className: f.previewCard,
                                guild: h,
                                presenceCount: x,
                                memberCount: N
                            })]
                        }), (0, s.jsx)(i.ModalFooter, {
                            children: (0, s.jsx)(i.Button, {
                                onClick: t,
                                children: L.default.Messages.GOT_IT
                            })
                        })]
                    })
                }
        },
        324105: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return R
                }
            });
            var s = t("920040"),
                a = t("773670"),
                n = t("575482"),
                i = t.n(n),
                r = t("819855"),
                d = t("77078"),
                u = t("841098"),
                c = t("407063"),
                o = t("580357"),
                C = t("587974"),
                L = t("315102"),
                f = t("159885"),
                h = t("782340"),
                E = t("514925"),
                x = t("68422"),
                N = t("578817");
            let v = [16, 16, 14, 14, 12, 10, 8];
            var R = function(e) {
                var l, t;
                let {
                    guild: n,
                    disabled: R,
                    small: m,
                    loading: I = !1,
                    description: p,
                    memberCount: g,
                    presenceCount: j,
                    className: D
                } = e, _ = (0, u.default)(), [M, S] = a.useState(!1);
                if (null == n || I) return (0, s.jsx)("div", {
                    className: i(D, E.card, E.cardPlaceholder, {
                        [E.cardSmall]: m,
                        [E.cardDisabled]: R
                    })
                });
                let {
                    name: A
                } = n, T = null != n.discoverySplash && /^data:/.test(n.discoverySplash) ? n.discoverySplash : L.default.getGuildDiscoverySplashURL({
                    id: n.id,
                    splash: n.discoverySplash,
                    size: 240 * (0, c.getDevicePixelRatio)()
                }), F = (0, r.isThemeDark)(_) ? x : N, B = null !== (l = L.default.getGuildIconURL({
                    id: n.id,
                    icon: n.icon,
                    size: 40
                })) && void 0 !== l ? l : void 0, V = null != n.description ? n.description : p, w = null != g ? g : null == n ? void 0 : n.memberCount, U = null != j ? j : null == n ? void 0 : n.presenceCount, O = null;
                if (null != B) O = (0, s.jsx)("img", {
                    src: B,
                    alt: "",
                    className: E.avatar
                });
                else {
                    let e = (0, f.getAcronym)(n.name);
                    O = (0, s.jsx)("div", {
                        className: E.defaultIcon,
                        children: (0, s.jsx)(d.Text, {
                            className: E.acronym,
                            style: {
                                fontSize: null !== (t = v[e.length]) && void 0 !== t ? t : v[v.length - 1]
                            },
                            variant: "text-sm/normal",
                            children: e
                        })
                    })
                }
                return (0, s.jsxs)("div", {
                    className: i(D, E.card, {
                        [E.cardSmall]: m,
                        [E.cardDisabled]: R,
                        [E.splashLoaded]: M
                    }),
                    children: [(0, s.jsxs)("div", {
                        className: E.cardHeader,
                        children: [(0, s.jsx)("div", {
                            className: E.splash,
                            children: (0, s.jsx)("img", {
                                src: null != T ? T : F,
                                alt: "",
                                className: E.splashImage,
                                onLoad: () => S(!0)
                            })
                        }), (0, s.jsx)("div", {
                            className: E.guildIcon,
                            children: (0, s.jsx)(C.default, {
                                mask: C.default.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, s.jsx)("div", {
                                    className: E.iconMask,
                                    children: (0, s.jsx)(C.default, {
                                        mask: C.default.Masks.SQUIRCLE,
                                        width: 40,
                                        height: 40,
                                        children: null != O ? O : null
                                    })
                                })
                            })
                        })]
                    }), (0, s.jsxs)("div", {
                        className: E.guildInfo,
                        children: [(0, s.jsxs)("div", {
                            className: E.title,
                            children: [(0, s.jsx)(o.default, {
                                className: E.verifiedIcon,
                                guild: n,
                                tooltipColor: d.Tooltip.Colors.PRIMARY
                            }), (0, s.jsx)(d.Text, {
                                className: E.guildName,
                                variant: "text-md/normal",
                                children: (0, s.jsx)("span", {
                                    children: A
                                })
                            })]
                        }), (0, s.jsx)(d.Text, {
                            className: E.description,
                            variant: "text-sm/normal",
                            children: (0, s.jsx)("span", {
                                children: V
                            })
                        }), (0, s.jsxs)("div", {
                            className: E.memberInfo,
                            children: [null != U && (0, s.jsxs)("div", {
                                className: E.memberCount,
                                children: [(0, s.jsx)("div", {
                                    className: E.dotOnline
                                }), (0, s.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    children: m ? h.default.Messages.NUMBERS_ONLY.format({
                                        count: U
                                    }) : h.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                        membersOnline: U
                                    })
                                })]
                            }), null != w && (0, s.jsxs)("div", {
                                className: E.memberCount,
                                children: [(0, s.jsx)("div", {
                                    className: E.dotOffline
                                }), (0, s.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    children: m ? h.default.Messages.NUMBERS_ONLY.format({
                                        count: w
                                    }) : h.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                        count: w
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        931138: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return c
                }
            });
            var s = t("920040"),
                a = t("773670"),
                n = t("575482"),
                i = t.n(n),
                r = t("77078"),
                d = t("760607"),
                u = t("13681");

            function c(e) {
                let {
                    children: l,
                    size: t = 16,
                    className: n,
                    flowerStarClassName: c,
                    ...o
                } = e, C = a.Children.only(l), L = (0, r.useRedesignIconContext)().enabled;
                return (0, s.jsxs)("div", {
                    className: i(u.flowerStarContainer, n),
                    style: {
                        width: t,
                        height: t
                    },
                    children: [(0, s.jsx)(d.default, {
                        ...o,
                        className: i(c, u.flowerStar)
                    }), (0, s.jsx)("div", {
                        className: i(u.childContainer, {
                            [u.redesignIconChildContainer]: L
                        }),
                        children: C
                    })]
                })
            }
        },
        580357: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return R
                }
            });
            var s, a, n = t("920040"),
                i = t("773670"),
                r = t("575482"),
                d = t.n(r),
                u = t("77078"),
                c = t("449008"),
                o = t("931138"),
                C = t("928564"),
                L = t("888978"),
                f = t("390864"),
                h = t("486952"),
                E = t("49111"),
                x = t("782340"),
                N = t("427436");
            (s = a || (a = {}))[s.PARTNERED = 0] = "PARTNERED", s[s.STAFF = 1] = "STAFF", s[s.VERIFIED = 2] = "VERIFIED", s[s.VERIFIED_AND_PARTNERED = 3] = "VERIFIED_AND_PARTNERED", s[s.VERIFIED_AND_HUB = 4] = "VERIFIED_AND_HUB", s[s.HUB = 5] = "HUB", s[s.NONE = 6] = "NONE";
            class v extends i.PureComponent {
                renderBadge(e, l, t) {
                    let {
                        className: s,
                        badgeStrokeColor: i,
                        tooltipColor: r = u.Tooltip.Colors.BRAND,
                        tooltipPosition: C,
                        size: L = 16,
                        badgeColor: f,
                        iconClassName: h,
                        flowerStarClassName: E
                    } = this.props, v = function(e) {
                        switch (e) {
                            case a.VERIFIED:
                                return x.default.Messages.GUILD_VERIFIED;
                            case a.PARTNERED:
                                return x.default.Messages.GUILD_PARTNERED;
                            case a.VERIFIED_AND_PARTNERED:
                                return x.default.Messages.GUILD_VERIFIED_AND_PARTNERED;
                            case a.VERIFIED_AND_HUB:
                                return x.default.Messages.HUB_VERIFIED_DISCORD_HUB;
                            case a.HUB:
                                return x.default.Messages.HUB_DISCORD_HUB;
                            case a.STAFF:
                                return x.default.Messages.INTERNAL_EMPLOYEE_ONLY;
                            case a.NONE:
                                return null;
                            default:
                                (0, c.assertNever)(e)
                        }
                    }(e);
                    return (0, n.jsx)(u.Tooltip, {
                        color: r,
                        position: C,
                        text: v,
                        children: r => e === a.HUB || e === a.VERIFIED_AND_HUB ? (0, n.jsx)("div", {
                            ...r,
                            className: d(t, s),
                            style: {
                                width: L,
                                height: L
                            },
                            children: (0, n.jsx)(l, {
                                className: d(N.icon, h)
                            })
                        }) : (0, n.jsx)(o.default, {
                            ...r,
                            className: d(t, s),
                            flowerStarClassName: E,
                            color: f,
                            stroke: i,
                            size: L,
                            children: (0, n.jsx)(l, {
                                className: d(N.icon, h)
                            })
                        })
                    })
                }
                render() {
                    let {
                        guild: e
                    } = this.props, l = new Set(e.features);
                    return l.has(E.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) ? this.renderBadge(a.STAFF, f.default, N.staff) : l.has(E.GuildFeatures.VERIFIED) && l.has(E.GuildFeatures.HUB) ? this.renderBadge(a.VERIFIED_AND_HUB, C.default, N.verifiedHub) : l.has(E.GuildFeatures.HUB) ? this.renderBadge(a.HUB, C.default, N.hub) : l.has(E.GuildFeatures.VERIFIED) && l.has(E.GuildFeatures.PARTNERED) ? this.renderBadge(a.VERIFIED_AND_PARTNERED, h.default, N.verified) : l.has(E.GuildFeatures.VERIFIED) ? this.renderBadge(a.VERIFIED, h.default, N.verified) : l.has(E.GuildFeatures.PARTNERED) ? this.renderBadge(a.PARTNERED, L.default, N.partnered) : null
                }
            }
            var R = v
        },
        760607: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return n
                }
            });
            var s = t("920040");
            t("773670");
            var a = t("75196"),
                n = function(e) {
                    let {
                        width: l = 16,
                        height: t = 16,
                        color: n = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: l,
                        height: t,
                        viewBox: "0 0 16 15.2",
                        children: (0, s.jsx)("path", {
                            className: i,
                            fill: n,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        928564: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return n
                }
            });
            var s = t("920040");
            t("773670");
            var a = t("75196");

            function n(e) {
                let {
                    width: l = 16,
                    height: t = 16,
                    color: n = "currentColor",
                    ...i
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, a.default)(i),
                    width: l,
                    height: t,
                    viewBox: "0 0 16 16",
                    children: [(0, s.jsx)("circle", {
                        cx: "8",
                        cy: "8",
                        r: "8"
                    }), (0, s.jsx)("path", {
                        d: "M4.66666 12.6667C3.93028 12.6667 3.33333 12.0697 3.33333 11.3333C3.33333 10.5969 3.93028 9.99999 4.66666 9.99999C5.40304 9.99999 5.99999 10.5969 5.99999 11.3333C5.99999 12.0697 5.40304 12.6667 4.66666 12.6667Z",
                        fill: n
                    }), (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4.66666 12C4.29847 12 3.99999 11.7015 3.99999 11.3333C3.99999 10.9651 4.29847 10.6667 4.66666 10.6667C5.03485 10.6667 5.33333 10.9651 5.33333 11.3333C5.33333 11.7015 5.03485 12 4.66666 12ZM3.33333 11.3333C3.33333 12.0697 3.93028 12.6667 4.66666 12.6667C5.40304 12.6667 5.99999 12.0697 5.99999 11.3333C5.99999 10.5969 5.40304 9.99999 4.66666 9.99999C3.93028 9.99999 3.33333 10.5969 3.33333 11.3333Z",
                        fill: n
                    }), (0, s.jsx)("path", {
                        d: "M8 12.6667C7.26362 12.6667 6.66666 12.0697 6.66666 11.3333C6.66666 10.5969 7.26362 9.99999 8 9.99999C8.73637 9.99999 9.33333 10.5969 9.33333 11.3333C9.33333 12.0697 8.73637 12.6667 8 12.6667Z",
                        fill: n
                    }), (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8 12C7.63181 12 7.33333 11.7015 7.33333 11.3333C7.33333 10.9651 7.63181 10.6667 8 10.6667C8.36819 10.6667 8.66666 10.9651 8.66666 11.3333C8.66666 11.7015 8.36819 12 8 12ZM6.66666 11.3333C6.66666 12.0697 7.26362 12.6667 8 12.6667C8.73637 12.6667 9.33333 12.0697 9.33333 11.3333C9.33333 10.5969 8.73637 9.99999 8 9.99999C7.26362 9.99999 6.66666 10.5969 6.66666 11.3333Z",
                        fill: n
                    }), (0, s.jsx)("path", {
                        d: "M8 6C7.26362 6 6.66666 5.40304 6.66666 4.66666C6.66666 3.93028 7.26362 3.33333 8 3.33333C8.73637 3.33333 9.33333 3.93028 9.33333 4.66666C9.33333 5.40304 8.73637 6 8 6Z",
                        fill: n
                    }), (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8 5.33333C7.63181 5.33333 7.33333 5.03485 7.33333 4.66666C7.33333 4.29847 7.63181 3.99999 8 3.99999C8.36819 3.99999 8.66666 4.29847 8.66666 4.66666C8.66666 5.03485 8.36819 5.33333 8 5.33333ZM6.66666 4.66666C6.66666 5.40304 7.26362 6 8 6C8.73637 6 9.33333 5.40304 9.33333 4.66666C9.33333 3.93028 8.73637 3.33333 8 3.33333C7.26362 3.33333 6.66666 3.93028 6.66666 4.66666Z",
                        fill: n
                    }), (0, s.jsx)("path", {
                        d: "M11.3333 12.6667C10.5969 12.6667 9.99999 12.0697 9.99999 11.3333C9.99999 10.5969 10.5969 9.99999 11.3333 9.99999C12.0697 9.99999 12.6667 10.5969 12.6667 11.3333C12.6667 12.0697 12.0697 12.6667 11.3333 12.6667Z",
                        fill: n
                    }), (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.3333 12C10.9651 12 10.6667 11.7015 10.6667 11.3333C10.6667 10.9651 10.9651 10.6667 11.3333 10.6667C11.7015 10.6667 12 10.9651 12 11.3333C12 11.7015 11.7015 12 11.3333 12ZM9.99999 11.3333C9.99999 12.0697 10.5969 12.6667 11.3333 12.6667C12.0697 12.6667 12.6667 12.0697 12.6667 11.3333C12.6667 10.5969 12.0697 9.99999 11.3333 9.99999C10.5969 9.99999 9.99999 10.5969 9.99999 11.3333Z",
                        fill: n
                    }), (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5.99999 8.49999C5.53976 8.49999 5.16666 8.87309 5.16666 9.33333V10.6667H4.16666V9.33333C4.16666 8.32081 4.98747 7.49999 5.99999 7.49999H9.99999C11.0125 7.49999 11.8333 8.32081 11.8333 9.33333V10.6667H10.8333V9.33333C10.8333 8.87309 10.4602 8.49999 9.99999 8.49999H5.99999Z",
                        fill: n
                    }), (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.5 11.3333V4.66666H8.5L8.49999 11.3333H7.5Z",
                        fill: "white"
                    })]
                })
            }
        },
        888978: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return n
                }
            });
            var s = t("920040");
            t("773670");
            var a = t("75196");

            function n(e) {
                let {
                    width: l = 16,
                    height: t = 16,
                    color: n = "currentColor",
                    ...i
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, a.default)(i),
                    width: l,
                    height: t,
                    viewBox: "0 0 16 16",
                    children: [(0, s.jsx)("path", {
                        d: "M10.5906 6.39993L9.19223 7.29993C8.99246 7.39993 8.89258 7.39993 8.69281 7.29993C8.59293 7.19993 8.39317 7.09993 8.29328 6.99993C7.89375 6.89993 7.5941 6.99993 7.29445 7.19993L6.79504 7.49993L4.29797 9.19993C3.69867 9.49993 2.99949 9.39993 2.69984 8.79993C2.30031 8.29993 2.50008 7.59993 2.99949 7.19993L5.99598 5.19993C6.79504 4.69993 7.79387 4.49993 8.69281 4.69993C9.49188 4.89993 10.0912 5.29993 10.5906 5.89993C10.7904 6.09993 10.6905 6.29993 10.5906 6.39993Z",
                        fill: n
                    }), (0, s.jsx)("path", {
                        d: "M13.4871 7.79985C13.4871 8.19985 13.2874 8.59985 12.9877 8.79985L9.89135 10.7999C9.29206 11.1999 8.69276 11.3999 7.99358 11.3999C7.69393 11.3999 7.49417 11.3999 7.19452 11.2999C6.39545 11.0999 5.79616 10.6999 5.29674 10.0999C5.19686 9.89985 5.29674 9.69985 5.39663 9.59985L6.79499 8.69985C6.89487 8.59985 7.09463 8.59985 7.19452 8.69985C7.39428 8.79985 7.59405 8.89985 7.69393 8.99985C8.09346 8.99985 8.39311 8.99985 8.69276 8.79985L9.39194 8.39985L11.3896 6.99985L11.6892 6.79985C12.1887 6.49985 12.9877 6.59985 13.2874 7.09985C13.4871 7.39985 13.4871 7.59985 13.4871 7.79985Z",
                        fill: n
                    })]
                })
            }
        },
        390864: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return a
                }
            });
            var s = t("920040");

            function a(e) {
                return (0, s.jsx)("svg", {
                    ...e,
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, s.jsx)("rect", {
                            width: "24",
                            height: "24"
                        }), (0, s.jsx)("path", {
                            fill: "currentColor",
                            d: "M4.95497175,5.40753824 L4.94817763,5.41433235 L9.84188351,10.4332441 L8.59855999,11.6765676 L7.92205999,12.3530676 L2.9710894,7.42150882 L2.97011881,7.42247941 L2.89344234,7.50012647 L2.84394234,7.55059706 C2.69738351,7.68453824 2.4595894,7.86506765 2.31011881,7.78353824 C1.98497175,7.60689118 1.54432469,7.24583235 1.66855999,6.91486176 C1.79279528,6.58389118 2.70320704,4.92903824 4.52305999,4.12247941 C4.52305999,4.12247941 4.75114822,4.06036176 4.89576587,4.18459706 C5.04038351,4.30883235 5.4130894,4.70095 5.30923646,4.86692059 C5.20538351,5.03289118 4.95497175,5.40753824 4.95497175,5.40753824 Z M16.6512394,10.6097941 L16.7211218,11.0368529 L16.2930923,10.9698824 L16.1649747,11.098 L16.1882688,11.1222647 C16.2300041,11.164 16.2300041,11.2309706 16.1882688,11.2736765 C16.1669159,11.2940588 16.1397394,11.3047353 16.1125629,11.3047353 C16.0853865,11.3047353 16.05821,11.2940588 16.036857,11.2736765 L16.0135629,11.2494118 L15.9524159,11.3105588 L15.9825041,11.3406471 C16.0242394,11.3823824 16.0242394,11.4503235 15.9825041,11.4920588 C15.9621218,11.5124412 15.9349453,11.5231176 15.9067982,11.5231176 C15.8796218,11.5231176 15.8524453,11.5124412 15.8320629,11.4920588 L15.8019747,11.4619706 L14.650857,12.6150294 L14.67221,12.6373529 C14.7139453,12.6790882 14.7139453,12.7470294 14.67221,12.7887647 C14.6518276,12.8091471 14.6246512,12.8198235 14.5974747,12.8198235 C14.5693276,12.8198235 14.5421512,12.8091471 14.5217688,12.7887647 L14.5004159,12.7674118 L14.4392688,12.8275882 L14.4674159,12.8557353 C14.5091512,12.8974706 14.5091512,12.9654118 14.4674159,13.0071471 C14.4470335,13.0275294 14.4188865,13.0382059 14.39171,13.0382059 C14.3645335,13.0382059 14.337357,13.0275294 14.3160041,13.0071471 L14.287857,12.979 L14.1141218,13.1537059 L13.9209747,13.1750588 L13.8006218,13.0508235 L13.8035335,13.0566471 L7.64418057,19.2179412 L7.51897469,19.3421765 L7.5180041,19.3431471 L7.58691587,19.4120588 L7.54032763,19.6886765 L7.4112394,19.8148529 L7.45297469,19.8565882 C7.49470999,19.8983235 7.49470999,19.9662647 7.45297469,20.008 C7.43259234,20.0283824 7.40541587,20.0390588 7.37726881,20.0390588 C7.35009234,20.0390588 7.32291587,20.0283824 7.30253351,20.008 L7.25982763,19.9652941 L7.19868057,20.0264412 L7.24818057,20.0749706 C7.28894528,20.1167059 7.28894528,20.1846471 7.24818057,20.2263824 C7.22682763,20.2477353 7.19965116,20.2574412 7.17247469,20.2574412 C7.14529822,20.2574412 7.11715116,20.2477353 7.09676881,20.2263824 L7.04629822,20.1759118 L5.89420999,21.3124706 L5.94565116,21.3648824 C5.98738646,21.4066176 5.98738646,21.4735882 5.94565116,21.5153235 C5.92429822,21.5366765 5.89712175,21.5473529 5.86994528,21.5473529 C5.84276881,21.5473529 5.81462175,21.5366765 5.7942394,21.5153235 L5.74182763,21.4629118 L5.67970999,21.5230882 L5.73988646,21.5832647 C5.78162175,21.625 5.78162175,21.6919706 5.73988646,21.7346765 C5.7195041,21.7550588 5.69135704,21.7657353 5.66418057,21.7657353 C5.6370041,21.7657353 5.60982763,21.7550588 5.58944528,21.7346765 L5.52829822,21.6735294 L5.39532763,21.8035882 L5.46715116,22.2355 L5.03038646,22.1646471 L4.87412175,22.318 L4.24032763,22.2073529 C4.21606293,22.1889118 3.65506293,22.0112941 3.28720999,21.6405294 C2.90770999,21.2581176 2.72329822,20.6815882 2.72329822,20.6815882 L2.60294528,20.0196471 L2.7417394,19.8779412 L2.7087394,19.3868235 L3.14841587,19.4654412 L3.23285704,19.3790588 L3.21344528,19.3586765 C3.17170999,19.3169412 3.17170999,19.249 3.21344528,19.2072647 C3.23382763,19.1868824 3.26197469,19.1762059 3.28818057,19.1762059 C3.31632763,19.1762059 3.3435041,19.1868824 3.36485704,19.2072647 L3.38329822,19.2257059 L3.44347469,19.1645588 L3.4182394,19.1402941 C3.3765041,19.0985588 3.3765041,19.0306176 3.4182394,18.9888824 C3.43959234,18.9675294 3.46676881,18.9578235 3.49394528,18.9578235 C3.52209234,18.9578235 3.54829822,18.9675294 3.56965116,18.9888824 L3.59294528,19.0121765 L4.72756293,17.8581471 L4.72076881,17.8503824 C4.6800041,17.8086471 4.6800041,17.7416765 4.72076881,17.6999412 C4.74212175,17.6785882 4.76929822,17.6679118 4.79647469,17.6679118 C4.82365116,17.6679118 4.85179822,17.6785882 4.87218057,17.6999412 L4.8780041,17.7057647 L4.93818057,17.6436471 L4.92653351,17.632 C4.88479822,17.5902647 4.88479822,17.5232941 4.92653351,17.4815588 C4.94691587,17.4602059 4.97506293,17.4495294 5.0022394,17.4495294 C5.02941587,17.4495294 5.05659234,17.4602059 5.07794528,17.4815588 L5.08765116,17.4912647 L5.2332394,17.3437353 L5.49044528,17.3068529 L5.5710041,17.3738235 L11.7720923,11.1737059 L11.86721,11.0766471 L11.8691512,11.0756765 L11.7905335,10.9951176 L11.8109159,10.8029412 L11.9603865,10.6515294 L11.9400041,10.6311471 C11.8992394,10.5894118 11.8992394,10.5224412 11.9400041,10.4807059 C11.961357,10.4593529 11.9885335,10.4486765 12.0166806,10.4486765 C12.0428865,10.4486765 12.0710335,10.4593529 12.0914159,10.4807059 L12.1117982,10.5001176 L12.1729453,10.4389706 L12.1457688,10.4127647 C12.1040335,10.3710294 12.1040335,10.3030882 12.1457688,10.2613529 C12.1671218,10.2409706 12.1942982,10.2302941 12.2214747,10.2302941 C12.2486512,10.2302941 12.2758276,10.2409706 12.2971806,10.2613529 L12.3233865,10.2875588 L13.4725629,9.13255882 L13.4560629,9.11605882 C13.4143276,9.07432353 13.4143276,9.00638235 13.4560629,8.96464706 C13.4764453,8.94426471 13.5036218,8.93358824 13.5317688,8.93358824 C13.5589453,8.93358824 13.5861218,8.94426471 13.6074747,8.96464706 L13.6230041,8.98114706 L13.6831806,8.92 L13.660857,8.89767647 C13.6191218,8.85594118 13.6191218,8.788 13.660857,8.74626471 C13.68221,8.72588235 13.7093865,8.71520588 13.7365629,8.71520588 C13.7637394,8.71520588 13.7918865,8.72588235 13.8122688,8.74626471 L13.8345923,8.76858824 L13.9607688,8.64241176 L13.8937982,8.20952941 L14.3305629,8.26970588 L14.3936512,8.20661765 L14.5644747,8.03579412 L14.0180335,7.49420588 L11.2867982,2.44714706 C11.2867982,2.44714706 11.1771218,2.18314706 11.3634747,2.05211765 C11.4440335,1.99485294 11.5139159,1.97058824 11.5857394,1.97058824 C11.6789159,1.97058824 11.7759747,2.01135294 11.9079747,2.0725 C12.1418865,2.18314706 16.5347688,4.56885294 16.5347688,4.56885294 L17.2918276,5.30941176 L17.4286806,5.17158824 L17.3995629,5.14247059 L17.3549159,4.74841176 L17.8169159,4.81732353 L17.8790335,4.73482353 L18.4924453,4.84547059 C18.4924453,4.84547059 19.6649159,5.81702941 20.0929453,6.42364706 L20.21621,7.05064706 L20.13371,7.13411765 L20.1958276,7.56894118 L19.8677688,7.53108824 L19.7144159,7.67861765 L19.9890923,7.94747059 L19.9920041,7.94455882 L21.9952982,9.96144118 C21.9952982,9.96144118 22.0719747,10.0031765 21.9952982,10.0788824 C21.9865629,10.0876176 19.3892688,12.6645294 19.3892688,12.6645294 C19.3892688,12.6645294 19.3523865,12.7052941 19.3077394,12.7052941 C19.29221,12.7052941 19.2747394,12.6994706 19.2582394,12.6849118 L16.9123276,10.3613235 L16.6512394,10.6097941 Z M17.5067159,17.5740559 L19.82351,20.05585 L17.0583041,22.6356735 L14.65901,20.0082912 L12.8799218,17.3401441 L12.4062747,16.88785 L14.2901865,15.0039382 L14.7764512,15.5047618 L17.5067159,17.5740559 Z"
                        })]
                    })
                })
            }
            t("773670")
        },
        486952: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return r
                }
            });
            var s = t("920040");
            t("773670");
            var a = t("469563"),
                n = t("276825"),
                i = t("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: l = 16,
                        height: t = 16,
                        color: a = "currentColor",
                        ...n
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, i.default)(n),
                        width: l,
                        height: t,
                        viewBox: "0 0 16 15.2",
                        children: (0, s.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: a
                        })
                    })
                }, n.CheckmarkSmallIcon)
        }
    }
]);
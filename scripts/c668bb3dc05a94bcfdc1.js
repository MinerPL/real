(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["69073"], {
        584503: function(e, t, n) {
            "use strict";
            e.exports = n.p + "55fda0412a4ff4072236.svg"
        },
        45656: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f4d8991602d4587f573e.svg"
        },
        890450: function(e, t, n) {
            "use strict";
            e.exports = n.p + "321a07cbc6f5919dbce9.svg"
        },
        839491: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a826e445dff97cf15335.svg"
        },
        164654: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1f3e315f020ed5635dc1.svg"
        },
        540346: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1af9bdf041e000508e41.svg"
        },
        526094: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7442b576347c1d02886f.svg"
        },
        367469: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3205da2e8f78633583d0.svg"
        },
        23933: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8f581f91e7e650ac87a2.svg"
        },
        283397: function(e, t, n) {
            "use strict";
            e.exports = n.p + "44d5e1639bc492dc8d62.svg"
        },
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return a
                },
                unsubscribeMembers: function() {
                    return l
                },
                subscribeChannel: function() {
                    return u
                },
                subscribeChannelDimensions: function() {
                    return s
                }
            }), n("424973");
            var r = n("913144"),
                i = n("696605");

            function a(e, t) {
                r.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function l(e, t) {
                r.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function u(e, t, n) {
                r.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function s(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: r,
                    height: a,
                    rowHeight: l
                } = e;

                function s(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / l)) + t)
                }
                let o = [];

                function c(e) {
                    let t = e + (i.MINIMUM_RANGE - 1);
                    return o.push([e, t]), t + 1
                }
                let d = s(.5 * a),
                    f = s(r, -d),
                    I = s(r + a, d);
                for (f > 0 && (f = Math.max(c(0), f)), f = Math.floor(f / i.MINIMUM_RANGE) * i.MINIMUM_RANGE; f <= I;) f = c(f);
                u(t, n, o)
            }
        },
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                a = n.n(i),
                l = n("446674"),
                u = n("77078"),
                s = n("102985"),
                o = n("79798"),
                c = n("754474"),
                d = n("158998"),
                f = n("782340"),
                I = n("892802");

            function E(e) {
                if (e.isSystemUser()) return c.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return c.BotTypes.AI;
                if (e.bot) return c.BotTypes.BOT;
                return null
            }
            let _ = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: i,
                    botVerified: l,
                    discriminatorClass: s,
                    className: c,
                    usernameClass: d,
                    color: E,
                    botClass: _,
                    showStreamerModeTooltip: T
                } = e;
                return (0, r.jsxs)("div", {
                    className: a(I.info, c),
                    children: [(0, r.jsx)(u.Tooltip, {
                        text: f.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: T,
                        children: e => (0, r.jsx)("span", {
                            ...e,
                            className: a(I.username, d),
                            style: null != E ? {
                                color: E
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, r.jsx)("span", {
                        className: a(I.infoSpacing, s),
                        children: n
                    }) : void 0, null != i && (0, r.jsx)(o.default, {
                        type: i,
                        className: a(I.infoSpacing, _),
                        verified: l
                    })]
                })
            };
            var T = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: i,
                    forceUsername: a,
                    showAccountIdentifier: u,
                    overrideDiscriminator: o,
                    forcePomelo: f,
                    ...I
                } = e, T = (0, l.useStateFromStores)([s.default], () => s.default.hidePersonalInformation), S = T || t || n.isNonUserBot(), N = n.toString(), p = d.default.getName(n), C = a ? N : null != i ? i : p, m = n.isPomelo() || f;
                if (m || C !== N) {
                    let e = C === N && m && a ? d.default.getUserTag(n, {
                            forcePomelo: f
                        }) : C,
                        t = u && e !== "@".concat(N) ? d.default.getUserTag(n) : void 0;
                    return (0, r.jsx)(_, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: E(n),
                        showStreamerModeTooltip: T && e !== p,
                        ...I
                    })
                }
                return (0, r.jsx)(c.default, {
                    name: C,
                    botType: E(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: S || C !== N ? null : null != o ? o : n.discriminator,
                    ...I
                })
            }
        },
        31745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CirclePlusIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: l = "transparent",
                    secondaryColorClass: u = "",
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...c
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, a.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof l ? l : l.css,
                        className: u
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        666031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GifIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87c-.625 0-1.178-.162-1.66-.485-.482-.324-.855-.777-1.121-1.359C4.133 13.437 4 12.762 4 12c0-.755.14-1.423.42-2.005.288-.583.701-1.039 1.24-1.37.546-.33 1.197-.495 1.951-.495.64 0 1.211.136 1.714.41.51.272.895.657 1.154 1.153l-1.218.873c-.367-.676-.913-1.013-1.639-1.013-.661 0-1.168.215-1.52.646-.352.425-.528 1.025-.528 1.8 0 .784.176 1.388.528 1.812.352.424.859.636 1.52.636.295 0 .564-.054.809-.162.251-.115.445-.27.582-.463v-.927H7.299v-1.402h3.245v4.226H9.272l-.205-.712c-.424.575-1.053.863-1.887.863Zm6.34-.151h-1.574V8.28h1.574v7.438Zm1.51 0h1.574v-2.824h2.76v-1.423h-2.76V9.704H20V8.28h-4.97v7.438Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        504318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PencilIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "m13.957 5.457 4.586 4.586a1 1 0 0 0 1.414 0l1.379-1.379a2 2 0 0 0 0-2.828l-3.172-3.172a2 2 0 0 0-2.828 0l-1.379 1.379a1 1 0 0 0 0 1.414ZM2.111 20.156l.727-4.218a3 3 0 0 1 .835-1.611l7.87-7.87a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-7.87 7.87a3 3 0 0 1-1.611.835l-4.218.727a1.5 1.5 0 0 1-1.733-1.733Z",
                        className: u
                    })
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        className: u
                    })
                })
            }
        },
        125094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenArrowIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.293-.707l-3-3a1 1 0 1 0-1.414 1.414L14.586 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.586l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: u
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M13 19.5a.5.5 0 0 0 .5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2Z",
                        className: u
                    })]
                })
            }
        },
        197801: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SettingsIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M10.558 1.094c-.453.059-.705.532-.636.983.178 1.166-.187 2.202-.983 2.532-.796.33-1.787-.144-2.485-1.094-.27-.369-.783-.524-1.146-.246a11.065 11.065 0 0 0-2.04 2.04c-.277.362-.121.874.247 1.145.95.698 1.424 1.689 1.094 2.485-.33.796-1.365 1.161-2.532.983-.451-.07-.924.183-.983.636a11.102 11.102 0 0 0 0 2.884c.059.453.532.705.983.636 1.167-.178 2.202.188 2.532.983.33.796-.144 1.787-1.094 2.486-.368.27-.524.782-.246 1.145a11.064 11.064 0 0 0 2.04 2.04c.362.277.874.122 1.145-.247.698-.95 1.689-1.424 2.485-1.094.796.33 1.161 1.366.983 2.532-.07.452.183.924.636.983a11.1 11.1 0 0 0 2.884 0c.454-.06.706-.532.636-.983-.178-1.166.188-2.202.984-2.532.795-.33 1.786.144 2.485 1.094.27.368.782.524 1.145.246a11.066 11.066 0 0 0 2.04-2.04c.277-.362.122-.874-.247-1.145-.95-.698-1.424-1.689-1.094-2.485.33-.796 1.366-1.161 2.532-.983.451.07.924-.183.983-.636a11.102 11.102 0 0 0 0-2.884c-.059-.453-.532-.705-.983-.636-1.166.178-2.202-.187-2.532-.983-.33-.796.144-1.787 1.094-2.485.369-.271.524-.783.246-1.146a11.065 11.065 0 0 0-2.039-2.039c-.363-.278-.875-.122-1.145.246-.699.95-1.69 1.424-2.485 1.094-.796-.33-1.162-1.365-.983-2.532.069-.451-.183-.924-.637-.983a11.104 11.104 0 0 0-2.884 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.786 3.374A.25.25 0 0 0 17.57 5h-3.134a.75.75 0 0 0-.65.378L6.213 18.626A.25.25 0 0 0 6.43 19h3.134a.75.75 0 0 0 .65-.378l7.571-13.248Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return a
                }
            });
            var r = n("884691"),
                i = n("599110");
            let a = () => r.useContext(i.AnalyticsContext)
        },
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("884691");

            function i(e, t) {
                let n = r.useRef(e);
                return r.useEffect(() => {
                    function e(e) {
                        null != n.current && !n.current.contains(e.target) && t()
                    }
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [n, t]), n
            }
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return u
                }
            }), n("37983");
            var r = n("884691"),
                i = n("917351"),
                a = n.n(i);
            n("233736");
            var l = n("666020");

            function u(e) {
                r.useEffect(() => (a.forEach(e, (e, t) => (0, l.subscribeMembers)(t, e)), () => {
                    a.forEach(e, (e, t) => (0, l.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        478272: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("974889"),
                l = n("954016"),
                u = n("49111");

            function s(e) {
                let {
                    channel: t,
                    guildId: s,
                    locationObject: o,
                    openInPopout: c,
                    initialSelectedApplicationId: d,
                    initialSlide: f = l.ActivityShelfSlides.DIRECTORY,
                    enableSelectedTextChannelInvite: I = !1,
                    analyticsLocations: E
                } = e;
                c && (0, a.default)(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let _ = c ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
                return (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("605455").then(n.bind(n, "605455"));
                    return n => (0, r.jsx)(e, {
                        ...n,
                        channel: t,
                        guildId: s,
                        locationObject: o,
                        initialSlide: f,
                        initialSelectedApplicationId: d,
                        enableSelectedTextChannelInvite: I,
                        analyticsLocations: E
                    })
                }, {
                    modalKey: l.ACTIVITY_SHELF_WEB_MODAL_KEY,
                    contextKey: _
                })
            }
        },
        547356: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BenefitsConfirmationLite: function() {
                    return s
                },
                PurchaseConfirmationLite: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("724038"),
                l = n("782340"),
                u = n("22019");
            let s = e => {
                let {
                    onConfirm: t,
                    onCancel: n,
                    title: s,
                    subtitle: o,
                    confirmCta: c,
                    showOpenDiscord: d = !0
                } = e;
                return (0, r.jsxs)("div", {
                    className: u.confirmationContainer,
                    children: [(0, r.jsx)(i.Heading, {
                        className: u.confirmationHeader,
                        variant: "heading-lg/extrabold",
                        children: s
                    }), null != o ? (0, r.jsx)(i.Text, {
                        className: u.confirmationSubtitle,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: o
                    }) : null, (0, r.jsxs)("div", {
                        className: u.buttonContainer,
                        children: [d && (0, r.jsx)(i.Button, {
                            fullWidth: !0,
                            onClick: () => (0, a.default)("application_sub_mweb_success_modal"),
                            children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
                        }), (0, r.jsx)(i.Button, {
                            fullWidth: !0,
                            color: i.Button.Colors.PRIMARY,
                            onClick: t,
                            children: c
                        }), null != n && (0, r.jsx)(i.Button, {
                            fullWidth: !0,
                            color: i.Button.Colors.PRIMARY,
                            look: i.Button.Looks.LINK,
                            onClick: n,
                            children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CANCEL_BUTTON
                        })]
                    })]
                })
            };

            function o(e) {
                let {
                    onConfirm: t,
                    listing: n,
                    subscription: s
                } = e;
                return (0, r.jsxs)("div", {
                    className: u.confirmationContainer,
                    children: [(0, r.jsx)(i.Heading, {
                        className: u.confirmationHeader,
                        variant: "heading-lg/extrabold",
                        children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
                            tier: n.name
                        })
                    }), (0, r.jsx)(i.Text, {
                        className: u.confirmationSubtitle,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
                            timestamp: null == s ? void 0 : s.currentPeriodEnd
                        })
                    }), (0, r.jsxs)("div", {
                        className: u.buttonContainer,
                        children: [(0, r.jsx)(i.Button, {
                            className: u.openDiscordButton,
                            onClick: () => (0, a.default)("application_sub_mweb_success_modal"),
                            children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
                        }), (0, r.jsx)(i.Button, {
                            className: u.doneButton,
                            look: i.Button.Looks.BLANK,
                            onClick: t,
                            children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
                        })]
                    })]
                })
            }
        },
        724038: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var r = n("597755"),
                i = n.n(r),
                a = n("742270"),
                l = n("815157"),
                u = n("391679"),
                s = n("327037"),
                o = n("393414"),
                c = n("271938"),
                d = n("476108"),
                f = n("599110"),
                I = n("65300"),
                E = n("49111");
            async function _(e) {
                var t, n;
                let r = null === (t = i.os) || void 0 === t ? void 0 : t.family;
                if ("Android" === r || "iOS" === r) {
                    let t = null !== (n = c.default.getFingerprint()) && void 0 !== n ? n : c.default.getId(),
                        r = (0, l.generateAttemptId)();
                    if (null == t && c.default.isAuthenticated()) try {
                        await (0, s.fetchCurrentUser)(), t = c.default.getId()
                    } catch {}
                    return (0, l.default)((0, a.getDefaultDynamicLinkTemplate)(), {
                        utmSource: e,
                        fingerprint: t,
                        attemptId: r
                    })
                }
                return "discord://"
            }
            async function T(e) {
                let t = await _(e),
                    n = (0, l.parseDynamicLink)(t);
                null != n && f.default.track(E.AnalyticEvents.DEEP_LINK_CLICKED, {
                    fingerprint: (0, u.maybeExtractId)(n.fingerprint),
                    attempt_id: n.attemptId,
                    source: n.utmSource
                }), I.default.launch(t, e => {
                    !e && (0, o.replaceWith)(d.default.fallbackRoute)
                })
            }
        },
        245187: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BlockedPaymentsContentSettings: function() {
                    return C
                },
                BlockedPaymentsContentModal: function() {
                    return m
                },
                BlockedPaymentsWarning: function() {
                    return h
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                a = n.n(i),
                l = n("669491"),
                u = n("819855"),
                s = n("77078"),
                o = n("841098"),
                c = n("145131"),
                d = n("423487"),
                f = n("701909"),
                I = n("619935"),
                E = n("49111"),
                _ = n("782340"),
                T = n("653842"),
                S = n("584503"),
                N = n("45656");

            function p(e) {
                let {
                    className: t
                } = e, n = (0, o.default)(), i = (0, u.isThemeDark)(n) ? S : N;
                return (0, r.jsxs)("div", {
                    className: a(T.container, t),
                    children: [(0, r.jsx)(s.Heading, {
                        className: T.header,
                        variant: "heading-xl/semibold",
                        children: _.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
                    }), (0, r.jsxs)(s.Text, {
                        className: T.description,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: [(0, r.jsx)("p", {
                            children: _.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
                        }), (0, r.jsx)("p", {
                            children: _.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                                helpdeskArticle: f.default.getArticleURL(E.HelpdeskArticles.BLOCKED_PAYMENTS)
                            })
                        })]
                    }), (0, r.jsx)("img", {
                        src: i,
                        className: T.splashImage,
                        alt: "Blocked Payments"
                    })]
                })
            }

            function C() {
                return (0, r.jsx)(p, {
                    className: T.settings
                })
            }

            function m(e) {
                let {
                    onClose: t
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(s.ModalHeader, {
                        className: T.blockedPaymentsModalHeader,
                        justify: c.default.Justify.END,
                        children: (0, r.jsx)(s.ModalCloseButton, {
                            onClick: t
                        })
                    }), (0, r.jsx)(s.ModalContent, {
                        className: T.blockedPaymentsModalContent,
                        children: (0, r.jsx)(p, {
                            className: T.modal
                        })
                    })]
                })
            }

            function h(e) {
                let {
                    className: t
                } = e, n = (0, I.useBlockedPaymentsConfig)();
                return n ? (0, r.jsxs)(s.Card, {
                    className: a(T.blockedPaymentsWarning, t),
                    type: s.Card.Types.CUSTOM,
                    children: [(0, r.jsx)(d.default, {
                        className: T.blockedPaymentsWarningIcon,
                        color: l.default.unsafe_rawColors.YELLOW_300.css
                    }), (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: _.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
                            helpdeskArticle: f.default.getArticleURL(E.HelpdeskArticles.BLOCKED_PAYMENTS)
                        })
                    })]
                }) : null
            }
        },
        149022: function(e, t, n) {
            "use strict";

            function r() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function i(e) {
                return {
                    textValue: e,
                    richValue: l(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return r
                },
                createState: function() {
                    return i
                },
                toRichValue: function() {
                    return l
                },
                voidToOptionValue: function() {
                    return u
                }
            }), n("70102");
            let a = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function l(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : a
            }

            function u(e) {
                switch (e.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: e.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: e.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: e.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: e.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: e.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: e.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
                        };
                    case "testInlineVoid":
                        throw Error("Unable to convert test types")
                }
                return null
            }
        },
        526887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCannonContext: function() {
                    return c
                },
                ConfettiCannonContextProvider: function() {
                    return d
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("516555"),
                l = n("65597"),
                u = n("206230"),
                s = n("49111");
            let o = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => s.NOOP,
                    removeClickListener: s.NOOP
                },
                c = i.createContext(o);

            function d(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: s,
                    baseConfig: d,
                    addClickListener: f,
                    removeClickListener: I
                } = e, E = (0, a.useConfettiCannon)(n, s), _ = (0, l.default)([u.default], () => u.default.useReducedMotion), T = i.useMemo(() => _ ? o : {
                    confettiCanvas: n,
                    cannon: E,
                    createConfetti: (e, t) => E.createConfetti({
                        ...d,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, r) => E.createConfetti({
                        ...d,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...n
                    }, r),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return E.createMultipleConfetti({
                            ...d,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            i = arguments.length > 4 ? arguments[4] : void 0;
                        return E.createMultipleConfetti({
                            ...d,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...n
                        }, r, i)
                    },
                    addClickListener: f,
                    removeClickListener: I
                }, [f, d, E, n, _, I]);
                return (0, r.jsx)(c.Provider, {
                    value: T,
                    children: t
                })
            }
        },
        172858: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DUCK_CONFETTI_SPRITE: function() {
                    return a
                },
                COMMON_CONFETTI_COLORS: function() {
                    return l
                },
                COMMON_CONFETTI_SPRITES: function() {
                    return u
                },
                COMMON_CONFETTI_MAX_SPRITE_SIZE: function() {
                    return s
                },
                COMMON_CONFETTI_BASE_CONFIG: function() {
                    return o
                },
                COMMON_CONFETTI_ENVIRONMENT: function() {
                    return c
                }
            });
            var r = n("516555"),
                i = n("839491");
            let a = i,
                l = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                u = [n("890450"), a, n("164654"), n("540346"), n("526094"), n("367469"), n("23933"), {
                    src: n("283397"),
                    colorize: !1
                }],
                s = 28,
                o = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 30,
                            y: -80
                        },
                        maxValue: {
                            x: -30,
                            y: -180
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: 0,
                        maxValue: 360,
                        minAddValue: -25,
                        maxAddValue: 25
                    },
                    size: {
                        type: "static-random",
                        minValue: 14,
                        maxValue: s
                    }
                },
                c = new r.Environment
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("884691");
            let i = r.createContext(void 0);
            var a = i
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return d
                },
                replaceRoleIconSourceSize: function() {
                    return f
                },
                isRoleIconAssetUrl: function() {
                    return E
                },
                canGuildUseRoleIcons: function() {
                    return _
                }
            }), n("781738");
            var r = n("867805"),
                i = n("407063"),
                a = n("315102"),
                l = n("773336"),
                u = n("49111");
            let s = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                o = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                c = (0, l.isAndroid)(),
                d = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? r.default.getByName(r.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: I(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)()))),
                I = (e, t) => {
                    let {
                        id: n,
                        icon: r
                    } = e;
                    if (null == r) return;
                    if (r.startsWith("data:")) return r;
                    let l = a.SUPPORTS_WEBP ? "webp" : "png",
                        d = "",
                        f = "quality=lossless";
                    return (null != t && (d = "size=" + (0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)()), f = c ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(s, "/").concat(n, "/").concat(r, ".").concat(l, "?").concat(d).concat(f) : "".concat(o).concat(u.Endpoints.ROLE_ICON(n, r), "?").concat(d)
                },
                E = e => e.startsWith(s) || e.startsWith("".concat(o, "/roles")) && e.includes("/icons/"),
                _ = (e, t) => {
                    var n;
                    let r = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return r || e.features.has(u.GuildFeatures.ROLE_ICONS)
                }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return u
                },
                setCurrentGuild: function() {
                    return s
                },
                initGuildIdentitySettings: function() {
                    return o
                },
                closeGuildIdentitySettings: function() {
                    return c
                },
                resetAndCloseGuildIdentityForm: function() {
                    return d
                },
                setPendingAvatar: function() {
                    return f
                },
                setPendingBanner: function() {
                    return I
                },
                setPendingBio: function() {
                    return E
                },
                setPendingPronouns: function() {
                    return _
                },
                setPendingNickname: function() {
                    return T
                },
                setPendingThemeColors: function() {
                    return S
                },
                resetPendingMemberChanges: function() {
                    return N
                },
                resetPendingProfileChanges: function() {
                    return p
                },
                resetAllPending: function() {
                    return C
                },
                clearErrors: function() {
                    return m
                },
                setDisableSubmit: function() {
                    return h
                }
            }), n("70102");
            var r = n("872717"),
                i = n("913144"),
                a = n("54239"),
                l = n("49111");
            async function u(e, t) {
                let {
                    nick: n,
                    avatar: a
                } = t;
                if (null == e) throw Error("Need guildId");
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await r.default.patch({
                        url: l.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: a
                        },
                        oldFormErrors: !0
                    });
                    return i.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), i.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), i.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function s(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function o(e, t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function c() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, a.popLayer)()
            }

            function d() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function f(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function I(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function E(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function _(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function T(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function S(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function N() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function p() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function C() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function m() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function h(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let r, i, a, l, u, s, o, c, d;
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var f = n("446674"),
                I = n("913144"),
                E = n("49111");
            let _ = E.FormStates.CLOSED,
                T = {},
                S = !1;

            function N() {
                _ = E.FormStates.CLOSED, T = {}, o = null, c = void 0, d = []
            }

            function p() {
                C(), m(), T = {}, _ = E.FormStates.OPEN
            }

            function C() {
                r = void 0, u = void 0
            }

            function m() {
                i = void 0, a = void 0, l = void 0, s = void 0
            }
            class h extends f.default.Store {
                getFormState() {
                    return _
                }
                getErrors() {
                    return T
                }
                showNotice() {
                    return void 0 !== r || void 0 !== i || void 0 !== a || void 0 !== l || void 0 !== u || void 0 !== s
                }
                getPendingAvatar() {
                    return r
                }
                getPendingBanner() {
                    return i
                }
                getPendingBio() {
                    return a
                }
                getPendingNickname() {
                    return u
                }
                getPendingPronouns() {
                    return l
                }
                getPendingAccentColor() {
                    return u
                }
                getPendingThemeColors() {
                    return s
                }
                getAllPending() {
                    return {
                        pendingAvatar: r,
                        pendingBanner: i,
                        pendingBio: a,
                        pendingPronouns: l,
                        pendingNickname: u,
                        pendingThemeColors: s
                    }
                }
                getGuild() {
                    return o
                }
                getSource() {
                    return c
                }
                getAnalyticsLocations() {
                    return d
                }
                getIsDisableSubmit() {
                    return S
                }
            }
            h.displayName = "GuildIdentitySettingsStore";
            var A = new h(I.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    o = e.guild, _ = E.FormStates.OPEN, T = {}, c = e.source, d = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: N,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    p(), N()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    o = e.guild, T = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    _ = E.FormStates.SUBMITTING, T = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (_ !== E.FormStates.SUBMITTING) return !1;
                    _ = E.FormStates.OPEN, T = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    _ = E.FormStates.OPEN, T = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    s = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: C,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: m,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: p,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: p,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    T = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    S = t
                }
            })
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return l
                },
                setHotspotOverride: function() {
                    return u
                },
                clearHotspotOverride: function() {
                    return s
                }
            });
            var r = n("913144"),
                i = n("599110"),
                a = n("49111");

            function l(e) {
                i.default.track(a.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), r.default.wait(() => {
                    r.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function u(e, t) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function s(e) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var r = n("446674"),
                i = n("913144"),
                a = n("197881"),
                l = n("492397");
            let u = new Set,
                s = {};
            class o extends r.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (u = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (s = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && s[e];
                    return !(l.CONFERENCE_MODE_ENABLED || a.ProcessArgs.isDisallowPopupsSet()) && (n || !u.has(e))
                }
                hasHiddenHotspot(e) {
                    return u.has(e)
                }
                getHotspotOverride(e) {
                    return s[e]
                }
                getState() {
                    return {
                        hiddenHotspots: u,
                        hotspotOverrides: s
                    }
                }
            }
            o.displayName = "HotspotStore", o.persistKey = "hotspots", o.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var c = new o(i.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    u = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (u.has(t)) return !1;
                    u.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    s[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == s[t]) return !1;
                    delete s[t]
                }
            })
        },
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return a.default
                }
            });
            var r = n("533613");
            n.es(r, t);
            var i = n("597517");
            n.es(i, t);
            var a = n("269596")
        },
        274800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                queueInteractionComponentState: function() {
                    return l
                },
                addQueued: function() {
                    return u
                },
                setFailed: function() {
                    return s
                },
                fetchMessageInteractionData: function() {
                    return o
                }
            });
            var r = n("872717"),
                i = n("913144"),
                a = n("49111");

            function l(e, t, n, r) {
                i.default.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: e,
                    nonce: t,
                    state: n,
                    indices: r
                })
            }

            function u(e, t) {
                let {
                    data: n,
                    messageId: r,
                    onCreate: a,
                    onSuccess: l,
                    onFailure: u
                } = t;
                i.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: r,
                    onCreate: a,
                    onSuccess: l,
                    onFailure: u
                })
            }

            function s(e, t, n) {
                i.default.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: e,
                    errorMessage: n,
                    errorCode: t
                })
            }
            async function o(e, t) {
                let n = await r.default.get({
                    url: a.Endpoints.MESSAGE_INTERACTION_DATA(e, t),
                    oldFormErrors: !0
                });
                if (n.ok) {
                    let r = n.body;
                    i.default.dispatch({
                        type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                        channelId: e,
                        messageId: t,
                        interactionData: r
                    })
                }
            }
        },
        809810: function(e, t, n) {
            "use strict";
            let r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var a = n("446674"),
                l = n("913144"),
                u = n("798609"),
                s = n("42203"),
                o = n("3765");
            let c = {},
                d = {},
                f = {};

            function I(e) {
                delete c[e];
                let t = f[e];
                null != t && delete d[t], delete f[e]
            }
            class E extends a.default.Store {
                getInteraction(e) {
                    let t = d[e.id];
                    return null != t ? c[t] : null
                }
                getMessageInteractionStates() {
                    let e = {};
                    for (let [t, n] of Object.entries(c)) {
                        let r = f[t];
                        null != r && (e[r] = n.state)
                    }
                    return e
                }
                canQueueInteraction(e, t) {
                    let n = d[e];
                    return (null == n || null == c[n] || c[n].state === o.InteractionState.FAILED) && (null == c[t] || c[t].state === o.InteractionState.FAILED) && !0
                }
                getIFrameModalApplicationId() {
                    return i
                }
                getIFrameModalKey() {
                    return r
                }
            }
            E.displayName = "InteractionStore";
            var _ = new E(l.default, {
                LOGOUT: function() {
                    c = {}, d = {}, f = {}
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        nonce: t,
                        messageId: n,
                        data: r,
                        onCreate: i,
                        onCancel: a,
                        onSuccess: l,
                        onFailure: u
                    } = e;
                    null != n && (d[n] = t, f[t] = n), c[t] = {
                        state: o.InteractionState.QUEUED,
                        data: r,
                        onCreate: i,
                        onCancel: a,
                        onSuccess: l,
                        onFailure: u
                    }
                },
                INTERACTION_CREATE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        interactionId: r
                    } = e;
                    if (null == n) return !1;
                    let i = c[n];
                    if (null == i || i.state !== o.InteractionState.QUEUED) return !1;
                    i.state = o.InteractionState.CREATED, null === (t = i.onCreate) || void 0 === t || t.call(i, r)
                },
                INTERACTION_SUCCESS: function(e) {
                    var t;
                    let {
                        nonce: n
                    } = e;
                    if (null == n) return !1;
                    let r = c[n];
                    if (null == r) return !1;
                    null === (t = r.onSuccess) || void 0 === t || t.call(r), I(n)
                },
                INTERACTION_FAILURE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        errorCode: r,
                        errorMessage: i
                    } = e;
                    if (null == n) return !1;
                    let a = c[n];
                    if (null == a) return !1;
                    null === (t = a.onFailure) || void 0 === t || t.call(a, r, i), a.data.interactionType === u.InteractionTypes.APPLICATION_COMMAND ? I(n) : c[n] = {
                        ...a,
                        state: o.InteractionState.FAILED,
                        errorCode: r,
                        errorMessage: i
                    }
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    if (null == t.nonce) return !1;
                    {
                        var n;
                        let e = c[t.nonce];
                        if (null == e) return !1;
                        null === (n = e.onSuccess) || void 0 === n || n.call(e), I(t.nonce)
                    }
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e, n = s.default.getChannel(t);
                    if (null == n) return !1;
                    for (let [e, t] of Object.entries(c)) t.state === o.InteractionState.FAILED && I(e)
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    let {
                        application: t
                    } = e;
                    i = t.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    r = void 0, i = void 0
                },
                INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
                    let {
                        modalKey: t
                    } = e;
                    r = t
                }
            })
        },
        3765: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                InteractionState: function() {
                    return r
                }
            }), (i = r || (r = {}))[i.QUEUED = 0] = "QUEUED", i[i.CREATED = 1] = "CREATED", i[i.FAILED = 2] = "FAILED"
        },
        752598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInteractionTimeoutTimestamp: function() {
                    return S
                },
                executeMessageComponentInteraction: function() {
                    return N
                },
                handleInteractionResponse: function() {
                    return C
                },
                InteractionStatusViewState: function() {
                    return r
                },
                getInteractionStatusViewState: function() {
                    return m
                },
                canRetryInteractionData: function() {
                    return h
                }
            }), n("222007");
            var r, i, a = n("249654"),
                l = n("872717"),
                u = n("913144"),
                s = n("819689"),
                o = n("798609"),
                c = n("263024"),
                d = n("271938"),
                f = n("274800"),
                I = n("809810"),
                E = n("3765"),
                _ = n("606981"),
                T = n("49111");

            function S(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : a.default.extractTimestamp(e) + 9e5
            }
            let N = async e => {
                let {
                    componentType: t,
                    messageId: n,
                    messageFlags: r,
                    customId: i,
                    indices: u,
                    applicationId: s,
                    channelId: E,
                    guildId: _,
                    localState: S
                } = e, N = a.default.fromTimestamp(Date.now());
                if (!I.default.canQueueInteraction(n, N)) return;
                await c.default.unarchiveThreadIfNecessary(E), (0, f.addQueued)(N, {
                    messageId: n,
                    data: {
                        interactionType: o.InteractionTypes.MESSAGE_COMPONENT,
                        customId: i,
                        indices: u
                    },
                    onFailure: (e, t) => p(E, e, t)
                }), null != S && (0, f.queueInteractionComponentState)(n, N, S, u);
                let m = {
                    type: o.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: N,
                    guild_id: _,
                    channel_id: E,
                    message_flags: r,
                    message_id: n,
                    application_id: s,
                    session_id: d.default.getSessionId(),
                    data: {
                        component_type: t,
                        custom_id: i,
                        ... function(e) {
                            if (null == e) return null;
                            if (e.type === o.ComponentType.STRING_SELECT || e.type === o.ComponentType.INPUT_TEXT) return e;
                            let t = e.selectedOptions.map(e => e.value);
                            return {
                                type: e.type,
                                values: t
                            }
                        }(S)
                    }
                };
                await l.default.post({
                    url: T.Endpoints.INTERACTIONS,
                    body: m,
                    timeout: 3e3
                }, e => {
                    C(N, E, _, e)
                })
            }, p = (e, t, n) => {
                null == n && null != t && s.default.sendClydeError(e, t)
            }, C = (e, t, n, r) => {
                if (!r.ok) {
                    if (!r.hasErr) {
                        var i;
                        if (r.status >= 400 && r.status < 500 && r.body) {
                            if (r.body.code === T.AbortCodes.INVALID_FORM_BODY && r.body.errors) {
                                let i = (0, _.getFirstSkemaError)(r.body.errors);
                                null != i && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === i.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === i.code) && u.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: t,
                                    guildId: n
                                }), (0, f.setFailed)(e, void 0, null == i ? void 0 : i.message);
                                return
                            }(0, f.setFailed)(e, void 0, r.body.message);
                            return
                        }(0, f.setFailed)(e, null === (i = r.body) || void 0 === i ? void 0 : i.code);
                        return
                    }(0, f.setFailed)(e)
                }
            };
            (i = r || (r = {}))[i.SENDING = 0] = "SENDING", i[i.CREATED = 1] = "CREATED", i[i.FAILED = 2] = "FAILED", i[i.TIMED_OUT = 3] = "TIMED_OUT";
            let m = (e, t) => {
                var n;
                let r = null == t ? void 0 : t.state,
                    i = e.state === T.MessageStates.SENT && S(e.id) < Date.now();
                let l = e.state === T.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : a.default.extractTimestamp(n) + 3e3) < Date.now(),
                    u = (null == t ? void 0 : t.data.interactionType) === o.InteractionTypes.APPLICATION_COMMAND,
                    s = e.isCommandType();
                if (u && r === E.InteractionState.QUEUED || s && e.state === T.MessageStates.SENDING && null != t) return 0;
                if (u && r === E.InteractionState.CREATED || e.hasFlag(T.MessageFlags.LOADING) && !i) return 1;
                if (null != e.interaction && e.hasFlag(T.MessageFlags.LOADING) && i) return 3;
                else if (null != e.interaction && !e.hasFlag(T.MessageFlags.LOADING) && l) return 3;
                else if (s && e.state === T.MessageStates.SEND_FAILED) return 2
            };

            function h(e) {
                let t = e.options;
                for (;
                    (null == t ? void 0 : t.length) === 1 && (t[0].type === o.ApplicationCommandOptionType.SUB_COMMAND_GROUP || t[0].type === o.ApplicationCommandOptionType.SUB_COMMAND);) t = t[0].options;
                for (let e of null != t ? t : [])
                    if (e.type === o.ApplicationCommandOptionType.ATTACHMENT) return !1;
                return !0
            }
        },
        606981: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFirstSkemaError: function() {
                    return i
                }
            }), n("222007");
            let r = "_errors";

            function i(e) {
                return function e(t, n) {
                    let i = t[r];
                    if (null != i && Array.isArray(i)) return i[0];
                    for (let [i, a] of Object.entries(t))
                        if (i !== r && null != a && "object" == typeof a) return e(a, null != n ? n : i);
                    return null
                }(e, void 0)
            }
        },
        559362: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("446674"),
                l = n("834897"),
                u = n("90592"),
                s = n("333955"),
                o = n("547356"),
                c = n("305961"),
                d = n("642906"),
                f = n("85336"),
                I = n("159149"),
                E = n("650484"),
                _ = n("425480"),
                T = n("782340");

            function S(e) {
                let {
                    application: t,
                    listing: n,
                    handleStepChange: S,
                    handleClose: N
                } = e, {
                    subscriptionMetadataRequest: p
                } = (0, d.usePaymentContext)(), C = (0, l.default)(_.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), m = (0, u.isApplicationUserSubscription)(n.sku_flags), h = (0, a.useStateFromStores)([c.default], () => c.default.getGuild(null == p ? void 0 : p.guild_id)), A = i.useCallback(() => S(f.Step.REVIEW), [S]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(E.PaymentPortalBody, {
                        children: C ? (0, r.jsx)(o.BenefitsConfirmationLite, {
                            confirmCta: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
                            onConfirm: A,
                            onCancel: N,
                            title: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({
                                tier: n.name
                            }),
                            subtitle: m ? T.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE : T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({
                                guildName: null == h ? void 0 : h.name
                            }),
                            showOpenDiscord: !1
                        }) : (0, r.jsx)(s.BenefitsConfirmation, {
                            listing: n,
                            application: t,
                            title: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format({
                                tier: n.name
                            }),
                            subtitle: m ? T.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER : T.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
                            description: m ? T.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
                                applicationName: t.name
                            }) : T.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
                        })
                    }), !C && (0, r.jsx)(E.PaymentPortalFooter, {
                        children: (0, r.jsx)(I.default, {
                            onBack: N,
                            backText: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
                            onPrimary: A,
                            primaryCTA: I.CTAType.CONTINUE,
                            primaryText: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON
                        })
                    })]
                })
            }
        },
        671672: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007"), n("424973");
            var r = n("37983"),
                i = n("884691"),
                a = n("627445"),
                l = n.n(a),
                u = n("252438"),
                s = n("834897"),
                o = n("206230"),
                c = n("90592"),
                d = n("333955"),
                f = n("547356"),
                I = n("526887"),
                E = n("642906"),
                _ = n("85336"),
                T = n("159149"),
                S = n("650484"),
                N = n("367767"),
                p = n("425480"),
                C = n("782340");

            function m(e) {
                let t, n, {
                        showBenefits: a,
                        application: m,
                        listing: h,
                        handleClose: A,
                        onSubscriptionConfirmation: L
                    } = e,
                    {
                        selectedPlan: O,
                        selectedSkuId: P,
                        step: g,
                        updatedSubscription: R,
                        readySlideId: v
                    } = (0, E.usePaymentContext)();
                l(null != O, "Expected plan to selected"), l(null != P, "Expected selectedSkuId"), l(null != g, "Step should be set");
                let M = (0, s.default)(p.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
                    {
                        createMultipleConfettiAt: U
                    } = i.useContext(I.ConfettiCannonContext),
                    D = () => {
                        A(), null == L || L()
                    },
                    y = v === _.Step.CONFIRM,
                    x = (0, c.isApplicationUserSubscription)(h.sku_flags),
                    b = i.useMemo(() => {
                        let e = 0,
                            t = 0;
                        for (let n of h.sku_benefits.benefits) n.ref_type === u.SKUBenefitTypes.APPLICATION_PREMIUM_COMMAND ? e += 1 : n.ref_type === u.SKUBenefitTypes.INTANGIBLE && (t += 1);
                        let n = [];
                        return 0 !== e && n.push(C.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EXCLUSIVE_CHANNELS_SUBTITLE.format({
                            commandCount: e
                        })), 0 !== t && n.push(C.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
                            benefitCount: t
                        })), n
                    }, [h]);
                return a ? M ? t = (0, r.jsx)(f.BenefitsConfirmationLite, {
                    title: C.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({
                        tierName: h.name
                    }),
                    subtitle: b.length > 0 ? C.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
                        benefits: new Intl.ListFormat(C.default.getLocale()).format(b)
                    }) : null,
                    onConfirm: D,
                    confirmCta: C.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
                }) : (t = (0, r.jsx)(d.BenefitsConfirmation, {
                    listing: h,
                    application: m,
                    title: C.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({
                        tier: h.name
                    }),
                    subtitle: C.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
                    description: x ? C.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
                        applicationName: null == m ? void 0 : m.name
                    }) : C.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
                        tier: h.name
                    })
                }), n = (0, r.jsx)(T.default, {
                    onPrimary: D,
                    primaryCTA: T.CTAType.CONTINUE,
                    primaryText: C.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                })) : t = M ? (0, r.jsx)(f.PurchaseConfirmationLite, {
                    listing: h,
                    onConfirm: D,
                    subscription: R
                }) : (0, r.jsx)(d.PurchaseConfirmation, {
                    listing: h,
                    onConfirm: D,
                    subscription: R
                }), i.useEffect(() => {
                    o.default.useReducedMotion && y && U(window.innerWidth / 2, window.innerHeight / 2)
                }, [U, y]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(S.PaymentPortalBody, {
                        children: [(0, r.jsx)(N.default, {}), t]
                    }), null != n && (0, r.jsx)(S.PaymentPortalFooter, {
                        children: n
                    })]
                })
            }
        },
        590749: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getApplicationSubscriptionPaymentSteps: function() {
                    return I
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("85336"),
                a = n("262683"),
                l = n("946359"),
                u = n("724269"),
                s = n("559362"),
                o = n("671672"),
                c = n("101432"),
                d = n("458985"),
                f = n("782340");

            function I(e) {
                let {
                    guildId: t,
                    eligibleApplicationSubscriptionGuilds: n,
                    application: I,
                    listing: E,
                    showBenefitsFirst: _
                } = e, T = [{
                    key: null,
                    renderStep: e => (0, r.jsx)(c.default, {
                        initialStep: _ ? i.Step.BENEFITS : i.Step.REVIEW,
                        guildId: t,
                        ...e
                    })
                }, {
                    key: i.Step.BENEFITS,
                    renderStep: e => (0, r.jsx)(s.default, {
                        application: I,
                        listing: E,
                        ...e
                    }),
                    options: {
                        useBreadcrumbLabel: () => f.default.Messages.APPLICATION_SUBSCRIPTION_BILLING_STEP_SUBSCRIPTION_DETAILS
                    }
                }, {
                    key: i.Step.ADD_PAYMENT_STEPS,
                    renderStep: e => (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(a.PaymentModalAddPaymentStep, {
                            ...e,
                            breadcrumbSteps: [i.Step.ADD_PAYMENT_STEPS, i.Step.REVIEW, i.Step.CONFIRM]
                        })
                    }),
                    options: {
                        renderHeader: !0
                    }
                }, {
                    key: i.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: () => (0, r.jsx)(u.default, {})
                }, {
                    key: i.Step.AWAITING_AUTHENTICATION,
                    renderStep: () => (0, r.jsx)(l.default, {})
                }, {
                    key: i.Step.REVIEW,
                    renderStep: e => (0, r.jsx)(d.default, {
                        application: I,
                        backButtonEligible: !!_ || void 0,
                        prevStep: _ ? i.Step.BENEFITS : void 0,
                        listing: E,
                        showGuildPicker: null == t,
                        eligibleApplicationSubscriptionGuilds: n,
                        ...e
                    }),
                    options: {
                        renderHeader: !0,
                        useBreadcrumbLabel: () => f.default.Messages.BILLING_STEP_REVIEW
                    }
                }, {
                    key: i.Step.CONFIRM,
                    renderStep: e => (0, r.jsx)(o.default, {
                        application: I,
                        listing: E,
                        showBenefits: !_,
                        ...e
                    })
                }];
                return T
            }
        },
        101432: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                a = n("245187"),
                l = n("10514"),
                u = n("599110"),
                s = n("719923"),
                o = n("635357"),
                c = n("642906"),
                d = n("628738"),
                f = n("49111");

            function I(e) {
                let {
                    initialStep: t,
                    initialPlanId: n,
                    guildId: I,
                    setAnalyticsData: E,
                    handleClose: _
                } = e, {
                    blockedPayments: T,
                    setStep: S,
                    hasFetchedSubscriptions: N,
                    hasFetchedSubscriptionPlans: p,
                    currencyLoading: C,
                    selectedSkuId: m,
                    setSelectedSkuId: h,
                    setSelectedPlanId: A,
                    priceOptions: L,
                    setSubscriptionMetadataRequest: O
                } = (0, c.usePaymentContext)(), {
                    isGift: P
                } = (0, o.useGiftContext)(), [g, R] = i.useState(!N || !p || C);
                return (i.useEffect(() => {
                    R(!N || !p || C)
                }, [C, p, N]), i.useEffect(() => {
                    null != I && O({
                        guild_id: I
                    })
                }, [I, O]), i.useEffect(() => {
                    A(n);
                    let e = null != n ? l.default.get(n) : null;
                    !g && !T && (E(t => {
                        let n = null != e ? (0, s.getPrice)(e.id, !1, P, L) : void 0,
                            r = {
                                ...t,
                                subscription_plan_id: null == e ? void 0 : e.id,
                                price: null == n ? void 0 : n.amount,
                                regular_price: null == e ? void 0 : e.price,
                                currency: L.currency
                            };
                        return u.default.track(f.AnalyticEvents.PAYMENT_FLOW_STARTED, r), r
                    }), null != e && (h(null == e ? void 0 : e.skuId), S(t)))
                }, [T, n, P, g, L, m, E, A, h, S, t]), g) ? (0, r.jsx)(d.default, {}) : T ? (0, r.jsx)(a.BlockedPaymentsContentModal, {
                    onClose: _
                }) : null
            }
        },
        458985: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                a = n("627445"),
                l = n.n(a),
                u = n("77078"),
                s = n("612039"),
                o = n("90592"),
                c = n("527866"),
                d = n("451516"),
                f = n("642906"),
                I = n("85336"),
                E = n("286350"),
                _ = n("153727"),
                T = n("628738"),
                S = n("650484"),
                N = n("367767"),
                p = n("215774"),
                C = n("782340"),
                m = n("945598");

            function h(e) {
                let {
                    application: t,
                    backButtonEligible: n,
                    prevStep: a,
                    showGuildPicker: h,
                    handleStepChange: A,
                    trialFooterMessageOverride: L,
                    reviewWarningMessage: O,
                    planGroup: P,
                    openInvoiceId: g,
                    analyticsData: R,
                    analyticsLocation: v,
                    eligibleApplicationSubscriptionGuilds: M,
                    listing: U
                } = e, {
                    activeSubscription: D,
                    setUpdatedSubscription: y,
                    contextMetadata: x,
                    currencies: b,
                    paymentSources: B,
                    priceOptions: G,
                    purchaseError: F,
                    purchaseTokenAuthState: H,
                    selectedPlan: j,
                    setCurrency: w,
                    setPaymentSourceId: V,
                    setPurchaseState: k,
                    setPurchaseError: Y,
                    step: K,
                    purchaseState: Z,
                    subscriptionMetadataRequest: z,
                    setSubscriptionMetadataRequest: W,
                    setHasAcceptedTerms: Q
                } = (0, f.usePaymentContext)();
                l(null != j, "Expected plan to be selected"), l(null != K, "Step should be set");
                let X = i.useRef(null),
                    [q, J] = (0, s.default)(!1, 500),
                    [$, ee] = i.useState(null == z ? void 0 : z.guild_id),
                    et = (0, o.isApplicationUserSubscription)(U.sku_flags);
                i.useEffect(() => {
                    null != F && null != X.current && X.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }, [F]);
                let en = i.useCallback(e => {
                        y(e), A(I.Step.CONFIRM)
                    }, [A, y]),
                    er = i.useCallback(e => {
                        ee(e), W({
                            ...z,
                            guild_id: e
                        })
                    }, [ee, W, z]),
                    ei = i.useRef(null);
                return Z === E.PurchaseState.PURCHASING ? (0, r.jsx)(T.default, {}) : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(_.default, {
                        className: m.breadcrumbs
                    }), (0, r.jsxs)(S.PaymentPortalBody, {
                        children: [(0, r.jsx)(N.default, {}), et && (0, r.jsxs)("div", {
                            className: m.userSubscriptionDetailsContainer,
                            children: [(0, r.jsx)(u.Text, {
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: C.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "interactive-normal",
                                children: C.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({
                                    applicationName: t.name
                                })
                            })]
                        }), h && !et && (0, r.jsxs)("div", {
                            className: m.guildPickerContainer,
                            children: [(0, r.jsx)(u.FormTitle, {
                                tag: u.FormTitleTags.H5,
                                children: C.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
                            }), (0, r.jsx)(u.FormText, {
                                type: u.FormText.Types.DESCRIPTION,
                                className: m.guildPickerDescription,
                                children: C.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
                            }), (0, r.jsx)(p.GuildPickerDropdown, {
                                selectedGuildId: $,
                                onGuildChange: er,
                                eligibleApplicationSubscriptionGuilds: M
                            })]
                        }), (0, r.jsx)(c.default, {
                            selectedPlanId: j.id,
                            paymentSources: B,
                            onPaymentSourceChange: e => V(null != e ? e.id : null),
                            priceOptions: G,
                            currencies: b,
                            onCurrencyChange: e => w(e),
                            handlePaymentSourceAdd: () => A(I.Step.ADD_PAYMENT_STEPS),
                            setHasAcceptedTerms: Q,
                            legalTermsNodeRef: ei,
                            hasLegalTermsFlash: q,
                            trialFooterMessageOverride: L,
                            reviewWarningMessage: O,
                            metadata: h || et ? void 0 : z,
                            purchaseState: Z,
                            hideSubscriptionDetails: !0
                        })]
                    }), (0, r.jsx)(S.PaymentPortalFooter, {
                        children: (0, r.jsx)(d.default, {
                            premiumSubscription: null != D ? D : null,
                            setPurchaseState: k,
                            onBack: () => null != a && A(a),
                            onNext: en,
                            onPurchaseError: e => Y(e),
                            legalTermsNodeRef: ei,
                            flashLegalTerms: () => J(!0),
                            analyticsLocation: v,
                            baseAnalyticsData: R,
                            flowStartTime: x.startTime,
                            planGroup: P,
                            purchaseTokenAuthState: H,
                            openInvoiceId: g,
                            metadata: et ? void 0 : z,
                            backButtonEligible: n,
                            invoiceError: null,
                            disablePurchase: (null == z ? void 0 : z.guild_id) == null && !et
                        })
                    })]
                })
            }
        },
        215774: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildPickerDropdown: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("782340"),
                l = n("336859");

            function u(e) {
                let {
                    selectedGuildId: t,
                    onGuildChange: n,
                    eligibleApplicationSubscriptionGuilds: u
                } = e, s = u.map(e => ({
                    value: e.id,
                    label: e.name
                }));
                return (0, r.jsx)(i.SearchableSelect, {
                    className: l.select,
                    maxVisibleItems: 5,
                    value: t,
                    placeholder: a.default.Messages.APPLICATION_SUBSCRIPTION_GUILD_PICKER_PLACEHOLDER,
                    options: s,
                    onChange: e => {
                        n(e)
                    }
                })
            }
        },
        628738: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("840339");

            function l() {
                return (0, r.jsx)(i.Spinner, {
                    className: a.spinner
                })
            }
        },
        176108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                inOneStepSubscriptionCheckout: function() {
                    return a
                },
                planSwitchLoadingShowSpinner: function() {
                    return l
                },
                getDefaultPlanOneStepCheckout: function() {
                    return u
                }
            });
            var r = n("719923"),
                i = n("646718");

            function a(e) {
                let {
                    isTrial: t,
                    isGift: n,
                    selectedSkuId: r,
                    startedPaymentFlowWithPaymentSources: a
                } = e;
                return !t && !n && null != r && i.ACTIVE_PREMIUM_SKUS.includes(r) && a
            }

            function l(e, t, n) {
                let r = !1;
                if (e && null != t) {
                    let e = t.invoiceItems.find(e => e.subscriptionPlanId === n.id);
                    null == e && (r = !0)
                }
                return r
            }

            function u(e, t, n) {
                let a = null != t ? (0, r.getPremiumPlanItem)(t) : null,
                    l = i.PREMIUM_SKU_TO_YEARLY_PLAN[e],
                    u = null != n ? n : l;
                return null != a ? u === a.planId && u === i.PREMIUM_SKU_TO_MONTHLY_PLAN[e] ? u = i.PREMIUM_SKU_TO_YEARLY_PLAN[e] : u === a.planId && u === i.PREMIUM_SKU_TO_YEARLY_PLAN[e] ? u = i.PREMIUM_SKU_TO_MONTHLY_PLAN[e] : (a.planId === i.SubscriptionPlans.PREMIUM_YEAR_TIER_0 || a.planId === i.SubscriptionPlans.PREMIUM_YEAR_TIER_1) && u === i.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && (u = i.SubscriptionPlans.PREMIUM_YEAR_TIER_2) : u === i.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && (u = i.SubscriptionPlans.PREMIUM_MONTH_TIER_1), u
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("65597"),
                a = n("880731");

            function l(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, l = (0, i.default)([a.default], () => a.default.isEnabled({
                    confettiLocation: n
                }));
                return l ? (0, r.jsx)(r.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("884691"),
                i = n("65597"),
                a = n("526887"),
                l = n("880731");

            function u() {
                let {
                    createMultipleConfettiAt: e
                } = r.useContext(a.ConfettiCannonContext), t = (0, i.default)([l.default], () => l.default.getState()), n = r.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), u = r.useMemo(() => ({
                    fire: (r, i, a) => {
                        var l, u;
                        let s = (null == a ? void 0 : a.settings) != null ? {
                                ...t,
                                ...a.settings
                            } : t,
                            o = n(s);
                        e(r, i, o, (null !== (l = null == a ? void 0 : a.count) && void 0 !== l ? l : s.confettiCount) * (null !== (u = null == a ? void 0 : a.countMultiplier) && void 0 !== u ? u : 1), {
                            sprite: null == a ? void 0 : a.sprite
                        })
                    }
                }), [e, n, t]);
                return u
            }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return E
                },
                maybeFetchPremiumLikelihood: function() {
                    return T
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return S
                }
            });
            var r = n("884691"),
                i = n("65597"),
                a = n("872717"),
                l = n("913144"),
                u = n("775433"),
                s = n("697218"),
                o = n("10514"),
                c = n("764364"),
                d = n("676572"),
                f = n("646718"),
                I = n("49111");
            let E = "nonSubscriber";
            async function _() {
                try {
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await a.default.get({
                        url: I.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [E]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function T(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), r = d.default.shouldFetchPremiumLikelihood(), i = s.default.getCurrentUser();
                N(i, r, t, n)
            }

            function S(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), a = (0, i.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), l = (0, i.default)([s.default], () => s.default.getCurrentUser());
                r.useEffect(() => {
                    N(l, a, t, n)
                }, [l, a, t, n])
            }

            function N(e, t, n, r) {
                null != e && !(0, c.isPremium)(e) && n && (t && _(), r && (!o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, u.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, u.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("446674"),
                i = n("913144");
            let a = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                l = a;
            class u extends r.default.Store {
                initialize() {
                    l = a
                }
                getState() {
                    return l
                }
                shouldFetchPremiumLikelihood() {
                    return !l.isFetching && !l.fetched
                }
            }
            u.displayName = "UserPremiumLikelihoodStore";
            var s = new u(i.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    l.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    l.premiumLikelihood = t, l.fetched = !0, l.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    l.isFetching = !1
                },
                LOGOUT: function() {
                    l.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var a = i
        },
        166960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2023-05_referral_trials_birthday_moment",
                label: "Referral Trials Birthday Moment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Users will see the birthday moment referral trial UX",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var a = i
        },
        1607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2023-02_referral_trials",
                label: "Referral Trials",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Nitro users can send a Nitro trial offer to another user.",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var a = i
        },
        65324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007"), n("70102");
            var r = n("37983"),
                i = n("884691"),
                a = n("446674"),
                l = n("206230"),
                u = n("491605"),
                s = n("210721"),
                o = n("78345");

            function c(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: c = !0,
                    defaultAnimationState: d,
                    idleAnimationState: f
                } = e, I = (0, a.useStateFromStores)([l.default], () => l.default.useReducedMotion), [E, _] = i.useState(d), T = i.useRef((0, s.getGiftAnimationData)(t, E)), [S, N] = i.useState(null == f), [p, C] = i.useState(!1), [m, h] = i.useState(-1), A = () => {
                    T.current = (0, s.getGiftAnimationData)(t, E), h(e => e + 1)
                }, L = () => {
                    N(!1), C(!0), h(-1), _(d)
                };
                i.useEffect(() => {
                    null == f && _(d)
                }, [f, d]), i.useEffect(() => {
                    if (null != f && m >= 0) {
                        L();
                        return
                    }
                    A()
                }, [t, f]), i.useEffect(() => {
                    (!p || null == f) && A()
                }, [E]), i.useEffect(() => {
                    p && (N(null == f), C(!1), A())
                }, [p]);
                if (!o.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, r.jsx)(u.default, {
                    importData: T.current,
                    shouldAnimate: !I && c,
                    className: n,
                    versionKey: m,
                    onComplete: null != f ? () => {
                        null != f && (_(f), N(!0))
                    } : void 0,
                    loop: S
                })
            }
        },
        661128: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useUnsupportedExternalSubscriptionModalHandler: function() {
                    return d
                },
                useSubscriptionEntitlements: function() {
                    return I
                }
            });
            var r = n("884691"),
                i = n("446674"),
                a = n("404118"),
                l = n("10514"),
                u = n("437712"),
                s = n("719923"),
                o = n("843455"),
                c = n("782340");

            function d(e, t, n) {
                r.useEffect(() => {
                    null != e && e.isPurchasedExternally && null != e.paymentGateway && !n && (a.default.show({
                        title: c.default.Messages.BILLING_EXTERNAL_HEADER.format({
                            paymentGatewayName: o.PaymentGatewayToFriendlyName[e.paymentGateway]
                        }),
                        body: c.default.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                            paymentGatewayName: o.PaymentGatewayToFriendlyName[e.paymentGateway],
                            subscriptionManagementLink: (0, s.getExternalSubscriptionMethodUrl)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                        }),
                        confirmText: c.default.Messages.OKAY
                    }), t())
                }, [e])
            }
            let f = [];

            function I(e, t) {
                let n = (0, i.useStateFromStores)([l.default], () => null != e ? l.default.get(e) : null),
                    a = (0, i.useStateFromStores)([u.default], () => {
                        var e;
                        return null != n && null !== (e = u.default.getForSku(n.skuId)) && void 0 !== e ? e : f
                    }),
                    o = r.useMemo(() => Array.from(a).filter(e => {
                        let {
                            parentId: t,
                            consumed: n
                        } = e;
                        return null != t && !n
                    }), [a]),
                    c = !t && null != n && null != o && o.length >= s.default.getIntervalMonths(n.interval, n.intervalCount);
                return {
                    hasEntitlements: c,
                    entitlements: o
                }
            }
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("884691"),
                i = n("79112"),
                a = n("685665"),
                l = n("929423");
            n("424562");
            var u = n("49111"),
                s = n("397336");

            function o(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: o,
                    analyticsLocations: c,
                    openWithoutBackstack: d = !1
                } = e, {
                    analyticsLocations: f
                } = (0, a.default)(), I = (0, r.useCallback)(() => {
                    null != t && (0, l.initGuildIdentitySettings)(t, null != c ? c : f), i.default.open(u.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? s.ProfileCustomizationSubsection.GUILD : s.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: o,
                        analyticsLocations: c,
                        openWithoutBackstack: d
                    })
                }, [t, n, o, c, d, f]);
                return I
            }
        },
        967241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openThreadSidebarForViewing: function() {
                    return h
                },
                openThreadSidebarForCreating: function() {
                    return A
                },
                closeThreadSidebar: function() {
                    return L
                },
                closeAndClearThreadSidebar: function() {
                    return O
                }
            });
            var r = n("627445"),
                i = n.n(r),
                a = n("917351"),
                l = n.n(a),
                u = n("913144"),
                s = n("295426"),
                o = n("244201"),
                c = n("716241"),
                d = n("565298"),
                f = n("393414"),
                I = n("144491"),
                E = n("845579"),
                _ = n("474643"),
                T = n("18494"),
                S = n("800762"),
                N = n("659500"),
                p = n("648564"),
                C = n("49111"),
                m = n("724210");

            function h(e, t, n) {
                o.MainWindowDispatch.dispatch(C.ComponentActions.POPOUT_CLOSE);
                let r = !l.isEmpty(S.default.getVoiceStatesForChannel(e.id));
                if (t || !E.UseThreadSidebar.getSetting() || __OVERLAY__ || r) {
                    u.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, I.transitionToThread)(e, n) : (0, I.transitionToChannel)(e.id);
                    return
                }
                i(null != e.parent_id, "all threads must have parents");
                let a = T.default.getChannelId();
                e.parent_id !== a && !(0, m.isGuildHomeChannel)(a) && (0, I.transitionToChannel)(e.parent_id), (0, f.transitionTo)(C.Routes.CHANNEL_THREAD_VIEW((0, d.getGuildIdForGenericRedirect)(e), (0, m.isGuildHomeChannel)(a) ? m.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? p.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    N.ComponentDispatch.dispatch(C.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function A(e, t, n) {
                i(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), i(!__OVERLAY__, "Cannot create threads in the overlay."), (0, c.trackWithMetadata)(C.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), o.MainWindowDispatch.dispatch(C.ComponentActions.POPOUT_CLOSE), T.default.getChannelId() !== e.id && (0, I.transitionToChannel)(e.id);
                let r = _.default.getDraft(e.id, _.DraftType.FirstThreadMessage);
                if ("" === r) {
                    let t = _.default.getDraft(e.id, _.DraftType.ChannelMessage);
                    s.default.saveDraft(e.id, "", _.DraftType.ChannelMessage), s.default.saveDraft(e.id, t, _.DraftType.FirstThreadMessage)
                }
                setTimeout(() => {
                    u.default.dispatch({
                        type: "SIDEBAR_CREATE_THREAD",
                        parentChannelId: e.id,
                        parentMessageId: null == t ? void 0 : t.id,
                        location: n
                    })
                }, 0)
            }

            function L(e, t) {
                (0, f.transitionTo)(C.Routes.CHANNEL(e, (0, m.isGuildHomeChannel)(t) ? m.StaticChannelRoute.GUILD_HOME : t)), u.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function O(e) {
                u.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), u.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: _.DraftType.FirstThreadMessage
                }), u.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: _.DraftType.ThreadSettings
                })
            }
        },
        506885: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("913144"),
                i = n("327037"),
                a = n("462274"),
                l = n("535013"),
                u = n("42203"),
                s = n("26989"),
                o = n("713135"),
                c = n("386714");
            async function d(e, t) {
                var n, d, f;
                let I, {
                    withMutualGuilds: E = !1,
                    withMutualFriendsCount: _ = !1,
                    friendToken: T,
                    preloadUserBanner: S = !0,
                    dispatchWait: N = !1,
                    guildId: p,
                    channelId: C
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                null != t && (0, a.maybeFetchColors)(t), null != p && !E && (E = !0), null != p && (I = null !== (d = null === (n = (0, l.getVisibleConnectionsRole)({
                    guildMember: s.default.getMember(p, e),
                    channel: u.default.getChannel(C)
                })) || void 0 === n ? void 0 : n.id) && void 0 !== d ? d : void 0);
                let m = o.default.getUserProfile(e),
                    h = o.default.getMutualGuilds(e),
                    A = o.default.getMutualFriendsCount(e),
                    L = o.default.isFetchingProfile(e),
                    O = (null == m ? void 0 : m.profileFetchFailed) || !L && (!Array.isArray(h) && E || null == A && _),
                    P = S ? c.default : void 0,
                    g = !1;
                if (null != p) {
                    let t = o.default.getGuildMemberProfile(e, p);
                    g = null == t
                }
                if (!O && !g && (L || Date.now() - (null !== (f = null == m ? void 0 : m.lastFetched) && void 0 !== f ? f : 0) < 6e4)) return Promise.resolve();
                N ? await r.default.wait(() => (0, i.fetchProfile)(e, {
                    withMutualGuilds: E,
                    withMutualFriendsCount: _,
                    friendToken: T,
                    guildId: p,
                    connectionsRoleId: I
                }, P)) : await (0, i.fetchProfile)(e, {
                    withMutualGuilds: E,
                    withMutualFriendsCount: _,
                    friendToken: T,
                    guildId: p,
                    connectionsRoleId: I
                }, P)
            }
        },
        386714: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("845579"),
                i = n("217513");

            function a(e, t) {
                if ("undefined" == typeof Image) return;
                let n = (0, i.getDisplayProfile)(e.user.id, t);
                if (null == n) return;
                let a = r.GifAutoPlay.getSetting(),
                    l = n.getBannerURL({
                        canAnimate: a,
                        size: 480
                    });
                if (null == l) return;
                let u = new Image;
                u.src = l
            }
        },
        476108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("446674"),
                i = n("95410"),
                a = n("913144"),
                l = n("49111");
            let u = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                s = u,
                o = "LAST_VIEWED_PATH";
            class c extends r.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
                    s = null != e ? e : u
                }
                get defaultRoute() {
                    return l.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = s.lastViewedNonVoicePath) && void 0 !== e ? e : l.Routes.ME
                }
                get fallbackRoute() {
                    return l.Routes.ME
                }
                getState() {
                    return s
                }
            }
            c.displayName = "DefaultRouteStore", c.persistKey = "DefaultRouteStore", c.migrations = [() => {
                let e = i.default.get(o, null);
                return i.default.remove(o), {
                    lastViewedPath: e
                }
            }];
            var d = new c(a.default, {
                SAVE_LAST_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return s.lastViewedPath = t, !0
                },
                SAVE_LAST_NON_VOICE_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return s.lastViewedNonVoicePath = t, !0
                }
            })
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("77078"),
                l = n("393414"),
                u = n("49111"),
                s = i.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: s,
                        onClick: o,
                        onKeyPress: c,
                        focusProps: d,
                        ...f
                    } = e, I = i.useCallback(e => {
                        !e.repeat && ((e.charCode === u.KeyboardKeys.SPACE || e.charCode === u.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, l.transitionTo)(n), null == o || o()), null == c || c(e))
                    }, [n, c, o]), E = i.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, l.transitionTo)(n), null == o || o())
                    }, [n, o]), _ = (0, r.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: E,
                        onKeyPress: I,
                        ...f,
                        children: s
                    });
                    return (0, r.jsx)(a.FocusRing, {
                        ...d,
                        children: _
                    })
                })
        },
        754474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return u.BotTagTypes
                },
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                a = n.n(i),
                l = n("79798"),
                u = n("988268"),
                s = n("888770"),
                o = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: i,
                        nameColor: u,
                        className: o,
                        botType: c,
                        usernameClass: d,
                        discriminatorClass: f,
                        botClass: I,
                        botVerified: E = !1,
                        style: _,
                        useRemSizes: T = !1,
                        usernameIcon: S
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: a(o, s.nameTag),
                        style: _,
                        children: [(0, r.jsxs)("span", {
                            className: a(s.username, d),
                            style: null != u ? {
                                color: u
                            } : void 0,
                            children: [S, t]
                        }), null != n ? (0, r.jsxs)("span", {
                            className: null != f ? f : void 0,
                            children: ["#", n]
                        }) : null, null != c ? (0, r.jsx)(l.default, {
                            type: c,
                            invertColor: i,
                            className: a(I, s.bot),
                            verified: E,
                            useRemSizes: T
                        }) : null]
                    })
                }
        },
        191814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");

            function i(e) {
                let {
                    size: t,
                    horizontal: n = !1
                } = e, i = n ? t : 1, a = n ? 1 : t;
                return (0, r.jsx)("span", {
                    style: {
                        display: "block",
                        width: i,
                        minWidth: i,
                        height: a,
                        minHeight: a
                    }
                })
            }
            n("884691")
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("926001"),
                l = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: a,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, a.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        346955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("509317"),
                l = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: a,
                            d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"
                        })
                    })
                }, a.FolderIcon, void 0, {
                    size: 24
                })
        },
        474571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("197801"),
                l = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return 16 === t || 16 === n ? (0, r.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, r.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, a.SettingsIcon, void 0, {
                    size: 24
                })
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("578478"),
                l = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: a,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: i
                        })
                    })
                }, a.ImageIcon, void 0, {
                    size: 24
                })
        },
        987772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("504318"),
                l = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: a,
                            fill: i
                        })
                    })
                }, a.PencilIcon, void 0, {
                    size: 16
                })
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("424823"),
                l = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: a,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, a.PlusSmallIcon, void 0, {
                    size: 24
                })
        },
        351825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("31745"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        className: a,
                        foreground: l
                    } = e;
                    return (0, r.jsx)("svg", {
                        className: a,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, a.CirclePlusIcon, void 0, {
                    size: 16
                })
        },
        659186: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatLayerContainer: function() {
                    return u
                },
                ChatLayerProvider: function() {
                    return s
                },
                default: function() {
                    return o
                }
            });
            var r = n("228256");
            let {
                Layer: i,
                LayerContainer: a,
                LayerProvider: l
            } = (0, r.createLayer)("Chat"), u = a, s = l;
            var o = i
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return N
                },
                default: function() {
                    return m
                }
            }), n("424973"), n("222007");
            var r = n("37983"),
                i = n("884691"),
                a = n("414456"),
                l = n.n(a),
                u = n("627445"),
                s = n.n(u),
                o = n("77078"),
                c = n("506885"),
                d = n("981601"),
                f = n("766274"),
                I = n("697218"),
                E = n("368121"),
                _ = n("523096"),
                T = n("587974"),
                S = n("494101");
            let N = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function p(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class C extends i.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: i,
                        extraDetail: a
                    } = this.props, l = [], u = e.length === t ? e.length : t - 1, s = this.renderMoreUsers(u), o = 0;
                    for (; o < u && o < e.length;) {
                        var c;
                        let t = null == s && null == a && o === e.length - 1,
                            u = n(e[o], t, o);
                        l.push(t ? (0, r.jsx)("div", {
                            className: S.avatarContainer,
                            children: u
                        }, p(null !== (c = e[o]) && void 0 !== c ? c : null, o)) : (0, r.jsx)(T.default, {
                            className: S.avatarContainerMasked,
                            height: i,
                            width: i,
                            mask: T.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: u
                        }, p(e[o], o))), o++
                    }
                    return null != a ? l.push(a) : null != s && l.push(s), l
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: a,
                        renderMoreUsers: l,
                        users: u
                    } = this.props, s = Math.min(e, u.length);
                    if (!a) {
                        if (null != n) {
                            if (n >= t) return (0, r.jsx)(i.Fragment, {
                                children: l("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > u.length) {
                                let e = n - u.length;
                                return (0, r.jsx)(i.Fragment, {
                                    children: l("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (s < u.length) {
                            let e = Math.min(u.length - s, 99);
                            return (0, r.jsx)(i.Fragment, {
                                children: l("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, r.jsx)(E.default, {
                        foreground: S.foreground,
                        className: S.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: i,
                        showUserPopout: a,
                        useFallbackUserForPopout: u
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, E = n.find(e => null != e && e.id === f), _ = u && null == I.default.getUser(f);
                    return (0, r.jsx)(o.Popout, {
                        position: "right",
                        preload: null == E ? void 0 : () => (0, c.default)(E.id, E.getAvatarURL(i, 80), {
                            guildId: i
                        }),
                        shouldShow: !0 === a && null != f,
                        fixed: !0,
                        renderPopout: e => (s(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, r.jsx)(d.default, {
                            ...this.props,
                            user: _ && null != E ? E : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, r.jsxs)("div", {
                            className: l(e, S.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.SIZE_24;
                                switch (e) {
                                    case N.SIZE_16:
                                        return S.size16;
                                    case N.SIZE_24:
                                        return S.size24;
                                    case N.SIZE_32:
                                        return S.size32;
                                    case N.SIZE_56:
                                        return S.size56;
                                    default:
                                        return S.size24
                                }
                            }(t)),
                            ref: this._ref,
                            ...n,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutUserId: null
                    }, this._ref = i.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: i,
                            guildId: a,
                            size: l
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, r.jsx)("div", {
                                className: S.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % _.default.DEFAULT_AVATARS.length,
                                    t = _.default.DEFAULT_AVATARS[e];
                                return (0, r.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: S.avatar
                                })
                            }
                        }
                        let u = (0, r.jsx)("img", {
                            src: e.getAvatarURL(a, l),
                            alt: e.username,
                            className: S.avatar
                        }, e.id);
                        return i ? (0, r.jsx)(o.Clickable, {
                            className: S.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: u
                        }, e.id) : u
                    }
                }
            }
            C.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, r.jsx)("div", {
                        className: S.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: N.SIZE_24
            };
            var m = C
        },
        252438: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                SKUBenefitTypes: function() {
                    return r
                }
            }), n("222007"), (i = r || (r = {}))[i.INTANGIBLE = 1] = "INTANGIBLE", i[i.APPLICATION_PREMIUM_COMMAND = 2] = "APPLICATION_PREMIUM_COMMAND"
        }
    }
]);
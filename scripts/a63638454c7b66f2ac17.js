(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["9674"], {
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
                    return o
                }
            });
            var i = n("913144"),
                r = n("696605");

            function a(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function l(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function u(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function o(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: a,
                    rowHeight: l
                } = e;

                function o(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / l)) + t)
                }
                let s = [];

                function c(e) {
                    let t = e + (r.MINIMUM_RANGE - 1);
                    return s.push([e, t]), t + 1
                }
                let d = o(.5 * a),
                    f = o(i, -d),
                    I = o(i + a, d);
                for (f > 0 && (f = Math.max(c(0), f)), f = Math.floor(f / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; f <= I;) f = c(f);
                u(t, n, s)
            }
        },
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                l = n("446674"),
                u = n("77078"),
                o = n("102985"),
                s = n("79798"),
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
                    botType: r,
                    botVerified: l,
                    discriminatorClass: o,
                    className: c,
                    usernameClass: d,
                    color: E,
                    botClass: _,
                    showStreamerModeTooltip: T
                } = e;
                return (0, i.jsxs)("div", {
                    className: a(I.info, c),
                    children: [(0, i.jsx)(u.Tooltip, {
                        text: f.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: T,
                        children: e => (0, i.jsx)("span", {
                            ...e,
                            className: a(I.username, d),
                            style: null != E ? {
                                color: E
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, i.jsx)("span", {
                        className: a(I.infoSpacing, o),
                        children: n
                    }) : void 0, null != r && (0, i.jsx)(s.default, {
                        type: r,
                        className: a(I.infoSpacing, _),
                        verified: l
                    })]
                })
            };
            var T = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: r,
                    forceUsername: a,
                    showAccountIdentifier: u,
                    overrideDiscriminator: s,
                    forcePomelo: f,
                    ...I
                } = e, T = (0, l.useStateFromStores)([o.default], () => o.default.hidePersonalInformation), S = T || t || n.isNonUserBot(), N = n.toString(), p = d.default.getName(n), C = a ? N : null != r ? r : p, m = n.isPomelo() || f;
                if (m || C !== N) {
                    let e = C === N && m && a ? d.default.getUserTag(n, {
                            forcePomelo: f
                        }) : C,
                        t = u && e !== "@".concat(N) ? d.default.getUserTag(n) : void 0;
                    return (0, i.jsx)(_, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: E(n),
                        showStreamerModeTooltip: T && e !== p,
                        ...I
                    })
                }
                return (0, i.jsx)(c.default, {
                    name: C,
                    botType: E(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: S || C !== N ? null : null != s ? s : n.discriminator,
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
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: u
                    })
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
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
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
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "m13.957 5.457 4.586 4.586a1 1 0 0 0 1.414 0l1.379-1.379a2 2 0 0 0 0-2.828l-3.172-3.172a2 2 0 0 0-2.828 0l-1.379 1.379a1 1 0 0 0 0 1.414ZM2.111 20.156l.727-4.218a3 3 0 0 1 .835-1.611l7.87-7.87a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-7.87 7.87a3 3 0 0 1-1.611.835l-4.218.727a1.5 1.5 0 0 1-1.733-1.733Z",
                        clipRule: "evenodd",
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
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        clipRule: "evenodd",
                        className: u
                    })
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
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
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
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
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
            var i = n("884691"),
                r = n("599110");
            let a = () => i.useContext(r.AnalyticsContext)
        },
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r(e, t) {
                let n = i.useRef(e);
                return i.useEffect(() => {
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
            var i = n("884691"),
                r = n("917351"),
                a = n.n(r);
            n("233736");
            var l = n("666020");

            function u(e) {
                i.useEffect(() => (a.forEach(e, (e, t) => (0, l.subscribeMembers)(t, e)), () => {
                    a.forEach(e, (e, t) => (0, l.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        478272: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("974889"),
                l = n("954016"),
                u = n("49111");

            function o(e) {
                let {
                    channel: t,
                    guildId: o,
                    locationObject: s,
                    openInPopout: c,
                    initialSelectedApplicationId: d,
                    initialSlide: f = l.ActivityShelfSlides.DIRECTORY,
                    enableSelectedTextChannelInvite: I = !1,
                    analyticsLocations: E
                } = e;
                c && (0, a.default)(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let _ = c ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
                return (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("605455").then(n.bind(n, "605455"));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        channel: t,
                        guildId: o,
                        locationObject: s,
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
                    return o
                },
                PurchaseConfirmationLite: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("724038"),
                l = n("782340"),
                u = n("22019");
            let o = e => {
                let {
                    onConfirm: t,
                    onCancel: n,
                    title: o,
                    subtitle: s,
                    confirmCta: c,
                    showOpenDiscord: d = !0
                } = e;
                return (0, i.jsxs)("div", {
                    className: u.confirmationContainer,
                    children: [(0, i.jsx)(r.Heading, {
                        className: u.confirmationHeader,
                        variant: "heading-lg/extrabold",
                        children: o
                    }), null != s ? (0, i.jsx)(r.Text, {
                        className: u.confirmationSubtitle,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: s
                    }) : null, (0, i.jsxs)("div", {
                        className: u.buttonContainer,
                        children: [d && (0, i.jsx)(r.Button, {
                            fullWidth: !0,
                            onClick: () => (0, a.default)("application_sub_mweb_success_modal"),
                            children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
                        }), (0, i.jsx)(r.Button, {
                            fullWidth: !0,
                            color: r.Button.Colors.PRIMARY,
                            onClick: t,
                            children: c
                        }), null != n && (0, i.jsx)(r.Button, {
                            fullWidth: !0,
                            color: r.Button.Colors.PRIMARY,
                            look: r.Button.Looks.LINK,
                            onClick: n,
                            children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CANCEL_BUTTON
                        })]
                    })]
                })
            };

            function s(e) {
                let {
                    onConfirm: t,
                    listing: n,
                    subscription: o
                } = e;
                return (0, i.jsxs)("div", {
                    className: u.confirmationContainer,
                    children: [(0, i.jsx)(r.Heading, {
                        className: u.confirmationHeader,
                        variant: "heading-lg/extrabold",
                        children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
                            tier: n.name
                        })
                    }), (0, i.jsx)(r.Text, {
                        className: u.confirmationSubtitle,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
                            timestamp: null == o ? void 0 : o.currentPeriodEnd
                        })
                    }), (0, i.jsxs)("div", {
                        className: u.buttonContainer,
                        children: [(0, i.jsx)(r.Button, {
                            className: u.openDiscordButton,
                            onClick: () => (0, a.default)("application_sub_mweb_success_modal"),
                            children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
                        }), (0, i.jsx)(r.Button, {
                            className: u.doneButton,
                            look: r.Button.Looks.BLANK,
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
            var i = n("597755"),
                r = n.n(i),
                a = n("742270"),
                l = n("815157"),
                u = n("391679"),
                o = n("327037"),
                s = n("393414"),
                c = n("271938"),
                d = n("476108"),
                f = n("599110"),
                I = n("65300"),
                E = n("49111");
            async function _(e) {
                var t, n;
                let i = null === (t = r.os) || void 0 === t ? void 0 : t.family;
                if ("Android" === i || "iOS" === i) {
                    let t = null !== (n = c.default.getFingerprint()) && void 0 !== n ? n : c.default.getId(),
                        i = (0, l.generateAttemptId)();
                    if (null == t && c.default.isAuthenticated()) try {
                        await (0, o.fetchCurrentUser)(), t = c.default.getId()
                    } catch {}
                    return (0, l.default)((0, a.getDefaultDynamicLinkTemplate)(), {
                        utmSource: e,
                        fingerprint: t,
                        attemptId: i
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
                    !e && (0, s.replaceWith)(d.default.fallbackRoute)
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
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                l = n("669491"),
                u = n("819855"),
                o = n("77078"),
                s = n("841098"),
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
                } = e, n = (0, s.default)(), r = (0, u.isThemeDark)(n) ? S : N;
                return (0, i.jsxs)("div", {
                    className: a(T.container, t),
                    children: [(0, i.jsx)(o.Heading, {
                        className: T.header,
                        variant: "heading-xl/semibold",
                        children: _.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
                    }), (0, i.jsxs)(o.Text, {
                        className: T.description,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: [(0, i.jsx)("p", {
                            children: _.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
                        }), (0, i.jsx)("p", {
                            children: _.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                                helpdeskArticle: f.default.getArticleURL(E.HelpdeskArticles.BLOCKED_PAYMENTS)
                            })
                        })]
                    }), (0, i.jsx)("img", {
                        src: r,
                        className: T.splashImage,
                        alt: "Blocked Payments"
                    })]
                })
            }

            function C() {
                return (0, i.jsx)(p, {
                    className: T.settings
                })
            }

            function m(e) {
                let {
                    onClose: t
                } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(o.ModalHeader, {
                        className: T.blockedPaymentsModalHeader,
                        justify: c.default.Justify.END,
                        children: (0, i.jsx)(o.ModalCloseButton, {
                            onClick: t
                        })
                    }), (0, i.jsx)(o.ModalContent, {
                        className: T.blockedPaymentsModalContent,
                        children: (0, i.jsx)(p, {
                            className: T.modal
                        })
                    })]
                })
            }

            function h(e) {
                let {
                    className: t
                } = e, n = (0, I.useBlockedPaymentsConfig)();
                return n ? (0, i.jsxs)(o.Card, {
                    className: a(T.blockedPaymentsWarning, t),
                    type: o.Card.Types.CUSTOM,
                    children: [(0, i.jsx)(d.default, {
                        className: T.blockedPaymentsWarningIcon,
                        color: l.default.unsafe_rawColors.YELLOW_300.css
                    }), (0, i.jsx)(o.Text, {
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

            function i() {
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

            function r(e) {
                return {
                    textValue: e,
                    richValue: l(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return i
                },
                createState: function() {
                    return r
                },
                toRichValue: function() {
                    return l
                },
                voidToOptionValue: function() {
                    return u
                }
            });
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
            var i = n("37983"),
                r = n("884691"),
                a = n("516555"),
                l = n("65597"),
                u = n("206230"),
                o = n("49111");
            let s = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => o.NOOP,
                    removeClickListener: o.NOOP
                },
                c = r.createContext(s);

            function d(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: o,
                    baseConfig: d,
                    addClickListener: f,
                    removeClickListener: I
                } = e, E = (0, a.useConfettiCannon)(n, o), _ = (0, l.default)([u.default], () => u.default.useReducedMotion), T = r.useMemo(() => _ ? s : {
                    confettiCanvas: n,
                    cannon: E,
                    createConfetti: (e, t) => E.createConfetti({
                        ...d,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, i) => E.createConfetti({
                        ...d,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...n
                    }, i),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return E.createMultipleConfetti({
                            ...d,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            r = arguments.length > 4 ? arguments[4] : void 0;
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
                        }, i, r)
                    },
                    addClickListener: f,
                    removeClickListener: I
                }, [f, d, E, n, _, I]);
                return (0, i.jsx)(c.Provider, {
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
                    return o
                },
                COMMON_CONFETTI_BASE_CONFIG: function() {
                    return s
                },
                COMMON_CONFETTI_ENVIRONMENT: function() {
                    return c
                }
            });
            var i = n("516555"),
                r = n("839491");
            let a = r,
                l = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                u = [n("890450"), a, n("164654"), n("540346"), n("526094"), n("367469"), n("23933"), {
                    src: n("283397"),
                    colorize: !1
                }],
                o = 28,
                s = {
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
                        maxValue: o
                    }
                },
                c = new i.Environment
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("884691");
            let r = i.createContext(void 0);
            var a = r
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
            });
            var i = n("867805"),
                r = n("407063"),
                a = n("315102"),
                l = n("773336"),
                u = n("49111");
            let o = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                s = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                c = (0, l.isAndroid)(),
                d = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: I(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()))),
                I = (e, t) => {
                    let {
                        id: n,
                        icon: i
                    } = e;
                    if (null == i) return;
                    if (i.startsWith("data:")) return i;
                    let l = a.SUPPORTS_WEBP ? "webp" : "png",
                        d = "",
                        f = "quality=lossless";
                    return (null != t && (d = "size=" + (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()), f = c ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(o, "/").concat(n, "/").concat(i, ".").concat(l, "?").concat(d).concat(f) : "".concat(s).concat(u.Endpoints.ROLE_ICON(n, i), "?").concat(d)
                },
                E = e => e.startsWith(o) || e.startsWith("".concat(s, "/roles")) && e.includes("/icons/"),
                _ = (e, t) => {
                    var n;
                    let i = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return i || e.features.has(u.GuildFeatures.ROLE_ICONS)
                }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return u
                },
                setCurrentGuild: function() {
                    return o
                },
                initGuildIdentitySettings: function() {
                    return s
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
            });
            var i = n("872717"),
                r = n("913144"),
                a = n("54239"),
                l = n("49111");
            async function u(e, t) {
                let {
                    nick: n,
                    avatar: a
                } = t;
                if (null == e) throw Error("Need guildId");
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: l.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: a
                        },
                        oldFormErrors: !0
                    });
                    return r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), r.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function o(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function s(e, t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function c() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, a.popLayer)()
            }

            function d() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function f(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function I(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function E(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function _(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function T(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function S(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function N() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function p() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function C() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function m() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function h(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, r, a, l, u, o, s, c, d;
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
                _ = E.FormStates.CLOSED, T = {}, s = null, c = void 0, d = []
            }

            function p() {
                C(), m(), T = {}, _ = E.FormStates.OPEN
            }

            function C() {
                i = void 0, u = void 0
            }

            function m() {
                r = void 0, a = void 0, l = void 0, o = void 0
            }
            class h extends f.default.Store {
                getFormState() {
                    return _
                }
                getErrors() {
                    return T
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== a || void 0 !== l || void 0 !== u || void 0 !== o
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return r
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
                    return o
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: r,
                        pendingBio: a,
                        pendingPronouns: l,
                        pendingNickname: u,
                        pendingThemeColors: o
                    }
                }
                getGuild() {
                    return s
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
                    s = e.guild, _ = E.FormStates.OPEN, T = {}, c = e.source, d = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: N,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    p(), N()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    s = e.guild, T = {}
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
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    r = t
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
                    o = t
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
                    return o
                }
            });
            var i = n("913144"),
                r = n("599110"),
                a = n("49111");

            function l(e) {
                r.default.track(a.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), i.default.wait(() => {
                    i.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function u(e, t) {
                i.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function o(e) {
                i.default.dispatch({
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
            });
            var i = n("446674"),
                r = n("913144"),
                a = n("197881"),
                l = n("492397");
            let u = new Set,
                o = {};
            class s extends i.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (u = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (o = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && o[e];
                    return !(l.CONFERENCE_MODE_ENABLED || a.ProcessArgs.isDisallowPopupsSet()) && (n || !u.has(e))
                }
                hasHiddenHotspot(e) {
                    return u.has(e)
                }
                getHotspotOverride(e) {
                    return o[e]
                }
                getState() {
                    return {
                        hiddenHotspots: u,
                        hotspotOverrides: o
                    }
                }
            }
            s.displayName = "HotspotStore", s.persistKey = "hotspots", s.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var c = new s(r.default, {
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
                    o[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == o[t]) return !1;
                    delete o[t]
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
            var i = n("533613");
            n.es(i, t);
            var r = n("597517");
            n.es(r, t);
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
                    return o
                },
                fetchMessageInteractionData: function() {
                    return s
                }
            });
            var i = n("872717"),
                r = n("913144"),
                a = n("49111");

            function l(e, t, n, i) {
                r.default.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: e,
                    nonce: t,
                    state: n,
                    indices: i
                })
            }

            function u(e, t) {
                let {
                    data: n,
                    messageId: i,
                    onCreate: a,
                    onSuccess: l,
                    onFailure: u
                } = t;
                r.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: i,
                    onCreate: a,
                    onSuccess: l,
                    onFailure: u
                })
            }

            function o(e, t, n) {
                r.default.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: e,
                    errorMessage: n,
                    errorCode: t
                })
            }
            async function s(e, t) {
                let n = await i.default.get({
                    url: a.Endpoints.MESSAGE_INTERACTION_DATA(e, t),
                    oldFormErrors: !0
                });
                if (n.ok) {
                    let i = n.body;
                    r.default.dispatch({
                        type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                        channelId: e,
                        messageId: t,
                        interactionData: i
                    })
                }
            }
        },
        809810: function(e, t, n) {
            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("446674"),
                l = n("913144"),
                u = n("798609"),
                o = n("42203"),
                s = n("3765");
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
                        let i = f[t];
                        null != i && (e[i] = n.state)
                    }
                    return e
                }
                canQueueInteraction(e, t) {
                    let n = d[e];
                    return (null == n || null == c[n] || c[n].state === s.InteractionState.FAILED) && (null == c[t] || c[t].state === s.InteractionState.FAILED) && !0
                }
                getIFrameModalApplicationId() {
                    return r
                }
                getIFrameModalKey() {
                    return i
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
                        data: i,
                        onCreate: r,
                        onCancel: a,
                        onSuccess: l,
                        onFailure: u
                    } = e;
                    null != n && (d[n] = t, f[t] = n), c[t] = {
                        state: s.InteractionState.QUEUED,
                        data: i,
                        onCreate: r,
                        onCancel: a,
                        onSuccess: l,
                        onFailure: u
                    }
                },
                INTERACTION_CREATE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        interactionId: i
                    } = e;
                    if (null == n) return !1;
                    let r = c[n];
                    if (null == r || r.state !== s.InteractionState.QUEUED) return !1;
                    r.state = s.InteractionState.CREATED, null === (t = r.onCreate) || void 0 === t || t.call(r, i)
                },
                INTERACTION_SUCCESS: function(e) {
                    var t;
                    let {
                        nonce: n
                    } = e;
                    if (null == n) return !1;
                    let i = c[n];
                    if (null == i) return !1;
                    null === (t = i.onSuccess) || void 0 === t || t.call(i), I(n)
                },
                INTERACTION_FAILURE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        errorCode: i,
                        errorMessage: r
                    } = e;
                    if (null == n) return !1;
                    let a = c[n];
                    if (null == a) return !1;
                    null === (t = a.onFailure) || void 0 === t || t.call(a, i, r), a.data.interactionType === u.InteractionTypes.APPLICATION_COMMAND ? I(n) : c[n] = {
                        ...a,
                        state: s.InteractionState.FAILED,
                        errorCode: i,
                        errorMessage: r
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
                    } = e, n = o.default.getChannel(t);
                    if (null == n) return !1;
                    for (let [e, t] of Object.entries(c)) t.state === s.InteractionState.FAILED && I(e)
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    let {
                        application: t
                    } = e;
                    r = t.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    i = void 0, r = void 0
                },
                INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
                    let {
                        modalKey: t
                    } = e;
                    i = t
                }
            })
        },
        3765: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                InteractionState: function() {
                    return i
                }
            }), (r = i || (i = {}))[r.QUEUED = 0] = "QUEUED", r[r.CREATED = 1] = "CREATED", r[r.FAILED = 2] = "FAILED"
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
            });
            var i, r, a = n("249654"),
                l = n("872717"),
                u = n("913144"),
                o = n("819689"),
                s = n("798609"),
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
                    messageFlags: i,
                    customId: r,
                    indices: u,
                    applicationId: o,
                    channelId: E,
                    guildId: _,
                    localState: S
                } = e, N = a.default.fromTimestamp(Date.now());
                if (!I.default.canQueueInteraction(n, N)) return;
                await c.default.unarchiveThreadIfNecessary(E), (0, f.addQueued)(N, {
                    messageId: n,
                    data: {
                        interactionType: s.InteractionTypes.MESSAGE_COMPONENT,
                        customId: r,
                        indices: u
                    },
                    onFailure: (e, t) => p(E, e, t)
                }), null != S && (0, f.queueInteractionComponentState)(n, N, S, u);
                let m = {
                    type: s.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: N,
                    guild_id: _,
                    channel_id: E,
                    message_flags: i,
                    message_id: n,
                    application_id: o,
                    session_id: d.default.getSessionId(),
                    data: {
                        component_type: t,
                        custom_id: r,
                        ... function(e) {
                            if (null == e) return null;
                            if (e.type === s.ComponentType.STRING_SELECT || e.type === s.ComponentType.INPUT_TEXT) return e;
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
                null == n && null != t && o.default.sendClydeError(e, t)
            }, C = (e, t, n, i) => {
                if (!i.ok) {
                    if (!i.hasErr) {
                        var r;
                        if (i.status >= 400 && i.status < 500 && i.body) {
                            if (i.body.code === T.AbortCodes.INVALID_FORM_BODY && i.body.errors) {
                                let r = (0, _.getFirstSkemaError)(i.body.errors);
                                null != r && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === r.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === r.code) && u.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: t,
                                    guildId: n
                                }), (0, f.setFailed)(e, void 0, null == r ? void 0 : r.message);
                                return
                            }(0, f.setFailed)(e, void 0, i.body.message);
                            return
                        }(0, f.setFailed)(e, null === (r = i.body) || void 0 === r ? void 0 : r.code);
                        return
                    }(0, f.setFailed)(e)
                }
            };
            (i = r || (r = {}))[i.SENDING = 0] = "SENDING", i[i.CREATED = 1] = "CREATED", i[i.FAILED = 2] = "FAILED", i[i.TIMED_OUT = 3] = "TIMED_OUT";
            let m = (e, t) => {
                var n;
                let i = null == t ? void 0 : t.state,
                    l = e.state === T.MessageStates.SENT && S(e.id) < Date.now();
                let u = e.state === T.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : a.default.extractTimestamp(n) + 3e3) < Date.now(),
                    o = (null == t ? void 0 : t.data.interactionType) === s.InteractionTypes.APPLICATION_COMMAND,
                    c = e.isCommandType();
                if (o && i === E.InteractionState.QUEUED || c && e.state === T.MessageStates.SENDING && null != t) return r.SENDING;
                if (o && i === E.InteractionState.CREATED || e.hasFlag(T.MessageFlags.LOADING) && !l) return r.CREATED;
                if (null != e.interaction && e.hasFlag(T.MessageFlags.LOADING) && l) return r.TIMED_OUT;
                else if (null != e.interaction && !e.hasFlag(T.MessageFlags.LOADING) && u) return r.TIMED_OUT;
                else if (c && e.state === T.MessageStates.SEND_FAILED) return r.FAILED
            };

            function h(e) {
                var t;
                let n = e.options;
                for (;
                    (null === (t = n) || void 0 === t ? void 0 : t.length) === 1 && (n[0].type === s.ApplicationCommandOptionType.SUB_COMMAND_GROUP || n[0].type === s.ApplicationCommandOptionType.SUB_COMMAND);) n = n[0].options;
                for (let e of null != n ? n : [])
                    if (e.type === s.ApplicationCommandOptionType.ATTACHMENT) return !1;
                return !0
            }
        },
        606981: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFirstSkemaError: function() {
                    return r
                }
            });
            let i = "_errors";

            function r(e) {
                return function e(t, n) {
                    let r = t[i];
                    if (null != r && Array.isArray(r)) return r[0];
                    for (let [r, a] of Object.entries(t))
                        if (r !== i && null != a && "object" == typeof a) return e(a, null != n ? n : r);
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
            var i = n("37983"),
                r = n("884691"),
                a = n("446674"),
                l = n("834897"),
                u = n("90592"),
                o = n("333955"),
                s = n("547356"),
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
                } = (0, d.usePaymentContext)(), C = (0, l.default)(_.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), m = (0, u.isApplicationUserSubscription)(n.sku_flags), h = (0, a.useStateFromStores)([c.default], () => c.default.getGuild(null == p ? void 0 : p.guild_id)), A = r.useCallback(() => S(f.Step.REVIEW), [S]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(E.PaymentPortalBody, {
                        children: C ? (0, i.jsx)(s.BenefitsConfirmationLite, {
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
                        }) : (0, i.jsx)(o.BenefitsConfirmation, {
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
                    }), !C && (0, i.jsx)(E.PaymentPortalFooter, {
                        children: (0, i.jsx)(I.default, {
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
            });
            var i = n("37983"),
                r = n("884691"),
                a = n("627445"),
                l = n.n(a),
                u = n("252438"),
                o = n("834897"),
                s = n("206230"),
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
                        onSubscriptionConfirmation: O
                    } = e,
                    {
                        selectedPlan: L,
                        selectedSkuId: P,
                        step: R,
                        updatedSubscription: g,
                        readySlideId: v
                    } = (0, E.usePaymentContext)();
                l(null != L, "Expected plan to selected"), l(null != P, "Expected selectedSkuId"), l(null != R, "Step should be set");
                let M = (0, o.default)(p.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
                    {
                        createMultipleConfettiAt: D
                    } = r.useContext(I.ConfettiCannonContext),
                    y = () => {
                        A(), null == O || O()
                    },
                    U = v === _.Step.CONFIRM,
                    b = (0, c.isApplicationUserSubscription)(h.sku_flags),
                    x = r.useMemo(() => {
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
                if (a) {
                    if (M) t = (0, i.jsx)(f.BenefitsConfirmationLite, {
                        title: C.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({
                            tierName: h.name
                        }),
                        subtitle: x.length > 0 ? C.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
                            benefits: new Intl.ListFormat(C.default.getLocale()).format(x)
                        }) : null,
                        onConfirm: y,
                        confirmCta: C.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
                    });
                    else t = (0, i.jsx)(d.BenefitsConfirmation, {
                        listing: h,
                        application: m,
                        title: C.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({
                            tier: h.name
                        }),
                        subtitle: C.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
                        description: b ? C.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
                            applicationName: null == m ? void 0 : m.name
                        }) : C.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
                            tier: h.name
                        })
                    }), n = (0, i.jsx)(T.default, {
                        onPrimary: y,
                        primaryCTA: T.CTAType.CONTINUE,
                        primaryText: C.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                    })
                } else t = M ? (0, i.jsx)(f.PurchaseConfirmationLite, {
                    listing: h,
                    onConfirm: y,
                    subscription: g
                }) : (0, i.jsx)(d.PurchaseConfirmation, {
                    listing: h,
                    onConfirm: y,
                    subscription: g
                });
                return r.useEffect(() => {
                    s.default.useReducedMotion && U && D(window.innerWidth / 2, window.innerHeight / 2)
                }, [D, U]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(S.PaymentPortalBody, {
                        children: [(0, i.jsx)(N.default, {}), t]
                    }), null != n && (0, i.jsx)(S.PaymentPortalFooter, {
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
            var i = n("37983");
            n("884691");
            var r = n("85336"),
                a = n("262683"),
                l = n("946359"),
                u = n("724269"),
                o = n("559362"),
                s = n("671672"),
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
                    renderStep: e => (0, i.jsx)(c.default, {
                        initialStep: _ ? r.Step.BENEFITS : r.Step.REVIEW,
                        guildId: t,
                        ...e
                    })
                }, {
                    key: r.Step.BENEFITS,
                    renderStep: e => (0, i.jsx)(o.default, {
                        application: I,
                        listing: E,
                        ...e
                    }),
                    options: {
                        useBreadcrumbLabel: () => f.default.Messages.APPLICATION_SUBSCRIPTION_BILLING_STEP_SUBSCRIPTION_DETAILS
                    }
                }, {
                    key: r.Step.ADD_PAYMENT_STEPS,
                    renderStep: e => (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(a.PaymentModalAddPaymentStep, {
                            ...e,
                            breadcrumbSteps: [r.Step.ADD_PAYMENT_STEPS, r.Step.REVIEW, r.Step.CONFIRM]
                        })
                    }),
                    options: {
                        renderHeader: !0
                    }
                }, {
                    key: r.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: () => (0, i.jsx)(u.default, {})
                }, {
                    key: r.Step.AWAITING_AUTHENTICATION,
                    renderStep: () => (0, i.jsx)(l.default, {})
                }, {
                    key: r.Step.REVIEW,
                    renderStep: e => (0, i.jsx)(d.default, {
                        application: I,
                        backButtonEligible: !!_ || void 0,
                        prevStep: _ ? r.Step.BENEFITS : void 0,
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
                    key: r.Step.CONFIRM,
                    renderStep: e => (0, i.jsx)(s.default, {
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
                    return f
                }
            });
            var i = n("37983"),
                r = n("884691"),
                a = n("245187"),
                l = n("10514"),
                u = n("599110"),
                o = n("719923"),
                s = n("642906"),
                c = n("628738"),
                d = n("49111");

            function f(e) {
                let {
                    initialStep: t,
                    initialPlanId: n,
                    guildId: f,
                    setAnalyticsData: I,
                    handleClose: E
                } = e, {
                    blockedPayments: _,
                    setStep: T,
                    hasFetchedSubscriptions: S,
                    hasFetchedSubscriptionPlans: N,
                    currencyLoading: p,
                    selectedSkuId: C,
                    setSelectedSkuId: m,
                    setSelectedPlanId: h,
                    priceOptions: A,
                    isGift: O,
                    setSubscriptionMetadataRequest: L
                } = (0, s.usePaymentContext)(), [P, R] = r.useState(!S || !N || p);
                return (r.useEffect(() => {
                    R(!S || !N || p)
                }, [p, N, S]), r.useEffect(() => {
                    null != f && L({
                        guild_id: f
                    })
                }, [f, L]), r.useEffect(() => {
                    h(n);
                    let e = null != n ? l.default.get(n) : null;
                    if (!P && !_ && (I(t => {
                            let n = null != e ? (0, o.getPrice)(e.id, !1, O, A) : void 0,
                                i = {
                                    ...t,
                                    subscription_plan_id: null == e ? void 0 : e.id,
                                    price: null == n ? void 0 : n.amount,
                                    regular_price: null == e ? void 0 : e.price,
                                    currency: A.currency
                                };
                            return u.default.track(d.AnalyticEvents.PAYMENT_FLOW_STARTED, i), i
                        }), null != e)) m(null == e ? void 0 : e.skuId), T(t)
                }, [_, n, O, P, A, C, I, h, m, T, t]), P) ? (0, i.jsx)(c.default, {}) : _ ? (0, i.jsx)(a.BlockedPaymentsContentModal, {
                    onClose: E
                }) : null
            }
        },
        458985: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983"),
                r = n("884691"),
                a = n("627445"),
                l = n.n(a),
                u = n("77078"),
                o = n("612039"),
                s = n("90592"),
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
                    trialFooterMessageOverride: O,
                    reviewWarningMessage: L,
                    planGroup: P,
                    openInvoiceId: R,
                    analyticsData: g,
                    analyticsLocation: v,
                    eligibleApplicationSubscriptionGuilds: M,
                    listing: D
                } = e, {
                    activeSubscription: y,
                    setUpdatedSubscription: U,
                    contextMetadata: b,
                    currencies: x,
                    isGift: G,
                    paymentSources: B,
                    priceOptions: F,
                    purchaseError: H,
                    purchaseTokenAuthState: w,
                    selectedPlan: j,
                    setCurrency: V,
                    setPaymentSourceId: k,
                    setPurchaseState: Y,
                    setPurchaseError: K,
                    step: W,
                    purchaseState: Z,
                    subscriptionMetadataRequest: z,
                    setSubscriptionMetadataRequest: Q,
                    selectedGiftStyle: X,
                    setHasAcceptedTerms: q
                } = (0, f.usePaymentContext)();
                l(null != j, "Expected plan to be selected"), l(null != W, "Step should be set");
                let J = r.useRef(null),
                    [$, ee] = (0, o.default)(!1, 500),
                    [et, en] = r.useState(null == z ? void 0 : z.guild_id),
                    ei = (0, s.isApplicationUserSubscription)(D.sku_flags);
                r.useEffect(() => {
                    null != H && null != J.current && J.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }, [H]);
                let er = r.useCallback(e => {
                        U(e), A(I.Step.CONFIRM)
                    }, [A, U]),
                    ea = r.useCallback(e => {
                        en(e), Q({
                            ...z,
                            guild_id: e
                        })
                    }, [en, Q, z]),
                    el = r.useRef(null);
                return Z === E.PurchaseState.PURCHASING ? (0, i.jsx)(T.default, {}) : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(_.default, {
                        className: m.breadcrumbs
                    }), (0, i.jsxs)(S.PaymentPortalBody, {
                        children: [(0, i.jsx)(N.default, {}), ei && (0, i.jsxs)("div", {
                            className: m.userSubscriptionDetailsContainer,
                            children: [(0, i.jsx)(u.Text, {
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: C.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
                            }), (0, i.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "interactive-normal",
                                children: C.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({
                                    applicationName: t.name
                                })
                            })]
                        }), h && !ei && (0, i.jsxs)("div", {
                            className: m.guildPickerContainer,
                            children: [(0, i.jsx)(u.FormTitle, {
                                tag: u.FormTitleTags.H5,
                                children: C.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
                            }), (0, i.jsx)(u.FormText, {
                                type: u.FormText.Types.DESCRIPTION,
                                className: m.guildPickerDescription,
                                children: C.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
                            }), (0, i.jsx)(p.GuildPickerDropdown, {
                                selectedGuildId: et,
                                onGuildChange: ea,
                                eligibleApplicationSubscriptionGuilds: M
                            })]
                        }), (0, i.jsx)(c.default, {
                            selectedPlanId: j.id,
                            isGift: G,
                            paymentSources: B,
                            onPaymentSourceChange: e => k(null != e ? e.id : null),
                            priceOptions: F,
                            currencies: x,
                            onCurrencyChange: e => V(e),
                            handlePaymentSourceAdd: () => A(I.Step.ADD_PAYMENT_STEPS),
                            setHasAcceptedTerms: q,
                            legalTermsNodeRef: el,
                            hasLegalTermsFlash: $,
                            trialFooterMessageOverride: O,
                            reviewWarningMessage: L,
                            metadata: h || ei ? void 0 : z,
                            purchaseState: Z,
                            hideSubscriptionDetails: !0
                        })]
                    }), (0, i.jsx)(S.PaymentPortalFooter, {
                        children: (0, i.jsx)(d.default, {
                            premiumSubscription: null != y ? y : null,
                            setPurchaseState: Y,
                            onBack: () => null != a && A(a),
                            onNext: er,
                            onPurchaseError: e => K(e),
                            legalTermsNodeRef: el,
                            flashLegalTerms: () => ee(!0),
                            analyticsLocation: v,
                            baseAnalyticsData: g,
                            flowStartTime: b.startTime,
                            isGift: G,
                            giftStyle: X,
                            planGroup: P,
                            purchaseTokenAuthState: w,
                            openInvoiceId: R,
                            metadata: ei ? void 0 : z,
                            backButtonEligible: n,
                            invoiceError: null,
                            disablePurchase: (null == z ? void 0 : z.guild_id) == null && !ei
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
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("782340"),
                l = n("336859");

            function u(e) {
                let {
                    selectedGuildId: t,
                    onGuildChange: n,
                    eligibleApplicationSubscriptionGuilds: u
                } = e, o = u.map(e => ({
                    value: e.id,
                    label: e.name
                }));
                return (0, i.jsx)(r.SearchableSelect, {
                    className: l.select,
                    maxVisibleItems: 5,
                    value: t,
                    placeholder: a.default.Messages.APPLICATION_SUBSCRIPTION_GUILD_PICKER_PLACEHOLDER,
                    options: o,
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
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("840339");

            function l() {
                return (0, i.jsx)(r.Spinner, {
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
            var i = n("719923"),
                r = n("646718");

            function a(e) {
                let {
                    isTrial: t,
                    isGift: n,
                    selectedSkuId: i,
                    startedPaymentFlowWithPaymentSources: a
                } = e;
                return !t && !n && null != i && r.ACTIVE_PREMIUM_SKUS.includes(i) && a
            }

            function l(e, t, n) {
                let i = !1;
                if (e && null != t) {
                    let e = t.invoiceItems.find(e => e.subscriptionPlanId === n.id);
                    null == e && (i = !0)
                }
                return i
            }

            function u(e, t, n) {
                let a = null != t ? (0, i.getPremiumPlanItem)(t) : null,
                    l = r.PREMIUM_SKU_TO_YEARLY_PLAN[e],
                    u = null != n ? n : l;
                return null != a ? u === a.planId && u === r.PREMIUM_SKU_TO_MONTHLY_PLAN[e] ? u = r.PREMIUM_SKU_TO_YEARLY_PLAN[e] : u === a.planId && u === r.PREMIUM_SKU_TO_YEARLY_PLAN[e] ? u = r.PREMIUM_SKU_TO_MONTHLY_PLAN[e] : (a.planId === r.SubscriptionPlans.PREMIUM_YEAR_TIER_0 || a.planId === r.SubscriptionPlans.PREMIUM_YEAR_TIER_1) && u === r.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && (u = r.SubscriptionPlans.PREMIUM_YEAR_TIER_2) : u === r.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && (u = r.SubscriptionPlans.PREMIUM_MONTH_TIER_1), u
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("65597"),
                a = n("880731");

            function l(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, l = (0, r.default)([a.default], () => a.default.isEnabled({
                    confettiLocation: n
                }));
                return l ? (0, i.jsx)(i.Fragment, {
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
            var i = n("884691"),
                r = n("65597"),
                a = n("526887"),
                l = n("880731");

            function u() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(a.ConfettiCannonContext), t = (0, r.default)([l.default], () => l.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), u = i.useMemo(() => ({
                    fire: (i, r, a) => {
                        var l, u;
                        let o = (null == a ? void 0 : a.settings) != null ? {
                                ...t,
                                ...a.settings
                            } : t,
                            s = n(o);
                        e(i, r, s, (null !== (l = null == a ? void 0 : a.count) && void 0 !== l ? l : o.confettiCount) * (null !== (u = null == a ? void 0 : a.countMultiplier) && void 0 !== u ? u : 1), {
                            sprite: null == a ? void 0 : a.sprite
                        })
                    }
                }), [e, n, t]);
                return u
            }
        },
        210721: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnimationState: function() {
                    return r
                },
                getGiftAnimationData: function() {
                    return I
                },
                sendGiftMessage: function() {
                    return E
                }
            });
            var i, r, a = n("627445"),
                l = n.n(a),
                u = n("450911"),
                o = n("819689"),
                s = n("884351"),
                c = n("42203"),
                d = n("659632"),
                f = n("78345");
            (i = r || (r = {})).ACTION = "action", i.LOOP = "loop", i.IDLE = "idle";
            let I = (e, t) => {
                    let i;
                    switch (e) {
                        case f.PremiumGiftStyles.SNOWGLOBE:
                            i = () => n.el("452661").then(n.t.bind(n, "452661", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.BOX:
                            i = () => n.el("726871").then(n.t.bind(n, "726871", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.CUP:
                            i = () => n.el("544929").then(n.t.bind(n, "544929", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.STANDARD_BOX:
                            switch (t) {
                                case r.IDLE:
                                    i = () => n.el("973372").then(n.t.bind(n, "973372", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case r.LOOP:
                                    i = () => n.el("353540").then(n.t.bind(n, "353540", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("303473").then(n.t.bind(n, "303473", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.CAKE:
                            switch (t) {
                                case r.IDLE:
                                    i = () => n.el("127891").then(n.t.bind(n, "127891", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case r.LOOP:
                                    i = () => n.el("953820").then(n.t.bind(n, "953820", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("311972").then(n.t.bind(n, "311972", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.CHEST:
                            switch (t) {
                                case r.IDLE:
                                    i = () => n.el("269055").then(n.t.bind(n, "269055", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case r.LOOP:
                                    i = () => n.el("120467").then(n.t.bind(n, "120467", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("451680").then(n.t.bind(n, "451680", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.COFFEE:
                            switch (t) {
                                case r.IDLE:
                                    i = () => n.el("863089").then(n.t.bind(n, "863089", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case r.LOOP:
                                    i = () => n.el("949233").then(n.t.bind(n, "949233", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("361896").then(n.t.bind(n, "361896", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        default:
                            i = () => Promise.resolve("Error: Invalid giftStyle")
                    }
                    return i
                },
                E = async (e, t) => {
                    if (null == t) throw Error("giftCode must be defined");
                    if (null == e) throw Error("Recipient must be defined");
                    let n = await u.default.openPrivateChannel(e.id).then(e => {
                            let t = c.default.getChannel(e);
                            if (l(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                            return t
                        }),
                        i = (0, d.getGiftCodeURL)(t);
                    return o.default.sendMessage(n.id, s.default.parse(n, i), void 0, {
                        isGiftLinkSentOnBehalfOfUser: !0
                    })
                }
        },
        53253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsSeasonalGiftingActive: function() {
                    return d
                },
                default: function() {
                    return f
                }
            });
            var i = n("884691"),
                r = n("866227"),
                a = n.n(r),
                l = n("862337"),
                u = n("296892");
            let o = new Date("2023-01-01T07:59:59.000Z"),
                s = a(o),
                c = (0, u.default)({
                    id: "2022-12_seasonal_gifting",
                    label: "Seasonal Gifting",
                    kind: "user",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function d() {
                let [e, t] = i.useState(() => s.isAfter(Date.now()));
                return i.useEffect(() => {
                    let n = new l.Timeout,
                        i = () => {
                            let e = s.diff(Date.now(), "millisecond");
                            null == n || n.start(e, () => {
                                s.isBefore(Date.now()) ? t(!1) : i()
                            })
                        };
                    return e && i(), () => n.stop()
                }), e
            }
            var f = c
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
            var i = n("884691"),
                r = n("65597"),
                a = n("872717"),
                l = n("913144"),
                u = n("775433"),
                o = n("697218"),
                s = n("10514"),
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
                }), i = d.default.shouldFetchPremiumLikelihood(), r = o.default.getCurrentUser();
                N(r, i, t, n)
            }

            function S(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), a = (0, r.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), l = (0, r.default)([o.default], () => o.default.getCurrentUser());
                i.useEffect(() => {
                    N(l, a, t, n)
                }, [l, a, t, n])
            }

            function N(e, t, n, i) {
                null != e && !(0, c.isPremium)(e) && n && (t && _(), i && (!s.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !s.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, u.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !s.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !s.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, u.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                r = n("913144");
            let a = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                l = a;
            class u extends i.default.Store {
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
            var o = new u(r.default, {
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
            var i = n("862205");
            let r = (0, i.createExperiment)({
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
            var a = r
        },
        166960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
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
            var a = r
        },
        1607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
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
            var a = r
        },
        65324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                a = n("446674"),
                l = n("206230"),
                u = n("491605"),
                o = n("210721"),
                s = n("78345");

            function c(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: c = !0,
                    defaultAnimationState: d,
                    idleAnimationState: f
                } = e, I = (0, a.useStateFromStores)([l.default], () => l.default.useReducedMotion), [E, _] = r.useState(d), T = r.useRef((0, o.getGiftAnimationData)(t, E)), [S, N] = r.useState(null == f), [p, C] = r.useState(!1), [m, h] = r.useState(-1), A = () => {
                    T.current = (0, o.getGiftAnimationData)(t, E), h(e => e + 1)
                }, O = () => {
                    N(!1), C(!0), h(-1), _(d)
                };
                r.useEffect(() => {
                    null == f && _(d)
                }, [f, d]), r.useEffect(() => {
                    if (null != f && m >= 0) {
                        O();
                        return
                    }
                    A()
                }, [t, f]), r.useEffect(() => {
                    (!p || null == f) && A()
                }, [E]), r.useEffect(() => {
                    p && (N(null == f), C(!1), A())
                }, [p]);
                if (!s.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, i.jsx)(u.default, {
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
            var i = n("884691"),
                r = n("446674"),
                a = n("404118"),
                l = n("10514"),
                u = n("437712"),
                o = n("719923"),
                s = n("843455"),
                c = n("782340");

            function d(e, t, n) {
                i.useEffect(() => {
                    null != e && e.isPurchasedExternally && null != e.paymentGateway && !n && (a.default.show({
                        title: c.default.Messages.BILLING_EXTERNAL_HEADER.format({
                            paymentGatewayName: s.PaymentGatewayToFriendlyName[e.paymentGateway]
                        }),
                        body: c.default.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                            paymentGatewayName: s.PaymentGatewayToFriendlyName[e.paymentGateway],
                            subscriptionManagementLink: (0, o.getExternalSubscriptionMethodUrl)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                        }),
                        confirmText: c.default.Messages.OKAY
                    }), t())
                }, [e])
            }
            let f = [];

            function I(e, t) {
                let n = (0, r.useStateFromStores)([l.default], () => null != e ? l.default.get(e) : null),
                    a = (0, r.useStateFromStores)([u.default], () => {
                        var e;
                        return null != n && null !== (e = u.default.getForSku(n.skuId)) && void 0 !== e ? e : f
                    }),
                    s = i.useMemo(() => Array.from(a).filter(e => {
                        let {
                            parentId: t,
                            consumed: n
                        } = e;
                        return null != t && !n
                    }), [a]),
                    c = !t && null != n && null != s && s.length >= o.default.getIntervalMonths(n.interval, n.intervalCount);
                return {
                    hasEntitlements: c,
                    entitlements: s
                }
            }
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                r = n("79112"),
                a = n("685665"),
                l = n("929423");
            n("424562");
            var u = n("49111"),
                o = n("397336");

            function s(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: c,
                    openWithoutBackstack: d = !1
                } = e, {
                    analyticsLocations: f
                } = (0, a.default)(), I = (0, i.useCallback)(() => {
                    null != t && (0, l.initGuildIdentitySettings)(t, null != c ? c : f), r.default.open(u.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? o.ProfileCustomizationSubsection.GUILD : o.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: s,
                        analyticsLocations: c,
                        openWithoutBackstack: d
                    })
                }, [t, n, s, c, d, f]);
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
                    return O
                },
                closeAndClearThreadSidebar: function() {
                    return L
                }
            });
            var i = n("627445"),
                r = n.n(i),
                a = n("917351"),
                l = n.n(a),
                u = n("913144"),
                o = n("295426"),
                s = n("244201"),
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
                s.MainWindowDispatch.dispatch(C.ComponentActions.POPOUT_CLOSE);
                let i = !l.isEmpty(S.default.getVoiceStatesForChannel(e.id));
                if (t || !E.UseThreadSidebar.getSetting() || __OVERLAY__ || i) {
                    u.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, I.transitionToThread)(e, n) : (0, I.transitionToChannel)(e.id);
                    return
                }
                r(null != e.parent_id, "all threads must have parents");
                let a = T.default.getChannelId();
                e.parent_id !== a && !(0, m.isGuildHomeChannel)(a) && (0, I.transitionToChannel)(e.parent_id), (0, f.transitionTo)(C.Routes.CHANNEL_THREAD_VIEW((0, d.getGuildIdForGenericRedirect)(e), (0, m.isGuildHomeChannel)(a) ? m.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? p.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    N.ComponentDispatch.dispatch(C.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function A(e, t, n) {
                r(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), r(!__OVERLAY__, "Cannot create threads in the overlay."), (0, c.trackWithMetadata)(C.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), s.MainWindowDispatch.dispatch(C.ComponentActions.POPOUT_CLOSE), T.default.getChannelId() !== e.id && (0, I.transitionToChannel)(e.id);
                let i = _.default.getDraft(e.id, _.DraftType.FirstThreadMessage);
                if ("" === i) {
                    let t = _.default.getDraft(e.id, _.DraftType.ChannelMessage);
                    o.default.saveDraft(e.id, "", _.DraftType.ChannelMessage), o.default.saveDraft(e.id, t, _.DraftType.FirstThreadMessage)
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

            function O(e, t) {
                (0, f.transitionTo)(C.Routes.CHANNEL(e, (0, m.isGuildHomeChannel)(t) ? m.StaticChannelRoute.GUILD_HOME : t)), u.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function L(e) {
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
            var i = n("913144"),
                r = n("327037"),
                a = n("462274"),
                l = n("535013"),
                u = n("42203"),
                o = n("26989"),
                s = n("713135"),
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
                    guildMember: o.default.getMember(p, e),
                    channel: u.default.getChannel(C)
                })) || void 0 === n ? void 0 : n.id) && void 0 !== d ? d : void 0);
                let m = s.default.getUserProfile(e),
                    h = s.default.getMutualGuilds(e),
                    A = s.default.getMutualFriendsCount(e),
                    O = s.default.isFetchingProfile(e),
                    L = (null == m ? void 0 : m.profileFetchFailed) || !O && (!Array.isArray(h) && E || null == A && _),
                    P = S ? c.default : void 0,
                    R = !1;
                if (null != p) {
                    let t = s.default.getGuildMemberProfile(e, p);
                    R = null == t
                }
                if (!L && !R && (O || Date.now() - (null !== (f = null == m ? void 0 : m.lastFetched) && void 0 !== f ? f : 0) < 6e4)) return Promise.resolve();
                N ? await i.default.wait(() => (0, r.fetchProfile)(e, {
                    withMutualGuilds: E,
                    withMutualFriendsCount: _,
                    friendToken: T,
                    guildId: p,
                    connectionsRoleId: I
                }, P)) : await (0, r.fetchProfile)(e, {
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
            var i = n("845579"),
                r = n("217513");

            function a(e, t) {
                if ("undefined" == typeof Image) return;
                let n = (0, r.getDisplayProfile)(e.user.id, t);
                if (null == n) return;
                let a = i.GifAutoPlay.getSetting(),
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
            var i = n("446674"),
                r = n("95410"),
                a = n("913144"),
                l = n("49111");
            let u = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                o = u,
                s = "LAST_VIEWED_PATH";
            class c extends i.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
                    o = null != e ? e : u
                }
                get defaultRoute() {
                    return l.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = o.lastViewedNonVoicePath) && void 0 !== e ? e : l.Routes.ME
                }
                get fallbackRoute() {
                    return l.Routes.ME
                }
                getState() {
                    return o
                }
            }
            c.displayName = "DefaultRouteStore", c.persistKey = "DefaultRouteStore", c.migrations = [() => {
                let e = r.default.get(s, null);
                return r.default.remove(s), {
                    lastViewedPath: e
                }
            }];
            var d = new c(a.default, {
                SAVE_LAST_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return o.lastViewedPath = t, !0
                },
                SAVE_LAST_NON_VOICE_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return o.lastViewedNonVoicePath = t, !0
                }
            })
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983"),
                r = n("884691"),
                a = n("77078"),
                l = n("393414"),
                u = n("49111"),
                o = r.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: o,
                        onClick: s,
                        onKeyPress: c,
                        focusProps: d,
                        ...f
                    } = e, I = r.useCallback(e => {
                        !e.repeat && ((e.charCode === u.KeyboardKeys.SPACE || e.charCode === u.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, l.transitionTo)(n), null == s || s()), null == c || c(e))
                    }, [n, c, s]), E = r.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, l.transitionTo)(n), null == s || s())
                    }, [n, s]), _ = (0, i.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: E,
                        onKeyPress: I,
                        ...f,
                        children: o
                    });
                    return (0, i.jsx)(a.FocusRing, {
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
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                l = n("79798"),
                u = n("988268"),
                o = n("888770"),
                s = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: r,
                        nameColor: u,
                        className: s,
                        botType: c,
                        usernameClass: d,
                        discriminatorClass: f,
                        botClass: I,
                        botVerified: E = !1,
                        style: _,
                        useRemSizes: T = !1,
                        usernameIcon: S
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: a(s, o.nameTag),
                        style: _,
                        children: [(0, i.jsxs)("span", {
                            className: a(o.username, d),
                            style: null != u ? {
                                color: u
                            } : void 0,
                            children: [S, t]
                        }), null != n ? (0, i.jsxs)("span", {
                            className: null != f ? f : void 0,
                            children: ["#", n]
                        }) : null, null != c ? (0, i.jsx)(l.default, {
                            type: c,
                            invertColor: r,
                            className: a(I, o.bot),
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
                    return r
                }
            });
            var i = n("37983");

            function r(e) {
                let {
                    size: t,
                    horizontal: n = !1
                } = e, r = n ? t : 1, a = n ? 1 : t;
                return (0, i.jsx)("span", {
                    style: {
                        display: "block",
                        width: r,
                        minWidth: r,
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
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("926001"),
                l = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: a,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, a.SlashBoxIcon)
        },
        346955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("509317"),
                l = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: a,
                            d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"
                        })
                    })
                }, a.FolderIcon)
        },
        474571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("197801"),
                l = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return 16 === t || 16 === n ? (0, i.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, i.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, a.SettingsIcon)
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("578478"),
                l = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: a,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: r
                        })
                    })
                }, a.ImageIcon)
        },
        987772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("504318"),
                l = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: a,
                            fill: r
                        })
                    })
                }, a.PencilIcon)
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("424823"),
                l = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: a,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, a.PlusSmallIcon)
        },
        351825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("31745"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        className: a,
                        foreground: l
                    } = e;
                    return (0, i.jsx)("svg", {
                        className: a,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, a.CirclePlusIcon)
        },
        659186: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatLayerContainer: function() {
                    return u
                },
                ChatLayerProvider: function() {
                    return o
                },
                default: function() {
                    return s
                }
            });
            var i = n("228256");
            let {
                Layer: r,
                LayerContainer: a,
                LayerProvider: l
            } = (0, i.createLayer)("Chat"), u = a, o = l;
            var s = r
        },
        252438: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                SKUBenefitTypes: function() {
                    return i
                }
            }), (r = i || (i = {}))[r.INTANGIBLE = 1] = "INTANGIBLE", r[r.APPLICATION_PREMIUM_COMMAND = 2] = "APPLICATION_PREMIUM_COMMAND"
        }
    }
]);
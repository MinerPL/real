(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["81919"], {
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
                    return l
                },
                unsubscribeMembers: function() {
                    return a
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

            function l(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function a(e, t) {
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
                    height: l,
                    rowHeight: a
                } = e;

                function o(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / a)) + t)
                }
                let s = [];

                function d(e) {
                    let t = e + (r.MINIMUM_RANGE - 1);
                    return s.push([e, t]), t + 1
                }
                let c = o(.5 * l),
                    f = o(i, -c),
                    E = o(i + l, c);
                for (f > 0 && (f = Math.max(d(0), f)), f = Math.floor(f / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; f <= E;) f = d(f);
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
                l = n.n(r),
                a = n("446674"),
                u = n("77078"),
                o = n("102985"),
                s = n("79798"),
                d = n("754474"),
                c = n("158998"),
                f = n("782340"),
                E = n("892802");

            function I(e) {
                if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return d.BotTypes.AI;
                if (e.bot) return d.BotTypes.BOT;
                return null
            }
            let _ = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: r,
                    botVerified: a,
                    discriminatorClass: o,
                    className: d,
                    usernameClass: c,
                    color: I,
                    botClass: _,
                    showStreamerModeTooltip: T
                } = e;
                return (0, i.jsxs)("div", {
                    className: l(E.info, d),
                    children: [(0, i.jsx)(u.Tooltip, {
                        text: f.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: T,
                        children: e => (0, i.jsx)("span", {
                            ...e,
                            className: l(E.username, c),
                            style: null != I ? {
                                color: I
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, i.jsx)("span", {
                        className: l(E.infoSpacing, o),
                        children: n
                    }) : void 0, null != r && (0, i.jsx)(s.default, {
                        type: r,
                        className: l(E.infoSpacing, _),
                        verified: a
                    })]
                })
            };
            var T = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: r,
                    forceUsername: l,
                    showAccountIdentifier: u,
                    overrideDiscriminator: s,
                    forcePomelo: f,
                    ...E
                } = e, T = (0, a.useStateFromStores)([o.default], () => o.default.hidePersonalInformation), S = T || t || n.isNonUserBot(), m = n.toString(), N = c.default.getName(n), p = l ? m : null != r ? r : N, P = n.isPomelo() || f;
                if (P || p !== m) {
                    let e = p === m && P && l ? c.default.getUserTag(n, {
                            forcePomelo: f
                        }) : p,
                        t = u && e !== "@".concat(m) ? c.default.getUserTag(n) : void 0;
                    return (0, i.jsx)(_, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: I(n),
                        showStreamerModeTooltip: T && e !== N,
                        ...E
                    })
                }
                return (0, i.jsx)(d.default, {
                    name: p,
                    botType: I(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: S || p !== m ? null : null != s ? s : n.discriminator,
                    ...E
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return l
                }
            });
            var i = n("884691"),
                r = n("599110");
            let l = () => i.useContext(r.AnalyticsContext)
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
                l = n.n(r);
            n("233736");
            var a = n("666020");

            function u(e) {
                i.useEffect(() => (l.forEach(e, (e, t) => (0, a.subscribeMembers)(t, e)), () => {
                    l.forEach(e, (e, t) => (0, a.unsubscribeMembers)(t, e))
                }), [e])
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
                l = n("724038"),
                a = n("782340"),
                u = n("22019");
            let o = e => {
                let {
                    onConfirm: t,
                    onCancel: n,
                    title: o,
                    subtitle: s,
                    confirmCta: d,
                    showOpenDiscord: c = !0
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
                        children: [c && (0, i.jsx)(r.Button, {
                            fullWidth: !0,
                            onClick: () => (0, l.default)("application_sub_mweb_success_modal"),
                            children: a.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
                        }), (0, i.jsx)(r.Button, {
                            fullWidth: !0,
                            color: r.Button.Colors.PRIMARY,
                            onClick: t,
                            children: d
                        }), null != n && (0, i.jsx)(r.Button, {
                            fullWidth: !0,
                            color: r.Button.Colors.PRIMARY,
                            look: r.Button.Looks.LINK,
                            onClick: n,
                            children: a.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CANCEL_BUTTON
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
                        children: a.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
                            tier: n.name
                        })
                    }), (0, i.jsx)(r.Text, {
                        className: u.confirmationSubtitle,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: a.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
                            timestamp: null == o ? void 0 : o.currentPeriodEnd
                        })
                    }), (0, i.jsxs)("div", {
                        className: u.buttonContainer,
                        children: [(0, i.jsx)(r.Button, {
                            className: u.openDiscordButton,
                            onClick: () => (0, l.default)("application_sub_mweb_success_modal"),
                            children: a.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
                        }), (0, i.jsx)(r.Button, {
                            className: u.doneButton,
                            look: r.Button.Looks.BLANK,
                            onClick: t,
                            children: a.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
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
                l = n("742270"),
                a = n("815157"),
                u = n("391679"),
                o = n("327037"),
                s = n("393414"),
                d = n("271938"),
                c = n("476108"),
                f = n("599110"),
                E = n("65300"),
                I = n("49111");
            async function _(e) {
                var t, n;
                let i = null === (t = r.os) || void 0 === t ? void 0 : t.family;
                if ("Android" === i || "iOS" === i) {
                    let t = null !== (n = d.default.getFingerprint()) && void 0 !== n ? n : d.default.getId(),
                        i = (0, a.generateAttemptId)();
                    if (null == t && d.default.isAuthenticated()) try {
                        await (0, o.fetchCurrentUser)(), t = d.default.getId()
                    } catch {}
                    return (0, a.default)((0, l.getDefaultDynamicLinkTemplate)(), {
                        utmSource: e,
                        fingerprint: t,
                        attemptId: i
                    })
                }
                return "discord://"
            }
            async function T(e) {
                let t = await _(e),
                    n = (0, a.parseDynamicLink)(t);
                null != n && f.default.track(I.AnalyticEvents.DEEP_LINK_CLICKED, {
                    fingerprint: (0, u.maybeExtractId)(n.fingerprint),
                    attempt_id: n.attemptId,
                    source: n.utmSource
                }), E.default.launch(t, e => {
                    !e && (0, s.replaceWith)(c.default.fallbackRoute)
                })
            }
        },
        245187: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BlockedPaymentsContentSettings: function() {
                    return p
                },
                BlockedPaymentsContentModal: function() {
                    return P
                },
                BlockedPaymentsWarning: function() {
                    return C
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                a = n("669491"),
                u = n("819855"),
                o = n("77078"),
                s = n("841098"),
                d = n("145131"),
                c = n("423487"),
                f = n("701909"),
                E = n("619935"),
                I = n("49111"),
                _ = n("782340"),
                T = n("653842"),
                S = n("584503"),
                m = n("45656");

            function N(e) {
                let {
                    className: t
                } = e, n = (0, s.default)(), r = (0, u.isThemeDark)(n) ? S : m;
                return (0, i.jsxs)("div", {
                    className: l(T.container, t),
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
                                helpdeskArticle: f.default.getArticleURL(I.HelpdeskArticles.BLOCKED_PAYMENTS)
                            })
                        })]
                    }), (0, i.jsx)("img", {
                        src: r,
                        className: T.splashImage,
                        alt: "Blocked Payments"
                    })]
                })
            }

            function p() {
                return (0, i.jsx)(N, {
                    className: T.settings
                })
            }

            function P(e) {
                let {
                    onClose: t
                } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(o.ModalHeader, {
                        className: T.blockedPaymentsModalHeader,
                        justify: d.default.Justify.END,
                        children: (0, i.jsx)(o.ModalCloseButton, {
                            onClick: t
                        })
                    }), (0, i.jsx)(o.ModalContent, {
                        className: T.blockedPaymentsModalContent,
                        children: (0, i.jsx)(N, {
                            className: T.modal
                        })
                    })]
                })
            }

            function C(e) {
                let {
                    className: t
                } = e, n = (0, E.useBlockedPaymentsConfig)();
                return n ? (0, i.jsxs)(o.Card, {
                    className: l(T.blockedPaymentsWarning, t),
                    type: o.Card.Types.CUSTOM,
                    children: [(0, i.jsx)(c.default, {
                        className: T.blockedPaymentsWarningIcon,
                        color: a.default.unsafe_rawColors.YELLOW_300.css
                    }), (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: _.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
                            helpdeskArticle: f.default.getArticleURL(I.HelpdeskArticles.BLOCKED_PAYMENTS)
                        })
                    })]
                }) : null
            }
        },
        526887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCannonContext: function() {
                    return d
                },
                ConfettiCannonContextProvider: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("516555"),
                a = n("65597"),
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
                d = r.createContext(s);

            function c(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: o,
                    baseConfig: c,
                    addClickListener: f,
                    removeClickListener: E
                } = e, I = (0, l.useConfettiCannon)(n, o), _ = (0, a.default)([u.default], () => u.default.useReducedMotion), T = r.useMemo(() => _ ? s : {
                    confettiCanvas: n,
                    cannon: I,
                    createConfetti: (e, t) => I.createConfetti({
                        ...c,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, i) => I.createConfetti({
                        ...c,
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
                        return I.createMultipleConfetti({
                            ...c,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            r = arguments.length > 4 ? arguments[4] : void 0;
                        return I.createMultipleConfetti({
                            ...c,
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
                    removeClickListener: E
                }, [f, c, I, n, _, E]);
                return (0, i.jsx)(d.Provider, {
                    value: T,
                    children: t
                })
            }
        },
        172858: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DUCK_CONFETTI_SPRITE: function() {
                    return l
                },
                COMMON_CONFETTI_COLORS: function() {
                    return a
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
                    return d
                }
            });
            var i = n("516555"),
                r = n("839491");
            let l = r,
                a = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                u = [n("890450"), l, n("164654"), n("540346"), n("526094"), n("367469"), n("23933"), {
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
                d = new i.Environment
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("884691");
            let r = i.createContext(void 0);
            var l = r
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return c
                },
                replaceRoleIconSourceSize: function() {
                    return f
                },
                isRoleIconAssetUrl: function() {
                    return I
                },
                canGuildUseRoleIcons: function() {
                    return _
                }
            });
            var i = n("867805"),
                r = n("407063"),
                l = n("315102"),
                a = n("773336"),
                u = n("49111");
            let o = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                s = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                d = (0, a.isAndroid)(),
                c = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: E(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()))),
                E = (e, t) => {
                    let {
                        id: n,
                        icon: i
                    } = e;
                    if (null == i) return;
                    if (i.startsWith("data:")) return i;
                    let a = l.SUPPORTS_WEBP ? "webp" : "png",
                        c = "",
                        f = "quality=lossless";
                    return (null != t && (c = "size=" + (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()), f = d ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(o, "/").concat(n, "/").concat(i, ".").concat(a, "?").concat(c).concat(f) : "".concat(s).concat(u.Endpoints.ROLE_ICON(n, i), "?").concat(c)
                },
                I = e => e.startsWith(o) || e.startsWith("".concat(s, "/roles")) && e.includes("/icons/"),
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
                    return d
                },
                resetAndCloseGuildIdentityForm: function() {
                    return c
                },
                setPendingAvatar: function() {
                    return f
                },
                setPendingBanner: function() {
                    return E
                },
                setPendingBio: function() {
                    return I
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
                    return m
                },
                resetPendingProfileChanges: function() {
                    return N
                },
                resetAllPending: function() {
                    return p
                },
                clearErrors: function() {
                    return P
                },
                setDisableSubmit: function() {
                    return C
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("54239"),
                a = n("49111");
            async function u(e, t) {
                let {
                    nick: n,
                    avatar: l
                } = t;
                if (null == e) throw Error("Need guildId");
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: a.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: l
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

            function d() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, l.popLayer)()
            }

            function c() {
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

            function E(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function I(e) {
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

            function m() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function N() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function p() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function P() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function C(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, r, l, a, u, o, s, d, c;
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var f = n("446674"),
                E = n("913144"),
                I = n("49111");
            let _ = I.FormStates.CLOSED,
                T = {},
                S = !1;

            function m() {
                _ = I.FormStates.CLOSED, T = {}, s = null, d = void 0, c = []
            }

            function N() {
                p(), P(), T = {}, _ = I.FormStates.OPEN
            }

            function p() {
                i = void 0, u = void 0
            }

            function P() {
                r = void 0, l = void 0, a = void 0, o = void 0
            }
            class C extends f.default.Store {
                getFormState() {
                    return _
                }
                getErrors() {
                    return T
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== l || void 0 !== a || void 0 !== u || void 0 !== o
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return r
                }
                getPendingBio() {
                    return l
                }
                getPendingNickname() {
                    return u
                }
                getPendingPronouns() {
                    return a
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
                        pendingBio: l,
                        pendingPronouns: a,
                        pendingNickname: u,
                        pendingThemeColors: o
                    }
                }
                getGuild() {
                    return s
                }
                getSource() {
                    return d
                }
                getAnalyticsLocations() {
                    return c
                }
                getIsDisableSubmit() {
                    return S
                }
            }
            C.displayName = "GuildIdentitySettingsStore";
            var A = new C(E.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    s = e.guild, _ = I.FormStates.OPEN, T = {}, d = e.source, c = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: m,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    N(), m()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    s = e.guild, T = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    _ = I.FormStates.SUBMITTING, T = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (_ !== I.FormStates.SUBMITTING) return !1;
                    _ = I.FormStates.OPEN, T = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    _ = I.FormStates.OPEN, T = e.errors
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
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    a = t
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
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: p,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: P,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: N,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: N,
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
                    return a
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
                l = n("49111");

            function a(e) {
                r.default.track(l.AnalyticEvents.HOTSPOT_HIDDEN, {
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
                    return d
                }
            });
            var i = n("446674"),
                r = n("913144"),
                l = n("197881"),
                a = n("492397");
            let u = new Set,
                o = {};
            class s extends i.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (u = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (o = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && o[e];
                    return !(a.CONFERENCE_MODE_ENABLED || l.ProcessArgs.isDisallowPopupsSet()) && (n || !u.has(e))
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
            var d = new s(r.default, {
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
                    return l.default
                }
            });
            var i = n("533613");
            n.es(i, t);
            var r = n("597517");
            n.es(r, t);
            var l = n("269596")
        },
        274800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                queueInteractionComponentState: function() {
                    return a
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
                l = n("49111");

            function a(e, t, n, i) {
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
                    onCreate: l,
                    onSuccess: a,
                    onFailure: u
                } = t;
                r.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: i,
                    onCreate: l,
                    onSuccess: a,
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
                    url: l.Endpoints.MESSAGE_INTERACTION_DATA(e, t),
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
            var l = n("446674"),
                a = n("913144"),
                u = n("798609"),
                o = n("42203"),
                s = n("3765");
            let d = {},
                c = {},
                f = {};

            function E(e) {
                delete d[e];
                let t = f[e];
                null != t && delete c[t], delete f[e]
            }
            class I extends l.default.Store {
                getInteraction(e) {
                    let t = c[e.id];
                    return null != t ? d[t] : null
                }
                getMessageInteractionStates() {
                    let e = {};
                    for (let [t, n] of Object.entries(d)) {
                        let i = f[t];
                        null != i && (e[i] = n.state)
                    }
                    return e
                }
                canQueueInteraction(e, t) {
                    let n = c[e];
                    return (null == n || null == d[n] || d[n].state === s.InteractionState.FAILED) && (null == d[t] || d[t].state === s.InteractionState.FAILED) && !0
                }
                getIFrameModalApplicationId() {
                    return r
                }
                getIFrameModalKey() {
                    return i
                }
            }
            I.displayName = "InteractionStore";
            var _ = new I(a.default, {
                LOGOUT: function() {
                    d = {}, c = {}, f = {}
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        nonce: t,
                        messageId: n,
                        data: i,
                        onCreate: r,
                        onCancel: l,
                        onSuccess: a,
                        onFailure: u
                    } = e;
                    null != n && (c[n] = t, f[t] = n), d[t] = {
                        state: s.InteractionState.QUEUED,
                        data: i,
                        onCreate: r,
                        onCancel: l,
                        onSuccess: a,
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
                    let r = d[n];
                    if (null == r || r.state !== s.InteractionState.QUEUED) return !1;
                    r.state = s.InteractionState.CREATED, null === (t = r.onCreate) || void 0 === t || t.call(r, i)
                },
                INTERACTION_SUCCESS: function(e) {
                    var t;
                    let {
                        nonce: n
                    } = e;
                    if (null == n) return !1;
                    let i = d[n];
                    if (null == i) return !1;
                    null === (t = i.onSuccess) || void 0 === t || t.call(i), E(n)
                },
                INTERACTION_FAILURE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        errorCode: i,
                        errorMessage: r
                    } = e;
                    if (null == n) return !1;
                    let l = d[n];
                    if (null == l) return !1;
                    null === (t = l.onFailure) || void 0 === t || t.call(l, i, r), l.data.interactionType === u.InteractionTypes.APPLICATION_COMMAND ? E(n) : d[n] = {
                        ...l,
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
                        let e = d[t.nonce];
                        if (null == e) return !1;
                        null === (n = e.onSuccess) || void 0 === n || n.call(e), E(t.nonce)
                    }
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e, n = o.default.getChannel(t);
                    if (null == n) return !1;
                    for (let [e, t] of Object.entries(d)) t.state === s.InteractionState.FAILED && E(e)
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
                    return m
                },
                handleInteractionResponse: function() {
                    return p
                },
                InteractionStatusViewState: function() {
                    return r
                },
                getInteractionStatusViewState: function() {
                    return P
                },
                canRetryInteractionData: function() {
                    return C
                }
            });
            var i, r, l = n("249654"),
                a = n("872717"),
                u = n("913144"),
                o = n("819689"),
                s = n("798609"),
                d = n("263024"),
                c = n("271938"),
                f = n("274800"),
                E = n("809810"),
                I = n("3765"),
                _ = n("606981"),
                T = n("49111");

            function S(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : l.default.extractTimestamp(e) + 9e5
            }
            let m = async e => {
                let {
                    componentType: t,
                    messageId: n,
                    messageFlags: i,
                    customId: r,
                    indices: u,
                    applicationId: o,
                    channelId: I,
                    guildId: _,
                    localState: S
                } = e, m = l.default.fromTimestamp(Date.now());
                if (!E.default.canQueueInteraction(n, m)) return;
                await d.default.unarchiveThreadIfNecessary(I), (0, f.addQueued)(m, {
                    messageId: n,
                    data: {
                        interactionType: s.InteractionTypes.MESSAGE_COMPONENT,
                        customId: r,
                        indices: u
                    },
                    onFailure: (e, t) => N(I, e, t)
                }), null != S && (0, f.queueInteractionComponentState)(n, m, S, u);
                let P = {
                    type: s.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: m,
                    guild_id: _,
                    channel_id: I,
                    message_flags: i,
                    message_id: n,
                    application_id: o,
                    session_id: c.default.getSessionId(),
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
                await a.default.post({
                    url: T.Endpoints.INTERACTIONS,
                    body: P,
                    timeout: 3e3
                }, e => {
                    p(m, I, _, e)
                })
            }, N = (e, t, n) => {
                null == n && null != t && o.default.sendClydeError(e, t)
            }, p = (e, t, n, i) => {
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
            let P = (e, t) => {
                var n;
                let i = null == t ? void 0 : t.state,
                    a = e.state === T.MessageStates.SENT && S(e.id) < Date.now();
                let u = e.state === T.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : l.default.extractTimestamp(n) + 3e3) < Date.now(),
                    o = (null == t ? void 0 : t.data.interactionType) === s.InteractionTypes.APPLICATION_COMMAND,
                    d = e.isCommandType();
                if (o && i === I.InteractionState.QUEUED || d && e.state === T.MessageStates.SENDING && null != t) return r.SENDING;
                if (o && i === I.InteractionState.CREATED || e.hasFlag(T.MessageFlags.LOADING) && !a) return r.CREATED;
                if (null != e.interaction && e.hasFlag(T.MessageFlags.LOADING) && a) return r.TIMED_OUT;
                else if (null != e.interaction && !e.hasFlag(T.MessageFlags.LOADING) && u) return r.TIMED_OUT;
                else if (d && e.state === T.MessageStates.SEND_FAILED) return r.FAILED
            };

            function C(e) {
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
                    for (let [r, l] of Object.entries(t))
                        if (r !== i && null != l && "object" == typeof l) return e(l, null != n ? n : r);
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
                l = n("446674"),
                a = n("834897"),
                u = n("90592"),
                o = n("333955"),
                s = n("547356"),
                d = n("305961"),
                c = n("642906"),
                f = n("85336"),
                E = n("159149"),
                I = n("650484"),
                _ = n("425480"),
                T = n("782340");

            function S(e) {
                let {
                    application: t,
                    listing: n,
                    handleStepChange: S,
                    handleClose: m
                } = e, {
                    subscriptionMetadataRequest: N
                } = (0, c.usePaymentContext)(), p = (0, a.default)(_.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), P = (0, u.isApplicationUserSubscription)(n.sku_flags), C = (0, l.useStateFromStores)([d.default], () => d.default.getGuild(null == N ? void 0 : N.guild_id)), A = r.useCallback(() => S(f.Step.REVIEW), [S]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(I.PaymentPortalBody, {
                        children: p ? (0, i.jsx)(s.BenefitsConfirmationLite, {
                            confirmCta: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
                            onConfirm: A,
                            onCancel: m,
                            title: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({
                                tier: n.name
                            }),
                            subtitle: P ? T.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE : T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({
                                guildName: null == C ? void 0 : C.name
                            }),
                            showOpenDiscord: !1
                        }) : (0, i.jsx)(o.BenefitsConfirmation, {
                            listing: n,
                            application: t,
                            title: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format({
                                tier: n.name
                            }),
                            subtitle: P ? T.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER : T.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
                            description: P ? T.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
                                applicationName: t.name
                            }) : T.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
                        })
                    }), !p && (0, i.jsx)(I.PaymentPortalFooter, {
                        children: (0, i.jsx)(E.default, {
                            onBack: m,
                            backText: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
                            onPrimary: A,
                            primaryCTA: E.CTAType.CONTINUE,
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
                    return P
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("627445"),
                a = n.n(l),
                u = n("252438"),
                o = n("834897"),
                s = n("206230"),
                d = n("90592"),
                c = n("333955"),
                f = n("547356"),
                E = n("526887"),
                I = n("642906"),
                _ = n("85336"),
                T = n("159149"),
                S = n("650484"),
                m = n("367767"),
                N = n("425480"),
                p = n("782340");

            function P(e) {
                let t, n, {
                        showBenefits: l,
                        application: P,
                        listing: C,
                        handleClose: A,
                        onSubscriptionConfirmation: O
                    } = e,
                    {
                        selectedPlan: M,
                        selectedSkuId: R,
                        step: L,
                        updatedSubscription: g,
                        readySlideId: h
                    } = (0, I.usePaymentContext)();
                a(null != M, "Expected plan to selected"), a(null != R, "Expected selectedSkuId"), a(null != L, "Step should be set");
                let U = (0, o.default)(N.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
                    {
                        createMultipleConfettiAt: D
                    } = r.useContext(E.ConfettiCannonContext),
                    v = () => {
                        A(), null == O || O()
                    },
                    y = h === _.Step.CONFIRM,
                    b = (0, d.isApplicationUserSubscription)(C.sku_flags),
                    G = r.useMemo(() => {
                        let e = 0,
                            t = 0;
                        for (let n of C.sku_benefits.benefits) n.ref_type === u.SKUBenefitTypes.APPLICATION_PREMIUM_COMMAND ? e += 1 : n.ref_type === u.SKUBenefitTypes.INTANGIBLE && (t += 1);
                        let n = [];
                        return 0 !== e && n.push(p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EXCLUSIVE_CHANNELS_SUBTITLE.format({
                            commandCount: e
                        })), 0 !== t && n.push(p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
                            benefitCount: t
                        })), n
                    }, [C]);
                if (l) {
                    if (U) t = (0, i.jsx)(f.BenefitsConfirmationLite, {
                        title: p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({
                            tierName: C.name
                        }),
                        subtitle: G.length > 0 ? p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
                            benefits: new Intl.ListFormat(p.default.getLocale()).format(G)
                        }) : null,
                        onConfirm: v,
                        confirmCta: p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
                    });
                    else t = (0, i.jsx)(c.BenefitsConfirmation, {
                        listing: C,
                        application: P,
                        title: p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({
                            tier: C.name
                        }),
                        subtitle: p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
                        description: b ? p.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
                            applicationName: null == P ? void 0 : P.name
                        }) : p.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
                            tier: C.name
                        })
                    }), n = (0, i.jsx)(T.default, {
                        onPrimary: v,
                        primaryCTA: T.CTAType.CONTINUE,
                        primaryText: p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                    })
                } else t = U ? (0, i.jsx)(f.PurchaseConfirmationLite, {
                    listing: C,
                    onConfirm: v,
                    subscription: g
                }) : (0, i.jsx)(c.PurchaseConfirmation, {
                    listing: C,
                    onConfirm: v,
                    subscription: g
                });
                return r.useEffect(() => {
                    s.default.useReducedMotion && y && D(window.innerWidth / 2, window.innerHeight / 2)
                }, [D, y]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(S.PaymentPortalBody, {
                        children: [(0, i.jsx)(m.default, {}), t]
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
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("85336"),
                l = n("262683"),
                a = n("946359"),
                u = n("724269"),
                o = n("559362"),
                s = n("671672"),
                d = n("101432"),
                c = n("458985"),
                f = n("782340");

            function E(e) {
                let {
                    guildId: t,
                    eligibleApplicationSubscriptionGuilds: n,
                    application: E,
                    listing: I,
                    showBenefitsFirst: _
                } = e, T = [{
                    key: null,
                    renderStep: e => (0, i.jsx)(d.default, {
                        initialStep: _ ? r.Step.BENEFITS : r.Step.REVIEW,
                        guildId: t,
                        ...e
                    })
                }, {
                    key: r.Step.BENEFITS,
                    renderStep: e => (0, i.jsx)(o.default, {
                        application: E,
                        listing: I,
                        ...e
                    }),
                    options: {
                        useBreadcrumbLabel: () => f.default.Messages.APPLICATION_SUBSCRIPTION_BILLING_STEP_SUBSCRIPTION_DETAILS
                    }
                }, {
                    key: r.Step.ADD_PAYMENT_STEPS,
                    renderStep: e => (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(l.PaymentModalAddPaymentStep, {
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
                    renderStep: () => (0, i.jsx)(a.default, {})
                }, {
                    key: r.Step.REVIEW,
                    renderStep: e => (0, i.jsx)(c.default, {
                        application: E,
                        backButtonEligible: !!_ || void 0,
                        prevStep: _ ? r.Step.BENEFITS : void 0,
                        listing: I,
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
                        application: E,
                        listing: I,
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
                l = n("245187"),
                a = n("10514"),
                u = n("599110"),
                o = n("719923"),
                s = n("642906"),
                d = n("628738"),
                c = n("49111");

            function f(e) {
                let {
                    initialStep: t,
                    initialPlanId: n,
                    guildId: f,
                    setAnalyticsData: E,
                    handleClose: I
                } = e, {
                    blockedPayments: _,
                    setStep: T,
                    hasFetchedSubscriptions: S,
                    hasFetchedSubscriptionPlans: m,
                    currencyLoading: N,
                    selectedSkuId: p,
                    setSelectedSkuId: P,
                    setSelectedPlanId: C,
                    priceOptions: A,
                    isGift: O,
                    setSubscriptionMetadataRequest: M
                } = (0, s.usePaymentContext)(), [R, L] = r.useState(!S || !m || N);
                return (r.useEffect(() => {
                    L(!S || !m || N)
                }, [N, m, S]), r.useEffect(() => {
                    null != f && M({
                        guild_id: f
                    })
                }, [f, M]), r.useEffect(() => {
                    C(n);
                    let e = null != n ? a.default.get(n) : null;
                    if (!R && !_ && (E(t => {
                            let n = null != e ? (0, o.getPrice)(e.id, !1, O, A) : void 0,
                                i = {
                                    ...t,
                                    subscription_plan_id: null == e ? void 0 : e.id,
                                    price: null == n ? void 0 : n.amount,
                                    regular_price: null == e ? void 0 : e.price,
                                    currency: A.currency
                                };
                            return u.default.track(c.AnalyticEvents.PAYMENT_FLOW_STARTED, i), i
                        }), null != e)) P(null == e ? void 0 : e.skuId), T(t)
                }, [_, n, O, R, A, p, E, C, P, T, t]), R) ? (0, i.jsx)(d.default, {}) : _ ? (0, i.jsx)(l.BlockedPaymentsContentModal, {
                    onClose: I
                }) : null
            }
        },
        458985: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("627445"),
                a = n.n(l),
                u = n("77078"),
                o = n("612039"),
                s = n("90592"),
                d = n("527866"),
                c = n("451516"),
                f = n("642906"),
                E = n("85336"),
                I = n("286350"),
                _ = n("153727"),
                T = n("628738"),
                S = n("650484"),
                m = n("367767"),
                N = n("215774"),
                p = n("782340"),
                P = n("945598");

            function C(e) {
                let {
                    application: t,
                    backButtonEligible: n,
                    prevStep: l,
                    showGuildPicker: C,
                    handleStepChange: A,
                    trialFooterMessageOverride: O,
                    reviewWarningMessage: M,
                    planGroup: R,
                    openInvoiceId: L,
                    analyticsData: g,
                    analyticsLocation: h,
                    eligibleApplicationSubscriptionGuilds: U,
                    listing: D
                } = e, {
                    activeSubscription: v,
                    setUpdatedSubscription: y,
                    contextMetadata: b,
                    currencies: G,
                    isGift: F,
                    paymentSources: B,
                    priceOptions: x,
                    purchaseError: w,
                    purchaseTokenAuthState: H,
                    selectedPlan: k,
                    setCurrency: j,
                    setPaymentSourceId: Y,
                    setPurchaseState: V,
                    setPurchaseError: K,
                    step: W,
                    purchaseState: z,
                    subscriptionMetadataRequest: Q,
                    setSubscriptionMetadataRequest: X,
                    selectedGiftStyle: Z,
                    setHasAcceptedTerms: q
                } = (0, f.usePaymentContext)();
                a(null != k, "Expected plan to be selected"), a(null != W, "Step should be set");
                let J = r.useRef(null),
                    [$, ee] = (0, o.default)(!1, 500),
                    [et, en] = r.useState(null == Q ? void 0 : Q.guild_id),
                    ei = (0, s.isApplicationUserSubscription)(D.sku_flags);
                r.useEffect(() => {
                    null != w && null != J.current && J.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }, [w]);
                let er = r.useCallback(e => {
                        y(e), A(E.Step.CONFIRM)
                    }, [A, y]),
                    el = r.useCallback(e => {
                        en(e), X({
                            ...Q,
                            guild_id: e
                        })
                    }, [en, X, Q]),
                    ea = r.useRef(null);
                return z === I.PurchaseState.PURCHASING ? (0, i.jsx)(T.default, {}) : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(_.default, {
                        className: P.breadcrumbs
                    }), (0, i.jsxs)(S.PaymentPortalBody, {
                        children: [(0, i.jsx)(m.default, {}), ei && (0, i.jsxs)("div", {
                            className: P.userSubscriptionDetailsContainer,
                            children: [(0, i.jsx)(u.Text, {
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: p.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
                            }), (0, i.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "interactive-normal",
                                children: p.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({
                                    applicationName: t.name
                                })
                            })]
                        }), C && !ei && (0, i.jsxs)("div", {
                            className: P.guildPickerContainer,
                            children: [(0, i.jsx)(u.FormTitle, {
                                tag: u.FormTitleTags.H5,
                                children: p.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
                            }), (0, i.jsx)(u.FormText, {
                                type: u.FormText.Types.DESCRIPTION,
                                className: P.guildPickerDescription,
                                children: p.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
                            }), (0, i.jsx)(N.GuildPickerDropdown, {
                                selectedGuildId: et,
                                onGuildChange: el,
                                eligibleApplicationSubscriptionGuilds: U
                            })]
                        }), (0, i.jsx)(d.default, {
                            selectedPlanId: k.id,
                            isGift: F,
                            paymentSources: B,
                            onPaymentSourceChange: e => Y(null != e ? e.id : null),
                            priceOptions: x,
                            currencies: G,
                            onCurrencyChange: e => j(e),
                            handlePaymentSourceAdd: () => A(E.Step.ADD_PAYMENT_STEPS),
                            setHasAcceptedTerms: q,
                            legalTermsNodeRef: ea,
                            hasLegalTermsFlash: $,
                            trialFooterMessageOverride: O,
                            reviewWarningMessage: M,
                            metadata: C || ei ? void 0 : Q,
                            purchaseState: z,
                            hideSubscriptionDetails: !0
                        })]
                    }), (0, i.jsx)(S.PaymentPortalFooter, {
                        children: (0, i.jsx)(c.default, {
                            premiumSubscription: null != v ? v : null,
                            setPurchaseState: V,
                            onBack: () => null != l && A(l),
                            onNext: er,
                            onPurchaseError: e => K(e),
                            legalTermsNodeRef: ea,
                            flashLegalTerms: () => ee(!0),
                            analyticsLocation: h,
                            baseAnalyticsData: g,
                            flowStartTime: b.startTime,
                            isGift: F,
                            giftStyle: Z,
                            planGroup: R,
                            purchaseTokenAuthState: H,
                            openInvoiceId: L,
                            metadata: ei ? void 0 : Q,
                            backButtonEligible: n,
                            invoiceError: null,
                            disablePurchase: (null == Q ? void 0 : Q.guild_id) == null && !ei
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
                l = n("782340"),
                a = n("336859");

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
                    className: a.select,
                    maxVisibleItems: 5,
                    value: t,
                    placeholder: l.default.Messages.APPLICATION_SUBSCRIPTION_GUILD_PICKER_PLACEHOLDER,
                    options: o,
                    onChange: e => {
                        n(e)
                    }
                })
            }
        },
        176108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                inOneStepSubscriptionCheckout: function() {
                    return l
                },
                planSwitchLoadingShowSpinner: function() {
                    return a
                },
                getDefaultPlanOneStepCheckout: function() {
                    return u
                }
            });
            var i = n("719923"),
                r = n("646718");

            function l(e) {
                let {
                    isTrial: t,
                    isGift: n,
                    selectedSkuId: i,
                    startedPaymentFlowWithPaymentSources: l
                } = e;
                return !t && !n && null != i && r.ACTIVE_PREMIUM_SKUS.includes(i) && l
            }

            function a(e, t, n) {
                let i = !1;
                if (e && null != t) {
                    let e = t.invoiceItems.find(e => e.subscriptionPlanId === n.id);
                    null == e && (i = !0)
                }
                return i
            }

            function u(e, t, n) {
                let l = null != t ? (0, i.getPremiumPlanItem)(t) : null,
                    a = r.PREMIUM_SKU_TO_YEARLY_PLAN[e],
                    u = null != n ? n : a;
                return null != l ? u === l.planId && u === r.PREMIUM_SKU_TO_MONTHLY_PLAN[e] ? u = r.PREMIUM_SKU_TO_YEARLY_PLAN[e] : u === l.planId && u === r.PREMIUM_SKU_TO_YEARLY_PLAN[e] ? u = r.PREMIUM_SKU_TO_MONTHLY_PLAN[e] : (l.planId === r.SubscriptionPlans.PREMIUM_YEAR_TIER_0 || l.planId === r.SubscriptionPlans.PREMIUM_YEAR_TIER_1) && u === r.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && (u = r.SubscriptionPlans.PREMIUM_YEAR_TIER_2) : u === r.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && (u = r.SubscriptionPlans.PREMIUM_MONTH_TIER_1), u
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("65597"),
                l = n("880731");

            function a(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, a = (0, r.default)([l.default], () => l.default.isEnabled({
                    confettiLocation: n
                }));
                return a ? (0, i.jsx)(i.Fragment, {
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
                l = n("526887"),
                a = n("880731");

            function u() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(l.ConfettiCannonContext), t = (0, r.default)([a.default], () => a.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), u = i.useMemo(() => ({
                    fire: (i, r, l) => {
                        var a, u;
                        let o = (null == l ? void 0 : l.settings) != null ? {
                                ...t,
                                ...l.settings
                            } : t,
                            s = n(o);
                        e(i, r, s, (null !== (a = null == l ? void 0 : l.count) && void 0 !== a ? a : o.confettiCount) * (null !== (u = null == l ? void 0 : l.countMultiplier) && void 0 !== u ? u : 1), {
                            sprite: null == l ? void 0 : l.sprite
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
                    return E
                },
                sendGiftMessage: function() {
                    return I
                }
            });
            var i, r, l = n("627445"),
                a = n.n(l),
                u = n("450911"),
                o = n("819689"),
                s = n("884351"),
                d = n("42203"),
                c = n("659632"),
                f = n("78345");
            (i = r || (r = {})).ACTION = "action", i.LOOP = "loop", i.IDLE = "idle";
            let E = (e, t) => {
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
                I = async (e, t) => {
                    if (null == t) throw Error("giftCode must be defined");
                    if (null == e) throw Error("Recipient must be defined");
                    let n = await u.default.openPrivateChannel(e.id).then(e => {
                            let t = d.default.getChannel(e);
                            if (a(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                            return t
                        }),
                        i = (0, c.getGiftCodeURL)(t);
                    return o.default.sendMessage(n.id, s.default.parse(n, i), void 0, {
                        isGiftLinkSentOnBehalfOfUser: !0
                    })
                }
        },
        824986: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumTutorialTooltips: function() {
                    return l
                },
                default: function() {
                    return _
                }
            });
            var i, r, l, a = n("446674"),
                u = n("913144"),
                o = n("521012"),
                s = n("565785"),
                d = n("646718");
            (i = l || (l = {})).FILE_UPLOAD = "file_upload", i.STICKER_PICKER = "sticker_picker", i.EMOJI_PICKER = "emoji_picker", i.BOOSTING_FLOW = "boosting_flow";
            let c = {
                isPersistentCoachmarkCollapsed: !1,
                hasFlowStartEventBeenEmitted: {},
                canPlayWowMoment: !1,
                isPersistentHelperHidden: !0,
                isFetchingWowMomentMedia: !1,
                wowMomentWumpusMediaUrl: null,
                wowMomentHelperMediaUrl: null,
                navigatedFromHelper: !1,
                tutorialExpirationTime: null
            };

            function f() {
                c = {
                    isPersistentCoachmarkCollapsed: !1,
                    hasFlowStartEventBeenEmitted: {},
                    canPlayWowMoment: !1,
                    isPersistentHelperHidden: !0,
                    isFetchingWowMomentMedia: !1,
                    wowMomentWumpusMediaUrl: null,
                    wowMomentHelperMediaUrl: null,
                    navigatedFromHelper: !1,
                    tutorialExpirationTime: null
                }
            }

            function E() {
                let e = new Date;
                e.setDate(e.getDate() + 14), c.tutorialExpirationTime = e.getTime()
            }
            class I extends a.default.PersistedStore {
                initialize(e) {
                    null != e && (c = e), c.isPersistentHelperHidden = !1, c.canPlayWowMoment = !1, c.isFetchingWowMomentMedia = !1, c.wowMomentWumpusMediaUrl = null, c.wowMomentHelperMediaUrl = null
                }
                getState() {
                    return c
                }
                get isPersistentCoachmarkCollapsed() {
                    return c.isPersistentCoachmarkCollapsed
                }
                hasFlowStartEventBeenEmitted(e) {
                    return null == c.hasFlowStartEventBeenEmitted[e] && (c.hasFlowStartEventBeenEmitted[e] = !1), c.hasFlowStartEventBeenEmitted[e]
                }
                get canPlayWowMoment() {
                    return c.canPlayWowMoment
                }
                get isPersistentHelperHidden() {
                    return c.isPersistentHelperHidden
                }
                get isFetchingWowMomentMedia() {
                    return c.isFetchingWowMomentMedia
                }
                get wowMomentWumpusMedia() {
                    return c.wowMomentWumpusMediaUrl
                }
                get wowMomentHelperMedia() {
                    return c.wowMomentHelperMediaUrl
                }
                get navigatedFromHelper() {
                    return c.navigatedFromHelper
                }
                get tutorialExpirationTime() {
                    return c.tutorialExpirationTime
                }
            }
            I.displayName = "PremiumTutorialStore", I.persistKey = "PremiumTutorialStore", I.migrations = [e => ({
                ...e,
                hasFlowStartEventBeenEmitted: null !== (r = e.hasFlowStartEventBeenEmitted) && void 0 !== r ? r : {}
            })];
            var _ = new I(u.default, {
                PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE: function() {
                    c.isPersistentCoachmarkCollapsed = !c.isPersistentCoachmarkCollapsed
                },
                UPDATE_HAS_FLOW_START_EVENT_BEEN_EMITTED: function(e) {
                    let {
                        event: t,
                        value: n
                    } = e;
                    c.hasFlowStartEventBeenEmitted[t] = n
                },
                LOGOUT: function() {
                    f()
                },
                RESET_PREMIUM_TUTORIAL_STORE: f,
                PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT: function(e) {
                    let {
                        value: t
                    } = e;
                    c.canPlayWowMoment = t
                },
                PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN: function(e) {
                    let {
                        value: t
                    } = e;
                    c.isPersistentHelperHidden = t
                },
                PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA: function(e) {
                    let {
                        value: t
                    } = e;
                    c.isFetchingWowMomentMedia = t
                },
                PREMIUM_TUTORIAL_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(e) {
                    let {
                        wumpusMedia: t,
                        helperMedia: n
                    } = e;
                    c.wowMomentWumpusMediaUrl = t, c.wowMomentHelperMediaUrl = n, c.isFetchingWowMomentMedia = !1
                },
                PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER: function(e) {
                    let {
                        value: t
                    } = e;
                    c.navigatedFromHelper = t
                },
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function(e) {
                    let {
                        subscription: t
                    } = e, {
                        enabled: n
                    } = s.default.getCurrentConfig({
                        location: "5f2710_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    n && null != t.items.find(e => d.PREMIUM_TIER_2_PLANS.has(e.plan_id)) && E()
                },
                GIFT_CODE_REDEEM_SUCCESS: function(e) {
                    let {
                        entitlement: t
                    } = e, {
                        enabled: n
                    } = s.default.getCurrentConfig({
                        location: "5f2710_2"
                    }, {
                        autoTrackExposure: !1
                    });
                    n && (null == t ? void 0 : t.sku_id) === d.PremiumSubscriptionSKUs.TIER_2 && null == o.default.getPremiumSubscription(!1) && null == c.tutorialExpirationTime && E()
                }
            })
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return I
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
                l = n("872717"),
                a = n("913144"),
                u = n("775433"),
                o = n("697218"),
                s = n("10514"),
                d = n("764364"),
                c = n("676572"),
                f = n("646718"),
                E = n("49111");
            let I = "nonSubscriber";
            async function _() {
                try {
                    a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await l.default.get({
                        url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [I]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : a.default.dispatch({
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
                }), i = c.default.shouldFetchPremiumLikelihood(), r = o.default.getCurrentUser();
                m(r, i, t, n)
            }

            function S(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), l = (0, r.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), a = (0, r.default)([o.default], () => o.default.getCurrentUser());
                i.useEffect(() => {
                    m(a, l, t, n)
                }, [a, l, t, n])
            }

            function m(e, t, n, i) {
                null != e && !(0, d.isPremium)(e) && n && (t && _(), i && (!s.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !s.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, u.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !s.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !s.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, u.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
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
            let l = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                a = l;
            class u extends i.default.Store {
                initialize() {
                    a = l
                }
                getState() {
                    return a
                }
                shouldFetchPremiumLikelihood() {
                    return !a.isFetching && !a.fetched
                }
            }
            u.displayName = "UserPremiumLikelihoodStore";
            var o = new u(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    a.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    a.premiumLikelihood = t, a.fetched = !0, a.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    a.isFetching = !1
                },
                LOGOUT: function() {
                    a.premiumLikelihood = void 0
                }
            })
        },
        694768: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-02_nitroduction_experience",
                label: "Nitroduction Experience",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "One month trial users recieve the Nitroduction experience",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var l = r
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
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
            var l = r
        },
        565785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-08_premium_tutorial_for_all",
                label: "Premium Tutorial Experience For All",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "All net new users (exclude trial) receive premium tutorial experience",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var l = r
        },
        921228: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsPremiumTutorialEnabled: function() {
                    return N
                },
                isPremiumTutorialEnabled: function() {
                    return C
                },
                useAllDismissedPremiumTutorialSteps: function() {
                    return M
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("151426"),
                a = n("850068"),
                u = n("10641"),
                o = n("374363"),
                s = n("697218"),
                d = n("521012"),
                c = n("719923"),
                f = n("324878"),
                E = n("824986"),
                I = n("694768"),
                _ = n("565785"),
                T = n("646718");
            let S = () => {
                    let e = (0, r.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription()),
                        t = (0, u.useIsDismissibleContentDismissed)(l.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, f.isEligibleTrialSub)(e) && !t
                },
                m = () => {
                    let e = (0, f.useHasActiveTrial)(),
                        t = (0, u.useIsDismissibleContentDismissed)(l.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = (0, r.useStateFromStores)([s.default], () => s.default.getCurrentUser()),
                        o = (0, c.isPremiumExactly)(n, T.PremiumTypes.TIER_2),
                        E = (0, r.useStateFromStores)([d.default], () => d.default.hasFetchedPreviousPremiumTypeSubscription()),
                        I = (0, r.useStateFromStores)([d.default], () => d.default.getPreviousPremiumTypeSubscription()),
                        _ = !e && o;
                    i.useEffect(() => {
                        _ && !E && !t && (0, a.fetchMostRecentSubscription)()
                    }, [_, E, t]);
                    let S = _ && E && null == I;
                    return S && !t
                };

            function N(e) {
                var t;
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    i = S() && n,
                    {
                        enabled: l
                    } = I.default.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: i,
                        disable: !i
                    }),
                    a = (0, r.useStateFromStores)([E.default], () => E.default.tutorialExpirationTime),
                    u = new Date().getTime(),
                    o = (0, r.useStateFromStores)([d.default], () => {
                        var e, n;
                        return null !== (t = null === (n = d.default.getPremiumSubscription()) || void 0 === n ? void 0 : null === (e = n.createdAt) || void 0 === e ? void 0 : e.getTime()) && void 0 !== t ? t : 0
                    }),
                    s = m() && n,
                    c = _.default.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: s && u - o < 18e5,
                        disable: !s
                    }).enabled && null != a && a > u;
                return l || c
            }
            let p = () => {
                    let e = d.default.getPremiumTypeSubscription(),
                        t = (0, u.isDismissibleContentDismissed)(l.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, f.isEligibleTrialSub)(e) && !t
                },
                P = () => {
                    let e = (0, f.hasActiveTrial)(),
                        t = (0, u.isDismissibleContentDismissed)(l.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = s.default.getCurrentUser(),
                        i = (0, c.isPremiumExactly)(n, T.PremiumTypes.TIER_2),
                        r = d.default.hasFetchedPreviousPremiumTypeSubscription(),
                        o = d.default.getPreviousPremiumTypeSubscription();
                    return !r && i && !t && (0, a.fetchMostRecentSubscription)(), !t && !e && i && r && null == o
                },
                C = function(e) {
                    var t, n, i;
                    let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        l = p() && r,
                        {
                            enabled: a
                        } = I.default.getCurrentConfig({
                            location: e
                        }, {
                            disable: !l,
                            autoTrackExposure: l
                        }),
                        u = new Date().getTime(),
                        o = E.default.tutorialExpirationTime,
                        s = null !== (i = null === (n = d.default.getPremiumSubscription()) || void 0 === n ? void 0 : null === (t = n.createdAt) || void 0 === t ? void 0 : t.getTime()) && void 0 !== i ? i : 0,
                        c = P() && r,
                        f = _.default.getCurrentConfig({
                            location: e
                        }, {
                            disable: !c,
                            autoTrackExposure: c && u - s < 18e5
                        }).enabled && null != o && o > u;
                    return a || f
                },
                A = [];

            function O() {
                return T.PremiumTutorialStepOrder.filter(e => (0, u.isDismissibleContentDismissed)(e))
            }

            function M() {
                return function(e, t) {
                    let n = N("useMemoizedValueSyncedWithDismissibleContents"),
                        l = (0, r.useStateFromStores)([o.default], () => {
                            var e;
                            return null === (e = o.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                        });
                    return i.useMemo(() => n ? e() : t, [n, t, e, l])
                }(O, A)
            }
        },
        65324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("446674"),
                a = n("206230"),
                u = n("491605"),
                o = n("210721"),
                s = n("78345");

            function d(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: d = !0,
                    defaultAnimationState: c,
                    idleAnimationState: f
                } = e, E = (0, l.useStateFromStores)([a.default], () => a.default.useReducedMotion), [I, _] = r.useState(c), T = r.useRef((0, o.getGiftAnimationData)(t, I)), [S, m] = r.useState(null == f), [N, p] = r.useState(!1), [P, C] = r.useState(-1), A = () => {
                    T.current = (0, o.getGiftAnimationData)(t, I), C(e => e + 1)
                }, O = () => {
                    m(!1), p(!0), C(-1), _(c)
                };
                r.useEffect(() => {
                    null == f && _(c)
                }, [f, c]), r.useEffect(() => {
                    if (null != f && P >= 0) {
                        O();
                        return
                    }
                    A()
                }, [t, f]), r.useEffect(() => {
                    (!N || null == f) && A()
                }, [I]), r.useEffect(() => {
                    N && (m(null == f), p(!1), A())
                }, [N]);
                if (!s.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, i.jsx)(u.default, {
                    importData: T.current,
                    shouldAnimate: !E && d,
                    className: n,
                    versionKey: P,
                    onComplete: null != f ? () => {
                        null != f && (_(f), m(!0))
                    } : void 0,
                    loop: S
                })
            }
        },
        661128: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useUnsupportedExternalSubscriptionModalHandler: function() {
                    return c
                },
                useSubscriptionEntitlements: function() {
                    return E
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("404118"),
                a = n("10514"),
                u = n("437712"),
                o = n("719923"),
                s = n("843455"),
                d = n("782340");

            function c(e, t, n) {
                i.useEffect(() => {
                    null != e && e.isPurchasedExternally && null != e.paymentGateway && !n && (l.default.show({
                        title: d.default.Messages.BILLING_EXTERNAL_HEADER.format({
                            paymentGatewayName: s.PaymentGatewayToFriendlyName[e.paymentGateway]
                        }),
                        body: d.default.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                            paymentGatewayName: s.PaymentGatewayToFriendlyName[e.paymentGateway],
                            subscriptionManagementLink: (0, o.getExternalSubscriptionMethodUrl)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                        }),
                        confirmText: d.default.Messages.OKAY
                    }), t())
                }, [e])
            }
            let f = [];

            function E(e, t) {
                let n = (0, r.useStateFromStores)([a.default], () => null != e ? a.default.get(e) : null),
                    l = (0, r.useStateFromStores)([u.default], () => {
                        var e;
                        return null != n && null !== (e = u.default.getForSku(n.skuId)) && void 0 !== e ? e : f
                    }),
                    s = i.useMemo(() => Array.from(l).filter(e => {
                        let {
                            parentId: t,
                            consumed: n
                        } = e;
                        return null != t && !n
                    }), [l]),
                    d = !t && null != n && null != s && s.length >= o.default.getIntervalMonths(n.interval, n.intervalCount);
                return {
                    hasEntitlements: d,
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
                l = n("685665"),
                a = n("929423");
            n("424562");
            var u = n("49111"),
                o = n("397336");

            function s(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: d,
                    openWithoutBackstack: c = !1
                } = e, {
                    analyticsLocations: f
                } = (0, l.default)(), E = (0, i.useCallback)(() => {
                    null != t && (0, a.initGuildIdentitySettings)(t, null != d ? d : f), r.default.open(u.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? o.ProfileCustomizationSubsection.GUILD : o.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: s,
                        analyticsLocations: d,
                        openWithoutBackstack: c
                    })
                }, [t, n, s, d, c, f]);
                return E
            }
        },
        506885: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("913144"),
                r = n("327037"),
                l = n("462274"),
                a = n("535013"),
                u = n("42203"),
                o = n("26989"),
                s = n("713135"),
                d = n("386714");
            async function c(e, t) {
                var n, c, f;
                let E, {
                    withMutualGuilds: I = !1,
                    withMutualFriendsCount: _ = !1,
                    friendToken: T,
                    preloadUserBanner: S = !0,
                    dispatchWait: m = !1,
                    guildId: N,
                    channelId: p
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                null != t && (0, l.maybeFetchColors)(t), null != N && !I && (I = !0), null != N && (E = null !== (c = null === (n = (0, a.getVisibleConnectionsRole)({
                    guildMember: o.default.getMember(N, e),
                    channel: u.default.getChannel(p)
                })) || void 0 === n ? void 0 : n.id) && void 0 !== c ? c : void 0);
                let P = s.default.getUserProfile(e),
                    C = s.default.getMutualGuilds(e),
                    A = s.default.getMutualFriendsCount(e),
                    O = s.default.isFetchingProfile(e),
                    M = (null == P ? void 0 : P.profileFetchFailed) || !O && (!Array.isArray(C) && I || null == A && _),
                    R = S ? d.default : void 0,
                    L = !1;
                if (null != N) {
                    let t = s.default.getGuildMemberProfile(e, N);
                    L = null == t
                }
                if (!M && !L && (O || Date.now() - (null !== (f = null == P ? void 0 : P.lastFetched) && void 0 !== f ? f : 0) < 6e4)) return Promise.resolve();
                m ? await i.default.wait(() => (0, r.fetchProfile)(e, {
                    withMutualGuilds: I,
                    withMutualFriendsCount: _,
                    friendToken: T,
                    guildId: N,
                    connectionsRoleId: E
                }, R)) : await (0, r.fetchProfile)(e, {
                    withMutualGuilds: I,
                    withMutualFriendsCount: _,
                    friendToken: T,
                    guildId: N,
                    connectionsRoleId: E
                }, R)
            }
        },
        386714: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("845579"),
                r = n("217513");

            function l(e, t) {
                if ("undefined" == typeof Image) return;
                let n = (0, r.getDisplayProfile)(e.user.id, t);
                if (null == n) return;
                let l = i.GifAutoPlay.getSetting(),
                    a = n.getBannerURL({
                        canAnimate: l,
                        size: 480
                    });
                if (null == a) return;
                let u = new Image;
                u.src = a
            }
        },
        476108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("446674"),
                r = n("95410"),
                l = n("913144"),
                a = n("49111");
            let u = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                o = u,
                s = "LAST_VIEWED_PATH";
            class d extends i.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
                    o = null != e ? e : u
                }
                get defaultRoute() {
                    return a.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = o.lastViewedNonVoicePath) && void 0 !== e ? e : a.Routes.ME
                }
                get fallbackRoute() {
                    return a.Routes.ME
                }
                getState() {
                    return o
                }
            }
            d.displayName = "DefaultRouteStore", d.persistKey = "DefaultRouteStore", d.migrations = [() => {
                let e = r.default.get(s, null);
                return r.default.remove(s), {
                    lastViewedPath: e
                }
            }];
            var c = new d(l.default, {
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
        }
    }
]);
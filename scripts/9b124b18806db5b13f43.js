(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["66676"], {
        527826: function(e, t, n) {
            "use strict";
            e.exports = n.p + "adf75861421c2a6a6269.png"
        },
        429255: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ce07dbd992d1a181b3a9.png"
        },
        516765: function(e, t, n) {
            "use strict";
            e.exports = n.p + "cafeec5a19e1bc310a2d.png"
        },
        961141: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7a1bccb9d18c03cd2072.png"
        },
        307460: function(e, t, n) {
            "use strict";
            e.exports = n.p + "2b37a07b349d534b98eb.png"
        },
        171644: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                XBOX_URL_BASE: function() {
                    return E
                },
                XBOX_APP_WEB_LINK: function() {
                    return l
                },
                XBOX_LINK_DEST_ORIGIN: function() {
                    return _
                },
                XBOX_CLIENT_SCOPES: function() {
                    return O
                },
                PLAYSTATION_LINK_DEST_ORIGIN: function() {
                    return u
                },
                PLAYSTATION_CLIENT_SCOPES: function() {
                    return C
                },
                XBOX_HANDOFF_SEARCH_PARAMS: function() {
                    return c
                },
                GameConsoleTypes: function() {
                    return i
                },
                GAME_CONSOLE_SESSIONS: function() {
                    return d
                },
                GameConsoleCommandResultErrorCodes: function() {
                    return r
                },
                USER_ACTION_REQUIRED_ERROR_CODES: function() {
                    return N
                },
                GAME_CONSOLE_ALERT_MODAL_LOCATION: function() {
                    return S
                }
            });
            var o, s, i, r, a = n("49111");
            let E = "xbox://communitylinking/donut/audio",
                l = "https://www.xbox.com/en-US/apps/xbox-app-for-mobile",
                _ = "https://login.live.com",
                O = [a.OAuth2Scopes.VOICE, a.OAuth2Scopes.DM_CHANNELS_READ, a.OAuth2Scopes.GUILDS, a.OAuth2Scopes.GUILDS_MEMBERS_READ, a.OAuth2Scopes.IDENTIFY, a.OAuth2Scopes.CONNECTIONS],
                u = "https://my.account.sony.com",
                C = O,
                c = e => {
                    let {
                        guildId: t,
                        channelName: n,
                        guildName: o,
                        channelId: s,
                        muted: i,
                        deafened: r,
                        nonce: a
                    } = e, E = {
                        channelid: s,
                        guildid: t,
                        channelname: n,
                        guildname: o,
                        muted: String(i),
                        deafened: String(r)
                    };
                    return null != a && (E.nonce = a), new URLSearchParams(E)
                };
            (o = i || (i = {})).PLAYSTATION = "playstation", o.XBOX = "xbox";
            let d = new Set([i.XBOX, i.PLAYSTATION]);
            a.ActivityGamePlatforms.XBOX, a.ActivityGamePlatforms.PS5, (s = r || (r = {}))[s.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 27e4] = "CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED", s[s.CONSOLE_DEVICE_UNAVAILABLE = 270001] = "CONSOLE_DEVICE_UNAVAILABLE", s[s.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002] = "CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS", s[s.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003] = "CONSOLE_DEVICE_COMMUNICATION_RESTRICTED", s[s.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004] = "CONSOLE_DEVICE_INVALID_POWER_MODE", s[s.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005] = "CONSOLE_DEVICE_ACCOUNT_LINK_ERROR", s[s.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006] = "CONSOLE_DEVICE_MAX_MEMBERS_REACHED", s[s.CONSOLE_DEVICE_BAD_COMMAND = 270007] = "CONSOLE_DEVICE_BAD_COMMAND";
            let N = new Set([r.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED]),
                S = "console error alert"
        },
        458250: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var o = n("37983");
            n("884691");
            var s = n("450638"),
                i = n("755993"),
                r = n("49111"),
                a = n("171644");

            function E(e) {
                let {
                    authToken: t,
                    onContinue: n,
                    onError: E,
                    onClose: l
                } = e;
                return (0, o.jsx)(i.TwoWayLinkDiscordConsent, {
                    platformType: r.PlatformTypes.XBOX,
                    clientId: s.ConsoleOAuthApplications.XBOX_APPLICATION_ID,
                    scopes: a.XBOX_CLIENT_SCOPES,
                    authToken: t,
                    onContinue: n,
                    onError: E,
                    onClose: l
                })
            }
        },
        268767: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var o = n("37983");
            n("884691");
            var s = n("871988"),
                i = n("782340");

            function r(e) {
                let {
                    onContinue: t,
                    onClose: n
                } = e;
                return (0, o.jsx)(s.TwoWayLinkError, {
                    title: i.default.Messages.CONNECT_XBOX_ERROR_TITLE,
                    body: i.default.Messages.CONNECT_XBOX_ERROR_BODY,
                    onClose: n,
                    onContinue: t
                })
            }
        },
        867528: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var o = n("37983");
            n("884691");
            var s = n("351368"),
                i = n("368121"),
                r = n("701909"),
                a = n("634644"),
                E = n("106390"),
                l = n("49111"),
                _ = n("782340"),
                O = n("961141");

            function u() {
                return (0, o.jsxs)(E.ValuePropContainer, {
                    children: [(0, o.jsx)(E.ValueProp, {
                        text: _.default.Messages.CONNECT_XBOX_TRANSFER_VOICE_VALUE_PROP,
                        children: (0, o.jsx)(i.default, {})
                    }), (0, o.jsx)(E.ValueProp, {
                        text: _.default.Messages.CONNECT_XBOX_DISPLAY_GAME_VALUE_PROP,
                        children: (0, o.jsx)(s.default, {})
                    })]
                })
            }

            function C(e) {
                let {
                    onContinue: t,
                    onClose: n
                } = e, s = r.default.getArticleURL(l.HelpdeskArticles.XBOX_CONNECTION);
                return (0, o.jsx)(a.TwoWayLinkLanding, {
                    platformType: l.PlatformTypes.XBOX,
                    headerConnect: _.default.Messages.CONNECT_XBOX_LANDING_TITLE,
                    headerReconnect: _.default.Messages.RECONNECT_XBOX_LANDING_TITLE,
                    body: _.default.Messages.CONNECT_XBOX_LANDING_BODY,
                    learnMoreLink: s,
                    onClose: n,
                    onContinue: t,
                    img: (0, o.jsx)("img", {
                        src: O,
                        width: 234,
                        height: 152,
                        alt: ""
                    }),
                    valueProps: (0, o.jsx)(u, {})
                })
            }
        },
        194167: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var o = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("997511"),
                r = n("458250"),
                a = n("268767"),
                E = n("867528"),
                l = n("572235"),
                _ = n("590882"),
                O = n("598347"),
                u = n("49111"),
                C = n("429152");

            function c(e) {
                let {
                    transitionState: t,
                    onClose: n,
                    analyticsLocation: c
                } = e, {
                    slide: d,
                    gotoNext: N,
                    gotoError: S,
                    handleWaitingForConnection: T,
                    handleAuthToken: I,
                    expectedCallbackState: A,
                    callbackData: f
                } = (0, i.useTwoWayLinkModalSlideManager)(c, u.PlatformTypes.XBOX);
                return (0, o.jsx)(s.ModalRoot, {
                    className: C.modal,
                    transitionState: t,
                    disableTrack: !0,
                    children: (0, o.jsxs)(s.Slides, {
                        activeSlide: d,
                        width: 408,
                        children: [(0, o.jsx)(s.Slide, {
                            id: O.TwoWayLinkModalSlideTypes.LANDING,
                            children: (0, o.jsx)(E.default, {
                                onContinue: N,
                                onClose: n
                            })
                        }), (0, o.jsx)(s.Slide, {
                            id: O.TwoWayLinkModalSlideTypes.PRE_CONNECT,
                            children: (0, o.jsx)(l.default, {
                                isWaitingForConnection: !1,
                                onWaitingForConnection: T,
                                onAuthToken: I,
                                onError: S,
                                onClose: n
                            })
                        }), (0, o.jsx)(s.Slide, {
                            id: O.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING,
                            children: (0, o.jsx)(l.default, {
                                isWaitingForConnection: !0,
                                expectedCallbackState: A,
                                onAuthToken: I,
                                onError: S,
                                onClose: n
                            })
                        }), (0, o.jsx)(s.Slide, {
                            id: O.TwoWayLinkModalSlideTypes.DISCORD_CONSENT,
                            children: (0, o.jsx)(r.default, {
                                authToken: f,
                                onContinue: N,
                                onError: S,
                                onClose: n
                            })
                        }), (0, o.jsx)(s.Slide, {
                            id: O.TwoWayLinkModalSlideTypes.ERROR,
                            children: (0, o.jsx)(a.default, {
                                onContinue: N,
                                onClose: n
                            })
                        }), (0, o.jsx)(s.Slide, {
                            id: O.TwoWayLinkModalSlideTypes.SUCCESS,
                            children: (0, o.jsx)(_.default, {
                                onClose: n
                            })
                        })]
                    })
                })
            }
        },
        572235: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var o = n("37983");
            n("884691");
            var s = n("79528"),
                i = n("49111"),
                r = n("171644"),
                a = n("782340"),
                E = n("429255"),
                l = n("516765");

            function _(e) {
                let {
                    isWaitingForConnection: t,
                    onWaitingForConnection: n,
                    expectedCallbackState: _,
                    onAuthToken: O,
                    onError: u,
                    onClose: C
                } = e, c = t ? (0, o.jsx)("img", {
                    src: l,
                    width: "168",
                    height: "124",
                    alt: ""
                }) : (0, o.jsx)("img", {
                    src: E,
                    width: "152",
                    height: "124",
                    alt: ""
                }), d = t ? a.default.Messages.XBOX_DETAILS_TITLE_WAITING : a.default.Messages.XBOX_DETAILS_TITLE, N = t ? a.default.Messages.XBOX_DETAILS_BODY_WAITING : a.default.Messages.XBOX_DETAILS_BODY;
                return (0, o.jsx)(s.TwoWayLinkPreConnect, {
                    platformType: i.PlatformTypes.XBOX,
                    isWaitingForConnection: t,
                    onWaitingForConnection: n,
                    expectedCallbackState: _,
                    onAuthToken: O,
                    onError: u,
                    onClose: C,
                    img: c,
                    title: d,
                    body: N,
                    redirectDestination: r.XBOX_LINK_DEST_ORIGIN
                })
            }
        },
        590882: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var o = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("376556"),
                r = n("671278"),
                a = n("701909"),
                E = n("451039"),
                l = n("49111"),
                _ = n("171644"),
                O = n("782340"),
                u = n("295398"),
                C = n("307460");

            function c() {
                return (0, o.jsxs)("div", {
                    className: u.getXboxApp,
                    children: [(0, o.jsxs)("div", {
                        className: u.getXboxAppBody,
                        children: [(0, o.jsxs)(s.Heading, {
                            className: u.getXboxAppHeading,
                            variant: "text-lg/semibold",
                            children: [(0, o.jsx)("div", {
                                className: u.xboxLogoBox,
                                children: (0, o.jsx)("img", {
                                    src: i.default.get(l.PlatformTypes.XBOX).icon.whiteSVG,
                                    alt: ""
                                })
                            }), O.default.Messages.GET_XBOX_APP]
                        }), (0, o.jsx)(s.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: O.default.Messages.CONNECT_XBOX_SUCCESS_APP_BODY
                        }), (0, o.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: (0, o.jsx)(s.Anchor, {
                                href: a.default.getArticleURL(l.HelpdeskArticles.XBOX_CONNECTION),
                                children: O.default.Messages.LEARN_MORE
                            })
                        })]
                    }), (0, o.jsx)(r.default, {
                        className: u.getXboxAppQR,
                        text: _.XBOX_APP_WEB_LINK,
                        size: 90
                    })]
                })
            }

            function d(e) {
                let {
                    onClose: t
                } = e;
                return (0, o.jsx)(E.TwoWayLinkSuccess, {
                    img: (0, o.jsx)("img", {
                        src: C,
                        width: "232",
                        height: "113",
                        alt: ""
                    }),
                    title: O.default.Messages.CONNECT_XBOX_SUCCESS_TITLE,
                    body: O.default.Messages.CONNECT_XBOX_SUCCESS_BODY,
                    content: (0, o.jsx)(c, {}),
                    onClose: t
                })
            }
        }
    }
]);
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["34345"], {
        660617: function(e, n, t) {
            "use strict";
            e.exports = t.p + "15f0716f5c45b340dbd6.svg"
        },
        329786: function(e, n, t) {
            "use strict";
            e.exports = t.p + "152d4ec15aff5a5389d5.svg"
        },
        823286: function(e, n, t) {
            "use strict";
            e.exports = t.p + "7d57f2b13996b75a8d7d.svg"
        },
        104528: function(e, n, t) {
            "use strict";
            e.exports = t.p + "00f710da7f31fde658db.svg"
        },
        171644: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
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
                    return C
                },
                PLAYSTATION_LINK_DEST_ORIGIN: function() {
                    return S
                },
                PLAYSTATION_CLIENT_SCOPES: function() {
                    return O
                },
                XBOX_HANDOFF_SEARCH_PARAMS: function() {
                    return u
                },
                GameConsoleTypes: function() {
                    return s
                },
                GAME_CONSOLE_SESSIONS: function() {
                    return c
                },
                GameConsoleCommandResultErrorCodes: function() {
                    return r
                },
                USER_ACTION_REQUIRED_ERROR_CODES: function() {
                    return N
                },
                GAME_CONSOLE_ALERT_MODAL_LOCATION: function() {
                    return d
                }
            });
            var o, i, s, r, a = t("49111");
            let E = "xbox://communitylinking/donut/audio",
                l = "https://www.xbox.com/en-US/apps/xbox-app-for-mobile",
                _ = "https://login.live.com",
                C = [a.OAuth2Scopes.VOICE, a.OAuth2Scopes.DM_CHANNELS_READ, a.OAuth2Scopes.GUILDS, a.OAuth2Scopes.GUILDS_MEMBERS_READ, a.OAuth2Scopes.IDENTIFY, a.OAuth2Scopes.CONNECTIONS],
                S = "https://my.account.sony.com",
                O = C,
                u = e => {
                    let {
                        guildId: n,
                        channelName: t,
                        guildName: o,
                        channelId: i,
                        muted: s,
                        deafened: r,
                        nonce: a
                    } = e, E = {
                        channelid: i,
                        guildid: n,
                        channelname: t,
                        guildname: o,
                        muted: String(s),
                        deafened: String(r)
                    };
                    return null != a && (E.nonce = a), new URLSearchParams(E)
                };
            (o = s || (s = {})).PLAYSTATION = "playstation", o.XBOX = "xbox";
            let c = new Set([s.XBOX, s.PLAYSTATION]);
            a.ActivityGamePlatforms.XBOX, a.ActivityGamePlatforms.PS5, (i = r || (r = {}))[i.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 27e4] = "CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED", i[i.CONSOLE_DEVICE_UNAVAILABLE = 270001] = "CONSOLE_DEVICE_UNAVAILABLE", i[i.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002] = "CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS", i[i.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003] = "CONSOLE_DEVICE_COMMUNICATION_RESTRICTED", i[i.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004] = "CONSOLE_DEVICE_INVALID_POWER_MODE", i[i.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005] = "CONSOLE_DEVICE_ACCOUNT_LINK_ERROR", i[i.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006] = "CONSOLE_DEVICE_MAX_MEMBERS_REACHED", i[i.CONSOLE_DEVICE_BAD_COMMAND = 270007] = "CONSOLE_DEVICE_BAD_COMMAND";
            let N = new Set([r.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED]),
                d = "console error alert"
        },
        790971: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                PlayStationLinkDiscordConsent: function() {
                    return l
                }
            });
            var o = t("37983");
            t("884691");
            var i = t("747651"),
                s = t("450638"),
                r = t("755993"),
                a = t("49111"),
                E = t("171644");

            function l(e) {
                let {
                    platformType: n,
                    authToken: t,
                    onContinue: l,
                    onError: _,
                    onClose: C
                } = e, S = n === a.PlatformTypes.PLAYSTATION_STAGING ? s.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID : s.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID, O = n === a.PlatformTypes.PLAYSTATION_STAGING ? i.ConsoleAuthorizationRedirectURIs.PLAYSTATION_STAGING : i.ConsoleAuthorizationRedirectURIs.PLAYSTATION;
                return (0, o.jsx)(r.TwoWayLinkDiscordConsent, {
                    platformType: n,
                    clientId: S,
                    scopes: E.PLAYSTATION_CLIENT_SCOPES,
                    authToken: t,
                    onContinue: l,
                    onError: _,
                    onClose: C,
                    redirectUri: O
                })
            }
        },
        689625: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                PlayStationLinkError: function() {
                    return r
                }
            });
            var o = t("37983");
            t("884691");
            var i = t("871988"),
                s = t("782340");

            function r(e) {
                let {
                    onContinue: n,
                    onClose: t
                } = e;
                return (0, o.jsx)(i.TwoWayLinkError, {
                    title: s.default.Messages.CONNECT_CONSOLE_ERROR_TITLE,
                    body: s.default.Messages.CONNECT_PS_ERROR_BODY,
                    onClose: t,
                    onContinue: n
                })
            }
        },
        38167: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                PlayStationLinkLanding: function() {
                    return O
                }
            });
            var o = t("37983");
            t("884691");
            var i = t("38828"),
                s = t("157357"),
                r = t("701909"),
                a = t("634644"),
                E = t("106390"),
                l = t("49111"),
                _ = t("782340"),
                C = t("823286");

            function S() {
                let e = [_.default.Messages.PS_VALUE_PROP_VOICE, _.default.Messages.PS_VALUE_PROP_GAME],
                    n = [_.default.Messages.PS_VALUE_PROP_GAME];
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(E.ValuePropContainer, {
                        children: (0, o.jsx)(E.BulletedValueProp, {
                            icon: (0, o.jsx)(s.default, {}),
                            title: _.default.Messages.PS5,
                            bulletPoints: e
                        })
                    }), (0, o.jsx)(E.ValuePropContainer, {
                        children: (0, o.jsx)(E.BulletedValueProp, {
                            icon: (0, o.jsx)(i.default, {}),
                            title: _.default.Messages.PS4,
                            bulletPoints: n
                        })
                    })]
                })
            }

            function O(e) {
                let {
                    platformType: n,
                    onContinue: t,
                    onClose: i
                } = e;
                return (0, o.jsx)(a.TwoWayLinkLanding, {
                    platformType: n,
                    headerConnect: _.default.Messages.CONNECT_PS_LANDING_TITLE,
                    headerReconnect: _.default.Messages.RECONNECT_PS_LANDING_TITLE,
                    body: _.default.Messages.CONNECT_PS_LANDING_BODY,
                    onClose: i,
                    onContinue: t,
                    img: (0, o.jsx)("img", {
                        src: C,
                        width: 230,
                        height: 138,
                        alt: ""
                    }),
                    valueProps: (0, o.jsx)(S, {}),
                    learnMoreLink: r.default.getArticleURL(l.HelpdeskArticles.PS_CONNECTION)
                })
            }
        },
        59833: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return O
                }
            });
            var o = t("37983");
            t("884691");
            var i = t("77078"),
                s = t("997511"),
                r = t("790971"),
                a = t("689625"),
                E = t("38167"),
                l = t("437679"),
                _ = t("251782"),
                C = t("598347"),
                S = t("429152");

            function O(e) {
                let {
                    transitionState: n,
                    onClose: t,
                    analyticsLocation: O,
                    platformType: u
                } = e, {
                    slide: c,
                    gotoNext: N,
                    gotoError: d,
                    handleWaitingForConnection: T,
                    handleAuthToken: L,
                    expectedCallbackState: I,
                    callbackData: A
                } = (0, s.useTwoWayLinkModalSlideManager)(O, u);
                return (0, o.jsx)(i.ModalRoot, {
                    className: S.modal,
                    transitionState: n,
                    disableTrack: !0,
                    children: (0, o.jsxs)(i.Slides, {
                        activeSlide: c,
                        width: 408,
                        children: [(0, o.jsx)(i.Slide, {
                            id: C.TwoWayLinkModalSlideTypes.LANDING,
                            children: (0, o.jsx)(E.PlayStationLinkLanding, {
                                platformType: u,
                                onContinue: N,
                                onClose: t
                            })
                        }), (0, o.jsx)(i.Slide, {
                            id: C.TwoWayLinkModalSlideTypes.PRE_CONNECT,
                            children: (0, o.jsx)(l.PlayStationLinkPreConnect, {
                                platformType: u,
                                isWaitingForConnection: !1,
                                onWaitingForConnection: T,
                                onAuthToken: L,
                                onError: d,
                                onClose: t
                            })
                        }), (0, o.jsx)(i.Slide, {
                            id: C.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING,
                            children: (0, o.jsx)(l.PlayStationLinkPreConnect, {
                                platformType: u,
                                isWaitingForConnection: !0,
                                expectedCallbackState: I,
                                onAuthToken: L,
                                onError: d,
                                onClose: t
                            })
                        }), (0, o.jsx)(i.Slide, {
                            id: C.TwoWayLinkModalSlideTypes.DISCORD_CONSENT,
                            children: (0, o.jsx)(r.PlayStationLinkDiscordConsent, {
                                platformType: u,
                                authToken: A,
                                onContinue: N,
                                onError: d,
                                onClose: t
                            })
                        }), (0, o.jsx)(i.Slide, {
                            id: C.TwoWayLinkModalSlideTypes.ERROR,
                            children: (0, o.jsx)(a.PlayStationLinkError, {
                                onContinue: N,
                                onClose: t
                            })
                        }), (0, o.jsx)(i.Slide, {
                            id: C.TwoWayLinkModalSlideTypes.SUCCESS,
                            children: (0, o.jsx)(_.PlayStationLinkSuccess, {
                                onClose: t
                            })
                        })]
                    })
                })
            }
        },
        437679: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                PlayStationLinkPreConnect: function() {
                    return l
                }
            });
            var o = t("37983");
            t("884691");
            var i = t("79528"),
                s = t("171644"),
                r = t("782340"),
                a = t("660617"),
                E = t("329786");

            function l(e) {
                let {
                    platformType: n,
                    isWaitingForConnection: t,
                    onWaitingForConnection: l,
                    expectedCallbackState: _,
                    onAuthToken: C,
                    onError: S,
                    onClose: O
                } = e, u = t ? (0, o.jsx)("img", {
                    src: E,
                    width: "180",
                    height: "125",
                    alt: ""
                }) : (0, o.jsx)("img", {
                    src: a,
                    width: "180",
                    height: "111",
                    alt: ""
                }), c = t ? r.default.Messages.CONSOLE_PRECONNECT_TITLE_WAITING : r.default.Messages.PS_PRECONNECT_TITLE, N = t ? r.default.Messages.PS_PRECONNECT_BODY_WAITING : r.default.Messages.PS_PRECONNECT_BODY;
                return (0, o.jsx)(i.TwoWayLinkPreConnect, {
                    platformType: n,
                    isWaitingForConnection: t,
                    onWaitingForConnection: l,
                    expectedCallbackState: _,
                    onAuthToken: C,
                    onError: S,
                    onClose: O,
                    img: u,
                    title: c,
                    body: N,
                    redirectDestination: s.PLAYSTATION_LINK_DEST_ORIGIN
                })
            }
        },
        251782: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                PlayStationLinkSuccess: function() {
                    return a
                }
            });
            var o = t("37983");
            t("884691");
            var i = t("451039"),
                s = t("782340"),
                r = t("104528");

            function a(e) {
                let {
                    onClose: n
                } = e;
                return (0, o.jsx)(i.TwoWayLinkSuccess, {
                    img: (0, o.jsx)("img", {
                        src: r,
                        width: "241 ",
                        height: "118",
                        alt: ""
                    }),
                    title: s.default.Messages.PS_LINK_SUCCESS_TITLE,
                    body: s.default.Messages.PS_LINK_SUCCESS_BODY,
                    onClose: n
                })
            }
        }
    }
]);
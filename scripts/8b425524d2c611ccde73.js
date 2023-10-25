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
                    return C
                },
                XBOX_APP_WEB_LINK: function() {
                    return l
                },
                XBOX_LINK_DEST_ORIGIN: function() {
                    return u
                },
                XBOX_CLIENT_SCOPES: function() {
                    return E
                },
                PLAYSTATION_LINK_DEST_ORIGIN: function() {
                    return c
                },
                PLAYSTATION_CLIENT_SCOPES: function() {
                    return d
                },
                XBOX_HANDOFF_SEARCH_PARAMS: function() {
                    return _
                },
                GameConsoleTypes: function() {
                    return s
                },
                GAME_CONSOLE_SESSIONS: function() {
                    return S
                },
                GameConsoleCommandResultErrorCodes: function() {
                    return r
                },
                USER_ACTION_REQUIRED_ERROR_CODES: function() {
                    return O
                },
                GAME_CONSOLE_ALERT_MODAL_LOCATION: function() {
                    return N
                }
            });
            var o, i, s, r, a = t("49111");
            let C = "xbox://communitylinking/donut/audio",
                l = "https://www.xbox.com/en-US/apps/xbox-app-for-mobile",
                u = "https://login.live.com",
                E = [a.OAuth2Scopes.VOICE, a.OAuth2Scopes.DM_CHANNELS_READ, a.OAuth2Scopes.GUILDS, a.OAuth2Scopes.GUILDS_MEMBERS_READ, a.OAuth2Scopes.IDENTIFY, a.OAuth2Scopes.CONNECTIONS],
                c = "https://my.account.sony.com",
                d = E,
                _ = e => {
                    let {
                        guildId: n,
                        channelName: t,
                        guildName: o,
                        channelId: i,
                        muted: s,
                        deafened: r,
                        nonce: a
                    } = e, C = {
                        channelid: i,
                        guildid: n,
                        channelname: t,
                        guildname: o,
                        muted: String(s),
                        deafened: String(r)
                    };
                    return null != a && (C.nonce = a), new URLSearchParams(C)
                };
            (o = s || (s = {})).PLAYSTATION = "playstation", o.XBOX = "xbox";
            let S = new Set([s.XBOX, s.PLAYSTATION]);
            a.ActivityGamePlatforms.XBOX, a.ActivityGamePlatforms.PS5, (i = r || (r = {}))[i.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 27e4] = "CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED", i[i.CONSOLE_DEVICE_UNAVAILABLE = 270001] = "CONSOLE_DEVICE_UNAVAILABLE", i[i.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002] = "CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS", i[i.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003] = "CONSOLE_DEVICE_COMMUNICATION_RESTRICTED", i[i.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004] = "CONSOLE_DEVICE_INVALID_POWER_MODE", i[i.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005] = "CONSOLE_DEVICE_ACCOUNT_LINK_ERROR", i[i.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006] = "CONSOLE_DEVICE_MAX_MEMBERS_REACHED", i[i.CONSOLE_DEVICE_BAD_COMMAND = 270007] = "CONSOLE_DEVICE_BAD_COMMAND";
            let O = new Set([r.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED]),
                N = "console error alert"
        },
        790971: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                PlayStationLinkDiscordConsent: function() {
                    return l
                }
            });
            var o = t("920040");
            t("773670");
            var i = t("470059"),
                s = t("185467"),
                r = t("755993"),
                a = t("49111"),
                C = t("171644");

            function l(e) {
                let {
                    platformType: n,
                    authToken: t,
                    onContinue: l,
                    onError: u,
                    onClose: E
                } = e, c = n === a.PlatformTypes.PLAYSTATION_STAGING ? s.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID : s.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID, d = n === a.PlatformTypes.PLAYSTATION_STAGING ? i.ConsoleAuthorizationRedirectURIs.PLAYSTATION_STAGING : i.ConsoleAuthorizationRedirectURIs.PLAYSTATION;
                return (0, o.jsx)(r.TwoWayLinkDiscordConsent, {
                    platformType: n,
                    clientId: c,
                    scopes: C.PLAYSTATION_CLIENT_SCOPES,
                    authToken: t,
                    onContinue: l,
                    onError: u,
                    onClose: E,
                    redirectUri: d
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
            var o = t("920040");
            t("773670");
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
                    return d
                }
            });
            var o = t("920040");
            t("773670");
            var i = t("38828"),
                s = t("157357"),
                r = t("701909"),
                a = t("935452"),
                C = t("106390"),
                l = t("49111"),
                u = t("782340"),
                E = t("823286");

            function c() {
                let e = [u.default.Messages.PS_VALUE_PROP_VOICE, u.default.Messages.PS_VALUE_PROP_GAME],
                    n = [u.default.Messages.PS_VALUE_PROP_GAME];
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(C.ValuePropContainer, {
                        children: (0, o.jsx)(C.BulletedValueProp, {
                            icon: (0, o.jsx)(s.default, {}),
                            title: u.default.Messages.PS5,
                            bulletPoints: e
                        })
                    }), (0, o.jsx)(C.ValuePropContainer, {
                        children: (0, o.jsx)(C.BulletedValueProp, {
                            icon: (0, o.jsx)(i.default, {}),
                            title: u.default.Messages.PS4,
                            bulletPoints: n
                        })
                    })]
                })
            }

            function d(e) {
                let {
                    platformType: n,
                    onContinue: t,
                    onClose: i
                } = e;
                return (0, o.jsx)(a.TwoWayLinkLanding, {
                    platformType: n,
                    headerConnect: u.default.Messages.CONNECT_PS_LANDING_TITLE,
                    headerReconnect: u.default.Messages.RECONNECT_PS_LANDING_TITLE,
                    body: u.default.Messages.CONNECT_PS_LANDING_BODY,
                    onClose: i,
                    onContinue: t,
                    img: (0, o.jsx)("img", {
                        src: E,
                        width: 230,
                        height: 138,
                        alt: ""
                    }),
                    valueProps: (0, o.jsx)(c, {}),
                    learnMoreLink: r.default.getArticleURL(l.HelpdeskArticles.PS_CONNECTION)
                })
            }
        },
        59833: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return d
                }
            });
            var o = t("920040");
            t("773670");
            var i = t("77078"),
                s = t("997511"),
                r = t("790971"),
                a = t("689625"),
                C = t("38167"),
                l = t("437679"),
                u = t("251782"),
                E = t("598347"),
                c = t("616542");

            function d(e) {
                let {
                    transitionState: n,
                    onClose: t,
                    analyticsLocation: d,
                    platformType: _
                } = e, {
                    slide: S,
                    gotoNext: O,
                    gotoError: N,
                    handleWaitingForConnection: A,
                    handleAuthToken: T,
                    expectedCallbackState: I,
                    callbackData: L
                } = (0, s.useTwoWayLinkModalSlideManager)(d, _);
                return (0, o.jsx)(i.ModalRoot, {
                    className: c.modal,
                    transitionState: n,
                    disableTrack: !0,
                    children: (0, o.jsxs)(i.Slides, {
                        activeSlide: S,
                        width: 408,
                        children: [(0, o.jsx)(i.Slide, {
                            id: E.TwoWayLinkModalSlideTypes.LANDING,
                            children: (0, o.jsx)(C.PlayStationLinkLanding, {
                                platformType: _,
                                onContinue: O,
                                onClose: t
                            })
                        }), (0, o.jsx)(i.Slide, {
                            id: E.TwoWayLinkModalSlideTypes.PRE_CONNECT,
                            children: (0, o.jsx)(l.PlayStationLinkPreConnect, {
                                platformType: _,
                                isWaitingForConnection: !1,
                                onWaitingForConnection: A,
                                onAuthToken: T,
                                onError: N,
                                onClose: t
                            })
                        }), (0, o.jsx)(i.Slide, {
                            id: E.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING,
                            children: (0, o.jsx)(l.PlayStationLinkPreConnect, {
                                platformType: _,
                                isWaitingForConnection: !0,
                                expectedCallbackState: I,
                                onAuthToken: T,
                                onError: N,
                                onClose: t
                            })
                        }), (0, o.jsx)(i.Slide, {
                            id: E.TwoWayLinkModalSlideTypes.DISCORD_CONSENT,
                            children: (0, o.jsx)(r.PlayStationLinkDiscordConsent, {
                                platformType: _,
                                authToken: L,
                                onContinue: O,
                                onError: N,
                                onClose: t
                            })
                        }), (0, o.jsx)(i.Slide, {
                            id: E.TwoWayLinkModalSlideTypes.ERROR,
                            children: (0, o.jsx)(a.PlayStationLinkError, {
                                onContinue: O,
                                onClose: t
                            })
                        }), (0, o.jsx)(i.Slide, {
                            id: E.TwoWayLinkModalSlideTypes.SUCCESS,
                            children: (0, o.jsx)(u.PlayStationLinkSuccess, {
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
            var o = t("920040");
            t("773670");
            var i = t("79528"),
                s = t("171644"),
                r = t("782340"),
                a = t("660617"),
                C = t("329786");

            function l(e) {
                let {
                    platformType: n,
                    isWaitingForConnection: t,
                    onWaitingForConnection: l,
                    expectedCallbackState: u,
                    onAuthToken: E,
                    onError: c,
                    onClose: d
                } = e, _ = t ? (0, o.jsx)("img", {
                    src: C,
                    width: "180",
                    height: "125",
                    alt: ""
                }) : (0, o.jsx)("img", {
                    src: a,
                    width: "180",
                    height: "111",
                    alt: ""
                }), S = t ? r.default.Messages.CONSOLE_PRECONNECT_TITLE_WAITING : r.default.Messages.PS_PRECONNECT_TITLE, O = t ? r.default.Messages.PS_PRECONNECT_BODY_WAITING : r.default.Messages.PS_PRECONNECT_BODY;
                return (0, o.jsx)(i.TwoWayLinkPreConnect, {
                    platformType: n,
                    isWaitingForConnection: t,
                    onWaitingForConnection: l,
                    expectedCallbackState: u,
                    onAuthToken: E,
                    onError: c,
                    onClose: d,
                    img: _,
                    title: S,
                    body: O,
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
            var o = t("920040");
            t("773670");
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
        },
        470059: function(e, n, t) {
            "use strict";
            var o, i;
            t.r(n), t.d(n, {
                ConsoleAuthorizationRedirectURIs: function() {
                    return o
                }
            }), (i = o || (o = {})).PLAYSTATION = "https://discord.com/connections/playstation/link", i.PLAYSTATION_STAGING = "https://discord.com/connections/playstation-stg/link"
        },
        185467: function(e, n, t) {
            "use strict";
            var o, i;
            t.r(n), t.d(n, {
                ConsoleOAuthApplications: function() {
                    return o
                },
                ConsoleOAuthApplicationsSets: function() {
                    return s
                }
            }), (i = o || (o = {})).XBOX_APPLICATION_ID = "622174530214821906", i.PLAYSTATION_APPLICATION_ID = "1008890872156405890", i.PLAYSTATION_STAGING_APPLICATION_ID = "984193235868065795";
            let s = {
                PLAYSTATION_APPLICATION_IDS: new Set(["984193235868065795", "1008890872156405890"]),
                ALL: new Set(["622174530214821906", "984193235868065795", "1008890872156405890"])
            }
        },
        38828: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return s
                }
            });
            var o = t("920040");
            t("773670");
            var i = t("75196");

            function s(e) {
                let {
                    width: n = 24,
                    height: t = 24,
                    color: s = "currentColor",
                    foreground: r,
                    ...a
                } = e;
                return (0, o.jsx)("svg", {
                    ...(0, i.default)(a),
                    width: n,
                    height: t,
                    viewBox: "0 0 24 25",
                    children: (0, o.jsx)("path", {
                        className: r,
                        fill: s,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M17.9598 11.9353C17.4729 11.6167 16.8191 11.2112 15.9803 11.2112C14.5817 11.2112 13.3483 12.1684 12.932 13.4612H0.525391L3.90301 7.61133H23.4748L21.3882 11.2261C21.2883 11.2162 21.1876 11.2112 21.0863 11.2112C20.2471 11.2112 19.5928 11.6167 19.1063 11.9353H17.9598ZM15.7138 18.3989C16.2002 17.8094 16.5066 17.2843 16.8108 16.7205H20.2546C20.5588 17.2843 20.8657 17.8094 21.3517 18.3989C21.6203 18.7193 22.1464 18.8611 22.4731 18.8611C22.7232 18.8611 23.5251 18.8611 23.4725 18.025C23.423 17.233 22.9077 14.1051 22.9041 14.0862C22.7421 13.2312 21.9515 12.5612 21.0862 12.5612C20.6117 12.5612 20.1933 12.8362 19.7794 13.1083C19.6878 13.1686 19.5963 13.2287 19.5045 13.2857H17.561C17.469 13.2287 17.3775 13.1684 17.2857 13.1081C16.872 12.8361 16.454 12.5612 15.9793 12.5612C15.1139 12.5612 14.3237 13.2312 14.1613 14.0862C14.1582 14.1051 13.6429 17.233 13.5934 18.025C13.5403 18.8611 14.3426 18.8611 14.5924 18.8611C14.9191 18.8611 15.446 18.7193 15.7138 18.3989Z",
                        "aria-hidden": !0
                    })
                })
            }
        },
        157357: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return s
                }
            });
            var o = t("920040");
            t("773670");
            var i = t("75196");

            function s(e) {
                let {
                    width: n = 24,
                    height: t = 24,
                    color: s = "currentColor",
                    foreground: r,
                    ...a
                } = e;
                return (0, o.jsxs)("svg", {
                    ...(0, i.default)(a),
                    width: n,
                    height: t,
                    viewBox: "0 0 24 25",
                    children: [(0, o.jsx)("path", {
                        className: r,
                        fill: s,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.72934 2.36505C7.91813 1.79235 8.34289 1.84008 8.76766 1.8878C9.99478 2.03098 11.2219 2.2696 12.449 2.41277C13.1098 2.50822 13.3457 2.84229 13.3929 3.51044C13.4873 7.66249 13.4873 11.8145 13.9593 15.9189C14.0065 16.2529 14.1009 16.6824 13.6289 16.8256C11.7882 17.446 11.3635 19.1164 10.9859 20.739C10.4195 23.2685 10.4667 23.2685 8.01252 23.698C5.93587 24.032 5.93587 24.032 6.03026 21.9322C6.36064 15.5371 6.97419 9.18968 7.68214 2.84229C7.58775 2.69912 7.58775 2.55595 7.72934 2.36505Z",
                        "aria-hidden": !0
                    }), (0, o.jsx)("path", {
                        className: r,
                        fill: s,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M21 22.2862C21 22.4246 21 22.7474 20.9042 23.0703C20.8083 23.5316 20.4729 23.7622 19.9937 23.8545C19.4667 23.9006 19.1312 23.7161 19.0354 23.2548C18.7479 21.9633 17.7896 21.8249 16.5916 21.8249C15.3937 21.8249 14.2437 21.7788 13.9562 23.2548C13.8604 23.67 13.6208 23.9006 13.0937 23.8545C12.5666 23.8083 12.1354 23.5777 12.0874 23.0703C11.7999 21.3637 12.2312 19.7493 13.2374 18.3194C13.5729 17.8582 14.1958 17.7659 14.7229 17.9504C15.8729 18.2733 17.0229 18.2733 18.2208 17.9504C19.1792 17.6737 19.8021 18.181 20.1854 18.9652C20.7125 19.9338 21 20.9486 21 22.2862Z",
                        "aria-hidden": !0
                    }), (0, o.jsx)("path", {
                        className: r,
                        fill: s,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7 2.14794C7 2.28884 7 2.47672 7 2.61763C4.78283 2.57066 3.89596 3.4161 3.9403 5.81153C4.02899 11.0721 4.20636 16.2856 4.29505 21.5462C4.29505 21.9689 4.42808 22.4386 4.11767 22.8613C3.80727 22.6265 3.89596 22.3447 3.89596 22.1098C3.85161 15.8629 3.67424 9.61603 3.05343 3.36913C2.9204 1.81915 2.9204 1.77218 4.47242 1.91309C5.31495 2.00703 6.15747 2.10097 7 2.14794Z",
                        "aria-hidden": !0
                    })]
                })
            }
        }
    }
]);
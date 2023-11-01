(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94530"], {
        850046: function(e, n, t) {
            "use strict";
            e.exports = t.p + "b4906e79cd865370415e.png"
        },
        229394: function(e, n, t) {
            "use strict";
            e.exports = t.p + "5d0f441ce98c8e4c71f3.png"
        },
        140413: function(e, n, t) {
            "use strict";
            e.exports = t.p + "06d0041aeaeff90570a2.png"
        },
        997265: function(e, n, t) {
            "use strict";
            e.exports = t.p + "74dbc18d1c4fb53b3b66.png"
        },
        655485: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                CRUNCHYROLL_LINK_DEST_ORIGIN: function() {
                    return s
                },
                CRUNCHYROLL_CLIENT_ID: function() {
                    return i
                },
                CRUNCHYROLL_CLIENT_SCOPES: function() {
                    return r
                }
            });
            var o = t("843455");
            let s = "https://crunchyroll.com",
                i = "981509069309354054",
                r = [o.OAuth2Scopes.ACTIVITIES_WRITE, o.OAuth2Scopes.EMAIL, o.OAuth2Scopes.IDENTIFY]
        },
        780421: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return a
                }
            });
            var o = t("37983");
            t("884691");
            var s = t("755993"),
                i = t("655485"),
                r = t("49111");

            function a(e) {
                let {
                    authToken: n,
                    onContinue: t,
                    onError: a,
                    onClose: l
                } = e;
                return (0, o.jsx)(s.TwoWayLinkDiscordConsent, {
                    platformType: r.PlatformTypes.CRUNCHYROLL,
                    clientId: i.CRUNCHYROLL_CLIENT_ID,
                    scopes: i.CRUNCHYROLL_CLIENT_SCOPES,
                    authToken: n,
                    onContinue: t,
                    onError: a,
                    onClose: l
                })
            }
        },
        768064: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return r
                }
            });
            var o = t("37983");
            t("884691");
            var s = t("871988"),
                i = t("782340");

            function r(e) {
                let {
                    onContinue: n,
                    onClose: t
                } = e;
                return (0, o.jsx)(s.TwoWayLinkError, {
                    title: i.default.Messages.CONNECT_CRUNCHYROLL_ERROR_TITLE,
                    body: i.default.Messages.CONNECT_CRUNCHYROLL_ERROR_BODY,
                    onClose: t,
                    onContinue: n
                })
            }
        },
        579574: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return c
                }
            });
            var o = t("37983");
            t("884691");
            var s = t("855670"),
                i = t("701909"),
                r = t("634644"),
                a = t("106390"),
                l = t("49111"),
                C = t("782340"),
                d = t("140413");

            function u() {
                return (0, o.jsx)(a.ValuePropContainer, {
                    children: (0, o.jsx)(a.ValueProp, {
                        text: C.default.Messages.CONNECT_CRUNCHYROLL_DISPLAY_SHOW_VALUE_PROP,
                        children: (0, o.jsx)(s.default, {})
                    })
                })
            }

            function c(e) {
                let {
                    onContinue: n,
                    onClose: t
                } = e, s = i.default.getArticleURL(l.HelpdeskArticles.CRUNCHYROLL_CONNECTION);
                return (0, o.jsx)(r.TwoWayLinkLanding, {
                    platformType: l.PlatformTypes.CRUNCHYROLL,
                    headerConnect: C.default.Messages.CONNECT_CRUNCHYROLL_LANDING_TITLE,
                    body: C.default.Messages.CONNECT_CRUNCHYROLL_LANDING_BODY,
                    learnMoreLink: s,
                    onClose: t,
                    onContinue: n,
                    img: (0, o.jsx)("img", {
                        src: d,
                        width: 234,
                        height: 152,
                        alt: ""
                    }),
                    valueProps: (0, o.jsx)(u, {})
                })
            }
        },
        620595: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return N
                }
            });
            var o = t("37983");
            t("884691");
            var s = t("77078"),
                i = t("997511"),
                r = t("780421"),
                a = t("768064"),
                l = t("579574"),
                C = t("168503"),
                d = t("920460"),
                u = t("598347"),
                c = t("49111"),
                L = t("429152");

            function N(e) {
                let {
                    transitionState: n,
                    onClose: t,
                    analyticsLocation: N
                } = e, {
                    slide: T,
                    gotoNext: R,
                    gotoError: f,
                    handleWaitingForConnection: _,
                    handleAuthToken: O,
                    expectedCallbackState: p,
                    callbackData: E
                } = (0, i.useTwoWayLinkModalSlideManager)(N, c.PlatformTypes.CRUNCHYROLL);
                return (0, o.jsx)(s.ModalRoot, {
                    className: L.modal,
                    transitionState: n,
                    disableTrack: !0,
                    children: (0, o.jsxs)(s.Slides, {
                        activeSlide: T,
                        width: 408,
                        children: [(0, o.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.LANDING,
                            children: (0, o.jsx)(l.default, {
                                onContinue: R,
                                onClose: t
                            })
                        }), (0, o.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.PRE_CONNECT,
                            children: (0, o.jsx)(C.default, {
                                isWaitingForConnection: !1,
                                onWaitingForConnection: _,
                                onAuthToken: O,
                                onError: f,
                                onClose: t
                            })
                        }), (0, o.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING,
                            children: (0, o.jsx)(C.default, {
                                isWaitingForConnection: !0,
                                expectedCallbackState: p,
                                onAuthToken: O,
                                onError: f,
                                onClose: t
                            })
                        }), (0, o.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.DISCORD_CONSENT,
                            children: (0, o.jsx)(r.default, {
                                authToken: E,
                                onContinue: R,
                                onError: f,
                                onClose: t
                            })
                        }), (0, o.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.ERROR,
                            children: (0, o.jsx)(a.default, {
                                onContinue: R,
                                onClose: t
                            })
                        }), (0, o.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.SUCCESS,
                            children: (0, o.jsx)(d.default, {
                                onClose: t
                            })
                        })]
                    })
                })
            }
        },
        168503: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return d
                }
            });
            var o = t("37983");
            t("884691");
            var s = t("79528"),
                i = t("655485"),
                r = t("49111"),
                a = t("782340"),
                l = t("850046"),
                C = t("229394");

            function d(e) {
                let {
                    isWaitingForConnection: n,
                    onWaitingForConnection: t,
                    expectedCallbackState: d,
                    onAuthToken: u,
                    onError: c,
                    onClose: L
                } = e, N = n ? (0, o.jsx)("img", {
                    src: C,
                    width: "168",
                    height: "124",
                    alt: ""
                }) : (0, o.jsx)("img", {
                    src: l,
                    width: "152",
                    height: "123",
                    alt: ""
                }), T = n ? a.default.Messages.CRUNCHYROLL_DETAILS_TITLE_WAITING : a.default.Messages.CRUNCHYROLL_DETAILS_TITLE, R = n ? a.default.Messages.CRUNCHYROLL_DETAILS_BODY_WAITING : a.default.Messages.CRUNCHYROLL_DETAILS_BODY;
                return (0, o.jsx)(s.TwoWayLinkPreConnect, {
                    platformType: r.PlatformTypes.CRUNCHYROLL,
                    isWaitingForConnection: n,
                    onWaitingForConnection: t,
                    expectedCallbackState: d,
                    onAuthToken: u,
                    onError: c,
                    onClose: L,
                    img: N,
                    title: T,
                    body: R,
                    redirectDestination: i.CRUNCHYROLL_LINK_DEST_ORIGIN
                })
            }
        },
        920460: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return c
                }
            });
            var o = t("37983");
            t("884691");
            var s = t("77078"),
                i = t("701909"),
                r = t("451039"),
                a = t("49111"),
                l = t("782340"),
                C = t("612827"),
                d = t("997265");

            function u() {
                return (0, o.jsx)("div", {
                    className: C.getCrunchyrollApp,
                    children: (0, o.jsx)("div", {
                        className: C.getCrunchyrollAppBody,
                        children: (0, o.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: (0, o.jsx)(s.Anchor, {
                                href: i.default.getArticleURL(a.HelpdeskArticles.CRUNCHYROLL_CONNECTION),
                                children: l.default.Messages.LEARN_MORE
                            })
                        })
                    })
                })
            }

            function c(e) {
                let {
                    onClose: n
                } = e;
                return (0, o.jsx)(r.TwoWayLinkSuccess, {
                    img: (0, o.jsx)("img", {
                        src: d,
                        width: "224",
                        height: "104",
                        alt: ""
                    }),
                    title: l.default.Messages.CONNECT_CRUNCHYROLL_SUCCESS_TITLE,
                    body: l.default.Messages.CONNECT_CRUNCHYROLL_SUCCESS_BODY,
                    content: (0, o.jsx)(u, {}),
                    onClose: n
                })
            }
        }
    }
]);
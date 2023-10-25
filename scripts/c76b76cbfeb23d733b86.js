(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94530"], {
        850046: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b4906e79cd865370415e.png"
        },
        229394: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5d0f441ce98c8e4c71f3.png"
        },
        140413: function(e, t, n) {
            "use strict";
            e.exports = n.p + "06d0041aeaeff90570a2.png"
        },
        997265: function(e, t, n) {
            "use strict";
            e.exports = n.p + "74dbc18d1c4fb53b3b66.png"
        },
        362847: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TvIcon: function() {
                    return r
                }
            });
            var o = n("920040");
            n("773670");
            var s = n("912557"),
                i = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...a
                } = e;
                return (0, o.jsx)("svg", {
                    ...(0, i.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, o.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M4 3a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4Zm2 17a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H6Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        655485: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
            var o = n("809924");
            let s = "https://crunchyroll.com",
                i = "981509069309354054",
                r = [o.OAuth2Scopes.ACTIVITIES_WRITE, o.OAuth2Scopes.EMAIL, o.OAuth2Scopes.IDENTIFY]
        },
        780421: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var o = n("920040");
            n("773670");
            var s = n("755993"),
                i = n("655485"),
                r = n("49111");

            function l(e) {
                let {
                    authToken: t,
                    onContinue: n,
                    onError: l,
                    onClose: a
                } = e;
                return (0, o.jsx)(s.TwoWayLinkDiscordConsent, {
                    platformType: r.PlatformTypes.CRUNCHYROLL,
                    clientId: i.CRUNCHYROLL_CLIENT_ID,
                    scopes: i.CRUNCHYROLL_CLIENT_SCOPES,
                    authToken: t,
                    onContinue: n,
                    onError: l,
                    onClose: a
                })
            }
        },
        768064: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var o = n("920040");
            n("773670");
            var s = n("871988"),
                i = n("782340");

            function r(e) {
                let {
                    onContinue: t,
                    onClose: n
                } = e;
                return (0, o.jsx)(s.TwoWayLinkError, {
                    title: i.default.Messages.CONNECT_CRUNCHYROLL_ERROR_TITLE,
                    body: i.default.Messages.CONNECT_CRUNCHYROLL_ERROR_BODY,
                    onClose: n,
                    onContinue: t
                })
            }
        },
        579574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var o = n("920040");
            n("773670");
            var s = n("855670"),
                i = n("701909"),
                r = n("935452"),
                l = n("106390"),
                a = n("49111"),
                d = n("782340"),
                u = n("140413");

            function C() {
                return (0, o.jsx)(l.ValuePropContainer, {
                    children: (0, o.jsx)(l.ValueProp, {
                        text: d.default.Messages.CONNECT_CRUNCHYROLL_DISPLAY_SHOW_VALUE_PROP,
                        children: (0, o.jsx)(s.default, {})
                    })
                })
            }

            function c(e) {
                let {
                    onContinue: t,
                    onClose: n
                } = e, s = i.default.getArticleURL(a.HelpdeskArticles.CRUNCHYROLL_CONNECTION);
                return (0, o.jsx)(r.TwoWayLinkLanding, {
                    platformType: a.PlatformTypes.CRUNCHYROLL,
                    headerConnect: d.default.Messages.CONNECT_CRUNCHYROLL_LANDING_TITLE,
                    body: d.default.Messages.CONNECT_CRUNCHYROLL_LANDING_BODY,
                    learnMoreLink: s,
                    onClose: n,
                    onContinue: t,
                    img: (0, o.jsx)("img", {
                        src: u,
                        width: 234,
                        height: 152,
                        alt: ""
                    }),
                    valueProps: (0, o.jsx)(C, {})
                })
            }
        },
        620595: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var o = n("920040");
            n("773670");
            var s = n("77078"),
                i = n("997511"),
                r = n("780421"),
                l = n("768064"),
                a = n("579574"),
                d = n("168503"),
                u = n("920460"),
                C = n("598347"),
                c = n("49111"),
                L = n("616542");

            function f(e) {
                let {
                    transitionState: t,
                    onClose: n,
                    analyticsLocation: f
                } = e, {
                    slide: N,
                    gotoNext: T,
                    gotoError: R,
                    handleWaitingForConnection: h,
                    handleAuthToken: p,
                    expectedCallbackState: _,
                    callbackData: O
                } = (0, i.useTwoWayLinkModalSlideManager)(f, c.PlatformTypes.CRUNCHYROLL);
                return (0, o.jsx)(s.ModalRoot, {
                    className: L.modal,
                    transitionState: t,
                    disableTrack: !0,
                    children: (0, o.jsxs)(s.Slides, {
                        activeSlide: N,
                        width: 408,
                        children: [(0, o.jsx)(s.Slide, {
                            id: C.TwoWayLinkModalSlideTypes.LANDING,
                            children: (0, o.jsx)(a.default, {
                                onContinue: T,
                                onClose: n
                            })
                        }), (0, o.jsx)(s.Slide, {
                            id: C.TwoWayLinkModalSlideTypes.PRE_CONNECT,
                            children: (0, o.jsx)(d.default, {
                                isWaitingForConnection: !1,
                                onWaitingForConnection: h,
                                onAuthToken: p,
                                onError: R,
                                onClose: n
                            })
                        }), (0, o.jsx)(s.Slide, {
                            id: C.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING,
                            children: (0, o.jsx)(d.default, {
                                isWaitingForConnection: !0,
                                expectedCallbackState: _,
                                onAuthToken: p,
                                onError: R,
                                onClose: n
                            })
                        }), (0, o.jsx)(s.Slide, {
                            id: C.TwoWayLinkModalSlideTypes.DISCORD_CONSENT,
                            children: (0, o.jsx)(r.default, {
                                authToken: O,
                                onContinue: T,
                                onError: R,
                                onClose: n
                            })
                        }), (0, o.jsx)(s.Slide, {
                            id: C.TwoWayLinkModalSlideTypes.ERROR,
                            children: (0, o.jsx)(l.default, {
                                onContinue: T,
                                onClose: n
                            })
                        }), (0, o.jsx)(s.Slide, {
                            id: C.TwoWayLinkModalSlideTypes.SUCCESS,
                            children: (0, o.jsx)(u.default, {
                                onClose: n
                            })
                        })]
                    })
                })
            }
        },
        168503: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var o = n("920040");
            n("773670");
            var s = n("79528"),
                i = n("655485"),
                r = n("49111"),
                l = n("782340"),
                a = n("850046"),
                d = n("229394");

            function u(e) {
                let {
                    isWaitingForConnection: t,
                    onWaitingForConnection: n,
                    expectedCallbackState: u,
                    onAuthToken: C,
                    onError: c,
                    onClose: L
                } = e, f = t ? (0, o.jsx)("img", {
                    src: d,
                    width: "168",
                    height: "124",
                    alt: ""
                }) : (0, o.jsx)("img", {
                    src: a,
                    width: "152",
                    height: "123",
                    alt: ""
                }), N = t ? l.default.Messages.CRUNCHYROLL_DETAILS_TITLE_WAITING : l.default.Messages.CRUNCHYROLL_DETAILS_TITLE, T = t ? l.default.Messages.CRUNCHYROLL_DETAILS_BODY_WAITING : l.default.Messages.CRUNCHYROLL_DETAILS_BODY;
                return (0, o.jsx)(s.TwoWayLinkPreConnect, {
                    platformType: r.PlatformTypes.CRUNCHYROLL,
                    isWaitingForConnection: t,
                    onWaitingForConnection: n,
                    expectedCallbackState: u,
                    onAuthToken: C,
                    onError: c,
                    onClose: L,
                    img: f,
                    title: N,
                    body: T,
                    redirectDestination: i.CRUNCHYROLL_LINK_DEST_ORIGIN
                })
            }
        },
        920460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var o = n("920040");
            n("773670");
            var s = n("77078"),
                i = n("701909"),
                r = n("451039"),
                l = n("49111"),
                a = n("782340"),
                d = n("583334"),
                u = n("997265");

            function C() {
                return (0, o.jsx)("div", {
                    className: d.getCrunchyrollApp,
                    children: (0, o.jsx)("div", {
                        className: d.getCrunchyrollAppBody,
                        children: (0, o.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: (0, o.jsx)(s.Anchor, {
                                href: i.default.getArticleURL(l.HelpdeskArticles.CRUNCHYROLL_CONNECTION),
                                children: a.default.Messages.LEARN_MORE
                            })
                        })
                    })
                })
            }

            function c(e) {
                let {
                    onClose: t
                } = e;
                return (0, o.jsx)(r.TwoWayLinkSuccess, {
                    img: (0, o.jsx)("img", {
                        src: u,
                        width: "224",
                        height: "104",
                        alt: ""
                    }),
                    title: a.default.Messages.CONNECT_CRUNCHYROLL_SUCCESS_TITLE,
                    body: a.default.Messages.CONNECT_CRUNCHYROLL_SUCCESS_BODY,
                    content: (0, o.jsx)(C, {}),
                    onClose: t
                })
            }
        },
        855670: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var o = n("920040");
            n("773670");
            var s = n("469563"),
                i = n("362847"),
                r = n("75196"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        className: i,
                        foreground: l,
                        ...a
                    } = e;
                    return (0, o.jsx)("svg", {
                        ...(0, r.default)(a),
                        className: i,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, o.jsx)("path", {
                            className: l,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.781 2.27293L14.081 5.7126H9.919L7.219 2.27293L8.781 1L12 5.10008L15.219 1L16.781 2.27293ZM4 6.73175H20C21.1 6.73175 22 7.649 22 8.77007V18.9617C22 20.0828 21.1 21 20 21H4C2.9 21 2 20.0828 2 18.9617V8.77007C2 7.649 2.9 6.73175 4 6.73175ZM4 18.9617H16V8.77007H4V18.9617ZM18 16.4138C18 16.9764 18.448 17.4329 19 17.4329C19.552 17.4329 20 16.9764 20 16.4138C20 15.8512 19.552 15.3946 19 15.3946C18.448 15.3946 18 15.8512 18 16.4138ZM18 11.318C18 11.8806 18.448 12.3371 19 12.3371C19.552 12.3371 20 11.8806 20 11.318C20 10.7554 19.552 10.2988 19 10.2988C18.448 10.2988 18 10.7554 18 11.318Z"
                        })
                    })
                }, i.TvIcon)
        }
    }
]);
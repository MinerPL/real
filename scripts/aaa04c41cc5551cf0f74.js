(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["66676"], {
        527826: function(e, t, a) {
            "use strict";
            e.exports = a.p + "adf75861421c2a6a6269.png"
        },
        143453: function(e, t, a) {
            "use strict";
            e.exports = a.p + "8da9ef44f0d6b8822df6.png"
        },
        429255: function(e, t, a) {
            "use strict";
            e.exports = a.p + "ce07dbd992d1a181b3a9.png"
        },
        516765: function(e, t, a) {
            "use strict";
            e.exports = a.p + "cafeec5a19e1bc310a2d.png"
        },
        961141: function(e, t, a) {
            "use strict";
            e.exports = a.p + "7a1bccb9d18c03cd2072.png"
        },
        307460: function(e, t, a) {
            "use strict";
            e.exports = a.p + "2b37a07b349d534b98eb.png"
        },
        598347: function(e, t, a) {
            "use strict";
            var n, s;
            a.r(t), a.d(t, {
                TwoWayLinkModalSlideTypes: function() {
                    return n
                }
            }), (s = n || (n = {})).LANDING = "landing", s.PRE_CONNECT = "pre-connect", s.PRE_CONNECT_WAITING = "pre-connect-waiting", s.DISCORD_CONSENT = "discord-consent", s.SUCCESS = "success", s.ERROR = "error"
        },
        755993: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                TwoWayLinkDiscordConsent: function() {
                    return T
                }
            });
            var n = a("37983"),
                s = a("884691"),
                o = a("627445"),
                r = a.n(o),
                l = a("77078"),
                i = a("619340"),
                d = a("605250"),
                c = a("33942"),
                u = a("145131"),
                x = a("782340"),
                C = a("429152");
            let N = new d.default("TwoWayLinkDiscordConsentWeb");

            function T(e) {
                let {
                    platformType: t,
                    clientId: a,
                    scopes: o,
                    authToken: d,
                    onContinue: T,
                    onError: f,
                    onClose: h,
                    redirectUri: m
                } = e, [p, E] = s.useState(!1), _ = s.useCallback(async e => {
                    let a, {
                            location: n
                        } = e,
                        {
                            callbackCode: s,
                            callbackState: o
                        } = d;
                    try {
                        a = await i.default.completeTwoWayLink(t, n, s, o)
                    } catch (e) {
                        N.error("".concat(t, " link error:"), e)
                    }
                    null != a ? T() : f()
                }, [t, d, T, f]), {
                    header: j,
                    body: g,
                    appDetails: O,
                    sendAuthorize: y
                } = (0, c.useOAuth2AuthorizeForm)({
                    clientId: a,
                    scopes: o,
                    responseType: "code",
                    callback: _,
                    isTrustedName: !0,
                    isEmbeddedFlow: !0,
                    redirectUri: m
                }), L = s.useCallback(() => {
                    r(null != y, "sendAuthorize not available"), E(!0), y(!0)
                }, [y]);
                return (0, n.jsxs)("div", {
                    className: C.container,
                    children: [null != h && (0, n.jsx)(l.ModalCloseButton, {
                        className: C.closeButton,
                        onClick: h
                    }), (0, n.jsxs)(l.Scroller, {
                        children: [(0, n.jsx)(l.ModalHeader, {
                            direction: u.default.Direction.VERTICAL,
                            className: C.header,
                            separator: !1,
                            children: (0, n.jsx)(l.Text, {
                                className: C.stepHeader,
                                variant: "text-xs/bold",
                                color: "header-secondary",
                                children: x.default.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                                    number: 2,
                                    total: 2
                                })
                            })
                        }), (0, n.jsxs)("div", {
                            className: C.discordConsentBody,
                            children: [j, g, O]
                        }), (0, n.jsx)(l.ModalFooter, {
                            className: C.footer,
                            children: (0, n.jsx)(l.Button, {
                                className: C.footerButton,
                                color: l.Button.Colors.BRAND,
                                submitting: p,
                                onClick: L,
                                children: x.default.Messages.AUTHORIZE_AND_CONTINUE
                            })
                        })]
                    })]
                })
            }
        },
        871988: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                TwoWayLinkError: function() {
                    return c
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("77078"),
                o = a("145131"),
                r = a("758710"),
                l = a("782340"),
                i = a("429152"),
                d = a("143453");

            function c(e) {
                let {
                    onContinue: t,
                    onClose: a,
                    title: c,
                    body: u
                } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(s.ModalHeader, {
                        direction: o.default.Direction.VERTICAL,
                        className: i.header,
                        separator: !1,
                        children: [(0, n.jsx)("img", {
                            src: d,
                            className: i.illustration,
                            width: "254",
                            height: "127",
                            alt: ""
                        }), (0, n.jsx)(s.Heading, {
                            className: i.title,
                            variant: "heading-xl/extrabold",
                            children: c
                        }), null != a && (0, n.jsx)(s.ModalCloseButton, {
                            className: i.closeButton,
                            onClick: a
                        })]
                    }), (0, n.jsx)(s.ModalContent, {
                        className: i.body,
                        paddingFix: !1,
                        children: (0, n.jsx)(s.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: u
                        })
                    }), (0, n.jsx)(s.ModalFooter, {
                        className: i.footer,
                        children: (0, n.jsxs)(s.Button, {
                            className: i.footerButton,
                            color: s.Button.Colors.BRAND,
                            onClick: t,
                            children: [l.default.Messages.TRY_AGAIN, (0, n.jsx)(r.default, {
                                className: i.launchIcon,
                                width: "16",
                                height: "16"
                            })]
                        })
                    })]
                })
            }
        },
        634644: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                TwoWayLinkLanding: function() {
                    return c
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("446674"),
                o = a("77078"),
                r = a("47319"),
                l = a("145131"),
                i = a("782340"),
                d = a("429152");

            function c(e) {
                let {
                    platformType: t,
                    onContinue: a,
                    onClose: c,
                    img: u,
                    headerConnect: x,
                    headerReconnect: C,
                    body: N,
                    learnMoreLink: T,
                    valueProps: f
                } = e, h = (0, s.useStateFromStores)([r.default], () => {
                    let e = r.default.getAccount(null, t);
                    return (null == e ? void 0 : e.twoWayLink) === !1
                });
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(o.ModalHeader, {
                        direction: l.default.Direction.VERTICAL,
                        className: d.header,
                        separator: !1,
                        children: [(0, n.jsxs)("div", {
                            className: d.illustration,
                            children: [u, " "]
                        }), (0, n.jsx)(o.Heading, {
                            className: d.title,
                            variant: "heading-xl/extrabold",
                            children: h && null != C ? C : x
                        }), (0, n.jsx)(o.ModalCloseButton, {
                            className: d.closeButton,
                            onClick: c
                        })]
                    }), (0, n.jsxs)(o.ModalContent, {
                        className: d.body,
                        paddingFix: !1,
                        children: [(0, n.jsx)(o.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: N
                        }), (0, n.jsx)("div", {
                            className: d.valueProps,
                            children: f
                        }), null != T ? (0, n.jsx)(o.Text, {
                            tag: "p",
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: i.default.Messages.CONNECT_CONSOLE_LANDING_BODY_LEARN_MORE.format({
                                helpCenterLink: T
                            })
                        }) : null]
                    }), (0, n.jsx)(o.ModalFooter, {
                        className: d.footer,
                        children: (0, n.jsx)(o.Button, {
                            className: d.footerButton,
                            color: o.Button.Colors.BRAND,
                            onClick: a,
                            children: i.default.Messages.CONTINUE
                        })
                    })]
                })
            }
        },
        79528: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                TwoWayLinkPreConnect: function() {
                    return m
                }
            });
            var n = a("37983"),
                s = a("884691"),
                o = a("627445"),
                r = a.n(o),
                l = a("382825"),
                i = a("77078"),
                d = a("913144"),
                c = a("535013"),
                u = a("926994"),
                x = a("605250"),
                C = a("145131"),
                N = a("758710"),
                T = a("782340"),
                f = a("429152");
            let h = new x.default("TwoWayLink");

            function m(e) {
                let {
                    platformType: t,
                    isWaitingForConnection: a,
                    onWaitingForConnection: o,
                    expectedCallbackState: x,
                    onAuthToken: m,
                    onError: p,
                    onClose: E,
                    img: _,
                    title: j,
                    body: g,
                    redirectDestination: O
                } = e, y = s.useCallback(async () => {
                    let e;
                    try {
                        if (e = await (0, u.openProviderAuthorize)(t, {
                                twoWayLinkType: l.TwoWayLinkType.DESKTOP
                            }), null == e) throw Error("missing authorizeURL")
                    } catch (e) {
                        h.error("Error opening provider authorize page", e), p();
                        return
                    }
                    let {
                        state: a
                    } = (0, c.getCallbackParamsFromURL)(e);
                    r(null != a, "Authorize URL state query parameter must be present"), null == o || o(a)
                }, [t, p, o]), L = s.useCallback(e => {
                    let {
                        callbackCode: a,
                        callbackState: n
                    } = e;
                    if (n !== x) {
                        h.warn("".concat(t, " link: received mismatching callback state!"));
                        return
                    }
                    m({
                        callbackCode: a,
                        callbackState: n
                    })
                }, [t, x, m]);
                return s.useEffect(() => (d.default.subscribe("USER_CONNECTIONS_LINK_CALLBACK", L), () => {
                    d.default.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", L)
                }), [L]), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(i.ModalHeader, {
                        direction: C.default.Direction.VERTICAL,
                        className: f.header,
                        separator: !1,
                        children: [(0, n.jsx)(i.Text, {
                            className: f.stepHeader,
                            variant: "text-xs/bold",
                            color: "header-secondary",
                            children: T.default.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                                number: 1,
                                total: 2
                            })
                        }), (0, n.jsxs)("div", {
                            className: f.illustration,
                            children: [_, " "]
                        }), (0, n.jsx)(i.Heading, {
                            className: f.title,
                            variant: "heading-xl/extrabold",
                            children: j
                        }), null != E && (0, n.jsx)(i.ModalCloseButton, {
                            className: f.closeButton,
                            onClick: E
                        })]
                    }), (0, n.jsxs)(i.ModalContent, {
                        className: f.body,
                        paddingFix: !1,
                        children: [(0, n.jsx)(i.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: g
                        }), !a && (0, n.jsx)(i.Text, {
                            tag: "p",
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: T.default.Messages.CONSOLE_REDIRECT_NOTICE.format({
                                redirectUrl: O
                            })
                        })]
                    }), (0, n.jsx)(i.ModalFooter, {
                        className: f.footer,
                        children: (0, n.jsxs)(i.Button, {
                            className: f.footerButton,
                            color: a ? i.Button.Colors.PRIMARY : i.Button.Colors.BRAND,
                            onClick: y,
                            children: [a ? T.default.Messages.RETRY : T.default.Messages.CONTINUE, (0, n.jsx)(N.default, {
                                className: f.launchIcon,
                                width: "16",
                                height: "16"
                            })]
                        })
                    })]
                })
            }
        },
        451039: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                TwoWayLinkSuccess: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("77078"),
                o = a("145131"),
                r = a("782340"),
                l = a("429152");

            function i(e) {
                let {
                    onClose: t,
                    img: a,
                    title: i,
                    body: d,
                    content: c
                } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(s.ModalHeader, {
                        direction: o.default.Direction.VERTICAL,
                        className: l.header,
                        separator: !1,
                        children: [(0, n.jsx)("div", {
                            className: l.illustration,
                            children: a
                        }), (0, n.jsx)(s.Heading, {
                            className: l.title,
                            variant: "heading-xl/extrabold",
                            children: i
                        }), (0, n.jsx)(s.ModalCloseButton, {
                            className: l.closeButton,
                            onClick: t
                        })]
                    }), (0, n.jsxs)(s.ModalContent, {
                        className: l.body,
                        paddingFix: !1,
                        children: [(0, n.jsx)(s.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: d
                        }), c]
                    }), (0, n.jsx)(s.ModalFooter, {
                        className: l.footer,
                        children: (0, n.jsx)(s.Button, {
                            className: l.footerButton,
                            color: s.Button.Colors.BRAND,
                            onClick: t,
                            children: r.default.Messages.DONE
                        })
                    })]
                })
            }
        },
        106390: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                ValueProp: function() {
                    return r
                },
                BulletedValueProp: function() {
                    return l
                },
                ValuePropContainer: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("77078"),
                o = a("429152");

            function r(e) {
                let {
                    text: t,
                    children: a
                } = e;
                return (0, n.jsxs)("div", {
                    className: o.valueProp,
                    children: [(0, n.jsx)("div", {
                        className: o.valuePropIconContainer,
                        children: a
                    }), (0, n.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        children: t
                    })]
                })
            }

            function l(e) {
                let {
                    title: t,
                    bulletPoints: a,
                    icon: r
                } = e;
                return (0, n.jsxs)("div", {
                    className: o.bulletedValueProp,
                    children: [(0, n.jsx)("div", {
                        className: o.valuePropIconContainer,
                        children: r
                    }), (0, n.jsxs)("div", {
                        className: o.bulletPointsContainer,
                        children: [(0, n.jsx)(s.Text, {
                            variant: "text-md/bold",
                            color: "header-primary",
                            children: t
                        }), (0, n.jsx)("div", {
                            className: o.bulletPoints,
                            children: a.map(e => (0, n.jsxs)("div", {
                                className: o.bulletPoint,
                                children: [(0, n.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-secondary",
                                    children: "•"
                                }), (0, n.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-secondary",
                                    className: o.bulletPointText,
                                    children: e
                                })]
                            }, e))
                        })]
                    })]
                })
            }

            function i(e) {
                let {
                    children: t
                } = e;
                return (0, n.jsx)("div", {
                    className: o.valuePropContainer,
                    children: t
                })
            }
        },
        997511: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useTwoWayLinkModalSlideManager: function() {
                    return i
                }
            });
            var n = a("884691"),
                s = a("84339"),
                o = a("599110"),
                r = a("598347"),
                l = a("49111");

            function i(e, t) {
                let [a, i] = n.useState(r.TwoWayLinkModalSlideTypes.LANDING), d = (0, s.default)(a), [c, u] = n.useState(null), [x, C] = n.useState(null), N = n.useCallback(() => {
                    switch (a) {
                        case r.TwoWayLinkModalSlideTypes.LANDING:
                            i(r.TwoWayLinkModalSlideTypes.PRE_CONNECT);
                            break;
                        case r.TwoWayLinkModalSlideTypes.DISCORD_CONSENT:
                            i(r.TwoWayLinkModalSlideTypes.SUCCESS);
                            break;
                        case r.TwoWayLinkModalSlideTypes.ERROR:
                            i(r.TwoWayLinkModalSlideTypes.PRE_CONNECT)
                    }
                }, [a]), T = n.useCallback(() => {
                    u(null), i(r.TwoWayLinkModalSlideTypes.ERROR)
                }, []), f = n.useCallback(e => {
                    u(e), i(r.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING)
                }, []), h = n.useCallback(e => {
                    u(null), C(e), i(r.TwoWayLinkModalSlideTypes.DISCORD_CONSENT)
                }, []);
                return n.useEffect(() => {
                    a !== d && o.default.track(l.AnalyticEvents.ACCOUNT_LINK_STEP, {
                        location_stack: e,
                        previous_step: d,
                        current_step: a,
                        platform_type: t
                    })
                }, [a, d, e, t]), {
                    slide: a,
                    gotoNext: N,
                    gotoError: T,
                    handleWaitingForConnection: f,
                    handleAuthToken: h,
                    expectedCallbackState: c,
                    callbackData: x
                }
            }
        },
        458250: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("450638"),
                o = a("755993"),
                r = a("49111"),
                l = a("171644");

            function i(e) {
                let {
                    authToken: t,
                    onContinue: a,
                    onError: i,
                    onClose: d
                } = e;
                return (0, n.jsx)(o.TwoWayLinkDiscordConsent, {
                    platformType: r.PlatformTypes.XBOX,
                    clientId: s.ConsoleOAuthApplications.XBOX_APPLICATION_ID,
                    scopes: l.XBOX_CLIENT_SCOPES,
                    authToken: t,
                    onContinue: a,
                    onError: i,
                    onClose: d
                })
            }
        },
        268767: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("871988"),
                o = a("782340");

            function r(e) {
                let {
                    onContinue: t,
                    onClose: a
                } = e;
                return (0, n.jsx)(s.TwoWayLinkError, {
                    title: o.default.Messages.CONNECT_XBOX_ERROR_TITLE,
                    body: o.default.Messages.CONNECT_XBOX_ERROR_BODY,
                    onClose: a,
                    onContinue: t
                })
            }
        },
        867528: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return C
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("351368"),
                o = a("368121"),
                r = a("701909"),
                l = a("634644"),
                i = a("106390"),
                d = a("49111"),
                c = a("782340"),
                u = a("961141");

            function x() {
                return (0, n.jsxs)(i.ValuePropContainer, {
                    children: [(0, n.jsx)(i.ValueProp, {
                        text: c.default.Messages.CONNECT_XBOX_TRANSFER_VOICE_VALUE_PROP,
                        children: (0, n.jsx)(o.default, {})
                    }), (0, n.jsx)(i.ValueProp, {
                        text: c.default.Messages.CONNECT_XBOX_DISPLAY_GAME_VALUE_PROP,
                        children: (0, n.jsx)(s.default, {})
                    })]
                })
            }

            function C(e) {
                let {
                    onContinue: t,
                    onClose: a
                } = e, s = r.default.getArticleURL(d.HelpdeskArticles.XBOX_CONNECTION);
                return (0, n.jsx)(l.TwoWayLinkLanding, {
                    platformType: d.PlatformTypes.XBOX,
                    headerConnect: c.default.Messages.CONNECT_XBOX_LANDING_TITLE,
                    headerReconnect: c.default.Messages.RECONNECT_XBOX_LANDING_TITLE,
                    body: c.default.Messages.CONNECT_XBOX_LANDING_BODY,
                    learnMoreLink: s,
                    onClose: a,
                    onContinue: t,
                    img: (0, n.jsx)("img", {
                        src: u,
                        width: 234,
                        height: 152,
                        alt: ""
                    }),
                    valueProps: (0, n.jsx)(x, {})
                })
            }
        },
        194167: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return N
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("77078"),
                o = a("997511"),
                r = a("458250"),
                l = a("268767"),
                i = a("867528"),
                d = a("572235"),
                c = a("590882"),
                u = a("598347"),
                x = a("49111"),
                C = a("429152");

            function N(e) {
                let {
                    transitionState: t,
                    onClose: a,
                    analyticsLocation: N
                } = e, {
                    slide: T,
                    gotoNext: f,
                    gotoError: h,
                    handleWaitingForConnection: m,
                    handleAuthToken: p,
                    expectedCallbackState: E,
                    callbackData: _
                } = (0, o.useTwoWayLinkModalSlideManager)(N, x.PlatformTypes.XBOX);
                return (0, n.jsx)(s.ModalRoot, {
                    className: C.modal,
                    transitionState: t,
                    disableTrack: !0,
                    children: (0, n.jsxs)(s.Slides, {
                        activeSlide: T,
                        width: 408,
                        children: [(0, n.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.LANDING,
                            children: (0, n.jsx)(i.default, {
                                onContinue: f,
                                onClose: a
                            })
                        }), (0, n.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.PRE_CONNECT,
                            children: (0, n.jsx)(d.default, {
                                isWaitingForConnection: !1,
                                onWaitingForConnection: m,
                                onAuthToken: p,
                                onError: h,
                                onClose: a
                            })
                        }), (0, n.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING,
                            children: (0, n.jsx)(d.default, {
                                isWaitingForConnection: !0,
                                expectedCallbackState: E,
                                onAuthToken: p,
                                onError: h,
                                onClose: a
                            })
                        }), (0, n.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.DISCORD_CONSENT,
                            children: (0, n.jsx)(r.default, {
                                authToken: _,
                                onContinue: f,
                                onError: h,
                                onClose: a
                            })
                        }), (0, n.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.ERROR,
                            children: (0, n.jsx)(l.default, {
                                onContinue: f,
                                onClose: a
                            })
                        }), (0, n.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.SUCCESS,
                            children: (0, n.jsx)(c.default, {
                                onClose: a
                            })
                        })]
                    })
                })
            }
        },
        572235: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("79528"),
                o = a("49111"),
                r = a("171644"),
                l = a("782340"),
                i = a("429255"),
                d = a("516765");

            function c(e) {
                let {
                    isWaitingForConnection: t,
                    onWaitingForConnection: a,
                    expectedCallbackState: c,
                    onAuthToken: u,
                    onError: x,
                    onClose: C
                } = e, N = t ? (0, n.jsx)("img", {
                    src: d,
                    width: "168",
                    height: "124",
                    alt: ""
                }) : (0, n.jsx)("img", {
                    src: i,
                    width: "152",
                    height: "124",
                    alt: ""
                }), T = t ? l.default.Messages.XBOX_DETAILS_TITLE_WAITING : l.default.Messages.XBOX_DETAILS_TITLE, f = t ? l.default.Messages.XBOX_DETAILS_BODY_WAITING : l.default.Messages.XBOX_DETAILS_BODY;
                return (0, n.jsx)(s.TwoWayLinkPreConnect, {
                    platformType: o.PlatformTypes.XBOX,
                    isWaitingForConnection: t,
                    onWaitingForConnection: a,
                    expectedCallbackState: c,
                    onAuthToken: u,
                    onError: x,
                    onClose: C,
                    img: N,
                    title: T,
                    body: f,
                    redirectDestination: r.XBOX_LINK_DEST_ORIGIN
                })
            }
        },
        590882: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return T
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("77078"),
                o = a("376556"),
                r = a("671278"),
                l = a("701909"),
                i = a("451039"),
                d = a("49111"),
                c = a("171644"),
                u = a("782340"),
                x = a("295398"),
                C = a("307460");

            function N() {
                return (0, n.jsxs)("div", {
                    className: x.getXboxApp,
                    children: [(0, n.jsxs)("div", {
                        className: x.getXboxAppBody,
                        children: [(0, n.jsxs)(s.Heading, {
                            className: x.getXboxAppHeading,
                            variant: "text-lg/semibold",
                            children: [(0, n.jsx)("div", {
                                className: x.xboxLogoBox,
                                children: (0, n.jsx)("img", {
                                    src: o.default.get(d.PlatformTypes.XBOX).icon.whiteSVG,
                                    alt: ""
                                })
                            }), u.default.Messages.GET_XBOX_APP]
                        }), (0, n.jsx)(s.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: u.default.Messages.CONNECT_XBOX_SUCCESS_APP_BODY
                        }), (0, n.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: (0, n.jsx)(s.Anchor, {
                                href: l.default.getArticleURL(d.HelpdeskArticles.XBOX_CONNECTION),
                                children: u.default.Messages.LEARN_MORE
                            })
                        })]
                    }), (0, n.jsx)(r.default, {
                        className: x.getXboxAppQR,
                        text: c.XBOX_APP_WEB_LINK,
                        size: 90
                    })]
                })
            }

            function T(e) {
                let {
                    onClose: t
                } = e;
                return (0, n.jsx)(i.TwoWayLinkSuccess, {
                    img: (0, n.jsx)("img", {
                        src: C,
                        width: "232",
                        height: "113",
                        alt: ""
                    }),
                    title: u.default.Messages.CONNECT_XBOX_SUCCESS_TITLE,
                    body: u.default.Messages.CONNECT_XBOX_SUCCESS_BODY,
                    content: (0, n.jsx)(N, {}),
                    onClose: t
                })
            }
        }
    }
]);
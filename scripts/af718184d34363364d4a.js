(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94530"], {
        143453: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8da9ef44f0d6b8822df6.png"
        },
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
        655485: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CRUNCHYROLL_LINK_DEST_ORIGIN: function() {
                    return s
                },
                CRUNCHYROLL_CLIENT_ID: function() {
                    return o
                },
                CRUNCHYROLL_CLIENT_SCOPES: function() {
                    return r
                }
            });
            var a = n("843455");
            let s = "https://crunchyroll.com",
                o = "981509069309354054",
                r = [a.OAuth2Scopes.ACTIVITIES_WRITE, a.OAuth2Scopes.EMAIL, a.OAuth2Scopes.IDENTIFY]
        },
        598347: function(e, t, n) {
            "use strict";
            var a, s;
            n.r(t), n.d(t, {
                TwoWayLinkModalSlideTypes: function() {
                    return a
                }
            }), (s = a || (a = {})).LANDING = "landing", s.PRE_CONNECT = "pre-connect", s.PRE_CONNECT_WAITING = "pre-connect-waiting", s.DISCORD_CONSENT = "discord-consent", s.SUCCESS = "success", s.ERROR = "error"
        },
        755993: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TwoWayLinkDiscordConsent: function() {
                    return h
                }
            });
            var a = n("37983"),
                s = n("884691"),
                o = n("627445"),
                r = n.n(o),
                l = n("77078"),
                i = n("619340"),
                c = n("605250"),
                d = n("33942"),
                u = n("145131"),
                C = n("782340"),
                N = n("429152");
            let T = new c.default("TwoWayLinkDiscordConsentWeb");

            function h(e) {
                let {
                    platformType: t,
                    clientId: n,
                    scopes: o,
                    authToken: c,
                    onContinue: h,
                    onError: x,
                    onClose: f,
                    redirectUri: L
                } = e, [m, R] = s.useState(!1), p = s.useCallback(async e => {
                    let n, {
                            location: a
                        } = e,
                        {
                            callbackCode: s,
                            callbackState: o
                        } = c;
                    try {
                        n = await i.default.completeTwoWayLink(t, a, s, o)
                    } catch (e) {
                        T.error("".concat(t, " link error:"), e)
                    }
                    null != n ? h() : x()
                }, [t, c, h, x]), {
                    header: E,
                    body: j,
                    appDetails: y,
                    sendAuthorize: _
                } = (0, d.useOAuth2AuthorizeForm)({
                    clientId: n,
                    scopes: o,
                    responseType: "code",
                    callback: p,
                    isTrustedName: !0,
                    isEmbeddedFlow: !0,
                    redirectUri: L
                }), O = s.useCallback(() => {
                    r(null != _, "sendAuthorize not available"), R(!0), _(!0)
                }, [_]);
                return (0, a.jsxs)("div", {
                    className: N.container,
                    children: [null != f && (0, a.jsx)(l.ModalCloseButton, {
                        className: N.closeButton,
                        onClick: f
                    }), (0, a.jsxs)(l.Scroller, {
                        children: [(0, a.jsx)(l.ModalHeader, {
                            direction: u.default.Direction.VERTICAL,
                            className: N.header,
                            separator: !1,
                            children: (0, a.jsx)(l.Text, {
                                className: N.stepHeader,
                                variant: "text-xs/bold",
                                color: "header-secondary",
                                children: C.default.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                                    number: 2,
                                    total: 2
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            className: N.discordConsentBody,
                            children: [E, j, y]
                        }), (0, a.jsx)(l.ModalFooter, {
                            className: N.footer,
                            children: (0, a.jsx)(l.Button, {
                                className: N.footerButton,
                                color: l.Button.Colors.BRAND,
                                submitting: m,
                                onClick: O,
                                children: C.default.Messages.AUTHORIZE_AND_CONTINUE
                            })
                        })]
                    })]
                })
            }
        },
        871988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TwoWayLinkError: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                o = n("145131"),
                r = n("758710"),
                l = n("782340"),
                i = n("429152"),
                c = n("143453");

            function d(e) {
                let {
                    onContinue: t,
                    onClose: n,
                    title: d,
                    body: u
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(s.ModalHeader, {
                        direction: o.default.Direction.VERTICAL,
                        className: i.header,
                        separator: !1,
                        children: [(0, a.jsx)("img", {
                            src: c,
                            className: i.illustration,
                            width: "254",
                            height: "127",
                            alt: ""
                        }), (0, a.jsx)(s.Heading, {
                            className: i.title,
                            variant: "heading-xl/extrabold",
                            children: d
                        }), null != n && (0, a.jsx)(s.ModalCloseButton, {
                            className: i.closeButton,
                            onClick: n
                        })]
                    }), (0, a.jsx)(s.ModalContent, {
                        className: i.body,
                        paddingFix: !1,
                        children: (0, a.jsx)(s.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: u
                        })
                    }), (0, a.jsx)(s.ModalFooter, {
                        className: i.footer,
                        children: (0, a.jsxs)(s.Button, {
                            className: i.footerButton,
                            color: s.Button.Colors.BRAND,
                            onClick: t,
                            children: [l.default.Messages.TRY_AGAIN, (0, a.jsx)(r.default, {
                                className: i.launchIcon,
                                width: "16",
                                height: "16"
                            })]
                        })
                    })]
                })
            }
        },
        634644: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TwoWayLinkLanding: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                o = n("77078"),
                r = n("47319"),
                l = n("145131"),
                i = n("782340"),
                c = n("429152");

            function d(e) {
                let {
                    platformType: t,
                    onContinue: n,
                    onClose: d,
                    img: u,
                    headerConnect: C,
                    headerReconnect: N,
                    body: T,
                    learnMoreLink: h,
                    valueProps: x
                } = e, f = (0, s.useStateFromStores)([r.default], () => {
                    let e = r.default.getAccount(null, t);
                    return (null == e ? void 0 : e.twoWayLink) === !1
                });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(o.ModalHeader, {
                        direction: l.default.Direction.VERTICAL,
                        className: c.header,
                        separator: !1,
                        children: [(0, a.jsxs)("div", {
                            className: c.illustration,
                            children: [u, " "]
                        }), (0, a.jsx)(o.Heading, {
                            className: c.title,
                            variant: "heading-xl/extrabold",
                            children: f && null != N ? N : C
                        }), (0, a.jsx)(o.ModalCloseButton, {
                            className: c.closeButton,
                            onClick: d
                        })]
                    }), (0, a.jsxs)(o.ModalContent, {
                        className: c.body,
                        paddingFix: !1,
                        children: [(0, a.jsx)(o.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: T
                        }), (0, a.jsx)("div", {
                            className: c.valueProps,
                            children: x
                        }), null != h ? (0, a.jsx)(o.Text, {
                            tag: "p",
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: i.default.Messages.CONNECT_CONSOLE_LANDING_BODY_LEARN_MORE.format({
                                helpCenterLink: h
                            })
                        }) : null]
                    }), (0, a.jsx)(o.ModalFooter, {
                        className: c.footer,
                        children: (0, a.jsx)(o.Button, {
                            className: c.footerButton,
                            color: o.Button.Colors.BRAND,
                            onClick: n,
                            children: i.default.Messages.CONTINUE
                        })
                    })]
                })
            }
        },
        79528: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TwoWayLinkPreConnect: function() {
                    return L
                }
            });
            var a = n("37983"),
                s = n("884691"),
                o = n("627445"),
                r = n.n(o),
                l = n("382825"),
                i = n("77078"),
                c = n("913144"),
                d = n("535013"),
                u = n("926994"),
                C = n("605250"),
                N = n("145131"),
                T = n("758710"),
                h = n("782340"),
                x = n("429152");
            let f = new C.default("TwoWayLink");

            function L(e) {
                let {
                    platformType: t,
                    isWaitingForConnection: n,
                    onWaitingForConnection: o,
                    expectedCallbackState: C,
                    onAuthToken: L,
                    onError: m,
                    onClose: R,
                    img: p,
                    title: E,
                    body: j,
                    redirectDestination: y
                } = e, _ = s.useCallback(async () => {
                    let e;
                    try {
                        if (e = await (0, u.openProviderAuthorize)(t, {
                                twoWayLinkType: l.TwoWayLinkType.DESKTOP
                            }), null == e) throw Error("missing authorizeURL")
                    } catch (e) {
                        f.error("Error opening provider authorize page", e), m();
                        return
                    }
                    let {
                        state: n
                    } = (0, d.getCallbackParamsFromURL)(e);
                    r(null != n, "Authorize URL state query parameter must be present"), null == o || o(n)
                }, [t, m, o]), O = s.useCallback(e => {
                    let {
                        callbackCode: n,
                        callbackState: a
                    } = e;
                    if (a !== C) {
                        f.warn("".concat(t, " link: received mismatching callback state!"));
                        return
                    }
                    L({
                        callbackCode: n,
                        callbackState: a
                    })
                }, [t, C, L]);
                return s.useEffect(() => (c.default.subscribe("USER_CONNECTIONS_LINK_CALLBACK", O), () => {
                    c.default.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", O)
                }), [O]), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(i.ModalHeader, {
                        direction: N.default.Direction.VERTICAL,
                        className: x.header,
                        separator: !1,
                        children: [(0, a.jsx)(i.Text, {
                            className: x.stepHeader,
                            variant: "text-xs/bold",
                            color: "header-secondary",
                            children: h.default.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                                number: 1,
                                total: 2
                            })
                        }), (0, a.jsxs)("div", {
                            className: x.illustration,
                            children: [p, " "]
                        }), (0, a.jsx)(i.Heading, {
                            className: x.title,
                            variant: "heading-xl/extrabold",
                            children: E
                        }), null != R && (0, a.jsx)(i.ModalCloseButton, {
                            className: x.closeButton,
                            onClick: R
                        })]
                    }), (0, a.jsxs)(i.ModalContent, {
                        className: x.body,
                        paddingFix: !1,
                        children: [(0, a.jsx)(i.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: j
                        }), !n && (0, a.jsx)(i.Text, {
                            tag: "p",
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: h.default.Messages.CONSOLE_REDIRECT_NOTICE.format({
                                redirectUrl: y
                            })
                        })]
                    }), (0, a.jsx)(i.ModalFooter, {
                        className: x.footer,
                        children: (0, a.jsxs)(i.Button, {
                            className: x.footerButton,
                            color: n ? i.Button.Colors.PRIMARY : i.Button.Colors.BRAND,
                            onClick: _,
                            children: [n ? h.default.Messages.RETRY : h.default.Messages.CONTINUE, (0, a.jsx)(T.default, {
                                className: x.launchIcon,
                                width: "16",
                                height: "16"
                            })]
                        })
                    })]
                })
            }
        },
        451039: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TwoWayLinkSuccess: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                o = n("145131"),
                r = n("782340"),
                l = n("429152");

            function i(e) {
                let {
                    onClose: t,
                    img: n,
                    title: i,
                    body: c,
                    content: d
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(s.ModalHeader, {
                        direction: o.default.Direction.VERTICAL,
                        className: l.header,
                        separator: !1,
                        children: [(0, a.jsx)("div", {
                            className: l.illustration,
                            children: n
                        }), (0, a.jsx)(s.Heading, {
                            className: l.title,
                            variant: "heading-xl/extrabold",
                            children: i
                        }), (0, a.jsx)(s.ModalCloseButton, {
                            className: l.closeButton,
                            onClick: t
                        })]
                    }), (0, a.jsxs)(s.ModalContent, {
                        className: l.body,
                        paddingFix: !1,
                        children: [(0, a.jsx)(s.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: c
                        }), d]
                    }), (0, a.jsx)(s.ModalFooter, {
                        className: l.footer,
                        children: (0, a.jsx)(s.Button, {
                            className: l.footerButton,
                            color: s.Button.Colors.BRAND,
                            onClick: t,
                            children: r.default.Messages.DONE
                        })
                    })]
                })
            }
        },
        106390: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                o = n("429152");

            function r(e) {
                let {
                    text: t,
                    children: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: o.valueProp,
                    children: [(0, a.jsx)("div", {
                        className: o.valuePropIconContainer,
                        children: n
                    }), (0, a.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        children: t
                    })]
                })
            }

            function l(e) {
                let {
                    title: t,
                    bulletPoints: n,
                    icon: r
                } = e;
                return (0, a.jsxs)("div", {
                    className: o.bulletedValueProp,
                    children: [(0, a.jsx)("div", {
                        className: o.valuePropIconContainer,
                        children: r
                    }), (0, a.jsxs)("div", {
                        className: o.bulletPointsContainer,
                        children: [(0, a.jsx)(s.Text, {
                            variant: "text-md/bold",
                            color: "header-primary",
                            children: t
                        }), (0, a.jsx)("div", {
                            className: o.bulletPoints,
                            children: n.map(e => (0, a.jsxs)("div", {
                                className: o.bulletPoint,
                                children: [(0, a.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-secondary",
                                    children: "•"
                                }), (0, a.jsx)(s.Text, {
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
                return (0, a.jsx)("div", {
                    className: o.valuePropContainer,
                    children: t
                })
            }
        },
        780421: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("755993"),
                o = n("655485"),
                r = n("49111");

            function l(e) {
                let {
                    authToken: t,
                    onContinue: n,
                    onError: l,
                    onClose: i
                } = e;
                return (0, a.jsx)(s.TwoWayLinkDiscordConsent, {
                    platformType: r.PlatformTypes.CRUNCHYROLL,
                    clientId: o.CRUNCHYROLL_CLIENT_ID,
                    scopes: o.CRUNCHYROLL_CLIENT_SCOPES,
                    authToken: t,
                    onContinue: n,
                    onError: l,
                    onClose: i
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
            var a = n("37983");
            n("884691");
            var s = n("871988"),
                o = n("782340");

            function r(e) {
                let {
                    onContinue: t,
                    onClose: n
                } = e;
                return (0, a.jsx)(s.TwoWayLinkError, {
                    title: o.default.Messages.CONNECT_CRUNCHYROLL_ERROR_TITLE,
                    body: o.default.Messages.CONNECT_CRUNCHYROLL_ERROR_BODY,
                    onClose: n,
                    onContinue: t
                })
            }
        },
        579574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("855670"),
                o = n("701909"),
                r = n("634644"),
                l = n("106390"),
                i = n("49111"),
                c = n("782340"),
                d = n("140413");

            function u() {
                return (0, a.jsx)(l.ValuePropContainer, {
                    children: (0, a.jsx)(l.ValueProp, {
                        text: c.default.Messages.CONNECT_CRUNCHYROLL_DISPLAY_SHOW_VALUE_PROP,
                        children: (0, a.jsx)(s.default, {})
                    })
                })
            }

            function C(e) {
                let {
                    onContinue: t,
                    onClose: n
                } = e, s = o.default.getArticleURL(i.HelpdeskArticles.CRUNCHYROLL_CONNECTION);
                return (0, a.jsx)(r.TwoWayLinkLanding, {
                    platformType: i.PlatformTypes.CRUNCHYROLL,
                    headerConnect: c.default.Messages.CONNECT_CRUNCHYROLL_LANDING_TITLE,
                    body: c.default.Messages.CONNECT_CRUNCHYROLL_LANDING_BODY,
                    learnMoreLink: s,
                    onClose: n,
                    onContinue: t,
                    img: (0, a.jsx)("img", {
                        src: d,
                        width: 234,
                        height: 152,
                        alt: ""
                    }),
                    valueProps: (0, a.jsx)(u, {})
                })
            }
        },
        620595: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                o = n("997511"),
                r = n("780421"),
                l = n("768064"),
                i = n("579574"),
                c = n("168503"),
                d = n("920460"),
                u = n("598347"),
                C = n("49111"),
                N = n("429152");

            function T(e) {
                let {
                    transitionState: t,
                    onClose: n,
                    analyticsLocation: T
                } = e, {
                    slide: h,
                    gotoNext: x,
                    gotoError: f,
                    handleWaitingForConnection: L,
                    handleAuthToken: m,
                    expectedCallbackState: R,
                    callbackData: p
                } = (0, o.useTwoWayLinkModalSlideManager)(T, C.PlatformTypes.CRUNCHYROLL);
                return (0, a.jsx)(s.ModalRoot, {
                    className: N.modal,
                    transitionState: t,
                    disableTrack: !0,
                    children: (0, a.jsxs)(s.Slides, {
                        activeSlide: h,
                        width: 408,
                        children: [(0, a.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.LANDING,
                            children: (0, a.jsx)(i.default, {
                                onContinue: x,
                                onClose: n
                            })
                        }), (0, a.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.PRE_CONNECT,
                            children: (0, a.jsx)(c.default, {
                                isWaitingForConnection: !1,
                                onWaitingForConnection: L,
                                onAuthToken: m,
                                onError: f,
                                onClose: n
                            })
                        }), (0, a.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING,
                            children: (0, a.jsx)(c.default, {
                                isWaitingForConnection: !0,
                                expectedCallbackState: R,
                                onAuthToken: m,
                                onError: f,
                                onClose: n
                            })
                        }), (0, a.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.DISCORD_CONSENT,
                            children: (0, a.jsx)(r.default, {
                                authToken: p,
                                onContinue: x,
                                onError: f,
                                onClose: n
                            })
                        }), (0, a.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.ERROR,
                            children: (0, a.jsx)(l.default, {
                                onContinue: x,
                                onClose: n
                            })
                        }), (0, a.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.SUCCESS,
                            children: (0, a.jsx)(d.default, {
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
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("79528"),
                o = n("655485"),
                r = n("49111"),
                l = n("782340"),
                i = n("850046"),
                c = n("229394");

            function d(e) {
                let {
                    isWaitingForConnection: t,
                    onWaitingForConnection: n,
                    expectedCallbackState: d,
                    onAuthToken: u,
                    onError: C,
                    onClose: N
                } = e, T = t ? (0, a.jsx)("img", {
                    src: c,
                    width: "168",
                    height: "124",
                    alt: ""
                }) : (0, a.jsx)("img", {
                    src: i,
                    width: "152",
                    height: "123",
                    alt: ""
                }), h = t ? l.default.Messages.CRUNCHYROLL_DETAILS_TITLE_WAITING : l.default.Messages.CRUNCHYROLL_DETAILS_TITLE, x = t ? l.default.Messages.CRUNCHYROLL_DETAILS_BODY_WAITING : l.default.Messages.CRUNCHYROLL_DETAILS_BODY;
                return (0, a.jsx)(s.TwoWayLinkPreConnect, {
                    platformType: r.PlatformTypes.CRUNCHYROLL,
                    isWaitingForConnection: t,
                    onWaitingForConnection: n,
                    expectedCallbackState: d,
                    onAuthToken: u,
                    onError: C,
                    onClose: N,
                    img: T,
                    title: h,
                    body: x,
                    redirectDestination: o.CRUNCHYROLL_LINK_DEST_ORIGIN
                })
            }
        },
        920460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                o = n("701909"),
                r = n("451039"),
                l = n("49111"),
                i = n("782340"),
                c = n("612827"),
                d = n("997265");

            function u() {
                return (0, a.jsx)("div", {
                    className: c.getCrunchyrollApp,
                    children: (0, a.jsx)("div", {
                        className: c.getCrunchyrollAppBody,
                        children: (0, a.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: (0, a.jsx)(s.Anchor, {
                                href: o.default.getArticleURL(l.HelpdeskArticles.CRUNCHYROLL_CONNECTION),
                                children: i.default.Messages.LEARN_MORE
                            })
                        })
                    })
                })
            }

            function C(e) {
                let {
                    onClose: t
                } = e;
                return (0, a.jsx)(r.TwoWayLinkSuccess, {
                    img: (0, a.jsx)("img", {
                        src: d,
                        width: "224",
                        height: "104",
                        alt: ""
                    }),
                    title: i.default.Messages.CONNECT_CRUNCHYROLL_SUCCESS_TITLE,
                    body: i.default.Messages.CONNECT_CRUNCHYROLL_SUCCESS_BODY,
                    content: (0, a.jsx)(u, {}),
                    onClose: t
                })
            }
        },
        997511: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTwoWayLinkModalSlideManager: function() {
                    return i
                }
            });
            var a = n("884691"),
                s = n("84339"),
                o = n("599110"),
                r = n("598347"),
                l = n("49111");

            function i(e, t) {
                let [n, i] = a.useState(r.TwoWayLinkModalSlideTypes.LANDING), c = (0, s.default)(n), [d, u] = a.useState(null), [C, N] = a.useState(null), T = a.useCallback(() => {
                    switch (n) {
                        case r.TwoWayLinkModalSlideTypes.LANDING:
                            i(r.TwoWayLinkModalSlideTypes.PRE_CONNECT);
                            break;
                        case r.TwoWayLinkModalSlideTypes.DISCORD_CONSENT:
                            i(r.TwoWayLinkModalSlideTypes.SUCCESS);
                            break;
                        case r.TwoWayLinkModalSlideTypes.ERROR:
                            i(r.TwoWayLinkModalSlideTypes.PRE_CONNECT)
                    }
                }, [n]), h = a.useCallback(() => {
                    u(null), i(r.TwoWayLinkModalSlideTypes.ERROR)
                }, []), x = a.useCallback(e => {
                    u(e), i(r.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING)
                }, []), f = a.useCallback(e => {
                    u(null), N(e), i(r.TwoWayLinkModalSlideTypes.DISCORD_CONSENT)
                }, []);
                return a.useEffect(() => {
                    n !== c && o.default.track(l.AnalyticEvents.ACCOUNT_LINK_STEP, {
                        location_stack: e,
                        previous_step: c,
                        current_step: n,
                        platform_type: t
                    })
                }, [n, c, e, t]), {
                    slide: n,
                    gotoNext: T,
                    gotoError: h,
                    handleWaitingForConnection: x,
                    handleAuthToken: f,
                    expectedCallbackState: d,
                    callbackData: C
                }
            }
        }
    }
]);
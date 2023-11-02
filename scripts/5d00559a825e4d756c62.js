(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["34345"], {
        143453: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8da9ef44f0d6b8822df6.png"
        },
        660617: function(e, t, n) {
            "use strict";
            e.exports = n.p + "15f0716f5c45b340dbd6.svg"
        },
        329786: function(e, t, n) {
            "use strict";
            e.exports = n.p + "152d4ec15aff5a5389d5.svg"
        },
        823286: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7d57f2b13996b75a8d7d.svg"
        },
        104528: function(e, t, n) {
            "use strict";
            e.exports = n.p + "00f710da7f31fde658db.svg"
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
                    return x
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

            function x(e) {
                let {
                    platformType: t,
                    clientId: n,
                    scopes: o,
                    authToken: c,
                    onContinue: x,
                    onError: h,
                    onClose: f,
                    redirectUri: S
                } = e, [m, p] = s.useState(!1), E = s.useCallback(async e => {
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
                    null != n ? x() : h()
                }, [t, c, x, h]), {
                    header: L,
                    body: y,
                    appDetails: _,
                    sendAuthorize: j
                } = (0, d.useOAuth2AuthorizeForm)({
                    clientId: n,
                    scopes: o,
                    responseType: "code",
                    callback: E,
                    isTrustedName: !0,
                    isEmbeddedFlow: !0,
                    redirectUri: S
                }), g = s.useCallback(() => {
                    r(null != j, "sendAuthorize not available"), p(!0), j(!0)
                }, [j]);
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
                            children: [L, y, _]
                        }), (0, a.jsx)(l.ModalFooter, {
                            className: N.footer,
                            children: (0, a.jsx)(l.Button, {
                                className: N.footerButton,
                                color: l.Button.Colors.BRAND,
                                submitting: m,
                                onClick: g,
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
                    learnMoreLink: x,
                    valueProps: h
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
                            children: h
                        }), null != x ? (0, a.jsx)(o.Text, {
                            tag: "p",
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: i.default.Messages.CONNECT_CONSOLE_LANDING_BODY_LEARN_MORE.format({
                                helpCenterLink: x
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
                    return S
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
                x = n("782340"),
                h = n("429152");
            let f = new C.default("TwoWayLink");

            function S(e) {
                let {
                    platformType: t,
                    isWaitingForConnection: n,
                    onWaitingForConnection: o,
                    expectedCallbackState: C,
                    onAuthToken: S,
                    onError: m,
                    onClose: p,
                    img: E,
                    title: L,
                    body: y,
                    redirectDestination: _
                } = e, j = s.useCallback(async () => {
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
                }, [t, m, o]), g = s.useCallback(e => {
                    let {
                        callbackCode: n,
                        callbackState: a
                    } = e;
                    if (a !== C) {
                        f.warn("".concat(t, " link: received mismatching callback state!"));
                        return
                    }
                    S({
                        callbackCode: n,
                        callbackState: a
                    })
                }, [t, C, S]);
                return s.useEffect(() => (c.default.subscribe("USER_CONNECTIONS_LINK_CALLBACK", g), () => {
                    c.default.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", g)
                }), [g]), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(i.ModalHeader, {
                        direction: N.default.Direction.VERTICAL,
                        className: h.header,
                        separator: !1,
                        children: [(0, a.jsx)(i.Text, {
                            className: h.stepHeader,
                            variant: "text-xs/bold",
                            color: "header-secondary",
                            children: x.default.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                                number: 1,
                                total: 2
                            })
                        }), (0, a.jsxs)("div", {
                            className: h.illustration,
                            children: [E, " "]
                        }), (0, a.jsx)(i.Heading, {
                            className: h.title,
                            variant: "heading-xl/extrabold",
                            children: L
                        }), null != p && (0, a.jsx)(i.ModalCloseButton, {
                            className: h.closeButton,
                            onClick: p
                        })]
                    }), (0, a.jsxs)(i.ModalContent, {
                        className: h.body,
                        paddingFix: !1,
                        children: [(0, a.jsx)(i.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: y
                        }), !n && (0, a.jsx)(i.Text, {
                            tag: "p",
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: x.default.Messages.CONSOLE_REDIRECT_NOTICE.format({
                                redirectUrl: _
                            })
                        })]
                    }), (0, a.jsx)(i.ModalFooter, {
                        className: h.footer,
                        children: (0, a.jsxs)(i.Button, {
                            className: h.footerButton,
                            color: n ? i.Button.Colors.PRIMARY : i.Button.Colors.BRAND,
                            onClick: j,
                            children: [n ? x.default.Messages.RETRY : x.default.Messages.CONTINUE, (0, a.jsx)(T.default, {
                                className: h.launchIcon,
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
        790971: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayStationLinkDiscordConsent: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("747651"),
                o = n("450638"),
                r = n("755993"),
                l = n("49111"),
                i = n("171644");

            function c(e) {
                let {
                    platformType: t,
                    authToken: n,
                    onContinue: c,
                    onError: d,
                    onClose: u
                } = e, C = t === l.PlatformTypes.PLAYSTATION_STAGING ? o.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID : o.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID, N = t === l.PlatformTypes.PLAYSTATION_STAGING ? s.ConsoleAuthorizationRedirectURIs.PLAYSTATION_STAGING : s.ConsoleAuthorizationRedirectURIs.PLAYSTATION;
                return (0, a.jsx)(r.TwoWayLinkDiscordConsent, {
                    platformType: t,
                    clientId: C,
                    scopes: i.PLAYSTATION_CLIENT_SCOPES,
                    authToken: n,
                    onContinue: c,
                    onError: d,
                    onClose: u,
                    redirectUri: N
                })
            }
        },
        689625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayStationLinkError: function() {
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
                    title: o.default.Messages.CONNECT_CONSOLE_ERROR_TITLE,
                    body: o.default.Messages.CONNECT_PS_ERROR_BODY,
                    onClose: n,
                    onContinue: t
                })
            }
        },
        38167: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayStationLinkLanding: function() {
                    return N
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("38828"),
                o = n("157357"),
                r = n("701909"),
                l = n("634644"),
                i = n("106390"),
                c = n("49111"),
                d = n("782340"),
                u = n("823286");

            function C() {
                let e = [d.default.Messages.PS_VALUE_PROP_VOICE, d.default.Messages.PS_VALUE_PROP_GAME],
                    t = [d.default.Messages.PS_VALUE_PROP_GAME];
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i.ValuePropContainer, {
                        children: (0, a.jsx)(i.BulletedValueProp, {
                            icon: (0, a.jsx)(o.default, {}),
                            title: d.default.Messages.PS5,
                            bulletPoints: e
                        })
                    }), (0, a.jsx)(i.ValuePropContainer, {
                        children: (0, a.jsx)(i.BulletedValueProp, {
                            icon: (0, a.jsx)(s.default, {}),
                            title: d.default.Messages.PS4,
                            bulletPoints: t
                        })
                    })]
                })
            }

            function N(e) {
                let {
                    platformType: t,
                    onContinue: n,
                    onClose: s
                } = e;
                return (0, a.jsx)(l.TwoWayLinkLanding, {
                    platformType: t,
                    headerConnect: d.default.Messages.CONNECT_PS_LANDING_TITLE,
                    headerReconnect: d.default.Messages.RECONNECT_PS_LANDING_TITLE,
                    body: d.default.Messages.CONNECT_PS_LANDING_BODY,
                    onClose: s,
                    onContinue: n,
                    img: (0, a.jsx)("img", {
                        src: u,
                        width: 230,
                        height: 138,
                        alt: ""
                    }),
                    valueProps: (0, a.jsx)(C, {}),
                    learnMoreLink: r.default.getArticleURL(c.HelpdeskArticles.PS_CONNECTION)
                })
            }
        },
        59833: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                o = n("997511"),
                r = n("790971"),
                l = n("689625"),
                i = n("38167"),
                c = n("437679"),
                d = n("251782"),
                u = n("598347"),
                C = n("429152");

            function N(e) {
                let {
                    transitionState: t,
                    onClose: n,
                    analyticsLocation: N,
                    platformType: T
                } = e, {
                    slide: x,
                    gotoNext: h,
                    gotoError: f,
                    handleWaitingForConnection: S,
                    handleAuthToken: m,
                    expectedCallbackState: p,
                    callbackData: E
                } = (0, o.useTwoWayLinkModalSlideManager)(N, T);
                return (0, a.jsx)(s.ModalRoot, {
                    className: C.modal,
                    transitionState: t,
                    disableTrack: !0,
                    children: (0, a.jsxs)(s.Slides, {
                        activeSlide: x,
                        width: 408,
                        children: [(0, a.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.LANDING,
                            children: (0, a.jsx)(i.PlayStationLinkLanding, {
                                platformType: T,
                                onContinue: h,
                                onClose: n
                            })
                        }), (0, a.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.PRE_CONNECT,
                            children: (0, a.jsx)(c.PlayStationLinkPreConnect, {
                                platformType: T,
                                isWaitingForConnection: !1,
                                onWaitingForConnection: S,
                                onAuthToken: m,
                                onError: f,
                                onClose: n
                            })
                        }), (0, a.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING,
                            children: (0, a.jsx)(c.PlayStationLinkPreConnect, {
                                platformType: T,
                                isWaitingForConnection: !0,
                                expectedCallbackState: p,
                                onAuthToken: m,
                                onError: f,
                                onClose: n
                            })
                        }), (0, a.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.DISCORD_CONSENT,
                            children: (0, a.jsx)(r.PlayStationLinkDiscordConsent, {
                                platformType: T,
                                authToken: E,
                                onContinue: h,
                                onError: f,
                                onClose: n
                            })
                        }), (0, a.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.ERROR,
                            children: (0, a.jsx)(l.PlayStationLinkError, {
                                onContinue: h,
                                onClose: n
                            })
                        }), (0, a.jsx)(s.Slide, {
                            id: u.TwoWayLinkModalSlideTypes.SUCCESS,
                            children: (0, a.jsx)(d.PlayStationLinkSuccess, {
                                onClose: n
                            })
                        })]
                    })
                })
            }
        },
        437679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayStationLinkPreConnect: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("79528"),
                o = n("171644"),
                r = n("782340"),
                l = n("660617"),
                i = n("329786");

            function c(e) {
                let {
                    platformType: t,
                    isWaitingForConnection: n,
                    onWaitingForConnection: c,
                    expectedCallbackState: d,
                    onAuthToken: u,
                    onError: C,
                    onClose: N
                } = e, T = n ? (0, a.jsx)("img", {
                    src: i,
                    width: "180",
                    height: "125",
                    alt: ""
                }) : (0, a.jsx)("img", {
                    src: l,
                    width: "180",
                    height: "111",
                    alt: ""
                }), x = n ? r.default.Messages.CONSOLE_PRECONNECT_TITLE_WAITING : r.default.Messages.PS_PRECONNECT_TITLE, h = n ? r.default.Messages.PS_PRECONNECT_BODY_WAITING : r.default.Messages.PS_PRECONNECT_BODY;
                return (0, a.jsx)(s.TwoWayLinkPreConnect, {
                    platformType: t,
                    isWaitingForConnection: n,
                    onWaitingForConnection: c,
                    expectedCallbackState: d,
                    onAuthToken: u,
                    onError: C,
                    onClose: N,
                    img: T,
                    title: x,
                    body: h,
                    redirectDestination: o.PLAYSTATION_LINK_DEST_ORIGIN
                })
            }
        },
        251782: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayStationLinkSuccess: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("451039"),
                o = n("782340"),
                r = n("104528");

            function l(e) {
                let {
                    onClose: t
                } = e;
                return (0, a.jsx)(s.TwoWayLinkSuccess, {
                    img: (0, a.jsx)("img", {
                        src: r,
                        width: "241 ",
                        height: "118",
                        alt: ""
                    }),
                    title: o.default.Messages.PS_LINK_SUCCESS_TITLE,
                    body: o.default.Messages.PS_LINK_SUCCESS_BODY,
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
                }, [n]), x = a.useCallback(() => {
                    u(null), i(r.TwoWayLinkModalSlideTypes.ERROR)
                }, []), h = a.useCallback(e => {
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
                    gotoError: x,
                    handleWaitingForConnection: h,
                    handleAuthToken: f,
                    expectedCallbackState: d,
                    callbackData: C
                }
            }
        }
    }
]);
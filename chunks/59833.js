            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return T
                }
            });
            var i = t("37983");
            t("884691");
            var o = t("77078"),
                s = t("997511"),
                a = t("790971"),
                r = t("689625"),
                l = t("38167"),
                d = t("437679"),
                u = t("251782"),
                C = t("598347"),
                c = t("429152");

            function T(e) {
                let {
                    transitionState: n,
                    onClose: t,
                    analyticsLocation: T,
                    platformType: S
                } = e, {
                    slide: f,
                    gotoNext: P,
                    gotoError: N,
                    handleWaitingForConnection: A,
                    handleAuthToken: L,
                    expectedCallbackState: _,
                    callbackData: p
                } = (0, s.useTwoWayLinkModalSlideManager)(T, S);
                return (0, i.jsx)(o.ModalRoot, {
                    className: c.modal,
                    transitionState: n,
                    disableTrack: !0,
                    children: (0, i.jsxs)(o.Slides, {
                        activeSlide: f,
                        width: 408,
                        children: [(0, i.jsx)(o.Slide, {
                            id: C.TwoWayLinkModalSlideTypes.LANDING,
                            children: (0, i.jsx)(l.PlayStationLinkLanding, {
                                platformType: S,
                                onContinue: P,
                                onClose: t
                            })
                        }), (0, i.jsx)(o.Slide, {
                            id: C.TwoWayLinkModalSlideTypes.PRE_CONNECT,
                            children: (0, i.jsx)(d.PlayStationLinkPreConnect, {
                                platformType: S,
                                isWaitingForConnection: !1,
                                onWaitingForConnection: A,
                                onAuthToken: L,
                                onError: N,
                                onClose: t
                            })
                        }), (0, i.jsx)(o.Slide, {
                            id: C.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING,
                            children: (0, i.jsx)(d.PlayStationLinkPreConnect, {
                                platformType: S,
                                isWaitingForConnection: !0,
                                expectedCallbackState: _,
                                onAuthToken: L,
                                onError: N,
                                onClose: t
                            })
                        }), (0, i.jsx)(o.Slide, {
                            id: C.TwoWayLinkModalSlideTypes.DISCORD_CONSENT,
                            children: (0, i.jsx)(a.PlayStationLinkDiscordConsent, {
                                platformType: S,
                                authToken: p,
                                onContinue: P,
                                onError: N,
                                onClose: t
                            })
                        }), (0, i.jsx)(o.Slide, {
                            id: C.TwoWayLinkModalSlideTypes.ERROR,
                            children: (0, i.jsx)(r.PlayStationLinkError, {
                                onContinue: P,
                                onClose: t
                            })
                        }), (0, i.jsx)(o.Slide, {
                            id: C.TwoWayLinkModalSlideTypes.SUCCESS,
                            children: (0, i.jsx)(u.PlayStationLinkSuccess, {
                                onClose: t
                            })
                        })]
                    })
                })
            }
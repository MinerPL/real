            "use strict";
            n.r(t), n.d(t, {
                StrangerDangerWarningBanner: function() {
                    return E
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("432710"),
                i = n("77078"),
                r = n("736964"),
                o = n("155084"),
                u = n("945330"),
                d = n("277734"),
                c = n("844911"),
                f = n("964974"),
                h = n("49111"),
                C = n("782340"),
                p = n("921548"),
                m = n("145680");

            function E(e) {
                let {
                    channelId: t,
                    warningId: E,
                    senderId: g
                } = e, S = s.useCallback(() => {
                    (0, d.dismissChannelSafetyWarnings)(t, [E])
                }, [t, E]), A = s.useCallback(() => {
                    S(), (0, c.trackCtaEvent)({
                        channelId: t,
                        warningId: E,
                        senderId: g,
                        cta: c.CtaEventTypes.DISMISS
                    })
                }, [S, t, E, g]), _ = s.useCallback(e => () => {
                    r.default.addRelationship({
                        userId: g,
                        context: {
                            location: f.LOCATION_CONTEXT_WEB
                        },
                        type: h.RelationshipTypes.BLOCKED
                    }), S(), (0, i.showToast)((0, i.createToast)(C.default.Messages.STRANGER_DANGER_BLOCK_CONFIRM, i.ToastType.SUCCESS)), (0, c.trackCtaEvent)({
                        channelId: t,
                        warningId: E,
                        senderId: g,
                        cta: e
                    })
                }, [S, t, E, g]);
                s.useEffect(() => {
                    (0, c.trackViewedEvent)(h.AnalyticEvents.SAFETY_WARNING_VIEWED, {
                        channelId: t,
                        warningId: E,
                        senderId: g
                    }), o.default.increment({
                        name: l.MetricEvents.SAFETY_WARNING_VIEW
                    })
                }, [t, E, g]);
                let T = () => {
                        (0, i.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("664639").then(n.bind(n, "664639"));
                            return n => {
                                let {
                                    transitionState: s,
                                    onClose: l
                                } = n;
                                return (0, a.jsx)(e, {
                                    transitionState: s,
                                    onClose: l,
                                    channelId: t,
                                    warningId: E,
                                    senderId: g,
                                    handleBlock: () => {
                                        M(c.CtaEventTypes.USER_MODAL_BLOCK_CONFIRM, c.CtaEventTypes.USER_MODAL_BLOCK_CANCEL, T)
                                    }
                                })
                            }
                        })
                    },
                    M = (e, s, l) => {
                        (0, i.openModalLazy)(async () => {
                            let {
                                default: i
                            } = await n.el("968710").then(n.bind(n, "968710"));
                            return n => (0, a.jsx)(i, {
                                ...n,
                                userId: g,
                                confirmBlock: _(e),
                                onCancel: () => {
                                    null == l || l(), (0, c.trackCtaEvent)({
                                        channelId: t,
                                        warningId: E,
                                        senderId: g,
                                        cta: s
                                    })
                                }
                            })
                        })
                    };
                return (0, a.jsxs)("div", {
                    className: p.strangerDangerBanner,
                    children: [(0, a.jsxs)("div", {
                        className: p.shieldAndHeading,
                        children: [(0, a.jsx)("img", {
                            className: p.safetyShieldIcon,
                            src: m,
                            alt: ""
                        }), (0, a.jsxs)("div", {
                            children: [(0, a.jsx)(i.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-primary",
                                children: C.default.Messages.STRANGER_DANGER_BANNER_HEADER
                            }), (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-primary",
                                children: C.default.Messages.STRANGER_DANGER_BANNER_DESCRIPTION
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: p.buttons,
                        children: [(0, a.jsx)(i.Button, {
                            size: i.Button.Sizes.SMALL,
                            color: i.Button.Colors.BRAND,
                            "aria-label": C.default.Messages.STRANGER_DANGER_BANNER_MORE_TIPS,
                            onClick: () => {
                                T(), (0, c.trackCtaEvent)({
                                    channelId: t,
                                    warningId: E,
                                    senderId: g,
                                    cta: c.CtaEventTypes.OPEN_MORE_TIPS
                                })
                            },
                            children: C.default.Messages.STRANGER_DANGER_BANNER_MORE_TIPS
                        }), (0, a.jsx)(i.Button, {
                            size: i.Button.Sizes.SMALL,
                            color: i.Button.Colors.RED,
                            "aria-label": C.default.Messages.STRANGER_DANGER_BANNER_BLOCK,
                            onClick: () => M(c.CtaEventTypes.USER_BANNER_BLOCK_CONFIRM, c.CtaEventTypes.USER_BANNER_BLOCK_CANCEL),
                            children: C.default.Messages.STRANGER_DANGER_BANNER_BLOCK
                        })]
                    }), (0, a.jsx)(i.Clickable, {
                        className: p.closeButton,
                        onClick: A,
                        role: "button",
                        "aria-label": C.default.Messages.DISMISS,
                        children: (0, a.jsx)(u.default, {
                            width: 24,
                            height: 24,
                            className: p.closeButton
                        })
                    })]
                })
            }
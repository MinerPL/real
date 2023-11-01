(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["42172"], {
        48174: function(t, e, n) {
            "use strict";

            function l(t, e) {
                if (t.length !== e.length) return !1;
                for (let n = 0; n < e.length && n < t.length; n++)
                    if (!Object.is(t[n], e[n])) return !1;
                return !0
            }
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            })
        },
        775560: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useForceUpdate: function() {
                    return l.default
                },
                useStableMemo: function() {
                    return a.default
                },
                useLazyValue: function() {
                    return u.default
                }
            });
            var l = n("14716"),
                a = n("745510"),
                u = n("315378")
        },
        14716: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var l = n("884691");

            function a() {
                let [, t] = (0, l.useState)({});
                return (0, l.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var l = n("884691");
            let a = {};

            function u(t) {
                let e = (0, l.useRef)(a);
                return e.current === a && (e.current = t()), e.current
            }
        },
        745510: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var l = n("884691"),
                a = n("48174");
            let u = [];

            function r(t, e) {
                let n = (0, l.useRef)(),
                    r = (0, l.useRef)(u);
                return r.current === u ? (n.current = t(), r.current = e) : !(0, a.default)(e, r.current) && (n.current = t(), r.current = e), n.current
            }
        },
        158574: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var l = n("866227"),
                a = n.n(l),
                u = n("851387"),
                r = {
                    async setCommunicationDisabledDuration(t, e, n, l, r) {
                        let s = null != n ? a().add(n, "s").toISOString() : null;
                        await u.default.setCommunicationDisabledUntil({
                            guildId: t,
                            userId: e,
                            communicationDisabledUntilTimestamp: s,
                            duration: n,
                            reason: l,
                            location: r
                        })
                    }
                }
        },
        750331: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return h
                }
            });
            var l = n("37983"),
                a = n("884691"),
                u = n("446674"),
                r = n("77078"),
                s = n("158574"),
                o = n("685665"),
                i = n("697218"),
                c = n("91551"),
                d = n("476765"),
                f = n("945330"),
                C = n("599110"),
                E = n("406043"),
                I = n("903639"),
                _ = n("49111"),
                M = n("782340"),
                N = n("461879");

            function h(t) {
                var e, n;
                let {
                    guildId: h,
                    userId: A,
                    anaylticsLocations: m,
                    transitionState: O,
                    onClose: T
                } = t, L = (0, d.useUID)(), {
                    analyticsLocations: S
                } = (0, o.default)(), U = null !== (n = null !== (e = null == m ? void 0 : m[0]) && void 0 !== e ? e : null == S ? void 0 : S[0]) && void 0 !== n ? n : null, g = (0, u.useStateFromStores)([i.default], () => i.default.getUser(A), [A]), [D, R] = (0, E.default)(A, h), [v, b] = a.useState(!1), x = a.useCallback(async () => {
                    if (null != g) {
                        b(!0);
                        try {
                            await s.default.setCommunicationDisabledDuration(h, A, null, null, U), (0, r.showToast)((0, r.createToast)(M.default.Messages.GUILD_ENABLE_COMMUNICATION_SUCCESS, r.ToastType.SUCCESS)), T()
                        } catch (t) {
                            (0, r.showToast)((0, r.createToast)(M.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, r.ToastType.FAILURE))
                        } finally {
                            b(!1)
                        }
                    }
                }, [h, g, A, T, U]), k = a.useCallback(() => {
                    !R && T()
                }, [R, T]);
                return (a.useEffect(() => {
                    null != g && C.default.track(_.AnalyticEvents.OPEN_MODAL, {
                        type: I.SET_COMMUNICATION_DISABLED_MODAL_NAME,
                        guild_id: h,
                        other_user_id: g.id
                    })
                }, []), a.useEffect(() => {
                    (null == g || null == h) && T()
                }), null == g || null == h) ? null : (0, l.jsxs)(r.ModalRoot, {
                    transitionState: O,
                    "aria-labelledby": L,
                    children: [(0, l.jsxs)(r.ModalHeader, {
                        className: N.header,
                        separator: !1,
                        children: [(0, l.jsx)(r.Heading, {
                            variant: "heading-lg/semibold",
                            children: M.default.Messages.GUILD_ENABLE_COMMUNICATION_HEADER
                        }), (0, l.jsx)(r.Clickable, {
                            onClick: T,
                            className: N.closeButton,
                            "aria-label": M.default.Messages.CLOSE,
                            children: (0, l.jsx)(f.default, {
                                className: N.closeIcon,
                                width: 16,
                                height: 16
                            })
                        })]
                    }), (0, l.jsxs)(r.ModalContent, {
                        children: [(0, l.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "interactive-normal",
                            children: M.default.Messages.GUILD_ENABLE_COMMUNICATION_TIME_REMAINING.format({
                                username: g.username,
                                countdown: t => null == D ? null : (0, l.jsx)(c.default, {
                                    className: N.countdown,
                                    deadline: new Date(D),
                                    onInterval: k,
                                    showUnits: !0,
                                    stopAtOneSec: !0
                                })
                            })
                        }), (0, l.jsx)(r.Text, {
                            className: N.cta,
                            variant: "text-md/normal",
                            color: "interactive-normal",
                            children: M.default.Messages.GUILD_ENABLE_COMMUNICATION_CTA.format({
                                link: I.GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK
                            })
                        })]
                    }), (0, l.jsxs)(r.ModalFooter, {
                        children: [(0, l.jsx)(r.Button, {
                            color: r.Button.Colors.RED,
                            onClick: x,
                            submitting: v,
                            children: M.default.Messages.REMOVE_TIME_OUT
                        }), (0, l.jsx)(r.Button, {
                            type: "button",
                            look: r.Button.Looks.LINK,
                            color: r.Button.Colors.PRIMARY,
                            onClick: T,
                            children: M.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        }
    }
]);
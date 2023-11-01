(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["87567"], {
        48174: function(e, t, n) {
            "use strict";

            function a(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return a.default
                },
                useStableMemo: function() {
                    return l.default
                },
                useLazyValue: function() {
                    return r.default
                }
            });
            var a = n("14716"),
                l = n("745510"),
                r = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("884691");

            function l() {
                let [, e] = (0, a.useState)({});
                return (0, a.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("884691");
            let l = {};

            function r(e) {
                let t = (0, a.useRef)(l);
                return t.current === l && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("884691"),
                l = n("48174");
            let r = [];

            function u(e, t) {
                let n = (0, a.useRef)(),
                    u = (0, a.useRef)(r);
                return u.current === r ? (n.current = e(), u.current = t) : !(0, l.default)(t, u.current) && (n.current = e(), u.current = t), n.current
            }
        },
        158574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("866227"),
                l = n.n(a),
                r = n("851387"),
                u = {
                    async setCommunicationDisabledDuration(e, t, n, a, u) {
                        let s = null != n ? l().add(n, "s").toISOString() : null;
                        await r.default.setCommunicationDisabledUntil({
                            guildId: e,
                            userId: t,
                            communicationDisabledUntilTimestamp: s,
                            duration: n,
                            reason: a,
                            location: u
                        })
                    }
                }
        },
        693120: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983"),
                l = n("884691"),
                r = n("446674"),
                u = n("77078"),
                s = n("158574"),
                o = n("685665"),
                i = n("130037"),
                c = n("697218"),
                d = n("140848"),
                f = n("476765"),
                _ = n("945330"),
                D = n("599110"),
                I = n("387111"),
                C = n("903639"),
                N = n("49111"),
                m = n("782340"),
                A = n("626641");

            function M(e) {
                return {
                    value: e,
                    get label() {
                        var t;
                        return null === (t = (0, C.getFriendlyDurationString)(e)) || void 0 === t ? void 0 : t.toLocaleUpperCase()
                    }
                }
            }
            let O = [M(C.DisableCommunicationDuration.DURATION_60_SEC), M(C.DisableCommunicationDuration.DURATION_5_MIN), M(C.DisableCommunicationDuration.DURATION_10_MIN), M(C.DisableCommunicationDuration.DURATION_1_HOUR), M(C.DisableCommunicationDuration.DURATION_1_DAY), M(C.DisableCommunicationDuration.DURATION_1_WEEK)];

            function E(e) {
                var t, n;
                let {
                    guildId: M,
                    userId: E,
                    anaylticsLocations: T,
                    transitionState: S,
                    onClose: U
                } = e, h = (0, f.useUID)(), {
                    analyticsLocations: L
                } = (0, o.default)(), R = null !== (n = null !== (t = null == T ? void 0 : T[0]) && void 0 !== t ? t : null == L ? void 0 : L[0]) && void 0 !== n ? n : null, g = (0, r.useStateFromStores)([c.default], () => c.default.getUser(E), [E]), [x, b] = l.useState(C.DisableCommunicationDuration.DURATION_60_SEC), v = (0, i.useTrackModerationAction)(M, {
                    location: R,
                    targetUserId: E
                }), [p, B] = l.useState(""), [j, k] = l.useState(!1), y = l.useCallback(async () => {
                    if (null != g) {
                        k(!0);
                        try {
                            await s.default.setCommunicationDisabledDuration(M, E, x, p, R), v(i.ModerationActionType.TIMEOUT), (0, u.showToast)((0, u.createToast)(m.default.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
                                user: I.default.getName(M, null, g)
                            }), u.ToastType.SUCCESS)), U()
                        } catch (e) {
                            (0, u.showToast)((0, u.createToast)(m.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, u.ToastType.FAILURE))
                        } finally {
                            k(!1)
                        }
                    }
                }, [M, g, E, U, x, p, R, v]);
                return (l.useEffect(() => {
                    null != g && D.default.track(N.AnalyticEvents.OPEN_MODAL, {
                        type: C.CLEAR_COMMUNICATION_DISABLED_MODAL_NAME,
                        guild_id: M,
                        other_user_id: g.id
                    })
                }, []), l.useEffect(() => {
                    (null == g || null == M) && U()
                }, [M, g, U]), null == g || null == M) ? null : (0, a.jsxs)(u.ModalRoot, {
                    transitionState: S,
                    "aria-labelledby": h,
                    children: [(0, a.jsxs)(u.ModalHeader, {
                        className: A.header,
                        separator: !1,
                        children: [(0, a.jsx)(u.Heading, {
                            id: h,
                            variant: "heading-lg/semibold",
                            children: m.default.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({
                                user: I.default.getName(M, null, g)
                            })
                        }), (0, a.jsx)(u.Clickable, {
                            onClick: U,
                            className: A.closeButton,
                            "aria-label": m.default.Messages.CLOSE,
                            children: (0, a.jsx)(_.default, {
                                className: A.closeIcon,
                                width: 16,
                                height: 16
                            })
                        })]
                    }), (0, a.jsxs)(u.ModalContent, {
                        className: A.contentContainer,
                        children: [(0, a.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "interactive-normal",
                            children: m.default.Messages.DISABLE_GUILD_COMMUNICATION_BODY_HEADER.format({
                                helpdeskArticle: C.GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK
                            })
                        }), (0, a.jsx)(u.Text, {
                            className: A.selectorHeader,
                            variant: "text-xs/semibold",
                            color: "interactive-normal",
                            children: m.default.Messages.GUILD_COMMUNICATION_DISABLED_DURATION
                        }), (0, a.jsx)(d.default, {
                            buttons: O.map(e => (function(e, t, n) {
                                let {
                                    value: l,
                                    label: r
                                } = e, s = (0, a.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    className: t ? A.selectorTextSelected : A.selectorText,
                                    children: r
                                });
                                return {
                                    content: s,
                                    className: t ? A.selectorButtonSelected : A.selectorButton,
                                    onClick: () => n(l)
                                }
                            })(e, e.value === x, b))
                        }), (0, a.jsx)(u.Text, {
                            className: A.selectorHeader,
                            variant: "text-xs/semibold",
                            color: "interactive-normal",
                            children: m.default.Messages.GUILD_COMMUNICATION_DISABLED_REASON
                        }), (0, a.jsx)(u.TextArea, {
                            value: p,
                            onChange: e => B(e),
                            placeholder: m.default.Messages.GUILD_COMMUNICATION_DISABLED_REASON_PLACEHOLDER,
                            rows: 2,
                            maxLength: C.MAX_REASON_LENGTH
                        })]
                    }), (0, a.jsxs)(u.ModalFooter, {
                        children: [(0, a.jsx)(u.Button, {
                            onClick: y,
                            color: u.Button.Colors.BRAND_NEW,
                            submitting: j,
                            children: m.default.Messages.TIMEOUT_SUBMIT
                        }), (0, a.jsx)(u.Button, {
                            type: "button",
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: U,
                            children: m.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        }
    }
]);
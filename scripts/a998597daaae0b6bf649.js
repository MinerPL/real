(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["36424"], {
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
                    return r.default
                },
                useLazyValue: function() {
                    return u.default
                }
            });
            var a = n("14716"),
                r = n("745510"),
                u = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("884691");

            function r() {
                let [, e] = (0, a.useState)({});
                return (0, a.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("884691");
            let r = {};

            function u(e) {
                let t = (0, a.useRef)(r);
                return t.current === r && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("884691"),
                r = n("48174");
            let u = [];

            function l(e, t) {
                let n = (0, a.useRef)(),
                    l = (0, a.useRef)(u);
                return l.current === u ? (n.current = e(), l.current = t) : !(0, r.default)(t, l.current) && (n.current = e(), l.current = t), n.current
            }
        },
        158574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("866227"),
                r = n.n(a),
                u = n("851387"),
                l = {
                    async setCommunicationDisabledDuration(e, t, n, a, l) {
                        let s = null != n ? r().add(n, "s").toISOString() : null;
                        await u.default.setCommunicationDisabledUntil({
                            guildId: e,
                            userId: t,
                            communicationDisabledUntilTimestamp: s,
                            duration: n,
                            reason: a,
                            location: l
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
                r = n("884691"),
                u = n("446674"),
                l = n("77078"),
                s = n("158574"),
                o = n("685665"),
                i = n("130037"),
                c = n("697218"),
                d = n("140848"),
                f = n("476765"),
                D = n("945330"),
                I = n("599110"),
                _ = n("387111"),
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
                    transitionState: U,
                    onClose: S
                } = e, h = (0, f.useUID)(), {
                    analyticsLocations: g
                } = (0, o.default)(), x = null !== (n = null !== (t = null == T ? void 0 : T[0]) && void 0 !== t ? t : null == g ? void 0 : g[0]) && void 0 !== n ? n : null, L = (0, u.useStateFromStores)([c.default], () => c.default.getUser(E), [E]), [R, b] = r.useState(C.DisableCommunicationDuration.DURATION_60_SEC), v = (0, i.useTrackModerationAction)(M, {
                    location: x,
                    targetUserId: E
                }), [p, j] = r.useState(""), [B, k] = r.useState(!1), y = r.useCallback(async () => {
                    if (null != L) {
                        k(!0);
                        try {
                            await s.default.setCommunicationDisabledDuration(M, E, R, p, x), v(i.ModerationActionType.TIMEOUT), (0, l.showToast)((0, l.createToast)(m.default.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
                                user: _.default.getName(M, null, L)
                            }), l.ToastType.SUCCESS)), S()
                        } catch (e) {
                            (0, l.showToast)((0, l.createToast)(m.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, l.ToastType.FAILURE))
                        } finally {
                            k(!1)
                        }
                    }
                }, [M, L, E, S, R, p, x, v]);
                return (r.useEffect(() => {
                    null != L && I.default.track(N.AnalyticEvents.OPEN_MODAL, {
                        type: C.CLEAR_COMMUNICATION_DISABLED_MODAL_NAME,
                        guild_id: M,
                        other_user_id: L.id
                    })
                }, []), r.useEffect(() => {
                    (null == L || null == M) && S()
                }, [M, L, S]), null == L || null == M) ? null : (0, a.jsxs)(l.ModalRoot, {
                    transitionState: U,
                    "aria-labelledby": h,
                    children: [(0, a.jsxs)(l.ModalHeader, {
                        className: A.header,
                        separator: !1,
                        children: [(0, a.jsx)(l.Heading, {
                            id: h,
                            variant: "heading-lg/semibold",
                            children: m.default.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({
                                user: _.default.getName(M, null, L)
                            })
                        }), (0, a.jsx)(l.Clickable, {
                            onClick: S,
                            className: A.closeButton,
                            "aria-label": m.default.Messages.CLOSE,
                            children: (0, a.jsx)(D.default, {
                                className: A.closeIcon,
                                width: 16,
                                height: 16
                            })
                        })]
                    }), (0, a.jsxs)(l.ModalContent, {
                        className: A.contentContainer,
                        children: [(0, a.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "interactive-normal",
                            children: m.default.Messages.DISABLE_GUILD_COMMUNICATION_BODY_HEADER.format({
                                helpdeskArticle: C.GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK
                            })
                        }), (0, a.jsx)(l.Text, {
                            className: A.selectorHeader,
                            variant: "text-xs/semibold",
                            color: "interactive-normal",
                            children: m.default.Messages.GUILD_COMMUNICATION_DISABLED_DURATION
                        }), (0, a.jsx)(d.default, {
                            buttons: O.map(e => (function(e, t, n) {
                                let {
                                    value: r,
                                    label: u
                                } = e, s = (0, a.jsx)(l.Text, {
                                    variant: "text-xs/normal",
                                    className: t ? A.selectorTextSelected : A.selectorText,
                                    children: u
                                });
                                return {
                                    content: s,
                                    className: t ? A.selectorButtonSelected : A.selectorButton,
                                    onClick: () => n(r)
                                }
                            })(e, e.value === R, b))
                        }), (0, a.jsx)(l.Text, {
                            className: A.selectorHeader,
                            variant: "text-xs/semibold",
                            color: "interactive-normal",
                            children: m.default.Messages.GUILD_COMMUNICATION_DISABLED_REASON
                        }), (0, a.jsx)(l.TextArea, {
                            value: p,
                            onChange: e => j(e),
                            placeholder: m.default.Messages.GUILD_COMMUNICATION_DISABLED_REASON_PLACEHOLDER,
                            rows: 2,
                            maxLength: C.MAX_REASON_LENGTH
                        })]
                    }), (0, a.jsxs)(l.ModalFooter, {
                        children: [(0, a.jsx)(l.Button, {
                            onClick: y,
                            color: l.Button.Colors.BRAND_NEW,
                            submitting: B,
                            children: m.default.Messages.TIMEOUT_SUBMIT
                        }), (0, a.jsx)(l.Button, {
                            type: "button",
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.PRIMARY,
                            onClick: S,
                            children: m.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        140848: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("414456"),
                u = n.n(r),
                l = n("77078"),
                s = n("108037");
            let o = e => {
                let {
                    data: t,
                    disabled: n
                } = e, {
                    content: r,
                    className: o,
                    onClick: i,
                    disabled: c
                } = t;
                return (0, a.jsx)(l.FocusRing, {
                    children: (0, a.jsx)("button", {
                        type: "button",
                        className: u(s.item, o),
                        onClick: i,
                        disabled: n || c,
                        children: r
                    })
                })
            };
            var i = e => {
                let {
                    buttons: t,
                    disabled: n,
                    className: r
                } = e;
                return (0, a.jsx)("div", {
                    role: "group",
                    className: u(s.group, r),
                    children: t.map((e, t) => (0, a.jsx)(o, {
                        data: e,
                        disabled: n
                    }, t))
                })
            }
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return l
                },
                useUID: function() {
                    return s
                },
                UID: function() {
                    return o
                }
            });
            var a = n("995008"),
                r = n.n(a),
                u = n("775560");
            let l = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return r(e)
                },
                s = () => (0, u.useLazyValue)(() => l()),
                o = e => {
                    let {
                        children: t
                    } = e;
                    return t(s())
                }
        }
    }
]);
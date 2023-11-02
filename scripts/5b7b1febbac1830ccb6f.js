(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["36424"], {
        158574: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var l = a("866227"),
                s = a.n(l),
                n = a("851387"),
                o = {
                    async setCommunicationDisabledDuration(e, t, a, l, o) {
                        let i = null != a ? s().add(a, "s").toISOString() : null;
                        await n.default.setCommunicationDisabledUntil({
                            guildId: e,
                            userId: t,
                            communicationDisabledUntilTimestamp: i,
                            duration: a,
                            reason: l,
                            location: o
                        })
                    }
                }
        },
        693120: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return T
                }
            });
            var l = a("37983"),
                s = a("884691"),
                n = a("446674"),
                o = a("77078"),
                i = a("158574"),
                r = a("685665"),
                u = a("130037"),
                c = a("697218"),
                d = a("140848"),
                _ = a("476765"),
                D = a("945330"),
                I = a("599110"),
                C = a("387111"),
                N = a("903639"),
                A = a("49111"),
                m = a("782340"),
                E = a("626641");

            function M(e) {
                return {
                    value: e,
                    get label() {
                        var t;
                        return null === (t = (0, N.getFriendlyDurationString)(e)) || void 0 === t ? void 0 : t.toLocaleUpperCase()
                    }
                }
            }
            let O = [M(N.DisableCommunicationDuration.DURATION_60_SEC), M(N.DisableCommunicationDuration.DURATION_5_MIN), M(N.DisableCommunicationDuration.DURATION_10_MIN), M(N.DisableCommunicationDuration.DURATION_1_HOUR), M(N.DisableCommunicationDuration.DURATION_1_DAY), M(N.DisableCommunicationDuration.DURATION_1_WEEK)];

            function T(e) {
                var t, a;
                let {
                    guildId: M,
                    userId: T,
                    anaylticsLocations: f,
                    transitionState: U,
                    onClose: S
                } = e, L = (0, _.useUID)(), {
                    analyticsLocations: h
                } = (0, r.default)(), x = null !== (a = null !== (t = null == f ? void 0 : f[0]) && void 0 !== t ? t : null == h ? void 0 : h[0]) && void 0 !== a ? a : null, R = (0, n.useStateFromStores)([c.default], () => c.default.getUser(T), [T]), [g, b] = s.useState(N.DisableCommunicationDuration.DURATION_60_SEC), v = (0, u.useTrackModerationAction)(M, {
                    location: x,
                    targetUserId: T
                }), [B, p] = s.useState(""), [j, k] = s.useState(!1), y = s.useCallback(async () => {
                    if (null != R) {
                        k(!0);
                        try {
                            await i.default.setCommunicationDisabledDuration(M, T, g, B, x), v(u.ModerationActionType.TIMEOUT), (0, o.showToast)((0, o.createToast)(m.default.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
                                user: C.default.getName(M, null, R)
                            }), o.ToastType.SUCCESS)), S()
                        } catch (e) {
                            (0, o.showToast)((0, o.createToast)(m.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, o.ToastType.FAILURE))
                        } finally {
                            k(!1)
                        }
                    }
                }, [M, R, T, S, g, B, x, v]);
                return (s.useEffect(() => {
                    null != R && I.default.track(A.AnalyticEvents.OPEN_MODAL, {
                        type: N.CLEAR_COMMUNICATION_DISABLED_MODAL_NAME,
                        guild_id: M,
                        other_user_id: R.id
                    })
                }, []), s.useEffect(() => {
                    (null == R || null == M) && S()
                }, [M, R, S]), null == R || null == M) ? null : (0, l.jsxs)(o.ModalRoot, {
                    transitionState: U,
                    "aria-labelledby": L,
                    children: [(0, l.jsxs)(o.ModalHeader, {
                        className: E.header,
                        separator: !1,
                        children: [(0, l.jsx)(o.Heading, {
                            id: L,
                            variant: "heading-lg/semibold",
                            children: m.default.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({
                                user: C.default.getName(M, null, R)
                            })
                        }), (0, l.jsx)(o.Clickable, {
                            onClick: S,
                            className: E.closeButton,
                            "aria-label": m.default.Messages.CLOSE,
                            children: (0, l.jsx)(D.default, {
                                className: E.closeIcon,
                                width: 16,
                                height: 16
                            })
                        })]
                    }), (0, l.jsxs)(o.ModalContent, {
                        className: E.contentContainer,
                        children: [(0, l.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "interactive-normal",
                            children: m.default.Messages.DISABLE_GUILD_COMMUNICATION_BODY_HEADER.format({
                                helpdeskArticle: N.GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK
                            })
                        }), (0, l.jsx)(o.Text, {
                            className: E.selectorHeader,
                            variant: "text-xs/semibold",
                            color: "interactive-normal",
                            children: m.default.Messages.GUILD_COMMUNICATION_DISABLED_DURATION
                        }), (0, l.jsx)(d.default, {
                            buttons: O.map(e => (function(e, t, a) {
                                let {
                                    value: s,
                                    label: n
                                } = e, i = (0, l.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    className: t ? E.selectorTextSelected : E.selectorText,
                                    children: n
                                });
                                return {
                                    content: i,
                                    className: t ? E.selectorButtonSelected : E.selectorButton,
                                    onClick: () => a(s)
                                }
                            })(e, e.value === g, b))
                        }), (0, l.jsx)(o.Text, {
                            className: E.selectorHeader,
                            variant: "text-xs/semibold",
                            color: "interactive-normal",
                            children: m.default.Messages.GUILD_COMMUNICATION_DISABLED_REASON
                        }), (0, l.jsx)(o.TextArea, {
                            value: B,
                            onChange: e => p(e),
                            placeholder: m.default.Messages.GUILD_COMMUNICATION_DISABLED_REASON_PLACEHOLDER,
                            rows: 2,
                            maxLength: N.MAX_REASON_LENGTH
                        })]
                    }), (0, l.jsxs)(o.ModalFooter, {
                        children: [(0, l.jsx)(o.Button, {
                            onClick: y,
                            color: o.Button.Colors.BRAND_NEW,
                            submitting: j,
                            children: m.default.Messages.TIMEOUT_SUBMIT
                        }), (0, l.jsx)(o.Button, {
                            type: "button",
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            onClick: S,
                            children: m.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        }
    }
]);
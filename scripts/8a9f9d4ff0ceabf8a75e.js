(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["53067"], {
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
                        let u = null != a ? s().add(a, "s").toISOString() : null;
                        await n.default.setCommunicationDisabledUntil({
                            guildId: e,
                            userId: t,
                            communicationDisabledUntilTimestamp: u,
                            duration: a,
                            reason: l,
                            location: o
                        })
                    }
                }
        },
        750331: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return A
                }
            });
            var l = a("37983"),
                s = a("884691"),
                n = a("446674"),
                o = a("77078"),
                u = a("158574"),
                i = a("685665"),
                d = a("697218"),
                r = a("91551"),
                c = a("476765"),
                C = a("945330"),
                E = a("599110"),
                I = a("406043"),
                _ = a("903639"),
                f = a("49111"),
                M = a("782340"),
                N = a("461879");

            function A(e) {
                var t, a;
                let {
                    guildId: A,
                    userId: h,
                    anaylticsLocations: m,
                    transitionState: O,
                    onClose: T
                } = e, L = (0, c.useUID)(), {
                    analyticsLocations: S
                } = (0, i.default)(), U = null !== (a = null !== (t = null == m ? void 0 : m[0]) && void 0 !== t ? t : null == S ? void 0 : S[0]) && void 0 !== a ? a : null, D = (0, n.useStateFromStores)([d.default], () => d.default.getUser(h), [h]), [g, x] = (0, I.default)(h, A), [R, b] = s.useState(!1), k = s.useCallback(async () => {
                    if (null != D) {
                        b(!0);
                        try {
                            await u.default.setCommunicationDisabledDuration(A, h, null, null, U), (0, o.showToast)((0, o.createToast)(M.default.Messages.GUILD_ENABLE_COMMUNICATION_SUCCESS, o.ToastType.SUCCESS)), T()
                        } catch (e) {
                            (0, o.showToast)((0, o.createToast)(M.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, o.ToastType.FAILURE))
                        } finally {
                            b(!1)
                        }
                    }
                }, [A, D, h, T, U]), v = s.useCallback(() => {
                    !x && T()
                }, [x, T]);
                return (s.useEffect(() => {
                    null != D && E.default.track(f.AnalyticEvents.OPEN_MODAL, {
                        type: _.SET_COMMUNICATION_DISABLED_MODAL_NAME,
                        guild_id: A,
                        other_user_id: D.id
                    })
                }, []), s.useEffect(() => {
                    (null == D || null == A) && T()
                }), null == D || null == A) ? null : (0, l.jsxs)(o.ModalRoot, {
                    transitionState: O,
                    "aria-labelledby": L,
                    children: [(0, l.jsxs)(o.ModalHeader, {
                        className: N.header,
                        separator: !1,
                        children: [(0, l.jsx)(o.Heading, {
                            variant: "heading-lg/semibold",
                            children: M.default.Messages.GUILD_ENABLE_COMMUNICATION_HEADER
                        }), (0, l.jsx)(o.Clickable, {
                            onClick: T,
                            className: N.closeButton,
                            "aria-label": M.default.Messages.CLOSE,
                            children: (0, l.jsx)(C.default, {
                                className: N.closeIcon,
                                width: 16,
                                height: 16
                            })
                        })]
                    }), (0, l.jsxs)(o.ModalContent, {
                        children: [(0, l.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "interactive-normal",
                            children: M.default.Messages.GUILD_ENABLE_COMMUNICATION_TIME_REMAINING.format({
                                username: D.username,
                                countdown: e => null == g ? null : (0, l.jsx)(r.default, {
                                    className: N.countdown,
                                    deadline: new Date(g),
                                    onInterval: v,
                                    showUnits: !0,
                                    stopAtOneSec: !0
                                })
                            })
                        }), (0, l.jsx)(o.Text, {
                            className: N.cta,
                            variant: "text-md/normal",
                            color: "interactive-normal",
                            children: M.default.Messages.GUILD_ENABLE_COMMUNICATION_CTA.format({
                                link: _.GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK
                            })
                        })]
                    }), (0, l.jsxs)(o.ModalFooter, {
                        children: [(0, l.jsx)(o.Button, {
                            color: o.Button.Colors.RED,
                            onClick: k,
                            submitting: R,
                            children: M.default.Messages.REMOVE_TIME_OUT
                        }), (0, l.jsx)(o.Button, {
                            type: "button",
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            onClick: T,
                            children: M.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        }
    }
]);
            "use strict";
            n.r(t), n.d(t, {
                openStageChannelSettings: function() {
                    return E
                },
                openEndGuildEventConfirmationModal: function() {
                    return f
                },
                openStageChannelAudienceNoticeModal: function() {
                    return h
                },
                openStageBlockedUsersSheet: function() {
                    return p
                },
                openEndStageModal: function() {
                    return T
                },
                shouldShowBlockedUsers: function() {
                    return C
                },
                navigateToStage: function() {
                    return m
                },
                showChannelChangeConfirmationAlert: function() {
                    return S
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("551042"),
                l = n("144491"),
                s = n("271938"),
                r = n("325861"),
                u = n("834052"),
                o = n("534471"),
                d = n("151642"),
                c = n("49111"),
                _ = n("625611");

            function E(e, t) {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("435768").then(n.bind(n, "435768"));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        channel: e
                    })
                }, {
                    contextKey: t === c.AppContext.POPOUT ? _.POPOUT_MODAL_CONTEXT : _.DEFAULT_MODAL_CONTEXT
                })
            }

            function f(e, t) {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("312953").then(n.bind(n, "312953"));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        channel: e
                    })
                }, {
                    contextKey: t === c.AppContext.POPOUT ? _.POPOUT_MODAL_CONTEXT : _.DEFAULT_MODAL_CONTEXT
                })
            }

            function h(e) {}

            function p(e, t) {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: a
                    } = await n.el("203966").then(n.bind(n, "203966"));
                    return n => (0, i.jsx)(a, {
                        ...n,
                        channel: e,
                        onAccept: t
                    })
                })
            }

            function T(e, t) {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("281645").then(n.bind(n, "281645"));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        channel: e
                    })
                }, {
                    contextKey: t === c.AppContext.POPOUT ? _.POPOUT_MODAL_CONTEXT : _.DEFAULT_MODAL_CONTEXT
                })
            }

            function C(e) {
                let t = s.default.getId(),
                    n = (0, d.getStageBlockedUsersCount)(e),
                    i = r.default.isModerator(t, e);
                return !i && n > 0
            }

            function m(e, t) {
                var d;
                let c = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                t !== e.id && (0, o.setIsOnStartStageScreen)(!0), d = e, (0, l.transitionToChannel)(d.id), t !== e.id && c && ! function(e) {
                    let t = s.default.getId(),
                        l = r.default.isModerator(t, e.id),
                        o = u.default.isLive(e.id);
                    l && !o ? E(e) : l && o && function(e) {
                        (0, a.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("337649").then(n.bind(n, "337649"));
                            return n => (0, i.jsx)(t, {
                                ...n,
                                channel: e
                            })
                        })
                    }(e)
                }(e)
            }

            function S(e, t) {
                return (0, a.openModalLazy)(async () => {
                    let {
                        default: a
                    } = await n.el("371895").then(n.bind(n, "371895"));
                    return n => (0, i.jsx)(a, {
                        channel: e,
                        onConfirm: t,
                        ...n
                    })
                }), !0
            }
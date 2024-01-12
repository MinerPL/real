            "use strict";
            n.r(t), n.d(t, {
                RecentsPopout: function() {
                    return g
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("397613"),
                i = n("446674"),
                r = n("151426"),
                o = n("77078"),
                u = n("22082"),
                d = n("979268"),
                c = n("913796"),
                f = n("872173"),
                E = n("374363"),
                h = n("659500"),
                _ = n("981024"),
                S = n("519540"),
                T = n("80649"),
                p = n("385730"),
                N = n("788072"),
                I = n("49111"),
                m = n("782340");

            function g(e) {
                let {
                    onOpen: t,
                    onClose: n,
                    children: g,
                    badgeState: A,
                    popoutPosition: C,
                    popoutAlign: R
                } = e, [M, O] = a.useState(!1), [L, v] = function() {
                    let e = (0, i.useStateFromStores)([E.default], () => {
                            var e, t;
                            return null !== (t = null === (e = E.default.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : r.InboxTab.UNREADS
                        }),
                        t = a.useCallback(e => {
                            f.PreloadedUserSettingsActionCreators.updateAsync("inbox", t => {
                                if (t.currentTab === e) return !1;
                                t.currentTab = e
                            }, f.UserSettingsDelay.FREQUENT_USER_ACTION)
                        }, []);
                    return [e, t]
                }(), {
                    showTutorial: D,
                    setSeenTutorial: y
                } = function(e) {
                    let t = (0, i.useStateFromStores)([E.default], () => {
                            var e, t;
                            return null !== (t = null === (e = E.default.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t
                        }),
                        n = a.useCallback(() => {
                            f.PreloadedUserSettingsActionCreators.updateAsync("inbox", e => {
                                e.viewedTutorial = !0
                            }, f.UserSettingsDelay.INFREQUENT_USER_ACTION)
                        }, []),
                        l = !t && e === r.InboxTab.UNREADS;
                    return {
                        showTutorial: l,
                        setSeenTutorial: n
                    }
                }(L), x = a.useCallback(() => {
                    O(!1), M && (null == n || n())
                }, [n, M]), P = a.useCallback(() => {
                    O(!M), M ? null == n || n() : null == t || t()
                }, [n, t, M]), U = a.useCallback(() => {
                    P(), v(r.InboxTab.UNREADS)
                }, [v, P]);
                a.useEffect(() => (h.ComponentDispatch.subscribe(I.ComponentActions.TOGGLE_INBOX_UNREADS_TAB, U), () => void h.ComponentDispatch.unsubscribe(I.ComponentActions.TOGGLE_INBOX_UNREADS_TAB, U)), [U]);
                let {
                    showReminders: b
                } = d.default.useExperiment({
                    location: "RecentsPopout"
                }, {
                    autoTrackExposure: !1
                }), F = (0, c.useInDesktopNotificationCenterExperiment)(), {
                    enabled: j
                } = u.default.useExperiment({
                    location: "RecentsPopout"
                });
                a.useEffect(() => {
                    !b && L === r.InboxTab.TODOS && v(r.InboxTab.MENTIONS)
                });
                let G = a.useCallback(e => {
                    !e.shiftKey && x()
                }, [x]);
                return (0, l.jsx)(o.Popout, {
                    animation: o.Popout.Animation.NONE,
                    position: C,
                    align: R,
                    autoInvert: !1,
                    shouldShow: M,
                    onRequestClose: x,
                    renderPopout: function() {
                        return (0, l.jsx)(o.Dialog, {
                            "aria-label": m.default.Messages.INBOX,
                            children: L === r.InboxTab.FOR_YOU && F ? (0, l.jsx)(_.default, {
                                setTab: v,
                                badgeState: A,
                                closePopout: x
                            }) : L === r.InboxTab.MENTIONS ? (0, l.jsx)(T.default, {
                                setTab: v,
                                onJump: G,
                                badgeState: A,
                                closePopout: x
                            }) : j && L === r.InboxTab.GAME_INVITES ? (0, l.jsx)(N.default, {
                                setTab: v,
                                badgeState: A,
                                closePopout: x
                            }) : b && L === r.InboxTab.TODOS ? (0, l.jsx)(S.default, {
                                setTab: v,
                                onJump: G,
                                closePopout: x
                            }) : (0, l.jsx)(s.ErrorBoundary, {
                                fallback: (0, l.jsx)(p.UnreadsCrashed, {
                                    setTab: v,
                                    closePopout: x,
                                    badgeState: A
                                }),
                                children: (0, l.jsx)(p.default, {
                                    setTab: v,
                                    onJump: G,
                                    showTutorial: D,
                                    setSeenTutorial: y,
                                    closePopout: x,
                                    badgeState: A
                                })
                            })
                        })
                    },
                    ignoreModalClicks: !0,
                    children: (e, t) => {
                        let {
                            isShown: n
                        } = t;
                        return g(P, n, e)
                    }
                })
            }
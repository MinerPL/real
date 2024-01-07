            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("112821"),
                o = n("244201"),
                u = n("274870"),
                d = n("247013"),
                c = n("660478"),
                f = n("697218"),
                h = n("566998"),
                p = n("664336"),
                m = n("659500"),
                E = n("49111"),
                C = n("782340"),
                g = function(e) {
                    let {
                        channel: t
                    } = e, n = (0, s.useStateFromStores)([d.default, f.default], () => {
                        let e = f.default.getCurrentUser();
                        return null == e || t.isNSFW() && (!e.nsfwAllowed || !d.default.didAgree(t.getGuildId()))
                    }, [t]), [g, S] = l.useState(!1), _ = (0, s.useStateFromStores)([c.default], () => c.default.hasUnreadPins(t.id), [t]), I = (0, o.useWindowDispatch)(), T = (0, u.useIsBroadcastingGDM)(t.id), v = l.useCallback(() => {
                        !n && S(e => !e)
                    }, [n]);

                    function x(e) {
                        !(null == e ? void 0 : e.shiftKey) && I.dispatch(E.ComponentActions.POPOUT_CLOSE)
                    }
                    return (l.useEffect(() => (m.ComponentDispatch.subscribe(E.ComponentActions.TOGGLE_CHANNEL_PINS, v), () => {
                        m.ComponentDispatch.unsubscribe(E.ComponentActions.TOGGLE_CHANNEL_PINS, v)
                    }), [v]), T) ? null : (0, a.jsx)(i.Popout, {
                        shouldShow: g,
                        animation: i.Popout.Animation.NONE,
                        position: "bottom",
                        align: "right",
                        autoInvert: !1,
                        ignoreModalClicks: !0,
                        onRequestClose: () => S(!1),
                        renderPopout: function(e) {
                            return (0, a.jsx)(r.default, {
                                ...e,
                                onJump: x,
                                channel: t
                            })
                        },
                        children: (e, t) => {
                            let {
                                isShown: l
                            } = t;
                            return (0, a.jsx)(p.Icon, {
                                ...e,
                                onClick: v,
                                tooltip: l ? null : C.default.Messages.PINNED_MESSAGES,
                                icon: h.default,
                                "aria-label": C.default.Messages.PINNED_MESSAGES,
                                disabled: n,
                                showBadge: _,
                                selected: l
                            })
                        }
                    })
                }
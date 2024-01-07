            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("77078"),
                i = n("660279"),
                r = n("998650"),
                o = n("664336"),
                u = n("659500"),
                d = n("414833"),
                c = n("547772"),
                f = n("648564"),
                h = n("49111"),
                p = n("782340"),
                m = n("496913");

            function E(e) {
                let {
                    channel: t
                } = e, n = (0, d.useThreadNotificationSetting)(t), [E, C] = l.useState(!1), g = (0, s.useRedesignIconContext)().enabled;
                l.useEffect(() => {
                    let e = () => C(!0);
                    return u.ComponentDispatch.subscribe(h.ComponentActions.OPEN_THREAD_NOTIFICATION_SETTINGS, e), () => {
                        u.ComponentDispatch.unsubscribe(h.ComponentActions.OPEN_THREAD_NOTIFICATION_SETTINGS, e)
                    }
                }, []);
                let S = p.default.Messages.NOTIFICATION_SETTINGS;
                return (0, a.jsx)(s.Popout, {
                    shouldShow: E,
                    animation: s.Popout.Animation.NONE,
                    position: "bottom",
                    align: "right",
                    autoInvert: !1,
                    onRequestClose: () => C(!1),
                    renderPopout: e => (0, a.jsx)(c.default, {
                        ...e,
                        channel: t,
                        navId: "thread-context",
                        label: p.default.Messages.THREAD_ACTIONS_MENU_LABEL
                    }),
                    children: (e, t) => {
                        let {
                            isShown: l
                        } = t;
                        return (0, a.jsx)(o.default.Icon, {
                            ...e,
                            onClick: () => C(e => !e),
                            tooltip: l ? null : S,
                            icon: n === f.ThreadMemberFlags.NO_MESSAGES ? r.default : i.default,
                            foreground: n !== f.ThreadMemberFlags.NO_MESSAGES || g ? null : m.strikethrough,
                            "aria-label": S,
                            selected: l
                        })
                    }
                })
            }
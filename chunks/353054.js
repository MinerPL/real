            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("519705"),
                u = n("282109"),
                o = n("660279"),
                d = n("998650"),
                c = n("664336"),
                f = n("659500"),
                h = n("34676"),
                p = n("957825"),
                m = n("49111"),
                E = n("782340"),
                C = n("290236");

            function S(e) {
                let {
                    channel: t
                } = e, n = (0, i.useRedesignIconContext)().enabled, [S, g] = (0, s.useStateFromStoresArray)([u.default], () => [u.default.isChannelMuted(t.getGuildId(), t.id), u.default.resolvedMessageNotifications(t)], [t]), [_, I] = l.useState(!1);
                l.useEffect(() => {
                    let e = () => I(!0);
                    return f.ComponentDispatch.subscribe(m.ComponentActions.OPEN_THREAD_NOTIFICATION_SETTINGS, e), () => {
                        f.ComponentDispatch.unsubscribe(m.ComponentActions.OPEN_THREAD_NOTIFICATION_SETTINGS, e)
                    }
                }, []);
                let T = e => {
                        e.shiftKey ? r.default.updateChannelOverrideSettings(t.guild_id, t.id, {
                            muted: !S
                        }, h.NotificationLabel.muted(!S)) : I(e => !e)
                    },
                    v = E.default.Messages.NOTIFICATION_SETTINGS;
                return (0, a.jsx)(i.Popout, {
                    shouldShow: _,
                    animation: i.Popout.Animation.NONE,
                    position: "bottom",
                    align: "right",
                    autoInvert: !1,
                    onRequestClose: () => I(!1),
                    renderPopout: e => (0, a.jsx)(p.default, {
                        ...e,
                        channel: t,
                        navId: "channel-context",
                        label: E.default.Messages.CHANNEL_ACTIONS_MENU_LABEL
                    }),
                    children: (e, t) => {
                        let {
                            isShown: l
                        } = t;
                        return (0, a.jsx)(c.default.Icon, {
                            ...e,
                            onClick: T,
                            tooltip: l ? null : v,
                            icon: S || g !== m.UserNotificationSettings.ALL_MESSAGES ? d.default : o.default,
                            foreground: S && !n ? C.strikethrough : null,
                            "aria-label": v,
                            selected: l
                        })
                    }
                })
            }
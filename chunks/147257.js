            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                i = n("244201"),
                r = n("817963"),
                o = n("124824"),
                u = n("981913"),
                d = n("42203"),
                c = n("293137"),
                f = n("381546"),
                h = n("374021"),
                p = n("322224"),
                m = n("649275"),
                E = n("534222"),
                C = n("782340"),
                g = n("717682");

            function S(e) {
                let {
                    channelId: t,
                    onClick: n
                } = e, S = (0, i.useAppContext)(), _ = (0, E.useActiveEvent)(t), I = (0, l.useStateFromStores)([d.default], () => d.default.getChannel(t), [t]), {
                    canManageGuildEvent: T
                } = (0, r.useManageResourcePermissions)(I), v = T(_);
                if (null == _) return null;
                let x = () => {
                        if (null != I && (0, m.default)(I)) {
                            (0, h.openEndEventModal)(I, S);
                            return
                        }
                        n()
                    },
                    N = () => {
                        p.default.endEvent(_.id, _.guild_id)
                    };
                return v ? (0, a.jsx)(s.Popout, {
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, a.jsx)(o.default, {
                            children: (0, a.jsx)(s.Menu, {
                                navId: "exit-options",
                                onSelect: () => {},
                                "aria-label": C.default.Messages.DISCONNECT_MENU,
                                onClose: t,
                                children: (0, a.jsx)(s.MenuItem, {
                                    id: "end-voice-event",
                                    color: "danger",
                                    action: N,
                                    label: C.default.Messages.END_EVENT,
                                    icon: f.default
                                })
                            })
                        })
                    },
                    align: "center",
                    position: "top",
                    animation: s.Popout.Animation.FADE,
                    children: e => {
                        let {
                            onClick: t
                        } = e;
                        return (0, a.jsx)(u.CenterControlButton, {
                            label: C.default.Messages.DISCONNECT_SELF,
                            color: "red",
                            iconComponent: c.default,
                            onClick: x,
                            onPopoutClick: t,
                            className: g.buttonSpacing
                        })
                    }
                }) : (0, a.jsx)(u.CenterControlButton, {
                    className: g.buttonSpacing,
                    label: C.default.Messages.DISCONNECT_SELF,
                    color: "red",
                    iconComponent: c.default,
                    onClick: n
                })
            }
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("77078"),
                i = l("272030"),
                r = l("798609"),
                o = l("83910"),
                d = l("17837"),
                u = l("266926"),
                c = l("892692"),
                f = l("782340"),
                m = l("242556");

            function I(e) {
                let {
                    applicationIcon: t,
                    applicationName: I,
                    canNavigate: N,
                    command: T,
                    guildId: E
                } = e, h = a.useMemo(() => {
                    var e;
                    return 0 !== Object.keys(null !== (e = T.permissions) && void 0 !== e ? e : {}).length
                }, [T.permissions]), g = a.useCallback(() => {
                    null != T && N() && (0, s.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await l.el("555022").then(l.bind(l, "555022"));
                        return l => (0, n.jsx)(e, {
                            applicationIcon: t,
                            applicationId: T.applicationId,
                            applicationName: I,
                            command: T,
                            guildId: E,
                            ...l
                        })
                    })
                }, [t, I, N, T, E]), p = a.useCallback(e => {
                    (0, i.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("443070").then(l.bind(l, "443070"));
                        return t => (0, n.jsx)(e, {
                            ...t,
                            id: T.id,
                            label: f.default.Messages.COPY_ID_COMMAND
                        })
                    })
                }, [T]), S = T.type === r.ApplicationCommandType.CHAT ? o.default : d.default, O = (0, c.commandName)(T.type, T.displayName);
                return (0, n.jsxs)(s.Clickable, {
                    onClick: g,
                    className: m.item,
                    onContextMenu: p,
                    children: [(0, n.jsxs)("div", {
                        className: m.identifier,
                        children: [(0, n.jsx)(S, {
                            className: m.icon,
                            width: 24,
                            height: 24
                        }), (0, n.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: O
                        })]
                    }), (0, n.jsx)("div", {
                        className: m.statusContainer,
                        children: h ? (0, n.jsxs)("div", {
                            className: m.statusLine,
                            children: [(0, n.jsx)(s.Text, {
                                variant: "text-md/normal",
                                children: f.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_STATUS_HAS_OVERRIDES
                            }), (0, n.jsx)(u.default, {
                                height: 18,
                                width: 18,
                                className: m.statusIcon
                            })]
                        }) : null
                    })]
                })
            }
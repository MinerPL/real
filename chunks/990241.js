            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("446674"),
                i = l("77078"),
                r = l("333231"),
                o = l("83910"),
                d = l("482391"),
                u = l("683830"),
                c = l("859728"),
                f = l("167356"),
                m = l("29106"),
                I = l("782340"),
                N = l("640624");

            function T(e) {
                let {
                    application: t,
                    canNavigate: l,
                    guildId: c
                } = e, m = (0, s.useStateFromStores)([u.default], () => u.default.isUnavailable());
                return (a.useEffect(() => (d.initIntegrationPermissions(t.id), d.clearIntegrationPermissions), [t.id]), a.useEffect(() => {
                    d.getApplicationCommandPermissions(t.id, c, t.id), d.getApplicationCommands(c, t.id)
                }, [t.id, c]), m) ? null : (0, n.jsxs)(a.Fragment, {
                    children: [(0, n.jsx)(r.default, {
                        icon: (0, n.jsx)(o.default, {}),
                        title: I.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS
                    }), (0, n.jsx)(i.Text, {
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: I.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS_DESCRIPTION
                    }), (0, n.jsx)(E, {
                        guildId: c,
                        applicationId: t.id
                    }), (0, n.jsx)(f.default, {
                        applicationIcon: t.icon,
                        applicationName: t.name,
                        canNavigate: l,
                        guildId: c
                    })]
                })
            }

            function E(e) {
                let {
                    applicationId: t,
                    guildId: l
                } = e, {
                    originalApplicationPermissions: a,
                    editedTargetPermissions: s,
                    selectedPermissionCount: i
                } = (0, c.default)(l, t);
                return (0, n.jsx)("div", {
                    className: N.applicationPermissions,
                    children: (0, n.jsx)(m.default, {
                        applicationId: t,
                        guildId: l,
                        inModal: !1,
                        editedTargetPermissions: s,
                        originalApplicationPermissions: a,
                        selectedPermissionCount: i
                    })
                })
            }
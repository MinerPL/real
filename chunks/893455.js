            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("446674"),
                o = n("77078"),
                u = n("592407"),
                i = n("479756"),
                c = n("507950"),
                s = n("957255"),
                a = n("538137"),
                d = n("49111"),
                f = n("782340");

            function h(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.GuildSettingsSections.ROLES,
                    h = (0, r.useStateFromStores)([s.default], () => s.default.canImpersonateRole(e, t));
                return h ? (0, l.jsx)(o.MenuItem, {
                    id: "view-as-role",
                    label: f.default.Messages.VIEW_AS_ROLE,
                    icon: a.default,
                    action: () => {
                        u.default.close(), (0, i.startImpersonating)(e.id, {
                            type: c.ImpersonateType.ROLES,
                            roles: {
                                [t.id]: t
                            },
                            returnToSection: n
                        })
                    }
                }, "view-as-role") : null
            }
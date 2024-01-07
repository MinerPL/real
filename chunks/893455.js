            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                a = n("592407"),
                o = n("479756"),
                i = n("507950"),
                u = n("957255"),
                d = n("538137"),
                c = n("49111"),
                h = n("782340");

            function f(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.GuildSettingsSections.ROLES,
                    f = (0, l.useStateFromStores)([u.default], () => u.default.canImpersonateRole(e, t));
                return f ? (0, r.jsx)(s.MenuItem, {
                    id: "view-as-role",
                    label: h.default.Messages.VIEW_AS_ROLE,
                    icon: d.default,
                    action: () => {
                        a.default.close(), (0, o.startImpersonating)(e.id, {
                            type: i.ImpersonateType.ROLES,
                            roles: {
                                [t.id]: t
                            },
                            returnToSection: n
                        })
                    }
                }, "view-as-role") : null
            }
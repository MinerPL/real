            "use strict";
            n.r(t), n.d(t, {
                useRequestToSpeakPermission: function() {
                    return u
                }
            }), n("222007");
            var a = n("884691"),
                l = n("446674"),
                s = n("42203"),
                i = n("991170"),
                r = n("244480"),
                o = n("49111");

            function u(e) {
                let t = (0, l.useStateFromStores)([s.default], () => s.default.getChannel(e), [e]),
                    n = i.default.canEveryoneRole(o.Permissions.REQUEST_TO_SPEAK, t),
                    [u, d] = a.useState(n);
                return a.useEffect(() => {
                    n !== u && d(n)
                }, [n]), [u, e => {
                    null != t && (d(e), (0, r.setEveryoneRolePermissionAllowed)(t, o.Permissions.REQUEST_TO_SPEAK, e))
                }]
            }
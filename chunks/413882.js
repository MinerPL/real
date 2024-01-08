            "use strict";
            n.r(t), n.d(t, {
                useRequestToSpeakPermission: function() {
                    return o
                }
            }), n("222007");
            var a = n("884691"),
                l = n("446674"),
                s = n("42203"),
                i = n("991170"),
                r = n("244480"),
                u = n("49111");

            function o(e) {
                let t = (0, l.useStateFromStores)([s.default], () => s.default.getChannel(e), [e]),
                    n = i.default.canEveryoneRole(u.Permissions.REQUEST_TO_SPEAK, t),
                    [o, d] = a.useState(n);
                return a.useEffect(() => {
                    n !== o && d(n)
                }, [n]), [o, e => {
                    null != t && (d(e), (0, r.setEveryoneRolePermissionAllowed)(t, u.Permissions.REQUEST_TO_SPEAK, e))
                }]
            }
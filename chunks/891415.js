            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("446674"),
                a = n("271938"),
                s = n("325861");

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, l.useStateFromStoresObject)([s.default, a.default], () => {
                    let n = a.default.getId();
                    return s.default.getPermissionsForUser(n, e, t)
                }, [e, t])
            }
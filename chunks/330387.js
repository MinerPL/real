            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("446674"),
                r = n("913144");
            let s = null;
            class u extends l.default.Store {
                hasAction() {
                    return null != s
                }
                getAction() {
                    return s
                }
            }

            function a(e) {
                s = e.requiredAction
            }
            u.displayName = "UserRequiredActionStore";
            var i = new u(r.default, {
                CONNECTION_OPEN: a,
                USER_REQUIRED_ACTION_UPDATE: a
            })
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("446674"),
                u = n("913144");
            let i = null;
            class a extends r.default.Store {
                hasAction() {
                    return null != i
                }
                getAction() {
                    return i
                }
            }

            function c(e) {
                i = e.requiredAction
            }
            a.displayName = "UserRequiredActionStore";
            var s = new a(u.default, {
                CONNECTION_OPEN: c,
                USER_REQUIRED_ACTION_UPDATE: c
            })
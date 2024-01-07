            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("446674"),
                a = n("913144");
            let s = null;
            class i extends l.default.Store {
                hasAction() {
                    return null != s
                }
                getAction() {
                    return s
                }
            }

            function r(e) {
                s = e.requiredAction
            }
            i.displayName = "UserRequiredActionStore";
            var o = new i(a.default, {
                CONNECTION_OPEN: r,
                USER_REQUIRED_ACTION_UPDATE: r
            })
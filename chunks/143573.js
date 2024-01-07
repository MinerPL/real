            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("446674"),
                a = n("913144");
            let s = !1;
            class i extends l.default.Store {
                get blockedByProxy() {
                    return s
                }
            }
            i.displayName = "ProxyBlockStore";
            var r = new i(a.default, {
                PROXY_BLOCKED_REQUEST: function(e) {
                    s = !0
                }
            })
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("446674"),
                s = n("913144");
            let l = {};
            class i extends a.default.Store {
                getOptions(e) {
                    return l[e]
                }
            }
            i.displayName = "SendMessageOptionsStore";
            var r = new i(s.default, {
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t,
                        sendMessageOptions: n
                    } = e;
                    null != n && (l[t.id] = n), null != t.nonce && t.nonce in l && delete l[t.nonce]
                }
            })
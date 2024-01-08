            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("446674"),
                l = n("913144");
            let s = {
                    toastsEnabledForChannel: {}
                },
                i = s;
            class r extends a.default.PersistedStore {
                initialize(e) {
                    i = null != e ? e : s
                }
                getToastsEnabled(e) {
                    var t;
                    return null === (t = i.toastsEnabledForChannel[e]) || void 0 === t || t
                }
                getState() {
                    return i
                }
            }
            r.displayName = "CallChatToastsStore", r.persistKey = "CallChatToasts";
            var o = new r(l.default, {
                CALL_CHAT_TOASTS_SET_ENABLED: function(e) {
                    let {
                        channelId: t,
                        toastsEnabled: n
                    } = e;
                    i.toastsEnabledForChannel[t] = n
                },
                LOGOUT: function() {
                    i.toastsEnabledForChannel = {}
                }
            })
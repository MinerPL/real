            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("913144"),
                l = {
                    setCallChatToastsEnabled(e, t) {
                        a.default.dispatch({
                            type: "CALL_CHAT_TOASTS_SET_ENABLED",
                            channelId: e,
                            toastsEnabled: t
                        })
                    }
                }
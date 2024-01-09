            "use strict";
            n.r(t), n.d(t, {
                removeAutomodMessageNotice: function() {
                    return s
                }
            });
            var a = n("913144");

            function s(e) {
                a.default.dispatch({
                    type: "REMOVE_AUTOMOD_MESSAGE_NOTICE",
                    messageId: e
                })
            }
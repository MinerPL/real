            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("748820");

            function l(e) {
                return {
                    channelId: e,
                    sessionId: (0, i.v4)()
                }
            }
            var a = new class e {
                getForumChannelSessionId(e) {
                    return null == this.session && (this.session = l(e)), this.session.channelId !== e && (this.session = l(e)), this.session.sessionId
                }
            }
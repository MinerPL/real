            "use strict";
            n.r(t), n.d(t, {
                ReactionPicker: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("86678"),
                l = n("958706");

            function i(e) {
                let {
                    channel: t,
                    closePopout: n,
                    analyticsOverride: i,
                    onSelectEmoji: r,
                    messageId: o
                } = e;
                return (0, a.jsx)(s.default, {
                    closePopout: n,
                    channel: t,
                    onSelectEmoji: r,
                    pickerIntention: l.EmojiIntention.REACTION,
                    analyticsOverride: i,
                    messageId: o
                })
            }
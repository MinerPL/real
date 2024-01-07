            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("692038"),
                a = n("913491"),
                l = n("49111");

            function s(e, t) {
                return !(null == t || e.author.id !== t || e.state !== l.MessageStates.SENT || (0, a.default)(e) || !(0, i.canEditMessageWithStickers)(e) || e.hasFlag(l.MessageFlags.IS_VOICE_MESSAGE) || null != e.referralTrialOfferId || e.isPoll()) && !0
            }
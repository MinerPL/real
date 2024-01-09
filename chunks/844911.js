            "use strict";
            n.r(t), n.d(t, {
                trackViewedEvent: function() {
                    return o
                },
                CtaEventTypes: function() {
                    return a
                },
                trackCtaEvent: function() {
                    return u
                }
            });
            var s, a, l = n("599110"),
                i = n("764828"),
                r = n("49111");

            function o(e, t) {
                let {
                    channelId: n,
                    warningId: s,
                    senderId: a
                } = t;
                l.default.track(e, {
                    channel_id: n,
                    warning_id: parseInt(s),
                    warning_type: i.SafetyWarningTypes.STRANGER_DANGER,
                    other_user_id: a
                })
            }

            function u(e) {
                let {
                    channelId: t,
                    warningId: n,
                    senderId: s,
                    cta: a
                } = e;
                l.default.track(r.AnalyticEvents.SAFETY_WARNING_CTA_CLICKED, {
                    channel_id: t,
                    warning_id: parseInt(n),
                    warning_type: i.SafetyWarningTypes.STRANGER_DANGER,
                    other_user_id: s,
                    cta: a
                })
            }(s = a || (a = {})).DISMISS = "dismiss", s.OPEN_MORE_TIPS = "open_more_tips", s.USER_BANNER_BLOCK_CONFIRM = "user_banner_block_confirm", s.USER_BANNER_BLOCK_CANCEL = "user_banner_block_cancel", s.USER_MODAL_BLOCK_CONFIRM = "user_modal_block_confirm", s.USER_MODAL_BLOCK_CANCEL = "user_modal_block_cancel", s.USER_MODAL_MUTE = "user_modal_mute", s.USER_MODAL_UNMUTE = "user_modal_unmute", s.FEEDBACK_UPVOTE = "feedback_upvote", s.FEEDBACK_DOWNVOTE = "feedback_downvote"
            "use strict";
            n.r(t), n.d(t, {
                trackViewedEvent: function() {
                    return o
                },
                CtaEventTypes: function() {
                    return s
                },
                trackCtaEvent: function() {
                    return u
                }
            });
            var a, s, l = n("599110"),
                i = n("764828"),
                r = n("49111");

            function o(e, t) {
                let {
                    channelId: n,
                    warningId: a,
                    senderId: s
                } = t;
                l.default.track(e, {
                    channel_id: n,
                    warning_id: parseInt(a),
                    warning_type: i.SafetyWarningTypes.STRANGER_DANGER,
                    other_user_id: s
                })
            }

            function u(e) {
                let {
                    channelId: t,
                    warningId: n,
                    senderId: a,
                    cta: s
                } = e;
                l.default.track(r.AnalyticEvents.SAFETY_WARNING_CTA_CLICKED, {
                    channel_id: t,
                    warning_id: parseInt(n),
                    warning_type: i.SafetyWarningTypes.STRANGER_DANGER,
                    other_user_id: a,
                    cta: s
                })
            }(a = s || (s = {})).DISMISS = "dismiss", a.OPEN_MORE_TIPS = "open_more_tips", a.USER_BANNER_BLOCK_CONFIRM = "user_banner_block_confirm", a.USER_BANNER_BLOCK_CANCEL = "user_banner_block_cancel", a.USER_MODAL_BLOCK_CONFIRM = "user_modal_block_confirm", a.USER_MODAL_BLOCK_CANCEL = "user_modal_block_cancel", a.USER_MODAL_MUTE = "user_modal_mute", a.USER_MODAL_UNMUTE = "user_modal_unmute", a.FEEDBACK_UPVOTE = "feedback_upvote", a.FEEDBACK_DOWNVOTE = "feedback_downvote"
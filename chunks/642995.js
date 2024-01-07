            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var n = s("913144"),
                a = s("599110"),
                l = s("49111"),
                i = {
                    dismissForApplicationId(e) {
                        n.default.dispatch({
                            type: "ACTIVITY_INVITE_EDUCATION_DISMISS",
                            key: e,
                            value: !0
                        }), a.default.track(l.AnalyticEvents.CLOSE_TUTORIAL, {
                            tutorial: "activity-invite-nux-inline",
                            application_id: e,
                            acknowledged: !0
                        })
                    }
                }
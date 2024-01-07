            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var l = a("954016"),
                n = a("782340");

            function s(e) {
                let t = [{
                    value: l.ActivityFeedbackReasons.FAILED_LOAD,
                    label: e ? n.default.Messages.ACTIVITY_REPORT_ACTIVITY_END_FAILED_LOAD : n.default.Messages.ACTIVITY_REPORT_ACTIVITY_FAILED_LOAD
                }, {
                    value: l.ActivityFeedbackReasons.LAGGING,
                    label: e ? n.default.Messages.ACTIVITY_REPORT_ACTIVITY_END_LAGGING : n.default.Messages.ACTIVITY_REPORT_ACTIVITY_LAGGING
                }, {
                    value: l.ActivityFeedbackReasons.CONFUSING,
                    label: e ? n.default.Messages.ACTIVITY_REPORT_ACTIVITY_END_CONFUSING : n.default.Messages.ACTIVITY_REPORT_ACTIVITY_CONFUSING
                }, {
                    value: l.ActivityFeedbackReasons.NOT_FUN,
                    label: e ? n.default.Messages.ACTIVITY_REPORT_ACTIVITY_END_NOT_FUN : n.default.Messages.ACTIVITY_REPORT_ACTIVITY_NOT_FUN
                }, {
                    value: l.ActivityFeedbackReasons.OTHER,
                    label: n.default.Messages.CALL_FEEDBACK_OPTION_OTHER
                }];
                return t
            }
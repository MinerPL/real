            "use strict";
            var a, s, l, i;
            n.r(t), n.d(t, {
                MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL: function() {
                    return r
                },
                MessageRequestAnalyticsAction: function() {
                    return a
                },
                LIST_ROW_HEIGHT: function() {
                    return o
                },
                LIST_SECTION_HEIGHT: function() {
                    return u
                },
                BATCH_REJECT_LIMIT: function() {
                    return d
                },
                MessageRequestSections: function() {
                    return s
                }
            });
            let r = "Message Request Accept Confirmation";
            (l = a || (a = {}))[l.ACCEPT = 0] = "ACCEPT", l[l.REJECT = 1] = "REJECT", l[l.ACCEPT_CONFIRMATION_PROMPT = 2] = "ACCEPT_CONFIRMATION_PROMPT", l[l.DISMISS_CONFIRMATION_PROMPT = 3] = "DISMISS_CONFIRMATION_PROMPT", l[l.ACCEPT_HAM_CONFIRMATION_PROMPT = 4] = "ACCEPT_HAM_CONFIRMATION_PROMPT", l[l.DISMISS_HAM_CONFIRMATION_PROMPT = 5] = "DISMISS_HAM_CONFIRMATION_PROMPT";
            let o = 73,
                u = 26,
                d = 100;
            (i = s || (s = {})).REQUESTS = "REQUESTS", i.SPAM = "SPAM"
            "use strict";

            function i(e) {
                return null != e && new Date(e) > new Date
            }

            function r(e) {
                return i(null == e ? void 0 : e.communicationDisabledUntil)
            }
            n.r(t), n.d(t, {
                isCommunicationDisabled: function() {
                    return i
                },
                isMemberCommunicationDisabled: function() {
                    return r
                }
            })
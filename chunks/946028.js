            "use strict";
            n.r(t), n.d(t, {
                createPrivateChannelIntegration: function() {
                    return r
                }
            });
            var i = n("653047");

            function r(e) {
                return {
                    ...e,
                    application: i.default.createFromServer(e.application)
                }
            }
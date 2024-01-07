            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("167726"),
                a = n("84460");

            function l(e) {
                let t = a.default.getState();
                return t.isEnabled && t.useActivityUrlOverride && null != t.activityUrlOverride && "" !== t.activityUrlOverride ? t.activityUrlOverride : i.default.inTestModeForEmbeddedApplication(e) ? i.default.testModeOriginURL : function(e) {
                    let t = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST;
                    return null == t ? null : "https://".concat(e, ".").concat(t)
                }(e)
            }
            "use strict";
            l.r(t), l.d(t, {
                SILENT_RE: function() {
                    return r
                },
                canSuppressNotifications: function() {
                    return i
                },
                default: function() {
                    return u
                }
            });
            var n = l("729912");
            let a = "@silent",
                r = new RegExp("^".concat(a, "(\\s|$)"));

            function i() {
                let e = n.SilentMessagesExperiment.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                });
                return e.allowSending
            }

            function u(e) {
                return i() && null != e.match(r) ? [!0, e.substring(a.length).trim()] : [!1, e]
            }
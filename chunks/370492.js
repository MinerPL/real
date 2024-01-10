            "use strict";
            n.r(t), n.d(t, {
                updateDevToolsSettings: function() {
                    return l
                },
                toggleDisplayDevTools: function() {
                    return s
                },
                clearAnalyticsLog: function() {
                    return u
                }
            });
            var i = n("913144"),
                a = n("584369");

            function l(e) {
                i.default.dispatch({
                    type: "DEV_TOOLS_SETTINGS_UPDATE",
                    settings: e
                })
            }

            function s() {
                l({
                    displayTools: !a.default.displayTools
                })
            }

            function u() {
                i.default.dispatch({
                    type: "ANALYTICS_LOG_CLEAR"
                })
            }
            "use strict";
            n.r(t), n.d(t, {
                handleDCShownToUser: function() {
                    return r
                },
                handleDCDismissed: function() {
                    return s
                },
                resetDismissibleContentFrameworkStore: function() {
                    return a
                },
                overrideDismissibleContentFramework: function() {
                    return o
                }
            });
            var i = n("913144");
            let r = e => {
                    i.default.dispatch({
                        type: "DCF_HANDLE_DC_SHOWN",
                        dismissibleContent: e
                    })
                },
                s = e => {
                    i.default.dispatch({
                        type: "DCF_HANDLE_DC_DISMISSED",
                        dismissibleContent: e
                    })
                },
                a = () => {
                    i.default.dispatch({
                        type: "DCF_RESET"
                    })
                },
                o = e => {
                    i.default.dispatch({
                        type: "DCF_DAILY_CAP_OVERRIDE",
                        value: e
                    })
                }
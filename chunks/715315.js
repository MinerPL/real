            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("872717"),
                s = n("913144"),
                l = n("49111"),
                i = {
                    show(e, t) {
                        s.default.wait(() => s.default.dispatch({
                            type: "TUTORIAL_INDICATOR_SHOW",
                            tutorialId: e,
                            renderData: t
                        }))
                    },
                    hide(e) {
                        s.default.wait(() => s.default.dispatch({
                            type: "TUTORIAL_INDICATOR_HIDE",
                            tutorialId: e
                        }))
                    },
                    dismiss(e) {
                        s.default.wait(() => s.default.dispatch({
                            type: "TUTORIAL_INDICATOR_DISMISS",
                            tutorialId: e
                        })), a.default.put({
                            url: l.Endpoints.TUTORIAL_INDICATOR(e),
                            oldFormErrors: !0
                        })
                    },
                    suppressAll() {
                        s.default.dispatch({
                            type: "TUTORIAL_INDICATOR_SUPPRESS_ALL"
                        }), a.default.post({
                            url: l.Endpoints.TUTORIAL_INDICATORS_SUPPRESS,
                            oldFormErrors: !0
                        })
                    }
                }
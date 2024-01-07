            "use strict";
            n.r(t), n.d(t, {
                removePunctuation: function() {
                    return d
                },
                getQueriesFromUserInput: function() {
                    return c
                },
                throttledTrackExpressionSuggestionDisplayed: function() {
                    return _
                }
            }), n("781738");
            var i = n("369470"),
                a = n.n(i),
                l = n("599110"),
                s = n("721423"),
                r = n("49111");
            let u = /(!|\.|;|,|-|—|–|\?|"|')/g,
                o = /(\n|\t|\s)/g,
                d = e => e.replace(u, "").replace(o, " "),
                c = e => null == e ? [] : d(e).trim().split(" "),
                _ = a(e => {
                    l.default.track(r.AnalyticEvents.AUTO_SUGGEST_DISPLAYED, {
                        suggestion_trigger: e
                    })
                }, s.SUGGESTIONS_SHOWED_INSTRUMENTATION_RATE_LIMIT_MS, {
                    leading: !0,
                    trailing: !1
                })
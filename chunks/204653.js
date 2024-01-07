            "use strict";
            var l, a, s, i;

            function r(e, t) {
                return {
                    id: e.id,
                    topic: e.topic,
                    summShort: e.summ_short,
                    people: Array.from(new Set(e.people)),
                    startId: e.start_id,
                    endId: e.end_id,
                    count: e.count,
                    channelId: t,
                    source: e.source,
                    type: e.type
                }
            }
            n.r(t), n.d(t, {
                SummarySources: function() {
                    return l
                },
                createSummaryFromServer: function() {
                    return r
                }
            }), n("222007"), (s = l || (l = {}))[s.SOURCE_0 = 0] = "SOURCE_0", s[s.SOURCE_1 = 1] = "SOURCE_1", (i = a || (a = {}))[i.UNSET = 0] = "UNSET", i[i.SOURCE_1 = 1] = "SOURCE_1", i[i.SOURCE_2 = 2] = "SOURCE_2"
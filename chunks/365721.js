            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var a = s("396076"),
                n = s("782340");

            function l(e) {
                var t, s;
                let l = (null == e ? void 0 : null === (t = e.latestRequest) || void 0 === t ? void 0 : t.state) === a.CreatorMonetizationApplicationState.REJECTED,
                    i = function(e) {
                        let t;
                        if (null == e) return;
                        let s = Date.parse(e),
                            a = Date.now();
                        if (isNaN(s) || s < a) return;
                        let l = 1440,
                            i = 7 * l,
                            r = 30 * l,
                            o = Math.round((s - a) / 6e4),
                            d = e => Math.round(o / e);
                        return t = o >= r ? n.default.Messages.DURATION_MONTHS.format({
                            months: d(r)
                        }) : o >= i ? n.default.Messages.DURATION_WEEKS.format({
                            weeks: d(i)
                        }) : o >= l ? n.default.Messages.DURATION_DAYS.format({
                            days: d(l)
                        }) : o >= 60 ? n.default.Messages.DURATION_HOURS.format({
                            hours: d(60)
                        }) : n.default.Messages.DURATION_MINUTES.format({
                            minutes: o
                        })
                    }(null == e ? void 0 : null === (s = e.rejection) || void 0 === s ? void 0 : s.can_reapply_at);
                return {
                    isApplicationRejected: l,
                    requestCooldownDuration: i
                }
            }
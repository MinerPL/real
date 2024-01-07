            "use strict";
            n.r(t), n.d(t, {
                getEmptyActivityFormatter: function() {
                    return c
                },
                getActivityWindowTimestampFormatter: function() {
                    return E
                },
                formatUserActivityTimestamp: function() {
                    return f
                },
                formatLinkTimestamp: function() {
                    return _
                },
                isUserAction: function() {
                    return h
                },
                isGuildAction: function() {
                    return C
                },
                displayTypeFromString: function() {
                    return T
                }
            }), n("222007");
            var a = n("866227"),
                s = n.n(a),
                i = n("922832"),
                l = n("782340");
            let r = 3600,
                o = 24 * r,
                u = 2 * o,
                d = 7 * o,
                c = () => ({
                    today: l.default.Messages.FAMILY_CENTER_EMPTY_ACTIVITY_TODAY,
                    yesterday: l.default.Messages.FAMILY_CENTER_EMPTY_ACTIVITY_YESTERDAY,
                    days: l.default.Messages.FAMILY_CENTER_EMPTY_ACTIVITY_DAYS
                }),
                E = e => e ? {
                    today: l.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_PARENT_TODAY,
                    yesterday: l.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_PARENT_YESTERDAY,
                    days: l.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_PARENT_DAYS
                } : {
                    today: l.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_TEEN_TODAY,
                    yesterday: l.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_TEEN_YESTERDAY,
                    days: l.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_TEEN_DAYS
                },
                f = (e, t, n) => {
                    let a = s().diff(s(e), "s"),
                        i = t(),
                        l = s(e).format("LL");
                    return l = a < o ? i.today : a < u ? i.yesterday : i.days.format({
                        days: Math.min(Math.floor(a / o), null != n ? n : 999)
                    })
                },
                _ = (e, t) => {
                    let n = s().diff(s(e), "s"),
                        a = t(),
                        i = s(e).format("LL");
                    return i = n < 60 ? a.seconds : n < r ? a.minutes.format({
                        count: Math.floor(n / 60)
                    }) : n < o ? a.hours.format({
                        count: Math.floor(n / r)
                    }) : n < u ? a.yesterday : n < d ? a.days.format({
                        count: Math.floor(n / o)
                    }) : a.date.format({
                        date: i
                    })
                },
                h = e => e.display_type === i.TeenActionDisplayType.USER_ADD || e.display_type === i.TeenActionDisplayType.USER_INTERACTION || e.display_type === i.TeenActionDisplayType.USER_CALLED,
                C = e => e.display_type === i.TeenActionDisplayType.GUILD_ADD || e.display_type === i.TeenActionDisplayType.GUILD_INTERACTION,
                T = e => {
                    let t = Object.values(i.TeenActionDisplayType);
                    for (let n of t)
                        if (n.toString() === e) return n
                }
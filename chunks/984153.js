            "use strict";
            r.r(e), r.d(e, {
                initializeOptions: function() {
                    return y
                },
                parseOptions: function() {
                    return c
                },
                buildTimeset: function() {
                    return h
                }
            }), r("424973"), r("70102");
            var n = r("676730"),
                i = r("868892"),
                a = r("871111"),
                o = r("191899"),
                s = r("737912"),
                u = r("466739"),
                d = r("823135");

            function y(t) {
                for (var e = [], r = Object.keys(t), i = 0; i < r.length; i++) {
                    var u = r[i];
                    !(0, a.includes)(o.defaultKeys, u) && e.push(u), (0, s.isDate)(t[u]) && !(0, s.isValidDate)(t[u]) && e.push(u)
                }
                if (e.length) throw Error("Invalid options: " + e.join(", "));
                return (0, n.__assign)({}, t)
            }

            function c(t) {
                var e = (0, n.__assign)((0, n.__assign)({}, o.DEFAULT_OPTIONS), y(t));
                if ((0, a.isPresent)(e.byeaster) && (e.freq = o.RRule.YEARLY), !((0, a.isPresent)(e.freq) && o.RRule.FREQUENCIES[e.freq])) throw Error("Invalid frequency: ".concat(e.freq, " ").concat(t.freq));
                if (!e.dtstart && (e.dtstart = new Date(new Date().setMilliseconds(0))), (0, a.isPresent)(e.wkst) ? (0, a.isNumber)(e.wkst) || (e.wkst = e.wkst.weekday) : e.wkst = o.RRule.MO.weekday, (0, a.isPresent)(e.bysetpos)) {
                    (0, a.isNumber)(e.bysetpos) && (e.bysetpos = [e.bysetpos]);
                    for (var r = 0; r < e.bysetpos.length; r++) {
                        var i = e.bysetpos[r];
                        if (0 === i || !(i >= -366 && i <= 366)) throw Error("bysetpos must be between 1 and 366, or between -366 and -1")
                    }
                }
                if (!(e.byweekno || (0, a.notEmpty)(e.byweekno) || (0, a.notEmpty)(e.byyearday) || e.bymonthday || (0, a.notEmpty)(e.bymonthday) || (0, a.isPresent)(e.byweekday) || (0, a.isPresent)(e.byeaster))) switch (e.freq) {
                    case o.RRule.YEARLY:
                        !e.bymonth && (e.bymonth = e.dtstart.getUTCMonth() + 1), e.bymonthday = e.dtstart.getUTCDate();
                        break;
                    case o.RRule.MONTHLY:
                        e.bymonthday = e.dtstart.getUTCDate();
                        break;
                    case o.RRule.WEEKLY:
                        e.byweekday = [(0, s.getWeekday)(e.dtstart)]
                }
                if ((0, a.isPresent)(e.bymonth) && !(0, a.isArray)(e.bymonth) && (e.bymonth = [e.bymonth]), (0, a.isPresent)(e.byyearday) && !(0, a.isArray)(e.byyearday) && (0, a.isNumber)(e.byyearday) && (e.byyearday = [e.byyearday]), (0, a.isPresent)(e.bymonthday)) {
                    if ((0, a.isArray)(e.bymonthday)) {
                        for (var d = [], c = [], r = 0; r < e.bymonthday.length; r++) {
                            var i = e.bymonthday[r];
                            i > 0 ? d.push(i) : i < 0 && c.push(i)
                        }
                        e.bymonthday = d, e.bynmonthday = c
                    } else e.bymonthday < 0 ? (e.bynmonthday = [e.bymonthday], e.bymonthday = []) : (e.bynmonthday = [], e.bymonthday = [e.bymonthday])
                } else e.bymonthday = [], e.bynmonthday = [];
                if ((0, a.isPresent)(e.byweekno) && !(0, a.isArray)(e.byweekno) && (e.byweekno = [e.byweekno]), (0, a.isPresent)(e.byweekday)) {
                    if ((0, a.isNumber)(e.byweekday)) e.byweekday = [e.byweekday], e.bynweekday = null;
                    else if ((0, a.isWeekdayStr)(e.byweekday)) e.byweekday = [u.Weekday.fromStr(e.byweekday).weekday], e.bynweekday = null;
                    else if (e.byweekday instanceof u.Weekday) !e.byweekday.n || e.freq > o.RRule.MONTHLY ? (e.byweekday = [e.byweekday.weekday], e.bynweekday = null) : (e.bynweekday = [
                        [e.byweekday.weekday, e.byweekday.n]
                    ], e.byweekday = null);
                    else {
                        for (var h = [], l = [], r = 0; r < e.byweekday.length; r++) {
                            var f = e.byweekday[r];
                            if ((0, a.isNumber)(f)) {
                                h.push(f);
                                continue
                            }
                            if ((0, a.isWeekdayStr)(f)) {
                                h.push(u.Weekday.fromStr(f).weekday);
                                continue
                            }!f.n || e.freq > o.RRule.MONTHLY ? h.push(f.weekday) : l.push([f.weekday, f.n])
                        }
                        e.byweekday = (0, a.notEmpty)(h) ? h : null, e.bynweekday = (0, a.notEmpty)(l) ? l : null
                    }
                } else e.bynweekday = null;
                return (0, a.isPresent)(e.byhour) ? (0, a.isNumber)(e.byhour) && (e.byhour = [e.byhour]) : e.byhour = e.freq < o.RRule.HOURLY ? [e.dtstart.getUTCHours()] : null, (0, a.isPresent)(e.byminute) ? (0, a.isNumber)(e.byminute) && (e.byminute = [e.byminute]) : e.byminute = e.freq < o.RRule.MINUTELY ? [e.dtstart.getUTCMinutes()] : null, (0, a.isPresent)(e.bysecond) ? (0, a.isNumber)(e.bysecond) && (e.bysecond = [e.bysecond]) : e.bysecond = e.freq < o.RRule.SECONDLY ? [e.dtstart.getUTCSeconds()] : null, {
                    parsedOptions: e
                }
            }

            function h(t) {
                var e = t.dtstart.getTime() % 1e3;
                if (!(0, i.freqIsDailyOrGreater)(t.freq)) return [];
                var r = [];
                return t.byhour.forEach(function(n) {
                    t.byminute.forEach(function(i) {
                        t.bysecond.forEach(function(t) {
                            r.push(new d.Time(n, i, t, e))
                        })
                    })
                }), r
            }
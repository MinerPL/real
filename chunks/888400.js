            "use strict";
            n.r(t), n.d(t, {
                isSameDay: function() {
                    return d
                },
                isWithinInterval: function() {
                    return f
                },
                dateFormat: function() {
                    return E
                },
                calendarFormat: function() {
                    return h
                },
                accessibilityLabelCalendarFormat: function() {
                    return p
                },
                diffAsUnits: function() {
                    return S
                },
                unitsAsStrings: function() {
                    return m
                }
            });
            var i = n("866227"),
                r = n.n(i),
                s = n("432959"),
                a = n("915639");
            let o = 864e5,
                l = Object.create(null);

            function u(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = e.getTime();
                return !t && (n -= 6e4 * e.getTimezoneOffset()), Math.floor(n / o) * o
            }

            function c(e, t) {
                return Math.floor((u(e, !1) - u(t, !1)) / o)
            }

            function d(e, t) {
                let n = e.toDate(),
                    i = t.toDate();
                return Math.abs(+n - +i) <= o && n.getDate() === i.getDate()
            }

            function f(e, t, n) {
                return Math.abs(e.valueOf() - t.valueOf()) < n
            }

            function E(e, t) {
                let n = "".concat(e.locale(), ":").concat(t),
                    i = l[n];
                return null == i && (i = l[n] = (0, s.default)(t)), i(e.toDate())
            }

            function h(e) {
                let t;
                let n = r.localeData(),
                    i = r(),
                    s = c(e.toDate(), i.toDate());
                return s < -1 ? E(e, "L LT") : (t = s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : "sameElse", E(e, n.calendar(t, e, i)))
            }

            function p(e) {
                let t;
                let n = r.localeData(),
                    i = r(),
                    s = c(e.toDate(), i.toDate());
                return "sameElse" == (t = s < -1 ? "sameElse" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : "sameElse") ? E(e, "LLL") : E(e, n.calendar(t, e, i))
            }
            a.default.addChangeListener(() => {
                l = Object.create(null)
            });
            let _ = [{
                key: "days",
                millisecondsInUnit: 864e5
            }, {
                key: "hours",
                millisecondsInUnit: 36e5
            }, {
                key: "minutes",
                millisecondsInUnit: 6e4
            }, {
                key: "seconds",
                millisecondsInUnit: 1e3
            }];

            function S(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = {
                        days: 0,
                        hours: 0,
                        minutes: 0,
                        seconds: n ? 1 : 0
                    };
                if (e > t || n && Number(e) + 1200 > Number(t)) return i;
                let r = Number(t) - Number(e);
                return _.forEach(e => {
                    let {
                        key: t,
                        millisecondsInUnit: n
                    } = e;
                    i[t] = Math.floor(r / n), r -= i[t] * n
                }), i
            }

            function m(e, t) {
                return e.days > 0 ? t.days.format({
                    days: e.days,
                    hours: e.hours
                }) : e.hours > 0 ? t.hours.format({
                    hours: e.hours,
                    minutes: e.minutes
                }) : t.minutes.format({
                    minutes: Math.max(1, e.minutes)
                })
            }
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return _
                }
            }), l("222007"), l("424973");
            var a = l("37983"),
                n = l("884691"),
                s = l("77078"),
                r = l("20606"),
                d = l("956089"),
                u = l("822516"),
                i = l("757767"),
                c = l("782340"),
                o = l("572721");
            let E = new Set([0, 6]);

            function _(e) {
                let {
                    startDate: t,
                    recurrenceRule: l,
                    onRecurrenceChange: _
                } = e, g = n.useMemo(() => (0, u.recurrenceRuleToOption)(t, l), [l, t]), f = function(e) {
                    let t = e.toDate(),
                        l = Math.ceil(t.getDate() / 7),
                        a = t.toLocaleString(c.default.getLocale(), {
                            weekday: "long"
                        }),
                        n = [{
                            value: i.RecurrenceOptions.NONE,
                            label: c.default.Messages.CREATE_EVENT_RECUR_NONE
                        }, {
                            value: i.RecurrenceOptions.WEEKLY,
                            label: c.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
                                weekday: a
                            })
                        }, {
                            value: i.RecurrenceOptions.BIWEEKLY,
                            label: c.default.Messages.CREATE_EVENT_RECUR_BIWEEKLY.format({
                                weekday: a
                            })
                        }, {
                            value: i.RecurrenceOptions.MONTHLY,
                            label: c.default.Messages.CREATE_EVENT_RECUR_MONTHLY.format({
                                nth: l,
                                weekday: a
                            })
                        }, {
                            value: i.RecurrenceOptions.YEARLY,
                            label: c.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                                date: t.toLocaleString(c.default.getLocale(), {
                                    month: "short",
                                    day: "2-digit"
                                })
                            })
                        }];
                    return !E.has(t.getDay()) && n.push({
                        value: i.RecurrenceOptions.WEEKDAY_ONLY,
                        label: c.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
                    }), n
                }(t), h = e => e.toString(), R = (0, a.jsxs)("div", {
                    className: o.title,
                    children: [c.default.Messages.CREATE_EVENT_RECUR_LABEL, (0, a.jsx)(d.TextBadge, {
                        text: c.default.Messages.NEW,
                        color: r.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND
                    })]
                });
                return (0, a.jsx)(s.FormItem, {
                    title: R,
                    required: !0,
                    children: (0, a.jsx)(s.Select, {
                        placeholder: "gaming",
                        options: f,
                        select: _,
                        serialize: h,
                        isSelected: e => null != g && h(e) === h(g)
                    })
                })
            }
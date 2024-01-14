"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007"), n("424973");
var l = n("37983"),
  a = n("884691"),
  r = n("77078"),
  s = n("20606"),
  i = n("956089"),
  u = n("822516"),
  o = n("757767"),
  c = n("782340"),
  d = n("572721");
let f = new Set([0, 6]);

function E(e) {
  let {
    startDate: t,
    recurrenceRule: n,
    onRecurrenceChange: E
  } = e, h = a.useMemo(() => (0, u.recurrenceRuleToOption)(t, n), [n, t]), g = function(e) {
    let t = e.toDate(),
      n = Math.ceil(t.getDate() / 7),
      l = t.toLocaleString(c.default.getLocale(), {
        weekday: "long"
      }),
      a = [{
        value: o.RecurrenceOptions.NONE,
        label: c.default.Messages.CREATE_EVENT_RECUR_NONE
      }, {
        value: o.RecurrenceOptions.WEEKLY,
        label: c.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
          weekday: l
        })
      }, {
        value: o.RecurrenceOptions.BIWEEKLY,
        label: c.default.Messages.CREATE_EVENT_RECUR_BIWEEKLY.format({
          weekday: l
        })
      }, {
        value: o.RecurrenceOptions.MONTHLY,
        label: c.default.Messages.CREATE_EVENT_RECUR_MONTHLY.format({
          nth: n,
          weekday: l
        })
      }, {
        value: o.RecurrenceOptions.YEARLY,
        label: c.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
          date: t.toLocaleString(c.default.getLocale(), {
            month: "short",
            day: "2-digit"
          })
        })
      }];
    return !f.has(t.getDay()) && a.push({
      value: o.RecurrenceOptions.WEEKDAY_ONLY,
      label: c.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
    }), a
  }(t), _ = e => e.toString(), S = (0, l.jsxs)("div", {
    className: d.title,
    children: [c.default.Messages.CREATE_EVENT_RECUR_LABEL, (0, l.jsx)(i.TextBadge, {
      text: c.default.Messages.NEW,
      color: s.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND
    })]
  });
  return (0, l.jsx)(r.FormItem, {
    title: S,
    required: !0,
    children: (0, l.jsx)(r.Select, {
      placeholder: "gaming",
      options: g,
      select: E,
      serialize: _,
      isSelected: e => null != h && _(e) === _(h)
    })
  })
}
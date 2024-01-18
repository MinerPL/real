"use strict";
n.r(t), n.d(t, {
  useMutedUntilText: function() {
    return r
  },
  default: function() {
    return s
  }
});
var i = n("37983");
n("884691");
var l = n("77078"),
  a = n("782340");

function r(e) {
  return null == e || null == e.end_time ? null : a.default.Messages.MUTED_UNTIL_TIME.format({
    endTime: new Date(e.end_time).toLocaleString(a.default.getLocale(), {
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    })
  })
}

function s(e) {
  let {
    muteConfig: t,
    className: n
  } = e, a = r(t);
  return null != a ? (0, i.jsx)(l.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: n,
    children: a
  }) : null
}
"use strict";
a.r(t), a.d(t, {
  default: function() {
    return s
  }
});
var r = a("37983");
a("884691");
var n = a("292508"),
  i = a("500664"),
  l = a("782340");

function s(e) {
  let {
    windowKey: t
  } = e;
  return (0, r.jsx)(n.default, {
    withTitleBar: !0,
    windowKey: t,
    title: l.default.Messages.RTC_DEBUG_POPOUT_WINDOW_TITLE,
    children: (0, r.jsx)(i.default, {})
  })
}
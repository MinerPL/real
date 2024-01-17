"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("37983");
n("884691");
var l = n("201131"),
  a = n("292200"),
  i = n("119715");

function r(e) {
  let {
    message: t,
    ...n
  } = e;
  return (0, l.isAutomodNotification)(t) ? (0, s.jsx)(i.default, {
    message: t,
    ...n
  }) : (0, s.jsx)(a.default, {
    message: t,
    ...n
  })
}
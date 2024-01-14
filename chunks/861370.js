"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("37983");
n("884691");
var l = n("77078"),
  u = n("845579"),
  o = n("662255"),
  a = n("306160");

function r(e) {
  let {
    id: t,
    label: n,
    onSuccess: r,
    shiftId: d,
    showIconFirst: s
  } = e, c = u.DeveloperMode.useSetting();
  if (__OVERLAY__ || !c || !a.SUPPORTS_COPY) return null;
  let f = "devmode-copy-id-".concat(t);
  return (0, i.jsx)(l.MenuItem, {
    id: f,
    label: n,
    action: function(e) {
      let n = null != d && e.shiftKey ? d : t;
      (0, a.copy)(n), null == r || r()
    },
    icon: o.default,
    showIconFirst: s
  }, f)
}
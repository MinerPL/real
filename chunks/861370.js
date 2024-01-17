"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var u = n("77078"),
  a = n("845579"),
  d = n("662255"),
  i = n("306160");

function r(e) {
  let {
    id: t,
    label: n,
    onSuccess: r,
    shiftId: s,
    showIconFirst: o
  } = e, c = a.DeveloperMode.useSetting();
  if (__OVERLAY__ || !c || !i.SUPPORTS_COPY) return null;
  let E = "devmode-copy-id-".concat(t);
  return (0, l.jsx)(u.MenuItem, {
    id: E,
    label: n,
    action: function(e) {
      let n = null != s && e.shiftKey ? s : t;
      (0, i.copy)(n), null == r || r()
    },
    icon: d.default,
    showIconFirst: o
  }, E)
}
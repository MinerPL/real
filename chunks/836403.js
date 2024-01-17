"use strict";
n.r(e), n.d(e, {
  serializePushNotificationLogs: function() {
    return r
  },
  getPushNotificationLogs: function() {
    return i
  }
});
var o = n("95410"),
  a = n("271938"),
  l = n("49111");

function r(t) {
  if (0 === t.length) return "No logs";
  let e = o.default.get(l.DEVICE_TOKEN),
    n = o.default.get(l.DEVICE_VOIP_TOKEN),
    a = t.map(t => {
      let e = "Displayed";
      return t.silent && (e = "Silent"), "".concat(new Date(t.receivedTimestamp).toISOString(), " [").concat(t.type, "] ").concat(e, " - ").concat(t.title, " - ").concat(t.content, " ")
    }).join("\n");
  return "".concat(null != e ? "Device Token: ".concat(e) : "", "\n").concat(null != n ? "Device Voip Token: ".concat(n) : "", "\n\n").concat(a)
}
async function i() {
  let t = a.default.getId(),
    e = [];
  return e
}
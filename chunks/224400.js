"use strict";
n.r(t), n.d(t, {
  getPurchaseToken: function() {
    return o
  },
  getPurchaseTokenHash: function() {
    return d
  }
}), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997"), n("222007");
var r = n("748820"),
  i = n("95410"),
  l = n("718517");
let u = "purchase_token",
  a = 60 * l.default.Millis.DAY;

function o() {
  let e = i.default.get(u);
  if (null != e && e.expires >= Date.now()) return e.purchaseToken;
  let t = (0, r.v4)();
  return i.default.set(u, {
    purchaseToken: t,
    expires: Date.now() + a
  }), t
}
async function d() {
  let e = new Uint8Array(o().split("").map(e => e.charCodeAt(0))),
    t = await window.crypto.subtle.digest({
      name: "SHA-256"
    }, e);
  return btoa(String.fromCharCode(...new Uint8Array(t)))
}
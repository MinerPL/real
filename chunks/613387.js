"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("446674"),
  i = n("913144");
let l = {};
class s extends a.default.Store {
  getOptions(e) {
    return l[e]
  }
}
s.displayName = "SendMessageOptionsStore";
var u = new s(i.default, {
  MESSAGE_CREATE: function(e) {
    let {
      message: t,
      sendMessageOptions: n
    } = e;
    null != n && (l[t.id] = n), null != t.nonce && t.nonce in l && delete l[t.nonce]
  }
})
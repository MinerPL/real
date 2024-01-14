"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("913144"),
  s = n("316272"),
  i = n("200008");

function l(e) {
  let {
    channel: {
      id: t
    }
  } = e;
  (0, i.removeFavoriteChannel)(t)
}
class r extends s.default {
  _initialize() {
    a.default.subscribe("CHANNEL_DELETE", l)
  }
  _terminate() {
    a.default.unsubscribe("CHANNEL_DELETE", l)
  }
}
var o = new r
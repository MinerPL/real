"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var l = a("446674"),
  s = a("697218"),
  n = a("719923"),
  i = a("49111");

function r() {
  let e = (0, l.useStateFromStores)([s.default], () => n.default.canUseIncreasedMessageLength(s.default.getCurrentUser()));
  return e ? i.MAX_MESSAGE_LENGTH_PREMIUM : i.MAX_MESSAGE_LENGTH
}
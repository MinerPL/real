"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var s = n("782340");

function l(e) {
  return e > 0 ? s.default.Messages.EMBEDDED_ACTIVITIES_MAX_PARTICIPANTS.format({
    count: e
  }) : s.default.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("782340");

function s(e) {
  return e > 0 ? a.default.Messages.EMBEDDED_ACTIVITIES_MAX_PARTICIPANTS.format({
    count: e
  }) : a.default.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS
}
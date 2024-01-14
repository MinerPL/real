"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  },
  useShouldWarnAuthorizedAppTwoWay: function() {
    return l
  }
});
var a = s("106076");

function n(e) {
  return a.ConsoleOAuthApplications.XBOX_APPLICATION_ID === e || a.ConsoleOAuthApplicationsSets.PLAYSTATION_APPLICATION_IDS.has(e)
}

function l(e) {
  return n(e)
}
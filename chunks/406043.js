"use strict";
n.r(t), n.d(t, {
  useCurrentUserCommunicationDisabled: function() {
    return s
  },
  default: function() {
    return d
  },
  userCommunicationDisabled: function() {
    return c
  }
});
var i = n("446674"),
  a = n("26989"),
  l = n("697218"),
  r = n("509");

function s(e) {
  let t = (0, i.useStateFromStores)([l.default], () => l.default.getCurrentUser());
  return d(null == t ? void 0 : t.id, e)
}

function u(e, t, n) {
  return null != t && null != e ? n.getMember(t, e) : null
}

function o(e) {
  var t;
  return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, r.isMemberCommunicationDisabled)(e)]
}

function d(e, t) {
  let n = (0, i.useStateFromStores)([a.default], () => u(e, t, a.default), [t, e]);
  return o(n)
}

function c(e, t) {
  let n = u(e, t, a.default);
  return o(n)
}
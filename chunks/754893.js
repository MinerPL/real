"use strict";
s.r(t), s.d(t, {
  setNewPendingGuildIdentityBio: function() {
    return n
  },
  setNewPendingGuildIdentityPronouns: function() {
    return l
  },
  setNewPendingNickname: function() {
    return i
  },
  setNewPendingGuildIdentityThemeColors: function() {
    return r
  },
  canResetThemeColors: function() {
    return o
  }
});
var a = s("929423");

function n(e, t) {
  (0, a.setPendingBio)(e === t ? void 0 : e)
}

function l(e, t) {
  (0, a.setPendingPronouns)(e === t ? void 0 : e)
}

function i(e, t) {
  (0, a.setPendingNickname)(e === t || "" === e && null === t ? void 0 : e)
}

function r(e, t) {
  let s = (null == e ? void 0 : e[0]) == null || (null == e ? void 0 : e[1]) == null;
  (0, a.setPendingThemeColors)(s && null == t ? void 0 : e)
}

function o(e, t) {
  return void 0 === e ? null != t : (null == e ? void 0 : e[0]) != null && (null == e ? void 0 : e[1]) != null
}
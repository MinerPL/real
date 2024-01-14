"use strict";
n.r(t), n.d(t, {
  loadInviteSuggestions: function() {
    return s
  },
  searchInviteSuggestions: function() {
    return l
  }
}), n("222007");
var u = n("913144"),
  I = n("777273");

function s(e) {
  let {
    omitUserIds: t,
    guild: n,
    channel: s,
    applicationId: l,
    inviteTargetType: a
  } = e;
  return (0, I.fetchUserAffinities)().then(() => {
    u.default.dispatch({
      type: "LOAD_INVITE_SUGGESTIONS",
      omitUserIds: null != t ? t : new Set,
      guild: n,
      channel: s,
      applicationId: l,
      inviteTargetType: a
    })
  })
}

function l(e) {
  u.default.dispatch({
    type: "INVITE_SUGGESTIONS_SEARCH",
    query: e
  })
}
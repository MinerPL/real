"use strict";
n.r(t), n.d(t, {
  openModal: function() {
    return a
  },
  updateQuery: function() {
    return s
  },
  inviteChannel: function() {
    return i
  },
  inviteUser: function() {
    return r
  }
});
var l = n("913144");

function a(e, t) {
  return new Promise(n => {
    setTimeout(() => {
      l.default.dispatch({
        type: "ACTIVITY_INVITE_MODAL_OPEN",
        activity: e,
        isPrivate: t,
        resolve: n
      })
    }, 0)
  })
}

function s(e) {
  l.default.dispatch({
    type: "ACTIVITY_INVITE_MODAL_QUERY",
    query: e
  })
}

function i(e) {
  l.default.dispatch({
    type: "ACTIVITY_INVITE_MODAL_SEND",
    channelId: e
  })
}

function r(e) {
  l.default.dispatch({
    type: "ACTIVITY_INVITE_MODAL_SEND",
    userId: e
  })
}
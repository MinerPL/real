"use strict";
n.r(e), n.d(e, {
  queueInteractionComponentState: function() {
    return r
  },
  addQueued: function() {
    return u
  },
  setFailed: function() {
    return d
  },
  fetchMessageInteractionData: function() {
    return o
  }
});
var a = n("872717"),
  i = n("913144"),
  l = n("49111");

function r(t, e, n, a) {
  i.default.dispatch({
    type: "QUEUE_INTERACTION_COMPONENT_STATE",
    messageId: t,
    nonce: e,
    state: n,
    indices: a
  })
}

function u(t, e) {
  let {
    data: n,
    messageId: a,
    onCreate: l,
    onSuccess: r,
    onFailure: u
  } = e;
  i.default.dispatch({
    type: "INTERACTION_QUEUE",
    data: n,
    nonce: t,
    messageId: a,
    onCreate: l,
    onSuccess: r,
    onFailure: u
  })
}

function d(t, e, n) {
  i.default.dispatch({
    type: "INTERACTION_FAILURE",
    nonce: t,
    errorMessage: n,
    errorCode: e
  })
}
async function o(t, e) {
  let n = await a.default.get({
    url: l.Endpoints.MESSAGE_INTERACTION_DATA(t, e),
    oldFormErrors: !0
  });
  if (n.ok) {
    let a = n.body;
    i.default.dispatch({
      type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
      channelId: t,
      messageId: e,
      interactionData: a
    })
  }
}
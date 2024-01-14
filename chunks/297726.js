"use strict";
n.r(t), n.d(t, {
  connect: function() {
    return l
  },
  disconnect: function() {
    return r
  },
  createLobby: function() {
    return o
  },
  updateLobby: function() {
    return u
  },
  updateLobbyMember: function() {
    return d
  },
  deleteLobby: function() {
    return c
  },
  send: function() {
    return E
  },
  search: function() {
    return f
  },
  voiceConnect: function() {
    return _
  },
  voiceDisconnect: function() {
    return h
  }
});
var a = n("872717"),
  s = n("913144"),
  i = n("49111");

function l(e, t, n) {
  return new Promise((a, i) => {
    s.default.dispatch({
      type: "LOBBY_CONNECT",
      socketId: e,
      lobbyId: t,
      lobbySecret: n,
      resolve: a,
      reject: i
    })
  })
}

function r(e) {
  s.default.dispatch({
    type: "LOBBY_DISCONNECT",
    lobbyId: e
  })
}

function o(e, t, n) {
  return a.default.post({
    url: i.Endpoints.LOBBIES,
    body: {
      application_id: t,
      ...n
    },
    retries: 1,
    oldFormErrors: !0
  }).then(t => {
    let {
      body: n
    } = t;
    return l(e, n.id, n.secret)
  })
}

function u(e, t) {
  return a.default.patch({
    url: i.Endpoints.LOBBY(e),
    body: {
      ...t
    },
    retries: 1,
    oldFormErrors: !0
  }).then(i.NOOP)
}

function d(e, t, n) {
  return a.default.patch({
    url: i.Endpoints.LOBBY_MEMBER(e, t),
    body: {
      ...n
    },
    retries: 1,
    oldFormErrors: !0
  }).then(i.NOOP)
}

function c(e) {
  return a.default.delete({
    url: i.Endpoints.LOBBY(e),
    body: {},
    retries: 1,
    oldFormErrors: !0
  }).then(i.NOOP)
}

function E(e, t) {
  return a.default.post({
    url: i.Endpoints.LOBBY_SEND(e),
    body: {
      data: t
    },
    oldFormErrors: !0
  }).then(i.NOOP)
}

function f(e) {
  return a.default.post({
    url: i.Endpoints.LOBBY_SEARCH,
    body: e,
    oldFormErrors: !0
  }).then(e => {
    let {
      body: t
    } = e;
    return t
  })
}

function _(e) {
  s.default.dispatch({
    type: "LOBBY_VOICE_CONNECT",
    lobbyId: e
  })
}

function h(e) {
  s.default.dispatch({
    type: "LOBBY_VOICE_DISCONNECT",
    lobbyId: e
  })
}
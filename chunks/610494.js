"use strict";
s.r(t), s.d(t, {
  close: function() {
    return i
  },
  resetCode: function() {
    return r
  },
  setCode: function() {
    return o
  },
  saveCode: function() {
    return d
  }
});
var a = s("872717"),
  n = s("913144"),
  l = s("49111");

function i() {
  n.default.dispatch({
    type: "GUILD_SETTINGS_VANITY_URL_CLOSE"
  })
}

function r() {
  n.default.dispatch({
    type: "GUILD_SETTINGS_VANITY_URL_RESET"
  })
}

function o(e) {
  n.default.dispatch({
    type: "GUILD_SETTINGS_VANITY_URL_SET",
    code: e
  })
}

function d(e, t) {
  return a.default.patch({
    url: l.Endpoints.GUILD_VANITY_URL(e),
    body: {
      code: t
    },
    oldFormErrors: !0
  }).then(e => {
    let {
      body: {
        code: t,
        uses: s
      }
    } = e;
    n.default.dispatch({
      type: "GUILD_SETTINGS_SET_VANITY_URL",
      code: t,
      uses: s
    })
  }, e => (n.default.dispatch({
    type: "GUILD_SETTINGS_VANITY_URL_ERROR",
    error: e.body
  }), e))
}
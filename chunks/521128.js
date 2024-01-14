"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("446674"),
  s = n("913144");
let i = {},
  l = null;

function r() {
  i = {}, l = null
}
class o extends a.default.Store {
  getEmailSettings() {
    return {
      categories: i,
      initialized: l
    }
  }
}
o.displayName = "EmailSettingsStore";
var u = new o(s.default, {
  CONNECTION_OPEN: r,
  LOGOUT: r,
  EMAIL_SETTINGS_FETCH_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    i = t.categories, l = t.initialized
  },
  EMAIL_SETTINGS_UPDATE_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    i = t.categories
  },
  EMAIL_SETTINGS_UPDATE: function(e) {
    let {
      updates: t
    } = e;
    i = {
      ...i,
      ...t
    }
  }
})
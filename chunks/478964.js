"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("446674"),
  n = s("913144"),
  l = s("305961"),
  i = s("49111");
let r = {
    description: "",
    channels: [],
    enabled: !1
  },
  o = r,
  d = !1,
  u = !1,
  c = r;

function E(e) {
  let {
    welcomeScreen: t,
    guildId: s
  } = e, a = l.default.getGuild(s);
  if (null != t) {
    var n, d;
    c = o = {
      description: null !== (n = t.description) && void 0 !== n ? n : "",
      channels: null !== (d = t.welcome_channels) && void 0 !== d ? d : [],
      enabled: null == a ? void 0 : a.hasFeature(i.GuildFeatures.WELCOME_SCREEN_ENABLED)
    }
  } else c = o = r;
  u = !1
}
class _ extends a.default.Store {
  initialize() {
    this.waitFor(l.default)
  }
  get() {
    return c
  }
  showNotice() {
    return u
  }
  getSettingsProps() {
    return {
      submitting: d,
      hasErrors: u,
      welcomeSettings: c,
      originalWelcomeSettings: o
    }
  }
}
_.displayName = "WelcomeScreenSettingsStore";
var T = new _(n.default, {
  WELCOME_SCREEN_FETCH_SUCCESS: E,
  WELCOME_SCREEN_UPDATE: E,
  WELCOME_SCREEN_SETTINGS_RESET: function() {
    c = o, u = !1
  },
  WELCOME_SCREEN_SETTINGS_CLEAR: function() {
    c = r, o = r
  },
  WELCOME_SCREEN_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    c = {
      ...c,
      ...t
    }
  },
  WELCOME_SCREEN_SUBMIT: function() {
    d = !0
  },
  WELCOME_SCREEN_SUBMIT_SUCCESS: function(e) {
    E(e), d = !1
  },
  WELCOME_SCREEN_SUBMIT_FAILURE: function() {
    u = !0, d = !1
  }
})
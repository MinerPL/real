"use strict";
n.r(t), n.d(t, {
  welcomeScreenViewed: function() {
    return s
  },
  fetchWelcomeScreen: function() {
    return o
  },
  resetWelcomeScreen: function() {
    return a
  },
  clearWelcomeScreenSettings: function() {
    return u
  },
  updateSettings: function() {
    return c
  },
  saveWelcomeScreen: function() {
    return d
  }
});
var l = n("872717"),
  i = n("913144"),
  r = n("49111");
let s = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    i.default.dispatch({
      type: "WELCOME_SCREEN_VIEW",
      guildId: e,
      isLurking: t
    })
  },
  o = async e => {
    i.default.dispatch({
      type: "WELCOME_SCREEN_FETCH_START"
    });
    try {
      let t = await l.default.get({
        url: r.Endpoints.GUILD_WELCOME_SCREEN(e),
        oldFormErrors: !0
      });
      return i.default.dispatch({
        type: "WELCOME_SCREEN_FETCH_SUCCESS",
        guildId: e,
        welcomeScreen: t.body
      }), t.body
    } catch (e) {
      i.default.dispatch({
        type: "WELCOME_SCREEN_FETCH_FAIL"
      })
    }
  }, a = () => {
    i.default.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_RESET"
    })
  }, u = () => {
    i.default.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_CLEAR"
    })
  }, c = e => {
    i.default.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_UPDATE",
      settings: e
    })
  }, d = async (e, t) => {
    i.default.dispatch({
      type: "WELCOME_SCREEN_SUBMIT"
    });
    try {
      let n = await l.default.patch({
        url: r.Endpoints.GUILD_WELCOME_SCREEN(e),
        body: {
          description: t.description,
          welcome_channels: t.channels,
          enabled: t.enabled
        },
        oldFormErrors: !0
      });
      i.default.dispatch({
        type: "WELCOME_SCREEN_SUBMIT_SUCCESS",
        guildId: e,
        welcomeScreen: n.body
      })
    } catch (e) {
      i.default.dispatch({
        type: "WELCOME_SCREEN_SUBMIT_FAILURE"
      })
    }
  }
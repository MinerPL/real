"use strict";
n.r(t), n.d(t, {
  defineProtoSetting: function() {
    return u
  },
  wrapSettingWithSelectiveSyncing: function() {
    return c
  },
  wrapSettingWithOverride: function() {
    return d
  }
});
var i = n("446674"),
  r = n("913144"),
  o = n("737292"),
  s = n("872173"),
  l = n("374363"),
  a = n("397336");

function u(e, t, n, r) {
  let o = () => {
    var i;
    return n(null === (i = l.default.settings[e]) || void 0 === i ? void 0 : i[t])
  };
  return {
    getSetting: o,
    updateSetting: _(o, n => s.PreloadedUserSettingsActionCreators.updateAsync(e, e => {
      e[t] = r(n, e[t])
    }, a.UserSettingsDelay.INFREQUENT_USER_ACTION)),
    useSetting: () => (0, i.useStateFromStores)([l.default], o)
  }
}

function c(e, t, n) {
  let s = () => {
    var i;
    let r = o.default.getState()[t];
    return null !== (i = null == r ? void 0 : r.settings[n]) && void 0 !== i ? i : e.getSetting()
  };
  return {
    getSetting: s,
    useSetting: () => {
      let r = e.useSetting(),
        s = (0, i.useStateFromStores)([o.default], () => {
          let e = o.default.getState()[t];
          return null == e ? void 0 : e.settings[n]
        });
      return null != s ? s : r
    },
    updateSetting: _(s, i => o.default.shouldSync(t) ? e.updateSetting(i) : (r.default.dispatch({
      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
      changes: {
        [t]: {
          settings: {
            [n]: i
          }
        }
      }
    }), Promise.resolve()))
  }
}

function d(e, t, n, i) {
  let o = () => {
    var t;
    return null !== (t = n()) && void 0 !== t ? t : e.getSetting()
  };
  return {
    getSetting: o,
    useSetting: () => {
      let t = e.useSetting(),
        n = i();
      return null != n ? n : t
    },
    updateSetting: _(o, n => (r.default.dispatch({
      type: "USER_SETTINGS_OVERRIDE_CLEAR",
      settings: [t]
    }), e.updateSetting(n)))
  }
}

function _(e, t) {
  return function(n) {
    return "function" == typeof n ? t(n(e())) : t(n)
  }
}
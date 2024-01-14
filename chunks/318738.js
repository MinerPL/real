"use strict";
n.r(t), n.d(t, {
  updatePermission: function() {
    return l
  },
  selectPermission: function() {
    return u
  },
  setAdvancedMode: function() {
    return a
  },
  init: function() {
    return o
  },
  savePermissionUpdates: function() {
    return d
  },
  saveAndClearPermissionUpdates: function() {
    return f
  }
});
var r = n("913144"),
  i = n("929278"),
  s = n("450911");
async function l(e, t, n, s) {
  let l = e.getGuildId();
  if (null != l && t === l) {
    let t = await (0, i.checkDefaultChannelThresholdMetAfterChannelPermissionDeny)(e, s, n);
    if (!t) return !1
  }
  r.default.dispatch({
    type: "CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION",
    id: t,
    allow: n,
    deny: s
  })
}

function u(e) {
  r.default.dispatch({
    type: "CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION",
    id: e
  })
}

function a(e) {
  r.default.dispatch({
    type: "CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE",
    advancedMode: e
  })
}

function o() {
  r.default.dispatch({
    type: "CHANNEL_SETTINGS_PERMISSIONS_INIT"
  })
}

function d(e, t, n) {
  return f(e, t, [], n)
}

function f(e, t, n, i) {
  return r.default.dispatch({
    type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING"
  }), new Promise(r => {
    let i = () => {
      if (0 === t.length && 0 === n.length) return r();
      if (t.length > 0) {
        let n = t.pop();
        if (null == n) return i();
        s.default.updatePermissionOverwrite(e, n).then(i, i)
      } else {
        let t = n.pop();
        if (null == t) return i();
        s.default.clearPermissionOverwrite(e, t).then(i, i)
      }
    };
    i()
  }).then(() => {
    r.default.dispatch({
      type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS",
      silent: i
    })
  })
}
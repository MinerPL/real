"use strict";
let a, s;
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var i = n("917351"),
  l = n.n(i),
  r = n("446674"),
  o = n("95410"),
  u = n("913144"),
  d = n("991170"),
  c = n("492114"),
  f = n("42203"),
  E = n("49111"),
  _ = n("606762");
let h = new Set,
  C = E.FormStates.CLOSED,
  I = !1,
  T = null,
  S = null,
  m = null,
  p = null,
  A = null,
  g = null,
  N = o.default.get(_.ADVANCED_MODE_ON_KEY) || !1;

function R(e) {
  let t = e.getGuildId(),
    n = {
      ...e.permissionOverwrites
    };
  return null != t && null == n[t] && (n[t] = d.default.makeEveryoneOverwrite(t)), n
}

function O() {
  if (m = c.default.getChannel(), p = c.default.getCategory(), null == m) return !1;
  let e = m.getGuildId();
  S = T = R(m), null == T[A] && (A = e), s = null != p, a = d.default.areChannelsLocked(m, p), g = null, I = !1, C = E.FormStates.CLOSED, h.clear()
}
class L extends r.default.Store {
  initialize() {
    this.waitFor(c.default, f.default)
  }
  hasChanges() {
    return I
  }
  showNotice() {
    return this.hasChanges()
  }
  getPermissionOverwrite(e) {
    return null == T ? void 0 : T[e]
  }
  get editedPermissionIds() {
    return Array.from(h)
  }
  get permissionOverwrites() {
    return T
  }
  get selectedOverwriteId() {
    return A
  }
  get formState() {
    return C
  }
  get isLockable() {
    return s
  }
  get locked() {
    return a
  }
  get channel() {
    return m
  }
  get category() {
    return p
  }
  get advancedMode() {
    return N
  }
}
L.displayName = "ChannelSettingsPermissionsStore";
var v = new L(u.default, {
  CHANNEL_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    if (null != m || t !== E.ChannelSettingsSections.PERMISSIONS) return !1;
    O()
  },
  CHANNEL_SETTINGS_PERMISSIONS_INIT: O,
  CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function(e) {
    let {
      id: t,
      allow: n,
      deny: s
    } = e, i = null == T ? void 0 : T[t];
    if (null == i || null == m) return !1;
    i = {
      ...i,
      allow: n,
      deny: s
    }, T = {
      ...T,
      [t]: i
    }, h.add(t), C = E.FormStates.OPEN, I = !l.isEqual(T, S), a = d.default.areChannelsLocked(m, p)
  },
  CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function(e) {
    let {
      id: t
    } = e;
    if (null != T && null != T[t]) A = t;
    else {
      if (null == m) return !1;
      g = t
    }
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    C = E.FormStates.CLOSED, T = null, S = null, m = null, p = null, I = !1, h.clear(), A = null, g = null
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    if (null == m) return !1;
    let n = !1;
    for (let e of t) !1 !== function(e) {
      if (null == m || m.id !== e || null == (m = f.default.getChannel(e))) return !1;
      p = c.default.getCategory();
      let t = m.getGuildId();
      if (null == t) return !1;
      S = R(m);
      let n = {};
      return h.forEach(e => {
        null != T && (n[e] = T[e])
      }), null == n[t] && null == m.permissionOverwrites[t] && (n[t] = d.default.makeEveryoneOverwrite(t)), null == (T = {
        ...m.permissionOverwrites,
        ...n
      })[A] ? A = t : null != g && null != T[g] && (A = g, g = null), a = d.default.areChannelsLocked(m, p), !0
    }(e.id) && (n = !0);
    return n
  },
  CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function() {
    C = E.FormStates.SUBMITTING
  },
  CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function(e) {
    let {
      silent: t
    } = e;
    t ? C = E.FormStates.OPEN : (C = E.FormStates.CLOSED, O())
  },
  CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function(e) {
    let {
      advancedMode: t
    } = e;
    N = t, o.default.set(_.ADVANCED_MODE_ON_KEY, t)
  }
})
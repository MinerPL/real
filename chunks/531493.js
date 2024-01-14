"use strict";
let a, n, l;
s.r(t), s.d(t, {
  default: function() {
    return F
  }
}), s("222007");
var i = s("917351"),
  r = s.n(i),
  o = s("316693"),
  d = s("509043"),
  u = s("446674"),
  c = s("913144"),
  E = s("382981"),
  _ = s("746574"),
  T = s("449008"),
  I = s("991170"),
  S = s("900938"),
  N = s("53948"),
  g = s("49111");
let f = new Set,
  A = g.FormStates.CLOSED,
  L = !1,
  m = !1,
  C = [],
  O = [],
  h = N.GuildSettingsRoleEditSections.DISPLAY,
  R = !1,
  D = new Set,
  M = new Map,
  G = new Map;

function x() {
  return null == a || null == C ? [] : _.default.calculatePositionDeltas({
    oldOrdering: r.values(a.roles),
    newOrdering: C,
    idGetter: e => {
      let {
        id: t
      } = e;
      return t
    },
    existingPositionGetter: e => {
      let {
        originalPosition: t
      } = e;
      return null != t ? t : 1 / 0
    },
    ascending: !1
  })
}

function p(e) {
  let {
    section: t
  } = e;
  if (null != a || t !== g.GuildSettingsSections.ROLES) return !1;
  U()
}

function U() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  a = S.default.getProps().guild, L = !1, m = !1, l = void 0, f.clear(), A = g.FormStates.OPEN, O = [...C = null != a ? r(a.roles).values().value() : []], R = !1, e && (G.clear(), M.forEach((e, t) => {
    G.set(t, [...e])
  }))
}
let v = r.debounce(() => {
  let e = !1;
  m && !(m = x().length > 0) && (e = !0), [...f].forEach(t => {
    r.isEqual(P(t), function(e) {
      return O.find(t => {
        let {
          id: s
        } = t;
        return s === e
      })
    }(t)) && (f.delete(t), e = !0)
  }), 0 === f.size && (L = !1), R && r.isEqual(M, G) && (e = !0, R = !1), e && B.emitChange()
}, 500);

function j(e, t) {
  let s = C.indexOf(e);
  if (s < 0) return !1;
  let a = {
    ...e,
    ...t
  };
  C[s] = a, C = [...C], L = !0, f.add(a.id), v()
}

function P(e) {
  return C.find(t => {
    let {
      id: s
    } = t;
    return s === e
  })
}

function y(e) {
  let {
    guildId: t
  } = e;
  if (null == a || t !== a.id || A === g.FormStates.SUBMITTING) return !1;
  a = S.default.getProps().guild;
  let s = [];
  null != a && (s = r(a.roles).values().value()), f.forEach(e => {
    let t = P(e),
      a = -1,
      n = s.find((t, s) => {
        let {
          id: n
        } = t;
        if (n === e) return a = s, !0
      });
    null == n || null == t ? f.delete(e) : s[a] = t
  }), 0 === f.size && (L = !1), m = !1, C = [...s]
}
class b extends u.default.Store {
  initialize() {
    this.waitFor(S.default, E.default)
  }
  hasChanges() {
    return L || m || R
  }
  get errorMessage() {
    return l
  }
  get hasSortChanges() {
    return m
  }
  get hasRoleConfigurationChanges() {
    return R
  }
  get guild() {
    return a
  }
  get editedRoleIds() {
    return Array.from(f)
  }
  get editedRoleIdsForConfigurations() {
    return D
  }
  get roles() {
    return C
  }
  get formState() {
    return A
  }
  get lastRoleEditSection() {
    return h
  }
  getSortDeltas() {
    return x()
  }
  showNotice() {
    return this.hasChanges()
  }
  getRole(e) {
    return P(e)
  }
  getPermissionSearchQuery() {
    return n
  }
  getEditedRoleConnectionConfigurationsMap() {
    return G
  }
}
b.displayName = "GuildSettingsRolesStore";
let B = new b(c.default, __OVERLAY__ ? {} : {
  GUILD_SETTINGS_ROLES_INIT: () => U(),
  GUILD_SETTINGS_INIT: p,
  GUILD_SETTINGS_SET_SECTION: p,
  GUILD_SETTINGS_ROLES_SORT_UPDATE: function(e) {
    let {
      roles: t
    } = e;
    if (null != C && t.length !== C.length) return !1;
    C = t.map(e => P(e)).filter(T.isNotNullish), m = !0, v()
  },
  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function(e) {
    let {
      id: t,
      flag: s,
      allow: a
    } = e, n = P(t);
    if (null == n) return !1;
    let {
      permissions: l
    } = n;
    return j(n, {
      permissions: l = a ? o.default.add(l, s) : o.default.remove(l, s)
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function(e) {
    let {
      id: t,
      permissions: s
    } = e, a = P(t);
    return null != a && j(a, {
      permissions: s
    })
  },
  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function(e) {
    let {
      id: t
    } = e, s = P(t);
    return null != s && j(s, {
      permissions: I.default.NONE
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_NAME: function(e) {
    let {
      id: t,
      name: s
    } = e, a = P(t);
    return null != a && j(a, {
      name: s
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function(e) {
    let {
      id: t,
      description: s
    } = e, a = P(t);
    return null != a && j(a, {
      description: s
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function(e) {
    let {
      id: t,
      color: s
    } = e, a = 0 === s ? null : (0, d.int2hex)(s), n = P(t);
    return null != n && j(n, {
      color: s,
      colorString: a
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function(e) {
    let {
      id: t,
      hoist: s,
      mentionable: a
    } = e, n = P(t);
    return null != n && j(n, {
      hoist: s,
      mentionable: a
    })
  },
  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function(e) {
    let {
      id: t,
      icon: s,
      unicodeEmoji: a
    } = e, n = P(t);
    return null != n && j(n, {
      icon: s,
      unicodeEmoji: a
    })
  },
  GUILD_SETTINGS_ROLE_SELECT: function(e) {
    let {
      role: t,
      searchQuery: s
    } = e;
    if (n = s, null != t) {
      if (null != P(t.id)) {
        j(t, t);
        return
      }
      C = [...C, t], v()
    }
  },
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function(e) {
    let {
      roleId: t,
      roleConnectionConfigurations: s
    } = e, a = P(t);
    if (null == a) return !1;
    let n = M.get(a.id);
    if (r.isEqual(n, s)) return !1;
    G.set(a.id, s), M.set(a.id, s), v()
  },
  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function(e) {
    let {
      roleId: t,
      roleConnectionConfigurations: s
    } = e, a = P(t);
    if (null == a) return !1;
    R = !0, D.add(a.id), G.set(a.id, s), v()
  },
  GUILD_SETTINGS_CLOSE: function() {
    a = null, O = C = [], M.clear(), f.clear(), G.clear(), D = new Set, L = !1, m = !1, R = !1, A = g.FormStates.CLOSED
  },
  GUILD_ROLE_CREATE: y,
  GUILD_ROLE_UPDATE: y,
  GUILD_ROLE_DELETE: function(e) {
    return D.has(e.roleId) && (D.delete(e.roleId), M.delete(e.roleId), G.delete(e.roleId), R = !1), y(e)
  },
  GUILD_SETTINGS_ROLES_SUBMITTING: function() {
    A = g.FormStates.SUBMITTING
  },
  GUILD_SETTINGS_ROLES_SAVE_FAIL: function(e) {
    let {
      message: t
    } = e;
    A = g.FormStates.OPEN, l = t
  },
  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function() {
    U(!1)
  },
  GUILD_SETTINGS_ROLES_EDIT_SECTION_UPDATE: function(e) {
    let {
      section: t
    } = e;
    h = t
  }
});
var F = B
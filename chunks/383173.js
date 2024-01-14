"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
}), l("222007");
var d = l("446674"),
  a = l("913144"),
  r = l("374363");
let n = new Set;
class o extends d.default.PersistedStore {
  initialize(e) {
    null != e && (n = new Set(e.expandedFolders)), this.waitFor(r.default)
  }
  getState() {
    return {
      expandedFolders: Array.from(n)
    }
  }
  getExpandedFolders() {
    return n
  }
  isFolderExpanded(e) {
    return n.has(e)
  }
}
o.displayName = "ExpandedGuildFolderStore", o.persistKey = "ExpandedGuildFolderStore";
var i = new o(a.default, {
  TOGGLE_GUILD_FOLDER_EXPAND: function(e) {
    let {
      folderId: t
    } = e;
    (n = new Set(n)).has(t) ? n.delete(t) : n.add(t)
  },
  SET_GUILD_FOLDER_EXPANDED: function(e) {
    let {
      folderId: t,
      expanded: l
    } = e;
    n = new Set(n), l ? n.add(t) : n.has(t) && n.delete(t)
  },
  USER_SETTINGS_PROTO_UPDATE: function() {
    let e = r.default.getGuildFolders();
    if (null == e) return !1;
    let t = !1;
    for (let l of n) !e.some(e => e.folderId === l) && ((n = new Set(n)).delete(l), t = !0);
    return t
  },
  GUILD_FOLDER_COLLAPSE: function() {
    if (0 === n.size) return !1;
    n = new Set
  }
})
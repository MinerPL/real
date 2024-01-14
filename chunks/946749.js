"use strict";
let n;
l.r(t), l.d(t, {
  default: function() {
    return m
  }
});
var a = l("917351"),
  r = l.n(a),
  i = l("446674"),
  u = l("95410"),
  o = l("913144"),
  s = l("49111");
let c = "GameLibraryViewStore",
  d = s.TableSortDirections.ASCENDING,
  f = s.GameTableListKeys.LAST_PLAYED,
  p = !1,
  h = r.debounce(() => {
    p = !1, g.emitChange()
  }, 200);
class E extends i.default.Store {
  initialize() {
    var e;
    let t = null !== (e = u.default.get(c)) && void 0 !== e ? e : {};
    null != t.sortDirection && null != t.sortKey && (d = t.sortDirection, f = t.sortKey)
  }
  get sortDirection() {
    return d
  }
  get sortKey() {
    return f
  }
  get activeRowKey() {
    return n
  }
  get isNavigatingByKeyboard() {
    return p
  }
}
E.displayName = "GameLibraryViewStore";
let g = new E(o.default, {
  LIBRARY_TABLE_SORT_UPDATE: function(e) {
    let {
      direction: t,
      key: l
    } = e;
    d = t, f = l, u.default.set(c, {
      sortDirection: d,
      sortKey: f
    })
  },
  LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: function(e) {
    let {
      key: t,
      isKeyboardEvent: l
    } = e;
    l && (p = !0, h()), n = t
  }
});
var m = g
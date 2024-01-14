"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("222007"), s("424973");
var l = s("884691"),
  a = s("446674"),
  i = s("305961"),
  n = s("957255"),
  d = s("677099"),
  r = s("71102"),
  o = s("209397"),
  u = s("49111"),
  c = (e, t) => {
    let [s, c] = l.useState(!1), C = (0, a.useStateFromStores)([o.default], () => o.default.getAdminGuildEntryIds(t)), m = (0, a.useStateFromStoresArray)([d.default, i.default, n.default], () => {
      let t = d.default.getFlattenedGuildIds(),
        s = [];
      return t.forEach(t => {
        let l = i.default.getGuild(t);
        null != l && n.default.can(u.Permissions.ADMINISTRATOR, l) && l.id !== e && s.push(l)
      }), s
    }, [e]), f = l.useCallback(async () => {
      c(!0), await r.fetchGuildEntriesForIds(t, m.map(e => e.id)), c(!1)
    }, [t, m]);
    l.useEffect(() => {
      f()
    }, []);
    let E = l.useMemo(() => m.filter(e => !(null == C ? void 0 : C.has(e.id))), [m, C]),
      T = l.useMemo(() => m.filter(e => null == C ? void 0 : C.has(e.id)), [m, C]);
    return {
      availableGuilds: E,
      addedGuilds: T,
      loading: s
    }
  }
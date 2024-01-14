"use strict";
i.r(t), i.d(t, {
  default: function() {
    return o
  }
});
var l = i("884691"),
  s = i("627445"),
  u = i.n(s),
  a = i("446674"),
  n = i("305961"),
  d = i("677099"),
  r = i("697218");

function o(e) {
  let {
    isGuildIncluded: t,
    selectedGuildId: i
  } = e, s = (0, a.useStateFromStores)([d.default], () => d.default.getFlattenedGuildIds()), o = (0, a.useStateFromStores)([n.default], () => n.default.getGuilds()), c = (0, a.useStateFromStores)([r.default], () => r.default.getCurrentUser()), S = l.useMemo(() => {
    if (null == c) return [];
    let e = null == t ? s : s.filter(e => {
      let i = o[e];
      return u(null != i, "guild should not be null"), t(i, c)
    });
    return e.map(e => {
      let t = o[e];
      return u(null != t, "guild should not be null"), {
        label: t.name,
        value: t.id
      }
    })
  }, [s, o, c, t]);
  return {
    options: S,
    selectedGuild: null == i ? void 0 : o[i]
  }
}
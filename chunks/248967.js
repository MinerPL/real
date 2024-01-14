"use strict";
l.r(t), l.d(t, {
  stopLurkingAll: function() {
    return u
  },
  stopLurking: function() {
    return s
  }
}), l("222007");
var d = l("872717"),
  a = l("913144"),
  r = l("945956"),
  n = l("449008"),
  o = l("267567"),
  i = l("49111");
async function u(e) {
  let t = o.default.lurkingGuildIds(),
    l = t.filter(t => !e.includes(t));
  0 !== l.length && (a.default.dispatch({
    type: "GUILD_STOP_LURKING",
    ignoredGuildIds: e
  }), await Promise.all(l.map(async e => {
    let t = o.default.getLurkingSource();
    try {
      await d.default.delete({
        url: i.Endpoints.GUILD_LEAVE(e),
        body: {
          lurking: !0
        },
        oldFormErrors: !0
      })
    } catch (l) {
      a.default.dispatch({
        type: "GUILD_STOP_LURKING_FAILURE",
        lurkingGuildId: e,
        lurkingSource: t
      })
    }
  })))
}
async function s() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
    t = o.default.lurkingGuildIds();
  if (0 === t.length) return;
  let l = null == e || !t.includes(e);
  if (!l) return;
  let d = r.default.getGuildId(),
    a = [e, d].filter(n.isNotNullish);
  await u(a)
}
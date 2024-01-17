"use strict";
t.r(n), t.d(n, {
  CustomSoundType: function() {
    return l
  },
  useCustomJoinSound: function() {
    return d
  },
  getCustomJoinSound: function() {
    return r
  }
});
var u, l, i = t("446674"),
  o = t("374363"),
  a = t("846325");

function d(e) {
  return (0, i.useStateFromStores)([o.default], () => {
    var n, t;
    let u = null !== (t = null === (n = o.default.settings.guilds) || void 0 === n ? void 0 : n.guilds) && void 0 !== t ? t : {};
    return s(e, u)
  })
}

function r(e) {
  var n, t;
  let u = null !== (t = null === (n = o.default.settings.guilds) || void 0 === n ? void 0 : n.guilds) && void 0 !== t ? t : {};
  return s(e, u)
}

function s(e, n) {
  var t, u;
  let l = null === (t = n[e]) || void 0 === t ? void 0 : t.joinSound,
    i = null === (u = n[a.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID]) || void 0 === u ? void 0 : u.joinSound,
    o = null != l ? l : i;
  return null != o ? {
    ...o,
    type: null != l ? 1 : 0
  } : void 0
}(u = l || (l = {}))[u.GLOBAL = 0] = "GLOBAL", u[u.GUILD = 1] = "GUILD"
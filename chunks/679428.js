"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var i = n("872717"),
  l = n("689988"),
  a = n("870691"),
  r = n("42203"),
  s = n("718517"),
  o = n("49111");
let u = {},
  d = 0,
  c = 15 * s.default.Millis.SECOND;

function f() {
  u = {
    ...a.default.getCollapsedCategories()
  }
}

function h() {
  !__OVERLAY__ && (clearTimeout(d), d = setTimeout(() => E(), c))
}
async function E(e, t) {
  null == e || e === o.ME ? await i.default.patch({
    url: o.Endpoints.USER_GUILD_SETTINGS(o.ME),
    body: t
  }) : await _(null != t ? {
    [null != e ? e : o.ME]: t
  } : {})
}
async function _(e) {
  clearTimeout(d);
  let t = 0 !== Object.keys(e).length,
    n = a.default.getCollapsedCategories(),
    l = function() {
      let e = {},
        t = a.default.getCollapsedCategories();
      for (let n in t) t[n] !== u[n] && (e[n] = !0);
      for (let n in u) t[n] !== u[n] && (e[n] = !0);
      return e
    }();
  for (let i in l) {
    let l = r.default.getChannel(i);
    null != l && null != l.guild_id && (!(l.guild_id in e) && (e[l.guild_id] = {}), null == e[l.guild_id].channel_overrides && (e[l.guild_id].channel_overrides = {}), e[l.guild_id].channel_overrides[l.id] = {
      ...e[l.guild_id].channel_overrides[l.id],
      collapsed: l.id in n
    }, t = !0)
  }
  return t ? (u = {
    ...n
  }, delete e[o.FAVORITES], (await i.default.patch({
    url: o.Endpoints.USER_GUILD_SETTINGS_BULK,
    body: {
      guilds: e
    }
  })).body) : []
}

function p() {
  u = {
    ...a.default.getCollapsedCategories()
  }
}
class I extends l.default {
  constructor(...e) {
    super(...e), this.actions = {
      CATEGORY_COLLAPSE: h,
      CATEGORY_EXPAND: h,
      CATEGORY_COLLAPSE_ALL: h,
      CATEGORY_EXPAND_ALL: h,
      POST_CONNECTION_OPEN: f,
      USER_GUILD_SETTINGS_FULL_UPDATE: p
    }, this.saveUserGuildSettings = E, this.saveUserGuildSettingsBulk = _
  }
}
var C = new I
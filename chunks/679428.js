"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var i = n("872717"),
  r = n("689988"),
  l = n("870691"),
  a = n("42203"),
  s = n("49111");
let o = {},
  u = 0;

function d() {
  o = {
    ...l.default.getCollapsedCategories()
  }
}

function c() {
  !__OVERLAY__ && (clearTimeout(u), u = setTimeout(() => f(), 15e3))
}
async function f(e, t) {
  null == e || e === s.ME ? await i.default.patch({
    url: s.Endpoints.USER_GUILD_SETTINGS(s.ME),
    body: t
  }) : await h(null != t ? {
    [null != e ? e : s.ME]: t
  } : {})
}
async function h(e) {
  clearTimeout(u);
  let t = 0 !== Object.keys(e).length,
    n = l.default.getCollapsedCategories(),
    r = function() {
      let e = {},
        t = l.default.getCollapsedCategories();
      for (let n in t) t[n] !== o[n] && (e[n] = !0);
      for (let n in o) t[n] !== o[n] && (e[n] = !0);
      return e
    }();
  for (let i in r) {
    let r = a.default.getChannel(i);
    null != r && null != r.guild_id && (!(r.guild_id in e) && (e[r.guild_id] = {}), null == e[r.guild_id].channel_overrides && (e[r.guild_id].channel_overrides = {}), e[r.guild_id].channel_overrides[r.id] = {
      ...e[r.guild_id].channel_overrides[r.id],
      collapsed: r.id in n
    }, t = !0)
  }
  return t ? (o = {
    ...n
  }, delete e[s.FAVORITES], (await i.default.patch({
    url: s.Endpoints.USER_GUILD_SETTINGS_BULK,
    body: {
      guilds: e
    }
  })).body) : []
}

function E() {
  o = {
    ...l.default.getCollapsedCategories()
  }
}
class _ extends r.default {
  constructor(...e) {
    super(...e), this.actions = {
      CATEGORY_COLLAPSE: c,
      CATEGORY_EXPAND: c,
      CATEGORY_COLLAPSE_ALL: c,
      CATEGORY_EXPAND_ALL: c,
      POST_CONNECTION_OPEN: d,
      USER_GUILD_SETTINGS_FULL_UPDATE: E
    }, this.saveUserGuildSettings = f, this.saveUserGuildSettingsBulk = h
  }
}
var p = new _
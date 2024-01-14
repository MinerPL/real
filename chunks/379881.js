"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var i = n("446674"),
  r = n("151426"),
  s = n("913144"),
  a = n("374363"),
  o = n("233069"),
  l = n("49111");
let u = {},
  c = !1;

function d() {
  var e, t, n;
  c = null !== (n = null === (e = a.default.settings.favorites) || void 0 === e ? void 0 : e.muted) && void 0 !== n && n, u = {};
  let i = null === (t = a.default.settings.favorites) || void 0 === t ? void 0 : t.favoriteChannels;
  if (null == i) return !1;
  for (let e in i) {
    let t = i[e];
    u[e] = {
      id: e,
      nickname: "" !== t.nickname ? t.nickname : null,
      type: t.type,
      order: t.position,
      parentId: "0" !== t.parentId ? t.parentId : null
    }
  }
}
class f extends i.default.Store {
  initialize() {
    this.waitFor(a.default), d(), this.syncWith([a.default], d)
  }
  getFavoriteChannels() {
    return u
  }
  get favoriteServerMuted() {
    return c
  }
  isFavorite(e) {
    return null != e && null != u[e]
  }
  getFavorite(e) {
    if (null != e) return u[e]
  }
  getCategoryRecord(e) {
    if (e in u && u[e].type === r.FavoriteChannelType.CATEGORY) {
      var t, n;
      return t = u[e], (0, o.createChannelRecord)({
        id: t.id,
        name: null !== (n = t.nickname) && void 0 !== n ? n : "",
        type: l.ChannelTypes.GUILD_CATEGORY,
        position: t.order,
        guild_id: l.FAVORITES
      })
    }
    return null
  }
  getNickname(e) {
    var t;
    let n = this.getFavorite(e);
    return null !== (t = null == n ? void 0 : n.nickname) && void 0 !== t ? t : void 0
  }
}
f.displayName = "FavoriteStore";
var E = new f(s.default, {})
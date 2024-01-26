"use strict";
n.r(t), n.d(t, {
  default: function() {
    return V
  }
}), n("222007"), n("424973");
var i = n("102053"),
  s = n("446674"),
  r = n("913144"),
  a = n("802493"),
  o = n("595525"),
  l = n("212084"),
  u = n("867805"),
  d = n("267567"),
  c = n("813006"),
  f = n("778689"),
  _ = n("305961"),
  h = n("718517"),
  g = n("968027"),
  m = n("161585"),
  E = n("24373");
let p = 2,
  v = new Map,
  S = new Map,
  T = null,
  I = [],
  C = null,
  A = !1,
  y = new Map,
  N = (e, t) => {
    y = new Map(y.set(e, t))
  },
  R = h.default.Millis.HOUR,
  O = () => g.isStable ? D() : P(),
  D = () => {
    if (0 !== p) return;
    let e = a.default.database();
    if (null == e) return;
    p = 2;
    let t = (0, o.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => i.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => l.default.getSync(e)));
    if (null != t) {
      for (let [e, n] of t)
        if (f.default.isMember(e) && !y.has(e)) {
          for (let t of n) b(t, !0, _.default.getGuild(e));
          N(e, n)
        }
    }
  },
  P = async () => {
    if (0 !== p) return;
    let e = a.default.database();
    if (null == e) return;
    p = 2;
    let t = await (0, o.tryLoadOrResetCacheGatewayAsync)("StickerStore.loadSavedGuildStickers", () => i.default.timeAsync("\uD83D\uDCBE", "loadSavedGuildStickers", () => l.default.getAsync(e)));
    null != t && r.default.dispatch({
      type: "CACHED_STICKERS_LOADED",
      stickers: t
    })
  }, b = function(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    S.set(e.id, e), t && L(e, n)
  }, L = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (null == T) return;
    let {
      tags: n
    } = e, i = {
      type: m.StickerMetadataTypes.STICKER_NAME,
      value: e.name.trim().toLocaleLowerCase()
    };
    if ((0, E.isStandardSticker)(e)) {
      let t = I.find(t => t.id === e.pack_id),
        s = [i, ...(null != n ? n : "").split(",").map(e => ({
          type: m.StickerMetadataTypes.TAG,
          value: e.trim().toLocaleLowerCase()
        }))];
      null != t && s.push({
        type: m.StickerMetadataTypes.PACK_NAME,
        value: t.name
      }), T.set(e.id, s)
    } else if ((0, E.isGuildSticker)(e) && null != n) {
      let s = u.default.getByName(n),
        r = {
          type: m.StickerMetadataTypes.TAG,
          value: n.trim().toLocaleLowerCase()
        },
        a = [i, r];
      if (null != t) {
        let e = (t instanceof(0, c.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
        null != e && "" !== e && a.push({
          type: m.StickerMetadataTypes.GUILD_NAME,
          value: e
        })
      }
      if (null == s) {
        T.set(e.id, a);
        return
      }
      a.push({
        type: m.StickerMetadataTypes.CORRELATED_EMOJI,
        value: s.surrogates
      }), s.forEachDiversity(e => a.push({
        type: m.StickerMetadataTypes.CORRELATED_EMOJI,
        value: e.surrogates
      })), T.set(e.id, a)
    }
  }, M = (e, t, n) => {
    v.set(e.id, e);
    let i = [...I];
    if (t) {
      let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), I = i
    }(t || n) && e.stickers.forEach(e => b(e))
  }, U = () => {
    y.forEach((e, t) => {
      let n = _.default.getGuild(t);
      null != n && e.forEach(e => L(e, n))
    }), I.forEach(e => {
      e.stickers.forEach(e => L(e))
    })
  };

function k(e) {
  null != e.stickers && (e.stickers.forEach(t => b(t, !0, e)), N(e.id, e.stickers))
}
class w extends s.default.Store {
  initialize() {
    this.waitFor(a.default, f.default, _.default)
  }
  get isLoaded() {
    return 0 !== p
  }
  get loadState() {
    return p
  }
  get stickerMetadata() {
    return O(), null == T && (T = new Map, U()), T
  }
  get hasLoadedStickerPacks() {
    return null != C && C + R > Date.now()
  }
  get isFetchingStickerPacks() {
    return A
  }
  getStickerById(e) {
    return !S.has(e) && O(), S.get(e)
  }
  getStickerPack(e) {
    return v.get(e)
  }
  getPremiumPacks() {
    return I
  }
  isPremiumPack(e) {
    return I.some(t => t.id === e)
  }
  getRawStickersByGuild() {
    return y
  }
  getAllStickersIterator() {
    return O(), S.values()
  }
  getAllGuildStickers() {
    return O(), y
  }
  getStickersByGuildId(e) {
    return O(), y.get(e)
  }
}
w.displayName = "StickersStore";
var V = new w(r.default, {
  BACKGROUND_SYNC: () => {
    T = null, S = new Map, y = new Map, p = 0
  },
  CONNECTION_OPEN: e => {
    let {
      guilds: t
    } = e;
    T = null, S = new Map, y = new Map, t.forEach(k), p = t.every(e => null != e.stickers) ? 1 : 0
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    !d.default.isLurking(t.id) && (k(t), 1 === p && null == t.stickers && null != t.stickerUpdates && (p = 0))
  },
  GUILD_DELETE: function(e) {
    var t;
    let {
      guild: n
    } = e, i = null !== (t = y.get(n.id)) && void 0 !== t ? t : [];
    i.forEach(e => {
      null != T && T.delete(e.id), S.delete(e.id)
    }), y.delete(n.id), y = new Map(y)
  },
  LOGOUT: () => {
    p = 0, I = [], S.clear(), v.clear(), T = null, y.clear(), y = new Map(y), A = !1, C = null
  },
  STICKER_PACKS_FETCH_START: () => {
    A = !0
  },
  STICKER_PACKS_FETCH_SUCCESS: e => {
    let {
      packs: t
    } = e;
    t.forEach(e => M(e, !0)), C = Date.now(), A = !1
  },
  STICKER_PACK_FETCH_SUCCESS: e => {
    let {
      pack: t,
      ingestStickers: n
    } = e;
    M(t, !1, n)
  },
  GUILD_STICKERS_FETCH_SUCCESS: e => {
    let {
      guildId: t,
      stickers: n
    } = e;
    n.forEach(e => b(e)), N(t, n)
  },
  GUILD_STICKERS_CREATE_SUCCESS: e => {
    var t, n;
    let {
      guildId: i,
      sticker: s
    } = e, r = null !== (t = y.get(i)) && void 0 !== t ? t : [];
    N(i, [...null !== (n = r.filter(e => e.id !== s.id)) && void 0 !== n ? n : [], s]), b(s)
  },
  STICKER_FETCH_SUCCESS: e => {
    let {
      sticker: t
    } = e;
    b(t, !1)
  },
  GUILD_STICKERS_UPDATE: e => {
    var t;
    let {
      guildId: n,
      stickers: i
    } = e, s = e => {
      let t;
      let n = S.get(e.id);
      return null != n && (0, E.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
        ...e,
        user: t
      }
    }, r = null !== (t = y.get(n)) && void 0 !== t ? t : [], a = r.filter(e => null == i.find(t => t.id === e.id));
    a.forEach(e => {
      S.delete(e.id), null != T && T.delete(e.id)
    });
    let o = i.map(e => s(e));
    o.forEach(e => b(e)), N(n, o)
  },
  CACHED_STICKERS_LOADED: function(e) {
    let {
      stickers: t
    } = e;
    for (let [e, n] of t)
      if (f.default.isMember(e) && !y.has(e)) {
        let t = _.default.getGuild(e);
        for (let e of n) b(e, !0, t);
        N(e, n)
      }
  }
})
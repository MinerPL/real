"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007"), n("424973");
var a = n("917351"),
  s = n.n(a),
  i = n("446674"),
  l = n("713349"),
  r = n("95410"),
  o = n("116949"),
  u = n("397336"),
  d = n("49111");
let c = "selectedChannelGuildFrecency";

function E(e) {
  var t;
  let n;
  (t = n || (n = {})).IMAGE = "IMAGE", t.VIDEO = "VIDEO";
  let {
    state: a
  } = i.default.PersistedStore.migrateAndReadStoreState("GIFFavoritesStore", [e => null == e ? {
    favorites: [],
    timesFavorited: 0
  } : Array.isArray(e) ? {
    favorites: e,
    timesFavorited: 0
  } : e, e => Array.isArray(e.favorites) ? e : {
    favorites: [],
    timesFavorited: 0
  }]);
  return null == a || 0 === a.favorites.length ? [] : a.favorites.map((t, n) => {
    let s = l.FavoriteGIF.create();
    return s.format = "IMAGE" === t.format ? l.GIFType.IMAGE : "VIDEO" === t.format ? l.GIFType.VIDEO : l.GIFType.NONE, s.src = t.src, s.width = t.width, s.height = t.height, s.order = a.favorites.length - n + e, {
      url: t.url,
      favorite: s
    }
  })
}
let f = [{
  version: 2,
  run(e) {
    let t = E(1);
    if (0 === t.length) return !1;
    for (let {
        url: n,
        favorite: a
      }
      of(null == e.favoriteGifs && (e.favoriteGifs = l.FavoriteGIFs.create()), e.favoriteGifs.gifs = {}, t)) e.favoriteGifs.gifs[n] = a;
    return e.favoriteGifs.hideTooltip = t.length > 2, !0
  },
  cleanup() {}
}, {
  version: 3,
  run(e) {
    function t() {
      return {
        usageHistory: {},
        favorites: []
      }
    }
    let {
      state: n
    } = i.default.PersistedStore.migrateAndReadStoreState("StickersPersistedStore", [e => null == e || 0 === Object.keys(e).length ? t() : e, e => null == e || 0 === Object.keys(e).length ? t() : (null == e.favorites && (e.favorites = []), e)]);
    if (null == n) return !1;
    let a = !1;
    return n.favorites.length > 0 && (e.favoriteStickers = l.FavoriteStickers.create(), e.favoriteStickers.stickerIds = s.uniq(n.favorites).slice(0, u.MAX_FAVORITES), a = !0), s.size(n.usageHistory) > 0 && (e.stickerFrecency = l.StickerFrecency.create(), e.stickerFrecency.stickers = (0, o.serializeUsageHistory)(n.usageHistory, 100), a = !0), a
  },
  cleanup() {
    r.default.remove("StickersPersistedStore")
  }
}, {
  version: 4,
  run(e) {
    let {
      state: t
    } = i.default.PersistedStore.migrateAndReadStoreState("EmojiStore", [() => ({
      usageHistory: r.default.get("EmojiUsageHistory") || {}
    })]);
    if (null == t) return !1;
    let n = !1;
    return null != t.favorites && t.favorites.length > 0 && (e.favoriteEmojis = l.FavoriteEmojis.create(), e.favoriteEmojis.emojis = s.uniq(t.favorites).slice(0, u.MAX_FAVORITES), n = !0), s.size(t.usageHistory) > 0 && (e.emojiFrecency = l.EmojiFrecency.create(), e.emojiFrecency.emojis = (0, o.serializeUsageHistory)(t.usageHistory, 100), n = !0), n
  },
  cleanup() {
    r.default.remove("EmojiStore"), r.default.remove("EmojiUsageHistory"), r.default.remove("EmojiDiversitySurrogate")
  }
}, {
  version: 6,
  run(e) {
    null == e.favoriteGifs && (e.favoriteGifs = l.FavoriteGIFs.create()), null == e.favoriteGifs.gifs && (e.favoriteGifs.gifs = {});
    let t = E(1);
    if (0 === t.length) return !1;
    s(e.favoriteGifs.gifs).values().sortBy("order").forEach((e, n) => e.order = t.length + 1 + n);
    let n = l.FavoriteGIFs.toBinary(e.favoriteGifs).length,
      a = 0;
    for (let {
        url: s,
        favorite: i
      }
      of t) {
      if (i.order = t.length - a, a++, s in e.favoriteGifs.gifs) {
        e.favoriteGifs.gifs[s].order = i.order;
        continue
      }
      let r = l.FavoriteGIF.toBinary(i).length + s.length + 7;
      !(n + r > u.MAX_FAVORITE_GIFS_SIZE) && (n += r, e.favoriteGifs.gifs[s] = i)
    }
    for (n = l.FavoriteGIFs.toBinary(e.favoriteGifs).length; n > u.MAX_FAVORITE_GIFS_SIZE;) {
      let t = 0;
      for (let n in e.favoriteGifs.gifs)
        if (delete e.favoriteGifs.gifs[n], ++t >= 10) break;
      n = l.FavoriteGIFs.toBinary(e.favoriteGifs).length
    }
    return !0
  },
  cleanup() {}
}, {
  version: 7,
  run(e) {
    let {
      state: t
    } = i.default.PersistedStore.migrateAndReadStoreState("ApplicationCommandFrecency", []);
    if (null == t) return !1;
    let n = !1;
    return s.size(t.usageHistory) > 0 && (e.applicationCommandFrecency = l.ApplicationCommandFrecency.create(), e.applicationCommandFrecency.applicationCommands = (0, o.serializeUsageHistory)(t.usageHistory, 500), n = !0), n
  },
  cleanup() {
    r.default.remove("ApplicationCommandFrecency")
  }
}, {
  version: 8,
  run(e) {
    let {
      state: t
    } = i.default.PersistedStore.migrateAndReadStoreState("SoundboardFavoriteStore", []);
    if (null == t) return !1;
    let n = !1;
    return s.size(t.favoriteSounds) > 0 && (e.favoriteSoundboardSounds = l.FavoriteSoundboardSounds.create(), Object.keys(t.favoriteSounds).forEach(n => {
      let a = new Set(t.favoriteSounds[n]);
      a.forEach(t => {
        var n;
        null === (n = e.favoriteSoundboardSounds) || void 0 === n || n.soundIds.push(t)
      })
    }), n = !0), n
  },
  cleanup() {
    r.default.remove("SoundboardFavoriteStore")
  }
}, {
  version: 9,
  run(e) {
    let t = r.default.get(c);
    if (null == t) return !1;
    for (let e in t) !d.ID_REGEX.test(e) && delete t[e];
    return e.guildAndChannelFrecency = l.GuildAndChannelFrecency.create(), e.guildAndChannelFrecency.guildAndChannels = (0, o.serializeUsageHistory)(t, 100), !0
  },
  cleanup() {
    r.default.remove(c)
  }
}];
var _ = f
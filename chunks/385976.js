"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eh
  }
}), n("222007"), n("581081"), n("424973"), n("686130"), n("781738"), n("808653");
var i = n("917351"),
  s = n.n(i),
  r = n("866227"),
  a = n.n(r),
  o = n("102053"),
  l = n("446674"),
  u = n("913144"),
  d = n("80507"),
  c = n("802493"),
  f = n("595525"),
  _ = n("629538"),
  h = n("39616"),
  g = n("828674"),
  m = n("153043"),
  E = n("256941"),
  p = n("505985"),
  v = n("166465"),
  S = n("915639"),
  T = n("374363"),
  I = n("26989"),
  C = n("778689"),
  A = n("305961"),
  y = n("677099"),
  N = n("697218"),
  R = n("315102"),
  O = n("718517"),
  D = n("402671"),
  P = n("449008"),
  b = n("655518"),
  L = n("968027"),
  M = n("299039"),
  U = n("858619"),
  k = n("867805"),
  w = n("802461"),
  V = n("26430"),
  G = n("958706"),
  F = n("115279"),
  x = n("397336");
let B = [F.EmojiCategories.TOP_GUILD_EMOJI.toString(), F.EmojiCategories.FAVORITES.toString(), F.EmojiCategories.RECENT.toString(), F.EmojiCategories.CUSTOM.toString()].concat(k.default.getCategories()),
  H = {
    pendingUsages: []
  };
class Y {
  getEmoji(e) {
    return this.build(), this._emojiMap[e]
  }
  getUsableEmoji(e) {
    let t = this.getEmoji(e);
    return null != t && this.isUsable(t) ? t : null
  }
  isUsable(e) {
    if (0 === e.roles.length) return !0;
    let t = I.default.getMember(this.id, this._userId);
    if (null == t) return !1;
    let n = t.roles.some(t => e.roles.includes(t));
    return !!(n || (0, m.isPurchasableRoleSubscriptionEmoji)(e)) || !1
  }
  get rawEmojis() {
    return this._emojis
  }
  get emojis() {
    return this.build(), this._emojis
  }
  get emoticons() {
    return this.build(), this._emoticons
  }
  get usableEmojis() {
    return this.build(), this._usableEmojis
  }
  build() {
    this._dirty && (this._dirty = !1, this._emojis.forEach(e => {
      e.url = R.default.getEmojiURL({
        id: e.id,
        animated: e.animated,
        size: 48
      }), e.allNamesString = ":".concat(e.name, ":"), e.guildId = this.id, e.type = U.EmojiTypes.GUILD, this._emojiMap[e.id] = e
    }), this._usableEmojis = s.sortBy(this._emojis.filter(e => this.isUsable(e)), e => e.name), this._emoticons = this._usableEmojis.filter(e => !e.require_colons))
  }
  constructor(e, t, n, i = !1) {
    this._dirty = !0, this._emojiMap = {}, this._emoticons = [], this._usableEmojis = [], this._canSeeServerSubIAP = !1, this._totalUsable = 0, this.id = e, this._userId = t, this._emojis = n, this._canSeeServerSubIAP = i
  }
}
let j = M.default.fromTimestamp(Date.now() - 60 * O.default.Millis.DAY),
  W = [],
  K = 2,
  z = B.slice(0),
  q = {},
  X = new Map,
  Q = {},
  Z = null,
  J = new Map;

function $(e) {
  var t, n, i;
  let s = ee()[e];
  return null != s ? null !== (i = null === (t = q[s]) || void 0 === t ? void 0 : t.getUsableEmoji(e)) && void 0 !== i ? i : null === (n = X.get(s)) || void 0 === n ? void 0 : n.emojiById[e] : null
}

function ee() {
  if (et(), null == Q) {
    for (let e in Q = {}, q) {
      let t = q[e];
      for (let n of t.rawEmojis) Q[n.id] = e
    }
    for (let [t, n] of X) {
      var e;
      for (let i of null !== (e = null == n ? void 0 : n.content.emojis) && void 0 !== e ? e : []) Q[i.id] = t
    }
  }
  return Q
}
let et = () => L.isStable ? function() {
  if (0 !== K) return;
  let e = c.default.database();
  if (null == e) return;
  K = 2;
  let t = (0, f.tryLoadOrResetCacheGateway)("EmojiStore.loadSavedEmojis", () => o.default.time("\uD83D\uDCBE", "loadSavedEmojis", () => _.default.getSync(e)));
  if (null != t) {
    for (let [e, n] of t) !Object.hasOwn(q, e) && C.default.isMember(e) && el(e, n);
    eo()
  }
}() : en();
async function en() {
  if (0 !== K) return;
  let e = c.default.database();
  if (null == e) return;
  K = 2;
  let t = await (0, f.tryLoadOrResetCacheGatewayAsync)("EmojiStore.loadSavedEmojis", () => o.default.timeAsync("\uD83D\uDCBE", "loadSavedEmojis", () => _.default.getAsync(e)));
  null != t && u.default.dispatch({
    type: "CACHED_EMOJIS_LOADED",
    emojis: t
  })
}
class ei {
  static get(e) {
    return void 0 === e && (e = null), (null == ei._lastInstance || ei._lastInstance.guildId !== e) && (ei._lastInstance = new ei(e)), ei._lastInstance
  }
  static reset() {
    ei._lastInstance = null
  }
  static resetFrequentlyUsed() {
    null != ei._lastInstance && (ei._lastInstance.frequentlyUsed = null)
  }
  static resetFavorites() {
    null != ei._lastInstance && (ei._lastInstance.favorites = null, ei._lastInstance.favoriteNamesAndIds = null)
  }
  static clear(e) {
    null != ei._lastInstance && ei._lastInstance.guildId === e && (ei._lastInstance = null)
  }
  ensureDisambiguated() {
    null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji()
  }
  getDisambiguatedEmoji() {
    return null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji(), this.disambiguatedEmoji
  }
  getCustomEmoji() {
    return null == this.customEmojis && this._buildDisambiguatedCustomEmoji(), this.customEmojis
  }
  getGroupedCustomEmoji() {
    return null == this.groupedCustomEmojis && this._buildDisambiguatedCustomEmoji(), this.groupedCustomEmojis
  }
  getByName(e) {
    if ((null == this.emojisByName || null == this.unicodeAliases) && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emojisByName, e)) return this.emojisByName[e];
    if (Object.prototype.hasOwnProperty.call(this.unicodeAliases, e)) {
      let t = this.unicodeAliases[e];
      if (Object.prototype.hasOwnProperty.call(this.emojisByName, t)) return this.emojisByName[t]
    }
  }
  getEmoticonByName(e) {
    if (null == this.emoticonsByName && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emoticonsByName, e)) return this.emoticonsByName[e]
  }
  getById(e) {
    if (null == this.emojisById && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emojisById, e)) return this.emojisById[e]
  }
  getCustomEmoticonRegex() {
    return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), null == this.emoticonRegex && null != this.escapedEmoticonNames && "" !== this.escapedEmoticonNames && (this.emoticonRegex = new RegExp("^\\b(".concat(this.escapedEmoticonNames, ")\\b"))), this.emoticonRegex
  }
  getFrequentlyUsedEmojisWithoutFetchingLatest() {
    return this.ensureDisambiguated(), null == this.frequentlyUsed && (this.frequentlyUsed = es.frequently.map(e => null != e.id ? this.getById(e.id) : null != e.name ? k.default.getByName(e.name) : void 0).filter(P.isNotNullish)), this.frequentlyUsed
  }
  rebuildFavoriteEmojisWithoutFetchingLatest() {
    if (this.ensureDisambiguated(), null == this.favorites || null == this.favoriteNamesAndIds) {
      var e, t;
      this.favoriteNamesAndIds = new Set, this.favorites = (null !== (t = null === (e = T.default.frecencyWithoutFetchingLatest.favoriteEmojis) || void 0 === e ? void 0 : e.emojis) && void 0 !== t ? t : []).map(e => {
        var t;
        null === (t = this.favoriteNamesAndIds) || void 0 === t || t.add(e);
        let n = this.getById(e);
        return null == n && (n = k.default.getByName(e)), n
      }).filter(P.isNotNullish)
    }
    return [this.favorites, this.favoriteNamesAndIds]
  }
  get favoriteEmojisWithoutFetchingLatest() {
    return this.rebuildFavoriteEmojisWithoutFetchingLatest()[0]
  }
  getEmojiInPriorityOrderWithoutFetchingLatest() {
    let e = new Set;
    return this.favoriteEmojisWithoutFetchingLatest.concat(this.getFrequentlyUsedEmojisWithoutFetchingLatest()).filter(t => !e.has(t) && (e.add(t), !0))
  }
  getTopEmojiWithoutFetchingLatest(e) {
    if (this.ensureDisambiguated(), null == this.topEmojis) {
      var t;
      let n = J.get(e),
        i = V.default.getTopEmojiIdsByGuildId(e);
      if (null == n && null == i) return W;
      let s = null !== (t = null == n ? void 0 : n.emojiIds) && void 0 !== t ? t : i,
        r = s.map(e => {
          var t;
          return null !== (t = this.getById(e)) && void 0 !== t ? t : k.default.getByName(k.default.convertSurrogateToName(e, !1))
        }),
        a = [];
      r.forEach(e => {
        null != e && a.push(e)
      });
      let o = this.getNewlyAddedEmojiForGuild(e).map(e => e.id);
      this.topEmojis = a.filter(e => !o.includes(e.id))
    }
    return this.topEmojis
  }
  getNewlyAddedEmojiForGuild(e) {
    if (this.ensureDisambiguated(), null == this.newlyAddedEmoji) return W;
    let t = this.newlyAddedEmoji[e];
    return null == t ? W : t
  }
  getEscapedCustomEmoticonNames() {
    return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), this.escapedEmoticonNames
  }
  nameMatchesChain(e) {
    return s(this.getDisambiguatedEmoji()).filter(t => {
      let {
        id: n,
        names: i,
        name: r
      } = t, a = null != i && s.some(i, e), o = null != r && e(r), l = null != r && s.some(h.default.getTermsForEmoji(r), e), u = null != n && s.some(w.default.getCaptionsForEmojiById({
        emojiId: n
      }), e);
      return a || o || l || u
    })
  }
  _buildDisambiguatedCustomEmoji() {
    let e = {},
      t = [];
    this.emoticonRegex = null, this.frequentlyUsed = null, this.disambiguatedEmoji = [], this.unicodeAliases = Object.create(null), this.customEmojis = Object.create(null), this.groupedCustomEmojis = Object.create(null), this.emoticonsByName = Object.create(null), this.emojisByName = Object.create(null), this.emojisById = Object.create(null), this.newlyAddedEmoji = Object.create(null);
    let n = t => {
        var n, i;
        let s = t.name,
          r = null !== (n = e[s]) && void 0 !== n ? n : 0;
        if (e[s] = r + 1, r > 0) {
          let e = "".concat(s, "~").concat(r);
          t = {
            ...t,
            name: e,
            originalName: s,
            allNamesString: ":".concat(e, ":")
          }
        }
        if (this.emojisByName[t.name] = t, "names" in t && (null === (i = t.names) || void 0 === i || i.slice(1).forEach(e => this.unicodeAliases[e] = t.name)), null != t.id) {
          let e, n;
          switch (this.emojisById[t.id] = t, this.customEmojis[t.name] = t, t.type) {
            case U.EmojiTypes.GUILD:
              e = t.guildId, n = !0;
              break;
            case U.EmojiTypes.PACK:
              e = t.packId
          }
          null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(t) : this.groupedCustomEmojis[e] = [t], n && M.default.compare(t.id, j) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(t) : this.newlyAddedEmoji[e] = [t]))
        }
        null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(t)
      },
      i = e => {
        !Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name) && (t.push(b.default.escape(e.name)), this.emoticonsByName[e.name] = e)
      };
    k.default.forEach(n);
    let r = e => {
      let t = q[null == e ? "null" : e];
      null != t && (s.each(t.usableEmojis, n), s.each(t.emoticons, i))
    };
    r(this.guildId);
    for (let e in this.newlyAddedEmoji) null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, t) => M.default.compare(t.id, e.id)).slice(0, 3) : this.newlyAddedEmoji[e] = [];
    y.default.getFlattenedGuildIds().forEach(e => {
      e !== this.guildId && r(e)
    }), v.default.getPacksForUser().map(e => {
      null != e.content.emojis && s.each(e.content.emojis, n)
    }), this.escapedEmoticonNames = t.join("|")
  }
  constructor(e) {
    this.emoticonRegex = null, this.frequentlyUsed = null, this.favorites = null, this.favoriteNamesAndIds = null, this.topEmojis = null, this.escapedEmoticonNames = null, this.disambiguatedEmoji = null, this.newlyAddedEmoji = null, this.isFavoriteEmojiWithoutFetchingLatest = e => {
      var t;
      if (null == e) return !1;
      let n = this.rebuildFavoriteEmojisWithoutFetchingLatest()[1];
      return null != e.id ? n.has(e.id) : n.has(null !== (t = e.name) && void 0 !== t ? t : "")
    }, this.guildId = e
  }
}
ei._lastInstance = null;
let es = new d.default({
  computeBonus: () => 100,
  computeWeight: e => {
    let t = 0;
    return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
  },
  lookupKey: e => {
    var t;
    return null !== (t = k.default.getByName(e)) && void 0 !== t ? t : $(e)
  },
  afterCompute: () => {
    ei.resetFrequentlyUsed(), z = B.slice(0), !s.some(q, e => e.usableEmojis.length > 0) && z.splice(B.indexOf(F.EmojiCategories.CUSTOM), 1)
  },
  numFrequentlyItems: 42
});

function er() {
  q = {}, X.clear(), Q = {}, ei.reset(), J.clear(), K = 2
}

function ea(e) {
  let t = q[e];
  null != t && delete q[e]
}

function eo() {
  Q = null, ei.reset(), 0 !== K && es.compute()
}

function el(e, t) {
  if (ea(e), ei.clear(e), null == t) return;
  let n = N.default.getCurrentUser();
  if (null == n) return;
  let i = (0, p.canUseRoleSubscriptionIAP)(e);
  q[e] = new Y(e, n.id, t, i)
}

function eu() {
  var e, t, n, i;
  let r = T.default.settings,
    a = null === (t = r.textAndImages) || void 0 === t ? void 0 : null === (e = t.diversitySurrogate) || void 0 === e ? void 0 : e.value;
  null != a && k.default.setDefaultDiversitySurrogate(a), ei.reset();
  let o = T.default.frecencyWithoutFetchingLatest,
    l = null !== (i = null === (n = o.emojiFrecency) || void 0 === n ? void 0 : n.emojis) && void 0 !== i ? i : {};
  es.overwriteHistory(s.mapValues(l, e => ({
    ...e,
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), H.pendingUsages), s.isEmpty(l) && s.isEmpty(H.pendingUsages) && T.default.hasLoaded(x.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (es.track("thumbsup"), es.track("thumbsup"), es.track("eyes"), es.track("eyes"), es.track("laughing"), es.track("laughing"), es.track("watermelon"), es.track("fork_and_knife"), es.track("yum"), es.track("weary"), es.track("tired_face"), es.track("poop"), es.track("100"))
}

function ed(e) {
  for (let i of e) {
    var t, n;
    let e = null !== (n = null !== (t = i.id) && void 0 !== t ? t : i.uniqueName) && void 0 !== n ? n : i.name;
    null != e && (es.track(e), H.pendingUsages.push({
      key: e,
      timestamp: Date.now()
    }))
  }
  let i = e.length > 0;
  return i && 0 !== K && es.compute(), i
}

function ec(e) {
  let {
    guildId: t,
    role: n
  } = e;
  if (!(0, g.isSubscriptionRole)(n)) return !1;
  {
    let e = q[t];
    el(t, null == e ? void 0 : e.emojis), eo()
  }
}

function ef() {
  X = v.default.getPacksById(), eo()
}
class e_ extends l.default.PersistedStore {
  initialize(e) {
    this.waitFor(c.default, C.default, I.default, A.default, v.default, S.default, E.default, V.default, N.default), null != e && (H = e), this.syncWith([T.default], eu), this.syncWith([v.default], ef)
  }
  getState() {
    return H
  }
  get loadState() {
    return K
  }
  hasPendingUsage() {
    return H.pendingUsages.length > 0
  }
  get categories() {
    return z
  }
  get diversitySurrogate() {
    var e;
    return null !== (e = k.default.getDefaultDiversitySurrogate()) && void 0 !== e ? e : ""
  }
  get emojiFrecencyWithoutFetchingLatest() {
    return es
  }
  getGuildEmoji(e) {
    var t;
    et();
    let n = q[e];
    return null !== (t = null == n ? void 0 : n.emojis) && void 0 !== t ? t : []
  }
  getUsableGuildEmoji(e) {
    var t;
    et();
    let n = q[e];
    return null !== (t = null == n ? void 0 : n.usableEmojis) && void 0 !== t ? t : []
  }
  getGuilds() {
    return q
  }
  getDisambiguatedEmojiContext(e) {
    return et(), ei.get(e)
  }
  getSearchResultsOrder(e, t, n) {
    let i = t.toLowerCase(),
      r = b.default.escape(i);
    if (e.length > 0) {
      let t = RegExp("^".concat(r), "i"),
        n = new RegExp("(^|_|[A-Z])".concat(r, "s?([A-Z]|_|$)")),
        a = n.test.bind(n),
        o = t.test.bind(t),
        l = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
          if (null == e || null == t) return 0;
          let n = e.toLowerCase(),
            s = 1 + (n === i ? 4 : 0) + (a(n) || a(e) ? 2 : 0) + (o(e) ? 1 : 0),
            r = es.getScore(t);
          return null != r && (s *= r / 100), s
        };
      e = s.orderBy(e, [e => null != e.names ? l(e.names[0]) : l(e.name, e.id), e => null != e.names ? e.names[0] : e.name], ["desc", "asc"])
    }
    return n > 0 && (e = e.slice(0, n)), e
  }
  searchWithoutFetchingLatest(e) {
    let t, {
      channel: n,
      query: i,
      count: s = 0,
      intention: r,
      includeExternalGuilds: a = !0,
      canViewAndUsePackEmoji: o,
      matchComparator: l
    } = e;
    et();
    let u = i.toLowerCase().replaceAll(/[ _]/g, ""),
      d = b.default.escape(u);
    if (null == l) {
      let e = RegExp("".concat(d), "i");
      t = t => e.test(t.replaceAll("_", ""))
    } else t = l;
    let c = null != n ? n.getGuildId() : null,
      f = ei.get(c).nameMatchesChain(t).reduce((e, t) => {
        let i = D.default.getEmojiUnavailableReason({
          emoji: t,
          channel: n,
          intention: r,
          canViewAndUsePackEmoji: o,
          forceIncludeExternalGuilds: a
        });
        return i === G.EmojiDisabledReasons.PREMIUM_LOCKED ? e.locked.push(t) : null == i && e.unlocked.push(t), e
      }, {
        unlocked: [],
        locked: []
      });
    return {
      unlocked: this.getSearchResultsOrder(f.unlocked, i, s),
      locked: this.getSearchResultsOrder(f.locked, i, 0)
    }
  }
  getUsableCustomEmojiById(e) {
    return et(), $(e)
  }
  getCustomEmojiById(e) {
    return et(),
      function(e) {
        var t, n, i;
        let s = ee()[e];
        return null != s ? null !== (i = null === (t = q[s]) || void 0 === t ? void 0 : t.getEmoji(e)) && void 0 !== i ? i : null === (n = X.get(s)) || void 0 === n ? void 0 : n.emojiById[e] : null
      }(e)
  }
  getTopEmoji(e) {
    return null == e ? W : (et(), ei.get(e).getTopEmojiWithoutFetchingLatest(e))
  }
  getNewlyAddedEmoji(e) {
    return null == e ? W : (et(), ei.get(e).getNewlyAddedEmojiForGuild(e))
  }
  getTopEmojisMetadata(e) {
    return J.get(e)
  }
  getEmojiAutosuggestion(e) {
    if (null != Z && Z.length > 0) {
      let {
        locked: t,
        unlocked: n
      } = this.searchWithoutFetchingLatest({
        channel: e,
        count: 10,
        query: Z,
        intention: G.EmojiIntention.CHAT,
        canViewAndUsePackEmoji: !1
      });
      return [...n.slice(0, 5), ...t.slice(0, 5)].slice(0, 5)
    }
    return []
  }
  hasUsableEmojiInAnyGuild() {
    et();
    let e = Object.keys(q);
    return e.some(e => q[e].usableEmojis.length > 0)
  }
  hasFavoriteEmojis(e) {
    let t = ei.get(e);
    return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0
  }
}
e_.displayName = "EmojiStore", e_.persistKey = "EmojiStoreV2";
var eh = new e_(u.default, {
  BACKGROUND_SYNC: function() {
    er()
  },
  CONNECTION_OPEN: function(e) {
    for (let t of (er(), e.guilds)) el(t.id, t.emojis);
    K = e.guilds.every(e => null != e.emojis) ? 1 : 0, eo()
  },
  CACHED_EMOJIS_LOADED: function(e) {
    let {
      emojis: t
    } = e;
    for (let [e, n] of t) !Object.hasOwn(q, e) && C.default.isMember(e) && el(e, n);
    eo()
  },
  GUILD_MEMBER_UPDATE: function(e) {
    var t;
    let {
      guildId: n,
      user: i
    } = e;
    if (i.id !== (null === (t = N.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return;
    let s = q[n];
    el(n, null == s ? void 0 : s.usableEmojis), eo()
  },
  GUILD_CREATE: function(e) {
    0 !== K && null == e.guild.emojis && null != e.guild.emojiUpdates && (K = 0), el(e.guild.id, e.guild.emojis), eo()
  },
  GUILD_UPDATE: function(e) {
    el(e.guild.id, e.guild.emojis), eo()
  },
  GUILD_EMOJIS_UPDATE: function(e) {
    let {
      guildId: t,
      emojis: n
    } = e;
    el(t, n), eo()
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    ea(t.id), J.delete(t.id), eo()
  },
  MESSAGE_REACTION_ADD: function(e) {
    if (!e.optimistic) return !1;
    let t = null != e.emoji.id && "0" !== e.emoji.id ? e.emoji : k.default.getByName(k.default.convertSurrogateToName(e.emoji.name, !1));
    if (null == t) return !1;
    ed([t])
  },
  EMOJI_TRACK_USAGE: function(e) {
    let {
      emojiUsed: t
    } = e;
    ed(t)
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: t
      },
      wasSaved: n
    } = e;
    if (h.default.setEmojiLocale(S.default.locale), t !== x.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    H.pendingUsages = []
  },
  GUILD_ROLE_CREATE: ec,
  GUILD_ROLE_UPDATE: ec,
  TOP_EMOJIS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      topEmojisMetadata: n
    } = e;
    J.set(t, {
      emojiIds: n.map(e => e.emojiId),
      topEmojisTTL: a(a()).add(1, "days").valueOf()
    })
  },
  INVENTORY_FETCH_SUCCESS: function(e) {
    let {} = e;
    ef()
  },
  INVENTORY_COLLECT_PACK_SUCCESS: function(e) {
    let {} = e;
    eo()
  },
  INVENTORY_REMOVE_PACK_SUCCESS: function(e) {
    let {} = e;
    eo()
  },
  EMOJI_AUTOSUGGESTION_UPDATE: function(e) {
    let {
      text: t
    } = e;
    Z = t
  },
  LOGOUT: function(e) {
    er()
  }
})
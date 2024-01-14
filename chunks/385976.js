"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ef
  }
}), n("222007"), n("581081"), n("424973"), n("686130"), n("781738"), n("808653");
var s = n("917351"),
  i = n.n(s),
  r = n("866227"),
  a = n.n(r),
  o = n("102053"),
  d = n("446674"),
  u = n("913144"),
  l = n("80507"),
  f = n("802493"),
  _ = n("595525"),
  c = n("629538"),
  g = n("39616"),
  m = n("828674"),
  h = n("153043"),
  v = n("256941"),
  E = n("505985"),
  p = n("166465"),
  y = n("915639"),
  T = n("374363"),
  C = n("26989"),
  S = n("778689"),
  I = n("305961"),
  A = n("677099"),
  D = n("697218"),
  N = n("315102"),
  O = n("402671"),
  b = n("449008"),
  P = n("655518"),
  R = n("299039"),
  V = n("858619"),
  k = n("867805"),
  M = n("802461"),
  w = n("26430"),
  L = n("958706"),
  U = n("115279"),
  G = n("397336");
let F = [U.EmojiCategories.TOP_GUILD_EMOJI.toString(), U.EmojiCategories.FAVORITES.toString(), U.EmojiCategories.RECENT.toString(), U.EmojiCategories.CUSTOM.toString()].concat(k.default.getCategories()),
  x = {
    pendingUsages: []
  };
class B {
  getEmoji(e) {
    return this.build(), this._emojiMap[e]
  }
  getUsableEmoji(e) {
    let t = this.getEmoji(e);
    return null != t && this.isUsable(t) ? t : null
  }
  isUsable(e) {
    if (0 === e.roles.length) return !0;
    let t = C.default.getMember(this.id, this._userId);
    if (null == t) return !1;
    let n = t.roles.some(t => e.roles.includes(t));
    return !!(n || (0, h.isPurchasableRoleSubscriptionEmoji)(e)) || !1
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
      e.url = N.default.getEmojiURL({
        id: e.id,
        animated: e.animated,
        size: 48
      }), e.allNamesString = ":".concat(e.name, ":"), e.guildId = this.id, e.type = V.EmojiTypes.GUILD, this._emojiMap[e.id] = e
    }), this._usableEmojis = i.sortBy(this._emojis.filter(e => this.isUsable(e)), e => e.name), this._emoticons = this._usableEmojis.filter(e => !e.require_colons))
  }
  constructor(e, t, n, s = !1) {
    this._dirty = !0, this._emojiMap = {}, this._emoticons = [], this._usableEmojis = [], this._canSeeServerSubIAP = !1, this._totalUsable = 0, this.id = e, this._userId = t, this._emojis = n, this._canSeeServerSubIAP = s
  }
}
let H = R.default.fromTimestamp(Date.now() - 5184e6),
  Y = [],
  j = 2,
  K = F.slice(0),
  W = {},
  z = new Map,
  q = {},
  X = null,
  Q = new Map;

function Z(e) {
  var t, n, s;
  let i = J()[e];
  return null != i ? null !== (s = null === (t = W[i]) || void 0 === t ? void 0 : t.getUsableEmoji(e)) && void 0 !== s ? s : null === (n = z.get(i)) || void 0 === n ? void 0 : n.emojiById[e] : null
}

function J() {
  if ($(), null == q) {
    for (let e in q = {}, W) {
      let t = W[e];
      for (let n of t.rawEmojis) q[n.id] = e
    }
    for (let [t, n] of z) {
      var e;
      for (let s of null !== (e = null == n ? void 0 : n.content.emojis) && void 0 !== e ? e : []) q[s.id] = t
    }
  }
  return q
}

function $() {
  if (0 !== j) return;
  let e = f.default.database();
  if (null == e) return;
  j = 2;
  let t = (0, _.tryLoadOrResetCacheGateway)("EmojiStore.loadSavedEmojis", () => o.default.time("\uD83D\uDCBE", "loadSavedEmojis", () => c.default.getSync(e)));
  if (null != t) {
    for (let [e, n] of t) !Object.hasOwn(W, e) && S.default.isMember(e) && er(e, n);
    ei()
  }
}
class ee {
  static get(e) {
    return void 0 === e && (e = null), (null == ee._lastInstance || ee._lastInstance.guildId !== e) && (ee._lastInstance = new ee(e)), ee._lastInstance
  }
  static reset() {
    ee._lastInstance = null
  }
  static resetFrequentlyUsed() {
    null != ee._lastInstance && (ee._lastInstance.frequentlyUsed = null)
  }
  static resetFavorites() {
    null != ee._lastInstance && (ee._lastInstance.favorites = null, ee._lastInstance.favoriteNamesAndIds = null)
  }
  static clear(e) {
    null != ee._lastInstance && ee._lastInstance.guildId === e && (ee._lastInstance = null)
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
    return this.ensureDisambiguated(), null == this.frequentlyUsed && (this.frequentlyUsed = et.frequently.map(e => null != e.id ? this.getById(e.id) : null != e.name ? k.default.getByName(e.name) : void 0).filter(b.isNotNullish)), this.frequentlyUsed
  }
  rebuildFavoriteEmojisWithoutFetchingLatest() {
    if (this.ensureDisambiguated(), null == this.favorites || null == this.favoriteNamesAndIds) {
      var e, t;
      this.favoriteNamesAndIds = new Set, this.favorites = (null !== (t = null === (e = T.default.frecencyWithoutFetchingLatest.favoriteEmojis) || void 0 === e ? void 0 : e.emojis) && void 0 !== t ? t : []).map(e => {
        var t;
        null === (t = this.favoriteNamesAndIds) || void 0 === t || t.add(e);
        let n = this.getById(e);
        return null == n && (n = k.default.getByName(e)), n
      }).filter(b.isNotNullish)
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
      let n = Q.get(e),
        s = w.default.getTopEmojiIdsByGuildId(e);
      if (null == n && null == s) return Y;
      let i = null !== (t = null == n ? void 0 : n.emojiIds) && void 0 !== t ? t : s,
        r = i.map(e => {
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
    if (this.ensureDisambiguated(), null == this.newlyAddedEmoji) return Y;
    let t = this.newlyAddedEmoji[e];
    return null == t ? Y : t
  }
  getEscapedCustomEmoticonNames() {
    return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), this.escapedEmoticonNames
  }
  nameMatchesChain(e) {
    return i(this.getDisambiguatedEmoji()).filter(t => {
      let {
        id: n,
        names: s,
        name: r
      } = t, a = null != s && i.some(s, e), o = null != r && e(r), d = null != r && i.some(g.default.getTermsForEmoji(r), e), u = null != n && i.some(M.default.getCaptionsForEmojiById({
        emojiId: n
      }), e);
      return a || o || d || u
    })
  }
  _buildDisambiguatedCustomEmoji() {
    let e = {},
      t = [];
    this.emoticonRegex = null, this.frequentlyUsed = null, this.disambiguatedEmoji = [], this.unicodeAliases = Object.create(null), this.customEmojis = Object.create(null), this.groupedCustomEmojis = Object.create(null), this.emoticonsByName = Object.create(null), this.emojisByName = Object.create(null), this.emojisById = Object.create(null), this.newlyAddedEmoji = Object.create(null);
    let n = t => {
        var n, s;
        let i = t.name,
          r = null !== (n = e[i]) && void 0 !== n ? n : 0;
        if (e[i] = r + 1, r > 0) {
          let e = "".concat(i, "~").concat(r);
          t = {
            ...t,
            name: e,
            originalName: i,
            allNamesString: ":".concat(e, ":")
          }
        }
        if (this.emojisByName[t.name] = t, "names" in t && (null === (s = t.names) || void 0 === s || s.slice(1).forEach(e => this.unicodeAliases[e] = t.name)), null != t.id) {
          let e, n;
          switch (this.emojisById[t.id] = t, this.customEmojis[t.name] = t, t.type) {
            case V.EmojiTypes.GUILD:
              e = t.guildId, n = !0;
              break;
            case V.EmojiTypes.PACK:
              e = t.packId
          }
          null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(t) : this.groupedCustomEmojis[e] = [t], n && R.default.compare(t.id, H) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(t) : this.newlyAddedEmoji[e] = [t]))
        }
        null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(t)
      },
      s = e => {
        !Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name) && (t.push(P.default.escape(e.name)), this.emoticonsByName[e.name] = e)
      };
    k.default.forEach(n);
    let r = e => {
      let t = W[null == e ? "null" : e];
      null != t && (i.each(t.usableEmojis, n), i.each(t.emoticons, s))
    };
    r(this.guildId);
    for (let e in this.newlyAddedEmoji) null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, t) => R.default.compare(t.id, e.id)).slice(0, 3) : this.newlyAddedEmoji[e] = [];
    A.default.getFlattenedGuildIds().forEach(e => {
      e !== this.guildId && r(e)
    }), p.default.getPacksForUser().map(e => {
      null != e.content.emojis && i.each(e.content.emojis, n)
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
ee._lastInstance = null;
let et = new l.default({
  computeBonus: () => 100,
  computeWeight: e => {
    let t = 0;
    return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
  },
  lookupKey: e => {
    var t;
    return null !== (t = k.default.getByName(e)) && void 0 !== t ? t : Z(e)
  },
  afterCompute: () => {
    ee.resetFrequentlyUsed(), K = F.slice(0), !i.some(W, e => e.usableEmojis.length > 0) && K.splice(F.indexOf(U.EmojiCategories.CUSTOM), 1)
  },
  numFrequentlyItems: 42
});

function en() {
  W = {}, z.clear(), q = {}, ee.reset(), Q.clear(), j = 2
}

function es(e) {
  let t = W[e];
  null != t && delete W[e]
}

function ei() {
  q = null, ee.reset(), 0 !== j && et.compute()
}

function er(e, t) {
  if (es(e), ee.clear(e), null == t) return;
  let n = D.default.getCurrentUser();
  if (null == n) return;
  let s = (0, E.canUseRoleSubscriptionIAP)(e);
  W[e] = new B(e, n.id, t, s)
}

function ea() {
  var e, t, n, s;
  let r = T.default.settings,
    a = null === (t = r.textAndImages) || void 0 === t ? void 0 : null === (e = t.diversitySurrogate) || void 0 === e ? void 0 : e.value;
  null != a && k.default.setDefaultDiversitySurrogate(a), ee.reset();
  let o = T.default.frecencyWithoutFetchingLatest,
    d = null !== (s = null === (n = o.emojiFrecency) || void 0 === n ? void 0 : n.emojis) && void 0 !== s ? s : {};
  et.overwriteHistory(i.mapValues(d, e => ({
    ...e,
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), x.pendingUsages), i.isEmpty(d) && i.isEmpty(x.pendingUsages) && T.default.hasLoaded(G.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (et.track("thumbsup"), et.track("thumbsup"), et.track("eyes"), et.track("eyes"), et.track("laughing"), et.track("laughing"), et.track("watermelon"), et.track("fork_and_knife"), et.track("yum"), et.track("weary"), et.track("tired_face"), et.track("poop"), et.track("100"))
}

function eo(e) {
  for (let s of e) {
    var t, n;
    let e = null !== (n = null !== (t = s.id) && void 0 !== t ? t : s.uniqueName) && void 0 !== n ? n : s.name;
    null != e && (et.track(e), x.pendingUsages.push({
      key: e,
      timestamp: Date.now()
    }))
  }
  let s = e.length > 0;
  return s && 0 !== j && et.compute(), s
}

function ed(e) {
  let {
    guildId: t,
    role: n
  } = e;
  if (!(0, m.isSubscriptionRole)(n)) return !1;
  {
    let e = W[t];
    er(t, null == e ? void 0 : e.emojis), ei()
  }
}

function eu() {
  z = p.default.getPacksById(), ei()
}
class el extends d.default.PersistedStore {
  initialize(e) {
    this.waitFor(f.default, S.default, C.default, I.default, p.default, y.default, v.default, w.default, D.default), null != e && (x = e), this.syncWith([T.default], ea), this.syncWith([p.default], eu)
  }
  getState() {
    return x
  }
  hasPendingUsage() {
    return x.pendingUsages.length > 0
  }
  get categories() {
    return K
  }
  get diversitySurrogate() {
    var e;
    return null !== (e = k.default.getDefaultDiversitySurrogate()) && void 0 !== e ? e : ""
  }
  get emojiFrecencyWithoutFetchingLatest() {
    return et
  }
  getGuildEmoji(e) {
    var t;
    $();
    let n = W[e];
    return null !== (t = null == n ? void 0 : n.emojis) && void 0 !== t ? t : []
  }
  getUsableGuildEmoji(e) {
    var t;
    $();
    let n = W[e];
    return null !== (t = null == n ? void 0 : n.usableEmojis) && void 0 !== t ? t : []
  }
  getGuilds() {
    return W
  }
  getDisambiguatedEmojiContext(e) {
    return $(), ee.get(e)
  }
  getSearchResultsOrder(e, t, n) {
    let s = t.toLowerCase(),
      r = P.default.escape(s);
    if (e.length > 0) {
      let t = RegExp("^".concat(r), "i"),
        n = new RegExp("(^|_|[A-Z])".concat(r, "s?([A-Z]|_|$)")),
        a = n.test.bind(n),
        o = t.test.bind(t),
        d = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
          if (null == e || null == t) return 0;
          let n = e.toLowerCase(),
            i = 1 + (n === s ? 4 : 0) + (a(n) || a(e) ? 2 : 0) + (o(e) ? 1 : 0),
            r = et.getScore(t);
          return null != r && (i *= r / 100), i
        };
      e = i.orderBy(e, [e => null != e.names ? d(e.names[0]) : d(e.name, e.id), e => null != e.names ? e.names[0] : e.name], ["desc", "asc"])
    }
    return n > 0 && (e = e.slice(0, n)), e
  }
  searchWithoutFetchingLatest(e) {
    let t, {
      channel: n,
      query: s,
      count: i = 0,
      intention: r,
      includeExternalGuilds: a = !0,
      canViewAndUsePackEmoji: o,
      matchComparator: d
    } = e;
    $();
    let u = s.toLowerCase().replaceAll(/[ _]/g, ""),
      l = P.default.escape(u);
    if (null == d) {
      let e = RegExp("".concat(l), "i");
      t = t => e.test(t.replaceAll("_", ""))
    } else t = d;
    let f = null != n ? n.getGuildId() : null,
      _ = ee.get(f).nameMatchesChain(t).reduce((e, t) => {
        let s = O.default.getEmojiUnavailableReason({
          emoji: t,
          channel: n,
          intention: r,
          canViewAndUsePackEmoji: o,
          forceIncludeExternalGuilds: a
        });
        return s === L.EmojiDisabledReasons.PREMIUM_LOCKED ? e.locked.push(t) : null == s && e.unlocked.push(t), e
      }, {
        unlocked: [],
        locked: []
      });
    return {
      unlocked: this.getSearchResultsOrder(_.unlocked, s, i),
      locked: this.getSearchResultsOrder(_.locked, s, 0)
    }
  }
  getUsableCustomEmojiById(e) {
    return $(), Z(e)
  }
  getCustomEmojiById(e) {
    return $(),
      function(e) {
        var t, n, s;
        let i = J()[e];
        return null != i ? null !== (s = null === (t = W[i]) || void 0 === t ? void 0 : t.getEmoji(e)) && void 0 !== s ? s : null === (n = z.get(i)) || void 0 === n ? void 0 : n.emojiById[e] : null
      }(e)
  }
  getTopEmoji(e) {
    return null == e ? Y : ($(), ee.get(e).getTopEmojiWithoutFetchingLatest(e))
  }
  getNewlyAddedEmoji(e) {
    return null == e ? Y : ($(), ee.get(e).getNewlyAddedEmojiForGuild(e))
  }
  getTopEmojisMetadata(e) {
    return Q.get(e)
  }
  getEmojiAutosuggestion(e) {
    if (null != X && X.length > 0) {
      let {
        locked: t,
        unlocked: n
      } = this.searchWithoutFetchingLatest({
        channel: e,
        count: 10,
        query: X,
        intention: L.EmojiIntention.CHAT,
        canViewAndUsePackEmoji: !1
      });
      return [...n.slice(0, 5), ...t.slice(0, 5)].slice(0, 5)
    }
    return []
  }
  hasUsableEmojiInAnyGuild() {
    $();
    let e = Object.keys(W);
    return e.some(e => W[e].usableEmojis.length > 0)
  }
  hasFavoriteEmojis(e) {
    let t = ee.get(e);
    return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0
  }
}
el.displayName = "EmojiStore", el.persistKey = "EmojiStoreV2";
var ef = new el(u.default, {
  BACKGROUND_SYNC: function() {
    en()
  },
  CONNECTION_OPEN: function(e) {
    for (let t of (en(), e.guilds)) er(t.id, t.emojis);
    j = e.guilds.every(e => null != e.emojis) ? 1 : 0, ei()
  },
  GUILD_MEMBER_UPDATE: function(e) {
    var t;
    let {
      guildId: n,
      user: s
    } = e;
    if (s.id !== (null === (t = D.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return;
    let i = W[n];
    er(n, null == i ? void 0 : i.usableEmojis), ei()
  },
  GUILD_CREATE: function(e) {
    0 !== j && null == e.guild.emojis && null != e.guild.emojiUpdates && (j = 0), er(e.guild.id, e.guild.emojis), ei()
  },
  GUILD_UPDATE: function(e) {
    er(e.guild.id, e.guild.emojis), ei()
  },
  GUILD_EMOJIS_UPDATE: function(e) {
    let {
      guildId: t,
      emojis: n
    } = e;
    er(t, n), ei()
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    es(t.id), Q.delete(t.id), ei()
  },
  MESSAGE_REACTION_ADD: function(e) {
    if (!e.optimistic) return !1;
    let t = null != e.emoji.id && "0" !== e.emoji.id ? e.emoji : k.default.getByName(k.default.convertSurrogateToName(e.emoji.name, !1));
    if (null == t) return !1;
    eo([t])
  },
  EMOJI_TRACK_USAGE: function(e) {
    let {
      emojiUsed: t
    } = e;
    eo(t)
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: t
      },
      wasSaved: n
    } = e;
    if (g.default.setEmojiLocale(y.default.locale), t !== G.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    x.pendingUsages = []
  },
  GUILD_ROLE_CREATE: ed,
  GUILD_ROLE_UPDATE: ed,
  TOP_EMOJIS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      topEmojisMetadata: n
    } = e;
    Q.set(t, {
      emojiIds: n.map(e => e.emojiId),
      topEmojisTTL: a(a()).add(1, "days").valueOf()
    })
  },
  INVENTORY_FETCH_SUCCESS: function(e) {
    let {} = e;
    eu()
  },
  INVENTORY_COLLECT_PACK_SUCCESS: function(e) {
    let {} = e;
    ei()
  },
  INVENTORY_REMOVE_PACK_SUCCESS: function(e) {
    let {} = e;
    ei()
  },
  EMOJI_AUTOSUGGESTION_UPDATE: function(e) {
    let {
      text: t
    } = e;
    X = t
  },
  LOGOUT: function(e) {
    en()
  }
})
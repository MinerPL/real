            "use strict";
            n.r(s), n.d(s, {
                default: function() {
                    return ed
                }
            }), n("222007"), n("581081"), n("424973"), n("686130"), n("781738"), n("808653");
            var i = n("917351"),
                r = n.n(i),
                o = n("866227"),
                t = n.n(o),
                a = n("102053"),
                f = n("446674"),
                _ = n("913144"),
                d = n("80507"),
                u = n("802493"),
                g = n("595525"),
                m = n("629538"),
                v = n("39616"),
                c = n("828674"),
                h = n("153043"),
                l = n("256941"),
                y = n("505985"),
                V = n("166465"),
                k = n("915639"),
                b = n("374363"),
                w = n("26989"),
                p = n("778689"),
                D = n("305961"),
                P = n("677099"),
                C = n("697218"),
                E = n("315102"),
                M = n("402671"),
                j = n("449008"),
                I = n("655518"),
                S = n("299039"),
                O = n("858619"),
                x = n("867805"),
                U = n("802461"),
                R = n("26430"),
                T = n("958706"),
                N = n("115279"),
                A = n("397336");
            let L = [N.EmojiCategories.TOP_GUILD_EMOJI.toString(), N.EmojiCategories.FAVORITES.toString(), N.EmojiCategories.RECENT.toString(), N.EmojiCategories.CUSTOM.toString()].concat(x.default.getCategories()),
                F = {
                    pendingUsages: []
                };
            class B {
                getEmoji(e) {
                    return this.build(), this._emojiMap[e]
                }
                getUsableEmoji(e) {
                    let s = this.getEmoji(e);
                    return null != s && this.isUsable(s) ? s : null
                }
                isUsable(e) {
                    if (0 === e.roles.length) return !0;
                    let s = w.default.getMember(this.id, this._userId);
                    if (null == s) return !1;
                    let n = s.roles.some(s => e.roles.includes(s));
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
                        e.url = E.default.getEmojiURL({
                            id: e.id,
                            animated: e.animated,
                            size: 48
                        }), e.allNamesString = ":".concat(e.name, ":"), e.guildId = this.id, e.type = O.EmojiTypes.GUILD, this._emojiMap[e.id] = e
                    }), this._usableEmojis = r.sortBy(this._emojis.filter(e => this.isUsable(e)), e => e.name), this._emoticons = this._usableEmojis.filter(e => !e.require_colons))
                }
                constructor(e, s, n, i = !1) {
                    this._dirty = !0, this._emojiMap = {}, this._emoticons = [], this._usableEmojis = [], this._canSeeServerSubIAP = !1, this._totalUsable = 0, this.id = e, this._userId = s, this._emojis = n, this._canSeeServerSubIAP = i
                }
            }
            let G = S.default.fromTimestamp(Date.now() - 5184e6),
                z = [],
                q = 2,
                H = L.slice(0),
                K = {},
                W = new Map,
                J = {},
                Y = new Map;

            function $(e) {
                var s, n, i;
                let r = X()[e];
                return null != r ? null !== (i = null === (s = K[r]) || void 0 === s ? void 0 : s.getUsableEmoji(e)) && void 0 !== i ? i : null === (n = W.get(r)) || void 0 === n ? void 0 : n.emojiById[e] : null
            }

            function X() {
                if (Z(), null == J) {
                    for (let e in J = {}, K) {
                        let s = K[e];
                        for (let n of s.rawEmojis) J[n.id] = e
                    }
                    for (let [s, n] of W) {
                        var e;
                        for (let i of null !== (e = null == n ? void 0 : n.content.emojis) && void 0 !== e ? e : []) J[i.id] = s
                    }
                }
                return J
            }

            function Z() {
                if (0 !== q) return;
                let e = u.default.database();
                if (null == e) return;
                q = 2;
                let s = (0, g.tryLoadOrResetCacheGateway)("EmojiStore.loadSavedEmojis", () => a.default.time("\uD83D\uDCBE", "loadSavedEmojis", () => m.default.getSync(e)));
                if (null != s) {
                    for (let [e, n] of s) !Object.hasOwn(K, e) && p.default.isMember(e) && er(e, n);
                    ei()
                }
            }
            class Q {
                static get(e) {
                    return void 0 === e && (e = null), (null == Q._lastInstance || Q._lastInstance.guildId !== e) && (Q._lastInstance = new Q(e)), Q._lastInstance
                }
                static reset() {
                    Q._lastInstance = null
                }
                static resetFrequentlyUsed() {
                    null != Q._lastInstance && (Q._lastInstance.frequentlyUsed = null)
                }
                static resetFavorites() {
                    null != Q._lastInstance && (Q._lastInstance.favorites = null, Q._lastInstance.favoriteNamesAndIds = null)
                }
                static clear(e) {
                    null != Q._lastInstance && Q._lastInstance.guildId === e && (Q._lastInstance = null)
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
                        let s = this.unicodeAliases[e];
                        if (Object.prototype.hasOwnProperty.call(this.emojisByName, s)) return this.emojisByName[s]
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
                    return this.ensureDisambiguated(), null == this.frequentlyUsed && (this.frequentlyUsed = ee.frequently.map(e => null != e.id ? this.getById(e.id) : null != e.name ? x.default.getByName(e.name) : void 0).filter(j.isNotNullish)), this.frequentlyUsed
                }
                rebuildFavoriteEmojisWithoutFetchingLatest() {
                    if (this.ensureDisambiguated(), null == this.favorites || null == this.favoriteNamesAndIds) {
                        var e, s;
                        this.favoriteNamesAndIds = new Set, this.favorites = (null !== (s = null === (e = b.default.frecencyWithoutFetchingLatest.favoriteEmojis) || void 0 === e ? void 0 : e.emojis) && void 0 !== s ? s : []).map(e => {
                            var s;
                            null === (s = this.favoriteNamesAndIds) || void 0 === s || s.add(e);
                            let n = this.getById(e);
                            return null == n && (n = x.default.getByName(e)), n
                        }).filter(j.isNotNullish)
                    }
                    return [this.favorites, this.favoriteNamesAndIds]
                }
                get favoriteEmojisWithoutFetchingLatest() {
                    return this.rebuildFavoriteEmojisWithoutFetchingLatest()[0]
                }
                getEmojiInPriorityOrderWithoutFetchingLatest() {
                    let e = new Set;
                    return this.favoriteEmojisWithoutFetchingLatest.concat(this.getFrequentlyUsedEmojisWithoutFetchingLatest()).filter(s => !e.has(s) && (e.add(s), !0))
                }
                getTopEmojiWithoutFetchingLatest(e) {
                    if (this.ensureDisambiguated(), null == this.topEmojis) {
                        var s;
                        let n = Y.get(e),
                            i = R.default.getTopEmojiIdsByGuildId(e);
                        if (null == n && null == i) return z;
                        let r = null !== (s = null == n ? void 0 : n.emojiIds) && void 0 !== s ? s : i,
                            o = r.map(e => {
                                var s;
                                return null !== (s = this.getById(e)) && void 0 !== s ? s : x.default.getByName(x.default.convertSurrogateToName(e, !1))
                            }),
                            t = [];
                        o.forEach(e => {
                            null != e && t.push(e)
                        });
                        let a = this.getNewlyAddedEmojiForGuild(e).map(e => e.id);
                        this.topEmojis = t.filter(e => !a.includes(e.id))
                    }
                    return this.topEmojis
                }
                getNewlyAddedEmojiForGuild(e) {
                    if (this.ensureDisambiguated(), null == this.newlyAddedEmoji) return z;
                    let s = this.newlyAddedEmoji[e];
                    return null == s ? z : s
                }
                getEscapedCustomEmoticonNames() {
                    return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), this.escapedEmoticonNames
                }
                nameMatchesChain(e) {
                    return r(this.getDisambiguatedEmoji()).filter(s => {
                        let {
                            id: n,
                            names: i,
                            name: o
                        } = s, t = null != i && r.some(i, e), a = null != o && e(o), f = null != o && r.some(v.default.getTermsForEmoji(o), e), _ = null != n && r.some(U.default.getCaptionsForEmojiById({
                            emojiId: n
                        }), e);
                        return t || a || f || _
                    })
                }
                _buildDisambiguatedCustomEmoji() {
                    let e = {},
                        s = [];
                    this.emoticonRegex = null, this.frequentlyUsed = null, this.disambiguatedEmoji = [], this.unicodeAliases = Object.create(null), this.customEmojis = Object.create(null), this.groupedCustomEmojis = Object.create(null), this.emoticonsByName = Object.create(null), this.emojisByName = Object.create(null), this.emojisById = Object.create(null), this.newlyAddedEmoji = Object.create(null);
                    let n = s => {
                            var n, i;
                            let r = s.name,
                                o = null !== (n = e[r]) && void 0 !== n ? n : 0;
                            if (e[r] = o + 1, o > 0) {
                                let e = "".concat(r, "~").concat(o);
                                s = {
                                    ...s,
                                    name: e,
                                    originalName: r,
                                    allNamesString: ":".concat(e, ":")
                                }
                            }
                            if (this.emojisByName[s.name] = s, "names" in s && (null === (i = s.names) || void 0 === i || i.slice(1).forEach(e => this.unicodeAliases[e] = s.name)), null != s.id) {
                                let e, n;
                                switch (this.emojisById[s.id] = s, this.customEmojis[s.name] = s, s.type) {
                                    case O.EmojiTypes.GUILD:
                                        e = s.guildId, n = !0;
                                        break;
                                    case O.EmojiTypes.PACK:
                                        e = s.packId
                                }
                                null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(s) : this.groupedCustomEmojis[e] = [s], n && S.default.compare(s.id, G) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(s) : this.newlyAddedEmoji[e] = [s]))
                            }
                            null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(s)
                        },
                        i = e => {
                            !Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name) && (s.push(I.default.escape(e.name)), this.emoticonsByName[e.name] = e)
                        };
                    x.default.forEach(n);
                    let o = e => {
                        let s = K[null == e ? "null" : e];
                        null != s && (r.each(s.usableEmojis, n), r.each(s.emoticons, i))
                    };
                    o(this.guildId);
                    for (let e in this.newlyAddedEmoji) null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, s) => S.default.compare(s.id, e.id)).slice(0, 3) : this.newlyAddedEmoji[e] = [];
                    P.default.getFlattenedGuildIds().forEach(e => {
                        e !== this.guildId && o(e)
                    }), V.default.getPacksForUser().map(e => {
                        null != e.content.emojis && r.each(e.content.emojis, n)
                    }), this.escapedEmoticonNames = s.join("|")
                }
                constructor(e) {
                    this.emoticonRegex = null, this.frequentlyUsed = null, this.favorites = null, this.favoriteNamesAndIds = null, this.topEmojis = null, this.escapedEmoticonNames = null, this.disambiguatedEmoji = null, this.newlyAddedEmoji = null, this.isFavoriteEmojiWithoutFetchingLatest = e => {
                        var s;
                        if (null == e) return !1;
                        let n = this.rebuildFavoriteEmojisWithoutFetchingLatest()[1];
                        return null != e.id ? n.has(e.id) : n.has(null !== (s = e.name) && void 0 !== s ? s : "")
                    }, this.guildId = e
                }
            }
            Q._lastInstance = null;
            let ee = new d.default({
                computeBonus: () => 100,
                computeWeight: e => {
                    let s = 0;
                    return e <= 3 ? s = 100 : e <= 15 ? s = 70 : e <= 30 ? s = 50 : e <= 45 ? s = 30 : e <= 80 && (s = 10), s
                },
                lookupKey: e => {
                    var s;
                    return null !== (s = x.default.getByName(e)) && void 0 !== s ? s : $(e)
                },
                afterCompute: () => {
                    Q.resetFrequentlyUsed(), H = L.slice(0), !r.some(K, e => e.usableEmojis.length > 0) && H.splice(L.indexOf(N.EmojiCategories.CUSTOM), 1)
                },
                numFrequentlyItems: 42
            });

            function es() {
                K = {}, W.clear(), J = {}, Q.reset(), Y.clear(), q = 2
            }

            function en(e) {
                let s = K[e];
                null != s && delete K[e]
            }

            function ei() {
                J = null, Q.reset(), 0 !== q && ee.compute()
            }

            function er(e, s) {
                if (en(e), Q.clear(e), null == s) return;
                let n = C.default.getCurrentUser();
                if (null == n) return;
                let i = (0, y.canUseRoleSubscriptionIAP)(e);
                K[e] = new B(e, n.id, s, i)
            }

            function eo() {
                var e, s, n, i;
                let o = b.default.settings,
                    t = null === (s = o.textAndImages) || void 0 === s ? void 0 : null === (e = s.diversitySurrogate) || void 0 === e ? void 0 : e.value;
                null != t && x.default.setDefaultDiversitySurrogate(t), Q.reset();
                let a = b.default.frecencyWithoutFetchingLatest,
                    f = null !== (i = null === (n = a.emojiFrecency) || void 0 === n ? void 0 : n.emojis) && void 0 !== i ? i : {};
                ee.overwriteHistory(r.mapValues(f, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), F.pendingUsages), r.isEmpty(f) && r.isEmpty(F.pendingUsages) && b.default.hasLoaded(A.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (ee.track("thumbsup"), ee.track("thumbsup"), ee.track("eyes"), ee.track("eyes"), ee.track("laughing"), ee.track("laughing"), ee.track("watermelon"), ee.track("fork_and_knife"), ee.track("yum"), ee.track("weary"), ee.track("tired_face"), ee.track("poop"), ee.track("100"))
            }

            function et(e) {
                for (let i of e) {
                    var s, n;
                    let e = null !== (n = null !== (s = i.id) && void 0 !== s ? s : i.uniqueName) && void 0 !== n ? n : i.name;
                    null != e && (ee.track(e), F.pendingUsages.push({
                        key: e,
                        timestamp: Date.now()
                    }))
                }
                let i = e.length > 0;
                return i && 0 !== q && ee.compute(), i
            }

            function ea(e) {
                let {
                    guildId: s,
                    role: n
                } = e;
                if (!(0, c.isSubscriptionRole)(n)) return !1;
                {
                    let e = K[s];
                    er(s, null == e ? void 0 : e.emojis), ei()
                }
            }

            function ef() {
                W = V.default.getPacksById(), ei()
            }
            class e_ extends f.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default, p.default, w.default, D.default, V.default, k.default, l.default, R.default, C.default), null != e && (F = e), this.syncWith([b.default], eo), this.syncWith([V.default], ef)
                }
                getState() {
                    return F
                }
                hasPendingUsage() {
                    return F.pendingUsages.length > 0
                }
                get categories() {
                    return H
                }
                get diversitySurrogate() {
                    var e;
                    return null !== (e = x.default.getDefaultDiversitySurrogate()) && void 0 !== e ? e : ""
                }
                get emojiFrecencyWithoutFetchingLatest() {
                    return ee
                }
                getGuildEmoji(e) {
                    var s;
                    Z();
                    let n = K[e];
                    return null !== (s = null == n ? void 0 : n.emojis) && void 0 !== s ? s : []
                }
                getUsableGuildEmoji(e) {
                    var s;
                    Z();
                    let n = K[e];
                    return null !== (s = null == n ? void 0 : n.usableEmojis) && void 0 !== s ? s : []
                }
                getGuilds() {
                    return K
                }
                getDisambiguatedEmojiContext(e) {
                    return Z(), Q.get(e)
                }
                getSearchResultsOrder(e, s, n) {
                    let i = s.toLowerCase(),
                        o = I.default.escape(i);
                    if (e.length > 0) {
                        let s = RegExp("^".concat(o), "i"),
                            n = new RegExp("(^|_|[A-Z])".concat(o, "s?([A-Z]|_|$)")),
                            t = n.test.bind(n),
                            a = s.test.bind(s),
                            f = function(e) {
                                let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                                if (null == e || null == s) return 0;
                                let n = e.toLowerCase(),
                                    r = 1 + (n === i ? 4 : 0) + (t(n) || t(e) ? 2 : 0) + (a(e) ? 1 : 0),
                                    o = ee.getScore(s);
                                return null != o && (r *= o / 100), r
                            };
                        e = r.orderBy(e, [e => null != e.names ? f(e.names[0]) : f(e.name, e.id), e => null != e.names ? e.names[0] : e.name], ["desc", "asc"])
                    }
                    return n > 0 && (e = e.slice(0, n)), e
                }
                searchWithoutFetchingLatest(e) {
                    let s, {
                        channel: n,
                        query: i,
                        count: r = 0,
                        intention: o,
                        includeExternalGuilds: t = !0,
                        canViewAndUsePackEmoji: a,
                        matchComparator: f
                    } = e;
                    Z();
                    let _ = i.toLowerCase().replaceAll(/[ _]/g, ""),
                        d = I.default.escape(_);
                    if (null == f) {
                        let e = RegExp("".concat(d), "i");
                        s = s => e.test(s.replaceAll("_", ""))
                    } else s = f;
                    let u = null != n ? n.getGuildId() : null,
                        g = Q.get(u).nameMatchesChain(s).reduce((e, s) => {
                            let i = M.default.getEmojiUnavailableReason({
                                emoji: s,
                                channel: n,
                                intention: o,
                                canViewAndUsePackEmoji: a,
                                forceIncludeExternalGuilds: t
                            });
                            return i === T.EmojiDisabledReasons.PREMIUM_LOCKED ? e.locked.push(s) : null == i && e.unlocked.push(s), e
                        }, {
                            unlocked: [],
                            locked: []
                        });
                    return {
                        unlocked: this.getSearchResultsOrder(g.unlocked, i, r),
                        locked: this.getSearchResultsOrder(g.locked, i, 0)
                    }
                }
                getUsableCustomEmojiById(e) {
                    return Z(), $(e)
                }
                getCustomEmojiById(e) {
                    return Z(),
                        function(e) {
                            var s, n, i;
                            let r = X()[e];
                            return null != r ? null !== (i = null === (s = K[r]) || void 0 === s ? void 0 : s.getEmoji(e)) && void 0 !== i ? i : null === (n = W.get(r)) || void 0 === n ? void 0 : n.emojiById[e] : null
                        }(e)
                }
                getTopEmoji(e) {
                    return null == e ? z : (Z(), Q.get(e).getTopEmojiWithoutFetchingLatest(e))
                }
                getNewlyAddedEmoji(e) {
                    return null == e ? z : (Z(), Q.get(e).getNewlyAddedEmojiForGuild(e))
                }
                getTopEmojisMetadata(e) {
                    return Y.get(e)
                }
                hasUsableEmojiInAnyGuild() {
                    Z();
                    let e = Object.keys(K);
                    return e.some(e => K[e].usableEmojis.length > 0)
                }
                hasFavoriteEmojis(e) {
                    let s = Q.get(e);
                    return null != s && s.favoriteEmojisWithoutFetchingLatest.length > 0
                }
            }
            e_.displayName = "EmojiStore", e_.persistKey = "EmojiStoreV2";
            var ed = new e_(_.default, {
                BACKGROUND_SYNC: function() {
                    es()
                },
                CONNECTION_OPEN: function(e) {
                    for (let s of (es(), e.guilds)) er(s.id, s.emojis);
                    q = e.guilds.every(e => null != e.emojis) ? 1 : 0, ei()
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    var s;
                    let {
                        guildId: n,
                        user: i
                    } = e;
                    if (i.id !== (null === (s = C.default.getCurrentUser()) || void 0 === s ? void 0 : s.id)) return;
                    let r = K[n];
                    er(n, null == r ? void 0 : r.usableEmojis), ei()
                },
                GUILD_CREATE: function(e) {
                    0 !== q && null == e.guild.emojis && null != e.guild.emojiUpdates && (q = 0), er(e.guild.id, e.guild.emojis), ei()
                },
                GUILD_UPDATE: function(e) {
                    er(e.guild.id, e.guild.emojis), ei()
                },
                GUILD_EMOJIS_UPDATE: function(e) {
                    let {
                        guildId: s,
                        emojis: n
                    } = e;
                    er(s, n), ei()
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: s
                    } = e;
                    en(s.id), Y.delete(s.id), ei()
                },
                MESSAGE_REACTION_ADD: function(e) {
                    if (!e.optimistic) return !1;
                    let s = null != e.emoji.id && "0" !== e.emoji.id ? e.emoji : x.default.getByName(x.default.convertSurrogateToName(e.emoji.name, !1));
                    if (null == s) return !1;
                    et([s])
                },
                EMOJI_TRACK_USAGE: function(e) {
                    let {
                        emojiUsed: s
                    } = e;
                    et(s)
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: s
                        },
                        wasSaved: n
                    } = e;
                    if (v.default.setEmojiLocale(k.default.locale), s !== A.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    F.pendingUsages = []
                },
                GUILD_ROLE_CREATE: ea,
                GUILD_ROLE_UPDATE: ea,
                TOP_EMOJIS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: s,
                        topEmojisMetadata: n
                    } = e;
                    Y.set(s, {
                        emojiIds: n.map(e => e.emojiId),
                        topEmojisTTL: t(t()).add(1, "days").valueOf()
                    })
                },
                INVENTORY_FETCH_SUCCESS: function(e) {
                    let {} = e;
                    ef()
                },
                INVENTORY_COLLECT_PACK_SUCCESS: function(e) {
                    let {} = e;
                    ei()
                },
                INVENTORY_REMOVE_PACK_SUCCESS: function(e) {
                    let {} = e;
                    ei()
                },
                LOGOUT: function(e) {
                    es()
                }
            })
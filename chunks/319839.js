            "use strict";
            n.r(t), n.d(t, {
                MAX_NEW_CHANNELS_TO_SHOW: function() {
                    return X
                },
                SECTION_INDEX_COMMUNITY: function() {
                    return J
                },
                SECTION_INDEX_FAVORITES: function() {
                    return K
                },
                SECTION_INDEX_UNCATEGORIZED_CHANNELS: function() {
                    return q
                },
                SECTION_INDEX_FIRST_NAMED_CATEGORY: function() {
                    return Z
                },
                ChannelListFavoritesCategory: function() {
                    return ei
                },
                computeSubtitle: function() {
                    return eg
                },
                computeThreadIds: function() {
                    return ef
                },
                default: function() {
                    return s
                }
            }), n("222007"), n("70102"), n("424973"), n("881410"), n("808653"), n("843762");
            var i, s, l, a = n("627445"),
                r = n.n(a),
                d = n("917351"),
                h = n.n(d),
                o = n("191225"),
                u = n("299285"),
                c = n("848415"),
                C = n("207273"),
                g = n("203288"),
                f = n("650033"),
                p = n("290886"),
                I = n("398604"),
                E = n("38654"),
                S = n("21121"),
                v = n("325796"),
                y = n("364281"),
                _ = n("797694"),
                m = n("512395"),
                w = n("15684"),
                N = n("401690"),
                T = n("755624"),
                L = n("233069"),
                R = n("870691"),
                A = n("42203"),
                O = n("816092"),
                b = n("305961"),
                D = n("957255"),
                G = n("660478"),
                U = n("18494"),
                M = n("282109"),
                V = n("800762"),
                P = n("316133"),
                F = n("449008"),
                H = n("299039"),
                B = n("89073"),
                x = n("323137"),
                Y = n("796618"),
                k = n("49111"),
                W = n("724210"),
                j = n("843455");
            let z = "placeholder-channel-id",
                X = 2;
            (l = i || (i = {}))[l.CannotShow = 1] = "CannotShow", l[l.DoNotShow = 2] = "DoNotShow", l[l.WouldShowIfUncollapsed = 3] = "WouldShowIfUncollapsed", l[l.Show = 4] = "Show";
            let J = 0,
                K = 1,
                q = 3,
                Z = 4,
                Q = new Set([String(Y.ChannelListCommunityRow.GUILD_DIRECTORY)]);
            s = class {
                getGuild(e, t) {
                    var n;
                    return (!(e in this.guilds) || !h.isEqual(null === (n = this.guilds[e]) || void 0 === n ? void 0 : n.getCommunitySection().getRows().filter(e => !Q.has(e)), t)) && (this.guilds[e] = new $(e, t)), this.guilds[e]
                }
                getGuildWithoutCommunityRows(e) {
                    return !(e in this.guilds) && (this.guilds[e] = new $(e, [])), this.guilds[e]
                }
                clear() {
                    this.guilds = {}
                }
                clearGuildId(e) {
                    return null != e && e in this.guilds && (delete this.guilds[e], !0)
                }
                updateRecentsCategory(e) {
                    var t, n;
                    if (null == e || !(e in this.guilds)) return !1;
                    return null !== (n = null === (t = this.guilds[e]) || void 0 === t ? void 0 : t.updateRecentsCategory()) && void 0 !== n && n
                }
                nonPositionalChannelIdUpdate(e) {
                    let t = A.default.getBasicChannel(e);
                    return null != t && null != t.guild_id && null != this.guilds[t.guild_id] && (t instanceof L.ChannelRecordBase || null != (t = A.default.getChannel(e))) && this.nonPositionalChannelUpdate(t)
                }
                nonPositionalChannelUpdate(e) {
                    if (null == e.guild_id) return !1;
                    let t = this.guilds[e.guild_id];
                    if (null == t) return !1;
                    let n = !1;
                    return e.isThread() && (n = this.nonPositionalChannelIdUpdate(e.parent_id)), t.nonPositionalChannelUpdate(e) || n
                }
                updateSubtitles(e, t) {
                    let n = null == e ? Object.values(this.guilds) : e in this.guilds ? [this.guilds[e]] : [];
                    n.forEach(e => e.updateSubtitles(t))
                }
                constructor() {
                    this.guilds = {}
                }
            };
            class $ {
                get initializationData() {
                    return {
                        selectedChannel: A.default.getChannel(U.default.getChannelId()),
                        selectedVoiceChannelId: U.default.getVoiceChannelId(),
                        activeJoinedRelevantThreads: N.default.getActiveJoinedRelevantThreadsForGuild(this.id),
                        activeJoinedUnreadThreads: N.default.getActiveJoinedUnreadThreadsForGuild(this.id)
                    }
                }
                invalidate() {
                    this.sections = null, this.rows = null, this.sortedNamedCategories = null, this.firstVoiceChannel = void 0, this.version++
                }
                getSortedNamedCategories() {
                    return null == this.sortedNamedCategories && this.getRows(), this.sortedNamedCategories
                }
                getSortedCategories() {
                    return [this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.getSortedNamedCategories(), this.voiceChannelsCategory]
                }
                getSections() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    return (null == this.sections && (this.sections = this.getRows().map(e => e.length)), e) ? [...this.sections] : this.sections
                }
                getRows() {
                    if (null == this.rows) {
                        this.sortedNamedCategories = h.sortBy(Object.values(this.categories), e => e.record.position), this.rows = [this.communitySection, this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.sortedNamedCategories, this.voiceChannelsCategory].map(e => e.getRows());
                        let e = 0;
                        for (let t of [this.noParentCategory, ...this.sortedNamedCategories])
                            for (let n of (t.position = ++e, t.getShownChannelIds())) t.channels[n].position = ++e
                    }
                    return this.rows
                }
                getCategoryFromSection(e) {
                    switch (e) {
                        case J:
                            throw Error("Invalid section. Use getCommunitySection instead");
                        case K:
                            return this.favoritesCategory;
                        case q:
                            return this.noParentCategory;
                        case this.recentsSectionNumber:
                            return this.recentsCategory;
                        case this.voiceChannelsSectionNumber:
                            return this.voiceChannelsCategory;
                        default:
                            return this.getSortedNamedCategories()[e - Z]
                    }
                }
                getNamedCategoryFromSection(e) {
                    return r((e -= Z) >= 0 && e < this.getSortedNamedCategories().length, "invalid section index ".concat(e)), this.getSortedNamedCategories()[e]
                }
                getCommunitySection() {
                    return this.communitySection
                }
                getChannelFromSectionRow(e, t) {
                    let n = this.getCategoryFromSection(e);
                    if (null == n) return null;
                    let i = n.channels[n.getShownChannelIds()[t]];
                    return null == i ? null : {
                        category: n,
                        channel: i
                    }
                }
                isPlaceholderRow(e, t) {
                    return r(e > J, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === z
                }
                getFirstVoiceChannel(e) {
                    if (void 0 === this.firstVoiceChannel) {
                        if (this.firstVoiceChannel = this.favoritesCategory.getFirstVoiceChannel(e), null != this.firstVoiceChannel) return this.firstVoiceChannel;
                        if (this.firstVoiceChannel = this.noParentCategory.getFirstVoiceChannel(e), null != this.firstVoiceChannel) return this.firstVoiceChannel;
                        for (let t of this.getSortedNamedCategories())
                            if (null != t.getFirstVoiceChannel(e)) {
                                this.firstVoiceChannel = t.getFirstVoiceChannel(e);
                                break
                            }
                    }
                    return this.firstVoiceChannel
                }
                getSectionRowsFromChannel(e) {
                    if (function(e) {
                            return null != e && ev.has(e)
                        }(e)) {
                        let t = this.getCommunitySection().getRows().indexOf(e);
                        return [{
                            row: t,
                            section: J
                        }]
                    }
                    let t = [],
                        n = A.default.getChannel(e);
                    if (null == n || null == e) return t;
                    let i = n.isThread();
                    if (i && (n = A.default.getChannel(n.parent_id)), null == n) return t;
                    let s = this.favoritesCategory.getShownChannelIds().indexOf(n.id);
                    s >= 0 && t.push({
                        section: K,
                        row: s
                    });
                    let l = this.recentsCategory.getShownChannelIds().indexOf(n.id);
                    if (l >= 0 && t.push({
                            section: this.recentsSectionNumber,
                            row: l
                        }), n.type === k.ChannelTypes.GUILD_CATEGORY) {
                        let e = h.findIndex(this.getSortedNamedCategories(), e => e.id === (null == n ? void 0 : n.id));
                        return [{
                            section: e + Z
                        }]
                    }
                    let a = this.getCategory(n),
                        r = a instanceof et ? q : this.getSortedNamedCategories().indexOf(a) + Z,
                        d = a.getShownChannelIds().indexOf(n.id);
                    if (r >= 0 && d >= 0) {
                        let s = i ? a.channels[n.id].threadIds.indexOf(e) : 0;
                        t.push({
                            section: r,
                            row: d,
                            threadOffset: s
                        })
                    }
                    let o = this.voiceChannelsCategory.getShownChannelIds().indexOf(n.id);
                    return o >= 0 && t.push({
                        section: this.voiceChannelsSectionNumber,
                        row: o
                    }), t
                }
                getCategory(e) {
                    return null != e.parent_id && e.parent_id in this.categories ? this.categories[e.parent_id] : this.noParentCategory
                }
                updateRecentsCategory() {
                    let e = this.recentsCategory.updateAllChannels(this.initializationData);
                    return e && this.invalidate(), e
                }
                nonPositionalChannelUpdate(e) {
                    let t = this.initializationData,
                        n = this.getCategory(e),
                        i = n.updateChannel(e, t);
                    return this.favoritesCategory.updateChannel(e, t) && (i = !0), this.recentsCategory.updateChannel(e, t) && (i = !0), this.voiceChannelsCategory.updateChannel(e, t) && (i = !0), i && this.invalidate(), i
                }
                getSlicedChannels(e, t) {
                    r(e.length > 0, "must have at least one channel in the slice");
                    let n = e[0],
                        i = e[e.length - 1],
                        s = !0,
                        l = !1,
                        a = [],
                        d = [];
                    for (let e of this.getSortedCategories()) {
                        let r = (null == t ? void 0 : t.ignoreRecents) && e === this.recentsCategory;
                        for (let t of e.getShownChannelIds()) {
                            let h = e.channels[t];
                            s && (h.id === n.id ? s = !1 : !r && a.push(h)), l && !r && d.push(h), !s && !l && h.id === i.id && (l = !0)
                        }
                    }
                    return [a, e, d]
                }
                getChannels(e) {
                    let t = [];
                    if (null == this.allChannelsById)
                        for (let e of (this.allChannelsById = {}, this.getSortedCategories()))
                            for (let t in e.channels) this.allChannelsById[t] = e.channels[t];
                    for (let n of e) null != this.allChannelsById[n] && t.push(this.allChannelsById[n]);
                    return t
                }
                updateSubtitles(e) {
                    let t = [];
                    if (null != e) {
                        let n = A.default.getChannel(e);
                        if (null != n) {
                            if (n.id in this.favoritesCategory.channels) t = [this.favoritesCategory.channels[n.id]];
                            else if (n.id in this.recentsCategory.channels) t = [this.recentsCategory.channels[n.id]];
                            else {
                                let i = this.getCategory(n);
                                null != i && null != i.channels[e] && (t = [i.channels[e]])
                            }
                        }
                    } else t = h(this.getSortedCategories()).map(e => Object.values(e.channels)).flatten().value();
                    let n = !1;
                    return t.forEach(e => {
                        e.updateSubtitle() && (n = !0)
                    }), n && this.version++, n
                }
                forEachShownChannel(e, t) {
                    for (let n of this.getSortedCategories())
                        if (null == t || !t.ignoreRecents || n !== this.recentsCategory)
                            for (let t of n.getShownChannelIds()) {
                                let i = n.channels[t];
                                for (let t of (e(i.record), i.threadIds)) {
                                    let n = A.default.getChannel(t);
                                    null != n && e(n)
                                }
                            }
                }
                forEachChannel(e, t) {
                    for (let n of this.getSortedCategories())
                        if (null == t || !t.ignoreRecents || n !== this.recentsCategory)
                            for (let t of n.getChannelRecords()) e(t)
                }
                constructor(e, t) {
                    var n, i;
                    this.id = e, this.sortedNamedCategories = null, this.sections = null, this.rows = null, this.firstVoiceChannel = void 0, this.allChannelsById = null, this.version = 0, this.hideMutedChannels = M.default.isGuildCollapsed(this.id), this.mutedChannelIds = M.default.getMutedChannels(this.id), this.optedInChannels = null !== (n = M.default.getOptedInChannelsWithPendingUpdates(this.id)) && void 0 !== n ? n : M.default.getOptedInChannels(this.id), this.optInEnabled = (0, m.isOptInEnabledForGuild)(this.id), this.hideResourceChannels = (0, p.canSeeOnboardingHome)(this.id), this.favoriteChannelIds = new Set(null !== (i = M.default.getGuildFavorites(this.id)) && void 0 !== i ? i : []), this.suggestedFavoriteChannelId = y.default.getSuggestedChannelId(this.id), this.collapsedCategoryIds = R.default.getCollapsedCategories();
                    let s = A.default.getMutableGuildChannelsForGuild(this.id),
                        l = b.default.getGuild(this.id),
                        a = {},
                        d = [],
                        o = {};
                    for (let e in s) {
                        let t = s[e];
                        t.type === k.ChannelTypes.GUILD_CATEGORY && (a[t.id] = t, o[t.id] = [])
                    }
                    let u = [],
                        c = [],
                        C = [],
                        g = this.initializationData;
                    for (let e in s) {
                        let t = s[e];
                        if (t.type !== k.ChannelTypes.GUILD_CATEGORY) {
                            if (t.type === k.ChannelTypes.GUILD_DIRECTORY) {
                                null != l && !l.hasFeature(k.GuildFeatures.HUB) && C.push(t);
                                continue
                            }
                            eS(this, t, g) ? u.push(t) : (t.type === k.ChannelTypes.GUILD_VOICE || t.type === k.ChannelTypes.GUILD_STAGE_VOICE) && (null != t.parent_id && null != a[t.parent_id] && c.push(a[t.parent_id]), c.push(t)), null != t.parent_id && t.parent_id in o ? o[t.parent_id].push(t) : d.push(t)
                        }
                    }
                    for (let e in this.categories = {}, o) this.categories[e] = new en(this, a[e], o[e], g);
                    this.recentsSectionNumber = 2, this.favoritesSectionNumber = K, this.noParentCategory = new et(this, d, g), this.favoritesCategory = new ei(this, g), this.recentsCategory = (0, v.isRecentlyActiveChannelsEnabled)() ? new es(this, s, g) : new el(this, u, g), this.voiceChannelsCategory = new ea(this, c, a, g), this.communitySection = new er(t, C.length > 0), r(!("null" in this.categories), "somehow a null got into categories"), this.voiceChannelsSectionNumber = Z + h.size(this.categories)
                }
            }
            class ee {
                updateChannel(e, t) {
                    return !!(e.id in this.channels && this.channels[e.id].updateChannel(e, t)) && (this.invalidate(), !0)
                }
                invalidate() {
                    this.shownChannelIds = null
                }
                getRows() {
                    let e = this.getShownChannelIds();
                    return 0 === e.length && this.shouldShowEmptyCategory() ? [z] : e
                }
                shouldShowEmptyCategory() {
                    return h.some(this.channels, e => e.renderLevel >= 3)
                }
                getShownChannelIds() {
                    return null == this.shownChannelIds && (this.shownChannelIds = h(this.channels).values().filter(e => 4 === e.renderLevel).sortBy(e => {
                        let {
                            record: t
                        } = e;
                        return t.isGuildVocal() ? t.position + 1e4 : t.position
                    }).map(e => e.id).value()), this.shownChannelIds
                }
                getShownChannelAndThreadIds() {
                    let e = h(this.channels).values().flatMap(e => e.threadIds).value();
                    return this.getShownChannelIds().concat(e)
                }
                isEmpty() {
                    return 0 === this.getShownChannelIds().length
                }
                getChannelRecords() {
                    return h(this.channels).values().filter(e => e.renderLevel > 1).map(e => e.record).value()
                }
                getFirstVoiceChannel(e) {
                    for (let t of this.getShownChannelIds()) {
                        if (e && this.channels[t].record.isGuildStageVoice()) return this.channels[t];
                        if (!e && this.channels[t].record.isGuildVocal()) return this.channels[t]
                    }
                    return null
                }
                constructor(e) {
                    this.guild = e, this.isMuted = !1, this.isCollapsed = !1, this.position = -1, this.channels = {}, this.shownChannelIds = null
                }
            }
            class et extends ee {
                constructor(e, t, n) {
                    super(e), this.channels = h(t).map(e => new eh(this, e, n)).keyBy(e => e.id).value()
                }
            }
            class en extends ee {
                shouldShowEmptyCategory() {
                    return !!(super.shouldShowEmptyCategory() || D.default.can(j.Permissions.MANAGE_CHANNELS, this.record) && D.default.can(j.Permissions.VIEW_CHANNEL, this.record) && h.isEmpty(this.channels) && (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id))) || !1
                }
                constructor(e, t, n, i) {
                    for (let s of (super(e), this.record = t, this.id = t.id, this.isCollapsed = !0 === e.collapsedCategoryIds[t.id], this.isMuted = e.mutedChannelIds.has(t.id), this.channels = {}, n)) this.channels[s.id] = new eh(this, s, i)
                }
            }
            class ei extends ee {
                updateChannel(e, t) {
                    let n = e.id in this.channels && M.default.isFavorite(e.guild_id, e.id),
                        i = y.default.getSuggestedChannelId(e.guild_id),
                        s = e.id === i && !n;
                    if (s && (t = {
                            ...t,
                            activeJoinedRelevantThreads: {},
                            activeJoinedUnreadThreads: {}
                        }), e.id in this.channels && this.channels[e.id].updateChannel(e, t)) return this.invalidate(), !0;
                    let l = e.id in this.channels && e.id !== i && !n;
                    return !!l && (delete this.channels[e.id], this.invalidate(), !0)
                }
                getFirstVoiceChannel(e) {
                    return null
                }
                constructor(e, t) {
                    var n;
                    if (super(e), !e.optInEnabled && ! function() {
                            return !1
                        }()) return;
                    this.channels = h(null !== (n = M.default.getGuildFavorites(e.id)) && void 0 !== n ? n : []).map(e => A.default.getChannel(e)).filter(F.isNotNullish).map(e => new eo(this, e, t)).keyBy(e => e.id).value();
                    let i = y.default.getSuggestedChannelId(e.id),
                        s = A.default.getChannel(i);
                    null != s && null != i && (this.channels[i] = new eo(this, s, {
                        ...t,
                        activeJoinedRelevantThreads: {},
                        activeJoinedUnreadThreads: {}
                    }))
                }
            }
            class es extends ee {
                shouldShowEmptyCategory() {
                    return this.enabled && this.isCollapsed && super.shouldShowEmptyCategory()
                }
                updateAllChannels(e) {
                    return Object.values(this.channels).reduce((t, n) => this.updateChannel(n.record, e) || t, !1)
                }
                updateChannel(e, t) {
                    if (!this.enabled) return !1;
                    if ((0, L.isThread)(e.type)) {
                        let t = this.channels[e.parent_id];
                        return null != t && this.updateShownChannelIds(t)
                    }
                    if (!(0, L.isGuildReadableType)(e.type)) return !1;
                    let n = super.updateChannel(e, t),
                        i = this.channels[e.id];
                    return null == i ? (i = new ec(this, e, t), this.channels[e.id] = i, this.invalidate(), !0) : this.updateShownChannelIds(i) || n
                }
                getFirstVoiceChannel(e) {
                    return null
                }
                getShownChannelIds() {
                    if (null == this.shownChannelIds) {
                        let e = this.isCollapsed ? 4 : 3;
                        this.shownChannelIds = this.enabled ? h(this.channels).filter(t => t.renderLevel >= e).map(e => [e.id, e.lastMessageTimestamp, e.renderLevel]).filter(e => {
                            let [, t, n] = e;
                            return 4 === n || t > 0 && Date.now() - t < es.MAX_TIMESTAMP_DELTA
                        }).sortBy(e => {
                            let [, t, n] = e;
                            return -(t - (4 === n ? 0 : H.DISCORD_EPOCH))
                        }).take(es.MAX_RECENT_CHANNELS).sortBy(e => {
                            let [, t] = e;
                            return -t
                        }).map(e => {
                            let [t] = e;
                            return t
                        }).value() : []
                    }
                    return this.shownChannelIds
                }
                updateShownChannelIds(e) {
                    var t;
                    if (this.isThrottled) return !1;
                    let n = this.isCollapsed ? 4 : 3;
                    if (null == this.shownChannelIds || e.renderLevel < n) return !1;
                    if (e.lastMessageTimestamp > (null === (t = this.channels[this.shownChannelIds[0]]) || void 0 === t ? void 0 : t.lastMessageTimestamp)) {
                        let t = this.shownChannelIds.indexOf(e.id);
                        return t > -1 && this.shownChannelIds.splice(t, 1), this.shownChannelIds.splice(0, 0, e.id), this.shownChannelIds.length > es.MAX_RECENT_CHANNELS && (this.shownChannelIds = this.shownChannelIds.slice(0, es.MAX_RECENT_CHANNELS)), f.default.get("recent_channels_throttle") && (this.isThrottled = !0, setTimeout(() => {
                            this.isThrottled = !1
                        }, this.RECENTS_THROTTLE)), !0
                    }
                    return !1
                }
                constructor(e, t, n) {
                    if (super(e), this.enabled = !1, this.RECENTS_THROTTLE = 5e3, this.isThrottled = !1, this.isCollapsed = _.default.isCollapsed(e.id), this.enabled = function() {
                            return !1
                        }() && Object.keys(t).length >= es.MIN_READABLE_CHANNELS, this.enabled)
                        for (let e of Object.values(t))(0, L.isGuildReadableType)(e.type) && !(0, L.isThread)(e.type) && (this.channels[e.id] = new ec(this, e, n))
                }
            }
            es.MIN_READABLE_CHANNELS = 7, es.MAX_RECENT_CHANNELS = 10, es.MAX_TIMESTAMP_DELTA = 6048e5;
            class el extends ee {
                updateAllChannels(e) {
                    let t = !1;
                    return Object.keys(this.channels).forEach(n => {
                        this.updateChannel(this.channels[n].record, e) && (t = !0)
                    }), t
                }
                updateChannel(e, t) {
                    let n = super.updateChannel(e, t);
                    if (this.guild.optInEnabled) {
                        let n = this.channels[e.id],
                            i = eS(this.guild, e, t);
                        if (i && null == n) return this.channels[e.id] = new eu(this, e, t), this.invalidate(), !0;
                        if (!i && null != n) return delete this.channels[e.id], this.invalidate(), !0
                    }
                    return n
                }
                getFirstVoiceChannel(e) {
                    return null
                }
                getShownChannelIds() {
                    if (null == this.shownChannelIds) {
                        let e = h(this.channels).values().filter(e => 4 === e.renderLevel || 3 === e.renderLevel).filter(e => !e.record.isGuildVocal()),
                            t = e.sortBy(e => {
                                let {
                                    record: t
                                } = e;
                                return t.position
                            }).take(5).value(),
                            n = e.filter(e => 4 === e.renderLevel).value(),
                            i = new Set([...n, ...t]);
                        this.shownChannelIds = h([...i]).sortBy(e => {
                            let {
                                record: t
                            } = e;
                            return t.position
                        }).map(e => e.id).value()
                    }
                    return this.shownChannelIds
                }
                constructor(e, t, n) {
                    if (super(e), !e.optInEnabled || E.default.isFullServerPreview(e.id)) return;
                    this.isCollapsed = !1, this.isMuted = !1, this.channels = h(t).map(e => new eu(this, e, n)).keyBy(e => e.id).value()
                }
            }
            class ea extends ee {
                invalidate() {
                    super.invalidate(), this.hiddenChannelIds = null
                }
                getHiddenChannelIds() {
                    if (!this.guild.optInEnabled) return [];
                    if (null == this.hiddenChannelIds) {
                        let e = h(this.channels).filter(e => 3 === e.renderLevel).value();
                        if (e.every(e => e.record.isCategory())) return this.hiddenChannelIds = [], this.hiddenChannelIds;
                        this.hiddenChannelIds = e.map(e => e.id)
                    }
                    return this.hiddenChannelIds
                }
                getRows() {
                    if (!this.guild.optInEnabled) return [];
                    let e = this.getShownChannelIds();
                    return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [z] : e
                }
                getShownChannelIds() {
                    if (!this.guild.optInEnabled) return [];
                    if (null == this.shownChannelIds) {
                        let t = h(this.channels).filter(e => 4 === e.renderLevel).orderBy([e => (function(e, t) {
                            if (e.record.type === k.ChannelTypes.GUILD_CATEGORY) return e.record.position;
                            if (null != e.record.parent_id) {
                                var n, i;
                                return null !== (i = null === (n = t[e.record.parent_id]) || void 0 === n ? void 0 : n.position) && void 0 !== i ? i : -1
                            }
                            return -1
                        })(e, this.categoriesById), e => e.record.type === k.ChannelTypes.GUILD_CATEGORY ? -1 : e.record.position], ["asc", "asc"]).value();
                        this.shownChannelIds = [];
                        for (let n = 0; n < t.length; n++) {
                            var e;
                            let i = t[n];
                            if (!(n < t.length - 1) || i.record.type !== k.ChannelTypes.GUILD_CATEGORY || (null === (e = t[n + 1]) || void 0 === e ? void 0 : e.record.type) !== k.ChannelTypes.GUILD_CATEGORY)(n !== t.length - 1 || i.record.type !== k.ChannelTypes.GUILD_CATEGORY) && this.shownChannelIds.push(i.id)
                        }
                    }
                    return this.shownChannelIds
                }
                getFirstVoiceChannel(e) {
                    return null
                }
                constructor(e, t, n, i) {
                    if (super(e), this.categoriesById = n, this.hiddenChannelIds = null, !e.optInEnabled) return;
                    this.isCollapsed = x.default.isVoiceCategoryCollapsed(e.id), this.isMuted = !1, this.categoriesById = n, this.channels = h(t).map(e => new eC(this, e, i)).keyBy(e => e.id).value()
                }
            }
            class er {
                isEmpty() {
                    return 0 === this.communityRows.length
                }
                getRows() {
                    return this.communityRows
                }
                getRow(e) {
                    return this.communityRows[e]
                }
                constructor(e, t) {
                    this.communityRows = e.map(String), t && this.communityRows.push(String(Y.ChannelListCommunityRow.GUILD_DIRECTORY))
                }
            }
            class ed {
                get isMuted() {
                    return this.category.guild.mutedChannelIds.has(this.id)
                }
                get isCollapsed() {
                    return O.default.isCollapsed(this.id)
                }
                get isFirstVoiceChannel() {
                    return this.category.getFirstVoiceChannel() === this
                }
                get isAssistantCallout() {
                    return c.default.isCallout(this.id)
                }
                get lastMessageTimestamp() {
                    return Math.max(G.default.lastMessageTimestamp(this.id), ...this.threadIds.map(G.default.lastMessageTimestamp))
                }
                updateChannel(e, t) {
                    let n = !1;
                    null != e && e !== this.record && (this.record = e, n = !0);
                    let i = this.computeState(t);
                    return (i.renderLevel !== this.renderLevel || !h.isEqual(i.threadIds, this.threadIds)) && (this.renderLevel = i.renderLevel, this.threadIds = i.threadIds, this.threadCount = h.size(i.threadIds), n = !0), 4 === this.renderLevel && this.updateSubtitle() && (n = !0), n
                }
                updateSubtitle() {
                    let e = this.computeSubtitle();
                    return !h.isEqual(this.subtitle, e) && (this.subtitle = e, !0)
                }
                computeSubtitle() {
                    return eg(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)
                }
                constructor(e, t, n) {
                    this.category = e, this.record = t, this.position = -1, this.threadIds = [], this.threadCount = 0, this.subtitle = null, this.renderLevel = 1, this.id = t.id;
                    let {
                        renderLevel: i,
                        threadIds: s
                    } = this.computeState(n);
                    this.renderLevel = i, this.threadCount = h.size(s), this.threadIds = s, 4 === i && (this.subtitle = this.computeSubtitle())
                }
            }
            class eh extends ed {
                computeState(e) {
                    var t;
                    let {
                        selectedChannel: n,
                        selectedVoiceChannelId: i,
                        activeJoinedRelevantThreads: s,
                        activeJoinedUnreadThreads: l
                    } = e, a = [];
                    if (!D.default.can(j.Permissions.VIEW_CHANNEL, this.record)) {
                        if (this.id === i) return {
                            renderLevel: 4,
                            threadIds: a
                        };
                        if (!g.default.isChannelGatedAndVisible(this.record.guild_id, this.record.id)) return {
                            renderLevel: 1,
                            threadIds: a
                        }
                    }
                    let r = this.record.parent_id,
                        d = this.category.guild;
                    if (eI(d, this.record)) return {
                        renderLevel: 1,
                        threadIds: a
                    };
                    let o = (null == n ? void 0 : n.id) === this.id || i === this.id,
                        u = null != n && n.isThread() && n.parent_id === this.id,
                        c = null !== (t = o || u || !this.category.isCollapsed && !this.isMuted ? s[this.id] : l[this.id]) && void 0 !== t ? t : {};
                    return (a = ef(this.record, c, n, i, d.hideMutedChannels), d.optInEnabled && d.hideResourceChannels && this.record.hasFlag(W.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) ? {
                        renderLevel: o ? 4 : 1,
                        threadIds: a
                    } : !d.optInEnabled || d.optedInChannels.has(this.id) || null != r && d.optedInChannels.has(r) ? o || u || !h.isEmpty(a) || G.default.getMentionCount(this.id) > 0 ? {
                        renderLevel: 4,
                        threadIds: a
                    } : d.hideMutedChannels && d.mutedChannelIds.has(this.id) ? {
                        renderLevel: 2,
                        threadIds: a
                    } : this.category.isCollapsed && (d.mutedChannelIds.has(this.id) || null != r && d.mutedChannelIds.has(r) || this.record.isGuildVocal() || this.record.type === k.ChannelTypes.GUILD_STORE || (0, L.isGuildReadableType)(this.record.type) && !G.default.hasUnread(this.record.id)) ? {
                        renderLevel: 3,
                        threadIds: a
                    } : {
                        renderLevel: 4,
                        threadIds: a
                    } : {
                        renderLevel: 2,
                        threadIds: a
                    }
                }
            }
            class eo extends ed {
                computeState(e) {
                    var t;
                    let {
                        selectedChannel: n,
                        selectedVoiceChannelId: i,
                        activeJoinedRelevantThreads: s
                    } = e;
                    return D.default.can(j.Permissions.VIEW_CHANNEL, this.record) ? {
                        renderLevel: 4,
                        threadIds: ef(this.record, null !== (t = s[this.id]) && void 0 !== t ? t : {}, n, i, !1)
                    } : {
                        renderLevel: 1,
                        threadIds: []
                    }
                }
            }
            class eu extends ed {
                computeState(e) {
                    var t;
                    let {
                        selectedChannel: n,
                        selectedVoiceChannelId: i,
                        activeJoinedRelevantThreads: s
                    } = e;
                    return D.default.can(j.Permissions.VIEW_CHANNEL, this.record) ? {
                        renderLevel: eE(this, e) ? 4 : 3,
                        threadIds: ef(this.record, null !== (t = s[this.id]) && void 0 !== t ? t : {}, n, i, !1)
                    } : {
                        renderLevel: 1,
                        threadIds: []
                    }
                }
            }
            class ec extends eh {
                computeState(e) {
                    let {
                        renderLevel: t,
                        threadIds: n
                    } = super.computeState(e);
                    if (t > 1) {
                        let i = this.record.parent_id,
                            s = this.category.guild;
                        s.mutedChannelIds.has(this.id) || null != i && s.mutedChannelIds.has(i) ? t = 2 : 4 === t ? t = 3 : 2 === t && eS(this.category.guild, this.record, e) && (t = 3), 3 === t && eE(this, e) && (t = 4), n = h.sortBy(n, e => -G.default.lastMessageTimestamp(e))
                    }
                    return {
                        renderLevel: t,
                        threadIds: n
                    }
                }
            }
            class eC extends eh {
                getRenderLevel(e) {
                    let t = this.category.guild;
                    return !D.default.can(j.Permissions.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || eI(t, this.record) ? 1 : this.category.isCollapsed ? h.some(V.default.getVoiceStatesForChannel(this.record.id)) ? 4 : 3 : 4
                }
                computeState(e) {
                    let t = super.computeState(e),
                        n = this.getRenderLevel(t.renderLevel);
                    return 4 === n && (this.subtitle = eg(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)), {
                        threadIds: [],
                        renderLevel: n
                    }
                }
            }

            function eg(e, t, n) {
                if (e.type === k.ChannelTypes.GUILD_VOICE) {
                    let i = I.default.getActiveEventByChannel(e.id);
                    if (null != i) return {
                        type: "event",
                        name: i.name
                    };
                    let s = P.default.getVoiceStatesForChannel(e);
                    if (n && t && (0, B.hasStream)(s)) return {
                        type: "go-live"
                    };
                    let l = C.default.getChannelStatus(e);
                    if (null != l && l.length > 0) return {
                        type: "voice",
                        text: l
                    };
                    let a = o.default.getEmbeddedActivitiesForChannel(e.id),
                        r = (null != a ? a : []).map(e => {
                            var t;
                            return null === (t = u.default.getApplication(e.application_id)) || void 0 === t ? void 0 : t.name
                        }).filter(F.isNotNullish);
                    return r.length > 0 ? {
                        type: "embedded-activities",
                        name: r.join(", ")
                    } : null
                }
                return null
            }

            function ef(e, t, n, i, s) {
                let l = null != n && (n.id === e.id || i === e.id),
                    a = null != n && n.isThread() && n.parent_id === e.id;
                if (L.THREADED_CHANNEL_TYPES.has(e.type)) {
                    let e = h.sortBy(Object.values(t), e => -e.joinTimestamp).map(e => e.channel.id);
                    if (l) return e;
                    if (a) return !(n.id in t) && !(0, S.isInMainTabsExperiment)() && e.unshift(n.id), e;
                    else if (s) return e.filter(e => !T.default.isMuted(e));
                    else return e
                }
                return []
            }

            function ep() {
                return !1
            }

            function eI(e, t) {
                return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1)
            }

            function eE(e, t) {
                let {
                    selectedChannel: n,
                    activeJoinedRelevantThreads: i
                } = t;
                if (G.default.getMentionCount(e.id) > 0) return !0;
                for (let t in i[e.id])
                    if (G.default.getMentionCount(t) > 0) return !0;
                if (null != n && (n.id === e.id || n.isThread() && n.parent_id === e.id)) return true;
                let s = w.default.getNewChannelIds(e.category.guild.id);
                if (s.size > X);
                else if (s.has(e.id)) return !0;
                return !1
            }

            function eS(e, t, n) {
                let {
                    selectedChannel: i,
                    activeJoinedRelevantThreads: s
                } = n;
                if (t.type === k.ChannelTypes.GUILD_DIRECTORY || !e.optInEnabled || t.isGuildVocal() || e.optedInChannels.has(t.id) || t.isThread() || null != t.parent_id && e.optedInChannels.has(t.parent_id) || e.hideResourceChannels && t.hasFlag(W.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) return !1;
                if (null != i && !(0, S.isInMainTabsExperiment)() && (i.id === t.id || i.isThread() && i.parent_id === t.id) || G.default.getMentionCount(t.id) > 0) return !0;
                let l = w.default.getNewChannelIds(e.id),
                    a = Array.from(l).sort((e, t) => H.default.compare(t, e));
                if (l.has(t.id) && a.indexOf(t.id) < X) return !0;
                for (let e in s[t.id])
                    if (G.default.getMentionCount(e) > 0 || G.default.hasUnread(e) || G.default.hasRecentlyVisitedAndRead(e)) return !0;
                return !(e.mutedChannelIds.has(t.id) || null != t.parent_id && e.mutedChannelIds.has(t.parent_id)) && (!!G.default.hasRecentlyVisitedAndRead(t.id) || !1)
            }
            let ev = new Set(Object.values(Y.ChannelListCommunityRow))
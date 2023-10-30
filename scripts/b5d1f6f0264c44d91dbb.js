(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["44893"], {
        746164: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "guild",
                id: "2023-02_voice_channel_statuses",
                label: "Voice Channel Status Guild Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable viewing and setting voice channel statuses for guild",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "A/A test, identical to treatment 1",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        319839: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_NEW_CHANNELS_TO_SHOW: function() {
                    return j
                },
                SECTION_INDEX_COMMUNITY: function() {
                    return z
                },
                SECTION_INDEX_FAVORITES: function() {
                    return X
                },
                SECTION_INDEX_UNCATEGORIZED_CHANNELS: function() {
                    return J
                },
                SECTION_INDEX_FIRST_NAMED_CATEGORY: function() {
                    return K
                },
                default: function() {
                    return Z
                },
                ChannelListFavoritesCategory: function() {
                    return en
                },
                computeSubtitle: function() {
                    return eC
                },
                computeThreadIds: function() {
                    return eg
                }
            });
            var i, s, l = n("627445"),
                a = n.n(l),
                r = n("917351"),
                d = n.n(r),
                h = n("746164"),
                o = n("191225"),
                u = n("203288"),
                c = n("650033"),
                C = n("290886"),
                g = n("398604"),
                f = n("38654"),
                p = n("126198"),
                I = n("21121"),
                S = n("364281"),
                v = n("797694"),
                E = n("512395"),
                w = n("15684"),
                y = n("401690"),
                m = n("755624"),
                _ = n("233069"),
                N = n("870691"),
                T = n("42203"),
                L = n("816092"),
                R = n("546463"),
                A = n("305961"),
                O = n("957255"),
                b = n("660478"),
                D = n("18494"),
                G = n("282109"),
                U = n("800762"),
                M = n("316133"),
                V = n("449008"),
                F = n("299039"),
                P = n("89073"),
                H = n("323137"),
                B = n("796618"),
                x = n("49111"),
                W = n("724210"),
                k = n("843455");
            let Y = "placeholder-channel-id",
                j = 2;
            (i = s || (s = {}))[i.CannotShow = 1] = "CannotShow", i[i.DoNotShow = 2] = "DoNotShow", i[i.WouldShowIfUncollapsed = 3] = "WouldShowIfUncollapsed", i[i.Show = 4] = "Show";
            let z = 0,
                X = 1,
                J = 3,
                K = 4,
                q = new Set([String(B.ChannelListCommunityRow.GUILD_DIRECTORY)]);
            class Z {
                getGuild(e, t) {
                    var n;
                    return (!(e in this.guilds) || !d.isEqual(null === (n = this.guilds[e]) || void 0 === n ? void 0 : n.getCommunitySection().getRows().filter(e => !q.has(e)), t)) && (this.guilds[e] = new Q(e, t)), this.guilds[e]
                }
                getGuildWithoutCommunityRows(e) {
                    return !(e in this.guilds) && (this.guilds[e] = new Q(e, [])), this.guilds[e]
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
                    let t = T.default.getBasicChannel(e);
                    return null != t && null != t.guild_id && null != this.guilds[t.guild_id] && (t instanceof _.ChannelRecordBase || null != (t = T.default.getChannel(e))) && this.nonPositionalChannelUpdate(t)
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
            }
            class Q {
                get initializationData() {
                    return {
                        selectedChannel: T.default.getChannel(D.default.getChannelId()),
                        selectedVoiceChannelId: D.default.getVoiceChannelId(),
                        activeJoinedRelevantThreads: y.default.getActiveJoinedRelevantThreadsForGuild(this.id),
                        activeJoinedUnreadThreads: y.default.getActiveJoinedUnreadThreadsForGuild(this.id)
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
                        this.sortedNamedCategories = d.sortBy(Object.values(this.categories), e => e.record.position), this.rows = [this.communitySection, this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.sortedNamedCategories, this.voiceChannelsCategory].map(e => e.getRows());
                        let e = 0;
                        for (let t of [this.noParentCategory, ...this.sortedNamedCategories])
                            for (let n of (t.position = ++e, t.getShownChannelIds())) t.channels[n].position = ++e
                    }
                    return this.rows
                }
                getCategoryFromSection(e) {
                    switch (e) {
                        case z:
                            throw Error("Invalid section. Use getCommunitySection instead");
                        case X:
                            return this.favoritesCategory;
                        case J:
                            return this.noParentCategory;
                        case this.recentsSectionNumber:
                            return this.recentsCategory;
                        case this.voiceChannelsSectionNumber:
                            return this.voiceChannelsCategory;
                        default:
                            return this.getSortedNamedCategories()[e - K]
                    }
                }
                getNamedCategoryFromSection(e) {
                    return a((e -= K) >= 0 && e < this.getSortedNamedCategories().length, "invalid section index ".concat(e)), this.getSortedNamedCategories()[e]
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
                    return a(e > z, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === Y
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
                            section: z
                        }]
                    }
                    let t = [],
                        n = T.default.getChannel(e);
                    if (null == n || null == e) return t;
                    let i = n.isThread();
                    if (i && (n = T.default.getChannel(n.parent_id)), null == n) return t;
                    let s = this.favoritesCategory.getShownChannelIds().indexOf(n.id);
                    s >= 0 && t.push({
                        section: X,
                        row: s
                    });
                    let l = this.recentsCategory.getShownChannelIds().indexOf(n.id);
                    if (l >= 0 && t.push({
                            section: this.recentsSectionNumber,
                            row: l
                        }), n.type === x.ChannelTypes.GUILD_CATEGORY) {
                        let e = d.findIndex(this.getSortedNamedCategories(), e => {
                            var t;
                            return e.id === (null === (t = n) || void 0 === t ? void 0 : t.id)
                        });
                        return [{
                            section: e + K
                        }]
                    }
                    let a = this.getCategory(n),
                        r = a instanceof ee ? J : this.getSortedNamedCategories().indexOf(a) + K,
                        h = a.getShownChannelIds().indexOf(n.id);
                    if (r >= 0 && h >= 0) {
                        let s = i ? a.channels[n.id].threadIds.indexOf(e) : 0;
                        t.push({
                            section: r,
                            row: h,
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
                    a(e.length > 0, "must have at least one channel in the slice");
                    let n = e[0],
                        i = e[e.length - 1],
                        s = !0,
                        l = !1,
                        r = [],
                        d = [];
                    for (let e of this.getSortedCategories()) {
                        let a = (null == t ? void 0 : t.ignoreRecents) && e === this.recentsCategory;
                        for (let t of e.getShownChannelIds()) {
                            let h = e.channels[t];
                            s && (h.id === n.id ? s = !1 : !a && r.push(h)), l && !a && d.push(h), !s && !l && h.id === i.id && (l = !0)
                        }
                    }
                    return [r, e, d]
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
                        let n = T.default.getChannel(e);
                        if (null != n) {
                            if (n.id in this.favoritesCategory.channels) t = [this.favoritesCategory.channels[n.id]];
                            else if (n.id in this.recentsCategory.channels) t = [this.recentsCategory.channels[n.id]];
                            else {
                                let i = this.getCategory(n);
                                null != i && null != i.channels[e] && (t = [i.channels[e]])
                            }
                        }
                    } else t = d(this.getSortedCategories()).map(e => Object.values(e.channels)).flatten().value();
                    let n = !1;
                    return t.forEach(e => {
                        e.updateSubtitle() && (n = !0)
                    }), n && this.version++, n
                }
                forEachShownChannel(e, t) {
                    for (let n of this.getSortedCategories()) {
                        if (null == t || !t.ignoreRecents || n !== this.recentsCategory)
                            for (let t of n.getShownChannelIds()) {
                                let i = n.channels[t];
                                for (let t of (e(i.record), i.threadIds)) {
                                    let n = T.default.getChannel(t);
                                    null != n && e(n)
                                }
                            }
                    }
                }
                forEachChannel(e, t) {
                    for (let n of this.getSortedCategories()) {
                        if (null == t || !t.ignoreRecents || n !== this.recentsCategory)
                            for (let t of n.getChannelRecords()) e(t)
                    }
                }
                constructor(e, t) {
                    var n, i;
                    this.id = e, this.sortedNamedCategories = null, this.sections = null, this.rows = null, this.firstVoiceChannel = void 0, this.allChannelsById = null, this.version = 0, this.hideMutedChannels = G.default.isGuildCollapsed(this.id), this.mutedChannelIds = G.default.getMutedChannels(this.id), this.optedInChannels = null !== (n = G.default.getOptedInChannelsWithPendingUpdates(this.id)) && void 0 !== n ? n : G.default.getOptedInChannels(this.id), this.optInEnabled = (0, E.isOptInEnabledForGuild)(this.id), this.hideResourceChannels = (0, C.canSeeOnboardingHome)(this.id), this.favoriteChannelIds = new Set(null !== (i = G.default.getGuildFavorites(this.id)) && void 0 !== i ? i : []), this.suggestedFavoriteChannelId = S.default.getSuggestedChannelId(this.id), this.collapsedCategoryIds = N.default.getCollapsedCategories();
                    let s = T.default.getMutableGuildChannelsForGuild(this.id),
                        l = A.default.getGuild(this.id),
                        r = {},
                        h = [],
                        o = {};
                    for (let e in s) {
                        let t = s[e];
                        t.type === x.ChannelTypes.GUILD_CATEGORY && (r[t.id] = t, o[t.id] = [])
                    }
                    let u = [],
                        c = [],
                        g = [],
                        f = this.initializationData;
                    for (let e in s) {
                        let t = s[e];
                        if (t.type !== x.ChannelTypes.GUILD_CATEGORY) {
                            if (t.type === x.ChannelTypes.GUILD_DIRECTORY) {
                                null != l && !l.hasFeature(x.GuildFeatures.HUB) && g.push(t);
                                continue
                            }
                            eS(this, t, f) ? u.push(t) : (t.type === x.ChannelTypes.GUILD_VOICE || t.type === x.ChannelTypes.GUILD_STAGE_VOICE) && (null != t.parent_id && null != r[t.parent_id] && c.push(r[t.parent_id]), c.push(t)), null != t.parent_id && t.parent_id in o ? o[t.parent_id].push(t) : h.push(t)
                        }
                    }
                    for (let e in this.categories = {}, o) this.categories[e] = new et(this, r[e], o[e], f);
                    this.recentsSectionNumber = 2, this.favoritesSectionNumber = X, this.noParentCategory = new ee(this, h, f), this.favoritesCategory = new en(this, f), this.recentsCategory = (0, p.isRecentChannelsEnabled)() ? new ei(this, s, f) : new es(this, u, f), this.voiceChannelsCategory = new el(this, c, r, f), this.communitySection = new ea(t, g.length > 0), a(!("null" in this.categories), "somehow a null got into categories"), this.voiceChannelsSectionNumber = K + d.size(this.categories)
                }
            }
            class $ {
                updateChannel(e, t) {
                    return !!(e.id in this.channels && this.channels[e.id].updateChannel(e, t)) && (this.invalidate(), !0)
                }
                invalidate() {
                    this.shownChannelIds = null
                }
                getRows() {
                    let e = this.getShownChannelIds();
                    return 0 === e.length && this.shouldShowEmptyCategory() ? [Y] : e
                }
                shouldShowEmptyCategory() {
                    return d.some(this.channels, e => e.renderLevel >= s.WouldShowIfUncollapsed)
                }
                getShownChannelIds() {
                    return null == this.shownChannelIds && (this.shownChannelIds = d(this.channels).values().filter(e => e.renderLevel === s.Show).sortBy(e => {
                        let {
                            record: t
                        } = e;
                        return t.isGuildVocal() ? t.position + 1e4 : t.position
                    }).map(e => e.id).value()), this.shownChannelIds
                }
                getShownChannelAndThreadIds() {
                    let e = d(this.channels).values().flatMap(e => e.threadIds).value();
                    return this.getShownChannelIds().concat(e)
                }
                isEmpty() {
                    return 0 === this.getShownChannelIds().length
                }
                getChannelRecords() {
                    return d(this.channels).values().filter(e => e.renderLevel > s.CannotShow).map(e => e.record).value()
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
            class ee extends $ {
                constructor(e, t, n) {
                    super(e), this.channels = d(t).map(e => new ed(this, e, n)).keyBy(e => e.id).value()
                }
            }
            class et extends $ {
                shouldShowEmptyCategory() {
                    return !!(super.shouldShowEmptyCategory() || O.default.can(k.Permissions.MANAGE_CHANNELS, this.record) && O.default.can(k.Permissions.VIEW_CHANNEL, this.record) && d.isEmpty(this.channels) && (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id))) || !1
                }
                constructor(e, t, n, i) {
                    for (let s of (super(e), this.record = t, this.id = t.id, this.isCollapsed = !0 === e.collapsedCategoryIds[t.id], this.isMuted = e.mutedChannelIds.has(t.id), this.channels = {}, n)) this.channels[s.id] = new ed(this, s, i)
                }
            }
            class en extends $ {
                updateChannel(e, t) {
                    let n = e.id in this.channels && G.default.isFavorite(e.guild_id, e.id),
                        i = S.default.getSuggestedChannelId(e.guild_id),
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
                    this.channels = d(null !== (n = G.default.getGuildFavorites(e.id)) && void 0 !== n ? n : []).map(e => T.default.getChannel(e)).filter(V.isNotNullish).map(e => new eh(this, e, t)).keyBy(e => e.id).value();
                    let i = S.default.getSuggestedChannelId(e.id),
                        s = T.default.getChannel(i);
                    null != s && null != i && (this.channels[i] = new eh(this, s, {
                        ...t,
                        activeJoinedRelevantThreads: {},
                        activeJoinedUnreadThreads: {}
                    }))
                }
            }
            class ei extends $ {
                shouldShowEmptyCategory() {
                    return this.enabled && this.isCollapsed && super.shouldShowEmptyCategory()
                }
                updateAllChannels(e) {
                    return Object.values(this.channels).reduce((t, n) => this.updateChannel(n.record, e) || t, !1)
                }
                updateChannel(e, t) {
                    if (!this.enabled) return !1;
                    if ((0, _.isThread)(e.type)) {
                        let t = this.channels[e.parent_id];
                        return null != t && this.updateShownChannelIds(t)
                    }
                    if (!(0, _.isGuildReadableType)(e.type)) return !1;
                    let n = super.updateChannel(e, t),
                        i = this.channels[e.id];
                    return null == i ? (i = new eu(this, e, t), this.channels[e.id] = i, this.invalidate(), !0) : this.updateShownChannelIds(i) || n
                }
                getFirstVoiceChannel(e) {
                    return null
                }
                getShownChannelIds() {
                    if (null == this.shownChannelIds) {
                        let e = this.isCollapsed ? s.Show : s.WouldShowIfUncollapsed;
                        this.shownChannelIds = this.enabled ? d(this.channels).filter(t => t.renderLevel >= e).map(e => [e.id, e.lastMessageTimestamp, e.renderLevel]).filter(e => {
                            let [, t, n] = e;
                            return n === s.Show || t > 0 && Date.now() - t < ei.MAX_TIMESTAMP_DELTA
                        }).sortBy(e => {
                            let [, t, n] = e;
                            return -(t - (n === s.Show ? 0 : F.DISCORD_EPOCH))
                        }).take(ei.MAX_RECENT_CHANNELS).sortBy(e => {
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
                    let n = this.isCollapsed ? s.Show : s.WouldShowIfUncollapsed;
                    if (null == this.shownChannelIds || e.renderLevel < n) return !1;
                    if (e.lastMessageTimestamp > (null === (t = this.channels[this.shownChannelIds[0]]) || void 0 === t ? void 0 : t.lastMessageTimestamp)) {
                        let t = this.shownChannelIds.indexOf(e.id);
                        return t > -1 && this.shownChannelIds.splice(t, 1), this.shownChannelIds.splice(0, 0, e.id), this.shownChannelIds.length > ei.MAX_RECENT_CHANNELS && (this.shownChannelIds = this.shownChannelIds.slice(0, ei.MAX_RECENT_CHANNELS)), c.default.get("recent_channels_throttle") && (this.isThrottled = !0, setTimeout(() => {
                            this.isThrottled = !1
                        }, this.RECENTS_THROTTLE)), !0
                    }
                    return !1
                }
                constructor(e, t, n) {
                    if (super(e), this.enabled = !1, this.RECENTS_THROTTLE = 5e3, this.isThrottled = !1, this.isCollapsed = v.default.isCollapsed(e.id), this.enabled = function() {
                            return !1
                        }() && Object.keys(t).length >= ei.MIN_READABLE_CHANNELS, this.enabled)
                        for (let e of Object.values(t))(0, _.isGuildReadableType)(e.type) && !(0, _.isThread)(e.type) && (this.channels[e.id] = new eu(this, e, n))
                }
            }
            ei.MIN_READABLE_CHANNELS = 7, ei.MAX_RECENT_CHANNELS = 10, ei.MAX_TIMESTAMP_DELTA = 6048e5;
            class es extends $ {
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
                        if (i && null == n) return this.channels[e.id] = new eo(this, e, t), this.invalidate(), !0;
                        if (!i && null != n) return delete this.channels[e.id], this.invalidate(), !0
                    }
                    return n
                }
                getFirstVoiceChannel(e) {
                    return null
                }
                getShownChannelIds() {
                    if (null == this.shownChannelIds) {
                        let e = d(this.channels).values().filter(e => e.renderLevel === s.Show || e.renderLevel === s.WouldShowIfUncollapsed).filter(e => !e.record.isGuildVocal()),
                            t = e.sortBy(e => {
                                let {
                                    record: t
                                } = e;
                                return t.position
                            }).take(5).value(),
                            n = e.filter(e => e.renderLevel === s.Show).value(),
                            i = new Set([...n, ...t]);
                        this.shownChannelIds = d([...i]).sortBy(e => {
                            let {
                                record: t
                            } = e;
                            return t.position
                        }).map(e => e.id).value()
                    }
                    return this.shownChannelIds
                }
                constructor(e, t, n) {
                    if (super(e), !e.optInEnabled || f.default.isFullServerPreview(e.id)) return;
                    this.isCollapsed = !1, this.isMuted = !1, this.channels = d(t).map(e => new eo(this, e, n)).keyBy(e => e.id).value()
                }
            }
            class el extends $ {
                invalidate() {
                    super.invalidate(), this.hiddenChannelIds = null
                }
                getHiddenChannelIds() {
                    if (!this.guild.optInEnabled) return [];
                    if (null == this.hiddenChannelIds) {
                        let e = d(this.channels).filter(e => e.renderLevel === s.WouldShowIfUncollapsed).value();
                        if (e.every(e => e.record.isCategory())) return this.hiddenChannelIds = [], this.hiddenChannelIds;
                        this.hiddenChannelIds = e.map(e => e.id)
                    }
                    return this.hiddenChannelIds
                }
                getRows() {
                    if (!this.guild.optInEnabled) return [];
                    let e = this.getShownChannelIds();
                    return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [Y] : e
                }
                getShownChannelIds() {
                    if (!this.guild.optInEnabled) return [];
                    if (null == this.shownChannelIds) {
                        let t = d(this.channels).filter(e => e.renderLevel === s.Show).orderBy([e => (function(e, t) {
                            if (e.record.type === x.ChannelTypes.GUILD_CATEGORY) return e.record.position;
                            if (null != e.record.parent_id) {
                                var n, i;
                                return null !== (i = null === (n = t[e.record.parent_id]) || void 0 === n ? void 0 : n.position) && void 0 !== i ? i : -1
                            }
                            return -1
                        })(e, this.categoriesById), e => e.record.type === x.ChannelTypes.GUILD_CATEGORY ? -1 : e.record.position], ["asc", "asc"]).value();
                        this.shownChannelIds = [];
                        for (let n = 0; n < t.length; n++) {
                            var e;
                            let i = t[n];
                            if (!(n < t.length - 1) || i.record.type !== x.ChannelTypes.GUILD_CATEGORY || (null === (e = t[n + 1]) || void 0 === e ? void 0 : e.record.type) !== x.ChannelTypes.GUILD_CATEGORY)(n !== t.length - 1 || i.record.type !== x.ChannelTypes.GUILD_CATEGORY) && this.shownChannelIds.push(i.id)
                        }
                    }
                    return this.shownChannelIds
                }
                getFirstVoiceChannel(e) {
                    return null
                }
                constructor(e, t, n, i) {
                    if (super(e), this.categoriesById = n, this.hiddenChannelIds = null, !e.optInEnabled) return;
                    this.isCollapsed = H.default.isVoiceCategoryCollapsed(e.id), this.isMuted = !1, this.categoriesById = n, this.channels = d(t).map(e => new ec(this, e, i)).keyBy(e => e.id).value()
                }
            }
            class ea {
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
                    this.communityRows = e.map(String), t && this.communityRows.push(String(B.ChannelListCommunityRow.GUILD_DIRECTORY))
                }
            }
            class er {
                get isMuted() {
                    return this.category.guild.mutedChannelIds.has(this.id)
                }
                get isCollapsed() {
                    return L.default.isCollapsed(this.id)
                }
                get isFirstVoiceChannel() {
                    return this.category.getFirstVoiceChannel() === this
                }
                get lastMessageTimestamp() {
                    return Math.max(b.default.lastMessageTimestamp(this.id), ...this.threadIds.map(b.default.lastMessageTimestamp))
                }
                updateChannel(e, t) {
                    let n = !1;
                    null != e && e !== this.record && (this.record = e, n = !0);
                    let i = this.computeState(t);
                    return (i.renderLevel !== this.renderLevel || !d.isEqual(i.threadIds, this.threadIds)) && (this.renderLevel = i.renderLevel, this.threadIds = i.threadIds, this.threadCount = d.size(i.threadIds), n = !0), this.renderLevel === s.Show && this.updateSubtitle() && (n = !0), n
                }
                updateSubtitle() {
                    let e = this.computeSubtitle();
                    return !d.isEqual(this.subtitle, e) && (this.subtitle = e, !0)
                }
                computeSubtitle() {
                    return eC(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)
                }
                constructor(e, t, n) {
                    this.category = e, this.record = t, this.position = -1, this.threadIds = [], this.threadCount = 0, this.subtitle = null, this.renderLevel = s.CannotShow, this.id = t.id;
                    let {
                        renderLevel: i,
                        threadIds: l
                    } = this.computeState(n);
                    this.renderLevel = i, this.threadCount = d.size(l), this.threadIds = l, i === s.Show && (this.subtitle = this.computeSubtitle())
                }
            }
            class ed extends er {
                computeState(e) {
                    var t;
                    let {
                        selectedChannel: n,
                        selectedVoiceChannelId: i,
                        activeJoinedRelevantThreads: l,
                        activeJoinedUnreadThreads: a
                    } = e, r = [];
                    if (!O.default.can(k.Permissions.VIEW_CHANNEL, this.record)) {
                        if (this.id === i) return {
                            renderLevel: s.Show,
                            threadIds: r
                        };
                        if (!u.default.isChannelGatedAndVisible(this.record.guild_id, this.record.id)) return {
                            renderLevel: s.CannotShow,
                            threadIds: r
                        }
                    }
                    let h = this.record.parent_id,
                        o = this.category.guild;
                    if (ep(o, this.record)) return {
                        renderLevel: s.CannotShow,
                        threadIds: r
                    };
                    let c = (null == n ? void 0 : n.id) === this.id || i === this.id,
                        C = null != n && n.isThread() && n.parent_id === this.id,
                        g = null !== (t = c || C || !this.category.isCollapsed && !this.isMuted ? l[this.id] : a[this.id]) && void 0 !== t ? t : {};
                    return (r = eg(this.record, g, n, i, o.hideMutedChannels), o.optInEnabled && o.hideResourceChannels && this.record.hasFlag(W.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) ? {
                        renderLevel: c ? s.Show : s.CannotShow,
                        threadIds: r
                    } : !o.optInEnabled || o.optedInChannels.has(this.id) || null != h && o.optedInChannels.has(h) ? c || C || !d.isEmpty(r) || b.default.getMentionCount(this.id) > 0 ? {
                        renderLevel: s.Show,
                        threadIds: r
                    } : o.hideMutedChannels && o.mutedChannelIds.has(this.id) ? {
                        renderLevel: s.DoNotShow,
                        threadIds: r
                    } : this.category.isCollapsed && (o.mutedChannelIds.has(this.id) || null != h && o.mutedChannelIds.has(h) || this.record.isGuildVocal() || this.record.type === x.ChannelTypes.GUILD_STORE || (0, _.isGuildReadableType)(this.record.type) && !1 === b.default.hasRelevantUnread(this.record)) ? {
                        renderLevel: s.WouldShowIfUncollapsed,
                        threadIds: r
                    } : {
                        renderLevel: s.Show,
                        threadIds: r
                    } : {
                        renderLevel: s.DoNotShow,
                        threadIds: r
                    }
                }
            }
            class eh extends er {
                computeState(e) {
                    var t;
                    let {
                        selectedChannel: n,
                        selectedVoiceChannelId: i,
                        activeJoinedRelevantThreads: l
                    } = e;
                    return O.default.can(k.Permissions.VIEW_CHANNEL, this.record) ? {
                        renderLevel: s.Show,
                        threadIds: eg(this.record, null !== (t = l[this.id]) && void 0 !== t ? t : {}, n, i, !1)
                    } : {
                        renderLevel: s.CannotShow,
                        threadIds: []
                    }
                }
            }
            class eo extends er {
                computeState(e) {
                    var t;
                    let {
                        selectedChannel: n,
                        selectedVoiceChannelId: i,
                        activeJoinedRelevantThreads: l
                    } = e;
                    return O.default.can(k.Permissions.VIEW_CHANNEL, this.record) ? {
                        renderLevel: eI(this, e) ? s.Show : s.WouldShowIfUncollapsed,
                        threadIds: eg(this.record, null !== (t = l[this.id]) && void 0 !== t ? t : {}, n, i, !1)
                    } : {
                        renderLevel: s.CannotShow,
                        threadIds: []
                    }
                }
            }
            class eu extends ed {
                computeState(e) {
                    let {
                        renderLevel: t,
                        threadIds: n
                    } = super.computeState(e);
                    if (t > s.CannotShow) {
                        let i = this.record.parent_id,
                            l = this.category.guild;
                        l.mutedChannelIds.has(this.id) || null != i && l.mutedChannelIds.has(i) ? t = s.DoNotShow : t === s.Show ? t = s.WouldShowIfUncollapsed : t === s.DoNotShow && eS(this.category.guild, this.record, e) && (t = s.WouldShowIfUncollapsed), t === s.WouldShowIfUncollapsed && eI(this, e) && (t = s.Show), n = d.sortBy(n, e => -b.default.lastMessageTimestamp(e))
                    }
                    return {
                        renderLevel: t,
                        threadIds: n
                    }
                }
            }
            class ec extends ed {
                getRenderLevel(e) {
                    let t = this.category.guild;
                    return !O.default.can(k.Permissions.VIEW_CHANNEL, this.record) || e === s.Show || e === s.WouldShowIfUncollapsed || ep(t, this.record) ? s.CannotShow : this.category.isCollapsed ? d.some(U.default.getVoiceStatesForChannel(this.record.id)) ? s.Show : s.WouldShowIfUncollapsed : s.Show
                }
                computeState(e) {
                    let t = super.computeState(e),
                        n = this.getRenderLevel(t.renderLevel);
                    return n === s.Show && (this.subtitle = eC(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)), {
                        threadIds: [],
                        renderLevel: n
                    }
                }
            }

            function eC(e, t, n) {
                if (e.type === x.ChannelTypes.GUILD_VOICE) {
                    var i;
                    let s = g.default.getActiveEventByChannel(e.id);
                    if (null != s) return {
                        type: "event",
                        name: s.name
                    };
                    let l = M.default.getVoiceStatesForChannel(e);
                    if (n && t && (0, P.hasStream)(l)) return {
                        type: "go-live"
                    };
                    let a = o.default.getEmbeddedActivitiesForChannel(e.id),
                        r = (null != a ? a : []).map(e => {
                            var t;
                            return null === (t = R.default.getGame(e.application_id)) || void 0 === t ? void 0 : t.name
                        }).filter(V.isNotNullish);
                    if (r.length > 0) return {
                        type: "embedded-activities",
                        name: r.join(", ")
                    };
                    let d = h.default.getCurrentConfig({
                        guildId: e.guild_id,
                        location: "cf7f69_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                    return d && null != e.status && (null === (i = e.status) || void 0 === i ? void 0 : i.length) > 0 ? {
                        type: "voice",
                        text: e.status
                    } : null
                }
                return null
            }

            function eg(e, t, n, i, s) {
                let l = null != n && (n.id === e.id || i === e.id),
                    a = null != n && n.isThread() && n.parent_id === e.id;
                if (_.THREADED_CHANNEL_TYPES.has(e.type)) {
                    let e = d.sortBy(Object.values(t), e => -e.joinTimestamp).map(e => e.channel.id);
                    if (l) return e;
                    if (a) return !(n.id in t) && !(0, I.isInMainTabsExperiment)() && e.unshift(n.id), e;
                    else if (s) return e.filter(e => !m.default.isMuted(e));
                    else return e
                }
                return []
            }

            function ef() {
                return !1
            }

            function ep(e, t) {
                return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1)
            }

            function eI(e, t) {
                let {
                    selectedChannel: n,
                    activeJoinedRelevantThreads: i
                } = t;
                if (b.default.getMentionCount(e.id) > 0) return !0;
                for (let t in i[e.id])
                    if (b.default.getMentionCount(t) > 0) return !0;
                if (null != n && (n.id === e.id || n.isThread() && n.parent_id === e.id)) return true;
                let s = w.default.getNewChannelIds(e.category.guild.id);
                if (s.size > j);
                else if (s.has(e.id)) return !0;
                return !1
            }

            function eS(e, t, n) {
                let {
                    selectedChannel: i,
                    activeJoinedRelevantThreads: s
                } = n;
                if (t.type === x.ChannelTypes.GUILD_DIRECTORY || !e.optInEnabled || t.isGuildVocal() || e.optedInChannels.has(t.id) || t.isThread() || null != t.parent_id && e.optedInChannels.has(t.parent_id) || e.hideResourceChannels && t.hasFlag(W.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) return !1;
                if (null != i && !(0, I.isInMainTabsExperiment)() && (i.id === t.id || i.isThread() && i.parent_id === t.id) || b.default.getMentionCount(t.id) > 0) return !0;
                let l = w.default.getNewChannelIds(e.id),
                    a = Array.from(l).sort((e, t) => F.default.compare(t, e));
                if (l.has(t.id) && a.indexOf(t.id) < j) return !0;
                for (let e in s[t.id])
                    if (b.default.getMentionCount(e) > 0 || b.default.hasUnread(e) || b.default.hasRecentlyVisitedAndRead(e)) return !0;
                return !(e.mutedChannelIds.has(t.id) || null != t.parent_id && e.mutedChannelIds.has(t.parent_id)) && (!!b.default.hasRecentlyVisitedAndRead(t.id) || !1)
            }
            let ev = new Set(Object.values(B.ChannelListCommunityRow))
        },
        323137: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("446674"),
                s = n("913144");
            let l = {};

            function a(e) {
                let {
                    guildId: t,
                    expand: n
                } = e;
                n ? l[t] = !0 : delete l[t]
            }
            class r extends i.default.PersistedStore {
                initialize(e) {
                    l = null != e ? e : {}
                }
                isVoiceCategoryExpanded(e) {
                    var t;
                    return null !== (t = null != e && l[e]) && void 0 !== t && t
                }
                isVoiceCategoryCollapsed(e) {
                    return !this.isVoiceCategoryExpanded(e)
                }
                getState() {
                    return l
                }
            }
            r.displayName = "ChannelListVoiceCategoryStore", r.persistKey = "ChannelListVoiceCategoryStore";
            var d = new r(s.default, {
                VOICE_CATEGORY_COLLAPSE: a,
                VOICE_CATEGORY_EXPAND: a
            })
        },
        796618: function(e, t, n) {
            "use strict";
            var i, s;
            n.r(t), n.d(t, {
                ChannelListCommunityRow: function() {
                    return i
                }
            }), (s = i || (i = {})).GUILD_PREMIUM_PROGRESS_BAR = "guild-premium-progress-bar", s.GUILD_SCHEDULED_EVENTS = "guild-scheduled-events", s.GUILD_HUB_HEADER_OPTIONS = "guild-hub-header-options", s.GUILD_FAVORITES = "favorites", s.GUILD_CHANNEL_LIST_OPT_IN_NOTICE = "guild-channel-list-opt-in-notice", s.GUILD_ROLE_SUBSCRIPTIONS = "role-subscriptions", s.GUILD_SHOP = "shop", s.GUILD_MEMBER_APPLICATIONS = "member-applications", s.GUILD_HOME = "@home", s.CHANNELS_AND_ROLES = "channels-and-roles", s.BROWSE_CHANNELS = "browse-channels", s.GUILD_DIRECTORY = "guild-directory", s.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR = "guild-new-member-actions-progress-bar", s.GUILD_MOD_DASH_MEMBER_SAFETY = "guild-mod-dash-member-safety"
        },
        364281: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("446674"),
                s = n("913144"),
                l = n("42203"),
                a = n("18494"),
                r = n("282109");
            let d = {},
                h = {},
                o = {};

            function u() {
                let e = a.default.getChannelId();
                if (null == e) return;
                let t = l.default.getChannel(e);
                if (null == t || null == t.guild_id) return;
                let n = t.guild_id;
                if (null == o[e] && (o[e] = 0), t.isThread() || r.default.isOptInEnabled(n) && !r.default.isChannelOrParentOptedIn(n, t.id)) {
                    delete o[e], null != d[n] && d[n].delete(e);
                    return
                }
                if (o[e]++, null == d[n] && (d[n] = new Set), r.default.isFavorite(n, e)) {
                    d[n].delete(e);
                    return
                }
                if ((null == h[n] || !h[n].has(e)) && o[e] > 50) return d[n].add(e), !0
            }
            class c extends i.default.PersistedStore {
                initialize(e) {
                    var t, n;
                    if (this.syncWith([a.default], u), null == e) return;
                    let {
                        suggestedChannels: i,
                        dismissedSuggestions: s,
                        channelOpensByChannelId: l
                    } = e;
                    if (null != i)
                        for (let e in i) t = new Set(i[e]), d[e] = void 0 !== t ? t : new Set;
                    if (null != s)
                        for (let e in s) n = new Set(s[e]), h[e] = void 0 !== n ? n : new Set;
                    o = null != l ? l : {}
                }
                getSuggestedChannelId(e) {
                    return null
                }
                getState() {
                    return {
                        suggestedChannels: {},
                        dismissedSuggestions: {},
                        channelOpensByChannelId: {}
                    }
                }
            }
            c.displayName = "FavoritesSuggestionStore", c.persistKey = "FavoritesSuggestionStore";
            var C = new c(s.default, {
                DISMISS_FAVORITE_SUGGESTION: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    return null == h[t] && (h[t] = new Set), h[t].add(n), d[t].delete(n), !0
                }
            })
        },
        797694: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("446674"),
                s = n("913144");
            let l = new Set;
            class a extends i.default.PersistedStore {
                initialize(e) {
                    l.clear(), null == e || e.guilds.forEach(e => l.add(e))
                }
                isCollapsed(e) {
                    return l.has(e)
                }
                getState() {
                    return {
                        guilds: l
                    }
                }
            }
            a.displayName = "RecentlyActiveCollapseStore", a.persistKey = "RecentlyActiveCollapseStore";
            var r = new a(s.default, {
                SET_RECENTLY_ACTIVE_COLLAPSED: function(e) {
                    let {
                        guildId: t,
                        collapsed: n
                    } = e;
                    n ? l.add(t) : l.delete(t)
                }
            })
        },
        15684: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var i = n("249654"),
                s = n("446674"),
                l = n("913144"),
                a = n("267363"),
                r = n("582713"),
                d = n("374363"),
                h = n("271938"),
                o = n("42203"),
                u = n("923959"),
                c = n("26989"),
                C = n("305961"),
                g = n("660478"),
                f = n("282109"),
                p = n("718517"),
                I = n("49111");
            let S = new Set,
                v = {},
                E = {};

            function w(e, t) {
                let n = v[e];
                if (null != n && null != t && n.has(t)) {
                    var s;
                    f.default.isOptInEnabled(e) && !(null === (s = o.default.getChannel(t)) || void 0 === s ? void 0 : s.isThread()) && null == g.default.ackMessageId(t) && l.default.wait(() => (0, a.ack)(t, !0, !0, i.default.atPreviousMillisecond(t)))
                }
            }

            function y(e) {
                var t;
                if (null != v[e]) return;
                let n = u.default.getChannels(e),
                    s = n[0, u.GUILD_SELECTABLE_CHANNELS_KEY].map(e => e.channel.id),
                    l = null === (t = c.default.getMember(e, h.default.getId())) || void 0 === t ? void 0 : t.joinedAt;
                if (null == l) return;
                v[e] = new Set;
                let a = new Date(l).getTime();
                0 !== s.length && (v[e] = new Set(s.filter(t => {
                    let n = i.default.extractTimestamp(t);
                    return null == g.default.getTrackedAckMessageId(t) && n > Date.now() - p.default.Millis.WEEK && n > d.default.getGuildRecentsDismissedAt(e) && n > a && !f.default.isChannelOrParentOptedIn(e, t)
                })), E[e] = Date.now())
            }

            function m() {
                Object.keys(v).forEach(e => {
                    let t = v[e];
                    v[e] = new Set([...t].filter(t => !f.default.isChannelOrParentOptedIn(e, t)))
                })
            }
            class _ extends s.default.Store {
                initialize() {
                    this.waitFor(u.default, h.default, c.default, f.default, g.default, d.default), this.syncWith([f.default], m)
                }
                getNewChannelIds(e) {
                    var t;
                    return null != e && null == v[e] && y(e), null != e && null !== (t = v[e]) && void 0 !== t ? t : S
                }
                shouldIndicateNewChannel(e, t) {
                    var n;
                    if (null == e) return !1;
                    let i = C.default.getGuild(e);
                    return !!(null != i && i.hasFeature(I.GuildFeatures.COMMUNITY)) && (null != e && null == v[e] && y(e), (null === (n = v[e]) || void 0 === n ? void 0 : n.has(t)) && null == g.default.getTrackedAckMessageId(t))
                }
            }
            _.displayName = "NewChannelsStore";
            var N = new _(l.default, {
                BULK_CLEAR_RECENTS: function(e) {
                    let {
                        guildId: t,
                        channelIds: n
                    } = e;
                    if (null == v[t]) return !1;
                    n.forEach(e => v[t].delete(e)), 0 === v[t].size && delete v[t]
                },
                CHANNEL_ACK: () => !0,
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    if (null == t) return !1;
                    let i = v[t];
                    return null == i || E[t] < Date.now() - p.default.Millis.HOUR ? (y(t), !0) : (null != n && w(t, n), !1)
                },
                SIDEBAR_VIEW_CHANNEL: function(e) {
                    let {
                        guildId: t,
                        channelId: n,
                        sidebarType: i
                    } = e;
                    return null != t && i === r.SidebarType.VIEW_CHANNEL && (w(t, n), !1)
                },
                SIDEBAR_VIEW_GUILD: function(e) {
                    let {
                        guildId: t,
                        baseChannelId: n
                    } = e;
                    return null != t && (w(t, n), !1)
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete v[t.id]
                },
                CHANNEL_CREATE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e;
                    !n.isVocal() && (v[n.guild_id] = null !== (t = v[n.guild_id]) && void 0 !== t ? t : new Set, v[n.guild_id].add(n.id))
                }
            })
        },
        816092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                s = n("913144"),
                l = n("42203");
            let a = {},
                r = a;

            function d() {
                Object.keys(r).forEach(e => {
                    null == l.default.getChannel(e) && delete r[e]
                })
            }
            class h extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(l.default), r = null != e ? e : a
                }
                getState() {
                    return r
                }
                getCollapsed() {
                    return r
                }
                isCollapsed(e) {
                    return r[e] || !1
                }
            }
            h.displayName = "CollapsedVoiceChannelStore", h.persistKey = "collapsedChannels";
            var o = new h(s.default, {
                CONNECTION_OPEN: d,
                OVERLAY_INITIALIZE: d,
                CHANNEL_COLLAPSE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    r[t] ? delete r[t] : r[t] = !0, r = {
                        ...r
                    }
                }
            })
        }
    }
]);
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["74970"], {
        428958: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return y
                }
            });
            var s = l("773670"),
                u = l("376929"),
                i = l.n(u),
                n = l("552473"),
                r = l.n(n),
                a = l("64379"),
                o = l("913144"),
                h = l("42203"),
                d = l("18494"),
                c = l("162771"),
                p = l("599110"),
                _ = l("716241"),
                f = l("939011");
            let R = (0, a.trackMaker)({
                analyticEventConfigs: p.AnalyticEventConfigs,
                dispatcher: o.default,
                TRACK_ACTION_NAME: "TRACK"
            });

            function y(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        disableTrack: !1,
                        trackOnInitialLoad: !1
                    },
                    l = arguments.length > 2 ? arguments[2] : void 0,
                    u = s.useRef(),
                    n = s.useRef();
                s.useEffect(() => {
                    let s = !i(u.current, e);
                    s && (u.current = e);
                    let o = !i(n.current, l);
                    if (o && (n.current = l), !s && !o) return;
                    let y = {
                        ...e,
                        sequenceId: r("impression_")
                    };
                    return ! function(e) {
                        var t, l;
                        let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            {
                                name: u,
                                type: i,
                                properties: n
                            } = e;
                        if (e.type === a.ImpressionTypes.MODAL && null == e.name && (0, f.getImpressionStack)().some(e => {
                                var t;
                                return null === (t = e._stackContext) || void 0 === t ? void 0 : t.isSlide
                            })) return;
                        (0, f.setCurrentImpression)(e);
                        let r = null !== (t = null == n ? void 0 : n.guild_id) && void 0 !== t ? t : c.default.getGuildId(),
                            o = null !== (l = null == n ? void 0 : n.channel_id) && void 0 !== l ? l : d.default.getChannelId(r),
                            y = (0, p.expandEventProperties)({
                                impression_type: i,
                                location: (0, f.getLocation)(),
                                ...(0, _.collectGuildAnalyticsMetadata)(r),
                                ...(0, _.collectChannelAnalyticsMetadata)(h.default.getChannel(o)),
                                ...n
                            });
                        if (s) {
                            (0, f.setDebugTrackedData)(null, null);
                            return
                        }
                        null != u && null != i && ((0, p.debugLogEvent)(u, y), R(u, y)), (0, f.setDebugTrackedData)(u, y)
                    }(y, t.disableTrack), () => {
                        null != y && (0, f.cleanupImpression)(y)
                    }
                }, t.trackOnInitialLoad ? [] : void 0)
            }
        },
        337575: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            });
            var s = l("427964"),
                u = l.n(s),
                i = l("870647"),
                n = l.n(i),
                r = l("233069"),
                a = l("813006"),
                o = l("741347"),
                h = l("42203"),
                d = l("319781"),
                c = l("923959"),
                p = l("27618"),
                _ = l("697218"),
                f = l("25292"),
                R = l("651879"),
                y = l("253981"),
                E = l("447909"),
                C = l("195547"),
                T = l("375822"),
                m = l("49111");
            let g = Object.freeze({});

            function A(e, t) {
                var l, s;
                if (!t.frecencyBoosters) return {};
                let u = d.default.getFrequently(),
                    i = u.reduce((e, t) => {
                        let {
                            id: l
                        } = t, s = d.default.getScore(l);
                        return s > e ? s : e
                    }, 0),
                    n = [];
                switch (e) {
                    case T.AutocompleterResultTypes.GUILD:
                        n = u.filter(e => e instanceof a.default);
                        break;
                    case T.AutocompleterResultTypes.USER:
                        n = u.filter(e => e instanceof r.ChannelRecordBase && e.type === m.ChannelTypes.DM);
                        break;
                    case T.AutocompleterResultTypes.GROUP_DM:
                        n = u.filter(e => e instanceof r.ChannelRecordBase && e.isMultiUserDM());
                        break;
                    case T.AutocompleterResultTypes.TEXT_CHANNEL:
                        n = u.filter(e => e instanceof r.ChannelRecordBase && (0, r.isGuildSelectableChannelType)(e.type));
                        break;
                    case T.AutocompleterResultTypes.VOICE_CHANNEL:
                        n = u.filter(e => e instanceof r.ChannelRecordBase && e.isGuildVocal())
                }
                let o = {};
                for (let t of n) {
                    let {
                        id: l
                    } = t, s = d.default.getScore(l);
                    if (e === T.AutocompleterResultTypes.USER && t instanceof r.PrivateChannelRecord) {
                        if (t.type === m.ChannelTypes.DM) o[l = t.getRecipientId()] = 1 + s / i;
                        else if (t.type === m.ChannelTypes.GROUP_DM) {
                            let e = t.recipients.length;
                            for (let l of t.recipients) o[l] = 1 + s / i * (1 / e)
                        }
                    } else o[l] = 1 + s / i
                }
                let c = p.default.getFriendIDs();
                for (let e of c) o[e] = (null !== (l = o[e]) && void 0 !== l ? l : 1) + .2;
                let _ = h.default.getDMUserIds();
                for (let e of _) o[e] = (null !== (s = o[e]) && void 0 !== s ? s : 1) + .1;
                return o
            }
            class I {
                createSearchContext() {
                    null == this.userSearchContext && (this.userSearchContext = E.default.getSearchContext(this.parseUserResults, this._limit))
                }
                setLimit(e) {
                    let {
                        userSearchContext: t
                    } = this;
                    this._limit = e, null != t && t.setLimit(e), this._userResults.length > this._limit && (this._userResults.length = this._limit), this._groupDMResults.length > this._limit && (this._groupDMResults.length = this._limit), this._textChannelResults.length > this._limit && (this._textChannelResults.length = this._limit), this._voiceChannelResults.length > this._limit && (this._voiceChannelResults.length = this._limit), this._guildResults.length > this._limit && (this._guildResults.length = this._limit), this._applicationResults.length > this._limit && (this._applicationResults.length = this._limit), this._linkResults.length > this._limit && (this._linkResults.length = this._limit)
                }
                setResultTypes(e) {
                    this.resultTypes = null != e ? new Set(e) : null, this._userResults = this._include(T.AutocompleterResultTypes.USER) ? this._userResults : [], this._groupDMResults = this._include(T.AutocompleterResultTypes.GROUP_DM) ? this._groupDMResults : [], this._textChannelResults = this._include(T.AutocompleterResultTypes.TEXT_CHANNEL) ? this._textChannelResults : [], this._voiceChannelResults = this._include(T.AutocompleterResultTypes.VOICE_CHANNEL) ? this._voiceChannelResults : [], this._guildResults = this._include(T.AutocompleterResultTypes.GUILD) ? this._guildResults : [], this._applicationResults = this._include(T.AutocompleterResultTypes.APPLICATION) ? this._applicationResults : [], this._linkResults = this._include(T.AutocompleterResultTypes.LINK) ? this._linkResults : []
                }
                _include(e) {
                    return null == this.resultTypes || this.resultTypes.has(e)
                }
                _isAsyncSearch() {
                    return this._include(T.AutocompleterResultTypes.USER)
                }
                setOptions(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    t ? this.options = {
                        ...this.options,
                        ...e
                    } : this.options = e, null != this.options.blacklist ? this._userBlacklist = Array.from(this.options.blacklist).map(e => e.startsWith("user:") ? e.replace("user:", "") : "").filter(e => "" !== e) : this._userBlacklist = null
                }
                search(e, t) {
                    if (this.query = e, "" === e.trim()) {
                        this.clear(), this.updateAllResults();
                        return
                    }
                    this.queryUsers(e, t, this._limit), this._groupDMResults = this.queryGroupDMs(e, this._limit), this._textChannelResults = this.queryTextChannels(e, this._limit), this._voiceChannelResults = this.queryVoiceChannels(e, this._limit), this._guildResults = this.queryGuilds(e, this._limit), this._applicationResults = this.queryApplications(e, this._limit), this._linkResults = this.queryLink(e, this._limit), this._isAsyncSearch() ? (clearTimeout(this._asyncTimeout), this._asyncTimeout = setTimeout(this.updateAllResults, 300)) : this.updateAllResults()
                }
                clear() {
                    let {
                        userSearchContext: e
                    } = this;
                    null != e && e.clearQuery(), this.results = [], this._userResults = [], this._groupDMResults = [], this._textChannelResults = [], this._voiceChannelResults = [], this._guildResults = [], this._applicationResults = [], this._linkResults = []
                }
                clean() {
                    this.clear(), this.destroy(), this.query = "", this.updateAllResults()
                }
                pause() {
                    var e, t;
                    null === (t = this.userSearchContext) || void 0 === t || null === (e = t.unsubscribe) || void 0 === e || e.call(t)
                }
                resume() {
                    var e, t;
                    null === (t = this.userSearchContext) || void 0 === t || null === (e = t.subscribe) || void 0 === e || e.call(t)
                }
                destroy() {
                    let {
                        userSearchContext: e
                    } = this;
                    null != e && (e.destroy(), this.userSearchContext = null)
                }
                queryTextChannels(e, t) {
                    if (!this._include(T.AutocompleterResultTypes.TEXT_CHANNEL)) return [];
                    let l = A(T.AutocompleterResultTypes.TEXT_CHANNEL, this.options),
                        {
                            blacklist: s
                        } = this.options;
                    return f.default.queryChannels({
                        query: e,
                        guildId: null,
                        limit: t,
                        fuzzy: !0,
                        filter: null != s ? e => !s.has("channel:".concat(e.id)) : void 0,
                        boosters: l
                    })
                }
                queryVoiceChannels(e, t) {
                    if (!this._include(T.AutocompleterResultTypes.VOICE_CHANNEL)) return [];
                    let {
                        voiceChannelGuildFilter: l
                    } = this.options, s = A(T.AutocompleterResultTypes.VOICE_CHANNEL, this.options);
                    return f.default.queryChannels({
                        query: e,
                        guildId: l,
                        limit: t,
                        fuzzy: !0,
                        type: c.GUILD_VOCAL_CHANNELS_KEY,
                        boosters: s
                    })
                }
                queryGuilds(e, t) {
                    if (!this._include(T.AutocompleterResultTypes.GUILD)) return [];
                    let l = A(T.AutocompleterResultTypes.GUILD, this.options),
                        {
                            blacklist: s
                        } = this.options;
                    return f.default.queryGuilds({
                        query: e,
                        limit: t,
                        fuzzy: !0,
                        filter: null != s ? e => !s.has("guild:".concat(e.id)) : void 0,
                        boosters: l
                    })
                }
                queryUsers(e, t, l) {
                    let {
                        userSearchContext: s
                    } = this;
                    if (null == s || !this._include(T.AutocompleterResultTypes.USER)) return;
                    let {
                        userFilters: u
                    } = this.options;
                    void 0 !== t && R.default.requestMembers(t, e, 100), s.setLimit(l), s.setQuery(e, u, this._userBlacklist, A(T.AutocompleterResultTypes.USER, this.options))
                }
                queryGroupDMs(e, t) {
                    if (!this._include(T.AutocompleterResultTypes.GROUP_DM)) return [];
                    let {
                        blacklist: l
                    } = this.options, s = A(T.AutocompleterResultTypes.GROUP_DM, this.options);
                    return f.default.queryGroupDMs({
                        query: e,
                        limit: t,
                        fuzzy: !0,
                        filter: null != l ? e => !l.has("channel:".concat(e.id)) : void 0,
                        boosters: s
                    })
                }
                queryApplications(e, t) {
                    return this._include(T.AutocompleterResultTypes.APPLICATION) ? f.default.queryApplications({
                        query: e,
                        limit: t,
                        fuzzy: !0
                    }) : []
                }
                queryLink(e, t) {
                    let l;
                    if (!this._include(T.AutocompleterResultTypes.LINK)) return [];
                    let s = n.sanitizeUrl(e);
                    try {
                        l = new URL(s)
                    } catch (e) {
                        return []
                    }
                    let {
                        pathname: u,
                        hostname: i = "",
                        host: r
                    } = l, a = y.default.isDiscordHostname(i) || window.location.host === r;
                    return null !== u && a && y.default.isAppRoute(u) ? [{
                        type: T.AutocompleterResultTypes.LINK,
                        record: o.default.fromPath(u),
                        score: 1
                    }] : []
                }
                constructor(e, t, l = 100, s = g) {
                    this.query = "", this.options = g, this.results = [], this._userResults = [], this._groupDMResults = [], this._textChannelResults = [], this._voiceChannelResults = [], this._guildResults = [], this._applicationResults = [], this._linkResults = [], this._userBlacklist = null, this.parseUserResults = e => {
                        let {
                            results: t
                        } = e;
                        if (this._include(T.AutocompleterResultTypes.USER)) {
                            for (let {
                                    id: e,
                                    score: l,
                                    comparator: s
                                }
                                of(this._userResults = [], t)) {
                                let t = _.default.getUser(e);
                                null != t && this._userResults.push({
                                    type: T.AutocompleterResultTypes.USER,
                                    record: t,
                                    score: function() {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                            t = arguments.length > 1 ? arguments[1] : void 0;
                                        return 1e3 * e * (null != t ? t : 1)
                                    }(l),
                                    comparator: null != s ? s : void 0
                                })
                            }
                            this._userResults.length > this._limit && (this._userResults.length = this._limit), this.updateAllResults()
                        }
                    }, this.updateAllResults = () => {
                        clearTimeout(this._asyncTimeout), this.results = u([...this._userResults, ...this._groupDMResults, ...this._textChannelResults, ...this._voiceChannelResults, ...this._guildResults, ...this._linkResults]).uniqBy(e => "".concat(e.type, "-").concat(e.record.id)).sort(C.default).value(), this.onResultsChange(this.results, this.query)
                    }, this.onResultsChange = e, this.setOptions(s, !0), this._limit = l, this.createSearchContext(), this.setResultTypes(t)
                }
            }
        },
        447909: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                SearchContext: function() {
                    return T
                },
                default: function() {
                    return g
                }
            });
            var s, u, i = l("427964"),
                n = l.n(i),
                r = l("462567"),
                a = l("689988"),
                o = l("233069"),
                h = l("42203"),
                d = l("26989"),
                c = l("27618"),
                p = l("697218"),
                _ = l("449008"),
                f = l("158998");

            function R(e) {
                if (null == e || c.default.isBlocked(e.id)) return null;
                let t = {
                    id: e.id,
                    username: "0" !== e.discriminator ? "".concat(e.username, "#").concat(e.discriminator) : e.username
                };
                return null != f.default.getGlobalName(e) && (t.globalName = e.globalName), e.bot && (t.isBot = !0), c.default.isFriend(e.id) && (t.isFriend = !0, t.friendNickname = c.default.getNickname(e.id)), t
            }

            function y(e, t, l) {
                null != e && (e[t] = null != l && "" !== l ? l : null)
            }

            function E(e) {
                let t = [];
                if (null == e || !(0, o.isPrivate)(e.type)) return t;
                let {
                    recipients: l = []
                } = e;
                return l.forEach(l => {
                    let s = R(p.default.getUser(l));
                    null != e && y(s, e.id), t.push(s)
                }), t
            }

            function C(e, t) {
                let l = [];
                return e.forEach(e => {
                    let s = R(e.user);
                    null != s && (y(s, t, e.nick), l.push(s))
                }), l
            }(s = u || (u = {})).UPDATE_USERS = "UPDATE_USERS", s.USER_RESULTS = "USER_RESULTS", s.QUERY_SET = "QUERY_SET", s.QUERY_CLEAR = "QUERY_CLEAR";
            class T {
                setLimit(e) {
                    this._limit = e, null != this._nextQuery && (this._nextQuery.limit = e)
                }
                subscribe() {
                    null != this._worker && !this._subscribed && (this._worker.addEventListener("message", this.handleMessages, !1), this._subscribed = !0, this._setNextQuery())
                }
                unsubscribe() {
                    null != this._worker && this._subscribed && (this._worker.removeEventListener("message", this.handleMessages, !1), this._subscribed = !1)
                }
                destroy() {
                    this.clearQuery(), this.unsubscribe()
                }
                clearQuery() {
                    this._currentQuery = !1, this._nextQuery = null, null != this._worker && this._subscribed && this._worker.postMessage({
                        uuid: this._uuid,
                        type: u.QUERY_CLEAR
                    })
                }
                setQuery(e, t, l, s) {
                    null != e && (this._nextQuery = {
                        query: e,
                        filters: t,
                        blacklist: l,
                        boosters: null != s ? s : {},
                        limit: this._limit
                    }, this._setNextQuery())
                }
                _setNextQuery() {
                    (null == this._currentQuery || !1 === this._currentQuery) && null != this._nextQuery && (null != this._worker && this._subscribed ? (this._currentQuery = this._nextQuery, this._nextQuery = null, this._worker.postMessage({
                        uuid: this._uuid,
                        type: u.QUERY_SET,
                        payload: this._currentQuery
                    })) : !this._subscribed && this.subscribe())
                }
                constructor(e, t, l = 10) {
                    this.handleMessages = e => {
                        let t = e.data;
                        null != t && t.type === u.USER_RESULTS && t.uuid === this._uuid && (!1 !== this._currentQuery && this._callback(t.payload), null != this._currentQuery && (this._currentQuery = null), this._setNextQuery())
                    }, this._worker = e, this._uuid = (0, r.v4)(), this._callback = t, this._limit = l, this._currentQuery = null, this._nextQuery = null, this._subscribed = !1, this.subscribe()
                }
            }
            class m extends a.default {
                _initialize() {
                    this.rebootWebworker()
                }
                _terminate() {
                    null != this._worker && (this._worker.terminate(), this._worker = null)
                }
                rebootWebworker() {
                    null != this._worker && (this._worker.terminate(), this._worker = null), this._worker = new Worker(new URL(l.p + l.u("6297"), l.b))
                }
                updateUsers(e) {
                    let {
                        _worker: t
                    } = this;
                    null != t && (e = e.filter(_.isNotNullish), t.postMessage({
                        type: u.UPDATE_USERS,
                        payload: e
                    }))
                }
                getSearchContext(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                    this.initialize();
                    let {
                        _worker: l
                    } = this;
                    if (null == l) throw Error("SearchContextManager: No webworker initialized");
                    return new T(l, e, t)
                }
                constructor(...e) {
                    super(...e), this.actions = {
                        LOGOUT: () => this._handleLogout(),
                        POST_CONNECTION_OPEN: () => this._handleConnectionOpen(),
                        CONNECTION_OPEN_SUPPLEMENTAL: e => this._handleConnectionOpenSupplemental(e),
                        OVERLAY_INITIALIZE: e => this._handleOverlayInitialize(e),
                        CURRENT_USER_UPDATE: e => this._handleCurrentUserUpdate(e),
                        GUILD_CREATE: e => this._handleGuildCreate(e),
                        GUILD_MEMBERS_CHUNK: e => this._handleGuildMembersChunk(e),
                        GUILD_MEMBER_ADD: e => this._handleGuildMemberUpdate(e),
                        GUILD_MEMBER_UPDATE: e => this._handleGuildMemberUpdate(e),
                        RELATIONSHIP_ADD: e => this._handleRelationshipAdd(e),
                        RELATIONSHIP_UPDATE: e => this._handleRelationshipUpdate(e),
                        RELATIONSHIP_REMOVE: e => this._handleRelationshipRemove(e),
                        CHANNEL_CREATE: e => this._handleDMCreate(e),
                        CHANNEL_UPDATES: e => this._handleDMUpdates(e),
                        CHANNEL_RECIPIENT_ADD: e => this._handleRecipientChanges(e),
                        PASSIVE_UPDATE_V1: e => this._handlePassiveUpdateV1(e)
                    }, this._handleLogout = () => {
                        this.rebootWebworker()
                    }, this._handleConnectionOpen = () => {
                        setTimeout(() => {
                            let e = p.default.getCurrentUser();
                            if (null == e) return;
                            let t = R(e),
                                l = {
                                    [t.id]: t
                                };
                            Object.values(p.default.getUsers()).forEach(e => {
                                l[e.id] = R(e)
                            });
                            let s = d.default.getMutableAllGuildsAndMembers();
                            for (let e in s)
                                for (let t in s[e]) {
                                    var u, i;
                                    let n = l[t],
                                        r = null !== (i = null === (u = s[e][t]) || void 0 === u ? void 0 : u.nick) && void 0 !== i ? i : f.default.getGlobalName(n);
                                    null != n && (n[e] = null != r && "" !== r ? r : null)
                                }
                            this.updateUsers(Object.values(l))
                        }, 3e3)
                    }, this._handleConnectionOpenSupplemental = e => {
                        let {
                            guilds: t
                        } = e;
                        setTimeout(() => {
                            let e = n.flatMap(t, e => C(e.members, e.id));
                            this.updateUsers(e)
                        }, 3e3)
                    }, this._handleOverlayInitialize = e => {
                        let {
                            users: t,
                            guildMembers: l
                        } = e, s = new Map;
                        for (let e of t) s.set(e.id, R(e));
                        let u = Object.keys(l);
                        for (let e of u) {
                            let t = l[e];
                            if (null == t) continue;
                            let u = Object.keys(t);
                            for (let l of u) {
                                let u = s.get(l),
                                    i = t[l];
                                null != u && null != i && null != i.nick && (y(u, e, i.nick), s.set(l, u))
                            }
                        }
                        this.updateUsers(Array.from(s.values())), s.clear()
                    }, this._handleCurrentUserUpdate = e => {
                        let {
                            user: t
                        } = e, l = R(t);
                        null != l && this.updateUsers([l])
                    }, this._handleGuildCreate = e => {
                        let {
                            guild: t
                        } = e, {
                            members: l
                        } = t;
                        this.updateUsers(C(l, t.id))
                    }, this._handleGuildMembersChunk = e => {
                        let {
                            members: t,
                            guildId: l
                        } = e;
                        this.updateUsers(C(t, l))
                    }, this._handleGuildMemberUpdate = e => {
                        let {
                            guildId: t,
                            user: l,
                            nick: s
                        } = e, u = R(l);
                        null != u && (y(u, t, s), this.updateUsers([u]))
                    }, this._handlePassiveUpdateV1 = e => {
                        null != e.members && this.updateUsers(C(e.members, e.guildId))
                    }, this._handleRelationshipAdd = e => {
                        let t = R(e.relationship.user);
                        this.updateUsers([t])
                    }, this._handleRelationshipUpdate = e => {
                        let t = R(p.default.getUser(e.relationship.id));
                        this.updateUsers([t])
                    }, this._handleRelationshipRemove = e => {
                        let t = R(p.default.getUser(e.relationship.id));
                        this.updateUsers([t])
                    }, this._handleDMCreate = e => {
                        let {
                            channel: {
                                id: t
                            }
                        } = e, l = E(h.default.getChannel(t));
                        if (0 === l.length) return;
                        let s = R(p.default.getCurrentUser());
                        y(s, t), l.push(s), this.updateUsers(l)
                    }, this._handleDMUpdates = e => {
                        let {
                            channels: t
                        } = e;
                        for (let e of t) {
                            let t = E(h.default.getChannel(e.id));
                            if (0 === t.length) continue;
                            let l = R(p.default.getCurrentUser());
                            y(l, e.id), t.push(l), this.updateUsers(t)
                        }
                    }, this._handleRecipientChanges = e => {
                        let {
                            channelId: t,
                            user: l,
                            isMember: s
                        } = e;
                        if (!s) return;
                        let u = R(l);
                        y(u, t), this.updateUsers([u])
                    }
                }
            }
            var g = new m
        },
        108964: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                createHeaderResult: function() {
                    return u
                }
            });
            var s = l("375822");

            function u(e) {
                return {
                    type: s.AutocompleterResultTypes.HEADER,
                    record: new s.HeaderRecord(e),
                    score: 0
                }
            }
        },
        681643: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var s = l("679653"),
                u = l("42203"),
                i = l("27618"),
                n = l("697218"),
                r = l("375822"),
                a = l("49111");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default,
                    l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.default,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
                    h = t.getChannel(e);
                if (null == h) return null;
                let d = (0, s.computeChannelName)(h, l, o);
                switch (h.type) {
                    case a.ChannelTypes.DM: {
                        let e = l.getUser(h.getRecipientId());
                        if (null == e) return null;
                        return {
                            type: r.AutocompleterResultTypes.USER,
                            record: e,
                            score: 0,
                            comparator: d
                        }
                    }
                    case a.ChannelTypes.GROUP_DM:
                        return {
                            type: r.AutocompleterResultTypes.GROUP_DM, record: h, score: 0, comparator: d
                        };
                    case a.ChannelTypes.GUILD_VOICE:
                    case a.ChannelTypes.GUILD_STAGE_VOICE:
                        return {
                            type: r.AutocompleterResultTypes.VOICE_CHANNEL, record: h, score: 0, comparator: d
                        };
                    default:
                        return {
                            type: r.AutocompleterResultTypes.TEXT_CHANNEL, record: h, score: 0, comparator: d
                        }
                }
            }
        },
        940782: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return function e(t, l, u, i) {
                        let {
                            length: n
                        } = u, r = i, a = l;
                        if (0 === n) return 0;
                        if (null == r) r = a;
                        else if (r === a) return a;
                        if ((a += t === s.FindResultDirections.UP ? -1 : 1) < 0 || a >= n) return e(t, a < 0 ? n : -1, u, r);
                        let o = u[a];
                        return o.type === s.AutocompleterResultTypes.HEADER ? e(t, a, u, r) : a
                    }
                }
            });
            var s = l("375822")
        },
        123225: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                createHeaderResult: function() {
                    return i.createHeaderResult
                },
                findNextSelectedResult: function() {
                    return n.default
                },
                default: function() {
                    return r
                }
            });
            var s = l("337575"),
                u = l("375822");
            l.es(u, t);
            var i = l("108964"),
                n = l("940782");
            l("195547");
            var r = s.default
        },
        116460: function(e, t, l) {
            "use strict";
            let s;
            l.r(t), l.d(t, {
                default: function() {
                    return B
                }
            });
            var u = l("427964"),
                i = l.n(u),
                n = l("498225"),
                r = l("173333"),
                a = l("913144"),
                o = l("123225"),
                h = l("681643"),
                d = l("934306"),
                c = l("401690"),
                p = l("161778"),
                _ = l("271938"),
                f = l("42203"),
                R = l("474643"),
                y = l("923959"),
                E = l("26989"),
                C = l("305961"),
                T = l("957255"),
                m = l("660478"),
                g = l("18494"),
                A = l("162771"),
                I = l("282109"),
                U = l("25292"),
                N = l("449008"),
                S = l("49111"),
                v = l("782340");
            let L = "seenQSTutorial",
                O = [o.AutocompleterResultTypes.USER, o.AutocompleterResultTypes.GROUP_DM, o.AutocompleterResultTypes.TEXT_CHANNEL, o.AutocompleterResultTypes.GUILD, o.AutocompleterResultTypes.APPLICATION, o.AutocompleterResultTypes.LINK],
                D = 0,
                M = !1,
                b = !1,
                H = null,
                k = [],
                G = null,
                Q = 0,
                P = [],
                q = [];

            function w() {
                b = C.default.getGuildCount() >= 3 || i.size(f.default.getMutablePrivateChannels()) >= 20, P = []
            }

            function x(e) {
                let t = (0, h.default)(e);
                return null == t || null != H && H !== t.type ? null : t
            }

            function W(e) {
                var t;
                let {
                    query: l,
                    queryMode: u
                } = e, i = (0, d.isSplitMessagesTabAndOnMessagesTab)() ? void 0 : null !== (t = A.default.getGuildId()) && void 0 !== t ? t : void 0, n = new Set(["user:".concat(_.default.getId())]);
                null != i && n.add("guild:".concat(i)), s = null != s ? s : new o.default(K, O, null != u ? 100 : 5, {
                    frecencyBoosters: !0,
                    blacklist: n
                }), G = null, Q = l.length, H = u, s.search(l)
            }

            function K(e, t) {
                ! function(e, t) {
                    if (e.length !== t.length) return !1;
                    for (let l = 0; l < e.length; l++) {
                        let s = e[l],
                            u = t[l];
                        if (s.record.id !== u.record.id) return !1
                    }
                    return !0
                }(e = "" === (t = t.trim()).trim() ? function() {
                    var e, t;
                    let l = null !== (e = A.default.getGuildId()) && void 0 !== e ? e : void 0,
                        s = null !== (t = g.default.getChannelId()) && void 0 !== t ? t : void 0;
                    switch (H) {
                        case o.AutocompleterResultTypes.USER: {
                            let e = _.default.getId();
                            return U.default.getRecentlyTalked(s, 100).filter(t => {
                                let {
                                    record: l
                                } = t;
                                return l.id !== e
                            })
                        }
                        case o.AutocompleterResultTypes.APPLICATION:
                            return U.default.queryApplications({
                                query: "",
                                limit: 100,
                                fuzzy: !0
                            });
                        case o.AutocompleterResultTypes.GUILD:
                            return U.default.queryGuilds({
                                query: "",
                                limit: 100,
                                fuzzy: !0
                            });
                        case o.AutocompleterResultTypes.TEXT_CHANNEL:
                            return U.default.queryChannels({
                                query: "",
                                guildId: A.default.getGuildId(),
                                limit: 100,
                                fuzzy: !0
                            });
                        case o.AutocompleterResultTypes.VOICE_CHANNEL:
                            return U.default.queryChannels({
                                query: "",
                                guildId: A.default.getGuildId(),
                                limit: 100,
                                fuzzy: !0,
                                filter: () => !0,
                                type: y.GUILD_VOCAL_CHANNELS_KEY
                            })
                    }
                    let u = [],
                        n = [];
                    for (let e = 1; e < q.length; e += 1) {
                        let t = x(q[e]);
                        if (null != t)(t.type !== o.AutocompleterResultTypes.TEXT_CHANNEL && t.type !== o.AutocompleterResultTypes.VOICE_CHANNEL || T.default.can(S.Permissions.VIEW_CHANNEL, t.record)) && n.push(t)
                    }
                    n.length > 0 && u.push((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_LAST_CHANNEL), ...n);
                    let r = function(e) {
                        let t = [];
                        return R.default.getRecentlyEditedDrafts(R.DraftType.ChannelMessage).forEach(l => {
                            let {
                                channelId: s
                            } = l;
                            if (e(s)) return;
                            let u = x(s);
                            null != u && t.push(u)
                        }), t
                    }(e => e === s || q.includes(e));
                    r.length > 0 && u.push((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_DRAFTS), ...r);
                    let a = m.default.getMentionChannelIds().filter(e => e !== s && !q.includes(e)).map(e => x(e)).filter(N.isNotNullish).reverse();
                    if (a.length > 0 && (u.push((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_MENTIONS)), u = u.concat(a)), null != l) {
                        let e = y.default.getSelectableChannelIds(l).filter(e => {
                            let t = f.default.getChannel(e);
                            return !(null == t || e === s || q.includes(e) || I.default.isChannelMuted(t.guild_id, e) || null != t.parent_id && I.default.isChannelMuted(t.guild_id, t.parent_id)) && m.default.hasRelevantUnread(t)
                        }).map(e => x(e)).filter(e => e);
                        Object.values(c.default.getActiveJoinedUnreadThreadsForGuild(l)).forEach(t => {
                            for (let l in t) {
                                let t = x(l);
                                null != t && e.push(t)
                            }
                        }), e.length > 0 && (u.push((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_UNREAD_CHANNELS)), u = u.concat(e))
                    }
                    return i(u).uniqBy(e => e.record.id).value()
                }() : e, P) && (P = e, ! function(e, t) {
                    switch (H) {
                        case o.AutocompleterResultTypes.USER: {
                            let t = C.default.getGuild(A.default.getGuildId());
                            e.unshift((0, o.createHeaderResult)(null != t ? v.default.Messages.QUICKSWITCHER_QUERYMODE_USERS_IN_GUILD.format({
                                name: t.name
                            }) : v.default.Messages.QUICKSWITCHER_QUERYMODE_USERS)), k = e;
                            break
                        }
                        case o.AutocompleterResultTypes.TEXT_CHANNEL:
                            e.unshift((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_QUERYMODE_TEXT_CHANNELS)), k = e;
                            break;
                        case o.AutocompleterResultTypes.VOICE_CHANNEL:
                            e.unshift((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_QUERYMODE_VOICE_CHANNELS)), k = e;
                            break;
                        case o.AutocompleterResultTypes.GUILD:
                            e.unshift((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_QUERYMODE_GUILDS)), k = e;
                            break;
                        case o.AutocompleterResultTypes.APPLICATION:
                            e.unshift((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_QUERYMODE_APPLICATIONS)), k = e;
                            break;
                        default:
                            k = e
                    }
                    if (t !== G) G = t, Q = Math.max(t.length, Q), D = (0, o.findNextSelectedResult)(o.FindResultDirections.DOWN, -1, k);
                    else {
                        let e = k[D];
                        null != e && e.type === o.AutocompleterResultTypes.HEADER && (D = (0, o.findNextSelectedResult)(o.FindResultDirections.DOWN, D, k))
                    }
                    F.emitChange()
                }(e, t))
            }

            function z() {
                G = null, Q = 0, P = [], null != s && (s.destroy(), s = null)
            }
            class V extends n.default.PersistedStore {
                initialize(e) {
                    var t;
                    this.waitFor(E.default, C.default, f.default), this.syncWith([p.default], () => !0), M = r.default.get(L) || !1, q = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : []
                }
                getState() {
                    return {
                        channelHistory: q
                    }
                }
                isOpen() {
                    return null != s
                }
                getResultTotals(e) {
                    return null == s ? 0 : null == e ? s.results.reduce((e, t) => t.type !== o.AutocompleterResultTypes.HEADER ? e + 1 : e, 0) : s.results.reduce((t, l) => l.type === e ? t + 1 : t, 0)
                }
                channelNoticePredicate(e, t) {
                    let l = Date.now() - t >= S.CHANNEL_NOTICE_SHOW_DELAY;
                    return b && l
                }
                getFrequentGuilds() {
                    return null != s ? s.queryGuilds("", 100) : null
                }
                getFrequentGuildsLength() {
                    return null != s ? s.queryGuilds("", 100).length : 0
                }
                getChannelHistory() {
                    return q
                }
                getProps() {
                    return {
                        theme: p.default.theme,
                        query: null != s ? s.query : "",
                        queryMode: H,
                        results: k,
                        selectedIndex: D,
                        seenTutorial: M,
                        maxQueryLength: Q
                    }
                }
            }
            V.displayName = "QuickSwitcherStore", V.persistKey = "QuickSwitcherStore";
            let F = new V(a.default, {
                CONNECTION_OPEN: w,
                CONNECTION_OPEN_SUPPLEMENTAL: w,
                QUICKSWITCHER_SHOW: W,
                SHOW_ACTION_SHEET_QUICK_SWITCHER: W,
                QUICKSWITCHER_HIDE: z,
                OVERLAY_SET_INPUT_LOCKED: z,
                HIDE_ACTION_SHEET_QUICK_SWITCHER: z,
                QUICKSWITCHER_SEARCH: function(e) {
                    var t, l;
                    let {
                        query: u,
                        queryMode: i
                    } = e;
                    if (null == s) return !1;
                    let n = null !== (t = A.default.getGuildId()) && void 0 !== t ? t : null;
                    if (H !== i) {
                        s.setResultTypes(null != i ? [i] : O), s.setLimit(null != i ? 100 : 5);
                        let e = null !== (l = A.default.getGuildId()) && void 0 !== l ? l : void 0;
                        i === o.AutocompleterResultTypes.USER && null != e ? s.setOptions({
                            userFilters: {
                                guild: e,
                                friends: !0
                            }
                        }, !0) : i === o.AutocompleterResultTypes.VOICE_CHANNEL ? s.setOptions({
                            voiceChannelGuildFilter: null
                        }, !0) : s.setOptions({
                            userFilters: null,
                            voiceChannelGuildFilter: void 0
                        }, !0)
                    }
                    H = i, s.search(u, H === o.AutocompleterResultTypes.USER ? n : void 0)
                },
                QUICKSWITCHER_SELECT: function(e) {
                    D = e.selectedIndex
                },
                QUICKSWITCHER_SWITCH_TO: function() {
                    if (M) return !1;
                    M = !0, r.default.set(L, !0)
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t) return !1;
                    (q = q.filter(e => e !== t)).unshift(t), q.length > 4 && (q.length = 4)
                }
            });
            var B = F
        },
        741347: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var s = l("666038");
            class u extends s.default {
                static fromPath(e) {
                    return new u({
                        id: e,
                        path: e
                    })
                }
                constructor(e) {
                    super(), this.id = e.id, this.path = e.path
                }
            }
            var i = u
        },
        319781: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            });
            var s, u, i = l("498225"),
                n = l("173333"),
                r = l("913144"),
                a = l("80507"),
                o = l("42203"),
                h = l("305961"),
                d = l("18494"),
                c = l("162771");
            let p = "selectedChannelGuildFrecency",
                _ = new a.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return 0 === e ? t = 100 : e >= 1 && e < 2 ? t = 70 : e >= 2 && e < 4 ? t = 50 : e >= 4 && e < 7 ? t = 30 : e >= 7 && (t = 10), t
                    },
                    lookupKey: e => null !== (u = null !== (s = h.default.getGuild(e)) && void 0 !== s ? s : o.default.getChannel(e)) && void 0 !== u ? u : o.default.getChannel(o.default.getDMFromUserId(e)),
                    afterCompute: e => {
                        !__OVERLAY__ && n.default.set(p, e)
                    },
                    numFrequentlyItems: 100,
                    maxSamples: 10
                }),
                f = null,
                R = null;

            function y(e) {
                let {
                    guildId: t,
                    channelId: l
                } = e;
                return l !== f && (f = null != l ? l : null, null != l && _.track(l)), null != t && t !== R && (R = t, _.track(t)), !1
            }

            function E() {
                return _.markDirty(), !1
            }
            class C extends i.default.Store {
                initialize() {
                    this.waitFor(c.default, d.default);
                    let e = n.default.get(p, null);
                    null != e && _.overwriteHistory(e)
                }
                get frecency() {
                    return _
                }
                getFrequently() {
                    return _.frequently
                }
                getScore(e) {
                    var t;
                    return null !== (t = _.getFrecency(e)) && void 0 !== t ? t : 0
                }
                getScoreForDM(e) {
                    let t = o.default.getDMFromUserId(e);
                    return null != t ? this.getScore(t) : 0
                }
                getMaxScore() {
                    return 1e3
                }
                getBonusScore() {
                    return 100
                }
            }
            C.displayName = "FrecencyStore";
            var T = new C(r.default, {
                CONNECTION_OPEN: E,
                OVERLAY_INITIALIZE: E,
                VOICE_CHANNEL_SELECT: y,
                CHANNEL_SELECT: y
            })
        }
    }
]);
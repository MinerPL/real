            "use strict";
            l.r(t), l.d(t, {
                SearchContext: function() {
                    return g
                },
                default: function() {
                    return m
                }
            }), l("424973"), l("511434"), l("313619"), l("654714"), l("287168"), l("956660"), l("222007"), l("70102"), l("854508"), l("881410");
            var s, u, i = l("917351"),
                n = l.n(i),
                r = l("748820"),
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
            }(u = s || (s = {})).UPDATE_USERS = "UPDATE_USERS", u.USER_RESULTS = "USER_RESULTS", u.QUERY_SET = "QUERY_SET", u.QUERY_CLEAR = "QUERY_CLEAR";
            class g {
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
                        type: "QUERY_CLEAR"
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
                        type: "QUERY_SET",
                        payload: this._currentQuery
                    })) : !this._subscribed && this.subscribe())
                }
                constructor(e, t, l = 10) {
                    this.handleMessages = e => {
                        let t = e.data;
                        null != t && "USER_RESULTS" === t.type && t.uuid === this._uuid && (!1 !== this._currentQuery && this._callback(t.payload), null != this._currentQuery && (this._currentQuery = null), this._setNextQuery())
                    }, this._worker = e, this._uuid = (0, r.v4)(), this._callback = t, this._limit = l, this._currentQuery = null, this._nextQuery = null, this._subscribed = !1, this.subscribe()
                }
            }
            class T extends a.default {
                _initialize() {
                    this.rebootWebworker()
                }
                _terminate() {
                    null != this._worker && (this._worker.terminate(), this._worker = null)
                }
                rebootWebworker() {
                    null != this._worker && (this._worker.terminate(), this._worker = null), this._worker = new Worker(new URL(l.p + l.u("76730"), l.b))
                }
                updateUsers(e) {
                    let {
                        _worker: t
                    } = this;
                    null != t && (e = e.filter(_.isNotNullish), t.postMessage({
                        type: "UPDATE_USERS",
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
                    return new g(l, e, t)
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
            var m = new T
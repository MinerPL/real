            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("424973");
            var a = n("917351"),
                s = n.n(a),
                i = n("446674"),
                l = n("913144"),
                r = n("736964"),
                o = n("666038"),
                u = n("449004"),
                d = n("373469"),
                c = n("26989"),
                E = n("305961"),
                f = n("824563"),
                _ = n("27618"),
                h = n("697218"),
                C = n("49111");

            function T(e) {
                let t = h.default.getUser(e);
                return {
                    user: t,
                    usernameLower: null != t ? t.username.toLowerCase() : null
                }
            }

            function I(e) {
                return {
                    status: f.default.getStatus(e),
                    isMobile: f.default.isMobileOnline(e),
                    activities: f.default.getActivities(e),
                    applicationStream: d.default.getAnyStreamForUser(e)
                }
            }

            function S(e) {
                let t = [];
                return s(c.default.memberOf(e)).map(E.default.getGuild).sortBy(e => null != e ? e.name.toLowerCase() : null).forEach(e => {
                    null != e && t.push(e)
                }), {
                    mutualGuildsLength: t.length,
                    mutualGuilds: t.slice(0, 5)
                }
            }
            class N extends o.default {
                get comparator() {
                    var e, t, n, a, s;
                    return [this.type, null !== (s = null !== (a = null === (e = this.nickname) || void 0 === e ? void 0 : e.toLowerCase()) && void 0 !== a ? a : null === (n = this.user) || void 0 === n ? void 0 : null === (t = n.globalName) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== s ? s : this.usernameLower]
                }
                constructor(e) {
                    super(), this.key = e.key, this.type = e.type, this.status = e.status, this.activities = e.activities, this.applicationStream = e.applicationStream, this.user = e.user, this.isMobile = e.isMobile, this.usernameLower = e.usernameLower, this.mutualGuildsLength = e.mutualGuildsLength, this.mutualGuilds = e.mutualGuilds, this.nickname = e.nickname
                }
            }
            class A {
                reset() {
                    let e = s.map(_.default.getRelationships(), (e, t) => new N({
                            key: t,
                            type: e,
                            nickname: _.default.getNickname(t),
                            ...T(t),
                            ...I(t),
                            ...S(t)
                        })),
                        t = s.map(u.default.getSuggestions(), e => new N({
                            key: e.key,
                            type: 99,
                            nickname: e.name,
                            ...T(e.key),
                            ...I(e.key),
                            ...S(e.key)
                        }));
                    return new A(s.concat(e, t))
                }
                clone() {
                    return new A(this._rows)
                }
                update(e) {
                    let t = !1;
                    for (let n = 0; n < this._rows.length; n++) {
                        let a = this._rows[n],
                            s = a.merge(e(a.key));
                        t = t || s !== a, this._rows[n] = s
                    }
                    return t
                }
                filter(e, t) {
                    let n = s(this._rows).filter(e => {
                        if (null == e.user) return !1;
                        if (null != t && "" !== t) {
                            let n = t.toLowerCase(),
                                a = [e.usernameLower, e.nickname, e.user.globalName].map(e => null == e ? void 0 : e.toLowerCase());
                            return a.some(e => null == e ? void 0 : e.includes(n))
                        }
                        return !0
                    }).filter(t => {
                        switch (e) {
                            case C.FriendsSections.ONLINE:
                                return t.type === C.RelationshipTypes.FRIEND && t.status !== C.StatusTypes.OFFLINE;
                            case C.FriendsSections.PENDING:
                                return t.type === C.RelationshipTypes.PENDING_INCOMING || t.type === C.RelationshipTypes.PENDING_OUTGOING;
                            case C.FriendsSections.SUGGESTIONS:
                                return 99 === t.type;
                            case C.FriendsSections.BLOCKED:
                                return t.type === C.RelationshipTypes.BLOCKED;
                            case C.FriendsSections.ALL:
                            default:
                                return t.type === C.RelationshipTypes.FRIEND
                        }
                    }).sortBy(e => e.comparator).value();
                    return n
                }
                getRelationshipCounts() {
                    let e = {
                        [C.RelationshipTypes.FRIEND]: 0,
                        [C.RelationshipTypes.PENDING_INCOMING]: 0,
                        [C.RelationshipTypes.PENDING_OUTGOING]: 0,
                        99: 0,
                        [C.RelationshipTypes.BLOCKED]: 0
                    };
                    return this._rows.forEach(t => {
                        null != t.user && null != e[t.type] && e[t.type]++
                    }), e
                }
                constructor(e = []) {
                    this._rows = e
                }
            }
            let p = !0,
                m = !1,
                g = C.FriendsSections.ONLINE,
                R = new A,
                O = !0,
                L = !1;

            function v() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                p && (e || g !== C.FriendsSections.ONLINE && g !== C.FriendsSections.ADD_FRIEND) && !m && (p = !1, m = !0, r.default.fetchRelationships())
            }

            function M() {
                if (p = !0, O ? m = !1 : v(), R = R.reset(), L) return;
                let e = R.getRelationshipCounts();
                g = 0 === e[C.RelationshipTypes.FRIEND] ? 0 !== e[C.RelationshipTypes.PENDING_INCOMING] ? C.FriendsSections.PENDING : C.FriendsSections.ADD_FRIEND : C.FriendsSections.ONLINE
            }

            function P() {
                R = O ? new A : R.reset()
            }

            function D(e) {
                return function() {
                    return !O && !!R.update(e) && (R = R.clone(), !0)
                }
            }
            class y extends i.default.Store {
                initialize() {
                    this.waitFor(_.default, f.default, h.default, E.default, c.default, d.default, u.default), this.syncWith([_.default], P), this.syncWith([u.default], P), this.syncWith([h.default], D(T)), this.syncWith([f.default, d.default], D(I)), M()
                }
                getState() {
                    return {
                        fetching: m,
                        section: g,
                        pendingCount: _.default.getPendingCount(),
                        rows: R
                    }
                }
            }
            y.displayName = "FriendsStore";
            var x = new y(l.default, {
                CONNECTION_OPEN: function() {
                    M()
                },
                FRIENDS_SET_SECTION: function(e) {
                    g = e.section, v()
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return O = null != t, P(), !O
                },
                LOAD_RELATIONSHIPS_SUCCESS: function() {
                    m = !1
                },
                LOAD_RELATIONSHIPS_FAILURE: function() {
                    p = !0, m = !0
                },
                DRAWER_SELECT_TAB: function(e) {
                    let {
                        tab: t
                    } = e;
                    return O = t !== C.DrawerTabTypes.FRIENDS, P(), !O
                },
                FRIENDS_SET_INITIAL_SECTION: function(e) {
                    g = e.section, L = !0
                }
            })
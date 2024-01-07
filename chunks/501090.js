            "use strict";
            let a;
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            }), n("222007"), n("808653"), n("424973");
            var l = n("917351"),
                s = n.n(l),
                i = n("446674"),
                r = n("913144"),
                o = n("447909"),
                u = n("233069"),
                d = n("159885"),
                c = n("158998"),
                f = n("42203"),
                h = n("319781"),
                p = n("27618"),
                m = n("697218"),
                E = n("49111");
            let C = !1,
                g = "",
                S = 0,
                _ = [],
                I = !1,
                T = new Set,
                v = null;

            function x() {
                g = "", S = 0, _ = [], T = new Set, C = !1, v = null
            }

            function N(e) {
                g = e, S = 0, A()
            }

            function A() {
                if (!C) return !1;
                let e = f.default.getChannel(v);
                if (0 === g.trim().length) return null != a && a.clearQuery(), _ = function(e) {
                    let t = p.default.getFriendIDs();
                    return (null == e ? void 0 : e.isPrivate()) && (t = t.filter(t => !e.recipients.includes(t))), t.reduce((e, t) => {
                        let n = m.default.getUser(t);
                        return null == n ? e : (e.push({
                            user: n
                        }), e)
                    }, []).sort(R)
                }(e), !0;
                let t = null != e ? e.recipients : [];
                return null != a && a.setQuery(g, {
                    friends: !0
                }, t, function() {
                    let e = h.default.getFrequentlyWithoutFetchingLatest(),
                        t = e.filter(e => e instanceof u.PrivateChannelRecord && e.isDM()),
                        n = Math.max(...t.map(e => {
                            let {
                                id: t
                            } = e;
                            return h.default.getScoreWithoutFetchingLatest(t)
                        })),
                        a = {};
                    return t.forEach(e => {
                        let t = h.default.getScoreWithoutFetchingLatest(e.id),
                            l = e.getRecipientId(),
                            s = p.default.isFriend(l) ? .2 : 0,
                            i = null != f.default.getDMFromUserId(l) ? .1 : 0;
                        a[l] = 1 + t / n + s + i
                    }), a
                }()), !1
            }

            function M() {
                if (!C) return !1;
                let e = I;
                return (I = s.some(p.default.getRelationships(), e => e === E.RelationshipTypes.FRIEND)) !== e
            }

            function R(e, t) {
                return (0, d.stripDiacritics)(c.default.getName(e.user).toLocaleLowerCase()).localeCompare((0, d.stripDiacritics)(c.default.getName(t.user).toLocaleLowerCase()))
            }

            function j(e) {
                let {
                    results: t
                } = e;
                C && "" !== g && (_ = t.map(e => {
                    let {
                        id: t
                    } = e;
                    return {
                        user: m.default.getUser(t)
                    }
                }).filter(e => null != e.user), D.emitChange())
            }

            function L() {
                return null != a && (a.destroy(), a = null), o.default.getSearchContext(j, 1e3)
            }

            function O(e) {
                if (e.key !== E.NEW_GROUP_DM_POPOUT_ID) return !1;
                C = !0, M(), a = L(), v = null, N("")
            }

            function y(e) {
                if (e.key !== E.NEW_GROUP_DM_POPOUT_ID) return !1;
                b()
            }

            function b() {
                null != a && (a.destroy(), a = null), x()
            }
            class P extends i.default.Store {
                initialize() {
                    this.waitFor(m.default, f.default, p.default), this.syncWith([m.default, f.default], A), this.syncWith([p.default], M)
                }
                getResults() {
                    return _
                }
                hasFriends() {
                    return I
                }
                getSelectedUsers() {
                    return T
                }
                getQuery() {
                    return g
                }
                getState() {
                    return {
                        query: g,
                        selectedRow: S,
                        selectedUsers: T,
                        results: _,
                        hasFriends: I
                    }
                }
            }
            P.displayName = "PrivateChannelRecipientsInviteStore";
            let D = new P(r.default, {
                CONNECTION_OPEN: function() {
                    x()
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    if (null != t) return !1;
                    let a = C;
                    return x(), C = a, v = n, A()
                },
                MODAL_PUSH: O,
                SHOW_ACTION_SHEET: O,
                PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function(e) {
                    C = !0, M(), a = L(), v = e.channelId, N("")
                },
                MODAL_POP: y,
                HIDE_ACTION_SHEET: y,
                PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: b,
                PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function(e) {
                    v = e.channelId, N(e.query)
                },
                PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function(e) {
                    S = e.row
                },
                PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function(e) {
                    let {
                        userId: t
                    } = e;
                    T.add(t), T = new Set(T)
                },
                PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function(e) {
                    let {
                        userId: t
                    } = e;
                    T.delete(t), T = new Set(T)
                }
            });
            var U = D
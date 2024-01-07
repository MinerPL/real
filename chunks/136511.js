            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            }), n("222007"), n("424973");
            var i = n("446674"),
                a = n("913144"),
                l = n("398604");
            n("21121");
            var s = n("692038"),
                r = n("719926"),
                u = n("305961");
            n("27618");
            var o = n("697218"),
                d = n("299039"),
                c = n("159885");
            n("158998");
            var _ = n("360191"),
                E = n("342176"),
                f = n("49111"),
                h = n("782340");
            let p = {
                loading: !1,
                initialized: !1,
                errored: !1,
                isDataStale: !1,
                notifCenterItems: [],
                staleNotifCenterItems: [],
                notifCenterIds: new Set,
                notifCenterLocalItems: [],
                paginationHasMore: !0,
                paginationCursor: void 0,
                notifCenterActive: !1,
                notifCenterTabFocused: !1
            };

            function T(e) {
                return null != e.id && null != e.body && null != e.type
            }

            function C() {
                p = {
                    loading: !1,
                    initialized: !1,
                    errored: !1,
                    isDataStale: !1,
                    notifCenterItems: [],
                    staleNotifCenterItems: [],
                    notifCenterIds: new Set,
                    notifCenterLocalItems: [],
                    paginationHasMore: !0,
                    paginationCursor: void 0,
                    notifCenterActive: !1,
                    notifCenterTabFocused: !1
                }
            }

            function m(e) {
                return {
                    ...e,
                    kind: "notification-center-item",
                    message: null != e.message ? (0, s.createMessageRecord)(e.message) : void 0
                }
            }

            function S(e) {
                let t = "NOTIFICATION_CENTER_ITEM_CREATE" === e.type ? m(e.item) : e.item;
                if (!p.initialized || !T(t) || p.notifCenterIds.has(t.id)) return !1;
                p.notifCenterIds.add(t.id), p.notifCenterItems = [t, ...p.notifCenterItems], p.notifCenterItems.sort((e, t) => d.default.compare(t.id, e.id))
            }

            function I(e, t) {
                p.notifCenterItems = p.notifCenterItems.map(n => e.includes(n.id) ? {
                    ...n,
                    acked: t
                } : n).filter(T)
            }

            function g(e, t, n) {
                var i;
                return e.type === t && (null === (i = e.other_user) || void 0 === i ? void 0 : i.id) === n
            }

            function A(e) {
                var t;
                if (!(0, l.isGuildEventEnded)(e)) return;
                let n = t => t.type === _.NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id,
                    i = e.name,
                    a = null === (t = u.default.getGuild(e.guild_id)) || void 0 === t ? void 0 : t.name;
                p.notifCenterItems = p.notifCenterItems.map(e => n(e) ? {
                    ...e,
                    disable_action: !0,
                    body: (0, c.isNullOrEmpty)(a) || (0, c.isNullOrEmpty)(i) ? e.body : h.default.Messages.NOTIFICATION_CENTER_GUILD_SCHEDULED_EVENT_ENDED.format({
                        event_name: i,
                        guild_name: a
                    })
                } : e)
            }
            class N extends i.default.PersistedStore {
                initialize(e) {
                    if (this.waitFor(o.default), null != e) {
                        let t = e.notifCenterItems.map(e => ({
                            ...e,
                            message: null != e.message ? new r.default(e.message) : void 0
                        }));
                        t.length > 0 && (p = {
                            ...p,
                            initialized: !0,
                            isDataStale: !0,
                            notifCenterItems: [],
                            staleNotifCenterItems: t
                        })
                    }
                }
                getState() {
                    let e = e => ({
                        ...e,
                        message: null != e.message ? e.message.toJS() : void 0
                    });
                    return {
                        ...p,
                        notifCenterItems: p.notifCenterItems.map(e),
                        staleNotifCenterItems: p.staleNotifCenterItems.map(e)
                    }
                }
                get loading() {
                    return p.loading
                }
                get initialized() {
                    return p.initialized
                }
                get items() {
                    return p.isDataStale ? p.staleNotifCenterItems : p.notifCenterItems
                }
                get hasMore() {
                    return p.paginationHasMore
                }
                get cursor() {
                    return p.paginationCursor
                }
                get errored() {
                    return p.errored
                }
                get active() {
                    return p.notifCenterActive
                }
                get localItems() {
                    return p.notifCenterLocalItems
                }
                get tabFocused() {
                    return p.notifCenterTabFocused
                }
            }
            N.displayName = "NotificationCenterItemsStore", N.persistKey = "NotificationCenterItemsStore_v2";
            var O = new N(a.default, {
                CONNECTION_OPEN: function(e) {
                    C(), h.default.initialLanguageLoad.then(() => {
                        let t = [];
                        e.relationships.forEach(e => {
                            let {
                                type: n,
                                user: i,
                                since: a
                            } = e;
                            if (n !== f.RelationshipTypes.PENDING_INCOMING || null == i || null == a) return null;
                            let l = o.default.getUser(i.id);
                            if (null == l) return null;
                            let s = (0, E.incomingFriendRequestLocalItem)(l, a);
                            t.push(s)
                        }), e.guilds.forEach(e => {
                            e.guild_scheduled_events.forEach(e => {
                                A(e)
                            })
                        }), p.notifCenterLocalItems = t
                    })
                },
                LOGOUT: C,
                NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
                    let {
                        ids: t
                    } = e;
                    I(t, !0)
                },
                NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: function(e) {
                    let {
                        ids: t
                    } = e;
                    I(t, !1)
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    A(t)
                },
                NOTIFICATION_CENTER_ITEM_CREATE: S,
                NOTIFICATION_CENTER_ITEM_DELETE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (!p.notifCenterIds.has(t)) return !1;
                    p.notifCenterIds.delete(t), p.notifCenterItems = p.notifCenterItems.filter(e => e.id !== t)
                },
                NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: S,
                LOAD_NOTIFICATION_CENTER_ITEMS: function() {
                    p.loading = !0
                },
                LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: function() {
                    p.loading = !1, p.initialized = !0, p.errored = !0
                },
                LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function(e) {
                    let {
                        items: t,
                        hasMore: n,
                        cursor: i
                    } = e;
                    p.loading && (p.loading = !1, p.initialized = !0, p.errored = !1, p.isDataStale = !1, (null == i || !p.notifCenterIds.has(i)) && (p.paginationHasMore = t.length > 0 && n, p.paginationCursor = t.length > 0 ? i : void 0), p.notifCenterItems = [...p.notifCenterItems, ...t.map(m).filter(e => !p.notifCenterIds.has(e.id))], p.notifCenterItems.sort((e, t) => d.default.compare(t.id, e.id)), t.forEach(e => p.notifCenterIds.add(e.id)))
                },
                RESET_NOTIFICATION_CENTER: C,
                NOTIFICATION_CENTER_SET_ACTIVE: function(e) {
                    let {
                        active: t
                    } = e;
                    p.notifCenterActive = t
                },
                NOTIFICATION_CENTER_TAB_FOCUSED: function(e) {
                    let {
                        focused: t
                    } = e;
                    p.notifCenterTabFocused = t
                },
                RELATIONSHIP_ADD: function(e) {
                    if (e.relationship.type === f.RelationshipTypes.PENDING_INCOMING) {
                        let {
                            user: t,
                            since: n
                        } = e.relationship;
                        if (null == n) return null;
                        let i = o.default.getUser(t.id);
                        if (null == i) return null;
                        p.notifCenterLocalItems = [...p.notifCenterLocalItems, (0, E.incomingFriendRequestLocalItem)(i, n)]
                    }
                    e.relationship.type === f.RelationshipTypes.FRIEND && (p.notifCenterLocalItems = p.notifCenterLocalItems.map(t => {
                        if (g(t, _.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, e.relationship.user.id)) {
                            var n;
                            let i = o.default.getUser(e.relationship.user.id);
                            return {
                                ...t,
                                acked: !0,
                                forceUnacked: !1,
                                local_id: "incoming_friend_requests_accepted_".concat(e.relationship.user.id, "_").concat(t.id),
                                type: _.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED,
                                body: h.default.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST_ACCEPTED.format({
                                    username: "**".concat(null !== (n = null == i ? void 0 : i.globalName) && void 0 !== n ? n : e.relationship.user.username, "**")
                                })
                            }
                        }
                        return t
                    }))
                },
                RELATIONSHIP_REMOVE: function(e) {
                    p.notifCenterLocalItems = p.notifCenterLocalItems.filter(t => !(g(t, _.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, e.relationship.id) || g(t, _.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id)) && !0)
                },
                NOTIFICATION_CENTER_ITEM_COMPLETED: function(e) {
                    let {
                        item_enum: t
                    } = e;
                    p.notifCenterItems = p.notifCenterItems.map(e => e.item_enum === t ? {
                        ...e,
                        completed: !0,
                        acked: !0
                    } : e).filter(T)
                },
                NOTIFICATION_CENTER_ITEM_UPDATE: function(e) {
                    let {
                        item: t
                    } = e;
                    p.notifCenterItems = p.notifCenterItems.map(e => e.id === t.id ? t : e).filter(T)
                },
                SET_RECENT_MENTIONS_FILTER: C
            })
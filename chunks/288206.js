            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            }), n("222007");
            var i, a, l, s = n("446674"),
                r = n("95410"),
                u = n("913144"),
                o = n("105059"),
                d = n("605250"),
                c = n("271938"),
                _ = n("42203"),
                E = n("162771"),
                f = n("299039"),
                h = n("91131"),
                p = n("70754"),
                T = n("548578");
            let C = new d.default("ClientStateStore"),
                m = h.initialState.nonce,
                S = h.initialState.useGuildVersions,
                I = h.initialState.highestLastMessageId,
                g = h.initialState.readStateVersion,
                A = h.initialState.userGuildSettingsVersion,
                N = null !== (i = h.initialState.userSettingsVersion) && void 0 !== i ? i : -1,
                O = h.initialState.cacheCreationDate,
                R = h.initialState.apiCodeVersion,
                y = null !== (a = h.initialState.privateChannelsVersion) && void 0 !== a ? a : "0",
                v = new Set(null !== (l = h.initialState.guildIdsRequiringDeletedIdsSync) && void 0 !== l ? l : []),
                M = h.initialState.lastSelectedGuildId,
                L = !1;

            function D(e) {
                null != e && 1 === f.default.compare(e, I) && (I = e)
            }

            function U() {
                I = "0", g = 0, A = -1, N = -1, y = "0", h.clear(), R = 0, v.clear()
            }
            class P extends s.default.Store {
                initialize() {
                    this.waitFor(c.default), this.syncWith([E.default], () => {
                        if (!L) return !1;
                        M = E.default.getGuildId()
                    })
                }
                persist(e) {
                    C.verbose("writing ClientStateStore (nonce: ".concat(e, ")")), null == O && (O = Date.now()), m = e, h.persist(c.default.getId(), {
                        nonce: e,
                        version: T.CACHE_VERSION,
                        useGuildVersions: S,
                        highestLastMessageId: I,
                        readStateVersion: g,
                        userGuildSettingsVersion: A,
                        userSettingsVersion: N,
                        cacheCreationDate: O,
                        privateChannelsVersion: y,
                        apiCodeVersion: R,
                        guildIdsRequiringDeletedIdsSync: Array.from(v),
                        lastSelectedGuildId: M
                    }), r.default.remove("GuildIdsRequiringDeletedIdsSync")
                }
                clear() {
                    U()
                }
                getClientState() {
                    let e = S && (0, p.isCacheEnabled)() ? Object.fromEntries(o.default.getCommittedVersions()) : {};
                    return {
                        knownGuildVersions: e,
                        highestLastMessageId: I,
                        readStateVersion: g,
                        userGuildSettingsVersion: A,
                        userSettingsVersion: N,
                        privateChannelsVersion: y,
                        apiCodeVersion: R,
                        lastSelectedGuildId: M
                    }
                }
                getGuildIdsRequiringDeletedIdsSync() {
                    return v
                }
                getSavedNonce() {
                    return m
                }
            }
            P.displayName = "ClientStateStore";
            var b = new P(u.default, {
                BACKGROUND_SYNC: function(e) {
                    for (let t of e.guilds) "partial" === t.data_mode && t.unableToSyncDeletes && v.add(t.id);
                    null != e.apiCodeVersion && (R = e.apiCodeVersion)
                },
                CONNECTION_OPEN: function(e) {
                    var t, n, i, a, l, s;
                    let {
                        guilds: r,
                        readState: u,
                        userGuildSettings: o,
                        userSettingsProto: d,
                        apiCodeVersion: c
                    } = e;
                    for (let e of (g = u.version, A = o.version, N = null !== (n = null == d ? void 0 : null === (t = d.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== n ? n : -1, R = c, L = !0, S = !0, r)) e.unableToSyncDeletes && v.add(e.id), e.unableToSyncDeletes && v.add(e.id), null === (i = e.channels) || void 0 === i || i.forEach(e => D(e.lastMessageId)), null === (l = e.channelUpdates) || void 0 === l || null === (a = l.writes) || void 0 === a || a.forEach(e => D(e.lastMessageId)), null === (s = e.channelTimestampUpdates) || void 0 === s || s.forEach(e => D(e.last_message_id))
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function() {
                    let e = _.default.getMutablePrivateChannels();
                    for (let t in e) {
                        1 === f.default.compare(t, y) && (y = t);
                        let n = e[t].lastMessageId;
                        null != n && 1 === f.default.compare(n, y) && (y = n)
                    }
                },
                DELETED_ENTITY_IDS: function(e) {
                    v.delete(e.guild_id)
                },
                MESSAGE_CREATE: function(e) {
                    var t;
                    let {
                        message: {
                            id: n,
                            channel_id: i
                        },
                        isPushNotification: a,
                        optimistic: l
                    } = e;
                    !a && !l && (D(n), (null === (t = _.default.getChannel(i)) || void 0 === t ? void 0 : t.isPrivate()) && 1 === f.default.compare(n, y) && (y = n))
                },
                GUILD_CREATE: function(e) {
                    var t, n, i, a;
                    let {
                        guild: l
                    } = e;
                    !l.unavailable && (l.unableToSyncDeletes && v.add(l.id), null === (t = l.channels) || void 0 === t || t.forEach(e => D(e.lastMessageId)), null === (i = l.channelUpdates) || void 0 === i || null === (n = i.writes) || void 0 === n || n.forEach(e => D(e.lastMessageId)), null === (a = l.channelTimestampUpdates) || void 0 === a || a.forEach(e => D(e.last_message_id)), l.unableToSyncDeletes && v.add(l.id))
                },
                CLEAR_GUILD_CACHE: U,
                CLEAR_CACHES: U,
                LOGOUT: U,
                LOGIN: U,
                MESSAGE_ACK: function(e) {
                    let {
                        version: t,
                        ...n
                    } = e;
                    null != t ? g = t : C.log("Received null read states version", n)
                },
                CHANNEL_PINS_ACK: function(e) {
                    let {
                        version: t,
                        ...n
                    } = e;
                    null != t ? g = t : C.log("Received null read states version", n)
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e;
                    for (let e of t) null != e.version && e.version > A && (A = e.version)
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e;
                    if (null != t.proto.versions) {
                        var n;
                        N = null !== (n = t.proto.versions.dataVersion) && void 0 !== n ? n : -1
                    }
                }
            })
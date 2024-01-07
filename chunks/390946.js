            "use strict";
            n.r(t), n.d(t, {
                hydrateReadySupplementalPayload: function() {
                    return N
                },
                hydrateReadyPayloadPrioritized: function() {
                    return O
                },
                hydrateInitialGuild: function() {
                    return y
                },
                hydratePreviouslyUnavailableGuild: function() {
                    return D
                }
            }), n("424973"), n("222007"), n("70102");
            var i = n("627445"),
                a = n.n(i),
                l = n("917351"),
                s = n.n(l),
                r = n("802493"),
                u = n("105059"),
                o = n("849365"),
                d = n("860255"),
                c = n("723939"),
                _ = n("70754"),
                E = n("605250"),
                f = n("385976"),
                h = n("364685"),
                p = n("233069"),
                T = n("305961"),
                C = n("660478"),
                m = n("665618");
            let S = new E.default("ReadyPayloadUtils"),
                I = {},
                g = null,
                A = {};

            function N(e, t) {
                var n;
                let {
                    guilds: i,
                    merged_members: a,
                    merged_presences: l,
                    ...s
                } = e, r = v(A, null == l ? void 0 : l.friends), u = null !== (n = null == i ? void 0 : i.map((e, t) => {
                    let n = v(A, null == l ? void 0 : l.guilds[t]),
                        i = v(A, null == a ? void 0 : a[t]);
                    return {
                        ...e,
                        unavailable: void 0 === e.voice_states,
                        presences: n,
                        members: i
                    }
                })) && void 0 !== n ? n : [], o = R(t, i, e => ({
                    id: e.id,
                    members: e.members,
                    presences: e.presences,
                    embedded_activities: e.embedded_activities,
                    voice_states: e.voice_states,
                    unavailable: !1
                }));
                return null != o && u.push(o), A = {}, {
                    ...s,
                    presences: r,
                    guilds: u
                }
            }

            function O(e, t) {
                var n;
                let {
                    users: i,
                    relationships: l,
                    private_channels: E,
                    merged_members: p,
                    guilds: S,
                    ...g
                } = e;
                (function() {
                    ! function() {
                        let e = r.default.database();
                        null != e && !1 === o.default.okSync(e) && c.default.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok")
                    }(), I = {};
                    let e = Object.values(T.default.getGuilds()),
                        t = f.default.getGuilds(),
                        n = h.default.getRawStickersByGuild(),
                        i = C.default.getReadStatesByChannel(),
                        a = (0, _.isCacheEnabled)() ? u.default.getCommittedVersions() : new Map,
                        l = (0, _.isCacheEnabled)() ? d.default.getGuildIdsSync() : new Set;
                    for (let r of e) {
                        var s, E, p;
                        a.has(r.id) && l.has(r.id) && (I[r.id] = {
                            properties: m.toServer(r),
                            roles: r.roles,
                            emojis: null !== (E = null === (s = t[r.id]) || void 0 === s ? void 0 : s.rawEmojis) && void 0 !== E ? E : null,
                            stickers: null !== (p = n.get(r.id)) && void 0 !== p ? p : null,
                            readStates: i
                        })
                    }
                })(), A = s.keyBy(i, e => e.id);
                let N = v(A, l);
                null == E || E.forEach(e => {
                    let t = e.recipient_ids;
                    null != t && (e.recipients = t.map(e => (a(null != A[e], "Missing user in compressed ready payload"), A[e]))), delete e.recipient_ids
                });
                let O = null !== (n = null == S ? void 0 : S.map((e, t) => !0 === e.unavailable ? e : (e.members = v(A, null == p ? void 0 : p[t]), L(e)))) && void 0 !== n ? n : [],
                    y = R(t, S, e => L(e));
                return null != y && O.push(y), {
                    ...g,
                    users: i,
                    presences: [],
                    relationships: N,
                    guilds: O,
                    private_channels: null != E ? E : []
                }
            }

            function R(e, t, n) {
                return null == g || g.identifyTime !== e || null != t && t.some(e => e.id === g.guild.id) ? null : n(g.guild)
            }

            function y(e, t) {
                var n, i, a;
                let l = T.default.getGuild(e.id),
                    s = D(e, null == l ? void 0 : {
                        properties: m.toServer(l),
                        roles: l.roles,
                        emojis: null !== (i = null === (n = f.default.getGuilds()[l.id]) || void 0 === n ? void 0 : n.rawEmojis) && void 0 !== i ? i : null,
                        stickers: null !== (a = h.default.getRawStickersByGuild().get(l.id)) && void 0 !== a ? a : null,
                        readStates: {}
                    });
                return g = {
                    guild: e,
                    identifyTime: t
                }, s
            }

            function v(e, t) {
                let n = [];
                return null == t || t.forEach(t => {
                    if (null == t) return;
                    let i = t.user_id;
                    null != i && (a(null != e[i], "Missing user[".concat(i, "] in compressed ready payload")), t.user = e[i]), delete t.user_id, n.push(t)
                }), n
            }

            function M(e) {
                let t = I[e];
                return delete I[e], t
            }

            function L(e) {
                var t, n, i, a, l, s, r, u, o, d, c, _;
                let E = M(e.id);
                if ("partial" !== e.data_mode) return {
                    id: e.id,
                    dataMode: e.data_mode,
                    emojis: e.emojis,
                    guild_scheduled_events: e.guild_scheduled_events,
                    joined_at: e.joined_at,
                    lastMessages: e.last_messages,
                    member_count: e.member_count,
                    members: e.members,
                    premium_subscription_count: e.premium_subscription_count,
                    properties: e.properties,
                    roles: e.roles,
                    stage_instances: e.stage_instances,
                    stickers: e.stickers,
                    threads: null !== (a = null === (i = e.threads) || void 0 === i ? void 0 : i.map(t => (0, p.createChannelRecordFromServer)(t, e.id))) && void 0 !== a ? a : [],
                    threadMessages: U(e.threads),
                    channels: e.channels.map(t => (t.guild_id = e.id, (0, p.createChannelRecordFromServer)(t, e.id))),
                    version: e.version,
                    hasThreadsSubscription: e.has_threads_subscription
                };
                if (null == E) throw S.log("no cache entry for partial guild (guild: ".concat(e.id, ", type: ready)")), Error("Guild data was missing from store, but hash was still available.");
                return {
                    id: e.id,
                    dataMode: e.data_mode,
                    channels: null,
                    channelUpdates: {
                        writes: null !== (l = null === (t = e.partial_updates.channels) || void 0 === t ? void 0 : t.map(t => (0, p.createChannelRecordFromServer)(t, e.id))) && void 0 !== l ? l : [],
                        deletes: null !== (s = e.partial_updates.deleted_channel_ids) && void 0 !== s ? s : []
                    },
                    channelTimestampUpdates: e.channel_updates,
                    emojis: null == E.emojis ? null : P(E.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
                    emojiUpdates: {
                        writes: null !== (r = e.partial_updates.emojis) && void 0 !== r ? r : [],
                        deletes: null !== (u = e.partial_updates.deleted_emoji_ids) && void 0 !== u ? u : []
                    },
                    guild_scheduled_events: e.guild_scheduled_events,
                    joined_at: e.joined_at,
                    lastMessages: e.last_messages,
                    member_count: e.member_count,
                    members: e.members,
                    premium_subscription_count: e.premium_subscription_count,
                    properties: null !== (o = e.properties) && void 0 !== o ? o : E.properties,
                    roles: m.filterRoleDeletes(e.id, E.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
                    stage_instances: e.stage_instances,
                    stickers: null == E.stickers ? null : P(E.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
                    stickerUpdates: {
                        writes: null !== (d = e.partial_updates.stickers) && void 0 !== d ? d : [],
                        deletes: null !== (c = e.partial_updates.deleted_sticker_ids) && void 0 !== c ? c : []
                    },
                    unableToSyncDeletes: e.unable_to_sync_deletes,
                    threads: null !== (_ = null === (n = e.threads) || void 0 === n ? void 0 : n.map(t => (0, p.createChannelRecordFromServer)(t, e.id))) && void 0 !== _ ? _ : [],
                    threadMessages: U(e.threads),
                    version: e.version,
                    hasThreadsSubscription: e.has_threads_subscription
                }
            }

            function D(e, t) {
                var n, i, a, l, s, r, u, o, d, c, _, E;
                if (null == t && (t = M(e.id)), "partial" !== e.data_mode) return {
                    id: e.id,
                    emojis: e.emojis,
                    guild_scheduled_events: e.guild_scheduled_events,
                    joined_at: e.joined_at,
                    lastMessages: e.last_messages,
                    member_count: e.member_count,
                    members: e.members,
                    premium_subscription_count: e.premium_subscription_count,
                    properties: e.properties,
                    roles: e.roles,
                    stage_instances: e.stage_instances,
                    stickers: e.stickers,
                    threads: null !== (l = null === (a = e.threads) || void 0 === a ? void 0 : a.map(t => (0, p.createChannelRecordFromServer)(t, e.id))) && void 0 !== l ? l : [],
                    threadMessages: U(e.threads),
                    channels: e.channels.map(t => (t.guild_id = e.id, (0, p.createChannelRecordFromServer)(t, e.id))),
                    presences: e.presences,
                    embedded_activities: e.embedded_activities,
                    voice_states: e.voice_states,
                    version: e.version,
                    hasThreadsSubscription: e.has_threads_subscription
                };
                if (null == t) throw S.log("no cache entry for partial guild (guild: ".concat(e.id, ", type: post_ready)")), Error("Guild data was missing from store, but hash was still available.");
                return {
                    id: e.id,
                    channels: null,
                    channelUpdates: {
                        writes: null !== (s = null === (n = e.partial_updates.channels) || void 0 === n ? void 0 : n.map(t => (0, p.createChannelRecordFromServer)(t, e.id))) && void 0 !== s ? s : [],
                        deletes: null !== (r = e.partial_updates.deleted_channel_ids) && void 0 !== r ? r : []
                    },
                    channelTimestampUpdates: e.channel_updates,
                    embedded_activities: e.embedded_activities,
                    emojis: null == t.emojis ? null : P(t.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
                    emojiUpdates: {
                        writes: null !== (u = e.partial_updates.emojis) && void 0 !== u ? u : [],
                        deletes: null !== (o = e.partial_updates.deleted_emoji_ids) && void 0 !== o ? o : []
                    },
                    guild_scheduled_events: e.guild_scheduled_events,
                    joined_at: e.joined_at,
                    lastMessages: e.last_messages,
                    member_count: e.member_count,
                    members: e.members,
                    premium_subscription_count: e.premium_subscription_count,
                    presences: e.presences,
                    properties: null !== (d = e.properties) && void 0 !== d ? d : t.properties,
                    roles: m.filterRoleDeletes(e.id, t.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
                    stage_instances: e.stage_instances,
                    stickers: null == t.stickers ? null : P(t.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
                    stickerUpdates: {
                        writes: null !== (c = e.partial_updates.stickers) && void 0 !== c ? c : [],
                        deletes: null !== (_ = e.partial_updates.deleted_sticker_ids) && void 0 !== _ ? _ : []
                    },
                    unableToSyncDeletes: e.unable_to_sync_deletes,
                    threads: null !== (E = null === (i = e.threads) || void 0 === i ? void 0 : i.map(t => (0, p.createChannelRecordFromServer)(t, e.id))) && void 0 !== E ? E : [],
                    threadMessages: U(e.threads),
                    voice_states: e.voice_states,
                    version: e.version,
                    hasThreadsSubscription: e.has_threads_subscription
                }
            }

            function U(e) {
                let t = [];
                if (null != e)
                    for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
                return t
            }

            function P(e, t, n) {
                t = null != t ? t : [];
                let i = new Set((null != n ? n : []).concat(t.map(e => e.id)));
                return e.filter(e => !i.has(e.id)).concat(t)
            }
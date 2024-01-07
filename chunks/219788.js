            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007"), n("70102");
            var a = n("705909"),
                l = n("605250"),
                s = n("619443"),
                i = n("42203"),
                r = n("286235"),
                d = n("802493"),
                u = n("883062"),
                o = n("794897"),
                c = n("818697"),
                E = n("280468");
            let f = new l.default("Messages");
            class _ {
                static computeUsersAndMembers(e) {
                    (0, E.requireSortedDescending)(e);
                    let t = new Map,
                        n = new Map;
                    for (let a of e) this.addIntoMap(t, a.users, e => e.id), this.addIntoMap(n, a.members, e => e.userId);
                    return [Array.from(t.values()), Array.from(n.values())]
                }
                static addIntoMap(e, t, n) {
                    for (let a of t) {
                        let t = n(a),
                            l = e.get(t);
                        (null == l || l.incomplete && !a.incomplete) && e.set(t, a)
                    }
                }
                constructor(e) {
                    if (this.connectionId = null, this.users = [], this.members = [], this.messages = [], e.length > 0) {
                        var t;
                        let n = null === (t = e[0]) || void 0 === t ? void 0 : t.connectionId,
                            [a, l] = _.computeUsersAndMembers(e);
                        e.length > 0 && e.every(e => e.connectionId === n) && (this.connectionId = n), this.users = a, this.members = l, this.messages = e.map(e => e.message)
                    }
                }
            }
            var g = new class e {
                async startupLoad(e, t, n, a) {
                    let l = d.default.messages(e),
                        s = await l.getLatest(t, n, a);
                    return new _(s)
                }
                async load(e, t, n) {
                    let a = i.default.getBasicChannel(t);
                    if (null == t || null == a || !(0, c.isReadableChannel)(a)) return new _([]);
                    {
                        let l = d.default.messages(e),
                            s = await l.getLatest(a.guild_id, t, n);
                        return new _(s)
                    }
                }
                handleMessageCreate(e, t) {
                    !e.optimistic && !e.isPushNotification && null == e.sendMessageOptions && (0, c.isReadableChannelId)(e.channelId) && this.upsertOne(e.guildId, e.channelId, e.message, t)
                }
                handleMessageUpdate(e, t) {
                    if (null != e.message.id && null != e.message.channel_id)(0, c.isReadableChannelId)(e.message.channel_id) && (function(e) {
                        return null != e.author && null != e.content && null != e.mentions && null != e.timestamp
                    }(e.message) ? this.upsertOne(e.guildId, e.message.channel_id, e.message, t) : this.updateOne(e.guildId, e.message.channel_id, e.message, t))
                }
                handleMessagePreviewsLoaded(e, t) {
                    for (let n of e.messages)(0, c.isReadableChannelId)(n.channel_id) && this.insertStale(e.guildId, n.channel_id, n, t)
                }
                handleLoadMessagesSuccess(e, t) {
                    let n = i.default.getBasicChannel(e.channelId);
                    null != n && (0, c.isReadableChannelId)(e.channelId) && this.upsertMany(n.guild_id, e.channelId, e.messages, t)
                }
                handleMessageDelete(e, t) {
                    if (null == e.id) {
                        r.default.captureException(Error("MESSAGE_DELETE with a null id (guild_id: ".concat(e.guildId, ", channel_id: ").concat(e.channelId, ").")));
                        return
                    }
                    this.deleteOne(e.guildId, e.channelId, e.id, t)
                }
                handleMessageDeleteBulk(e, t) {
                    for (let n of e.ids) this.deleteOne(e.guildId, e.channelId, n, t)
                }
                handleChannelDelete(e, t) {
                    this.deleteChannel(e.channel.guild_id, e.channel.id, t)
                }
                handleGuildDelete(e, t) {
                    !e.guild.unavailable && this.deleteGuild(e.guild.id, t)
                }
                handleReset() {}
                insertStale(e, t, n, l) {
                    let i = d.default.messagesTransaction(l),
                        r = s.default.lastTimeConnectedChanged();
                    i.put(e, t, u.KvMessage.fromMessage(e, t, n, r), a.ConflictOptions.Skip)
                }
                upsertOne(e, t, n, l) {
                    let i = d.default.messagesTransaction(l),
                        r = s.default.lastTimeConnectedChanged();
                    i.put(e, t, u.KvMessage.fromMessage(e, t, n, r), a.ConflictOptions.Replace), i.trimChannel(e, t, o.default.saveLimit(t))
                }
                upsertMany(e, t, n, a) {
                    let l = d.default.messagesTransaction(a),
                        i = s.default.lastTimeConnectedChanged();
                    for (let a of n) l.put(e, t, u.KvMessage.fromMessage(e, t, a, i));
                    l.trimChannel(e, t, o.default.saveLimit(t))
                }
                async updateOne(e, t, n, a) {
                    if (null == n.id) {
                        f.warn("updateOne: message.id is null; cannot update a message if we do not know its id.");
                        return
                    }
                    let l = d.default.messages(a.database),
                        i = await l.get(e, t, n.id),
                        r = s.default.lastTimeConnectedChanged();
                    null != i && l.put(e, t, u.KvMessage.fromMessage(e, t, {
                        ...i.message,
                        ...n
                    }, r))
                }
                deleteOne(e, t, n, a) {
                    d.default.messagesTransaction(a).deleteMessage(e, t, n)
                }
                deleteChannel(e, t, n) {
                    d.default.messagesTransaction(n).deleteChannel(e, t)
                }
                deleteGuild(e, t) {
                    d.default.messagesTransaction(t).deleteGuild(e)
                }
                constructor() {
                    this.actions = {
                        CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        LOAD_MESSAGES_SUCCESS: (e, t) => this.handleLoadMessagesSuccess(e, t),
                        MESSAGE_CREATE: (e, t) => this.handleMessageCreate(e, t),
                        MESSAGE_DELETE_BULK: (e, t) => this.handleMessageDeleteBulk(e, t),
                        MESSAGE_DELETE: (e, t) => this.handleMessageDelete(e, t),
                        MESSAGE_PREVIEWS_LOADED: (e, t) => this.handleMessagePreviewsLoaded(e, t),
                        MESSAGE_UPDATE: (e, t) => this.handleMessageUpdate(e, t)
                    }
                }
            }
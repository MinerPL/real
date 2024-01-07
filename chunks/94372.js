            "use strict";
            n.r(t), n("222007");
            var a = n("75247"),
                s = n("913144"),
                i = n("280468"),
                l = n("605250"),
                r = n("21121"),
                o = n("42203"),
                u = n("377253"),
                d = n("344442");
            let c = -1 / 0,
                E = new l.default("MessagePreviewStore");
            class f extends a.default {
                isLatest(e, t) {
                    var n;
                    let a = this.guilds.get(null != e ? e : null);
                    return null !== (n = null == a ? void 0 : a.isLatest(t, this.generation)) && void 0 !== n && n
                }
                isLocalFetchNeeded(e) {
                    var t, n;
                    return null === (n = null === (t = this.guilds.get(e)) || void 0 === t ? void 0 : t.localNeeded) || void 0 === n || n
                }
                message(e, t) {
                    var n, a;
                    return null !== (a = null === (n = this.guilds.get(e)) || void 0 === n ? void 0 : n.messageRecord(t)) && void 0 !== a ? a : null
                }
                data(e) {
                    return !this.guilds.has(e) && this.guilds.set(e, new d.PreviewData), this.guilds.get(e)
                }
                handleOneGuildCreate(e) {
                    var t, n;
                    let a = this.data(e.id);
                    a.putMany(null !== (t = e.lastMessages) && void 0 !== t ? t : [], this.generation), a.putMany(null !== (n = e.threadMessages) && void 0 !== n ? n : [], this.generation), null != e.lastMessages && (a.localNeeded = !1)
                }
                handleConnectionOpen(e) {
                    if (!(0, r.isInMainTabsExperiment)()) return !1;
                    for (let t of (this.generation += 1, e.guilds)) this.handleOneGuildCreate(t)
                }
                handleGuildCreate(e) {
                    if (!(0, r.isInMainTabsExperiment)()) return !1;
                    this.handleOneGuildCreate(e.guild)
                }
                handleGuildDelete(e) {
                    if (!(0, r.isInMainTabsExperiment)()) return !1;
                    this.guilds.delete(e.guild.id)
                }
                handleMessageCreate(e) {
                    var t;
                    if (!(0, r.isInMainTabsExperiment)() || e.optimistic || e.isPushNotification) return !1;
                    this.data(null !== (t = e.guildId) && void 0 !== t ? t : null).put(e.message.channel_id, e.message, this.generation)
                }
                handleMessageDelete(e) {
                    var t, n;
                    if (!(0, r.isInMainTabsExperiment)()) return !1;
                    let a = null !== (n = e.guildId) && void 0 !== n ? n : null,
                        s = null === (t = this.data(a)) || void 0 === t ? void 0 : t.messageId(e.channelId);
                    if (s === e.id) {
                        let t = u.default.getMessages(e.channelId),
                            n = t.hasMoreAfter ? null : t.last();
                        null != n ? this.data(a).put(e.channelId, n, this.generation) : this.data(a).delete(e.channelId)
                    }
                }
                handleMessageUpdate(e) {
                    var t;
                    if (!(0, r.isInMainTabsExperiment)()) return;
                    let n = null !== (t = e.guildId) && void 0 !== t ? t : null,
                        a = e.message.channel_id,
                        s = e.message.id;
                    if (null == a || null == s) return !1;
                    let i = this.data(n),
                        l = null == i ? void 0 : i.messageId(a);
                    if (l !== s) return !1;
                    null == i || i.update(e.message)
                }
                handleThreadListSync(e) {
                    var t;
                    if (!(0, r.isInMainTabsExperiment)()) return !1;
                    this.data(e.guildId).putMany(null !== (t = e.mostRecentMessages) && void 0 !== t ? t : [], this.generation)
                }
                handleLoadMessagesSuccess(e) {
                    if (!(0, r.isInMainTabsExperiment)()) return;
                    let t = o.default.getBasicChannel(e.channelId);
                    if (null != t) {
                        var n;
                        (0, i.requireSortedDescending)(e.messages), this.data(t.guild_id).putNew(e.channelId, null !== (n = e.messages[0]) && void 0 !== n ? n : null, this.generation)
                    }
                }
                handleLocalMessagesLoaded(e) {
                    if (!(0, r.isInMainTabsExperiment)()) return;
                    let t = o.default.getBasicChannel(e.channelId);
                    if (null != t) {
                        var n;
                        (0, i.requireSortedDescending)(e.messages), this.data(t.guild_id).putNew(e.channelId, null !== (n = e.messages[0]) && void 0 !== n ? n : null, c)
                    }
                }
                handleMessagePreviewsLoaded(e) {
                    if (!(0, r.isInMainTabsExperiment)()) return;
                    E.verbose("adding remote previews (guildId: ".concat(e.guildId, ", messages: ").concat(e.messages.length, ")"));
                    let t = this.data(e.guildId);
                    for (let n of e.messages) !t.isLatest(n.channel_id, this.generation) && t.put(n.channel_id, n, this.generation)
                }
                handleMessagePreviewsLocallyLoaded(e) {
                    if (!(0, r.isInMainTabsExperiment)()) return;
                    E.verbose("adding local previews (guildId: ".concat(e.guildId, ", messages: ").concat(e.messages.length, ")"));
                    let t = this.data(e.guildId);
                    for (let [n, a] of e.messages) !t.has(n) && t.put(n, a, c);
                    t.localNeeded = !1
                }
                handleLogout(e) {
                    this.guilds.clear()
                }
                constructor() {
                    super(s.default, {
                        CONNECTION_OPEN: e => this.handleConnectionOpen(e),
                        GUILD_CREATE: e => this.handleGuildCreate(e),
                        GUILD_DELETE: e => this.handleGuildDelete(e),
                        LOAD_MESSAGES_SUCCESS: e => this.handleLoadMessagesSuccess(e),
                        LOCAL_MESSAGES_LOADED: e => this.handleLocalMessagesLoaded(e),
                        LOGOUT: e => this.handleLogout(e),
                        MESSAGE_CREATE: e => this.handleMessageCreate(e),
                        MESSAGE_DELETE: e => this.handleMessageDelete(e),
                        MESSAGE_PREVIEWS_LOADED: e => this.handleMessagePreviewsLoaded(e),
                        MESSAGE_PREVIEWS_LOCALLY_LOADED: e => this.handleMessagePreviewsLocallyLoaded(e),
                        MESSAGE_UPDATE: e => this.handleMessageUpdate(e),
                        THREAD_LIST_SYNC: e => this.handleThreadListSync(e)
                    }), this.guilds = new Map, this.generation = 0
                }
            }
            new f
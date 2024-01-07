            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            }), l("222007");
            var n = l("689988"),
                s = l("21121"),
                u = l("162771"),
                i = l("398604"),
                a = l("322224");
            let o = {},
                r = new Set,
                d = async e => {
                    let t = i.default.getGuildScheduledEventsForGuild(e);
                    if (0 !== t.length) {
                        if (!r.has(e)) try {
                            await a.default.getGuildEventsForCurrentUser(e), r.add(e)
                        } catch (e) {}
                    }
                };
            class c extends n.default {
                async getGuildEventUserCounts(e, t, l) {
                    let n = l.filter(l => null == o["".concat(e, "-").concat(t, "-").concat(l)] || Date.now() - o["".concat(e, "-").concat(t, "-").concat(l)] > 18e5);
                    if (!(Date.now() - o["".concat(e, "-").concat(t)] < 18e5) || 0 !== n.length) {
                        o["".concat(e, "-").concat(t)] = Date.now(), n.forEach(l => o["".concat(e, "-").concat(t, "-").concat(l)] = Date.now());
                        try {
                            await a.default.fetchGuildEventUserCounts(e, t, n)
                        } catch (e) {}
                    }
                }
                getGuildEventUsers(e, t, l) {
                    return a.default.fetchUsersForGuildEvent(e, t, l)
                }
                getGuildEventsForCurrentUser(e) {
                    return d(e)
                }
                handleConnectionOpen() {
                    r.clear(), o = {};
                    let e = (0, s.isInMainTabsExperiment)(),
                        t = u.default.getLastSelectedGuildId();
                    if (e && null != t) {
                        let e = i.default.getGuildScheduledEventsForGuild(t);
                        e.forEach(e => this.getGuildEventUserCounts(t, e.id, []))
                    }
                }
                handleGuildUnavailable(e) {
                    let {
                        guildId: t
                    } = e;
                    r.delete(t), delete o[t]
                }
                handleGuildDelete(e) {
                    let {
                        guild: t
                    } = e, l = t.id;
                    r.delete(l), delete o[l]
                }
                handleInviteResolveSuccess(e) {
                    var t;
                    let {
                        invite: l
                    } = e, n = l.guild_scheduled_event, s = null === (t = l.guild) || void 0 === t ? void 0 : t.id;
                    null != n && null != s && d(s)
                }
                handleChannelSelect(e) {
                    let {
                        guildId: t
                    } = e;
                    if (null == t) return;
                    let l = i.default.getGuildScheduledEventsForGuild(t);
                    l.forEach(e => this.getGuildEventUserCounts(t, e.id, []))
                }
                constructor(...e) {
                    super(...e), this.actions = {
                        POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
                        GUILD_DELETE: e => this.handleGuildDelete(e),
                        GUILD_UNAVAILABLE: e => this.handleGuildUnavailable(e),
                        INVITE_RESOLVE_SUCCESS: e => this.handleInviteResolveSuccess(e),
                        CHANNEL_SELECT: e => this.handleChannelSelect(e)
                    }
                }
            }
            var E = new c
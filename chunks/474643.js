            "use strict";
            n.r(t), n.d(t, {
                DraftType: function() {
                    return i
                },
                default: function() {
                    return g
                }
            }), n("222007");
            var i, a, l = n("917351"),
                s = n.n(l),
                r = n("446674"),
                u = n("913144"),
                o = n("449008"),
                d = n("271938"),
                c = n("42203"),
                _ = n("341542"),
                E = n("49111");
            let f = E.MAX_MESSAGE_LENGTH_PREMIUM + 500;
            (a = i || (i = {}))[a.ChannelMessage = 0] = "ChannelMessage", a[a.ThreadSettings = 1] = "ThreadSettings", a[a.FirstThreadMessage = 2] = "FirstThreadMessage", a[a.ApplicationLauncherCommand = 3] = "ApplicationLauncherCommand", a[a.Poll = 4] = "Poll", a[a.SlashCommand = 5] = "SlashCommand";
            let h = {};

            function p(e) {
                let t = h[e];
                return null == t && (t = h[e] = {}), t
            }

            function T(e) {
                let {
                    type: t,
                    channelId: n,
                    draft: i,
                    draftType: a
                } = e, l = c.default.getChannel(n);
                i === (null == l ? void 0 : l.template) && (i = "");
                let s = d.default.getId();
                if (null != s && null != i && "" !== i) {
                    var r, u;
                    let e = p(s),
                        t = e[n];
                    if (null == t && (t = e[n] = {}), (u = i).length > f && (u = u.substr(0, f)), (i = u) === (null === (r = t[a]) || void 0 === r ? void 0 : r.draft)) return !1;
                    t[a] = {
                        timestamp: Date.now(),
                        draft: i
                    }
                } else C(n, a);
                return "DRAFT_SAVE" === t
            }

            function C(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.default.getId();
                if (null == n) return !1;
                let i = p(n),
                    a = i[e];
                if (null == a) return !1;
                delete a[t], s.isEmpty(a) && delete i[e]
            }

            function m() {
                let e = d.default.getId();
                if (null == e || _.default.totalUnavailableGuilds > 0) return;
                let t = p(e);
                for (let e in t) null == c.default.getChannel(e) && delete t[e]
            }

            function S(e) {
                let {
                    channel: {
                        id: t
                    }
                } = e, n = d.default.getId();
                if (null == n) return !1;
                let i = p(n);
                return delete i[t], !1
            }
            class I extends r.default.PersistedStore {
                initialize(e) {
                    h = null != e ? e : {}, ! function() {
                        for (let [e, t] of Object.entries(h))
                            for (let [n, i] of Object.entries(t)) {
                                let t = i[0];
                                null != t && ("" === t.draft || "" === t.draft.trim()) && C(n, 0, e)
                            }
                    }(), this.waitFor(d.default, c.default, _.default)
                }
                getState() {
                    return h
                }
                getThreadDraftWithParentMessageId(e) {
                    let t = d.default.getId();
                    if (null == t) return;
                    let n = p(t),
                        i = Object.keys(n).find(t => {
                            let n = this.getThreadSettings(t);
                            return (null == n ? void 0 : n.parentMessageId) === e
                        });
                    return null != i ? this.getThreadSettings(i) : void 0
                }
                getRecentlyEditedDrafts(e) {
                    let t = d.default.getId();
                    if (null == t) return [];
                    let n = p(t);
                    return s(n).mapValues(t => null == t ? void 0 : t[e]).pickBy(o.isNotNullish).toPairs().map(e => {
                        let [t, {
                            timestamp: n,
                            draft: i
                        }] = e;
                        return {
                            channelId: t,
                            timestamp: n,
                            draft: i
                        }
                    }).sortBy(e => {
                        let {
                            timestamp: t
                        } = e;
                        return -t
                    }).value()
                }
                getDraft(e, t) {
                    let n = d.default.getId();
                    if (null == n) return "";
                    let i = p(n),
                        a = i[e];
                    if (null != a) {
                        let e = a[t];
                        if (null != e) return e.draft
                    }
                    return ""
                }
                getThreadSettings(e) {
                    let t = d.default.getId();
                    if (null == t) return null;
                    let n = p(t),
                        i = n[e];
                    return null == i ? null : i[1]
                }
            }
            I.displayName = "DraftStore", I.persistKey = "DraftStore", I.migrations = [e => {
                if (null == e) return {};
                for (let t in e) "timestamp" in e[t] && (e[t] = {
                    0: e[t]
                });
                return e
            }, e => {
                let t = d.default.getId();
                if (null == e || null == t) return {};
                let n = {},
                    i = n[t] = {};
                for (let t in e) i[t] = e[t];
                return n
            }];
            var g = new I(u.default, {
                CONNECTION_OPEN: function() {
                    let e = d.default.getId();
                    return !(e in h) && (h[e] = {}), m(), !1
                },
                LOGOUT: function(e) {
                    !e.isSwitchingAccount && (h = {})
                },
                MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
                    e.userId in h && delete h[e.userId]
                },
                GUILD_DELETE: function() {
                    return m(), !1
                },
                CHANNEL_DELETE: S,
                THREAD_DELETE: S,
                THREAD_CREATE: function(e) {
                    let {
                        channel: t
                    } = e, n = d.default.getId();
                    if (null == n || t.ownerId === n) return !1;
                    let i = p(n),
                        a = i[t.parent_id];
                    if (null == a) return !1;
                    let l = a[1];
                    if (null == l) return !1;
                    if (l.parentMessageId !== t.id) return !1;
                    {
                        var s, r;
                        let e = i[t.parent_id];
                        if (null == e) return !1;
                        let n = null !== (r = null === (s = e[2]) || void 0 === s ? void 0 : s.draft) && void 0 !== r ? r : "";
                        "" !== n && (i[t.id] = {
                            0: {
                                timestamp: Date.now(),
                                draft: n
                            }
                        }), C(t.parent_id, 1), C(t.parent_id, 2)
                    }
                },
                DRAFT_SAVE: T,
                DRAFT_CHANGE: T,
                DRAFT_CLEAR: function(e) {
                    let {
                        channelId: t,
                        draftType: n
                    } = e;
                    return C(t, n)
                },
                THREAD_SETTINGS_DRAFT_CHANGE: function(e) {
                    let {
                        channelId: t,
                        draft: n
                    } = e, i = d.default.getId();
                    if (null == i) return;
                    let a = p(i),
                        l = a[t];
                    null == l && (l = a[t] = {}), l[1] = {
                        timestamp: Date.now(),
                        ...l[1],
                        ...n,
                        parentChannelId: t
                    }
                }
            })
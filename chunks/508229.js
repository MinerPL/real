            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("843762");
            var a = n("917351"),
                s = n.n(a),
                l = n("446674"),
                i = n("913144"),
                r = n("447435"),
                d = n("692038"),
                u = n("915639"),
                o = n("42203"),
                c = n("26989"),
                f = n("305961"),
                g = n("377253"),
                E = n("27618"),
                m = n("697218");
            let h = {};

            function p(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = o.default.getChannel(e),
                    l = null != s ? s.getGuildId() : null;
                return {
                    id: e,
                    messages: t.map(e => (0, d.createMessageRecord)(e)),
                    guildId: l,
                    loaded: n,
                    loading: a
                }
            }

            function M(e) {
                let {
                    channel: t
                } = e;
                delete h[t.id]
            }

            function _() {
                s.forEach(h, e => {
                    s.forEach(e.messages, e => {
                        e.timestamp.locale(u.default.locale)
                    })
                })
            }

            function N() {
                s.forEach(h, e => {
                    e.messages = e.messages.map(e => e.set("blocked", E.default.isBlocked(e.author.id)))
                })
            }
            class S extends l.default.Store {
                initialize() {
                    this.waitFor(o.default, f.default, c.default, g.default, m.default, u.default)
                }
                getPinnedMessages(e) {
                    var t;
                    return null !== (t = h[e]) && void 0 !== t ? t : void 0
                }
                loaded(e) {
                    return null != h[e] && h[e].loaded
                }
            }
            S.displayName = "ChannelPinsStore";
            var I = new S(i.default, {
                CONNECTION_OPEN: function() {
                    h = {}
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    h = s(h).filter(e => e.guildId !== t.id).keyBy("id").value()
                },
                MESSAGE_UPDATE: function(e) {
                    let t = e.message.id,
                        n = e.message.channel_id;
                    if (null == n) return !1;
                    let a = h[n];
                    if (null == a && !e.message.pinned) return !1;
                    if (null == e.message.author) {
                        if (null != a) {
                            let l = s.findIndex(a.messages, e => e.id === t);
                            if (l >= 0) {
                                let t = a.messages[l],
                                    s = (0, d.updateMessageRecord)(t, e.message);
                                if (s !== t) {
                                    let e = a.messages.slice();
                                    e[l] = s, h[n].messages = e
                                }
                            }
                        }
                        return
                    }
                    if (e.message.pinned) {
                        if (null == a) {
                            a = p(n, [e.message], !1), h[n] = a;
                            return
                        }
                        a.messages = a.messages.slice();
                        let l = s.findIndex(a.messages, e => e.id === t); - 1 === l ? a.messages.unshift((0, d.createMessageRecord)(e.message)) : a.messages[l] = (0, d.updateMessageRecord)(a.messages[l], e.message), h[n] = a
                    } else {
                        if (null == a) return;
                        let e = s.findIndex(a.messages, e => e.id === t);
                        if (-1 === e) return;
                        a.messages = a.messages.slice(), a.messages.splice(e, 1), h[n] = a
                    }
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e, a = h[n];
                    if (null == a) return !1;
                    let l = s.remove(a.messages, e => e.id === t);
                    if (0 === l.length) return !1;
                    a.messages = a.messages.slice(), h[n] = a
                },
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t,
                        channelId: n
                    } = e, a = h[n];
                    null != a && (a.messages = a.messages.filter(e => -1 === t.indexOf(e.id)))
                },
                LOAD_PINNED_MESSAGES: function(e) {
                    let {
                        channelId: t
                    } = e;
                    h[t] = p(t, [], !1, !0)
                },
                LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        messages: n
                    } = e;
                    h[t] = p(t, n, !0)
                },
                LOAD_PINNED_MESSAGES_FAILURE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    delete h[t]
                },
                USER_SETTINGS_PROTO_UPDATE: _,
                I18N_LOAD_SUCCESS: _,
                CHANNEL_DELETE: M,
                THREAD_DELETE: M,
                RELATIONSHIP_ADD: N,
                RELATIONSHIP_REMOVE: N,
                MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
                    let {
                        messageId: t,
                        channelId: n
                    } = e, a = h[n];
                    if (null == a) return;
                    let l = s.findIndex(a.messages, e => e.id === t); - 1 !== l && (a.messages = a.messages.slice(), a.messages[l] = (0, r.handleExplicitMediaScanTimeoutForMessage)(a.messages[l]), h[n] = a)
                }
            })
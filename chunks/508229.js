            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            }), s("843762");
            var a = s("917351"),
                n = s.n(a),
                l = s("446674"),
                i = s("913144"),
                d = s("447435"),
                r = s("692038"),
                u = s("915639"),
                o = s("42203"),
                c = s("26989"),
                f = s("305961"),
                E = s("377253"),
                g = s("27618"),
                M = s("697218");
            let _ = {};

            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    n = o.default.getChannel(e),
                    l = null != n ? n.getGuildId() : null;
                return {
                    id: e,
                    messages: t.map(e => (0, r.createMessageRecord)(e)),
                    guildId: l,
                    loaded: s,
                    loading: a
                }
            }

            function m(e) {
                let {
                    channel: t
                } = e;
                delete _[t.id]
            }

            function N() {
                n.forEach(_, e => {
                    n.forEach(e.messages, e => {
                        e.timestamp.locale(u.default.locale)
                    })
                })
            }

            function S() {
                n.forEach(_, e => {
                    e.messages = e.messages.map(e => e.set("blocked", g.default.isBlocked(e.author.id)))
                })
            }
            class A extends l.default.Store {
                initialize() {
                    this.waitFor(o.default, f.default, c.default, E.default, M.default, u.default)
                }
                getPinnedMessages(e) {
                    var t;
                    return null !== (t = _[e]) && void 0 !== t ? t : void 0
                }
                loaded(e) {
                    return null != _[e] && _[e].loaded
                }
            }
            A.displayName = "ChannelPinsStore";
            var I = new A(i.default, {
                CONNECTION_OPEN: function() {
                    _ = {}
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    _ = n(_).filter(e => e.guildId !== t.id).keyBy("id").value()
                },
                MESSAGE_UPDATE: function(e) {
                    let t = e.message.id,
                        s = e.message.channel_id;
                    if (null == s) return !1;
                    let a = _[s];
                    if (null == a && !e.message.pinned) return !1;
                    if (null == e.message.author) {
                        if (null != a) {
                            let l = n.findIndex(a.messages, e => e.id === t);
                            if (l >= 0) {
                                let t = a.messages[l],
                                    n = (0, r.updateMessageRecord)(t, e.message);
                                if (n !== t) {
                                    let e = a.messages.slice();
                                    e[l] = n, _[s].messages = e
                                }
                            }
                        }
                        return
                    }
                    if (e.message.pinned) {
                        if (null == a) {
                            a = h(s, [e.message], !1), _[s] = a;
                            return
                        }
                        a.messages = a.messages.slice();
                        let l = n.findIndex(a.messages, e => e.id === t); - 1 === l ? a.messages.unshift((0, r.createMessageRecord)(e.message)) : a.messages[l] = (0, r.updateMessageRecord)(a.messages[l], e.message), _[s] = a
                    } else {
                        if (null == a) return;
                        let e = n.findIndex(a.messages, e => e.id === t);
                        if (-1 === e) return;
                        a.messages = a.messages.slice(), a.messages.splice(e, 1), _[s] = a
                    }
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t,
                        channelId: s
                    } = e, a = _[s];
                    if (null == a) return !1;
                    let l = n.remove(a.messages, e => e.id === t);
                    if (0 === l.length) return !1;
                    a.messages = a.messages.slice(), _[s] = a
                },
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t,
                        channelId: s
                    } = e, a = _[s];
                    null != a && (a.messages = a.messages.filter(e => -1 === t.indexOf(e.id)))
                },
                LOAD_PINNED_MESSAGES: function(e) {
                    let {
                        channelId: t
                    } = e;
                    _[t] = h(t, [], !1, !0)
                },
                LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        messages: s
                    } = e;
                    _[t] = h(t, s, !0)
                },
                LOAD_PINNED_MESSAGES_FAILURE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    delete _[t]
                },
                USER_SETTINGS_PROTO_UPDATE: N,
                I18N_LOAD_SUCCESS: N,
                CHANNEL_DELETE: m,
                THREAD_DELETE: m,
                RELATIONSHIP_ADD: S,
                RELATIONSHIP_REMOVE: S,
                MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
                    let {
                        messageId: t,
                        channelId: s
                    } = e, a = _[s];
                    if (null == a) return;
                    let l = n.findIndex(a.messages, e => e.id === t); - 1 !== l && (a.messages = a.messages.slice(), a.messages[l] = (0, d.handleExplicitMediaScanTimeoutForMessage)(a.messages[l]), _[s] = a)
                }
            })
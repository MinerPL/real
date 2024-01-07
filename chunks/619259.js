            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("808653");
            var l = n("249654"),
                r = n("446674"),
                i = n("913144"),
                a = n("979911"),
                s = n("692038"),
                u = n("42203"),
                o = n("377253"),
                c = n("600798"),
                d = n("201131"),
                f = n("49111");
            let E = {},
                g = 0,
                m = {},
                A = {},
                C = (e, t) => {
                    let n = (0, a.getFailedMessageId)(e),
                        l = {
                            id: n,
                            isBlockedEdit: (0, a.isMessageDataEdit)(e),
                            messageData: e,
                            errorMessage: (0, c.getAutomodErrorMessage)(e, t)
                        };
                    E[n] = l, g++
                },
                T = e => E[e],
                S = e => {
                    let t = E[e];
                    null != t && delete E[e], g++
                };

            function h(e) {
                let {
                    messageData: t,
                    errorResponseBody: n
                } = e;
                return C(t, n), !0
            }

            function M(e) {
                var t;
                let {
                    channelId: n,
                    messages: r
                } = e, i = null === (t = u.default.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
                if (null == i) return !1;
                let a = A[i],
                    s = r.reduce((e, t) => {
                        var n;
                        let r = t.type === f.MessageTypes.AUTO_MODERATION_ACTION;
                        if (!r) return e;
                        let i = null === (n = t.embeds) || void 0 === n ? void 0 : n.some(e => {
                            let {
                                type: t
                            } = e;
                            return t === f.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
                        });
                        return i ? null == e || -1 === l.default.compare(e, t.id) ? t.id : void 0 : e
                    }, a);
                return null != s && A[i] !== s && (A[i] = s, !0)
            }
            class p extends r.default.PersistedStore {
                initialize(e) {
                    this.waitFor(o.default), null != e && (E = e.automodFailedMessages, m = e.mentionRaidDetectionByGuild)
                }
                getState() {
                    return {
                        automodFailedMessages: E,
                        mentionRaidDetectionByGuild: m,
                        lastIncidentAlertMessage: A
                    }
                }
                getMessage(e) {
                    var t;
                    return null == e ? null : null !== (t = T(e)) && void 0 !== t ? t : null
                }
                getMessagesVersion() {
                    return g
                }
                getMentionRaidDetected(e) {
                    var t;
                    return null !== (t = m[e]) && void 0 !== t ? t : null
                }
                getLastIncidentAlertMessage(e) {
                    var t;
                    return null !== (t = A[e]) && void 0 !== t ? t : null
                }
            }
            p.displayName = "GuildAutomodMessageStore", p.persistKey = "GuildAutomodMessages";
            var v = new p(i.default, {
                CONNECTION_OPEN: function(e) {
                    return E = {}, g++, !0
                },
                LOAD_MESSAGES_SUCCESS: M,
                LOCAL_MESSAGES_LOADED: M,
                MESSAGE_CREATE: function(e) {
                    let {
                        guildId: t,
                        message: n
                    } = e;
                    if (null == t || n.type !== f.MessageTypes.AUTO_MODERATION_ACTION) return !1;
                    let l = (0, s.createMessageRecord)(n);
                    return !!(0, d.isAutomodMessageRecord)(l) && !!(0, d.isAutomodNotification)(l) && (A[t] = l.id, !0)
                },
                MESSAGE_SEND_FAILED_AUTOMOD: h,
                MESSAGE_EDIT_FAILED_AUTOMOD: h,
                REMOVE_AUTOMOD_MESSAGE_NOTICE: function(e) {
                    let {
                        messageId: t
                    } = e;
                    return S(t), !0
                },
                MESSAGE_END_EDIT: function(e) {
                    let {
                        response: t
                    } = e;
                    if ((null == t ? void 0 : t.body) == null || t.body.code === f.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) return !1;
                    let n = t.body.id;
                    if (null == n) return !1;
                    S(n)
                },
                AUTO_MODERATION_MENTION_RAID_DETECTION: function(e) {
                    let {
                        guildId: t,
                        decisionId: n,
                        suspiciousMentionActivityUntil: l
                    } = e;
                    return m[t] = {
                        guildId: t,
                        decisionId: n,
                        suspiciousMentionActivityUntil: l
                    }, !0
                },
                AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return delete m[t], !0
                }
            })
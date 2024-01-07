            "use strict";
            n.r(t), n.d(t, {
                isAutomodMessageRecord: function() {
                    return c
                },
                isAutomodNotification: function() {
                    return I
                },
                getActionHeaderText: function() {
                    return R
                },
                getQuarantineReasonString: function() {
                    return f
                },
                extractAutomodNotificationFields: function() {
                    return D
                },
                default: function() {
                    return m
                },
                useAutomodAlertActions: function() {
                    return L
                },
                getRaidAlertResolveCTAText: function() {
                    return U
                },
                getUserIdOfAutomodAction: function() {
                    return C
                },
                IS_BACKWARDS_COMPAT_RAID_TYPE: function() {
                    return y
                }
            }), n("222007");
            var o = n("884691"),
                u = n("967190"),
                r = n("171149"),
                a = n("427693"),
                _ = n("404336"),
                E = n("772193"),
                i = n("657827"),
                s = n("446674"),
                A = n("42203"),
                d = n("957255"),
                T = n("228944"),
                l = n("85448"),
                N = n("49111"),
                O = n("782340");

            function c(e) {
                return e.type === N.MessageTypes.AUTO_MODERATION_ACTION
            }

            function I(e) {
                var t;
                return null === (t = e.embeds) || void 0 === t ? void 0 : t.some(e => {
                    let {
                        type: t
                    } = e;
                    return t === N.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
                })
            }

            function M(e, t) {
                var n, o, u, r, a;
                let [_] = null !== (n = e.embeds) && void 0 !== n ? n : [];
                if (null != _) {
                    if (_.type === N.MessageEmbedTypes.AUTO_MODERATION_MESSAGE) return null == _ ? void 0 : null === (u = _.fields) || void 0 === u ? void 0 : null === (o = u.find(e => {
                        let {
                            rawName: n
                        } = e;
                        return n === t
                    })) || void 0 === o ? void 0 : o.rawValue;
                    if (_.type === N.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION) return null == _ ? void 0 : null === (a = _.fields) || void 0 === a ? void 0 : null === (r = a.find(e => {
                        let {
                            rawName: n
                        } = e;
                        return n === t
                    })) || void 0 === r ? void 0 : r.rawValue
                }
            }

            function R(e, t) {
                var n, o;
                let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : N.NOOP_NULL,
                    i = function(e) {
                        let t = M(e, r.AutomodMessageEmbedKeys.BLOCK_PROFILE_UPDATE_TYPE);
                        if (null != t) return t
                    }(e),
                    s = function(e) {
                        let t = M(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION);
                        if (null != t) return t
                    }(e),
                    A = function(e) {
                        let t = M(e, r.AutomodMessageEmbedKeys.QUARANTINE_EVENT);
                        if (null != t) return t
                    }(e),
                    T = function(e) {
                        let t = M(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER);
                        if (null != t) return t
                    }(e);
                if (null != T) {
                    let e = function(e, t, n) {
                        switch (t) {
                            case E.AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_PROFILE_UPDATE:
                                return function(e) {
                                    switch (e) {
                                        case u.AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_UPDATE:
                                            return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_UPDATE;
                                        case u.AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_RESET:
                                            return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_RESET;
                                        default:
                                            return
                                    }
                                }(e);
                            case E.AutomodQuarantineUserActionMessageEmbedKeys.QUARANTINE_USER:
                                return function(e) {
                                    switch (e) {
                                        case _.AutomodQuarantineEventMessageEmbedKeys.MESSAGE_SEND:
                                            return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_MESSAGE_SEND;
                                        case _.AutomodQuarantineEventMessageEmbedKeys.GUILD_JOIN:
                                            return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_ON_GUILD_JOIN;
                                        case _.AutomodQuarantineEventMessageEmbedKeys.USERNAME_UPDATE:
                                            return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USERNAME_UPDATE;
                                        default:
                                            return
                                    }
                                }(n);
                            case E.AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_GUEST_JOIN:
                                return function() {
                                    return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_GUEST_ON_GUILD_JOIN
                                }()
                        }
                    }(i, s, A);
                    if (null != e) return e
                }
                let l = M(e, r.AutomodMessageEmbedKeys.FLAGGED_MESSAGE_ID),
                    c = d.default.can(N.Permissions.VIEW_CHANNEL, t);
                let I = (n = t, c ? null !== (o = null == n ? void 0 : n.name) && void 0 !== o ? o : "#".concat(O.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER) : "#".concat(O.default.Messages.NO_ACCESS)),
                    R = null != t && c ? a : N.NOOP_NULL,
                    f = function(e, t, n) {
                        let o = M(e, r.AutomodMessageEmbedKeys.VOICE_CHANNEL_STATUS_OUTCOME);
                        if (null == o) return null;
                        let u = "blocked" === o ? O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_VOICE_CHANNEL_STATUS_HOOK : O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_VOICE_CHANNEL_STATUS_HOOK;
                        return u.format({
                            channelName: t,
                            channelHook: n
                        })
                    }(e, I, a);
                return null != f ? f : null != l ? O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_HOOK.format({
                    channelName: I,
                    channelHook: R
                }) : O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_HOOK.format({
                    channelName: I,
                    channelHook: R
                })
            }

            function f(e) {
                switch (e) {
                    case i.AutomodQuarantineUserMessageEmbedKeys.NICKNAME:
                        return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_NICKNAME;
                    case i.AutomodQuarantineUserMessageEmbedKeys.USERNAME:
                        return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME;
                    case i.AutomodQuarantineUserMessageEmbedKeys.GLOBAL_NAME:
                        return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_GLOBAL_NAME;
                    default:
                        return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME
                }
            }

            function D(e) {
                var t, n;
                let o = M(e, a.AutomodNotificationEmbedKeys.NOTIFICATION_TYPE),
                    u = M(e, a.AutomodNotificationEmbedKeys.JOIN_ATTEMPTS),
                    r = M(e, a.AutomodNotificationEmbedKeys.RAID_DATETIME),
                    _ = M(e, a.AutomodNotificationEmbedKeys.DMS_SENT),
                    E = M(e, a.AutomodNotificationEmbedKeys.RAID_TYPE),
                    i = M(e, a.AutomodNotificationEmbedKeys.RESOLVED_REASON);
                return {
                    notificationType: null !== (t = null == (n = o) ? null : n) && void 0 !== t ? t : void 0,
                    joinAttempts: null != u ? parseInt(u) : void 0,
                    raidDatetime: null != r ? new Date(r) : void 0,
                    dmsSent: null != _ ? parseInt(_) : void 0,
                    raidType: null != E ? E : void 0,
                    resolvedReason: null != i ? i : void 0
                }
            }

            function S(e) {
                let t = M(e, r.AutomodMessageEmbedKeys.CHANNEL_ID),
                    n = M(e, r.AutomodMessageEmbedKeys.ALERT_ACTIONS_EXECUTION),
                    o = (0, T.parseAlertActionsExecution)(n);
                return {
                    content: function(e) {
                        var t, n;
                        let [o] = null !== (t = e.embeds) && void 0 !== t ? t : [];
                        return null !== (n = null == o ? void 0 : o.rawDescription) && void 0 !== n ? n : ""
                    }(e),
                    ruleName: M(e, r.AutomodMessageEmbedKeys.RULE_NAME),
                    decisionId: M(e, r.AutomodMessageEmbedKeys.DECISION_ID),
                    keyword: M(e, r.AutomodMessageEmbedKeys.KEYWORD),
                    keywordMatchedContent: M(e, r.AutomodMessageEmbedKeys.KEYWORD_MATCHED_CONTENT),
                    flaggedMessageId: M(e, r.AutomodMessageEmbedKeys.FLAGGED_MESSAGE_ID),
                    timeoutDuration: M(e, r.AutomodMessageEmbedKeys.TIMEOUT_DURATION),
                    quarantineType: M(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER),
                    quarantineAction: M(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION),
                    decisionReason: M(e, r.AutomodMessageEmbedKeys.DECISION_REASON),
                    embedChannel: A.default.getChannel(t),
                    embedChannelId: t,
                    alertActionsExecution: null != o ? o : void 0
                }
            }

            function m(e) {
                let t = o.useMemo(() => S(e), [e]),
                    n = (0, s.useStateFromStores)([A.default], () => A.default.getChannel(t.embedChannelId), [t.embedChannelId]);
                return {
                    ...t,
                    embedChannel: n
                }
            }

            function L(e) {
                if (null == e) return null;
                let {
                    alertActionsExecution: t
                } = S(e);
                return null != t ? t : null
            }

            function U(e) {
                if (null == e) return O.default.Messages.GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED;
                switch (e) {
                    case l.RaidResolutionType.LEGITIMATE_ACTIVITY:
                        return O.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_NO_ACTION;
                    case l.RaidResolutionType.DM_SPAM:
                        return O.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_DM_SPAM;
                    case l.RaidResolutionType.JOIN_RAID:
                        return O.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_JOIN_RAID;
                    default:
                        return O.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_OTHER
                }
            }

            function C(e) {
                return M(e, a.AutomodNotificationEmbedKeys.ACTION_BY_USER_ID)
            }
            let y = void 0
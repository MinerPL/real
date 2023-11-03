(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["64814"], {
        228944: function(e, t, n) {
            "use strict";
            var o, u;
            n.r(t), n.d(t, {
                AutomodAlertActionType: function() {
                    return o
                },
                parseAlertActionsExecution: function() {
                    return r
                }
            }), (u = o || (o = {}))[u.SET_COMPLETED = 1] = "SET_COMPLETED", u[u.UNSET_COMPLETED = 2] = "UNSET_COMPLETED", u[u.DELETE_USER_MESSAGE = 3] = "DELETE_USER_MESSAGE", u[u.SUBMIT_FEEDBACK = 4] = "SUBMIT_FEEDBACK";

            function r(e) {
                if (null == e) return null;
                let t = function(e) {
                    if (null == e) return null;
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        return null
                    }
                }(e);
                return null == t || null == t.actions ? null : (Object.keys(t.actions).forEach(e => {
                    t.actions[e].actionType = e
                }), t)
            }
        },
        85448: function(e, t, n) {
            "use strict";
            var o, u, r, a, E, _, i, s;

            function A(e) {
                return e.includes(r.LEGITIMATE_ACTIVITY) ? r.LEGITIMATE_ACTIVITY : e.includes(r.DM_SPAM) ? r.DM_SPAM : e.includes(r.JOIN_RAID) ? r.JOIN_RAID : r.OTHER
            }
            n.r(t), n.d(t, {
                Feedback: function() {
                    return o
                },
                RaidAlertType: function() {
                    return u
                },
                RaidResolutionType: function() {
                    return r
                },
                getMostImportantRaidResolutionType: function() {
                    return A
                },
                RaidLockdownFeedbackType: function() {
                    return a
                }
            }), n("782340"), (E = o || (o = {})).BUG = "BUG", E.ALLOWED = "ALLOWED", E.MENTION_RAID_REMOVE_RESTRICTION = "MENTION_RAID_REMOVE_RESTRICTION", (_ = u || (u = {})).JOIN_RAID = "JOIN_RAID", _.MENTION_RAID = "MENTION_RAID", (i = r || (r = {})).LEGITIMATE_ACTIVITY = "LEGITIMATE_ACTIVITY", i.LEGITIMATE_ACCOUNTS = "LEGITIMATE_ACCOUNTS", i.LEGITIMATE_DMS = "LEGITIMATE_DMS", i.DM_SPAM = "DM_SPAM", i.JOIN_RAID = "JOIN_RAID", i.OTHER = "OTHER", (s = a || (a = {})).DM_SPAM = "DM_SPAM", s.MENTION_SPAM = "MENTION_SPAM", s.CHANNEL_SPAM = "CHANNEL_SPAM", s.SUS_NEW_MEMBERS = "SUS_NEW_MEMBERS", s.CHANGING_SETTINGS = "CHANGING_SETTINGS", s.OTHER = "OTHER"
        },
        201131: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isAutomodMessageRecord: function() {
                    return c
                },
                isAutomodNotification: function() {
                    return M
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
                }
            });
            var o = n("884691"),
                u = n("967190"),
                r = n("171149"),
                a = n("427693"),
                E = n("404336"),
                _ = n("772193"),
                i = n("657827"),
                s = n("446674"),
                A = n("42203"),
                d = n("957255"),
                l = n("228944"),
                T = n("85448"),
                N = n("49111"),
                O = n("782340");

            function c(e) {
                return e.type === N.MessageTypes.AUTO_MODERATION_ACTION
            }

            function M(e) {
                var t;
                return null === (t = e.embeds) || void 0 === t ? void 0 : t.some(e => {
                    let {
                        type: t
                    } = e;
                    return t === N.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
                })
            }

            function I(e, t) {
                var n, o, u, r, a;
                let [E] = null !== (n = e.embeds) && void 0 !== n ? n : [];
                if (null != E) {
                    if (E.type === N.MessageEmbedTypes.AUTO_MODERATION_MESSAGE) return null == E ? void 0 : null === (u = E.fields) || void 0 === u ? void 0 : null === (o = u.find(e => {
                        let {
                            rawName: n
                        } = e;
                        return n === t
                    })) || void 0 === o ? void 0 : o.rawValue;
                    if (E.type === N.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION) return null == E ? void 0 : null === (a = E.fields) || void 0 === a ? void 0 : null === (r = a.find(e => {
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
                        let t = I(e, r.AutomodMessageEmbedKeys.BLOCK_PROFILE_UPDATE_TYPE);
                        if (null != t) return t
                    }(e),
                    s = function(e) {
                        let t = I(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION);
                        if (null != t) return t
                    }(e),
                    A = function(e) {
                        let t = I(e, r.AutomodMessageEmbedKeys.QUARANTINE_EVENT);
                        if (null != t) return t
                    }(e),
                    l = function(e) {
                        let t = I(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER);
                        if (null != t) return t
                    }(e);
                if (null != l) {
                    let e = function(e, t, n) {
                        switch (t) {
                            case _.AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_PROFILE_UPDATE:
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
                            case _.AutomodQuarantineUserActionMessageEmbedKeys.QUARANTINE_USER:
                                return function(e) {
                                    switch (e) {
                                        case E.AutomodQuarantineEventMessageEmbedKeys.MESSAGE_SEND:
                                            return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_MESSAGE_SEND;
                                        case E.AutomodQuarantineEventMessageEmbedKeys.GUILD_JOIN:
                                            return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_ON_GUILD_JOIN;
                                        case E.AutomodQuarantineEventMessageEmbedKeys.USERNAME_UPDATE:
                                            return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USERNAME_UPDATE;
                                        default:
                                            return
                                    }
                                }(n);
                            case _.AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_GUEST_JOIN:
                                return function() {
                                    return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_GUEST_ON_GUILD_JOIN
                                }()
                        }
                    }(i, s, A);
                    if (null != e) return e
                }
                let T = I(e, r.AutomodMessageEmbedKeys.FLAGGED_MESSAGE_ID),
                    c = d.default.can(N.Permissions.VIEW_CHANNEL, t);
                let M = (n = t, c ? null !== (o = null == n ? void 0 : n.name) && void 0 !== o ? o : "#".concat(O.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER) : "#".concat(O.default.Messages.NO_ACCESS)),
                    R = null != t && c ? a : N.NOOP_NULL,
                    f = function(e, t, n) {
                        let o = I(e, r.AutomodMessageEmbedKeys.VOICE_CHANNEL_STATUS_OUTCOME);
                        if (null == o) return null;
                        let u = "blocked" === o ? O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_VOICE_CHANNEL_STATUS_HOOK : O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_VOICE_CHANNEL_STATUS_HOOK;
                        return u.format({
                            channelName: t,
                            channelHook: n
                        })
                    }(e, M, a);
                return null != f ? f : null != T ? O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_HOOK.format({
                    channelName: M,
                    channelHook: R
                }) : O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_HOOK.format({
                    channelName: M,
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
                let t = I(e, a.AutomodNotificationEmbedKeys.JOIN_ATTEMPTS),
                    n = I(e, a.AutomodNotificationEmbedKeys.RAID_DATETIME),
                    o = I(e, a.AutomodNotificationEmbedKeys.DMS_SENT),
                    u = I(e, a.AutomodNotificationEmbedKeys.RAID_TYPE),
                    r = I(e, a.AutomodNotificationEmbedKeys.RESOLVED_REASON);
                return {
                    joinAttempts: null != t ? parseInt(t) : void 0,
                    raidDatetime: null != n ? new Date(n) : void 0,
                    dmsSent: null != o ? parseInt(o) : void 0,
                    raidType: null != u ? u : void 0,
                    resolvedReason: null != r ? r : void 0
                }
            }

            function S(e) {
                let t = I(e, r.AutomodMessageEmbedKeys.CHANNEL_ID),
                    n = I(e, r.AutomodMessageEmbedKeys.ALERT_ACTIONS_EXECUTION),
                    o = (0, l.parseAlertActionsExecution)(n);
                return {
                    content: function(e) {
                        var t, n;
                        let [o] = null !== (t = e.embeds) && void 0 !== t ? t : [];
                        return null !== (n = null == o ? void 0 : o.rawDescription) && void 0 !== n ? n : ""
                    }(e),
                    ruleName: I(e, r.AutomodMessageEmbedKeys.RULE_NAME),
                    decisionId: I(e, r.AutomodMessageEmbedKeys.DECISION_ID),
                    keyword: I(e, r.AutomodMessageEmbedKeys.KEYWORD),
                    keywordMatchedContent: I(e, r.AutomodMessageEmbedKeys.KEYWORD_MATCHED_CONTENT),
                    flaggedMessageId: I(e, r.AutomodMessageEmbedKeys.FLAGGED_MESSAGE_ID),
                    timeoutDuration: I(e, r.AutomodMessageEmbedKeys.TIMEOUT_DURATION),
                    quarantineType: I(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER),
                    quarantineAction: I(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION),
                    decisionReason: I(e, r.AutomodMessageEmbedKeys.DECISION_REASON),
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
                    case T.RaidResolutionType.LEGITIMATE_ACTIVITY:
                        return O.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_NO_ACTION;
                    case T.RaidResolutionType.DM_SPAM:
                        return O.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_DM_SPAM;
                    case T.RaidResolutionType.JOIN_RAID:
                        return O.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_JOIN_RAID;
                    default:
                        return O.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_OTHER
                }
            }
        },
        143460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AutomodEventType: function() {
                    return a.AutomodEventType
                },
                AutomodTriggerType: function() {
                    return E.AutomodTriggerType
                },
                AutomodActionType: function() {
                    return r.AutomodActionType
                },
                KeywordPreset: function() {
                    return u
                },
                MAX_KEYWORDS_PER_KEYWORD_FILTER: function() {
                    return _
                },
                MAX_KEYWORDS_PER_ALLOWLIST_KEYWORD_FILTER_RULE: function() {
                    return i
                },
                MAX_KEYWORDS_PER_ALLOWLIST_DEFAULT_KEYWORD_RULE: function() {
                    return s
                },
                MAX_REGEX_PATTERNS_PER_KEYWORD_FILTER: function() {
                    return A
                },
                MAX_CHARACTERS_PER_KEYWORD: function() {
                    return d
                },
                MIN_CHARACTERS_PER_KEYWORD: function() {
                    return l
                },
                MIN_REGEX_PATTERN_LENGTH: function() {
                    return T
                },
                MAX_REGEX_PATTERN_LENGTH: function() {
                    return N
                },
                MAX_RULE_NAME_LENGTH: function() {
                    return O
                },
                MIN_MENTION_SPAM_LIMIT: function() {
                    return c
                },
                MAX_MENTION_SPAM_LIMIT: function() {
                    return M
                },
                MENTION_SPAM_LIMIT_DEFAULT: function() {
                    return I
                },
                MAX_BLOCK_ACTION_CUSTOM_MESSAGE_LENGTH: function() {
                    return R
                },
                QUARANTINE_USER_ALERT_KEY: function() {
                    return f
                }
            });
            var o, u, r = n("214764"),
                a = n("155481"),
                E = n("363312");
            (o = u || (u = {}))[o.PROFANITY = 1] = "PROFANITY", o[o.SEXUAL_CONTENT = 2] = "SEXUAL_CONTENT", o[o.SLURS = 3] = "SLURS", E.AutomodTriggerType.USER_PROFILE, E.AutomodTriggerType.SERVER_POLICY, E.AutomodTriggerType.MENTION_SPAM, E.AutomodTriggerType.ML_SPAM, E.AutomodTriggerType.DEFAULT_KEYWORD_LIST, E.AutomodTriggerType.KEYWORD;
            let _ = 1e3,
                i = 100,
                s = 1e3,
                A = 10,
                d = 60,
                l = 1,
                T = 1,
                N = 260,
                O = 100,
                c = 1,
                M = 50,
                I = 20,
                R = 150,
                f = "automod-profile-quarantine-alert"
        },
        461439: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                _transformMetadataToCamelCase: function() {
                    return function e(t) {
                        if (null == t) return t;
                        let n = Object.keys(t),
                            u = n.reduce((n, u) => {
                                let r = (0, o.camelCase)(u);
                                return "object" != typeof t[u] || Array.isArray(t[u]) ? n[r] = t[u] : n[r] = e(t[u]), n
                            }, {});
                        return u
                    }
                },
                _transformMetadataToSnakeCase: function() {
                    return function e(t) {
                        if (null == t) return t;
                        let n = Object.keys(t),
                            u = n.reduce((n, u) => {
                                let r = (0, o.snakeCase)(u);
                                return "object" != typeof t[u] || Array.isArray(t[u]) ? n[r] = t[u] : n[r] = e(t[u]), n[r] = t[u], n
                            }, {});
                        return u
                    }
                }
            });
            var o = n("917351")
        },
        928098: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getPromiseableActionHandlers: function() {
                    return E
                },
                openSubmitFeedback: function() {
                    return _
                },
                openRaidResolveModal: function() {
                    return i
                },
                openConfirmRemoveMentionRaid: function() {
                    return s
                }
            });
            var o = n("37983");
            n("884691");
            var u = n("77078"),
                r = n("143460"),
                a = n("782340");

            function E(e) {
                return {
                    [r.AutomodActionType.BLOCK_MESSAGE]: (e, t) => new Promise(e => {
                        (0, u.openModalLazy)(async () => {
                            var u;
                            let {
                                default: r
                            } = await n.el("83965").then(n.bind(n, "83965"));
                            return n => (0, o.jsx)(r, {
                                initialCustomMessage: null !== (u = t.metadata.customMessage) && void 0 !== u ? u : "",
                                onSubmit: o => {
                                    t.metadata.customMessage = o, e(t), n.onClose()
                                },
                                ...n,
                                onClose: () => (e(null), n.onClose())
                            })
                        })
                    }),
                    [r.AutomodActionType.FLAG_TO_CHANNEL]: (t, a) => new Promise(E => {
                        (0, u.openModalLazy)(async () => {
                            let {
                                default: u
                            } = await n.el("998730").then(n.bind(n, "998730")), _ = t.actions.find(e => e.type === r.AutomodActionType.FLAG_TO_CHANNEL);
                            return n => (0, o.jsx)(u, {
                                action: a,
                                isEdit: null != _,
                                triggerType: t.triggerType,
                                guildId: e,
                                onEditChannel: e => {
                                    a.metadata.channelId = e, t.exemptChannels.add(e), E(a), n.onClose()
                                },
                                ...n,
                                onClose: () => (E(null), n.onClose())
                            })
                        })
                    }),
                    [r.AutomodActionType.USER_COMMUNICATION_DISABLED]: (e, t) => new Promise(a => {
                        (0, u.openModalLazy)(async () => {
                            let {
                                default: u
                            } = await n.el("489118").then(n.bind(n, "489118")), E = e.actions.find(e => e.type === r.AutomodActionType.USER_COMMUNICATION_DISABLED);
                            return n => (0, o.jsx)(u, {
                                action: t,
                                isEdit: null != E,
                                triggerType: e.triggerType,
                                onUpdateDuration: e => {
                                    null != e && (t.metadata.durationSeconds = e), a(t), n.onClose()
                                },
                                ...n,
                                onClose: () => (a(null), n.onClose())
                            })
                        })
                    })
                }
            }

            function _(e, t, r, a) {
                (0, u.openModalLazy)(async () => {
                    let {
                        default: u
                    } = await n.el("593486").then(n.bind(n, "593486"));
                    return n => (0, o.jsx)(u, {
                        ...n,
                        automodDecision: {
                            messageId: e,
                            messageContent: t,
                            decisionId: r,
                            channel: a
                        }
                    })
                })
            }

            function i(e, t) {
                (0, u.openModalLazy)(async () => {
                    let {
                        default: u
                    } = await n.el("561956").then(n.bind(n, "561956"));
                    return n => (0, o.jsx)(u, {
                        ...n,
                        messageId: e,
                        guildId: t
                    })
                })
            }

            function s(e) {
                (0, u.openModal)(t => (0, o.jsx)(u.ConfirmModal, {
                    header: a.default.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_TITLE,
                    confirmText: a.default.Messages.CONFIRM,
                    onConfirm: e,
                    cancelText: a.default.Messages.CANCEL,
                    ...t,
                    children: (0, o.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: a.default.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_BODY
                    })
                }))
            }
        },
        702873: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                validateAutomodRule: function() {
                    return M
                },
                createAutomodRule: function() {
                    return I
                },
                updateAutomodRule: function() {
                    return R
                },
                deleteAutomodRule: function() {
                    return f
                },
                fetchAutomodRules: function() {
                    return D
                },
                executeAlertAction: function() {
                    return S
                },
                removeMentionRaidRestrictionWithFeedback: function() {
                    return m
                },
                clearMentionRaidDetected: function() {
                    return L
                }
            });
            var o = n("872717"),
                u = n("913144"),
                r = n("716241"),
                a = n("305961"),
                E = n("957255"),
                _ = n("449008"),
                i = n("299039"),
                s = n("85448"),
                A = n("461439"),
                d = n("928098"),
                l = n("49111");

            function T(e) {
                return {
                    type: e.type,
                    metadata: (0, A._transformMetadataToSnakeCase)(e.metadata)
                }
            }

            function N(e) {
                var t, n;
                let o = (0, A._transformMetadataToSnakeCase)(e.triggerMetadata);
                return null != o && delete o.keywordLists, {
                    id: e.id,
                    name: e.name,
                    guild_id: e.guildId,
                    event_type: e.eventType,
                    trigger_type: e.triggerType,
                    trigger_metadata: o,
                    actions: e.actions.filter(_.isNotNullish).map(T),
                    enabled: e.enabled,
                    creator_id: e.creatorId,
                    position: e.position,
                    exempt_channels: Array.from(null !== (t = e.exemptChannels) && void 0 !== t ? t : []),
                    exempt_roles: Array.from(null !== (n = e.exemptRoles) && void 0 !== n ? n : [])
                }
            }

            function O(e) {
                return {
                    type: e.type,
                    metadata: (0, A._transformMetadataToCamelCase)(e.metadata)
                }
            }

            function c(e) {
                var t, n, o;
                let u = {
                    id: null !== (t = e.id) && void 0 !== t ? t : i.default.fromTimestamp(Date.now()),
                    name: e.name,
                    guildId: e.guild_id,
                    eventType: e.event_type,
                    triggerType: e.trigger_type,
                    triggerMetadata: (0, A._transformMetadataToCamelCase)(e.trigger_metadata),
                    actions: e.actions.filter(_.isNotNullish).map(O),
                    enabled: e.enabled,
                    creatorId: e.creator_id,
                    position: e.position,
                    exemptChannels: new Set(null !== (n = e.exempt_channels) && void 0 !== n ? n : []),
                    exemptRoles: new Set(null !== (o = e.exempt_roles) && void 0 !== o ? o : [])
                };
                return null != u.triggerMetadata && delete u.triggerMetadata.keywordLists, u
            }
            async function M(e) {
                let t = N(e),
                    n = await o.default.post({
                        url: l.Endpoints.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
                        body: t
                    });
                return (0, A._transformMetadataToCamelCase)(n.body)
            }
            async function I(e) {
                let t = N(e);
                delete t.id;
                let n = await o.default.post({
                    url: l.Endpoints.GUILD_AUTOMOD_RULES(e.guildId),
                    body: t
                });
                return c(n.body)
            }
            async function R(e) {
                let t = N(e),
                    n = await o.default.patch({
                        url: l.Endpoints.GUILD_AUTOMOD_RULE(e.guildId, e.id),
                        body: t
                    });
                return c(n.body)
            }
            async function f(e, t) {
                return await o.default.delete({
                    url: l.Endpoints.GUILD_AUTOMOD_RULE(t, e)
                }), !0
            }
            async function D(e) {
                let t = await o.default.get({
                    url: l.Endpoints.GUILD_AUTOMOD_RULES(e)
                });
                return Array.isArray(t.body) ? t.body.map(c) : []
            }
            async function S(e, t, n) {
                E.default.can(l.Permissions.MANAGE_MESSAGES, t) && await o.default.post({
                    url: l.Endpoints.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
                    body: {
                        message_id: e,
                        channel_id: t.id,
                        alert_action_type: n
                    }
                })
            }

            function m(e, t, n) {
                let u = a.default.getGuild(e);
                if (null != u && !!E.default.can(l.Permissions.MANAGE_GUILD, u))(0, d.openConfirmRemoveMentionRaid)(() => {
                    (0, r.trackWithMetadata)(l.AnalyticEvents.GUILD_AUTOMOD_FEEDBACK, {
                        feedback_type: s.Feedback.MENTION_RAID_REMOVE_RESTRICTION,
                        decision_id: t
                    }), o.default.post({
                        url: l.Endpoints.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e)
                    }), n()
                })
            }

            function L(e) {
                u.default.dispatch({
                    type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
                    guildId: e
                })
            }
        },
        214764: function(e, t, n) {
            "use strict";
            var o, u;
            n.r(t), n.d(t, {
                AutomodActionType: function() {
                    return o
                }
            }), (u = o || (o = {}))[u.BLOCK_MESSAGE = 1] = "BLOCK_MESSAGE", u[u.FLAG_TO_CHANNEL = 2] = "FLAG_TO_CHANNEL", u[u.USER_COMMUNICATION_DISABLED = 3] = "USER_COMMUNICATION_DISABLED", u[u.QUARANTINE_USER = 4] = "QUARANTINE_USER"
        },
        967190: function(e, t, n) {
            "use strict";
            var o, u;
            n.r(t), n.d(t, {
                AutomodBlockProfileUpdateMessageEmbedKeys: function() {
                    return o
                }
            }), (u = o || (o = {})).NICKNAME_UPDATE = "nickname_update", u.NICKNAME_RESET = "nickname_reset"
        },
        155481: function(e, t, n) {
            "use strict";
            var o, u;
            n.r(t), n.d(t, {
                AutomodEventType: function() {
                    return o
                }
            }), (u = o || (o = {}))[u.UNKNOWN = 0] = "UNKNOWN", u[u.MESSAGE_SEND = 1] = "MESSAGE_SEND", u[u.GUILD_MEMBER_JOIN_OR_UPDATE = 2] = "GUILD_MEMBER_JOIN_OR_UPDATE"
        },
        171149: function(e, t, n) {
            "use strict";
            var o, u;
            n.r(t), n.d(t, {
                AutomodMessageEmbedKeys: function() {
                    return o
                }
            }), (u = o || (o = {})).RULE_NAME = "rule_name", u.CHANNEL_ID = "channel_id", u.DECISION_ID = "decision_id", u.KEYWORD = "keyword", u.KEYWORD_MATCHED_CONTENT = "keyword_matched_content", u.FLAGGED_MESSAGE_ID = "flagged_message_id", u.TIMEOUT_DURATION = "timeout_duration", u.QUARANTINE_USER = "quarantine_user", u.QUARANTINE_USER_ACTION = "quarantine_user_action", u.DECISION_REASON = "decision_reason", u.ALERT_ACTIONS_EXECUTION = "alert_actions_execution", u.QUARANTINE_EVENT = "quarantine_event", u.BLOCK_PROFILE_UPDATE_TYPE = "block_profile_update_type", u.VOICE_CHANNEL_STATUS_OUTCOME = "voice_channel_status_outcome"
        },
        427693: function(e, t, n) {
            "use strict";
            var o, u;
            n.r(t), n.d(t, {
                AutomodNotificationEmbedKeys: function() {
                    return o
                }
            }), (u = o || (o = {})).JOIN_ATTEMPTS = "join_attempts", u.RAID_DATETIME = "raid_datetime", u.DMS_SENT = "dms_sent", u.RAID_TYPE = "raid_type", u.RESOLVED_REASON = "resolved_reason"
        },
        404336: function(e, t, n) {
            "use strict";
            var o, u;
            n.r(t), n.d(t, {
                AutomodQuarantineEventMessageEmbedKeys: function() {
                    return o
                }
            }), (u = o || (o = {})).MESSAGE_SEND = "message_send", u.GUILD_JOIN = "guild_join", u.USERNAME_UPDATE = "username_update"
        },
        772193: function(e, t, n) {
            "use strict";
            var o, u;
            n.r(t), n.d(t, {
                AutomodQuarantineUserActionMessageEmbedKeys: function() {
                    return o
                }
            }), (u = o || (o = {})).BLOCK_PROFILE_UPDATE = "block_profile_update", u.QUARANTINE_USER = "quarantine_user", u.BLOCK_GUEST_JOIN = "block_guest_join"
        },
        657827: function(e, t, n) {
            "use strict";
            var o, u;
            n.r(t), n.d(t, {
                AutomodQuarantineUserMessageEmbedKeys: function() {
                    return o
                }
            }), (u = o || (o = {})).BIO = "bio", u.USERNAME = "username", u.NICKNAME = "nickname", u.GLOBAL_NAME = "display_name"
        },
        363312: function(e, t, n) {
            "use strict";
            var o, u;
            n.r(t), n.d(t, {
                AutomodTriggerType: function() {
                    return o
                }
            }), (u = o || (o = {}))[u.KEYWORD = 1] = "KEYWORD", u[u.SPAM_LINK = 2] = "SPAM_LINK", u[u.ML_SPAM = 3] = "ML_SPAM", u[u.DEFAULT_KEYWORD_LIST = 4] = "DEFAULT_KEYWORD_LIST", u[u.MENTION_SPAM = 5] = "MENTION_SPAM", u[u.USER_PROFILE = 6] = "USER_PROFILE", u[u.SERVER_POLICY = 7] = "SERVER_POLICY"
        }
    }
]);
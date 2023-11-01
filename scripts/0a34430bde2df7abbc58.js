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
                    return a
                }
            }), (u = o || (o = {}))[u.SET_COMPLETED = 1] = "SET_COMPLETED", u[u.UNSET_COMPLETED = 2] = "UNSET_COMPLETED", u[u.DELETE_USER_MESSAGE = 3] = "DELETE_USER_MESSAGE", u[u.SUBMIT_FEEDBACK = 4] = "SUBMIT_FEEDBACK";

            function a(e) {
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
            var o, u, a, r, i, E, s, _;

            function A(e) {
                return e.includes(a.LEGITIMATE_ACTIVITY) ? a.LEGITIMATE_ACTIVITY : e.includes(a.DM_SPAM) ? a.DM_SPAM : e.includes(a.JOIN_RAID) ? a.JOIN_RAID : a.OTHER
            }
            n.r(t), n.d(t, {
                Feedback: function() {
                    return o
                },
                RaidAlertType: function() {
                    return u
                },
                RaidResolutionType: function() {
                    return a
                },
                getMostImportantRaidResolutionType: function() {
                    return A
                },
                RaidLockdownFeedbackType: function() {
                    return r
                }
            }), n("782340"), (i = o || (o = {})).BUG = "BUG", i.ALLOWED = "ALLOWED", i.MENTION_RAID_REMOVE_RESTRICTION = "MENTION_RAID_REMOVE_RESTRICTION", (E = u || (u = {})).JOIN_RAID = "JOIN_RAID", E.MENTION_RAID = "MENTION_RAID", (s = a || (a = {})).LEGITIMATE_ACTIVITY = "LEGITIMATE_ACTIVITY", s.LEGITIMATE_ACCOUNTS = "LEGITIMATE_ACCOUNTS", s.LEGITIMATE_DMS = "LEGITIMATE_DMS", s.DM_SPAM = "DM_SPAM", s.JOIN_RAID = "JOIN_RAID", s.OTHER = "OTHER", (_ = r || (r = {})).DM_SPAM = "DM_SPAM", _.MENTION_SPAM = "MENTION_SPAM", _.CHANNEL_SPAM = "CHANNEL_SPAM", _.SUS_NEW_MEMBERS = "SUS_NEW_MEMBERS", _.CHANGING_SETTINGS = "CHANGING_SETTINGS", _.OTHER = "OTHER"
        },
        201131: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isAutomodMessageRecord: function() {
                    return c
                },
                isAutomodNotification: function() {
                    return N
                },
                getActionHeaderText: function() {
                    return f
                },
                getQuarantineReasonString: function() {
                    return R
                },
                extractAutomodNotificationFields: function() {
                    return m
                },
                default: function() {
                    return S
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
                a = n("171149"),
                r = n("427693"),
                i = n("404336"),
                E = n("772193"),
                s = n("657827"),
                _ = n("446674"),
                A = n("42203"),
                d = n("957255"),
                l = n("228944"),
                T = n("85448"),
                O = n("49111"),
                M = n("782340");

            function c(e) {
                return e.type === O.MessageTypes.AUTO_MODERATION_ACTION
            }

            function N(e) {
                var t;
                return null === (t = e.embeds) || void 0 === t ? void 0 : t.some(e => {
                    let {
                        type: t
                    } = e;
                    return t === O.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
                })
            }

            function I(e, t) {
                var n, o, u, a, r;
                let [i] = null !== (n = e.embeds) && void 0 !== n ? n : [];
                if (null != i) {
                    if (i.type === O.MessageEmbedTypes.AUTO_MODERATION_MESSAGE) return null == i ? void 0 : null === (u = i.fields) || void 0 === u ? void 0 : null === (o = u.find(e => {
                        let {
                            rawName: n
                        } = e;
                        return n === t
                    })) || void 0 === o ? void 0 : o.rawValue;
                    if (i.type === O.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION) return null == i ? void 0 : null === (r = i.fields) || void 0 === r ? void 0 : null === (a = r.find(e => {
                        let {
                            rawName: n
                        } = e;
                        return n === t
                    })) || void 0 === a ? void 0 : a.rawValue
                }
            }

            function f(e, t) {
                var n, o;
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : O.NOOP_NULL,
                    s = function(e) {
                        let t = I(e, a.AutomodMessageEmbedKeys.BLOCK_PROFILE_UPDATE_TYPE);
                        if (null != t) return t
                    }(e),
                    _ = function(e) {
                        let t = I(e, a.AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION);
                        if (null != t) return t
                    }(e),
                    A = function(e) {
                        let t = I(e, a.AutomodMessageEmbedKeys.QUARANTINE_EVENT);
                        if (null != t) return t
                    }(e),
                    l = function(e) {
                        let t = I(e, a.AutomodMessageEmbedKeys.QUARANTINE_USER);
                        if (null != t) return t
                    }(e);
                if (null != l) {
                    let e = function(e, t, n) {
                        switch (t) {
                            case E.AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_PROFILE_UPDATE:
                                return function(e) {
                                    switch (e) {
                                        case u.AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_UPDATE:
                                            return M.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_UPDATE;
                                        case u.AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_RESET:
                                            return M.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_RESET;
                                        default:
                                            return
                                    }
                                }(e);
                            case E.AutomodQuarantineUserActionMessageEmbedKeys.QUARANTINE_USER:
                                return function(e) {
                                    switch (e) {
                                        case i.AutomodQuarantineEventMessageEmbedKeys.MESSAGE_SEND:
                                            return M.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_MESSAGE_SEND;
                                        case i.AutomodQuarantineEventMessageEmbedKeys.GUILD_JOIN:
                                            return M.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_ON_GUILD_JOIN;
                                        case i.AutomodQuarantineEventMessageEmbedKeys.USERNAME_UPDATE:
                                            return M.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USERNAME_UPDATE;
                                        default:
                                            return
                                    }
                                }(n);
                            case E.AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_GUEST_JOIN:
                                return function() {
                                    return M.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_GUEST_ON_GUILD_JOIN
                                }()
                        }
                    }(s, _, A);
                    if (null != e) return e
                }
                let T = I(e, a.AutomodMessageEmbedKeys.FLAGGED_MESSAGE_ID),
                    c = d.default.can(O.Permissions.VIEW_CHANNEL, t);
                let N = (n = t, c ? null !== (o = null == n ? void 0 : n.name) && void 0 !== o ? o : "#".concat(M.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER) : "#".concat(M.default.Messages.NO_ACCESS)),
                    f = null != t && c ? r : O.NOOP_NULL,
                    R = function(e, t, n) {
                        let o = I(e, a.AutomodMessageEmbedKeys.VOICE_CHANNEL_STATUS_OUTCOME);
                        if (null == o) return null;
                        let u = "blocked" === o ? M.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_VOICE_CHANNEL_STATUS_HOOK : M.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_VOICE_CHANNEL_STATUS_HOOK;
                        return u.format({
                            channelName: t,
                            channelHook: n
                        })
                    }(e, N, r);
                return null != R ? R : null != T ? M.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_HOOK.format({
                    channelName: N,
                    channelHook: f
                }) : M.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_HOOK.format({
                    channelName: N,
                    channelHook: f
                })
            }

            function R(e) {
                switch (e) {
                    case s.AutomodQuarantineUserMessageEmbedKeys.NICKNAME:
                        return M.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_NICKNAME;
                    case s.AutomodQuarantineUserMessageEmbedKeys.USERNAME:
                        return M.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME;
                    case s.AutomodQuarantineUserMessageEmbedKeys.GLOBAL_NAME:
                        return M.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_GLOBAL_NAME;
                    default:
                        return M.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME
                }
            }

            function m(e) {
                let t = I(e, r.AutomodNotificationEmbedKeys.JOIN_ATTEMPTS),
                    n = I(e, r.AutomodNotificationEmbedKeys.RAID_DATETIME),
                    o = I(e, r.AutomodNotificationEmbedKeys.DMS_SENT),
                    u = I(e, r.AutomodNotificationEmbedKeys.RAID_TYPE),
                    a = I(e, r.AutomodNotificationEmbedKeys.RESOLVED_REASON);
                return {
                    joinAttempts: null != t ? parseInt(t) : void 0,
                    raidDatetime: null != n ? new Date(n) : void 0,
                    dmsSent: null != o ? parseInt(o) : void 0,
                    raidType: null != u ? u : void 0,
                    resolvedReason: null != a ? a : void 0
                }
            }

            function D(e) {
                let t = I(e, a.AutomodMessageEmbedKeys.CHANNEL_ID),
                    n = I(e, a.AutomodMessageEmbedKeys.ALERT_ACTIONS_EXECUTION),
                    o = (0, l.parseAlertActionsExecution)(n);
                return {
                    content: function(e) {
                        var t, n;
                        let [o] = null !== (t = e.embeds) && void 0 !== t ? t : [];
                        return null !== (n = null == o ? void 0 : o.rawDescription) && void 0 !== n ? n : ""
                    }(e),
                    ruleName: I(e, a.AutomodMessageEmbedKeys.RULE_NAME),
                    decisionId: I(e, a.AutomodMessageEmbedKeys.DECISION_ID),
                    keyword: I(e, a.AutomodMessageEmbedKeys.KEYWORD),
                    keywordMatchedContent: I(e, a.AutomodMessageEmbedKeys.KEYWORD_MATCHED_CONTENT),
                    flaggedMessageId: I(e, a.AutomodMessageEmbedKeys.FLAGGED_MESSAGE_ID),
                    timeoutDuration: I(e, a.AutomodMessageEmbedKeys.TIMEOUT_DURATION),
                    quarantineType: I(e, a.AutomodMessageEmbedKeys.QUARANTINE_USER),
                    quarantineAction: I(e, a.AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION),
                    decisionReason: I(e, a.AutomodMessageEmbedKeys.DECISION_REASON),
                    embedChannel: A.default.getChannel(t),
                    embedChannelId: t,
                    alertActionsExecution: null != o ? o : void 0
                }
            }

            function S(e) {
                let t = o.useMemo(() => D(e), [e]),
                    n = (0, _.useStateFromStores)([A.default], () => A.default.getChannel(t.embedChannelId), [t.embedChannelId]);
                return {
                    ...t,
                    embedChannel: n
                }
            }

            function L(e) {
                if (null == e) return null;
                let {
                    alertActionsExecution: t
                } = D(e);
                return null != t ? t : null
            }

            function U(e) {
                if (null == e) return M.default.Messages.GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED;
                switch (e) {
                    case T.RaidResolutionType.LEGITIMATE_ACTIVITY:
                        return M.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_NO_ACTION;
                    case T.RaidResolutionType.DM_SPAM:
                        return M.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_DM_SPAM;
                    case T.RaidResolutionType.JOIN_RAID:
                        return M.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_JOIN_RAID;
                    default:
                        return M.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_OTHER
                }
            }
        },
        143460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AutomodEventType: function() {
                    return r.AutomodEventType
                },
                AutomodTriggerType: function() {
                    return i.AutomodTriggerType
                },
                AutomodActionType: function() {
                    return a.AutomodActionType
                },
                KeywordPreset: function() {
                    return u
                },
                MAX_KEYWORDS_PER_KEYWORD_FILTER: function() {
                    return E
                },
                MAX_KEYWORDS_PER_ALLOWLIST_KEYWORD_FILTER_RULE: function() {
                    return s
                },
                MAX_KEYWORDS_PER_ALLOWLIST_DEFAULT_KEYWORD_RULE: function() {
                    return _
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
                    return O
                },
                MAX_RULE_NAME_LENGTH: function() {
                    return M
                },
                MIN_MENTION_SPAM_LIMIT: function() {
                    return c
                },
                MAX_MENTION_SPAM_LIMIT: function() {
                    return N
                },
                MENTION_SPAM_LIMIT_DEFAULT: function() {
                    return I
                },
                MAX_BLOCK_ACTION_CUSTOM_MESSAGE_LENGTH: function() {
                    return f
                },
                QUARANTINE_USER_ALERT_KEY: function() {
                    return R
                }
            });
            var o, u, a = n("214764"),
                r = n("155481"),
                i = n("363312");
            (o = u || (u = {}))[o.PROFANITY = 1] = "PROFANITY", o[o.SEXUAL_CONTENT = 2] = "SEXUAL_CONTENT", o[o.SLURS = 3] = "SLURS", i.AutomodTriggerType.USER_PROFILE, i.AutomodTriggerType.SERVER_POLICY, i.AutomodTriggerType.MENTION_SPAM, i.AutomodTriggerType.ML_SPAM, i.AutomodTriggerType.DEFAULT_KEYWORD_LIST, i.AutomodTriggerType.KEYWORD;
            let E = 1e3,
                s = 100,
                _ = 1e3,
                A = 10,
                d = 60,
                l = 1,
                T = 1,
                O = 260,
                M = 100,
                c = 1,
                N = 50,
                I = 20,
                f = 150,
                R = "automod-profile-quarantine-alert"
        },
        461439: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                _transformMetadataToCamelCase: function() {
                    return function e(t) {
                        if (null == t) return t;
                        let n = Object.keys(t),
                            u = n.reduce((n, u) => {
                                let a = (0, o.camelCase)(u);
                                return "object" != typeof t[u] || Array.isArray(t[u]) ? n[a] = t[u] : n[a] = e(t[u]), n
                            }, {});
                        return u
                    }
                },
                _transformMetadataToSnakeCase: function() {
                    return function e(t) {
                        if (null == t) return t;
                        let n = Object.keys(t),
                            u = n.reduce((n, u) => {
                                let a = (0, o.snakeCase)(u);
                                return "object" != typeof t[u] || Array.isArray(t[u]) ? n[a] = t[u] : n[a] = e(t[u]), n[a] = t[u], n
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
                    return i
                },
                openSubmitFeedback: function() {
                    return E
                },
                openRaidResolveModal: function() {
                    return s
                },
                openConfirmRemoveMentionRaid: function() {
                    return _
                }
            });
            var o = n("37983");
            n("884691");
            var u = n("77078"),
                a = n("143460"),
                r = n("782340");

            function i(e) {
                return {
                    [a.AutomodActionType.BLOCK_MESSAGE]: (e, t) => new Promise(e => {
                        (0, u.openModalLazy)(async () => {
                            var u;
                            let {
                                default: a
                            } = await n.el("83965").then(n.bind(n, "83965"));
                            return n => (0, o.jsx)(a, {
                                initialCustomMessage: null !== (u = t.metadata.customMessage) && void 0 !== u ? u : "",
                                onSubmit: o => {
                                    t.metadata.customMessage = o, e(t), n.onClose()
                                },
                                ...n,
                                onClose: () => (e(null), n.onClose())
                            })
                        })
                    }),
                    [a.AutomodActionType.FLAG_TO_CHANNEL]: (t, r) => new Promise(i => {
                        (0, u.openModalLazy)(async () => {
                            let {
                                default: u
                            } = await n.el("998730").then(n.bind(n, "998730")), E = t.actions.find(e => e.type === a.AutomodActionType.FLAG_TO_CHANNEL);
                            return n => (0, o.jsx)(u, {
                                action: r,
                                isEdit: null != E,
                                triggerType: t.triggerType,
                                guildId: e,
                                onEditChannel: e => {
                                    r.metadata.channelId = e, t.exemptChannels.add(e), i(r), n.onClose()
                                },
                                ...n,
                                onClose: () => (i(null), n.onClose())
                            })
                        })
                    }),
                    [a.AutomodActionType.USER_COMMUNICATION_DISABLED]: (e, t) => new Promise(r => {
                        (0, u.openModalLazy)(async () => {
                            let {
                                default: u
                            } = await n.el("489118").then(n.bind(n, "489118")), i = e.actions.find(e => e.type === a.AutomodActionType.USER_COMMUNICATION_DISABLED);
                            return n => (0, o.jsx)(u, {
                                action: t,
                                isEdit: null != i,
                                triggerType: e.triggerType,
                                onUpdateDuration: e => {
                                    null != e && (t.metadata.durationSeconds = e), r(t), n.onClose()
                                },
                                ...n,
                                onClose: () => (r(null), n.onClose())
                            })
                        })
                    })
                }
            }

            function E(e, t, a, r) {
                (0, u.openModalLazy)(async () => {
                    let {
                        default: u
                    } = await n.el("593486").then(n.bind(n, "593486"));
                    return n => (0, o.jsx)(u, {
                        ...n,
                        automodDecision: {
                            messageId: e,
                            messageContent: t,
                            decisionId: a,
                            channel: r
                        }
                    })
                })
            }

            function s(e, t) {
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

            function _(e) {
                (0, u.openModal)(t => (0, o.jsx)(u.ConfirmModal, {
                    header: r.default.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_TITLE,
                    confirmText: r.default.Messages.CONFIRM,
                    onConfirm: e,
                    cancelText: r.default.Messages.CANCEL,
                    ...t,
                    children: (0, o.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: r.default.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_BODY
                    })
                }))
            }
        },
        702873: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                validateAutomodRule: function() {
                    return N
                },
                createAutomodRule: function() {
                    return I
                },
                updateAutomodRule: function() {
                    return f
                },
                deleteAutomodRule: function() {
                    return R
                },
                fetchAutomodRules: function() {
                    return m
                },
                executeAlertAction: function() {
                    return D
                },
                removeMentionRaidRestrictionWithFeedback: function() {
                    return S
                },
                clearMentionRaidDetected: function() {
                    return L
                }
            });
            var o = n("872717"),
                u = n("913144"),
                a = n("716241"),
                r = n("305961"),
                i = n("957255"),
                E = n("449008"),
                s = n("299039"),
                _ = n("85448"),
                A = n("461439"),
                d = n("928098"),
                l = n("49111");

            function T(e) {
                return {
                    type: e.type,
                    metadata: (0, A._transformMetadataToSnakeCase)(e.metadata)
                }
            }

            function O(e) {
                var t, n;
                let o = (0, A._transformMetadataToSnakeCase)(e.triggerMetadata);
                return null != o && delete o.keywordLists, {
                    id: e.id,
                    name: e.name,
                    guild_id: e.guildId,
                    event_type: e.eventType,
                    trigger_type: e.triggerType,
                    trigger_metadata: o,
                    actions: e.actions.filter(E.isNotNullish).map(T),
                    enabled: e.enabled,
                    creator_id: e.creatorId,
                    position: e.position,
                    exempt_channels: Array.from(null !== (t = e.exemptChannels) && void 0 !== t ? t : []),
                    exempt_roles: Array.from(null !== (n = e.exemptRoles) && void 0 !== n ? n : [])
                }
            }

            function M(e) {
                return {
                    type: e.type,
                    metadata: (0, A._transformMetadataToCamelCase)(e.metadata)
                }
            }

            function c(e) {
                var t, n, o;
                let u = {
                    id: null !== (t = e.id) && void 0 !== t ? t : s.default.fromTimestamp(Date.now()),
                    name: e.name,
                    guildId: e.guild_id,
                    eventType: e.event_type,
                    triggerType: e.trigger_type,
                    triggerMetadata: (0, A._transformMetadataToCamelCase)(e.trigger_metadata),
                    actions: e.actions.filter(E.isNotNullish).map(M),
                    enabled: e.enabled,
                    creatorId: e.creator_id,
                    position: e.position,
                    exemptChannels: new Set(null !== (n = e.exempt_channels) && void 0 !== n ? n : []),
                    exemptRoles: new Set(null !== (o = e.exempt_roles) && void 0 !== o ? o : [])
                };
                return null != u.triggerMetadata && delete u.triggerMetadata.keywordLists, u
            }
            async function N(e) {
                let t = O(e),
                    n = await o.default.post({
                        url: l.Endpoints.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
                        body: t
                    });
                return (0, A._transformMetadataToCamelCase)(n.body)
            }
            async function I(e) {
                let t = O(e);
                delete t.id;
                let n = await o.default.post({
                    url: l.Endpoints.GUILD_AUTOMOD_RULES(e.guildId),
                    body: t
                });
                return c(n.body)
            }
            async function f(e) {
                let t = O(e),
                    n = await o.default.patch({
                        url: l.Endpoints.GUILD_AUTOMOD_RULE(e.guildId, e.id),
                        body: t
                    });
                return c(n.body)
            }
            async function R(e, t) {
                return await o.default.delete({
                    url: l.Endpoints.GUILD_AUTOMOD_RULE(t, e)
                }), !0
            }
            async function m(e) {
                let t = await o.default.get({
                    url: l.Endpoints.GUILD_AUTOMOD_RULES(e)
                });
                return Array.isArray(t.body) ? t.body.map(c) : []
            }
            async function D(e, t, n) {
                i.default.can(l.Permissions.MANAGE_MESSAGES, t) && await o.default.post({
                    url: l.Endpoints.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
                    body: {
                        message_id: e,
                        channel_id: t.id,
                        alert_action_type: n
                    }
                })
            }

            function S(e, t, n) {
                let u = r.default.getGuild(e);
                if (null != u && !!i.default.can(l.Permissions.MANAGE_GUILD, u))(0, d.openConfirmRemoveMentionRaid)(() => {
                    (0, a.trackWithMetadata)(l.AnalyticEvents.GUILD_AUTOMOD_FEEDBACK, {
                        feedback_type: _.Feedback.MENTION_RAID_REMOVE_RESTRICTION,
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
        }
    }
]);
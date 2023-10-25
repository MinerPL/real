(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["72960"], {
        646074: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatXIcon: function() {
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var o = n("912557"),
                u = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = o.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...a
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, u.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M15.293 15.293a1 1 0 0 1 1.414 0L19 17.586l2.293-2.293a1 1 0 0 1 1.414 1.414L20.414 19l2.293 2.293a1 1 0 0 1-1.414 1.414L19 20.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L17.586 19l-2.293-2.293a1 1 0 0 1 0-1.414Zm3.353-.89-.525-.524a3 3 0 1 0-4.242 4.242l.525.525a.5.5 0 0 1 0 .707l-.525.526c-.46.46-.74 1.032-.838 1.628-.042.25-.231.464-.485.478-.184.01-.37.015-.556.015H2.2c-.859 0-1.318-1.01-.753-1.657l2.066-2.369a.517.517 0 0 0 .041-.617A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 .187-.005.372-.015.556-.014.254-.227.443-.478.485a2.985 2.985 0 0 0-1.628.838l-.525.525a.5.5 0 0 1-.708 0Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var o = n("912557"),
                u = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = o.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...a
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, u.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("920040");
            n("773670");
            var o = n("77078"),
                u = n("845579"),
                i = n("662255"),
                l = n("306160");

            function a(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: a,
                    shiftId: d,
                    showIconFirst: s
                } = e, A = u.DeveloperMode.useSetting();
                if (__OVERLAY__ || !A || !l.SUPPORTS_COPY) return null;
                let c = "devmode-copy-id-".concat(t);
                return (0, r.jsx)(o.MenuItem, {
                    id: c,
                    label: n,
                    action: function(e) {
                        let n = null != d && e.shiftKey ? d : t;
                        (0, l.copy)(n), null == a || a()
                    },
                    icon: i.default,
                    showIconFirst: s
                }, c)
            }
        },
        369035: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRuleDefaultActionsFromConfig: function() {
                    return o
                },
                getDefaultActions: function() {
                    return u
                }
            });
            var r = n("143460");

            function o(e) {
                let t = u(),
                    n = Array.from(e.defaultActionTypes);
                return n.map(e => t[e])
            }

            function u() {
                return {
                    [r.AutomodActionType.BLOCK_MESSAGE]: {
                        type: r.AutomodActionType.BLOCK_MESSAGE,
                        metadata: {
                            customMessage: void 0
                        }
                    },
                    [r.AutomodActionType.FLAG_TO_CHANNEL]: {
                        type: r.AutomodActionType.FLAG_TO_CHANNEL,
                        metadata: {
                            channelId: void 0
                        }
                    },
                    [r.AutomodActionType.USER_COMMUNICATION_DISABLED]: {
                        type: r.AutomodActionType.USER_COMMUNICATION_DISABLED,
                        metadata: {
                            durationSeconds: 60
                        }
                    },
                    [r.AutomodActionType.QUARANTINE_USER]: {
                        type: r.AutomodActionType.QUARANTINE_USER,
                        metadata: {}
                    }
                }
            }
        },
        831585: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AutomodNonCommunityGuildsRelease: function() {
                    return o
                },
                AutomodMentionRaidLimit: function() {
                    return u
                },
                AutomodMentionRaidNotice: function() {
                    return i
                },
                AutomodCustomMessage: function() {
                    return l
                },
                AutomodServerPolicy: function() {
                    return a
                },
                AutomodUserProfile: function() {
                    return d
                }
            });
            var r = n("862205");
            let o = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2022-11_automod_non_community_guilds_release",
                    label: "Automod Non-Community Guilds Release",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Non-Community Guilds Release",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                u = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2022-12_mention_raid_limit",
                    label: "Automod Mention Raid Limit",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Mention Raid Limit",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                i = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-01_mention_raid_notice",
                    label: "Automod Mention Raid Notice",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Mention Raid Notice",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-02_automod_custom_message",
                    label: "Automod Custom Message",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Custom Message",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                a = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-02_free_form",
                    label: "Automod Server Policy",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Server Policy",
                        config: {
                            enabled: !0
                        }
                    }, {
                        id: 10,
                        label: "Automod Server Policy Rules Summarization",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                d = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-05_automod_user_profile_ab",
                    label: "Automod on User Profile A/B",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod on User Profile enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                })
        },
        454686: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isRuleKeywordFilter: function() {
                    return c
                },
                isRuleMLSpamFilter: function() {
                    return E
                },
                isRuleDefaultKeywordListFilter: function() {
                    return _
                },
                isRuleMentionSpamFilter: function() {
                    return T
                },
                isRuleServerPolicyFilter: function() {
                    return g
                },
                isRuleUserProfileFilter: function() {
                    return f
                },
                createDefaultRule: function() {
                    return R
                },
                validateKeywordsOrThrow: function() {
                    return m
                },
                validateRuleBeforeSaveOrThrow: function() {
                    return M
                },
                isBackendPersistedRule: function() {
                    return O
                },
                eventTypeToName: function() {
                    return p
                },
                actionTypeToName: function() {
                    return S
                },
                triggerTypeToName: function() {
                    return y
                }
            });
            var r = n("816140"),
                o = n("271938"),
                u = n("369035"),
                i = n("600798"),
                l = n("353575"),
                a = n("296839"),
                d = n("143460"),
                s = n("782340");
            let A = (e, t) => "".concat(e, "-").concat(t, "-new-rule"),
                c = e => (null == e ? void 0 : e.triggerType) === d.AutomodTriggerType.KEYWORD,
                E = e => (null == e ? void 0 : e.triggerType) === d.AutomodTriggerType.ML_SPAM,
                _ = e => (null == e ? void 0 : e.triggerType) === d.AutomodTriggerType.DEFAULT_KEYWORD_LIST,
                T = e => (null == e ? void 0 : e.triggerType) === d.AutomodTriggerType.MENTION_SPAM,
                g = e => (null == e ? void 0 : e.triggerType) === d.AutomodTriggerType.SERVER_POLICY,
                f = e => (null == e ? void 0 : e.triggerType) === d.AutomodTriggerType.USER_PROFILE;

            function R(e, t) {
                let n = a.triggerConfigs[t],
                    r = (0, a.getDefaultTriggerMetadataForTriggerType)(t, e),
                    i = {
                        id: A(e, t),
                        name: n.getDefaultRuleName(),
                        guildId: e,
                        eventType: n.eventType,
                        triggerType: t,
                        triggerMetadata: r,
                        enabled: !0,
                        creatorId: o.default.getId(),
                        actions: (0, u.getRuleDefaultActionsFromConfig)(n),
                        position: 0,
                        exemptChannels: new Set,
                        exemptRoles: new Set
                    };
                if (O(i)) throw Error(s.default.Messages.GUILD_AUTOMOD_NEW_RULE_ERROR);
                let d = (0, l.getRuleCountByTriggerType)(e, t);
                return d > 0 && (i.name += " ".concat(d + 1)), i
            }

            function m(e, t) {
                if (e.length > t) throw Error(s.default.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_TOO_MANY_KEYWORDS.format({
                    limit: t
                }));
                e.forEach(e => {
                    if (e.length > d.MAX_CHARACTERS_PER_KEYWORD || e.length < d.MIN_CHARACTERS_PER_KEYWORD) throw new i.InvalidKeywordError(s.default.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_INVALID_KEYWORD_LENGTH.format({
                        keyword: e,
                        max: d.MAX_CHARACTERS_PER_KEYWORD,
                        min: d.MIN_CHARACTERS_PER_KEYWORD
                    }))
                })
            }

            function M(e) {
                if (c(e)) {
                    var t, n;
                    let r = null !== (t = e.triggerMetadata.keywordFilter) && void 0 !== t ? t : [],
                        o = null !== (n = e.triggerMetadata.regexPatterns) && void 0 !== n ? n : [];
                    if (0 === r.length && 0 === o.length) throw Error(s.default.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_NO_KEYWORDS_OR_REGEX);
                    m(r, d.MAX_KEYWORDS_PER_KEYWORD_FILTER), ! function(e) {
                        if (e.length > d.MAX_REGEX_PATTERNS_PER_KEYWORD_FILTER) throw Error(s.default.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_TOO_MANY_REGEX.format({
                            limit: d.MAX_REGEX_PATTERNS_PER_KEYWORD_FILTER
                        }));
                        e.forEach(e => {
                            if (e.length > d.MAX_REGEX_PATTERN_LENGTH || e.length < d.MIN_REGEX_PATTERN_LENGTH) throw new i.InvalidRegexPatternError(s.default.Messages.GUILD_AUTOMOD_REGEX_ERROR_INVALID_REGEX_LENGTH.format({
                                regex: e,
                                max: d.MAX_REGEX_PATTERN_LENGTH,
                                min: d.MIN_REGEX_PATTERN_LENGTH
                            }))
                        })
                    }(o)
                }
                if (0 === e.actions.length) throw Error(s.default.Messages.GUILD_AUTOMOD_ERROR_NO_ACTIONS)
            }

            function O(e) {
                var t;
                return (0, r.isSnowflake)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "INVALID_SNOWFLAKE")
            }

            function p(e) {
                if (e === d.AutomodEventType.MESSAGE_SEND) return s.default.Messages.GUILD_AUTOMOD_EVENT_TYPE_MESSAGE_SEND;
                return s.default.Messages.GUILD_AUTOMOD_UNKNOWN
            }

            function S(e) {
                switch (e) {
                    case d.AutomodActionType.BLOCK_MESSAGE:
                        return s.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
                    case d.AutomodActionType.FLAG_TO_CHANNEL:
                        return s.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
                    default:
                        return s.default.Messages.GUILD_AUTOMOD_UNKNOWN
                }
            }

            function y(e) {
                switch (e) {
                    case d.AutomodTriggerType.KEYWORD:
                        return s.default.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME;
                    case d.AutomodTriggerType.ML_SPAM:
                        return s.default.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_NAME;
                    case d.AutomodTriggerType.DEFAULT_KEYWORD_LIST:
                        return s.default.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_FILTER_NAME;
                    default:
                        return s.default.Messages.GUILD_AUTOMOD_UNKNOWN
                }
            }
        },
        353575: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRuleCountByTriggerType: function() {
                    return E
                },
                useSyncAutomodRules: function() {
                    return _
                },
                useSyncAutomodRulesEffect: function() {
                    return T
                },
                useAutomodRulesList: function() {
                    return g
                }
            });
            var r = n("773670"),
                o = n("710835"),
                u = n("47370"),
                i = n("448993"),
                l = n("702873"),
                a = n("254365"),
                d = n("143460");
            let s = {},
                A = e => {
                    let t = {
                        [d.AutomodTriggerType.KEYWORD]: [],
                        [d.AutomodTriggerType.ML_SPAM]: [],
                        [d.AutomodTriggerType.DEFAULT_KEYWORD_LIST]: [],
                        [d.AutomodTriggerType.MENTION_SPAM]: [],
                        [d.AutomodTriggerType.USER_PROFILE]: [],
                        [d.AutomodTriggerType.SERVER_POLICY]: []
                    };
                    return e.forEach(e => {
                        var n;
                        let {
                            triggerType: r
                        } = e;
                        null === (n = t[r]) || void 0 === n || n.push(e)
                    }), t
                },
                c = (0, o.default)((e, t) => ({
                    rules: {},
                    fetching: !1,
                    error: null,
                    updateRule: n => {
                        var r, o;
                        let {
                            guildId: u,
                            id: i,
                            triggerType: l
                        } = n, {
                            rules: d
                        } = t(), s = null !== (r = d[u]) && void 0 !== r ? r : {}, A = null !== (o = s[l]) && void 0 !== o ? o : [], c = A.some(e => e.id === i), E = A.filter(e => (!(0, a.isDefaultRuleId)(e.id) || e.triggerType !== l) && !0), _ = c ? E.map(e => e.id === i ? n : e) : [...E, n];
                        e({
                            rules: {
                                ...d,
                                [u]: {
                                    ...s,
                                    [l]: _
                                }
                            },
                            error: null
                        })
                    },
                    removeRule: (n, r) => {
                        let {
                            rules: o
                        } = t(), u = o[r], i = Object.keys(u).reduce((e, t) => {
                            var r;
                            let o = Number(t),
                                i = null !== (r = u[o]) && void 0 !== r ? r : [];
                            return e[o] = i.filter(e => e.id !== n), e
                        }, u);
                        e({
                            rules: {
                                ...o,
                                [r]: i
                            },
                            error: null
                        })
                    },
                    syncRules: async n => {
                        if (function(e) {
                                var t;
                                let n = Date.now(),
                                    r = null !== (t = s[e]) && void 0 !== t ? t : 0;
                                return n - r > 2e4
                            }(n)) {
                            s[n] = Date.now();
                            try {
                                let r = await (0, l.fetchAutomodRules)(n),
                                    o = A(r),
                                    u = t().rules;
                                e({
                                    rules: {
                                        ...u,
                                        [n]: o
                                    },
                                    error: null
                                })
                            } catch (n) {
                                let t = new i.APIError(n);
                                e({
                                    error: t
                                })
                            }
                        }
                    }
                })),
                E = (e, t) => {
                    var n, r;
                    let o = c.getState().rules,
                        u = null !== (r = null === (n = o[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : [];
                    return u.length
                };

            function _(e) {
                let [t, n] = r.useState(!1), [o, i] = c(e => [e.syncRules, e.fetching], u.default), l = r.useCallback(async () => {
                    if (!i && null != e) try {
                        n(!0), await o(e)
                    } finally {
                        n(!1)
                    }
                }, [e, i, o]);
                return [t, l]
            }

            function T(e) {
                let [t, n] = _(e);
                return r.useEffect(() => {
                    (async () => {
                        await n()
                    })()
                }, [e, n]), [t, n]
            }

            function g(e) {
                return c(t => {
                    var n;
                    return {
                        rulesByTriggerType: null !== (n = t.rules[null != e ? e : ""]) && void 0 !== n ? n : {},
                        updateRule: t.updateRule,
                        removeRule: t.removeRule
                    }
                })
            }
        },
        296839: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AutomodTriggerConfigFlags: function() {
                    return u
                },
                triggerConfigs: function() {
                    return c
                },
                AutomodTriggerCategory: function() {
                    return i
                },
                checkTriggerTypeForFlag: function() {
                    return _
                },
                getAvailableActionTypes: function() {
                    return T
                },
                validateRuleByTriggerConfigOrThrow: function() {
                    return g
                },
                useAvailableTriggerTypes: function() {
                    return f
                },
                getDefaultTriggerMetadataForTriggerType: function() {
                    return R
                }
            });
            var r, o, u, i, l = n("773670"),
                a = n("926809"),
                d = n("348934"),
                s = n("143460"),
                A = n("782340");
            (r = u || (u = {})).NEW = "new", r.RECOMMENDED = "recommended", r.BETA = "beta", r.ALPHA = "alpha";
            let c = {
                [s.AutomodTriggerType.SPAM_LINK]: {
                    getDefaultRuleName: () => A.default.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME,
                    type: s.AutomodTriggerType.SPAM_LINK,
                    eventType: s.AutomodEventType.MESSAGE_SEND,
                    perGuildMaxCount: 0,
                    availableActionTypes: new Set,
                    flags: new Set,
                    defaultActionTypes: new Set
                },
                [s.AutomodTriggerType.KEYWORD]: {
                    getDefaultRuleName: () => A.default.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME,
                    type: s.AutomodTriggerType.KEYWORD,
                    eventType: s.AutomodEventType.MESSAGE_SEND,
                    perGuildMaxCount: 6,
                    availableActionTypes: new Set([s.AutomodActionType.BLOCK_MESSAGE, s.AutomodActionType.FLAG_TO_CHANNEL, s.AutomodActionType.USER_COMMUNICATION_DISABLED]),
                    flags: new Set,
                    defaultActionTypes: new Set([s.AutomodActionType.BLOCK_MESSAGE])
                },
                [s.AutomodTriggerType.ML_SPAM]: {
                    getDefaultRuleName: () => A.default.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_NAME,
                    type: s.AutomodTriggerType.ML_SPAM,
                    eventType: s.AutomodEventType.MESSAGE_SEND,
                    perGuildMaxCount: 1,
                    availableActionTypes: new Set([s.AutomodActionType.BLOCK_MESSAGE, s.AutomodActionType.FLAG_TO_CHANNEL]),
                    flags: new Set([]),
                    defaultActionTypes: new Set([s.AutomodActionType.BLOCK_MESSAGE])
                },
                [s.AutomodTriggerType.DEFAULT_KEYWORD_LIST]: {
                    getDefaultRuleName: () => A.default.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_FILTER_NAME,
                    type: s.AutomodTriggerType.DEFAULT_KEYWORD_LIST,
                    eventType: s.AutomodEventType.MESSAGE_SEND,
                    perGuildMaxCount: 1,
                    availableActionTypes: new Set([s.AutomodActionType.BLOCK_MESSAGE, s.AutomodActionType.FLAG_TO_CHANNEL]),
                    flags: new Set([]),
                    defaultActionTypes: new Set([s.AutomodActionType.BLOCK_MESSAGE])
                },
                [s.AutomodTriggerType.MENTION_SPAM]: {
                    getDefaultRuleName: () => A.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_NAME,
                    type: s.AutomodTriggerType.MENTION_SPAM,
                    eventType: s.AutomodEventType.MESSAGE_SEND,
                    perGuildMaxCount: 1,
                    availableActionTypes: new Set([s.AutomodActionType.BLOCK_MESSAGE, s.AutomodActionType.FLAG_TO_CHANNEL, s.AutomodActionType.USER_COMMUNICATION_DISABLED]),
                    flags: new Set([]),
                    defaultActionTypes: new Set([s.AutomodActionType.BLOCK_MESSAGE])
                },
                [s.AutomodTriggerType.USER_PROFILE]: {
                    getDefaultRuleName: () => A.default.Messages.GUILD_AUTOMOD_USER_PROFILE_FILTER_NAME,
                    type: s.AutomodTriggerType.USER_PROFILE,
                    eventType: s.AutomodEventType.GUILD_MEMBER_JOIN_OR_UPDATE,
                    perGuildMaxCount: 1,
                    availableActionTypes: new Set([s.AutomodActionType.QUARANTINE_USER, s.AutomodActionType.FLAG_TO_CHANNEL]),
                    flags: new Set([u.BETA]),
                    defaultActionTypes: new Set([s.AutomodActionType.QUARANTINE_USER])
                },
                [s.AutomodTriggerType.SERVER_POLICY]: {
                    getDefaultRuleName: () => A.default.Messages.GUILD_AUTOMOD_SERVER_POLICY_FILTER_NAME,
                    type: s.AutomodTriggerType.SERVER_POLICY,
                    eventType: s.AutomodEventType.MESSAGE_SEND,
                    perGuildMaxCount: 1,
                    availableActionTypes: new Set([s.AutomodActionType.FLAG_TO_CHANNEL]),
                    flags: new Set([u.ALPHA]),
                    defaultActionTypes: new Set
                }
            };
            (o = i || (i = {})).MEMBERS = "members", o.CONTENT = "content";
            let E = {
                    [i.MEMBERS]: [c[s.AutomodTriggerType.USER_PROFILE]],
                    [i.CONTENT]: [c[s.AutomodTriggerType.SERVER_POLICY], c[s.AutomodTriggerType.MENTION_SPAM], c[s.AutomodTriggerType.ML_SPAM], c[s.AutomodTriggerType.DEFAULT_KEYWORD_LIST], c[s.AutomodTriggerType.KEYWORD]]
                },
                _ = (e, t) => {
                    let n = c[e].flags;
                    return n.has(t)
                };

            function T(e) {
                return Array.from(c[e].availableActionTypes)
            }

            function g(e, t) {
                let {
                    id: n,
                    eventType: r,
                    triggerType: o,
                    actions: u
                } = e, i = c[o], l = t.filter(e => n !== e.id && e.triggerType === o).length;
                if (l > i.perGuildMaxCount) throw Error("You have exceeded the maximum number of rules of type ".concat(o));
                if (u.some(e => !i.availableActionTypes.has(e.type))) throw Error("You have provided an action that is not available for this trigger type");
                if (r !== i.eventType) throw Error("You have provided an event type that is not available for this trigger type")
            }

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = (0, d.useIsUserProfileRuleEnabled)(e, t),
                    r = (0, a.useIsServerPolicyExperimentEnabled)(e);
                return l.useMemo(() => {
                    let e = {
                        [i.MEMBERS]: [],
                        [i.CONTENT]: []
                    };
                    return Object.keys(E).reduce((e, t) => {
                        let o = E[t],
                            u = o.filter(e => {
                                if (e.type === s.AutomodTriggerType.SERVER_POLICY && !r || e.type === s.AutomodTriggerType.USER_PROFILE && !n) return !1;
                                let t = e.perGuildMaxCount > 0;
                                return t
                            }).map(e => e.type);
                        return e[t] = u, e
                    }, e)
                }, [n, r])
            }

            function R(e, t) {
                let n = (0, a.isInMentionRaidExperiment)(t);
                switch (e) {
                    case s.AutomodTriggerType.DEFAULT_KEYWORD_LIST:
                        return {
                            allowList: [], presets: []
                        };
                    case s.AutomodTriggerType.USER_PROFILE:
                    case s.AutomodTriggerType.KEYWORD:
                        return {
                            keywordFilter: [], regexPatterns: [], allowList: []
                        };
                    case s.AutomodTriggerType.MENTION_SPAM:
                        return {
                            mentionTotalLimit: s.MENTION_SPAM_LIMIT_DEFAULT, mentionRaidProtectionEnabled: n
                        };
                    case s.AutomodTriggerType.ML_SPAM:
                    case s.AutomodTriggerType.SERVER_POLICY:
                    default:
                        return
                }
            }
        },
        926809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isInNonCommunityGuildsRollout: function() {
                    return o
                },
                useIsInNonCommunityGuildsRollout: function() {
                    return u
                },
                isInMentionRaidExperiment: function() {
                    return i
                },
                useIsMentionRaidExperimentEnabled: function() {
                    return l
                },
                isInMentionRaidNoticeExperiment: function() {
                    return a
                },
                useIsCustomMessageExperimentEnabled: function() {
                    return d
                },
                useIsServerPolicyExperimentEnabled: function() {
                    return s
                },
                useIsUserProfileRuleExperimentEnabled: function() {
                    return A
                }
            });
            var r = n("831585");

            function o(e) {
                let {
                    enabled: t
                } = r.AutomodNonCommunityGuildsRelease.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_1"
                });
                return t
            }

            function u(e) {
                let {
                    enabled: t
                } = r.AutomodNonCommunityGuildsRelease.useExperiment({
                    guildId: e,
                    location: "988d4e_2"
                }, {
                    autoTrackExposure: !0
                });
                return t
            }

            function i(e) {
                let {
                    enabled: t
                } = r.AutomodMentionRaidLimit.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_3"
                });
                return t
            }

            function l(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    {
                        enabled: n
                    } = r.AutomodMentionRaidLimit.useExperiment({
                        guildId: e,
                        location: "988d4e_4"
                    }, {
                        autoTrackExposure: t
                    });
                return n
            }

            function a(e) {
                if (null == e) return !1;
                let {
                    enabled: t
                } = r.AutomodMentionRaidNotice.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_5"
                });
                return t
            }

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        enabled: n
                    } = r.AutomodCustomMessage.useExperiment({
                        guildId: e,
                        location: "988d4e_6"
                    }, {
                        autoTrackExposure: t
                    });
                return n
            }

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        enabled: n
                    } = r.AutomodServerPolicy.useExperiment({
                        guildId: e,
                        location: "988d4e_7"
                    }, {
                        autoTrackExposure: t
                    });
                return n
            }

            function A(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        enabled: n
                    } = r.AutomodUserProfile.useExperiment({
                        guildId: e,
                        location: "988d4e_8"
                    }, {
                        autoTrackExposure: t
                    });
                return n
            }
        },
        314865: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getKeywordsFromString: function() {
                    return i
                },
                dedupeKeywords: function() {
                    return l
                },
                sortKeywords: function() {
                    return a
                },
                getKeywordStringFromKeywordFilter: function() {
                    return d
                },
                isKeywordParseableString: function() {
                    return s
                }
            });
            let r = /[\t\n,]/g,
                o = /\s{2,}/g,
                u = /[*"']/g;

            function i(e) {
                return e.split(r).map(e => e.replace(o, " ").trim()).filter(e => e.length > 0)
            }

            function l(e) {
                let t = new Set(e);
                return Array.from(t)
            }

            function a(e) {
                return e.sort((e, t) => {
                    let n = e.replaceAll(u, ""),
                        r = t.replaceAll(u, "");
                    return n.localeCompare(r)
                })
            }

            function d(e) {
                return e.join(", ")
            }

            function s(e) {
                return e.includes("\n") || e.includes(",")
            }
        },
        348934: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canCurrentUserManageMessageFilters: function() {
                    return d
                },
                canCurrentUserManageAutomod: function() {
                    return s
                },
                useCanCurrentUserManageAutomod: function() {
                    return A
                },
                useShowAutomodCustomBlockMessageUpsell: function() {
                    return c
                },
                useIsUserProfileRuleEnabled: function() {
                    return E
                },
                useShowAutomodUserProfileUpsell: function() {
                    return _
                }
            });
            var r = n("498225"),
                o = n("305961"),
                u = n("957255"),
                i = n("926809"),
                l = n("49111");
            let a = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, u.default],
                    [n, r] = t,
                    a = n.getGuild(e);
                if (null == a) return !1;
                let d = a.hasFeature(l.GuildFeatures.COMMUNITY) || (0, i.isInNonCommunityGuildsRollout)(e);
                return d && r.can(l.Permissions.MANAGE_GUILD, a)
            };

            function d(e) {
                if (null == e) return !1;
                let t = a(e);
                return t
            }

            function s(e) {
                let t = a(e);
                return t
            }

            function A(e) {
                return (0, r.useStateFromStores)([o.default, u.default], () => a(e, [o.default, u.default]), [e])
            }

            function c(e) {
                var t;
                let n = (0, r.useStateFromStores)([u.default], () => u.default.can(l.Permissions.MANAGE_GUILD, e), [e]),
                    o = (0, i.useIsCustomMessageExperimentEnabled)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "", !1);
                return o && n
            }

            function E(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    u = (0, r.useStateFromStores)([o.default], () => {
                        var n;
                        return null !== (t = null === (n = o.default.getGuild(e)) || void 0 === n ? void 0 : n.hasFeature(l.GuildFeatures.AUTOMOD_TRIGGER_USER_PROFILE)) && void 0 !== t && t
                    }, [e]),
                    a = (0, i.useIsUserProfileRuleExperimentEnabled)(e, n);
                return a || u
            }

            function _(e) {
                var t, n;
                let r = E(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "", !0),
                    o = A(null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "");
                return r && o
            }
        },
        254365: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isDefaultRuleId: function() {
                    return o
                }
            });
            let r = new Set(["1030554520465440818"]);

            function o(e) {
                return null != e && r.has(e)
            }
        },
        151866: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAutomodEditingRuleActions: function() {
                    return R
                },
                useAutomodEditingRuleState: function() {
                    return m
                }
            });
            var r = n("427964"),
                o = n.n(r),
                u = n("710835"),
                i = n("448993"),
                l = n("449008"),
                a = n("600798"),
                d = n("454686"),
                s = n("296839"),
                A = n("702873"),
                c = n("314865"),
                E = n("254365"),
                _ = n("49111"),
                T = n("782340");
            let g = Object.freeze({
                    editingRule: null,
                    hasChanges: !1,
                    isLoading: !1,
                    errorMessage: null
                }),
                f = (0, u.default)((e, t) => ({
                    editingRule: null,
                    hasChanges: !1,
                    setEditingRule: n => {
                        let r = t().editingRule,
                            u = null != n && null != r && n.id === r.id,
                            i = o.cloneDeep(n);
                        null != i && (i = {
                            ...i,
                            actions: i.actions.filter(l.isNotNullish)
                        }), e({
                            editingRule: i,
                            hasChanges: u,
                            errorMessage: null
                        })
                    },
                    createNewEditingRule: (t, n, r) => {
                        let o = {
                            ...(0, d.createDefaultRule)(t, n),
                            ...null != r ? r : {}
                        };
                        return e({
                            editingRule: o,
                            hasChanges: !1
                        }), o
                    },
                    isLoading: !1,
                    errorMessage: null,
                    cancelEditingRule: () => {
                        e({
                            ...g
                        })
                    },
                    saveRule: async (t, n) => {
                        if (null == t) return e({
                            ...g
                        }), null;
                        try {
                            var r, o, u;
                            (0, d.isRuleKeywordFilter)(t) && (t.triggerMetadata.keywordFilter = (0, c.sortKeywords)((0, c.dedupeKeywords)(null !== (r = t.triggerMetadata.keywordFilter) && void 0 !== r ? r : [])), t.triggerMetadata.allowList = (0, c.sortKeywords)((0, c.dedupeKeywords)(null !== (o = t.triggerMetadata.allowList) && void 0 !== o ? o : []))), (0, d.isRuleDefaultKeywordListFilter)(t) && (t.triggerMetadata.allowList = (0, c.sortKeywords)((0, c.dedupeKeywords)(null !== (u = t.triggerMetadata.allowList) && void 0 !== u ? u : []))), (0, s.validateRuleByTriggerConfigOrThrow)(t, n), (0, d.validateRuleBeforeSaveOrThrow)(t)
                        } catch (t) {
                            return t instanceof a.InvalidKeywordError ? e({
                                errorMessage: T.default.Messages.GUILD_AUTOMOD_KEYWORD_GENERIC_SAVE_ERROR,
                                isLoading: !1
                            }) : t instanceof a.InvalidRegexPatternError ? e({
                                errorMessage: T.default.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR,
                                isLoading: !1
                            }) : e({
                                errorMessage: t.message,
                                isLoading: !1
                            }), null
                        }
                        try {
                            e({
                                isLoading: !0
                            });
                            let n = null;
                            return n = (0, d.isBackendPersistedRule)(t) && !(0, E.isDefaultRuleId)(t.id) ? await (0, A.updateAutomodRule)(t) : await (0, A.createAutomodRule)(t), e({
                                ...g
                            }), n
                        } catch (n) {
                            let t = new i.APIError(n);
                            e({
                                isLoading: !1,
                                errorMessage: function(e) {
                                    if (e.code === _.AbortCodes.INVALID_FORM_BODY) {
                                        var t, n;
                                        if ((null === (n = e.errors) || void 0 === n ? void 0 : null === (t = n.trigger_metadata) || void 0 === t ? void 0 : t.regex_patterns) != null) return T.default.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR
                                    }
                                    return e.getAnyErrorMessage()
                                }(t)
                            })
                        }
                        return null
                    },
                    saveEditingRule: e => {
                        let {
                            editingRule: n,
                            saveRule: r
                        } = t();
                        return r(n, e)
                    }
                }));

            function R() {
                return f(e => ({
                    hasChanges: e.hasChanges,
                    editingRule: e.editingRule,
                    isLoading: e.isLoading,
                    errorMessage: e.errorMessage,
                    saveRule: e.saveRule,
                    saveEditingRule: e.saveEditingRule,
                    cancelEditingRule: e.cancelEditingRule
                }))
            }

            function m() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = f(e => ({
                        hasChanges: e.hasChanges,
                        editingRule: e.editingRule,
                        setEditingRule: e.setEditingRule,
                        createNewEditingRule: e.createNewEditingRule
                    }));
                return null != e && t.setEditingRule(e), t
            }
        },
        462392: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getActionInfo: function() {
                    return M
                }
            });
            var r = n("679653"),
                o = n("42203"),
                u = n("27618"),
                i = n("697218"),
                l = n("593195"),
                a = n("631236"),
                d = n("491401"),
                s = n("381546"),
                A = n("143460"),
                c = n("903639"),
                E = n("782340");
            let _ = e => {
                    if (e === A.AutomodActionType.QUARANTINE_USER) return !1;
                    return !0
                },
                T = e => {
                    switch (e) {
                        case A.AutomodActionType.BLOCK_MESSAGE:
                        case A.AutomodActionType.FLAG_TO_CHANNEL:
                        case A.AutomodActionType.USER_COMMUNICATION_DISABLED:
                        case A.AutomodActionType.QUARANTINE_USER:
                            return !0;
                        default:
                            return !1
                    }
                },
                g = e => {
                    switch (e) {
                        case A.AutomodActionType.BLOCK_MESSAGE:
                            return E.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
                        case A.AutomodActionType.FLAG_TO_CHANNEL:
                            return E.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
                        case A.AutomodActionType.USER_COMMUNICATION_DISABLED:
                            return E.default.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER;
                        case A.AutomodActionType.QUARANTINE_USER:
                            return E.default.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER
                    }
                },
                f = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A.AutomodTriggerType.KEYWORD;
                    switch (e) {
                        case A.AutomodActionType.BLOCK_MESSAGE:
                            switch (t) {
                                case A.AutomodTriggerType.MENTION_SPAM:
                                    return E.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;
                                case A.AutomodTriggerType.ML_SPAM:
                                    return E.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;
                                default:
                                    return E.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION
                            }
                        case A.AutomodActionType.FLAG_TO_CHANNEL:
                            return E.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;
                        case A.AutomodActionType.USER_COMMUNICATION_DISABLED:
                            return E.default.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION;
                        case A.AutomodActionType.QUARANTINE_USER:
                            return E.default.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER_DESCRIPTION
                    }
                },
                R = (e, t) => {
                    var n, l, a;
                    switch (e) {
                        case A.AutomodActionType.QUARANTINE_USER:
                        case A.AutomodActionType.BLOCK_MESSAGE:
                            return null;
                        case A.AutomodActionType.FLAG_TO_CHANNEL: {
                            let e = null == t ? void 0 : null === (n = t.metadata) || void 0 === n ? void 0 : n.channelId;
                            if (null == e) return null;
                            let l = o.default.getChannel(e);
                            if (null == l) return null;
                            let a = (0, r.computeChannelName)(l, i.default, u.default);
                            return E.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format({
                                channelName: a
                            })
                        }
                        case A.AutomodActionType.USER_COMMUNICATION_DISABLED: {
                            let e = null !== (a = null == t ? void 0 : null === (l = t.metadata) || void 0 === l ? void 0 : l.durationSeconds) && void 0 !== a ? a : 0,
                                n = (0, c.getFriendlyDurationString)(e);
                            if (null == n) return null;
                            return E.default.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format({
                                duration: n
                            })
                        }
                    }
                },
                m = e => {
                    switch (e) {
                        case A.AutomodActionType.BLOCK_MESSAGE:
                            return s.default;
                        case A.AutomodActionType.FLAG_TO_CHANNEL:
                            return l.default;
                        case A.AutomodActionType.USER_COMMUNICATION_DISABLED:
                            return d.default;
                        case A.AutomodActionType.QUARANTINE_USER:
                            return a.default
                    }
                };

            function M(e, t, n) {
                var r, o, u, i;
                return T(e) ? {
                    headerText: null !== (r = g(e)) && void 0 !== r ? r : "",
                    descriptionText: null !== (o = f(e, n)) && void 0 !== o ? o : "",
                    helperText: null !== (u = R(e, t)) && void 0 !== u ? u : null,
                    icon: null !== (i = m(e)) && void 0 !== i ? i : s.default,
                    isEditable: _(e)
                } : null
            }
        },
        155158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                confirmRuleDelete: function() {
                    return i
                },
                confirmAddKeyword: function() {
                    return l
                },
                createOnPreventNavigation: function() {
                    return a
                }
            });
            var r = n("920040");
            n("773670");
            var o = n("77078");

            function u(e) {
                return new Promise(t => {
                    (0, o.openModalLazy)(() => e(() => {
                        t(!0)
                    }, e => (t(!1), e())))
                })
            }
            let i = e => u(async (t, o) => {
                    let {
                        default: u
                    } = await n.el("609051").then(n.bind(n, "609051"));
                    return n => (0, r.jsx)(u, {
                        ...n,
                        ruleName: e,
                        onConfirm: t,
                        onClose: () => o(n.onClose),
                        onCancel: () => o(n.onClose)
                    })
                }),
                l = (e, t) => u(async (o, u) => {
                    let {
                        default: i
                    } = await n.el("770332").then(n.bind(n, "770332"));
                    return n => (0, r.jsx)(i, {
                        ...n,
                        ruleName: e,
                        keyword: t,
                        onConfirm: o,
                        onClose: () => u(n.onClose),
                        onCancel: () => u(n.onClose)
                    })
                }),
                a = e => t => u(async (o, u) => {
                    let {
                        default: i
                    } = await n.el("282683").then(n.bind(n, "282683")), l = () => {
                        t(), o()
                    };
                    return t => (0, r.jsx)(i, {
                        ruleName: e,
                        ...t,
                        onConfirm: l,
                        onClose: () => u(t.onClose),
                        onCancel: () => u(t.onClose)
                    })
                })
        },
        631236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("920040");
            n("773670");
            var o = n("469563"),
                u = n("646074"),
                i = n("75196"),
                l = (0, o.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: o = "currentColor",
                        ...u
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, i.default)(u),
                        width: t,
                        height: n,
                        fill: "None",
                        viewBox: "0 0 24 24",
                        children: [(0, r.jsx)("path", {
                            d: "M4.25947 16.5917C3.14082 14.7059 2.74905 12.4766 3.15775 10.3224C3.56644 8.16824 4.74748 6.23734 6.47909 4.89231C8.2107 3.54728 10.3738 2.88064 12.5621 3.01758C14.7504 3.15452 16.8135 4.08562 18.3639 5.63603C19.9144 7.18644 20.8455 9.24952 20.9824 11.4379C21.1194 13.6262 20.4527 15.7893 19.1077 17.5209C17.7627 19.2525 15.8318 20.4335 13.6776 20.8422C11.5234 21.2509 9.29412 20.8592 7.40833 19.7405L7.40835 19.7405L4.29862 20.6289C4.16996 20.6657 4.03381 20.6674 3.90428 20.6338C3.77475 20.6003 3.65655 20.5327 3.56194 20.4381C3.46732 20.3434 3.39973 20.2252 3.36616 20.0957C3.3326 19.9662 3.33429 19.83 3.37105 19.7014L4.25954 16.5916L4.25947 16.5917Z",
                            stroke: o,
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }), (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.30605 8.30602C7.89802 8.71404 7.89802 9.37558 8.30605 9.78361L10.5224 12L8.30606 14.2164C7.89803 14.6244 7.89803 15.2859 8.30606 15.694C8.71409 16.102 9.37563 16.102 9.78365 15.694L12 13.4776L14.2164 15.694C14.6244 16.102 15.286 16.102 15.694 15.694C16.102 15.2859 16.102 14.6244 15.694 14.2164L13.4776 12L15.694 9.78361C16.102 9.37558 16.102 8.71404 15.694 8.30602C15.286 7.89799 14.6244 7.89799 14.2164 8.30602L12 10.5224L9.78364 8.30602C9.37562 7.89799 8.71408 7.89799 8.30605 8.30602Z",
                            fill: o
                        })]
                    })
                }, u.ChatXIcon)
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("920040");
            n("773670");
            var o = n("469563"),
                u = n("35647"),
                i = n("75196"),
                l = (0, o.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: o = "currentColor",
                        foreground: u,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: u,
                            fill: o,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, u.IdIcon)
        }
    }
]);
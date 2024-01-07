            "use strict";
            n.r(t), n.d(t, {
                validateAutomodRule: function() {
                    return I
                },
                createAutomodRule: function() {
                    return M
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
            }), n("222007");
            var o = n("872717"),
                u = n("913144"),
                r = n("716241"),
                a = n("305961"),
                _ = n("957255"),
                E = n("449008"),
                i = n("299039"),
                s = n("85448"),
                A = n("461439"),
                d = n("928098"),
                T = n("49111");

            function l(e) {
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
                    actions: e.actions.filter(E.isNotNullish).map(l),
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
                    actions: e.actions.filter(E.isNotNullish).map(O),
                    enabled: e.enabled,
                    creatorId: e.creator_id,
                    position: e.position,
                    exemptChannels: new Set(null !== (n = e.exempt_channels) && void 0 !== n ? n : []),
                    exemptRoles: new Set(null !== (o = e.exempt_roles) && void 0 !== o ? o : [])
                };
                return null != u.triggerMetadata && delete u.triggerMetadata.keywordLists, u
            }
            async function I(e) {
                let t = N(e),
                    n = await o.default.post({
                        url: T.Endpoints.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
                        body: t
                    });
                return (0, A._transformMetadataToCamelCase)(n.body)
            }
            async function M(e) {
                let t = N(e);
                delete t.id;
                let n = await o.default.post({
                    url: T.Endpoints.GUILD_AUTOMOD_RULES(e.guildId),
                    body: t
                });
                return c(n.body)
            }
            async function R(e) {
                let t = N(e),
                    n = await o.default.patch({
                        url: T.Endpoints.GUILD_AUTOMOD_RULE(e.guildId, e.id),
                        body: t
                    });
                return c(n.body)
            }
            async function f(e, t) {
                return await o.default.delete({
                    url: T.Endpoints.GUILD_AUTOMOD_RULE(t, e)
                }), !0
            }
            async function D(e) {
                let t = await o.default.get({
                    url: T.Endpoints.GUILD_AUTOMOD_RULES(e)
                });
                return Array.isArray(t.body) ? t.body.map(c) : []
            }
            async function S(e, t, n) {
                _.default.can(T.Permissions.MANAGE_MESSAGES, t) && await o.default.post({
                    url: T.Endpoints.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
                    body: {
                        message_id: e,
                        channel_id: t.id,
                        alert_action_type: n
                    }
                })
            }

            function m(e, t, n) {
                let u = a.default.getGuild(e);
                if (null != u && !!_.default.can(T.Permissions.MANAGE_GUILD, u))(0, d.openConfirmRemoveMentionRaid)(() => {
                    (0, r.trackWithMetadata)(T.AnalyticEvents.GUILD_AUTOMOD_FEEDBACK, {
                        feedback_type: s.Feedback.MENTION_RAID_REMOVE_RESTRICTION,
                        decision_id: t
                    }), o.default.post({
                        url: T.Endpoints.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e)
                    }), n()
                })
            }

            function L(e) {
                u.default.dispatch({
                    type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
                    guildId: e
                })
            }
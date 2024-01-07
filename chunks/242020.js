            "use strict";
            s.r(t), s.d(t, {
                getTargetType: function() {
                    return d
                },
                getActionType: function() {
                    return u
                },
                AuditLogChange: function() {
                    return c
                },
                default: function() {
                    return _
                }
            });
            var a = s("866227"),
                n = s.n(a),
                l = s("666038"),
                i = s("286235"),
                r = s("299039"),
                o = s("49111");

            function d(e) {
                if (e === o.AuditLogActions.ALL) return o.AuditLogTargetTypes.ALL;
                if (e <= o.AuditLogActions.GUILD_UPDATE) return o.AuditLogTargetTypes.GUILD;
                if (e <= o.AuditLogActions.CHANNEL_DELETE || e === o.AuditLogActions.MESSAGE_BULK_DELETE) return o.AuditLogTargetTypes.CHANNEL;
                else if (e <= o.AuditLogActions.CHANNEL_OVERWRITE_DELETE) return o.AuditLogTargetTypes.CHANNEL_OVERWRITE;
                else if (e <= o.AuditLogActions.BOT_ADD || e === o.AuditLogActions.MESSAGE_DELETE || e === o.AuditLogActions.MESSAGE_PIN || e === o.AuditLogActions.MESSAGE_UNPIN) return o.AuditLogTargetTypes.USER;
                else if (e <= o.AuditLogActions.ROLE_DELETE) return o.AuditLogTargetTypes.ROLE;
                else if (e <= o.AuditLogActions.INVITE_DELETE) return o.AuditLogTargetTypes.INVITE;
                else if (e <= o.AuditLogActions.WEBHOOK_DELETE) return o.AuditLogTargetTypes.WEBHOOK;
                else if (e <= o.AuditLogActions.EMOJI_DELETE) return o.AuditLogTargetTypes.EMOJI;
                else if (e <= o.AuditLogActions.INTEGRATION_DELETE) return o.AuditLogTargetTypes.INTEGRATION;
                else if (e <= o.AuditLogActions.STAGE_INSTANCE_DELETE) return o.AuditLogTargetTypes.STAGE_INSTANCE;
                else if (e <= o.AuditLogActions.STICKER_DELETE) return o.AuditLogTargetTypes.STICKER;
                else if (e <= o.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE) return o.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT;
                else if (e <= o.AuditLogActions.THREAD_DELETE) return o.AuditLogTargetTypes.THREAD;
                else if (e === o.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE) return o.AuditLogTargetTypes.APPLICATION_COMMAND;
                else if (e <= o.AuditLogActions.SOUNDBOARD_SOUND_DELETE) return o.AuditLogTargetTypes.GUILD_SOUNDBOARD;
                else if (e < o.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE) return o.AuditLogTargetTypes.AUTO_MODERATION_RULE;
                else if (e === o.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE) return o.AuditLogTargetTypes.USER;
                else if (e === o.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL) return o.AuditLogTargetTypes.USER;
                else if (e === o.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) return o.AuditLogTargetTypes.USER;
                else if (e === o.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER) return o.AuditLogTargetTypes.USER;
                else if (e <= o.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED) return o.AuditLogTargetTypes.GUILD;
                else if (e <= o.AuditLogActions.ONBOARDING_PROMPT_DELETE) return o.AuditLogTargetTypes.ONBOARDING_PROMPT;
                else if (e <= o.AuditLogActions.ONBOARDING_UPDATE) return o.AuditLogTargetTypes.GUILD_ONBOARDING;
                else if (e <= o.AuditLogActions.GUILD_HOME_REMOVE_ITEM) return o.AuditLogTargetTypes.GUILD_HOME;
                else if (e <= o.AuditLogActions.HARMFUL_LINKS_BLOCKED_MESSAGE) return o.AuditLogTargetTypes.GUILD;
                else if (e <= o.AuditLogActions.HOME_SETTINGS_UPDATE) return o.AuditLogTargetTypes.HOME_SETTINGS;
                else if (e <= o.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE) return o.AuditLogTargetTypes.VOICE_CHANNEL_STATUS;
                else if (e === o.AuditLogActions.CLYDE_AI_PROFILE_UPDATE) return o.AuditLogTargetTypes.CLYDE_AI;
                else if (e <= o.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE) return o.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION;
                return i.default.captureMessage("Unknown target type for: ".concat(e)), o.AuditLogTargetTypes.UNKNOWN
            }

            function u(e) {
                switch (e) {
                    case o.AuditLogActions.CHANNEL_CREATE:
                    case o.AuditLogActions.CHANNEL_OVERWRITE_CREATE:
                    case o.AuditLogActions.MEMBER_BAN_REMOVE:
                    case o.AuditLogActions.ROLE_CREATE:
                    case o.AuditLogActions.INVITE_CREATE:
                    case o.AuditLogActions.WEBHOOK_CREATE:
                    case o.AuditLogActions.EMOJI_CREATE:
                    case o.AuditLogActions.STICKER_CREATE:
                    case o.AuditLogActions.MESSAGE_PIN:
                    case o.AuditLogActions.BOT_ADD:
                    case o.AuditLogActions.INTEGRATION_CREATE:
                    case o.AuditLogActions.STAGE_INSTANCE_CREATE:
                    case o.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE:
                    case o.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
                    case o.AuditLogActions.THREAD_CREATE:
                    case o.AuditLogActions.AUTO_MODERATION_RULE_CREATE:
                    case o.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED:
                    case o.AuditLogActions.ONBOARDING_PROMPT_CREATE:
                    case o.AuditLogActions.ONBOARDING_CREATE:
                    case o.AuditLogActions.GUILD_HOME_FEATURE_ITEM:
                    case o.AuditLogActions.SOUNDBOARD_SOUND_CREATE:
                    case o.AuditLogActions.HOME_SETTINGS_CREATE:
                    case o.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE:
                        return o.AuditLogActionTypes.CREATE;
                    case o.AuditLogActions.CHANNEL_DELETE:
                    case o.AuditLogActions.CHANNEL_OVERWRITE_DELETE:
                    case o.AuditLogActions.MEMBER_KICK:
                    case o.AuditLogActions.MEMBER_PRUNE:
                    case o.AuditLogActions.MEMBER_BAN_ADD:
                    case o.AuditLogActions.ROLE_DELETE:
                    case o.AuditLogActions.INVITE_DELETE:
                    case o.AuditLogActions.WEBHOOK_DELETE:
                    case o.AuditLogActions.EMOJI_DELETE:
                    case o.AuditLogActions.STICKER_DELETE:
                    case o.AuditLogActions.MESSAGE_DELETE:
                    case o.AuditLogActions.MESSAGE_BULK_DELETE:
                    case o.AuditLogActions.MESSAGE_UNPIN:
                    case o.AuditLogActions.INTEGRATION_DELETE:
                    case o.AuditLogActions.MEMBER_DISCONNECT:
                    case o.AuditLogActions.STAGE_INSTANCE_DELETE:
                    case o.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE:
                    case o.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
                    case o.AuditLogActions.THREAD_DELETE:
                    case o.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE:
                    case o.AuditLogActions.AUTO_MODERATION_RULE_DELETE:
                    case o.AuditLogActions.ONBOARDING_PROMPT_DELETE:
                    case o.AuditLogActions.GUILD_HOME_REMOVE_ITEM:
                    case o.AuditLogActions.SOUNDBOARD_SOUND_DELETE:
                    case o.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE:
                        return o.AuditLogActionTypes.DELETE;
                    case o.AuditLogActions.GUILD_UPDATE:
                    case o.AuditLogActions.CHANNEL_UPDATE:
                    case o.AuditLogActions.CHANNEL_OVERWRITE_UPDATE:
                    case o.AuditLogActions.MEMBER_UPDATE:
                    case o.AuditLogActions.MEMBER_ROLE_UPDATE:
                    case o.AuditLogActions.ROLE_UPDATE:
                    case o.AuditLogActions.INVITE_UPDATE:
                    case o.AuditLogActions.WEBHOOK_UPDATE:
                    case o.AuditLogActions.EMOJI_UPDATE:
                    case o.AuditLogActions.STICKER_UPDATE:
                    case o.AuditLogActions.INTEGRATION_UPDATE:
                    case o.AuditLogActions.MEMBER_MOVE:
                    case o.AuditLogActions.STAGE_INSTANCE_UPDATE:
                    case o.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE:
                    case o.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
                    case o.AuditLogActions.THREAD_UPDATE:
                    case o.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE:
                    case o.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED:
                    case o.AuditLogActions.AUTO_MODERATION_RULE_UPDATE:
                    case o.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL:
                    case o.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
                    case o.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER:
                    case o.AuditLogActions.ONBOARDING_PROMPT_UPDATE:
                    case o.AuditLogActions.ONBOARDING_UPDATE:
                    case o.AuditLogActions.SOUNDBOARD_SOUND_UPDATE:
                    case o.AuditLogActions.HOME_SETTINGS_UPDATE:
                    case o.AuditLogActions.CLYDE_AI_PROFILE_UPDATE:
                        return o.AuditLogActionTypes.UPDATE
                }
                return o.AuditLogActionTypes.ALL
            }
            class c {
                constructor(e, t, s) {
                    this.key = e, this.oldValue = t, this.newValue = s
                }
            }
            class E extends l.default {
                constructor(e) {
                    var t, s, a, l, i, o;
                    super(), this.id = e.id, this.action = e.action, this.actionType = u(this.action), this.targetId = e.targetId, this.timestampStart = null !== (t = e.timestampStart) && void 0 !== t ? t : n(r.default.extractTimestamp(this.id)), this.timestampEnd = null !== (s = e.timestampEnd) && void 0 !== s ? s : this.timestampStart, this.userId = e.userId, this.changes = null !== (a = e.changes) && void 0 !== a ? a : [], this.targetType = d(this.action), this.options = null !== (l = e.options) && void 0 !== l ? l : {}, this.target = null !== (i = e.target) && void 0 !== i ? i : e.id, this.user = null !== (o = e.user) && void 0 !== o ? o : null
                }
            }
            var _ = E
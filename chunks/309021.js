            "use strict";
            s.r(t), s.d(t, {
                DEFAULT_FOR_STRINGS_KEY: function() {
                    return C
                },
                GuildChangeStrings: function() {
                    return h
                },
                ChannelChangeStrings: function() {
                    return R
                },
                UserChangeStrings: function() {
                    return D
                },
                RoleChangeStrings: function() {
                    return M
                },
                InviteChangeStrings: function() {
                    return G
                },
                WebhookChangeStrings: function() {
                    return x
                },
                EmojiChangeStrings: function() {
                    return p
                },
                StickerChangeStrings: function() {
                    return U
                },
                IntegrationChangeStrings: function() {
                    return v
                },
                StageInstanceChangeStrings: function() {
                    return j
                },
                GuildScheduledEventChangeStrings: function() {
                    return P
                },
                ThreadChangeStrings: function() {
                    return y
                },
                CommandPermissionChangeStrings: function() {
                    return b
                },
                NotRenderedChanges: function() {
                    return B
                },
                getChangeTitle: function() {
                    return F
                },
                getStringForBanReason: function() {
                    return H
                },
                getStringForPermission: function() {
                    return V
                },
                transformLogs: function() {
                    return k
                }
            }), s("70102"), s("424973");
            var a = s("552442"),
                n = s.n(a),
                l = s("316693"),
                i = s("509043"),
                r = s("798609"),
                o = s("679653"),
                d = s("605250"),
                u = s("385976"),
                c = s("287103"),
                E = s("834052"),
                _ = s("364685"),
                T = s("242020"),
                I = s("42203"),
                S = s("27618"),
                N = s("697218"),
                g = s("354023"),
                f = s("49111"),
                A = s("745049"),
                L = s("782340");
            let m = new d.default("AuditLogUtils"),
                C = -1,
                O = () => ({
                    [f.AuditLogChangeKeys.REASON]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
                }),
                h = () => ({
                    [f.AuditLogChangeKeys.NAME]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_NAME_CHANGE,
                    [f.AuditLogChangeKeys.DESCRIPTION]: X(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CLEAR, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CHANGE),
                    [f.AuditLogChangeKeys.ICON_HASH]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_ICON_HASH_CHANGE,
                    [f.AuditLogChangeKeys.SPLASH_HASH]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SPLASH_HASH_CHANGE,
                    [f.AuditLogChangeKeys.DISCOVERY_SPLASH_HASH]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DISCOVERY_SPLASH_HASH_CHANGE,
                    [f.AuditLogChangeKeys.BANNER_HASH]: X(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_REMOVE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_CHANGE),
                    [f.AuditLogChangeKeys.OWNER_ID]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_OWNER_ID_CHANGE,
                    [f.AuditLogChangeKeys.REGION]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_REGION_CHANGE,
                    [f.AuditLogChangeKeys.PREFERRED_LOCALE]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREFERRED_LOCALE_CHANGE,
                    [f.AuditLogChangeKeys.AFK_CHANNEL_ID]: X(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CLEAR, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CHANGE),
                    [f.AuditLogChangeKeys.AFK_TIMEOUT]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_TIMEOUT_CHANGE,
                    [f.AuditLogChangeKeys.SYSTEM_CHANNEL_ID]: X(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_DISABLE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_CHANGE),
                    [f.AuditLogChangeKeys.RULES_CHANNEL_ID]: X(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CLEAR, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CHANGE),
                    [f.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID]: X(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CLEAR, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CHANGE),
                    [f.AuditLogChangeKeys.MFA_LEVEL]: {
                        [f.MFALevels.NONE]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_DISABLED,
                        [f.MFALevels.ELEVATED]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_ENABLED
                    },
                    [f.AuditLogChangeKeys.WIDGET_ENABLED]: {
                        true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_ENABLED,
                        false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_DISABLED
                    },
                    [f.AuditLogChangeKeys.WIDGET_CHANNEL_ID]: X(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_DELETE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_CHANGE),
                    [f.AuditLogChangeKeys.VERIFICATION_LEVEL]: {
                        [f.VerificationLevels.NONE]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_NONE,
                        [f.VerificationLevels.LOW]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_LOW,
                        [f.VerificationLevels.MEDIUM]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_MEDIUM,
                        [f.VerificationLevels.HIGH]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_HIGH,
                        [f.VerificationLevels.VERY_HIGH]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_VERY_HIGH
                    },
                    [f.AuditLogChangeKeys.DEFAULT_MESSAGE_NOTIFICATIONS]: {
                        [f.UserNotificationSettings.ALL_MESSAGES]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ALL_MESSAGES,
                        [f.UserNotificationSettings.ONLY_MENTIONS]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ONLY_MENTIONS
                    },
                    [f.AuditLogChangeKeys.VANITY_URL_CODE]: X(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_DELETE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_CHANGE),
                    [f.AuditLogChangeKeys.EXPLICIT_CONTENT_FILTER]: {
                        [f.GuildExplicitContentFilterTypes.DISABLED]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_DISABLE,
                        [f.GuildExplicitContentFilterTypes.MEMBERS_WITHOUT_ROLES]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_MEMBERS_WITHOUT_ROLES,
                        [f.GuildExplicitContentFilterTypes.ALL_MEMBERS]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_ALL_MEMBERS
                    },
                    [f.AuditLogChangeKeys.PREMIUM_PROGRESS_BAR_ENABLED]: {
                        true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_ENABLED,
                        false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_DISABLED
                    },
                    [f.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
                    [f.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATIONS,
                    [f.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTIONS,
                    [f.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_REMINDER_NOTIFICATIONS,
                    [f.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATION_REPLIES,
                    ...O()
                }),
                R = () => ({
                    [f.AuditLogChangeKeys.NAME]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CHANGE),
                    [f.AuditLogChangeKeys.POSITION]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CHANGE),
                    [f.AuditLogChangeKeys.TOPIC]: Z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CLEAR),
                    [f.AuditLogChangeKeys.BITRATE]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CHANGE),
                    [f.AuditLogChangeKeys.RTC_REGION_OVERRIDE]: Z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CHANGE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_DELETE),
                    [f.AuditLogChangeKeys.USER_LIMIT]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CHANGE),
                    [f.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
                    [f.AuditLogChangeKeys.PERMISSIONS_RESET]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_RESET,
                    [f.AuditLogChangeKeys.PERMISSIONS_GRANTED]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_GRANTED,
                    [f.AuditLogChangeKeys.PERMISSIONS_DENIED]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_DENIED,
                    [f.AuditLogChangeKeys.REASON]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON,
                    [f.AuditLogChangeKeys.NSFW]: {
                        false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_DISABLED,
                        true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_ENABLED
                    },
                    [f.AuditLogChangeKeys.TYPE]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CHANGE),
                    [f.AuditLogChangeKeys.VIDEO_QUALITY_MODE]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CHANGE),
                    [f.AuditLogChangeKeys.DEFAULT_AUTO_ARCHIVE_DURATION]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CHANGE)
                }),
                D = () => ({
                    [f.AuditLogChangeKeys.NICK]: Z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CHANGE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_DELETE),
                    [f.AuditLogChangeKeys.DEAF]: {
                        true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_ON,
                        false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_OFF
                    },
                    [f.AuditLogChangeKeys.MUTE]: {
                        true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_ON,
                        false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_OFF
                    },
                    [f.AuditLogChangeKeys.ROLES_REMOVE]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_REMOVE,
                    [f.AuditLogChangeKeys.ROLES_ADD]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_ADD,
                    [f.AuditLogChangeKeys.PRUNE_DELETE_DAYS]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE_DELETE_DAYS,
                    [f.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL]: Z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL_REMOVED),
                    [f.AuditLogChangeKeys.BYPASSES_VERIFICATION]: {
                        true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_ON,
                        false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_OFF
                    },
                    [f.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
                    ...O()
                }),
                M = () => ({
                    [f.AuditLogChangeKeys.NAME]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CHANGE),
                    [f.AuditLogChangeKeys.PERMISSIONS_GRANTED]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_GRANTED,
                    [f.AuditLogChangeKeys.PERMISSIONS_DENIED]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_DENIED,
                    [f.AuditLogChangeKeys.COLOR]: {
                        "#000000": L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_NONE,
                        [C]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_IOS
                    },
                    [f.AuditLogChangeKeys.HOIST]: {
                        true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_ON,
                        false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_OFF
                    },
                    [f.AuditLogChangeKeys.MENTIONABLE]: {
                        true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_ON,
                        false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_OFF
                    },
                    [f.AuditLogChangeKeys.ICON_HASH]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_ICON_HASH_CHANGE,
                    [f.AuditLogChangeKeys.UNICODE_EMOJI]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UNICODE_EMOJI_CHANGE,
                    ...O()
                }),
                G = () => ({
                    [f.AuditLogChangeKeys.CODE]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CODE_CREATE,
                    [f.AuditLogChangeKeys.CHANNEL_ID]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CHANNEL_CREATE,
                    [f.AuditLogChangeKeys.MAX_USES]: {
                        0: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE_INFINITE,
                        [C]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE
                    },
                    [f.AuditLogChangeKeys.MAX_AGE]: {
                        0: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE_INFINITE,
                        [C]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE
                    },
                    [f.AuditLogChangeKeys.TEMPORARY]: {
                        true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_ON,
                        false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_OFF
                    },
                    ...O()
                }),
                x = () => ({
                    [f.AuditLogChangeKeys.CHANNEL_ID]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CHANGE),
                    [f.AuditLogChangeKeys.NAME]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CHANGE),
                    [f.AuditLogChangeKeys.AVATAR_HASH]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_AVATAR,
                    [f.AuditLogChangeKeys.REASON]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
                }),
                p = () => ({
                    [f.AuditLogChangeKeys.NAME]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CHANGE),
                    ...O()
                }),
                U = () => ({
                    [f.AuditLogChangeKeys.NAME]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CHANGE),
                    [f.AuditLogChangeKeys.TAGS]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CHANGE),
                    [f.AuditLogChangeKeys.DESCRIPTION]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
                    ...O()
                }),
                v = () => ({
                    [f.AuditLogChangeKeys.ENABLE_EMOTICONS]: {
                        true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_ON,
                        false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_OFF
                    },
                    [f.AuditLogChangeKeys.EXPIRE_BEHAVIOR]: {
                        0: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_REMOVE_SYNCED_ROLE,
                        1: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_KICK_FROM_SERVER
                    },
                    [f.AuditLogChangeKeys.EXPIRE_GRACE_PERIOD]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_GRACE_PERIOD,
                    ...O()
                }),
                j = () => ({
                    [f.AuditLogChangeKeys.TOPIC]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE),
                    [f.AuditLogChangeKeys.PRIVACY_LEVEL]: {
                        [A.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
                        [A.GuildScheduledEventPrivacyLevel.PUBLIC]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
                    },
                    ...O()
                }),
                P = () => ({
                    [f.AuditLogChangeKeys.NAME]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_NAME_CREATE,
                    [f.AuditLogChangeKeys.DESCRIPTION]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DESCRIPTION_CREATE,
                    [f.AuditLogChangeKeys.PRIVACY_LEVEL]: {
                        [A.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
                        [A.GuildScheduledEventPrivacyLevel.PUBLIC]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
                    },
                    [f.AuditLogChangeKeys.STATUS]: {
                        [A.GuildScheduledEventStatus.SCHEDULED]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_SCHEDULED,
                        [A.GuildScheduledEventStatus.ACTIVE]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_ACTIVE,
                        [A.GuildScheduledEventStatus.COMPLETED]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_COMPLETED,
                        [A.GuildScheduledEventStatus.CANCELED]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_CANCELED
                    },
                    [f.AuditLogChangeKeys.ENTITY_TYPE]: {
                        [A.GuildScheduledEventEntityTypes.NONE]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_NONE,
                        [A.GuildScheduledEventEntityTypes.STAGE_INSTANCE]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_STAGE_INSTANCE,
                        [A.GuildScheduledEventEntityTypes.VOICE]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_VOICE,
                        [A.GuildScheduledEventEntityTypes.EXTERNAL]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_EXTERNAL
                    },
                    [f.AuditLogChangeKeys.CHANNEL_ID]: X(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL_CLEAR, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL),
                    [f.AuditLogChangeKeys.LOCATION]: X(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION_CLEAR, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION),
                    [f.AuditLogChangeKeys.RECURRENCE_RULE]: X(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_RULE_CLEAR, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_RULE),
                    ...O()
                }),
                y = () => ({
                    [f.AuditLogChangeKeys.NAME]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CHANGE),
                    [f.AuditLogChangeKeys.ARCHIVED]: {
                        true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_ARCHIVED,
                        false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNARCHIVED
                    },
                    [f.AuditLogChangeKeys.LOCKED]: {
                        true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_LOCKED,
                        false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNLOCKED
                    },
                    [f.AuditLogChangeKeys.INVITABLE]: {
                        true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_ENABLED,
                        false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_DISABLED
                    },
                    [f.AuditLogChangeKeys.AUTO_ARCHIVE_DURATION]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CHANGE),
                    [f.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
                    ...O()
                }),
                b = e => {
                    let t = {
                        ...O()
                    };
                    return null == e || e.forEach(e => {
                        e.newValue ? e.newValue.permission ? t[e.key] = L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_GRANTED : t[e.key] = L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_DENIED : t[e.key] = L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_REMOVED
                    }), t
                },
                B = {
                    [f.AuditLogTargetTypes.CHANNEL]: {
                        [f.AuditLogChangeKeys.ID]: !0,
                        [f.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
                    },
                    [f.AuditLogTargetTypes.CHANNEL_OVERWRITE]: {
                        [f.AuditLogChangeKeys.TYPE]: !0,
                        [f.AuditLogChangeKeys.ID]: !0,
                        [f.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
                    },
                    [f.AuditLogTargetTypes.INVITE]: {
                        [f.AuditLogChangeKeys.INVITER_ID]: !0,
                        [f.AuditLogChangeKeys.USES]: !0
                    },
                    [f.AuditLogTargetTypes.WEBHOOK]: {
                        [f.AuditLogChangeKeys.TYPE]: !0,
                        [f.AuditLogChangeKeys.APPLICATION_ID]: !0
                    },
                    [f.AuditLogTargetTypes.INTEGRATION]: {
                        [f.AuditLogChangeKeys.TYPE]: !0
                    },
                    [f.AuditLogTargetTypes.THREAD]: {
                        [f.AuditLogChangeKeys.ID]: !0,
                        [f.AuditLogChangeKeys.TYPE]: !0
                    },
                    [f.AuditLogTargetTypes.STICKER]: {
                        [f.AuditLogChangeKeys.ID]: !0,
                        [f.AuditLogChangeKeys.TYPE]: !0,
                        [f.AuditLogChangeKeys.ASSET]: !0,
                        [f.AuditLogChangeKeys.FORMAT_TYPE]: !0,
                        [f.AuditLogChangeKeys.AVAILABLE]: !0,
                        [f.AuditLogChangeKeys.GUILD_ID]: !0
                    }
                };

            function F(e) {
                switch (e.action) {
                    case f.AuditLogActions.GUILD_UPDATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATE;
                    case f.AuditLogActions.CHANNEL_CREATE:
                        let t = null != e.changes ? e.changes.find(e => e.key === f.AuditLogChangeKeys.TYPE) : null;
                        if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
                        switch (t.newValue) {
                            case f.ChannelTypes.GUILD_STAGE_VOICE:
                                return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_STAGE_CREATE;
                            case f.ChannelTypes.GUILD_VOICE:
                                return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VOICE_CREATE;
                            case f.ChannelTypes.GUILD_CATEGORY:
                                return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_CATEGORY_CREATE;
                            default:
                                return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TEXT_CREATE
                        }
                    case f.AuditLogActions.CHANNEL_UPDATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_UPDATE;
                    case f.AuditLogActions.CHANNEL_DELETE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DELETE;
                    case f.AuditLogActions.CHANNEL_OVERWRITE_CREATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_CREATE;
                    case f.AuditLogActions.CHANNEL_OVERWRITE_UPDATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_UPDATE;
                    case f.AuditLogActions.CHANNEL_OVERWRITE_DELETE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_DELETE;
                    case f.AuditLogActions.MEMBER_KICK:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_KICK;
                    case f.AuditLogActions.MEMBER_PRUNE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE;
                    case f.AuditLogActions.MEMBER_BAN_ADD:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_MEMBER_BAN_ADD;
                    case f.AuditLogActions.MEMBER_BAN_REMOVE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_REMOVE;
                    case f.AuditLogActions.MEMBER_UPDATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_UPDATE;
                    case f.AuditLogActions.MEMBER_ROLE_UPDATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLE_UPDATE;
                    case f.AuditLogActions.MEMBER_MOVE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MOVE;
                    case f.AuditLogActions.MEMBER_DISCONNECT:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DISCONNECT;
                    case f.AuditLogActions.BOT_ADD:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_BOT_ADD;
                    case f.AuditLogActions.ROLE_CREATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_CREATE;
                    case f.AuditLogActions.ROLE_UPDATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UPDATE;
                    case f.AuditLogActions.ROLE_DELETE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_DELETE;
                    case f.AuditLogActions.INVITE_CREATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CREATE;
                    case f.AuditLogActions.INVITE_UPDATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_UPDATE;
                    case f.AuditLogActions.INVITE_DELETE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_DELETE;
                    case f.AuditLogActions.WEBHOOK_CREATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CREATE;
                    case f.AuditLogActions.WEBHOOK_UPDATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_UPDATE;
                    case f.AuditLogActions.WEBHOOK_DELETE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_DELETE;
                    case f.AuditLogActions.EMOJI_CREATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_CREATE;
                    case f.AuditLogActions.EMOJI_UPDATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_UPDATE;
                    case f.AuditLogActions.EMOJI_DELETE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_DELETE;
                    case f.AuditLogActions.STICKER_CREATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_CREATE;
                    case f.AuditLogActions.STICKER_UPDATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_UPDATE;
                    case f.AuditLogActions.STICKER_DELETE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_DELETE;
                    case f.AuditLogActions.MESSAGE_DELETE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_DELETE;
                    case f.AuditLogActions.MESSAGE_BULK_DELETE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_BULK_DELETE;
                    case f.AuditLogActions.MESSAGE_PIN:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_PIN;
                    case f.AuditLogActions.MESSAGE_UNPIN:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_UNPIN;
                    case f.AuditLogActions.INTEGRATION_CREATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_CREATE;
                    case f.AuditLogActions.INTEGRATION_UPDATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_UPDATE;
                    case f.AuditLogActions.INTEGRATION_DELETE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_DELETE;
                    case f.AuditLogActions.STAGE_INSTANCE_CREATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_CREATE;
                    case f.AuditLogActions.STAGE_INSTANCE_UPDATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_UPDATE;
                    case f.AuditLogActions.STAGE_INSTANCE_DELETE:
                        if (null != e.userId) return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE;
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE_NO_USER;
                    case f.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_CREATE;
                    case f.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_UPDATE;
                    case f.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_DELETE;
                    case f.AuditLogActions.THREAD_CREATE:
                        let s = null != e.changes ? e.changes.find(e => e.key === f.AuditLogChangeKeys.TYPE) : null;
                        if (null == s) throw Error("[AuditLog] Could not find type change for thread create");
                        switch (s.newValue) {
                            case f.ChannelTypes.PRIVATE_THREAD:
                                return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_PRIVATE_THREAD_CREATE;
                            case f.ChannelTypes.ANNOUNCEMENT_THREAD:
                                return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_ANNOUNCEMENT_THREAD_CREATE;
                            default:
                                return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_CREATE
                        }
                    case f.AuditLogActions.THREAD_UPDATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_UPDATE;
                    case f.AuditLogActions.THREAD_DELETE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_DELETE;
                    case f.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_UPDATE;
                    case f.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_BLOCK_MESSAGE;
                    case f.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAG_TO_CHANNEL_MESSAGE;
                    case f.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_USER_COMMUNICATION_DISABLED_MESSAGE;
                    case f.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED:
                        return L.default.Messages.CREATOR_MONETIZATION_APPLIED_AUDIT_LOG_TITLE;
                    case f.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED:
                        return L.default.Messages.CREATOR_MONETIZATION_TERMS_ACCEPTED_AUDIT_LOG_TITLE;
                    case f.AuditLogActions.CLYDE_AI_PROFILE_UPDATE:
                        return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CLYDE_AI_PROFILE_UPDATE;
                    default:
                        return null
                }
            }

            function H(e) {
                var t;
                let s = null == e ? void 0 : null === (t = e.changes) || void 0 === t ? void 0 : t.find(e => "reason" === e.key);
                if (null != s) return s.newValue
            }

            function V(e, t) {
                switch (e) {
                    case f.Permissions.CREATE_INSTANT_INVITE:
                        return L.default.Messages.CREATE_INSTANT_INVITE;
                    case f.Permissions.KICK_MEMBERS:
                        return L.default.Messages.KICK_MEMBERS;
                    case f.Permissions.BAN_MEMBERS:
                        return L.default.Messages.BAN_MEMBERS;
                    case f.Permissions.ADMINISTRATOR:
                        return L.default.Messages.ADMINISTRATOR;
                    case f.Permissions.MANAGE_CHANNELS:
                        if (t.targetType === f.AuditLogTargetTypes.CHANNEL || t.targetType === f.AuditLogTargetTypes.CHANNEL_OVERWRITE) return L.default.Messages.MANAGE_CHANNEL;
                        return L.default.Messages.MANAGE_CHANNELS;
                    case f.Permissions.MANAGE_GUILD:
                        return L.default.Messages.MANAGE_SERVER;
                    case f.Permissions.VIEW_GUILD_ANALYTICS:
                        return L.default.Messages.VIEW_GUILD_ANALYTICS;
                    case f.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS:
                        return L.default.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS;
                    case f.Permissions.CHANGE_NICKNAME:
                        return L.default.Messages.CHANGE_NICKNAME;
                    case f.Permissions.MANAGE_NICKNAMES:
                        return L.default.Messages.MANAGE_NICKNAMES;
                    case f.Permissions.MANAGE_ROLES:
                        return L.default.Messages.MANAGE_ROLES;
                    case f.Permissions.MANAGE_WEBHOOKS:
                        return L.default.Messages.MANAGE_WEBHOOKS;
                    case f.Permissions.CREATE_GUILD_EXPRESSIONS:
                        return L.default.Messages.CREATE_EXPRESSIONS;
                    case f.Permissions.MANAGE_GUILD_EXPRESSIONS:
                        return L.default.Messages.MANAGE_EXPRESSIONS;
                    case f.Permissions.VIEW_AUDIT_LOG:
                        return L.default.Messages.VIEW_AUDIT_LOG;
                    case f.Permissions.VIEW_CHANNEL:
                        return L.default.Messages.READ_MESSAGES;
                    case f.Permissions.SEND_MESSAGES:
                        return L.default.Messages.SEND_MESSAGES;
                    case f.Permissions.SEND_TTS_MESSAGES:
                        return L.default.Messages.SEND_TTS_MESSAGES;
                    case f.Permissions.USE_APPLICATION_COMMANDS:
                        return L.default.Messages.USE_APPLICATION_COMMANDS;
                    case f.Permissions.MANAGE_MESSAGES:
                        return L.default.Messages.MANAGE_MESSAGES;
                    case f.Permissions.EMBED_LINKS:
                        return L.default.Messages.EMBED_LINKS;
                    case f.Permissions.ATTACH_FILES:
                        return L.default.Messages.ATTACH_FILES;
                    case f.Permissions.READ_MESSAGE_HISTORY:
                        return L.default.Messages.READ_MESSAGE_HISTORY;
                    case f.Permissions.MENTION_EVERYONE:
                        return L.default.Messages.MENTION_EVERYONE;
                    case f.Permissions.USE_EXTERNAL_EMOJIS:
                        return L.default.Messages.USE_EXTERNAL_EMOJIS;
                    case f.Permissions.USE_EXTERNAL_STICKERS:
                        return L.default.Messages.USE_EXTERNAL_STICKERS;
                    case f.Permissions.ADD_REACTIONS:
                        return L.default.Messages.ADD_REACTIONS;
                    case f.Permissions.CONNECT:
                        return L.default.Messages.CONNECT;
                    case f.Permissions.SPEAK:
                        return L.default.Messages.SPEAK;
                    case f.Permissions.MUTE_MEMBERS:
                        return L.default.Messages.MUTE_MEMBERS;
                    case f.Permissions.DEAFEN_MEMBERS:
                        return L.default.Messages.DEAFEN_MEMBERS;
                    case f.Permissions.MOVE_MEMBERS:
                        return L.default.Messages.MOVE_MEMBERS;
                    case f.Permissions.USE_VAD:
                        return L.default.Messages.USE_VAD;
                    case f.Permissions.PRIORITY_SPEAKER:
                        return L.default.Messages.PRIORITY_SPEAKER;
                    case f.Permissions.STREAM:
                        return L.default.Messages.VIDEO;
                    case f.Permissions.REQUEST_TO_SPEAK:
                        return L.default.Messages.REQUEST_TO_SPEAK;
                    case f.Permissions.CREATE_EVENTS:
                        return L.default.Messages.CREATE_EVENTS;
                    case f.Permissions.MANAGE_EVENTS:
                        return L.default.Messages.MANAGE_EVENTS;
                    case f.Permissions.CREATE_PUBLIC_THREADS:
                        return L.default.Messages.CREATE_PUBLIC_THREADS;
                    case f.Permissions.CREATE_PRIVATE_THREADS:
                        return L.default.Messages.CREATE_PRIVATE_THREADS;
                    case f.Permissions.SEND_MESSAGES_IN_THREADS:
                        return L.default.Messages.SEND_MESSAGES_IN_THREADS;
                    case f.Permissions.MANAGE_THREADS:
                        return L.default.Messages.MANAGE_THREADS;
                    case f.Permissions.MODERATE_MEMBERS:
                        return L.default.Messages.MODERATE_MEMBER;
                    case f.Permissions.SET_VOICE_CHANNEL_STATUS:
                        return L.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
                }
                return null
            }

            function k(e, t) {
                if (null == t) return [];
                let s = [];
                return e.forEach(e => {
                    let a = function(e, t) {
                            switch (e.targetType) {
                                case f.AuditLogTargetTypes.GUILD:
                                    return t;
                                case f.AuditLogTargetTypes.CHANNEL:
                                case f.AuditLogTargetTypes.CHANNEL_OVERWRITE:
                                    return K(e, f.AuditLogChangeKeys.NAME, e => I.default.getChannel(e), e => (0, o.computeChannelName)(e, N.default, S.default, !0));
                                case f.AuditLogTargetTypes.USER:
                                    return K(e, f.AuditLogChangeKeys.NICK, e => N.default.getUser(e), void 0);
                                case f.AuditLogTargetTypes.ROLE:
                                    return K(e, f.AuditLogChangeKeys.NAME, e => t.getRole(e), e => e.name);
                                case f.AuditLogTargetTypes.INVITE:
                                    return K(e, f.AuditLogChangeKeys.CODE, f.NOOP_NULL);
                                case f.AuditLogTargetTypes.INTEGRATION:
                                    return K(e, f.AuditLogChangeKeys.TYPE, e => c.default.integrations.find(t => t.id === e), e => e.name);
                                case f.AuditLogTargetTypes.WEBHOOK:
                                    return K(e, f.AuditLogChangeKeys.NAME, e => c.default.webhooks.find(t => t.id === e), e => e.name);
                                case f.AuditLogTargetTypes.EMOJI:
                                    return K(e, f.AuditLogChangeKeys.NAME, e => u.default.getGuildEmoji(t.id).find(t => t.id === e), e => e.name);
                                case f.AuditLogTargetTypes.STICKER:
                                    return K(e, f.AuditLogChangeKeys.NAME, e => _.default.getStickerById(e), e => e.name);
                                case f.AuditLogTargetTypes.STAGE_INSTANCE:
                                    return K(e, f.AuditLogChangeKeys.TOPIC, e => {
                                        var s;
                                        return null === (s = Object.values(E.default.getStageInstancesByGuild(t.id))) || void 0 === s ? void 0 : s.find(t => t.id === e)
                                    }, e => e.topic);
                                case f.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
                                    return K(e, f.AuditLogChangeKeys.NAME, e => c.default.guildScheduledEvents.find(t => t.id === e), e => e.name);
                                case f.AuditLogTargetTypes.THREAD:
                                    return K(e, f.AuditLogChangeKeys.NAME, e => c.default.threads.find(t => t.id === e), e => e.name);
                                case f.AuditLogTargetTypes.APPLICATION_COMMAND:
                                    if (e.targetId === e.options.application_id) {
                                        let t = c.default.integrations.find(t => t.application_id === e.targetId);
                                        if (null != t) return t.name;
                                        return e.targetId
                                    }
                                    return K(e, f.AuditLogChangeKeys.NAME, e => c.default.applicationCommands.find(t => t.id === e), e => {
                                        let t = null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
                                        return e.type === r.ApplicationCommandType.CHAT ? "/⁠".concat(t) : t
                                    });
                                default:
                                    return m.warn("Unknown targetType for log", e), null
                            }
                        }(e, t),
                        l = N.default.getUser(e.userId);
                    if (null != l && (null != a || e.action === f.AuditLogActions.MEMBER_PRUNE || e.action === f.AuditLogActions.MEMBER_DISCONNECT || e.action === f.AuditLogActions.MEMBER_MOVE || e.action === f.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED || e.action === f.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED)) {
                        if (null != (e = (e = (e = e.set("user", l)).set("target", a)).set("options", function(e) {
                                if (null != e.options) {
                                    let a = {
                                        ...e.options
                                    };
                                    switch (e.options.type) {
                                        case f.AuditLogSubtargetTypes.USER:
                                            var t, s;
                                            (null === (t = e.options) || void 0 === t ? void 0 : t.id) != null && (a.subtarget = W(null == e ? void 0 : null === (s = e.options) || void 0 === s ? void 0 : s.id, e => N.default.getUser(e), e => e.tag));
                                            break;
                                        case f.AuditLogSubtargetTypes.ROLE:
                                            null != e.options.role_name && (a.subtarget = W(e.options.role_name, f.NOOP_NULL))
                                    }
                                    return null != e.options.channel_id && (a.channel = K(e, "", e => I.default.getChannel(e), void 0, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (a.count = e.options.members_removed), a
                                }
                                return e.options
                            }(e))).changes) {
                            let s = [];
                            e.changes.forEach(a => {
                                let l = function(e, t, s) {
                                    if (t.action === f.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                        let t = e.newValue || e.oldValue;
                                        switch (t.type) {
                                            case f.ApplicationCommandPermissionTypes.ROLE:
                                                e.subtarget = W(t.id, e => s.getRole(e), e => e.name);
                                                break;
                                            case f.ApplicationCommandPermissionTypes.USER:
                                                e.subtarget = W(t.id, e => N.default.getUser(e), e => e.tag);
                                                break;
                                            case f.ApplicationCommandPermissionTypes.CHANNEL:
                                                t.id === n(s.id).subtract(1).toString() ? e.subtarget = L.default.Messages.ALL_CHANNELS : e.subtarget = W(t.id, e => I.default.getChannel(e), e => (0, o.computeChannelName)(e, N.default, S.default, !0))
                                        }
                                        return e
                                    }
                                    switch (e.key) {
                                        case f.AuditLogChangeKeys.OWNER_ID:
                                            return Y(e, e => N.default.getUser(e));
                                        case f.AuditLogChangeKeys.CHANNEL_ID:
                                        case f.AuditLogChangeKeys.AFK_CHANNEL_ID:
                                        case f.AuditLogChangeKeys.SYSTEM_CHANNEL_ID:
                                        case f.AuditLogChangeKeys.RULES_CHANNEL_ID:
                                        case f.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID:
                                            return Y(e, e => I.default.getChannel(e), e => (0, o.computeChannelName)(e, N.default, S.default, !0));
                                        case f.AuditLogChangeKeys.AFK_TIMEOUT:
                                            return Y(e, e => e / 60);
                                        case f.AuditLogChangeKeys.BITRATE:
                                            return Y(e, e => e / 1e3);
                                        case f.AuditLogChangeKeys.COLOR:
                                            return Y(e, e => (0, i.int2hex)(e).toUpperCase());
                                        case f.AuditLogChangeKeys.MAX_AGE:
                                            return Y(e, e => {
                                                let t = g.default.getMaxAgeOptions.find(t => {
                                                    let {
                                                        value: s
                                                    } = t;
                                                    return e === s
                                                });
                                                return t ? t.label : e
                                            });
                                        case f.AuditLogChangeKeys.PERMISSIONS: {
                                            let t = [],
                                                {
                                                    added: s,
                                                    removed: a
                                                } = w(e.oldValue, e.newValue);
                                            if (s.length > 0) {
                                                let e = new T.AuditLogChange(f.AuditLogChangeKeys.PERMISSIONS_GRANTED, null, s);
                                                t.push(e)
                                            }
                                            if (a.length > 0) {
                                                let e = new T.AuditLogChange(f.AuditLogChangeKeys.PERMISSIONS_DENIED, null, a);
                                                t.push(e)
                                            }
                                            return t
                                        }
                                        case f.AuditLogChangeKeys.PERMISSIONS_GRANTED:
                                        case f.AuditLogChangeKeys.PERMISSIONS_DENIED: {
                                            let t = [],
                                                {
                                                    added: s,
                                                    removed: a
                                                } = w(e.oldValue, e.newValue);
                                            if (s.length > 0) {
                                                let a = new T.AuditLogChange(e.key, null, s);
                                                t.push(a)
                                            }
                                            if (a.length > 0) {
                                                let e = new T.AuditLogChange(f.AuditLogChangeKeys.PERMISSIONS_RESET, a, a);
                                                t.push(e)
                                            }
                                            return t
                                        }
                                        case f.AuditLogChangeKeys.PREFERRED_LOCALE:
                                            return Y(e, e => {
                                                let t = L.default.getAvailableLocales().find(t => t.value === e);
                                                return null != t ? t.name : null
                                            });
                                        case f.AuditLogChangeKeys.VIDEO_QUALITY_MODE:
                                            return Y(e, e => e === f.VideoQualityMode.FULL ? L.default.Messages.VIDEO_QUALITY_MODE_FULL : L.default.Messages.VIDEO_QUALITY_MODE_AUTO);
                                        case f.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAGS:
                                            return function(e) {
                                                let t = {
                                                        [f.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATIONS]: f.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                                        [f.SystemChannelFlags.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: f.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                                        [f.SystemChannelFlags.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: f.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                                        [f.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: f.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                                                    },
                                                    s = [];
                                                return Object.values(f.SystemChannelFlags).forEach(a => {
                                                    let n = (e.oldValue & a) === a,
                                                        l = (e.newValue & a) === a;
                                                    if (n === l) return;
                                                    let i = new T.AuditLogChange(t[a], !n, !l);
                                                    s.push(i)
                                                }), s
                                            }(e)
                                    }
                                    return e
                                }(a, e, t);
                                Array.isArray(l) ? l.forEach(e => s.push(e)) : s.push(l)
                            }), e = e.set("changes", s)
                        }
                        s.push(e)
                    }
                }), s
            }

            function w(e, t) {
                let s = l.default.deserialize("string" == typeof e ? e : 0),
                    a = l.default.deserialize("string" == typeof t ? t : 0),
                    n = l.default.remove(a, s),
                    i = l.default.remove(s, a),
                    r = [],
                    o = [],
                    d = {
                        ...f.Permissions
                    };
                for (let e in d) {
                    let t = d[e];
                    l.default.has(n, t) && r.push(t), l.default.has(i, t) && o.push(t)
                }
                return {
                    added: r,
                    removed: o
                }
            }

            function Y(e, t, s) {
                let a = e.newValue,
                    n = e.oldValue;
                return null != e.newValue && (a = t(e.newValue), null != s && null != a && (a = s(a))), null != e.oldValue && (n = t(e.oldValue), null != s && null != n && (n = s(n))), new T.AuditLogChange(e.key, n || e.oldValue, a || e.newValue)
            }

            function K(e, t, s, a, n) {
                let l = null;
                n = null != n ? n : e.targetId;
                let i = s(n);
                if (null != i && null != a && (l = a(i)), null == l && null != i && (l = i), null == l) {
                    let t = c.default.deletedTargets[e.targetType];
                    null != t && null != t[n] && (l = t[n])
                }
                if (null == l && null != e.changes) {
                    let s = e.changes.find(e => e.key === t);
                    null != s && (l = s.newValue || s.oldValue)
                }
                return l || n
            }

            function W(e, t, s) {
                let a = e,
                    n = t(e);
                return null != n && null != s && (a = s(n)), a
            }

            function z(e, t) {
                return s => null == s.oldValue ? e : t
            }

            function X(e, t) {
                return s => null == s.newValue ? e : t
            }

            function Z(e, t, s, a) {
                return n => {
                    if (null != n.newValue && null != n.oldValue) return e;
                    if (null != n.newValue) return t;
                    if (null != n.oldValue) return s;
                    return a
                }
            }
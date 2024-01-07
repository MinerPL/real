            "use strict";
            s.r(t), s.d(t, {
                DEFAULT_FOR_STRINGS_KEY: function() {
                    return B
                },
                GuildChangeStrings: function() {
                    return H
                },
                ChannelChangeStrings: function() {
                    return V
                },
                UserChangeStrings: function() {
                    return k
                },
                RoleChangeStrings: function() {
                    return w
                },
                OnboardingPromptChangeStrings: function() {
                    return Y
                },
                OnboardingChangeStrings: function() {
                    return K
                },
                HomeSettingsChangeStrings: function() {
                    return W
                },
                InviteChangeStrings: function() {
                    return z
                },
                WebhookChangeStrings: function() {
                    return X
                },
                EmojiChangeStrings: function() {
                    return Z
                },
                StickerChangeStrings: function() {
                    return J
                },
                IntegrationChangeStrings: function() {
                    return Q
                },
                StageInstanceChangeStrings: function() {
                    return q
                },
                GuildScheduledEventChangeStrings: function() {
                    return $
                },
                GuildScheduledEventExceptionChangeStrings: function() {
                    return ee
                },
                ThreadChangeStrings: function() {
                    return et
                },
                CommandPermissionChangeStrings: function() {
                    return es
                },
                AutoModerationRuleChangeStrings: function() {
                    return ea
                },
                GuildSoundboardChangeStrings: function() {
                    return en
                },
                VoiceChannelStatusStrings: function() {
                    return el
                },
                ClydeAiChangeStrings: function() {
                    return ei
                },
                NotRenderedChanges: function() {
                    return er
                },
                ACTION_FILTER_ITEMS: function() {
                    return eo
                },
                getChangeTitle: function() {
                    return ed
                },
                getStringForAddedChannelFlag: function() {
                    return eu
                },
                getStringForRemovedChannelFlag: function() {
                    return ec
                },
                getStringForPermission: function() {
                    return eE
                },
                transformLogs: function() {
                    return e_
                }
            }), s("70102"), s("424973");
            var a = s("552442"),
                n = s.n(a),
                l = s("866227"),
                i = s.n(l),
                r = s("611221"),
                o = s("498574"),
                d = s("316693"),
                u = s("509043"),
                c = s("798609"),
                E = s("679653"),
                _ = s("605250"),
                T = s("385976"),
                I = s("454686"),
                S = s("863636"),
                N = s("698882"),
                g = s("287103"),
                f = s("834052"),
                A = s("364685"),
                L = s("242020"),
                m = s("42203"),
                C = s("26989"),
                O = s("27618"),
                h = s("697218"),
                R = s("888400"),
                D = s("568734"),
                M = s("449008"),
                G = s("354023"),
                x = s("299039"),
                p = s("49111"),
                U = s("724210"),
                v = s("680894"),
                j = s("143460"),
                P = s("745049"),
                y = s("782340");
            let b = new _.default("AuditLogUtils"),
                B = -1,
                F = () => ({
                    [p.AuditLogChangeKeys.REASON]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
                }),
                H = () => ({
                    [p.AuditLogChangeKeys.NAME]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_NAME_CHANGE,
                    [p.AuditLogChangeKeys.DESCRIPTION]: eA(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CLEAR, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CHANGE),
                    [p.AuditLogChangeKeys.ICON_HASH]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_ICON_HASH_CHANGE,
                    [p.AuditLogChangeKeys.SPLASH_HASH]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SPLASH_HASH_CHANGE,
                    [p.AuditLogChangeKeys.DISCOVERY_SPLASH_HASH]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DISCOVERY_SPLASH_HASH_CHANGE,
                    [p.AuditLogChangeKeys.BANNER_HASH]: eA(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_REMOVE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_CHANGE),
                    [p.AuditLogChangeKeys.OWNER_ID]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_OWNER_ID_CHANGE,
                    [p.AuditLogChangeKeys.REGION]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_REGION_CHANGE,
                    [p.AuditLogChangeKeys.PREFERRED_LOCALE]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREFERRED_LOCALE_CHANGE,
                    [p.AuditLogChangeKeys.AFK_CHANNEL_ID]: eA(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CLEAR, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CHANGE),
                    [p.AuditLogChangeKeys.AFK_TIMEOUT]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_TIMEOUT_CHANGE,
                    [p.AuditLogChangeKeys.SYSTEM_CHANNEL_ID]: eA(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_DISABLE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_CHANGE),
                    [p.AuditLogChangeKeys.RULES_CHANNEL_ID]: eA(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CLEAR, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CHANGE),
                    [p.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID]: eA(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CLEAR, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CHANGE),
                    [p.AuditLogChangeKeys.MFA_LEVEL]: {
                        [p.MFALevels.NONE]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_DISABLED,
                        [p.MFALevels.ELEVATED]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_ENABLED
                    },
                    [p.AuditLogChangeKeys.WIDGET_ENABLED]: {
                        true: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_ENABLED,
                        false: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_DISABLED
                    },
                    [p.AuditLogChangeKeys.WIDGET_CHANNEL_ID]: eA(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_DELETE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_CHANGE),
                    [p.AuditLogChangeKeys.VERIFICATION_LEVEL]: {
                        [p.VerificationLevels.NONE]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_NONE,
                        [p.VerificationLevels.LOW]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_LOW,
                        [p.VerificationLevels.MEDIUM]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_MEDIUM,
                        [p.VerificationLevels.HIGH]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_HIGH,
                        [p.VerificationLevels.VERY_HIGH]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_VERY_HIGH
                    },
                    [p.AuditLogChangeKeys.DEFAULT_MESSAGE_NOTIFICATIONS]: {
                        [p.UserNotificationSettings.ALL_MESSAGES]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ALL_MESSAGES,
                        [p.UserNotificationSettings.ONLY_MENTIONS]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ONLY_MENTIONS
                    },
                    [p.AuditLogChangeKeys.VANITY_URL_CODE]: eA(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_DELETE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_CHANGE),
                    [p.AuditLogChangeKeys.EXPLICIT_CONTENT_FILTER]: {
                        [p.GuildExplicitContentFilterTypes.DISABLED]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_DISABLE,
                        [p.GuildExplicitContentFilterTypes.MEMBERS_WITHOUT_ROLES]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_MEMBERS_WITHOUT_ROLES,
                        [p.GuildExplicitContentFilterTypes.ALL_MEMBERS]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_ALL_MEMBERS
                    },
                    [p.AuditLogChangeKeys.PREMIUM_PROGRESS_BAR_ENABLED]: {
                        true: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_ENABLED,
                        false: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_DISABLED
                    },
                    [p.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
                    [p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATIONS,
                    [p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTIONS,
                    [p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_REMINDER_NOTIFICATIONS,
                    [p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATION_REPLIES,
                    ...F()
                }),
                V = () => ({
                    [p.AuditLogChangeKeys.NAME]: ef(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CHANGE),
                    [p.AuditLogChangeKeys.POSITION]: ef(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CHANGE),
                    [p.AuditLogChangeKeys.TOPIC]: eL(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CLEAR),
                    [p.AuditLogChangeKeys.BITRATE]: ef(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CHANGE),
                    [p.AuditLogChangeKeys.RTC_REGION_OVERRIDE]: eL(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CHANGE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_DELETE),
                    [p.AuditLogChangeKeys.USER_LIMIT]: ef(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CHANGE),
                    [p.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: ef(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
                    [p.AuditLogChangeKeys.PERMISSIONS_RESET]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_RESET,
                    [p.AuditLogChangeKeys.PERMISSIONS_GRANTED]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_GRANTED,
                    [p.AuditLogChangeKeys.PERMISSIONS_DENIED]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_DENIED,
                    [p.AuditLogChangeKeys.REASON]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON,
                    [p.AuditLogChangeKeys.NSFW]: {
                        false: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_DISABLED,
                        true: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_ENABLED
                    },
                    [p.AuditLogChangeKeys.TYPE]: ef(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CHANGE),
                    [p.AuditLogChangeKeys.VIDEO_QUALITY_MODE]: ef(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CHANGE),
                    [p.AuditLogChangeKeys.DEFAULT_AUTO_ARCHIVE_DURATION]: ef(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CHANGE),
                    [p.AuditLogChangeKeys.FLAGS]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_FLAGS_CHANGE,
                    [p.AuditLogChangeKeys.AVAILABLE_TAG_ADD]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_ADD,
                    [p.AuditLogChangeKeys.AVAILABLE_TAG_EDIT]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_UPDATE,
                    [p.AuditLogChangeKeys.AVAILABLE_TAG_DELETE]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_DELETE
                }),
                k = () => ({
                    [p.AuditLogChangeKeys.NICK]: eL(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CHANGE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_DELETE),
                    [p.AuditLogChangeKeys.DEAF]: {
                        true: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_ON,
                        false: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_OFF
                    },
                    [p.AuditLogChangeKeys.MUTE]: {
                        true: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_ON,
                        false: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_OFF
                    },
                    [p.AuditLogChangeKeys.ROLES_REMOVE]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_REMOVE,
                    [p.AuditLogChangeKeys.ROLES_ADD]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_ADD,
                    [p.AuditLogChangeKeys.PRUNE_DELETE_DAYS]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE_DELETE_DAYS,
                    [p.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL]: eL(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL_REMOVED),
                    [p.AuditLogChangeKeys.BYPASSES_VERIFICATION]: {
                        true: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_ON,
                        false: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_OFF
                    },
                    [p.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
                    ...F()
                }),
                w = () => ({
                    [p.AuditLogChangeKeys.NAME]: ef(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CHANGE),
                    [p.AuditLogChangeKeys.DESCRIPTION]: ef(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
                    [p.AuditLogChangeKeys.PERMISSIONS_GRANTED]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_GRANTED,
                    [p.AuditLogChangeKeys.PERMISSIONS_DENIED]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_DENIED,
                    [p.AuditLogChangeKeys.COLOR]: {
                        "#000000": y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_NONE,
                        [B]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_IOS
                    },
                    [p.AuditLogChangeKeys.HOIST]: {
                        true: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_ON,
                        false: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_OFF
                    },
                    [p.AuditLogChangeKeys.MENTIONABLE]: {
                        true: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_ON,
                        false: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_OFF
                    },
                    [p.AuditLogChangeKeys.ICON_HASH]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_ICON_HASH_CHANGE,
                    [p.AuditLogChangeKeys.UNICODE_EMOJI]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UNICODE_EMOJI_CHANGE,
                    ...F()
                }),
                Y = () => ({
                    ...F(),
                    [p.AuditLogChangeKeys.TITLE]: e => {
                        let {
                            oldValue: t,
                            newValue: s
                        } = e;
                        return null != t ? (0 === t.length && (t = y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE), y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_TITLE_CHANGE.format({
                            oldValue: t,
                            newValue: s
                        })) : y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_TITLE_CREATE
                    },
                    [p.AuditLogChangeKeys.DESCRIPTION]: e => {
                        let {
                            oldValue: t,
                            newValue: s
                        } = e;
                        return null != t ? (0 === t.length && (t = y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE), y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DESCRIPTION_CHANGE.format({
                            oldValue: t,
                            newValue: s
                        })) : y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DESCRIPTION_CREATE.format({
                            newValue: s
                        })
                    },
                    [p.AuditLogChangeKeys.OPTIONS]: () => y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CHANGED_OPTIONS,
                    [p.AuditLogChangeKeys.SINGLE_SELECT]: {
                        true: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_SINGLE_SELECT,
                        false: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_MULTI_SELECT
                    },
                    [p.AuditLogChangeKeys.REQUIRED]: {
                        true: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_REQUIRED,
                        false: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_OPTIONAL
                    }
                }),
                K = () => ({
                    ...F(),
                    [p.AuditLogChangeKeys.DEFAULT_CHANNEL_IDS]: e => {
                        let {
                            newValue: t
                        } = e;
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DEFAULT_CHANNEL_IDS.format({
                            count: t.length
                        })
                    },
                    [p.AuditLogChangeKeys.ENABLE_DEFAULT_CHANNELS]: {
                        true: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE_DEFAULT_CHANNELS,
                        false: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE_DEFAULT_CHANNELS
                    },
                    [p.AuditLogChangeKeys.ENABLE_ONBOARDING_PROMPTS]: {
                        true: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE_PROMPTS,
                        false: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE_PROMPTS
                    },
                    [p.AuditLogChangeKeys.ENABLED]: {
                        true: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE,
                        false: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE
                    }
                }),
                W = () => ({
                    ...F(),
                    [p.AuditLogChangeKeys.WELCOME_MESSAGE]: () => y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_WELCOME_MESSAGE,
                    [p.AuditLogChangeKeys.NEW_MEMBER_ACTIONS]: () => y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_NEW_MEMBER_ACTIONS,
                    [p.AuditLogChangeKeys.RESOURCE_CHANNELS]: () => y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_RESOURCE_CHANNELS
                }),
                z = () => ({
                    [p.AuditLogChangeKeys.CODE]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CODE_CREATE,
                    [p.AuditLogChangeKeys.CHANNEL_ID]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CHANNEL_CREATE,
                    [p.AuditLogChangeKeys.MAX_USES]: {
                        0: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE_INFINITE,
                        [B]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE
                    },
                    [p.AuditLogChangeKeys.MAX_AGE]: {
                        0: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE_INFINITE,
                        [B]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE
                    },
                    [p.AuditLogChangeKeys.TEMPORARY]: {
                        true: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_ON,
                        false: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_OFF
                    },
                    [p.AuditLogChangeKeys.FLAGS]: e => {
                        let {
                            newValue: t
                        } = e;
                        return function(e) {
                            let {
                                newValue: t
                            } = e;
                            return t.map(e => (function(e) {
                                if (e === o.GuildInviteFlags.IS_GUEST_INVITE) return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_INVITE_GUEST_INVITE;
                                return null
                            })(e)).filter(M.isNotNullish)
                        }({
                            newValue: t
                        })
                    },
                    ...F()
                }),
                X = () => ({
                    [p.AuditLogChangeKeys.CHANNEL_ID]: ef(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CHANGE),
                    [p.AuditLogChangeKeys.NAME]: ef(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CHANGE),
                    [p.AuditLogChangeKeys.AVATAR_HASH]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_AVATAR,
                    [p.AuditLogChangeKeys.REASON]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
                }),
                Z = () => ({
                    [p.AuditLogChangeKeys.NAME]: ef(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CHANGE),
                    ...F()
                }),
                J = () => ({
                    [p.AuditLogChangeKeys.NAME]: ef(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CHANGE),
                    [p.AuditLogChangeKeys.TAGS]: ef(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CHANGE),
                    [p.AuditLogChangeKeys.DESCRIPTION]: ef(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
                    ...F()
                }),
                Q = () => ({
                    [p.AuditLogChangeKeys.ENABLE_EMOTICONS]: {
                        true: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_ON,
                        false: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_OFF
                    },
                    [p.AuditLogChangeKeys.EXPIRE_BEHAVIOR]: {
                        0: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_REMOVE_SYNCED_ROLE,
                        1: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_KICK_FROM_SERVER
                    },
                    [p.AuditLogChangeKeys.EXPIRE_GRACE_PERIOD]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_GRACE_PERIOD,
                    ...F()
                }),
                q = () => ({
                    [p.AuditLogChangeKeys.TOPIC]: ef(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE),
                    [p.AuditLogChangeKeys.PRIVACY_LEVEL]: {
                        [P.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
                        [P.GuildScheduledEventPrivacyLevel.PUBLIC]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
                    },
                    ...F()
                }),
                $ = () => ({
                    [p.AuditLogChangeKeys.NAME]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_NAME_CREATE,
                    [p.AuditLogChangeKeys.DESCRIPTION]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DESCRIPTION_CREATE,
                    [p.AuditLogChangeKeys.PRIVACY_LEVEL]: {
                        [P.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
                        [P.GuildScheduledEventPrivacyLevel.PUBLIC]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
                    },
                    [p.AuditLogChangeKeys.STATUS]: {
                        [P.GuildScheduledEventStatus.SCHEDULED]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_SCHEDULED,
                        [P.GuildScheduledEventStatus.ACTIVE]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_ACTIVE,
                        [P.GuildScheduledEventStatus.COMPLETED]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_COMPLETED,
                        [P.GuildScheduledEventStatus.CANCELED]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_CANCELED
                    },
                    [p.AuditLogChangeKeys.ENTITY_TYPE]: {
                        [P.GuildScheduledEventEntityTypes.NONE]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_NONE,
                        [P.GuildScheduledEventEntityTypes.STAGE_INSTANCE]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_STAGE_INSTANCE,
                        [P.GuildScheduledEventEntityTypes.VOICE]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_VOICE,
                        [P.GuildScheduledEventEntityTypes.EXTERNAL]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_EXTERNAL
                    },
                    [p.AuditLogChangeKeys.CHANNEL_ID]: eA(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL_CLEAR, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL),
                    [p.AuditLogChangeKeys.LOCATION]: eA(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION_CLEAR, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION),
                    [p.AuditLogChangeKeys.IMAGE_HASH]: eA(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_IMAGE_HASH_REMOVE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_IMAGE_HASH_CHANGE),
                    ...F()
                }),
                ee = () => ({
                    [p.AuditLogChangeKeys.SCHEDULED_START_TIME]: eA(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_START_TIME_REMOVED, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_START_TIME_CHANGE),
                    [p.AuditLogChangeKeys.SCHEDULED_END_TIME]: eA(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_END_TIME_REMOVED, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_END_TIME_CHANGE),
                    [p.AuditLogChangeKeys.IS_CANCELED]: e => {
                        if (null != e.oldValue || !0 === e.newValue) {
                            if (!e.oldValue && e.newValue) return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_IS_CANCELED_CANCELED;
                            if (e.oldValue && !e.newValue) return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_IS_CANCELED_RESTORED
                        }
                        return ""
                    },
                    ...F()
                }),
                et = () => ({
                    [p.AuditLogChangeKeys.NAME]: ef(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CHANGE),
                    [p.AuditLogChangeKeys.ARCHIVED]: {
                        true: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_ARCHIVED,
                        false: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNARCHIVED
                    },
                    [p.AuditLogChangeKeys.LOCKED]: {
                        true: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_LOCKED,
                        false: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNLOCKED
                    },
                    [p.AuditLogChangeKeys.INVITABLE]: {
                        true: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_ENABLED,
                        false: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_DISABLED
                    },
                    [p.AuditLogChangeKeys.AUTO_ARCHIVE_DURATION]: ef(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CHANGE),
                    [p.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: ef(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
                    [p.AuditLogChangeKeys.FLAGS]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_FLAGS_CHANGE,
                    ...F()
                }),
                es = e => {
                    let t = {
                        ...F()
                    };
                    return null == e || e.forEach(e => {
                        e.newValue ? e.newValue.permission ? t[e.key] = y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_GRANTED : t[e.key] = y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_DENIED : t[e.key] = y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_REMOVED
                    }), t
                },
                ea = () => {
                    let e = {
                        [p.AuditLogChangeKeys.NAME]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NAME_UPDATE,
                        [p.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_TYPE]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_TYPE_UPDATE,
                        [p.AuditLogChangeKeys.AUTO_MODERATION_EVENT_TYPE]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EVENT_TYPE_UPDATE,
                        [p.AuditLogChangeKeys.AUTO_MODERATION_ACTIONS]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ACTIONS_UPDATE,
                        [p.AuditLogChangeKeys.AUTO_MODERATION_ENABLED]: {
                            true: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ENABLED_UPDATE,
                            false: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_DISABLED_UPDATE
                        },
                        [p.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_ROLES]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EXEMPT_ROLES_UPDATE,
                        [p.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_CHANNELS]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EXEMPT_CHANNELS_UPDATE,
                        [p.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_METADATA]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_METADATA_UPDATE,
                        [p.AuditLogChangeKeys.AUTO_MODERATION_ADD_KEYWORDS]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_KEYWORDS,
                        [p.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_KEYWORDS]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_KEYWORDS,
                        [p.AuditLogChangeKeys.AUTO_MODERATION_ADD_REGEX_PATTERNS]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_REGEX_PATTERNS,
                        [p.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_REGEX_PATTERNS,
                        [p.AuditLogChangeKeys.AUTO_MODERATION_ADD_ALLOW_LIST]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_ALLOW_LIST,
                        [p.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_ALLOW_LIST]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_ALLOW_LIST,
                        ...F()
                    };
                    return e
                },
                en = () => ({
                    [p.AuditLogChangeKeys.NAME]: ef(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_NAME_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_NAME_CHANGE),
                    [p.AuditLogChangeKeys.VOLUME]: ef(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_VOLUME_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_VOLUME_CHANGE),
                    [p.AuditLogChangeKeys.EMOJI_NAME]: eL(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_REPLACE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_REMOVE),
                    [p.AuditLogChangeKeys.EMOJI_ID]: eL(y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_REPLACE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_CREATE, y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_REMOVE),
                    ...F()
                }),
                el = () => ({
                    [p.AuditLogChangeKeys.STATUS]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_STATUS_CREATE,
                    ...F()
                }),
                ei = () => ({
                    [p.AuditLogChangeKeys.NAME]: e => {
                        let {
                            newValue: t
                        } = e;
                        return "" === t || null == t ? y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CLYDE_AI_NAME_RESET : y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CLYDE_AI_NAME_UPDATED
                    },
                    [p.AuditLogChangeKeys.AVATAR_HASH]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CLYDE_AI_AVATAR_UPDATED,
                    [p.AuditLogChangeKeys.BANNER_HASH]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CLYDE_AI_BANNER_UPDATED,
                    [p.AuditLogChangeKeys.THEME_COLORS]: y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CLYDE_AI_THEME_COLORS_UPDATED,
                    [p.AuditLogChangeKeys.PERSONALITY]: e => {
                        let {
                            newValue: t
                        } = e;
                        return "" === t ? y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CLYDE_AI_PERSONALITY_RESET : y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CLYDE_AI_PERSONALITY_UPDATED
                    },
                    ...F()
                }),
                er = {
                    [p.AuditLogTargetTypes.CHANNEL]: {
                        [p.AuditLogChangeKeys.ID]: !0,
                        [p.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
                    },
                    [p.AuditLogTargetTypes.CHANNEL_OVERWRITE]: {
                        [p.AuditLogChangeKeys.TYPE]: !0,
                        [p.AuditLogChangeKeys.ID]: !0,
                        [p.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
                    },
                    [p.AuditLogTargetTypes.INVITE]: {
                        [p.AuditLogChangeKeys.INVITER_ID]: !0,
                        [p.AuditLogChangeKeys.USES]: !0
                    },
                    [p.AuditLogTargetTypes.WEBHOOK]: {
                        [p.AuditLogChangeKeys.TYPE]: !0,
                        [p.AuditLogChangeKeys.APPLICATION_ID]: !0
                    },
                    [p.AuditLogTargetTypes.INTEGRATION]: {
                        [p.AuditLogChangeKeys.TYPE]: !0
                    },
                    [p.AuditLogTargetTypes.THREAD]: {
                        [p.AuditLogChangeKeys.ID]: !0,
                        [p.AuditLogChangeKeys.TYPE]: !0
                    },
                    [p.AuditLogTargetTypes.STICKER]: {
                        [p.AuditLogChangeKeys.ID]: !0,
                        [p.AuditLogChangeKeys.TYPE]: !0,
                        [p.AuditLogChangeKeys.ASSET]: !0,
                        [p.AuditLogChangeKeys.FORMAT_TYPE]: !0,
                        [p.AuditLogChangeKeys.AVAILABLE]: !0,
                        [p.AuditLogChangeKeys.GUILD_ID]: !0
                    },
                    [p.AuditLogTargetTypes.GUILD_HOME]: {
                        [p.AuditLogChangeKeys.ENTITY_TYPE]: !0
                    },
                    [p.AuditLogTargetTypes.GUILD_ONBOARDING]: {
                        [p.AuditLogChangeKeys.PROMPTS]: !0
                    },
                    [p.AuditLogTargetTypes.GUILD_SOUNDBOARD]: {
                        [p.AuditLogChangeKeys.ID]: !0,
                        [p.AuditLogChangeKeys.SOUND_ID]: !0
                    },
                    [p.AuditLogTargetTypes.CLYDE_AI]: {
                        [p.AuditLogChangeKeys.CLYDE_PROFILE_ID]: !0,
                        [p.AuditLogChangeKeys.AUTHOR_ID]: !0
                    }
                },
                eo = () => [{
                    value: p.AuditLogActions.ALL,
                    label: y.default.Messages.GUILD_SETTINGS_FILTER_ALL_ACTIONS,
                    valueLabel: y.default.Messages.GUILD_SETTINGS_FILTER_ALL
                }, {
                    value: p.AuditLogActions.GUILD_UPDATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_UPDATE
                }, {
                    value: p.AuditLogActions.CHANNEL_CREATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_CREATE
                }, {
                    value: p.AuditLogActions.CHANNEL_UPDATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_UPDATE
                }, {
                    value: p.AuditLogActions.CHANNEL_DELETE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_DELETE
                }, {
                    value: p.AuditLogActions.CHANNEL_OVERWRITE_CREATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_CREATE
                }, {
                    value: p.AuditLogActions.CHANNEL_OVERWRITE_UPDATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_UPDATE
                }, {
                    value: p.AuditLogActions.CHANNEL_OVERWRITE_DELETE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_DELETE
                }, {
                    value: p.AuditLogActions.MEMBER_KICK,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_KICK
                }, {
                    value: p.AuditLogActions.MEMBER_PRUNE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_PRUNE
                }, {
                    value: p.AuditLogActions.MEMBER_BAN_ADD,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_ADD
                }, {
                    value: p.AuditLogActions.MEMBER_BAN_REMOVE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_REMOVE
                }, {
                    value: p.AuditLogActions.MEMBER_UPDATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_UPDATE
                }, {
                    value: p.AuditLogActions.MEMBER_ROLE_UPDATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_ROLE_UPDATE
                }, {
                    value: p.AuditLogActions.MEMBER_MOVE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_MOVE
                }, {
                    value: p.AuditLogActions.MEMBER_DISCONNECT,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_DISCONNECT
                }, {
                    value: p.AuditLogActions.BOT_ADD,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_BOT_ADD
                }, {
                    value: p.AuditLogActions.THREAD_CREATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_CREATE
                }, {
                    value: p.AuditLogActions.THREAD_UPDATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_UPDATE
                }, {
                    value: p.AuditLogActions.THREAD_DELETE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_DELETE
                }, {
                    value: p.AuditLogActions.ROLE_CREATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
                }, {
                    value: p.AuditLogActions.ROLE_UPDATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_UPDATE
                }, {
                    value: p.AuditLogActions.ROLE_DELETE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_DELETE
                }, {
                    value: p.AuditLogActions.ONBOARDING_PROMPT_CREATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_CREATE
                }, {
                    value: p.AuditLogActions.ONBOARDING_PROMPT_UPDATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_UPDATE
                }, {
                    value: p.AuditLogActions.ONBOARDING_PROMPT_DELETE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_DELETE
                }, {
                    value: p.AuditLogActions.ONBOARDING_CREATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ONBOARDING_CREATE
                }, {
                    value: p.AuditLogActions.ONBOARDING_UPDATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ONBOARDING_UPDATE
                }, {
                    value: p.AuditLogActions.HOME_SETTINGS_CREATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_HOME_SETTINGS_CREATE
                }, {
                    value: p.AuditLogActions.HOME_SETTINGS_UPDATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_HOME_SETTINGS_UPDATE
                }, {
                    value: p.AuditLogActions.INVITE_CREATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_CREATE
                }, {
                    value: p.AuditLogActions.INVITE_UPDATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_UPDATE
                }, {
                    value: p.AuditLogActions.INVITE_DELETE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_DELETE
                }, {
                    value: p.AuditLogActions.WEBHOOK_CREATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_CREATE
                }, {
                    value: p.AuditLogActions.WEBHOOK_UPDATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_UPDATE
                }, {
                    value: p.AuditLogActions.WEBHOOK_DELETE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_DELETE
                }, {
                    value: p.AuditLogActions.EMOJI_CREATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_CREATE
                }, {
                    value: p.AuditLogActions.EMOJI_UPDATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_UPDATE
                }, {
                    value: p.AuditLogActions.EMOJI_DELETE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_DELETE
                }, {
                    value: p.AuditLogActions.MESSAGE_DELETE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_DELETE
                }, {
                    value: p.AuditLogActions.MESSAGE_BULK_DELETE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_BULK_DELETE
                }, {
                    value: p.AuditLogActions.MESSAGE_PIN,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_PIN
                }, {
                    value: p.AuditLogActions.MESSAGE_UNPIN,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_UNPIN
                }, {
                    value: p.AuditLogActions.INTEGRATION_CREATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_CREATE
                }, {
                    value: p.AuditLogActions.INTEGRATION_UPDATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_UPDATE
                }, {
                    value: p.AuditLogActions.INTEGRATION_DELETE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_DELETE
                }, {
                    value: p.AuditLogActions.STICKER_CREATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_CREATE
                }, {
                    value: p.AuditLogActions.STICKER_UPDATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_UPDATE
                }, {
                    value: p.AuditLogActions.STICKER_DELETE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_DELETE
                }, {
                    value: p.AuditLogActions.STAGE_INSTANCE_CREATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_CREATE
                }, {
                    value: p.AuditLogActions.STAGE_INSTANCE_UPDATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_UPDATE
                }, {
                    value: p.AuditLogActions.STAGE_INSTANCE_DELETE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_DELETE
                }, {
                    value: p.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_CREATE
                }, {
                    value: p.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_UPDATE
                }, {
                    value: p.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_DELETE
                }, {
                    value: p.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_APPLICATION_COMMAND_PERMISSION_UPDATE
                }, {
                    value: p.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_BLOCK_MESSAGE
                }, {
                    value: p.AuditLogActions.AUTO_MODERATION_RULE_CREATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE
                }, {
                    value: p.AuditLogActions.AUTO_MODERATION_RULE_UPDATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_UPDATE
                }, {
                    value: p.AuditLogActions.AUTO_MODERATION_RULE_DELETE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_DELETE
                }, {
                    value: p.AuditLogActions.GUILD_HOME_FEATURE_ITEM,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_HOME_FEATURE_ITEM
                }, {
                    value: p.AuditLogActions.GUILD_HOME_REMOVE_ITEM,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_HOME_REMOVE_ITEM
                }, {
                    value: p.AuditLogActions.SOUNDBOARD_SOUND_CREATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_CREATE
                }, {
                    value: p.AuditLogActions.SOUNDBOARD_SOUND_UPDATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_UPDATE
                }, {
                    value: p.AuditLogActions.SOUNDBOARD_SOUND_DELETE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_DELETE
                }, {
                    value: p.AuditLogActions.CLYDE_AI_PROFILE_UPDATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CLYDE_AI_PROFIE_UPDATE
                }, {
                    value: p.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_CREATE
                }, {
                    value: p.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE,
                    label: y.default.Messages.GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_DELETE
                }];

            function ed(e) {
                switch (e.action) {
                    case p.AuditLogActions.GUILD_UPDATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATE;
                    case p.AuditLogActions.CHANNEL_CREATE:
                        let t = null != e.changes ? e.changes.find(e => e.key === p.AuditLogChangeKeys.TYPE) : null;
                        if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
                        switch (t.newValue) {
                            case p.ChannelTypes.GUILD_STAGE_VOICE:
                                return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_STAGE_CREATE;
                            case p.ChannelTypes.GUILD_VOICE:
                                return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VOICE_CREATE;
                            case p.ChannelTypes.GUILD_CATEGORY:
                                return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_CATEGORY_CREATE;
                            default:
                                return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TEXT_CREATE
                        }
                    case p.AuditLogActions.CHANNEL_UPDATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_UPDATE;
                    case p.AuditLogActions.CHANNEL_DELETE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DELETE;
                    case p.AuditLogActions.CHANNEL_OVERWRITE_CREATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_CREATE;
                    case p.AuditLogActions.CHANNEL_OVERWRITE_UPDATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_UPDATE;
                    case p.AuditLogActions.CHANNEL_OVERWRITE_DELETE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_DELETE;
                    case p.AuditLogActions.MEMBER_KICK:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_KICK;
                    case p.AuditLogActions.MEMBER_PRUNE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE;
                    case p.AuditLogActions.MEMBER_BAN_ADD:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_ADD;
                    case p.AuditLogActions.MEMBER_BAN_REMOVE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_REMOVE;
                    case p.AuditLogActions.MEMBER_UPDATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_UPDATE;
                    case p.AuditLogActions.MEMBER_ROLE_UPDATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLE_UPDATE;
                    case p.AuditLogActions.MEMBER_MOVE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MOVE;
                    case p.AuditLogActions.MEMBER_DISCONNECT:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DISCONNECT;
                    case p.AuditLogActions.BOT_ADD:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_BOT_ADD;
                    case p.AuditLogActions.ROLE_CREATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_CREATE;
                    case p.AuditLogActions.ROLE_UPDATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UPDATE;
                    case p.AuditLogActions.ROLE_DELETE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_DELETE;
                    case p.AuditLogActions.INVITE_CREATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CREATE;
                    case p.AuditLogActions.INVITE_UPDATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_UPDATE;
                    case p.AuditLogActions.INVITE_DELETE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_DELETE;
                    case p.AuditLogActions.WEBHOOK_CREATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CREATE;
                    case p.AuditLogActions.WEBHOOK_UPDATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_UPDATE;
                    case p.AuditLogActions.WEBHOOK_DELETE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_DELETE;
                    case p.AuditLogActions.EMOJI_CREATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_CREATE;
                    case p.AuditLogActions.EMOJI_UPDATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_UPDATE;
                    case p.AuditLogActions.EMOJI_DELETE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_DELETE;
                    case p.AuditLogActions.STICKER_CREATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_CREATE;
                    case p.AuditLogActions.STICKER_UPDATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_UPDATE;
                    case p.AuditLogActions.STICKER_DELETE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_DELETE;
                    case p.AuditLogActions.MESSAGE_DELETE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_DELETE;
                    case p.AuditLogActions.MESSAGE_BULK_DELETE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_BULK_DELETE;
                    case p.AuditLogActions.MESSAGE_PIN:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_PIN;
                    case p.AuditLogActions.MESSAGE_UNPIN:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_UNPIN;
                    case p.AuditLogActions.INTEGRATION_CREATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_CREATE;
                    case p.AuditLogActions.INTEGRATION_UPDATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_UPDATE;
                    case p.AuditLogActions.INTEGRATION_DELETE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_DELETE;
                    case p.AuditLogActions.STAGE_INSTANCE_CREATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_CREATE;
                    case p.AuditLogActions.STAGE_INSTANCE_UPDATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_UPDATE;
                    case p.AuditLogActions.STAGE_INSTANCE_DELETE:
                        if (null != e.userId) return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE;
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE_NO_USER;
                    case p.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CREATE;
                    case p.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_UPDATE;
                    case p.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DELETE;
                    case p.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
                    case p.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_UPDATE;
                    case p.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_DELETE;
                    case p.AuditLogActions.THREAD_CREATE:
                        let s = null != e.changes ? e.changes.find(e => e.key === p.AuditLogChangeKeys.TYPE) : null;
                        if (null == s) throw Error("[AuditLog] Could not find type change for thread create");
                        switch (s.newValue) {
                            case p.ChannelTypes.PRIVATE_THREAD:
                                return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_PRIVATE_THREAD_CREATE;
                            case p.ChannelTypes.ANNOUNCEMENT_THREAD:
                                return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ANNOUNCEMENT_THREAD_CREATE;
                            default:
                                return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_CREATE
                        }
                    case p.AuditLogActions.THREAD_UPDATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UPDATE;
                    case p.AuditLogActions.THREAD_DELETE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_DELETE;
                    case p.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_UPDATE;
                    case p.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_BLOCK_MESSAGE;
                    case p.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL:
                        var a;
                        if ((null === (a = e.options) || void 0 === a ? void 0 : a.auto_moderation_rule_trigger_type) === j.AutomodTriggerType.USER_PROFILE.toString()) return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAGGED_USER_PROFILE;
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAG_TO_CHANNEL_MESSAGE;
                    case p.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_USER_COMMUNICATION_DISABLED_MESSAGE;
                    case p.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_QUARANTINE_USER;
                    case p.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED:
                        return y.default.Messages.CREATOR_MONETIZATION_APPLIED_AUDIT_LOG_TITLE;
                    case p.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED:
                        return y.default.Messages.CREATOR_MONETIZATION_TERMS_ACCEPTED_AUDIT_LOG_TITLE;
                    case p.AuditLogActions.AUTO_MODERATION_RULE_CREATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_CREATE;
                    case p.AuditLogActions.AUTO_MODERATION_RULE_UPDATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_UPDATE;
                    case p.AuditLogActions.AUTO_MODERATION_RULE_DELETE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_DELETE;
                    case p.AuditLogActions.ONBOARDING_PROMPT_CREATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_CREATE;
                    case p.AuditLogActions.ONBOARDING_PROMPT_UPDATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_UPDATE;
                    case p.AuditLogActions.ONBOARDING_PROMPT_DELETE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DELETE;
                    case p.AuditLogActions.ONBOARDING_CREATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_CREATE;
                    case p.AuditLogActions.ONBOARDING_UPDATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_UPDATE;
                    case p.AuditLogActions.HOME_SETTINGS_CREATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CREATE;
                    case p.AuditLogActions.HOME_SETTINGS_UPDATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_UPDATE;
                    case p.AuditLogActions.GUILD_HOME_FEATURE_ITEM:
                        let n = null != e.changes ? e.changes.find(e => e.key === p.AuditLogChangeKeys.ENTITY_TYPE) : null;
                        if (null == n) return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_ITEM;
                        switch (n.newValue) {
                            case r.GuildFeedItemTypes.MESSAGE:
                                return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_MESSAGE;
                            case r.GuildFeedItemTypes.FORUM_POST:
                                return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_FORUM_POST;
                            default:
                                return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_ITEM
                        }
                    case p.AuditLogActions.GUILD_HOME_REMOVE_ITEM:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_REMOVE_ITEM;
                    case p.AuditLogActions.SOUNDBOARD_SOUND_CREATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_CREATED;
                    case p.AuditLogActions.SOUNDBOARD_SOUND_UPDATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_UPDATED;
                    case p.AuditLogActions.SOUNDBOARD_SOUND_DELETE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_DELETED;
                    case p.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_CREATED;
                    case p.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_DELETED;
                    case p.AuditLogActions.CLYDE_AI_PROFILE_UPDATE:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CLYDE_AI_PROFILE_UPDATE;
                    default:
                        return null
                }
            }

            function eu(e) {
                switch (e) {
                    case U.ChannelFlags.GUILD_FEED_REMOVED:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_REMOVE_CHANNEL;
                    case U.ChannelFlags.ACTIVE_CHANNELS_REMOVED:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ACTIVE_CHANNELS_REMOVE_CHANNEL;
                    case U.ChannelFlags.PINNED:
                        return y.default.Messages.PINNED_POST
                }
                return null
            }

            function ec(e) {
                switch (e) {
                    case U.ChannelFlags.GUILD_FEED_REMOVED:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_UNREMOVE_CHANNEL;
                    case U.ChannelFlags.ACTIVE_CHANNELS_REMOVED:
                        return y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ACTIVE_CHANNELS_UNREMOVE_CHANNEL;
                    case U.ChannelFlags.PINNED:
                        return y.default.Messages.UNPINNED_POST
                }
                return null
            }

            function eE(e, t) {
                switch (e) {
                    case p.Permissions.CREATE_INSTANT_INVITE:
                        return y.default.Messages.CREATE_INSTANT_INVITE;
                    case p.Permissions.KICK_MEMBERS:
                        return y.default.Messages.KICK_MEMBERS;
                    case p.Permissions.BAN_MEMBERS:
                        return y.default.Messages.BAN_MEMBERS;
                    case p.Permissions.ADMINISTRATOR:
                        return y.default.Messages.ADMINISTRATOR;
                    case p.Permissions.MANAGE_CHANNELS:
                        if (t.targetType === p.AuditLogTargetTypes.CHANNEL || t.targetType === p.AuditLogTargetTypes.CHANNEL_OVERWRITE) return y.default.Messages.MANAGE_CHANNEL;
                        return y.default.Messages.MANAGE_CHANNELS;
                    case p.Permissions.MANAGE_GUILD:
                        return y.default.Messages.MANAGE_SERVER;
                    case p.Permissions.VIEW_GUILD_ANALYTICS:
                        return y.default.Messages.VIEW_GUILD_ANALYTICS;
                    case p.Permissions.CHANGE_NICKNAME:
                        return y.default.Messages.CHANGE_NICKNAME;
                    case p.Permissions.MANAGE_NICKNAMES:
                        return y.default.Messages.MANAGE_NICKNAMES;
                    case p.Permissions.MANAGE_ROLES:
                        return y.default.Messages.MANAGE_ROLES;
                    case p.Permissions.MANAGE_WEBHOOKS:
                        return y.default.Messages.MANAGE_WEBHOOKS;
                    case p.Permissions.CREATE_GUILD_EXPRESSIONS:
                        return y.default.Messages.CREATE_EXPRESSIONS;
                    case p.Permissions.MANAGE_GUILD_EXPRESSIONS:
                        return y.default.Messages.MANAGE_EXPRESSIONS;
                    case p.Permissions.VIEW_AUDIT_LOG:
                        return y.default.Messages.VIEW_AUDIT_LOG;
                    case p.Permissions.VIEW_CHANNEL:
                        return y.default.Messages.READ_MESSAGES;
                    case p.Permissions.SEND_MESSAGES:
                        return y.default.Messages.SEND_MESSAGES;
                    case p.Permissions.SEND_TTS_MESSAGES:
                        return y.default.Messages.SEND_TTS_MESSAGES;
                    case p.Permissions.USE_APPLICATION_COMMANDS:
                        return y.default.Messages.USE_APPLICATION_COMMANDS;
                    case p.Permissions.MANAGE_MESSAGES:
                        return y.default.Messages.MANAGE_MESSAGES;
                    case p.Permissions.EMBED_LINKS:
                        return y.default.Messages.EMBED_LINKS;
                    case p.Permissions.ATTACH_FILES:
                        return y.default.Messages.ATTACH_FILES;
                    case p.Permissions.READ_MESSAGE_HISTORY:
                        return y.default.Messages.READ_MESSAGE_HISTORY;
                    case p.Permissions.MENTION_EVERYONE:
                        return y.default.Messages.MENTION_EVERYONE;
                    case p.Permissions.USE_EXTERNAL_EMOJIS:
                        return y.default.Messages.USE_EXTERNAL_EMOJIS;
                    case p.Permissions.USE_EXTERNAL_STICKERS:
                        return y.default.Messages.USE_EXTERNAL_STICKERS;
                    case p.Permissions.ADD_REACTIONS:
                        return y.default.Messages.ADD_REACTIONS;
                    case p.Permissions.CONNECT:
                        return y.default.Messages.CONNECT;
                    case p.Permissions.SPEAK:
                        return y.default.Messages.SPEAK;
                    case p.Permissions.MUTE_MEMBERS:
                        return y.default.Messages.MUTE_MEMBERS;
                    case p.Permissions.DEAFEN_MEMBERS:
                        return y.default.Messages.DEAFEN_MEMBERS;
                    case p.Permissions.MOVE_MEMBERS:
                        return y.default.Messages.MOVE_MEMBERS;
                    case p.Permissions.USE_VAD:
                        return y.default.Messages.USE_VAD;
                    case p.Permissions.PRIORITY_SPEAKER:
                        return y.default.Messages.PRIORITY_SPEAKER;
                    case p.Permissions.STREAM:
                        return y.default.Messages.VIDEO;
                    case p.Permissions.REQUEST_TO_SPEAK:
                        return y.default.Messages.REQUEST_TO_SPEAK;
                    case p.Permissions.CREATE_EVENTS:
                        return y.default.Messages.CREATE_EVENTS;
                    case p.Permissions.MANAGE_EVENTS:
                        return y.default.Messages.MANAGE_EVENTS;
                    case p.Permissions.CREATE_PUBLIC_THREADS:
                        return y.default.Messages.CREATE_PUBLIC_THREADS;
                    case p.Permissions.CREATE_PRIVATE_THREADS:
                        return y.default.Messages.CREATE_PRIVATE_THREADS;
                    case p.Permissions.SEND_MESSAGES_IN_THREADS:
                        return y.default.Messages.SEND_MESSAGES_IN_THREADS;
                    case p.Permissions.MANAGE_THREADS:
                        return y.default.Messages.MANAGE_THREADS;
                    case p.Permissions.MODERATE_MEMBERS:
                        return y.default.Messages.MODERATE_MEMBER;
                    case p.Permissions.USE_CLYDE_AI:
                        return y.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI;
                    case p.Permissions.SET_VOICE_CHANNEL_STATUS:
                        return y.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
                }
                return null
            }

            function e_(e, t) {
                let s = [];
                return e.forEach(e => {
                    let a = function(e, t) {
                            switch (e.targetType) {
                                case p.AuditLogTargetTypes.GUILD:
                                case p.AuditLogTargetTypes.GUILD_HOME:
                                    return t;
                                case p.AuditLogTargetTypes.CHANNEL:
                                case p.AuditLogTargetTypes.CHANNEL_OVERWRITE:
                                    return eN(e, p.AuditLogChangeKeys.NAME, e => m.default.getChannel(e), e => (0, E.computeChannelName)(e, h.default, O.default, !0));
                                case p.AuditLogTargetTypes.USER:
                                    return eN(e, p.AuditLogChangeKeys.NICK, e => h.default.getUser(e), e => e);
                                case p.AuditLogTargetTypes.ROLE:
                                    return eN(e, p.AuditLogChangeKeys.NAME, e => t.getRole(e), e => e.name);
                                case p.AuditLogTargetTypes.ONBOARDING_PROMPT:
                                    let s = eN(e, p.AuditLogChangeKeys.ID, e => S.default.getOnboardingPrompt(e), e => e.title);
                                    return null != s ? s : y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE;
                                case p.AuditLogTargetTypes.GUILD_ONBOARDING:
                                    return t;
                                case p.AuditLogTargetTypes.INVITE:
                                    return eN(e, p.AuditLogChangeKeys.CODE, p.NOOP_NULL);
                                case p.AuditLogTargetTypes.INTEGRATION:
                                    return eN(e, p.AuditLogChangeKeys.TYPE, e => g.default.integrations.find(t => t.id === e), e => e.name);
                                case p.AuditLogTargetTypes.WEBHOOK:
                                    return eN(e, p.AuditLogChangeKeys.NAME, e => g.default.webhooks.find(t => t.id === e), e => e.name);
                                case p.AuditLogTargetTypes.EMOJI:
                                    return eN(e, p.AuditLogChangeKeys.NAME, e => T.default.getGuildEmoji(t.id).find(t => t.id === e), e => e.name);
                                case p.AuditLogTargetTypes.STICKER:
                                    return eN(e, p.AuditLogChangeKeys.NAME, e => A.default.getStickerById(e), e => e.name);
                                case p.AuditLogTargetTypes.STAGE_INSTANCE:
                                    return eN(e, p.AuditLogChangeKeys.TOPIC, e => {
                                        var s;
                                        return null === (s = Object.values(f.default.getStageInstancesByGuild(t.id))) || void 0 === s ? void 0 : s.find(t => t.id === e)
                                    }, e => e.topic);
                                case p.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
                                case p.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION:
                                    return eN(e, p.AuditLogChangeKeys.NAME, e => g.default.guildScheduledEvents.find(t => t.id === e), e => e.name);
                                case p.AuditLogTargetTypes.THREAD:
                                    return eN(e, p.AuditLogChangeKeys.NAME, e => g.default.threads.find(t => t.id === e), e => e.name);
                                case p.AuditLogTargetTypes.APPLICATION_COMMAND:
                                    if (e.targetId === e.options.application_id) {
                                        let t = g.default.integrations.find(t => t.application_id === e.targetId);
                                        if (null != t) return t.name;
                                        return e.targetId
                                    }
                                    return eN(e, p.AuditLogChangeKeys.NAME, e => g.default.applicationCommands.find(t => t.id === e), e => {
                                        let t = null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
                                        return e.type === c.ApplicationCommandType.CHAT ? "/⁠".concat(t) : t
                                    });
                                case p.AuditLogTargetTypes.AUTO_MODERATION_RULE:
                                    return eN(e, p.AuditLogChangeKeys.NAME, e => g.default.automodRules.find(t => t.id === e), e => e.name);
                                case p.AuditLogTargetTypes.GUILD_SOUNDBOARD:
                                    return eN(e, p.AuditLogChangeKeys.NAME, p.NOOP_NULL);
                                case p.AuditLogTargetTypes.HOME_SETTINGS:
                                    return eN(e, p.AuditLogChangeKeys.GUILD_ID, e => N.default.getSettings(e), () => y.default.Messages.SERVER_GUIDE, t.id);
                                case p.AuditLogTargetTypes.VOICE_CHANNEL_STATUS:
                                    return eN(e, p.AuditLogChangeKeys.STATUS, e => m.default.getChannel(e), e => (0, E.computeChannelName)(e, h.default, O.default, !0));
                                case p.AuditLogTargetTypes.CLYDE_AI:
                                    return eN(e, p.AuditLogChangeKeys.NAME, e => C.default.getMember(t.id, v.CLYDE_AI_USER_ID), e => y.default.Messages.CLYDE_NAME);
                                default:
                                    return b.warn("Unknown targetType for log", e), null
                            }
                        }(e, t),
                        l = h.default.getUser(e.userId);
                    if (null != a || [p.AuditLogActions.MEMBER_PRUNE, p.AuditLogActions.MEMBER_DISCONNECT, p.AuditLogActions.MEMBER_MOVE, p.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED, p.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
                        if (null != (e = (e = (e = e.set("user", l)).set("target", a)).set("options", function(e) {
                                if (null != e.options) {
                                    let s = {
                                        ...e.options
                                    };
                                    switch (e.options.type) {
                                        case p.AuditLogSubtargetTypes.USER:
                                            s.subtarget = eg(e.options.id, e => h.default.getUser(e), e => e.tag);
                                            break;
                                        case p.AuditLogSubtargetTypes.ROLE:
                                            s.subtarget = eg(e.options.role_name, p.NOOP_NULL)
                                    }
                                    if (null != e.options.channel_id && (s.channel = eN(e, "", e => m.default.getChannel(e), e => e, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (s.count = e.options.members_removed), null != e.options.event_exception_id) {
                                        var t;
                                        let a = g.default.guildScheduledEvents.find(t => t.id === e.targetId),
                                            n = null == a ? void 0 : a.guild_scheduled_event_exceptions.find(t => t.event_exception_id === e.options.event_exception_id);
                                        s.subtarget = (0, R.dateFormat)(i(x.default.extractTimestamp(null !== (t = null == n ? void 0 : n.event_exception_id) && void 0 !== t ? t : "0")), "LL")
                                    }
                                    return s
                                }
                                return e.options
                            }(e))).changes) {
                            let s = [];
                            e.changes.forEach(a => {
                                let l = function(e, t, s) {
                                    if (t.action === p.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                        let t = e.newValue || e.oldValue;
                                        switch (t.type) {
                                            case p.ApplicationCommandPermissionTypes.ROLE:
                                                e.subtarget = eg(t.id, e => s.getRole(e), e => e.name);
                                                break;
                                            case p.ApplicationCommandPermissionTypes.USER:
                                                e.subtarget = eg(t.id, e => h.default.getUser(e), e => e.tag);
                                                break;
                                            case p.ApplicationCommandPermissionTypes.CHANNEL:
                                                t.id === n(s.id).subtract(1).toString() ? e.subtarget = y.default.Messages.ALL_CHANNELS : e.subtarget = eg(t.id, e => m.default.getChannel(e), e => (0, E.computeChannelName)(e, h.default, O.default, !0))
                                        }
                                        return e
                                    }
                                    switch (e.key) {
                                        case p.AuditLogChangeKeys.OWNER_ID:
                                            return eS(e, e => h.default.getUser(e));
                                        case p.AuditLogChangeKeys.CHANNEL_ID:
                                        case p.AuditLogChangeKeys.AFK_CHANNEL_ID:
                                        case p.AuditLogChangeKeys.SYSTEM_CHANNEL_ID:
                                        case p.AuditLogChangeKeys.RULES_CHANNEL_ID:
                                        case p.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID:
                                            return eS(e, e => m.default.getChannel(e), e => (0, E.computeChannelName)(e, h.default, O.default, !0));
                                        case p.AuditLogChangeKeys.AFK_TIMEOUT:
                                            return eS(e, e => e / 60);
                                        case p.AuditLogChangeKeys.BITRATE:
                                            return eS(e, e => e / 1e3);
                                        case p.AuditLogChangeKeys.COLOR:
                                            return eS(e, e => (0, u.int2hex)(e).toUpperCase());
                                        case p.AuditLogChangeKeys.THEME_COLORS:
                                            return eS(e, e => "".concat((0, u.int2hex)(e[0]).toUpperCase(), ", ").concat((0, u.int2hex)(e[1]).toUpperCase()));
                                        case p.AuditLogChangeKeys.MAX_AGE:
                                            return eS(e, e => {
                                                let t = G.default.getMaxAgeOptions.find(t => {
                                                    let {
                                                        value: s
                                                    } = t;
                                                    return e === s
                                                });
                                                return t ? t.label : e
                                            });
                                        case p.AuditLogChangeKeys.PERMISSIONS: {
                                            let t = [],
                                                {
                                                    added: s,
                                                    removed: a
                                                } = eT(e.oldValue, e.newValue);
                                            if (s.length > 0) {
                                                let e = new L.AuditLogChange(p.AuditLogChangeKeys.PERMISSIONS_GRANTED, null, s);
                                                t.push(e)
                                            }
                                            if (a.length > 0) {
                                                let e = new L.AuditLogChange(p.AuditLogChangeKeys.PERMISSIONS_DENIED, null, a);
                                                t.push(e)
                                            }
                                            return t
                                        }
                                        case p.AuditLogChangeKeys.PERMISSIONS_GRANTED:
                                        case p.AuditLogChangeKeys.PERMISSIONS_DENIED: {
                                            let t = [],
                                                {
                                                    added: s,
                                                    removed: a
                                                } = eT(e.oldValue, e.newValue);
                                            if (s.length > 0) {
                                                let a = new L.AuditLogChange(e.key, null, s);
                                                t.push(a)
                                            }
                                            if (a.length > 0) {
                                                let e = new L.AuditLogChange(p.AuditLogChangeKeys.PERMISSIONS_RESET, a, a);
                                                t.push(e)
                                            }
                                            return t
                                        }
                                        case p.AuditLogChangeKeys.FLAGS: {
                                            let t = [],
                                                {
                                                    added: s,
                                                    removed: a
                                                } = function(e, t) {
                                                    let s = "number" == typeof e ? e : 0,
                                                        a = "number" == typeof t ? t : 0,
                                                        n = D.removeFlag(a, s),
                                                        l = D.removeFlag(s, a),
                                                        i = [],
                                                        r = [];
                                                    for (let e in U.ChannelFlags) {
                                                        let t = U.ChannelFlags[e];
                                                        D.hasFlag(n, t) && i.push(t), D.hasFlag(l, t) && r.push(t)
                                                    }
                                                    return {
                                                        added: i,
                                                        removed: r
                                                    }
                                                }(e.oldValue, e.newValue);
                                            if (s.length > 0) {
                                                let a = new L.AuditLogChange(e.key, null, s);
                                                t.push(a)
                                            }
                                            if (a.length > 0) {
                                                let s = new L.AuditLogChange(e.key, a, null);
                                                t.push(s)
                                            }
                                            return t
                                        }
                                        case p.AuditLogChangeKeys.PREFERRED_LOCALE:
                                            return eS(e, e => {
                                                let t = y.default.getAvailableLocales().find(t => t.value === e);
                                                return null != t ? t.name : null
                                            });
                                        case p.AuditLogChangeKeys.VIDEO_QUALITY_MODE:
                                            return eS(e, e => e === p.VideoQualityMode.FULL ? y.default.Messages.VIDEO_QUALITY_MODE_FULL : y.default.Messages.VIDEO_QUALITY_MODE_AUTO);
                                        case p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAGS:
                                            return function(e) {
                                                let t = {
                                                        [p.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATIONS]: p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                                        [p.SystemChannelFlags.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                                        [p.SystemChannelFlags.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                                        [p.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                                                    },
                                                    s = [];
                                                return Object.values(p.SystemChannelFlags).forEach(a => {
                                                    let n = (e.oldValue & a) === a,
                                                        l = (e.newValue & a) === a;
                                                    if (n === l) return;
                                                    let i = new L.AuditLogChange(t[a], !n, !l);
                                                    s.push(i)
                                                }), s
                                            }(e);
                                        case p.AuditLogChangeKeys.AUTO_MODERATION_ACTIONS:
                                            if (t.targetType === p.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eS(e, e => e.map(e => e.type), e => e.map(I.actionTypeToName).join(","));
                                            break;
                                        case p.AuditLogChangeKeys.AUTO_MODERATION_EVENT_TYPE:
                                            if (t.targetType === p.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eS(e, I.eventTypeToName);
                                            break;
                                        case p.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_TYPE:
                                            if (t.targetType === p.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eS(e, I.triggerTypeToName);
                                            break;
                                        case p.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_METADATA:
                                            if (t.targetType === p.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eS(e, e => {
                                                if (null != e && "object" == typeof e) return null != e.keyword_filter && Array.isArray(e.keyword_filter) ? y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_METADATA_KEYWORDS_UPDATE.plainFormat({
                                                    newValue: e.keyword_filter.map(e => "'".concat(e, "'")).join(", ")
                                                }) : JSON.stringify(e);
                                                return e
                                            });
                                            break;
                                        case p.AuditLogChangeKeys.AUTO_MODERATION_ADD_KEYWORDS:
                                        case p.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_KEYWORDS:
                                        case p.AuditLogChangeKeys.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                        case p.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                        case p.AuditLogChangeKeys.AUTO_MODERATION_ADD_ALLOW_LIST:
                                        case p.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                            if (t.targetType === p.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eS(e, e => null != e && Array.isArray(e) ? e.map(e => "'".concat(e, "'")).join(", ") : JSON.stringify(e));
                                            break;
                                        case p.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_CHANNELS:
                                            if (t.targetType === p.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eS(e, e => e.map(m.default.getChannel).filter(e => null != e).map(e => (0, E.computeChannelName)(e, h.default, O.default, !0)), e => null != e && e.length > 0 ? e.join(", ") : y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NONE);
                                            break;
                                        case p.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_ROLES:
                                            if (t.targetType === p.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eS(e, e => e.map(e => s.getRole(e)).filter(e => null != e).map(e => e.name), e => null != e && e.length > 0 ? e.join(", ") : y.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NONE);
                                            break;
                                        case p.AuditLogChangeKeys.AVAILABLE_TAGS:
                                            return function(e) {
                                                let {
                                                    oldValue: t,
                                                    newValue: s
                                                } = e, a = Array.isArray(t) ? t : [], n = Array.isArray(s) ? s : [];
                                                if (0 === a.length && 0 === n.length) return e;
                                                let l = {},
                                                    i = {};
                                                if (a.forEach(e => {
                                                        l[e.id] = e
                                                    }), n.forEach(e => {
                                                        i[e.id] = e
                                                    }), a.length < n.length) {
                                                    for (let e in i)
                                                        if (null == l[e]) return new L.AuditLogChange(p.AuditLogChangeKeys.AVAILABLE_TAG_ADD, null, eI(i[e]))
                                                }
                                                if (a.length > n.length) {
                                                    for (let e in l)
                                                        if (null == i[e]) return new L.AuditLogChange(p.AuditLogChangeKeys.AVAILABLE_TAG_DELETE, null, eI(l[e]))
                                                }
                                                for (let e in l) {
                                                    let t = l[e],
                                                        s = i[e];
                                                    if ((null == s ? void 0 : s.name) !== t.name || (null == s ? void 0 : s.emoji_id) !== t.emoji_id || (null == s ? void 0 : s.emoji_name) !== t.emoji_name) return new L.AuditLogChange(p.AuditLogChangeKeys.AVAILABLE_TAG_EDIT, eI(t), eI(s))
                                                }
                                                return e
                                            }(e);
                                        case p.AuditLogChangeKeys.SCHEDULED_START_TIME:
                                        case p.AuditLogChangeKeys.SCHEDULED_END_TIME:
                                            return eS(e, e => (0, R.dateFormat)(i(new Date(e)), "LLLL"))
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

            function eT(e, t) {
                let s = d.default.deserialize("string" == typeof e ? e : 0),
                    a = d.default.deserialize("string" == typeof t ? t : 0),
                    n = d.default.remove(a, s),
                    l = d.default.remove(s, a),
                    i = [],
                    r = [];
                for (let e in p.Permissions) {
                    let t = p.Permissions[e];
                    d.default.has(n, t) && i.push(t), d.default.has(l, t) && r.push(t)
                }
                return {
                    added: i,
                    removed: r
                }
            }

            function eI(e) {
                return null == e ? null : {
                    id: e.id,
                    name: e.name,
                    emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
                    emojiName: e.emoji_name,
                    moderated: e.moderated
                }
            }

            function eS(e, t, s) {
                let a = e.newValue,
                    n = e.oldValue;
                return null != e.newValue && (a = t(e.newValue), null != s && null != a && (a = s(a))), null != e.oldValue && (n = t(e.oldValue), null != s && null != n && (n = s(n))), new L.AuditLogChange(e.key, n || e.oldValue, a || e.newValue)
            }

            function eN(e, t, s, a, n) {
                let l = null;
                n = null != n ? n : e.targetId;
                let i = s(n);
                if (null != i && null != a && (l = a(i)), null == l) {
                    let t = g.default.deletedTargets[e.targetType];
                    null != t && null != t[n] && (l = t[n])
                }
                if (null == l && null != e.changes) {
                    let s = e.changes.find(e => e.key === t);
                    null != s && (l = s.newValue || s.oldValue)
                }
                return null != l ? l : n
            }

            function eg(e, t, s) {
                let a = e,
                    n = t(e);
                return null != n && null != s && (a = s(n)), a
            }

            function ef(e, t) {
                return s => null == s.oldValue ? e : t
            }

            function eA(e, t) {
                return s => null == s.newValue ? e : t
            }

            function eL(e, t, s, a) {
                return n => {
                    if (null != n.newValue && null != n.oldValue) return e;
                    if (null != n.newValue) return t;
                    if (null != n.oldValue) return s;
                    return a
                }
            }
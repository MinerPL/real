            "use strict";
            n.r(t), n.d(t, {
                UseLegacyChatInput: function() {
                    return _
                },
                UseRichChatInput: function() {
                    return f
                },
                ExpressionSuggestionsEnabled: function() {
                    return E
                },
                IncludeStickersInAutocomplete: function() {
                    return S
                },
                RenderSpoilers: function() {
                    return g
                },
                UseThreadSidebar: function() {
                    return h
                },
                EmojiPickerCollapsedSections: function() {
                    return p
                },
                StickerPickerCollapsedSections: function() {
                    return I
                },
                SoundboardPickerCollapsedSections: function() {
                    return T
                },
                ViewImageDescriptions: function() {
                    return v
                },
                ShowCommandSuggestions: function() {
                    return A
                },
                AlwaysPreviewVideo: function() {
                    return N
                },
                NotifyFriendsOnGoLive: function() {
                    return C
                },
                NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET: function() {
                    return R
                },
                NotificationCenterAckedBeforeId: function() {
                    return O
                },
                InstallShortcutDesktop: function() {
                    return L
                },
                InstallShortcutStartMenu: function() {
                    return D
                },
                AllowActivityPartyPrivacyFriends: function() {
                    return y
                },
                AllowActivityPartyPrivacyVoiceChannel: function() {
                    return P
                },
                MessageRequestRestrictedGuildIds: function() {
                    return U
                },
                MessageRequestRestrictedDefault: function() {
                    return w
                },
                NonSpamRetrainingOptIn: function() {
                    return b
                },
                DefaultGuildsRestricted: function() {
                    return G
                },
                RestrictedGuildIds: function() {
                    return F
                },
                FriendSourceFlagsSetting: function() {
                    return k
                },
                RtcPanelShowVoiceStates: function() {
                    return B
                },
                ConvertEmoticons: function() {
                    return x
                },
                MessageDisplayCompact: function() {
                    return H
                },
                SoundboardSettings: function() {
                    return V
                },
                DropsOptedOut: function() {
                    return W
                },
                NativePhoneIntegrationEnabled: function() {
                    return Y
                },
                AfkTimeout: function() {
                    return z
                },
                ViewNsfwGuilds: function() {
                    return j
                },
                ViewNsfwCommands: function() {
                    return K
                },
                DisableGamesTab: function() {
                    return Z
                },
                EnableTTSCommand: function() {
                    return X
                },
                ExplicitContentFilter: function() {
                    return q
                },
                DmSpamFilterV2: function() {
                    return J
                },
                ShowCurrentGame: function() {
                    return Q
                },
                StatusSetting: function() {
                    return ee
                },
                CustomStatusSetting: function() {
                    return et
                },
                BroadcastAllowFriends: function() {
                    return ei
                },
                BroadcastAllowedGuildIds: function() {
                    return er
                },
                BroadcastAllowedUserIds: function() {
                    return eo
                },
                BroadcastAutoBroadcast: function() {
                    return es
                },
                ClipsAllowVoiceRecording: function() {
                    return el
                },
                InlineAttachmentMedia: function() {
                    return ea
                },
                InlineEmbedMedia: function() {
                    return eu
                },
                RenderEmbeds: function() {
                    return ec
                },
                RenderReactions: function() {
                    return ed
                },
                TimezoneOffset: function() {
                    return e_
                },
                DeveloperMode: function() {
                    return eS
                },
                ClientThemeSettings: function() {
                    return eg
                },
                GifAutoPlay: function() {
                    return eh
                },
                AnimateEmoji: function() {
                    return em
                },
                AnimateStickers: function() {
                    return ep
                },
                ActivityRestrictedGuilds: function() {
                    return eT
                },
                ActivityJoiningRestrictedGuilds: function() {
                    return eA
                },
                DefaultGuildsActivityRestricted: function() {
                    return eN
                },
                DisableHomeAutoNav: function() {
                    return eC
                },
                FamilyCenterEnabled: function() {
                    return eR
                },
                LegacyUsernameDisabled: function() {
                    return eO
                },
                ExplicitContentSettings: function() {
                    return eL
                }
            }), n("222007");
            var i = n("446674"),
                r = n("151426"),
                o = n("750028"),
                s = n("357626"),
                l = n("281473"),
                a = n("186709"),
                u = n("568456"),
                c = n("49111"),
                d = n("560241");
            let _ = (0, l.defineProtoSetting)("textAndImages", "useLegacyChatInput", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                f = (0, l.defineProtoSetting)("textAndImages", "useRichChatInput", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })),
                E = (0, l.defineProtoSetting)("textAndImages", "expressionSuggestionsEnabled", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })),
                S = (0, l.defineProtoSetting)("textAndImages", "includeStickersInAutocomplete", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                g = (0, l.defineProtoSetting)("textAndImages", "renderSpoilers", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : c.SpoilerRenderSetting.ON_CLICK
                }, e => o.StringValue.create({
                    value: e
                })),
                h = (0, l.defineProtoSetting)("textAndImages", "useThreadSidebar", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                }));
            (0, l.defineProtoSetting)("notifications", "showInAppNotifications", e => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
            }, e => o.BoolValue.create({
                value: e
            }));
            let m = [],
                p = (0, l.defineProtoSetting)("textAndImages", "emojiPickerCollapsedSections", e => null != e ? e : m, e => e),
                I = (0, l.defineProtoSetting)("textAndImages", "stickerPickerCollapsedSections", e => null != e ? e : m, e => e),
                T = (0, l.defineProtoSetting)("textAndImages", "soundboardPickerCollapsedSections", e => null != e ? e : m, e => e),
                v = (0, l.defineProtoSetting)("textAndImages", "viewImageDescriptions", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                A = (0, l.defineProtoSetting)("textAndImages", "showCommandSuggestions", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })),
                N = (0, l.defineProtoSetting)("voiceAndVideo", "alwaysPreviewVideo", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                C = (0, l.defineProtoSetting)("notifications", "notifyFriendsOnGoLive", e => null == e ? void 0 : e.value, e => o.BoolValue.create({
                    value: e
                })),
                R = "0",
                O = (0, l.defineProtoSetting)("notifications", "notificationCenterAckedBeforeId", e => null != e ? e : R, e => e);
            (0, l.defineProtoSetting)("notifications", "enableBurstReactionNotifications", e => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
            }, e => o.BoolValue.create({
                value: e
            }));
            let L = (0, l.defineProtoSetting)("gameLibrary", "installShortcutDesktop", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                D = (0, l.defineProtoSetting)("gameLibrary", "installShortcutStartMenu", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })),
                y = (0, l.defineProtoSetting)("privacy", "allowActivityPartyPrivacyFriends", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })),
                P = (0, l.defineProtoSetting)("privacy", "allowActivityPartyPrivacyVoiceChannel", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })),
                M = [],
                U = (0, l.defineProtoSetting)("privacy", "messageRequestRestrictedGuildIds", e => null != e ? e : M, e => e),
                w = (0, l.defineProtoSetting)("privacy", "defaultMessageRequestRestricted", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                b = (0, l.defineProtoSetting)("privacy", "nonSpamRetrainingOptIn", e => null == e ? void 0 : e.value, e => null == e ? void 0 : o.BoolValue.create({
                    value: e
                }));
            (0, l.defineProtoSetting)("privacy", "contactSyncEnabled", e => {
                var t;
                return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
            }, e => o.BoolValue.create({
                value: e
            }));
            let G = (0, l.defineProtoSetting)("privacy", "defaultGuildsRestricted", e => null != e && e, e => e),
                F = (0, l.defineProtoSetting)("privacy", "restrictedGuildIds", e => null != e ? e : [], e => e);
            (0, l.defineProtoSetting)("privacy", "friendDiscoveryFlags", e => {
                var t;
                return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 0
            }, e => o.UInt32Value.create({
                value: e
            }));
            let k = (0, l.defineProtoSetting)("privacy", "friendSourceFlags", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : c.AllFriendSourceFlags
                }, e => o.UInt32Value.create({
                    value: e
                })),
                B = (0, l.defineProtoSetting)("debug", "rtcPanelShowVoiceStates", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                x = (0, l.defineProtoSetting)("textAndImages", "convertEmoticons", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })),
                H = (0, l.defineProtoSetting)("textAndImages", "messageDisplayCompact", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                V = (0, l.defineProtoSetting)("voiceAndVideo", "soundboardSettings", e => e, e => e);
            (0, l.defineProtoSetting)("voiceAndVideo", "streamNotificationsEnabled", e => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
            }, e => o.BoolValue.create({
                value: e
            }));
            let W = (0, l.defineProtoSetting)("privacy", "dropsOptedOut", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                Y = (0, l.defineProtoSetting)("voiceAndVideo", "nativePhoneIntegrationEnabled", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })),
                z = (0, l.defineProtoSetting)("voiceAndVideo", "afkTimeout", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 600
                }, e => o.UInt32Value.create({
                    value: e
                })),
                j = (0, l.defineProtoSetting)("textAndImages", "viewNsfwGuilds", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                K = (0, l.defineProtoSetting)("textAndImages", "viewNsfwCommands", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                }));
            (0, l.defineProtoSetting)("privacy", "detectPlatformAccounts", e => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
            }, e => o.BoolValue.create({
                value: e
            }));
            let Z = (0, l.defineProtoSetting)("gameLibrary", "disableGamesTab", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                X = (0, l.defineProtoSetting)("textAndImages", "enableTtsCommand", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })),
                q = (0, l.defineProtoSetting)("textAndImages", "explicitContentFilter", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : u.ExplicitContentFilterTypes.NON_FRIENDS
                }, e => o.UInt32Value.create({
                    value: e
                }));
            (0, l.defineProtoSetting)("textAndImages", "dmSpamFilter", e => {
                var t;
                return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : u.DmSpamFilterTypes.NON_FRIENDS
            }, e => o.UInt32Value.create({
                value: e
            }));
            let J = (0, l.defineProtoSetting)("textAndImages", "dmSpamFilterV2", e => null != e ? e : r.DmSpamFilterV2.DEFAULT_UNSET, e => e),
                Q = (0, l.defineProtoSetting)("status", "showCurrentGame", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })),
                $ = new Set(Object.values(c.StatusTypes)),
                ee = (0, l.defineProtoSetting)("status", "status", e => null != e && $.has(e.value) ? e.value : c.StatusTypes.UNKNOWN, e => o.StringValue.create({
                    value: e
                })),
                et = (0, l.defineProtoSetting)("status", "customStatus", e => e, e => e),
                en = [],
                ei = (0, l.defineProtoSetting)("broadcast", "allowFriends", e => null == e ? void 0 : e.value, e => o.BoolValue.create({
                    value: e
                })),
                er = (0, l.defineProtoSetting)("broadcast", "allowedGuildIds", e => null != e ? e : en, e => e),
                eo = (0, l.defineProtoSetting)("broadcast", "allowedUserIds", e => null != e ? e : en, e => e),
                es = (0, l.defineProtoSetting)("broadcast", "autoBroadcast", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                el = (0, l.defineProtoSetting)("clips", "allowVoiceRecording", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })),
                ea = (0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "inlineAttachmentMedia", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })), "text", "inlineAttachmentMedia"),
                eu = (0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "inlineEmbedMedia", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })), "text", "inlineEmbedMedia"),
                ec = (0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "renderEmbeds", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })), "text", "renderEmbeds"),
                ed = (0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "renderReactions", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })), "text", "renderReactions"),
                e_ = (0, l.defineProtoSetting)("localization", "timezoneOffset", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : null
                }, e => o.Int32Value.create({
                    value: null != e ? e : 0
                }));
            (0, l.defineProtoSetting)("appearance", "mobileRedesignDisabled", e => null != e && e, e => e);
            let ef = new Set([s.ChannelListLayoutTypes.COZY, s.ChannelListLayoutTypes.COMPACT]);
            (0, l.defineProtoSetting)("appearance", "channelListLayout", e => null != e && ef.has(e.value) ? e.value : s.ChannelListLayoutTypes.COZY, e => o.StringValue.create({
                value: e
            }));
            let eE = new Set([s.MessagePreviewTypes.ALL, s.MessagePreviewTypes.UNREADS, s.MessagePreviewTypes.NONE]);
            (0, l.defineProtoSetting)("appearance", "messagePreviews", e => null != e && eE.has(e.value) ? e.value : s.MessagePreviewTypes.ALL, e => o.StringValue.create({
                value: e
            }));
            let eS = (0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("appearance", "developerMode", e => null != e && e, e => e), "appearance", "developerMode"),
                eg = (0, l.defineProtoSetting)("appearance", "clientThemeSettings", e => {
                    var t;
                    return {
                        backgroundGradientPresetId: null == e ? void 0 : null === (t = e.backgroundGradientPresetId) || void 0 === t ? void 0 : t.value
                    }
                }, e => ({
                    backgroundGradientPresetId: null != e.backgroundGradientPresetId ? o.UInt32Value.create({
                        value: e.backgroundGradientPresetId
                    }) : void 0
                })),
                eh = (0, l.wrapSettingWithOverride)((0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "gifAutoPlay", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })), "text", "gifAutoPlay"), "gifAutoPlay", () => {
                    var e;
                    return null === (e = a.default.getOverride("gifAutoPlay")) || void 0 === e ? void 0 : e.value
                }, () => (0, i.useStateFromStores)([a.default], () => {
                    var e;
                    return null === (e = a.default.getOverride("gifAutoPlay")) || void 0 === e ? void 0 : e.value
                })),
                em = (0, l.wrapSettingWithOverride)((0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "animateEmoji", e => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t
                }, e => o.BoolValue.create({
                    value: e
                })), "text", "animateEmoji"), "animateEmoji", () => {
                    var e;
                    return null === (e = a.default.getOverride("animateEmoji")) || void 0 === e ? void 0 : e.value
                }, () => (0, i.useStateFromStores)([a.default], () => {
                    var e;
                    return null === (e = a.default.getOverride("animateEmoji")) || void 0 === e ? void 0 : e.value
                })),
                ep = (0, l.wrapSettingWithOverride)((0, l.wrapSettingWithSelectiveSyncing)((0, l.defineProtoSetting)("textAndImages", "animateStickers", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : d.StickerAnimationSettings.ALWAYS_ANIMATE
                }, e => o.UInt32Value.create({
                    value: e
                })), "text", "animateStickers"), "animateStickers", () => {
                    var e;
                    return null === (e = a.default.getOverride("animateStickers")) || void 0 === e ? void 0 : e.value
                }, () => (0, i.useStateFromStores)([a.default], () => {
                    var e;
                    return null === (e = a.default.getOverride("animateStickers")) || void 0 === e ? void 0 : e.value
                })),
                eI = [],
                eT = (0, l.defineProtoSetting)("privacy", "activityRestrictedGuildIds", e => null != e ? e : eI, e => e),
                ev = [],
                eA = (0, l.defineProtoSetting)("privacy", "activityJoiningRestrictedGuildIds", e => null != e ? e : ev, e => e),
                eN = (0, l.defineProtoSetting)("privacy", "defaultGuildsActivityRestricted", e => e === r.GuildActivityStatusRestrictionDefault.ON_FOR_LARGE_GUILDS, e => !0 === e ? r.GuildActivityStatusRestrictionDefault.ON_FOR_LARGE_GUILDS : r.GuildActivityStatusRestrictionDefault.OFF),
                eC = (0, l.defineProtoSetting)("communities", "disableHomeAutoNav", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                eR = (0, l.defineProtoSetting)("privacy", "familyCenterEnabledV2", e => null == e ? void 0 : e.value, e => o.BoolValue.create({
                    value: e
                })),
                eO = (0, l.defineProtoSetting)("privacy", "hideLegacyUsername", e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t
                }, e => o.BoolValue.create({
                    value: e
                })),
                eL = (0, l.defineProtoSetting)("textAndImages", "explicitContentSettings", e => {
                    let {
                        explicitContentGuilds: t,
                        explicitContentFriendDm: n,
                        explicitContentNonFriendDm: i
                    } = null != e ? e : {};
                    return {
                        explicitContentGuilds: null != t ? t : r.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION,
                        explicitContentFriendDm: null != n ? n : r.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION,
                        explicitContentNonFriendDm: null != i ? i : r.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION
                    }
                }, e => {
                    let {
                        explicitContentGuilds: t,
                        explicitContentFriendDm: n,
                        explicitContentNonFriendDm: i
                    } = e;
                    return {
                        explicitContentGuilds: null != t ? t : void 0,
                        explicitContentFriendDm: null != n ? n : void 0,
                        explicitContentNonFriendDm: null != i ? i : void 0
                    }
                })
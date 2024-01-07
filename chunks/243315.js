            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
            var a = n("446674"),
                s = n("151426"),
                i = n("750028"),
                l = n("95410"),
                r = n("139321"),
                o = n("42203"),
                u = n("674268"),
                d = n("116949"),
                c = n("49111"),
                E = n("583374");

            function f(e, t) {
                let n = !1;
                return null == e.userContent && (e.userContent = {
                    dismissedContents: new Uint8Array
                }), null == e.userContent.dismissedContents && (e.userContent.dismissedContents = new Uint8Array), !(0, u.hasBit)(e.userContent.dismissedContents, t) && (e.userContent.dismissedContents = (0, u.addBit)(e.userContent.dismissedContents, t), n = !0), n
            }

            function _(e, t, n) {
                let a = r.HotspotStore.hasHiddenHotspot(t);
                return !!a && f(e, n)
            }
            let h = [{
                version: 2,
                run(e) {
                    var t, n, a;
                    let i;
                    if ((a = i || (i = {})).Mentions = "Recent Mentions", a.Unreads = "Inbox", null != e.inbox) return !1;
                    let r = !1,
                        u = s.InboxSettings.create();
                    e.inbox = u, l.default.get("seenInboxTutorial", !1) && (u.viewedTutorial = !0, r = !0);
                    let c = l.default.get("recentsButtonTab2");
                    null != c && (u.currentTab = "Recent Mentions" === c ? s.InboxTab.MENTIONS : s.InboxTab.UNREADS, r = !0);
                    let E = null !== (t = l.default.get("unread-messages-collapsed-channels")) && void 0 !== t ? t : {};
                    for (let t in E) {
                        if (!E[t]) continue;
                        let a = o.default.getChannel(t);
                        null != a && (r = !0, (0, d.mutateUserChannelSettings)(e, null !== (n = a.guild_id) && void 0 !== n ? n : "0", a.id, e => {
                            e.collapsedInInbox = !0
                        }))
                    }
                    return r
                },
                cleanup() {
                    l.default.remove("seenInboxTutorial"), l.default.remove("recentsButtonTab2"), l.default.remove("unread-messages-collapsed-channels")
                }
            }, {
                version: 3,
                run(e) {
                    let {
                        state: t
                    } = a.default.PersistedStore.migrateAndReadStoreState("EmojiStore", [() => ({
                        diversitySurrogate: l.default.get("EmojiDiversitySurrogate") || ""
                    })]);
                    if (null == t) return !1;
                    let n = !1;
                    return null != t.diversitySurrogate && "" !== t.diversitySurrogate && (null == e.textAndImages && (e.textAndImages = s.TextAndImagesSettings.create()), null == e.textAndImages.diversitySurrogate && (e.textAndImages.diversitySurrogate = i.StringValue.create()), e.textAndImages.diversitySurrogate.value = t.diversitySurrogate, n = !0), n
                },
                cleanup() {}
            }, {
                version: 4,
                run(e) {
                    let t = !1,
                        n = !0 === l.default.get("HAS_SEEN_HUB_UPSELL") || r.HotspotStore.hasHiddenHotspot(r.HotspotLocations.HUB_SECOND_EMAIL_CONNECTION_UPSELL);
                    return n && (t = f(e, s.DismissibleContent.HUB_WAITLIST_UPSELL)), t
                },
                cleanup() {
                    l.default.remove("HAS_SEEN_HUB_UPSELL")
                }
            }, {
                version: 5,
                run(e) {
                    var t, n, a, r, o, u, d;
                    let c = !1;
                    e.textAndImages = null !== (t = e.textAndImages) && void 0 !== t ? t : s.TextAndImagesSettings.create(), e.notifications = null !== (n = e.notifications) && void 0 !== n ? n : s.NotificationSettings.create(), e.privacy = null !== (a = e.privacy) && void 0 !== a ? a : s.PrivacySettings.create(), e.voiceAndVideo = null !== (r = e.voiceAndVideo) && void 0 !== r ? r : s.VoiceAndVideoSettings.create(), e.gameLibrary = null !== (o = e.gameLibrary) && void 0 !== o ? o : s.GameLibrarySettings.create(), e.debug = null !== (u = e.debug) && void 0 !== u ? u : s.DebugSettings.create();
                    let E = null !== (d = l.default.get("UserSettingsStore")) && void 0 !== d ? d : {};
                    return "boolean" == typeof E.useRichChatTextBox && (e.textAndImages.useRichChatInput = i.BoolValue.create({
                        value: E.useRichChatTextBox
                    }), c = !0), "string" == typeof E.renderSpoilers && (e.textAndImages.renderSpoilers = i.StringValue.create({
                        value: E.renderSpoilers
                    }), c = !0), "boolean" == typeof E.useThreadSidebar && (e.textAndImages.useThreadSidebar = i.BoolValue.create({
                        value: E.useThreadSidebar
                    }), c = !0), "boolean" == typeof E.showInAppNotifications && (e.notifications.showInAppNotifications = i.BoolValue.create({
                        value: E.showInAppNotifications
                    }), c = !0), E.emojiPickerCollapsedSections instanceof Array && (e.textAndImages.emojiPickerCollapsedSections = E.emojiPickerCollapsedSections, c = !0), E.stickerPickerCollapsedSections instanceof Array && (e.textAndImages.stickerPickerCollapsedSections = E.stickerPickerCollapsedSections, c = !0), "boolean" == typeof E.viewImageDescriptions && (e.textAndImages.viewImageDescriptions = i.BoolValue.create({
                        value: E.viewImageDescriptions
                    }), c = !0), "boolean" == typeof E.showCommandSuggestions && (e.textAndImages.showCommandSuggestions = i.BoolValue.create({
                        value: E.showCommandSuggestions
                    }), c = !0), "boolean" == typeof E.alwaysPreviewVideo && (e.voiceAndVideo.alwaysPreviewVideo = i.BoolValue.create({
                        value: E.alwaysPreviewVideo
                    }), c = !0), "boolean" == typeof E.notifyFriendsOnGoLive && (e.notifications.notifyFriendsOnGoLive = i.BoolValue.create({
                        value: E.notifyFriendsOnGoLive
                    }), c = !0), "boolean" == typeof E.installShortcutDesktop && (e.gameLibrary.installShortcutDesktop = i.BoolValue.create({
                        value: E.installShortcutDesktop
                    }), c = !0), "boolean" == typeof E.installShortcutStartMenu && (e.gameLibrary.installShortcutStartMenu = i.BoolValue.create({
                        value: E.installShortcutStartMenu
                    }), c = !0), "boolean" == typeof E.allowActivityPartyPrivacyFriends && (e.privacy.allowActivityPartyPrivacyFriends = i.BoolValue.create({
                        value: E.allowActivityPartyPrivacyFriends
                    }), c = !0), "boolean" == typeof E.allowActivityPartyPrivacyVoiceChannel && (e.privacy.allowActivityPartyPrivacyVoiceChannel = i.BoolValue.create({
                        value: E.allowActivityPartyPrivacyVoiceChannel
                    }), c = !0), "boolean" == typeof E.rtcPanelShowVoiceStates && (e.debug.rtcPanelShowVoiceStates = i.BoolValue.create({
                        value: E.rtcPanelShowVoiceStates
                    }), c = !0), c
                },
                cleanup() {}
            }, {
                version: 7,
                run: e => _(e, r.HotspotLocations.APPLICATION_COMMAND_TOOLTIP, s.DismissibleContent.APPLICATION_COMMAND_TOOLTIP),
                cleanup() {}
            }, {
                version: 8,
                run: e => _(e, r.HotspotLocations.CHANNEL_BANNER_MEMBER_LIST_NOTICE, s.DismissibleContent.CHANNELINFO_CHANNELBANNER_NOTICE),
                cleanup() {}
            }, {
                version: 9,
                run: e => (r.HotspotStore.hasHiddenHotspot(r.HotspotLocations.MULTI_ACCOUNT_TOOLTIP) && l.default.set(E.MULTIACCOUNT_TOOLTIP_SEEN_KEY, "true"), _(e, r.HotspotLocations.MULTI_ACCOUNT_TOOLTIP, s.DismissibleContent.ACCOUNT_MULTIACCOUNT_TOOLTIP)),
                cleanup() {}
            }, {
                version: 10,
                run(e) {
                    var t;
                    let n = _(e, r.HotspotLocations.HUB_LINK_CHANNEL_NOTICE, s.DismissibleContent.CHANNEL_NOTICE_HUBLINK),
                        a = null !== (t = l.default.get("channelNotices")) && void 0 !== t ? t : {};
                    return !1 === a[c.ChannelNoticeTypes.INVITE] && f(e, s.DismissibleContent.CHANNEL_NOTICE_INVITE) && (n = !0), !1 === a[c.ChannelNoticeTypes.QUICKSWITCHER] && f(e, s.DismissibleContent.CHANNEL_NOTICE_QUICKSWITCHER) && (n = !0), !1 === a[c.ChannelNoticeTypes.GUILD_BOOSTING] && f(e, s.DismissibleContent.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION) && (n = !0), n
                },
                cleanup() {
                    l.default.remove("channelNotices")
                }
            }, {
                version: 11,
                run(e) {
                    let t = !1;
                    return _(e, r.HotspotLocations.GUILD_EVENT_UPSELL, s.DismissibleContent.GUILD_HEADER_EVENT_UPSELL) && (t = !0), _(e, r.HotspotLocations.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP, s.DismissibleContent.GUILD_HEADER_PREMIUM_GUILD_PROGRESS) && (t = !0), _(e, r.HotspotLocations.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP, s.DismissibleContent.GUILD_HEADER_ANIMATED_GUILD_BANNER) && (t = !0), t
                },
                cleanup() {}
            }, {
                version: 12,
                run(e) {
                    let t = !1;
                    return l.default.get("hideNag") && f(e, s.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD) && (t = !0), l.default.get("hideConnectSpotify") && f(e, s.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY) && (t = !0), l.default.get("hideConnectPlayStation") && f(e, s.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION) && (t = !0), l.default.get("hideMFASMSNotice") && f(e, s.DismissibleContent.NAGBAR_NOTICE_MFA_SMS_BACKUP) && (t = !0), t
                },
                cleanup() {
                    l.default.remove("hideNag"), l.default.remove("hideConnectSpotify"), l.default.remove("hideConnectPlayStation"), l.default.remove("hideMFASMSNotice")
                }
            }, {
                version: 13,
                run(e) {
                    let t = !1;
                    return l.default.get("hidePremiumPromo") && f(e, s.DismissibleContent.NAGBAR_NOTICE_PREMIUM_PROMO) && (t = !0), l.default.get("hidePremiumTier2TrialEnding") && f(e, s.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (t = !0), l.default.get("hidePremiumReactivateNotice") && f(e, s.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE) && (t = !0), _(e, r.HotspotLocations.INVITE_SPLASH_GUILD_HEADER_TOOLTIP, s.DismissibleContent.GUILD_HEADER_INVITE_SPLASH) && (t = !0), t
                },
                cleanup() {
                    l.default.remove("hidePremiumPromo"), l.default.remove("hidePremiumTier2TrialEnding"), l.default.remove("hidePremiumReactivateNotice")
                }
            }, {
                version: 14,
                run: e => _(e, r.HotspotLocations.ACTIVITY_BEB_TUTORIAL, s.DismissibleContent.ACTIVITIES_TUTORIAL_COACH_MARK),
                cleanup() {}
            }, {
                version: 15,
                run: e => _(e, r.HotspotLocations.NOW_PLAYING_CONSENT_CARD, s.DismissibleContent.NOW_PLAYING_CONSENT_CARD),
                cleanup() {}
            }, {
                version: 16,
                run(e) {
                    let t = l.default.get("PromotionsPersistedStore");
                    if (null == t) return !1;
                    let n = t._state.lastDismissedOutboundPromotionStartDate;
                    return null != n && (null == e.userContent && (e.userContent = s.UserContentSettings.create()), null == e.userContent.lastDismissedOutboundPromotionStartDate) && (e.userContent.lastDismissedOutboundPromotionStartDate = i.StringValue.create({
                        value: n
                    }), !0)
                },
                cleanup() {}
            }, {
                version: 17,
                run(e) {
                    let {
                        state: t
                    } = a.default.PersistedStore.migrateAndReadStoreState("ExpressionSuggestionsPersistedStore", null);
                    if (null == t) return !1;
                    let n = t.expressionSuggestionsEnabled;
                    return null != n && (null == e.textAndImages && (e.textAndImages = s.TextAndImagesSettings.create()), null == e.textAndImages.expressionSuggestionsEnabled) && (e.textAndImages.expressionSuggestionsEnabled = i.BoolValue.create({
                        value: n
                    }), !0)
                },
                cleanup() {
                    l.default.remove("ExpressionSuggestionsPersistedStore")
                }
            }, {
                version: 18,
                run(e) {
                    let t = !1;
                    return _(e, r.HotspotLocations.GUILD_DELETE_FEEDBACK, s.DismissibleContent.GUILD_DELETE_FEEDBACK) && (t = !0), _(e, r.HotspotLocations.GUILD_LEAVE_FEEDBACK, s.DismissibleContent.GUILD_LEAVE_FEEDBACK) && (t = !0), t
                },
                cleanup() {}
            }, {
                version: 19,
                run(e) {
                    var t;
                    let n = !1,
                        a = null !== (t = l.default.get("forumHelperCardStorageKey")) && void 0 !== t && t;
                    return a && (n = f(e, s.DismissibleContent.FORUM_CHANNEL_HELPER_CARD)), n
                },
                cleanup() {
                    l.default.remove("forumHelperCardStorageKey")
                }
            }];
            var C = h
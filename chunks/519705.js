            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007"), n("702976");
            var i = n("872717"),
                r = n("819855"),
                l = n("913144"),
                o = n("679428"),
                s = n("282109"),
                a = n("568734"),
                u = n("34676"),
                c = n("49111"),
                d = n("397336"),
                f = n("782340"),
                E = {
                    open(e) {
                        l.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                            guildId: e
                        })
                    },
                    close() {
                        l.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        })
                    },
                    updateGuildNotificationSettings(e, t, n, i) {
                        let r = (0, u.getCurrentGuildSettings)(e);
                        o.default.saveUserGuildSettings(e, t), l.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, u.trackGuildNotificationSettingsUpdate)(e, t, r, n, i)
                    },
                    updateGuildAndChannelNotificationSettings(e, t, n, i) {
                        let r = Object.keys(t.channel_overrides),
                            s = (0, u.getCurrentGuildSettings)(e),
                            a = (0, u.getManyCurrentChannelSettings)(e, r);
                        o.default.saveUserGuildSettings(e, t), l.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, u.trackGuildNotificationSettingsUpdate)(e, t, s, n, i), Object.keys(t.channel_overrides).forEach(r => {
                            let l = a.get(r);
                            (0, u.trackChannelNotificationSettingsUpdate)(e, r, t.channel_overrides[r], l, n, i)
                        })
                    },
                    updateGuildNotificationSettingsBulk(e, t, n) {
                        let i = Object.keys(e),
                            r = (0, u.getManyCurrentGuildSettings)(i);
                        o.default.saveUserGuildSettingsBulk(e), Object.entries(e).forEach(e => {
                            let [i, o] = e, s = r.get(i);
                            l.default.dispatch({
                                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                                guildId: i,
                                settings: o
                            }), (0, u.trackGuildNotificationSettingsUpdate)(i, o, s, t, n)
                        })
                    },
                    updateChannelOverrideSettings(e, t, n, i, s) {
                        let a = (0, u.getCurrentChannelSettings)(e, t);
                        o.default.saveUserGuildSettings(e, {
                            channel_overrides: {
                                [t]: n
                            }
                        }), l.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                            guildId: e,
                            channelId: t,
                            settings: n
                        }), r.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, u.trackChannelNotificationSettingsUpdate)(e, t, n, a, i, s)
                    },
                    updateChannelOverrideSettingsBulk(e, t, n, i) {
                        let r = Object.keys(t),
                            s = (0, u.getManyCurrentChannelSettings)(e, r);
                        o.default.saveUserGuildSettings(e, {
                            channel_overrides: t
                        }), l.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                            guildId: e,
                            overrides: t
                        }), Object.keys(t).forEach(r => (0, u.trackChannelNotificationSettingsUpdate)(e, r, t[r], s.get(r), n, i))
                    },
                    setForumThreadsCreated(e, t) {
                        let n = t ? d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
                            i = t ? d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
                            r = s.default.getChannelFlags(e);
                        this.updateChannelOverrideSettings(e.guild_id, e.id, {
                            flags: r & ~i | n
                        }, u.NotificationLabel.forumThreadsCreated(t))
                    },
                    async setAccountFlag(e, t) {
                        let n = s.default.accountNotificationSettings.flags,
                            r = (0, a.setFlag)(n, e, t);
                        await i.default.patch({
                            url: c.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
                            body: {
                                flags: r
                            }
                        }), await l.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_UPDATE",
                            settings: {
                                flags: r
                            }
                        })
                    }
                }
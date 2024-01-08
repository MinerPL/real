            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007"), n("702976");
            var i = n("872717"),
                l = n("819855"),
                a = n("913144"),
                r = n("679428"),
                s = n("282109"),
                o = n("568734"),
                u = n("34676"),
                d = n("49111"),
                c = n("397336"),
                f = n("782340"),
                h = {
                    open(e) {
                        a.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                            guildId: e
                        })
                    },
                    close() {
                        a.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        })
                    },
                    updateGuildNotificationSettings(e, t, n, i) {
                        let l = (0, u.getCurrentGuildSettings)(e);
                        r.default.saveUserGuildSettings(e, t), a.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, u.trackGuildNotificationSettingsUpdate)(e, t, l, n, i)
                    },
                    updateGuildAndChannelNotificationSettings(e, t, n, i) {
                        let l = Object.keys(t.channel_overrides),
                            s = (0, u.getCurrentGuildSettings)(e),
                            o = (0, u.getManyCurrentChannelSettings)(e, l);
                        r.default.saveUserGuildSettings(e, t), a.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, u.trackGuildNotificationSettingsUpdate)(e, t, s, n, i), Object.keys(t.channel_overrides).forEach(l => {
                            let a = o.get(l);
                            (0, u.trackChannelNotificationSettingsUpdate)(e, l, t.channel_overrides[l], a, n, i)
                        })
                    },
                    updateGuildNotificationSettingsBulk(e, t, n) {
                        let i = Object.keys(e),
                            l = (0, u.getManyCurrentGuildSettings)(i);
                        r.default.saveUserGuildSettingsBulk(e), Object.entries(e).forEach(e => {
                            let [i, r] = e, s = l.get(i);
                            a.default.dispatch({
                                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                                guildId: i,
                                settings: r
                            }), (0, u.trackGuildNotificationSettingsUpdate)(i, r, s, t, n)
                        })
                    },
                    updateChannelOverrideSettings(e, t, n, i, s) {
                        let o = (0, u.getCurrentChannelSettings)(e, t);
                        r.default.saveUserGuildSettings(e, {
                            channel_overrides: {
                                [t]: n
                            }
                        }), a.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                            guildId: e,
                            channelId: t,
                            settings: n
                        }), l.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, u.trackChannelNotificationSettingsUpdate)(e, t, n, o, i, s)
                    },
                    updateChannelOverrideSettingsBulk(e, t, n, i) {
                        let l = Object.keys(t),
                            s = (0, u.getManyCurrentChannelSettings)(e, l);
                        r.default.saveUserGuildSettings(e, {
                            channel_overrides: t
                        }), a.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                            guildId: e,
                            overrides: t
                        }), Object.keys(t).forEach(l => (0, u.trackChannelNotificationSettingsUpdate)(e, l, t[l], s.get(l), n, i))
                    },
                    setForumThreadsCreated(e, t) {
                        let n = t ? c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
                            i = t ? c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
                            l = s.default.getChannelFlags(e);
                        this.updateChannelOverrideSettings(e.guild_id, e.id, {
                            flags: l & ~i | n
                        }, u.NotificationLabel.forumThreadsCreated(t))
                    },
                    async setAccountFlag(e, t) {
                        let n = s.default.accountNotificationSettings.flags,
                            l = (0, o.setFlag)(n, e, t);
                        await i.default.patch({
                            url: d.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
                            body: {
                                flags: l
                            }
                        }), await a.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_UPDATE",
                            settings: {
                                flags: l
                            }
                        })
                    }
                }
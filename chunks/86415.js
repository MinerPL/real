            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("446674"),
                a = n("913144"),
                l = n("42203"),
                i = n("724210");
            let r = {},
                o = {};
            class u extends s.default.PersistedStore {
                initialize(e) {
                    var t;
                    r = null !== (t = null == e ? void 0 : e.selectedResourceChannelIdByGuildId) && void 0 !== t ? t : {}
                }
                getState() {
                    return {
                        selectedResourceChannelIdByGuildId: r
                    }
                }
                getSelectedResourceChannelId(e) {
                    return null == e ? null : r[e]
                }
                getHomeNavigationChannelId(e) {
                    var t;
                    return null == e ? null : null !== (t = r[e]) && void 0 !== t ? t : o[e]
                }
            }
            u.displayName = "GuildOnboardingHomeNavigationStore", u.persistKey = "GuildOnboardingHomeNavigationStore";
            var d = new u(a.default, {
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t,
                        guildId: n
                    } = e;
                    if (null == n || t === i.StaticChannelRoute.GUILD_HOME) return;
                    let s = l.default.getChannel(t),
                        a = r[n],
                        u = o[n];
                    !((null == s ? void 0 : s.isThread()) && (null == s ? void 0 : s.parent_id) != null && [u, a].includes(null == s ? void 0 : s.parent_id)) && (t !== a && delete r[n], t !== u && delete o[n])
                },
                SELECT_HOME_RESOURCE_CHANNEL: function(e) {
                    let {
                        channelId: t,
                        guildId: n
                    } = e;
                    null == t ? delete o[n] : r[n] = t, delete o[n]
                },
                SELECT_NEW_MEMBER_ACTION_CHANNEL: function(e) {
                    let {
                        channelId: t,
                        guildId: n
                    } = e;
                    delete r[n], o[n] = t
                }
            })
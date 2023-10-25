(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["33057"], {
        129082: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var l = s("773670"),
                n = s("498225"),
                a = s("429224"),
                o = s("935692");

            function i(e) {
                let [t, s] = l.useState(!1), i = (0, n.useStateFromStores)([o.default], () => o.default.getFollowerStatsForChannel(e), [e]);
                return l.useEffect(() => {
                    let l = null == i || Date.now() - i.lastFetched > 36e5;
                    l && !t ? (s(!0), a.default.fetchChannelFollowerStats(e)) : null != i && t && s(!1)
                }, [e, i, t]), [i, t]
            }
        },
        557981: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            });
            var l = s("920040");
            s("773670");
            var n = s("744196"),
                a = s("77078"),
                o = s("819689"),
                i = s("592407"),
                u = s("42203"),
                r = s("129082"),
                d = s("49111"),
                c = s("782340"),
                f = s("812777");

            function S(e) {
                let {
                    channelId: t,
                    messageId: s,
                    transitionState: S,
                    onClose: _
                } = e, g = (0, n.default)([u.default], () => u.default.getChannel(t)), [E, F] = (0, r.default)(t), C = null == g ? void 0 : g.guild_id;
                return (0, l.jsx)(a.ConfirmModal, {
                    header: c.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                    confirmText: c.default.Messages.CONFIRM,
                    cancelText: c.default.Messages.CANCEL,
                    confirmButtonColor: a.Button.Colors.BRAND,
                    onConfirm: () => o.default.crosspostMessage(t, s),
                    transitionState: S,
                    onClose: _,
                    children: (0, l.jsx)(a.Text, {
                        variant: "text-md/normal",
                        className: f.spacing,
                        children: F ? (0, l.jsx)(a.Spinner, {}) : null != E && null != E.guildsFollowing && E.guildsFollowing > 0 ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(a.Text, {
                                className: f.spacing,
                                variant: "text-sm/normal",
                                children: c.default.Messages.PUBLISH_FOLLOWED_NEWS_BODY_REACH.format({
                                    numGuildsFollowing: E.guildsFollowing
                                })
                            }), (0, l.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                children: c.default.Messages.PUBLISH_FOLLOWED_NEWS_BODY_SETTINGS_INSIGHTS.format({
                                    onClick: () => {
                                        null != C && null != _ && (_(), i.default.open(C, d.GuildSettingsSections.ANALYTICS))
                                    }
                                })
                            })]
                        }) : c.default.Messages.PUBLISH_FOLLOWED_NEWS_BODY
                    })
                })
            }
        },
        935692: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var l, n, a = s("498225"),
                o = s("913144");
            (l = n || (n = {})).FAILED = "failed", l.SUCCEEDED = "succeeded";
            let i = {};
            class u extends a.default.Store {
                getFollowerStatsForChannel(e) {
                    return i[e]
                }
            }
            u.displayName = "ChannelFollowerStatsStore";
            var r = new u(o.default, {
                CONNECTION_OPEN: function() {
                    i = {}
                },
                CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        stats: s
                    } = e;
                    s = null != s ? s : {}, i[t] = {
                        loadingStatus: n.SUCCEEDED,
                        lastFetched: Date.now(),
                        channelsFollowing: s.channels_following,
                        guildMembers: s.guild_members,
                        guildsFollowing: s.guilds_following,
                        usersSeenEver: s.users_seen_ever,
                        subscribersGainedSinceLastPost: s.subscribers_gained_since_last_post,
                        subscribersLostSinceLastPost: s.subscribers_lost_since_last_post
                    }
                },
                CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    i[t] = {
                        loadingStatus: n.FAILED,
                        lastFetched: Date.now(),
                        channelsFollowing: 0,
                        guildMembers: 0,
                        guildsFollowing: 0,
                        usersSeenEver: 0,
                        subscribersGainedSinceLastPost: 0,
                        subscribersLostSinceLastPost: 0
                    }
                }
            })
        }
    }
]);
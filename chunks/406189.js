            "use strict";
            l.r(e), l.d(e, {
                default: function() {
                    return a
                }
            });
            var n = l("913144"),
                a = {
                    updateChannelDimensions(t, e, l, a, i) {
                        n.default.wait(() => {
                            n.default.dispatch({
                                type: "UPDATE_CHANNEL_DIMENSIONS",
                                channelId: t,
                                scrollTop: e,
                                scrollHeight: l,
                                offsetHeight: a
                            }), null != i && i()
                        })
                    },
                    updateChannelListScroll(t, e) {
                        let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        n.default.dispatch({
                            type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
                            guildId: t,
                            scrollTop: e,
                            channelIds: l
                        })
                    },
                    channelListScrollTo(t, e) {
                        n.default.dispatch({
                            type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
                            guildId: t,
                            scrollTo: e,
                            channelIds: []
                        })
                    },
                    clearChannelListScrollTo(t) {
                        n.default.dispatch({
                            type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
                            guildId: t,
                            scrollTo: null,
                            channelIds: []
                        })
                    },
                    clearChannelDimensions(t, e) {
                        this.updateChannelDimensions(t, null, null, null, e)
                    },
                    updateGuildListScrollTo(t) {
                        n.default.dispatch({
                            type: "UPDATE_GUILD_LIST_DIMENSIONS",
                            scrollTop: t
                        })
                    }
                }
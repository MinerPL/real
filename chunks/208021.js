            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("913144"),
                o = n("819689"),
                l = n("115718"),
                a = n("347895"),
                u = n("341329"),
                d = n("582713"),
                s = n("724210"),
                E = {
                    openPrivateChannelAsSidebar(e) {
                        let {
                            channelId: t,
                            messageId: n,
                            baseChannelId: l,
                            hasSingleMessageRequest: a
                        } = e;
                        i.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: d.SidebarType.VIEW_MESSAGE_REQUEST,
                            baseChannelId: l,
                            channelId: t,
                            details: {
                                type: d.SidebarOpenDetailsType.MESSAGE_REQUEST,
                                hasSingleMessageRequest: a
                            }
                        }), null != n ? o.default.jumpToMessage({
                            channelId: t,
                            messageId: n,
                            flash: !0
                        }) : u.default.fetchMessages({
                            channelId: t
                        })
                    },
                    openChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n,
                            baseChannelId: a,
                            flash: s = !0,
                            details: E
                        } = e;
                        i.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: d.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: a,
                            channelId: n,
                            details: E
                        });
                        let r = null == E ? void 0 : E.initialMessageId;
                        null != r ? o.default.jumpToMessage({
                            channelId: n,
                            messageId: r,
                            flash: s,
                            jumpType: l.JumpTypes.INSTANT
                        }) : u.default.fetchMessages({
                            guildId: t,
                            channelId: n
                        })
                    },
                    openResourceChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n
                        } = e;
                        null != t && ((0, a.selectHomeResourceChannel)(t, n, !1), i.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: d.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: s.StaticChannelRoute.GUILD_HOME,
                            channelId: n
                        }))
                    },
                    openThreadAsSidebar(e) {
                        let {
                            guildId: t,
                            baseChannelId: n,
                            channelId: a,
                            flash: s = !0,
                            details: E
                        } = e;
                        i.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: d.SidebarType.VIEW_THREAD,
                            baseChannelId: n,
                            channelId: a,
                            details: E
                        }), (null == E ? void 0 : E.initialMessageId) != null ? o.default.jumpToMessage({
                            channelId: a,
                            messageId: E.initialMessageId,
                            flash: s,
                            jumpType: l.JumpTypes.INSTANT
                        }) : u.default.fetchMessages({
                            guildId: t,
                            channelId: a
                        })
                    },
                    closeChannelSidebar(e) {
                        i.default.dispatch({
                            type: "SIDEBAR_CLOSE",
                            baseChannelId: e
                        })
                    },
                    openGuildSidebar(e) {
                        let {
                            guildId: t,
                            baseChannelId: n,
                            sidebarType: o,
                            details: l
                        } = e;
                        i.default.dispatch({
                            type: "SIDEBAR_VIEW_GUILD",
                            sidebarType: o,
                            baseChannelId: n,
                            guildId: t,
                            details: l
                        })
                    },
                    closeGuildSidebar(e) {
                        i.default.dispatch({
                            type: "SIDEBAR_CLOSE_GUILD",
                            guildId: e
                        })
                    }
                }
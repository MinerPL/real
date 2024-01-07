            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("913144"),
                i = n("819689"),
                a = n("115718"),
                l = n("347895"),
                r = n("341329"),
                u = n("582713"),
                o = n("724210"),
                c = {
                    openPrivateChannelAsSidebar(e) {
                        let {
                            channelId: t,
                            messageId: n,
                            baseChannelId: a,
                            hasSingleMessageRequest: l
                        } = e;
                        s.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_MESSAGE_REQUEST,
                            baseChannelId: a,
                            channelId: t,
                            details: {
                                type: u.SidebarOpenDetailsType.MESSAGE_REQUEST,
                                hasSingleMessageRequest: l
                            }
                        }), null != n ? i.default.jumpToMessage({
                            channelId: t,
                            messageId: n,
                            flash: !0
                        }) : r.default.fetchMessages({
                            channelId: t
                        })
                    },
                    openChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n,
                            baseChannelId: l,
                            flash: o = !0,
                            details: c
                        } = e;
                        s.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: l,
                            channelId: n,
                            details: c
                        });
                        let d = null == c ? void 0 : c.initialMessageId;
                        null != d ? i.default.jumpToMessage({
                            channelId: n,
                            messageId: d,
                            flash: o,
                            jumpType: a.JumpTypes.INSTANT
                        }) : r.default.fetchMessages({
                            guildId: t,
                            channelId: n
                        })
                    },
                    openResourceChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n
                        } = e;
                        null != t && ((0, l.selectHomeResourceChannel)(t, n, !1), s.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: o.StaticChannelRoute.GUILD_HOME,
                            channelId: n
                        }))
                    },
                    openThreadAsSidebar(e) {
                        let {
                            guildId: t,
                            baseChannelId: n,
                            channelId: l,
                            flash: o = !0,
                            details: c
                        } = e;
                        s.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_THREAD,
                            baseChannelId: n,
                            channelId: l,
                            details: c
                        }), (null == c ? void 0 : c.initialMessageId) != null ? i.default.jumpToMessage({
                            channelId: l,
                            messageId: c.initialMessageId,
                            flash: o,
                            jumpType: a.JumpTypes.INSTANT
                        }) : r.default.fetchMessages({
                            guildId: t,
                            channelId: l
                        })
                    },
                    closeChannelSidebar(e) {
                        s.default.dispatch({
                            type: "SIDEBAR_CLOSE",
                            baseChannelId: e
                        })
                    },
                    openGuildSidebar(e) {
                        let {
                            guildId: t,
                            baseChannelId: n,
                            sidebarType: i,
                            details: a
                        } = e;
                        s.default.dispatch({
                            type: "SIDEBAR_VIEW_GUILD",
                            sidebarType: i,
                            baseChannelId: n,
                            guildId: t,
                            details: a
                        })
                    },
                    closeGuildSidebar(e) {
                        s.default.dispatch({
                            type: "SIDEBAR_CLOSE_GUILD",
                            guildId: e
                        })
                    }
                }
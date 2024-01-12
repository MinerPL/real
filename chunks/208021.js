            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("913144"),
                r = n("819689"),
                i = n("115718"),
                l = n("347895"),
                o = n("341329"),
                u = n("582713"),
                s = n("724210"),
                d = {
                    openPrivateChannelAsSidebar(e) {
                        let {
                            channelId: t,
                            messageId: n,
                            baseChannelId: i,
                            hasSingleMessageRequest: l
                        } = e;
                        a.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_MESSAGE_REQUEST,
                            baseChannelId: i,
                            channelId: t,
                            details: {
                                type: u.SidebarOpenDetailsType.MESSAGE_REQUEST,
                                hasSingleMessageRequest: l
                            }
                        }), null != n ? r.default.jumpToMessage({
                            channelId: t,
                            messageId: n,
                            flash: !0
                        }) : o.default.fetchMessages({
                            channelId: t
                        })
                    },
                    openChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n,
                            baseChannelId: l,
                            flash: s = !0,
                            details: d
                        } = e;
                        a.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: l,
                            channelId: n,
                            details: d
                        });
                        let c = null == d ? void 0 : d.initialMessageId;
                        null != c ? r.default.jumpToMessage({
                            channelId: n,
                            messageId: c,
                            flash: s,
                            jumpType: i.JumpTypes.INSTANT
                        }) : o.default.fetchMessages({
                            guildId: t,
                            channelId: n
                        })
                    },
                    openResourceChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n
                        } = e;
                        null != t && ((0, l.selectHomeResourceChannel)(t, n, !1), a.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: s.StaticChannelRoute.GUILD_HOME,
                            channelId: n
                        }))
                    },
                    openThreadAsSidebar(e) {
                        let {
                            guildId: t,
                            baseChannelId: n,
                            channelId: l,
                            flash: s = !0,
                            details: d
                        } = e;
                        a.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_THREAD,
                            baseChannelId: n,
                            channelId: l,
                            details: d
                        }), (null == d ? void 0 : d.initialMessageId) != null ? r.default.jumpToMessage({
                            channelId: l,
                            messageId: d.initialMessageId,
                            flash: s,
                            jumpType: i.JumpTypes.INSTANT
                        }) : o.default.fetchMessages({
                            guildId: t,
                            channelId: l
                        })
                    },
                    closeChannelSidebar(e) {
                        a.default.dispatch({
                            type: "SIDEBAR_CLOSE",
                            baseChannelId: e
                        })
                    },
                    openGuildSidebar(e) {
                        let {
                            guildId: t,
                            baseChannelId: n,
                            sidebarType: r,
                            details: i
                        } = e;
                        a.default.dispatch({
                            type: "SIDEBAR_VIEW_GUILD",
                            sidebarType: r,
                            baseChannelId: n,
                            guildId: t,
                            details: i
                        })
                    },
                    closeGuildSidebar(e) {
                        a.default.dispatch({
                            type: "SIDEBAR_CLOSE_GUILD",
                            guildId: e
                        })
                    }
                }
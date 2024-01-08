            "use strict";
            n.r(t), n.d(t, {
                openGuildMemberModViewSidebar: function() {
                    return r
                }
            });
            var a = n("208021"),
                l = n("582713"),
                s = n("459824"),
                i = n("789150");

            function r(e, t, n) {
                var r;
                let u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                    modViewPanel: i.ModViewPanel.INFO
                };
                (0, s.canAccessGuildMemberModViewWithExperiment)(e) && a.default.openGuildSidebar({
                    guildId: e,
                    baseChannelId: n,
                    sidebarType: l.GuildSidebarType.GUILD_MEMBER_MOD_VIEW,
                    details: {
                        type: l.SidebarOpenDetailsType.GUILD_MEMBER_MOD_VIEW,
                        userId: t,
                        guildId: e,
                        ...u,
                        modViewPanel: null !== (r = u.modViewPanel) && void 0 !== r ? r : i.ModViewPanel.INFO
                    }
                })
            }
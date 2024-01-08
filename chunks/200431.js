            "use strict";
            n.r(t), n.d(t, {
                TOGGLE_USERS: function() {
                    return c
                }
            });
            var i = n("298386"),
                o = n("255397"),
                l = n("289867"),
                a = n("191145"),
                u = n("217513"),
                d = n("893980"),
                s = n("982108"),
                r = n("42203"),
                E = n("18494"),
                _ = n("162771"),
                A = n("49111");
            let c = {
                binds: ["mod+u"],
                comboKeysBindGlobal: !0,
                action() {
                    let e = _.default.getGuildId(),
                        t = E.default.getChannelId(e),
                        n = r.default.getChannel(t);
                    if (null != t && null != n && n.type === i.ChannelTypes.GUILD_VOICE) return o.default.updateChatOpen(t, !a.default.getChatOpen(t)), !1;
                    if (null != t && null != n && n.type === i.ChannelTypes.DM) {
                        let e = s.default.getSection(t, null == n ? void 0 : n.isDM()),
                            i = (0, u.getDisplayProfile)(n.getRecipientId()),
                            o = e === A.ChannelSections.PROFILE;
                        return (0, d.trackProfilePanelToggled)(i, !o), l.default.toggleProfilePanelSection(), !1
                    }
                    return l.default.toggleMembersSection(), !1
                }
            }
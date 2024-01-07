            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return d
                }
            });
            var n = i("773336"),
                l = i("126939"),
                a = i("501260"),
                u = i("871388"),
                r = i("49111");

            function d(e) {
                let {
                    user: t,
                    activity: i,
                    application: d,
                    channelId: o,
                    currentUser: s,
                    isEmbedded: c,
                    ChannelStore: f,
                    GuildStore: _,
                    GuildMemberCountStore: E,
                    RelationshipStore: A,
                    SelectedChannelStore: I,
                    VoiceStateStore: T,
                    PermissionStore: C
                } = e, v = (0, l.getIsActivitiesEnabledForCurrentPlatform)();
                if (null == t) return !1;
                if (c) return (0, a.default)({
                    userId: t.id,
                    activity: i,
                    channelId: o,
                    currentUser: s,
                    application: d,
                    isActivitiesEnabledForCurrentPlatform: v,
                    ChannelStore: f,
                    VoiceStateStore: T,
                    PermissionStore: C,
                    GuildStore: _
                }) === a.EmbeddedActivityJoinability.CAN_JOIN;
                if (!(0, n.isDesktop)()) return !1;
                if ((0, u.default)(i, r.ActivityFlags.PARTY_PRIVACY_FRIENDS) && A.isFriend(t.id)) return !0;
                if ((0, u.default)(i, r.ActivityFlags.PARTY_PRIVACY_VOICE_CHANNEL)) {
                    let e = f.getChannel(I.getVoiceChannelId());
                    if (null == e || !T.isInChannel(e.id, t.id)) return !1;
                    switch (e.type) {
                        case r.ChannelTypes.DM:
                        case r.ChannelTypes.GROUP_DM:
                            return !0
                    }
                    let i = _.getGuild(e.getGuildId());
                    if (null == i || i.hasFeature(r.GuildFeatures.COMMUNITY)) return !1;
                    let n = E.getMemberCount(i.id);
                    return null != n && n < 100
                }
                return !1
            }
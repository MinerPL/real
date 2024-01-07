            "use strict";
            n.r(t), n.d(t, {
                openUserProfileModal: function() {
                    return a
                },
                closeUserProfileModal: function() {
                    return s
                }
            });
            var i = n("913144"),
                l = n("327037"),
                u = n("697218"),
                o = n("506885"),
                r = n("49111");

            function a(e) {
                let {
                    userId: t,
                    section: n,
                    guildId: a = r.ME,
                    channelId: s,
                    friendToken: d,
                    autoFocusNote: c,
                    analyticsLocation: E
                } = e, f = u.default.getUser(t), _ = a !== r.ME ? a : void 0;
                if (null == f) return (0, l.fetchProfile)(t, {
                    friendToken: d,
                    guildId: _
                }).then(() => {
                    i.default.dispatch({
                        type: "USER_PROFILE_MODAL_OPEN",
                        userId: t,
                        section: n,
                        guildId: a,
                        channelId: s,
                        friendToken: d,
                        autoFocusNote: c,
                        analyticsLocation: E
                    })
                });
                (0, o.default)(t, f.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: d,
                    guildId: _
                }), i.default.dispatch({
                    type: "USER_PROFILE_MODAL_OPEN",
                    userId: t,
                    section: n,
                    guildId: a,
                    channelId: s,
                    friendToken: d,
                    autoFocusNote: c,
                    analyticsLocation: E
                })
            }

            function s() {
                i.default.dispatch({
                    type: "USER_PROFILE_MODAL_CLOSE"
                })
            }
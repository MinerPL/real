            "use strict";
            n.r(t), n.d(t, {
                UNREAD_NEXT: function() {
                    return c
                },
                UNREAD_PREV: function() {
                    return C
                },
                MENTION_NEXT: function() {
                    return S
                },
                MENTION_PREV: function() {
                    return I
                }
            });
            var i = n("592864"),
                o = n("615387"),
                l = n("393027"),
                a = n("233069"),
                u = n("42203"),
                d = n("660478"),
                s = n("282109"),
                E = n("49111"),
                r = n("133335");
            let _ = (e, t) => {
                    let n = u.default.getChannel(t);
                    return null != n && ((0, a.isPrivate)(n.type) ? !!d.default.getMentionCount(t) : (!s.default.isChannelMuted(e, t) || d.default.getMentionCount(t) > 0) && (0, o.getHasImportantUnread)(n))
                },
                A = (e, t) => {
                    if (t === r.ReadStateTypes.GUILD_EVENT) return !s.default.isMuteScheduledEventsEnabled(e) && d.default.hasUnread(e, t);
                    return d.default.hasUnread(e, t)
                },
                c = {
                    binds: ["alt+shift+down"],
                    comboKeysBindGlobal: !0,
                    action() {
                        var e;
                        let t = null !== (e = l.default.getState().guildId) && void 0 !== e ? e : E.ME;
                        return (0, i.default)(1, {
                            channelPredicate: _,
                            guildPredicate: e => e === t || !s.default.isMuted(e),
                            guildFeaturePredicate: A
                        }), !1
                    }
                },
                C = {
                    binds: ["alt+shift+up"],
                    comboKeysBindGlobal: !0,
                    action() {
                        var e;
                        let t = null !== (e = l.default.getState().guildId) && void 0 !== e ? e : E.ME;
                        return (0, i.default)(-1, {
                            channelPredicate: _,
                            guildPredicate: e => e === t || !s.default.isMuted(e),
                            guildFeaturePredicate: A
                        }), !1
                    }
                },
                T = (e, t) => d.default.getMentionCount(t) > 0,
                S = {
                    binds: ["mod+shift+alt+down"],
                    comboKeysBindGlobal: !0,
                    action: () => ((0, i.default)(1, {
                        channelPredicate: T,
                        withVoiceChannels: !0
                    }), !1)
                },
                I = {
                    binds: ["mod+shift+alt+up"],
                    comboKeysBindGlobal: !0,
                    action: () => ((0, i.default)(-1, {
                        channelPredicate: T,
                        withVoiceChannels: !0
                    }), !1)
                }
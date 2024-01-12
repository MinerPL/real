            "use strict";
            l.r(t), l.d(t, {
                useGetVoiceChannelInfoForVoiceActivitySection: function() {
                    return h
                },
                default: function() {
                    return I
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("446674"),
                s = l("77078"),
                i = l("242740"),
                r = l("42203"),
                o = l("305961"),
                u = l("957255"),
                d = l("945956"),
                c = l("800762"),
                f = l("476263"),
                m = l("368121"),
                p = l("777003"),
                E = l("49111"),
                T = l("782340"),
                _ = l("814076"),
                S = l("293773");

            function h(e, t) {
                let l = (0, a.useStateFromStores)([c.default], () => {
                        var l;
                        return null !== (l = c.default.getVoiceState(t, e)) && void 0 !== l ? l : c.default.getVoiceStateForUser(e)
                    }, [t, e]),
                    n = (0, a.useStateFromStores)([r.default], () => null != l && null != l.channelId ? r.default.getChannel(l.channelId) : null, [l]),
                    s = (0, a.useStateFromStores)([o.default], () => null != n ? o.default.getGuild(n.guild_id) : null, [n]),
                    i = (0, a.useStateFromStores)([u.default], () => null != n && u.default.can(E.Permissions.VIEW_CHANNEL, n), [n]),
                    d = (0, a.useStateFromStores)([u.default], () => null != n && u.default.can(E.Permissions.CONNECT, n), [n]);
                return i && d && null != n && null != s ? {
                    voiceGuild: s,
                    voiceChannel: n
                } : null
            }

            function I(e) {
                let {
                    voiceGuild: t,
                    voiceChannel: l,
                    onClose: r,
                    color: o
                } = e, u = (0, a.useStateFromStores)([d.default], () => d.default.getChannelId() === l.id), c = u ? T.default.Messages.PROFILE_OPEN_VOICE_CHANNEL : l.isGuildStageVoice() ? T.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : T.default.Messages.PROFILE_JOIN_VOICE_CHANNEL;
                return (0, n.jsxs)(p.default, {
                    children: [(0, n.jsx)(s.Heading, {
                        variant: "eyebrow",
                        className: _.title,
                        children: T.default.Messages.PROFILE_IN_VOICE_CALL
                    }), (0, n.jsxs)("div", {
                        className: S.voiceDisplayContainer,
                        children: [(0, n.jsxs)("div", {
                            className: S.iconContainer,
                            children: [(0, n.jsx)(f.default, {
                                size: f.default.Sizes.SMALL,
                                active: !0,
                                guild: t
                            }), (0, n.jsx)("div", {
                                className: S.speakerIconContainer,
                                children: (0, n.jsx)(m.default, {
                                    className: S.speakerIcon
                                })
                            })]
                        }), (0, n.jsxs)("div", {
                            className: S.voiceChannelInfo,
                            children: [(0, n.jsx)(s.Text, {
                                variant: "text-sm/semibold",
                                children: l.name
                            }), (0, n.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: null == t ? void 0 : t.name
                            })]
                        })]
                    }), (0, n.jsx)(s.Button, {
                        onClick: function() {
                            null != l && (i.default.handleVoiceConnect({
                                channel: l,
                                connected: d.default.getChannelId() === l.id,
                                needSubscriptionToAccess: !1
                            }), null == r || r())
                        },
                        color: null != o ? o : s.Button.Colors.PRIMARY,
                        size: s.Button.Sizes.SMALL,
                        fullWidth: !0,
                        children: c
                    })]
                })
            }
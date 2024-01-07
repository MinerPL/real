            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("884691"),
                s = n("298386"),
                l = n("446674"),
                i = n("811425"),
                r = n("305961"),
                o = n("333363"),
                u = n("596512"),
                d = n("49111");

            function c(e) {
                var t, n;
                let {
                    message: c,
                    channel: f,
                    enabled: m = !0
                } = e, E = (0, l.useStateFromStores)([r.default], () => {
                    var e;
                    let t = r.default.getGuild(f.guild_id);
                    return null !== (e = null == t ? void 0 : t.hasFeature(d.GuildFeatures.COMMUNITY)) && void 0 !== e && e
                }, [f.guild_id]), _ = (null === (t = c.messageReference) || void 0 === t ? void 0 : t.guild_id) != null && null != c.webhookId && c.hasFlag(d.MessageFlags.IS_CROSSPOST) && null != f.guild_id, h = f.type === s.ChannelTypes.GUILD_ANNOUNCEMENT && E, p = !c.hasFlag(d.MessageFlags.EPHEMERAL) && (_ || h), I = _ && null != c.messageReference ? c.messageReference.message_id : c.id, T = _ && null != c.messageReference ? c.messageReference.channel_id : f.id, g = _ && (null === (n = c.messageReference) || void 0 === n ? void 0 : n.guild_id) != null ? c.messageReference.guild_id : f.guild_id, C = a.useCallback(e => {
                    e ? u.default.handleMessageBecameVisible({
                        messageId: I,
                        channelId: f.id,
                        guildId: f.guild_id,
                        sourceChannelId: T,
                        sourceGuildId: g
                    }) : u.default.handleMessageLostVisibility(I)
                }, [I, f.id, f.guild_id, T, g]), S = o.default.useExperiment({
                    location: "836a4b_1"
                }, {
                    disable: !p || !m,
                    autoTrackExposure: !0
                }).enabled, A = (0, i.useIsVisible)(C, 0, S);
                return a.useEffect(() => () => {
                    u.default.handleMessageLostVisibility(I)
                }, [I]), A
            }
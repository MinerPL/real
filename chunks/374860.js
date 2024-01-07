            "use strict";
            n.r(t), n.d(t, {
                navigateToEvent: function() {
                    return c
                },
                postStartActions: function() {
                    return f
                }
            });
            var l = n("627445"),
                i = n.n(l),
                a = n("987317"),
                s = n("244480"),
                r = n("716214"),
                d = n("42203"),
                u = n("945956"),
                o = n("745049");
            async function c(e, t) {
                let {
                    entity_type: n
                } = e;
                switch (n) {
                    case o.GuildScheduledEventEntityTypes.STAGE_INSTANCE: {
                        let t = u.default.getChannelId(),
                            n = d.default.getChannel(e.channel_id);
                        i(null != n, "could not find channel"), t !== n.id && (await r.connectToStage(n, !0), await r.navigateToStage(n, null, !1)), await (0, s.audienceAckRequestToSpeak)(n, !1, !0);
                        break
                    }
                    case o.GuildScheduledEventEntityTypes.VOICE: {
                        let t = u.default.getChannelId(),
                            n = d.default.getChannel(e.channel_id);
                        i(null != n, "could not find channel"), t !== n.id && a.default.selectVoiceChannel(n.id)
                    }
                }
            }

            function f(e, t) {
                let {
                    entity_type: n
                } = e;
                switch (n) {
                    case o.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
                    case o.GuildScheduledEventEntityTypes.VOICE:
                    case o.GuildScheduledEventEntityTypes.EXTERNAL:
                        null == t || t()
                }
                return Promise.resolve()
            }
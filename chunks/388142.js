            "use strict";
            n.r(t), n.d(t, {
                initiateChannelPrompts: function() {
                    return h
                },
                forcePrompt: function() {
                    return f
                },
                sendGamingStatsMessage: function() {
                    return p
                },
                updateGamingStats: function() {
                    return E
                }
            });
            var s = n("872717"),
                i = n("295426"),
                a = n("819689"),
                l = n("529805"),
                r = n("42203"),
                u = n("474643"),
                c = n("377253"),
                o = n("659500"),
                d = n("49111");

            function h(e) {
                s.default.post({
                    url: d.Endpoints.INITIATE_CHANNEL_PROMPTS,
                    body: {
                        guild_ids: e
                    }
                })
            }

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT;
                s.default.post({
                    url: d.Endpoints.FORCE_SEND_PROMPT(e),
                    body: {
                        prompt_type: t
                    }
                })
            }
            async function p(e, t, n) {
                await s.default.post({
                    url: d.Endpoints.SEND_GAMING_STATS(t),
                    body: {
                        message_reference: {
                            guild_id: e,
                            channel_id: t,
                            message_id: n
                        }
                    }
                }), g(t)
            }
            async function E(e) {
                let t = await s.default.patch({
                    url: d.Endpoints.UPDATE_GAMING_STATS(e.channel_id, e.id)
                });
                if (null != t.text && "" !== t.text) {
                    let n = r.default.getChannel(e.channel_id);
                    null != n && ((0, l.createPendingReply)({
                        channel: n,
                        message: e,
                        shouldMention: !1,
                        showMentionToggle: !1
                    }), g(n.id)), i.default.saveDraft(e.channel_id, t.text, u.DraftType.ChannelMessage)
                }
            }

            function g(e) {
                let t = c.default.getMessages(e);
                t.hasMoreAfter ? a.default.jumpToPresent(e, d.MAX_MESSAGES_PER_CHANNEL) : o.ComponentDispatch.dispatch(d.ComponentActions.SCROLLTO_PRESENT)
            }
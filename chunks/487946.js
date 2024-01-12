            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("759843"),
                i = n("627929"),
                r = n("233069"),
                a = n("271938"),
                o = n("599110"),
                d = n("840707"),
                u = n("9294"),
                l = n("91366"),
                f = n("49111");

            function _(e) {
                let t = null;
                if (null != e && null != e.channel) {
                    let n = e.channel;
                    t = e.target_type === l.InviteTargetTypes.STREAM ? f.LoggingInviteTypes.STREAM : e.target_type === l.InviteTargetTypes.EMBEDDED_APPLICATION ? f.LoggingInviteTypes.APPLICATION : (0, r.isMultiUserDM)(n.type) ? f.LoggingInviteTypes.GDM_INVITE : null == n || (0, r.isPrivate)(n.type) ? f.LoggingInviteTypes.FRIEND_INVITE : f.LoggingInviteTypes.SERVER_INVITE
                }
                return t
            }

            function c(e, t, n) {
                o.default.track(f.AnalyticEvents.INVITE_OPENED, {
                    invite_code: e
                });
                let r = (0, u.parseExtraDataFromInviteKey)(e),
                    l = {
                        ...n,
                        with_counts: !0,
                        with_expiration: !0,
                        guild_scheduled_event_id: r.guildScheduledEventId
                    };
                return d.default.get({
                    url: f.Endpoints.INVITE(r.baseCode),
                    query: l,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: s.NetworkActionNames.INVITE_RESOLVE,
                        properties: e => {
                            var s, o, d, u, l, c;
                            let g = e.body,
                                m = (null === (s = e.body) || void 0 === s ? void 0 : s.code) === f.AbortCodes.USER_BANNED;
                            return (0, i.exact)({
                                resolved: e.ok,
                                guild_id: null == g ? void 0 : null === (o = g.guild) || void 0 === o ? void 0 : o.id,
                                channel_id: null == g ? void 0 : null === (d = g.channel) || void 0 === d ? void 0 : d.id,
                                channel_type: null == g ? void 0 : null === (u = g.channel) || void 0 === u ? void 0 : u.type,
                                inviter_id: null == g ? void 0 : null === (l = g.inviter) || void 0 === l ? void 0 : l.id,
                                code: r.baseCode,
                                input_value: null == n ? void 0 : n.inputValue,
                                location: t,
                                authenticated: a.default.isAuthenticated(),
                                size_total: null == g ? void 0 : g.approximate_member_count,
                                size_online: null == g ? void 0 : g.approximate_presence_count,
                                destination_user_id: null == g ? void 0 : null === (c = g.target_user) || void 0 === c ? void 0 : c.id,
                                invite_type: _(g),
                                user_banned: m
                            })
                        }
                    }
                }).then(s => {
                    let i = s.body;
                    return null != t && o.default.track(f.AnalyticEvents.INVITE_RESOLVED, {
                        resolved: !0,
                        guild_id: null != i.guild ? i.guild.id : null,
                        channel_id: null != i.channel ? i.channel.id : null,
                        channel_type: null != i.channel ? i.channel.type : null,
                        inviter_id: i.inviter ? i.inviter.id : null,
                        code: r.baseCode,
                        input_value: null == n ? void 0 : n.inputValue,
                        location: t,
                        authenticated: a.default.isAuthenticated(),
                        size_total: i.approximate_member_count,
                        size_online: i.approximate_presence_count,
                        destination_user_id: null != i.target_user ? i.target_user.id : null,
                        invite_type: _(i)
                    }, {
                        flush: !0
                    }), {
                        invite: i,
                        code: e
                    }
                }, s => {
                    let i = null != s.body && s.body.code === f.AbortCodes.USER_BANNED;
                    if (null != t) {
                        var d, u;
                        o.default.track(f.AnalyticEvents.INVITE_RESOLVED, {
                            resolved: !1,
                            code: r.baseCode,
                            input_value: null == n ? void 0 : n.inputValue,
                            location: t,
                            authenticated: a.default.isAuthenticated(),
                            user_banned: i,
                            error_code: null === (d = s.body) || void 0 === d ? void 0 : d.code,
                            error_message: null === (u = s.body) || void 0 === u ? void 0 : u.message
                        }, {
                            flush: !0
                        })
                    }
                    return {
                        invite: null,
                        code: e,
                        banned: i
                    }
                })
            }
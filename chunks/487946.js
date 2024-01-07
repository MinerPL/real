            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("759843"),
                a = n("627929"),
                l = n("233069"),
                s = n("271938"),
                r = n("599110"),
                u = n("840707"),
                o = n("9294"),
                d = n("91366"),
                c = n("49111");

            function _(e) {
                let t = null;
                if (null != e && null != e.channel) {
                    let n = e.channel;
                    t = e.target_type === d.InviteTargetTypes.STREAM ? c.LoggingInviteTypes.STREAM : e.target_type === d.InviteTargetTypes.EMBEDDED_APPLICATION ? c.LoggingInviteTypes.APPLICATION : (0, l.isMultiUserDM)(n.type) ? c.LoggingInviteTypes.GDM_INVITE : null == n || (0, l.isPrivate)(n.type) ? c.LoggingInviteTypes.FRIEND_INVITE : c.LoggingInviteTypes.SERVER_INVITE
                }
                return t
            }

            function E(e, t, n) {
                r.default.track(c.AnalyticEvents.INVITE_OPENED, {
                    invite_code: e
                });
                let l = (0, o.parseExtraDataFromInviteKey)(e),
                    d = {
                        ...n,
                        with_counts: !0,
                        with_expiration: !0,
                        guild_scheduled_event_id: l.guildScheduledEventId
                    };
                return u.default.get({
                    url: c.Endpoints.INVITE(l.baseCode),
                    query: d,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: i.NetworkActionNames.INVITE_RESOLVE,
                        properties: e => {
                            var i, r, u, o, d, E;
                            let f = e.body,
                                h = (null === (i = e.body) || void 0 === i ? void 0 : i.code) === c.AbortCodes.USER_BANNED;
                            return (0, a.exact)({
                                resolved: e.ok,
                                guild_id: null == f ? void 0 : null === (r = f.guild) || void 0 === r ? void 0 : r.id,
                                channel_id: null == f ? void 0 : null === (u = f.channel) || void 0 === u ? void 0 : u.id,
                                channel_type: null == f ? void 0 : null === (o = f.channel) || void 0 === o ? void 0 : o.type,
                                inviter_id: null == f ? void 0 : null === (d = f.inviter) || void 0 === d ? void 0 : d.id,
                                code: l.baseCode,
                                input_value: null == n ? void 0 : n.inputValue,
                                location: t,
                                authenticated: s.default.isAuthenticated(),
                                size_total: null == f ? void 0 : f.approximate_member_count,
                                size_online: null == f ? void 0 : f.approximate_presence_count,
                                destination_user_id: null == f ? void 0 : null === (E = f.target_user) || void 0 === E ? void 0 : E.id,
                                invite_type: _(f),
                                user_banned: h
                            })
                        }
                    }
                }).then(i => {
                    let a = i.body;
                    return null != t && r.default.track(c.AnalyticEvents.INVITE_RESOLVED, {
                        resolved: !0,
                        guild_id: null != a.guild ? a.guild.id : null,
                        channel_id: null != a.channel ? a.channel.id : null,
                        channel_type: null != a.channel ? a.channel.type : null,
                        inviter_id: a.inviter ? a.inviter.id : null,
                        code: l.baseCode,
                        input_value: null == n ? void 0 : n.inputValue,
                        location: t,
                        authenticated: s.default.isAuthenticated(),
                        size_total: a.approximate_member_count,
                        size_online: a.approximate_presence_count,
                        destination_user_id: null != a.target_user ? a.target_user.id : null,
                        invite_type: _(a)
                    }, {
                        flush: !0
                    }), {
                        invite: a,
                        code: e
                    }
                }, i => {
                    let a = null != i.body && i.body.code === c.AbortCodes.USER_BANNED;
                    if (null != t) {
                        var u, o;
                        r.default.track(c.AnalyticEvents.INVITE_RESOLVED, {
                            resolved: !1,
                            code: l.baseCode,
                            input_value: null == n ? void 0 : n.inputValue,
                            location: t,
                            authenticated: s.default.isAuthenticated(),
                            user_banned: a,
                            error_code: null === (u = i.body) || void 0 === u ? void 0 : u.code,
                            error_message: null === (o = i.body) || void 0 === o ? void 0 : o.message
                        }, {
                            flush: !0
                        })
                    }
                    return {
                        invite: null,
                        code: e,
                        banned: a
                    }
                })
            }
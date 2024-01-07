            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                },
                isRawMessageMentioned: function() {
                    return r
                },
                isMentioned: function() {
                    return u
                }
            });
            var i = n("42203"),
                a = n("26989"),
                l = n("305961");

            function s(e) {
                let {
                    message: t,
                    userId: n,
                    suppressEveryone: i = !1,
                    suppressRoles: a = !1
                } = e;
                return u({
                    userId: n,
                    channelId: t.channel_id,
                    mentionEveryone: t.mentionEveryone,
                    mentionUsers: t.mentions,
                    mentionRoles: t.mentionRoles,
                    suppressEveryone: i,
                    suppressRoles: a
                })
            }

            function r(e) {
                var t, n, i, a;
                let {
                    rawMessage: l,
                    userId: s,
                    suppressEveryone: r = !1,
                    suppressRoles: o = !1
                } = e;
                return u({
                    userId: s,
                    channelId: l.channel_id,
                    mentionEveryone: null !== (n = l.mention_everyone) && void 0 !== n && n,
                    mentionUsers: null !== (i = null === (t = l.mentions) || void 0 === t ? void 0 : t.map(e => e.id)) && void 0 !== i ? i : [],
                    mentionRoles: null !== (a = l.mention_roles) && void 0 !== a ? a : [],
                    suppressEveryone: r,
                    suppressRoles: o
                })
            }

            function u(e) {
                let {
                    userId: t,
                    channelId: n,
                    mentionEveryone: s,
                    mentionUsers: r,
                    mentionRoles: u,
                    suppressEveryone: o = !1,
                    suppressRoles: d = !1
                } = e;
                if (s && !o || r.includes(t)) return !0;
                if (d || null == u || 0 === u.length) return !1;
                let c = i.default.getChannel(n);
                if (null == c) return !1;
                let _ = c.getGuildId();
                if (null == _) return !1;
                let E = l.default.getGuild(_);
                if (null == E) return !1;
                let f = a.default.getMember(_, t);
                return null != f && u.some(e => f.roles.includes(e))
            }
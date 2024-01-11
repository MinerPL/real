            "use strict";
            n.r(t), n.d(t, {
                trackMessageNotificationTimestamps: function() {
                    return u
                },
                default: function() {
                    return I
                }
            });
            var i = n("446674"),
                r = n("913144"),
                s = n("26989"),
                o = n("282109"),
                l = n("697218");

            function u(e, t) {
                var n;
                let i = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
                    u = o.default.isSuppressEveryoneEnabled(t),
                    a = o.default.isSuppressRolesEnabled(t),
                    d = null != e.mentions && e.mentions.some(e => e.id === i),
                    c = null == t || null == i ? null : s.default.getMember(t, i),
                    _ = null != e.mention_roles && null != c && null != c.roles && e.mention_roles.some(e => c.roles.includes(e));
                r.default.dispatch({
                    type: "MESSAGE_NOTIFICATION_SHOWN",
                    guildId: t,
                    mentioned: d,
                    roleMentioned: _ && !a,
                    everyoneMentioned: !0 === e.mention_everyone && !u
                })
            }
            let a = null,
                d = null,
                c = null,
                _ = null,
                f = {},
                E = {},
                h = {},
                p = {};
            class g extends i.default.Store {
                getGlobalStats() {
                    let e = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
                    return {
                        approx_seconds_since_last_notification: e(a),
                        approx_seconds_since_last_mention: e(d),
                        approx_seconds_since_last_role_mention: e(c),
                        approx_seconds_since_last_everyone_mention: e(_)
                    }
                }
                getStats(e) {
                    let t = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
                    return {
                        approx_seconds_since_last_notification: t(a),
                        approx_seconds_since_last_mention: t(d),
                        approx_seconds_since_last_role_mention: t(c),
                        approx_seconds_since_last_everyone_mention: t(_),
                        approx_seconds_since_last_guild_notification: null == e ? null : t(f[e]),
                        approx_seconds_since_last_guild_mention: null == e ? null : t(E[e]),
                        approx_seconds_since_last_guild_role_mention: null == e ? null : t(p[e]),
                        approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(h[e])
                    }
                }
            }
            var I = new g(r.default, {
                CONNECTION_OPEN: function() {
                    let e = e => null != e && Date.now() - e < 6e4;
                    for (let t in !e(a) && (a = null), !e(d) && (d = null), !e(c) && (c = null), !e(_) && (_ = null), f) !e(f[t]) && delete f[t];
                    for (let t in E) !e(E[t]) && delete E[t];
                    for (let t in p) !e(p[t]) && delete p[t];
                    for (let t in h) !e(h[t]) && delete h[t]
                },
                MESSAGE_NOTIFICATION_SHOWN: function(e) {
                    let {
                        guildId: t,
                        mentioned: n,
                        roleMentioned: i,
                        everyoneMentioned: r
                    } = e, s = Date.now();
                    a = s, null != t && (f[t] = s), n && (d = s, null != t && (E[t] = s)), i && (c = s, null != t && (p[t] = s)), r && (_ = s, null != t && (h[t] = s))
                }
            })
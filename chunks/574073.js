            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                },
                useNullableMessageAuthor: function() {
                    return E
                },
                getMessageAuthor: function() {
                    return f
                },
                useNullableUserAuthor: function() {
                    return h
                },
                getUserAuthor: function() {
                    return p
                }
            });
            var i = n("627445"),
                a = n.n(i),
                l = n("446674"),
                s = n("42203"),
                r = n("26989"),
                u = n("305961"),
                o = n("27618"),
                d = n("697218"),
                c = n("158998");

            function _(e) {
                let t = E(e);
                return a(null != t, "Result cannot be null because the message is not null"), t
            }

            function E(e) {
                var t;
                let n = (0, l.useStateFromStores)([s.default], () => null == e ? null : s.default.getChannel(e.channel_id)),
                    i = null == e ? void 0 : null === (t = e.author) || void 0 === t ? void 0 : t.id,
                    a = null == n ? void 0 : n.guild_id,
                    _ = (0, l.useStateFromStores)([r.default], () => null == a || null == i ? null : r.default.getMember(a, i)),
                    E = (0, l.useStateFromStores)([d.default], () => d.default.getUser(i), [i]),
                    f = c.default.useName((null == e ? void 0 : e.author.bot) ? null == e ? void 0 : e.author : E),
                    h = (0, l.useStateFromStores)([u.default], () => u.default.getGuild(a)),
                    p = (0, l.useStateFromStores)([o.default], () => null != i && (null == n ? void 0 : n.isPrivate()) ? o.default.getNickname(i) : null);
                return null == e ? null : T({
                    user: e.author,
                    channel: n,
                    guild: h,
                    userName: f,
                    member: _,
                    friendNickname: p
                })
            }

            function f(e) {
                let t = s.default.getChannel(e.channel_id);
                return p(e.author, t)
            }

            function h(e, t) {
                let n = null == e ? void 0 : e.id,
                    i = null == t ? void 0 : t.guild_id,
                    a = (0, l.useStateFromStores)([r.default], () => null == i || null == n ? null : r.default.getMember(i, n)),
                    s = (0, l.useStateFromStores)([u.default], () => u.default.getGuild(i)),
                    d = (0, l.useStateFromStores)([o.default], () => null != n && (null == t ? void 0 : t.isPrivate()) ? o.default.getNickname(n) : null),
                    _ = c.default.useName(e);
                return T({
                    user: e,
                    channel: t,
                    guild: s,
                    member: a,
                    userName: _,
                    friendNickname: d
                })
            }

            function p(e, t) {
                let n = null == e ? void 0 : e.id,
                    i = null == t ? void 0 : t.guild_id,
                    a = u.default.getGuild(i),
                    l = null == i || null == n ? null : r.default.getMember(i, n),
                    s = null != n && null != t && t.isPrivate() ? o.default.getNickname(n) : null;
                return T({
                    user: e,
                    channel: t,
                    guild: a,
                    member: l,
                    friendNickname: s
                })
            }

            function T(e) {
                var t, n, i;
                let {
                    user: a,
                    channel: l,
                    guild: s,
                    member: r,
                    userName: u,
                    friendNickname: o
                } = e, d = null == a ? "???" : null != u ? u : c.default.getName(a);
                return (null == a ? void 0 : a.id) == null || null == l ? {
                    nick: d,
                    colorString: void 0
                } : (null == s ? void 0 : s.id) == null ? {
                    nick: null != o ? o : d,
                    colorString: void 0
                } : null == r ? {
                    nick: d,
                    colorString: void 0
                } : {
                    nick: null !== (n = r.nick) && void 0 !== n ? n : d,
                    colorString: null !== (i = r.colorString) && void 0 !== i ? i : void 0,
                    colorRoleName: null != r.colorRoleId ? null == s ? void 0 : null === (t = s.roles[r.colorRoleId]) || void 0 === t ? void 0 : t.name : void 0,
                    iconRoleId: r.iconRoleId,
                    guildMemberAvatar: r.avatar
                }
            }
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var i = n("132710"),
                a = n.n(i),
                l = n("203288"),
                s = n("679653"),
                r = n("848848"),
                u = n("361572"),
                o = n("42203"),
                d = n("305961"),
                c = n("957255"),
                _ = n("27618"),
                E = n("697218"),
                f = n("315102"),
                h = n("404008"),
                p = n("159885"),
                T = n("82300"),
                C = n("290689"),
                m = n("49111"),
                S = n("782340");
            let I = e => {
                let t = o.default.getChannel(e);
                return null == t ? void 0 : t.getGuildId()
            };

            function g(e) {
                return {
                    type: "guild",
                    guildId: e.id,
                    content: (0, p.truncateText)(e.name, 32),
                    icon: f.default.getGuildIconURL({
                        id: e.id,
                        icon: e.icon,
                        size: 40
                    })
                }
            }

            function A(e, t) {
                let n;
                let i = y((0, p.truncateText)(e.name, 32));
                return {
                    type: "channel",
                    content: [n = "italics" === t ? {
                        type: "em",
                        content: [i]
                    } : i],
                    channelType: e.type,
                    iconType: e.iconType
                }
            }

            function N(e) {
                return {
                    type: "channel",
                    content: [y("")],
                    iconType: e ? "post" : "message"
                }
            }

            function O(e, t) {
                var n;
                let i = o.default.getChannel(e),
                    a = (0, r.getChannelRoleSubscriptionStatus)(e, o.default, l.default, c.default).isSubscriptionGated,
                    d = null !== (n = (0, h.getMentionIconType)(i)) && void 0 !== n ? n : "text";
                if (null != t) {
                    let n = t.find(t => t.id === e);
                    if (null != n) return {
                        type: n.type,
                        id: n.id,
                        guildId: n.guild_id,
                        name: n.name,
                        isDm: null != i && i.isPrivate(),
                        isForumPost: null != i && i.isForumPost(),
                        isMentionable: !0,
                        canViewChannel: !0,
                        roleSubscriptionGated: a,
                        iconType: d,
                        parentId: null == i ? void 0 : i.parent_id
                    }
                }
                return null != i ? {
                    type: i.type,
                    id: i.id,
                    guildId: i.guild_id,
                    name: (0, s.computeChannelName)(i, E.default, _.default),
                    isDm: i.isPrivate(),
                    isForumPost: i.isForumPost(),
                    isMentionable: (0, T.isChannelTypeMentionable)(i.type),
                    canViewChannel: (0, u.canViewChannel)(i),
                    roleSubscriptionGated: a,
                    iconType: d,
                    parentId: i.parent_id
                } : null
            }

            function R(e) {
                return {
                    type: "link",
                    content: [{
                        type: "text",
                        content: e
                    }],
                    target: e,
                    title: void 0
                }
            }

            function y(e) {
                return {
                    type: "text",
                    content: e
                }
            }

            function v(e, t, n, i, a) {
                let l = d.default.getGuild(e),
                    s = (null == l ? void 0 : l.id) === i;
                return {
                    type: "channelMention",
                    guildId: e,
                    channelId: t,
                    messageId: n,
                    originalLink: a,
                    inContent: null == l || s ? null : [g(l)],
                    content: [A({
                        name: S.default.Messages.UNKNOWN_CHANNEL,
                        type: m.ChannelTypes.UNKNOWN,
                        iconType: "text"
                    }, "italics")]
                }
            }

            function M(e, t, n, i) {
                if (!e.canViewChannel) return function(e, t) {
                    let n = {
                        type: "channel",
                        content: [y(e.roleSubscriptionGated ? e.name : S.default.Messages.NO_ACCESS)],
                        channelType: e.roleSubscriptionGated ? e.type : m.ChannelTypes.UNKNOWN,
                        iconType: "locked"
                    };
                    return {
                        type: "channelMention",
                        guildId: e.guildId,
                        channelId: e.id,
                        messageId: t,
                        inContent: null,
                        content: [n]
                    }
                }(e, t);
                if (!e.isMentionable) return y("#".concat(e.name));
                let a = {
                        type: "channelMention",
                        channelId: e.id,
                        guildId: e.guildId,
                        messageId: t,
                        originalLink: i
                    },
                    l = d.default.getGuild(e.guildId);
                if (null == l) {
                    var s;
                    if (e.isDm) return {
                        ...a,
                        guildId: m.ME,
                        inContent: [A(e)],
                        content: [N(!1)]
                    };
                    return null != (s = i) ? R(s) : y("#".concat(S.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER))
                }
                let r = e.guildId === n;
                return {
                    ...a,
                    ... function(e, t, n, i) {
                        let a = g(e),
                            l = A(t),
                            s = N(t.isForumPost);
                        if (n && i) {
                            if (t.isForumPost) {
                                let e = o.default.getChannel(t.parentId);
                                if (null != e) {
                                    var r;
                                    return {
                                        inContent: [A({
                                            name: e.name,
                                            type: e.type,
                                            iconType: null !== (r = (0, h.getMentionIconType)(e)) && void 0 !== r ? r : "forum"
                                        })],
                                        content: [l]
                                    }
                                }
                            }
                            return {
                                inContent: [l],
                                content: [s]
                            }
                        }
                        if (n && !i) return {
                            inContent: null,
                            content: [l]
                        };
                        if (!n && i) return {
                            inContent: [a],
                            content: [t.isForumPost ? l : s]
                        };
                        else if (!n && !i) return {
                            inContent: [a],
                            content: [l]
                        }
                    }(l, e, r, null != t)
                }
            }
            let D = {
                    order: C.default.order,
                    requiredFirstCharacters: ["<"],
                    match: e => /^<#(\d+)>/.exec(e),
                    parse(e, t, n) {
                        let i = e[1];
                        if (n.returnMentionIds) return {
                            type: "channelMention",
                            id: i
                        };
                        let a = O(i, n.mentionChannels);
                        return null == a ? v(null, i, null, I(n.channelId)) : M(a, null, I(n.channelId))
                    }
                },
                L = {
                    order: a.defaultRules.url.order - .5,
                    requiredFirstCharacters: ["h"],
                    match(e) {
                        let t = u.CHANNEL_OR_MESSAGES_URL_RE.exec(e);
                        return null != t && (null != t[2] && /\D/.test(t[2]) || null != t[3] && /\D/.test(t[3])) ? null : t
                    },
                    parse(e, t, n) {
                        let i = e[0],
                            a = e[1],
                            l = e[2],
                            s = e[3];
                        if (null == l) return R(i);
                        let r = O(l, null);
                        return null == r ? v(a, l, s, I(n.channelId), i) : M(r, s, I(n.channelId), i)
                    }
                },
                U = {
                    order: a.defaultRules.url.order - .5,
                    requiredFirstCharacters: ["h"],
                    match: e => u.MEDIA_POST_URL_RE.exec(e),
                    parse(e, t, n) {
                        let i = e[0],
                            a = e[1],
                            l = e[2],
                            s = e[3],
                            r = e[4];
                        if (null == l || null == s) return R(i);
                        let u = O(s, null);
                        if (null != u) return M(u, r, I(n.channelId), i);
                        let o = O(l, null);
                        return null != o ? M(o, r, I(n.channelId), i) : v(a, l, r, I(n.channelId), i)
                    }
                };
            var P = {
                channelMention: D,
                channelOrMessageUrl: L,
                mediaPostLink: U
            }
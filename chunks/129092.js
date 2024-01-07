            "use strict";
            n.r(t), n.d(t, {
                WELCOME_MESSAGE_MIN_LENGTH: function() {
                    return o
                },
                WELCOME_MESSAGE_MAX_LENGTH: function() {
                    return s
                },
                NEW_MEMBER_ACTION_TITLE_MIN_LENGTH: function() {
                    return c
                },
                NEW_MEMBER_ACTION_TITLE_MAX_LENGTH: function() {
                    return E
                },
                NEW_MEMBER_ACTION_MAX: function() {
                    return f
                },
                RESOURCE_CHANNEL_TITLE_MIN_LENGTH: function() {
                    return _
                },
                RESOURCE_CHANNEL_TITLE_MAX_LENGTH: function() {
                    return N
                },
                RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH: function() {
                    return h
                },
                RESOURCE_CHANNEL_MAX: function() {
                    return T
                },
                NewMemberActionTypes: function() {
                    return u
                },
                newMemberActionFromServer: function() {
                    return S
                },
                resourceChannelFromServer: function() {
                    return m
                },
                settingsFromServer: function() {
                    return v
                },
                settingsToServer: function() {
                    return C
                },
                actionsFromServer: function() {
                    return g
                },
                isWelcomeMessageEmpty: function() {
                    return R
                },
                isSettingsEmpty: function() {
                    return D
                },
                isSettingsValid: function() {
                    return I
                },
                isChannelValidForResourceChannel: function() {
                    return M
                },
                isChannelValidForNewMemberAction: function() {
                    return A
                }
            });
            var l, u, r = n("42203"),
                i = n("449008"),
                a = n("991170"),
                d = n("49111");
            let o = 7,
                s = 300,
                c = 7,
                E = 60,
                f = 5,
                _ = 1,
                N = 30,
                h = 200,
                T = 7;

            function S(e) {
                var t;
                return {
                    channelId: e.channel_id,
                    actionType: e.action_type,
                    title: e.title,
                    description: e.description,
                    emoji: null == e.emoji ? null : {
                        id: e.emoji.id,
                        name: e.emoji.name,
                        animated: e.emoji.animated
                    },
                    icon: null !== (t = e.icon) && void 0 !== t ? t : null
                }
            }

            function m(e) {
                var t, n;
                return {
                    channelId: e.channel_id,
                    title: e.title,
                    description: null !== (t = e.description) && void 0 !== t ? t : "",
                    emoji: null == e.emoji ? null : {
                        id: e.emoji.id,
                        name: e.emoji.name,
                        animated: e.emoji.animated
                    },
                    icon: null !== (n = e.icon) && void 0 !== n ? n : null
                }
            }

            function v(e) {
                if (null == e) return null;
                let {
                    welcome_message: t,
                    new_member_actions: n,
                    resource_channels: l,
                    enabled: u
                } = e, a = {
                    authorIds: t.author_ids,
                    message: t.message
                }, d = n.filter(e => (0, i.isNotNullish)(r.default.getChannel(e.channel_id))).map(S), o = l.filter(e => (0, i.isNotNullish)(r.default.getChannel(e.channel_id))).map(m);
                return {
                    welcomeMessage: a,
                    newMemberActions: d,
                    resourceChannels: o,
                    enabled: u
                }
            }

            function C(e, t) {
                var n, l;
                if (null == t) return null;
                let {
                    welcomeMessage: u,
                    newMemberActions: a,
                    resourceChannels: d,
                    enabled: o
                } = t, s = {
                    author_ids: null !== (n = null == u ? void 0 : u.authorIds) && void 0 !== n ? n : [],
                    message: null !== (l = null == u ? void 0 : u.message) && void 0 !== l ? l : ""
                }, c = (null != a ? a : []).filter(e => (0, i.isNotNullish)(r.default.getChannel(e.channelId))).map(e => {
                    var t, n, l, u, r, i, a;
                    return {
                        channel_id: e.channelId,
                        action_type: e.actionType,
                        title: e.title,
                        description: e.description,
                        emoji: {
                            id: null !== (u = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== u ? u : void 0,
                            name: null !== (r = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : void 0,
                            animated: null !== (i = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== i ? i : void 0
                        },
                        icon: null !== (a = e.icon) && void 0 !== a ? a : void 0
                    }
                }), E = (null != d ? d : []).filter(e => (0, i.isNotNullish)(r.default.getChannel(e.channelId))).map(e => {
                    var t, n, l, u, r, i, a;
                    return {
                        channel_id: e.channelId,
                        title: e.title,
                        description: e.description,
                        emoji: {
                            id: null !== (u = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== u ? u : void 0,
                            name: null !== (r = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : void 0,
                            animated: null !== (i = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== i ? i : void 0
                        },
                        icon: null !== (a = e.icon) && void 0 !== a ? a : void 0
                    }
                });
                return {
                    guild_id: e,
                    welcome_message: s,
                    new_member_actions: c,
                    resource_channels: E,
                    enabled: o
                }
            }(l = u || (u = {}))[l.VIEW = 0] = "VIEW", l[l.CHAT = 1] = "CHAT";
            let g = e => {
                if (null == e) return null;
                let t = {};
                for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
                return t
            };

            function R(e) {
                return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0
            }

            function D(e) {
                return null == e || !!R(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0
            }

            function I(e) {
                var t, n;
                return null != e && (!!D(e) || (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.message) != null && !(e.welcomeMessage.message.length < o) && (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0)
            }

            function M(e) {
                return e.type === d.ChannelTypes.GUILD_TEXT && !a.default.canEveryoneRole(d.Permissions.SEND_MESSAGES, e) && a.default.canEveryoneRole(d.Permissions.VIEW_CHANNEL, e)
            }

            function A(e) {
                switch (e.type) {
                    case d.ChannelTypes.GUILD_TEXT:
                    case d.ChannelTypes.GUILD_ANNOUNCEMENT:
                    case d.ChannelTypes.GUILD_FORUM:
                    case d.ChannelTypes.GUILD_MEDIA:
                        return a.default.canEveryoneRole(d.Permissions.VIEW_CHANNEL, e);
                    default:
                        return !1
                }
            }
            "use strict";
            n.r(t), n.d(t, {
                useGuildOnboardingSettingsAvailable: function() {
                    return _
                },
                isGuildOnboardingSettingsAvailable: function() {
                    return S
                },
                isBlockedByOnboarding: function() {
                    return m
                },
                getChannelCoverageForOnboarding: function() {
                    return g
                },
                useChannelCoverageForOnboarding: function() {
                    return I
                },
                isChattableChannelId: function() {
                    return C
                },
                isChattableChannel: function() {
                    return v
                },
                useIsChattableChannel: function() {
                    return A
                },
                getMinimumSetOfDefaultChannelIds: function() {
                    return R
                },
                getChattableDefaultChannels: function() {
                    return D
                },
                useChattableDefaultChannels: function() {
                    return y
                },
                getSelectedRoleIds: function() {
                    return P
                },
                getSelectedChannelIds: function() {
                    return L
                }
            }), n("702976"), n("222007"), n("808653"), n("424973"), n("834022");
            var i = n("446674"),
                r = n("656038"),
                s = n("42203"),
                a = n("923959"),
                o = n("305961"),
                l = n("957255"),
                u = n("568734"),
                c = n("449008"),
                d = n("991170"),
                f = n("648747"),
                E = n("49111"),
                h = n("657944");
            let p = new Date(16824888e5);

            function _(e) {
                let t = (0, i.useStateFromStores)([o.default], () => o.default.getGuild(e)),
                    n = !!(null == t ? void 0 : t.hasFeature(E.GuildFeatures.COMMUNITY)),
                    r = l.default.can(E.Permissions.MANAGE_GUILD, t),
                    s = l.default.can(E.Permissions.MANAGE_ROLES, t);
                return n && r && s
            }

            function S(e) {
                let t = o.default.getGuild(e),
                    n = !!(null == t ? void 0 : t.hasFeature(E.GuildFeatures.COMMUNITY)),
                    i = l.default.can(E.Permissions.MANAGE_GUILD, t),
                    r = l.default.can(E.Permissions.MANAGE_ROLES, t);
                return n && i && r
            }

            function m(e, t) {
                var n;
                if (null == e || !e.hasFeature(E.GuildFeatures.GUILD_ONBOARDING) || null == t || null == t.joinedAt || new Date(t.joinedAt) < p) return !1;
                let i = null !== (n = t.flags) && void 0 !== n ? n : 0;
                return u.hasFlag(i, h.GuildMemberFlags.STARTED_ONBOARDING) && !u.hasFlag(i, h.GuildMemberFlags.COMPLETED_ONBOARDING)
            }

            function T(e, t, n) {
                let i = new Set;
                e.forEach(e => {
                    e.options.forEach(e => {
                        var t;
                        null == e || null === (t = e.channelIds) || void 0 === t || t.forEach(e => {
                            i.add(e)
                        })
                    })
                }), t.forEach(e => i.add(e));
                let s = n.filter(e => !e.isCategory() && !e.isThread() && !(0, r.default)(e)),
                    a = s.filter(e => i.has(e.id) || null != e.parent_id && i.has(e.parent_id)),
                    o = s.filter(e => !i.has(e.id) && !(null != e.parent_id && i.has(e.parent_id)));
                return [a, o]
            }

            function g(e, t, n) {
                let i = a.default.getChannels(e);
                return T(t, n, i[0, a.GUILD_SELECTABLE_CHANNELS_KEY].map(e => {
                    let {
                        channel: t
                    } = e;
                    return t
                }))
            }

            function I(e, t, n) {
                let r = (0, i.useStateFromStores)([a.default], () => a.default.getChannels(e));
                return T(t, n, r[0, a.GUILD_SELECTABLE_CHANNELS_KEY].map(e => {
                    let {
                        channel: t
                    } = e;
                    return t
                }))
            }

            function C(e) {
                let t = s.default.getChannel(e);
                return v(t)
            }

            function v(e) {
                return !!(null != e && (0, f.canChannelBeDefault)(e.guild_id, e.id)) && (e.isForumChannel() ? d.default.canEveryoneRole(E.Permissions.SEND_MESSAGES_IN_THREADS, e) : d.default.canEveryoneRole(E.Permissions.SEND_MESSAGES, e))
            }

            function A(e) {
                let t = (0, i.useStateFromStores)([s.default], () => s.default.getChannel(e));
                return (0, c.isNotNullish)(t) && v(t)
            }

            function R(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
                    r = O(e, t).map(e => e.id).filter(i);
                return n.forEach(t => {
                    var n, s;
                    if (!t.required) return;
                    let a = O(e, null !== (s = null === (n = t.options[0]) || void 0 === n ? void 0 : n.channelIds) && void 0 !== s ? s : []).map(e => e.id),
                        o = t.options.reduce((t, n) => {
                            if (null == n.channelIds) return [];
                            let s = O(e, n.channelIds),
                                a = s.map(e => e.id).filter(e => i(e) && !r.includes(e));
                            return a.length < t.length ? a : t
                        }, a);
                    r.push(...o)
                }), r
            }

            function N(e, t) {
                let n = e.filter(e => {
                    let n = t.find(t => {
                        let {
                            channel: n
                        } = t;
                        return n.id === e
                    });
                    return v(null == n ? void 0 : n.channel)
                });
                return n
            }

            function O(e, t) {
                let n = a.default.getChannels(e),
                    i = n[a.GUILD_SELECTABLE_CHANNELS_KEY];
                return i.filter(e => {
                    let {
                        channel: n
                    } = e;
                    return (0, f.canChannelBeDefault)(n.guild_id, n.id) && (t.includes(n.id) && !n.isCategory() || !n.isThread() && null != n.parent_id && t.includes(n.parent_id))
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return t
                })
            }

            function D(e, t) {
                let n = O(e, t),
                    i = a.default.getChannels(e),
                    r = i[a.GUILD_SELECTABLE_CHANNELS_KEY],
                    s = N(n.map(e => {
                        let {
                            id: t
                        } = e;
                        return t
                    }), r);
                return [s, n]
            }

            function y(e, t) {
                let n = function(e, t) {
                        let n = (0, i.useStateFromStores)([a.default], () => a.default.getChannels(e)),
                            r = n[a.GUILD_SELECTABLE_CHANNELS_KEY];
                        return r.filter(e => {
                            let {
                                channel: n
                            } = e;
                            return (0, f.canChannelBeDefault)(n.guild_id, n.id) && (t.includes(n.id) && !n.isCategory() || !n.isThread() && null != n.parent_id && t.includes(n.parent_id))
                        }).map(e => {
                            let {
                                channel: t
                            } = e;
                            return t
                        })
                    }(e, t),
                    r = (0, i.useStateFromStores)([a.default], () => a.default.getChannels(e)),
                    s = r[a.GUILD_SELECTABLE_CHANNELS_KEY],
                    o = N(n.map(e => {
                        let {
                            id: t
                        } = e;
                        return t
                    }), s);
                return [o, n]
            }

            function P(e) {
                return new Set(e.map(e => e.roleIds).flat().filter(c.isNotNullish))
            }

            function L(e) {
                return new Set(e.map(e => e.channelIds).flat().filter(c.isNotNullish))
            }
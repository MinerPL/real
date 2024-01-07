            "use strict";
            n.r(t), n.d(t, {
                VoiceInThreadsExperiment: function() {
                    return S
                },
                useCanStartPublicThread: function() {
                    return E
                },
                computeCanStartPublicThread: function() {
                    return v
                },
                useCanStartPrivateThread: function() {
                    return T
                },
                useCanStartThread: function() {
                    return g
                },
                useCanViewThreadForMessage: function() {
                    return C
                },
                useHasActiveThreads: function() {
                    return _
                },
                useCanManageThread: function() {
                    return y
                },
                useCanUnarchiveThread: function() {
                    return b
                },
                canUnarchiveThread: function() {
                    return I
                },
                useIsActiveChannelOrUnarchivableThread: function() {
                    return x
                },
                getIsActiveChannelOrUnarchivableThread: function() {
                    return R
                },
                computeIsReadOnlyThread: function() {
                    return P
                },
                useIsThreadModerator: function() {
                    return D
                },
                useCanJoinThreadVoice: function() {
                    return L
                },
                useIsNonModInLockedThread: function() {
                    return w
                }
            });
            var r = n("917351"),
                s = n.n(r),
                a = n("316693"),
                i = n("446674"),
                o = n("296892"),
                l = n("889014"),
                u = n("913491"),
                d = n("233069"),
                c = n("271938"),
                f = n("42203"),
                h = n("957255"),
                m = n("401690"),
                p = n("49111");
            let S = (0, o.default)({
                id: "2022-07_voice_in_threads",
                label: "Voice in Threads",
                kind: "guild",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "On",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function E(e, t) {
                let n = (0, i.useStateFromStores)([h.default], () => {
                    let t = e.isForumLikeChannel() ? p.Permissions.SEND_MESSAGES : a.default.combine(p.Permissions.CREATE_PUBLIC_THREADS, p.Permissions.READ_MESSAGE_HISTORY);
                    return h.default.can(t, e)
                }, [e]);
                return A(n, e, t)
            }

            function v(e, t) {
                let n = e.isForumLikeChannel() ? p.Permissions.SEND_MESSAGES : a.default.combine(p.Permissions.CREATE_PUBLIC_THREADS, p.Permissions.READ_MESSAGE_HISTORY),
                    r = h.default.can(n, e);
                return A(r, e, t)
            }

            function T(e) {
                let t = (0, i.useStateFromStores)([h.default], () => h.default.can(a.default.combine(p.Permissions.CREATE_PRIVATE_THREADS), e), [e]);
                return e.type === p.ChannelTypes.GUILD_TEXT && A(t, e)
            }

            function g(e) {
                let t = E(e),
                    n = T(e);
                return t || n
            }

            function A(e, t, n) {
                return !(__OVERLAY__ || !e || !d.THREADED_CHANNEL_TYPES.has(t.type) || null != n && (n.hasFlag(p.MessageFlags.HAS_THREAD) || (0, u.default)(n))) && !0
            }

            function C(e) {
                let t = (0, i.useStateFromStores)([f.default], () => f.default.getChannel(e.id), [e]),
                    n = (0, i.useStateFromStores)([h.default], () => h.default.can(p.Permissions.VIEW_CHANNEL, t), [t]);
                return function(e, t, n) {
                    return !!t.hasFlag(p.MessageFlags.HAS_THREAD) && null != n && !!e || !1
                }(n, e, t)
            }

            function _(e) {
                return (0, i.useStateFromStoresObject)([m.default, h.default], () => {
                    let t = m.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
                        n = m.default.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
                        r = m.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
                        a = s(n).some(e => h.default.can(p.Permissions.VIEW_CHANNEL, e.channel)),
                        i = s(t).some(e => !(e.channel.id in n) && h.default.can(p.Permissions.VIEW_CHANNEL, e.channel)),
                        o = s(r).some(e => h.default.can(p.Permissions.VIEW_CHANNEL, e));
                    return {
                        hasActiveThreads: a || i || o,
                        hasMoreActiveThreads: o || i
                    }
                })
            }

            function y(e) {
                let t = (0, i.useStateFromStores)([f.default], () => f.default.getChannel(null == e ? void 0 : e.parent_id)),
                    n = (0, i.useStateFromStores)([h.default], () => null != t && h.default.can(p.Permissions.MANAGE_THREADS, t), [t]),
                    r = (0, i.useStateFromStores)([c.default], () => c.default.getId());
                return !!(null != e && null != t && e.isThread()) && (!!n || !e.isLockedThread() && (e.ownerId === r || !1))
            }

            function M(e, t) {
                return null != e && t.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e)
            }

            function N(e, t, n) {
                var r;
                return !!(null != e && e.isThread()) && ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked) ? n : t)
            }

            function b(e) {
                let t = (0, i.useStateFromStores)([h.default], () => M(e, h.default)),
                    n = D(e);
                return N(e, t, n)
            }

            function I(e) {
                let t = M(e, h.default),
                    n = function(e) {
                        return j(e, h.default)
                    }(e);
                return N(e, t, n)
            }

            function x(e) {
                var t;
                let n = (0, i.useStateFromStores)([h.default], () => null != e && h.default.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e));
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n)
            }

            function R(e) {
                var t;
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && h.default.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e))
            }

            function P(e) {
                let t = h.default.can(p.Permissions.MANAGE_THREADS, e);
                return e.isArchivedLockedThread() && !t
            }

            function j(e, t) {
                return null != e && t.can(p.Permissions.MANAGE_THREADS, e)
            }

            function D(e) {
                return (0, i.useStateFromStores)([h.default], () => j(e, h.default))
            }

            function L(e) {
                let t = (0, l.default)(),
                    n = (0, i.useStateFromStores)([h.default], () => h.default.can(p.Permissions.CONNECT, e)),
                    r = x(e),
                    s = S.useExperiment({
                        guildId: e.guild_id,
                        location: "e791ea_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return !t && e.isVocalThread() && s && n && r
            }

            function w(e) {
                let t = D(e);
                return e.isLockedThread() && !t
            }
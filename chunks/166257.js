            "use strict";
            n.r(t), n.d(t, {
                ReactionLocations: function() {
                    return l
                },
                getReactors: function() {
                    return S
                },
                addReaction: function() {
                    return O
                },
                playBurstReaction: function() {
                    return p
                },
                removeAllReactions: function() {
                    return I
                },
                removeEmojiReactions: function() {
                    return M
                },
                removeReaction: function() {
                    return N
                },
                removeReactionWithConfirmation: function() {
                    return y
                }
            });
            var a, l, r = n("872717"),
                i = n("819855"),
                o = n("913144"),
                s = n("404118"),
                u = n("875978"),
                c = n("263024"),
                d = n("271938"),
                f = n("377253"),
                R = n("659500"),
                m = n("402671"),
                E = n("61069"),
                h = n("49111"),
                A = n("782340");

            function T(e, t, n) {
                let {
                    status: a,
                    body: l
                } = e;
                if (429 === a) return setTimeout(t, 1e3 * e.body.retry_after), !1;
                if (403 === a) switch (l && l.code) {
                    case h.AbortCodes.TOO_MANY_REACTIONS:
                        s.default.show({
                            title: A.default.Messages.TOO_MANY_REACTIONS_ALERT_HEADER,
                            body: A.default.Messages.TOO_MANY_REACTIONS_ALERT_BODY,
                            confirmText: A.default.Messages.OKAY
                        });
                        break;
                    case h.AbortCodes.REACTION_BLOCKED:
                        R.ComponentDispatch.dispatch(h.ComponentActions.SHAKE_APP, {
                            duration: 200,
                            intensity: 2
                        })
                } else if (!n.isRetry) return t(), !1;
                return !0
            }

            function g(e, t, n, a, l) {
                var r, i, s;
                o.default.dispatch({
                    type: e,
                    channelId: t,
                    messageId: n,
                    userId: null !== (r = null == l ? void 0 : l.userId) && void 0 !== r ? r : d.default.getId(),
                    emoji: a,
                    optimistic: !0,
                    burst: null !== (i = null == l ? void 0 : l.burst) && void 0 !== i && i,
                    colors: null !== (s = null == l ? void 0 : l.colors) && void 0 !== s ? s : []
                })
            }

            function _(e) {
                let {
                    channelId: t,
                    messageId: n,
                    emoji: a,
                    userId: l,
                    useTypeEndpoint: r = !1,
                    type: i = u.ReactionTypes.NORMAL
                } = e, o = null != a.id ? "".concat(a.name, ":").concat(a.id) : a.name;
                return null == l ? h.Endpoints.REACTIONS(t, n, o) : r ? h.Endpoints.REACTION_WITH_TYPE(t, n, o, l, i) : h.Endpoints.REACTION(t, n, o, l)
            }
            async function S(e) {
                let {
                    channelId: t,
                    messageId: n,
                    emoji: a,
                    limit: l,
                    after: i,
                    type: s
                } = e, u = await r.default.get({
                    url: _({
                        channelId: t,
                        messageId: n,
                        emoji: a
                    }),
                    query: {
                        limit: l,
                        after: i,
                        type: s
                    },
                    oldFormErrors: !0
                });
                return o.default.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: t,
                    messageId: n,
                    users: u.body,
                    emoji: a,
                    reactionType: s
                }), u.body
            }
            async function O(e, t, n) {
                let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Message",
                    l = arguments.length > 4 ? arguments[4] : void 0,
                    o = null != l && !!l.burst,
                    d = null != l && !!l.isRetry;
                if (!d && function(e, t, n, a) {
                        let l = f.default.getMessage(e, t);
                        return null != l && l.userHasReactedWithEmoji(n, a)
                    }(e, t, n, o)) {
                    s.default.show({
                        title: A.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_TITLE,
                        body: A.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_BODY,
                        confirmText: A.default.Messages.GOT_IT
                    });
                    return
                }
                let R = await C(n, o);
                g("MESSAGE_REACTION_ADD", e, t, n, {
                    burst: o,
                    colors: R
                }), await c.default.unarchiveThreadIfNecessary(e), r.default.put({
                    url: _({
                        channelId: e,
                        messageId: t,
                        emoji: n,
                        userId: "@me"
                    }),
                    query: {
                        location: a,
                        type: o ? u.ReactionTypes.BURST : u.ReactionTypes.NORMAL
                    },
                    oldFormErrors: !0
                }).then(() => {
                    o ? (i.AccessibilityAnnouncer.announce(A.default.Messages.BURST_REACTION_ADD_UNLIMITED_SUCCESS_A11Y.format({
                        name: n.name
                    })), E.default.triggerFullscreenAnimation({
                        channelId: e,
                        messageId: t,
                        emoji: {
                            ...n,
                            animated: !1
                        }
                    })) : i.AccessibilityAnnouncer.announce(A.default.Messages.REACTION_ADD_SUCCESS_A11Y.format({
                        name: n.name
                    }))
                }).catch(l => {
                    T(l, () => O(e, t, n, a, {
                        burst: o,
                        isRetry: !0
                    }), {
                        isRetry: d
                    }) && (g("MESSAGE_REACTION_REMOVE", e, t, n, {
                        burst: o
                    }), o ? i.AccessibilityAnnouncer.announce(A.default.Messages.BURST_REACTION_ADD_UNLIMITED_ERROR_A11Y.format({
                        name: n.name
                    })) : i.AccessibilityAnnouncer.announce(A.default.Messages.REACTION_ADD_ERROR_A11Y.format({
                        name: n.name
                    })))
                })
            }

            function p(e) {
                let {
                    channelId: t,
                    messageId: n,
                    emoji: a,
                    key: l
                } = e;
                o.default.dispatch({
                    type: "BURST_REACTION_EFFECT_PLAY",
                    channelId: t,
                    messageId: n,
                    emoji: a,
                    key: l
                })
            }
            async function I(e, t, n) {
                let a = null != n && !!n.isRetry;
                await c.default.unarchiveThreadIfNecessary(e), r.default.delete({
                    url: h.Endpoints.REMOVE_REACTIONS(e, t),
                    oldFormErrors: !0
                }).catch(n => {
                    T(n, () => I(e, t, {
                        isRetry: !0
                    }), {
                        isRetry: a
                    })
                })
            }
            async function M(e, t, n, a) {
                let l = null != a && !!a.isRetry;
                await c.default.unarchiveThreadIfNecessary(e);
                let i = null === n.id ? n.name : "".concat(n.name, ":").concat(n.id);
                r.default.delete({
                    url: h.Endpoints.REMOVE_EMOJI_REACTIONS(e, t, i),
                    oldFormErrors: !0
                }).catch(a => {
                    T(a, () => M(e, t, n, {
                        isRetry: !0
                    }), {
                        isRetry: l
                    })
                })
            }
            async function N(e, t, n, a) {
                let l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "Message",
                    o = arguments.length > 5 ? arguments[5] : void 0,
                    s = null != o && !!o.burst,
                    d = null != o && !!o.isRetry;
                g("MESSAGE_REACTION_REMOVE", e, t, n, {
                    userId: a,
                    burst: s
                }), await c.default.unarchiveThreadIfNecessary(e), r.default.delete({
                    url: _({
                        channelId: e,
                        messageId: t,
                        emoji: n,
                        userId: null != a ? a : "@me",
                        type: s ? u.ReactionTypes.BURST : u.ReactionTypes.NORMAL,
                        useTypeEndpoint: !0
                    }),
                    query: {
                        location: l,
                        burst: s
                    },
                    oldFormErrors: !0
                }).then(() => {
                    (null == o ? void 0 : o.burst) ? i.AccessibilityAnnouncer.announce(A.default.Messages.BURST_REACTION_REMOVE_SUCCESS_A11Y.format({
                        name: n.name
                    })): i.AccessibilityAnnouncer.announce(A.default.Messages.REACTION_REMOVE_SUCCESS_A11Y.format({
                        name: n.name
                    }))
                }).catch(async r => {
                    if (T(r, () => N(e, t, n, a, l, {
                            burst: s,
                            isRetry: !0
                        }), {
                            isRetry: d
                        })) {
                        let l = await C(n, s);
                        g("MESSAGE_REACTION_ADD", e, t, n, {
                            userId: a,
                            burst: s,
                            colors: l
                        }), (null == o ? void 0 : o.burst) ? i.AccessibilityAnnouncer.announce(A.default.Messages.BURST_REACTION_REMOVE_ERROR_A11Y.format({
                            name: n.name
                        })) : i.AccessibilityAnnouncer.announce(A.default.Messages.REACTION_REMOVE_ERROR_A11Y.format({
                            name: n.name
                        }))
                    }
                })
            }
            async function C(e, t) {
                let n = [];
                if (t) try {
                    n = await (0, m.getEmojiColors)(e)
                } catch {}
                return n
            }(a = l || (l = {})).MESSAGE = "Message", a.FORUM_TOOLBAR = "Forum Toolbar", a.MOBILE_MEDIA_VIEWER = "Mobile Media Viewer";

            function y(e) {
                let {
                    channelId: t,
                    messageId: n,
                    emoji: a,
                    reactionType: l,
                    userId: r,
                    location: i
                } = e, o = l === u.ReactionTypes.BURST;
                N(t, n, a, r, i, {
                    burst: o
                })
            }
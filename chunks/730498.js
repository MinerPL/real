            "use strict";
            n.r(t), n.d(t, {
                PrivateThreadMode: function() {
                    return i
                },
                usePrivateThreadMode: function() {
                    return v
                },
                getIsPrivate: function() {
                    return y
                },
                getDefaultThreadName: function() {
                    return D
                },
                useCreateThreadCommon: function() {
                    return R
                },
                createThread: function() {
                    return P
                },
                useCreateForumPostCommon: function() {
                    return L
                }
            }), n("424973"), n("222007");
            var i, l, a = n("884691"),
                s = n("872717"),
                o = n("913144"),
                r = n("404118"),
                u = n("295426"),
                d = n("819689"),
                c = n("81594"),
                p = n("670902"),
                f = n("867965"),
                m = n("884351"),
                I = n("804888"),
                _ = n("42203"),
                C = n("474643"),
                T = n("377253"),
                A = n("401848"),
                E = n("568734"),
                N = n("252862"),
                S = n("300322"),
                g = n("24337"),
                M = n("648564"),
                O = n("49111"),
                h = n("782340");

            function v(e) {
                let t = (0, S.useCanStartPublicThread)(e),
                    n = (0, S.useCanStartPrivateThread)(e);
                return n ? t ? 2 : 3 : 1
            }

            function y(e, t) {
                var n;
                if (3 === t) return !0;
                return null !== (n = e.isPrivate) && void 0 !== n && n
            }

            function D(e, t) {
                var n, i, l, a;
                let s = null == t ? null : T.default.getMessage(e.id, t),
                    o = null !== (l = null == s ? void 0 : null === (i = s.embeds) || void 0 === i ? void 0 : null === (n = i[0]) || void 0 === n ? void 0 : n.rawTitle) && void 0 !== l ? l : "";
                if ("" !== o) return o.length > 40 ? o.substring(0, 40) + "..." : o;
                {
                    let t = m.default.unparse(null !== (a = null == s ? void 0 : s.content) && void 0 !== a ? a : "", e.id, !0),
                        n = (0, g.default)(t.split("\n")[0], !0),
                        i = [];
                    for (;;) {
                        let e = n.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
                        if (null == e || null == e.index) {
                            i.push(n);
                            break
                        }
                        i.push(n.substring(0, e.index)), i.push(e[0]), n = n.substring(e.index + e[0].length)
                    }
                    let l = i[0];
                    for (let e = 1; e < i.length; e++) {
                        let t = l + i[e];
                        if (t.length > 40) break;
                        l = t
                    }
                    return l.length > 40 && (l = l.substring(0, 40) + "..."), l
                }
            }

            function R(e) {
                let {
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: o,
                    onThreadCreated: r,
                    useDefaultThreadName: p,
                    uploadHandler: f
                } = e;
                return a.useCallback(async (e, a, I) => {
                    var T;
                    let A = null == n,
                        E = y(i, l),
                        S = null !== (T = i.name) && void 0 !== T ? T : "";
                    if ("" === S && p) {
                        let e = D(t, n);
                        S = "" !== e ? e : h.default.Messages.THREAD
                    }
                    let g = (0, N.getAutoArchiveDuration)(t),
                        M = _.default.getChannel(n),
                        v = await U(t, () => {
                            let e = null != n ? O.Endpoints.CHANNEL_MESSAGE_THREADS(t.id, n) : O.Endpoints.CHANNEL_THREADS(t.id);
                            return s.default.post({
                                url: e,
                                body: {
                                    name: S,
                                    type: E ? O.ChannelTypes.PRIVATE_THREAD : t.type === O.ChannelTypes.GUILD_ANNOUNCEMENT ? O.ChannelTypes.ANNOUNCEMENT_THREAD : O.ChannelTypes.PUBLIC_THREAD,
                                    auto_archive_duration: g,
                                    location: o
                                }
                            })
                        });
                    v !== M && (u.default.clearDraft(t.id, C.DraftType.ThreadSettings), u.default.clearDraft(t.id, C.DraftType.FirstThreadMessage), null == r || r(v), (A || e.length > 0 || null != a && a.length > 0 || null != I && I.length > 0) && function(e, t, n, i, l) {
                        if (null != l && null != i && i.length > 0) l(e, i, t, n);
                        else if (null != n && n.length > 0) d.default.sendStickers(e.id, n, t);
                        else d.default.sendMessage(e.id, m.default.parse(e, t))
                    }(v, e, a, I, f)), c.default.clearAll(t.id, C.DraftType.FirstThreadMessage)
                }, [t, n, i, r, l, o, p, f])
            }

            function P(e, t, n, i, l) {
                return U(e, () => s.default.post({
                    url: O.Endpoints.CHANNEL_THREADS(e.id),
                    body: {
                        name: t,
                        type: n,
                        auto_archive_duration: i,
                        location: l
                    }
                }))
            }

            function L(e) {
                let {
                    parentChannel: t,
                    name: n,
                    appliedTags: i,
                    onThreadCreated: l,
                    upload: o
                } = e;
                return a.useCallback(async (e, a, r) => {
                    let d = 0,
                        [p, m] = (0, I.default)(e);
                    p && (e = m, d = (0, E.addFlag)(d, O.MessageFlags.SUPPRESS_NOTIFICATIONS));
                    let _ = (0, N.getAutoArchiveDuration)(t, null),
                        T = O.Endpoints.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
                        A = {
                            name: n,
                            auto_archive_duration: _,
                            applied_tags: i,
                            message: {
                                content: e,
                                sticker_ids: a,
                                flags: 0 !== d ? d : void 0
                            }
                        },
                        S = await U(t, () => null != r && r.length > 0 ? o(T, A, r) : s.default.post({
                            url: T,
                            body: A
                        }));
                    return u.default.clearDraft(t.id, C.DraftType.ThreadSettings), u.default.clearDraft(t.id, C.DraftType.FirstThreadMessage), c.default.clearAll(t.id, C.DraftType.FirstThreadMessage), (0, f.trackForumPostCreated)({
                        guildId: t.guild_id,
                        channelId: t.id,
                        postId: S.id
                    }), null == l || l(S), S
                }, [t, n, l, i, o])
            }(l = i || (i = {}))[l.Disabled = 1] = "Disabled", l[l.Enabled = 2] = "Enabled", l[l.PrivateOnly = 3] = "PrivateOnly";
            async function U(e, t) {
                let n;
                let i = e.isForumLikeChannel();
                try {
                    n = await t(), null == n.body ? r.default.show({
                        title: h.default.Messages.ERROR,
                        body: h.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                    }) : (o.default.dispatch({
                        type: "SLOWMODE_RESET_COOLDOWN",
                        slowmodeType: A.SlowmodeType.CreateThread,
                        channelId: e.id
                    }), o.default.dispatch({
                        type: "THREAD_CREATE_LOCAL",
                        channelId: n.body.id
                    }))
                } catch (t) {
                    var l, a, s, u, d, c;
                    if ((null === (l = t.body) || void 0 === l ? void 0 : l.code) === O.AbortCodes.TOO_MANY_THREADS) r.default.show({
                        title: i ? h.default.Messages.CANNOT_CREATE_FORUM_POST : h.default.Messages.CANNOT_CREATE_THREAD,
                        body: i ? h.default.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : h.default.Messages.TOO_MANY_THREADS_MESSAGE
                    });
                    else if ((null === (a = t.body) || void 0 === a ? void 0 : a.code) === O.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS) r.default.show({
                        title: h.default.Messages.CANNOT_CREATE_THREAD,
                        body: h.default.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
                    });
                    else if ((null === (s = t.body) || void 0 === s ? void 0 : s.code) === O.AbortCodes.SLOWMODE_RATE_LIMITED) {
                        let n = null !== (c = t.body.retry_after) && void 0 !== c ? c : 0;
                        n > 0 && o.default.dispatch({
                            type: "SLOWMODE_SET_COOLDOWN",
                            channelId: e.id,
                            slowmodeType: A.SlowmodeType.CreateThread,
                            cooldownMs: 1e3 * n
                        })
                    } else if (429 === t.status) r.default.show({
                        title: i ? h.default.Messages.CANNOT_CREATE_FORUM_POST : h.default.Messages.CANNOT_CREATE_THREAD,
                        body: h.default.Messages.RATE_LIMITED
                    });
                    else if (M.FORUM_POST_CREATION_AUTOMOD_ERRORS.has(null === (u = t.body) || void 0 === u ? void 0 : u.code)) throw t;
                    else {
                        if (M.FORUM_POST_CREATION_UPLOAD_ERRORS.has(null === (d = t.body) || void 0 === d ? void 0 : d.code)) return new Promise((e, n) => {
                            null == t.body && n(), p.default.addConditionalChangeListener(() => {
                                let t = p.default.getAndDeleteMostRecentUserCreatedThreadId();
                                if (null != t) {
                                    let i = _.default.getChannel(t);
                                    return o.default.wait(() => {
                                        null == i ? n() : e(i)
                                    }), !1
                                }
                            })
                        });
                        r.default.show({
                            title: h.default.Messages.ERROR,
                            body: h.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                        })
                    }
                }
                return new Promise((e, t) => {
                    null == n.body && t(), _.default.addConditionalChangeListener(() => {
                        let t = _.default.getChannel(n.body.id);
                        if (null != t) return o.default.wait(() => {
                            e(t)
                        }), !1
                    })
                })
            }
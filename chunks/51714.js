            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("424973"), n("222007");
            var a = n("637612"),
                s = n("336696"),
                l = n("888400"),
                i = n("299039"),
                r = n("459776"),
                o = n("654017"),
                u = n("49111");

            function d(e) {
                let t, n, d, {
                        channel: c,
                        messages: f,
                        oldestUnreadMessageId: h,
                        treatSpam: C,
                        summaries: p,
                        selectedSummary: m
                    } = e,
                    E = [],
                    g = !1,
                    S = null != h ? i.default.extractTimestamp(h) : null,
                    _ = null;
                return f.forEach(e => {
                    var s, A, T, M, N, I, v, L;
                    if (null != p && p.length > 0) {
                        ;
                        let t = i.default.extractTimestamp(e.id);
                        for (let e = 0; s = e < (null == p ? void 0 : p.length), s; e++) {
                            if (null == p[e]) continue;
                            let n = i.default.extractTimestamp(p[e].startId),
                                a = i.default.extractTimestamp(p[e].endId);
                            if (t >= n && t <= a) {
                                if (_ === p[e].id) break;
                                E.push({
                                    type: u.ChannelStreamTypes.DIVIDER,
                                    content: p[e].topic,
                                    contentKey: p[e].id
                                }), _ = p[e].id;
                                break
                            }
                        }
                    }
                    let R = (0, l.dateFormat)(e.timestamp, "LL");
                    R !== t && null == _ && (E.push({
                        type: u.ChannelStreamTypes.DIVIDER,
                        content: R,
                        contentKey: R
                    }), t = R);
                    let x = E[E.length - 1],
                        y = null,
                        O = (0, o.isSpam)(e);
                    g = g || O;
                    let D = function(e, t, n) {
                        if (a.MessageTypesSets.NON_COLLAPSIBLE.has(t.type));
                        else if (t.blocked) return u.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED;
                        else if ((0, o.isSpamSupported)(e) && n) return u.ChannelStreamTypes.MESSAGE_GROUP_SPAMMER;
                        return null
                    }(c, e, O && C);
                    if (null !== D) {
                        ;
                        let t, n;
                        [y, x] = (A = E, T = e, M = D, n = N = x, null == N || N.type !== M ? (t = {
                            type: M,
                            content: [],
                            key: T.id
                        }, A.push(t)) : n = (t = N).content[t.content.length - 1], [t, n])
                    }
                    if (h === e.id && null != S) {
                        if (null != x && x.type === u.ChannelStreamTypes.DIVIDER) x.unreadId = e.id, S = null;
                        else if (null !== y) {
                            ;
                            I = y, v = c, (L = e).isFirstMessageInForumPost(v) || I.content.push({
                                type: u.ChannelStreamTypes.DIVIDER,
                                unreadId: L.id
                            }), I.hasUnread = !0, S = null
                        } else !e.isFirstMessageInForumPost(c) && E.push({
                            type: u.ChannelStreamTypes.DIVIDER,
                            unreadId: e.id
                        }), S = null
                    } else null != S && i.default.extractTimestamp(e.id) > S && (!e.isFirstMessageInForumPost(c) && E.push({
                        type: u.ChannelStreamTypes.DIVIDER,
                        unreadId: e.id
                    }), S = null);
                    let j = (null == x ? void 0 : x.type) === u.ChannelStreamTypes.MESSAGE ? d : x;
                    (0, r.isNewGroupItem)(c, j, e) && (n = e.id);
                    let b = {
                        type: e.type === u.MessageTypes.THREAD_STARTER_MESSAGE ? u.ChannelStreamTypes.THREAD_STARTER_MESSAGE : u.ChannelStreamTypes.MESSAGE,
                        content: e,
                        groupId: n
                    };
                    n === e.id && (d = b);
                    let {
                        jumpSequenceId: P,
                        jumpFlash: F,
                        jumpTargetId: U
                    } = f;
                    F && e.id === U && null != P && (b.flashKey = P), f.jumpTargetId === e.id && (b.jumpTarget = !0), null != m && e.id === m.startId && m.count > 1 && E.push({
                        type: u.ChannelStreamTypes.DIVIDER,
                        content: m.topic,
                        contentKey: m.startId,
                        isSummaryDivider: !0
                    }), null !== y ? (y.content.push(b), b.jumpTarget && (y.hasJumpTarget = !0)) : E.push(b), e.isFirstMessageInForumPost(c) && E.push({
                        type: u.ChannelStreamTypes.FORUM_POST_ACTION_BAR
                    }), null != m && e.id === m.endId && m.count > 1 && E.push({
                        type: u.ChannelStreamTypes.DIVIDER,
                        contentKey: m.endId,
                        isSummaryDivider: !0
                    })
                }), g && (0, o.isSpamSupported)(c) && s.default.trackExposure({
                    location: "416cc9_1"
                }), E
            }
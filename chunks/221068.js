            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return q
                }
            }), n("424973"), n("222007"), n("843762");
            var a = n("37983"),
                s = n("884691"),
                l = n("866227"),
                i = n.n(l),
                r = n("446674"),
                o = n("819689"),
                u = n("783480"),
                d = n("734575"),
                c = n("206230"),
                f = n("716241"),
                h = n("34695"),
                C = n("554393"),
                p = n("120027"),
                m = n("934288"),
                E = n("144491"),
                g = n("933152"),
                S = n("820899"),
                _ = n("347738"),
                A = n("339670"),
                T = n("21763"),
                M = n("719926"),
                N = n("957255"),
                I = n("660478"),
                v = n("18494"),
                L = n("697218"),
                R = n("410889"),
                x = n("888400"),
                y = n("299039"),
                O = n("154864"),
                D = n("383667"),
                j = n("459776"),
                b = n("366757"),
                P = n("699473"),
                F = n("556118"),
                U = n("342009"),
                H = n("97810"),
                k = n("933629"),
                G = n("88243"),
                w = n("753089"),
                B = n("210062"),
                V = n("894488"),
                W = n("49111"),
                z = n("964974"),
                Z = n("782340");

            function K(e) {
                return null != e && e.type === W.ChannelStreamTypes.MESSAGE && e.content.id === e.groupId
            }
            let Y = s.memo(function(e) {
                let {
                    file: t,
                    channel: n,
                    user: s,
                    isGroupStart: l
                } = e;
                return (0, a.jsx)(P.default, {
                    isGroupStart: l,
                    channel: n,
                    message: new M.default({
                        id: t.id,
                        key: "pending-upload-".concat(t.id),
                        type: W.MessageTypes.DEFAULT,
                        author: s,
                        channel_id: n.id,
                        customRenderedContent: {
                            hasSpoilerEmbeds: !1,
                            content: (0, a.jsx)(R.AttachmentUpload, {
                                filename: t.name,
                                progress: null != t.progress ? t.progress : 0,
                                size: t.currentSize,
                                onCancelUpload: () => {
                                    u.default.cancel(t)
                                }
                            })
                        }
                    })
                })
            });

            function q(e) {
                var t;
                let n, s, l, {
                        channel: u,
                        messages: R,
                        unreadCount: P,
                        showNewMessagesBar: q,
                        messageDisplayCompact: X,
                        channelStream: Q,
                        uploads: J,
                        scrollManager: $,
                        specs: ee,
                        filterAfterTimestamp: et,
                        showingQuarantineBanner: en
                    } = e,
                    ea = L.default.getCurrentUser(),
                    es = () => $.isInitialized() || R.ready,
                    el = (0, b.useShowConvoStarterInDM)(u),
                    ei = R.length > 0 && (null === (t = R.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(u)),
                    er = (0, d.useChannelSummariesExperiment)(u),
                    eo = (0, r.useStateFromStores)([_.default], () => _.default.shouldShowTopicsBar()),
                    eu = (0, g.useStrangerDangerWarning)(u.id, z.LOCATION_CONTEXT_WEB);
                u.isDM() && null != eu && (n = (0, a.jsx)(S.StrangerDangerWarningBanner, {
                    channelId: u.id,
                    warningId: eu.id,
                    senderId: u.getRecipientId()
                }));
                let ed = u.isForumPost() && !ei ? (0, a.jsx)(C.default, {
                        postId: u.id
                    }) : null,
                    ec = (0, m.default)(u.id);
                (0, B.default)();
                let ef = null,
                    eh = [],
                    eC = Q.map((e, t) => {
                        if (e.type === W.ChannelStreamTypes.DIVIDER) {
                            var n, s;
                            let l = null != e.unreadId;
                            return null != et ? null : e.isSummaryDivider ? (0, a.jsx)(T.default, {
                                index: t,
                                item: e,
                                channel: u,
                                isBeforeGroup: null == e.content && K(Q[t + 1])
                            }) : (0, a.jsx)(H.default, {
                                isUnread: l,
                                isBeforeGroup: null == e.content && K(Q[t + 1]),
                                id: l ? V.NEW_MESSAGE_BAR_ID : void 0,
                                children: e.content
                            }, "divider-".concat(null !== (s = null !== (n = e.contentKey) && void 0 !== n ? n : e.unreadId) && void 0 !== s ? s : t))
                        }
                        if (e.type === W.ChannelStreamTypes.FORUM_POST_ACTION_BAR) return (0, a.jsx)(C.default, {
                            parentChannelId: u.parent_id,
                            postId: u.id,
                            isLastItem: t + 1 === Q.length,
                            isFirstMessage: !0
                        }, "forum-post-action-bar-".concat(u.id));
                        if (e.type === W.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED || e.type === W.ChannelStreamTypes.MESSAGE_GROUP_SPAMMER) {
                            let t;
                            return t = e.type === W.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED ? Z.default.Messages.BLOCKED_MESSAGE_COUNT : Z.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT, (0, a.jsx)(U.default, {
                                unreadId: V.NEW_MESSAGE_BAR_ID,
                                messages: e,
                                channel: u,
                                compact: X,
                                collapsedReason: t
                            }, e.key)
                        }
                        if (null != et && et > 1e3 * e.content.timestamp.unix()) return;
                        let l = N.default.can(W.Permissions.CREATE_INSTANT_INVITE, u);
                        if ((0, D.default)(e.content, l)) return;
                        e.type === W.ChannelStreamTypes.MESSAGE && null == ef && (ef = e);
                        let i = e.groupId === (null == ef ? void 0 : ef.groupId) ? ef.content.id : e.groupId,
                            r = e.type === W.ChannelStreamTypes.THREAD_STARTER_MESSAGE ? F.ThreadStarterChatMessage : F.default;
                        return (0, a.jsx)(r, {
                            compact: X,
                            channel: u,
                            message: e.content,
                            groupId: i,
                            flashKey: e.flashKey,
                            id: (0, O.getMessageDOMId)(u.id, e.content.id),
                            isLastItem: t >= Q.length - 1,
                            renderContentOnly: ec
                        }, e.content.id)
                    });
                eh.push(...eC);
                let ep = Q[Q.length - 1];
                if (null != ea && J.forEach((e, t) => {
                        let n = 0 === t && (0, j.isNewGroupItem)(u, ep, new M.default({
                            type: W.MessageTypes.DEFAULT,
                            author: ea
                        }));
                        eh.push((0, a.jsx)(Y, {
                            file: e,
                            channel: u,
                            user: ea,
                            isGroupStart: n
                        }, "upload-".concat(e.id)))
                    }), R.hasMoreBefore && null == et) {
                    R.length > 0 && eh.unshift((0, a.jsx)("div", {
                        style: {
                            height: V.PLACEHOLDER_BUFFER,
                            flex: "0 0 auto"
                        }
                    }, "buffer"));
                    let {
                        useReducedMotion: e
                    } = c.default;
                    (e && es() || !e) && eh.unshift((0, a.jsx)(G.default, {
                        compact: X,
                        ...ee
                    }, "has-more"))
                }
                if ((!R.hasMoreBefore || null != et) && eh.unshift((0, a.jsx)(h.default, {
                        channel: u,
                        showingBanner: en
                    }, "empty-message")), R.hasMoreAfter && eh.push((0, a.jsx)(G.default, {
                        compact: X,
                        ...ee
                    }, "has-more-after")), !en && el && es() && eh.push((0, a.jsx)(w.default, {
                        channel: u
                    })), P > 0 && q && es()) {
                    let e, t;
                    let n = I.default.getOldestUnreadTimestamp(u.id),
                        l = 0 !== n ? n : y.default.extractTimestamp(u.id),
                        r = (0, x.isSameDay)(i(), i(new Date(l)));
                    if (I.default.isEstimated(u.id) ? (e = r ? Z.default.Messages.NEW_MESSAGES_ESTIMATED : Z.default.Messages.NEW_MESSAGES_ESTIMATED_WITH_DATE, t = Z.default.Messages.NEW_MESSAGES_ESTIMATED_SUMMARIES) : (e = r ? Z.default.Messages.NEW_MESSAGES : Z.default.Messages.NEW_MESSAGES_WITH_DATE, t = Z.default.Messages.NEW_MESSAGES_SUMMARIES), er && (0, d.channelEligibleForSummaries)(u)) {
                        let n = I.default.ackMessageId(u.id),
                            i = (0, A.getUnreadTopicsCount)(u.id, I.default.getOldestUnreadMessageId(u.id));
                        if ((0, f.trackWithMetadata)(W.AnalyticEvents.SUMMARIES_UNREAD_BAR_VIEWED, {
                                num_unread_summaries: i,
                                num_unread_messages: P,
                                last_ack_message_id: n,
                                summaries_enabled_by_user: eo,
                                summaries_enabled_for_channel: (0, d.canSeeChannelSummaries)(u)
                            }), (0, d.canSeeChannelSummaries)(u)) {
                            let n = eo ? t.format({
                                count: P
                            }) : e.format({
                                count: P,
                                timestamp: l
                            });
                            if (eo) {
                                let e = i > 0 ? (0, a.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        textTransform: "none",
                                        alignItems: "center",
                                        position: "absolute",
                                        left: "40%"
                                    },
                                    children: [t.format({
                                        count: P
                                    }), (0, a.jsx)(p.default, {
                                        style: {
                                            paddingLeft: 8,
                                            paddingRight: 8
                                        },
                                        height: 4,
                                        width: 4
                                    }), Z.default.Messages.NEW_SUMMARIES.format({
                                        count: i
                                    })]
                                }) : (0, a.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        textTransform: "none",
                                        alignItems: "center",
                                        position: "absolute",
                                        left: "45%"
                                    },
                                    children: n
                                });
                                s = (0, a.jsx)(k.NewTopicsBar, {
                                    scrollManager: $,
                                    content: e,
                                    channel: u
                                })
                            } else {
                                let e = (0, a.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        textTransform: "none",
                                        alignItems: "center"
                                    },
                                    children: i > 0 ? (0, a.jsxs)(a.Fragment, {
                                        children: [t.format({
                                            count: P
                                        }), (0, a.jsx)(p.default, {
                                            style: {
                                                paddingLeft: 8,
                                                paddingRight: 8
                                            },
                                            height: 4,
                                            width: 4
                                        }), Z.default.Messages.NEW_SUMMARIES.format({
                                            count: i
                                        })]
                                    }) : (0, a.jsx)(a.Fragment, {
                                        children: n
                                    })
                                });
                                s = (0, a.jsx)(k.NewMessagesBar, {
                                    content: e,
                                    channelId: u.id
                                })
                            }
                        }
                    } else s = (0, a.jsx)(k.NewMessagesBar, {
                        content: e.format({
                            count: P,
                            timestamp: l
                        }),
                        channelId: u.id
                    })
                }
                if (null == s && (0, d.canSeeChannelSummaries)(u) && eo && (s = (0, a.jsx)(k.TopicsPill, {
                        channel: u,
                        scrollManager: $
                    })), R.error) l = (0, a.jsx)(k.ErrorLoadingBar, {
                    loading: R.loadingMore,
                    onClick: () => {
                        var e;
                        return e = u.id, void o.default.fetchMessages({
                            channelId: e,
                            limit: W.MAX_MESSAGES_PER_CHANNEL,
                            truncate: !0
                        })
                    }
                });
                else if (R.hasMoreAfter && es()) {
                    let {
                        jumpReturnTargetId: e
                    } = R;
                    l = R.loadingMore && R.jumpedToPresent ? (0, a.jsx)(k.JumpToPresentBar, {}) : null != e ? (0, a.jsx)(k.JumpToPresentBar, {
                        type: k.JumpBarType.REPLY,
                        onClick: () => {
                            var t, n;
                            return t = u, n = e, void o.default.jumpToMessage({
                                channelId: t.id,
                                messageId: n,
                                flash: !0
                            })
                        }
                    }) : (0, a.jsx)(k.JumpToPresentBar, {
                        onClick: () => (function(e) {
                            o.default.jumpToPresent(e.id, W.MAX_MESSAGES_PER_CHANNEL);
                            let t = v.default.getChannelId();
                            e.id === t && (0, E.transitionToChannel)(e.id)
                        })(u)
                    })
                }
                return {
                    channelStreamMarkup: eh,
                    newMessagesBar: s,
                    jumpToPresentBar: l,
                    forumPostActionBar: ed,
                    strangerDangerWarningBanner: n
                }
            }
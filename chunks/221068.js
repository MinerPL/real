"use strict";
n.r(t), n.d(t, {
  default: function() {
    return q
  }
}), n("424973"), n("222007"), n("843762");
var s = n("37983"),
  a = n("884691"),
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
  I = n("957255"),
  N = n("660478"),
  L = n("18494"),
  v = n("697218"),
  x = n("410889"),
  R = n("888400"),
  y = n("299039"),
  O = n("154864"),
  D = n("383667"),
  j = n("459776"),
  P = n("366757"),
  b = n("699473"),
  U = n("556118"),
  F = n("342009"),
  H = n("97810"),
  k = n("933629"),
  G = n("88243"),
  w = n("753089"),
  B = n("210062"),
  V = n("894488"),
  W = n("49111"),
  Z = n("964974"),
  z = n("782340");

function K(e) {
  return null != e && e.type === W.ChannelStreamTypes.MESSAGE && e.content.id === e.groupId
}
let Y = a.memo(function(e) {
  let {
    file: t,
    channel: n,
    user: a,
    isGroupStart: l
  } = e;
  return (0, s.jsx)(b.default, {
    isGroupStart: l,
    channel: n,
    message: new M.default({
      id: t.id,
      key: "pending-upload-".concat(t.id),
      type: W.MessageTypes.DEFAULT,
      author: a,
      channel_id: n.id,
      customRenderedContent: {
        hasSpoilerEmbeds: !1,
        content: (0, s.jsx)(x.AttachmentUpload, {
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
  let n, a, l, {
      channel: u,
      messages: x,
      unreadCount: b,
      showNewMessagesBar: q,
      messageDisplayCompact: X,
      channelStream: J,
      uploads: Q,
      scrollManager: $,
      specs: ee,
      filterAfterTimestamp: et,
      showingQuarantineBanner: en
    } = e,
    es = v.default.getCurrentUser(),
    ea = () => $.isInitialized() || x.ready,
    el = (0, P.useShowConvoStarterInDM)(u),
    ei = x.length > 0 && (null === (t = x.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(u)),
    er = (0, d.useChannelSummariesExperiment)(u),
    eo = (0, r.useStateFromStores)([_.default], () => _.default.shouldShowTopicsBar()),
    eu = (0, g.useStrangerDangerWarning)(u.id, Z.LOCATION_CONTEXT_WEB);
  u.isDM() && null != eu && (n = (0, s.jsx)(S.StrangerDangerWarningBanner, {
    channelId: u.id,
    warningId: eu.id,
    senderId: u.getRecipientId()
  }));
  let ed = u.isForumPost() && !ei ? (0, s.jsx)(C.default, {
      postId: u.id
    }) : null,
    ec = (0, m.default)(u.id);
  (0, B.default)();
  let ef = null,
    eh = [],
    eC = J.map((e, t) => {
      if (e.type === W.ChannelStreamTypes.DIVIDER) {
        var n, a;
        let l = null != e.unreadId;
        return null != et ? null : e.isSummaryDivider ? (0, s.jsx)(T.default, {
          index: t,
          item: e,
          channel: u,
          isBeforeGroup: null == e.content && K(J[t + 1])
        }) : (0, s.jsx)(H.default, {
          isUnread: l,
          isBeforeGroup: null == e.content && K(J[t + 1]),
          id: l ? V.NEW_MESSAGE_BAR_ID : void 0,
          children: e.content
        }, "divider-".concat(null !== (a = null !== (n = e.contentKey) && void 0 !== n ? n : e.unreadId) && void 0 !== a ? a : t))
      }
      if (e.type === W.ChannelStreamTypes.FORUM_POST_ACTION_BAR) return (0, s.jsx)(C.default, {
        parentChannelId: u.parent_id,
        postId: u.id,
        isLastItem: t + 1 === J.length,
        isFirstMessage: !0
      }, "forum-post-action-bar-".concat(u.id));
      if (e.type === W.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED || e.type === W.ChannelStreamTypes.MESSAGE_GROUP_SPAMMER) {
        let t;
        return t = e.type === W.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED ? z.default.Messages.BLOCKED_MESSAGE_COUNT : z.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT, (0, s.jsx)(F.default, {
          unreadId: V.NEW_MESSAGE_BAR_ID,
          messages: e,
          channel: u,
          compact: X,
          collapsedReason: t
        }, e.key)
      }
      if (null != et && et > 1e3 * e.content.timestamp.unix()) return;
      let l = I.default.can(W.Permissions.CREATE_INSTANT_INVITE, u);
      if ((0, D.default)(e.content, l)) return;
      e.type === W.ChannelStreamTypes.MESSAGE && null == ef && (ef = e);
      let i = e.groupId === (null == ef ? void 0 : ef.groupId) ? ef.content.id : e.groupId,
        r = e.type === W.ChannelStreamTypes.THREAD_STARTER_MESSAGE ? U.ThreadStarterChatMessage : U.default;
      return (0, s.jsx)(r, {
        compact: X,
        channel: u,
        message: e.content,
        groupId: i,
        flashKey: e.flashKey,
        id: (0, O.getMessageDOMId)(u.id, e.content.id),
        isLastItem: t >= J.length - 1,
        renderContentOnly: ec
      }, e.content.id)
    });
  eh.push(...eC);
  let ep = J[J.length - 1];
  if (null != es && Q.forEach((e, t) => {
      let n = 0 === t && (0, j.isNewGroupItem)(u, ep, new M.default({
        type: W.MessageTypes.DEFAULT,
        author: es
      }));
      eh.push((0, s.jsx)(Y, {
        file: e,
        channel: u,
        user: es,
        isGroupStart: n
      }, "upload-".concat(e.id)))
    }), x.hasMoreBefore && null == et) {
    x.length > 0 && eh.unshift((0, s.jsx)("div", {
      style: {
        height: V.PLACEHOLDER_BUFFER,
        flex: "0 0 auto"
      }
    }, "buffer"));
    let {
      useReducedMotion: e
    } = c.default;
    (e && ea() || !e) && eh.unshift((0, s.jsx)(G.default, {
      compact: X,
      ...ee
    }, "has-more"))
  }
  if ((!x.hasMoreBefore || null != et) && eh.unshift((0, s.jsx)(h.default, {
      channel: u,
      showingBanner: en
    }, "empty-message")), x.hasMoreAfter && eh.push((0, s.jsx)(G.default, {
      compact: X,
      ...ee
    }, "has-more-after")), !en && el && ea() && eh.push((0, s.jsx)(w.default, {
      channel: u
    })), b > 0 && q && ea()) {
    let e, t;
    let n = N.default.getOldestUnreadTimestamp(u.id),
      l = 0 !== n ? n : y.default.extractTimestamp(u.id),
      r = (0, R.isSameDay)(i(), i(new Date(l)));
    if (N.default.isEstimated(u.id) ? (e = r ? z.default.Messages.NEW_MESSAGES_ESTIMATED : z.default.Messages.NEW_MESSAGES_ESTIMATED_WITH_DATE, t = z.default.Messages.NEW_MESSAGES_ESTIMATED_SUMMARIES) : (e = r ? z.default.Messages.NEW_MESSAGES : z.default.Messages.NEW_MESSAGES_WITH_DATE, t = z.default.Messages.NEW_MESSAGES_SUMMARIES), er && (0, d.channelEligibleForSummaries)(u)) {
      let n = N.default.ackMessageId(u.id),
        i = (0, A.getUnreadTopicsCount)(u.id, N.default.getOldestUnreadMessageId(u.id));
      if ((0, f.trackWithMetadata)(W.AnalyticEvents.SUMMARIES_UNREAD_BAR_VIEWED, {
          num_unread_summaries: i,
          num_unread_messages: b,
          last_ack_message_id: n,
          summaries_enabled_by_user: eo,
          summaries_enabled_for_channel: (0, d.canSeeChannelSummaries)(u)
        }), (0, d.canSeeChannelSummaries)(u)) {
        let n = eo ? t.format({
          count: b
        }) : e.format({
          count: b,
          timestamp: l
        });
        if (eo) {
          let e = i > 0 ? (0, s.jsxs)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center",
              position: "absolute",
              left: "40%"
            },
            children: [t.format({
              count: b
            }), (0, s.jsx)(p.default, {
              style: {
                paddingLeft: 8,
                paddingRight: 8
              },
              height: 4,
              width: 4
            }), z.default.Messages.NEW_SUMMARIES.format({
              count: i
            })]
          }) : (0, s.jsx)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center",
              position: "absolute",
              left: "45%"
            },
            children: n
          });
          a = (0, s.jsx)(k.NewTopicsBar, {
            scrollManager: $,
            content: e,
            channel: u
          })
        } else {
          let e = (0, s.jsx)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center"
            },
            children: i > 0 ? (0, s.jsxs)(s.Fragment, {
              children: [t.format({
                count: b
              }), (0, s.jsx)(p.default, {
                style: {
                  paddingLeft: 8,
                  paddingRight: 8
                },
                height: 4,
                width: 4
              }), z.default.Messages.NEW_SUMMARIES.format({
                count: i
              })]
            }) : (0, s.jsx)(s.Fragment, {
              children: n
            })
          });
          a = (0, s.jsx)(k.NewMessagesBar, {
            content: e,
            channelId: u.id
          })
        }
      }
    } else a = (0, s.jsx)(k.NewMessagesBar, {
      content: e.format({
        count: b,
        timestamp: l
      }),
      channelId: u.id
    })
  }
  if (null == a && (0, d.canSeeChannelSummaries)(u) && eo && (a = (0, s.jsx)(k.TopicsPill, {
      channel: u,
      scrollManager: $
    })), x.error) l = (0, s.jsx)(k.ErrorLoadingBar, {
    loading: x.loadingMore,
    onClick: () => {
      var e;
      return e = u.id, void o.default.fetchMessages({
        channelId: e,
        limit: W.MAX_MESSAGES_PER_CHANNEL,
        truncate: !0
      })
    }
  });
  else if (x.hasMoreAfter && ea()) {
    let {
      jumpReturnTargetId: e
    } = x;
    l = x.loadingMore && x.jumpedToPresent ? (0, s.jsx)(k.JumpToPresentBar, {}) : null != e ? (0, s.jsx)(k.JumpToPresentBar, {
      type: k.JumpBarType.REPLY,
      onClick: () => {
        var t, n;
        return t = u, n = e, void o.default.jumpToMessage({
          channelId: t.id,
          messageId: n,
          flash: !0
        })
      }
    }) : (0, s.jsx)(k.JumpToPresentBar, {
      onClick: () => (function(e) {
        o.default.jumpToPresent(e.id, W.MAX_MESSAGES_PER_CHANNEL);
        let t = L.default.getChannelId();
        e.id === t && (0, E.transitionToChannel)(e.id)
      })(u)
    })
  }
  return {
    channelStreamMarkup: eh,
    newMessagesBar: a,
    jumpToPresentBar: l,
    forumPostActionBar: ed,
    strangerDangerWarningBanner: n
  }
}
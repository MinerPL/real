"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Q
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
  A = n("347738"),
  _ = n("339670"),
  T = n("21763"),
  M = n("719926"),
  N = n("957255"),
  I = n("660478"),
  v = n("18494"),
  L = n("697218"),
  x = n("410889"),
  R = n("888400"),
  y = n("718517"),
  O = n("299039"),
  D = n("154864"),
  j = n("383667"),
  P = n("459776"),
  b = n("921450"),
  H = n("366757"),
  F = n("699473"),
  U = n("556118"),
  k = n("342009"),
  G = n("97810"),
  w = n("933629"),
  B = n("88243"),
  V = n("753089"),
  W = n("210062"),
  Z = n("321933"),
  z = n("894488"),
  K = n("49111"),
  Y = n("964974"),
  q = n("782340");

function X(e) {
  return null != e && e.type === K.ChannelStreamTypes.MESSAGE && e.content.id === e.groupId
}
let J = a.memo(function(e) {
  let {
    file: t,
    channel: n,
    user: a,
    isGroupStart: l
  } = e;
  return (0, s.jsx)(F.default, {
    isGroupStart: l,
    channel: n,
    message: new M.default({
      id: t.id,
      key: "pending-upload-".concat(t.id),
      type: K.MessageTypes.DEFAULT,
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

function Q(e) {
  var t;
  let n, a, l, {
      channel: u,
      messages: x,
      unreadCount: F,
      showNewMessagesBar: Q,
      messageDisplayCompact: $,
      channelStream: ee,
      uploads: et,
      scrollManager: en,
      specs: es,
      filterAfterTimestamp: ea,
      showingQuarantineBanner: el
    } = e,
    ei = L.default.getCurrentUser(),
    er = () => en.isInitialized() || x.ready,
    eo = (0, H.useShowConvoStarterInDM)(u),
    eu = x.length > 0 && (null === (t = x.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(u)),
    ed = (0, d.useChannelSummariesExperiment)(u),
    ec = (0, r.useStateFromStores)([A.default], () => A.default.shouldShowTopicsBar()),
    ef = (0, g.useStrangerDangerWarning)(u.id, Y.LOCATION_CONTEXT_WEB),
    eh = (0, b.default)();
  u.isDM() && null != ef && (n = (0, s.jsx)(S.StrangerDangerWarningBanner, {
    channelId: u.id,
    warningId: ef.id,
    senderId: u.getRecipientId()
  }));
  let eC = u.isForumPost() && !eu ? (0, s.jsx)(C.default, {
      postId: u.id
    }) : null,
    ep = (0, m.default)(u.id);
  (0, W.default)();
  let em = null,
    eE = [],
    eg = ee.map((e, t) => {
      if (e.type === K.ChannelStreamTypes.DIVIDER) {
        var n, a;
        let l = null != e.unreadId;
        return null != ea ? null : e.isSummaryDivider ? (0, s.jsx)(T.default, {
          index: t,
          item: e,
          channel: u,
          isBeforeGroup: null == e.content && X(ee[t + 1])
        }) : (0, s.jsx)(G.default, {
          isUnread: l,
          isBeforeGroup: null == e.content && X(ee[t + 1]),
          id: l ? z.NEW_MESSAGE_BAR_ID : void 0,
          children: e.content
        }, "divider-".concat(null !== (a = null !== (n = e.contentKey) && void 0 !== n ? n : e.unreadId) && void 0 !== a ? a : t))
      }
      if (e.type === K.ChannelStreamTypes.FORUM_POST_ACTION_BAR) return (0, s.jsx)(C.default, {
        parentChannelId: u.parent_id,
        postId: u.id,
        isLastItem: t + 1 === ee.length,
        isFirstMessage: !0
      }, "forum-post-action-bar-".concat(u.id));
      if (e.type === K.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED || e.type === K.ChannelStreamTypes.MESSAGE_GROUP_SPAMMER) {
        let t;
        return t = e.type === K.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED ? q.default.Messages.BLOCKED_MESSAGE_COUNT : q.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT, (0, s.jsx)(k.default, {
          unreadId: z.NEW_MESSAGE_BAR_ID,
          messages: e,
          channel: u,
          compact: $,
          collapsedReason: t
        }, e.key)
      }
      if (null != ea && ea > e.content.timestamp.unix() * y.default.Millis.SECOND) return;
      let l = N.default.can(K.Permissions.CREATE_INSTANT_INVITE, u);
      if ((0, j.default)(e.content, l)) return;
      e.type === K.ChannelStreamTypes.MESSAGE && null == em && (em = e);
      let i = e.groupId === (null == em ? void 0 : em.groupId) ? em.content.id : e.groupId,
        r = e.type === K.ChannelStreamTypes.THREAD_STARTER_MESSAGE ? U.ThreadStarterChatMessage : U.default;
      return (0, s.jsx)(r, {
        compact: $,
        channel: u,
        message: e.content,
        groupId: i,
        flashKey: e.flashKey,
        id: (0, D.getMessageDOMId)(u.id, e.content.id),
        isLastItem: t >= ee.length - 1,
        renderContentOnly: ep
      }, e.content.id)
    });
  eE.push(...eg);
  let eS = ee[ee.length - 1];
  if (null != ei && et.forEach((e, t) => {
      let n = 0 === t && (0, P.isNewGroupItem)(u, eS, new M.default({
        type: K.MessageTypes.DEFAULT,
        author: ei
      }));
      eE.push((0, s.jsx)(J, {
        file: e,
        channel: u,
        user: ei,
        isGroupStart: n
      }, "upload-".concat(e.id)))
    }), x.hasMoreBefore && null == ea) {
    x.length > 0 && eE.unshift((0, s.jsx)("div", {
      style: {
        height: z.PLACEHOLDER_BUFFER,
        flex: "0 0 auto"
      }
    }, "buffer"));
    let {
      useReducedMotion: e
    } = c.default;
    (e && er() || !e) && eE.unshift((0, s.jsx)(B.default, {
      compact: $,
      ...es
    }, "has-more"))
  }
  if ((!x.hasMoreBefore || null != ea) && eE.unshift((0, s.jsx)(h.default, {
      channel: u,
      showingBanner: el
    }, "empty-message")), x.hasMoreAfter && eE.push((0, s.jsx)(B.default, {
      compact: $,
      ...es
    }, "has-more-after")), !el && eo && er() && eE.push((0, s.jsx)(V.default, {
      channel: u
    })), F > 0 && Q && er()) {
    let e, t;
    let n = I.default.getOldestUnreadTimestamp(u.id),
      l = 0 !== n ? n : O.default.extractTimestamp(u.id),
      r = (0, R.isSameDay)(i(), i(new Date(l)));
    if (I.default.isEstimated(u.id) ? (e = r ? q.default.Messages.NEW_MESSAGES_ESTIMATED : q.default.Messages.NEW_MESSAGES_ESTIMATED_WITH_DATE, t = q.default.Messages.NEW_MESSAGES_ESTIMATED_SUMMARIES) : (e = r ? q.default.Messages.NEW_MESSAGES : q.default.Messages.NEW_MESSAGES_WITH_DATE, t = q.default.Messages.NEW_MESSAGES_SUMMARIES), ed && (0, d.channelEligibleForSummaries)(u) && eh.includes(Z.ChatOverlays.SUMMARIES)) {
      let n = I.default.ackMessageId(u.id),
        i = (0, _.getUnreadTopicsCount)(u.id, I.default.getOldestUnreadMessageId(u.id));
      if ((0, f.trackWithMetadata)(K.AnalyticEvents.SUMMARIES_UNREAD_BAR_VIEWED, {
          num_unread_summaries: i,
          num_unread_messages: F,
          last_ack_message_id: n,
          summaries_enabled_by_user: ec,
          summaries_enabled_for_channel: (0, d.canSeeChannelSummaries)(u)
        }), (0, d.canSeeChannelSummaries)(u)) {
        let n = ec ? t.format({
          count: F
        }) : e.format({
          count: F,
          timestamp: l
        });
        if (ec) {
          let e = i > 0 ? (0, s.jsxs)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center",
              position: "absolute",
              left: "40%"
            },
            children: [t.format({
              count: F
            }), (0, s.jsx)(p.default, {
              style: {
                paddingLeft: 8,
                paddingRight: 8
              },
              height: 4,
              width: 4
            }), q.default.Messages.NEW_SUMMARIES.format({
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
          a = (0, s.jsx)(w.NewTopicsBar, {
            scrollManager: en,
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
                count: F
              }), (0, s.jsx)(p.default, {
                style: {
                  paddingLeft: 8,
                  paddingRight: 8
                },
                height: 4,
                width: 4
              }), q.default.Messages.NEW_SUMMARIES.format({
                count: i
              })]
            }) : (0, s.jsx)(s.Fragment, {
              children: n
            })
          });
          a = (0, s.jsx)(w.NewMessagesBar, {
            content: e,
            channelId: u.id
          })
        }
      }
    } else eh.includes(Z.ChatOverlays.NEW_MESSAGES) && (a = (0, s.jsx)(w.NewMessagesBar, {
      content: e.format({
        count: F,
        timestamp: l
      }),
      channelId: u.id
    }))
  }
  if (null == a && (0, d.canSeeChannelSummaries)(u) && ec && eh.includes(Z.ChatOverlays.SUMMARIES) && (a = (0, s.jsx)(w.TopicsPill, {
      channel: u,
      scrollManager: en
    })), x.error) l = (0, s.jsx)(w.ErrorLoadingBar, {
    loading: x.loadingMore,
    onClick: () => {
      var e;
      return e = u.id, void o.default.fetchMessages({
        channelId: e,
        limit: K.MAX_MESSAGES_PER_CHANNEL,
        truncate: !0
      })
    }
  });
  else if (x.hasMoreAfter && er()) {
    let {
      jumpReturnTargetId: e
    } = x;
    l = x.loadingMore && x.jumpedToPresent ? (0, s.jsx)(w.JumpToPresentBar, {}) : null != e ? (0, s.jsx)(w.JumpToPresentBar, {
      type: w.JumpBarType.REPLY,
      onClick: () => {
        var t, n;
        return t = u, n = e, void o.default.jumpToMessage({
          channelId: t.id,
          messageId: n,
          flash: !0
        })
      }
    }) : (0, s.jsx)(w.JumpToPresentBar, {
      onClick: () => (function(e) {
        o.default.jumpToPresent(e.id, K.MAX_MESSAGES_PER_CHANNEL);
        let t = v.default.getChannelId();
        e.id === t && (0, E.transitionToChannel)(e.id)
      })(u)
    })
  }
  return {
    channelStreamMarkup: eE,
    newMessagesBar: a,
    jumpToPresentBar: l,
    forumPostActionBar: eC,
    strangerDangerWarningBanner: n
  }
}
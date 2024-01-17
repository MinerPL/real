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
  g = n("144491"),
  E = n("933152"),
  S = n("820899"),
  A = n("347738"),
  _ = n("339670"),
  T = n("21763"),
  M = n("719926"),
  I = n("957255"),
  N = n("660478"),
  v = n("18494"),
  L = n("697218"),
  x = n("410889"),
  R = n("888400"),
  y = n("718517"),
  D = n("299039"),
  O = n("154864"),
  j = n("383667"),
  b = n("459776"),
  P = n("366757"),
  H = n("699473"),
  F = n("556118"),
  U = n("342009"),
  k = n("97810"),
  G = n("933629"),
  w = n("88243"),
  B = n("753089"),
  V = n("210062"),
  W = n("894488"),
  Z = n("49111"),
  z = n("964974"),
  K = n("782340");

function Y(e) {
  return null != e && e.type === Z.ChannelStreamTypes.MESSAGE && e.content.id === e.groupId
}
let X = a.memo(function(e) {
  let {
    file: t,
    channel: n,
    user: a,
    isGroupStart: l
  } = e;
  return (0, s.jsx)(H.default, {
    isGroupStart: l,
    channel: n,
    message: new M.default({
      id: t.id,
      key: "pending-upload-".concat(t.id),
      type: Z.MessageTypes.DEFAULT,
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
      unreadCount: H,
      showNewMessagesBar: q,
      messageDisplayCompact: J,
      channelStream: Q,
      uploads: $,
      scrollManager: ee,
      specs: et,
      filterAfterTimestamp: en,
      showingQuarantineBanner: es
    } = e,
    ea = L.default.getCurrentUser(),
    el = () => ee.isInitialized() || x.ready,
    ei = (0, P.useShowConvoStarterInDM)(u),
    er = x.length > 0 && (null === (t = x.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(u)),
    eo = (0, d.useChannelSummariesExperiment)(u),
    eu = (0, r.useStateFromStores)([A.default], () => A.default.shouldShowTopicsBar()),
    ed = (0, E.useStrangerDangerWarning)(u.id, z.LOCATION_CONTEXT_WEB);
  u.isDM() && null != ed && (n = (0, s.jsx)(S.StrangerDangerWarningBanner, {
    channelId: u.id,
    warningId: ed.id,
    senderId: u.getRecipientId()
  }));
  let ec = u.isForumPost() && !er ? (0, s.jsx)(C.default, {
      postId: u.id
    }) : null,
    ef = (0, m.default)(u.id);
  (0, V.default)();
  let eh = null,
    eC = [],
    ep = Q.map((e, t) => {
      if (e.type === Z.ChannelStreamTypes.DIVIDER) {
        var n, a;
        let l = null != e.unreadId;
        return null != en ? null : e.isSummaryDivider ? (0, s.jsx)(T.default, {
          index: t,
          item: e,
          channel: u,
          isBeforeGroup: null == e.content && Y(Q[t + 1])
        }) : (0, s.jsx)(k.default, {
          isUnread: l,
          isBeforeGroup: null == e.content && Y(Q[t + 1]),
          id: l ? W.NEW_MESSAGE_BAR_ID : void 0,
          children: e.content
        }, "divider-".concat(null !== (a = null !== (n = e.contentKey) && void 0 !== n ? n : e.unreadId) && void 0 !== a ? a : t))
      }
      if (e.type === Z.ChannelStreamTypes.FORUM_POST_ACTION_BAR) return (0, s.jsx)(C.default, {
        parentChannelId: u.parent_id,
        postId: u.id,
        isLastItem: t + 1 === Q.length,
        isFirstMessage: !0
      }, "forum-post-action-bar-".concat(u.id));
      if (e.type === Z.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED || e.type === Z.ChannelStreamTypes.MESSAGE_GROUP_SPAMMER) {
        let t;
        return t = e.type === Z.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED ? K.default.Messages.BLOCKED_MESSAGE_COUNT : K.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT, (0, s.jsx)(U.default, {
          unreadId: W.NEW_MESSAGE_BAR_ID,
          messages: e,
          channel: u,
          compact: J,
          collapsedReason: t
        }, e.key)
      }
      if (null != en && en > e.content.timestamp.unix() * y.default.Millis.SECOND) return;
      let l = I.default.can(Z.Permissions.CREATE_INSTANT_INVITE, u);
      if ((0, j.default)(e.content, l)) return;
      e.type === Z.ChannelStreamTypes.MESSAGE && null == eh && (eh = e);
      let i = e.groupId === (null == eh ? void 0 : eh.groupId) ? eh.content.id : e.groupId,
        r = e.type === Z.ChannelStreamTypes.THREAD_STARTER_MESSAGE ? F.ThreadStarterChatMessage : F.default;
      return (0, s.jsx)(r, {
        compact: J,
        channel: u,
        message: e.content,
        groupId: i,
        flashKey: e.flashKey,
        id: (0, O.getMessageDOMId)(u.id, e.content.id),
        isLastItem: t >= Q.length - 1,
        renderContentOnly: ef
      }, e.content.id)
    });
  eC.push(...ep);
  let em = Q[Q.length - 1];
  if (null != ea && $.forEach((e, t) => {
      let n = 0 === t && (0, b.isNewGroupItem)(u, em, new M.default({
        type: Z.MessageTypes.DEFAULT,
        author: ea
      }));
      eC.push((0, s.jsx)(X, {
        file: e,
        channel: u,
        user: ea,
        isGroupStart: n
      }, "upload-".concat(e.id)))
    }), x.hasMoreBefore && null == en) {
    x.length > 0 && eC.unshift((0, s.jsx)("div", {
      style: {
        height: W.PLACEHOLDER_BUFFER,
        flex: "0 0 auto"
      }
    }, "buffer"));
    let {
      useReducedMotion: e
    } = c.default;
    (e && el() || !e) && eC.unshift((0, s.jsx)(w.default, {
      compact: J,
      ...et
    }, "has-more"))
  }
  if ((!x.hasMoreBefore || null != en) && eC.unshift((0, s.jsx)(h.default, {
      channel: u,
      showingBanner: es
    }, "empty-message")), x.hasMoreAfter && eC.push((0, s.jsx)(w.default, {
      compact: J,
      ...et
    }, "has-more-after")), !es && ei && el() && eC.push((0, s.jsx)(B.default, {
      channel: u
    })), H > 0 && q && el()) {
    let e, t;
    let n = N.default.getOldestUnreadTimestamp(u.id),
      l = 0 !== n ? n : D.default.extractTimestamp(u.id),
      r = (0, R.isSameDay)(i(), i(new Date(l)));
    if (N.default.isEstimated(u.id) ? (e = r ? K.default.Messages.NEW_MESSAGES_ESTIMATED : K.default.Messages.NEW_MESSAGES_ESTIMATED_WITH_DATE, t = K.default.Messages.NEW_MESSAGES_ESTIMATED_SUMMARIES) : (e = r ? K.default.Messages.NEW_MESSAGES : K.default.Messages.NEW_MESSAGES_WITH_DATE, t = K.default.Messages.NEW_MESSAGES_SUMMARIES), eo && (0, d.channelEligibleForSummaries)(u)) {
      let n = N.default.ackMessageId(u.id),
        i = (0, _.getUnreadTopicsCount)(u.id, N.default.getOldestUnreadMessageId(u.id));
      if ((0, f.trackWithMetadata)(Z.AnalyticEvents.SUMMARIES_UNREAD_BAR_VIEWED, {
          num_unread_summaries: i,
          num_unread_messages: H,
          last_ack_message_id: n,
          summaries_enabled_by_user: eu,
          summaries_enabled_for_channel: (0, d.canSeeChannelSummaries)(u)
        }), (0, d.canSeeChannelSummaries)(u)) {
        let n = eu ? t.format({
          count: H
        }) : e.format({
          count: H,
          timestamp: l
        });
        if (eu) {
          let e = i > 0 ? (0, s.jsxs)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center",
              position: "absolute",
              left: "40%"
            },
            children: [t.format({
              count: H
            }), (0, s.jsx)(p.default, {
              style: {
                paddingLeft: 8,
                paddingRight: 8
              },
              height: 4,
              width: 4
            }), K.default.Messages.NEW_SUMMARIES.format({
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
          a = (0, s.jsx)(G.NewTopicsBar, {
            scrollManager: ee,
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
                count: H
              }), (0, s.jsx)(p.default, {
                style: {
                  paddingLeft: 8,
                  paddingRight: 8
                },
                height: 4,
                width: 4
              }), K.default.Messages.NEW_SUMMARIES.format({
                count: i
              })]
            }) : (0, s.jsx)(s.Fragment, {
              children: n
            })
          });
          a = (0, s.jsx)(G.NewMessagesBar, {
            content: e,
            channelId: u.id
          })
        }
      }
    } else a = (0, s.jsx)(G.NewMessagesBar, {
      content: e.format({
        count: H,
        timestamp: l
      }),
      channelId: u.id
    })
  }
  if (null == a && (0, d.canSeeChannelSummaries)(u) && eu && (a = (0, s.jsx)(G.TopicsPill, {
      channel: u,
      scrollManager: ee
    })), x.error) l = (0, s.jsx)(G.ErrorLoadingBar, {
    loading: x.loadingMore,
    onClick: () => {
      var e;
      return e = u.id, void o.default.fetchMessages({
        channelId: e,
        limit: Z.MAX_MESSAGES_PER_CHANNEL,
        truncate: !0
      })
    }
  });
  else if (x.hasMoreAfter && el()) {
    let {
      jumpReturnTargetId: e
    } = x;
    l = x.loadingMore && x.jumpedToPresent ? (0, s.jsx)(G.JumpToPresentBar, {}) : null != e ? (0, s.jsx)(G.JumpToPresentBar, {
      type: G.JumpBarType.REPLY,
      onClick: () => {
        var t, n;
        return t = u, n = e, void o.default.jumpToMessage({
          channelId: t.id,
          messageId: n,
          flash: !0
        })
      }
    }) : (0, s.jsx)(G.JumpToPresentBar, {
      onClick: () => (function(e) {
        o.default.jumpToPresent(e.id, Z.MAX_MESSAGES_PER_CHANNEL);
        let t = v.default.getChannelId();
        e.id === t && (0, g.transitionToChannel)(e.id)
      })(u)
    })
  }
  return {
    channelStreamMarkup: eC,
    newMessagesBar: a,
    jumpToPresentBar: l,
    forumPostActionBar: ec,
    strangerDangerWarningBanner: n
  }
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("974667"),
  o = n("446674"),
  u = n("77078"),
  d = n("819689"),
  c = n("734575"),
  f = n("206230"),
  h = n("890503"),
  C = n("336696"),
  p = n("38654"),
  m = n("347738"),
  g = n("845579"),
  E = n("271938"),
  S = n("836417"),
  A = n("88093"),
  _ = n("377253"),
  T = n("957255"),
  M = n("660478"),
  I = n("462495"),
  N = n("697218"),
  v = n("505684"),
  L = n("378765"),
  x = n("70845"),
  R = n("51714"),
  y = n("88243"),
  D = n("31511"),
  O = n("120379"),
  j = n("221068"),
  b = n("49111"),
  P = n("782340"),
  H = n("278224");
let F = a.memo(function(e) {
  var t, n;
  let {
    className: l,
    messageGroupSpacing: c,
    scrollerClassName: h,
    channel: C,
    messages: m,
    unreadCount: g,
    showNewMessagesBar: E,
    messageDisplayCompact: S,
    channelStream: A,
    uploads: _,
    hasUnreads: M,
    editingMessageId: I,
    fontSize: N,
    keyboardModeEnabled: v,
    filterAfterTimestamp: x,
    showingQuarantineBanner: R
  } = e, [F, U] = a.useState(!1), k = a.useMemo(() => S ? (0, y.generateMessageSpecs)({
    compact: !0,
    messageGroups: 30,
    groupRange: 4,
    attachments: 8,
    fontSize: N,
    groupSpacing: c
  }) : (0, y.generateMessageSpecs)({
    compact: !1,
    messageGroups: 26,
    groupRange: 4,
    attachments: 8,
    fontSize: N,
    groupSpacing: c
  }), [S, N, c]), G = (0, O.default)({
    messages: m,
    channel: C,
    compact: S,
    hasUnreads: M,
    focusId: I,
    placeholderHeight: k.totalHeight,
    canLoadMore: null == x,
    handleScrollToBottom: a.useCallback(() => U(!0), [U]),
    handleScrollFromBottom: a.useCallback(() => U(!1), [U])
  }), w = (0, D.default)({
    scrollerRef: G.ref,
    isEditing: null != I,
    keyboardModeEnabled: v,
    hasMoreAfter: m.hasMoreAfter
  });
  let B = (n = C, (0, o.useStateFromStores)([p.default], () => {
      let e = T.default.can(b.Permissions.READ_MESSAGE_HISTORY, n);
      return e ? null : p.default.getViewingRolesTimestamp(n.getGuildId())
    })),
    {
      channelStreamMarkup: V,
      newMessagesBar: W,
      jumpToPresentBar: Z,
      forumPostActionBar: z,
      strangerDangerWarningBanner: K
    } = (0, j.default)({
      channel: C,
      messages: m,
      unreadCount: g,
      showNewMessagesBar: E,
      messageDisplayCompact: S,
      channelStream: A,
      uploads: _,
      loadMore: G.loadMore,
      scrollManager: G,
      specs: k,
      filterAfterTimestamp: null != x ? x : B,
      showingQuarantineBanner: R,
      isAtBottom: F,
      jumpToPresent: () => {
        if (m.hasPresent()) {
          var e;
          null === (e = G.ref.current) || void 0 === e || e.scrollToBottom({
            animate: !f.default.useReducedMotion
          })
        } else d.default.jumpToPresent(C.id, b.MAX_MESSAGES_PER_CHANNEL)
      }
    });
  ! function(e) {
    let t = a.useCallback(() => {
        var t;
        return null === (t = e.current) || void 0 === t ? void 0 : t.scrollToBottom()
      }, [e]),
      n = a.useCallback(() => {
        var t;
        return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageUp({
          animate: !f.default.useReducedMotion
        })
      }, [e]),
      s = a.useCallback(() => {
        var t;
        return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageDown({
          animate: !f.default.useReducedMotion
        })
      }, [e]);
    (0, L.useComponentAction)({
      event: b.ComponentActions.SCROLLTO_PRESENT,
      handler: t
    }), (0, L.useComponentAction)({
      event: b.ComponentActions.SCROLL_PAGE_UP,
      handler: n
    }), (0, L.useComponentAction)({
      event: b.ComponentActions.SCROLL_PAGE_DOWN,
      handler: s
    })
  }(G.ref);
  let Y = (0, u.useFocusJumpSection)(),
    {
      ref: X,
      ...q
    } = (0, r.getContainerPropsFromNavigator)(w),
    J = a.useCallback(e => {
      var t;
      G.ref.current = e, X.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
    }, []);
  return (0, s.jsx)(r.ListNavigatorProvider, {
    navigator: w,
    children: (0, s.jsxs)("div", {
      className: i(H.messagesWrapper, l, "group-spacing-".concat(c)),
      children: [null != K ? K : W, (0, s.jsxs)(u.PinToBottomScrollerAuto, {
        ref: J,
        customTheme: !0,
        className: i(h, H.scroller),
        contentClassName: H.scrollerContent,
        onResize: G.handleResize,
        onScroll: G.handleScroll,
        onMouseDown: G.handleMouseDown,
        onMouseUp: G.handleMouseUp,
        ...Y,
        tabIndex: -1,
        role: "group",
        children: [z, (0, s.jsxs)("ol", {
          className: H.scrollerInner,
          "aria-label": P.default.Messages.CHANNEL_MESSAGES_A11Y_LABEL.format({
            channelName: C.name
          }),
          ...q,
          children: [(0, s.jsx)("span", {
            className: H.navigationDescription,
            id: "messagesNavigationDescription",
            "aria-hidden": !0,
            children: P.default.Messages.CHANNEL_MESSAGES_A11Y_DESCRIPTION
          }), V, (0, s.jsx)("div", {
            className: i({
              [H.scrollerSpacer]: !R,
              [H.empty]: 0 === m.length && !m.loadingMore,
              [H.emptyForum]: 1 === m.length && !m.loadingMore && C.isForumPost() && (null === (t = m.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(C))
            })
          })]
        })]
      }), Z]
    })
  })
}, (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden);
var U = a.memo(function(e) {
  let {
    channel: t,
    showingQuarantineBanner: n,
    forceCompact: l = !1,
    forceCozy: i = !1,
    ...r
  } = e, {
    canManageMessages: u,
    permissionVersion: d,
    canChat: p
  } = function(e) {
    let t = e.getGuildId(),
      n = (0, o.useStateFromStores)([A.default], () => null == t || A.default.canChatInGuild(t), [t]),
      {
        canManageMessages: s,
        permissionVersion: a
      } = (0, o.useStateFromStoresObject)([T.default], () => ({
        canManageMessages: T.default.can(b.Permissions.MANAGE_MESSAGES, e),
        permissionVersion: null != t ? T.default.getGuildVersion(t) : null
      }), [e, t]);
    return {
      canChat: n,
      permissionVersion: a,
      canManageMessages: s
    }
  }(t), {
    messageGroupSpacing: L,
    fontSize: y,
    messageDisplayCompact: D,
    renderSpoilers: O,
    keyboardModeEnabled: j
  } = function() {
    let e = g.MessageDisplayCompact.useSetting(),
      t = g.RenderSpoilers.useSetting(),
      {
        messageGroupSpacing: n,
        fontSize: s,
        keyboardModeEnabled: a
      } = (0, o.useStateFromStoresObject)([f.default], () => {
        let {
          messageGroupSpacing: e,
          fontSize: t,
          keyboardModeEnabled: n
        } = f.default;
        return {
          messageGroupSpacing: e,
          fontSize: t,
          keyboardModeEnabled: n
        }
      });
    return {
      messageGroupSpacing: n,
      messageDisplayCompact: e,
      renderSpoilers: t,
      fontSize: s,
      keyboardModeEnabled: a
    }
  }(), {
    messages: P,
    channelStream: H,
    oldestUnreadMessageId: U,
    editingMessageId: k
  } = function(e) {
    var t, n;
    let s = (0, o.useStateFromStores)([_.default], () => _.default.getMessages(e.id), [e.id]),
      l = (0, o.useStateFromStores)([M.default], () => {
        var t;
        return null !== (t = M.default.getOldestUnreadMessageId(e.id)) && void 0 !== t ? t : null
      }, [e.id]),
      {
        enabled: i
      } = C.default.useExperiment({
        location: "41de6d_1"
      }, {
        autoTrackExposure: !1
      }),
      r = null !== (n = null === (t = N.default.getUser(E.default.getId())) || void 0 === t ? void 0 : t.hasFlag(b.UserFlags.SPAMMER)) && void 0 !== n && n,
      u = (0, c.useChannelSummariesExperiment)(e),
      d = (0, h.default)("use_topic_dividers_in_chat"),
      f = (0, o.useStateFromStoresArray)([m.default], () => {
        var t;
        return u && d && null !== (t = m.default.summaries(e.id)) && void 0 !== t ? t : []
      }, [u, e.id, d]),
      p = (0, o.useStateFromStores)([m.default], () => u ? m.default.selectedSummary(e.id) : null, [u, e.id]),
      g = a.useMemo(() => (0, R.default)({
        channel: e,
        messages: s,
        oldestUnreadMessageId: l,
        treatSpam: i && !r,
        summaries: f,
        selectedSummary: p
      }), [s, e, l, i, f, p]),
      A = (0, o.useStateFromStores)([S.default], () => {
        var t;
        return null === (t = S.default.getEditingMessage(e.id)) || void 0 === t ? void 0 : t.id
      });
    return {
      messages: s,
      channelStream: g,
      oldestUnreadMessageId: l,
      editingMessageId: A
    }
  }(t);
  return (0, s.jsx)(v.ObscuredDisplayContext.Provider, {
    value: (0, x.default)(O, u),
    children: (0, s.jsx)(F, {
      ...r,
      messageGroupSpacing: L,
      showNewMessagesBar: !0,
      channel: t,
      messageDisplayCompact: !i && (l || D),
      messages: P,
      channelStream: H,
      permissionVersion: d,
      uploads: (0, o.useStateFromStores)([I.default], () => I.default.getFiles(t.id), [t]),
      unreadCount: (0, o.useStateFromStores)([M.default], () => M.default.getUnreadCount(t.id), [t]),
      hasUnreads: null != U,
      canChat: p,
      editingMessageId: k,
      fontSize: y,
      keyboardModeEnabled: j,
      showingQuarantineBanner: n
    })
  })
})
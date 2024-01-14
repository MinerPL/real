"use strict";
s.r(t), s.d(t, {
  MAX_THUMBNAIL_HEIGHT: function() {
    return en
  },
  MAX_THUMBNAIL_WIDTH: function() {
    return ea
  },
  default: function() {
    return el
  },
  useHighlightedChannelName: function() {
    return er
  },
  MessageCount: function() {
    return ed
  },
  DefaultReaction: function() {
    return ec
  },
  MostUsedReaction: function() {
    return eh
  },
  Facepile: function() {
    return em
  }
}), s("222007");
var n = s("37983"),
  a = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("627445"),
  o = s.n(r),
  u = s("866227"),
  d = s.n(u),
  c = s("974667"),
  h = s("446674"),
  f = s("669491"),
  m = s("77078"),
  g = s("125667"),
  p = s("731898"),
  S = s("419135"),
  v = s("651693"),
  x = s("605160"),
  C = s("875978"),
  T = s("70845"),
  N = s("95045"),
  E = s("359132"),
  I = s("933629"),
  _ = s("350134"),
  A = s("845579"),
  M = s("982108"),
  F = s("42203"),
  j = s("957255"),
  O = s("27618"),
  w = s("471671"),
  y = s("738107"),
  L = s("594098"),
  R = s("505684"),
  b = s("109264"),
  D = s("93427"),
  P = s("956089"),
  U = s("811305"),
  H = s("888400"),
  k = s("339792"),
  B = s("680986"),
  z = s("612278"),
  G = s("430475"),
  W = s("994810"),
  V = s("512630"),
  Y = s("578198"),
  Z = s("136460"),
  q = s("601016"),
  K = s("810758"),
  X = s("251432"),
  Q = s("390083"),
  J = s("49111"),
  $ = s("719347"),
  ee = s("782340"),
  et = s("260177"),
  es = s("632215");
let en = 72,
  ea = 72;
var el = a.memo(function(e) {
  let {
    threadId: t,
    goToThread: s,
    observePostVisibilityAnalytics: l,
    overrideMedia: r,
    className: u,
    containerWidth: d
  } = e, {
    channel: f,
    isOpen: g,
    messageCount: S,
    firstMessage: v,
    content: x,
    media: C
  } = function(e) {
    let {
      threadId: t,
      overrideMedia: s
    } = e, n = (0, h.useStateFromStores)([F.default], () => F.default.getChannel(t));
    o(null != n, "the thread should not be null here, a store must have missed an update");
    let a = (0, h.useStateFromStores)([M.default], () => M.default.getCurrentSidebarChannelId(n.parent_id) === n.id),
      {
        firstMessage: l
      } = (0, z.useFirstForumPostMessage)(n),
      {
        content: i,
        firstMedia: r
      } = (0, B.useForumPostFirstMessageMarkup)({
        firstMessage: l
      }),
      {
        messageCountText: u
      } = (0, B.useMessageCount)(n);
    return {
      channel: n,
      isOpen: a,
      messageCount: u,
      firstMessage: l,
      content: i,
      media: null != s ? s : r
    }
  }({
    threadId: t,
    overrideMedia: r
  }), {
    ref: T,
    height: N
  } = (0, p.default)(), E = (0, Y.useForumPostComposerStore)(e => e.setCardHeight);
  a.useEffect(() => {
    null != N && E(t, N)
  }, [N, E, t]), a.useEffect(() => {
    null == l || l(T.current, t)
  }, [T, l, t]);
  let I = a.useRef(null),
    {
      handleLeftClick: _,
      handleRightClick: A
    } = (0, Q.default)({
      facepileRef: I,
      goToThread: s,
      channel: f
    }),
    {
      role: j,
      onFocus: O,
      ...w
    } = (0, c.useListItem)(t),
    {
      isFocused: y,
      handleFocus: L,
      handleBlur: R
    } = (0, K.default)(O);
  return (0, n.jsxs)("div", {
    ref: T,
    "data-item-id": t,
    onClick: _,
    onContextMenu: A,
    className: i(et.container, u, {
      [et.isOpen]: g
    }),
    children: [(0, n.jsx)(m.Clickable, {
      onClick: _,
      focusProps: {
        ringTarget: T
      },
      onContextMenu: A,
      "aria-label": ee.default.Messages.FORUM_POST_ARIA_LABEL.format({
        title: f.name,
        count: S
      }),
      className: et.focusTarget,
      onFocus: L,
      onBlur: R,
      ...w
    }), (0, n.jsxs)("div", {
      className: et.left,
      children: [(0, n.jsx)(m.HeadingLevel, {
        children: (0, n.jsx)(ei, {
          channel: f,
          firstMessage: v,
          content: x,
          hasMediaAttachment: null != C,
          containerWidth: d
        })
      }), (0, n.jsx)(m.FocusBlock, {
        enabled: !y,
        children: (0, n.jsx)(eu, {
          channel: f,
          firstMessage: v,
          facepileRef: I
        })
      })]
    }), (null == v ? void 0 : v.blocked) || null == C ? null : (0, n.jsx)(eg, {
      channel: f,
      firstMedia: C
    })]
  })
});

function ei(e) {
  let {
    channel: t,
    firstMessage: s,
    content: a,
    hasMediaAttachment: l,
    containerWidth: r
  } = e, {
    isNew: o,
    hasUnreads: u
  } = (0, B.useForumPostReadStates)(t), d = er(t), {
    postTitleRef: c,
    isNewBadgeOverflow: h
  } = (0, X.useNewBadgeOverflowAware)(o, 24, r);
  return (0, n.jsxs)("div", {
    className: et.body,
    children: [(0, n.jsx)(q.default, {
      channel: t
    }), (0, n.jsx)("div", {
      className: i(et.header, {
        [et.withNewBadgeOverflow]: h
      }),
      children: (0, n.jsxs)("div", {
        className: et.headerText,
        children: [(0, n.jsx)(m.Heading, {
          variant: "heading-lg/semibold",
          color: u ? "header-primary" : "text-muted",
          lineClamp: 2,
          className: et.postTitleText,
          children: (0, n.jsxs)("span", {
            ref: c,
            children: [d, o && (0, n.jsx)("span", {
              className: et.newBadgeWrapper,
              children: (0, n.jsx)(P.TextBadge, {
                className: et.newBadge,
                color: f.default.unsafe_rawColors.BRAND_260.css,
                text: ee.default.Messages.NEW
              })
            })]
          })
        }), o && h && (0, n.jsx)(P.TextBadge, {
          className: et.newBadge,
          color: f.default.unsafe_rawColors.BRAND_260.css,
          text: ee.default.Messages.NEW
        })]
      })
    }), (0, n.jsx)("div", {
      className: et.message,
      children: (0, n.jsx)(eo, {
        channel: t,
        message: s,
        content: a,
        hasMediaAttachment: l,
        hasUnreads: u
      })
    })]
  })
}

function er(e) {
  let t = (0, h.useStateFromStores)([W.default], () => W.default.getHasSearchResults(e.parent_id)),
    s = (0, h.useStateFromStores)([W.default], () => W.default.getSearchQuery(e.parent_id)),
    n = a.useMemo(() => (0, S.createASTHighlighter)(t && null != s ? s : ""), [t, s]),
    l = a.useMemo(() => (0, N.default)({
      content: e.name,
      embeds: []
    }, {
      postProcessor: n
    }).content, [e.name, n]);
  return l
}
let eo = a.memo(function(e) {
  let {
    message: t,
    channel: s,
    content: a,
    hasMediaAttachment: l,
    hasUnreads: r
  } = e, o = (0, h.useStateFromStores)([O.default], () => null != t && O.default.isBlocked(t.author.id)), u = (0, h.useStateFromStores)([G.default], () => G.default.isLoading(s.id)), d = (0, h.useStateFromStores)([j.default], () => j.default.can(J.Permissions.MANAGE_MESSAGES, s)), c = A.RenderSpoilers.useSetting(), f = null;
  if (o) f = (0, n.jsx)(m.Text, {
    className: et.blockedMessage,
    variant: "text-sm/medium",
    color: "text-muted",
    children: ee.default.Messages.FORUM_POST_BLOCKED_FIRST_MESSAGE
  });
  else {
    let {
      contentPlaceholder: e,
      renderedContent: s
    } = null == t ? {
      contentPlaceholder: null,
      renderedContent: null
    } : (0, D.renderSingleLineMessage)(t, a, o, i(et.messageContent, es.inlineFormat, es.smallFontSize), {
      iconClass: et.messageContentIcon,
      iconSize: $.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
    });
    f = null != s ? (0, n.jsx)(m.Text, {
      variant: "text-sm/semibold",
      color: r ? "header-secondary" : "text-muted",
      children: s
    }) : l ? null : (0, n.jsx)(m.Text, {
      tag: "span",
      variant: "text-sm/medium",
      color: r ? "header-secondary" : "text-muted",
      className: et.messageContent,
      children: null == t ? u ? null : ee.default.Messages.REPLY_QUOTE_MESSAGE_DELETED : e
    })
  }
  return (0, n.jsxs)(R.ObscuredDisplayContext.Provider, {
    value: (0, T.default)(c, d),
    children: [!o && (0, n.jsx)(Z.default, {
      channel: s,
      message: t,
      renderColon: null != f,
      hasUnreads: r
    }), (0, n.jsx)(m.FocusBlock, {
      className: et.messageFocusBlock,
      children: f
    })]
  })
});

function eu(e) {
  let {
    channel: t,
    facepileRef: s,
    firstMessage: a
  } = e, l = (0, B.useTypingUserIds)(t), i = (null == a ? void 0 : a.reactions) != null && a.reactions.length > 0;
  return (0, n.jsxs)("div", {
    className: et.footer,
    children: [i || null == a ? null : (0, n.jsx)(ec, {
      firstMessage: a,
      channel: t
    }), null == a ? null : (0, n.jsx)(eh, {
      firstMessage: a,
      channel: t
    }), (0, n.jsx)(ed, {
      channel: t,
      iconSize: 14
    }), (0, n.jsx)("span", {
      className: et.bullet,
      children: "•"
    }), l.length > 0 ? (0, n.jsxs)("div", {
      className: et.typing,
      children: [(0, n.jsx)(em, {
        channel: t,
        userIds: l,
        facepileRef: s
      }), (0, n.jsx)("div", {
        className: et.dots,
        children: (0, n.jsx)(m.Dots, {
          themed: !0,
          dotRadius: 2
        })
      }), (0, n.jsx)(g.default, {
        channel: t,
        className: et.typingUsers,
        renderDots: !1
      })]
    }) : (0, n.jsx)(ef, {
      channel: t
    })]
  })
}

function ed(e) {
  let {
    channel: t,
    iconSize: s,
    showReadState: a = !1
  } = e, {
    messageCountText: l,
    unreadCount: r
  } = (0, B.useMessageCount)(t);
  return (0, n.jsxs)("div", {
    className: i(et.messageCountBox, {
      [et.hasRead]: a && null == r
    }),
    children: [(0, n.jsx)("span", {
      className: et.messageCountIcon,
      children: (0, n.jsx)(b.default, {
        width: s,
        height: s
      })
    }), "number" == typeof l ? (0, n.jsx)(y.default, {
      value: l,
      digitWidth: 9,
      className: et.messageCountText
    }) : (0, n.jsx)("div", {
      className: et.messageCountText,
      children: l
    }), null == r ? null : (0, n.jsxs)(m.Text, {
      className: et.newMessageCount,
      variant: "text-sm/semibold",
      color: "text-brand",
      children: ["(", ee.default.Messages.FORUM_POST_MESSAGE_COUNT_SHORT.format({
        count: r
      }), ")"]
    })]
  })
}

function ec(e) {
  let {
    firstMessage: t,
    channel: s
  } = e, a = (0, h.useStateFromStores)([F.default], () => F.default.getChannel(s.parent_id)), l = (0, B.useDefaultReactionEmoji)(a), {
    disableReactionCreates: i,
    isLurking: r,
    isPendingMember: o
  } = (0, E.default)(s);
  return null == l || i ? null : (0, n.jsx)(_.Reaction, {
    className: et.updateReactionButton,
    message: t,
    readOnly: s.isArchivedLockedThread(),
    useChatFontScaling: !1,
    isLurking: r,
    isPendingMember: o,
    emoji: l,
    hideCount: !0,
    count: 0,
    burst_count: 0,
    me: !1,
    me_burst: !1,
    type: C.ReactionTypes.NORMAL,
    emojiSize: "reaction"
  })
}

function eh(e) {
  var t;
  let {
    firstMessage: s,
    channel: a
  } = e, l = (0, B.useMostUsedReaction)(s), {
    disableReactionUpdates: i,
    isLurking: r,
    isPendingMember: o
  } = (0, E.default)(a);
  return null == l ? null : (0, n.jsx)(_.Reaction, {
    className: et.updateReactionButton,
    message: s,
    readOnly: i || a.isArchivedLockedThread(),
    isLurking: r,
    isPendingMember: o,
    useChatFontScaling: !1,
    type: l.burst_count >= l.count ? C.ReactionTypes.BURST : C.ReactionTypes.NORMAL,
    emojiSize: "reaction",
    ...l
  }, "".concat(null !== (t = l.emoji.id) && void 0 !== t ? t : 0, ":").concat(l.emoji.name))
}

function ef(e) {
  var t;
  let {
    channel: s
  } = e, {
    sortOrder: a
  } = (0, k.useForumChannelStore)(s.parent_id), l = (0, B.useLastActiveTimestamp)(s, a), i = null === (t = s.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp, r = null == i ? null : ee.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
    timestamp: (0, H.dateFormat)(d(i), "LLLL")
  });
  return (0, n.jsx)(m.Tooltip, {
    text: r,
    tooltipClassName: et.timestampTooltip,
    children: e => (0, n.jsx)(m.Text, {
      className: et.activityText,
      variant: "text-sm/normal",
      color: "header-secondary",
      ...e,
      children: l
    })
  })
}

function em(e) {
  let {
    channel: t,
    userIds: s,
    facepileRef: a
  } = e, l = (0, B.useFacepileUsers)(t, s);
  return (0, n.jsx)("div", {
    ref: a,
    children: (0, n.jsx)(U.default, {
      className: et.facepile,
      showDefaultAvatarsForNullUsers: !0,
      guildId: t.guild_id,
      users: l,
      max: 5,
      size: 16,
      hideMoreUsers: !0,
      showUserPopout: !0
    })
  })
}

function eg(e) {
  let t, s, {
      channel: a,
      firstMedia: l
    } = e,
    r = (0, h.useStateFromStores)([w.default], () => w.default.isFocused()),
    o = (0, v.isAnimatedImageUrl)(l.src),
    u = A.GifAutoPlay.useSetting(),
    [d, c] = (0, x.useShouldObscure)({
      media: l,
      channel: a
    }),
    f = (0, x.getObscuredAlt)(c),
    {
      src: g,
      width: p,
      height: S,
      alt: C
    } = l;
  return S > p ? s = ea : t = en, (0, n.jsx)(m.FocusBlock, {
    enabled: !0,
    children: (0, n.jsxs)("div", {
      className: et.bodyMedia,
      onClick: e => e.stopPropagation(),
      children: [g.startsWith("data:") ? (0, n.jsx)(L.default, {
        src: g,
        maxHeight: t,
        maxWidth: s,
        width: p,
        height: S,
        alt: null != C && d ? f : C,
        className: et.thumbnailContainer,
        imageClassName: i({
          [et.obscured]: d,
          [et.thumbnailOverride]: !0
        })
      }) : (0, I.renderImageComponent)({
        src: g,
        maxHeight: t,
        maxWidth: s,
        width: p,
        height: S,
        alt: null != C && d ? f : C,
        autoPlay: u,
        animated: o && !d && r,
        containerClassName: et.thumbnailContainer,
        imageClassName: i({
          [et.obscured]: d
        })
      }), d && (0, n.jsx)(V.default, {
        iconClassname: et.obscuredTag,
        obscureReason: c
      })]
    })
  })
}
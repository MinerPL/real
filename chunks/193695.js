"use strict";
a.r(t), a.d(t, {
  DEFAULT_INCREASED_ACTIVITY_FORUM_POST_HEIGHT: function() {
    return ev
  },
  default: function() {
    return eR
  }
}), a("222007");
var s = a("37983"),
  n = a("884691"),
  l = a("414456"),
  r = a.n(l),
  i = a("627445"),
  o = a.n(i),
  u = a("866227"),
  d = a.n(u),
  c = a("974667"),
  m = a("335710"),
  h = a("249654"),
  f = a("446674"),
  g = a("669491"),
  x = a("77078"),
  C = a("125667"),
  T = a("731898"),
  _ = a("419135"),
  S = a("206230"),
  p = a("651693"),
  E = a("605160"),
  N = a("875978"),
  M = a("70845"),
  A = a("913491"),
  v = a("95045"),
  I = a("574073"),
  j = a("359132"),
  R = a("836943"),
  O = a("933629"),
  F = a("592707"),
  b = a("350134"),
  L = a("232259"),
  P = a("144491"),
  y = a("208021"),
  D = a("582713"),
  w = a("300322"),
  U = a("845579"),
  k = a("982108"),
  H = a("42203"),
  B = a("957255"),
  G = a("660478"),
  V = a("27618"),
  z = a("471671"),
  W = a("738107"),
  K = a("952368"),
  Y = a("491605"),
  X = a("505684"),
  Z = a("109264"),
  q = a("566998"),
  Q = a("93427"),
  J = a("956089"),
  $ = a("888400"),
  ee = a("700097"),
  et = a("670902"),
  ea = a("339792"),
  es = a("680986"),
  en = a("612278"),
  el = a("791234"),
  er = a("994810"),
  ei = a("867965"),
  eo = a("43836"),
  eu = a("512630"),
  ed = a("152637"),
  ec = a("578198"),
  em = a("968462"),
  eh = a("136460"),
  ef = a("601016"),
  eg = a("810758"),
  ex = a("390083"),
  eC = a("49111"),
  eT = a("724210"),
  e_ = a("648564"),
  eS = a("719347"),
  ep = a("782340"),
  eE = a("552175"),
  eN = a("590787"),
  eM = a("632215");
let eA = 26,
  ev = 162 + eA,
  eI = async () => {
    let {
      default: e
    } = await a.el("170206").then(a.t.bind(a, "170206", 19));
    return e
  };

function ej(e) {
  let {
    shouldAnimate: t = !1
  } = e, a = (0, f.useStateFromStores)([S.default], () => S.default.useReducedMotion);
  return (0, s.jsxs)("div", {
    className: eE.startTheConversation,
    children: [(0, s.jsx)(Y.default, {
      importData: eI,
      shouldAnimate: t && !a,
      className: eE.wavingHand
    }), (0, s.jsx)(x.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: ep.default.Messages.FORUM_START_THE_CONVERSATION_HEADER
    })]
  })
}
var eR = n.memo(function(e) {
  let {
    className: t,
    threadId: a,
    goToThread: l,
    observePostVisibilityAnalytics: i
  } = e, u = n.useRef(null), {
    channel: d,
    isOpen: m,
    messageCount: h,
    unreadCount: g,
    firstMessage: C,
    firstMessageLoaded: _,
    firstMedia: S,
    firstMediaIsEmbed: p
  } = function(e) {
    let {
      threadId: t
    } = e, a = (0, f.useStateFromStores)([H.default], () => H.default.getChannel(t));
    o(null != a, "the thread should not be null here, a store must have missed an update");
    let s = (0, f.useStateFromStores)([k.default], () => k.default.getCurrentSidebarChannelId(a.parent_id) === a.id),
      {
        loaded: n,
        firstMessage: l
      } = (0, en.useFirstForumPostMessage)(a),
      {
        content: r,
        firstMedia: i,
        firstMediaIsEmbed: u
      } = (0, es.useForumPostFirstMessageMarkup)({
        firstMessage: l
      }),
      {
        messageCount: d,
        unreadCount: c
      } = (0, es.useMessageCount)(a);
    return {
      channel: a,
      isOpen: s,
      messageCount: d,
      unreadCount: c,
      firstMessage: l,
      firstMessageLoaded: n,
      firstMedia: i,
      firstMediaIsEmbed: u,
      content: r
    }
  }({
    threadId: a
  }), E = (0, f.useStateFromStores)([H.default], () => H.default.getChannel(d.parent_id)), {
    ref: N,
    height: M
  } = (0, T.default)(), A = (0, ec.useForumPostComposerStore)(e => e.setCardHeight), [v, I] = n.useState(162);
  n.useEffect(() => {
    null != M && (A(a, M + eA), I(M))
  }, [N, M, A, a, I, _]), n.useEffect(() => {
    null == i || i(u.current, a)
  }, [i, a, _]);
  let j = n.useRef(null),
    {
      handleLeftClick: R,
      handleRightClick: O
    } = (0, ex.default)({
      facepileRef: j,
      goToThread: l,
      channel: d
    }),
    {
      role: F,
      onFocus: b,
      ...L
    } = (0, c.useListItem)(a),
    {
      handleFocus: P,
      handleBlur: y
    } = (0, eg.default)(b);
  return (0, s.jsxs)("div", {
    ref: u,
    "data-item-id": a,
    onClick: R,
    onContextMenu: O,
    className: r(eE.container, t, {
      [eE.isOpen]: m
    }),
    children: [(0, s.jsx)(x.Clickable, {
      onClick: R,
      focusProps: {
        ringTarget: u
      },
      onContextMenu: O,
      "aria-label": ep.default.Messages.FORUM_POST_ARIA_LABEL.format({
        title: d.name,
        count: h
      }),
      className: eE.focusTarget,
      onFocus: P,
      onBlur: y,
      ...L
    }), (0, s.jsxs)("div", {
      className: eE.body,
      children: [(0, s.jsx)("div", {
        ref: N,
        className: eE.contentContainer,
        children: _ ? (0, s.jsx)(eO, {
          parentChannel: E,
          channel: d,
          firstMessage: C,
          messageCount: h,
          unreadCount: g,
          facepileRef: j,
          onClick: R
        }) : (0, s.jsx)(em.ForumPostContentPlaceholder, {})
      }), _ ? (null == C ? void 0 : C.blocked) || null == S ? null : (0, s.jsx)(eH, {
        channel: d,
        firstMedia: S,
        firstMessage: C,
        isEmbed: p,
        contentHeight: v
      }) : (0, s.jsx)(em.ForumPostMediaPreviewPlaceholder, {})]
    })]
  })
});

function eO(e) {
  let {
    parentChannel: t,
    channel: a,
    firstMessage: n,
    messageCount: l,
    unreadCount: r,
    facepileRef: i,
    onClick: o
  } = e, {
    isNew: u
  } = (0, es.useForumPostReadStates)(a), {
    forumPostContainsTags: d
  } = (0, ef.useTagsRowHooks)({
    channel: a,
    isNew: u
  });
  return (0, s.jsxs)("div", {
    className: eE.content,
    children: [(0, s.jsxs)("div", {
      className: eE.titleAndMessage,
      children: [d && (0, s.jsx)(ef.IncreasedActivityTagsRow, {
        channel: a,
        className: eE.tagsRow,
        tagsClassName: eE.tags
      }), d && (0, s.jsx)("hr", {
        className: eE.separator
      }), (0, s.jsx)(ek, {
        channel: a,
        firstMessage: n,
        isNew: u,
        containsTags: d
      }), (0, s.jsx)(x.HeadingLevel, {
        children: (0, s.jsx)(eP, {
          channel: a,
          onClick: o
        })
      }), null != n && (0, s.jsx)(eF, {
        firstMessage: n
      })]
    }), (0, s.jsxs)("div", {
      className: eE.engagement,
      children: [null != n && (0, s.jsx)(eD, {
        channel: a,
        firstMessage: n
      }), (0, s.jsx)(eb, {
        parentChannel: t,
        channel: a,
        messageCount: l,
        unreadCount: r,
        facepileRef: i
      })]
    })]
  })
}

function eF(e) {
  let {
    firstMessage: t
  } = e, a = (0, f.useStateFromStores)([V.default], () => null != t && V.default.isBlocked(t.author.id)), {
    content: l
  } = n.useMemo(() => (null == t ? void 0 : t.content) != null && "" !== t.content ? (0, v.default)(t, {
    formatInline: !0,
    noStyleAndInteraction: !0,
    allowHeading: !0,
    allowList: !0
  }) : {
    content: null
  }, [t]);
  return (0, s.jsx)(x.FocusBlock, {
    "aria-hidden": !0,
    className: eE.firstMessageContent,
    children: a ? ep.default.Messages.FORUM_POST_BLOCKED_FIRST_MESSAGE : null == l ? ep.default.Messages.REPLY_QUOTE_MESSAGE_DELETED : l
  })
}

function eb(e) {
  let {
    parentChannel: t,
    channel: a,
    messageCount: n,
    unreadCount: l,
    facepileRef: i
  } = e, o = (0, es.useTypingUserIds)(a), {
    mostRecentMessage: u
  } = (0, en.useMostRecentForumMessage)(t, a), d = (0, f.useStateFromStores)([B.default], () => B.default.can(eC.Permissions.SEND_MESSAGES_IN_THREADS, a)), {
    hasUnreads: c
  } = (0, es.useForumPostReadStates)(a), m = (0, f.useStateFromStores)([et.default], () => et.default.getFirstNoReplyThreadId()), h = (0, w.useIsNonModInLockedThread)(a), g = (0, I.useNullableMessageAuthor)(u);
  if (n > 0) {
    var C, T;
    return (0, s.jsxs)(x.Clickable, {
      onClick: e => {
        null != u && null != a.parent_id && (e.stopPropagation(), (0, ei.trackForumPostClicked)({
          guildId: a.guild_id,
          channelId: a.parent_id,
          postId: a.id,
          location: {
            page: eC.AnalyticsPages.GUILD_CHANNEL,
            section: eC.AnalyticsSections.FORUM_CHANNEL_POST
          }
        }), e.shiftKey ? (0, P.transitionToThreadMessage)(a, u.id, e_.OpenThreadAnalyticsLocations.BROWSER) : y.default.openThreadAsSidebar({
          guildId: a.guild_id,
          channelId: a.id,
          baseChannelId: a.parent_id,
          flash: !0,
          details: {
            type: D.SidebarOpenDetailsType.THREAD,
            initialMessageId: u.id
          }
        }))
      },
      children: [(0, s.jsxs)(x.HiddenVisually, {
        children: ["Latest message:", null != g ? null !== (C = g.nick) && void 0 !== C ? C : ep.default.Messages.UNKNOWN_USER : null, " ", null == (T = null == u ? void 0 : u.content) ? "" : T.length > 120 ? "".concat(T.substring(0, 120), "...") : T]
      }), (0, s.jsxs)(x.FocusBlock, {
        className: eE.replies,
        children: [(0, s.jsx)(ew, {
          messageCount: n,
          unreadCount: l,
          iconSize: 16
        }), o.length > 0 ? (0, s.jsx)(eL, {
          channel: a,
          typingUserIds: o,
          facepileRef: i
        }) : (0, s.jsx)(ey, {
          channel: a,
          mostRecentMessage: u,
          hasUnreads: c
        })]
      })]
    })
  }
  return h ? (0, s.jsx)("div", {
    className: eE.replies,
    children: (0, s.jsx)(x.Text, {
      variant: "text-sm/semibold",
      color: "text-muted",
      className: r(eE.mostRecentMessageContent, eE.nonUserMessage, eE.lockedMessage),
      children: ep.default.Messages.THREAD_HEADER_NOTICE_ACTIVE_LOCKED
    })
  }) : d && 0 === n ? (0, s.jsx)(x.FocusBlock, {
    "aria-hidden": !0,
    className: eE.replies,
    children: o.length > 0 ? (0, s.jsx)(eL, {
      channel: a,
      typingUserIds: o,
      facepileRef: i
    }) : (0, s.jsx)(ej, {
      shouldAnimate: m === a.id
    })
  }) : null
}

function eL(e) {
  let {
    channel: t,
    typingUserIds: a,
    facepileRef: n
  } = e;
  return (0, s.jsxs)("div", {
    className: eE.typing,
    children: [(0, s.jsx)(ed.Facepile, {
      channel: t,
      userIds: a,
      facepileRef: n
    }), (0, s.jsx)("div", {
      className: eE.dots,
      children: (0, s.jsx)(x.Dots, {
        themed: !0,
        dotRadius: 2
      })
    }), (0, s.jsx)(C.default, {
      channel: t,
      className: eE.typingUsers,
      renderDots: !1
    })]
  })
}

function eP(e) {
  let {
    channel: t,
    onClick: a
  } = e, {
    hasUnreads: l
  } = (0, es.useForumPostReadStates)(t), r = function(e) {
    let t = (0, f.useStateFromStores)([er.default], () => er.default.getHasSearchResults(e.parent_id)),
      a = (0, f.useStateFromStores)([er.default], () => er.default.getSearchQuery(e.parent_id)),
      s = n.useMemo(() => (0, _.createASTHighlighter)(t && null != a ? a : ""), [t, a]),
      l = n.useMemo(() => (0, v.default)({
        content: e.name,
        embeds: []
      }, {
        postProcessor: s
      }).content, [e.name, s]);
    return l
  }(t);
  return (0, s.jsx)(x.Heading, {
    variant: "heading-lg/semibold",
    color: l ? "header-primary" : "text-muted",
    className: eE.title,
    children: (0, s.jsx)(x.Clickable, {
      onClick: a,
      children: r
    })
  })
}
let ey = n.memo(function(e) {
  var t;
  let {
    channel: a,
    mostRecentMessage: l,
    hasUnreads: i
  } = e, o = (0, I.useNullableMessageAuthor)(l), u = (0, f.useStateFromStores)([V.default], () => null != l && V.default.isBlocked(l.author.id)), d = (0, f.useStateFromStores)([B.default], () => B.default.can(eC.Permissions.MANAGE_MESSAGES, a)), c = U.RenderSpoilers.useSetting(), m = (0, eo.useIsRecentMessageDeleted)(a), {
    content: h
  } = n.useMemo(() => (null == l ? void 0 : l.content) != null && "" !== l.content ? (0, v.default)(l, {
    formatInline: !0,
    noStyleAndInteraction: !0
  }) : {
    content: null
  }, [l]), g = null != l && (0, A.default)(l), C = null;
  if (u) C = (0, s.jsx)(x.Text, {
    className: eE.nonUserMessage,
    variant: "text-sm/medium",
    color: "text-muted",
    children: ep.default.Messages.FORUM_POST_BLOCKED_MOST_RECENT_MESSAGE
  });
  else {
    let {
      contentPlaceholder: e,
      renderedContent: t
    } = null == l ? {
      contentPlaceholder: null,
      renderedContent: null
    } : g ? {
      contentPlaceholder: null,
      renderedContent: ee.default.stringify(l, a)
    } : (0, Q.renderSingleLineMessage)(l, h, u, r(eE.mostRecentMessageContent, eM.inlineFormat, eM.smallFontSize), {
      iconClass: eE.messageContentIcon,
      iconSize: eS.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
    });
    C = null != t ? (0, s.jsx)(x.Text, {
      variant: "text-sm/semibold",
      color: i ? "header-secondary" : "text-muted",
      className: eE.mostRecentMessageContent,
      children: t
    }) : null != e ? (0, s.jsx)(x.Text, {
      variant: "text-sm/semibold",
      color: i ? "header-secondary" : "text-muted",
      className: eE.mostRecentMessageContent,
      children: e
    }) : m ? (0, s.jsx)(x.Text, {
      variant: "text-sm/semibold",
      color: i ? "header-secondary" : "text-muted",
      className: r(eE.mostRecentMessageContent, eE.nonUserMessage),
      children: ep.default.Messages.FORUM_CHANNEL_MOST_RECENT_MESSAGE_DELETED
    }) : null
  }
  let T = null != o ? null !== (t = o.nick) && void 0 !== t ? t : ep.default.Messages.UNKNOWN_USER : null,
    _ = (0, L.useUsernameHook)(null == l ? void 0 : l.author, a.id, a.guild_id, !0)(null != o ? o : void 0)((0, s.jsxs)(s.Fragment, {
      children: [null != T ? T : "", null != l ? ":" : ""]
    }), a.id);
  return (0, s.jsx)(X.ObscuredDisplayContext.Provider, {
    value: (0, M.default)(c, d),
    children: (0, s.jsxs)("div", {
      className: eE.mostRecentMessage,
      children: [null == T || g ? null : (0, s.jsx)("div", {
        className: eE.mostRecentMessageAuthor,
        children: (0, s.jsx)(x.Text, {
          tag: "span",
          variant: "text-sm/semibold",
          children: _
        })
      }), (0, s.jsx)(x.FocusBlock, {
        children: C
      })]
    })
  })
});

function eD(e) {
  let {
    channel: t,
    firstMessage: a
  } = e, l = (0, f.useStateFromStores)([H.default], () => H.default.getChannel(t.parent_id)), i = (0, es.useDefaultReactionEmoji)(l), {
    disableReactionUpdates: o,
    disableReactionCreates: u,
    isLurking: d,
    isPendingMember: c
  } = (0, j.default)(t), m = (0, F.findReactionIndex)(a.reactions, i) >= 0, h = !m && !u, {
    ref: g,
    width: x
  } = (0, T.default)(), [C, _] = n.useState(10), [S, p] = n.useState(!0);
  return n.useEffect(() => {
    if (null != x) _(Math.floor((x - 78) / 66)), p(!1)
  }, [x, a.reactions, i]), (0, s.jsxs)("div", {
    className: r(eE.reactionRow, {
      [eE.loading]: S
    }),
    ref: g,
    children: [h && null != i ? (0, s.jsx)(b.Reaction, {
      className: eE.defaultReaction,
      message: a,
      readOnly: !1,
      useChatFontScaling: !0,
      isLurking: d,
      isPendingMember: c,
      emoji: i,
      type: N.ReactionTypes.NORMAL,
      hideCount: !0,
      count: 0,
      me: !1,
      burst_count: 0,
      me_burst: !1
    }) : null, (0, s.jsx)(F.default, {
      message: a,
      channel: t,
      disableReactionCreates: u,
      disableReactionUpdates: o,
      useChatFontScaling: !0,
      className: eE.messageReactions,
      reactionClassName: eE.reaction,
      hoistReaction: i,
      forceHideReactionCreates: !0,
      maxReactions: C
    }), (0, s.jsx)("div", {
      className: eE.addReactionContainer,
      children: !u && (0, s.jsx)(R.ButtonAddReaction, {
        type: N.ReactionTypes.NORMAL,
        message: a,
        channel: t,
        useChatFontScaling: !0,
        className: eE.addReactButton,
        isForumToolbar: !1
      })
    })]
  })
}

function ew(e) {
  let {
    messageCount: t,
    unreadCount: a,
    iconSize: n
  } = e;
  return (0, s.jsxs)("div", {
    className: eE.messageCountBox,
    children: [(0, s.jsx)("span", {
      className: eE.messageCountIcon,
      children: (0, s.jsx)(Z.default, {
        width: n,
        height: n
      })
    }), "number" == typeof t ? (0, s.jsx)(W.default, {
      value: t,
      className: eE.messageCountText
    }) : (0, s.jsx)("div", {
      className: eE.messageCountText,
      children: t
    }), null == a ? null : (0, s.jsx)(x.Text, {
      className: eE.unreadMessagesCount,
      variant: "text-sm/semibold",
      color: "text-brand",
      children: ep.default.Messages.FORUM_POST_MESSAGE_COUNT_SHORT_PARENTHETICAL.format({
        count: a
      })
    })]
  })
}

function eU(e) {
  var t;
  let {
    channel: a
  } = e, {
    sortOrder: n
  } = (0, ea.useForumChannelStore)(a.parent_id), l = (0, es.useLastActiveTimestamp)(a, n), r = (0, f.useStateFromStores)([G.default], () => G.default.lastMessageId(a.id)), i = null != r ? h.default.extractTimestamp(r) : null, o = null === (t = a.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp, u = null == l ? null : n === m.ThreadSortOrder.CREATION_DATE ? ep.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
    timestamp: l
  }) : l, c = n === m.ThreadSortOrder.CREATION_DATE && null != o ? ep.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
    timestamp: (0, $.dateFormat)(d(o), "LLLL")
  }) : null != i ? (0, $.dateFormat)(d(i), "LLLL") : null;
  return null == c || null == u ? null : (0, s.jsx)(x.Tooltip, {
    text: c,
    tooltipClassName: eE.timestampTooltip,
    "aria-label": ep.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP_LABEL,
    children: e => (0, s.jsx)(x.Text, {
      variant: "text-xs/medium",
      color: "header-secondary",
      ...e,
      children: u
    })
  })
}

function ek(e) {
  let {
    channel: t,
    firstMessage: a,
    isNew: n,
    containsTags: l
  } = e, r = t.hasFlag(eT.ChannelFlags.PINNED), i = (0, f.useStateFromStores)([V.default], () => null != a && V.default.isBlocked(a.author.id));
  return (0, s.jsxs)("div", {
    className: eE.header,
    children: [!l && r && (0, s.jsx)("div", {
      className: eE.pinIcon,
      children: (0, s.jsx)(x.Tooltip, {
        text: ep.default.Messages.PINNED_POST,
        children: e => (0, s.jsx)(q.default, {
          ...e,
          width: ef.PIN_ICON_SIZE,
          height: ef.PIN_ICON_SIZE,
          color: "white"
        })
      })
    }), !i && (0, s.jsx)(eh.default, {
      channel: t,
      message: a
    }), (0, s.jsx)(eU, {
      channel: t
    }), n && (0, s.jsx)(J.TextBadge, {
      className: eE.newBadge,
      color: g.default.unsafe_rawColors.BRAND_260.css,
      text: ep.default.Messages.NEW
    })]
  })
}

function eH(e) {
  let {
    channel: t,
    firstMedia: a,
    firstMessage: n,
    isEmbed: l,
    contentHeight: i
  } = e, o = (0, f.useStateFromStores)([z.default], () => z.default.isFocused()), u = (0, p.isAnimatedImageUrl)(a.src), d = U.GifAutoPlay.useSetting(), {
    src: c,
    width: m,
    height: h,
    alt: g
  } = a, [C, T] = (0, E.useShouldObscure)({
    media: a,
    channel: t
  }), _ = (0, E.getObscuredAlt)(T);
  return (0, s.jsx)(x.FocusBlock, {
    enabled: !0,
    children: (0, s.jsxs)("div", {
      className: r(eE.bodyMedia, {
        [eN.embedFull]: l
      }),
      style: {
        height: i,
        borderColor: (0, el.getEmbedColor)(n, C)
      },
      onClick: e => e.stopPropagation(),
      children: [c.startsWith("data:") ? (0, s.jsx)(K.default, {
        src: c,
        width: m,
        height: h,
        minWidth: 143,
        minHeight: i,
        maxHeight: i,
        alt: null != g && C ? _ : g,
        imageClassName: r({
          [eE.obscured]: C
        })
      }) : (0, O.renderImageComponent)({
        src: c,
        width: m,
        height: h,
        minWidth: 143,
        minHeight: i,
        maxHeight: i,
        alt: null != g && C ? _ : g,
        autoPlay: d,
        animated: u && !C && o,
        imageContainerClassName: r({
          [eE.obscured]: C
        })
      }), C && (0, s.jsx)(eu.default, {
        iconClassname: eE.obscuredTag,
        obscureReason: T
      })]
    })
  })
}
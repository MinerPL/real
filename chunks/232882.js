"use strict";
a.r(t), a.d(t, {
  ReferenceMessagesBase: function() {
    return G
  },
  ReferenceMessages: function() {
    return O
  },
  default: function() {
    return y
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
  s = a("355262"),
  i = a("611221"),
  d = a("446674"),
  r = a("77078"),
  u = a("272030"),
  o = a("679653"),
  c = a("419830"),
  f = a("537325"),
  m = a("208021"),
  h = a("582713"),
  E = a("982108"),
  g = a("42203"),
  I = a("27618"),
  _ = a("811305"),
  x = a("185014"),
  v = a("886484"),
  S = a("2804"),
  C = a("468670"),
  N = a("120027"),
  p = a("113312"),
  T = a("339274"),
  A = a("605143"),
  j = a("759668"),
  M = a("208695"),
  D = a("49111"),
  F = a("724210"),
  L = a("782340"),
  R = a("820984");
let b = async () => {
  let {
    default: e
  } = await a.el("437150").then(a.bind(a, "437150"));
  return e
};

function G(e) {
  let {
    guildId: t,
    maxUsers: a,
    users: n,
    text: s
  } = e;
  return (0, l.jsxs)("div", {
    className: R.referenceMessagesText,
    children: [(0, l.jsx)(_.default, {
      guildId: t,
      users: n,
      size: _.Sizes.SIZE_16,
      className: R.userSummaryItem,
      max: a,
      showDefaultAvatarsForNullUsers: !0
    }), (0, l.jsx)(r.Text, {
      variant: "text-xs/normal",
      color: "header-secondary",
      children: s
    })]
  })
}

function O(e) {
  let {
    referenceMessages: t,
    guildId: a
  } = e, s = n.useMemo(() => {
    let e = new Set;
    return t.map(e => e.author).filter(t => !(null == t || e.has(t.id)) && (e.add(t.id), !0)).slice(0, 3)
  }, [t]), i = t.length;
  if (0 === i) return null;
  let d = i > 3 ? L.default.Messages.GUILD_FEED_MESSAGE_ITEM_MAX_REPLIES.format({
    maxReplies: 3
  }) : L.default.Messages.GUILD_FEED_MESSAGE_ITEM_NUM_REPLIES.format({
    numReplies: i
  });
  return (0, l.jsx)(G, {
    guildId: a,
    users: s,
    text: d
  })
}
var y = n.forwardRef(function(e, t) {
  var a, _;
  let {
    guildId: G,
    messageItem: y,
    showFeedback: H,
    setOnDismissedFeedback: k
  } = e, U = y.message.channel_id, w = y.message.id, {
    message: B,
    isFeaturedMessage: P
  } = (0, d.useStateFromStoresObject)([x.default], () => {
    let e = x.default.getCachedMessage(G, U, w),
      t = null != e && x.default.getIsItemFeatured({
        guildId: G,
        entity: e,
        entityType: i.GuildFeedItemTypes.MESSAGE
      });
    return {
      message: e,
      isFeaturedMessage: t
    }
  }, [G, U, w]), V = (0, d.useStateFromStores)([g.default], () => g.default.getChannel(U)), W = (0, c.getChannelIconComponent)(V, void 0, {
    textFocused: !0
  }), K = (0, c.getChannelIconTooltipText)(V), z = null !== (a = null == y ? void 0 : y.referenceMessages) && void 0 !== a ? a : [], Y = (0, o.default)(V), [Z, X] = n.useState(!1), J = (0, d.useStateFromStores)([I.default], () => null != B && I.default.isBlocked(null == B ? void 0 : B.author.id)), q = (0, s.useListItem)(null !== (_ = null == B ? void 0 : B.id) && void 0 !== _ ? _ : w), Q = (0, S.default)(y), $ = (0, d.useStateFromStores)([E.default], () => E.default.getSidebarState(F.StaticChannelRoute.GUILD_HOME)), ee = (0, v.getSidebarMessageId)($, V), et = null != ee && y.message.id === ee, ea = y.highlighted ? L.default.Messages.GUILD_FEED_SPECIAL_HIGHLIGHT : P ? L.default.Messages.GUILD_FEED_FEATURED_BY_MODERATORS : null, {
    handleItemClick: el,
    handleChannelClick: en,
    handleCardClick: es,
    handleMessageClick: ei
  } = (0, C.default)({
    guildId: G,
    channelId: U,
    feedItemId: Q,
    onChannelClick: () => (0, f.default)(D.Routes.CHANNEL(G, U, w)),
    onContentClick: () => {
      m.default.openChannelAsSidebar({
        guildId: G,
        channelId: U,
        baseChannelId: F.StaticChannelRoute.GUILD_HOME,
        details: {
          type: h.SidebarOpenDetailsType.HOME,
          initialMessageId: w,
          highlightMessageIds: new Set([w])
        }
      })
    }
  });
  if (null == V || null == B || null == y || J) return null;
  let ed = e => {
    e.stopPropagation(), (0, u.openContextMenuLazy)(e, async () => {
      let e = await b();
      return t => (0, l.jsx)(e, {
        ...t,
        messageItem: y,
        channel: V,
        message: B
      })
    })
  };
  return (0, l.jsxs)(T.default, {
    className: H ? R.containerNoPadding : R.container,
    ref: t,
    selected: et,
    onCardClick: es,
    onItemClick: el,
    onContextMenu: ed,
    itemId: Q,
    ariaLabel: L.default.Messages.GUILD_FEED_MESSAGE_ITEM_A11Y_LABEL.format({
      channelName: Y
    }),
    listItemProps: q,
    onMouseEnter: () => X(!0),
    onMouseLeave: () => X(!1),
    children: [(0, l.jsxs)(r.HeadingLevel, {
      component: (0, l.jsxs)(A.default, {
        children: [(0, l.jsxs)("div", {
          className: R.messageHeaderMenuLeft,
          children: [(0, l.jsxs)(r.Clickable, {
            className: R.channelNameContainer,
            onClick: en,
            children: [null != W ? (0, l.jsx)(r.Tooltip, {
              text: K,
              delay: 500,
              children: e => (0, l.jsx)(W, {
                ...e,
                className: R.channelIcon,
                height: 16,
                width: 16
              })
            }) : null, (0, l.jsx)(r.Heading, {
              lineClamp: 1,
              variant: "heading-sm/semibold",
              children: Y
            })]
          }), null != ea && (0, l.jsxs)("div", {
            className: R.featuredMessageContainer,
            children: [(0, l.jsx)(N.default, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              className: R.featuredMessageIcon
            }), (0, l.jsx)(r.Text, {
              className: R.featuredMessageText,
              variant: "text-sm/normal",
              color: "header-secondary",
              children: ea
            })]
          })]
        }), (0, l.jsx)("div", {
          className: R.messageHeaderMenuRight,
          children: (0, l.jsx)(j.default, {
            feedItem: y,
            guildId: G,
            onContextMenu: ed
          })
        })]
      }),
      children: [(0, l.jsx)(M.default, {
        className: R.messageItemBody,
        guildId: G,
        animateAvatar: Z,
        channel: V,
        message: B,
        feedItemId: y.id,
        onMessageClick: ei
      }), (0, l.jsx)(O, {
        referenceMessages: z,
        guildId: G
      })]
    }), H && (0, l.jsx)(p.default, {
      guildId: G,
      guildFeedItem: y,
      setOnDismissFeedback: k
    })]
  })
})
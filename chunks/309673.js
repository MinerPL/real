"use strict";
a.r(t), a.d(t, {
  default: function() {
    return P
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
  s = a("597755"),
  i = a.n(s),
  d = a("355262"),
  r = a("611221"),
  u = a("446674"),
  o = a("77078"),
  c = a("272030"),
  f = a("679653"),
  m = a("419830"),
  h = a("680986"),
  E = a("90625"),
  g = a("537325"),
  I = a("208021"),
  _ = a("800843"),
  x = a("610730"),
  v = a("982108"),
  S = a("42203"),
  C = a("27618"),
  N = a("185014"),
  p = a("886484"),
  T = a("2804"),
  A = a("468670"),
  j = a("120027"),
  M = a("113312"),
  D = a("339274"),
  F = a("605143"),
  L = a("759668"),
  R = a("208695"),
  b = a("232882"),
  G = a("49111"),
  O = a("724210"),
  y = a("648564"),
  H = a("782340"),
  k = a("137722");
let U = new Set(["Electron", "Chrome"]),
  w = async () => {
    let {
      default: e
    } = await a.el("437150").then(a.bind(a, "437150"));
    return e
  };

function B(e) {
  let {
    channel: t
  } = e, a = (0, u.useStateFromStores)([x.default], () => {
    var e;
    return null !== (e = x.default.getCount(t.id)) && void 0 !== e ? e : 0
  }), n = a >= y.MAX_THREAD_MESSAGE_COUNT ? H.default.Messages.GUILD_FEED_MESSAGE_ITEM_MAX_REPLIES.format({
    maxReplies: y.MAX_THREAD_MESSAGE_COUNT
  }) : H.default.Messages.GUILD_FEED_MESSAGE_ITEM_NUM_REPLIES.format({
    numReplies: a
  }), s = (0, u.useStateFromStores)([_.default], () => _.default.getMemberIdsPreview(t.id)), i = (0, h.useFacepileUsers)(t, null != s ? s : []);
  return 0 === a ? null : (0, l.jsx)(b.ReferenceMessagesBase, {
    guildId: t.guild_id,
    maxUsers: 5,
    users: i,
    text: n
  })
}
var P = n.forwardRef(function(e, t) {
  var a;
  let {
    guildId: s,
    postItem: _,
    showFeedback: x,
    setOnDismissedFeedback: b
  } = e, {
    thread: y
  } = _, P = (0, u.useStateFromStores)([S.default], () => S.default.getChannel(y.id), [y.id]), {
    message: V,
    isFeaturedPost: W
  } = (0, u.useStateFromStoresObject)([N.default], () => {
    let e = N.default.getCachedMessage(s, y.id, _.message.id),
      t = N.default.getIsItemFeatured({
        guildId: s,
        entity: y,
        entityType: r.GuildFeedItemTypes.FORUM_POST
      });
    return {
      message: e,
      isFeaturedPost: t
    }
  }, [s, _.message.id, y]), K = (0, f.default)(y), z = (0, u.useStateFromStores)([C.default], () => null != V && C.default.isBlocked(null == V ? void 0 : V.author.id)), Y = (0, d.useListItem)(null !== (a = null == V ? void 0 : V.id) && void 0 !== a ? a : _.message.id), Z = (0, T.default)(_), X = (0, m.getChannelIconTooltipText)(y), J = (0, u.useStateFromStores)([S.default], () => S.default.getChannel(y.parent_id)), q = (0, f.default)(J), Q = (0, m.getChannelIconComponent)(J), [$, ee] = n.useState(!1), et = (0, u.useStateFromStores)([v.default], () => v.default.getSidebarState(O.StaticChannelRoute.GUILD_HOME)), ea = (0, p.getSidebarMessageId)(et, P), el = null != ea && _.message.id === ea, en = _.highlighted ? H.default.Messages.GUILD_FEED_SPECIAL_HIGHLIGHT : W ? H.default.Messages.GUILD_FEED_FEATURED_BY_MODERATORS : null, {
    handleItemClick: es,
    handleChannelClick: ei,
    handleCardClick: ed,
    handleMessageClick: er
  } = (0, A.default)({
    guildId: s,
    channelId: y.id,
    feedItemId: Z,
    onChannelClick: () => (0, g.default)(G.Routes.CHANNEL(s, y.parent_id)),
    onContentClick: () => I.default.openThreadAsSidebar({
      guildId: s,
      baseChannelId: O.StaticChannelRoute.GUILD_HOME,
      channelId: y.id
    })
  }), [eu, eo] = (0, h.useSomeAppliedTags)(y), ec = eu[0], ef = (0, h.useAppliedTags)(y).slice(1), em = null != i.name && !U.has(i.name);
  if (null == y || null == P || null == V || null == _ || z) return null;
  let eh = e => {
    e.stopPropagation(), (0, c.openContextMenuLazy)(e, async () => {
      let e = await w();
      return t => (0, l.jsx)(e, {
        ...t,
        messageItem: _,
        channel: P,
        message: V
      })
    })
  };
  return (0, l.jsxs)(D.default, {
    className: x ? k.containerNoPadding : k.container,
    ref: t,
    selected: el,
    onCardClick: ed,
    onItemClick: es,
    onContextMenu: eh,
    itemId: Z,
    ariaLabel: H.default.Messages.GUILD_FEED_MESSAGE_ITEM_A11Y_LABEL.format({
      channelName: K
    }),
    listItemProps: Y,
    onMouseEnter: () => ee(!0),
    onMouseLeave: () => ee(!1),
    children: [(0, l.jsx)(o.HeadingLevel, {
      component: (0, l.jsxs)(F.default, {
        children: [(0, l.jsxs)("div", {
          className: k.postHeaderMenuLeft,
          children: [(0, l.jsxs)(o.Clickable, {
            className: k.channelNameContainer,
            onClick: ei,
            children: [null != Q ? (0, l.jsx)(o.Tooltip, {
              text: X,
              delay: 500,
              children: e => (0, l.jsx)(Q, {
                ...e,
                className: k.channelIcon,
                height: 16,
                width: 16
              })
            }) : null, (0, l.jsx)(o.Heading, {
              className: k.channelName,
              variant: "heading-sm/semibold",
              lineClamp: 1,
              children: q
            })]
          }), null != en && (0, l.jsxs)("div", {
            className: k.featuredPostContainer,
            children: [(0, l.jsx)(j.default, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              className: k.featuredPostIcon
            }), (0, l.jsx)(o.Text, {
              className: k.featuredPostText,
              variant: "text-sm/normal",
              color: "header-secondary",
              children: en
            })]
          })]
        }), (0, l.jsx)("div", {
          className: k.postHeaderMenuRight,
          children: (0, l.jsx)(L.default, {
            feedItem: _,
            guildId: s,
            onContextMenu: eh
          })
        })]
      }),
      children: (0, l.jsxs)(o.HeadingLevel, {
        component: (0, l.jsxs)("div", {
          className: k.titleContainer,
          children: [(0, l.jsx)(o.Heading, {
            className: k.title,
            variant: "heading-lg/semibold",
            children: y.name
          }), null != ec ? (0, l.jsxs)("div", {
            className: k.tags,
            children: [(0, l.jsx)(E.default, {
              tag: ec,
              size: E.default.Sizes.SMALL
            }), eo > 0 ? (0, l.jsx)(E.ForumTagOverflow, {
              tags: ef,
              count: eo,
              size: E.default.Sizes.SMALL
            }) : null]
          }) : null]
        }),
        children: [(0, l.jsx)(R.default, {
          className: k.messageItemBody,
          guildId: y.guild_id,
          animateAvatar: $,
          channel: y,
          message: V,
          feedItemId: _.id,
          onMessageClick: er,
          disableTruncation: em
        }), (0, l.jsx)(B, {
          channel: y
        })]
      })
    }), x && (0, l.jsx)(M.default, {
      guildId: s,
      guildFeedItem: _,
      setOnDismissFeedback: b
    })]
  })
})
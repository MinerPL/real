"use strict";
a.r(t), a.d(t, {
  default: function() {
    return b
  }
}), a("222007"), a("834022");
var l = a("37983"),
  n = a("884691"),
  s = a("355262"),
  i = a("446674"),
  d = a("77078"),
  r = a("272030"),
  u = a("679653"),
  o = a("419830"),
  c = a("537325"),
  f = a("208021"),
  m = a("582713"),
  h = a("982108"),
  E = a("42203"),
  g = a("27618"),
  I = a("449008"),
  _ = a("185014"),
  x = a("886484"),
  v = a("60036"),
  S = a("468670"),
  C = a("113312"),
  N = a("339274"),
  p = a("605143"),
  T = a("759668"),
  A = a("449405"),
  j = a("232882"),
  M = a("49111"),
  D = a("724210"),
  F = a("782340"),
  L = a("700045");
let R = async () => {
  let {
    default: e
  } = await a.el("814781").then(a.bind(a, "814781"));
  return e
};
var b = n.forwardRef(function(e, t) {
  var a, b;
  let {
    guildId: G,
    messageBundleItem: O,
    showFeedback: y,
    setOnDismissedFeedback: H
  } = e, {
    messages: k
  } = O, U = k[0].message, w = k[k.length - 1].message, B = w.channel_id, P = (0, i.useStateFromStoresArray)([_.default], () => k.map(e => _.default.getCachedMessage(G, B, e.message.id)).filter(I.isNotNullish), [G, B, k]), V = (0, i.useStateFromStores)([E.default], () => E.default.getChannel(B)), W = (0, o.getChannelIconComponent)(V, void 0, {
    textFocused: !0
  }), K = (0, o.getChannelIconTooltipText)(V), z = (0, u.default)(V), [Y, Z] = n.useState(!1), X = (0, i.useStateFromStores)([g.default], () => null != w && g.default.isBlocked(w.author.id)), J = (0, s.useListItem)(null !== (b = null === (a = P[P.length - 1]) || void 0 === a ? void 0 : a.id) && void 0 !== b ? b : O.id), q = O.id, Q = (0, i.useStateFromStores)([h.default], () => h.default.getSidebarState(D.StaticChannelRoute.GUILD_HOME)), $ = (0, x.getSidebarMessageId)(Q, V), ee = null != $ && U.id === $, {
    handleItemClick: et,
    handleChannelClick: ea,
    handleCardClick: el,
    handleMessageClick: en
  } = (0, S.default)({
    guildId: G,
    channelId: B,
    feedItemId: q,
    onChannelClick: () => (0, c.default)(M.Routes.CHANNEL(G, B, U.id)),
    onContentClick: e => {
      var t;
      f.default.openChannelAsSidebar({
        guildId: G,
        channelId: B,
        baseChannelId: D.StaticChannelRoute.GUILD_HOME,
        flash: !1,
        details: {
          type: m.SidebarOpenDetailsType.HOME,
          initialMessageId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : U.id,
          highlightMessageIds: new Set((0, v.getAllMessageIdsFromFeedItem)(O))
        }
      })
    }
  }), es = n.useMemo(() => k.map(e => {
    var t;
    return null !== (t = e.referenceMessages) && void 0 !== t ? t : []
  }).flat(), [k]);
  if (null == V || null == U || null == w || X) return null;
  let ei = e => {
    e.stopPropagation(), (0, r.openContextMenuLazy)(e, async () => {
      let e = await R();
      return t => (0, l.jsx)(e, {
        ...t,
        item: O,
        channel: V
      })
    })
  };
  return (0, l.jsxs)(N.default, {
    className: y ? L.containerNoPadding : L.container,
    ref: t,
    selected: ee,
    onCardClick: el,
    onItemClick: et,
    onContextMenu: ei,
    itemId: q,
    ariaLabel: F.default.Messages.GUILD_FEED_MESSAGE_ITEM_A11Y_LABEL.format({
      channelName: z
    }),
    listItemProps: J,
    onMouseEnter: () => Z(!0),
    onMouseLeave: () => Z(!1),
    children: [(0, l.jsxs)(d.HeadingLevel, {
      component: (0, l.jsxs)(p.default, {
        children: [(0, l.jsx)("div", {
          className: L.messageHeaderMenuLeft,
          children: (0, l.jsxs)(d.Clickable, {
            className: L.channelNameContainer,
            onClick: ea,
            children: [null != W ? (0, l.jsx)(d.Tooltip, {
              text: K,
              delay: 500,
              children: e => (0, l.jsx)(W, {
                ...e,
                className: L.channelIcon,
                height: 16,
                width: 16
              })
            }) : null, (0, l.jsx)(d.Heading, {
              lineClamp: 1,
              variant: "heading-sm/semibold",
              children: z
            })]
          })
        }), (0, l.jsx)("div", {
          className: L.messageHeaderMenuRight,
          children: (0, l.jsx)(T.default, {
            feedItem: O,
            guildId: G,
            onContextMenu: ei
          })
        })]
      }),
      children: [(0, l.jsx)("div", {
        className: L.messageBundleItemBody,
        children: (0, l.jsx)(A.default, {
          feedItemId: O.id,
          guildId: G,
          channel: V,
          messages: P,
          animateAvatar: Y,
          onMessageClick: en
        })
      }), (0, l.jsx)(j.ReferenceMessages, {
        referenceMessages: es,
        guildId: G
      })]
    }), y && (0, l.jsx)(C.default, {
      guildId: G,
      guildFeedItem: O,
      setOnDismissFeedback: H
    })]
  })
})
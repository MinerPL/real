"use strict";
a.r(t), a.d(t, {
  default: function() {
    return H
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
  s = a("414456"),
  i = a.n(s),
  d = a("355262"),
  r = a("446674"),
  u = a("77078"),
  o = a("272030"),
  c = a("679653"),
  f = a("419830"),
  m = a("537325"),
  h = a("208021"),
  E = a("582713"),
  g = a("982108"),
  I = a("42203"),
  _ = a("27618"),
  x = a("449008"),
  v = a("185014"),
  S = a("886484"),
  C = a("60036"),
  N = a("468670"),
  p = a("465519"),
  T = a("344934"),
  A = a("113312"),
  j = a("339274"),
  M = a("605143"),
  D = a("759668"),
  F = a("449405"),
  L = a("49111"),
  R = a("724210"),
  b = a("782340"),
  G = a("520627");
let O = async () => {
  let {
    default: e
  } = await a.el("814781").then(a.bind(a, "814781"));
  return e
};

function y(e) {
  let {
    item: t,
    referenceMessageBundles: a,
    channel: s,
    guildId: d,
    animateAvatar: r,
    onMessageClick: o
  } = e, c = n.useCallback(() => {
    var e, l;
    let n = a[a.length - 2 + 1];
    h.default.openChannelAsSidebar({
      guildId: d,
      channelId: s.id,
      baseChannelId: R.StaticChannelRoute.GUILD_HOME,
      flash: !1,
      details: {
        type: E.SidebarOpenDetailsType.HOME,
        initialMessageId: null !== (l = null == n ? void 0 : null === (e = n[0]) || void 0 === e ? void 0 : e.id) && void 0 !== l ? l : a[0][0].id,
        highlightMessageIds: new Set((0, C.getAllMessageIdsFromFeedItem)(t))
      }
    })
  }, [t, s, d, a]);
  return (0, l.jsxs)("div", {
    className: G.conversationArea,
    children: [a.slice(0, 2).map((e, t) => {
      let n = e[0];
      return null == n ? null : (0, l.jsx)(T.GuildFeedConversationReply, {
        className: i(G.conversationMessage, {
          [G.mentioned]: n.mentioned
        }),
        guildId: d,
        channel: s,
        message: n,
        onMessageClick: o,
        isTruncated: e.length > 1,
        animateAvatar: r,
        children: t !== a.length - 1 && (0, l.jsx)("div", {
          className: G.replySpine
        })
      }, n.id)
    }), a.length > 2 && (0, l.jsx)("div", {
      className: i(G.conversationMessage, G.viewMoreReplies),
      children: (0, l.jsx)(u.Clickable, {
        onClick: c,
        "data-action": "view-more-replies",
        children: b.default.Messages.GUILD_FEED_TRUNCATED_REPLIES_VIEW_MORE.format({
          count: a.length - 2
        })
      })
    }, "view-more")]
  })
}
var H = n.forwardRef(function(e, t) {
  var a, s;
  let {
    guildId: T,
    conversationItem: H,
    showFeedback: k,
    setOnDismissedFeedback: U
  } = e, {
    root: w
  } = H, {
    messages: B,
    children: P
  } = w, V = B[0], W = B[B.length - 1], K = W.channel_id, z = (0, r.useStateFromStoresArray)([v.default], () => B.map(e => v.default.getCachedMessage(T, K, e.id)).filter(x.isNotNullish), [T, K, B]), Y = (0, r.useStateFromStores)([I.default], () => I.default.getChannel(K)), Z = (0, f.getChannelIconComponent)(Y, void 0, {
    textFocused: !0
  }), X = (0, f.getChannelIconTooltipText)(Y), J = (0, c.default)(Y), [q, Q] = n.useState(!1), $ = (0, r.useStateFromStores)([_.default], () => null != W && _.default.isBlocked(W.author.id)), ee = (0, d.useListItem)(null !== (s = null === (a = z[z.length - 1]) || void 0 === a ? void 0 : a.id) && void 0 !== s ? s : H.id), et = H.id, ea = (0, r.useStateFromStores)([g.default], () => g.default.getSidebarState(R.StaticChannelRoute.GUILD_HOME)), el = (0, S.getSidebarMessageId)(ea, Y), en = null != el && V.id === el, {
    handleItemClick: es,
    handleChannelClick: ei,
    handleCardClick: ed,
    handleMessageClick: er
  } = (0, N.default)({
    guildId: T,
    channelId: K,
    feedItemId: et,
    onChannelClick: () => (0, m.default)(L.Routes.CHANNEL(T, K, V.id)),
    onContentClick: e => {
      var t;
      h.default.openChannelAsSidebar({
        guildId: T,
        channelId: K,
        baseChannelId: R.StaticChannelRoute.GUILD_HOME,
        flash: !1,
        details: {
          type: E.SidebarOpenDetailsType.HOME,
          initialMessageId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : V.id,
          highlightMessageIds: new Set((0, C.getAllMessageIdsFromFeedItem)(H))
        }
      })
    }
  }), eu = (0, r.useStateFromStores)([v.default], () => null == Y ? [] : P.map(e => e.messages.map(e => v.default.getCachedMessage(T, Y.id, e.id)).filter(x.isNotNullish)).filter(e => 0 !== e.length), [T, Y, P], p.areSecondLevelArraysEqual);
  if (null == Y || null == V || null == W || $) return null;
  let eo = e => {
    e.stopPropagation(), (0, o.openContextMenuLazy)(e, async () => {
      let e = await O();
      return t => (0, l.jsx)(e, {
        ...t,
        item: H,
        channel: Y
      })
    })
  };
  return (0, l.jsxs)(j.default, {
    className: k ? G.containerNoPadding : G.container,
    ref: t,
    selected: en,
    onCardClick: ed,
    onItemClick: es,
    onContextMenu: eo,
    itemId: et,
    ariaLabel: b.default.Messages.GUILD_FEED_MESSAGE_ITEM_A11Y_LABEL.format({
      channelName: J
    }),
    listItemProps: ee,
    onMouseEnter: () => Q(!0),
    onMouseLeave: () => Q(!1),
    children: [(0, l.jsxs)(u.HeadingLevel, {
      component: (0, l.jsxs)(M.default, {
        children: [(0, l.jsx)("div", {
          className: G.messageHeaderMenuLeft,
          children: (0, l.jsxs)(u.Clickable, {
            className: G.channelNameContainer,
            onClick: ei,
            children: [null != Z ? (0, l.jsx)(u.Tooltip, {
              text: X,
              delay: 500,
              children: e => (0, l.jsx)(Z, {
                ...e,
                className: G.channelIcon,
                height: 16,
                width: 16
              })
            }) : null, (0, l.jsx)(u.Heading, {
              lineClamp: 1,
              variant: "heading-sm/semibold",
              children: J
            })]
          })
        }), (0, l.jsx)("div", {
          className: G.messageHeaderMenuRight,
          children: (0, l.jsx)(D.default, {
            feedItem: H,
            guildId: T,
            onContextMenu: eo
          })
        })]
      }),
      children: [(0, l.jsx)("div", {
        className: i(G.messageBundleItemBody, {
          [G.conversationRoot]: eu.length > 0,
          [G.hasReply]: V.type === L.MessageTypes.REPLY
        }),
        children: (0, l.jsx)(F.default, {
          feedItemId: H.id,
          guildId: T,
          channel: Y,
          messages: z,
          animateAvatar: q,
          onMessageClick: er
        })
      }), (0, l.jsx)(y, {
        item: H,
        channel: Y,
        guildId: T,
        referenceMessageBundles: eu,
        onMessageClick: er,
        animateAvatar: q
      })]
    }), k && (0, l.jsx)(A.default, {
      guildId: T,
      guildFeedItem: H,
      setOnDismissFeedback: U
    })]
  })
})
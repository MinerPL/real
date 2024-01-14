"use strict";
a.r(t), a.d(t, {
  default: function() {
    return w
  }
});
var l = a("37983"),
  n = a("884691"),
  s = a("414456"),
  i = a.n(s),
  d = a("866227"),
  r = a.n(d),
  u = a("611221"),
  o = a("446674"),
  c = a("669491"),
  f = a("819855"),
  m = a("77078"),
  h = a("272030"),
  E = a("590514"),
  g = a("750560"),
  I = a("679653"),
  _ = a("419830"),
  x = a("713810"),
  v = a("185014"),
  S = a("465519"),
  C = a("120027"),
  N = a("699473"),
  p = a("42203"),
  T = a("697218"),
  A = a("730106"),
  j = a("215361"),
  M = a("345318"),
  D = a("782340"),
  F = a("120967"),
  L = a("782983"),
  R = a("229709");
let b = async () => {
  let {
    default: e
  } = await a.el("437150").then(a.bind(a, "437150"));
  return e
}, G = e => {
  let {
    featuredItem: t,
    className: a
  } = e, s = c.default.colors.TEXT_POSITIVE, d = j.default, u = (0, o.useStateFromStores)([T.default], () => T.default.getUser(t.details.actorUserId), [t]), f = n.useMemo(() => null == u ? {} : {
    [t.guildId]: [u.id]
  }, [t.guildId, u]);
  switch ((0, g.useSubscribeGuildMembers)(f), s = (0, S.getFeaturedExpirationTextColor)(t.details.expiresAt)) {
    case c.default.colors.TEXT_DANGER:
      d = A.default;
      break;
    case c.default.colors.TEXT_WARNING:
      d = M.default;
      break;
    case c.default.colors.TEXT_POSITIVE:
      d = j.default
  }
  return (0, l.jsxs)("div", {
    className: i(a, F.header),
    children: [(0, l.jsxs)("div", {
      className: F.expirationContainer,
      children: [(0, l.jsx)(d, {
        color: s.css,
        "aria-hidden": !0,
        className: F.expiredIcon
      }), (0, l.jsx)(m.Text, {
        style: {
          color: s.css
        },
        variant: "text-sm/normal",
        children: D.default.Messages.GUILD_FEED_FEATURED_EXPIRED_IN.format({
          fromNow: r(t.details.expiresAt).fromNow()
        })
      })]
    }), (0, l.jsx)(C.default, {
      height: 4,
      width: 4,
      "aria-hidden": "true",
      className: F.dotIcon
    }), (0, l.jsxs)("div", {
      className: F.featuredByContainer,
      children: [(0, l.jsx)(m.Text, {
        className: F.featuredByText,
        variant: "text-sm/normal",
        children: D.default.Messages.GUILD_FEED_FEATURED_BY
      }), null != u && (0, l.jsx)(m.Avatar, {
        size: m.AvatarSizes.SIZE_16,
        src: u.getAvatarURL(void 0, 16),
        "aria-hidden": !0
      })]
    })]
  })
}, O = e => {
  let {
    channel: t
  } = e, a = (0, I.default)(t), n = (0, _.getChannelIconComponent)(t), s = (0, _.getChannelIconTooltipText)(t);
  return null == t ? null : (0, l.jsxs)("div", {
    className: F.channelHeaderContainer,
    children: [null != n ? (0, l.jsx)(m.Tooltip, {
      text: s,
      delay: 500,
      children: e => (0, l.jsx)(n, {
        ...e,
        className: F.channelIcon,
        height: 16,
        width: 16
      })
    }) : null, (0, l.jsx)(m.Heading, {
      className: F.channelHeader,
      variant: "text-sm/semibold",
      children: a
    })]
  })
}, y = n.memo(function(e) {
  let {
    guildId: t,
    featuredItem: a
  } = e, n = (0, o.useStateFromStores)([v.default], () => v.default.getCachedMessage(t, a.message.channel_id, a.message.id)), s = (0, o.useStateFromStores)([p.default], () => p.default.getChannel(null == n ? void 0 : n.channel_id));
  return null == s || null == n ? null : (0, l.jsxs)(m.Clickable, {
    onContextMenu: e => {
      e.stopPropagation(), (0, h.openContextMenuLazy)(e, async () => {
        let e = await b();
        return t => (0, l.jsx)(e, {
          ...t,
          messageItem: a,
          channel: s,
          message: n
        })
      })
    },
    className: F.featuredItemsGroupWrapper,
    children: [(0, l.jsx)(G, {
      featuredItem: a.featuredItem
    }), (0, l.jsx)(O, {
      channel: s
    }), (0, l.jsx)(N.default, {
      className: F.featuredItemsGroupCozy,
      message: n,
      channel: s
    })]
  })
}), H = n.memo(function(e) {
  let {
    guildId: t,
    featuredItem: a
  } = e, n = (0, o.useStateFromStores)([p.default], () => p.default.getChannel(a.thread.id)), s = (0, o.useStateFromStores)([p.default], () => p.default.getChannel(null == n ? void 0 : n.parent_id)), i = (0, o.useStateFromStores)([v.default], () => v.default.getCachedMessage(t, a.message.channel_id, a.message.id));
  return null == i || null == s || null == n ? null : (0, l.jsxs)(m.Clickable, {
    onContextMenu: e => {
      e.stopPropagation(), (0, h.openContextMenuLazy)(e, async () => {
        let e = await b();
        return t => (0, l.jsx)(e, {
          ...t,
          messageItem: a,
          channel: n,
          message: i
        })
      })
    },
    className: F.featuredItemsGroupWrapper,
    children: [(0, l.jsx)(G, {
      featuredItem: a.featuredItem
    }), (0, l.jsx)(O, {
      channel: s
    }), (0, l.jsx)(m.Heading, {
      className: F.forumPostHeading,
      variant: "heading-md/semibold",
      children: n.name
    }), (0, l.jsx)(N.default, {
      className: F.featuredItemsGroupCozy,
      message: i,
      channel: n
    })]
  }, i.id)
});

function k(e) {
  let t = (0, f.isThemeLight)(e) ? R : L;
  return (0, l.jsxs)("div", {
    className: F.emptyPlaceholder,
    children: [(0, l.jsx)("div", {
      className: F.emptyImage,
      style: {
        backgroundImage: "url(".concat(t, ")")
      }
    }), (0, l.jsx)("div", {
      className: F.emptyBody,
      children: D.default.Messages.GUILD_FEED_FEATURED_ITEMS_NO_ITEMS
    })]
  })
}

function U() {
  return (0, l.jsx)(E.Header, {
    title: D.default.Messages.GUILD_FEED_FEATURE_MESSAGE
  })
}

function w(e) {
  let {
    guildId: t
  } = e, a = (0, o.useStateFromStoresArray)([v.default], () => v.default.getFeaturedItems(t), [t]), s = (0, o.useStateFromStores)([v.default], () => v.default.getFeaturedItemsFetchStatus(t), [t]);
  return n.useEffect(() => {
    (0, x.fetchGuildFeedFeaturedItems)(t)
  }, [t]), (0, l.jsx)(m.Dialog, {
    "aria-label": D.default.Messages.GUILD_FEED_FEATURED_MESSAGES,
    children: (0, l.jsx)(E.ItemsPopout, {
      analyticsName: "Featured Feed Items Popout",
      listName: "featuredMessages",
      items: a,
      loading: s.loading !== v.LoadingStatus.NONE,
      renderEmptyState: k,
      renderHeader: U,
      renderItem: function(e) {
        return null == e ? [] : e.type === u.GuildFeedItemTypes.MESSAGE ? [(0, l.jsx)(y, {
          guildId: t,
          featuredItem: e
        }, e.id)] : e.type === u.GuildFeedItemTypes.FORUM_POST ? [(0, l.jsx)(H, {
          guildId: t,
          featuredItem: e
        }, e.id)] : []
      }
    })
  })
}
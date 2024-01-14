"use strict";
l.r(t), l.d(t, {
  ChannelBrowserSidebar: function() {
    return A
  },
  default: function() {
    return O
  }
}), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  i = l.n(s),
  d = l("446674"),
  r = l("77078"),
  o = l("665182"),
  u = l("462998"),
  c = l("982108"),
  h = l("245997"),
  f = l("923959"),
  m = l("305961"),
  C = l("957255"),
  N = l("810567"),
  x = l("689476"),
  g = l("599110"),
  p = l("676143"),
  S = l("724268"),
  E = l("49111"),
  I = l("724210"),
  _ = l("782340"),
  T = l("505658"),
  v = l("305794");

function A(e) {
  let {
    channelId: t
  } = e;
  return (0, n.jsx)(o.default, {
    sidebarType: o.ChatSidebarType.ThreadSidebar,
    maxWidth: 600,
    children: (0, n.jsx)(u.default, {
      channelId: t,
      baseChannelId: I.StaticChannelRoute.CHANNEL_BROWSER
    })
  })
}

function O(e) {
  let {
    guildId: t
  } = e, [s, o] = a.useState(""), u = (0, d.useStateFromStores)([m.default], () => m.default.getGuild(t)), A = (0, d.useStateFromStores)([f.default], () => f.default.getChannels(t)), O = (0, d.useStateFromStores)([h.default], () => h.default.getCategories(t)), R = (0, p.useFilterCategoriesByQuery)(t, O, A, s), j = (0, d.useStateFromStores)([C.default], () => C.default.canWithPartialContext(E.Permissions.MANAGE_CHANNELS, {
    guildId: t
  })), b = (0, d.useStateFromStores)([c.default], () => null != c.default.getCurrentSidebarChannelId(I.StaticChannelRoute.CHANNEL_BROWSER)), L = a.useCallback(() => o(""), [o]), M = a.useCallback(() => {
    (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await l.el("581354").then(l.bind(l, "581354"));
      return l => (0, n.jsx)(e, {
        ...l,
        channelType: null,
        guildId: t
      })
    })
  }, [t]);
  return null == u ? null : (0, n.jsx)(n.Fragment, {
    children: (0, n.jsx)("div", {
      className: i(v.chat, T.container),
      children: (0, n.jsxs)("div", {
        className: i(T.pageBody),
        children: [(0, n.jsxs)("div", {
          className: T.header,
          children: [(0, n.jsx)(N.default, {
            className: T.search,
            size: N.default.Sizes.MEDIUM,
            query: s,
            onChange: e => {
              "" === s && "" !== e && g.default.track(E.AnalyticEvents.SEARCH_STARTED, {
                search_type: "channel browser"
              }), o(e.toLowerCase())
            },
            onClear: L,
            placeholder: _.default.Messages.CHANNEL_BROWSER_SEARCH_PLACEHOLDER
          }), j ? (0, n.jsxs)(r.Button, {
            className: T.createButton,
            innerClassName: T.createButtonInner,
            onClick: M,
            children: [(0, n.jsx)(x.default, {
              className: T.createIcon
            }), _.default.Messages.CREATE]
          }) : null]
        }), (0, n.jsx)(S.default, {
          className: T.browser,
          channels: A,
          categories: R,
          guild: u,
          hasSidebar: b
        })]
      })
    })
  })
}
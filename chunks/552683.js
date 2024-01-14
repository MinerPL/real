"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
}), a("222007");
var s = a("37983"),
  n = a("884691"),
  l = a("974667"),
  r = a("77078"),
  i = a("446674"),
  o = a("206230"),
  u = a("339792"),
  d = a("680986"),
  c = a("867965"),
  m = a("90625"),
  h = a("49111"),
  f = a("782340"),
  g = a("224300");

function x() {
  return Promise.resolve()
}

function C(e) {
  let {
    channel: t,
    closePopout: a,
    setPopoutRef: C
  } = e, T = (0, d.useVisibleForumTags)(t), {
    tagFilter: _
  } = (0, u.useForumChannelStore)(t.id), S = (0, u.useForumChannelStoreApi)(), p = (0, i.useStateFromStores)([o.default], () => o.default.keyboardModeEnabled), E = n.useCallback(e => {
    (0, c.trackForumTagFilterClicked)({
      guildId: t.guild_id,
      channelId: t.id,
      tagId: e,
      filterTagIds: Array.from(_),
      added: !_.has(e),
      location: {
        page: h.AnalyticsPages.GUILD_CHANNEL,
        section: h.AnalyticsSections.FORUM_CHANNEL_HEADER,
        object: h.AnalyticsObjects.CHANNEL_TAG
      }
    }), S.getState().toggleTagFilter(t.id, e)
  }, [t, _, S]), N = n.useCallback(() => {
    S.getState().setTagFilter(t.id, new Set), !p && a()
  }, [S, t.id, p, a]), M = (0, l.default)({
    id: "".concat(t.id, "-all-tags-dropdown-navigator"),
    isEnabled: !0,
    wrap: !0,
    scrollToStart: x,
    scrollToEnd: x
  }), A = n.useRef(null);
  return n.useEffect(() => {
    requestAnimationFrame(() => {
      if (null != A.current) {
        let e = A.current.querySelector(".".concat(g.tag));
        null != e && e.focus()
      }
    })
  }, []), (0, s.jsxs)(r.Dialog, {
    ref: C,
    "aria-label": f.default.Messages.FORUM_TAG_FILTER_HEADER,
    className: g.container,
    children: [(0, s.jsx)("div", {
      className: g.header,
      children: (0, s.jsxs)("div", {
        className: g.headerLeft,
        children: [(0, s.jsx)(r.Heading, {
          color: "interactive-normal",
          variant: "text-xs/bold",
          className: g.headerText,
          children: f.default.Messages.FORUM_TAG_POST_SELECT
        }), (0, s.jsx)("div", {
          className: g.countContainer,
          children: (0, s.jsx)(r.Text, {
            className: g.countText,
            color: "none",
            variant: "text-xs/medium",
            children: _.size
          })
        })]
      })
    }), (0, s.jsx)(l.ListNavigatorProvider, {
      navigator: M,
      children: (0, s.jsx)(l.ListNavigatorContainer, {
        children: e => {
          let {
            ref: t,
            ...a
          } = e;
          return (0, s.jsx)("div", {
            ref: e => {
              t.current = e, A.current = e
            },
            ...a,
            className: g.tagContainer,
            children: T.map(e => (0, s.jsx)(m.default, {
              className: g.tag,
              tag: e,
              selected: _.has(e.id),
              onClick: () => E(e.id)
            }, e.id))
          })
        }
      })
    }), (0, s.jsx)("div", {
      className: g.separator
    }), (0, s.jsx)(r.Button, {
      look: r.Button.Looks.LINK,
      size: r.Button.Sizes.MIN,
      color: r.Button.Colors.CUSTOM,
      className: g.clear,
      "aria-label": f.default.Messages.FORUM_CLEAR_ALL,
      onClick: N,
      children: (0, s.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "text-link",
        children: f.default.Messages.FORUM_CLEAR_ALL
      })
    })]
  })
}
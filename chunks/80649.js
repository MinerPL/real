"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("446674"),
  i = n("151426"),
  r = n("789207"),
  o = n("590514"),
  u = n("84339"),
  d = n("519841"),
  c = n("787336"),
  f = n("699473"),
  h = n("845579"),
  E = n("42203"),
  m = n("247013"),
  p = n("18494"),
  g = n("211248"),
  S = n("116320"),
  N = n("945330"),
  _ = n("138217"),
  I = n("530686"),
  T = n("998530"),
  C = n("814744"),
  A = n("805614"),
  x = n("64318"),
  v = n("49111"),
  M = n("782340"),
  R = n("228146");
let L = {
  offset: {
    left: 4,
    right: -12
  }
};

function O(e, t, n) {
  let a = t ? _.default.guildFilter : null,
    l = t ? _.default.roleFilter : null,
    s = t ? _.default.everyoneFilter : null,
    i = null;
  null != e && null != a && (i = a === v.RecentMentionsFilters.ALL_SERVERS ? null : e.getGuildId()), r.default.fetchRecentMentions(n, v.MAX_MENTIONS_PER_FETCH, i, l, s)
}

function b(e) {
  let {
    setTab: t,
    onJump: n,
    badgeState: f,
    closePopout: h
  } = e, m = (0, s.useStateFromStores)([E.default, p.default], () => E.default.getChannel(p.default.getChannelId())), {
    messages: g,
    hasMore: S,
    loading: N,
    guildFilter: I,
    roleFilter: C,
    everyoneFilter: A
  } = (0, s.useStateFromStoresObject)([_.default], () => ({
    messages: _.default.getMentions(),
    hasMore: _.default.hasMore,
    loading: _.default.loading,
    guildFilter: _.default.guildFilter,
    roleFilter: _.default.roleFilter,
    everyoneFilter: _.default.everyoneFilter
  })), L = (0, u.default)(I), b = (0, u.default)(C), y = (0, u.default)(A);
  l.useEffect(() => {
    if (!_.default.hasLoadedEver) {
      O(m, !0);
      return
    }(null != L && I !== L || null != b && C !== b || null != y && A !== y) && O(m, !0)
  }, [L, I, b, C, y, A, m, !0]);
  l.useEffect(() => {
    d.AttachmentLinkRefreshExperiment.getCurrentConfig({
      location: "mentions"
    }).enabled && (null == g ? void 0 : g.some(c.messageHasExpiredAttachmentUrl)) && (r.default.clearMentions(), O(m, !0))
  }, []), l.useEffect(() => () => {
    r.default.truncateMentions(v.MAX_MENTIONS_PER_FETCH)
  }, []);
  let F = l.useCallback(() => (0, a.jsx)(x.default, {
    tab: i.InboxTab.MENTIONS,
    setTab: t,
    badgeState: f,
    closePopout: h,
    children: (0, a.jsx)(T.default, {})
  }), [!0, t, f, h]);
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsx)(o.default, {
      className: R.recentMentionsPopout,
      scrollerClassName: R.scroller,
      onFetch: () => null,
      onJump: n,
      onCloseMessage: function(e) {
        r.default.deleteRecentMention(e.id)
      },
      channel: m,
      messages: g,
      loading: N,
      hasMore: S,
      analyticsName: "Recent Mentions",
      loadMore: function() {
        let e = null != g && g.length > 0 ? g[g.length - 1].id : null;
        O(m, !0, e)
      },
      canCloseAllMessages: !0,
      renderHeader: F,
      renderEmptyState: D,
      renderMessage: j,
      "aria-label": M.default.Messages.RECENT_MENTIONS,
      listName: "recents"
    })
  })
}

function y(e, t) {
  return [(0, a.jsx)(F, {
    message: e,
    gotoMessage: t
  }, e.id)]
}

function j(e, t) {
  return [(0, a.jsx)(F, {
    message: e,
    gotoMessage: t,
    dismissible: !0
  }, e.id)]
}

function F(e) {
  let {
    message: t,
    gotoMessage: n,
    dismissible: l
  } = e;
  if (null == t) return null;
  let s = E.default.getChannel(t.channel_id);
  if (null == s) return null;
  let i = m.default.didAgree(s.getGuildId()),
    o = !!s.isNSFW() && !i;
  return (0, a.jsxs)("div", {
    className: R.container,
    children: [(0, a.jsx)(C.default, {
      channel: s,
      gotoChannel: n,
      children: null != l ? (0, a.jsx)(g.default, {
        className: R.closeButton,
        tooltip: M.default.Messages.CLOSE,
        color: g.CircleIconButtonColors.TERTIARY,
        icon: (0, a.jsx)(N.default, {
          width: 16,
          height: 16
        }),
        onClick: () => r.default.deleteRecentMention(t.id)
      }) : null
    }), (0, a.jsxs)("div", {
      className: R.messageContainer,
      children: [(0, a.jsx)(I.default, {
        className: R.jumpButton,
        onJump: n
      }), (0, a.jsx)(f.default, {
        message: t,
        channel: s,
        className: R.message,
        hideAccessories: o,
        compact: h.MessageDisplayCompact.getSetting(),
        animateAvatar: !1,
        focusProps: L,
        trackAnnouncementViews: !0
      }, t.id)]
    })]
  })
}

function D(e) {
  return (0, a.jsx)(A.default, {
    Icon: S.default,
    header: M.default.Messages.RECENT_MENTIONS_EMPTY_STATE_HEADER,
    tip: M.default.Messages.RECENT_MENTIONS_EMPTY_STATE_TIP
  })
}
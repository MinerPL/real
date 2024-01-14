"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
});
var a = s("37983"),
  l = s("884691"),
  i = s("77078"),
  n = s("549103"),
  u = s("138219"),
  r = s("419555"),
  o = s("122766"),
  d = s("268027"),
  c = s("533788"),
  E = s("859130"),
  I = s("946128"),
  S = s("652469"),
  f = s("255941"),
  T = s("782340"),
  _ = s("295952"),
  R = l.memo(function(e) {
    let {
      guildId: t
    } = e, s = l.useRef(null), R = (0, r.useSelectedApplicationStatus)({
      guildId: t
    }), p = (0, d.useSelectedSortOrder)({
      guildId: t
    }), m = (0, o.useSelectedGuildJoinRequest)({
      guildId: t
    }), N = (0, E.useSubmittedGuildJoinRequestTotal)({
      guildId: t
    }), {
      guildJoinRequests: A
    } = (0, c.useSortedMemberApplications)({
      guildId: t,
      applicationStatus: R,
      sortOrder: p
    }), {
      fetchNextPage: M
    } = (0, u.usePaginatedMemberApplications)({
      guildId: t,
      guildJoinRequests: A
    }), h = l.useRef(!1);
    !h.current && (h.current = !0, M(p, R));
    let g = l.useRef(!1);
    l.useEffect(() => {
      g.current = !0
    }, [p, R]), l.useEffect(() => {
      if (g.current && 0 !== A.length) {
        var e;
        g.current = !1, n.default.setSelectedGuildJoinRequest(t, A[0]), null === (e = s.current) || void 0 === e || e.scrollToTop()
      }
    }, [t, A, m]);
    let x = l.useCallback(async e => {
        p !== e && (n.default.setSelectedSortOrder(t, e), await M(e, R))
      }, [R, p, t, M]),
      G = l.useCallback(async e => {
        R !== e && (n.default.setSelectedApplicationStatus(t, e), n.default.setSelectedGuildJoinRequest(t, null), await M(p, e))
      }, [R, p, t, M]),
      C = l.useCallback(async () => {
        var e;
        let t = null === (e = s.current) || void 0 === e ? void 0 : e.getScrollerState();
        if (null == t) return;
        let a = t.scrollHeight - t.scrollTop - t.offsetHeight;
        a < 200 && await M(p, R)
      }, [R, p, M]);
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(S.default, {
        applicationStatus: R,
        onTabItemSelect: G,
        pendingGuildJoinRequestsTotal: N
      }), (0, a.jsxs)("div", {
        className: _.content,
        children: [(0, a.jsx)("div", {
          className: _.listControls,
          children: (0, a.jsx)(I.default, {
            className: _.sortSelect,
            sortOrder: p,
            onSortChange: x
          })
        }), (0, a.jsx)(i.Text, {
          className: _.description,
          variant: "text-xs/normal",
          color: "header-secondary",
          children: T.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_LIST_DESCRIPTION
        }), (0, a.jsx)(f.default, {
          applicationStatus: R,
          guildJoinRequests: A,
          guildId: t,
          onScroll: C,
          listRef: s
        })]
      })]
    })
  })
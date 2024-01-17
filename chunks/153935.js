"use strict";
n.r(t), n.d(t, {
  UserSettingsFamilyCenterPage: function() {
    return K
  },
  default: function() {
    return z
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("394846"),
  o = n("432710"),
  u = n("65597"),
  d = n("151426"),
  c = n("77078"),
  f = n("939488"),
  E = n("669499"),
  _ = n("69927"),
  h = n("10641"),
  C = n("539938"),
  I = n("155084"),
  T = n("970366"),
  S = n("161778"),
  m = n("845579"),
  p = n("697218"),
  A = n("476765"),
  g = n("155207"),
  N = n("956089"),
  R = n("599110"),
  O = n("439932"),
  L = n("544556"),
  v = n("822825"),
  M = n("104887"),
  P = n("771783"),
  D = n("775032"),
  y = n("25132"),
  x = n("544553"),
  b = n("210173"),
  U = n("68818"),
  G = n("922832"),
  j = n("49111"),
  w = n("586391"),
  k = n("994428"),
  F = n("782340"),
  H = n("177960");
let B = {
    [G.FamilyCenterSubPages.REQUESTS]: () => (0, a.jsx)(b.default, {}),
    [G.FamilyCenterSubPages.ACTIVITY]: () => (0, a.jsx)(x.default, {}),
    [G.FamilyCenterSubPages.SETTINGS]: () => (0, a.jsx)(U.default, {})
  },
  V = {
    [G.FamilyCenterSubPages.REQUESTS]: () => (0, a.jsx)(b.default, {}),
    [G.FamilyCenterSubPages.ACTIVITY]: () => (0, a.jsx)(x.default, {})
  };

function Y(e) {
  let {
    section: t,
    handleItemSelect: n
  } = e, s = (0, y.usePendingRequestCount)(), i = (0, D.default)();
  return (0, a.jsxs)(c.TabBar, {
    className: H.settingsTabBar,
    "aria-label": F.default.Messages.FAMILY_CENTER_TITLE,
    selectedItem: t,
    type: "top",
    look: "brand",
    onItemSelect: n,
    children: [(0, a.jsx)(c.TabBar.Item, {
      className: H.settingsTabBarItem,
      id: G.FamilyCenterSubPages.ACTIVITY,
      children: F.default.Messages.FAMILY_CENTER_ACTIVITY_TAB
    }), (0, a.jsxs)(c.TabBar.Item, {
      className: H.settingsTabBarItem,
      id: G.FamilyCenterSubPages.REQUESTS,
      "aria-label": F.default.Messages.FAMILY_CENTER_REQUESTS_TAB,
      children: [F.default.Messages.FAMILY_CENTER_REQUESTS_TAB, s > 0 ? (0, a.jsx)(N.NumberBadge, {
        className: H.badge,
        count: s
      }) : null]
    }), i ? (0, a.jsx)(c.TabBar.Item, {
      className: H.settingsTabBarItem,
      id: G.FamilyCenterSubPages.SETTINGS,
      children: F.default.Messages.SETTINGS
    }) : null]
  })
}

function W(e) {
  let {
    theme: t,
    section: n,
    handleItemSelect: s
  } = e, i = (0, A.useUID)(), o = (0, y.usePendingRequestCount)();
  return (0, a.jsxs)(C.default, {
    className: l((0, O.getThemeClass)(t), H.sidebarTabBar),
    scrollable: r.isMobile,
    role: "navigation",
    "aria-labelledby": i,
    toolbar: !0,
    children: [(0, a.jsx)(C.default.Icon, {
      icon: g.default,
      "aria-hidden": !0
    }), (0, a.jsx)(C.default.Title, {
      id: i,
      children: F.default.Messages.FAMILY_CENTER_TITLE
    }), (0, a.jsx)(C.default.Divider, {}), (0, a.jsxs)(c.TabBar, {
      "aria-label": F.default.Messages.FAMILY_CENTER_TITLE,
      selectedItem: n,
      type: "top-pill",
      onItemSelect: s,
      className: H.tabBar,
      children: [(0, a.jsx)(c.TabBar.Item, {
        id: G.FamilyCenterSubPages.ACTIVITY,
        className: H.item,
        children: F.default.Messages.FAMILY_CENTER_ACTIVITY_TAB
      }), (0, a.jsxs)(c.TabBar.Item, {
        id: G.FamilyCenterSubPages.REQUESTS,
        className: H.item,
        "aria-label": F.default.Messages.FAMILY_CENTER_REQUESTS_TAB,
        children: [F.default.Messages.FAMILY_CENTER_REQUESTS_TAB, o > 0 ? (0, a.jsx)(N.NumberBadge, {
          className: H.badge,
          count: o
        }) : null]
      })]
    })]
  })
}

function K() {
  let e = (0, D.default)(),
    t = (0, y.useAcceptedRequestsCount)(),
    n = (0, h.useIsDismissibleContentDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE),
    i = (0, u.default)([v.default], () => v.default.getIsInitialized()),
    r = (0, P.useSelectedTeenId)(),
    {
      selectedTab: f,
      handleTabChange: C
    } = (0, M.default)(),
    S = (0, A.useUID)(),
    m = p.default.getCurrentUser(),
    g = null != e,
    N = i && null != m && !g;
  return (s.useEffect(() => {
    (0, T.trackAppUIViewed)("family-center"), L.default.initialPageLoad(), !n && (0, h.markDismissibleContentAsDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE, {
      dismissAction: k.ContentDismissActionType.AUTO,
      forceTrack: !0
    })
  }, []), s.useEffect(() => {
    i && g && (R.default.track(j.AnalyticEvents.FAMILY_CENTER_VIEWED, {
      is_considered_adult: e,
      num_of_accepted_links: t,
      selected_teen_id: r,
      initial_page: G.FamilyCenterSubPageAnalyticsIds[f],
      source: G.FamilyCenterPageLocationAnalyticsIds[G.FamilyCenterPageLocation.SIDENAV]
    }), I.default.increment({
      name: o.MetricEvents.FAMILY_CENTER_VIEW
    }))
  }, [i, g]), N) ? ((0, E.openAgeGateModal)(w.AgeGateSource.FAMILY_CENTER), null) : (0, a.jsxs)("main", {
    className: l(H.container),
    "aria-label": F.default.Messages.FAMILY_CENTER_TITLE,
    children: [(0, a.jsx)(_.AppPageTitle, {
      location: F.default.Messages.FAMILY_CENTER_TITLE
    }), (0, a.jsx)(Y, {
      section: f,
      handleItemSelect: e => {
        C(e)
      }
    }), (0, a.jsx)(c.TabBar.Panel, {
      id: f,
      "aria-labelledby": S,
      className: H.contentPanel,
      children: (0, a.jsx)("div", {
        children: B[f]()
      })
    })]
  })
}

function z() {
  let e = (0, D.default)(),
    t = (0, y.useAcceptedRequestsCount)(),
    n = (0, h.useIsDismissibleContentDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE),
    i = (0, u.default)([v.default], () => v.default.getIsInitialized()),
    r = (0, P.useSelectedTeenId)(),
    C = (0, u.default)([S.default], () => S.default.theme),
    {
      selectedTab: g,
      handleTabChange: N
    } = (0, M.default)(),
    O = (0, A.useUID)(),
    x = p.default.getCurrentUser(),
    b = null != e,
    U = i && null != x && !b;
  if (s.useEffect(() => {
      f.setHomeLink(j.Routes.FAMILY_CENTER), (0, T.trackAppUIViewed)("family-center"), !v.default.isLoading() && v.default.canRefetch() && L.default.initialPageLoad(), !n && (0, h.markDismissibleContentAsDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE, {
        dismissAction: k.ContentDismissActionType.AUTO,
        forceTrack: !0
      })
    }, []), s.useEffect(() => {
      i && b && (R.default.track(j.AnalyticEvents.FAMILY_CENTER_VIEWED, {
        is_considered_adult: e,
        num_of_accepted_links: t,
        selected_teen_id: r,
        initial_page: G.FamilyCenterSubPageAnalyticsIds[g],
        source: G.FamilyCenterPageLocationAnalyticsIds[G.FamilyCenterPageLocation.SIDENAV]
      }), I.default.increment({
        name: o.MetricEvents.FAMILY_CENTER_VIEW
      }))
    }, [i, b]), s.useEffect(() => {
      let t = m.FamilyCenterEnabled.getSetting();
      i && e && void 0 === t && m.FamilyCenterEnabled.updateSetting(!0)
    }, [i, e]), U) return (0, E.openAgeGateModal)(w.AgeGateSource.FAMILY_CENTER), null;
  let B = g !== G.FamilyCenterSubPages.SETTINGS ? g : G.FamilyCenterSubPages.ACTIVITY,
    Y = V[B];
  return (0, a.jsxs)("main", {
    className: l(H.container, H.containerSidenav),
    "aria-label": F.default.Messages.FAMILY_CENTER_TITLE,
    children: [(0, a.jsx)(_.AppPageTitle, {
      location: F.default.Messages.FAMILY_CENTER_TITLE
    }), (0, a.jsx)(W, {
      theme: C,
      section: B,
      handleItemSelect: e => {
        N(e)
      }
    }), (0, a.jsx)(c.TabBar.Panel, {
      id: B,
      "aria-labelledby": O,
      className: H.contentPanel,
      children: (0, a.jsx)("div", {
        className: H.sideNavContent,
        children: Y()
      })
    })]
  })
}
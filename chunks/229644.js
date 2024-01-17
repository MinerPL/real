"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eM
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("16470"),
  o = n("974667"),
  u = n("394846"),
  d = n("446674"),
  c = n("151426"),
  f = n("551042"),
  E = n("77078"),
  _ = n("450911"),
  h = n("955153"),
  C = n("503525"),
  I = n("812204"),
  T = n("716241"),
  S = n("685665"),
  m = n("9759"),
  p = n("754493"),
  A = n("813531"),
  g = n("21526"),
  N = n("252551"),
  R = n("232374"),
  O = n("20606"),
  L = n("384997"),
  v = n("785770"),
  M = n("260488"),
  P = n("639547"),
  D = n("775032"),
  y = n("25132"),
  x = n("300962"),
  b = n("154889"),
  U = n("917247"),
  G = n("801388"),
  j = n("770469"),
  w = n("641078"),
  k = n("773367"),
  F = n("266782"),
  H = n("367226"),
  B = n("104589"),
  V = n("393027"),
  Y = n("12896"),
  W = n("161778"),
  K = n("845579"),
  z = n("686470"),
  q = n("27618"),
  Q = n("697218"),
  Z = n("160299"),
  X = n("521012"),
  J = n("791823"),
  $ = n("552712"),
  ee = n("330338"),
  et = n("311450"),
  en = n("743826"),
  ea = n("774223"),
  es = n("880013"),
  ei = n("556081"),
  el = n("216422"),
  er = n("155207"),
  eo = n("564875"),
  eu = n("956089"),
  ed = n("719923"),
  ec = n("882941"),
  ef = n("570687"),
  eE = n("631316"),
  e_ = n("524110"),
  eh = n("49111"),
  eC = n("782340"),
  eI = n("592265");
let eT = e => {
    let {
      selected: t,
      ...n
    } = e, s = (0, o.useListItem)("friends"), i = (0, d.useStateFromStores)([q.default], () => q.default.getPendingCount()), l = (0, A.default)(), {
      canViewBroadcasts: r
    } = m.default.useExperiment({
      location: "friends_tab_no_track"
    }), u = (0, p.default)();
    return (0, a.jsxs)(ef.LinkButton, {
      selected: t,
      route: eh.Routes.FRIENDS,
      icon: eo.default,
      text: eC.default.Messages.FRIENDS,
      onClick: () => {
        T.default.trackWithMetadata(eh.AnalyticEvents.BROADCAST_LIST_VISITED, {
          num_active_broadcasts: l.length,
          friends_tab_clicked: !0,
          is_broadcasting: u
        })
      },
      ...n,
      ...s,
      children: [l.length > 0 && r && (0, a.jsx)(eu.TextBadge, {
        color: O.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND,
        text: (0, a.jsxs)("div", {
          className: eI.broadcastingBadge,
          children: [(0, a.jsx)(ea.default, {
            className: eI.broadcastingIcon
          }), (0, a.jsx)(E.Text, {
            variant: "text-xs/semibold",
            color: "always-white",
            children: l.length.toLocaleString()
          })]
        })
      }), i > 0 ? (0, a.jsx)(eu.NumberBadge, {
        count: i
      }) : null]
    })
  },
  eS = e => {
    let {
      selected: t,
      hideGameUpdateProgressIndicator: n,
      ...s
    } = e, i = (0, o.useListItem)("library");
    return (0, a.jsx)(ef.LinkButton, {
      selected: t,
      route: eh.Routes.APPLICATION_LIBRARY,
      icon: es.default,
      text: eC.default.Messages.LIBRARY,
      ...s,
      ...i,
      children: (0, a.jsx)(e_.default, {
        className: l(eI.downloadProgressCircle, {
          [eI.hideGameUpdateProgressIndicator]: n
        })
      })
    })
  },
  em = e => {
    let t, n, {
        selected: s,
        route: i,
        locationState: l,
        ...r
      } = e,
      u = (0, d.useStateFromStores)([Q.default], () => Q.default.getCurrentUser()),
      c = (0, d.useStateFromStores)([X.default], () => X.default.getPremiumTypeSubscription()),
      f = (0, o.useListItem)("nitro"),
      E = (0, U.usePremiumTrialOffer)(),
      _ = (0, b.usePremiumDiscountOffer)(),
      h = (0, d.useStateFromStores)([Z.default], () => Z.default.isLocalizedPromoEnabled),
      C = h && null == E,
      I = (0, w.useIsEligibleForBogoPromotion)(),
      T = (0, H.default)(),
      {
        enabled: S
      } = (0, x.default)(),
      m = s || null != E || null != _ || I || T || null != u && Date.now() - u.createdAt.getTime() > 2592e6 || (0, ed.hasPremiumSubscriptionToDisplay)(u, c);
    return m && (!S || s) ? (I ? n = (0, a.jsx)(G.default, {
      isNitroTab: !0
    }) : T ? n = (0, a.jsx)(F.default, {}) : null != _ ? n = (0, a.jsx)(k.PremiumDiscountOfferTabBadge, {
      userDiscount: _,
      isTabSelected: s,
      includesAmountOff: !1
    }) : null != E ? n = (0, a.jsx)(k.PremiumTrialOfferTabBadge, {
      trialOffer: E,
      isTabSelected: s
    }) : C && (n = (0, a.jsx)(j.LocalizedPricingBadgeIcon, {
      entryPoint: j.BadgeEntryPoint.PrivateMessages
    }), !s && (t = eI.localizedPricingBadge)), (0, a.jsx)(ef.LinkButton, {
      selected: s,
      route: i,
      icon: el.default,
      text: eC.default.Messages.PREMIUM,
      locationState: l,
      ...r,
      ...f,
      className: t,
      children: n
    })) : null
  },
  ep = e => {
    let {
      selected: t,
      route: n,
      locationState: s,
      ...i
    } = e, r = (0, o.useListItem)("activities"), u = (0, d.useStateFromStores)([W.default], () => W.default.getState().theme), c = (0, C.useActivitiesWhatsNewCount)();
    return (0, a.jsx)(ef.LinkButton, {
      selected: t,
      route: n,
      icon: et.default,
      iconClassName: l(eI.activitiesBirthdayIcon, {
        [eI.activitiesBirthdayIconLight]: "light" === u
      }),
      text: eC.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_TAB_TITLE,
      locationState: s,
      ...i,
      ...r,
      children: c > 0 ? (0, a.jsx)(eu.NumberBadge, {
        count: c
      }) : null
    })
  },
  eA = e => {
    let {
      selected: t
    } = e, n = (0, M.useMessageRequestsCount)(), s = (0, o.useListItem)("messageRequests"), {
      channelId: i
    } = (0, v.useMessageRequestSidebarState)(), l = (0, P.useShouldShowMessageRequestsRow)();
    if (!l) return null;
    let r = null == i ? void 0 : () => _.default.preload(eh.ME, i);
    return (0, a.jsx)(ef.LinkButton, {
      selected: t,
      route: eh.Routes.MESSAGE_REQUESTS,
      icon: ei.default,
      text: eC.default.Messages.MESSAGE_REQUESTS,
      onClick: r,
      ...s,
      children: n > 0 ? (0, a.jsx)(eu.NumberBadge, {
        count: n
      }) : null
    })
  },
  eg = e => {
    let {
      selected: t,
      locationState: n
    } = e, s = (0, o.useListItem)("shop"), i = I.default.HOME_PAGE_SHOP_TAB, {
      analyticsLocations: l
    } = (0, S.default)(i), r = (0, R.default)(), u = (0, a.jsx)(ef.LinkButton, {
      selected: t,
      route: eh.Routes.COLLECTIBLES_SHOP,
      icon: en.default,
      text: eC.default.Messages.COLLECTIBLES_SHOP,
      onClick: () => {
        (0, g.openCollectiblesShop)({
          openInLayer: !1,
          analyticsSource: i,
          analyticsLocations: l
        })
      },
      locationState: n,
      ...s
    });
    return r !== c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK ? u : (0, a.jsx)(E.Popout, {
      renderPopout: () => (0, a.jsx)(N.default, {}),
      animation: E.Popout.Animation.TRANSLATE,
      align: "top",
      shouldShow: !0,
      children: () => u
    })
  },
  eN = e => {
    let {
      selected: t
    } = e, n = eC.default.Messages.FAMILY_CENTER_SIDEBAR_TITLE, i = (0, o.useListItem)("family-center"), l = K.FamilyCenterEnabled.useSetting(), r = (0, D.default)(), [u, d] = s.useState(!0);
    return l && r ? (0, a.jsx)(ef.LinkButton, {
      selected: t,
      route: eh.Routes.FAMILY_CENTER,
      icon: er.default,
      text: n,
      onMouseEnter: () => {
        d(!0)
      },
      onMouseLeave: () => {
        d(!1)
      },
      interactiveClassName: eI.familyCenterLinkButton,
      ...i,
      children: (0, a.jsx)(eR, {
        isParentHovered: u
      })
    }) : null
  },
  eR = e => {
    let {
      isParentHovered: t
    } = e, s = (0, y.usePendingRequestCount)();
    return t ? (0, a.jsx)(ef.CloseButton, {
      onClick: () => {
        (0, f.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("6674").then(n.bind(n, "6674"));
          return t => (0, a.jsx)(e, {
            ...t
          })
        })
      },
      "aria-label": eC.default.Messages.CLOSE
    }) : s > 0 ? (0, a.jsx)("div", {
      className: eI.familyCenterPendingBadge,
      children: (0, a.jsx)(eu.NumberBadge, {
        count: s
      })
    }) : (0, a.jsx)(L.default, {
      contentTypes: [c.DismissibleContent.FAMILY_CENTER_NEW_BADGE],
      children: e => {
        let {
          visibleContent: t
        } = e;
        return t === c.DismissibleContent.FAMILY_CENTER_NEW_BADGE ? (0, a.jsx)(eu.TextBadge, {
          text: eC.default.Messages.NEW,
          color: O.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND
        }) : null
      }
    })
  },
  eO = () => (0, B.show)("DM_SEARCH");

function eL(e) {
  switch (e) {
    case eh.Routes.APPLICATION_LIBRARY:
      return eh.AnalyticsPages.LIBRARY;
    case eh.Routes.FRIENDS:
      return eh.AnalyticsPages.FRIENDS_LIST;
    case eh.Routes.COLLECTIBLES_SHOP:
      return eh.AnalyticsPages.COLLECTIBLES_SHOP
  }
  if (e.startsWith(eh.Routes.APPLICATION_STORE)) return e === eh.Routes.APPLICATION_STORE ? eh.AnalyticsPages.STORE_DIRECTORY_HOME : e.startsWith(eh.Routes.APPLICATION_STORE) ? eh.AnalyticsPages.STORE_DIRECTORY_BROWSE : eh.AnalyticsPages.STORE_LISTING;
  return eh.AnalyticsPages.DM_CHANNEL
}
let ev = e => {
  let {
    showLibrary: t,
    hasLibraryApplication: n,
    homeLink: s,
    storeLink: i,
    premiumTabSelected: o
  } = e, [d, c] = (0, V.default)(e => {
    let {
      channelId: t,
      path: n
    } = e;
    return [t, n]
  }, r.default), {
    enabled: f
  } = h.BirthdayActivitiesExperiment.useExperiment({
    location: "a718d6_2"
  }, {
    autoTrackExposure: !0
  });
  return (0, a.jsxs)("nav", {
    className: eI.privateChannels,
    "aria-label": eC.default.Messages.PRIVATE_CHANNELS_A11Y_LABEL,
    children: [(0, a.jsx)(Y.default, {
      tutorialId: "direct-messages",
      position: "right",
      offsetX: -52,
      children: (0, a.jsx)("div", {
        className: l(eI.searchBar, {
          [eI.themedHeaderMobile]: u.isMobile
        }),
        children: (0, a.jsx)("button", {
          type: "button",
          className: l(eI.searchBarComponent, {
            [eI.themedSearchBarMobile]: u.isMobile
          }),
          onClick: eO,
          children: eC.default.Messages.DM_SEARCH_PLACEHOLDER
        })
      })
    }), (0, a.jsxs)(eE.default, {
      ...e,
      version: c,
      selectedChannelId: d,
      showDMHeader: !0,
      children: [(0, a.jsx)(eT, {
        selected: null != c ? c === eh.Routes.FRIENDS : s === eh.Routes.FRIENDS
      }, "friends"), n && t ? (0, a.jsx)(eS, {
        selected: null == c ? null != s && s.startsWith(eh.Routes.APPLICATION_LIBRARY) : c.startsWith(eh.Routes.APPLICATION_LIBRARY),
        hideGameUpdateProgressIndicator: s === eh.Routes.APPLICATION_LIBRARY
      }, "library") : null, (0, a.jsx)(em, {
        selected: null == c ? o : c.startsWith(eh.Routes.APPLICATION_STORE),
        route: null == i || location.pathname.startsWith(eh.Routes.ACTIVITIES) || location.pathname.startsWith(eh.Routes.APPLICATION_STORE) ? eh.Routes.APPLICATION_STORE : i,
        locationState: {
          analyticsSource: {
            page: eL(s),
            section: eh.AnalyticsSections.NAVIGATION,
            object: eh.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "premium"), f ? (0, a.jsx)(ep, {
        selected: null != c && c.startsWith(eh.Routes.ACTIVITIES) || null != s && s.startsWith(eh.Routes.ACTIVITIES),
        route: eh.Routes.ACTIVITIES,
        locationState: {
          analyticsSource: {
            page: eL(s),
            section: eh.AnalyticsSections.NAVIGATION,
            object: eh.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "activities") : null, (0, a.jsx)(eA, {
        selected: null == c ? null != s && s.startsWith(eh.Routes.MESSAGE_REQUESTS) : c === eh.Routes.MESSAGE_REQUESTS
      }, "message-requests"), (0, a.jsx)(eg, {
        selected: c === eh.Routes.COLLECTIBLES_SHOP || (null == s ? void 0 : s.startsWith(eh.Routes.COLLECTIBLES_SHOP)),
        locationState: {
          analyticsSource: {
            page: eL(s),
            section: eh.AnalyticsSections.NAVIGATION,
            object: eh.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "discord-shop"), (0, a.jsx)(eN, {
        selected: null != s && s.startsWith(eh.Routes.FAMILY_CENTER) || null != c && c.startsWith(eh.Routes.FAMILY_CENTER)
      }, "family-center")]
    })]
  })
};

function eM() {
  let e = (0, d.useStateFromStores)([ee.default], () => ee.default.getHomeLink()),
    t = (0, d.useStateFromStores)([$.default], () => {
      if (e === eh.Routes.APPLICATION_STORE) return !0;
      let t = (0, ec.getSKUIdFromURL)(e);
      if (null != t) {
        var n, a;
        return null !== (a = null === (n = $.default.get(t)) || void 0 === n ? void 0 : n.premium) && void 0 !== a && a
      }
      return !1
    }, [e]),
    n = !K.DisableGamesTab.useSetting(),
    {
      theme: s
    } = (0, d.useStateFromStoresObject)([W.default], () => ({
      theme: W.default.theme
    })),
    i = (0, d.useStateFromStores)([z.default], () => z.default.hasLibraryApplication()),
    l = (0, d.useStateFromStores)([J.default], () => J.default.getCurrentPath());
  return (0, a.jsx)(ev, {
    theme: s,
    showLibrary: n,
    hasLibraryApplication: i,
    storeLink: l,
    homeLink: e,
    premiumTabSelected: t
  })
}
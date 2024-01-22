"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ek
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("803182"),
  o = n("90915"),
  u = n("759843"),
  d = n("868233"),
  c = n("394846"),
  f = n("446674"),
  E = n("77078"),
  _ = n("241845"),
  h = n("939443"),
  C = n("597590"),
  I = n("987697"),
  T = n("464682"),
  S = n("73749"),
  m = n("191145"),
  p = n("533466"),
  A = n("837844"),
  g = n("171984"),
  N = n("551254"),
  R = n("893399"),
  O = n("353681"),
  L = n("256430"),
  v = n("390236"),
  M = n("546102"),
  P = n("380710"),
  D = n("889145"),
  y = n("993057"),
  x = n("118971"),
  b = n("696336"),
  U = n("273457"),
  G = n("38654"),
  j = n("507950"),
  w = n("598156"),
  k = n("397039"),
  F = n("628805"),
  H = n("755729"),
  B = n("934743"),
  V = n("566396"),
  Y = n("618489"),
  W = n("209688"),
  K = n("747223"),
  z = n("393027"),
  q = n("1501"),
  Q = n("161778"),
  Z = n("42203"),
  X = n("26989"),
  J = n("305961"),
  $ = n("18494"),
  ee = n("600133"),
  et = n("449008"),
  en = n("439932"),
  ea = n("315977"),
  es = n("911120"),
  ei = n("455555"),
  el = n("229644"),
  er = n("901582"),
  eo = n("758997"),
  eu = n("474557"),
  ed = n("49111"),
  ec = n("724210"),
  ef = n("653138"),
  eE = n("782340"),
  e_ = n("783686");
let eh = () => (0, a.jsx)("div", {
    className: e_.loader,
    children: (0, a.jsx)(E.Spinner, {})
  }),
  eC = (0, d.makeLazy)({
    createPromise: () => n.el("144588").then(n.bind(n, "144588")),
    webpackId: "144588",
    name: "GuildShopPage",
    renderLoader: eh
  }),
  eI = (0, d.makeLazy)({
    createPromise: () => n.el("597235").then(n.bind(n, "597235")),
    webpackId: "597235",
    name: "GuildMemberApplicationReview",
    renderLoader: eh
  }),
  eT = (0, d.makeLazy)({
    createPromise: () => n.el("144295").then(n.bind(n, "144295")),
    webpackId: "144295",
    name: "GuildHomePage",
    renderLoader: eh
  }),
  eS = (0, d.makeLazy)({
    createPromise: () => n.el("112265").then(n.bind(n, "112265")),
    webpackId: "112265",
    name: "MemberSafetyPage",
    renderLoader: eh
  }),
  em = (0, d.makeLazy)({
    createPromise: () => n.el("534702").then(n.bind(n, "534702")),
    webpackId: "534702",
    name: "ChannelsAndRolesPage",
    renderLoader: eh
  }),
  ep = (0, d.makeLazy)({
    createPromise: () => n.el("413896").then(n.bind(n, "413896")),
    webpackId: "413896",
    name: "GuildOnboardingPage",
    renderLoader: eh
  }),
  eA = e => {
    let {
      match: t
    } = e, n = (0, f.useStateFromStores)([Z.default, $.default], () => {
      let e = $.default.getChannelId();
      return Z.default.getChannel(e)
    }), {
      guildId: s,
      channelId: i,
      messageId: l
    } = t.params, r = (0, f.useStateFromStores)([J.default], () => J.default.getGuild(s)), o = (0, f.useStateFromStores)([X.default], () => null == s ? null : X.default.getSelfMember(s)), u = (0, f.useStateFromStores)([G.default], () => {
      if (null == s) return;
      let e = G.default.getData(s);
      if ((null == e ? void 0 : e.type) === j.ImpersonateType.SERVER_SHOP) switch (e.initialTab) {
        case "role_subscriptions":
          return R.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS;
        case "guild_products":
          return R.GuildShopTab.GUILD_PRODUCTS;
        default:
          return
      }
    }), d = (0, N.isEligibleForSubscriptionsInGuildShop)(s, "channel_renderer");
    if (null != s && null != i && (0, ec.isStaticChannelRoute)(i)) switch (i) {
      case ec.StaticChannelRoute.ROLE_SUBSCRIPTIONS:
        return d ? (0, a.jsx)(eC, {
          guildId: s,
          initialTab: R.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS
        }) : (0, a.jsx)(y.default, {
          guildId: s
        });
      case ec.StaticChannelRoute.GUILD_SHOP:
        return (0, a.jsx)(eC, {
          guildId: s,
          productId: l,
          initialTab: u
        });
      case ec.StaticChannelRoute.MEMBER_APPLICATIONS:
        return (0, a.jsx)(eI, {
          guildId: s
        });
      case ec.StaticChannelRoute.GUILD_HOME:
        return (0, a.jsx)(eT, {
          guildId: s
        });
      case ec.StaticChannelRoute.CHANNEL_BROWSER:
        return (0, a.jsx)(em, {
          guildId: s,
          selectedSection: ef.GuildOnboardingTab.BROWSE
        });
      case ec.StaticChannelRoute.GUILD_ONBOARDING:
        return (0, a.jsx)(ep, {
          guildId: s
        });
      case ec.StaticChannelRoute.CUSTOMIZE_COMMUNITY:
        return (0, a.jsx)(em, {
          guildId: s,
          selectedSection: ef.GuildOnboardingTab.CUSTOMIZE
        });
      case ec.StaticChannelRoute.MEMBER_SAFETY:
        return (0, a.jsx)(eS, {
          guildId: s
        });
      default:
        (0, et.assertNever)(i)
    }
    if ((0, P.isBlockedByOnboarding)(r, o)) return (0, a.jsx)(D.default, {
      guildId: s,
      channelId: i
    });
    if ((null == n ? void 0 : n.type) === ed.ChannelTypes.GUILD_STORE) {
      let e = t.params.messageId;
      return (0, a.jsx)(ea.default, {
        channel: n,
        inputSkuId: e
      }, n.id)
    }
    return (0, a.jsx)(p.default, {})
  },
  eg = s.memo(function() {
    let {
      guildId: e,
      channelId: t
    } = (0, z.default)(), n = (0, f.useStateFromStores)([$.default], () => null != t ? t : $.default.getChannelId(e));
    return function() {
      return window.location.pathname.startsWith(ed.Routes.GUILD_DISCOVERY)
    }() ? (0, a.jsx)(L.default, {}) : null != e ? (0, a.jsx)(x.default, {
      selectedChannelId: n,
      guildId: e
    }, e) : (0, a.jsx)(el.default, {})
  });

function eN(e) {
  let t = (0, z.default)(e => {
    let {
      guildId: t
    } = e;
    return t
  });
  return (0, a.jsx)(B.default, {
    ...e,
    guildId: t
  })
}
let eR = e => (0, a.jsx)(eA, {
    ...e
  }),
  eO = e => {
    let t = null != e && e.length > 0 && e.startsWith("?"),
      n = t ? e.split("?")[1] : null;
    return (0, a.jsx)(O.default, {
      searchRoute: n
    })
  },
  eL = e => {
    let {
      match: t
    } = e;
    return null != t.params.guildId ? (0, a.jsx)(M.default, {
      guildId: t.params.guildId,
      inviteCode: t.params.inviteCode
    }) : null
  },
  ev = e => {
    let {
      match: t
    } = e;
    return null != t.params.guildId ? (0, a.jsx)(U.default, {
      guildId: t.params.guildId,
      inviteCode: t.params.inviteCode
    }) : null
  },
  eM = () => (0, a.jsx)(eo.default, {}),
  eP = () => (0, a.jsx)(eu.default, {}),
  eD = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return function(t) {
      return (0, a.jsx)(g.default, {
        isFullScreen: e,
        ...t
      })
    }
  },
  ey = e => (0, a.jsx)(T.default, {
    ...e
  }),
  ex = () => (0, a.jsx)(I.default, {}),
  eb = () => (0, a.jsx)(K.default, {}),
  eU = () => (0, a.jsx)(w.default, {}),
  eG = () => (0, a.jsx)(W.default, {}),
  ej = e => {
    let {
      match: t
    } = e, n = t.params.feature;
    switch (n) {
      case "addFriends":
        return (0, a.jsx)(K.default, {
          initialSection: ed.FriendsSections.ADD_FRIEND
        });
      case "pendingFriends":
        return (0, a.jsx)(K.default, {
          initialSection: ed.FriendsSections.PENDING
        });
      case "sessionManagement":
        return (0, a.jsx)(o.Redirect, {
          to: ed.Routes.SETTINGS("sessions")
        });
      case "connections":
        return (0, a.jsx)(o.Redirect, {
          to: {
            pathname: ed.Routes.SETTINGS("connections"),
            search: e.location.search
          }
        });
      case "family-center":
        return (0, a.jsx)(o.Redirect, {
          to: ed.Routes.FAMILY_CENTER
        });
      case "account-standing":
        return (0, a.jsx)(o.Redirect, {
          to: ed.Routes.SETTINGS("privacy-and-safety", "account-standing")
        });
      default:
        return (0, a.jsx)(o.Redirect, {
          to: ed.Routes.ME
        })
    }
  };

function ew(e) {
  let {
    hasNotice: t,
    sidebarTheme: n,
    hideSidebar: s
  } = e;
  (0, h.useNullExperiment)(!0);
  let i = "app view user trigger debugging";
  _.UserTriggerAAExperiment.useExperiment({
    location: i
  }, {
    autoTrackExposure: !1
  }), _.UserTriggerAAExperiment.trackExposure({
    location: i
  });
  let r = (0, f.useStateFromStores)([m.default], () => m.default.isFullscreenInContext());
  return s ? null : (0, a.jsxs)("div", {
    className: l(e_.sidebar, (0, en.getThemeClass)(n), {
      [e_.hasNotice]: t,
      [e_.fullWidth]: c.isMobile,
      [e_.hidden]: r
    }),
    children: [(0, a.jsx)(eg, {}), (0, a.jsxs)("section", {
      className: e_.panels,
      "aria-label": eE.default.Messages.ACCOUNT_A11Y_LABEL,
      children: [(0, a.jsx)(V.default, {}), (0, a.jsx)(er.default, {
        section: ed.AnalyticsSections.ACTIVITY_PANEL,
        children: (0, a.jsx)(eN, {
          className: e_.activityPanel
        })
      }), (0, a.jsx)(er.default, {
        section: ed.AnalyticsSections.RTC_CONNECTION_PANEL,
        children: (0, a.jsx)(Y.default, {})
      }), (0, a.jsx)(er.default, {
        section: ed.AnalyticsSections.ACCOUNT_PANEL,
        children: (0, a.jsx)(H.default, {})
      })]
    }), (0, a.jsx)(es.default, {})]
  })
}

function ek() {
  var e;
  let t = (0, f.useStateFromStores)([ee.default], () => ee.default.hasNotice()),
    n = (0, f.useStateFromStores)([Q.default], () => Q.default.darkSidebar ? ed.ThemeTypes.DARK : void 0),
    i = function() {
      let [e, t] = s.useState(() => window.location.pathname.startsWith(ed.Routes.GUILD_MEMBER_VERIFICATION("")));
      return s.useEffect(() => q.default.addRouteChangeListener(e => {
        t(e.pathname.startsWith(ed.Routes.GUILD_MEMBER_VERIFICATION("")))
      }), []), e
    }(),
    l = function() {
      let [e, t] = s.useState(() => window.location.pathname.startsWith(ed.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB("")));
      return s.useEffect(() => q.default.addRouteChangeListener(e => {
        t(e.pathname.startsWith(ed.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB("")))
      }), []), e
    }(),
    d = function() {
      var e;
      let t = (0, o.useLocation)();
      return (null === (e = (0, r.matchPath)(t.pathname, ed.Routes.GUILD_BOOSTING_MARKETING(":guildId"))) || void 0 === e ? void 0 : e.isExact) === !0
    }(),
    E = function() {
      var e;
      let t = (0, o.useLocation)();
      return (null === (e = (0, r.matchPath)(t.pathname, ed.Routes.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0
    }(),
    _ = (0, f.useStateFromStores)([F.default], () => F.default.getIsOpen()),
    h = (0, o.useRouteMatch)([ed.Routes.CHANNEL(ed.ME, ":channelId"), ed.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")]),
    I = (null == h ? void 0 : null === (e = h.params) || void 0 === e ? void 0 : e.channelId) === ec.StaticChannelRoute.GUILD_ONBOARDING,
    T = s.useCallback(() => k.default.openSidebar(), []);
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)("div", {
      className: e_.container,
      children: [_ && !E && (0, a.jsx)(b.default, {
        className: e_.guilds,
        themeOverride: n
      }), (0, a.jsx)(v.default.Provider, {
        value: (null == h ? void 0 : h.params.guildId) === ed.ME ? void 0 : null == h ? void 0 : h.params.guildId,
        children: (0, a.jsxs)("div", {
          className: e_.base,
          children: [c.isMobile ? null : (0, a.jsx)(ei.default, {}), (0, a.jsxs)("div", {
            className: e_.content,
            children: [(0, a.jsx)(A.default, {}), (0, a.jsx)(ew, {
              hasNotice: t,
              sidebarTheme: n,
              hideSidebar: i || l || d || E || I || !_
            }), (0, a.jsx)(C.default.Provider, {
              value: T,
              children: (0, a.jsxs)(o.Switch, {
                children: [(0, a.jsx)(S.default, {
                  path: ed.Routes.ACTIVITY,
                  disableTrack: !0,
                  children: (0, a.jsx)(o.Redirect, {
                    to: ed.Routes.ME
                  })
                }), (0, a.jsx)(S.default, {
                  path: ed.Routes.ACTIVITIES_HAPPENING_NOW,
                  render: ex,
                  impressionName: u.ImpressionNames.ACTIVITIES
                }), (0, a.jsx)(S.default, {
                  path: ed.Routes.ACTIVITY_DETAILS(":applicationId"),
                  render: ey,
                  impressionName: u.ImpressionNames.ACTIVITY_DETAILS,
                  impressionProperties: e => {
                    let {
                      computedMatch: t
                    } = e;
                    return {
                      application_id: t.params.applicationId
                    }
                  }
                }), (0, a.jsx)(S.default, {
                  path: ed.Routes.ACTIVITIES,
                  render: ex,
                  impressionName: u.ImpressionNames.ACTIVITIES
                }), (0, a.jsx)(S.default, {
                  path: ed.Routes.APPLICATION_LIBRARY,
                  render: eM,
                  impressionName: u.ImpressionNames.APPLICATION_LIBRARY,
                  disableTrack: !0
                }), (0, a.jsx)(S.default, {
                  path: ed.Routes.APPLICATION_STORE,
                  render: eP,
                  impressionName: u.ImpressionNames.APPLICATION_STORE,
                  disableTrack: !0
                }), (0, a.jsx)(S.default, {
                  path: ed.Routes.COLLECTIBLES_SHOP_FULLSCREEN,
                  render: eD(!0),
                  disableTrack: !0
                }), (0, a.jsx)(S.default, {
                  path: ed.Routes.COLLECTIBLES_SHOP,
                  render: eD(!1),
                  disableTrack: !0
                }), (0, a.jsx)(S.default, {
                  path: ed.Routes.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                  render: eD(!1),
                  disableTrack: !0
                }), (0, a.jsx)(S.default, {
                  path: ed.Routes.MESSAGE_REQUESTS,
                  render: eU,
                  disableTrack: !0
                }), (0, a.jsx)(S.default, {
                  path: ed.Routes.FAMILY_CENTER,
                  render: eG,
                  disableTrack: !0
                }), (0, a.jsx)(S.default, {
                  path: ed.Routes.ME,
                  exact: !0,
                  render: eb,
                  impressionName: u.ImpressionNames.FRIENDS,
                  disableTrack: !0
                }), (0, a.jsx)(S.default, {
                  path: [ed.Routes.CHANNEL_THREAD_VIEW(":guildId", ":channelId", ":threadId", ":messageId?"), ed.Routes.CHANNEL(ed.ME, ":channelId"), ed.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")],
                  render: eR,
                  impressionName: u.ImpressionNames.GUILD_CHANNEL,
                  disableTrack: !0
                }), (0, a.jsx)(S.default, {
                  path: ed.Routes.GUILD_DISCOVERY,
                  render: e => {
                    let {
                      location: t
                    } = e;
                    return eO(t.search)
                  },
                  impressionName: u.ImpressionNames.GUILD_DISCOVERY,
                  disableTrack: !0
                }), (0, a.jsx)(S.default, {
                  path: ed.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?"),
                  render: eL,
                  impressionName: u.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                  disableTrack: !0
                }), (0, a.jsx)(S.default, {
                  path: ed.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode?"),
                  render: ev,
                  impressionName: u.ImpressionNames.HUB_EMAIL_SIGNUP,
                  impressionProperties: e => {
                    let {
                      computedMatch: t
                    } = e;
                    return {
                      has_invite: void 0 !== t.params.inviteCode
                    }
                  }
                }), (0, a.jsx)(S.default, {
                  path: ed.Routes.FEATURE(":feature"),
                  exact: !0,
                  render: ej,
                  disableTrack: !0
                })]
              })
            })]
          })]
        })
      })]
    })
  })
}
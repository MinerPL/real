"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ti
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("730290"),
  l = n("803182"),
  r = n("90915"),
  o = n("446674"),
  u = n("77078"),
  d = n("437822"),
  c = n("711115"),
  f = n("851387"),
  E = n("987317"),
  _ = n("70614"),
  h = n("79112"),
  C = n("206230"),
  I = n("951212"),
  T = n("827792"),
  S = n("670984"),
  m = n("141962"),
  p = n("581516"),
  A = n("182537"),
  g = n("943183"),
  N = n("271081"),
  R = n("298557"),
  O = n("176162"),
  L = n("590157"),
  v = n("734592"),
  M = n("156565"),
  P = n("366410"),
  D = n("927175"),
  y = n("957328"),
  x = n("616265"),
  b = n("72860"),
  U = n("697316"),
  G = n("587233"),
  j = n("683716"),
  w = n("132943"),
  k = n("319769"),
  F = n("506377"),
  H = n("318915"),
  B = n("619443"),
  V = n("263901"),
  Y = n("643130"),
  W = n("802896"),
  K = n("374021"),
  z = n("592407"),
  q = n("468560"),
  Q = n("73968"),
  Z = n("236199"),
  X = n("353983"),
  J = n("940035"),
  $ = n("831773"),
  ee = n("397039"),
  et = n("628805"),
  en = n("165926"),
  ea = n("946522"),
  es = n("880185"),
  ei = n("624043"),
  el = n("263065"),
  er = n("204025"),
  eo = n("684641"),
  eu = n("176372"),
  ed = n("929479"),
  ec = n("630140"),
  ef = n("91990"),
  eE = n("359477"),
  e_ = n("1501"),
  eh = n("838857"),
  eC = n("393414"),
  eI = n("828309"),
  eT = n("29322"),
  eS = n("208021"),
  em = n("582713"),
  ep = n("949000"),
  eA = n("987285"),
  eg = n("686551"),
  eN = n("793237"),
  eR = n("120252"),
  eO = n("481395"),
  eL = n("401642"),
  ev = n("542789"),
  eM = n("84124"),
  eP = n("392011"),
  eD = n("777523"),
  ey = n("470885"),
  ex = n("868558"),
  eb = n("271938"),
  eU = n("982108"),
  eG = n("42203"),
  ej = n("476108"),
  ew = n("305961"),
  ek = n("778588"),
  eF = n("686470"),
  eH = n("18494"),
  eB = n("162771"),
  eV = n("167726"),
  eY = n("552067"),
  eW = n("866681"),
  eK = n("428773"),
  ez = n("535974"),
  eq = n("43093"),
  eQ = n("773336"),
  eZ = n("50885"),
  eX = n("780009"),
  eJ = n("49111"),
  e$ = n("750947"),
  e0 = n("724210"),
  e1 = n("56235");
n("72177"), n("392453"), n("366679"), n("848872"), n("189857"), n("144747"), n("698041"), n("552712"), n("367530"), n("429464"), n("205817"), n("767960"), n("26092"), n("790618"), n("424562"), n("900938"), n("492114"), n("161810"), n("901998"), n("684442"), n("799286"), n("470055"), n("140596");
let e2 = !1;
(0, g.initSessionHeartbeatScheduler)(), o.default.initialize(), eI.default.loadServer(), eQ.isPlatformEmbedded && (eZ.default.on("USER_SETTINGS_OPEN", () => {
  !ek.default.getLayers().includes(eJ.Layers.USER_SETTINGS) && h.default.open(eJ.UserSettingsSections.ACCOUNT)
}), eZ.default.on("LAUNCH_APPLICATION", (e, t) => {
  let n = eF.default.getActiveLibraryApplication(t);
  eX.playApplication(t, n, {
    analyticsParams: {
      location: {
        page: eJ.AnalyticsPages.DIRECT,
        object: eJ.AnalyticsObjects.WEB_URL
      }
    }
  })
}));
let e4 = o.default.connectStores([B.default, ej.default, eb.default], () => ({
    isConnected: B.default.isConnected(),
    defaultRoute: ej.default.defaultRoute,
    defaultRouteFallback: ej.default.fallbackRoute,
    token: eb.default.getToken()
  }))(class extends s.Component {
    componentDidMount() {
      let {
        match: e
      } = this.props;
      null != e && null != e.params.inviteCode && (0, W.doGuildOnboardingForPostAuthInvite)({
        code: e.params.inviteCode
      })
    }
    render() {
      let {
        isConnected: e,
        defaultRoute: t,
        token: n,
        defaultRouteFallback: s
      } = this.props;
      if (null == n) return (0, a.jsx)(r.Redirect, {
        to: eJ.Routes.DEFAULT_LOGGED_OUT
      });
      if (e) {
        let e = tn(t);
        return null == e || (e.params.guildId === eJ.ME || null != ew.default.getGuild(e.params.guildId)) && null != eG.default.getChannel(e.params.channelId) ? (0, a.jsx)(r.Redirect, {
          to: t
        }) : (0, a.jsx)(r.Redirect, {
          to: s
        })
      }
      return null
    }
  }),
  e9 = (0, L.makeAuthenticated)(M.default, null, {
    passProps: !1
  }),
  e7 = (0, L.makeAuthenticated)(function() {
    return (0, a.jsx)(N.default, {})
  }),
  e8 = (0, L.makeAuthenticated)(function(e) {
    let {
      match: t
    } = e, {
      applicationId: n,
      section: s
    } = t.params, i = (0, q.default)(e$.ApplicationDirectoryProfileSections, s);
    return (0, a.jsx)(R.default, {
      applicationId: n,
      initialSection: i
    })
  }),
  e3 = (0, L.makeAuthenticated)(function() {
    return (0, a.jsx)(O.default, {})
  }),
  e6 = [eJ.Routes.GUILD_BOOSTING_MARKETING(":guildId"), ...Array.from(e0.StaticChannelRoutes).map(e => eJ.Routes.CHANNEL(":guildId", e))];

function e5(e) {
  let {
    guildId: t,
    channelId: n = null,
    messageId: a = null,
    threadId: s = null
  } = e.params;
  return {
    guildId: null != t ? t : eJ.ME,
    channelId: n,
    messageId: a,
    threadId: s
  }
}
let te = [{
    path: [eJ.Routes.APPLICATION_DIRECTORY_SEARCH],
    render: e3,
    isSessionRequired: !0
  }, {
    path: [eJ.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section?")],
    render: e8,
    isSessionRequired: !0
  }, {
    path: [eJ.Routes.APPLICATION_DIRECTORY],
    render: e7,
    isSessionRequired: !0
  }],
  tt = [{
    path: [eJ.Routes.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
    render(e) {
      let {
        match: t
      } = e;
      return (0, a.jsx)(e4, {
        match: t
      })
    },
    isSessionRequired: !0
  }, {
    path: [eJ.Routes.APP],
    render: () => (0, a.jsx)(e4, {}),
    isSessionRequired: !0
  }, {
    path: [eJ.Routes.USERS(":id")],
    render: function(e) {
      let {
        match: t,
        location: n
      } = e, {
        friend_token: s
      } = (0, i.parse)(n.search), {
        id: l
      } = t.params;
      return (0, V.addPostConnectionCallback)(() => (0, eL.openUserProfileModal)({
        userId: l,
        guildId: eJ.ME,
        friendToken: s,
        analyticsLocation: {
          section: eJ.AnalyticsSections.DIRECT_ROUTE_ACCESS
        }
      })), (0, a.jsx)(r.Redirect, {
        to: ej.default.defaultRoute
      })
    }
  }, {
    path: [eJ.Routes.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
    render: function(e) {
      let {
        match: t
      } = e, {
        gameId: n,
        action: s
      } = t.params;
      return ez.default.whenInitialized(() => {
        eF.default.whenInitialized(() => {
          switch (s) {
            case "launch": {
              let e = eF.default.getActiveLibraryApplication(n);
              if (null == e) return;
              eX.playApplication(e.id, e, {
                analyticsParams: {
                  location: {
                    page: eJ.AnalyticsPages.DIRECT,
                    object: eJ.AnalyticsObjects.WEB_URL
                  }
                }
              });
              break
            }
            case "test-mode":
              eV.default.whenInitialized(() => _.authorizeAndSetTestModeApplication(n));
              break;
            case "uninstall": {
              let e = eF.default.getActiveLibraryApplication(n);
              if (null == e) return;
              (0, c.uninstallBranchPrompt)(e.id, e.branchId, eJ.AnalyticsLocations.URI_SCHEME)
            }
          }
        })
      }), (0, a.jsx)(r.Redirect, {
        to: eJ.Routes.APPLICATION_LIBRARY
      })
    }
  }, {
    path: [eJ.Routes.GUILD_CREATE],
    render: function() {
      return (0, V.addPostConnectionCallback)(() => x.default.openCreateGuildModal({
        location: "External link"
      })), (0, a.jsx)(r.Redirect, {
        to: ej.default.defaultRoute
      })
    }
  }, {
    path: [eJ.Routes.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
    render: function(e) {
      let {
        match: t
      } = e, {
        section: n,
        subsection: s
      } = t.params, l = (0, i.parse)(location.search), o = l.feature;
      return (0, V.addPostConnectionCallback)(() => Q.openGuildSettingsPickerModal({
        section: (0, q.default)(eJ.GuildSettingsSections, n),
        subsection: (0, q.default)(eJ.GuildSettingsSubsections, s),
        feature: o
      })), (0, a.jsx)(r.Redirect, {
        to: ej.default.defaultRoute
      })
    },
    isSessionRequired: !0
  }, {
    path: [eJ.Routes.SETTINGS(":section", ":subsection?")],
    render: function(e) {
      let {
        location: t
      } = e, n = (0, eD.default)(t.pathname);
      return null != n && (0, V.addPostConnectionCallback)(() => h.default.open(n.section, n.subsection, {
        openWithoutBackstack: !1,
        impressionSource: n.source
      })), (0, a.jsx)(r.Redirect, {
        to: ej.default.defaultRoute
      })
    },
    isSessionRequired: !0
  }, {
    path: [eJ.Routes.USER_GUILD_NOTIFICATION_SETTINGS(":guildId")],
    render: function(e) {
      let {
        match: t
      } = e, {
        guildId: s
      } = t.params;
      return (0, V.addPostConnectionCallback)(() => {
        (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("747593").then(n.bind(n, "747593"));
          return t => (0, a.jsx)(e, {
            ...t,
            guildId: s
          })
        })
      }), (0, a.jsx)(r.Redirect, {
        to: eJ.Routes.CHANNEL(s)
      })
    },
    isSessionRequired: !0
  }, {
    path: [eJ.Routes.APPLICATION_LIBRARY_INVENTORY],
    render: function() {
      return (0, V.addPostConnectionCallback)(() => h.default.open(eJ.UserSettingsSections.INVENTORY)), (0, a.jsx)(r.Redirect, {
        to: ej.default.defaultRoute
      })
    },
    isSessionRequired: !0
  }, {
    path: [eJ.Routes.WELCOME(":guildId?", ":channelId?")],
    render: function(e) {
      let {
        match: t
      } = e, {
        guildId: n,
        channelId: s
      } = t.params;
      (0, en.setNewUser)(e1.NewUserTypes.MARKETING_UNCLAIMED);
      let i = eJ.Routes.CHANNEL(n, s);
      return (0, a.jsx)(r.Redirect, {
        to: i
      })
    },
    isSessionRequired: !0
  }, {
    path: [eJ.Routes.GUILD_EVENT_DETAILS(":guildId?", ":guildEventId")],
    render: function(e) {
      let {
        match: t
      } = e, {
        guildId: n,
        guildEventId: s
      } = t.params;
      return (0, V.addPostConnectionCallback)(() => {
        (0, K.openGuildEventDetails)({
          eventId: s
        })
      }), (0, a.jsx)(r.Redirect, {
        to: eJ.Routes.CHANNEL(n)
      })
    },
    isSessionRequired: !0
  }, {
    path: [eJ.Routes.GUILD_SETTINGS(":guildId", ":section?", ":subsection?")],
    render: function(e) {
      let {
        match: t
      } = e, {
        guildId: n,
        section: s,
        subsection: i
      } = t.params;
      return (0, V.addPostConnectionCallback)(() => {
        z.default.open(n, (0, q.default)(eJ.GuildSettingsSections, s), void 0, (0, q.default)(eJ.GuildSettingsSubsections, i))
      }), (0, a.jsx)(r.Redirect, {
        to: eJ.Routes.CHANNEL(n)
      })
    },
    isSessionRequired: !0,
    isChatRoute: !0
  }, {
    path: [eJ.Routes.CHANNEL_THREAD_VIEW(":guildId", ":channelId", ":threadId", ":messageId?"), eJ.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"), eJ.Routes.ACTIVITY, eJ.Routes.ACTIVITIES, eJ.Routes.ACTIVITIES_HAPPENING_NOW, eJ.Routes.ACTIVITY_DETAILS(":applicationId"), eJ.Routes.APPLICATION_LIBRARY, eJ.Routes.APPLICATION_STORE, eJ.Routes.MESSAGE_REQUESTS, eJ.Routes.COLLECTIBLES_SHOP, eJ.Routes.COLLECTIBLES_SHOP_FULLSCREEN, eJ.Routes.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"), eJ.Routes.GUILD_DISCOVERY, eJ.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?"), eJ.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode?"), eJ.Routes.GUILD_BOOSTING_MARKETING(":guildId"), eJ.Routes.FEATURE(":feature"), eJ.Routes.FAMILY_CENTER],
    render: e9,
    isSessionRequired: !0,
    isChatRoute: !0
  }, ...te];

function tn(e) {
  for (let {
      path: t,
      isChatRoute: n
    }
    of tt) {
    if (!n) continue;
    let a = (0, l.matchPath)(e, {
      path: t
    });
    if (null != a) return a
  }
  return null
}

function ta(e) {
  let {
    channelId: t,
    guildId: n,
    pathname: a
  } = e;
  if (!B.default.isConnected()) return;
  let {
    location: s
  } = (0, eC.getHistory)();
  s.pathname === a && (null == eG.default.getChannel(t) ? (0, eC.replaceWith)(eJ.Routes.CHANNEL(n)) : (0, eC.replaceWith)(a))
}
class ts extends s.PureComponent {
  componentDidMount() {
    P.default.initialize(), eZ.default.setZoomFactor(C.default.zoom), eI.default.init(), v.default.initialize(), eo.default.initialize(), w.default.initialize(), ex.default.initialize(), k.default.initialize(), ed.default.initialize(), J.default.initialize(), I.default.init(), H.default.init(), F.default.init(), ea.default.initialize(), A.default.initialize(), j.default.initialize(), ec.default.initialize(), p.default.initialize(), ey.default.initialize(), er.default.initialize(), m.default.initialize(), Y.default.init(), Z.default.init(), eK.default.init(), eq.default.init(), S.default.initialize(), eO.default.init(), eW.default.init(), eY.default.init(), eM.default.init(), eA.default.initialize(), eg.default.initialize(), ev.default.initialize(), eP.default.init(), G.default.initialize(), T.default.initialize(), eT.default.initialize(), ep.default.initialize(), ei.default.initialize(), es.default.initialize(), el.default.initialize(), D.default.initialize(), ef.default.initialize(), X.default.init({
      hasModalOpen: u.hasAnyModalOpen,
      openModal: () => (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("927475").then(n.bind(n, "927475"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      })
    }), U.default.init(), $.default.initialize(), eE.default.initialize(), eu.default.initialize(), b.default.initialize(), this.rewriterUnlisten = e_.default.addRouteRewriter(this.ensureChannelMatchesGuild), this.historyUnlisten = e_.default.addRouteChangeListener(this.handleHistoryChange)
  }
  componentWillUnmount() {
    P.default.terminate(), ex.default.terminate(), ed.default.terminate(), eo.default.terminate(), v.default.terminate(), p.default.terminate(), ey.default.terminate(), m.default.terminate(), ec.default.terminate(), er.default.terminate(), ev.default.terminate(), S.default.terminate(), G.default.terminate(), $.default.terminate(), T.default.terminate(), eE.default.terminate(), eT.default.terminate(), ep.default.terminate(), ei.default.terminate(), es.default.terminate(), el.default.terminate(), D.default.terminate(), eu.default.terminate(), b.default.terminate(), this.historyUnlisten(), this.rewriterUnlisten()
  }
  handleHistoryChange(e) {
    let {
      pathname: t,
      search: n
    } = e;
    ! function(e) {
      if (B.default.isConnected() || B.default.isTryingToConnect()) return;
      let t = eb.default.getToken();
      if (null == t) return;
      let n = function(e) {
        for (let {
            path: t,
            isSessionRequired: n
          }
          of tt) {
          if (!n) continue;
          let a = (0, l.matchPath)(e, {
            path: t
          });
          if (null != a) return a
        }
        return null
      }(e);
      null != n && d.default.startSession(t)
    }(t), ! function(e, t) {
      let n = tn(e);
      if (null == n) return;
      let {
        guildId: a,
        channelId: s,
        messageId: r,
        threadId: o
      } = e5(n), u = (0, eh.isValidGuildId)(a), d = (0, eh.isValidChannelId)(s), c = (0, eh.isValidChannelId)(o), _ = eB.default.getGuildId(), h = _ !== a;
      if (u && h && f.default.selectGuild(a), u && d) {
        let n = eH.default.getChannelId(_),
          l = n !== s;
        if (!e2 || h || l || null != r) {
          e2 = !0, E.default.selectChannel({
            guildId: a,
            channelId: s,
            messageId: r
          });
          let {
            summaryId: e
          } = (0, i.parse)(t);
          null != e && eN.default.setSelectedSummary(s, e)
        }
        if (null != o && c) {
          let e = eU.default.getCurrentSidebarChannelId(n),
            t = e !== o,
            i = null != eU.default.getGuildSidebarState(a);
          if (null != s && null != o && t) {
            if (i)(0, eC.replaceWith)(eJ.Routes.CHANNEL(a, o, r));
            else {
              let e = {
                type: em.SidebarOpenDetailsType.THREAD
              };
              null != r && (e.initialMessageId = r), eS.default.openThreadAsSidebar({
                guildId: a,
                baseChannelId: s,
                channelId: o,
                details: e
              })
            }
          }
        } else null != s && !l && eS.default.closeChannelSidebar(s);
        let u = et.default.getIsOpen();
        if (s === e0.StaticChannelRoute.ROLE_SUBSCRIPTIONS) ee.default.closeSidebar();
        else if (h && u) {
          let t = null == _ && a === eJ.ME,
            n = e === eJ.Routes.GUILD_DISCOVERY;
          t || n ? ee.default.closeSidebar() : ee.default.openSidebar()
        } else(l && u || !h && !l) && ee.default.closeSidebar()
      } else {
        var C;
        if (C = e, !e6.some(e => {
            var t;
            return (null === (t = (0, l.matchPath)(C, e)) || void 0 === t ? void 0 : t.isExact) === !0
          }))(0, eC.replaceWith)(ej.default.fallbackRoute)
      }
    }(t, n)
  }
  ensureChannelMatchesGuild(e) {
    if (!B.default.isConnected()) return null;
    let {
      pathname: t
    } = e, n = tn(t);
    if (null == n) return null;
    let {
      guildId: a,
      channelId: s,
      threadId: i
    } = e5(n), l = (0, eh.isValidGuildId)(a) && a !== eJ.ME && a !== eJ.FAVORITES, r = null != s && (0, eh.isValidChannelId)(s) && !(0, e0.isStaticChannelRoute)(s);
    if (r && l) {
      let n = eG.default.getChannel(s);
      if (null == n) eR.default.loadThread(s).then(() => ta({
        channelId: s,
        guildId: a,
        pathname: t
      }));
      else if (n.guild_id !== a) return {
        path: eJ.Routes.CHANNEL(a),
        state: e.state
      };
      if (null != i) {
        let n = (0, eh.isValidChannelId)(i) && !(0, e0.isStaticChannelRoute)(s);
        if (!n) return null;
        let l = eG.default.getChannel(i);
        if (null == l) eR.default.loadThread(i).then(() => ta({
          channelId: i,
          guildId: a,
          pathname: t
        }));
        else if ((null == l ? void 0 : l.parent_id) !== s) return eS.default.closeChannelSidebar(s), {
          path: eJ.Routes.CHANNEL(a, s),
          state: e.state
        }
      }
    }
    return null
  }
  render() {
    return (0, a.jsxs)(s.Fragment, {
      children: [(0, a.jsxs)(r.Switch, {
        children: [(0, a.jsx)(r.Redirect, {
          exact: !0,
          from: "/channels",
          to: "/"
        }), tt.map(e => {
          let {
            path: t,
            render: n
          } = e;
          return (0, a.jsx)(r.Route, {
            path: t,
            render: n
          }, t[0])
        }), (0, a.jsx)(r.Redirect, {
          to: "/"
        })]
      }), (0, a.jsx)(y.default, {})]
    })
  }
  constructor(...e) {
    super(...e), this.historyUnlisten = () => {}, this.rewriterUnlisten = () => {}
  }
}
var ti = ts
    "use strict";
    t.r(a), t.d(a, {
      Overlay: function() {
        return z
      },
      default: function() {
        return Q
      }
    }), t("222007");
    var d = t("37983"),
      s = t("884691"),
      n = t("522632"),
      c = t("803182"),
      i = t("90915"),
      r = t("817792"),
      o = t("815157"),
      f = t("391679"),
      l = t("446674"),
      u = t("95410"),
      p = t("795137"),
      b = t("837319"),
      h = t("73749"),
      j = t("269936"),
      m = t("231032"),
      _ = t("724349"),
      E = t("883897"),
      g = t("338027"),
      I = t("271938"),
      T = t("599110"),
      O = t("98013"),
      R = t("924822"),
      v = t("773336"),
      w = t("50885"),
      S = t("49111"),
      A = t("492397"),
      N = t("53452");
    t("292687"), t("263901"), t("278163");
    let C = (0, j.makeLazy)({
        createPromise: () => t.el("545169").then(t.bind(t, "545169")),
        webpackId: "545169",
        name: "UnsupportedBrowser"
      }),
      D = (0, j.makeLazy)({
        createPromise: () => t.el("649486").then(t.bind(t, "649486")),
        webpackId: "649486",
        name: "DownloadApps"
      }),
      L = (0, j.makeLazy)({
        createPromise: () => t.el("254936").then(t.bind(t, "254936")),
        webpackId: "254936",
        name: "InviteProxy"
      }),
      P = (0, j.makeLazy)({
        createPromise: () => t.el("456320").then(t.bind(t, "456320")),
        webpackId: "456320",
        name: "VerifyConnectedAccount"
      }),
      M = (0, j.makeLazy)({
        createPromise: () => t.el("176384").then(t.bind(t, "176384")),
        webpackId: "176384",
        name: "LinkConnectedAccount"
      }),
      y = (0, j.makeLazy)({
        createPromise: () => t.el("324202").then(t.bind(t, "324202")),
        webpackId: "324202",
        name: "LinkAuthorize"
      }),
      k = (0, j.makeLazy)({
        createPromise: () => t.el("965179").then(t.bind(t, "965179")),
        webpackId: "965179",
        name: "ActivateDevice"
      }),
      x = (0, j.makeLazy)({
        createPromise: () => t.el("779020").then(t.bind(t, "779020")),
        webpackId: "779020",
        name: "ViewsWithMainInterface",
        memo: !0,
        id: "779020"
      }),
      U = (0, j.makeLazy)({
        createPromise: () => t.el("994509").then(t.bind(t, "994509")),
        webpackId: "994509",
        name: "XboxEdu"
      }),
      G = (0, j.makeLazy)({
        createPromise: () => t.el("225936").then(t.bind(t, "225936")),
        webpackId: "225936",
        name: "XboxPin"
      }),
      V = (0, j.makeLazy)({
        createPromise: () => t.el("549869").then(t.bind(t, "549869")),
        webpackId: "549869",
        name: "ViewsWithAuth"
      }),
      H = (0, j.makeLazy)({
        createPromise: () => t.el("337863").then(t.bind(t, "337863")),
        webpackId: "337863",
        name: "ViewsWithOAuth2"
      }),
      F = (0, j.makeLazy)({
        createPromise: () => t.el("765105").then(t.bind(t, "765105")),
        webpackId: "765105",
        name: "ViewsWithUnauthenticatedApplicationDirectory"
      }),
      B = (0, j.makeLazy)({
        createPromise: () => t.el("143416").then(t.bind(t, "143416")),
        webpackId: "143416",
        name: "BrowserHandoff"
      }),
      W = (0, j.makeLazy)({
        createPromise: () => t.el("767413").then(t.bind(t, "767413")),
        webpackId: "767413",
        name: "MobileWebHandoffFallback"
      }),
      z = (0, j.makeLazy)({
        createPromise: () => t.el("476427").then(t.bind(t, "476427")),
        webpackId: "476427",
        name: "Overlay"
      }),
      K = (0, j.makeLazy)({
        createPromise: () => t.el("854908").then(t.bind(t, "854908")),
        webpackId: "854908",
        name: "SuspendedUserSafetyHubPage"
      }),
      Z = () => (0, d.jsx)(x, {}),
      Y = new Set([S.Routes.LOGIN, S.Routes.LOGIN_HANDOFF, S.Routes.INVITE_LOGIN(":inviteCode"), S.Routes.GIFT_CODE_LOGIN(":giftCode"), S.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")]);

    function X(e, a) {
      return a ? e.filter(e => !Y.has(e)) : e
    }
    class q extends s.Component {
      componentDidMount() {
        w.default.cleanupDisplaySleep(), g.default.initialize()
      }
      componentWillUnmount() {
        g.default.terminate()
      }
      render() {
        let e;
        let {
          isAuthenticated: a,
          migrationStatus: t,
          skipsSettingDefaultPageTitle: s
        } = this.props;
        return e = t === _.MigrationStatus.IN_PROGRESS ? null : N.IS_APP_COMPATIBLE_BROWSER ? v.isPlatformEmbedded ? (0, d.jsxs)(i.Switch, {
          children: [(0, d.jsx)(i.Route, {
            exact: !0,
            path: S.Routes.INDEX,
            render: () => (0, d.jsx)(p.default, {})
          }), (0, d.jsx)(h.default, {
            exact: !0,
            path: S.Routes.APPS,
            component: D
          }), (0, d.jsx)(i.Route, {
            path: X([S.Routes.LOGIN, S.Routes.REGISTER, S.Routes.INVITE(":inviteCode"), S.Routes.INVITE_LOGIN(":inviteCode"), S.Routes.GIFT_CODE(":giftCode"), S.Routes.GIFT_CODE_LOGIN(":giftCode"), S.Routes.RESET], A.CONFERENCE_MODE_ENABLED),
            component: V
          }), (0, d.jsx)(h.default, {
            path: S.Routes.INVITE_PROXY(":channelId"),
            component: L
          }), (0, d.jsx)(i.Redirect, {
            from: S.Routes.INVITE(""),
            to: S.Routes.LOGIN
          }), (0, d.jsx)(i.Redirect, {
            from: S.Routes.GIFT_CODE(""),
            to: S.Routes.LOGIN
          }), (0, d.jsx)(i.Route, {
            render: Z
          })]
        }) : (0, d.jsxs)(i.Switch, {
          children: [(0, d.jsx)(h.default, {
            exact: !0,
            path: S.Routes.INDEX,
            render: () => (0, d.jsx)(p.default, {})
          }), (0, d.jsx)(i.Route, {
            path: X([S.Routes.LOGIN, S.Routes.LOGIN_HANDOFF, S.Routes.REGISTER, S.Routes.BILLING_PREFIX, S.Routes.BILLING_PROMOTION_REDEMPTION(":code"), S.Routes.INVITE(":inviteCode"), S.Routes.INVITE_LOGIN(":inviteCode"), S.Routes.GIFT_CODE(":giftCode"), S.Routes.GIFT_CODE_LOGIN(":giftCode"), S.Routes.GUILD_TEMPLATE(":guildTemplateCode"), S.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"), S.Routes.DISABLE_EMAIL_NOTIFICATIONS, S.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, S.Routes.RESET, S.Routes.REPORT, S.Routes.REPORT_SECOND_LOOK], A.CONFERENCE_MODE_ENABLED),
            component: V
          }), a ? null : (0, d.jsx)(i.Route, {
            path: S.Routes.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
            component: V
          }), a ? null : (0, d.jsx)(i.Route, {
            path: S.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
            component: V
          }), (0, d.jsx)(i.Redirect, {
            from: S.Routes.INVITE(""),
            to: S.Routes.LOGIN
          }), (0, d.jsx)(h.default, {
            path: S.Routes.INVITE_PROXY(":channelId"),
            component: L
          }), (0, d.jsx)(i.Redirect, {
            from: S.Routes.GIFT_CODE(""),
            to: S.Routes.LOGIN
          }), (0, d.jsx)(h.default, {
            path: S.Routes.HANDOFF,
            component: B
          }), (0, d.jsx)(h.default, {
            path: S.Routes.MOBILE_WEB_HANDOFF,
            component: W
          }), (0, d.jsx)(h.default, {
            path: S.Routes.XBOX_EDU,
            component: U
          }), (0, d.jsx)(h.default, {
            path: S.Routes.XBOX_PIN,
            component: G
          }), (0, d.jsx)(h.default, {
            path: S.Routes.CONNECTION_LINK(":type"),
            component: M
          }), (0, d.jsx)(h.default, {
            path: S.Routes.CONNECTION_LINK_AUTHORIZE(":type"),
            component: y
          }), (0, d.jsx)(h.default, {
            path: S.Routes.ACTIVATE,
            component: k
          }), (0, d.jsx)(h.default, {
            path: S.Routes.CONNECTIONS(":type"),
            component: P
          }), (0, d.jsx)(h.default, {
            path: S.Routes.DOWNLOAD_QR_CODE_REDIRECT,
            render: () => {
              var e, a, t;
              let d = null === (e = T.default.getSuperProperties()) || void 0 === e ? void 0 : e.os,
                s = (0, n.parse)((null !== (t = window.location.search) && void 0 !== t ? t : "").substr(1)),
                c = null === (a = s.referring_location) || void 0 === a ? void 0 : a.toString();
              return ("iOS" === d || "Android" === d) && T.default.track(S.AnalyticEvents.DOWNLOAD_APP, {
                platform: d,
                ptb: !1,
                released: !0,
                has_e_mail: "true" === s.has_e_mail,
                referring_location: c,
                qr_code: !0
              }), window.location.href = (0, O.getMobileDownloadLink)(null != c && "" !== c ? c : "qr_code", d), null
            }
          }), (0, d.jsx)(h.default, {
            path: S.Routes.OPEN_APP_FROM_EMAIL,
            render: () => {
              var e, a;
              let t = null === (e = T.default.getSuperProperties()) || void 0 === e ? void 0 : e.os,
                s = (0, R.getOpenAppFromEmailDestinations)(null !== (a = window.location.search) && void 0 !== a ? a : "");
              if ("iOS" !== t && "Android" !== t) return (0, d.jsx)(i.Redirect, {
                to: null != s.desktop ? "".concat(s.desktop.pathname).concat(s.desktop.search) : S.Routes.APP
              });
              {
                let e = (0, O.getMobileDownloadLink)("app_open_from_email", t, s.mobile),
                  a = (0, o.parseDynamicLink)(e);
                null != a && T.default.track(S.AnalyticEvents.DEEP_LINK_CLICKED, {
                  fingerprint: (0, f.maybeExtractId)(a.fingerprint),
                  attempt_id: a.attemptId,
                  source: a.utmSource,
                  destination: null != s.mobile ? s.mobile.toString() : null
                }), window.location.href = e
              }
            }
          }), (0, d.jsx)(i.Redirect, {
            from: S.Routes.CONNECT_AUTHORIZE,
            to: {
              ...location,
              pathname: S.Routes.OAUTH2_AUTHORIZE
            }
          }), (0, d.jsx)(i.Route, {
            path: [S.Routes.OAUTH2_AUTHORIZED, S.Routes.OAUTH2_AUTHORIZE, S.Routes.OAUTH2_ERROR, S.Routes.OAUTH2_WHITELIST_ACCEPT],
            component: H
          }), a ? null : (0, d.jsx)(i.Route, {
            path: [S.Routes.ACCOUNT_STANDING],
            component: K
          }), a ? null : (0, d.jsx)(i.Route, {
            path: S.Routes.APPLICATION_STORE,
            component: b.default
          }), a ? null : (0, d.jsx)(i.Route, {
            path: [S.Routes.APPLICATION_DIRECTORY_SEARCH, S.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section?"), S.Routes.APPLICATION_DIRECTORY],
            component: F
          }), (0, d.jsx)(i.Route, {
            render: Z
          })]
        }) : (0, d.jsx)(i.Switch, {
          children: (0, d.jsx)(h.default, {
            component: C
          })
        }), (0, d.jsxs)(m.default, {
          skipsSettingDefaultPageTitle: s,
          children: [e, v.isPlatformEmbedded && (t === _.MigrationStatus.NOT_STARTED || t === _.MigrationStatus.IN_PROGRESS) && !0 !== u.default.get(r.DOMAIN_MIGRATION_SUCCESS_KEY) ? (0, d.jsx)(E.default, {}) : null]
        })
      }
    }
    var Q = l.default.connectStores([I.default, _.default], () => ({
      isAuthenticated: I.default.isAuthenticated(),
      migrationStatus: _.default.getMigrationStatus()
    }), {
      forwardRef: !0
    })(function(e) {
      let a = function() {
        let {
          pathname: e
        } = (0, i.useLocation)(), a = (0, c.matchPath)(e, {
          path: S.Routes.APPLICATION_DIRECTORY
        });
        return null != a
      }();
      return (0, d.jsx)(q, {
        ...e,
        skipsSettingDefaultPageTitle: a
      })
    })
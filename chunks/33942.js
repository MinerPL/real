"use strict";
n.r(t), n.d(t, {
  OAuth2AuthorizePage: function() {
    return X
  },
  OAuth2AuthorizeModal: function() {
    return Q
  },
  OAuth2Authorize: function() {
    return Z
  },
  useOAuth2AuthorizeForm: function() {
    return J
  },
  openOAuth2ModalWithCreateGuildModal: function() {
    return ee
  },
  openOAuth2Modal: function() {
    return et
  },
  getOAuth2AuthorizeProps: function() {
    return en
  }
}), n("222007"), n("70102");
var s, i, r, a, o = n("37983"),
  d = n("884691"),
  u = n("90915"),
  l = n("746379"),
  f = n.n(l),
  _ = n("316693"),
  c = n("446674"),
  g = n("271841"),
  m = n("551042"),
  h = n("670914"),
  v = n("242670"),
  E = n("84460"),
  p = n("191225"),
  y = n("716241"),
  T = n("148217"),
  C = n("970254"),
  S = n("616265"),
  I = n("894887"),
  A = n("393414"),
  D = n("766274"),
  N = n("271938"),
  O = n("449008"),
  b = n("991170"),
  P = n("253981"),
  k = n("872825"),
  R = n("8222"),
  V = n("164386"),
  M = n("978970"),
  w = n("29479"),
  L = n("357974"),
  U = n("580363"),
  G = n("613070"),
  F = n("530487"),
  x = n("638992"),
  B = n("223934"),
  H = n("267570"),
  Y = n("941281"),
  j = n("49111"),
  K = n("954016"),
  W = n("782340"),
  z = n("392507");
let q = "oauth2-authorize-header-id";

function X() {
  let e = (0, u.useLocation)(),
    t = d.useMemo(() => (0, k.parseOAuth2AuthorizeProps)(e.search), [e.search]);
  return (0, T.default)(), (0, o.jsx)(H.OAuth2Page, {
    children: (0, o.jsx)(Z, {
      ...t,
      showLogout: !0
    })
  })
}

function Q(e) {
  let {
    transitionState: t,
    ...n
  } = e;
  return (0, o.jsx)(H.OAuth2Modal, {
    transitionState: t,
    "aria-labelledby": q,
    children: (0, o.jsx)(Z, {
      ...n,
      scrollable: !0
    })
  })
}

function Z(e) {
  let {
    scrollable: t,
    ...n
  } = e, {
    header: s,
    body: i,
    footer: r,
    nextStep: a,
    appDetails: d
  } = J(n), u = (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsxs)("div", {
      className: z.content,
      children: [s, i, null == a ? d : null]
    }), r]
  });
  return t ? (0, o.jsx)("div", {
    className: z.authorize,
    children: (0, o.jsx)(h.ScrollerThin, {
      orientation: "auto",
      children: u
    })
  }) : (0, o.jsx)("div", {
    className: z.authorize,
    children: (0, o.jsx)("div", {
      children: u
    })
  })
}

function J(e) {
  var t, n, s, i, r, a, l, m;
  let h, T, S, {
      clientId: I,
      scopes: H,
      responseType: X,
      redirectUri: Q,
      codeChallenge: Z,
      codeChallengeMethod: J,
      state: $,
      guildId: ee,
      channelId: et,
      permissions: en,
      prompt: es,
      disableGuildSelect: ei,
      showLogout: er = !1,
      authorization: ea,
      callback: eo,
      callbackWithoutPost: ed,
      onClose: eu,
      cancelCompletesFlow: el = !0,
      isTrustedName: ef = !1,
      isEmbeddedFlow: e_ = !1,
      userInstall: ec = !1
    } = e,
    eg = d.useMemo(() => (0, k.filterScopes)(H), [H]),
    em = (0, u.useLocation)(),
    eh = C.default.useExperiment({
      location: "auth web"
    }),
    ev = eh.userAppsTreatment === C.UserAppsTreatment.ALLOWED;
  !ev && (ec = !1);
  let [eE, ep] = d.useState(0), [ey, eT] = d.useState(null), [eC, eS] = d.useState(b.default.NONE), [eI, eA] = d.useState(1), [eD, eN] = d.useState(null), [eO] = d.useState(w.OrderedAccountScopes.filter(e => eg.includes(e))), [eb, eP] = d.useState(null != ee ? ee : null), [ek, eR] = d.useState(null != et ? et : null), [eV, eM] = d.useState(!1), ew = d.useMemo(() => {
    var e;
    return null == ey ? void 0 : null === (e = ey.guilds) || void 0 === e ? void 0 : e.find(e => e.id === eb)
  }, [null == ey ? void 0 : ey.guilds, eb]), eL = (0, c.useStateFromStoresObject)([E.default, p.default], () => {
    var e, t;
    let n;
    let s = null === (e = p.default.getSelfEmbeddedActivities().values().next()) || void 0 === e ? void 0 : e.value,
      i = E.default.getIsEnabled();
    return (0, O.isNotNullish)(s) && (n = p.default.getShelfActivities(s.guildId).find(e => e.application_id === s.application_id), i && void 0 === n && (n = null === (t = E.default.getDeveloperShelfItems().find(e => e.id === s.application_id)) || void 0 === t ? void 0 : t.embeddedActivityConfig), (0, O.isNotNullish)(n)) ? {
      ...K.DEFAULT_EMBEDDED_ACTIVITY_CONFIG,
      ...n
    } : {}
  }), eU = Object.keys(eL).length > 0 ? eL : null, eG = d.useCallback(async e => {
    if (null != ed) {
      ed(e);
      return
    }
    if (!e && !el) {
      null != eo && (eo({
        application: null == ey ? void 0 : ey.application,
        guild: ew
      }), null == eu || eu());
      return
    }
    try {
      eM(!0);
      let t = await (0, R.authorize)({
        authorize: e,
        clientId: I,
        scopes: eg,
        responseType: X,
        redirectUri: Q,
        codeChallenge: Z,
        codeChallengeMethod: J,
        state: $,
        permissions: _.default.remove(null != en ? en : b.default.NONE, eC),
        guildId: null == eb || ec ? void 0 : eb,
        channelId: null != ek ? ek : void 0,
        userInstall: ec
      });
      if (null != eo) eo({
        application: null == ey ? void 0 : ey.application,
        location: t.location,
        guild: ew
      }), null == eu || eu();
      else if (null != t.location) {
        let {
          host: e,
          path: n
        } = f.parse(t.location);
        P.default.isDiscordHostname(e) && n === j.Routes.OAUTH2_AUTHORIZED ? (0, A.transitionTo)(j.Routes.OAUTH2_AUTHORIZED, {
          state: {
            application: null == ey ? void 0 : ey.application,
            guild: ew
          }
        }) : window.location = t.location
      } else eM(!1)
    } catch (t) {
      let e = t.body;
      (null == e ? void 0 : e.message) != null && "" !== e.message ? eN(Error(e.message)) : eN(e), eA(1), ep(2), eM(!1)
    }
  }, [eo, ed, I, Z, J, eC, eu, en, Q, X, eg, eb, ek, $, el, null == ey ? void 0 : ey.application, ew, ec]), eF = d.useRef(!1), ex = d.useCallback(async () => {
    if (0 === eE) {
      if (ep(1), !N.default.isAuthenticated()) {
        (0, R.logoutWithRedirect)(em);
        return
      }
      if (!eF.current) {
        eF.current = !0;
        try {
          let e = null != ea ? ea : await (0, R.fetchAuthorization)({
            clientId: I,
            scopes: eg,
            responseType: X,
            redirectUri: Q,
            codeChallenge: Z,
            codeChallengeMethod: J,
            state: $,
            userInstall: ev && ec
          });
          eT((0, V.convertOAuth2Authorization)(e)), es === L.OAuth2Prompts.NONE && e.authorized ? eG(!0) : ep(2), (0, y.trackWithMetadata)(j.AnalyticEvents.OAUTH2_AUTHORIZE_VIEWED, {
            application_id: e.application.id
          })
        } catch (n) {
          let {
            status: e,
            body: t
          } = n;
          if (401 === e) {
            (0, R.logoutWithRedirect)(em);
            return
          }
          eN(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0]))), ep(2)
        } finally {
          eF.current = !1
        }
      }
    }
  }, [ea, I, Z, J, eE, em, es, Q, X, eg, eG, $, ec, ev]), eB = d.useCallback((e, t) => {
    eS(n => e ? _.default.remove(n, t) : _.default.add(n, t))
  }, []);
  d.useEffect(() => {
    let e = eg.filter(e => !w.ValidScopes.includes(e));
    0 === eg.length ? (eN(Error("No scopes were provided.")), ep(2)) : e.length > 0 ? (eN(Error("Invalid scope: ".concat(e[0]))), ep(2)) : (0, M.containsDisallowedPermission)(null != en ? en : b.default.NONE) ? (eN(Error("Invalid permission(s) provided.")), ep(2)) : ex()
  }, [ex, eg, en]);
  let eH = null != ek ? null == ey ? void 0 : null === (t = ey.channels) || void 0 === t ? void 0 : t.find(e => e.id === ek) : null,
    eY = null != eb ? null == ey ? void 0 : null === (n = ey.guilds) || void 0 === n ? void 0 : n.find(e => e.id === eb) : null;
  if (d.useEffect(() => {
      null != ey && (null != eH ? eP(null) : null == eY && (eP(null), eR(null)))
    }, [ey, eY, eH]), eD instanceof Error) return {
    body: (0, o.jsx)(Y.OAuth2Error, {
      message: eD.message
    })
  };
  if (2 !== eE || null == ey) return {
    body: (0, o.jsx)(v.Spinner, {})
  };
  let ej = new D.default(ey.user),
    eK = null === (s = ey.bot) || void 0 === s ? void 0 : s.approximate_guild_count,
    eW = !1;
  switch (eI) {
    case 1:
      let ez = null == eD || eD instanceof Error ? {} : eD,
        eq = null === (i = ey.guilds) || void 0 === i ? void 0 : i.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
        eX = eg.includes(j.OAuth2Scopes.BOT) || eg.includes(j.OAuth2Scopes.WEBHOOK_INCOMING) || eg.includes(j.OAuth2Scopes.APPLICATIONS_COMMANDS);
      h = (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)(G.default, {
          application: ey.application,
          accountScopes: eO,
          errors: ez,
          isTrustedName: ef
        }), null == eH && eX && !ec ? (0, o.jsx)(x.GuildSelector, {
          error: (null !== (a = null !== (r = ez[j.OAuth2Scopes.BOT]) && void 0 !== r ? r : ez[j.OAuth2Scopes.APPLICATIONS_COMMANDS]) && void 0 !== a ? a : [])[0],
          selectedGuildId: eb,
          onGuildChange: e => {
            eP(e)
          },
          guilds: null != eq ? eq : [],
          disabled: "" !== eb && !0 === ei
        }) : null, eg.includes(j.OAuth2Scopes.WEBHOOK_INCOMING) ? (0, o.jsx)(x.WebhookGuildChannelSelector, {
          error: (null !== (l = ez[j.OAuth2Scopes.WEBHOOK_INCOMING]) && void 0 !== l ? l : [])[0],
          selectedChannelId: ek,
          selectedGuildId: eb,
          onChannelChange: e => eR(e)
        }) : null]
      }), eg.includes(j.OAuth2Scopes.BOT) && !_.default.equals(en, b.default.NONE) && (S = 2);
      let eQ = null != eY && eg.includes(j.OAuth2Scopes.WEBHOOK_INCOMING) && null == ek;
      eW = !ec && (eX && null == eY && null == eH || eQ);
      break;
    case 2:
      h = (0, o.jsx)(F.default, {
        application: ey.application,
        permissions: null != en ? en : b.default.NONE,
        deniedPermissions: eC,
        onPermissionsChange: eB,
        guild: eY
      }), T = 1
  }
  let eZ = (0, o.jsx)(U.default, {
      embeddedActivityConfig: eU,
      application: ey.application,
      scopes: eg,
      redirectUri: null !== (m = ey.redirect_uri) && void 0 !== m ? m : null,
      approximateGuildCount: void 0 !== eK ? eK : null,
      isEmbeddedFlow: e_
    }),
    eJ = (0, o.jsxs)("div", {
      className: z.footer,
      children: [null != T ? (0, o.jsx)(g.Button, {
        look: g.Button.Looks.LINK,
        color: g.Button.Colors.PRIMARY,
        onClick: () => eA(T),
        children: W.default.Messages.BACK
      }) : (0, o.jsx)(g.Button, {
        look: g.Button.Looks.LINK,
        color: g.Button.Colors.PRIMARY,
        onClick: () => eG(!1),
        children: W.default.Messages.CANCEL
      }), null != S ? (0, o.jsx)(g.Button, {
        onClick: () => eA(S),
        disabled: eW,
        children: W.default.Messages.CONTINUE
      }) : (0, o.jsx)(g.Button, {
        onClick: () => eG(!0),
        disabled: eW,
        submitting: eV,
        children: W.default.Messages.AUTHORIZE
      })]
    }),
    e$ = (0, o.jsx)(B.default, {
      id: q,
      user: ej,
      application: ey.application,
      bot: ey.bot,
      accountScopes: eO,
      showLogout: er || !1,
      location: em,
      isTrustedName: ef
    });
  return {
    header: e$,
    body: h,
    footer: eJ,
    nextStep: S,
    appDetails: eZ,
    sendAuthorize: eG
  }
}

function $(e, t) {
  if (null == t.location || null != e && e(t)) return;
  let {
    host: n,
    path: s,
    query: i
  } = f.parse(t.location, !0), r = P.default.isDiscordHostname(n) || window.location.host === n;
  if (r && s === j.Routes.OAUTH2_AUTHORIZED)(0, m.openModal)(e => (0, o.jsx)(H.OAuth2Modal, {
    ...e,
    "aria-labelledby": q,
    children: (0, o.jsx)(Y.OAuth2AuthorizedSuccess, {
      guild: t.guild,
      application: t.application,
      onClose: e.onClose
    })
  }));
  else if (r && (null == s ? void 0 : s.startsWith(j.Routes.OAUTH2_ERROR)))(0, m.openModal)(e => {
    let t = i.error_description || i.error || W.default.Messages.OAUTH2_UNKNOWN_ERROR;
    return Array.isArray(t) && (t = t[0]), (0, o.jsxs)(H.OAuth2Modal, {
      ...e,
      "aria-labelledby": q,
      children: [(0, o.jsx)(Y.OAuth2Error, {
        message: t,
        onClose: e.onClose
      }), ";"]
    })
  });
  else {
    var a;
    null === (a = window.open(t.location, "_blank")) || void 0 === a || a.focus()
  }
}

function ee(e, t) {
  if ((0, I.isMidjourneyOnboardingFlow)("create-guild-and-oauth2-modal")) {
    S.default.openCreateGuildModal({
      onSuccess: n => et({
        ...e,
        guildId: n
      }, t)
    });
    return
  }
  et(e, t)
}

function et(e, t) {
  (0, m.openModal)(t => (0, o.jsx)(Q, {
    ...t,
    ...e,
    cancelCompletesFlow: !1,
    callback: $.bind(null, e.callback)
  }), {
    onCloseCallback: t
  })
}

function en(e) {
  let {
    hostname: t = "",
    host: n,
    path: s,
    query: i
  } = f.parse(e);
  return null != s && null != i && (P.default.isDiscordHostname(t) || n === window.location.host) && (s.startsWith("/api".concat(j.Endpoints.OAUTH2_AUTHORIZE)) || s.startsWith(j.Routes.OAUTH2_AUTHORIZE)) ? (0, k.parseOAuth2AuthorizeProps)(i) : null
}(r = s || (s = {}))[r.NOT_LOADED = 0] = "NOT_LOADED", r[r.LOADING = 1] = "LOADING", r[r.LOADED = 2] = "LOADED", (a = i || (i = {}))[a.INSTALL_TYPE = 0] = "INSTALL_TYPE", a[a.AUTHORIZE_SCOPES = 1] = "AUTHORIZE_SCOPES", a[a.AUTHORIZE_BOT_PERMISSIONS = 2] = "AUTHORIZE_BOT_PERMISSIONS"
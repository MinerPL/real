"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  },
  OAuth2Success: function() {
    return I
  },
  OAuth2AuthorizedSuccess: function() {
    return A
  },
  OAuth2Error: function() {
    return D
  },
  OAuth2AuthorizedPage: function() {
    return N
  },
  OAuth2ErrorPage: function() {
    return O
  }
});
var s = n("37983"),
  i = n("884691"),
  r = n("414456"),
  a = n.n(r),
  o = n("730290"),
  d = n("90915"),
  u = n("746379"),
  l = n.n(u),
  f = n("516256"),
  _ = n("242670"),
  c = n("577776"),
  g = n("77078"),
  m = n("69927"),
  h = n("393414"),
  v = n("239380"),
  E = n("599110"),
  p = n("267570"),
  y = n("49111"),
  C = n("782340"),
  T = n("223003");

function S(e) {
  let {
    message: t,
    footer: n,
    headerClassName: i,
    showsCloseWindowText: r,
    spinner: o,
    onClose: d
  } = e;
  return (0, m.usePageTitle)({
    location: C.default.Messages.OAUTH2_TITLE
  }), (0, s.jsxs)(s.Fragment, {
    children: [null != d ? (0, s.jsx)(f.ModalCloseButton, {
      onClick: d,
      className: T.closeButton
    }) : null, (0, s.jsxs)("div", {
      className: T.wrapper,
      children: [o ? (0, s.jsx)(_.Spinner, {}) : null, (0, s.jsx)("div", {
        className: a(T.header, i)
      }), (0, s.jsx)(c.Text, {
        variant: "text-md/normal",
        className: T.text,
        children: t
      }), null != n ? n : null, r ? (0, s.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: T.cta,
        children: C.default.Messages.OAUTH2_MESSAGE_CTA
      }) : null]
    })]
  })
}

function I(e) {
  return (0, s.jsx)(S, {
    ...e,
    headerClassName: T.headerSuccess
  })
}

function A(e) {
  let {
    guild: t,
    application: n,
    ...r
  } = e, {
    onClose: a
  } = r, o = C.default.Messages.AUTHORIZED_SUCCESS, d = i.useCallback(() => {
    (null == t ? void 0 : t.id) != null && ((0, v.transitionToGuild)(null == t ? void 0 : t.id), null == a || a(), E.default.track(y.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
      application_id: null == n ? void 0 : n.id,
      guild_id: null == t ? void 0 : t.id
    }))
  }, [a, null == n ? void 0 : n.id, null == t ? void 0 : t.id]), u = i.useCallback(() => {
    null == a || a(), E.default.track(y.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
      application_id: null == n ? void 0 : n.id
    })
  }, [a, null == n ? void 0 : n.id]), l = i.useMemo(() => {
    if (null != n) return null != t ? C.default.Messages.AUTHORIZED_APP_TO_SERVER.format({
      installedApplicationName: null == n ? void 0 : n.name,
      guildName: null == t ? void 0 : t.name
    }) : C.default.Messages.AUTHORIZED_APP.format({
      installedApplicationName: null == n ? void 0 : n.name
    });
    return C.default.Messages.AUTHORIZED_GENERIC
  }, [n, t]), f = (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(c.Text, {
      variant: "text-sm/normal",
      className: T.authorizedSuccessSubtext,
      children: l
    }), (null != t || null != a) && (0, s.jsxs)("div", {
      className: T.buttonsContainer,
      children: [null != t && (0, s.jsx)(g.Button, {
        fullWidth: !0,
        color: g.Button.Colors.BRAND,
        onClick: d,
        className: T.button,
        children: (null == t ? void 0 : t.name.length) > 30 ? C.default.Messages.OAUTH2_GO_TO_SERVER_DEFAULT_CTA : C.default.Messages.OAUTH2_GO_TO_SERVER_NAME_CTA.format({
          guildName: null == t ? void 0 : t.name
        })
      }), null != a && (0, s.jsx)(g.Button, {
        fullWidth: !0,
        color: g.Button.Colors.PRIMARY,
        onClick: u,
        className: T.button,
        children: C.default.Messages.CLOSE
      })]
    })]
  });
  return i.useEffect(() => {
    E.default.track(y.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, {
      application_id: null == n ? void 0 : n.id
    })
  }, [null == n ? void 0 : n.id]), (0, s.jsx)("div", {
    className: T.authorizedSuccessWrapper,
    children: (0, s.jsx)(I, {
      message: o,
      footer: f,
      ...r
    })
  })
}

function D(e) {
  return (0, s.jsx)(S, {
    ...e,
    headerClassName: T.headerFailure
  })
}

function N() {
  var e, t;
  let n = (0, d.useLocation)();
  return (0, s.jsx)(p.OAuth2Page, {
    children: (0, s.jsx)(A, {
      guild: null === (e = n.state) || void 0 === e ? void 0 : e.guild,
      application: null === (t = n.state) || void 0 === t ? void 0 : t.application,
      showsCloseWindowText: !0
    })
  })
}

function O(e) {
  var t, n;
  let {
    location: r
  } = e;
  i.useEffect(() => {
    if (null == r) return;
    let e = null != document.referrer && "" !== document.referrer ? l.parse(document.referrer) : null;
    (null == e || e.host !== window.location.host || e.pathname !== y.Routes.OAUTH2_AUTHORIZE) && (0, h.transitionTo)(y.Routes.INDEX)
  }, [r]);
  let a = null != r ? (0, o.parse)(r.search) : {},
    d = null !== (n = null !== (t = a.error_description) && void 0 !== t ? t : a.error) && void 0 !== n ? n : C.default.Messages.OAUTH2_UNKNOWN_ERROR;
  return (0, s.jsx)(p.OAuth2Page, {
    children: (0, s.jsx)(D, {
      message: d,
      showsCloseWindowText: !0
    })
  })
}
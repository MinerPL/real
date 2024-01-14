"use strict";
t.r(a), t.d(a, {
  TwoWayLinkDiscordConsent: function() {
    return m
  }
}), t("222007");
var s = t("37983"),
  n = t("884691"),
  l = t("627445"),
  r = t.n(l),
  o = t("77078"),
  i = t("619340"),
  c = t("605250"),
  d = t("33942"),
  u = t("145131"),
  h = t("782340"),
  N = t("429152");
let x = new c.default("TwoWayLinkDiscordConsentWeb");

function m(e) {
  let {
    platformType: a,
    clientId: t,
    scopes: l,
    authToken: c,
    onContinue: m,
    onError: C,
    onClose: f,
    redirectUri: T
  } = e, [p, j] = n.useState(!1), v = n.useCallback(async e => {
    let t, {
        location: s
      } = e,
      {
        callbackCode: n,
        callbackState: l
      } = c;
    try {
      t = await i.default.completeTwoWayLink(a, s, n, l)
    } catch (e) {
      x.error("".concat(a, " link error:"), e)
    }
    null != t ? m() : C()
  }, [a, c, m, C]), {
    header: y,
    body: E,
    appDetails: g,
    sendAuthorize: L
  } = (0, d.useOAuth2AuthorizeForm)({
    clientId: t,
    scopes: l,
    responseType: "code",
    callback: v,
    isTrustedName: !0,
    isEmbeddedFlow: !0,
    redirectUri: T
  }), k = n.useCallback(() => {
    r(null != L, "sendAuthorize not available"), j(!0), L(!0)
  }, [L]);
  return (0, s.jsxs)("div", {
    className: N.container,
    children: [null != f && (0, s.jsx)(o.ModalCloseButton, {
      className: N.closeButton,
      onClick: f
    }), (0, s.jsxs)(o.Scroller, {
      children: [(0, s.jsx)(o.ModalHeader, {
        direction: u.default.Direction.VERTICAL,
        className: N.header,
        separator: !1,
        children: (0, s.jsx)(o.Text, {
          className: N.stepHeader,
          variant: "text-xs/bold",
          color: "header-secondary",
          children: h.default.Messages.BIDIRECTIONAL_STEP_HEADER.format({
            number: 2,
            total: 2
          })
        })
      }), (0, s.jsxs)("div", {
        className: N.discordConsentBody,
        children: [y, E, g]
      }), (0, s.jsx)(o.ModalFooter, {
        className: N.footer,
        children: (0, s.jsx)(o.Button, {
          className: N.footerButton,
          color: o.Button.Colors.BRAND,
          submitting: p,
          onClick: k,
          children: h.default.Messages.AUTHORIZE_AND_CONTINUE
        })
      })]
    })]
  })
}
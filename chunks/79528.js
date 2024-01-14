"use strict";
t.r(a), t.d(a, {
  TwoWayLinkPreConnect: function() {
    return T
  }
}), t("70102");
var s = t("37983"),
  n = t("884691"),
  l = t("627445"),
  r = t.n(l),
  o = t("382825"),
  i = t("77078"),
  c = t("913144"),
  d = t("535013"),
  u = t("926994"),
  h = t("605250"),
  N = t("145131"),
  x = t("758710"),
  m = t("782340"),
  C = t("429152");
let f = new h.default("TwoWayLink");

function T(e) {
  let {
    platformType: a,
    isWaitingForConnection: t,
    onWaitingForConnection: l,
    expectedCallbackState: h,
    onAuthToken: T,
    onError: p,
    onClose: j,
    img: v,
    title: y,
    body: E,
    redirectDestination: g
  } = e, L = n.useCallback(async () => {
    let e;
    try {
      if (e = await (0, u.openProviderAuthorize)(a, {
          twoWayLinkType: o.TwoWayLinkType.DESKTOP
        }), null == e) throw Error("missing authorizeURL")
    } catch (e) {
      f.error("Error opening provider authorize page", e), p();
      return
    }
    let {
      state: t
    } = (0, d.getCallbackParamsFromURL)(e);
    r(null != t, "Authorize URL state query parameter must be present"), null == l || l(t)
  }, [a, p, l]), k = n.useCallback(e => {
    let {
      callbackCode: t,
      callbackState: s
    } = e;
    if (s !== h) {
      f.warn("".concat(a, " link: received mismatching callback state!"));
      return
    }
    T({
      callbackCode: t,
      callbackState: s
    })
  }, [a, h, T]);
  return n.useEffect(() => (c.default.subscribe("USER_CONNECTIONS_LINK_CALLBACK", k), () => {
    c.default.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", k)
  }), [k]), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(i.ModalHeader, {
      direction: N.default.Direction.VERTICAL,
      className: C.header,
      separator: !1,
      children: [(0, s.jsx)(i.Text, {
        className: C.stepHeader,
        variant: "text-xs/bold",
        color: "header-secondary",
        children: m.default.Messages.BIDIRECTIONAL_STEP_HEADER.format({
          number: 1,
          total: 2
        })
      }), (0, s.jsxs)("div", {
        className: C.illustration,
        children: [v, " "]
      }), (0, s.jsx)(i.Heading, {
        className: C.title,
        variant: "heading-xl/extrabold",
        children: y
      }), null != j && (0, s.jsx)(i.ModalCloseButton, {
        className: C.closeButton,
        onClick: j
      })]
    }), (0, s.jsxs)(i.ModalContent, {
      className: C.body,
      paddingFix: !1,
      children: [(0, s.jsx)(i.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "header-secondary",
        children: E
      }), !t && (0, s.jsx)(i.Text, {
        tag: "p",
        variant: "text-sm/normal",
        color: "header-secondary",
        children: m.default.Messages.CONSOLE_REDIRECT_NOTICE.format({
          redirectUrl: g
        })
      })]
    }), (0, s.jsx)(i.ModalFooter, {
      className: C.footer,
      children: (0, s.jsxs)(i.Button, {
        className: C.footerButton,
        color: t ? i.Button.Colors.PRIMARY : i.Button.Colors.BRAND,
        onClick: L,
        children: [t ? m.default.Messages.RETRY : m.default.Messages.CONTINUE, (0, s.jsx)(x.default, {
          className: C.launchIcon,
          width: "16",
          height: "16"
        })]
      })
    })]
  })
}
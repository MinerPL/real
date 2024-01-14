"use strict";
n.r(t), n.d(t, {
  EmbedIFrameWithLoadingBackground: function() {
    return N
  }
}), n("222007"), n("313619"), n("654714"), n("287168"), n("956660");
var l = n("37983"),
  a = n("884691"),
  u = n("414456"),
  o = n.n(u),
  i = n("841076"),
  s = n("748820"),
  r = n("446674"),
  d = n("292687"),
  c = n("614818"),
  f = n("161778"),
  E = n("659500"),
  p = n("157945"),
  m = n("828466"),
  T = n("954016"),
  _ = n("49111"),
  S = n("165544");

function C(e) {
  let {
    url: t,
    className: n,
    style: u,
    onLoad: o,
    shouldRefocus: S,
    queryParams: C,
    allowPopups: N = !1,
    referrerPolicy: I = "origin"
  } = e, v = (0, r.useStateFromStores)([d.default], () => d.default.getWindow(_.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), O = (0, i.useMemoOne)(() => (0, s.v4)(), [t]), L = a.useRef(null), A = (0, p.default)(L, S, null == v ? window : v), h = {
    ...C,
    frame_id: O,
    platform: T.ActivityPlatform.DESKTOP
  }, [y, M] = a.useState(!1), R = f.default.theme, g = {
    ...u
  };
  return R === _.ThemeTypes.LIGHT ? g.colorScheme = "light" : g.colorScheme = "dark", a.useEffect(() => (E.ComponentDispatch.dispatch(_.ComponentActions.IFRAME_MOUNT, {
    id: O
  }), () => {
    E.ComponentDispatch.dispatch(_.ComponentActions.IFRAME_UNMOUNT, {
      id: O
    })
  }), [O]), E.ComponentDispatch.subscribe(_.ComponentActions.MANUAL_IFRAME_RESIZING, e => {
    let {
      resizing: t
    } = e;
    M(t)
  }), y && (g.pointerEvents = "none"), null != t ? (0, l.jsx)("iframe", {
    style: g,
    allow: "autoplay; encrypted-media",
    referrerPolicy: I,
    onLoad: function(e) {
      var n;
      null == o || o(e.target), L.current = e.target, A(!0), null === (n = e.target.contentWindow) || void 0 === n || n.postMessage([c.default.HELLO, h], null != t ? t : "")
    },
    sandbox: (0, m.default)({
      allowPopups: N
    }),
    className: n,
    src: "".concat(t, "?").concat(new URLSearchParams(h))
  }) : null
}

function N(e) {
  let {
    onLoad: t
  } = e, [n, u] = a.useState(!1), i = a.useCallback(e => {
    u(!0), null == t || t(e)
  }, [t]);
  return (0, l.jsxs)("div", {
    className: S.fillParent,
    children: [!n && (0, l.jsx)("div", {
      className: o(S.fillParent, S.iframePlaceholder)
    }), (0, l.jsx)("div", {
      className: o(S.fillParent, n ? void 0 : S.hiddenIframeContainer),
      children: (0, l.jsx)(C, {
        ...e,
        onLoad: i
      })
    })]
  })
}
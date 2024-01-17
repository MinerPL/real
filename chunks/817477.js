"use strict";
n.r(t), n.d(t, {
  EmbedIFrameWithLoadingBackground: function() {
    return N
  }
}), n("222007"), n("313619"), n("654714"), n("287168"), n("956660");
var l = n("37983"),
  a = n("884691"),
  u = n("414456"),
  i = n.n(u),
  o = n("841076"),
  s = n("748820"),
  r = n("446674"),
  d = n("292687"),
  c = n("614818"),
  f = n("161778"),
  E = n("659500"),
  p = n("157945"),
  m = n("828466"),
  T = n("954016"),
  S = n("49111"),
  _ = n("165544");

function C(e) {
  let {
    url: t,
    className: n,
    style: u,
    onLoad: i,
    shouldRefocus: _,
    queryParams: C,
    allowPopups: N = !1,
    referrerPolicy: I = "origin"
  } = e, O = (0, r.useStateFromStores)([d.default], () => d.default.getWindow(S.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), v = (0, o.useMemoOne)(() => (0, s.v4)(), [t]), L = a.useRef(null), A = (0, p.default)(L, _, null == O ? window : O), h = {
    ...C,
    frame_id: v,
    platform: T.ActivityPlatform.DESKTOP
  }, [y, M] = a.useState(!1), R = f.default.theme, g = {
    ...u
  };
  return R === S.ThemeTypes.LIGHT ? g.colorScheme = "light" : g.colorScheme = "dark", a.useEffect(() => (E.ComponentDispatch.dispatch(S.ComponentActions.IFRAME_MOUNT, {
    id: v
  }), () => {
    E.ComponentDispatch.dispatch(S.ComponentActions.IFRAME_UNMOUNT, {
      id: v
    })
  }), [v]), E.ComponentDispatch.subscribe(S.ComponentActions.MANUAL_IFRAME_RESIZING, e => {
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
      null == i || i(e.target), L.current = e.target, A(!0), null === (n = e.target.contentWindow) || void 0 === n || n.postMessage([c.default.HELLO, h], null != t ? t : "")
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
  } = e, [n, u] = a.useState(!1), o = a.useCallback(e => {
    u(!0), null == t || t(e)
  }, [t]);
  return (0, l.jsxs)("div", {
    className: _.fillParent,
    children: [!n && (0, l.jsx)("div", {
      className: i(_.fillParent, _.iframePlaceholder)
    }), (0, l.jsx)("div", {
      className: i(_.fillParent, n ? void 0 : _.hiddenIframeContainer),
      children: (0, l.jsx)(C, {
        ...e,
        onLoad: o
      })
    })]
  })
}
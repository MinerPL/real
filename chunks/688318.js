"use strict";
r.r(e), r.d(e, {
  default: function() {
    return E
  }
}), r("222007");
var n = r("884691"),
  i = r("446674"),
  o = r("206230"),
  u = r("91653"),
  l = r("697218"),
  a = r("471671"),
  T = r("315102"),
  c = r("53708"),
  E = t => {
    let {
      user: e,
      size: r,
      animateOnHover: E = !1,
      showPending: s = !1,
      showTryItOut: _ = !1,
      avatarDecorationOverride: S
    } = t, [d, C] = n.useState(!1), I = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), A = (0, i.useStateFromStores)([a.default], () => a.default.isFocused()), f = (0, i.useStateFromStores)([l.default], () => {
      var t;
      return null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.id
    }), v = (0, i.useStateFromStores)([l.default], () => {
      var t;
      return null === (t = l.default.getUser(null == e ? void 0 : e.id)) || void 0 === t ? void 0 : t.avatarDecoration
    }), {
      pendingAvatarDecoration: O
    } = (0, u.default)({
      isTryItOut: _
    }), N = A && (d || !I && !E), R = s && void 0 !== O && void 0 !== f && f === (null == e ? void 0 : e.id) ? O : null != v ? v : null == e ? void 0 : e.avatarDecoration, P = n.useMemo(() => (0, T.getAvatarDecorationURL)({
      avatarDecoration: void 0 !== S ? S : R,
      canAnimate: N,
      size: r
    }), [R, N, r, S]), g = n.useCallback(() => C(!0), []), U = n.useCallback(() => C(!1), []);
    return {
      avatarPlaceholderSrc: c,
      avatarDecorationSrc: P,
      isAvatarDecorationAnimating: N,
      eventHandlers: {
        onMouseEnter: g,
        onMouseLeave: U
      }
    }
  }
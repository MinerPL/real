"use strict";
n.r(t), n.d(t, {
  Avatar: function() {
    return N
  },
  AnimatedAvatar: function() {
    return D
  }
}), n("70102"), n("222007");
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("907002"),
  l = n("227645"),
  u = n("709749"),
  c = n("391010"),
  d = n("414055"),
  f = n("587974"),
  E = n("158998"),
  h = n("52904"),
  p = n("49111"),
  _ = n("573135"),
  S = n("782340"),
  m = n("881775");
let T = {
  tension: 1200,
  friction: 70
};

function g(e) {
  let {
    size: t,
    isMobile: n,
    isTyping: r,
    ...s
  } = e, a = (0, h.getAvatarSpecs)(t), o = a.status * (n && !r ? h.MOBILE_HEIGHT_RATIO : 1), l = a.status * (r ? h.TYPING_WIDTH_RATIO : 1), u = r ? (a.status * h.TYPING_WIDTH_RATIO - a.status) / 2 : 0, c = a.size - a.status - u - a.offset, d = a.size - o - a.offset;
  return (0, i.jsx)("rect", {
    x: c,
    y: d,
    width: l,
    height: o,
    fill: "transparent",
    "aria-hidden": !0,
    ...s
  })
}

function I(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    r = (0, c.getStatusSize)(e.status, t, n, i),
    s = (i ? e.size - (r.width / 2 + e.status / 2) : e.size - r.width) - e.offset;
  return {
    ...r,
    x: s,
    y: e.size - r.height - e.offset
  }
}

function C(e, t, n, r) {
  let s = I(n, r, t, !1),
    a = (0, c.getStatusBackdropOpacity)(r, e);
  if (!t) {
    let t = s.height / 2 + n.stroke,
      r = s.x + n.status / 2;
    return (0, i.jsx)("circle", {
      style: {
        opacity: a
      },
      fill: e,
      r: t,
      cx: r,
      cy: r
    })
  }
  let o = s.height + 2 * n.stroke,
    l = s.width + 2 * n.stroke,
    u = s.x - n.stroke,
    d = s.y - n.stroke;
  return (0, i.jsx)("rect", {
    fill: e,
    height: o,
    width: l,
    style: {
      opacity: a
    },
    x: u,
    y: d,
    rx: n.stroke
  })
}

function v(e) {
  let {
    status: t,
    isMobile: n,
    isTyping: i,
    size: r
  } = e, s = n && !i && t === p.StatusTypes.ONLINE, a = (0, h.getAvatarSpecs)(r);
  return {
    ... function(e, t, n) {
      let {
        size: i,
        status: r,
        stroke: s,
        offset: a
      } = e, o = n ? r * h.TYPING_WIDTH_RATIO : r, l = t ? r * h.MOBILE_HEIGHT_RATIO : r;
      return {
        avatarCutoutX: i - o + (o - r) / 2 - s - a,
        avatarCutoutY: i - l - s - a,
        avatarCutoutWidth: o + 2 * s,
        avatarCutoutHeight: l + 2 * s,
        avatarCutoutRadius: t ? (l + 2 * s) * h.CUTOUT_BORDER_RADIUS : (r + 2 * s) / 2
      }
    }(a, s, i),
    ...(0, c.getStatusValues)({
      status: t,
      size: a.status,
      isMobile: s,
      isTyping: i,
      topOffset: 2,
      leftOffset: 6
    })
  }
}

function A(e) {
  let {
    children: t,
    size: n,
    onClick: r,
    onMouseDown: s,
    onKeyDown: o,
    onContextMenu: u,
    onMouseEnter: c,
    onMouseLeave: d,
    className: p,
    tabIndex: T,
    ariaLabel: g,
    ariaHidden: I,
    status: C,
    isMobile: v = !1,
    isTyping: A = !1,
    avatarDecoration: R,
    typingOffset: N,
    specs: O
  } = e, D = {
    width: (0, h.getAvatarSize)(n),
    height: (0, h.getAvatarSize)(n)
  }, y = null == g || I ? void 0 : function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null != t ? S.default.Messages.LABEL_WITH_ONLINE_STATUS.format({
      label: e,
      status: (0, E.humanizeStatus)(t, n)
    }) : e
  }(g, C, v), P = O.size * _.DECORATION_TO_AVATAR_RATIO, L = function(e, t, n, i) {
    if (null == e) return null;
    if (i) switch (t) {
      case h.AvatarSizes.SIZE_16:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_16;
      case h.AvatarSizes.SIZE_20:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_20;
      case h.AvatarSizes.SIZE_24:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_24;
      case h.AvatarSizes.SIZE_32:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_32;
      case h.AvatarSizes.SIZE_40:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_40;
      case h.AvatarSizes.SIZE_56:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_56;
      case h.AvatarSizes.SIZE_80:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_80;
      case h.AvatarSizes.SIZE_120:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_120
    }
    if (n) switch (t) {
      case h.AvatarSizes.SIZE_16:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_16;
      case h.AvatarSizes.SIZE_20:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_20;
      case h.AvatarSizes.SIZE_24:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_24;
      case h.AvatarSizes.SIZE_32:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_32;
      case h.AvatarSizes.SIZE_40:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_40;
      case h.AvatarSizes.SIZE_56:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_56;
      case h.AvatarSizes.SIZE_80:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_80;
      case h.AvatarSizes.SIZE_120:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_120
    }
    switch (t) {
      case h.AvatarSizes.SIZE_16:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_16;
      case h.AvatarSizes.SIZE_20:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_20;
      case h.AvatarSizes.SIZE_24:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_24;
      case h.AvatarSizes.SIZE_32:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_32;
      case h.AvatarSizes.SIZE_40:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_40;
      case h.AvatarSizes.SIZE_56:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_56;
      case h.AvatarSizes.SIZE_80:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_80;
      case h.AvatarSizes.SIZE_120:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_120
    }
    return null
  }(C, n, v, A), b = null != R && (0, i.jsx)("svg", {
    width: P + N,
    height: P,
    viewBox: "0 0 ".concat(P + N, " ").concat(P),
    className: m.avatarDecoration,
    "aria-hidden": !0,
    children: (0, i.jsx)("foreignObject", {
      x: 0,
      y: 0,
      width: P,
      height: P,
      mask: null != L ? "url(#".concat(L, ")") : void 0,
      children: (0, i.jsx)("div", {
        className: m.avatarStack,
        children: (0, i.jsx)("img", {
          className: m.avatar,
          src: R,
          alt: " ",
          "aria-hidden": !0
        })
      })
    })
  });
  return null != r || null != s ? (0, i.jsxs)(l.Clickable, {
    className: a(m.wrapper, m.pointer, p),
    style: D,
    onClick: r,
    tabIndex: T,
    onContextMenu: u,
    onMouseDown: s,
    onKeyDown: o,
    onMouseEnter: null != c ? c : void 0,
    onMouseLeave: null != d ? d : void 0,
    "aria-label": y,
    "aria-hidden": I,
    children: [t, b]
  }) : (0, i.jsxs)("div", {
    className: a(m.wrapper, p),
    style: D,
    onContextMenu: null != u ? u : void 0,
    onMouseEnter: null != c ? c : void 0,
    onMouseLeave: null != d ? d : void 0,
    role: "img",
    "aria-label": y,
    "aria-hidden": I,
    children: [t, b]
  })
}

function R(e) {
  let {
    src: t,
    isSpeaking: n
  } = e;
  return (0, i.jsxs)("div", {
    className: m.avatarStack,
    children: [(0, i.jsx)("img", {
      src: null != t ? t : void 0,
      alt: " ",
      className: m.avatar,
      "aria-hidden": !0
    }), n && (0, i.jsx)("div", {
      className: m.avatarSpeaking
    })]
  })
}

function N(e) {
  let {
    src: t,
    status: n,
    size: r,
    statusColor: s,
    isMobile: o = !1,
    isTyping: l = !1,
    typingIndicatorRef: _,
    isSpeaking: S = !1,
    statusTooltip: T = !1,
    statusBackdropColor: g,
    "aria-hidden": v = !1,
    "aria-label": N
  } = e, O = n !== p.StatusTypes.UNKNOWN ? n : null, D = (0, h.getAvatarSpecs)(r), y = null != O ? Math.ceil((D.status * h.TYPING_WIDTH_RATIO - D.status) / 2) : 0, P = D.size + y, L = (0, c.useStatusFillColor)(O, s);
  return (0, i.jsx)(A, {
    ...e,
    ariaLabel: N,
    ariaHidden: v,
    status: O,
    specs: D,
    typingOffset: y,
    children: (0, i.jsxs)("svg", {
      width: P,
      height: P,
      viewBox: "0 0 ".concat(P, " ").concat(P),
      className: a(m.mask, m.svg),
      "aria-hidden": !0,
      children: [(0, i.jsx)("foreignObject", {
        x: 0,
        y: 0,
        width: D.size,
        height: D.size,
        mask: "url(#".concat(function(e, t, n, i) {
          if (null == e) return f.MaskIDs.AVATAR_DEFAULT;
          if (i) switch (t) {
            case h.AvatarSizes.SIZE_16:
              return f.MaskIDs.AVATAR_STATUS_TYPING_16;
            case h.AvatarSizes.SIZE_20:
              return f.MaskIDs.AVATAR_STATUS_TYPING_20;
            case h.AvatarSizes.SIZE_24:
              return f.MaskIDs.AVATAR_STATUS_TYPING_24;
            case h.AvatarSizes.SIZE_32:
              return f.MaskIDs.AVATAR_STATUS_TYPING_32;
            case h.AvatarSizes.SIZE_40:
              return f.MaskIDs.AVATAR_STATUS_TYPING_40;
            case h.AvatarSizes.SIZE_48:
              return f.MaskIDs.AVATAR_STATUS_TYPING_48;
            case h.AvatarSizes.SIZE_56:
              return f.MaskIDs.AVATAR_STATUS_TYPING_56;
            case h.AvatarSizes.SIZE_80:
              return f.MaskIDs.AVATAR_STATUS_TYPING_80;
            case h.AvatarSizes.SIZE_120:
              return f.MaskIDs.AVATAR_STATUS_TYPING_120
          }
          if (e === p.StatusTypes.ONLINE && n) switch (t) {
            case h.AvatarSizes.SIZE_16:
              return f.MaskIDs.AVATAR_STATUS_MOBILE_16;
            case h.AvatarSizes.SIZE_20:
              return f.MaskIDs.AVATAR_STATUS_MOBILE_20;
            case h.AvatarSizes.SIZE_24:
              return f.MaskIDs.AVATAR_STATUS_MOBILE_24;
            case h.AvatarSizes.SIZE_32:
              return f.MaskIDs.AVATAR_STATUS_MOBILE_32;
            case h.AvatarSizes.SIZE_40:
              return f.MaskIDs.AVATAR_STATUS_MOBILE_40;
            case h.AvatarSizes.SIZE_48:
              return f.MaskIDs.AVATAR_STATUS_MOBILE_48;
            case h.AvatarSizes.SIZE_56:
              return f.MaskIDs.AVATAR_STATUS_MOBILE_56;
            case h.AvatarSizes.SIZE_80:
              return f.MaskIDs.AVATAR_STATUS_MOBILE_80;
            case h.AvatarSizes.SIZE_120:
              return f.MaskIDs.AVATAR_STATUS_MOBILE_120
          }
          switch (t) {
            case h.AvatarSizes.SIZE_16:
              return f.MaskIDs.AVATAR_STATUS_ROUND_16;
            case h.AvatarSizes.SIZE_20:
              return f.MaskIDs.AVATAR_STATUS_ROUND_20;
            case h.AvatarSizes.SIZE_24:
              return f.MaskIDs.AVATAR_STATUS_ROUND_24;
            case h.AvatarSizes.SIZE_32:
              return f.MaskIDs.AVATAR_STATUS_ROUND_32;
            case h.AvatarSizes.SIZE_40:
              return f.MaskIDs.AVATAR_STATUS_ROUND_40;
            case h.AvatarSizes.SIZE_48:
              return f.MaskIDs.AVATAR_STATUS_ROUND_48;
            case h.AvatarSizes.SIZE_56:
              return f.MaskIDs.AVATAR_STATUS_ROUND_56;
            case h.AvatarSizes.SIZE_80:
              return f.MaskIDs.AVATAR_STATUS_ROUND_80;
            case h.AvatarSizes.SIZE_120:
              return f.MaskIDs.AVATAR_STATUS_ROUND_120
          }
          throw Error("getMaskId(): Unsupported type, size: ".concat(t, ", status: ").concat(e, ", isMobile: ").concat(n ? "true" : "false"))
        }(O, r, o, l), ")"),
        children: (0, i.jsx)(R, {
          src: t,
          isSpeaking: S
        })
      }), null != O ? (0, i.jsx)(d.Tooltip, {
        text: T ? (0, E.humanizeStatus)(O) : null,
        "aria-label": !1,
        position: "top",
        spacing: 5 + 1.5 * D.stroke,
        children: e => (0, i.jsxs)(i.Fragment, {
          children: [null != g && C(g, o, D, O), (0, i.jsx)("rect", {
            ...e,
            ...I(D, O, o, l),
            fill: L,
            mask: "url(#".concat((0, c.getStatusMask)(O, o, l), ")"),
            className: m.pointerEvents
          }), l ? (0, i.jsx)(u.Dots, {
            ref: _,
            dotRadius: D.status / 4,
            x: D.size - 1.375 * D.status - D.offset,
            y: D.size - D.status / 1.333 - D.offset
          }) : null]
        })
      }) : null]
    })
  })
}

function O(e) {
  let {
    fromIsMobile: t = !0,
    fromStatus: n,
    fromColor: s,
    isMobile: l = !1,
    isTyping: f = !1,
    typingIndicatorRef: p,
    isSpeaking: _ = !1,
    size: S,
    src: I,
    status: N,
    statusColor: O,
    statusTooltip: D = !1,
    statusBackdropColor: y,
    "aria-hidden": P = !1,
    "aria-label": L
  } = e, b = (0, c.useStatusFillColor)(N, O), M = r.useId(), U = r.useId(), [G] = r.useState(() => ({
    fill: s,
    ...v({
      size: S,
      status: n,
      isMobile: t,
      isTyping: !1
    })
  })), w = r.useMemo(() => ({
    fill: b,
    ...v({
      size: S,
      status: N,
      isMobile: l,
      isTyping: f
    })
  }), [b, S, N, l, f]), {
    avatarCutoutX: k,
    avatarCutoutY: x,
    avatarCutoutWidth: F,
    avatarCutoutHeight: V,
    avatarCutoutRadius: B,
    fill: H,
    ...j
  } = (0, o.useSpring)({
    immediate: !document.hasFocus(),
    config: T,
    from: G,
    to: w
  }), Y = (0, h.getAvatarSize)(S), W = (0, h.getAvatarSpecs)(S), K = W.status * h.TYPING_WIDTH_RATIO, z = W.status * h.MOBILE_HEIGHT_RATIO, q = null != N ? (W.status * h.TYPING_WIDTH_RATIO - W.status) / 2 : 0, X = W.size - W.status - q - W.offset, Q = W.size - z - W.offset, Z = W.size + Math.ceil(q);
  return (0, i.jsx)(A, {
    ...e,
    ariaLabel: L,
    ariaHidden: P,
    typingOffset: q,
    specs: W,
    children: (0, i.jsxs)("svg", {
      width: Z,
      height: Z,
      viewBox: "0 0 ".concat(Z, " ").concat(Z),
      className: a(m.mask, m.svg),
      "aria-hidden": !0,
      children: [(0, i.jsxs)("mask", {
        id: M,
        width: Y,
        height: Y,
        children: [(0, i.jsx)("circle", {
          cx: Y / 2,
          cy: Y / 2,
          r: Y / 2,
          fill: "white"
        }), (0, i.jsx)(o.animated.rect, {
          color: "black",
          x: k,
          y: x,
          width: F,
          height: V,
          rx: B,
          ry: B
        })]
      }), (0, i.jsx)("foreignObject", {
        className: m.foreignObject,
        x: 0,
        y: 0,
        width: Y,
        height: Y,
        mask: "url(#".concat(M, ")"),
        children: (0, i.jsx)(R, {
          src: I,
          isSpeaking: _
        })
      }), (0, i.jsx)(d.Tooltip, {
        text: D ? (0, E.humanizeStatus)(N) : null,
        "aria-label": !1,
        position: "top",
        spacing: function(e, t, n) {
          let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          return 5 - (n && !i ? 0 : .5 * e) + 1.5 * t
        }(W.status, W.stroke, l, f),
        children: e => (0, i.jsxs)(i.Fragment, {
          children: [null != y && C(y, l, W, N), (0, i.jsxs)("svg", {
            x: X,
            y: Q,
            width: K,
            height: z,
            viewBox: "0 0 ".concat(K, " ").concat(z),
            className: D ? m.cursorDefault : void 0,
            children: [(0, c.renderStatusMask)(j, W.status, U), (0, i.jsx)(o.animated.rect, {
              fill: H,
              width: K,
              height: z,
              mask: "url(#".concat(U, ")")
            }), (0, i.jsx)(u.Dots, {
              ref: p,
              dotRadius: W.status / 4,
              x: .15 * K,
              y: .5 * z,
              hide: !f
            })]
          }), (0, i.jsx)(g, {
            size: S,
            isMobile: l,
            isTyping: f,
            className: m.pointerEvents,
            ...e
          })]
        })
      })]
    })
  })
}
let D = r.memo(function(e) {
  var t, n, s, a, o;
  let {
    statusColor: l,
    status: u,
    ...d
  } = e, {
    isMobile: f = !1,
    isTyping: E = !1
  } = d, h = r.useRef(u), _ = r.useRef(f), S = (0, c.useStatusFillColor)(u, l), m = r.useRef(S), T = r.useRef(!1);
  let g = T.current || (t = E, n = u, s = h.current, a = f, o = _.current, null != s && null != n && (!!t || n !== s || n === p.StatusTypes.ONLINE && a !== o || !1));
  return r.useLayoutEffect(() => {
    T.current = g, h.current = u, _.current = f, m.current = S
  }, [u, f, S, g]), null != u && null != h.current && g ? (0, i.jsx)(O, {
    ...d,
    status: u,
    statusColor: S,
    fromStatus: h.current,
    fromIsMobile: _.current,
    fromColor: m.current
  }) : (0, i.jsx)(N, {
    ...d,
    status: u,
    statusColor: S
  })
})
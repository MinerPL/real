"use strict";
let r;
n.r(t), n.d(t, {
  useOverlayPosition: function() {
    return T
  },
  useOverlayTrigger: function() {
    return O
  },
  OverlayContainer: function() {
    return H
  },
  DismissButton: function() {
    return ek
  },
  ariaHideOutside: function() {
    return eR
  },
  usePopover: function() {
    return eM
  },
  useModalOverlay: function() {
    return eN
  },
  Overlay: function() {
    return eI
  },
  useOverlayFocusContain: function() {
    return eA
  }
}), n("222007"), n("781738"), n("424973"), n("70102");
var o = n("884691"),
  a = n("290895"),
  i = n("181551"),
  s = n("780095"),
  c = n("495912"),
  l = n("817736"),
  u = n("46397"),
  d = n("678760");
let p = {
    top: "top",
    bottom: "top",
    left: "left",
    right: "left"
  },
  f = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left"
  },
  m = {
    top: "left",
    left: "top"
  },
  h = {
    top: "height",
    left: "width"
  },
  g = {
    width: "totalWidth",
    height: "totalHeight"
  },
  v = {},
  y = "undefined" != typeof document && window.visualViewport;

function b(e, t, n, r, o) {
  let a = document.scrollingElement || document.documentElement,
    i = "hidden" === window.getComputedStyle(a).overflow ? 0 : r.scroll[e],
    s = r[h[e]],
    c = t - o - i,
    l = t + o - i + n;
  return c < 0 ? -c : l > s ? Math.max(s - l, -c) : 0
}

function x(e) {
  if (v[e]) return v[e];
  let [t, n] = e.split(" "), r = p[t] || "right", o = m[r];
  !p[n] && (n = "center");
  let a = h[r],
    i = h[o];
  return v[e] = {
    placement: t,
    crossPlacement: n,
    axis: r,
    crossAxis: o,
    size: a,
    crossSize: i
  }, v[e]
}

function S(e, t, n, r, o, i, s, c, l, u) {
  let {
    placement: d,
    crossPlacement: p,
    axis: m,
    crossAxis: h,
    size: v,
    crossSize: y
  } = r, b = {};
  b[h] = e[h], "center" === p ? b[h] += (e[y] - n[y]) / 2 : p !== h && (b[h] += e[y] - n[y]), b[h] += i;
  let x = e[h] - n[y] + l + u,
    S = e[h] + e[y] - l - u;
  if (b[h] = (0, a.clamp)(b[h], x, S), d === m) {
    let n = c ? s[v] : t[g[v]];
    b[f[m]] = Math.floor(n - e[m] + o)
  } else b[m] = Math.floor(e[m] + e[v] + o);
  return b
}

function w(e, t, n, r, o, a) {
  let {
    placement: i,
    axis: s,
    size: c
  } = a;
  return i === s ? Math.max(0, n[s] - e[s] - e.scroll[s] + t[s] - r[s] - r[f[s]] - o) : Math.max(0, e[c] + e[s] + e.scroll[s] - t[s] - n[s] - n[c] - r[s] - r[f[s]] - o)
}

function D(e) {
  let {
    top: t,
    left: n,
    width: r,
    height: o
  } = e.getBoundingClientRect(), {
    scrollTop: a,
    scrollLeft: i,
    clientTop: s,
    clientLeft: c
  } = document.documentElement;
  return {
    top: t + a - s,
    left: n + i - c,
    width: r,
    height: o
  }
}

function C(e, t) {
  let n, r = window.getComputedStyle(e);
  if ("fixed" === r.position) {
    let {
      top: t,
      left: r,
      width: o,
      height: a
    } = e.getBoundingClientRect();
    n = {
      top: t,
      left: r,
      width: o,
      height: a
    }
  } else {
    n = D(e);
    let r = D(t),
      o = window.getComputedStyle(t);
    r.top += (parseInt(o.borderTopWidth, 10) || 0) - t.scrollTop, r.left += (parseInt(o.borderLeftWidth, 10) || 0) - t.scrollLeft, n.top -= r.top, n.left -= r.left
  }
  return n.top -= parseInt(r.marginTop, 10) || 0, n.left -= parseInt(r.marginLeft, 10) || 0, n
}

function P(e) {
  let t = window.getComputedStyle(e);
  return "none" !== t.transform || /transform|perspective/.test(t.willChange) || "none" !== t.filter || "paint" === t.contain || "backdropFilter" in t && "none" !== t.backdropFilter || "WebkitBackdropFilter" in t && "none" !== t.WebkitBackdropFilter
}
let k = new WeakMap,
  E = "undefined" != typeof document && window.visualViewport;

function T(e) {
  let {
    direction: t
  } = (0, i.useLocale)(), {
    arrowSize: n = 0,
    targetRef: r,
    overlayRef: s,
    scrollRef: c = s,
    placement: l = "bottom",
    containerPadding: u = 12,
    shouldFlip: d = !0,
    boundaryElement: p = "undefined" != typeof document ? document.body : null,
    offset: m = 0,
    crossOffset: h = 0,
    shouldUpdatePosition: g = !0,
    isOpen: v = !0,
    onClose: T,
    maxHeight: R,
    arrowBoundaryOffset: M = 0
  } = e, [O, I] = (0, o.useState)({
    position: {},
    arrowOffsetLeft: void 0,
    arrowOffsetTop: void 0,
    maxHeight: void 0,
    placement: void 0
  }), A = [g, l, s.current, r.current, c.current, u, d, p, m, h, v, t, R, M, n], N = (0, o.useCallback)(() => {
    if (!1 === g || !v || !s.current || !r.current || !c.current || !p) return;
    let e = function(e) {
      var t, n;
      let r, {
          placement: o,
          targetNode: i,
          overlayNode: s,
          scrollNode: c,
          padding: l,
          shouldFlip: u,
          boundaryElement: d,
          offset: p,
          crossOffset: m,
          maxHeight: h,
          arrowSize: g = 0,
          arrowBoundaryOffset: v = 0
        } = e,
        k = s instanceof HTMLElement ? function(e) {
          let t = e.offsetParent;
          if (t && t === document.body && "static" === window.getComputedStyle(t).position && !P(t) && (t = document.documentElement), null == t)
            for (t = e.parentElement; t && !P(t);) t = t.parentElement;
          return t || document.documentElement
        }(s) : document.documentElement,
        E = k === document.documentElement,
        T = window.getComputedStyle(k).position,
        R = E ? D(i) : C(i, k);
      if (!E) {
        let {
          marginTop: e,
          marginLeft: t
        } = window.getComputedStyle(i);
        R.top += parseInt(e, 10) || 0, R.left += parseInt(t, 10) || 0
      }
      let M = D(s);
      let O = (t = s, {
        top: parseInt((r = window.getComputedStyle(t)).marginTop, 10) || 0,
        bottom: parseInt(r.marginBottom, 10) || 0,
        left: parseInt(r.marginLeft, 10) || 0,
        right: parseInt(r.marginRight, 10) || 0
      });
      return M.width += O.left + O.right, M.height += O.top + O.bottom,
        function(e, t, n, r, o, i, s, c, l, u, d, p, m, h, g) {
          var v, y, D, C, P, k;
          let E = x(e),
            {
              size: T,
              crossAxis: R,
              crossSize: M,
              placement: O,
              crossPlacement: I
            } = E,
            A = S(t, c, n, E, u, d, l, p, h, g),
            N = u,
            L = w(c, l, t, o, i + u, E);
          if (s && r[T] > L) {
            let e = x("".concat(f[O], " ").concat(I)),
              r = S(t, c, n, e, u, d, l, p, h, g);
            w(c, l, t, o, i + u, e) > L && (E = e, A = r, N = u)
          }
          let j = b(R, A[R], n[M], c, i);
          A[R] += j;
          let F = (v = A, y = c, D = l, C = t, P = o, k = i, null != v.top ? Math.max(0, y.height + y.top + y.scroll.top - (D.top + v.top) - (P.top + P.bottom + k)) : Math.max(0, C.top + D.top - (y.top + y.scroll.top) - (P.top + P.bottom + k)));
          m && m < F && (F = m), n.height = Math.min(n.height, F), j = b(R, (A = S(t, c, n, E, N, d, l, p, h, g))[R], n[M], c, i), A[R] += j;
          let K = {},
            _ = t[R] + .5 * t[M] - n[R],
            z = h / 2 + g,
            V = n[M] - h / 2 - g,
            B = t[R] - n[R] + h / 2,
            U = t[R] + t[M] - n[R] - h / 2,
            H = (0, a.clamp)(_, B, U);
          return K[R] = (0, a.clamp)(H, z, V), {
            position: A,
            maxHeight: F,
            arrowOffsetLeft: K.left,
            arrowOffsetTop: K.top,
            placement: E.placement
          }
        }(o, R, M, {
          top: (n = c).scrollTop,
          left: n.scrollLeft,
          width: n.scrollWidth,
          height: n.scrollHeight
        }, O, l, u, function(e) {
          let t = 0,
            n = 0,
            r = 0,
            o = 0,
            a = 0,
            i = 0,
            s = {};
          if ("BODY" === e.tagName) {
            var c, l;
            let a = document.documentElement;
            r = a.clientWidth, o = a.clientHeight, t = null !== (c = null == y ? void 0 : y.width) && void 0 !== c ? c : r, n = null !== (l = null == y ? void 0 : y.height) && void 0 !== l ? l : o, s.top = a.scrollTop || e.scrollTop, s.left = a.scrollLeft || e.scrollLeft
          } else({
            width: t,
            height: n,
            top: a,
            left: i
          } = D(e)), s.top = e.scrollTop, s.left = e.scrollLeft, r = t, o = n;
          return {
            width: t,
            height: n,
            totalWidth: r,
            totalHeight: o,
            scroll: s,
            top: a,
            left: i
          }
        }(d), "BODY" === d.tagName ? D(k) : C(k, d), p, m, !!T && "static" !== T, h, g, v)
    }({
      placement: function(e, t) {
        return "rtl" === t ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right")
      }(l, t),
      overlayNode: s.current,
      targetNode: r.current,
      scrollNode: c.current,
      padding: u,
      shouldFlip: d,
      boundaryElement: p,
      offset: m,
      crossOffset: h,
      maxHeight: R,
      arrowSize: n,
      arrowBoundaryOffset: M
    });
    Object.keys(e.position).forEach(t => s.current.style[t] = e.position[t] + "px"), s.current.style.maxHeight = null != e.maxHeight ? e.maxHeight + "px" : void 0, I(e)
  }, A);
  (0, a.useLayoutEffect)(N, A),
  function(e) {
    (0, a.useLayoutEffect)(() => (window.addEventListener("resize", e, !1), () => {
      window.removeEventListener("resize", e, !1)
    }), [e])
  }(N), (0, a.useResizeObserver)({
    ref: s,
    onResize: N
  });
  let L = (0, o.useRef)(!1);
  (0, a.useLayoutEffect)(() => {
    let e;
    let t = () => {
      L.current = !0, clearTimeout(e), e = setTimeout(() => {
        L.current = !1
      }, 500), N()
    };
    return null == E || E.addEventListener("resize", t), null == E || E.addEventListener("scroll", t), () => {
      null == E || E.removeEventListener("resize", t), null == E || E.removeEventListener("scroll", t)
    }
  }, [N]);
  let j = (0, o.useCallback)(() => {
    !L.current && T()
  }, [T, L]);
  return ! function(e) {
    let {
      triggerRef: t,
      isOpen: n,
      onClose: r
    } = e;
    (0, o.useEffect)(() => {
      if (!n || null === r) return;
      let e = e => {
        let n = e.target;
        if (!t.current || n instanceof Node && !n.contains(t.current)) return;
        let o = r || k.get(t.current);
        o && o()
      };
      return window.addEventListener("scroll", e, !0), () => {
        window.removeEventListener("scroll", e, !0)
      }
    }, [n, r, t])
  }({
    triggerRef: r,
    isOpen: v,
    onClose: T && j
  }), {
    overlayProps: {
      style: {
        position: "absolute",
        zIndex: 1e5,
        ...O.position,
        maxHeight: O.maxHeight
      }
    },
    placement: O.placement,
    arrowProps: {
      "aria-hidden": "true",
      role: "presentation",
      style: {
        left: O.arrowOffsetLeft,
        top: O.arrowOffsetTop
      }
    },
    updatePosition: N
  }
}
let R = [];

function M(e, t) {
  let {
    onClose: n,
    shouldCloseOnBlur: r,
    isOpen: a,
    isDismissable: i = !1,
    isKeyboardDismissDisabled: l = !1,
    shouldCloseOnInteractOutside: u
  } = e;
  (0, o.useEffect)(() => (a && R.push(t), () => {
    let e = R.indexOf(t);
    e >= 0 && R.splice(e, 1)
  }), [a, t]);
  let d = () => {
    R[R.length - 1] === t && n && n()
  };
  (0, c.useInteractOutside)({
    ref: t,
    onInteractOutside: i ? e => {
      (!u || u(e.target)) && (R[R.length - 1] === t && (e.stopPropagation(), e.preventDefault()), d())
    } : null,
    onInteractOutsideStart: e => {
      (!u || u(e.target)) && R[R.length - 1] === t && (e.stopPropagation(), e.preventDefault())
    }
  });
  let {
    focusWithinProps: p
  } = (0, c.useFocusWithin)({
    isDisabled: !r,
    onBlurWithin: e => {
      !(!e.relatedTarget || (0, s.isElementInChildOfActiveScope)(e.relatedTarget)) && (!u || u(e.relatedTarget)) && n()
    }
  });
  return {
    overlayProps: {
      onKeyDown: e => {
        "Escape" === e.key && !l && (e.stopPropagation(), e.preventDefault(), d())
      },
      ...p
    },
    underlayProps: {
      onPointerDown: e => {
        e.target === e.currentTarget && e.preventDefault()
      }
    }
  }
}

function O(e, t, n) {
  let r, {
      type: i
    } = e,
    {
      isOpen: s
    } = t;
  (0, o.useEffect)(() => {
    n && n.current && k.set(n.current, t.close)
  });
  "menu" === i ? r = !0 : "listbox" === i && (r = "listbox");
  let c = (0, a.useId)();
  return {
    triggerProps: {
      "aria-haspopup": r,
      "aria-expanded": s,
      "aria-controls": s ? c : null,
      onPress: t.toggle
    },
    overlayProps: {
      id: c
    }
  }
}
let I = "undefined" != typeof document && window.visualViewport,
  A = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
  N = 0;

function L() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    {
      isDisabled: t
    } = e;
  (0, a.useLayoutEffect)(() => {
    if (!t) return 1 == ++N && (r = (0, a.isIOS)() ? function() {
      let e;
      let t = 0,
        n = window.pageXOffset,
        r = window.pageYOffset,
        o = (0, a.chain)(j(document.documentElement, "paddingRight", "".concat(window.innerWidth - document.documentElement.clientWidth, "px")), j(document.documentElement, "overflow", "hidden"), j(document.body, "marginTop", "-".concat(r, "px")));
      window.scrollTo(0, 0);
      let i = (0, a.chain)(F(document, "touchstart", n => {
        ((e = (0, a.getScrollParent)(n.target)) !== document.documentElement || e !== document.body) && (t = n.changedTouches[0].pageY)
      }, {
        passive: !1,
        capture: !0
      }), F(document, "touchmove", n => {
        if (!e || e === document.documentElement || e === document.body) {
          n.preventDefault();
          return
        }
        let r = n.changedTouches[0].pageY,
          o = e.scrollTop,
          a = e.scrollHeight - e.clientHeight;
        0 !== a && ((o <= 0 && r > t || o >= a && r < t) && n.preventDefault(), t = r)
      }, {
        passive: !1,
        capture: !0
      }), F(document, "touchend", e => {
        let t = e.target;
        _(t) && t !== document.activeElement && (e.preventDefault(), t.style.transform = "translateY(-2000px)", t.focus(), requestAnimationFrame(() => {
          t.style.transform = ""
        }))
      }, {
        passive: !1,
        capture: !0
      }), F(document, "focus", e => {
        let t = e.target;
        _(t) && (t.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
          t.style.transform = "", I && (I.height < window.innerHeight ? requestAnimationFrame(() => {
            K(t)
          }) : I.addEventListener("resize", () => K(t), {
            once: !0
          }))
        }))
      }, !0), F(window, "scroll", () => {
        window.scrollTo(0, 0)
      }));
      return () => {
        o(), i(), window.scrollTo(n, r)
      }
    }() : function() {
      return (0, a.chain)(j(document.documentElement, "paddingRight", "".concat(window.innerWidth - document.documentElement.clientWidth, "px")), j(document.documentElement, "overflow", "hidden"))
    }()), () => {
      0 == --N && r()
    }
  }, [t])
}

function j(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r
  }
}

function F(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r)
  }
}

function K(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t;) {
    let t = (0, a.getScrollParent)(e);
    if (t !== document.documentElement && t !== document.body && t !== e) {
      let n = t.getBoundingClientRect().top,
        r = e.getBoundingClientRect().top;
      r > n + e.clientHeight && (t.scrollTop += r - n)
    }
    e = t.parentElement
  }
}

function _(e) {
  return e instanceof HTMLInputElement && !A.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable
}
let z = o.createContext(null);

function V(e) {
  let {
    children: t
  } = e, n = (0, o.useContext)(z), [r, a] = (0, o.useState)(0), i = (0, o.useMemo)(() => ({
    parent: n,
    modalCount: r,
    addModal() {
      a(e => e + 1), n && n.addModal()
    },
    removeModal() {
      a(e => e - 1), n && n.removeModal()
    }
  }), [n, r]);
  return o.createElement(z.Provider, {
    value: i
  }, t)
}

function B(e) {
  let t;
  let {
    modalProviderProps: n
  } = {
    modalProviderProps: {
      "aria-hidden": !!(t = (0, o.useContext)(z)) && t.modalCount > 0 || null
    }
  };
  return o.createElement("div", {
    "data-overlay-container": !0,
    ...e,
    ...n
  })
}

function U(e) {
  return o.createElement(V, null, o.createElement(B, e))
}

function H(e) {
  let t = (0, u.useIsSSR)(),
    {
      portalContainer: n = t ? null : document.body,
      ...r
    } = e;
  if (o.useEffect(() => {
      if (null == n ? void 0 : n.closest("[data-overlay-container]")) throw Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")
    }, [n]), !n) return null;
  let a = o.createElement(U, r);
  return l.createPortal(a, n)
}
var G = {},
  W = {},
  q = {},
  Z = {},
  Y = {},
  X = {},
  J = {},
  $ = {},
  Q = {},
  ee = {},
  et = {},
  en = {},
  er = {},
  eo = {},
  ea = {},
  ei = {},
  es = {},
  ec = {},
  el = {},
  eu = {},
  ed = {},
  ep = {},
  ef = {},
  em = {},
  eh = {},
  eg = {},
  ev = {},
  ey = {},
  eb = {},
  ex = {},
  eS = {},
  ew = {},
  eD = {},
  eC = {},
  eP = {};

function ek(e) {
  var t;
  let {
    onDismiss: n,
    ...r
  } = e;
  let s = (0, i.useLocalizedStringFormatter)((t = G) && t.__esModule ? t.default : t),
    c = (0, a.useLabels)(r, s.format("dismiss"));
  return o.createElement(d.VisuallyHidden, null, o.createElement("button", {
    ...c,
    tabIndex: -1,
    onClick: () => {
      n && n()
    }
  }))
}
G = {
  "ar-AE": W = {
    dismiss: "تجاهل"
  },
  "bg-BG": q = {
    dismiss: "Отхвърляне"
  },
  "cs-CZ": Z = {
    dismiss: "Odstranit"
  },
  "da-DK": Y = {
    dismiss: "Luk"
  },
  "de-DE": X = {
    dismiss: "Schlie\xdfen"
  },
  "el-GR": J = {
    dismiss: "Απόρριψη"
  },
  "en-US": $ = {
    dismiss: "Dismiss"
  },
  "es-ES": Q = {
    dismiss: "Descartar"
  },
  "et-EE": ee = {
    dismiss: "L\xf5peta"
  },
  "fi-FI": et = {
    dismiss: "Hylk\xe4\xe4"
  },
  "fr-FR": en = {
    dismiss: "Rejeter"
  },
  "he-IL": er = {
    dismiss: "התעלם"
  },
  "hr-HR": eo = {
    dismiss: "Odbaci"
  },
  "hu-HU": ea = {
    dismiss: "Elutas\xedt\xe1s"
  },
  "it-IT": ei = {
    dismiss: "Ignora"
  },
  "ja-JP": es = {
    dismiss: "閉じる"
  },
  "ko-KR": ec = {
    dismiss: "무시"
  },
  "lt-LT": el = {
    dismiss: "Atmesti"
  },
  "lv-LV": eu = {
    dismiss: "Nerādīt"
  },
  "nb-NO": ed = {
    dismiss: "Lukk"
  },
  "nl-NL": ep = {
    dismiss: "Negeren"
  },
  "pl-PL": ef = {
    dismiss: "Zignoruj"
  },
  "pt-BR": em = {
    dismiss: "Descartar"
  },
  "pt-PT": eh = {
    dismiss: "Dispensar"
  },
  "ro-RO": eg = {
    dismiss: "Revocare"
  },
  "ru-RU": ev = {
    dismiss: "Пропустить"
  },
  "sk-SK": ey = {
    dismiss: "Zrušiť"
  },
  "sl-SI": eb = {
    dismiss: "Opusti"
  },
  "sr-SP": ex = {
    dismiss: "Odbaci"
  },
  "sv-SE": eS = {
    dismiss: "Avvisa"
  },
  "tr-TR": ew = {
    dismiss: "Kapat"
  },
  "uk-UA": eD = {
    dismiss: "Скасувати"
  },
  "zh-CN": eC = {
    dismiss: "取消"
  },
  "zh-TW": eP = {
    dismiss: "關閉"
  }
};
let eE = new WeakMap,
  eT = [];

function eR(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.body,
    n = new Set(e),
    r = new Set,
    o = e => {
      for (let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) n.add(t);
      let t = e => {
          if (n.has(e) || r.has(e.parentElement) && "row" !== e.parentElement.getAttribute("role")) return NodeFilter.FILTER_REJECT;
          for (let t of n)
            if (e.contains(t)) return NodeFilter.FILTER_SKIP;
          return NodeFilter.FILTER_ACCEPT
        },
        o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
          acceptNode: t
        }),
        i = t(e);
      if (i === NodeFilter.FILTER_ACCEPT && a(e), i !== NodeFilter.FILTER_REJECT) {
        let e = o.nextNode();
        for (; null != e;) a(e), e = o.nextNode()
      }
    },
    a = e => {
      var t;
      let n = null !== (t = eE.get(e)) && void 0 !== t ? t : 0;
      ("true" !== e.getAttribute("aria-hidden") || 0 !== n) && (0 === n && e.setAttribute("aria-hidden", "true"), r.add(e), eE.set(e, n + 1))
    };
  eT.length && eT[eT.length - 1].disconnect(), o(t);
  let i = new MutationObserver(e => {
    for (let t of e)
      if ("childList" === t.type && 0 !== t.addedNodes.length && ![...n, ...r].some(e => e.contains(t.target))) {
        for (let e of t.removedNodes) e instanceof Element && (n.delete(e), r.delete(e));
        for (let e of t.addedNodes)(e instanceof HTMLElement || e instanceof SVGElement) && ("true" === e.dataset.liveAnnouncer || "true" === e.dataset.reactAriaTopLayer) ? n.add(e) : e instanceof Element && o(e)
      }
  });
  i.observe(t, {
    childList: !0,
    subtree: !0
  });
  let s = {
    observe() {
      i.observe(t, {
        childList: !0,
        subtree: !0
      })
    },
    disconnect() {
      i.disconnect()
    }
  };
  return eT.push(s), () => {
    for (let e of (i.disconnect(), r)) {
      let t = eE.get(e);
      1 === t ? (e.removeAttribute("aria-hidden"), eE.delete(e)) : eE.set(e, t - 1)
    }
    s === eT[eT.length - 1] ? (eT.pop(), eT.length && eT[eT.length - 1].observe()) : eT.splice(eT.indexOf(s), 1)
  }
}

function eM(e, t) {
  let {
    triggerRef: n,
    popoverRef: r,
    isNonModal: o,
    isKeyboardDismissDisabled: i,
    ...s
  } = e, {
    overlayProps: c,
    underlayProps: l
  } = M({
    isOpen: t.isOpen,
    onClose: t.close,
    shouldCloseOnBlur: !0,
    isDismissable: !o,
    isKeyboardDismissDisabled: i
  }, r), {
    overlayProps: u,
    arrowProps: d,
    placement: p
  } = T({
    ...s,
    targetRef: n,
    overlayRef: r,
    isOpen: t.isOpen,
    onClose: null
  });
  return L({
    isDisabled: o
  }), (0, a.useLayoutEffect)(() => {
    if (t.isOpen && !o && r.current) return eR([r.current])
  }, [o, t.isOpen, r]), {
    popoverProps: (0, a.mergeProps)(c, u),
    arrowProps: d,
    underlayProps: l,
    placement: p
  }
}
let eO = o.createContext(null);

function eI(e) {
  let t, n = (0, u.useIsSSR)(),
    {
      portalContainer: r = n ? null : document.body,
      isExiting: a
    } = e,
    [i, c] = (0, o.useState)(!1),
    d = (0, o.useMemo)(() => ({
      contain: i,
      setContain: c
    }), [i, c]);
  return r ? (t = e.disableFocusManagement ? o.createElement(eO.Provider, {
    value: d
  }, e.children) : o.createElement(eO.Provider, {
    value: d
  }, o.createElement(s.FocusScope, {
    restoreFocus: !0,
    contain: i && !a
  }, e.children)), l.createPortal(t, r)) : null
}

function eA() {
  let e = (0, o.useContext)(eO),
    t = null == e ? void 0 : e.setContain;
  (0, a.useLayoutEffect)(() => {
    null == t || t(!0)
  }, [t])
}

function eN(e, t, n) {
  let {
    overlayProps: r,
    underlayProps: i
  } = M({
    ...e,
    isOpen: t.isOpen,
    onClose: t.close
  }, n);
  return L({
    isDisabled: !t.isOpen
  }), eA(), (0, o.useEffect)(() => {
    if (t.isOpen) return eR([n.current])
  }, [t.isOpen, n]), {
    modalProps: (0, a.mergeProps)(r),
    underlayProps: i
  }
}
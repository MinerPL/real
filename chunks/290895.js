"use strict";
n.r(t), n.d(t, {
  useId: function() {
    return u
  },
  useSlotId: function() {
    return d
  },
  chain: function() {
    return p
  },
  mergeProps: function() {
    return f
  },
  mergeRefs: function() {
    return m
  },
  filterDOMProps: function() {
    return y
  },
  focusWithoutScrolling: function() {
    return b
  },
  runAfterTransition: function() {
    return C
  },
  useGlobalListeners: function() {
    return P
  },
  useLabels: function() {
    return k
  },
  useObjectRef: function() {
    return E
  },
  useUpdateEffect: function() {
    return T
  },
  useLayoutEffect: function() {
    return s
  },
  useResizeObserver: function() {
    return R
  },
  useSyncRef: function() {
    return M
  },
  getScrollParent: function() {
    return O
  },
  isScrollable: function() {
    return I
  },
  useViewportSize: function() {
    return N
  },
  useDescription: function() {
    return K
  },
  isMac: function() {
    return V
  },
  isIPhone: function() {
    return B
  },
  isIOS: function() {
    return U
  },
  isAppleDevice: function() {
    return H
  },
  isWebKit: function() {
    return G
  },
  isAndroid: function() {
    return W
  },
  useEvent: function() {
    return q
  },
  scrollIntoView: function() {
    return Z
  },
  scrollIntoViewport: function() {
    return X
  },
  clamp: function() {
    return r.clamp
  },
  snapValueToStep: function() {
    return r.snapValueToStep
  },
  isVirtualClick: function() {
    return J
  },
  isVirtualPointerEvent: function() {
    return $
  },
  useEffectEvent: function() {
    return c
  },
  useDeepMemo: function() {
    return Q
  },
  useFormReset: function() {
    return ee
  }
}), n("222007"), n("424973");
var r = n("679750"),
  o = n("884691"),
  a = n("46397"),
  i = n("38736");
let s = "undefined" != typeof document ? o.useLayoutEffect : () => {};

function c(e) {
  let t = (0, o.useRef)(null);
  return s(() => {
    t.current = e
  }, [e]), (0, o.useCallback)(function() {
    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    let o = t.current;
    return o(...n)
  }, [])
}
let l = new Map;

function u(e) {
  let [t, n] = (0, o.useState)(e), r = (0, o.useRef)(null), i = (0, a.useSSRSafeId)(t), c = (0, o.useCallback)(e => {
    r.current = e
  }, []);
  return l.set(i, c), s(() => () => {
    l.delete(i)
  }, [i]), (0, o.useEffect)(() => {
    let e = r.current;
    e && (r.current = null, n(e))
  }), i
}

function d() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
    t = u(),
    [n, r] = function(e) {
      let [t, n] = (0, o.useState)(e), r = (0, o.useRef)(null), a = c(() => {
        let e = r.current.next();
        if (e.done) {
          r.current = null;
          return
        }
        t === e.value ? a() : n(e.value)
      });
      s(() => {
        r.current && a()
      });
      let i = c(e => {
        r.current = e(t), a()
      });
      return [t, i]
    }(t),
    a = (0, o.useCallback)(() => {
      r(function*() {
        yield t, yield document.getElementById(t) ? t : void 0
      })
    }, [t, r]);
  return s(a, [t, a, ...e]), n
}

function p() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return function() {
    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    for (let e of t) "function" == typeof e && e(...n)
  }
}

function f() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  let r = {
    ...t[0]
  };
  for (let e = 1; e < t.length; e++) {
    let n = t[e];
    for (let e in n) {
      let t = r[e],
        o = n[e];
      "function" == typeof t && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? r[e] = p(t, o) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof t && "string" == typeof o ? r[e] = (0, i.default)(t, o) : "id" === e && t && o ? r.id = function(e, t) {
        if (e === t) return e;
        let n = l.get(e);
        if (n) return n(t), t;
        let r = l.get(t);
        return r ? (r(e), e) : t
      }(t, o) : r[e] = void 0 !== o ? o : t
    }
  }
  return r
}

function m() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return 1 === t.length ? t[0] : e => {
    for (let n of t) "function" == typeof n ? n(e) : null != n && (n.current = e)
  }
}
let h = new Set(["id"]),
  g = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
  v = /^(data-.*)$/;

function y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    {
      labelable: n,
      propNames: r
    } = t,
    o = {};
  for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (h.has(t) || n && g.has(t) || (null == r ? void 0 : r.has(t)) || v.test(t)) && (o[t] = e[t]);
  return o
}

function b(e) {
  if (function() {
      if (null == x) {
        x = !1;
        try {
          document.createElement("div").focus({
            get preventScroll() {
              return x = !0, !0
            }
          })
        } catch (e) {}
      }
      return x
    }()) e.focus({
    preventScroll: !0
  });
  else {
    let t = function(e) {
      for (var t = e.parentNode, n = [], r = document.scrollingElement || document.documentElement; t instanceof HTMLElement && t !== r;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
        element: t,
        scrollTop: t.scrollTop,
        scrollLeft: t.scrollLeft
      }), t = t.parentNode;
      return r instanceof HTMLElement && n.push({
        element: r,
        scrollTop: r.scrollTop,
        scrollLeft: r.scrollLeft
      }), n
    }(e);
    e.focus(),
      function(e) {
        for (let {
            element: t,
            scrollTop: n,
            scrollLeft: r
          }
          of e) t.scrollTop = n, t.scrollLeft = r
      }(t)
  }
}
let x = null,
  S = new Map,
  w = new Set;

function D() {
  if ("undefined" == typeof window) return;
  let e = t => {
    let n = S.get(t.target);
    if (n && (n.delete(t.propertyName), 0 === n.size && (t.target.removeEventListener("transitioncancel", e), S.delete(t.target)), 0 === S.size)) {
      for (let e of w) e();
      w.clear()
    }
  };
  document.body.addEventListener("transitionrun", t => {
    let n = S.get(t.target);
    !n && (n = new Set, S.set(t.target, n), t.target.addEventListener("transitioncancel", e)), n.add(t.propertyName)
  }), document.body.addEventListener("transitionend", e)
}

function C(e) {
  requestAnimationFrame(() => {
    0 === S.size ? e() : w.add(e)
  })
}

function P() {
  let e = (0, o.useRef)(new Map),
    t = (0, o.useCallback)((t, n, r, o) => {
      let a = (null == o ? void 0 : o.once) ? function() {
        for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
        e.current.delete(r), r(...n)
      } : r;
      e.current.set(r, {
        type: n,
        eventTarget: t,
        fn: a,
        options: o
      }), t.addEventListener(n, r, o)
    }, []),
    n = (0, o.useCallback)((t, n, r, o) => {
      var a;
      let i = (null === (a = e.current.get(r)) || void 0 === a ? void 0 : a.fn) || r;
      t.removeEventListener(n, i, o), e.current.delete(r)
    }, []),
    r = (0, o.useCallback)(() => {
      e.current.forEach((e, t) => {
        n(e.eventTarget, e.type, t, e.options)
      })
    }, [n]);
  return (0, o.useEffect)(() => r, [r]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  }
}

function k(e, t) {
  let {
    id: n,
    "aria-label": r,
    "aria-labelledby": o
  } = e;
  return n = u(n), o && r ? o = [...new Set([n, ...o.trim().split(/\s+/)])].join(" ") : o && (o = o.trim().split(/\s+/).join(" ")), !r && !o && t && (r = t), {
    id: n,
    "aria-label": r,
    "aria-labelledby": o
  }
}

function E(e) {
  let t = (0, o.useRef)();
  return (0, o.useMemo)(() => ({
    get current() {
      return t.current
    },
    set current(value) {
      t.current = value, "function" == typeof e ? e(value) : e && (e.current = value)
    }
  }), [e])
}

function T(e, t) {
  let n = (0, o.useRef)(!0),
    r = (0, o.useRef)(null);
  (0, o.useEffect)(() => (n.current = !0, () => {
    n.current = !1
  }), []), (0, o.useEffect)(() => {
    n.current ? n.current = !1 : (!r.current || t.some((e, t) => !Object.is(e, r[t]))) && e(), r.current = t
  }, t)
}
"undefined" != typeof document && ("loading" !== document.readyState ? D() : document.addEventListener("DOMContentLoaded", D));

function R(e) {
  let {
    ref: t,
    onResize: n
  } = e;
  (0, o.useEffect)(() => {
    let e = null == t ? void 0 : t.current;
    if (e) {
      if (!(void 0 !== window.ResizeObserver)) return window.addEventListener("resize", n, !1), () => {
        window.removeEventListener("resize", n, !1)
      };
      else {
        let t = new window.ResizeObserver(e => {
          e.length && n()
        });
        return t.observe(e), () => {
          e && t.unobserve(e)
        }
      }
    }
  }, [n, t])
}

function M(e, t) {
  s(() => {
    if (e && e.ref && t) return e.ref.current = t.current, () => {
      e.ref.current = null
    }
  }, [e, t])
}

function O(e) {
  for (I(e) && (e = e.parentElement); e && !I(e);) e = e.parentElement;
  return e || document.scrollingElement || document.documentElement
}

function I(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY)
}
let A = "undefined" != typeof document && window.visualViewport;

function N() {
  let [e, t] = (0, o.useState)(() => L());
  return (0, o.useEffect)(() => {
    let e = () => {
      t(e => {
        let t = L();
        return t.width === e.width && t.height === e.height ? e : t
      })
    };
    return A ? A.addEventListener("resize", e) : window.addEventListener("resize", e), () => {
      A ? A.removeEventListener("resize", e) : window.removeEventListener("resize", e)
    }
  }, []), e
}

function L() {
  return {
    width: (null == A ? void 0 : A.width) || window.innerWidth,
    height: (null == A ? void 0 : A.height) || window.innerHeight
  }
}
let j = 0,
  F = new Map;

function K(e) {
  let [t, n] = (0, o.useState)(void 0);
  return s(() => {
    if (!e) return;
    let t = F.get(e);
    if (t) n(t.element.id);
    else {
      let r = "react-aria-description-".concat(j++);
      n(r);
      let o = document.createElement("div");
      o.id = r, o.style.display = "none", o.textContent = e, document.body.appendChild(o), t = {
        refCount: 0,
        element: o
      }, F.set(e, t)
    }
    return t.refCount++, () => {
      0 == --t.refCount && (t.element.remove(), F.delete(e))
    }
  }, [e]), {
    "aria-describedby": e ? t : void 0
  }
}

function _(e) {
  var t;
  return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some(t => e.test(t.brand))) || e.test(window.navigator.userAgent))
}

function z(e) {
  var t;
  return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
}

function V() {
  return z(/^Mac/i)
}

function B() {
  return z(/^iPhone/i)
}

function U() {
  return B() || z(/^iPad/i) || V() && navigator.maxTouchPoints > 1
}

function H() {
  return V() || U()
}

function G() {
  return _(/AppleWebKit/i) && ! function() {
    return _(/Chrome/i)
  }()
}

function W() {
  return _(/Android/i)
}

function q(e, t, n, r) {
  let a = c(n),
    i = null == n;
  (0, o.useEffect)(() => {
    if (i) return;
    let n = e.current;
    return n.addEventListener(t, a, r), () => {
      n.removeEventListener(t, a, r)
    }
  }, [e, t, r, i, a])
}

function Z(e, t) {
  let n = Y(e, t, "left"),
    r = Y(e, t, "top"),
    o = t.offsetWidth,
    a = t.offsetHeight,
    i = e.scrollLeft,
    s = e.scrollTop,
    {
      borderTopWidth: c,
      borderLeftWidth: l
    } = getComputedStyle(e),
    u = e.scrollLeft + parseInt(l, 10),
    d = e.scrollTop + parseInt(c, 10),
    p = u + e.clientWidth,
    f = d + e.clientHeight;
  n <= i ? i = n - parseInt(l, 10) : n + o > p && (i += n + o - p), r <= d ? s = r - parseInt(c, 10) : r + a > f && (s += r + a - f), e.scrollLeft = i, e.scrollTop = s
}

function Y(e, t, n) {
  let r = "left" === n ? "offsetLeft" : "offsetTop",
    o = 0;
  for (; t.offsetParent && (o += t[r], t.offsetParent !== e);) {
    ;
    if (t.offsetParent.contains(e)) {
      o -= e[r];
      break
    }
    t = t.offsetParent
  }
  return o
}

function X(e, t) {
  if (document.contains(e)) {
    let i = document.scrollingElement || document.documentElement;
    if ("hidden" === window.getComputedStyle(i).overflow) {
      let t = O(e);
      for (; e && t && e !== i && t !== i;) Z(t, e), t = O(e = t)
    } else {
      var n, r, o, a;
      let {
        left: i,
        top: s
      } = e.getBoundingClientRect();
      null == e || null === (n = e.scrollIntoView) || void 0 === n || n.call(e, {
        block: "nearest"
      });
      let {
        left: c,
        top: l
      } = e.getBoundingClientRect();
      (Math.abs(i - c) > 1 || Math.abs(s - l) > 1) && (null == t || null === (r = t.containingElement) || void 0 === r || null === (o = r.scrollIntoView) || void 0 === o || o.call(r, {
        block: "center",
        inline: "center"
      }), null === (a = e.scrollIntoView) || void 0 === a || a.call(e, {
        block: "nearest"
      }))
    }
  }
}

function J(e) {
  return 0 === e.mozInputSource && !!e.isTrusted || (W() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
}

function $(e) {
  return !W() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType
}

function Q(e, t) {
  let n = (0, o.useRef)(null);
  return e && n.current && t(e, n.current) && (e = n.current), n.current = e, e
}

function ee(e, t, n) {
  let r = (0, o.useRef)(t),
    a = c(() => {
      n && n(r.current)
    });
  (0, o.useEffect)(() => {
    var t;
    let n = null == e ? void 0 : null === (t = e.current) || void 0 === t ? void 0 : t.form;
    return null == n || n.addEventListener("reset", a), () => {
      null == n || n.removeEventListener("reset", a)
    }
  }, [e, a])
}
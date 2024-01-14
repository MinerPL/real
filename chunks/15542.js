"use strict";
let r;
n.r(e), n.d(e, {
  FocusRing: function() {
    return F
  },
  FocusRingManager: function() {
    return C
  },
  FocusRingScope: function() {
    return M
  }
}), n("424973"), n("70102"), n("781738"), n("222007"), n("808653"), n("843762"), n("426094");
var i, o, a, u = n("884691"),
  s = Object.defineProperty,
  c = (t, e, n) => e in t ? s(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
  }) : t[e] = n,
  l = (t, e, n) => (c(t, "symbol" != typeof e ? e + "" : e, n), n),
  f = {
    exports: {}
  };
i = f,
  function() {
    var t = {}.hasOwnProperty;

    function e() {
      for (var n = [], r = 0; r < arguments.length; r++) {
        var i = arguments[r];
        if (i) {
          var o = typeof i;
          if ("string" === o || "number" === o) n.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var a = e.apply(null, i);
              a && n.push(a)
            }
          } else if ("object" === o) {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              n.push(i.toString());
              continue
            }
            for (var u in i) t.call(i, u) && i[u] && n.push(u)
          }
        }
      }
      return n.join(" ")
    }
    i.exports ? (e.default = e, i.exports = e) : window.classNames = e
  }();
let h = f.exports;
var p = function(t, e, n, r, i, o, a, u) {
  if (!t) {
    var s;
    if (void 0 === e) s = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var c = [n, r, i, o, a, u],
        l = 0;
      (s = Error(e.replace(/%s/g, function() {
        return c[l++]
      }))).name = "Invariant Violation"
    }
    throw s.framesToPop = 1, s
  }
};
let d = /^#[0-9a-f]{3,8}$/i,
  v = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
class y {
  toHexString() {
    var t = Math.round(this.red).toString(16),
      e = Math.round(this.green).toString(16),
      n = Math.round(this.blue).toString(16);
    return "#" + (this.red > 15.5 ? t : "0" + t) + (this.green > 15.5 ? e : "0" + e) + (this.blue > 15.5 ? n : "0" + n)
  }
  static parseString(t) {
    return t.match(v) ? this.parseColorFnString(t) : t.match(d) ? this.parseHexString(t) : void 0
  }
  static parseRgbString(t) {
    return "transparent" === t ? new y(0, 0, 0, 0) : this.parseColorFnString(t)
  }
  static parseHexString(t) {
    if (!(!t.match(d) || [6, 8].includes(t.length))) {
      if ((t = t.replace("#", "")).length < 6) {
        let [e, n, r, i] = t.split("");
        t = e + e + n + n + r + r, i && (t += i + i)
      }
      var e = t.match(/.{1,2}/g);
      if (null != e) return new y(parseInt(e[0], 16), parseInt(e[1], 16), parseInt(e[2], 16), null != e[3] ? parseInt(e[3], 16) / 255 : 1)
    }
  }
  static parseColorFnString(t) {
    var e;
    let [, n, r] = null != (e = t.match(v)) ? e : [];
    if (!n || !r) return;
    let i = r.split(/\s*[,/\s]\s*/).map(t => t.replace(",", "").trim()).filter(t => "" !== t).map((t, e) => (function(t, e, n) {
      if (/%$/.test(e)) return 3 === n ? parseFloat(e) / 100 : 255 * parseFloat(e) / 100;
      if ("h" === t[n]) {
        if (/turn$/.test(e)) return 360 * parseFloat(e);
        if (/rad$/.test(e)) return 57.3 * parseFloat(e)
      }
      return parseFloat(e)
    })(n, t, e));
    if ("hsl" === n.substr(0, 3)) {
      let t = function(t) {
        let e, {
          hue: n,
          saturation: r,
          lightness: i,
          alpha: o
        } = t;
        r /= 255, i /= 255;
        let a = (1 - Math.abs(2 * i - 1)) * r,
          u = a * (1 - Math.abs(n / 60 % 2 - 1)),
          s = i - a / 2;
        e = n < 60 ? [a, u, 0] : n < 120 ? [u, a, 0] : n < 180 ? [0, a, u] : n < 240 ? [0, u, a] : n < 300 ? [u, 0, a] : [a, 0, u];
        let c = e.map(t => Math.round((t + s) * 255));
        return {
          red: c[0],
          green: c[1],
          blue: c[2],
          alpha: o
        }
      }({
        hue: i[0],
        saturation: i[1],
        lightness: i[2],
        alpha: i[3]
      });
      return new y(t.red, t.green, t.blue, t.alpha)
    }
    return new y(i[0], i[1], i[2], "number" == typeof i[3] ? i[3] : 1)
  }
  toHSL() {
    return function(t) {
      let {
        red: e,
        green: n,
        blue: r,
        alpha: i
      } = t, o = e / 255, a = n / 255, u = r / 255, s = Math.max(o, a, u), c = Math.min(o, a, u), l = s - c, f = (s + c) / 2, h = l > 0 ? l / (1 - Math.abs(2 * f - 1)) : 0;
      if (0 === l) return {
        hue: 0,
        saturation: h,
        lightness: f,
        alpha: i
      };
      let p = 0;
      switch (s) {
        case o:
          p = (a - u) / l % 6;
          break;
        case a:
          p = (u - o) / l + 2;
          break;
        case u:
          p = (a - u) / l + 4
      }
      return {
        hue: 60 * p,
        saturation: h,
        lightness: f,
        alpha: i
      }
    }({
      red: this.red,
      green: this.green,
      blue: this.blue,
      alpha: this.alpha
    })
  }
  getRelativeLuminance() {
    var t = this.red / 255,
      e = this.green / 255,
      n = this.blue / 255;
    return .2126 * (t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .7152 * (e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)) + .0722 * (n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4))
  }
  constructor(t, e, n, r) {
    this.red = t, this.green = e, this.blue = n, this.alpha = r
  }
}

function m(t, e) {
  let n = t.alpha,
    r = (1 - n) * e.red + n * t.red,
    i = (1 - n) * e.green + n * t.green,
    o = (1 - n) * e.blue + n * t.blue,
    a = t.alpha + e.alpha * (1 - t.alpha);
  return new y(r, i, o, a)
}

function g(t) {
  if (t) return parseInt(t) > 0 ? t : void 0
}
class b {
  setContainer(t) {
    this.container = t
  }
  setThemeOptions(t) {
    this.themeOptions = t
  }
  showElement(t) {
    var e, n;
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    this.targetElement = t, this.targetAncestry = this.getElementAncestors(this.targetElement), this.boundingBox = void 0, this.className = i.className, this.offset = null != (e = i.offset) ? e : 0, this.zIndex = i.zIndex, n = this, n !== r && (null == r || r.hide(), r = n), this.invalidate()
  }
  hide() {
    this.targetElement = void 0, this.targetAncestry = void 0, this.boundingBox = void 0, this.className = void 0, this.offset = 0, this.zIndex = void 0, this.invalidate()
  }
  get visible() {
    return null != this.targetElement || null != this.boundingBox
  }
  getElementAncestors(t) {
    if (null == t) return {
      elements: [],
      styles: []
    };
    let e = [],
      n = [],
      r = t;
    for (; null != r;) e.push(r), "u" > typeof window && n.push(window.getComputedStyle(r)), r = r.parentElement;
    return {
      elements: e,
      styles: n
    }
  }
  getNextZIndexForAncestry(t) {
    for (let e = 0; e < t.elements.length; e++) {
      let n = t.elements[e],
        r = t.styles[e],
        i = parseInt(r.getPropertyValue("z-index"));
      if (!isNaN(i)) return i + 1;
      if (n === this.container) break
    }
  }
  getBorderRadius(t) {
    var e, n, r, i, o, a, u, s;
    let c = null != (n = g(null == (e = t.styles[0]) ? void 0 : e.borderTopLeftRadius)) ? n : "0",
      l = null != (i = g(null == (r = t.styles[0]) ? void 0 : r.borderTopRightRadius)) ? i : "0",
      f = null != (a = g(null == (o = t.styles[0]) ? void 0 : o.borderBottomRightRadius)) ? a : "0",
      h = null != (s = g(null == (u = t.styles[0]) ? void 0 : u.borderBottomLeftRadius)) ? s : "0";
    if (!("0" === c && "0" === l && "0" === f && "0" === h)) return "".concat(c, " ").concat(l, " ").concat(f, " ").concat(h)
  }
  makePositionFromDOMRect(t) {
    var e, n, r, i;
    if (null == this.container) return {};
    let o = this.container.getBoundingClientRect(),
      {
        scrollTop: a,
        scrollLeft: u
      } = this.container,
      s = 0,
      c = 0,
      l = 0,
      f = 0;
    return "number" == typeof this.offset ? (s = this.offset, c = this.offset, l = this.offset, f = this.offset) : (s = null != (e = this.offset.top) ? e : 0, c = null != (n = this.offset.right) ? n : 0, l = null != (r = this.offset.bottom) ? r : 0, f = null != (i = this.offset.left) ? i : 0), {
      top: a + t.top - o.top + s,
      width: t.width - (c + f),
      height: t.height - (l + s),
      left: u + t.left - o.left + f
    }
  }
  getStyle() {
    var t;
    let e = {};
    if (null != this.boundingBox && (e = {
        ...this.makePositionFromDOMRect(this.boundingBox),
        zIndex: this.zIndex
      }), null != this.targetElement && null != this.targetAncestry) {
      let n = function(t) {
        let e = [],
          n = t.styles.slice(1);
        for (let t of n) {
          let n = y.parseString(t.backgroundColor);
          if (null != n) {
            if (n.alpha > .95) return n;
            e.push(n)
          }
        }
        return e.push(new y(255, 255, 255, 1)), e.reduce(m)
      }(this.targetAncestry);
      e = {
        ...this.makePositionFromDOMRect(this.targetElement.getBoundingClientRect()),
        zIndex: null != (t = this.zIndex) ? t : this.getNextZIndexForAncestry(this.targetAncestry),
        "--__adaptive-focus-ring-color": function(t, e) {
          if (null == t) return "var(--focus-primary)";
          let {
            saturation: n
          } = t.toHSL(), r = t.getRelativeLuminance();
          if (n <= .4) return "var(--focus-primary)";
          if ("u" > typeof e) {
            let t = e.brightnessTreshold || .2;
            return r < t ? "var(--focus-light, rgba(255,255,255,0.7))" : "var(--focus-dark, rgba(0, 0, 0, 0.85))"
          }
          return "rgba(255,255,255,0.7)"
        }(n, this.themeOptions),
        "--__adaptive-focus-ring-radius": this.getBorderRadius(this.targetAncestry)
      }
    }
    return e
  }
  constructor() {
    l(this, "targetElement"), l(this, "targetAncestry"), l(this, "boundingBox"), l(this, "className"), l(this, "offset", 0), l(this, "zIndex"), l(this, "container", null), l(this, "themeOptions"), l(this, "invalidate", () => null)
  }
}
let _ = new b;
"u" > typeof window && _.setContainer(document.body);
let x = u.createContext(_);
var w = function(t, e, n, r) {
  var i = n ? n.call(r, t, e) : void 0;
  if (void 0 !== i) return !!i;
  if (t === e) return !0;
  if ("object" != typeof t || !t || "object" != typeof e || !e) return !1;
  var o = Object.keys(t),
    a = Object.keys(e);
  if (o.length !== a.length) return !1;
  for (var u = Object.prototype.hasOwnProperty.bind(e), s = 0; s < o.length; s++) {
    var c = o[s];
    if (!u(c)) return !1;
    var l = t[c],
      f = e[c];
    if (!1 === (i = n ? n.call(r, l, f, c) : void 0) || void 0 === i && l !== f) return !1
  }
  return !0
};
let O = !1,
  k, S = {};

function E() {
  if (!O) return;
  let t = null == r ? void 0 : r.getStyle();
  null == t || w(t, S) ? null != k && cancelAnimationFrame(k) : (S = t, null == r || r.invalidate()), k = requestAnimationFrame(E)
}
let P = !1,
  C = {
    get ringsEnabled() {
      return P
    },
    setRingsEnabled(t) {
      P = t, null == r || r.invalidate()
    },
    enableAnimationTracking() {
      O = !0, k = requestAnimationFrame(E)
    },
    disableAnimationTracking() {
      O = !1, null != k && cancelAnimationFrame(k)
    }
  };
var A = {
    exports: {}
  },
  j = {};
A.exports = function() {
  if (o) return j;
  o = 1;
  var t = Symbol.for("react.element"),
    e = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    r = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };

  function a(e, o, a) {
    var u, s = {},
      c = null,
      l = null;
    for (u in void 0 !== a && (c = "" + a), void 0 !== o.key && (c = "" + o.key), void 0 !== o.ref && (l = o.ref), o) n.call(o, u) && !i.hasOwnProperty(u) && (s[u] = o[u]);
    if (e && e.defaultProps)
      for (u in o = e.defaultProps) void 0 === s[u] && (s[u] = o[u]);
    return {
      $$typeof: t,
      type: e,
      key: c,
      ref: l,
      props: s,
      _owner: r.current
    }
  }
  return j.Fragment = e, j.jsx = a, j.jsxs = a, j
}();
let R = A.exports.jsx,
  T = A.exports.jsxs;

function M(t) {
  let {
    containerRef: e,
    children: n,
    themeOptions: r
  } = t, i = u.useRef(new b);
  return u.useEffect(() => {
    i.current.setContainer(e.current), i.current.setThemeOptions(r)
  }, [e.current]), T(x.Provider, {
    value: i.current,
    children: [n, R(L, {})]
  })
}

function L() {
  let t = u.useContext(x),
    [, e] = u.useState({});
  return u.useEffect(() => (t.invalidate = () => e({}), () => {
    t.invalidate = () => null
  }), [t]), C.ringsEnabled && t.visible ? R("div", {
    className: h("focus-rings-ring", t.className),
    style: t.getStyle()
  }) : null
}
let V = "u" > typeof window && (null == (a = window.document) ? void 0 : a.createElement) != null ? u.useLayoutEffect : u.useEffect;

function F(t) {
  let {
    within: e = !1,
    enabled: n = !0,
    focused: r,
    offset: i = 0,
    focusTarget: o,
    ringTarget: a,
    ringClassName: s,
    focusClassName: c,
    focusWithinClassName: l,
    children: f
  } = t;
  null != o && p(null != a, "FocusRing was given a focusTarget but the required ringTarget was not provided. A ringTarget is required to avoid ambiguity of where the ring will be applied."), null != r && p(null != a, "FocusRing was given a controlled focused prop but no ringTarget to apply the ring to. A ringTarget is required since it cannot be inferred through regular focus events.");
  let d = u.useRef(!1),
    [v, y] = u.useState(!1),
    m = u.useContext(x),
    g = u.Children.only(f),
    {
      onBlur: b,
      onFocus: _,
      ...w
    } = g.props,
    O = u.useMemo(() => ({
      className: s,
      offset: i
    }), [s, i]);
  V(() => {
    n && m.invalidate()
  }), u.useEffect(() => {
    n || m.hide()
  }, [n, m]), u.useEffect(() => () => {
    d.current && m.hide()
  }, [m]), u.useEffect(() => {
    let t = null == a ? void 0 : a.current;
    null == r || null == t || (d.current = r, r ? m.showElement(t, O) : !1 === r && m.hide())
  }, [r, O, m, a]), V(() => {
    if (null != r) return;
    let t = null == o ? void 0 : o.current,
      n = null == a ? void 0 : a.current;
    if (null != t && null != n) return t.addEventListener("focusin", i, !0), t.addEventListener("focusout", u, !0), () => {
      t.removeEventListener("focusin", i, !0), t.removeEventListener("focusout", u, !0)
    };

    function i(t) {
      if (null != n) {
        if (t.currentTarget === t.target) {
          d.current = !0, m.showElement(n, O);
          return
        }
        y(!0), e && m.showElement(n, O)
      }
    }

    function u() {
      m.hide(), d.current = !1, y(!1)
    }
  }, [e, O, r, m, o, a]);
  let k = u.useCallback(t => {
      m.hide(), d.current = !1, y(!1), null == b || b(t)
    }, [b, m]),
    S = u.useCallback(t => {
      let n = null == a ? void 0 : a.current;
      t.currentTarget === t.target ? (d.current = !0, m.showElement(null != n ? n : t.currentTarget, O)) : (y(!0), e && m.showElement(null != n ? n : t.currentTarget, O)), null == _ || _(t)
    }, [a, e, _, m, O]);
  return n && null == o && null == r ? u.cloneElement(g, {
    ...w,
    className: h(w.className, d.current ? c : void 0, v ? l : void 0),
    onBlur: k,
    onFocus: S
  }) : g
}
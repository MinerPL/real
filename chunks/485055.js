"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  },
  useForumGridItem: function() {
    return C
  },
  GridNavigatorProvider: function() {
    return T
  }
}), a("222007");
var s = a("37983"),
  n = a("884691"),
  l = a("909283"),
  r = a("942367"),
  i = a("74139");
let o = "data-grid-item-id",
  u = "data-grid-section",
  d = "data-grid-prev-section-boundary",
  c = new Set([r.Keys.UP, r.Keys.DOWN, r.Keys.LEFT, r.Keys.RIGHT]);

function m(e) {
  let {
    section: t,
    column: a,
    row: s
  } = e, n = "[".concat(u, '="').concat(t, '"]'), l = "[".concat("aria-colindex", '="').concat(a, '"]'), r = "[".concat("aria-rowindex", '="').concat(s, '"]');
  return "".concat(n).concat(l).concat(r)
}

function h(e) {
  let {
    id: t,
    isEnabled: a,
    setFocus: s
  } = e, u = n.useRef(null), h = n.useRef(!1), f = n.useRef(null), g = n.useRef(a);
  n.useLayoutEffect(() => {
    g.current = a
  }, [a]);
  let x = n.useCallback(e => {
      var t;
      return (null !== (t = f.current) && void 0 !== t ? t : document).querySelector(e)
    }, []),
    C = n.useCallback((e, t) => {
      g.current && s(e, t)
    }, [s]),
    T = n.useCallback(e => {
      if (g.current) {
        var t;
        null === (t = document.querySelector(e)) || void 0 === t || t.focus()
      }
    }, []),
    _ = n.useCallback(e => {
      u.current = e;
      let a = (0, i.createSelector)(e, o),
        s = (0, i.getItemId)(e);
      C(a, s), (0, l.notifyFocusSubscribers)(t, s, !0)
    }, [t, C]),
    [S, p] = n.useState(!1),
    E = n.useRef(S);
  n.useLayoutEffect(() => {
    E.current = S
  }, [S]), n.useLayoutEffect(() => {
    let e = f.current;
    if (null != e) return e.addEventListener("focusin", a), e.addEventListener("focusout", s), e.addEventListener("focus", n), e.addEventListener("scroll", l, {
      passive: !0
    }), () => {
      e.removeEventListener("focusin", a), e.removeEventListener("focusout", s), e.removeEventListener("focus", n), e.removeEventListener("scroll", l)
    };

    function a() {
      p(!0)
    }

    function s(e) {
      !e.currentTarget.contains(e.relatedTarget) && (p(!1), requestAnimationFrame(() => {
        let e = u.current;
        if (null !== e) {
          let a = (0, i.createSelector)(e, o);
          null == x(a) && T((0, i.createSelector)(t, "data-grid-id"))
        }
      }))
    }

    function n() {
      let e = f.current,
        t = E.current;
      if (t || null == e) return
    }

    function l() {
      h.current = !0
    }
  }, [t, C, T, _, x]);
  let N = n.useCallback(e => {
      var t, a;
      if (!g.current) return;
      let s = u.current,
        n = f.current;
      if (null == s) return;
      let l = (0, i.createSelector)(s, o),
        h = null == n ? void 0 : n.querySelector(l);
      if (null == h) return;
      let C = parseInt(null !== (t = h.getAttribute("data-grid-section")) && void 0 !== t ? t : ""),
        T = parseInt(h.getAttribute("aria-rowindex")),
        S = parseInt(h.getAttribute("aria-colindex"));
      switch (c.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key) {
        case r.Keys.RIGHT: {
          let e = x(m({
            section: C,
            row: T,
            column: S + 1
          }));
          if (null != e) {
            let t = e.getAttribute(o);
            null != t && _(t)
          }
          return
        }
        case r.Keys.LEFT: {
          let e = x(m({
            section: C,
            row: T,
            column: S - 1
          }));
          if (null != e) {
            let t = e.getAttribute(o);
            null != t && _(t)
          }
          return
        }
        case r.Keys.DOWN: {
          let e = x(m({
            section: C,
            row: T + 1,
            column: S
          }));
          if (null == e && (e = x(m({
              section: C + 1,
              row: 0,
              column: S
            }))), null != e) {
            let t = e.getAttribute(o);
            null != t && _(t)
          }
          return
        }
        case r.Keys.UP: {
          let e;
          if (0 === T) {
            let t = parseInt(h.getAttribute(d));
            null == (e = x(m({
              section: C - 1,
              row: t,
              column: S
            }))) && (e = x(m({
              section: C - 1,
              row: t - 1,
              column: S
            })))
          } else e = x(m({
            section: C,
            row: T - 1,
            column: S
          }));
          if (null != e) {
            let t = e.getAttribute(o);
            null != t && _(t)
          }
          return
        }
        case r.Keys.SPACE:
        case r.Keys.ENTER: {
          if (e.repeat) return;
          let t = u.current;
          if (null != t) {
            let s = (0, i.createSelector)(t, o),
              n = x(s),
              l = null !== (a = null == n ? void 0 : n.ownerDocument) && void 0 !== a ? a : document,
              r = n === l.activeElement;
            null != n && r && (e.preventDefault(), e.stopPropagation(), null == n || n.click())
          }
        }
      }
    }, [x, _]),
    M = n.useCallback(e => {
      let a = null != e ? (0, i.createListItemId)(t, e) : null;
      u.current = a
    }, [t]);
  return n.useMemo(() => ({
    id: t,
    containerProps: {
      onKeyDown: N,
      ref: f
    },
    setFocus: M
  }), [t, N, M])
}
let f = {
    id: "NO_LIST",
    onKeyDown() {},
    ref: n.createRef()
  },
  g = n.createContext({
    id: "NO_LIST",
    setFocus() {}
  }),
  x = n.createContext(f);

function C(e) {
  let {
    id: t,
    section: a,
    row: s,
    column: r,
    boundaries: c
  } = e, [m, h] = n.useState(0 === s && 0 === r ? 0 : -1), f = n.useContext(g), {
    id: x,
    setFocus: C
  } = f, T = n.useCallback(() => C(t), [t, C]);
  return n.useLayoutEffect(() => (0, l.addFocusSubscriber)(x, e => {
    h(e === t ? 0 : -1)
  }), [t, x]), {
    [o]: (0, i.createListItemId)(x, t),
    [u]: a,
    [d]: c[a],
    role: "gridcell",
    "aria-rowindex": s,
    "aria-colindex": r,
    tabIndex: m,
    onFocus: T
  }
}

function T(e) {
  let {
    children: t,
    navigator: a
  } = e, {
    id: l,
    setFocus: r,
    containerProps: {
      onKeyDown: i,
      ref: o
    }
  } = a, u = n.useMemo(() => ({
    id: l,
    setFocus: r
  }), [l, r]), d = n.useMemo(() => ({
    onKeyDown: i,
    ref: o,
    id: l
  }), [i, o, l]);
  return (0, s.jsx)(x.Provider, {
    value: d,
    children: (0, s.jsx)(g.Provider, {
      value: u,
      children: t
    })
  })
}
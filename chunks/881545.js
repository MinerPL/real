"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var i = n("884691"),
  r = n("429787"),
  s = n("942367"),
  a = n("74139");

function o(e) {
  let {
    navId: t,
    items: n,
    initialFocusPath: o,
    onSelect: l,
    enabled: u = !0,
    closeMenu: c
  } = e, d = i.useRef(u);
  i.useLayoutEffect(() => {
    d.current = u
  }, [u]);
  let [f, E] = i.useReducer(r.default, {
    items: n,
    focusPath: o,
    focusIndex: -1
  }), h = i.useMemo(() => (0, a.throttle)(E, 30), [E]);
  i.useEffect(() => {
    E({
      type: r.MenuActionType.UPDATE_ITEMS,
      items: n
    })
  }, [n]);
  let {
    focusPath: p
  } = f, [_, S] = i.useState(!1), [m, T] = i.useState(!1), [{
    onItemFocusMemoizer: g,
    onItemMouseEnterMemoizer: I
  }] = i.useState(() => ({
    onItemFocusMemoizer: new a.HandlerMemoizer(e => () => {
      S(!0), E({
        type: r.MenuActionType.SET_FOCUS_PATH,
        path: e.split("--")
      })
    }),
    onItemMouseEnterMemoizer: new a.HandlerMemoizer(e => () => {
      T(!1), E({
        type: r.MenuActionType.SET_FOCUS_PATH,
        path: e.split("--")
      })
    })
  })), C = i.useCallback(e => {
    if (!d.current) return;
    e.key === s.Keys.ESCAPE && null != c && (e.stopPropagation(), e.preventDefault(), c());
    let n = function(e) {
      switch (e.key) {
        case s.Keys.ENTER:
        case s.Keys.SPACE:
          return s.ActionType.SELECT_FOCUSED_ITEM;
        case s.Keys.UP:
          return s.ActionType.NAVIGATE_UP;
        case s.Keys.DOWN:
          return s.ActionType.NAVIGATE_DOWN;
        case s.Keys.RIGHT:
          return s.ActionType.NAVIGATE_IN;
        case s.Keys.LEFT:
          return s.ActionType.NAVIGATE_OUT
      }
    }(e);
    switch (n) {
      case s.ActionType.NAVIGATE_UP:
      case s.ActionType.NAVIGATE_DOWN:
      case s.ActionType.NAVIGATE_IN:
      case s.ActionType.NAVIGATE_OUT:
        e.preventDefault(), e.stopPropagation(), T(!0), h({
          type: n
        });
        return;
      case s.ActionType.SELECT_FOCUSED_ITEM:
        var i, r, o, u, f;
        if (e.repeat) return;
        if (e.target.tabIndex >= 0) return;
        if (e.preventDefault(), e.stopPropagation(), T(!1), h({
            type: n
          }), null != l) {
          l(p);
          return
        }
        let E = null !== (i = e.target.ownerDocument) && void 0 !== i ? i : document;
        let _ = (u = E, f = (r = t, null != (o = p) ? "".concat((0, a.makeId)(r, o.join("--"))) : r), u.getElementById(f));
        null == _ || _.click()
    }
  }, [h, t, p, l, c]), v = i.useCallback(() => {
    !_ && S(!0)
  }, [_]), A = i.useCallback(e => {
    e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && _ && S(!1)
  }, [_]), R = i.useCallback(() => {
    E({
      type: r.MenuActionType.SET_FOCUS_PATH,
      path: []
    }), S(!1)
  }, []), N = i.useCallback(e => e.every((e, t) => p[t] === e), [p]), O = i.useCallback(() => ({
    role: "menu",
    id: t,
    tabIndex: -1,
    onKeyDown: C,
    onFocus: v,
    onBlur: A,
    onMouseLeave: R,
    "aria-activedescendant": p.length > 0 ? (0, a.makeId)(t, p.join("--")) : void 0
  }), [t, C, v, A, R, p]), D = i.useCallback(e => {
    let {
      path: n
    } = e;
    return {
      role: "menu",
      tabIndex: -1,
      "aria-activedescendant": N(n) ? (0, a.makeId)(t, p.join("--")) : void 0,
      focusIndex: f.focusIndex,
      isUsingKeyboardNavigation: m
    }
  }, [t, p, N, f.focusIndex, m]), y = i.useCallback(e => {
    let {
      path: n,
      hasSubmenu: i = !1,
      role: r = "menuitem"
    } = e, s = n.join("--"), o = i ? {
      "aria-expanded": N(n),
      "aria-haspopup": !0
    } : {};
    return {
      ...o,
      role: r,
      id: (0, a.makeId)(t, s),
      tabIndex: -1,
      onFocus: g.get(s),
      onMouseEnter: I.get(s)
    }
  }, [t, N, g, I]), P = i.useMemo(() => ({
    dispatch: h,
    getContainerProps: O,
    getSubmenuProps: D,
    getItemProps: y,
    isFocused: N,
    isUsingKeyboardNavigation: m
  }), [h, O, D, y, N, m]);
  return P
}
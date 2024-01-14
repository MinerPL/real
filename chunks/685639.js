"use strict";
n.r(t), n.d(t, {
  TransitionStates: function() {
    return i
  },
  TransitionGroup: function() {
    return u
  }
}), n("222007"), n("424973");
var i, r, s = n("37983"),
  a = n("884691");
(r = i || (i = {}))[r.MOUNTED = 0] = "MOUNTED", r[r.ENTERED = 1] = "ENTERED", r[r.YEETED = 2] = "YEETED";
let o = {};

function l(e) {
  return e
}

function u(e) {
  let {
    items: t,
    renderItem: n,
    getItemKey: i,
    wrapChildren: r = l,
    lazyCleanUpDelay: u
  } = e, c = a.useRef(-1);
  a.useLayoutEffect(() => () => clearTimeout(c.current));
  let [, d] = a.useState(o), f = a.useRef(null), E = a.useMemo(() => {
    var e;
    let r = new Set(null === (e = f.current) || void 0 === e ? void 0 : e.keys()),
      s = new Map(f.current);
    for (let e of t) {
      let t = i(e),
        a = s.get(t);
      if (null == a) {
        let i = null != f.current ? 1 : 0,
          r = () => {
            var e, n;
            let i = null === (e = f.current) || void 0 === e ? void 0 : e.get(t);
            null == i || (2 === i.state ? (null === (n = f.current) || void 0 === n || n.delete(t), null != u ? (clearTimeout(c.current), c.current = setTimeout(() => d({}), u)) : d({})) : __DEV__ && console.warn("SimpleTransitionGroup.cleanUp: Attempted to remove an item that isn't yeetable: ".concat(t)))
          },
          s = n(t, e, i, r);
        a = {
          item: e,
          children: s,
          state: i,
          cleanUp: r,
          renderItem: n
        }
      } else if (a.item !== e || a.renderItem !== n || 2 === a.state) {
        let {
          cleanUp: i
        } = a, r = 2 === a.state ? 1 : a.state, s = n(t, e, r, a.cleanUp);
        a = {
          item: e,
          children: s,
          state: r,
          cleanUp: i,
          renderItem: n
        }
      }
      s.set(t, a), r.delete(t)
    }
    for (let e of r) {
      let t = s.get(e);
      if (null != t) {
        if (2 !== t.state || t.renderItem !== n) {
          let {
            item: i,
            cleanUp: r
          } = t, a = n(e, t.item, 2, t.cleanUp);
          null != (t = {
            item: i,
            children: a,
            state: 2,
            cleanUp: r,
            renderItem: n
          }).children ? s.set(e, t) : s.delete(e)
        } else s.set(e, t)
      }
    }
    return s
  }, [t, i, n, u]);
  a.useInsertionEffect(() => (f.current = E, () => {
    var e;
    return null === (e = f.current) || void 0 === e ? void 0 : e.clear()
  }), [E]);
  let h = [];
  for (let [, e] of E) h.push(e.children);
  return (0, s.jsx)(s.Fragment, {
    children: h.length > 0 ? r(h) : null
  })
}
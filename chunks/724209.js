"use strict";
r.r(t), r.d(t, {
  default: function() {
    return f
  }
}), r("222007"), r("424973");
var a = r("37983"),
  n = r("884691"),
  i = r("414456"),
  l = r.n(i),
  o = r("77078"),
  s = r("811151"),
  c = r("449008"),
  d = r("811199"),
  u = r("694735");
let h = n.forwardRef(function(e, t) {
  let {
    id: r,
    selected: n,
    onClick: i,
    children: s
  } = e;
  return (0, a.jsx)(o.Clickable, {
    className: l(u.tabItem, {
      [u.selected]: n
    }),
    "data-tab-id": r,
    innerRef: t,
    onClick: i,
    children: s
  })
});

function p(e) {
  let {
    tabs: t,
    selectedTabId: r,
    onSelectTab: i
  } = e, l = n.useRef(null), p = n.useRef(0), f = n.useRef(new Map), [m, g] = n.useState([]), y = n.useCallback(() => {
    var e, a, n, i;
    if (null == l.current) return;
    let o = [],
      s = l.current.getBoundingClientRect().width;
    if (s !== p.current) {
      for (let l of (p.current = s, s -= null !== (a = null === (e = f.current.get(r)) || void 0 === e ? void 0 : e.width) && void 0 !== a ? a : 0, t)) l.id !== r && (s -= null !== (i = null === (n = f.current.get(l.id)) || void 0 === n ? void 0 : n.width) && void 0 !== i ? i : 0) < 0 && o.push(l.id);
      g(o)
    }
  }, [t, r]), b = n.useRef(null);
  n.useEffect(() => (b.current = new ResizeObserver(() => y()), null != l.current && b.current.observe(l.current), () => {
    var e;
    null === (e = b.current) || void 0 === e || e.disconnect()
  }), [y]);
  let x = n.useCallback(e => {
    let {
      closePopout: n
    } = e;
    return (0, a.jsx)(o.Menu, {
      navId: "devtools-overflow",
      variant: "fixed",
      onClose: n,
      "aria-label": "Overflowed DevTools Tabs",
      onSelect: n,
      children: t.map(e => {
        let {
          id: t,
          name: n
        } = e;
        return m.includes(t) && r !== t ? (0, a.jsx)(o.MenuItem, {
          id: t,
          label: n,
          action: () => i(t)
        }, t) : null
      }).filter(c.isNotNullish)
    })
  }, [t, m, i, r]);
  return (0, a.jsxs)("div", {
    className: u.tabBar,
    ref: l,
    children: [t.map(e => {
      let {
        id: t,
        name: n
      } = e;
      if (!m.includes(t)) return (0, a.jsx)(h, {
        id: t,
        selected: r === t,
        ref: e => {
          var r, a, n;
          let i = null !== (a = null === (r = f.current.get(t)) || void 0 === r ? void 0 : r.width) && void 0 !== a ? a : 0;
          f.current.set(t, {
            node: e,
            width: null !== (n = null == e ? void 0 : e.getBoundingClientRect().width) && void 0 !== n ? n : i
          })
        },
        onClick: r !== t ? () => i(t) : void 0,
        children: n
      }, t)
    }).filter(c.isNotNullish), m.length > 0 && (0, a.jsx)(a.Fragment, {
      children: (0, a.jsx)(o.Popout, {
        layerContext: d.devToolsLayerContext,
        renderPopout: x,
        position: "bottom",
        align: "right",
        spacing: 0,
        children: e => (0, a.jsx)(o.Button, {
          ...e,
          className: u.overflowChevron,
          size: o.Button.Sizes.ICON,
          look: o.Button.Looks.BLANK,
          children: (0, a.jsx)(s.default, {
            className: u.overflowIcon,
            width: 16,
            height: 16
          })
        })
      })
    })]
  })
}

function f(e, t) {
  var r, i, l;
  let {
    tabs: o,
    initialSelectedTabId: s,
    onChangeTab: c
  } = e, [d, u] = n.useState(null != s ? s : null === (r = o[0]) || void 0 === r ? void 0 : r.id), h = n.useCallback(() => (0, a.jsx)(p, {
    tabs: o,
    selectedTabId: d,
    onSelectTab: e => {
      u(e), null == c || c(e)
    }
  }), [d, u, c, ...t]), f = null !== (l = null === (i = o.find(e => e.id === d)) || void 0 === i ? void 0 : i.render) && void 0 !== l ? l : () => null;
  return {
    TabBar: h,
    renderSelectedTab: f,
    selectedTabId: d
  }
}
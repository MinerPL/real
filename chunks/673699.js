"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("759843"),
  i = n("974667"),
  r = n("77078"),
  o = n("510889"),
  u = n("428958"),
  d = n("839743"),
  c = n("322964"),
  f = n("954416");

function E(e) {
  let {
    initialized: t,
    items: n,
    loading: E,
    loadMore: h
  } = e, _ = a.useRef(null), S = (0, o.default)("for-you", _);
  (0, u.default)({
    type: s.ImpressionTypes.VIEW,
    name: s.ImpressionNames.NOTIFICATION_CENTER_LANDING,
    properties: {
      empty: 0 === n.length
    }
  }, {
    disableTrack: !t
  }, [t]);
  let T = () => {
    var e;
    let t = null === (e = _.current) || void 0 === e ? void 0 : e.getScrollerState();
    if (null == t) return;
    let n = t.scrollHeight - t.scrollTop - t.offsetHeight;
    n < 1500 && h()
  };
  return t ? 0 === n.length ? (0, l.jsx)(d.ForYouEmptyState, {}) : (0, l.jsx)(l.Fragment, {
    children: (0, l.jsx)(i.ListNavigatorProvider, {
      navigator: S,
      children: (0, l.jsx)(i.ListNavigatorContainer, {
        children: e => {
          let {
            ref: t,
            ...a
          } = e;
          return (0, l.jsxs)(r.AdvancedScroller, {
            className: f.container,
            ref: e => {
              var n;
              _.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
            },
            ...a,
            onScroll: T,
            children: [(0, l.jsx)(c.ForYouItems, {
              items: n
            }), E ? (0, l.jsx)(r.Spinner, {
              className: f.spinner
            }) : null]
          })
        }
      })
    })
  }) : (0, l.jsx)(r.Spinner, {
    className: f.loadingPlaceholder
  })
}
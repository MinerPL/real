"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("759843"),
  i = n("974667"),
  r = n("77078"),
  o = n("510889"),
  u = n("428958"),
  d = n("839743"),
  c = n("322964"),
  f = n("954416");

function h(e) {
  let {
    initialized: t,
    items: n,
    loading: h,
    loadMore: E
  } = e, m = l.useRef(null), p = (0, o.default)("for-you", m);
  (0, u.default)({
    type: s.ImpressionTypes.VIEW,
    name: s.ImpressionNames.NOTIFICATION_CENTER_LANDING,
    properties: {
      empty: 0 === n.length
    }
  }, {
    disableTrack: !t
  }, [t]);
  let S = () => {
    var e;
    let t = null === (e = m.current) || void 0 === e ? void 0 : e.getScrollerState();
    if (null == t) return;
    let n = t.scrollHeight - t.scrollTop - t.offsetHeight;
    n < 1500 && E()
  };
  return t ? 0 === n.length ? (0, a.jsx)(d.ForYouEmptyState, {}) : (0, a.jsx)(a.Fragment, {
    children: (0, a.jsx)(i.ListNavigatorProvider, {
      navigator: p,
      children: (0, a.jsx)(i.ListNavigatorContainer, {
        children: e => {
          let {
            ref: t,
            ...l
          } = e;
          return (0, a.jsxs)(r.AdvancedScroller, {
            className: f.container,
            ref: e => {
              var n;
              m.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
            },
            ...l,
            onScroll: S,
            children: [(0, a.jsx)(c.ForYouItems, {
              items: n
            }), h ? (0, a.jsx)(r.Spinner, {
              className: f.spinner
            }) : null]
          })
        }
      })
    })
  }) : (0, a.jsx)(r.Spinner, {
    className: f.loadingPlaceholder
  })
}
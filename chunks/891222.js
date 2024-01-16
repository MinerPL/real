"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("37983"),
  s = n("884691"),
  a = n("414456"),
  i = n.n(a),
  u = n("907002"),
  r = n("65597"),
  o = n("77078"),
  d = n("804160"),
  c = n("178406"),
  f = n("553275"),
  h = n("691307"),
  m = n("314143"),
  S = n("721302"),
  g = n("888940");

function x(e) {
  let {
    guild: t
  } = e, n = (0, d.useIsMakingRequest)(t.id), s = (0, u.useSpring)({
    height: n ? 3 : 0,
    config: u.config.stiff
  });
  return (0, l.jsx)("div", {
    className: g.loaderContainer,
    children: (0, l.jsx)(u.animated.div, {
      className: g.loaderBar,
      style: s
    })
  })
}

function E(e) {
  let {
    guild: t,
    className: n,
    onPageChange: a,
    onMemberSelect: u
  } = e, E = t.id, T = (0, r.default)([c.default], () => c.default.getEstimatedMemberSearchCountByGuildId(E), [E]), C = (0, d.useIsMakingRequest)(E), p = (0, d.useIsStillIndexing)(E), I = s.useCallback(e => {
    null != e && (null == u || u(e))
  }, [u]), M = (0, f.getSearchState)(p, C, T), A = s.useRef(null), N = s.useRef(null), b = s.useCallback(() => {
    var e;
    null === (e = A.current) || void 0 === e || e.resetSearchText()
  }, []);
  return (0, l.jsx)("div", {
    className: i(g.mainTableContainer, n),
    children: (0, l.jsxs)(o.AdvancedScroller, {
      className: i(g.horizatonalScroller),
      ref: N,
      orientation: "horizontal",
      children: [(0, l.jsx)(S.default, {
        guild: t,
        ref: A
      }), (0, l.jsx)(x, {
        guild: t
      }), (0, l.jsx)(h.default, {
        guild: t,
        onSelectRow: I,
        searchState: M,
        onResetForNewMembers: b
      }), M !== f.SearchState.SUCCESS_STILL_INDEXING && (0, l.jsx)(m.default, {
        guildId: t.id,
        onPageChange: a
      })]
    })
  })
}
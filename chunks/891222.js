"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
});
var l = n("37983"),
  s = n("884691"),
  a = n("414456"),
  i = n.n(a),
  u = n("907002"),
  r = n("65597"),
  d = n("804160"),
  o = n("178406"),
  c = n("553275"),
  f = n("691307"),
  h = n("314143"),
  m = n("721302"),
  S = n("888940");

function g(e) {
  let {
    guild: t
  } = e, n = (0, d.useIsMakingRequest)(t.id), s = (0, u.useSpring)({
    height: n ? 3 : 0,
    config: u.config.stiff
  });
  return (0, l.jsx)("div", {
    className: S.loaderContainer,
    children: (0, l.jsx)(u.animated.div, {
      className: S.loaderBar,
      style: s
    })
  })
}

function x(e) {
  let {
    guild: t,
    className: n,
    onPageChange: a,
    onMemberSelect: u
  } = e, x = (0, r.default)([o.default], () => o.default.getEstimatedMemberSearchCountByGuildId(t.id), [t.id]), E = (0, d.useIsMakingRequest)(t.id), T = (0, d.useIsStillIndexing)(t.id), C = s.useCallback(e => {
    null != e && (null == u || u(e))
  }, [u]), p = (0, c.getSearchState)(T, E, x), I = s.useRef(null), M = s.useCallback(() => {
    var e;
    null === (e = I.current) || void 0 === e || e.resetSearchText()
  }, []);
  return (0, l.jsxs)("div", {
    className: i(S.mainTableContainer, n),
    children: [(0, l.jsx)(m.default, {
      guild: t,
      ref: I
    }), (0, l.jsx)(g, {
      guild: t
    }), (0, l.jsx)(f.default, {
      guild: t,
      onSelectRow: C,
      searchState: p,
      onResetForNewMembers: M
    }), p !== c.SearchState.SUCCESS_STILL_INDEXING && (0, l.jsx)(h.default, {
      guildId: t.id,
      onPageChange: a
    })]
  })
}
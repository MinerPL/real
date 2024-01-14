"use strict";
l.r(t), l.d(t, {
  default: function() {
    return A
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("483366"),
  d = l.n(o),
  C = l("969176"),
  r = l.n(C),
  u = l("65597"),
  c = l("77078"),
  f = l("957255"),
  m = l("810567"),
  E = l("130037"),
  M = l("178406"),
  h = l("645266"),
  T = l("843455"),
  x = l("782340"),
  H = l("863879");
let _ = n.forwardRef(function(e, t) {
  let {
    guild: s
  } = e, o = (0, u.default)([M.default], () => M.default.hasDefaultSearchStateByGuildId(s.id), [s.id]), C = (0, u.default)([f.default], () => f.default.can(T.Permissions.KICK_MEMBERS, s)), _ = n.useCallback(() => {
    null != s && C && (0, c.openModalLazy)(async () => {
      let {
        default: e
      } = await l.el("494440").then(l.bind(l, "494440"));
      return t => (0, a.jsx)(e, {
        ...t,
        guild: s
      })
    })
  }, [s, C]), A = (0, u.default)([M.default], () => M.default.getSearchStateByGuildId(s.id), [s.id], r), L = (0, E.useTrackMemberSearchUsed)(s.id), [g, N] = n.useState(A.query), p = n.useCallback(e => {
    let t = e.trim();
    t.length > 0 && L(), (0, h.updateSearchState)(s.id, {
      query: t
    })
  }, [s.id, L]), S = n.useCallback(d(p, 300), [p]), v = n.useCallback(e => {
    N(e), S(e)
  }, [S]), R = n.useCallback(() => {
    N(""), p("")
  }, [p]);
  return n.useImperativeHandle(t, () => ({
    resetSearchText() {
      N("")
    }
  })), (0, a.jsxs)("div", {
    className: i(H.searchHeaderContainer),
    children: [(0, a.jsx)("div", {
      className: i(H.searchHeader),
      children: o ? (0, a.jsx)(c.Heading, {
        variant: "heading-md/medium",
        children: x.default.Messages.MEMBER_SAFETY_TABLE_TITLE
      }) : (0, a.jsx)(c.Heading, {
        variant: "heading-md/medium",
        children: x.default.Messages.MEMBER_SAFETY_TABLE_TITLE_SEARCH
      })
    }), (0, a.jsx)("div", {
      className: i(H.searchInput),
      children: (0, a.jsx)("div", {
        className: i(H.searchHeader),
        children: (0, a.jsx)(m.default, {
          className: H.searchBar,
          query: g,
          placeholder: x.default.Messages.MEMBER_SAFETY_TABLE_SEARCH_PLACEHOLDER,
          onChange: v,
          onClear: R,
          autoComplete: "off",
          inputProps: {
            autoCapitalize: "none",
            autoCorrect: "off",
            spellCheck: "false"
          }
        })
      })
    }), (0, a.jsx)("div", {
      className: i(H.tableOptions),
      children: C && (0, a.jsx)(c.Button, {
        className: i(H.pruneButton),
        onClick: _,
        "aria-label": x.default.Messages.PRUNE_MEMBERS,
        color: c.Button.Colors.RED,
        look: c.Button.Looks.OUTLINED,
        size: c.Button.Sizes.SMALL,
        children: x.default.Messages.PRUNE
      })
    })]
  })
});
var A = _
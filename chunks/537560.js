"use strict";
a.r(t), a.d(t, {
  default: function() {
    return R
  }
}), a("222007");
var s = a("37983"),
  r = a("884691"),
  l = a("414456"),
  n = a.n(l),
  d = a("446674"),
  u = a("77078"),
  i = a("957255"),
  o = a("810567"),
  c = a("945330"),
  f = a("959097"),
  h = a("263024"),
  m = a("300322"),
  g = a("487269"),
  S = a("998688"),
  T = a("695385"),
  E = a("967241"),
  x = a("648564"),
  v = a("49111"),
  _ = a("782340"),
  N = a("466107");

function R(e) {
  let {
    channel: t,
    className: a,
    onClose: l
  } = e, o = (0, d.useStateFromStores)([i.default], () => i.default.can(v.Permissions.READ_MESSAGE_HISTORY, t)), R = (0, m.useCanStartThread)(t), j = () => {
    l(), (0, E.openThreadSidebarForCreating)(t, void 0, "Thread Browser Empty State")
  }, M = r.useCallback((e, t) => {
    l(), (0, E.openThreadSidebarForViewing)(e, !t, x.OpenThreadAnalyticsLocations.BROWSER)
  }, [l]), C = function(e, t) {
    let [a, s] = r.useState(""), [l, n] = r.useState(!1), [d, u] = r.useState(!1), [i, o] = r.useState([]), c = async () => {
      if (null != a && "" !== a) {
        if (!l) {
          n(!0);
          try {
            let s = await h.default.searchThreads(e, t, a);
            u(!0), o(s)
          } finally {
            n(!1)
          }
        }
      }
    };
    return {
      query: a,
      setQuery: e => {
        s(e), 0 === e.length && u(!1)
      },
      isLoading: l,
      hasResults: d,
      submit: c,
      results: i
    }
  }(t.guild_id, t.id);
  return r.useEffect(() => {
    (0, g.trackThreadBrowserTab)()
  }, []), (0, s.jsx)("div", {
    className: n(a, N.container),
    children: (0, s.jsx)(u.HeadingLevel, {
      component: (0, s.jsxs)("div", {
        className: N.header,
        children: [(0, s.jsx)(f.default, {
          className: N.threadIcon
        }), (0, s.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          className: N.title,
          children: _.default.Messages.THREAD_BROWSER_TITLE
        }), o ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("div", {
            className: N.divider
          }), (0, s.jsx)(A, {
            ...C
          })]
        }) : null, (0, s.jsx)("div", {
          className: N.spacer
        }), R ? (0, s.jsx)(u.Button, {
          size: u.Button.Sizes.MIN,
          className: N.createButton,
          onClick: () => {
            l(), (0, E.openThreadSidebarForCreating)(t, void 0, "Thread Browser Toolbar")
          },
          children: _.default.Messages.CREATE
        }) : null, (0, s.jsx)(u.Clickable, {
          className: N.closeIcon,
          onClick: l,
          "aria-label": _.default.Messages.CLOSE,
          children: (0, s.jsx)(c.default, {})
        })]
      }),
      children: C.hasResults ? (0, s.jsx)(S.default, {
        channel: t,
        startThread: j,
        goToThread: M,
        threadIds: C.results
      }) : (0, s.jsx)(T.default, {
        channel: t,
        startThread: j,
        goToThread: M
      })
    })
  })
}

function A(e) {
  let {
    query: t,
    setQuery: a,
    submit: r,
    isLoading: l
  } = e;
  return (0, s.jsx)(o.default, {
    autoFocus: !0,
    className: N.searchBox,
    query: t,
    isLoading: l,
    onChange: e => a(e),
    onClear: () => a(""),
    onKeyDown: e => "Enter" === e.key && r(),
    placeholder: _.default.Messages.SEARCH_THREAD_NAMES,
    "aria-label": _.default.Messages.SEARCH_THREAD_NAMES
  })
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  o = n("65597"),
  u = n("891722"),
  d = n("77078"),
  c = n("419135"),
  f = n("574933"),
  h = n("692038"),
  p = n("95045"),
  m = n("535260"),
  E = n("982108"),
  C = n("26989"),
  g = n("697218"),
  S = n("994906"),
  _ = n("180968"),
  I = n("763225"),
  T = n("789150"),
  v = n("782340"),
  x = n("63893"),
  N = n("953035");

function A(e) {
  let {
    userId: t,
    guildId: n,
    onNavigate: l
  } = e, s = (0, I.useProfileThemedPanelBackground)(t, n, .7, d.tokens.colors.BACKGROUND_PRIMARY);
  return (0, a.jsxs)("div", {
    className: i(x.header),
    style: {
      backgroundColor: s
    },
    children: [(0, a.jsx)("div", {
      className: i(x.headerTitle),
      children: (0, a.jsxs)(d.Clickable, {
        className: i(N.backButton),
        onClick: () => null == l ? void 0 : l(T.ModViewPanel.INFO),
        children: [(0, a.jsx)(u.ArrowSmallLeftIcon, {
          className: i(N.backButtonIcon),
          width: 20,
          height: 20
        }), (0, a.jsx)(d.Heading, {
          variant: "heading-md/semibold",
          children: v.default.Messages.BACK
        })]
      })
    }), (0, a.jsx)("div", {
      className: i(N.options),
      children: (0, a.jsx)(d.KeyCombo, {
        shortcut: "esc",
        keyClassName: N.keyComboInner,
        className: N.keyComboContainer
      })
    })]
  })
}

function M(e) {
  var t, n;
  let {
    userId: s,
    guildId: u,
    location: v,
    className: M,
    onNavigate: R
  } = e, j = l.useRef(null), L = (0, o.default)([E.default], () => E.default.getGuildSidebarState(u), [u]), O = l.useRef(0), [y, P] = l.useState(null !== (t = null == L ? void 0 : L.details.additionalSearchQuery) && void 0 !== t ? t : {}), {
    messageHistoryState: b
  } = (0, _.useServerActivityForUser)(s, u, y), D = (0, o.default)([g.default], () => g.default.getUser(s), [s]), U = (0, o.default)([C.default], () => C.default.getMember(u, s), [u, s]), w = (0, I.useProfileThemedPanelBackground)(s, u);
  l.useLayoutEffect(() => {
    let e = null == L ? void 0 : L.details.scrollOffset;
    if (null != e) {
      var t;
      null === (t = j.current) || void 0 === t || t.scrollTo({
        to: e,
        animate: !1
      })
    }
  }, []);
  let F = l.useCallback(e => {
      if (null == L) return;
      let t = e.target.scrollTop;
      O.current = t, (0, S.openGuildMemberModViewSidebar)(u, s, L.baseChannelId, {
        modViewPanel: T.ModViewPanel.MESSAGE_HISTORY,
        additionalSearchQuery: y,
        scrollOffset: O.current
      })
    }, [u, s, L, y]),
    k = (0, r.throttle)(F, 300),
    V = l.useCallback(e => {
      if (null == L) return;
      let t = {
        ...y,
        offset: 25 * e
      };
      P(t), (0, S.openGuildMemberModViewSidebar)(u, s, L.baseChannelId, {
        modViewPanel: T.ModViewPanel.MESSAGE_HISTORY,
        additionalSearchQuery: t,
        scrollOffset: O.current
      })
    }, [u, s, L, y]),
    B = null !== (n = null == y ? void 0 : y.offset) && void 0 !== n ? n : 0,
    H = (0, o.default)([f.default], () => {
      if (null == b.result) return [];
      let e = b.result.messages,
        t = (0, c.createASTHighlighter)("");
      return e.map(e => e.map(e => {
        let n = f.default.getMessage(e.id, e.channel_id),
          a = (0, h.createMessageRecord)(e);
        return null != n && (a = a.merge({
          attachments: n.attachments,
          embeds: n.embeds
        })), a.isSearchHit ? a.set("customRenderedContent", (0, p.default)(a, {
          postProcessor: t,
          allowHeading: !0,
          allowList: !0
        })) : a
      }))
    }, [b.result]),
    G = l.useMemo(() => {
      var e, t, n, a;
      return null == b.result ? {
        documentsIndexed: 0,
        isSearching: !0,
        isIndexing: !1,
        isHistoricalIndexing: !1,
        offset: B,
        totalResults: 0,
        hasError: !1,
        showBlockedResults: !1,
        showNoResultsAlt: !1
      } : {
        documentsIndexed: null !== (e = b.result.documents_indexed) && void 0 !== e ? e : 0,
        isSearching: !1,
        isIndexing: null !== (t = b.result.doing_deep_historical_index) && void 0 !== t && t,
        isHistoricalIndexing: null !== (n = b.result.doing_deep_historical_index) && void 0 !== n && n,
        offset: B,
        totalResults: null !== (a = b.result.total_results) && void 0 !== a ? a : 0,
        hasError: !1,
        showBlockedResults: !1,
        showNoResultsAlt: !1
      }
    }, [b.result, B]);
  return null == D || null == U || null == G ? null : (0, a.jsxs)("div", {
    className: i(x.container, M),
    style: {
      backgroundColor: w
    },
    children: [(0, a.jsx)(A, {
      guildId: u,
      userId: s,
      onNavigate: R
    }), (0, a.jsx)(d.AdvancedScroller, {
      className: i(N.innerContainer),
      ref: j,
      onScroll: k,
      children: (0, a.jsx)(m.default, {
        searchResults: H,
        search: G,
        searchId: s,
        renderEmbeds: !0,
        blockCount: 0,
        scrollTo: () => {},
        onChangePage: V
      })
    })]
  })
}
"use strict";
a.r(t), a.d(t, {
  default: function() {
    return b
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
  s = a("446674"),
  i = a("713810"),
  d = a("404103"),
  r = a("350928"),
  u = a("185014"),
  o = a("60036"),
  c = a("435123"),
  f = a("537594"),
  m = a("38654"),
  h = a("471671"),
  E = a("555158"),
  g = a("395118"),
  I = a("299039"),
  _ = a("816454"),
  x = a("601414"),
  v = a("146005"),
  S = a("887446"),
  C = a("75360"),
  N = a("216364"),
  p = a("405700"),
  T = a("806727"),
  A = a("807058"),
  j = a("815619"),
  M = a("515631"),
  D = a("782340"),
  F = a("846928");
let L = n.memo(function(e) {
    let {
      guildId: t
    } = e, a = (0, s.useStateFromStores)([m.default], () => m.default.isViewingRoles(t));
    return a ? (0, l.jsx)(E.default, {
      messageType: E.HelpMessageTypes.WARNING,
      children: D.default.Messages.GUILD_FEED_VIEW_AS_ROLE_WARNING
    }) : null
  }),
  R = n.memo(function(e) {
    let {
      guildId: t,
      hasMoreItems: a,
      scrollerRef: s,
      error: i,
      fetchPage: d,
      onReloadClick: r
    } = e, u = n.useRef(null);
    return (n.useEffect(() => {
      var e;
      let t = u.current,
        l = null === (e = s.current) || void 0 === e ? void 0 : e.getScrollerNode();
      if (null == l || null == t || !a) return;
      let n = new IntersectionObserver(e => {
        for (let t of e) t.intersectionRatio > 0 && d()
      }, {
        root: l,
        rootMargin: "0px 0px 200px 0px",
        threshold: 0
      });
      return n.observe(t), () => {
        n.disconnect()
      }
    }, [s, u, d, t, a]), null != i) ? (0, l.jsx)(N.GuildFeedPaginationError, {
      guildId: t,
      onReloadClick: d
    }) : a ? (0, l.jsx)("div", {
      className: F.container,
      ref: u,
      children: (0, l.jsx)(p.default, {
        count: 1
      })
    }) : (0, l.jsx)(N.GuildFeedFooter, {
      guildId: t,
      onReloadClick: r
    })
  });

function b(e) {
  var t, a, m, E, D;
  let {
    guild: b,
    renderMode: G,
    scrollerRef: O,
    seenManagerRef: y
  } = e, H = (0, C.default)(), [k, U, w, B] = (0, s.useStateFromStoresArray)([u.default], () => [M.GuildFeedSectionTypes.READ, M.GuildFeedSectionTypes.UNREAD, M.GuildFeedSectionTypes.HIGHLIGHTED, M.GuildFeedSectionTypes.ALL].map(e => u.default.getFeedItemSection(b.id, e))), P = (0, s.useStateFromStores)([u.default], () => u.default.getLoadId(b.id)), V = (0, s.useStateFromStores)([S.default], () => S.default.getHomeSessionId(b.id)), {
    loading: W,
    error: K,
    fetchFresh: z,
    fetchPage: Y
  } = (0, c.default)({
    guildId: b.id,
    highlightedItemData: H
  }), {
    hasMoreItems: Z
  } = (0, s.useStateFromStores)([u.default], () => u.default.getPaginationStatus(b.id)), {
    hasNewHeader: X
  } = v.GuildHomeHeaderRedesignExperiment.useExperiment({
    guildId: b.id,
    location: "00f40d_1"
  }, {
    autoTrackExposure: !1
  }), {
    homeHeaderScroll: J
  } = (0, j.useHomeHeader)(b);
  n.useEffect(() => (d.default.initialize(), () => {
    d.default.terminate()
  }), []), n.useLayoutEffect(() => {
    if (null == P || null == V) return;
    (0, i.sendFeedShownAnalytics)(b.id);
    let e = (0, _.getMainWindowId)(),
      t = new r.default({
        guildId: b.id,
        loadId: P,
        homeSessionId: V,
        windowId: e,
        isPaused: !h.default.isFocused(e)
      });
    return t.initialize(), y.current = t, () => {
      t.terminate()
    }
  }, [y, b.id, P, V]);
  let q = function(e) {
      let [t, a] = n.useState(null);
      return n.useEffect(() => {
        var t;
        let l = null === (t = e.current) || void 0 === t ? void 0 : t.getScrollerNode();
        if (null == l) return;
        let n = new ResizeObserver(e => {
          for (let t of e) a(t.contentRect.height)
        });
        return n.observe(l), () => {
          n.disconnect()
        }
      }, [e]), t
    }(O),
    Q = n.useMemo(() => G !== M.GuildFeedRenderMode.NEW ? [] : [...B].sort((e, t) => -I.default.compare((0, o.default)(e).id, (0, o.default)(t).id)), [B, G]),
    $ = n.useCallback(async () => {
      var e;
      await (null === (e = y.current) || void 0 === e ? void 0 : e.maybeFlushSeenItems(g.ForceFlushType.IMMEDIATE)), z({
        force: !0,
        flushSeenItems: () => {
          var e;
          return null === (e = y.current) || void 0 === e ? void 0 : e.maybeFlushSeenItems(g.ForceFlushType.IMMEDIATE)
        }
      })
    }, [y, z]);
  n.useEffect(() => {
    if (W === u.LoadingStatus.LOADING_FRESH_FEED) {
      var e, t;
      X ? null === (e = O.current) || void 0 === e || e.scrollTo({
        to: J
      }) : null === (t = O.current) || void 0 === t || t.scrollToTop()
    }
  }, [W, X, J]);
  let ee = 0 === B.length,
    {
      showFeedback: et,
      setOnDismissedFeedback: ea
    } = (0, x.useShowFeedback)();
  if (ee) return W === u.LoadingStatus.LOADING_FRESH_FEED ? (0, l.jsx)("div", {
    className: F.container,
    children: (0, l.jsx)(p.default, {})
  }) : null != K ? (0, l.jsx)(N.GuildFeedError, {
    guildId: b.id,
    onReloadClick: $
  }) : (0, l.jsx)(N.GuildFeedEmpty, {
    guildId: b.id,
    onReloadClick: $
  });
  if (G === M.GuildFeedRenderMode.TOP) return (0, l.jsxs)("div", {
    className: F.container,
    children: [(0, l.jsx)(T.default, {
      guild: b
    }), B.map((e, t) => (0, l.jsx)(f.default, {
      guildId: b.id,
      itemId: e.id,
      scrollerHeight: q,
      scrollerRef: O,
      showFeedback: 0 === t && et,
      setOnDismissedFeedback: ea
    }, e.id)), (0, l.jsx)(R, {
      guildId: b.id,
      hasMoreItems: null != Z && Z,
      scrollerRef: O,
      error: K,
      fetchPage: Y,
      onReloadClick: $
    })]
  });
  if (G === M.GuildFeedRenderMode.NEW) return (0, l.jsxs)("div", {
    className: F.container,
    children: [(0, l.jsx)(T.default, {
      guild: b
    }), Q.map((e, t) => (0, l.jsx)(f.default, {
      guildId: b.id,
      itemId: e.id,
      scrollerHeight: q,
      scrollerRef: O,
      showFeedback: 0 === t && et,
      setOnDismissedFeedback: ea
    }, e.id)), (0, l.jsx)(R, {
      guildId: b.id,
      hasMoreItems: null != Z && Z,
      scrollerRef: O,
      error: K,
      fetchPage: Y,
      onReloadClick: $
    })]
  });
  let el = null !== (D = null !== (E = null === (t = w[0]) || void 0 === t ? void 0 : t.id) && void 0 !== E ? E : null === (a = U[0]) || void 0 === a ? void 0 : a.id) && void 0 !== D ? D : null === (m = k[0]) || void 0 === m ? void 0 : m.id;
  return (0, l.jsxs)("div", {
    className: F.container,
    children: [(0, l.jsx)(L, {
      guildId: b.id
    }), (0, l.jsx)(T.default, {
      guild: b
    }), w.map(e => (0, l.jsx)(f.default, {
      guildId: b.id,
      itemId: e.id,
      scrollerHeight: q,
      scrollerRef: O,
      showFeedback: e.id === el && et,
      setOnDismissedFeedback: ea
    }, e.id)), U.map(e => (0, l.jsx)(f.default, {
      guildId: b.id,
      itemId: e.id,
      scrollerHeight: q,
      scrollerRef: O,
      showFeedback: e.id === el && et,
      setOnDismissedFeedback: ea
    }, e.id)), k.length > 0 ? (0, l.jsx)(A.default, {}) : null, k.map(e => (0, l.jsx)(f.default, {
      guildId: b.id,
      itemId: e.id,
      scrollerHeight: q,
      scrollerRef: O,
      showFeedback: e.id === el && et,
      setOnDismissedFeedback: ea
    }, e.id)), (0, l.jsx)(R, {
      guildId: b.id,
      hasMoreItems: null != Z && Z,
      scrollerRef: O,
      error: K,
      fetchPage: Y,
      onReloadClick: $
    })]
  })
}
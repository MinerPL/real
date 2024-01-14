"use strict";
n.r(t), n.d(t, {
  ITEM_HEIGHT: function() {
    return b
  },
  default: function() {
    return U
  }
}), n("222007"), n("808653");
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("917351"),
  a = n.n(s),
  u = n("96386"),
  d = n("798609"),
  c = n("716241"),
  f = n("296141"),
  p = n("986632"),
  m = n("45961"),
  h = n("515059"),
  E = n("501536"),
  S = n("124299"),
  g = n("476765"),
  C = n("507217"),
  T = n("240249"),
  v = n("972620"),
  y = n("524768"),
  x = n("389153"),
  I = n("586450"),
  N = n("41884"),
  _ = n("355263"),
  A = n("317041"),
  R = n("49111"),
  O = n("782340"),
  M = n("253184"),
  k = n("327769");
let b = 56,
  P = [8, 8, 0, 8],
  L = a.debounce(() => {
    (0, c.trackWithMetadata)(R.AnalyticEvents.APPLICATION_COMMAND_BROWSER_SCROLLED)
  }, 300);
var U = i.forwardRef(function(e, t) {
  let {
    channel: n,
    canOnlyUseTextCommands: r
  } = e, s = i.useRef(!1), a = i.useRef(0), [U, D] = i.useState(0), w = i.useRef(null), [B, H] = i.useState(!1), F = p.ApplicationCommandDiscoveryPickerStore.useStore(e => e.activeCategoryIndex);
  i.useEffect(() => {
    (0, c.trackWithMetadata)(R.AnalyticEvents.APPLICATION_COMMAND_BROWSER_OPENED)
  }, []);
  let {
    sectionDescriptors: G,
    activeSections: K,
    commandsByActiveSection: V,
    hasMoreAfter: W,
    commands: Y,
    filteredSectionId: q,
    scrollDown: z,
    filterSection: Q
  } = T.useDiscovery(n, {
    commandType: d.ApplicationCommandType.CHAT,
    builtIns: r ? v.BuiltInCommandFilter.ONLY_TEXT : v.BuiltInCommandFilter.ALLOW,
    applicationCommands: !r
  }, {
    placeholderCount: 7,
    limit: A.DISCOVERY_COMMANDS_QUERY_LIMIT,
    includeFrecency: !0
  }), X = (0, m.useSynchronizedActiveCategoryIndexForScrollPosition)({
    activeCategoryIndex: F,
    isScrolling: s,
    listRef: w,
    onActiveCategoryIndexChange: e => {
      let t = K[e];
      if (null != t) {
        let e = G.findIndex(e => e.id === t.id);
        p.ApplicationCommandDiscoveryPickerStore.setActiveCategoryIndex(e)
      }
    },
    scrollOffset: 20,
    searchQuery: ""
  }), Z = e => {
    let t = K.length,
      n = V.reduce((e, t) => e + t.data.length, 0) - (W ? 7 : 0),
      l = 48 * t + n * b - 512;
    W && e + 420 > l && z(), X(e), L(), a.current = e
  };
  i.useEffect(() => {
    Z(a.current)
  }, [Y]);
  let J = i.useCallback(e => {
      let t = e === K.length - 1;
      return t && !W ? 0 : 16
    }, [K.length, W]),
    $ = V.map(e => e.data.length);
  i.useEffect(() => {
    null != w.current && B && null != U && w.current.scrollRowIntoView(U)
  }, [B, U]), i.useLayoutEffect(() => {
    if (null != q) {
      var e;
      null === (e = w.current) || void 0 === e || e.scrollToSectionTop(0)
    }
  }, [Y, q]);
  let ee = i.useCallback(e => {
      if (e.id === q || e.id === A.BuiltInSectionId.FRECENCY) {
        var t;
        Q(null), null === (t = w.current) || void 0 === t || t.scrollToSectionTop(0)
      } else Q(e.id)
    }, [Q, q]),
    et = i.useCallback((e, t, l) => {
      C.setActiveCommand({
        channelId: n.id,
        command: e,
        section: t,
        location: y.ApplicationCommandTriggerLocations.DISCOVERY,
        triggerSection: l
      })
    }, [n.id]);
  i.useImperativeHandle(t, () => ({
    onTabOrEnter: e => {
      if (null == U) return !e && (D(0), !0);
      if (null == U) return !1;
      let t = 0,
        n = 0;
      for (let e of V)
        if (t = n, U < (n += e.data.length)) {
          let n = e.data[U - t],
            l = G.find(e => e.id === n.applicationId);
          et(n, l, (0, x.getCommandTriggerSection)(e.section));
          break
        } return !0
    },
    onMoveSelection: e => {
      if (0 === Y.length) return !0;
      let t = W ? 7 : 0,
        n = Y.length + t,
        l = null == U ? 0 : U + e;
      return l >= n ? l = n - 1 : l < 0 && (l = 0), D(l), H(!0), !0
    }
  }), [Y.length, V, W, G, et, U]);
  let en = i.useCallback(e => {
      let t = K[e];
      if (null == t) return null;
      let i = (0, _.getIconComponent)(t),
        r = (0, l.jsx)(i, {
          channel: n,
          section: t,
          width: 16,
          height: 16,
          padding: 0
        });
      return (0, l.jsx)(h.default, {
        className: M.categoryHeader,
        icon: r,
        children: t.name
      }, e)
    }, [n, K]),
    el = i.useCallback((e, t) => {
      let n = e === K.length - 1,
        i = K[e],
        {
          data: r
        } = V[e];
      return (0, l.jsxs)("ul", {
        role: "group",
        "aria-label": i.name,
        className: o(M.categorySection, {
          [M.categorySectionLast]: n
        }),
        children: [t, 0 === r.length && (0, l.jsx)(u.default, {
          message: O.default.Messages.APPLICATION_COMMAND_NO_PERMISSIONS.format({
            applicationName: i.name
          }),
          noResultsImageURL: k,
          className: M.noSearchResults
        })]
      }, e)
    }, [K, V]),
    ei = i.useCallback((e, t) => {
      var i;
      let r = V[t.sectionIndex],
        o = r.data[t.sectionRowIndex],
        s = "".concat(r.section.id, ":").concat(null !== (i = null == o ? void 0 : o.id) && void 0 !== i ? i : e);
      if (null == o || r.section.id !== o.applicationId && r.section.id !== A.BuiltInSectionId.FRECENCY || o.inputType === y.ApplicationCommandInputType.PLACEHOLDER) return (0, l.jsx)(N.default, {}, s);
      let a = G.find(e => e.id === o.applicationId);
      return (0, l.jsx)(E.default.NewCommand, {
        index: e,
        command: o,
        channel: n,
        className: M.itemWrapper,
        selected: U === e,
        showImage: r.section.id !== o.applicationId,
        section: a,
        onClick: () => et(o, a, (0, x.getCommandTriggerSection)(r.section)),
        onHover: () => {
          D(null), H(!1)
        }
      }, s)
    }, [n, V, et, G, U]),
    er = (0, g.useUID)();
  return (0, f.useChannelEditorPopup)(er, !0, (0, E.getAutocompleteRowId)(U)), i.useEffect(() => () => {
    (0, f.dismissChannelEditorPopup)()
  }, []), (0, l.jsxs)(E.default, {
    id: er,
    className: M.outerWrapper,
    innerClassName: M.wrapper,
    onMouseDown: j,
    children: [(0, l.jsx)(I.default, {
      className: M.rail,
      channel: n,
      sections: G,
      filteredSectionId: q,
      activeCategoryIndex: F,
      onSectionClick: ee,
      applicationCommandListRef: w
    }), (0, l.jsx)(S.default, {
      role: "listbox",
      className: M.list,
      listPadding: P,
      onScroll: Z,
      renderRow: ei,
      renderSection: el,
      renderSectionHeader: en,
      rowCount: K.length,
      rowCountBySection: $,
      rowHeight: b,
      sectionHeaderHeight: 32,
      sectionMarginBottom: J,
      ref: w,
      stickyHeaders: !0
    })]
  })
});

function j(e) {
  e.preventDefault()
}
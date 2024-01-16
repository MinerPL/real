"use strict";
n.r(t), n.d(t, {
  default: function() {
    return W
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("446674"),
  a = n("308472"),
  u = n("77078"),
  d = n("272030"),
  c = n("96386"),
  f = n("685665"),
  p = n("917764"),
  m = n("986632"),
  h = n("538282"),
  E = n("522096"),
  S = n("845579"),
  g = n("697218"),
  C = n("800762"),
  T = n("476765"),
  v = n("461380"),
  y = n("93393"),
  x = n("153769"),
  I = n("671434"),
  N = n("229915"),
  _ = n("368121"),
  A = n("719923"),
  R = n("389480"),
  O = n("78581"),
  M = n("262439"),
  k = n("557585"),
  b = n("553372"),
  P = n("122557"),
  L = n("478477"),
  U = n("181021"),
  j = n("299069"),
  D = n("569717"),
  w = n("782340"),
  B = n("872759");
let H = [8, 0, 8, 8];

function F(e) {
  return 0 === e ? 16 : 32
}

function G(e) {
  let {
    categoryInfo: t,
    collapsed: n,
    toggleCollapsed: i,
    index: r
  } = e;
  return (0, l.jsxs)(u.Clickable, {
    className: o(B.sectionHeader, {
      [B.notFirstSectionHeader]: 0 !== r
    }),
    onClick: i,
    children: [function() {
      switch (t.type) {
        case R.SoundboardSoundGridSectionType.FAVORITES:
          return (0, l.jsx)(I.default, {
            className: B.headerIcon
          });
        case R.SoundboardSoundGridSectionType.RECENTLY_HEARD:
          return (0, l.jsx)(y.default, {
            className: B.headerIcon
          });
        case R.SoundboardSoundGridSectionType.FREQUENTLY_USED:
          return (0, l.jsx)(a.AnalyticsIcon, {
            className: B.headerIcon
          });
        case R.SoundboardSoundGridSectionType.GUILD:
          return (0, l.jsx)(p.default, {
            guild: t.guild,
            height: 16,
            width: 16
          });
        case R.SoundboardSoundGridSectionType.DEFAULTS:
          return (0, l.jsx)(x.default, {
            className: B.headerIcon
          });
        case R.SoundboardSoundGridSectionType.SEARCH:
          return (0, l.jsx)(N.default, {
            className: B.headerIcon
          })
      }
    }(), (0, l.jsx)(u.Heading, {
      variant: "eyebrow",
      color: "none",
      className: B.sectionTitle,
      children: function() {
        switch (t.type) {
          case R.SoundboardSoundGridSectionType.FAVORITES:
            return w.default.Messages.FAVORITES;
          case R.SoundboardSoundGridSectionType.RECENTLY_HEARD:
            return w.default.Messages.RECENTLY_HEARD;
          case R.SoundboardSoundGridSectionType.FREQUENTLY_USED:
            return w.default.Messages.FREQUENTLY_USED;
          case R.SoundboardSoundGridSectionType.GUILD:
            return t.guild.name;
          case R.SoundboardSoundGridSectionType.DEFAULTS:
            return w.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
          case R.SoundboardSoundGridSectionType.SEARCH:
            return w.default.Messages.SEARCH_RESULTS_SECTION_LABEL
        }
      }()
    }), (0, l.jsx)(v.default, {
      className: B.headerIcon,
      direction: n ? v.default.Directions.RIGHT : v.default.Directions.DOWN
    })]
  })
}

function K() {
  return (0, l.jsx)(c.default, {
    message: w.default.Messages.SOUNDBOARD_SEARCH_EMPTY_STATE_BODY
  })
}

function V(e) {
  let {
    descriptors: t,
    soundButtonProps: n,
    rowIndex: r,
    isUsingKeyboardNavigation: o,
    suppressPlaySound: s,
    gridRowProps: a,
    getItemProps: u,
    onSelectItem: d,
    onItemMouseEnter: c,
    buttonOverlay: f
  } = e, p = m.SoundboardPickerStore.useStore(e => e.inspectedExpressionPosition);
  return (0, l.jsx)("ul", {
    ...a,
    className: B.soundRow,
    children: t.map((e, t) => {
      let l = "item-".concat(t),
        a = o && p.rowIndex === r && p.columnIndex === t;
      switch (e.item.type) {
        case R.SoundboardSoundItemType.SOUND:
          return (0, i.createElement)(b.default, {
            ...u(t),
            ...n,
            key: "".concat(l, "-").concat(e.item.sound.soundId),
            sound: e.item.sound,
            suppressPlaySound: s,
            focused: a,
            onMouseEnter: () => c(t),
            onSelectItem: () => d(e),
            enableSecondaryActions: !0,
            buttonOverlay: f
          });
        case R.SoundboardSoundItemType.ADD_SOUND:
          return (0, i.createElement)(P.default, {
            ...u(t),
            key: l,
            guild: e.item.guild,
            focused: a
          })
      }
    })
  })
}

function W(e) {
  let {
    guildId: t,
    channel: r,
    containerWidth: o,
    onClose: a,
    onSelect: c,
    suppressPlaySound: p = !1,
    shouldShowUpsell: v = !0,
    gridNotice: y,
    soundButtonOverlay: x,
    listPadding: I,
    renderHeader: N,
    defaultSoundsOnly: b = !1
  } = e, {
    analyticsLocations: P
  } = (0, f.default)(), [W, Y] = i.useState(null), q = (0, s.useStateFromStores)([g.default], () => g.default.getCurrentUser()), z = (0, s.useStateFromStores)([C.default], () => {
    var e;
    return C.default.getVoiceState(t, null !== (e = null == q ? void 0 : q.id) && void 0 !== e ? e : "")
  }), Q = (null == z ? void 0 : z.selfDeaf) || (null == z ? void 0 : z.mute) || (null == z ? void 0 : z.suppress), X = (0, h.useExpressionPickerStore)(e => e.searchQuery), Z = (0, T.useUID)(), {
    categories: J
  } = (0, k.default)(r, void 0, b), [$, ee] = i.useState([]), et = (0, k.useSearchCategories)(J, $, X), en = S.SoundboardPickerCollapsedSections.useSetting(), el = i.useMemo(() => new Set(en), [en]), ei = null == r, er = A.default.canUseCustomCallSounds(q), eo = i.useCallback(e => {
    let t = !el.has(e);
    t ? el.add(e) : el.delete(e), S.SoundboardPickerCollapsedSections.updateSetting(Array.from(el))
  }, [el]), es = i.useCallback((e, t) => {
    if (!p && (0, O.canUseSoundboardSound)(q, e, r, !1)) {
      var n;
      (0, O.playSound)(e, null !== (n = null == r ? void 0 : r.id) && void 0 !== n ? n : "", t)
    } else {
      if ((0, O.canUseSoundboardSound)(q, e, r)) return;
      v && Y(e)
    }
  }, [p, q, r, v]), ea = i.useCallback(e => {
    switch (e.item.type) {
      case R.SoundboardSoundItemType.SOUND:
        return null == c || c(e.item.sound), es(e.item.sound, P);
      case R.SoundboardSoundItemType.ADD_SOUND:
        return (0, D.default)(e.item.guild.id)
    }
  }, [P, es, c]), eu = i.useCallback((e, t, n, i, o) => (0, l.jsx)(V, {
    descriptors: e,
    rowIndex: n.rowIndex,
    isUsingKeyboardNavigation: n.isUsingKeyboardNavigation,
    gridRowProps: t,
    getItemProps: i,
    onItemMouseEnter: o,
    suppressPlaySound: p,
    onSelectItem: ea,
    soundButtonProps: {
      channel: r,
      interactive: ei ? er : !Q,
      forceSecondaryActions: ei,
      analyticsLocations: P
    },
    buttonOverlay: x
  }, "row-".concat(t["aria-rowindex"])), [ea, r, Q, p, P, ei, er, x]), ed = i.useCallback((e, t) => {
    let n = "".concat(e.key);
    return (0, l.jsx)(G, {
      categoryInfo: e.categoryInfo,
      toggleCollapsed: () => eo(n),
      collapsed: el.has(n),
      index: t
    }, "header-".concat(n))
  }, [el, eo]), ec = i.useCallback(e => ee((0, M.default)(e, J, q, r)), [r, q, J]), ef = i.useCallback(e => {
    (0, d.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("136137").then(n.bind(n, "136137"));
      return t => (0, l.jsx)(e, {
        ...t
      })
    })
  }, []), ep = i.useCallback(() => (0, l.jsx)(u.Clickable, {
    tabIndex: 0,
    className: B.settingsClickArea,
    onClick: ef,
    "aria-label": w.default.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
    children: (0, l.jsx)(_.default, {
      className: B.settingsIcon
    })
  }), [ef]), em = i.useCallback(e => (0, l.jsx)(L.default, {
    soundboardListRef: e,
    categories: J,
    listPadding: I
  }), [J, I]), eh = i.useCallback(e => {
    if ((null == e ? void 0 : e.item.type) === R.SoundboardSoundItemType.SOUND) {
      var t;
      return (0, l.jsx)(U.default, {
        closePicker: a,
        soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
      })
    }
    return null
  }, [a]);
  return (0, l.jsxs)(l.Fragment, {
    children: [null != W && (0, l.jsx)(j.default, {
      onClose: () => Y(null),
      closePopout: a,
      sound: W,
      channel: r
    }), (0, l.jsx)(E.default, {
      categories: et,
      collapsedCategories: el,
      containerWidth: o,
      store: m.SoundboardPickerStore,
      onSelectItem: ea,
      onSearchExpressions: ec,
      hasSearchResults: $.length > 0,
      defaultSearchPlaceholder: w.default.Messages.SOUNDBOARD_SEARCH_PLACEHOLDER,
      renderRow: eu,
      renderSectionHeader: ed,
      renderCategoryList: em,
      renderHeaderAccessories: ep,
      rowHeight: 48,
      sectionHeaderHeight: F,
      listPadding: H,
      itemNodeWidth: 150,
      gridNavigatorId: Z,
      renderEmptySearchState: K,
      renderInspector: eh,
      gridNotice: y,
      renderHeader: N
    })]
  })
}
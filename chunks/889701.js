"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ee
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  r = n("483366"),
  o = n.n(r),
  s = n("16470"),
  a = n("446674"),
  u = n("769846"),
  d = n("77078"),
  c = n("997289"),
  f = n("812204"),
  p = n("685665"),
  m = n("986632"),
  h = n("538282"),
  E = n("45961"),
  S = n("626301"),
  g = n("716849"),
  C = n("552917"),
  T = n("917247"),
  v = n("845579"),
  y = n("697218"),
  x = n("599110"),
  I = n("159885"),
  N = n("570759"),
  _ = n("866353"),
  A = n("178207"),
  R = n("256860"),
  O = n("364685"),
  M = n("161585"),
  k = n("585948"),
  b = n("234175"),
  P = n("451300"),
  L = n("668333"),
  U = n("313790"),
  j = n("908408"),
  D = n("641680"),
  w = n("560241"),
  B = n("49111"),
  H = n("642358");
let F = (0, I.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
  G = (0, I.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
  K = (0, I.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
  V = (0, I.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
  W = (0, I.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
  Y = (0, I.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
  q = (0, I.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
  z = (0, I.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
  Q = Y + 2 * z,
  X = q + 2 * z,
  Z = o(A.trackStickerSearchEmpty, 200),
  J = o(A.trackStickerSearchResultsViewed, 200),
  $ = i.forwardRef(function(e, t) {
    var r;
    let {
      containerWidth: o,
      channel: u,
      onSelectSticker: I,
      closePopout: Y
    } = e, {
      location: q
    } = (0, c.useAnalyticsContext)(), {
      AnalyticsLocationProvider: z
    } = (0, p.default)(f.default.STICKER_PICKER);
    (0, g.useMaybeFetchPremiumLikelihood)(C.default);
    let $ = (null === (r = (0, T.usePremiumTrialOffer)()) || void 0 === r ? void 0 : r.subscription_trial) != null,
      ee = i.useRef(null),
      et = i.useRef(null),
      en = i.useRef(null),
      el = (0, N.useStickerPickerUpsellStore)(e => e.showPremiumUpsell),
      [ei, er] = (0, h.useExpressionPickerStore)(e => [e.searchQuery, e.isSearchSuggestion], s.default),
      eo = i.useRef("");
    i.useImperativeHandle(t, () => ({
      onPickerOpen: eP
    }));
    let es = (0, R.useFilteredStickerPackCategories)(u),
      ea = 0 === es.filter(e => e.type !== M.StickerCategoryTypes.EMPTY_GUILD_UPSELL).length,
      eu = (0, E.useExpressionPickerGridWidth)({
        gridWrapperRef: ee,
        containerWidth: o,
        showingEmptyState: ea,
        listPaddingLeft: G,
        listScrollbarWidth: 8
      }),
      ed = v.StickerPickerCollapsedSections.useSetting(),
      ec = i.useMemo(() => new Set(ed), [ed]),
      ef = (0, a.useStateFromStores)([y.default], () => y.default.getCurrentUser()),
      ep = i.useMemo(() => (0, D.getFilteredStickers)(ei, ef, u), [ei, ef, u]),
      em = (0, R.useFavoriteStickers)(),
      eh = (0, R.useLatestFrecentStickers)(),
      eE = (0, a.useStateFromStoresObject)([O.default], () => O.default.getAllGuildStickers()),
      {
        sendable: eS = [],
        sendableWithPremium: eg = []
      } = null != ep ? ep : {},
      eC = eS.length + eg.length,
      eT = i.useCallback(e => {
        "" === ei ? (0, A.trackStickerSelect)(e) : (0, A.trackStickerSearchSelect)(e, ei, eC), I(e.sticker, M.StickerSelectLocation.STICKER_PICKER)
      }, [I, ei, eC]),
      ev = null != eu && eu > F,
      {
        rowCount: ey,
        rowCountBySection: ex,
        stickersGrid: eI,
        gutterWidth: eN,
        columnCounts: e_
      } = (0, R.useStickersGrid)({
        filteredStickers: ep,
        stickersCategories: es,
        collapsedStickersCategories: ec,
        listWidth: eu,
        listPaddingRight: K,
        stickerNodeMargin: ev ? V : W,
        stickerNodeWidth: ev ? Q : X
      }),
      eA = i.useCallback((e, t) => {
        let {
          location: i
        } = t;
        switch (e.type) {
          case M.StickerGridItemTypes.CREATE_STICKER:
            x.default.track(B.AnalyticEvents.OPEN_MODAL, {
              type: B.AnalyticsSections.CREATE_STICKER_MODAL,
              location: q
            }), (0, d.openModalLazy)(async () => {
              let {
                default: t
              } = await n.el("54666").then(n.bind(n, "54666"));
              return n => (0, l.jsx)(t, {
                guildId: e.guild_id,
                ...n
              })
            });
            break;
          case M.StickerGridItemTypes.STICKER:
            null != e.sticker && (0, _.isSendableSticker)(e.sticker, ef, u) && eT(e)
        }
      }, [q, ef, u, eT]),
      {
        getItemProps: eR,
        getRowProps: eO,
        gridContainerProps: eM,
        handleGridContainerKeyDown: ek,
        isUsingKeyboardNavigation: eb
      } = (0, k.useKeyboardNavigation)({
        columnCounts: e_,
        stickersListRef: et,
        stickersGrid: eI,
        onGridItemSelect: eA,
        store: m.StickerPickerStore,
        setInspectedStickerPosition: m.StickerPickerStore.setInspectedExpressionPosition,
        gridNavigatorId: w.GRID_NAVIGATOR_ID
      });
    i.useEffect(() => m.StickerPickerStore.resetStoreState, []);
    let eP = () => {
      let e = u.getGuildId(),
        t = [];
      if (null !== e) {
        var n;
        t = null !== (n = O.default.getStickersByGuildId(e)) && void 0 !== n ? n : []
      }
      let l = 0;
      null != eE && [...eE.values()].forEach(e => {
        l += e.length
      }), (0, A.trackStickerPickerOpen)({
        containerWidth: o,
        favoriteStickers: em,
        frequentlyUsedStickers: eh,
        guildStickers: t,
        stickersTotal: l
      })
    };
    i.useEffect(() => {
      "" === eo.current && "" !== ei && (0, A.trackStickerSearchStart)(), eo.current = ei
    }, [ei]), i.useEffect(() => {
      0 === eC ? Z(ei) : J(ei, eC, er)
    }, [ei, eC, er]), i.useLayoutEffect(() => {
      var e;
      null === (e = en.current) || void 0 === e || e.focus()
    }, []);
    let eL = i.useCallback(() => {
      Y(), x.default.track(B.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
        location_section: B.AnalyticsSections.STICKER_PICKER_UPSELL
      }), (0, S.navigateToPremiumMarketingPage)()
    }, [Y]);
    return (0, l.jsxs)(z, {
      children: [!($ && ea) && (0, l.jsx)("div", {
        className: H.header,
        children: (0, l.jsx)(U.default, {
          ref: en,
          onKeyDown: ek,
          stickersListRef: et,
          channel: u
        })
      }), ea ? (0, l.jsx)(P.default, {
        className: H.emptyState,
        onClose: Y
      }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          ref: ee,
          className: H.listWrapper,
          id: w.GRID_NAVIGATOR_ID,
          ...eM,
          children: null != eu ? (0, l.jsx)(L.default, {
            ref: et,
            collapsedStickersCategories: ec,
            filteredStickers: ep,
            getStickerItemProps: eR,
            getStickerRowProps: eO,
            gridWidth: eu,
            gutterWidth: eN,
            isUsingKeyboardNavigation: eb,
            onSelectSticker: eT,
            rowCount: ey,
            rowCountBySection: ex,
            stickersCategories: es,
            stickersGrid: eI,
            channel: u
          }) : null
        }), (0, l.jsx)(b.default, {
          stickersListRef: et,
          channel: u
        })]
      }), el && (0, l.jsx)(j.StickersPremiumUpsell, {
        onLearnMore: eL
      })]
    })
  });
var ee = i.forwardRef((e, t) => ((0, R.useFetchStickerPacks)(), (0, l.jsx)("div", {
  className: H.wrapper,
  id: w.STICKER_PICKER_TAB_PANEL_ID,
  "aria-labelledby": w.STICKER_PICKER_TAB_ID,
  role: "tabpanel",
  children: e.isLoading ? (0, l.jsx)(d.Spinner, {
    className: H.loadingIndicator
  }) : (0, l.jsx)($, {
    ...e,
    ref: t
  })
})))
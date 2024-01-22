"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("917351"),
  a = n.n(s),
  u = n("394846"),
  d = n("118810"),
  c = n("446674"),
  f = n("551042"),
  p = n("77078"),
  m = n("452804"),
  h = n("901582"),
  E = n("594203"),
  S = n("244201"),
  g = n("716241"),
  C = n("86678"),
  T = n("873622"),
  v = n("277855"),
  y = n("38290"),
  x = n("191191"),
  I = n("256860"),
  N = n("364685"),
  _ = n("889701"),
  A = n("168973"),
  R = n("983782"),
  O = n("659500"),
  M = n("791776"),
  k = n("538282"),
  b = n("13030"),
  P = n("49111"),
  L = n("115279"),
  U = n("958706"),
  j = n("560241"),
  D = n("782340"),
  w = n("300441");
let B = b.MIN_EXPRESSION_PICKER_WIDTH + L.EmojiSize.MEDIUM,
  H = i.memo(function(e) {
    let {
      isActive: t,
      className: n,
      viewType: i,
      autoFocus: r = !1,
      "aria-controls": s,
      ...a
    } = e;
    return (0, l.jsx)(p.Button, {
      role: "tab",
      autoFocus: r,
      "aria-controls": t ? s : void 0,
      ...a,
      onClick: () => {
        g.default.trackWithMetadata(P.AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, {
          tab: i,
          badged: !1
        }), (0, k.setExpressionPickerView)(i)
      },
      "aria-current": t ? "page" : void 0,
      className: o(n, w.navButton, w.navItem, {
        [w.navButtonActive]: t
      }),
      look: p.Button.Looks.BLANK,
      size: p.Button.Sizes.NONE
    })
  }),
  F = e => {
    let {
      positionContainerRef: t,
      drawerRef: n,
      orientation: l
    } = e, r = (0, c.useStateFromStores)([A.default], () => A.default.expressionPickerWidth), [o, s] = i.useState(window.innerWidth), [u, d] = i.useState(null != r ? r : b.ExpressionPickerWidths.MIN), f = i.useMemo(() => {
      switch (u) {
        case b.ExpressionPickerWidths.MIN:
          return b.MIN_EXPRESSION_PICKER_WIDTH;
        case b.ExpressionPickerWidths.MAX:
          return null;
        default:
          return u
      }
    }, [u]), p = i.useCallback(e => {
      let t = e >= o ? b.ExpressionPickerWidths.MAX : e <= b.MIN_EXPRESSION_PICKER_WIDTH ? b.ExpressionPickerWidths.MIN : e;
      null == t && null != n.current && (n.current.style.width = ""), m.default.updatedUnsyncedSettings({
        expressionPickerWidth: t
      }), d(t)
    }, [n, o]), h = (0, E.default)({
      initialElementDimension: f,
      maxDimension: o,
      minDimension: b.MIN_EXPRESSION_PICKER_WIDTH,
      resizableDomNodeRef: n,
      onElementResize: p,
      orientation: l
    });
    i.useEffect(() => {
      let e = a.debounce(() => {
        null != t.current && s(t.current.offsetWidth)
      }, 500);
      return window.addEventListener("resize", e), () => {
        window.removeEventListener("resize", e)
      }
    }, [t]), i.useLayoutEffect(() => {
      null != t.current && s(t.current.offsetWidth)
    }, [t]);
    let S = i.useCallback(e => {
      e.stopPropagation(), null != t.current && s(t.current.offsetWidth), h(e)
    }, [t, h]);
    return {
      drawerWidth: f,
      handleDrawerResizeHandleMouseDown: S
    }
  };
var G = i.memo(function(e) {
  var t, n, r;
  let {
    positionTargetRef: s,
    hideGifFavorites: a,
    includeCreateEmojiButton: m,
    onSelectGIF: A,
    onSelectEmoji: G,
    onSelectSticker: K,
    onSelectSound: V,
    onCustomUpload: W,
    channel: Y,
    type: q,
    position: z,
    align: Q,
    positionLayerClassName: X,
    closeOnModalOuterClick: Z = !1,
    parentModalKey: J,
    customUploadFilters: $
  } = e, ee = i.useRef(null), et = i.useRef(!1), en = i.useRef(), el = i.useRef(null), ei = "left" === Q ? E.ResizeOrientation.HORIZONTAL_RIGHT : E.ResizeOrientation.HORIZONTAL_LEFT, {
    drawerWidth: er,
    handleDrawerResizeHandleMouseDown: eo
  } = F({
    positionContainerRef: ee,
    drawerRef: el,
    orientation: ei
  }), es = (0, k.useExpressionPickerStore)(e => e.activeView), ea = (0, I.useHasSendableSticker)(Y), {
    renderWindow: eu,
    windowDispatch: ed
  } = i.useContext(S.default), ec = (0, c.useStateFromStores)([N.default], () => !N.default.hasLoadedStickerPacks), ef = (0, v.useSoundmojiExperiment)("expression_picker"), ep = null != J, em = (0, f.useIsModalAtTop)(null != J ? J : ""), eh = i.useCallback(e => {
    var t;
    if (!ep && (0, f.hasAnyModalOpen)() || ep && !(em && Z)) return;
    let {
      target: n
    } = e;
    if ((0, d.isElement)(n) && null != n.closest("." + b.CHAT_INPUT_BUTTON_CLASSNAME)) return;
    for (;
      (0, d.isElement)(n);) {
      if (n === el.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
      n = n.parentNode
    }(0, k.closeExpressionPicker)();
    let l = null === (t = (0, M.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
    (null == l || "BODY" === l.tagName) && O.ComponentDispatch.dispatchToLastSubscribed(P.ComponentActions.TEXTAREA_FOCUS)
  }, [Z, em, ep]), eE = i.useCallback(() => {
    (0, k.closeExpressionPicker)()
  }, []);
  i.useLayoutEffect(() => {
    let e = () => {
      es === b.ExpressionPickerViewType.GIF && (0, k.closeExpressionPicker)()
    };
    return eu.addEventListener("mousedown", eh), eu.addEventListener("contextmenu", eh), ed.subscribe(P.ComponentActions.POPOUT_CLOSE, eE), O.ComponentDispatch.subscribe(P.ComponentActions.CLOSE_GIF_PICKER, e), () => {
      eu.removeEventListener("mousedown", eh), eu.removeEventListener("contextmenu", eh), ed.unsubscribe(P.ComponentActions.POPOUT_CLOSE, eE), O.ComponentDispatch.unsubscribe(P.ComponentActions.CLOSE_GIF_PICKER, e)
    }
  }, [es, eE, eh, eu, ed]), (0, p.useFocusLock)(ee), i.useEffect(() => {
    (0, k.setSearchQuery)("")
  }, []), i.useEffect(() => {
    (!ep && (0, f.hasAnyModalOpen)() || ep && !em) && (0, k.closeExpressionPicker)()
  }, [em, ep]), i.useEffect(() => {
    if (null != el.current && !et.current) {
      var e, t, n, l;
      es === b.ExpressionPickerViewType.EMOJI ? (null == en ? void 0 : null === (e = en.current) || void 0 === e ? void 0 : e.onPickerOpen) != null && (null == en || null === (t = en.current) || void 0 === t || t.onPickerOpen(), et.current = !0) : es === b.ExpressionPickerViewType.STICKER ? (null == en ? void 0 : null === (n = en.current) || void 0 === n ? void 0 : n.onPickerOpen) != null && !ec && (null == en || null === (l = en.current) || void 0 === l || l.onPickerOpen(), et.current = !0) : (g.default.trackWithMetadata(P.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
        width: el.current.offsetWidth,
        tab: es,
        badged: !1
      }), et.current = !0)
    }
  });
  let eS = (null === (t = q.gifs) || void 0 === t ? void 0 : t.allowSending) && !u.isMobile,
    eg = null === (n = q.stickers) || void 0 === n ? void 0 : n.allowSending,
    eC = !(null === (r = q.expressionPicker) || void 0 === r ? void 0 : r.onlyEmojis) && (eS || eg),
    eT = "left" === Q ? "right" : "left",
    ev = null != X ? X : "left" === Q ? w.positionLayerDefaultAlignLeft : w.positionLayerDefaultAlignRight;
  return (0, l.jsx)(h.default, {
    section: P.AnalyticsSections.EXPRESSION_PICKER,
    children: (0, l.jsx)(R.AppReferencePositionLayer, {
      className: o(w.positionLayer, ev),
      reference: s,
      position: z,
      align: Q,
      spacing: 8,
      autoInvert: !0,
      children: e => {
        let {
          isPositioned: t
        } = e;
        return (0, l.jsx)("section", {
          className: o(w.positionContainer, {
            [w.positionContainerOnlyEmoji]: !eC
          }),
          ref: ee,
          role: "dialog",
          "aria-label": D.default.Messages.EXPRESSION_PICKER,
          children: t ? (0, l.jsxs)("div", {
            className: w.drawerSizingWrapper,
            style: {
              width: null == er ? void 0 : er,
              [Q]: 0
            },
            ref: el,
            children: [(0, l.jsx)("div", {
              className: w.resizeHandle,
              onMouseDown: eo,
              style: {
                [eT]: -2
              }
            }), (0, l.jsxs)("div", {
              className: w.contentWrapper,
              children: [eC ? (0, l.jsx)("nav", {
                className: w.nav,
                children: (0, l.jsxs)("div", {
                  className: w.navList,
                  role: "tablist",
                  "aria-label": D.default.Messages.EXPRESSION_PICKER_CATEGORIES_A11Y_LABEL,
                  children: [eS && (0, l.jsx)(H, {
                    id: L.GIF_PICKER_TAB_ID,
                    "aria-controls": L.GIF_PICKER_TAB_PANEL_ID,
                    "aria-selected": es === b.ExpressionPickerViewType.GIF,
                    isActive: es === b.ExpressionPickerViewType.GIF,
                    viewType: b.ExpressionPickerViewType.GIF,
                    children: D.default.Messages.EXPRESSION_PICKER_GIF
                  }), eg ? (0, l.jsx)(H, {
                    id: j.STICKER_PICKER_TAB_ID,
                    "aria-controls": j.STICKER_PICKER_TAB_PANEL_ID,
                    "aria-selected": es === b.ExpressionPickerViewType.STICKER,
                    isActive: es === b.ExpressionPickerViewType.STICKER,
                    autoFocus: !ea,
                    viewType: b.ExpressionPickerViewType.STICKER,
                    children: (0, l.jsx)("div", {
                      className: w.stickersNavItem,
                      children: D.default.Messages.EXPRESSION_PICKER_STICKER
                    })
                  }) : null, (0, l.jsx)(H, {
                    id: L.EMOJI_PICKER_TAB_ID,
                    "aria-controls": L.EMOJI_PICKER_TAB_PANEL_ID,
                    "aria-selected": es === b.ExpressionPickerViewType.EMOJI,
                    isActive: es === b.ExpressionPickerViewType.EMOJI,
                    viewType: b.ExpressionPickerViewType.EMOJI,
                    children: D.default.Messages.EXPRESSION_PICKER_EMOJI
                  }), ef && null != V && (0, l.jsx)(H, {
                    id: L.SOUNDBOARD_PICKER_TAB_ID,
                    "aria-controls": L.SOUNDBOARD_PICKER_TAB_PANEL_ID,
                    "aria-selected": es === b.ExpressionPickerViewType.SOUNDBOARD,
                    isActive: es === b.ExpressionPickerViewType.SOUNDBOARD,
                    viewType: b.ExpressionPickerViewType.SOUNDBOARD,
                    children: "Sounds"
                  }), null != W && (0, l.jsx)(H, {
                    id: L.CUSTOM_UPLOAD_PICKER_TAB_ID,
                    "aria-controls": L.CUSTOM_UPLOAD_PICKER_TAB_PANEL_ID,
                    "aria-selected": es === b.ExpressionPickerViewType.CUSTOM_UPLOAD,
                    isActive: es === b.ExpressionPickerViewType.CUSTOM_UPLOAD,
                    viewType: b.ExpressionPickerViewType.CUSTOM_UPLOAD,
                    children: D.default.Messages.EXPRESSION_PICKER_UPLOAD
                  })]
                })
              }) : null, es === b.ExpressionPickerViewType.STICKER && eC ? (0, l.jsx)(_.default, {
                isLoading: ec,
                channel: Y,
                containerWidth: er,
                onSelectSticker: K,
                closePopout: eE,
                ref: e => {
                  en.current = e
                }
              }) : null, es === b.ExpressionPickerViewType.GIF && eC ? (0, l.jsx)(T.default, {
                onSelectGIF: A,
                hideFavorites: a,
                persistSearch: !0
              }) : null, es === b.ExpressionPickerViewType.EMOJI ? (0, l.jsx)(C.default, {
                hasTabWrapper: !0,
                persistSearch: !0,
                channel: Y,
                containerWidth: er,
                includeCreateEmojiButton: m,
                emojiSize: null != er && er < B ? L.EmojiSize.MEDIUM : L.EmojiSize.LARGE,
                pickerIntention: U.EmojiIntention.CHAT,
                closePopout: eE,
                onSelectEmoji: G,
                ref: e => {
                  en.current = e
                }
              }) : null, es === b.ExpressionPickerViewType.SOUNDBOARD ? (0, l.jsx)("div", {
                className: w.soundboardContainer,
                children: (0, l.jsx)(x.default, {
                  guildId: Y.guild_id,
                  channel: Y,
                  containerWidth: er,
                  onClose: eE,
                  onSelect: V,
                  analyticsSource: "expression-picker",
                  autoWidth: !0
                })
              }) : null, es === b.ExpressionPickerViewType.CUSTOM_UPLOAD && null != W ? (0, l.jsx)(y.default, {
                onCustomUpload: W,
                customUploadFilters: $
              }) : null]
            })]
          }) : null
        })
      }
    })
  })
})
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("974667"),
  a = n("446674"),
  u = n("77078"),
  d = n("296141"),
  c = n("305961"),
  f = n("501536"),
  p = n("476765"),
  m = n("983782"),
  h = n("659186"),
  E = n("418062"),
  S = n("851745"),
  g = n("280214"),
  C = n("497858"),
  T = n("551221"),
  v = i.forwardRef(function(e, t) {
    var n, r, v, y, x;
    let {
      channel: I,
      type: N,
      editorHeight: _,
      onVisibilityChange: A
    } = e, R = (0, p.useUID)(), O = (0, a.useStateFromStores)([c.default], () => {
      var e;
      return null !== (e = c.default.getGuild(I.guild_id)) && void 0 !== e ? e : null
    }, [I.guild_id]), M = i.useRef(), [k, b, P] = (0, C.default)({
      ...e,
      guild: O
    }, t, M), L = (null === (n = N.autocomplete) || void 0 === n ? void 0 : n.forceChatLayer) ? h.default : m.default, U = (0, f.getAutocompleteRowId)(k.selectedIndex);
    (0, d.useChannelEditorPopup)(R, k.isVisible, U), E.default.trackExposure({
      location: "6e9811_1"
    });
    let {
      usePopoutAutocomplete: j
    } = E.default.useExperiment({
      location: "6e9811_2"
    }, {
      autoTrackExposure: !1
    }), D = (0, g.useChannelAutocompleteLayerPosition)({
      editorHeight: _,
      type: N,
      state: k,
      isInPopoutExperiment: j
    }), w = i.useMemo(() => null == D ? "" : String(Date.now()), [null == D ? void 0 : D.top, null == D ? void 0 : D.left, null == D ? void 0 : D.bottom, null == D ? void 0 : D.right]);
    if (i.useEffect(() => {
        A(k.isVisible)
      }, [A, k.isVisible]), !k.isVisible || null == k.query || void 0 === D) return null;
    let B = null !== (r = k.query.typeInfo.renderResults({
      results: k.query.results,
      selectedIndex: k.selectedIndex,
      channel: I,
      guild: O,
      query: k.query.queryText,
      options: k.query.options,
      onHover: e => b.onResultHover(e),
      onClick: e => b.onResultClick(e)
    })) && void 0 !== r ? r : null;
    if (null == B) return null;
    let H = {
        [T.autocompleteAttached]: null == D,
        [T.autocompletePopout]: null != D,
        [T.bottom]: null == D && "bottom" === e.position
      },
      F = 490;
    null != D && (F = (null === (v = N.autocomplete) || void 0 === v ? void 0 : v.small) ? 200 : (null === (y = k.query) || void 0 === y ? void 0 : y.type) === S.AutocompleteOptionTypes.EMOJIS_AND_STICKERS ? 490 : 245), F = Math.min(window.innerHeight - 175, F);
    let G = (0, l.jsx)(f.default, {
      id: R,
      className: o(T.autocomplete, H),
      innerClassName: T.autocompleteInner,
      onMouseDown: e => e.preventDefault(),
      children: (0, l.jsx)(s.ListNavigatorProvider, {
        navigator: P,
        children: (0, l.jsx)(s.ListNavigatorContainer, {
          children: e => {
            let {
              ref: t,
              ...n
            } = e;
            return (0, l.jsx)(u.AdvancedScrollerThin, {
              id: R,
              ref: e => {
                var n;
                t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null, M.current = e
              },
              ...n,
              className: T.scroller,
              style: {
                maxHeight: F
              },
              role: "listbox",
              "aria-labelledby": (0, f.getAutocompleteTitleId)(R),
              children: B
            })
          }
        })
      })
    });
    return null != D ? (0, l.jsx)(L, {
      children: (0, l.jsx)(u.ReferencePositionLayer, {
        reference: () => D,
        positionKey: w,
        position: null !== (x = e.position) && void 0 !== x ? x : "top",
        align: "left",
        spacing: 8,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        children: () => G
      })
    }) : G
  })
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("118810"),
  a = n("446674"),
  u = n("551042"),
  d = n("77078"),
  c = n("901582"),
  f = n("244201"),
  p = n("983782"),
  m = n("659500"),
  h = n("791776"),
  E = n("82372"),
  S = n("426969"),
  g = n("105571"),
  C = n("634114"),
  T = n("49111"),
  v = n("13030"),
  y = n("652277"),
  x = i.memo(function(e) {
    let {
      positionTargetRef: t,
      channel: n,
      closeOnModalOuterClick: r = !1,
      parentModalKey: x
    } = e, I = i.useRef(null), N = i.useRef(null), {
      renderWindow: _,
      windowDispatch: A
    } = i.useContext(f.default), R = null != x, O = (0, u.useIsModalAtTop)(null != x ? x : ""), M = () => {
      E.dismissAppLauncherPopup()
    }, k = i.useCallback(e => {
      var t;
      if (!R && (0, u.hasAnyModalOpen)() || R && !(O && r)) return;
      let {
        target: n
      } = e;
      if ((0, s.isElement)(n) && null != n.closest("." + v.CHAT_INPUT_BUTTON_CLASSNAME)) return;
      for (;
        (0, s.isElement)(n);) {
        if (n === N.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
        n = n.parentNode
      }
      M();
      let l = null === (t = (0, h.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
      (null == l || "BODY" === l.tagName) && m.ComponentDispatch.dispatchToLastSubscribed(T.ComponentActions.TEXTAREA_FOCUS)
    }, [r, O, R]), b = i.useCallback(() => {
      M()
    }, []);
    i.useLayoutEffect(() => (_.addEventListener("mousedown", k), _.addEventListener("contextmenu", k), A.subscribe(T.ComponentActions.POPOUT_CLOSE, b), () => {
      _.removeEventListener("mousedown", k), _.removeEventListener("contextmenu", k), A.unsubscribe(T.ComponentActions.POPOUT_CLOSE, b)
    }), [b, k, _, A]), (0, d.useFocusLock)(I), i.useEffect(() => {
      (!R && (0, u.hasAnyModalOpen)() || R && !O) && M()
    }, [O, R]);
    let P = (0, a.useStateFromStores)([S.default], () => S.default.getCurrentAppDetail());
    return (0, l.jsx)(c.default, {
      section: T.AnalyticsSections.EXPRESSION_PICKER,
      children: (0, l.jsx)(p.AppReferencePositionLayer, {
        className: y.positionLayer,
        reference: t,
        position: "top",
        align: "left",
        spacing: 8,
        autoInvert: !0,
        children: e => {
          let {
            isPositioned: t
          } = e;
          return (0, l.jsx)("section", {
            className: o(y.positionContainer),
            ref: I,
            role: "dialog",
            "aria-label": "Application Launcher",
            children: t ? (0, l.jsxs)("div", {
              className: y.drawerSizingWrapper,
              ref: N,
              children: [(0, l.jsx)("div", {
                className: y.resizeHandle
              }), (0, l.jsxs)("div", {
                className: y.contentWrapper,
                children: [(0, l.jsx)(C.default, {
                  channel: n,
                  isAppDetailPresent: null != P
                }), null != P ? (0, l.jsx)(g.default, {
                  channel: n,
                  appDetail: P
                }, P.id) : null]
              })]
            }) : null
          })
        }
      })
    })
  })
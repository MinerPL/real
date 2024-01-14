"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("446674"),
  i = n("913144"),
  r = n("600965"),
  o = n("292687"),
  u = n("659500"),
  d = n("191225"),
  c = n("420444"),
  f = n("577261"),
  h = n("272505"),
  p = n("49111");
let m = (e, t) => {
  i.default.wait(() => {
    (0, r.updateRect)(e, t)
  })
};

function E(e) {
  let t, {
      embedId: n,
      className: i,
      style: r
    } = e,
    E = (0, s.useStateFromStores)([o.default], () => o.default.getWindow(p.PopoutWindowKeys.CHANNEL_CALL_POPOUT)),
    C = (0, f.default)(),
    g = (0, s.useStateFromStores)([d.default], () => d.default.getActivityPanelMode()),
    S = null != C && !(0, c.default)(C.channelId) && g === h.ActivityPanelModes.PANEL;
  if (S) t = window;
  else {
    var _;
    t = null !== (_ = null == E ? void 0 : E.window) && void 0 !== _ ? _ : window
  }
  let I = l.useRef(null),
    T = l.useMemo(() => {
      let e = null;
      return () => {
        null == e && (e = t.requestAnimationFrame(() => {
          var t, a;
          m(n, null !== (a = null === (t = I.current) || void 0 === t ? void 0 : t.getBoundingClientRect()) && void 0 !== a ? a : null), e = null
        }))
      }
    }, [n, t]);
  return l.useEffect(() => (t.addEventListener("resize", T), u.ComponentDispatch.subscribe(p.ComponentActions.REMEASURE_TARGET, T), () => {
    t.removeEventListener("resize", T), u.ComponentDispatch.unsubscribe(p.ComponentActions.REMEASURE_TARGET, T)
  }), [T, t]), l.useLayoutEffect(() => {
    let e = I.current;
    if (null == e) return;
    let t = e.ownerDocument.defaultView;
    if (null == t) return;
    T();
    let a = new t.ResizeObserver(T);
    return a.observe(e), () => {
      a.disconnect(), m(n, null)
    }
  }, [n, T]), (0, a.jsx)("div", {
    ref: I,
    style: r,
    className: i
  })
}
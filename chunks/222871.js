"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("64202"),
  i = n("669491"),
  r = n("77078");

function o(e) {
  let t = (0, a.useRef)(null),
    [n, o] = (0, a.useState)(null),
    [u] = (0, a.useState)(() => new s.TimelineDataSeries),
    d = (0, r.useToken)(i.default.colors.BACKGROUND_PRIMARY).hsl(),
    c = (0, r.useToken)(i.default.colors.TEXT_NORMAL).hsl(),
    f = (0, r.useToken)(i.default.colors.BACKGROUND_ACCENT).hsl(),
    h = (0, r.useToken)(i.default.unsafe_rawColors.BRAND_500).hsl();
  (0, a.useEffect)(() => {
    var e;
    let n = t.current;
    if (null == n) return;
    let l = new s.TimelineGraphView(n, null !== (e = window.devicePixelRatio) && void 0 !== e ? e : 1);
    l.backgroundColor = d, l.textColor = c, l.gridColor = f, l.timeOptions = {
      timeStyle: "short"
    }, l.fontFamily = "gg sans", l.fontSize = 11, u.setColor(h), l.addDataSeries(u), l.updateEndDate(), o(l)
  }, [t, d, h, f, c, u]), u.setPoints(e.dataPoints), null == n || n.updateEndDate();
  let C = {
    width: e.width,
    height: e.height
  };
  return (0, l.jsx)("canvas", {
    style: C,
    width: e.width,
    height: e.height,
    ref: t
  }, "canvas")
}
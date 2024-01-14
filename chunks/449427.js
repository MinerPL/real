"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  i = n.n(s),
  l = n("449918"),
  r = n("145131"),
  o = n("833923"),
  u = n("318042"),
  d = n("782340"),
  c = n("391269"),
  E = function(e) {
    var t;
    let {
      title: n,
      className: s,
      color: E,
      animate: f,
      gradientStopColor: _,
      getHistoricalTotalBytes: h
    } = e, C = (0, l.useColorValue)(E).hex, T = null === (t = (0, l.useColorValue)(_)) || void 0 === t ? void 0 : t.hex;
    return (0, a.jsx)(u.default, {
      getHistoricalTotalBytes: h,
      children: (e, t, l) => {
        var u;
        return (0, a.jsx)("div", {
          className: i(c.monitor, s),
          children: (0, a.jsxs)(r.default, {
            align: r.default.Align.CENTER,
            children: [(0, a.jsxs)(r.default, {
              className: c.text,
              direction: r.default.Direction.VERTICAL,
              children: [(0, a.jsx)("div", {
                className: c.title,
                children: n
              }), (0, a.jsx)("div", {
                className: c.rate,
                children: (u = e[e.length - 1] / t * 1e3) > 1e3 ? d.default.Messages.FILE_RATE_MB.format({
                  size: Math.round(u / 1e3)
                }) : d.default.Messages.FILE_RATE_KB.format({
                  size: Math.round(u)
                })
              })]
            }), (0, a.jsx)("div", {
              className: c.overflowContainer,
              children: (0, a.jsx)(o.default, {
                data: e,
                maxValue: Math.max(Math.max.apply(null, e), 1e3),
                className: c.sparkChart,
                updateInterval: t,
                color: C,
                gradientStopColor: T,
                numUpdatesToShow: l,
                animate: f,
                pixelWidth: 600,
                pixelHeight: 48,
                lineWidth: 4
              })
            })]
          })
        })
      }
    })
  }
"use strict";
n.r(t), n.d(t, {
  StackedProgress: function() {
    return f
  }
}), n("222007");
var i, r, s = n("37983");
n("884691");
var a = n("414456"),
  o = n.n(a),
  l = n("917351"),
  u = n.n(l),
  c = n("669491"),
  d = n("35962");

function f(e) {
  let {
    className: t,
    percents: n,
    size: i = "small",
    foregroundColors: r = [c.default.unsafe_rawColors.BRAND_500.css],
    backgroundColor: a = "var(--background-modifier-active)",
    animate: l = !0
  } = e, f = u.zip(n, r).map((e, t) => {
    let n, [r, a] = e;
    return n = Array.isArray(a) ? {
      background: "linear-gradient(to right, ".concat(a[0], ", ").concat(a[1], ")")
    } : {
      backgroundColor: a
    }, (0, s.jsx)("div", {
      className: o(d.progressBar, d[i], {
        [d.animating]: l
      }),
      style: {
        transform: "translate3d(".concat(Math.min(Math.max(0, r), 100) - 100, "%, 0, 0)"),
        ...n
      }
    }, t)
  }).reverse();
  return (0, s.jsx)("div", {
    className: o(t, d.progress, d[i]),
    style: {
      backgroundColor: a
    },
    children: f
  })
}(r = i || (i = {})).XSMALL = "xsmall", r.SMALL = "small", r.LARGE = "large", f.Sizes = i
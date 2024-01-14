"use strict";
i.r(t), i.d(t, {
  default: function() {
    return h
  }
});
var a = i("37983"),
  l = i("884691"),
  n = i("917351"),
  o = i("65597"),
  s = i("880731"),
  r = i("232268"),
  u = i("759432"),
  d = i("798592"),
  c = i("39141");

function p(e) {
  let {
    reactionRef: t,
    count: i
  } = e, a = l.useRef(i), r = (0, o.default)([s.default], () => s.default.getState()), c = (0, d.default)(), p = (0, u.default)(t);
  return l.useEffect(() => {
    if (i > a.current && null != p) {
      let e = (0, n.clamp)(i, r.confettiCount / 2, 2 * r.confettiCount);
      c.fire(p.x, p.y, {
        count: e
      })
    }
    a.current = i
  }, [i, p, c, r.confettiCount]), null
}

function h(e) {
  return (0, a.jsx)(r.default, {
    confettiLocation: c.ConfettiLocation.REACTION,
    children: (0, a.jsx)(p, {
      ...e
    })
  })
}
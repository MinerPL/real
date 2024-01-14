"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("333987"),
  i = a.forwardRef(function(e, t) {
    let {
      muted: n,
      volume: i,
      playing: r,
      ...o
    } = e, [u, d] = (0, s.default)(t);
    return a.useEffect(() => {
      let e = u.current;
      if (null != e) void 0 !== n && (e.muted = n)
    }, [u, n]), a.useEffect(() => {
      let e = u.current;
      if (null != e) void 0 !== i && (e.volume = i)
    }, [u, i]), a.useEffect(() => {
      let e = u.current;
      if (null != e) void 0 !== r && (r ? e.play() : e.pause())
    }, [u, r]), (0, l.jsx)("audio", {
      ref: d,
      ...o
    })
  })
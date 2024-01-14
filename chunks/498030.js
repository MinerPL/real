"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
}), s("222007");
var a = s("476042");

function n(e, t, s, n) {
  let [{
    isDragging: l
  }, i, r] = (0, a.useDrag)({
    type: t,
    item: () => ({
      index: s
    }),
    collect: e => ({
      isDragging: e.isDragging()
    })
  }), [, o] = (0, a.useDrop)({
    accept: t,
    hover(t, a) {
      if (null == e.current) return;
      let l = t.index;
      if (l === s) return;
      let i = e.current.getBoundingClientRect(),
        r = (i.bottom - i.top) / 2,
        o = a.getClientOffset(),
        d = o.y - i.top;
      if (!(l < s) || !(d < r))(!(l > s) || !(d > r)) && (n(l, s), t.index = s)
    }
  });
  return {
    drag: i,
    dragPreview: r,
    drop: o,
    isDragging: l
  }
}
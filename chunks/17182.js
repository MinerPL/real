"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("222007");
var i = n("884691");

function r(e, t, n) {
  return [Math.floor(e / n) - 1, Math.ceil((e + t) / n) + 1]
}
let o = [0, 0];

function s(e) {
  let {
    chunkSize: t,
    getScrollerState: n,
    forceUpdate: s
  } = e, {
    dirty: l,
    scrollTop: a,
    offsetHeight: u
  } = n();
  (0, i.useLayoutEffect)(() => {
    l > 0 && s()
  }, [l, s]);
  let c = (0, i.useRef)(o);
  c.current = r(a, u, t);
  let [d, _] = c.current, f = (0, i.useCallback)(e => {
    let {
      dirty: i,
      scrollTop: o,
      offsetHeight: l
    } = n();
    if (i > 0) return;
    let [a, u] = r(o, l, t);
    a !== c.current[0] ? s() : 2 === e && u !== c.current[1] && s()
  }, [s, t, n]);
  return {
    forceUpdateOnChunkChange: f,
    chunkStart: d,
    chunkEnd: _,
    dirty: l
  }
}
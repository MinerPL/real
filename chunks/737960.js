"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var r = n("37983"),
  i = n("884691"),
  a = n("308723");

function l(e) {
  return i.forwardRef(function(t, n) {
    let l = i.useRef();
    return i.useImperativeHandle(n, () => ({
      triggerResize: () => {
        var e;
        null === (e = l.current) || void 0 === e || e.onResize()
      }
    })), (0, r.jsx)(a.default, {
      ref: l,
      children: n => {
        let {
          width: i,
          height: a
        } = n;
        return (0, r.jsx)(e, {
          ...t,
          width: i,
          height: a
        })
      }
    })
  })
}
"use strict";
n.r(e), n.d(e, {
  useOnce: function() {
    return i
  },
  useForceUpdate: function() {
    return o
  },
  usePrev: function() {
    return a
  }
});
var r = n("884691"),
  i = function(t) {
    return (0, r.useEffect)(t, [])
  },
  o = function() {
    var t = (0, r.useState)(0)[1],
      e = (0, r.useRef)(!1);
    return i(function() {
        return function() {
          e.current = !0
        }
      }),
      function() {
        !e.current && t({})
      }
  };

function a(t) {
  var e = (0, r.useRef)(void 0);
  return (0, r.useEffect)(function() {
    e.current = t
  }), e.current
}
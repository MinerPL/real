"use strict";
r.r(t), r.d(t, {
  default: function() {
    return i
  }
});
var n = r("884691"),
  o = r.n(n),
  a = r("849122"),
  i = function(e) {
    var t = e.hsl,
      r = (0, a.default)({
        default: {
          picker: {
            width: "12px",
            height: "12px",
            borderRadius: "6px",
            boxShadow: "inset 0 0 0 1px #fff",
            transform: "translate(-6px, -6px)"
          }
        },
        "black-outline": {
          picker: {
            boxShadow: "inset 0 0 0 1px #000"
          }
        }
      }, {
        "black-outline": t.l > .5
      });
    return o.createElement("div", {
      style: r.picker
    })
  }
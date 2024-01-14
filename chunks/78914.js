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
    var t = e.direction,
      r = (0, a.default)({
        default: {
          picker: {
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            transform: "translate(-9px, -1px)",
            backgroundColor: "rgb(248, 248, 248)",
            boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
          }
        },
        vertical: {
          picker: {
            transform: "translate(-3px, -9px)"
          }
        }
      }, {
        vertical: "vertical" === t
      });
    return o.createElement("div", {
      style: r.picker
    })
  }
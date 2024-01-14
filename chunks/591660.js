"use strict";
r.r(t), r.d(t, {
  default: function() {
    return c
  }
});
var n = r("884691"),
  o = r.n(n),
  a = r("849122"),
  i = r("416037"),
  u = r.n(i),
  l = function(e) {
    var t = (0, a.default)({
      default: {
        picker: {
          width: "20px",
          height: "20px",
          borderRadius: "22px",
          transform: "translate(-10px, -7px)",
          background: "hsl(" + Math.round(e.hsl.h) + ", 100%, 50%)",
          border: "2px white solid"
        }
      }
    });
    return o.createElement("div", {
      style: t.picker
    })
  };
l.propTypes = {
  hsl: u.shape({
    h: u.number,
    s: u.number,
    l: u.number,
    a: u.number
  })
}, l.defaultProps = {
  hsl: {
    a: 1,
    h: 249.94,
    l: .2,
    s: .5
  }
};
var c = l
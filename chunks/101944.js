"use strict";
r.r(t), r.d(t, {
  default: function() {
    return i
  }
});
var n = r("884691"),
  o = r.n(n),
  a = r("849122"),
  i = function() {
    var e = (0, a.default)({
      default: {
        triangle: {
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "4px 0 4px 6px",
          borderColor: "transparent transparent transparent #fff",
          position: "absolute",
          top: "1px",
          left: "1px"
        },
        triangleBorder: {
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "5px 0 5px 8px",
          borderColor: "transparent transparent transparent #555"
        },
        left: {
          Extend: "triangleBorder",
          transform: "translate(-13px, -4px)"
        },
        leftInside: {
          Extend: "triangle",
          transform: "translate(-8px, -5px)"
        },
        right: {
          Extend: "triangleBorder",
          transform: "translate(20px, -14px) rotate(180deg)"
        },
        rightInside: {
          Extend: "triangle",
          transform: "translate(-8px, -5px)"
        }
      }
    });
    return o.createElement("div", {
      style: e.pointer
    }, o.createElement("div", {
      style: e.left
    }, o.createElement("div", {
      style: e.leftInside
    })), o.createElement("div", {
      style: e.right
    }, o.createElement("div", {
      style: e.rightInside
    })))
  }
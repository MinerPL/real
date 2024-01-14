"use strict";
r.r(t), r.d(t, {
  default: function() {
    return c
  }
});
var a = r("138754"),
  n = r("884691"),
  s = r.n(n),
  o = r("493110"),
  i = r.n(o),
  u = function(e) {
    var t = e.nodeType,
      r = e.styling,
      n = e.labelRenderer,
      o = e.keyPath,
      i = e.valueRenderer,
      u = e.value,
      c = e.valueGetter;
    return s.createElement("li", r("value", t, o), s.createElement("label", r(["label", "valueLabel"], t, o), n(o, t, !1, !1)), s.createElement("span", r("valueText", t, o), i.apply(void 0, [(void 0 === c ? function(e) {
      return e
    } : c)(u), u].concat((0, a.default)(o)))))
  };
u.propTypes = {
  nodeType: i.string.isRequired,
  styling: i.func.isRequired,
  labelRenderer: i.func.isRequired,
  keyPath: i.arrayOf(i.oneOfType([i.string, i.number]).isRequired).isRequired,
  valueRenderer: i.func.isRequired,
  value: i.any,
  valueGetter: i.func
};
var c = u
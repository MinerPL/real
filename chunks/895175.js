"use strict";
n.r(t), n.d(t, {
  default: function() {
    return function e(t) {
      return ["html", "body", "#document"].indexOf((0, o.default)(t)) >= 0 ? t.ownerDocument.body : (0, i.isHTMLElement)(t) && (0, a.default)(t) ? t : e((0, r.default)(t))
    }
  }
});
var r = n("199407"),
  a = n("790973"),
  o = n("190418"),
  i = n("753671")
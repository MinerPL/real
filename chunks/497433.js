"use strict";
var a, o = t("835087");
t("605644")(r, "__esModule", {
  value: !0
}), r.default = void 0;
var n = o(t("725556")),
  l = o(t("938896")),
  i = o(t("306088")),
  s = o(t("668564")),
  u = o(t("45163")),
  d = o(t("570963")),
  c = o(t("527228")),
  p = o(t("379573")),
  m = o(t("607096")),
  f = o(t("148659")),
  b = o(t("809512")),
  v = new f.default([]);
(0, m.default)(a = (0, p.default)((0, c.default)(b.default).call(b.default))).call(a, function(e) {
  var r, t, a = b.default.get(e);
  a && (0, m.default)(r = (0, d.default)(t = []).call(t, (0, p.default)(a.baseConcepts), (0, p.default)(a.relatedConcepts))).call(r, function(r) {
    if ("HTML" === r.module) {
      var t = r.concept;
      if (t) {
        var a, o = (0, u.default)(t),
          d = ((0, s.default)(a = (0, p.default)((0, i.default)(v).call(v))).call(a, function(e) {
            var r = (0, l.default)(e, 2),
              t = r[0];
            return r[1], (0, u.default)(t) === o
          }) || [])[1];
        !d && (d = new n.default([])), d.add(e), v.set(t, d)
      }
    }
  })
});
r.default = v
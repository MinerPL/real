            "use strict";
            var a, o = t("835087");
            t("605644")(r, "__esModule", {
                value: !0
            }), r.default = void 0;
            var n = o(t("725556")),
                l = o(t("570963")),
                i = o(t("527228")),
                s = o(t("379573")),
                u = o(t("607096")),
                d = o(t("148659")),
                c = o(t("809512")),
                p = new d.default([]);
            (0, u.default)(a = (0, s.default)((0, i.default)(c.default).call(c.default))).call(a, function(e) {
                var r, t, a = c.default.get(e);
                a && (0, u.default)(r = (0, l.default)(t = []).call(t, (0, s.default)(a.baseConcepts), (0, s.default)(a.relatedConcepts))).call(r, function(r) {
                    if ("HTML" === r.module) {
                        var t = r.concept;
                        if (t) {
                            var a = p.get(e) || new n.default([]);
                            a.add(t), p.set(e, a)
                        }
                    }
                })
            });
            r.default = p
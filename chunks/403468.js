            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return function e(t, n) {
                        void 0 === n && (n = []);
                        var s, u = (0, r.default)(t),
                            l = u === (null == (s = t.ownerDocument) ? void 0 : s.body),
                            c = (0, o.default)(u),
                            d = l ? [c].concat(c.visualViewport || [], (0, i.default)(u) ? u : []) : u,
                            f = n.concat(d);
                        return l ? f : f.concat(e((0, a.default)(d)))
                    }
                }
            });
            var r = n("895175"),
                a = n("199407"),
                o = n("320959"),
                i = n("790973")
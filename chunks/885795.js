            "use strict";
            r("70102");
            var i = r("966810"),
                n = SyntaxError,
                o = "object" == typeof StopIteration ? StopIteration : null;
            t.exports = function(t) {
                if (!o) throw new n("this environment lacks StopIteration");
                i.set(t, "[[Done]]", !1);
                var e = {
                    next: function() {
                        var t = i.get(this, "[[Iterator]]"),
                            e = i.get(t, "[[Done]]");
                        try {
                            return {
                                done: e,
                                value: e ? void 0 : t.next()
                            }
                        } catch (e) {
                            if (i.set(t, "[[Done]]", !0), e !== o) throw e;
                            return {
                                done: !0,
                                value: void 0
                            }
                        }
                    }
                };
                return i.set(e, "[[Iterator]]", t), e
            }
                "use strict";
                var e = r("859514"),
                    o = r("383053").left,
                    u = r("528151"),
                    i = r("693523"),
                    c = r("106106");
                e({
                    target: "Array",
                    proto: !0,
                    forced: !c && i > 79 && i < 83 || !u("reduce")
                }, {
                    reduce: function(t) {
                        var n = arguments.length;
                        return o(this, t, n, n > 1 ? arguments[1] : void 0)
                    }
                })
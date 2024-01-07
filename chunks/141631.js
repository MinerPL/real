            "use strict";
            s.r(t), s.d(t, {
                getClass: function() {
                    return l
                }
            }), s("808653");
            var n = s("617258");

            function l(e, t) {
                for (var s = arguments.length, l = Array(s > 2 ? s - 2 : 0), a = 2; a < s; a++) l[a - 2] = arguments[a];
                let i = l.reduce((e, t) => e + (0, n.upperCaseFirstChar)(t), ""),
                    r = "".concat(t).concat(i),
                    o = e[r];
                return null == o ? "" : o
            }
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return function e(t, l, u, i) {
                        let {
                            length: n
                        } = u, r = i, a = l;
                        if (0 === n) return 0;
                        if (null == r) r = a;
                        else if (r === a) return a;
                        if ((a += t === s.FindResultDirections.UP ? -1 : 1) < 0 || a >= n) return e(t, a < 0 ? n : -1, u, r);
                        let o = u[a];
                        return o.type === s.AutocompleterResultTypes.HEADER ? e(t, a, u, r) : a
                    }
                }
            });
            var s = l("375822")
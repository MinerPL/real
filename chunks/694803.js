            "use strict";
            var r, a = n("503486"),
                o = n("145661"),
                i = n("125359"),
                s = n("867422"),
                u = n("297293"),
                l = n("484320"),
                c = n("79807"),
                Function = a.Function;
            var d = /MSIE .\./.test(u) || s && ((r = a.Bun.version.split(".")).length < 3 || "0" === r[0] && (r[1] < 3 || "3" === r[1] && "0" === r[2]));
            e.exports = function(e, t) {
                var n = t ? 2 : 1;
                return d ? function(r, a) {
                    var s = c(arguments.length, 1) > n,
                        u = i(r) ? r : Function(r),
                        d = s ? l(arguments, n) : [],
                        f = s ? function() {
                            o(u, this, d)
                        } : u;
                    return t ? e(f, a) : e(f)
                } : e
            }
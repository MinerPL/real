            "use strict";
            var i = r("129752").codes.ERR_INVALID_OPT_VALUE;
            t.exports = {
                getHighWaterMark: function(t, e, r, n) {
                    var a, o, s, f = (a = e, o = n, s = r, null != a.highWaterMark ? a.highWaterMark : o ? a[s] : null);
                    if (null != f) {
                        if (!(isFinite(f) && Math.floor(f) === f) || f < 0) throw new i(n ? r : "highWaterMark", f);
                        return Math.floor(f)
                    }
                    return t.objectMode ? 16 : 16384
                }
            }
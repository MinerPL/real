            "use strict";
            var r = s("129752").codes.ERR_INVALID_OPT_VALUE;
            t.exports = {
                getHighWaterMark: function(t, e, s, i) {
                    var n, c, o, f = (n = e, c = i, o = s, null != n.highWaterMark ? n.highWaterMark : c ? n[o] : null);
                    if (null != f) {
                        if (!(isFinite(f) && Math.floor(f) === f) || f < 0) throw new r(i ? s : "highWaterMark", f);
                        return Math.floor(f)
                    }
                    return t.objectMode ? 16 : 16384
                }
            }
            "use strict";
            n("854508"), e.exports = function(e, t, r) {
                var o, a, i, s, c = {},
                    l = 0,
                    u = !1;
                for (a = 0, o = this.getMatches(e, t, r); a < o.length; ++a) o[a].seq && (l = Math.max(l, o[a].level));
                for (a = 0; a < o.length; ++a) {
                    if (o[a].seq) {
                        if (o[a].level !== l) continue;
                        u = !0, c[o[a].seq] = 1, this.fireCallback(o[a].callback, r, o[a].combo, o[a].seq);
                        continue
                    }!u && this.fireCallback(o[a].callback, r, o[a].combo)
                }
                s = "keypress" === r.type && this.ignoreNextKeypress, i = n("275750"), r.type === this.nextExpectedAction && !i(e) && !s && this.resetSequences(c), this.ignoreNextKeypress = u && "keydown" === r.type
            }
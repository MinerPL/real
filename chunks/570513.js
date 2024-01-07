            "use strict";
            n("424973"), n("854508"), e.exports = function(e, t) {
                var r, o, a, i, s, c, l = [];
                for (a = 0, r = n("87552")(e), i = n("973809"), s = n("325688"), c = n("275750"); a < r.length; ++a) i[o = r[a]] && (o = i[o]), t && "keypress" !== t && s[o] && (o = s[o], l.push("shift")), c(o) && l.push(o);
                return t = this.pickBestAction(o, l, t), {
                    key: o,
                    modifiers: l,
                    action: t
                }
            }
            "use strict";
            var n, i = r("416340"),
                o = r("646601"),
                a = r("893147"),
                u = o.OrderedMap;
            t.exports = {
                getDirectionMap: function(t, e) {
                    n ? n.reset() : n = new i;
                    var r = t.getBlockMap(),
                        s = r.valueSeq().map(function(t) {
                            return a(n).getDirection(t.getText())
                        }),
                        c = u(r.keySeq().zip(s));
                    return null != e && o.is(e, c) ? e : c
                }
            }
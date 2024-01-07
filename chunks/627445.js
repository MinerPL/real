                "use strict";
                i("70102"), i("781738");
                e.exports = function(e, t, i, n, r, s, a, o) {
                    if (!e) {
                        var l;
                        if (void 0 === t) l = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                        else {
                            var u = [i, n, r, s, a, o],
                                h = 0;
                            (l = Error(t.replace(/%s/g, function() {
                                return u[h++]
                            }))).name = "Invariant Violation"
                        }
                        throw l.framesToPop = 1, l
                    }
                }
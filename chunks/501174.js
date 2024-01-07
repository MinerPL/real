            "use strict";
            n("424973"), e.exports = function(e) {
                var t = {};

                function n(n) {
                    var i = e.get(n);
                    return void 0 === i ? [] : t[i] || []
                }
                return {
                    get: n,
                    add: function(n, i) {
                        var o = e.get(n);
                        !t[o] && (t[o] = []), t[o].push(i)
                    },
                    removeListener: function(e, t) {
                        for (var i = n(e), o = 0, r = i.length; o < r; ++o)
                            if (i[o] === t) {
                                i.splice(o, 1);
                                break
                            }
                    },
                    removeAllListeners: function(e) {
                        var t = n(e);
                        t && (t.length = 0)
                    }
                }
            }
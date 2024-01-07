            "use strict";
            r("462568"), r("222007");
            var i = r("975169"),
                n = r("658683"),
                o = r("366400");
            t.exports = function() {
                i();
                var t = n();
                return o(Promise, {
                    allSettled: t
                }, {
                    allSettled: function() {
                        return Promise.allSettled !== t
                    }
                }), t
            }
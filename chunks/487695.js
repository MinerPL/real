            "use strict";
            var e = n("522552"),
                o = n("355817"),
                i = n("370080"),
                u = o("species");
            t.exports = function(t) {
                return i >= 51 || !e(function() {
                    var r = [];
                    return (r.constructor = {})[u] = function() {
                        return {
                            foo: 1
                        }
                    }, 1 !== r[t](Boolean).foo
                })
            }
            "use strict";

            function r(e) {
                var t = null;
                return function() {
                    return null == t && (t = e()), t
                }
            }

            function o(e, t) {
                return e.filter(function(e) {
                    return e !== t
                })
            }

            function a(e, t) {
                var n = new Set,
                    r = function(e) {
                        return n.add(e)
                    };
                e.forEach(r), t.forEach(r);
                var o = [];
                return n.forEach(function(e) {
                    return o.push(e)
                }), o
            }
            n.r(t), n.d(t, {
                memoize: function() {
                    return r
                },
                without: function() {
                    return o
                },
                union: function() {
                    return a
                }
            }), n("222007"), n("424973")
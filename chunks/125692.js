            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function o(e, t, n) {
                return t.split(".").reduce(function(e, t) {
                    return e && e[t] ? e[t] : n || null
                }, e)
            }

            function a(e, t) {
                return e.filter(function(e) {
                    return e !== t
                })
            }

            function i(e) {
                return "object" === r(e)
            }

            function s(e, t) {
                var n = new Map,
                    r = function(e) {
                        n.set(e, n.has(e) ? n.get(e) + 1 : 1)
                    };
                e.forEach(r), t.forEach(r);
                var o = [];
                return n.forEach(function(e, t) {
                    1 === e && o.push(t)
                }), o
            }

            function c(e, t) {
                return e.filter(function(e) {
                    return t.indexOf(e) > -1
                })
            }
            n.r(t), n.d(t, {
                get: function() {
                    return o
                },
                without: function() {
                    return a
                },
                isObject: function() {
                    return i
                },
                xor: function() {
                    return s
                },
                intersection: function() {
                    return c
                }
            }), n("222007"), n("808653"), n("424973")
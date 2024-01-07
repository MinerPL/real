            "use strict";
            n.r(t), n.d(t, {
                validateSourceContract: function() {
                    return a
                },
                validateTargetContract: function() {
                    return i
                },
                validateType: function() {
                    return function e(t, n) {
                        if (n && Array.isArray(t)) {
                            t.forEach(function(t) {
                                return e(t, !1)
                            });
                            return
                        }(0, r.invariant)("string" == typeof t || "symbol" === o(t), n ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.")
                    }
                }
            }), n("222007");
            var r = n("900255");

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function a(e) {
                (0, r.invariant)("function" == typeof e.canDrag, "Expected canDrag to be a function."), (0, r.invariant)("function" == typeof e.beginDrag, "Expected beginDrag to be a function."), (0, r.invariant)("function" == typeof e.endDrag, "Expected endDrag to be a function.")
            }

            function i(e) {
                (0, r.invariant)("function" == typeof e.canDrop, "Expected canDrop to be a function."), (0, r.invariant)("function" == typeof e.hover, "Expected hover to be a function."), (0, r.invariant)("function" == typeof e.drop, "Expected beginDrag to be a function.")
            }
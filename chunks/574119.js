            "use strict";
            n.r(t), n.d(t, {
                createDrop: function() {
                    return c
                }
            }), n("424973");
            var r = n("900255"),
                o = n("897345"),
                a = n("125692");

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach(function(t) {
                        (function(e, t, n) {
                            t in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n
                        })(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function c(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.getMonitor(),
                        i = e.getRegistry();
                    (function(e) {
                        (0, r.invariant)(e.isDragging(), "Cannot call drop while not dragging."), (0, r.invariant)(!e.didDrop(), "Cannot call drop twice during one drag operation.")
                    })(n), (function(e) {
                        var t = e.getTargetIds().filter(e.canDropOnTarget, e);
                        return t.reverse(), t
                    })(n).forEach(function(c, l) {
                        var u = function(e, t, n, o) {
                                var i = n.getTarget(e),
                                    s = i ? i.drop(o, e) : void 0;
                                return function(e) {
                                    (0, r.invariant)(void 0 === e || (0, a.isObject)(e), "Drop result must either be an object or undefined.")
                                }(s), void 0 === s && (s = 0 === t ? {} : o.getDropResult()), s
                            }(c, l, i, n),
                            d = {
                                type: o.DROP,
                                payload: {
                                    dropResult: s(s({}, t), u)
                                }
                            };
                        e.dispatch(d)
                    })
                }
            }
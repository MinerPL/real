            "use strict";

            function r(e) {
                let t;
                let n = new Set,
                    r = (e, r) => {
                        let o = "function" == typeof e ? e(t) : e;
                        if (o !== t) {
                            let e = t;
                            t = r ? o : Object.assign({}, t, o), n.forEach(n => n(t, e))
                        }
                    },
                    o = () => t,
                    a = function(e) {
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
                            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
                        console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
                        let i = r(t);

                        function s() {
                            let n = r(t);
                            if (!a(i, n)) {
                                let t = i;
                                e(i = n, t)
                            }
                        }
                        return n.add(s), () => n.delete(s)
                    },
                    i = {
                        setState: r,
                        getState: o,
                        subscribe: (e, t, r) => t || r ? a(e, t, r) : (n.add(e), () => n.delete(e)),
                        destroy: () => n.clear()
                    };
                return t = e(r, o, i), i
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007")
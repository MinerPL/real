            "use strict";
            n.r(t), n.d(t, {
                useMonitorOutput: function() {
                    return i
                }
            }), n("70102"), n("222007"), n("424973");
            var r = n("634115"),
                o = n("234254");

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function i(e, t, n) {
                var i, s, c = (s = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(i = (0, o.useCollector)(e, t, n)) || function(e, t) {
                        var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != o) {
                            var a = [],
                                i = !0,
                                s = !1;
                            try {
                                for (o = o.call(e); !(i = (n = o.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
                            } catch (e) {
                                s = !0, r = e
                            } finally {
                                try {
                                    !i && null != o.return && o.return()
                                } finally {
                                    if (s) throw r
                                }
                            }
                            return a
                        }
                    }(i, s) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return a(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                        }
                    }(i, s) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    l = c[0],
                    u = c[1];
                return (0, r.useIsomorphicLayoutEffect)(function() {
                    var t = e.getHandlerId();
                    if (null != t) return e.subscribeToStateChange(u, {
                        handlerIds: [t]
                    })
                }, [e, u]), l
            }
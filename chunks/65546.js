            "use strict";
            n.r(e), n.d(e, {
                FrameLoop: function() {
                    return o
                }
            }), n("222007");
            var r = n("397968");
            n("390493");
            var i = function(t) {
                    return (0, r.requestAnimationFrame)(t)
                },
                o = function(t) {
                    void 0 === t && (t = i);
                    var e = !0,
                        n = !1,
                        o = 0,
                        u = [],
                        s = 0,
                        c = new Set,
                        l = new Set,
                        f = new Set,
                        h = function(t) {
                            var e = u.indexOf(t);
                            e < 0 && (e = u.findIndex(function(e) {
                                return e.priority > t.priority
                            }), u.splice(~e ? e : u.length, 0, t))
                        },
                        p = function() {
                            if (!e) try {
                                y(), t(p)
                            } catch (t) {
                                console.error(t)
                            }
                        },
                        d = function() {
                            e && (e = !1, 0 == o && (o = r.now(), t(p)))
                        },
                        v = [];
                    this.setTimeout = function(t, e) {
                        var n = r.now() + e,
                            i = function() {
                                var t = v.findIndex(function(t) {
                                    return t.cancel == i
                                });
                                t >= 0 && v.splice(t, 1)
                            },
                            o = a(v, function(t) {
                                return t.time > n
                            }),
                            u = {
                                time: n,
                                handler: t,
                                cancel: i
                            };
                        return v.splice(o, 0, u), d(), u
                    };
                    var y = this.advance = function() {
                        var t = r.now();
                        if (c.size && (c.forEach(h), c.clear()), v.length && r.batchedUpdates(function() {
                                var e = a(v, function(e) {
                                    return e.time > t
                                });
                                v.splice(0, e).forEach(function(t) {
                                    return t.handler()
                                })
                            }), t > o) {
                            var e = Math.min(64, t - o);
                            o = t, r.batchedUpdates(function() {
                                u.length && (r.willAdvance(u), u = u.filter(function(t) {
                                    return s = t.priority, !t.idle && t.advance(e), !t.idle
                                }), s = 0), l.size && (l.forEach(function(e) {
                                    return e(t)
                                }), l.clear()), f.size && (n = !0, f.forEach(function(e) {
                                    return e(t)
                                }), f.clear(), n = !1)
                            })
                        }
                    };
                    this.start = function(t) {
                        s > t.priority ? c.add(t) : (h(t), d())
                    }, this.onFrame = function(t) {
                        l.add(t), d()
                    }, this.onWrite = function(t) {
                        n ? t(o) : f.add(t)
                    }
                };

            function a(t, e) {
                var n = t.findIndex(e);
                return n < 0 ? t.length : n
            }
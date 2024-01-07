            n("854508"), n("222007"), n("843762"), e.exports = l;
            var r, Map = n("333222"),
                o = n("151293"),
                a = n("860860"),
                i = {};

            function s(e, t, n) {
                var o;
                return (i[t] ? o = i[t] : (o = r(t), i[t] = o), 2 == arguments.length) ? e[o] : (e[o] = n, n)
            }

            function c() {
                return 1
            }

            function l(e) {
                if (!(this instanceof l)) return new l(e);
                "number" == typeof e && (e = {
                    max: e
                }), !e && (e = {});
                var t = s(this, "max", e.max);
                (!t || "number" != typeof t || t <= 0) && s(this, "max", 1 / 0);
                var n = e.length || c;
                "function" != typeof n && (n = c), s(this, "lengthCalculator", n), s(this, "allowStale", e.stale || !1), s(this, "maxAge", e.maxAge || 0), s(this, "dispose", e.dispose), this.reset()
            }

            function u(e, t, n, r) {
                var o = n.value;
                p(e, o) && (m(e, n), !s(e, "allowStale") && (o = void 0)), o && t.call(r, o.value, o.key, e)
            }

            function d(e, t, n) {
                var r = s(e, "cache").get(t);
                if (r) {
                    var o = r.value;
                    p(e, o) ? (m(e, r), !s(e, "allowStale") && (o = void 0)) : n && s(e, "lruList").unshiftNode(r), o && (o = o.value)
                }
                return o
            }

            function p(e, t) {
                if (!t || !t.maxAge && !s(e, "maxAge")) return !1;
                var n = !1,
                    r = Date.now() - t.now;
                return n = t.maxAge ? r > t.maxAge : s(e, "maxAge") && r > s(e, "maxAge")
            }

            function f(e) {
                if (s(e, "length") > s(e, "max"))
                    for (var t = s(e, "lruList").tail; s(e, "length") > s(e, "max") && null !== t;) {
                        var n = t.prev;
                        m(e, t), t = n
                    }
            }

            function m(e, t) {
                if (t) {
                    var n = t.value;
                    s(e, "dispose") && s(e, "dispose").call(this, n.key, n.value), s(e, "length", s(e, "length") - n.length), s(e, "cache").delete(n.key), s(e, "lruList").removeNode(t)
                }
            }

            function h(e, t, n, r, o) {
                this.key = e, this.value = t, this.length = n, this.now = r, this.maxAge = o || 0
            }
            r = "function" == typeof Symbol ? function(e) {
                return Symbol.for(e)
            } : function(e) {
                return "_" + e
            }, Object.defineProperty(l.prototype, "max", {
                set: function(e) {
                    (!e || "number" != typeof e || e <= 0) && (e = 1 / 0), s(this, "max", e), f(this)
                },
                get: function() {
                    return s(this, "max")
                },
                enumerable: !0
            }), Object.defineProperty(l.prototype, "allowStale", {
                set: function(e) {
                    s(this, "allowStale", !!e)
                },
                get: function() {
                    return s(this, "allowStale")
                },
                enumerable: !0
            }), Object.defineProperty(l.prototype, "maxAge", {
                set: function(e) {
                    (!e || "number" != typeof e || e < 0) && (e = 0), s(this, "maxAge", e), f(this)
                },
                get: function() {
                    return s(this, "maxAge")
                },
                enumerable: !0
            }), Object.defineProperty(l.prototype, "lengthCalculator", {
                set: function(e) {
                    "function" != typeof e && (e = c), e !== s(this, "lengthCalculator") && (s(this, "lengthCalculator", e), s(this, "length", 0), s(this, "lruList").forEach(function(e) {
                        e.length = s(this, "lengthCalculator").call(this, e.value, e.key), s(this, "length", s(this, "length") + e.length)
                    }, this)), f(this)
                },
                get: function() {
                    return s(this, "lengthCalculator")
                },
                enumerable: !0
            }), Object.defineProperty(l.prototype, "length", {
                get: function() {
                    return s(this, "length")
                },
                enumerable: !0
            }), Object.defineProperty(l.prototype, "itemCount", {
                get: function() {
                    return s(this, "lruList").length
                },
                enumerable: !0
            }), l.prototype.rforEach = function(e, t) {
                t = t || this;
                for (var n = s(this, "lruList").tail; null !== n;) {
                    var r = n.prev;
                    u(this, e, n, t), n = r
                }
            }, l.prototype.forEach = function(e, t) {
                t = t || this;
                for (var n = s(this, "lruList").head; null !== n;) {
                    var r = n.next;
                    u(this, e, n, t), n = r
                }
            }, l.prototype.keys = function() {
                return s(this, "lruList").toArray().map(function(e) {
                    return e.key
                }, this)
            }, l.prototype.values = function() {
                return s(this, "lruList").toArray().map(function(e) {
                    return e.value
                }, this)
            }, l.prototype.reset = function() {
                s(this, "dispose") && s(this, "lruList") && s(this, "lruList").length && s(this, "lruList").forEach(function(e) {
                    s(this, "dispose").call(this, e.key, e.value)
                }, this), s(this, "cache", new Map), s(this, "lruList", new a), s(this, "length", 0)
            }, l.prototype.dump = function() {
                return s(this, "lruList").map(function(e) {
                    if (!p(this, e)) return {
                        k: e.key,
                        v: e.value,
                        e: e.now + (e.maxAge || 0)
                    }
                }, this).toArray().filter(function(e) {
                    return e
                })
            }, l.prototype.dumpLru = function() {
                return s(this, "lruList")
            }, l.prototype.inspect = function(e, t) {
                var n = "LRUCache {",
                    r = !1;
                s(this, "allowStale") && (n += "\n  allowStale: true", r = !0);
                var a = s(this, "max");
                a && a !== 1 / 0 && (r && (n += ","), n += "\n  max: " + o.inspect(a, t), r = !0);
                var i = s(this, "maxAge");
                i && (r && (n += ","), n += "\n  maxAge: " + o.inspect(i, t), r = !0);
                var l = s(this, "lengthCalculator");
                l && l !== c && (r && (n += ","), n += "\n  length: " + o.inspect(s(this, "length"), t), r = !0);
                var u = !1;
                return s(this, "lruList").forEach(function(e) {
                    u ? n += ",\n  " : (r && (n += ",\n"), u = !0, n += "\n  ");
                    var a = o.inspect(e.key).split("\n").join("\n  "),
                        s = {
                            value: e.value
                        };
                    e.maxAge !== i && (s.maxAge = e.maxAge), l !== c && (s.length = e.length), p(this, e) && (s.stale = !0), s = o.inspect(s, t).split("\n").join("\n  "), n += a + " => " + s
                }), (u || r) && (n += "\n"), n += "}"
            }, l.prototype.set = function(e, t, n) {
                var r = (n = n || s(this, "maxAge")) ? Date.now() : 0,
                    o = s(this, "lengthCalculator").call(this, t, e);
                if (s(this, "cache").has(e)) {
                    if (o > s(this, "max")) return m(this, s(this, "cache").get(e)), !1;
                    var a = s(this, "cache").get(e).value;
                    return s(this, "dispose") && s(this, "dispose").call(this, e, a.value), a.now = r, a.maxAge = n, a.value = t, s(this, "length", s(this, "length") + (o - a.length)), a.length = o, this.get(e), f(this), !0
                }
                var i = new h(e, t, o, r, n);
                return i.length > s(this, "max") ? (s(this, "dispose") && s(this, "dispose").call(this, e, t), !1) : (s(this, "length", s(this, "length") + i.length), s(this, "lruList").unshift(i), s(this, "cache").set(e, s(this, "lruList").head), f(this), !0)
            }, l.prototype.has = function(e) {
                return !(!s(this, "cache").has(e) || p(this, s(this, "cache").get(e).value)) && !0
            }, l.prototype.get = function(e) {
                return d(this, e, !0)
            }, l.prototype.peek = function(e) {
                return d(this, e, !1)
            }, l.prototype.pop = function() {
                var e = s(this, "lruList").tail;
                return e ? (m(this, e), e.value) : null
            }, l.prototype.del = function(e) {
                m(this, s(this, "cache").get(e))
            }, l.prototype.load = function(e) {
                this.reset();
                for (var t = Date.now(), n = e.length - 1; n >= 0; n--) {
                    var r = e[n],
                        o = r.e || 0;
                    if (0 === o) this.set(r.k, r.v);
                    else {
                        var a = o - t;
                        a > 0 && this.set(r.k, r.v, a)
                    }
                }
            }, l.prototype.prune = function() {
                var e = this;
                s(this, "cache").forEach(function(t, n) {
                    d(e, n, !1)
                })
            }
            "use strict";
            var r = s("129752").codes.ERR_STREAM_PREMATURE_CLOSE;

            function i() {}
            t.exports = function t(e, s, n) {
                if ("function" == typeof s) return t(e, null, s);
                !s && (s = {}), c = n || i, o = !1, n = function() {
                    if (!o) {
                        o = !0;
                        for (var t = arguments.length, e = Array(t), s = 0; s < t; s++) e[s] = arguments[s];
                        c.apply(this, e)
                    }
                };
                var c, o, f, u = s.readable || !1 !== s.readable && e.readable,
                    a = s.writable || !1 !== s.writable && e.writable,
                    d = function() {
                        !e.writable && b()
                    },
                    p = e._writableState && e._writableState.finished,
                    b = function() {
                        a = !1, p = !0, !u && n.call(e)
                    },
                    h = e._readableState && e._readableState.endEmitted,
                    l = function() {
                        u = !1, h = !0, !a && n.call(e)
                    },
                    g = function(t) {
                        n.call(e, t)
                    },
                    v = function() {
                        var t;
                        return u && !h ? ((!e._readableState || !e._readableState.ended) && (t = new r), n.call(e, t)) : a && !p ? ((!e._writableState || !e._writableState.ended) && (t = new r), n.call(e, t)) : void 0
                    },
                    x = function() {
                        e.req.on("finish", b)
                    };
                if ((f = e).setHeader && "function" == typeof f.abort) e.on("complete", b), e.on("abort", v), e.req ? x() : e.on("request", x);
                else a && !e._writableState && (e.on("end", d), e.on("close", d));
                return e.on("end", l), e.on("finish", b), !1 !== s.error && e.on("error", g), e.on("close", v),
                    function() {
                        e.removeListener("complete", b), e.removeListener("abort", v), e.removeListener("request", x), e.req && e.req.removeListener("finish", b), e.removeListener("end", d), e.removeListener("close", d), e.removeListener("finish", b), e.removeListener("end", l), e.removeListener("error", g), e.removeListener("close", v)
                    }
            }
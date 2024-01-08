            "use strict";
            var i = r("129752").codes.ERR_STREAM_PREMATURE_CLOSE;

            function n() {}
            t.exports = function t(e, r, a) {
                if ("function" == typeof r) return t(e, null, r);
                !r && (r = {}), o = a || n, s = !1, a = function() {
                    if (!s) {
                        s = !0;
                        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        o.apply(this, e)
                    }
                };
                var o, s, f, h = r.readable || !1 !== r.readable && e.readable,
                    c = r.writable || !1 !== r.writable && e.writable,
                    u = function() {
                        !e.writable && l()
                    },
                    d = e._writableState && e._writableState.finished,
                    l = function() {
                        c = !1, d = !0, !h && a.call(e)
                    },
                    p = e._readableState && e._readableState.endEmitted,
                    b = function() {
                        h = !1, p = !0, !c && a.call(e)
                    },
                    m = function(t) {
                        a.call(e, t)
                    },
                    g = function() {
                        var t;
                        return h && !p ? ((!e._readableState || !e._readableState.ended) && (t = new i), a.call(e, t)) : c && !d ? ((!e._writableState || !e._writableState.ended) && (t = new i), a.call(e, t)) : void 0
                    },
                    v = function() {
                        e.req.on("finish", l)
                    };
                if ((f = e).setHeader && "function" == typeof f.abort) e.on("complete", l), e.on("abort", g), e.req ? v() : e.on("request", v);
                else c && !e._writableState && (e.on("end", u), e.on("close", u));
                return e.on("end", b), e.on("finish", l), !1 !== r.error && e.on("error", m), e.on("close", g),
                    function() {
                        e.removeListener("complete", l), e.removeListener("abort", g), e.removeListener("request", v), e.req && e.req.removeListener("finish", l), e.removeListener("end", u), e.removeListener("close", u), e.removeListener("finish", l), e.removeListener("end", b), e.removeListener("error", m), e.removeListener("close", g)
                    }
            }
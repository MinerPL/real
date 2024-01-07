            "use strict";
            var i = r("129752").codes.ERR_STREAM_PREMATURE_CLOSE;

            function n() {}
            t.exports = function t(e, r, o) {
                if ("function" == typeof r) return t(e, null, r);
                !r && (r = {}), a = o || n, s = !1, o = function() {
                    if (!s) {
                        s = !0;
                        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        a.apply(this, e)
                    }
                };
                var a, s, f, h = r.readable || !1 !== r.readable && e.readable,
                    c = r.writable || !1 !== r.writable && e.writable,
                    u = function() {
                        !e.writable && l()
                    },
                    d = e._writableState && e._writableState.finished,
                    l = function() {
                        c = !1, d = !0, !h && o.call(e)
                    },
                    p = e._readableState && e._readableState.endEmitted,
                    b = function() {
                        h = !1, p = !0, !c && o.call(e)
                    },
                    m = function(t) {
                        o.call(e, t)
                    },
                    g = function() {
                        var t;
                        return h && !p ? ((!e._readableState || !e._readableState.ended) && (t = new i), o.call(e, t)) : c && !d ? ((!e._writableState || !e._writableState.ended) && (t = new i), o.call(e, t)) : void 0
                    },
                    y = function() {
                        e.req.on("finish", l)
                    };
                if ((f = e).setHeader && "function" == typeof f.abort) e.on("complete", l), e.on("abort", g), e.req ? y() : e.on("request", y);
                else c && !e._writableState && (e.on("end", u), e.on("close", u));
                return e.on("end", b), e.on("finish", l), !1 !== r.error && e.on("error", m), e.on("close", g),
                    function() {
                        e.removeListener("complete", l), e.removeListener("abort", g), e.removeListener("request", y), e.req && e.req.removeListener("finish", l), e.removeListener("end", u), e.removeListener("close", u), e.removeListener("finish", l), e.removeListener("end", b), e.removeListener("error", m), e.removeListener("close", g)
                    }
            }
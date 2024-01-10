            t.exports = n;
            var i = r("44170").EventEmitter;

            function n() {
                i.call(this)
            }
            r("599235")(n, i), n.Readable = r("245387"), n.Writable = r("769419"), n.Duplex = r("388765"), n.Transform = r("372614"), n.PassThrough = r("19734"), n.finished = r("362796"), n.pipeline = r("907481"), n.Stream = n, n.prototype.pipe = function(t, e) {
                var r = this;

                function n(e) {
                    t.writable && !1 === t.write(e) && r.pause && r.pause()
                }

                function o() {
                    r.readable && r.resume && r.resume()
                }
                r.on("data", n), t.on("drain", o), !t._isStdio && (!e || !1 !== e.end) && (r.on("end", s), r.on("close", f));
                var a = !1;

                function s() {
                    !a && (a = !0, t.end())
                }

                function f() {
                    !a && (a = !0, "function" == typeof t.destroy && t.destroy())
                }

                function h(t) {
                    if (c(), 0 === i.listenerCount(this, "error")) throw t
                }

                function c() {
                    r.removeListener("data", n), t.removeListener("drain", o), r.removeListener("end", s), r.removeListener("close", f), r.removeListener("error", h), t.removeListener("error", h), r.removeListener("end", c), r.removeListener("close", c), t.removeListener("close", c)
                }
                return r.on("error", h), t.on("error", h), r.on("end", c), r.on("close", c), t.on("close", c), t.emit("pipe", r), t
            }
            t.exports = i;
            var r = s("44170").EventEmitter;

            function i() {
                r.call(this)
            }
            s("599235")(i, r), i.Readable = s("245387"), i.Writable = s("769419"), i.Duplex = s("388765"), i.Transform = s("372614"), i.PassThrough = s("19734"), i.finished = s("362796"), i.pipeline = s("907481"), i.Stream = i, i.prototype.pipe = function(t, e) {
                var s = this;

                function i(e) {
                    t.writable && !1 === t.write(e) && s.pause && s.pause()
                }

                function n() {
                    s.readable && s.resume && s.resume()
                }
                s.on("data", i), t.on("drain", n), !t._isStdio && (!e || !1 !== e.end) && (s.on("end", o), s.on("close", f));
                var c = !1;

                function o() {
                    !c && (c = !0, t.end())
                }

                function f() {
                    !c && (c = !0, "function" == typeof t.destroy && t.destroy())
                }

                function u(t) {
                    if (a(), 0 === r.listenerCount(this, "error")) throw t
                }

                function a() {
                    s.removeListener("data", i), t.removeListener("drain", n), s.removeListener("end", o), s.removeListener("close", f), s.removeListener("error", u), t.removeListener("error", u), s.removeListener("end", a), s.removeListener("close", a), t.removeListener("close", a)
                }
                return s.on("error", u), t.on("error", u), s.on("end", a), s.on("close", a), t.on("close", a), t.emit("pipe", s), t
            }
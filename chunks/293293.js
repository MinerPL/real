            "use strict";
            n.r(t), n.d(t, {
                scheduler: function() {
                    return d
                },
                updateCount: function() {
                    return f
                }
            });
            var r = n("738558"),
                a = n("355070"),
                o = n("41551"),
                i = 0,
                s = {
                    attributes: !0,
                    characterData: !0,
                    childList: !0,
                    subtree: !0
                },
                u = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
                l = function(e) {
                    return void 0 === e && (e = 0), Date.now() + e
                },
                c = !1,
                d = new(function() {
                    function e() {
                        var e = this;
                        this.stopped = !0, this.listener = function() {
                            return e.schedule()
                        }
                    }
                    return e.prototype.run = function(e) {
                        var t = this;
                        if (void 0 === e && (e = 250), !c) {
                            c = !0;
                            var n = l(e);
                            (0, o.queueResizeObserver)(function() {
                                var a = !1;
                                try {
                                    a = (0, r.process)()
                                } finally {
                                    if (c = !1, e = n - l(), !i) return;
                                    a ? t.run(1e3) : e > 0 ? t.run(e) : t.start()
                                }
                            })
                        }
                    }, e.prototype.schedule = function() {
                        this.stop(), this.run()
                    }, e.prototype.observe = function() {
                        var e = this,
                            t = function() {
                                return e.observer && e.observer.observe(document.body, s)
                            };
                        document.body ? t() : a.global.addEventListener("DOMContentLoaded", t)
                    }, e.prototype.start = function() {
                        var e = this;
                        this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), u.forEach(function(t) {
                            return a.global.addEventListener(t, e.listener, !0)
                        }))
                    }, e.prototype.stop = function() {
                        var e = this;
                        !this.stopped && (this.observer && this.observer.disconnect(), u.forEach(function(t) {
                            return a.global.removeEventListener(t, e.listener, !0)
                        }), this.stopped = !0)
                    }, e
                }()),
                f = function(e) {
                    !i && e > 0 && d.start(), (i += e) || d.stop()
                }
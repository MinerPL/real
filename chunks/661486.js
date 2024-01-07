            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var a = s("193809");
            s("222007");
            var n = s("458960");
            class l {
                start() {
                    return new Promise(e => {
                        this.animation.start(() => {
                            e()
                        })
                    })
                }
                stop() {
                    this.animation.stop()
                }
                constructor(e) {
                    (0, a._)(this, "animation", void 0), this.animation = e
                }
            }
            class i {
                _map(e) {
                    return this.animations.map(e)
                }
                start() {
                    return new Promise(e => Promise.all(this._map(e => e.start())).then(() => e()))
                }
                stop() {
                    this._map(e => e.stop())
                }
                constructor(e) {
                    (0, a._)(this, "animations", void 0), this.animations = e
                }
            }
            class r {
                async start() {
                    for (let e of (this.stopped = !1, this.animations)) {
                        if (this.stopped) return;
                        await e.start()
                    }
                }
                stop() {
                    this.stopped = !0, this.animations.map(e => e.stop())
                }
                constructor(e) {
                    (0, a._)(this, "animations", void 0), (0, a._)(this, "stopped", !1), this.animations = e
                }
            }

            function o(e, t, s) {
                let a = s(e, {
                    ...t
                });
                return new l(a)
            }
            var d = {
                ...n.default,
                timing: function(e, t) {
                    return o(e, t, n.default.timing)
                },
                spring: function(e, t) {
                    return o(e, t, n.default.spring)
                },
                parallel: function(e) {
                    return new i(e)
                },
                sequence: function(e) {
                    return new r(e)
                }
            }
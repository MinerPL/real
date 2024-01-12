            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007"), n("424973");
            var s = n("483366"),
                i = n.n(s),
                r = n("769846"),
                a = n("159885"),
                o = n("502945"),
                d = n("347219"),
                u = n("289382");
            let l = 7.5,
                f = (0, a.cssValueToNumber)(r.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
                _ = 1 / 60;

            function c(e, t, n, s) {
                return t * (n / s) + e
            }

            function g() {
                return Math.min(Math.max(Math.min(.8 * window.innerWidth, .8 * window.innerHeight), u.MIN_RADIUS), u.MAX_RADIUS)
            }
            var m = class e {
                initialize() {
                    this._resizeWave()
                }
                emphasize() {
                    this.points.forEach(e => e.speedUp = 1)
                }
                terminate() {
                    this.points = []
                }
                update(e) {
                    0 !== this.points.length && (this.points.forEach(t => t.update(Math.min(e, _))), !this.hasEntered && this.points[0].x > f && (this.hasEntered = !0, this.updateWaveState(u.WaveStates.ENTERED)), this.isFilling && this.points[0].x > this.points[0].targetX && (this.isFilling = !1, this.updateWaveState(u.WaveStates.FILLED)))
                }
                render(e) {
                    if (0 === this.points.length) return;
                    let [t, ...n] = this.points;
                    e.save(), e.beginPath(), e.moveTo(t.x, t.y), n.forEach((t, s) => {
                        if (null == n[s + 1]) e.quadraticCurveTo(t.x, t.y, t.x, t.y);
                        else {
                            let i = (t.x + n[s + 1].x) / 2,
                                r = (t.y + n[s + 1].y) / 2;
                            e.quadraticCurveTo(t.x, t.y, i, r)
                        }
                    }), e.lineTo(0, 0), e.closePath(), e.fillStyle = "#000", e.globalCompositeOperation = "destination-in", e.fill(), e.restore()
                }
                fill() {
                    let e = Math.sqrt(window.innerWidth * window.innerWidth + window.innerHeight * window.innerHeight) + 100,
                        t = g() - 140,
                        n = (e, t, n, s) => {
                            e.targetX = -40 + t * Math.cos(u.TWO_PI * (.25 * (n / 15) + 0)), e.targetY = -40 + t * Math.sin(u.TWO_PI * (.25 * (n / 15) + 0)), s && (e.targetX += (0, d.randomNumber)(0, 30) - 15, e.targetY += (0, d.randomNumber)(0, 30) - 15, e.speedUp = 3, e.spring.tension = u.POINT_TENSION_DEFAULT * Math.random() * .5 + u.POINT_TENSION_DEFAULT)
                        };
                    this.points.forEach((e, s) => n(e, t, s, !0)), setTimeout(() => {
                        this.points.forEach((t, s) => {
                            n(t, e, s, !1);
                            let i = 1 - t.index / 7.5;
                            t.spring.friction += t.spring.friction + t.spring.friction * i, t.spring.tension = .7 * u.POINT_TENSION_DEFAULT + 80 * Math.random(), t.waveRange = 2 * t.waveRange
                        }), this.isFilling = !0, this.updateWaveState(u.WaveStates.FILLING)
                    }, 250)
                }
                constructor(e) {
                    this.points = [], this.hasEntered = !1, this.isFilling = !1, this._resizeWave = () => {
                        let e = g();
                        this.points.forEach((t, n) => {
                            let s = -40 + e * Math.cos(u.TWO_PI * (.25 * (n / 15) + 0)),
                                i = -40 + e * Math.sin(u.TWO_PI * (.25 * (n / 15) + 0));
                            0 !== n ? i += (0, d.randomNumber)(0, 30) - 15 : s += (0, d.randomNumber)(0, 30) - 15, t.targetX = s, t.targetY = i, t.angle = Math.atan2(i, s)
                        })
                    }, this.resizeWave = i(this._resizeWave, 200), this.updateWaveState = e, this.hasEntered = !1;
                    for (let e = 0; e <= 15; e++) this.points.push(new o.default(Math.floor(l - Math.floor(Math.abs(e - l)))))
                }
            }
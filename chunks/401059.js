            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007"), n("424973");
            var i = n("483366"),
                a = n.n(i),
                l = n("769846"),
                s = n("159885"),
                r = n("502945"),
                u = n("347219"),
                o = n("289382");
            let d = 7.5,
                c = (0, s.cssValueToNumber)(l.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
                _ = 1 / 60;

            function E(e, t, n, i) {
                return t * (n / i) + e
            }

            function f() {
                return Math.min(Math.max(Math.min(.8 * window.innerWidth, .8 * window.innerHeight), o.MIN_RADIUS), o.MAX_RADIUS)
            }
            var h = class e {
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
                    0 !== this.points.length && (this.points.forEach(t => t.update(Math.min(e, _))), !this.hasEntered && this.points[0].x > c && (this.hasEntered = !0, this.updateWaveState(o.WaveStates.ENTERED)), this.isFilling && this.points[0].x > this.points[0].targetX && (this.isFilling = !1, this.updateWaveState(o.WaveStates.FILLED)))
                }
                render(e) {
                    if (0 === this.points.length) return;
                    let [t, ...n] = this.points;
                    e.save(), e.beginPath(), e.moveTo(t.x, t.y), n.forEach((t, i) => {
                        if (null == n[i + 1]) e.quadraticCurveTo(t.x, t.y, t.x, t.y);
                        else {
                            let a = (t.x + n[i + 1].x) / 2,
                                l = (t.y + n[i + 1].y) / 2;
                            e.quadraticCurveTo(t.x, t.y, a, l)
                        }
                    }), e.lineTo(0, 0), e.closePath(), e.fillStyle = "#000", e.globalCompositeOperation = "destination-in", e.fill(), e.restore()
                }
                fill() {
                    let e = Math.sqrt(window.innerWidth * window.innerWidth + window.innerHeight * window.innerHeight) + 100,
                        t = f() - 140,
                        n = (e, t, n, i) => {
                            e.targetX = -40 + t * Math.cos(o.TWO_PI * (.25 * (n / 15) + 0)), e.targetY = -40 + t * Math.sin(o.TWO_PI * (.25 * (n / 15) + 0)), i && (e.targetX += (0, u.randomNumber)(0, 30) - 15, e.targetY += (0, u.randomNumber)(0, 30) - 15, e.speedUp = 3, e.spring.tension = o.POINT_TENSION_DEFAULT * Math.random() * .5 + o.POINT_TENSION_DEFAULT)
                        };
                    this.points.forEach((e, i) => n(e, t, i, !0)), setTimeout(() => {
                        this.points.forEach((t, i) => {
                            n(t, e, i, !1);
                            let a = 1 - t.index / 7.5;
                            t.spring.friction += t.spring.friction + t.spring.friction * a, t.spring.tension = .7 * o.POINT_TENSION_DEFAULT + 80 * Math.random(), t.waveRange = 2 * t.waveRange
                        }), this.isFilling = !0, this.updateWaveState(o.WaveStates.FILLING)
                    }, 250)
                }
                constructor(e) {
                    this.points = [], this.hasEntered = !1, this.isFilling = !1, this._resizeWave = () => {
                        let e = f();
                        this.points.forEach((t, n) => {
                            let i = -40 + e * Math.cos(o.TWO_PI * (.25 * (n / 15) + 0)),
                                a = -40 + e * Math.sin(o.TWO_PI * (.25 * (n / 15) + 0));
                            0 !== n ? a += (0, u.randomNumber)(0, 30) - 15 : i += (0, u.randomNumber)(0, 30) - 15, t.targetX = i, t.targetY = a, t.angle = Math.atan2(a, i)
                        })
                    }, this.resizeWave = a(this._resizeWave, 200), this.updateWaveState = e, this.hasEntered = !1;
                    for (let e = 0; e <= 15; e++) this.points.push(new r.default(Math.floor(d - Math.floor(Math.abs(e - d)))))
                }
            }
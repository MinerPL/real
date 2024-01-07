            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("347219"),
                a = n("289382");
            let l = -2.15;
            var s = class e {
                updateStatic() {
                    this.targetX = this.targetX + 30 * Math.cos(this.angle) * Math.sin(this.count), this.targetY = this.targetY + 30 * Math.sin(this.angle) * Math.sin(this.count), this.x = this.targetX, this.y = this.targetY
                }
                update(e) {
                    let t, n;
                    if (this.speedUp > 0 ? (this.speedUp = Math.max(0, this.speedUp - e), this.count += e * (10 * Math.min(this.speedUp, 1) + .4)) : this.count += .4 * e, t = (0, i.applySpringForce)(this.targetX, this.x, this.velX, this.spring), n = (0, i.applySpringForce)(this.targetY, this.y, this.velY, this.spring), this.velX += t * e, this.velY += n * e, this.oscillate) {
                        let a = this.targetX + this.waveRange * Math.cos(this.angle) * Math.sin(this.count),
                            l = this.targetY + this.waveRange * Math.sin(this.angle) * Math.sin(this.count);
                        t = (0, i.applySpringForce)(a, this.x, this.velX, this.spring), n = (0, i.applySpringForce)(l, this.y, this.velY, this.spring), this.velX += t * e, this.velY += n * e
                    }
                    this.x += this.velX * e, this.y += this.velY * e
                }
                render(e) {
                    e.fillStyle = "#fff", e.fillRect(this.x, this.y, 4, 4)
                }
                constructor(e) {
                    this.x = -40, this.y = -40, this.targetX = 0, this.targetY = 0, this.oscillate = !0, this.velX = 0, this.velY = 0, this.angle = 0, this.speedUp = 1.5, this.waveRange = 60, this.spring = {
                        friction: 15,
                        tension: a.POINT_TENSION_DEFAULT
                    }, this.index = e, this.spring.tension = a.POINT_TENSION_DEFAULT * Math.max(.1, e / 7) + a.POINT_TENSION_DEFAULT, this.count = l * e
                }
            }
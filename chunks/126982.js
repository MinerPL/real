            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("347219"),
                a = n("289382");
            let l = ["#7d8187", "#18191c", "#8fa2df", "#4f545c"];
            var s = class e {
                checkBounds() {
                    this.x > this.offscreenX ? this.x = -this.size : this.y > this.offscreenY ? this.y = -this.size : this.x < -this.size ? this.x = this.offscreenX : this.y < -this.size && (this.y = this.offscreenY)
                }
                update(e, t) {
                    this.checkBounds(), this.y += t * this.positionMultiplier, this.x += e * this.positionMultiplier
                }
                render(e, t) {
                    e.beginPath(), e.globalAlpha = t * this.depth / 4, e.arc(this.x, this.y, this.size, 0, a.TWO_PI, !0), e.fillStyle = this.color, e.fill(), e.globalAlpha = 1
                }
                constructor() {
                    this.size = (0, i.randomNumber)(2, 3), this.depth = (0, i.randomNumber)(1, 4), this.positionMultiplier = this.depth / 4, this.color = l[4 - this.depth], this.offscreenX = a.MAX_RADIUS + this.size, this.offscreenY = a.MAX_RADIUS + this.size, this.x = (0, i.randomNumber)(-this.size, this.offscreenX), this.y = (0, i.randomNumber)(-this.size, this.offscreenY)
                }
            }
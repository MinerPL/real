            "use strict";
            n.r(t), n.d(t, {
                ResizeObservation: function() {
                    return i
                }
            });
            var r = n("209488"),
                a = n("572462"),
                o = n("925691"),
                i = function() {
                    function e(e, t) {
                        this.target = e, this.observedBox = t || r.ResizeObserverBoxOptions.CONTENT_BOX, this.lastReportedSize = {
                            inlineSize: 0,
                            blockSize: 0
                        }
                    }
                    return e.prototype.isActive = function() {
                        var e, t = (0, a.calculateBoxSize)(this.target, this.observedBox, !0);
                        if (e = this.target, !(0, o.isSVG)(e) && !(0, o.isReplacedElement)(e) && "inline" === getComputedStyle(e).display) this.lastReportedSize = t;
                        return this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize || !1
                    }, e
                }()
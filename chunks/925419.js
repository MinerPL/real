            "use strict";
            n("70102"), n("854508");
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                Animation = n("439382");
            n("375028");
            var i = n("330139"),
                o = n("242173"),
                a = n("627445"),
                u = n("145730");

            function s(t, e) {
                return null == t ? e : t
            }
            var c = function(t) {
                function e(t) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                    }(this, e);
                    var n, r = function(t, e) {
                        if (!t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e && ("object" == typeof e || "function" == typeof e) ? e : t
                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    return r._overshootClamping = s(t.overshootClamping, !1), r._restDisplacementThreshold = s(t.restDisplacementThreshold, .001), r._restSpeedThreshold = s(t.restSpeedThreshold, .001), r._initialVelocity = t.velocity, r._lastVelocity = s(t.velocity, 0), r._toValue = t.toValue, r.__isInteraction = void 0 === t.isInteraction || t.isInteraction, void 0 !== t.bounciness || void 0 !== t.speed ? (a(void 0 === t.tension && void 0 === t.friction, "You can only define bounciness/speed or tension/friction but not both"), n = u.fromBouncinessAndSpeed(s(t.bounciness, 8), s(t.speed, 12))) : n = u.fromOrigamiTensionAndFriction(s(t.tension, 40), s(t.friction, 7)), r._tension = n.tension, r._friction = n.friction, r
                }
                return ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), r(e, [{
                    key: "start",
                    value: function(t, n, r, i) {
                        if (this.__active = !0, this._startPosition = t, this._lastPosition = this._startPosition, this._onUpdate = n, this.__onEnd = r, this._lastTime = Date.now(), i instanceof e) {
                            var o = i.getInternalState();
                            this._lastPosition = o.lastPosition, this._lastVelocity = o.lastVelocity, this._lastTime = o.lastTime
                        }
                        void 0 !== this._initialVelocity && null !== this._initialVelocity && (this._lastVelocity = this._initialVelocity), this.onUpdate()
                    }
                }, {
                    key: "getInternalState",
                    value: function() {
                        return {
                            lastPosition: this._lastPosition,
                            lastVelocity: this._lastVelocity,
                            lastTime: this._lastTime
                        }
                    }
                }, {
                    key: "onUpdate",
                    value: function() {
                        var t = this._lastPosition,
                            e = this._lastVelocity,
                            n = this._lastPosition,
                            r = this._lastVelocity,
                            o = Date.now();
                        o > this._lastTime + 64 && (o = this._lastTime + 64);
                        for (var a = Math.floor((o - this._lastTime) / 1), u = 0; u < a; ++u) {
                            var s = .001,
                                c = e,
                                l = this._tension * (this._toValue - n) - this._friction * r,
                                n = t + c * s / 2,
                                r = e + l * s / 2,
                                f = r,
                                h = this._tension * (this._toValue - n) - this._friction * r;
                            n = t + f * s / 2;
                            var p = r = e + h * s / 2,
                                d = this._tension * (this._toValue - n) - this._friction * r;
                            n = t + p * s / 2;
                            var v = r = e + d * s / 2,
                                y = this._tension * (this._toValue - n) - this._friction * r;
                            n = t + p * s / 2, r = e + d * s / 2;
                            var m = (l + 2 * (h + d) + y) / 6;
                            t += (c + 2 * (f + p) + v) / 6 * s, e += m * s
                        }
                        if (this._lastTime = o, this._lastPosition = t, this._lastVelocity = e, this._onUpdate(t), this.__active) {
                            var g = !1;
                            this._overshootClamping && 0 !== this._tension && (g = this._startPosition < this._toValue ? t > this._toValue : t < this._toValue);
                            var b = Math.abs(e) <= this._restSpeedThreshold,
                                _ = !0;
                            if (0 !== this._tension && (_ = Math.abs(this._toValue - t) <= this._restDisplacementThreshold), g || b && _) {
                                0 !== this._tension && this._onUpdate(this._toValue), this.__debouncedOnEnd({
                                    finished: !0
                                });
                                return
                            }
                            this._animationFrame = i.current(this.onUpdate.bind(this))
                        }
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.__active = !1, o.current(this._animationFrame), this.__debouncedOnEnd({
                            finished: !1
                        })
                    }
                }]), e
            }(Animation);
            t.exports = c
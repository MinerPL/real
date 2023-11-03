(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["75966"], {
        516555: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCanvas: function() {
                    return O
                },
                Environment: function() {
                    return d
                },
                SpriteCanvas: function() {
                    return L
                },
                useConfettiCannon: function() {
                    return U
                }
            });
            var i = n("884691"),
                r = n("748820"),
                o = n("414456"),
                l = n.n(o);

            function a(e, t) {
                var n = e.x,
                    i = e.y;
                return n > t.x && n < t.x + t.width && i > t.y && i < t.y + t.height
            }

            function u(e, t) {
                return e * t * t * (t > 0 ? -1 : 1)
            }
            var s = function() {
                    function e(e) {
                        this.id = e.id, this.position = e.position, this.velocity = e.velocity, this.rotation = e.rotation, this.dragCoefficient = e.dragCoefficient, this.size = e.size, this.opacity = e.opacity, this.spriteX = e.spriteX, this.spriteY = e.spriteY, this.spriteWidth = e.spriteWidth, this.spriteHeight = e.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return e.prototype.getNewForces = function(e, t) {
                        var n, i, r, o, l = e.wind * t,
                            a = -e.gravity * t;
                        return {
                            x: l + (n = this.dragCoefficient.x, n * (i = this.velocity.x) * i * (i > 0 ? -1 : 1)),
                            y: a + (r = this.dragCoefficient.y, r * (o = this.velocity.y) * o * (o > 0 ? -1 : 1))
                        }
                    }, e.prototype.update = function(e) {
                        var t = Date.now(),
                            n = (t - this._lastUpdatedAt) / 100;
                        this.rotation.update(n), this.dragCoefficient.update(n);
                        var i = this.getNewForces(e, n),
                            r = i.x,
                            o = i.y;
                        this.velocity.update(n), this.velocity.x += r, this.velocity.y += o, this.position.update(n), this.position.x += this.velocity.x * n, this.position.y += this.velocity.y * n, this.size.update(n), this.opacity.update(n), this._lastUpdatedAt = t
                    }, e.prototype.previewPositionUpdate = function(e, t) {
                        var n = t / 100,
                            i = this.velocity.previewUpdate(n),
                            r = this.getNewForces(e, n),
                            o = r.x,
                            l = r.y;
                        i.x += o, i.y += l;
                        var a = this.position.previewUpdate(n);
                        return a.x += i.x * n, a.y += i.y * n, a
                    }, e.prototype.draw = function(e, t) {
                        t.save(), t.globalAlpha = this.opacity.value, t.setTransform((new DOMMatrix).translateSelf(this.position.x * n.g.devicePixelRatio, this.position.y * n.g.devicePixelRatio).rotateSelf(this.rotation.x, this.rotation.y, this.rotation.z)), t.drawImage(e, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, -this.width / 2 * n.g.devicePixelRatio, -this.height / 2 * n.g.devicePixelRatio, this.width * n.g.devicePixelRatio, this.height * n.g.devicePixelRatio), t.restore()
                    }, e.prototype.shouldDestroy = function(e, t) {
                        return this.opacity.value < 0 || t.gravity >= 0 && this.velocity.y < 0 && this.position.y + this.height < 0 || t.gravity <= 0 && this.velocity.y > 0 && this.position.y - this.height > e.height || t.wind >= 0 && this.velocity.x > 0 && this.position.x - this.width > e.width || t.wind <= 0 && this.velocity.x < 0 && this.position.x + this.width < 0
                    }, Object.defineProperty(e.prototype, "width", {
                        get: function() {
                            return this.size.x
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "height", {
                        get: function() {
                            return this.size.y
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.addForce = function(e) {
                        this.velocity.x += e.x, this.velocity.y += e.y
                    }, e
                }(),
                c = {
                    velocity: {
                        type: "static",
                        value: 0
                    },
                    rotation: {
                        type: "static",
                        value: 0
                    },
                    dragCoefficient: {
                        type: "static",
                        value: .001
                    },
                    opacity: {
                        type: "static",
                        value: 1
                    }
                },
                d = function(e) {
                    var t = void 0 === e ? {} : e,
                        n = t.gravity,
                        i = t.wind;
                    this.gravity = -9.8, this.wind = 0, this.gravity = null != n ? n : this.gravity, this.wind = null != i ? i : this.wind
                },
                E = function(e, t) {
                    return (E = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    })(e, t)
                };

            function _(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                E(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var f = function() {
                    return (f = Object.assign || function(e) {
                        for (var t, n = 1, i = arguments.length; n < i; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                },
                I = function(e) {
                    this.value = e
                },
                h = function() {
                    function e(e, t) {
                        this._x = e, this._y = t
                    }
                    return e.prototype.update = function(e) {
                        this._x.update(e), this._y.update(e)
                    }, e.prototype.previewUpdate = function(e) {
                        return {
                            x: this._x.previewUpdate(e),
                            y: this._y.previewUpdate(e)
                        }
                    }, Object.defineProperty(e.prototype, "x", {
                        get: function() {
                            return this._x.value
                        },
                        set: function(e) {
                            this._x.value = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "y", {
                        get: function() {
                            return this._y.value
                        },
                        set: function(e) {
                            this._y.value = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e
                }(),
                p = function(e) {
                    function t(t, n, i) {
                        var r = e.call(this, t, n) || this;
                        return r._z = i, r
                    }
                    return _(t, e), t.prototype.update = function(t) {
                        e.prototype.update.call(this, t), this._z.update(t)
                    }, t.prototype.previewUpdate = function(t) {
                        var n = e.prototype.previewUpdate.call(this, t);
                        return f(f({}, n), {
                            z: this._z.previewUpdate(t)
                        })
                    }, Object.defineProperty(t.prototype, "z", {
                        get: function() {
                            return this._z.value
                        },
                        set: function(e) {
                            this._z.value = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(h),
                T = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return _(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(I),
                N = function(e) {
                    function t(t, n) {
                        var i = e.call(this, t) || this;
                        return i.addValue = n, i
                    }
                    return _(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(I),
                S = function(e) {
                    function t(t, n, i, r, o, l) {
                        var a = e.call(this, t) || this;
                        a.min = n, a.max = i, a.duration = r;
                        var u = a.value / (a.max - a.min) * a.duration,
                            s = isNaN(u) ? 0 : u;
                        return a.timePassed = s < 0 ? a.duration - s : s, a.directionMultiplier = o, a.easingFunction = l, a
                    }
                    return _(t, e), t.prototype.update = function(e) {
                        var t = this.doUpdate(e),
                            n = t[0],
                            i = t[1],
                            r = t[2];
                        this.value = n, this.directionMultiplier = r, this.timePassed = i
                    }, t.prototype.previewUpdate = function(e) {
                        return this.doUpdate(e)[0]
                    }, t.prototype.doUpdate = function(e) {
                        var t = this.max - this.min,
                            n = this.timePassed + e * this.directionMultiplier,
                            i = Math.min(Math.max(n, 0), this.duration),
                            r = n < 0 || n > this.duration ? -1 * this.directionMultiplier : this.directionMultiplier,
                            o = this.easingFunction(i, this.min, t, this.duration);
                        return [isNaN(o) ? 0 : o, i, r]
                    }, t
                }(I);

            function g(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function C(e) {
                var t = Math.floor(g(0, e.length - 1));
                return [e[t], t]
            }

            function A(e, t) {
                return C([e, t])[0]
            }

            function v(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : e
            }

            function m(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e,
                    z: e
                } : e
            }

            function R(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = v(e.value);
                            return new h(new T(t.x), new T(t.y));
                        case "static-random":
                            var n = v(e.minValue),
                                i = v(e.maxValue);
                            return new h(new T(g(n.x, i.x)), new T(g(n.y, i.y)));
                        case "linear":
                            t = v(e.value);
                            var r = v(e.addValue);
                            return new h(new N(t.x, r.x), new N(t.y, r.y));
                        case "linear-random":
                            n = v(e.minValue), i = v(e.maxValue);
                            var o = v(e.minAddValue),
                                l = v(e.maxAddValue);
                            return new h(new N(g(n.x, i.x), g(o.x, l.x)), new N(g(n.y, i.y), g(o.x, l.x)));
                        case "oscillating":
                            t = v(e.value);
                            var a = v(e.start),
                                u = v(e.final),
                                s = v(e.duration),
                                c = v(e.direction);
                            return new h(new S(t.x, a.x, u.x, s.x, c.x, e.easingFunction), new S(t.y, a.y, u.y, s.x, c.y, e.easingFunction));
                        case "oscillating-random":
                            n = v(e.minValue), i = v(e.maxValue);
                            var d = v(e.minStart),
                                E = v(e.maxStart),
                                _ = v(e.minFinal),
                                f = v(e.maxFinal),
                                I = v(e.minDuration),
                                p = v(e.maxDuration),
                                m = v(e.minDirection),
                                R = v(e.maxDirection);
                            return new h(new S(g(n.x, i.x), g(d.x, E.x), g(_.x, f.x), g(I.x, p.x), A(m.x, R.x), C(e.easingFunctions)[0]), new S(g(n.y, i.y), g(d.y, E.y), g(_.y, f.y), g(I.y, p.y), A(m.y, R.y), C(e.easingFunctions)[0]))
                    }
                }(f(f({}, e), {
                    valueType: "Vector2"
                }))
            }
            var O = i.forwardRef(function(e, t) {
                var o = e.className,
                    l = e.environment,
                    u = e.onClick,
                    d = e.onMouseDown,
                    E = e.onMouseMove,
                    _ = e.onMouseUp,
                    I = e.onBeforeRender,
                    h = e.onAfterRender,
                    v = function(e, t) {
                        var n = {};
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (n[i] = e[i]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) 0 > t.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                        }
                        return n
                    }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    O = i.useRef(null),
                    L = i.useRef(new Map),
                    U = i.useRef(null),
                    y = i.useRef(0),
                    D = i.useRef(0),
                    M = i.useCallback(function() {
                        var e = O.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == I || I(t), L.current.forEach(function(n, i) {
                                    var r = n.confetti,
                                        o = n.spriteCanvas;
                                    r.update(l), r.draw(o, t), r.shouldDestroy(e, l) && L.current.delete(i)
                                }), null == h || h(t), L.current.size > 0 ? U.current = window.requestAnimationFrame(M) : (t.clearRect(0, 0, e.width, e.height), U.current = null);
                                var n = Date.now();
                                0 !== y.current && (D.current = 1e3 / (n - y.current)), y.current = n
                            }
                        }
                    }, [l, h, I]);
                i.useEffect(function() {
                    null != U.current && (window.cancelAnimationFrame(U.current), U.current = window.requestAnimationFrame(M))
                }, [M]);
                var P = i.useCallback(function(e, t) {
                        L.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == U.current && M()
                    }, [M]),
                    b = i.useCallback(function(e, t, n, i, o) {
                        var l, a, u, d, E, _, I, h, v, O, L, U, y, D, M, b = (l = null !== (M = e.id) && void 0 !== M ? M : (0, r.v4)(), a = e, u = n, d = i, E = o, h = R((I = (_ = a, f(f({
                            id: l
                        }, c), _))).size), O = (v = function(e, t) {
                            if (null != e) {
                                var n = t.sprites.findIndex(function(t) {
                                    return "string" == typeof e ? t.src === e && t.colorize : t.src === e.src && t.colorize === e.colorize
                                });
                                if (-1 !== n) return [e, n]
                            }
                            return C(t.sprites)
                        }(d, u))[0], L = v[1], U = function(e, t, n) {
                            if (!("string" == typeof(i = e) || i.colorize)) return 0;
                            var i, r = null != t ? n.colors.findIndex(function(e) {
                                return e === t
                            }) : -1;
                            return -1 !== r ? r : Math.floor(g(0, n.colors.length - 1))
                        }(null != d ? d : O, E, u), new s({
                            id: l,
                            position: R(I.position),
                            velocity: R(I.velocity),
                            rotation: (y = I.rotation, function(e) {
                                switch (e.type) {
                                    case "static":
                                        var t = m(e.value);
                                        return new p(new T(t.x), new T(t.y), new T(t.z));
                                    case "static-random":
                                        var n = m(e.minValue),
                                            i = m(e.maxValue);
                                        return new p(new T(g(n.x, i.x)), new T(g(n.y, i.y)), new T(g(n.z, i.z)));
                                    case "linear":
                                        t = m(e.value);
                                        var r = m(e.addValue);
                                        return new p(new N(t.x, r.x), new N(t.y, r.y), new N(t.z, r.z));
                                    case "linear-random":
                                        n = m(e.minValue), i = m(e.maxValue);
                                        var o = m(e.minAddValue),
                                            l = m(e.maxAddValue);
                                        return new p(new N(g(n.x, i.x), g(o.x, l.x)), new N(g(n.y, i.y), g(o.y, l.y)), new N(g(n.z, i.z), g(o.z, l.z)));
                                    case "oscillating":
                                        t = m(e.value);
                                        var a = m(e.start),
                                            u = m(e.final),
                                            s = m(e.duration),
                                            c = m(e.direction);
                                        return new p(new S(t.x, a.x, u.x, s.x, c.x, e.easingFunction), new S(t.y, a.y, u.y, s.z, c.y, e.easingFunction), new S(t.z, a.z, u.z, s.z, c.z, e.easingFunction));
                                    case "oscillating-random":
                                        n = m(e.minValue), i = m(e.maxValue);
                                        var d = m(e.minStart),
                                            E = m(e.maxStart),
                                            _ = m(e.minFinal),
                                            f = m(e.maxFinal),
                                            I = m(e.minDuration),
                                            h = m(e.maxDuration),
                                            v = m(e.minDirection),
                                            R = m(e.maxDirection);
                                        return new p(new S(g(n.x, i.x), g(d.x, E.x), g(_.x, f.x), g(I.x, h.x), A(v.x, R.x), C(e.easingFunctions)[0]), new S(g(n.y, i.y), g(d.y, E.y), g(_.y, f.y), g(I.y, h.y), A(v.y, R.y), C(e.easingFunctions)[0]), new S(g(n.z, i.z), g(d.z, E.z), g(_.z, f.z), g(I.z, h.z), A(v.z, R.z), C(e.easingFunctions)[0]))
                                }
                            }(f(f({}, y), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: R(I.dragCoefficient),
                            size: h,
                            opacity: (D = I.opacity, function(e) {
                                switch (e.type) {
                                    case "static":
                                        return new T(e.value);
                                    case "static-random":
                                        return new T(g(e.minValue, e.maxValue));
                                    case "linear":
                                        return new N(e.value, e.addValue);
                                    case "linear-random":
                                        return new N(g(e.minValue, e.maxValue), g(e.minAddValue, e.maxAddValue));
                                    case "oscillating":
                                        return new S(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                                    case "oscillating-random":
                                        return new S(g(e.minValue, e.maxValue), g(e.minStart, e.maxStart), g(e.minFinal, e.maxFinal), g(e.minDuration, e.maxDuration), A(e.minDirection, e.maxDirection), C(e.easingFunctions)[0])
                                }
                            }(f(f({}, D), {
                                valueType: "number"
                            }))),
                            spriteX: U * u.spriteWidth + 2 * U,
                            spriteY: L * u.spriteHeight + 2 * L,
                            spriteWidth: u.spriteWidth,
                            spriteHeight: u.spriteHeight
                        }));
                        return P(b, t), b
                    }, [P]),
                    w = i.useCallback(function(e) {
                        L.current.delete(e)
                    }, []),
                    G = i.useCallback(function() {
                        return L.current.clear()
                    }, []),
                    x = i.useCallback(function() {
                        return O.current
                    }, []);
                i.useImperativeHandle(t, function() {
                    return {
                        createConfetti: b,
                        addConfetti: P,
                        deleteConfetti: w,
                        clearConfetti: G,
                        getCanvas: x
                    }
                }, [b, P, w, G, x]);
                var F = i.useCallback(function(e, t) {
                        var n, i, r = t.clickHandler,
                            o = t.mouseHandler;
                        if (null != r || null != o) {
                            var u = null === (n = O.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != u) {
                                var s = function(e, t) {
                                    if (null == t) throw Error("element should not be null");
                                    var n = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - n.left,
                                        y: e.clientY - n.top
                                    }
                                }(e, O.current);
                                if (a(s, {
                                        x: u.left,
                                        y: u.top,
                                        width: u.width,
                                        height: u.height
                                    })) {
                                    if (null != o) return o(e);
                                    if (null != r) {
                                        var c = -1e3 / D.current * 2,
                                            d = function(e, t) {
                                                for (var n = 0, i = Array.from(e.values()); n < i.length; n++) {
                                                    var r = i[n];
                                                    if (null != r && t(r)) return r
                                                }
                                                return null
                                            }(L.current, function(e) {
                                                var t = e.confetti,
                                                    n = t.previewPositionUpdate(l, c);
                                                return a(s, {
                                                    x: n.x - t.width / 2,
                                                    y: n.y - t.height / 2,
                                                    width: t.width,
                                                    height: t.height
                                                })
                                            });
                                        r(e, null !== (i = null == d ? void 0 : d.confetti) && void 0 !== i ? i : null)
                                    }
                                }
                            }
                        }
                    }, [l]),
                    B = i.useCallback(function(e) {
                        return F(e, {
                            clickHandler: u
                        })
                    }, [F, u]),
                    V = i.useCallback(function(e) {
                        return F(e, {
                            clickHandler: d
                        })
                    }, [F, d]),
                    H = i.useCallback(function(e) {
                        return F(e, {
                            mouseHandler: E
                        })
                    }, [F, E]),
                    k = i.useCallback(function(e) {
                        return F(e, {
                            mouseHandler: _
                        })
                    }, [F, _]);
                return i.useEffect(function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", B, u), e("mousedown", V, d), e("mousemove", H, E), e("mouseup", k, _),
                        function() {
                            window.removeEventListener("click", B), window.removeEventListener("mousedown", V), window.removeEventListener("mousemove", H), window.removeEventListener("mouseup", H)
                        }
                }, [B, V, H, k, u, d, E, _]), i.useEffect(function() {
                    var e = O.current,
                        t = new ResizeObserver(function() {
                            ! function(e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        i = t.width,
                                        r = t.height;
                                    e.width = i * n.g.devicePixelRatio, e.height = r * n.g.devicePixelRatio
                                }
                            }(O.current)
                        });
                    return null != e && t.observe(e),
                        function() {
                            null != e && t.unobserve(e)
                        }
                }, []), i.createElement("canvas", f({}, v, {
                    className: o,
                    ref: O
                }))
            });
            ! function(e, t) {
                void 0 === t && (t = {});
                var n = t.insertAt;
                if (e && "undefined" != typeof document) {
                    var i = document.head || document.getElementsByTagName("head")[0],
                        r = document.createElement("style");
                    r.type = "text/css", "top" === n && i.firstChild ? i.insertBefore(r, i.firstChild) : i.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
                }
            }(".SpriteCanvas-module_spriteCanvasHidden__ndzQV {\n  display: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -100%;\n}\n");
            var L = i.forwardRef(function(e, t) {
                var n, o = e.className,
                    a = e.visible,
                    u = void 0 !== a && a,
                    s = e.sprites,
                    c = e.colors,
                    d = e.spriteWidth,
                    E = e.spriteHeight,
                    _ = i.useRef(null),
                    f = i.useRef([]),
                    I = i.useRef(!1),
                    h = i.useRef({});
                i.useImperativeHandle(t, function() {
                    return {
                        getCanvas: function() {
                            return _.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: f.current,
                                colors: c,
                                spriteWidth: d,
                                spriteHeight: E
                            }
                        },
                        addReadyListener: function(e) {
                            var t = (0, r.v4)();
                            return h.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete h.current[e]
                        },
                        isReady: I.current
                    }
                }, [c, E, d]);
                var p = i.useCallback(function() {
                        var e = _.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height), f.current.forEach(function(e, n) {
                            var i = function(i, r) {
                                var o = d * r + 2 * r,
                                    l = E * n + 2 * n;
                                if (t.drawImage(e.image, o, l, d, E), null != i) {
                                    for (var a, u, s = t.getImageData(o, l, d, E), c = ("#" === (a = i)[0] && (a = a.slice(1)), {
                                            r: (u = parseInt(a, 16)) >> 16 & 255,
                                            g: u >> 8 & 255,
                                            b: 255 & u
                                        }), _ = 0; _ < s.data.length; _ += 4) s.data[_] = c.r, s.data[_ + 1] = c.g, s.data[_ + 2] = c.b;
                                    t.putImageData(s, o, l)
                                }
                            };
                            e.colorize ? c.forEach(function(e, t) {
                                return i(e, t)
                            }) : i(null, 0)
                        }))
                    }, [c, E, d]),
                    T = i.useCallback(function() {
                        var e = s.map(function(e) {
                            var t = new Image,
                                n = "string" == typeof e ? e : e.src,
                                i = "string" == typeof e || e.colorize;
                            t.src = n;
                            var r = new Promise(function(e) {
                                t.onload = e
                            });
                            return {
                                colorize: i,
                                image: t,
                                src: n,
                                loadPromise: r
                            }
                        });
                        return Promise.all(e.map(function(e) {
                            return e.loadPromise
                        })).then(function() {
                            f.current = e.map(function(e) {
                                return {
                                    colorize: e.colorize,
                                    image: e.image,
                                    src: e.src
                                }
                            })
                        })
                    }, [s]),
                    N = i.useCallback(function(e) {
                        for (var t in h.current) h.current[t](e)
                    }, []),
                    S = i.useCallback(function() {
                        var e, t, n, i;
                        return e = void 0, t = void 0, n = void 0, i = function() {
                            return function(e, t) {
                                var n, i, r, o, l = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & r[0]) throw r[1];
                                        return r[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return o = {
                                    next: a(0),
                                    throw: a(1),
                                    return: a(2)
                                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                                    return this
                                }), o;

                                function a(a) {
                                    return function(u) {
                                        return function(a) {
                                            if (n) throw TypeError("Generator is already executing.");
                                            for (; o && (o = 0, a[0] && (l = 0)), l;) try {
                                                if (n = 1, i && (r = 2 & a[0] ? i.return : a[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, a[1])).done) return r;
                                                switch (i = 0, r && (a = [2 & a[0], r.value]), a[0]) {
                                                    case 0:
                                                    case 1:
                                                        r = a;
                                                        break;
                                                    case 4:
                                                        return l.label++, {
                                                            value: a[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        l.label++, i = a[1], a = [0];
                                                        continue;
                                                    case 7:
                                                        a = l.ops.pop(), l.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(r = (r = l.trys).length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                            l = 0;
                                                            continue
                                                        }
                                                        if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                                            l.label = a[1];
                                                            break
                                                        }
                                                        if (6 === a[0] && l.label < r[1]) {
                                                            l.label = r[1], r = a;
                                                            break
                                                        }
                                                        if (r && l.label < r[2]) {
                                                            l.label = r[2], l.ops.push(a);
                                                            break
                                                        }
                                                        r[2] && l.ops.pop(), l.trys.pop();
                                                        continue
                                                }
                                                a = t.call(e, l)
                                            } catch (e) {
                                                a = [6, e], i = 0
                                            } finally {
                                                n = r = 0
                                            }
                                            if (5 & a[0]) throw a[1];
                                            return {
                                                value: a[0] ? a[1] : void 0,
                                                done: !0
                                            }
                                        }([a, u])
                                    }
                                }
                            }(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, T()];
                                    case 1:
                                        return e.sent(), p(), I.current = !0, N(!0), [2]
                                }
                            })
                        }, new(n || (n = Promise))(function(r, o) {
                            function l(e) {
                                try {
                                    u(i.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function a(e) {
                                try {
                                    u(i.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function u(e) {
                                var t;
                                e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                                    e(t)
                                })).then(l, a)
                            }
                            u((i = i.apply(e, t || [])).next())
                        })
                    }, [N, T, p]);
                return i.useEffect(function() {
                    S()
                }, [S]), i.useEffect(function() {
                    return function() {
                        return N(!1)
                    }
                }, [N]), i.useEffect(function() {
                    null != _.current && (_.current.width = (d + 2) * Math.max(c.length, 1), _.current.height = (E + 2) * s.length)
                }, [c.length, E, d, s.length]), i.createElement("canvas", {
                    ref: _,
                    className: l(o, ((n = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !u, n))
                })
            });

            function U(e, t) {
                var n, r = i.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
                    o = r[0],
                    l = r[1];
                i.useEffect(function() {
                    var e = null == t ? void 0 : t.addReadyListener(l);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }, [t]);
                var a = i.useCallback(function(n, i) {
                        var r = void 0 === i ? {} : i,
                            o = r.sprite,
                            l = r.color,
                            a = null == t ? void 0 : t.getCreateData(),
                            u = null == t ? void 0 : t.getCanvas();
                        if (null != u && null != a && 0 !== a.sprites.length) return null == e ? void 0 : e.createConfetti(n, u, a, o, l)
                    }, [e, t]),
                    u = i.useCallback(function(e, t, n) {
                        for (var i = [], r = 0; r < t; r++) {
                            var o = a(e, n);
                            o && i.push(o)
                        }
                        return i
                    }, [a]),
                    s = i.useCallback(function(n) {
                        var i = null == t ? void 0 : t.getCanvas();
                        null != i && (null == e || e.addConfetti(n, i))
                    }, [e, t]),
                    c = i.useCallback(function(t) {
                        null == e || e.deleteConfetti(t)
                    }, [e]),
                    d = i.useCallback(function() {
                        return null == e ? void 0 : e.clearConfetti()
                    }, [e]);
                return i.useMemo(function() {
                    return {
                        createConfetti: a,
                        createMultipleConfetti: u,
                        addConfetti: s,
                        clearConfetti: d,
                        deleteConfetti: c,
                        isReady: o && null != t && null != e
                    }
                }, [s, d, e, a, u, c, o, t])
            }
        },
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    i = e.length;
                if (i > n) return !1;
                if (i === n) return e === t;
                e: for (var r = 0, o = 0; r < i; r++) {
                    for (var l = e.charCodeAt(r); o < n;)
                        if (t.charCodeAt(o++) === l) continue e;
                    return !1
                }
                return !0
            }
        },
        48648: function(e, t, n) {
            if (!i) var i = {
                map: function(e, t) {
                    var n = {};
                    return t ? e.map(function(e, i) {
                        return n.index = i, t.call(n, e)
                    }) : e.slice()
                },
                naturalOrder: function(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                },
                sum: function(e, t) {
                    var n = {};
                    return e.reduce(t ? function(e, i, r) {
                        return n.index = r, e + t.call(n, i)
                    } : function(e, t) {
                        return e + t
                    }, 0)
                },
                max: function(e, t) {
                    return Math.max.apply(null, t ? i.map(e, t) : e)
                }
            };
            var r = function() {
                var e = 3;

                function t(e, t, n) {
                    return (e << 10) + (t << 5) + n
                }

                function n(e) {
                    var t = [],
                        n = !1;

                    function i() {
                        t.sort(e), n = !0
                    }
                    return {
                        push: function(e) {
                            t.push(e), n = !1
                        },
                        peek: function(e) {
                            return !n && i(), void 0 === e && (e = t.length - 1), t[e]
                        },
                        pop: function() {
                            return !n && i(), t.pop()
                        },
                        size: function() {
                            return t.length
                        },
                        map: function(e) {
                            return t.map(e)
                        },
                        debug: function() {
                            return !n && i(), t
                        }
                    }
                }

                function r(e, t, n, i, r, o, l) {
                    this.r1 = e, this.r2 = t, this.g1 = n, this.g2 = i, this.b1 = r, this.b2 = o, this.histo = l
                }

                function o() {
                    this.vboxes = new n(function(e, t) {
                        return i.naturalOrder(e.vbox.count() * e.vbox.volume(), t.vbox.count() * t.vbox.volume())
                    })
                }
                return r.prototype = {
                    volume: function(e) {
                        return (!this._volume || e) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(e) {
                        var n = this.histo;
                        if (!this._count_set || e) {
                            var i, r, o, l = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (r = this.g1; r <= this.g2; r++)
                                    for (o = this.b1; o <= this.b2; o++) l += n[t(i, r, o)] || 0;
                            this._count = l, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new r(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(e) {
                        var n = this.histo;
                        if (!this._avg || e) {
                            var i, r, o, l, a = 0,
                                u = 8,
                                s = 0,
                                c = 0,
                                d = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (o = this.g1; o <= this.g2; o++)
                                    for (l = this.b1; l <= this.b2; l++) a += i = n[t(r, o, l)] || 0, s += i * (r + .5) * u, c += i * (o + .5) * u, d += i * (l + .5) * u;
                            a ? this._avg = [~~(s / a), ~~(c / a), ~~(d / a)] : this._avg = [~~(u * (this.r1 + this.r2 + 1) / 2), ~~(u * (this.g1 + this.g2 + 1) / 2), ~~(u * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(t) {
                        var n = t[0] >> e;
                        return gval = t[1] >> e, bval = t[2] >> e, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, o.prototype = {
                    push: function(e) {
                        this.vboxes.push({
                            vbox: e,
                            color: e.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map(function(e) {
                            return e.color
                        })
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(e) {
                        for (var t = this.vboxes, n = 0; n < t.size(); n++)
                            if (t.peek(n).vbox.contains(e)) return t.peek(n).color;
                        return this.nearest(e)
                    },
                    nearest: function(e) {
                        for (var t, n, i, r = this.vboxes, o = 0; o < r.size(); o++)((n = Math.sqrt(Math.pow(e[0] - r.peek(o).color[0], 2) + Math.pow(e[1] - r.peek(o).color[1], 2) + Math.pow(e[2] - r.peek(o).color[2], 2))) < t || void 0 === t) && (t = n, i = r.peek(o).color);
                        return i
                    },
                    forcebw: function() {
                        var e = this.vboxes;
                        e.sort(function(e, t) {
                            return i.naturalOrder(i.sum(e.color), i.sum(t.color))
                        });
                        var t = e[0].color;
                        t[0] < 5 && t[1] < 5 && t[2] < 5 && (e[0].color = [0, 0, 0]);
                        var n = e.length - 1,
                            r = e[n].color;
                        r[0] > 251 && r[1] > 251 && r[2] > 251 && (e[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(l, a) {
                        if (!l.length || a < 2 || a > 256) return !1;
                        var u, s, c, d, E, _, f, I, h, p, T, N, S, g, C, A, v = (u = l, E = Array(32768), u.forEach(function(n) {
                                c = n[0] >> e, d = n[1] >> e, E[s = t(c, d, n[2] >> e)] = (E[s] || 0) + 1
                            }), E),
                            m = 0;
                        v.forEach(function() {
                            m++
                        });
                        var R = (_ = l, f = v, T = 1e6, N = 0, S = 1e6, g = 0, C = 1e6, A = 0, _.forEach(function(t) {
                                I = t[0] >> e, h = t[1] >> e, p = t[2] >> e, I < T ? T = I : I > N && (N = I), h < S ? S = h : h > g && (g = h), p < C ? C = p : p > A && (A = p)
                            }), new r(T, N, S, g, C, A, f)),
                            O = new n(function(e, t) {
                                return i.naturalOrder(e.count(), t.count())
                            });

                        function L(e, n) {
                            for (var r, o = 1, l = 0; l < 1e3;) {
                                if (!(r = e.pop()).count()) {
                                    e.push(r), l++;
                                    continue
                                }
                                var a = function(e, n) {
                                        if (n.count()) {
                                            var r = n.r2 - n.r1 + 1,
                                                o = n.g2 - n.g1 + 1,
                                                l = n.b2 - n.b1 + 1,
                                                a = i.max([r, o, l]);
                                            if (1 == n.count()) return [n.copy()];
                                            var u, s, c, d, E, _ = 0,
                                                f = [],
                                                I = [];
                                            if (a == r)
                                                for (u = n.r1; u <= n.r2; u++) {
                                                    for (d = 0, s = n.g1; s <= n.g2; s++)
                                                        for (c = n.b1; c <= n.b2; c++) d += e[E = t(u, s, c)] || 0;
                                                    _ += d, f[u] = _
                                                } else if (a == o)
                                                    for (u = n.g1; u <= n.g2; u++) {
                                                        for (d = 0, s = n.r1; s <= n.r2; s++)
                                                            for (c = n.b1; c <= n.b2; c++) d += e[E = t(s, u, c)] || 0;
                                                        _ += d, f[u] = _
                                                    } else
                                                        for (u = n.b1; u <= n.b2; u++) {
                                                            for (d = 0, s = n.r1; s <= n.r2; s++)
                                                                for (c = n.g1; c <= n.g2; c++) d += e[E = t(s, c, u)] || 0;
                                                            _ += d, f[u] = _
                                                        }
                                            return f.forEach(function(e, t) {
                                                I[t] = _ - e
                                            }), h(a == r ? "r" : a == o ? "g" : "b")
                                        }

                                        function h(e) {
                                            var t, i, r, o, l, a = e + "1",
                                                s = e + "2",
                                                c = 0;
                                            for (u = n[a]; u <= n[s]; u++)
                                                if (f[u] > _ / 2) {
                                                    for (r = n.copy(), o = n.copy(), t = u - n[a], l = t <= (i = n[s] - u) ? Math.min(n[s] - 1, ~~(u + i / 2)) : Math.max(n[a], ~~(u - 1 - t / 2)); !f[l];) l++;
                                                    for (c = I[l]; !c && f[l - 1];) c = I[--l];
                                                    return r[s] = l, o[a] = r[s] + 1, [r, o]
                                                }
                                        }
                                    }(v, r),
                                    u = a[0],
                                    s = a[1];
                                if (!u) return;
                                if (e.push(u), s && (e.push(s), o++), o >= n || l++ > 1e3) return
                            }
                        }
                        O.push(R), L(O, .75 * a);
                        for (var U = new n(function(e, t) {
                                return i.naturalOrder(e.count() * e.volume(), t.count() * t.volume())
                            }); O.size();) U.push(O.pop());
                        L(U, a - U.size());
                        for (var y = new o; U.size();) y.push(U.pop());
                        return y
                    }
                }
            }();
            e.exports = r.quantize
        },
        48174: function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return i.default
                },
                useStableMemo: function() {
                    return r.default
                },
                useLazyValue: function() {
                    return o.default
                }
            });
            var i = n("14716"),
                r = n("745510"),
                o = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r() {
                let [, e] = (0, i.useState)({});
                return (0, i.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691");
            let r = {};

            function o(e) {
                let t = (0, i.useRef)(r);
                return t.current === r && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("884691"),
                r = n("48174");
            let o = [];

            function l(e, t) {
                let n = (0, i.useRef)(),
                    l = (0, i.useRef)(o);
                return l.current === o ? (n.current = e(), l.current = t) : !(0, r.default)(t, l.current) && (n.current = e(), l.current = t), n.current
            }
        },
        445356: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c8718df1382ba878f1fc.svg"
        },
        460287: function(e, t, n) {
            "use strict";
            e.exports = n.p + "08e581a604e6635d1424.svg"
        },
        506838: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                P: function() {
                    return Z
                },
                match: function() {
                    return q
                }
            });
            let i = Symbol.for("@ts-pattern/matcher"),
                r = Symbol.for("@ts-pattern/isVariadic"),
                o = "@ts-pattern/anonymous-select-key",
                l = e => !!(e && "object" == typeof e),
                a = e => e && !!e[i],
                u = (e, t, n) => {
                    if (a(e)) {
                        let r = e[i](),
                            {
                                matched: o,
                                selections: l
                            } = r.match(t);
                        return o && l && Object.keys(l).forEach(e => n(e, l[e])), o
                    }
                    if (l(e)) {
                        if (!l(t)) return !1;
                        if (Array.isArray(e)) {
                            if (!Array.isArray(t)) return !1;
                            let i = [],
                                o = [],
                                l = [];
                            for (let t of e.keys()) {
                                let n = e[t];
                                a(n) && n[r] ? l.push(n) : l.length ? o.push(n) : i.push(n)
                            }
                            if (l.length) {
                                if (l.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (t.length < i.length + o.length) return !1;
                                let e = t.slice(0, i.length),
                                    r = 0 === o.length ? [] : t.slice(-o.length),
                                    a = t.slice(i.length, 0 === o.length ? 1 / 0 : -o.length);
                                return i.every((t, i) => u(t, e[i], n)) && o.every((e, t) => u(e, r[t], n)) && (0 === l.length || u(l[0], a, n))
                            }
                            return e.length === t.length && e.every((e, i) => u(e, t[i], n))
                        }
                        return Object.keys(e).every(r => {
                            let o = e[r];
                            return (r in t || a(o) && "optional" === o[i]().matcherType) && u(o, t[r], n)
                        })
                    }
                    return Object.is(t, e)
                },
                s = e => {
                    var t, n, r;
                    return l(e) ? a(e) ? null != (t = null == (n = (r = e[i]()).getSelectionKeys) ? void 0 : n.call(r)) ? t : [] : Array.isArray(e) ? c(e, s) : c(Object.values(e), s) : []
                },
                c = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);

            function d(e) {
                return Object.assign(e, {
                    optional: () => E(e),
                    and: t => I(e, t),
                    or: t => h(e, t),
                    select: t => void 0 === t ? T(e) : T(t, e)
                })
            }

            function E(e) {
                return d({
                    [i]: () => ({
                        match: t => {
                            let n = {},
                                i = (e, t) => {
                                    n[e] = t
                                };
                            return void 0 === t ? (s(e).forEach(e => i(e, void 0)), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: u(e, t, i),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => s(e),
                        matcherType: "optional"
                    })
                })
            }
            let _ = (e, t) => {
                    for (let n of e)
                        if (!t(n)) return !1;
                    return !0
                },
                f = (e, t) => {
                    for (let [n, i] of e.entries())
                        if (!t(i, n)) return !1;
                    return !0
                };

            function I() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return d({
                    [i]: () => ({
                        match: e => {
                            let n = {},
                                i = (e, t) => {
                                    n[e] = t
                                };
                            return {
                                matched: t.every(t => u(t, e, i)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => c(t, s),
                        matcherType: "and"
                    })
                })
            }

            function h() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return d({
                    [i]: () => ({
                        match: e => {
                            let n = {},
                                i = (e, t) => {
                                    n[e] = t
                                };
                            return c(t, s).forEach(e => i(e, void 0)), {
                                matched: t.some(t => u(t, e, i)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => c(t, s),
                        matcherType: "or"
                    })
                })
            }

            function p(e) {
                return {
                    [i]: () => ({
                        match: t => ({
                            matched: !!e(t)
                        })
                    })
                }
            }

            function T() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let r = "string" == typeof t[0] ? t[0] : void 0,
                    l = 2 === t.length ? t[1] : "string" == typeof t[0] ? void 0 : t[0];
                return d({
                    [i]: () => ({
                        match: e => {
                            let t = {
                                [null != r ? r : o]: e
                            };
                            return {
                                matched: void 0 === l || u(l, e, (e, n) => {
                                    t[e] = n
                                }),
                                selections: t
                            }
                        },
                        getSelectionKeys: () => [null != r ? r : o].concat(void 0 === l ? [] : s(l))
                    })
                })
            }

            function N(e) {
                return "number" == typeof e
            }

            function S(e) {
                return "string" == typeof e
            }

            function g(e) {
                return "bigint" == typeof e
            }
            let C = d(p(function(e) {
                    return !0
                })),
                A = e => Object.assign(d(e), {
                    startsWith: t => A(I(e, p(e => S(e) && e.startsWith(t)))),
                    endsWith: t => A(I(e, p(e => S(e) && e.endsWith(t)))),
                    minLength: t => {
                        var n;
                        return A(I(e, (n = t, p(e => S(e) && e.length >= n))))
                    },
                    maxLength: t => {
                        var n;
                        return A(I(e, (n = t, p(e => S(e) && e.length <= n))))
                    },
                    includes: t => A(I(e, p(e => S(e) && e.includes(t)))),
                    regex: t => A(I(e, p(e => S(e) && !!e.match(t))))
                }),
                v = A(p(S)),
                m = (e, t) => p(n => N(n) && e <= n && t >= n),
                R = e => p(t => N(t) && t < e),
                O = e => p(t => N(t) && t > e),
                L = e => p(t => N(t) && t <= e),
                U = e => p(t => N(t) && t >= e),
                y = () => p(e => N(e) && Number.isInteger(e)),
                D = () => p(e => N(e) && Number.isFinite(e)),
                M = () => p(e => N(e) && e > 0),
                P = () => p(e => N(e) && e < 0),
                b = e => Object.assign(d(e), {
                    between: (t, n) => b(I(e, m(t, n))),
                    lt: t => b(I(e, R(t))),
                    gt: t => b(I(e, O(t))),
                    lte: t => b(I(e, L(t))),
                    gte: t => b(I(e, U(t))),
                    int: () => b(I(e, y())),
                    finite: () => b(I(e, D())),
                    positive: () => b(I(e, M())),
                    negative: () => b(I(e, P()))
                }),
                w = b(p(N)),
                G = (e, t) => p(n => g(n) && e <= n && t >= n),
                x = e => p(t => g(t) && t < e),
                F = e => p(t => g(t) && t > e),
                B = e => p(t => g(t) && t <= e),
                V = e => p(t => g(t) && t >= e),
                H = () => p(e => g(e) && e > 0),
                k = () => p(e => g(e) && e < 0),
                j = e => Object.assign(d(e), {
                    between: (t, n) => j(I(e, G(t, n))),
                    lt: t => j(I(e, x(t))),
                    gt: t => j(I(e, F(t))),
                    lte: t => j(I(e, B(t))),
                    gte: t => j(I(e, V(t))),
                    positive: () => j(I(e, H())),
                    negative: () => j(I(e, k()))
                }),
                K = j(p(g)),
                W = d(p(function(e) {
                    return "boolean" == typeof e
                })),
                Y = d(p(function(e) {
                    return "symbol" == typeof e
                })),
                z = d(p(function(e) {
                    return null == e
                }));
            var Z = {
                __proto__: null,
                matcher: i,
                optional: E,
                array: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function e(t) {
                        var n;
                        return Object.assign((n = t, Object.assign(n, {
                            *[Symbol.iterator]() {
                                yield Object.assign(n, {
                                    [r]: !0
                                })
                            }
                        })), {
                            optional: () => e(E(t)),
                            select: n => e(void 0 === n ? T(t) : T(n, t))
                        })
                    }({
                        [i]: () => ({
                            match: e => {
                                if (!Array.isArray(e)) return {
                                    matched: !1
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                let n = t[0],
                                    i = {};
                                if (0 === e.length) return s(n).forEach(e => {
                                    i[e] = []
                                }), {
                                    matched: !0,
                                    selections: i
                                };
                                let r = (e, t) => {
                                    i[e] = (i[e] || []).concat([t])
                                };
                                return {
                                    matched: e.every(e => u(n, e, r)),
                                    selections: i
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : s(t[0])
                        })
                    })
                },
                set: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return d({
                        [i]: () => ({
                            match: e => {
                                if (!(e instanceof Set)) return {
                                    matched: !1
                                };
                                let n = {};
                                if (0 === e.size) return {
                                    matched: !0,
                                    selections: n
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                let i = (e, t) => {
                                        n[e] = (n[e] || []).concat([t])
                                    },
                                    r = t[0];
                                return {
                                    matched: _(e, e => u(r, e, i)),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : s(t[0])
                        })
                    })
                },
                map: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return d({
                        [i]: () => ({
                            match: e => {
                                var n;
                                if (!(e instanceof Map)) return {
                                    matched: !1
                                };
                                let i = {};
                                if (0 === e.size) return {
                                    matched: !0,
                                    selections: i
                                };
                                let r = (e, t) => {
                                    i[e] = (i[e] || []).concat([t])
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                if (1 === t.length) throw Error("`P.map` wasn't given enough arguments. Expected (key, value), received ".concat(null == (n = t[0]) ? void 0 : n.toString()));
                                let [o, l] = t;
                                return {
                                    matched: f(e, (e, t) => {
                                        let n = u(o, t, r),
                                            i = u(l, e, r);
                                        return n && i
                                    }),
                                    selections: i
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : [...s(t[0]), ...s(t[1])]
                        })
                    })
                },
                intersection: I,
                union: h,
                not: function(e) {
                    return d({
                        [i]: () => ({
                            match: t => ({
                                matched: !u(e, t, () => {})
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: p,
                select: T,
                any: C,
                _: C,
                string: v,
                between: m,
                lt: R,
                gt: O,
                lte: L,
                gte: U,
                int: y,
                finite: D,
                positive: M,
                negative: P,
                number: w,
                betweenBigInt: G,
                ltBigInt: x,
                gtBigInt: F,
                lteBigInt: B,
                gteBigInt: V,
                positiveBigInt: H,
                negativeBigInt: k,
                bigint: K,
                boolean: W,
                symbol: Y,
                nullish: z,
                instanceOf: function(e) {
                    var t;
                    return d(p((t = e, e => e instanceof t)))
                },
                shape: function(e) {
                    return d(p(function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        if (1 === t.length) {
                            let [e] = t;
                            return t => u(e, t, () => {})
                        }
                        if (2 === t.length) {
                            let [e, n] = t;
                            return u(e, n, () => {})
                        }
                        throw Error("isMatching wasn't given the right number of arguments: expected 1 or 2, received ".concat(t.length, "."))
                    }(e)))
                }
            };
            let X = {
                matched: !1,
                value: void 0
            };

            function q(e) {
                return new J(e, X)
            }
            class J {
                with() {
                    let e;
                    for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    if (this.state.matched) return this;
                    let r = n[n.length - 1],
                        l = [n[0]];
                    3 === n.length && "function" == typeof n[1] ? (l.push(n[0]), e = n[1]) : n.length > 2 && l.push(...n.slice(1, n.length - 1));
                    let a = !1,
                        s = {},
                        c = (e, t) => {
                            a = !0, s[e] = t
                        },
                        d = l.some(e => u(e, this.input, c)) && (!e || e(this.input)) ? {
                            matched: !0,
                            value: r(a ? o in s ? s[o] : s : this.input, this.input)
                        } : X;
                    return new J(this.input, d)
                }
                when(e, t) {
                    if (this.state.matched) return this;
                    let n = !!e(this.input);
                    return new J(this.input, n ? {
                        matched: !0,
                        value: t(this.input, this.input)
                    } : X)
                }
                otherwise(e) {
                    return this.state.matched ? this.state.value : e(this.input)
                }
                exhaustive() {
                    return this.run()
                }
                run() {
                    let e;
                    if (this.state.matched) return this.state.value;
                    try {
                        e = JSON.stringify(this.input)
                    } catch (t) {
                        e = this.input
                    }
                    throw Error("Pattern matching error: no pattern matches value ".concat(e))
                }
                returnType() {
                    return this
                }
                constructor(e, t) {
                    this.input = void 0, this.state = void 0, this.input = e, this.state = t
                }
            }
        },
        437140: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("759843"),
                r = n("627929"),
                o = n("913144"),
                l = n("81732"),
                a = n("282109"),
                u = n("840707"),
                s = n("519705"),
                c = n("49111"),
                d = n("397336"),
                E = {
                    createChannel(e) {
                        let {
                            guildId: t,
                            type: n,
                            name: E,
                            permissionOverwrites: _ = [],
                            bitrate: f,
                            userLimit: I,
                            parentId: h,
                            skuId: p,
                            branchId: T
                        } = e;
                        o.default.dispatch({
                            type: "CREATE_CHANNEL_MODAL_SUBMIT"
                        });
                        let N = {
                            type: n,
                            name: E,
                            permission_overwrites: _
                        };
                        if (null != f && f !== c.BITRATE_DEFAULT && (N.bitrate = f), null != I && I > 0 && (N.user_limit = I), null != h && (N.parent_id = h), n === c.ChannelTypes.GUILD_STORE) {
                            if (null == p) throw Error("Unexpected missing SKU");
                            N.sku_id = p, N.branch_id = T
                        }
                        return u.default.post({
                            url: c.Endpoints.GUILD_CHANNELS(t),
                            body: N,
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: i.NetworkActionNames.CHANNEL_CREATE,
                                properties: e => {
                                    var t, n;
                                    return (0, r.exact)({
                                        is_private: _.length > 0,
                                        channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                        channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                                    })
                                }
                            }
                        }).then(e => (a.default.isOptInEnabled(t) && s.default.updateChannelOverrideSettings(t, e.body.id, {
                            flags: d.ChannelNotificationSettingsFlags.OPT_IN_ENABLED
                        }), l.default.checkGuildTemplateDirty(t), e), e => {
                            throw o.default.dispatch({
                                type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                                errors: e.body
                            }), e
                        })
                    },
                    createRoleSubscriptionTemplateChannel: (e, t, n, o) => u.default.post({
                        url: c.Endpoints.GUILD_CHANNELS(e),
                        body: {
                            name: t,
                            type: n,
                            topic: o
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: i.NetworkActionNames.CHANNEL_CREATE,
                            properties: e => {
                                var t, n;
                                return (0, r.exact)({
                                    is_private: !0,
                                    channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                    channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                                })
                            }
                        }
                    })
                }
        },
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return o
                },
                unsubscribeMembers: function() {
                    return l
                },
                subscribeChannel: function() {
                    return a
                },
                subscribeChannelDimensions: function() {
                    return u
                }
            });
            var i = n("913144"),
                r = n("696605");

            function o(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function l(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function a(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function u(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: o,
                    rowHeight: l
                } = e;

                function u(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / l)) + t)
                }
                let s = [];

                function c(e) {
                    let t = e + (r.MINIMUM_RANGE - 1);
                    return s.push([e, t]), t + 1
                }
                let d = u(.5 * o),
                    E = u(i, -d),
                    _ = u(i + o, d);
                for (E > 0 && (E = Math.max(c(0), E)), E = Math.floor(E / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; E <= _;) E = c(E);
                a(t, n, s)
            }
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return r
                },
                popLayer: function() {
                    return o
                },
                popAllLayers: function() {
                    return l
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function o() {
                i.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function l() {
                i.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return r
                },
                updateCardInfo: function() {
                    return o
                },
                clearCardInfo: function() {
                    return l
                },
                updateAddressInfo: function() {
                    return a
                },
                clearError: function() {
                    return u
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function o(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function l() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function a(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function u() {
                i.default.wait(() => i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        519705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("866227"),
                r = n.n(i),
                o = n("819855"),
                l = n("913144"),
                a = n("679428"),
                u = n("282109"),
                s = n("34676"),
                c = n("397336"),
                d = n("782340"),
                E = {
                    open(e) {
                        l.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                            guildId: e
                        })
                    },
                    close() {
                        l.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        })
                    },
                    updateGuildNotificationSettings(e, t, n) {
                        let i = (0, s.getCurrentGuildSettings)(e);
                        a.default.saveUserGuildSettings(e, t), l.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, s.trackGuildNotificationSettingsUpdate)(e, t, i, n)
                    },
                    updateGuildAndChannelNotificationSettings(e, t, n) {
                        let i = Object.keys(t.channel_overrides),
                            r = (0, s.getCurrentGuildSettings)(e),
                            o = (0, s.getManyCurrentChannelSettings)(e, i);
                        a.default.saveUserGuildSettings(e, t), l.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, s.trackGuildNotificationSettingsUpdate)(e, t, r, n), Object.keys(t.channel_overrides).forEach(i => {
                            let r = o.get(i);
                            (0, s.trackChannelNotificationSettingsUpdate)(e, i, t.channel_overrides[i], r, n)
                        })
                    },
                    updateGuildNotificationSettingsBulk(e, t) {
                        let n = Object.keys(e),
                            i = (0, s.getManyCurrentGuildSettings)(n);
                        a.default.saveUserGuildSettingsBulk(e), Object.entries(e).forEach(e => {
                            let [n, r] = e, o = i.get(n);
                            l.default.dispatch({
                                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                                guildId: n,
                                settings: r
                            }), (0, s.trackGuildNotificationSettingsUpdate)(n, r, o, t)
                        })
                    },
                    updateChannelOverrideSettings(e, t, n, i) {
                        let r = (0, s.getCurrentChannelSettings)(e, t);
                        a.default.saveUserGuildSettings(e, {
                            channel_overrides: {
                                [t]: n
                            }
                        }), l.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                            guildId: e,
                            channelId: t,
                            settings: n
                        }), o.AccessibilityAnnouncer.announce(d.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, s.trackChannelNotificationSettingsUpdate)(e, t, n, r, i)
                    },
                    updateChannelOverrideSettingsBulk(e, t, n) {
                        let i = Object.keys(t),
                            r = (0, s.getManyCurrentChannelSettings)(e, i);
                        a.default.saveUserGuildSettings(e, {
                            channel_overrides: t
                        }), l.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                            guildId: e,
                            overrides: t
                        }), Object.keys(t).forEach(i => (0, s.trackChannelNotificationSettingsUpdate)(e, i, t[i], r.get(i), n))
                    },
                    setForumThreadsCreated(e, t) {
                        let n = t ? c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
                            i = t ? c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
                            r = u.default.getChannelFlags(e);
                        this.updateChannelOverrideSettings(e.guild_id, e.id, {
                            flags: r & ~i | n
                        })
                    },
                    handleCheckboxChange: function(e, t, n, i) {
                        l.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: i.id,
                            profile: e,
                            updatedSettings: {
                                [t]: n
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleSelectChange: function(e, t, n, i) {
                        l.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: i.id,
                            profile: e,
                            updatedSettings: {
                                [t]: n
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleMuteConfigChange: function(e, t, n) {
                        let i = t > 0 ? r().add(t, "second").toISOString() : null;
                        l.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: n.id,
                            profile: "MUTED",
                            updatedSettings: {
                                [e]: {
                                    selected_time_window: t,
                                    end_time: i
                                }
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleHighlightsChange: function(e, t, n) {
                        l.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: n.id,
                            profile: e,
                            updatedSettings: {
                                notifyHighlights: t
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleProfileChange: function(e, t) {
                        l.default.dispatch({
                            type: "GUILD_SET_NOTIFICATION_PROFILE",
                            guildId: t.id,
                            profile: e.value,
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    }
                }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return r
                }
            });
            var i = n("913144");

            function r() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return I
                },
                accountDetailsClose: function() {
                    return h
                },
                disableAccount: function() {
                    return p
                },
                saveAccountRequest: function() {
                    return T
                },
                saveAccountChanges: function() {
                    return N
                },
                getHarvestStatus: function() {
                    return S
                },
                requestHarvest: function() {
                    return g
                },
                setPendingAvatar: function() {
                    return C
                },
                setPendingGlobalNameName: function() {
                    return A
                },
                setPendingAvatarDecoration: function() {
                    return v
                },
                setPendingProfileEffectID: function() {
                    return m
                },
                clearErrors: function() {
                    return R
                },
                resetPendingAccountChanges: function() {
                    return O
                },
                resetAllPending: function() {
                    return L
                },
                resetAndCloseUserProfileForm: function() {
                    return U
                },
                setDisableSubmit: function() {
                    return y
                }
            });
            var i = n("872717"),
                r = n("95410"),
                o = n("819855"),
                l = n("913144"),
                a = n("393414"),
                u = n("599110"),
                s = n("315102"),
                c = n("730622"),
                d = n("437822"),
                E = n("49111"),
                _ = n("191349"),
                f = n("782340");

            function I() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function h() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function p(e, t) {
                let n = t ? f.default.Messages.DELETE_ACCOUNT : f.default.Messages.DISABLE_ACCOUNT,
                    r = t ? E.Endpoints.DELETE_ACCOUNT : E.Endpoints.DISABLE_ACCOUNT;
                return (0, c.default)(t => i.default.post({
                    url: r,
                    body: {
                        password: e,
                        ...t
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: n
                    },
                    checkEnabled: !1
                }).then(() => {
                    d.default.logoutInternal(), (0, a.transitionTo)(E.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function T(e) {
                let t = await i.default.patch({
                        url: E.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, l.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && l.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return l.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function N(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: o,
                    password: a,
                    avatar: d,
                    avatarDecoration: I,
                    newPassword: h,
                    globalName: p
                } = e;
                return l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, c.default)(e => {
                    let l = {
                        username: t,
                        email: i,
                        email_token: o,
                        password: a,
                        avatar: d,
                        discriminator: n,
                        global_name: p,
                        new_password: h,
                        ...e
                    };
                    null === I && (l.avatar_decoration_id = null), null != I && (l.avatar_decoration_id = I.id, l.avatar_decoration_sku_id = I.skuId);
                    let u = r.default.get(E.DEVICE_TOKEN),
                        s = (0, _.getDevicePushProvider)();
                    null != s && null != u && (l.push_provider = s, l.push_token = u);
                    let c = r.default.get(E.DEVICE_VOIP_TOKEN);
                    return null != _.DEVICE_PUSH_VOIP_PROVIDER && null != c && (l.push_voip_provider = _.DEVICE_PUSH_VOIP_PROVIDER, l.push_voip_token = c), T(l)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: f.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => l.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return u.default.track(E.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, s.isAnimatedIconHash)(t.avatar)
                    }), l.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function S() {
                return i.default.get({
                    url: E.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function g() {
                return i.default.post({
                    url: E.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function C(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? o.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : o.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function A(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function v(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function m(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function R() {
                l.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function O() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function L() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function U() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function y(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        137223: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RichTagTypes: function() {
                    return r
                },
                SearchBarIcon: function() {
                    return T
                },
                default: function() {
                    return S
                }
            });
            var i, r, o = n("37983"),
                l = n("884691"),
                a = n("414456"),
                u = n.n(a),
                s = n("77078"),
                c = n("109024"),
                d = n("945330"),
                E = n("229915"),
                _ = n("439932"),
                f = n("49111"),
                I = n("782340"),
                h = n("515315");
            let p = Object.freeze({
                SMALL: h.small,
                MEDIUM: h.medium,
                LARGE: h.large
            });
            (i = r || (r = {})).MEMBER = "MEMBER", i.ROLE = "ROLE", i.CHANNEL = "CHANNEL", i.GUILD = "GUILD", i.USER = "USER";
            let T = e => {
                let {
                    hasContent: t,
                    onClear: n,
                    className: i,
                    themeOverride: r,
                    size: l = p.SMALL
                } = e;
                return (0, o.jsx)(s.Clickable, {
                    className: u(i, h.iconLayout, l, (0, _.getThemeClass)(r), {
                        [h.clear]: t
                    }),
                    onClick: e => {
                        e.stopPropagation(), null != n && n(e)
                    },
                    onMouseDown: e => {
                        e.preventDefault(), e.stopPropagation()
                    },
                    tabIndex: t ? 0 : -1,
                    "aria-hidden": !t,
                    "aria-label": I.default.Messages.SEARCH_CLEAR,
                    focusProps: {
                        offset: 4
                    },
                    children: (0, o.jsxs)("div", {
                        className: h.iconContainer,
                        children: [(0, o.jsx)(E.default, {
                            className: u({
                                [h.icon]: !0,
                                [h.visible]: !t
                            })
                        }), (0, o.jsx)(d.default, {
                            className: u({
                                [h.icon]: !0,
                                [h.visible]: t
                            })
                        })]
                    })
                })
            };
            class N extends l.Component {
                componentDidUpdate(e) {
                    let {
                        focusAfterReady: t,
                        isReady: n
                    } = this.props;
                    t && !e.isReady && n && this.focus()
                }
                handleKeyDownGrid(e) {
                    let {
                        selectedRow: t,
                        selectedColumn: n,
                        sections: i,
                        query: r,
                        tags: o,
                        onSelectionChange: l,
                        onSelect: a,
                        onRemoveTag: u,
                        preventEscapePropagation: s
                    } = this.props;
                    if (0 !== i.length) {
                        switch (e.keyCode) {
                            case f.KeyboardKeys.BACKSPACE:
                                if ((null == r || 0 === r.length) && null != o && o.length > 0) e.preventDefault(), e.stopPropagation(), null == u || u(o.length - 1);
                                break;
                            case f.KeyboardKeys.ARROW_DOWN:
                                e.preventDefault(), e.stopPropagation(), -1 === t ? (t = 0, n = 0) : ((t += 1) >= i.length && (t = i.length - 1), n >= i[t] && (n = i[t] - 1));
                                break;
                            case f.KeyboardKeys.ARROW_UP:
                                e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, n = 0) : n >= i[t] && (n = i[t] - 1);
                                break;
                            case f.KeyboardKeys.ARROW_LEFT:
                                e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n -= 1) < 0 && ((t -= 1) >= 0 ? n = i[t] - 1 : t < 0 && (t = 0, n = 0));
                                break;
                            case f.KeyboardKeys.ARROW_RIGHT:
                                e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n += 1) >= i[t] && (n = 0, (t += 1) >= i.length && (t = i.length - 1, n = i[t] - 1));
                                break;
                            case f.KeyboardKeys.ENTER:
                                if (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === n && (n = 0), t >= i.length || n >= i[t]) return;
                                null != a && a(t, n, e);
                                return;
                            case f.KeyboardKeys.ESCAPE:
                                e.preventDefault(), s && e.stopPropagation(), null != a && a(null, null, e);
                                return;
                            default:
                                return
                        }
                        null != l && l(t, n)
                    }
                }
                handleKeyDownList(e) {
                    var t, n;
                    let {
                        sections: i,
                        selectedSection: r,
                        selectedRow: o,
                        onSelect: l,
                        onSelectionChange: a,
                        query: u,
                        tags: s,
                        preventEscapePropagation: c
                    } = this.props, {
                        current: d
                    } = this.ref;
                    if (null != d) switch (e.keyCode) {
                        case f.KeyboardKeys.BACKSPACE:
                            (null == u || 0 === u.length) && null != s && s.length > 0 && (e.preventDefault(), e.stopPropagation(), null === (t = (n = this.props).onRemoveTag) || void 0 === t || t.call(n, s.length - 1));
                            break;
                        case f.KeyboardKeys.ARROW_DOWN:
                            e.preventDefault(), e.stopPropagation(), i.length > r && ++o >= i[r] && (++r >= i.length && (r = 0), o = 0), null == a || a(r, o);
                            break;
                        case f.KeyboardKeys.ARROW_UP:
                            e.preventDefault(), e.stopPropagation(), --o < 0 && (--r < 0 && (r = i.length - 1), o = i[r] - 1), null == a || a(r, o);
                            break;
                        case f.KeyboardKeys.ENTER:
                            e.preventDefault(), e.stopPropagation(), i.length > r && i[r] > o && (null == l || l(r, o, e));
                            break;
                        case f.KeyboardKeys.ESCAPE:
                            e.preventDefault(), c && e.stopPropagation(), null == l || l(null, null, e), d.blur()
                    }
                }
                render() {
                    let {
                        autoFocus: e,
                        query: t,
                        placeholder: n = I.default.Messages.DM_SEARCH_PLACEHOLDER,
                        themeOverride: i,
                        disabled: l,
                        onClear: a,
                        size: E,
                        maxHeight: f,
                        tags: p,
                        onActivate: N,
                        className: S,
                        inputProps: g,
                        focusAfterReady: C
                    } = this.props, A = null != t && t.length > 0, v = !1, m = [];
                    return null != p && p.length > 0 && ("string" == typeof p[0] ? p.forEach((e, t) => m.push((0, o.jsxs)(s.Anchor, {
                        focusProps: {
                            offset: 4
                        },
                        className: h.tag,
                        onClick: this.handleRemoveTag.bind(this, t),
                        children: [e, (0, o.jsx)(d.default, {
                            className: h.close,
                            "aria-label": I.default.Messages.REMOVE
                        })]
                    }, t))) : (v = !0, p.forEach((e, t) => m.push((0, o.jsxs)(s.Anchor, {
                        className: u(h.tag, h.richTag),
                        onClick: this.handleRemoveTag.bind(this, t),
                        children: [(e.type === r.MEMBER || e.type === r.USER) && null != e.avatar && (0, o.jsx)(s.Avatar, {
                            src: e.avatar,
                            "aria-hidden": !0,
                            size: s.AvatarSizes.SIZE_16
                        }), e.type === r.ROLE && null != e.color && (0, o.jsx)("span", {
                            className: h.tagRoleColor,
                            style: {
                                backgroundColor: e.color
                            }
                        }), e.type === r.GUILD && null != e.guild && (0, o.jsx)(c.default, {
                            guild: e.guild,
                            active: !0,
                            size: c.default.Sizes.SMOL
                        }), (0, o.jsx)("span", {
                            className: h.tagLabel,
                            children: e.label
                        }), (0, o.jsx)(d.default, {
                            className: h.close,
                            "aria-label": I.default.Messages.REMOVE
                        })]
                    }, t))))), (0, o.jsx)(s.FocusRing, {
                        focusTarget: this.ref,
                        ringTarget: this.containerRef,
                        children: (0, o.jsx)("div", {
                            ref: this.containerRef,
                            className: u(S, h.container, E, (0, _.getThemeClass)(i), {
                                [h.disabled]: l
                            }),
                            children: (0, o.jsxs)(s.ScrollerThin, {
                                className: h.inner,
                                style: {
                                    maxHeight: f
                                },
                                children: [m, (0, o.jsx)("input", {
                                    className: u(h.input, {
                                        [h.richTagInput]: v
                                    }),
                                    type: "text",
                                    ref: this.ref,
                                    spellCheck: "false",
                                    placeholder: n,
                                    value: t,
                                    onChange: this.handleChange,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleFocus,
                                    disabled: l,
                                    "aria-disabled": l,
                                    autoFocus: !C && e,
                                    onMouseDown: N,
                                    ...this.defaultInputProps,
                                    ...g
                                }), null != a ? (0, o.jsx)(T, {
                                    size: E,
                                    themeOverride: i,
                                    hasContent: A,
                                    onClear: this.handleClear
                                }) : null]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.defaultInputProps = {
                        role: "combobox",
                        "aria-haspopup": "listbox",
                        "aria-autocomplete": "list"
                    }, this.ref = l.createRef(), this.containerRef = l.createRef(), this.handleKeyDown = e => {
                        let {
                            onActivate: t,
                            onKeyDown: n,
                            onQueryChange: i,
                            useKeyboardNavigation: r
                        } = this.props;
                        null != n && n(e);
                        let {
                            current: o
                        } = this.ref;
                        if (null == o || null != t) {
                            e.keyCode !== f.KeyboardKeys.TAB && null != t && t(e);
                            return
                        }
                        if (e.keyCode === f.KeyboardKeys.ESCAPE && null != o.value && "" !== o.value && o.value.length > 0) {
                            o.value = "", null != i && i("");
                            return
                        }
                        r && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
                    }, this.handleChange = e => {
                        let {
                            onQueryChange: t
                        } = this.props;
                        null != t && t(e.currentTarget.value)
                    }, this.handleFocus = e => {
                        let {
                            onFocus: t
                        } = this.props;
                        null != t && t(e)
                    }, this.handleClear = () => {
                        let {
                            onClear: e
                        } = this.props, {
                            current: t
                        } = this.ref;
                        null != e && e(), null != t && t.focus()
                    }, this.handleRemoveTag = e => {
                        let {
                            onRemoveTag: t
                        } = this.props;
                        null == t || t(e)
                    }, this.focus = () => {
                        let {
                            current: e
                        } = this.ref;
                        null != e && e.focus()
                    }
                }
            }
            N.Sizes = p, N.defaultProps = {
                size: p.SMALL,
                query: "",
                sections: [],
                selectedSection: 0,
                selectedRow: -1,
                selectedColumn: -1,
                gridResults: !1,
                disabled: !1,
                autoFocus: !1,
                preventEscapePropagation: !0,
                useKeyboardNavigation: !0
            };
            var S = N
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983"),
                r = n("884691"),
                o = n("414456"),
                l = n.n(o),
                a = n("77078"),
                u = n("782340"),
                s = n("347129");
            class c extends r.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: o,
                        error: c,
                        isLoading: d,
                        maxLength: E,
                        transitionState: _,
                        helpMessage: f,
                        retryPrompt: I,
                        retrySuccessMessage: h
                    } = this.props, {
                        code: p,
                        errorMessage: T,
                        retrySuccess: N
                    } = this.state, S = r.Children.count(o) > 0 ? (0, i.jsx)(a.Card, {
                        type: a.Card.Types.WARNING,
                        className: s.card,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: o
                        })
                    }) : null, g = null != I ? (0, i.jsxs)(a.Text, {
                        className: l(s.submitText, s.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(a.Clickable, {
                            className: l(s.spacing, s.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(a.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, C = N ? (0, i.jsx)(a.Card, {
                        type: a.Card.Types.SUCCESS,
                        className: s.card,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: h
                        })
                    }) : null;
                    return (0, i.jsx)(a.ModalRoot, {
                        transitionState: _,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(a.ModalContent, {
                                children: [null != f ? (0, i.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s.spacing,
                                    children: f
                                }) : null, S, C, (0, i.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: s.spacing,
                                    children: [(0, i.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: p,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s.error,
                                        children: null != c ? c : T
                                    }) : null, g]
                                })]
                            }), (0, i.jsxs)(a.ModalFooter, {
                                children: [(0, i.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: d || 0 === p.length,
                                    children: null != n ? n : u.default.Messages.CONFIRM
                                }), (0, i.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: u.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = e => {
                        this._input = e
                    }, this.getLabelText = () => {
                        var e;
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : u.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : u.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var e;
                        return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: e
                        } = this.props;
                        null == e || e().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            handleSubmit: t,
                            onError: n
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                                errorMessage: e.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: e,
                            handleEarlyClose: t
                        } = this.props;
                        e(), null == t || t()
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }
                }
            }
            c.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var d = c
        },
        733154: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, o.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.97.57 3.808 1.554 5.357a.517.517 0 0 1-.04.617l-2.067 2.369C.882 20.989 1.34 22 2.2 22H12Z",
                        className: a
                    })
                })
            }
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, o.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        31745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CirclePlusIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: l = "transparent",
                    secondaryColorClass: a = "",
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...c
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, o.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof l ? l : l.css,
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: s
                    })]
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: l = "transparent",
                    secondaryColorClass: a = "",
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...c
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, o.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof l ? l : l.css,
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: s
                    })]
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, o.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.089A4.089 4.089 0 0 1 12 4.898 4.089 4.089 0 0 1 15.912 2H16a4 4 0 0 1 3.465 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10a2 2 0 0 1 2-2h.535A3.982 3.982 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.088c-.959 0-1.794.652-2.027 1.582L13.281 8H16Zm-5.885-2.418L10.719 8H8a2 2 0 1 1 0-4h.089c.958 0 1.793.652 2.026 1.582Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M3 20a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: a
                    })]
                })
            }
        },
        704822: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                KeyIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, o.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M21.414 5.414a2 2 0 1 0-2.828-2.828l-7.749 7.749a.528.528 0 0 1-.574.107 6 6 0 1 0 3.29 3.285.51.51 0 0 1 .105-.556c.189-.19.495-.19.684 0l1.244 1.243a2 2 0 1 0 2.828-2.828l-1.232-1.232a.5.5 0 0 1 0-.708l.464-.464a.5.5 0 0 1 .708 0l1.232 1.232a2 2 0 1 0 2.828-2.828l-1.232-1.232a.5.5 0 0 1 0-.708l.232-.232ZM10 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, o.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.252A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        className: a
                    })]
                })
            }
        },
        504318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PencilIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, o.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "m13.957 5.457 4.586 4.586a1 1 0 0 0 1.414 0l1.379-1.379a2 2 0 0 0 0-2.828l-3.172-3.172a2 2 0 0 0-2.828 0l-1.379 1.379a1 1 0 0 0 0 1.414ZM2.111 20.156l.727-4.218a3 3 0 0 1 .835-1.611l7.87-7.87a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-7.87 7.87a3 3 0 0 1-1.611.835l-4.218.727a1.5 1.5 0 0 1-1.733-1.733Z",
                        className: a
                    })
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, o.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M9.248 3.348C7.872 2.455 6 3.384 6 4.96v14.08c0 1.576 1.872 2.505 3.248 1.612l10.853-7.04c1.199-.777 1.199-2.447 0-3.224L9.248 3.348Z",
                        className: a
                    })
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, o.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        className: a
                    })
                })
            }
        },
        197801: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SettingsIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, o.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M10.558 1.094c-.453.059-.705.532-.636.983.178 1.166-.187 2.202-.983 2.532-.796.33-1.787-.144-2.485-1.094-.27-.369-.783-.524-1.146-.246a11.065 11.065 0 0 0-2.04 2.04c-.277.362-.121.874.247 1.145.95.698 1.424 1.689 1.094 2.485-.33.796-1.365 1.161-2.532.983-.451-.07-.924.183-.983.636a11.102 11.102 0 0 0 0 2.884c.059.453.532.705.983.636 1.167-.178 2.202.188 2.532.983.33.796-.144 1.787-1.094 2.486-.368.27-.524.782-.246 1.145a11.064 11.064 0 0 0 2.04 2.04c.362.277.874.122 1.145-.247.698-.95 1.689-1.424 2.485-1.094.796.33 1.161 1.366.983 2.532-.07.452.183.924.636.983a11.1 11.1 0 0 0 2.884 0c.454-.06.706-.532.636-.983-.178-1.166.188-2.202.984-2.532.795-.33 1.786.144 2.485 1.094.27.368.782.524 1.145.246a11.066 11.066 0 0 0 2.04-2.04c.277-.362.122-.874-.247-1.145-.95-.698-1.424-1.689-1.094-2.485.33-.796 1.366-1.161 2.532-.983.451.07.924-.183.983-.636a11.102 11.102 0 0 0 0-2.884c-.059-.453-.532-.705-.983-.636-1.166.178-2.202-.187-2.532-.983-.33-.796.144-1.787 1.094-2.485.369-.271.524-.783.246-1.146a11.065 11.065 0 0 0-2.039-2.039c-.363-.278-.875-.122-1.145.246-.699.95-1.69 1.424-2.485 1.094-.796-.33-1.162-1.365-.983-2.532.069-.451-.183-.924-.637-.983a11.104 11.104 0 0 0-2.884 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        305861: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ShieldUserIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, o.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M3.473 5.182c.268-.403.64-.739 1.09-.964l6.095-3.047a3 3 0 0 1 2.684 0l6.095 3.047A2.828 2.828 0 0 1 21 6.748v3.034a14.167 14.167 0 0 1-1.831 6.972 14.176 14.176 0 0 1-6.593 5.99 1.419 1.419 0 0 1-1.152 0 14.176 14.176 0 0 1-6.593-5.99A14.168 14.168 0 0 1 3 9.781V6.748c0-.568.17-1.11.473-1.566Zm2.945 10.305A12.179 12.179 0 0 0 12 20.808a12.179 12.179 0 0 0 5.582-5.32A9.49 9.49 0 0 0 12.467 14h-.934a9.489 9.489 0 0 0-5.115 1.487ZM12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, o.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M16.83 15.233c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.331 20.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        className: a
                    })]
                })
            }
        },
        390300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceNormalIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, o.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3ZM15.1 20.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M15.157 16.512c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        className: a
                    })]
                })
            }
        },
        599417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("872717"),
                r = n("49111"),
                o = n("782340");
            class l extends i.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(t)
                    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("872717"),
                r = n("49111"),
                o = n("782340");
            class l extends i.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(t)
                    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return o
                }
            });
            var i = n("884691"),
                r = n("599110");
            let o = () => i.useContext(r.AnalyticsContext)
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r(e) {
                let [t, n] = (0, i.useState)(!1), r = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    r.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = r.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [r]), t
            }
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return a
                }
            }), n("37983");
            var i = n("884691"),
                r = n("917351"),
                o = n.n(r);
            n("233736");
            var l = n("666020");

            function a(e) {
                i.useEffect(() => (o.forEach(e, (e, t) => (0, l.subscribeMembers)(t, e)), () => {
                    o.forEach(e, (e, t) => (0, l.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("773336");
            async function r(e, t) {
                let {
                    default: r
                } = await n.el("572544").then(n.bind(n, "572544")), o = r(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != o) o(null);
                else if (i.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        812204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), (i = r || (r = {})).POPOUT_WINDOW = "popout window", i.OVERLAY = "overlay", i.NOTICE = "notice", i.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", i.BADGE = "badge", i.USER_SETTINGS = "user settings", i.USER_SETTINGS_MENU = "user settings menu", i.ACCOUNT = "account", i.TEXT_AND_IMAGES = "text and images", i.GUILD_SETTINGS = "guild settings", i.OVERVIEW = "overview", i.STICKERS = "stickers", i.VANITY_URL = "vanity url", i.PREMIUM_MARKETING = "premium marketing", i.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", i.PREMIUM_PAYMENT_MODAL = "premium payment modal", i.PREMIUM_UPSELL_ALERT = "premium upsell alert", i.PREMIUM_UPSELL_MODAL = "premium upsell modal", i.PREMIUM_SETTINGS = "premium settings", i.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", i.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", i.CHANNEL_CALL = "channel call", i.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", i.RTC_PANEL = "rtc panel", i.SOUNDBOARD_BUTTON = "soundboard button", i.SOUNDBOARD_POPOUT = "soundboard popout", i.SOUNDBOARD_WHEEL = "soundboard wheel", i.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", i.GIFT_BUTTON = "gift button", i.EXPRESSION_SUGGESTIONS = "expression suggestions", i.EMOJI_PICKER = "emoji picker", i.STICKER_PICKER = "sticker picker", i.STICKER_POPOUT = "sticker popout", i.PREMIUM_UPSELL = "premium upsell", i.EMPTY_STATE = "empty state", i.SUBSCRIPTION_DETAILS = "subscription details", i.SUBSCRIPTION_HEADER = "subscription header", i.ACCOUNT_CREDIT_BANNER = "account credit banner", i.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", i.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", i.STREAM_QUALITY_INDICATOR = "stream quality indicator", i.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", i.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", i.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", i.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", i.RPC = "rpc", i.BILLING_STANDALONE = "billing standalone", i.GUILD_CHANNEL_LIST = "guild channel list", i.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", i.STICKER_MESSAGE = "sticker message", i.CHANNEL_TEXT_AREA = "channel text area", i.HEADER_BAR = "header bar", i.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", i.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", i.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", i.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", i.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", i.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", i.GUILD_HEADER = "guild header", i.GUILD_BANNER = "guild banner", i.GUILD_BANNER_NOTICE = "guild banner notice", i.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", i.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", i.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", i.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", i.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", i.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", i.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", i.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", i.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", i.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", i.GUILDS_LIST = "guilds list", i.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", i.ACTIVITY_DIRECTORY = "activity directory", i.ACTIVITY_TILE = "activity tile", i.ACTIVITY_UPSELL = "activity upsell", i.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", i.INSTANT_INVITE_MODAL = "instant invite modal", i.IMAGE_CROPPING_MODAL = "image cropping modal", i.GIF_PICKER = "gif picker", i.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", i.INVITE_MODAL = "invite modal", i.INVITE_EMBED = "invite embed", i.NEW_GUILD_BUTTON = "new guild button", i.CHARACTER_COUNT = "character count", i.DM_CHANNEL = "dm channel", i.GUILD_CHANNEL = "guild channel", i.FORUM_CHANNEL = "forum channel", i.FILE_UPLOAD_POPOUT = "file upload popout", i.EMOJI = "emoji", i.PROFILE = "profile", i.PROFILE_MODAL = "profile modal", i.PROFILE_POPOUT = "profile popout", i.GUILD_PROFILE = "guild profile", i.EDIT_AVATAR = "edit avatar", i.EDIT_BANNER = "edit banner", i.CHAT_INPUT = "chat input", i.CREATE_THREAD = "create thread", i.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", i.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", i.SELECT_IMAGE_MODAL = "select image modal", i.VIDEO_BACKGROUND_OPTIONS = "video background options", i.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", i.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", i.CAMERA_PREVIEW = "camera preview", i.HOME_PAGE_PREMIUM_TAB = "home page premium tab", i.HOME_PAGE_SHOP_TAB = "home page shop tab", i.PREMIUM_MARKETING_SURFACE = "premium marketing surface", i.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", i.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", i.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", i.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", i.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", i.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", i.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", i.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", i.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", i.PREMIUM_MARKETING_FEATURE = "premium marketing feature", i.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", i.PREMIUM_MARKETING_FOOTER = "premium marketing footer", i.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", i.CHANNEL_CALL_ACTION_BAR = "channel call action bar", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", i.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", i.VOICE_CONTROL_TRAY = "voice control tray", i.ACTIVE_NOW_COLUMN = "active now column", i.CONTEXT_MENU = "context menu", i.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", i.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", i.CHANNEL_CATEGORY_MENU = "channel category menu", i.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", i.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", i.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", i.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", i.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", i.CHANNEL_TITLE_MENU = "channel title menu", i.GROUP_DM_MENU = "group dm menu", i.AUDIT_LOG_USER_MENU = "audit log user menu", i.BANNED_USER_MENU = "banned user menu", i.DM_USER_MENU = "dm user menu", i.GROUP_DM_USER_MENU = "group dm user menu", i.GUILD_CHANNEL_USER_MENU = "guild channel user menu", i.GUILD_MODERATION_USER_MENU = "guild moderation user menu", i.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", i.GUILD_SETTINGS_USER_MENU = "guild settings user menu", i.GUILD_USER_MENU = "guild user menu", i.THREAD_USER_MENU = "thread user menu", i.USER_GENERIC_MENU = "user generic menu", i.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", i.VOICE_ACTION_SHEET = "voice action sheet", i.FOCUSED_VOICE_CONTROLS = "focused voice controls", i.MASKED_LINK = "masked link", i.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", i.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", i.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", i.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", i.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", i.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", i.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", i.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", i.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", i.ACCOUNT_PROFILE_POPOUT = "account profile popout", i.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", i.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", i.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", i.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", i.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", i.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", i.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", i.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", i.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", i.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", i.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", i.STAGE_VIDEO_LIMIT = "stage video limit", i.ACTIVITIES_MINI_SHELF = "activities mini shelf", i.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", i.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", i.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", i.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", i.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", i.APP_ICON_EDITOR = "app icon editor", i.CLIENT_THEMES_EDITOR = "client themes editor", i.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", i.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", i.SHARE_NITRO_EMBED = "share nitro embed", i.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", i.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", i.REFERRAL_TRIALS_POPOUT = "referral trials popout", i.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", i.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", i.ACTIVITY_BOOKMARK = "activity bookmark", i.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", i.ACTIVITY_DETAIL_PAGE = "activity detail page", i.ACTIVITIES_PAGE = "activities page", i.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", i.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", i.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", i.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", i.ACTIVITIES_HAPPENING_NOW = "activities happening now", i.MEDIA_VIEWER = "media viewer", i.MESSAGE_LONG_PRESS_MENU = "message long press menu", i.COLLECTIBLES_SHOP = "collectibles shop", i.COLLECTIBLES_SHOP_CARD = "collectibles shop card", i.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", i.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", i.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", i.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", i.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", i.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", i.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", i.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", i.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", i.PREMIUM_BILLING_INFO = "premium billing info", i.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", i.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", i.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", i.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", i.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", i.PREMIUM_PLAN_SELECT = "premium_plan_select", i.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", i.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", i.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", i.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", i.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", i.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", i.MEMBER_SAFETY_PAGE = "member safety page", i.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", i.GUILD_MEMBER_MOD_VIEW = "guild member mod view", i.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", i.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", i.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", i.GUILD_SHOP_PAGE = "guild shop page", i.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", i.MESSAGE_REMIX_TAG = "message remix tag", i.MESSAGE_REMIX_BUTTON = "message remix button", i.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", i.CLIPS_SETTINGS = "clips settings", i.CLIPS_GALLERY = "clips gallery", i.CLIPS_GALLERY_ITEM = "clips gallery item", i.CLIPS_EDITOR = "clips editor", i.CLIPS_SHARE_MODAL = "clips share modal", i.CHANNEL_ATTACH_BUTTON = "channel attach button", i.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", i.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", i.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", i.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", i.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", i.GUILD_EVENT_CARD = "guild event card", i.EVENT_SETTINGS = "event settings";
            var i, r, o = r
        },
        988268: function(e, t, n) {
            "use strict";
            var i, r, o, l;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return r
                }
            }), (o = i || (i = {}))[o.GAME = 1] = "GAME", o[o.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", o[o.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (l = r || (r = {}))[l.BOT = 0] = "BOT", l[l.SERVER = 1] = "SERVER", l[l.SYSTEM_DM = 2] = "SYSTEM_DM", l[l.OFFICIAL = 3] = "OFFICIAL", l[l.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", l[l.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", l[l.AI = 6] = "AI", l[l.REMIX = 7] = "REMIX"
        },
        526887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCannonContext: function() {
                    return c
                },
                ConfettiCannonContextProvider: function() {
                    return d
                }
            });
            var i = n("37983"),
                r = n("884691"),
                o = n("516555"),
                l = n("65597"),
                a = n("206230"),
                u = n("49111");
            let s = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => u.NOOP,
                    removeClickListener: u.NOOP
                },
                c = r.createContext(s);

            function d(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: u,
                    baseConfig: d,
                    addClickListener: E,
                    removeClickListener: _
                } = e, f = (0, o.useConfettiCannon)(n, u), I = (0, l.default)([a.default], () => a.default.useReducedMotion), h = r.useMemo(() => I ? s : {
                    confettiCanvas: n,
                    cannon: f,
                    createConfetti: (e, t) => f.createConfetti({
                        ...d,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, i) => f.createConfetti({
                        ...d,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...n
                    }, i),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return f.createMultipleConfetti({
                            ...d,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            r = arguments.length > 4 ? arguments[4] : void 0;
                        return f.createMultipleConfetti({
                            ...d,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...n
                        }, i, r)
                    },
                    addClickListener: E,
                    removeClickListener: _
                }, [E, d, f, n, I, _]);
                return (0, i.jsx)(c.Provider, {
                    value: h,
                    children: t
                })
            }
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691");
            let r = i.createContext(void 0);
            var o = r
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return d
                },
                replaceRoleIconSourceSize: function() {
                    return E
                },
                isRoleIconAssetUrl: function() {
                    return f
                },
                canGuildUseRoleIcons: function() {
                    return I
                }
            });
            var i = n("867805"),
                r = n("407063"),
                o = n("315102"),
                l = n("773336"),
                a = n("49111");
            let u = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                s = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                c = (0, l.isAndroid)(),
                d = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: _(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                E = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()))),
                _ = (e, t) => {
                    let {
                        id: n,
                        icon: i
                    } = e;
                    if (null == i) return;
                    if (i.startsWith("data:")) return i;
                    let l = o.SUPPORTS_WEBP ? "webp" : "png",
                        d = "",
                        E = "quality=lossless";
                    return (null != t && (d = "size=" + (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()), E = c ? "" : "&" + E), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(u, "/").concat(n, "/").concat(i, ".").concat(l, "?").concat(d).concat(E) : "".concat(s).concat(a.Endpoints.ROLE_ICON(n, i), "?").concat(d)
                },
                f = e => e.startsWith(u) || e.startsWith("".concat(s, "/roles")) && e.includes("/icons/"),
                I = (e, t) => {
                    var n;
                    let i = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return i || e.features.has(a.GuildFeatures.ROLE_ICONS)
                }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return a
                },
                setCurrentGuild: function() {
                    return u
                },
                initGuildIdentitySettings: function() {
                    return s
                },
                closeGuildIdentitySettings: function() {
                    return c
                },
                resetAndCloseGuildIdentityForm: function() {
                    return d
                },
                setPendingAvatar: function() {
                    return E
                },
                setPendingBanner: function() {
                    return _
                },
                setPendingBio: function() {
                    return f
                },
                setPendingPronouns: function() {
                    return I
                },
                setPendingNickname: function() {
                    return h
                },
                setPendingThemeColors: function() {
                    return p
                },
                resetPendingMemberChanges: function() {
                    return T
                },
                resetPendingProfileChanges: function() {
                    return N
                },
                resetAllPending: function() {
                    return S
                },
                clearErrors: function() {
                    return g
                },
                setDisableSubmit: function() {
                    return C
                }
            });
            var i = n("872717"),
                r = n("913144"),
                o = n("54239"),
                l = n("49111");
            async function a(e, t) {
                let {
                    nick: n,
                    avatar: o
                } = t;
                if (null == e) throw Error("Need guildId");
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: l.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: o
                        },
                        oldFormErrors: !0
                    });
                    return r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), r.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function u(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function s(e, t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function c() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, o.popLayer)()
            }

            function d() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function E(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function _(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function f(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function I(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function h(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function p(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function T() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function N() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function S() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function g() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function C(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, r, o, l, a, u, s, c, d;
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var E = n("446674"),
                _ = n("913144"),
                f = n("49111");
            let I = f.FormStates.CLOSED,
                h = {},
                p = !1;

            function T() {
                I = f.FormStates.CLOSED, h = {}, s = null, c = void 0, d = []
            }

            function N() {
                S(), g(), h = {}, I = f.FormStates.OPEN
            }

            function S() {
                i = void 0, a = void 0
            }

            function g() {
                r = void 0, o = void 0, l = void 0, u = void 0
            }
            class C extends E.default.Store {
                getFormState() {
                    return I
                }
                getErrors() {
                    return h
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== o || void 0 !== l || void 0 !== a || void 0 !== u
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return r
                }
                getPendingBio() {
                    return o
                }
                getPendingNickname() {
                    return a
                }
                getPendingPronouns() {
                    return l
                }
                getPendingAccentColor() {
                    return a
                }
                getPendingThemeColors() {
                    return u
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: r,
                        pendingBio: o,
                        pendingPronouns: l,
                        pendingNickname: a,
                        pendingThemeColors: u
                    }
                }
                getGuild() {
                    return s
                }
                getSource() {
                    return c
                }
                getAnalyticsLocations() {
                    return d
                }
                getIsDisableSubmit() {
                    return p
                }
            }
            C.displayName = "GuildIdentitySettingsStore";
            var A = new C(_.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    s = e.guild, I = f.FormStates.OPEN, h = {}, c = e.source, d = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: T,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    N(), T()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    s = e.guild, h = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    I = f.FormStates.SUBMITTING, h = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (I !== f.FormStates.SUBMITTING) return !1;
                    I = f.FormStates.OPEN, h = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    I = f.FormStates.OPEN, h = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: S,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: g,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: N,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: N,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    h = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    p = t
                }
            })
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("872717"),
                r = n("913144"),
                o = n("479756"),
                l = n("38654"),
                a = n("9294"),
                u = n("26989"),
                s = n("337543"),
                c = n("697218"),
                d = n("49111");
            let E = async (e, t) => {
                let n = null != t ? t : s.default.getInviteKeyForGuildId(e),
                    o = c.default.getCurrentUser(),
                    l = !u.default.isMember(e, null == o ? void 0 : o.id);
                try {
                    let t = await i.default.get({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: l,
                            invite_code: null != n ? (0, a.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: o
                    } = t;
                    return r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: o.version,
                            description: o.description,
                            formFields: o.form_fields,
                            guild: o.guild
                        }
                    }), o
                } catch (t) {
                    r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, _ = async (e, t) => {
                let n = await i.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: o
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: o.version,
                        description: o.description,
                        formFields: o.form_fields
                    }
                })
            }, f = async (e, t) => {
                let n = await i.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: o
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: o.version,
                        description: o.description,
                        formFields: o.form_fields
                    }
                })
            }, I = async (e, t) => {
                await i.default.patch({
                    url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, h = async (e, t) => {
                if (l.default.isFullServerPreview(e)) {
                    (0, o.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await i.default.put({
                            url: d.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: o
                        } = n;
                    return r.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: o
                    }), o
                } catch (e) {
                    throw e
                }
            };
            var p = {
                fetchVerificationForm: E,
                updateVerificationForm: _,
                updateVerificationFormDescription: f,
                enableVerificationForm: I,
                submitVerificationForm: h
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return o
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MAX_FORM_ELEMENTS: function() {
                    return a
                },
                MAX_NUM_RULES: function() {
                    return u
                },
                MAX_RULE_LENGTH: function() {
                    return s
                },
                MAX_QUESTION_LENGTH: function() {
                    return c
                },
                MAX_NUM_CHOICES: function() {
                    return d
                },
                MAX_CHOICE_LENGTH: function() {
                    return E
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return _
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return f
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return I
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return h
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return p
                }
            });
            var i, r = n("567054");
            r.VerificationFormFieldTypes.VERIFICATION;
            let o = new Set([r.VerificationFormFieldTypes.TERMS]),
                l = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
                a = 5,
                u = 16,
                s = 300,
                c = 300,
                d = 8,
                E = 150,
                _ = 150,
                f = 1e3,
                I = 300,
                h = "Membership Gating",
                p = "in-app-member-verification";
            (i || (i = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return r
                }
            }), i = n("453265").default;
            let r = i.openMemberVerificationModal;
            i.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return a
                },
                setHasUnsubmittedChanges: function() {
                    return u
                },
                setShowWarning: function() {
                    return s
                }
            });
            var i = n("308503"),
                r = n("659500"),
                o = n("49111");
            let l = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                a = (0, i.default)(e => l),
                u = e => {
                    a.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                s = e => {
                    a.setState({
                        shouldShowWarning: e
                    }), e && r.ComponentDispatch.dispatch(o.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                o = n("599110"),
                l = n("50926"),
                a = n("347977"),
                u = n("394294"),
                s = n("49111");
            let c = () => {
                    o.default.track(s.AnalyticEvents.MODAL_DISMISSED, {
                        type: u.MEMBER_VERIFICATION_TYPE
                    })
                },
                d = e => {
                    o.default.track(s.AnalyticEvents.OPEN_MODAL, {
                        type: u.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var E = {
                openMemberVerificationModal(e, t) {
                    d(e);
                    let o = async t => {
                        await l.default.submitVerificationForm(e, t)
                    };
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: o,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, a.setShowWarning)(!0);
                                        return
                                    }
                                    c()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            c(), a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, a.setShowWarning)(!0) : (0, r.closeModal)(u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && c(), (0, r.closeModal)(u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return d
                },
                requestMembersForRole: function() {
                    return _
                }
            });
            var i = n("693566"),
                r = n.n(i),
                o = n("872717"),
                l = n("913144"),
                a = n("851387"),
                u = n("36402"),
                s = n("49111");
            async function c(e) {
                try {
                    l.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await o.default.get({
                            url: s.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    l.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    l.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function d(e) {
                u.default.shouldFetch(e) && await c(e)
            }
            let E = new r({
                maxAge: 1e4
            });

            function _(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = "".concat(e, "-").concat(t);
                if (!n || null == E.get(i)) {
                    var r, l;
                    return E.set(i, !0), r = e, l = t, o.default.get({
                        url: s.Endpoints.GUILD_ROLE_MEMBER_IDS(r, l)
                    }).then(e => (a.default.requestMembersById(r, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("446674"),
                r = n("913144");
            let o = {},
                l = {};
            class a extends i.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? o[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = l[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            a.displayName = "GuildRoleMemberCountStore";
            var u = new a(r.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    o[t] = n, l[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: i
                    } = e, r = o[t];
                    if (null == r) return !1;
                    r[n] = i
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: i
                    } = e, r = o[t];
                    if (null == r || null == r[n]) return !1;
                    let l = Object.keys(i).length;
                    r[n] += l
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, i = o[t];
                    if (null == i || null == i[n]) return !1;
                    i[n] = i[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, i = o[t];
                    if (null == i || null == i[n]) return !1;
                    i[n] = Math.max(i[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == o[t] && (o[t] = {}), o[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete o[t.id], delete l[t.id]
                }
            })
        },
        507453: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                o = n.n(r),
                l = n("598532");

            function a(e) {
                let {
                    className: t
                } = e;
                return (0, i.jsx)("div", {
                    className: o(l.image, t)
                })
            }
        },
        533613: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return i
                }
            }), (r = i || (i = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", r.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", r.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", r.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", r.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", r.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", r.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", r.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", r.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", r.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", r.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", r.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", r.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", r.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", r.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", r.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", r.HUB_NEW = "HUB_NEW", r.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", r.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", r.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", r.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", r.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", r.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", r.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", r.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", r.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", r.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", r.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", r.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", r.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", r.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", r.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", r.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", r.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", r.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", r.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", r.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", r.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", r.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", r.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return T
                },
                updateImpersonating: function() {
                    return N
                },
                stopImpersonating: function() {
                    return S
                },
                updateImpersonatedChannels: function() {
                    return C
                },
                updateImpersonatedRoles: function() {
                    return A
                },
                updateImpersonatedData: function() {
                    return v
                }
            });
            var i = n("913144"),
                r = n("716241"),
                o = n("393414"),
                l = n("42203"),
                a = n("923959"),
                u = n("26989"),
                s = n("305961"),
                c = n("957255"),
                d = n("18494"),
                E = n("282109"),
                _ = n("599110"),
                f = n("38654"),
                I = n("507950"),
                h = n("49111"),
                p = n("724210");

            function T(e, t) {
                _.default.track(h.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === I.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), g(e)
            }

            function N(e, t) {
                let n = f.default.getData(e);
                null != n && n.type === t.type && (_.default.track(h.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === I.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), g(e))
            }

            function S(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function g(e) {
                let t = d.default.getChannelId(e),
                    n = l.default.getChannel(t),
                    i = null != t && (0, p.isStaticChannelRoute)(t);
                if (!i && !c.default.can(h.Permissions.VIEW_CHANNEL, n)) {
                    let t = a.default.getDefaultChannel(e);
                    null != t && (0, o.transitionTo)(h.Routes.CHANNEL(e, t.id))
                }
            }

            function C(e, t, n) {
                let i = new Set(E.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), N(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function A(e, t) {
                let n = s.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...a.default.getSelectableChannelIds(e), ...a.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    a.default.addConditionalChangeListener(() => {
                        let t = u.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let r = [...a.default.getSelectableChannelIds(e), ...a.default.getVocalChannelIds(e)],
                            o = r.filter(e => !n.includes(e));
                        return o.length > 0 && C(e, o, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), N(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function v(e, t) {
                N(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return l
                },
                generateInviteKeyFromExtraData: function() {
                    return a
                },
                parseExtraDataFromInviteKey: function() {
                    return u
                },
                parseInviteCodeFromInviteKey: function() {
                    return s
                }
            });
            var i = n("522632"),
                r = n("833858");
            let o = "event";

            function l(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = i.parse(t);
                        return (0, r.getFirstQueryStringValue)(e[o])
                    } catch (e) {
                        return
                    }
                }(t);
                return a({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function a(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(o, "=").concat(n)
            }

            function u(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let l = i.parse(n),
                    a = (0, r.getFirstQueryStringValue)(l[o]);
                return {
                    baseCode: t,
                    guildScheduledEventId: a
                }
            }

            function s(e) {
                let [t] = e.split("?");
                return t
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return c
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return d
                },
                useInventoryGuildSettingsExperiment: function() {
                    return _
                }
            });
            var i = n("65597"),
                r = n("862205"),
                o = n("697218"),
                l = n("719923"),
                a = n("782340");
            let u = (0, r.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1,
                        autoUnfurlReactionTooltip: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 6,
                        label: "Non-nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0
                        }
                    }, {
                        id: 7,
                        label: "Nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0
                        }
                    }]
                }),
                s = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: r,
                        mobileAndFreemiumCollectEnabled: o,
                        autoUnfurlReactionTooltip: a
                    } = n, u = l.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: o,
                        collectEnabled: u ? i : o,
                        autoUnfurlReactionTooltip: a
                    }
                },
                c = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1,
                        autoUnfurlReactionTooltip: !1
                    } : s({
                        user: t,
                        config: u.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                d = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, r = (0, i.default)([o.default], () => o.default.getCurrentUser()), l = u.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: a,
                        showTryPacksModalAndV2Copy: c,
                        collectEnabled: d,
                        autoUnfurlReactionTooltip: E
                    } = s({
                        user: r,
                        config: l
                    }), _ = a && d && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: a,
                        collectEnabled: _,
                        showTryPacksModalAndV2Copy: c,
                        autoUnfurlReactionTooltip: E
                    }
                },
                E = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescription: () => null
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }]
                }),
                _ = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = E.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: void 0 === t || t
                    });
                    return {
                        showSettingsToggle: n.showSettingsToggle,
                        allowCollection: n.allowCollection,
                        getNewSettingsDescription: n.getNewSettingsDescription
                    }
                }
        },
        95045: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                },
                renderAutomodMessageMarkup: function() {
                    return s
                }
            }), n("355025");
            var i = n("367376"),
                r = n("240873"),
                o = n("49111");
            let l = new Set([o.MessageEmbedTypes.IMAGE, o.MessageEmbedTypes.GIFV]),
                a = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.formatInline ? i.default.parseInlineReply : i.default.parse;
                return function(e, t, n) {
                    var i, o;
                    let {
                        toAST: u = !1,
                        hideSimpleEmbedContent: s = !0,
                        formatInline: E = !1,
                        postProcessor: _
                    } = n, f = !1;
                    let I = e(t.content, !0, (i = t, o = n, {
                        allowLinks: null != i.webhookId || !!o.allowLinks,
                        allowEmojiLinks: null != i.webhookId,
                        channelId: i.channel_id,
                        messageId: i.id,
                        mentionChannels: i.mentionChannels,
                        isInteracting: !!o.isInteracting,
                        formatInline: !!o.formatInline,
                        noStyleAndInteraction: !!o.noStyleAndInteraction,
                        allowHeading: !!o.allowHeading,
                        allowList: !!o.allowList,
                        previewLinkTarget: !!o.previewLinkTarget,
                        disableAnimatedEmoji: !!o.disableAnimatedEmoji,
                        disableAutoBlockNewlines: !0,
                        muted: !1
                    }), (e, n) => (!Array.isArray(e) && (e = [e]), s && (e = function(e, t) {
                        if (1 !== e.length || 1 !== t.length) return e;
                        let n = e[0],
                            i = t[0];
                        return "link" === n.type && l.has(i.type) && (0, r.isEmbedInline)(i) ? [] : e
                    }(e, t.embeds)), !E && (e = function(e, t) {
                        return t ? c(e) : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = c(e[0].content)), e)
                    }(e, n)), f = function(e, t) {
                        return t ? d(e) : "paragraph" === e[0].type && e[0].content instanceof Array && d(e[0].content)
                    }(e, n), E && (e = function e(t) {
                        return t.forEach(t => {
                            a.has(t.type) && null != t.content && (Array.isArray(t.content) ? e(t.content) : t.content = t.content.replace(/\n/g, " "))
                        }), t
                    }(e)), null != _ && (e = _(e, n)), e));
                    return {
                        hasSpoilerEmbeds: f,
                        content: I
                    }
                }(n, e, t)
            }

            function s(e, t, n) {
                var r;
                return r = i.default.parseAutoModerationSystemMessage, r(e, !0, {
                    allowLinks: !1,
                    allowEmojiLinks: !1,
                    mentionChannels: [],
                    isInteracting: !1,
                    formatInline: !1,
                    noStyleAndInteraction: !1,
                    allowHeading: !1,
                    allowList: !1,
                    disableAutoBlockNewlines: !0,
                    highlightWord: t,
                    disableAnimatedEmoji: !1,
                    channelId: n,
                    muted: !1
                }, e => (!Array.isArray(e) && (e = [e]), e))
            }

            function c(e) {
                let t = e.some(e => "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim()) && !0);
                if (t) return e;
                let n = 0;
                return (e.forEach(e => {
                    if (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (n += 1), n > 30) return !1
                }), n > 30) ? e : (e.forEach(e => {
                    e.jumboable = !0
                }), e)
            }

            function d(e) {
                return e.some(e => "spoiler" === e.type && Array.isArray(e.content) && e.content.some(e => "link" === e.type))
            }
        },
        650484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                },
                PaymentPortalBody: function() {
                    return I
                },
                PaymentPortalFooter: function() {
                    return h
                }
            });
            var i = n("37983"),
                r = n("884691"),
                o = n("414456"),
                l = n.n(o),
                a = n("627445"),
                u = n.n(a),
                s = n("817736"),
                c = n.n(s),
                d = n("77078"),
                E = n("642906"),
                _ = n("990893");

            function f(e) {
                var t, n, o, a, s, c;
                let {
                    header: f,
                    isLargeModal: I,
                    stepProps: h
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: n,
                        ...i
                    } = e;
                    return {
                        header: t,
                        isLargeModal: n,
                        stepProps: i
                    }
                }(e), {
                    step: p,
                    stepConfigs: T,
                    setBodyNode: N,
                    setFooterNode: S,
                    setModalOverlayNode: g,
                    setReadySlideId: C
                } = (0, E.usePaymentContext)(), A = T.find(e => e.key === p);
                r.useEffect(() => {
                    g(null)
                }, [p, g]), u(null != A, "Unknown step for current payment flow.");
                let v = null !== (s = null == A ? void 0 : null === (t = A.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== s && s,
                    m = null == A ? void 0 : null === (n = A.options) || void 0 === n ? void 0 : n.bodyClassName,
                    R = void 0 !== I && I ? _.sliderBodyLarge : null == A ? void 0 : null === (o = A.options) || void 0 === o ? void 0 : o.sliderBodyClassName;
                return (0, i.jsxs)(i.Fragment, {
                    children: [null === (c = null == A ? void 0 : null === (a = A.options) || void 0 === a ? void 0 : a.renderHeader) || void 0 === c || c ? f : null, A.renderStep(h), null == p || v ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(d.ModalContent, {
                            className: l(_.body, m),
                            children: (0, i.jsx)(d.Slides, {
                                activeSlide: p,
                                centered: !1,
                                onSlideReady: e => C(e),
                                children: T.filter(e => null != e.key).map(e => (0, i.jsx)(d.Slide, {
                                    id: e.key,
                                    children: (0, i.jsx)("form", {
                                        className: l(_.sliderBody, R),
                                        ref: e => N(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, i.jsx)("div", {
                            ref: e => S(e)
                        }), (0, i.jsx)("div", {
                            ref: e => g(e)
                        })]
                    })]
                })
            }

            function I(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, E.usePaymentContext)();
                return null == n ? null : c.createPortal(t, n)
            }

            function h(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, E.usePaymentContext)();
                return null == n ? null : c.createPortal(t, n)
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("748820"),
                o = n("77078"),
                l = n("112679"),
                a = n("55689"),
                u = n("855133"),
                s = n("599110"),
                c = n("659500"),
                d = n("49111"),
                E = n("646718");

            function _(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: _,
                    onClose: f,
                    onComplete: I,
                    onSubscriptionConfirmation: h,
                    analyticsLocations: p,
                    analyticsObject: T,
                    analyticsLocation: N,
                    analyticsSourceLocation: S,
                    isGift: g = !1,
                    giftMessage: C,
                    subscriptionTier: A,
                    trialId: v,
                    postSuccessGuild: m,
                    openInvoiceId: R,
                    applicationId: O,
                    referralTrialOfferId: L,
                    giftRecipient: U,
                    returnRef: y
                } = null != e ? e : {}, D = !1, M = (0, r.v4)();
                (0, o.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: r,
                            ...o
                        } = n;
                        return (0, i.jsx)(e, {
                            ...o,
                            loadId: M,
                            subscriptionTier: A,
                            skuId: A,
                            isGift: g,
                            giftMessage: C,
                            giftRecipient: U,
                            initialPlanId: t,
                            followupSKUInfo: _,
                            onClose: e => {
                                r(), null == f || f(e), e && (null == h || h())
                            },
                            onComplete: () => {
                                D = !0, null == I || I(), !g && ((0, u.setIsPersistentHelperHidden)(!0), (0, u.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: h,
                            analyticsLocations: p,
                            analyticsObject: T,
                            analyticsLocation: N,
                            analyticsSourceLocation: S,
                            trialId: v,
                            postSuccessGuild: m,
                            planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: R,
                            applicationId: O,
                            referralTrialOfferId: L,
                            returnRef: y
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !D && s.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: M,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != N ? N : T,
                            source: S,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: g,
                            eligible_for_trial: null != v,
                            application_id: O,
                            location_stack: p
                        }), (0, l.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == f || f(D), D && (!g && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == h || h())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("65597"),
                o = n("880731");

            function l(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, l = (0, r.default)([o.default], () => o.default.isEnabled({
                    confettiLocation: n
                }));
                return l ? (0, i.jsx)(i.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("884691"),
                r = n("65597"),
                o = n("526887"),
                l = n("880731");

            function a() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(o.ConfettiCannonContext), t = (0, r.default)([l.default], () => l.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), a = i.useMemo(() => ({
                    fire: (i, r, o) => {
                        var l, a;
                        let u = (null == o ? void 0 : o.settings) != null ? {
                                ...t,
                                ...o.settings
                            } : t,
                            s = n(u);
                        e(i, r, s, (null !== (l = null == o ? void 0 : o.count) && void 0 !== l ? l : u.confettiCount) * (null !== (a = null == o ? void 0 : o.countMultiplier) && void 0 !== a ? a : 1), {
                            sprite: null == o ? void 0 : o.sprite
                        })
                    }
                }), [e, n, t]);
                return a
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return r
                },
                setHasCompletedStep: function() {
                    return o
                },
                resetPremiumTutorialStore: function() {
                    return l
                },
                setCanPlayWowMoment: function() {
                    return a
                },
                setIsPersistentHelperHidden: function() {
                    return u
                },
                setNavigatedFromHelper: function() {
                    return s
                }
            });
            var i = n("913144");
            let r = () => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                o = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                l = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                a = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                u = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                s = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return f
                },
                maybeFetchPremiumLikelihood: function() {
                    return h
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return p
                }
            });
            var i = n("884691"),
                r = n("65597"),
                o = n("872717"),
                l = n("913144"),
                a = n("775433"),
                u = n("697218"),
                s = n("10514"),
                c = n("764364"),
                d = n("676572"),
                E = n("646718"),
                _ = n("49111");
            let f = "nonSubscriber";
            async function I() {
                try {
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await o.default.get({
                        url: _.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [f]: e.non_subscriber,
                                [E.PremiumSubscriptionSKUs.TIER_0]: e[E.PremiumSubscriptionSKUs.TIER_0],
                                [E.PremiumSubscriptionSKUs.TIER_2]: e[E.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function h(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = d.default.shouldFetchPremiumLikelihood(), r = u.default.getCurrentUser();
                T(r, i, t, n)
            }

            function p(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), o = (0, r.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), l = (0, r.default)([u.default], () => u.default.getCurrentUser());
                i.useEffect(() => {
                    T(l, o, t, n)
                }, [l, o, t, n])
            }

            function T(e, t, n, i) {
                null != e && !(0, c.isPremium)(e) && n && (t && I(), i && (!s.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_0) && !s.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_0) && (0, a.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_0), !s.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_2) && !s.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_2) && (0, a.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("446674"),
                r = n("913144");
            let o = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                l = o;
            class a extends i.default.Store {
                initialize() {
                    l = o
                }
                getState() {
                    return l
                }
                shouldFetchPremiumLikelihood() {
                    return !l.isFetching && !l.fetched
                }
            }
            a.displayName = "UserPremiumLikelihoodStore";
            var u = new a(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    l.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    l.premiumLikelihood = t, l.fetched = !0, l.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    l.isFetching = !1
                },
                LOGOUT: function() {
                    l.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var o = r
        },
        906932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAvatarsWithGuilds: function() {
                    return u
                },
                setNewPendingUserBio: function() {
                    return s
                },
                setNewPendingAvatar: function() {
                    return c
                },
                setNewPendingAvatarDecoration: function() {
                    return d
                },
                setNewPendingProfileEffectID: function() {
                    return E
                },
                getProfilePreviewField: function() {
                    return _
                },
                showRemoveAvatar: function() {
                    return f
                },
                showRemoveBanner: function() {
                    return I
                }
            });
            var i = n("884691"),
                r = n("152584"),
                o = n("234251"),
                l = n("783142"),
                a = n("26989");

            function u(e) {
                return i.useMemo(() => {
                    let t = a.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let r in t) {
                        var i;
                        let o = t[r],
                            l = null === (i = o[e]) || void 0 === i ? void 0 : i.avatar;
                        null != l && (null == n[l] && (n[l] = []), n[l].push(r))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function s(e, t) {
                (0, l.setPendingBio)(e === t ? void 0 : e)
            }

            function c(e, t) {
                (0, r.setPendingAvatar)(e === t ? void 0 : e)
            }

            function d(e, t) {
                if ((0, o.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, r.setPendingAvatarDecoration)(void 0);
                    return
                }(0, r.setPendingAvatarDecoration)(e)
            }

            function E(e, t) {
                if (e === t) {
                    (0, r.setPendingProfileEffectID)(void 0);
                    return
                }(0, r.setPendingProfileEffectID)(e)
            }

            function _(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != e) return "" === e ? {
                    value: i ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: e,
                    isUsingGuildValue: i
                };
                return null != t && "" !== t ? {
                    value: t,
                    isUsingGuildValue: !0
                } : {
                    value: n,
                    isUsingGuildValue: !1
                }
            }

            function f(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function I(e, t) {
                return void 0 === e ? null != t : null != e
            }
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                r = n("79112"),
                o = n("685665"),
                l = n("929423");
            n("424562");
            var a = n("49111"),
                u = n("397336");

            function s(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: c,
                    openWithoutBackstack: d = !1
                } = e, {
                    analyticsLocations: E
                } = (0, o.default)(), _ = (0, i.useCallback)(() => {
                    null != t && (0, l.initGuildIdentitySettings)(t, null != c ? c : E), r.default.open(a.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? u.ProfileCustomizationSubsection.GUILD : u.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: s,
                        analyticsLocations: c,
                        openWithoutBackstack: d
                    })
                }, [t, n, s, c, d, E]);
                return _
            }
        },
        846325: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return o
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return l
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return a
                },
                SoundboardWheelSize: function() {
                    return u
                },
                DEFAULT_KEYBIND: function() {
                    return s
                },
                EMPTY_SOUND_LIST: function() {
                    return c
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return d
                }
            });
            let o = 32,
                l = 5,
                a = "DEFAULT";
            (r = i || (i = {}))[r.SUCCESS = 0] = "SUCCESS", r[r.INTERRUPTED = 1] = "INTERRUPTED", i.SUCCESS, i.INTERRUPTED;
            let u = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                s = "ctrl+`",
                c = [],
                d = "0"
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var i, r, o = n("917351"),
                l = n.n(o),
                a = n("446674"),
                u = n("913144"),
                s = n("845579"),
                c = n("374363"),
                d = n("697218"),
                E = n("599110"),
                _ = n("829536"),
                f = n("846325"),
                I = n("49111"),
                h = n("397336");
            (i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let p = new Map,
                T = new Map,
                N = new Set,
                S = r.NOT_FETCHED,
                g = r.NOT_FETCHED,
                C = new Set,
                A = new Map,
                v = !1;

            function m(e) {
                let {
                    sound: t
                } = e, n = p.get(t.guildId), i = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != i && -1 !== i ? (n[i] = t, p.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), p.set(t.guildId, [...n]))
            }
            let R = l.debounce(e => {
                E.default.track(I.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, _.amplitudeToPerceptual)(e))
                }), s.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function O(e) {
                var t, n;
                let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(i)) t.soundboardMuted ? N.add(e) : N.delete(e);
                for (let e of N.keys()) null == i[e] && N.delete(e)
            }
            class L extends a.default.Store {
                initialize() {
                    this.waitFor(c.default), O(c.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(p),
                        favoritedSoundIds: Array.from(C),
                        localSoundboardMutes: Array.from(N)
                    }
                }
                getSounds() {
                    return p
                }
                getSoundsForGuild(e) {
                    return p.get(e)
                }
                getSound(e, t) {
                    var n;
                    let i = null !== (n = p.get(e)) && void 0 !== n ? n : [];
                    return i.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(p.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return g === r.FETCHING
                }
                isFetchingDefaultSounds() {
                    return S === r.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return S === r.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return S === r.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = A.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != T.get(e)
                }
                isFavoriteSound(e) {
                    return C.has(e)
                }
                getFavorites() {
                    return C
                }
                isLocalSoundboardMuted(e) {
                    return N.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return v
                }
                hasFetchedAllSounds() {
                    return g === r.FETCHED && S === r.FETCHED
                }
            }
            L.displayName = "SoundboardStore";
            var U = new L(u.default, {
                LOGOUT: function() {
                    p.clear(), T.clear(), A.clear(), v = !1, g = r.NOT_FETCHED, S = r.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    g = r.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: m,
                GUILD_SOUNDBOARD_SOUND_UPDATE: m,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    p.delete(t);
                    let i = p.get(n),
                        r = null == i ? void 0 : i.findIndex(e => e.soundId === t);
                    null != i && null != r && !(r < 0) && (i.splice(r, 1), p.set(n, [...i]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, i;
                    let {
                        soundId: r,
                        userId: o
                    } = e, l = (null !== (n = T.get(r)) && void 0 !== n ? n : 0) + 1, a = (null !== (i = A.get(o)) && void 0 !== i ? i : 0) + 1;
                    T.set(r, l), A.set(o, a), o !== (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (v = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: i,
                        userId: r
                    } = e, o = (null !== (t = T.get(i)) && void 0 !== t ? t : 0) - 1, l = (null !== (n = A.get(r)) && void 0 !== n ? n : 0) - 1;
                    o <= 0 ? T.delete(i) : T.set(i, o), l <= 0 ? A.delete(r) : A.set(r, l)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    R(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    T.clear(), A.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: i
                    } = t;
                    if (n === h.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var r, o;
                        C = new Set(null !== (o = null == i ? void 0 : null === (r = i.favoriteSoundboardSounds) || void 0 === r ? void 0 : r.soundIds) && void 0 !== o ? o : [])
                    } else n === h.UserSettingsTypes.PRELOADED_USER_SETTINGS && O(i)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    S = r.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    p.set(f.DEFAULT_SOUND_GUILD_ID, t), S = r.FETCHED
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
                    let {
                        updates: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guildId: t,
                            sounds: n
                        } = e;
                        p.set(t, n)
                    }), g = r.FETCHED
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    p.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    N.has(t) ? N.delete(t) : N.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    p = new Map(Object.entries(t.soundboardSounds)), C = new Set(t.favoritedSoundIds), N = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    p.set(t, n)
                }
            })
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("49111");

            function r(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(i.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(i.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        178225: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isGuildEligibleForStageChannels: function() {
                    return l
                },
                useGuildEligibleForStageChannels: function() {
                    return a
                }
            });
            var i = n("446674"),
                r = n("305961"),
                o = n("49111");

            function l(e) {
                var t;
                let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default];
                return !!(null === (t = n.getGuild(e)) || void 0 === t ? void 0 : t.hasFeature(o.GuildFeatures.COMMUNITY))
            }

            function a(e) {
                return (0, i.useStateFromStores)([r.default], () => l(e, [r.default]), [e])
            }
        },
        4233: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-03_free_discord_stickers",
                label: "Free Default Stickers",
                defaultConfig: {
                    freeStickersEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        freeStickersEnabled: !0
                    }
                }]
            });
            var o = r
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return r
                },
                getStickerSendability: function() {
                    return c
                },
                isSendableSticker: function() {
                    return d
                }
            });
            var i, r, o = n("991170"),
                l = n("719923"),
                a = n("4233"),
                u = n("24373"),
                s = n("49111");
            (i = r || (r = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let c = (e, t, n) => {
                    if (null == t) return r.NONSENDABLE;
                    let i = l.default.canUseStickersEverywhere(t);
                    if ((0, u.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = a.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return i || e ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, u.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? r.SENDABLE : null == n.guild_id || o.default.can({
                        permission: s.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM : r.NONSENDABLE : r.SENDABLE_WITH_BOOSTED_GUILD;
                    return r.NONSENDABLE
                },
                d = (e, t, n) => c(e, t, n) === r.SENDABLE
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("917351"),
                r = n.n(i),
                o = n("446674"),
                l = n("913144"),
                a = n("80507"),
                u = n("374363"),
                s = n("364685"),
                c = n("49111"),
                d = n("397336");
            let E = {
                pendingUsages: []
            };
            c.Durations.DAY;
            let _ = new a.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => s.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                f = () => {
                    s.default.isLoaded && _.compute()
                },
                I = () => {
                    f()
                };

            function h() {
                var e;
                let t = null === (e = u.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                _.overwriteHistory(r.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), E.pendingUsages)
            }
            class p extends o.default.PersistedStore {
                initialize(e) {
                    this.waitFor(s.default), null != e && (E = e), this.syncWith([s.default], I), this.syncWith([u.default], h)
                }
                getState() {
                    return E
                }
                hasPendingUsage() {
                    return E.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return _
                }
            }
            p.displayName = "StickersPersistedStore", p.persistKey = "StickersPersistedStoreV2";
            var T = new p(l.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        _.track(e), E.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), f()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== d.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    E.pendingUsages = []
                }
            })
        },
        783142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveProfileChanges: function() {
                    return _
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return f
                },
                resetPendingProfileChanges: function() {
                    return I
                },
                setPendingBanner: function() {
                    return h
                },
                setPendingBio: function() {
                    return p
                },
                setPendingPronouns: function() {
                    return T
                },
                setPendingAccentColor: function() {
                    return N
                },
                setPendingThemeColors: function() {
                    return S
                },
                setTryItOutAvatar: function() {
                    return g
                },
                setTryItOutAvatarDecoration: function() {
                    return C
                },
                setTryItOutBanner: function() {
                    return A
                },
                setTryItOutThemeColors: function() {
                    return v
                }
            });
            var i = n("872717"),
                r = n("913144"),
                o = n("448993"),
                l = n("884351"),
                a = n("845579"),
                u = n("697218"),
                s = n("599110"),
                c = n("49111"),
                d = n("646718");

            function E(e) {
                s.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function _(e, t) {
                var n, s;
                let d = null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == d) return;
                let E = a.UseLegacyChatInput.getSetting();
                null != e.bio && E && (e.bio = l.default.parse(void 0, e.bio).content);
                try {
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: d
                    });
                    let n = await i.default.patch({
                        url: null != t ? c.Endpoints.GUILD_PROFILE(t, c.ME) : c.Endpoints.USER_PROFILE(c.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (s = n.body.profile_effect) || void 0 === s ? void 0 : s.id;
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: d,
                            profileEffectID: e,
                            ...n.body
                        })
                    } else {
                        let e = new o.APIError(n);
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new o.APIError(t);
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
                    })
                }
            }

            function f() {
                r.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function I() {
                r.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function h(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function p(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function T(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function N(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function S(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function g(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), E(d.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function C(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), E(d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function A(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), E(d.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function v(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), E(d.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        679428: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var i = n("917351"),
                r = n.n(i),
                o = n("872717"),
                l = n("689988"),
                a = n("605250"),
                u = n("870691"),
                s = n("42203"),
                c = n("49111");
            let d = {},
                E = new a.default("UserGuildSettingsManager"),
                _ = 0;

            function f() {
                d = {
                    ...u.default.getCollapsedCategories()
                }
            }

            function I() {
                !__OVERLAY__ && (clearTimeout(_), _ = setTimeout(() => h(), 15e3))
            }
            async function h(e, t) {
                await p(null != t ? {
                    [null != e ? e : c.ME]: t
                } : {})
            }
            async function p(e) {
                clearTimeout(_);
                let t = 0 !== Object.keys(e).length,
                    n = u.default.getCollapsedCategories(),
                    i = function() {
                        let e = {},
                            t = u.default.getCollapsedCategories();
                        for (let n in t) t[n] !== d[n] && (e[n] = !0);
                        for (let n in d) t[n] !== d[n] && (e[n] = !0);
                        return e
                    }();
                for (let r in i) {
                    let i = s.default.getChannel(r);
                    null != i && null != i.guild_id && (!(i.guild_id in e) && (e[i.guild_id] = {}), null == e[i.guild_id].channel_overrides && (e[i.guild_id].channel_overrides = {}), e[i.guild_id].channel_overrides[i.id] = {
                        ...e[i.guild_id].channel_overrides[i.id],
                        collapsed: i.id in n
                    }, t = !0)
                }
                if (!t) return;
                d = {
                    ...n
                };
                let l = r.map(e, (e, t) => ({
                    guildId: t,
                    updates: e,
                    attempts: 0
                }));
                for (; l.length > 0;) {
                    let e = l.shift();
                    if (e.guildId !== c.FAVORITES) try {
                        await o.default.patch({
                            url: c.Endpoints.USER_GUILD_SETTINGS(e.guildId),
                            body: e.updates
                        }), await T(1e3)
                    } catch (t) {
                        E.error(t), e.attempts += 1, e.attempts < 3 && l.push(e), await T(5e3)
                    }
                }
            }

            function T(e) {
                return new Promise(t => setTimeout(t, e + Math.ceil(e * Math.random())))
            }

            function N() {
                d = {
                    ...u.default.getCollapsedCategories()
                }
            }
            class S extends l.default {
                constructor(...e) {
                    super(...e), this.actions = {
                        CATEGORY_COLLAPSE: I,
                        CATEGORY_EXPAND: I,
                        CATEGORY_COLLAPSE_ALL: I,
                        CATEGORY_EXPAND_ALL: I,
                        POST_CONNECTION_OPEN: f,
                        USER_GUILD_SETTINGS_FULL_UPDATE: N
                    }, this.saveUserGuildSettings = h, this.saveUserGuildSettingsBulk = p
                }
            }
            var g = new S
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("866227"),
                r = n.n(i),
                o = n("666038");
            class l extends o.default {
                static createFromServer(e) {
                    var t;
                    return new l({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: r(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = r(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = r(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        870691: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("446674"),
                r = n("913144"),
                o = n("449008"),
                l = n("42203"),
                a = n("341542"),
                u = n("923959"),
                s = n("49111");
            let c = {},
                d = 0;

            function E() {
                d += 1
            }

            function _(e) {
                if (null == c[e]) return !1;
                delete c[e]
            }
            class f extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(l.default, a.default), this.removeChangeListener(E), this.addChangeListener(E), c = null != e ? e : {}
                }
                getState() {
                    return c
                }
                isCollapsed(e) {
                    return null != e && "null" !== e && !!c[e] && c[e]
                }
                getCollapsedCategories() {
                    return c
                }
                get version() {
                    return d
                }
            }
            f.displayName = "CategoryCollapseStore", f.persistKey = "collapsedCategories";
            var I = new f(r.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (!e.userGuildSettings.partial && (c = {}), e.userGuildSettings.entries))
                        if (null != t.channel_overrides)
                            for (let e of t.channel_overrides) e.collapsed ? c[e.channel_id] = !0 : delete c[e.channel_id]
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e, n = new Set(t.map(e => e.guild_id).filter(o.isNotNullish));
                    for (let e in c) {
                        let t = l.default.getChannel(e);
                        null != t && null != t.guild_id && n.has(t.guild_id) && delete c[t.id]
                    }
                    for (let e of t)
                        for (let t of e.channel_overrides) t.collapsed && (c[t.channel_id] = !0)
                },
                CATEGORY_COLLAPSE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (c[t]) return !1;
                    c[t] = !0
                },
                CATEGORY_EXPAND: function(e) {
                    let {
                        id: t
                    } = e;
                    return _(t)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    u.default.getChannels(t)[s.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        "null" !== t.id && (c[t.id] = !0)
                    })
                },
                CATEGORY_EXPAND_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    u.default.getChannels(t)[s.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        delete c[t.id]
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e;
                    return _(t)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("446674"),
                r = n("913144"),
                o = n("9294"),
                l = n("49111");
            let a = {},
                u = {},
                s = {};

            function c(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, o.parseExtraDataFromInviteKey)(e),
                    r = a[e],
                    u = null != r ? {
                        state: l.InviteStates.RESOLVING,
                        ...r
                    } : {
                        state: l.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                t(u), a = {
                    ...a,
                    [e]: u
                }, (null === (n = u.guild) || void 0 === n ? void 0 : n.id) != null && (s = {
                    ...s,
                    [u.guild.id]: e
                })
            }

            function d(e) {
                return c(e.code, t => {
                    t.state = "banned" in e && e.banned ? l.InviteStates.BANNED : l.InviteStates.EXPIRED
                })
            }
            class E extends i.default.Store {
                getInvite(e) {
                    return a[e]
                }
                getInviteError(e) {
                    return u[e]
                }
                getInvites() {
                    return a
                }
                getInviteKeyForGuildId(e) {
                    return s[e]
                }
            }
            E.displayName = "InviteStore";
            var _ = new E(r.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, o.parseExtraDataFromInviteKey)(t);
                    a = {
                        ...a,
                        [t]: {
                            code: n.baseCode,
                            state: l.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return c(e.code, t => {
                        var n, i;
                        t.state = l.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: d,
                INSTANT_INVITE_REVOKE_SUCCESS: d,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        t.state = l.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => c(e.code, e => {
                        e.state = l.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        var n, i;
                        t.state = l.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return c(e.code, e => {
                        e.state = l.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return c(e.code, t => {
                        t.state = l.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return u[e.code] = e.error, c(e.code, e => {
                        e.state = l.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return c(e.code, e => {
                        e.state = l.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = l.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = l.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("627445"),
                r = n.n(i),
                o = n("446674"),
                l = n("913144"),
                a = n("816454");
            let u = new Map;

            function s(e) {
                let t = u.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class c extends o.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return u.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(e).windowSize
                }
            }
            c.displayName = "WindowStore";
            let d = new c(l.default, {
                WINDOW_INIT: function(e) {
                    r(!u.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: o
                    } = e;
                    return u.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: o
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = s(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (u.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = s(e.windowId);
                    return t.focused !== e.focused && (u.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = s(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (u.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return u.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = d.isFocused() ? "focused" : "unfocused"
                })
            });
            var E = d
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                o = n("414456"),
                l = n.n(o),
                a = n("77078"),
                u = n("760607"),
                s = n("89976");

            function c(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: o,
                    flowerStarClassName: c,
                    ...d
                } = e, E = r.Children.only(t), _ = (0, a.useRedesignIconContext)().enabled;
                return (0, i.jsxs)("div", {
                    className: l(s.flowerStarContainer, o),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, i.jsx)(u.default, {
                        ...d,
                        className: l(c, s.flowerStar)
                    }), (0, i.jsx)("div", {
                        className: l(s.childContainer, {
                            [s.redesignIconChildContainer]: _
                        }),
                        children: E
                    })]
                })
            }
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return r
                },
                default: function() {
                    return f
                }
            });
            var i, r, o = n("37983");
            n("884691");
            var l = n("414456"),
                a = n.n(l),
                u = n("77078"),
                s = n("36694"),
                c = n("381546"),
                d = n("68238"),
                E = n("423487"),
                _ = n("557296");
            (i = r || (r = {}))[i.WARNING = 0] = "WARNING", i[i.INFO = 1] = "INFO", i[i.ERROR = 2] = "ERROR", i[i.POSITIVE = 3] = "POSITIVE";
            var f = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: i,
                    textColor: l = "text-normal",
                    textVariant: f = "text-sm/medium"
                } = e, I = function(e) {
                    switch (e) {
                        case r.WARNING:
                            return E.default;
                        case r.INFO:
                            return d.default;
                        case r.ERROR:
                            return c.default;
                        case r.POSITIVE:
                            return s.default
                    }
                }(n), h = function(e) {
                    switch (e) {
                        case r.WARNING:
                            return _.warning;
                        case r.INFO:
                            return _.info;
                        case r.ERROR:
                            return _.error;
                        case r.POSITIVE:
                            return _.positive
                    }
                }(n);
                return (0, o.jsxs)("div", {
                    className: a(_.container, h, i),
                    children: [(0, o.jsx)("div", {
                        className: _.iconDiv,
                        children: (0, o.jsx)(I, {
                            className: _.icon
                        })
                    }), (0, o.jsx)(u.Text, {
                        className: _.text,
                        color: l,
                        variant: f,
                        children: t
                    })]
                })
            }
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983"),
                r = n("884691"),
                o = n("77078"),
                l = n("393414"),
                a = n("49111"),
                u = r.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: u,
                        onClick: s,
                        onKeyPress: c,
                        focusProps: d,
                        ...E
                    } = e, _ = r.useCallback(e => {
                        !e.repeat && ((e.charCode === a.KeyboardKeys.SPACE || e.charCode === a.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, l.transitionTo)(n), null == s || s()), null == c || c(e))
                    }, [n, c, s]), f = r.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, l.transitionTo)(n), null == s || s())
                    }, [n, s]), I = (0, i.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: f,
                        onKeyPress: _,
                        ...E,
                        children: u
                    });
                    return (0, i.jsx)(o.FocusRing, {
                        ...d,
                        children: I
                    })
                })
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return h
                },
                default: function() {
                    return T
                }
            });
            var i, r, o = n("37983"),
                l = n("884691"),
                a = n("414456"),
                u = n.n(a),
                s = n("458960"),
                c = n("77078"),
                d = n("252744"),
                E = n("145131"),
                _ = n("396792");
            (i = r || (r = {})).DEFAULT = "default", i.SMALL = "small";
            let f = {
                    [r.DEFAULT]: _.shineDefault,
                    [r.SMALL]: _.shineSmall
                },
                I = {
                    [r.DEFAULT]: _.shineInnerDefault,
                    [r.SMALL]: _.shineInnerSmall
                };
            class h extends l.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, o.jsx)(s.default.div, {
                        ...i,
                        className: u(_.shineContainer, e, {
                            [_.shinePaused]: n
                        }),
                        children: (0, o.jsx)(E.default, {
                            align: E.default.Align.CENTER,
                            justify: E.default.Justify.CENTER,
                            className: f[t],
                            children: (0, o.jsx)("div", {
                                className: I[t]
                            })
                        })
                    })
                }
            }
            h.defaultProps = {
                shineSize: r.DEFAULT
            };
            let p = e => {
                let {
                    children: t,
                    className: n,
                    disabled: i,
                    submitting: a,
                    pauseAnimation: s,
                    shineSize: E = r.DEFAULT,
                    shinePaused: f,
                    buttonShineClassName: I,
                    onlyShineOnHover: p,
                    ...T
                } = e, N = l.createRef(), S = (0, d.default)(N), g = !i && !a && !0 !== s && (!p || S);
                return (0, o.jsxs)(c.Button, {
                    buttonRef: N,
                    ...T,
                    className: u(_.shinyButton, n),
                    disabled: i,
                    submitting: a,
                    children: [t, g ? (0, o.jsx)(h, {
                        shinePaused: f,
                        className: u(_.buttonShine, p ? _.onlyShineOnHover : void 0, I),
                        shineSize: E
                    }) : null]
                })
            };
            p.ShineSizes = r;
            var T = p
        },
        191814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");

            function r(e) {
                let {
                    size: t,
                    horizontal: n = !1
                } = e, r = n ? t : 1, o = n ? 1 : t;
                return (0, i.jsx)("span", {
                    style: {
                        display: "block",
                        width: r,
                        minWidth: r,
                        height: o,
                        minHeight: o
                    }
                })
            }
            n("884691")
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return l
                },
                useUID: function() {
                    return a
                },
                UID: function() {
                    return u
                }
            });
            var i = n("995008"),
                r = n.n(i),
                o = n("775560");
            let l = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return r(e)
                },
                a = () => (0, o.useLazyValue)(() => l()),
                u = e => {
                    let {
                        children: t
                    } = e;
                    return t(a())
                }
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                o = n.n(r),
                l = n("384737"),
                a = n("448052"),
                u = n("748802"),
                s = n("260792"),
                c = n("77078"),
                d = n("75196"),
                E = n("4177");
            let _ = {
                    UP: E.directionUp,
                    RIGHT: E.directionRight,
                    DOWN: E.directionDown,
                    LEFT: E.directionLeft
                },
                f = e => {
                    let {
                        direction: t = _.DOWN,
                        width: n = 24,
                        height: r = 24,
                        color: f = "currentColor",
                        transition: I = E.transition,
                        className: h,
                        foreground: p,
                        expanded: T,
                        ...N
                    } = e, {
                        enabled: S
                    } = (0, c.useRedesignIconContext)(), g = t;
                    if (!0 === T ? g = _.DOWN : !1 === T && (g = _.RIGHT), S) {
                        let e = {
                            [_.UP]: s.ChevronSmallUpIcon,
                            [_.DOWN]: l.ChevronSmallDownIcon,
                            [_.LEFT]: a.ChevronSmallLeftIcon,
                            [_.RIGHT]: u.ChevronSmallRightIcon
                        } [g];
                        return (0, i.jsx)(e, {
                            ...N,
                            className: h,
                            width: n,
                            height: r,
                            color: f,
                            colorClass: p
                        })
                    }
                    return (0, i.jsx)("svg", {
                        className: o(h, I, g),
                        width: n,
                        height: r,
                        viewBox: "0 0 24 24",
                        ...(0, d.default)(N),
                        children: (0, i.jsx)("path", {
                            className: p,
                            fill: "none",
                            stroke: f,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            f.Directions = _;
            var I = f
        },
        109264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                o = n("733154"),
                l = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: o,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: o,
                            fill: r,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, o.ChatIcon)
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                o = n("505088"),
                l = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: o,
                        backgroundColor: a,
                        ...u
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != a ? (0, i.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: a
                        }) : null, (0, i.jsx)("path", {
                            fill: r,
                            className: o,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, o.CircleXIcon)
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("75196"),
                o = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: o = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: o,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        474571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                o = n("197801"),
                l = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: o,
                        ...a
                    } = e;
                    return 16 === t || 16 === n ? (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: o,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: o,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, o.SettingsIcon)
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                o = n("998460"),
                l = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: o,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, l.default)(a),
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: o,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, o.GiftIcon)
        },
        178837: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                o = n("704822"),
                l = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: o,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: o,
                            d: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                        })
                    })
                }, o.KeyIcon)
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                o = n("202909"),
                l = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        viewBox: o = "0 0 24 24",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: o,
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: r,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, o.NitroWheelIcon)
        },
        987772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                o = n("504318"),
                l = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: o,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: o,
                            fill: r
                        })
                    })
                }, o.PencilIcon)
        },
        682344: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                o = n("305861"),
                l = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 23,
                        color: r = "currentColor",
                        foreground: o,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 20 23",
                        children: (0, i.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, i.jsx)("path", {
                                className: o,
                                fill: r,
                                d: "M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"
                            })
                        })
                    })
                }, o.ShieldUserIcon)
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                o = n("876726"),
                l = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: o,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: o,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: r
                        })
                    })
                }, o.PlayIcon)
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                o = n("424823"),
                l = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: o,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: o,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, o.PlusSmallIcon)
        },
        351825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                o = n("31745"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        className: o,
                        foreground: l
                    } = e;
                    return (0, i.jsx)("svg", {
                        className: o,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, o.CirclePlusIcon)
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                o = n("390300"),
                l = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: o,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: o,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, o.VoiceNormalIcon)
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                o = n("287083"),
                l = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: r = "currentColor",
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: r
                        })
                    })
                }, o.StageIcon)
        },
        486952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                o = n("276825"),
                l = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: r
                        })
                    })
                }, o.CheckmarkSmallIcon)
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return s
                },
                zoomFit: function() {
                    return c
                },
                getRatio: function() {
                    return d
                },
                getCoverRatio: function() {
                    return E
                },
                makeCssUrlString: function() {
                    return _
                },
                getPalette: function() {
                    return I
                },
                getPaletteForAvatar: function() {
                    return h
                },
                readFileAsBase64: function() {
                    return T
                },
                dataUriFileSize: function() {
                    return N
                },
                dataUrlToFile: function() {
                    return S
                },
                isPNGAnimated: function() {
                    return g
                }
            });
            var i = n("627445"),
                r = n.n(i),
                o = n("917351"),
                l = n.n(o),
                a = n("48648"),
                u = n.n(a);

            function s(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r,
                    minWidth: o = 0,
                    minHeight: l = 0
                } = e;
                if (t !== i || n !== r) {
                    let e = t > i ? i / t : 1;
                    t = Math.max(Math.round(t * e), o), n = Math.max(Math.round(n * e), l);
                    let a = n > r ? r / n : 1;
                    t = Math.max(Math.round(t * a), o), n = Math.max(Math.round(n * a), l)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function c(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return s({
                    width: e,
                    height: t,
                    maxWidth: i,
                    maxHeight: n
                })
            }

            function d(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = e, o = 1;
                t > i && (o = i / t), t = Math.round(t * o);
                let l = 1;
                return (n = Math.round(n * o)) > r && (l = r / n), Math.min(o * l, 1)
            }

            function E(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = e;
                return t === n ? 1 : Math.min(Math.max(i / t, r / n), 1)
            }

            function _(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let f = [
                [0, 0, 0]
            ];

            function I(e, t, n) {
                let i = document.createElement("canvas"),
                    r = i.getContext("2d");
                if (null == r) return f;
                let o = i.width = 0 === e.width ? 128 : e.width,
                    l = i.height = 0 === e.height ? 128 : e.height;
                r.drawImage(e, 0, 0, o, l);
                let a = r.getImageData(0, 0, o, l).data,
                    s = function(e, t, n) {
                        let i = [];
                        for (let r = 0, o, l, a, u, s; r < t; r += n) l = e[(o = 4 * r) + 0], a = e[o + 1], u = e[o + 2], (void 0 === (s = e[o + 3]) || s >= 125) && !(l > 250 && a > 250 && u > 250) && i.push([l, a, u]);
                        return i
                    }(a, o * l, n),
                    c = u(s, t);
                return "boolean" == typeof c ? f : c.palette()
            }
            let h = e => p(e),
                p = l.memoize(e => new Promise((t, n) => {
                    let i = new Image;
                    i.crossOrigin = "Anonymous", i.onerror = e => {
                        n(e), i.onerror = i.onload = null, i = null
                    }, i.onload = () => {
                        t(I(i, 5, 10)), i.onerror = i.onload = null, i = null
                    }, i.src = e
                }));

            function T(e) {
                return new Promise((t, n) => {
                    let i = new FileReader;
                    i.readAsDataURL(e), i.onload = () => {
                        r("string" == typeof i.result, "Result must be a string"), t(i.result)
                    }, i.onerror = e => n(e)
                })
            }

            function N(e) {
                let t = e.split(";base64,");
                return r(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function S(e, t, n) {
                let i = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            i = new Uint8Array(t.length);
                        for (var r = 0; r < t.length; r++) i[r] = t.charCodeAt(r);
                        return new Blob([i], {
                            type: n
                        })
                    }(e),
                    r = await i.arrayBuffer();
                return new File([r], t, {
                    type: n
                })
            }
            async function g(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let i = await e.text(),
                    r = i.indexOf("IDAT");
                return !!(r > 0) && -1 !== i.substring(0, r).indexOf("acTL") || !1
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return o
                }
            });
            var i = n("917351"),
                r = n.n(i);
            let o = e => "function" == typeof e ? e() : e;
            r.curry((e, t, n) => o(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var o = n("697218"),
                l = n("615931");
            let a = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, a = e.updateModalProps, r = n("551042").closeModal
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: o,
                    modalProps: l = {},
                    hooks: {
                        onEarlyClose: u
                    } = {}
                } = e;
                if (null == i) {
                    null == u || u();
                    return
                }
                let c = i(f, d, l);

                function d() {
                    null == u || u()
                }

                function E(e) {
                    r(c), n(e)
                }

                function _(e) {
                    r(c), o(e)
                }

                function f(e) {
                    return a(c, f, d, {
                        ...l,
                        isLoading: !0
                    }), s({
                        promiseFn: t,
                        resolve: E,
                        reject: _,
                        code: e,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }

                function I(e) {
                    let {
                        res: t
                    } = e;
                    a(c, f, d, {
                        ...l,
                        error: t.body.message
                    })
                }
            }

            function s(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    code: r,
                    mfaCodeHandler: o = u,
                    isModalOpen: l = !1,
                    ...a
                } = e;
                return t(null != r ? {
                    code: r
                } : {}).then(n, e => {
                    var r, u;
                    if (r = e, u = l, r.body && 60008 === r.body.code || u && 429 === r.status) return o({
                        promiseFn: t,
                        resolve: n,
                        reject: i,
                        res: e,
                        ...a
                    });
                    i(e)
                })
            }

            function c(e, t) {
                var n, i;
                let {
                    checkEnabled: r = null !== (i = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...a
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, l.resolveThunk)(r) ? u : s)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...a
                    })
                })
            }
        },
        829536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                perceptualToAmplitude: function() {
                    return i
                },
                amplitudeToPerceptual: function() {
                    return r
                }
            });

            function i(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
            }

            function r(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                if (0 === e) return 0;
                let i = 20 * Math.log10(e / n);
                return n * (t = i > 0 ? i / 6 + 1 : (50 + i) / 50)
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function i(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return i
                }
            })
        },
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return a
                },
                updateModalProps: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                o = n("920636");
            let l = (e, t, n) => function(r) {
                return (0, i.jsx)(o.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...r
                })
            };

            function a(e, t, n) {
                return (0, r.openModal)(l(e, t, n), {
                    onCloseCallback: t
                })
            }

            function u(e, t, n, i) {
                return (0, r.updateModal)(e, l(t, n, i))
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return a
                }
            });
            var i = n("884691"),
                r = n("446674"),
                o = n("244201"),
                l = n("471671");

            function a() {
                let {
                    windowId: e
                } = i.useContext(o.default);
                return (0, r.useStateFromStores)([l.default], () => l.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("817736"),
                r = n("118810");
            let o = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class l {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let n = (0, i.findDOMNode)(e);
                    (0, r.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = o) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                        e.forEach(e => {
                            let t;
                            if (null != e.isIntersecting) t = e.isIntersecting;
                            else {
                                let {
                                    threshold: n
                                } = this._options;
                                t = null == n ? e.intersectionRatio > 0 : Array.isArray(n) ? n.some(t => e.intersectionRatio > t) : e.intersectionRatio > n
                            }
                            let n = this._nodes.get(e.target);
                            if (null != n) {
                                let e = !1;
                                t ? !this._visibleComponents.has(n) && (this._visibleComponents.add(n), e = !0) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), e = !0), e && n.forceUpdate()
                            }
                        })
                    }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                }
            }
        },
        235855: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("884691"),
                r = n("748820"),
                o = n("157590");
            let l = (0, r.v4)(),
                a = new Map,
                u = new Map;
            class s extends i.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let e = this.getVisibilityObserver();
                        e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(e) {
                    let t = this.getVisibilityObserver(),
                        n = t.isVisible(this);
                    this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
                }
                componentWillUnmount() {
                    this.getVisibilityObserver().unobserve(this)
                }
                getVisibilityObserverId() {
                    let {
                        rootMargin: e,
                        threshold: t
                    } = this.props;
                    return "".concat(this.elementId, " ").concat(e, " ").concat(t)
                }
                getVisibilityObserver() {
                    let e = this.getVisibilityObserverId(),
                        t = u.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return i.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: i
                    } = e;
                    t ? a.has(t) ? this.elementId = a.get(t) || "" : a.set(t, (0, r.v4)()) : this.elementId = l;
                    let s = this.getVisibilityObserverId();
                    !u.has(s) && u.set(s, new o.default({
                        root: t,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            s.defaultProps = {
                active: !0,
                children: i.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var c = s
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VisibilityObserver: function() {
                    return i.default
                },
                VisibilitySensor: function() {
                    return r.default
                }
            }), n("6268");
            var i = n("157590"),
                r = n("235855")
        }
    }
]);
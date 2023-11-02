(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["28406"], {
        516555: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCanvas: function() {
                    return P
                },
                Environment: function() {
                    return h
                },
                SpriteCanvas: function() {
                    return E
                },
                useConfettiCannon: function() {
                    return R
                }
            });
            var r = n("884691"),
                i = n("748820"),
                a = n("414456"),
                o = n.n(a);

            function u(e, t) {
                var n = e.x,
                    r = e.y;
                return n > t.x && n < t.x + t.width && r > t.y && r < t.y + t.height
            }

            function l(e, t) {
                return e * t * t * (t > 0 ? -1 : 1)
            }
            var s = function() {
                    function e(e) {
                        this.id = e.id, this.position = e.position, this.velocity = e.velocity, this.rotation = e.rotation, this.dragCoefficient = e.dragCoefficient, this.size = e.size, this.opacity = e.opacity, this.spriteX = e.spriteX, this.spriteY = e.spriteY, this.spriteWidth = e.spriteWidth, this.spriteHeight = e.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return e.prototype.getNewForces = function(e, t) {
                        var n, r, i, a, o = e.wind * t,
                            u = -e.gravity * t;
                        return {
                            x: o + (n = this.dragCoefficient.x, n * (r = this.velocity.x) * r * (r > 0 ? -1 : 1)),
                            y: u + (i = this.dragCoefficient.y, i * (a = this.velocity.y) * a * (a > 0 ? -1 : 1))
                        }
                    }, e.prototype.update = function(e) {
                        var t = Date.now(),
                            n = (t - this._lastUpdatedAt) / 100;
                        this.rotation.update(n), this.dragCoefficient.update(n);
                        var r = this.getNewForces(e, n),
                            i = r.x,
                            a = r.y;
                        this.velocity.update(n), this.velocity.x += i, this.velocity.y += a, this.position.update(n), this.position.x += this.velocity.x * n, this.position.y += this.velocity.y * n, this.size.update(n), this.opacity.update(n), this._lastUpdatedAt = t
                    }, e.prototype.previewPositionUpdate = function(e, t) {
                        var n = t / 100,
                            r = this.velocity.previewUpdate(n),
                            i = this.getNewForces(e, n),
                            a = i.x,
                            o = i.y;
                        r.x += a, r.y += o;
                        var u = this.position.previewUpdate(n);
                        return u.x += r.x * n, u.y += r.y * n, u
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
                h = function(e) {
                    var t = void 0 === e ? {} : e,
                        n = t.gravity,
                        r = t.wind;
                    this.gravity = -9.8, this.wind = 0, this.gravity = null != n ? n : this.gravity, this.wind = null != r ? r : this.wind
                },
                f = function(e, t) {
                    return (f = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    })(e, t)
                };

            function d(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                f(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var p = function() {
                    return (p = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                },
                v = function(e) {
                    this.value = e
                },
                y = function() {
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
                g = function(e) {
                    function t(t, n, r) {
                        var i = e.call(this, t, n) || this;
                        return i._z = r, i
                    }
                    return d(t, e), t.prototype.update = function(t) {
                        e.prototype.update.call(this, t), this._z.update(t)
                    }, t.prototype.previewUpdate = function(t) {
                        var n = e.prototype.previewUpdate.call(this, t);
                        return p(p({}, n), {
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
                }(y),
                m = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return d(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(v),
                w = function(e) {
                    function t(t, n) {
                        var r = e.call(this, t) || this;
                        return r.addValue = n, r
                    }
                    return d(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(v),
                x = function(e) {
                    function t(t, n, r, i, a, o) {
                        var u = e.call(this, t) || this;
                        u.min = n, u.max = r, u.duration = i;
                        var l = u.value / (u.max - u.min) * u.duration,
                            s = isNaN(l) ? 0 : l;
                        return u.timePassed = s < 0 ? u.duration - s : s, u.directionMultiplier = a, u.easingFunction = o, u
                    }
                    return d(t, e), t.prototype.update = function(e) {
                        var t = this.doUpdate(e),
                            n = t[0],
                            r = t[1],
                            i = t[2];
                        this.value = n, this.directionMultiplier = i, this.timePassed = r
                    }, t.prototype.previewUpdate = function(e) {
                        return this.doUpdate(e)[0]
                    }, t.prototype.doUpdate = function(e) {
                        var t = this.max - this.min,
                            n = this.timePassed + e * this.directionMultiplier,
                            r = Math.min(Math.max(n, 0), this.duration),
                            i = n < 0 || n > this.duration ? -1 * this.directionMultiplier : this.directionMultiplier,
                            a = this.easingFunction(r, this.min, t, this.duration);
                        return [isNaN(a) ? 0 : a, r, i]
                    }, t
                }(v);

            function b(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function C(e) {
                var t = Math.floor(b(0, e.length - 1));
                return [e[t], t]
            }

            function z(e, t) {
                return C([e, t])[0]
            }

            function O(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : e
            }

            function S(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e,
                    z: e
                } : e
            }

            function k(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = O(e.value);
                            return new y(new m(t.x), new m(t.y));
                        case "static-random":
                            var n = O(e.minValue),
                                r = O(e.maxValue);
                            return new y(new m(b(n.x, r.x)), new m(b(n.y, r.y)));
                        case "linear":
                            t = O(e.value);
                            var i = O(e.addValue);
                            return new y(new w(t.x, i.x), new w(t.y, i.y));
                        case "linear-random":
                            n = O(e.minValue), r = O(e.maxValue);
                            var a = O(e.minAddValue),
                                o = O(e.maxAddValue);
                            return new y(new w(b(n.x, r.x), b(a.x, o.x)), new w(b(n.y, r.y), b(a.x, o.x)));
                        case "oscillating":
                            t = O(e.value);
                            var u = O(e.start),
                                l = O(e.final),
                                s = O(e.duration),
                                c = O(e.direction);
                            return new y(new x(t.x, u.x, l.x, s.x, c.x, e.easingFunction), new x(t.y, u.y, l.y, s.x, c.y, e.easingFunction));
                        case "oscillating-random":
                            n = O(e.minValue), r = O(e.maxValue);
                            var h = O(e.minStart),
                                f = O(e.maxStart),
                                d = O(e.minFinal),
                                p = O(e.maxFinal),
                                v = O(e.minDuration),
                                g = O(e.maxDuration),
                                S = O(e.minDirection),
                                k = O(e.maxDirection);
                            return new y(new x(b(n.x, r.x), b(h.x, f.x), b(d.x, p.x), b(v.x, g.x), z(S.x, k.x), C(e.easingFunctions)[0]), new x(b(n.y, r.y), b(h.y, f.y), b(d.y, p.y), b(v.y, g.y), z(S.y, k.y), C(e.easingFunctions)[0]))
                    }
                }(p(p({}, e), {
                    valueType: "Vector2"
                }))
            }
            var P = r.forwardRef(function(e, t) {
                var a = e.className,
                    o = e.environment,
                    l = e.onClick,
                    h = e.onMouseDown,
                    f = e.onMouseMove,
                    d = e.onMouseUp,
                    v = e.onBeforeRender,
                    y = e.onAfterRender,
                    O = function(e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                        }
                        return n
                    }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    P = r.useRef(null),
                    E = r.useRef(new Map),
                    R = r.useRef(null),
                    _ = r.useRef(0),
                    A = r.useRef(0),
                    V = r.useCallback(function() {
                        var e = P.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == v || v(t), E.current.forEach(function(n, r) {
                                    var i = n.confetti,
                                        a = n.spriteCanvas;
                                    i.update(o), i.draw(a, t), i.shouldDestroy(e, o) && E.current.delete(r)
                                }), null == y || y(t), E.current.size > 0 ? R.current = window.requestAnimationFrame(V) : (t.clearRect(0, 0, e.width, e.height), R.current = null);
                                var n = Date.now();
                                0 !== _.current && (A.current = 1e3 / (n - _.current)), _.current = n
                            }
                        }
                    }, [o, y, v]);
                r.useEffect(function() {
                    null != R.current && (window.cancelAnimationFrame(R.current), R.current = window.requestAnimationFrame(V))
                }, [V]);
                var j = r.useCallback(function(e, t) {
                        E.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == R.current && V()
                    }, [V]),
                    F = r.useCallback(function(e, t, n, r, a) {
                        var o, u, l, h, f, d, v, y, O, P, E, R, _, A, V, F = (o = null !== (V = e.id) && void 0 !== V ? V : (0, i.v4)(), u = e, l = n, h = r, f = a, y = k((v = (d = u, p(p({
                            id: o
                        }, c), d))).size), P = (O = function(e, t) {
                            if (null != e) {
                                var n = t.sprites.findIndex(function(t) {
                                    return "string" == typeof e ? t.src === e && t.colorize : t.src === e.src && t.colorize === e.colorize
                                });
                                if (-1 !== n) return [e, n]
                            }
                            return C(t.sprites)
                        }(h, l))[0], E = O[1], R = function(e, t, n) {
                            if (!("string" == typeof(r = e) || r.colorize)) return 0;
                            var r, i = null != t ? n.colors.findIndex(function(e) {
                                return e === t
                            }) : -1;
                            return -1 !== i ? i : Math.floor(b(0, n.colors.length - 1))
                        }(null != h ? h : P, f, l), new s({
                            id: o,
                            position: k(v.position),
                            velocity: k(v.velocity),
                            rotation: (_ = v.rotation, function(e) {
                                switch (e.type) {
                                    case "static":
                                        var t = S(e.value);
                                        return new g(new m(t.x), new m(t.y), new m(t.z));
                                    case "static-random":
                                        var n = S(e.minValue),
                                            r = S(e.maxValue);
                                        return new g(new m(b(n.x, r.x)), new m(b(n.y, r.y)), new m(b(n.z, r.z)));
                                    case "linear":
                                        t = S(e.value);
                                        var i = S(e.addValue);
                                        return new g(new w(t.x, i.x), new w(t.y, i.y), new w(t.z, i.z));
                                    case "linear-random":
                                        n = S(e.minValue), r = S(e.maxValue);
                                        var a = S(e.minAddValue),
                                            o = S(e.maxAddValue);
                                        return new g(new w(b(n.x, r.x), b(a.x, o.x)), new w(b(n.y, r.y), b(a.y, o.y)), new w(b(n.z, r.z), b(a.z, o.z)));
                                    case "oscillating":
                                        t = S(e.value);
                                        var u = S(e.start),
                                            l = S(e.final),
                                            s = S(e.duration),
                                            c = S(e.direction);
                                        return new g(new x(t.x, u.x, l.x, s.x, c.x, e.easingFunction), new x(t.y, u.y, l.y, s.z, c.y, e.easingFunction), new x(t.z, u.z, l.z, s.z, c.z, e.easingFunction));
                                    case "oscillating-random":
                                        n = S(e.minValue), r = S(e.maxValue);
                                        var h = S(e.minStart),
                                            f = S(e.maxStart),
                                            d = S(e.minFinal),
                                            p = S(e.maxFinal),
                                            v = S(e.minDuration),
                                            y = S(e.maxDuration),
                                            O = S(e.minDirection),
                                            k = S(e.maxDirection);
                                        return new g(new x(b(n.x, r.x), b(h.x, f.x), b(d.x, p.x), b(v.x, y.x), z(O.x, k.x), C(e.easingFunctions)[0]), new x(b(n.y, r.y), b(h.y, f.y), b(d.y, p.y), b(v.y, y.y), z(O.y, k.y), C(e.easingFunctions)[0]), new x(b(n.z, r.z), b(h.z, f.z), b(d.z, p.z), b(v.z, y.z), z(O.z, k.z), C(e.easingFunctions)[0]))
                                }
                            }(p(p({}, _), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: k(v.dragCoefficient),
                            size: y,
                            opacity: (A = v.opacity, function(e) {
                                switch (e.type) {
                                    case "static":
                                        return new m(e.value);
                                    case "static-random":
                                        return new m(b(e.minValue, e.maxValue));
                                    case "linear":
                                        return new w(e.value, e.addValue);
                                    case "linear-random":
                                        return new w(b(e.minValue, e.maxValue), b(e.minAddValue, e.maxAddValue));
                                    case "oscillating":
                                        return new x(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                                    case "oscillating-random":
                                        return new x(b(e.minValue, e.maxValue), b(e.minStart, e.maxStart), b(e.minFinal, e.maxFinal), b(e.minDuration, e.maxDuration), z(e.minDirection, e.maxDirection), C(e.easingFunctions)[0])
                                }
                            }(p(p({}, A), {
                                valueType: "number"
                            }))),
                            spriteX: R * l.spriteWidth + 2 * R,
                            spriteY: E * l.spriteHeight + 2 * E,
                            spriteWidth: l.spriteWidth,
                            spriteHeight: l.spriteHeight
                        }));
                        return j(F, t), F
                    }, [j]),
                    I = r.useCallback(function(e) {
                        E.current.delete(e)
                    }, []),
                    M = r.useCallback(function() {
                        return E.current.clear()
                    }, []),
                    D = r.useCallback(function() {
                        return P.current
                    }, []);
                r.useImperativeHandle(t, function() {
                    return {
                        createConfetti: F,
                        addConfetti: j,
                        deleteConfetti: I,
                        clearConfetti: M,
                        getCanvas: D
                    }
                }, [F, j, I, M, D]);
                var U = r.useCallback(function(e, t) {
                        var n, r, i = t.clickHandler,
                            a = t.mouseHandler;
                        if (null != i || null != a) {
                            var l = null === (n = P.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != l) {
                                var s = function(e, t) {
                                    if (null == t) throw Error("element should not be null");
                                    var n = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - n.left,
                                        y: e.clientY - n.top
                                    }
                                }(e, P.current);
                                if (u(s, {
                                        x: l.left,
                                        y: l.top,
                                        width: l.width,
                                        height: l.height
                                    })) {
                                    if (null != a) return a(e);
                                    if (null != i) {
                                        var c = -1e3 / A.current * 2,
                                            h = function(e, t) {
                                                for (var n = 0, r = Array.from(e.values()); n < r.length; n++) {
                                                    var i = r[n];
                                                    if (null != i && t(i)) return i
                                                }
                                                return null
                                            }(E.current, function(e) {
                                                var t = e.confetti,
                                                    n = t.previewPositionUpdate(o, c);
                                                return u(s, {
                                                    x: n.x - t.width / 2,
                                                    y: n.y - t.height / 2,
                                                    width: t.width,
                                                    height: t.height
                                                })
                                            });
                                        i(e, null !== (r = null == h ? void 0 : h.confetti) && void 0 !== r ? r : null)
                                    }
                                }
                            }
                        }
                    }, [o]),
                    H = r.useCallback(function(e) {
                        return U(e, {
                            clickHandler: l
                        })
                    }, [U, l]),
                    N = r.useCallback(function(e) {
                        return U(e, {
                            clickHandler: h
                        })
                    }, [U, h]),
                    T = r.useCallback(function(e) {
                        return U(e, {
                            mouseHandler: f
                        })
                    }, [U, f]),
                    B = r.useCallback(function(e) {
                        return U(e, {
                            mouseHandler: d
                        })
                    }, [U, d]);
                return r.useEffect(function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", H, l), e("mousedown", N, h), e("mousemove", T, f), e("mouseup", B, d),
                        function() {
                            window.removeEventListener("click", H), window.removeEventListener("mousedown", N), window.removeEventListener("mousemove", T), window.removeEventListener("mouseup", T)
                        }
                }, [H, N, T, B, l, h, f, d]), r.useEffect(function() {
                    var e = P.current,
                        t = new ResizeObserver(function() {
                            ! function(e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        r = t.width,
                                        i = t.height;
                                    e.width = r * n.g.devicePixelRatio, e.height = i * n.g.devicePixelRatio
                                }
                            }(P.current)
                        });
                    return null != e && t.observe(e),
                        function() {
                            null != e && t.unobserve(e)
                        }
                }, []), r.createElement("canvas", p({}, O, {
                    className: a,
                    ref: P
                }))
            });
            ! function(e, t) {
                void 0 === t && (t = {});
                var n = t.insertAt;
                if (e && "undefined" != typeof document) {
                    var r = document.head || document.getElementsByTagName("head")[0],
                        i = document.createElement("style");
                    i.type = "text/css", "top" === n && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e))
                }
            }(".SpriteCanvas-module_spriteCanvasHidden__ndzQV {\n  display: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -100%;\n}\n");
            var E = r.forwardRef(function(e, t) {
                var n, a = e.className,
                    u = e.visible,
                    l = void 0 !== u && u,
                    s = e.sprites,
                    c = e.colors,
                    h = e.spriteWidth,
                    f = e.spriteHeight,
                    d = r.useRef(null),
                    p = r.useRef([]),
                    v = r.useRef(!1),
                    y = r.useRef({});
                r.useImperativeHandle(t, function() {
                    return {
                        getCanvas: function() {
                            return d.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: p.current,
                                colors: c,
                                spriteWidth: h,
                                spriteHeight: f
                            }
                        },
                        addReadyListener: function(e) {
                            var t = (0, i.v4)();
                            return y.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete y.current[e]
                        },
                        isReady: v.current
                    }
                }, [c, f, h]);
                var g = r.useCallback(function() {
                        var e = d.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height), p.current.forEach(function(e, n) {
                            var r = function(r, i) {
                                var a = h * i + 2 * i,
                                    o = f * n + 2 * n;
                                if (t.drawImage(e.image, a, o, h, f), null != r) {
                                    for (var u, l, s = t.getImageData(a, o, h, f), c = ("#" === (u = r)[0] && (u = u.slice(1)), {
                                            r: (l = parseInt(u, 16)) >> 16 & 255,
                                            g: l >> 8 & 255,
                                            b: 255 & l
                                        }), d = 0; d < s.data.length; d += 4) s.data[d] = c.r, s.data[d + 1] = c.g, s.data[d + 2] = c.b;
                                    t.putImageData(s, a, o)
                                }
                            };
                            e.colorize ? c.forEach(function(e, t) {
                                return r(e, t)
                            }) : r(null, 0)
                        }))
                    }, [c, f, h]),
                    m = r.useCallback(function() {
                        var e = s.map(function(e) {
                            var t = new Image,
                                n = "string" == typeof e ? e : e.src,
                                r = "string" == typeof e || e.colorize;
                            t.src = n;
                            var i = new Promise(function(e) {
                                t.onload = e
                            });
                            return {
                                colorize: r,
                                image: t,
                                src: n,
                                loadPromise: i
                            }
                        });
                        return Promise.all(e.map(function(e) {
                            return e.loadPromise
                        })).then(function() {
                            p.current = e.map(function(e) {
                                return {
                                    colorize: e.colorize,
                                    image: e.image,
                                    src: e.src
                                }
                            })
                        })
                    }, [s]),
                    w = r.useCallback(function(e) {
                        for (var t in y.current) y.current[t](e)
                    }, []),
                    x = r.useCallback(function() {
                        var e, t, n, r;
                        return e = void 0, t = void 0, n = void 0, r = function() {
                            return function(e, t) {
                                var n, r, i, a, o = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & i[0]) throw i[1];
                                        return i[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return a = {
                                    next: u(0),
                                    throw: u(1),
                                    return: u(2)
                                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                                    return this
                                }), a;

                                function u(u) {
                                    return function(l) {
                                        return function(u) {
                                            if (n) throw TypeError("Generator is already executing.");
                                            for (; a && (a = 0, u[0] && (o = 0)), o;) try {
                                                if (n = 1, r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) return i;
                                                switch (r = 0, i && (u = [2 & u[0], i.value]), u[0]) {
                                                    case 0:
                                                    case 1:
                                                        i = u;
                                                        break;
                                                    case 4:
                                                        return o.label++, {
                                                            value: u[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        o.label++, r = u[1], u = [0];
                                                        continue;
                                                    case 7:
                                                        u = o.ops.pop(), o.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                                            o = 0;
                                                            continue
                                                        }
                                                        if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                                                            o.label = u[1];
                                                            break
                                                        }
                                                        if (6 === u[0] && o.label < i[1]) {
                                                            o.label = i[1], i = u;
                                                            break
                                                        }
                                                        if (i && o.label < i[2]) {
                                                            o.label = i[2], o.ops.push(u);
                                                            break
                                                        }
                                                        i[2] && o.ops.pop(), o.trys.pop();
                                                        continue
                                                }
                                                u = t.call(e, o)
                                            } catch (e) {
                                                u = [6, e], r = 0
                                            } finally {
                                                n = i = 0
                                            }
                                            if (5 & u[0]) throw u[1];
                                            return {
                                                value: u[0] ? u[1] : void 0,
                                                done: !0
                                            }
                                        }([u, l])
                                    }
                                }
                            }(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, m()];
                                    case 1:
                                        return e.sent(), g(), v.current = !0, w(!0), [2]
                                }
                            })
                        }, new(n || (n = Promise))(function(i, a) {
                            function o(e) {
                                try {
                                    l(r.next(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function u(e) {
                                try {
                                    l(r.throw(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function l(e) {
                                var t;
                                e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                                    e(t)
                                })).then(o, u)
                            }
                            l((r = r.apply(e, t || [])).next())
                        })
                    }, [w, m, g]);
                return r.useEffect(function() {
                    x()
                }, [x]), r.useEffect(function() {
                    return function() {
                        return w(!1)
                    }
                }, [w]), r.useEffect(function() {
                    null != d.current && (d.current.width = (h + 2) * Math.max(c.length, 1), d.current.height = (f + 2) * s.length)
                }, [c.length, f, h, s.length]), r.createElement("canvas", {
                    ref: d,
                    className: o(a, ((n = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !l, n))
                })
            });

            function R(e, t) {
                var n, i = r.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
                    a = i[0],
                    o = i[1];
                r.useEffect(function() {
                    var e = null == t ? void 0 : t.addReadyListener(o);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }, [t]);
                var u = r.useCallback(function(n, r) {
                        var i = void 0 === r ? {} : r,
                            a = i.sprite,
                            o = i.color,
                            u = null == t ? void 0 : t.getCreateData(),
                            l = null == t ? void 0 : t.getCanvas();
                        if (null != l && null != u && 0 !== u.sprites.length) return null == e ? void 0 : e.createConfetti(n, l, u, a, o)
                    }, [e, t]),
                    l = r.useCallback(function(e, t, n) {
                        for (var r = [], i = 0; i < t; i++) {
                            var a = u(e, n);
                            a && r.push(a)
                        }
                        return r
                    }, [u]),
                    s = r.useCallback(function(n) {
                        var r = null == t ? void 0 : t.getCanvas();
                        null != r && (null == e || e.addConfetti(n, r))
                    }, [e, t]),
                    c = r.useCallback(function(t) {
                        null == e || e.deleteConfetti(t)
                    }, [e]),
                    h = r.useCallback(function() {
                        return null == e ? void 0 : e.clearConfetti()
                    }, [e]);
                return r.useMemo(function() {
                    return {
                        createConfetti: u,
                        createMultipleConfetti: l,
                        addConfetti: s,
                        clearConfetti: h,
                        deleteConfetti: c,
                        isReady: a && null != t && null != e
                    }
                }, [s, h, e, u, l, c, a, t])
            }
        },
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    r = e.length;
                if (r > n) return !1;
                if (r === n) return e === t;
                e: for (var i = 0, a = 0; i < r; i++) {
                    for (var o = e.charCodeAt(i); a < n;)
                        if (t.charCodeAt(a++) === o) continue e;
                    return !1
                }
                return !0
            }
        },
        136759: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                persist: function() {
                    return c
                }
            });
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var r = Object.defineProperty,
                i = Object.getOwnPropertySymbols,
                a = Object.prototype.hasOwnProperty,
                o = Object.prototype.propertyIsEnumerable,
                u = (e, t, n) => t in e ? r(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                l = (e, t) => {
                    for (var n in t || (t = {})) a.call(t, n) && u(e, n, t[n]);
                    if (i)
                        for (var n of i(t)) o.call(t, n) && u(e, n, t[n]);
                    return e
                };
            let s = e => t => {
                    try {
                        let n = e(t);
                        if (n instanceof Promise) return n;
                        return {
                            then: e => s(e)(n),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => s(t)(e)
                        }
                    }
                },
                c = (e, t) => (n, r, i) => {
                    let a, o, u = l({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: e => e,
                        version: 0,
                        merge: (e, t) => l(l({}, t), e)
                    }, t);
                    (u.blacklist || u.whitelist) && console.warn("The ".concat(u.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let c = !1,
                        h = new Set,
                        f = new Set;
                    try {
                        a = u.getStorage()
                    } catch (e) {}
                    if (!a) return e(function() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(u.name, "', the given storage is currently unavailable.")), n(...t)
                    }, r, i);
                    !a.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(u.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let d = s(u.serialize),
                        p = () => {
                            let e;
                            let t = u.partialize(l({}, r()));
                            u.whitelist && Object.keys(t).forEach(e => {
                                var n;
                                (null == (n = u.whitelist) ? void 0 : n.includes(e)) || delete t[e]
                            }), u.blacklist && u.blacklist.forEach(e => delete t[e]);
                            let n = d({
                                state: t,
                                version: u.version
                            }).then(e => a.setItem(u.name, e)).catch(t => {
                                e = t
                            });
                            if (e) throw e;
                            return n
                        },
                        v = i.setState;
                    i.setState = (e, t) => {
                        v(e, t), p()
                    };
                    let y = e(function() {
                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            n(...t), p()
                        }, r, i),
                        g = () => {
                            var e;
                            if (!a) return;
                            c = !1, h.forEach(e => e(r()));
                            let t = (null == (e = u.onRehydrateStorage) ? void 0 : e.call(u, r())) || void 0;
                            return s(a.getItem.bind(a))(u.name).then(e => {
                                if (e) return u.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === u.version) return e.state;
                                    if (u.migrate) return u.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(o = u.merge(e, null != (t = r()) ? t : y), !0), p()
                            }).then(() => {
                                null == t || t(o, void 0), c = !0, f.forEach(e => e(o))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return i.persist = {
                        setOptions: e => {
                            u = l(l({}, u), e), e.getStorage && (a = e.getStorage())
                        },
                        clearStorage: () => {
                            var e;
                            null == (e = null == a ? void 0 : a.removeItem) || e.call(a, u.name)
                        },
                        rehydrate: () => g(),
                        hasHydrated: () => c,
                        onHydrate: e => (h.add(e), () => {
                            h.delete(e)
                        }),
                        onFinishHydration: e => (f.add(e), () => {
                            f.delete(e)
                        })
                    }, g(), o || y
                }
        },
        506838: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                P: function() {
                    return q
                },
                match: function() {
                    return Q
                }
            });
            let r = Symbol.for("@ts-pattern/matcher"),
                i = Symbol.for("@ts-pattern/isVariadic"),
                a = "@ts-pattern/anonymous-select-key",
                o = e => !!(e && "object" == typeof e),
                u = e => e && !!e[r],
                l = (e, t, n) => {
                    if (u(e)) {
                        let i = e[r](),
                            {
                                matched: a,
                                selections: o
                            } = i.match(t);
                        return a && o && Object.keys(o).forEach(e => n(e, o[e])), a
                    }
                    if (o(e)) {
                        if (!o(t)) return !1;
                        if (Array.isArray(e)) {
                            if (!Array.isArray(t)) return !1;
                            let r = [],
                                a = [],
                                o = [];
                            for (let t of e.keys()) {
                                let n = e[t];
                                u(n) && n[i] ? o.push(n) : o.length ? a.push(n) : r.push(n)
                            }
                            if (o.length) {
                                if (o.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (t.length < r.length + a.length) return !1;
                                let e = t.slice(0, r.length),
                                    i = 0 === a.length ? [] : t.slice(-a.length),
                                    u = t.slice(r.length, 0 === a.length ? 1 / 0 : -a.length);
                                return r.every((t, r) => l(t, e[r], n)) && a.every((e, t) => l(e, i[t], n)) && (0 === o.length || l(o[0], u, n))
                            }
                            return e.length === t.length && e.every((e, r) => l(e, t[r], n))
                        }
                        return Object.keys(e).every(i => {
                            let a = e[i];
                            return (i in t || u(a) && "optional" === a[r]().matcherType) && l(a, t[i], n)
                        })
                    }
                    return Object.is(t, e)
                },
                s = e => {
                    var t, n, i;
                    return o(e) ? u(e) ? null != (t = null == (n = (i = e[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? t : [] : Array.isArray(e) ? c(e, s) : c(Object.values(e), s) : []
                },
                c = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);

            function h(e) {
                return Object.assign(e, {
                    optional: () => f(e),
                    and: t => v(e, t),
                    or: t => y(e, t),
                    select: t => void 0 === t ? m(e) : m(t, e)
                })
            }

            function f(e) {
                return h({
                    [r]: () => ({
                        match: t => {
                            let n = {},
                                r = (e, t) => {
                                    n[e] = t
                                };
                            return void 0 === t ? (s(e).forEach(e => r(e, void 0)), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: l(e, t, r),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => s(e),
                        matcherType: "optional"
                    })
                })
            }
            let d = (e, t) => {
                    for (let n of e)
                        if (!t(n)) return !1;
                    return !0
                },
                p = (e, t) => {
                    for (let [n, r] of e.entries())
                        if (!t(r, n)) return !1;
                    return !0
                };

            function v() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return h({
                    [r]: () => ({
                        match: e => {
                            let n = {},
                                r = (e, t) => {
                                    n[e] = t
                                };
                            return {
                                matched: t.every(t => l(t, e, r)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => c(t, s),
                        matcherType: "and"
                    })
                })
            }

            function y() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return h({
                    [r]: () => ({
                        match: e => {
                            let n = {},
                                r = (e, t) => {
                                    n[e] = t
                                };
                            return c(t, s).forEach(e => r(e, void 0)), {
                                matched: t.some(t => l(t, e, r)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => c(t, s),
                        matcherType: "or"
                    })
                })
            }

            function g(e) {
                return {
                    [r]: () => ({
                        match: t => ({
                            matched: !!e(t)
                        })
                    })
                }
            }

            function m() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let i = "string" == typeof t[0] ? t[0] : void 0,
                    o = 2 === t.length ? t[1] : "string" == typeof t[0] ? void 0 : t[0];
                return h({
                    [r]: () => ({
                        match: e => {
                            let t = {
                                [null != i ? i : a]: e
                            };
                            return {
                                matched: void 0 === o || l(o, e, (e, n) => {
                                    t[e] = n
                                }),
                                selections: t
                            }
                        },
                        getSelectionKeys: () => [null != i ? i : a].concat(void 0 === o ? [] : s(o))
                    })
                })
            }

            function w(e) {
                return "number" == typeof e
            }

            function x(e) {
                return "string" == typeof e
            }

            function b(e) {
                return "bigint" == typeof e
            }
            let C = h(g(function(e) {
                    return !0
                })),
                z = e => Object.assign(h(e), {
                    startsWith: t => z(v(e, g(e => x(e) && e.startsWith(t)))),
                    endsWith: t => z(v(e, g(e => x(e) && e.endsWith(t)))),
                    minLength: t => {
                        var n;
                        return z(v(e, (n = t, g(e => x(e) && e.length >= n))))
                    },
                    maxLength: t => {
                        var n;
                        return z(v(e, (n = t, g(e => x(e) && e.length <= n))))
                    },
                    includes: t => z(v(e, g(e => x(e) && e.includes(t)))),
                    regex: t => z(v(e, g(e => x(e) && !!e.match(t))))
                }),
                O = z(g(x)),
                S = (e, t) => g(n => w(n) && e <= n && t >= n),
                k = e => g(t => w(t) && t < e),
                P = e => g(t => w(t) && t > e),
                E = e => g(t => w(t) && t <= e),
                R = e => g(t => w(t) && t >= e),
                _ = () => g(e => w(e) && Number.isInteger(e)),
                A = () => g(e => w(e) && Number.isFinite(e)),
                V = () => g(e => w(e) && e > 0),
                j = () => g(e => w(e) && e < 0),
                F = e => Object.assign(h(e), {
                    between: (t, n) => F(v(e, S(t, n))),
                    lt: t => F(v(e, k(t))),
                    gt: t => F(v(e, P(t))),
                    lte: t => F(v(e, E(t))),
                    gte: t => F(v(e, R(t))),
                    int: () => F(v(e, _())),
                    finite: () => F(v(e, A())),
                    positive: () => F(v(e, V())),
                    negative: () => F(v(e, j()))
                }),
                I = F(g(w)),
                M = (e, t) => g(n => b(n) && e <= n && t >= n),
                D = e => g(t => b(t) && t < e),
                U = e => g(t => b(t) && t > e),
                H = e => g(t => b(t) && t <= e),
                N = e => g(t => b(t) && t >= e),
                T = () => g(e => b(e) && e > 0),
                B = () => g(e => b(e) && e < 0),
                W = e => Object.assign(h(e), {
                    between: (t, n) => W(v(e, M(t, n))),
                    lt: t => W(v(e, D(t))),
                    gt: t => W(v(e, U(t))),
                    lte: t => W(v(e, H(t))),
                    gte: t => W(v(e, N(t))),
                    positive: () => W(v(e, T())),
                    negative: () => W(v(e, B()))
                }),
                L = W(g(b)),
                K = h(g(function(e) {
                    return "boolean" == typeof e
                })),
                X = h(g(function(e) {
                    return "symbol" == typeof e
                })),
                Y = h(g(function(e) {
                    return null == e
                }));
            var q = {
                __proto__: null,
                matcher: r,
                optional: f,
                array: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function e(t) {
                        var n;
                        return Object.assign((n = t, Object.assign(n, {
                            *[Symbol.iterator]() {
                                yield Object.assign(n, {
                                    [i]: !0
                                })
                            }
                        })), {
                            optional: () => e(f(t)),
                            select: n => e(void 0 === n ? m(t) : m(n, t))
                        })
                    }({
                        [r]: () => ({
                            match: e => {
                                if (!Array.isArray(e)) return {
                                    matched: !1
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                let n = t[0],
                                    r = {};
                                if (0 === e.length) return s(n).forEach(e => {
                                    r[e] = []
                                }), {
                                    matched: !0,
                                    selections: r
                                };
                                let i = (e, t) => {
                                    r[e] = (r[e] || []).concat([t])
                                };
                                return {
                                    matched: e.every(e => l(n, e, i)),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : s(t[0])
                        })
                    })
                },
                set: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return h({
                        [r]: () => ({
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
                                let r = (e, t) => {
                                        n[e] = (n[e] || []).concat([t])
                                    },
                                    i = t[0];
                                return {
                                    matched: d(e, e => l(i, e, r)),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : s(t[0])
                        })
                    })
                },
                map: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return h({
                        [r]: () => ({
                            match: e => {
                                var n;
                                if (!(e instanceof Map)) return {
                                    matched: !1
                                };
                                let r = {};
                                if (0 === e.size) return {
                                    matched: !0,
                                    selections: r
                                };
                                let i = (e, t) => {
                                    r[e] = (r[e] || []).concat([t])
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                if (1 === t.length) throw Error("`P.map` wasn't given enough arguments. Expected (key, value), received ".concat(null == (n = t[0]) ? void 0 : n.toString()));
                                let [a, o] = t;
                                return {
                                    matched: p(e, (e, t) => {
                                        let n = l(a, t, i),
                                            r = l(o, e, i);
                                        return n && r
                                    }),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : [...s(t[0]), ...s(t[1])]
                        })
                    })
                },
                intersection: v,
                union: y,
                not: function(e) {
                    return h({
                        [r]: () => ({
                            match: t => ({
                                matched: !l(e, t, () => {})
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: g,
                select: m,
                any: C,
                _: C,
                string: O,
                between: S,
                lt: k,
                gt: P,
                lte: E,
                gte: R,
                int: _,
                finite: A,
                positive: V,
                negative: j,
                number: I,
                betweenBigInt: M,
                ltBigInt: D,
                gtBigInt: U,
                lteBigInt: H,
                gteBigInt: N,
                positiveBigInt: T,
                negativeBigInt: B,
                bigint: L,
                boolean: K,
                symbol: X,
                nullish: Y,
                instanceOf: function(e) {
                    var t;
                    return h(g((t = e, e => e instanceof t)))
                },
                shape: function(e) {
                    return h(g(function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        if (1 === t.length) {
                            let [e] = t;
                            return t => l(e, t, () => {})
                        }
                        if (2 === t.length) {
                            let [e, n] = t;
                            return l(e, n, () => {})
                        }
                        throw Error("isMatching wasn't given the right number of arguments: expected 1 or 2, received ".concat(t.length, "."))
                    }(e)))
                }
            };
            let J = {
                matched: !1,
                value: void 0
            };

            function Q(e) {
                return new G(e, J)
            }
            class G {
                with() {
                    let e;
                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    if (this.state.matched) return this;
                    let i = n[n.length - 1],
                        o = [n[0]];
                    3 === n.length && "function" == typeof n[1] ? (o.push(n[0]), e = n[1]) : n.length > 2 && o.push(...n.slice(1, n.length - 1));
                    let u = !1,
                        s = {},
                        c = (e, t) => {
                            u = !0, s[e] = t
                        },
                        h = o.some(e => l(e, this.input, c)) && (!e || e(this.input)) ? {
                            matched: !0,
                            value: i(u ? a in s ? s[a] : s : this.input, this.input)
                        } : J;
                    return new G(this.input, h)
                }
                when(e, t) {
                    if (this.state.matched) return this;
                    let n = !!e(this.input);
                    return new G(this.input, n ? {
                        matched: !0,
                        value: t(this.input, this.input)
                    } : J)
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
        }
    }
]);
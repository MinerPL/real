(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["51681"], {
        516555: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCanvas: function() {
                    return E
                },
                Environment: function() {
                    return f
                },
                SpriteCanvas: function() {
                    return O
                },
                useConfettiCannon: function() {
                    return _
                }
            });
            var i = n("884691"),
                r = n("748820"),
                a = n("414456"),
                u = n.n(a);

            function o(e, t) {
                var n = e.x,
                    i = e.y;
                return n > t.x && n < t.x + t.width && i > t.y && i < t.y + t.height
            }

            function l(e, t) {
                return e * t * t * (t > 0 ? -1 : 1)
            }
            var s = function() {
                    function e(e) {
                        this.id = e.id, this.position = e.position, this.velocity = e.velocity, this.rotation = e.rotation, this.dragCoefficient = e.dragCoefficient, this.size = e.size, this.opacity = e.opacity, this.spriteX = e.spriteX, this.spriteY = e.spriteY, this.spriteWidth = e.spriteWidth, this.spriteHeight = e.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return e.prototype.getNewForces = function(e, t) {
                        var n, i, r, a, u = e.wind * t,
                            o = -e.gravity * t;
                        return {
                            x: u + (n = this.dragCoefficient.x, n * (i = this.velocity.x) * i * (i > 0 ? -1 : 1)),
                            y: o + (r = this.dragCoefficient.y, r * (a = this.velocity.y) * a * (a > 0 ? -1 : 1))
                        }
                    }, e.prototype.update = function(e) {
                        var t = Date.now(),
                            n = (t - this._lastUpdatedAt) / 100;
                        this.rotation.update(n), this.dragCoefficient.update(n);
                        var i = this.getNewForces(e, n),
                            r = i.x,
                            a = i.y;
                        this.velocity.update(n), this.velocity.x += r, this.velocity.y += a, this.position.update(n), this.position.x += this.velocity.x * n, this.position.y += this.velocity.y * n, this.size.update(n), this.opacity.update(n), this._lastUpdatedAt = t
                    }, e.prototype.previewPositionUpdate = function(e, t) {
                        var n = t / 100,
                            i = this.velocity.previewUpdate(n),
                            r = this.getNewForces(e, n),
                            a = r.x,
                            u = r.y;
                        i.x += a, i.y += u;
                        var o = this.position.previewUpdate(n);
                        return o.x += i.x * n, o.y += i.y * n, o
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
                f = function(e) {
                    var t = void 0 === e ? {} : e,
                        n = t.gravity,
                        i = t.wind;
                    this.gravity = -9.8, this.wind = 0, this.gravity = null != n ? n : this.gravity, this.wind = null != i ? i : this.wind
                },
                d = function(e, t) {
                    return (d = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    })(e, t)
                };

            function h(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                d(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var p = function() {
                    return (p = Object.assign || function(e) {
                        for (var t, n = 1, i = arguments.length; n < i; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
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
                m = function(e) {
                    function t(t, n, i) {
                        var r = e.call(this, t, n) || this;
                        return r._z = i, r
                    }
                    return h(t, e), t.prototype.update = function(t) {
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
                w = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return h(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(v),
                g = function(e) {
                    function t(t, n) {
                        var i = e.call(this, t) || this;
                        return i.addValue = n, i
                    }
                    return h(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(v),
                x = function(e) {
                    function t(t, n, i, r, a, u) {
                        var o = e.call(this, t) || this;
                        o.min = n, o.max = i, o.duration = r;
                        var l = o.value / (o.max - o.min) * o.duration,
                            s = isNaN(l) ? 0 : l;
                        return o.timePassed = s < 0 ? o.duration - s : s, o.directionMultiplier = a, o.easingFunction = u, o
                    }
                    return h(t, e), t.prototype.update = function(e) {
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
                            a = this.easingFunction(i, this.min, t, this.duration);
                        return [isNaN(a) ? 0 : a, i, r]
                    }, t
                }(v);

            function b(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function C(e) {
                var t = Math.floor(b(0, e.length - 1));
                return [e[t], t]
            }

            function P(e, t) {
                return C([e, t])[0]
            }

            function k(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : e
            }

            function z(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e,
                    z: e
                } : e
            }

            function S(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = k(e.value);
                            return new y(new w(t.x), new w(t.y));
                        case "static-random":
                            var n = k(e.minValue),
                                i = k(e.maxValue);
                            return new y(new w(b(n.x, i.x)), new w(b(n.y, i.y)));
                        case "linear":
                            t = k(e.value);
                            var r = k(e.addValue);
                            return new y(new g(t.x, r.x), new g(t.y, r.y));
                        case "linear-random":
                            n = k(e.minValue), i = k(e.maxValue);
                            var a = k(e.minAddValue),
                                u = k(e.maxAddValue);
                            return new y(new g(b(n.x, i.x), b(a.x, u.x)), new g(b(n.y, i.y), b(a.x, u.x)));
                        case "oscillating":
                            t = k(e.value);
                            var o = k(e.start),
                                l = k(e.final),
                                s = k(e.duration),
                                c = k(e.direction);
                            return new y(new x(t.x, o.x, l.x, s.x, c.x, e.easingFunction), new x(t.y, o.y, l.y, s.x, c.y, e.easingFunction));
                        case "oscillating-random":
                            n = k(e.minValue), i = k(e.maxValue);
                            var f = k(e.minStart),
                                d = k(e.maxStart),
                                h = k(e.minFinal),
                                p = k(e.maxFinal),
                                v = k(e.minDuration),
                                m = k(e.maxDuration),
                                z = k(e.minDirection),
                                S = k(e.maxDirection);
                            return new y(new x(b(n.x, i.x), b(f.x, d.x), b(h.x, p.x), b(v.x, m.x), P(z.x, S.x), C(e.easingFunctions)[0]), new x(b(n.y, i.y), b(f.y, d.y), b(h.y, p.y), b(v.y, m.y), P(z.y, S.y), C(e.easingFunctions)[0]))
                    }
                }(p(p({}, e), {
                    valueType: "Vector2"
                }))
            }
            var E = i.forwardRef(function(e, t) {
                var a = e.className,
                    u = e.environment,
                    l = e.onClick,
                    f = e.onMouseDown,
                    d = e.onMouseMove,
                    h = e.onMouseUp,
                    v = e.onBeforeRender,
                    y = e.onAfterRender,
                    k = function(e, t) {
                        var n = {};
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (n[i] = e[i]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) 0 > t.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                        }
                        return n
                    }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    E = i.useRef(null),
                    O = i.useRef(new Map),
                    _ = i.useRef(null),
                    D = i.useRef(0),
                    R = i.useRef(0),
                    F = i.useCallback(function() {
                        var e = E.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == v || v(t), O.current.forEach(function(n, i) {
                                    var r = n.confetti,
                                        a = n.spriteCanvas;
                                    r.update(u), r.draw(a, t), r.shouldDestroy(e, u) && O.current.delete(i)
                                }), null == y || y(t), O.current.size > 0 ? _.current = window.requestAnimationFrame(F) : (t.clearRect(0, 0, e.width, e.height), _.current = null);
                                var n = Date.now();
                                0 !== D.current && (R.current = 1e3 / (n - D.current)), D.current = n
                            }
                        }
                    }, [u, y, v]);
                i.useEffect(function() {
                    null != _.current && (window.cancelAnimationFrame(_.current), _.current = window.requestAnimationFrame(F))
                }, [F]);
                var V = i.useCallback(function(e, t) {
                        O.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == _.current && F()
                    }, [F]),
                    I = i.useCallback(function(e, t, n, i, a) {
                        var u, o, l, f, d, h, v, y, k, E, O, _, D, R, F, I = (u = null !== (F = e.id) && void 0 !== F ? F : (0, r.v4)(), o = e, l = n, f = i, d = a, y = S((v = (h = o, p(p({
                            id: u
                        }, c), h))).size), E = (k = function(e, t) {
                            if (null != e) {
                                var n = t.sprites.findIndex(function(t) {
                                    return "string" == typeof e ? t.src === e && t.colorize : t.src === e.src && t.colorize === e.colorize
                                });
                                if (-1 !== n) return [e, n]
                            }
                            return C(t.sprites)
                        }(f, l))[0], O = k[1], _ = function(e, t, n) {
                            if (!("string" == typeof(i = e) || i.colorize)) return 0;
                            var i, r = null != t ? n.colors.findIndex(function(e) {
                                return e === t
                            }) : -1;
                            return -1 !== r ? r : Math.floor(b(0, n.colors.length - 1))
                        }(null != f ? f : E, d, l), new s({
                            id: u,
                            position: S(v.position),
                            velocity: S(v.velocity),
                            rotation: (D = v.rotation, function(e) {
                                switch (e.type) {
                                    case "static":
                                        var t = z(e.value);
                                        return new m(new w(t.x), new w(t.y), new w(t.z));
                                    case "static-random":
                                        var n = z(e.minValue),
                                            i = z(e.maxValue);
                                        return new m(new w(b(n.x, i.x)), new w(b(n.y, i.y)), new w(b(n.z, i.z)));
                                    case "linear":
                                        t = z(e.value);
                                        var r = z(e.addValue);
                                        return new m(new g(t.x, r.x), new g(t.y, r.y), new g(t.z, r.z));
                                    case "linear-random":
                                        n = z(e.minValue), i = z(e.maxValue);
                                        var a = z(e.minAddValue),
                                            u = z(e.maxAddValue);
                                        return new m(new g(b(n.x, i.x), b(a.x, u.x)), new g(b(n.y, i.y), b(a.y, u.y)), new g(b(n.z, i.z), b(a.z, u.z)));
                                    case "oscillating":
                                        t = z(e.value);
                                        var o = z(e.start),
                                            l = z(e.final),
                                            s = z(e.duration),
                                            c = z(e.direction);
                                        return new m(new x(t.x, o.x, l.x, s.x, c.x, e.easingFunction), new x(t.y, o.y, l.y, s.z, c.y, e.easingFunction), new x(t.z, o.z, l.z, s.z, c.z, e.easingFunction));
                                    case "oscillating-random":
                                        n = z(e.minValue), i = z(e.maxValue);
                                        var f = z(e.minStart),
                                            d = z(e.maxStart),
                                            h = z(e.minFinal),
                                            p = z(e.maxFinal),
                                            v = z(e.minDuration),
                                            y = z(e.maxDuration),
                                            k = z(e.minDirection),
                                            S = z(e.maxDirection);
                                        return new m(new x(b(n.x, i.x), b(f.x, d.x), b(h.x, p.x), b(v.x, y.x), P(k.x, S.x), C(e.easingFunctions)[0]), new x(b(n.y, i.y), b(f.y, d.y), b(h.y, p.y), b(v.y, y.y), P(k.y, S.y), C(e.easingFunctions)[0]), new x(b(n.z, i.z), b(f.z, d.z), b(h.z, p.z), b(v.z, y.z), P(k.z, S.z), C(e.easingFunctions)[0]))
                                }
                            }(p(p({}, D), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: S(v.dragCoefficient),
                            size: y,
                            opacity: (R = v.opacity, function(e) {
                                switch (e.type) {
                                    case "static":
                                        return new w(e.value);
                                    case "static-random":
                                        return new w(b(e.minValue, e.maxValue));
                                    case "linear":
                                        return new g(e.value, e.addValue);
                                    case "linear-random":
                                        return new g(b(e.minValue, e.maxValue), b(e.minAddValue, e.maxAddValue));
                                    case "oscillating":
                                        return new x(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                                    case "oscillating-random":
                                        return new x(b(e.minValue, e.maxValue), b(e.minStart, e.maxStart), b(e.minFinal, e.maxFinal), b(e.minDuration, e.maxDuration), P(e.minDirection, e.maxDirection), C(e.easingFunctions)[0])
                                }
                            }(p(p({}, R), {
                                valueType: "number"
                            }))),
                            spriteX: _ * l.spriteWidth + 2 * _,
                            spriteY: O * l.spriteHeight + 2 * O,
                            spriteWidth: l.spriteWidth,
                            spriteHeight: l.spriteHeight
                        }));
                        return V(I, t), I
                    }, [V]),
                    M = i.useCallback(function(e) {
                        O.current.delete(e)
                    }, []),
                    A = i.useCallback(function() {
                        return O.current.clear()
                    }, []),
                    U = i.useCallback(function() {
                        return E.current
                    }, []);
                i.useImperativeHandle(t, function() {
                    return {
                        createConfetti: I,
                        addConfetti: V,
                        deleteConfetti: M,
                        clearConfetti: A,
                        getCanvas: U
                    }
                }, [I, V, M, A, U]);
                var L = i.useCallback(function(e, t) {
                        var n, i, r = t.clickHandler,
                            a = t.mouseHandler;
                        if (null != r || null != a) {
                            var l = null === (n = E.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != l) {
                                var s = function(e, t) {
                                    if (null == t) throw Error("element should not be null");
                                    var n = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - n.left,
                                        y: e.clientY - n.top
                                    }
                                }(e, E.current);
                                if (o(s, {
                                        x: l.left,
                                        y: l.top,
                                        width: l.width,
                                        height: l.height
                                    })) {
                                    if (null != a) return a(e);
                                    if (null != r) {
                                        var c = -1e3 / R.current * 2,
                                            f = function(e, t) {
                                                for (var n = 0, i = Array.from(e.values()); n < i.length; n++) {
                                                    var r = i[n];
                                                    if (null != r && t(r)) return r
                                                }
                                                return null
                                            }(O.current, function(e) {
                                                var t = e.confetti,
                                                    n = t.previewPositionUpdate(u, c);
                                                return o(s, {
                                                    x: n.x - t.width / 2,
                                                    y: n.y - t.height / 2,
                                                    width: t.width,
                                                    height: t.height
                                                })
                                            });
                                        r(e, null !== (i = null == f ? void 0 : f.confetti) && void 0 !== i ? i : null)
                                    }
                                }
                            }
                        }
                    }, [u]),
                    H = i.useCallback(function(e) {
                        return L(e, {
                            clickHandler: l
                        })
                    }, [L, l]),
                    N = i.useCallback(function(e) {
                        return L(e, {
                            clickHandler: f
                        })
                    }, [L, f]),
                    G = i.useCallback(function(e) {
                        return L(e, {
                            mouseHandler: d
                        })
                    }, [L, d]),
                    T = i.useCallback(function(e) {
                        return L(e, {
                            mouseHandler: h
                        })
                    }, [L, h]);
                return i.useEffect(function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", H, l), e("mousedown", N, f), e("mousemove", G, d), e("mouseup", T, h),
                        function() {
                            window.removeEventListener("click", H), window.removeEventListener("mousedown", N), window.removeEventListener("mousemove", G), window.removeEventListener("mouseup", G)
                        }
                }, [H, N, G, T, l, f, d, h]), i.useEffect(function() {
                    var e = E.current,
                        t = new ResizeObserver(function() {
                            ! function(e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        i = t.width,
                                        r = t.height;
                                    e.width = i * n.g.devicePixelRatio, e.height = r * n.g.devicePixelRatio
                                }
                            }(E.current)
                        });
                    return null != e && t.observe(e),
                        function() {
                            null != e && t.unobserve(e)
                        }
                }, []), i.createElement("canvas", p({}, k, {
                    className: a,
                    ref: E
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
            var O = i.forwardRef(function(e, t) {
                var n, a = e.className,
                    o = e.visible,
                    l = void 0 !== o && o,
                    s = e.sprites,
                    c = e.colors,
                    f = e.spriteWidth,
                    d = e.spriteHeight,
                    h = i.useRef(null),
                    p = i.useRef([]),
                    v = i.useRef(!1),
                    y = i.useRef({});
                i.useImperativeHandle(t, function() {
                    return {
                        getCanvas: function() {
                            return h.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: p.current,
                                colors: c,
                                spriteWidth: f,
                                spriteHeight: d
                            }
                        },
                        addReadyListener: function(e) {
                            var t = (0, r.v4)();
                            return y.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete y.current[e]
                        },
                        isReady: v.current
                    }
                }, [c, d, f]);
                var m = i.useCallback(function() {
                        var e = h.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height), p.current.forEach(function(e, n) {
                            var i = function(i, r) {
                                var a = f * r + 2 * r,
                                    u = d * n + 2 * n;
                                if (t.drawImage(e.image, a, u, f, d), null != i) {
                                    for (var o, l, s = t.getImageData(a, u, f, d), c = ("#" === (o = i)[0] && (o = o.slice(1)), {
                                            r: (l = parseInt(o, 16)) >> 16 & 255,
                                            g: l >> 8 & 255,
                                            b: 255 & l
                                        }), h = 0; h < s.data.length; h += 4) s.data[h] = c.r, s.data[h + 1] = c.g, s.data[h + 2] = c.b;
                                    t.putImageData(s, a, u)
                                }
                            };
                            e.colorize ? c.forEach(function(e, t) {
                                return i(e, t)
                            }) : i(null, 0)
                        }))
                    }, [c, d, f]),
                    w = i.useCallback(function() {
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
                            p.current = e.map(function(e) {
                                return {
                                    colorize: e.colorize,
                                    image: e.image,
                                    src: e.src
                                }
                            })
                        })
                    }, [s]),
                    g = i.useCallback(function(e) {
                        for (var t in y.current) y.current[t](e)
                    }, []),
                    x = i.useCallback(function() {
                        var e, t, n, i;
                        return e = void 0, t = void 0, n = void 0, i = function() {
                            return function(e, t) {
                                var n, i, r, a, u = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & r[0]) throw r[1];
                                        return r[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return a = {
                                    next: o(0),
                                    throw: o(1),
                                    return: o(2)
                                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                                    return this
                                }), a;

                                function o(o) {
                                    return function(l) {
                                        return function(o) {
                                            if (n) throw TypeError("Generator is already executing.");
                                            for (; a && (a = 0, o[0] && (u = 0)), u;) try {
                                                if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                                                switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                                    case 0:
                                                    case 1:
                                                        r = o;
                                                        break;
                                                    case 4:
                                                        return u.label++, {
                                                            value: o[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        u.label++, i = o[1], o = [0];
                                                        continue;
                                                    case 7:
                                                        o = u.ops.pop(), u.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(r = (r = u.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                            u = 0;
                                                            continue
                                                        }
                                                        if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                            u.label = o[1];
                                                            break
                                                        }
                                                        if (6 === o[0] && u.label < r[1]) {
                                                            u.label = r[1], r = o;
                                                            break
                                                        }
                                                        if (r && u.label < r[2]) {
                                                            u.label = r[2], u.ops.push(o);
                                                            break
                                                        }
                                                        r[2] && u.ops.pop(), u.trys.pop();
                                                        continue
                                                }
                                                o = t.call(e, u)
                                            } catch (e) {
                                                o = [6, e], i = 0
                                            } finally {
                                                n = r = 0
                                            }
                                            if (5 & o[0]) throw o[1];
                                            return {
                                                value: o[0] ? o[1] : void 0,
                                                done: !0
                                            }
                                        }([o, l])
                                    }
                                }
                            }(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, w()];
                                    case 1:
                                        return e.sent(), m(), v.current = !0, g(!0), [2]
                                }
                            })
                        }, new(n || (n = Promise))(function(r, a) {
                            function u(e) {
                                try {
                                    l(i.next(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function o(e) {
                                try {
                                    l(i.throw(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function l(e) {
                                var t;
                                e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                                    e(t)
                                })).then(u, o)
                            }
                            l((i = i.apply(e, t || [])).next())
                        })
                    }, [g, w, m]);
                return i.useEffect(function() {
                    x()
                }, [x]), i.useEffect(function() {
                    return function() {
                        return g(!1)
                    }
                }, [g]), i.useEffect(function() {
                    null != h.current && (h.current.width = (f + 2) * Math.max(c.length, 1), h.current.height = (d + 2) * s.length)
                }, [c.length, d, f, s.length]), i.createElement("canvas", {
                    ref: h,
                    className: u(a, ((n = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !l, n))
                })
            });

            function _(e, t) {
                var n, r = i.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
                    a = r[0],
                    u = r[1];
                i.useEffect(function() {
                    var e = null == t ? void 0 : t.addReadyListener(u);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }, [t]);
                var o = i.useCallback(function(n, i) {
                        var r = void 0 === i ? {} : i,
                            a = r.sprite,
                            u = r.color,
                            o = null == t ? void 0 : t.getCreateData(),
                            l = null == t ? void 0 : t.getCanvas();
                        if (null != l && null != o && 0 !== o.sprites.length) return null == e ? void 0 : e.createConfetti(n, l, o, a, u)
                    }, [e, t]),
                    l = i.useCallback(function(e, t, n) {
                        for (var i = [], r = 0; r < t; r++) {
                            var a = o(e, n);
                            a && i.push(a)
                        }
                        return i
                    }, [o]),
                    s = i.useCallback(function(n) {
                        var i = null == t ? void 0 : t.getCanvas();
                        null != i && (null == e || e.addConfetti(n, i))
                    }, [e, t]),
                    c = i.useCallback(function(t) {
                        null == e || e.deleteConfetti(t)
                    }, [e]),
                    f = i.useCallback(function() {
                        return null == e ? void 0 : e.clearConfetti()
                    }, [e]);
                return i.useMemo(function() {
                    return {
                        createConfetti: o,
                        createMultipleConfetti: l,
                        addConfetti: s,
                        clearConfetti: f,
                        deleteConfetti: c,
                        isReady: a && null != t && null != e
                    }
                }, [s, f, e, o, l, c, a, t])
            }
        },
        452113: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("850068"),
                a = n("524503"),
                u = n("393414"),
                o = n("162771"),
                l = n("642906"),
                s = n("385179"),
                c = n("49111");

            function f(e) {
                let {
                    onClose: t,
                    initialPlanId: n,
                    analyticsObject: f,
                    analyticsLocation: d,
                    analyticsLocations: h,
                    analyticsSubscriptionType: p,
                    renderHeader: v,
                    planGroup: y,
                    reviewWarningMessage: m,
                    applicationId: w,
                    guildId: g,
                    onComplete: x,
                    forcesTransitionToGuild: b,
                    skuId: C,
                    ...P
                } = e, {
                    subscriptionMetadataRequest: k
                } = (0, l.usePaymentContext)();
                return (0, i.jsx)(s.PaymentModal, {
                    ...P,
                    initialPlanId: n,
                    skuId: C,
                    onClose: e => {
                        t();
                        let n = null == k ? void 0 : k.guild_id;
                        e && null != n && (r.fetchSubscriptions(), (0, a.fetchEntitlementsForGuild)(n), null == x || x(), null != n && (b || o.default.getGuildId() !== n) && (0, u.transitionTo)(c.Routes.CHANNEL(n)))
                    },
                    analyticsLocations: h,
                    analyticsObject: f,
                    analyticsLocation: d,
                    analyticsSubscriptionType: p,
                    renderHeader: v,
                    planGroup: y,
                    reviewWarningMessage: m,
                    applicationId: w,
                    guildId: g,
                    forceNewPaymentModal: !0
                })
            }
        },
        210721: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnimationState: function() {
                    return r
                },
                getGiftAnimationData: function() {
                    return h
                },
                sendGiftMessage: function() {
                    return p
                }
            });
            var i, r, a = n("627445"),
                u = n.n(a),
                o = n("450911"),
                l = n("819689"),
                s = n("884351"),
                c = n("42203"),
                f = n("659632"),
                d = n("78345");
            (i = r || (r = {})).ACTION = "action", i.LOOP = "loop", i.IDLE = "idle";
            let h = (e, t) => {
                    let i;
                    switch (e) {
                        case d.PremiumGiftStyles.SNOWGLOBE:
                            i = () => n.el("452661").then(n.t.bind(n, "452661", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case d.PremiumGiftStyles.BOX:
                            i = () => n.el("726871").then(n.t.bind(n, "726871", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case d.PremiumGiftStyles.CUP:
                            i = () => n.el("544929").then(n.t.bind(n, "544929", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case d.PremiumGiftStyles.STANDARD_BOX:
                            switch (t) {
                                case r.IDLE:
                                    i = () => n.el("973372").then(n.t.bind(n, "973372", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case r.LOOP:
                                    i = () => n.el("353540").then(n.t.bind(n, "353540", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("303473").then(n.t.bind(n, "303473", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case d.PremiumGiftStyles.CAKE:
                            switch (t) {
                                case r.IDLE:
                                    i = () => n.el("127891").then(n.t.bind(n, "127891", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case r.LOOP:
                                    i = () => n.el("953820").then(n.t.bind(n, "953820", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("311972").then(n.t.bind(n, "311972", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case d.PremiumGiftStyles.CHEST:
                            switch (t) {
                                case r.IDLE:
                                    i = () => n.el("269055").then(n.t.bind(n, "269055", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case r.LOOP:
                                    i = () => n.el("120467").then(n.t.bind(n, "120467", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("451680").then(n.t.bind(n, "451680", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case d.PremiumGiftStyles.COFFEE:
                            switch (t) {
                                case r.IDLE:
                                    i = () => n.el("863089").then(n.t.bind(n, "863089", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case r.LOOP:
                                    i = () => n.el("949233").then(n.t.bind(n, "949233", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("361896").then(n.t.bind(n, "361896", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        default:
                            i = () => Promise.resolve("Error: Invalid giftStyle")
                    }
                    return i
                },
                p = async (e, t) => {
                    if (null == t) throw Error("giftCode must be defined");
                    if (null == e) throw Error("Recipient must be defined");
                    let n = await o.default.openPrivateChannel(e.id).then(e => {
                            let t = c.default.getChannel(e);
                            if (u(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                            return t
                        }),
                        i = (0, f.getGiftCodeURL)(t);
                    return l.default.sendMessage(n.id, s.default.parse(n, i), void 0, {
                        isGiftLinkSentOnBehalfOfUser: !0
                    })
                }
        },
        53253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsSeasonalGiftingActive: function() {
                    return f
                },
                default: function() {
                    return d
                }
            });
            var i = n("884691"),
                r = n("866227"),
                a = n.n(r),
                u = n("862337"),
                o = n("296892");
            let l = new Date("2023-01-01T07:59:59.000Z"),
                s = a(l),
                c = (0, o.default)({
                    id: "2022-12_seasonal_gifting",
                    label: "Seasonal Gifting",
                    kind: "user",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function f() {
                let [e, t] = i.useState(() => s.isAfter(Date.now()));
                return i.useEffect(() => {
                    let n = new u.Timeout,
                        i = () => {
                            let e = s.diff(Date.now(), "millisecond");
                            null == n || n.start(e, () => {
                                s.isBefore(Date.now()) ? t(!1) : i()
                            })
                        };
                    return e && i(), () => n.stop()
                }), e
            }
            var d = c
        },
        154889: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                discountOfferHasTier: function() {
                    return f
                },
                usePremiumDiscountOffer: function() {
                    return d
                }
            });
            var i = n("884691"),
                r = n("446674"),
                a = n("862337"),
                u = n("697218"),
                o = n("340412"),
                l = n("719923"),
                s = n("646718");

            function c(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function f(e, t) {
                var n;
                if (null == e) return !1;
                let i = new Set(null === (n = e.discount) || void 0 === n ? void 0 : n.plan_ids.map(e => s.SubscriptionPlanInfo[e].skuId));
                return i.has(t)
            }

            function d() {
                let e = (0, r.useStateFromStores)([o.default], () => o.default.getUserDiscount(s.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID)),
                    [t, n] = i.useState(c(e)),
                    f = (0, r.useStateFromStores)([u.default], () => (0, l.isPremium)(u.default.getCurrentUser()));
                return i.useEffect(() => {
                    if (null == e || null == e.expires_at) return;
                    let i = new a.Timeout,
                        r = () => {
                            let a = null != e.expires_at ? Date.parse(e.expires_at) - Date.now() : 0;
                            null == i || i.start(a, () => {
                                !t && c(e) ? n(!0) : r()
                            })
                        };
                    return r(), () => i.stop()
                }, [t, e]), t || f ? null : e
            }
        },
        65324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                a = n("446674"),
                u = n("206230"),
                o = n("491605"),
                l = n("210721"),
                s = n("78345");

            function c(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: c = !0,
                    defaultAnimationState: f,
                    idleAnimationState: d
                } = e, h = (0, a.useStateFromStores)([u.default], () => u.default.useReducedMotion), [p, v] = r.useState(f), y = r.useRef((0, l.getGiftAnimationData)(t, p)), [m, w] = r.useState(null == d), [g, x] = r.useState(!1), [b, C] = r.useState(-1), P = () => {
                    y.current = (0, l.getGiftAnimationData)(t, p), C(e => e + 1)
                }, k = () => {
                    w(!1), x(!0), C(-1), v(f)
                };
                r.useEffect(() => {
                    null == d && v(f)
                }, [d, f]), r.useEffect(() => {
                    if (null != d && b >= 0) {
                        k();
                        return
                    }
                    P()
                }, [t, d]), r.useEffect(() => {
                    (!g || null == d) && P()
                }, [p]), r.useEffect(() => {
                    g && (w(null == d), x(!1), P())
                }, [g]);
                if (!s.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, i.jsx)(o.default, {
                    importData: y.current,
                    shouldAnimate: !h && c,
                    className: n,
                    versionKey: b,
                    onComplete: null != d ? () => {
                        null != d && (v(d), w(!0))
                    } : void 0,
                    loop: m
                })
            }
        }
    }
]);
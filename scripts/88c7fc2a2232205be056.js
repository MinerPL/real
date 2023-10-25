(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["46102"], {
        641900: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCanvas: function() {
                    return b
                },
                Environment: function() {
                    return d
                },
                SpriteCanvas: function() {
                    return L
                },
                useConfettiCannon: function() {
                    return A
                }
            });
            var i = n("773670"),
                r = n("462567"),
                a = n("575482"),
                u = n.n(a);

            function l(e, t) {
                var n = e.x,
                    i = e.y;
                return n > t.x && n < t.x + t.width && i > t.y && i < t.y + t.height
            }

            function o(e, t) {
                return e * t * t * (t > 0 ? -1 : 1)
            }
            var s = function() {
                    function e(e) {
                        this.id = e.id, this.position = e.position, this.velocity = e.velocity, this.rotation = e.rotation, this.dragCoefficient = e.dragCoefficient, this.size = e.size, this.opacity = e.opacity, this.spriteX = e.spriteX, this.spriteY = e.spriteY, this.spriteWidth = e.spriteWidth, this.spriteHeight = e.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return e.prototype.getNewForces = function(e, t) {
                        var n, i, r, a, u = e.wind * t,
                            l = -e.gravity * t;
                        return {
                            x: u + (n = this.dragCoefficient.x, n * (i = this.velocity.x) * i * (i > 0 ? -1 : 1)),
                            y: l + (r = this.dragCoefficient.y, r * (a = this.velocity.y) * a * (a > 0 ? -1 : 1))
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
                        var l = this.position.previewUpdate(n);
                        return l.x += i.x * n, l.y += i.y * n, l
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
                f = function(e, t) {
                    return (f = Object.setPrototypeOf || ({
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
                f(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var p = function() {
                    return (p = Object.assign || function(e) {
                        for (var t, n = 1, i = arguments.length; n < i; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                },
                y = function(e) {
                    this.value = e
                },
                v = function() {
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
                }(v),
                E = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return h(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(y),
                R = function(e) {
                    function t(t, n) {
                        var i = e.call(this, t) || this;
                        return i.addValue = n, i
                    }
                    return h(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(y),
                g = function(e) {
                    function t(t, n, i, r, a, u) {
                        var l = e.call(this, t) || this;
                        l.min = n, l.max = i, l.duration = r;
                        var o = l.value / (l.max - l.min) * l.duration,
                            s = isNaN(o) ? 0 : o;
                        return l.timePassed = s < 0 ? l.duration - s : s, l.directionMultiplier = a, l.easingFunction = u, l
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
                }(y);

            function _(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function w(e) {
                var t = Math.floor(_(0, e.length - 1));
                return [e[t], t]
            }

            function x(e, t) {
                return w([e, t])[0]
            }

            function C(e) {
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

            function I(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = C(e.value);
                            return new v(new E(t.x), new E(t.y));
                        case "static-random":
                            var n = C(e.minValue),
                                i = C(e.maxValue);
                            return new v(new E(_(n.x, i.x)), new E(_(n.y, i.y)));
                        case "linear":
                            t = C(e.value);
                            var r = C(e.addValue);
                            return new v(new R(t.x, r.x), new R(t.y, r.y));
                        case "linear-random":
                            n = C(e.minValue), i = C(e.maxValue);
                            var a = C(e.minAddValue),
                                u = C(e.maxAddValue);
                            return new v(new R(_(n.x, i.x), _(a.x, u.x)), new R(_(n.y, i.y), _(a.x, u.x)));
                        case "oscillating":
                            t = C(e.value);
                            var l = C(e.start),
                                o = C(e.final),
                                s = C(e.duration),
                                c = C(e.direction);
                            return new v(new g(t.x, l.x, o.x, s.x, c.x, e.easingFunction), new g(t.y, l.y, o.y, s.x, c.y, e.easingFunction));
                        case "oscillating-random":
                            n = C(e.minValue), i = C(e.maxValue);
                            var d = C(e.minStart),
                                f = C(e.maxStart),
                                h = C(e.minFinal),
                                p = C(e.maxFinal),
                                y = C(e.minDuration),
                                m = C(e.maxDuration),
                                S = C(e.minDirection),
                                I = C(e.maxDirection);
                            return new v(new g(_(n.x, i.x), _(d.x, f.x), _(h.x, p.x), _(y.x, m.x), x(S.x, I.x), w(e.easingFunctions)[0]), new g(_(n.y, i.y), _(d.y, f.y), _(h.y, p.y), _(y.y, m.y), x(S.y, I.y), w(e.easingFunctions)[0]))
                    }
                }(p(p({}, e), {
                    valueType: "Vector2"
                }))
            }
            var b = i.forwardRef(function(e, t) {
                var a = e.className,
                    u = e.environment,
                    o = e.onClick,
                    d = e.onMouseDown,
                    f = e.onMouseMove,
                    h = e.onMouseUp,
                    y = e.onBeforeRender,
                    v = e.onAfterRender,
                    C = function(e, t) {
                        var n = {};
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (n[i] = e[i]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) 0 > t.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                        }
                        return n
                    }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    b = i.useRef(null),
                    L = i.useRef(new Map),
                    A = i.useRef(null),
                    F = i.useRef(0),
                    O = i.useRef(0),
                    T = i.useCallback(function() {
                        var e = b.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == y || y(t), L.current.forEach(function(n, i) {
                                    var r = n.confetti,
                                        a = n.spriteCanvas;
                                    r.update(u), r.draw(a, t), r.shouldDestroy(e, u) && L.current.delete(i)
                                }), null == v || v(t), L.current.size > 0 ? A.current = window.requestAnimationFrame(T) : (t.clearRect(0, 0, e.width, e.height), A.current = null);
                                var n = Date.now();
                                0 !== F.current && (O.current = 1e3 / (n - F.current)), F.current = n
                            }
                        }
                    }, [u, v, y]);
                i.useEffect(function() {
                    null != A.current && (window.cancelAnimationFrame(A.current), A.current = window.requestAnimationFrame(T))
                }, [T]);
                var P = i.useCallback(function(e, t) {
                        L.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == A.current && T()
                    }, [T]),
                    N = i.useCallback(function(e, t, n, i, a) {
                        var u, l, o, d, f, h, y, v, C, b, L, A, F, O, T, N = (u = null !== (T = e.id) && void 0 !== T ? T : (0, r.v4)(), l = e, o = n, d = i, f = a, v = I((y = (h = l, p(p({
                            id: u
                        }, c), h))).size), b = (C = function(e, t) {
                            if (null != e) {
                                var n = t.sprites.findIndex(function(t) {
                                    return "string" == typeof e ? t.src === e && t.colorize : t.src === e.src && t.colorize === e.colorize
                                });
                                if (-1 !== n) return [e, n]
                            }
                            return w(t.sprites)
                        }(d, o))[0], L = C[1], A = function(e, t, n) {
                            if (!("string" == typeof(i = e) || i.colorize)) return 0;
                            var i, r = null != t ? n.colors.findIndex(function(e) {
                                return e === t
                            }) : -1;
                            return -1 !== r ? r : Math.floor(_(0, n.colors.length - 1))
                        }(null != d ? d : b, f, o), new s({
                            id: u,
                            position: I(y.position),
                            velocity: I(y.velocity),
                            rotation: (F = y.rotation, function(e) {
                                switch (e.type) {
                                    case "static":
                                        var t = S(e.value);
                                        return new m(new E(t.x), new E(t.y), new E(t.z));
                                    case "static-random":
                                        var n = S(e.minValue),
                                            i = S(e.maxValue);
                                        return new m(new E(_(n.x, i.x)), new E(_(n.y, i.y)), new E(_(n.z, i.z)));
                                    case "linear":
                                        t = S(e.value);
                                        var r = S(e.addValue);
                                        return new m(new R(t.x, r.x), new R(t.y, r.y), new R(t.z, r.z));
                                    case "linear-random":
                                        n = S(e.minValue), i = S(e.maxValue);
                                        var a = S(e.minAddValue),
                                            u = S(e.maxAddValue);
                                        return new m(new R(_(n.x, i.x), _(a.x, u.x)), new R(_(n.y, i.y), _(a.y, u.y)), new R(_(n.z, i.z), _(a.z, u.z)));
                                    case "oscillating":
                                        t = S(e.value);
                                        var l = S(e.start),
                                            o = S(e.final),
                                            s = S(e.duration),
                                            c = S(e.direction);
                                        return new m(new g(t.x, l.x, o.x, s.x, c.x, e.easingFunction), new g(t.y, l.y, o.y, s.z, c.y, e.easingFunction), new g(t.z, l.z, o.z, s.z, c.z, e.easingFunction));
                                    case "oscillating-random":
                                        n = S(e.minValue), i = S(e.maxValue);
                                        var d = S(e.minStart),
                                            f = S(e.maxStart),
                                            h = S(e.minFinal),
                                            p = S(e.maxFinal),
                                            y = S(e.minDuration),
                                            v = S(e.maxDuration),
                                            C = S(e.minDirection),
                                            I = S(e.maxDirection);
                                        return new m(new g(_(n.x, i.x), _(d.x, f.x), _(h.x, p.x), _(y.x, v.x), x(C.x, I.x), w(e.easingFunctions)[0]), new g(_(n.y, i.y), _(d.y, f.y), _(h.y, p.y), _(y.y, v.y), x(C.y, I.y), w(e.easingFunctions)[0]), new g(_(n.z, i.z), _(d.z, f.z), _(h.z, p.z), _(y.z, v.z), x(C.z, I.z), w(e.easingFunctions)[0]))
                                }
                            }(p(p({}, F), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: I(y.dragCoefficient),
                            size: v,
                            opacity: (O = y.opacity, function(e) {
                                switch (e.type) {
                                    case "static":
                                        return new E(e.value);
                                    case "static-random":
                                        return new E(_(e.minValue, e.maxValue));
                                    case "linear":
                                        return new R(e.value, e.addValue);
                                    case "linear-random":
                                        return new R(_(e.minValue, e.maxValue), _(e.minAddValue, e.maxAddValue));
                                    case "oscillating":
                                        return new g(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                                    case "oscillating-random":
                                        return new g(_(e.minValue, e.maxValue), _(e.minStart, e.maxStart), _(e.minFinal, e.maxFinal), _(e.minDuration, e.maxDuration), x(e.minDirection, e.maxDirection), w(e.easingFunctions)[0])
                                }
                            }(p(p({}, O), {
                                valueType: "number"
                            }))),
                            spriteX: A * o.spriteWidth + 2 * A,
                            spriteY: L * o.spriteHeight + 2 * L,
                            spriteWidth: o.spriteWidth,
                            spriteHeight: o.spriteHeight
                        }));
                        return P(N, t), N
                    }, [P]),
                    U = i.useCallback(function(e) {
                        L.current.delete(e)
                    }, []),
                    D = i.useCallback(function() {
                        return L.current.clear()
                    }, []),
                    M = i.useCallback(function() {
                        return b.current
                    }, []);
                i.useImperativeHandle(t, function() {
                    return {
                        createConfetti: N,
                        addConfetti: P,
                        deleteConfetti: U,
                        clearConfetti: D,
                        getCanvas: M
                    }
                }, [N, P, U, D, M]);
                var k = i.useCallback(function(e, t) {
                        var n, i, r = t.clickHandler,
                            a = t.mouseHandler;
                        if (null != r || null != a) {
                            var o = null === (n = b.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != o) {
                                var s = function(e, t) {
                                    if (null == t) throw Error("element should not be null");
                                    var n = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - n.left,
                                        y: e.clientY - n.top
                                    }
                                }(e, b.current);
                                if (l(s, {
                                        x: o.left,
                                        y: o.top,
                                        width: o.width,
                                        height: o.height
                                    })) {
                                    if (null != a) return a(e);
                                    if (null != r) {
                                        var c = -1e3 / O.current * 2,
                                            d = function(e, t) {
                                                for (var n = 0, i = Array.from(e.values()); n < i.length; n++) {
                                                    var r = i[n];
                                                    if (null != r && t(r)) return r
                                                }
                                                return null
                                            }(L.current, function(e) {
                                                var t = e.confetti,
                                                    n = t.previewPositionUpdate(u, c);
                                                return l(s, {
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
                    }, [u]),
                    z = i.useCallback(function(e) {
                        return k(e, {
                            clickHandler: o
                        })
                    }, [k, o]),
                    V = i.useCallback(function(e) {
                        return k(e, {
                            clickHandler: d
                        })
                    }, [k, d]),
                    G = i.useCallback(function(e) {
                        return k(e, {
                            mouseHandler: f
                        })
                    }, [k, f]),
                    B = i.useCallback(function(e) {
                        return k(e, {
                            mouseHandler: h
                        })
                    }, [k, h]);
                return i.useEffect(function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", z, o), e("mousedown", V, d), e("mousemove", G, f), e("mouseup", B, h),
                        function() {
                            window.removeEventListener("click", z), window.removeEventListener("mousedown", V), window.removeEventListener("mousemove", G), window.removeEventListener("mouseup", G)
                        }
                }, [z, V, G, B, o, d, f, h]), i.useEffect(function() {
                    var e = b.current,
                        t = new ResizeObserver(function() {
                            ! function(e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        i = t.width,
                                        r = t.height;
                                    e.width = i * n.g.devicePixelRatio, e.height = r * n.g.devicePixelRatio
                                }
                            }(b.current)
                        });
                    return null != e && t.observe(e),
                        function() {
                            null != e && t.unobserve(e)
                        }
                }, []), i.createElement("canvas", p({}, C, {
                    className: a,
                    ref: b
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
                var n, a = e.className,
                    l = e.visible,
                    o = void 0 !== l && l,
                    s = e.sprites,
                    c = e.colors,
                    d = e.spriteWidth,
                    f = e.spriteHeight,
                    h = i.useRef(null),
                    p = i.useRef([]),
                    y = i.useRef(!1),
                    v = i.useRef({});
                i.useImperativeHandle(t, function() {
                    return {
                        getCanvas: function() {
                            return h.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: p.current,
                                colors: c,
                                spriteWidth: d,
                                spriteHeight: f
                            }
                        },
                        addReadyListener: function(e) {
                            var t = (0, r.v4)();
                            return v.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete v.current[e]
                        },
                        isReady: y.current
                    }
                }, [c, f, d]);
                var m = i.useCallback(function() {
                        var e = h.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height), p.current.forEach(function(e, n) {
                            var i = function(i, r) {
                                var a = d * r + 2 * r,
                                    u = f * n + 2 * n;
                                if (t.drawImage(e.image, a, u, d, f), null != i) {
                                    for (var l, o, s = t.getImageData(a, u, d, f), c = ("#" === (l = i)[0] && (l = l.slice(1)), {
                                            r: (o = parseInt(l, 16)) >> 16 & 255,
                                            g: o >> 8 & 255,
                                            b: 255 & o
                                        }), h = 0; h < s.data.length; h += 4) s.data[h] = c.r, s.data[h + 1] = c.g, s.data[h + 2] = c.b;
                                    t.putImageData(s, a, u)
                                }
                            };
                            e.colorize ? c.forEach(function(e, t) {
                                return i(e, t)
                            }) : i(null, 0)
                        }))
                    }, [c, f, d]),
                    E = i.useCallback(function() {
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
                    R = i.useCallback(function(e) {
                        for (var t in v.current) v.current[t](e)
                    }, []),
                    g = i.useCallback(function() {
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
                                    next: l(0),
                                    throw: l(1),
                                    return: l(2)
                                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                                    return this
                                }), a;

                                function l(l) {
                                    return function(o) {
                                        return function(l) {
                                            if (n) throw TypeError("Generator is already executing.");
                                            for (; a && (a = 0, l[0] && (u = 0)), u;) try {
                                                if (n = 1, i && (r = 2 & l[0] ? i.return : l[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, l[1])).done) return r;
                                                switch (i = 0, r && (l = [2 & l[0], r.value]), l[0]) {
                                                    case 0:
                                                    case 1:
                                                        r = l;
                                                        break;
                                                    case 4:
                                                        return u.label++, {
                                                            value: l[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        u.label++, i = l[1], l = [0];
                                                        continue;
                                                    case 7:
                                                        l = u.ops.pop(), u.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(r = (r = u.trys).length > 0 && r[r.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                            u = 0;
                                                            continue
                                                        }
                                                        if (3 === l[0] && (!r || l[1] > r[0] && l[1] < r[3])) {
                                                            u.label = l[1];
                                                            break
                                                        }
                                                        if (6 === l[0] && u.label < r[1]) {
                                                            u.label = r[1], r = l;
                                                            break
                                                        }
                                                        if (r && u.label < r[2]) {
                                                            u.label = r[2], u.ops.push(l);
                                                            break
                                                        }
                                                        r[2] && u.ops.pop(), u.trys.pop();
                                                        continue
                                                }
                                                l = t.call(e, u)
                                            } catch (e) {
                                                l = [6, e], i = 0
                                            } finally {
                                                n = r = 0
                                            }
                                            if (5 & l[0]) throw l[1];
                                            return {
                                                value: l[0] ? l[1] : void 0,
                                                done: !0
                                            }
                                        }([l, o])
                                    }
                                }
                            }(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, E()];
                                    case 1:
                                        return e.sent(), m(), y.current = !0, R(!0), [2]
                                }
                            })
                        }, new(n || (n = Promise))(function(r, a) {
                            function u(e) {
                                try {
                                    o(i.next(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function l(e) {
                                try {
                                    o(i.throw(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function o(e) {
                                var t;
                                e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                                    e(t)
                                })).then(u, l)
                            }
                            o((i = i.apply(e, t || [])).next())
                        })
                    }, [R, E, m]);
                return i.useEffect(function() {
                    g()
                }, [g]), i.useEffect(function() {
                    return function() {
                        return R(!1)
                    }
                }, [R]), i.useEffect(function() {
                    null != h.current && (h.current.width = (d + 2) * Math.max(c.length, 1), h.current.height = (f + 2) * s.length)
                }, [c.length, f, d, s.length]), i.createElement("canvas", {
                    ref: h,
                    className: u(a, ((n = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !o, n))
                })
            });

            function A(e, t) {
                var n, r = i.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
                    a = r[0],
                    u = r[1];
                i.useEffect(function() {
                    var e = null == t ? void 0 : t.addReadyListener(u);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }, [t]);
                var l = i.useCallback(function(n, i) {
                        var r = void 0 === i ? {} : i,
                            a = r.sprite,
                            u = r.color,
                            l = null == t ? void 0 : t.getCreateData(),
                            o = null == t ? void 0 : t.getCanvas();
                        if (null != o && null != l && 0 !== l.sprites.length) return null == e ? void 0 : e.createConfetti(n, o, l, a, u)
                    }, [e, t]),
                    o = i.useCallback(function(e, t, n) {
                        for (var i = [], r = 0; r < t; r++) {
                            var a = l(e, n);
                            a && i.push(a)
                        }
                        return i
                    }, [l]),
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
                        createConfetti: l,
                        createMultipleConfetti: o,
                        addConfetti: s,
                        clearConfetti: d,
                        deleteConfetti: c,
                        isReady: a && null != t && null != e
                    }
                }, [s, d, e, l, o, c, a, t])
            }
        },
        315147: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3808a69f670fa9a67284.svg"
        },
        452113: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("850068"),
                a = n("524503"),
                u = n("393414"),
                l = n("162771"),
                o = n("642906"),
                s = n("385179"),
                c = n("49111");

            function d(e) {
                let {
                    onClose: t,
                    initialPlanId: n,
                    analyticsObject: d,
                    analyticsLocation: f,
                    analyticsLocations: h,
                    analyticsSubscriptionType: p,
                    renderHeader: y,
                    planGroup: v,
                    reviewWarningMessage: m,
                    applicationId: E,
                    guildId: R,
                    onComplete: g,
                    forcesTransitionToGuild: _,
                    skuId: w,
                    ...x
                } = e, {
                    subscriptionMetadataRequest: C
                } = (0, o.usePaymentContext)();
                return (0, i.jsx)(s.PaymentModal, {
                    ...x,
                    initialPlanId: n,
                    skuId: w,
                    onClose: e => {
                        t();
                        let n = null == C ? void 0 : C.guild_id;
                        e && null != n && (r.fetchSubscriptions(), (0, a.fetchEntitlementsForGuild)(n), null == g || g(), null != n && (_ || l.default.getGuildId() !== n) && (0, u.transitionTo)(c.Routes.CHANNEL(n)))
                    },
                    analyticsLocations: h,
                    analyticsObject: d,
                    analyticsLocation: f,
                    analyticsSubscriptionType: p,
                    renderHeader: y,
                    planGroup: v,
                    reviewWarningMessage: m,
                    applicationId: E,
                    guildId: R,
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
            var i, r, a = n("161179"),
                u = n.n(a),
                l = n("450911"),
                o = n("819689"),
                s = n("884351"),
                c = n("42203"),
                d = n("659632"),
                f = n("78345");
            (i = r || (r = {})).ACTION = "action", i.LOOP = "loop", i.IDLE = "idle";
            let h = (e, t) => {
                    let i;
                    switch (e) {
                        case f.PremiumGiftStyles.SNOWGLOBE:
                            i = () => n.el("729943").then(n.t.bind(n, "729943", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.BOX:
                            i = () => n.el("5754").then(n.t.bind(n, "5754", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.CUP:
                            i = () => n.el("132631").then(n.t.bind(n, "132631", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.STANDARD_BOX:
                            switch (t) {
                                case r.IDLE:
                                    i = () => n.el("376058").then(n.t.bind(n, "376058", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case r.LOOP:
                                    i = () => n.el("588315").then(n.t.bind(n, "588315", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("31805").then(n.t.bind(n, "31805", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.CAKE:
                            switch (t) {
                                case r.IDLE:
                                    i = () => n.el("298104").then(n.t.bind(n, "298104", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case r.LOOP:
                                    i = () => n.el("482376").then(n.t.bind(n, "482376", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("278985").then(n.t.bind(n, "278985", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.CHEST:
                            switch (t) {
                                case r.IDLE:
                                    i = () => n.el("748733").then(n.t.bind(n, "748733", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case r.LOOP:
                                    i = () => n.el("294698").then(n.t.bind(n, "294698", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("726130").then(n.t.bind(n, "726130", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.COFFEE:
                            switch (t) {
                                case r.IDLE:
                                    i = () => n.el("179448").then(n.t.bind(n, "179448", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case r.LOOP:
                                    i = () => n.el("772933").then(n.t.bind(n, "772933", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("461087").then(n.t.bind(n, "461087", 19)).then(e => {
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
                    let n = await l.default.openPrivateChannel(e.id).then(e => {
                            let t = c.default.getChannel(e);
                            if (u(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                            return t
                        }),
                        i = (0, d.getGiftCodeURL)(t);
                    return o.default.sendMessage(n.id, s.default.parse(n, i), void 0, {
                        isGiftLinkSentOnBehalfOfUser: !0
                    })
                }
        },
        179935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchReferralsRemaining: function() {
                    return o
                },
                checkRecipientEligibility: function() {
                    return s
                },
                createReferralTrial: function() {
                    return c
                },
                resolveReferralTrialOffer: function() {
                    return d
                }
            });
            var i = n("990746"),
                r = n("913144"),
                a = n("819689"),
                u = n("18494"),
                l = n("49111");
            let o = () => (r.default.dispatch({
                    type: "BILLING_REFERRALS_REMAINING_FETCH_START"
                }), i.default.get({
                    url: l.Endpoints.GET_REFERRALS_REMAINING,
                    oldFormErrors: !0
                }).then(e => {
                    r.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                        referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                        sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : []
                    })
                }, () => {
                    r.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
                    })
                })),
                s = e => (r.default.dispatch({
                    type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
                    recipientId: e
                }), i.default.post({
                    url: l.Endpoints.CREATE_REFERRAL_PREVIEW(e),
                    oldFormErrors: !0
                }).then(t => {
                    r.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS",
                        recipientId: e,
                        is_eligible: null != t.body && t.body.is_eligible
                    })
                }, () => {
                    r.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_FAIL",
                        recipientId: e
                    })
                }));
            async function c(e) {
                try {
                    var t;
                    let n = await i.default.post({
                            url: l.Endpoints.CREATE_REFERRAL(e),
                            oldFormErrors: !0
                        }),
                        a = null !== (t = n.body) && void 0 !== t ? t : null;
                    return r.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_SUCCESS",
                        userTrialOffer: a
                    }), {
                        userTrialOffer: a
                    }
                } catch (e) {
                    if (r.default.dispatch({
                            type: "BILLING_CREATE_REFERRAL_FAIL"
                        }), e.body.code === l.AbortCodes.INVALID_MESSAGE_SEND_USER) {
                        let t = u.default.getCurrentlySelectedChannelId();
                        null != t && a.default.sendClydeError(t, e.body.code)
                    }
                }
            }
            async function d(e) {
                try {
                    var t;
                    let n = await i.default.get({
                            url: l.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
                            oldFormErrors: !0
                        }),
                        a = null !== (t = n.body) && void 0 !== t ? t : null;
                    return r.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                        userTrialOffer: a
                    }), {
                        userTrialOffer: a
                    }
                } catch (t) {
                    r.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_FAIL",
                        userTrialOfferId: e
                    })
                }
            }
        },
        540692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("619415"),
                r = n("498225"),
                a = n("913144"),
                u = n("697218"),
                l = n("179935"),
                o = n("49111");
            let s = null,
                c = {},
                d = [],
                f = new Set,
                h = !1,
                p = new Set,
                y = new Set,
                v = {},
                m = 0,
                E = null,
                R = () => !0;

            function g(e) {
                p.add(e)
            }

            function _(e) {
                let {
                    messages: t
                } = e;
                t.forEach(e => w(e))
            }

            function w(e) {
                let t = e.type === i.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
                if (null == t) return !1;
                if (!y.has(t) && !p.has(t)) {
                    var n;
                    n = t, p.add(n), a.default.wait(() => (0, l.resolveReferralTrialOffer)(t).catch(o.NOOP_NULL))
                }
            }
            class x extends r.default.Store {
                initialize() {
                    this.waitFor(u.default), this.syncWith([u.default], R)
                }
                checkAndFetchReferralsRemaining() {
                    null == s && !h && m < 5 && (null == E || E < Date.now()) && (0, l.fetchReferralsRemaining)()
                }
                getReferralsRemaining() {
                    return this.checkAndFetchReferralsRemaining(), s
                }
                getSentUserIds() {
                    return this.checkAndFetchReferralsRemaining(), null == d ? [] : d
                }
                isFetchingReferralsRemaining() {
                    return h
                }
                isFetchingRecipientEligibility(e) {
                    return f.has(e)
                }
                getRecipientEligibility(e) {
                    return void 0 === c[e] && !f.has(e) && (0, l.checkRecipientEligibility)(e), c[e]
                }
                getRelevantUserTrialOffer(e) {
                    return v[e]
                }
                isResolving(e) {
                    return p.has(e)
                }
            }
            x.displayName = "ReferralTrialStore";
            var C = new x(a.default, {
                BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
                    let {
                        userTrialOfferId: t,
                        recipientId: n
                    } = e;
                    if (!h && (0, l.fetchReferralsRemaining)(), !f.has(n) && (0, l.checkRecipientEligibility)(n), !p.has(t)) {
                        var i;
                        i = t, p.add(i), a.default.wait(() => (0, l.resolveReferralTrialOffer)(t).catch(o.NOOP_NULL))
                    }
                },
                BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
                    let {} = e;
                    h = !0
                },
                BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
                    let {
                        referrals_remaining: t,
                        sent_user_ids: n
                    } = e;
                    h = !1, s = t, d = n
                },
                BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
                    let {} = e;
                    h = !1, m += 1, E = Date.now() + 1e3 * Math.pow(2, m)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    f.add(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
                    let {
                        recipientId: t,
                        is_eligible: n
                    } = e;
                    c[t] = n, f.delete(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    c[t] = !1, f.delete(t)
                },
                BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    (0, l.fetchReferralsRemaining)(), v[t.id] = t, d = [...d, t.user_id]
                },
                BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t && (p.delete(t.id), y.add(t.id), v[t.id] = t)
                },
                BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
                    let {
                        userTrialOfferId: t
                    } = e;
                    p.delete(t), y.add(t)
                },
                LOAD_MESSAGES_SUCCESS: _,
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    w(t)
                },
                LOAD_MESSAGES_AROUND_SUCCESS: _,
                LOGOUT: function() {
                    s = null, c = {}, d = [], f = new Set, h = !1, p = new Set, y = new Set, v = {}, m = 0, E = null
                }
            })
        },
        53253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsSeasonalGiftingActive: function() {
                    return d
                },
                default: function() {
                    return f
                }
            });
            var i = n("773670"),
                r = n("377849"),
                a = n.n(r),
                u = n("638800"),
                l = n("296892");
            let o = new Date("2023-01-01T07:59:59.000Z"),
                s = a(o),
                c = (0, l.default)({
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

            function d() {
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
            var f = c
        },
        917247: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePremiumTrialOffer: function() {
                    return o
                }
            });
            var i = n("744196"),
                r = n("340412"),
                a = n("540692"),
                u = n("833516"),
                l = n("646718");

            function o(e) {
                var t, n, o, s;
                let c = (0, u.useTrialOffer)(l.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID),
                    d = (0, u.useTrialOffer)(l.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
                    f = (0, u.useTrialOffer)(l.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
                    h = (0, u.useTrialOffer)(r.default.getAnyOfUserTrialOfferId([l.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, l.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, l.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, l.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
                    p = (0, u.useTrialOffer)(l.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
                    y = (0, i.default)([a.default], () => void 0 === e ? null : a.default.getRelevantUserTrialOffer(e));
                return null !== (s = null !== (o = null !== (n = null !== (t = null != c ? c : y) && void 0 !== t ? t : d) && void 0 !== n ? n : f) && void 0 !== o ? o : h) && void 0 !== s ? s : p
            }
        },
        833516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hasUserTrialOfferExpired: function() {
                    return s
                },
                useTrialOffer: function() {
                    return c
                }
            });
            var i = n("773670"),
                r = n("498225"),
                a = n("638800"),
                u = n("697218"),
                l = n("340412"),
                o = n("719923");

            function s(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function c(e) {
                let t = (0, r.useStateFromStores)([l.default], () => l.default.getUserTrialOffer(e)),
                    [n, c] = i.useState(s(t)),
                    d = (0, r.useStateFromStores)([u.default], () => (0, o.isPremium)(u.default.getCurrentUser()));
                return i.useEffect(() => {
                    if (null != t && null != t.expires_at) {
                        let e = new a.Timeout,
                            i = () => {
                                let r = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                                null == e || e.start(r, () => {
                                    !n && s(t) ? c(!0) : i()
                                })
                            };
                        return i(), () => e.stop()
                    }
                }, [n, t]), n || d ? null : t
            }
        },
        65324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("920040"),
                r = n("773670"),
                a = n("498225"),
                u = n("206230"),
                l = n("491605"),
                o = n("210721"),
                s = n("78345");

            function c(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: c = !0,
                    defaultAnimationState: d,
                    idleAnimationState: f
                } = e, h = (0, a.useStateFromStores)([u.default], () => u.default.useReducedMotion), [p, y] = r.useState(d), v = r.useRef((0, o.getGiftAnimationData)(t, p)), [m, E] = r.useState(null == f), [R, g] = r.useState(!1), [_, w] = r.useState(-1), x = () => {
                    v.current = (0, o.getGiftAnimationData)(t, p), w(e => e + 1)
                }, C = () => {
                    E(!1), g(!0), w(-1), y(d)
                };
                r.useEffect(() => {
                    null == f && y(d)
                }, [f, d]), r.useEffect(() => {
                    if (null != f && _ >= 0) {
                        C();
                        return
                    }
                    x()
                }, [t, f]), r.useEffect(() => {
                    (!R || null == f) && x()
                }, [p]), r.useEffect(() => {
                    R && (E(null == f), g(!1), x())
                }, [R]);
                if (!s.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, i.jsx)(l.default, {
                    importData: v.current,
                    shouldAnimate: !h && c,
                    className: n,
                    versionKey: _,
                    onComplete: null != f ? () => {
                        null != f && (y(f), E(!0))
                    } : void 0,
                    loop: m
                })
            }
        },
        273108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("920040"),
                r = n("773670"),
                a = n("575482"),
                u = n.n(a),
                l = n("498225"),
                o = n("206230"),
                s = n("471671"),
                c = n("724063");
            class d extends r.PureComponent {
                async componentDidMount() {
                    let {
                        importData: e,
                        nextScene: t,
                        pauseWhileUnfocused: i,
                        pause: r,
                        isWindowFocused: a,
                        useReducedMotion: u
                    } = this.props, [l, {
                        default: o
                    }] = await Promise.all([e(), n.el("552280").then(n.t.bind(n, "552280", 21))]);
                    null != this.animationRef && (this.animation = o.loadAnimation({
                        container: this.animationRef,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !0,
                        animationData: l
                    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (i && !a || r || u) && this.animation.pause())
                }
                componentWillUnmount() {
                    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
                }
                componentDidUpdate(e) {
                    var t, n, i;
                    let {
                        nextScene: r,
                        pauseWhileUnfocused: a,
                        pause: u,
                        isWindowFocused: l,
                        useReducedMotion: o
                    } = this.props;
                    r !== this.currentScene && this.shouldForcePlayAfter() && !u && this.playScene(r), null != this.animation && (a && !e.isWindowFocused && l && !o && !0 !== u ? this.animation.play() : (o || a && e.isWindowFocused && !l) && this.animation.pause()), !e.pause && u ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !u && !o && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== r && u && (this.playScene(r), null === (i = this.animation) || void 0 === i || i.pause())
                }
                shouldForcePlayAfter() {
                    let {
                        sceneSegments: e
                    } = this.props, t = e[this.currentScene];
                    return !0 === t.shouldForcePlayAfter
                }
                playScene(e) {
                    if (this.isUnmounted) return;
                    let {
                        onScenePlay: t,
                        sceneSegments: n,
                        useReducedMotion: i
                    } = this.props, r = n[e], a = n[this.currentScene];
                    if (null != this.animation && (e === this.currentScene || r.BEG !== a.BEG || r.END !== a.END) && this.animation.playSegments([r.BEG, r.END], !0), this.currentScene = e, null != t && t(this.currentScene), i) {
                        var u;
                        null === (u = this.animation) || void 0 === u || u.pause()
                    }
                }
                render() {
                    return (0, i.jsx)("div", {
                        ref: this.handleSetRef,
                        className: u(this.props.className, c.wrapper)
                    })
                }
                constructor(...e) {
                    super(...e), this.animationRef = null, this.currentScene = this.props.nextScene, this.isUnmounted = !1, this.handleLoopComplete = () => {
                        let {
                            onSceneComplete: e,
                            nextScene: t
                        } = this.props;
                        null != e && e(this.currentScene), this.playScene(t)
                    }, this.handleComplete = () => {
                        let {
                            onSceneComplete: e
                        } = this.props;
                        null != e && e(this.currentScene)
                    }, this.handleSetRef = e => {
                        this.animationRef = e;
                        let {
                            animationRef: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            d.defaultProps = {
                pauseWhileUnfocused: !0,
                pause: !1
            };
            var f = e => {
                let {
                    componentRef: t,
                    ...n
                } = e, r = (0, l.useStateFromStores)([s.default], () => s.default.isFocused()), a = (0, l.useStateFromStores)([o.default], () => o.default.useReducedMotion);
                return (0, i.jsx)(d, {
                    ...n,
                    isWindowFocused: r,
                    useReducedMotion: a,
                    ref: t
                })
            }
        },
        181108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("920040"),
                r = n("773670"),
                a = n("641900");
            let u = [n("315147")],
                l = ["#FFFFFF"],
                o = 1e3 / 60,
                s = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 0,
                            y: 1
                        },
                        maxValue: {
                            x: 3,
                            y: 3
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        maxValue: {
                            x: 0,
                            y: 0,
                            z: 360
                        },
                        minAddValue: {
                            x: 0,
                            y: 0,
                            z: -5
                        },
                        maxAddValue: {
                            x: 0,
                            y: 0,
                            z: 5
                        }
                    },
                    size: {
                        type: "static-random",
                        minValue: 2,
                        maxValue: 6
                    },
                    dragCoefficient: {
                        type: "static",
                        value: {
                            x: .05,
                            y: .05
                        }
                    },
                    opacity: {
                        type: "static",
                        value: .3
                    }
                };

            function c(e) {
                let {
                    className: t,
                    firing: n = !0,
                    wind: c = 2
                } = e, [d, f] = r.useState(null), [h, p] = r.useState(null), y = (0, a.useConfettiCannon)(h, d), v = r.useMemo(() => new a.Environment({
                    wind: c
                }), [c]), m = r.useCallback(() => {
                    let e = null == h ? void 0 : h.getCanvas();
                    if (null == e) return;
                    let t = e.getBoundingClientRect();
                    y.createConfetti({
                        ...s,
                        position: {
                            type: "static-random",
                            minValue: {
                                x: -t.width / 2,
                                y: -6
                            },
                            maxValue: {
                                x: t.width,
                                y: -6
                            }
                        }
                    })
                }, [y, h]);
                return r.useEffect(() => {
                    let e = n ? setInterval(m, o) : null;
                    return () => clearInterval(e)
                }, [n, m]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(a.ConfettiCanvas, {
                        ref: p,
                        className: t,
                        environment: v
                    }), (0, i.jsx)(a.SpriteCanvas, {
                        ref: f,
                        colors: l,
                        sprites: u,
                        spriteWidth: 6,
                        spriteHeight: 6
                    })]
                })
            }
        }
    }
]);
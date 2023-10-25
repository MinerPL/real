(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["75940"], {
        641900: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ConfettiCanvas: function() {
                    return T
                },
                Environment: function() {
                    return f
                },
                SpriteCanvas: function() {
                    return R
                },
                useConfettiCannon: function() {
                    return I
                }
            });
            var r = n("773670"),
                i = n("462567"),
                o = n("575482"),
                a = n.n(o);

            function u(t, e) {
                var n = t.x,
                    r = t.y;
                return n > e.x && n < e.x + e.width && r > e.y && r < e.y + e.height
            }

            function c(t, e) {
                return t * e * e * (e > 0 ? -1 : 1)
            }
            var s = function() {
                    function t(t) {
                        this.id = t.id, this.position = t.position, this.velocity = t.velocity, this.rotation = t.rotation, this.dragCoefficient = t.dragCoefficient, this.size = t.size, this.opacity = t.opacity, this.spriteX = t.spriteX, this.spriteY = t.spriteY, this.spriteWidth = t.spriteWidth, this.spriteHeight = t.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return t.prototype.getNewForces = function(t, e) {
                        var n, r, i, o, a = t.wind * e,
                            u = -t.gravity * e;
                        return {
                            x: a + (n = this.dragCoefficient.x, n * (r = this.velocity.x) * r * (r > 0 ? -1 : 1)),
                            y: u + (i = this.dragCoefficient.y, i * (o = this.velocity.y) * o * (o > 0 ? -1 : 1))
                        }
                    }, t.prototype.update = function(t) {
                        var e = Date.now(),
                            n = (e - this._lastUpdatedAt) / 100;
                        this.rotation.update(n), this.dragCoefficient.update(n);
                        var r = this.getNewForces(t, n),
                            i = r.x,
                            o = r.y;
                        this.velocity.update(n), this.velocity.x += i, this.velocity.y += o, this.position.update(n), this.position.x += this.velocity.x * n, this.position.y += this.velocity.y * n, this.size.update(n), this.opacity.update(n), this._lastUpdatedAt = e
                    }, t.prototype.previewPositionUpdate = function(t, e) {
                        var n = e / 100,
                            r = this.velocity.previewUpdate(n),
                            i = this.getNewForces(t, n),
                            o = i.x,
                            a = i.y;
                        r.x += o, r.y += a;
                        var u = this.position.previewUpdate(n);
                        return u.x += r.x * n, u.y += r.y * n, u
                    }, t.prototype.draw = function(t, e) {
                        e.save(), e.globalAlpha = this.opacity.value, e.setTransform((new DOMMatrix).translateSelf(this.position.x * n.g.devicePixelRatio, this.position.y * n.g.devicePixelRatio).rotateSelf(this.rotation.x, this.rotation.y, this.rotation.z)), e.drawImage(t, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, -this.width / 2 * n.g.devicePixelRatio, -this.height / 2 * n.g.devicePixelRatio, this.width * n.g.devicePixelRatio, this.height * n.g.devicePixelRatio), e.restore()
                    }, t.prototype.shouldDestroy = function(t, e) {
                        return this.opacity.value < 0 || e.gravity >= 0 && this.velocity.y < 0 && this.position.y + this.height < 0 || e.gravity <= 0 && this.velocity.y > 0 && this.position.y - this.height > t.height || e.wind >= 0 && this.velocity.x > 0 && this.position.x - this.width > t.width || e.wind <= 0 && this.velocity.x < 0 && this.position.x + this.width < 0
                    }, Object.defineProperty(t.prototype, "width", {
                        get: function() {
                            return this.size.x
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "height", {
                        get: function() {
                            return this.size.y
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.addForce = function(t) {
                        this.velocity.x += t.x, this.velocity.y += t.y
                    }, t
                }(),
                l = {
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
                f = function(t) {
                    var e = void 0 === t ? {} : t,
                        n = e.gravity,
                        r = e.wind;
                    this.gravity = -9.8, this.wind = 0, this.gravity = null != n ? n : this.gravity, this.wind = null != r ? r : this.wind
                },
                h = function(t, e) {
                    return (h = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
                };

            function d(t, e) {
                if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function n() {
                    this.constructor = t
                }
                h(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var p = function() {
                    return (p = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }).apply(this, arguments)
                },
                v = function(t) {
                    this.value = t
                },
                y = function() {
                    function t(t, e) {
                        this._x = t, this._y = e
                    }
                    return t.prototype.update = function(t) {
                        this._x.update(t), this._y.update(t)
                    }, t.prototype.previewUpdate = function(t) {
                        return {
                            x: this._x.previewUpdate(t),
                            y: this._y.previewUpdate(t)
                        }
                    }, Object.defineProperty(t.prototype, "x", {
                        get: function() {
                            return this._x.value
                        },
                        set: function(t) {
                            this._x.value = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "y", {
                        get: function() {
                            return this._y.value
                        },
                        set: function(t) {
                            this._y.value = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(),
                g = function(t) {
                    function e(e, n, r) {
                        var i = t.call(this, e, n) || this;
                        return i._z = r, i
                    }
                    return d(e, t), e.prototype.update = function(e) {
                        t.prototype.update.call(this, e), this._z.update(e)
                    }, e.prototype.previewUpdate = function(e) {
                        var n = t.prototype.previewUpdate.call(this, e);
                        return p(p({}, n), {
                            z: this._z.previewUpdate(e)
                        })
                    }, Object.defineProperty(e.prototype, "z", {
                        get: function() {
                            return this._z.value
                        },
                        set: function(t) {
                            this._z.value = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e
                }(y),
                m = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return d(e, t), e.prototype.update = function() {}, e.prototype.previewUpdate = function() {
                        return this.value
                    }, e
                }(v),
                S = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.addValue = n, r
                    }
                    return d(e, t), e.prototype.update = function(t) {
                        this.value = this.previewUpdate(t)
                    }, e.prototype.previewUpdate = function(t) {
                        return this.value + this.addValue * t
                    }, e
                }(v),
                b = function(t) {
                    function e(e, n, r, i, o, a) {
                        var u = t.call(this, e) || this;
                        u.min = n, u.max = r, u.duration = i;
                        var c = u.value / (u.max - u.min) * u.duration,
                            s = isNaN(c) ? 0 : c;
                        return u.timePassed = s < 0 ? u.duration - s : s, u.directionMultiplier = o, u.easingFunction = a, u
                    }
                    return d(e, t), e.prototype.update = function(t) {
                        var e = this.doUpdate(t),
                            n = e[0],
                            r = e[1],
                            i = e[2];
                        this.value = n, this.directionMultiplier = i, this.timePassed = r
                    }, e.prototype.previewUpdate = function(t) {
                        return this.doUpdate(t)[0]
                    }, e.prototype.doUpdate = function(t) {
                        var e = this.max - this.min,
                            n = this.timePassed + t * this.directionMultiplier,
                            r = Math.min(Math.max(n, 0), this.duration),
                            i = n < 0 || n > this.duration ? -1 * this.directionMultiplier : this.directionMultiplier,
                            o = this.easingFunction(r, this.min, e, this.duration);
                        return [isNaN(o) ? 0 : o, r, i]
                    }, e
                }(v);

            function w(t, e) {
                return t === e ? t : Math.random() * (e - t + 1) + t
            }

            function C(t) {
                var e = Math.floor(w(0, t.length - 1));
                return [t[e], e]
            }

            function x(t, e) {
                return C([t, e])[0]
            }

            function A(t) {
                return "number" == typeof t ? {
                    x: t,
                    y: t
                } : t
            }

            function M(t) {
                return "number" == typeof t ? {
                    x: t,
                    y: t,
                    z: t
                } : t
            }

            function E(t) {
                return function(t) {
                    switch (t.type) {
                        case "static":
                            var e = A(t.value);
                            return new y(new m(e.x), new m(e.y));
                        case "static-random":
                            var n = A(t.minValue),
                                r = A(t.maxValue);
                            return new y(new m(w(n.x, r.x)), new m(w(n.y, r.y)));
                        case "linear":
                            e = A(t.value);
                            var i = A(t.addValue);
                            return new y(new S(e.x, i.x), new S(e.y, i.y));
                        case "linear-random":
                            n = A(t.minValue), r = A(t.maxValue);
                            var o = A(t.minAddValue),
                                a = A(t.maxAddValue);
                            return new y(new S(w(n.x, r.x), w(o.x, a.x)), new S(w(n.y, r.y), w(o.x, a.x)));
                        case "oscillating":
                            e = A(t.value);
                            var u = A(t.start),
                                c = A(t.final),
                                s = A(t.duration),
                                l = A(t.direction);
                            return new y(new b(e.x, u.x, c.x, s.x, l.x, t.easingFunction), new b(e.y, u.y, c.y, s.x, l.y, t.easingFunction));
                        case "oscillating-random":
                            n = A(t.minValue), r = A(t.maxValue);
                            var f = A(t.minStart),
                                h = A(t.maxStart),
                                d = A(t.minFinal),
                                p = A(t.maxFinal),
                                v = A(t.minDuration),
                                g = A(t.maxDuration),
                                M = A(t.minDirection),
                                E = A(t.maxDirection);
                            return new y(new b(w(n.x, r.x), w(f.x, h.x), w(d.x, p.x), w(v.x, g.x), x(M.x, E.x), C(t.easingFunctions)[0]), new b(w(n.y, r.y), w(f.y, h.y), w(d.y, p.y), w(v.y, g.y), x(M.y, E.y), C(t.easingFunctions)[0]))
                    }
                }(p(p({}, t), {
                    valueType: "Vector2"
                }))
            }
            var T = r.forwardRef(function(t, e) {
                var o = t.className,
                    a = t.environment,
                    c = t.onClick,
                    f = t.onMouseDown,
                    h = t.onMouseMove,
                    d = t.onMouseUp,
                    v = t.onBeforeRender,
                    y = t.onAfterRender,
                    A = function(t, e) {
                        var n = {};
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && 0 > e.indexOf(r) && (n[r] = t[r]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) 0 > e.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]])
                        }
                        return n
                    }(t, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    T = r.useRef(null),
                    R = r.useRef(new Map),
                    I = r.useRef(null),
                    O = r.useRef(0),
                    G = r.useRef(0),
                    P = r.useCallback(function() {
                        var t = T.current;
                        if (null != t) {
                            var e = t.getContext("2d");
                            if (null != e) {
                                e.clearRect(0, 0, t.width, t.height), null == v || v(e), R.current.forEach(function(n, r) {
                                    var i = n.confetti,
                                        o = n.spriteCanvas;
                                    i.update(a), i.draw(o, e), i.shouldDestroy(t, a) && R.current.delete(r)
                                }), null == y || y(e), R.current.size > 0 ? I.current = window.requestAnimationFrame(P) : (e.clearRect(0, 0, t.width, t.height), I.current = null);
                                var n = Date.now();
                                0 !== O.current && (G.current = 1e3 / (n - O.current)), O.current = n
                            }
                        }
                    }, [a, y, v]);
                r.useEffect(function() {
                    null != I.current && (window.cancelAnimationFrame(I.current), I.current = window.requestAnimationFrame(P))
                }, [P]);
                var L = r.useCallback(function(t, e) {
                        R.current.set(t.id, {
                            confetti: t,
                            spriteCanvas: e
                        }), null == I.current && P()
                    }, [P]),
                    N = r.useCallback(function(t, e, n, r, o) {
                        var a, u, c, f, h, d, v, y, A, T, R, I, O, G, P, N = (a = null !== (P = t.id) && void 0 !== P ? P : (0, i.v4)(), u = t, c = n, f = r, h = o, y = E((v = (d = u, p(p({
                            id: a
                        }, l), d))).size), T = (A = function(t, e) {
                            if (null != t) {
                                var n = e.sprites.findIndex(function(e) {
                                    return "string" == typeof t ? e.src === t && e.colorize : e.src === t.src && e.colorize === t.colorize
                                });
                                if (-1 !== n) return [t, n]
                            }
                            return C(e.sprites)
                        }(f, c))[0], R = A[1], I = function(t, e, n) {
                            if (!("string" == typeof(r = t) || r.colorize)) return 0;
                            var r, i = null != e ? n.colors.findIndex(function(t) {
                                return t === e
                            }) : -1;
                            return -1 !== i ? i : Math.floor(w(0, n.colors.length - 1))
                        }(null != f ? f : T, h, c), new s({
                            id: a,
                            position: E(v.position),
                            velocity: E(v.velocity),
                            rotation: (O = v.rotation, function(t) {
                                switch (t.type) {
                                    case "static":
                                        var e = M(t.value);
                                        return new g(new m(e.x), new m(e.y), new m(e.z));
                                    case "static-random":
                                        var n = M(t.minValue),
                                            r = M(t.maxValue);
                                        return new g(new m(w(n.x, r.x)), new m(w(n.y, r.y)), new m(w(n.z, r.z)));
                                    case "linear":
                                        e = M(t.value);
                                        var i = M(t.addValue);
                                        return new g(new S(e.x, i.x), new S(e.y, i.y), new S(e.z, i.z));
                                    case "linear-random":
                                        n = M(t.minValue), r = M(t.maxValue);
                                        var o = M(t.minAddValue),
                                            a = M(t.maxAddValue);
                                        return new g(new S(w(n.x, r.x), w(o.x, a.x)), new S(w(n.y, r.y), w(o.y, a.y)), new S(w(n.z, r.z), w(o.z, a.z)));
                                    case "oscillating":
                                        e = M(t.value);
                                        var u = M(t.start),
                                            c = M(t.final),
                                            s = M(t.duration),
                                            l = M(t.direction);
                                        return new g(new b(e.x, u.x, c.x, s.x, l.x, t.easingFunction), new b(e.y, u.y, c.y, s.z, l.y, t.easingFunction), new b(e.z, u.z, c.z, s.z, l.z, t.easingFunction));
                                    case "oscillating-random":
                                        n = M(t.minValue), r = M(t.maxValue);
                                        var f = M(t.minStart),
                                            h = M(t.maxStart),
                                            d = M(t.minFinal),
                                            p = M(t.maxFinal),
                                            v = M(t.minDuration),
                                            y = M(t.maxDuration),
                                            A = M(t.minDirection),
                                            E = M(t.maxDirection);
                                        return new g(new b(w(n.x, r.x), w(f.x, h.x), w(d.x, p.x), w(v.x, y.x), x(A.x, E.x), C(t.easingFunctions)[0]), new b(w(n.y, r.y), w(f.y, h.y), w(d.y, p.y), w(v.y, y.y), x(A.y, E.y), C(t.easingFunctions)[0]), new b(w(n.z, r.z), w(f.z, h.z), w(d.z, p.z), w(v.z, y.z), x(A.z, E.z), C(t.easingFunctions)[0]))
                                }
                            }(p(p({}, O), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: E(v.dragCoefficient),
                            size: y,
                            opacity: (G = v.opacity, function(t) {
                                switch (t.type) {
                                    case "static":
                                        return new m(t.value);
                                    case "static-random":
                                        return new m(w(t.minValue, t.maxValue));
                                    case "linear":
                                        return new S(t.value, t.addValue);
                                    case "linear-random":
                                        return new S(w(t.minValue, t.maxValue), w(t.minAddValue, t.maxAddValue));
                                    case "oscillating":
                                        return new b(t.value, t.start, t.final, t.duration, t.direction, t.easingFunction);
                                    case "oscillating-random":
                                        return new b(w(t.minValue, t.maxValue), w(t.minStart, t.maxStart), w(t.minFinal, t.maxFinal), w(t.minDuration, t.maxDuration), x(t.minDirection, t.maxDirection), C(t.easingFunctions)[0])
                                }
                            }(p(p({}, G), {
                                valueType: "number"
                            }))),
                            spriteX: I * c.spriteWidth + 2 * I,
                            spriteY: R * c.spriteHeight + 2 * R,
                            spriteWidth: c.spriteWidth,
                            spriteHeight: c.spriteHeight
                        }));
                        return L(N, e), N
                    }, [L]),
                    B = r.useCallback(function(t) {
                        R.current.delete(t)
                    }, []),
                    U = r.useCallback(function() {
                        return R.current.clear()
                    }, []),
                    F = r.useCallback(function() {
                        return T.current
                    }, []);
                r.useImperativeHandle(e, function() {
                    return {
                        createConfetti: N,
                        addConfetti: L,
                        deleteConfetti: B,
                        clearConfetti: U,
                        getCanvas: F
                    }
                }, [N, L, B, U, F]);
                var D = r.useCallback(function(t, e) {
                        var n, r, i = e.clickHandler,
                            o = e.mouseHandler;
                        if (null != i || null != o) {
                            var c = null === (n = T.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != c) {
                                var s = function(t, e) {
                                    if (null == e) throw Error("element should not be null");
                                    var n = e.getBoundingClientRect();
                                    return {
                                        x: t.clientX - n.left,
                                        y: t.clientY - n.top
                                    }
                                }(t, T.current);
                                if (u(s, {
                                        x: c.left,
                                        y: c.top,
                                        width: c.width,
                                        height: c.height
                                    })) {
                                    if (null != o) return o(t);
                                    if (null != i) {
                                        var l = -1e3 / G.current * 2,
                                            f = function(t, e) {
                                                for (var n = 0, r = Array.from(t.values()); n < r.length; n++) {
                                                    var i = r[n];
                                                    if (null != i && e(i)) return i
                                                }
                                                return null
                                            }(R.current, function(t) {
                                                var e = t.confetti,
                                                    n = e.previewPositionUpdate(a, l);
                                                return u(s, {
                                                    x: n.x - e.width / 2,
                                                    y: n.y - e.height / 2,
                                                    width: e.width,
                                                    height: e.height
                                                })
                                            });
                                        i(t, null !== (r = null == f ? void 0 : f.confetti) && void 0 !== r ? r : null)
                                    }
                                }
                            }
                        }
                    }, [a]),
                    K = r.useCallback(function(t) {
                        return D(t, {
                            clickHandler: c
                        })
                    }, [D, c]),
                    V = r.useCallback(function(t) {
                        return D(t, {
                            clickHandler: f
                        })
                    }, [D, f]),
                    H = r.useCallback(function(t) {
                        return D(t, {
                            mouseHandler: h
                        })
                    }, [D, h]),
                    z = r.useCallback(function(t) {
                        return D(t, {
                            mouseHandler: d
                        })
                    }, [D, d]);
                return r.useEffect(function() {
                    var t = function(t, e, n) {
                        null != n && window.addEventListener(t, e)
                    };
                    return t("click", K, c), t("mousedown", V, f), t("mousemove", H, h), t("mouseup", z, d),
                        function() {
                            window.removeEventListener("click", K), window.removeEventListener("mousedown", V), window.removeEventListener("mousemove", H), window.removeEventListener("mouseup", H)
                        }
                }, [K, V, H, z, c, f, h, d]), r.useEffect(function() {
                    var t = T.current,
                        e = new ResizeObserver(function() {
                            ! function(t) {
                                if (null != t) {
                                    var e = t.getBoundingClientRect(),
                                        r = e.width,
                                        i = e.height;
                                    t.width = r * n.g.devicePixelRatio, t.height = i * n.g.devicePixelRatio
                                }
                            }(T.current)
                        });
                    return null != t && e.observe(t),
                        function() {
                            null != t && e.unobserve(t)
                        }
                }, []), r.createElement("canvas", p({}, A, {
                    className: o,
                    ref: T
                }))
            });
            ! function(t, e) {
                void 0 === e && (e = {});
                var n = e.insertAt;
                if (t && "undefined" != typeof document) {
                    var r = document.head || document.getElementsByTagName("head")[0],
                        i = document.createElement("style");
                    i.type = "text/css", "top" === n && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t))
                }
            }(".SpriteCanvas-module_spriteCanvasHidden__ndzQV {\n  display: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -100%;\n}\n");
            var R = r.forwardRef(function(t, e) {
                var n, o = t.className,
                    u = t.visible,
                    c = void 0 !== u && u,
                    s = t.sprites,
                    l = t.colors,
                    f = t.spriteWidth,
                    h = t.spriteHeight,
                    d = r.useRef(null),
                    p = r.useRef([]),
                    v = r.useRef(!1),
                    y = r.useRef({});
                r.useImperativeHandle(e, function() {
                    return {
                        getCanvas: function() {
                            return d.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: p.current,
                                colors: l,
                                spriteWidth: f,
                                spriteHeight: h
                            }
                        },
                        addReadyListener: function(t) {
                            var e = (0, i.v4)();
                            return y.current[e] = t, e
                        },
                        removeReadyListener: function(t) {
                            delete y.current[t]
                        },
                        isReady: v.current
                    }
                }, [l, h, f]);
                var g = r.useCallback(function() {
                        var t = d.current,
                            e = null == t ? void 0 : t.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != e && null != t && (e.clearRect(0, 0, t.width, t.height), p.current.forEach(function(t, n) {
                            var r = function(r, i) {
                                var o = f * i + 2 * i,
                                    a = h * n + 2 * n;
                                if (e.drawImage(t.image, o, a, f, h), null != r) {
                                    for (var u, c, s = e.getImageData(o, a, f, h), l = ("#" === (u = r)[0] && (u = u.slice(1)), {
                                            r: (c = parseInt(u, 16)) >> 16 & 255,
                                            g: c >> 8 & 255,
                                            b: 255 & c
                                        }), d = 0; d < s.data.length; d += 4) s.data[d] = l.r, s.data[d + 1] = l.g, s.data[d + 2] = l.b;
                                    e.putImageData(s, o, a)
                                }
                            };
                            t.colorize ? l.forEach(function(t, e) {
                                return r(t, e)
                            }) : r(null, 0)
                        }))
                    }, [l, h, f]),
                    m = r.useCallback(function() {
                        var t = s.map(function(t) {
                            var e = new Image,
                                n = "string" == typeof t ? t : t.src,
                                r = "string" == typeof t || t.colorize;
                            e.src = n;
                            var i = new Promise(function(t) {
                                e.onload = t
                            });
                            return {
                                colorize: r,
                                image: e,
                                src: n,
                                loadPromise: i
                            }
                        });
                        return Promise.all(t.map(function(t) {
                            return t.loadPromise
                        })).then(function() {
                            p.current = t.map(function(t) {
                                return {
                                    colorize: t.colorize,
                                    image: t.image,
                                    src: t.src
                                }
                            })
                        })
                    }, [s]),
                    S = r.useCallback(function(t) {
                        for (var e in y.current) y.current[e](t)
                    }, []),
                    b = r.useCallback(function() {
                        var t, e, n, r;
                        return t = void 0, e = void 0, n = void 0, r = function() {
                            return function(t, e) {
                                var n, r, i, o, a = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & i[0]) throw i[1];
                                        return i[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return o = {
                                    next: u(0),
                                    throw: u(1),
                                    return: u(2)
                                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                                    return this
                                }), o;

                                function u(u) {
                                    return function(c) {
                                        return function(u) {
                                            if (n) throw TypeError("Generator is already executing.");
                                            for (; o && (o = 0, u[0] && (a = 0)), a;) try {
                                                if (n = 1, r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) return i;
                                                switch (r = 0, i && (u = [2 & u[0], i.value]), u[0]) {
                                                    case 0:
                                                    case 1:
                                                        i = u;
                                                        break;
                                                    case 4:
                                                        return a.label++, {
                                                            value: u[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        a.label++, r = u[1], u = [0];
                                                        continue;
                                                    case 7:
                                                        u = a.ops.pop(), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                                            a = 0;
                                                            continue
                                                        }
                                                        if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                                                            a.label = u[1];
                                                            break
                                                        }
                                                        if (6 === u[0] && a.label < i[1]) {
                                                            a.label = i[1], i = u;
                                                            break
                                                        }
                                                        if (i && a.label < i[2]) {
                                                            a.label = i[2], a.ops.push(u);
                                                            break
                                                        }
                                                        i[2] && a.ops.pop(), a.trys.pop();
                                                        continue
                                                }
                                                u = e.call(t, a)
                                            } catch (t) {
                                                u = [6, t], r = 0
                                            } finally {
                                                n = i = 0
                                            }
                                            if (5 & u[0]) throw u[1];
                                            return {
                                                value: u[0] ? u[1] : void 0,
                                                done: !0
                                            }
                                        }([u, c])
                                    }
                                }
                            }(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, m()];
                                    case 1:
                                        return t.sent(), g(), v.current = !0, S(!0), [2]
                                }
                            })
                        }, new(n || (n = Promise))(function(i, o) {
                            function a(t) {
                                try {
                                    c(r.next(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function u(t) {
                                try {
                                    c(r.throw(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function c(t) {
                                var e;
                                t.done ? i(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                                    t(e)
                                })).then(a, u)
                            }
                            c((r = r.apply(t, e || [])).next())
                        })
                    }, [S, m, g]);
                return r.useEffect(function() {
                    b()
                }, [b]), r.useEffect(function() {
                    return function() {
                        return S(!1)
                    }
                }, [S]), r.useEffect(function() {
                    null != d.current && (d.current.width = (f + 2) * Math.max(l.length, 1), d.current.height = (h + 2) * s.length)
                }, [l.length, h, f, s.length]), r.createElement("canvas", {
                    ref: d,
                    className: a(o, ((n = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !c, n))
                })
            });

            function I(t, e) {
                var n, i = r.useState(null !== (n = null == e ? void 0 : e.isReady) && void 0 !== n && n),
                    o = i[0],
                    a = i[1];
                r.useEffect(function() {
                    var t = null == e ? void 0 : e.addReadyListener(a);
                    return function() {
                        null != t && (null == e || e.removeReadyListener(t))
                    }
                }, [e]);
                var u = r.useCallback(function(n, r) {
                        var i = void 0 === r ? {} : r,
                            o = i.sprite,
                            a = i.color,
                            u = null == e ? void 0 : e.getCreateData(),
                            c = null == e ? void 0 : e.getCanvas();
                        if (null != c && null != u && 0 !== u.sprites.length) return null == t ? void 0 : t.createConfetti(n, c, u, o, a)
                    }, [t, e]),
                    c = r.useCallback(function(t, e, n) {
                        for (var r = [], i = 0; i < e; i++) {
                            var o = u(t, n);
                            o && r.push(o)
                        }
                        return r
                    }, [u]),
                    s = r.useCallback(function(n) {
                        var r = null == e ? void 0 : e.getCanvas();
                        null != r && (null == t || t.addConfetti(n, r))
                    }, [t, e]),
                    l = r.useCallback(function(e) {
                        null == t || t.deleteConfetti(e)
                    }, [t]),
                    f = r.useCallback(function() {
                        return null == t ? void 0 : t.clearConfetti()
                    }, [t]);
                return r.useMemo(function() {
                    return {
                        createConfetti: u,
                        createMultipleConfetti: c,
                        addConfetti: s,
                        clearConfetti: f,
                        deleteConfetti: l,
                        isReady: o && null != e && null != t
                    }
                }, [s, f, t, u, c, l, o, e])
            }
        },
        238455: function(t, e, n) {
            var r = n("63533"),
                i = n("651558"),
                o = n("349046"),
                a = n("153997"),
                u = n("820458"),
                c = n("663652"),
                s = Object.prototype.hasOwnProperty;
            t.exports = function(t, e) {
                var n = o(t),
                    l = !n && i(t),
                    f = !n && !l && a(t),
                    h = !n && !l && !f && c(t),
                    d = n || l || f || h,
                    p = d ? r(t.length, String) : [],
                    v = p.length;
                for (var y in t)(e || s.call(t, y)) && !(d && ("length" == y || f && ("offset" == y || "parent" == y) || h && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || u(y, v))) && p.push(y);
                return p
            }
        },
        291002: function(t, e, n) {
            var r = n("109633"),
                i = n("261711");
            t.exports = function(t) {
                return i(r(t))
            }
        },
        85722: function(t, e, n) {
            var r = n("616691"),
                i = n("960052"),
                o = n("509492"),
                a = {};
            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
            t.exports = function(t) {
                return o(t) && i(t.length) && !!a[r(t)]
            }
        },
        891183: function(t, e, n) {
            var r = n("356827"),
                i = n("57100"),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!r(t)) return i(t);
                var e = [];
                for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
                return e
            }
        },
        773988: function(t, e, n) {
            var r = n("261711"),
                i = n("211919");
            t.exports = function(t) {
                return r(i(t))
            }
        },
        63533: function(t, e, n) {
            t.exports = function(t, e) {
                for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                return r
            }
        },
        870686: function(t, e, n) {
            t.exports = function(t) {
                return function(e) {
                    return t(e)
                }
            }
        },
        109521: function(t, e, n) {
            var r = n("107327");
            t.exports = function(t, e) {
                return r(e, function(e) {
                    return t[e]
                })
            }
        },
        109633: function(t, e, n) {
            t.exports = function(t, e) {
                var n = -1,
                    r = t.length;
                for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
                return e
            }
        },
        356827: function(t, e, n) {
            var r = Object.prototype;
            t.exports = function(t) {
                var e = t && t.constructor;
                return t === ("function" == typeof e && e.prototype || r)
            }
        },
        57100: function(t, e, n) {
            var r = n("676315")(Object.keys, Object);
            t.exports = r
        },
        961077: function(t, e, n) {
            t = n.nmd(t);
            var r = n("71890"),
                i = "object" == typeof e && e && !e.nodeType && e,
                o = i && "object" == typeof t && t && !t.nodeType && t,
                a = o && o.exports === i && r.process,
                u = function() {
                    try {
                        var t = o && o.require && o.require("util").types;
                        if (t) return t;
                        return a && a.binding && a.binding("util")
                    } catch (t) {}
                }();
            t.exports = u
        },
        676315: function(t, e, n) {
            t.exports = function(t, e) {
                return function(n) {
                    return t(e(n))
                }
            }
        },
        261711: function(t, e, n) {
            var r = n("54506");
            t.exports = function(t, e) {
                var n = -1,
                    i = t.length,
                    o = i - 1;
                for (e = void 0 === e ? i : e; ++n < e;) {
                    var a = r(n, o),
                        u = t[a];
                    t[a] = t[n], t[n] = u
                }
                return t.length = e, t
            }
        },
        153997: function(t, e, n) {
            t = n.nmd(t);
            var r = n("619146"),
                i = n("108028"),
                o = "object" == typeof e && e && !e.nodeType && e,
                a = o && "object" == typeof t && t && !t.nodeType && t,
                u = a && a.exports === o ? r.Buffer : void 0,
                c = u ? u.isBuffer : void 0;
            t.exports = c || i
        },
        663652: function(t, e, n) {
            var r = n("85722"),
                i = n("870686"),
                o = n("961077"),
                a = o && o.isTypedArray,
                u = a ? i(a) : r;
            t.exports = u
        },
        905269: function(t, e, n) {
            var r = n("238455"),
                i = n("891183"),
                o = n("355653");
            t.exports = function(t) {
                return o(t) ? r(t) : i(t)
            }
        },
        906288: function(t, e, n) {
            var r = n("291002"),
                i = n("773988"),
                o = n("349046");
            t.exports = function(t) {
                return (o(t) ? r : i)(t)
            }
        },
        108028: function(t, e, n) {
            t.exports = function() {
                return !1
            }
        },
        211919: function(t, e, n) {
            var r = n("109521"),
                i = n("905269");
            t.exports = function(t) {
                return null == t ? [] : r(t, i(t))
            }
        },
        873101: function(t, e, n) {
            if (!r) var r = {
                map: function(t, e) {
                    var n = {};
                    return e ? t.map(function(t, r) {
                        return n.index = r, e.call(n, t)
                    }) : t.slice()
                },
                naturalOrder: function(t, e) {
                    return t < e ? -1 : t > e ? 1 : 0
                },
                sum: function(t, e) {
                    var n = {};
                    return t.reduce(e ? function(t, r, i) {
                        return n.index = i, t + e.call(n, r)
                    } : function(t, e) {
                        return t + e
                    }, 0)
                },
                max: function(t, e) {
                    return Math.max.apply(null, e ? r.map(t, e) : t)
                }
            };
            var i = function() {
                var t = 3;

                function e(t, e, n) {
                    return (t << 10) + (e << 5) + n
                }

                function n(t) {
                    var e = [],
                        n = !1;

                    function r() {
                        e.sort(t), n = !0
                    }
                    return {
                        push: function(t) {
                            e.push(t), n = !1
                        },
                        peek: function(t) {
                            return !n && r(), void 0 === t && (t = e.length - 1), e[t]
                        },
                        pop: function() {
                            return !n && r(), e.pop()
                        },
                        size: function() {
                            return e.length
                        },
                        map: function(t) {
                            return e.map(t)
                        },
                        debug: function() {
                            return !n && r(), e
                        }
                    }
                }

                function i(t, e, n, r, i, o, a) {
                    this.r1 = t, this.r2 = e, this.g1 = n, this.g2 = r, this.b1 = i, this.b2 = o, this.histo = a
                }

                function o() {
                    this.vboxes = new n(function(t, e) {
                        return r.naturalOrder(t.vbox.count() * t.vbox.volume(), e.vbox.count() * e.vbox.volume())
                    })
                }
                return i.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var n = this.histo;
                        if (!this._count_set || t) {
                            var r, i, o, a = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (o = this.b1; o <= this.b2; o++) a += n[e(r, i, o)] || 0;
                            this._count = a, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var r, i, o, a, u = 0,
                                c = 8,
                                s = 0,
                                l = 0,
                                f = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (o = this.g1; o <= this.g2; o++)
                                    for (a = this.b1; a <= this.b2; a++) u += r = n[e(i, o, a)] || 0, s += r * (i + .5) * c, l += r * (o + .5) * c, f += r * (a + .5) * c;
                            u ? this._avg = [~~(s / u), ~~(l / u), ~~(f / u)] : this._avg = [~~(c * (this.r1 + this.r2 + 1) / 2), ~~(c * (this.g1 + this.g2 + 1) / 2), ~~(c * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(e) {
                        var n = e[0] >> t;
                        return gval = e[1] >> t, bval = e[2] >> t, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, o.prototype = {
                    push: function(t) {
                        this.vboxes.push({
                            vbox: t,
                            color: t.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map(function(t) {
                            return t.color
                        })
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(t) {
                        for (var e = this.vboxes, n = 0; n < e.size(); n++)
                            if (e.peek(n).vbox.contains(t)) return e.peek(n).color;
                        return this.nearest(t)
                    },
                    nearest: function(t) {
                        for (var e, n, r, i = this.vboxes, o = 0; o < i.size(); o++)((n = Math.sqrt(Math.pow(t[0] - i.peek(o).color[0], 2) + Math.pow(t[1] - i.peek(o).color[1], 2) + Math.pow(t[2] - i.peek(o).color[2], 2))) < e || void 0 === e) && (e = n, r = i.peek(o).color);
                        return r
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort(function(t, e) {
                            return r.naturalOrder(r.sum(t.color), r.sum(e.color))
                        });
                        var e = t[0].color;
                        e[0] < 5 && e[1] < 5 && e[2] < 5 && (t[0].color = [0, 0, 0]);
                        var n = t.length - 1,
                            i = t[n].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (t[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(a, u) {
                        if (!a.length || u < 2 || u > 256) return !1;
                        var c, s, l, f, h, d, p, v, y, g, m, S, b, w, C, x, A = (c = a, h = Array(32768), c.forEach(function(n) {
                                l = n[0] >> t, f = n[1] >> t, h[s = e(l, f, n[2] >> t)] = (h[s] || 0) + 1
                            }), h),
                            M = 0;
                        A.forEach(function() {
                            M++
                        });
                        var E = (d = a, p = A, m = 1e6, S = 0, b = 1e6, w = 0, C = 1e6, x = 0, d.forEach(function(e) {
                                v = e[0] >> t, y = e[1] >> t, g = e[2] >> t, v < m ? m = v : v > S && (S = v), y < b ? b = y : y > w && (w = y), g < C ? C = g : g > x && (x = g)
                            }), new i(m, S, b, w, C, x, p)),
                            T = new n(function(t, e) {
                                return r.naturalOrder(t.count(), e.count())
                            });

                        function R(t, n) {
                            for (var i, o = 1, a = 0; a < 1e3;) {
                                if (!(i = t.pop()).count()) {
                                    t.push(i), a++;
                                    continue
                                }
                                var u = function(t, n) {
                                        if (n.count()) {
                                            var i = n.r2 - n.r1 + 1,
                                                o = n.g2 - n.g1 + 1,
                                                a = n.b2 - n.b1 + 1,
                                                u = r.max([i, o, a]);
                                            if (1 == n.count()) return [n.copy()];
                                            var c, s, l, f, h, d = 0,
                                                p = [],
                                                v = [];
                                            if (u == i)
                                                for (c = n.r1; c <= n.r2; c++) {
                                                    for (f = 0, s = n.g1; s <= n.g2; s++)
                                                        for (l = n.b1; l <= n.b2; l++) f += t[h = e(c, s, l)] || 0;
                                                    d += f, p[c] = d
                                                } else if (u == o)
                                                    for (c = n.g1; c <= n.g2; c++) {
                                                        for (f = 0, s = n.r1; s <= n.r2; s++)
                                                            for (l = n.b1; l <= n.b2; l++) f += t[h = e(s, c, l)] || 0;
                                                        d += f, p[c] = d
                                                    } else
                                                        for (c = n.b1; c <= n.b2; c++) {
                                                            for (f = 0, s = n.r1; s <= n.r2; s++)
                                                                for (l = n.g1; l <= n.g2; l++) f += t[h = e(s, l, c)] || 0;
                                                            d += f, p[c] = d
                                                        }
                                            return p.forEach(function(t, e) {
                                                v[e] = d - t
                                            }), y(u == i ? "r" : u == o ? "g" : "b")
                                        }

                                        function y(t) {
                                            var e, r, i, o, a, u = t + "1",
                                                s = t + "2",
                                                l = 0;
                                            for (c = n[u]; c <= n[s]; c++)
                                                if (p[c] > d / 2) {
                                                    for (i = n.copy(), o = n.copy(), e = c - n[u], a = e <= (r = n[s] - c) ? Math.min(n[s] - 1, ~~(c + r / 2)) : Math.max(n[u], ~~(c - 1 - e / 2)); !p[a];) a++;
                                                    for (l = v[a]; !l && p[a - 1];) l = v[--a];
                                                    return i[s] = a, o[u] = i[s] + 1, [i, o]
                                                }
                                        }
                                    }(A, i),
                                    c = u[0],
                                    s = u[1];
                                if (!c) return;
                                if (t.push(c), s && (t.push(s), o++), o >= n || a++ > 1e3) return
                            }
                        }
                        T.push(E), R(T, .75 * u);
                        for (var I = new n(function(t, e) {
                                return r.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
                            }); T.size();) I.push(T.pop());
                        R(I, u - I.size());
                        for (var O = new o; I.size();) O.push(I.pop());
                        return O
                    }
                }
            }();
            t.exports = i.quantize
        },
        962429: function(t, e, n) {
            "use strict";

            function r(t, e) {
                if (t.length !== e.length) return !1;
                for (let n = 0; n < e.length && n < t.length; n++)
                    if (!Object.is(t[n], e[n])) return !1;
                return !0
            }
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            })
        },
        365444: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return i.default
                },
                useLazyValue: function() {
                    return o.default
                }
            });
            var r = n("732427"),
                i = n("866490"),
                o = n("246105")
        },
        732427: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var r = n("773670");

            function i() {
                let [, t] = (0, r.useState)({});
                return (0, r.useCallback)(() => t({}), [])
            }
        },
        246105: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("773670");
            let i = {};

            function o(t) {
                let e = (0, r.useRef)(i);
                return e.current === i && (e.current = t()), e.current
            }
        },
        866490: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var r = n("773670"),
                i = n("962429");
            let o = [];

            function a(t, e) {
                let n = (0, r.useRef)(),
                    a = (0, r.useRef)(o);
                return a.current === o ? (n.current = t(), a.current = e) : !(0, i.default)(e, a.current) && (n.current = t(), a.current = e), n.current
            }
        },
        212653: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                persist: function() {
                    return l
                }
            });
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var r = Object.defineProperty,
                i = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                a = Object.prototype.propertyIsEnumerable,
                u = (t, e, n) => e in t ? r(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : t[e] = n,
                c = (t, e) => {
                    for (var n in e || (e = {})) o.call(e, n) && u(t, n, e[n]);
                    if (i)
                        for (var n of i(e)) a.call(e, n) && u(t, n, e[n]);
                    return t
                };
            let s = t => e => {
                    try {
                        let n = t(e);
                        if (n instanceof Promise) return n;
                        return {
                            then: t => s(t)(n),
                            catch (t) {
                                return this
                            }
                        }
                    } catch (t) {
                        return {
                            then(t) {
                                return this
                            },
                            catch: e => s(e)(t)
                        }
                    }
                },
                l = (t, e) => (n, r, i) => {
                    let o, a, u = c({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: t => t,
                        version: 0,
                        merge: (t, e) => c(c({}, e), t)
                    }, e);
                    (u.blacklist || u.whitelist) && console.warn("The ".concat(u.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let l = !1,
                        f = new Set,
                        h = new Set;
                    try {
                        o = u.getStorage()
                    } catch (t) {}
                    if (!o) return t(function() {
                        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(u.name, "', the given storage is currently unavailable.")), n(...e)
                    }, r, i);
                    !o.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(u.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let d = s(u.serialize),
                        p = () => {
                            let t;
                            let e = u.partialize(c({}, r()));
                            u.whitelist && Object.keys(e).forEach(t => {
                                var n;
                                (null == (n = u.whitelist) ? void 0 : n.includes(t)) || delete e[t]
                            }), u.blacklist && u.blacklist.forEach(t => delete e[t]);
                            let n = d({
                                state: e,
                                version: u.version
                            }).then(t => o.setItem(u.name, t)).catch(e => {
                                t = e
                            });
                            if (t) throw t;
                            return n
                        },
                        v = i.setState;
                    i.setState = (t, e) => {
                        v(t, e), p()
                    };
                    let y = t(function() {
                            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                            n(...e), p()
                        }, r, i),
                        g = () => {
                            var t;
                            if (!o) return;
                            l = !1, f.forEach(t => t(r()));
                            let e = (null == (t = u.onRehydrateStorage) ? void 0 : t.call(u, r())) || void 0;
                            return s(o.getItem.bind(o))(u.name).then(t => {
                                if (t) return u.deserialize(t)
                            }).then(t => {
                                if (t) {
                                    if ("number" != typeof t.version || t.version === u.version) return t.state;
                                    if (u.migrate) return u.migrate(t.state, t.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(t => {
                                var e;
                                return n(a = u.merge(t, null != (e = r()) ? e : y), !0), p()
                            }).then(() => {
                                null == e || e(a, void 0), l = !0, h.forEach(t => t(a))
                            }).catch(t => {
                                null == e || e(void 0, t)
                            })
                        };
                    return i.persist = {
                        setOptions: t => {
                            u = c(c({}, u), t), t.getStorage && (o = t.getStorage())
                        },
                        clearStorage: () => {
                            var t;
                            null == (t = null == o ? void 0 : o.removeItem) || t.call(o, u.name)
                        },
                        rehydrate: () => g(),
                        hasHydrated: () => l,
                        onHydrate: t => (f.add(t), () => {
                            f.delete(t)
                        }),
                        onFinishHydration: t => (h.add(t), () => {
                            h.delete(t)
                        })
                    }, g(), a || y
                }
        },
        505143: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                P: function() {
                    return Z
                },
                match: function() {
                    return X
                }
            });
            let r = Symbol.for("@ts-pattern/matcher"),
                i = Symbol.for("@ts-pattern/isVariadic"),
                o = "@ts-pattern/anonymous-select-key",
                a = t => !!(t && "object" == typeof t),
                u = t => t && !!t[r],
                c = (t, e, n) => {
                    if (u(t)) {
                        let i = t[r](),
                            {
                                matched: o,
                                selections: a
                            } = i.match(e);
                        return o && a && Object.keys(a).forEach(t => n(t, a[t])), o
                    }
                    if (a(t)) {
                        if (!a(e)) return !1;
                        if (Array.isArray(t)) {
                            if (!Array.isArray(e)) return !1;
                            let r = [],
                                o = [],
                                a = [];
                            for (let e of t.keys()) {
                                let n = t[e];
                                u(n) && n[i] ? a.push(n) : a.length ? o.push(n) : r.push(n)
                            }
                            if (a.length) {
                                if (a.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (e.length < r.length + o.length) return !1;
                                let t = e.slice(0, r.length),
                                    i = 0 === o.length ? [] : e.slice(-o.length),
                                    u = e.slice(r.length, 0 === o.length ? 1 / 0 : -o.length);
                                return r.every((e, r) => c(e, t[r], n)) && o.every((t, e) => c(t, i[e], n)) && (0 === a.length || c(a[0], u, n))
                            }
                            return t.length === e.length && t.every((t, r) => c(t, e[r], n))
                        }
                        return Object.keys(t).every(i => {
                            let o = t[i];
                            return (i in e || u(o) && "optional" === o[r]().matcherType) && c(o, e[i], n)
                        })
                    }
                    return Object.is(e, t)
                },
                s = t => {
                    var e, n, i;
                    return a(t) ? u(t) ? null != (e = null == (n = (i = t[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? e : [] : Array.isArray(t) ? l(t, s) : l(Object.values(t), s) : []
                },
                l = (t, e) => t.reduce((t, n) => t.concat(e(n)), []);

            function f(t) {
                return Object.assign(t, {
                    optional: () => h(t),
                    and: e => v(t, e),
                    or: e => y(t, e),
                    select: e => void 0 === e ? m(t) : m(e, t)
                })
            }

            function h(t) {
                return f({
                    [r]: () => ({
                        match: e => {
                            let n = {},
                                r = (t, e) => {
                                    n[t] = e
                                };
                            return void 0 === e ? (s(t).forEach(t => r(t, void 0)), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: c(t, e, r),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => s(t),
                        matcherType: "optional"
                    })
                })
            }
            let d = (t, e) => {
                    for (let n of t)
                        if (!e(n)) return !1;
                    return !0
                },
                p = (t, e) => {
                    for (let [n, r] of t.entries())
                        if (!e(r, n)) return !1;
                    return !0
                };

            function v() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return f({
                    [r]: () => ({
                        match: t => {
                            let n = {},
                                r = (t, e) => {
                                    n[t] = e
                                };
                            return {
                                matched: e.every(e => c(e, t, r)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => l(e, s),
                        matcherType: "and"
                    })
                })
            }

            function y() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return f({
                    [r]: () => ({
                        match: t => {
                            let n = {},
                                r = (t, e) => {
                                    n[t] = e
                                };
                            return l(e, s).forEach(t => r(t, void 0)), {
                                matched: e.some(e => c(e, t, r)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => l(e, s),
                        matcherType: "or"
                    })
                })
            }

            function g(t) {
                return {
                    [r]: () => ({
                        match: e => ({
                            matched: !!t(e)
                        })
                    })
                }
            }

            function m() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                let i = "string" == typeof e[0] ? e[0] : void 0,
                    a = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
                return f({
                    [r]: () => ({
                        match: t => {
                            let e = {
                                [null != i ? i : o]: t
                            };
                            return {
                                matched: void 0 === a || c(a, t, (t, n) => {
                                    e[t] = n
                                }),
                                selections: e
                            }
                        },
                        getSelectionKeys: () => [null != i ? i : o].concat(void 0 === a ? [] : s(a))
                    })
                })
            }

            function S(t) {
                return "number" == typeof t
            }

            function b(t) {
                return "string" == typeof t
            }

            function w(t) {
                return "bigint" == typeof t
            }
            let C = f(g(function(t) {
                    return !0
                })),
                x = t => Object.assign(f(t), {
                    startsWith: e => x(v(t, g(t => b(t) && t.startsWith(e)))),
                    endsWith: e => x(v(t, g(t => b(t) && t.endsWith(e)))),
                    minLength: e => {
                        var n;
                        return x(v(t, (n = e, g(t => b(t) && t.length >= n))))
                    },
                    maxLength: e => {
                        var n;
                        return x(v(t, (n = e, g(t => b(t) && t.length <= n))))
                    },
                    includes: e => x(v(t, g(t => b(t) && t.includes(e)))),
                    regex: e => x(v(t, g(t => b(t) && !!t.match(e))))
                }),
                A = x(g(b)),
                M = (t, e) => g(n => S(n) && t <= n && e >= n),
                E = t => g(e => S(e) && e < t),
                T = t => g(e => S(e) && e > t),
                R = t => g(e => S(e) && e <= t),
                I = t => g(e => S(e) && e >= t),
                O = () => g(t => S(t) && Number.isInteger(t)),
                G = () => g(t => S(t) && Number.isFinite(t)),
                P = () => g(t => S(t) && t > 0),
                L = () => g(t => S(t) && t < 0),
                N = t => Object.assign(f(t), {
                    between: (e, n) => N(v(t, M(e, n))),
                    lt: e => N(v(t, E(e))),
                    gt: e => N(v(t, T(e))),
                    lte: e => N(v(t, R(e))),
                    gte: e => N(v(t, I(e))),
                    int: () => N(v(t, O())),
                    finite: () => N(v(t, G())),
                    positive: () => N(v(t, P())),
                    negative: () => N(v(t, L()))
                }),
                B = N(g(S)),
                U = (t, e) => g(n => w(n) && t <= n && e >= n),
                F = t => g(e => w(e) && e < t),
                D = t => g(e => w(e) && e > t),
                K = t => g(e => w(e) && e <= t),
                V = t => g(e => w(e) && e >= t),
                H = () => g(t => w(t) && t > 0),
                z = () => g(t => w(t) && t < 0),
                _ = t => Object.assign(f(t), {
                    between: (e, n) => _(v(t, U(e, n))),
                    lt: e => _(v(t, F(e))),
                    gt: e => _(v(t, D(e))),
                    lte: e => _(v(t, K(e))),
                    gte: e => _(v(t, V(e))),
                    positive: () => _(v(t, H())),
                    negative: () => _(v(t, z()))
                }),
                j = _(g(w)),
                W = f(g(function(t) {
                    return "boolean" == typeof t
                })),
                k = f(g(function(t) {
                    return "symbol" == typeof t
                })),
                Y = f(g(function(t) {
                    return null == t
                }));
            var Z = {
                __proto__: null,
                matcher: r,
                optional: h,
                array: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return function t(e) {
                        var n;
                        return Object.assign((n = e, Object.assign(n, {
                            *[Symbol.iterator]() {
                                yield Object.assign(n, {
                                    [i]: !0
                                })
                            }
                        })), {
                            optional: () => t(h(e)),
                            select: n => t(void 0 === n ? m(e) : m(n, e))
                        })
                    }({
                        [r]: () => ({
                            match: t => {
                                if (!Array.isArray(t)) return {
                                    matched: !1
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                let n = e[0],
                                    r = {};
                                if (0 === t.length) return s(n).forEach(t => {
                                    r[t] = []
                                }), {
                                    matched: !0,
                                    selections: r
                                };
                                let i = (t, e) => {
                                    r[t] = (r[t] || []).concat([e])
                                };
                                return {
                                    matched: t.every(t => c(n, t, i)),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : s(e[0])
                        })
                    })
                },
                set: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return f({
                        [r]: () => ({
                            match: t => {
                                if (!(t instanceof Set)) return {
                                    matched: !1
                                };
                                let n = {};
                                if (0 === t.size) return {
                                    matched: !0,
                                    selections: n
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                let r = (t, e) => {
                                        n[t] = (n[t] || []).concat([e])
                                    },
                                    i = e[0];
                                return {
                                    matched: d(t, t => c(i, t, r)),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : s(e[0])
                        })
                    })
                },
                map: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return f({
                        [r]: () => ({
                            match: t => {
                                var n;
                                if (!(t instanceof Map)) return {
                                    matched: !1
                                };
                                let r = {};
                                if (0 === t.size) return {
                                    matched: !0,
                                    selections: r
                                };
                                let i = (t, e) => {
                                    r[t] = (r[t] || []).concat([e])
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                if (1 === e.length) throw Error("`P.map` wasn't given enough arguments. Expected (key, value), received ".concat(null == (n = e[0]) ? void 0 : n.toString()));
                                let [o, a] = e;
                                return {
                                    matched: p(t, (t, e) => {
                                        let n = c(o, e, i),
                                            r = c(a, t, i);
                                        return n && r
                                    }),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : [...s(e[0]), ...s(e[1])]
                        })
                    })
                },
                intersection: v,
                union: y,
                not: function(t) {
                    return f({
                        [r]: () => ({
                            match: e => ({
                                matched: !c(t, e, () => {})
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
                string: A,
                between: M,
                lt: E,
                gt: T,
                lte: R,
                gte: I,
                int: O,
                finite: G,
                positive: P,
                negative: L,
                number: B,
                betweenBigInt: U,
                ltBigInt: F,
                gtBigInt: D,
                lteBigInt: K,
                gteBigInt: V,
                positiveBigInt: H,
                negativeBigInt: z,
                bigint: j,
                boolean: W,
                symbol: k,
                nullish: Y,
                instanceOf: function(t) {
                    var e;
                    return f(g((e = t, t => t instanceof e)))
                },
                shape: function(t) {
                    return f(g(function() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        if (1 === e.length) {
                            let [t] = e;
                            return e => c(t, e, () => {})
                        }
                        if (2 === e.length) {
                            let [t, n] = e;
                            return c(t, n, () => {})
                        }
                        throw Error("isMatching wasn't given the right number of arguments: expected 1 or 2, received ".concat(e.length, "."))
                    }(t)))
                }
            };
            let J = {
                matched: !1,
                value: void 0
            };

            function X(t) {
                return new Q(t, J)
            }
            class Q {
                with() {
                    let t;
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    if (this.state.matched) return this;
                    let i = n[n.length - 1],
                        a = [n[0]];
                    3 === n.length && "function" == typeof n[1] ? (a.push(n[0]), t = n[1]) : n.length > 2 && a.push(...n.slice(1, n.length - 1));
                    let u = !1,
                        s = {},
                        l = (t, e) => {
                            u = !0, s[t] = e
                        },
                        f = a.some(t => c(t, this.input, l)) && (!t || t(this.input)) ? {
                            matched: !0,
                            value: i(u ? o in s ? s[o] : s : this.input, this.input)
                        } : J;
                    return new Q(this.input, f)
                }
                when(t, e) {
                    if (this.state.matched) return this;
                    let n = !!t(this.input);
                    return new Q(this.input, n ? {
                        matched: !0,
                        value: e(this.input, this.input)
                    } : J)
                }
                otherwise(t) {
                    return this.state.matched ? this.state.value : t(this.input)
                }
                exhaustive() {
                    return this.run()
                }
                run() {
                    let t;
                    if (this.state.matched) return this.state.value;
                    try {
                        t = JSON.stringify(this.input)
                    } catch (e) {
                        t = this.input
                    }
                    throw Error("Pattern matching error: no pattern matches value ".concat(t))
                }
                returnType() {
                    return this
                }
                constructor(t, e) {
                    this.input = void 0, this.state = void 0, this.input = t, this.state = e
                }
            }
        },
        746304: function(t, e, n) {
            "use strict";
            var r, i;
            n.r(e), n.d(e, {
                AudioSettingsDefaultVolumes: function() {
                    return r
                }
            }), (i = r || (r = {}))[i.USER = 100] = "USER", i[i.STREAM = 18] = "STREAM"
        },
        148606: function(t, e, n) {
            "use strict";
            var r, i;
            n.r(e), n.d(e, {
                CountryCodes: function() {
                    return r
                },
                CountryCodesSets: function() {
                    return o
                }
            }), (i = r || (r = {})).AD = "AD", i.AE = "AE", i.AF = "AF", i.AG = "AG", i.AI = "AI", i.AL = "AL", i.AM = "AM", i.AO = "AO", i.AQ = "AQ", i.AR = "AR", i.AS = "AS", i.AT = "AT", i.AU = "AU", i.AW = "AW", i.AX = "AX", i.AZ = "AZ", i.BA = "BA", i.BB = "BB", i.BD = "BD", i.BE = "BE", i.BF = "BF", i.BG = "BG", i.BH = "BH", i.BI = "BI", i.BJ = "BJ", i.BL = "BL", i.BM = "BM", i.BN = "BN", i.BO = "BO", i.BQ = "BQ", i.BR = "BR", i.BS = "BS", i.BT = "BT", i.BV = "BV", i.BW = "BW", i.BY = "BY", i.BZ = "BZ", i.CA = "CA", i.CC = "CC", i.CD = "CD", i.CF = "CF", i.CG = "CG", i.CH = "CH", i.CI = "CI", i.CK = "CK", i.CL = "CL", i.CM = "CM", i.CN = "CN", i.CO = "CO", i.CR = "CR", i.CU = "CU", i.CV = "CV", i.CW = "CW", i.CX = "CX", i.CY = "CY", i.CZ = "CZ", i.DE = "DE", i.DJ = "DJ", i.DK = "DK", i.DM = "DM", i.DO = "DO", i.DZ = "DZ", i.EC = "EC", i.EE = "EE", i.EG = "EG", i.EH = "EH", i.ER = "ER", i.ES = "ES", i.ET = "ET", i.FI = "FI", i.FJ = "FJ", i.FK = "FK", i.FM = "FM", i.FO = "FO", i.FR = "FR", i.GA = "GA", i.GB = "GB", i.GD = "GD", i.GE = "GE", i.GF = "GF", i.GG = "GG", i.GH = "GH", i.GI = "GI", i.GL = "GL", i.GM = "GM", i.GN = "GN", i.GP = "GP", i.GQ = "GQ", i.GR = "GR", i.GS = "GS", i.GT = "GT", i.GU = "GU", i.GW = "GW", i.GY = "GY", i.HK = "HK", i.HM = "HM", i.HN = "HN", i.HR = "HR", i.HT = "HT", i.HU = "HU", i.ID = "ID", i.IE = "IE", i.IL = "IL", i.IM = "IM", i.IN = "IN", i.IO = "IO", i.IQ = "IQ", i.IR = "IR", i.IS = "IS", i.IT = "IT", i.JE = "JE", i.JM = "JM", i.JO = "JO", i.JP = "JP", i.KE = "KE", i.KG = "KG", i.KH = "KH", i.KI = "KI", i.KM = "KM", i.KN = "KN", i.KP = "KP", i.KR = "KR", i.KW = "KW", i.KY = "KY", i.KZ = "KZ", i.LA = "LA", i.LB = "LB", i.LC = "LC", i.LI = "LI", i.LK = "LK", i.LR = "LR", i.LS = "LS", i.LT = "LT", i.LU = "LU", i.LV = "LV", i.LY = "LY", i.MA = "MA", i.MC = "MC", i.MD = "MD", i.ME = "ME", i.MF = "MF", i.MG = "MG", i.MH = "MH", i.MK = "MK", i.ML = "ML", i.MM = "MM", i.MN = "MN", i.MO = "MO", i.MP = "MP", i.MQ = "MQ", i.MR = "MR", i.MS = "MS", i.MT = "MT", i.MU = "MU", i.MV = "MV", i.MW = "MW", i.MX = "MX", i.MY = "MY", i.MZ = "MZ", i.NA = "NA", i.NC = "NC", i.NE = "NE", i.NF = "NF", i.NG = "NG", i.NI = "NI", i.NL = "NL", i.NO = "NO", i.NP = "NP", i.NR = "NR", i.NU = "NU", i.NZ = "NZ", i.OM = "OM", i.PA = "PA", i.PE = "PE", i.PF = "PF", i.PG = "PG", i.PH = "PH", i.PK = "PK", i.PL = "PL", i.PM = "PM", i.PN = "PN", i.PR = "PR", i.PS = "PS", i.PT = "PT", i.PW = "PW", i.PY = "PY", i.QA = "QA", i.RE = "RE", i.RO = "RO", i.RS = "RS", i.RU = "RU", i.RW = "RW", i.SA = "SA", i.SB = "SB", i.SC = "SC", i.SD = "SD", i.SE = "SE", i.SG = "SG", i.SH = "SH", i.SI = "SI", i.SJ = "SJ", i.SK = "SK", i.SL = "SL", i.SM = "SM", i.SN = "SN", i.SO = "SO", i.SR = "SR", i.SS = "SS", i.ST = "ST", i.SV = "SV", i.SX = "SX", i.SY = "SY", i.SZ = "SZ", i.TC = "TC", i.TD = "TD", i.TF = "TF", i.TG = "TG", i.TH = "TH", i.TJ = "TJ", i.TK = "TK", i.TL = "TL", i.TM = "TM", i.TN = "TN", i.TO = "TO", i.TR = "TR", i.TT = "TT", i.TV = "TV", i.TW = "TW", i.TZ = "TZ", i.UA = "UA", i.UG = "UG", i.UM = "UM", i.US = "US", i.UY = "UY", i.UZ = "UZ", i.VA = "VA", i.VC = "VC", i.VE = "VE", i.VG = "VG", i.VI = "VI", i.VN = "VN", i.VU = "VU", i.WF = "WF", i.WS = "WS", i.YE = "YE", i.YT = "YT", i.ZA = "ZA", i.ZM = "ZM", i.ZW = "ZW", i.XK = "XK", i.AC = "AC", i.AN = "AN", i.DG = "DG", i.EL = "EL", i.IC = "IC", i.MI = "MI", i.TP = "TP", i.WK = "WK";
            let o = {
                NON_STANDARD_CODES: new Set(["AC", "AN", "DG", "EL", "IC", "MI", "TP", "WK", "XK"]),
                ALL: new Set(["AC", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DG", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "EL", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "IC", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MI", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TP", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WK", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"]),
                US_TERRITORIES: new Set(["AS", "GU", "MP", "PR", "VI"]),
                FRANCE_AND_FRENCH_REGION: new Set(["FR", "GF", "GP", "MQ", "NC", "PF", "PM", "RE", "TF", "WF", "YT"]),
                VAT_EU_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"]),
                VAT_COUNTRIES: new Set(["AT", "AU", "BE", "BG", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"]),
                TAX_DOMESTIC: new Set(["CA", "GB", "US"]),
                EU_COUNTRIES: new Set(["AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FO", "FR", "GG", "GR", "HR", "HU", "IC", "IE", "IM", "IT", "JE", "LI", "LT", "LU", "LV", "MC", "MD", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA"]),
                EEA_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"]),
                WITHOUT_POSTAL_CODES: new Set(["AE", "AG", "AN", "AO", "AW", "BF", "BI", "BJ", "BM", "BO", "BQ", "BS", "BW", "BZ", "CD", "CF", "CG", "CI", "CK", "CM", "CW", "DJ", "DM", "ER", "FJ", "GA", "GD", "GH", "GM", "GQ", "GY", "HK", "HM", "IE", "JM", "KE", "KI", "KM", "KN", "KP", "LY", "ML", "MO", "MR", "MW", "NA", "NR", "NU", "QA", "RW", "SB", "SC", "SL", "SR", "ST", "SX", "SY", "TD", "TF", "TG", "TK", "TL", "TO", "TV", "UG", "VU", "YE", "ZA", "ZW"]),
                TAX_EXCLUSIVE: new Set(["CA", "US"]),
                TAX_ADDRESS_REQUIRE_POSTAL_CODE: new Set(["CA", "US"])
            }
        },
        989901: function(t, e, n) {
            "use strict";
            var r, i;
            n.r(e), n.d(e, {
                ThreadSearchTagSetting: function() {
                    return r
                }
            }), (i = r || (r = {})).MATCH_ALL = "match_all", i.MATCH_SOME = "match_some"
        },
        895393: function(t, e, n) {
            "use strict";

            function r(t) {
                let e = document.body;
                if (null == e) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    r = window.getSelection(),
                    i = document.createElement("textarea");
                i.value = t, i.contentEditable = "true", i.style.visibility = "none", e.appendChild(i), n.selectNodeContents(i), null == r || r.removeAllRanges(), null == r || r.addRange(n), i.focus(), i.setSelectionRange(0, t.length);
                let o = document.execCommand("copy");
                return e.removeChild(i), o
            }
            n.r(e), n.d(e, {
                copy: function() {
                    return r
                }
            })
        }
    }
]);
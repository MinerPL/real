(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["16260"], {
        516555: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCanvas: function() {
                    return S
                },
                Environment: function() {
                    return f
                },
                SpriteCanvas: function() {
                    return b
                },
                useConfettiCannon: function() {
                    return O
                }
            });
            var r = n("884691"),
                i = n("748820"),
                a = n("414456"),
                u = n.n(a);

            function l(e, t) {
                var n = e.x,
                    r = e.y;
                return n > t.x && n < t.x + t.width && r > t.y && r < t.y + t.height
            }

            function o(e, t) {
                return e * t * t * (t > 0 ? -1 : 1)
            }
            var s = function() {
                    function e(e) {
                        this.id = e.id, this.position = e.position, this.velocity = e.velocity, this.rotation = e.rotation, this.dragCoefficient = e.dragCoefficient, this.size = e.size, this.opacity = e.opacity, this.spriteX = e.spriteX, this.spriteY = e.spriteY, this.spriteWidth = e.spriteWidth, this.spriteHeight = e.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return e.prototype.getNewForces = function(e, t) {
                        var n, r, i, a, u = e.wind * t,
                            l = -e.gravity * t;
                        return {
                            x: u + (n = this.dragCoefficient.x, n * (r = this.velocity.x) * r * (r > 0 ? -1 : 1)),
                            y: l + (i = this.dragCoefficient.y, i * (a = this.velocity.y) * a * (a > 0 ? -1 : 1))
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
                            u = i.y;
                        r.x += a, r.y += u;
                        var l = this.position.previewUpdate(n);
                        return l.x += r.x * n, l.y += r.y * n, l
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
                        r = t.wind;
                    this.gravity = -9.8, this.wind = 0, this.gravity = null != n ? n : this.gravity, this.wind = null != r ? r : this.wind
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
                E = function(e) {
                    function t(t, n, r) {
                        var i = e.call(this, t, n) || this;
                        return i._z = r, i
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
                _ = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return h(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(v),
                R = function(e) {
                    function t(t, n) {
                        var r = e.call(this, t) || this;
                        return r.addValue = n, r
                    }
                    return h(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(v),
                m = function(e) {
                    function t(t, n, r, i, a, u) {
                        var l = e.call(this, t) || this;
                        l.min = n, l.max = r, l.duration = i;
                        var o = l.value / (l.max - l.min) * l.duration,
                            s = isNaN(o) ? 0 : o;
                        return l.timePassed = s < 0 ? l.duration - s : s, l.directionMultiplier = a, l.easingFunction = u, l
                    }
                    return h(t, e), t.prototype.update = function(e) {
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

            function g(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function w(e) {
                var t = Math.floor(g(0, e.length - 1));
                return [e[t], t]
            }

            function x(e, t) {
                return w([e, t])[0]
            }

            function I(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : e
            }

            function C(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e,
                    z: e
                } : e
            }

            function L(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = I(e.value);
                            return new y(new _(t.x), new _(t.y));
                        case "static-random":
                            var n = I(e.minValue),
                                r = I(e.maxValue);
                            return new y(new _(g(n.x, r.x)), new _(g(n.y, r.y)));
                        case "linear":
                            t = I(e.value);
                            var i = I(e.addValue);
                            return new y(new R(t.x, i.x), new R(t.y, i.y));
                        case "linear-random":
                            n = I(e.minValue), r = I(e.maxValue);
                            var a = I(e.minAddValue),
                                u = I(e.maxAddValue);
                            return new y(new R(g(n.x, r.x), g(a.x, u.x)), new R(g(n.y, r.y), g(a.x, u.x)));
                        case "oscillating":
                            t = I(e.value);
                            var l = I(e.start),
                                o = I(e.final),
                                s = I(e.duration),
                                c = I(e.direction);
                            return new y(new m(t.x, l.x, o.x, s.x, c.x, e.easingFunction), new m(t.y, l.y, o.y, s.x, c.y, e.easingFunction));
                        case "oscillating-random":
                            n = I(e.minValue), r = I(e.maxValue);
                            var f = I(e.minStart),
                                d = I(e.maxStart),
                                h = I(e.minFinal),
                                p = I(e.maxFinal),
                                v = I(e.minDuration),
                                E = I(e.maxDuration),
                                C = I(e.minDirection),
                                L = I(e.maxDirection);
                            return new y(new m(g(n.x, r.x), g(f.x, d.x), g(h.x, p.x), g(v.x, E.x), x(C.x, L.x), w(e.easingFunctions)[0]), new m(g(n.y, r.y), g(f.y, d.y), g(h.y, p.y), g(v.y, E.y), x(C.y, L.y), w(e.easingFunctions)[0]))
                    }
                }(p(p({}, e), {
                    valueType: "Vector2"
                }))
            }
            var S = r.forwardRef(function(e, t) {
                var a = e.className,
                    u = e.environment,
                    o = e.onClick,
                    f = e.onMouseDown,
                    d = e.onMouseMove,
                    h = e.onMouseUp,
                    v = e.onBeforeRender,
                    y = e.onAfterRender,
                    I = function(e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                        }
                        return n
                    }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    S = r.useRef(null),
                    b = r.useRef(new Map),
                    O = r.useRef(null),
                    A = r.useRef(0),
                    T = r.useRef(0),
                    F = r.useCallback(function() {
                        var e = S.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == v || v(t), b.current.forEach(function(n, r) {
                                    var i = n.confetti,
                                        a = n.spriteCanvas;
                                    i.update(u), i.draw(a, t), i.shouldDestroy(e, u) && b.current.delete(r)
                                }), null == y || y(t), b.current.size > 0 ? O.current = window.requestAnimationFrame(F) : (t.clearRect(0, 0, e.width, e.height), O.current = null);
                                var n = Date.now();
                                0 !== A.current && (T.current = 1e3 / (n - A.current)), A.current = n
                            }
                        }
                    }, [u, y, v]);
                r.useEffect(function() {
                    null != O.current && (window.cancelAnimationFrame(O.current), O.current = window.requestAnimationFrame(F))
                }, [F]);
                var D = r.useCallback(function(e, t) {
                        b.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == O.current && F()
                    }, [F]),
                    U = r.useCallback(function(e, t, n, r, a) {
                        var u, l, o, f, d, h, v, y, I, S, b, O, A, T, F, U = (u = null !== (F = e.id) && void 0 !== F ? F : (0, i.v4)(), l = e, o = n, f = r, d = a, y = L((v = (h = l, p(p({
                            id: u
                        }, c), h))).size), S = (I = function(e, t) {
                            if (null != e) {
                                var n = t.sprites.findIndex(function(t) {
                                    return "string" == typeof e ? t.src === e && t.colorize : t.src === e.src && t.colorize === e.colorize
                                });
                                if (-1 !== n) return [e, n]
                            }
                            return w(t.sprites)
                        }(f, o))[0], b = I[1], O = function(e, t, n) {
                            if (!("string" == typeof(r = e) || r.colorize)) return 0;
                            var r, i = null != t ? n.colors.findIndex(function(e) {
                                return e === t
                            }) : -1;
                            return -1 !== i ? i : Math.floor(g(0, n.colors.length - 1))
                        }(null != f ? f : S, d, o), new s({
                            id: u,
                            position: L(v.position),
                            velocity: L(v.velocity),
                            rotation: (A = v.rotation, function(e) {
                                switch (e.type) {
                                    case "static":
                                        var t = C(e.value);
                                        return new E(new _(t.x), new _(t.y), new _(t.z));
                                    case "static-random":
                                        var n = C(e.minValue),
                                            r = C(e.maxValue);
                                        return new E(new _(g(n.x, r.x)), new _(g(n.y, r.y)), new _(g(n.z, r.z)));
                                    case "linear":
                                        t = C(e.value);
                                        var i = C(e.addValue);
                                        return new E(new R(t.x, i.x), new R(t.y, i.y), new R(t.z, i.z));
                                    case "linear-random":
                                        n = C(e.minValue), r = C(e.maxValue);
                                        var a = C(e.minAddValue),
                                            u = C(e.maxAddValue);
                                        return new E(new R(g(n.x, r.x), g(a.x, u.x)), new R(g(n.y, r.y), g(a.y, u.y)), new R(g(n.z, r.z), g(a.z, u.z)));
                                    case "oscillating":
                                        t = C(e.value);
                                        var l = C(e.start),
                                            o = C(e.final),
                                            s = C(e.duration),
                                            c = C(e.direction);
                                        return new E(new m(t.x, l.x, o.x, s.x, c.x, e.easingFunction), new m(t.y, l.y, o.y, s.z, c.y, e.easingFunction), new m(t.z, l.z, o.z, s.z, c.z, e.easingFunction));
                                    case "oscillating-random":
                                        n = C(e.minValue), r = C(e.maxValue);
                                        var f = C(e.minStart),
                                            d = C(e.maxStart),
                                            h = C(e.minFinal),
                                            p = C(e.maxFinal),
                                            v = C(e.minDuration),
                                            y = C(e.maxDuration),
                                            I = C(e.minDirection),
                                            L = C(e.maxDirection);
                                        return new E(new m(g(n.x, r.x), g(f.x, d.x), g(h.x, p.x), g(v.x, y.x), x(I.x, L.x), w(e.easingFunctions)[0]), new m(g(n.y, r.y), g(f.y, d.y), g(h.y, p.y), g(v.y, y.y), x(I.y, L.y), w(e.easingFunctions)[0]), new m(g(n.z, r.z), g(f.z, d.z), g(h.z, p.z), g(v.z, y.z), x(I.z, L.z), w(e.easingFunctions)[0]))
                                }
                            }(p(p({}, A), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: L(v.dragCoefficient),
                            size: y,
                            opacity: (T = v.opacity, function(e) {
                                switch (e.type) {
                                    case "static":
                                        return new _(e.value);
                                    case "static-random":
                                        return new _(g(e.minValue, e.maxValue));
                                    case "linear":
                                        return new R(e.value, e.addValue);
                                    case "linear-random":
                                        return new R(g(e.minValue, e.maxValue), g(e.minAddValue, e.maxAddValue));
                                    case "oscillating":
                                        return new m(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                                    case "oscillating-random":
                                        return new m(g(e.minValue, e.maxValue), g(e.minStart, e.maxStart), g(e.minFinal, e.maxFinal), g(e.minDuration, e.maxDuration), x(e.minDirection, e.maxDirection), w(e.easingFunctions)[0])
                                }
                            }(p(p({}, T), {
                                valueType: "number"
                            }))),
                            spriteX: O * o.spriteWidth + 2 * O,
                            spriteY: b * o.spriteHeight + 2 * b,
                            spriteWidth: o.spriteWidth,
                            spriteHeight: o.spriteHeight
                        }));
                        return D(U, t), U
                    }, [D]),
                    P = r.useCallback(function(e) {
                        b.current.delete(e)
                    }, []),
                    N = r.useCallback(function() {
                        return b.current.clear()
                    }, []),
                    M = r.useCallback(function() {
                        return S.current
                    }, []);
                r.useImperativeHandle(t, function() {
                    return {
                        createConfetti: U,
                        addConfetti: D,
                        deleteConfetti: P,
                        clearConfetti: N,
                        getCanvas: M
                    }
                }, [U, D, P, N, M]);
                var k = r.useCallback(function(e, t) {
                        var n, r, i = t.clickHandler,
                            a = t.mouseHandler;
                        if (null != i || null != a) {
                            var o = null === (n = S.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != o) {
                                var s = function(e, t) {
                                    if (null == t) throw Error("element should not be null");
                                    var n = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - n.left,
                                        y: e.clientY - n.top
                                    }
                                }(e, S.current);
                                if (l(s, {
                                        x: o.left,
                                        y: o.top,
                                        width: o.width,
                                        height: o.height
                                    })) {
                                    if (null != a) return a(e);
                                    if (null != i) {
                                        var c = -1e3 / T.current * 2,
                                            f = function(e, t) {
                                                for (var n = 0, r = Array.from(e.values()); n < r.length; n++) {
                                                    var i = r[n];
                                                    if (null != i && t(i)) return i
                                                }
                                                return null
                                            }(b.current, function(e) {
                                                var t = e.confetti,
                                                    n = t.previewPositionUpdate(u, c);
                                                return l(s, {
                                                    x: n.x - t.width / 2,
                                                    y: n.y - t.height / 2,
                                                    width: t.width,
                                                    height: t.height
                                                })
                                            });
                                        i(e, null !== (r = null == f ? void 0 : f.confetti) && void 0 !== r ? r : null)
                                    }
                                }
                            }
                        }
                    }, [u]),
                    G = r.useCallback(function(e) {
                        return k(e, {
                            clickHandler: o
                        })
                    }, [k, o]),
                    z = r.useCallback(function(e) {
                        return k(e, {
                            clickHandler: f
                        })
                    }, [k, f]),
                    V = r.useCallback(function(e) {
                        return k(e, {
                            mouseHandler: d
                        })
                    }, [k, d]),
                    H = r.useCallback(function(e) {
                        return k(e, {
                            mouseHandler: h
                        })
                    }, [k, h]);
                return r.useEffect(function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", G, o), e("mousedown", z, f), e("mousemove", V, d), e("mouseup", H, h),
                        function() {
                            window.removeEventListener("click", G), window.removeEventListener("mousedown", z), window.removeEventListener("mousemove", V), window.removeEventListener("mouseup", V)
                        }
                }, [G, z, V, H, o, f, d, h]), r.useEffect(function() {
                    var e = S.current,
                        t = new ResizeObserver(function() {
                            ! function(e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        r = t.width,
                                        i = t.height;
                                    e.width = r * n.g.devicePixelRatio, e.height = i * n.g.devicePixelRatio
                                }
                            }(S.current)
                        });
                    return null != e && t.observe(e),
                        function() {
                            null != e && t.unobserve(e)
                        }
                }, []), r.createElement("canvas", p({}, I, {
                    className: a,
                    ref: S
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
            var b = r.forwardRef(function(e, t) {
                var n, a = e.className,
                    l = e.visible,
                    o = void 0 !== l && l,
                    s = e.sprites,
                    c = e.colors,
                    f = e.spriteWidth,
                    d = e.spriteHeight,
                    h = r.useRef(null),
                    p = r.useRef([]),
                    v = r.useRef(!1),
                    y = r.useRef({});
                r.useImperativeHandle(t, function() {
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
                            var t = (0, i.v4)();
                            return y.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete y.current[e]
                        },
                        isReady: v.current
                    }
                }, [c, d, f]);
                var E = r.useCallback(function() {
                        var e = h.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height), p.current.forEach(function(e, n) {
                            var r = function(r, i) {
                                var a = f * i + 2 * i,
                                    u = d * n + 2 * n;
                                if (t.drawImage(e.image, a, u, f, d), null != r) {
                                    for (var l, o, s = t.getImageData(a, u, f, d), c = ("#" === (l = r)[0] && (l = l.slice(1)), {
                                            r: (o = parseInt(l, 16)) >> 16 & 255,
                                            g: o >> 8 & 255,
                                            b: 255 & o
                                        }), h = 0; h < s.data.length; h += 4) s.data[h] = c.r, s.data[h + 1] = c.g, s.data[h + 2] = c.b;
                                    t.putImageData(s, a, u)
                                }
                            };
                            e.colorize ? c.forEach(function(e, t) {
                                return r(e, t)
                            }) : r(null, 0)
                        }))
                    }, [c, d, f]),
                    _ = r.useCallback(function() {
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
                    R = r.useCallback(function(e) {
                        for (var t in y.current) y.current[t](e)
                    }, []),
                    m = r.useCallback(function() {
                        var e, t, n, r;
                        return e = void 0, t = void 0, n = void 0, r = function() {
                            return function(e, t) {
                                var n, r, i, a, u = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & i[0]) throw i[1];
                                        return i[1]
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
                                                if (n = 1, r && (i = 2 & l[0] ? r.return : l[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, l[1])).done) return i;
                                                switch (r = 0, i && (l = [2 & l[0], i.value]), l[0]) {
                                                    case 0:
                                                    case 1:
                                                        i = l;
                                                        break;
                                                    case 4:
                                                        return u.label++, {
                                                            value: l[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        u.label++, r = l[1], l = [0];
                                                        continue;
                                                    case 7:
                                                        l = u.ops.pop(), u.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                            u = 0;
                                                            continue
                                                        }
                                                        if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                                            u.label = l[1];
                                                            break
                                                        }
                                                        if (6 === l[0] && u.label < i[1]) {
                                                            u.label = i[1], i = l;
                                                            break
                                                        }
                                                        if (i && u.label < i[2]) {
                                                            u.label = i[2], u.ops.push(l);
                                                            break
                                                        }
                                                        i[2] && u.ops.pop(), u.trys.pop();
                                                        continue
                                                }
                                                l = t.call(e, u)
                                            } catch (e) {
                                                l = [6, e], r = 0
                                            } finally {
                                                n = i = 0
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
                                        return [4, _()];
                                    case 1:
                                        return e.sent(), E(), v.current = !0, R(!0), [2]
                                }
                            })
                        }, new(n || (n = Promise))(function(i, a) {
                            function u(e) {
                                try {
                                    o(r.next(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function l(e) {
                                try {
                                    o(r.throw(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function o(e) {
                                var t;
                                e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                                    e(t)
                                })).then(u, l)
                            }
                            o((r = r.apply(e, t || [])).next())
                        })
                    }, [R, _, E]);
                return r.useEffect(function() {
                    m()
                }, [m]), r.useEffect(function() {
                    return function() {
                        return R(!1)
                    }
                }, [R]), r.useEffect(function() {
                    null != h.current && (h.current.width = (f + 2) * Math.max(c.length, 1), h.current.height = (d + 2) * s.length)
                }, [c.length, d, f, s.length]), r.createElement("canvas", {
                    ref: h,
                    className: u(a, ((n = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !o, n))
                })
            });

            function O(e, t) {
                var n, i = r.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
                    a = i[0],
                    u = i[1];
                r.useEffect(function() {
                    var e = null == t ? void 0 : t.addReadyListener(u);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }, [t]);
                var l = r.useCallback(function(n, r) {
                        var i = void 0 === r ? {} : r,
                            a = i.sprite,
                            u = i.color,
                            l = null == t ? void 0 : t.getCreateData(),
                            o = null == t ? void 0 : t.getCanvas();
                        if (null != o && null != l && 0 !== l.sprites.length) return null == e ? void 0 : e.createConfetti(n, o, l, a, u)
                    }, [e, t]),
                    o = r.useCallback(function(e, t, n) {
                        for (var r = [], i = 0; i < t; i++) {
                            var a = l(e, n);
                            a && r.push(a)
                        }
                        return r
                    }, [l]),
                    s = r.useCallback(function(n) {
                        var r = null == t ? void 0 : t.getCanvas();
                        null != r && (null == e || e.addConfetti(n, r))
                    }, [e, t]),
                    c = r.useCallback(function(t) {
                        null == e || e.deleteConfetti(t)
                    }, [e]),
                    f = r.useCallback(function() {
                        return null == e ? void 0 : e.clearConfetti()
                    }, [e]);
                return r.useMemo(function() {
                    return {
                        createConfetti: l,
                        createMultipleConfetti: o,
                        addConfetti: s,
                        clearConfetti: f,
                        deleteConfetti: c,
                        isReady: a && null != t && null != e
                    }
                }, [s, f, e, l, o, c, a, t])
            }
        },
        452113: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("850068"),
                a = n("524503"),
                u = n("393414"),
                l = n("162771"),
                o = n("642906"),
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
                    reviewWarningMessage: E,
                    applicationId: _,
                    guildId: R,
                    onComplete: m,
                    forcesTransitionToGuild: g,
                    skuId: w,
                    ...x
                } = e, {
                    subscriptionMetadataRequest: I
                } = (0, o.usePaymentContext)();
                return (0, r.jsx)(s.PaymentModal, {
                    ...x,
                    initialPlanId: n,
                    skuId: w,
                    onClose: e => {
                        t();
                        let n = null == I ? void 0 : I.guild_id;
                        e && null != n && (i.fetchSubscriptions(), (0, a.fetchEntitlementsForGuild)(n), null == m || m(), null != n && (g || l.default.getGuildId() !== n) && (0, u.transitionTo)(c.Routes.CHANNEL(n)))
                    },
                    analyticsLocations: h,
                    analyticsObject: f,
                    analyticsLocation: d,
                    analyticsSubscriptionType: p,
                    renderHeader: v,
                    planGroup: y,
                    reviewWarningMessage: E,
                    applicationId: _,
                    guildId: R,
                    forceNewPaymentModal: !0
                })
            }
        },
        210721: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnimationState: function() {
                    return i
                },
                getGiftAnimationData: function() {
                    return h
                },
                sendGiftMessage: function() {
                    return p
                }
            });
            var r, i, a = n("627445"),
                u = n.n(a),
                l = n("450911"),
                o = n("819689"),
                s = n("884351"),
                c = n("42203"),
                f = n("659632"),
                d = n("78345");
            (r = i || (i = {})).ACTION = "action", r.LOOP = "loop", r.IDLE = "idle";
            let h = (e, t) => {
                    let r;
                    switch (e) {
                        case d.PremiumGiftStyles.SNOWGLOBE:
                            r = () => n.el("452661").then(n.t.bind(n, "452661", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case d.PremiumGiftStyles.BOX:
                            r = () => n.el("726871").then(n.t.bind(n, "726871", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case d.PremiumGiftStyles.CUP:
                            r = () => n.el("544929").then(n.t.bind(n, "544929", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case d.PremiumGiftStyles.STANDARD_BOX:
                            switch (t) {
                                case i.IDLE:
                                    r = () => n.el("973372").then(n.t.bind(n, "973372", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case i.LOOP:
                                    r = () => n.el("353540").then(n.t.bind(n, "353540", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    r = () => n.el("303473").then(n.t.bind(n, "303473", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case d.PremiumGiftStyles.CAKE:
                            switch (t) {
                                case i.IDLE:
                                    r = () => n.el("127891").then(n.t.bind(n, "127891", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case i.LOOP:
                                    r = () => n.el("953820").then(n.t.bind(n, "953820", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    r = () => n.el("311972").then(n.t.bind(n, "311972", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case d.PremiumGiftStyles.CHEST:
                            switch (t) {
                                case i.IDLE:
                                    r = () => n.el("269055").then(n.t.bind(n, "269055", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case i.LOOP:
                                    r = () => n.el("120467").then(n.t.bind(n, "120467", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    r = () => n.el("451680").then(n.t.bind(n, "451680", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case d.PremiumGiftStyles.COFFEE:
                            switch (t) {
                                case i.IDLE:
                                    r = () => n.el("863089").then(n.t.bind(n, "863089", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case i.LOOP:
                                    r = () => n.el("949233").then(n.t.bind(n, "949233", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    r = () => n.el("361896").then(n.t.bind(n, "361896", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        default:
                            r = () => Promise.resolve("Error: Invalid giftStyle")
                    }
                    return r
                },
                p = async (e, t) => {
                    if (null == t) throw Error("giftCode must be defined");
                    if (null == e) throw Error("Recipient must be defined");
                    let n = await l.default.openPrivateChannel(e.id).then(e => {
                            let t = c.default.getChannel(e);
                            if (u(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                            return t
                        }),
                        r = (0, f.getGiftCodeURL)(t);
                    return o.default.sendMessage(n.id, s.default.parse(n, r), void 0, {
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
                    return f
                }
            });
            var r = n("872717"),
                i = n("913144"),
                a = n("819689"),
                u = n("18494"),
                l = n("49111");
            let o = () => (i.default.dispatch({
                    type: "BILLING_REFERRALS_REMAINING_FETCH_START"
                }), r.default.get({
                    url: l.Endpoints.GET_REFERRALS_REMAINING,
                    oldFormErrors: !0
                }).then(e => {
                    i.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                        referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                        sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : []
                    })
                }, () => {
                    i.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
                    })
                })),
                s = e => (i.default.dispatch({
                    type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
                    recipientId: e
                }), r.default.post({
                    url: l.Endpoints.CREATE_REFERRAL_PREVIEW(e),
                    oldFormErrors: !0
                }).then(t => {
                    i.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS",
                        recipientId: e,
                        is_eligible: null != t.body && t.body.is_eligible
                    })
                }, () => {
                    i.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_FAIL",
                        recipientId: e
                    })
                }));
            async function c(e) {
                try {
                    var t;
                    let n = await r.default.post({
                            url: l.Endpoints.CREATE_REFERRAL(e),
                            oldFormErrors: !0
                        }),
                        a = null !== (t = n.body) && void 0 !== t ? t : null;
                    return i.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_SUCCESS",
                        userTrialOffer: a
                    }), {
                        userTrialOffer: a
                    }
                } catch (e) {
                    if (i.default.dispatch({
                            type: "BILLING_CREATE_REFERRAL_FAIL"
                        }), e.body.code === l.AbortCodes.INVALID_MESSAGE_SEND_USER) {
                        let t = u.default.getCurrentlySelectedChannelId();
                        null != t && a.default.sendClydeError(t, e.body.code)
                    }
                }
            }
            async function f(e) {
                try {
                    var t;
                    let n = await r.default.get({
                            url: l.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
                            oldFormErrors: !0
                        }),
                        a = null !== (t = n.body) && void 0 !== t ? t : null;
                    return i.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                        userTrialOffer: a
                    }), {
                        userTrialOffer: a
                    }
                } catch (t) {
                    i.default.dispatch({
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
                    return I
                }
            });
            var r = n("637612"),
                i = n("446674"),
                a = n("913144"),
                u = n("697218"),
                l = n("179935"),
                o = n("49111");
            let s = null,
                c = {},
                f = [],
                d = new Set,
                h = !1,
                p = new Set,
                v = new Set,
                y = {},
                E = 0,
                _ = null,
                R = () => !0;

            function m(e) {
                p.add(e)
            }

            function g(e) {
                let {
                    messages: t
                } = e;
                t.forEach(e => w(e))
            }

            function w(e) {
                let t = e.type === r.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
                if (null == t) return !1;
                if (!v.has(t) && !p.has(t)) {
                    var n;
                    n = t, p.add(n), a.default.wait(() => (0, l.resolveReferralTrialOffer)(t).catch(o.NOOP_NULL))
                }
            }
            class x extends i.default.Store {
                initialize() {
                    this.waitFor(u.default), this.syncWith([u.default], R)
                }
                checkAndFetchReferralsRemaining() {
                    null == s && !h && E < 5 && (null == _ || _ < Date.now()) && (0, l.fetchReferralsRemaining)()
                }
                getReferralsRemaining() {
                    return this.checkAndFetchReferralsRemaining(), s
                }
                getSentUserIds() {
                    return this.checkAndFetchReferralsRemaining(), null == f ? [] : f
                }
                isFetchingReferralsRemaining() {
                    return h
                }
                isFetchingRecipientEligibility(e) {
                    return d.has(e)
                }
                getRecipientEligibility(e) {
                    return void 0 === c[e] && !d.has(e) && (0, l.checkRecipientEligibility)(e), c[e]
                }
                getRelevantUserTrialOffer(e) {
                    return y[e]
                }
                isResolving(e) {
                    return p.has(e)
                }
            }
            x.displayName = "ReferralTrialStore";
            var I = new x(a.default, {
                BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
                    let {
                        userTrialOfferId: t,
                        recipientId: n
                    } = e;
                    if (!h && (0, l.fetchReferralsRemaining)(), !d.has(n) && (0, l.checkRecipientEligibility)(n), !p.has(t)) {
                        var r;
                        r = t, p.add(r), a.default.wait(() => (0, l.resolveReferralTrialOffer)(t).catch(o.NOOP_NULL))
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
                    h = !1, s = t, f = n
                },
                BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
                    let {} = e;
                    h = !1, E += 1, _ = Date.now() + 1e3 * Math.pow(2, E)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    d.add(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
                    let {
                        recipientId: t,
                        is_eligible: n
                    } = e;
                    c[t] = n, d.delete(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    c[t] = !1, d.delete(t)
                },
                BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    (0, l.fetchReferralsRemaining)(), y[t.id] = t, f = [...f, t.user_id]
                },
                BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t && (p.delete(t.id), v.add(t.id), y[t.id] = t)
                },
                BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
                    let {
                        userTrialOfferId: t
                    } = e;
                    p.delete(t), v.add(t)
                },
                LOAD_MESSAGES_SUCCESS: g,
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    w(t)
                },
                LOAD_MESSAGES_AROUND_SUCCESS: g,
                LOGOUT: function() {
                    s = null, c = {}, f = [], d = new Set, h = !1, p = new Set, v = new Set, y = {}, E = 0, _ = null
                }
            })
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
            var r = n("884691"),
                i = n("866227"),
                a = n.n(i),
                u = n("862337"),
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

            function f() {
                let [e, t] = r.useState(() => s.isAfter(Date.now()));
                return r.useEffect(() => {
                    let n = new u.Timeout,
                        r = () => {
                            let e = s.diff(Date.now(), "millisecond");
                            null == n || n.start(e, () => {
                                s.isBefore(Date.now()) ? t(!1) : r()
                            })
                        };
                    return e && r(), () => n.stop()
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
            var r = n("884691"),
                i = n("446674"),
                a = n("862337"),
                u = n("697218"),
                l = n("340412"),
                o = n("719923"),
                s = n("646718");

            function c(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function f(e, t) {
                var n;
                if (null == e) return !1;
                let r = new Set(null === (n = e.discount) || void 0 === n ? void 0 : n.plan_ids.map(e => s.SubscriptionPlanInfo[e].skuId));
                return r.has(t)
            }

            function d() {
                let e = (0, i.useStateFromStores)([l.default], () => l.default.getUserDiscount(s.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID)),
                    [t, n] = r.useState(c(e)),
                    f = (0, i.useStateFromStores)([u.default], () => (0, o.isPremium)(u.default.getCurrentUser()));
                return r.useEffect(() => {
                    if (null == e || null == e.expires_at) return;
                    let r = new a.Timeout,
                        i = () => {
                            let a = null != e.expires_at ? Date.parse(e.expires_at) - Date.now() : 0;
                            null == r || r.start(a, () => {
                                !t && c(e) ? n(!0) : i()
                            })
                        };
                    return i(), () => r.stop()
                }, [t, e]), t || f ? null : e
            }
        },
        917247: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePremiumTrialOffer: function() {
                    return o
                }
            });
            var r = n("65597"),
                i = n("340412"),
                a = n("540692"),
                u = n("833516"),
                l = n("646718");

            function o(e) {
                var t, n, o, s;
                let c = (0, u.useTrialOffer)(l.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID),
                    f = (0, u.useTrialOffer)(l.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
                    d = (0, u.useTrialOffer)(l.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
                    h = (0, u.useTrialOffer)(i.default.getAnyOfUserTrialOfferId([l.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, l.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, l.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, l.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
                    p = (0, u.useTrialOffer)(l.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
                    v = (0, r.default)([a.default], () => void 0 === e ? null : a.default.getRelevantUserTrialOffer(e));
                return null !== (s = null !== (o = null !== (n = null !== (t = null != c ? c : v) && void 0 !== t ? t : f) && void 0 !== n ? n : d) && void 0 !== o ? o : h) && void 0 !== s ? s : p
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
            var r = n("884691"),
                i = n("446674"),
                a = n("862337"),
                u = n("697218"),
                l = n("340412"),
                o = n("719923");

            function s(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function c(e) {
                let t = (0, i.useStateFromStores)([l.default], () => l.default.getUserTrialOffer(e)),
                    [n, c] = r.useState(s(t)),
                    f = (0, i.useStateFromStores)([u.default], () => (0, o.isPremium)(u.default.getCurrentUser()));
                return r.useEffect(() => {
                    if (null != t && null != t.expires_at) {
                        let e = new a.Timeout,
                            r = () => {
                                let i = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                                null == e || e.start(i, () => {
                                    !n && s(t) ? c(!0) : r()
                                })
                            };
                        return r(), () => e.stop()
                    }
                }, [n, t]), n || f ? null : t
            }
        },
        65324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("446674"),
                u = n("206230"),
                l = n("491605"),
                o = n("210721"),
                s = n("78345");

            function c(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: c = !0,
                    defaultAnimationState: f,
                    idleAnimationState: d
                } = e, h = (0, a.useStateFromStores)([u.default], () => u.default.useReducedMotion), [p, v] = i.useState(f), y = i.useRef((0, o.getGiftAnimationData)(t, p)), [E, _] = i.useState(null == d), [R, m] = i.useState(!1), [g, w] = i.useState(-1), x = () => {
                    y.current = (0, o.getGiftAnimationData)(t, p), w(e => e + 1)
                }, I = () => {
                    _(!1), m(!0), w(-1), v(f)
                };
                i.useEffect(() => {
                    null == d && v(f)
                }, [d, f]), i.useEffect(() => {
                    if (null != d && g >= 0) {
                        I();
                        return
                    }
                    x()
                }, [t, d]), i.useEffect(() => {
                    (!R || null == d) && x()
                }, [p]), i.useEffect(() => {
                    R && (_(null == d), m(!1), x())
                }, [R]);
                if (!s.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, r.jsx)(l.default, {
                    importData: y.current,
                    shouldAnimate: !h && c,
                    className: n,
                    versionKey: g,
                    onComplete: null != d ? () => {
                        null != d && (v(d), _(!0))
                    } : void 0,
                    loop: E
                })
            }
        },
        340412: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("446674"),
                i = n("913144"),
                a = n("697218"),
                u = n("719923"),
                l = n("521012");
            let o = {
                    userOffersLastFetchedAtDate: void 0,
                    userTrialOffers: {},
                    userDiscounts: {}
                },
                s = o;

            function c() {
                s.userTrialOffers = {}, s.userDiscounts = {}, s.userOffersLastFetchedAtDate = void 0
            }
            let f = () => !0;

            function d() {
                let e = l.default.getPremiumTypeSubscription();
                return null != e && (s.userTrialOffers = {}, s.userDiscounts = {}, !0)
            }
            class h extends r.default.PersistedStore {
                initialize(e) {
                    s = null != e ? e : o, this.waitFor(a.default), this.syncWith([a.default], f), this.syncWith([l.default], d)
                }
                getUserTrialOffer(e) {
                    if (null !== e) return s.userTrialOffers[e]
                }
                getUserDiscount(e) {
                    if (null !== e) return s.userDiscounts[e]
                }
                getAnyOfUserTrialOfferId(e) {
                    for (let t of e)
                        if (null != s.userTrialOffers[t]) return t;
                    return null
                }
                hasFetchedOffer() {
                    return null != s.userOffersLastFetchedAtDate
                }
                shouldFetchOffer() {
                    let e = s.userOffersLastFetchedAtDate;
                    return null == e || Date.now() - 1728e5 > e
                }
                getAcknowledgedOffers(e) {
                    let t = a.default.getCurrentUser();
                    return (0, u.isPremium)(t) ? [] : Object.values(s.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
                }
                getUnacknowledgedDiscountOffers() {
                    let e = a.default.getCurrentUser();
                    return (0, u.isPremium)(e) ? [] : Object.values(s.userDiscounts).filter(e => null == e.expires_at)
                }
                getUnacknowledgedOffers(e) {
                    let t = a.default.getCurrentUser();
                    return (0, u.isPremium)(t) ? [] : Object.values(s.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
                }
                hasAnyUnexpiredOffer() {
                    return Object.values(s.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
                }
                getState() {
                    return s
                }
                forceReset() {
                    c()
                }
            }
            h.displayName = "UserOfferStore", h.persistKey = "UserOfferStore";
            var p = new h(i.default, {
                BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t ? s.userTrialOffers[t.trial_id] = t : c(), s.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    s.userTrialOffers[t.trial_id] = t, s.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: n
                    } = e;
                    null == t && null == n && c(), null != t ? (s.userTrialOffers[t.trial_id] = t, s.userDiscounts = {}) : null != n && (s.userDiscounts[n.discount_id] = n, s.userTrialOffers = {}), s.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: n
                    } = e;
                    (null != t || null != n) && (null != t && (s.userTrialOffers[t.trial_id] = t), null != n && (s.userDiscounts[n.discount_id] = n), s.userOffersLastFetchedAtDate = Date.now())
                },
                LOGOUT: c
            })
        }
    }
]);
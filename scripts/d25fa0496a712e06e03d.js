(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["53247"], {
        641900: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCanvas: function() {
                    return P
                },
                Environment: function() {
                    return d
                },
                SpriteCanvas: function() {
                    return k
                },
                useConfettiCannon: function() {
                    return O
                }
            });
            var i = n("773670"),
                r = n("462567"),
                a = n("575482"),
                l = n.n(a);

            function o(e, t) {
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
                        var n, i, r, a, l = e.wind * t,
                            o = -e.gravity * t;
                        return {
                            x: l + (n = this.dragCoefficient.x, n * (i = this.velocity.x) * i * (i > 0 ? -1 : 1)),
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
                            l = r.y;
                        i.x += a, i.y += l;
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
                d = function(e) {
                    var t = void 0 === e ? {} : e,
                        n = t.gravity,
                        i = t.wind;
                    this.gravity = -9.8, this.wind = 0, this.gravity = null != n ? n : this.gravity, this.wind = null != i ? i : this.wind
                },
                v = function(e, t) {
                    return (v = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    })(e, t)
                };

            function f(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                v(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var h = function() {
                    return (h = Object.assign || function(e) {
                        for (var t, n = 1, i = arguments.length; n < i; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                },
                p = function(e) {
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
                    return f(t, e), t.prototype.update = function(t) {
                        e.prototype.update.call(this, t), this._z.update(t)
                    }, t.prototype.previewUpdate = function(t) {
                        var n = e.prototype.previewUpdate.call(this, t);
                        return h(h({}, n), {
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
                b = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return f(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(p),
                w = function(e) {
                    function t(t, n) {
                        var i = e.call(this, t) || this;
                        return i.addValue = n, i
                    }
                    return f(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(p),
                g = function(e) {
                    function t(t, n, i, r, a, l) {
                        var o = e.call(this, t) || this;
                        o.min = n, o.max = i, o.duration = r;
                        var u = o.value / (o.max - o.min) * o.duration,
                            s = isNaN(u) ? 0 : u;
                        return o.timePassed = s < 0 ? o.duration - s : s, o.directionMultiplier = a, o.easingFunction = l, o
                    }
                    return f(t, e), t.prototype.update = function(e) {
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
                }(p);

            function x(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function C(e) {
                var t = Math.floor(x(0, e.length - 1));
                return [e[t], t]
            }

            function z(e, t) {
                return C([e, t])[0]
            }

            function M(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : e
            }

            function A(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e,
                    z: e
                } : e
            }

            function N(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = M(e.value);
                            return new y(new b(t.x), new b(t.y));
                        case "static-random":
                            var n = M(e.minValue),
                                i = M(e.maxValue);
                            return new y(new b(x(n.x, i.x)), new b(x(n.y, i.y)));
                        case "linear":
                            t = M(e.value);
                            var r = M(e.addValue);
                            return new y(new w(t.x, r.x), new w(t.y, r.y));
                        case "linear-random":
                            n = M(e.minValue), i = M(e.maxValue);
                            var a = M(e.minAddValue),
                                l = M(e.maxAddValue);
                            return new y(new w(x(n.x, i.x), x(a.x, l.x)), new w(x(n.y, i.y), x(a.x, l.x)));
                        case "oscillating":
                            t = M(e.value);
                            var o = M(e.start),
                                u = M(e.final),
                                s = M(e.duration),
                                c = M(e.direction);
                            return new y(new g(t.x, o.x, u.x, s.x, c.x, e.easingFunction), new g(t.y, o.y, u.y, s.x, c.y, e.easingFunction));
                        case "oscillating-random":
                            n = M(e.minValue), i = M(e.maxValue);
                            var d = M(e.minStart),
                                v = M(e.maxStart),
                                f = M(e.minFinal),
                                h = M(e.maxFinal),
                                p = M(e.minDuration),
                                m = M(e.maxDuration),
                                A = M(e.minDirection),
                                N = M(e.maxDirection);
                            return new y(new g(x(n.x, i.x), x(d.x, v.x), x(f.x, h.x), x(p.x, m.x), z(A.x, N.x), C(e.easingFunctions)[0]), new g(x(n.y, i.y), x(d.y, v.y), x(f.y, h.y), x(p.y, m.y), z(A.y, N.y), C(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector2"
                }))
            }
            var P = i.forwardRef(function(e, t) {
                var a = e.className,
                    l = e.environment,
                    u = e.onClick,
                    d = e.onMouseDown,
                    v = e.onMouseMove,
                    f = e.onMouseUp,
                    p = e.onBeforeRender,
                    y = e.onAfterRender,
                    M = function(e, t) {
                        var n = {};
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (n[i] = e[i]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) 0 > t.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                        }
                        return n
                    }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    P = i.useRef(null),
                    k = i.useRef(new Map),
                    O = i.useRef(null),
                    R = i.useRef(0),
                    S = i.useRef(0),
                    I = i.useCallback(function() {
                        var e = P.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == p || p(t), k.current.forEach(function(n, i) {
                                    var r = n.confetti,
                                        a = n.spriteCanvas;
                                    r.update(l), r.draw(a, t), r.shouldDestroy(e, l) && k.current.delete(i)
                                }), null == y || y(t), k.current.size > 0 ? O.current = window.requestAnimationFrame(I) : (t.clearRect(0, 0, e.width, e.height), O.current = null);
                                var n = Date.now();
                                0 !== R.current && (S.current = 1e3 / (n - R.current)), R.current = n
                            }
                        }
                    }, [l, y, p]);
                i.useEffect(function() {
                    null != O.current && (window.cancelAnimationFrame(O.current), O.current = window.requestAnimationFrame(I))
                }, [I]);
                var E = i.useCallback(function(e, t) {
                        k.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == O.current && I()
                    }, [I]),
                    V = i.useCallback(function(e, t, n, i, a) {
                        var l, o, u, d, v, f, p, y, M, P, k, O, R, S, I, V = (l = null !== (I = e.id) && void 0 !== I ? I : (0, r.v4)(), o = e, u = n, d = i, v = a, y = N((p = (f = o, h(h({
                            id: l
                        }, c), f))).size), P = (M = function(e, t) {
                            if (null != e) {
                                var n = t.sprites.findIndex(function(t) {
                                    return "string" == typeof e ? t.src === e && t.colorize : t.src === e.src && t.colorize === e.colorize
                                });
                                if (-1 !== n) return [e, n]
                            }
                            return C(t.sprites)
                        }(d, u))[0], k = M[1], O = function(e, t, n) {
                            if (!("string" == typeof(i = e) || i.colorize)) return 0;
                            var i, r = null != t ? n.colors.findIndex(function(e) {
                                return e === t
                            }) : -1;
                            return -1 !== r ? r : Math.floor(x(0, n.colors.length - 1))
                        }(null != d ? d : P, v, u), new s({
                            id: l,
                            position: N(p.position),
                            velocity: N(p.velocity),
                            rotation: (R = p.rotation, function(e) {
                                switch (e.type) {
                                    case "static":
                                        var t = A(e.value);
                                        return new m(new b(t.x), new b(t.y), new b(t.z));
                                    case "static-random":
                                        var n = A(e.minValue),
                                            i = A(e.maxValue);
                                        return new m(new b(x(n.x, i.x)), new b(x(n.y, i.y)), new b(x(n.z, i.z)));
                                    case "linear":
                                        t = A(e.value);
                                        var r = A(e.addValue);
                                        return new m(new w(t.x, r.x), new w(t.y, r.y), new w(t.z, r.z));
                                    case "linear-random":
                                        n = A(e.minValue), i = A(e.maxValue);
                                        var a = A(e.minAddValue),
                                            l = A(e.maxAddValue);
                                        return new m(new w(x(n.x, i.x), x(a.x, l.x)), new w(x(n.y, i.y), x(a.y, l.y)), new w(x(n.z, i.z), x(a.z, l.z)));
                                    case "oscillating":
                                        t = A(e.value);
                                        var o = A(e.start),
                                            u = A(e.final),
                                            s = A(e.duration),
                                            c = A(e.direction);
                                        return new m(new g(t.x, o.x, u.x, s.x, c.x, e.easingFunction), new g(t.y, o.y, u.y, s.z, c.y, e.easingFunction), new g(t.z, o.z, u.z, s.z, c.z, e.easingFunction));
                                    case "oscillating-random":
                                        n = A(e.minValue), i = A(e.maxValue);
                                        var d = A(e.minStart),
                                            v = A(e.maxStart),
                                            f = A(e.minFinal),
                                            h = A(e.maxFinal),
                                            p = A(e.minDuration),
                                            y = A(e.maxDuration),
                                            M = A(e.minDirection),
                                            N = A(e.maxDirection);
                                        return new m(new g(x(n.x, i.x), x(d.x, v.x), x(f.x, h.x), x(p.x, y.x), z(M.x, N.x), C(e.easingFunctions)[0]), new g(x(n.y, i.y), x(d.y, v.y), x(f.y, h.y), x(p.y, y.y), z(M.y, N.y), C(e.easingFunctions)[0]), new g(x(n.z, i.z), x(d.z, v.z), x(f.z, h.z), x(p.z, y.z), z(M.z, N.z), C(e.easingFunctions)[0]))
                                }
                            }(h(h({}, R), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: N(p.dragCoefficient),
                            size: y,
                            opacity: (S = p.opacity, function(e) {
                                switch (e.type) {
                                    case "static":
                                        return new b(e.value);
                                    case "static-random":
                                        return new b(x(e.minValue, e.maxValue));
                                    case "linear":
                                        return new w(e.value, e.addValue);
                                    case "linear-random":
                                        return new w(x(e.minValue, e.maxValue), x(e.minAddValue, e.maxAddValue));
                                    case "oscillating":
                                        return new g(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                                    case "oscillating-random":
                                        return new g(x(e.minValue, e.maxValue), x(e.minStart, e.maxStart), x(e.minFinal, e.maxFinal), x(e.minDuration, e.maxDuration), z(e.minDirection, e.maxDirection), C(e.easingFunctions)[0])
                                }
                            }(h(h({}, S), {
                                valueType: "number"
                            }))),
                            spriteX: O * u.spriteWidth + 2 * O,
                            spriteY: k * u.spriteHeight + 2 * k,
                            spriteWidth: u.spriteWidth,
                            spriteHeight: u.spriteHeight
                        }));
                        return E(V, t), V
                    }, [E]),
                    _ = i.useCallback(function(e) {
                        k.current.delete(e)
                    }, []),
                    D = i.useCallback(function() {
                        return k.current.clear()
                    }, []),
                    F = i.useCallback(function() {
                        return P.current
                    }, []);
                i.useImperativeHandle(t, function() {
                    return {
                        createConfetti: V,
                        addConfetti: E,
                        deleteConfetti: _,
                        clearConfetti: D,
                        getCanvas: F
                    }
                }, [V, E, _, D, F]);
                var U = i.useCallback(function(e, t) {
                        var n, i, r = t.clickHandler,
                            a = t.mouseHandler;
                        if (null != r || null != a) {
                            var u = null === (n = P.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != u) {
                                var s = function(e, t) {
                                    if (null == t) throw Error("element should not be null");
                                    var n = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - n.left,
                                        y: e.clientY - n.top
                                    }
                                }(e, P.current);
                                if (o(s, {
                                        x: u.left,
                                        y: u.top,
                                        width: u.width,
                                        height: u.height
                                    })) {
                                    if (null != a) return a(e);
                                    if (null != r) {
                                        var c = -1e3 / S.current * 2,
                                            d = function(e, t) {
                                                for (var n = 0, i = Array.from(e.values()); n < i.length; n++) {
                                                    var r = i[n];
                                                    if (null != r && t(r)) return r
                                                }
                                                return null
                                            }(k.current, function(e) {
                                                var t = e.confetti,
                                                    n = t.previewPositionUpdate(l, c);
                                                return o(s, {
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
                    H = i.useCallback(function(e) {
                        return U(e, {
                            clickHandler: u
                        })
                    }, [U, u]),
                    T = i.useCallback(function(e) {
                        return U(e, {
                            clickHandler: d
                        })
                    }, [U, d]),
                    j = i.useCallback(function(e) {
                        return U(e, {
                            mouseHandler: v
                        })
                    }, [U, v]),
                    L = i.useCallback(function(e) {
                        return U(e, {
                            mouseHandler: f
                        })
                    }, [U, f]);
                return i.useEffect(function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", H, u), e("mousedown", T, d), e("mousemove", j, v), e("mouseup", L, f),
                        function() {
                            window.removeEventListener("click", H), window.removeEventListener("mousedown", T), window.removeEventListener("mousemove", j), window.removeEventListener("mouseup", j)
                        }
                }, [H, T, j, L, u, d, v, f]), i.useEffect(function() {
                    var e = P.current,
                        t = new ResizeObserver(function() {
                            ! function(e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        i = t.width,
                                        r = t.height;
                                    e.width = i * n.g.devicePixelRatio, e.height = r * n.g.devicePixelRatio
                                }
                            }(P.current)
                        });
                    return null != e && t.observe(e),
                        function() {
                            null != e && t.unobserve(e)
                        }
                }, []), i.createElement("canvas", h({}, M, {
                    className: a,
                    ref: P
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
            var k = i.forwardRef(function(e, t) {
                var n, a = e.className,
                    o = e.visible,
                    u = void 0 !== o && o,
                    s = e.sprites,
                    c = e.colors,
                    d = e.spriteWidth,
                    v = e.spriteHeight,
                    f = i.useRef(null),
                    h = i.useRef([]),
                    p = i.useRef(!1),
                    y = i.useRef({});
                i.useImperativeHandle(t, function() {
                    return {
                        getCanvas: function() {
                            return f.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: h.current,
                                colors: c,
                                spriteWidth: d,
                                spriteHeight: v
                            }
                        },
                        addReadyListener: function(e) {
                            var t = (0, r.v4)();
                            return y.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete y.current[e]
                        },
                        isReady: p.current
                    }
                }, [c, v, d]);
                var m = i.useCallback(function() {
                        var e = f.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height), h.current.forEach(function(e, n) {
                            var i = function(i, r) {
                                var a = d * r + 2 * r,
                                    l = v * n + 2 * n;
                                if (t.drawImage(e.image, a, l, d, v), null != i) {
                                    for (var o, u, s = t.getImageData(a, l, d, v), c = ("#" === (o = i)[0] && (o = o.slice(1)), {
                                            r: (u = parseInt(o, 16)) >> 16 & 255,
                                            g: u >> 8 & 255,
                                            b: 255 & u
                                        }), f = 0; f < s.data.length; f += 4) s.data[f] = c.r, s.data[f + 1] = c.g, s.data[f + 2] = c.b;
                                    t.putImageData(s, a, l)
                                }
                            };
                            e.colorize ? c.forEach(function(e, t) {
                                return i(e, t)
                            }) : i(null, 0)
                        }))
                    }, [c, v, d]),
                    b = i.useCallback(function() {
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
                            h.current = e.map(function(e) {
                                return {
                                    colorize: e.colorize,
                                    image: e.image,
                                    src: e.src
                                }
                            })
                        })
                    }, [s]),
                    w = i.useCallback(function(e) {
                        for (var t in y.current) y.current[t](e)
                    }, []),
                    g = i.useCallback(function() {
                        var e, t, n, i;
                        return e = void 0, t = void 0, n = void 0, i = function() {
                            return function(e, t) {
                                var n, i, r, a, l = {
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
                                    return function(u) {
                                        return function(o) {
                                            if (n) throw TypeError("Generator is already executing.");
                                            for (; a && (a = 0, o[0] && (l = 0)), l;) try {
                                                if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                                                switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                                    case 0:
                                                    case 1:
                                                        r = o;
                                                        break;
                                                    case 4:
                                                        return l.label++, {
                                                            value: o[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        l.label++, i = o[1], o = [0];
                                                        continue;
                                                    case 7:
                                                        o = l.ops.pop(), l.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(r = (r = l.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                            l = 0;
                                                            continue
                                                        }
                                                        if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                            l.label = o[1];
                                                            break
                                                        }
                                                        if (6 === o[0] && l.label < r[1]) {
                                                            l.label = r[1], r = o;
                                                            break
                                                        }
                                                        if (r && l.label < r[2]) {
                                                            l.label = r[2], l.ops.push(o);
                                                            break
                                                        }
                                                        r[2] && l.ops.pop(), l.trys.pop();
                                                        continue
                                                }
                                                o = t.call(e, l)
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
                                        }([o, u])
                                    }
                                }
                            }(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, b()];
                                    case 1:
                                        return e.sent(), m(), p.current = !0, w(!0), [2]
                                }
                            })
                        }, new(n || (n = Promise))(function(r, a) {
                            function l(e) {
                                try {
                                    u(i.next(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function o(e) {
                                try {
                                    u(i.throw(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function u(e) {
                                var t;
                                e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                                    e(t)
                                })).then(l, o)
                            }
                            u((i = i.apply(e, t || [])).next())
                        })
                    }, [w, b, m]);
                return i.useEffect(function() {
                    g()
                }, [g]), i.useEffect(function() {
                    return function() {
                        return w(!1)
                    }
                }, [w]), i.useEffect(function() {
                    null != f.current && (f.current.width = (d + 2) * Math.max(c.length, 1), f.current.height = (v + 2) * s.length)
                }, [c.length, v, d, s.length]), i.createElement("canvas", {
                    ref: f,
                    className: l(a, ((n = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !u, n))
                })
            });

            function O(e, t) {
                var n, r = i.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
                    a = r[0],
                    l = r[1];
                i.useEffect(function() {
                    var e = null == t ? void 0 : t.addReadyListener(l);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }, [t]);
                var o = i.useCallback(function(n, i) {
                        var r = void 0 === i ? {} : i,
                            a = r.sprite,
                            l = r.color,
                            o = null == t ? void 0 : t.getCreateData(),
                            u = null == t ? void 0 : t.getCanvas();
                        if (null != u && null != o && 0 !== o.sprites.length) return null == e ? void 0 : e.createConfetti(n, u, o, a, l)
                    }, [e, t]),
                    u = i.useCallback(function(e, t, n) {
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
                    d = i.useCallback(function() {
                        return null == e ? void 0 : e.clearConfetti()
                    }, [e]);
                return i.useMemo(function() {
                    return {
                        createConfetti: o,
                        createMultipleConfetti: u,
                        addConfetti: s,
                        clearConfetti: d,
                        deleteConfetti: c,
                        isReady: a && null != t && null != e
                    }
                }, [s, d, e, o, u, c, a, t])
            }
        },
        668542: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), a.test(e)) ? "rtl" : l.test(e) ? "ltr" : "neutral"
            };
            var i = "֑-߿יִ-﷽ﹰ-ﻼ",
                r = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                a = RegExp("^[^" + r + "]*[" + i + "]"),
                l = RegExp("^[^" + i + "]*[" + r + "]")
        },
        212653: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                persist: function() {
                    return c
                }
            });
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var i = Object.defineProperty,
                r = Object.getOwnPropertySymbols,
                a = Object.prototype.hasOwnProperty,
                l = Object.prototype.propertyIsEnumerable,
                o = (e, t, n) => t in e ? i(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                u = (e, t) => {
                    for (var n in t || (t = {})) a.call(t, n) && o(e, n, t[n]);
                    if (r)
                        for (var n of r(t)) l.call(t, n) && o(e, n, t[n]);
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
                c = (e, t) => (n, i, r) => {
                    let a, l, o = u({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: e => e,
                        version: 0,
                        merge: (e, t) => u(u({}, t), e)
                    }, t);
                    (o.blacklist || o.whitelist) && console.warn("The ".concat(o.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let c = !1,
                        d = new Set,
                        v = new Set;
                    try {
                        a = o.getStorage()
                    } catch (e) {}
                    if (!a) return e(function() {
                        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(o.name, "', the given storage is currently unavailable.")), n(...t)
                    }, i, r);
                    !a.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(o.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let f = s(o.serialize),
                        h = () => {
                            let e;
                            let t = o.partialize(u({}, i()));
                            o.whitelist && Object.keys(t).forEach(e => {
                                var n;
                                (null == (n = o.whitelist) ? void 0 : n.includes(e)) || delete t[e]
                            }), o.blacklist && o.blacklist.forEach(e => delete t[e]);
                            let n = f({
                                state: t,
                                version: o.version
                            }).then(e => a.setItem(o.name, e)).catch(t => {
                                e = t
                            });
                            if (e) throw e;
                            return n
                        },
                        p = r.setState;
                    r.setState = (e, t) => {
                        p(e, t), h()
                    };
                    let y = e(function() {
                            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                            n(...t), h()
                        }, i, r),
                        m = () => {
                            var e;
                            if (!a) return;
                            c = !1, d.forEach(e => e(i()));
                            let t = (null == (e = o.onRehydrateStorage) ? void 0 : e.call(o, i())) || void 0;
                            return s(a.getItem.bind(a))(o.name).then(e => {
                                if (e) return o.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === o.version) return e.state;
                                    if (o.migrate) return o.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(l = o.merge(e, null != (t = i()) ? t : y), !0), h()
                            }).then(() => {
                                null == t || t(l, void 0), c = !0, v.forEach(e => e(l))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return r.persist = {
                        setOptions: e => {
                            o = u(u({}, o), e), e.getStorage && (a = e.getStorage())
                        },
                        clearStorage: () => {
                            var e;
                            null == (e = null == a ? void 0 : a.removeItem) || e.call(a, o.name)
                        },
                        rehydrate: () => m(),
                        hasHydrated: () => c,
                        onHydrate: e => (d.add(e), () => {
                            d.delete(e)
                        }),
                        onFinishHydration: e => (v.add(e), () => {
                            v.delete(e)
                        })
                    }, m(), l || y
                }
        },
        434976: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = [{
                label: "Alberta",
                value: "AB"
            }, {
                label: "British Columbia",
                value: "BC"
            }, {
                label: "Manitoba",
                value: "MB"
            }, {
                label: "New Brunswick",
                value: "NB"
            }, {
                label: "Newfoundland and Labrador",
                value: "NL"
            }, {
                label: "Nova Scotia",
                value: "NS"
            }, {
                label: "Ontario",
                value: "ON"
            }, {
                label: "Prince Edward Island",
                value: "PE"
            }, {
                label: "Quebec",
                value: "QC"
            }, {
                label: "Saskatchewan",
                value: "SK"
            }, {
                label: "Northwest Territories",
                value: "NT"
            }, {
                label: "Nunavut",
                value: "NU"
            }, {
                label: "Yukon",
                value: "YT"
            }]
        },
        722303: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = [{
                label: "Alabama",
                value: "AL"
            }, {
                label: "Alaska",
                value: "AK"
            }, {
                label: "American Samoa",
                value: "AS"
            }, {
                label: "Arizona",
                value: "AZ"
            }, {
                label: "Arkansas",
                value: "AR"
            }, {
                label: "Armed Forces: Americas",
                value: "AA"
            }, {
                label: "Armed Forces: Europe",
                value: "AE"
            }, {
                label: "Armed Forces: Pacific",
                value: "AP"
            }, {
                label: "California",
                value: "CA"
            }, {
                label: "Colorado",
                value: "CO"
            }, {
                label: "Connecticut",
                value: "CT"
            }, {
                label: "Delaware",
                value: "DE"
            }, {
                label: "District Of Columbia",
                value: "DC"
            }, {
                label: "Federated States Of Micronesia",
                value: "FM"
            }, {
                label: "Florida",
                value: "FL"
            }, {
                label: "Georgia",
                value: "GA"
            }, {
                label: "Guam",
                value: "GU"
            }, {
                label: "Hawaii",
                value: "HI"
            }, {
                label: "Idaho",
                value: "ID"
            }, {
                label: "Illinois",
                value: "IL"
            }, {
                label: "Indiana",
                value: "IN"
            }, {
                label: "Iowa",
                value: "IA"
            }, {
                label: "Kansas",
                value: "KS"
            }, {
                label: "Kentucky",
                value: "KY"
            }, {
                label: "Louisiana",
                value: "LA"
            }, {
                label: "Maine",
                value: "ME"
            }, {
                label: "Marshall Islands",
                value: "MH"
            }, {
                label: "Maryland",
                value: "MD"
            }, {
                label: "Massachusetts",
                value: "MA"
            }, {
                label: "Michigan",
                value: "MI"
            }, {
                label: "Minnesota",
                value: "MN"
            }, {
                label: "Mississippi",
                value: "MS"
            }, {
                label: "Missouri",
                value: "MO"
            }, {
                label: "Montana",
                value: "MT"
            }, {
                label: "Nebraska",
                value: "NE"
            }, {
                label: "Nevada",
                value: "NV"
            }, {
                label: "New Hampshire",
                value: "NH"
            }, {
                label: "New Jersey",
                value: "NJ"
            }, {
                label: "New Mexico",
                value: "NM"
            }, {
                label: "New York",
                value: "NY"
            }, {
                label: "North Carolina",
                value: "NC"
            }, {
                label: "North Dakota",
                value: "ND"
            }, {
                label: "Northern Mariana Islands",
                value: "MP"
            }, {
                label: "Ohio",
                value: "OH"
            }, {
                label: "Oklahoma",
                value: "OK"
            }, {
                label: "Oregon",
                value: "OR"
            }, {
                label: "Palau",
                value: "PW"
            }, {
                label: "Pennsylvania",
                value: "PA"
            }, {
                label: "Puerto Rico",
                value: "PR"
            }, {
                label: "Rhode Island",
                value: "RI"
            }, {
                label: "South Carolina",
                value: "SC"
            }, {
                label: "South Dakota",
                value: "SD"
            }, {
                label: "Tennessee",
                value: "TN"
            }, {
                label: "Texas",
                value: "TX"
            }, {
                label: "Utah",
                value: "UT"
            }, {
                label: "Vermont",
                value: "VT"
            }, {
                label: "Virgin Islands",
                value: "VI"
            }, {
                label: "Virginia",
                value: "VA"
            }, {
                label: "Washington",
                value: "WA"
            }, {
                label: "West Virginia",
                value: "WV"
            }, {
                label: "Wisconsin",
                value: "WI"
            }, {
                label: "Wyoming",
                value: "WY"
            }]
        },
        53456: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                SKUBenefitTypes: function() {
                    return i
                }
            }), (r = i || (i = {}))[r.INTANGIBLE = 1] = "INTANGIBLE", r[r.APPLICATION_PREMIUM_COMMAND = 2] = "APPLICATION_PREMIUM_COMMAND"
        },
        391845: function(e, t, n) {
            "use strict";

            function i() {
                let e = Promise.resolve(null);
                return t => new Promise((n, i) => {
                    e = e.then(t).then(n, i)
                })
            }
            n.r(t), n.d(t, {
                createLock: function() {
                    return i
                }
            })
        }
    }
]);
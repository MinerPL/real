(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40155"], {
        516555: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ConfettiCanvas: function() {
                    return k
                },
                Environment: function() {
                    return f
                },
                SpriteCanvas: function() {
                    return _
                },
                useConfettiCannon: function() {
                    return E
                }
            });
            var r = n("884691"),
                i = n("748820"),
                a = n("414456"),
                o = n.n(a);

            function u(t, e) {
                var n = t.x,
                    r = t.y;
                return n > e.x && n < e.x + e.width && r > e.y && r < e.y + e.height
            }

            function c(t, e) {
                return t * e * e * (e > 0 ? -1 : 1)
            }
            var l = function() {
                    function t(t) {
                        this.id = t.id, this.position = t.position, this.velocity = t.velocity, this.rotation = t.rotation, this.dragCoefficient = t.dragCoefficient, this.size = t.size, this.opacity = t.opacity, this.spriteX = t.spriteX, this.spriteY = t.spriteY, this.spriteWidth = t.spriteWidth, this.spriteHeight = t.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return t.prototype.getNewForces = function(t, e) {
                        var n, r, i, a, o = t.wind * e,
                            u = -t.gravity * e;
                        return {
                            x: o + (n = this.dragCoefficient.x, n * (r = this.velocity.x) * r * (r > 0 ? -1 : 1)),
                            y: u + (i = this.dragCoefficient.y, i * (a = this.velocity.y) * a * (a > 0 ? -1 : 1))
                        }
                    }, t.prototype.update = function(t) {
                        var e = Date.now(),
                            n = (e - this._lastUpdatedAt) / 100;
                        this.rotation.update(n), this.dragCoefficient.update(n);
                        var r = this.getNewForces(t, n),
                            i = r.x,
                            a = r.y;
                        this.velocity.update(n), this.velocity.x += i, this.velocity.y += a, this.position.update(n), this.position.x += this.velocity.x * n, this.position.y += this.velocity.y * n, this.size.update(n), this.opacity.update(n), this._lastUpdatedAt = e
                    }, t.prototype.previewPositionUpdate = function(t, e) {
                        var n = e / 100,
                            r = this.velocity.previewUpdate(n),
                            i = this.getNewForces(t, n),
                            a = i.x,
                            o = i.y;
                        r.x += a, r.y += o;
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
                s = {
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
                w = function(t) {
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
                x = function(t) {
                    function e(e, n, r, i, a, o) {
                        var u = t.call(this, e) || this;
                        u.min = n, u.max = r, u.duration = i;
                        var c = u.value / (u.max - u.min) * u.duration,
                            l = isNaN(c) ? 0 : c;
                        return u.timePassed = l < 0 ? u.duration - l : l, u.directionMultiplier = a, u.easingFunction = o, u
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
                            a = this.easingFunction(r, this.min, e, this.duration);
                        return [isNaN(a) ? 0 : a, r, i]
                    }, e
                }(v);

            function b(t, e) {
                return t === e ? t : Math.random() * (e - t + 1) + t
            }

            function C(t) {
                var e = Math.floor(b(0, t.length - 1));
                return [t[e], e]
            }

            function z(t, e) {
                return C([t, e])[0]
            }

            function R(t) {
                return "number" == typeof t ? {
                    x: t,
                    y: t
                } : t
            }

            function A(t) {
                return "number" == typeof t ? {
                    x: t,
                    y: t,
                    z: t
                } : t
            }

            function O(t) {
                return function(t) {
                    switch (t.type) {
                        case "static":
                            var e = R(t.value);
                            return new y(new m(e.x), new m(e.y));
                        case "static-random":
                            var n = R(t.minValue),
                                r = R(t.maxValue);
                            return new y(new m(b(n.x, r.x)), new m(b(n.y, r.y)));
                        case "linear":
                            e = R(t.value);
                            var i = R(t.addValue);
                            return new y(new w(e.x, i.x), new w(e.y, i.y));
                        case "linear-random":
                            n = R(t.minValue), r = R(t.maxValue);
                            var a = R(t.minAddValue),
                                o = R(t.maxAddValue);
                            return new y(new w(b(n.x, r.x), b(a.x, o.x)), new w(b(n.y, r.y), b(a.x, o.x)));
                        case "oscillating":
                            e = R(t.value);
                            var u = R(t.start),
                                c = R(t.final),
                                l = R(t.duration),
                                s = R(t.direction);
                            return new y(new x(e.x, u.x, c.x, l.x, s.x, t.easingFunction), new x(e.y, u.y, c.y, l.x, s.y, t.easingFunction));
                        case "oscillating-random":
                            n = R(t.minValue), r = R(t.maxValue);
                            var f = R(t.minStart),
                                h = R(t.maxStart),
                                d = R(t.minFinal),
                                p = R(t.maxFinal),
                                v = R(t.minDuration),
                                g = R(t.maxDuration),
                                A = R(t.minDirection),
                                O = R(t.maxDirection);
                            return new y(new x(b(n.x, r.x), b(f.x, h.x), b(d.x, p.x), b(v.x, g.x), z(A.x, O.x), C(t.easingFunctions)[0]), new x(b(n.y, r.y), b(f.y, h.y), b(d.y, p.y), b(v.y, g.y), z(A.y, O.y), C(t.easingFunctions)[0]))
                    }
                }(p(p({}, t), {
                    valueType: "Vector2"
                }))
            }
            var k = r.forwardRef(function(t, e) {
                var a = t.className,
                    o = t.environment,
                    c = t.onClick,
                    f = t.onMouseDown,
                    h = t.onMouseMove,
                    d = t.onMouseUp,
                    v = t.onBeforeRender,
                    y = t.onAfterRender,
                    R = function(t, e) {
                        var n = {};
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && 0 > e.indexOf(r) && (n[r] = t[r]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) 0 > e.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]])
                        }
                        return n
                    }(t, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    k = r.useRef(null),
                    _ = r.useRef(new Map),
                    E = r.useRef(null),
                    S = r.useRef(0),
                    P = r.useRef(0),
                    V = r.useCallback(function() {
                        var t = k.current;
                        if (null != t) {
                            var e = t.getContext("2d");
                            if (null != e) {
                                e.clearRect(0, 0, t.width, t.height), null == v || v(e), _.current.forEach(function(n, r) {
                                    var i = n.confetti,
                                        a = n.spriteCanvas;
                                    i.update(o), i.draw(a, e), i.shouldDestroy(t, o) && _.current.delete(r)
                                }), null == y || y(e), _.current.size > 0 ? E.current = window.requestAnimationFrame(V) : (e.clearRect(0, 0, t.width, t.height), E.current = null);
                                var n = Date.now();
                                0 !== S.current && (P.current = 1e3 / (n - S.current)), S.current = n
                            }
                        }
                    }, [o, y, v]);
                r.useEffect(function() {
                    null != E.current && (window.cancelAnimationFrame(E.current), E.current = window.requestAnimationFrame(V))
                }, [V]);
                var j = r.useCallback(function(t, e) {
                        _.current.set(t.id, {
                            confetti: t,
                            spriteCanvas: e
                        }), null == E.current && V()
                    }, [V]),
                    F = r.useCallback(function(t, e, n, r, a) {
                        var o, u, c, f, h, d, v, y, R, k, _, E, S, P, V, F = (o = null !== (V = t.id) && void 0 !== V ? V : (0, i.v4)(), u = t, c = n, f = r, h = a, y = O((v = (d = u, p(p({
                            id: o
                        }, s), d))).size), k = (R = function(t, e) {
                            if (null != t) {
                                var n = e.sprites.findIndex(function(e) {
                                    return "string" == typeof t ? e.src === t && e.colorize : e.src === t.src && e.colorize === t.colorize
                                });
                                if (-1 !== n) return [t, n]
                            }
                            return C(e.sprites)
                        }(f, c))[0], _ = R[1], E = function(t, e, n) {
                            if (!("string" == typeof(r = t) || r.colorize)) return 0;
                            var r, i = null != e ? n.colors.findIndex(function(t) {
                                return t === e
                            }) : -1;
                            return -1 !== i ? i : Math.floor(b(0, n.colors.length - 1))
                        }(null != f ? f : k, h, c), new l({
                            id: o,
                            position: O(v.position),
                            velocity: O(v.velocity),
                            rotation: (S = v.rotation, function(t) {
                                switch (t.type) {
                                    case "static":
                                        var e = A(t.value);
                                        return new g(new m(e.x), new m(e.y), new m(e.z));
                                    case "static-random":
                                        var n = A(t.minValue),
                                            r = A(t.maxValue);
                                        return new g(new m(b(n.x, r.x)), new m(b(n.y, r.y)), new m(b(n.z, r.z)));
                                    case "linear":
                                        e = A(t.value);
                                        var i = A(t.addValue);
                                        return new g(new w(e.x, i.x), new w(e.y, i.y), new w(e.z, i.z));
                                    case "linear-random":
                                        n = A(t.minValue), r = A(t.maxValue);
                                        var a = A(t.minAddValue),
                                            o = A(t.maxAddValue);
                                        return new g(new w(b(n.x, r.x), b(a.x, o.x)), new w(b(n.y, r.y), b(a.y, o.y)), new w(b(n.z, r.z), b(a.z, o.z)));
                                    case "oscillating":
                                        e = A(t.value);
                                        var u = A(t.start),
                                            c = A(t.final),
                                            l = A(t.duration),
                                            s = A(t.direction);
                                        return new g(new x(e.x, u.x, c.x, l.x, s.x, t.easingFunction), new x(e.y, u.y, c.y, l.z, s.y, t.easingFunction), new x(e.z, u.z, c.z, l.z, s.z, t.easingFunction));
                                    case "oscillating-random":
                                        n = A(t.minValue), r = A(t.maxValue);
                                        var f = A(t.minStart),
                                            h = A(t.maxStart),
                                            d = A(t.minFinal),
                                            p = A(t.maxFinal),
                                            v = A(t.minDuration),
                                            y = A(t.maxDuration),
                                            R = A(t.minDirection),
                                            O = A(t.maxDirection);
                                        return new g(new x(b(n.x, r.x), b(f.x, h.x), b(d.x, p.x), b(v.x, y.x), z(R.x, O.x), C(t.easingFunctions)[0]), new x(b(n.y, r.y), b(f.y, h.y), b(d.y, p.y), b(v.y, y.y), z(R.y, O.y), C(t.easingFunctions)[0]), new x(b(n.z, r.z), b(f.z, h.z), b(d.z, p.z), b(v.z, y.z), z(R.z, O.z), C(t.easingFunctions)[0]))
                                }
                            }(p(p({}, S), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: O(v.dragCoefficient),
                            size: y,
                            opacity: (P = v.opacity, function(t) {
                                switch (t.type) {
                                    case "static":
                                        return new m(t.value);
                                    case "static-random":
                                        return new m(b(t.minValue, t.maxValue));
                                    case "linear":
                                        return new w(t.value, t.addValue);
                                    case "linear-random":
                                        return new w(b(t.minValue, t.maxValue), b(t.minAddValue, t.maxAddValue));
                                    case "oscillating":
                                        return new x(t.value, t.start, t.final, t.duration, t.direction, t.easingFunction);
                                    case "oscillating-random":
                                        return new x(b(t.minValue, t.maxValue), b(t.minStart, t.maxStart), b(t.minFinal, t.maxFinal), b(t.minDuration, t.maxDuration), z(t.minDirection, t.maxDirection), C(t.easingFunctions)[0])
                                }
                            }(p(p({}, P), {
                                valueType: "number"
                            }))),
                            spriteX: E * c.spriteWidth + 2 * E,
                            spriteY: _ * c.spriteHeight + 2 * _,
                            spriteWidth: c.spriteWidth,
                            spriteHeight: c.spriteHeight
                        }));
                        return j(F, e), F
                    }, [j]),
                    M = r.useCallback(function(t) {
                        _.current.delete(t)
                    }, []),
                    D = r.useCallback(function() {
                        return _.current.clear()
                    }, []),
                    U = r.useCallback(function() {
                        return k.current
                    }, []);
                r.useImperativeHandle(e, function() {
                    return {
                        createConfetti: F,
                        addConfetti: j,
                        deleteConfetti: M,
                        clearConfetti: D,
                        getCanvas: U
                    }
                }, [F, j, M, D, U]);
                var I = r.useCallback(function(t, e) {
                        var n, r, i = e.clickHandler,
                            a = e.mouseHandler;
                        if (null != i || null != a) {
                            var c = null === (n = k.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != c) {
                                var l = function(t, e) {
                                    if (null == e) throw Error("element should not be null");
                                    var n = e.getBoundingClientRect();
                                    return {
                                        x: t.clientX - n.left,
                                        y: t.clientY - n.top
                                    }
                                }(t, k.current);
                                if (u(l, {
                                        x: c.left,
                                        y: c.top,
                                        width: c.width,
                                        height: c.height
                                    })) {
                                    if (null != a) return a(t);
                                    if (null != i) {
                                        var s = -1e3 / P.current * 2,
                                            f = function(t, e) {
                                                for (var n = 0, r = Array.from(t.values()); n < r.length; n++) {
                                                    var i = r[n];
                                                    if (null != i && e(i)) return i
                                                }
                                                return null
                                            }(_.current, function(t) {
                                                var e = t.confetti,
                                                    n = e.previewPositionUpdate(o, s);
                                                return u(l, {
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
                    }, [o]),
                    N = r.useCallback(function(t) {
                        return I(t, {
                            clickHandler: c
                        })
                    }, [I, c]),
                    H = r.useCallback(function(t) {
                        return I(t, {
                            clickHandler: f
                        })
                    }, [I, f]),
                    T = r.useCallback(function(t) {
                        return I(t, {
                            mouseHandler: h
                        })
                    }, [I, h]),
                    B = r.useCallback(function(t) {
                        return I(t, {
                            mouseHandler: d
                        })
                    }, [I, d]);
                return r.useEffect(function() {
                    var t = function(t, e, n) {
                        null != n && window.addEventListener(t, e)
                    };
                    return t("click", N, c), t("mousedown", H, f), t("mousemove", T, h), t("mouseup", B, d),
                        function() {
                            window.removeEventListener("click", N), window.removeEventListener("mousedown", H), window.removeEventListener("mousemove", T), window.removeEventListener("mouseup", T)
                        }
                }, [N, H, T, B, c, f, h, d]), r.useEffect(function() {
                    var t = k.current,
                        e = new ResizeObserver(function() {
                            ! function(t) {
                                if (null != t) {
                                    var e = t.getBoundingClientRect(),
                                        r = e.width,
                                        i = e.height;
                                    t.width = r * n.g.devicePixelRatio, t.height = i * n.g.devicePixelRatio
                                }
                            }(k.current)
                        });
                    return null != t && e.observe(t),
                        function() {
                            null != t && e.unobserve(t)
                        }
                }, []), r.createElement("canvas", p({}, R, {
                    className: a,
                    ref: k
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
            var _ = r.forwardRef(function(t, e) {
                var n, a = t.className,
                    u = t.visible,
                    c = void 0 !== u && u,
                    l = t.sprites,
                    s = t.colors,
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
                                colors: s,
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
                }, [s, h, f]);
                var g = r.useCallback(function() {
                        var t = d.current,
                            e = null == t ? void 0 : t.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != e && null != t && (e.clearRect(0, 0, t.width, t.height), p.current.forEach(function(t, n) {
                            var r = function(r, i) {
                                var a = f * i + 2 * i,
                                    o = h * n + 2 * n;
                                if (e.drawImage(t.image, a, o, f, h), null != r) {
                                    for (var u, c, l = e.getImageData(a, o, f, h), s = ("#" === (u = r)[0] && (u = u.slice(1)), {
                                            r: (c = parseInt(u, 16)) >> 16 & 255,
                                            g: c >> 8 & 255,
                                            b: 255 & c
                                        }), d = 0; d < l.data.length; d += 4) l.data[d] = s.r, l.data[d + 1] = s.g, l.data[d + 2] = s.b;
                                    e.putImageData(l, a, o)
                                }
                            };
                            t.colorize ? s.forEach(function(t, e) {
                                return r(t, e)
                            }) : r(null, 0)
                        }))
                    }, [s, h, f]),
                    m = r.useCallback(function() {
                        var t = l.map(function(t) {
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
                    }, [l]),
                    w = r.useCallback(function(t) {
                        for (var e in y.current) y.current[e](t)
                    }, []),
                    x = r.useCallback(function() {
                        var t, e, n, r;
                        return t = void 0, e = void 0, n = void 0, r = function() {
                            return function(t, e) {
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
                                    return function(c) {
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
                                                u = e.call(t, o)
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
                                        return t.sent(), g(), v.current = !0, w(!0), [2]
                                }
                            })
                        }, new(n || (n = Promise))(function(i, a) {
                            function o(t) {
                                try {
                                    c(r.next(t))
                                } catch (t) {
                                    a(t)
                                }
                            }

                            function u(t) {
                                try {
                                    c(r.throw(t))
                                } catch (t) {
                                    a(t)
                                }
                            }

                            function c(t) {
                                var e;
                                t.done ? i(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                                    t(e)
                                })).then(o, u)
                            }
                            c((r = r.apply(t, e || [])).next())
                        })
                    }, [w, m, g]);
                return r.useEffect(function() {
                    x()
                }, [x]), r.useEffect(function() {
                    return function() {
                        return w(!1)
                    }
                }, [w]), r.useEffect(function() {
                    null != d.current && (d.current.width = (f + 2) * Math.max(s.length, 1), d.current.height = (h + 2) * l.length)
                }, [s.length, h, f, l.length]), r.createElement("canvas", {
                    ref: d,
                    className: o(a, ((n = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !c, n))
                })
            });

            function E(t, e) {
                var n, i = r.useState(null !== (n = null == e ? void 0 : e.isReady) && void 0 !== n && n),
                    a = i[0],
                    o = i[1];
                r.useEffect(function() {
                    var t = null == e ? void 0 : e.addReadyListener(o);
                    return function() {
                        null != t && (null == e || e.removeReadyListener(t))
                    }
                }, [e]);
                var u = r.useCallback(function(n, r) {
                        var i = void 0 === r ? {} : r,
                            a = i.sprite,
                            o = i.color,
                            u = null == e ? void 0 : e.getCreateData(),
                            c = null == e ? void 0 : e.getCanvas();
                        if (null != c && null != u && 0 !== u.sprites.length) return null == t ? void 0 : t.createConfetti(n, c, u, a, o)
                    }, [t, e]),
                    c = r.useCallback(function(t, e, n) {
                        for (var r = [], i = 0; i < e; i++) {
                            var a = u(t, n);
                            a && r.push(a)
                        }
                        return r
                    }, [u]),
                    l = r.useCallback(function(n) {
                        var r = null == e ? void 0 : e.getCanvas();
                        null != r && (null == t || t.addConfetti(n, r))
                    }, [t, e]),
                    s = r.useCallback(function(e) {
                        null == t || t.deleteConfetti(e)
                    }, [t]),
                    f = r.useCallback(function() {
                        return null == t ? void 0 : t.clearConfetti()
                    }, [t]);
                return r.useMemo(function() {
                    return {
                        createConfetti: u,
                        createMultipleConfetti: c,
                        addConfetti: l,
                        clearConfetti: f,
                        deleteConfetti: s,
                        isReady: a && null != e && null != t
                    }
                }, [l, f, t, u, c, s, a, e])
            }
        },
        448105: function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                var n = e.length,
                    r = t.length;
                if (r > n) return !1;
                if (r === n) return t === e;
                t: for (var i = 0, a = 0; i < r; i++) {
                    for (var o = t.charCodeAt(i); a < n;)
                        if (e.charCodeAt(a++) === o) continue t;
                    return !1
                }
                return !0
            }
        },
        437083: function(t, e, n) {
            var r = n("561449"),
                i = n("877297");
            t.exports = function(t) {
                return i(r(t))
            }
        },
        329252: function(t, e, n) {
            var r = n("877297"),
                i = n("164099");
            t.exports = function(t) {
                return r(i(t))
            }
        },
        957478: function(t, e, n) {
            var r = n("626785");
            t.exports = function(t, e) {
                return r(e, function(e) {
                    return t[e]
                })
            }
        },
        561449: function(t, e, n) {
            t.exports = function(t, e) {
                var n = -1,
                    r = t.length;
                for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
                return e
            }
        },
        877297: function(t, e, n) {
            var r = n("68421");
            t.exports = function(t, e) {
                var n = -1,
                    i = t.length,
                    a = i - 1;
                for (e = void 0 === e ? i : e; ++n < e;) {
                    var o = r(n, a),
                        u = t[o];
                    t[o] = t[n], t[n] = u
                }
                return t.length = e, t
            }
        },
        375128: function(t, e, n) {
            var r = n("437083"),
                i = n("329252"),
                a = n("725502");
            t.exports = function(t) {
                return (a(t) ? r : i)(t)
            }
        },
        164099: function(t, e, n) {
            var r = n("957478"),
                i = n("466731");
            t.exports = function(t) {
                return null == t ? [] : r(t, i(t))
            }
        },
        48174: function(t, e, n) {
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
        775560: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return i.default
                },
                useLazyValue: function() {
                    return a.default
                }
            });
            var r = n("14716"),
                i = n("745510"),
                a = n("315378")
        },
        14716: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var r = n("884691");

            function i() {
                let [, t] = (0, r.useState)({});
                return (0, r.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var r = n("884691");
            let i = {};

            function a(t) {
                let e = (0, r.useRef)(i);
                return e.current === i && (e.current = t()), e.current
            }
        },
        745510: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("884691"),
                i = n("48174");
            let a = [];

            function o(t, e) {
                let n = (0, r.useRef)(),
                    o = (0, r.useRef)(a);
                return o.current === a ? (n.current = t(), o.current = e) : !(0, i.default)(e, o.current) && (n.current = t(), o.current = e), n.current
            }
        },
        376507: function(t, e, n) {
            "use strict";

            function r(t) {
                let e = "==".slice(0, (4 - t.length % 4) % 4),
                    n = t.replace(/-/g, "+").replace(/_/g, "/") + e,
                    r = atob(n),
                    i = new ArrayBuffer(r.length),
                    a = new Uint8Array(i);
                for (let t = 0; t < r.length; t++) a[t] = r.charCodeAt(t);
                return i
            }

            function i(t) {
                let e = new Uint8Array(t),
                    n = "";
                for (let t of e) n += String.fromCharCode(t);
                let r = btoa(n),
                    i = r.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
                return i
            }
            n.r(e), n.d(e, {
                create: function() {
                    return m
                },
                get: function() {
                    return w
                }
            });
            var a = "copy",
                o = "convert";

            function u(t, e, n) {
                if (e === a) return n;
                if (e === o) return t(n);
                if (e instanceof Array) return n.map(n => u(t, e[0], n));
                if (e instanceof Object) {
                    let r = {};
                    for (let [i, a] of Object.entries(e)) {
                        if (a.derive) {
                            let t = a.derive(n);
                            void 0 !== t && (n[i] = t)
                        }
                        if (!(i in n)) {
                            if (a.required) throw Error("Missing key: ".concat(i));
                            continue
                        }
                        if (null == n[i]) {
                            r[i] = null;
                            continue
                        }
                        r[i] = u(t, a.schema, n[i])
                    }
                    return r
                }
            }

            function c(t, e) {
                return {
                    required: !0,
                    schema: t,
                    derive: e
                }
            }

            function l(t) {
                return {
                    required: !0,
                    schema: t
                }
            }

            function s(t) {
                return {
                    required: !1,
                    schema: t
                }
            }
            var f = {
                    type: l(a),
                    id: l(o),
                    transports: s(a)
                },
                h = {
                    appid: s(a),
                    appidExclude: s(a),
                    credProps: s(a)
                },
                d = {
                    appid: s(a),
                    appidExclude: s(a),
                    credProps: s(a)
                },
                p = {
                    publicKey: l({
                        rp: l(a),
                        user: l({
                            id: l(o),
                            name: l(a),
                            displayName: l(a)
                        }),
                        challenge: l(o),
                        pubKeyCredParams: l(a),
                        timeout: s(a),
                        excludeCredentials: s([f]),
                        authenticatorSelection: s(a),
                        attestation: s(a),
                        extensions: s(h)
                    }),
                    signal: s(a)
                },
                v = {
                    type: l(a),
                    id: l(a),
                    rawId: l(o),
                    authenticatorAttachment: s(a),
                    response: l({
                        clientDataJSON: l(o),
                        attestationObject: l(o),
                        transports: c(a, t => {
                            var e;
                            return (null == (e = t.getTransports) ? void 0 : e.call(t)) || []
                        })
                    }),
                    clientExtensionResults: c(d, t => t.getClientExtensionResults())
                },
                y = {
                    mediation: s(a),
                    publicKey: l({
                        challenge: l(o),
                        timeout: s(a),
                        rpId: s(a),
                        allowCredentials: s([f]),
                        userVerification: s(a),
                        extensions: s(h)
                    }),
                    signal: s(a)
                },
                g = {
                    type: l(a),
                    id: l(a),
                    rawId: l(o),
                    authenticatorAttachment: s(a),
                    response: l({
                        clientDataJSON: l(o),
                        authenticatorData: l(o),
                        signature: l(o),
                        userHandle: l(o)
                    }),
                    clientExtensionResults: c(d, t => t.getClientExtensionResults())
                };
            async function m(t) {
                let e = await navigator.credentials.create(u(r, p, t));
                return u(i, v, e)
            }
            async function w(t) {
                let e = await navigator.credentials.get(u(r, y, t));
                return u(i, g, e)
            }
        },
        506838: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                P: function() {
                    return Y
                },
                match: function() {
                    return Q
                }
            });
            let r = Symbol.for("@ts-pattern/matcher"),
                i = Symbol.for("@ts-pattern/isVariadic"),
                a = "@ts-pattern/anonymous-select-key",
                o = t => !!(t && "object" == typeof t),
                u = t => t && !!t[r],
                c = (t, e, n) => {
                    if (u(t)) {
                        let i = t[r](),
                            {
                                matched: a,
                                selections: o
                            } = i.match(e);
                        return a && o && Object.keys(o).forEach(t => n(t, o[t])), a
                    }
                    if (o(t)) {
                        if (!o(e)) return !1;
                        if (Array.isArray(t)) {
                            if (!Array.isArray(e)) return !1;
                            let r = [],
                                a = [],
                                o = [];
                            for (let e of t.keys()) {
                                let n = t[e];
                                u(n) && n[i] ? o.push(n) : o.length ? a.push(n) : r.push(n)
                            }
                            if (o.length) {
                                if (o.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (e.length < r.length + a.length) return !1;
                                let t = e.slice(0, r.length),
                                    i = 0 === a.length ? [] : e.slice(-a.length),
                                    u = e.slice(r.length, 0 === a.length ? 1 / 0 : -a.length);
                                return r.every((e, r) => c(e, t[r], n)) && a.every((t, e) => c(t, i[e], n)) && (0 === o.length || c(o[0], u, n))
                            }
                            return t.length === e.length && t.every((t, r) => c(t, e[r], n))
                        }
                        return Object.keys(t).every(i => {
                            let a = t[i];
                            return (i in e || u(a) && "optional" === a[r]().matcherType) && c(a, e[i], n)
                        })
                    }
                    return Object.is(e, t)
                },
                l = t => {
                    var e, n, i;
                    return o(t) ? u(t) ? null != (e = null == (n = (i = t[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? e : [] : Array.isArray(t) ? s(t, l) : s(Object.values(t), l) : []
                },
                s = (t, e) => t.reduce((t, n) => t.concat(e(n)), []);

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
                            return void 0 === e ? (l(t).forEach(t => r(t, void 0)), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: c(t, e, r),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => l(t),
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
                        getSelectionKeys: () => s(e, l),
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
                            return s(e, l).forEach(t => r(t, void 0)), {
                                matched: e.some(e => c(e, t, r)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => s(e, l),
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
                    o = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
                return f({
                    [r]: () => ({
                        match: t => {
                            let e = {
                                [null != i ? i : a]: t
                            };
                            return {
                                matched: void 0 === o || c(o, t, (t, n) => {
                                    e[t] = n
                                }),
                                selections: e
                            }
                        },
                        getSelectionKeys: () => [null != i ? i : a].concat(void 0 === o ? [] : l(o))
                    })
                })
            }

            function w(t) {
                return "number" == typeof t
            }

            function x(t) {
                return "string" == typeof t
            }

            function b(t) {
                return "bigint" == typeof t
            }
            let C = f(g(function(t) {
                    return !0
                })),
                z = t => Object.assign(f(t), {
                    startsWith: e => z(v(t, g(t => x(t) && t.startsWith(e)))),
                    endsWith: e => z(v(t, g(t => x(t) && t.endsWith(e)))),
                    minLength: e => {
                        var n;
                        return z(v(t, (n = e, g(t => x(t) && t.length >= n))))
                    },
                    maxLength: e => {
                        var n;
                        return z(v(t, (n = e, g(t => x(t) && t.length <= n))))
                    },
                    includes: e => z(v(t, g(t => x(t) && t.includes(e)))),
                    regex: e => z(v(t, g(t => x(t) && !!t.match(e))))
                }),
                R = z(g(x)),
                A = (t, e) => g(n => w(n) && t <= n && e >= n),
                O = t => g(e => w(e) && e < t),
                k = t => g(e => w(e) && e > t),
                _ = t => g(e => w(e) && e <= t),
                E = t => g(e => w(e) && e >= t),
                S = () => g(t => w(t) && Number.isInteger(t)),
                P = () => g(t => w(t) && Number.isFinite(t)),
                V = () => g(t => w(t) && t > 0),
                j = () => g(t => w(t) && t < 0),
                F = t => Object.assign(f(t), {
                    between: (e, n) => F(v(t, A(e, n))),
                    lt: e => F(v(t, O(e))),
                    gt: e => F(v(t, k(e))),
                    lte: e => F(v(t, _(e))),
                    gte: e => F(v(t, E(e))),
                    int: () => F(v(t, S())),
                    finite: () => F(v(t, P())),
                    positive: () => F(v(t, V())),
                    negative: () => F(v(t, j()))
                }),
                M = F(g(w)),
                D = (t, e) => g(n => b(n) && t <= n && e >= n),
                U = t => g(e => b(e) && e < t),
                I = t => g(e => b(e) && e > t),
                N = t => g(e => b(e) && e <= t),
                H = t => g(e => b(e) && e >= t),
                T = () => g(t => b(t) && t > 0),
                B = () => g(t => b(t) && t < 0),
                K = t => Object.assign(f(t), {
                    between: (e, n) => K(v(t, D(e, n))),
                    lt: e => K(v(t, U(e))),
                    gt: e => K(v(t, I(e))),
                    lte: e => K(v(t, N(e))),
                    gte: e => K(v(t, H(e))),
                    positive: () => K(v(t, T())),
                    negative: () => K(v(t, B()))
                }),
                L = K(g(b)),
                W = f(g(function(t) {
                    return "boolean" == typeof t
                })),
                q = f(g(function(t) {
                    return "symbol" == typeof t
                })),
                X = f(g(function(t) {
                    return null == t
                }));
            var Y = {
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
                                if (0 === t.length) return l(n).forEach(t => {
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
                            getSelectionKeys: () => 0 === e.length ? [] : l(e[0])
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
                            getSelectionKeys: () => 0 === e.length ? [] : l(e[0])
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
                                let [a, o] = e;
                                return {
                                    matched: p(t, (t, e) => {
                                        let n = c(a, e, i),
                                            r = c(o, t, i);
                                        return n && r
                                    }),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : [...l(e[0]), ...l(e[1])]
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
                string: R,
                between: A,
                lt: O,
                gt: k,
                lte: _,
                gte: E,
                int: S,
                finite: P,
                positive: V,
                negative: j,
                number: M,
                betweenBigInt: D,
                ltBigInt: U,
                gtBigInt: I,
                lteBigInt: N,
                gteBigInt: H,
                positiveBigInt: T,
                negativeBigInt: B,
                bigint: L,
                boolean: W,
                symbol: q,
                nullish: X,
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

            function Q(t) {
                return new G(t, J)
            }
            class G {
                with() {
                    let t;
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    if (this.state.matched) return this;
                    let i = n[n.length - 1],
                        o = [n[0]];
                    3 === n.length && "function" == typeof n[1] ? (o.push(n[0]), t = n[1]) : n.length > 2 && o.push(...n.slice(1, n.length - 1));
                    let u = !1,
                        l = {},
                        s = (t, e) => {
                            u = !0, l[t] = e
                        },
                        f = o.some(t => c(t, this.input, s)) && (!t || t(this.input)) ? {
                            matched: !0,
                            value: i(u ? a in l ? l[a] : l : this.input, this.input)
                        } : J;
                    return new G(this.input, f)
                }
                when(t, e) {
                    if (this.state.matched) return this;
                    let n = !!t(this.input);
                    return new G(this.input, n ? {
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
        }
    }
]);
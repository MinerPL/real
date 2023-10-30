(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["10478"], {
        516555: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ConfettiCanvas: function() {
                    return S
                },
                Environment: function() {
                    return f
                },
                SpriteCanvas: function() {
                    return E
                },
                useConfettiCannon: function() {
                    return P
                }
            });
            var i = n("884691"),
                r = n("748820"),
                o = n("414456"),
                a = n.n(o);

            function u(t, e) {
                var n = t.x,
                    i = t.y;
                return n > e.x && n < e.x + e.width && i > e.y && i < e.y + e.height
            }

            function l(t, e) {
                return t * e * e * (e > 0 ? -1 : 1)
            }
            var c = function() {
                    function t(t) {
                        this.id = t.id, this.position = t.position, this.velocity = t.velocity, this.rotation = t.rotation, this.dragCoefficient = t.dragCoefficient, this.size = t.size, this.opacity = t.opacity, this.spriteX = t.spriteX, this.spriteY = t.spriteY, this.spriteWidth = t.spriteWidth, this.spriteHeight = t.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return t.prototype.getNewForces = function(t, e) {
                        var n, i, r, o, a = t.wind * e,
                            u = -t.gravity * e;
                        return {
                            x: a + (n = this.dragCoefficient.x, n * (i = this.velocity.x) * i * (i > 0 ? -1 : 1)),
                            y: u + (r = this.dragCoefficient.y, r * (o = this.velocity.y) * o * (o > 0 ? -1 : 1))
                        }
                    }, t.prototype.update = function(t) {
                        var e = Date.now(),
                            n = (e - this._lastUpdatedAt) / 100;
                        this.rotation.update(n), this.dragCoefficient.update(n);
                        var i = this.getNewForces(t, n),
                            r = i.x,
                            o = i.y;
                        this.velocity.update(n), this.velocity.x += r, this.velocity.y += o, this.position.update(n), this.position.x += this.velocity.x * n, this.position.y += this.velocity.y * n, this.size.update(n), this.opacity.update(n), this._lastUpdatedAt = e
                    }, t.prototype.previewPositionUpdate = function(t, e) {
                        var n = e / 100,
                            i = this.velocity.previewUpdate(n),
                            r = this.getNewForces(t, n),
                            o = r.x,
                            a = r.y;
                        i.x += o, i.y += a;
                        var u = this.position.previewUpdate(n);
                        return u.x += i.x * n, u.y += i.y * n, u
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
                        i = e.wind;
                    this.gravity = -9.8, this.wind = 0, this.gravity = null != n ? n : this.gravity, this.wind = null != i ? i : this.wind
                },
                d = function(t, e) {
                    return (d = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
                };

            function p(t, e) {
                if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function n() {
                    this.constructor = t
                }
                d(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var h = function() {
                    return (h = Object.assign || function(t) {
                        for (var e, n = 1, i = arguments.length; n < i; n++)
                            for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
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
                m = function(t) {
                    function e(e, n, i) {
                        var r = t.call(this, e, n) || this;
                        return r._z = i, r
                    }
                    return p(e, t), e.prototype.update = function(e) {
                        t.prototype.update.call(this, e), this._z.update(e)
                    }, e.prototype.previewUpdate = function(e) {
                        var n = t.prototype.previewUpdate.call(this, e);
                        return h(h({}, n), {
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
                g = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return p(e, t), e.prototype.update = function() {}, e.prototype.previewUpdate = function() {
                        return this.value
                    }, e
                }(v),
                w = function(t) {
                    function e(e, n) {
                        var i = t.call(this, e) || this;
                        return i.addValue = n, i
                    }
                    return p(e, t), e.prototype.update = function(t) {
                        this.value = this.previewUpdate(t)
                    }, e.prototype.previewUpdate = function(t) {
                        return this.value + this.addValue * t
                    }, e
                }(v),
                x = function(t) {
                    function e(e, n, i, r, o, a) {
                        var u = t.call(this, e) || this;
                        u.min = n, u.max = i, u.duration = r;
                        var l = u.value / (u.max - u.min) * u.duration,
                            c = isNaN(l) ? 0 : l;
                        return u.timePassed = c < 0 ? u.duration - c : c, u.directionMultiplier = o, u.easingFunction = a, u
                    }
                    return p(e, t), e.prototype.update = function(t) {
                        var e = this.doUpdate(t),
                            n = e[0],
                            i = e[1],
                            r = e[2];
                        this.value = n, this.directionMultiplier = r, this.timePassed = i
                    }, e.prototype.previewUpdate = function(t) {
                        return this.doUpdate(t)[0]
                    }, e.prototype.doUpdate = function(t) {
                        var e = this.max - this.min,
                            n = this.timePassed + t * this.directionMultiplier,
                            i = Math.min(Math.max(n, 0), this.duration),
                            r = n < 0 || n > this.duration ? -1 * this.directionMultiplier : this.directionMultiplier,
                            o = this.easingFunction(i, this.min, e, this.duration);
                        return [isNaN(o) ? 0 : o, i, r]
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

            function O(t) {
                return "number" == typeof t ? {
                    x: t,
                    y: t
                } : t
            }

            function k(t) {
                return "number" == typeof t ? {
                    x: t,
                    y: t,
                    z: t
                } : t
            }

            function R(t) {
                return function(t) {
                    switch (t.type) {
                        case "static":
                            var e = O(t.value);
                            return new y(new g(e.x), new g(e.y));
                        case "static-random":
                            var n = O(t.minValue),
                                i = O(t.maxValue);
                            return new y(new g(b(n.x, i.x)), new g(b(n.y, i.y)));
                        case "linear":
                            e = O(t.value);
                            var r = O(t.addValue);
                            return new y(new w(e.x, r.x), new w(e.y, r.y));
                        case "linear-random":
                            n = O(t.minValue), i = O(t.maxValue);
                            var o = O(t.minAddValue),
                                a = O(t.maxAddValue);
                            return new y(new w(b(n.x, i.x), b(o.x, a.x)), new w(b(n.y, i.y), b(o.x, a.x)));
                        case "oscillating":
                            e = O(t.value);
                            var u = O(t.start),
                                l = O(t.final),
                                c = O(t.duration),
                                s = O(t.direction);
                            return new y(new x(e.x, u.x, l.x, c.x, s.x, t.easingFunction), new x(e.y, u.y, l.y, c.x, s.y, t.easingFunction));
                        case "oscillating-random":
                            n = O(t.minValue), i = O(t.maxValue);
                            var f = O(t.minStart),
                                d = O(t.maxStart),
                                p = O(t.minFinal),
                                h = O(t.maxFinal),
                                v = O(t.minDuration),
                                m = O(t.maxDuration),
                                k = O(t.minDirection),
                                R = O(t.maxDirection);
                            return new y(new x(b(n.x, i.x), b(f.x, d.x), b(p.x, h.x), b(v.x, m.x), z(k.x, R.x), C(t.easingFunctions)[0]), new x(b(n.y, i.y), b(f.y, d.y), b(p.y, h.y), b(v.y, m.y), z(k.y, R.y), C(t.easingFunctions)[0]))
                    }
                }(h(h({}, t), {
                    valueType: "Vector2"
                }))
            }
            var S = i.forwardRef(function(t, e) {
                var o = t.className,
                    a = t.environment,
                    l = t.onClick,
                    f = t.onMouseDown,
                    d = t.onMouseMove,
                    p = t.onMouseUp,
                    v = t.onBeforeRender,
                    y = t.onAfterRender,
                    O = function(t, e) {
                        var n = {};
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && 0 > e.indexOf(i) && (n[i] = t[i]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (i = Object.getOwnPropertySymbols(t); r < i.length; r++) 0 > e.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]])
                        }
                        return n
                    }(t, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    S = i.useRef(null),
                    E = i.useRef(new Map),
                    P = i.useRef(null),
                    j = i.useRef(0),
                    _ = i.useRef(0),
                    V = i.useCallback(function() {
                        var t = S.current;
                        if (null != t) {
                            var e = t.getContext("2d");
                            if (null != e) {
                                e.clearRect(0, 0, t.width, t.height), null == v || v(e), E.current.forEach(function(n, i) {
                                    var r = n.confetti,
                                        o = n.spriteCanvas;
                                    r.update(a), r.draw(o, e), r.shouldDestroy(t, a) && E.current.delete(i)
                                }), null == y || y(e), E.current.size > 0 ? P.current = window.requestAnimationFrame(V) : (e.clearRect(0, 0, t.width, t.height), P.current = null);
                                var n = Date.now();
                                0 !== j.current && (_.current = 1e3 / (n - j.current)), j.current = n
                            }
                        }
                    }, [a, y, v]);
                i.useEffect(function() {
                    null != P.current && (window.cancelAnimationFrame(P.current), P.current = window.requestAnimationFrame(V))
                }, [V]);
                var F = i.useCallback(function(t, e) {
                        E.current.set(t.id, {
                            confetti: t,
                            spriteCanvas: e
                        }), null == P.current && V()
                    }, [V]),
                    M = i.useCallback(function(t, e, n, i, o) {
                        var a, u, l, f, d, p, v, y, O, S, E, P, j, _, V, M = (a = null !== (V = t.id) && void 0 !== V ? V : (0, r.v4)(), u = t, l = n, f = i, d = o, y = R((v = (p = u, h(h({
                            id: a
                        }, s), p))).size), S = (O = function(t, e) {
                            if (null != t) {
                                var n = e.sprites.findIndex(function(e) {
                                    return "string" == typeof t ? e.src === t && e.colorize : e.src === t.src && e.colorize === t.colorize
                                });
                                if (-1 !== n) return [t, n]
                            }
                            return C(e.sprites)
                        }(f, l))[0], E = O[1], P = function(t, e, n) {
                            if (!("string" == typeof(i = t) || i.colorize)) return 0;
                            var i, r = null != e ? n.colors.findIndex(function(t) {
                                return t === e
                            }) : -1;
                            return -1 !== r ? r : Math.floor(b(0, n.colors.length - 1))
                        }(null != f ? f : S, d, l), new c({
                            id: a,
                            position: R(v.position),
                            velocity: R(v.velocity),
                            rotation: (j = v.rotation, function(t) {
                                switch (t.type) {
                                    case "static":
                                        var e = k(t.value);
                                        return new m(new g(e.x), new g(e.y), new g(e.z));
                                    case "static-random":
                                        var n = k(t.minValue),
                                            i = k(t.maxValue);
                                        return new m(new g(b(n.x, i.x)), new g(b(n.y, i.y)), new g(b(n.z, i.z)));
                                    case "linear":
                                        e = k(t.value);
                                        var r = k(t.addValue);
                                        return new m(new w(e.x, r.x), new w(e.y, r.y), new w(e.z, r.z));
                                    case "linear-random":
                                        n = k(t.minValue), i = k(t.maxValue);
                                        var o = k(t.minAddValue),
                                            a = k(t.maxAddValue);
                                        return new m(new w(b(n.x, i.x), b(o.x, a.x)), new w(b(n.y, i.y), b(o.y, a.y)), new w(b(n.z, i.z), b(o.z, a.z)));
                                    case "oscillating":
                                        e = k(t.value);
                                        var u = k(t.start),
                                            l = k(t.final),
                                            c = k(t.duration),
                                            s = k(t.direction);
                                        return new m(new x(e.x, u.x, l.x, c.x, s.x, t.easingFunction), new x(e.y, u.y, l.y, c.z, s.y, t.easingFunction), new x(e.z, u.z, l.z, c.z, s.z, t.easingFunction));
                                    case "oscillating-random":
                                        n = k(t.minValue), i = k(t.maxValue);
                                        var f = k(t.minStart),
                                            d = k(t.maxStart),
                                            p = k(t.minFinal),
                                            h = k(t.maxFinal),
                                            v = k(t.minDuration),
                                            y = k(t.maxDuration),
                                            O = k(t.minDirection),
                                            R = k(t.maxDirection);
                                        return new m(new x(b(n.x, i.x), b(f.x, d.x), b(p.x, h.x), b(v.x, y.x), z(O.x, R.x), C(t.easingFunctions)[0]), new x(b(n.y, i.y), b(f.y, d.y), b(p.y, h.y), b(v.y, y.y), z(O.y, R.y), C(t.easingFunctions)[0]), new x(b(n.z, i.z), b(f.z, d.z), b(p.z, h.z), b(v.z, y.z), z(O.z, R.z), C(t.easingFunctions)[0]))
                                }
                            }(h(h({}, j), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: R(v.dragCoefficient),
                            size: y,
                            opacity: (_ = v.opacity, function(t) {
                                switch (t.type) {
                                    case "static":
                                        return new g(t.value);
                                    case "static-random":
                                        return new g(b(t.minValue, t.maxValue));
                                    case "linear":
                                        return new w(t.value, t.addValue);
                                    case "linear-random":
                                        return new w(b(t.minValue, t.maxValue), b(t.minAddValue, t.maxAddValue));
                                    case "oscillating":
                                        return new x(t.value, t.start, t.final, t.duration, t.direction, t.easingFunction);
                                    case "oscillating-random":
                                        return new x(b(t.minValue, t.maxValue), b(t.minStart, t.maxStart), b(t.minFinal, t.maxFinal), b(t.minDuration, t.maxDuration), z(t.minDirection, t.maxDirection), C(t.easingFunctions)[0])
                                }
                            }(h(h({}, _), {
                                valueType: "number"
                            }))),
                            spriteX: P * l.spriteWidth + 2 * P,
                            spriteY: E * l.spriteHeight + 2 * E,
                            spriteWidth: l.spriteWidth,
                            spriteHeight: l.spriteHeight
                        }));
                        return F(M, e), M
                    }, [F]),
                    D = i.useCallback(function(t) {
                        E.current.delete(t)
                    }, []),
                    U = i.useCallback(function() {
                        return E.current.clear()
                    }, []),
                    A = i.useCallback(function() {
                        return S.current
                    }, []);
                i.useImperativeHandle(e, function() {
                    return {
                        createConfetti: M,
                        addConfetti: F,
                        deleteConfetti: D,
                        clearConfetti: U,
                        getCanvas: A
                    }
                }, [M, F, D, U, A]);
                var H = i.useCallback(function(t, e) {
                        var n, i, r = e.clickHandler,
                            o = e.mouseHandler;
                        if (null != r || null != o) {
                            var l = null === (n = S.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != l) {
                                var c = function(t, e) {
                                    if (null == e) throw Error("element should not be null");
                                    var n = e.getBoundingClientRect();
                                    return {
                                        x: t.clientX - n.left,
                                        y: t.clientY - n.top
                                    }
                                }(t, S.current);
                                if (u(c, {
                                        x: l.left,
                                        y: l.top,
                                        width: l.width,
                                        height: l.height
                                    })) {
                                    if (null != o) return o(t);
                                    if (null != r) {
                                        var s = -1e3 / _.current * 2,
                                            f = function(t, e) {
                                                for (var n = 0, i = Array.from(t.values()); n < i.length; n++) {
                                                    var r = i[n];
                                                    if (null != r && e(r)) return r
                                                }
                                                return null
                                            }(E.current, function(t) {
                                                var e = t.confetti,
                                                    n = e.previewPositionUpdate(a, s);
                                                return u(c, {
                                                    x: n.x - e.width / 2,
                                                    y: n.y - e.height / 2,
                                                    width: e.width,
                                                    height: e.height
                                                })
                                            });
                                        r(t, null !== (i = null == f ? void 0 : f.confetti) && void 0 !== i ? i : null)
                                    }
                                }
                            }
                        }
                    }, [a]),
                    T = i.useCallback(function(t) {
                        return H(t, {
                            clickHandler: l
                        })
                    }, [H, l]),
                    I = i.useCallback(function(t) {
                        return H(t, {
                            clickHandler: f
                        })
                    }, [H, f]),
                    N = i.useCallback(function(t) {
                        return H(t, {
                            mouseHandler: d
                        })
                    }, [H, d]),
                    W = i.useCallback(function(t) {
                        return H(t, {
                            mouseHandler: p
                        })
                    }, [H, p]);
                return i.useEffect(function() {
                    var t = function(t, e, n) {
                        null != n && window.addEventListener(t, e)
                    };
                    return t("click", T, l), t("mousedown", I, f), t("mousemove", N, d), t("mouseup", W, p),
                        function() {
                            window.removeEventListener("click", T), window.removeEventListener("mousedown", I), window.removeEventListener("mousemove", N), window.removeEventListener("mouseup", N)
                        }
                }, [T, I, N, W, l, f, d, p]), i.useEffect(function() {
                    var t = S.current,
                        e = new ResizeObserver(function() {
                            ! function(t) {
                                if (null != t) {
                                    var e = t.getBoundingClientRect(),
                                        i = e.width,
                                        r = e.height;
                                    t.width = i * n.g.devicePixelRatio, t.height = r * n.g.devicePixelRatio
                                }
                            }(S.current)
                        });
                    return null != t && e.observe(t),
                        function() {
                            null != t && e.unobserve(t)
                        }
                }, []), i.createElement("canvas", h({}, O, {
                    className: o,
                    ref: S
                }))
            });
            ! function(t, e) {
                void 0 === e && (e = {});
                var n = e.insertAt;
                if (t && "undefined" != typeof document) {
                    var i = document.head || document.getElementsByTagName("head")[0],
                        r = document.createElement("style");
                    r.type = "text/css", "top" === n && i.firstChild ? i.insertBefore(r, i.firstChild) : i.appendChild(r), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(document.createTextNode(t))
                }
            }(".SpriteCanvas-module_spriteCanvasHidden__ndzQV {\n  display: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -100%;\n}\n");
            var E = i.forwardRef(function(t, e) {
                var n, o = t.className,
                    u = t.visible,
                    l = void 0 !== u && u,
                    c = t.sprites,
                    s = t.colors,
                    f = t.spriteWidth,
                    d = t.spriteHeight,
                    p = i.useRef(null),
                    h = i.useRef([]),
                    v = i.useRef(!1),
                    y = i.useRef({});
                i.useImperativeHandle(e, function() {
                    return {
                        getCanvas: function() {
                            return p.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: h.current,
                                colors: s,
                                spriteWidth: f,
                                spriteHeight: d
                            }
                        },
                        addReadyListener: function(t) {
                            var e = (0, r.v4)();
                            return y.current[e] = t, e
                        },
                        removeReadyListener: function(t) {
                            delete y.current[t]
                        },
                        isReady: v.current
                    }
                }, [s, d, f]);
                var m = i.useCallback(function() {
                        var t = p.current,
                            e = null == t ? void 0 : t.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != e && null != t && (e.clearRect(0, 0, t.width, t.height), h.current.forEach(function(t, n) {
                            var i = function(i, r) {
                                var o = f * r + 2 * r,
                                    a = d * n + 2 * n;
                                if (e.drawImage(t.image, o, a, f, d), null != i) {
                                    for (var u, l, c = e.getImageData(o, a, f, d), s = ("#" === (u = i)[0] && (u = u.slice(1)), {
                                            r: (l = parseInt(u, 16)) >> 16 & 255,
                                            g: l >> 8 & 255,
                                            b: 255 & l
                                        }), p = 0; p < c.data.length; p += 4) c.data[p] = s.r, c.data[p + 1] = s.g, c.data[p + 2] = s.b;
                                    e.putImageData(c, o, a)
                                }
                            };
                            t.colorize ? s.forEach(function(t, e) {
                                return i(t, e)
                            }) : i(null, 0)
                        }))
                    }, [s, d, f]),
                    g = i.useCallback(function() {
                        var t = c.map(function(t) {
                            var e = new Image,
                                n = "string" == typeof t ? t : t.src,
                                i = "string" == typeof t || t.colorize;
                            e.src = n;
                            var r = new Promise(function(t) {
                                e.onload = t
                            });
                            return {
                                colorize: i,
                                image: e,
                                src: n,
                                loadPromise: r
                            }
                        });
                        return Promise.all(t.map(function(t) {
                            return t.loadPromise
                        })).then(function() {
                            h.current = t.map(function(t) {
                                return {
                                    colorize: t.colorize,
                                    image: t.image,
                                    src: t.src
                                }
                            })
                        })
                    }, [c]),
                    w = i.useCallback(function(t) {
                        for (var e in y.current) y.current[e](t)
                    }, []),
                    x = i.useCallback(function() {
                        var t, e, n, i;
                        return t = void 0, e = void 0, n = void 0, i = function() {
                            return function(t, e) {
                                var n, i, r, o, a = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & r[0]) throw r[1];
                                        return r[1]
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
                                    return function(l) {
                                        return function(u) {
                                            if (n) throw TypeError("Generator is already executing.");
                                            for (; o && (o = 0, u[0] && (a = 0)), a;) try {
                                                if (n = 1, i && (r = 2 & u[0] ? i.return : u[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, u[1])).done) return r;
                                                switch (i = 0, r && (u = [2 & u[0], r.value]), u[0]) {
                                                    case 0:
                                                    case 1:
                                                        r = u;
                                                        break;
                                                    case 4:
                                                        return a.label++, {
                                                            value: u[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        a.label++, i = u[1], u = [0];
                                                        continue;
                                                    case 7:
                                                        u = a.ops.pop(), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                                            a = 0;
                                                            continue
                                                        }
                                                        if (3 === u[0] && (!r || u[1] > r[0] && u[1] < r[3])) {
                                                            a.label = u[1];
                                                            break
                                                        }
                                                        if (6 === u[0] && a.label < r[1]) {
                                                            a.label = r[1], r = u;
                                                            break
                                                        }
                                                        if (r && a.label < r[2]) {
                                                            a.label = r[2], a.ops.push(u);
                                                            break
                                                        }
                                                        r[2] && a.ops.pop(), a.trys.pop();
                                                        continue
                                                }
                                                u = e.call(t, a)
                                            } catch (t) {
                                                u = [6, t], i = 0
                                            } finally {
                                                n = r = 0
                                            }
                                            if (5 & u[0]) throw u[1];
                                            return {
                                                value: u[0] ? u[1] : void 0,
                                                done: !0
                                            }
                                        }([u, l])
                                    }
                                }
                            }(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, g()];
                                    case 1:
                                        return t.sent(), m(), v.current = !0, w(!0), [2]
                                }
                            })
                        }, new(n || (n = Promise))(function(r, o) {
                            function a(t) {
                                try {
                                    l(i.next(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function u(t) {
                                try {
                                    l(i.throw(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function l(t) {
                                var e;
                                t.done ? r(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                                    t(e)
                                })).then(a, u)
                            }
                            l((i = i.apply(t, e || [])).next())
                        })
                    }, [w, g, m]);
                return i.useEffect(function() {
                    x()
                }, [x]), i.useEffect(function() {
                    return function() {
                        return w(!1)
                    }
                }, [w]), i.useEffect(function() {
                    null != p.current && (p.current.width = (f + 2) * Math.max(s.length, 1), p.current.height = (d + 2) * c.length)
                }, [s.length, d, f, c.length]), i.createElement("canvas", {
                    ref: p,
                    className: a(o, ((n = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !l, n))
                })
            });

            function P(t, e) {
                var n, r = i.useState(null !== (n = null == e ? void 0 : e.isReady) && void 0 !== n && n),
                    o = r[0],
                    a = r[1];
                i.useEffect(function() {
                    var t = null == e ? void 0 : e.addReadyListener(a);
                    return function() {
                        null != t && (null == e || e.removeReadyListener(t))
                    }
                }, [e]);
                var u = i.useCallback(function(n, i) {
                        var r = void 0 === i ? {} : i,
                            o = r.sprite,
                            a = r.color,
                            u = null == e ? void 0 : e.getCreateData(),
                            l = null == e ? void 0 : e.getCanvas();
                        if (null != l && null != u && 0 !== u.sprites.length) return null == t ? void 0 : t.createConfetti(n, l, u, o, a)
                    }, [t, e]),
                    l = i.useCallback(function(t, e, n) {
                        for (var i = [], r = 0; r < e; r++) {
                            var o = u(t, n);
                            o && i.push(o)
                        }
                        return i
                    }, [u]),
                    c = i.useCallback(function(n) {
                        var i = null == e ? void 0 : e.getCanvas();
                        null != i && (null == t || t.addConfetti(n, i))
                    }, [t, e]),
                    s = i.useCallback(function(e) {
                        null == t || t.deleteConfetti(e)
                    }, [t]),
                    f = i.useCallback(function() {
                        return null == t ? void 0 : t.clearConfetti()
                    }, [t]);
                return i.useMemo(function() {
                    return {
                        createConfetti: u,
                        createMultipleConfetti: l,
                        addConfetti: c,
                        clearConfetti: f,
                        deleteConfetti: s,
                        isReady: o && null != e && null != t
                    }
                }, [c, f, t, u, l, s, o, e])
            }
        },
        717837: function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                return (t = String(t || ""), o.test(t)) ? "rtl" : a.test(t) ? "ltr" : "neutral"
            };
            var i = "֑-߿יִ-﷽ﹰ-ﻼ",
                r = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                o = RegExp("^[^" + r + "]*[" + i + "]"),
                a = RegExp("^[^" + i + "]*[" + r + "]")
        },
        506264: function(t, e, n) {
            var i = n("626849").Symbol;
            t.exports = i
        },
        60297: function(t, e, n) {
            var i = n("506264"),
                r = n("754892"),
                o = n("19797"),
                a = i ? i.toStringTag : void 0;
            t.exports = function(t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : a && a in Object(t) ? r(t) : o(t)
            }
        },
        306551: function(t, e, n) {
            var i = n("84927"),
                r = /^\s+/;
            t.exports = function(t) {
                return t ? t.slice(0, i(t) + 1).replace(r, "") : t
            }
        },
        571255: function(t, e, n) {
            var i = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
            t.exports = i
        },
        754892: function(t, e, n) {
            var i = n("506264"),
                r = Object.prototype,
                o = r.hasOwnProperty,
                a = r.toString,
                u = i ? i.toStringTag : void 0;
            t.exports = function(t) {
                var e = o.call(t, u),
                    n = t[u];
                try {
                    t[u] = void 0;
                    var i = !0
                } catch (t) {}
                var r = a.call(t);
                return i && (e ? t[u] = n : delete t[u]), r
            }
        },
        19797: function(t, e, n) {
            var i = Object.prototype.toString;
            t.exports = function(t) {
                return i.call(t)
            }
        },
        626849: function(t, e, n) {
            var i = n("571255"),
                r = "object" == typeof self && self && self.Object === Object && self,
                o = i || r || Function("return this")();
            t.exports = o
        },
        84927: function(t, e, n) {
            var i = /\s/;
            t.exports = function(t) {
                for (var e = t.length; e-- && i.test(t.charAt(e)););
                return e
            }
        },
        478098: function(t, e, n) {
            var i = n("952133"),
                r = n("645942"),
                o = n("261497"),
                a = Math.max,
                u = Math.min;
            t.exports = function(t, e, n) {
                var l, c, s, f, d, p, h = 0,
                    v = !1,
                    y = !1,
                    m = !0;
                if ("function" != typeof t) throw TypeError("Expected a function");

                function g(e) {
                    var n = l,
                        i = c;
                    return l = c = void 0, h = e, f = t.apply(i, n)
                }
                e = o(e) || 0, i(n) && (v = !!n.leading, s = (y = "maxWait" in n) ? a(o(n.maxWait) || 0, e) : s, m = "trailing" in n ? !!n.trailing : m);

                function w(t) {
                    var n = t - p,
                        i = t - h;
                    return void 0 === p || n >= e || n < 0 || y && i >= s
                }

                function x() {
                    var t, n, i, o, a = r();
                    if (w(a)) return b(a);
                    d = setTimeout(x, (n = (t = a) - p, i = t - h, o = e - n, y ? u(o, s - i) : o))
                }

                function b(t) {
                    return (d = void 0, m && l) ? g(t) : (l = c = void 0, f)
                }

                function C() {
                    var t, n = r(),
                        i = w(n);
                    if (l = arguments, c = this, p = n, i) {
                        if (void 0 === d) {
                            ;
                            return h = t = p, d = setTimeout(x, e), v ? g(t) : f
                        }
                        if (y) return clearTimeout(d), d = setTimeout(x, e), g(p)
                    }
                    return void 0 === d && (d = setTimeout(x, e)), f
                }
                return C.cancel = function() {
                    void 0 !== d && clearTimeout(d), h = 0, l = p = c = d = void 0
                }, C.flush = function() {
                    return void 0 === d ? f : b(r())
                }, C
            }
        },
        952133: function(t, e, n) {
            t.exports = function(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            }
        },
        346173: function(t, e, n) {
            t.exports = function(t) {
                return null != t && "object" == typeof t
            }
        },
        501870: function(t, e, n) {
            var i = n("60297"),
                r = n("346173");
            t.exports = function(t) {
                return "symbol" == typeof t || r(t) && "[object Symbol]" == i(t)
            }
        },
        645942: function(t, e, n) {
            var i = n("626849");
            t.exports = function() {
                return i.Date.now()
            }
        },
        229042: function(t, e, n) {
            var i = n("478098"),
                r = n("952133");
            t.exports = function(t, e, n) {
                var o = !0,
                    a = !0;
                if ("function" != typeof t) throw TypeError("Expected a function");
                return r(n) && (o = "leading" in n ? !!n.leading : o, a = "trailing" in n ? !!n.trailing : a), i(t, e, {
                    leading: o,
                    maxWait: e,
                    trailing: a
                })
            }
        },
        261497: function(t, e, n) {
            var i = n("306551"),
                r = n("952133"),
                o = n("501870"),
                a = 0 / 0,
                u = /^[-+]0x[0-9a-f]+$/i,
                l = /^0b[01]+$/i,
                c = /^0o[0-7]+$/i,
                s = parseInt;
            t.exports = function(t) {
                if ("number" == typeof t) return t;
                if (o(t)) return a;
                if (r(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = r(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = i(t);
                var n = l.test(t);
                return n || c.test(t) ? s(t.slice(2), n ? 2 : 8) : u.test(t) ? a : +t
            }
        },
        136759: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                persist: function() {
                    return s
                }
            });
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var i = Object.defineProperty,
                r = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                a = Object.prototype.propertyIsEnumerable,
                u = (t, e, n) => e in t ? i(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : t[e] = n,
                l = (t, e) => {
                    for (var n in e || (e = {})) o.call(e, n) && u(t, n, e[n]);
                    if (r)
                        for (var n of r(e)) a.call(e, n) && u(t, n, e[n]);
                    return t
                };
            let c = t => e => {
                    try {
                        let n = t(e);
                        if (n instanceof Promise) return n;
                        return {
                            then: t => c(t)(n),
                            catch (t) {
                                return this
                            }
                        }
                    } catch (t) {
                        return {
                            then(t) {
                                return this
                            },
                            catch: e => c(e)(t)
                        }
                    }
                },
                s = (t, e) => (n, i, r) => {
                    let o, a, u = l({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: t => t,
                        version: 0,
                        merge: (t, e) => l(l({}, e), t)
                    }, e);
                    (u.blacklist || u.whitelist) && console.warn("The ".concat(u.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let s = !1,
                        f = new Set,
                        d = new Set;
                    try {
                        o = u.getStorage()
                    } catch (t) {}
                    if (!o) return t(function() {
                        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(u.name, "', the given storage is currently unavailable.")), n(...e)
                    }, i, r);
                    !o.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(u.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let p = c(u.serialize),
                        h = () => {
                            let t;
                            let e = u.partialize(l({}, i()));
                            u.whitelist && Object.keys(e).forEach(t => {
                                var n;
                                (null == (n = u.whitelist) ? void 0 : n.includes(t)) || delete e[t]
                            }), u.blacklist && u.blacklist.forEach(t => delete e[t]);
                            let n = p({
                                state: e,
                                version: u.version
                            }).then(t => o.setItem(u.name, t)).catch(e => {
                                t = e
                            });
                            if (t) throw t;
                            return n
                        },
                        v = r.setState;
                    r.setState = (t, e) => {
                        v(t, e), h()
                    };
                    let y = t(function() {
                            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                            n(...e), h()
                        }, i, r),
                        m = () => {
                            var t;
                            if (!o) return;
                            s = !1, f.forEach(t => t(i()));
                            let e = (null == (t = u.onRehydrateStorage) ? void 0 : t.call(u, i())) || void 0;
                            return c(o.getItem.bind(o))(u.name).then(t => {
                                if (t) return u.deserialize(t)
                            }).then(t => {
                                if (t) {
                                    if ("number" != typeof t.version || t.version === u.version) return t.state;
                                    if (u.migrate) return u.migrate(t.state, t.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(t => {
                                var e;
                                return n(a = u.merge(t, null != (e = i()) ? e : y), !0), h()
                            }).then(() => {
                                null == e || e(a, void 0), s = !0, d.forEach(t => t(a))
                            }).catch(t => {
                                null == e || e(void 0, t)
                            })
                        };
                    return r.persist = {
                        setOptions: t => {
                            u = l(l({}, u), t), t.getStorage && (o = t.getStorage())
                        },
                        clearStorage: () => {
                            var t;
                            null == (t = null == o ? void 0 : o.removeItem) || t.call(o, u.name)
                        },
                        rehydrate: () => m(),
                        hasHydrated: () => s,
                        onHydrate: t => (f.add(t), () => {
                            f.delete(t)
                        }),
                        onFinishHydration: t => (d.add(t), () => {
                            d.delete(t)
                        })
                    }, m(), a || y
                }
        }
    }
]);
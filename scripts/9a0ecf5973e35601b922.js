(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["12419"], {
        516555: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                ConfettiCanvas: function() {
                    return S
                },
                Environment: function() {
                    return _
                },
                SpriteCanvas: function() {
                    return N
                },
                useConfettiCannon: function() {
                    return g
                }
            });
            var n = i("884691"),
                r = i("748820"),
                o = i("414456"),
                a = i.n(o);

            function l(e, t) {
                var i = e.x,
                    n = e.y;
                return i > t.x && i < t.x + t.width && n > t.y && n < t.y + t.height
            }

            function s(e, t) {
                return e * t * t * (t > 0 ? -1 : 1)
            }
            var u = function() {
                    function e(e) {
                        this.id = e.id, this.position = e.position, this.velocity = e.velocity, this.rotation = e.rotation, this.dragCoefficient = e.dragCoefficient, this.size = e.size, this.opacity = e.opacity, this.spriteX = e.spriteX, this.spriteY = e.spriteY, this.spriteWidth = e.spriteWidth, this.spriteHeight = e.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return e.prototype.getNewForces = function(e, t) {
                        var i, n, r, o, a = e.wind * t,
                            l = -e.gravity * t;
                        return {
                            x: a + (i = this.dragCoefficient.x, i * (n = this.velocity.x) * n * (n > 0 ? -1 : 1)),
                            y: l + (r = this.dragCoefficient.y, r * (o = this.velocity.y) * o * (o > 0 ? -1 : 1))
                        }
                    }, e.prototype.update = function(e) {
                        var t = Date.now(),
                            i = (t - this._lastUpdatedAt) / 100;
                        this.rotation.update(i), this.dragCoefficient.update(i);
                        var n = this.getNewForces(e, i),
                            r = n.x,
                            o = n.y;
                        this.velocity.update(i), this.velocity.x += r, this.velocity.y += o, this.position.update(i), this.position.x += this.velocity.x * i, this.position.y += this.velocity.y * i, this.size.update(i), this.opacity.update(i), this._lastUpdatedAt = t
                    }, e.prototype.previewPositionUpdate = function(e, t) {
                        var i = t / 100,
                            n = this.velocity.previewUpdate(i),
                            r = this.getNewForces(e, i),
                            o = r.x,
                            a = r.y;
                        n.x += o, n.y += a;
                        var l = this.position.previewUpdate(i);
                        return l.x += n.x * i, l.y += n.y * i, l
                    }, e.prototype.draw = function(e, t) {
                        t.save(), t.globalAlpha = this.opacity.value, t.setTransform((new DOMMatrix).translateSelf(this.position.x * i.g.devicePixelRatio, this.position.y * i.g.devicePixelRatio).rotateSelf(this.rotation.x, this.rotation.y, this.rotation.z)), t.drawImage(e, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, -this.width / 2 * i.g.devicePixelRatio, -this.height / 2 * i.g.devicePixelRatio, this.width * i.g.devicePixelRatio, this.height * i.g.devicePixelRatio), t.restore()
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
                _ = function(e) {
                    var t = void 0 === e ? {} : e,
                        i = t.gravity,
                        n = t.wind;
                    this.gravity = -9.8, this.wind = 0, this.gravity = null != i ? i : this.gravity, this.wind = null != n ? n : this.wind
                },
                E = function(e, t) {
                    return (E = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
                };

            function d(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function i() {
                    this.constructor = e
                }
                E(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }
            var p = function() {
                    return (p = Object.assign || function(e) {
                        for (var t, i = 1, n = arguments.length; i < n; i++)
                            for (var r in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                },
                I = function(e) {
                    this.value = e
                },
                T = function() {
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
                    function t(t, i, n) {
                        var r = e.call(this, t, i) || this;
                        return r._z = n, r
                    }
                    return d(t, e), t.prototype.update = function(t) {
                        e.prototype.update.call(this, t), this._z.update(t)
                    }, t.prototype.previewUpdate = function(t) {
                        var i = e.prototype.previewUpdate.call(this, t);
                        return p(p({}, i), {
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
                }(T),
                f = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return d(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(I),
                h = function(e) {
                    function t(t, i) {
                        var n = e.call(this, t) || this;
                        return n.addValue = i, n
                    }
                    return d(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(I),
                A = function(e) {
                    function t(t, i, n, r, o, a) {
                        var l = e.call(this, t) || this;
                        l.min = i, l.max = n, l.duration = r;
                        var s = l.value / (l.max - l.min) * l.duration,
                            u = isNaN(s) ? 0 : s;
                        return l.timePassed = u < 0 ? l.duration - u : u, l.directionMultiplier = o, l.easingFunction = a, l
                    }
                    return d(t, e), t.prototype.update = function(e) {
                        var t = this.doUpdate(e),
                            i = t[0],
                            n = t[1],
                            r = t[2];
                        this.value = i, this.directionMultiplier = r, this.timePassed = n
                    }, t.prototype.previewUpdate = function(e) {
                        return this.doUpdate(e)[0]
                    }, t.prototype.doUpdate = function(e) {
                        var t = this.max - this.min,
                            i = this.timePassed + e * this.directionMultiplier,
                            n = Math.min(Math.max(i, 0), this.duration),
                            r = i < 0 || i > this.duration ? -1 * this.directionMultiplier : this.directionMultiplier,
                            o = this.easingFunction(n, this.min, t, this.duration);
                        return [isNaN(o) ? 0 : o, n, r]
                    }, t
                }(I);

            function C(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function O(e) {
                var t = Math.floor(C(0, e.length - 1));
                return [e[t], t]
            }

            function R(e, t) {
                return O([e, t])[0]
            }

            function M(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : e
            }

            function v(e) {
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
                            var t = M(e.value);
                            return new T(new f(t.x), new f(t.y));
                        case "static-random":
                            var i = M(e.minValue),
                                n = M(e.maxValue);
                            return new T(new f(C(i.x, n.x)), new f(C(i.y, n.y)));
                        case "linear":
                            t = M(e.value);
                            var r = M(e.addValue);
                            return new T(new h(t.x, r.x), new h(t.y, r.y));
                        case "linear-random":
                            i = M(e.minValue), n = M(e.maxValue);
                            var o = M(e.minAddValue),
                                a = M(e.maxAddValue);
                            return new T(new h(C(i.x, n.x), C(o.x, a.x)), new h(C(i.y, n.y), C(o.x, a.x)));
                        case "oscillating":
                            t = M(e.value);
                            var l = M(e.start),
                                s = M(e.final),
                                u = M(e.duration),
                                c = M(e.direction);
                            return new T(new A(t.x, l.x, s.x, u.x, c.x, e.easingFunction), new A(t.y, l.y, s.y, u.x, c.y, e.easingFunction));
                        case "oscillating-random":
                            i = M(e.minValue), n = M(e.maxValue);
                            var _ = M(e.minStart),
                                E = M(e.maxStart),
                                d = M(e.minFinal),
                                p = M(e.maxFinal),
                                I = M(e.minDuration),
                                m = M(e.maxDuration),
                                v = M(e.minDirection),
                                L = M(e.maxDirection);
                            return new T(new A(C(i.x, n.x), C(_.x, E.x), C(d.x, p.x), C(I.x, m.x), R(v.x, L.x), O(e.easingFunctions)[0]), new A(C(i.y, n.y), C(_.y, E.y), C(d.y, p.y), C(I.y, m.y), R(v.y, L.y), O(e.easingFunctions)[0]))
                    }
                }(p(p({}, e), {
                    valueType: "Vector2"
                }))
            }
            var S = n.forwardRef(function(e, t) {
                var o = e.className,
                    a = e.environment,
                    s = e.onClick,
                    _ = e.onMouseDown,
                    E = e.onMouseMove,
                    d = e.onMouseUp,
                    I = e.onBeforeRender,
                    T = e.onAfterRender,
                    M = function(e, t) {
                        var i = {};
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (i[n] = e[n]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) 0 > t.indexOf(n[r]) && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (i[n[r]] = e[n[r]])
                        }
                        return i
                    }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    S = n.useRef(null),
                    N = n.useRef(new Map),
                    g = n.useRef(null),
                    P = n.useRef(0),
                    U = n.useRef(0),
                    y = n.useCallback(function() {
                        var e = S.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == I || I(t), N.current.forEach(function(i, n) {
                                    var r = i.confetti,
                                        o = i.spriteCanvas;
                                    r.update(a), r.draw(o, t), r.shouldDestroy(e, a) && N.current.delete(n)
                                }), null == T || T(t), N.current.size > 0 ? g.current = window.requestAnimationFrame(y) : (t.clearRect(0, 0, e.width, e.height), g.current = null);
                                var i = Date.now();
                                0 !== P.current && (U.current = 1e3 / (i - P.current)), P.current = i
                            }
                        }
                    }, [a, T, I]);
                n.useEffect(function() {
                    null != g.current && (window.cancelAnimationFrame(g.current), g.current = window.requestAnimationFrame(y))
                }, [y]);
                var D = n.useCallback(function(e, t) {
                        N.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == g.current && y()
                    }, [y]),
                    b = n.useCallback(function(e, t, i, n, o) {
                        var a, l, s, _, E, d, I, T, M, S, N, g, P, U, y, b = (a = null !== (y = e.id) && void 0 !== y ? y : (0, r.v4)(), l = e, s = i, _ = n, E = o, T = L((I = (d = l, p(p({
                            id: a
                        }, c), d))).size), S = (M = function(e, t) {
                            if (null != e) {
                                var i = t.sprites.findIndex(function(t) {
                                    return "string" == typeof e ? t.src === e && t.colorize : t.src === e.src && t.colorize === e.colorize
                                });
                                if (-1 !== i) return [e, i]
                            }
                            return O(t.sprites)
                        }(_, s))[0], N = M[1], g = function(e, t, i) {
                            if (!("string" == typeof(n = e) || n.colorize)) return 0;
                            var n, r = null != t ? i.colors.findIndex(function(e) {
                                return e === t
                            }) : -1;
                            return -1 !== r ? r : Math.floor(C(0, i.colors.length - 1))
                        }(null != _ ? _ : S, E, s), new u({
                            id: a,
                            position: L(I.position),
                            velocity: L(I.velocity),
                            rotation: (P = I.rotation, function(e) {
                                switch (e.type) {
                                    case "static":
                                        var t = v(e.value);
                                        return new m(new f(t.x), new f(t.y), new f(t.z));
                                    case "static-random":
                                        var i = v(e.minValue),
                                            n = v(e.maxValue);
                                        return new m(new f(C(i.x, n.x)), new f(C(i.y, n.y)), new f(C(i.z, n.z)));
                                    case "linear":
                                        t = v(e.value);
                                        var r = v(e.addValue);
                                        return new m(new h(t.x, r.x), new h(t.y, r.y), new h(t.z, r.z));
                                    case "linear-random":
                                        i = v(e.minValue), n = v(e.maxValue);
                                        var o = v(e.minAddValue),
                                            a = v(e.maxAddValue);
                                        return new m(new h(C(i.x, n.x), C(o.x, a.x)), new h(C(i.y, n.y), C(o.y, a.y)), new h(C(i.z, n.z), C(o.z, a.z)));
                                    case "oscillating":
                                        t = v(e.value);
                                        var l = v(e.start),
                                            s = v(e.final),
                                            u = v(e.duration),
                                            c = v(e.direction);
                                        return new m(new A(t.x, l.x, s.x, u.x, c.x, e.easingFunction), new A(t.y, l.y, s.y, u.z, c.y, e.easingFunction), new A(t.z, l.z, s.z, u.z, c.z, e.easingFunction));
                                    case "oscillating-random":
                                        i = v(e.minValue), n = v(e.maxValue);
                                        var _ = v(e.minStart),
                                            E = v(e.maxStart),
                                            d = v(e.minFinal),
                                            p = v(e.maxFinal),
                                            I = v(e.minDuration),
                                            T = v(e.maxDuration),
                                            M = v(e.minDirection),
                                            L = v(e.maxDirection);
                                        return new m(new A(C(i.x, n.x), C(_.x, E.x), C(d.x, p.x), C(I.x, T.x), R(M.x, L.x), O(e.easingFunctions)[0]), new A(C(i.y, n.y), C(_.y, E.y), C(d.y, p.y), C(I.y, T.y), R(M.y, L.y), O(e.easingFunctions)[0]), new A(C(i.z, n.z), C(_.z, E.z), C(d.z, p.z), C(I.z, T.z), R(M.z, L.z), O(e.easingFunctions)[0]))
                                }
                            }(p(p({}, P), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: L(I.dragCoefficient),
                            size: T,
                            opacity: (U = I.opacity, function(e) {
                                switch (e.type) {
                                    case "static":
                                        return new f(e.value);
                                    case "static-random":
                                        return new f(C(e.minValue, e.maxValue));
                                    case "linear":
                                        return new h(e.value, e.addValue);
                                    case "linear-random":
                                        return new h(C(e.minValue, e.maxValue), C(e.minAddValue, e.maxAddValue));
                                    case "oscillating":
                                        return new A(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                                    case "oscillating-random":
                                        return new A(C(e.minValue, e.maxValue), C(e.minStart, e.maxStart), C(e.minFinal, e.maxFinal), C(e.minDuration, e.maxDuration), R(e.minDirection, e.maxDirection), O(e.easingFunctions)[0])
                                }
                            }(p(p({}, U), {
                                valueType: "number"
                            }))),
                            spriteX: g * s.spriteWidth + 2 * g,
                            spriteY: N * s.spriteHeight + 2 * N,
                            spriteWidth: s.spriteWidth,
                            spriteHeight: s.spriteHeight
                        }));
                        return D(b, t), b
                    }, [D]),
                    w = n.useCallback(function(e) {
                        N.current.delete(e)
                    }, []),
                    x = n.useCallback(function() {
                        return N.current.clear()
                    }, []),
                    G = n.useCallback(function() {
                        return S.current
                    }, []);
                n.useImperativeHandle(t, function() {
                    return {
                        createConfetti: b,
                        addConfetti: D,
                        deleteConfetti: w,
                        clearConfetti: x,
                        getCanvas: G
                    }
                }, [b, D, w, x, G]);
                var H = n.useCallback(function(e, t) {
                        var i, n, r = t.clickHandler,
                            o = t.mouseHandler;
                        if (null != r || null != o) {
                            var s = null === (i = S.current) || void 0 === i ? void 0 : i.getBoundingClientRect();
                            if (null != s) {
                                var u = function(e, t) {
                                    if (null == t) throw Error("element should not be null");
                                    var i = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - i.left,
                                        y: e.clientY - i.top
                                    }
                                }(e, S.current);
                                if (l(u, {
                                        x: s.left,
                                        y: s.top,
                                        width: s.width,
                                        height: s.height
                                    })) {
                                    if (null != o) return o(e);
                                    if (null != r) {
                                        var c = -1e3 / U.current * 2,
                                            _ = function(e, t) {
                                                for (var i = 0, n = Array.from(e.values()); i < n.length; i++) {
                                                    var r = n[i];
                                                    if (null != r && t(r)) return r
                                                }
                                                return null
                                            }(N.current, function(e) {
                                                var t = e.confetti,
                                                    i = t.previewPositionUpdate(a, c);
                                                return l(u, {
                                                    x: i.x - t.width / 2,
                                                    y: i.y - t.height / 2,
                                                    width: t.width,
                                                    height: t.height
                                                })
                                            });
                                        r(e, null !== (n = null == _ ? void 0 : _.confetti) && void 0 !== n ? n : null)
                                    }
                                }
                            }
                        }
                    }, [a]),
                    B = n.useCallback(function(e) {
                        return H(e, {
                            clickHandler: s
                        })
                    }, [H, s]),
                    V = n.useCallback(function(e) {
                        return H(e, {
                            clickHandler: _
                        })
                    }, [H, _]),
                    F = n.useCallback(function(e) {
                        return H(e, {
                            mouseHandler: E
                        })
                    }, [H, E]),
                    k = n.useCallback(function(e) {
                        return H(e, {
                            mouseHandler: d
                        })
                    }, [H, d]);
                return n.useEffect(function() {
                    var e = function(e, t, i) {
                        null != i && window.addEventListener(e, t)
                    };
                    return e("click", B, s), e("mousedown", V, _), e("mousemove", F, E), e("mouseup", k, d),
                        function() {
                            window.removeEventListener("click", B), window.removeEventListener("mousedown", V), window.removeEventListener("mousemove", F), window.removeEventListener("mouseup", F)
                        }
                }, [B, V, F, k, s, _, E, d]), n.useEffect(function() {
                    var e = S.current,
                        t = new ResizeObserver(function() {
                            ! function(e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        n = t.width,
                                        r = t.height;
                                    e.width = n * i.g.devicePixelRatio, e.height = r * i.g.devicePixelRatio
                                }
                            }(S.current)
                        });
                    return null != e && t.observe(e),
                        function() {
                            null != e && t.unobserve(e)
                        }
                }, []), n.createElement("canvas", p({}, M, {
                    className: o,
                    ref: S
                }))
            });
            ! function(e, t) {
                void 0 === t && (t = {});
                var i = t.insertAt;
                if (e && "undefined" != typeof document) {
                    var n = document.head || document.getElementsByTagName("head")[0],
                        r = document.createElement("style");
                    r.type = "text/css", "top" === i && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
                }
            }(".SpriteCanvas-module_spriteCanvasHidden__ndzQV {\n  display: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -100%;\n}\n");
            var N = n.forwardRef(function(e, t) {
                var i, o = e.className,
                    l = e.visible,
                    s = void 0 !== l && l,
                    u = e.sprites,
                    c = e.colors,
                    _ = e.spriteWidth,
                    E = e.spriteHeight,
                    d = n.useRef(null),
                    p = n.useRef([]),
                    I = n.useRef(!1),
                    T = n.useRef({});
                n.useImperativeHandle(t, function() {
                    return {
                        getCanvas: function() {
                            return d.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: p.current,
                                colors: c,
                                spriteWidth: _,
                                spriteHeight: E
                            }
                        },
                        addReadyListener: function(e) {
                            var t = (0, r.v4)();
                            return T.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete T.current[e]
                        },
                        isReady: I.current
                    }
                }, [c, E, _]);
                var m = n.useCallback(function() {
                        var e = d.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height), p.current.forEach(function(e, i) {
                            var n = function(n, r) {
                                var o = _ * r + 2 * r,
                                    a = E * i + 2 * i;
                                if (t.drawImage(e.image, o, a, _, E), null != n) {
                                    for (var l, s, u = t.getImageData(o, a, _, E), c = ("#" === (l = n)[0] && (l = l.slice(1)), {
                                            r: (s = parseInt(l, 16)) >> 16 & 255,
                                            g: s >> 8 & 255,
                                            b: 255 & s
                                        }), d = 0; d < u.data.length; d += 4) u.data[d] = c.r, u.data[d + 1] = c.g, u.data[d + 2] = c.b;
                                    t.putImageData(u, o, a)
                                }
                            };
                            e.colorize ? c.forEach(function(e, t) {
                                return n(e, t)
                            }) : n(null, 0)
                        }))
                    }, [c, E, _]),
                    f = n.useCallback(function() {
                        var e = u.map(function(e) {
                            var t = new Image,
                                i = "string" == typeof e ? e : e.src,
                                n = "string" == typeof e || e.colorize;
                            t.src = i;
                            var r = new Promise(function(e) {
                                t.onload = e
                            });
                            return {
                                colorize: n,
                                image: t,
                                src: i,
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
                    }, [u]),
                    h = n.useCallback(function(e) {
                        for (var t in T.current) T.current[t](e)
                    }, []),
                    A = n.useCallback(function() {
                        var e, t, i, n;
                        return e = void 0, t = void 0, i = void 0, n = function() {
                            return function(e, t) {
                                var i, n, r, o, a = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & r[0]) throw r[1];
                                        return r[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return o = {
                                    next: l(0),
                                    throw: l(1),
                                    return: l(2)
                                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                                    return this
                                }), o;

                                function l(l) {
                                    return function(s) {
                                        return function(l) {
                                            if (i) throw TypeError("Generator is already executing.");
                                            for (; o && (o = 0, l[0] && (a = 0)), a;) try {
                                                if (i = 1, n && (r = 2 & l[0] ? n.return : l[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, l[1])).done) return r;
                                                switch (n = 0, r && (l = [2 & l[0], r.value]), l[0]) {
                                                    case 0:
                                                    case 1:
                                                        r = l;
                                                        break;
                                                    case 4:
                                                        return a.label++, {
                                                            value: l[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        a.label++, n = l[1], l = [0];
                                                        continue;
                                                    case 7:
                                                        l = a.ops.pop(), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                            a = 0;
                                                            continue
                                                        }
                                                        if (3 === l[0] && (!r || l[1] > r[0] && l[1] < r[3])) {
                                                            a.label = l[1];
                                                            break
                                                        }
                                                        if (6 === l[0] && a.label < r[1]) {
                                                            a.label = r[1], r = l;
                                                            break
                                                        }
                                                        if (r && a.label < r[2]) {
                                                            a.label = r[2], a.ops.push(l);
                                                            break
                                                        }
                                                        r[2] && a.ops.pop(), a.trys.pop();
                                                        continue
                                                }
                                                l = t.call(e, a)
                                            } catch (e) {
                                                l = [6, e], n = 0
                                            } finally {
                                                i = r = 0
                                            }
                                            if (5 & l[0]) throw l[1];
                                            return {
                                                value: l[0] ? l[1] : void 0,
                                                done: !0
                                            }
                                        }([l, s])
                                    }
                                }
                            }(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, f()];
                                    case 1:
                                        return e.sent(), m(), I.current = !0, h(!0), [2]
                                }
                            })
                        }, new(i || (i = Promise))(function(r, o) {
                            function a(e) {
                                try {
                                    s(n.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function l(e) {
                                try {
                                    s(n.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function s(e) {
                                var t;
                                e.done ? r(e.value) : ((t = e.value) instanceof i ? t : new i(function(e) {
                                    e(t)
                                })).then(a, l)
                            }
                            s((n = n.apply(e, t || [])).next())
                        })
                    }, [h, f, m]);
                return n.useEffect(function() {
                    A()
                }, [A]), n.useEffect(function() {
                    return function() {
                        return h(!1)
                    }
                }, [h]), n.useEffect(function() {
                    null != d.current && (d.current.width = (_ + 2) * Math.max(c.length, 1), d.current.height = (E + 2) * u.length)
                }, [c.length, E, _, u.length]), n.createElement("canvas", {
                    ref: d,
                    className: a(o, ((i = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !s, i))
                })
            });

            function g(e, t) {
                var i, r = n.useState(null !== (i = null == t ? void 0 : t.isReady) && void 0 !== i && i),
                    o = r[0],
                    a = r[1];
                n.useEffect(function() {
                    var e = null == t ? void 0 : t.addReadyListener(a);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }, [t]);
                var l = n.useCallback(function(i, n) {
                        var r = void 0 === n ? {} : n,
                            o = r.sprite,
                            a = r.color,
                            l = null == t ? void 0 : t.getCreateData(),
                            s = null == t ? void 0 : t.getCanvas();
                        if (null != s && null != l && 0 !== l.sprites.length) return null == e ? void 0 : e.createConfetti(i, s, l, o, a)
                    }, [e, t]),
                    s = n.useCallback(function(e, t, i) {
                        for (var n = [], r = 0; r < t; r++) {
                            var o = l(e, i);
                            o && n.push(o)
                        }
                        return n
                    }, [l]),
                    u = n.useCallback(function(i) {
                        var n = null == t ? void 0 : t.getCanvas();
                        null != n && (null == e || e.addConfetti(i, n))
                    }, [e, t]),
                    c = n.useCallback(function(t) {
                        null == e || e.deleteConfetti(t)
                    }, [e]),
                    _ = n.useCallback(function() {
                        return null == e ? void 0 : e.clearConfetti()
                    }, [e]);
                return n.useMemo(function() {
                    return {
                        createConfetti: l,
                        createMultipleConfetti: s,
                        addConfetti: u,
                        clearConfetti: _,
                        deleteConfetti: c,
                        isReady: o && null != t && null != e
                    }
                }, [u, _, e, l, s, c, o, t])
            }
        },
        185782: function(e, t, i) {
            "use strict";
            e.exports = i.p + "140ec8f5d02da1e5195c.svg"
        },
        112679: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                updateStripePaymentRequest: function() {
                    return r
                },
                updateCardInfo: function() {
                    return o
                },
                clearCardInfo: function() {
                    return a
                },
                updateAddressInfo: function() {
                    return l
                },
                clearError: function() {
                    return s
                }
            });
            var n = i("913144");

            function r(e) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function o(e, t) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function a() {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function l(e, t) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                n.default.wait(() => n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return r
                }
            });
            var n = i("913144");

            function r() {
                n.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        304580: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return I
                }
            });
            var n, r, o = i("37983");
            i("884691");
            var a = i("414456"),
                l = i.n(a),
                s = i("394846"),
                u = i("77078"),
                c = i("945330"),
                _ = i("381546"),
                E = i("782340"),
                d = i("955892");
            (n = r || (r = {})).DEFAULT = "", n.BOLD = "Bold", n.SOLID = "Solid";
            let p = e => {
                let {
                    closeAction: t,
                    variant: i,
                    keybind: n,
                    className: a
                } = e;
                return (0, o.jsxs)("div", {
                    className: l(d.container, a),
                    children: [(0, o.jsx)(u.Clickable, {
                        className: l(d.closeButton, {
                            [d.closeButtonBold]: i === r.BOLD,
                            [d.closeButtonSolid]: i === r.SOLID
                        }),
                        onClick: t,
                        "aria-label": E.default.Messages.CLOSE,
                        children: i === r.SOLID ? (0, o.jsx)(_.default, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, o.jsx)(c.default, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), s.isMobile ? null : (0, o.jsx)("div", {
                        className: l(d.keybind),
                        "aria-hidden": !0,
                        children: n
                    })]
                })
            };
            p.defaultProps = {
                variant: r.DEFAULT
            }, p.Variants = r;
            var I = p
        },
        80300: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                backgroundImagePreloader: function() {
                    return c
                }
            });
            var n = i("37983"),
                r = i("884691"),
                o = i("310013"),
                a = i.n(o),
                l = i("407063");
            let s = /url\(['"](.*)['"]\)/,
                u = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(s);
                    return null != t ? t[1] : e
                };

            function c(e) {
                class t extends r.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: i,
                            loaded: n
                        } = this.state, {
                            style: r
                        } = this.props, o = null != r ? u(r.backgroundImage) : null;
                        null == o && o !== i ? this.setState({
                            loaded: !0,
                            cached: o
                        }) : this.cachedURLs.indexOf(o) >= 0 ? this.setState({
                            loaded: !0,
                            cached: o
                        }) : null != o && o !== i && !0 === n && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(o))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, l.loadImage)(e, t => {
                            this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
                                cached: e,
                                loaded: !0
                            }));
                            let {
                                onBackgroundImageLoad: i
                            } = this.props;
                            i && i(t, e)
                        })
                    }
                    componentWillUnmount() {
                        this.canceller && this.canceller(), this.cachedURLs.length = 0
                    }
                    render() {
                        let {
                            style: t,
                            onBackgroundImageLoad: i,
                            ...r
                        } = this.props, {
                            loaded: o,
                            cached: a
                        } = this.state;
                        if (!o && null != t) {
                            var l;
                            t = {
                                ...t,
                                backgroundImage: null == (l = a) || "" === l || "none" === l ? "none" : "url(".concat(l, ")")
                            }
                        }
                        return (0, n.jsx)(e, {
                            style: t,
                            ...r
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, i = null != t ? u(t.backgroundImage) : null;
                        this.cachedURLs = [i], this.state = {
                            cached: i,
                            loaded: !0
                        }
                    }
                }
                return a(t, e), t
            }
        },
        252744: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var n = i("884691");

            function r(e) {
                let [t, i] = (0, n.useState)(!1), r = (0, n.useRef)(e.current);
                return (0, n.useEffect)(() => {
                    r.current = e.current
                }, [e]), (0, n.useEffect)(() => {
                    let e = r.current;
                    if (null == e) return;
                    let t = () => i(!0),
                        n = () => i(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", n), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", n)
                    }
                }, [r]), t
            }
        },
        812204: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            }), (n = r || (r = {})).POPOUT_WINDOW = "popout window", n.OVERLAY = "overlay", n.NOTICE = "notice", n.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", n.BADGE = "badge", n.USER_SETTINGS = "user settings", n.USER_SETTINGS_MENU = "user settings menu", n.ACCOUNT = "account", n.TEXT_AND_IMAGES = "text and images", n.GUILD_SETTINGS = "guild settings", n.OVERVIEW = "overview", n.STICKERS = "stickers", n.VANITY_URL = "vanity url", n.PREMIUM_MARKETING = "premium marketing", n.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", n.PREMIUM_PAYMENT_MODAL = "premium payment modal", n.PREMIUM_UPSELL_ALERT = "premium upsell alert", n.PREMIUM_UPSELL_MODAL = "premium upsell modal", n.PREMIUM_SETTINGS = "premium settings", n.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", n.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", n.CHANNEL_CALL = "channel call", n.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", n.RTC_PANEL = "rtc panel", n.SOUNDBOARD_BUTTON = "soundboard button", n.SOUNDBOARD_POPOUT = "soundboard popout", n.SOUNDBOARD_WHEEL = "soundboard wheel", n.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", n.GIFT_BUTTON = "gift button", n.EXPRESSION_SUGGESTIONS = "expression suggestions", n.EMOJI_PICKER = "emoji picker", n.STICKER_PICKER = "sticker picker", n.STICKER_POPOUT = "sticker popout", n.PREMIUM_UPSELL = "premium upsell", n.EMPTY_STATE = "empty state", n.SUBSCRIPTION_DETAILS = "subscription details", n.SUBSCRIPTION_HEADER = "subscription header", n.ACCOUNT_CREDIT_BANNER = "account credit banner", n.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", n.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", n.STREAM_QUALITY_INDICATOR = "stream quality indicator", n.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", n.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", n.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", n.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", n.RPC = "rpc", n.BILLING_STANDALONE = "billing standalone", n.GUILD_CHANNEL_LIST = "guild channel list", n.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", n.STICKER_MESSAGE = "sticker message", n.CHANNEL_TEXT_AREA = "channel text area", n.HEADER_BAR = "header bar", n.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", n.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", n.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", n.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", n.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", n.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", n.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", n.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", n.GUILD_HEADER = "guild header", n.GUILD_BANNER = "guild banner", n.GUILD_BANNER_NOTICE = "guild banner notice", n.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", n.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", n.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", n.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", n.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", n.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", n.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", n.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", n.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", n.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", n.GUILDS_LIST = "guilds list", n.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", n.ACTIVITY_DIRECTORY = "activity directory", n.ACTIVITY_TILE = "activity tile", n.ACTIVITY_UPSELL = "activity upsell", n.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", n.INSTANT_INVITE_MODAL = "instant invite modal", n.IMAGE_CROPPING_MODAL = "image cropping modal", n.GIF_PICKER = "gif picker", n.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", n.INVITE_MODAL = "invite modal", n.INVITE_EMBED = "invite embed", n.NEW_GUILD_BUTTON = "new guild button", n.CHARACTER_COUNT = "character count", n.DM_CHANNEL = "dm channel", n.GUILD_CHANNEL = "guild channel", n.FORUM_CHANNEL = "forum channel", n.FILE_UPLOAD_POPOUT = "file upload popout", n.EMOJI = "emoji", n.PROFILE = "profile", n.PROFILE_MODAL = "profile modal", n.PROFILE_POPOUT = "profile popout", n.GUILD_PROFILE = "guild profile", n.EDIT_AVATAR = "edit avatar", n.EDIT_BANNER = "edit banner", n.CHAT_INPUT = "chat input", n.CREATE_THREAD = "create thread", n.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", n.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", n.SELECT_IMAGE_MODAL = "select image modal", n.VIDEO_BACKGROUND_OPTIONS = "video background options", n.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", n.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", n.CAMERA_PREVIEW = "camera preview", n.HOME_PAGE_PREMIUM_TAB = "home page premium tab", n.HOME_PAGE_SHOP_TAB = "home page shop tab", n.PREMIUM_MARKETING_SURFACE = "premium marketing surface", n.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", n.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", n.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", n.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", n.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", n.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", n.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", n.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", n.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", n.PREMIUM_MARKETING_FEATURE = "premium marketing feature", n.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", n.PREMIUM_MARKETING_FOOTER = "premium marketing footer", n.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", n.CHANNEL_CALL_ACTION_BAR = "channel call action bar", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", n.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", n.VOICE_CONTROL_TRAY = "voice control tray", n.ACTIVE_NOW_COLUMN = "active now column", n.CONTEXT_MENU = "context menu", n.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", n.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", n.CHANNEL_CATEGORY_MENU = "channel category menu", n.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", n.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", n.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", n.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", n.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", n.CHANNEL_TITLE_MENU = "channel title menu", n.GROUP_DM_MENU = "group dm menu", n.AUDIT_LOG_USER_MENU = "audit log user menu", n.BANNED_USER_MENU = "banned user menu", n.DM_USER_MENU = "dm user menu", n.GROUP_DM_USER_MENU = "group dm user menu", n.GUILD_CHANNEL_USER_MENU = "guild channel user menu", n.GUILD_MODERATION_USER_MENU = "guild moderation user menu", n.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", n.GUILD_SETTINGS_USER_MENU = "guild settings user menu", n.GUILD_USER_MENU = "guild user menu", n.THREAD_USER_MENU = "thread user menu", n.USER_GENERIC_MENU = "user generic menu", n.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", n.VOICE_ACTION_SHEET = "voice action sheet", n.FOCUSED_VOICE_CONTROLS = "focused voice controls", n.MASKED_LINK = "masked link", n.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", n.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", n.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", n.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", n.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", n.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", n.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", n.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", n.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", n.ACCOUNT_PROFILE_POPOUT = "account profile popout", n.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", n.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", n.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", n.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", n.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", n.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", n.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", n.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", n.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", n.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", n.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", n.STAGE_VIDEO_LIMIT = "stage video limit", n.ACTIVITIES_MINI_SHELF = "activities mini shelf", n.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", n.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", n.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", n.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", n.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", n.APP_ICON_EDITOR = "app icon editor", n.CLIENT_THEMES_EDITOR = "client themes editor", n.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", n.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", n.SHARE_NITRO_EMBED = "share nitro embed", n.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", n.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", n.REFERRAL_TRIALS_POPOUT = "referral trials popout", n.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", n.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", n.ACTIVITY_BOOKMARK = "activity bookmark", n.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", n.ACTIVITY_DETAIL_PAGE = "activity detail page", n.ACTIVITIES_PAGE = "activities page", n.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", n.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", n.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", n.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", n.ACTIVITIES_HAPPENING_NOW = "activities happening now", n.MEDIA_VIEWER = "media viewer", n.MESSAGE_LONG_PRESS_MENU = "message long press menu", n.COLLECTIBLES_SHOP = "collectibles shop", n.COLLECTIBLES_SHOP_CARD = "collectibles shop card", n.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", n.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", n.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", n.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", n.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", n.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", n.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", n.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", n.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", n.PREMIUM_BILLING_INFO = "premium billing info", n.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", n.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", n.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", n.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", n.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", n.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", n.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", n.PREMIUM_PLAN_SELECT = "premium_plan_select", n.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", n.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", n.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", n.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", n.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", n.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", n.MEMBER_SAFETY_PAGE = "member safety page", n.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", n.GUILD_MEMBER_MOD_VIEW = "guild member mod view", n.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", n.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", n.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", n.GUILD_SHOP_PAGE = "guild shop page", n.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", n.MESSAGE_REMIX_TAG = "message remix tag", n.MESSAGE_REMIX_BUTTON = "message remix button", n.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", n.CLIPS_SETTINGS = "clips settings", n.CLIPS_GALLERY = "clips gallery", n.CLIPS_GALLERY_ITEM = "clips gallery item", n.CLIPS_EDITOR = "clips editor", n.CLIPS_SHARE_MODAL = "clips share modal", n.CHANNEL_ATTACH_BUTTON = "channel attach button", n.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", n.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", n.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", n.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", n.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", n.GUILD_EVENT_CARD = "guild event card", n.EVENT_SETTINGS = "event settings";
            var n, r, o = r
        },
        20606: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return n
                }
            });
            var n = i("171210").default
        },
        526887: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                ConfettiCannonContext: function() {
                    return c
                },
                ConfettiCannonContextProvider: function() {
                    return _
                }
            });
            var n = i("37983"),
                r = i("884691"),
                o = i("516555"),
                a = i("65597"),
                l = i("206230"),
                s = i("49111");
            let u = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => s.NOOP,
                    removeClickListener: s.NOOP
                },
                c = r.createContext(u);

            function _(e) {
                let {
                    children: t,
                    confettiCanvas: i,
                    spriteCanvas: s,
                    baseConfig: _,
                    addClickListener: E,
                    removeClickListener: d
                } = e, p = (0, o.useConfettiCannon)(i, s), I = (0, a.default)([l.default], () => l.default.useReducedMotion), T = r.useMemo(() => I ? u : {
                    confettiCanvas: i,
                    cannon: p,
                    createConfetti: (e, t) => p.createConfetti({
                        ..._,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, i, n) => p.createConfetti({
                        ..._,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...i
                    }, n),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            i = arguments.length > 2 ? arguments[2] : void 0;
                        return p.createMultipleConfetti({
                            ..._,
                            ...e
                        }, t, i)
                    },
                    createMultipleConfettiAt: function(e, t, i) {
                        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            r = arguments.length > 4 ? arguments[4] : void 0;
                        return p.createMultipleConfetti({
                            ..._,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...i
                        }, n, r)
                    },
                    addClickListener: E,
                    removeClickListener: d
                }, [E, _, p, i, I, d]);
                return (0, n.jsx)(c.Provider, {
                    value: T,
                    children: t
                })
            }
        },
        649844: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return d
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("748820"),
                o = i("77078"),
                a = i("112679"),
                l = i("55689"),
                s = i("855133"),
                u = i("599110"),
                c = i("659500"),
                _ = i("49111"),
                E = i("646718");

            function d(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: d,
                    onClose: p,
                    onComplete: I,
                    onSubscriptionConfirmation: T,
                    analyticsLocations: m,
                    analyticsObject: f,
                    analyticsLocation: h,
                    analyticsSourceLocation: A,
                    isGift: C = !1,
                    giftMessage: O,
                    subscriptionTier: R,
                    trialId: M,
                    postSuccessGuild: v,
                    openInvoiceId: L,
                    applicationId: S,
                    referralTrialOfferId: N,
                    giftRecipient: g,
                    returnRef: P
                } = null != e ? e : {}, U = !1, y = (0, r.v4)();
                (0, o.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await i.el("646139").then(i.bind(i, "646139"));
                    return i => {
                        let {
                            onClose: r,
                            ...o
                        } = i;
                        return (0, n.jsx)(e, {
                            ...o,
                            loadId: y,
                            subscriptionTier: R,
                            skuId: R,
                            isGift: C,
                            giftMessage: O,
                            giftRecipient: g,
                            initialPlanId: t,
                            followupSKUInfo: d,
                            onClose: e => {
                                r(), null == p || p(e), e && (null == T || T())
                            },
                            onComplete: () => {
                                U = !0, null == I || I(), !C && ((0, s.setIsPersistentHelperHidden)(!0), (0, s.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: T,
                            analyticsLocations: m,
                            analyticsObject: f,
                            analyticsLocation: h,
                            analyticsSourceLocation: A,
                            trialId: M,
                            postSuccessGuild: v,
                            planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: L,
                            applicationId: S,
                            referralTrialOfferId: N,
                            returnRef: P
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !U && u.default.track(_.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: y,
                            payment_type: _.PurchaseTypeToAnalyticsPaymentType[_.PurchaseTypes.SUBSCRIPTION],
                            location: null != h ? h : f,
                            source: A,
                            subscription_type: _.SubscriptionTypes.PREMIUM,
                            is_gift: C,
                            eligible_for_trial: null != M,
                            application_id: S,
                            location_stack: m
                        }), (0, a.clearError)(), (0, l.clearPurchaseTokenAuthState)(), null == p || p(U), U && (!C && c.ComponentDispatch.dispatch(_.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == T || T())
                    },
                    onCloseRequest: _.NOOP
                })
            }
        },
        855133: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                togglePersistentHelper: function() {
                    return r
                },
                setHasCompletedStep: function() {
                    return o
                },
                resetPremiumTutorialStore: function() {
                    return a
                },
                setCanPlayWowMoment: function() {
                    return l
                },
                setIsPersistentHelperHidden: function() {
                    return s
                },
                setNavigatedFromHelper: function() {
                    return u
                }
            });
            var n = i("913144");
            let r = () => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                o = () => {
                    n.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                a = () => {
                    n.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                l = e => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                s = e => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                u = e => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        824986: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                PremiumTutorialTooltips: function() {
                    return o
                },
                default: function() {
                    return I
                }
            });
            var n, r, o, a = i("446674"),
                l = i("913144"),
                s = i("521012"),
                u = i("565785"),
                c = i("646718");
            (n = o || (o = {})).FILE_UPLOAD = "file_upload", n.STICKER_PICKER = "sticker_picker", n.EMOJI_PICKER = "emoji_picker", n.BOOSTING_FLOW = "boosting_flow";
            let _ = {
                isPersistentCoachmarkCollapsed: !1,
                hasFlowStartEventBeenEmitted: {},
                canPlayWowMoment: !1,
                isPersistentHelperHidden: !0,
                isFetchingWowMomentMedia: !1,
                wowMomentWumpusMediaUrl: null,
                wowMomentHelperMediaUrl: null,
                navigatedFromHelper: !1,
                tutorialExpirationTime: null
            };

            function E() {
                _ = {
                    isPersistentCoachmarkCollapsed: !1,
                    hasFlowStartEventBeenEmitted: {},
                    canPlayWowMoment: !1,
                    isPersistentHelperHidden: !0,
                    isFetchingWowMomentMedia: !1,
                    wowMomentWumpusMediaUrl: null,
                    wowMomentHelperMediaUrl: null,
                    navigatedFromHelper: !1,
                    tutorialExpirationTime: null
                }
            }

            function d() {
                let e = new Date;
                e.setDate(e.getDate() + 14), _.tutorialExpirationTime = e.getTime()
            }
            class p extends a.default.PersistedStore {
                initialize(e) {
                    null != e && (_ = e), _.isPersistentHelperHidden = !1, _.canPlayWowMoment = !1, _.isFetchingWowMomentMedia = !1, _.wowMomentWumpusMediaUrl = null, _.wowMomentHelperMediaUrl = null
                }
                getState() {
                    return _
                }
                get isPersistentCoachmarkCollapsed() {
                    return _.isPersistentCoachmarkCollapsed
                }
                hasFlowStartEventBeenEmitted(e) {
                    return null == _.hasFlowStartEventBeenEmitted[e] && (_.hasFlowStartEventBeenEmitted[e] = !1), _.hasFlowStartEventBeenEmitted[e]
                }
                get canPlayWowMoment() {
                    return _.canPlayWowMoment
                }
                get isPersistentHelperHidden() {
                    return _.isPersistentHelperHidden
                }
                get isFetchingWowMomentMedia() {
                    return _.isFetchingWowMomentMedia
                }
                get wowMomentWumpusMedia() {
                    return _.wowMomentWumpusMediaUrl
                }
                get wowMomentHelperMedia() {
                    return _.wowMomentHelperMediaUrl
                }
                get navigatedFromHelper() {
                    return _.navigatedFromHelper
                }
                get tutorialExpirationTime() {
                    return _.tutorialExpirationTime
                }
            }
            p.displayName = "PremiumTutorialStore", p.persistKey = "PremiumTutorialStore", p.migrations = [e => ({
                ...e,
                hasFlowStartEventBeenEmitted: null !== (r = e.hasFlowStartEventBeenEmitted) && void 0 !== r ? r : {}
            })];
            var I = new p(l.default, {
                PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE: function() {
                    _.isPersistentCoachmarkCollapsed = !_.isPersistentCoachmarkCollapsed
                },
                UPDATE_HAS_FLOW_START_EVENT_BEEN_EMITTED: function(e) {
                    let {
                        event: t,
                        value: i
                    } = e;
                    _.hasFlowStartEventBeenEmitted[t] = i
                },
                LOGOUT: function() {
                    E()
                },
                RESET_PREMIUM_TUTORIAL_STORE: E,
                PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT: function(e) {
                    let {
                        value: t
                    } = e;
                    _.canPlayWowMoment = t
                },
                PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN: function(e) {
                    let {
                        value: t
                    } = e;
                    _.isPersistentHelperHidden = t
                },
                PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA: function(e) {
                    let {
                        value: t
                    } = e;
                    _.isFetchingWowMomentMedia = t
                },
                PREMIUM_TUTORIAL_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(e) {
                    let {
                        wumpusMedia: t,
                        helperMedia: i
                    } = e;
                    _.wowMomentWumpusMediaUrl = t, _.wowMomentHelperMediaUrl = i, _.isFetchingWowMomentMedia = !1
                },
                PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER: function(e) {
                    let {
                        value: t
                    } = e;
                    _.navigatedFromHelper = t
                },
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function(e) {
                    let {
                        subscription: t
                    } = e, {
                        enabled: i
                    } = u.default.getCurrentConfig({
                        location: "5f2710_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    i && null != t.items.find(e => c.PREMIUM_TIER_2_PLANS.has(e.plan_id)) && d()
                },
                GIFT_CODE_REDEEM_SUCCESS: function(e) {
                    let {
                        entitlement: t
                    } = e, {
                        enabled: i
                    } = u.default.getCurrentConfig({
                        location: "5f2710_2"
                    }, {
                        autoTrackExposure: !1
                    });
                    i && (null == t ? void 0 : t.sku_id) === c.PremiumSubscriptionSKUs.TIER_2 && null == s.default.getPremiumSubscription(!1) && null == _.tutorialExpirationTime && d()
                }
            })
        },
        694768: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("862205");
            let r = (0, n.createExperiment)({
                kind: "user",
                id: "2023-02_nitroduction_experience",
                label: "Nitroduction Experience",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "One month trial users recieve the Nitroduction experience",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var o = r
        },
        565785: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("862205");
            let r = (0, n.createExperiment)({
                kind: "user",
                id: "2023-08_premium_tutorial_for_all",
                label: "Premium Tutorial Experience For All",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "All net new users (exclude trial) receive premium tutorial experience",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var o = r
        },
        921228: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useIsPremiumTutorialEnabled: function() {
                    return h
                },
                isPremiumTutorialEnabled: function() {
                    return O
                },
                useAllDismissedPremiumTutorialSteps: function() {
                    return v
                }
            });
            var n = i("884691"),
                r = i("446674"),
                o = i("151426"),
                a = i("850068"),
                l = i("10641"),
                s = i("374363"),
                u = i("697218"),
                c = i("521012"),
                _ = i("719923"),
                E = i("324878"),
                d = i("824986"),
                p = i("694768"),
                I = i("565785"),
                T = i("646718");
            let m = () => {
                    let e = (0, r.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription()),
                        t = (0, l.useIsDismissibleContentDismissed)(o.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, E.isEligibleTrialSub)(e) && !t
                },
                f = () => {
                    let e = (0, E.useHasActiveTrial)(),
                        t = (0, l.useIsDismissibleContentDismissed)(o.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        i = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()),
                        s = (0, _.isPremiumExactly)(i, T.PremiumTypes.TIER_2),
                        d = (0, r.useStateFromStores)([c.default], () => c.default.hasFetchedPreviousPremiumTypeSubscription()),
                        p = (0, r.useStateFromStores)([c.default], () => c.default.getPreviousPremiumTypeSubscription()),
                        I = !e && s;
                    n.useEffect(() => {
                        I && !d && !t && (0, a.fetchMostRecentSubscription)()
                    }, [I, d, t]);
                    let m = I && d && null == p;
                    return m && !t
                };

            function h(e) {
                var t;
                let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = m() && i,
                    {
                        enabled: o
                    } = p.default.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: n,
                        disable: !n
                    }),
                    a = (0, r.useStateFromStores)([d.default], () => d.default.tutorialExpirationTime),
                    l = new Date().getTime(),
                    s = (0, r.useStateFromStores)([c.default], () => {
                        var e, i;
                        return null !== (t = null === (i = c.default.getPremiumSubscription()) || void 0 === i ? void 0 : null === (e = i.createdAt) || void 0 === e ? void 0 : e.getTime()) && void 0 !== t ? t : 0
                    }),
                    u = f() && i,
                    _ = I.default.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: u && l - s < 18e5,
                        disable: !u
                    }).enabled && null != a && a > l;
                return o || _
            }
            let A = () => {
                    let e = c.default.getPremiumTypeSubscription(),
                        t = (0, l.isDismissibleContentDismissed)(o.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, E.isEligibleTrialSub)(e) && !t
                },
                C = () => {
                    let e = (0, E.hasActiveTrial)(),
                        t = (0, l.isDismissibleContentDismissed)(o.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        i = u.default.getCurrentUser(),
                        n = (0, _.isPremiumExactly)(i, T.PremiumTypes.TIER_2),
                        r = c.default.hasFetchedPreviousPremiumTypeSubscription(),
                        s = c.default.getPreviousPremiumTypeSubscription();
                    return !r && n && !t && (0, a.fetchMostRecentSubscription)(), !t && !e && n && r && null == s
                },
                O = function(e) {
                    var t, i, n;
                    let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        o = A() && r,
                        {
                            enabled: a
                        } = p.default.getCurrentConfig({
                            location: e
                        }, {
                            disable: !o,
                            autoTrackExposure: o
                        }),
                        l = new Date().getTime(),
                        s = d.default.tutorialExpirationTime,
                        u = null !== (n = null === (i = c.default.getPremiumSubscription()) || void 0 === i ? void 0 : null === (t = i.createdAt) || void 0 === t ? void 0 : t.getTime()) && void 0 !== n ? n : 0,
                        _ = C() && r,
                        E = I.default.getCurrentConfig({
                            location: e
                        }, {
                            disable: !_,
                            autoTrackExposure: _ && l - u < 18e5
                        }).enabled && null != s && s > l;
                    return a || E
                },
                R = [];

            function M() {
                return T.PremiumTutorialStepOrder.filter(e => (0, l.isDismissibleContentDismissed)(e))
            }

            function v() {
                return function(e, t) {
                    let i = h("useMemoizedValueSyncedWithDismissibleContents"),
                        o = (0, r.useStateFromStores)([s.default], () => {
                            var e;
                            return null === (e = s.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                        });
                    return n.useMemo(() => i ? e() : t, [i, t, e, o])
                }(M, R)
            }
        },
        374278: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return f
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("77078"),
                o = i("95039"),
                a = i("305961"),
                l = i("957255"),
                s = i("145131"),
                u = i("181114"),
                c = i("599110"),
                _ = i("488464"),
                E = i("998716"),
                d = i("923510"),
                p = i("49111"),
                I = i("646718"),
                T = i("782340"),
                m = i("400237");

            function f(e) {
                var t;
                let i, {
                        channel: f,
                        transitionState: h,
                        onClose: A
                    } = e,
                    C = a.default.getGuild(f.guild_id),
                    O = null !== (t = null == C ? void 0 : C.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
                    R = !!(null == C ? void 0 : C.isCommunity()),
                    M = T.default.Messages.STAGE_FULL_TITLE,
                    v = R ? O < p.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED : (null == C ? void 0 : C.premiumTier) !== p.BoostedGuildTiers.TIER_3 && O <= p.MAX_STAGE_VIDEO_USER_LIMIT_TIER2,
                    L = l.default.can(d.MODERATE_STAGE_CHANNEL_PERMISSIONS, f);
                i = R && (null == C ? void 0 : C.premiumTier) === p.BoostedGuildTiers.TIER_3 ? O <= p.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED ? T.default.Messages.STAGE_FULL_BOOST_MORE_BODY : T.default.Messages.STAGE_FULL_MAX_BODY : v ? T.default.Messages.STAGE_FULL_BODY : T.default.Messages.STAGE_FULL_MAX_BODY;
                let S = () => {
                        A(), c.default.track(p.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
                            guild_id: f.guild_id,
                            type: I.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                            is_moderator: L,
                            action: I.BoostingUpsellAction.DISMISS
                        })
                    },
                    N = _.default.getMutableParticipants(f.id, E.StageChannelParticipantNamedIndex.SPEAKER),
                    g = N.filter(e => e.type === E.StageChannelParticipantTypes.VOICE),
                    P = g.length,
                    U = _.default.getParticipantCount(f.id, E.StageChannelParticipantNamedIndex.AUDIENCE);
                return c.default.track(p.AnalyticEvents.BOOSTING_UPSELL_VIEWED, {
                    guild_id: f.guild_id,
                    type: I.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                    is_moderator: L,
                    listener_count: P + U
                }), (0, n.jsxs)(r.ModalRoot, {
                    size: r.ModalSize.SMALL,
                    transitionState: h,
                    "aria-label": M,
                    children: [(0, n.jsxs)(r.ModalHeader, {
                        justify: s.default.Justify.END,
                        separator: !1,
                        className: m.header,
                        children: [(0, n.jsx)("div", {
                            className: m.fullArt
                        }), (0, n.jsx)(r.ModalCloseButton, {
                            onClick: A
                        })]
                    }), (0, n.jsxs)(r.ModalContent, {
                        className: m.content,
                        children: [(0, n.jsx)(r.Heading, {
                            variant: "heading-xl/bold",
                            children: M
                        }), (0, n.jsx)(r.Text, {
                            variant: "text-md/medium",
                            children: i
                        })]
                    }), (0, n.jsx)(r.ModalFooter, {
                        className: m.footer,
                        children: v ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(r.Button, {
                                look: r.ButtonLooks.LINK,
                                className: m.noThanksButton,
                                color: r.ButtonColors.CUSTOM,
                                size: r.ButtonSizes.SMALL,
                                onClick: S,
                                children: T.default.Messages.NO_THANKS
                            }), (0, n.jsx)(u.default, {
                                onClick: () => {
                                    A(), (0, o.openGuildBoostingMarketingModal)({
                                        guildId: f.guild_id,
                                        location: {
                                            section: p.AnalyticsSections.STAGE_VIDEO_LIMIT
                                        }
                                    }), c.default.track(p.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
                                        guild_id: f.guild_id,
                                        type: I.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                                        is_moderator: L,
                                        action: I.BoostingUpsellAction.BOOST
                                    })
                                },
                                size: r.ButtonSizes.SMALL,
                                className: m.boostButton,
                                children: T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
                            })]
                        }) : (0, n.jsx)(r.Button, {
                            onClick: S,
                            size: r.ButtonSizes.SMALL,
                            color: r.ButtonColors.CUSTOM,
                            className: m.boostButton,
                            children: T.default.Messages.GOT_IT
                        })
                    })]
                })
            }
        },
        474293: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getClass: function() {
                    return r
                }
            });
            var n = i("159885");

            function r(e, t) {
                for (var i = arguments.length, r = Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++) r[o - 2] = arguments[o];
                let a = r.reduce((e, t) => e + (0, n.upperCaseFirstChar)(t), ""),
                    l = "".concat(t).concat(a),
                    s = e[l];
                if (null != s) return s
            }
        },
        157590: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("817736"),
                r = i("118810");
            let o = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class a {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let i = (0, n.findDOMNode)(e);
                    (0, r.isElement)(i, HTMLElement) && (this._nodes.set(i, e), this._components.set(e, i), t.observe(i))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let i = this._components.get(e);
                    null != i && (this._nodes.delete(i), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(i))
                }
                constructor(e = o) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                        e.forEach(e => {
                            let t;
                            if (null != e.isIntersecting) t = e.isIntersecting;
                            else {
                                let {
                                    threshold: i
                                } = this._options;
                                t = null == i ? e.intersectionRatio > 0 : Array.isArray(i) ? i.some(t => e.intersectionRatio > t) : e.intersectionRatio > i
                            }
                            let i = this._nodes.get(e.target);
                            if (null != i) {
                                let e = !1;
                                t ? !this._visibleComponents.has(i) && (this._visibleComponents.add(i), e = !0) : this._visibleComponents.has(i) && (this._visibleComponents.delete(i), e = !0), e && i.forceUpdate()
                            }
                        })
                    }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                }
            }
        },
        235855: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return c
                }
            });
            var n = i("884691"),
                r = i("748820"),
                o = i("157590");
            let a = (0, r.v4)(),
                l = new Map,
                s = new Map;
            class u extends n.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let e = this.getVisibilityObserver();
                        e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(e) {
                    let t = this.getVisibilityObserver(),
                        i = t.isVisible(this);
                    this.props.active && i !== this.isVisible && this.props.onChange(i), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = i
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
                        t = s.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return n.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: i,
                        threshold: n
                    } = e;
                    t ? l.has(t) ? this.elementId = l.get(t) || "" : l.set(t, (0, r.v4)()) : this.elementId = a;
                    let u = this.getVisibilityObserverId();
                    !s.has(u) && s.set(u, new o.default({
                        root: t,
                        rootMargin: i,
                        threshold: n
                    }))
                }
            }
            u.defaultProps = {
                active: !0,
                children: n.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var c = u
        },
        290381: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                VisibilityObserver: function() {
                    return n.default
                },
                VisibilitySensor: function() {
                    return r.default
                }
            }), i("6268");
            var n = i("157590"),
                r = i("235855")
        }
    }
]);
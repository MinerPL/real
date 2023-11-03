(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["66633"], {
        516555: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                ConfettiCanvas: function() {
                    return g
                },
                Environment: function() {
                    return _
                },
                SpriteCanvas: function() {
                    return M
                },
                useConfettiCannon: function() {
                    return S
                }
            });
            var n = i("884691"),
                r = i("748820"),
                a = i("414456"),
                o = i.n(a);

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
                        var i, n, r, a, o = e.wind * t,
                            l = -e.gravity * t;
                        return {
                            x: o + (i = this.dragCoefficient.x, i * (n = this.velocity.x) * n * (n > 0 ? -1 : 1)),
                            y: l + (r = this.dragCoefficient.y, r * (a = this.velocity.y) * a * (a > 0 ? -1 : 1))
                        }
                    }, e.prototype.update = function(e) {
                        var t = Date.now(),
                            i = (t - this._lastUpdatedAt) / 100;
                        this.rotation.update(i), this.dragCoefficient.update(i);
                        var n = this.getNewForces(e, i),
                            r = n.x,
                            a = n.y;
                        this.velocity.update(i), this.velocity.x += r, this.velocity.y += a, this.position.update(i), this.position.x += this.velocity.x * i, this.position.y += this.velocity.y * i, this.size.update(i), this.opacity.update(i), this._lastUpdatedAt = t
                    }, e.prototype.previewPositionUpdate = function(e, t) {
                        var i = t / 100,
                            n = this.velocity.previewUpdate(i),
                            r = this.getNewForces(e, i),
                            a = r.x,
                            o = r.y;
                        n.x += a, n.y += o;
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
                d = function(e, t) {
                    return (d = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
                };

            function E(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function i() {
                    this.constructor = e
                }
                d(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
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
                f = function() {
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
                h = function(e) {
                    function t(t, i, n) {
                        var r = e.call(this, t, i) || this;
                        return r._z = n, r
                    }
                    return E(t, e), t.prototype.update = function(t) {
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
                }(f),
                T = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return E(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(I),
                C = function(e) {
                    function t(t, i) {
                        var n = e.call(this, t) || this;
                        return n.addValue = i, n
                    }
                    return E(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(I),
                m = function(e) {
                    function t(t, i, n, r, a, o) {
                        var l = e.call(this, t) || this;
                        l.min = i, l.max = n, l.duration = r;
                        var s = l.value / (l.max - l.min) * l.duration,
                            u = isNaN(s) ? 0 : s;
                        return l.timePassed = u < 0 ? l.duration - u : u, l.directionMultiplier = a, l.easingFunction = o, l
                    }
                    return E(t, e), t.prototype.update = function(e) {
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
                            a = this.easingFunction(n, this.min, t, this.duration);
                        return [isNaN(a) ? 0 : a, n, r]
                    }, t
                }(I);

            function A(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function v(e) {
                var t = Math.floor(A(0, e.length - 1));
                return [e[t], t]
            }

            function O(e, t) {
                return v([e, t])[0]
            }

            function L(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : e
            }

            function R(e) {
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
                            var t = L(e.value);
                            return new f(new T(t.x), new T(t.y));
                        case "static-random":
                            var i = L(e.minValue),
                                n = L(e.maxValue);
                            return new f(new T(A(i.x, n.x)), new T(A(i.y, n.y)));
                        case "linear":
                            t = L(e.value);
                            var r = L(e.addValue);
                            return new f(new C(t.x, r.x), new C(t.y, r.y));
                        case "linear-random":
                            i = L(e.minValue), n = L(e.maxValue);
                            var a = L(e.minAddValue),
                                o = L(e.maxAddValue);
                            return new f(new C(A(i.x, n.x), A(a.x, o.x)), new C(A(i.y, n.y), A(a.x, o.x)));
                        case "oscillating":
                            t = L(e.value);
                            var l = L(e.start),
                                s = L(e.final),
                                u = L(e.duration),
                                c = L(e.direction);
                            return new f(new m(t.x, l.x, s.x, u.x, c.x, e.easingFunction), new m(t.y, l.y, s.y, u.x, c.y, e.easingFunction));
                        case "oscillating-random":
                            i = L(e.minValue), n = L(e.maxValue);
                            var _ = L(e.minStart),
                                d = L(e.maxStart),
                                E = L(e.minFinal),
                                p = L(e.maxFinal),
                                I = L(e.minDuration),
                                h = L(e.maxDuration),
                                R = L(e.minDirection),
                                N = L(e.maxDirection);
                            return new f(new m(A(i.x, n.x), A(_.x, d.x), A(E.x, p.x), A(I.x, h.x), O(R.x, N.x), v(e.easingFunctions)[0]), new m(A(i.y, n.y), A(_.y, d.y), A(E.y, p.y), A(I.y, h.y), O(R.y, N.y), v(e.easingFunctions)[0]))
                    }
                }(p(p({}, e), {
                    valueType: "Vector2"
                }))
            }
            var g = n.forwardRef(function(e, t) {
                var a = e.className,
                    o = e.environment,
                    s = e.onClick,
                    _ = e.onMouseDown,
                    d = e.onMouseMove,
                    E = e.onMouseUp,
                    I = e.onBeforeRender,
                    f = e.onAfterRender,
                    L = function(e, t) {
                        var i = {};
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (i[n] = e[n]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) 0 > t.indexOf(n[r]) && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (i[n[r]] = e[n[r]])
                        }
                        return i
                    }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    g = n.useRef(null),
                    M = n.useRef(new Map),
                    S = n.useRef(null),
                    y = n.useRef(0),
                    U = n.useRef(0),
                    P = n.useCallback(function() {
                        var e = g.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == I || I(t), M.current.forEach(function(i, n) {
                                    var r = i.confetti,
                                        a = i.spriteCanvas;
                                    r.update(o), r.draw(a, t), r.shouldDestroy(e, o) && M.current.delete(n)
                                }), null == f || f(t), M.current.size > 0 ? S.current = window.requestAnimationFrame(P) : (t.clearRect(0, 0, e.width, e.height), S.current = null);
                                var i = Date.now();
                                0 !== y.current && (U.current = 1e3 / (i - y.current)), y.current = i
                            }
                        }
                    }, [o, f, I]);
                n.useEffect(function() {
                    null != S.current && (window.cancelAnimationFrame(S.current), S.current = window.requestAnimationFrame(P))
                }, [P]);
                var D = n.useCallback(function(e, t) {
                        M.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == S.current && P()
                    }, [P]),
                    w = n.useCallback(function(e, t, i, n, a) {
                        var o, l, s, _, d, E, I, f, L, g, M, S, y, U, P, w = (o = null !== (P = e.id) && void 0 !== P ? P : (0, r.v4)(), l = e, s = i, _ = n, d = a, f = N((I = (E = l, p(p({
                            id: o
                        }, c), E))).size), g = (L = function(e, t) {
                            if (null != e) {
                                var i = t.sprites.findIndex(function(t) {
                                    return "string" == typeof e ? t.src === e && t.colorize : t.src === e.src && t.colorize === e.colorize
                                });
                                if (-1 !== i) return [e, i]
                            }
                            return v(t.sprites)
                        }(_, s))[0], M = L[1], S = function(e, t, i) {
                            if (!("string" == typeof(n = e) || n.colorize)) return 0;
                            var n, r = null != t ? i.colors.findIndex(function(e) {
                                return e === t
                            }) : -1;
                            return -1 !== r ? r : Math.floor(A(0, i.colors.length - 1))
                        }(null != _ ? _ : g, d, s), new u({
                            id: o,
                            position: N(I.position),
                            velocity: N(I.velocity),
                            rotation: (y = I.rotation, function(e) {
                                switch (e.type) {
                                    case "static":
                                        var t = R(e.value);
                                        return new h(new T(t.x), new T(t.y), new T(t.z));
                                    case "static-random":
                                        var i = R(e.minValue),
                                            n = R(e.maxValue);
                                        return new h(new T(A(i.x, n.x)), new T(A(i.y, n.y)), new T(A(i.z, n.z)));
                                    case "linear":
                                        t = R(e.value);
                                        var r = R(e.addValue);
                                        return new h(new C(t.x, r.x), new C(t.y, r.y), new C(t.z, r.z));
                                    case "linear-random":
                                        i = R(e.minValue), n = R(e.maxValue);
                                        var a = R(e.minAddValue),
                                            o = R(e.maxAddValue);
                                        return new h(new C(A(i.x, n.x), A(a.x, o.x)), new C(A(i.y, n.y), A(a.y, o.y)), new C(A(i.z, n.z), A(a.z, o.z)));
                                    case "oscillating":
                                        t = R(e.value);
                                        var l = R(e.start),
                                            s = R(e.final),
                                            u = R(e.duration),
                                            c = R(e.direction);
                                        return new h(new m(t.x, l.x, s.x, u.x, c.x, e.easingFunction), new m(t.y, l.y, s.y, u.z, c.y, e.easingFunction), new m(t.z, l.z, s.z, u.z, c.z, e.easingFunction));
                                    case "oscillating-random":
                                        i = R(e.minValue), n = R(e.maxValue);
                                        var _ = R(e.minStart),
                                            d = R(e.maxStart),
                                            E = R(e.minFinal),
                                            p = R(e.maxFinal),
                                            I = R(e.minDuration),
                                            f = R(e.maxDuration),
                                            L = R(e.minDirection),
                                            N = R(e.maxDirection);
                                        return new h(new m(A(i.x, n.x), A(_.x, d.x), A(E.x, p.x), A(I.x, f.x), O(L.x, N.x), v(e.easingFunctions)[0]), new m(A(i.y, n.y), A(_.y, d.y), A(E.y, p.y), A(I.y, f.y), O(L.y, N.y), v(e.easingFunctions)[0]), new m(A(i.z, n.z), A(_.z, d.z), A(E.z, p.z), A(I.z, f.z), O(L.z, N.z), v(e.easingFunctions)[0]))
                                }
                            }(p(p({}, y), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: N(I.dragCoefficient),
                            size: f,
                            opacity: (U = I.opacity, function(e) {
                                switch (e.type) {
                                    case "static":
                                        return new T(e.value);
                                    case "static-random":
                                        return new T(A(e.minValue, e.maxValue));
                                    case "linear":
                                        return new C(e.value, e.addValue);
                                    case "linear-random":
                                        return new C(A(e.minValue, e.maxValue), A(e.minAddValue, e.maxAddValue));
                                    case "oscillating":
                                        return new m(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                                    case "oscillating-random":
                                        return new m(A(e.minValue, e.maxValue), A(e.minStart, e.maxStart), A(e.minFinal, e.maxFinal), A(e.minDuration, e.maxDuration), O(e.minDirection, e.maxDirection), v(e.easingFunctions)[0])
                                }
                            }(p(p({}, U), {
                                valueType: "number"
                            }))),
                            spriteX: S * s.spriteWidth + 2 * S,
                            spriteY: M * s.spriteHeight + 2 * M,
                            spriteWidth: s.spriteWidth,
                            spriteHeight: s.spriteHeight
                        }));
                        return D(w, t), w
                    }, [D]),
                    x = n.useCallback(function(e) {
                        M.current.delete(e)
                    }, []),
                    b = n.useCallback(function() {
                        return M.current.clear()
                    }, []),
                    G = n.useCallback(function() {
                        return g.current
                    }, []);
                n.useImperativeHandle(t, function() {
                    return {
                        createConfetti: w,
                        addConfetti: D,
                        deleteConfetti: x,
                        clearConfetti: b,
                        getCanvas: G
                    }
                }, [w, D, x, b, G]);
                var V = n.useCallback(function(e, t) {
                        var i, n, r = t.clickHandler,
                            a = t.mouseHandler;
                        if (null != r || null != a) {
                            var s = null === (i = g.current) || void 0 === i ? void 0 : i.getBoundingClientRect();
                            if (null != s) {
                                var u = function(e, t) {
                                    if (null == t) throw Error("element should not be null");
                                    var i = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - i.left,
                                        y: e.clientY - i.top
                                    }
                                }(e, g.current);
                                if (l(u, {
                                        x: s.left,
                                        y: s.top,
                                        width: s.width,
                                        height: s.height
                                    })) {
                                    if (null != a) return a(e);
                                    if (null != r) {
                                        var c = -1e3 / U.current * 2,
                                            _ = function(e, t) {
                                                for (var i = 0, n = Array.from(e.values()); i < n.length; i++) {
                                                    var r = n[i];
                                                    if (null != r && t(r)) return r
                                                }
                                                return null
                                            }(M.current, function(e) {
                                                var t = e.confetti,
                                                    i = t.previewPositionUpdate(o, c);
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
                    }, [o]),
                    H = n.useCallback(function(e) {
                        return V(e, {
                            clickHandler: s
                        })
                    }, [V, s]),
                    B = n.useCallback(function(e) {
                        return V(e, {
                            clickHandler: _
                        })
                    }, [V, _]),
                    k = n.useCallback(function(e) {
                        return V(e, {
                            mouseHandler: d
                        })
                    }, [V, d]),
                    F = n.useCallback(function(e) {
                        return V(e, {
                            mouseHandler: E
                        })
                    }, [V, E]);
                return n.useEffect(function() {
                    var e = function(e, t, i) {
                        null != i && window.addEventListener(e, t)
                    };
                    return e("click", H, s), e("mousedown", B, _), e("mousemove", k, d), e("mouseup", F, E),
                        function() {
                            window.removeEventListener("click", H), window.removeEventListener("mousedown", B), window.removeEventListener("mousemove", k), window.removeEventListener("mouseup", k)
                        }
                }, [H, B, k, F, s, _, d, E]), n.useEffect(function() {
                    var e = g.current,
                        t = new ResizeObserver(function() {
                            ! function(e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        n = t.width,
                                        r = t.height;
                                    e.width = n * i.g.devicePixelRatio, e.height = r * i.g.devicePixelRatio
                                }
                            }(g.current)
                        });
                    return null != e && t.observe(e),
                        function() {
                            null != e && t.unobserve(e)
                        }
                }, []), n.createElement("canvas", p({}, L, {
                    className: a,
                    ref: g
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
            var M = n.forwardRef(function(e, t) {
                var i, a = e.className,
                    l = e.visible,
                    s = void 0 !== l && l,
                    u = e.sprites,
                    c = e.colors,
                    _ = e.spriteWidth,
                    d = e.spriteHeight,
                    E = n.useRef(null),
                    p = n.useRef([]),
                    I = n.useRef(!1),
                    f = n.useRef({});
                n.useImperativeHandle(t, function() {
                    return {
                        getCanvas: function() {
                            return E.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: p.current,
                                colors: c,
                                spriteWidth: _,
                                spriteHeight: d
                            }
                        },
                        addReadyListener: function(e) {
                            var t = (0, r.v4)();
                            return f.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete f.current[e]
                        },
                        isReady: I.current
                    }
                }, [c, d, _]);
                var h = n.useCallback(function() {
                        var e = E.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height), p.current.forEach(function(e, i) {
                            var n = function(n, r) {
                                var a = _ * r + 2 * r,
                                    o = d * i + 2 * i;
                                if (t.drawImage(e.image, a, o, _, d), null != n) {
                                    for (var l, s, u = t.getImageData(a, o, _, d), c = ("#" === (l = n)[0] && (l = l.slice(1)), {
                                            r: (s = parseInt(l, 16)) >> 16 & 255,
                                            g: s >> 8 & 255,
                                            b: 255 & s
                                        }), E = 0; E < u.data.length; E += 4) u.data[E] = c.r, u.data[E + 1] = c.g, u.data[E + 2] = c.b;
                                    t.putImageData(u, a, o)
                                }
                            };
                            e.colorize ? c.forEach(function(e, t) {
                                return n(e, t)
                            }) : n(null, 0)
                        }))
                    }, [c, d, _]),
                    T = n.useCallback(function() {
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
                    C = n.useCallback(function(e) {
                        for (var t in f.current) f.current[t](e)
                    }, []),
                    m = n.useCallback(function() {
                        var e, t, i, n;
                        return e = void 0, t = void 0, i = void 0, n = function() {
                            return function(e, t) {
                                var i, n, r, a, o = {
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
                                    return function(s) {
                                        return function(l) {
                                            if (i) throw TypeError("Generator is already executing.");
                                            for (; a && (a = 0, l[0] && (o = 0)), o;) try {
                                                if (i = 1, n && (r = 2 & l[0] ? n.return : l[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, l[1])).done) return r;
                                                switch (n = 0, r && (l = [2 & l[0], r.value]), l[0]) {
                                                    case 0:
                                                    case 1:
                                                        r = l;
                                                        break;
                                                    case 4:
                                                        return o.label++, {
                                                            value: l[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        o.label++, n = l[1], l = [0];
                                                        continue;
                                                    case 7:
                                                        l = o.ops.pop(), o.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                            o = 0;
                                                            continue
                                                        }
                                                        if (3 === l[0] && (!r || l[1] > r[0] && l[1] < r[3])) {
                                                            o.label = l[1];
                                                            break
                                                        }
                                                        if (6 === l[0] && o.label < r[1]) {
                                                            o.label = r[1], r = l;
                                                            break
                                                        }
                                                        if (r && o.label < r[2]) {
                                                            o.label = r[2], o.ops.push(l);
                                                            break
                                                        }
                                                        r[2] && o.ops.pop(), o.trys.pop();
                                                        continue
                                                }
                                                l = t.call(e, o)
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
                                        return [4, T()];
                                    case 1:
                                        return e.sent(), h(), I.current = !0, C(!0), [2]
                                }
                            })
                        }, new(i || (i = Promise))(function(r, a) {
                            function o(e) {
                                try {
                                    s(n.next(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function l(e) {
                                try {
                                    s(n.throw(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function s(e) {
                                var t;
                                e.done ? r(e.value) : ((t = e.value) instanceof i ? t : new i(function(e) {
                                    e(t)
                                })).then(o, l)
                            }
                            s((n = n.apply(e, t || [])).next())
                        })
                    }, [C, T, h]);
                return n.useEffect(function() {
                    m()
                }, [m]), n.useEffect(function() {
                    return function() {
                        return C(!1)
                    }
                }, [C]), n.useEffect(function() {
                    null != E.current && (E.current.width = (_ + 2) * Math.max(c.length, 1), E.current.height = (d + 2) * u.length)
                }, [c.length, d, _, u.length]), n.createElement("canvas", {
                    ref: E,
                    className: o(a, ((i = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !s, i))
                })
            });

            function S(e, t) {
                var i, r = n.useState(null !== (i = null == t ? void 0 : t.isReady) && void 0 !== i && i),
                    a = r[0],
                    o = r[1];
                n.useEffect(function() {
                    var e = null == t ? void 0 : t.addReadyListener(o);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }, [t]);
                var l = n.useCallback(function(i, n) {
                        var r = void 0 === n ? {} : n,
                            a = r.sprite,
                            o = r.color,
                            l = null == t ? void 0 : t.getCreateData(),
                            s = null == t ? void 0 : t.getCanvas();
                        if (null != s && null != l && 0 !== l.sprites.length) return null == e ? void 0 : e.createConfetti(i, s, l, a, o)
                    }, [e, t]),
                    s = n.useCallback(function(e, t, i) {
                        for (var n = [], r = 0; r < t; r++) {
                            var a = l(e, i);
                            a && n.push(a)
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
                        isReady: a && null != t && null != e
                    }
                }, [u, _, e, l, s, c, a, t])
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
                    return a
                },
                clearCardInfo: function() {
                    return o
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

            function a(e, t) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
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
            var n, r, a = i("37983");
            i("884691");
            var o = i("414456"),
                l = i.n(o),
                s = i("394846"),
                u = i("77078"),
                c = i("945330"),
                _ = i("381546"),
                d = i("782340"),
                E = i("955892");
            (n = r || (r = {})).DEFAULT = "", n.BOLD = "Bold", n.SOLID = "Solid";
            let p = e => {
                let {
                    closeAction: t,
                    variant: i,
                    keybind: n,
                    className: o
                } = e;
                return (0, a.jsxs)("div", {
                    className: l(E.container, o),
                    children: [(0, a.jsx)(u.Clickable, {
                        className: l(E.closeButton, {
                            [E.closeButtonBold]: i === r.BOLD,
                            [E.closeButtonSolid]: i === r.SOLID
                        }),
                        onClick: t,
                        "aria-label": d.default.Messages.CLOSE,
                        children: i === r.SOLID ? (0, a.jsx)(_.default, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, a.jsx)(c.default, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), s.isMobile ? null : (0, a.jsx)("div", {
                        className: l(E.keybind),
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
        505088: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                CircleXIcon: function() {
                    return o
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("669491"),
                a = i("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    secondaryColor: o = "transparent",
                    secondaryColorClass: l = "",
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...c
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, a.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof o ? o : o.css,
                        className: l
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        666031: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                GifIcon: function() {
                    return o
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("669491"),
                a = i("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...s
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87c-.625 0-1.178-.162-1.66-.485-.482-.324-.855-.777-1.121-1.359C4.133 13.437 4 12.762 4 12c0-.755.14-1.423.42-2.005.288-.583.701-1.039 1.24-1.37.546-.33 1.197-.495 1.951-.495.64 0 1.211.136 1.714.41.51.272.895.657 1.154 1.153l-1.218.873c-.367-.676-.913-1.013-1.639-1.013-.661 0-1.168.215-1.52.646-.352.425-.528 1.025-.528 1.8 0 .784.176 1.388.528 1.812.352.424.859.636 1.52.636.295 0 .564-.054.809-.162.251-.115.445-.27.582-.463v-.927H7.299v-1.402h3.245v4.226H9.272l-.205-.712c-.424.575-1.053.863-1.887.863Zm6.34-.151h-1.574V8.28h1.574v7.438Zm1.51 0h1.574v-2.824h2.76v-1.423h-2.76V9.704H20V8.28h-4.97v7.438Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        998460: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                GiftIcon: function() {
                    return o
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("669491"),
                a = i("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...s
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.089A4.089 4.089 0 0 1 12 4.898 4.089 4.089 0 0 1 15.912 2H16a4 4 0 0 1 3.465 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10a2 2 0 0 1 2-2h.535A3.982 3.982 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.088c-.959 0-1.794.652-2.027 1.582L13.281 8H16Zm-5.885-2.418L10.719 8H8a2 2 0 1 1 0-4h.089c.958 0 1.793.652 2.026 1.582Z",
                        clipRule: "evenodd",
                        className: l
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M3 20a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: l
                    })]
                })
            }
        },
        424823: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                PlusSmallIcon: function() {
                    return o
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("669491"),
                a = i("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...s
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        className: l
                    })
                })
            }
        },
        287083: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                StageIcon: function() {
                    return o
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("669491"),
                a = i("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...s
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Z",
                        className: l
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M16.83 15.233c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06Z",
                        className: l
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.331 20.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        className: l
                    })]
                })
            }
        },
        390300: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                VoiceNormalIcon: function() {
                    return o
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("669491"),
                a = i("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...s
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3ZM15.1 20.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Z",
                        className: l
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M15.157 16.512c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        className: l
                    })]
                })
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
                    return a
                }
            }), (n = r || (r = {})).POPOUT_WINDOW = "popout window", n.OVERLAY = "overlay", n.NOTICE = "notice", n.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", n.BADGE = "badge", n.USER_SETTINGS = "user settings", n.USER_SETTINGS_MENU = "user settings menu", n.ACCOUNT = "account", n.TEXT_AND_IMAGES = "text and images", n.GUILD_SETTINGS = "guild settings", n.OVERVIEW = "overview", n.STICKERS = "stickers", n.VANITY_URL = "vanity url", n.PREMIUM_MARKETING = "premium marketing", n.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", n.PREMIUM_PAYMENT_MODAL = "premium payment modal", n.PREMIUM_UPSELL_ALERT = "premium upsell alert", n.PREMIUM_UPSELL_MODAL = "premium upsell modal", n.PREMIUM_SETTINGS = "premium settings", n.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", n.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", n.CHANNEL_CALL = "channel call", n.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", n.RTC_PANEL = "rtc panel", n.SOUNDBOARD_BUTTON = "soundboard button", n.SOUNDBOARD_POPOUT = "soundboard popout", n.SOUNDBOARD_WHEEL = "soundboard wheel", n.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", n.GIFT_BUTTON = "gift button", n.EXPRESSION_SUGGESTIONS = "expression suggestions", n.EMOJI_PICKER = "emoji picker", n.STICKER_PICKER = "sticker picker", n.STICKER_POPOUT = "sticker popout", n.PREMIUM_UPSELL = "premium upsell", n.EMPTY_STATE = "empty state", n.SUBSCRIPTION_DETAILS = "subscription details", n.SUBSCRIPTION_HEADER = "subscription header", n.ACCOUNT_CREDIT_BANNER = "account credit banner", n.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", n.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", n.STREAM_QUALITY_INDICATOR = "stream quality indicator", n.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", n.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", n.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", n.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", n.RPC = "rpc", n.BILLING_STANDALONE = "billing standalone", n.GUILD_CHANNEL_LIST = "guild channel list", n.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", n.STICKER_MESSAGE = "sticker message", n.CHANNEL_TEXT_AREA = "channel text area", n.HEADER_BAR = "header bar", n.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", n.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", n.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", n.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", n.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", n.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", n.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", n.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", n.GUILD_HEADER = "guild header", n.GUILD_BANNER = "guild banner", n.GUILD_BANNER_NOTICE = "guild banner notice", n.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", n.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", n.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", n.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", n.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", n.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", n.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", n.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", n.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", n.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", n.GUILDS_LIST = "guilds list", n.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", n.ACTIVITY_DIRECTORY = "activity directory", n.ACTIVITY_TILE = "activity tile", n.ACTIVITY_UPSELL = "activity upsell", n.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", n.INSTANT_INVITE_MODAL = "instant invite modal", n.IMAGE_CROPPING_MODAL = "image cropping modal", n.GIF_PICKER = "gif picker", n.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", n.INVITE_MODAL = "invite modal", n.INVITE_EMBED = "invite embed", n.NEW_GUILD_BUTTON = "new guild button", n.CHARACTER_COUNT = "character count", n.DM_CHANNEL = "dm channel", n.GUILD_CHANNEL = "guild channel", n.FORUM_CHANNEL = "forum channel", n.FILE_UPLOAD_POPOUT = "file upload popout", n.EMOJI = "emoji", n.PROFILE = "profile", n.PROFILE_MODAL = "profile modal", n.PROFILE_POPOUT = "profile popout", n.GUILD_PROFILE = "guild profile", n.EDIT_AVATAR = "edit avatar", n.EDIT_BANNER = "edit banner", n.CHAT_INPUT = "chat input", n.CREATE_THREAD = "create thread", n.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", n.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", n.SELECT_IMAGE_MODAL = "select image modal", n.VIDEO_BACKGROUND_OPTIONS = "video background options", n.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", n.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", n.CAMERA_PREVIEW = "camera preview", n.HOME_PAGE_PREMIUM_TAB = "home page premium tab", n.HOME_PAGE_SHOP_TAB = "home page shop tab", n.PREMIUM_MARKETING_SURFACE = "premium marketing surface", n.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", n.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", n.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", n.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", n.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", n.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", n.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", n.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", n.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", n.PREMIUM_MARKETING_FEATURE = "premium marketing feature", n.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", n.PREMIUM_MARKETING_FOOTER = "premium marketing footer", n.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", n.CHANNEL_CALL_ACTION_BAR = "channel call action bar", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", n.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", n.VOICE_CONTROL_TRAY = "voice control tray", n.ACTIVE_NOW_COLUMN = "active now column", n.CONTEXT_MENU = "context menu", n.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", n.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", n.CHANNEL_CATEGORY_MENU = "channel category menu", n.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", n.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", n.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", n.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", n.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", n.CHANNEL_TITLE_MENU = "channel title menu", n.GROUP_DM_MENU = "group dm menu", n.AUDIT_LOG_USER_MENU = "audit log user menu", n.BANNED_USER_MENU = "banned user menu", n.DM_USER_MENU = "dm user menu", n.GROUP_DM_USER_MENU = "group dm user menu", n.GUILD_CHANNEL_USER_MENU = "guild channel user menu", n.GUILD_MODERATION_USER_MENU = "guild moderation user menu", n.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", n.GUILD_SETTINGS_USER_MENU = "guild settings user menu", n.GUILD_USER_MENU = "guild user menu", n.THREAD_USER_MENU = "thread user menu", n.USER_GENERIC_MENU = "user generic menu", n.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", n.VOICE_ACTION_SHEET = "voice action sheet", n.FOCUSED_VOICE_CONTROLS = "focused voice controls", n.MASKED_LINK = "masked link", n.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", n.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", n.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", n.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", n.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", n.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", n.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", n.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", n.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", n.ACCOUNT_PROFILE_POPOUT = "account profile popout", n.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", n.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", n.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", n.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", n.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", n.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", n.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", n.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", n.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", n.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", n.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", n.STAGE_VIDEO_LIMIT = "stage video limit", n.ACTIVITIES_MINI_SHELF = "activities mini shelf", n.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", n.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", n.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", n.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", n.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", n.APP_ICON_EDITOR = "app icon editor", n.CLIENT_THEMES_EDITOR = "client themes editor", n.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", n.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", n.SHARE_NITRO_EMBED = "share nitro embed", n.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", n.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", n.REFERRAL_TRIALS_POPOUT = "referral trials popout", n.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", n.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", n.ACTIVITY_BOOKMARK = "activity bookmark", n.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", n.ACTIVITY_DETAIL_PAGE = "activity detail page", n.ACTIVITIES_PAGE = "activities page", n.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", n.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", n.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", n.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", n.ACTIVITIES_HAPPENING_NOW = "activities happening now", n.MEDIA_VIEWER = "media viewer", n.MESSAGE_LONG_PRESS_MENU = "message long press menu", n.COLLECTIBLES_SHOP = "collectibles shop", n.COLLECTIBLES_SHOP_CARD = "collectibles shop card", n.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", n.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", n.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", n.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", n.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", n.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", n.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", n.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", n.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", n.PREMIUM_BILLING_INFO = "premium billing info", n.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", n.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", n.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", n.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", n.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", n.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", n.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", n.PREMIUM_PLAN_SELECT = "premium_plan_select", n.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", n.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", n.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", n.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", n.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", n.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", n.MEMBER_SAFETY_PAGE = "member safety page", n.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", n.GUILD_MEMBER_MOD_VIEW = "guild member mod view", n.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", n.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", n.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", n.GUILD_SHOP_PAGE = "guild shop page", n.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", n.MESSAGE_REMIX_TAG = "message remix tag", n.MESSAGE_REMIX_BUTTON = "message remix button", n.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", n.CLIPS_SETTINGS = "clips settings", n.CLIPS_GALLERY = "clips gallery", n.CLIPS_GALLERY_ITEM = "clips gallery item", n.CLIPS_EDITOR = "clips editor", n.CLIPS_SHARE_MODAL = "clips share modal", n.CHANNEL_ATTACH_BUTTON = "channel attach button", n.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", n.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", n.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", n.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", n.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", n.GUILD_EVENT_CARD = "guild event card", n.EVENT_SETTINGS = "event settings";
            var n, r, a = r
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
                a = i("516555"),
                o = i("65597"),
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
                    addClickListener: d,
                    removeClickListener: E
                } = e, p = (0, a.useConfettiCannon)(i, s), I = (0, o.default)([l.default], () => l.default.useReducedMotion), f = r.useMemo(() => I ? u : {
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
                    addClickListener: d,
                    removeClickListener: E
                }, [d, _, p, i, I, E]);
                return (0, n.jsx)(c.Provider, {
                    value: f,
                    children: t
                })
            }
        },
        649844: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return E
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("748820"),
                a = i("77078"),
                o = i("112679"),
                l = i("55689"),
                s = i("855133"),
                u = i("599110"),
                c = i("659500"),
                _ = i("49111"),
                d = i("646718");

            function E(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: E,
                    onClose: p,
                    onComplete: I,
                    onSubscriptionConfirmation: f,
                    analyticsLocations: h,
                    analyticsObject: T,
                    analyticsLocation: C,
                    analyticsSourceLocation: m,
                    isGift: A = !1,
                    giftMessage: v,
                    subscriptionTier: O,
                    trialId: L,
                    postSuccessGuild: R,
                    openInvoiceId: N,
                    applicationId: g,
                    referralTrialOfferId: M,
                    giftRecipient: S,
                    returnRef: y
                } = null != e ? e : {}, U = !1, P = (0, r.v4)();
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await i.el("646139").then(i.bind(i, "646139"));
                    return i => {
                        let {
                            onClose: r,
                            ...a
                        } = i;
                        return (0, n.jsx)(e, {
                            ...a,
                            loadId: P,
                            subscriptionTier: O,
                            skuId: O,
                            isGift: A,
                            giftMessage: v,
                            giftRecipient: S,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                r(), null == p || p(e), e && (null == f || f())
                            },
                            onComplete: () => {
                                U = !0, null == I || I(), !A && ((0, s.setIsPersistentHelperHidden)(!0), (0, s.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: f,
                            analyticsLocations: h,
                            analyticsObject: T,
                            analyticsLocation: C,
                            analyticsSourceLocation: m,
                            trialId: L,
                            postSuccessGuild: R,
                            planGroup: d.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: N,
                            applicationId: g,
                            referralTrialOfferId: M,
                            returnRef: y
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !U && u.default.track(_.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: P,
                            payment_type: _.PurchaseTypeToAnalyticsPaymentType[_.PurchaseTypes.SUBSCRIPTION],
                            location: null != C ? C : T,
                            source: m,
                            subscription_type: _.SubscriptionTypes.PREMIUM,
                            is_gift: A,
                            eligible_for_trial: null != L,
                            application_id: g,
                            location_stack: h
                        }), (0, o.clearError)(), (0, l.clearPurchaseTokenAuthState)(), null == p || p(U), U && (!A && c.ComponentDispatch.dispatch(_.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == f || f())
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
                    return a
                },
                resetPremiumTutorialStore: function() {
                    return o
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
                a = () => {
                    n.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                o = () => {
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
        374278: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return T
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("77078"),
                a = i("95039"),
                o = i("305961"),
                l = i("957255"),
                s = i("145131"),
                u = i("181114"),
                c = i("599110"),
                _ = i("488464"),
                d = i("998716"),
                E = i("923510"),
                p = i("49111"),
                I = i("646718"),
                f = i("782340"),
                h = i("400237");

            function T(e) {
                var t;
                let i, {
                        channel: T,
                        transitionState: C,
                        onClose: m
                    } = e,
                    A = o.default.getGuild(T.guild_id),
                    v = null !== (t = null == A ? void 0 : A.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
                    O = !!(null == A ? void 0 : A.isCommunity()),
                    L = f.default.Messages.STAGE_FULL_TITLE,
                    R = O ? v < p.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED : (null == A ? void 0 : A.premiumTier) !== p.BoostedGuildTiers.TIER_3 && v <= p.MAX_STAGE_VIDEO_USER_LIMIT_TIER2,
                    N = l.default.can(E.MODERATE_STAGE_CHANNEL_PERMISSIONS, T);
                i = O && (null == A ? void 0 : A.premiumTier) === p.BoostedGuildTiers.TIER_3 ? v <= p.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED ? f.default.Messages.STAGE_FULL_BOOST_MORE_BODY : f.default.Messages.STAGE_FULL_MAX_BODY : R ? f.default.Messages.STAGE_FULL_BODY : f.default.Messages.STAGE_FULL_MAX_BODY;
                let g = () => {
                        m(), c.default.track(p.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
                            guild_id: T.guild_id,
                            type: I.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                            is_moderator: N,
                            action: I.BoostingUpsellAction.DISMISS
                        })
                    },
                    M = _.default.getMutableParticipants(T.id, d.StageChannelParticipantNamedIndex.SPEAKER),
                    S = M.filter(e => e.type === d.StageChannelParticipantTypes.VOICE),
                    y = S.length,
                    U = _.default.getParticipantCount(T.id, d.StageChannelParticipantNamedIndex.AUDIENCE);
                return c.default.track(p.AnalyticEvents.BOOSTING_UPSELL_VIEWED, {
                    guild_id: T.guild_id,
                    type: I.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                    is_moderator: N,
                    listener_count: y + U
                }), (0, n.jsxs)(r.ModalRoot, {
                    size: r.ModalSize.SMALL,
                    transitionState: C,
                    "aria-label": L,
                    children: [(0, n.jsxs)(r.ModalHeader, {
                        justify: s.default.Justify.END,
                        separator: !1,
                        className: h.header,
                        children: [(0, n.jsx)("div", {
                            className: h.fullArt
                        }), (0, n.jsx)(r.ModalCloseButton, {
                            onClick: m
                        })]
                    }), (0, n.jsxs)(r.ModalContent, {
                        className: h.content,
                        children: [(0, n.jsx)(r.Heading, {
                            variant: "heading-xl/bold",
                            children: L
                        }), (0, n.jsx)(r.Text, {
                            variant: "text-md/medium",
                            children: i
                        })]
                    }), (0, n.jsx)(r.ModalFooter, {
                        className: h.footer,
                        children: R ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(r.Button, {
                                look: r.ButtonLooks.LINK,
                                className: h.noThanksButton,
                                color: r.ButtonColors.CUSTOM,
                                size: r.ButtonSizes.SMALL,
                                onClick: g,
                                children: f.default.Messages.NO_THANKS
                            }), (0, n.jsx)(u.default, {
                                onClick: () => {
                                    m(), (0, a.openGuildBoostingMarketingModal)({
                                        guildId: T.guild_id,
                                        location: {
                                            section: p.AnalyticsSections.STAGE_VIDEO_LIMIT
                                        }
                                    }), c.default.track(p.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
                                        guild_id: T.guild_id,
                                        type: I.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                                        is_moderator: N,
                                        action: I.BoostingUpsellAction.BOOST
                                    })
                                },
                                size: r.ButtonSizes.SMALL,
                                className: h.boostButton,
                                children: f.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
                            })]
                        }) : (0, n.jsx)(r.Button, {
                            onClick: g,
                            size: r.ButtonSizes.SMALL,
                            color: r.ButtonColors.CUSTOM,
                            className: h.boostButton,
                            children: f.default.Messages.GOT_IT
                        })
                    })]
                })
            }
        },
        931138: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return c
                }
            });
            var n = i("37983"),
                r = i("884691"),
                a = i("414456"),
                o = i.n(a),
                l = i("77078"),
                s = i("760607"),
                u = i("89976");

            function c(e) {
                let {
                    children: t,
                    size: i = 16,
                    className: a,
                    flowerStarClassName: c,
                    ..._
                } = e, d = r.Children.only(t), E = (0, l.useRedesignIconContext)().enabled;
                return (0, n.jsxs)("div", {
                    className: o(u.flowerStarContainer, a),
                    style: {
                        width: i,
                        height: i
                    },
                    children: [(0, n.jsx)(s.default, {
                        ..._,
                        className: o(c, u.flowerStar)
                    }), (0, n.jsx)("div", {
                        className: o(u.childContainer, {
                            [u.redesignIconChildContainer]: E
                        }),
                        children: d
                    })]
                })
            }
        },
        181114: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                Shine: function() {
                    return f
                },
                default: function() {
                    return T
                }
            });
            var n, r, a = i("37983"),
                o = i("884691"),
                l = i("414456"),
                s = i.n(l),
                u = i("458960"),
                c = i("77078"),
                _ = i("252744"),
                d = i("145131"),
                E = i("396792");
            (n = r || (r = {})).DEFAULT = "default", n.SMALL = "small";
            let p = {
                    [r.DEFAULT]: E.shineDefault,
                    [r.SMALL]: E.shineSmall
                },
                I = {
                    [r.DEFAULT]: E.shineInnerDefault,
                    [r.SMALL]: E.shineInnerSmall
                };
            class f extends o.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: i,
                        ...n
                    } = this.props;
                    return (0, a.jsx)(u.default.div, {
                        ...n,
                        className: s(E.shineContainer, e, {
                            [E.shinePaused]: i
                        }),
                        children: (0, a.jsx)(d.default, {
                            align: d.default.Align.CENTER,
                            justify: d.default.Justify.CENTER,
                            className: p[t],
                            children: (0, a.jsx)("div", {
                                className: I[t]
                            })
                        })
                    })
                }
            }
            f.defaultProps = {
                shineSize: r.DEFAULT
            };
            let h = e => {
                let {
                    children: t,
                    className: i,
                    disabled: n,
                    submitting: l,
                    pauseAnimation: u,
                    shineSize: d = r.DEFAULT,
                    shinePaused: p,
                    buttonShineClassName: I,
                    onlyShineOnHover: h,
                    ...T
                } = e, C = o.createRef(), m = (0, _.default)(C), A = !n && !l && !0 !== u && (!h || m);
                return (0, a.jsxs)(c.Button, {
                    buttonRef: C,
                    ...T,
                    className: s(E.shinyButton, i),
                    disabled: n,
                    submitting: l,
                    children: [t, A ? (0, a.jsx)(f, {
                        shinePaused: p,
                        className: s(E.buttonShine, h ? E.onlyShineOnHover : void 0, I),
                        shineSize: d
                    }) : null]
                })
            };
            h.ShineSizes = r;
            var T = h
        },
        381546: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("469563"),
                a = i("505088"),
                o = i("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: i = 24,
                        color: r = "currentColor",
                        foreground: a,
                        backgroundColor: l,
                        ...s
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, o.default)(s),
                        width: t,
                        height: i,
                        viewBox: "0 0 14 14",
                        children: [null != l ? (0, n.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: l
                        }) : null, (0, n.jsx)("path", {
                            fill: r,
                            className: a,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, a.CircleXIcon)
        },
        760607: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("75196"),
                a = function(e) {
                    let {
                        width: t = 16,
                        height: i = 16,
                        color: a = "currentColor",
                        foreground: o,
                        ...l
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(l),
                        width: t,
                        height: i,
                        viewBox: "0 0 16 15.2",
                        children: (0, n.jsx)("path", {
                            className: o,
                            fill: a,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        978679: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("469563"),
                a = i("998460"),
                o = i("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: i = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, n.jsx)("svg", {
                        width: t,
                        height: i,
                        ...(0, o.default)(l),
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fill: r,
                            className: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, a.GiftIcon)
        },
        151185: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("469563"),
                a = i("424823"),
                o = i("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: i = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, o.default)(l),
                        width: t,
                        height: i,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fill: r,
                            className: a,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, a.PlusSmallIcon)
        },
        368121: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("469563"),
                a = i("390300"),
                o = i("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: i = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, o.default)(l),
                        width: t,
                        height: i,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            className: a,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, a.VoiceNormalIcon)
        },
        228427: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("469563"),
                a = i("287083"),
                o = i("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: i = 32,
                        color: r = "currentColor",
                        ...a
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, o.default)(a),
                        width: t,
                        height: i,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: r
                        })
                    })
                }, a.StageIcon)
        },
        157590: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("817736"),
                r = i("118810");
            let a = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class o {
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
                constructor(e = a) {
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
                a = i("157590");
            let o = (0, r.v4)(),
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
                    t ? l.has(t) ? this.elementId = l.get(t) || "" : l.set(t, (0, r.v4)()) : this.elementId = o;
                    let u = this.getVisibilityObserverId();
                    !s.has(u) && s.set(u, new a.default({
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
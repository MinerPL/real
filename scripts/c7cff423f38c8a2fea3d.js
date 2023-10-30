(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["89518"], {
        516555: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ConfettiCanvas: function() {
                    return _
                },
                Environment: function() {
                    return f
                },
                SpriteCanvas: function() {
                    return F
                },
                useConfettiCannon: function() {
                    return P
                }
            });
            var i = n("884691"),
                r = n("748820"),
                a = n("414456"),
                o = n.n(a);

            function u(t, e) {
                var n = t.x,
                    i = t.y;
                return n > e.x && n < e.x + e.width && i > e.y && i < e.y + e.height
            }

            function c(t, e) {
                return t * e * e * (e > 0 ? -1 : 1)
            }
            var l = function() {
                    function t(t) {
                        this.id = t.id, this.position = t.position, this.velocity = t.velocity, this.rotation = t.rotation, this.dragCoefficient = t.dragCoefficient, this.size = t.size, this.opacity = t.opacity, this.spriteX = t.spriteX, this.spriteY = t.spriteY, this.spriteWidth = t.spriteWidth, this.spriteHeight = t.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return t.prototype.getNewForces = function(t, e) {
                        var n, i, r, a, o = t.wind * e,
                            u = -t.gravity * e;
                        return {
                            x: o + (n = this.dragCoefficient.x, n * (i = this.velocity.x) * i * (i > 0 ? -1 : 1)),
                            y: u + (r = this.dragCoefficient.y, r * (a = this.velocity.y) * a * (a > 0 ? -1 : 1))
                        }
                    }, t.prototype.update = function(t) {
                        var e = Date.now(),
                            n = (e - this._lastUpdatedAt) / 100;
                        this.rotation.update(n), this.dragCoefficient.update(n);
                        var i = this.getNewForces(t, n),
                            r = i.x,
                            a = i.y;
                        this.velocity.update(n), this.velocity.x += r, this.velocity.y += a, this.position.update(n), this.position.x += this.velocity.x * n, this.position.y += this.velocity.y * n, this.size.update(n), this.opacity.update(n), this._lastUpdatedAt = e
                    }, t.prototype.previewPositionUpdate = function(t, e) {
                        var n = e / 100,
                            i = this.velocity.previewUpdate(n),
                            r = this.getNewForces(t, n),
                            a = r.x,
                            o = r.y;
                        i.x += a, i.y += o;
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
                w = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return p(e, t), e.prototype.update = function() {}, e.prototype.previewUpdate = function() {
                        return this.value
                    }, e
                }(v),
                x = function(t) {
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
                g = function(t) {
                    function e(e, n, i, r, a, o) {
                        var u = t.call(this, e) || this;
                        u.min = n, u.max = i, u.duration = r;
                        var c = u.value / (u.max - u.min) * u.duration,
                            l = isNaN(c) ? 0 : c;
                        return u.timePassed = l < 0 ? u.duration - l : l, u.directionMultiplier = a, u.easingFunction = o, u
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
                            a = this.easingFunction(i, this.min, e, this.duration);
                        return [isNaN(a) ? 0 : a, i, r]
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

            function k(t) {
                return "number" == typeof t ? {
                    x: t,
                    y: t,
                    z: t
                } : t
            }

            function V(t) {
                return function(t) {
                    switch (t.type) {
                        case "static":
                            var e = R(t.value);
                            return new y(new w(e.x), new w(e.y));
                        case "static-random":
                            var n = R(t.minValue),
                                i = R(t.maxValue);
                            return new y(new w(b(n.x, i.x)), new w(b(n.y, i.y)));
                        case "linear":
                            e = R(t.value);
                            var r = R(t.addValue);
                            return new y(new x(e.x, r.x), new x(e.y, r.y));
                        case "linear-random":
                            n = R(t.minValue), i = R(t.maxValue);
                            var a = R(t.minAddValue),
                                o = R(t.maxAddValue);
                            return new y(new x(b(n.x, i.x), b(a.x, o.x)), new x(b(n.y, i.y), b(a.x, o.x)));
                        case "oscillating":
                            e = R(t.value);
                            var u = R(t.start),
                                c = R(t.final),
                                l = R(t.duration),
                                s = R(t.direction);
                            return new y(new g(e.x, u.x, c.x, l.x, s.x, t.easingFunction), new g(e.y, u.y, c.y, l.x, s.y, t.easingFunction));
                        case "oscillating-random":
                            n = R(t.minValue), i = R(t.maxValue);
                            var f = R(t.minStart),
                                d = R(t.maxStart),
                                p = R(t.minFinal),
                                h = R(t.maxFinal),
                                v = R(t.minDuration),
                                m = R(t.maxDuration),
                                k = R(t.minDirection),
                                V = R(t.maxDirection);
                            return new y(new g(b(n.x, i.x), b(f.x, d.x), b(p.x, h.x), b(v.x, m.x), z(k.x, V.x), C(t.easingFunctions)[0]), new g(b(n.y, i.y), b(f.y, d.y), b(p.y, h.y), b(v.y, m.y), z(k.y, V.y), C(t.easingFunctions)[0]))
                    }
                }(h(h({}, t), {
                    valueType: "Vector2"
                }))
            }
            var _ = i.forwardRef(function(t, e) {
                var a = t.className,
                    o = t.environment,
                    c = t.onClick,
                    f = t.onMouseDown,
                    d = t.onMouseMove,
                    p = t.onMouseUp,
                    v = t.onBeforeRender,
                    y = t.onAfterRender,
                    R = function(t, e) {
                        var n = {};
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && 0 > e.indexOf(i) && (n[i] = t[i]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (i = Object.getOwnPropertySymbols(t); r < i.length; r++) 0 > e.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]])
                        }
                        return n
                    }(t, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    _ = i.useRef(null),
                    F = i.useRef(new Map),
                    P = i.useRef(null),
                    M = i.useRef(0),
                    O = i.useRef(0),
                    D = i.useCallback(function() {
                        var t = _.current;
                        if (null != t) {
                            var e = t.getContext("2d");
                            if (null != e) {
                                e.clearRect(0, 0, t.width, t.height), null == v || v(e), F.current.forEach(function(n, i) {
                                    var r = n.confetti,
                                        a = n.spriteCanvas;
                                    r.update(o), r.draw(a, e), r.shouldDestroy(t, o) && F.current.delete(i)
                                }), null == y || y(e), F.current.size > 0 ? P.current = window.requestAnimationFrame(D) : (e.clearRect(0, 0, t.width, t.height), P.current = null);
                                var n = Date.now();
                                0 !== M.current && (O.current = 1e3 / (n - M.current)), M.current = n
                            }
                        }
                    }, [o, y, v]);
                i.useEffect(function() {
                    null != P.current && (window.cancelAnimationFrame(P.current), P.current = window.requestAnimationFrame(D))
                }, [D]);
                var E = i.useCallback(function(t, e) {
                        F.current.set(t.id, {
                            confetti: t,
                            spriteCanvas: e
                        }), null == P.current && D()
                    }, [D]),
                    U = i.useCallback(function(t, e, n, i, a) {
                        var o, u, c, f, d, p, v, y, R, _, F, P, M, O, D, U = (o = null !== (D = t.id) && void 0 !== D ? D : (0, r.v4)(), u = t, c = n, f = i, d = a, y = V((v = (p = u, h(h({
                            id: o
                        }, s), p))).size), _ = (R = function(t, e) {
                            if (null != t) {
                                var n = e.sprites.findIndex(function(e) {
                                    return "string" == typeof t ? e.src === t && e.colorize : e.src === t.src && e.colorize === t.colorize
                                });
                                if (-1 !== n) return [t, n]
                            }
                            return C(e.sprites)
                        }(f, c))[0], F = R[1], P = function(t, e, n) {
                            if (!("string" == typeof(i = t) || i.colorize)) return 0;
                            var i, r = null != e ? n.colors.findIndex(function(t) {
                                return t === e
                            }) : -1;
                            return -1 !== r ? r : Math.floor(b(0, n.colors.length - 1))
                        }(null != f ? f : _, d, c), new l({
                            id: o,
                            position: V(v.position),
                            velocity: V(v.velocity),
                            rotation: (M = v.rotation, function(t) {
                                switch (t.type) {
                                    case "static":
                                        var e = k(t.value);
                                        return new m(new w(e.x), new w(e.y), new w(e.z));
                                    case "static-random":
                                        var n = k(t.minValue),
                                            i = k(t.maxValue);
                                        return new m(new w(b(n.x, i.x)), new w(b(n.y, i.y)), new w(b(n.z, i.z)));
                                    case "linear":
                                        e = k(t.value);
                                        var r = k(t.addValue);
                                        return new m(new x(e.x, r.x), new x(e.y, r.y), new x(e.z, r.z));
                                    case "linear-random":
                                        n = k(t.minValue), i = k(t.maxValue);
                                        var a = k(t.minAddValue),
                                            o = k(t.maxAddValue);
                                        return new m(new x(b(n.x, i.x), b(a.x, o.x)), new x(b(n.y, i.y), b(a.y, o.y)), new x(b(n.z, i.z), b(a.z, o.z)));
                                    case "oscillating":
                                        e = k(t.value);
                                        var u = k(t.start),
                                            c = k(t.final),
                                            l = k(t.duration),
                                            s = k(t.direction);
                                        return new m(new g(e.x, u.x, c.x, l.x, s.x, t.easingFunction), new g(e.y, u.y, c.y, l.z, s.y, t.easingFunction), new g(e.z, u.z, c.z, l.z, s.z, t.easingFunction));
                                    case "oscillating-random":
                                        n = k(t.minValue), i = k(t.maxValue);
                                        var f = k(t.minStart),
                                            d = k(t.maxStart),
                                            p = k(t.minFinal),
                                            h = k(t.maxFinal),
                                            v = k(t.minDuration),
                                            y = k(t.maxDuration),
                                            R = k(t.minDirection),
                                            V = k(t.maxDirection);
                                        return new m(new g(b(n.x, i.x), b(f.x, d.x), b(p.x, h.x), b(v.x, y.x), z(R.x, V.x), C(t.easingFunctions)[0]), new g(b(n.y, i.y), b(f.y, d.y), b(p.y, h.y), b(v.y, y.y), z(R.y, V.y), C(t.easingFunctions)[0]), new g(b(n.z, i.z), b(f.z, d.z), b(p.z, h.z), b(v.z, y.z), z(R.z, V.z), C(t.easingFunctions)[0]))
                                }
                            }(h(h({}, M), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: V(v.dragCoefficient),
                            size: y,
                            opacity: (O = v.opacity, function(t) {
                                switch (t.type) {
                                    case "static":
                                        return new w(t.value);
                                    case "static-random":
                                        return new w(b(t.minValue, t.maxValue));
                                    case "linear":
                                        return new x(t.value, t.addValue);
                                    case "linear-random":
                                        return new x(b(t.minValue, t.maxValue), b(t.minAddValue, t.maxAddValue));
                                    case "oscillating":
                                        return new g(t.value, t.start, t.final, t.duration, t.direction, t.easingFunction);
                                    case "oscillating-random":
                                        return new g(b(t.minValue, t.maxValue), b(t.minStart, t.maxStart), b(t.minFinal, t.maxFinal), b(t.minDuration, t.maxDuration), z(t.minDirection, t.maxDirection), C(t.easingFunctions)[0])
                                }
                            }(h(h({}, O), {
                                valueType: "number"
                            }))),
                            spriteX: P * c.spriteWidth + 2 * P,
                            spriteY: F * c.spriteHeight + 2 * F,
                            spriteWidth: c.spriteWidth,
                            spriteHeight: c.spriteHeight
                        }));
                        return E(U, e), U
                    }, [E]),
                    S = i.useCallback(function(t) {
                        F.current.delete(t)
                    }, []),
                    A = i.useCallback(function() {
                        return F.current.clear()
                    }, []),
                    H = i.useCallback(function() {
                        return _.current
                    }, []);
                i.useImperativeHandle(e, function() {
                    return {
                        createConfetti: U,
                        addConfetti: E,
                        deleteConfetti: S,
                        clearConfetti: A,
                        getCanvas: H
                    }
                }, [U, E, S, A, H]);
                var j = i.useCallback(function(t, e) {
                        var n, i, r = e.clickHandler,
                            a = e.mouseHandler;
                        if (null != r || null != a) {
                            var c = null === (n = _.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != c) {
                                var l = function(t, e) {
                                    if (null == e) throw Error("element should not be null");
                                    var n = e.getBoundingClientRect();
                                    return {
                                        x: t.clientX - n.left,
                                        y: t.clientY - n.top
                                    }
                                }(t, _.current);
                                if (u(l, {
                                        x: c.left,
                                        y: c.top,
                                        width: c.width,
                                        height: c.height
                                    })) {
                                    if (null != a) return a(t);
                                    if (null != r) {
                                        var s = -1e3 / O.current * 2,
                                            f = function(t, e) {
                                                for (var n = 0, i = Array.from(t.values()); n < i.length; n++) {
                                                    var r = i[n];
                                                    if (null != r && e(r)) return r
                                                }
                                                return null
                                            }(F.current, function(t) {
                                                var e = t.confetti,
                                                    n = e.previewPositionUpdate(o, s);
                                                return u(l, {
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
                    }, [o]),
                    N = i.useCallback(function(t) {
                        return j(t, {
                            clickHandler: c
                        })
                    }, [j, c]),
                    I = i.useCallback(function(t) {
                        return j(t, {
                            clickHandler: f
                        })
                    }, [j, f]),
                    L = i.useCallback(function(t) {
                        return j(t, {
                            mouseHandler: d
                        })
                    }, [j, d]),
                    T = i.useCallback(function(t) {
                        return j(t, {
                            mouseHandler: p
                        })
                    }, [j, p]);
                return i.useEffect(function() {
                    var t = function(t, e, n) {
                        null != n && window.addEventListener(t, e)
                    };
                    return t("click", N, c), t("mousedown", I, f), t("mousemove", L, d), t("mouseup", T, p),
                        function() {
                            window.removeEventListener("click", N), window.removeEventListener("mousedown", I), window.removeEventListener("mousemove", L), window.removeEventListener("mouseup", L)
                        }
                }, [N, I, L, T, c, f, d, p]), i.useEffect(function() {
                    var t = _.current,
                        e = new ResizeObserver(function() {
                            ! function(t) {
                                if (null != t) {
                                    var e = t.getBoundingClientRect(),
                                        i = e.width,
                                        r = e.height;
                                    t.width = i * n.g.devicePixelRatio, t.height = r * n.g.devicePixelRatio
                                }
                            }(_.current)
                        });
                    return null != t && e.observe(t),
                        function() {
                            null != t && e.unobserve(t)
                        }
                }, []), i.createElement("canvas", h({}, R, {
                    className: a,
                    ref: _
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
            var F = i.forwardRef(function(t, e) {
                var n, a = t.className,
                    u = t.visible,
                    c = void 0 !== u && u,
                    l = t.sprites,
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
                                var a = f * r + 2 * r,
                                    o = d * n + 2 * n;
                                if (e.drawImage(t.image, a, o, f, d), null != i) {
                                    for (var u, c, l = e.getImageData(a, o, f, d), s = ("#" === (u = i)[0] && (u = u.slice(1)), {
                                            r: (c = parseInt(u, 16)) >> 16 & 255,
                                            g: c >> 8 & 255,
                                            b: 255 & c
                                        }), p = 0; p < l.data.length; p += 4) l.data[p] = s.r, l.data[p + 1] = s.g, l.data[p + 2] = s.b;
                                    e.putImageData(l, a, o)
                                }
                            };
                            t.colorize ? s.forEach(function(t, e) {
                                return i(t, e)
                            }) : i(null, 0)
                        }))
                    }, [s, d, f]),
                    w = i.useCallback(function() {
                        var t = l.map(function(t) {
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
                    }, [l]),
                    x = i.useCallback(function(t) {
                        for (var e in y.current) y.current[e](t)
                    }, []),
                    g = i.useCallback(function() {
                        var t, e, n, i;
                        return t = void 0, e = void 0, n = void 0, i = function() {
                            return function(t, e) {
                                var n, i, r, a, o = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & r[0]) throw r[1];
                                        return r[1]
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
                                                if (n = 1, i && (r = 2 & u[0] ? i.return : u[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, u[1])).done) return r;
                                                switch (i = 0, r && (u = [2 & u[0], r.value]), u[0]) {
                                                    case 0:
                                                    case 1:
                                                        r = u;
                                                        break;
                                                    case 4:
                                                        return o.label++, {
                                                            value: u[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        o.label++, i = u[1], u = [0];
                                                        continue;
                                                    case 7:
                                                        u = o.ops.pop(), o.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                                            o = 0;
                                                            continue
                                                        }
                                                        if (3 === u[0] && (!r || u[1] > r[0] && u[1] < r[3])) {
                                                            o.label = u[1];
                                                            break
                                                        }
                                                        if (6 === u[0] && o.label < r[1]) {
                                                            o.label = r[1], r = u;
                                                            break
                                                        }
                                                        if (r && o.label < r[2]) {
                                                            o.label = r[2], o.ops.push(u);
                                                            break
                                                        }
                                                        r[2] && o.ops.pop(), o.trys.pop();
                                                        continue
                                                }
                                                u = e.call(t, o)
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
                                        }([u, c])
                                    }
                                }
                            }(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, w()];
                                    case 1:
                                        return t.sent(), m(), v.current = !0, x(!0), [2]
                                }
                            })
                        }, new(n || (n = Promise))(function(r, a) {
                            function o(t) {
                                try {
                                    c(i.next(t))
                                } catch (t) {
                                    a(t)
                                }
                            }

                            function u(t) {
                                try {
                                    c(i.throw(t))
                                } catch (t) {
                                    a(t)
                                }
                            }

                            function c(t) {
                                var e;
                                t.done ? r(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                                    t(e)
                                })).then(o, u)
                            }
                            c((i = i.apply(t, e || [])).next())
                        })
                    }, [x, w, m]);
                return i.useEffect(function() {
                    g()
                }, [g]), i.useEffect(function() {
                    return function() {
                        return x(!1)
                    }
                }, [x]), i.useEffect(function() {
                    null != p.current && (p.current.width = (f + 2) * Math.max(s.length, 1), p.current.height = (d + 2) * l.length)
                }, [s.length, d, f, l.length]), i.createElement("canvas", {
                    ref: p,
                    className: o(a, ((n = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !c, n))
                })
            });

            function P(t, e) {
                var n, r = i.useState(null !== (n = null == e ? void 0 : e.isReady) && void 0 !== n && n),
                    a = r[0],
                    o = r[1];
                i.useEffect(function() {
                    var t = null == e ? void 0 : e.addReadyListener(o);
                    return function() {
                        null != t && (null == e || e.removeReadyListener(t))
                    }
                }, [e]);
                var u = i.useCallback(function(n, i) {
                        var r = void 0 === i ? {} : i,
                            a = r.sprite,
                            o = r.color,
                            u = null == e ? void 0 : e.getCreateData(),
                            c = null == e ? void 0 : e.getCanvas();
                        if (null != c && null != u && 0 !== u.sprites.length) return null == t ? void 0 : t.createConfetti(n, c, u, a, o)
                    }, [t, e]),
                    c = i.useCallback(function(t, e, n) {
                        for (var i = [], r = 0; r < e; r++) {
                            var a = u(t, n);
                            a && i.push(a)
                        }
                        return i
                    }, [u]),
                    l = i.useCallback(function(n) {
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
                        createMultipleConfetti: c,
                        addConfetti: l,
                        clearConfetti: f,
                        deleteConfetti: s,
                        isReady: a && null != e && null != t
                    }
                }, [l, f, t, u, c, s, a, e])
            }
        },
        48174: function(t, e, n) {
            "use strict";

            function i(t, e) {
                if (t.length !== e.length) return !1;
                for (let n = 0; n < e.length && n < t.length; n++)
                    if (!Object.is(t[n], e[n])) return !1;
                return !0
            }
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            })
        },
        775560: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useForceUpdate: function() {
                    return i.default
                },
                useStableMemo: function() {
                    return r.default
                },
                useLazyValue: function() {
                    return a.default
                }
            });
            var i = n("14716"),
                r = n("745510"),
                a = n("315378")
        },
        14716: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r() {
                let [, t] = (0, i.useState)({});
                return (0, i.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var i = n("884691");
            let r = {};

            function a(t) {
                let e = (0, i.useRef)(r);
                return e.current === r && (e.current = t()), e.current
            }
        },
        745510: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var i = n("884691"),
                r = n("48174");
            let a = [];

            function o(t, e) {
                let n = (0, i.useRef)(),
                    o = (0, i.useRef)(a);
                return o.current === a ? (n.current = t(), o.current = e) : !(0, r.default)(e, o.current) && (n.current = t(), o.current = e), n.current
            }
        }
    }
]);
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["69364"], {
        516555: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCanvas: function() {
                    return P
                },
                Environment: function() {
                    return d
                },
                SpriteCanvas: function() {
                    return S
                },
                useConfettiCannon: function() {
                    return _
                }
            });
            var i = n("884691"),
                r = n("748820"),
                a = n("414456"),
                o = n.n(a);

            function u(e, t) {
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
                        var n, i, r, a, o = e.wind * t,
                            u = -e.gravity * t;
                        return {
                            x: o + (n = this.dragCoefficient.x, n * (i = this.velocity.x) * i * (i > 0 ? -1 : 1)),
                            y: u + (r = this.dragCoefficient.y, r * (a = this.velocity.y) * a * (a > 0 ? -1 : 1))
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
                            o = r.y;
                        i.x += a, i.y += o;
                        var u = this.position.previewUpdate(n);
                        return u.x += i.x * n, u.y += i.y * n, u
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
                    function t(t, n, i, r, a, o) {
                        var u = e.call(this, t) || this;
                        u.min = n, u.max = i, u.duration = r;
                        var l = u.value / (u.max - u.min) * u.duration,
                            s = isNaN(l) ? 0 : l;
                        return u.timePassed = s < 0 ? u.duration - s : s, u.directionMultiplier = a, u.easingFunction = o, u
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

            function z(e, t) {
                return C([e, t])[0]
            }

            function k(e) {
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

            function O(e) {
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
                                o = k(e.maxAddValue);
                            return new y(new g(b(n.x, i.x), b(a.x, o.x)), new g(b(n.y, i.y), b(a.x, o.x)));
                        case "oscillating":
                            t = k(e.value);
                            var u = k(e.start),
                                l = k(e.final),
                                s = k(e.duration),
                                c = k(e.direction);
                            return new y(new x(t.x, u.x, l.x, s.x, c.x, e.easingFunction), new x(t.y, u.y, l.y, s.x, c.y, e.easingFunction));
                        case "oscillating-random":
                            n = k(e.minValue), i = k(e.maxValue);
                            var d = k(e.minStart),
                                f = k(e.maxStart),
                                h = k(e.minFinal),
                                p = k(e.maxFinal),
                                v = k(e.minDuration),
                                m = k(e.maxDuration),
                                R = k(e.minDirection),
                                O = k(e.maxDirection);
                            return new y(new x(b(n.x, i.x), b(d.x, f.x), b(h.x, p.x), b(v.x, m.x), z(R.x, O.x), C(e.easingFunctions)[0]), new x(b(n.y, i.y), b(d.y, f.y), b(h.y, p.y), b(v.y, m.y), z(R.y, O.y), C(e.easingFunctions)[0]))
                    }
                }(p(p({}, e), {
                    valueType: "Vector2"
                }))
            }
            var P = i.forwardRef(function(e, t) {
                var a = e.className,
                    o = e.environment,
                    l = e.onClick,
                    d = e.onMouseDown,
                    f = e.onMouseMove,
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
                    P = i.useRef(null),
                    S = i.useRef(new Map),
                    _ = i.useRef(null),
                    V = i.useRef(0),
                    E = i.useRef(0),
                    F = i.useCallback(function() {
                        var e = P.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == v || v(t), S.current.forEach(function(n, i) {
                                    var r = n.confetti,
                                        a = n.spriteCanvas;
                                    r.update(o), r.draw(a, t), r.shouldDestroy(e, o) && S.current.delete(i)
                                }), null == y || y(t), S.current.size > 0 ? _.current = window.requestAnimationFrame(F) : (t.clearRect(0, 0, e.width, e.height), _.current = null);
                                var n = Date.now();
                                0 !== V.current && (E.current = 1e3 / (n - V.current)), V.current = n
                            }
                        }
                    }, [o, y, v]);
                i.useEffect(function() {
                    null != _.current && (window.cancelAnimationFrame(_.current), _.current = window.requestAnimationFrame(F))
                }, [F]);
                var D = i.useCallback(function(e, t) {
                        S.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == _.current && F()
                    }, [F]),
                    M = i.useCallback(function(e, t, n, i, a) {
                        var o, u, l, d, f, h, v, y, k, P, S, _, V, E, F, M = (o = null !== (F = e.id) && void 0 !== F ? F : (0, r.v4)(), u = e, l = n, d = i, f = a, y = O((v = (h = u, p(p({
                            id: o
                        }, c), h))).size), P = (k = function(e, t) {
                            if (null != e) {
                                var n = t.sprites.findIndex(function(t) {
                                    return "string" == typeof e ? t.src === e && t.colorize : t.src === e.src && t.colorize === e.colorize
                                });
                                if (-1 !== n) return [e, n]
                            }
                            return C(t.sprites)
                        }(d, l))[0], S = k[1], _ = function(e, t, n) {
                            if (!("string" == typeof(i = e) || i.colorize)) return 0;
                            var i, r = null != t ? n.colors.findIndex(function(e) {
                                return e === t
                            }) : -1;
                            return -1 !== r ? r : Math.floor(b(0, n.colors.length - 1))
                        }(null != d ? d : P, f, l), new s({
                            id: o,
                            position: O(v.position),
                            velocity: O(v.velocity),
                            rotation: (V = v.rotation, function(e) {
                                switch (e.type) {
                                    case "static":
                                        var t = R(e.value);
                                        return new m(new w(t.x), new w(t.y), new w(t.z));
                                    case "static-random":
                                        var n = R(e.minValue),
                                            i = R(e.maxValue);
                                        return new m(new w(b(n.x, i.x)), new w(b(n.y, i.y)), new w(b(n.z, i.z)));
                                    case "linear":
                                        t = R(e.value);
                                        var r = R(e.addValue);
                                        return new m(new g(t.x, r.x), new g(t.y, r.y), new g(t.z, r.z));
                                    case "linear-random":
                                        n = R(e.minValue), i = R(e.maxValue);
                                        var a = R(e.minAddValue),
                                            o = R(e.maxAddValue);
                                        return new m(new g(b(n.x, i.x), b(a.x, o.x)), new g(b(n.y, i.y), b(a.y, o.y)), new g(b(n.z, i.z), b(a.z, o.z)));
                                    case "oscillating":
                                        t = R(e.value);
                                        var u = R(e.start),
                                            l = R(e.final),
                                            s = R(e.duration),
                                            c = R(e.direction);
                                        return new m(new x(t.x, u.x, l.x, s.x, c.x, e.easingFunction), new x(t.y, u.y, l.y, s.z, c.y, e.easingFunction), new x(t.z, u.z, l.z, s.z, c.z, e.easingFunction));
                                    case "oscillating-random":
                                        n = R(e.minValue), i = R(e.maxValue);
                                        var d = R(e.minStart),
                                            f = R(e.maxStart),
                                            h = R(e.minFinal),
                                            p = R(e.maxFinal),
                                            v = R(e.minDuration),
                                            y = R(e.maxDuration),
                                            k = R(e.minDirection),
                                            O = R(e.maxDirection);
                                        return new m(new x(b(n.x, i.x), b(d.x, f.x), b(h.x, p.x), b(v.x, y.x), z(k.x, O.x), C(e.easingFunctions)[0]), new x(b(n.y, i.y), b(d.y, f.y), b(h.y, p.y), b(v.y, y.y), z(k.y, O.y), C(e.easingFunctions)[0]), new x(b(n.z, i.z), b(d.z, f.z), b(h.z, p.z), b(v.z, y.z), z(k.z, O.z), C(e.easingFunctions)[0]))
                                }
                            }(p(p({}, V), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: O(v.dragCoefficient),
                            size: y,
                            opacity: (E = v.opacity, function(e) {
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
                                        return new x(b(e.minValue, e.maxValue), b(e.minStart, e.maxStart), b(e.minFinal, e.maxFinal), b(e.minDuration, e.maxDuration), z(e.minDirection, e.maxDirection), C(e.easingFunctions)[0])
                                }
                            }(p(p({}, E), {
                                valueType: "number"
                            }))),
                            spriteX: _ * l.spriteWidth + 2 * _,
                            spriteY: S * l.spriteHeight + 2 * S,
                            spriteWidth: l.spriteWidth,
                            spriteHeight: l.spriteHeight
                        }));
                        return D(M, t), M
                    }, [D]),
                    U = i.useCallback(function(e) {
                        S.current.delete(e)
                    }, []),
                    j = i.useCallback(function() {
                        return S.current.clear()
                    }, []),
                    H = i.useCallback(function() {
                        return P.current
                    }, []);
                i.useImperativeHandle(t, function() {
                    return {
                        createConfetti: M,
                        addConfetti: D,
                        deleteConfetti: U,
                        clearConfetti: j,
                        getCanvas: H
                    }
                }, [M, D, U, j, H]);
                var A = i.useCallback(function(e, t) {
                        var n, i, r = t.clickHandler,
                            a = t.mouseHandler;
                        if (null != r || null != a) {
                            var l = null === (n = P.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != l) {
                                var s = function(e, t) {
                                    if (null == t) throw Error("element should not be null");
                                    var n = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - n.left,
                                        y: e.clientY - n.top
                                    }
                                }(e, P.current);
                                if (u(s, {
                                        x: l.left,
                                        y: l.top,
                                        width: l.width,
                                        height: l.height
                                    })) {
                                    if (null != a) return a(e);
                                    if (null != r) {
                                        var c = -1e3 / E.current * 2,
                                            d = function(e, t) {
                                                for (var n = 0, i = Array.from(e.values()); n < i.length; n++) {
                                                    var r = i[n];
                                                    if (null != r && t(r)) return r
                                                }
                                                return null
                                            }(S.current, function(e) {
                                                var t = e.confetti,
                                                    n = t.previewPositionUpdate(o, c);
                                                return u(s, {
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
                    }, [o]),
                    I = i.useCallback(function(e) {
                        return A(e, {
                            clickHandler: l
                        })
                    }, [A, l]),
                    N = i.useCallback(function(e) {
                        return A(e, {
                            clickHandler: d
                        })
                    }, [A, d]),
                    T = i.useCallback(function(e) {
                        return A(e, {
                            mouseHandler: f
                        })
                    }, [A, f]),
                    L = i.useCallback(function(e) {
                        return A(e, {
                            mouseHandler: h
                        })
                    }, [A, h]);
                return i.useEffect(function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", I, l), e("mousedown", N, d), e("mousemove", T, f), e("mouseup", L, h),
                        function() {
                            window.removeEventListener("click", I), window.removeEventListener("mousedown", N), window.removeEventListener("mousemove", T), window.removeEventListener("mouseup", T)
                        }
                }, [I, N, T, L, l, d, f, h]), i.useEffect(function() {
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
                }, []), i.createElement("canvas", p({}, k, {
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
            var S = i.forwardRef(function(e, t) {
                var n, a = e.className,
                    u = e.visible,
                    l = void 0 !== u && u,
                    s = e.sprites,
                    c = e.colors,
                    d = e.spriteWidth,
                    f = e.spriteHeight,
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
                                spriteWidth: d,
                                spriteHeight: f
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
                }, [c, f, d]);
                var m = i.useCallback(function() {
                        var e = h.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height), p.current.forEach(function(e, n) {
                            var i = function(i, r) {
                                var a = d * r + 2 * r,
                                    o = f * n + 2 * n;
                                if (t.drawImage(e.image, a, o, d, f), null != i) {
                                    for (var u, l, s = t.getImageData(a, o, d, f), c = ("#" === (u = i)[0] && (u = u.slice(1)), {
                                            r: (l = parseInt(u, 16)) >> 16 & 255,
                                            g: l >> 8 & 255,
                                            b: 255 & l
                                        }), h = 0; h < s.data.length; h += 4) s.data[h] = c.r, s.data[h + 1] = c.g, s.data[h + 2] = c.b;
                                    t.putImageData(s, a, o)
                                }
                            };
                            e.colorize ? c.forEach(function(e, t) {
                                return i(e, t)
                            }) : i(null, 0)
                        }))
                    }, [c, f, d]),
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
                                    return function(l) {
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
                                                u = t.call(e, o)
                                            } catch (e) {
                                                u = [6, e], i = 0
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
                            }(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, w()];
                                    case 1:
                                        return e.sent(), m(), v.current = !0, g(!0), [2]
                                }
                            })
                        }, new(n || (n = Promise))(function(r, a) {
                            function o(e) {
                                try {
                                    l(i.next(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function u(e) {
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
                                })).then(o, u)
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
                    null != h.current && (h.current.width = (d + 2) * Math.max(c.length, 1), h.current.height = (f + 2) * s.length)
                }, [c.length, f, d, s.length]), i.createElement("canvas", {
                    ref: h,
                    className: o(a, ((n = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !l, n))
                })
            });

            function _(e, t) {
                var n, r = i.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
                    a = r[0],
                    o = r[1];
                i.useEffect(function() {
                    var e = null == t ? void 0 : t.addReadyListener(o);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }, [t]);
                var u = i.useCallback(function(n, i) {
                        var r = void 0 === i ? {} : i,
                            a = r.sprite,
                            o = r.color,
                            u = null == t ? void 0 : t.getCreateData(),
                            l = null == t ? void 0 : t.getCanvas();
                        if (null != l && null != u && 0 !== u.sprites.length) return null == e ? void 0 : e.createConfetti(n, l, u, a, o)
                    }, [e, t]),
                    l = i.useCallback(function(e, t, n) {
                        for (var i = [], r = 0; r < t; r++) {
                            var a = u(e, n);
                            a && i.push(a)
                        }
                        return i
                    }, [u]),
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
                        createConfetti: u,
                        createMultipleConfetti: l,
                        addConfetti: s,
                        clearConfetti: d,
                        deleteConfetti: c,
                        isReady: a && null != t && null != e
                    }
                }, [s, d, e, u, l, c, a, t])
            }
        },
        136759: function(e, t, n) {
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
                o = Object.prototype.propertyIsEnumerable,
                u = (e, t, n) => t in e ? i(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                l = (e, t) => {
                    for (var n in t || (t = {})) a.call(t, n) && u(e, n, t[n]);
                    if (r)
                        for (var n of r(t)) o.call(t, n) && u(e, n, t[n]);
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
                    let a, o, u = l({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: e => e,
                        version: 0,
                        merge: (e, t) => l(l({}, t), e)
                    }, t);
                    (u.blacklist || u.whitelist) && console.warn("The ".concat(u.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let c = !1,
                        d = new Set,
                        f = new Set;
                    try {
                        a = u.getStorage()
                    } catch (e) {}
                    if (!a) return e(function() {
                        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(u.name, "', the given storage is currently unavailable.")), n(...t)
                    }, i, r);
                    !a.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(u.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let h = s(u.serialize),
                        p = () => {
                            let e;
                            let t = u.partialize(l({}, i()));
                            u.whitelist && Object.keys(t).forEach(e => {
                                var n;
                                (null == (n = u.whitelist) ? void 0 : n.includes(e)) || delete t[e]
                            }), u.blacklist && u.blacklist.forEach(e => delete t[e]);
                            let n = h({
                                state: t,
                                version: u.version
                            }).then(e => a.setItem(u.name, e)).catch(t => {
                                e = t
                            });
                            if (e) throw e;
                            return n
                        },
                        v = r.setState;
                    r.setState = (e, t) => {
                        v(e, t), p()
                    };
                    let y = e(function() {
                            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                            n(...t), p()
                        }, i, r),
                        m = () => {
                            var e;
                            if (!a) return;
                            c = !1, d.forEach(e => e(i()));
                            let t = (null == (e = u.onRehydrateStorage) ? void 0 : e.call(u, i())) || void 0;
                            return s(a.getItem.bind(a))(u.name).then(e => {
                                if (e) return u.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === u.version) return e.state;
                                    if (u.migrate) return u.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(o = u.merge(e, null != (t = i()) ? t : y), !0), p()
                            }).then(() => {
                                null == t || t(o, void 0), c = !0, f.forEach(e => e(o))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return r.persist = {
                        setOptions: e => {
                            u = l(l({}, u), e), e.getStorage && (a = e.getStorage())
                        },
                        clearStorage: () => {
                            var e;
                            null == (e = null == a ? void 0 : a.removeItem) || e.call(a, u.name)
                        },
                        rehydrate: () => m(),
                        hasHydrated: () => c,
                        onHydrate: e => (d.add(e), () => {
                            d.delete(e)
                        }),
                        onFinishHydration: e => (f.add(e), () => {
                            f.delete(e)
                        })
                    }, m(), o || y
                }
        }
    }
]);
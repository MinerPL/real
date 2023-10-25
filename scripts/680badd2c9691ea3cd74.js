(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["81741"], {
        641900: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCanvas: function() {
                    return M
                },
                Environment: function() {
                    return d
                },
                SpriteCanvas: function() {
                    return R
                },
                useConfettiCannon: function() {
                    return N
                }
            });
            var i = n("773670"),
                r = n("462567"),
                a = n("575482"),
                u = n.n(a);

            function o(e, t) {
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
                        var n, i, r, a, u = e.wind * t,
                            o = -e.gravity * t;
                        return {
                            x: u + (n = this.dragCoefficient.x, n * (i = this.velocity.x) * i * (i > 0 ? -1 : 1)),
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
                            u = r.y;
                        i.x += a, i.y += u;
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
                f = function(e, t) {
                    return (f = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    })(e, t)
                };

            function p(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                f(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var h = function() {
                    return (h = Object.assign || function(e) {
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
                g = function(e) {
                    function t(t, n, i) {
                        var r = e.call(this, t, n) || this;
                        return r._z = i, r
                    }
                    return p(t, e), t.prototype.update = function(t) {
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
                m = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return p(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(v),
                x = function(e) {
                    function t(t, n) {
                        var i = e.call(this, t) || this;
                        return i.addValue = n, i
                    }
                    return p(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(v),
                w = function(e) {
                    function t(t, n, i, r, a, u) {
                        var o = e.call(this, t) || this;
                        o.min = n, o.max = i, o.duration = r;
                        var l = o.value / (o.max - o.min) * o.duration,
                            s = isNaN(l) ? 0 : l;
                        return o.timePassed = s < 0 ? o.duration - s : s, o.directionMultiplier = a, o.easingFunction = u, o
                    }
                    return p(t, e), t.prototype.update = function(e) {
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

            function C(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function E(e) {
                var t = Math.floor(C(0, e.length - 1));
                return [e[t], t]
            }

            function S(e, t) {
                return E([e, t])[0]
            }

            function b(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : e
            }

            function _(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e,
                    z: e
                } : e
            }

            function T(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = b(e.value);
                            return new y(new m(t.x), new m(t.y));
                        case "static-random":
                            var n = b(e.minValue),
                                i = b(e.maxValue);
                            return new y(new m(C(n.x, i.x)), new m(C(n.y, i.y)));
                        case "linear":
                            t = b(e.value);
                            var r = b(e.addValue);
                            return new y(new x(t.x, r.x), new x(t.y, r.y));
                        case "linear-random":
                            n = b(e.minValue), i = b(e.maxValue);
                            var a = b(e.minAddValue),
                                u = b(e.maxAddValue);
                            return new y(new x(C(n.x, i.x), C(a.x, u.x)), new x(C(n.y, i.y), C(a.x, u.x)));
                        case "oscillating":
                            t = b(e.value);
                            var o = b(e.start),
                                l = b(e.final),
                                s = b(e.duration),
                                c = b(e.direction);
                            return new y(new w(t.x, o.x, l.x, s.x, c.x, e.easingFunction), new w(t.y, o.y, l.y, s.x, c.y, e.easingFunction));
                        case "oscillating-random":
                            n = b(e.minValue), i = b(e.maxValue);
                            var d = b(e.minStart),
                                f = b(e.maxStart),
                                p = b(e.minFinal),
                                h = b(e.maxFinal),
                                v = b(e.minDuration),
                                g = b(e.maxDuration),
                                _ = b(e.minDirection),
                                T = b(e.maxDirection);
                            return new y(new w(C(n.x, i.x), C(d.x, f.x), C(p.x, h.x), C(v.x, g.x), S(_.x, T.x), E(e.easingFunctions)[0]), new w(C(n.y, i.y), C(d.y, f.y), C(p.y, h.y), C(v.y, g.y), S(_.y, T.y), E(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector2"
                }))
            }
            var M = i.forwardRef(function(e, t) {
                var a = e.className,
                    u = e.environment,
                    l = e.onClick,
                    d = e.onMouseDown,
                    f = e.onMouseMove,
                    p = e.onMouseUp,
                    v = e.onBeforeRender,
                    y = e.onAfterRender,
                    b = function(e, t) {
                        var n = {};
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (n[i] = e[i]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) 0 > t.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                        }
                        return n
                    }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    M = i.useRef(null),
                    R = i.useRef(new Map),
                    N = i.useRef(null),
                    P = i.useRef(0),
                    F = i.useRef(0),
                    D = i.useCallback(function() {
                        var e = M.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == v || v(t), R.current.forEach(function(n, i) {
                                    var r = n.confetti,
                                        a = n.spriteCanvas;
                                    r.update(u), r.draw(a, t), r.shouldDestroy(e, u) && R.current.delete(i)
                                }), null == y || y(t), R.current.size > 0 ? N.current = window.requestAnimationFrame(D) : (t.clearRect(0, 0, e.width, e.height), N.current = null);
                                var n = Date.now();
                                0 !== P.current && (F.current = 1e3 / (n - P.current)), P.current = n
                            }
                        }
                    }, [u, y, v]);
                i.useEffect(function() {
                    null != N.current && (window.cancelAnimationFrame(N.current), N.current = window.requestAnimationFrame(D))
                }, [D]);
                var I = i.useCallback(function(e, t) {
                        R.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == N.current && D()
                    }, [D]),
                    z = i.useCallback(function(e, t, n, i, a) {
                        var u, o, l, d, f, p, v, y, b, M, R, N, P, F, D, z = (u = null !== (D = e.id) && void 0 !== D ? D : (0, r.v4)(), o = e, l = n, d = i, f = a, y = T((v = (p = o, h(h({
                            id: u
                        }, c), p))).size), M = (b = function(e, t) {
                            if (null != e) {
                                var n = t.sprites.findIndex(function(t) {
                                    return "string" == typeof e ? t.src === e && t.colorize : t.src === e.src && t.colorize === e.colorize
                                });
                                if (-1 !== n) return [e, n]
                            }
                            return E(t.sprites)
                        }(d, l))[0], R = b[1], N = function(e, t, n) {
                            if (!("string" == typeof(i = e) || i.colorize)) return 0;
                            var i, r = null != t ? n.colors.findIndex(function(e) {
                                return e === t
                            }) : -1;
                            return -1 !== r ? r : Math.floor(C(0, n.colors.length - 1))
                        }(null != d ? d : M, f, l), new s({
                            id: u,
                            position: T(v.position),
                            velocity: T(v.velocity),
                            rotation: (P = v.rotation, function(e) {
                                switch (e.type) {
                                    case "static":
                                        var t = _(e.value);
                                        return new g(new m(t.x), new m(t.y), new m(t.z));
                                    case "static-random":
                                        var n = _(e.minValue),
                                            i = _(e.maxValue);
                                        return new g(new m(C(n.x, i.x)), new m(C(n.y, i.y)), new m(C(n.z, i.z)));
                                    case "linear":
                                        t = _(e.value);
                                        var r = _(e.addValue);
                                        return new g(new x(t.x, r.x), new x(t.y, r.y), new x(t.z, r.z));
                                    case "linear-random":
                                        n = _(e.minValue), i = _(e.maxValue);
                                        var a = _(e.minAddValue),
                                            u = _(e.maxAddValue);
                                        return new g(new x(C(n.x, i.x), C(a.x, u.x)), new x(C(n.y, i.y), C(a.y, u.y)), new x(C(n.z, i.z), C(a.z, u.z)));
                                    case "oscillating":
                                        t = _(e.value);
                                        var o = _(e.start),
                                            l = _(e.final),
                                            s = _(e.duration),
                                            c = _(e.direction);
                                        return new g(new w(t.x, o.x, l.x, s.x, c.x, e.easingFunction), new w(t.y, o.y, l.y, s.z, c.y, e.easingFunction), new w(t.z, o.z, l.z, s.z, c.z, e.easingFunction));
                                    case "oscillating-random":
                                        n = _(e.minValue), i = _(e.maxValue);
                                        var d = _(e.minStart),
                                            f = _(e.maxStart),
                                            p = _(e.minFinal),
                                            h = _(e.maxFinal),
                                            v = _(e.minDuration),
                                            y = _(e.maxDuration),
                                            b = _(e.minDirection),
                                            T = _(e.maxDirection);
                                        return new g(new w(C(n.x, i.x), C(d.x, f.x), C(p.x, h.x), C(v.x, y.x), S(b.x, T.x), E(e.easingFunctions)[0]), new w(C(n.y, i.y), C(d.y, f.y), C(p.y, h.y), C(v.y, y.y), S(b.y, T.y), E(e.easingFunctions)[0]), new w(C(n.z, i.z), C(d.z, f.z), C(p.z, h.z), C(v.z, y.z), S(b.z, T.z), E(e.easingFunctions)[0]))
                                }
                            }(h(h({}, P), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: T(v.dragCoefficient),
                            size: y,
                            opacity: (F = v.opacity, function(e) {
                                switch (e.type) {
                                    case "static":
                                        return new m(e.value);
                                    case "static-random":
                                        return new m(C(e.minValue, e.maxValue));
                                    case "linear":
                                        return new x(e.value, e.addValue);
                                    case "linear-random":
                                        return new x(C(e.minValue, e.maxValue), C(e.minAddValue, e.maxAddValue));
                                    case "oscillating":
                                        return new w(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                                    case "oscillating-random":
                                        return new w(C(e.minValue, e.maxValue), C(e.minStart, e.maxStart), C(e.minFinal, e.maxFinal), C(e.minDuration, e.maxDuration), S(e.minDirection, e.maxDirection), E(e.easingFunctions)[0])
                                }
                            }(h(h({}, F), {
                                valueType: "number"
                            }))),
                            spriteX: N * l.spriteWidth + 2 * N,
                            spriteY: R * l.spriteHeight + 2 * R,
                            spriteWidth: l.spriteWidth,
                            spriteHeight: l.spriteHeight
                        }));
                        return I(z, t), z
                    }, [I]),
                    V = i.useCallback(function(e) {
                        R.current.delete(e)
                    }, []),
                    U = i.useCallback(function() {
                        return R.current.clear()
                    }, []),
                    A = i.useCallback(function() {
                        return M.current
                    }, []);
                i.useImperativeHandle(t, function() {
                    return {
                        createConfetti: z,
                        addConfetti: I,
                        deleteConfetti: V,
                        clearConfetti: U,
                        getCanvas: A
                    }
                }, [z, I, V, U, A]);
                var k = i.useCallback(function(e, t) {
                        var n, i, r = t.clickHandler,
                            a = t.mouseHandler;
                        if (null != r || null != a) {
                            var l = null === (n = M.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != l) {
                                var s = function(e, t) {
                                    if (null == t) throw Error("element should not be null");
                                    var n = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - n.left,
                                        y: e.clientY - n.top
                                    }
                                }(e, M.current);
                                if (o(s, {
                                        x: l.left,
                                        y: l.top,
                                        width: l.width,
                                        height: l.height
                                    })) {
                                    if (null != a) return a(e);
                                    if (null != r) {
                                        var c = -1e3 / F.current * 2,
                                            d = function(e, t) {
                                                for (var n = 0, i = Array.from(e.values()); n < i.length; n++) {
                                                    var r = i[n];
                                                    if (null != r && t(r)) return r
                                                }
                                                return null
                                            }(R.current, function(e) {
                                                var t = e.confetti,
                                                    n = t.previewPositionUpdate(u, c);
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
                    }, [u]),
                    L = i.useCallback(function(e) {
                        return k(e, {
                            clickHandler: l
                        })
                    }, [k, l]),
                    O = i.useCallback(function(e) {
                        return k(e, {
                            clickHandler: d
                        })
                    }, [k, d]),
                    j = i.useCallback(function(e) {
                        return k(e, {
                            mouseHandler: f
                        })
                    }, [k, f]),
                    H = i.useCallback(function(e) {
                        return k(e, {
                            mouseHandler: p
                        })
                    }, [k, p]);
                return i.useEffect(function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", L, l), e("mousedown", O, d), e("mousemove", j, f), e("mouseup", H, p),
                        function() {
                            window.removeEventListener("click", L), window.removeEventListener("mousedown", O), window.removeEventListener("mousemove", j), window.removeEventListener("mouseup", j)
                        }
                }, [L, O, j, H, l, d, f, p]), i.useEffect(function() {
                    var e = M.current,
                        t = new ResizeObserver(function() {
                            ! function(e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        i = t.width,
                                        r = t.height;
                                    e.width = i * n.g.devicePixelRatio, e.height = r * n.g.devicePixelRatio
                                }
                            }(M.current)
                        });
                    return null != e && t.observe(e),
                        function() {
                            null != e && t.unobserve(e)
                        }
                }, []), i.createElement("canvas", h({}, b, {
                    className: a,
                    ref: M
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
            var R = i.forwardRef(function(e, t) {
                var n, a = e.className,
                    o = e.visible,
                    l = void 0 !== o && o,
                    s = e.sprites,
                    c = e.colors,
                    d = e.spriteWidth,
                    f = e.spriteHeight,
                    p = i.useRef(null),
                    h = i.useRef([]),
                    v = i.useRef(!1),
                    y = i.useRef({});
                i.useImperativeHandle(t, function() {
                    return {
                        getCanvas: function() {
                            return p.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: h.current,
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
                var g = i.useCallback(function() {
                        var e = p.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height), h.current.forEach(function(e, n) {
                            var i = function(i, r) {
                                var a = d * r + 2 * r,
                                    u = f * n + 2 * n;
                                if (t.drawImage(e.image, a, u, d, f), null != i) {
                                    for (var o, l, s = t.getImageData(a, u, d, f), c = ("#" === (o = i)[0] && (o = o.slice(1)), {
                                            r: (l = parseInt(o, 16)) >> 16 & 255,
                                            g: l >> 8 & 255,
                                            b: 255 & l
                                        }), p = 0; p < s.data.length; p += 4) s.data[p] = c.r, s.data[p + 1] = c.g, s.data[p + 2] = c.b;
                                    t.putImageData(s, a, u)
                                }
                            };
                            e.colorize ? c.forEach(function(e, t) {
                                return i(e, t)
                            }) : i(null, 0)
                        }))
                    }, [c, f, d]),
                    m = i.useCallback(function() {
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
                    x = i.useCallback(function(e) {
                        for (var t in y.current) y.current[t](e)
                    }, []),
                    w = i.useCallback(function() {
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
                                    next: o(0),
                                    throw: o(1),
                                    return: o(2)
                                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                                    return this
                                }), a;

                                function o(o) {
                                    return function(l) {
                                        return function(o) {
                                            if (n) throw TypeError("Generator is already executing.");
                                            for (; a && (a = 0, o[0] && (u = 0)), u;) try {
                                                if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                                                switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                                    case 0:
                                                    case 1:
                                                        r = o;
                                                        break;
                                                    case 4:
                                                        return u.label++, {
                                                            value: o[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        u.label++, i = o[1], o = [0];
                                                        continue;
                                                    case 7:
                                                        o = u.ops.pop(), u.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(r = (r = u.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                            u = 0;
                                                            continue
                                                        }
                                                        if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                            u.label = o[1];
                                                            break
                                                        }
                                                        if (6 === o[0] && u.label < r[1]) {
                                                            u.label = r[1], r = o;
                                                            break
                                                        }
                                                        if (r && u.label < r[2]) {
                                                            u.label = r[2], u.ops.push(o);
                                                            break
                                                        }
                                                        r[2] && u.ops.pop(), u.trys.pop();
                                                        continue
                                                }
                                                o = t.call(e, u)
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
                                        }([o, l])
                                    }
                                }
                            }(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, m()];
                                    case 1:
                                        return e.sent(), g(), v.current = !0, x(!0), [2]
                                }
                            })
                        }, new(n || (n = Promise))(function(r, a) {
                            function u(e) {
                                try {
                                    l(i.next(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function o(e) {
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
                                })).then(u, o)
                            }
                            l((i = i.apply(e, t || [])).next())
                        })
                    }, [x, m, g]);
                return i.useEffect(function() {
                    w()
                }, [w]), i.useEffect(function() {
                    return function() {
                        return x(!1)
                    }
                }, [x]), i.useEffect(function() {
                    null != p.current && (p.current.width = (d + 2) * Math.max(c.length, 1), p.current.height = (f + 2) * s.length)
                }, [c.length, f, d, s.length]), i.createElement("canvas", {
                    ref: p,
                    className: u(a, ((n = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !l, n))
                })
            });

            function N(e, t) {
                var n, r = i.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
                    a = r[0],
                    u = r[1];
                i.useEffect(function() {
                    var e = null == t ? void 0 : t.addReadyListener(u);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }, [t]);
                var o = i.useCallback(function(n, i) {
                        var r = void 0 === i ? {} : i,
                            a = r.sprite,
                            u = r.color,
                            o = null == t ? void 0 : t.getCreateData(),
                            l = null == t ? void 0 : t.getCanvas();
                        if (null != l && null != o && 0 !== o.sprites.length) return null == e ? void 0 : e.createConfetti(n, l, o, a, u)
                    }, [e, t]),
                    l = i.useCallback(function(e, t, n) {
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
                        createMultipleConfetti: l,
                        addConfetti: s,
                        clearConfetti: d,
                        deleteConfetti: c,
                        isReady: a && null != t && null != e
                    }
                }, [s, d, e, o, l, c, a, t])
            }
        },
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("575482"),
                a = n.n(r),
                u = n("498225"),
                o = n("77078"),
                l = n("102985"),
                s = n("79798"),
                c = n("754474"),
                d = n("158998"),
                f = n("782340"),
                p = n("685054");

            function h(e) {
                if (e.isSystemUser()) return c.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return c.BotTypes.AI;
                if (e.bot) return c.BotTypes.BOT;
                return null
            }
            let v = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: r,
                    botVerified: u,
                    discriminatorClass: l,
                    className: c,
                    usernameClass: d,
                    color: h,
                    botClass: v,
                    showStreamerModeTooltip: y
                } = e;
                return (0, i.jsxs)("div", {
                    className: a(p.info, c),
                    children: [(0, i.jsx)(o.Tooltip, {
                        text: f.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: y,
                        children: e => (0, i.jsx)("span", {
                            ...e,
                            className: a(p.username, d),
                            style: null != h ? {
                                color: h
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, i.jsx)("span", {
                        className: a(p.infoSpacing, l),
                        children: n
                    }) : void 0, null != r && (0, i.jsx)(s.default, {
                        type: r,
                        className: a(p.infoSpacing, v),
                        verified: u
                    })]
                })
            };
            var y = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: r,
                    forceUsername: a,
                    showAccountIdentifier: o,
                    overrideDiscriminator: s,
                    forcePomelo: f,
                    ...p
                } = e, y = (0, u.useStateFromStores)([l.default], () => l.default.hidePersonalInformation), g = y || t || n.isNonUserBot(), m = n.toString(), x = d.default.getName(n), w = a ? m : null != r ? r : x, C = n.isPomelo() || f;
                if (C || w !== m) {
                    let e = w === m && C && a ? d.default.getUserTag(n, {
                            forcePomelo: f
                        }) : w,
                        t = o && e !== "@".concat(m) ? d.default.getUserTag(n) : void 0;
                    return (0, i.jsx)(v, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: h(n),
                        showStreamerModeTooltip: y && e !== x,
                        ...p
                    })
                }
                return (0, i.jsx)(c.default, {
                    name: w,
                    botType: h(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: g || w !== m ? null : null != s ? s : n.discriminator,
                    ...p
                })
            }
        },
        15433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchDirectoryEntries: function() {
                    return s
                }
            });
            var i = n("858434"),
                r = n.n(i),
                a = n("990746"),
                u = n("913144"),
                o = n("730647"),
                l = n("49111");
            let s = r(async e => {
                try {
                    u.default.dispatch({
                        type: "EVENT_DIRECTORY_FETCH_START"
                    });
                    let t = await a.default.get({
                        url: l.Endpoints.DIRECTORY_CHANNEL_ENTRIES(e),
                        query: {
                            type: o.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT
                        }
                    });
                    u.default.dispatch({
                        type: "EVENT_DIRECTORY_FETCH_SUCCESS",
                        channelId: e,
                        entries: t.body
                    })
                } catch (e) {
                    u.default.dispatch({
                        type: "EVENT_DIRECTORY_FETCH_FAILURE"
                    })
                }
            }, 200)
        },
        334683: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("773670"),
                r = n("498225"),
                a = n("817963"),
                u = n("923959"),
                o = n("305961"),
                l = n("957255"),
                s = n("49111"),
                c = (e, t) => {
                    let n = (0, r.useStateFromStores)([o.default], () => o.default.getGuild(e), [e]),
                        {
                            canCreateGuildEvent: c
                        } = (0, a.useManageResourcePermissions)(n),
                        d = (0, r.useStateFromStores)([u.default], () => u.default.getChannels(e)[u.GUILD_VOCAL_CHANNELS_KEY], [e]),
                        f = i.useMemo(() => null != t ? d.filter(e => {
                            let {
                                channel: n
                            } = e;
                            return n.type === t
                        }) : d, [d, t]),
                        p = (0, r.useStateFromStores)([l.default], () => {
                            if (l.default.can(s.Permissions.ADMINISTRATOR, n) || c) return !0;
                            for (let {
                                    channel: e
                                }
                                of f) {
                                let {
                                    canCreateGuildEvent: t
                                } = (0, a.getManageResourcePermissions)(e);
                                if (t) return !0
                            }
                            return !1
                        }, [f, n, c]);
                    return p
                }
        },
        202358: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("498225"),
                r = n("567469"),
                a = n("998716"),
                u = n("834052"),
                o = n("42203"),
                l = n("305961");

            function s(e) {
                let {
                    id: t,
                    data: {
                        guild: n,
                        instance: s,
                        speakers: c,
                        participantCount: d
                    },
                    context: f
                } = e, p = (0, i.useStateFromStores)([l.default, o.default], () => {
                    var e;
                    return l.default.getGuild(null === (e = o.default.getChannel(t)) || void 0 === e ? void 0 : e.getGuildId())
                }, [t]), h = (0, i.useStateFromStores)([u.default], () => u.default.getStageInstanceByChannel(t), [t]), v = (0, r.useStageParticipants)(t, a.StageChannelParticipantNamedIndex.SPEAKER), y = (0, r.useStageParticipantsCount)(t), g = null != h ? v : c, m = (null != h ? y : d) - g.length;
                return {
                    channelId: t,
                    guild: null != p ? p : n,
                    stage: null != h ? h : s,
                    speakers: g,
                    audienceCount: m,
                    context: f
                }
            }
        },
        473031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("498225"),
                a = n("922770"),
                u = n("267567"),
                o = n("998716"),
                l = n("834052"),
                s = n("42203"),
                c = n("957255"),
                d = n("945956"),
                f = n("697218"),
                p = n("189007"),
                h = n("398604"),
                v = n("152475"),
                y = n("202358"),
                g = n("598639"),
                m = n("189443"),
                x = n("841363"),
                w = n("93550"),
                C = n("617347"),
                E = n("369404"),
                S = n("49111");

            function b(e) {
                var t;
                let {
                    guildEvent: n,
                    guildId: b,
                    truncate: _,
                    onActionTaken: T,
                    className: M,
                    isNew: R
                } = e, {
                    id: N,
                    guild_id: P,
                    channel_id: F,
                    creator_id: D,
                    name: I,
                    description: z,
                    entity_type: V,
                    image: U,
                    recurrence_rule: A
                } = n, k = (0, r.useStateFromStores)([h.default], () => h.default.hasRsvp(N, P), [N, P]), L = (0, r.useStateFromStores)([u.default], () => u.default.isLurking(P), [P]), O = (0, r.useStateFromStores)([l.default], () => l.default.getStageInstanceByChannel(F), [F]), j = (0, r.useStateFromStores)([s.default], () => s.default.getChannel(F), [F]), H = (0, r.useStateFromStores)([f.default], () => f.default.getUser(D), [D]), {
                    speakers: G
                } = (0, y.default)({
                    id: F,
                    data: {
                        guild: null,
                        instance: O,
                        speakers: [],
                        participantCount: 0
                    },
                    context: {
                        guildId: P,
                        instance: O
                    }
                }), B = (0, r.useStateFromStores)([d.default], () => d.default.getChannelId()), Y = (0, h.isGuildScheduledEventActive)(n), q = B === F && null != B && Y, W = G.filter(e => e.type === o.StageChannelParticipantTypes.VOICE), X = W.length, K = (0, r.useStateFromStores)([c.default], () => c.default.can(S.Permissions.CONNECT, j), [j]), Q = (0, v.default)(n), {
                    isMember: J,
                    guild: Z
                } = (0, g.default)(P, N), $ = (0, E.default)({
                    guild: Z,
                    channel: j,
                    guildScheduledEvent: n,
                    isActive: Y,
                    rsvped: k,
                    onActionTaken: T
                }), ee = (0, a.default)(b), et = L ? void 0 : e => (0, p.openGuildEventDetails)({
                    eventId: N,
                    parentGuildId: b,
                    recurrenceId: e
                });
                return (0, i.jsx)(C.default, {
                    guild: Z,
                    channel: j,
                    creator: H,
                    name: I,
                    entityType: V,
                    description: null != z ? z : void 0,
                    location: null !== (t = (0, x.getLocationFromEvent)(n)) && void 0 !== t ? t : void 0,
                    imageSource: null != U ? (0, w.default)(n) : void 0,
                    imageLocation: C.GuildEventBodyImageLocation.THUMBNAIL,
                    isActive: Y,
                    isUserLurking: L,
                    isJoined: q,
                    isMember: J,
                    isHub: ee,
                    speakers: W,
                    canConnect: K,
                    speakerCount: X,
                    rsvped: k,
                    canInvite: Q,
                    ...$,
                    className: M,
                    onClick: et,
                    truncate: _,
                    isNew: R,
                    guildEventId: N,
                    recurrenceRule: (0, m.recurrenceRuleFromServer)(A)
                })
            }
        },
        558286: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildEventModalStore: function() {
                    return r
                }
            });
            var i = n("710835");
            let r = (0, i.default)(e => ({
                canCloseModal: !0,
                onUpdateCanCloseModal(t) {
                    e({
                        canCloseModal: t
                    })
                }
            }))
        },
        659707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("920040"),
                r = n("773670"),
                a = n("427964"),
                u = n.n(a),
                o = n("500947"),
                l = n("498225"),
                s = n("77078"),
                c = n("267363"),
                d = n("15433"),
                f = n("27978"),
                p = n("923959"),
                h = n("124948"),
                v = n("305961"),
                y = n("660478"),
                g = n("476765"),
                m = n("943232"),
                x = n("945330"),
                w = n("599110"),
                C = n("449008"),
                E = n("933326"),
                S = n("334683"),
                b = n("534222"),
                _ = n("473031"),
                T = n("266763"),
                M = n("842672"),
                R = n("745049"),
                N = n("49111"),
                P = n("133335"),
                F = n("782340"),
                D = n("409998");

            function I(e) {
                let {
                    transitionState: t,
                    onClose: a,
                    guildId: I
                } = e, z = (0, g.useUID)(), V = (0, l.useStateFromStores)([v.default], () => v.default.getGuild(I)), U = (0, S.default)(null == V ? void 0 : V.id), A = (0, b.default)(I), k = r.useRef(y.default.ackMessageId(I, P.ReadStateTypes.GUILD_EVENT)), L = (0, M.default)();
                return r.useEffect(() => {
                    E.default.getGuildEventUserCounts(I), E.default.getGuildEventsForCurrentUser(I)
                }, [I]), r.useEffect(() => {
                    let e = v.default.getGuild(I);
                    if (!(null == e ? void 0 : e.hasFeature(N.GuildFeatures.HUB))) return;
                    let {
                        showHubEventsList: t
                    } = f.default.getCurrentConfig({
                        guildId: I,
                        location: "d3755f_1"
                    });
                    if (!t) return;
                    let n = p.default.getDefaultChannel(I);
                    null != n && d.fetchDirectoryEntries(n.id)
                }, [I]), r.useEffect(() => {
                    w.default.track(N.AnalyticEvents.OPEN_MODAL, {
                        type: R.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
                        guild_id: I,
                        guild_events_count: A.length
                    })
                }, []), r.useEffect(() => {
                    u(A).map(e => e.creator_id).filter(C.isNotNullish).uniq().forEach(e => {
                        h.default.requestMember(I, e)
                    })
                }, [I, A]), r.useEffect(() => {
                    null != I && (0, c.ackGuildFeature)(I, P.ReadStateTypes.GUILD_EVENT)
                }, [I]), (0, i.jsxs)(s.ModalRoot, {
                    size: s.ModalSize.MEDIUM,
                    transitionState: t,
                    "aria-labelledby": z,
                    children: [(0, i.jsxs)(s.ModalHeader, {
                        className: D.header,
                        children: [(0, i.jsx)(m.default, {
                            className: D.icon
                        }), (0, i.jsx)(s.Heading, {
                            id: z,
                            variant: "heading-md/semibold",
                            children: A.length > 0 ? F.default.Messages.GUILD_EVENTS_PLURAL.format({
                                number: A.length
                            }) : F.default.Messages.GUILD_EVENTS
                        }), U && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: D.divider,
                                children: "|"
                            }), (0, i.jsx)(s.Button, {
                                size: s.Button.Sizes.MIN,
                                onClick: () => {
                                    (0, s.openModalLazy)(async () => {
                                        let {
                                            default: e
                                        } = await n.el("590942").then(n.bind(n, "590942"));
                                        return t => (0, i.jsx)(e, {
                                            ...t,
                                            guildId: I
                                        })
                                    }, L)
                                },
                                innerClassName: D.button,
                                children: F.default.Messages.SCHEDULE_EVENT
                            })]
                        }), (0, i.jsx)(s.Clickable, {
                            onClick: a,
                            className: D.iconButton,
                            "aria-label": F.default.Messages.CLOSE,
                            children: (0, i.jsx)(x.default, {
                                className: D.icon
                            })
                        })]
                    }), (0, i.jsx)(s.ModalContent, {
                        className: D.content,
                        children: A.length > 0 ? A.map(e => (0, i.jsx)(_.default, {
                            guildEvent: e,
                            guildId: I,
                            onActionTaken: a,
                            isNew: null != k.current && o.default.compare(e.id, k.current) > 0
                        }, e.id)) : (0, i.jsx)(T.default, {
                            guildId: I,
                            onClose: a
                        })
                    })]
                })
            }
        },
        266763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("498225"),
                a = n("77078"),
                u = n("592407"),
                o = n("27978"),
                l = n("119184"),
                s = n("305961"),
                c = n("957255"),
                d = n("943232"),
                f = n("49111"),
                p = n("782340"),
                h = n("919026");

            function v(e) {
                let {
                    guildId: t,
                    onClose: n
                } = e, {
                    showHubEventsList: v
                } = o.default.useExperiment({
                    guildId: t,
                    location: "6597ca_1"
                }, {
                    autoTrackExposure: !1
                }), y = (0, r.useStateFromStores)([s.default, c.default], () => {
                    let e = s.default.getGuild(t);
                    return c.default.can(f.Permissions.MANAGE_ROLES, e)
                }, [t]), g = (0, r.useStateFromStores)([s.default], () => {
                    let e = s.default.getGuild(t);
                    return v && (null == e ? void 0 : e.hasFeature(f.GuildFeatures.HUB))
                }, [t, v]);
                return (0, i.jsxs)("div", {
                    className: h.container,
                    children: [(0, i.jsx)(l.default, {
                        children: (0, i.jsx)("div", {
                            className: h.circle,
                            children: (0, i.jsx)(d.default, {
                                height: 40,
                                width: 40,
                                className: h.icon
                            })
                        })
                    }), (0, i.jsx)(a.Heading, {
                        color: "header-primary",
                        variant: "heading-xl/semibold",
                        className: h.title,
                        children: g ? p.default.Messages.HUB_EVENTS_HEADER_TITLE : p.default.Messages.GUILD_EVENT_MODAL_EMPTY_TITLE
                    }), (0, i.jsx)(a.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: h.subtitle,
                        children: g ? p.default.Messages.HUB_EVENTS_HEADER_DESCRIPTION : p.default.Messages.GUILD_EVENT_MODAL_EMPTY_SUBTITLE
                    }), y && (0, i.jsx)(a.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: h.roleTip,
                        children: p.default.Messages.GUILD_EVENT_ROLE_TIP.format({
                            onClick: () => {
                                u.default.open(t, f.GuildSettingsSections.ROLES), n()
                            }
                        })
                    })]
                })
            }
        },
        842672: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("77078"),
                r = n("244201"),
                a = n("558286"),
                u = n("49111");
            let o = "guild-event-modal";
            var l = () => {
                let e = (0, r.useAppContext)(),
                    t = e === u.AppContext.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: o,
                    contextKey: t,
                    onCloseRequest: () => {
                        a.useGuildEventModalStore.getState().canCloseModal && (0, i.closeModal)(o, t)
                    }
                }
            }
        },
        27978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "guild",
                id: "2021-11_hub_events",
                label: "Hub Events",
                defaultConfig: {
                    showHubEventsList: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show Hub Events List",
                    config: {
                        showHubEventsList: !0
                    }
                }]
            })
        },
        567469: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useStageParticipants: function() {
                    return o
                },
                useStageParticipantsCount: function() {
                    return l
                },
                useSortedRequestToSpeakParticipants: function() {
                    return s
                },
                useActualStageSpeakerCount: function() {
                    return c
                }
            });
            var i = n("498225"),
                r = n("334572"),
                a = n("488464"),
                u = n("998716");

            function o(e, t) {
                let [n] = (0, i.useStateFromStores)([a.default], () => [a.default.getMutableParticipants(e, t), a.default.getParticipantsVersion(e)], [e, t], r.isVersionEqual);
                return n
            }

            function l(e, t) {
                return (0, i.useStateFromStores)([a.default], () => a.default.getParticipantCount(e, t), [e, t])
            }

            function s(e) {
                let [t] = (0, i.useStateFromStores)([a.default], () => {
                    let t = a.default.getMutableRequestToSpeakParticipants(e);
                    return [t, a.default.getRequestToSpeakParticipantsVersion(e)]
                }, [e], r.isVersionEqual);
                return t
            }

            function c(e) {
                return (0, i.useStateFromStores)([a.default], () => {
                    let t = a.default.getMutableParticipants(e, u.StageChannelParticipantNamedIndex.SPEAKER),
                        n = t.filter(e => e.type === u.StageChannelParticipantTypes.VOICE);
                    return n.length
                }, [e])
            }
        },
        506885: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("913144"),
                r = n("327037"),
                a = n("462274"),
                u = n("535013"),
                o = n("42203"),
                l = n("26989"),
                s = n("713135"),
                c = n("386714");
            async function d(e, t) {
                var n, d, f;
                let p, {
                    withMutualGuilds: h = !1,
                    withMutualFriendsCount: v = !1,
                    friendToken: y,
                    preloadUserBanner: g = !0,
                    dispatchWait: m = !1,
                    guildId: x,
                    channelId: w
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                null != t && (0, a.maybeFetchColors)(t), null != x && !h && (h = !0), null != x && (p = null !== (d = null === (n = (0, u.getVisibleConnectionsRole)({
                    guildMember: l.default.getMember(x, e),
                    channel: o.default.getChannel(w)
                })) || void 0 === n ? void 0 : n.id) && void 0 !== d ? d : void 0);
                let C = s.default.getUserProfile(e),
                    E = s.default.getMutualGuilds(e),
                    S = s.default.getMutualFriendsCount(e),
                    b = s.default.isFetchingProfile(e),
                    _ = (null == C ? void 0 : C.profileFetchFailed) || !b && (!Array.isArray(E) && h || null == S && v),
                    T = g ? c.default : void 0,
                    M = !1;
                if (null != x) {
                    let t = s.default.getGuildMemberProfile(e, x);
                    M = null == t
                }
                if (!_ && !M && (b || Date.now() - (null !== (f = null == C ? void 0 : C.lastFetched) && void 0 !== f ? f : 0) < 6e4)) return Promise.resolve();
                m ? await i.default.wait(() => (0, r.fetchProfile)(e, {
                    withMutualGuilds: h,
                    withMutualFriendsCount: v,
                    friendToken: y,
                    guildId: x,
                    connectionsRoleId: p
                }, T)) : await (0, r.fetchProfile)(e, {
                    withMutualGuilds: h,
                    withMutualFriendsCount: v,
                    friendToken: y,
                    guildId: x,
                    connectionsRoleId: p
                }, T)
            }
        },
        386714: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("845579"),
                r = n("217513");

            function a(e, t) {
                if ("undefined" == typeof Image) return;
                let n = (0, r.getDisplayProfile)(e.user.id, t);
                if (null == n) return;
                let a = i.GifAutoPlay.getSetting(),
                    u = n.getBannerURL({
                        canAnimate: a,
                        size: 480
                    });
                if (null == u) return;
                let o = new Image;
                o.src = u
            }
        },
        754474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return o.BotTagTypes
                },
                default: function() {
                    return s
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("575482"),
                a = n.n(r),
                u = n("79798"),
                o = n("988268"),
                l = n("93888"),
                s = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: r,
                        nameColor: o,
                        className: s,
                        botType: c,
                        usernameClass: d,
                        discriminatorClass: f,
                        botClass: p,
                        botVerified: h = !1,
                        style: v,
                        useRemSizes: y = !1,
                        usernameIcon: g
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: a(s, l.nameTag),
                        style: v,
                        children: [(0, i.jsxs)("span", {
                            className: a(l.username, d),
                            style: null != o ? {
                                color: o
                            } : void 0,
                            children: [g, t]
                        }), null != n ? (0, i.jsxs)("span", {
                            className: null != f ? f : void 0,
                            children: ["#", n]
                        }) : null, null != c ? (0, i.jsx)(u.default, {
                            type: c,
                            invertColor: r,
                            className: a(p, l.bot),
                            verified: h,
                            useRemSizes: y
                        }) : null]
                    })
                }
        },
        334572: function(e, t, n) {
            "use strict";

            function i(e, t) {
                let [, n] = e, [, i] = t;
                return n === i
            }
            n.r(t), n.d(t, {
                isVersionEqual: function() {
                    return i
                }
            })
        }
    }
]);
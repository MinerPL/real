(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["17307"], {
        516555: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCanvas: function() {
                    return z
                },
                Environment: function() {
                    return d
                },
                SpriteCanvas: function() {
                    return M
                },
                useConfettiCannon: function() {
                    return H
                }
            });
            var i = n("884691"),
                r = n("748820"),
                a = n("414456"),
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
                C = function(e) {
                    this.value = e
                },
                v = function() {
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
                y = function(e) {
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
                }(v),
                m = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return h(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(C),
                x = function(e) {
                    function t(t, n) {
                        var i = e.call(this, t) || this;
                        return i.addValue = n, i
                    }
                    return h(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(C),
                w = function(e) {
                    function t(t, n, i, r, a, u) {
                        var o = e.call(this, t) || this;
                        o.min = n, o.max = i, o.duration = r;
                        var l = o.value / (o.max - o.min) * o.duration,
                            s = isNaN(l) ? 0 : l;
                        return o.timePassed = s < 0 ? o.duration - s : s, o.directionMultiplier = a, o.easingFunction = u, o
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
                }(C);

            function g(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function b(e) {
                var t = Math.floor(g(0, e.length - 1));
                return [e[t], t]
            }

            function L(e, t) {
                return b([e, t])[0]
            }

            function S(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : e
            }

            function E(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e,
                    z: e
                } : e
            }

            function P(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = S(e.value);
                            return new v(new m(t.x), new m(t.y));
                        case "static-random":
                            var n = S(e.minValue),
                                i = S(e.maxValue);
                            return new v(new m(g(n.x, i.x)), new m(g(n.y, i.y)));
                        case "linear":
                            t = S(e.value);
                            var r = S(e.addValue);
                            return new v(new x(t.x, r.x), new x(t.y, r.y));
                        case "linear-random":
                            n = S(e.minValue), i = S(e.maxValue);
                            var a = S(e.minAddValue),
                                u = S(e.maxAddValue);
                            return new v(new x(g(n.x, i.x), g(a.x, u.x)), new x(g(n.y, i.y), g(a.x, u.x)));
                        case "oscillating":
                            t = S(e.value);
                            var o = S(e.start),
                                l = S(e.final),
                                s = S(e.duration),
                                c = S(e.direction);
                            return new v(new w(t.x, o.x, l.x, s.x, c.x, e.easingFunction), new w(t.y, o.y, l.y, s.x, c.y, e.easingFunction));
                        case "oscillating-random":
                            n = S(e.minValue), i = S(e.maxValue);
                            var d = S(e.minStart),
                                f = S(e.maxStart),
                                h = S(e.minFinal),
                                p = S(e.maxFinal),
                                C = S(e.minDuration),
                                y = S(e.maxDuration),
                                E = S(e.minDirection),
                                P = S(e.maxDirection);
                            return new v(new w(g(n.x, i.x), g(d.x, f.x), g(h.x, p.x), g(C.x, y.x), L(E.x, P.x), b(e.easingFunctions)[0]), new w(g(n.y, i.y), g(d.y, f.y), g(h.y, p.y), g(C.y, y.y), L(E.y, P.y), b(e.easingFunctions)[0]))
                    }
                }(p(p({}, e), {
                    valueType: "Vector2"
                }))
            }
            var z = i.forwardRef(function(e, t) {
                var a = e.className,
                    u = e.environment,
                    l = e.onClick,
                    d = e.onMouseDown,
                    f = e.onMouseMove,
                    h = e.onMouseUp,
                    C = e.onBeforeRender,
                    v = e.onAfterRender,
                    S = function(e, t) {
                        var n = {};
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (n[i] = e[i]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) 0 > t.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                        }
                        return n
                    }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    z = i.useRef(null),
                    M = i.useRef(new Map),
                    H = i.useRef(null),
                    R = i.useRef(0),
                    k = i.useRef(0),
                    D = i.useCallback(function() {
                        var e = z.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == C || C(t), M.current.forEach(function(n, i) {
                                    var r = n.confetti,
                                        a = n.spriteCanvas;
                                    r.update(u), r.draw(a, t), r.shouldDestroy(e, u) && M.current.delete(i)
                                }), null == v || v(t), M.current.size > 0 ? H.current = window.requestAnimationFrame(D) : (t.clearRect(0, 0, e.width, e.height), H.current = null);
                                var n = Date.now();
                                0 !== R.current && (k.current = 1e3 / (n - R.current)), R.current = n
                            }
                        }
                    }, [u, v, C]);
                i.useEffect(function() {
                    null != H.current && (window.cancelAnimationFrame(H.current), H.current = window.requestAnimationFrame(D))
                }, [D]);
                var F = i.useCallback(function(e, t) {
                        M.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == H.current && D()
                    }, [D]),
                    O = i.useCallback(function(e, t, n, i, a) {
                        var u, o, l, d, f, h, C, v, S, z, M, H, R, k, D, O = (u = null !== (D = e.id) && void 0 !== D ? D : (0, r.v4)(), o = e, l = n, d = i, f = a, v = P((C = (h = o, p(p({
                            id: u
                        }, c), h))).size), z = (S = function(e, t) {
                            if (null != e) {
                                var n = t.sprites.findIndex(function(t) {
                                    return "string" == typeof e ? t.src === e && t.colorize : t.src === e.src && t.colorize === e.colorize
                                });
                                if (-1 !== n) return [e, n]
                            }
                            return b(t.sprites)
                        }(d, l))[0], M = S[1], H = function(e, t, n) {
                            if (!("string" == typeof(i = e) || i.colorize)) return 0;
                            var i, r = null != t ? n.colors.findIndex(function(e) {
                                return e === t
                            }) : -1;
                            return -1 !== r ? r : Math.floor(g(0, n.colors.length - 1))
                        }(null != d ? d : z, f, l), new s({
                            id: u,
                            position: P(C.position),
                            velocity: P(C.velocity),
                            rotation: (R = C.rotation, function(e) {
                                switch (e.type) {
                                    case "static":
                                        var t = E(e.value);
                                        return new y(new m(t.x), new m(t.y), new m(t.z));
                                    case "static-random":
                                        var n = E(e.minValue),
                                            i = E(e.maxValue);
                                        return new y(new m(g(n.x, i.x)), new m(g(n.y, i.y)), new m(g(n.z, i.z)));
                                    case "linear":
                                        t = E(e.value);
                                        var r = E(e.addValue);
                                        return new y(new x(t.x, r.x), new x(t.y, r.y), new x(t.z, r.z));
                                    case "linear-random":
                                        n = E(e.minValue), i = E(e.maxValue);
                                        var a = E(e.minAddValue),
                                            u = E(e.maxAddValue);
                                        return new y(new x(g(n.x, i.x), g(a.x, u.x)), new x(g(n.y, i.y), g(a.y, u.y)), new x(g(n.z, i.z), g(a.z, u.z)));
                                    case "oscillating":
                                        t = E(e.value);
                                        var o = E(e.start),
                                            l = E(e.final),
                                            s = E(e.duration),
                                            c = E(e.direction);
                                        return new y(new w(t.x, o.x, l.x, s.x, c.x, e.easingFunction), new w(t.y, o.y, l.y, s.z, c.y, e.easingFunction), new w(t.z, o.z, l.z, s.z, c.z, e.easingFunction));
                                    case "oscillating-random":
                                        n = E(e.minValue), i = E(e.maxValue);
                                        var d = E(e.minStart),
                                            f = E(e.maxStart),
                                            h = E(e.minFinal),
                                            p = E(e.maxFinal),
                                            C = E(e.minDuration),
                                            v = E(e.maxDuration),
                                            S = E(e.minDirection),
                                            P = E(e.maxDirection);
                                        return new y(new w(g(n.x, i.x), g(d.x, f.x), g(h.x, p.x), g(C.x, v.x), L(S.x, P.x), b(e.easingFunctions)[0]), new w(g(n.y, i.y), g(d.y, f.y), g(h.y, p.y), g(C.y, v.y), L(S.y, P.y), b(e.easingFunctions)[0]), new w(g(n.z, i.z), g(d.z, f.z), g(h.z, p.z), g(C.z, v.z), L(S.z, P.z), b(e.easingFunctions)[0]))
                                }
                            }(p(p({}, R), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: P(C.dragCoefficient),
                            size: v,
                            opacity: (k = C.opacity, function(e) {
                                switch (e.type) {
                                    case "static":
                                        return new m(e.value);
                                    case "static-random":
                                        return new m(g(e.minValue, e.maxValue));
                                    case "linear":
                                        return new x(e.value, e.addValue);
                                    case "linear-random":
                                        return new x(g(e.minValue, e.maxValue), g(e.minAddValue, e.maxAddValue));
                                    case "oscillating":
                                        return new w(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                                    case "oscillating-random":
                                        return new w(g(e.minValue, e.maxValue), g(e.minStart, e.maxStart), g(e.minFinal, e.maxFinal), g(e.minDuration, e.maxDuration), L(e.minDirection, e.maxDirection), b(e.easingFunctions)[0])
                                }
                            }(p(p({}, k), {
                                valueType: "number"
                            }))),
                            spriteX: H * l.spriteWidth + 2 * H,
                            spriteY: M * l.spriteHeight + 2 * M,
                            spriteWidth: l.spriteWidth,
                            spriteHeight: l.spriteHeight
                        }));
                        return F(O, t), O
                    }, [F]),
                    _ = i.useCallback(function(e) {
                        M.current.delete(e)
                    }, []),
                    V = i.useCallback(function() {
                        return M.current.clear()
                    }, []),
                    j = i.useCallback(function() {
                        return z.current
                    }, []);
                i.useImperativeHandle(t, function() {
                    return {
                        createConfetti: O,
                        addConfetti: F,
                        deleteConfetti: _,
                        clearConfetti: V,
                        getCanvas: j
                    }
                }, [O, F, _, V, j]);
                var A = i.useCallback(function(e, t) {
                        var n, i, r = t.clickHandler,
                            a = t.mouseHandler;
                        if (null != r || null != a) {
                            var l = null === (n = z.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != l) {
                                var s = function(e, t) {
                                    if (null == t) throw Error("element should not be null");
                                    var n = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - n.left,
                                        y: e.clientY - n.top
                                    }
                                }(e, z.current);
                                if (o(s, {
                                        x: l.left,
                                        y: l.top,
                                        width: l.width,
                                        height: l.height
                                    })) {
                                    if (null != a) return a(e);
                                    if (null != r) {
                                        var c = -1e3 / k.current * 2,
                                            d = function(e, t) {
                                                for (var n = 0, i = Array.from(e.values()); n < i.length; n++) {
                                                    var r = i[n];
                                                    if (null != r && t(r)) return r
                                                }
                                                return null
                                            }(M.current, function(e) {
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
                    U = i.useCallback(function(e) {
                        return A(e, {
                            clickHandler: l
                        })
                    }, [A, l]),
                    I = i.useCallback(function(e) {
                        return A(e, {
                            clickHandler: d
                        })
                    }, [A, d]),
                    N = i.useCallback(function(e) {
                        return A(e, {
                            mouseHandler: f
                        })
                    }, [A, f]),
                    G = i.useCallback(function(e) {
                        return A(e, {
                            mouseHandler: h
                        })
                    }, [A, h]);
                return i.useEffect(function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", U, l), e("mousedown", I, d), e("mousemove", N, f), e("mouseup", G, h),
                        function() {
                            window.removeEventListener("click", U), window.removeEventListener("mousedown", I), window.removeEventListener("mousemove", N), window.removeEventListener("mouseup", N)
                        }
                }, [U, I, N, G, l, d, f, h]), i.useEffect(function() {
                    var e = z.current,
                        t = new ResizeObserver(function() {
                            ! function(e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        i = t.width,
                                        r = t.height;
                                    e.width = i * n.g.devicePixelRatio, e.height = r * n.g.devicePixelRatio
                                }
                            }(z.current)
                        });
                    return null != e && t.observe(e),
                        function() {
                            null != e && t.unobserve(e)
                        }
                }, []), i.createElement("canvas", p({}, S, {
                    className: a,
                    ref: z
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
            var M = i.forwardRef(function(e, t) {
                var n, a = e.className,
                    o = e.visible,
                    l = void 0 !== o && o,
                    s = e.sprites,
                    c = e.colors,
                    d = e.spriteWidth,
                    f = e.spriteHeight,
                    h = i.useRef(null),
                    p = i.useRef([]),
                    C = i.useRef(!1),
                    v = i.useRef({});
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
                            return v.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete v.current[e]
                        },
                        isReady: C.current
                    }
                }, [c, f, d]);
                var y = i.useCallback(function() {
                        var e = h.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height), p.current.forEach(function(e, n) {
                            var i = function(i, r) {
                                var a = d * r + 2 * r,
                                    u = f * n + 2 * n;
                                if (t.drawImage(e.image, a, u, d, f), null != i) {
                                    for (var o, l, s = t.getImageData(a, u, d, f), c = ("#" === (o = i)[0] && (o = o.slice(1)), {
                                            r: (l = parseInt(o, 16)) >> 16 & 255,
                                            g: l >> 8 & 255,
                                            b: 255 & l
                                        }), h = 0; h < s.data.length; h += 4) s.data[h] = c.r, s.data[h + 1] = c.g, s.data[h + 2] = c.b;
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
                            p.current = e.map(function(e) {
                                return {
                                    colorize: e.colorize,
                                    image: e.image,
                                    src: e.src
                                }
                            })
                        })
                    }, [s]),
                    x = i.useCallback(function(e) {
                        for (var t in v.current) v.current[t](e)
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
                                        return e.sent(), y(), C.current = !0, x(!0), [2]
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
                    }, [x, m, y]);
                return i.useEffect(function() {
                    w()
                }, [w]), i.useEffect(function() {
                    return function() {
                        return x(!1)
                    }
                }, [x]), i.useEffect(function() {
                    null != h.current && (h.current.width = (d + 2) * Math.max(c.length, 1), h.current.height = (f + 2) * s.length)
                }, [c.length, f, d, s.length]), i.createElement("canvas", {
                    ref: h,
                    className: u(a, ((n = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !l, n))
                })
            });

            function H(e, t) {
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
        315147: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3808a69f670fa9a67284.svg"
        },
        452113: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("850068"),
                a = n("524503"),
                u = n("393414"),
                o = n("162771"),
                l = n("642906"),
                s = n("385179"),
                c = n("49111");

            function d(e) {
                let {
                    onClose: t,
                    initialPlanId: n,
                    analyticsObject: d,
                    analyticsLocation: f,
                    analyticsLocations: h,
                    analyticsSubscriptionType: p,
                    renderHeader: C,
                    planGroup: v,
                    reviewWarningMessage: y,
                    applicationId: m,
                    guildId: x,
                    onComplete: w,
                    forcesTransitionToGuild: g,
                    skuId: b,
                    ...L
                } = e, {
                    subscriptionMetadataRequest: S
                } = (0, l.usePaymentContext)();
                return (0, i.jsx)(s.PaymentModal, {
                    ...L,
                    initialPlanId: n,
                    skuId: b,
                    onClose: e => {
                        t();
                        let n = null == S ? void 0 : S.guild_id;
                        e && null != n && (r.fetchSubscriptions(), (0, a.fetchEntitlementsForGuild)(n), null == w || w(), null != n && (g || o.default.getGuildId() !== n) && (0, u.transitionTo)(c.Routes.CHANNEL(n)))
                    },
                    analyticsLocations: h,
                    analyticsObject: d,
                    analyticsLocation: f,
                    analyticsSubscriptionType: p,
                    renderHeader: C,
                    planGroup: v,
                    reviewWarningMessage: y,
                    applicationId: m,
                    guildId: x,
                    forceNewPaymentModal: !0
                })
            }
        },
        210721: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnimationState: function() {
                    return r
                },
                getGiftAnimationData: function() {
                    return h
                },
                sendGiftMessage: function() {
                    return p
                }
            });
            var i, r, a = n("627445"),
                u = n.n(a),
                o = n("450911"),
                l = n("819689"),
                s = n("884351"),
                c = n("42203"),
                d = n("659632"),
                f = n("78345");
            (i = r || (r = {})).ACTION = "action", i.LOOP = "loop", i.IDLE = "idle";
            let h = (e, t) => {
                    let i;
                    switch (e) {
                        case f.PremiumGiftStyles.SNOWGLOBE:
                            i = () => n.el("452661").then(n.t.bind(n, "452661", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.BOX:
                            i = () => n.el("726871").then(n.t.bind(n, "726871", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.CUP:
                            i = () => n.el("544929").then(n.t.bind(n, "544929", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.STANDARD_BOX:
                            switch (t) {
                                case r.IDLE:
                                    i = () => n.el("973372").then(n.t.bind(n, "973372", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case r.LOOP:
                                    i = () => n.el("353540").then(n.t.bind(n, "353540", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("303473").then(n.t.bind(n, "303473", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.CAKE:
                            switch (t) {
                                case r.IDLE:
                                    i = () => n.el("127891").then(n.t.bind(n, "127891", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case r.LOOP:
                                    i = () => n.el("953820").then(n.t.bind(n, "953820", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("311972").then(n.t.bind(n, "311972", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.CHEST:
                            switch (t) {
                                case r.IDLE:
                                    i = () => n.el("269055").then(n.t.bind(n, "269055", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case r.LOOP:
                                    i = () => n.el("120467").then(n.t.bind(n, "120467", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("451680").then(n.t.bind(n, "451680", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.COFFEE:
                            switch (t) {
                                case r.IDLE:
                                    i = () => n.el("863089").then(n.t.bind(n, "863089", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case r.LOOP:
                                    i = () => n.el("949233").then(n.t.bind(n, "949233", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    i = () => n.el("361896").then(n.t.bind(n, "361896", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        default:
                            i = () => Promise.resolve("Error: Invalid giftStyle")
                    }
                    return i
                },
                p = async (e, t) => {
                    if (null == t) throw Error("giftCode must be defined");
                    if (null == e) throw Error("Recipient must be defined");
                    let n = await o.default.openPrivateChannel(e.id).then(e => {
                            let t = c.default.getChannel(e);
                            if (u(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                            return t
                        }),
                        i = (0, d.getGiftCodeURL)(t);
                    return l.default.sendMessage(n.id, s.default.parse(n, i), void 0, {
                        isGiftLinkSentOnBehalfOfUser: !0
                    })
                }
        },
        53253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsSeasonalGiftingActive: function() {
                    return d
                },
                default: function() {
                    return f
                }
            });
            var i = n("884691"),
                r = n("866227"),
                a = n.n(r),
                u = n("862337"),
                o = n("296892");
            let l = new Date("2023-01-01T07:59:59.000Z"),
                s = a(l),
                c = (0, o.default)({
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

            function d() {
                let [e, t] = i.useState(() => s.isAfter(Date.now()));
                return i.useEffect(() => {
                    let n = new u.Timeout,
                        i = () => {
                            let e = s.diff(Date.now(), "millisecond");
                            null == n || n.start(e, () => {
                                s.isBefore(Date.now()) ? t(!1) : i()
                            })
                        };
                    return e && i(), () => n.stop()
                }), e
            }
            var f = c
        },
        154889: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                discountOfferHasTier: function() {
                    return d
                },
                usePremiumDiscountOffer: function() {
                    return f
                }
            });
            var i = n("884691"),
                r = n("446674"),
                a = n("862337"),
                u = n("697218"),
                o = n("340412"),
                l = n("719923"),
                s = n("646718");

            function c(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function d(e, t) {
                var n;
                if (null == e) return !1;
                let i = new Set(null === (n = e.discount) || void 0 === n ? void 0 : n.plan_ids.map(e => s.SubscriptionPlanInfo[e].skuId));
                return i.has(t)
            }

            function f() {
                let e = (0, r.useStateFromStores)([o.default], () => o.default.getUserDiscount(s.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID)),
                    [t, n] = i.useState(c(e)),
                    d = (0, r.useStateFromStores)([u.default], () => (0, l.isPremium)(u.default.getCurrentUser()));
                return i.useEffect(() => {
                    if (null == e || null == e.expires_at) return;
                    let i = new a.Timeout,
                        r = () => {
                            let a = null != e.expires_at ? Date.parse(e.expires_at) - Date.now() : 0;
                            null == i || i.start(a, () => {
                                !t && c(e) ? n(!0) : r()
                            })
                        };
                    return r(), () => i.stop()
                }, [t, e]), t || d ? null : e
            }
        },
        65324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                a = n("446674"),
                u = n("206230"),
                o = n("491605"),
                l = n("210721"),
                s = n("78345");

            function c(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: c = !0,
                    defaultAnimationState: d,
                    idleAnimationState: f
                } = e, h = (0, a.useStateFromStores)([u.default], () => u.default.useReducedMotion), [p, C] = r.useState(d), v = r.useRef((0, l.getGiftAnimationData)(t, p)), [y, m] = r.useState(null == f), [x, w] = r.useState(!1), [g, b] = r.useState(-1), L = () => {
                    v.current = (0, l.getGiftAnimationData)(t, p), b(e => e + 1)
                }, S = () => {
                    m(!1), w(!0), b(-1), C(d)
                };
                r.useEffect(() => {
                    null == f && C(d)
                }, [f, d]), r.useEffect(() => {
                    if (null != f && g >= 0) {
                        S();
                        return
                    }
                    L()
                }, [t, f]), r.useEffect(() => {
                    (!x || null == f) && L()
                }, [p]), r.useEffect(() => {
                    x && (m(null == f), w(!1), L())
                }, [x]);
                if (!s.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, i.jsx)(o.default, {
                    importData: v.current,
                    shouldAnimate: !h && c,
                    className: n,
                    versionKey: g,
                    onComplete: null != f ? () => {
                        null != f && (C(f), m(!0))
                    } : void 0,
                    loop: y
                })
            }
        },
        273108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983"),
                r = n("884691"),
                a = n("414456"),
                u = n.n(a),
                o = n("446674"),
                l = n("206230"),
                s = n("471671"),
                c = n("629758");
            class d extends r.PureComponent {
                async componentDidMount() {
                    let {
                        importData: e,
                        nextScene: t,
                        pauseWhileUnfocused: i,
                        pause: r,
                        isWindowFocused: a,
                        useReducedMotion: u
                    } = this.props, [o, {
                        default: l
                    }] = await Promise.all([e(), n.el("230265").then(n.t.bind(n, "230265", 21))]);
                    null != this.animationRef && (this.animation = l.loadAnimation({
                        container: this.animationRef,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !0,
                        animationData: o
                    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (i && !a || r || u) && this.animation.pause())
                }
                componentWillUnmount() {
                    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
                }
                componentDidUpdate(e) {
                    var t, n, i;
                    let {
                        nextScene: r,
                        pauseWhileUnfocused: a,
                        pause: u,
                        isWindowFocused: o,
                        useReducedMotion: l
                    } = this.props;
                    r !== this.currentScene && this.shouldForcePlayAfter() && !u && this.playScene(r), null != this.animation && (a && !e.isWindowFocused && o && !l && !0 !== u ? this.animation.play() : (l || a && e.isWindowFocused && !o) && this.animation.pause()), !e.pause && u ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !u && !l && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== r && u && (this.playScene(r), null === (i = this.animation) || void 0 === i || i.pause())
                }
                shouldForcePlayAfter() {
                    let {
                        sceneSegments: e
                    } = this.props, t = e[this.currentScene];
                    return !0 === t.shouldForcePlayAfter
                }
                playScene(e) {
                    if (this.isUnmounted) return;
                    let {
                        onScenePlay: t,
                        sceneSegments: n,
                        useReducedMotion: i
                    } = this.props, r = n[e], a = n[this.currentScene];
                    if (null != this.animation && (e === this.currentScene || r.BEG !== a.BEG || r.END !== a.END) && this.animation.playSegments([r.BEG, r.END], !0), this.currentScene = e, null != t && t(this.currentScene), i) {
                        var u;
                        null === (u = this.animation) || void 0 === u || u.pause()
                    }
                }
                render() {
                    return (0, i.jsx)("div", {
                        ref: this.handleSetRef,
                        className: u(this.props.className, c.wrapper)
                    })
                }
                constructor(...e) {
                    super(...e), this.animationRef = null, this.currentScene = this.props.nextScene, this.isUnmounted = !1, this.handleLoopComplete = () => {
                        let {
                            onSceneComplete: e,
                            nextScene: t
                        } = this.props;
                        null != e && e(this.currentScene), this.playScene(t)
                    }, this.handleComplete = () => {
                        let {
                            onSceneComplete: e
                        } = this.props;
                        null != e && e(this.currentScene)
                    }, this.handleSetRef = e => {
                        this.animationRef = e;
                        let {
                            animationRef: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            d.defaultProps = {
                pauseWhileUnfocused: !0,
                pause: !1
            };
            var f = e => {
                let {
                    componentRef: t,
                    ...n
                } = e, r = (0, o.useStateFromStores)([s.default], () => s.default.isFocused()), a = (0, o.useStateFromStores)([l.default], () => l.default.useReducedMotion);
                return (0, i.jsx)(d, {
                    ...n,
                    isWindowFocused: r,
                    useReducedMotion: a,
                    ref: t
                })
            }
        },
        41250: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("75196");

            function a(e) {
                let {
                    width: t = 106,
                    height: n = 26,
                    color: a = "currentColor",
                    foreground: u,
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 106 26",
                    children: [(0, i.jsx)("title", {
                        children: "Nitro"
                    }), (0, i.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, i.jsx)("path", {
                            className: u,
                            fill: a,
                            d: "M98.8266537 8.64800265L97.5788372 17.0822416C97.2940433 19.0754982 95.0485266 20.0010292 92.981582 20.0010292 91.0571496 20.0010292 89.1680861 19.0754982 89.4175111 17.2605602L90.6652125 8.64800265C90.9501215 6.76162212 93.1956383 5.80077257 95.2624676 5.80077257 97.3294121 5.80077257 99.1115628 6.76162212 98.8266537 8.64800265M96.2496839.0038079646L96.2503751.0000115044248 82.8208233.0000115044248C82.4777342.0000115044248 82.1864887.251383186 82.1368341.59030354L81.4839511 5.04596726C81.4228909 5.46254248 81.7462794 5.83609115 82.167825 5.83609115L84.6202551 5.83609115C84.8670304 5.83609115 85.0355795 6.08734779 84.9386897 6.31398496 84.6326976 7.03036549 84.4097703 7.8080646 84.2859219 8.64800265L83.0381053 17.2605602C82.2182861 23.0258876 87.0301735 25.9085513 92.2687909 25.9085513 97.7574094 25.9085513 103.139115 23.0258876 103.958934 17.2605602L105.206059 8.64800265C106.009634 2.99656903 101.367679.115400885 96.2496839.0038079646M15.5778562 11.7941867L15.6467505 15.9747796C15.648133 16.0607177 15.5902986 16.1363018 15.5068881 16.1574699L15.5067729 16.1574699 14.0843013 11.1148504C14.0822275 11.1071425 14.0795777 11.0996646 14.0763519 11.0923018L9.66308376.775018584C9.55432753.520885841 9.30421123.355912389 9.0273667.355912389L4.02607753.355912389C3.68126035.355912389 3.38920838.6097 3.34151232.950576106L.00682030635 24.7668062C-.0513596718 25.1820009.271568009 25.5526735.691385514 25.5526735L5.67355018 25.5526735C6.01882818 25.5526735 6.31122578 25.2981956 6.3583458 24.9566292L7.6643423 15.4949301C7.66560958 15.4857265 7.66618562 15.4762929 7.66607042 15.4669743L7.59475674 10.6052044 7.73715368 10.5697708 9.23116943 15.6125053C9.23335838 15.6196381 9.23589295 15.6267708 9.23888836 15.6336735L13.3663258 25.1370186C13.4758885 25.3893106 13.7250831 25.5526735 14.0004299 25.5526735L19.39573 25.5526735C19.7405472 25.5526735 20.0325992 25.2988858 20.0802953 24.9580097L23.4156785 1.14177965C23.4738585.726584956 23.1509308.355912389 22.7311133.355912389L17.782935.355912389C17.438233.355912389 17.146181.609469912 17.0983698.950346018L15.5795843 11.7654257C15.578317 11.7749743 15.577741 11.784523 15.5778562 11.7941867M25.2200758 25.5526274L30.2035078 25.5526274C30.5483249 25.5526274 30.8403769 25.2989549 30.888073 24.9579637L34.222765 1.14184867C34.280945.726653982 33.9580173.355981416 33.5381998.355981416L28.5547678.355981416C28.2100659.355981416 27.9180139.609653982 27.8702026.950645133L24.5355106 24.7667602C24.4773306 25.1819549 24.8002583 25.5526274 25.2200758 25.5526274M37.588782.910862832L36.9357838 5.3664115C36.8748388 5.78298673 37.1982273 6.15665044 37.6197729 6.15665044L42.8344271 6.15665044C43.2536686 6.15665044 43.5763658 6.52628761 43.5192227 6.94102212L41.0626451 24.7682788C41.005502 25.1830133 41.3281993 25.5526504 41.7474408 25.5526504L46.8027624 25.5526504C47.1481556 25.5526504 47.4405532 25.2980575 47.4875581 24.9564912L49.9960944 6.75280973C50.0430992 6.41112832 50.3354968 6.15665044 50.68089 6.15665044L56.2874814 6.15665044C56.6305704 6.15665044 56.9217007 5.90539381 56.9714705 5.56635841L57.6249296 1.11080973C57.6859898.694234513 57.3626013.320570796 56.9409404.320570796L38.2727712.320570796C37.9296821.320570796 37.6384366.571827434 37.588782.910862832M72.9157339 9.14614425C72.7371616 10.6051354 71.5970645 12.0642416 69.6364568 12.0642416L66.6908218 12.0642416C66.2704283 12.0642416 65.9472702 11.6925336 66.0063718 11.2768788L66.6298768 6.8920823C66.6782642 6.55178142 66.9700857 6.29891416 67.3143268 6.29891416L70.4562761 6.29891416C72.3453396 6.29891416 73.0936148 7.61571062 72.9157339 9.14614425M71.1691824.355958407L61.6845787.355958407C61.3397615.355958407 61.0477096.609630973 60.9998983.950622124L57.6652063 24.7667372C57.6070263 25.1819319 57.929954 25.5526044 58.3497715 25.5526044L63.4034802 25.5526044C63.7487582 25.5526044 64.0411558 25.2981265 64.0882759 24.9565602L65.0696166 17.8430292C65.0932342 17.6723035 65.2393178 17.5450646 65.4120144 17.5450646L66.0616716 17.5450646C66.1795293 17.5450646 66.2893224 17.6050027 66.3528019 17.7041708L71.1792055 25.2345071C71.3062798 25.4327283 71.5256356 25.5526044 71.7613509 25.5526044L78.0034289 25.5526044C78.5625328 25.5526044 78.8902992 24.9242327 78.5697909 24.4667018L73.5050221 17.2370912C73.383593 17.0637195 73.4460357 16.8224717 73.6364743 16.729631 76.8698986 15.1516841 78.7475566 13.5351973 79.3665685 9.03926814 80.0787836 3.13174602 76.3728918.355958407 71.1691824.355958407"
                        })
                    })]
                })
            }
        },
        379863: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("75196");

            function a(e) {
                let {
                    width: t = 103,
                    height: n = 39,
                    color: a = "currentColor",
                    foreground: u,
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 103 39",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsxs)("g", {
                        fill: a,
                        className: u,
                        children: [(0, i.jsx)("path", {
                            d: "M93.9519 0.175787H81.0164C80.8563 0.175146 80.7012 0.231811 80.5799 0.335344C80.4586 0.438877 80.3792 0.582303 80.3564 0.739196L79.7272 4.99334C79.7136 5.08695 79.7205 5.18236 79.7474 5.2731C79.7744 5.36384 79.8207 5.44778 79.8833 5.51923C79.946 5.59068 80.0234 5.64796 80.1103 5.68719C80.1973 5.72642 80.2917 5.74668 80.3873 5.7466H82.7491C82.804 5.74682 82.8579 5.76039 82.9062 5.78612C82.9545 5.81185 82.9956 5.84895 83.026 5.89414C83.0564 5.93932 83.075 5.99121 83.0803 6.04522C83.0857 6.09924 83.0775 6.15372 83.0565 6.20385C82.7507 6.91629 82.5392 7.66486 82.4273 8.43095L81.2248 16.6535C80.4347 22.1651 85.0697 24.9086 90.1172 24.9086C95.404 24.9086 100.588 22.1569 101.378 16.6535L102.58 8.43095C103.354 3.03162 98.8818 0.281936 93.9519 0.175787ZM96.4272 8.42687L95.2328 16.4779C94.9585 18.3804 92.7947 19.2643 90.8041 19.2643C88.9477 19.2643 87.1304 18.3804 87.3697 16.6473L88.5722 8.42483C88.8466 6.62437 91.0104 5.70781 93.0009 5.70781C94.9915 5.70781 96.7139 6.62641 96.4333 8.42687H96.4272Z"
                        }), (0, i.jsx)("path", {
                            d: "M22.1974 0.17587H17.3644C17.2005 0.176513 17.0423 0.236066 16.9194 0.343454C16.7965 0.450842 16.7171 0.598756 16.6961 0.759692L15.213 11.2256C15.212 11.2351 15.212 11.2447 15.213 11.2542L15.279 15.3001C15.2798 15.3406 15.2669 15.3801 15.2421 15.4124C15.2174 15.4446 15.1825 15.4676 15.1429 15.4777L13.7526 10.5969V10.5744L9.43527 0.582096C9.38392 0.461509 9.29788 0.35852 9.18786 0.285933C9.07784 0.213345 8.94868 0.174361 8.81645 0.173828H3.93188C3.7689 0.176072 3.61225 0.236646 3.49091 0.344348C3.36956 0.45205 3.29173 0.599594 3.27181 0.759692L0.00648965 23.8003C-0.00675491 23.8949 0.000616673 23.9912 0.0281092 24.0828C0.0556018 24.1744 0.102579 24.2591 0.165884 24.3312C0.22919 24.4033 0.307359 24.4612 0.39514 24.501C0.482921 24.5407 0.578282 24.5614 0.674817 24.5617H5.54082C5.70386 24.5612 5.86126 24.5025 5.98405 24.3964C6.10685 24.2903 6.18678 24.1438 6.20915 23.984L7.48392 14.8286C7.48494 14.8191 7.48494 14.8095 7.48392 14.8L7.41379 10.0947L7.55405 10.0621L9.01241 14.9409C9.01126 14.9476 9.01126 14.9545 9.01241 14.9613L13.043 24.1595C13.0941 24.2803 13.1801 24.3834 13.2902 24.456C13.4003 24.5287 13.5295 24.5675 13.6618 24.5678H18.9486C19.1114 24.5674 19.2685 24.509 19.3913 24.4033C19.514 24.2976 19.5941 24.1516 19.617 23.9921L22.8678 0.937289C22.8815 0.842432 22.8743 0.745785 22.8468 0.653916C22.8193 0.562046 22.7722 0.477107 22.7086 0.404871C22.645 0.332635 22.5664 0.274794 22.4782 0.235279C22.39 0.195765 22.2943 0.175503 22.1974 0.17587Z"
                        }), (0, i.jsx)("path", {
                            d: "M32.7504 0.175781H27.8844C27.7203 0.17599 27.5619 0.23539 27.4389 0.342858C27.3159 0.450326 27.2366 0.598492 27.2161 0.759604L23.959 23.8002C23.9458 23.8948 23.9531 23.9911 23.9806 24.0827C24.0081 24.1743 24.0551 24.259 24.1184 24.3311C24.1817 24.4032 24.2599 24.4611 24.3477 24.5009C24.4354 24.5406 24.5308 24.5613 24.6273 24.5616H29.4933C29.6563 24.5613 29.8137 24.503 29.9368 24.3973C30.0599 24.2916 30.1404 24.1456 30.1637 23.9859L33.4187 0.937201C33.4323 0.842515 33.4252 0.746043 33.3978 0.654318C33.3705 0.562593 33.3235 0.477757 33.2601 0.405555C33.1968 0.333353 33.1185 0.275472 33.0305 0.235829C32.9426 0.196186 32.847 0.175708 32.7504 0.175781Z"
                        }), (0, i.jsx)("path", {
                            d: "M55.5911 0.175834H37.3854C37.2235 0.17613 37.0671 0.234031 36.9448 0.338966C36.8225 0.443901 36.7424 0.588871 36.7191 0.747409L36.0817 5.04646C36.0678 5.14131 36.0747 5.238 36.1019 5.32998C36.1291 5.42195 36.176 5.50705 36.2394 5.57948C36.3028 5.65192 36.3812 5.70999 36.4694 5.74976C36.5575 5.78952 36.6532 5.81004 36.75 5.80992H41.845C41.9414 5.80989 42.0368 5.83033 42.1246 5.86985C42.2123 5.90937 42.2905 5.96706 42.3539 6.03903C42.4172 6.111 42.4642 6.19557 42.4917 6.28705C42.5192 6.37852 42.5266 6.47477 42.5133 6.5693L40.1164 23.7961C40.1032 23.8907 40.1105 23.9869 40.138 24.0784C40.1655 24.1699 40.2125 24.2545 40.2759 24.3264C40.3392 24.3984 40.4174 24.4561 40.5052 24.4956C40.593 24.5351 40.6883 24.5556 40.7848 24.5555H45.7147C45.8777 24.5551 46.0351 24.4964 46.1579 24.3902C46.2807 24.2841 46.3607 24.1377 46.383 23.9778L48.8294 6.38762C48.8509 6.22779 48.9303 6.08112 49.0529 5.97487C49.1754 5.86861 49.3328 5.81 49.4957 5.80992H54.964C55.1257 5.81012 55.2821 5.75266 55.4044 5.64806C55.5268 5.54346 55.607 5.39873 55.6303 5.24039L56.2677 0.935212C56.2811 0.839995 56.2735 0.743042 56.2455 0.650985C56.2175 0.558928 56.1698 0.473939 56.1055 0.401832C56.0413 0.329726 55.9621 0.272202 55.8733 0.233197C55.7845 0.194191 55.6882 0.174624 55.5911 0.175834Z"
                        }), (0, i.jsx)("path", {
                            d: "M69.4981 0.175781H60.2364C60.0723 0.17599 59.9139 0.23539 59.7909 0.342858C59.6679 0.450326 59.5887 0.598491 59.5681 0.759604L56.311 23.8002C56.2978 23.8948 56.3051 23.9911 56.3326 24.0827C56.3601 24.1743 56.4071 24.259 56.4704 24.3311C56.5337 24.4032 56.6119 24.4611 56.6997 24.5009C56.7875 24.5406 56.8828 24.5613 56.9794 24.5616H61.9155C62.0785 24.5612 62.2359 24.5025 62.3587 24.3963C62.4815 24.2902 62.5614 24.1437 62.5838 23.9839L63.5409 17.1005C63.5523 17.0206 63.5923 16.9474 63.6536 16.8942C63.7149 16.841 63.7935 16.8113 63.8751 16.8106H64.5104C64.5672 16.8108 64.6231 16.8251 64.6728 16.8522C64.7225 16.8793 64.7646 16.9184 64.7951 16.9658L69.5084 24.2534C69.5693 24.3477 69.6531 24.4253 69.7523 24.4792C69.8514 24.5331 69.9626 24.5614 70.0757 24.5616H76.1711C76.2947 24.5618 76.4159 24.5283 76.5216 24.465C76.6272 24.4016 76.7133 24.3107 76.7704 24.2022C76.8274 24.0937 76.8532 23.9718 76.845 23.8498C76.8368 23.7278 76.7949 23.6104 76.7239 23.5103L71.7733 16.5146C71.7454 16.4751 71.7265 16.43 71.7178 16.3826C71.7091 16.3351 71.7109 16.2863 71.7231 16.2396C71.7352 16.1929 71.7574 16.1493 71.7882 16.1119C71.8189 16.0744 71.8575 16.044 71.9012 16.0227C75.0593 14.4958 76.893 12.9301 77.4974 8.57997C78.1988 2.86218 74.5786 0.175781 69.4981 0.175781ZM71.204 8.68407C71.0287 10.0946 69.9169 11.5072 68.0006 11.5072H65.1251C65.0285 11.5073 64.9329 11.4868 64.845 11.4472C64.757 11.4076 64.6787 11.3497 64.6154 11.2775C64.552 11.2053 64.505 11.1204 64.4777 11.0287C64.4503 10.937 64.4432 10.8405 64.4568 10.7458L65.0653 6.50188C65.0882 6.34263 65.1684 6.1969 65.2912 6.09151C65.414 5.98611 65.5711 5.92815 65.7336 5.92827H68.8009C70.6471 5.92827 71.3773 7.20206 71.204 8.68407Z"
                        }), (0, i.jsx)("path", {
                            d: "M7.17861 33.4558C7.14695 33.4798 7.12131 33.5107 7.10366 33.5461C7.086 33.5815 7.07682 33.6205 7.07682 33.6599C7.07682 33.6994 7.086 33.7383 7.10366 33.7737C7.12131 33.8091 7.14695 33.84 7.17861 33.8641C8.11097 34.5683 8.07796 35.6584 7.86344 36.332C7.38901 37.9059 6.19056 38.8592 3.99993 38.8592H0.262245C0.224761 38.859 0.187761 38.8508 0.153705 38.8353C0.11965 38.8198 0.0893196 38.7973 0.0647325 38.7693C0.0401454 38.7413 0.021865 38.7085 0.0111071 38.6729C0.000349207 38.6374 -0.00263948 38.6 0.00233983 38.5632L1.31012 29.3058C1.31907 29.2439 1.35029 29.1873 1.39805 29.1464C1.4458 29.1056 1.50688 29.0831 1.57002 29.0833H5.30358C7.18892 29.0833 8.41625 30.2019 8.09447 32.0656C7.96306 32.6209 7.63894 33.1128 7.17861 33.4558ZM4.23096 36.6872C5.73675 36.6872 5.98841 34.6847 4.50943 34.6847H3.28622C3.22289 34.685 3.16179 34.7079 3.11408 34.7491C3.06637 34.7904 3.03522 34.8472 3.02632 34.9092L2.82004 36.3912C2.81506 36.428 2.81805 36.4654 2.82881 36.5009C2.83957 36.5365 2.85785 36.5693 2.88243 36.5973C2.90702 36.6253 2.93735 36.6478 2.97141 36.6633C3.00546 36.6788 3.04246 36.687 3.07995 36.6872H4.23096ZM4.76108 32.9026C5.97397 32.9026 6.26688 31.1634 5.01067 31.1634H3.78747C3.72444 31.1637 3.66359 31.1862 3.61593 31.2271C3.56826 31.2679 3.53692 31.3242 3.52756 31.3859L3.35223 32.6107C3.3469 32.6475 3.34964 32.685 3.36027 32.7207C3.37089 32.7564 3.38916 32.7894 3.41381 32.8175C3.43847 32.8456 3.46894 32.8681 3.50316 32.8834C3.53738 32.8988 3.57454 32.9068 3.61213 32.9067L4.76108 32.9026Z"
                        }), (0, i.jsx)("path", {
                            d: "M16.7972 38.8632H14.6602C14.6002 38.8632 14.5419 38.843 14.495 38.8059C14.4482 38.7688 14.4155 38.717 14.4023 38.659L14.1074 37.1219C14.0946 37.0638 14.062 37.0117 14.015 36.9746C13.9681 36.9374 13.9097 36.9173 13.8495 36.9178H11.6011C11.5504 36.9179 11.5007 36.9326 11.4582 36.9602C11.4157 36.9877 11.3823 37.0269 11.3619 37.0729L10.6193 38.7244C10.5991 38.7705 10.5657 38.8099 10.5232 38.8374C10.4806 38.865 10.4309 38.8796 10.38 38.8795H8.29251C8.24801 38.8795 8.20424 38.8683 8.16533 38.8469C8.12643 38.8255 8.09366 38.7947 8.07013 38.7573C8.0466 38.7199 8.03308 38.6772 8.03085 38.6333C8.02861 38.5893 8.03774 38.5455 8.05736 38.5059L12.6284 29.2485C12.6496 29.2047 12.683 29.1678 12.7246 29.1421C12.7663 29.1164 12.8145 29.103 12.8635 29.1035H14.7633C14.8232 29.1032 14.8813 29.1233 14.9279 29.1605C14.9746 29.1977 15.0068 29.2497 15.0191 29.3077L17.053 38.5651C17.0586 38.6018 17.0562 38.6392 17.0459 38.6748C17.0357 38.7105 17.0179 38.7435 16.9936 38.7718C16.9694 38.8 16.9393 38.8228 16.9054 38.8385C16.8715 38.8543 16.8346 38.8627 16.7972 38.8632ZM13.4968 34.707C13.5334 34.7069 13.5696 34.6992 13.603 34.6844C13.6364 34.6697 13.6663 34.6481 13.6908 34.6212C13.7153 34.5943 13.7338 34.5625 13.7452 34.5281C13.7565 34.4937 13.7605 34.4572 13.7567 34.4212L13.4927 31.8491H13.3957L12.4407 34.3559C12.4256 34.3952 12.4205 34.4375 12.4256 34.4792C12.4308 34.5209 12.4461 34.5607 12.4702 34.5953C12.4944 34.6298 12.5266 34.658 12.5643 34.6775C12.6019 34.6969 12.6437 34.7071 12.6861 34.707H13.4968Z"
                        }), (0, i.jsx)("path", {
                            d: "M19.1384 35.9359C19.1901 35.8936 19.2563 35.8728 19.3232 35.8777C19.3901 35.8826 19.4525 35.913 19.4973 35.9624C19.7378 36.2023 20.0247 36.3919 20.3408 36.5199C20.6569 36.6479 20.9957 36.7117 21.3372 36.7075C22.0056 36.7075 22.5935 36.4727 22.6904 35.9624C22.8018 35.35 21.9375 35.0928 21.1413 34.9826C19.5922 34.7335 18.1978 33.5046 18.5464 31.6552C18.9238 29.6526 20.7081 28.9484 22.5233 28.9484C23.6455 28.9484 24.6954 29.2382 25.5225 30.2834C25.5451 30.3114 25.5616 30.3436 25.5711 30.3781C25.5805 30.4127 25.5827 30.4488 25.5775 30.4842C25.5723 30.5196 25.5598 30.5536 25.5407 30.584C25.5217 30.6144 25.4965 30.6406 25.4669 30.661L24.058 31.6266C24.0095 31.6601 23.9509 31.6766 23.8918 31.6732C23.8327 31.6699 23.7765 31.647 23.7321 31.6082C23.3125 31.2544 22.7816 31.0559 22.2304 31.0469C21.6116 31.0346 21.0712 31.2673 21.0155 31.7654C20.9453 32.3309 21.4486 32.5819 22.2015 32.7453C23.9177 33.0637 25.5927 33.7128 25.1327 36.142C24.7696 38.0486 23.0947 38.9999 20.9598 38.9999C19.8459 38.9999 18.4845 38.4773 17.7006 37.4403C17.6594 37.3867 17.6406 37.3194 17.6483 37.2525C17.656 37.1855 17.6895 37.1241 17.7419 37.081L19.1384 35.9359Z"
                        }), (0, i.jsx)("path", {
                            d: "M28.365 38.8631H26.3951C26.3577 38.8629 26.3208 38.8548 26.2868 38.8393C26.2528 38.8238 26.2226 38.8012 26.1982 38.7732C26.1737 38.7451 26.1557 38.7122 26.1452 38.6767C26.1346 38.6411 26.132 38.6038 26.1373 38.5671L27.445 29.3097C27.4536 29.2476 27.4847 29.1908 27.5325 29.1498C27.5804 29.1089 27.6417 29.0866 27.7049 29.0872H29.6749C29.7122 29.0871 29.7491 29.095 29.783 29.1102C29.817 29.1255 29.8473 29.1479 29.8717 29.1758C29.8962 29.2037 29.9143 29.2364 29.9248 29.2719C29.9353 29.3073 29.938 29.3446 29.9327 29.3811L28.6249 38.6386C28.6169 38.701 28.5859 38.7583 28.538 38.7997C28.4902 38.8411 28.4286 38.8636 28.365 38.8631Z"
                        }), (0, i.jsx)("path", {
                            d: "M37.6597 36.6687C37.6947 36.686 37.7253 36.7107 37.7495 36.7411C37.7736 36.7714 37.7906 36.8068 37.7993 36.8444C37.808 36.8821 37.8081 36.9212 37.7997 36.959C37.7912 36.9967 37.7744 37.0321 37.7505 37.0627C36.5788 38.5671 35.2381 38.9999 34.0623 38.9999C32.1213 38.9999 30.337 37.8813 30.6423 35.6582L31.1167 32.29C31.4241 30.0813 33.5446 28.9484 35.5268 28.9484C36.6799 28.9484 38.0021 29.4097 38.5921 30.9489C38.6178 31.0136 38.6167 31.0858 38.5888 31.1496C38.561 31.2135 38.5088 31.2639 38.4436 31.2898L36.748 31.9308C36.6909 31.9519 36.6281 31.9526 36.5705 31.9329C36.5129 31.9131 36.4641 31.8741 36.4324 31.8226C36.1622 31.4143 35.6485 31.2265 35.1349 31.2265C34.4233 31.2408 33.7137 31.6348 33.6147 32.29L33.1403 35.6664C33.0433 36.3033 33.6559 36.7034 34.3552 36.7034C34.6326 36.7074 34.907 36.6462 35.1559 36.5249C35.4048 36.4035 35.621 36.2254 35.7868 36.0053C35.8226 35.9552 35.8752 35.9192 35.9352 35.9039C35.9953 35.8886 36.0589 35.8948 36.1147 35.9216L37.6597 36.6687Z"
                        })]
                    })
                })
            }
        },
        181108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                a = n("516555");
            let u = [n("315147")],
                o = ["#FFFFFF"],
                l = 1e3 / 60,
                s = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 0,
                            y: 1
                        },
                        maxValue: {
                            x: 3,
                            y: 3
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        maxValue: {
                            x: 0,
                            y: 0,
                            z: 360
                        },
                        minAddValue: {
                            x: 0,
                            y: 0,
                            z: -5
                        },
                        maxAddValue: {
                            x: 0,
                            y: 0,
                            z: 5
                        }
                    },
                    size: {
                        type: "static-random",
                        minValue: 2,
                        maxValue: 6
                    },
                    dragCoefficient: {
                        type: "static",
                        value: {
                            x: .05,
                            y: .05
                        }
                    },
                    opacity: {
                        type: "static",
                        value: .3
                    }
                };

            function c(e) {
                let {
                    className: t,
                    firing: n = !0,
                    wind: c = 2
                } = e, [d, f] = r.useState(null), [h, p] = r.useState(null), C = (0, a.useConfettiCannon)(h, d), v = r.useMemo(() => new a.Environment({
                    wind: c
                }), [c]), y = r.useCallback(() => {
                    let e = null == h ? void 0 : h.getCanvas();
                    if (null == e) return;
                    let t = e.getBoundingClientRect();
                    C.createConfetti({
                        ...s,
                        position: {
                            type: "static-random",
                            minValue: {
                                x: -t.width / 2,
                                y: -6
                            },
                            maxValue: {
                                x: t.width,
                                y: -6
                            }
                        }
                    })
                }, [C, h]);
                return r.useEffect(() => {
                    let e = n ? setInterval(y, l) : null;
                    return () => clearInterval(e)
                }, [n, y]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(a.ConfettiCanvas, {
                        ref: p,
                        className: t,
                        environment: v
                    }), (0, i.jsx)(a.SpriteCanvas, {
                        ref: f,
                        colors: o,
                        sprites: u,
                        spriteWidth: 6,
                        spriteHeight: 6
                    })]
                })
            }
        }
    }
]);
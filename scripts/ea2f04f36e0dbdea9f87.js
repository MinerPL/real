(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["29080"], {
        641900: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ConfettiCanvas: function() {
                    return A
                },
                Environment: function() {
                    return f
                },
                SpriteCanvas: function() {
                    return k
                },
                useConfettiCannon: function() {
                    return E
                }
            });
            var r = n("773670"),
                i = n("462567"),
                o = n("575482"),
                a = n.n(o);

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
                        var n, r, i, o, a = t.wind * e,
                            u = -t.gravity * e;
                        return {
                            x: a + (n = this.dragCoefficient.x, n * (r = this.velocity.x) * r * (r > 0 ? -1 : 1)),
                            y: u + (i = this.dragCoefficient.y, i * (o = this.velocity.y) * o * (o > 0 ? -1 : 1))
                        }
                    }, t.prototype.update = function(t) {
                        var e = Date.now(),
                            n = (e - this._lastUpdatedAt) / 100;
                        this.rotation.update(n), this.dragCoefficient.update(n);
                        var r = this.getNewForces(t, n),
                            i = r.x,
                            o = r.y;
                        this.velocity.update(n), this.velocity.x += i, this.velocity.y += o, this.position.update(n), this.position.x += this.velocity.x * n, this.position.y += this.velocity.y * n, this.size.update(n), this.opacity.update(n), this._lastUpdatedAt = e
                    }, t.prototype.previewPositionUpdate = function(t, e) {
                        var n = e / 100,
                            r = this.velocity.previewUpdate(n),
                            i = this.getNewForces(t, n),
                            o = i.x,
                            a = i.y;
                        r.x += o, r.y += a;
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
                b = function(t) {
                    function e(e, n, r, i, o, a) {
                        var u = t.call(this, e) || this;
                        u.min = n, u.max = r, u.duration = i;
                        var c = u.value / (u.max - u.min) * u.duration,
                            l = isNaN(c) ? 0 : c;
                        return u.timePassed = l < 0 ? u.duration - l : l, u.directionMultiplier = o, u.easingFunction = a, u
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
                            o = this.easingFunction(r, this.min, e, this.duration);
                        return [isNaN(o) ? 0 : o, r, i]
                    }, e
                }(v);

            function x(t, e) {
                return t === e ? t : Math.random() * (e - t + 1) + t
            }

            function C(t) {
                var e = Math.floor(x(0, t.length - 1));
                return [t[e], e]
            }

            function j(t, e) {
                return C([t, e])[0]
            }

            function z(t) {
                return "number" == typeof t ? {
                    x: t,
                    y: t
                } : t
            }

            function O(t) {
                return "number" == typeof t ? {
                    x: t,
                    y: t,
                    z: t
                } : t
            }

            function S(t) {
                return function(t) {
                    switch (t.type) {
                        case "static":
                            var e = z(t.value);
                            return new y(new m(e.x), new m(e.y));
                        case "static-random":
                            var n = z(t.minValue),
                                r = z(t.maxValue);
                            return new y(new m(x(n.x, r.x)), new m(x(n.y, r.y)));
                        case "linear":
                            e = z(t.value);
                            var i = z(t.addValue);
                            return new y(new w(e.x, i.x), new w(e.y, i.y));
                        case "linear-random":
                            n = z(t.minValue), r = z(t.maxValue);
                            var o = z(t.minAddValue),
                                a = z(t.maxAddValue);
                            return new y(new w(x(n.x, r.x), x(o.x, a.x)), new w(x(n.y, r.y), x(o.x, a.x)));
                        case "oscillating":
                            e = z(t.value);
                            var u = z(t.start),
                                c = z(t.final),
                                l = z(t.duration),
                                s = z(t.direction);
                            return new y(new b(e.x, u.x, c.x, l.x, s.x, t.easingFunction), new b(e.y, u.y, c.y, l.x, s.y, t.easingFunction));
                        case "oscillating-random":
                            n = z(t.minValue), r = z(t.maxValue);
                            var f = z(t.minStart),
                                h = z(t.maxStart),
                                d = z(t.minFinal),
                                p = z(t.maxFinal),
                                v = z(t.minDuration),
                                g = z(t.maxDuration),
                                O = z(t.minDirection),
                                S = z(t.maxDirection);
                            return new y(new b(x(n.x, r.x), x(f.x, h.x), x(d.x, p.x), x(v.x, g.x), j(O.x, S.x), C(t.easingFunctions)[0]), new b(x(n.y, r.y), x(f.y, h.y), x(d.y, p.y), x(v.y, g.y), j(O.y, S.y), C(t.easingFunctions)[0]))
                    }
                }(p(p({}, t), {
                    valueType: "Vector2"
                }))
            }
            var A = r.forwardRef(function(t, e) {
                var o = t.className,
                    a = t.environment,
                    c = t.onClick,
                    f = t.onMouseDown,
                    h = t.onMouseMove,
                    d = t.onMouseUp,
                    v = t.onBeforeRender,
                    y = t.onAfterRender,
                    z = function(t, e) {
                        var n = {};
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && 0 > e.indexOf(r) && (n[r] = t[r]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) 0 > e.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]])
                        }
                        return n
                    }(t, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    A = r.useRef(null),
                    k = r.useRef(new Map),
                    E = r.useRef(null),
                    R = r.useRef(0),
                    _ = r.useRef(0),
                    P = r.useCallback(function() {
                        var t = A.current;
                        if (null != t) {
                            var e = t.getContext("2d");
                            if (null != e) {
                                e.clearRect(0, 0, t.width, t.height), null == v || v(e), k.current.forEach(function(n, r) {
                                    var i = n.confetti,
                                        o = n.spriteCanvas;
                                    i.update(a), i.draw(o, e), i.shouldDestroy(t, a) && k.current.delete(r)
                                }), null == y || y(e), k.current.size > 0 ? E.current = window.requestAnimationFrame(P) : (e.clearRect(0, 0, t.width, t.height), E.current = null);
                                var n = Date.now();
                                0 !== R.current && (_.current = 1e3 / (n - R.current)), R.current = n
                            }
                        }
                    }, [a, y, v]);
                r.useEffect(function() {
                    null != E.current && (window.cancelAnimationFrame(E.current), E.current = window.requestAnimationFrame(P))
                }, [P]);
                var V = r.useCallback(function(t, e) {
                        k.current.set(t.id, {
                            confetti: t,
                            spriteCanvas: e
                        }), null == E.current && P()
                    }, [P]),
                    F = r.useCallback(function(t, e, n, r, o) {
                        var a, u, c, f, h, d, v, y, z, A, k, E, R, _, P, F = (a = null !== (P = t.id) && void 0 !== P ? P : (0, i.v4)(), u = t, c = n, f = r, h = o, y = S((v = (d = u, p(p({
                            id: a
                        }, s), d))).size), A = (z = function(t, e) {
                            if (null != t) {
                                var n = e.sprites.findIndex(function(e) {
                                    return "string" == typeof t ? e.src === t && e.colorize : e.src === t.src && e.colorize === t.colorize
                                });
                                if (-1 !== n) return [t, n]
                            }
                            return C(e.sprites)
                        }(f, c))[0], k = z[1], E = function(t, e, n) {
                            if (!("string" == typeof(r = t) || r.colorize)) return 0;
                            var r, i = null != e ? n.colors.findIndex(function(t) {
                                return t === e
                            }) : -1;
                            return -1 !== i ? i : Math.floor(x(0, n.colors.length - 1))
                        }(null != f ? f : A, h, c), new l({
                            id: a,
                            position: S(v.position),
                            velocity: S(v.velocity),
                            rotation: (R = v.rotation, function(t) {
                                switch (t.type) {
                                    case "static":
                                        var e = O(t.value);
                                        return new g(new m(e.x), new m(e.y), new m(e.z));
                                    case "static-random":
                                        var n = O(t.minValue),
                                            r = O(t.maxValue);
                                        return new g(new m(x(n.x, r.x)), new m(x(n.y, r.y)), new m(x(n.z, r.z)));
                                    case "linear":
                                        e = O(t.value);
                                        var i = O(t.addValue);
                                        return new g(new w(e.x, i.x), new w(e.y, i.y), new w(e.z, i.z));
                                    case "linear-random":
                                        n = O(t.minValue), r = O(t.maxValue);
                                        var o = O(t.minAddValue),
                                            a = O(t.maxAddValue);
                                        return new g(new w(x(n.x, r.x), x(o.x, a.x)), new w(x(n.y, r.y), x(o.y, a.y)), new w(x(n.z, r.z), x(o.z, a.z)));
                                    case "oscillating":
                                        e = O(t.value);
                                        var u = O(t.start),
                                            c = O(t.final),
                                            l = O(t.duration),
                                            s = O(t.direction);
                                        return new g(new b(e.x, u.x, c.x, l.x, s.x, t.easingFunction), new b(e.y, u.y, c.y, l.z, s.y, t.easingFunction), new b(e.z, u.z, c.z, l.z, s.z, t.easingFunction));
                                    case "oscillating-random":
                                        n = O(t.minValue), r = O(t.maxValue);
                                        var f = O(t.minStart),
                                            h = O(t.maxStart),
                                            d = O(t.minFinal),
                                            p = O(t.maxFinal),
                                            v = O(t.minDuration),
                                            y = O(t.maxDuration),
                                            z = O(t.minDirection),
                                            S = O(t.maxDirection);
                                        return new g(new b(x(n.x, r.x), x(f.x, h.x), x(d.x, p.x), x(v.x, y.x), j(z.x, S.x), C(t.easingFunctions)[0]), new b(x(n.y, r.y), x(f.y, h.y), x(d.y, p.y), x(v.y, y.y), j(z.y, S.y), C(t.easingFunctions)[0]), new b(x(n.z, r.z), x(f.z, h.z), x(d.z, p.z), x(v.z, y.z), j(z.z, S.z), C(t.easingFunctions)[0]))
                                }
                            }(p(p({}, R), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: S(v.dragCoefficient),
                            size: y,
                            opacity: (_ = v.opacity, function(t) {
                                switch (t.type) {
                                    case "static":
                                        return new m(t.value);
                                    case "static-random":
                                        return new m(x(t.minValue, t.maxValue));
                                    case "linear":
                                        return new w(t.value, t.addValue);
                                    case "linear-random":
                                        return new w(x(t.minValue, t.maxValue), x(t.minAddValue, t.maxAddValue));
                                    case "oscillating":
                                        return new b(t.value, t.start, t.final, t.duration, t.direction, t.easingFunction);
                                    case "oscillating-random":
                                        return new b(x(t.minValue, t.maxValue), x(t.minStart, t.maxStart), x(t.minFinal, t.maxFinal), x(t.minDuration, t.maxDuration), j(t.minDirection, t.maxDirection), C(t.easingFunctions)[0])
                                }
                            }(p(p({}, _), {
                                valueType: "number"
                            }))),
                            spriteX: E * c.spriteWidth + 2 * E,
                            spriteY: k * c.spriteHeight + 2 * k,
                            spriteWidth: c.spriteWidth,
                            spriteHeight: c.spriteHeight
                        }));
                        return V(F, e), F
                    }, [V]),
                    M = r.useCallback(function(t) {
                        k.current.delete(t)
                    }, []),
                    U = r.useCallback(function() {
                        return k.current.clear()
                    }, []),
                    I = r.useCallback(function() {
                        return A.current
                    }, []);
                r.useImperativeHandle(e, function() {
                    return {
                        createConfetti: F,
                        addConfetti: V,
                        deleteConfetti: M,
                        clearConfetti: U,
                        getCanvas: I
                    }
                }, [F, V, M, U, I]);
                var D = r.useCallback(function(t, e) {
                        var n, r, i = e.clickHandler,
                            o = e.mouseHandler;
                        if (null != i || null != o) {
                            var c = null === (n = A.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != c) {
                                var l = function(t, e) {
                                    if (null == e) throw Error("element should not be null");
                                    var n = e.getBoundingClientRect();
                                    return {
                                        x: t.clientX - n.left,
                                        y: t.clientY - n.top
                                    }
                                }(t, A.current);
                                if (u(l, {
                                        x: c.left,
                                        y: c.top,
                                        width: c.width,
                                        height: c.height
                                    })) {
                                    if (null != o) return o(t);
                                    if (null != i) {
                                        var s = -1e3 / _.current * 2,
                                            f = function(t, e) {
                                                for (var n = 0, r = Array.from(t.values()); n < r.length; n++) {
                                                    var i = r[n];
                                                    if (null != i && e(i)) return i
                                                }
                                                return null
                                            }(k.current, function(t) {
                                                var e = t.confetti,
                                                    n = e.previewPositionUpdate(a, s);
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
                    }, [a]),
                    T = r.useCallback(function(t) {
                        return D(t, {
                            clickHandler: c
                        })
                    }, [D, c]),
                    H = r.useCallback(function(t) {
                        return D(t, {
                            clickHandler: f
                        })
                    }, [D, f]),
                    N = r.useCallback(function(t) {
                        return D(t, {
                            mouseHandler: h
                        })
                    }, [D, h]),
                    B = r.useCallback(function(t) {
                        return D(t, {
                            mouseHandler: d
                        })
                    }, [D, d]);
                return r.useEffect(function() {
                    var t = function(t, e, n) {
                        null != n && window.addEventListener(t, e)
                    };
                    return t("click", T, c), t("mousedown", H, f), t("mousemove", N, h), t("mouseup", B, d),
                        function() {
                            window.removeEventListener("click", T), window.removeEventListener("mousedown", H), window.removeEventListener("mousemove", N), window.removeEventListener("mouseup", N)
                        }
                }, [T, H, N, B, c, f, h, d]), r.useEffect(function() {
                    var t = A.current,
                        e = new ResizeObserver(function() {
                            ! function(t) {
                                if (null != t) {
                                    var e = t.getBoundingClientRect(),
                                        r = e.width,
                                        i = e.height;
                                    t.width = r * n.g.devicePixelRatio, t.height = i * n.g.devicePixelRatio
                                }
                            }(A.current)
                        });
                    return null != t && e.observe(t),
                        function() {
                            null != t && e.unobserve(t)
                        }
                }, []), r.createElement("canvas", p({}, z, {
                    className: o,
                    ref: A
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
            var k = r.forwardRef(function(t, e) {
                var n, o = t.className,
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
                                var o = f * i + 2 * i,
                                    a = h * n + 2 * n;
                                if (e.drawImage(t.image, o, a, f, h), null != r) {
                                    for (var u, c, l = e.getImageData(o, a, f, h), s = ("#" === (u = r)[0] && (u = u.slice(1)), {
                                            r: (c = parseInt(u, 16)) >> 16 & 255,
                                            g: c >> 8 & 255,
                                            b: 255 & c
                                        }), d = 0; d < l.data.length; d += 4) l.data[d] = s.r, l.data[d + 1] = s.g, l.data[d + 2] = s.b;
                                    e.putImageData(l, o, a)
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
                    b = r.useCallback(function() {
                        var t, e, n, r;
                        return t = void 0, e = void 0, n = void 0, r = function() {
                            return function(t, e) {
                                var n, r, i, o, a = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & i[0]) throw i[1];
                                        return i[1]
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
                                    return function(c) {
                                        return function(u) {
                                            if (n) throw TypeError("Generator is already executing.");
                                            for (; o && (o = 0, u[0] && (a = 0)), a;) try {
                                                if (n = 1, r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) return i;
                                                switch (r = 0, i && (u = [2 & u[0], i.value]), u[0]) {
                                                    case 0:
                                                    case 1:
                                                        i = u;
                                                        break;
                                                    case 4:
                                                        return a.label++, {
                                                            value: u[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        a.label++, r = u[1], u = [0];
                                                        continue;
                                                    case 7:
                                                        u = a.ops.pop(), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                                            a = 0;
                                                            continue
                                                        }
                                                        if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                                                            a.label = u[1];
                                                            break
                                                        }
                                                        if (6 === u[0] && a.label < i[1]) {
                                                            a.label = i[1], i = u;
                                                            break
                                                        }
                                                        if (i && a.label < i[2]) {
                                                            a.label = i[2], a.ops.push(u);
                                                            break
                                                        }
                                                        i[2] && a.ops.pop(), a.trys.pop();
                                                        continue
                                                }
                                                u = e.call(t, a)
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
                        }, new(n || (n = Promise))(function(i, o) {
                            function a(t) {
                                try {
                                    c(r.next(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function u(t) {
                                try {
                                    c(r.throw(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function c(t) {
                                var e;
                                t.done ? i(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                                    t(e)
                                })).then(a, u)
                            }
                            c((r = r.apply(t, e || [])).next())
                        })
                    }, [w, m, g]);
                return r.useEffect(function() {
                    b()
                }, [b]), r.useEffect(function() {
                    return function() {
                        return w(!1)
                    }
                }, [w]), r.useEffect(function() {
                    null != d.current && (d.current.width = (f + 2) * Math.max(s.length, 1), d.current.height = (h + 2) * l.length)
                }, [s.length, h, f, l.length]), r.createElement("canvas", {
                    ref: d,
                    className: a(o, ((n = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !c, n))
                })
            });

            function E(t, e) {
                var n, i = r.useState(null !== (n = null == e ? void 0 : e.isReady) && void 0 !== n && n),
                    o = i[0],
                    a = i[1];
                r.useEffect(function() {
                    var t = null == e ? void 0 : e.addReadyListener(a);
                    return function() {
                        null != t && (null == e || e.removeReadyListener(t))
                    }
                }, [e]);
                var u = r.useCallback(function(n, r) {
                        var i = void 0 === r ? {} : r,
                            o = i.sprite,
                            a = i.color,
                            u = null == e ? void 0 : e.getCreateData(),
                            c = null == e ? void 0 : e.getCanvas();
                        if (null != c && null != u && 0 !== u.sprites.length) return null == t ? void 0 : t.createConfetti(n, c, u, o, a)
                    }, [t, e]),
                    c = r.useCallback(function(t, e, n) {
                        for (var r = [], i = 0; i < e; i++) {
                            var o = u(t, n);
                            o && r.push(o)
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
                        isReady: o && null != e && null != t
                    }
                }, [l, f, t, u, c, s, o, e])
            }
        },
        238455: function(t, e, n) {
            var r = n("63533"),
                i = n("651558"),
                o = n("349046"),
                a = n("153997"),
                u = n("820458"),
                c = n("663652"),
                l = Object.prototype.hasOwnProperty;
            t.exports = function(t, e) {
                var n = o(t),
                    s = !n && i(t),
                    f = !n && !s && a(t),
                    h = !n && !s && !f && c(t),
                    d = n || s || f || h,
                    p = d ? r(t.length, String) : [],
                    v = p.length;
                for (var y in t)(e || l.call(t, y)) && !(d && ("length" == y || f && ("offset" == y || "parent" == y) || h && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || u(y, v))) && p.push(y);
                return p
            }
        },
        291002: function(t, e, n) {
            var r = n("109633"),
                i = n("261711");
            t.exports = function(t) {
                return i(r(t))
            }
        },
        85722: function(t, e, n) {
            var r = n("616691"),
                i = n("960052"),
                o = n("509492"),
                a = {};
            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
            t.exports = function(t) {
                return o(t) && i(t.length) && !!a[r(t)]
            }
        },
        891183: function(t, e, n) {
            var r = n("356827"),
                i = n("57100"),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!r(t)) return i(t);
                var e = [];
                for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
                return e
            }
        },
        773988: function(t, e, n) {
            var r = n("261711"),
                i = n("211919");
            t.exports = function(t) {
                return r(i(t))
            }
        },
        63533: function(t, e, n) {
            t.exports = function(t, e) {
                for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                return r
            }
        },
        870686: function(t, e, n) {
            t.exports = function(t) {
                return function(e) {
                    return t(e)
                }
            }
        },
        109521: function(t, e, n) {
            var r = n("107327");
            t.exports = function(t, e) {
                return r(e, function(e) {
                    return t[e]
                })
            }
        },
        109633: function(t, e, n) {
            t.exports = function(t, e) {
                var n = -1,
                    r = t.length;
                for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
                return e
            }
        },
        356827: function(t, e, n) {
            var r = Object.prototype;
            t.exports = function(t) {
                var e = t && t.constructor;
                return t === ("function" == typeof e && e.prototype || r)
            }
        },
        57100: function(t, e, n) {
            var r = n("676315")(Object.keys, Object);
            t.exports = r
        },
        961077: function(t, e, n) {
            t = n.nmd(t);
            var r = n("71890"),
                i = "object" == typeof e && e && !e.nodeType && e,
                o = i && "object" == typeof t && t && !t.nodeType && t,
                a = o && o.exports === i && r.process,
                u = function() {
                    try {
                        var t = o && o.require && o.require("util").types;
                        if (t) return t;
                        return a && a.binding && a.binding("util")
                    } catch (t) {}
                }();
            t.exports = u
        },
        676315: function(t, e, n) {
            t.exports = function(t, e) {
                return function(n) {
                    return t(e(n))
                }
            }
        },
        261711: function(t, e, n) {
            var r = n("54506");
            t.exports = function(t, e) {
                var n = -1,
                    i = t.length,
                    o = i - 1;
                for (e = void 0 === e ? i : e; ++n < e;) {
                    var a = r(n, o),
                        u = t[a];
                    t[a] = t[n], t[n] = u
                }
                return t.length = e, t
            }
        },
        153997: function(t, e, n) {
            t = n.nmd(t);
            var r = n("619146"),
                i = n("108028"),
                o = "object" == typeof e && e && !e.nodeType && e,
                a = o && "object" == typeof t && t && !t.nodeType && t,
                u = a && a.exports === o ? r.Buffer : void 0,
                c = u ? u.isBuffer : void 0;
            t.exports = c || i
        },
        663652: function(t, e, n) {
            var r = n("85722"),
                i = n("870686"),
                o = n("961077"),
                a = o && o.isTypedArray,
                u = a ? i(a) : r;
            t.exports = u
        },
        905269: function(t, e, n) {
            var r = n("238455"),
                i = n("891183"),
                o = n("355653");
            t.exports = function(t) {
                return o(t) ? r(t) : i(t)
            }
        },
        906288: function(t, e, n) {
            var r = n("291002"),
                i = n("773988"),
                o = n("349046");
            t.exports = function(t) {
                return (o(t) ? r : i)(t)
            }
        },
        108028: function(t, e, n) {
            t.exports = function() {
                return !1
            }
        },
        211919: function(t, e, n) {
            var r = n("109521"),
                i = n("905269");
            t.exports = function(t) {
                return null == t ? [] : r(t, i(t))
            }
        },
        212653: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                persist: function() {
                    return s
                }
            });
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var r = Object.defineProperty,
                i = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                a = Object.prototype.propertyIsEnumerable,
                u = (t, e, n) => e in t ? r(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : t[e] = n,
                c = (t, e) => {
                    for (var n in e || (e = {})) o.call(e, n) && u(t, n, e[n]);
                    if (i)
                        for (var n of i(e)) a.call(e, n) && u(t, n, e[n]);
                    return t
                };
            let l = t => e => {
                    try {
                        let n = t(e);
                        if (n instanceof Promise) return n;
                        return {
                            then: t => l(t)(n),
                            catch (t) {
                                return this
                            }
                        }
                    } catch (t) {
                        return {
                            then(t) {
                                return this
                            },
                            catch: e => l(e)(t)
                        }
                    }
                },
                s = (t, e) => (n, r, i) => {
                    let o, a, u = c({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: t => t,
                        version: 0,
                        merge: (t, e) => c(c({}, e), t)
                    }, e);
                    (u.blacklist || u.whitelist) && console.warn("The ".concat(u.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let s = !1,
                        f = new Set,
                        h = new Set;
                    try {
                        o = u.getStorage()
                    } catch (t) {}
                    if (!o) return t(function() {
                        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(u.name, "', the given storage is currently unavailable.")), n(...e)
                    }, r, i);
                    !o.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(u.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let d = l(u.serialize),
                        p = () => {
                            let t;
                            let e = u.partialize(c({}, r()));
                            u.whitelist && Object.keys(e).forEach(t => {
                                var n;
                                (null == (n = u.whitelist) ? void 0 : n.includes(t)) || delete e[t]
                            }), u.blacklist && u.blacklist.forEach(t => delete e[t]);
                            let n = d({
                                state: e,
                                version: u.version
                            }).then(t => o.setItem(u.name, t)).catch(e => {
                                t = e
                            });
                            if (t) throw t;
                            return n
                        },
                        v = i.setState;
                    i.setState = (t, e) => {
                        v(t, e), p()
                    };
                    let y = t(function() {
                            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                            n(...e), p()
                        }, r, i),
                        g = () => {
                            var t;
                            if (!o) return;
                            s = !1, f.forEach(t => t(r()));
                            let e = (null == (t = u.onRehydrateStorage) ? void 0 : t.call(u, r())) || void 0;
                            return l(o.getItem.bind(o))(u.name).then(t => {
                                if (t) return u.deserialize(t)
                            }).then(t => {
                                if (t) {
                                    if ("number" != typeof t.version || t.version === u.version) return t.state;
                                    if (u.migrate) return u.migrate(t.state, t.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(t => {
                                var e;
                                return n(a = u.merge(t, null != (e = r()) ? e : y), !0), p()
                            }).then(() => {
                                null == e || e(a, void 0), s = !0, h.forEach(t => t(a))
                            }).catch(t => {
                                null == e || e(void 0, t)
                            })
                        };
                    return i.persist = {
                        setOptions: t => {
                            u = c(c({}, u), t), t.getStorage && (o = t.getStorage())
                        },
                        clearStorage: () => {
                            var t;
                            null == (t = null == o ? void 0 : o.removeItem) || t.call(o, u.name)
                        },
                        rehydrate: () => g(),
                        hasHydrated: () => s,
                        onHydrate: t => (f.add(t), () => {
                            f.delete(t)
                        }),
                        onFinishHydration: t => (h.add(t), () => {
                            h.delete(t)
                        })
                    }, g(), a || y
                }
        },
        505143: function(t, e, n) {
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
                o = "@ts-pattern/anonymous-select-key",
                a = t => !!(t && "object" == typeof t),
                u = t => t && !!t[r],
                c = (t, e, n) => {
                    if (u(t)) {
                        let i = t[r](),
                            {
                                matched: o,
                                selections: a
                            } = i.match(e);
                        return o && a && Object.keys(a).forEach(t => n(t, a[t])), o
                    }
                    if (a(t)) {
                        if (!a(e)) return !1;
                        if (Array.isArray(t)) {
                            if (!Array.isArray(e)) return !1;
                            let r = [],
                                o = [],
                                a = [];
                            for (let e of t.keys()) {
                                let n = t[e];
                                u(n) && n[i] ? a.push(n) : a.length ? o.push(n) : r.push(n)
                            }
                            if (a.length) {
                                if (a.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (e.length < r.length + o.length) return !1;
                                let t = e.slice(0, r.length),
                                    i = 0 === o.length ? [] : e.slice(-o.length),
                                    u = e.slice(r.length, 0 === o.length ? 1 / 0 : -o.length);
                                return r.every((e, r) => c(e, t[r], n)) && o.every((t, e) => c(t, i[e], n)) && (0 === a.length || c(a[0], u, n))
                            }
                            return t.length === e.length && t.every((t, r) => c(t, e[r], n))
                        }
                        return Object.keys(t).every(i => {
                            let o = t[i];
                            return (i in e || u(o) && "optional" === o[r]().matcherType) && c(o, e[i], n)
                        })
                    }
                    return Object.is(e, t)
                },
                l = t => {
                    var e, n, i;
                    return a(t) ? u(t) ? null != (e = null == (n = (i = t[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? e : [] : Array.isArray(t) ? s(t, l) : s(Object.values(t), l) : []
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
                    a = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
                return f({
                    [r]: () => ({
                        match: t => {
                            let e = {
                                [null != i ? i : o]: t
                            };
                            return {
                                matched: void 0 === a || c(a, t, (t, n) => {
                                    e[t] = n
                                }),
                                selections: e
                            }
                        },
                        getSelectionKeys: () => [null != i ? i : o].concat(void 0 === a ? [] : l(a))
                    })
                })
            }

            function w(t) {
                return "number" == typeof t
            }

            function b(t) {
                return "string" == typeof t
            }

            function x(t) {
                return "bigint" == typeof t
            }
            let C = f(g(function(t) {
                    return !0
                })),
                j = t => Object.assign(f(t), {
                    startsWith: e => j(v(t, g(t => b(t) && t.startsWith(e)))),
                    endsWith: e => j(v(t, g(t => b(t) && t.endsWith(e)))),
                    minLength: e => {
                        var n;
                        return j(v(t, (n = e, g(t => b(t) && t.length >= n))))
                    },
                    maxLength: e => {
                        var n;
                        return j(v(t, (n = e, g(t => b(t) && t.length <= n))))
                    },
                    includes: e => j(v(t, g(t => b(t) && t.includes(e)))),
                    regex: e => j(v(t, g(t => b(t) && !!t.match(e))))
                }),
                z = j(g(b)),
                O = (t, e) => g(n => w(n) && t <= n && e >= n),
                S = t => g(e => w(e) && e < t),
                A = t => g(e => w(e) && e > t),
                k = t => g(e => w(e) && e <= t),
                E = t => g(e => w(e) && e >= t),
                R = () => g(t => w(t) && Number.isInteger(t)),
                _ = () => g(t => w(t) && Number.isFinite(t)),
                P = () => g(t => w(t) && t > 0),
                V = () => g(t => w(t) && t < 0),
                F = t => Object.assign(f(t), {
                    between: (e, n) => F(v(t, O(e, n))),
                    lt: e => F(v(t, S(e))),
                    gt: e => F(v(t, A(e))),
                    lte: e => F(v(t, k(e))),
                    gte: e => F(v(t, E(e))),
                    int: () => F(v(t, R())),
                    finite: () => F(v(t, _())),
                    positive: () => F(v(t, P())),
                    negative: () => F(v(t, V()))
                }),
                M = F(g(w)),
                U = (t, e) => g(n => x(n) && t <= n && e >= n),
                I = t => g(e => x(e) && e < t),
                D = t => g(e => x(e) && e > t),
                T = t => g(e => x(e) && e <= t),
                H = t => g(e => x(e) && e >= t),
                N = () => g(t => x(t) && t > 0),
                B = () => g(t => x(t) && t < 0),
                L = t => Object.assign(f(t), {
                    between: (e, n) => L(v(t, U(e, n))),
                    lt: e => L(v(t, I(e))),
                    gt: e => L(v(t, D(e))),
                    lte: e => L(v(t, T(e))),
                    gte: e => L(v(t, H(e))),
                    positive: () => L(v(t, N())),
                    negative: () => L(v(t, B()))
                }),
                W = L(g(x)),
                K = f(g(function(t) {
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
                                let [o, a] = e;
                                return {
                                    matched: p(t, (t, e) => {
                                        let n = c(o, e, i),
                                            r = c(a, t, i);
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
                string: z,
                between: O,
                lt: S,
                gt: A,
                lte: k,
                gte: E,
                int: R,
                finite: _,
                positive: P,
                negative: V,
                number: M,
                betweenBigInt: U,
                ltBigInt: I,
                gtBigInt: D,
                lteBigInt: T,
                gteBigInt: H,
                positiveBigInt: N,
                negativeBigInt: B,
                bigint: W,
                boolean: K,
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
                        a = [n[0]];
                    3 === n.length && "function" == typeof n[1] ? (a.push(n[0]), t = n[1]) : n.length > 2 && a.push(...n.slice(1, n.length - 1));
                    let u = !1,
                        l = {},
                        s = (t, e) => {
                            u = !0, l[t] = e
                        },
                        f = a.some(t => c(t, this.input, s)) && (!t || t(this.input)) ? {
                            matched: !0,
                            value: i(u ? o in l ? l[o] : l : this.input, this.input)
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
        },
        989901: function(t, e, n) {
            "use strict";
            var r, i;
            n.r(e), n.d(e, {
                ThreadSearchTagSetting: function() {
                    return r
                }
            }), (i = r || (r = {})).MATCH_ALL = "match_all", i.MATCH_SOME = "match_some"
        },
        895393: function(t, e, n) {
            "use strict";

            function r(t) {
                let e = document.body;
                if (null == e) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    r = window.getSelection(),
                    i = document.createElement("textarea");
                i.value = t, i.contentEditable = "true", i.style.visibility = "none", e.appendChild(i), n.selectNodeContents(i), null == r || r.removeAllRanges(), null == r || r.addRange(n), i.focus(), i.setSelectionRange(0, t.length);
                let o = document.execCommand("copy");
                return e.removeChild(i), o
            }
            n.r(e), n.d(e, {
                copy: function() {
                    return r
                }
            })
        }
    }
]);
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["36850"], {
        641900: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ConfettiCanvas: function() {
                    return k
                },
                Environment: function() {
                    return f
                },
                SpriteCanvas: function() {
                    return O
                },
                useConfettiCannon: function() {
                    return V
                }
            });
            var r = n("773670"),
                i = n("462567"),
                o = n("575482"),
                u = n.n(o);

            function a(t, e) {
                var n = t.x,
                    r = t.y;
                return n > e.x && n < e.x + e.width && r > e.y && r < e.y + e.height
            }

            function c(t, e) {
                return t * e * e * (e > 0 ? -1 : 1)
            }
            var s = function() {
                    function t(t) {
                        this.id = t.id, this.position = t.position, this.velocity = t.velocity, this.rotation = t.rotation, this.dragCoefficient = t.dragCoefficient, this.size = t.size, this.opacity = t.opacity, this.spriteX = t.spriteX, this.spriteY = t.spriteY, this.spriteWidth = t.spriteWidth, this.spriteHeight = t.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return t.prototype.getNewForces = function(t, e) {
                        var n, r, i, o, u = t.wind * e,
                            a = -t.gravity * e;
                        return {
                            x: u + (n = this.dragCoefficient.x, n * (r = this.velocity.x) * r * (r > 0 ? -1 : 1)),
                            y: a + (i = this.dragCoefficient.y, i * (o = this.velocity.y) * o * (o > 0 ? -1 : 1))
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
                            u = i.y;
                        r.x += o, r.y += u;
                        var a = this.position.previewUpdate(n);
                        return a.x += r.x * n, a.y += r.y * n, a
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
                l = {
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

            function p(t, e) {
                if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function n() {
                    this.constructor = t
                }
                h(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var d = function() {
                    return (d = Object.assign || function(t) {
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
                    return p(e, t), e.prototype.update = function(e) {
                        t.prototype.update.call(this, e), this._z.update(e)
                    }, e.prototype.previewUpdate = function(e) {
                        var n = t.prototype.previewUpdate.call(this, e);
                        return d(d({}, n), {
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
                x = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return p(e, t), e.prototype.update = function() {}, e.prototype.previewUpdate = function() {
                        return this.value
                    }, e
                }(v),
                m = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.addValue = n, r
                    }
                    return p(e, t), e.prototype.update = function(t) {
                        this.value = this.previewUpdate(t)
                    }, e.prototype.previewUpdate = function(t) {
                        return this.value + this.addValue * t
                    }, e
                }(v),
                w = function(t) {
                    function e(e, n, r, i, o, u) {
                        var a = t.call(this, e) || this;
                        a.min = n, a.max = r, a.duration = i;
                        var c = a.value / (a.max - a.min) * a.duration,
                            s = isNaN(c) ? 0 : c;
                        return a.timePassed = s < 0 ? a.duration - s : s, a.directionMultiplier = o, a.easingFunction = u, a
                    }
                    return p(e, t), e.prototype.update = function(t) {
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

            function j(t) {
                return "number" == typeof t ? {
                    x: t,
                    y: t
                } : t
            }

            function _(t) {
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
                            var e = j(t.value);
                            return new y(new x(e.x), new x(e.y));
                        case "static-random":
                            var n = j(t.minValue),
                                r = j(t.maxValue);
                            return new y(new x(b(n.x, r.x)), new x(b(n.y, r.y)));
                        case "linear":
                            e = j(t.value);
                            var i = j(t.addValue);
                            return new y(new m(e.x, i.x), new m(e.y, i.y));
                        case "linear-random":
                            n = j(t.minValue), r = j(t.maxValue);
                            var o = j(t.minAddValue),
                                u = j(t.maxAddValue);
                            return new y(new m(b(n.x, r.x), b(o.x, u.x)), new m(b(n.y, r.y), b(o.x, u.x)));
                        case "oscillating":
                            e = j(t.value);
                            var a = j(t.start),
                                c = j(t.final),
                                s = j(t.duration),
                                l = j(t.direction);
                            return new y(new w(e.x, a.x, c.x, s.x, l.x, t.easingFunction), new w(e.y, a.y, c.y, s.x, l.y, t.easingFunction));
                        case "oscillating-random":
                            n = j(t.minValue), r = j(t.maxValue);
                            var f = j(t.minStart),
                                h = j(t.maxStart),
                                p = j(t.minFinal),
                                d = j(t.maxFinal),
                                v = j(t.minDuration),
                                g = j(t.maxDuration),
                                _ = j(t.minDirection),
                                R = j(t.maxDirection);
                            return new y(new w(b(n.x, r.x), b(f.x, h.x), b(p.x, d.x), b(v.x, g.x), z(_.x, R.x), C(t.easingFunctions)[0]), new w(b(n.y, r.y), b(f.y, h.y), b(p.y, d.y), b(v.y, g.y), z(_.y, R.y), C(t.easingFunctions)[0]))
                    }
                }(d(d({}, t), {
                    valueType: "Vector2"
                }))
            }
            var k = r.forwardRef(function(t, e) {
                var o = t.className,
                    u = t.environment,
                    c = t.onClick,
                    f = t.onMouseDown,
                    h = t.onMouseMove,
                    p = t.onMouseUp,
                    v = t.onBeforeRender,
                    y = t.onAfterRender,
                    j = function(t, e) {
                        var n = {};
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && 0 > e.indexOf(r) && (n[r] = t[r]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) 0 > e.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]])
                        }
                        return n
                    }(t, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    k = r.useRef(null),
                    O = r.useRef(new Map),
                    V = r.useRef(null),
                    A = r.useRef(0),
                    M = r.useRef(0),
                    F = r.useCallback(function() {
                        var t = k.current;
                        if (null != t) {
                            var e = t.getContext("2d");
                            if (null != e) {
                                e.clearRect(0, 0, t.width, t.height), null == v || v(e), O.current.forEach(function(n, r) {
                                    var i = n.confetti,
                                        o = n.spriteCanvas;
                                    i.update(u), i.draw(o, e), i.shouldDestroy(t, u) && O.current.delete(r)
                                }), null == y || y(e), O.current.size > 0 ? V.current = window.requestAnimationFrame(F) : (e.clearRect(0, 0, t.width, t.height), V.current = null);
                                var n = Date.now();
                                0 !== A.current && (M.current = 1e3 / (n - A.current)), A.current = n
                            }
                        }
                    }, [u, y, v]);
                r.useEffect(function() {
                    null != V.current && (window.cancelAnimationFrame(V.current), V.current = window.requestAnimationFrame(F))
                }, [F]);
                var P = r.useCallback(function(t, e) {
                        O.current.set(t.id, {
                            confetti: t,
                            spriteCanvas: e
                        }), null == V.current && F()
                    }, [F]),
                    E = r.useCallback(function(t, e, n, r, o) {
                        var u, a, c, f, h, p, v, y, j, k, O, V, A, M, F, E = (u = null !== (F = t.id) && void 0 !== F ? F : (0, i.v4)(), a = t, c = n, f = r, h = o, y = R((v = (p = a, d(d({
                            id: u
                        }, l), p))).size), k = (j = function(t, e) {
                            if (null != t) {
                                var n = e.sprites.findIndex(function(e) {
                                    return "string" == typeof t ? e.src === t && e.colorize : e.src === t.src && e.colorize === t.colorize
                                });
                                if (-1 !== n) return [t, n]
                            }
                            return C(e.sprites)
                        }(f, c))[0], O = j[1], V = function(t, e, n) {
                            if (!("string" == typeof(r = t) || r.colorize)) return 0;
                            var r, i = null != e ? n.colors.findIndex(function(t) {
                                return t === e
                            }) : -1;
                            return -1 !== i ? i : Math.floor(b(0, n.colors.length - 1))
                        }(null != f ? f : k, h, c), new s({
                            id: u,
                            position: R(v.position),
                            velocity: R(v.velocity),
                            rotation: (A = v.rotation, function(t) {
                                switch (t.type) {
                                    case "static":
                                        var e = _(t.value);
                                        return new g(new x(e.x), new x(e.y), new x(e.z));
                                    case "static-random":
                                        var n = _(t.minValue),
                                            r = _(t.maxValue);
                                        return new g(new x(b(n.x, r.x)), new x(b(n.y, r.y)), new x(b(n.z, r.z)));
                                    case "linear":
                                        e = _(t.value);
                                        var i = _(t.addValue);
                                        return new g(new m(e.x, i.x), new m(e.y, i.y), new m(e.z, i.z));
                                    case "linear-random":
                                        n = _(t.minValue), r = _(t.maxValue);
                                        var o = _(t.minAddValue),
                                            u = _(t.maxAddValue);
                                        return new g(new m(b(n.x, r.x), b(o.x, u.x)), new m(b(n.y, r.y), b(o.y, u.y)), new m(b(n.z, r.z), b(o.z, u.z)));
                                    case "oscillating":
                                        e = _(t.value);
                                        var a = _(t.start),
                                            c = _(t.final),
                                            s = _(t.duration),
                                            l = _(t.direction);
                                        return new g(new w(e.x, a.x, c.x, s.x, l.x, t.easingFunction), new w(e.y, a.y, c.y, s.z, l.y, t.easingFunction), new w(e.z, a.z, c.z, s.z, l.z, t.easingFunction));
                                    case "oscillating-random":
                                        n = _(t.minValue), r = _(t.maxValue);
                                        var f = _(t.minStart),
                                            h = _(t.maxStart),
                                            p = _(t.minFinal),
                                            d = _(t.maxFinal),
                                            v = _(t.minDuration),
                                            y = _(t.maxDuration),
                                            j = _(t.minDirection),
                                            R = _(t.maxDirection);
                                        return new g(new w(b(n.x, r.x), b(f.x, h.x), b(p.x, d.x), b(v.x, y.x), z(j.x, R.x), C(t.easingFunctions)[0]), new w(b(n.y, r.y), b(f.y, h.y), b(p.y, d.y), b(v.y, y.y), z(j.y, R.y), C(t.easingFunctions)[0]), new w(b(n.z, r.z), b(f.z, h.z), b(p.z, d.z), b(v.z, y.z), z(j.z, R.z), C(t.easingFunctions)[0]))
                                }
                            }(d(d({}, A), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: R(v.dragCoefficient),
                            size: y,
                            opacity: (M = v.opacity, function(t) {
                                switch (t.type) {
                                    case "static":
                                        return new x(t.value);
                                    case "static-random":
                                        return new x(b(t.minValue, t.maxValue));
                                    case "linear":
                                        return new m(t.value, t.addValue);
                                    case "linear-random":
                                        return new m(b(t.minValue, t.maxValue), b(t.minAddValue, t.maxAddValue));
                                    case "oscillating":
                                        return new w(t.value, t.start, t.final, t.duration, t.direction, t.easingFunction);
                                    case "oscillating-random":
                                        return new w(b(t.minValue, t.maxValue), b(t.minStart, t.maxStart), b(t.minFinal, t.maxFinal), b(t.minDuration, t.maxDuration), z(t.minDirection, t.maxDirection), C(t.easingFunctions)[0])
                                }
                            }(d(d({}, M), {
                                valueType: "number"
                            }))),
                            spriteX: V * c.spriteWidth + 2 * V,
                            spriteY: O * c.spriteHeight + 2 * O,
                            spriteWidth: c.spriteWidth,
                            spriteHeight: c.spriteHeight
                        }));
                        return P(E, e), E
                    }, [P]),
                    U = r.useCallback(function(t) {
                        O.current.delete(t)
                    }, []),
                    D = r.useCallback(function() {
                        return O.current.clear()
                    }, []),
                    S = r.useCallback(function() {
                        return k.current
                    }, []);
                r.useImperativeHandle(e, function() {
                    return {
                        createConfetti: E,
                        addConfetti: P,
                        deleteConfetti: U,
                        clearConfetti: D,
                        getCanvas: S
                    }
                }, [E, P, U, D, S]);
                var H = r.useCallback(function(t, e) {
                        var n, r, i = e.clickHandler,
                            o = e.mouseHandler;
                        if (null != i || null != o) {
                            var c = null === (n = k.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != c) {
                                var s = function(t, e) {
                                    if (null == e) throw Error("element should not be null");
                                    var n = e.getBoundingClientRect();
                                    return {
                                        x: t.clientX - n.left,
                                        y: t.clientY - n.top
                                    }
                                }(t, k.current);
                                if (a(s, {
                                        x: c.left,
                                        y: c.top,
                                        width: c.width,
                                        height: c.height
                                    })) {
                                    if (null != o) return o(t);
                                    if (null != i) {
                                        var l = -1e3 / M.current * 2,
                                            f = function(t, e) {
                                                for (var n = 0, r = Array.from(t.values()); n < r.length; n++) {
                                                    var i = r[n];
                                                    if (null != i && e(i)) return i
                                                }
                                                return null
                                            }(O.current, function(t) {
                                                var e = t.confetti,
                                                    n = e.previewPositionUpdate(u, l);
                                                return a(s, {
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
                    }, [u]),
                    N = r.useCallback(function(t) {
                        return H(t, {
                            clickHandler: c
                        })
                    }, [H, c]),
                    I = r.useCallback(function(t) {
                        return H(t, {
                            clickHandler: f
                        })
                    }, [H, f]),
                    T = r.useCallback(function(t) {
                        return H(t, {
                            mouseHandler: h
                        })
                    }, [H, h]),
                    B = r.useCallback(function(t) {
                        return H(t, {
                            mouseHandler: p
                        })
                    }, [H, p]);
                return r.useEffect(function() {
                    var t = function(t, e, n) {
                        null != n && window.addEventListener(t, e)
                    };
                    return t("click", N, c), t("mousedown", I, f), t("mousemove", T, h), t("mouseup", B, p),
                        function() {
                            window.removeEventListener("click", N), window.removeEventListener("mousedown", I), window.removeEventListener("mousemove", T), window.removeEventListener("mouseup", T)
                        }
                }, [N, I, T, B, c, f, h, p]), r.useEffect(function() {
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
                }, []), r.createElement("canvas", d({}, j, {
                    className: o,
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
            var O = r.forwardRef(function(t, e) {
                var n, o = t.className,
                    a = t.visible,
                    c = void 0 !== a && a,
                    s = t.sprites,
                    l = t.colors,
                    f = t.spriteWidth,
                    h = t.spriteHeight,
                    p = r.useRef(null),
                    d = r.useRef([]),
                    v = r.useRef(!1),
                    y = r.useRef({});
                r.useImperativeHandle(e, function() {
                    return {
                        getCanvas: function() {
                            return p.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: d.current,
                                colors: l,
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
                }, [l, h, f]);
                var g = r.useCallback(function() {
                        var t = p.current,
                            e = null == t ? void 0 : t.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != e && null != t && (e.clearRect(0, 0, t.width, t.height), d.current.forEach(function(t, n) {
                            var r = function(r, i) {
                                var o = f * i + 2 * i,
                                    u = h * n + 2 * n;
                                if (e.drawImage(t.image, o, u, f, h), null != r) {
                                    for (var a, c, s = e.getImageData(o, u, f, h), l = ("#" === (a = r)[0] && (a = a.slice(1)), {
                                            r: (c = parseInt(a, 16)) >> 16 & 255,
                                            g: c >> 8 & 255,
                                            b: 255 & c
                                        }), p = 0; p < s.data.length; p += 4) s.data[p] = l.r, s.data[p + 1] = l.g, s.data[p + 2] = l.b;
                                    e.putImageData(s, o, u)
                                }
                            };
                            t.colorize ? l.forEach(function(t, e) {
                                return r(t, e)
                            }) : r(null, 0)
                        }))
                    }, [l, h, f]),
                    x = r.useCallback(function() {
                        var t = s.map(function(t) {
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
                            d.current = t.map(function(t) {
                                return {
                                    colorize: t.colorize,
                                    image: t.image,
                                    src: t.src
                                }
                            })
                        })
                    }, [s]),
                    m = r.useCallback(function(t) {
                        for (var e in y.current) y.current[e](t)
                    }, []),
                    w = r.useCallback(function() {
                        var t, e, n, r;
                        return t = void 0, e = void 0, n = void 0, r = function() {
                            return function(t, e) {
                                var n, r, i, o, u = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & i[0]) throw i[1];
                                        return i[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return o = {
                                    next: a(0),
                                    throw: a(1),
                                    return: a(2)
                                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                                    return this
                                }), o;

                                function a(a) {
                                    return function(c) {
                                        return function(a) {
                                            if (n) throw TypeError("Generator is already executing.");
                                            for (; o && (o = 0, a[0] && (u = 0)), u;) try {
                                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                                switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                                    case 0:
                                                    case 1:
                                                        i = a;
                                                        break;
                                                    case 4:
                                                        return u.label++, {
                                                            value: a[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        u.label++, r = a[1], a = [0];
                                                        continue;
                                                    case 7:
                                                        a = u.ops.pop(), u.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                            u = 0;
                                                            continue
                                                        }
                                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                            u.label = a[1];
                                                            break
                                                        }
                                                        if (6 === a[0] && u.label < i[1]) {
                                                            u.label = i[1], i = a;
                                                            break
                                                        }
                                                        if (i && u.label < i[2]) {
                                                            u.label = i[2], u.ops.push(a);
                                                            break
                                                        }
                                                        i[2] && u.ops.pop(), u.trys.pop();
                                                        continue
                                                }
                                                a = e.call(t, u)
                                            } catch (t) {
                                                a = [6, t], r = 0
                                            } finally {
                                                n = i = 0
                                            }
                                            if (5 & a[0]) throw a[1];
                                            return {
                                                value: a[0] ? a[1] : void 0,
                                                done: !0
                                            }
                                        }([a, c])
                                    }
                                }
                            }(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, x()];
                                    case 1:
                                        return t.sent(), g(), v.current = !0, m(!0), [2]
                                }
                            })
                        }, new(n || (n = Promise))(function(i, o) {
                            function u(t) {
                                try {
                                    c(r.next(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function a(t) {
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
                                })).then(u, a)
                            }
                            c((r = r.apply(t, e || [])).next())
                        })
                    }, [m, x, g]);
                return r.useEffect(function() {
                    w()
                }, [w]), r.useEffect(function() {
                    return function() {
                        return m(!1)
                    }
                }, [m]), r.useEffect(function() {
                    null != p.current && (p.current.width = (f + 2) * Math.max(l.length, 1), p.current.height = (h + 2) * s.length)
                }, [l.length, h, f, s.length]), r.createElement("canvas", {
                    ref: p,
                    className: u(o, ((n = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !c, n))
                })
            });

            function V(t, e) {
                var n, i = r.useState(null !== (n = null == e ? void 0 : e.isReady) && void 0 !== n && n),
                    o = i[0],
                    u = i[1];
                r.useEffect(function() {
                    var t = null == e ? void 0 : e.addReadyListener(u);
                    return function() {
                        null != t && (null == e || e.removeReadyListener(t))
                    }
                }, [e]);
                var a = r.useCallback(function(n, r) {
                        var i = void 0 === r ? {} : r,
                            o = i.sprite,
                            u = i.color,
                            a = null == e ? void 0 : e.getCreateData(),
                            c = null == e ? void 0 : e.getCanvas();
                        if (null != c && null != a && 0 !== a.sprites.length) return null == t ? void 0 : t.createConfetti(n, c, a, o, u)
                    }, [t, e]),
                    c = r.useCallback(function(t, e, n) {
                        for (var r = [], i = 0; i < e; i++) {
                            var o = a(t, n);
                            o && r.push(o)
                        }
                        return r
                    }, [a]),
                    s = r.useCallback(function(n) {
                        var r = null == e ? void 0 : e.getCanvas();
                        null != r && (null == t || t.addConfetti(n, r))
                    }, [t, e]),
                    l = r.useCallback(function(e) {
                        null == t || t.deleteConfetti(e)
                    }, [t]),
                    f = r.useCallback(function() {
                        return null == t ? void 0 : t.clearConfetti()
                    }, [t]);
                return r.useMemo(function() {
                    return {
                        createConfetti: a,
                        createMultipleConfetti: c,
                        addConfetti: s,
                        clearConfetti: f,
                        deleteConfetti: l,
                        isReady: o && null != e && null != t
                    }
                }, [s, f, t, a, c, l, o, e])
            }
        },
        238455: function(t, e, n) {
            var r = n("63533"),
                i = n("651558"),
                o = n("349046"),
                u = n("153997"),
                a = n("820458"),
                c = n("663652"),
                s = Object.prototype.hasOwnProperty;
            t.exports = function(t, e) {
                var n = o(t),
                    l = !n && i(t),
                    f = !n && !l && u(t),
                    h = !n && !l && !f && c(t),
                    p = n || l || f || h,
                    d = p ? r(t.length, String) : [],
                    v = d.length;
                for (var y in t)(e || s.call(t, y)) && !(p && ("length" == y || f && ("offset" == y || "parent" == y) || h && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || a(y, v))) && d.push(y);
                return d
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
                u = {};
            u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1;
            t.exports = function(t) {
                return o(t) && i(t.length) && !!u[r(t)]
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
                u = o && o.exports === i && r.process,
                a = function() {
                    try {
                        var t = o && o.require && o.require("util").types;
                        if (t) return t;
                        return u && u.binding && u.binding("util")
                    } catch (t) {}
                }();
            t.exports = a
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
                    var u = r(n, o),
                        a = t[u];
                    t[u] = t[n], t[n] = a
                }
                return t.length = e, t
            }
        },
        153997: function(t, e, n) {
            t = n.nmd(t);
            var r = n("619146"),
                i = n("108028"),
                o = "object" == typeof e && e && !e.nodeType && e,
                u = o && "object" == typeof t && t && !t.nodeType && t,
                a = u && u.exports === o ? r.Buffer : void 0,
                c = a ? a.isBuffer : void 0;
            t.exports = c || i
        },
        663652: function(t, e, n) {
            var r = n("85722"),
                i = n("870686"),
                o = n("961077"),
                u = o && o.isTypedArray,
                a = u ? i(u) : r;
            t.exports = a
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
        873101: function(t, e, n) {
            if (!r) var r = {
                map: function(t, e) {
                    var n = {};
                    return e ? t.map(function(t, r) {
                        return n.index = r, e.call(n, t)
                    }) : t.slice()
                },
                naturalOrder: function(t, e) {
                    return t < e ? -1 : t > e ? 1 : 0
                },
                sum: function(t, e) {
                    var n = {};
                    return t.reduce(e ? function(t, r, i) {
                        return n.index = i, t + e.call(n, r)
                    } : function(t, e) {
                        return t + e
                    }, 0)
                },
                max: function(t, e) {
                    return Math.max.apply(null, e ? r.map(t, e) : t)
                }
            };
            var i = function() {
                var t = 3;

                function e(t, e, n) {
                    return (t << 10) + (e << 5) + n
                }

                function n(t) {
                    var e = [],
                        n = !1;

                    function r() {
                        e.sort(t), n = !0
                    }
                    return {
                        push: function(t) {
                            e.push(t), n = !1
                        },
                        peek: function(t) {
                            return !n && r(), void 0 === t && (t = e.length - 1), e[t]
                        },
                        pop: function() {
                            return !n && r(), e.pop()
                        },
                        size: function() {
                            return e.length
                        },
                        map: function(t) {
                            return e.map(t)
                        },
                        debug: function() {
                            return !n && r(), e
                        }
                    }
                }

                function i(t, e, n, r, i, o, u) {
                    this.r1 = t, this.r2 = e, this.g1 = n, this.g2 = r, this.b1 = i, this.b2 = o, this.histo = u
                }

                function o() {
                    this.vboxes = new n(function(t, e) {
                        return r.naturalOrder(t.vbox.count() * t.vbox.volume(), e.vbox.count() * e.vbox.volume())
                    })
                }
                return i.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var n = this.histo;
                        if (!this._count_set || t) {
                            var r, i, o, u = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (o = this.b1; o <= this.b2; o++) u += n[e(r, i, o)] || 0;
                            this._count = u, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var r, i, o, u, a = 0,
                                c = 8,
                                s = 0,
                                l = 0,
                                f = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (o = this.g1; o <= this.g2; o++)
                                    for (u = this.b1; u <= this.b2; u++) a += r = n[e(i, o, u)] || 0, s += r * (i + .5) * c, l += r * (o + .5) * c, f += r * (u + .5) * c;
                            a ? this._avg = [~~(s / a), ~~(l / a), ~~(f / a)] : this._avg = [~~(c * (this.r1 + this.r2 + 1) / 2), ~~(c * (this.g1 + this.g2 + 1) / 2), ~~(c * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(e) {
                        var n = e[0] >> t;
                        return gval = e[1] >> t, bval = e[2] >> t, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, o.prototype = {
                    push: function(t) {
                        this.vboxes.push({
                            vbox: t,
                            color: t.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map(function(t) {
                            return t.color
                        })
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(t) {
                        for (var e = this.vboxes, n = 0; n < e.size(); n++)
                            if (e.peek(n).vbox.contains(t)) return e.peek(n).color;
                        return this.nearest(t)
                    },
                    nearest: function(t) {
                        for (var e, n, r, i = this.vboxes, o = 0; o < i.size(); o++)((n = Math.sqrt(Math.pow(t[0] - i.peek(o).color[0], 2) + Math.pow(t[1] - i.peek(o).color[1], 2) + Math.pow(t[2] - i.peek(o).color[2], 2))) < e || void 0 === e) && (e = n, r = i.peek(o).color);
                        return r
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort(function(t, e) {
                            return r.naturalOrder(r.sum(t.color), r.sum(e.color))
                        });
                        var e = t[0].color;
                        e[0] < 5 && e[1] < 5 && e[2] < 5 && (t[0].color = [0, 0, 0]);
                        var n = t.length - 1,
                            i = t[n].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (t[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(u, a) {
                        if (!u.length || a < 2 || a > 256) return !1;
                        var c, s, l, f, h, p, d, v, y, g, x, m, w, b, C, z, j = (c = u, h = Array(32768), c.forEach(function(n) {
                                l = n[0] >> t, f = n[1] >> t, h[s = e(l, f, n[2] >> t)] = (h[s] || 0) + 1
                            }), h),
                            _ = 0;
                        j.forEach(function() {
                            _++
                        });
                        var R = (p = u, d = j, x = 1e6, m = 0, w = 1e6, b = 0, C = 1e6, z = 0, p.forEach(function(e) {
                                v = e[0] >> t, y = e[1] >> t, g = e[2] >> t, v < x ? x = v : v > m && (m = v), y < w ? w = y : y > b && (b = y), g < C ? C = g : g > z && (z = g)
                            }), new i(x, m, w, b, C, z, d)),
                            k = new n(function(t, e) {
                                return r.naturalOrder(t.count(), e.count())
                            });

                        function O(t, n) {
                            for (var i, o = 1, u = 0; u < 1e3;) {
                                if (!(i = t.pop()).count()) {
                                    t.push(i), u++;
                                    continue
                                }
                                var a = function(t, n) {
                                        if (n.count()) {
                                            var i = n.r2 - n.r1 + 1,
                                                o = n.g2 - n.g1 + 1,
                                                u = n.b2 - n.b1 + 1,
                                                a = r.max([i, o, u]);
                                            if (1 == n.count()) return [n.copy()];
                                            var c, s, l, f, h, p = 0,
                                                d = [],
                                                v = [];
                                            if (a == i)
                                                for (c = n.r1; c <= n.r2; c++) {
                                                    for (f = 0, s = n.g1; s <= n.g2; s++)
                                                        for (l = n.b1; l <= n.b2; l++) f += t[h = e(c, s, l)] || 0;
                                                    p += f, d[c] = p
                                                } else if (a == o)
                                                    for (c = n.g1; c <= n.g2; c++) {
                                                        for (f = 0, s = n.r1; s <= n.r2; s++)
                                                            for (l = n.b1; l <= n.b2; l++) f += t[h = e(s, c, l)] || 0;
                                                        p += f, d[c] = p
                                                    } else
                                                        for (c = n.b1; c <= n.b2; c++) {
                                                            for (f = 0, s = n.r1; s <= n.r2; s++)
                                                                for (l = n.g1; l <= n.g2; l++) f += t[h = e(s, l, c)] || 0;
                                                            p += f, d[c] = p
                                                        }
                                            return d.forEach(function(t, e) {
                                                v[e] = p - t
                                            }), y(a == i ? "r" : a == o ? "g" : "b")
                                        }

                                        function y(t) {
                                            var e, r, i, o, u, a = t + "1",
                                                s = t + "2",
                                                l = 0;
                                            for (c = n[a]; c <= n[s]; c++)
                                                if (d[c] > p / 2) {
                                                    for (i = n.copy(), o = n.copy(), e = c - n[a], u = e <= (r = n[s] - c) ? Math.min(n[s] - 1, ~~(c + r / 2)) : Math.max(n[a], ~~(c - 1 - e / 2)); !d[u];) u++;
                                                    for (l = v[u]; !l && d[u - 1];) l = v[--u];
                                                    return i[s] = u, o[a] = i[s] + 1, [i, o]
                                                }
                                        }
                                    }(j, i),
                                    c = a[0],
                                    s = a[1];
                                if (!c) return;
                                if (t.push(c), s && (t.push(s), o++), o >= n || u++ > 1e3) return
                            }
                        }
                        k.push(R), O(k, .75 * a);
                        for (var V = new n(function(t, e) {
                                return r.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
                            }); k.size();) V.push(k.pop());
                        O(V, a - V.size());
                        for (var A = new o; V.size();) A.push(V.pop());
                        return A
                    }
                }
            }();
            t.exports = i.quantize
        },
        962429: function(t, e, n) {
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
        365444: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return i.default
                },
                useLazyValue: function() {
                    return o.default
                }
            });
            var r = n("732427"),
                i = n("866490"),
                o = n("246105")
        },
        732427: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var r = n("773670");

            function i() {
                let [, t] = (0, r.useState)({});
                return (0, r.useCallback)(() => t({}), [])
            }
        },
        246105: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("773670");
            let i = {};

            function o(t) {
                let e = (0, r.useRef)(i);
                return e.current === i && (e.current = t()), e.current
            }
        },
        866490: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = n("773670"),
                i = n("962429");
            let o = [];

            function u(t, e) {
                let n = (0, r.useRef)(),
                    u = (0, r.useRef)(o);
                return u.current === o ? (n.current = t(), u.current = e) : !(0, i.default)(e, u.current) && (n.current = t(), u.current = e), n.current
            }
        },
        709173: function(t, e, n) {
            "use strict";
            var r = n("865768");
            e.createRoot = r.createRoot, e.hydrateRoot = r.hydrateRoot
        }
    }
]);
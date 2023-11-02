(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["59881"], {
        78349: function(t, e, n) {
            "use strict";
            t.exports.parse = function(t) {
                var e = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!e) return null;
                e.shift();
                var n = null,
                    r = [];
                e[2] && (n = (a = e[2].split("-")).shift(), r = a);
                var i = [];
                e[5] && (i = e[5].split("-")).shift();
                var o = [];
                if (e[6]) {
                    (a = e[6].split("-")).shift();
                    for (var a, u, s = []; a.length;) {
                        var c = a.shift();
                        1 === c.length ? u ? (o.push({
                            singleton: u,
                            extension: s
                        }), u = c, s = []) : u = c : s.push(c)
                    }
                    o.push({
                        singleton: u,
                        extension: s
                    })
                }
                var l = [];
                e[7] && ((l = e[7].split("-")).shift(), l.shift());
                var f = [];
                return e[8] && (f = e[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: r
                        },
                        script: e[3] || null,
                        region: e[4] || null,
                        variant: i,
                        extension: o,
                        privateuse: l
                    },
                    privateuse: f,
                    grandfathered: {
                        irregular: e[0] || null,
                        regular: e[1] || null
                    }
                }
            }
        },
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
                    return _
                }
            });
            var r = n("884691"),
                i = n("748820"),
                o = n("414456"),
                a = n.n(o);

            function u(t, e) {
                var n = t.x,
                    r = t.y;
                return n > e.x && n < e.x + e.width && r > e.y && r < e.y + e.height
            }

            function s(t, e) {
                return t * e * e * (e > 0 ? -1 : 1)
            }
            var c = function() {
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
                    function e(e, n, r, i, o, a) {
                        var u = t.call(this, e) || this;
                        u.min = n, u.max = r, u.duration = i;
                        var s = u.value / (u.max - u.min) * u.duration,
                            c = isNaN(s) ? 0 : s;
                        return u.timePassed = c < 0 ? u.duration - c : c, u.directionMultiplier = o, u.easingFunction = a, u
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

            function b(t, e) {
                return t === e ? t : Math.random() * (e - t + 1) + t
            }

            function z(t) {
                var e = Math.floor(b(0, t.length - 1));
                return [t[e], e]
            }

            function C(t, e) {
                return z([t, e])[0]
            }

            function O(t) {
                return "number" == typeof t ? {
                    x: t,
                    y: t
                } : t
            }

            function R(t) {
                return "number" == typeof t ? {
                    x: t,
                    y: t,
                    z: t
                } : t
            }

            function k(t) {
                return function(t) {
                    switch (t.type) {
                        case "static":
                            var e = O(t.value);
                            return new y(new m(e.x), new m(e.y));
                        case "static-random":
                            var n = O(t.minValue),
                                r = O(t.maxValue);
                            return new y(new m(b(n.x, r.x)), new m(b(n.y, r.y)));
                        case "linear":
                            e = O(t.value);
                            var i = O(t.addValue);
                            return new y(new w(e.x, i.x), new w(e.y, i.y));
                        case "linear-random":
                            n = O(t.minValue), r = O(t.maxValue);
                            var o = O(t.minAddValue),
                                a = O(t.maxAddValue);
                            return new y(new w(b(n.x, r.x), b(o.x, a.x)), new w(b(n.y, r.y), b(o.x, a.x)));
                        case "oscillating":
                            e = O(t.value);
                            var u = O(t.start),
                                s = O(t.final),
                                c = O(t.duration),
                                l = O(t.direction);
                            return new y(new x(e.x, u.x, s.x, c.x, l.x, t.easingFunction), new x(e.y, u.y, s.y, c.x, l.y, t.easingFunction));
                        case "oscillating-random":
                            n = O(t.minValue), r = O(t.maxValue);
                            var f = O(t.minStart),
                                h = O(t.maxStart),
                                d = O(t.minFinal),
                                p = O(t.maxFinal),
                                v = O(t.minDuration),
                                g = O(t.maxDuration),
                                R = O(t.minDirection),
                                k = O(t.maxDirection);
                            return new y(new x(b(n.x, r.x), b(f.x, h.x), b(d.x, p.x), b(v.x, g.x), C(R.x, k.x), z(t.easingFunctions)[0]), new x(b(n.y, r.y), b(f.y, h.y), b(d.y, p.y), b(v.y, g.y), C(R.y, k.y), z(t.easingFunctions)[0]))
                    }
                }(p(p({}, t), {
                    valueType: "Vector2"
                }))
            }
            var S = r.forwardRef(function(t, e) {
                var o = t.className,
                    a = t.environment,
                    s = t.onClick,
                    f = t.onMouseDown,
                    h = t.onMouseMove,
                    d = t.onMouseUp,
                    v = t.onBeforeRender,
                    y = t.onAfterRender,
                    O = function(t, e) {
                        var n = {};
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && 0 > e.indexOf(r) && (n[r] = t[r]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) 0 > e.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]])
                        }
                        return n
                    }(t, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    S = r.useRef(null),
                    E = r.useRef(new Map),
                    _ = r.useRef(null),
                    A = r.useRef(0),
                    F = r.useRef(0),
                    M = r.useCallback(function() {
                        var t = S.current;
                        if (null != t) {
                            var e = t.getContext("2d");
                            if (null != e) {
                                e.clearRect(0, 0, t.width, t.height), null == v || v(e), E.current.forEach(function(n, r) {
                                    var i = n.confetti,
                                        o = n.spriteCanvas;
                                    i.update(a), i.draw(o, e), i.shouldDestroy(t, a) && E.current.delete(r)
                                }), null == y || y(e), E.current.size > 0 ? _.current = window.requestAnimationFrame(M) : (e.clearRect(0, 0, t.width, t.height), _.current = null);
                                var n = Date.now();
                                0 !== A.current && (F.current = 1e3 / (n - A.current)), A.current = n
                            }
                        }
                    }, [a, y, v]);
                r.useEffect(function() {
                    null != _.current && (window.cancelAnimationFrame(_.current), _.current = window.requestAnimationFrame(M))
                }, [M]);
                var D = r.useCallback(function(t, e) {
                        E.current.set(t.id, {
                            confetti: t,
                            spriteCanvas: e
                        }), null == _.current && M()
                    }, [M]),
                    V = r.useCallback(function(t, e, n, r, o) {
                        var a, u, s, f, h, d, v, y, O, S, E, _, A, F, M, V = (a = null !== (M = t.id) && void 0 !== M ? M : (0, i.v4)(), u = t, s = n, f = r, h = o, y = k((v = (d = u, p(p({
                            id: a
                        }, l), d))).size), S = (O = function(t, e) {
                            if (null != t) {
                                var n = e.sprites.findIndex(function(e) {
                                    return "string" == typeof t ? e.src === t && e.colorize : e.src === t.src && e.colorize === t.colorize
                                });
                                if (-1 !== n) return [t, n]
                            }
                            return z(e.sprites)
                        }(f, s))[0], E = O[1], _ = function(t, e, n) {
                            if (!("string" == typeof(r = t) || r.colorize)) return 0;
                            var r, i = null != e ? n.colors.findIndex(function(t) {
                                return t === e
                            }) : -1;
                            return -1 !== i ? i : Math.floor(b(0, n.colors.length - 1))
                        }(null != f ? f : S, h, s), new c({
                            id: a,
                            position: k(v.position),
                            velocity: k(v.velocity),
                            rotation: (A = v.rotation, function(t) {
                                switch (t.type) {
                                    case "static":
                                        var e = R(t.value);
                                        return new g(new m(e.x), new m(e.y), new m(e.z));
                                    case "static-random":
                                        var n = R(t.minValue),
                                            r = R(t.maxValue);
                                        return new g(new m(b(n.x, r.x)), new m(b(n.y, r.y)), new m(b(n.z, r.z)));
                                    case "linear":
                                        e = R(t.value);
                                        var i = R(t.addValue);
                                        return new g(new w(e.x, i.x), new w(e.y, i.y), new w(e.z, i.z));
                                    case "linear-random":
                                        n = R(t.minValue), r = R(t.maxValue);
                                        var o = R(t.minAddValue),
                                            a = R(t.maxAddValue);
                                        return new g(new w(b(n.x, r.x), b(o.x, a.x)), new w(b(n.y, r.y), b(o.y, a.y)), new w(b(n.z, r.z), b(o.z, a.z)));
                                    case "oscillating":
                                        e = R(t.value);
                                        var u = R(t.start),
                                            s = R(t.final),
                                            c = R(t.duration),
                                            l = R(t.direction);
                                        return new g(new x(e.x, u.x, s.x, c.x, l.x, t.easingFunction), new x(e.y, u.y, s.y, c.z, l.y, t.easingFunction), new x(e.z, u.z, s.z, c.z, l.z, t.easingFunction));
                                    case "oscillating-random":
                                        n = R(t.minValue), r = R(t.maxValue);
                                        var f = R(t.minStart),
                                            h = R(t.maxStart),
                                            d = R(t.minFinal),
                                            p = R(t.maxFinal),
                                            v = R(t.minDuration),
                                            y = R(t.maxDuration),
                                            O = R(t.minDirection),
                                            k = R(t.maxDirection);
                                        return new g(new x(b(n.x, r.x), b(f.x, h.x), b(d.x, p.x), b(v.x, y.x), C(O.x, k.x), z(t.easingFunctions)[0]), new x(b(n.y, r.y), b(f.y, h.y), b(d.y, p.y), b(v.y, y.y), C(O.y, k.y), z(t.easingFunctions)[0]), new x(b(n.z, r.z), b(f.z, h.z), b(d.z, p.z), b(v.z, y.z), C(O.z, k.z), z(t.easingFunctions)[0]))
                                }
                            }(p(p({}, A), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: k(v.dragCoefficient),
                            size: y,
                            opacity: (F = v.opacity, function(t) {
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
                                        return new x(b(t.minValue, t.maxValue), b(t.minStart, t.maxStart), b(t.minFinal, t.maxFinal), b(t.minDuration, t.maxDuration), C(t.minDirection, t.maxDirection), z(t.easingFunctions)[0])
                                }
                            }(p(p({}, F), {
                                valueType: "number"
                            }))),
                            spriteX: _ * s.spriteWidth + 2 * _,
                            spriteY: E * s.spriteHeight + 2 * E,
                            spriteWidth: s.spriteWidth,
                            spriteHeight: s.spriteHeight
                        }));
                        return D(V, e), V
                    }, [D]),
                    P = r.useCallback(function(t) {
                        E.current.delete(t)
                    }, []),
                    N = r.useCallback(function() {
                        return E.current.clear()
                    }, []),
                    j = r.useCallback(function() {
                        return S.current
                    }, []);
                r.useImperativeHandle(e, function() {
                    return {
                        createConfetti: V,
                        addConfetti: D,
                        deleteConfetti: P,
                        clearConfetti: N,
                        getCanvas: j
                    }
                }, [V, D, P, N, j]);
                var U = r.useCallback(function(t, e) {
                        var n, r, i = e.clickHandler,
                            o = e.mouseHandler;
                        if (null != i || null != o) {
                            var s = null === (n = S.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != s) {
                                var c = function(t, e) {
                                    if (null == e) throw Error("element should not be null");
                                    var n = e.getBoundingClientRect();
                                    return {
                                        x: t.clientX - n.left,
                                        y: t.clientY - n.top
                                    }
                                }(t, S.current);
                                if (u(c, {
                                        x: s.left,
                                        y: s.top,
                                        width: s.width,
                                        height: s.height
                                    })) {
                                    if (null != o) return o(t);
                                    if (null != i) {
                                        var l = -1e3 / F.current * 2,
                                            f = function(t, e) {
                                                for (var n = 0, r = Array.from(t.values()); n < r.length; n++) {
                                                    var i = r[n];
                                                    if (null != i && e(i)) return i
                                                }
                                                return null
                                            }(E.current, function(t) {
                                                var e = t.confetti,
                                                    n = e.previewPositionUpdate(a, l);
                                                return u(c, {
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
                    I = r.useCallback(function(t) {
                        return U(t, {
                            clickHandler: s
                        })
                    }, [U, s]),
                    T = r.useCallback(function(t) {
                        return U(t, {
                            clickHandler: f
                        })
                    }, [U, f]),
                    B = r.useCallback(function(t) {
                        return U(t, {
                            mouseHandler: h
                        })
                    }, [U, h]),
                    L = r.useCallback(function(t) {
                        return U(t, {
                            mouseHandler: d
                        })
                    }, [U, d]);
                return r.useEffect(function() {
                    var t = function(t, e, n) {
                        null != n && window.addEventListener(t, e)
                    };
                    return t("click", I, s), t("mousedown", T, f), t("mousemove", B, h), t("mouseup", L, d),
                        function() {
                            window.removeEventListener("click", I), window.removeEventListener("mousedown", T), window.removeEventListener("mousemove", B), window.removeEventListener("mouseup", B)
                        }
                }, [I, T, B, L, s, f, h, d]), r.useEffect(function() {
                    var t = S.current,
                        e = new ResizeObserver(function() {
                            ! function(t) {
                                if (null != t) {
                                    var e = t.getBoundingClientRect(),
                                        r = e.width,
                                        i = e.height;
                                    t.width = r * n.g.devicePixelRatio, t.height = i * n.g.devicePixelRatio
                                }
                            }(S.current)
                        });
                    return null != t && e.observe(t),
                        function() {
                            null != t && e.unobserve(t)
                        }
                }, []), r.createElement("canvas", p({}, O, {
                    className: o,
                    ref: S
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
            var E = r.forwardRef(function(t, e) {
                var n, o = t.className,
                    u = t.visible,
                    s = void 0 !== u && u,
                    c = t.sprites,
                    l = t.colors,
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
                        var t = d.current,
                            e = null == t ? void 0 : t.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != e && null != t && (e.clearRect(0, 0, t.width, t.height), p.current.forEach(function(t, n) {
                            var r = function(r, i) {
                                var o = f * i + 2 * i,
                                    a = h * n + 2 * n;
                                if (e.drawImage(t.image, o, a, f, h), null != r) {
                                    for (var u, s, c = e.getImageData(o, a, f, h), l = ("#" === (u = r)[0] && (u = u.slice(1)), {
                                            r: (s = parseInt(u, 16)) >> 16 & 255,
                                            g: s >> 8 & 255,
                                            b: 255 & s
                                        }), d = 0; d < c.data.length; d += 4) c.data[d] = l.r, c.data[d + 1] = l.g, c.data[d + 2] = l.b;
                                    e.putImageData(c, o, a)
                                }
                            };
                            t.colorize ? l.forEach(function(t, e) {
                                return r(t, e)
                            }) : r(null, 0)
                        }))
                    }, [l, h, f]),
                    m = r.useCallback(function() {
                        var t = c.map(function(t) {
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
                    }, [c]),
                    w = r.useCallback(function(t) {
                        for (var e in y.current) y.current[e](t)
                    }, []),
                    x = r.useCallback(function() {
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
                                    return function(s) {
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
                                        }([u, s])
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
                                    s(r.next(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function u(t) {
                                try {
                                    s(r.throw(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function s(t) {
                                var e;
                                t.done ? i(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                                    t(e)
                                })).then(a, u)
                            }
                            s((r = r.apply(t, e || [])).next())
                        })
                    }, [w, m, g]);
                return r.useEffect(function() {
                    x()
                }, [x]), r.useEffect(function() {
                    return function() {
                        return w(!1)
                    }
                }, [w]), r.useEffect(function() {
                    null != d.current && (d.current.width = (f + 2) * Math.max(l.length, 1), d.current.height = (h + 2) * c.length)
                }, [l.length, h, f, c.length]), r.createElement("canvas", {
                    ref: d,
                    className: a(o, ((n = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !s, n))
                })
            });

            function _(t, e) {
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
                            s = null == e ? void 0 : e.getCanvas();
                        if (null != s && null != u && 0 !== u.sprites.length) return null == t ? void 0 : t.createConfetti(n, s, u, o, a)
                    }, [t, e]),
                    s = r.useCallback(function(t, e, n) {
                        for (var r = [], i = 0; i < e; i++) {
                            var o = u(t, n);
                            o && r.push(o)
                        }
                        return r
                    }, [u]),
                    c = r.useCallback(function(n) {
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
                        createConfetti: u,
                        createMultipleConfetti: s,
                        addConfetti: c,
                        clearConfetti: f,
                        deleteConfetti: l,
                        isReady: o && null != e && null != t
                    }
                }, [c, f, t, u, s, l, o, e])
            }
        },
        979897: function(t, e, n) {
            t = n.nmd(t);
            var r = r || function(t) {
                "use strict";
                if (!("undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
                    var e = t.document,
                        n = function() {
                            return t.URL || t.webkitURL || t
                        },
                        r = e.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                        i = "download" in r,
                        o = function(t) {
                            var e = new MouseEvent("click");
                            t.dispatchEvent(e)
                        },
                        a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                        u = t.webkitRequestFileSystem,
                        s = t.requestFileSystem || u || t.mozRequestFileSystem,
                        c = function(e) {
                            (t.setImmediate || t.setTimeout)(function() {
                                throw e
                            }, 0)
                        },
                        l = "application/octet-stream",
                        f = 0,
                        h = function(t) {
                            setTimeout(function() {
                                "string" == typeof t ? n().revokeObjectURL(t) : t.remove()
                            }, 4e4)
                        },
                        d = function(t, e, n) {
                            for (var r = (e = [].concat(e)).length; r--;) {
                                var i = t["on" + e[r]];
                                if ("function" == typeof i) try {
                                    i.call(t, n || t)
                                } catch (t) {
                                    c(t)
                                }
                            }
                        },
                        p = function(t) {
                            return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob(["\xef\xbb\xbf", t], {
                                type: t.type
                            }) : t
                        },
                        v = function(e, c, v) {
                            !v && (e = p(e));
                            var y, g, m = this,
                                w = e.type,
                                x = !1,
                                b = function() {
                                    d(m, "writestart progress write writeend".split(" "))
                                },
                                z = function() {
                                    if (g && a && "undefined" != typeof FileReader) {
                                        var r = new FileReader;
                                        r.onloadend = function() {
                                            var t = r.result;
                                            g.location.href = "data:attachment/file" + t.slice(t.search(/[,;]/)), m.readyState = m.DONE, b()
                                        }, r.readAsDataURL(e), m.readyState = m.INIT;
                                        return
                                    }(x || !y) && (y = n().createObjectURL(e)), g ? g.location.href = y : void 0 === t.open(y, "_blank") && a && (t.location.href = y), m.readyState = m.DONE, b(), h(y)
                                },
                                C = function(t) {
                                    return function() {
                                        if (m.readyState !== m.DONE) return t.apply(this, arguments)
                                    }
                                },
                                O = {
                                    create: !0,
                                    exclusive: !1
                                };
                            if (m.readyState = m.INIT, !c && (c = "download"), i) {
                                y = n().createObjectURL(e), setTimeout(function() {
                                    r.href = y, r.download = c, o(r), b(), h(y), m.readyState = m.DONE
                                });
                                return
                            }
                            if (t.chrome && w && w !== l && (e = (e.slice || e.webkitSlice).call(e, 0, e.size, l), x = !0), u && "download" !== c && (c += ".download"), (w === l || u) && (g = t), !s) {
                                z();
                                return
                            }
                            f += e.size, s(t.TEMPORARY, f, C(function(t) {
                                t.root.getDirectory("saved", O, C(function(t) {
                                    var n = function() {
                                        t.getFile(c, O, C(function(t) {
                                            t.createWriter(C(function(n) {
                                                n.onwriteend = function(e) {
                                                    g.location.href = t.toURL(), m.readyState = m.DONE, d(m, "writeend", e), h(t)
                                                }, n.onerror = function() {
                                                    var t = n.error;
                                                    t.code !== t.ABORT_ERR && z()
                                                }, "writestart progress write abort".split(" ").forEach(function(t) {
                                                    n["on" + t] = m["on" + t]
                                                }), n.write(e), m.abort = function() {
                                                    n.abort(), m.readyState = m.DONE
                                                }, m.readyState = m.WRITING
                                            }), z)
                                        }), z)
                                    };
                                    t.getFile(c, {
                                        create: !1
                                    }, C(function(t) {
                                        t.remove(), n()
                                    }), C(function(t) {
                                        t.code === t.NOT_FOUND_ERR ? n() : z()
                                    }))
                                }), z)
                            }), z)
                        },
                        y = v.prototype;
                    return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(t, e, n) {
                        return !n && (t = p(t)), navigator.msSaveOrOpenBlob(t, e || "download")
                    } : (y.abort = function() {
                        this.readyState = this.DONE, d(this, "abort")
                    }, y.readyState = y.INIT = 0, y.WRITING = 1, y.DONE = 2, y.error = y.onwritestart = y.onprogress = y.onwrite = y.onabort = y.onerror = y.onwriteend = null, function(t, e, n) {
                        return new v(t, e, n)
                    })
                }
            }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
            void 0 !== t && t.exports ? t.exports.saveAs = r : "undefined" != typeof define && null !== define && null !== define.amd && define([], function() {
                return r
            })
        },
        448105: function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                var n = e.length,
                    r = t.length;
                if (r > n) return !1;
                if (r === n) return t === e;
                t: for (var i = 0, o = 0; i < r; i++) {
                    for (var a = t.charCodeAt(i); o < n;)
                        if (e.charCodeAt(o++) === a) continue t;
                    return !1
                }
                return !0
            }
        },
        48648: function(t, e, n) {
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

                function i(t, e, n, r, i, o, a) {
                    this.r1 = t, this.r2 = e, this.g1 = n, this.g2 = r, this.b1 = i, this.b2 = o, this.histo = a
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
                            var r, i, o, a = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (o = this.b1; o <= this.b2; o++) a += n[e(r, i, o)] || 0;
                            this._count = a, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var r, i, o, a, u = 0,
                                s = 8,
                                c = 0,
                                l = 0,
                                f = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (o = this.g1; o <= this.g2; o++)
                                    for (a = this.b1; a <= this.b2; a++) u += r = n[e(i, o, a)] || 0, c += r * (i + .5) * s, l += r * (o + .5) * s, f += r * (a + .5) * s;
                            u ? this._avg = [~~(c / u), ~~(l / u), ~~(f / u)] : this._avg = [~~(s * (this.r1 + this.r2 + 1) / 2), ~~(s * (this.g1 + this.g2 + 1) / 2), ~~(s * (this.b1 + this.b2 + 1) / 2)]
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
                    quantize: function(a, u) {
                        if (!a.length || u < 2 || u > 256) return !1;
                        var s, c, l, f, h, d, p, v, y, g, m, w, x, b, z, C, O = (s = a, h = Array(32768), s.forEach(function(n) {
                                l = n[0] >> t, f = n[1] >> t, h[c = e(l, f, n[2] >> t)] = (h[c] || 0) + 1
                            }), h),
                            R = 0;
                        O.forEach(function() {
                            R++
                        });
                        var k = (d = a, p = O, m = 1e6, w = 0, x = 1e6, b = 0, z = 1e6, C = 0, d.forEach(function(e) {
                                v = e[0] >> t, y = e[1] >> t, g = e[2] >> t, v < m ? m = v : v > w && (w = v), y < x ? x = y : y > b && (b = y), g < z ? z = g : g > C && (C = g)
                            }), new i(m, w, x, b, z, C, p)),
                            S = new n(function(t, e) {
                                return r.naturalOrder(t.count(), e.count())
                            });

                        function E(t, n) {
                            for (var i, o = 1, a = 0; a < 1e3;) {
                                if (!(i = t.pop()).count()) {
                                    t.push(i), a++;
                                    continue
                                }
                                var u = function(t, n) {
                                        if (n.count()) {
                                            var i = n.r2 - n.r1 + 1,
                                                o = n.g2 - n.g1 + 1,
                                                a = n.b2 - n.b1 + 1,
                                                u = r.max([i, o, a]);
                                            if (1 == n.count()) return [n.copy()];
                                            var s, c, l, f, h, d = 0,
                                                p = [],
                                                v = [];
                                            if (u == i)
                                                for (s = n.r1; s <= n.r2; s++) {
                                                    for (f = 0, c = n.g1; c <= n.g2; c++)
                                                        for (l = n.b1; l <= n.b2; l++) f += t[h = e(s, c, l)] || 0;
                                                    d += f, p[s] = d
                                                } else if (u == o)
                                                    for (s = n.g1; s <= n.g2; s++) {
                                                        for (f = 0, c = n.r1; c <= n.r2; c++)
                                                            for (l = n.b1; l <= n.b2; l++) f += t[h = e(c, s, l)] || 0;
                                                        d += f, p[s] = d
                                                    } else
                                                        for (s = n.b1; s <= n.b2; s++) {
                                                            for (f = 0, c = n.r1; c <= n.r2; c++)
                                                                for (l = n.g1; l <= n.g2; l++) f += t[h = e(c, l, s)] || 0;
                                                            d += f, p[s] = d
                                                        }
                                            return p.forEach(function(t, e) {
                                                v[e] = d - t
                                            }), y(u == i ? "r" : u == o ? "g" : "b")
                                        }

                                        function y(t) {
                                            var e, r, i, o, a, u = t + "1",
                                                c = t + "2",
                                                l = 0;
                                            for (s = n[u]; s <= n[c]; s++)
                                                if (p[s] > d / 2) {
                                                    for (i = n.copy(), o = n.copy(), e = s - n[u], a = e <= (r = n[c] - s) ? Math.min(n[c] - 1, ~~(s + r / 2)) : Math.max(n[u], ~~(s - 1 - e / 2)); !p[a];) a++;
                                                    for (l = v[a]; !l && p[a - 1];) l = v[--a];
                                                    return i[c] = a, o[u] = i[c] + 1, [i, o]
                                                }
                                        }
                                    }(O, i),
                                    s = u[0],
                                    c = u[1];
                                if (!s) return;
                                if (t.push(s), c && (t.push(c), o++), o >= n || a++ > 1e3) return
                            }
                        }
                        S.push(k), E(S, .75 * u);
                        for (var _ = new n(function(t, e) {
                                return r.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
                            }); S.size();) _.push(S.pop());
                        E(_, u - _.size());
                        for (var A = new o; _.size();) A.push(_.pop());
                        return A
                    }
                }
            }();
            t.exports = i.quantize
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
                    return o.default
                }
            });
            var r = n("14716"),
                i = n("745510"),
                o = n("315378")
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
                    return o
                }
            });
            var r = n("884691");
            let i = {};

            function o(t) {
                let e = (0, r.useRef)(i);
                return e.current === i && (e.current = t()), e.current
            }
        },
        745510: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var r = n("884691"),
                i = n("48174");
            let o = [];

            function a(t, e) {
                let n = (0, r.useRef)(),
                    a = (0, r.useRef)(o);
                return a.current === o ? (n.current = t(), a.current = e) : !(0, i.default)(e, a.current) && (n.current = t(), a.current = e), n.current
            }
        },
        506838: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                P: function() {
                    return X
                },
                match: function() {
                    return $
                }
            });
            let r = Symbol.for("@ts-pattern/matcher"),
                i = Symbol.for("@ts-pattern/isVariadic"),
                o = "@ts-pattern/anonymous-select-key",
                a = t => !!(t && "object" == typeof t),
                u = t => t && !!t[r],
                s = (t, e, n) => {
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
                                return r.every((e, r) => s(e, t[r], n)) && o.every((t, e) => s(t, i[e], n)) && (0 === a.length || s(a[0], u, n))
                            }
                            return t.length === e.length && t.every((t, r) => s(t, e[r], n))
                        }
                        return Object.keys(t).every(i => {
                            let o = t[i];
                            return (i in e || u(o) && "optional" === o[r]().matcherType) && s(o, e[i], n)
                        })
                    }
                    return Object.is(e, t)
                },
                c = t => {
                    var e, n, i;
                    return a(t) ? u(t) ? null != (e = null == (n = (i = t[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? e : [] : Array.isArray(t) ? l(t, c) : l(Object.values(t), c) : []
                },
                l = (t, e) => t.reduce((t, n) => t.concat(e(n)), []);

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
                            return void 0 === e ? (c(t).forEach(t => r(t, void 0)), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: s(t, e, r),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => c(t),
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
                                matched: e.every(e => s(e, t, r)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => l(e, c),
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
                            return l(e, c).forEach(t => r(t, void 0)), {
                                matched: e.some(e => s(e, t, r)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => l(e, c),
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
                                matched: void 0 === a || s(a, t, (t, n) => {
                                    e[t] = n
                                }),
                                selections: e
                            }
                        },
                        getSelectionKeys: () => [null != i ? i : o].concat(void 0 === a ? [] : c(a))
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
            let z = f(g(function(t) {
                    return !0
                })),
                C = t => Object.assign(f(t), {
                    startsWith: e => C(v(t, g(t => x(t) && t.startsWith(e)))),
                    endsWith: e => C(v(t, g(t => x(t) && t.endsWith(e)))),
                    minLength: e => {
                        var n;
                        return C(v(t, (n = e, g(t => x(t) && t.length >= n))))
                    },
                    maxLength: e => {
                        var n;
                        return C(v(t, (n = e, g(t => x(t) && t.length <= n))))
                    },
                    includes: e => C(v(t, g(t => x(t) && t.includes(e)))),
                    regex: e => C(v(t, g(t => x(t) && !!t.match(e))))
                }),
                O = C(g(x)),
                R = (t, e) => g(n => w(n) && t <= n && e >= n),
                k = t => g(e => w(e) && e < t),
                S = t => g(e => w(e) && e > t),
                E = t => g(e => w(e) && e <= t),
                _ = t => g(e => w(e) && e >= t),
                A = () => g(t => w(t) && Number.isInteger(t)),
                F = () => g(t => w(t) && Number.isFinite(t)),
                M = () => g(t => w(t) && t > 0),
                D = () => g(t => w(t) && t < 0),
                V = t => Object.assign(f(t), {
                    between: (e, n) => V(v(t, R(e, n))),
                    lt: e => V(v(t, k(e))),
                    gt: e => V(v(t, S(e))),
                    lte: e => V(v(t, E(e))),
                    gte: e => V(v(t, _(e))),
                    int: () => V(v(t, A())),
                    finite: () => V(v(t, F())),
                    positive: () => V(v(t, M())),
                    negative: () => V(v(t, D()))
                }),
                P = V(g(w)),
                N = (t, e) => g(n => b(n) && t <= n && e >= n),
                j = t => g(e => b(e) && e < t),
                U = t => g(e => b(e) && e > t),
                I = t => g(e => b(e) && e <= t),
                T = t => g(e => b(e) && e >= t),
                B = () => g(t => b(t) && t > 0),
                L = () => g(t => b(t) && t < 0),
                H = t => Object.assign(f(t), {
                    between: (e, n) => H(v(t, N(e, n))),
                    lt: e => H(v(t, j(e))),
                    gt: e => H(v(t, U(e))),
                    lte: e => H(v(t, I(e))),
                    gte: e => H(v(t, T(e))),
                    positive: () => H(v(t, B())),
                    negative: () => H(v(t, L()))
                }),
                W = H(g(b)),
                q = f(g(function(t) {
                    return "boolean" == typeof t
                })),
                K = f(g(function(t) {
                    return "symbol" == typeof t
                })),
                Y = f(g(function(t) {
                    return null == t
                }));
            var X = {
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
                                if (0 === t.length) return c(n).forEach(t => {
                                    r[t] = []
                                }), {
                                    matched: !0,
                                    selections: r
                                };
                                let i = (t, e) => {
                                    r[t] = (r[t] || []).concat([e])
                                };
                                return {
                                    matched: t.every(t => s(n, t, i)),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : c(e[0])
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
                                    matched: d(t, t => s(i, t, r)),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : c(e[0])
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
                                        let n = s(o, e, i),
                                            r = s(a, t, i);
                                        return n && r
                                    }),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : [...c(e[0]), ...c(e[1])]
                        })
                    })
                },
                intersection: v,
                union: y,
                not: function(t) {
                    return f({
                        [r]: () => ({
                            match: e => ({
                                matched: !s(t, e, () => {})
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: g,
                select: m,
                any: z,
                _: z,
                string: O,
                between: R,
                lt: k,
                gt: S,
                lte: E,
                gte: _,
                int: A,
                finite: F,
                positive: M,
                negative: D,
                number: P,
                betweenBigInt: N,
                ltBigInt: j,
                gtBigInt: U,
                lteBigInt: I,
                gteBigInt: T,
                positiveBigInt: B,
                negativeBigInt: L,
                bigint: W,
                boolean: q,
                symbol: K,
                nullish: Y,
                instanceOf: function(t) {
                    var e;
                    return f(g((e = t, t => t instanceof e)))
                },
                shape: function(t) {
                    return f(g(function() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        if (1 === e.length) {
                            let [t] = e;
                            return e => s(t, e, () => {})
                        }
                        if (2 === e.length) {
                            let [t, n] = e;
                            return s(t, n, () => {})
                        }
                        throw Error("isMatching wasn't given the right number of arguments: expected 1 or 2, received ".concat(e.length, "."))
                    }(t)))
                }
            };
            let G = {
                matched: !1,
                value: void 0
            };

            function $(t) {
                return new Q(t, G)
            }
            class Q {
                with() {
                    let t;
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    if (this.state.matched) return this;
                    let i = n[n.length - 1],
                        a = [n[0]];
                    3 === n.length && "function" == typeof n[1] ? (a.push(n[0]), t = n[1]) : n.length > 2 && a.push(...n.slice(1, n.length - 1));
                    let u = !1,
                        c = {},
                        l = (t, e) => {
                            u = !0, c[t] = e
                        },
                        f = a.some(t => s(t, this.input, l)) && (!t || t(this.input)) ? {
                            matched: !0,
                            value: i(u ? o in c ? c[o] : c : this.input, this.input)
                        } : G;
                    return new Q(this.input, f)
                }
                when(t, e) {
                    if (this.state.matched) return this;
                    let n = !!t(this.input);
                    return new Q(this.input, n ? {
                        matched: !0,
                        value: e(this.input, this.input)
                    } : G)
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
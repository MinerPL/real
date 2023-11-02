(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["85507"], {
        78349: function(t, e, n) {
            "use strict";
            t.exports.parse = function(t) {
                var e = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!e) return null;
                e.shift();
                var n = null,
                    i = [];
                e[2] && (n = (o = e[2].split("-")).shift(), i = o);
                var r = [];
                e[5] && (r = e[5].split("-")).shift();
                var a = [];
                if (e[6]) {
                    (o = e[6].split("-")).shift();
                    for (var o, u, l = []; o.length;) {
                        var s = o.shift();
                        1 === s.length ? u ? (a.push({
                            singleton: u,
                            extension: l
                        }), u = s, l = []) : u = s : l.push(s)
                    }
                    a.push({
                        singleton: u,
                        extension: l
                    })
                }
                var c = [];
                e[7] && ((c = e[7].split("-")).shift(), c.shift());
                var h = [];
                return e[8] && (h = e[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: i
                        },
                        script: e[3] || null,
                        region: e[4] || null,
                        variant: r,
                        extension: a,
                        privateuse: c
                    },
                    privateuse: h,
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
                    return O
                },
                Environment: function() {
                    return h
                },
                SpriteCanvas: function() {
                    return A
                },
                useConfettiCannon: function() {
                    return E
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

            function l(t, e) {
                return t * e * e * (e > 0 ? -1 : 1)
            }
            var s = function() {
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
                h = function(t) {
                    var e = void 0 === t ? {} : t,
                        n = e.gravity,
                        i = e.wind;
                    this.gravity = -9.8, this.wind = 0, this.gravity = null != n ? n : this.gravity, this.wind = null != i ? i : this.wind
                },
                f = function(t, e) {
                    return (f = Object.setPrototypeOf || ({
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
                f(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var p = function() {
                    return (p = Object.assign || function(t) {
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
                g = function(t) {
                    function e(e, n, i) {
                        var r = t.call(this, e, n) || this;
                        return r._z = i, r
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
                        var i = t.call(this, e) || this;
                        return i.addValue = n, i
                    }
                    return d(e, t), e.prototype.update = function(t) {
                        this.value = this.previewUpdate(t)
                    }, e.prototype.previewUpdate = function(t) {
                        return this.value + this.addValue * t
                    }, e
                }(v),
                x = function(t) {
                    function e(e, n, i, r, a, o) {
                        var u = t.call(this, e) || this;
                        u.min = n, u.max = i, u.duration = r;
                        var l = u.value / (u.max - u.min) * u.duration,
                            s = isNaN(l) ? 0 : l;
                        return u.timePassed = s < 0 ? u.duration - s : s, u.directionMultiplier = a, u.easingFunction = o, u
                    }
                    return d(e, t), e.prototype.update = function(t) {
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

            function k(t) {
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

            function _(t) {
                return function(t) {
                    switch (t.type) {
                        case "static":
                            var e = k(t.value);
                            return new y(new m(e.x), new m(e.y));
                        case "static-random":
                            var n = k(t.minValue),
                                i = k(t.maxValue);
                            return new y(new m(b(n.x, i.x)), new m(b(n.y, i.y)));
                        case "linear":
                            e = k(t.value);
                            var r = k(t.addValue);
                            return new y(new w(e.x, r.x), new w(e.y, r.y));
                        case "linear-random":
                            n = k(t.minValue), i = k(t.maxValue);
                            var a = k(t.minAddValue),
                                o = k(t.maxAddValue);
                            return new y(new w(b(n.x, i.x), b(a.x, o.x)), new w(b(n.y, i.y), b(a.x, o.x)));
                        case "oscillating":
                            e = k(t.value);
                            var u = k(t.start),
                                l = k(t.final),
                                s = k(t.duration),
                                c = k(t.direction);
                            return new y(new x(e.x, u.x, l.x, s.x, c.x, t.easingFunction), new x(e.y, u.y, l.y, s.x, c.y, t.easingFunction));
                        case "oscillating-random":
                            n = k(t.minValue), i = k(t.maxValue);
                            var h = k(t.minStart),
                                f = k(t.maxStart),
                                d = k(t.minFinal),
                                p = k(t.maxFinal),
                                v = k(t.minDuration),
                                g = k(t.maxDuration),
                                R = k(t.minDirection),
                                _ = k(t.maxDirection);
                            return new y(new x(b(n.x, i.x), b(h.x, f.x), b(d.x, p.x), b(v.x, g.x), z(R.x, _.x), C(t.easingFunctions)[0]), new x(b(n.y, i.y), b(h.y, f.y), b(d.y, p.y), b(v.y, g.y), z(R.y, _.y), C(t.easingFunctions)[0]))
                    }
                }(p(p({}, t), {
                    valueType: "Vector2"
                }))
            }
            var O = i.forwardRef(function(t, e) {
                var a = t.className,
                    o = t.environment,
                    l = t.onClick,
                    h = t.onMouseDown,
                    f = t.onMouseMove,
                    d = t.onMouseUp,
                    v = t.onBeforeRender,
                    y = t.onAfterRender,
                    k = function(t, e) {
                        var n = {};
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && 0 > e.indexOf(i) && (n[i] = t[i]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (i = Object.getOwnPropertySymbols(t); r < i.length; r++) 0 > e.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]])
                        }
                        return n
                    }(t, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    O = i.useRef(null),
                    A = i.useRef(new Map),
                    E = i.useRef(null),
                    P = i.useRef(0),
                    S = i.useRef(0),
                    V = i.useCallback(function() {
                        var t = O.current;
                        if (null != t) {
                            var e = t.getContext("2d");
                            if (null != e) {
                                e.clearRect(0, 0, t.width, t.height), null == v || v(e), A.current.forEach(function(n, i) {
                                    var r = n.confetti,
                                        a = n.spriteCanvas;
                                    r.update(o), r.draw(a, e), r.shouldDestroy(t, o) && A.current.delete(i)
                                }), null == y || y(e), A.current.size > 0 ? E.current = window.requestAnimationFrame(V) : (e.clearRect(0, 0, t.width, t.height), E.current = null);
                                var n = Date.now();
                                0 !== P.current && (S.current = 1e3 / (n - P.current)), P.current = n
                            }
                        }
                    }, [o, y, v]);
                i.useEffect(function() {
                    null != E.current && (window.cancelAnimationFrame(E.current), E.current = window.requestAnimationFrame(V))
                }, [V]);
                var F = i.useCallback(function(t, e) {
                        A.current.set(t.id, {
                            confetti: t,
                            spriteCanvas: e
                        }), null == E.current && V()
                    }, [V]),
                    j = i.useCallback(function(t, e, n, i, a) {
                        var o, u, l, h, f, d, v, y, k, O, A, E, P, S, V, j = (o = null !== (V = t.id) && void 0 !== V ? V : (0, r.v4)(), u = t, l = n, h = i, f = a, y = _((v = (d = u, p(p({
                            id: o
                        }, c), d))).size), O = (k = function(t, e) {
                            if (null != t) {
                                var n = e.sprites.findIndex(function(e) {
                                    return "string" == typeof t ? e.src === t && e.colorize : e.src === t.src && e.colorize === t.colorize
                                });
                                if (-1 !== n) return [t, n]
                            }
                            return C(e.sprites)
                        }(h, l))[0], A = k[1], E = function(t, e, n) {
                            if (!("string" == typeof(i = t) || i.colorize)) return 0;
                            var i, r = null != e ? n.colors.findIndex(function(t) {
                                return t === e
                            }) : -1;
                            return -1 !== r ? r : Math.floor(b(0, n.colors.length - 1))
                        }(null != h ? h : O, f, l), new s({
                            id: o,
                            position: _(v.position),
                            velocity: _(v.velocity),
                            rotation: (P = v.rotation, function(t) {
                                switch (t.type) {
                                    case "static":
                                        var e = R(t.value);
                                        return new g(new m(e.x), new m(e.y), new m(e.z));
                                    case "static-random":
                                        var n = R(t.minValue),
                                            i = R(t.maxValue);
                                        return new g(new m(b(n.x, i.x)), new m(b(n.y, i.y)), new m(b(n.z, i.z)));
                                    case "linear":
                                        e = R(t.value);
                                        var r = R(t.addValue);
                                        return new g(new w(e.x, r.x), new w(e.y, r.y), new w(e.z, r.z));
                                    case "linear-random":
                                        n = R(t.minValue), i = R(t.maxValue);
                                        var a = R(t.minAddValue),
                                            o = R(t.maxAddValue);
                                        return new g(new w(b(n.x, i.x), b(a.x, o.x)), new w(b(n.y, i.y), b(a.y, o.y)), new w(b(n.z, i.z), b(a.z, o.z)));
                                    case "oscillating":
                                        e = R(t.value);
                                        var u = R(t.start),
                                            l = R(t.final),
                                            s = R(t.duration),
                                            c = R(t.direction);
                                        return new g(new x(e.x, u.x, l.x, s.x, c.x, t.easingFunction), new x(e.y, u.y, l.y, s.z, c.y, t.easingFunction), new x(e.z, u.z, l.z, s.z, c.z, t.easingFunction));
                                    case "oscillating-random":
                                        n = R(t.minValue), i = R(t.maxValue);
                                        var h = R(t.minStart),
                                            f = R(t.maxStart),
                                            d = R(t.minFinal),
                                            p = R(t.maxFinal),
                                            v = R(t.minDuration),
                                            y = R(t.maxDuration),
                                            k = R(t.minDirection),
                                            _ = R(t.maxDirection);
                                        return new g(new x(b(n.x, i.x), b(h.x, f.x), b(d.x, p.x), b(v.x, y.x), z(k.x, _.x), C(t.easingFunctions)[0]), new x(b(n.y, i.y), b(h.y, f.y), b(d.y, p.y), b(v.y, y.y), z(k.y, _.y), C(t.easingFunctions)[0]), new x(b(n.z, i.z), b(h.z, f.z), b(d.z, p.z), b(v.z, y.z), z(k.z, _.z), C(t.easingFunctions)[0]))
                                }
                            }(p(p({}, P), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: _(v.dragCoefficient),
                            size: y,
                            opacity: (S = v.opacity, function(t) {
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
                                        return new x(b(t.minValue, t.maxValue), b(t.minStart, t.maxStart), b(t.minFinal, t.maxFinal), b(t.minDuration, t.maxDuration), z(t.minDirection, t.maxDirection), C(t.easingFunctions)[0])
                                }
                            }(p(p({}, S), {
                                valueType: "number"
                            }))),
                            spriteX: E * l.spriteWidth + 2 * E,
                            spriteY: A * l.spriteHeight + 2 * A,
                            spriteWidth: l.spriteWidth,
                            spriteHeight: l.spriteHeight
                        }));
                        return F(j, e), j
                    }, [F]),
                    M = i.useCallback(function(t) {
                        A.current.delete(t)
                    }, []),
                    D = i.useCallback(function() {
                        return A.current.clear()
                    }, []),
                    U = i.useCallback(function() {
                        return O.current
                    }, []);
                i.useImperativeHandle(e, function() {
                    return {
                        createConfetti: j,
                        addConfetti: F,
                        deleteConfetti: M,
                        clearConfetti: D,
                        getCanvas: U
                    }
                }, [j, F, M, D, U]);
                var H = i.useCallback(function(t, e) {
                        var n, i, r = e.clickHandler,
                            a = e.mouseHandler;
                        if (null != r || null != a) {
                            var l = null === (n = O.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != l) {
                                var s = function(t, e) {
                                    if (null == e) throw Error("element should not be null");
                                    var n = e.getBoundingClientRect();
                                    return {
                                        x: t.clientX - n.left,
                                        y: t.clientY - n.top
                                    }
                                }(t, O.current);
                                if (u(s, {
                                        x: l.left,
                                        y: l.top,
                                        width: l.width,
                                        height: l.height
                                    })) {
                                    if (null != a) return a(t);
                                    if (null != r) {
                                        var c = -1e3 / S.current * 2,
                                            h = function(t, e) {
                                                for (var n = 0, i = Array.from(t.values()); n < i.length; n++) {
                                                    var r = i[n];
                                                    if (null != r && e(r)) return r
                                                }
                                                return null
                                            }(A.current, function(t) {
                                                var e = t.confetti,
                                                    n = e.previewPositionUpdate(o, c);
                                                return u(s, {
                                                    x: n.x - e.width / 2,
                                                    y: n.y - e.height / 2,
                                                    width: e.width,
                                                    height: e.height
                                                })
                                            });
                                        r(t, null !== (i = null == h ? void 0 : h.confetti) && void 0 !== i ? i : null)
                                    }
                                }
                            }
                        }
                    }, [o]),
                    I = i.useCallback(function(t) {
                        return H(t, {
                            clickHandler: l
                        })
                    }, [H, l]),
                    N = i.useCallback(function(t) {
                        return H(t, {
                            clickHandler: h
                        })
                    }, [H, h]),
                    B = i.useCallback(function(t) {
                        return H(t, {
                            mouseHandler: f
                        })
                    }, [H, f]),
                    T = i.useCallback(function(t) {
                        return H(t, {
                            mouseHandler: d
                        })
                    }, [H, d]);
                return i.useEffect(function() {
                    var t = function(t, e, n) {
                        null != n && window.addEventListener(t, e)
                    };
                    return t("click", I, l), t("mousedown", N, h), t("mousemove", B, f), t("mouseup", T, d),
                        function() {
                            window.removeEventListener("click", I), window.removeEventListener("mousedown", N), window.removeEventListener("mousemove", B), window.removeEventListener("mouseup", B)
                        }
                }, [I, N, B, T, l, h, f, d]), i.useEffect(function() {
                    var t = O.current,
                        e = new ResizeObserver(function() {
                            ! function(t) {
                                if (null != t) {
                                    var e = t.getBoundingClientRect(),
                                        i = e.width,
                                        r = e.height;
                                    t.width = i * n.g.devicePixelRatio, t.height = r * n.g.devicePixelRatio
                                }
                            }(O.current)
                        });
                    return null != t && e.observe(t),
                        function() {
                            null != t && e.unobserve(t)
                        }
                }, []), i.createElement("canvas", p({}, k, {
                    className: a,
                    ref: O
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
            var A = i.forwardRef(function(t, e) {
                var n, a = t.className,
                    u = t.visible,
                    l = void 0 !== u && u,
                    s = t.sprites,
                    c = t.colors,
                    h = t.spriteWidth,
                    f = t.spriteHeight,
                    d = i.useRef(null),
                    p = i.useRef([]),
                    v = i.useRef(!1),
                    y = i.useRef({});
                i.useImperativeHandle(e, function() {
                    return {
                        getCanvas: function() {
                            return d.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: p.current,
                                colors: c,
                                spriteWidth: h,
                                spriteHeight: f
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
                }, [c, f, h]);
                var g = i.useCallback(function() {
                        var t = d.current,
                            e = null == t ? void 0 : t.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != e && null != t && (e.clearRect(0, 0, t.width, t.height), p.current.forEach(function(t, n) {
                            var i = function(i, r) {
                                var a = h * r + 2 * r,
                                    o = f * n + 2 * n;
                                if (e.drawImage(t.image, a, o, h, f), null != i) {
                                    for (var u, l, s = e.getImageData(a, o, h, f), c = ("#" === (u = i)[0] && (u = u.slice(1)), {
                                            r: (l = parseInt(u, 16)) >> 16 & 255,
                                            g: l >> 8 & 255,
                                            b: 255 & l
                                        }), d = 0; d < s.data.length; d += 4) s.data[d] = c.r, s.data[d + 1] = c.g, s.data[d + 2] = c.b;
                                    e.putImageData(s, a, o)
                                }
                            };
                            t.colorize ? c.forEach(function(t, e) {
                                return i(t, e)
                            }) : i(null, 0)
                        }))
                    }, [c, f, h]),
                    m = i.useCallback(function() {
                        var t = s.map(function(t) {
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
                            p.current = t.map(function(t) {
                                return {
                                    colorize: t.colorize,
                                    image: t.image,
                                    src: t.src
                                }
                            })
                        })
                    }, [s]),
                    w = i.useCallback(function(t) {
                        for (var e in y.current) y.current[e](t)
                    }, []),
                    x = i.useCallback(function() {
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
                                        }([u, l])
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
                        }, new(n || (n = Promise))(function(r, a) {
                            function o(t) {
                                try {
                                    l(i.next(t))
                                } catch (t) {
                                    a(t)
                                }
                            }

                            function u(t) {
                                try {
                                    l(i.throw(t))
                                } catch (t) {
                                    a(t)
                                }
                            }

                            function l(t) {
                                var e;
                                t.done ? r(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                                    t(e)
                                })).then(o, u)
                            }
                            l((i = i.apply(t, e || [])).next())
                        })
                    }, [w, m, g]);
                return i.useEffect(function() {
                    x()
                }, [x]), i.useEffect(function() {
                    return function() {
                        return w(!1)
                    }
                }, [w]), i.useEffect(function() {
                    null != d.current && (d.current.width = (h + 2) * Math.max(c.length, 1), d.current.height = (f + 2) * s.length)
                }, [c.length, f, h, s.length]), i.createElement("canvas", {
                    ref: d,
                    className: o(a, ((n = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !l, n))
                })
            });

            function E(t, e) {
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
                            l = null == e ? void 0 : e.getCanvas();
                        if (null != l && null != u && 0 !== u.sprites.length) return null == t ? void 0 : t.createConfetti(n, l, u, a, o)
                    }, [t, e]),
                    l = i.useCallback(function(t, e, n) {
                        for (var i = [], r = 0; r < e; r++) {
                            var a = u(t, n);
                            a && i.push(a)
                        }
                        return i
                    }, [u]),
                    s = i.useCallback(function(n) {
                        var i = null == e ? void 0 : e.getCanvas();
                        null != i && (null == t || t.addConfetti(n, i))
                    }, [t, e]),
                    c = i.useCallback(function(e) {
                        null == t || t.deleteConfetti(e)
                    }, [t]),
                    h = i.useCallback(function() {
                        return null == t ? void 0 : t.clearConfetti()
                    }, [t]);
                return i.useMemo(function() {
                    return {
                        createConfetti: u,
                        createMultipleConfetti: l,
                        addConfetti: s,
                        clearConfetti: h,
                        deleteConfetti: c,
                        isReady: a && null != e && null != t
                    }
                }, [s, h, t, u, l, c, a, e])
            }
        },
        448105: function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                var n = e.length,
                    i = t.length;
                if (i > n) return !1;
                if (i === n) return t === e;
                t: for (var r = 0, a = 0; r < i; r++) {
                    for (var o = t.charCodeAt(r); a < n;)
                        if (e.charCodeAt(a++) === o) continue t;
                    return !1
                }
                return !0
            }
        },
        506838: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                P: function() {
                    return q
                },
                match: function() {
                    return G
                }
            });
            let i = Symbol.for("@ts-pattern/matcher"),
                r = Symbol.for("@ts-pattern/isVariadic"),
                a = "@ts-pattern/anonymous-select-key",
                o = t => !!(t && "object" == typeof t),
                u = t => t && !!t[i],
                l = (t, e, n) => {
                    if (u(t)) {
                        let r = t[i](),
                            {
                                matched: a,
                                selections: o
                            } = r.match(e);
                        return a && o && Object.keys(o).forEach(t => n(t, o[t])), a
                    }
                    if (o(t)) {
                        if (!o(e)) return !1;
                        if (Array.isArray(t)) {
                            if (!Array.isArray(e)) return !1;
                            let i = [],
                                a = [],
                                o = [];
                            for (let e of t.keys()) {
                                let n = t[e];
                                u(n) && n[r] ? o.push(n) : o.length ? a.push(n) : i.push(n)
                            }
                            if (o.length) {
                                if (o.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (e.length < i.length + a.length) return !1;
                                let t = e.slice(0, i.length),
                                    r = 0 === a.length ? [] : e.slice(-a.length),
                                    u = e.slice(i.length, 0 === a.length ? 1 / 0 : -a.length);
                                return i.every((e, i) => l(e, t[i], n)) && a.every((t, e) => l(t, r[e], n)) && (0 === o.length || l(o[0], u, n))
                            }
                            return t.length === e.length && t.every((t, i) => l(t, e[i], n))
                        }
                        return Object.keys(t).every(r => {
                            let a = t[r];
                            return (r in e || u(a) && "optional" === a[i]().matcherType) && l(a, e[r], n)
                        })
                    }
                    return Object.is(e, t)
                },
                s = t => {
                    var e, n, r;
                    return o(t) ? u(t) ? null != (e = null == (n = (r = t[i]()).getSelectionKeys) ? void 0 : n.call(r)) ? e : [] : Array.isArray(t) ? c(t, s) : c(Object.values(t), s) : []
                },
                c = (t, e) => t.reduce((t, n) => t.concat(e(n)), []);

            function h(t) {
                return Object.assign(t, {
                    optional: () => f(t),
                    and: e => v(t, e),
                    or: e => y(t, e),
                    select: e => void 0 === e ? m(t) : m(e, t)
                })
            }

            function f(t) {
                return h({
                    [i]: () => ({
                        match: e => {
                            let n = {},
                                i = (t, e) => {
                                    n[t] = e
                                };
                            return void 0 === e ? (s(t).forEach(t => i(t, void 0)), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: l(t, e, i),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => s(t),
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
                    for (let [n, i] of t.entries())
                        if (!e(i, n)) return !1;
                    return !0
                };

            function v() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return h({
                    [i]: () => ({
                        match: t => {
                            let n = {},
                                i = (t, e) => {
                                    n[t] = e
                                };
                            return {
                                matched: e.every(e => l(e, t, i)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => c(e, s),
                        matcherType: "and"
                    })
                })
            }

            function y() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return h({
                    [i]: () => ({
                        match: t => {
                            let n = {},
                                i = (t, e) => {
                                    n[t] = e
                                };
                            return c(e, s).forEach(t => i(t, void 0)), {
                                matched: e.some(e => l(e, t, i)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => c(e, s),
                        matcherType: "or"
                    })
                })
            }

            function g(t) {
                return {
                    [i]: () => ({
                        match: e => ({
                            matched: !!t(e)
                        })
                    })
                }
            }

            function m() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                let r = "string" == typeof e[0] ? e[0] : void 0,
                    o = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
                return h({
                    [i]: () => ({
                        match: t => {
                            let e = {
                                [null != r ? r : a]: t
                            };
                            return {
                                matched: void 0 === o || l(o, t, (t, n) => {
                                    e[t] = n
                                }),
                                selections: e
                            }
                        },
                        getSelectionKeys: () => [null != r ? r : a].concat(void 0 === o ? [] : s(o))
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
            let C = h(g(function(t) {
                    return !0
                })),
                z = t => Object.assign(h(t), {
                    startsWith: e => z(v(t, g(t => x(t) && t.startsWith(e)))),
                    endsWith: e => z(v(t, g(t => x(t) && t.endsWith(e)))),
                    minLength: e => {
                        var n;
                        return z(v(t, (n = e, g(t => x(t) && t.length >= n))))
                    },
                    maxLength: e => {
                        var n;
                        return z(v(t, (n = e, g(t => x(t) && t.length <= n))))
                    },
                    includes: e => z(v(t, g(t => x(t) && t.includes(e)))),
                    regex: e => z(v(t, g(t => x(t) && !!t.match(e))))
                }),
                k = z(g(x)),
                R = (t, e) => g(n => w(n) && t <= n && e >= n),
                _ = t => g(e => w(e) && e < t),
                O = t => g(e => w(e) && e > t),
                A = t => g(e => w(e) && e <= t),
                E = t => g(e => w(e) && e >= t),
                P = () => g(t => w(t) && Number.isInteger(t)),
                S = () => g(t => w(t) && Number.isFinite(t)),
                V = () => g(t => w(t) && t > 0),
                F = () => g(t => w(t) && t < 0),
                j = t => Object.assign(h(t), {
                    between: (e, n) => j(v(t, R(e, n))),
                    lt: e => j(v(t, _(e))),
                    gt: e => j(v(t, O(e))),
                    lte: e => j(v(t, A(e))),
                    gte: e => j(v(t, E(e))),
                    int: () => j(v(t, P())),
                    finite: () => j(v(t, S())),
                    positive: () => j(v(t, V())),
                    negative: () => j(v(t, F()))
                }),
                M = j(g(w)),
                D = (t, e) => g(n => b(n) && t <= n && e >= n),
                U = t => g(e => b(e) && e < t),
                H = t => g(e => b(e) && e > t),
                I = t => g(e => b(e) && e <= t),
                N = t => g(e => b(e) && e >= t),
                B = () => g(t => b(t) && t > 0),
                T = () => g(t => b(t) && t < 0),
                L = t => Object.assign(h(t), {
                    between: (e, n) => L(v(t, D(e, n))),
                    lt: e => L(v(t, U(e))),
                    gt: e => L(v(t, H(e))),
                    lte: e => L(v(t, I(e))),
                    gte: e => L(v(t, N(e))),
                    positive: () => L(v(t, B())),
                    negative: () => L(v(t, T()))
                }),
                W = L(g(b)),
                K = h(g(function(t) {
                    return "boolean" == typeof t
                })),
                X = h(g(function(t) {
                    return "symbol" == typeof t
                })),
                Y = h(g(function(t) {
                    return null == t
                }));
            var q = {
                __proto__: null,
                matcher: i,
                optional: f,
                array: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return function t(e) {
                        var n;
                        return Object.assign((n = e, Object.assign(n, {
                            *[Symbol.iterator]() {
                                yield Object.assign(n, {
                                    [r]: !0
                                })
                            }
                        })), {
                            optional: () => t(f(e)),
                            select: n => t(void 0 === n ? m(e) : m(n, e))
                        })
                    }({
                        [i]: () => ({
                            match: t => {
                                if (!Array.isArray(t)) return {
                                    matched: !1
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                let n = e[0],
                                    i = {};
                                if (0 === t.length) return s(n).forEach(t => {
                                    i[t] = []
                                }), {
                                    matched: !0,
                                    selections: i
                                };
                                let r = (t, e) => {
                                    i[t] = (i[t] || []).concat([e])
                                };
                                return {
                                    matched: t.every(t => l(n, t, r)),
                                    selections: i
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : s(e[0])
                        })
                    })
                },
                set: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return h({
                        [i]: () => ({
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
                                let i = (t, e) => {
                                        n[t] = (n[t] || []).concat([e])
                                    },
                                    r = e[0];
                                return {
                                    matched: d(t, t => l(r, t, i)),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : s(e[0])
                        })
                    })
                },
                map: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return h({
                        [i]: () => ({
                            match: t => {
                                var n;
                                if (!(t instanceof Map)) return {
                                    matched: !1
                                };
                                let i = {};
                                if (0 === t.size) return {
                                    matched: !0,
                                    selections: i
                                };
                                let r = (t, e) => {
                                    i[t] = (i[t] || []).concat([e])
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                if (1 === e.length) throw Error("`P.map` wasn't given enough arguments. Expected (key, value), received ".concat(null == (n = e[0]) ? void 0 : n.toString()));
                                let [a, o] = e;
                                return {
                                    matched: p(t, (t, e) => {
                                        let n = l(a, e, r),
                                            i = l(o, t, r);
                                        return n && i
                                    }),
                                    selections: i
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : [...s(e[0]), ...s(e[1])]
                        })
                    })
                },
                intersection: v,
                union: y,
                not: function(t) {
                    return h({
                        [i]: () => ({
                            match: e => ({
                                matched: !l(t, e, () => {})
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
                string: k,
                between: R,
                lt: _,
                gt: O,
                lte: A,
                gte: E,
                int: P,
                finite: S,
                positive: V,
                negative: F,
                number: M,
                betweenBigInt: D,
                ltBigInt: U,
                gtBigInt: H,
                lteBigInt: I,
                gteBigInt: N,
                positiveBigInt: B,
                negativeBigInt: T,
                bigint: W,
                boolean: K,
                symbol: X,
                nullish: Y,
                instanceOf: function(t) {
                    var e;
                    return h(g((e = t, t => t instanceof e)))
                },
                shape: function(t) {
                    return h(g(function() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        if (1 === e.length) {
                            let [t] = e;
                            return e => l(t, e, () => {})
                        }
                        if (2 === e.length) {
                            let [t, n] = e;
                            return l(t, n, () => {})
                        }
                        throw Error("isMatching wasn't given the right number of arguments: expected 1 or 2, received ".concat(e.length, "."))
                    }(t)))
                }
            };
            let $ = {
                matched: !1,
                value: void 0
            };

            function G(t) {
                return new Q(t, $)
            }
            class Q {
                with() {
                    let t;
                    for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    if (this.state.matched) return this;
                    let r = n[n.length - 1],
                        o = [n[0]];
                    3 === n.length && "function" == typeof n[1] ? (o.push(n[0]), t = n[1]) : n.length > 2 && o.push(...n.slice(1, n.length - 1));
                    let u = !1,
                        s = {},
                        c = (t, e) => {
                            u = !0, s[t] = e
                        },
                        h = o.some(t => l(t, this.input, c)) && (!t || t(this.input)) ? {
                            matched: !0,
                            value: r(u ? a in s ? s[a] : s : this.input, this.input)
                        } : $;
                    return new Q(this.input, h)
                }
                when(t, e) {
                    if (this.state.matched) return this;
                    let n = !!t(this.input);
                    return new Q(this.input, n ? {
                        matched: !0,
                        value: e(this.input, this.input)
                    } : $)
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
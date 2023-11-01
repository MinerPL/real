(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["54319"], {
        78349: function(e, t, n) {
            "use strict";
            e.exports.parse = function(e) {
                var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!t) return null;
                t.shift();
                var n = null,
                    i = [];
                t[2] && (n = (a = t[2].split("-")).shift(), i = a);
                var r = [];
                t[5] && (r = t[5].split("-")).shift();
                var o = [];
                if (t[6]) {
                    (a = t[6].split("-")).shift();
                    for (var a, l, u = []; a.length;) {
                        var s = a.shift();
                        1 === s.length ? l ? (o.push({
                            singleton: l,
                            extension: u
                        }), l = s, u = []) : l = s : u.push(s)
                    }
                    o.push({
                        singleton: l,
                        extension: u
                    })
                }
                var c = [];
                t[7] && ((c = t[7].split("-")).shift(), c.shift());
                var d = [];
                return t[8] && (d = t[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: i
                        },
                        script: t[3] || null,
                        region: t[4] || null,
                        variant: r,
                        extension: o,
                        privateuse: c
                    },
                    privateuse: d,
                    grandfathered: {
                        irregular: t[0] || null,
                        regular: t[1] || null
                    }
                }
            }
        },
        516555: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCanvas: function() {
                    return v
                },
                Environment: function() {
                    return d
                },
                SpriteCanvas: function() {
                    return L
                },
                useConfettiCannon: function() {
                    return U
                }
            });
            var i = n("884691"),
                r = n("748820"),
                o = n("414456"),
                a = n.n(o);

            function l(e, t) {
                var n = e.x,
                    i = e.y;
                return n > t.x && n < t.x + t.width && i > t.y && i < t.y + t.height
            }

            function u(e, t) {
                return e * t * t * (t > 0 ? -1 : 1)
            }
            var s = function() {
                    function e(e) {
                        this.id = e.id, this.position = e.position, this.velocity = e.velocity, this.rotation = e.rotation, this.dragCoefficient = e.dragCoefficient, this.size = e.size, this.opacity = e.opacity, this.spriteX = e.spriteX, this.spriteY = e.spriteY, this.spriteWidth = e.spriteWidth, this.spriteHeight = e.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return e.prototype.getNewForces = function(e, t) {
                        var n, i, r, o, a = e.wind * t,
                            l = -e.gravity * t;
                        return {
                            x: a + (n = this.dragCoefficient.x, n * (i = this.velocity.x) * i * (i > 0 ? -1 : 1)),
                            y: l + (r = this.dragCoefficient.y, r * (o = this.velocity.y) * o * (o > 0 ? -1 : 1))
                        }
                    }, e.prototype.update = function(e) {
                        var t = Date.now(),
                            n = (t - this._lastUpdatedAt) / 100;
                        this.rotation.update(n), this.dragCoefficient.update(n);
                        var i = this.getNewForces(e, n),
                            r = i.x,
                            o = i.y;
                        this.velocity.update(n), this.velocity.x += r, this.velocity.y += o, this.position.update(n), this.position.x += this.velocity.x * n, this.position.y += this.velocity.y * n, this.size.update(n), this.opacity.update(n), this._lastUpdatedAt = t
                    }, e.prototype.previewPositionUpdate = function(e, t) {
                        var n = t / 100,
                            i = this.velocity.previewUpdate(n),
                            r = this.getNewForces(e, n),
                            o = r.x,
                            a = r.y;
                        i.x += o, i.y += a;
                        var l = this.position.previewUpdate(n);
                        return l.x += i.x * n, l.y += i.y * n, l
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
                E = function(e, t) {
                    return (E = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    })(e, t)
                };

            function _(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                E(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var f = function() {
                    return (f = Object.assign || function(e) {
                        for (var t, n = 1, i = arguments.length; n < i; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                },
                I = function(e) {
                    this.value = e
                },
                p = function() {
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
                T = function(e) {
                    function t(t, n, i) {
                        var r = e.call(this, t, n) || this;
                        return r._z = i, r
                    }
                    return _(t, e), t.prototype.update = function(t) {
                        e.prototype.update.call(this, t), this._z.update(t)
                    }, t.prototype.previewUpdate = function(t) {
                        var n = e.prototype.previewUpdate.call(this, t);
                        return f(f({}, n), {
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
                }(p),
                h = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return _(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(I),
                S = function(e) {
                    function t(t, n) {
                        var i = e.call(this, t) || this;
                        return i.addValue = n, i
                    }
                    return _(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(I),
                N = function(e) {
                    function t(t, n, i, r, o, a) {
                        var l = e.call(this, t) || this;
                        l.min = n, l.max = i, l.duration = r;
                        var u = l.value / (l.max - l.min) * l.duration,
                            s = isNaN(u) ? 0 : u;
                        return l.timePassed = s < 0 ? l.duration - s : s, l.directionMultiplier = o, l.easingFunction = a, l
                    }
                    return _(t, e), t.prototype.update = function(e) {
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
                            o = this.easingFunction(i, this.min, t, this.duration);
                        return [isNaN(o) ? 0 : o, i, r]
                    }, t
                }(I);

            function A(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function g(e) {
                var t = Math.floor(A(0, e.length - 1));
                return [e[t], t]
            }

            function O(e, t) {
                return g([e, t])[0]
            }

            function C(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : e
            }

            function m(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e,
                    z: e
                } : e
            }

            function R(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = C(e.value);
                            return new p(new h(t.x), new h(t.y));
                        case "static-random":
                            var n = C(e.minValue),
                                i = C(e.maxValue);
                            return new p(new h(A(n.x, i.x)), new h(A(n.y, i.y)));
                        case "linear":
                            t = C(e.value);
                            var r = C(e.addValue);
                            return new p(new S(t.x, r.x), new S(t.y, r.y));
                        case "linear-random":
                            n = C(e.minValue), i = C(e.maxValue);
                            var o = C(e.minAddValue),
                                a = C(e.maxAddValue);
                            return new p(new S(A(n.x, i.x), A(o.x, a.x)), new S(A(n.y, i.y), A(o.x, a.x)));
                        case "oscillating":
                            t = C(e.value);
                            var l = C(e.start),
                                u = C(e.final),
                                s = C(e.duration),
                                c = C(e.direction);
                            return new p(new N(t.x, l.x, u.x, s.x, c.x, e.easingFunction), new N(t.y, l.y, u.y, s.x, c.y, e.easingFunction));
                        case "oscillating-random":
                            n = C(e.minValue), i = C(e.maxValue);
                            var d = C(e.minStart),
                                E = C(e.maxStart),
                                _ = C(e.minFinal),
                                f = C(e.maxFinal),
                                I = C(e.minDuration),
                                T = C(e.maxDuration),
                                m = C(e.minDirection),
                                R = C(e.maxDirection);
                            return new p(new N(A(n.x, i.x), A(d.x, E.x), A(_.x, f.x), A(I.x, T.x), O(m.x, R.x), g(e.easingFunctions)[0]), new N(A(n.y, i.y), A(d.y, E.y), A(_.y, f.y), A(I.y, T.y), O(m.y, R.y), g(e.easingFunctions)[0]))
                    }
                }(f(f({}, e), {
                    valueType: "Vector2"
                }))
            }
            var v = i.forwardRef(function(e, t) {
                var o = e.className,
                    a = e.environment,
                    u = e.onClick,
                    d = e.onMouseDown,
                    E = e.onMouseMove,
                    _ = e.onMouseUp,
                    I = e.onBeforeRender,
                    p = e.onAfterRender,
                    C = function(e, t) {
                        var n = {};
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (n[i] = e[i]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) 0 > t.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                        }
                        return n
                    }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    v = i.useRef(null),
                    L = i.useRef(new Map),
                    U = i.useRef(null),
                    D = i.useRef(0),
                    y = i.useRef(0),
                    P = i.useCallback(function() {
                        var e = v.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == I || I(t), L.current.forEach(function(n, i) {
                                    var r = n.confetti,
                                        o = n.spriteCanvas;
                                    r.update(a), r.draw(o, t), r.shouldDestroy(e, a) && L.current.delete(i)
                                }), null == p || p(t), L.current.size > 0 ? U.current = window.requestAnimationFrame(P) : (t.clearRect(0, 0, e.width, e.height), U.current = null);
                                var n = Date.now();
                                0 !== D.current && (y.current = 1e3 / (n - D.current)), D.current = n
                            }
                        }
                    }, [a, p, I]);
                i.useEffect(function() {
                    null != U.current && (window.cancelAnimationFrame(U.current), U.current = window.requestAnimationFrame(P))
                }, [P]);
                var M = i.useCallback(function(e, t) {
                        L.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == U.current && P()
                    }, [P]),
                    b = i.useCallback(function(e, t, n, i, o) {
                        var a, l, u, d, E, _, I, p, C, v, L, U, D, y, P, b = (a = null !== (P = e.id) && void 0 !== P ? P : (0, r.v4)(), l = e, u = n, d = i, E = o, p = R((I = (_ = l, f(f({
                            id: a
                        }, c), _))).size), v = (C = function(e, t) {
                            if (null != e) {
                                var n = t.sprites.findIndex(function(t) {
                                    return "string" == typeof e ? t.src === e && t.colorize : t.src === e.src && t.colorize === e.colorize
                                });
                                if (-1 !== n) return [e, n]
                            }
                            return g(t.sprites)
                        }(d, u))[0], L = C[1], U = function(e, t, n) {
                            if (!("string" == typeof(i = e) || i.colorize)) return 0;
                            var i, r = null != t ? n.colors.findIndex(function(e) {
                                return e === t
                            }) : -1;
                            return -1 !== r ? r : Math.floor(A(0, n.colors.length - 1))
                        }(null != d ? d : v, E, u), new s({
                            id: a,
                            position: R(I.position),
                            velocity: R(I.velocity),
                            rotation: (D = I.rotation, function(e) {
                                switch (e.type) {
                                    case "static":
                                        var t = m(e.value);
                                        return new T(new h(t.x), new h(t.y), new h(t.z));
                                    case "static-random":
                                        var n = m(e.minValue),
                                            i = m(e.maxValue);
                                        return new T(new h(A(n.x, i.x)), new h(A(n.y, i.y)), new h(A(n.z, i.z)));
                                    case "linear":
                                        t = m(e.value);
                                        var r = m(e.addValue);
                                        return new T(new S(t.x, r.x), new S(t.y, r.y), new S(t.z, r.z));
                                    case "linear-random":
                                        n = m(e.minValue), i = m(e.maxValue);
                                        var o = m(e.minAddValue),
                                            a = m(e.maxAddValue);
                                        return new T(new S(A(n.x, i.x), A(o.x, a.x)), new S(A(n.y, i.y), A(o.y, a.y)), new S(A(n.z, i.z), A(o.z, a.z)));
                                    case "oscillating":
                                        t = m(e.value);
                                        var l = m(e.start),
                                            u = m(e.final),
                                            s = m(e.duration),
                                            c = m(e.direction);
                                        return new T(new N(t.x, l.x, u.x, s.x, c.x, e.easingFunction), new N(t.y, l.y, u.y, s.z, c.y, e.easingFunction), new N(t.z, l.z, u.z, s.z, c.z, e.easingFunction));
                                    case "oscillating-random":
                                        n = m(e.minValue), i = m(e.maxValue);
                                        var d = m(e.minStart),
                                            E = m(e.maxStart),
                                            _ = m(e.minFinal),
                                            f = m(e.maxFinal),
                                            I = m(e.minDuration),
                                            p = m(e.maxDuration),
                                            C = m(e.minDirection),
                                            R = m(e.maxDirection);
                                        return new T(new N(A(n.x, i.x), A(d.x, E.x), A(_.x, f.x), A(I.x, p.x), O(C.x, R.x), g(e.easingFunctions)[0]), new N(A(n.y, i.y), A(d.y, E.y), A(_.y, f.y), A(I.y, p.y), O(C.y, R.y), g(e.easingFunctions)[0]), new N(A(n.z, i.z), A(d.z, E.z), A(_.z, f.z), A(I.z, p.z), O(C.z, R.z), g(e.easingFunctions)[0]))
                                }
                            }(f(f({}, D), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: R(I.dragCoefficient),
                            size: p,
                            opacity: (y = I.opacity, function(e) {
                                switch (e.type) {
                                    case "static":
                                        return new h(e.value);
                                    case "static-random":
                                        return new h(A(e.minValue, e.maxValue));
                                    case "linear":
                                        return new S(e.value, e.addValue);
                                    case "linear-random":
                                        return new S(A(e.minValue, e.maxValue), A(e.minAddValue, e.maxAddValue));
                                    case "oscillating":
                                        return new N(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                                    case "oscillating-random":
                                        return new N(A(e.minValue, e.maxValue), A(e.minStart, e.maxStart), A(e.minFinal, e.maxFinal), A(e.minDuration, e.maxDuration), O(e.minDirection, e.maxDirection), g(e.easingFunctions)[0])
                                }
                            }(f(f({}, y), {
                                valueType: "number"
                            }))),
                            spriteX: U * u.spriteWidth + 2 * U,
                            spriteY: L * u.spriteHeight + 2 * L,
                            spriteWidth: u.spriteWidth,
                            spriteHeight: u.spriteHeight
                        }));
                        return M(b, t), b
                    }, [M]),
                    G = i.useCallback(function(e) {
                        L.current.delete(e)
                    }, []),
                    w = i.useCallback(function() {
                        return L.current.clear()
                    }, []),
                    F = i.useCallback(function() {
                        return v.current
                    }, []);
                i.useImperativeHandle(t, function() {
                    return {
                        createConfetti: b,
                        addConfetti: M,
                        deleteConfetti: G,
                        clearConfetti: w,
                        getCanvas: F
                    }
                }, [b, M, G, w, F]);
                var B = i.useCallback(function(e, t) {
                        var n, i, r = t.clickHandler,
                            o = t.mouseHandler;
                        if (null != r || null != o) {
                            var u = null === (n = v.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != u) {
                                var s = function(e, t) {
                                    if (null == t) throw Error("element should not be null");
                                    var n = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - n.left,
                                        y: e.clientY - n.top
                                    }
                                }(e, v.current);
                                if (l(s, {
                                        x: u.left,
                                        y: u.top,
                                        width: u.width,
                                        height: u.height
                                    })) {
                                    if (null != o) return o(e);
                                    if (null != r) {
                                        var c = -1e3 / y.current * 2,
                                            d = function(e, t) {
                                                for (var n = 0, i = Array.from(e.values()); n < i.length; n++) {
                                                    var r = i[n];
                                                    if (null != r && t(r)) return r
                                                }
                                                return null
                                            }(L.current, function(e) {
                                                var t = e.confetti,
                                                    n = t.previewPositionUpdate(a, c);
                                                return l(s, {
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
                    }, [a]),
                    x = i.useCallback(function(e) {
                        return B(e, {
                            clickHandler: u
                        })
                    }, [B, u]),
                    k = i.useCallback(function(e) {
                        return B(e, {
                            clickHandler: d
                        })
                    }, [B, d]),
                    V = i.useCallback(function(e) {
                        return B(e, {
                            mouseHandler: E
                        })
                    }, [B, E]),
                    H = i.useCallback(function(e) {
                        return B(e, {
                            mouseHandler: _
                        })
                    }, [B, _]);
                return i.useEffect(function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", x, u), e("mousedown", k, d), e("mousemove", V, E), e("mouseup", H, _),
                        function() {
                            window.removeEventListener("click", x), window.removeEventListener("mousedown", k), window.removeEventListener("mousemove", V), window.removeEventListener("mouseup", V)
                        }
                }, [x, k, V, H, u, d, E, _]), i.useEffect(function() {
                    var e = v.current,
                        t = new ResizeObserver(function() {
                            ! function(e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        i = t.width,
                                        r = t.height;
                                    e.width = i * n.g.devicePixelRatio, e.height = r * n.g.devicePixelRatio
                                }
                            }(v.current)
                        });
                    return null != e && t.observe(e),
                        function() {
                            null != e && t.unobserve(e)
                        }
                }, []), i.createElement("canvas", f({}, C, {
                    className: o,
                    ref: v
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
            var L = i.forwardRef(function(e, t) {
                var n, o = e.className,
                    l = e.visible,
                    u = void 0 !== l && l,
                    s = e.sprites,
                    c = e.colors,
                    d = e.spriteWidth,
                    E = e.spriteHeight,
                    _ = i.useRef(null),
                    f = i.useRef([]),
                    I = i.useRef(!1),
                    p = i.useRef({});
                i.useImperativeHandle(t, function() {
                    return {
                        getCanvas: function() {
                            return _.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: f.current,
                                colors: c,
                                spriteWidth: d,
                                spriteHeight: E
                            }
                        },
                        addReadyListener: function(e) {
                            var t = (0, r.v4)();
                            return p.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete p.current[e]
                        },
                        isReady: I.current
                    }
                }, [c, E, d]);
                var T = i.useCallback(function() {
                        var e = _.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height), f.current.forEach(function(e, n) {
                            var i = function(i, r) {
                                var o = d * r + 2 * r,
                                    a = E * n + 2 * n;
                                if (t.drawImage(e.image, o, a, d, E), null != i) {
                                    for (var l, u, s = t.getImageData(o, a, d, E), c = ("#" === (l = i)[0] && (l = l.slice(1)), {
                                            r: (u = parseInt(l, 16)) >> 16 & 255,
                                            g: u >> 8 & 255,
                                            b: 255 & u
                                        }), _ = 0; _ < s.data.length; _ += 4) s.data[_] = c.r, s.data[_ + 1] = c.g, s.data[_ + 2] = c.b;
                                    t.putImageData(s, o, a)
                                }
                            };
                            e.colorize ? c.forEach(function(e, t) {
                                return i(e, t)
                            }) : i(null, 0)
                        }))
                    }, [c, E, d]),
                    h = i.useCallback(function() {
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
                            f.current = e.map(function(e) {
                                return {
                                    colorize: e.colorize,
                                    image: e.image,
                                    src: e.src
                                }
                            })
                        })
                    }, [s]),
                    S = i.useCallback(function(e) {
                        for (var t in p.current) p.current[t](e)
                    }, []),
                    N = i.useCallback(function() {
                        var e, t, n, i;
                        return e = void 0, t = void 0, n = void 0, i = function() {
                            return function(e, t) {
                                var n, i, r, o, a = {
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
                                    return function(u) {
                                        return function(l) {
                                            if (n) throw TypeError("Generator is already executing.");
                                            for (; o && (o = 0, l[0] && (a = 0)), a;) try {
                                                if (n = 1, i && (r = 2 & l[0] ? i.return : l[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, l[1])).done) return r;
                                                switch (i = 0, r && (l = [2 & l[0], r.value]), l[0]) {
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
                                                        a.label++, i = l[1], l = [0];
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
                                                l = [6, e], i = 0
                                            } finally {
                                                n = r = 0
                                            }
                                            if (5 & l[0]) throw l[1];
                                            return {
                                                value: l[0] ? l[1] : void 0,
                                                done: !0
                                            }
                                        }([l, u])
                                    }
                                }
                            }(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, h()];
                                    case 1:
                                        return e.sent(), T(), I.current = !0, S(!0), [2]
                                }
                            })
                        }, new(n || (n = Promise))(function(r, o) {
                            function a(e) {
                                try {
                                    u(i.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function l(e) {
                                try {
                                    u(i.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function u(e) {
                                var t;
                                e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                                    e(t)
                                })).then(a, l)
                            }
                            u((i = i.apply(e, t || [])).next())
                        })
                    }, [S, h, T]);
                return i.useEffect(function() {
                    N()
                }, [N]), i.useEffect(function() {
                    return function() {
                        return S(!1)
                    }
                }, [S]), i.useEffect(function() {
                    null != _.current && (_.current.width = (d + 2) * Math.max(c.length, 1), _.current.height = (E + 2) * s.length)
                }, [c.length, E, d, s.length]), i.createElement("canvas", {
                    ref: _,
                    className: a(o, ((n = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !u, n))
                })
            });

            function U(e, t) {
                var n, r = i.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
                    o = r[0],
                    a = r[1];
                i.useEffect(function() {
                    var e = null == t ? void 0 : t.addReadyListener(a);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }, [t]);
                var l = i.useCallback(function(n, i) {
                        var r = void 0 === i ? {} : i,
                            o = r.sprite,
                            a = r.color,
                            l = null == t ? void 0 : t.getCreateData(),
                            u = null == t ? void 0 : t.getCanvas();
                        if (null != u && null != l && 0 !== l.sprites.length) return null == e ? void 0 : e.createConfetti(n, u, l, o, a)
                    }, [e, t]),
                    u = i.useCallback(function(e, t, n) {
                        for (var i = [], r = 0; r < t; r++) {
                            var o = l(e, n);
                            o && i.push(o)
                        }
                        return i
                    }, [l]),
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
                        createConfetti: l,
                        createMultipleConfetti: u,
                        addConfetti: s,
                        clearConfetti: d,
                        deleteConfetti: c,
                        isReady: o && null != t && null != e
                    }
                }, [s, d, e, l, u, c, o, t])
            }
        },
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    i = e.length;
                if (i > n) return !1;
                if (i === n) return e === t;
                e: for (var r = 0, o = 0; r < i; r++) {
                    for (var a = e.charCodeAt(r); o < n;)
                        if (t.charCodeAt(o++) === a) continue e;
                    return !1
                }
                return !0
            }
        },
        458389: function(e, t, n) {
            var i = n("594140"),
                r = n("564414"),
                o = n("725502"),
                a = n("591350"),
                l = n("476540"),
                u = n("381178"),
                s = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = o(e),
                    c = !n && r(e),
                    d = !n && !c && a(e),
                    E = !n && !c && !d && u(e),
                    _ = n || c || d || E,
                    f = _ ? i(e.length, String) : [],
                    I = f.length;
                for (var p in e)(t || s.call(e, p)) && !(_ && ("length" == p || d && ("offset" == p || "parent" == p) || E && ("buffer" == p || "byteLength" == p || "byteOffset" == p) || l(p, I))) && f.push(p);
                return f
            }
        },
        437083: function(e, t, n) {
            var i = n("561449"),
                r = n("877297");
            e.exports = function(e) {
                return r(i(e))
            }
        },
        562132: function(e, t, n) {
            var i = n("33426"),
                r = n("136047"),
                o = n("270879"),
                a = {};
            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return o(e) && r(e.length) && !!a[i(e)]
            }
        },
        205873: function(e, t, n) {
            var i = n("733228"),
                r = n("541349"),
                o = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!i(e)) return r(e);
                var t = [];
                for (var n in Object(e)) o.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
        },
        329252: function(e, t, n) {
            var i = n("877297"),
                r = n("164099");
            e.exports = function(e) {
                return i(r(e))
            }
        },
        594140: function(e, t, n) {
            e.exports = function(e, t) {
                for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
                return i
            }
        },
        492692: function(e, t, n) {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        957478: function(e, t, n) {
            var i = n("626785");
            e.exports = function(e, t) {
                return i(t, function(t) {
                    return e[t]
                })
            }
        },
        561449: function(e, t, n) {
            e.exports = function(e, t) {
                var n = -1,
                    i = e.length;
                for (t || (t = Array(i)); ++n < i;) t[n] = e[n];
                return t
            }
        },
        733228: function(e, t, n) {
            var i = Object.prototype;
            e.exports = function(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || i)
            }
        },
        541349: function(e, t, n) {
            var i = n("761197")(Object.keys, Object);
            e.exports = i
        },
        276440: function(e, t, n) {
            e = n.nmd(e);
            var i = n("447414"),
                r = "object" == typeof t && t && !t.nodeType && t,
                o = r && "object" == typeof e && e && !e.nodeType && e,
                a = o && o.exports === r && i.process,
                l = function() {
                    try {
                        var e = o && o.require && o.require("util").types;
                        if (e) return e;
                        return a && a.binding && a.binding("util")
                    } catch (e) {}
                }();
            e.exports = l
        },
        761197: function(e, t, n) {
            e.exports = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
        },
        877297: function(e, t, n) {
            var i = n("68421");
            e.exports = function(e, t) {
                var n = -1,
                    r = e.length,
                    o = r - 1;
                for (t = void 0 === t ? r : t; ++n < t;) {
                    var a = i(n, o),
                        l = e[a];
                    e[a] = e[n], e[n] = l
                }
                return e.length = t, e
            }
        },
        591350: function(e, t, n) {
            e = n.nmd(e);
            var i = n("690516"),
                r = n("221386"),
                o = "object" == typeof t && t && !t.nodeType && t,
                a = o && "object" == typeof e && e && !e.nodeType && e,
                l = a && a.exports === o ? i.Buffer : void 0,
                u = l ? l.isBuffer : void 0;
            e.exports = u || r
        },
        381178: function(e, t, n) {
            var i = n("562132"),
                r = n("492692"),
                o = n("276440"),
                a = o && o.isTypedArray,
                l = a ? r(a) : i;
            e.exports = l
        },
        466731: function(e, t, n) {
            var i = n("458389"),
                r = n("205873"),
                o = n("603108");
            e.exports = function(e) {
                return o(e) ? i(e) : r(e)
            }
        },
        375128: function(e, t, n) {
            var i = n("437083"),
                r = n("329252"),
                o = n("725502");
            e.exports = function(e) {
                return (o(e) ? i : r)(e)
            }
        },
        221386: function(e, t, n) {
            e.exports = function() {
                return !1
            }
        },
        164099: function(e, t, n) {
            var i = n("957478"),
                r = n("466731");
            e.exports = function(e) {
                return null == e ? [] : i(e, r(e))
            }
        },
        48648: function(e, t, n) {
            if (!i) var i = {
                map: function(e, t) {
                    var n = {};
                    return t ? e.map(function(e, i) {
                        return n.index = i, t.call(n, e)
                    }) : e.slice()
                },
                naturalOrder: function(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                },
                sum: function(e, t) {
                    var n = {};
                    return e.reduce(t ? function(e, i, r) {
                        return n.index = r, e + t.call(n, i)
                    } : function(e, t) {
                        return e + t
                    }, 0)
                },
                max: function(e, t) {
                    return Math.max.apply(null, t ? i.map(e, t) : e)
                }
            };
            var r = function() {
                var e = 3;

                function t(e, t, n) {
                    return (e << 10) + (t << 5) + n
                }

                function n(e) {
                    var t = [],
                        n = !1;

                    function i() {
                        t.sort(e), n = !0
                    }
                    return {
                        push: function(e) {
                            t.push(e), n = !1
                        },
                        peek: function(e) {
                            return !n && i(), void 0 === e && (e = t.length - 1), t[e]
                        },
                        pop: function() {
                            return !n && i(), t.pop()
                        },
                        size: function() {
                            return t.length
                        },
                        map: function(e) {
                            return t.map(e)
                        },
                        debug: function() {
                            return !n && i(), t
                        }
                    }
                }

                function r(e, t, n, i, r, o, a) {
                    this.r1 = e, this.r2 = t, this.g1 = n, this.g2 = i, this.b1 = r, this.b2 = o, this.histo = a
                }

                function o() {
                    this.vboxes = new n(function(e, t) {
                        return i.naturalOrder(e.vbox.count() * e.vbox.volume(), t.vbox.count() * t.vbox.volume())
                    })
                }
                return r.prototype = {
                    volume: function(e) {
                        return (!this._volume || e) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(e) {
                        var n = this.histo;
                        if (!this._count_set || e) {
                            var i, r, o, a = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (r = this.g1; r <= this.g2; r++)
                                    for (o = this.b1; o <= this.b2; o++) a += n[t(i, r, o)] || 0;
                            this._count = a, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new r(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(e) {
                        var n = this.histo;
                        if (!this._avg || e) {
                            var i, r, o, a, l = 0,
                                u = 8,
                                s = 0,
                                c = 0,
                                d = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (o = this.g1; o <= this.g2; o++)
                                    for (a = this.b1; a <= this.b2; a++) l += i = n[t(r, o, a)] || 0, s += i * (r + .5) * u, c += i * (o + .5) * u, d += i * (a + .5) * u;
                            l ? this._avg = [~~(s / l), ~~(c / l), ~~(d / l)] : this._avg = [~~(u * (this.r1 + this.r2 + 1) / 2), ~~(u * (this.g1 + this.g2 + 1) / 2), ~~(u * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(t) {
                        var n = t[0] >> e;
                        return gval = t[1] >> e, bval = t[2] >> e, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, o.prototype = {
                    push: function(e) {
                        this.vboxes.push({
                            vbox: e,
                            color: e.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map(function(e) {
                            return e.color
                        })
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(e) {
                        for (var t = this.vboxes, n = 0; n < t.size(); n++)
                            if (t.peek(n).vbox.contains(e)) return t.peek(n).color;
                        return this.nearest(e)
                    },
                    nearest: function(e) {
                        for (var t, n, i, r = this.vboxes, o = 0; o < r.size(); o++)((n = Math.sqrt(Math.pow(e[0] - r.peek(o).color[0], 2) + Math.pow(e[1] - r.peek(o).color[1], 2) + Math.pow(e[2] - r.peek(o).color[2], 2))) < t || void 0 === t) && (t = n, i = r.peek(o).color);
                        return i
                    },
                    forcebw: function() {
                        var e = this.vboxes;
                        e.sort(function(e, t) {
                            return i.naturalOrder(i.sum(e.color), i.sum(t.color))
                        });
                        var t = e[0].color;
                        t[0] < 5 && t[1] < 5 && t[2] < 5 && (e[0].color = [0, 0, 0]);
                        var n = e.length - 1,
                            r = e[n].color;
                        r[0] > 251 && r[1] > 251 && r[2] > 251 && (e[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(a, l) {
                        if (!a.length || l < 2 || l > 256) return !1;
                        var u, s, c, d, E, _, f, I, p, T, h, S, N, A, g, O, C = (u = a, E = Array(32768), u.forEach(function(n) {
                                c = n[0] >> e, d = n[1] >> e, E[s = t(c, d, n[2] >> e)] = (E[s] || 0) + 1
                            }), E),
                            m = 0;
                        C.forEach(function() {
                            m++
                        });
                        var R = (_ = a, f = C, h = 1e6, S = 0, N = 1e6, A = 0, g = 1e6, O = 0, _.forEach(function(t) {
                                I = t[0] >> e, p = t[1] >> e, T = t[2] >> e, I < h ? h = I : I > S && (S = I), p < N ? N = p : p > A && (A = p), T < g ? g = T : T > O && (O = T)
                            }), new r(h, S, N, A, g, O, f)),
                            v = new n(function(e, t) {
                                return i.naturalOrder(e.count(), t.count())
                            });

                        function L(e, n) {
                            for (var r, o = 1, a = 0; a < 1e3;) {
                                if (!(r = e.pop()).count()) {
                                    e.push(r), a++;
                                    continue
                                }
                                var l = function(e, n) {
                                        if (n.count()) {
                                            var r = n.r2 - n.r1 + 1,
                                                o = n.g2 - n.g1 + 1,
                                                a = n.b2 - n.b1 + 1,
                                                l = i.max([r, o, a]);
                                            if (1 == n.count()) return [n.copy()];
                                            var u, s, c, d, E, _ = 0,
                                                f = [],
                                                I = [];
                                            if (l == r)
                                                for (u = n.r1; u <= n.r2; u++) {
                                                    for (d = 0, s = n.g1; s <= n.g2; s++)
                                                        for (c = n.b1; c <= n.b2; c++) d += e[E = t(u, s, c)] || 0;
                                                    _ += d, f[u] = _
                                                } else if (l == o)
                                                    for (u = n.g1; u <= n.g2; u++) {
                                                        for (d = 0, s = n.r1; s <= n.r2; s++)
                                                            for (c = n.b1; c <= n.b2; c++) d += e[E = t(s, u, c)] || 0;
                                                        _ += d, f[u] = _
                                                    } else
                                                        for (u = n.b1; u <= n.b2; u++) {
                                                            for (d = 0, s = n.r1; s <= n.r2; s++)
                                                                for (c = n.g1; c <= n.g2; c++) d += e[E = t(s, c, u)] || 0;
                                                            _ += d, f[u] = _
                                                        }
                                            return f.forEach(function(e, t) {
                                                I[t] = _ - e
                                            }), p(l == r ? "r" : l == o ? "g" : "b")
                                        }

                                        function p(e) {
                                            var t, i, r, o, a, l = e + "1",
                                                s = e + "2",
                                                c = 0;
                                            for (u = n[l]; u <= n[s]; u++)
                                                if (f[u] > _ / 2) {
                                                    for (r = n.copy(), o = n.copy(), t = u - n[l], a = t <= (i = n[s] - u) ? Math.min(n[s] - 1, ~~(u + i / 2)) : Math.max(n[l], ~~(u - 1 - t / 2)); !f[a];) a++;
                                                    for (c = I[a]; !c && f[a - 1];) c = I[--a];
                                                    return r[s] = a, o[l] = r[s] + 1, [r, o]
                                                }
                                        }
                                    }(C, r),
                                    u = l[0],
                                    s = l[1];
                                if (!u) return;
                                if (e.push(u), s && (e.push(s), o++), o >= n || a++ > 1e3) return
                            }
                        }
                        v.push(R), L(v, .75 * l);
                        for (var U = new n(function(e, t) {
                                return i.naturalOrder(e.count() * e.volume(), t.count() * t.volume())
                            }); v.size();) U.push(v.pop());
                        L(U, l - U.size());
                        for (var D = new o; U.size();) D.push(U.pop());
                        return D
                    }
                }
            }();
            e.exports = r.quantize
        },
        48174: function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return i.default
                },
                useStableMemo: function() {
                    return r.default
                },
                useLazyValue: function() {
                    return o.default
                }
            });
            var i = n("14716"),
                r = n("745510"),
                o = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r() {
                let [, e] = (0, i.useState)({});
                return (0, i.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691");
            let r = {};

            function o(e) {
                let t = (0, i.useRef)(r);
                return t.current === r && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("884691"),
                r = n("48174");
            let o = [];

            function a(e, t) {
                let n = (0, i.useRef)(),
                    a = (0, i.useRef)(o);
                return a.current === o ? (n.current = e(), a.current = t) : !(0, r.default)(t, a.current) && (n.current = e(), a.current = t), n.current
            }
        },
        445356: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c8718df1382ba878f1fc.svg"
        },
        460287: function(e, t, n) {
            "use strict";
            e.exports = n.p + "08e581a604e6635d1424.svg"
        },
        376507: function(e, t, n) {
            "use strict";

            function i(e) {
                let t = "==".slice(0, (4 - e.length % 4) % 4),
                    n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
                    i = atob(n),
                    r = new ArrayBuffer(i.length),
                    o = new Uint8Array(r);
                for (let e = 0; e < i.length; e++) o[e] = i.charCodeAt(e);
                return r
            }

            function r(e) {
                let t = new Uint8Array(e),
                    n = "";
                for (let e of t) n += String.fromCharCode(e);
                let i = btoa(n),
                    r = i.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
                return r
            }
            n.r(t), n.d(t, {
                create: function() {
                    return h
                },
                get: function() {
                    return S
                }
            });
            var o = "copy",
                a = "convert";

            function l(e, t, n) {
                if (t === o) return n;
                if (t === a) return e(n);
                if (t instanceof Array) return n.map(n => l(e, t[0], n));
                if (t instanceof Object) {
                    let i = {};
                    for (let [r, o] of Object.entries(t)) {
                        if (o.derive) {
                            let e = o.derive(n);
                            void 0 !== e && (n[r] = e)
                        }
                        if (!(r in n)) {
                            if (o.required) throw Error("Missing key: ".concat(r));
                            continue
                        }
                        if (null == n[r]) {
                            i[r] = null;
                            continue
                        }
                        i[r] = l(e, o.schema, n[r])
                    }
                    return i
                }
            }

            function u(e, t) {
                return {
                    required: !0,
                    schema: e,
                    derive: t
                }
            }

            function s(e) {
                return {
                    required: !0,
                    schema: e
                }
            }

            function c(e) {
                return {
                    required: !1,
                    schema: e
                }
            }
            var d = {
                    type: s(o),
                    id: s(a),
                    transports: c(o)
                },
                E = {
                    appid: c(o),
                    appidExclude: c(o),
                    credProps: c(o)
                },
                _ = {
                    appid: c(o),
                    appidExclude: c(o),
                    credProps: c(o)
                },
                f = {
                    publicKey: s({
                        rp: s(o),
                        user: s({
                            id: s(a),
                            name: s(o),
                            displayName: s(o)
                        }),
                        challenge: s(a),
                        pubKeyCredParams: s(o),
                        timeout: c(o),
                        excludeCredentials: c([d]),
                        authenticatorSelection: c(o),
                        attestation: c(o),
                        extensions: c(E)
                    }),
                    signal: c(o)
                },
                I = {
                    type: s(o),
                    id: s(o),
                    rawId: s(a),
                    authenticatorAttachment: c(o),
                    response: s({
                        clientDataJSON: s(a),
                        attestationObject: s(a),
                        transports: u(o, e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        })
                    }),
                    clientExtensionResults: u(_, e => e.getClientExtensionResults())
                },
                p = {
                    mediation: c(o),
                    publicKey: s({
                        challenge: s(a),
                        timeout: c(o),
                        rpId: c(o),
                        allowCredentials: c([d]),
                        userVerification: c(o),
                        extensions: c(E)
                    }),
                    signal: c(o)
                },
                T = {
                    type: s(o),
                    id: s(o),
                    rawId: s(a),
                    authenticatorAttachment: c(o),
                    response: s({
                        clientDataJSON: s(a),
                        authenticatorData: s(a),
                        signature: s(a),
                        userHandle: s(a)
                    }),
                    clientExtensionResults: u(_, e => e.getClientExtensionResults())
                };
            async function h(e) {
                let t = await navigator.credentials.create(l(i, f, e));
                return l(r, I, t)
            }
            async function S(e) {
                let t = await navigator.credentials.get(l(i, p, e));
                return l(r, T, t)
            }
        },
        506838: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                P: function() {
                    return X
                },
                match: function() {
                    return J
                }
            });
            let i = Symbol.for("@ts-pattern/matcher"),
                r = Symbol.for("@ts-pattern/isVariadic"),
                o = "@ts-pattern/anonymous-select-key",
                a = e => !!(e && "object" == typeof e),
                l = e => e && !!e[i],
                u = (e, t, n) => {
                    if (l(e)) {
                        let r = e[i](),
                            {
                                matched: o,
                                selections: a
                            } = r.match(t);
                        return o && a && Object.keys(a).forEach(e => n(e, a[e])), o
                    }
                    if (a(e)) {
                        if (!a(t)) return !1;
                        if (Array.isArray(e)) {
                            if (!Array.isArray(t)) return !1;
                            let i = [],
                                o = [],
                                a = [];
                            for (let t of e.keys()) {
                                let n = e[t];
                                l(n) && n[r] ? a.push(n) : a.length ? o.push(n) : i.push(n)
                            }
                            if (a.length) {
                                if (a.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (t.length < i.length + o.length) return !1;
                                let e = t.slice(0, i.length),
                                    r = 0 === o.length ? [] : t.slice(-o.length),
                                    l = t.slice(i.length, 0 === o.length ? 1 / 0 : -o.length);
                                return i.every((t, i) => u(t, e[i], n)) && o.every((e, t) => u(e, r[t], n)) && (0 === a.length || u(a[0], l, n))
                            }
                            return e.length === t.length && e.every((e, i) => u(e, t[i], n))
                        }
                        return Object.keys(e).every(r => {
                            let o = e[r];
                            return (r in t || l(o) && "optional" === o[i]().matcherType) && u(o, t[r], n)
                        })
                    }
                    return Object.is(t, e)
                },
                s = e => {
                    var t, n, r;
                    return a(e) ? l(e) ? null != (t = null == (n = (r = e[i]()).getSelectionKeys) ? void 0 : n.call(r)) ? t : [] : Array.isArray(e) ? c(e, s) : c(Object.values(e), s) : []
                },
                c = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);

            function d(e) {
                return Object.assign(e, {
                    optional: () => E(e),
                    and: t => I(e, t),
                    or: t => p(e, t),
                    select: t => void 0 === t ? h(e) : h(t, e)
                })
            }

            function E(e) {
                return d({
                    [i]: () => ({
                        match: t => {
                            let n = {},
                                i = (e, t) => {
                                    n[e] = t
                                };
                            return void 0 === t ? (s(e).forEach(e => i(e, void 0)), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: u(e, t, i),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => s(e),
                        matcherType: "optional"
                    })
                })
            }
            let _ = (e, t) => {
                    for (let n of e)
                        if (!t(n)) return !1;
                    return !0
                },
                f = (e, t) => {
                    for (let [n, i] of e.entries())
                        if (!t(i, n)) return !1;
                    return !0
                };

            function I() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return d({
                    [i]: () => ({
                        match: e => {
                            let n = {},
                                i = (e, t) => {
                                    n[e] = t
                                };
                            return {
                                matched: t.every(t => u(t, e, i)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => c(t, s),
                        matcherType: "and"
                    })
                })
            }

            function p() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return d({
                    [i]: () => ({
                        match: e => {
                            let n = {},
                                i = (e, t) => {
                                    n[e] = t
                                };
                            return c(t, s).forEach(e => i(e, void 0)), {
                                matched: t.some(t => u(t, e, i)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => c(t, s),
                        matcherType: "or"
                    })
                })
            }

            function T(e) {
                return {
                    [i]: () => ({
                        match: t => ({
                            matched: !!e(t)
                        })
                    })
                }
            }

            function h() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let r = "string" == typeof t[0] ? t[0] : void 0,
                    a = 2 === t.length ? t[1] : "string" == typeof t[0] ? void 0 : t[0];
                return d({
                    [i]: () => ({
                        match: e => {
                            let t = {
                                [null != r ? r : o]: e
                            };
                            return {
                                matched: void 0 === a || u(a, e, (e, n) => {
                                    t[e] = n
                                }),
                                selections: t
                            }
                        },
                        getSelectionKeys: () => [null != r ? r : o].concat(void 0 === a ? [] : s(a))
                    })
                })
            }

            function S(e) {
                return "number" == typeof e
            }

            function N(e) {
                return "string" == typeof e
            }

            function A(e) {
                return "bigint" == typeof e
            }
            let g = d(T(function(e) {
                    return !0
                })),
                O = e => Object.assign(d(e), {
                    startsWith: t => O(I(e, T(e => N(e) && e.startsWith(t)))),
                    endsWith: t => O(I(e, T(e => N(e) && e.endsWith(t)))),
                    minLength: t => {
                        var n;
                        return O(I(e, (n = t, T(e => N(e) && e.length >= n))))
                    },
                    maxLength: t => {
                        var n;
                        return O(I(e, (n = t, T(e => N(e) && e.length <= n))))
                    },
                    includes: t => O(I(e, T(e => N(e) && e.includes(t)))),
                    regex: t => O(I(e, T(e => N(e) && !!e.match(t))))
                }),
                C = O(T(N)),
                m = (e, t) => T(n => S(n) && e <= n && t >= n),
                R = e => T(t => S(t) && t < e),
                v = e => T(t => S(t) && t > e),
                L = e => T(t => S(t) && t <= e),
                U = e => T(t => S(t) && t >= e),
                D = () => T(e => S(e) && Number.isInteger(e)),
                y = () => T(e => S(e) && Number.isFinite(e)),
                P = () => T(e => S(e) && e > 0),
                M = () => T(e => S(e) && e < 0),
                b = e => Object.assign(d(e), {
                    between: (t, n) => b(I(e, m(t, n))),
                    lt: t => b(I(e, R(t))),
                    gt: t => b(I(e, v(t))),
                    lte: t => b(I(e, L(t))),
                    gte: t => b(I(e, U(t))),
                    int: () => b(I(e, D())),
                    finite: () => b(I(e, y())),
                    positive: () => b(I(e, P())),
                    negative: () => b(I(e, M()))
                }),
                G = b(T(S)),
                w = (e, t) => T(n => A(n) && e <= n && t >= n),
                F = e => T(t => A(t) && t < e),
                B = e => T(t => A(t) && t > e),
                x = e => T(t => A(t) && t <= e),
                k = e => T(t => A(t) && t >= e),
                V = () => T(e => A(e) && e > 0),
                H = () => T(e => A(e) && e < 0),
                K = e => Object.assign(d(e), {
                    between: (t, n) => K(I(e, w(t, n))),
                    lt: t => K(I(e, F(t))),
                    gt: t => K(I(e, B(t))),
                    lte: t => K(I(e, x(t))),
                    gte: t => K(I(e, k(t))),
                    positive: () => K(I(e, V())),
                    negative: () => K(I(e, H()))
                }),
                W = K(T(A)),
                Y = d(T(function(e) {
                    return "boolean" == typeof e
                })),
                j = d(T(function(e) {
                    return "symbol" == typeof e
                })),
                z = d(T(function(e) {
                    return null == e
                }));
            var X = {
                __proto__: null,
                matcher: i,
                optional: E,
                array: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function e(t) {
                        var n;
                        return Object.assign((n = t, Object.assign(n, {
                            *[Symbol.iterator]() {
                                yield Object.assign(n, {
                                    [r]: !0
                                })
                            }
                        })), {
                            optional: () => e(E(t)),
                            select: n => e(void 0 === n ? h(t) : h(n, t))
                        })
                    }({
                        [i]: () => ({
                            match: e => {
                                if (!Array.isArray(e)) return {
                                    matched: !1
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                let n = t[0],
                                    i = {};
                                if (0 === e.length) return s(n).forEach(e => {
                                    i[e] = []
                                }), {
                                    matched: !0,
                                    selections: i
                                };
                                let r = (e, t) => {
                                    i[e] = (i[e] || []).concat([t])
                                };
                                return {
                                    matched: e.every(e => u(n, e, r)),
                                    selections: i
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : s(t[0])
                        })
                    })
                },
                set: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return d({
                        [i]: () => ({
                            match: e => {
                                if (!(e instanceof Set)) return {
                                    matched: !1
                                };
                                let n = {};
                                if (0 === e.size) return {
                                    matched: !0,
                                    selections: n
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                let i = (e, t) => {
                                        n[e] = (n[e] || []).concat([t])
                                    },
                                    r = t[0];
                                return {
                                    matched: _(e, e => u(r, e, i)),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : s(t[0])
                        })
                    })
                },
                map: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return d({
                        [i]: () => ({
                            match: e => {
                                var n;
                                if (!(e instanceof Map)) return {
                                    matched: !1
                                };
                                let i = {};
                                if (0 === e.size) return {
                                    matched: !0,
                                    selections: i
                                };
                                let r = (e, t) => {
                                    i[e] = (i[e] || []).concat([t])
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                if (1 === t.length) throw Error("`P.map` wasn't given enough arguments. Expected (key, value), received ".concat(null == (n = t[0]) ? void 0 : n.toString()));
                                let [o, a] = t;
                                return {
                                    matched: f(e, (e, t) => {
                                        let n = u(o, t, r),
                                            i = u(a, e, r);
                                        return n && i
                                    }),
                                    selections: i
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : [...s(t[0]), ...s(t[1])]
                        })
                    })
                },
                intersection: I,
                union: p,
                not: function(e) {
                    return d({
                        [i]: () => ({
                            match: t => ({
                                matched: !u(e, t, () => {})
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: T,
                select: h,
                any: g,
                _: g,
                string: C,
                between: m,
                lt: R,
                gt: v,
                lte: L,
                gte: U,
                int: D,
                finite: y,
                positive: P,
                negative: M,
                number: G,
                betweenBigInt: w,
                ltBigInt: F,
                gtBigInt: B,
                lteBigInt: x,
                gteBigInt: k,
                positiveBigInt: V,
                negativeBigInt: H,
                bigint: W,
                boolean: Y,
                symbol: j,
                nullish: z,
                instanceOf: function(e) {
                    var t;
                    return d(T((t = e, e => e instanceof t)))
                },
                shape: function(e) {
                    return d(T(function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        if (1 === t.length) {
                            let [e] = t;
                            return t => u(e, t, () => {})
                        }
                        if (2 === t.length) {
                            let [e, n] = t;
                            return u(e, n, () => {})
                        }
                        throw Error("isMatching wasn't given the right number of arguments: expected 1 or 2, received ".concat(t.length, "."))
                    }(e)))
                }
            };
            let q = {
                matched: !1,
                value: void 0
            };

            function J(e) {
                return new Q(e, q)
            }
            class Q {
                with() {
                    let e;
                    for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    if (this.state.matched) return this;
                    let r = n[n.length - 1],
                        a = [n[0]];
                    3 === n.length && "function" == typeof n[1] ? (a.push(n[0]), e = n[1]) : n.length > 2 && a.push(...n.slice(1, n.length - 1));
                    let l = !1,
                        s = {},
                        c = (e, t) => {
                            l = !0, s[e] = t
                        },
                        d = a.some(e => u(e, this.input, c)) && (!e || e(this.input)) ? {
                            matched: !0,
                            value: r(l ? o in s ? s[o] : s : this.input, this.input)
                        } : q;
                    return new Q(this.input, d)
                }
                when(e, t) {
                    if (this.state.matched) return this;
                    let n = !!e(this.input);
                    return new Q(this.input, n ? {
                        matched: !0,
                        value: t(this.input, this.input)
                    } : q)
                }
                otherwise(e) {
                    return this.state.matched ? this.state.value : e(this.input)
                }
                exhaustive() {
                    return this.run()
                }
                run() {
                    let e;
                    if (this.state.matched) return this.state.value;
                    try {
                        e = JSON.stringify(this.input)
                    } catch (t) {
                        e = this.input
                    }
                    throw Error("Pattern matching error: no pattern matches value ".concat(e))
                }
                returnType() {
                    return this
                }
                constructor(e, t) {
                    this.input = void 0, this.state = void 0, this.input = e, this.state = t
                }
            }
        },
        437140: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("759843"),
                r = n("627929"),
                o = n("913144"),
                a = n("81732"),
                l = n("282109"),
                u = n("840707"),
                s = n("519705"),
                c = n("49111"),
                d = n("397336"),
                E = {
                    createChannel(e) {
                        let {
                            guildId: t,
                            type: n,
                            name: E,
                            permissionOverwrites: _ = [],
                            bitrate: f,
                            userLimit: I,
                            parentId: p,
                            skuId: T,
                            branchId: h
                        } = e;
                        o.default.dispatch({
                            type: "CREATE_CHANNEL_MODAL_SUBMIT"
                        });
                        let S = {
                            type: n,
                            name: E,
                            permission_overwrites: _
                        };
                        if (null != f && f !== c.BITRATE_DEFAULT && (S.bitrate = f), null != I && I > 0 && (S.user_limit = I), null != p && (S.parent_id = p), n === c.ChannelTypes.GUILD_STORE) {
                            if (null == T) throw Error("Unexpected missing SKU");
                            S.sku_id = T, S.branch_id = h
                        }
                        return u.default.post({
                            url: c.Endpoints.GUILD_CHANNELS(t),
                            body: S,
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: i.NetworkActionNames.CHANNEL_CREATE,
                                properties: e => {
                                    var t, n;
                                    return (0, r.exact)({
                                        is_private: _.length > 0,
                                        channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                        channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                                    })
                                }
                            }
                        }).then(e => (l.default.isOptInEnabled(t) && s.default.updateChannelOverrideSettings(t, e.body.id, {
                            flags: d.ChannelNotificationSettingsFlags.OPT_IN_ENABLED
                        }), a.default.checkGuildTemplateDirty(t), e), e => {
                            throw o.default.dispatch({
                                type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                                errors: e.body
                            }), e
                        })
                    },
                    createRoleSubscriptionTemplateChannel: (e, t, n, o) => u.default.post({
                        url: c.Endpoints.GUILD_CHANNELS(e),
                        body: {
                            name: t,
                            type: n,
                            topic: o
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: i.NetworkActionNames.CHANNEL_CREATE,
                            properties: e => {
                                var t, n;
                                return (0, r.exact)({
                                    is_private: !0,
                                    channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                    channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                                })
                            }
                        }
                    })
                }
        },
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return o
                },
                unsubscribeMembers: function() {
                    return a
                },
                subscribeChannel: function() {
                    return l
                },
                subscribeChannelDimensions: function() {
                    return u
                }
            });
            var i = n("913144"),
                r = n("696605");

            function o(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function a(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function l(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function u(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: o,
                    rowHeight: a
                } = e;

                function u(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / a)) + t)
                }
                let s = [];

                function c(e) {
                    let t = e + (r.MINIMUM_RANGE - 1);
                    return s.push([e, t]), t + 1
                }
                let d = u(.5 * o),
                    E = u(i, -d),
                    _ = u(i + o, d);
                for (E > 0 && (E = Math.max(c(0), E)), E = Math.floor(E / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; E <= _;) E = c(E);
                l(t, n, s)
            }
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return r
                },
                popLayer: function() {
                    return o
                },
                popAllLayers: function() {
                    return a
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function o() {
                i.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function a() {
                i.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
                    return u
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function o(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function a() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function l(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function u() {
                i.default.wait(() => i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        519705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("866227"),
                r = n.n(i),
                o = n("819855"),
                a = n("913144"),
                l = n("679428"),
                u = n("282109"),
                s = n("34676"),
                c = n("397336"),
                d = n("782340"),
                E = {
                    open(e) {
                        a.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                            guildId: e
                        })
                    },
                    close() {
                        a.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        })
                    },
                    updateGuildNotificationSettings(e, t, n) {
                        let i = (0, s.getCurrentGuildSettings)(e);
                        l.default.saveUserGuildSettings(e, t), a.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, s.trackGuildNotificationSettingsUpdate)(e, t, i, n)
                    },
                    updateGuildAndChannelNotificationSettings(e, t, n) {
                        let i = Object.keys(t.channel_overrides),
                            r = (0, s.getCurrentGuildSettings)(e),
                            o = (0, s.getManyCurrentChannelSettings)(e, i);
                        l.default.saveUserGuildSettings(e, t), a.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, s.trackGuildNotificationSettingsUpdate)(e, t, r, n), Object.keys(t.channel_overrides).forEach(i => {
                            let r = o.get(i);
                            (0, s.trackChannelNotificationSettingsUpdate)(e, i, t.channel_overrides[i], r, n)
                        })
                    },
                    updateGuildNotificationSettingsBulk(e, t) {
                        let n = Object.keys(e),
                            i = (0, s.getManyCurrentGuildSettings)(n);
                        l.default.saveUserGuildSettingsBulk(e), Object.entries(e).forEach(e => {
                            let [n, r] = e, o = i.get(n);
                            a.default.dispatch({
                                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                                guildId: n,
                                settings: r
                            }), (0, s.trackGuildNotificationSettingsUpdate)(n, r, o, t)
                        })
                    },
                    updateChannelOverrideSettings(e, t, n, i) {
                        let r = (0, s.getCurrentChannelSettings)(e, t);
                        l.default.saveUserGuildSettings(e, {
                            channel_overrides: {
                                [t]: n
                            }
                        }), a.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                            guildId: e,
                            channelId: t,
                            settings: n
                        }), o.AccessibilityAnnouncer.announce(d.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, s.trackChannelNotificationSettingsUpdate)(e, t, n, r, i)
                    },
                    updateChannelOverrideSettingsBulk(e, t, n) {
                        let i = Object.keys(t),
                            r = (0, s.getManyCurrentChannelSettings)(e, i);
                        l.default.saveUserGuildSettings(e, {
                            channel_overrides: t
                        }), a.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                            guildId: e,
                            overrides: t
                        }), Object.keys(t).forEach(i => (0, s.trackChannelNotificationSettingsUpdate)(e, i, t[i], r.get(i), n))
                    },
                    setForumThreadsCreated(e, t) {
                        let n = t ? c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
                            i = t ? c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
                            r = u.default.getChannelFlags(e);
                        this.updateChannelOverrideSettings(e.guild_id, e.id, {
                            flags: r & ~i | n
                        })
                    },
                    handleCheckboxChange: function(e, t, n, i) {
                        a.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: i.id,
                            profile: e,
                            updatedSettings: {
                                [t]: n
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleSelectChange: function(e, t, n, i) {
                        a.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: i.id,
                            profile: e,
                            updatedSettings: {
                                [t]: n
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleMuteConfigChange: function(e, t, n) {
                        let i = t > 0 ? r().add(t, "second").toISOString() : null;
                        a.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: n.id,
                            profile: "MUTED",
                            updatedSettings: {
                                [e]: {
                                    selected_time_window: t,
                                    end_time: i
                                }
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleHighlightsChange: function(e, t, n) {
                        a.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: n.id,
                            profile: e,
                            updatedSettings: {
                                notifyHighlights: t
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleProfileChange: function(e, t) {
                        a.default.dispatch({
                            type: "GUILD_SET_NOTIFICATION_PROFILE",
                            guildId: t.id,
                            profile: e.value,
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    }
                }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return r
                }
            });
            var i = n("913144");

            function r() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        775433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionPlansForSKU: function() {
                    return d
                },
                fetchSubscriptionPlansBySKUs: function() {
                    return E
                },
                fetchPremiumSubscriptionPlans: function() {
                    return _
                },
                resetSubscriptionPlanData: function() {
                    return f
                }
            });
            var i = n("872717"),
                r = n("913144"),
                o = n("333805"),
                a = n("160299"),
                l = n("745279"),
                u = n("850068"),
                s = n("49111"),
                c = n("646718");
            async function d(e, t, n, c, d) {
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let o = {
                            url: s.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        l = {};
                    null != t && (l.country_code = t), null != n && (l.payment_source_id = n), null != c && (l.include_unpublished = c), null != d && (l.revenue_surface = d), o.query = l, !a.default.ipCountryCodeLoaded && await (0, u.fetchIpCountryCode)();
                    let E = await i.default.get(o);
                    r.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: E.body
                    })
                } catch (t) {
                    throw r.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, l.captureBillingException)(t), new o.default(t)
                }
            }

            function E(e, t) {
                return Promise.all(e.filter(e => e !== c.PremiumSubscriptionSKUs.NONE).map(e => d(e, t)))
            }

            function _(e, t, n) {
                return Promise.all(c.ACTIVE_PREMIUM_SKUS.filter(e => e !== c.PremiumSubscriptionSKUs.NONE).map(i => d(i, e, t, void 0, n)))
            }

            function f() {
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return I
                },
                accountDetailsClose: function() {
                    return p
                },
                disableAccount: function() {
                    return T
                },
                saveAccountRequest: function() {
                    return h
                },
                saveAccountChanges: function() {
                    return S
                },
                getHarvestStatus: function() {
                    return N
                },
                requestHarvest: function() {
                    return A
                },
                setPendingAvatar: function() {
                    return g
                },
                setPendingGlobalNameName: function() {
                    return O
                },
                setPendingAvatarDecoration: function() {
                    return C
                },
                setPendingProfileEffectID: function() {
                    return m
                },
                clearErrors: function() {
                    return R
                },
                resetPendingAccountChanges: function() {
                    return v
                },
                resetAllPending: function() {
                    return L
                },
                resetAndCloseUserProfileForm: function() {
                    return U
                },
                setDisableSubmit: function() {
                    return D
                }
            });
            var i = n("872717"),
                r = n("95410"),
                o = n("819855"),
                a = n("913144"),
                l = n("393414"),
                u = n("599110"),
                s = n("315102"),
                c = n("730622"),
                d = n("437822"),
                E = n("49111"),
                _ = n("191349"),
                f = n("782340");

            function I() {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function p() {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function T(e, t) {
                let n = t ? f.default.Messages.DELETE_ACCOUNT : f.default.Messages.DISABLE_ACCOUNT,
                    r = t ? E.Endpoints.DELETE_ACCOUNT : E.Endpoints.DISABLE_ACCOUNT;
                return (0, c.default)(t => i.default.post({
                    url: r,
                    body: {
                        password: e,
                        ...t
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: n
                    },
                    checkEnabled: !1
                }).then(() => {
                    d.default.logoutInternal(), (0, l.transitionTo)(E.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function h(e) {
                let t = await i.default.patch({
                        url: E.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, a.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && a.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return a.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function S(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: o,
                    password: l,
                    avatar: d,
                    avatarDecoration: I,
                    newPassword: p,
                    globalName: T
                } = e;
                return a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, c.default)(e => {
                    let a = {
                        username: t,
                        email: i,
                        email_token: o,
                        password: l,
                        avatar: d,
                        discriminator: n,
                        global_name: T,
                        new_password: p,
                        ...e
                    };
                    null === I && (a.avatar_decoration_id = null), null != I && (a.avatar_decoration_id = I.id, a.avatar_decoration_sku_id = I.skuId);
                    let u = r.default.get(E.DEVICE_TOKEN),
                        s = (0, _.getDevicePushProvider)();
                    null != s && null != u && (a.push_provider = s, a.push_token = u);
                    let c = r.default.get(E.DEVICE_VOIP_TOKEN);
                    return null != _.DEVICE_PUSH_VOIP_PROVIDER && null != c && (a.push_voip_provider = _.DEVICE_PUSH_VOIP_PROVIDER, a.push_voip_token = c), h(a)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: f.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => a.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return u.default.track(E.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, s.isAnimatedIconHash)(t.avatar)
                    }), a.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function N() {
                return i.default.get({
                    url: E.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function A() {
                return i.default.post({
                    url: E.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function g(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? o.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : o.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function O(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function C(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function m(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function R() {
                a.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function v() {
                a.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function L() {
                a.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function U() {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function D(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("872717"),
                r = n("95410"),
                o = n("913144"),
                a = n("211895"),
                l = n("26092"),
                u = n("599110"),
                s = n("315102"),
                c = n("730622"),
                d = n("49111"),
                E = n("191349"),
                _ = n("782340"),
                f = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, a.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        o.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = l.default.onClose;
                        o.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        o.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        o.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        o.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        o.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        o.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        o.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        o.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: a,
                            emailToken: l,
                            password: f,
                            avatar: I,
                            newPassword: p,
                            discriminator: T
                        } = e, {
                            close: h
                        } = t;
                        return (0, c.default)(e => {
                            let t = {
                                    username: n,
                                    email: a,
                                    email_token: l,
                                    password: f,
                                    avatar: I,
                                    new_password: p,
                                    ...e,
                                    discriminator: null != T && "" !== T ? T : void 0
                                },
                                o = r.default.get(d.DEVICE_TOKEN),
                                u = (0, E.getDevicePushProvider)();
                            null != u && null != o && (t.push_provider = u, t.push_token = o);
                            let s = r.default.get(d.DEVICE_VOIP_TOKEN);
                            return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != s && (t.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = s), i.default.patch({
                                url: d.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => o.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return u.default.track(d.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, s.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, o.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), o.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != p && o.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: p
                            }), null != f && null != p && o.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), h ? this.close() : this.submitComplete(), e
                        }, e => (o.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        }), e))
                    }
                }
        },
        137223: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RichTagTypes: function() {
                    return r
                },
                SearchBarIcon: function() {
                    return h
                },
                default: function() {
                    return N
                }
            });
            var i, r, o = n("37983"),
                a = n("884691"),
                l = n("414456"),
                u = n.n(l),
                s = n("77078"),
                c = n("109024"),
                d = n("945330"),
                E = n("229915"),
                _ = n("439932"),
                f = n("49111"),
                I = n("782340"),
                p = n("515315");
            let T = Object.freeze({
                SMALL: p.small,
                MEDIUM: p.medium,
                LARGE: p.large
            });
            (i = r || (r = {})).MEMBER = "MEMBER", i.ROLE = "ROLE", i.CHANNEL = "CHANNEL", i.GUILD = "GUILD", i.USER = "USER";
            let h = e => {
                let {
                    hasContent: t,
                    onClear: n,
                    className: i,
                    themeOverride: r,
                    size: a = T.SMALL
                } = e;
                return (0, o.jsx)(s.Clickable, {
                    className: u(i, p.iconLayout, a, (0, _.getThemeClass)(r), {
                        [p.clear]: t
                    }),
                    onClick: e => {
                        e.stopPropagation(), null != n && n(e)
                    },
                    onMouseDown: e => {
                        e.preventDefault(), e.stopPropagation()
                    },
                    tabIndex: t ? 0 : -1,
                    "aria-hidden": !t,
                    "aria-label": I.default.Messages.SEARCH_CLEAR,
                    focusProps: {
                        offset: 4
                    },
                    children: (0, o.jsxs)("div", {
                        className: p.iconContainer,
                        children: [(0, o.jsx)(E.default, {
                            className: u({
                                [p.icon]: !0,
                                [p.visible]: !t
                            })
                        }), (0, o.jsx)(d.default, {
                            className: u({
                                [p.icon]: !0,
                                [p.visible]: t
                            })
                        })]
                    })
                })
            };
            class S extends a.Component {
                componentDidUpdate(e) {
                    let {
                        focusAfterReady: t,
                        isReady: n
                    } = this.props;
                    t && !e.isReady && n && this.focus()
                }
                handleKeyDownGrid(e) {
                    let {
                        selectedRow: t,
                        selectedColumn: n,
                        sections: i,
                        query: r,
                        tags: o,
                        onSelectionChange: a,
                        onSelect: l,
                        onRemoveTag: u,
                        preventEscapePropagation: s
                    } = this.props;
                    if (0 !== i.length) {
                        switch (e.keyCode) {
                            case f.KeyboardKeys.BACKSPACE:
                                if ((null == r || 0 === r.length) && null != o && o.length > 0) e.preventDefault(), e.stopPropagation(), null == u || u(o.length - 1);
                                break;
                            case f.KeyboardKeys.ARROW_DOWN:
                                e.preventDefault(), e.stopPropagation(), -1 === t ? (t = 0, n = 0) : ((t += 1) >= i.length && (t = i.length - 1), n >= i[t] && (n = i[t] - 1));
                                break;
                            case f.KeyboardKeys.ARROW_UP:
                                e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, n = 0) : n >= i[t] && (n = i[t] - 1);
                                break;
                            case f.KeyboardKeys.ARROW_LEFT:
                                e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n -= 1) < 0 && ((t -= 1) >= 0 ? n = i[t] - 1 : t < 0 && (t = 0, n = 0));
                                break;
                            case f.KeyboardKeys.ARROW_RIGHT:
                                e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n += 1) >= i[t] && (n = 0, (t += 1) >= i.length && (t = i.length - 1, n = i[t] - 1));
                                break;
                            case f.KeyboardKeys.ENTER:
                                if (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === n && (n = 0), t >= i.length || n >= i[t]) return;
                                null != l && l(t, n, e);
                                return;
                            case f.KeyboardKeys.ESCAPE:
                                e.preventDefault(), s && e.stopPropagation(), null != l && l(null, null, e);
                                return;
                            default:
                                return
                        }
                        null != a && a(t, n)
                    }
                }
                handleKeyDownList(e) {
                    var t, n;
                    let {
                        sections: i,
                        selectedSection: r,
                        selectedRow: o,
                        onSelect: a,
                        onSelectionChange: l,
                        query: u,
                        tags: s,
                        preventEscapePropagation: c
                    } = this.props, {
                        current: d
                    } = this.ref;
                    if (null != d) switch (e.keyCode) {
                        case f.KeyboardKeys.BACKSPACE:
                            (null == u || 0 === u.length) && null != s && s.length > 0 && (e.preventDefault(), e.stopPropagation(), null === (t = (n = this.props).onRemoveTag) || void 0 === t || t.call(n, s.length - 1));
                            break;
                        case f.KeyboardKeys.ARROW_DOWN:
                            e.preventDefault(), e.stopPropagation(), i.length > r && ++o >= i[r] && (++r >= i.length && (r = 0), o = 0), null == l || l(r, o);
                            break;
                        case f.KeyboardKeys.ARROW_UP:
                            e.preventDefault(), e.stopPropagation(), --o < 0 && (--r < 0 && (r = i.length - 1), o = i[r] - 1), null == l || l(r, o);
                            break;
                        case f.KeyboardKeys.ENTER:
                            e.preventDefault(), e.stopPropagation(), i.length > r && i[r] > o && (null == a || a(r, o, e));
                            break;
                        case f.KeyboardKeys.ESCAPE:
                            e.preventDefault(), c && e.stopPropagation(), null == a || a(null, null, e), d.blur()
                    }
                }
                render() {
                    let {
                        autoFocus: e,
                        query: t,
                        placeholder: n = I.default.Messages.DM_SEARCH_PLACEHOLDER,
                        themeOverride: i,
                        disabled: a,
                        onClear: l,
                        size: E,
                        maxHeight: f,
                        tags: T,
                        onActivate: S,
                        className: N,
                        inputProps: A,
                        focusAfterReady: g
                    } = this.props, O = null != t && t.length > 0, C = !1, m = [];
                    return null != T && T.length > 0 && ("string" == typeof T[0] ? T.forEach((e, t) => m.push((0, o.jsxs)(s.Anchor, {
                        focusProps: {
                            offset: 4
                        },
                        className: p.tag,
                        onClick: this.handleRemoveTag.bind(this, t),
                        children: [e, (0, o.jsx)(d.default, {
                            className: p.close,
                            "aria-label": I.default.Messages.REMOVE
                        })]
                    }, t))) : (C = !0, T.forEach((e, t) => m.push((0, o.jsxs)(s.Anchor, {
                        className: u(p.tag, p.richTag),
                        onClick: this.handleRemoveTag.bind(this, t),
                        children: [(e.type === r.MEMBER || e.type === r.USER) && null != e.avatar && (0, o.jsx)(s.Avatar, {
                            src: e.avatar,
                            "aria-hidden": !0,
                            size: s.AvatarSizes.SIZE_16
                        }), e.type === r.ROLE && null != e.color && (0, o.jsx)("span", {
                            className: p.tagRoleColor,
                            style: {
                                backgroundColor: e.color
                            }
                        }), e.type === r.GUILD && null != e.guild && (0, o.jsx)(c.default, {
                            guild: e.guild,
                            active: !0,
                            size: c.default.Sizes.SMOL
                        }), (0, o.jsx)("span", {
                            className: p.tagLabel,
                            children: e.label
                        }), (0, o.jsx)(d.default, {
                            className: p.close,
                            "aria-label": I.default.Messages.REMOVE
                        })]
                    }, t))))), (0, o.jsx)(s.FocusRing, {
                        focusTarget: this.ref,
                        ringTarget: this.containerRef,
                        children: (0, o.jsx)("div", {
                            ref: this.containerRef,
                            className: u(N, p.container, E, (0, _.getThemeClass)(i), {
                                [p.disabled]: a
                            }),
                            children: (0, o.jsxs)(s.ScrollerThin, {
                                className: p.inner,
                                style: {
                                    maxHeight: f
                                },
                                children: [m, (0, o.jsx)("input", {
                                    className: u(p.input, {
                                        [p.richTagInput]: C
                                    }),
                                    type: "text",
                                    ref: this.ref,
                                    spellCheck: "false",
                                    placeholder: n,
                                    value: t,
                                    onChange: this.handleChange,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleFocus,
                                    disabled: a,
                                    "aria-disabled": a,
                                    autoFocus: !g && e,
                                    onMouseDown: S,
                                    ...this.defaultInputProps,
                                    ...A
                                }), null != l ? (0, o.jsx)(h, {
                                    size: E,
                                    themeOverride: i,
                                    hasContent: O,
                                    onClear: this.handleClear
                                }) : null]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.defaultInputProps = {
                        role: "combobox",
                        "aria-haspopup": "listbox",
                        "aria-autocomplete": "list"
                    }, this.ref = a.createRef(), this.containerRef = a.createRef(), this.handleKeyDown = e => {
                        let {
                            onActivate: t,
                            onKeyDown: n,
                            onQueryChange: i,
                            useKeyboardNavigation: r
                        } = this.props;
                        null != n && n(e);
                        let {
                            current: o
                        } = this.ref;
                        if (null == o || null != t) {
                            e.keyCode !== f.KeyboardKeys.TAB && null != t && t(e);
                            return
                        }
                        if (e.keyCode === f.KeyboardKeys.ESCAPE && null != o.value && "" !== o.value && o.value.length > 0) {
                            o.value = "", null != i && i("");
                            return
                        }
                        r && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
                    }, this.handleChange = e => {
                        let {
                            onQueryChange: t
                        } = this.props;
                        null != t && t(e.currentTarget.value)
                    }, this.handleFocus = e => {
                        let {
                            onFocus: t
                        } = this.props;
                        null != t && t(e)
                    }, this.handleClear = () => {
                        let {
                            onClear: e
                        } = this.props, {
                            current: t
                        } = this.ref;
                        null != e && e(), null != t && t.focus()
                    }, this.handleRemoveTag = e => {
                        let {
                            onRemoveTag: t
                        } = this.props;
                        null == t || t(e)
                    }, this.focus = () => {
                        let {
                            current: e
                        } = this.ref;
                        null != e && e.focus()
                    }
                }
            }
            S.Sizes = T, S.defaultProps = {
                size: T.SMALL,
                query: "",
                sections: [],
                selectedSection: 0,
                selectedRow: -1,
                selectedColumn: -1,
                gridResults: !1,
                disabled: !1,
                autoFocus: !1,
                preventEscapePropagation: !0,
                useKeyboardNavigation: !0
            };
            var N = S
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983"),
                r = n("884691"),
                o = n("414456"),
                a = n.n(o),
                l = n("77078"),
                u = n("782340"),
                s = n("347129");
            class c extends r.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: o,
                        error: c,
                        isLoading: d,
                        maxLength: E,
                        transitionState: _,
                        helpMessage: f,
                        retryPrompt: I,
                        retrySuccessMessage: p
                    } = this.props, {
                        code: T,
                        errorMessage: h,
                        retrySuccess: S
                    } = this.state, N = r.Children.count(o) > 0 ? (0, i.jsx)(l.Card, {
                        type: l.Card.Types.WARNING,
                        className: s.card,
                        children: (0, i.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: o
                        })
                    }) : null, A = null != I ? (0, i.jsxs)(l.Text, {
                        className: a(s.submitText, s.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(l.Clickable, {
                            className: a(s.spacing, s.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(l.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, g = S ? (0, i.jsx)(l.Card, {
                        type: l.Card.Types.SUCCESS,
                        className: s.card,
                        children: (0, i.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: p
                        })
                    }) : null;
                    return (0, i.jsx)(l.ModalRoot, {
                        transitionState: _,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(l.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(l.ModalContent, {
                                children: [null != f ? (0, i.jsx)(l.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s.spacing,
                                    children: f
                                }) : null, N, g, (0, i.jsxs)(l.FormItem, {
                                    title: this.getLabelText(),
                                    className: s.spacing,
                                    children: [(0, i.jsx)(l.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: T,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(l.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s.error,
                                        children: null != c ? c : h
                                    }) : null, A]
                                })]
                            }), (0, i.jsxs)(l.ModalFooter, {
                                children: [(0, i.jsx)(l.Button, {
                                    type: "submit",
                                    disabled: d || 0 === T.length,
                                    children: null != n ? n : u.default.Messages.CONFIRM
                                }), (0, i.jsx)(l.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: l.Button.Looks.LINK,
                                    color: l.Button.Colors.PRIMARY,
                                    children: u.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = e => {
                        this._input = e
                    }, this.getLabelText = () => {
                        var e;
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : u.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : u.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var e;
                        return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: e
                        } = this.props;
                        null == e || e().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            handleSubmit: t,
                            onError: n
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                                errorMessage: e.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: e,
                            handleEarlyClose: t
                        } = this.props;
                        e(), null == t || t()
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }
                }
            }
            c.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var d = c
        },
        599417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("872717"),
                r = n("49111"),
                o = n("782340");
            class a extends i.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(t)
                    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("872717"),
                r = n("49111"),
                o = n("782340");
            class a extends i.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(t)
                    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return o
                }
            });
            var i = n("884691"),
                r = n("599110");
            let o = () => i.useContext(r.AnalyticsContext)
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r(e) {
                let [t, n] = (0, i.useState)(!1), r = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    r.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = r.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [r]), t
            }
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return l
                }
            }), n("37983");
            var i = n("884691"),
                r = n("917351"),
                o = n.n(r);
            n("233736");
            var a = n("666020");

            function l(e) {
                i.useEffect(() => (o.forEach(e, (e, t) => (0, a.subscribeMembers)(t, e)), () => {
                    o.forEach(e, (e, t) => (0, a.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("773336");
            async function r(e, t) {
                let {
                    default: r
                } = await n.el("572544").then(n.bind(n, "572544")), o = r(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != o) o(null);
                else if (i.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        812204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), (i = r || (r = {})).POPOUT_WINDOW = "popout window", i.OVERLAY = "overlay", i.NOTICE = "notice", i.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", i.BADGE = "badge", i.USER_SETTINGS = "user settings", i.USER_SETTINGS_MENU = "user settings menu", i.ACCOUNT = "account", i.TEXT_AND_IMAGES = "text and images", i.GUILD_SETTINGS = "guild settings", i.OVERVIEW = "overview", i.STICKERS = "stickers", i.VANITY_URL = "vanity url", i.PREMIUM_MARKETING = "premium marketing", i.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", i.PREMIUM_PAYMENT_MODAL = "premium payment modal", i.PREMIUM_UPSELL_ALERT = "premium upsell alert", i.PREMIUM_UPSELL_MODAL = "premium upsell modal", i.PREMIUM_SETTINGS = "premium settings", i.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", i.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", i.CHANNEL_CALL = "channel call", i.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", i.RTC_PANEL = "rtc panel", i.SOUNDBOARD_BUTTON = "soundboard button", i.SOUNDBOARD_POPOUT = "soundboard popout", i.SOUNDBOARD_WHEEL = "soundboard wheel", i.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", i.GIFT_BUTTON = "gift button", i.EXPRESSION_SUGGESTIONS = "expression suggestions", i.EMOJI_PICKER = "emoji picker", i.STICKER_PICKER = "sticker picker", i.STICKER_POPOUT = "sticker popout", i.PREMIUM_UPSELL = "premium upsell", i.EMPTY_STATE = "empty state", i.SUBSCRIPTION_DETAILS = "subscription details", i.SUBSCRIPTION_HEADER = "subscription header", i.ACCOUNT_CREDIT_BANNER = "account credit banner", i.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", i.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", i.STREAM_QUALITY_INDICATOR = "stream quality indicator", i.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", i.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", i.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", i.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", i.RPC = "rpc", i.BILLING_STANDALONE = "billing standalone", i.GUILD_CHANNEL_LIST = "guild channel list", i.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", i.STICKER_MESSAGE = "sticker message", i.CHANNEL_TEXT_AREA = "channel text area", i.HEADER_BAR = "header bar", i.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", i.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", i.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", i.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", i.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", i.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", i.GUILD_HEADER = "guild header", i.GUILD_BANNER = "guild banner", i.GUILD_BANNER_NOTICE = "guild banner notice", i.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", i.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", i.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", i.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", i.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", i.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", i.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", i.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", i.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", i.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", i.GUILDS_LIST = "guilds list", i.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", i.ACTIVITY_DIRECTORY = "activity directory", i.ACTIVITY_TILE = "activity tile", i.ACTIVITY_UPSELL = "activity upsell", i.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", i.INSTANT_INVITE_MODAL = "instant invite modal", i.IMAGE_CROPPING_MODAL = "image cropping modal", i.GIF_PICKER = "gif picker", i.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", i.INVITE_MODAL = "invite modal", i.INVITE_EMBED = "invite embed", i.NEW_GUILD_BUTTON = "new guild button", i.CHARACTER_COUNT = "character count", i.DM_CHANNEL = "dm channel", i.GUILD_CHANNEL = "guild channel", i.FORUM_CHANNEL = "forum channel", i.FILE_UPLOAD_POPOUT = "file upload popout", i.EMOJI = "emoji", i.PROFILE = "profile", i.PROFILE_MODAL = "profile modal", i.PROFILE_POPOUT = "profile popout", i.GUILD_PROFILE = "guild profile", i.EDIT_AVATAR = "edit avatar", i.EDIT_BANNER = "edit banner", i.CHAT_INPUT = "chat input", i.CREATE_THREAD = "create thread", i.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", i.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", i.SELECT_IMAGE_MODAL = "select image modal", i.VIDEO_BACKGROUND_OPTIONS = "video background options", i.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", i.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", i.CAMERA_PREVIEW = "camera preview", i.HOME_PAGE_PREMIUM_TAB = "home page premium tab", i.HOME_PAGE_SHOP_TAB = "home page shop tab", i.PREMIUM_MARKETING_SURFACE = "premium marketing surface", i.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", i.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", i.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", i.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", i.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", i.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", i.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", i.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", i.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", i.PREMIUM_MARKETING_FEATURE = "premium marketing feature", i.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", i.PREMIUM_MARKETING_FOOTER = "premium marketing footer", i.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", i.CHANNEL_CALL_ACTION_BAR = "channel call action bar", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", i.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", i.VOICE_CONTROL_TRAY = "voice control tray", i.ACTIVE_NOW_COLUMN = "active now column", i.CONTEXT_MENU = "context menu", i.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", i.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", i.CHANNEL_CATEGORY_MENU = "channel category menu", i.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", i.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", i.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", i.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", i.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", i.CHANNEL_TITLE_MENU = "channel title menu", i.GROUP_DM_MENU = "group dm menu", i.AUDIT_LOG_USER_MENU = "audit log user menu", i.BANNED_USER_MENU = "banned user menu", i.DM_USER_MENU = "dm user menu", i.GROUP_DM_USER_MENU = "group dm user menu", i.GUILD_CHANNEL_USER_MENU = "guild channel user menu", i.GUILD_MODERATION_USER_MENU = "guild moderation user menu", i.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", i.GUILD_SETTINGS_USER_MENU = "guild settings user menu", i.GUILD_USER_MENU = "guild user menu", i.THREAD_USER_MENU = "thread user menu", i.USER_GENERIC_MENU = "user generic menu", i.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", i.VOICE_ACTION_SHEET = "voice action sheet", i.FOCUSED_VOICE_CONTROLS = "focused voice controls", i.MASKED_LINK = "masked link", i.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", i.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", i.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", i.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", i.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", i.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", i.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", i.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", i.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", i.ACCOUNT_PROFILE_POPOUT = "account profile popout", i.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", i.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", i.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", i.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", i.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", i.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", i.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", i.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", i.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", i.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", i.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", i.STAGE_VIDEO_LIMIT = "stage video limit", i.ACTIVITIES_MINI_SHELF = "activities mini shelf", i.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", i.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", i.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", i.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", i.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", i.APP_ICON_EDITOR = "app icon editor", i.CLIENT_THEMES_EDITOR = "client themes editor", i.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", i.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", i.SHARE_NITRO_EMBED = "share nitro embed", i.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", i.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", i.REFERRAL_TRIALS_POPOUT = "referral trials popout", i.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", i.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", i.ACTIVITY_BOOKMARK = "activity bookmark", i.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", i.ACTIVITY_DETAIL_PAGE = "activity detail page", i.ACTIVITIES_PAGE = "activities page", i.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", i.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", i.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", i.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", i.ACTIVITIES_HAPPENING_NOW = "activities happening now", i.MEDIA_VIEWER = "media viewer", i.MESSAGE_LONG_PRESS_MENU = "message long press menu", i.COLLECTIBLES_SHOP = "collectibles shop", i.COLLECTIBLES_SHOP_CARD = "collectibles shop card", i.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", i.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", i.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", i.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", i.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", i.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", i.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", i.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", i.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", i.PREMIUM_BILLING_INFO = "premium billing info", i.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", i.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", i.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", i.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", i.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", i.PREMIUM_PLAN_SELECT = "premium_plan_select", i.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", i.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", i.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", i.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", i.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", i.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", i.MEMBER_SAFETY_PAGE = "member safety page", i.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", i.GUILD_MEMBER_MOD_VIEW = "guild member mod view", i.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", i.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", i.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", i.GUILD_SHOP_PAGE = "guild shop page", i.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", i.MESSAGE_REMIX_TAG = "message remix tag", i.MESSAGE_REMIX_BUTTON = "message remix button", i.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", i.CLIPS_SETTINGS = "clips settings", i.CLIPS_GALLERY = "clips gallery", i.CLIPS_GALLERY_ITEM = "clips gallery item", i.CLIPS_EDITOR = "clips editor", i.CLIPS_SHARE_MODAL = "clips share modal", i.CHANNEL_ATTACH_BUTTON = "channel attach button", i.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", i.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", i.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", i.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", i.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", i.GUILD_EVENT_CARD = "guild event card", i.EVENT_SETTINGS = "event settings";
            var i, r, o = r
        },
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("605250"),
                r = n("802493");
            let o = new i.default("GuildStickers");
            var a = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = r.default.stickers(e).getMapEntriesSyncUnsafe(),
                        i = performance.now();
                    return o.log("synchronously loaded in ".concat(i - t, "ms (guilds: ").concat(n.length, ")")), n
                }
                handleConnectionOpen(e, t) {
                    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
                }
                handleGuildCreate(e, t) {
                    this.handleOneGuildCreate(e.guild, t)
                }
                handleGuildUpdate(e, t) {
                    this.replace(e.guild.id, e.guild.stickers, t)
                }
                handleGuildDelete(e, t) {
                    this.delete(e.guild.id, t)
                }
                handleGuildStickersUpdate(e, t) {
                    this.replace(e.guildId, e.stickers, t)
                }
                handleBackgroundSync(e, t) {
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.stickers.map(e => {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        "full" === e.dataMode ? (o.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (o.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
                    })))
                }
                handleOneGuildCreate(e, t) {
                    null != e.stickers && this.replace(e.id, e.stickers, t), null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t)
                }
                handleClearGuildCache(e) {
                    this.clear(e)
                }
                handleReset() {}
                replace(e, t, n) {
                    r.default.stickersTransaction(n).replaceAll(e, t)
                }
                delete(e, t) {
                    r.default.stickersTransaction(t).delete(e)
                }
                clear(e) {
                    r.default.stickersTransaction(e).delete()
                }
                update(e, t, n, i) {
                    let o = r.default.stickersTransaction(i);
                    for (let i of (o.putAll(e, t), n)) o.delete(e, i)
                }
                constructor() {
                    this.actions = {
                        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                        CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
                        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
                        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
                    }
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var i, r, o, a;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return r
                }
            }), (o = i || (i = {}))[o.GAME = 1] = "GAME", o[o.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", o[o.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (a = r || (r = {}))[a.BOT = 0] = "BOT", a[a.SERVER = 1] = "SERVER", a[a.SYSTEM_DM = 2] = "SYSTEM_DM", a[a.OFFICIAL = 3] = "OFFICIAL", a[a.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", a[a.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", a[a.AI = 6] = "AI", a[a.REMIX = 7] = "REMIX"
        },
        20606: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = n("171210").default
        },
        526887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCannonContext: function() {
                    return c
                },
                ConfettiCannonContextProvider: function() {
                    return d
                }
            });
            var i = n("37983"),
                r = n("884691"),
                o = n("516555"),
                a = n("65597"),
                l = n("206230"),
                u = n("49111");
            let s = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => u.NOOP,
                    removeClickListener: u.NOOP
                },
                c = r.createContext(s);

            function d(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: u,
                    baseConfig: d,
                    addClickListener: E,
                    removeClickListener: _
                } = e, f = (0, o.useConfettiCannon)(n, u), I = (0, a.default)([l.default], () => l.default.useReducedMotion), p = r.useMemo(() => I ? s : {
                    confettiCanvas: n,
                    cannon: f,
                    createConfetti: (e, t) => f.createConfetti({
                        ...d,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, i) => f.createConfetti({
                        ...d,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...n
                    }, i),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return f.createMultipleConfetti({
                            ...d,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            r = arguments.length > 4 ? arguments[4] : void 0;
                        return f.createMultipleConfetti({
                            ...d,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...n
                        }, i, r)
                    },
                    addClickListener: E,
                    removeClickListener: _
                }, [E, d, f, n, I, _]);
                return (0, i.jsx)(c.Provider, {
                    value: p,
                    children: t
                })
            }
        },
        115279: function(e, t, n) {
            "use strict";
            var i, r, o, a, l, u, s, c, d, E, _;
            n.r(t), n.d(t, {
                EmojiCategoryTypes: function() {
                    return i
                },
                GRID_NAVIGATOR_ID: function() {
                    return f
                },
                EmojiCategories: function() {
                    return r
                },
                EmojiSubCategory: function() {
                    return o
                },
                INACTIVE_CATEGORY_INDEX: function() {
                    return I
                },
                EmojiSize: function() {
                    return l
                },
                EMOJI_PICKER_TAB_PANEL_ID: function() {
                    return p
                },
                EMOJI_PICKER_TAB_ID: function() {
                    return T
                },
                SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
                    return h
                },
                SOUNDBOARD_PICKER_TAB_ID: function() {
                    return S
                },
                REACTION_PICKER_TAB_PANEL_ID: function() {
                    return N
                },
                REACTION_PICKER_TAB_ID: function() {
                    return A
                },
                SUPER_REACTION_PICKER_TAB_ID: function() {
                    return g
                },
                SuperReactionBalanceLocations: function() {
                    return u
                },
                GIF_PICKER_TAB_PANEL_ID: function() {
                    return O
                },
                GIF_PICKER_TAB_ID: function() {
                    return C
                },
                EMOJI_SIZE_MAP: function() {
                    return m
                },
                EMOJI_ROW_SIZE: function() {
                    return R
                }
            }), (s = i || (i = {})).GUILD = "GUILD", s.PACK = "PACK", s.UNICODE = "UNICODE", s.RECENT = "RECENT", s.CUSTOM = "CUSTOM", s.SEARCH_RESULTS = "SEARCH_RESULTS", s.FAVORITES = "FAVORITES", s.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", s.PREMIUM_UPSELL = "PREMIUM_UPSELL";
            let f = "emoji-picker-grid";
            (c = r || (r = {})).RECENT = "recent", c.FAVORITES = "favorites", c.TOP_GUILD_EMOJI = "top guild emoji", c.CUSTOM = "custom", c.PEOPLE = "people", c.NATURE = "nature", c.FOOD = "food", c.ACTIVITY = "activity", c.TRAVEL = "travel", c.OBJECTS = "objects", c.SYMBOLS = "symbols", c.FLAGS = "flags", c.PREMIUM_UPSELL = "premium emoji", (d = o || (o = {})).NONE = "", d.TOP_GUILD_EMOJI = "top_server", d.NEWLY_ADDED_EMOJI = "newly_added", (E = a || (a = {}))[E.EMOJI = 0] = "EMOJI", E[E.NSFW = 1] = "NSFW";
            let I = -1;
            (_ = l || (l = {}))[_.MEDIUM = 40] = "MEDIUM", _[_.LARGE = 48] = "LARGE";
            let p = "emoji-picker-tab-panel",
                T = "emoji-picker-tab",
                h = "soundboard-picker-tab-panel",
                S = "soundboard-picker-tab",
                N = "reaction-picker-tab-panel",
                A = "reaction-picker-tab",
                g = "super-reaction-picker-tab";
            (u || (u = {})).TOOLTIP = "tooltip";
            let O = "gif-picker-tab-panel",
                C = "gif-picker-tab",
                m = {
                    reaction: 32,
                    default: 44,
                    jumbo: 96
                },
                R = 9
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691");
            let r = i.createContext(void 0);
            var o = r
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return d
                },
                replaceRoleIconSourceSize: function() {
                    return E
                },
                isRoleIconAssetUrl: function() {
                    return f
                },
                canGuildUseRoleIcons: function() {
                    return I
                }
            });
            var i = n("867805"),
                r = n("407063"),
                o = n("315102"),
                a = n("773336"),
                l = n("49111");
            let u = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                s = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                c = (0, a.isAndroid)(),
                d = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: _(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                E = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()))),
                _ = (e, t) => {
                    let {
                        id: n,
                        icon: i
                    } = e;
                    if (null == i) return;
                    if (i.startsWith("data:")) return i;
                    let a = o.SUPPORTS_WEBP ? "webp" : "png",
                        d = "",
                        E = "quality=lossless";
                    return (null != t && (d = "size=" + (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()), E = c ? "" : "&" + E), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(u, "/").concat(n, "/").concat(i, ".").concat(a, "?").concat(d).concat(E) : "".concat(s).concat(l.Endpoints.ROLE_ICON(n, i), "?").concat(d)
                },
                f = e => e.startsWith(u) || e.startsWith("".concat(s, "/roles")) && e.includes("/icons/"),
                I = (e, t) => {
                    var n;
                    let i = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return i || e.features.has(l.GuildFeatures.ROLE_ICONS)
                }
        },
        677315: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildHomeExperiment: function() {
                    return d
                },
                canSeeGuildHome: function() {
                    return E
                },
                GuildFeedRenderSelectorExperiment: function() {
                    return _
                },
                GuildFeedRefreshButtonExperiment: function() {
                    return f
                },
                GuildHomeBadgeExperiment: function() {
                    return I
                },
                GuildHomeFeedbackExperiment: function() {
                    return p
                },
                GuildHomeDeprecationExperiment: function() {
                    return T
                }
            });
            var i = n("446674"),
                r = n("203288"),
                o = n("862205"),
                a = n("21121"),
                l = n("923959"),
                u = n("305961"),
                s = n("49111");

            function c(e, t, n) {
                let i = t.getChannels(e)[l.GUILD_SELECTABLE_CHANNELS_KEY].filter(t => {
                    let {
                        channel: i
                    } = t;
                    return !n.isChannelGated(e, i.id)
                });
                return i.length > 5
            }

            function d(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                let t = (0, i.useStateFromStores)([l.default, r.default], () => null != e && c(e.id, l.default, r.default));
                return !__OVERLAY__ && !!t && null != e && e.hasFeature(s.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }

            function E(e) {
                if (__OVERLAY__ || e === s.ME || e === s.FAVORITES || (0, a.isInMainTabsExperiment)()) return !1;
                let t = u.default.getGuild(e);
                return !!(null != t && c(e, l.default, r.default)) && t.hasFeature(s.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }
            let _ = (0, o.createExperiment)({
                    kind: "user",
                    id: "2022-01_home_feed_toggle",
                    label: "Show Guild Feed Sorting Selector",
                    defaultConfig: {
                        showSelector: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes Selector",
                        config: {
                            showSelector: !0
                        }
                    }]
                }),
                f = (0, o.createExperiment)({
                    kind: "user",
                    id: "2022-06_home_refresh_button",
                    label: "Show refresh button",
                    defaultConfig: {
                        showRefreshButton: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes button",
                        config: {
                            showRefreshButton: !0
                        }
                    }]
                }),
                I = (0, o.createExperiment)({
                    kind: "user",
                    id: "2022-08_home_badge",
                    label: "Show badge on home channel",
                    defaultConfig: {
                        showBadge: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show badge",
                        config: {
                            showBadge: !0
                        }
                    }]
                });
            (0, o.createExperiment)({
                kind: "user",
                id: "2022-08_home_drawer_autoclose",
                label: "Auto close home drawer",
                defaultConfig: {
                    autoCloseDrawer: !1,
                    animation: !1,
                    delay: null
                },
                treatments: [{
                    id: 1,
                    label: "normal animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: null
                    }
                }, {
                    id: 2,
                    label: "no animate",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !1,
                        delay: null
                    }
                }, {
                    id: 3,
                    label: "150 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 150
                    }
                }, {
                    id: 4,
                    label: "250 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 250
                    }
                }, {
                    id: 5,
                    label: "500 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 500
                    }
                }]
            }), (0, o.createExperiment)({
                kind: "user",
                id: "2022-09_welcome_header",
                label: "Show welcome header for home",
                defaultConfig: {
                    showWelcomeHeader: !1
                },
                treatments: [{
                    id: 1,
                    label: "show welcome header",
                    config: {
                        showWelcomeHeader: !0
                    }
                }]
            });
            let p = (0, o.createExperiment)({
                    kind: "user",
                    id: "2022-12_home_feedback_ux",
                    label: "Show post feedback for home",
                    defaultConfig: {
                        showFeedback: !1
                    },
                    treatments: [{
                        id: 100,
                        label: "show feedback",
                        config: {
                            showFeedback: !0
                        }
                    }]
                }),
                T = (0, o.createExperiment)({
                    kind: "guild",
                    id: "2023-03_home_deprecation",
                    label: "Home Deprecation",
                    defaultConfig: {
                        showDeprecationNotice: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show notice",
                        config: {
                            showDeprecationNotice: !0
                        }
                    }]
                })
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return l
                },
                setCurrentGuild: function() {
                    return u
                },
                initGuildIdentitySettings: function() {
                    return s
                },
                closeGuildIdentitySettings: function() {
                    return c
                },
                resetAndCloseGuildIdentityForm: function() {
                    return d
                },
                setPendingAvatar: function() {
                    return E
                },
                setPendingBanner: function() {
                    return _
                },
                setPendingBio: function() {
                    return f
                },
                setPendingPronouns: function() {
                    return I
                },
                setPendingNickname: function() {
                    return p
                },
                setPendingThemeColors: function() {
                    return T
                },
                resetPendingMemberChanges: function() {
                    return h
                },
                resetPendingProfileChanges: function() {
                    return S
                },
                resetAllPending: function() {
                    return N
                },
                clearErrors: function() {
                    return A
                },
                setDisableSubmit: function() {
                    return g
                }
            });
            var i = n("872717"),
                r = n("913144"),
                o = n("54239"),
                a = n("49111");
            async function l(e, t) {
                let {
                    nick: n,
                    avatar: o
                } = t;
                if (null == e) throw Error("Need guildId");
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: a.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: o
                        },
                        oldFormErrors: !0
                    });
                    return r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), r.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function u(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function s(e, t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function c() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, o.popLayer)()
            }

            function d() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function E(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function _(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function f(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function I(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function p(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function T(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function h() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function S() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function N() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function A() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function g(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, r, o, a, l, u, s, c, d;
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var E = n("446674"),
                _ = n("913144"),
                f = n("49111");
            let I = f.FormStates.CLOSED,
                p = {},
                T = !1;

            function h() {
                I = f.FormStates.CLOSED, p = {}, s = null, c = void 0, d = []
            }

            function S() {
                N(), A(), p = {}, I = f.FormStates.OPEN
            }

            function N() {
                i = void 0, l = void 0
            }

            function A() {
                r = void 0, o = void 0, a = void 0, u = void 0
            }
            class g extends E.default.Store {
                getFormState() {
                    return I
                }
                getErrors() {
                    return p
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== o || void 0 !== a || void 0 !== l || void 0 !== u
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return r
                }
                getPendingBio() {
                    return o
                }
                getPendingNickname() {
                    return l
                }
                getPendingPronouns() {
                    return a
                }
                getPendingAccentColor() {
                    return l
                }
                getPendingThemeColors() {
                    return u
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: r,
                        pendingBio: o,
                        pendingPronouns: a,
                        pendingNickname: l,
                        pendingThemeColors: u
                    }
                }
                getGuild() {
                    return s
                }
                getSource() {
                    return c
                }
                getAnalyticsLocations() {
                    return d
                }
                getIsDisableSubmit() {
                    return T
                }
            }
            g.displayName = "GuildIdentitySettingsStore";
            var O = new g(_.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    s = e.guild, I = f.FormStates.OPEN, p = {}, c = e.source, d = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: h,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    S(), h()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    s = e.guild, p = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    I = f.FormStates.SUBMITTING, p = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (I !== f.FormStates.SUBMITTING) return !1;
                    I = f.FormStates.OPEN, p = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    I = f.FormStates.OPEN, p = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: N,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: A,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: S,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: S,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    p = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    T = t
                }
            })
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("872717"),
                r = n("913144"),
                o = n("479756"),
                a = n("38654"),
                l = n("9294"),
                u = n("26989"),
                s = n("337543"),
                c = n("697218"),
                d = n("49111");
            let E = async (e, t) => {
                let n = null != t ? t : s.default.getInviteKeyForGuildId(e),
                    o = c.default.getCurrentUser(),
                    a = !u.default.isMember(e, null == o ? void 0 : o.id);
                try {
                    let t = await i.default.get({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: a,
                            invite_code: null != n ? (0, l.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: o
                    } = t;
                    return r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: o.version,
                            description: o.description,
                            formFields: o.form_fields,
                            guild: o.guild
                        }
                    }), o
                } catch (t) {
                    r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, _ = async (e, t) => {
                let n = await i.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: o
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: o.version,
                        description: o.description,
                        formFields: o.form_fields
                    }
                })
            }, f = async (e, t) => {
                let n = await i.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: o
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: o.version,
                        description: o.description,
                        formFields: o.form_fields
                    }
                })
            }, I = async (e, t) => {
                await i.default.patch({
                    url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, p = async (e, t) => {
                if (a.default.isFullServerPreview(e)) {
                    (0, o.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await i.default.put({
                            url: d.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: o
                        } = n;
                    return r.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: o
                    }), o
                } catch (e) {
                    throw e
                }
            };
            var T = {
                fetchVerificationForm: E,
                updateVerificationForm: _,
                updateVerificationFormDescription: f,
                enableVerificationForm: I,
                submitVerificationForm: p
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return o
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return a
                },
                MAX_FORM_ELEMENTS: function() {
                    return l
                },
                MAX_NUM_RULES: function() {
                    return u
                },
                MAX_RULE_LENGTH: function() {
                    return s
                },
                MAX_QUESTION_LENGTH: function() {
                    return c
                },
                MAX_NUM_CHOICES: function() {
                    return d
                },
                MAX_CHOICE_LENGTH: function() {
                    return E
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return _
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return f
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return I
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return p
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return T
                }
            });
            var i, r = n("567054");
            r.VerificationFormFieldTypes.VERIFICATION;
            let o = new Set([r.VerificationFormFieldTypes.TERMS]),
                a = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
                l = 5,
                u = 16,
                s = 300,
                c = 300,
                d = 8,
                E = 150,
                _ = 150,
                f = 1e3,
                I = 300,
                p = "Membership Gating",
                T = "in-app-member-verification";
            (i || (i = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return r
                }
            }), i = n("453265").default;
            let r = i.openMemberVerificationModal;
            i.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return l
                },
                setHasUnsubmittedChanges: function() {
                    return u
                },
                setShowWarning: function() {
                    return s
                }
            });
            var i = n("308503"),
                r = n("659500"),
                o = n("49111");
            let a = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                l = (0, i.default)(e => a),
                u = e => {
                    l.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                s = e => {
                    l.setState({
                        shouldShowWarning: e
                    }), e && r.ComponentDispatch.dispatch(o.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                o = n("599110"),
                a = n("50926"),
                l = n("347977"),
                u = n("394294"),
                s = n("49111");
            let c = () => {
                    o.default.track(s.AnalyticEvents.MODAL_DISMISSED, {
                        type: u.MEMBER_VERIFICATION_TYPE
                    })
                },
                d = e => {
                    o.default.track(s.AnalyticEvents.OPEN_MODAL, {
                        type: u.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var E = {
                openMemberVerificationModal(e, t) {
                    d(e);
                    let o = async t => {
                        await a.default.submitVerificationForm(e, t)
                    };
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: o,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (l.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, l.setShowWarning)(!0);
                                        return
                                    }
                                    c()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            c(), l.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, l.setShowWarning)(!0) : (0, r.closeModal)(u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && c(), (0, r.closeModal)(u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return d
                },
                requestMembersForRole: function() {
                    return _
                }
            });
            var i = n("693566"),
                r = n.n(i),
                o = n("872717"),
                a = n("913144"),
                l = n("851387"),
                u = n("36402"),
                s = n("49111");
            async function c(e) {
                try {
                    a.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await o.default.get({
                            url: s.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    a.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    a.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function d(e) {
                u.default.shouldFetch(e) && await c(e)
            }
            let E = new r({
                maxAge: 1e4
            });

            function _(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = "".concat(e, "-").concat(t);
                if (!n || null == E.get(i)) {
                    var r, a;
                    return E.set(i, !0), r = e, a = t, o.default.get({
                        url: s.Endpoints.GUILD_ROLE_MEMBER_IDS(r, a)
                    }).then(e => (l.default.requestMembersById(r, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("446674"),
                r = n("913144");
            let o = {},
                a = {};
            class l extends i.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? o[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = a[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            l.displayName = "GuildRoleMemberCountStore";
            var u = new l(r.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    o[t] = n, a[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: i
                    } = e, r = o[t];
                    if (null == r) return !1;
                    r[n] = i
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: i
                    } = e, r = o[t];
                    if (null == r || null == r[n]) return !1;
                    let a = Object.keys(i).length;
                    r[n] += a
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, i = o[t];
                    if (null == i || null == i[n]) return !1;
                    i[n] = i[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, i = o[t];
                    if (null == i || null == i[n]) return !1;
                    i[n] = Math.max(i[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == o[t] && (o[t] = {}), o[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete o[t.id], delete a[t.id]
                }
            })
        },
        507453: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                o = n.n(r),
                a = n("598532");

            function l(e) {
                let {
                    className: t
                } = e;
                return (0, i.jsx)("div", {
                    className: o(a.image, t)
                })
            }
        },
        533613: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return i
                }
            }), (r = i || (i = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", r.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", r.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", r.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", r.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", r.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", r.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", r.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", r.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", r.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", r.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", r.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", r.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", r.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", r.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", r.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", r.HUB_NEW = "HUB_NEW", r.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", r.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", r.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", r.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", r.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", r.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", r.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", r.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", r.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", r.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", r.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", r.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", r.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", r.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", r.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", r.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", r.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", r.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", r.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", r.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", r.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", r.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", r.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return h
                },
                updateImpersonating: function() {
                    return S
                },
                stopImpersonating: function() {
                    return N
                },
                updateImpersonatedChannels: function() {
                    return g
                },
                updateImpersonatedRoles: function() {
                    return O
                },
                updateImpersonatedData: function() {
                    return C
                }
            });
            var i = n("913144"),
                r = n("716241"),
                o = n("393414"),
                a = n("42203"),
                l = n("923959"),
                u = n("26989"),
                s = n("305961"),
                c = n("957255"),
                d = n("18494"),
                E = n("282109"),
                _ = n("599110"),
                f = n("38654"),
                I = n("507950"),
                p = n("49111"),
                T = n("724210");

            function h(e, t) {
                _.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === I.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), A(e)
            }

            function S(e, t) {
                let n = f.default.getData(e);
                null != n && n.type === t.type && (_.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === I.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), A(e))
            }

            function N(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function A(e) {
                let t = d.default.getChannelId(e),
                    n = a.default.getChannel(t),
                    i = null != t && (0, T.isStaticChannelRoute)(t);
                if (!i && !c.default.can(p.Permissions.VIEW_CHANNEL, n)) {
                    let t = l.default.getDefaultChannel(e);
                    null != t && (0, o.transitionTo)(p.Routes.CHANNEL(e, t.id))
                }
            }

            function g(e, t, n) {
                let i = new Set(E.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), S(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function O(e, t) {
                let n = s.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...l.default.getSelectableChannelIds(e), ...l.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    l.default.addConditionalChangeListener(() => {
                        let t = u.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let r = [...l.default.getSelectableChannelIds(e), ...l.default.getVocalChannelIds(e)],
                            o = r.filter(e => !n.includes(e));
                        return o.length > 0 && g(e, o, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), S(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function C(e, t) {
                S(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return a
                },
                generateInviteKeyFromExtraData: function() {
                    return l
                },
                parseExtraDataFromInviteKey: function() {
                    return u
                },
                parseInviteCodeFromInviteKey: function() {
                    return s
                }
            });
            var i = n("522632"),
                r = n("833858");
            let o = "event";

            function a(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = i.parse(t);
                        return (0, r.getFirstQueryStringValue)(e[o])
                    } catch (e) {
                        return
                    }
                }(t);
                return l({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function l(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(o, "=").concat(n)
            }

            function u(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let a = i.parse(n),
                    l = (0, r.getFirstQueryStringValue)(a[o]);
                return {
                    baseCode: t,
                    guildScheduledEventId: l
                }
            }

            function s(e) {
                let [t] = e.split("?");
                return t
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return c
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return d
                },
                useInventoryGuildSettingsExperiment: function() {
                    return _
                }
            });
            var i = n("65597"),
                r = n("862205"),
                o = n("697218"),
                a = n("719923"),
                l = n("782340");
            let u = (0, r.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }]
                }),
                s = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: r,
                        mobileAndFreemiumCollectEnabled: o
                    } = n, l = a.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: o,
                        collectEnabled: l ? i : o
                    }
                },
                c = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1
                    } : s({
                        user: t,
                        config: u.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                d = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, r = (0, i.default)([o.default], () => o.default.getCurrentUser()), a = u.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: l,
                        showTryPacksModalAndV2Copy: c,
                        collectEnabled: d
                    } = s({
                        user: r,
                        config: a
                    }), E = l && d && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: l,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: c
                    }
                },
                E = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescription: () => null
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescription: () => l.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => l.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => l.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }]
                }),
                _ = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = E.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: void 0 === t || t
                    });
                    return {
                        showSettingsToggle: n.showSettingsToggle,
                        allowCollection: n.allowCollection,
                        getNewSettingsDescription: n.getNewSettingsDescription
                    }
                }
        },
        95045: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                },
                renderAutomodMessageMarkup: function() {
                    return s
                }
            }), n("355025");
            var i = n("367376"),
                r = n("240873"),
                o = n("49111");
            let a = new Set([o.MessageEmbedTypes.IMAGE, o.MessageEmbedTypes.GIFV]),
                l = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.formatInline ? i.default.parseInlineReply : i.default.parse;
                return function(e, t, n) {
                    var i, o;
                    let {
                        toAST: u = !1,
                        hideSimpleEmbedContent: s = !0,
                        formatInline: E = !1,
                        postProcessor: _
                    } = n, f = !1;
                    let I = e(t.content, !0, (i = t, o = n, {
                        allowLinks: null != i.webhookId || !!o.allowLinks,
                        allowEmojiLinks: null != i.webhookId,
                        channelId: i.channel_id,
                        messageId: i.id,
                        mentionChannels: i.mentionChannels,
                        isInteracting: !!o.isInteracting,
                        formatInline: !!o.formatInline,
                        noStyleAndInteraction: !!o.noStyleAndInteraction,
                        allowHeading: !!o.allowHeading,
                        allowList: !!o.allowList,
                        previewLinkTarget: !!o.previewLinkTarget,
                        disableAnimatedEmoji: !!o.disableAnimatedEmoji,
                        disableAutoBlockNewlines: !0,
                        muted: !1
                    }), (e, n) => (!Array.isArray(e) && (e = [e]), s && (e = function(e, t) {
                        if (1 !== e.length || 1 !== t.length) return e;
                        let n = e[0],
                            i = t[0];
                        return "link" === n.type && a.has(i.type) && (0, r.isEmbedInline)(i) ? [] : e
                    }(e, t.embeds)), !E && (e = function(e, t) {
                        return t ? c(e) : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = c(e[0].content)), e)
                    }(e, n)), f = function(e, t) {
                        return t ? d(e) : "paragraph" === e[0].type && e[0].content instanceof Array && d(e[0].content)
                    }(e, n), E && (e = function e(t) {
                        return t.forEach(t => {
                            l.has(t.type) && null != t.content && (Array.isArray(t.content) ? e(t.content) : t.content = t.content.replace(/\n/g, " "))
                        }), t
                    }(e)), null != _ && (e = _(e, n)), e));
                    return {
                        hasSpoilerEmbeds: f,
                        content: I
                    }
                }(n, e, t)
            }

            function s(e, t, n) {
                var r;
                return r = i.default.parseAutoModerationSystemMessage, r(e, !0, {
                    allowLinks: !1,
                    allowEmojiLinks: !1,
                    mentionChannels: [],
                    isInteracting: !1,
                    formatInline: !1,
                    noStyleAndInteraction: !1,
                    allowHeading: !1,
                    allowList: !1,
                    disableAutoBlockNewlines: !0,
                    highlightWord: t,
                    disableAnimatedEmoji: !1,
                    channelId: n,
                    muted: !1
                }, e => (!Array.isArray(e) && (e = [e]), e))
            }

            function c(e) {
                let t = e.some(e => "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim()) && !0);
                if (t) return e;
                let n = 0;
                return (e.forEach(e => {
                    if (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (n += 1), n > 30) return !1
                }), n > 30) ? e : (e.forEach(e => {
                    e.jumboable = !0
                }), e)
            }

            function d(e) {
                return e.some(e => "spoiler" === e.type && Array.isArray(e.content) && e.content.some(e => "link" === e.type))
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("748820"),
                o = n("77078"),
                a = n("112679"),
                l = n("55689"),
                u = n("855133"),
                s = n("599110"),
                c = n("659500"),
                d = n("49111"),
                E = n("646718");

            function _(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: _,
                    onClose: f,
                    onComplete: I,
                    onSubscriptionConfirmation: p,
                    analyticsLocations: T,
                    analyticsObject: h,
                    analyticsLocation: S,
                    analyticsSourceLocation: N,
                    isGift: A = !1,
                    giftMessage: g,
                    subscriptionTier: O,
                    trialId: C,
                    postSuccessGuild: m,
                    openInvoiceId: R,
                    applicationId: v,
                    referralTrialOfferId: L,
                    giftRecipient: U,
                    returnRef: D
                } = null != e ? e : {}, y = !1, P = (0, r.v4)();
                (0, o.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: r,
                            ...o
                        } = n;
                        return (0, i.jsx)(e, {
                            ...o,
                            loadId: P,
                            subscriptionTier: O,
                            skuId: O,
                            isGift: A,
                            giftMessage: g,
                            giftRecipient: U,
                            initialPlanId: t,
                            followupSKUInfo: _,
                            onClose: e => {
                                r(), null == f || f(e), e && (null == p || p())
                            },
                            onComplete: () => {
                                y = !0, null == I || I(), !A && ((0, u.setIsPersistentHelperHidden)(!0), (0, u.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: p,
                            analyticsLocations: T,
                            analyticsObject: h,
                            analyticsLocation: S,
                            analyticsSourceLocation: N,
                            trialId: C,
                            postSuccessGuild: m,
                            planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: R,
                            applicationId: v,
                            referralTrialOfferId: L,
                            returnRef: D
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !y && s.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: P,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != S ? S : h,
                            source: N,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: A,
                            eligible_for_trial: null != C,
                            application_id: v,
                            location_stack: T
                        }), (0, a.clearError)(), (0, l.clearPurchaseTokenAuthState)(), null == f || f(y), y && (!A && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == p || p())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("65597"),
                o = n("880731");

            function a(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, a = (0, r.default)([o.default], () => o.default.isEnabled({
                    confettiLocation: n
                }));
                return a ? (0, i.jsx)(i.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("884691"),
                r = n("65597"),
                o = n("526887"),
                a = n("880731");

            function l() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(o.ConfettiCannonContext), t = (0, r.default)([a.default], () => a.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), l = i.useMemo(() => ({
                    fire: (i, r, o) => {
                        var a, l;
                        let u = (null == o ? void 0 : o.settings) != null ? {
                                ...t,
                                ...o.settings
                            } : t,
                            s = n(u);
                        e(i, r, s, (null !== (a = null == o ? void 0 : o.count) && void 0 !== a ? a : u.confettiCount) * (null !== (l = null == o ? void 0 : o.countMultiplier) && void 0 !== l ? l : 1), {
                            sprite: null == o ? void 0 : o.sprite
                        })
                    }
                }), [e, n, t]);
                return l
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
                    return u
                },
                setNavigatedFromHelper: function() {
                    return s
                }
            });
            var i = n("913144");
            let r = () => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                o = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                a = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                l = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                u = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                s = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return f
                },
                maybeFetchPremiumLikelihood: function() {
                    return p
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return T
                }
            });
            var i = n("884691"),
                r = n("65597"),
                o = n("872717"),
                a = n("913144"),
                l = n("775433"),
                u = n("697218"),
                s = n("10514"),
                c = n("764364"),
                d = n("676572"),
                E = n("646718"),
                _ = n("49111");
            let f = "nonSubscriber";
            async function I() {
                try {
                    a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await o.default.get({
                        url: _.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [f]: e.non_subscriber,
                                [E.PremiumSubscriptionSKUs.TIER_0]: e[E.PremiumSubscriptionSKUs.TIER_0],
                                [E.PremiumSubscriptionSKUs.TIER_2]: e[E.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function p(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = d.default.shouldFetchPremiumLikelihood(), r = u.default.getCurrentUser();
                h(r, i, t, n)
            }

            function T(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), o = (0, r.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), a = (0, r.default)([u.default], () => u.default.getCurrentUser());
                i.useEffect(() => {
                    h(a, o, t, n)
                }, [a, o, t, n])
            }

            function h(e, t, n, i) {
                null != e && !(0, c.isPremium)(e) && n && (t && I(), i && (!s.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_0) && !s.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_0) && (0, l.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_0), !s.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_2) && !s.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_2) && (0, l.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("446674"),
                r = n("913144");
            let o = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                a = o;
            class l extends i.default.Store {
                initialize() {
                    a = o
                }
                getState() {
                    return a
                }
                shouldFetchPremiumLikelihood() {
                    return !a.isFetching && !a.fetched
                }
            }
            l.displayName = "UserPremiumLikelihoodStore";
            var u = new l(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    a.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    a.premiumLikelihood = t, a.fetched = !0, a.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    a.isFetching = !1
                },
                LOGOUT: function() {
                    a.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var o = r
        },
        906932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAvatarsWithGuilds: function() {
                    return u
                },
                setNewPendingUserBio: function() {
                    return s
                },
                setNewPendingAvatar: function() {
                    return c
                },
                setNewPendingAvatarDecoration: function() {
                    return d
                },
                setNewPendingProfileEffectID: function() {
                    return E
                },
                getProfilePreviewField: function() {
                    return _
                },
                showRemoveAvatar: function() {
                    return f
                },
                showRemoveBanner: function() {
                    return I
                }
            });
            var i = n("884691"),
                r = n("152584"),
                o = n("234251"),
                a = n("783142"),
                l = n("26989");

            function u(e) {
                return i.useMemo(() => {
                    let t = l.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let r in t) {
                        var i;
                        let o = t[r],
                            a = null === (i = o[e]) || void 0 === i ? void 0 : i.avatar;
                        null != a && (null == n[a] && (n[a] = []), n[a].push(r))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function s(e, t) {
                (0, a.setPendingBio)(e === t ? void 0 : e)
            }

            function c(e, t) {
                (0, r.setPendingAvatar)(e === t ? void 0 : e)
            }

            function d(e, t) {
                if ((0, o.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, r.setPendingAvatarDecoration)(void 0);
                    return
                }(0, r.setPendingAvatarDecoration)(e)
            }

            function E(e, t) {
                if (e === t) {
                    (0, r.setPendingProfileEffectID)(void 0);
                    return
                }(0, r.setPendingProfileEffectID)(e)
            }

            function _(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != e) return "" === e ? {
                    value: i ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: e,
                    isUsingGuildValue: i
                };
                return null != t && "" !== t ? {
                    value: t,
                    isUsingGuildValue: !0
                } : {
                    value: n,
                    isUsingGuildValue: !1
                }
            }

            function f(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function I(e, t) {
                return void 0 === e ? null != t : null != e
            }
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                r = n("79112"),
                o = n("685665"),
                a = n("929423");
            n("424562");
            var l = n("49111"),
                u = n("397336");

            function s(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: c,
                    openWithoutBackstack: d = !1
                } = e, {
                    analyticsLocations: E
                } = (0, o.default)(), _ = (0, i.useCallback)(() => {
                    null != t && (0, a.initGuildIdentitySettings)(t, null != c ? c : E), r.default.open(l.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? u.ProfileCustomizationSubsection.GUILD : u.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: s,
                        analyticsLocations: c,
                        openWithoutBackstack: d
                    })
                }, [t, n, s, c, d, E]);
                return _
            }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return a
                },
                getDevicePushProvider: function() {
                    return l
                }
            });
            var i, r, o = n("773336");
            let a = null;

            function l() {
                return (0, o.isAndroid)(), null
            }(i = r || (r = {})).REMINDER = "reminder", i.TOP_MESSAGE_PUSH = "top_messages_push", i.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        846325: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return o
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return a
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return l
                },
                SoundboardWheelSize: function() {
                    return u
                },
                DEFAULT_KEYBIND: function() {
                    return s
                },
                EMPTY_SOUND_LIST: function() {
                    return c
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return d
                }
            });
            let o = 32,
                a = 5,
                l = "DEFAULT";
            (r = i || (i = {}))[r.SUCCESS = 0] = "SUCCESS", r[r.INTERRUPTED = 1] = "INTERRUPTED", i.SUCCESS, i.INTERRUPTED;
            let u = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                s = "ctrl+`",
                c = [],
                d = "0"
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var i, r, o = n("917351"),
                a = n.n(o),
                l = n("446674"),
                u = n("913144"),
                s = n("845579"),
                c = n("374363"),
                d = n("697218"),
                E = n("599110"),
                _ = n("829536"),
                f = n("846325"),
                I = n("49111"),
                p = n("397336");
            (i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let T = new Map,
                h = new Map,
                S = new Set,
                N = r.NOT_FETCHED,
                A = r.NOT_FETCHED,
                g = new Set,
                O = new Map,
                C = !1;

            function m(e) {
                let {
                    sound: t
                } = e, n = T.get(t.guildId), i = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != i && -1 !== i ? (n[i] = t, T.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), T.set(t.guildId, [...n]))
            }
            let R = a.debounce(e => {
                E.default.track(I.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, _.amplitudeToPerceptual)(e))
                }), s.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function v(e) {
                var t, n;
                let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(i)) t.soundboardMuted ? S.add(e) : S.delete(e);
                for (let e of S.keys()) null == i[e] && S.delete(e)
            }
            class L extends l.default.Store {
                initialize() {
                    this.waitFor(c.default), v(c.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(T),
                        favoritedSoundIds: Array.from(g),
                        localSoundboardMutes: Array.from(S)
                    }
                }
                getSounds() {
                    return T
                }
                getSoundsForGuild(e) {
                    return T.get(e)
                }
                getSound(e, t) {
                    var n;
                    let i = null !== (n = T.get(e)) && void 0 !== n ? n : [];
                    return i.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(T.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return A === r.FETCHING
                }
                isFetchingDefaultSounds() {
                    return N === r.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return N === r.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return N === r.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = O.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != h.get(e)
                }
                isFavoriteSound(e) {
                    return g.has(e)
                }
                getFavorites() {
                    return g
                }
                isLocalSoundboardMuted(e) {
                    return S.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return C
                }
                hasFetchedAllSounds() {
                    return A === r.FETCHED && N === r.FETCHED
                }
            }
            L.displayName = "SoundboardStore";
            var U = new L(u.default, {
                LOGOUT: function() {
                    T.clear(), h.clear(), O.clear(), C = !1, A = r.NOT_FETCHED, N = r.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    A = r.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: m,
                GUILD_SOUNDBOARD_SOUND_UPDATE: m,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    T.delete(t);
                    let i = T.get(n),
                        r = null == i ? void 0 : i.findIndex(e => e.soundId === t);
                    null != i && null != r && !(r < 0) && (i.splice(r, 1), T.set(n, [...i]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, i;
                    let {
                        soundId: r,
                        userId: o
                    } = e, a = (null !== (n = h.get(r)) && void 0 !== n ? n : 0) + 1, l = (null !== (i = O.get(o)) && void 0 !== i ? i : 0) + 1;
                    h.set(r, a), O.set(o, l), o !== (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (C = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: i,
                        userId: r
                    } = e, o = (null !== (t = h.get(i)) && void 0 !== t ? t : 0) - 1, a = (null !== (n = O.get(r)) && void 0 !== n ? n : 0) - 1;
                    o <= 0 ? h.delete(i) : h.set(i, o), a <= 0 ? O.delete(r) : O.set(r, a)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    R(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    h.clear(), O.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: i
                    } = t;
                    if (n === p.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var r, o;
                        g = new Set(null !== (o = null == i ? void 0 : null === (r = i.favoriteSoundboardSounds) || void 0 === r ? void 0 : r.soundIds) && void 0 !== o ? o : [])
                    } else n === p.UserSettingsTypes.PRELOADED_USER_SETTINGS && v(i)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    N = r.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    T.set(f.DEFAULT_SOUND_GUILD_ID, t), N = r.FETCHED
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
                    let {
                        updates: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guildId: t,
                            sounds: n
                        } = e;
                        T.set(t, n)
                    }), A = r.FETCHED
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    T.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    S.has(t) ? S.delete(t) : S.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    T = new Map(Object.entries(t.soundboardSounds)), g = new Set(t.favoritedSoundIds), S = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    T.set(t, n)
                }
            })
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("49111");

            function r(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(i.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(i.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        178225: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isGuildEligibleForStageChannels: function() {
                    return a
                },
                useGuildEligibleForStageChannels: function() {
                    return l
                }
            });
            var i = n("446674"),
                r = n("305961"),
                o = n("49111");

            function a(e) {
                var t;
                let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default];
                return !!(null === (t = n.getGuild(e)) || void 0 === t ? void 0 : t.hasFeature(o.GuildFeatures.COMMUNITY))
            }

            function l(e) {
                return (0, i.useStateFromStores)([r.default], () => a(e, [r.default]), [e])
            }
        },
        4233: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-03_free_discord_stickers",
                label: "Free Default Stickers",
                defaultConfig: {
                    freeStickersEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        freeStickersEnabled: !0
                    }
                }]
            });
            var o = r
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return r
                },
                getStickerSendability: function() {
                    return c
                },
                isSendableSticker: function() {
                    return d
                }
            });
            var i, r, o = n("991170"),
                a = n("719923"),
                l = n("4233"),
                u = n("24373"),
                s = n("49111");
            (i = r || (r = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let c = (e, t, n) => {
                    if (null == t) return r.NONSENDABLE;
                    let i = a.default.canUseStickersEverywhere(t);
                    if ((0, u.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = l.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return i || e ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, u.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? r.SENDABLE : null == n.guild_id || o.default.can({
                        permission: s.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM : r.NONSENDABLE : r.SENDABLE_WITH_BOOSTED_GUILD;
                    return r.NONSENDABLE
                },
                d = (e, t, n) => c(e, t, n) === r.SENDABLE
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("917351"),
                r = n.n(i),
                o = n("446674"),
                a = n("913144"),
                l = n("80507"),
                u = n("374363"),
                s = n("364685"),
                c = n("49111"),
                d = n("397336");
            let E = {
                pendingUsages: []
            };
            c.Durations.DAY;
            let _ = new l.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => s.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                f = () => {
                    s.default.isLoaded && _.compute()
                },
                I = () => {
                    f()
                };

            function p() {
                var e;
                let t = null === (e = u.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                _.overwriteHistory(r.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), E.pendingUsages)
            }
            class T extends o.default.PersistedStore {
                initialize(e) {
                    this.waitFor(s.default), null != e && (E = e), this.syncWith([s.default], I), this.syncWith([u.default], p)
                }
                getState() {
                    return E
                }
                hasPendingUsage() {
                    return E.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return _
                }
            }
            T.displayName = "StickersPersistedStore", T.persistKey = "StickersPersistedStoreV2";
            var h = new T(a.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        _.track(e), E.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), f()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== d.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    E.pendingUsages = []
                }
            })
        },
        364685: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var i, r, o = n("102053"),
                a = n("446674"),
                l = n("913144"),
                u = n("802493"),
                s = n("595525"),
                c = n("212084"),
                d = n("867805"),
                E = n("267567"),
                _ = n("813006"),
                f = n("778689"),
                I = n("305961"),
                p = n("161585"),
                T = n("24373"),
                h = n("49111");
            (i = r || (r = {}))[i.Unloaded = 0] = "Unloaded", i[i.MaybeLoaded = 1] = "MaybeLoaded", i[i.Loaded = 2] = "Loaded";
            let S = 2,
                N = new Map,
                A = new Map,
                g = null,
                O = [],
                C = null,
                m = !1,
                R = new Map,
                v = (e, t) => {
                    R = new Map(R.set(e, t))
                },
                L = 1e3 * h.Durations.HOUR,
                U = () => {
                    if (0 !== S) return;
                    let e = u.default.database();
                    if (null == e) return;
                    S = 2;
                    let t = (0, s.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => o.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => c.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (f.default.isMember(e) && !R.has(e)) {
                                for (let t of n) D(t, !0, I.default.getGuild(e));
                                v(e, n)
                            }
                    }
                },
                D = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    A.set(e.id, e), t && y(e, n)
                },
                y = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == g) return;
                    let {
                        tags: n
                    } = e, i = {
                        type: p.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, T.isStandardSticker)(e)) {
                        let t = O.find(t => t.id === e.pack_id),
                            r = [i, ...(null != n ? n : "").split(",").map(e => ({
                                type: p.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && r.push({
                            type: p.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), g.set(e.id, r)
                    } else if ((0, T.isGuildSticker)(e) && null != n) {
                        let r = d.default.getByName(n),
                            o = {
                                type: p.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            a = [i, o];
                        if (null != t) {
                            let e = (t instanceof(0, _.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && a.push({
                                type: p.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == r) {
                            g.set(e.id, a);
                            return
                        }
                        a.push({
                            type: p.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: r.surrogates
                        }), r.forEachDiversity(e => a.push({
                            type: p.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), g.set(e.id, a)
                    }
                },
                P = (e, t, n) => {
                    N.set(e.id, e);
                    let i = [...O];
                    if (t) {
                        let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), O = i
                    }(t || n) && e.stickers.forEach(e => D(e))
                },
                M = () => {
                    R.forEach((e, t) => {
                        let n = I.default.getGuild(t);
                        null != n && e.forEach(e => y(e, n))
                    }), O.forEach(e => {
                        e.stickers.forEach(e => y(e))
                    })
                };

            function b(e) {
                null != e.stickers && (e.stickers.forEach(t => D(t, !0, e)), v(e.id, e.stickers))
            }
            class G extends a.default.Store {
                initialize() {
                    this.waitFor(u.default, f.default, I.default)
                }
                get isLoaded() {
                    return 0 !== S
                }
                get stickerMetadata() {
                    return U(), null == g && (g = new Map, M()), g
                }
                get hasLoadedStickerPacks() {
                    return null != C && C + L > Date.now()
                }
                get isFetchingStickerPacks() {
                    return m
                }
                getStickerById(e) {
                    return !A.has(e) && U(), A.get(e)
                }
                getStickerPack(e) {
                    return N.get(e)
                }
                getPremiumPacks() {
                    return O
                }
                isPremiumPack(e) {
                    return O.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return R
                }
                getAllStickersIterator() {
                    return U(), A.values()
                }
                getAllGuildStickers() {
                    return U(), R
                }
                getStickersByGuildId(e) {
                    return U(), R.get(e)
                }
            }
            G.displayName = "StickersStore";
            var w = new G(l.default, {
                BACKGROUND_SYNC: () => {
                    g = null, A = new Map, R = new Map, S = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    g = null, A = new Map, R = new Map, t.forEach(b), S = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !E.default.isLurking(t.id) && (b(t), 1 === S && null == t.stickers && null != t.stickerUpdates && (S = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, i = null !== (t = R.get(n.id)) && void 0 !== t ? t : [];
                    i.forEach(e => {
                        null != g && g.delete(e.id), A.delete(e.id)
                    }), R.delete(n.id), R = new Map(R)
                },
                LOGOUT: () => {
                    S = 0, O = [], A.clear(), N.clear(), g = null, R.clear(), R = new Map(R), m = !1, C = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    m = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => P(e, !0)), C = Date.now(), m = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    P(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => D(e)), v(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: i,
                        sticker: r
                    } = e, o = null !== (t = R.get(i)) && void 0 !== t ? t : [];
                    v(i, [...null !== (n = o.filter(e => e.id !== r.id)) && void 0 !== n ? n : [], r]), D(r)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    D(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: i
                    } = e, r = e => {
                        let t;
                        let n = A.get(e.id);
                        return null != n && (0, T.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, o = null !== (t = R.get(n)) && void 0 !== t ? t : [], a = o.filter(e => null == i.find(t => t.id === e.id));
                    a.forEach(e => {
                        A.delete(e.id), null != g && g.delete(e.id)
                    });
                    let l = i.map(e => r(e));
                    l.forEach(e => D(e)), v(n, l)
                }
            })
        },
        783142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveProfileChanges: function() {
                    return _
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return f
                },
                resetPendingProfileChanges: function() {
                    return I
                },
                setPendingBanner: function() {
                    return p
                },
                setPendingBio: function() {
                    return T
                },
                setPendingPronouns: function() {
                    return h
                },
                setPendingAccentColor: function() {
                    return S
                },
                setPendingThemeColors: function() {
                    return N
                },
                setTryItOutAvatar: function() {
                    return A
                },
                setTryItOutAvatarDecoration: function() {
                    return g
                },
                setTryItOutBanner: function() {
                    return O
                },
                setTryItOutThemeColors: function() {
                    return C
                }
            });
            var i = n("872717"),
                r = n("913144"),
                o = n("448993"),
                a = n("884351"),
                l = n("845579"),
                u = n("697218"),
                s = n("599110"),
                c = n("49111"),
                d = n("646718");

            function E(e) {
                s.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function _(e, t) {
                var n, s;
                let d = null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == d) return;
                let E = l.UseLegacyChatInput.getSetting();
                null != e.bio && E && (e.bio = a.default.parse(void 0, e.bio).content);
                try {
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: d
                    });
                    let n = await i.default.patch({
                        url: null != t ? c.Endpoints.GUILD_PROFILE(t, c.ME) : c.Endpoints.USER_PROFILE(c.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (s = n.body.profile_effect) || void 0 === s ? void 0 : s.id;
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: d,
                            profileEffectID: e,
                            ...n.body
                        })
                    } else {
                        let e = new o.APIError(n);
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new o.APIError(t);
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
                    })
                }
            }

            function f() {
                r.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function I() {
                r.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function p(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function T(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function h(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function S(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function N(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function A(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), E(d.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function g(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), E(d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function O(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), E(d.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function C(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), E(d.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        679428: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var i = n("917351"),
                r = n.n(i),
                o = n("872717"),
                a = n("689988"),
                l = n("605250"),
                u = n("870691"),
                s = n("42203"),
                c = n("49111");
            let d = {},
                E = new l.default("UserGuildSettingsManager"),
                _ = 0;

            function f() {
                d = {
                    ...u.default.getCollapsedCategories()
                }
            }

            function I() {
                !__OVERLAY__ && (clearTimeout(_), _ = setTimeout(() => p(), 15e3))
            }
            async function p(e, t) {
                await T(null != t ? {
                    [null != e ? e : c.ME]: t
                } : {})
            }
            async function T(e) {
                clearTimeout(_);
                let t = 0 !== Object.keys(e).length,
                    n = u.default.getCollapsedCategories(),
                    i = function() {
                        let e = {},
                            t = u.default.getCollapsedCategories();
                        for (let n in t) t[n] !== d[n] && (e[n] = !0);
                        for (let n in d) t[n] !== d[n] && (e[n] = !0);
                        return e
                    }();
                for (let r in i) {
                    let i = s.default.getChannel(r);
                    null != i && null != i.guild_id && (!(i.guild_id in e) && (e[i.guild_id] = {}), null == e[i.guild_id].channel_overrides && (e[i.guild_id].channel_overrides = {}), e[i.guild_id].channel_overrides[i.id] = {
                        ...e[i.guild_id].channel_overrides[i.id],
                        collapsed: i.id in n
                    }, t = !0)
                }
                if (!t) return;
                d = {
                    ...n
                };
                let a = r.map(e, (e, t) => ({
                    guildId: t,
                    updates: e,
                    attempts: 0
                }));
                for (; a.length > 0;) {
                    let e = a.shift();
                    if (e.guildId !== c.FAVORITES) try {
                        await o.default.patch({
                            url: c.Endpoints.USER_GUILD_SETTINGS(e.guildId),
                            body: e.updates
                        }), await h(1e3)
                    } catch (t) {
                        E.error(t), e.attempts += 1, e.attempts < 3 && a.push(e), await h(5e3)
                    }
                }
            }

            function h(e) {
                return new Promise(t => setTimeout(t, e + Math.ceil(e * Math.random())))
            }

            function S() {
                d = {
                    ...u.default.getCollapsedCategories()
                }
            }
            class N extends a.default {
                constructor(...e) {
                    super(...e), this.actions = {
                        CATEGORY_COLLAPSE: I,
                        CATEGORY_EXPAND: I,
                        CATEGORY_COLLAPSE_ALL: I,
                        CATEGORY_EXPAND_ALL: I,
                        POST_CONNECTION_OPEN: f,
                        USER_GUILD_SETTINGS_FULL_UPDATE: S
                    }, this.saveUserGuildSettings = p, this.saveUserGuildSettingsBulk = T
                }
            }
            var A = new N
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("913144"),
                r = n("54239"),
                o = n("49111");

            function a() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                i.default.dispatch({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t,
                    ...n
                }), (0, r.pushLayer)(o.Layers.USER_SETTINGS)
            }
        },
        917219: function(e, t, n) {
            "use strict";
            var i, r, o, a;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return i
                },
                DefaultVideoBackground: function() {
                    return r
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return l
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return u
                },
                BLUR_BACKGROUND_OPTION: function() {
                    return s
                },
                BACKGROUND_REPLACEMENT_SIZE: function() {
                    return c
                },
                MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return d
                }
            }), (o = i || (i = {}))[o.BACKGROUND = 0] = "BACKGROUND", (a = r || (r = {}))[a.OPTION_1 = 0] = "OPTION_1", a[a.OPTION_2 = 1] = "OPTION_2", a[a.OPTION_3 = 2] = "OPTION_3", a[a.OPTION_4 = 3] = "OPTION_4", a[a.OPTION_7 = 7] = "OPTION_7", a[a.OPTION_8 = 8] = "OPTION_8", a[a.OPTION_9 = 9] = "OPTION_9", a[a.OPTION_10 = 10] = "OPTION_10";
            let l = [r.OPTION_7, r.OPTION_8, r.OPTION_9, r.OPTION_10],
                u = [r.OPTION_7, r.OPTION_8, r.OPTION_9, r.OPTION_10, r.OPTION_1, r.OPTION_2, r.OPTION_3, r.OPTION_4].reduce((e, t, n) => ({
                    ...e,
                    [t]: n
                }), {}),
                s = "blur",
                c = {
                    width: 1280,
                    height: 720
                },
                d = 10485760
        },
        450205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("666038");
            class r extends i.default {
                toString() {
                    return this.name
                }
                constructor(e) {
                    super(), this.id = e.id, this.type = e.type, this.name = e.name, this.revoked = e.revoked || !1, this.integrations = e.integrations || [], this.visibility = e.visibility || 0, this.friendSync = e.friend_sync || !1, this.showActivity = e.show_activity || !1, this.verified = e.verified || !1, this.accessToken = e.access_token || null, this.twoWayLink = e.two_way_link || !1, this.metadata = e.metadata || null, this.metadataVisibility = e.metadata_visibility || 0
                }
            }
        },
        522308: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("666038");
            class r extends i.default {
                static createFromServer(e, t) {
                    return new r({
                        id: e.id,
                        subscriptionId: e.subscription_id,
                        premiumGuildSubscription: null != e.premium_guild_subscription ? {
                            id: e.premium_guild_subscription.id,
                            guildId: e.premium_guild_subscription.guild_id
                        } : null,
                        canceled: e.canceled,
                        cooldownEndsAt: e.cooldown_ends_at,
                        subscription: t
                    })
                }
                isOnCooldown() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                }
                isAvailable() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                }
                constructor(e) {
                    super(), this.id = e.id, this.subscriptionId = e.subscriptionId, this.premiumGuildSubscription = e.premiumGuildSubscription, this.canceled = e.canceled, this.cooldownEndsAt = e.cooldownEndsAt, this.subscription = e.subscription
                }
            }
            var o = r
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("866227"),
                r = n.n(i),
                o = n("666038");
            class a extends o.default {
                static createFromServer(e) {
                    var t;
                    return new a({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: r(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = r(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = r(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        870691: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("446674"),
                r = n("913144"),
                o = n("449008"),
                a = n("42203"),
                l = n("341542"),
                u = n("923959"),
                s = n("49111");
            let c = {},
                d = 0;

            function E() {
                d += 1
            }

            function _(e) {
                if (null == c[e]) return !1;
                delete c[e]
            }
            class f extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(a.default, l.default), this.removeChangeListener(E), this.addChangeListener(E), c = null != e ? e : {}
                }
                getState() {
                    return c
                }
                isCollapsed(e) {
                    return null != e && "null" !== e && !!c[e] && c[e]
                }
                getCollapsedCategories() {
                    return c
                }
                get version() {
                    return d
                }
            }
            f.displayName = "CategoryCollapseStore", f.persistKey = "collapsedCategories";
            var I = new f(r.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (!e.userGuildSettings.partial && (c = {}), e.userGuildSettings.entries))
                        if (null != t.channel_overrides)
                            for (let e of t.channel_overrides) e.collapsed ? c[e.channel_id] = !0 : delete c[e.channel_id]
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e, n = new Set(t.map(e => e.guild_id).filter(o.isNotNullish));
                    for (let e in c) {
                        let t = a.default.getChannel(e);
                        null != t && null != t.guild_id && n.has(t.guild_id) && delete c[t.id]
                    }
                    for (let e of t)
                        for (let t of e.channel_overrides) t.collapsed && (c[t.channel_id] = !0)
                },
                CATEGORY_COLLAPSE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (c[t]) return !1;
                    c[t] = !0
                },
                CATEGORY_EXPAND: function(e) {
                    let {
                        id: t
                    } = e;
                    return _(t)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    u.default.getChannels(t)[s.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        "null" !== t.id && (c[t.id] = !0)
                    })
                },
                CATEGORY_EXPAND_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    u.default.getChannels(t)[s.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        delete c[t.id]
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e;
                    return _(t)
                }
            })
        },
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("446674"),
                r = n("913144"),
                o = n("619340"),
                a = n("376556"),
                l = n("450205"),
                u = n("813006"),
                s = n("49111");
            let c = new Set([s.PlatformTypes.CONTACTS]),
                d = !0,
                E = [],
                _ = [],
                f = {},
                I = {},
                p = e => {
                    E = e.filter(e => !c.has(e.type) && a.default.isSupported(e.type)), _ = e.filter(e => c.has(e.type)), d = !1
                };
            class T extends i.default.Store {
                isJoining(e) {
                    return f[e] || !1
                }
                isFetching() {
                    return d
                }
                getAccounts() {
                    return E
                }
                getLocalAccounts() {
                    return _
                }
                getAccount(e, t) {
                    return E.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return _.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return I[e] || !1
                }
            }
            T.displayName = "ConnectedAccountsStore";
            var h = new T(r.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new l.default(e));
                    p(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new l.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new u.default(e.guild)
                            }))
                        }));
                        p(t)
                    } else o.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    f[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: i,
                        accessToken: r
                    } = e, o = E.find(e => e.id === n && e.type === t);
                    if (null == o) return !1;
                    null != i && (o.revoked = i), null != r && (o.accessToken = r)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("446674"),
                r = n("913144"),
                o = n("9294"),
                a = n("49111");
            let l = {},
                u = {},
                s = {};

            function c(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, o.parseExtraDataFromInviteKey)(e),
                    r = l[e],
                    u = null != r ? {
                        state: a.InviteStates.RESOLVING,
                        ...r
                    } : {
                        state: a.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                t(u), l = {
                    ...l,
                    [e]: u
                }, (null === (n = u.guild) || void 0 === n ? void 0 : n.id) != null && (s = {
                    ...s,
                    [u.guild.id]: e
                })
            }

            function d(e) {
                return c(e.code, t => {
                    t.state = "banned" in e && e.banned ? a.InviteStates.BANNED : a.InviteStates.EXPIRED
                })
            }
            class E extends i.default.Store {
                getInvite(e) {
                    return l[e]
                }
                getInviteError(e) {
                    return u[e]
                }
                getInvites() {
                    return l
                }
                getInviteKeyForGuildId(e) {
                    return s[e]
                }
            }
            E.displayName = "InviteStore";
            var _ = new E(r.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, o.parseExtraDataFromInviteKey)(t);
                    l = {
                        ...l,
                        [t]: {
                            code: n.baseCode,
                            state: a.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return c(e.code, t => {
                        var n, i;
                        t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: d,
                INSTANT_INVITE_REVOKE_SUCCESS: d,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        t.state = a.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => c(e.code, e => {
                        e.state = a.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        var n, i;
                        t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return c(e.code, e => {
                        e.state = a.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return c(e.code, t => {
                        t.state = a.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return u[e.code] = e.error, c(e.code, e => {
                        e.state = a.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return c(e.code, e => {
                        e.state = a.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = a.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = a.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        778588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("446674"),
                r = n("913144");
            let o = [];

            function a() {
                o = []
            }
            class l extends i.default.Store {
                hasLayers() {
                    return o.length > 0
                }
                getLayers() {
                    return o
                }
            }
            l.displayName = "LayerStore";
            var u = new l(r.default, {
                LAYER_PUSH: function(e) {
                    let {
                        component: t
                    } = e;
                    if (o.indexOf(t) >= 0) return !1;
                    o = [...o, t]
                },
                LAYER_POP: function() {
                    if (0 === o.length) return !1;
                    o = o.slice(0, -1)
                },
                LAYER_POP_ALL: a,
                LOGOUT: a,
                NOTIFICATION_CLICK: a
            })
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var i = n("917351"),
                r = n.n(i),
                o = n("446674"),
                a = n("913144"),
                l = n("697218"),
                u = n("49111");
            let s = u.FormStates.CLOSED,
                c = null,
                d = null,
                E = {},
                _ = {},
                f = {},
                I = null,
                p = null,
                T = !1,
                h = !1,
                S = null,
                N = null,
                A = null,
                g = [],
                O = null,
                C = null;

            function m(e) {
                var t, n, i, r, o, a;
                let c = l.default.getCurrentUser();
                if (null == c) return R();
                d = null !== (t = e.section) && void 0 !== t ? t : d, O = null !== (n = e.section) && void 0 !== n ? n : d, null != e.subsection && null != d && (E[d] = e.subsection), null != e.scrollPosition && null != d && (_[d] = e.scrollPosition), h = !!e.openWithoutBackstack, s = u.FormStates.OPEN, f = {}, p = {
                    ...I = {
                        [u.UserSettingsSections.ACCOUNT]: {
                            userId: c.id,
                            username: c.username,
                            discriminator: c.discriminator,
                            email: c.email,
                            avatar: c.avatar,
                            password: "",
                            newPassword: null,
                            claimed: c.isClaimed()
                        }
                    }
                }, N = null !== (i = e.onClose) && void 0 !== i ? i : null, A = null !== (r = e.analyticsLocation) && void 0 !== r ? r : null, g = null !== (o = e.analyticsLocations) && void 0 !== o ? o : [], C = null !== (a = e.impressionSource) && void 0 !== a ? a : null
            }

            function R() {
                s = u.FormStates.CLOSED, T = !1, I = null, O = null, p = null, c = null, d = null, E = {}, _ = {}, N = null, A = null, g = [], C = null
            }

            function v() {
                s = u.FormStates.OPEN, f = {}
            }
            class L extends o.default.Store {
                initialize() {
                    this.waitFor(l.default)
                }
                hasChanges() {
                    return null != p && null != I && (!!this.isOpen() || S === u.DrawerTabTypes.USER_SETTINGS) && !r.isEqual(p, I)
                }
                isOpen() {
                    return T
                }
                getPreviousSection() {
                    return c
                }
                getSection() {
                    return d
                }
                getSubsection() {
                    return null != d ? E[d] : null
                }
                getScrollPosition() {
                    return null != d ? _[d] : null
                }
                shouldOpenWithoutBackstack() {
                    return h
                }
                getProps() {
                    return {
                        submitting: s === u.FormStates.SUBMITTING,
                        section: d,
                        subsection: null != d ? E[d] : null,
                        scrollPosition: null != d ? _[d] : null,
                        settings: p,
                        errors: f,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: h,
                        analyticsLocation: A,
                        analyticsLocations: g,
                        initialSection: O,
                        impressionSource: C
                    }
                }
                get onClose() {
                    return N
                }
            }
            L.displayName = "UserSettingsModalStore";
            var U = new L(a.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    T = !0, m(e)
                },
                USER_SETTINGS_MODAL_INIT: m,
                USER_SETTINGS_MODAL_CLOSE: R,
                LOGOUT: R,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    s = u.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (s !== u.FormStates.SUBMITTING) return !1;
                    s = u.FormStates.OPEN, d = u.UserSettingsSections.ACCOUNT, f = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    c = d, d = e.section, A = null, g = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (E[d] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete E[t] : null != d && delete E[d]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete _[t] : null != d && delete _[d]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == p && (p = {});
                    let n = p[u.UserSettingsSections.ACCOUNT];
                    p[u.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: v,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = l.default.getCurrentUser();
                    v(), null != e && (p = {
                        ...I = {
                            [u.UserSettingsSections.ACCOUNT]: {
                                userId: e.id,
                                username: e.username,
                                discriminator: e.discriminator,
                                email: e.email,
                                avatar: e.avatar,
                                password: "",
                                newPassword: null,
                                claimed: e.isClaimed()
                            }
                        }
                    })
                },
                DRAWER_SELECT_TAB: function(e) {
                    return S = e.tab, null == d && S === u.DrawerTabTypes.USER_SETTINGS && m({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("627445"),
                r = n.n(i),
                o = n("446674"),
                a = n("913144"),
                l = n("816454");
            let u = new Map;

            function s(e) {
                let t = u.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class c extends o.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.getMainWindowId)();
                    return s(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return u.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.getMainWindowId)();
                    return s(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.getMainWindowId)();
                    return s(e).windowSize
                }
            }
            c.displayName = "WindowStore";
            let d = new c(a.default, {
                WINDOW_INIT: function(e) {
                    r(!u.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: o
                    } = e;
                    return u.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: o
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = s(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (u.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = s(e.windowId);
                    return t.focused !== e.focused && (u.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = s(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (u.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return u.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = d.isFocused() ? "focused" : "unfocused"
                })
            });
            var E = d
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return s
                },
                zoomFit: function() {
                    return c
                },
                getRatio: function() {
                    return d
                },
                getCoverRatio: function() {
                    return E
                },
                makeCssUrlString: function() {
                    return _
                },
                getPalette: function() {
                    return I
                },
                getPaletteForAvatar: function() {
                    return p
                },
                readFileAsBase64: function() {
                    return h
                },
                dataUriFileSize: function() {
                    return S
                },
                dataUrlToFile: function() {
                    return N
                },
                isPNGAnimated: function() {
                    return A
                }
            });
            var i = n("627445"),
                r = n.n(i),
                o = n("917351"),
                a = n.n(o),
                l = n("48648"),
                u = n.n(l);

            function s(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r,
                    minWidth: o = 0,
                    minHeight: a = 0
                } = e;
                if (t !== i || n !== r) {
                    let e = t > i ? i / t : 1;
                    t = Math.max(Math.round(t * e), o), n = Math.max(Math.round(n * e), a);
                    let l = n > r ? r / n : 1;
                    t = Math.max(Math.round(t * l), o), n = Math.max(Math.round(n * l), a)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function c(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return s({
                    width: e,
                    height: t,
                    maxWidth: i,
                    maxHeight: n
                })
            }

            function d(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = e, o = 1;
                t > i && (o = i / t), t = Math.round(t * o);
                let a = 1;
                return (n = Math.round(n * o)) > r && (a = r / n), Math.min(o * a, 1)
            }

            function E(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = e;
                return t === n ? 1 : Math.min(Math.max(i / t, r / n), 1)
            }

            function _(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let f = [
                [0, 0, 0]
            ];

            function I(e, t, n) {
                let i = document.createElement("canvas"),
                    r = i.getContext("2d");
                if (null == r) return f;
                let o = i.width = 0 === e.width ? 128 : e.width,
                    a = i.height = 0 === e.height ? 128 : e.height;
                r.drawImage(e, 0, 0, o, a);
                let l = r.getImageData(0, 0, o, a).data,
                    s = function(e, t, n) {
                        let i = [];
                        for (let r = 0, o, a, l, u, s; r < t; r += n) a = e[(o = 4 * r) + 0], l = e[o + 1], u = e[o + 2], (void 0 === (s = e[o + 3]) || s >= 125) && !(a > 250 && l > 250 && u > 250) && i.push([a, l, u]);
                        return i
                    }(l, o * a, n),
                    c = u(s, t);
                return "boolean" == typeof c ? f : c.palette()
            }
            let p = e => T(e),
                T = a.memoize(e => new Promise((t, n) => {
                    let i = new Image;
                    i.crossOrigin = "Anonymous", i.onerror = e => {
                        n(e), i.onerror = i.onload = null, i = null
                    }, i.onload = () => {
                        t(I(i, 5, 10)), i.onerror = i.onload = null, i = null
                    }, i.src = e
                }));

            function h(e) {
                return new Promise((t, n) => {
                    let i = new FileReader;
                    i.readAsDataURL(e), i.onload = () => {
                        r("string" == typeof i.result, "Result must be a string"), t(i.result)
                    }, i.onerror = e => n(e)
                })
            }

            function S(e) {
                let t = e.split(";base64,");
                return r(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function N(e, t, n) {
                let i = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            i = new Uint8Array(t.length);
                        for (var r = 0; r < t.length; r++) i[r] = t.charCodeAt(r);
                        return new Blob([i], {
                            type: n
                        })
                    }(e),
                    r = await i.arrayBuffer();
                return new File([r], t, {
                    type: n
                })
            }
            async function A(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let i = await e.text(),
                    r = i.indexOf("IDAT");
                return !!(r > 0) && -1 !== i.substring(0, r).indexOf("acTL") || !1
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return o
                }
            });
            var i = n("917351"),
                r = n.n(i);
            let o = e => "function" == typeof e ? e() : e;
            r.curry((e, t, n) => o(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var o = n("697218"),
                a = n("615931");
            let l = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, l = e.updateModalProps, r = n("551042").closeModal
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: o,
                    modalProps: a = {},
                    hooks: {
                        onEarlyClose: u
                    } = {}
                } = e;
                if (null == i) {
                    null == u || u();
                    return
                }
                let c = i(f, d, a);

                function d() {
                    null == u || u()
                }

                function E(e) {
                    r(c), n(e)
                }

                function _(e) {
                    r(c), o(e)
                }

                function f(e) {
                    return l(c, f, d, {
                        ...a,
                        isLoading: !0
                    }), s({
                        promiseFn: t,
                        resolve: E,
                        reject: _,
                        code: e,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }

                function I(e) {
                    let {
                        res: t
                    } = e;
                    l(c, f, d, {
                        ...a,
                        error: t.body.message
                    })
                }
            }

            function s(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    code: r,
                    mfaCodeHandler: o = u,
                    isModalOpen: a = !1,
                    ...l
                } = e;
                return t(null != r ? {
                    code: r
                } : {}).then(n, e => {
                    var r, u;
                    if (r = e, u = a, r.body && 60008 === r.body.code || u && 429 === r.status) return o({
                        promiseFn: t,
                        resolve: n,
                        reject: i,
                        res: e,
                        ...l
                    });
                    i(e)
                })
            }

            function c(e, t) {
                var n, i;
                let {
                    checkEnabled: r = null !== (i = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...l
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, a.resolveThunk)(r) ? u : s)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...l
                    })
                })
            }
        },
        829536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                perceptualToAmplitude: function() {
                    return i
                },
                amplitudeToPerceptual: function() {
                    return r
                }
            });

            function i(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
            }

            function r(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                if (0 === e) return 0;
                let i = 20 * Math.log10(e / n);
                return n * (t = i > 0 ? i / 6 + 1 : (50 + i) / 50)
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function i(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return i
                }
            })
        },
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("872717"),
                r = n("599110");

            function o(e, t, n) {
                let {
                    trackedActionData: i,
                    ...o
                } = t, a = {
                    url: o.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(o).then(e => {
                        let n = i.properties;
                        "function" == typeof i.properties && (n = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            ...a,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, o;
                        let l = i.properties;
                        "function" == typeof i.properties && (l = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (o = e.body) || void 0 === o ? void 0 : o.message,
                            ...a,
                            ...l
                        }), n(e)
                    })
                })
            }
            var a = {
                get: function(e) {
                    return o(i.default.get, e, "get")
                },
                post: function(e) {
                    return o(i.default.post, e, "post")
                },
                put: function(e) {
                    return o(i.default.put, e, "put")
                },
                patch: function(e) {
                    return o(i.default.patch, e, "patch")
                },
                delete: function(e) {
                    return o(i.default.delete, e, "del")
                }
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return l
                },
                updateModalProps: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                o = n("920636");
            let a = (e, t, n) => function(r) {
                return (0, i.jsx)(o.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...r
                })
            };

            function l(e, t, n) {
                return (0, r.openModal)(a(e, t, n), {
                    onCloseCallback: t
                })
            }

            function u(e, t, n, i) {
                return (0, r.updateModal)(e, a(t, n, i))
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return l
                }
            });
            var i = n("884691"),
                r = n("446674"),
                o = n("244201"),
                a = n("471671");

            function l() {
                let {
                    windowId: e
                } = i.useContext(o.default);
                return (0, r.useStateFromStores)([a.default], () => a.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("817736"),
                r = n("118810");
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
                    let n = (0, i.findDOMNode)(e);
                    (0, r.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = o) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                        e.forEach(e => {
                            let t;
                            if (null != e.isIntersecting) t = e.isIntersecting;
                            else {
                                let {
                                    threshold: n
                                } = this._options;
                                t = null == n ? e.intersectionRatio > 0 : Array.isArray(n) ? n.some(t => e.intersectionRatio > t) : e.intersectionRatio > n
                            }
                            let n = this._nodes.get(e.target);
                            if (null != n) {
                                let e = !1;
                                t ? !this._visibleComponents.has(n) && (this._visibleComponents.add(n), e = !0) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), e = !0), e && n.forceUpdate()
                            }
                        })
                    }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                }
            }
        },
        235855: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("884691"),
                r = n("748820"),
                o = n("157590");
            let a = (0, r.v4)(),
                l = new Map,
                u = new Map;
            class s extends i.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let e = this.getVisibilityObserver();
                        e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(e) {
                    let t = this.getVisibilityObserver(),
                        n = t.isVisible(this);
                    this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
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
                        t = u.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return i.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: i
                    } = e;
                    t ? l.has(t) ? this.elementId = l.get(t) || "" : l.set(t, (0, r.v4)()) : this.elementId = a;
                    let s = this.getVisibilityObserverId();
                    !u.has(s) && u.set(s, new o.default({
                        root: t,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            s.defaultProps = {
                active: !0,
                children: i.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var c = s
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VisibilityObserver: function() {
                    return i.default
                },
                VisibilitySensor: function() {
                    return r.default
                }
            }), n("6268");
            var i = n("157590"),
                r = n("235855")
        }
    }
]);
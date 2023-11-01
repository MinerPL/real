(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["62073"], {
        78349: function(e, t, n) {
            "use strict";
            e.exports.parse = function(e) {
                var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!t) return null;
                t.shift();
                var n = null,
                    i = [];
                t[2] && (n = (u = t[2].split("-")).shift(), i = u);
                var r = [];
                t[5] && (r = t[5].split("-")).shift();
                var o = [];
                if (t[6]) {
                    (u = t[6].split("-")).shift();
                    for (var u, a, l = []; u.length;) {
                        var s = u.shift();
                        1 === s.length ? a ? (o.push({
                            singleton: a,
                            extension: l
                        }), a = s, l = []) : a = s : l.push(s)
                    }
                    o.push({
                        singleton: a,
                        extension: l
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
                u = n.n(o);

            function a(e, t) {
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
                        var n, i, r, o, u = e.wind * t,
                            a = -e.gravity * t;
                        return {
                            x: u + (n = this.dragCoefficient.x, n * (i = this.velocity.x) * i * (i > 0 ? -1 : 1)),
                            y: a + (r = this.dragCoefficient.y, r * (o = this.velocity.y) * o * (o > 0 ? -1 : 1))
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
                            u = r.y;
                        i.x += o, i.y += u;
                        var a = this.position.previewUpdate(n);
                        return a.x += i.x * n, a.y += i.y * n, a
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
                T = function() {
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
                p = function(e) {
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
                }(T),
                S = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return _(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(I),
                h = function(e) {
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
                    function t(t, n, i, r, o, u) {
                        var a = e.call(this, t) || this;
                        a.min = n, a.max = i, a.duration = r;
                        var l = a.value / (a.max - a.min) * a.duration,
                            s = isNaN(l) ? 0 : l;
                        return a.timePassed = s < 0 ? a.duration - s : s, a.directionMultiplier = o, a.easingFunction = u, a
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

            function m(e) {
                var t = Math.floor(A(0, e.length - 1));
                return [e[t], t]
            }

            function O(e, t) {
                return m([e, t])[0]
            }

            function C(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : e
            }

            function g(e) {
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
                            return new T(new S(t.x), new S(t.y));
                        case "static-random":
                            var n = C(e.minValue),
                                i = C(e.maxValue);
                            return new T(new S(A(n.x, i.x)), new S(A(n.y, i.y)));
                        case "linear":
                            t = C(e.value);
                            var r = C(e.addValue);
                            return new T(new h(t.x, r.x), new h(t.y, r.y));
                        case "linear-random":
                            n = C(e.minValue), i = C(e.maxValue);
                            var o = C(e.minAddValue),
                                u = C(e.maxAddValue);
                            return new T(new h(A(n.x, i.x), A(o.x, u.x)), new h(A(n.y, i.y), A(o.x, u.x)));
                        case "oscillating":
                            t = C(e.value);
                            var a = C(e.start),
                                l = C(e.final),
                                s = C(e.duration),
                                c = C(e.direction);
                            return new T(new N(t.x, a.x, l.x, s.x, c.x, e.easingFunction), new N(t.y, a.y, l.y, s.x, c.y, e.easingFunction));
                        case "oscillating-random":
                            n = C(e.minValue), i = C(e.maxValue);
                            var d = C(e.minStart),
                                E = C(e.maxStart),
                                _ = C(e.minFinal),
                                f = C(e.maxFinal),
                                I = C(e.minDuration),
                                p = C(e.maxDuration),
                                g = C(e.minDirection),
                                R = C(e.maxDirection);
                            return new T(new N(A(n.x, i.x), A(d.x, E.x), A(_.x, f.x), A(I.x, p.x), O(g.x, R.x), m(e.easingFunctions)[0]), new N(A(n.y, i.y), A(d.y, E.y), A(_.y, f.y), A(I.y, p.y), O(g.y, R.y), m(e.easingFunctions)[0]))
                    }
                }(f(f({}, e), {
                    valueType: "Vector2"
                }))
            }
            var v = i.forwardRef(function(e, t) {
                var o = e.className,
                    u = e.environment,
                    l = e.onClick,
                    d = e.onMouseDown,
                    E = e.onMouseMove,
                    _ = e.onMouseUp,
                    I = e.onBeforeRender,
                    T = e.onAfterRender,
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
                    P = i.useRef(0),
                    M = i.useCallback(function() {
                        var e = v.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == I || I(t), L.current.forEach(function(n, i) {
                                    var r = n.confetti,
                                        o = n.spriteCanvas;
                                    r.update(u), r.draw(o, t), r.shouldDestroy(e, u) && L.current.delete(i)
                                }), null == T || T(t), L.current.size > 0 ? U.current = window.requestAnimationFrame(M) : (t.clearRect(0, 0, e.width, e.height), U.current = null);
                                var n = Date.now();
                                0 !== D.current && (P.current = 1e3 / (n - D.current)), D.current = n
                            }
                        }
                    }, [u, T, I]);
                i.useEffect(function() {
                    null != U.current && (window.cancelAnimationFrame(U.current), U.current = window.requestAnimationFrame(M))
                }, [M]);
                var y = i.useCallback(function(e, t) {
                        L.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == U.current && M()
                    }, [M]),
                    b = i.useCallback(function(e, t, n, i, o) {
                        var u, a, l, d, E, _, I, T, C, v, L, U, D, P, M, b = (u = null !== (M = e.id) && void 0 !== M ? M : (0, r.v4)(), a = e, l = n, d = i, E = o, T = R((I = (_ = a, f(f({
                            id: u
                        }, c), _))).size), v = (C = function(e, t) {
                            if (null != e) {
                                var n = t.sprites.findIndex(function(t) {
                                    return "string" == typeof e ? t.src === e && t.colorize : t.src === e.src && t.colorize === e.colorize
                                });
                                if (-1 !== n) return [e, n]
                            }
                            return m(t.sprites)
                        }(d, l))[0], L = C[1], U = function(e, t, n) {
                            if (!("string" == typeof(i = e) || i.colorize)) return 0;
                            var i, r = null != t ? n.colors.findIndex(function(e) {
                                return e === t
                            }) : -1;
                            return -1 !== r ? r : Math.floor(A(0, n.colors.length - 1))
                        }(null != d ? d : v, E, l), new s({
                            id: u,
                            position: R(I.position),
                            velocity: R(I.velocity),
                            rotation: (D = I.rotation, function(e) {
                                switch (e.type) {
                                    case "static":
                                        var t = g(e.value);
                                        return new p(new S(t.x), new S(t.y), new S(t.z));
                                    case "static-random":
                                        var n = g(e.minValue),
                                            i = g(e.maxValue);
                                        return new p(new S(A(n.x, i.x)), new S(A(n.y, i.y)), new S(A(n.z, i.z)));
                                    case "linear":
                                        t = g(e.value);
                                        var r = g(e.addValue);
                                        return new p(new h(t.x, r.x), new h(t.y, r.y), new h(t.z, r.z));
                                    case "linear-random":
                                        n = g(e.minValue), i = g(e.maxValue);
                                        var o = g(e.minAddValue),
                                            u = g(e.maxAddValue);
                                        return new p(new h(A(n.x, i.x), A(o.x, u.x)), new h(A(n.y, i.y), A(o.y, u.y)), new h(A(n.z, i.z), A(o.z, u.z)));
                                    case "oscillating":
                                        t = g(e.value);
                                        var a = g(e.start),
                                            l = g(e.final),
                                            s = g(e.duration),
                                            c = g(e.direction);
                                        return new p(new N(t.x, a.x, l.x, s.x, c.x, e.easingFunction), new N(t.y, a.y, l.y, s.z, c.y, e.easingFunction), new N(t.z, a.z, l.z, s.z, c.z, e.easingFunction));
                                    case "oscillating-random":
                                        n = g(e.minValue), i = g(e.maxValue);
                                        var d = g(e.minStart),
                                            E = g(e.maxStart),
                                            _ = g(e.minFinal),
                                            f = g(e.maxFinal),
                                            I = g(e.minDuration),
                                            T = g(e.maxDuration),
                                            C = g(e.minDirection),
                                            R = g(e.maxDirection);
                                        return new p(new N(A(n.x, i.x), A(d.x, E.x), A(_.x, f.x), A(I.x, T.x), O(C.x, R.x), m(e.easingFunctions)[0]), new N(A(n.y, i.y), A(d.y, E.y), A(_.y, f.y), A(I.y, T.y), O(C.y, R.y), m(e.easingFunctions)[0]), new N(A(n.z, i.z), A(d.z, E.z), A(_.z, f.z), A(I.z, T.z), O(C.z, R.z), m(e.easingFunctions)[0]))
                                }
                            }(f(f({}, D), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: R(I.dragCoefficient),
                            size: T,
                            opacity: (P = I.opacity, function(e) {
                                switch (e.type) {
                                    case "static":
                                        return new S(e.value);
                                    case "static-random":
                                        return new S(A(e.minValue, e.maxValue));
                                    case "linear":
                                        return new h(e.value, e.addValue);
                                    case "linear-random":
                                        return new h(A(e.minValue, e.maxValue), A(e.minAddValue, e.maxAddValue));
                                    case "oscillating":
                                        return new N(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                                    case "oscillating-random":
                                        return new N(A(e.minValue, e.maxValue), A(e.minStart, e.maxStart), A(e.minFinal, e.maxFinal), A(e.minDuration, e.maxDuration), O(e.minDirection, e.maxDirection), m(e.easingFunctions)[0])
                                }
                            }(f(f({}, P), {
                                valueType: "number"
                            }))),
                            spriteX: U * l.spriteWidth + 2 * U,
                            spriteY: L * l.spriteHeight + 2 * L,
                            spriteWidth: l.spriteWidth,
                            spriteHeight: l.spriteHeight
                        }));
                        return y(b, t), b
                    }, [y]),
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
                        addConfetti: y,
                        deleteConfetti: G,
                        clearConfetti: w,
                        getCanvas: F
                    }
                }, [b, y, G, w, F]);
                var x = i.useCallback(function(e, t) {
                        var n, i, r = t.clickHandler,
                            o = t.mouseHandler;
                        if (null != r || null != o) {
                            var l = null === (n = v.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != l) {
                                var s = function(e, t) {
                                    if (null == t) throw Error("element should not be null");
                                    var n = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - n.left,
                                        y: e.clientY - n.top
                                    }
                                }(e, v.current);
                                if (a(s, {
                                        x: l.left,
                                        y: l.top,
                                        width: l.width,
                                        height: l.height
                                    })) {
                                    if (null != o) return o(e);
                                    if (null != r) {
                                        var c = -1e3 / P.current * 2,
                                            d = function(e, t) {
                                                for (var n = 0, i = Array.from(e.values()); n < i.length; n++) {
                                                    var r = i[n];
                                                    if (null != r && t(r)) return r
                                                }
                                                return null
                                            }(L.current, function(e) {
                                                var t = e.confetti,
                                                    n = t.previewPositionUpdate(u, c);
                                                return a(s, {
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
                    B = i.useCallback(function(e) {
                        return x(e, {
                            clickHandler: l
                        })
                    }, [x, l]),
                    k = i.useCallback(function(e) {
                        return x(e, {
                            clickHandler: d
                        })
                    }, [x, d]),
                    V = i.useCallback(function(e) {
                        return x(e, {
                            mouseHandler: E
                        })
                    }, [x, E]),
                    H = i.useCallback(function(e) {
                        return x(e, {
                            mouseHandler: _
                        })
                    }, [x, _]);
                return i.useEffect(function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", B, l), e("mousedown", k, d), e("mousemove", V, E), e("mouseup", H, _),
                        function() {
                            window.removeEventListener("click", B), window.removeEventListener("mousedown", k), window.removeEventListener("mousemove", V), window.removeEventListener("mouseup", V)
                        }
                }, [B, k, V, H, l, d, E, _]), i.useEffect(function() {
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
                    a = e.visible,
                    l = void 0 !== a && a,
                    s = e.sprites,
                    c = e.colors,
                    d = e.spriteWidth,
                    E = e.spriteHeight,
                    _ = i.useRef(null),
                    f = i.useRef([]),
                    I = i.useRef(!1),
                    T = i.useRef({});
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
                            return T.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete T.current[e]
                        },
                        isReady: I.current
                    }
                }, [c, E, d]);
                var p = i.useCallback(function() {
                        var e = _.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height), f.current.forEach(function(e, n) {
                            var i = function(i, r) {
                                var o = d * r + 2 * r,
                                    u = E * n + 2 * n;
                                if (t.drawImage(e.image, o, u, d, E), null != i) {
                                    for (var a, l, s = t.getImageData(o, u, d, E), c = ("#" === (a = i)[0] && (a = a.slice(1)), {
                                            r: (l = parseInt(a, 16)) >> 16 & 255,
                                            g: l >> 8 & 255,
                                            b: 255 & l
                                        }), _ = 0; _ < s.data.length; _ += 4) s.data[_] = c.r, s.data[_ + 1] = c.g, s.data[_ + 2] = c.b;
                                    t.putImageData(s, o, u)
                                }
                            };
                            e.colorize ? c.forEach(function(e, t) {
                                return i(e, t)
                            }) : i(null, 0)
                        }))
                    }, [c, E, d]),
                    S = i.useCallback(function() {
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
                    h = i.useCallback(function(e) {
                        for (var t in T.current) T.current[t](e)
                    }, []),
                    N = i.useCallback(function() {
                        var e, t, n, i;
                        return e = void 0, t = void 0, n = void 0, i = function() {
                            return function(e, t) {
                                var n, i, r, o, u = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & r[0]) throw r[1];
                                        return r[1]
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
                                    return function(l) {
                                        return function(a) {
                                            if (n) throw TypeError("Generator is already executing.");
                                            for (; o && (o = 0, a[0] && (u = 0)), u;) try {
                                                if (n = 1, i && (r = 2 & a[0] ? i.return : a[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, a[1])).done) return r;
                                                switch (i = 0, r && (a = [2 & a[0], r.value]), a[0]) {
                                                    case 0:
                                                    case 1:
                                                        r = a;
                                                        break;
                                                    case 4:
                                                        return u.label++, {
                                                            value: a[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        u.label++, i = a[1], a = [0];
                                                        continue;
                                                    case 7:
                                                        a = u.ops.pop(), u.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(r = (r = u.trys).length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                            u = 0;
                                                            continue
                                                        }
                                                        if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                                            u.label = a[1];
                                                            break
                                                        }
                                                        if (6 === a[0] && u.label < r[1]) {
                                                            u.label = r[1], r = a;
                                                            break
                                                        }
                                                        if (r && u.label < r[2]) {
                                                            u.label = r[2], u.ops.push(a);
                                                            break
                                                        }
                                                        r[2] && u.ops.pop(), u.trys.pop();
                                                        continue
                                                }
                                                a = t.call(e, u)
                                            } catch (e) {
                                                a = [6, e], i = 0
                                            } finally {
                                                n = r = 0
                                            }
                                            if (5 & a[0]) throw a[1];
                                            return {
                                                value: a[0] ? a[1] : void 0,
                                                done: !0
                                            }
                                        }([a, l])
                                    }
                                }
                            }(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, S()];
                                    case 1:
                                        return e.sent(), p(), I.current = !0, h(!0), [2]
                                }
                            })
                        }, new(n || (n = Promise))(function(r, o) {
                            function u(e) {
                                try {
                                    l(i.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function a(e) {
                                try {
                                    l(i.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function l(e) {
                                var t;
                                e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                                    e(t)
                                })).then(u, a)
                            }
                            l((i = i.apply(e, t || [])).next())
                        })
                    }, [h, S, p]);
                return i.useEffect(function() {
                    N()
                }, [N]), i.useEffect(function() {
                    return function() {
                        return h(!1)
                    }
                }, [h]), i.useEffect(function() {
                    null != _.current && (_.current.width = (d + 2) * Math.max(c.length, 1), _.current.height = (E + 2) * s.length)
                }, [c.length, E, d, s.length]), i.createElement("canvas", {
                    ref: _,
                    className: u(o, ((n = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !l, n))
                })
            });

            function U(e, t) {
                var n, r = i.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
                    o = r[0],
                    u = r[1];
                i.useEffect(function() {
                    var e = null == t ? void 0 : t.addReadyListener(u);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }, [t]);
                var a = i.useCallback(function(n, i) {
                        var r = void 0 === i ? {} : i,
                            o = r.sprite,
                            u = r.color,
                            a = null == t ? void 0 : t.getCreateData(),
                            l = null == t ? void 0 : t.getCanvas();
                        if (null != l && null != a && 0 !== a.sprites.length) return null == e ? void 0 : e.createConfetti(n, l, a, o, u)
                    }, [e, t]),
                    l = i.useCallback(function(e, t, n) {
                        for (var i = [], r = 0; r < t; r++) {
                            var o = a(e, n);
                            o && i.push(o)
                        }
                        return i
                    }, [a]),
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
                        createConfetti: a,
                        createMultipleConfetti: l,
                        addConfetti: s,
                        clearConfetti: d,
                        deleteConfetti: c,
                        isReady: o && null != t && null != e
                    }
                }, [s, d, e, a, l, c, o, t])
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
                    for (var u = e.charCodeAt(r); o < n;)
                        if (t.charCodeAt(o++) === u) continue e;
                    return !1
                }
                return !0
            }
        },
        458389: function(e, t, n) {
            var i = n("594140"),
                r = n("564414"),
                o = n("725502"),
                u = n("591350"),
                a = n("476540"),
                l = n("381178"),
                s = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = o(e),
                    c = !n && r(e),
                    d = !n && !c && u(e),
                    E = !n && !c && !d && l(e),
                    _ = n || c || d || E,
                    f = _ ? i(e.length, String) : [],
                    I = f.length;
                for (var T in e)(t || s.call(e, T)) && !(_ && ("length" == T || d && ("offset" == T || "parent" == T) || E && ("buffer" == T || "byteLength" == T || "byteOffset" == T) || a(T, I))) && f.push(T);
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
                u = {};
            u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return o(e) && r(e.length) && !!u[i(e)]
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
                u = o && o.exports === r && i.process,
                a = function() {
                    try {
                        var e = o && o.require && o.require("util").types;
                        if (e) return e;
                        return u && u.binding && u.binding("util")
                    } catch (e) {}
                }();
            e.exports = a
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
                    var u = i(n, o),
                        a = e[u];
                    e[u] = e[n], e[n] = a
                }
                return e.length = t, e
            }
        },
        591350: function(e, t, n) {
            e = n.nmd(e);
            var i = n("690516"),
                r = n("221386"),
                o = "object" == typeof t && t && !t.nodeType && t,
                u = o && "object" == typeof e && e && !e.nodeType && e,
                a = u && u.exports === o ? i.Buffer : void 0,
                l = a ? a.isBuffer : void 0;
            e.exports = l || r
        },
        381178: function(e, t, n) {
            var i = n("562132"),
                r = n("492692"),
                o = n("276440"),
                u = o && o.isTypedArray,
                a = u ? r(u) : i;
            e.exports = a
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
                    return u
                }
            });
            var i = n("884691"),
                r = n("48174");
            let o = [];

            function u(e, t) {
                let n = (0, i.useRef)(),
                    u = (0, i.useRef)(o);
                return u.current === o ? (n.current = e(), u.current = t) : !(0, r.default)(t, u.current) && (n.current = e(), u.current = t), n.current
            }
        },
        890450: function(e, t, n) {
            "use strict";
            e.exports = n.p + "321a07cbc6f5919dbce9.svg"
        },
        839491: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a826e445dff97cf15335.svg"
        },
        164654: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1f3e315f020ed5635dc1.svg"
        },
        540346: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1af9bdf041e000508e41.svg"
        },
        526094: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7442b576347c1d02886f.svg"
        },
        367469: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3205da2e8f78633583d0.svg"
        },
        23933: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8f581f91e7e650ac87a2.svg"
        },
        283397: function(e, t, n) {
            "use strict";
            e.exports = n.p + "44d5e1639bc492dc8d62.svg"
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
                    return S
                },
                get: function() {
                    return h
                }
            });
            var o = "copy",
                u = "convert";

            function a(e, t, n) {
                if (t === o) return n;
                if (t === u) return e(n);
                if (t instanceof Array) return n.map(n => a(e, t[0], n));
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
                        i[r] = a(e, o.schema, n[r])
                    }
                    return i
                }
            }

            function l(e, t) {
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
                    id: s(u),
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
                            id: s(u),
                            name: s(o),
                            displayName: s(o)
                        }),
                        challenge: s(u),
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
                    rawId: s(u),
                    authenticatorAttachment: c(o),
                    response: s({
                        clientDataJSON: s(u),
                        attestationObject: s(u),
                        transports: l(o, e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        })
                    }),
                    clientExtensionResults: l(_, e => e.getClientExtensionResults())
                },
                T = {
                    mediation: c(o),
                    publicKey: s({
                        challenge: s(u),
                        timeout: c(o),
                        rpId: c(o),
                        allowCredentials: c([d]),
                        userVerification: c(o),
                        extensions: c(E)
                    }),
                    signal: c(o)
                },
                p = {
                    type: s(o),
                    id: s(o),
                    rawId: s(u),
                    authenticatorAttachment: c(o),
                    response: s({
                        clientDataJSON: s(u),
                        authenticatorData: s(u),
                        signature: s(u),
                        userHandle: s(u)
                    }),
                    clientExtensionResults: l(_, e => e.getClientExtensionResults())
                };
            async function S(e) {
                let t = await navigator.credentials.create(a(i, f, e));
                return a(r, I, t)
            }
            async function h(e) {
                let t = await navigator.credentials.get(a(i, T, e));
                return a(r, p, t)
            }
        },
        506838: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                P: function() {
                    return X
                },
                match: function() {
                    return q
                }
            });
            let i = Symbol.for("@ts-pattern/matcher"),
                r = Symbol.for("@ts-pattern/isVariadic"),
                o = "@ts-pattern/anonymous-select-key",
                u = e => !!(e && "object" == typeof e),
                a = e => e && !!e[i],
                l = (e, t, n) => {
                    if (a(e)) {
                        let r = e[i](),
                            {
                                matched: o,
                                selections: u
                            } = r.match(t);
                        return o && u && Object.keys(u).forEach(e => n(e, u[e])), o
                    }
                    if (u(e)) {
                        if (!u(t)) return !1;
                        if (Array.isArray(e)) {
                            if (!Array.isArray(t)) return !1;
                            let i = [],
                                o = [],
                                u = [];
                            for (let t of e.keys()) {
                                let n = e[t];
                                a(n) && n[r] ? u.push(n) : u.length ? o.push(n) : i.push(n)
                            }
                            if (u.length) {
                                if (u.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (t.length < i.length + o.length) return !1;
                                let e = t.slice(0, i.length),
                                    r = 0 === o.length ? [] : t.slice(-o.length),
                                    a = t.slice(i.length, 0 === o.length ? 1 / 0 : -o.length);
                                return i.every((t, i) => l(t, e[i], n)) && o.every((e, t) => l(e, r[t], n)) && (0 === u.length || l(u[0], a, n))
                            }
                            return e.length === t.length && e.every((e, i) => l(e, t[i], n))
                        }
                        return Object.keys(e).every(r => {
                            let o = e[r];
                            return (r in t || a(o) && "optional" === o[i]().matcherType) && l(o, t[r], n)
                        })
                    }
                    return Object.is(t, e)
                },
                s = e => {
                    var t, n, r;
                    return u(e) ? a(e) ? null != (t = null == (n = (r = e[i]()).getSelectionKeys) ? void 0 : n.call(r)) ? t : [] : Array.isArray(e) ? c(e, s) : c(Object.values(e), s) : []
                },
                c = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);

            function d(e) {
                return Object.assign(e, {
                    optional: () => E(e),
                    and: t => I(e, t),
                    or: t => T(e, t),
                    select: t => void 0 === t ? S(e) : S(t, e)
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
                                matched: l(e, t, i),
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
                                matched: t.every(t => l(t, e, i)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => c(t, s),
                        matcherType: "and"
                    })
                })
            }

            function T() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return d({
                    [i]: () => ({
                        match: e => {
                            let n = {},
                                i = (e, t) => {
                                    n[e] = t
                                };
                            return c(t, s).forEach(e => i(e, void 0)), {
                                matched: t.some(t => l(t, e, i)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => c(t, s),
                        matcherType: "or"
                    })
                })
            }

            function p(e) {
                return {
                    [i]: () => ({
                        match: t => ({
                            matched: !!e(t)
                        })
                    })
                }
            }

            function S() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let r = "string" == typeof t[0] ? t[0] : void 0,
                    u = 2 === t.length ? t[1] : "string" == typeof t[0] ? void 0 : t[0];
                return d({
                    [i]: () => ({
                        match: e => {
                            let t = {
                                [null != r ? r : o]: e
                            };
                            return {
                                matched: void 0 === u || l(u, e, (e, n) => {
                                    t[e] = n
                                }),
                                selections: t
                            }
                        },
                        getSelectionKeys: () => [null != r ? r : o].concat(void 0 === u ? [] : s(u))
                    })
                })
            }

            function h(e) {
                return "number" == typeof e
            }

            function N(e) {
                return "string" == typeof e
            }

            function A(e) {
                return "bigint" == typeof e
            }
            let m = d(p(function(e) {
                    return !0
                })),
                O = e => Object.assign(d(e), {
                    startsWith: t => O(I(e, p(e => N(e) && e.startsWith(t)))),
                    endsWith: t => O(I(e, p(e => N(e) && e.endsWith(t)))),
                    minLength: t => {
                        var n;
                        return O(I(e, (n = t, p(e => N(e) && e.length >= n))))
                    },
                    maxLength: t => {
                        var n;
                        return O(I(e, (n = t, p(e => N(e) && e.length <= n))))
                    },
                    includes: t => O(I(e, p(e => N(e) && e.includes(t)))),
                    regex: t => O(I(e, p(e => N(e) && !!e.match(t))))
                }),
                C = O(p(N)),
                g = (e, t) => p(n => h(n) && e <= n && t >= n),
                R = e => p(t => h(t) && t < e),
                v = e => p(t => h(t) && t > e),
                L = e => p(t => h(t) && t <= e),
                U = e => p(t => h(t) && t >= e),
                D = () => p(e => h(e) && Number.isInteger(e)),
                P = () => p(e => h(e) && Number.isFinite(e)),
                M = () => p(e => h(e) && e > 0),
                y = () => p(e => h(e) && e < 0),
                b = e => Object.assign(d(e), {
                    between: (t, n) => b(I(e, g(t, n))),
                    lt: t => b(I(e, R(t))),
                    gt: t => b(I(e, v(t))),
                    lte: t => b(I(e, L(t))),
                    gte: t => b(I(e, U(t))),
                    int: () => b(I(e, D())),
                    finite: () => b(I(e, P())),
                    positive: () => b(I(e, M())),
                    negative: () => b(I(e, y()))
                }),
                G = b(p(h)),
                w = (e, t) => p(n => A(n) && e <= n && t >= n),
                F = e => p(t => A(t) && t < e),
                x = e => p(t => A(t) && t > e),
                B = e => p(t => A(t) && t <= e),
                k = e => p(t => A(t) && t >= e),
                V = () => p(e => A(e) && e > 0),
                H = () => p(e => A(e) && e < 0),
                K = e => Object.assign(d(e), {
                    between: (t, n) => K(I(e, w(t, n))),
                    lt: t => K(I(e, F(t))),
                    gt: t => K(I(e, x(t))),
                    lte: t => K(I(e, B(t))),
                    gte: t => K(I(e, k(t))),
                    positive: () => K(I(e, V())),
                    negative: () => K(I(e, H()))
                }),
                W = K(p(A)),
                Y = d(p(function(e) {
                    return "boolean" == typeof e
                })),
                j = d(p(function(e) {
                    return "symbol" == typeof e
                })),
                z = d(p(function(e) {
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
                            select: n => e(void 0 === n ? S(t) : S(n, t))
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
                                    matched: e.every(e => l(n, e, r)),
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
                                    matched: _(e, e => l(r, e, i)),
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
                                let [o, u] = t;
                                return {
                                    matched: f(e, (e, t) => {
                                        let n = l(o, t, r),
                                            i = l(u, e, r);
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
                union: T,
                not: function(e) {
                    return d({
                        [i]: () => ({
                            match: t => ({
                                matched: !l(e, t, () => {})
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: p,
                select: S,
                any: m,
                _: m,
                string: C,
                between: g,
                lt: R,
                gt: v,
                lte: L,
                gte: U,
                int: D,
                finite: P,
                positive: M,
                negative: y,
                number: G,
                betweenBigInt: w,
                ltBigInt: F,
                gtBigInt: x,
                lteBigInt: B,
                gteBigInt: k,
                positiveBigInt: V,
                negativeBigInt: H,
                bigint: W,
                boolean: Y,
                symbol: j,
                nullish: z,
                instanceOf: function(e) {
                    var t;
                    return d(p((t = e, e => e instanceof t)))
                },
                shape: function(e) {
                    return d(p(function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        if (1 === t.length) {
                            let [e] = t;
                            return t => l(e, t, () => {})
                        }
                        if (2 === t.length) {
                            let [e, n] = t;
                            return l(e, n, () => {})
                        }
                        throw Error("isMatching wasn't given the right number of arguments: expected 1 or 2, received ".concat(t.length, "."))
                    }(e)))
                }
            };
            let J = {
                matched: !1,
                value: void 0
            };

            function q(e) {
                return new Q(e, J)
            }
            class Q {
                with() {
                    let e;
                    for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    if (this.state.matched) return this;
                    let r = n[n.length - 1],
                        u = [n[0]];
                    3 === n.length && "function" == typeof n[1] ? (u.push(n[0]), e = n[1]) : n.length > 2 && u.push(...n.slice(1, n.length - 1));
                    let a = !1,
                        s = {},
                        c = (e, t) => {
                            a = !0, s[e] = t
                        },
                        d = u.some(e => l(e, this.input, c)) && (!e || e(this.input)) ? {
                            matched: !0,
                            value: r(a ? o in s ? s[o] : s : this.input, this.input)
                        } : J;
                    return new Q(this.input, d)
                }
                when(e, t) {
                    if (this.state.matched) return this;
                    let n = !!e(this.input);
                    return new Q(this.input, n ? {
                        matched: !0,
                        value: t(this.input, this.input)
                    } : J)
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
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return o
                },
                unsubscribeMembers: function() {
                    return u
                },
                subscribeChannel: function() {
                    return a
                },
                subscribeChannelDimensions: function() {
                    return l
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

            function u(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function a(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function l(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: o,
                    rowHeight: u
                } = e;

                function l(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / u)) + t)
                }
                let s = [];

                function c(e) {
                    let t = e + (r.MINIMUM_RANGE - 1);
                    return s.push([e, t]), t + 1
                }
                let d = l(.5 * o),
                    E = l(i, -d),
                    _ = l(i + o, d);
                for (E > 0 && (E = Math.max(c(0), E)), E = Math.floor(E / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; E <= _;) E = c(E);
                a(t, n, s)
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
                    return u
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

            function u() {
                i.default.dispatch({
                    type: "LAYER_POP_ALL"
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
                u = n("160299"),
                a = n("745279"),
                l = n("850068"),
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
                        a = {};
                    null != t && (a.country_code = t), null != n && (a.payment_source_id = n), null != c && (a.include_unpublished = c), null != d && (a.revenue_surface = d), o.query = a, !u.default.ipCountryCodeLoaded && await (0, l.fetchIpCountryCode)();
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
                    }), (0, a.captureBillingException)(t), new o.default(t)
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
                    return T
                },
                disableAccount: function() {
                    return p
                },
                saveAccountRequest: function() {
                    return S
                },
                saveAccountChanges: function() {
                    return h
                },
                getHarvestStatus: function() {
                    return N
                },
                requestHarvest: function() {
                    return A
                },
                setPendingAvatar: function() {
                    return m
                },
                setPendingGlobalNameName: function() {
                    return O
                },
                setPendingAvatarDecoration: function() {
                    return C
                },
                setPendingProfileEffectID: function() {
                    return g
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
                u = n("913144"),
                a = n("393414"),
                l = n("599110"),
                s = n("315102"),
                c = n("730622"),
                d = n("437822"),
                E = n("49111"),
                _ = n("191349"),
                f = n("782340");

            function I() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function T() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function p(e, t) {
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
                    d.default.logoutInternal(), (0, a.transitionTo)(E.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function S(e) {
                let t = await i.default.patch({
                        url: E.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, u.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && u.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return u.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function h(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: o,
                    password: a,
                    avatar: d,
                    avatarDecoration: I,
                    newPassword: T,
                    globalName: p
                } = e;
                return u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, c.default)(e => {
                    let u = {
                        username: t,
                        email: i,
                        email_token: o,
                        password: a,
                        avatar: d,
                        discriminator: n,
                        global_name: p,
                        new_password: T,
                        ...e
                    };
                    null === I && (u.avatar_decoration_id = null), null != I && (u.avatar_decoration_id = I.id, u.avatar_decoration_sku_id = I.skuId);
                    let l = r.default.get(E.DEVICE_TOKEN),
                        s = (0, _.getDevicePushProvider)();
                    null != s && null != l && (u.push_provider = s, u.push_token = l);
                    let c = r.default.get(E.DEVICE_VOIP_TOKEN);
                    return null != _.DEVICE_PUSH_VOIP_PROVIDER && null != c && (u.push_voip_provider = _.DEVICE_PUSH_VOIP_PROVIDER, u.push_voip_token = c), S(u)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: f.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => u.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return l.default.track(E.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, s.isAnimatedIconHash)(t.avatar)
                    }), u.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (u.default.dispatch({
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

            function m(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? o.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : o.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function O(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function C(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function g(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function R() {
                u.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function v() {
                u.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function L() {
                u.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function U() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function D(e) {
                u.default.dispatch({
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
                u = n("211895"),
                a = n("26092"),
                l = n("599110"),
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
                        (0, u.default)(e, t, n)
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
                        let e = a.default.onClose;
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
                            email: u,
                            emailToken: a,
                            password: f,
                            avatar: I,
                            newPassword: T,
                            discriminator: p
                        } = e, {
                            close: S
                        } = t;
                        return (0, c.default)(e => {
                            let t = {
                                    username: n,
                                    email: u,
                                    email_token: a,
                                    password: f,
                                    avatar: I,
                                    new_password: T,
                                    ...e,
                                    discriminator: null != p && "" !== p ? p : void 0
                                },
                                o = r.default.get(d.DEVICE_TOKEN),
                                l = (0, E.getDevicePushProvider)();
                            null != l && null != o && (t.push_provider = l, t.push_token = o);
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
                            return l.default.track(d.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, s.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, o.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), o.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != T && o.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: T
                            }), null != f && null != T && o.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), S ? this.close() : this.submitComplete(), e
                        }, e => (o.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        }), e))
                    }
                }
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
                u = n.n(o),
                a = n("77078"),
                l = n("782340"),
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
                        retrySuccessMessage: T
                    } = this.props, {
                        code: p,
                        errorMessage: S,
                        retrySuccess: h
                    } = this.state, N = r.Children.count(o) > 0 ? (0, i.jsx)(a.Card, {
                        type: a.Card.Types.WARNING,
                        className: s.card,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: o
                        })
                    }) : null, A = null != I ? (0, i.jsxs)(a.Text, {
                        className: u(s.submitText, s.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(a.Clickable, {
                            className: u(s.spacing, s.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(a.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, m = h ? (0, i.jsx)(a.Card, {
                        type: a.Card.Types.SUCCESS,
                        className: s.card,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: T
                        })
                    }) : null;
                    return (0, i.jsx)(a.ModalRoot, {
                        transitionState: _,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(a.ModalContent, {
                                children: [null != f ? (0, i.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s.spacing,
                                    children: f
                                }) : null, N, m, (0, i.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: s.spacing,
                                    children: [(0, i.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: p,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s.error,
                                        children: null != c ? c : S
                                    }) : null, A]
                                })]
                            }), (0, i.jsxs)(a.ModalFooter, {
                                children: [(0, i.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: d || 0 === p.length,
                                    children: null != n ? n : l.default.Messages.CONFIRM
                                }), (0, i.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: l.default.Messages.CANCEL
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
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? l.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : l.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? l.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : l.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
                    return u
                }
            });
            var i = n("872717"),
                r = n("49111"),
                o = n("782340");
            class u extends i.default.V8APIError {
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
                    return u
                }
            });
            var i = n("872717"),
                r = n("49111"),
                o = n("782340");
            class u extends i.default.V6OrEarlierAPIError {
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
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r(e, t) {
                let n = i.useRef(e);
                return i.useEffect(() => {
                    function e(e) {
                        null != n.current && !n.current.contains(e.target) && t()
                    }
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [n, t]), n
            }
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("704744");
            var i = n("913144");
            class r {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.subscribe(t, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return a
                }
            }), n("37983");
            var i = n("884691"),
                r = n("917351"),
                o = n.n(r);
            n("233736");
            var u = n("666020");

            function a(e) {
                i.useEffect(() => (o.forEach(e, (e, t) => (0, u.subscribeMembers)(t, e)), () => {
                    o.forEach(e, (e, t) => (0, u.unsubscribeMembers)(t, e))
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
                    return u
                }
            });
            var i = n("605250"),
                r = n("802493");
            let o = new i.default("GuildStickers");
            var u = new class e {
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
            var i, r, o, u;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return r
                }
            }), (o = i || (i = {}))[o.GAME = 1] = "GAME", o[o.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", o[o.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (u = r || (r = {}))[u.BOT = 0] = "BOT", u[u.SERVER = 1] = "SERVER", u[u.SYSTEM_DM = 2] = "SYSTEM_DM", u[u.OFFICIAL = 3] = "OFFICIAL", u[u.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", u[u.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", u[u.AI = 6] = "AI", u[u.REMIX = 7] = "REMIX"
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
                u = n("65597"),
                a = n("206230"),
                l = n("49111");
            let s = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => l.NOOP,
                    removeClickListener: l.NOOP
                },
                c = r.createContext(s);

            function d(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: l,
                    baseConfig: d,
                    addClickListener: E,
                    removeClickListener: _
                } = e, f = (0, o.useConfettiCannon)(n, l), I = (0, u.default)([a.default], () => a.default.useReducedMotion), T = r.useMemo(() => I ? s : {
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
                    value: T,
                    children: t
                })
            }
        },
        172858: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DUCK_CONFETTI_SPRITE: function() {
                    return o
                },
                COMMON_CONFETTI_COLORS: function() {
                    return u
                },
                COMMON_CONFETTI_SPRITES: function() {
                    return a
                },
                COMMON_CONFETTI_MAX_SPRITE_SIZE: function() {
                    return l
                },
                COMMON_CONFETTI_BASE_CONFIG: function() {
                    return s
                },
                COMMON_CONFETTI_ENVIRONMENT: function() {
                    return c
                }
            });
            var i = n("516555"),
                r = n("839491");
            let o = r,
                u = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                a = [n("890450"), o, n("164654"), n("540346"), n("526094"), n("367469"), n("23933"), {
                    src: n("283397"),
                    colorize: !1
                }],
                l = 28,
                s = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 30,
                            y: -80
                        },
                        maxValue: {
                            x: -30,
                            y: -180
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: 0,
                        maxValue: 360,
                        minAddValue: -25,
                        maxAddValue: 25
                    },
                    size: {
                        type: "static-random",
                        minValue: 14,
                        maxValue: l
                    }
                },
                c = new i.Environment
        },
        115279: function(e, t, n) {
            "use strict";
            var i, r, o, u, a, l, s, c, d, E, _;
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
                    return a
                },
                EMOJI_PICKER_TAB_PANEL_ID: function() {
                    return T
                },
                EMOJI_PICKER_TAB_ID: function() {
                    return p
                },
                SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
                    return S
                },
                SOUNDBOARD_PICKER_TAB_ID: function() {
                    return h
                },
                REACTION_PICKER_TAB_PANEL_ID: function() {
                    return N
                },
                REACTION_PICKER_TAB_ID: function() {
                    return A
                },
                SUPER_REACTION_PICKER_TAB_ID: function() {
                    return m
                },
                SuperReactionBalanceLocations: function() {
                    return l
                },
                GIF_PICKER_TAB_PANEL_ID: function() {
                    return O
                },
                GIF_PICKER_TAB_ID: function() {
                    return C
                },
                EMOJI_SIZE_MAP: function() {
                    return g
                },
                EMOJI_ROW_SIZE: function() {
                    return R
                }
            }), (s = i || (i = {})).GUILD = "GUILD", s.PACK = "PACK", s.UNICODE = "UNICODE", s.RECENT = "RECENT", s.CUSTOM = "CUSTOM", s.SEARCH_RESULTS = "SEARCH_RESULTS", s.FAVORITES = "FAVORITES", s.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", s.PREMIUM_UPSELL = "PREMIUM_UPSELL";
            let f = "emoji-picker-grid";
            (c = r || (r = {})).RECENT = "recent", c.FAVORITES = "favorites", c.TOP_GUILD_EMOJI = "top guild emoji", c.CUSTOM = "custom", c.PEOPLE = "people", c.NATURE = "nature", c.FOOD = "food", c.ACTIVITY = "activity", c.TRAVEL = "travel", c.OBJECTS = "objects", c.SYMBOLS = "symbols", c.FLAGS = "flags", c.PREMIUM_UPSELL = "premium emoji", (d = o || (o = {})).NONE = "", d.TOP_GUILD_EMOJI = "top_server", d.NEWLY_ADDED_EMOJI = "newly_added", (E = u || (u = {}))[E.EMOJI = 0] = "EMOJI", E[E.NSFW = 1] = "NSFW";
            let I = -1;
            (_ = a || (a = {}))[_.MEDIUM = 40] = "MEDIUM", _[_.LARGE = 48] = "LARGE";
            let T = "emoji-picker-tab-panel",
                p = "emoji-picker-tab",
                S = "soundboard-picker-tab-panel",
                h = "soundboard-picker-tab",
                N = "reaction-picker-tab-panel",
                A = "reaction-picker-tab",
                m = "super-reaction-picker-tab";
            (l || (l = {})).TOOLTIP = "tooltip";
            let O = "gif-picker-tab-panel",
                C = "gif-picker-tab",
                g = {
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
                u = n("773336"),
                a = n("49111");
            let l = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                s = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                c = (0, u.isAndroid)(),
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
                    let u = o.SUPPORTS_WEBP ? "webp" : "png",
                        d = "",
                        E = "quality=lossless";
                    return (null != t && (d = "size=" + (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()), E = c ? "" : "&" + E), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(l, "/").concat(n, "/").concat(i, ".").concat(u, "?").concat(d).concat(E) : "".concat(s).concat(a.Endpoints.ROLE_ICON(n, i), "?").concat(d)
                },
                f = e => e.startsWith(l) || e.startsWith("".concat(s, "/roles")) && e.includes("/icons/"),
                I = (e, t) => {
                    var n;
                    let i = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return i || e.features.has(a.GuildFeatures.ROLE_ICONS)
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
                    return T
                },
                GuildHomeDeprecationExperiment: function() {
                    return p
                }
            });
            var i = n("446674"),
                r = n("203288"),
                o = n("862205"),
                u = n("21121"),
                a = n("923959"),
                l = n("305961"),
                s = n("49111");

            function c(e, t, n) {
                let i = t.getChannels(e)[a.GUILD_SELECTABLE_CHANNELS_KEY].filter(t => {
                    let {
                        channel: i
                    } = t;
                    return !n.isChannelGated(e, i.id)
                });
                return i.length > 5
            }

            function d(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                let t = (0, i.useStateFromStores)([a.default, r.default], () => null != e && c(e.id, a.default, r.default));
                return !__OVERLAY__ && !!t && null != e && e.hasFeature(s.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }

            function E(e) {
                if (__OVERLAY__ || e === s.ME || e === s.FAVORITES || (0, u.isInMainTabsExperiment)()) return !1;
                let t = l.default.getGuild(e);
                return !!(null != t && c(e, a.default, r.default)) && t.hasFeature(s.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
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
            let T = (0, o.createExperiment)({
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
                p = (0, o.createExperiment)({
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
                    return a
                },
                setCurrentGuild: function() {
                    return l
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
                    return T
                },
                setPendingThemeColors: function() {
                    return p
                },
                resetPendingMemberChanges: function() {
                    return S
                },
                resetPendingProfileChanges: function() {
                    return h
                },
                resetAllPending: function() {
                    return N
                },
                clearErrors: function() {
                    return A
                },
                setDisableSubmit: function() {
                    return m
                }
            });
            var i = n("872717"),
                r = n("913144"),
                o = n("54239"),
                u = n("49111");
            async function a(e, t) {
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
                        url: u.Endpoints.SET_GUILD_MEMBER(e),
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

            function l(e) {
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

            function T(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function p(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function S() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function h() {
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

            function m(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, r, o, u, a, l, s, c, d;
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var E = n("446674"),
                _ = n("913144"),
                f = n("49111");
            let I = f.FormStates.CLOSED,
                T = {},
                p = !1;

            function S() {
                I = f.FormStates.CLOSED, T = {}, s = null, c = void 0, d = []
            }

            function h() {
                N(), A(), T = {}, I = f.FormStates.OPEN
            }

            function N() {
                i = void 0, a = void 0
            }

            function A() {
                r = void 0, o = void 0, u = void 0, l = void 0
            }
            class m extends E.default.Store {
                getFormState() {
                    return I
                }
                getErrors() {
                    return T
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== o || void 0 !== u || void 0 !== a || void 0 !== l
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
                    return a
                }
                getPendingPronouns() {
                    return u
                }
                getPendingAccentColor() {
                    return a
                }
                getPendingThemeColors() {
                    return l
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: r,
                        pendingBio: o,
                        pendingPronouns: u,
                        pendingNickname: a,
                        pendingThemeColors: l
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
                    return p
                }
            }
            m.displayName = "GuildIdentitySettingsStore";
            var O = new m(_.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    s = e.guild, I = f.FormStates.OPEN, T = {}, c = e.source, d = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: S,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    h(), S()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    s = e.guild, T = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    I = f.FormStates.SUBMITTING, T = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (I !== f.FormStates.SUBMITTING) return !1;
                    I = f.FormStates.OPEN, T = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    I = f.FormStates.OPEN, T = e.errors
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
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: N,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: A,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: h,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: h,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    T = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    p = t
                }
            })
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("872717"),
                r = n("913144"),
                o = n("479756"),
                u = n("38654"),
                a = n("9294"),
                l = n("26989"),
                s = n("337543"),
                c = n("697218"),
                d = n("49111");
            let E = async (e, t) => {
                let n = null != t ? t : s.default.getInviteKeyForGuildId(e),
                    o = c.default.getCurrentUser(),
                    u = !l.default.isMember(e, null == o ? void 0 : o.id);
                try {
                    let t = await i.default.get({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: u,
                            invite_code: null != n ? (0, a.parseInviteCodeFromInviteKey)(n) : void 0
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
            }, T = async (e, t) => {
                if (u.default.isFullServerPreview(e)) {
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
            var p = {
                fetchVerificationForm: E,
                updateVerificationForm: _,
                updateVerificationFormDescription: f,
                enableVerificationForm: I,
                submitVerificationForm: T
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return o
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return u
                },
                MAX_FORM_ELEMENTS: function() {
                    return a
                },
                MAX_NUM_RULES: function() {
                    return l
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
                    return T
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return p
                }
            });
            var i, r = n("567054");
            r.VerificationFormFieldTypes.VERIFICATION;
            let o = new Set([r.VerificationFormFieldTypes.TERMS]),
                u = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
                a = 5,
                l = 16,
                s = 300,
                c = 300,
                d = 8,
                E = 150,
                _ = 150,
                f = 1e3,
                I = 300,
                T = "Membership Gating",
                p = "in-app-member-verification";
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
                    return a
                },
                setHasUnsubmittedChanges: function() {
                    return l
                },
                setShowWarning: function() {
                    return s
                }
            });
            var i = n("308503"),
                r = n("659500"),
                o = n("49111");
            let u = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                a = (0, i.default)(e => u),
                l = e => {
                    a.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                s = e => {
                    a.setState({
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
                u = n("50926"),
                a = n("347977"),
                l = n("394294"),
                s = n("49111");
            let c = () => {
                    o.default.track(s.AnalyticEvents.MODAL_DISMISSED, {
                        type: l.MEMBER_VERIFICATION_TYPE
                    })
                },
                d = e => {
                    o.default.track(s.AnalyticEvents.OPEN_MODAL, {
                        type: l.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var E = {
                openMemberVerificationModal(e, t) {
                    d(e);
                    let o = async t => {
                        await u.default.submitVerificationForm(e, t)
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
                                    if (a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, a.setShowWarning)(!0);
                                        return
                                    }
                                    c()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            c(), a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, a.setShowWarning)(!0) : (0, r.closeModal)(l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && c(), (0, r.closeModal)(l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
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
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return u
                },
                setHotspotOverride: function() {
                    return a
                },
                clearHotspotOverride: function() {
                    return l
                }
            });
            var i = n("913144"),
                r = n("599110"),
                o = n("49111");

            function u(e) {
                r.default.track(o.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), i.default.wait(() => {
                    i.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function a(e, t) {
                i.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function l(e) {
                i.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("446674"),
                r = n("913144"),
                o = n("197881"),
                u = n("492397");
            let a = new Set,
                l = {};
            class s extends i.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (a = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (l = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && l[e];
                    return !(u.CONFERENCE_MODE_ENABLED || o.ProcessArgs.isDisallowPopupsSet()) && (n || !a.has(e))
                }
                hasHiddenHotspot(e) {
                    return a.has(e)
                }
                getHotspotOverride(e) {
                    return l[e]
                }
                getState() {
                    return {
                        hiddenHotspots: a,
                        hotspotOverrides: l
                    }
                }
            }
            s.displayName = "HotspotStore", s.persistKey = "hotspots", s.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var c = new s(r.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    a = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (a.has(t)) return !1;
                    a.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    l[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == l[t]) return !1;
                    delete l[t]
                }
            })
        },
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return o.default
                }
            });
            var i = n("533613");
            n.es(i, t);
            var r = n("597517");
            n.es(r, t);
            var o = n("269596")
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return S
                },
                updateImpersonating: function() {
                    return h
                },
                stopImpersonating: function() {
                    return N
                },
                updateImpersonatedChannels: function() {
                    return m
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
                u = n("42203"),
                a = n("923959"),
                l = n("26989"),
                s = n("305961"),
                c = n("957255"),
                d = n("18494"),
                E = n("282109"),
                _ = n("599110"),
                f = n("38654"),
                I = n("507950"),
                T = n("49111"),
                p = n("724210");

            function S(e, t) {
                _.default.track(T.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === I.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), A(e)
            }

            function h(e, t) {
                let n = f.default.getData(e);
                null != n && n.type === t.type && (_.default.track(T.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
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
                    n = u.default.getChannel(t),
                    i = null != t && (0, p.isStaticChannelRoute)(t);
                if (!i && !c.default.can(T.Permissions.VIEW_CHANNEL, n)) {
                    let t = a.default.getDefaultChannel(e);
                    null != t && (0, o.transitionTo)(T.Routes.CHANNEL(e, t.id))
                }
            }

            function m(e, t, n) {
                let i = new Set(E.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), h(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function O(e, t) {
                let n = s.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...a.default.getSelectableChannelIds(e), ...a.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    a.default.addConditionalChangeListener(() => {
                        let t = l.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let r = [...a.default.getSelectableChannelIds(e), ...a.default.getVocalChannelIds(e)],
                            o = r.filter(e => !n.includes(e));
                        return o.length > 0 && m(e, o, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), h(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function C(e, t) {
                h(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return u
                },
                generateInviteKeyFromExtraData: function() {
                    return a
                },
                parseExtraDataFromInviteKey: function() {
                    return l
                },
                parseInviteCodeFromInviteKey: function() {
                    return s
                }
            });
            var i = n("522632"),
                r = n("833858");
            let o = "event";

            function u(e, t) {
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
                return a({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function a(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(o, "=").concat(n)
            }

            function l(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let u = i.parse(n),
                    a = (0, r.getFirstQueryStringValue)(u[o]);
                return {
                    baseCode: t,
                    guildScheduledEventId: a
                }
            }

            function s(e) {
                let [t] = e.split("?");
                return t
            }
        },
        809810: function(e, t, n) {
            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var o = n("446674"),
                u = n("913144"),
                a = n("798609"),
                l = n("42203"),
                s = n("3765");
            let c = {},
                d = {},
                E = {};

            function _(e) {
                delete c[e];
                let t = E[e];
                null != t && delete d[t], delete E[e]
            }
            class f extends o.default.Store {
                getInteraction(e) {
                    let t = d[e.id];
                    return null != t ? c[t] : null
                }
                getMessageInteractionStates() {
                    let e = {};
                    for (let [t, n] of Object.entries(c)) {
                        let i = E[t];
                        null != i && (e[i] = n.state)
                    }
                    return e
                }
                canQueueInteraction(e, t) {
                    let n = d[e];
                    return (null == n || null == c[n] || c[n].state === s.InteractionState.FAILED) && (null == c[t] || c[t].state === s.InteractionState.FAILED) && !0
                }
                getIFrameModalApplicationId() {
                    return r
                }
                getIFrameModalKey() {
                    return i
                }
            }
            f.displayName = "InteractionStore";
            var I = new f(u.default, {
                LOGOUT: function() {
                    c = {}, d = {}, E = {}
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        nonce: t,
                        messageId: n,
                        data: i,
                        onCreate: r,
                        onCancel: o,
                        onSuccess: u,
                        onFailure: a
                    } = e;
                    null != n && (d[n] = t, E[t] = n), c[t] = {
                        state: s.InteractionState.QUEUED,
                        data: i,
                        onCreate: r,
                        onCancel: o,
                        onSuccess: u,
                        onFailure: a
                    }
                },
                INTERACTION_CREATE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        interactionId: i
                    } = e;
                    if (null == n) return !1;
                    let r = c[n];
                    if (null == r || r.state !== s.InteractionState.QUEUED) return !1;
                    r.state = s.InteractionState.CREATED, null === (t = r.onCreate) || void 0 === t || t.call(r, i)
                },
                INTERACTION_SUCCESS: function(e) {
                    var t;
                    let {
                        nonce: n
                    } = e;
                    if (null == n) return !1;
                    let i = c[n];
                    if (null == i) return !1;
                    null === (t = i.onSuccess) || void 0 === t || t.call(i), _(n)
                },
                INTERACTION_FAILURE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        errorCode: i,
                        errorMessage: r
                    } = e;
                    if (null == n) return !1;
                    let o = c[n];
                    if (null == o) return !1;
                    null === (t = o.onFailure) || void 0 === t || t.call(o, i, r), o.data.interactionType === a.InteractionTypes.APPLICATION_COMMAND ? _(n) : c[n] = {
                        ...o,
                        state: s.InteractionState.FAILED,
                        errorCode: i,
                        errorMessage: r
                    }
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    if (null == t.nonce) return !1;
                    {
                        var n;
                        let e = c[t.nonce];
                        if (null == e) return !1;
                        null === (n = e.onSuccess) || void 0 === n || n.call(e), _(t.nonce)
                    }
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e, n = l.default.getChannel(t);
                    if (null == n) return !1;
                    for (let [e, t] of Object.entries(c)) t.state === s.InteractionState.FAILED && _(e)
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    let {
                        application: t
                    } = e;
                    r = t.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    i = void 0, r = void 0
                },
                INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
                    let {
                        modalKey: t
                    } = e;
                    i = t
                }
            })
        },
        3765: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                InteractionState: function() {
                    return i
                }
            }), (r = i || (i = {}))[r.QUEUED = 0] = "QUEUED", r[r.CREATED = 1] = "CREATED", r[r.FAILED = 2] = "FAILED"
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
                u = n("719923"),
                a = n("782340");
            let l = (0, r.createExperiment)({
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
                    } = n, a = u.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: o,
                        collectEnabled: a ? i : o
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
                        config: l.getCurrentConfig({
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
                    }, r = (0, i.default)([o.default], () => o.default.getCurrentUser()), u = l.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: a,
                        showTryPacksModalAndV2Copy: c,
                        collectEnabled: d
                    } = s({
                        user: r,
                        config: u
                    }), E = a && d && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: a,
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
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
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
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("65597"),
                o = n("880731");

            function u(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, u = (0, r.default)([o.default], () => o.default.isEnabled({
                    confettiLocation: n
                }));
                return u ? (0, i.jsx)(i.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("884691"),
                r = n("65597"),
                o = n("526887"),
                u = n("880731");

            function a() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(o.ConfettiCannonContext), t = (0, r.default)([u.default], () => u.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), a = i.useMemo(() => ({
                    fire: (i, r, o) => {
                        var u, a;
                        let l = (null == o ? void 0 : o.settings) != null ? {
                                ...t,
                                ...o.settings
                            } : t,
                            s = n(l);
                        e(i, r, s, (null !== (u = null == o ? void 0 : o.count) && void 0 !== u ? u : l.confettiCount) * (null !== (a = null == o ? void 0 : o.countMultiplier) && void 0 !== a ? a : 1), {
                            sprite: null == o ? void 0 : o.sprite
                        })
                    }
                }), [e, n, t]);
                return a
            }
        },
        210721: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnimationState: function() {
                    return r
                },
                getGiftAnimationData: function() {
                    return _
                },
                sendGiftMessage: function() {
                    return f
                }
            });
            var i, r, o = n("627445"),
                u = n.n(o),
                a = n("450911"),
                l = n("819689"),
                s = n("884351"),
                c = n("42203"),
                d = n("659632"),
                E = n("78345");
            (i = r || (r = {})).ACTION = "action", i.LOOP = "loop", i.IDLE = "idle";
            let _ = (e, t) => {
                    let i;
                    switch (e) {
                        case E.PremiumGiftStyles.SNOWGLOBE:
                            i = () => n.el("452661").then(n.t.bind(n, "452661", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case E.PremiumGiftStyles.BOX:
                            i = () => n.el("726871").then(n.t.bind(n, "726871", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case E.PremiumGiftStyles.CUP:
                            i = () => n.el("544929").then(n.t.bind(n, "544929", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case E.PremiumGiftStyles.STANDARD_BOX:
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
                        case E.PremiumGiftStyles.CAKE:
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
                        case E.PremiumGiftStyles.CHEST:
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
                        case E.PremiumGiftStyles.COFFEE:
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
                f = async (e, t) => {
                    if (null == t) throw Error("giftCode must be defined");
                    if (null == e) throw Error("Recipient must be defined");
                    let n = await a.default.openPrivateChannel(e.id).then(e => {
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
        824986: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumTutorialTooltips: function() {
                    return o
                },
                default: function() {
                    return I
                }
            });
            var i, r, o, u = n("446674"),
                a = n("913144"),
                l = n("521012"),
                s = n("565785"),
                c = n("646718");
            (i = o || (o = {})).FILE_UPLOAD = "file_upload", i.STICKER_PICKER = "sticker_picker", i.EMOJI_PICKER = "emoji_picker", i.BOOSTING_FLOW = "boosting_flow";
            let d = {
                isPersistentCoachmarkCollapsed: !1,
                hasFlowStartEventBeenEmitted: {},
                canPlayWowMoment: !1,
                isPersistentHelperHidden: !0,
                isFetchingWowMomentMedia: !1,
                wowMomentWumpusMediaUrl: null,
                wowMomentHelperMediaUrl: null,
                navigatedFromHelper: !1,
                tutorialExpirationTime: null
            };

            function E() {
                d = {
                    isPersistentCoachmarkCollapsed: !1,
                    hasFlowStartEventBeenEmitted: {},
                    canPlayWowMoment: !1,
                    isPersistentHelperHidden: !0,
                    isFetchingWowMomentMedia: !1,
                    wowMomentWumpusMediaUrl: null,
                    wowMomentHelperMediaUrl: null,
                    navigatedFromHelper: !1,
                    tutorialExpirationTime: null
                }
            }

            function _() {
                let e = new Date;
                e.setDate(e.getDate() + 14), d.tutorialExpirationTime = e.getTime()
            }
            class f extends u.default.PersistedStore {
                initialize(e) {
                    null != e && (d = e), d.isPersistentHelperHidden = !1, d.canPlayWowMoment = !1, d.isFetchingWowMomentMedia = !1, d.wowMomentWumpusMediaUrl = null, d.wowMomentHelperMediaUrl = null
                }
                getState() {
                    return d
                }
                get isPersistentCoachmarkCollapsed() {
                    return d.isPersistentCoachmarkCollapsed
                }
                hasFlowStartEventBeenEmitted(e) {
                    return null == d.hasFlowStartEventBeenEmitted[e] && (d.hasFlowStartEventBeenEmitted[e] = !1), d.hasFlowStartEventBeenEmitted[e]
                }
                get canPlayWowMoment() {
                    return d.canPlayWowMoment
                }
                get isPersistentHelperHidden() {
                    return d.isPersistentHelperHidden
                }
                get isFetchingWowMomentMedia() {
                    return d.isFetchingWowMomentMedia
                }
                get wowMomentWumpusMedia() {
                    return d.wowMomentWumpusMediaUrl
                }
                get wowMomentHelperMedia() {
                    return d.wowMomentHelperMediaUrl
                }
                get navigatedFromHelper() {
                    return d.navigatedFromHelper
                }
                get tutorialExpirationTime() {
                    return d.tutorialExpirationTime
                }
            }
            f.displayName = "PremiumTutorialStore", f.persistKey = "PremiumTutorialStore", f.migrations = [e => ({
                ...e,
                hasFlowStartEventBeenEmitted: null !== (r = e.hasFlowStartEventBeenEmitted) && void 0 !== r ? r : {}
            })];
            var I = new f(a.default, {
                PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE: function() {
                    d.isPersistentCoachmarkCollapsed = !d.isPersistentCoachmarkCollapsed
                },
                UPDATE_HAS_FLOW_START_EVENT_BEEN_EMITTED: function(e) {
                    let {
                        event: t,
                        value: n
                    } = e;
                    d.hasFlowStartEventBeenEmitted[t] = n
                },
                LOGOUT: function() {
                    E()
                },
                RESET_PREMIUM_TUTORIAL_STORE: E,
                PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT: function(e) {
                    let {
                        value: t
                    } = e;
                    d.canPlayWowMoment = t
                },
                PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN: function(e) {
                    let {
                        value: t
                    } = e;
                    d.isPersistentHelperHidden = t
                },
                PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA: function(e) {
                    let {
                        value: t
                    } = e;
                    d.isFetchingWowMomentMedia = t
                },
                PREMIUM_TUTORIAL_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(e) {
                    let {
                        wumpusMedia: t,
                        helperMedia: n
                    } = e;
                    d.wowMomentWumpusMediaUrl = t, d.wowMomentHelperMediaUrl = n, d.isFetchingWowMomentMedia = !1
                },
                PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER: function(e) {
                    let {
                        value: t
                    } = e;
                    d.navigatedFromHelper = t
                },
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function(e) {
                    let {
                        subscription: t
                    } = e, {
                        enabled: n
                    } = s.default.getCurrentConfig({
                        location: "5f2710_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    n && null != t.items.find(e => c.PREMIUM_TIER_2_PLANS.has(e.plan_id)) && _()
                },
                GIFT_CODE_REDEEM_SUCCESS: function(e) {
                    let {
                        entitlement: t
                    } = e, {
                        enabled: n
                    } = s.default.getCurrentConfig({
                        location: "5f2710_2"
                    }, {
                        autoTrackExposure: !1
                    });
                    n && (null == t ? void 0 : t.sku_id) === c.PremiumSubscriptionSKUs.TIER_2 && null == l.default.getPremiumSubscription(!1) && null == d.tutorialExpirationTime && _()
                }
            })
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return f
                },
                maybeFetchPremiumLikelihood: function() {
                    return T
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return p
                }
            });
            var i = n("884691"),
                r = n("65597"),
                o = n("872717"),
                u = n("913144"),
                a = n("775433"),
                l = n("697218"),
                s = n("10514"),
                c = n("764364"),
                d = n("676572"),
                E = n("646718"),
                _ = n("49111");
            let f = "nonSubscriber";
            async function I() {
                try {
                    u.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await o.default.get({
                        url: _.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    u.default.dispatch({
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
                    404 === e.status ? u.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : u.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function T(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = d.default.shouldFetchPremiumLikelihood(), r = l.default.getCurrentUser();
                S(r, i, t, n)
            }

            function p(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), o = (0, r.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), u = (0, r.default)([l.default], () => l.default.getCurrentUser());
                i.useEffect(() => {
                    S(u, o, t, n)
                }, [u, o, t, n])
            }

            function S(e, t, n, i) {
                null != e && !(0, c.isPremium)(e) && n && (t && I(), i && (!s.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_0) && !s.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_0) && (0, a.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_0), !s.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_2) && !s.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_2) && (0, a.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("446674"),
                r = n("913144");
            let o = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                u = o;
            class a extends i.default.Store {
                initialize() {
                    u = o
                }
                getState() {
                    return u
                }
                shouldFetchPremiumLikelihood() {
                    return !u.isFetching && !u.fetched
                }
            }
            a.displayName = "UserPremiumLikelihoodStore";
            var l = new a(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    u.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    u.premiumLikelihood = t, u.fetched = !0, u.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    u.isFetching = !1
                },
                LOGOUT: function() {
                    u.premiumLikelihood = void 0
                }
            })
        },
        694768: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-02_nitroduction_experience",
                label: "Nitroduction Experience",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "One month trial users recieve the Nitroduction experience",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var o = r
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
        565785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-08_premium_tutorial_for_all",
                label: "Premium Tutorial Experience For All",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "All net new users (exclude trial) receive premium tutorial experience",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var o = r
        },
        921228: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsPremiumTutorialEnabled: function() {
                    return h
                },
                isPremiumTutorialEnabled: function() {
                    return m
                },
                useAllDismissedPremiumTutorialSteps: function() {
                    return g
                }
            });
            var i = n("884691"),
                r = n("446674"),
                o = n("151426"),
                u = n("850068"),
                a = n("10641"),
                l = n("374363"),
                s = n("697218"),
                c = n("521012"),
                d = n("719923"),
                E = n("324878"),
                _ = n("824986"),
                f = n("694768"),
                I = n("565785"),
                T = n("646718");
            let p = () => {
                    let e = (0, r.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription()),
                        t = (0, a.useIsDismissibleContentDismissed)(o.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, E.isEligibleTrialSub)(e) && !t
                },
                S = () => {
                    let e = (0, E.useHasActiveTrial)(),
                        t = (0, a.useIsDismissibleContentDismissed)(o.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = (0, r.useStateFromStores)([s.default], () => s.default.getCurrentUser()),
                        l = (0, d.isPremiumExactly)(n, T.PremiumTypes.TIER_2),
                        _ = (0, r.useStateFromStores)([c.default], () => c.default.hasFetchedPreviousPremiumTypeSubscription()),
                        f = (0, r.useStateFromStores)([c.default], () => c.default.getPreviousPremiumTypeSubscription()),
                        I = !e && l;
                    i.useEffect(() => {
                        I && !_ && !t && (0, u.fetchMostRecentSubscription)()
                    }, [I, _, t]);
                    let p = I && _ && null == f;
                    return p && !t
                };

            function h(e) {
                var t;
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    i = p() && n,
                    {
                        enabled: o
                    } = f.default.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: i,
                        disable: !i
                    }),
                    u = (0, r.useStateFromStores)([_.default], () => _.default.tutorialExpirationTime),
                    a = new Date().getTime(),
                    l = (0, r.useStateFromStores)([c.default], () => {
                        var e, n;
                        return null !== (t = null === (n = c.default.getPremiumSubscription()) || void 0 === n ? void 0 : null === (e = n.createdAt) || void 0 === e ? void 0 : e.getTime()) && void 0 !== t ? t : 0
                    }),
                    s = S() && n,
                    d = I.default.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: s && a - l < 18e5,
                        disable: !s
                    }).enabled && null != u && u > a;
                return o || d
            }
            let N = () => {
                    let e = c.default.getPremiumTypeSubscription(),
                        t = (0, a.isDismissibleContentDismissed)(o.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, E.isEligibleTrialSub)(e) && !t
                },
                A = () => {
                    let e = (0, E.hasActiveTrial)(),
                        t = (0, a.isDismissibleContentDismissed)(o.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = s.default.getCurrentUser(),
                        i = (0, d.isPremiumExactly)(n, T.PremiumTypes.TIER_2),
                        r = c.default.hasFetchedPreviousPremiumTypeSubscription(),
                        l = c.default.getPreviousPremiumTypeSubscription();
                    return !r && i && !t && (0, u.fetchMostRecentSubscription)(), !t && !e && i && r && null == l
                },
                m = function(e) {
                    var t, n, i;
                    let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        o = N() && r,
                        {
                            enabled: u
                        } = f.default.getCurrentConfig({
                            location: e
                        }, {
                            disable: !o,
                            autoTrackExposure: o
                        }),
                        a = new Date().getTime(),
                        l = _.default.tutorialExpirationTime,
                        s = null !== (i = null === (n = c.default.getPremiumSubscription()) || void 0 === n ? void 0 : null === (t = n.createdAt) || void 0 === t ? void 0 : t.getTime()) && void 0 !== i ? i : 0,
                        d = A() && r,
                        E = I.default.getCurrentConfig({
                            location: e
                        }, {
                            disable: !d,
                            autoTrackExposure: d && a - s < 18e5
                        }).enabled && null != l && l > a;
                    return u || E
                },
                O = [];

            function C() {
                return T.PremiumTutorialStepOrder.filter(e => (0, a.isDismissibleContentDismissed)(e))
            }

            function g() {
                return function(e, t) {
                    let n = h("useMemoizedValueSyncedWithDismissibleContents"),
                        o = (0, r.useStateFromStores)([l.default], () => {
                            var e;
                            return null === (e = l.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                        });
                    return i.useMemo(() => n ? e() : t, [n, t, e, o])
                }(C, O)
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
                o = n("446674"),
                u = n("206230"),
                a = n("491605"),
                l = n("210721"),
                s = n("78345");

            function c(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: c = !0,
                    defaultAnimationState: d,
                    idleAnimationState: E
                } = e, _ = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), [f, I] = r.useState(d), T = r.useRef((0, l.getGiftAnimationData)(t, f)), [p, S] = r.useState(null == E), [h, N] = r.useState(!1), [A, m] = r.useState(-1), O = () => {
                    T.current = (0, l.getGiftAnimationData)(t, f), m(e => e + 1)
                }, C = () => {
                    S(!1), N(!0), m(-1), I(d)
                };
                r.useEffect(() => {
                    null == E && I(d)
                }, [E, d]), r.useEffect(() => {
                    if (null != E && A >= 0) {
                        C();
                        return
                    }
                    O()
                }, [t, E]), r.useEffect(() => {
                    (!h || null == E) && O()
                }, [f]), r.useEffect(() => {
                    h && (S(null == E), N(!1), O())
                }, [h]);
                if (!s.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, i.jsx)(a.default, {
                    importData: T.current,
                    shouldAnimate: !_ && c,
                    className: n,
                    versionKey: A,
                    onComplete: null != E ? () => {
                        null != E && (I(E), S(!0))
                    } : void 0,
                    loop: p
                })
            }
        },
        906932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAvatarsWithGuilds: function() {
                    return l
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
                u = n("783142"),
                a = n("26989");

            function l(e) {
                return i.useMemo(() => {
                    let t = a.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let r in t) {
                        var i;
                        let o = t[r],
                            u = null === (i = o[e]) || void 0 === i ? void 0 : i.avatar;
                        null != u && (null == n[u] && (n[u] = []), n[u].push(r))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function s(e, t) {
                (0, u.setPendingBio)(e === t ? void 0 : e)
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
                u = n("929423");
            n("424562");
            var a = n("49111"),
                l = n("397336");

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
                    null != t && (0, u.initGuildIdentitySettings)(t, null != c ? c : E), r.default.open(a.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? l.ProfileCustomizationSubsection.GUILD : l.ProfileCustomizationSubsection.USER_PROFILE, {
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
                    return u
                },
                getDevicePushProvider: function() {
                    return a
                }
            });
            var i, r, o = n("773336");
            let u = null;

            function a() {
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
                    return u
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return a
                },
                SoundboardWheelSize: function() {
                    return l
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
                u = 5,
                a = "DEFAULT";
            (r = i || (i = {}))[r.SUCCESS = 0] = "SUCCESS", r[r.INTERRUPTED = 1] = "INTERRUPTED", i.SUCCESS, i.INTERRUPTED;
            let l = {
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
                u = n.n(o),
                a = n("446674"),
                l = n("913144"),
                s = n("845579"),
                c = n("374363"),
                d = n("697218"),
                E = n("599110"),
                _ = n("829536"),
                f = n("846325"),
                I = n("49111"),
                T = n("397336");
            (i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let p = new Map,
                S = new Map,
                h = new Set,
                N = r.NOT_FETCHED,
                A = r.NOT_FETCHED,
                m = new Set,
                O = new Map,
                C = !1;

            function g(e) {
                let {
                    sound: t
                } = e, n = p.get(t.guildId), i = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != i && -1 !== i ? (n[i] = t, p.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), p.set(t.guildId, [...n]))
            }
            let R = u.debounce(e => {
                E.default.track(I.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, _.amplitudeToPerceptual)(e))
                }), s.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function v(e) {
                var t, n;
                let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(i)) t.soundboardMuted ? h.add(e) : h.delete(e);
                for (let e of h.keys()) null == i[e] && h.delete(e)
            }
            class L extends a.default.Store {
                initialize() {
                    this.waitFor(c.default), v(c.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(p),
                        favoritedSoundIds: Array.from(m),
                        localSoundboardMutes: Array.from(h)
                    }
                }
                getSounds() {
                    return p
                }
                getSoundsForGuild(e) {
                    return p.get(e)
                }
                getSound(e, t) {
                    var n;
                    let i = null !== (n = p.get(e)) && void 0 !== n ? n : [];
                    return i.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(p.values()).flat();
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
                    return null != S.get(e)
                }
                isFavoriteSound(e) {
                    return m.has(e)
                }
                getFavorites() {
                    return m
                }
                isLocalSoundboardMuted(e) {
                    return h.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return C
                }
                hasFetchedAllSounds() {
                    return A === r.FETCHED && N === r.FETCHED
                }
            }
            L.displayName = "SoundboardStore";
            var U = new L(l.default, {
                LOGOUT: function() {
                    p.clear(), S.clear(), O.clear(), C = !1, A = r.NOT_FETCHED, N = r.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    A = r.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: g,
                GUILD_SOUNDBOARD_SOUND_UPDATE: g,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    p.delete(t);
                    let i = p.get(n),
                        r = null == i ? void 0 : i.findIndex(e => e.soundId === t);
                    null != i && null != r && !(r < 0) && (i.splice(r, 1), p.set(n, [...i]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, i;
                    let {
                        soundId: r,
                        userId: o
                    } = e, u = (null !== (n = S.get(r)) && void 0 !== n ? n : 0) + 1, a = (null !== (i = O.get(o)) && void 0 !== i ? i : 0) + 1;
                    S.set(r, u), O.set(o, a), o !== (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (C = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: i,
                        userId: r
                    } = e, o = (null !== (t = S.get(i)) && void 0 !== t ? t : 0) - 1, u = (null !== (n = O.get(r)) && void 0 !== n ? n : 0) - 1;
                    o <= 0 ? S.delete(i) : S.set(i, o), u <= 0 ? O.delete(r) : O.set(r, u)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    R(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    S.clear(), O.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: i
                    } = t;
                    if (n === T.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var r, o;
                        m = new Set(null !== (o = null == i ? void 0 : null === (r = i.favoriteSoundboardSounds) || void 0 === r ? void 0 : r.soundIds) && void 0 !== o ? o : [])
                    } else n === T.UserSettingsTypes.PRELOADED_USER_SETTINGS && v(i)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    N = r.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    p.set(f.DEFAULT_SOUND_GUILD_ID, t), N = r.FETCHED
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
                        p.set(t, n)
                    }), A = r.FETCHED
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    p.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    h.has(t) ? h.delete(t) : h.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    p = new Map(Object.entries(t.soundboardSounds)), m = new Set(t.favoritedSoundIds), h = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    p.set(t, n)
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
                u = n("719923"),
                a = n("4233"),
                l = n("24373"),
                s = n("49111");
            (i = r || (r = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let c = (e, t, n) => {
                    if (null == t) return r.NONSENDABLE;
                    let i = u.default.canUseStickersEverywhere(t);
                    if ((0, l.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = a.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return i || e ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, l.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? r.SENDABLE : null == n.guild_id || o.default.can({
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
                    return S
                }
            });
            var i = n("917351"),
                r = n.n(i),
                o = n("446674"),
                u = n("913144"),
                a = n("80507"),
                l = n("374363"),
                s = n("364685"),
                c = n("49111"),
                d = n("397336");
            let E = {
                pendingUsages: []
            };
            c.Durations.DAY;
            let _ = new a.default({
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

            function T() {
                var e;
                let t = null === (e = l.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                _.overwriteHistory(r.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), E.pendingUsages)
            }
            class p extends o.default.PersistedStore {
                initialize(e) {
                    this.waitFor(s.default), null != e && (E = e), this.syncWith([s.default], I), this.syncWith([l.default], T)
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
            p.displayName = "StickersPersistedStore", p.persistKey = "StickersPersistedStoreV2";
            var S = new p(u.default, {
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
                u = n("446674"),
                a = n("913144"),
                l = n("802493"),
                s = n("595525"),
                c = n("212084"),
                d = n("867805"),
                E = n("267567"),
                _ = n("813006"),
                f = n("778689"),
                I = n("305961"),
                T = n("161585"),
                p = n("24373"),
                S = n("49111");
            (i = r || (r = {}))[i.Unloaded = 0] = "Unloaded", i[i.MaybeLoaded = 1] = "MaybeLoaded", i[i.Loaded = 2] = "Loaded";
            let h = 2,
                N = new Map,
                A = new Map,
                m = null,
                O = [],
                C = null,
                g = !1,
                R = new Map,
                v = (e, t) => {
                    R = new Map(R.set(e, t))
                },
                L = 1e3 * S.Durations.HOUR,
                U = () => {
                    if (0 !== h) return;
                    let e = l.default.database();
                    if (null == e) return;
                    h = 2;
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
                    A.set(e.id, e), t && P(e, n)
                },
                P = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == m) return;
                    let {
                        tags: n
                    } = e, i = {
                        type: T.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, p.isStandardSticker)(e)) {
                        let t = O.find(t => t.id === e.pack_id),
                            r = [i, ...(null != n ? n : "").split(",").map(e => ({
                                type: T.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && r.push({
                            type: T.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), m.set(e.id, r)
                    } else if ((0, p.isGuildSticker)(e) && null != n) {
                        let r = d.default.getByName(n),
                            o = {
                                type: T.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            u = [i, o];
                        if (null != t) {
                            let e = (t instanceof(0, _.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && u.push({
                                type: T.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == r) {
                            m.set(e.id, u);
                            return
                        }
                        u.push({
                            type: T.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: r.surrogates
                        }), r.forEachDiversity(e => u.push({
                            type: T.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), m.set(e.id, u)
                    }
                },
                M = (e, t, n) => {
                    N.set(e.id, e);
                    let i = [...O];
                    if (t) {
                        let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), O = i
                    }(t || n) && e.stickers.forEach(e => D(e))
                },
                y = () => {
                    R.forEach((e, t) => {
                        let n = I.default.getGuild(t);
                        null != n && e.forEach(e => P(e, n))
                    }), O.forEach(e => {
                        e.stickers.forEach(e => P(e))
                    })
                };

            function b(e) {
                null != e.stickers && (e.stickers.forEach(t => D(t, !0, e)), v(e.id, e.stickers))
            }
            class G extends u.default.Store {
                initialize() {
                    this.waitFor(l.default, f.default, I.default)
                }
                get isLoaded() {
                    return 0 !== h
                }
                get stickerMetadata() {
                    return U(), null == m && (m = new Map, y()), m
                }
                get hasLoadedStickerPacks() {
                    return null != C && C + L > Date.now()
                }
                get isFetchingStickerPacks() {
                    return g
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
            var w = new G(a.default, {
                BACKGROUND_SYNC: () => {
                    m = null, A = new Map, R = new Map, h = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    m = null, A = new Map, R = new Map, t.forEach(b), h = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !E.default.isLurking(t.id) && (b(t), 1 === h && null == t.stickers && null != t.stickerUpdates && (h = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, i = null !== (t = R.get(n.id)) && void 0 !== t ? t : [];
                    i.forEach(e => {
                        null != m && m.delete(e.id), A.delete(e.id)
                    }), R.delete(n.id), R = new Map(R)
                },
                LOGOUT: () => {
                    h = 0, O = [], A.clear(), N.clear(), m = null, R.clear(), R = new Map(R), g = !1, C = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    g = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => M(e, !0)), C = Date.now(), g = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    M(t, !1, n)
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
                        return null != n && (0, p.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, o = null !== (t = R.get(n)) && void 0 !== t ? t : [], u = o.filter(e => null == i.find(t => t.id === e.id));
                    u.forEach(e => {
                        A.delete(e.id), null != m && m.delete(e.id)
                    });
                    let a = i.map(e => r(e));
                    a.forEach(e => D(e)), v(n, a)
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
                    return T
                },
                setPendingBio: function() {
                    return p
                },
                setPendingPronouns: function() {
                    return S
                },
                setPendingAccentColor: function() {
                    return h
                },
                setPendingThemeColors: function() {
                    return N
                },
                setTryItOutAvatar: function() {
                    return A
                },
                setTryItOutAvatarDecoration: function() {
                    return m
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
                u = n("884351"),
                a = n("845579"),
                l = n("697218"),
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
                let d = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == d) return;
                let E = a.UseLegacyChatInput.getSetting();
                null != e.bio && E && (e.bio = u.default.parse(void 0, e.bio).content);
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

            function T(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function p(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function S(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function h(e) {
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

            function m(e) {
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
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("913144"),
                r = n("54239"),
                o = n("49111");

            function u() {
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
            var i, r, o, u;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return i
                },
                DefaultVideoBackground: function() {
                    return r
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return a
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return l
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
            }), (o = i || (i = {}))[o.BACKGROUND = 0] = "BACKGROUND", (u = r || (r = {}))[u.OPTION_1 = 0] = "OPTION_1", u[u.OPTION_2 = 1] = "OPTION_2", u[u.OPTION_3 = 2] = "OPTION_3", u[u.OPTION_4 = 3] = "OPTION_4", u[u.OPTION_7 = 7] = "OPTION_7", u[u.OPTION_8 = 8] = "OPTION_8", u[u.OPTION_9 = 9] = "OPTION_9", u[u.OPTION_10 = 10] = "OPTION_10";
            let a = [r.OPTION_7, r.OPTION_8, r.OPTION_9, r.OPTION_10],
                l = [r.OPTION_7, r.OPTION_8, r.OPTION_9, r.OPTION_10, r.OPTION_1, r.OPTION_2, r.OPTION_3, r.OPTION_4].reduce((e, t, n) => ({
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
        671484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("866227"),
                r = n.n(i),
                o = n("666038"),
                u = n("568734"),
                a = n("797647"),
                l = n("646718");
            let s = Object.freeze({
                PAYMENT_SOURCE_REQUIRED: 1,
                EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
                NOT_SELF_REDEEMABLE: 4
            });
            class c extends o.default {
                static createFromServer(e) {
                    return new c({
                        userId: null != e.user ? e.user.id : null,
                        code: e.code,
                        skuId: e.sku_id,
                        uses: e.uses,
                        maxUses: e.max_uses,
                        storeListingId: null != e.store_listing ? e.store_listing.id : null,
                        expiresAt: null != e.expires_at ? r(e.expires_at) : null,
                        redeemed: e.redeemed,
                        subscriptionPlanId: null != e.subscription_plan ? e.subscription_plan.id : e.subscription_plan_id,
                        subscriptionPlan: null != e.subscription_plan ? a.default.createFromServer(e.subscription_plan) : null,
                        revoked: !1,
                        entitlementBranches: null != e.entitlement_branches ? e.entitlement_branches : null,
                        flags: null != e.flags ? e.flags : 0,
                        giftStyle: e.gift_style,
                        subscriptionTrial: null != e.subscription_trial ? {
                            id: e.subscription_trial.id,
                            interval: e.subscription_trial.interval,
                            intervalCount: e.subscription_trial.interval_count,
                            skuId: e.subscription_trial.sku_id
                        } : null,
                        promotion: null != e.promotion ? {
                            id: e.promotion.id,
                            startDate: e.promotion.start_date,
                            endDate: e.promotion.end_date,
                            inboundHeaderText: e.promotion.inbound_header_text,
                            inboundBodyText: e.promotion.inbound_body_text,
                            inboundHelpCenterLink: e.promotion.inbound_help_center_link
                        } : null
                    })
                }
                isExpired() {
                    let e = this.expiresAt;
                    return null != e && r().isAfter(e)
                }
                get hasMultipleCopies() {
                    return this.maxUses > 1
                }
                get isClaimed() {
                    return this.uses >= this.maxUses
                }
                get remainingUses() {
                    return this.maxUses - this.uses
                }
                get isSubscription() {
                    return null != this.subscriptionPlanId
                }
                get premiumSubscriptionType() {
                    return this.isSubscription && l.PremiumSubscriptionSKUToPremiumType[this.skuId] || null
                }
                get isSelfRedeemable() {
                    return !(0, u.hasFlag)(this.flags, s.NOT_SELF_REDEEMABLE)
                }
                get isExistingPremiumSubscriptionDisallowed() {
                    return (0, u.hasFlag)(this.flags, s.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED)
                }
                get analyticsData() {
                    return {
                        gift_code: this.code,
                        gift_code_max_uses: this.maxUses
                    }
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.userId = e.userId, this.code = e.code, this.skuId = e.skuId, this.uses = e.uses, this.maxUses = e.maxUses, this.expiresAt = e.expiresAt, this.redeemed = e.redeemed, this.storeListingId = e.storeListingId, this.subscriptionPlanId = e.subscriptionPlanId, this.subscriptionPlan = e.subscriptionPlan, this.revoked = e.revoked, this.entitlementBranches = e.entitlementBranches, this.flags = e.flags, this.subscriptionTrial = e.subscriptionTrial, this.promotion = e.promotion, this.giftStyle = e.giftStyle
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
                    return u
                }
            });
            var i = n("866227"),
                r = n.n(i),
                o = n("666038");
            class u extends o.default {
                static createFromServer(e) {
                    var t;
                    return new u({
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
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i = n("446674"),
                r = n("913144"),
                o = n("619340"),
                u = n("376556"),
                a = n("450205"),
                l = n("813006"),
                s = n("49111");
            let c = new Set([s.PlatformTypes.CONTACTS]),
                d = !0,
                E = [],
                _ = [],
                f = {},
                I = {},
                T = e => {
                    E = e.filter(e => !c.has(e.type) && u.default.isSupported(e.type)), _ = e.filter(e => c.has(e.type)), d = !1
                };
            class p extends i.default.Store {
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
            p.displayName = "ConnectedAccountsStore";
            var S = new p(r.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new a.default(e));
                    T(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new a.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new l.default(e.guild)
                            }))
                        }));
                        T(t)
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
                u = n("49111");
            let a = {},
                l = {},
                s = {};

            function c(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, o.parseExtraDataFromInviteKey)(e),
                    r = a[e],
                    l = null != r ? {
                        state: u.InviteStates.RESOLVING,
                        ...r
                    } : {
                        state: u.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                t(l), a = {
                    ...a,
                    [e]: l
                }, (null === (n = l.guild) || void 0 === n ? void 0 : n.id) != null && (s = {
                    ...s,
                    [l.guild.id]: e
                })
            }

            function d(e) {
                return c(e.code, t => {
                    t.state = "banned" in e && e.banned ? u.InviteStates.BANNED : u.InviteStates.EXPIRED
                })
            }
            class E extends i.default.Store {
                getInvite(e) {
                    return a[e]
                }
                getInviteError(e) {
                    return l[e]
                }
                getInvites() {
                    return a
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
                    a = {
                        ...a,
                        [t]: {
                            code: n.baseCode,
                            state: u.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return c(e.code, t => {
                        var n, i;
                        t.state = u.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: d,
                INSTANT_INVITE_REVOKE_SUCCESS: d,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        t.state = u.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => c(e.code, e => {
                        e.state = u.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        var n, i;
                        t.state = u.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return c(e.code, e => {
                        e.state = u.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return c(e.code, t => {
                        t.state = u.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return l[e.code] = e.error, c(e.code, e => {
                        e.state = u.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return c(e.code, e => {
                        e.state = u.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = u.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = u.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        778588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("446674"),
                r = n("913144");
            let o = [];

            function u() {
                o = []
            }
            class a extends i.default.Store {
                hasLayers() {
                    return o.length > 0
                }
                getLayers() {
                    return o
                }
            }
            a.displayName = "LayerStore";
            var l = new a(r.default, {
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
                LAYER_POP_ALL: u,
                LOGOUT: u,
                NOTIFICATION_CLICK: u
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
                u = n("913144"),
                a = n("697218"),
                l = n("49111");
            let s = l.FormStates.CLOSED,
                c = null,
                d = null,
                E = {},
                _ = {},
                f = {},
                I = null,
                T = null,
                p = !1,
                S = !1,
                h = null,
                N = null,
                A = null,
                m = [],
                O = null,
                C = null;

            function g(e) {
                var t, n, i, r, o, u;
                let c = a.default.getCurrentUser();
                if (null == c) return R();
                d = null !== (t = e.section) && void 0 !== t ? t : d, O = null !== (n = e.section) && void 0 !== n ? n : d, null != e.subsection && null != d && (E[d] = e.subsection), null != e.scrollPosition && null != d && (_[d] = e.scrollPosition), S = !!e.openWithoutBackstack, s = l.FormStates.OPEN, f = {}, T = {
                    ...I = {
                        [l.UserSettingsSections.ACCOUNT]: {
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
                }, N = null !== (i = e.onClose) && void 0 !== i ? i : null, A = null !== (r = e.analyticsLocation) && void 0 !== r ? r : null, m = null !== (o = e.analyticsLocations) && void 0 !== o ? o : [], C = null !== (u = e.impressionSource) && void 0 !== u ? u : null
            }

            function R() {
                s = l.FormStates.CLOSED, p = !1, I = null, O = null, T = null, c = null, d = null, E = {}, _ = {}, N = null, A = null, m = [], C = null
            }

            function v() {
                s = l.FormStates.OPEN, f = {}
            }
            class L extends o.default.Store {
                initialize() {
                    this.waitFor(a.default)
                }
                hasChanges() {
                    return null != T && null != I && (!!this.isOpen() || h === l.DrawerTabTypes.USER_SETTINGS) && !r.isEqual(T, I)
                }
                isOpen() {
                    return p
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
                    return S
                }
                getProps() {
                    return {
                        submitting: s === l.FormStates.SUBMITTING,
                        section: d,
                        subsection: null != d ? E[d] : null,
                        scrollPosition: null != d ? _[d] : null,
                        settings: T,
                        errors: f,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: S,
                        analyticsLocation: A,
                        analyticsLocations: m,
                        initialSection: O,
                        impressionSource: C
                    }
                }
                get onClose() {
                    return N
                }
            }
            L.displayName = "UserSettingsModalStore";
            var U = new L(u.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    p = !0, g(e)
                },
                USER_SETTINGS_MODAL_INIT: g,
                USER_SETTINGS_MODAL_CLOSE: R,
                LOGOUT: R,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    s = l.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (s !== l.FormStates.SUBMITTING) return !1;
                    s = l.FormStates.OPEN, d = l.UserSettingsSections.ACCOUNT, f = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    c = d, d = e.section, A = null, m = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (E[d] = e.subsection)
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
                    null == T && (T = {});
                    let n = T[l.UserSettingsSections.ACCOUNT];
                    T[l.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: v,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = a.default.getCurrentUser();
                    v(), null != e && (T = {
                        ...I = {
                            [l.UserSettingsSections.ACCOUNT]: {
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
                    return h = e.tab, null == d && h === l.DrawerTabTypes.USER_SETTINGS && g({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
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
                u = n("615931");
            let a = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, a = e.updateModalProps, r = n("551042").closeModal
            }

            function l(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: o,
                    modalProps: u = {},
                    hooks: {
                        onEarlyClose: l
                    } = {}
                } = e;
                if (null == i) {
                    null == l || l();
                    return
                }
                let c = i(f, d, u);

                function d() {
                    null == l || l()
                }

                function E(e) {
                    r(c), n(e)
                }

                function _(e) {
                    r(c), o(e)
                }

                function f(e) {
                    return a(c, f, d, {
                        ...u,
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
                    a(c, f, d, {
                        ...u,
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
                    mfaCodeHandler: o = l,
                    isModalOpen: u = !1,
                    ...a
                } = e;
                return t(null != r ? {
                    code: r
                } : {}).then(n, e => {
                    var r, l;
                    if (r = e, l = u, r.body && 60008 === r.body.code || l && 429 === r.status) return o({
                        promiseFn: t,
                        resolve: n,
                        reject: i,
                        res: e,
                        ...a
                    });
                    i(e)
                })
            }

            function c(e, t) {
                var n, i;
                let {
                    checkEnabled: r = null !== (i = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...a
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, u.resolveThunk)(r) ? l : s)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...a
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
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("872717"),
                r = n("599110");

            function o(e, t, n) {
                let {
                    trackedActionData: i,
                    ...o
                } = t, u = {
                    url: o.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(o).then(e => {
                        let n = i.properties;
                        "function" == typeof i.properties && (n = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            ...u,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, o;
                        let a = i.properties;
                        "function" == typeof i.properties && (a = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (o = e.body) || void 0 === o ? void 0 : o.message,
                            ...u,
                            ...a
                        }), n(e)
                    })
                })
            }
            var u = {
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
                    return a
                },
                updateModalProps: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                o = n("920636");
            let u = (e, t, n) => function(r) {
                return (0, i.jsx)(o.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...r
                })
            };

            function a(e, t, n) {
                return (0, r.openModal)(u(e, t, n), {
                    onCloseCallback: t
                })
            }

            function l(e, t, n, i) {
                return (0, r.updateModal)(e, u(t, n, i))
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return a
                }
            });
            var i = n("884691"),
                r = n("446674"),
                o = n("244201"),
                u = n("471671");

            function a() {
                let {
                    windowId: e
                } = i.useContext(o.default);
                return (0, r.useStateFromStores)([u.default], () => u.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("817736"),
                r = n("118810");
            let o = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class u {
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
            let u = (0, r.v4)(),
                a = new Map,
                l = new Map;
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
                        t = l.get(e);
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
                    t ? a.has(t) ? this.elementId = a.get(t) || "" : a.set(t, (0, r.v4)()) : this.elementId = u;
                    let s = this.getVisibilityObserverId();
                    !l.has(s) && l.set(s, new o.default({
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
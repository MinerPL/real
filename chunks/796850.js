            "use strict";
            r("70102"), r("424973"), r("854508");
            var a = r("812382"),
                n = r("152140"),
                s = [].slice,
                o = ["keyword", "gray", "hex"],
                i = {};
            Object.keys(n).forEach(function(e) {
                i[s.call(n[e].labels).sort().join("")] = e
            });
            var u = {};

            function c(e, t) {
                if (!(this instanceof c)) return new c(e, t);
                if (t && t in o && (t = null), t && !(t in n)) throw Error("Unknown model: " + t);
                if (null == e) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
                else if (e instanceof c) this.model = e.model, this.color = e.color.slice(), this.valpha = e.valpha;
                else if ("string" == typeof e) {
                    var r, l, f = a.get(e);
                    if (null === f) throw Error("Unable to parse color from string: " + e);
                    this.model = f.model, l = n[this.model].channels, this.color = f.value.slice(0, l), this.valpha = "number" == typeof f.value[l] ? f.value[l] : 1
                } else if (e.length) {
                    this.model = t || "rgb", l = n[this.model].channels;
                    var d = s.call(e, 0, l);
                    this.color = b(d, l), this.valpha = "number" == typeof e[l] ? e[l] : 1
                } else if ("number" == typeof e) e &= 16777215, this.model = "rgb", this.color = [e >> 16 & 255, e >> 8 & 255, 255 & e], this.valpha = 1;
                else {
                    this.valpha = 1;
                    var h = Object.keys(e);
                    "alpha" in e && (h.splice(h.indexOf("alpha"), 1), this.valpha = "number" == typeof e.alpha ? e.alpha : 0);
                    var p = h.sort().join("");
                    if (!(p in i)) throw Error("Unable to parse color from object: " + JSON.stringify(e));
                    this.model = i[p];
                    var y = n[this.model].labels,
                        g = [];
                    for (r = 0; r < y.length; r++) g.push(e[y[r]]);
                    this.color = b(g)
                }
                if (u[this.model])
                    for (r = 0, l = n[this.model].channels; r < l; r++) {
                        var v = u[this.model][r];
                        v && (this.color[r] = v(this.color[r]))
                    }
                this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this)
            }
            c.prototype = {
                toString: function() {
                    return this.string()
                },
                toJSON: function() {
                    return this[this.model]()
                },
                string: function(e) {
                    var t = this.model in a.to ? this : this.rgb(),
                        r = 1 === (t = t.round("number" == typeof e ? e : 1)).valpha ? t.color : t.color.concat(this.valpha);
                    return a.to[t.model](r)
                },
                percentString: function(e) {
                    var t = this.rgb().round("number" == typeof e ? e : 1),
                        r = 1 === t.valpha ? t.color : t.color.concat(this.valpha);
                    return a.to.rgb.percent(r)
                },
                array: function() {
                    return 1 === this.valpha ? this.color.slice() : this.color.concat(this.valpha)
                },
                object: function() {
                    for (var e = {}, t = n[this.model].channels, r = n[this.model].labels, a = 0; a < t; a++) e[r[a]] = this.color[a];
                    return 1 !== this.valpha && (e.alpha = this.valpha), e
                },
                unitArray: function() {
                    var e = this.rgb().color;
                    return e[0] /= 255, e[1] /= 255, e[2] /= 255, 1 !== this.valpha && e.push(this.valpha), e
                },
                unitObject: function() {
                    var e = this.rgb().object();
                    return e.r /= 255, e.g /= 255, e.b /= 255, 1 !== this.valpha && (e.alpha = this.valpha), e
                },
                round: function(e) {
                    return e = Math.max(e || 0, 0), new c(this.color.map(function(e) {
                        return function(t) {
                            var r, a;
                            return r = t, a = e, Number(r.toFixed(a))
                        }
                    }(e)).concat(this.valpha), this.model)
                },
                alpha: function(e) {
                    return arguments.length ? new c(this.color.concat(Math.max(0, Math.min(1, e))), this.model) : this.valpha
                },
                red: l("rgb", 0, f(255)),
                green: l("rgb", 1, f(255)),
                blue: l("rgb", 2, f(255)),
                hue: l(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function(e) {
                    return (e % 360 + 360) % 360
                }),
                saturationl: l("hsl", 1, f(100)),
                lightness: l("hsl", 2, f(100)),
                saturationv: l("hsv", 1, f(100)),
                value: l("hsv", 2, f(100)),
                chroma: l("hcg", 1, f(100)),
                gray: l("hcg", 2, f(100)),
                white: l("hwb", 1, f(100)),
                wblack: l("hwb", 2, f(100)),
                cyan: l("cmyk", 0, f(100)),
                magenta: l("cmyk", 1, f(100)),
                yellow: l("cmyk", 2, f(100)),
                black: l("cmyk", 3, f(100)),
                x: l("xyz", 0, f(100)),
                y: l("xyz", 1, f(100)),
                z: l("xyz", 2, f(100)),
                l: l("lab", 0, f(100)),
                a: l("lab", 1),
                b: l("lab", 2),
                keyword: function(e) {
                    return arguments.length ? new c(e) : n[this.model].keyword(this.color)
                },
                hex: function(e) {
                    return arguments.length ? new c(e) : a.to.hex(this.rgb().round().color)
                },
                rgbNumber: function() {
                    var e = this.rgb().color;
                    return (255 & e[0]) << 16 | (255 & e[1]) << 8 | 255 & e[2]
                },
                luminosity: function() {
                    for (var e = this.rgb().color, t = [], r = 0; r < e.length; r++) {
                        var a = e[r] / 255;
                        t[r] = a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
                    }
                    return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
                },
                contrast: function(e) {
                    var t = this.luminosity(),
                        r = e.luminosity();
                    return t > r ? (t + .05) / (r + .05) : (r + .05) / (t + .05)
                },
                level: function(e) {
                    var t = this.contrast(e);
                    return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : ""
                },
                isDark: function() {
                    var e = this.rgb().color;
                    return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128
                },
                isLight: function() {
                    return !this.isDark()
                },
                negate: function() {
                    for (var e = this.rgb(), t = 0; t < 3; t++) e.color[t] = 255 - e.color[t];
                    return e
                },
                lighten: function(e) {
                    var t = this.hsl();
                    return t.color[2] += t.color[2] * e, t
                },
                darken: function(e) {
                    var t = this.hsl();
                    return t.color[2] -= t.color[2] * e, t
                },
                saturate: function(e) {
                    var t = this.hsl();
                    return t.color[1] += t.color[1] * e, t
                },
                desaturate: function(e) {
                    var t = this.hsl();
                    return t.color[1] -= t.color[1] * e, t
                },
                whiten: function(e) {
                    var t = this.hwb();
                    return t.color[1] += t.color[1] * e, t
                },
                blacken: function(e) {
                    var t = this.hwb();
                    return t.color[2] += t.color[2] * e, t
                },
                grayscale: function() {
                    var e = this.rgb().color,
                        t = .3 * e[0] + .59 * e[1] + .11 * e[2];
                    return c.rgb(t, t, t)
                },
                fade: function(e) {
                    return this.alpha(this.valpha - this.valpha * e)
                },
                opaquer: function(e) {
                    return this.alpha(this.valpha + this.valpha * e)
                },
                rotate: function(e) {
                    var t = this.hsl(),
                        r = t.color[0];
                    return r = (r = (r + e) % 360) < 0 ? 360 + r : r, t.color[0] = r, t
                },
                mix: function(e, t) {
                    if (!e || !e.rgb) throw Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof e);
                    var r = e.rgb(),
                        a = this.rgb(),
                        n = void 0 === t ? .5 : t,
                        s = 2 * n - 1,
                        o = r.alpha() - a.alpha(),
                        i = ((s * o == -1 ? s : (s + o) / (1 + s * o)) + 1) / 2,
                        u = 1 - i;
                    return c.rgb(i * r.red() + u * a.red(), i * r.green() + u * a.green(), i * r.blue() + u * a.blue(), r.alpha() * n + a.alpha() * (1 - n))
                }
            }, Object.keys(n).forEach(function(e) {
                if (-1 === o.indexOf(e)) {
                    var t = n[e].channels;
                    c.prototype[e] = function() {
                        if (this.model === e) return new c(this);
                        if (arguments.length) return new c(arguments, e);
                        var r = "number" == typeof arguments[t] ? t : this.valpha;
                        return new c((function(e) {
                            return Array.isArray(e) ? e : [e]
                        })(n[this.model][e].raw(this.color)).concat(r), e)
                    }, c[e] = function(r) {
                        return "number" == typeof r && (r = b(s.call(arguments), t)), new c(r, e)
                    }
                }
            });

            function l(e, t, r) {
                return (e = Array.isArray(e) ? e : [e]).forEach(function(e) {
                        (u[e] || (u[e] = []))[t] = r
                    }), e = e[0],
                    function(a) {
                        var n;
                        return arguments.length ? (r && (a = r(a)), (n = this[e]()).color[t] = a, n) : (n = this[e]().color[t], r && (n = r(n)), n)
                    }
            }

            function f(e) {
                return function(t) {
                    return Math.max(0, Math.min(e, t))
                }
            }

            function b(e, t) {
                for (var r = 0; r < t; r++) "number" != typeof e[r] && (e[r] = 0);
                return e
            }
            e.exports = c
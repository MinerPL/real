            "use strict";
            n.r(t), n.d(t, {
                NumberFormatter: function() {
                    return s
                },
                NumberParser: function() {
                    return u
                }
            }), n("222007"), n("70102"), n("781738"), n("686130");
            let r = new Map,
                o = !1;
            try {
                o = "exceptZero" === new Intl.NumberFormat("de-DE", {
                    signDisplay: "exceptZero"
                }).resolvedOptions().signDisplay
            } catch (e) {}
            let a = !1;
            try {
                a = "unit" === new Intl.NumberFormat("de-DE", {
                    style: "unit",
                    unit: "degree"
                }).resolvedOptions().style
            } catch (e) {}
            let i = {
                degree: {
                    narrow: {
                        default: "\xb0",
                        "ja-JP": " 度",
                        "zh-TW": "度",
                        "sl-SI": " \xb0"
                    }
                }
            };
            class s {
                format(e) {
                    let t = "";
                    if (t = o || null == this.options.signDisplay ? this.numberFormatter.format(e) : function(e, t, n) {
                            if ("auto" === t) return e.format(n);
                            {
                                if ("never" === t) return e.format(Math.abs(n));
                                let r = !1;
                                if ("always" === t ? r = n > 0 || Object.is(n, 0) : "exceptZero" === t && (Object.is(n, -0) || Object.is(n, 0) ? n = Math.abs(n) : r = n > 0), !r) return e.format(n);
                                {
                                    let t = e.format(-n),
                                        r = e.format(n),
                                        o = t.replace(r, "").replace(/\u200e|\u061C/, "");
                                    return 1 != [...o].length && console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"), t.replace(r, "!!!").replace(o, "+").replace("!!!", r)
                                }
                            }
                        }(this.numberFormatter, this.options.signDisplay, e), "unit" === this.options.style && !a) {
                        var n;
                        let {
                            unit: e,
                            unitDisplay: r = "short",
                            locale: o
                        } = this.resolvedOptions(), a = null === (n = i[e]) || void 0 === n ? void 0 : n[r];
                        t += a[o] || a.default
                    }
                    return t
                }
                formatToParts(e) {
                    return this.numberFormatter.formatToParts(e)
                }
                formatRange(e, t) {
                    if ("function" == typeof this.numberFormatter.formatRange) return this.numberFormatter.formatRange(e, t);
                    if (t < e) throw RangeError("End date must be >= start date");
                    return "".concat(this.format(e), " – ").concat(this.format(t))
                }
                formatRangeToParts(e, t) {
                    if ("function" == typeof this.numberFormatter.formatRangeToParts) return this.numberFormatter.formatRangeToParts(e, t);
                    if (t < e) throw RangeError("End date must be >= start date");
                    let n = this.numberFormatter.formatToParts(e),
                        r = this.numberFormatter.formatToParts(t);
                    return [...n.map(e => ({
                        ...e,
                        source: "startRange"
                    })), {
                        type: "literal",
                        value: " – ",
                        source: "shared"
                    }, ...r.map(e => ({
                        ...e,
                        source: "endRange"
                    }))]
                }
                resolvedOptions() {
                    let e = this.numberFormatter.resolvedOptions();
                    return !o && null != this.options.signDisplay && (e = {
                        ...e,
                        signDisplay: this.options.signDisplay
                    }), !a && "unit" === this.options.style && (e = {
                        ...e,
                        style: "unit",
                        unit: this.options.unit,
                        unitDisplay: this.options.unitDisplay
                    }), e
                }
                constructor(e, t = {}) {
                    this.numberFormatter = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                numberingSystem: n
                            } = t;
                        if (n && -1 === e.indexOf("-u-nu-") && (e = "".concat(e, "-u-nu-").concat(n)), "unit" === t.style && !a) {
                            var o;
                            let {
                                unit: e,
                                unitDisplay: n = "short"
                            } = t;
                            if (!e) throw Error('unit option must be provided with style: "unit"');
                            if (!(null === (o = i[e]) || void 0 === o ? void 0 : o[n])) throw Error("Unsupported unit ".concat(e, " with unitDisplay = ").concat(n));
                            t = {
                                ...t,
                                style: "decimal"
                            }
                        }
                        let s = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
                        if (r.has(s)) return r.get(s);
                        let c = new Intl.NumberFormat(e, t);
                        return r.set(s, c), c
                    }(e, t), this.options = t
                }
            }
            let c = RegExp("^.*\\(.*\\).*$"),
                l = ["latn", "arab", "hanidec"];
            class u {
                parse(e) {
                    return p(this.locale, this.options, e).parse(e)
                }
                isValidPartialNumber(e, t, n) {
                    return p(this.locale, this.options, e).isValidPartialNumber(e, t, n)
                }
                getNumberingSystem(e) {
                    return p(this.locale, this.options, e).options.numberingSystem
                }
                constructor(e, t = {}) {
                    this.locale = e, this.options = t
                }
            }
            let d = new Map;

            function p(e, t, n) {
                let r = f(e, t);
                if (!e.includes("-nu-") && !r.isValidPartialNumber(n)) {
                    for (let o of l)
                        if (o !== r.options.numberingSystem) {
                            let r = f(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + o, t);
                            if (r.isValidPartialNumber(n)) return r
                        }
                }
                return r
            }

            function f(e, t) {
                let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : ""),
                    r = d.get(n);
                return !r && (r = new m(e, t), d.set(n, r)), r
            }
            class m {
                parse(e) {
                    let t = this.sanitize(e),
                        n = (t = g(t, this.symbols.group, "").replace(this.symbols.decimal, ".").replace(this.symbols.minusSign, "-").replace(this.symbols.numeral, this.symbols.index)) ? +t : NaN;
                    if (isNaN(n)) return NaN;
                    if ("accounting" === this.options.currencySign && c.test(e) && (n *= -1), "percent" === this.options.style) {
                        var r;
                        n /= 100, n = +n.toFixed((null !== (r = this.options.maximumFractionDigits) && void 0 !== r ? r : 0) + 2)
                    }
                    return n
                }
                sanitize(e) {
                    return e = (e = e.replace(this.symbols.literals, "")).replace("-", this.symbols.minusSign), "arab" === this.options.numberingSystem && (e = g(e = (e = e.replace(",", this.symbols.decimal)).replace(String.fromCharCode(1548), this.symbols.decimal), ".", this.symbols.group)), "fr-FR" === this.options.locale && (e = g(e, ".", String.fromCharCode(8239))), e
                }
                isValidPartialNumber(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0;
                    return (e = this.sanitize(e)).startsWith(this.symbols.minusSign) && t < 0 ? e = e.slice(this.symbols.minusSign.length) : this.symbols.plusSign && e.startsWith(this.symbols.plusSign) && n > 0 && (e = e.slice(this.symbols.plusSign.length)), !e.startsWith(this.symbols.group) && 0 === (e = g(e, this.symbols.group, "").replace(this.symbols.numeral, "").replace(this.symbols.decimal, "")).length
                }
                constructor(e, t = {}) {
                    this.formatter = new Intl.NumberFormat(e, t), this.options = this.formatter.resolvedOptions(), this.symbols = function(e, t, n) {
                        var r, o, a, i, s;
                        let c = e.formatToParts(-10000.111),
                            l = e.formatToParts(10000.111),
                            u = e.formatToParts(1),
                            d = null !== (s = null === (r = c.find(e => "minusSign" === e.type)) || void 0 === r ? void 0 : r.value) && void 0 !== s ? s : "-",
                            p = null === (o = l.find(e => "plusSign" === e.type)) || void 0 === o ? void 0 : o.value;
                        !p && ((null == n ? void 0 : n.signDisplay) === "exceptZero" || (null == n ? void 0 : n.signDisplay) === "always") && (p = "+");
                        let f = null === (a = c.find(e => "decimal" === e.type)) || void 0 === a ? void 0 : a.value,
                            m = null === (i = c.find(e => "group" === e.type)) || void 0 === i ? void 0 : i.value,
                            g = c.filter(e => !h.has(e.type)).map(e => v(e.value)),
                            y = u.filter(e => !h.has(e.type)).map(e => v(e.value)),
                            b = [...new Set([...y, ...g])].sort((e, t) => t.length - e.length),
                            x = 0 === b.length ? RegExp("[\\p{White_Space}]", "gu") : RegExp("".concat(b.join("|"), "|[\\p{White_Space}]"), "gu"),
                            S = [...new Intl.NumberFormat(t.locale, {
                                useGrouping: !1
                            }).format(9876543210)].reverse(),
                            w = new Map(S.map((e, t) => [e, t])),
                            D = RegExp("[".concat(S.join(""), "]"), "g");
                        return {
                            minusSign: d,
                            plusSign: p,
                            decimal: f,
                            group: m,
                            literals: x,
                            numeral: D,
                            index: e => String(w.get(e))
                        }
                    }(this.formatter, this.options, t)
                }
            }
            let h = new Set(["decimal", "fraction", "integer", "minusSign", "plusSign", "group"]);

            function g(e, t, n) {
                return e.replaceAll ? e.replaceAll(t, n) : e.split(t).join(n)
            }

            function v(e) {
                return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
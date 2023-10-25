(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["36153"], {
        486611: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return s
                }
            });
            var u = e("813086"),
                r = e("28926");
            class o {
                start() {
                    return new Promise(t => {
                        this.animation.start(() => {
                            t()
                        })
                    })
                }
                stop() {
                    this.animation.stop()
                }
                constructor(t) {
                    (0, u._)(this, "animation", void 0), this.animation = t
                }
            }
            class i {
                _map(t) {
                    return this.animations.map(t)
                }
                start() {
                    return new Promise(t => Promise.all(this._map(t => t.start())).then(() => t()))
                }
                stop() {
                    this._map(t => t.stop())
                }
                constructor(t) {
                    (0, u._)(this, "animations", void 0), this.animations = t
                }
            }
            class a {
                async start() {
                    for (let t of (this.stopped = !1, this.animations)) {
                        if (this.stopped) return;
                        await t.start()
                    }
                }
                stop() {
                    this.stopped = !0, this.animations.map(t => t.stop())
                }
                constructor(t) {
                    (0, u._)(this, "animations", void 0), (0, u._)(this, "stopped", !1), this.animations = t
                }
            }

            function f(t, n, e) {
                let u = e(t, {
                    ...n
                });
                return new o(u)
            }
            var s = {
                ...r.default,
                timing: function(t, n) {
                    return f(t, n, r.default.timing)
                },
                spring: function(t, n) {
                    return f(t, n, r.default.spring)
                },
                parallel: function(t) {
                    return new i(t)
                },
                sequence: function(t) {
                    return new a(t)
                }
            }
        },
        787595: function(t, n, e) {
            t.exports = function(t, n, e, u) {
                var r = -1,
                    o = null == t ? 0 : t.length;
                for (u && o && (e = t[++r]); ++r < o;) e = n(e, t[r], r, t);
                return e
            }
        },
        805212: function(t, n, e) {
            t.exports = function(t) {
                return t.split("")
            }
        },
        922628: function(t, n, e) {
            var u = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
            t.exports = function(t) {
                return t.match(u) || []
            }
        },
        594078: function(t, n, e) {
            t.exports = function(t) {
                return function(n) {
                    return null == t ? void 0 : t[n]
                }
            }
        },
        953276: function(t, n, e) {
            var u = e("749064");
            t.exports = function(t, n, e) {
                var r = t.length;
                return e = void 0 === e ? r : e, !n && e >= r ? t : u(t, n, e)
            }
        },
        175145: function(t, n, e) {
            var u = e("953276"),
                r = e("981945"),
                o = e("393208"),
                i = e("497262");
            t.exports = function(t) {
                return function(n) {
                    var e = r(n = i(n)) ? o(n) : void 0,
                        a = e ? e[0] : n.charAt(0),
                        f = e ? u(e, 1).join("") : n.slice(1);
                    return a[t]() + f
                }
            }
        },
        41350: function(t, n, e) {
            var u = e("787595"),
                r = e("202625"),
                o = e("796987"),
                i = RegExp("['’]", "g");
            t.exports = function(t) {
                return function(n) {
                    return u(o(r(n).replace(i, "")), t, "")
                }
            }
        },
        310714: function(t, n, e) {
            var u = e("594078"),
                r = u({
                    À: "A",
                    Á: "A",
                    Â: "A",
                    Ã: "A",
                    Ä: "A",
                    Å: "A",
                    à: "a",
                    á: "a",
                    â: "a",
                    ã: "a",
                    ä: "a",
                    å: "a",
                    Ç: "C",
                    ç: "c",
                    Ð: "D",
                    ð: "d",
                    È: "E",
                    É: "E",
                    Ê: "E",
                    Ë: "E",
                    è: "e",
                    é: "e",
                    ê: "e",
                    ë: "e",
                    Ì: "I",
                    Í: "I",
                    Î: "I",
                    Ï: "I",
                    ì: "i",
                    í: "i",
                    î: "i",
                    ï: "i",
                    Ñ: "N",
                    ñ: "n",
                    Ò: "O",
                    Ó: "O",
                    Ô: "O",
                    Õ: "O",
                    Ö: "O",
                    Ø: "O",
                    ò: "o",
                    ó: "o",
                    ô: "o",
                    õ: "o",
                    ö: "o",
                    ø: "o",
                    Ù: "U",
                    Ú: "U",
                    Û: "U",
                    Ü: "U",
                    ù: "u",
                    ú: "u",
                    û: "u",
                    ü: "u",
                    Ý: "Y",
                    ý: "y",
                    ÿ: "y",
                    Æ: "Ae",
                    æ: "ae",
                    Þ: "Th",
                    þ: "th",
                    ß: "ss",
                    Ā: "A",
                    Ă: "A",
                    Ą: "A",
                    ā: "a",
                    ă: "a",
                    ą: "a",
                    Ć: "C",
                    Ĉ: "C",
                    Ċ: "C",
                    Č: "C",
                    ć: "c",
                    ĉ: "c",
                    ċ: "c",
                    č: "c",
                    Ď: "D",
                    Đ: "D",
                    ď: "d",
                    đ: "d",
                    Ē: "E",
                    Ĕ: "E",
                    Ė: "E",
                    Ę: "E",
                    Ě: "E",
                    ē: "e",
                    ĕ: "e",
                    ė: "e",
                    ę: "e",
                    ě: "e",
                    Ĝ: "G",
                    Ğ: "G",
                    Ġ: "G",
                    Ģ: "G",
                    ĝ: "g",
                    ğ: "g",
                    ġ: "g",
                    ģ: "g",
                    Ĥ: "H",
                    Ħ: "H",
                    ĥ: "h",
                    ħ: "h",
                    Ĩ: "I",
                    Ī: "I",
                    Ĭ: "I",
                    Į: "I",
                    İ: "I",
                    ĩ: "i",
                    ī: "i",
                    ĭ: "i",
                    į: "i",
                    ı: "i",
                    Ĵ: "J",
                    ĵ: "j",
                    Ķ: "K",
                    ķ: "k",
                    ĸ: "k",
                    Ĺ: "L",
                    Ļ: "L",
                    Ľ: "L",
                    Ŀ: "L",
                    Ł: "L",
                    ĺ: "l",
                    ļ: "l",
                    ľ: "l",
                    ŀ: "l",
                    ł: "l",
                    Ń: "N",
                    Ņ: "N",
                    Ň: "N",
                    Ŋ: "N",
                    ń: "n",
                    ņ: "n",
                    ň: "n",
                    ŋ: "n",
                    Ō: "O",
                    Ŏ: "O",
                    Ő: "O",
                    ō: "o",
                    ŏ: "o",
                    ő: "o",
                    Ŕ: "R",
                    Ŗ: "R",
                    Ř: "R",
                    ŕ: "r",
                    ŗ: "r",
                    ř: "r",
                    Ś: "S",
                    Ŝ: "S",
                    Ş: "S",
                    Š: "S",
                    ś: "s",
                    ŝ: "s",
                    ş: "s",
                    š: "s",
                    Ţ: "T",
                    Ť: "T",
                    Ŧ: "T",
                    ţ: "t",
                    ť: "t",
                    ŧ: "t",
                    Ũ: "U",
                    Ū: "U",
                    Ŭ: "U",
                    Ů: "U",
                    Ű: "U",
                    Ų: "U",
                    ũ: "u",
                    ū: "u",
                    ŭ: "u",
                    ů: "u",
                    ű: "u",
                    ų: "u",
                    Ŵ: "W",
                    ŵ: "w",
                    Ŷ: "Y",
                    ŷ: "y",
                    Ÿ: "Y",
                    Ź: "Z",
                    Ż: "Z",
                    Ž: "Z",
                    ź: "z",
                    ż: "z",
                    ž: "z",
                    Ĳ: "IJ",
                    ĳ: "ij",
                    Œ: "Oe",
                    œ: "oe",
                    ŉ: "'n",
                    ſ: "s"
                });
            t.exports = r
        },
        981945: function(t, n, e) {
            var u = RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
            t.exports = function(t) {
                return u.test(t)
            }
        },
        924299: function(t, n, e) {
            var u = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
            t.exports = function(t) {
                return u.test(t)
            }
        },
        393208: function(t, n, e) {
            var u = e("805212"),
                r = e("981945"),
                o = e("900106");
            t.exports = function(t) {
                return r(t) ? o(t) : u(t)
            }
        },
        900106: function(t, n, e) {
            var u = "\ud800-\udfff",
                r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                o = "\ud83c[\udffb-\udfff]",
                i = "[^" + u + "]",
                a = "(?:\ud83c[\udde6-\uddff]){2}",
                f = "[\ud800-\udbff][\udc00-\udfff]",
                s = "(?:" + r + "|" + o + ")?",
                c = "[\\ufe0e\\ufe0f]?",
                d = "(?:\\u200d(?:" + [i, a, f].join("|") + ")" + c + s + ")*",
                p = RegExp(o + "(?=" + o + ")|" + ("(?:" + [i + r + "?", r, a, f, "[" + u + "]"].join("|") + ")") + (c + s + d), "g");
            t.exports = function(t) {
                return t.match(p) || []
            }
        },
        111318: function(t, n, e) {
            var u = "\ud800-\udfff",
                r = "\\u2700-\\u27bf",
                o = "a-z\\xdf-\\xf6\\xf8-\\xff",
                i = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                a = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                f = "['’]",
                s = "[" + a + "]",
                c = "[" + o + "]",
                d = "[^" + u + a + "\\d+" + r + o + i + "]",
                p = "(?:\ud83c[\udde6-\uddff]){2}",
                l = "[\ud800-\udbff][\udc00-\udfff]",
                m = "[" + i + "]",
                x = "(?:" + c + "|" + d + ")",
                h = "(?:" + f + "(?:d|ll|m|re|s|t|ve))?",
                g = "(?:" + f + "(?:D|LL|M|RE|S|T|VE))?",
                v = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",
                b = "[\\ufe0e\\ufe0f]?",
                E = "(?:\\u200d(?:" + ["[^" + u + "]", p, l].join("|") + ")" + b + v + ")*",
                A = "(?:" + ["[" + r + "]", p, l].join("|") + ")" + (b + v + E),
                I = RegExp([m + "?" + c + "+" + h + "(?=" + [s, m, "$"].join("|") + ")", "(?:" + m + "|" + d + ")+" + g + "(?=" + [s, m + x, "$"].join("|") + ")", m + "?" + x + "+" + h, m + "+" + g, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", A].join("|"), "g");
            t.exports = function(t) {
                return t.match(I) || []
            }
        },
        275023: function(t, n, e) {
            var u = e("990076"),
                r = e("41350")(function(t, n, e) {
                    return n = n.toLowerCase(), t + (e ? u(n) : n)
                });
            t.exports = r
        },
        990076: function(t, n, e) {
            var u = e("497262"),
                r = e("1718");
            t.exports = function(t) {
                return r(u(t).toLowerCase())
            }
        },
        202625: function(t, n, e) {
            var u = e("310714"),
                r = e("497262"),
                o = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                i = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
            t.exports = function(t) {
                return (t = r(t)) && t.replace(o, u).replace(i, "")
            }
        },
        850865: function(t, n, e) {
            var u = e("235446");
            t.exports = function(t, n) {
                return u(t, n)
            }
        },
        1718: function(t, n, e) {
            var u = e("175145")("toUpperCase");
            t.exports = u
        },
        796987: function(t, n, e) {
            var u = e("922628"),
                r = e("924299"),
                o = e("497262"),
                i = e("111318");
            t.exports = function(t, n, e) {
                return (t = o(t), void 0 === (n = e ? void 0 : n)) ? r(t) ? i(t) : u(t) : t.match(n) || []
            }
        },
        837910: function(t, n, e) {
            var u = e("840921");
            ! function(t, n) {
                "use strict";
                if (!t.setImmediate) {
                    var e, r = 1,
                        o = {},
                        i = !1,
                        a = t.document,
                        f = Object.getPrototypeOf && Object.getPrototypeOf(t);
                    f = f && f.setTimeout ? f : t, "[object process]" === ({}).toString.call(t.process) ? function() {
                        e = function(t) {
                            u.nextTick(function() {
                                c(t)
                            })
                        }
                    }() : function() {
                        if (t.postMessage && !t.importScripts) {
                            var n = !0,
                                e = t.onmessage;
                            return t.onmessage = function() {
                                n = !1
                            }, t.postMessage("", "*"), t.onmessage = e, n
                        }
                    }() ? function() {
                        var n = "setImmediate$" + Math.random() + "$",
                            u = function(e) {
                                e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(n) && c(+e.data.slice(n.length))
                            };
                        t.addEventListener ? t.addEventListener("message", u, !1) : t.attachEvent("onmessage", u), e = function(e) {
                            t.postMessage(n + e, "*")
                        }
                    }() : t.MessageChannel ? function() {
                        var t = new MessageChannel;
                        t.port1.onmessage = function(t) {
                            c(t.data)
                        }, e = function(n) {
                            t.port2.postMessage(n)
                        }
                    }() : a && "onreadystatechange" in a.createElement("script") ? function() {
                        var t = a.documentElement;
                        e = function(n) {
                            var e = a.createElement("script");
                            e.onreadystatechange = function() {
                                c(n), e.onreadystatechange = null, t.removeChild(e), e = null
                            }, t.appendChild(e)
                        }
                    }() : function() {
                        e = function(t) {
                            setTimeout(c, 0, t)
                        }
                    }(), f.setImmediate = function(t) {
                        "function" != typeof t && (t = Function("" + t));
                        for (var n = Array(arguments.length - 1), u = 0; u < n.length; u++) n[u] = arguments[u + 1];
                        var i = {
                            callback: t,
                            args: n
                        };
                        return o[r] = i, e(r), r++
                    }, f.clearImmediate = s
                }

                function s(t) {
                    delete o[t]
                }

                function c(t) {
                    if (i) setTimeout(c, 0, t);
                    else {
                        var n = o[t];
                        if (n) {
                            i = !0;
                            try {
                                ! function(t) {
                                    var n = t.callback,
                                        e = t.args;
                                    switch (e.length) {
                                        case 0:
                                            n();
                                            break;
                                        case 1:
                                            n(e[0]);
                                            break;
                                        case 2:
                                            n(e[0], e[1]);
                                            break;
                                        case 3:
                                            n(e[0], e[1], e[2]);
                                            break;
                                        default:
                                            n.apply(void 0, e)
                                    }
                                }(n)
                            } finally {
                                s(t), i = !1
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === e.g ? this : e.g : self)
        },
        922359: function(t, n, e) {
            "use strict";
            var u, r;
            e.r(n), e.d(n, {
                TeamMemberRoles: function() {
                    return u
                }
            }), (r = u || (u = {})).ADMIN = "admin", r.DEVELOPER = "developer", r.READ_ONLY = "read_only"
        },
        336327: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                truncateAndLocalizeNumber: function() {
                    return r
                }
            });
            var u = e("753595");
            let r = (t, n) => {
                let e = Math.round(10 * t) / 10;
                if (t < 1e6) return new Intl.NumberFormat(n, {
                    maximumFractionDigits: e % 1 == 0 ? 0 : 1
                }).format(t);
                let r = Math.round(t / 1e6 * 10) / 10,
                    o = new Intl.NumberFormat(n, {
                        maximumFractionDigits: r % 1 == 0 ? 0 : 1
                    }).format(t / 1e6);
                return u.default.Messages.NumberAbbreviations.MILLION.format({
                    num: o
                })
            }
        }
    }
]);
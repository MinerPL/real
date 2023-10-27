(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["4872"], {
        486611: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return u
                }
            });
            var n = d("813086"),
                r = d("28926");
            class i {
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
                    (0, n._)(this, "animation", void 0), this.animation = t
                }
            }
            class a {
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
                    (0, n._)(this, "animations", void 0), this.animations = t
                }
            }
            class o {
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
                    (0, n._)(this, "animations", void 0), (0, n._)(this, "stopped", !1), this.animations = t
                }
            }

            function $(t, e, d) {
                let n = d(t, {
                    ...e
                });
                return new i(n)
            }
            var u = {
                ...r.default,
                timing: function(t, e) {
                    return $(t, e, r.default.timing)
                },
                spring: function(t, e) {
                    return $(t, e, r.default.spring)
                },
                parallel: function(t) {
                    return new a(t)
                },
                sequence: function(t) {
                    return new o(t)
                }
            }
        },
        966802: function(t, e, d) {
            t = d.nmd(t), ! function() {
                var e = function(t) {
                    "use strict";
                    t = t || {};
                    var e, d, n, r, i, a, o, $, u, s, l, c, f, h, p, m, y = {
                        bgColor: "#d00",
                        textColor: "#fff",
                        fontFamily: "sans-serif",
                        fontStyle: "bold",
                        type: "circle",
                        position: "down",
                        animation: "slide",
                        elementId: !1,
                        dataUrl: !1,
                        win: window
                    };
                    (f = {}).ff = "undefined" != typeof InstallTrigger, f.chrome = !!window.chrome, f.opera = !!window.opera || navigator.userAgent.indexOf("Opera") >= 0, f.ie = !1, f.safari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0, f.supported = f.chrome || f.ff || f.opera;
                    var v = [];
                    l = function() {}, $ = c = !1;
                    var g = {};
                    g.ready = function() {
                        $ = !0, g.reset(), l()
                    }, g.reset = function() {
                        $ && (v = [], u = !1, s = !1, a.clearRect(0, 0, r, n), a.drawImage(o, 0, 0, r, n), x.setIcon(i), window.clearTimeout(h), window.clearTimeout(p))
                    }, g.start = function() {
                        if ($ && !s) {
                            var t = function() {
                                u = v[0], s = !1, v.length > 0 && (v.shift(), g.start())
                            };
                            if (v.length > 0) {
                                s = !0;
                                var d = function() {
                                    ["type", "animation", "bgColor", "textColor", "fontFamily", "fontStyle"].forEach(function(t) {
                                        t in v[0].options && (e[t] = v[0].options[t])
                                    }), E.run(v[0].options, function() {
                                        t()
                                    }, !1)
                                };
                                u ? E.run(u.options, function() {
                                    d()
                                }, !0) : d()
                            }
                        }
                    };
                    var C = {},
                        _ = function(t) {
                            return t.n = "number" == typeof t.n ? Math.abs(0 | t.n) : t.n, t.x = r * t.x, t.y = n * t.y, t.w = r * t.w, t.h = n * t.h, t.len = ("" + t.n).length, t
                        };
                    C.circle = function(t) {
                        t = _(t);
                        var d = !1;
                        2 === t.len ? (t.x = t.x - .4 * t.w, t.w = 1.4 * t.w, d = !0) : t.len >= 3 && (t.x = t.x - .65 * t.w, t.w = 1.65 * t.w, d = !0), a.clearRect(0, 0, r, n), a.drawImage(o, 0, 0, r, n), a.beginPath(), a.font = e.fontStyle + " " + Math.floor(t.h * (t.n > 99 ? .85 : 1)) + "px " + e.fontFamily, a.textAlign = "center", d ? (a.moveTo(t.x + t.w / 2, t.y), a.lineTo(t.x + t.w - t.h / 2, t.y), a.quadraticCurveTo(t.x + t.w, t.y, t.x + t.w, t.y + t.h / 2), a.lineTo(t.x + t.w, t.y + t.h - t.h / 2), a.quadraticCurveTo(t.x + t.w, t.y + t.h, t.x + t.w - t.h / 2, t.y + t.h), a.lineTo(t.x + t.h / 2, t.y + t.h), a.quadraticCurveTo(t.x, t.y + t.h, t.x, t.y + t.h - t.h / 2), a.lineTo(t.x, t.y + t.h / 2), a.quadraticCurveTo(t.x, t.y, t.x + t.h / 2, t.y)) : a.arc(t.x + t.w / 2, t.y + t.h / 2, t.h / 2, 0, 2 * Math.PI), a.fillStyle = "rgba(" + e.bgColor.r + "," + e.bgColor.g + "," + e.bgColor.b + "," + t.o + ")", a.fill(), a.closePath(), a.beginPath(), a.stroke(), a.fillStyle = "rgba(" + e.textColor.r + "," + e.textColor.g + "," + e.textColor.b + "," + t.o + ")", "number" == typeof t.n && t.n > 999 ? a.fillText((t.n > 9999 ? 9 : Math.floor(t.n / 1e3)) + "k+", Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - .2 * t.h)) : a.fillText(t.n, Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - .15 * t.h)), a.closePath()
                    }, C.rectangle = function(t) {
                        t = _(t);
                        var d = !1;
                        2 === t.len ? (t.x = t.x - .4 * t.w, t.w = 1.4 * t.w) : t.len >= 3 && (t.x = t.x - .65 * t.w, t.w = 1.65 * t.w), a.clearRect(0, 0, r, n), a.drawImage(o, 0, 0, r, n), a.beginPath(), a.font = e.fontStyle + " " + Math.floor(t.h * (t.n > 99 ? .9 : 1)) + "px " + e.fontFamily, a.textAlign = "center", a.fillStyle = "rgba(" + e.bgColor.r + "," + e.bgColor.g + "," + e.bgColor.b + "," + t.o + ")", a.fillRect(t.x, t.y, t.w, t.h), a.fillStyle = "rgba(" + e.textColor.r + "," + e.textColor.g + "," + e.textColor.b + "," + t.o + ")", "number" == typeof t.n && t.n > 999 ? a.fillText((t.n > 9999 ? 9 : Math.floor(t.n / 1e3)) + "k+", Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - .2 * t.h)) : a.fillText(t.n, Math.floor(t.x + t.w / 2), Math.floor(t.y + t.h - .15 * t.h)), a.closePath()
                    };

                    function b(t) {
                        if (t.paused || t.ended || c) return !1;
                        try {
                            a.clearRect(0, 0, r, n), a.drawImage(t, 0, 0, r, n)
                        } catch (t) {}
                        p = setTimeout(function() {
                            b(t)
                        }, E.duration), x.setIcon(i)
                    }
                    var x = {};

                    function N(t) {
                        t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, d, n) {
                            return e + e + d + d + n + n
                        });
                        var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                        return !!e && {
                            r: parseInt(e[1], 16),
                            g: parseInt(e[2], 16),
                            b: parseInt(e[3], 16)
                        }
                    }

                    function I(t, e) {
                        var d, n = {};
                        for (d in t) n[d] = t[d];
                        for (d in e) n[d] = e[d];
                        return n
                    }
                    x.getIcon = function() {
                        var t = !1;
                        return e.element ? t = e.element : e.elementId ? (t = m.getElementById(e.elementId)).setAttribute("href", t.getAttribute("src")) : !1 === (t = function() {
                            for (var t = m.getElementsByTagName("head")[0].getElementsByTagName("link"), e = t.length, d = e - 1; d >= 0; d--)
                                if (/(^|\s)icon(\s|$)/i.test(t[d].getAttribute("rel"))) return t[d];
                            return !1
                        }()) && ((t = m.createElement("link")).setAttribute("rel", "icon"), m.getElementsByTagName("head")[0].appendChild(t)), t.setAttribute("type", "image/png"), t
                    }, x.setIcon = function(t) {
                        var n = t.toDataURL("image/png");
                        if (e.dataUrl && e.dataUrl(n), e.element) e.element.setAttribute("href", n), e.element.setAttribute("src", n);
                        else if (e.elementId) {
                            var r = m.getElementById(e.elementId);
                            r.setAttribute("href", n), r.setAttribute("src", n)
                        } else if (f.ff || f.opera) {
                            var i = d;
                            d = m.createElement("link"), f.opera && d.setAttribute("rel", "icon"), d.setAttribute("rel", "icon"), d.setAttribute("type", "image/png"), m.getElementsByTagName("head")[0].appendChild(d), d.setAttribute("href", n), i.parentNode && i.parentNode.removeChild(i)
                        } else d.setAttribute("href", n)
                    };
                    var E = {};
                    return E.duration = 40, E.types = {}, E.types.fade = [{
                        x: .4,
                        y: .4,
                        w: .6,
                        h: .6,
                        o: 0
                    }, {
                        x: .4,
                        y: .4,
                        w: .6,
                        h: .6,
                        o: .1
                    }, {
                        x: .4,
                        y: .4,
                        w: .6,
                        h: .6,
                        o: .2
                    }, {
                        x: .4,
                        y: .4,
                        w: .6,
                        h: .6,
                        o: .3
                    }, {
                        x: .4,
                        y: .4,
                        w: .6,
                        h: .6,
                        o: .4
                    }, {
                        x: .4,
                        y: .4,
                        w: .6,
                        h: .6,
                        o: .5
                    }, {
                        x: .4,
                        y: .4,
                        w: .6,
                        h: .6,
                        o: .6
                    }, {
                        x: .4,
                        y: .4,
                        w: .6,
                        h: .6,
                        o: .7
                    }, {
                        x: .4,
                        y: .4,
                        w: .6,
                        h: .6,
                        o: .8
                    }, {
                        x: .4,
                        y: .4,
                        w: .6,
                        h: .6,
                        o: .9
                    }, {
                        x: .4,
                        y: .4,
                        w: .6,
                        h: .6,
                        o: 1
                    }], E.types.none = [{
                        x: .4,
                        y: .4,
                        w: .6,
                        h: .6,
                        o: 1
                    }], E.types.pop = [{
                        x: 1,
                        y: 1,
                        w: 0,
                        h: 0,
                        o: 1
                    }, {
                        x: .9,
                        y: .9,
                        w: .1,
                        h: .1,
                        o: 1
                    }, {
                        x: .8,
                        y: .8,
                        w: .2,
                        h: .2,
                        o: 1
                    }, {
                        x: .7,
                        y: .7,
                        w: .3,
                        h: .3,
                        o: 1
                    }, {
                        x: .6,
                        y: .6,
                        w: .4,
                        h: .4,
                        o: 1
                    }, {
                        x: .5,
                        y: .5,
                        w: .5,
                        h: .5,
                        o: 1
                    }, {
                        x: .4,
                        y: .4,
                        w: .6,
                        h: .6,
                        o: 1
                    }], E.types.popFade = [{
                        x: .75,
                        y: .75,
                        w: 0,
                        h: 0,
                        o: 0
                    }, {
                        x: .65,
                        y: .65,
                        w: .1,
                        h: .1,
                        o: .2
                    }, {
                        x: .6,
                        y: .6,
                        w: .2,
                        h: .2,
                        o: .4
                    }, {
                        x: .55,
                        y: .55,
                        w: .3,
                        h: .3,
                        o: .6
                    }, {
                        x: .5,
                        y: .5,
                        w: .4,
                        h: .4,
                        o: .8
                    }, {
                        x: .45,
                        y: .45,
                        w: .5,
                        h: .5,
                        o: .9
                    }, {
                        x: .4,
                        y: .4,
                        w: .6,
                        h: .6,
                        o: 1
                    }], E.types.slide = [{
                        x: .4,
                        y: 1,
                        w: .6,
                        h: .6,
                        o: 1
                    }, {
                        x: .4,
                        y: .9,
                        w: .6,
                        h: .6,
                        o: 1
                    }, {
                        x: .4,
                        y: .9,
                        w: .6,
                        h: .6,
                        o: 1
                    }, {
                        x: .4,
                        y: .8,
                        w: .6,
                        h: .6,
                        o: 1
                    }, {
                        x: .4,
                        y: .7,
                        w: .6,
                        h: .6,
                        o: 1
                    }, {
                        x: .4,
                        y: .6,
                        w: .6,
                        h: .6,
                        o: 1
                    }, {
                        x: .4,
                        y: .5,
                        w: .6,
                        h: .6,
                        o: 1
                    }, {
                        x: .4,
                        y: .4,
                        w: .6,
                        h: .6,
                        o: 1
                    }], E.run = function(t, d, n, r) {
                        var a = E.types[m.hidden || m.msHidden || m.webkitHidden || m.mozHidden ? "none" : e.animation];
                        if (r = !0 === n ? void 0 !== r ? r : a.length - 1 : void 0 !== r ? r : 0, d = d || function() {}, r < a.length && r >= 0) C[e.type](I(t, a[r])), h = setTimeout(function() {
                            n ? r -= 1 : r += 1, E.run(t, d, n, r)
                        }, E.duration), x.setIcon(i);
                        else {
                            d();
                            return
                        }
                    }, ! function() {
                        (e = I(y, t)).bgColor = N(e.bgColor), e.textColor = N(e.textColor), e.position = e.position.toLowerCase(), e.animation = E.types["" + e.animation] ? e.animation : y.animation, m = e.win.document;
                        var $ = e.position.indexOf("up") > -1,
                            u = e.position.indexOf("left") > -1;
                        if ($ || u)
                            for (var s = 0; s < E.types["" + e.animation].length; s++) {
                                var l = E.types["" + e.animation][s];
                                $ && (l.y < .6 ? l.y = l.y - .4 : l.y = l.y - 2 * l.y + (1 - l.w)), u && (l.x < .6 ? l.x = l.x - .4 : l.x = l.x - 2 * l.x + (1 - l.h)), E.types["" + e.animation][s] = l
                            }
                        e.type = C["" + e.type] ? e.type : y.type, d = x.getIcon(), i = document.createElement("canvas"), o = document.createElement("img"), d.hasAttribute("href") ? (o.setAttribute("crossOrigin", "anonymous"), o.onload = function() {
                            n = o.height > 0 ? o.height : 32, r = o.width > 0 ? o.width : 32, i.height = n, i.width = r, a = i.getContext("2d"), g.ready()
                        }, o.setAttribute("src", d.getAttribute("href"))) : (o.onload = function() {
                            n = 32, r = 32, o.height = n, o.width = r, i.height = n, i.width = r, a = i.getContext("2d"), g.ready()
                        }, o.setAttribute("src", ""))
                    }(), {
                        badge: function(t, e) {
                            e = ("string" == typeof e ? {
                                animation: e
                            } : e) || {}, l = function() {
                                try {
                                    if ("number" == typeof t ? t > 0 : "" !== t) {
                                        var d = {
                                            type: "badge",
                                            options: {
                                                n: t
                                            }
                                        };
                                        if ("animation" in e && E.types["" + e.animation] && (d.options.animation = "" + e.animation), "type" in e && C["" + e.type] && (d.options.type = "" + e.type), ["bgColor", "textColor"].forEach(function(t) {
                                                t in e && (d.options[t] = N(e[t]))
                                            }), ["fontStyle", "fontFamily"].forEach(function(t) {
                                                t in e && (d.options[t] = e[t])
                                            }), v.push(d), v.length > 100) throw Error("Too many badges requests in queue.");
                                        g.start()
                                    } else g.reset()
                                } catch (t) {
                                    throw Error("Error setting badge. Message: " + t.message)
                                }
                            }, $ && l()
                        },
                        video: function(t) {
                            l = function() {
                                try {
                                    if ("stop" === t) {
                                        c = !0, g.reset(), c = !1;
                                        return
                                    }
                                    t.addEventListener("play", function() {
                                        b(this)
                                    }, !1)
                                } catch (t) {
                                    throw Error("Error setting video. Message: " + t.message)
                                }
                            }, $ && l()
                        },
                        image: function(t) {
                            l = function() {
                                try {
                                    var e = t.width,
                                        d = t.height,
                                        o = document.createElement("img"),
                                        $ = e / r < d / n ? e / r : d / n;
                                    o.setAttribute("crossOrigin", "anonymous"), o.onload = function() {
                                        a.clearRect(0, 0, r, n), a.drawImage(o, 0, 0, r, n), x.setIcon(i)
                                    }, o.setAttribute("src", t.getAttribute("src")), o.height = d / $, o.width = e / $
                                } catch (t) {
                                    throw Error("Error setting image. Message: " + t.message)
                                }
                            }, $ && l()
                        },
                        webcam: function(t) {
                            if ((!window.URL || !window.URL.createObjectURL) && (window.URL = window.URL || {}, window.URL.createObjectURL = function(t) {
                                    return t
                                }), f.supported) {
                                var e = !1;
                                navigator.getUserMedia = navigator.getUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia, l = function() {
                                    try {
                                        if ("stop" === t) {
                                            c = !0, g.reset(), c = !1;
                                            return
                                        }(e = document.createElement("video")).width = r, e.height = n, navigator.getUserMedia({
                                            video: !0,
                                            audio: !1
                                        }, function(t) {
                                            e.src = URL.createObjectURL(t), e.play(), b(e)
                                        }, function() {})
                                    } catch (t) {
                                        throw Error("Error setting webcam. Message: " + t.message)
                                    }
                                }, $ && l()
                            }
                        },
                        reset: g.reset,
                        browser: {
                            supported: f.supported
                        }
                    }
                };
                "undefined" != typeof define && define.amd ? define([], function() {
                    return e
                }) : void 0 !== t && t.exports ? t.exports = e : this.Favico = e
            }()
        },
        242731: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return v
                }
            });
            var n = d("902090"),
                r = d("14440"),
                i = d("816637"),
                a = d("612926"),
                o = d("452234"),
                $ = d("60947"),
                u = d("562230"),
                s = d("268704"),
                l = function() {
                    function t(t, e) {
                        for (var d = 0; d < e.length; d++) {
                            var n = e[d];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, d, n) {
                        return d && t(e.prototype, d), n && t(e, n), e
                    }
                }(),
                c = C("9", 15),
                f = /x/,
                h = function() {
                    return /\[([^\[\]])*\]/g
                },
                p = function() {
                    return /\d(?=[^,}][^,}])/g
                },
                m = RegExp("^[" + i.VALID_PUNCTUATION + "]*(\\$\\d[" + i.VALID_PUNCTUATION + "]*)+$"),
                y = RegExp("^" + ("[" + i.PLUS_CHARS + "]{0,1}[" + i.VALID_PUNCTUATION + i.VALID_DIGITS + "]*") + "$", "i"),
                v = function() {
                    function t(e, d) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, t), this.options = {}, this.metadata = new n.default(d), e && this.metadata.hasCountry(e) && (this.defaultCountry = e), this.reset()
                    }
                    return l(t, [{
                        key: "input",
                        value: function(t) {
                            var e = (0, o.extract_formatted_phone_number)(t) || "";
                            return (!e && t && t.indexOf("+") >= 0 && (e = "+"), y.test(e)) ? this.processInput((0, s.default)(e)) : this.currentOutput
                        }
                    }, {
                        key: "processInput",
                        value: function(t) {
                            if ("+" === t[0] && (!this.parsedInput && (this.parsedInput += "+", this.resetCountriness()), t = t.slice(1)), this.parsedInput += t, this.nationalNumber += t, this.isInternational()) {
                                if (this.countryCallingCode) !this.country && this.determineTheCountry();
                                else {
                                    if (!this.nationalNumber || !this.extractCountryCallingCode()) return this.parsedInput;
                                    this.initialize_phone_number_formats_for_this_country_calling_code(), this.resetFormat(), this.determineTheCountry()
                                }
                            } else {
                                var e = this.nationalPrefix;
                                this.nationalNumber = this.nationalPrefix + this.nationalNumber, this.extractNationalPrefix(), this.nationalPrefix !== e && (this.matching_formats = void 0, this.resetFormat())
                            }
                            if (!this.nationalNumber) return this.format_as_non_formatted_number();
                            this.match_formats_by_leading_digits();
                            var d = this.formatNationalNumber(t);
                            return d ? this.formatFullNumber(d) : this.format_as_non_formatted_number()
                        }
                    }, {
                        key: "format_as_non_formatted_number",
                        value: function() {
                            return this.isInternational() && this.countryCallingCode ? "+" + this.countryCallingCode + this.nationalNumber : this.parsedInput
                        }
                    }, {
                        key: "formatNationalNumber",
                        value: function(t) {
                            var e = void 0;
                            this.chosenFormat && (e = this.formatNextNationalNumberDigits(t));
                            var d = this.attempt_to_format_complete_phone_number();
                            return d ? d : this.chooseAnotherFormat() ? this.reformatNationalNumber() : e
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            return this.parsedInput = "", this.currentOutput = "", this.nationalPrefix = "", this.nationalNumber = "", this.carrierCode = "", this.resetCountriness(), this.resetFormat(), this
                        }
                    }, {
                        key: "resetCountry",
                        value: function() {
                            this.isInternational() ? this.country = void 0 : this.country = this.defaultCountry
                        }
                    }, {
                        key: "resetCountriness",
                        value: function() {
                            this.resetCountry(), this.defaultCountry && !this.isInternational() ? (this.metadata.country(this.defaultCountry), this.countryCallingCode = this.metadata.countryCallingCode(), this.initialize_phone_number_formats_for_this_country_calling_code()) : (this.metadata.country(void 0), this.countryCallingCode = void 0, this.available_formats = [], this.matching_formats = void 0)
                        }
                    }, {
                        key: "resetFormat",
                        value: function() {
                            this.chosenFormat = void 0, this.template = void 0, this.partially_populated_template = void 0, this.last_match_position = -1
                        }
                    }, {
                        key: "reformatNationalNumber",
                        value: function() {
                            return this.formatNextNationalNumberDigits(this.nationalNumber)
                        }
                    }, {
                        key: "initialize_phone_number_formats_for_this_country_calling_code",
                        value: function() {
                            this.available_formats = this.metadata.formats().filter(function(t) {
                                return m.test(t.internationalFormat())
                            }), this.matching_formats = void 0
                        }
                    }, {
                        key: "match_formats_by_leading_digits",
                        value: function() {
                            var t = this.nationalNumber,
                                e = t.length - 3;
                            e < 0 && (e = 0);
                            var d = this.had_enough_leading_digits && this.matching_formats || this.available_formats;
                            this.had_enough_leading_digits = this.shouldFormat(), this.matching_formats = d.filter(function(d) {
                                var n = d.leadingDigitsPatterns().length;
                                if (0 === n) return !0;
                                var r = Math.min(e, n - 1);
                                return RegExp("^(" + d.leadingDigitsPatterns()[r] + ")").test(t)
                            }), this.chosenFormat && -1 === this.matching_formats.indexOf(this.chosenFormat) && this.resetFormat()
                        }
                    }, {
                        key: "shouldFormat",
                        value: function() {
                            return this.nationalNumber.length >= 3
                        }
                    }, {
                        key: "attempt_to_format_complete_phone_number",
                        value: function() {
                            for (var t = this.matching_formats, e = Array.isArray(t), d = 0, t = e ? t : t[Symbol.iterator]();;) {
                                if (e) {
                                    if (d >= t.length) break;
                                    n = t[d++]
                                } else {
                                    if ((d = t.next()).done) break;
                                    n = d.value
                                }
                                var n, r = n;
                                if (!!RegExp("^(?:" + r.pattern() + ")$").test(this.nationalNumber)) {
                                    if (this.isFormatApplicable(r)) {
                                        this.resetFormat(), this.chosenFormat = r;
                                        var i = (0, $.format_national_number_using_format)(this.nationalNumber, r, this.isInternational(), "" !== this.nationalPrefix, this.metadata);
                                        if (this.nationalPrefix && "1" === this.countryCallingCode && (i = "1 " + i), this.createFormattingTemplate(r)) this.reformatNationalNumber();
                                        else {
                                            var a = this.formatFullNumber(i);
                                            this.template = a.replace(/[\d\+]/g, "x"), this.partially_populated_template = a
                                        }
                                        return i
                                    }
                                }
                            }
                        }
                    }, {
                        key: "formatFullNumber",
                        value: function(t) {
                            return this.isInternational() ? "+" + this.countryCallingCode + " " + t : t
                        }
                    }, {
                        key: "extractCountryCallingCode",
                        value: function() {
                            var t = (0, o.extractCountryCallingCode)(this.parsedInput, this.defaultCountry, this.metadata.metadata),
                                e = t.countryCallingCode,
                                d = t.number;
                            if (e) return this.countryCallingCode = e, this.nationalNumber = d, this.metadata.chooseCountryByCountryCallingCode(e), void 0 !== this.metadata.selectedCountry()
                        }
                    }, {
                        key: "extractNationalPrefix",
                        value: function() {
                            if (this.nationalPrefix = "", this.metadata.selectedCountry()) {
                                var t = (0, o.strip_national_prefix_and_carrier_code)(this.nationalNumber, this.metadata),
                                    e = t.number,
                                    d = t.carrierCode;
                                if (d && (this.carrierCode = d), !((!this.metadata.possibleLengths() || this.isPossibleNumber(this.nationalNumber) && !this.isPossibleNumber(e)) && (0, a.matchesEntirely)(this.nationalNumber, this.metadata.nationalNumberPattern()) && !(0, a.matchesEntirely)(e, this.metadata.nationalNumberPattern()))) return this.nationalPrefix = this.nationalNumber.slice(0, this.nationalNumber.length - e.length), this.nationalNumber = e, this.nationalPrefix
                            }
                        }
                    }, {
                        key: "isPossibleNumber",
                        value: function(t) {
                            if ("IS_POSSIBLE" === (0, u.checkNumberLengthForType)(t, void 0, this.metadata)) return !0;
                            return !1
                        }
                    }, {
                        key: "chooseAnotherFormat",
                        value: function() {
                            for (var t = this.matching_formats, e = Array.isArray(t), d = 0, t = e ? t : t[Symbol.iterator]();;) {
                                if (e) {
                                    if (d >= t.length) break;
                                    n = t[d++]
                                } else {
                                    if ((d = t.next()).done) break;
                                    n = d.value
                                }
                                var n, r = n;
                                if (this.chosenFormat === r) return;
                                if (!!this.isFormatApplicable(r)) {
                                    if (this.createFormattingTemplate(r)) return this.chosenFormat = r, this.last_match_position = -1, !0
                                }
                            }
                            this.resetCountry(), this.resetFormat()
                        }
                    }, {
                        key: "isFormatApplicable",
                        value: function(t) {
                            return !(!this.isInternational() && !this.nationalPrefix && t.nationalPrefixIsMandatoryWhenFormatting()) && (!this.nationalPrefix || !!t.usesNationalPrefix() || !!t.nationalPrefixIsOptionalWhenFormatting()) && !0
                        }
                    }, {
                        key: "createFormattingTemplate",
                        value: function(t) {
                            if (!(t.pattern().indexOf("|") >= 0)) {
                                var e = this.getTemplateForNumberFormatPattern(t);
                                if (e) return this.partially_populated_template = e, this.isInternational() ? this.template = "x" + C("x", this.countryCallingCode.length) + " " + e : this.template = e.replace(/\d/g, "x"), this.template
                            }
                        }
                    }, {
                        key: "getTemplateForNumberFormatPattern",
                        value: function(t) {
                            var e = t.pattern();
                            e = e.replace(h(), "\\d").replace(p(), "\\d");
                            var d = c.match(e)[0];
                            if (!(this.nationalNumber.length > d.length)) {
                                var n = this.getFormatFormat(t),
                                    r = RegExp("^" + e + "$"),
                                    i = this.nationalNumber.replace(/\d/g, "9");
                                return r.test(i) && (d = i), d.replace(new RegExp(e), n).replace(/9/g, "x")
                            }
                        }
                    }, {
                        key: "formatNextNationalNumberDigits",
                        value: function(t) {
                            for (var e = t.split(""), d = Array.isArray(e), n = 0, e = d ? e : e[Symbol.iterator]();;) {
                                if (d) {
                                    if (n >= e.length) break;
                                    r = e[n++]
                                } else {
                                    if ((n = e.next()).done) break;
                                    r = n.value
                                }
                                var r, i = r;
                                if (-1 === this.partially_populated_template.slice(this.last_match_position + 1).search(f)) {
                                    this.chosenFormat = void 0, this.template = void 0, this.partially_populated_template = void 0;
                                    return
                                }
                                this.last_match_position = this.partially_populated_template.search(f), this.partially_populated_template = this.partially_populated_template.replace(f, i)
                            }
                            return g(this.partially_populated_template, this.last_match_position + 1)
                        }
                    }, {
                        key: "isInternational",
                        value: function() {
                            return this.parsedInput && "+" === this.parsedInput[0]
                        }
                    }, {
                        key: "getFormatFormat",
                        value: function(t) {
                            if (this.isInternational()) return (0, $.changeInternationalFormatStyle)(t.internationalFormat());
                            if (t.nationalPrefixFormattingRule()) {
                                if (this.nationalPrefix || !t.usesNationalPrefix()) return t.format().replace($.FIRST_GROUP_PATTERN, t.nationalPrefixFormattingRule())
                            } else if ("1" === this.countryCallingCode && "1" === this.nationalPrefix) return "1 " + t.format();
                            return t.format()
                        }
                    }, {
                        key: "determineTheCountry",
                        value: function() {
                            this.country = (0, o.find_country_code)(this.countryCallingCode, this.nationalNumber, this.metadata)
                        }
                    }, {
                        key: "getNumber",
                        value: function() {
                            if (this.countryCallingCode && this.nationalNumber) {
                                var t = new r.default(this.country || this.countryCallingCode, this.nationalNumber, this.metadata.metadata);
                                return this.carrierCode && (t.carrierCode = this.carrierCode), t
                            }
                        }
                    }, {
                        key: "getNationalNumber",
                        value: function() {
                            return this.nationalNumber
                        }
                    }, {
                        key: "getTemplate",
                        value: function() {
                            if (this.template) {
                                for (var t = -1, e = 0; e < this.parsedInput.length;) t = this.template.indexOf("x", t + 1), e++;
                                return g(this.template, t + 1)
                            }
                        }
                    }]), t
                }();

            function g(t, e) {
                return ")" === t[e] && e++,
                    function(t) {
                        for (var e = [], d = 0; d < t.length;) "(" === t[d] ? e.push(d) : ")" === t[d] && e.pop(), d++;
                        var n = 0,
                            r = "";
                        e.push(t.length);
                        for (var i = e, a = Array.isArray(i), o = 0, i = a ? i : i[Symbol.iterator]();;) {
                            if (a) {
                                if (o >= i.length) break;
                                $ = i[o++]
                            } else {
                                if ((o = i.next()).done) break;
                                $ = o.value
                            }
                            var $, u = $;
                            r += t.slice(n, u), n = u + 1
                        }
                        return r
                    }(t.slice(0, e))
            }

            function C(t, e) {
                if (e < 1) return "";
                for (var d = ""; e > 1;) 1 & e && (d += t), e >>= 1, t += t;
                return d + t
            }
        },
        205545: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                getIDDPrefix: function() {
                    return a
                },
                stripIDDPrefix: function() {
                    return o
                }
            });
            var n = d("902090"),
                r = RegExp("([" + d("816637").VALID_DIGITS + "])"),
                i = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;

            function a(t, e) {
                var d = new n.default(e);
                return (d.country(t), i.test(d.IDDPrefix())) ? d.IDDPrefix() : d.defaultIDDPrefix()
            }

            function o(t, e, d) {
                if (!!e) {
                    var i = new n.default(d);
                    i.country(e);
                    var a = new RegExp(i.IDDPrefix());
                    if (0 === t.search(a)) {
                        var o = (t = t.slice(t.match(a)[0].length)).match(r);
                        if (o && null != o[1] && o[1].length > 0 && "0" === o[1]) return;
                        return t
                    }
                }
            }
        },
        243532: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return r
                }
            });
            var n = function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                    }(this, t), this.name = this.constructor.name, this.message = e, this.stack = Error(e).stack
                },
                r = n;
            n.prototype = Object.create(Error.prototype), n.prototype.constructor = n
        },
        14440: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return s
                }
            });
            var n = d("902090"),
                r = d("698295"),
                i = d("253061"),
                a = d("562230"),
                o = d("60947"),
                $ = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var d = arguments[e];
                        for (var n in d) Object.prototype.hasOwnProperty.call(d, n) && (t[n] = d[n])
                    }
                    return t
                },
                u = function() {
                    function t(t, e) {
                        for (var d = 0; d < e.length; d++) {
                            var n = e[d];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, d, n) {
                        return d && t(e.prototype, d), n && t(e, n), e
                    }
                }(),
                s = function() {
                    function t(e, d, r) {
                        if (! function(t, e) {
                                if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                            }(this, t), !e) throw TypeError("`countryCallingCode` not passed");
                        if (!d) throw TypeError("`nationalNumber` not passed");
                        if (l(e)) {
                            this.country = e;
                            var i = new n.default(r);
                            i.country(e), e = i.countryCallingCode()
                        }
                        this.countryCallingCode = e, this.nationalNumber = d, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.metadata = r
                    }
                    return u(t, [{
                        key: "isPossible",
                        value: function() {
                            return (0, r.default)(this, {
                                v2: !0
                            }, this.metadata)
                        }
                    }, {
                        key: "isValid",
                        value: function() {
                            return (0, i.default)(this, {
                                v2: !0
                            }, this.metadata)
                        }
                    }, {
                        key: "getType",
                        value: function() {
                            return (0, a.default)(this, {
                                v2: !0
                            }, this.metadata)
                        }
                    }, {
                        key: "format",
                        value: function(t, e) {
                            return (0, o.default)(this, t, e ? $({}, e, {
                                v2: !0
                            }) : {
                                v2: !0
                            }, this.metadata)
                        }
                    }, {
                        key: "formatNational",
                        value: function(t) {
                            return this.format("NATIONAL", t)
                        }
                    }, {
                        key: "formatInternational",
                        value: function(t) {
                            return this.format("INTERNATIONAL", t)
                        }
                    }, {
                        key: "getURI",
                        value: function(t) {
                            return this.format("RFC3966", t)
                        }
                    }]), t
                }(),
                l = function(t) {
                    return /^[A-Z]{2}$/.test(t)
                }
        },
        696167: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return A
                }
            });
            var n = d("14440"),
                r = d("816637"),
                i = d("746384"),
                a = d("550765"),
                o = d("645350"),
                $ = d("868831"),
                u = d("32361"),
                s = d("70873"),
                l = d("107291"),
                c = d("815668"),
                f = d("902090"),
                h = d("452234"),
                p = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var d = arguments[e];
                        for (var n in d) Object.prototype.hasOwnProperty.call(d, n) && (t[n] = d[n])
                    }
                    return t
                },
                m = function() {
                    function t(t, e) {
                        for (var d = 0; d < e.length; d++) {
                            var n = e[d];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, d, n) {
                        return d && t(e.prototype, d), n && t(e, n), e
                    }
                }(),
                y = ["\\/+(.*)/", "(\\([^(]*)", "(?:" + $.pZ + "-|-" + $.pZ + ")" + $.pZ + "*(.+)", "[‒-―－]" + $.pZ + "*(.+)", "\\.+" + $.pZ + "*([^.]+)", $.pZ + "+(" + $.PZ + "+)"],
                v = (0, o.limit)(0, 2),
                g = (0, o.limit)(0, 4),
                C = r.MAX_LENGTH_FOR_NSN + r.MAX_LENGTH_COUNTRY_CODE,
                _ = (0, o.limit)(0, C),
                b = "[" + r.VALID_PUNCTUATION + "]" + g,
                x = $.pNd + (0, o.limit)(1, C),
                N = "(?:" + c.LEAD_CLASS + b + ")" + v + x + "(?:" + b + x + ")" + _ + "(?:" + i.EXTN_PATTERNS_FOR_MATCHING + ")?",
                I = RegExp("[^" + $._pN + $._pL + "#]+$"),
                E = Number.MAX_SAFE_INTEGER || 9007199254740991,
                A = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments[2];
                        if (! function(t, e) {
                                if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                            }(this, t), this.state = "NOT_READY", this.searchIndex = 0, this.regExpCache = new a.default(32), !(d = p({}, d, {
                                defaultCountry: d.defaultCountry && (0, f.isSupportedCountry)(d.defaultCountry, n) ? d.defaultCountry : void 0,
                                leniency: d.leniency || d.extended ? "POSSIBLE" : "VALID",
                                maxTries: d.maxTries || E
                            })).leniency) throw TypeError("`Leniency` not supplied");
                        if (d.maxTries < 0) throw TypeError("`maxTries` not supplied");
                        if (this.text = e, this.options = d, this.metadata = n, this.leniency = u.default[d.leniency], !this.leniency) throw TypeError("Unknown leniency: " + d.leniency + ".");
                        this.maxTries = d.maxTries, this.PATTERN = RegExp(N, "ig")
                    }
                    return m(t, [{
                        key: "find",
                        value: function() {
                            for (var t = void 0; this.maxTries > 0 && null !== (t = this.PATTERN.exec(this.text));) {
                                var e = t[0],
                                    d = t.index;
                                if (e = (0, s.default)(e), (0, l.default)(e, d, this.text)) {
                                    var r = this.parseAndVerify(e, d, this.text) || this.extractInnerMatch(e, d, this.text);
                                    if (r) {
                                        if (this.options.v2) {
                                            var i = new n.default(r.country, r.phone, this.metadata);
                                            return r.ext && (i.ext = r.ext), {
                                                startsAt: r.startsAt,
                                                endsAt: r.endsAt,
                                                number: i
                                            }
                                        }
                                        return r
                                    }
                                }
                                this.maxTries--
                            }
                        }
                    }, {
                        key: "extractInnerMatch",
                        value: function(t, e, d) {
                            for (var n = y, r = Array.isArray(n), i = 0, n = r ? n : n[Symbol.iterator]();;) {
                                if (r) {
                                    if (i >= n.length) break;
                                    a = n[i++]
                                } else {
                                    if ((i = n.next()).done) break;
                                    a = i.value
                                }
                                for (var a, $ = !0, u = void 0, s = RegExp(a, "g"); null !== (u = s.exec(t)) && this.maxTries > 0;) {
                                    if ($) {
                                        var l = (0, o.trimAfterFirstMatch)(I, t.slice(0, u.index)),
                                            c = this.parseAndVerify(l, e, d);
                                        if (c) return c;
                                        this.maxTries--, $ = !1
                                    }
                                    var f = (0, o.trimAfterFirstMatch)(I, u[1]),
                                        h = this.parseAndVerify(f, e + u.index, d);
                                    if (h) return h;
                                    this.maxTries--
                                }
                            }
                        }
                    }, {
                        key: "parseAndVerify",
                        value: function(t, e, d) {
                            if (!!(0, c.default)(t, e, d, this.options.leniency)) {
                                var n = (0, h.default)(t, {
                                    extended: !0,
                                    defaultCountry: this.options.defaultCountry
                                }, this.metadata);
                                if (n.possible && this.leniency(n, t, this.metadata, this.regExpCache)) {
                                    var r = {
                                        startsAt: e,
                                        endsAt: e + t.length,
                                        country: n.country,
                                        phone: n.phone
                                    };
                                    return n.ext && (r.ext = n.ext), r
                                }
                            }
                        }
                    }, {
                        key: "hasNext",
                        value: function() {
                            return "NOT_READY" === this.state && (this.lastMatch = this.find(), this.lastMatch ? this.state = "READY" : this.state = "DONE"), "READY" === this.state
                        }
                    }, {
                        key: "next",
                        value: function() {
                            if (!this.hasNext()) throw Error("No next element");
                            var t = this.lastMatch;
                            return this.lastMatch = null, this.state = "NOT_READY", t
                        }
                    }]), t
                }()
        },
        64111: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                parseRFC3966: function() {
                    return i
                },
                formatRFC3966: function() {
                    return a
                }
            });
            var n = d("398975"),
                r = function(t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return function(t, e) {
                        var d = [],
                            n = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var a, o = t[Symbol.iterator](); !(n = (a = o.next()).done) && (d.push(a.value), !e || d.length !== e); n = !0);
                        } catch (t) {
                            r = !0, i = t
                        } finally {
                            try {
                                !n && o.return && o.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                        return d
                    }(t, e);
                    throw TypeError("Invalid attempt to destructure non-iterable instance")
                };

            function i(t) {
                var e = void 0,
                    d = void 0;
                t = t.replace(/^tel:/, "tel=");
                for (var i = t.split(";"), a = Array.isArray(i), o = 0, i = a ? i : i[Symbol.iterator]();;) {
                    if (a) {
                        if (o >= i.length) break;
                        $ = i[o++]
                    } else {
                        if ((o = i.next()).done) break;
                        $ = o.value
                    }
                    var $, u = r($.split("="), 2),
                        s = u[0],
                        l = u[1];
                    switch (s) {
                        case "tel":
                            e = l;
                            break;
                        case "ext":
                            d = l;
                            break;
                        case "phone-context":
                            "+" === l[0] && (e = l + e)
                    }
                }
                if (!(0, n.default)(e)) return {};
                var c = {
                    number: e
                };
                return d && (c.ext = d), c
            }

            function a(t) {
                var e = t.number,
                    d = t.ext;
                if (!e) return "";
                if ("+" !== e[0]) throw Error('"formatRFC3966()" expects "number" to be in E.164 format.');
                return "tel:" + e + (d ? ";ext=" + d : "")
            }
        },
        816637: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                MIN_LENGTH_FOR_NSN: function() {
                    return n
                },
                MAX_LENGTH_FOR_NSN: function() {
                    return r
                },
                MAX_LENGTH_COUNTRY_CODE: function() {
                    return i
                },
                VALID_DIGITS: function() {
                    return a
                },
                WHITESPACE: function() {
                    return o
                },
                VALID_PUNCTUATION: function() {
                    return $
                },
                PLUS_CHARS: function() {
                    return u
                }
            });
            var n = 2,
                r = 17,
                i = 3,
                a = "0-9０-９٠-٩۰-۹",
                o = " \xa0\xad​⁠　",
                $ = "-‐-―−ー－／/．." + o + "()（）［］\\[\\]~⁓∼～",
                u = "+＋"
        },
        746384: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                EXTN_PATTERNS_FOR_PARSING: function() {
                    return a
                },
                EXTN_PATTERNS_FOR_MATCHING: function() {
                    return o
                },
                extractExtension: function() {
                    return u
                }
            });
            var n = d("816637"),
                r = "([" + n.VALID_DIGITS + "]{1,7})";

            function i(t) {
                var e = "xｘ#＃~～";
                if ("parsing" === t) e = ",;" + e;
                return ";ext=" + r + "|[ \xa0\\t,]*(?:e?xt(?:ensi(?:ó?|\xf3))?n?|ｅ?ｘｔｎ?|доб|[" + e + "]|int|anexo|ｉｎｔ)[:\\.．]?[ \xa0\\t,-]*" + r + "#?|[- ]+([" + n.VALID_DIGITS + "]{1,5})#"
            }
            var a = i("parsing"),
                o = i("matching"),
                $ = RegExp("(?:" + a + ")$", "i");

            function u(t) {
                var e = t.search($);
                if (e < 0) return {};
                for (var d = t.slice(0, e), n = t.match($), r = 1; r < n.length;) {
                    if (null != n[r] && n[r].length > 0) return {
                        number: d,
                        ext: n[r]
                    };
                    r++
                }
            }
        },
        747943: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return a
                }
            });
            var n = function() {
                function t(t, e) {
                    for (var d = 0; d < e.length; d++) {
                        var n = e[d];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, d, n) {
                    return d && t(e.prototype, d), n && t(e, n), e
                }
            }();

            function r(t, e) {
                if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
            }
            var i = function t(e, d) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    r(this, t), this.key = e, this.value = d, this.next = n, this.prev = i
                },
                a = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
                        r(this, t), this.size = 0, this.limit = e, this.head = null, this.tail = null, this.cache = {}
                    }
                    return n(t, [{
                        key: "put",
                        value: function(t, e) {
                            if (this.ensureLimit(), this.head) {
                                var d = new i(t, e, this.head);
                                this.head.prev = d, this.head = d
                            } else this.head = this.tail = new i(t, e);
                            this.cache[t] = this.head, this.size++
                        }
                    }, {
                        key: "get",
                        value: function(t) {
                            if (this.cache[t]) {
                                var e = this.cache[t].value;
                                return this.remove(t), this.put(t, e), e
                            }
                            console.log("Item not available in cache for key " + t)
                        }
                    }, {
                        key: "ensureLimit",
                        value: function() {
                            this.size === this.limit && this.remove(this.tail.key)
                        }
                    }, {
                        key: "remove",
                        value: function(t) {
                            var e = this.cache[t];
                            null !== e.prev ? e.prev.next = e.next : this.head = e.next, null !== e.next ? e.next.prev = e.prev : this.tail = e.prev, delete this.cache[t], this.size--
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            this.head = null, this.tail = null, this.size = 0, this.cache = {}
                        }
                    }]), t
                }()
        },
        32361: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return a
                }
            });
            var n = d("253061"),
                r = d("548142"),
                i = d("645350"),
                a = {
                    POSSIBLE: function(t, e, d) {
                        return !0
                    },
                    VALID: function(t, e, d) {
                        return !!((0, n.default)(t, void 0, d) && o(t, e.toString(), d)) || !1
                    },
                    STRICT_GROUPING: function(t, e, d, r) {
                        var i = e.toString();
                        return !(!(0, n.default)(t, void 0, d) || !o(t, i, d) || u(t, i)) && !!$(t, d) && s(t, e, d, f, r)
                    },
                    EXACT_GROUPING: function(t, e, d, r) {
                        var i = e.toString();
                        return !(!(0, n.default)(t, void 0, d) || !o(t, i, d) || u(t, i)) && !!$(t, d) && s(t, e, d, c, r)
                    }
                };

            function o(t, e, d) {
                for (var n = 0; n < e.length - 1; n++) {
                    var i = e.charAt(n);
                    if ("x" === i || "X" === i) {
                        var a = e.charAt(n + 1);
                        if ("x" === a || "X" === a) {
                            if (n++, util.isNumberMatch(t, e.substring(n)) != MatchType.NSN_MATCH) return !1
                        } else if ((0, r.default)(e.substring(n)) !== t.ext) return !1
                    }
                }
                return !0
            }

            function $(t, e) {
                if ("FROM_DEFAULT_COUNTRY" != t.getCountryCodeSource()) return !0;
                var d = util.getRegionCodeForCountryCode(t.getCountryCode()),
                    n = util.getMetadataForRegion(d);
                if (null == n) return !0;
                var r = util.getNationalSignificantNumber(t),
                    i = util.chooseFormattingPatternForNumber(n.numberFormats(), r);
                if (i && i.getNationalPrefixFormattingRule().length > 0) {
                    if (i.getNationalPrefixOptionalWhenFormatting() || PhoneNumberUtil.formattingRuleHasFirstGroupOnly(i.getNationalPrefixFormattingRule())) return !0;
                    var a = PhoneNumberUtil.normalizeDigitsOnly(t.getRawInput());
                    return util.maybeStripNationalPrefixAndCarrierCode(a, n, null)
                }
                return !0
            }

            function u(t, e) {
                var d = e.indexOf("/");
                if (d < 0) return !1;
                var n = e.indexOf("/", d + 1);
                return !(n < 0) && (t.getCountryCodeSource() !== CountryCodeSource.FROM_NUMBER_WITH_PLUS_SIGN && t.getCountryCodeSource() !== CountryCodeSource.FROM_NUMBER_WITHOUT_PLUS_SIGN || PhoneNumberUtil.normalizeDigitsOnly(e.substring(0, d)) !== String(t.getCountryCode()) || e.slice(n + 1).indexOf("/") >= 0)
            }

            function s(t, e, d, n, r) {
                var i = normalizeDigits(e, !0),
                    a = l(d, t, null);
                if (n(d, t, i, a)) return !0;
                var o = MetadataManager.getAlternateFormatsForCountry(t.getCountryCode()),
                    $ = util.getNationalSignificantNumber(t);
                if (o)
                    for (var u = o.numberFormats(), s = Array.isArray(u), c = 0, u = s ? u : u[Symbol.iterator]();;) {
                        if (s) {
                            if (c >= u.length) break;
                            f = u[c++]
                        } else {
                            if ((c = u.next()).done) break;
                            f = c.value
                        }
                        var f, h = f;
                        if (!(h.leadingDigitsPatterns().length > 0) || !!r.getPatternForRegExp("^" + h.leadingDigitsPatterns()[0]).test($)) {
                            if (a = l(d, t, h), n(d, t, i, a)) return !0
                        }
                    }
                return !1
            }

            function l(t, e, d) {
                if (d) {
                    var n = util.getNationalSignificantNumber(e);
                    return util.formatNsnUsingPattern(n, d, "RFC3966", t).split("-")
                }
                var r = formatNumber(e, "RFC3966", t),
                    i = r.indexOf(";");
                i < 0 && (i = r.length);
                var a = r.indexOf("-") + 1;
                return r.slice(a, i).split("-")
            }

            function c(t, e, d, n) {
                var r = d.split(NON_DIGITS_PATTERN),
                    a = e.hasExtension() ? r.length - 2 : r.length - 1;
                if (1 == r.length || r[a].contains(util.getNationalSignificantNumber(e))) return !0;
                for (var o = n.length - 1; o > 0 && a >= 0;) {
                    if (r[a] !== n[o]) return !1;
                    o--, a--
                }
                return a >= 0 && (0, i.endsWith)(r[a], n[0])
            }

            function f(t, e, d, n) {
                var r = 0;
                if (e.getCountryCodeSource() !== CountryCodeSource.FROM_DEFAULT_COUNTRY) {
                    var a = String(e.getCountryCode());
                    r = d.indexOf(a) + a.length()
                }
                for (var o = 0; o < n.length; o++) {
                    if ((r = d.indexOf(n[o], r)) < 0) return !1;
                    if (r += n[o].length(), 0 == o && r < d.length()) {
                        var $ = util.getRegionCodeForCountryCode(e.getCountryCode());
                        if (null != util.getNddPrefixForRegion($, !0) && Character.isDigit(d.charAt(r))) {
                            var u = util.getNationalSignificantNumber(e);
                            return (0, i.startsWith)(d.slice(r - n[o].length), u)
                        }
                    }
                }
                return d.slice(r).contains(e.getExtension())
            }
        },
        550765: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return i
                }
            });
            var n = d("747943"),
                r = function() {
                    function t(t, e) {
                        for (var d = 0; d < e.length; d++) {
                            var n = e[d];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, d, n) {
                        return d && t(e.prototype, d), n && t(e, n), e
                    }
                }(),
                i = function() {
                    function t(e) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, t), this.cache = new n.default(e)
                    }
                    return r(t, [{
                        key: "getPatternForRegExp",
                        value: function(t) {
                            var e = this.cache.get(t);
                            return !e && (e = RegExp("^" + t), this.cache.put(t, e)), e
                        }
                    }]), t
                }()
        },
        815668: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                LEAD_CLASS: function() {
                    return u
                },
                default: function() {
                    return f
                }
            });
            var n = d("816637"),
                r = d("645350"),
                i = d("868831"),
                a = "(\\[（［",
                o = ")\\]）］",
                $ = "[^" + a + o + "]",
                u = "[" + a + n.PLUS_CHARS + "]",
                s = RegExp("^" + u),
                l = RegExp("^(?:[" + a + "])?(?:" + $ + "+[" + o + "])?" + $ + "+(?:[" + a + "]" + $ + "+[" + o + "])" + (0, r.limit)(0, 3) + $ + "*$"),
                c = /\d{1,5}-+\d{1,5}\s{0,4}\(\d{1,4}/;

            function f(t, e, d, n) {
                if (!(!l.test(t) || c.test(t))) {
                    if ("POSSIBLE" !== n) {
                        if (e > 0 && !s.test(t)) {
                            var r = d[e - 1];
                            if ((0, i.isInvalidPunctuationSymbol)(r) || (0, i.isLatinLetter)(r)) return !1
                        }
                        var a = e + t.length;
                        if (a < d.length) {
                            var o = d[a];
                            if ((0, i.isInvalidPunctuationSymbol)(o) || (0, i.isLatinLetter)(o)) return !1
                        }
                    }
                    return !0
                }
            }
        },
        107291: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return a
                }
            });
            var n = /(?:(?:[0-3]?\d\/[01]?\d)|(?:[01]?\d\/[0-3]?\d))\/(?:[12]\d)?\d{2}/,
                r = /[12]\d{3}[-/]?[01]\d[-/]?[0-3]\d +[0-2]\d$/,
                i = /^:[0-5]\d/;

            function a(t, e, d) {
                if (n.test(t)) return !1;
                if (r.test(t)) {
                    var a = d.slice(e + t.length);
                    if (i.test(a)) return !1
                }
                return !0
            }
        },
        70873: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return i
                }
            });
            var n = d("645350"),
                r = /[\\/] *x/;

            function i(t) {
                return (0, n.trimAfterFirstMatch)(r, t)
            }
        },
        868831: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                pZ: function() {
                    return r
                },
                PZ: function() {
                    return i
                },
                _pN: function() {
                    return a
                },
                pNd: function() {
                    return o
                },
                _pL: function() {
                    return $
                },
                isLatinLetter: function() {
                    return f
                },
                isInvalidPunctuationSymbol: function() {
                    return h
                }
            });
            var n = " \xa0 ᠎ - \u2028\u2029  　",
                r = "[" + n + "]",
                i = "[^" + n + "]",
                a = "0-9\xb2\xb3\xb9\xbc-\xbe٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൦-൵๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹０-９",
                o = "[0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹０-９]",
                $ = "A-Za-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
                u = RegExp("[" + $ + "]"),
                s = RegExp("[$\xa2-\xa5֏؋৲৳৻૱௹฿៛₠-₹꠸﷼﹩＄￠￡￥￦]"),
                l = RegExp("[̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣤ-ࣾऀ-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣଁ଼ିୁ-ୄ୍ୖୢୣஂீ்ా-ీె-ైొ-్ౕౖౢౣ಼ಿೆೌ್ೢೣു-ൄ്ൢൣ්ි-ුූัิ-ฺ็-๎ັິ-ູົຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᯦᮫ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᷀-ᷦ᷼-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꨩ-ꨮꨱꨲꨵꨶꩃꩌꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︦]"),
                c = RegExp("[\x00-\x7f\x80-\xffĀ-ſḀ-ỿƀ-ɏ̀-ͯ]");

            function f(t) {
                return !!(u.test(t) || l.test(t)) && c.test(t)
            }

            function h(t) {
                return "%" === t || s.test(t)
            }
        },
        645350: function(t, e, d) {
            "use strict";

            function n(t, e) {
                if (t < 0 || e <= 0 || e < t) throw TypeError();
                return "{" + t + "," + e + "}"
            }

            function r(t, e) {
                var d = e.search(t);
                return d >= 0 ? e.slice(0, d) : e
            }

            function i(t, e) {
                return 0 === t.indexOf(e)
            }

            function a(t, e) {
                return t.indexOf(e, t.length - e.length) === t.length - e.length
            }
            d.r(e), d.d(e, {
                limit: function() {
                    return n
                },
                trimAfterFirstMatch: function() {
                    return r
                },
                startsWith: function() {
                    return i
                },
                endsWith: function() {
                    return a
                }
            })
        },
        213854: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                PhoneNumberSearch: function() {
                    return f
                }
            });
            var n = d("816637"),
                r = d("746384"),
                i = d("452234"),
                a = d("70873"),
                o = d("107291"),
                $ = d("815668"),
                u = function() {
                    function t(t, e) {
                        for (var d = 0; d < e.length; d++) {
                            var n = e[d];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, d, n) {
                        return d && t(e.prototype, d), n && t(e, n), e
                    }
                }(),
                s = "[" + n.PLUS_CHARS + "]{0,1}(?:[" + n.VALID_PUNCTUATION + "]*[" + n.VALID_DIGITS + "]){3,}[" + n.VALID_PUNCTUATION + n.VALID_DIGITS + "]*",
                l = RegExp("^[" + n.WHITESPACE + "]+"),
                c = RegExp("[" + n.VALID_PUNCTUATION + "]+$"),
                f = function() {
                    function t(e) {
                        var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments[2];
                        ! function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, t), this.state = "NOT_READY", this.text = e, this.options = d, this.metadata = n, this.regexp = RegExp(s + "(?:" + r.EXTN_PATTERNS_FOR_PARSING + ")?", "ig")
                    }
                    return u(t, [{
                        key: "find",
                        value: function() {
                            var t = this.regexp.exec(this.text);
                            if (t) {
                                var e = t[0],
                                    d = t.index;
                                e = e.replace(l, ""), d += t[0].length - e.length, e = e.replace(c, ""), e = (0, a.default)(e);
                                var n = this.parseCandidate(e, d);
                                return n ? n : this.find()
                            }
                        }
                    }, {
                        key: "parseCandidate",
                        value: function(t, e) {
                            if (!!(0, o.default)(t, e, this.text) && !!(0, $.default)(t, e, this.text, this.options.extended ? "POSSIBLE" : "VALID")) {
                                var d = (0, i.default)(t, this.options, this.metadata);
                                if (d.phone) return d.startsAt = e, d.endsAt = e + t.length, d
                            }
                        }
                    }, {
                        key: "hasNext",
                        value: function() {
                            return "NOT_READY" === this.state && (this.last_match = this.find(), this.last_match ? this.state = "READY" : this.state = "DONE"), "READY" === this.state
                        }
                    }, {
                        key: "next",
                        value: function() {
                            if (!this.hasNext()) throw Error("No next element");
                            var t = this.last_match;
                            return this.last_match = null, this.state = "NOT_READY", t
                        }
                    }]), t
                }()
        },
        60947: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return s
                },
                FIRST_GROUP_PATTERN: function() {
                    return l
                },
                format_national_number_using_format: function() {
                    return c
                },
                changeInternationalFormatStyle: function() {
                    return h
                }
            });
            var n = d("816637"),
                r = d("612926"),
                i = d("902090"),
                a = d("205545"),
                o = d("64111"),
                $ = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var d = arguments[e];
                        for (var n in d) Object.prototype.hasOwnProperty.call(d, n) && (t[n] = d[n])
                    }
                    return t
                },
                u = {
                    formatExtension: function(t, e, d) {
                        return "" + t + d.ext() + e
                    }
                };

            function s(t, e, d, n) {
                if (d = d ? $({}, u, d) : u, n = new i.default(n), t.country) {
                    if (!n.hasCountry(t.country)) throw Error("Unknown country: " + t.country);
                    n.country(t.country)
                } else {
                    if (!t.countryCallingCode) return t.phone || "";
                    n.chooseCountryByCountryCallingCode(t.countryCallingCode)
                }
                var r = n.countryCallingCode(),
                    s = d.v2 ? t.nationalNumber : t.phone,
                    l = void 0;
                switch (e) {
                    case "NATIONAL":
                        if (!s) return "";
                        return function(t, e, d, n) {
                            return e ? n(t, e, d) : t
                        }(l = f(s, "NATIONAL", n), t.ext, n, d.formatExtension);
                    case "INTERNATIONAL":
                        if (!s) return "+" + r;
                        return function(t, e, d, n) {
                            return e ? n(t, e, d) : t
                        }(l = "+" + r + " " + (l = f(s, "INTERNATIONAL", n)), t.ext, n, d.formatExtension);
                    case "E.164":
                        return "+" + r + s;
                    case "RFC3966":
                        return (0, o.formatRFC3966)({
                            number: "+" + r + s,
                            ext: t.ext
                        });
                    case "IDD":
                        if (!d.fromCountry) return;
                        var c = (0, a.getIDDPrefix)(d.fromCountry, n.metadata);
                        if (!c) return;
                        if (d.humanReadable) {
                            var h = r && function(t, e, d, n) {
                                var r = new i.default(n.metadata);
                                if (r.country(d), e === r.countryCallingCode()) return "1" === e ? e + " " + f(t, "NATIONAL", n) : f(t, "NATIONAL", n)
                            }(s, n.countryCallingCode(), d.fromCountry, n);
                            return function(t, e, d, n) {
                                return e ? n(t, e, d) : t
                            }(l = h ? h : c + " " + r + " " + f(s, "INTERNATIONAL", n), t.ext, n, d.formatExtension)
                        }
                        return "" + c + r + s;
                    default:
                        throw Error('Unknown "format" argument passed to "formatNumber()": "' + e + '"')
                }
            }
            var l = /(\$\d)/;

            function c(t, e, d, n, r) {
                var i = t.replace(new RegExp(e.pattern()), d ? e.internationalFormat() : e.nationalPrefixFormattingRule() && (!e.nationalPrefixIsOptionalWhenFormatting() || n) ? e.format().replace(l, e.nationalPrefixFormattingRule()) : e.format());
                return d ? h(i) : i
            }

            function f(t, e, d) {
                var n = function(t, e) {
                    for (var d = t, n = Array.isArray(d), i = 0, d = n ? d : d[Symbol.iterator]();;) {
                        if (n) {
                            if (i >= d.length) break;
                            a = d[i++]
                        } else {
                            if ((i = d.next()).done) break;
                            a = i.value
                        }
                        var a, o = a;
                        if (o.leadingDigitsPatterns().length > 0) {
                            var $ = o.leadingDigitsPatterns()[o.leadingDigitsPatterns().length - 1];
                            if (0 !== e.search($)) continue
                        }
                        if ((0, r.matchesEntirely)(e, o.pattern())) return o
                    }
                }(d.formats(), t);
                return n ? c(t, n, "INTERNATIONAL" === e, !0, d) : t
            }

            function h(t) {
                return t.replace(RegExp("[" + n.VALID_PUNCTUATION + "]+", "g"), " ").trim()
            }

            function p(t, e, d, n) {
                return e ? n(t, e, d) : t
            }
        },
        387036: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return n.getCountryCallingCode
                }
            });
            var n = d("902090")
        },
        562230: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return a
                },
                checkNumberLengthForType: function() {
                    return function t(e, d, n) {
                        var i = n.type(d),
                            a = i && i.possibleLengths() || n.possibleLengths();
                        if ("FIXED_LINE_OR_MOBILE" === d) {
                            if (!n.type("FIXED_LINE")) return t(e, "MOBILE", n);
                            var o = n.type("MOBILE");
                            o && (a = (0, r.mergeArrays)(a, o.possibleLengths()))
                        } else if (d && !i) return "INVALID_LENGTH";
                        var $ = e.length,
                            u = a[0];
                        return u === $ ? "IS_POSSIBLE" : u > $ ? "TOO_SHORT" : a[a.length - 1] < $ ? "TOO_LONG" : a.indexOf($, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH"
                    }
                }
            });
            var n = d("902090"),
                r = d("612926"),
                i = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];

            function a(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    d = arguments[2];
                if (!!t.country) {
                    if (!(d = new n.default(d)).hasCountry(t.country)) throw Error("Unknown country: " + t.country);
                    var a = e.v2 ? t.nationalNumber : t.phone;
                    if (d.country(t.country), (0, r.matchesEntirely)(a, d.nationalNumberPattern())) {
                        if (o(a, "FIXED_LINE", d)) return d.type("MOBILE") && "" === d.type("MOBILE").pattern() || !d.type("MOBILE") || o(a, "MOBILE", d) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
                        for (var $ = i, u = Array.isArray($), s = 0, $ = u ? $ : $[Symbol.iterator]();;) {
                            if (u) {
                                if (s >= $.length) break;
                                l = $[s++]
                            } else {
                                if ((s = $.next()).done) break;
                                l = s.value
                            }
                            var l, c = l;
                            if (o(a, c, d)) return c
                        }
                    }
                }
            }

            function o(t, e, d) {
                return !(!(e = d.type(e)) || !e.pattern() || e.possibleLengths() && 0 > e.possibleLengths().indexOf(t.length)) && (0, r.matchesEntirely)(t, e.pattern())
            }
        },
        698295: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return i
                },
                is_possible_number: function() {
                    return a
                }
            });
            var n = d("902090"),
                r = d("562230");

            function i(t, e, d) {
                if (void 0 === e && (e = {}), d = new n.default(d), e.v2) {
                    if (!t.countryCallingCode) throw Error("Invalid phone number object passed");
                    d.chooseCountryByCountryCallingCode(t.countryCallingCode)
                } else {
                    if (!t.phone) return !1;
                    if (t.country) {
                        if (!d.hasCountry(t.country)) throw Error("Unknown country: " + t.country);
                        d.country(t.country)
                    } else {
                        if (!t.countryCallingCode) throw Error("Invalid phone number object passed");
                        d.chooseCountryByCountryCallingCode(t.countryCallingCode)
                    }
                }
                if (!d.possibleLengths()) throw Error("Metadata too old");
                return a(t.phone || t.nationalNumber, void 0, d)
            }

            function a(t, e, d) {
                if ("IS_POSSIBLE" === (0, r.checkNumberLengthForType)(t, void 0, d)) return !0;
                return !1
            }
        },
        398975: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return a
                }
            });
            var n = d("816637"),
                r = d("746384"),
                i = RegExp("^" + ("[" + n.VALID_DIGITS + "]{" + n.MIN_LENGTH_FOR_NSN + "}") + "$|^" + ("[" + n.PLUS_CHARS + "]{0,1}(?:[" + n.VALID_PUNCTUATION + "]*[" + n.VALID_DIGITS + "]){3,}[" + n.VALID_PUNCTUATION + n.VALID_DIGITS + "]*") + "(?:" + r.EXTN_PATTERNS_FOR_PARSING + ")?$", "i");

            function a(t) {
                return t.length >= n.MIN_LENGTH_FOR_NSN && i.test(t)
            }
        },
        902090: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return u
                },
                getCountryCallingCode: function() {
                    return p
                },
                isSupportedCountry: function() {
                    return m
                }
            });
            var n = d("688271"),
                r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                i = function() {
                    function t(t, e) {
                        for (var d = 0; d < e.length; d++) {
                            var n = e[d];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, d, n) {
                        return d && t(e.prototype, d), n && t(e, n), e
                    }
                }();

            function a(t, e) {
                if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
            }
            var o = " ext. ",
                $ = function() {
                    function t(e) {
                        a(this, t),
                            function(t) {
                                if (!t) throw Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
                                if (!f(t) || !f(t.countries) || !f(t.country_calling_codes) && !f(t.country_phone_code_to_countries)) throw Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` and `.country_calling_codes` child object properties. Got " + (f(t) ? "an object of shape: { " + Object.keys(t).join(", ") + " }" : "a " + h(t) + ": " + t) + ".")
                            }(e), this.metadata = e, this.v1 = !e.version, this.v2 = void 0 !== e.version && -1 === (0, n.default)(e.version, "1.2.0"), this.v3 = void 0 !== e.version
                    }
                    return i(t, [{
                        key: "hasCountry",
                        value: function(t) {
                            return void 0 !== this.metadata.countries[t]
                        }
                    }, {
                        key: "country",
                        value: function(t) {
                            if (!t) return this._country = void 0, this.country_metadata = void 0, this;
                            if (!this.hasCountry(t)) throw Error("Unknown country: " + t);
                            return this._country = t, this.country_metadata = this.metadata.countries[t], this
                        }
                    }, {
                        key: "getDefaultCountryMetadataForRegion",
                        value: function() {
                            return this.metadata.countries[this.countryCallingCodes()[this.countryCallingCode()][0]]
                        }
                    }, {
                        key: "countryCallingCode",
                        value: function() {
                            return this.country_metadata[0]
                        }
                    }, {
                        key: "IDDPrefix",
                        value: function() {
                            if (!this.v1 && !this.v2) return this.country_metadata[1]
                        }
                    }, {
                        key: "defaultIDDPrefix",
                        value: function() {
                            if (!this.v1 && !this.v2) return this.country_metadata[12]
                        }
                    }, {
                        key: "nationalNumberPattern",
                        value: function() {
                            return this.v1 || this.v2 ? this.country_metadata[1] : this.country_metadata[2]
                        }
                    }, {
                        key: "possibleLengths",
                        value: function() {
                            if (!this.v1) return this.country_metadata[this.v2 ? 2 : 3]
                        }
                    }, {
                        key: "_getFormats",
                        value: function(t) {
                            return t[this.v1 ? 2 : this.v2 ? 3 : 4]
                        }
                    }, {
                        key: "formats",
                        value: function() {
                            var t = this;
                            return (this._getFormats(this.country_metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || []).map(function(e) {
                                return new s(e, t)
                            })
                        }
                    }, {
                        key: "nationalPrefix",
                        value: function() {
                            return this.country_metadata[this.v1 ? 3 : this.v2 ? 4 : 5]
                        }
                    }, {
                        key: "_getNationalPrefixFormattingRule",
                        value: function(t) {
                            return t[this.v1 ? 4 : this.v2 ? 5 : 6]
                        }
                    }, {
                        key: "nationalPrefixFormattingRule",
                        value: function() {
                            return this._getNationalPrefixFormattingRule(this.country_metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())
                        }
                    }, {
                        key: "nationalPrefixForParsing",
                        value: function() {
                            return this.country_metadata[this.v1 ? 5 : this.v2 ? 6 : 7] || this.nationalPrefix()
                        }
                    }, {
                        key: "nationalPrefixTransformRule",
                        value: function() {
                            return this.country_metadata[this.v1 ? 6 : this.v2 ? 7 : 8]
                        }
                    }, {
                        key: "_getNationalPrefixIsOptionalWhenFormatting",
                        value: function() {
                            return !!this.country_metadata[this.v1 ? 7 : this.v2 ? 8 : 9]
                        }
                    }, {
                        key: "nationalPrefixIsOptionalWhenFormatting",
                        value: function() {
                            return this._getNationalPrefixIsOptionalWhenFormatting(this.country_metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())
                        }
                    }, {
                        key: "leadingDigits",
                        value: function() {
                            return this.country_metadata[this.v1 ? 8 : this.v2 ? 9 : 10]
                        }
                    }, {
                        key: "types",
                        value: function() {
                            return this.country_metadata[this.v1 ? 9 : this.v2 ? 10 : 11]
                        }
                    }, {
                        key: "hasTypes",
                        value: function() {
                            return (!this.types() || 0 !== this.types().length) && !!this.types()
                        }
                    }, {
                        key: "type",
                        value: function(t) {
                            if (this.hasTypes() && c(this.types(), t)) return new l(c(this.types(), t), this)
                        }
                    }, {
                        key: "ext",
                        value: function() {
                            return this.v1 || this.v2 ? o : this.country_metadata[13] || o
                        }
                    }, {
                        key: "countryCallingCodes",
                        value: function() {
                            return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes
                        }
                    }, {
                        key: "chooseCountryByCountryCallingCode",
                        value: function(t) {
                            var e = this.countryCallingCodes()[t][0];
                            this.hasCountry(e) && this.country(e)
                        }
                    }, {
                        key: "selectedCountry",
                        value: function() {
                            return this._country
                        }
                    }]), t
                }(),
                u = $,
                s = function() {
                    function t(e, d) {
                        a(this, t), this._format = e, this.metadata = d
                    }
                    return i(t, [{
                        key: "pattern",
                        value: function() {
                            return this._format[0]
                        }
                    }, {
                        key: "format",
                        value: function() {
                            return this._format[1]
                        }
                    }, {
                        key: "leadingDigitsPatterns",
                        value: function() {
                            return this._format[2] || []
                        }
                    }, {
                        key: "nationalPrefixFormattingRule",
                        value: function() {
                            return this._format[3] || this.metadata.nationalPrefixFormattingRule()
                        }
                    }, {
                        key: "nationalPrefixIsOptionalWhenFormatting",
                        value: function() {
                            return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormatting()
                        }
                    }, {
                        key: "nationalPrefixIsMandatoryWhenFormatting",
                        value: function() {
                            return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormatting()
                        }
                    }, {
                        key: "usesNationalPrefix",
                        value: function() {
                            return this.nationalPrefixFormattingRule() && "$1" !== this.nationalPrefixFormattingRule() && /\d/.test(this.nationalPrefixFormattingRule().replace("$1", ""))
                        }
                    }, {
                        key: "internationalFormat",
                        value: function() {
                            return this._format[5] || this.format()
                        }
                    }]), t
                }(),
                l = function() {
                    function t(e, d) {
                        a(this, t), this.type = e, this.metadata = d
                    }
                    return i(t, [{
                        key: "pattern",
                        value: function() {
                            return this.metadata.v1 ? this.type : this.type[0]
                        }
                    }, {
                        key: "possibleLengths",
                        value: function() {
                            if (!this.metadata.v1) return this.type[1] || this.metadata.possibleLengths()
                        }
                    }]), t
                }();

            function c(t, e) {
                switch (e) {
                    case "FIXED_LINE":
                        return t[0];
                    case "MOBILE":
                        return t[1];
                    case "TOLL_FREE":
                        return t[2];
                    case "PREMIUM_RATE":
                        return t[3];
                    case "PERSONAL_NUMBER":
                        return t[4];
                    case "VOICEMAIL":
                        return t[5];
                    case "UAN":
                        return t[6];
                    case "PAGER":
                        return t[7];
                    case "VOIP":
                        return t[8];
                    case "SHARED_COST":
                        return t[9]
                }
            }
            var f = function(t) {
                    return (void 0 === t ? "undefined" : r(t)) === "object"
                },
                h = function(t) {
                    return void 0 === t ? "undefined" : r(t)
                };

            function p(t, e) {
                if ((e = new $(e)).hasCountry(t)) return e.country(t).countryCallingCode();
                throw Error("Unknown country: " + t)
            }

            function m(t, e) {
                return void 0 !== e.countries[t]
            }
        },
        548142: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                parseDigit: function() {
                    return r
                },
                default: function() {
                    return i
                }
            });
            var n = {
                0: "0",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                "０": "0",
                "１": "1",
                "２": "2",
                "３": "3",
                "４": "4",
                "５": "5",
                "６": "6",
                "７": "7",
                "８": "8",
                "９": "9",
                "٠": "0",
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "۰": "0",
                "۱": "1",
                "۲": "2",
                "۳": "3",
                "۴": "4",
                "۵": "5",
                "۶": "6",
                "۷": "7",
                "۸": "8",
                "۹": "9"
            };

            function r(t) {
                return n[t]
            }

            function i(t) {
                for (var e = "", d = t.split(""), r = Array.isArray(d), i = 0, d = r ? d : d[Symbol.iterator]();;) {
                    if (r) {
                        if (i >= d.length) break;
                        a = d[i++]
                    } else {
                        if ((i = d.next()).done) break;
                        a = i.value
                    }
                    var a, o = n[a];
                    o && (e += o)
                }
                return e
            }
        },
        268704: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return r
                }
            });
            var n = d("548142");

            function r(t) {
                for (var e = "", d = t.split(""), r = Array.isArray(d), i = 0, d = r ? d : d[Symbol.iterator]();;) {
                    if (r) {
                        if (i >= d.length) break;
                        a = d[i++]
                    } else {
                        if ((i = d.next()).done) break;
                        a = i.value
                    }
                    var a, o = a;
                    e += function(t, e) {
                        if ("+" === t) {
                            if (e) return;
                            return "+"
                        }
                        return (0, n.parseDigit)(t)
                    }(o, e) || ""
                }
                return e
            }
        },
        258005: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return o
                }
            });
            var n = d("755614"),
                r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                i = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var d = arguments[e];
                        for (var n in d) Object.prototype.hasOwnProperty.call(d, n) && (t[n] = d[n])
                    }
                    return t
                },
                a = function(t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return function(t, e) {
                        var d = [],
                            n = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var a, o = t[Symbol.iterator](); !(n = (a = o.next()).done) && (d.push(a.value), !e || d.length !== e); n = !0);
                        } catch (t) {
                            r = !0, i = t
                        } finally {
                            try {
                                !n && o.return && o.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                        return d
                    }(t, e);
                    throw TypeError("Invalid attempt to destructure non-iterable instance")
                };

            function o() {
                var t = function(t) {
                        var e = a(Array.prototype.slice.call(t), 4),
                            d = e[0],
                            n = e[1],
                            r = e[2],
                            o = e[3],
                            u = void 0,
                            s = void 0,
                            l = void 0;
                        if ("string" == typeof d) u = d;
                        else throw TypeError("A text for parsing must be a string.");
                        if (n && "string" != typeof n) {
                            if ($(n)) r ? (s = n, l = r) : l = n;
                            else throw Error("Invalid second argument: " + n)
                        } else o ? (s = r, l = o) : (s = void 0, l = r), n && (s = i({
                            defaultCountry: n
                        }, s));
                        return {
                            text: u,
                            options: s,
                            metadata: l
                        }
                    }(arguments),
                    e = t.text,
                    d = t.options,
                    r = t.metadata;
                return (0, n.default)(e, d, r)
            }
            var $ = function(t) {
                return (void 0 === t ? "undefined" : r(t)) === "object"
            }
        },
        755614: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return i
                }
            });
            var n = d("452234"),
                r = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var d = arguments[e];
                        for (var n in d) Object.prototype.hasOwnProperty.call(d, n) && (t[n] = d[n])
                    }
                    return t
                };

            function i(t, e, d) {
                return (0, n.default)(t, r({}, e, {
                    v2: !0
                }), d)
            }
        },
        452234: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return v
                },
                extract_formatted_phone_number: function() {
                    return g
                },
                strip_national_prefix_and_carrier_code: function() {
                    return C
                },
                find_country_code: function() {
                    return _
                },
                extractCountryCallingCode: function() {
                    return b
                }
            });
            var n = d("816637"),
                r = d("612926"),
                i = d("243532"),
                a = d("902090"),
                o = d("398975"),
                $ = d("746384"),
                u = d("268704"),
                s = d("387036"),
                l = d("562230"),
                c = d("698295"),
                f = d("205545"),
                h = d("64111"),
                p = d("14440"),
                m = RegExp("[" + n.PLUS_CHARS + n.VALID_DIGITS + "]"),
                y = RegExp("[^" + n.VALID_DIGITS + "]+$");

            function v(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    d = arguments[2];
                if (d = new a.default(d), e.defaultCountry && !d.hasCountry(e.defaultCountry)) {
                    if (e.v2) throw new i.default("INVALID_COUNTRY");
                    throw Error("Unknown country: " + e.defaultCountry)
                }
                var f = function(t, e) {
                        if (t && 0 === t.indexOf("tel:")) return (0, h.parseRFC3966)(t);
                        var d = g(t, e);
                        if (!d || !(0, o.default)(d)) return {};
                        var n = (0, $.extractExtension)(d);
                        return n.ext ? n : {
                            number: d
                        }
                    }(t, e.v2),
                    m = f.number,
                    y = f.ext;
                if (!m) {
                    if (e.v2) throw new i.default("NOT_A_NUMBER");
                    return {}
                }
                var v = function(t, e, d) {
                        var n = b(t, e, d.metadata),
                            i = n.countryCallingCode,
                            a = n.number;
                        if (!a) return {
                            countryCallingCode: i
                        };
                        var o = void 0;
                        if (i) d.chooseCountryByCountryCallingCode(i);
                        else {
                            if (!e) return {};
                            d.country(e), o = e, i = (0, s.default)(e, d.metadata)
                        }
                        var $ = function(t, e) {
                                var d = (0, u.default)(t),
                                    n = void 0,
                                    i = C(d, e),
                                    a = i.number,
                                    o = i.carrierCode;
                                if (e.possibleLengths()) switch ((0, l.checkNumberLengthForType)(a, void 0, e)) {
                                    case "TOO_SHORT":
                                    case "INVALID_LENGTH":
                                        break;
                                    default:
                                        d = a, n = o
                                } else(0, r.matchesEntirely)(d, e.nationalNumberPattern()) && !(0, r.matchesEntirely)(a, e.nationalNumberPattern()) || (d = a, n = o);
                                return {
                                    national_number: d,
                                    carrier_code: n
                                }
                            }(a, d),
                            c = $.national_number,
                            f = $.carrier_code,
                            h = _(i, c, d);
                        return h && (o = h, d.country(o)), {
                            country: o,
                            countryCallingCode: i,
                            national_number: c,
                            carrierCode: f
                        }
                    }(m, e.defaultCountry, d),
                    x = v.country,
                    N = v.national_number,
                    I = v.countryCallingCode,
                    E = v.carrierCode;
                if (!d.selectedCountry()) {
                    if (e.v2) throw new i.default("INVALID_COUNTRY");
                    return {}
                }
                if (N.length < n.MIN_LENGTH_FOR_NSN) {
                    if (e.v2) throw new i.default("TOO_SHORT");
                    return {}
                }
                if (N.length > n.MAX_LENGTH_FOR_NSN) {
                    if (e.v2) throw new i.default("TOO_LONG");
                    return {}
                }
                if (e.v2) {
                    var A = new p.default(I, N, d.metadata);
                    return x && (A.country = x), E && (A.carrierCode = E), y && (A.ext = y), A
                }
                var T = !!(x && (0, r.matchesEntirely)(N, d.nationalNumberPattern()));
                return e.extended ? {
                    country: x,
                    countryCallingCode: I,
                    carrierCode: E,
                    valid: T,
                    possible: !!T || !0 === e.extended && d.possibleLengths() && (0, c.is_possible_number)(N, void 0 !== I, d),
                    phone: N,
                    ext: y
                } : T ? function(t, e, d) {
                    var n = {
                        country: t,
                        phone: e
                    };
                    return d && (n.ext = d), n
                }(x, N, y) : {}
            }

            function g(t, e) {
                if (!!t) {
                    if (t.length > 250) {
                        if (e) throw new i.default("TOO_LONG");
                        return
                    }
                    var d = t.search(m);
                    if (!(d < 0)) return t.slice(d).replace(y, "")
                }
            }

            function C(t, e) {
                if (!t || !e.nationalPrefixForParsing()) return {
                    number: t
                };
                var d = RegExp("^(?:" + e.nationalPrefixForParsing() + ")"),
                    n = d.exec(t);
                if (!n) return {
                    number: t
                };
                var r = void 0,
                    i = n.length - 1;
                if (e.nationalPrefixTransformRule() && n[i]) r = t.replace(d, e.nationalPrefixTransformRule());
                else {
                    var a = n[0];
                    r = t.slice(a.length)
                }
                var o = void 0;
                return i > 0 && (o = n[1]), {
                    number: r,
                    carrierCode: o
                }
            }

            function _(t, e, d) {
                var n = d.countryCallingCodes()[t];
                return 1 === n.length ? n[0] : function(t, e, d) {
                    d = new a.default(d);
                    for (var n = t, r = Array.isArray(n), i = 0, n = r ? n : n[Symbol.iterator]();;) {
                        if (r) {
                            if (i >= n.length) break;
                            o = n[i++]
                        } else {
                            if ((i = n.next()).done) break;
                            o = i.value
                        }
                        var o, $ = o;
                        if (d.country($), d.leadingDigits()) {
                            if (e && 0 === e.search(d.leadingDigits())) return $
                        } else if ((0, l.default)({
                                phone: e,
                                country: $
                            }, void 0, d.metadata)) return $
                    }
                }(n, e, d.metadata)
            }

            function b(t, e, d) {
                if (!(t = (0, u.default)(t))) return {};
                if ("+" !== t[0]) {
                    var r = (0, f.stripIDDPrefix)(t, e, d);
                    if (!r || r === t) return {
                        number: t
                    };
                    t = "+" + r
                }
                if ("0" === t[1]) return {};
                d = new a.default(d);
                for (var i = 2; i - 1 <= n.MAX_LENGTH_COUNTRY_CODE && i <= t.length;) {
                    var o = t.slice(1, i);
                    if (d.countryCallingCodes()[o]) return {
                        countryCallingCode: o,
                        number: t.slice(i)
                    };
                    i++
                }
                return {}
            }
        },
        688271: function(t, e, d) {
            "use strict";

            function n(t, e) {
                for (var d = t.split("."), n = e.split("."), r = 0; r < 3; r++) {
                    var i = Number(d[r]),
                        a = Number(n[r]);
                    if (i > a) return 1;
                    if (a > i) return -1;
                    if (!isNaN(i) && isNaN(a)) return 1;
                    if (isNaN(i) && !isNaN(a)) return -1
                }
                return 0
            }
            d.r(e), d.d(e, {
                default: function() {
                    return n
                }
            })
        },
        612926: function(t, e, d) {
            "use strict";

            function n() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    e = arguments[1];
                return RegExp("^(?:" + e + ")$").test(t)
            }

            function r(t, e) {
                for (var d = t.slice(), n = e, r = Array.isArray(n), i = 0, n = r ? n : n[Symbol.iterator]();;) {
                    if (r) {
                        if (i >= n.length) break;
                        a = n[i++]
                    } else {
                        if ((i = n.next()).done) break;
                        a = i.value
                    }
                    var a, o = a;
                    0 > t.indexOf(o) && d.push(o)
                }
                return d.sort(function(t, e) {
                    return t - e
                })
            }
            d.r(e), d.d(e, {
                matchesEntirely: function() {
                    return n
                },
                mergeArrays: function() {
                    return r
                }
            })
        },
        253061: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return a
                }
            });
            var n = d("902090"),
                r = d("612926"),
                i = d("562230");

            function a(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    d = arguments[2];
                if (d = new n.default(d), !t.country) return !1;
                if (!d.hasCountry(t.country)) throw Error("Unknown country: " + t.country);
                if (d.country(t.country), d.hasTypes()) return void 0 !== (0, i.default)(t, e, d.metadata);
                var a = e.v2 ? t.nationalNumber : t.phone;
                return (0, r.matchesEntirely)(a, d.nationalNumberPattern())
            }
        },
        227385: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                parsePhoneNumber: function() {
                    return $
                }
            });
            var n = d("150788"),
                r = d("258005"),
                i = d("213854"),
                a = d("696167"),
                o = d("242731");

            function $() {
                var t = Array.prototype.slice.call(arguments);
                return t.push(n.default), r.default.apply(this, t)
            }

            function u(t, e) {
                i.PhoneNumberSearch.call(this, t, e, n.default)
            }

            function s(t, e) {
                a.default.call(this, t, e, n.default)
            }

            function l(t) {
                o.default.call(this, t, n.default)
            }
            u.prototype = Object.create(i.PhoneNumberSearch.prototype, {}), u.prototype.constructor = u, s.prototype = Object.create(a.default.prototype, {}), s.prototype.constructor = s, l.prototype = Object.create(o.default.prototype, {}), l.prototype.constructor = l
        },
        150788: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return n
                }
            });
            var n = {
                version: "1.7.26",
                country_calling_codes: {
                    1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
                    7: ["RU", "KZ"],
                    20: ["EG"],
                    27: ["ZA"],
                    30: ["GR"],
                    31: ["NL"],
                    32: ["BE"],
                    33: ["FR"],
                    34: ["ES"],
                    36: ["HU"],
                    39: ["IT", "VA"],
                    40: ["RO"],
                    41: ["CH"],
                    43: ["AT"],
                    44: ["GB", "GG", "IM", "JE"],
                    45: ["DK"],
                    46: ["SE"],
                    47: ["NO", "SJ"],
                    48: ["PL"],
                    49: ["DE"],
                    51: ["PE"],
                    52: ["MX"],
                    53: ["CU"],
                    54: ["AR"],
                    55: ["BR"],
                    56: ["CL"],
                    57: ["CO"],
                    58: ["VE"],
                    60: ["MY"],
                    61: ["AU", "CC", "CX"],
                    62: ["ID"],
                    63: ["PH"],
                    64: ["NZ"],
                    65: ["SG"],
                    66: ["TH"],
                    81: ["JP"],
                    82: ["KR"],
                    84: ["VN"],
                    86: ["CN"],
                    90: ["TR"],
                    91: ["IN"],
                    92: ["PK"],
                    93: ["AF"],
                    94: ["LK"],
                    95: ["MM"],
                    98: ["IR"],
                    211: ["SS"],
                    212: ["MA", "EH"],
                    213: ["DZ"],
                    216: ["TN"],
                    218: ["LY"],
                    220: ["GM"],
                    221: ["SN"],
                    222: ["MR"],
                    223: ["ML"],
                    224: ["GN"],
                    225: ["CI"],
                    226: ["BF"],
                    227: ["NE"],
                    228: ["TG"],
                    229: ["BJ"],
                    230: ["MU"],
                    231: ["LR"],
                    232: ["SL"],
                    233: ["GH"],
                    234: ["NG"],
                    235: ["TD"],
                    236: ["CF"],
                    237: ["CM"],
                    238: ["CV"],
                    239: ["ST"],
                    240: ["GQ"],
                    241: ["GA"],
                    242: ["CG"],
                    243: ["CD"],
                    244: ["AO"],
                    245: ["GW"],
                    246: ["IO"],
                    247: ["AC"],
                    248: ["SC"],
                    249: ["SD"],
                    250: ["RW"],
                    251: ["ET"],
                    252: ["SO"],
                    253: ["DJ"],
                    254: ["KE"],
                    255: ["TZ"],
                    256: ["UG"],
                    257: ["BI"],
                    258: ["MZ"],
                    260: ["ZM"],
                    261: ["MG"],
                    262: ["RE", "YT"],
                    263: ["ZW"],
                    264: ["NA"],
                    265: ["MW"],
                    266: ["LS"],
                    267: ["BW"],
                    268: ["SZ"],
                    269: ["KM"],
                    290: ["SH", "TA"],
                    291: ["ER"],
                    297: ["AW"],
                    298: ["FO"],
                    299: ["GL"],
                    350: ["GI"],
                    351: ["PT"],
                    352: ["LU"],
                    353: ["IE"],
                    354: ["IS"],
                    355: ["AL"],
                    356: ["MT"],
                    357: ["CY"],
                    358: ["FI", "AX"],
                    359: ["BG"],
                    370: ["LT"],
                    371: ["LV"],
                    372: ["EE"],
                    373: ["MD"],
                    374: ["AM"],
                    375: ["BY"],
                    376: ["AD"],
                    377: ["MC"],
                    378: ["SM"],
                    380: ["UA"],
                    381: ["RS"],
                    382: ["ME"],
                    383: ["XK"],
                    385: ["HR"],
                    386: ["SI"],
                    387: ["BA"],
                    389: ["MK"],
                    420: ["CZ"],
                    421: ["SK"],
                    423: ["LI"],
                    500: ["FK"],
                    501: ["BZ"],
                    502: ["GT"],
                    503: ["SV"],
                    504: ["HN"],
                    505: ["NI"],
                    506: ["CR"],
                    507: ["PA"],
                    508: ["PM"],
                    509: ["HT"],
                    590: ["GP", "BL", "MF"],
                    591: ["BO"],
                    592: ["GY"],
                    593: ["EC"],
                    594: ["GF"],
                    595: ["PY"],
                    596: ["MQ"],
                    597: ["SR"],
                    598: ["UY"],
                    599: ["CW", "BQ"],
                    670: ["TL"],
                    672: ["NF"],
                    673: ["BN"],
                    674: ["NR"],
                    675: ["PG"],
                    676: ["TO"],
                    677: ["SB"],
                    678: ["VU"],
                    679: ["FJ"],
                    680: ["PW"],
                    681: ["WF"],
                    682: ["CK"],
                    683: ["NU"],
                    685: ["WS"],
                    686: ["KI"],
                    687: ["NC"],
                    688: ["TV"],
                    689: ["PF"],
                    690: ["TK"],
                    691: ["FM"],
                    692: ["MH"],
                    800: ["001"],
                    808: ["001"],
                    850: ["KP"],
                    852: ["HK"],
                    853: ["MO"],
                    855: ["KH"],
                    856: ["LA"],
                    870: ["001"],
                    878: ["001"],
                    880: ["BD"],
                    881: ["001"],
                    882: ["001"],
                    883: ["001"],
                    886: ["TW"],
                    888: ["001"],
                    960: ["MV"],
                    961: ["LB"],
                    962: ["JO"],
                    963: ["SY"],
                    964: ["IQ"],
                    965: ["KW"],
                    966: ["SA"],
                    967: ["YE"],
                    968: ["OM"],
                    970: ["PS"],
                    971: ["AE"],
                    972: ["IL"],
                    973: ["BH"],
                    974: ["QA"],
                    975: ["BT"],
                    976: ["MN"],
                    977: ["NP"],
                    979: ["001"],
                    992: ["TJ"],
                    993: ["TM"],
                    994: ["AZ"],
                    995: ["GE"],
                    996: ["KG"],
                    998: ["UZ"]
                },
                countries: {
                    AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
                    AD: ["376", "00", "(?:1|6\\d)\\d{7}|[136-9]\\d{5}", [6, 8, 9],
                        [
                            ["(\\d{3})(\\d{3})", "$1 $2", ["[136-9]"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["1"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                        ]
                    ],
                    AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"],
                            ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]
                        ], "0"
                    ],
                    AF: ["93", "00", "[2-7]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
                        ], "0"
                    ],
                    AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([457]\\d{6})$", "268$1", 0, "268"],
                    AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2457]\\d{6})$", "264$1", 0, "264"],
                    AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9],
                        [
                            ["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]
                        ], "0"
                    ],
                    AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8],
                        [
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]
                        ], "0"
                    ],
                    AO: ["244", "00", "[29]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]
                        ]
                    ],
                    AR: ["54", "00", "11\\d{8}|(?:[2368]|9\\d)\\d{9}", [10, 11],
                        [
                            ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"],
                            ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]
                        ], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"
                    ],
                    AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "1|([267]\\d{6})$", "684$1", 0, "684"],
                    AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                        [
                            ["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
                            ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
                            ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
                            ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"],
                            ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]
                        ], "0"
                    ],
                    AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7,8}|8[0-24-9]\\d{7})|(?:[2-478]\\d\\d|550)\\d{6}|1\\d{4,7}", [5, 6, 7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]
                        ], "0", 0, "0|(183[12])", 0, 0, 0, [
                            ["(?:[237]\\d{5}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|(?:[6-8]\\d{3}|9(?:[02-9]\\d\\d|1(?:[0-57-9]\\d|6[0135-9])))\\d))\\d{3}", [9]],
                            ["483[0-3]\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-2457-9]|9[0-27-9])\\d{6}", [9]],
                            ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                            ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["16\\d{3,7}", [5, 6, 7, 8, 9]],
                            ["(?:14(?:5(?:1[0458]|[23][458])|71\\d)|550\\d\\d)\\d{4}", [9]],
                            ["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", [6, 8, 10]]
                        ], "0011"
                    ],
                    AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]
                        ]
                    ],
                    AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|(?:[147]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10], 0, "0", 0, 0, 0, 0, "18", 0, "00"],
                    AZ: ["994", "00", "(?:365\\d{3}|900200)\\d{3}|(?:[12457]\\d|60|88)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|365", "[12]|365", "[12]|365(?:[0-46-9]|5[0-35-9])"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[3-8]"], "0$1"]
                        ], "0"
                    ],
                    BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]
                        ], "0"
                    ],
                    BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "246$1", 0, "246"],
                    BD: ["880", "00", "[13469]\\d{9}|8[0-79]\\d{7,8}|[2-7]\\d{8}|[2-9]\\d{7}|[3-689]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-7]|[459]1"], "0$1"],
                            ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"],
                            ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]"], "0$1"],
                            ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]
                        ], "0"
                    ],
                    BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]
                        ], "0"
                    ],
                    BF: ["226", "00", "[025-7]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]
                        ]
                    ],
                    BG: ["359", "00", "[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9],
                        [
                            ["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
                        ], "0"
                    ],
                    BH: ["973", "00", "[136-9]\\d{7}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[047]"]]
                        ]
                    ],
                    BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]
                        ]
                    ],
                    BJ: ["229", "00", "[2689]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"]]
                        ]
                    ],
                    BL: ["590", "00", "(?:590|69\\d)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [
                        ["590(?:2[7-9]|5[12]|87)\\d{4}"],
                        ["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"]
                    ]],
                    BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-8]\\d{6})$", "441$1", 0, "441"],
                    BN: ["673", "00", "[2-578]\\d{6}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]
                        ]
                    ],
                    BO: ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9],
                        [
                            ["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]],
                            ["(\\d{8})", "$1", ["[67]"]],
                            ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]
                        ], "0", 0, "0(1\\d)?"
                    ],
                    BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"],
                    BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11],
                        [
                            ["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]],
                            ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"],
                            ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]
                        ], "0", 0, "0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"
                    ],
                    BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([3-8]\\d{6})$", "242$1", 0, "242"],
                    BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]
                        ]
                    ],
                    BW: ["267", "00", "90\\d{5}|(?:[2-6]|7\\d)\\d{6}", [7, 8],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["90"]],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-6]"]],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]]
                        ]
                    ],
                    BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"],
                            ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
                            ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"],
                            ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]
                        ], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"
                    ],
                    BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
                            ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]
                        ]
                    ],
                    CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}", [10], 0, "1", 0, 0, 0, 0, 0, [
                        ["(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}"],
                        [""],
                        ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                        ["900[2-9]\\d{6}"],
                        ["(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}"], 0, 0, 0, ["600[2-9]\\d{6}"]
                    ]],
                    CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d|8[0-24-9])\\d{7}|(?:[148]\\d\\d|550)\\d{6}|1\\d{5,7}", [6, 7, 8, 9, 10], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [
                        ["8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]],
                        ["483[0-3]\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-2457-9]|9[0-27-9])\\d{6}", [9]],
                        ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                        ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["(?:14(?:5(?:1[0458]|[23][458])|71\\d)|550\\d\\d)\\d{4}", [9]],
                        ["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", [6, 8, 10]]
                    ], "0011"],
                    CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                            ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]
                        ], "0"
                    ],
                    CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]
                        ]
                    ],
                    CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["801"]],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]
                        ]
                    ],
                    CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]
                        ], "0"
                    ],
                    CI: ["225", "00", "[02-9]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[02-9]"]]
                        ]
                    ],
                    CK: ["682", "00", "[2-8]\\d{4}", [5],
                        [
                            ["(\\d{2})(\\d{3})", "$1 $2", ["[2-8]"]]
                        ]
                    ],
                    CL: ["56", "(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11],
                        [
                            ["(\\d{5})(\\d{4})", "$1 $2", ["21"], "($1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[23]"], "($1)"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                            ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]
                        ]
                    ],
                    CM: ["237", "00", "(?:[26]\\d\\d|88)\\d{6}", [8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]],
                            ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]]
                        ]
                    ],
                    CN: ["86", "00|1(?:[12]\\d|79|9[0235-7])\\d\\d00", "1[1279]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-68]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "(?:10|2[0-57-9])(?:100|9[56])"], "0$1"],
                            ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1],
                            ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]],
                            ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]
                        ], "0", 0, "0|(1(?:[12]\\d|79|9[0235-7])\\d\\d)", 0, 0, 0, 0, "00"
                    ],
                    CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:1\\d|3)\\d{9}|[124-8]\\d{7}", [8, 10, 11],
                        [
                            ["(\\d)(\\d{7})", "$1 $2", ["1[2-79]|[25-8]|(?:18|4)[2-9]"], "($1)"],
                            ["(\\d{3})(\\d{7})", "$1 $2", ["3"]],
                            ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1(?:80|9)", "1(?:800|9)"], "0$1", 0, "$1 $2 $3"]
                        ], "0", 0, "0([3579]|4(?:[14]4|56))?"
                    ],
                    CR: ["506", "00", "(?:8\\d|90)\\d{8}|[24-8]\\d{7}", [8, 10],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[24-7]|8[3-9]"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]
                        ], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"
                    ],
                    CU: ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|5\\d{7}", [6, 7, 8],
                        [
                            ["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"],
                            ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
                            ["(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"]
                        ], "0"
                    ],
                    CV: ["238", "0", "[2-59]\\d{6}", [7],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-59]"]]
                        ]
                    ],
                    CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]
                        ], 0, 0, 0, 0, 0, "[69]"
                    ],
                    CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d|8[0-24-9])\\d{7}|(?:[148]\\d\\d|550)\\d{6}|1\\d{5,7}", [6, 7, 8, 9, 10], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [
                        ["8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]],
                        ["483[0-3]\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-2457-9]|9[0-27-9])\\d{6}", [9]],
                        ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                        ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["(?:14(?:5(?:1[0458]|[23][458])|71\\d)|550\\d\\d)\\d{4}", [9]],
                        ["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", [6, 8, 10]]
                    ], "0011"],
                    CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]
                        ]
                    ],
                    CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
                            ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
                            ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                        ]
                    ],
                    DE: ["49", "00", "[2579]\\d{5,14}|49(?:[05]\\d{10}|[46][1-8]\\d{4,9})|49(?:[0-25]\\d|3[1-689]|7[1-7])\\d{4,8}|49(?:[0-2579]\\d|[34][1-9]|6[0-8])\\d{3}|49\\d{3,4}|(?:1|[368]\\d|4[0-8])\\d{3,13}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                        [
                            ["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
                            ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"],
                            ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
                            ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"],
                            ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
                            ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
                            ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
                            ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
                            ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                            ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
                            ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"],
                            ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
                            ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"],
                            ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]
                        ], "0"
                    ],
                    DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]
                        ]
                    ],
                    DK: ["45", "00", "[2-9]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]
                        ]
                    ],
                    DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "767$1", 0, "767|8001"],
                    DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8[024]9"],
                    DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]
                        ], "0"
                    ],
                    EC: ["593", "00", "1800\\d{6,7}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]
                        ], "0"
                    ],
                    EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d\\d|900)\\d{4}", [7, 8, 10],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]],
                            ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-4])", "[45]|8(?:00[1-9]|[1-4])"]],
                            ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["80"]]
                        ]
                    ],
                    EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10],
                        [
                            ["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
                            ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[189]"], "0$1"]
                        ], "0"
                    ],
                    EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"],
                    ER: ["291", "00", "[178]\\d{6}", [7],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]
                        ], "0"
                    ],
                    ES: ["34", "00", "(?:51|[6-9]\\d)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]
                        ]
                    ],
                    ET: ["251", "00", "(?:11|[2-59]\\d)\\d{7}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-59]"], "0$1"]
                        ], "0"
                    ],
                    FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}|[1-35689]\\d{4}", [5, 6, 7, 8, 9, 10],
                        [
                            ["(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"],
                            ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[12]0|7)0|[368]"], "0$1"],
                            ["(\\d{2})(\\d{4,8})", "$1 $2", ["[12457]"], "0$1"]
                        ], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"
                    ],
                    FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    FK: ["500", "00", "[2-7]\\d{4}", [5]],
                    FM: ["691", "00", "[39]\\d{6}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[39]"]]
                        ]
                    ],
                    FO: ["298", "00", "(?:[2-8]\\d|90)\\d{4}", [6],
                        [
                            ["(\\d{6})", "$1", ["[2-9]"]]
                        ], 0, 0, "(10(?:01|[12]0|88))"
                    ],
                    FR: ["33", "00", "[1-9]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"],
                            ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]
                        ], "0"
                    ],
                    GA: ["241", "00", "(?:0\\d|[2-7])\\d{6}", [7, 8],
                        [
                            ["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]
                        ]
                    ],
                    GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"],
                            ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"],
                            ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[024-9])", "[25]|7(?:0|6(?:[04-9]|2[356]))"], "0$1"],
                            ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [
                            ["(?:1(?:(?:1(?:3[0-58]|4[0-5]|5[0-26-9]|6[0-4]|[78][0-49])|3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|80[04589])))|2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d|7(?:(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))\\d|6888[2-46-8]))\\d\\d", [9, 10]],
                            ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]],
                            ["80[08]\\d{7}|800\\d{6}|8001111"],
                            ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]],
                            ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
                            ["76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", [10]],
                            ["56\\d{8}", [10]]
                        ], 0, " x"
                    ],
                    GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "473$1", 0, "473"],
                    GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]
                        ], "0"
                    ],
                    GF: ["594", "00", "[56]94\\d{6}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]
                        ], "0"
                    ],
                    GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "0|([25-9]\\d{5})$", "1481$1", 0, 0, [
                        ["1481[25-9]\\d{5}", [10]],
                        ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]],
                        ["80[08]\\d{7}|800\\d{6}|8001111"],
                        ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]],
                        ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
                        ["76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", [10]],
                        ["56\\d{8}", [10]]
                    ]],
                    GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]
                        ], "0"
                    ],
                    GI: ["350", "00", "(?:[25]\\d\\d|629)\\d{5}", [8],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["2"]]
                        ]
                    ],
                    GL: ["299", "00", "(?:19|[2-689]\\d)\\d{4}", [6],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-689]"]]
                        ]
                    ],
                    GM: ["220", "00", "[2-9]\\d{6}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                        ]
                    ],
                    GN: ["224", "00", "(?:30|6\\d\\d|722)\\d{6}", [8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]
                        ]
                    ],
                    GP: ["590", "00", "(?:590|69\\d)\\d{6}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [
                            ["590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}"],
                            ["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"]
                        ]
                    ],
                    GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]
                        ]
                    ],
                    GR: ["30", "00", "(?:[268]\\d|[79]0)\\d{8}", [10],
                        [
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
                            ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]]
                        ]
                    ],
                    GT: ["502", "00", "(?:1\\d{3}|[2-7])\\d{7}", [8, 11],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                        ]
                    ],
                    GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "1|([3-9]\\d{6})$", "671$1", 0, "671"],
                    GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["40"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]
                        ]
                    ],
                    GY: ["592", "001", "(?:862\\d|9008)\\d{3}|(?:[2-46]\\d|77)\\d{5}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]
                        ]
                    ],
                    HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}", [5, 6, 7, 8, 9, 11],
                        [
                            ["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                            ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11],
                        [
                            ["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]
                        ]
                    ],
                    HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
                        ], "0"
                    ],
                    HT: ["509", "00", "[2-489]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-489]"]]
                        ]
                    ],
                    HU: ["36", "00", "[2357]\\d{8}|[1-9]\\d{7}", [8, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57-9]"], "06 $1"]
                        ], "06"
                    ],
                    ID: ["62", "00[189]", "(?:(?:007803|8\\d{4})\\d|[1-36])\\d{6}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
                            ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
                            ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
                            ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
                            ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
                            ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
                            ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"],
                            ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]
                        ], "0"
                    ],
                    IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"],
                            ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
                            ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"]
                        ], "0"
                    ],
                    IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{4})(\\d{3})", "$1-$2", ["125"]],
                            ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
                            ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]],
                            ["(\\d{4})(\\d{6})", "$1-$2", ["159"]],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
                            ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]
                        ], "0"
                    ],
                    IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([5-8]\\d{5})$", "1624$1", 0, "74576|(?:16|7[56])24"],
                    IN: ["91", "00", "(?:00800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13],
                        [
                            ["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1],
                            ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|(?:55|61)2|7(?:31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:1(?:29|60|8[06])|261|552|788[01])[2-7]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])"], "0$1", 1],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|[4-8])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|3179)|807(?:1|9[1-3])|(?:1552|7(?:28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1],
                            ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1],
                            ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1],
                            ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]
                        ], "0"
                    ],
                    IO: ["246", "00", "3\\d{6}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["3"]]
                        ]
                    ],
                    IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                        ], "0"
                    ],
                    IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10],
                        [
                            ["(\\d{4,5})", "$1", ["96"], "0$1"],
                            ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]
                        ], "0"
                    ],
                    IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    IT: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
                            ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],
                            ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["894"]],
                            ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1[4679]|[38]"]],
                            ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]],
                            ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
                            ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]
                        ], 0, 0, 0, 0, 0, 0, [
                            ["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],
                            ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]],
                            ["80(?:0\\d{3}|3)\\d{3}", [6, 9]],
                            ["(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}", [6, 8, 9, 10]],
                            ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]],
                            ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]
                        ]
                    ],
                    JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([0-24-8]\\d{5})$", "1534$1", 0, 0, [
                        ["1534[0-24-8]\\d{5}"],
                        ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"],
                        ["80(?:07(?:35|81)|8901)\\d{4}"],
                        ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],
                        ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],
                        ["76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}"],
                        ["56\\d{8}"]
                    ]],
                    JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"],
                    JO: ["962", "00", "900\\d{5}|(?:(?:[268]|7\\d)\\d|32|53)\\d{6}", [8, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
                            ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                        ], "0"
                    ],
                    JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                            ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[279]|49|6[0-24-689]|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|6(?:[0-24]|5[0-3589]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3[3-8]|5[2-9])", "[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3(?:[3-6][2-9]|7|8[2-5])|5[2-9])"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]|80"], "0$1"]
                        ], "0"
                    ],
                    KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                        ], "0"
                    ],
                    KG: ["996", "00", "8\\d{9}|(?:[235-8]\\d|99)\\d{7}", [9, 10],
                        [
                            ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0"
                    ],
                    KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                        ], "0"
                    ],
                    KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"],
                    KM: ["269", "00", "[3478]\\d{6}", [7],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]
                        ]
                    ],
                    KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "869$1", 0, "869"],
                    KP: ["850", "00|99", "85\\d{6}|(?:19\\d|2)\\d{7}", [8, 10],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]
                        ], "0"
                    ],
                    KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14],
                        [
                            ["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"],
                            ["(\\d{4})(\\d{4})", "$1-$2", ["1"]],
                            ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"],
                            ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                            ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]
                        ], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"
                    ],
                    KW: ["965", "00", "(?:18|[2569]\\d\\d)\\d{5}", [7, 8],
                        [
                            ["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[25]"]]
                        ]
                    ],
                    KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "345$1", 0, "345"],
                    KZ: ["7", "810", "33622\\d{5}|(?:7\\d|80)\\d{8}", [10], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"],
                    LA: ["856", "00", "(?:2\\d|3)\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2"], "0$1"]
                        ], "0"
                    ],
                    LB: ["961", "00", "[7-9]\\d{7}|[13-9]\\d{6}", [7, 8],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"]]
                        ], "0"
                    ],
                    LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "758$1", 0, "758"],
                    LI: ["423", "00", "90\\d{5}|(?:[2378]|6\\d\\d)\\d{6}", [7, 9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[237-9]"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                        ], "0", 0, "0|(10(?:01|20|66))"
                    ],
                    LK: ["94", "00", "(?:[1-7]\\d|[89]1)\\d{7}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]
                        ], "0"
                    ],
                    LR: ["231", "00", "(?:2|33|5\\d|77|88)\\d{7}|[45]\\d{6}", [7, 8, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[45]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3578]"], "0$1"]
                        ], "0"
                    ],
                    LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]
                        ]
                    ],
                    LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-79]"], "(8-$1)", 1],
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]
                        ], "8", 0, "[08]"
                    ],
                    LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]],
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]
                        ], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"
                    ],
                    LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]
                        ]
                    ],
                    LY: ["218", "00", "(?:[2569]\\d|71)\\d{7}", [9],
                        [
                            ["(\\d{2})(\\d{7})", "$1-$2", ["[25-79]"], "0$1"]
                        ], "0"
                    ],
                    MA: ["212", "00", "[5-8]\\d{8}", [9],
                        [
                            ["(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"],
                            ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"],
                            ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [
                            ["5(?:29|38)[89]0\\d{4}|5(?:2(?:[015-7]\\d|2[2-9]|3[2-57]|4[2-46-8]|8[235-7]|90)|3(?:[0-4]\\d|[57][2-9]|6[2-8]|80|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"],
                            ["692[12]\\d{5}|(?:6(?:[0-7]\\d|8[0-247-9]|9[013-9])|7(?:0[06-8]|6[1267]|7[0-27]))\\d{6}"],
                            ["80\\d{7}"],
                            ["89\\d{7}"], 0, 0, 0, 0, ["5924[0-2]\\d{4}"]
                        ]
                    ],
                    MC: ["377", "00", "870\\d{5}|(?:[349]|6\\d)\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"]],
                            ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]
                        ], "0"
                    ],
                    MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]
                        ], "0"
                    ],
                    ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]
                        ], "0"
                    ],
                    MF: ["590", "00", "(?:590|69\\d)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [
                        ["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"],
                        ["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"]
                    ]],
                    MG: ["261", "00", "[23]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                        ], "0", 0, "0|([24-9]\\d{6})$", "20$1"
                    ],
                    MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]
                        ], "1"
                    ],
                    MK: ["389", "00", "[2-578]\\d{7}", [8],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
                            ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]
                        ], "0"
                    ],
                    ML: ["223", "00", "(?:[246-9]\\d|50)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]
                        ]
                    ],
                    MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10],
                        [
                            ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"],
                            ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]
                        ], "0"
                    ],
                    MN: ["976", "001", "[12]\\d{7,9}|[57-9]\\d{7}", [8, 9, 10],
                        [
                            ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"]],
                            ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
                            ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"],
                            ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]
                        ], "0"
                    ],
                    MO: ["853", "00", "(?:28|[68]\\d)\\d{6}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]
                        ]
                    ],
                    MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "670$1", 0, "670"],
                    MQ: ["596", "00", "(?:596|69\\d)\\d{6}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]
                        ], "0"
                    ],
                    MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]
                        ]
                    ],
                    MS: ["1", "011", "66449\\d{5}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|(4\\d{6})$", "664$1", 0, "664"],
                    MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]
                        ]
                    ],
                    MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[2-468]|5\\d)\\d{6}", [7, 8],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["5"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "020"
                    ],
                    MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9[13-9]"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    MW: ["265", "00", "1\\d{6}(?:\\d{2})?|(?:[23]1|77|88|99)\\d{7}", [7, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[17-9]"], "0$1"]
                        ], "0"
                    ],
                    MX: ["52", "0[09]", "(?:1(?:[01467]\\d|[2359][1-9]|8[1-79])|[2-9]\\d)\\d{8}", [10, 11],
                        [
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1],
                            ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]
                        ], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, 0, "00"
                    ],
                    MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[37][2-9]|8[1-9])|8"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]
                        ], "0"
                    ],
                    MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-7]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                        ]
                    ],
                    NA: ["264", "00", "[68]\\d{7,8}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
                        ], "0"
                    ],
                    NC: ["687", "00", "[2-57-9]\\d{5}", [6],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-57-9]"]]
                        ]
                    ],
                    NE: ["227", "00", "[0289]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[01]"]]
                        ]
                    ],
                    NF: ["672", "00", "[13]\\d{5}", [6],
                        [
                            ["(\\d{2})(\\d{4})", "$1 $2", ["1"]],
                            ["(\\d)(\\d{5})", "$1 $2", ["3"]]
                        ], 0, 0, "([0-258]\\d{4})$", "3$1"
                    ],
                    NG: ["234", "009", "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", [7, 8, 10, 11, 12, 13, 14],
                        [
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"],
                            ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"],
                            ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]
                        ], "0"
                    ],
                    NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]
                        ]
                    ],
                    NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|[89]\\d{6,9}|1\\d{4,5}", [5, 6, 7, 8, 9, 10],
                        [
                            ["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
                            ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-57-9]"], "0$1"]
                        ], "0"
                    ],
                    NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8],
                        [
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]
                        ], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"
                    ],
                    NP: ["977", "00", "9\\d{9}|[1-9]\\d{7}", [8, 10],
                        [
                            ["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
                            ["(\\d{2})(\\d{6})", "$1-$2", ["[1-8]|9(?:[1-579]|6[2-6])"], "0$1"],
                            ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]
                        ], "0"
                    ],
                    NR: ["674", "00", "(?:444|55\\d|888)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[458]"]]
                        ]
                    ],
                    NU: ["683", "00", "(?:[47]|888\\d)\\d{3}", [4, 7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["8"]]
                        ]
                    ],
                    NZ: ["64", "0(?:0|161)", "[28]\\d{7,9}|[346]\\d{7}|(?:508|[79]\\d)\\d{6,7}", [8, 9, 10],
                        [
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[59]|80"], "0$1"],
                            ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["2[028]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7|86"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, 0, "00"
                    ],
                    OM: ["968", "00", "(?:[279]\\d{3}|500)\\d{4}|8007\\d{4,5}", [7, 8, 9],
                        [
                            ["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["2"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[79]"]]
                        ]
                    ],
                    PA: ["507", "00", "(?:[1-57-9]|6\\d)\\d{6}", [7, 8],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
                            ["(\\d{4})(\\d{4})", "$1-$2", ["6"]]
                        ]
                    ],
                    PE: ["51", "19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"],
                            ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]
                        ], "0", 0, 0, 0, 0, 0, 0, 0, " Anexo "
                    ],
                    PF: ["689", "00", "[48]\\d{7}|4\\d{5}", [6, 8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[48]"]]
                        ]
                    ],
                    PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    PH: ["63", "00", "1800\\d{7,9}|(?:2|[89]\\d{4})\\d{5}|[2-8]\\d{8}|[28]\\d{7}", [6, 8, 9, 10, 11, 12, 13],
                        [
                            ["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
                            ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"],
                            ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                            ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]
                        ], "0"
                    ],
                    PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[025-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12],
                        [
                            ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["[89]0"], "0$1"],
                            ["(\\d{4})(\\d{5})", "$1 $2", ["1"]],
                            ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"],
                            ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"],
                            ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"],
                            ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"],
                            ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]
                        ], "0"
                    ],
                    PL: ["48", "00", "[1-57-9]\\d{6}(?:\\d{2})?|6\\d{5,8}", [6, 7, 8, 9],
                        [
                            ["(\\d{5})", "$1", ["19"]],
                            ["(\\d{3})(\\d{3})", "$1 $2", ["11|64"]],
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],
                            ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["39|45|5[0137]|6[0469]|7[02389]|8[08]"]],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-8]|9[145]"]]
                        ]
                    ],
                    PM: ["508", "00", "[45]\\d{5}", [6],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"]
                        ], "0"
                    ],
                    PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"],
                    PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                        ], "0"
                    ],
                    PT: ["351", "00", "(?:[26-9]\\d|30)\\d{7}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"]]
                        ]
                    ],
                    PW: ["680", "01[12]", "(?:[25-8]\\d\\d|345|488|900)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                        ]
                    ],
                    PY: ["595", "00", "59\\d{4,6}|(?:[2-46-9]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9],
                        [
                            ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
                            ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                            ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6[347]|7[46-8]|85"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["9"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"]
                        ], "0"
                    ],
                    QA: ["974", "00", "800\\d{4}|(?:2|[3-7]\\d)\\d{6}", [7, 8],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["2[126]|8"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]
                        ]
                    ],
                    RE: ["262", "00", "(?:26|[68]\\d)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[268]"], "0$1"]
                        ], "0", 0, 0, 0, 0, "262|69|8"
                    ],
                    RO: ["40", "00", "(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}", [6, 9],
                        [
                            ["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"],
                            ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, 0, 0, " int "
                    ],
                    RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"],
                            ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]
                        ], "0"
                    ],
                    RU: ["7", "810", "[347-9]\\d{9}", [10],
                        [
                            ["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1],
                            ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1],
                            ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"], "8 ($1)", 1]
                        ], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"
                    ],
                    RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]
                        ], "0"
                    ],
                    SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10],
                        [
                            ["(\\d{4})(\\d{5})", "$1 $2", ["9"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                        ], "0"
                    ],
                    SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]
                        ]
                    ],
                    SC: ["248", "010|0[0-2]", "8000\\d{3}|(?:[249]\\d|64)\\d{5}", [7],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    SD: ["249", "00", "[19]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]
                        ], "0"
                    ],
                    SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"],
                            ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44)"], "0$1", 0, "$1 $2"],
                            ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"],
                            ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"],
                            ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"],
                            ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["7"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]
                        ], "0"
                    ],
                    SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8[1-9]"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
                            ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                        ]
                    ],
                    SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"],
                    SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8],
                        [
                            ["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]
                        ], "0", 0, 0, 0, 0, 0, 0, "00"
                    ],
                    SJ: ["47", "00", "0\\d{4}|(?:[4589]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"],
                    SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9],
                        [
                            ["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]
                        ], "0"
                    ],
                    SL: ["232", "00", "(?:[2378]\\d|99)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{6})", "$1 $2", ["[237-9]"], "(0$1)"]
                        ], "0"
                    ],
                    SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                            ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]
                        ], 0, 0, "([89]\\d{5})$", "0549$1"
                    ],
                    SN: ["221", "00", "(?:[378]\\d{4}|93330)\\d{4}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]
                        ]
                    ],
                    SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|(?:[1-4]\\d|59)\\d{5}|[1348]\\d{5}", [6, 7, 8, 9],
                        [
                            ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
                            ["(\\d{6})", "$1", ["[134]"]],
                            ["(\\d)(\\d{6})", "$1 $2", ["1|2[0-79]|3[0-46-8]|4[0-7]|59"]],
                            ["(\\d)(\\d{7})", "$1 $2", ["24|[67]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79[0-8]|90"]],
                            ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[1-35-9]|799|9[2-9]"]]
                        ], "0"
                    ],
                    SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
                            ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]],
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]
                        ]
                    ],
                    SS: ["211", "00", "[19]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]
                        ], "0"
                    ],
                    ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]
                        ]
                    ],
                    SV: ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]
                        ]
                    ],
                    SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|(5\\d{6})$", "721$1", 0, "721"],
                    SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]
                        ], "0"
                    ],
                    SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]],
                            ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]
                        ]
                    ],
                    TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
                    TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "1|([2-479]\\d{6})$", "649$1", 0, "649"],
                    TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]
                        ], 0, 0, 0, 0, 0, 0, 0, "00"
                    ],
                    TG: ["228", "00", "[279]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]
                        ]
                    ],
                    TH: ["66", "00[1-9]", "1\\d{8,9}|(?:[2-57]|[689]\\d)\\d{7}", [8, 9, 10],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["14|[3-9]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                        ], "0"
                    ],
                    TJ: ["992", "810", "(?:00|[3-59]\\d|77|88)\\d{7}", [9],
                        [
                            ["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"], 0, 1],
                            ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"], 0, 1],
                            ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3"], 0, 1],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0457-9]"], 0, 1]
                        ], "8", 0, 0, 0, 0, 0, 0, "8~10"
                    ],
                    TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
                    TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]
                        ]
                    ],
                    TM: ["993", "810", "[1-6]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"],
                            ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]
                        ], "8", 0, 0, 0, 0, 0, 0, "8~10"
                    ],
                    TN: ["216", "00", "[2-57-9]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]
                        ]
                    ],
                    TO: ["676", "00", "(?:0800|[5-8]\\d{3})\\d{3}|[2-8]\\d{4}", [5, 7],
                        [
                            ["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],
                            ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[5-8]"]]
                        ]
                    ],
                    TR: ["90", "00", "(?:[2-58]\\d\\d|900)\\d{7}|4\\d{6}", [7, 10],
                        [
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[0589]|90"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1]
                        ], "0"
                    ],
                    TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-46-8]\\d{6})$", "868$1", 0, "868"],
                    TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7]],
                    TW: ["886", "0(?:0[25-79]|19)", "(?:[24589]|7\\d)\\d{8}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
                            ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[25][2-8]|[346]|7[1-9]|8[237-9]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[258]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, 0, 0, "#"
                    ],
                    TZ: ["255", "00[056]", "(?:[26-8]\\d|41|90)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]
                        ], "0"
                    ],
                    UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["4[45][0-5]|5(?:0|6[37])|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]", "4[45][0-5]|5(?:0|6(?:3[14-7]|7))|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]"], "0$1"],
                            ["(\\d{4})(\\d{5})", "$1 $2", ["[3-6]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, 0, "0~0"
                    ],
                    UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9],
                        [
                            ["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]
                        ], "0"
                    ],
                    US: ["1", "011", "[2-9]\\d{9}", [10],
                        [
                            ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]
                        ], "1", 0, 0, 0, 0, 0, [
                            ["(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"],
                            [""],
                            ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                            ["900[2-9]\\d{6}"],
                            ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"], 0, ["710[2-9]\\d{6}"]
                        ]
                    ],
                    UY: ["598", "0(?:0|1[3-9]\\d)", "(?:[249]\\d\\d|80)\\d{5}|9\\d{6}", [7, 8],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["8|90"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[24]"]]
                        ], "0", 0, 0, 0, 0, 0, 0, "00", " int. "
                    ],
                    UZ: ["998", "810", "[679]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[679]"], "8 $1"]
                        ], "8", 0, 0, 0, 0, 0, 0, "8~10"
                    ],
                    VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"],
                    VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "784$1", 0, "784"],
                    VE: ["58", "00", "[89]00\\d{7}|(?:[24]\\d|50)\\d{8}", [10],
                        [
                            ["(\\d{3})(\\d{7})", "$1-$2", ["[24589]"], "0$1"]
                        ], "0"
                    ],
                    VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-578]\\d{6})$", "284$1", 0, "284"],
                    VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "340$1", 0, "340"],
                    VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1],
                            ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", 1],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1],
                            ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]
                        ], "0"
                    ],
                    VU: ["678", "00", "(?:[23]\\d|[48]8)\\d{3}|(?:[57]\\d|90)\\d{5}", [5, 7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[579]"]]
                        ]
                    ],
                    WF: ["681", "00", "(?:[45]0|68|72|8\\d)\\d{4}", [6],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[4-8]"]]
                        ]
                    ],
                    WS: ["685", "0", "[2-6]\\d{4}|8\\d{5}(?:\\d{4})?|[78]\\d{6}", [5, 6, 7, 10],
                        [
                            ["(\\d{5})", "$1", ["[2-6]"]],
                            ["(\\d{3})(\\d{3,7})", "$1 $2", ["8"]],
                            ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                        ]
                    ],
                    XK: ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]
                        ], "0"
                    ],
                    YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]
                        ], "0"
                    ],
                    YT: ["262", "00", "80\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, "269|63"],
                    ZA: ["27", "00", "[1-9]\\d{8}|8\\d{4,7}", [5, 6, 7, 8, 9],
                        [
                            ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"]
                        ], "0"
                    ],
                    ZM: ["260", "00", "800\\d{6}|(?:21|76|9\\d)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]
                        ], "0"
                    ],
                    ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10],
                        [
                            ["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"],
                            ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
                            ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"],
                            ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]
                        ], "0"
                    ],
                    "001": ["979", 0, "\\d{9}", [9],
                        [
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3"]
                        ]
                    ]
                }
            }
        },
        985704: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return u
                }
            });
            var n = d("773670"),
                r = d.n(n);

            function i(t, e) {
                return (i = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }
            var a = function(t) {
                    var e = document.createElement("script");
                    e.async = !0, e.defer = !0, e.src = t, document.head && document.head.appendChild(e)
                },
                o = /(http|https):\/\/(www)?.+\/recaptcha/,
                $ = ["sitekey", "theme", "size", "badge", "tabindex", "hl", "isolated"],
                u = function(t) {
                    function e() {
                        for (var e, d = arguments.length, n = Array(d), i = 0; i < d; i++) n[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(n)) || this).container = void 0, e.timer = void 0, e.state = {
                            instanceKey: Date.now(),
                            ready: !1,
                            rendered: !1,
                            invisible: "invisible" === e.props.size
                        }, e._isAvailable = function() {
                            var t;
                            return !!(null == (t = window.grecaptcha) ? void 0 : t.ready)
                        }, e._inject = function() {
                            var t;
                            e.props.inject && (t = o, !Array.from(document.scripts).reduce(function(e, d) {
                                return e || t.test(d.src)
                            }, !1)) && a("https://recaptcha.net/recaptcha/api.js?render=explicit" + (e.props.hl ? "&hl=" + e.props.hl : ""))
                        }, e._prepare = function() {
                            var t = e.props,
                                d = t.explicit,
                                n = t.onLoad;
                            window.grecaptcha.ready(function() {
                                e.setState({
                                    ready: !0
                                }, function() {
                                    d || e.renderExplicitly(), n && n()
                                })
                            })
                        }, e._renderRecaptcha = function(t, e) {
                            return window.grecaptcha.render(t, e)
                        }, e._resetRecaptcha = function() {
                            return window.grecaptcha.reset(e.state.instanceId)
                        }, e._executeRecaptcha = function() {
                            return window.grecaptcha.execute(e.state.instanceId)
                        }, e._getResponseRecaptcha = function() {
                            return window.grecaptcha.getResponse(e.state.instanceId)
                        }, e._onVerify = function(t) {
                            return e.props.onVerify(t)
                        }, e._onExpire = function() {
                            return e.props.onExpire && e.props.onExpire()
                        }, e._onError = function() {
                            return e.props.onError && e.props.onError()
                        }, e._stopTimer = function() {
                            e.timer && clearInterval(e.timer)
                        }, e.componentDidMount = function() {
                            e._inject(), e._isAvailable() ? e._prepare() : e.timer = window.setInterval(function() {
                                e._isAvailable() && (e._prepare(), e._stopTimer())
                            }, 500)
                        }, e.componentWillUnmount = function() {
                            e._stopTimer()
                        }, e.renderExplicitly = function() {
                            return new Promise(function(t, d) {
                                if (e.state.rendered) return d(Error("This recaptcha instance has been already rendered."));
                                if (!e.state.ready || !e.container) return d(Error("Recaptcha is not ready for rendering yet."));
                                var n = e._renderRecaptcha(e.container, {
                                    sitekey: e.props.sitekey,
                                    theme: e.props.theme,
                                    size: e.props.size,
                                    badge: e.state.invisible ? e.props.badge : void 0,
                                    tabindex: e.props.tabindex,
                                    callback: e._onVerify,
                                    "expired-callback": e._onExpire,
                                    "error-callback": e._onError,
                                    isolated: e.state.invisible ? e.props.isolated : void 0,
                                    hl: e.state.invisible ? void 0 : e.props.hl
                                });
                                e.setState({
                                    instanceId: n,
                                    rendered: !0
                                }, function() {
                                    e.props.onRender && e.props.onRender(), t()
                                })
                            })
                        }, e.reset = function() {
                            return new Promise(function(t, d) {
                                if (e.state.rendered) return e._resetRecaptcha(), t();
                                d(Error("This recaptcha instance did not render yet."))
                            })
                        }, e.execute = function() {
                            return new Promise(function(t, d) {
                                return e.state.invisible ? (e.state.rendered && (e._executeRecaptcha(), t()), d(Error("This recaptcha instance did not render yet."))) : d(Error("Manual execution is only available for invisible size."))
                            })
                        }, e.getResponse = function() {
                            return new Promise(function(t, d) {
                                if (e.state.rendered) return t(e._getResponseRecaptcha());
                                d(Error("This recaptcha instance did not render yet."))
                            })
                        }, e.render = function() {
                            var t = r.createElement("div", {
                                key: e.state.instanceKey,
                                id: e.props.id,
                                className: e.props.className,
                                ref: function(t) {
                                    return e.container = t
                                }
                            });
                            return e.props.children ? e.props.children({
                                renderExplicitly: e.renderExplicitly,
                                reset: e.reset,
                                execute: e.execute,
                                getResponse: e.getResponse,
                                recaptchaComponent: t
                            }) : t
                        }, e
                    }
                    return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, i(e, t), e.getDerivedStateFromProps = function(t, e) {
                        var d = "invisible" === t.size;
                        return d !== e.invisible ? {
                            invisible: d
                        } : null
                    }, e.prototype.componentDidUpdate = function(t) {
                        var e = this;
                        $.reduce(function(d, n) {
                            return e.props[n] !== t[n] ? [].concat(d, [n]) : d
                        }, []).length > 0 && this.setState({
                            instanceKey: Date.now(),
                            rendered: !1
                        }, function() {
                            e.props.explicit || e.renderExplicitly()
                        })
                    }, e
                }(n.Component);
            u.defaultProps = {
                id: "",
                className: "g-recaptcha",
                theme: "light",
                size: "normal",
                badge: "bottomright",
                tabindex: 0,
                explicit: !1,
                inject: !0,
                isolated: !1,
                hl: ""
            }
        },
        129858: function(t, e, d) {
            "use strict";

            function n(t, e) {
                return !e && (e = t.slice(0)), Object.freeze(Object.defineProperties(t, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }
            d.r(e), d.d(e, {
                _: function() {
                    return n
                }
            })
        },
        405784: function(t, e, d) {
            "use strict";
            var n, r;
            d.r(e), d.d(e, {
                ApplicationDirectoryCollectionItemType: function() {
                    return n
                }
            }), (r = n || (n = {}))[r.APPLICATION = 1] = "APPLICATION", r[r.LINK = 2] = "LINK"
        },
        595486: function(t, e, d) {
            "use strict";
            var n, r;
            d.r(e), d.d(e, {
                ApplicationDirectoryCollectionType: function() {
                    return n
                }
            }), (r = n || (n = {}))[r.LIST = 1] = "LIST", r[r.LIST_WITH_IMAGE = 2] = "LIST_WITH_IMAGE", r[r.GALLERY = 3] = "GALLERY"
        },
        86666: function(t, e, d) {
            "use strict";
            var n, r;
            d.r(e), d.d(e, {
                ApplicationDirectorySearchResultType: function() {
                    return n
                }
            }), (r = n || (n = {}))[r.APPLICATION = 1] = "APPLICATION", r[r.ACTIVITY_APPLICATION = 2] = "ACTIVITY_APPLICATION", r[r.CONNECTION = 3] = "CONNECTION"
        },
        372242: function(t, e, d) {
            "use strict";
            var n, r;
            d.r(e), d.d(e, {
                ApplicationDirectorySearchType: function() {
                    return n
                }
            }), (r = n || (n = {}))[r.SEARCH_RESULTS = 1] = "SEARCH_RESULTS", r[r.MUSIC = 2] = "MUSIC"
        },
        922359: function(t, e, d) {
            "use strict";
            var n, r;
            d.r(e), d.d(e, {
                TeamMemberRoles: function() {
                    return n
                }
            }), (r = n || (n = {})).ADMIN = "admin", r.DEVELOPER = "developer", r.READ_ONLY = "read_only"
        },
        758480: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return m
                }
            });
            var n = d("920040"),
                r = d("773670"),
                i = d("575482"),
                a = d.n(i),
                o = d("992563"),
                $ = d("621466");
            let u = {
                    VERTICAL: o.flexVertical,
                    HORIZONTAL: o.flexHorizontal,
                    HORIZONTAL_REVERSE: o.flexHorizontalReverse
                },
                s = {
                    START: o.flexJustifyStart,
                    END: o.flexJustifyEnd,
                    CENTER: o.flexJustifyCenter,
                    BETWEEN: o.flexJustifyBetween,
                    AROUND: o.flexJustifyAround
                },
                l = {
                    NO_WRAP: o.flexNowrap,
                    WRAP: o.flexWrap,
                    WRAP_REVERSE: o.flexWrapReverse
                },
                c = {
                    START: o.flexAlignStart,
                    END: o.flexAlignEnd,
                    CENTER: o.flexAlignCenter,
                    STRETCH: o.flexAlignStretch
                },
                f = {
                    SMALL: $.flexGutterSmall,
                    LARGE: $.flexGutterLarge
                };
            class h extends r.PureComponent {
                render() {
                    let {
                        children: t,
                        className: e,
                        shrink: d,
                        grow: i,
                        basis: o,
                        style: u,
                        wrap: s,
                        ...l
                    } = this.props, c = {
                        style: {
                            flexGrow: i,
                            flexShrink: d,
                            flexBasis: o,
                            ...u
                        },
                        className: e === $.flexChild ? e : a($.flexChild, e),
                        ...l
                    };
                    if (!s && "string" != typeof t && 1 === r.Children.count(t)) {
                        let d = r.Children.only(t);
                        return c.style = {
                            ...c.style,
                            ...d.props.style
                        }, c.className = a(d.props.className, e), r.cloneElement(d, c)
                    }
                    return (0, n.jsx)("div", {
                        ...c,
                        children: t
                    })
                }
            }
            h.defaultProps = {
                className: $.flexChild,
                style: {},
                wrap: !1
            };
            class p extends r.PureComponent {
                render() {
                    let {
                        children: t,
                        className: e,
                        direction: d,
                        justify: r,
                        align: i,
                        wrap: o,
                        shrink: u,
                        grow: s,
                        basis: l,
                        style: c,
                        gutter: f,
                        ...h
                    } = this.props, p = {
                        flexShrink: u,
                        flexGrow: s,
                        flexBasis: l,
                        ...c
                    };
                    return (0, n.jsx)("div", {
                        style: p,
                        className: a($.flex, d, r, i, o, f, e),
                        ...h,
                        children: t
                    })
                }
            }
            p.Child = h, p.Direction = u, p.Align = c, p.Justify = s, p.Wrap = l, p.Gutter = f, p.defaultProps = {
                direction: u.HORIZONTAL,
                justify: s.START,
                align: c.STRETCH,
                wrap: l.WRAP,
                shrink: 1,
                grow: 1,
                basis: "auto",
                style: {}
            };
            var m = p
        },
        336327: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                truncateAndLocalizeNumber: function() {
                    return r
                }
            });
            var n = d("753595");
            let r = (t, e) => {
                let d = Math.round(10 * t) / 10;
                if (t < 1e6) return new Intl.NumberFormat(e, {
                    maximumFractionDigits: d % 1 == 0 ? 0 : 1
                }).format(t);
                let r = Math.round(t / 1e6 * 10) / 10,
                    i = new Intl.NumberFormat(e, {
                        maximumFractionDigits: r % 1 == 0 ? 0 : 1
                    }).format(t / 1e6);
                return n.default.Messages.NumberAbbreviations.MILLION.format({
                    num: i
                })
            }
        },
        237125: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                default: function() {
                    return n
                }
            });
            class n {
                _processQueue() {
                    setTimeout(() => {
                        if (this._queue.length > 0 && this._tokenCount > 0) {
                            this._tokenCount--, null == this._intervalID && (this._intervalID = setInterval(() => this._iterate(), this._intervalPeriod));
                            let t = this._queue.shift();
                            null == t || t(), this._processQueue()
                        }
                    }, 0)
                }
                _iterate() {
                    this._tokenCount = Math.min(this._capacity, this._tokenCount + 1), this._tokenCount >= this._capacity && null != this._intervalID && (clearInterval(this._intervalID), this._intervalID = null), this._processQueue()
                }
                process() {
                    return new Promise(t => {
                        this._queue.push(t), this._processQueue()
                    })
                }
                constructor(t, e) {
                    this._capacity = t, this._tokenCount = t, this._queue = [], this._intervalPeriod = e / t, this._intervalID = null
                }
            }
        },
        852142: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                RPCCommandSchemas: function() {
                    return i
                }
            });
            var n = d("336621"),
                r = d("809924");
            let i = {
                    [n.RPCCommand.INITIATE_IMAGE_UPLOAD]: {
                        request: void 0,
                        response: t => t.object({
                            image_url: t.string().required()
                        })
                    },
                    [n.RPCCommand.OPEN_SHARE_MOMENT_DIALOG]: {
                        response: void 0,
                        request: t => (0, n.joiReqObj)(t.object({
                            mediaUrl: t.string().required().max(1024)
                        }))
                    },
                    [n.RPCCommand.AUTHENTICATE]: {
                        request: t => (0, n.joiReqObj)(t.object({
                            access_token: t.string().allow(null).optional()
                        })),
                        response: t => t.object({
                            access_token: t.string().required(),
                            user: t.object({
                                username: t.string().required(),
                                discriminator: t.string().required(),
                                id: t.string().required(),
                                avatar: t.string().allow(null),
                                public_flags: t.number().required()
                            }).required(),
                            scopes: t.array().items(t.string().valid(...(0, n.joiEnum)(r.OAuth2Scopes))).required(),
                            expires: t.string().required(),
                            application: t.object({
                                description: t.string().required(),
                                icon: t.string().allow(null),
                                id: t.string().required(),
                                rpc_origins: t.array().items(t.string()).optional(),
                                name: t.string().required()
                            }).required()
                        })
                    },
                    [n.RPCCommand.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
                        request: void 0,
                        response: t => t.object({
                            participants: t.array().items(a(t).keys({
                                nickname: t.string().description("Server nickname. Not unique.")
                            }).required()).required()
                        }).required()
                    }
                },
                a = t => t.object({
                    id: t.string().required().description("User ID"),
                    username: t.string().required(),
                    global_name: t.string().allow(null).description("Global Discord name. Not unique."),
                    discriminator: t.string().required().description("Global name discriminator. Will be 0 if a unique username"),
                    avatar: t.string().allow(null).description("User Avatar ID"),
                    flags: t.number().required().description("Public user flags"),
                    bot: t.bool().required().description("If a bot user."),
                    avatar_decoration_data: t.object({
                        asset: t.string().required(),
                        skuId: t.string()
                    }).allow(null).description("Details about avatar decoration"),
                    premium_type: t.number().allow(null).description("Nitro premium type")
                }).description("Discord User")
        },
        336621: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                RPCCommand: function() {
                    return n.RPCCommands
                },
                joiReqObj: function() {
                    return r
                },
                joiEnum: function() {
                    return i
                }
            });
            var n = d("809924");

            function r(t) {
                return t.required().unknown(!0)
            }

            function i(t) {
                return Object.values(t)
            }
        },
        95852: function(t, e, d) {
            "use strict";
            d.r(e), d.d(e, {
                createRPCCommand: function() {
                    return r
                }
            });
            var n = d("852142");

            function r(t, e) {
                var d;
                let {
                    scope: r,
                    handler: i
                } = e, a = {
                    scope: r,
                    handler: i
                }, o = null === (d = n.RPCCommandSchemas[t]) || void 0 === d ? void 0 : d.request, $ = null;
                return null != o && (a.validation = function(t) {
                    return null == $ && ($ = o(t)), $
                }), a
            }
        }
    }
]);
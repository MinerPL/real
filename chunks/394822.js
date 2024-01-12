            "use strict";
            s("70102"), s("854508");
            var r = s("912065").Buffer,
                i = r.isEncoding || function(t) {
                    switch ((t = "" + t) && t.toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                        case "raw":
                            return !0;
                        default:
                            return !1
                    }
                };

            function n(t) {
                var e;
                switch (this.encoding = function(t) {
                        var e = function(t) {
                            var e;
                            if (!t) return "utf8";
                            for (;;) switch (t) {
                                case "utf8":
                                case "utf-8":
                                    return "utf8";
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return "utf16le";
                                case "latin1":
                                case "binary":
                                    return "latin1";
                                case "base64":
                                case "ascii":
                                case "hex":
                                    return t;
                                default:
                                    if (e) return;
                                    t = ("" + t).toLowerCase(), e = !0
                            }
                        }(t);
                        if ("string" != typeof e && (r.isEncoding === i || !i(t))) throw Error("Unknown encoding: " + t);
                        return e || t
                    }(t), this.encoding) {
                    case "utf16le":
                        this.text = f, this.end = u, e = 4;
                        break;
                    case "utf8":
                        this.fillLast = o, e = 4;
                        break;
                    case "base64":
                        this.text = a, this.end = d, e = 3;
                        break;
                    default:
                        this.write = p, this.end = b;
                        return
                }
                this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(e)
            }

            function c(t) {
                if (t <= 127) return 0;
                if (t >> 5 == 6) return 2;
                if (t >> 4 == 14) return 3;
                else if (t >> 3 == 30) return 4;
                return t >> 6 == 2 ? -1 : -2
            }
            e.StringDecoder = n, n.prototype.write = function(t) {
                var e, s;
                if (0 === t.length) return "";
                if (this.lastNeed) {
                    if (void 0 === (e = this.fillLast(t))) return "";
                    s = this.lastNeed, this.lastNeed = 0
                } else s = 0;
                return s < t.length ? e ? e + this.text(t, s) : this.text(t, s) : e || ""
            }, n.prototype.end = function(t) {
                var e = t && t.length ? this.write(t) : "";
                return this.lastNeed ? e + "�" : e
            }, n.prototype.text = function(t, e) {
                var s = function(t, e, s) {
                    var r = e.length - 1;
                    if (r < s) return 0;
                    var i = c(e[r]);
                    return i >= 0 ? (i > 0 && (t.lastNeed = i - 1), i) : --r < s || -2 === i ? 0 : (i = c(e[r])) >= 0 ? (i > 0 && (t.lastNeed = i - 2), i) : --r < s || -2 === i ? 0 : (i = c(e[r])) >= 0 ? (i > 0 && (2 === i ? i = 0 : t.lastNeed = i - 3), i) : 0
                }(this, t, e);
                if (!this.lastNeed) return t.toString("utf8", e);
                this.lastTotal = s;
                var r = t.length - (s - this.lastNeed);
                return t.copy(this.lastChar, 0, r), t.toString("utf8", e, r)
            }, n.prototype.fillLast = function(t) {
                if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length
            };

            function o(t) {
                var e = this.lastTotal - this.lastNeed,
                    s = function(t, e, s) {
                        if ((192 & e[0]) != 128) return t.lastNeed = 0, "�";
                        if (t.lastNeed > 1 && e.length > 1) {
                            if ((192 & e[1]) != 128) return t.lastNeed = 1, "�";
                            if (t.lastNeed > 2 && e.length > 2 && (192 & e[2]) != 128) return t.lastNeed = 2, "�"
                        }
                    }(this, t, 0);
                return void 0 !== s ? s : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : void(t.copy(this.lastChar, e, 0, t.length), this.lastNeed -= t.length)
            }

            function f(t, e) {
                if ((t.length - e) % 2 == 0) {
                    var s = t.toString("utf16le", e);
                    if (s) {
                        var r = s.charCodeAt(s.length - 1);
                        if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], s.slice(0, -1)
                    }
                    return s
                }
                return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1)
            }

            function u(t) {
                var e = t && t.length ? this.write(t) : "";
                if (this.lastNeed) {
                    var s = this.lastTotal - this.lastNeed;
                    return e + this.lastChar.toString("utf16le", 0, s)
                }
                return e
            }

            function a(t, e) {
                var s = (t.length - e) % 3;
                return 0 === s ? t.toString("base64", e) : (this.lastNeed = 3 - s, this.lastTotal = 3, 1 === s ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - s))
            }

            function d(t) {
                var e = t && t.length ? this.write(t) : "";
                return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e
            }

            function p(t) {
                return t.toString(this.encoding)
            }

            function b(t) {
                return t && t.length ? this.write(t) : ""
            }
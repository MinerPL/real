            "use strict";
            r("70102"), r("854508");
            var i = r("912065").Buffer,
                n = i.isEncoding || function(t) {
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

            function o(t) {
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
                        if ("string" != typeof e && (i.isEncoding === n || !n(t))) throw Error("Unknown encoding: " + t);
                        return e || t
                    }(t), this.encoding) {
                    case "utf16le":
                        this.text = f, this.end = h, e = 4;
                        break;
                    case "utf8":
                        this.fillLast = s, e = 4;
                        break;
                    case "base64":
                        this.text = c, this.end = u, e = 3;
                        break;
                    default:
                        this.write = d, this.end = l;
                        return
                }
                this.lastNeed = 0, this.lastTotal = 0, this.lastChar = i.allocUnsafe(e)
            }

            function a(t) {
                if (t <= 127) return 0;
                if (t >> 5 == 6) return 2;
                if (t >> 4 == 14) return 3;
                else if (t >> 3 == 30) return 4;
                return t >> 6 == 2 ? -1 : -2
            }
            e.StringDecoder = o, o.prototype.write = function(t) {
                var e, r;
                if (0 === t.length) return "";
                if (this.lastNeed) {
                    if (void 0 === (e = this.fillLast(t))) return "";
                    r = this.lastNeed, this.lastNeed = 0
                } else r = 0;
                return r < t.length ? e ? e + this.text(t, r) : this.text(t, r) : e || ""
            }, o.prototype.end = function(t) {
                var e = t && t.length ? this.write(t) : "";
                return this.lastNeed ? e + "�" : e
            }, o.prototype.text = function(t, e) {
                var r = function(t, e, r) {
                    var i = e.length - 1;
                    if (i < r) return 0;
                    var n = a(e[i]);
                    return n >= 0 ? (n > 0 && (t.lastNeed = n - 1), n) : --i < r || -2 === n ? 0 : (n = a(e[i])) >= 0 ? (n > 0 && (t.lastNeed = n - 2), n) : --i < r || -2 === n ? 0 : (n = a(e[i])) >= 0 ? (n > 0 && (2 === n ? n = 0 : t.lastNeed = n - 3), n) : 0
                }(this, t, e);
                if (!this.lastNeed) return t.toString("utf8", e);
                this.lastTotal = r;
                var i = t.length - (r - this.lastNeed);
                return t.copy(this.lastChar, 0, i), t.toString("utf8", e, i)
            }, o.prototype.fillLast = function(t) {
                if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length
            };

            function s(t) {
                var e = this.lastTotal - this.lastNeed,
                    r = function(t, e, r) {
                        if ((192 & e[0]) != 128) return t.lastNeed = 0, "�";
                        if (t.lastNeed > 1 && e.length > 1) {
                            if ((192 & e[1]) != 128) return t.lastNeed = 1, "�";
                            if (t.lastNeed > 2 && e.length > 2 && (192 & e[2]) != 128) return t.lastNeed = 2, "�"
                        }
                    }(this, t, 0);
                return void 0 !== r ? r : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : void(t.copy(this.lastChar, e, 0, t.length), this.lastNeed -= t.length)
            }

            function f(t, e) {
                if ((t.length - e) % 2 == 0) {
                    var r = t.toString("utf16le", e);
                    if (r) {
                        var i = r.charCodeAt(r.length - 1);
                        if (i >= 55296 && i <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], r.slice(0, -1)
                    }
                    return r
                }
                return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1)
            }

            function h(t) {
                var e = t && t.length ? this.write(t) : "";
                if (this.lastNeed) {
                    var r = this.lastTotal - this.lastNeed;
                    return e + this.lastChar.toString("utf16le", 0, r)
                }
                return e
            }

            function c(t, e) {
                var r = (t.length - e) % 3;
                return 0 === r ? t.toString("base64", e) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - r))
            }

            function u(t) {
                var e = t && t.length ? this.write(t) : "";
                return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e
            }

            function d(t) {
                return t.toString(this.encoding)
            }

            function l(t) {
                return t && t.length ? this.write(t) : ""
            }
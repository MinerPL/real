            "use strict";
            s("424973");
            let r = s("599235"),
                i = s("839309"),
                n = s("13020").DecoderBuffer,
                Node = s("747336"),
                c = s("335036");

            function o(t) {
                this.enc = "der", this.name = t.name, this.entity = t, this.tree = new f, this.tree._init(t.body)
            }

            function f(t) {
                Node.call(this, "der", t)
            }

            function u(t, e) {
                let s = t.readUInt8(e);
                if (t.isError(s)) return s;
                let r = c.tagClass[s >> 6],
                    i = (32 & s) == 0;
                if ((31 & s) == 31) {
                    let r = s;
                    for (s = 0;
                        (128 & r) == 128;) {
                        if (r = t.readUInt8(e), t.isError(r)) return r;
                        s <<= 7, s |= 127 & r
                    }
                } else s &= 31;
                let n = c.tag[s];
                return {
                    cls: r,
                    primitive: i,
                    tag: s,
                    tagStr: n
                }
            }

            function a(t, e, s) {
                let r = t.readUInt8(s);
                if (t.isError(r)) return r;
                if (!e && 128 === r) return null;
                if ((128 & r) == 0) return r;
                let i = 127 & r;
                if (i > 4) return t.error("length octect is too long");
                r = 0;
                for (let e = 0; e < i; e++) {
                    r <<= 8;
                    let e = t.readUInt8(s);
                    if (t.isError(e)) return e;
                    r |= e
                }
                return r
            }
            t.exports = o, o.prototype.decode = function(t, e) {
                return !n.isDecoderBuffer(t) && (t = new n(t, e)), this.tree._decode(t, e)
            }, r(f, Node), f.prototype._peekTag = function(t, e, s) {
                if (t.isEmpty()) return !1;
                let r = t.save(),
                    i = u(t, 'Failed to peek tag: "' + e + '"');
                return t.isError(i) ? i : (t.restore(r), i.tag === e || i.tagStr === e || i.tagStr + "of" === e || s)
            }, f.prototype._decodeTag = function(t, e, s) {
                let r = u(t, 'Failed to decode tag of "' + e + '"');
                if (t.isError(r)) return r;
                let i = a(t, r.primitive, 'Failed to get length of "' + e + '"');
                if (t.isError(i)) return i;
                if (!s && r.tag !== e && r.tagStr !== e && r.tagStr + "of" !== e) return t.error('Failed to match tag: "' + e + '"');
                if (r.primitive || null !== i) return t.skip(i, 'Failed to match body of: "' + e + '"');
                let n = t.save(),
                    c = this._skipUntilEnd(t, 'Failed to skip indefinite length body: "' + this.tag + '"');
                return t.isError(c) ? c : (i = t.offset - n.offset, t.restore(n), t.skip(i, 'Failed to match body of: "' + e + '"'))
            }, f.prototype._skipUntilEnd = function(t, e) {
                for (;;) {
                    let s;
                    let r = u(t, e);
                    if (t.isError(r)) return r;
                    let i = a(t, r.primitive, e);
                    if (t.isError(i)) return i;
                    if (s = r.primitive || null !== i ? t.skip(i) : this._skipUntilEnd(t, e), t.isError(s)) return s;
                    if ("end" === r.tagStr) break
                }
            }, f.prototype._decodeList = function(t, e, s, r) {
                let i = [];
                for (; !t.isEmpty();) {
                    let e = this._peekTag(t, "end");
                    if (t.isError(e)) return e;
                    let n = s.decode(t, "der", r);
                    if (t.isError(n) && e) break;
                    i.push(n)
                }
                return i
            }, f.prototype._decodeStr = function(t, e) {
                if ("bitstr" === e) {
                    let e = t.readUInt8();
                    return t.isError(e) ? e : {
                        unused: e,
                        data: t.raw()
                    }
                }
                if ("bmpstr" === e) {
                    let e = t.raw();
                    if (e.length % 2 == 1) return t.error("Decoding of string type: bmpstr length mismatch");
                    let s = "";
                    for (let t = 0; t < e.length / 2; t++) s += String.fromCharCode(e.readUInt16BE(2 * t));
                    return s
                }
                if ("numstr" === e) {
                    let e = t.raw().toString("ascii");
                    return this._isNumstr(e) ? e : t.error("Decoding of string type: numstr unsupported characters")
                } else if ("octstr" === e) return t.raw();
                else if ("objDesc" === e) return t.raw();
                else if ("printstr" === e) {
                    let e = t.raw().toString("ascii");
                    return this._isPrintstr(e) ? e : t.error("Decoding of string type: printstr unsupported characters")
                } else if (/str$/.test(e)) return t.raw().toString();
                else return t.error("Decoding of string type: " + e + " unsupported")
            }, f.prototype._decodeObjid = function(t, e, s) {
                let r;
                let i = [],
                    n = 0,
                    c = 0;
                for (; !t.isEmpty();) c = t.readUInt8(), n <<= 7, n |= 127 & c, (128 & c) == 0 && (i.push(n), n = 0);
                128 & c && i.push(n);
                let o = i[0] / 40 | 0,
                    f = i[0] % 40;
                if (r = s ? i : [o, f].concat(i.slice(1)), e) {
                    let t = e[r.join(" ")];
                    void 0 === t && (t = e[r.join(".")]), void 0 !== t && (r = t)
                }
                return r
            }, f.prototype._decodeTime = function(t, e) {
                let s, r, i, n, c, o;
                let f = t.raw().toString();
                if ("gentime" === e) s = 0 | f.slice(0, 4), r = 0 | f.slice(4, 6), i = 0 | f.slice(6, 8), n = 0 | f.slice(8, 10), c = 0 | f.slice(10, 12), o = 0 | f.slice(12, 14);
                else {
                    if ("utctime" !== e) return t.error("Decoding " + e + " time is not supported yet");
                    s = 0 | f.slice(0, 2), r = 0 | f.slice(2, 4), i = 0 | f.slice(4, 6), n = 0 | f.slice(6, 8), c = 0 | f.slice(8, 10), o = 0 | f.slice(10, 12), s = s < 70 ? 2e3 + s : 1900 + s
                }
                return Date.UTC(s, r - 1, i, n, c, o, 0)
            }, f.prototype._decodeNull = function() {
                return null
            }, f.prototype._decodeBool = function(t) {
                let e = t.readUInt8();
                return t.isError(e) ? e : 0 !== e
            }, f.prototype._decodeInt = function(t, e) {
                let s = t.raw(),
                    r = new i(s);
                return e && (r = e[r.toString(10)] || r), r
            }, f.prototype._use = function(t, e) {
                return "function" == typeof t && (t = t(e)), t._getDecoder("der").tree
            }
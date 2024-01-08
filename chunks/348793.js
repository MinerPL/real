            "use strict";
            r("424973");
            let i = r("599235"),
                n = r("839309"),
                a = r("13020").DecoderBuffer,
                Node = r("747336"),
                o = r("335036");

            function s(t) {
                this.enc = "der", this.name = t.name, this.entity = t, this.tree = new f, this.tree._init(t.body)
            }

            function f(t) {
                Node.call(this, "der", t)
            }

            function h(t, e) {
                let r = t.readUInt8(e);
                if (t.isError(r)) return r;
                let i = o.tagClass[r >> 6],
                    n = (32 & r) == 0;
                if ((31 & r) == 31) {
                    let i = r;
                    for (r = 0;
                        (128 & i) == 128;) {
                        if (i = t.readUInt8(e), t.isError(i)) return i;
                        r <<= 7, r |= 127 & i
                    }
                } else r &= 31;
                let a = o.tag[r];
                return {
                    cls: i,
                    primitive: n,
                    tag: r,
                    tagStr: a
                }
            }

            function c(t, e, r) {
                let i = t.readUInt8(r);
                if (t.isError(i)) return i;
                if (!e && 128 === i) return null;
                if ((128 & i) == 0) return i;
                let n = 127 & i;
                if (n > 4) return t.error("length octect is too long");
                i = 0;
                for (let e = 0; e < n; e++) {
                    i <<= 8;
                    let e = t.readUInt8(r);
                    if (t.isError(e)) return e;
                    i |= e
                }
                return i
            }
            t.exports = s, s.prototype.decode = function(t, e) {
                return !a.isDecoderBuffer(t) && (t = new a(t, e)), this.tree._decode(t, e)
            }, i(f, Node), f.prototype._peekTag = function(t, e, r) {
                if (t.isEmpty()) return !1;
                let i = t.save(),
                    n = h(t, 'Failed to peek tag: "' + e + '"');
                return t.isError(n) ? n : (t.restore(i), n.tag === e || n.tagStr === e || n.tagStr + "of" === e || r)
            }, f.prototype._decodeTag = function(t, e, r) {
                let i = h(t, 'Failed to decode tag of "' + e + '"');
                if (t.isError(i)) return i;
                let n = c(t, i.primitive, 'Failed to get length of "' + e + '"');
                if (t.isError(n)) return n;
                if (!r && i.tag !== e && i.tagStr !== e && i.tagStr + "of" !== e) return t.error('Failed to match tag: "' + e + '"');
                if (i.primitive || null !== n) return t.skip(n, 'Failed to match body of: "' + e + '"');
                let a = t.save(),
                    o = this._skipUntilEnd(t, 'Failed to skip indefinite length body: "' + this.tag + '"');
                return t.isError(o) ? o : (n = t.offset - a.offset, t.restore(a), t.skip(n, 'Failed to match body of: "' + e + '"'))
            }, f.prototype._skipUntilEnd = function(t, e) {
                for (;;) {
                    let r;
                    let i = h(t, e);
                    if (t.isError(i)) return i;
                    let n = c(t, i.primitive, e);
                    if (t.isError(n)) return n;
                    if (r = i.primitive || null !== n ? t.skip(n) : this._skipUntilEnd(t, e), t.isError(r)) return r;
                    if ("end" === i.tagStr) break
                }
            }, f.prototype._decodeList = function(t, e, r, i) {
                let n = [];
                for (; !t.isEmpty();) {
                    let e = this._peekTag(t, "end");
                    if (t.isError(e)) return e;
                    let a = r.decode(t, "der", i);
                    if (t.isError(a) && e) break;
                    n.push(a)
                }
                return n
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
                    let r = "";
                    for (let t = 0; t < e.length / 2; t++) r += String.fromCharCode(e.readUInt16BE(2 * t));
                    return r
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
            }, f.prototype._decodeObjid = function(t, e, r) {
                let i;
                let n = [],
                    a = 0,
                    o = 0;
                for (; !t.isEmpty();) o = t.readUInt8(), a <<= 7, a |= 127 & o, (128 & o) == 0 && (n.push(a), a = 0);
                128 & o && n.push(a);
                let s = n[0] / 40 | 0,
                    f = n[0] % 40;
                if (i = r ? n : [s, f].concat(n.slice(1)), e) {
                    let t = e[i.join(" ")];
                    void 0 === t && (t = e[i.join(".")]), void 0 !== t && (i = t)
                }
                return i
            }, f.prototype._decodeTime = function(t, e) {
                let r, i, n, a, o, s;
                let f = t.raw().toString();
                if ("gentime" === e) r = 0 | f.slice(0, 4), i = 0 | f.slice(4, 6), n = 0 | f.slice(6, 8), a = 0 | f.slice(8, 10), o = 0 | f.slice(10, 12), s = 0 | f.slice(12, 14);
                else {
                    if ("utctime" !== e) return t.error("Decoding " + e + " time is not supported yet");
                    r = 0 | f.slice(0, 2), i = 0 | f.slice(2, 4), n = 0 | f.slice(4, 6), a = 0 | f.slice(6, 8), o = 0 | f.slice(8, 10), s = 0 | f.slice(10, 12), r = r < 70 ? 2e3 + r : 1900 + r
                }
                return Date.UTC(r, i - 1, n, a, o, s, 0)
            }, f.prototype._decodeNull = function() {
                return null
            }, f.prototype._decodeBool = function(t) {
                let e = t.readUInt8();
                return t.isError(e) ? e : 0 !== e
            }, f.prototype._decodeInt = function(t, e) {
                let r = t.raw(),
                    i = new n(r);
                return e && (i = e[i.toString(10)] || i), i
            }, f.prototype._use = function(t, e) {
                return "function" == typeof t && (t = t(e)), t._getDecoder("der").tree
            }
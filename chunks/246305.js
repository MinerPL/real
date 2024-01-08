            "use strict";
            r("843762");
            let i = r("599235"),
                n = r("415005").Buffer,
                Node = r("747336"),
                a = r("335036");

            function o(t) {
                this.enc = "der", this.name = t.name, this.entity = t, this.tree = new s, this.tree._init(t.body)
            }

            function s(t) {
                Node.call(this, "der", t)
            }

            function f(t) {
                return t < 10 ? "0" + t : t
            }
            t.exports = o, o.prototype.encode = function(t, e) {
                return this.tree._encode(t, e).join()
            }, i(s, Node), s.prototype._encodeComposite = function(t, e, r, i) {
                let o = function(t, e, r, i) {
                    let n;
                    if ("seqof" === t ? t = "seq" : "setof" === t && (t = "set"), a.tagByName.hasOwnProperty(t)) n = a.tagByName[t];
                    else {
                        if ("number" != typeof t || (0 | t) !== t) return i.error("Unknown tag: " + t);
                        n = t
                    }
                    return n >= 31 ? i.error("Multi-octet tag encoding unsupported") : (!e && (n |= 32), n |= a.tagClassByName[r || "universal"] << 6)
                }(t, e, r, this.reporter);
                if (i.length < 128) {
                    let t = n.alloc(2);
                    return t[0] = o, t[1] = i.length, this._createEncoderBuffer([t, i])
                }
                let s = 1;
                for (let t = i.length; t >= 256; t >>= 8) s++;
                let f = n.alloc(2 + s);
                f[0] = o, f[1] = 128 | s;
                for (let t = 1 + s, e = i.length; e > 0; t--, e >>= 8) f[t] = 255 & e;
                return this._createEncoderBuffer([f, i])
            }, s.prototype._encodeStr = function(t, e) {
                if ("bitstr" === e) return this._createEncoderBuffer([0 | t.unused, t.data]);
                if ("bmpstr" === e) {
                    let e = n.alloc(2 * t.length);
                    for (let r = 0; r < t.length; r++) e.writeUInt16BE(t.charCodeAt(r), 2 * r);
                    return this._createEncoderBuffer(e)
                }
                if ("numstr" === e) return this._isNumstr(t) ? this._createEncoderBuffer(t) : this.reporter.error("Encoding of string type: numstr supports only digits and space");
                else if ("printstr" === e) return this._isPrintstr(t) ? this._createEncoderBuffer(t) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark");
                else if (/str$/.test(e)) return this._createEncoderBuffer(t);
                else if ("objDesc" === e) return this._createEncoderBuffer(t);
                else return this.reporter.error("Encoding of string type: " + e + " unsupported")
            }, s.prototype._encodeObjid = function(t, e, r) {
                if ("string" == typeof t) {
                    if (!e) return this.reporter.error("string objid given, but no values map found");
                    if (!e.hasOwnProperty(t)) return this.reporter.error("objid not found in values map");
                    t = e[t].split(/[\s.]+/g);
                    for (let e = 0; e < t.length; e++) t[e] |= 0
                } else if (Array.isArray(t)) {
                    t = t.slice();
                    for (let e = 0; e < t.length; e++) t[e] |= 0
                }
                if (!Array.isArray(t)) return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(t));
                if (!r) {
                    if (t[1] >= 40) return this.reporter.error("Second objid identifier OOB");
                    t.splice(0, 2, 40 * t[0] + t[1])
                }
                let i = 0;
                for (let e = 0; e < t.length; e++) {
                    let r = t[e];
                    for (i++; r >= 128; r >>= 7) i++
                }
                let a = n.alloc(i),
                    o = a.length - 1;
                for (let e = t.length - 1; e >= 0; e--) {
                    let r = t[e];
                    for (a[o--] = 127 & r;
                        (r >>= 7) > 0;) a[o--] = 128 | 127 & r
                }
                return this._createEncoderBuffer(a)
            }, s.prototype._encodeTime = function(t, e) {
                let r;
                let i = new Date(t);
                return "gentime" === e ? r = [f(i.getUTCFullYear()), f(i.getUTCMonth() + 1), f(i.getUTCDate()), f(i.getUTCHours()), f(i.getUTCMinutes()), f(i.getUTCSeconds()), "Z"].join("") : "utctime" === e ? r = [f(i.getUTCFullYear() % 100), f(i.getUTCMonth() + 1), f(i.getUTCDate()), f(i.getUTCHours()), f(i.getUTCMinutes()), f(i.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + e + " time is not supported yet"), this._encodeStr(r, "octstr")
            }, s.prototype._encodeNull = function() {
                return this._createEncoderBuffer("")
            }, s.prototype._encodeInt = function(t, e) {
                if ("string" == typeof t) {
                    if (!e) return this.reporter.error("String int or enum given, but no values map");
                    if (!e.hasOwnProperty(t)) return this.reporter.error("Values map doesn't contain: " + JSON.stringify(t));
                    t = e[t]
                }
                if ("number" != typeof t && !n.isBuffer(t)) {
                    let e = t.toArray();
                    !t.sign && 128 & e[0] && e.unshift(0), t = n.from(e)
                }
                if (n.isBuffer(t)) {
                    let e = t.length;
                    0 === t.length && e++;
                    let r = n.alloc(e);
                    return t.copy(r), 0 === t.length && (r[0] = 0), this._createEncoderBuffer(r)
                }
                if (t < 128) return this._createEncoderBuffer(t);
                if (t < 256) return this._createEncoderBuffer([0, t]);
                let r = 1;
                for (let e = t; e >= 256; e >>= 8) r++;
                let i = Array(r);
                for (let e = i.length - 1; e >= 0; e--) i[e] = 255 & t, t >>= 8;
                return 128 & i[0] && i.unshift(0), this._createEncoderBuffer(n.from(i))
            }, s.prototype._encodeBool = function(t) {
                return this._createEncoderBuffer(t ? 255 : 0)
            }, s.prototype._use = function(t, e) {
                return "function" == typeof t && (t = t(e)), t._getEncoder("der").tree
            }, s.prototype._skipDefault = function(t, e, r) {
                let i;
                let n = this._baseState;
                if (null === n.default) return !1;
                let a = t.join();
                if (void 0 === n.defaultBuffer && (n.defaultBuffer = this._encodeValue(n.default, e, r).join()), a.length !== n.defaultBuffer.length) return !1;
                for (i = 0; i < a.length; i++)
                    if (a[i] !== n.defaultBuffer[i]) return !1;
                return !0
            }
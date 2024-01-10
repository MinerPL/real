            "use strict";
            let i = r("599235"),
                n = r("571405").Reporter,
                o = r("415005").Buffer;

            function a(t, e) {
                if (n.call(this, e), !o.isBuffer(t)) {
                    this.error("Input not Buffer");
                    return
                }
                this.base = t, this.offset = 0, this.length = t.length
            }

            function s(t, e) {
                if (Array.isArray(t)) this.length = 0, this.value = t.map(function(t) {
                    return !s.isEncoderBuffer(t) && (t = new s(t, e)), this.length += t.length, t
                }, this);
                else if ("number" == typeof t) {
                    if (!(0 <= t && t <= 255)) return e.error("non-byte EncoderBuffer value");
                    this.value = t, this.length = 1
                } else if ("string" == typeof t) this.value = t, this.length = o.byteLength(t);
                else {
                    if (!o.isBuffer(t)) return e.error("Unsupported type: " + typeof t);
                    this.value = t, this.length = t.length
                }
            }
            i(a, n), e.DecoderBuffer = a, a.isDecoderBuffer = function(t) {
                if (t instanceof a) return !0;
                let e = "object" == typeof t && o.isBuffer(t.base) && "DecoderBuffer" === t.constructor.name && "number" == typeof t.offset && "number" == typeof t.length && "function" == typeof t.save && "function" == typeof t.restore && "function" == typeof t.isEmpty && "function" == typeof t.readUInt8 && "function" == typeof t.skip && "function" == typeof t.raw;
                return e
            }, a.prototype.save = function() {
                return {
                    offset: this.offset,
                    reporter: n.prototype.save.call(this)
                }
            }, a.prototype.restore = function(t) {
                let e = new a(this.base);
                return e.offset = t.offset, e.length = this.offset, this.offset = t.offset, n.prototype.restore.call(this, t.reporter), e
            }, a.prototype.isEmpty = function() {
                return this.offset === this.length
            }, a.prototype.readUInt8 = function(t) {
                return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(t || "DecoderBuffer overrun")
            }, a.prototype.skip = function(t, e) {
                if (!(this.offset + t <= this.length)) return this.error(e || "DecoderBuffer overrun");
                let r = new a(this.base);
                return r._reporterState = this._reporterState, r.offset = this.offset, r.length = this.offset + t, this.offset += t, r
            }, a.prototype.raw = function(t) {
                return this.base.slice(t ? t.offset : this.offset, this.length)
            }, e.EncoderBuffer = s, s.isEncoderBuffer = function(t) {
                if (t instanceof s) return !0;
                let e = "object" == typeof t && "EncoderBuffer" === t.constructor.name && "number" == typeof t.length && "function" == typeof t.join;
                return e
            }, s.prototype.join = function(t, e) {
                return (!t && (t = o.alloc(this.length)), !e && (e = 0), 0 === this.length) ? t : (Array.isArray(this.value) ? this.value.forEach(function(r) {
                    r.join(t, e), e += r.length
                }) : ("number" == typeof this.value ? t[e] = this.value : "string" == typeof this.value ? t.write(this.value, e) : o.isBuffer(this.value) && this.value.copy(t, e), e += this.length), t)
            }
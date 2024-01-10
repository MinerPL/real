            "use strict";
            r("70102"), r("311790"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341"), r("424973");
            var i = r("630678"),
                n = r("112774"),
                o = r("566239"),
                a = r("876809"),
                s = r("227386"),
                f = Object.prototype.toString;

            function h(t) {
                if (!(this instanceof h)) return new h(t);
                this.options = n.assign({
                    level: -1,
                    method: 8,
                    chunkSize: 16384,
                    windowBits: 15,
                    memLevel: 8,
                    strategy: 0,
                    to: ""
                }, t || {});
                var e, r = this.options;
                r.raw && r.windowBits > 0 ? r.windowBits = -r.windowBits : r.gzip && r.windowBits > 0 && r.windowBits < 16 && (r.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new s, this.strm.avail_out = 0;
                var c = i.deflateInit2(this.strm, r.level, r.method, r.windowBits, r.memLevel, r.strategy);
                if (0 !== c) throw Error(a[c]);
                if (r.header && i.deflateSetHeader(this.strm, r.header), r.dictionary) {
                    if (e = "string" == typeof r.dictionary ? o.string2buf(r.dictionary) : "[object ArrayBuffer]" === f.call(r.dictionary) ? new Uint8Array(r.dictionary) : r.dictionary, 0 !== (c = i.deflateSetDictionary(this.strm, e))) throw Error(a[c]);
                    this._dict_set = !0
                }
            }

            function c(t, e) {
                var r = new h(e);
                if (r.push(t, !0), r.err) throw r.msg || a[r.err];
                return r.result
            }
            h.prototype.push = function(t, e) {
                var r, a, s = this.strm,
                    h = this.options.chunkSize;
                if (this.ended) return !1;
                a = e === ~~e ? e : !0 === e ? 4 : 0, "string" == typeof t ? s.input = o.string2buf(t) : "[object ArrayBuffer]" === f.call(t) ? s.input = new Uint8Array(t) : s.input = t, s.next_in = 0, s.avail_in = s.input.length;
                do {
                    if (0 === s.avail_out && (s.output = new n.Buf8(h), s.next_out = 0, s.avail_out = h), 1 !== (r = i.deflate(s, a)) && 0 !== r) return this.onEnd(r), this.ended = !0, !1;
                    (0 === s.avail_out || 0 === s.avail_in && (4 === a || 2 === a)) && ("string" === this.options.to ? this.onData(o.buf2binstring(n.shrinkBuf(s.output, s.next_out))) : this.onData(n.shrinkBuf(s.output, s.next_out)))
                } while ((s.avail_in > 0 || 0 === s.avail_out) && 1 !== r);
                return 4 === a ? (r = i.deflateEnd(this.strm), this.onEnd(r), this.ended = !0, 0 === r) : (2 === a && (this.onEnd(0), s.avail_out = 0), !0)
            }, h.prototype.onData = function(t) {
                this.chunks.push(t)
            }, h.prototype.onEnd = function(t) {
                0 === t && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = n.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
            };
            e.Deflate = h, e.deflate = c, e.deflateRaw = function(t, e) {
                return (e = e || {}).raw = !0, c(t, e)
            }, e.gzip = function(t, e) {
                return (e = e || {}).gzip = !0, c(t, e)
            }
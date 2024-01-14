"use strict";
s("70102"), s("311790"), s("477657"), s("811875"), s("90301"), s("652153"), s("28797"), s("817884"), s("597349"), s("667536"), s("690341"), s("424973");
var r = s("630678"),
  i = s("112774"),
  n = s("566239"),
  c = s("876809"),
  o = s("227386"),
  f = Object.prototype.toString;

function u(t) {
  if (!(this instanceof u)) return new u(t);
  this.options = i.assign({
    level: -1,
    method: 8,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: 0,
    to: ""
  }, t || {});
  var e, s = this.options;
  s.raw && s.windowBits > 0 ? s.windowBits = -s.windowBits : s.gzip && s.windowBits > 0 && s.windowBits < 16 && (s.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new o, this.strm.avail_out = 0;
  var a = r.deflateInit2(this.strm, s.level, s.method, s.windowBits, s.memLevel, s.strategy);
  if (0 !== a) throw Error(c[a]);
  if (s.header && r.deflateSetHeader(this.strm, s.header), s.dictionary) {
    if (e = "string" == typeof s.dictionary ? n.string2buf(s.dictionary) : "[object ArrayBuffer]" === f.call(s.dictionary) ? new Uint8Array(s.dictionary) : s.dictionary, 0 !== (a = r.deflateSetDictionary(this.strm, e))) throw Error(c[a]);
    this._dict_set = !0
  }
}

function a(t, e) {
  var s = new u(e);
  if (s.push(t, !0), s.err) throw s.msg || c[s.err];
  return s.result
}
u.prototype.push = function(t, e) {
  var s, c, o = this.strm,
    u = this.options.chunkSize;
  if (this.ended) return !1;
  c = e === ~~e ? e : !0 === e ? 4 : 0, "string" == typeof t ? o.input = n.string2buf(t) : "[object ArrayBuffer]" === f.call(t) ? o.input = new Uint8Array(t) : o.input = t, o.next_in = 0, o.avail_in = o.input.length;
  do {
    if (0 === o.avail_out && (o.output = new i.Buf8(u), o.next_out = 0, o.avail_out = u), 1 !== (s = r.deflate(o, c)) && 0 !== s) return this.onEnd(s), this.ended = !0, !1;
    (0 === o.avail_out || 0 === o.avail_in && (4 === c || 2 === c)) && ("string" === this.options.to ? this.onData(n.buf2binstring(i.shrinkBuf(o.output, o.next_out))) : this.onData(i.shrinkBuf(o.output, o.next_out)))
  } while ((o.avail_in > 0 || 0 === o.avail_out) && 1 !== s);
  return 4 === c ? (s = r.deflateEnd(this.strm), this.onEnd(s), this.ended = !0, 0 === s) : (2 === c && (this.onEnd(0), o.avail_out = 0), !0)
}, u.prototype.onData = function(t) {
  this.chunks.push(t)
}, u.prototype.onEnd = function(t) {
  0 === t && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = i.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
};
e.Deflate = u, e.deflate = a, e.deflateRaw = function(t, e) {
  return (e = e || {}).raw = !0, a(t, e)
}, e.gzip = function(t, e) {
  return (e = e || {}).gzip = !0, a(t, e)
}
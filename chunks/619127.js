            var i = r("912065").Buffer;

            function n(t) {
                !i.isBuffer(t) && (t = i.from(t));
                for (var e = t.length / 4 | 0, r = Array(e), n = 0; n < e; n++) r[n] = t.readUInt32BE(4 * n);
                return r
            }

            function a(t) {
                for (; 0 < t.length; t++) t[0] = 0
            }

            function o(t, e, r, i, n) {
                for (var a, o, s, f, h = r[0], c = r[1], u = r[2], d = r[3], l = t[0] ^ e[0], p = t[1] ^ e[1], b = t[2] ^ e[2], m = t[3] ^ e[3], g = 4, v = 1; v < n; v++) a = h[l >>> 24] ^ c[p >>> 16 & 255] ^ u[b >>> 8 & 255] ^ d[255 & m] ^ e[g++], o = h[p >>> 24] ^ c[b >>> 16 & 255] ^ u[m >>> 8 & 255] ^ d[255 & l] ^ e[g++], s = h[b >>> 24] ^ c[m >>> 16 & 255] ^ u[l >>> 8 & 255] ^ d[255 & p] ^ e[g++], f = h[m >>> 24] ^ c[l >>> 16 & 255] ^ u[p >>> 8 & 255] ^ d[255 & b] ^ e[g++], l = a, p = o, b = s, m = f;
                return a = (i[l >>> 24] << 24 | i[p >>> 16 & 255] << 16 | i[b >>> 8 & 255] << 8 | i[255 & m]) ^ e[g++], o = (i[p >>> 24] << 24 | i[b >>> 16 & 255] << 16 | i[m >>> 8 & 255] << 8 | i[255 & l]) ^ e[g++], s = (i[b >>> 24] << 24 | i[m >>> 16 & 255] << 16 | i[l >>> 8 & 255] << 8 | i[255 & p]) ^ e[g++], f = (i[m >>> 24] << 24 | i[l >>> 16 & 255] << 16 | i[p >>> 8 & 255] << 8 | i[255 & b]) ^ e[g++], [a >>>= 0, o >>>= 0, s >>>= 0, f >>>= 0]
            }
            var s = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                f = function() {
                    for (var t = Array(256), e = 0; e < 256; e++) e < 128 ? t[e] = e << 1 : t[e] = e << 1 ^ 283;
                    for (var r = [], i = [], n = [
                            [],
                            [],
                            [],
                            []
                        ], a = [
                            [],
                            [],
                            [],
                            []
                        ], o = 0, s = 0, f = 0; f < 256; ++f) {
                        var h = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
                        h = h >>> 8 ^ 255 & h ^ 99, r[o] = h, i[h] = o;
                        var c = t[o],
                            u = t[c],
                            d = t[u],
                            l = 257 * t[h] ^ 16843008 * h;
                        n[0][o] = l << 24 | l >>> 8, n[1][o] = l << 16 | l >>> 16, n[2][o] = l << 8 | l >>> 24, n[3][o] = l, l = 16843009 * d ^ 65537 * u ^ 257 * c ^ 16843008 * o, a[0][h] = l << 24 | l >>> 8, a[1][h] = l << 16 | l >>> 16, a[2][h] = l << 8 | l >>> 24, a[3][h] = l, 0 === o ? o = s = 1 : (o = c ^ t[t[t[d ^ c]]], s ^= t[t[s]])
                    }
                    return {
                        SBOX: r,
                        INV_SBOX: i,
                        SUB_MIX: n,
                        INV_SUB_MIX: a
                    }
                }();

            function h(t) {
                this._key = n(t), this._reset()
            }
            h.blockSize = 16, h.keySize = 32, h.prototype.blockSize = h.blockSize, h.prototype.keySize = h.keySize, h.prototype._reset = function() {
                for (var t = this._key, e = t.length, r = e + 6, i = (r + 1) * 4, n = [], a = 0; a < e; a++) n[a] = t[a];
                for (a = e; a < i; a++) {
                    var o = n[a - 1];
                    a % e == 0 ? (o = o << 8 | o >>> 24, o = (f.SBOX[o >>> 24] << 24 | f.SBOX[o >>> 16 & 255] << 16 | f.SBOX[o >>> 8 & 255] << 8 | f.SBOX[255 & o]) ^ s[a / e | 0] << 24) : e > 6 && a % e == 4 && (o = f.SBOX[o >>> 24] << 24 | f.SBOX[o >>> 16 & 255] << 16 | f.SBOX[o >>> 8 & 255] << 8 | f.SBOX[255 & o]), n[a] = n[a - e] ^ o
                }
                for (var h = [], c = 0; c < i; c++) {
                    var u = i - c,
                        d = n[u - (c % 4 ? 0 : 4)];
                    c < 4 || u <= 4 ? h[c] = d : h[c] = f.INV_SUB_MIX[0][f.SBOX[d >>> 24]] ^ f.INV_SUB_MIX[1][f.SBOX[d >>> 16 & 255]] ^ f.INV_SUB_MIX[2][f.SBOX[d >>> 8 & 255]] ^ f.INV_SUB_MIX[3][f.SBOX[255 & d]]
                }
                this._nRounds = r, this._keySchedule = n, this._invKeySchedule = h
            }, h.prototype.encryptBlockRaw = function(t) {
                return o(t = n(t), this._keySchedule, f.SUB_MIX, f.SBOX, this._nRounds)
            }, h.prototype.encryptBlock = function(t) {
                var e = this.encryptBlockRaw(t),
                    r = i.allocUnsafe(16);
                return r.writeUInt32BE(e[0], 0), r.writeUInt32BE(e[1], 4), r.writeUInt32BE(e[2], 8), r.writeUInt32BE(e[3], 12), r
            }, h.prototype.decryptBlock = function(t) {
                var e = (t = n(t))[1];
                t[1] = t[3], t[3] = e;
                var r = o(t, this._invKeySchedule, f.INV_SUB_MIX, f.INV_SBOX, this._nRounds),
                    a = i.allocUnsafe(16);
                return a.writeUInt32BE(r[0], 0), a.writeUInt32BE(r[3], 4), a.writeUInt32BE(r[2], 8), a.writeUInt32BE(r[1], 12), a
            }, h.prototype.scrub = function() {
                a(this._keySchedule), a(this._invKeySchedule), a(this._key)
            }, t.exports.AES = h
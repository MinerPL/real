            var r = s("912065").Buffer;

            function i(t) {
                !r.isBuffer(t) && (t = r.from(t));
                for (var e = t.length / 4 | 0, s = Array(e), i = 0; i < e; i++) s[i] = t.readUInt32BE(4 * i);
                return s
            }

            function n(t) {
                for (; 0 < t.length; t++) t[0] = 0
            }

            function c(t, e, s, r, i) {
                for (var n, c, o, f, u = s[0], a = s[1], d = s[2], p = s[3], b = t[0] ^ e[0], h = t[1] ^ e[1], l = t[2] ^ e[2], g = t[3] ^ e[3], v = 4, x = 1; x < i; x++) n = u[b >>> 24] ^ a[h >>> 16 & 255] ^ d[l >>> 8 & 255] ^ p[255 & g] ^ e[v++], c = u[h >>> 24] ^ a[l >>> 16 & 255] ^ d[g >>> 8 & 255] ^ p[255 & b] ^ e[v++], o = u[l >>> 24] ^ a[g >>> 16 & 255] ^ d[b >>> 8 & 255] ^ p[255 & h] ^ e[v++], f = u[g >>> 24] ^ a[b >>> 16 & 255] ^ d[h >>> 8 & 255] ^ p[255 & l] ^ e[v++], b = n, h = c, l = o, g = f;
                return n = (r[b >>> 24] << 24 | r[h >>> 16 & 255] << 16 | r[l >>> 8 & 255] << 8 | r[255 & g]) ^ e[v++], c = (r[h >>> 24] << 24 | r[l >>> 16 & 255] << 16 | r[g >>> 8 & 255] << 8 | r[255 & b]) ^ e[v++], o = (r[l >>> 24] << 24 | r[g >>> 16 & 255] << 16 | r[b >>> 8 & 255] << 8 | r[255 & h]) ^ e[v++], f = (r[g >>> 24] << 24 | r[b >>> 16 & 255] << 16 | r[h >>> 8 & 255] << 8 | r[255 & l]) ^ e[v++], [n >>>= 0, c >>>= 0, o >>>= 0, f >>>= 0]
            }
            var o = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                f = function() {
                    for (var t = Array(256), e = 0; e < 256; e++) e < 128 ? t[e] = e << 1 : t[e] = e << 1 ^ 283;
                    for (var s = [], r = [], i = [
                            [],
                            [],
                            [],
                            []
                        ], n = [
                            [],
                            [],
                            [],
                            []
                        ], c = 0, o = 0, f = 0; f < 256; ++f) {
                        var u = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4;
                        u = u >>> 8 ^ 255 & u ^ 99, s[c] = u, r[u] = c;
                        var a = t[c],
                            d = t[a],
                            p = t[d],
                            b = 257 * t[u] ^ 16843008 * u;
                        i[0][c] = b << 24 | b >>> 8, i[1][c] = b << 16 | b >>> 16, i[2][c] = b << 8 | b >>> 24, i[3][c] = b, b = 16843009 * p ^ 65537 * d ^ 257 * a ^ 16843008 * c, n[0][u] = b << 24 | b >>> 8, n[1][u] = b << 16 | b >>> 16, n[2][u] = b << 8 | b >>> 24, n[3][u] = b, 0 === c ? c = o = 1 : (c = a ^ t[t[t[p ^ a]]], o ^= t[t[o]])
                    }
                    return {
                        SBOX: s,
                        INV_SBOX: r,
                        SUB_MIX: i,
                        INV_SUB_MIX: n
                    }
                }();

            function u(t) {
                this._key = i(t), this._reset()
            }
            u.blockSize = 16, u.keySize = 32, u.prototype.blockSize = u.blockSize, u.prototype.keySize = u.keySize, u.prototype._reset = function() {
                for (var t = this._key, e = t.length, s = e + 6, r = (s + 1) * 4, i = [], n = 0; n < e; n++) i[n] = t[n];
                for (n = e; n < r; n++) {
                    var c = i[n - 1];
                    n % e == 0 ? (c = c << 8 | c >>> 24, c = (f.SBOX[c >>> 24] << 24 | f.SBOX[c >>> 16 & 255] << 16 | f.SBOX[c >>> 8 & 255] << 8 | f.SBOX[255 & c]) ^ o[n / e | 0] << 24) : e > 6 && n % e == 4 && (c = f.SBOX[c >>> 24] << 24 | f.SBOX[c >>> 16 & 255] << 16 | f.SBOX[c >>> 8 & 255] << 8 | f.SBOX[255 & c]), i[n] = i[n - e] ^ c
                }
                for (var u = [], a = 0; a < r; a++) {
                    var d = r - a,
                        p = i[d - (a % 4 ? 0 : 4)];
                    a < 4 || d <= 4 ? u[a] = p : u[a] = f.INV_SUB_MIX[0][f.SBOX[p >>> 24]] ^ f.INV_SUB_MIX[1][f.SBOX[p >>> 16 & 255]] ^ f.INV_SUB_MIX[2][f.SBOX[p >>> 8 & 255]] ^ f.INV_SUB_MIX[3][f.SBOX[255 & p]]
                }
                this._nRounds = s, this._keySchedule = i, this._invKeySchedule = u
            }, u.prototype.encryptBlockRaw = function(t) {
                return c(t = i(t), this._keySchedule, f.SUB_MIX, f.SBOX, this._nRounds)
            }, u.prototype.encryptBlock = function(t) {
                var e = this.encryptBlockRaw(t),
                    s = r.allocUnsafe(16);
                return s.writeUInt32BE(e[0], 0), s.writeUInt32BE(e[1], 4), s.writeUInt32BE(e[2], 8), s.writeUInt32BE(e[3], 12), s
            }, u.prototype.decryptBlock = function(t) {
                var e = (t = i(t))[1];
                t[1] = t[3], t[3] = e;
                var s = c(t, this._invKeySchedule, f.INV_SUB_MIX, f.INV_SBOX, this._nRounds),
                    n = r.allocUnsafe(16);
                return n.writeUInt32BE(s[0], 0), n.writeUInt32BE(s[3], 4), n.writeUInt32BE(s[2], 8), n.writeUInt32BE(s[1], 12), n
            }, u.prototype.scrub = function() {
                n(this._keySchedule), n(this._invKeySchedule), n(this._key)
            }, t.exports.AES = u
            var i = r("599235"),
                n = r("515886"),
                a = r("912065").Buffer,
                o = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
                s = Array(160);

            function f() {
                this.init(), this._w = s, n.call(this, 128, 112)
            }

            function h(t, e, r) {
                return r ^ t & (e ^ r)
            }

            function c(t, e, r) {
                return t & e | r & (t | e)
            }

            function u(t, e) {
                return (t >>> 28 | e << 4) ^ (e >>> 2 | t << 30) ^ (e >>> 7 | t << 25)
            }

            function d(t, e) {
                return (t >>> 14 | e << 18) ^ (t >>> 18 | e << 14) ^ (e >>> 9 | t << 23)
            }
            i(f, n), f.prototype.init = function() {
                return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
            };

            function l(t, e) {
                return t >>> 0 < e >>> 0 ? 1 : 0
            }
            f.prototype._update = function(t) {
                for (var e = this._w, r = 0 | this._ah, i = 0 | this._bh, n = 0 | this._ch, a = 0 | this._dh, s = 0 | this._eh, f = 0 | this._fh, h = 0 | this._gh, c = 0 | this._hh, p = 0 | this._al, b = 0 | this._bl, m = 0 | this._cl, g = 0 | this._dl, v = 0 | this._el, y = 0 | this._fl, _ = 0 | this._gl, w = 0 | this._hl, M = 0; M < 32; M += 2) e[M] = t.readInt32BE(4 * M), e[M + 1] = t.readInt32BE(4 * M + 4);
                for (; M < 160; M += 2) {
                    var S, k, E, A, x, B, R, I, C = e[M - 30],
                        j = e[M - 30 + 1];
                    var T = ((S = C) >>> 1 | (k = j) << 31) ^ (S >>> 8 | k << 24) ^ S >>> 7;
                    var P = ((E = j) >>> 1 | (A = C) << 31) ^ (E >>> 8 | A << 24) ^ (E >>> 7 | A << 25);
                    C = e[M - 4], j = e[M - 4 + 1];
                    var z = ((x = C) >>> 19 | (B = j) << 13) ^ (B >>> 29 | x << 3) ^ x >>> 6;
                    var O = ((R = j) >>> 19 | (I = C) << 13) ^ (I >>> 29 | R << 3) ^ (R >>> 6 | I << 26),
                        L = e[M - 14],
                        D = e[M - 14 + 1],
                        N = e[M - 32],
                        q = e[M - 32 + 1],
                        U = P + D | 0,
                        F = T + L + l(U, P) | 0;
                    F = F + z + l(U = U + O | 0, O) | 0, F = F + N + l(U = U + q | 0, q) | 0, e[M] = F, e[M + 1] = U
                }
                for (var K = 0; K < 160; K += 2) {
                    F = e[K], U = e[K + 1];
                    var H, Z, W, V, G, X, Y, J, $, Q, tt = (H = r) & (Z = i) | n & (H | Z);
                    var te = (W = p) & (V = b) | m & (W | V),
                        tr = u(r, p),
                        ti = u(p, r),
                        tn = d(s, v),
                        ta = d(v, s),
                        to = o[K],
                        ts = o[K + 1];
                    var tf = (G = s, X = f, (Y = h) ^ G & (X ^ Y));
                    var th = (J = v, $ = y, (Q = _) ^ J & ($ ^ Q)),
                        tc = w + ta | 0,
                        tu = c + tn + l(tc, w) | 0;
                    tu = tu + tf + l(tc = tc + th | 0, th) | 0, tu = tu + to + l(tc = tc + ts | 0, ts) | 0, tu = tu + F + l(tc = tc + U | 0, U) | 0;
                    var td = ti + te | 0,
                        tl = tr + tt + l(td, ti) | 0;
                    c = h, w = _, h = f, _ = y, f = s, y = v, s = a + tu + l(v = g + tc | 0, g) | 0, a = n, g = m, n = i, m = b, i = r, b = p, r = tu + tl + l(p = tc + td | 0, tc) | 0
                }
                this._al = this._al + p | 0, this._bl = this._bl + b | 0, this._cl = this._cl + m | 0, this._dl = this._dl + g | 0, this._el = this._el + v | 0, this._fl = this._fl + y | 0, this._gl = this._gl + _ | 0, this._hl = this._hl + w | 0, this._ah = this._ah + r + l(this._al, p) | 0, this._bh = this._bh + i + l(this._bl, b) | 0, this._ch = this._ch + n + l(this._cl, m) | 0, this._dh = this._dh + a + l(this._dl, g) | 0, this._eh = this._eh + s + l(this._el, v) | 0, this._fh = this._fh + f + l(this._fl, y) | 0, this._gh = this._gh + h + l(this._gl, _) | 0, this._hh = this._hh + c + l(this._hl, w) | 0
            }, f.prototype._hash = function() {
                var t = a.allocUnsafe(64);

                function e(e, r, i) {
                    t.writeInt32BE(e, i), t.writeInt32BE(r, i + 4)
                }
                return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), e(this._gh, this._gl, 48), e(this._hh, this._hl, 56), t
            }, t.exports = f
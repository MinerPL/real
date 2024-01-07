            "use strict";
            t.exports = function(t, e) {
                var r, i, n, o, a, s, f, h, c, u, d, l, p, b, m, g, y, v, _, w, M, S, k, x, E;
                r = t.state, i = t.next_in, x = t.input, n = i + (t.avail_in - 5), o = t.next_out, E = t.output, a = o - (e - t.avail_out), s = o + (t.avail_out - 257), f = r.dmax, h = r.wsize, c = r.whave, u = r.wnext, d = r.window, l = r.hold, p = r.bits, b = r.lencode, m = r.distcode, g = (1 << r.lenbits) - 1, y = (1 << r.distbits) - 1;
                e: do
                        for (p < 15 && (l += x[i++] << p, p += 8, l += x[i++] << p, p += 8), v = b[l & g];;) {
                            if (l >>>= _ = v >>> 24, p -= _, 0 == (_ = v >>> 16 & 255)) E[o++] = 65535 & v;
                            else if (16 & _)
                                for (w = 65535 & v, (_ &= 15) && (p < _ && (l += x[i++] << p, p += 8), w += l & (1 << _) - 1, l >>>= _, p -= _), p < 15 && (l += x[i++] << p, p += 8, l += x[i++] << p, p += 8), v = m[l & y];;) {
                                    if (l >>>= _ = v >>> 24, p -= _, 16 & (_ = v >>> 16 & 255)) {
                                        if (M = 65535 & v, p < (_ &= 15) && (l += x[i++] << p, (p += 8) < _ && (l += x[i++] << p, p += 8)), (M += l & (1 << _) - 1) > f) {
                                            t.msg = "invalid distance too far back", r.mode = 30;
                                            break e
                                        }
                                        if (l >>>= _, p -= _, M > (_ = o - a)) {
                                            if ((_ = M - _) > c && r.sane) {
                                                t.msg = "invalid distance too far back", r.mode = 30;
                                                break e
                                            }
                                            if (S = 0, k = d, 0 === u) {
                                                if (S += h - _, _ < w) {
                                                    w -= _;
                                                    do E[o++] = d[S++]; while (--_);
                                                    S = o - M, k = E
                                                }
                                            } else if (u < _) {
                                                if (S += h + u - _, (_ -= u) < w) {
                                                    w -= _;
                                                    do E[o++] = d[S++]; while (--_);
                                                    if (S = 0, u < w) {
                                                        w -= _ = u;
                                                        do E[o++] = d[S++]; while (--_);
                                                        S = o - M, k = E
                                                    }
                                                }
                                            } else if (S += u - _, _ < w) {
                                                w -= _;
                                                do E[o++] = d[S++]; while (--_);
                                                S = o - M, k = E
                                            }
                                            for (; w > 2;) E[o++] = k[S++], E[o++] = k[S++], E[o++] = k[S++], w -= 3;
                                            w && (E[o++] = k[S++], w > 1 && (E[o++] = k[S++]))
                                        } else {
                                            S = o - M;
                                            do E[o++] = E[S++], E[o++] = E[S++], E[o++] = E[S++], w -= 3; while (w > 2);
                                            w && (E[o++] = E[S++], w > 1 && (E[o++] = E[S++]))
                                        }
                                    } else if ((64 & _) == 0) {
                                        v = m[(65535 & v) + (l & (1 << _) - 1)];
                                        continue
                                    } else {
                                        t.msg = "invalid distance code", r.mode = 30;
                                        break e
                                    }
                                    break
                                } else if ((64 & _) == 0) {
                                    v = b[(65535 & v) + (l & (1 << _) - 1)];
                                    continue
                                } else if (32 & _) {
                                r.mode = 12;
                                break e
                            } else {
                                t.msg = "invalid literal/length code", r.mode = 30;
                                break e
                            }
                            break
                        }
                    while (i < n && o < s);
                i -= w = p >> 3, p -= w << 3, l &= (1 << p) - 1, t.next_in = i, t.next_out = o, t.avail_in = i < n ? 5 + (n - i) : 5 - (i - n), t.avail_out = o < s ? 257 + (s - o) : 257 - (o - s), r.hold = l, r.bits = p
            }
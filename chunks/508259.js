            "use strict";
            t.exports = function(t, e) {
                var r, i, n, a, o, s, f, h, c, u, d, l, p, b, m, g, v, y, _, w, M, S, k, E, A;
                r = t.state, i = t.next_in, E = t.input, n = i + (t.avail_in - 5), a = t.next_out, A = t.output, o = a - (e - t.avail_out), s = a + (t.avail_out - 257), f = r.dmax, h = r.wsize, c = r.whave, u = r.wnext, d = r.window, l = r.hold, p = r.bits, b = r.lencode, m = r.distcode, g = (1 << r.lenbits) - 1, v = (1 << r.distbits) - 1;
                e: do
                        for (p < 15 && (l += E[i++] << p, p += 8, l += E[i++] << p, p += 8), y = b[l & g];;) {
                            if (l >>>= _ = y >>> 24, p -= _, 0 == (_ = y >>> 16 & 255)) A[a++] = 65535 & y;
                            else if (16 & _)
                                for (w = 65535 & y, (_ &= 15) && (p < _ && (l += E[i++] << p, p += 8), w += l & (1 << _) - 1, l >>>= _, p -= _), p < 15 && (l += E[i++] << p, p += 8, l += E[i++] << p, p += 8), y = m[l & v];;) {
                                    if (l >>>= _ = y >>> 24, p -= _, 16 & (_ = y >>> 16 & 255)) {
                                        if (M = 65535 & y, p < (_ &= 15) && (l += E[i++] << p, (p += 8) < _ && (l += E[i++] << p, p += 8)), (M += l & (1 << _) - 1) > f) {
                                            t.msg = "invalid distance too far back", r.mode = 30;
                                            break e
                                        }
                                        if (l >>>= _, p -= _, M > (_ = a - o)) {
                                            if ((_ = M - _) > c && r.sane) {
                                                t.msg = "invalid distance too far back", r.mode = 30;
                                                break e
                                            }
                                            if (S = 0, k = d, 0 === u) {
                                                if (S += h - _, _ < w) {
                                                    w -= _;
                                                    do A[a++] = d[S++]; while (--_);
                                                    S = a - M, k = A
                                                }
                                            } else if (u < _) {
                                                if (S += h + u - _, (_ -= u) < w) {
                                                    w -= _;
                                                    do A[a++] = d[S++]; while (--_);
                                                    if (S = 0, u < w) {
                                                        w -= _ = u;
                                                        do A[a++] = d[S++]; while (--_);
                                                        S = a - M, k = A
                                                    }
                                                }
                                            } else if (S += u - _, _ < w) {
                                                w -= _;
                                                do A[a++] = d[S++]; while (--_);
                                                S = a - M, k = A
                                            }
                                            for (; w > 2;) A[a++] = k[S++], A[a++] = k[S++], A[a++] = k[S++], w -= 3;
                                            w && (A[a++] = k[S++], w > 1 && (A[a++] = k[S++]))
                                        } else {
                                            S = a - M;
                                            do A[a++] = A[S++], A[a++] = A[S++], A[a++] = A[S++], w -= 3; while (w > 2);
                                            w && (A[a++] = A[S++], w > 1 && (A[a++] = A[S++]))
                                        }
                                    } else if ((64 & _) == 0) {
                                        y = m[(65535 & y) + (l & (1 << _) - 1)];
                                        continue
                                    } else {
                                        t.msg = "invalid distance code", r.mode = 30;
                                        break e
                                    }
                                    break
                                } else if ((64 & _) == 0) {
                                    y = b[(65535 & y) + (l & (1 << _) - 1)];
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
                    while (i < n && a < s);
                i -= w = p >> 3, p -= w << 3, l &= (1 << p) - 1, t.next_in = i, t.next_out = a, t.avail_in = i < n ? 5 + (n - i) : 5 - (i - n), t.avail_out = a < s ? 257 + (s - a) : 257 - (a - s), r.hold = l, r.bits = p
            }
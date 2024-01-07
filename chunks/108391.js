            "use strict";
            var i, r, l, s;
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102"), n("222007"), n("808653"), n("990131"), n("424973");
            (l = i || (i = {}))[l.NONE = 0] = "NONE", l[l.CONTINUATION = 1] = "CONTINUATION", l[l.BEGINNING_OF_STREAM = 2] = "BEGINNING_OF_STREAM", l[l.END_OF_STREAM = 4] = "END_OF_STREAM";
            class a {
                appendBytes(e) {
                    if (this._offset + e.length > this._buffer.length) {
                        let t = this._offset + e.length,
                            n = Math.pow(2, Math.ceil(Math.log2(Math.max(2 * this._buffer.length, t)))),
                            i = new Uint8Array(n);
                        i.set(this._buffer.subarray(0, this._offset)), this._buffer = i
                    }
                    this._buffer.set(e, this._offset), this._offset += e.length
                }
                addPage(e) {
                    if (e.segments.length > 255) throw Error("Too many segments: ".concat(e.segments.length, " exceeds limit of ").concat(255));
                    for (let [t, n] of e.segments.entries())
                        if (n.length > 255) throw Error("Segment at index ".concat(t, " too large (length ").concat(n.length, " exceeds ").concat(255, ")"));
                    let t = e.segments.reduce((e, t) => e + t.length, 0),
                        n = 27 + e.segments.length + t;
                    if (n > 65307) throw Error("Page too large (size ".concat(n, " exceeds ").concat(65307, ")"));
                    let i = this._offset,
                        r = 0;
                    switch (e.pageType) {
                        case 1:
                            r = 1;
                            break;
                        case 2:
                            r = 2;
                            break;
                        case 4:
                            r = 4
                    }
                    this.appendBytes([79, 103, 103, 83, 0, r, 255 & e.granulePosition, e.granulePosition >> 8 & 255, e.granulePosition >> 16 & 255, e.granulePosition >> 24 & 255, 0, 0, 0, 0, 0, 0, 0, 1, 255 & this._pageSequenceNumber, this._pageSequenceNumber >> 8 & 255, this._pageSequenceNumber >> 16 & 255, this._pageSequenceNumber >> 24 & 255]);
                    let l = this._offset;
                    for (let t of (this.appendBytes([0, 0, 0, 0, e.segments.length]), this.appendBytes(e.segments.map(e => e.length)), e.segments)) this.appendBytes(t);
                    let s = function(e) {
                        return e.reduce((e, t) => e << 8 >>> 0 ^ u[e >>> 24 ^ t], 0) >>> 0
                    }(this._buffer.subarray(i, this._offset));
                    this._buffer.set([255 & s, s >> 8 & 255, s >> 16 & 255, s >> 24 & 255], l), this._pageSequenceNumber++
                }
                finalize(e) {
                    this.addPage({
                        pageType: 4,
                        granulePosition: e,
                        segments: []
                    });
                    let t = this._buffer,
                        n = this._offset;
                    return this._buffer = new Uint8Array(4096), this._offset = 0, this._pageSequenceNumber = 0, t.subarray(0, n)
                }
                constructor() {
                    this._buffer = new Uint8Array(4096), this._pageSequenceNumber = 0, this._offset = 0
                }
            }

            function o(e, t) {
                let n = new Uint8Array([79, 112, 117, 115, 72, 101, 97, 100, 1, t.channelCount, 0, 15, 255 & t.inputSampleRate, t.inputSampleRate >> 8 & 255, t.inputSampleRate >> 16 & 255, t.inputSampleRate >> 24 & 255, 255 & t.outputGain, t.outputGain >> 8 & 255, t.channelMappingFamily]),
                    i = new Uint8Array([79, 112, 117, 115, 84, 97, 103, 115, 0, 0, 0, 0, 0, 0, 0, 0]),
                    r = new a;
                r.addPage({
                    pageType: 2,
                    granulePosition: 0,
                    segments: [n]
                });
                let l = 0;
                for (let t of (r.addPage({
                        pageType: 0,
                        granulePosition: l,
                        segments: [i]
                    }), e)) {
                    let e = function(e) {
                        let t = Math.floor(e.length / 255),
                            n = [];
                        for (let i = 0; i <= t; i++) {
                            let r = 0 === i ? 0 : 255 * i,
                                l = i === t ? e.length : (i + 1) * 255;
                            n.push(e.slice(r, l))
                        }
                        return n
                    }(t.buffer);
                    l += t.numSamples, r.addPage({
                        pageType: 0,
                        granulePosition: l,
                        segments: e
                    })
                }
                return r.finalize(l)
            }(s = r || (r = {}))[s.ZERO = 0] = "ZERO";
            let u = function() {
                let e = new Uint32Array(256);
                for (let t = 256; t > 0; t--) {
                    let n = t << 24;
                    for (let e = 8; e > 0; e--) n = 2147483648 & n ? 79764919 ^ n << 1 : n << 1;
                    e[t] = n
                }
                return e
            }()
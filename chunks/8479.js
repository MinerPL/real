            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("424973"), n("70102"), n("222007");
            var i, r = n("44170"),
                s = n("383536"),
                a = n.n(s),
                o = n("588446");
            i = class extends r.EventEmitter {
                addStream(e, t, n) {
                    let i = !1;
                    !this.streams.some(e => e.ssrc === t) && this.streams.push({
                        ssrc: t,
                        cname: e,
                        type: "audio"
                    }), this.activeAudioSSRCs[e] !== t && (this.activeAudioSSRCs = {
                        ...this.activeAudioSSRCs,
                        [e]: t
                    }, i = !0), null != n && (n > 0 ? (!this.streams.some(e => e.ssrc === n) && this.streams.push({
                        ssrc: n,
                        cname: e,
                        type: "video"
                    }), this.activeVideoSSRCs[e] !== n && (this.activeVideoSSRCs = {
                        ...this.activeVideoSSRCs,
                        [e]: n
                    }, i = !0)) : null != this.activeVideoSSRCs[e] && (i = !0, this.activeVideoSSRCs = {
                        ...this.activeVideoSSRCs
                    }, delete this.activeVideoSSRCs[e])), i && this.negotiationNeeded()
                }
                removeStream(e) {
                    let t = !1;
                    null != this.activeAudioSSRCs[e] && (t = !0, this.activeAudioSSRCs = {
                        ...this.activeAudioSSRCs
                    }, delete this.activeAudioSSRCs[e]), null != this.activeVideoSSRCs[e] && (t = !0, this.activeVideoSSRCs = {
                        ...this.activeVideoSSRCs
                    }, delete this.activeVideoSSRCs[e]), t && this.negotiationNeeded()
                }
                get sdp() {
                    if (null == this._sdp) throw Error("sdp is not set");
                    return this._sdp
                }
                set sdp(e) {
                    if (!(0, o.validateSdp)(e)) throw Error("Incorrect SDP received from rtc-worker: ".concat(e));
                    this._sdp = e, this.createAnswer(), this.connected = !0, this._negotiationNeeded && this.negotiationNeeded()
                }
                negotiationNeeded() {
                    if (this.negotiating) {
                        this._negotiationNeeded = !0;
                        return
                    }
                    null != this._sdp ? (this.negotiating = !0, this._negotiationNeeded = !1, this.generateSessionDescription("offer")) : this._negotiationNeeded = !0
                }
                setRemoteDescription(e) {
                    return this.negotiating = !1, this._negotiationNeeded && this.negotiationNeeded(), Promise.resolve()
                }
                createAnswer() {
                    return this.generateSessionDescription("answer")
                }
                getSSRCs(e) {
                    let t = this.streams.map((e, t) => {
                        let {
                            cname: n,
                            ssrc: i,
                            type: r
                        } = e, s = this.activeAudioSSRCs[n], a = this.activeVideoSSRCs[n], l = "".concat(r, "_inbound_").concat(t);
                        return [i, n, r, s === i || a === i ? this.direction : o.Directions.INACTIVE, l]
                    });
                    if ("Firefox" !== a.name) return this.connected ? t : [];
                    let n = this.outboundStreams.map((e, t) => [0, "outbound", e.type, (0, o.getDirection)(e.direction), "".concat(e.type, "_outbound_").concat(t)]);
                    if ("answer" !== e) return n.concat(t);
                    {
                        let e = n.length - t.length,
                            i = n.slice(0, e).concat(t).slice(0, n.length);
                        return i.map((e, t) => {
                            let [n, i, r, s, a] = e;
                            return [n, i, r, (0, o.getDirection)(this.outboundStreams[t].direction), this.outboundStreams[t].mid]
                        })
                    }
                }
                generateSessionDescription(e) {
                    let t = this.audioCodec,
                        n = this.audioPayloadType,
                        i = this.videoCodec,
                        r = this.videoPayloadType,
                        s = this.rtxPayloadType,
                        a = this.sdp;
                    if (null == t || null == n || null == i || null == r || null == s || null == a || null == this.direction) throw Error("Invalid payload: audioCodec: ".concat(t, ", audioPayloadType: ").concat(null == n ? "null" : n, ", videoCodec: ").concat(i, ", videoCodecPayloadType: ").concat(null == r ? "null" : r, ", rtxPayloadType: ").concat(null == s ? "null" : s, ", sdp: ").concat(a));
                    let l = (0, o.generateSessionDescription)({
                        type: e,
                        baseSDP: a,
                        direction: this.direction,
                        audioCodec: t,
                        audioPayloadType: n,
                        audioBitRate: 40,
                        videoCodec: i,
                        videoPayloadType: r,
                        videoBitRate: 2500,
                        rtxPayloadType: s,
                        ssrcs: this.getSSRCs(e),
                        extensions: this.extensions
                    });
                    return this.emit(e, l), Promise.resolve(l)
                }
                constructor(...e) {
                    super(...e), this.audioCodec = null, this.audioPayloadType = null, this.videoCodec = null, this.videoPayloadType = null, this.rtxPayloadType = null, this.direction = null, this.outboundStreams = [], this.extensions = [], this.streams = [], this.activeAudioSSRCs = {}, this.activeVideoSSRCs = {}, this._sdp = null, this.connected = !1, this.negotiating = !1, this._negotiationNeeded = !1
                }
            }
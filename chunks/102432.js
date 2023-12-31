            "use strict";
            n.r(t), n.d(t, {
                getDataUrlFromFile: function() {
                    return u
                },
                uploadFileReadPromise: function() {
                    return d
                },
                trimAndEncodeAudio: function() {
                    return f
                }
            }), n("70102"), n("424973"), n("370692"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("311790");
            var i = n("627445"),
                r = n.n(i),
                l = n("305122"),
                s = n("108391");
            let a = new AudioContext({
                sampleRate: Math.min(new AudioContext().sampleRate, 48e3)
            });
            async function o(e) {
                let t = await e.arrayBuffer(),
                    n = t instanceof ArrayBuffer;
                if (!n) throw Error("Unexpected file type");
                return a.decodeAudioData(t)
            }
            async function u(e) {
                var t;
                let n = await (t = t => {
                    t.readAsDataURL(e)
                }, new Promise((e, n) => {
                    let i = new FileReader,
                        r = () => {
                            i.removeEventListener("load", r), i.removeEventListener("error", n), e(i.result)
                        };
                    i.addEventListener("load", r), i.addEventListener("error", n), t(i)
                }));
                if ("string" != typeof n) throw Error("Unexpected file type");
                return n
            }
            async function d(e) {
                let {
                    readPromise: t,
                    guildId: n,
                    name: i,
                    volume: r,
                    emojiId: s,
                    emojiName: a
                } = e;
                return (0, l.uploadSound)({
                    guildId: n,
                    name: i,
                    sound: await t,
                    volume: r,
                    emojiId: s,
                    emojiName: a
                })
            }
            async function c(e) {
                let t = [],
                    n = function(e) {
                        let {
                            numberOfChannels: t
                        } = e, n = [];
                        for (let i = 0; i < t; i++) n.push(e.getChannelData(i));
                        return n
                    }(e),
                    i = function(e) {
                        if (1 === e.length) return e[0];
                        if (2 === e.length) {
                            let t = e[0],
                                n = e[1],
                                i = [];
                            for (let e = 0; e < t.length; e++) i.push(t[e]), i.push(n[e]);
                            let r = new Float32Array(i.length);
                            return r.set(i), r
                        }
                        throw Error("Only handles up to 2 channels")
                    }(n),
                    l = new AudioData({
                        format: "f32",
                        sampleRate: e.sampleRate,
                        numberOfFrames: e.length,
                        numberOfChannels: e.numberOfChannels,
                        timestamp: 1e6 * e.duration,
                        data: i
                    }),
                    a = new AudioEncoder({
                        output: function(n) {
                            r(null != n.duration, "Chunk duration must not be null");
                            let i = n.duration / 1e6 * e.sampleRate,
                                l = new Uint8Array(n.byteLength);
                            n.copyTo(l), t.push({
                                buffer: l,
                                numSamples: i
                            })
                        },
                        error: e => {
                            throw Error("Audio encoding error: ".concat(e.message))
                        }
                    });
                a.configure({
                    codec: "opus",
                    sampleRate: e.sampleRate,
                    numberOfChannels: e.numberOfChannels
                }), a.encode(l), await a.flush();
                let o = (0, s.default)(t, {
                    channelCount: e.numberOfChannels,
                    inputSampleRate: e.sampleRate,
                    outputGain: 0,
                    channelMappingFamily: 0
                });
                return new Blob([o], {
                    type: "audio/ogg"
                })
            }
            async function f(e, t) {
                let n = await o(e),
                    i = function(e, t) {
                        let {
                            startMs: n,
                            endMs: i
                        } = t, {
                            sampleRate: r,
                            numberOfChannels: l,
                            duration: s
                        } = e, o = 1e3 * s, u = Math.min(i, o);
                        if (0 === n && u === o) return e;
                        let d = Math.floor(n / o * e.length),
                            c = Math.floor(u / o * e.length),
                            f = a.createBuffer(l, c - d, r);
                        for (let t = 0; t < l; t++) {
                            let n = f.getChannelData(t),
                                i = e.getChannelData(t),
                                r = 0;
                            for (let e = d; e <= c; e++) n[r] = i[e], r++
                        }
                        return f
                    }(n, t),
                    r = await c(i);
                return new File([r], "sound.ogg", {
                    type: "audio/ogg"
                })
            }
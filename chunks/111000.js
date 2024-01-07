            "use strict";
            var i;
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("424973"), n("370692"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
            i = class {
                stop() {
                    this.source.disconnect(), clearInterval(this.interval), this.speakingCounter = 0
                }
                get speaking() {
                    return this.speakingCounter > 0 || this.silentFrames < this.silenceThreshold
                }
                update() {
                    this.currentVolume = function(e, t) {
                        let n = -1 / 0;
                        e.getFloatFrequencyData(t);
                        for (let e = 4; e < t.length; e++) t[e] > n && t[e] < 0 && (n = t[e]);
                        return n
                    }(this.analyser, this.fftBins), this.speakingHistory[this.speakingHistoryIndex] && this.speakingCounter--;
                    let e = this.currentVolume > this.threshold;
                    this.speakingHistory[this.speakingHistoryIndex] = e, e && this.speakingCounter++, ++this.speakingHistoryIndex === this.speakingHistory.length && (this.speakingHistoryIndex = 0), this.speakingCounter > 0 ? this.silentFrames = 0 : this.silentFrames++
                }
                constructor(e, t, n, i = .1, r = 10) {
                    this.currentVolume = 0, this.speakingHistoryIndex = 0, this.speakingCounter = 0, this.onProcess = null;
                    let s = e.createAnalyser();
                    s.fftSize = 512, s.smoothingTimeConstant = i;
                    let a = e.createMediaStreamSource(t);
                    a.connect(s);
                    let o = [];
                    for (let e = 0; e < r; e++) o.push(!1);
                    let l = window.setInterval(() => {
                        var e;
                        this.update(), null === (e = this.onProcess) || void 0 === e || e.call(this, this.speaking, this.currentVolume)
                    }, 20);
                    this.threshold = n, this.analyser = s, this.interval = l, this.fftBins = new Float32Array(s.fftSize), this.source = a, this.speakingHistory = o, this.silenceThreshold = this.speakingHistory.length, this.silentFrames = this.silenceThreshold
                }
            }
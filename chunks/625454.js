            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var i = n("784063"),
                r = new class e {
                    addSink(e, t, n) {
                        let r = this.streams,
                            s = r[e];
                        if (null == s && (s = r[e] = new Map), 0 === s.size) {
                            let t = (0, i.getVoiceEngine)();
                            t.setVideoOutputSink(e, this.handleImageData.bind(this, t.signalVideoOutputSinkReady.bind(t, e), s), !0)
                        }
                        s.set(t, n)
                    }
                    removeSink(e, t) {
                        let n = this.streams,
                            r = n[e];
                        if (null != r && (r.delete(t), 0 === r.size)) {
                            delete n[e];
                            let t = (0, i.getVoiceEngine)();
                            t.setVideoOutputSink(e)
                        }
                    }
                    handleImageData(e, t, n) {
                        for (let e of t.values()) e(n);
                        e()
                    }
                    constructor() {
                        this.streams = {}
                    }
                }
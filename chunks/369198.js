            "use strict";
            n.r(t);
            var i, r = n("383536"),
                s = n.n(r),
                a = n("67021");
            window.AudioContext = null !== (i = window.AudioContext) && void 0 !== i ? i : window.webkitAudioContext, null != window.RTCPeerConnection && "Chrome" === s.name && 52 > (0, a.platformVersion)() && ["createOffer", "createAnswer"].forEach(e => {
                let t = RTCPeerConnection.prototype[e];
                RTCPeerConnection.prototype[e] = function() {
                    for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    let r = this;
                    if (n.length < 1 || 1 === n.length && "object" == typeof n[0]) {
                        let e = 1 === n.length ? n[0] : void 0;
                        return null != e && (e = {
                            mandatory: {
                                OfferToReceiveAudio: e.offerToReceiveAudio || !1,
                                OfferToReceiveVideo: e.offerToReceiveVideo || !1
                            },
                            optional: [{
                                VoiceActivityDetection: e.voiceActivityDetection || !1
                            }, {
                                IceRestart: e.iceRestart || !1
                            }]
                        }), new Promise((n, i) => t.apply(r, [n, i, e]))
                    }
                    return t.apply(this, n)
                }
            })
            "use strict";
            n.r(t), n.d(t, {
                getMinValue: function() {
                    return l
                },
                toSeconds: function() {
                    return s
                },
                getMaxValue: function() {
                    return a
                },
                getStartHandleValue: function() {
                    return o
                },
                getEndHandleValue: function() {
                    return u
                },
                loadAudioFromFile: function() {
                    return d
                },
                loadAudioFileFromUrl: function() {
                    return c
                }
            }), n("70102"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var i = n("89050"),
                r = n("782340");
            let l = (e, t, n) => -1 === e ? 0 : e - t * e / n;

            function s(e) {
                return e / 1e3
            }
            let a = (e, t, n) => -1 === e ? n : e + t * (n - e) / n,
                o = (e, t, n, i) => {
                    let r = 0;
                    return (r = t >= 0 && n > 0 ? (e - (t - n * t / i)) * 100 / n : 100 * e / i).toFixed(4)
                },
                u = (e, t, n, i) => {
                    let r = 0;
                    return (r = t >= 0 && n > 0 ? -((e - (t + n * (i - t) / i)) * 100) / n : -100 * e / i + 100).toFixed(4)
                };
            async function d(e) {
                var t;
                if (!(e.type.startsWith("audio") || e.type.startsWith("video")) || !i.SUPPORTED_AUDIO_FILE_TYPES.has(e.type)) throw Error(r.default.Messages.SOUNDBOARD_ERROR_INVALID_FILE_TYPE.format({
                    fileType: e.type
                }));
                let n = URL.createObjectURL(e),
                    l = new Audio(n);
                return await (t = l, new Promise(e => {
                    let n = () => {
                        e(), t.removeEventListener("canplaythrough", n)
                    };
                    t.addEventListener("canplaythrough", n), t.load()
                })), l
            }
            async function c(e, t) {
                let n = await fetch(e),
                    i = await n.blob();
                return new File([i], t, {
                    type: "audio/mp3"
                })
            }
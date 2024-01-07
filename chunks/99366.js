            "use strict";
            n.r(t), n.d(t, {
                createThumbnail: function() {
                    return a
                },
                createThumbnailFromVideo: function() {
                    return u
                }
            }), n("70102");
            var i = n("80028");
            async function a(e) {
                if (null == e) return "";
                let t = new Blob([e], {
                        type: "image/jpeg"
                    }),
                    n = await new Promise(e => {
                        let n = new FileReader;
                        n.onloadend = () => {
                            e(n.result)
                        }, n.readAsDataURL(t)
                    });
                if ("string" != typeof n) throw Error("Thumbnail creation failed");
                return n
            }
            async function u(e, t) {
                let n = document.createElement("video");
                n.muted = !0, n.src = e, n.currentTime = t, await n.play(), n.pause();
                let a = i.CLIPS_THUMBNAIL_MAX_WIDTH / n.videoWidth,
                    u = i.CLIPS_THUMBNAIL_MAX_HEIGHT / n.videoHeight,
                    r = Math.min(a, u),
                    o = n.videoWidth * r,
                    s = n.videoHeight * r,
                    d = document.createElement("canvas");
                d.width = o, d.height = s;
                let l = d.getContext("2d");
                if (null == l) throw Error("Could not create canvas context");
                return l.drawImage(n, 0, 0, n.videoWidth, n.videoHeight, 0, 0, o, s), d.toDataURL("image/jpeg", .9)
            }
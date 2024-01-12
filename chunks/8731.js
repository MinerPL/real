            "use strict";
            n.r(t), n.d(t, {
                cropGIF: function() {
                    return o
                },
                cropStaticImage: function() {
                    return a
                },
                getBoundedCoordinates: function() {
                    return u
                },
                adjustImageDimensionsForAspectRatio: function() {
                    return c
                },
                calculateDragBoundaries: function() {
                    return d
                },
                calculateOverlaySize: function() {
                    return f
                },
                downsizeImage: function() {
                    return E
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("70102"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
            var i = n("917351"),
                l = n("75015");

            function r(e, t, n, i) {
                let l = e.naturalWidth / e.width,
                    r = t.width / 2,
                    o = t.height / 2,
                    a = (e.width / 2 - r - n.x) * l,
                    u = (e.height / 2 - o - n.y) * l,
                    s = t.width * l,
                    c = t.height * l,
                    d = Math.min(s, i.width),
                    f = Math.min(c, i.height);
                return {
                    x: a,
                    y: u,
                    scaledCropWidth: s,
                    scaledCropHeight: c,
                    canvasWidth: d,
                    canvasHeight: f
                }
            }
            async function o(e, t, i, o, a) {
                let {
                    x: u,
                    y: s,
                    scaledCropWidth: c,
                    scaledCropHeight: d
                } = r(t, i, o, a), f = await e.arrayBuffer(), E = new Worker(new URL(n.p + n.u("39703"), n.b)), A = new Promise((e, t) => {
                    E.onmessage = n => {
                        let {
                            data: i
                        } = n;
                        if (i.type === l.MessageTypes.CROP_GIF_COMPLETE) {
                            var r;
                            e((r = new Blob([i.result]), new Promise(e => {
                                let t = new FileReader;
                                t.onload = t => {
                                    var n;
                                    let i = null === (n = t.target) || void 0 === n ? void 0 : n.result;
                                    "string" == typeof i ? e(i) : e("")
                                }, t.readAsDataURL(r)
                            }))), E.terminate()
                        } else i.type === l.MessageTypes.CROP_GIF_ERROR && (t(Error("Error cropping GIF")), E.terminate())
                    }
                });
                return E.postMessage({
                    type: l.MessageTypes.CROP_GIF_START,
                    gif: new Uint8Array(f),
                    x: 0 | u,
                    y: 0 | s,
                    width: 0 | c,
                    height: 0 | d
                }), {
                    result: A,
                    cancelFn: () => E.terminate()
                }
            }

            function a(e, t, n, i) {
                let {
                    x: l,
                    y: o,
                    scaledCropWidth: a,
                    scaledCropHeight: u,
                    canvasWidth: s,
                    canvasHeight: c
                } = r(e, t, n, i), d = document.createElement("canvas");
                d.width = s, d.height = c;
                let f = d.getContext("2d");
                return null != f && f.drawImage(e, l, o, a, u, 0, 0, d.width, d.height), d.toDataURL("image/png")
            }

            function u(e, t, n) {
                return {
                    x: (0, i.clamp)(e, n.left, n.right),
                    y: (0, i.clamp)(t, n.bottom, n.top)
                }
            }

            function s(e, t, n, i) {
                let r = n,
                    o = i;
                n > l.EDITING_CONTAINER_WIDTH && (r = l.EDITING_CONTAINER_WIDTH, o = i * (l.EDITING_CONTAINER_WIDTH / n));
                if (n / i < e) return {
                    width: r,
                    height: o
                };
                let a = t / o,
                    u = r * a;
                return {
                    width: u,
                    height: t
                }
            }

            function c(e, t, n) {
                switch (e) {
                    case l.UploadTypes.AVATAR:
                    case l.UploadTypes.AVATAR_DECORATION:
                        return {
                            width: t, height: n
                        };
                    case l.UploadTypes.BANNER:
                        return s(l.BANNER_ASPECT_RATIO, l.MAX_BANNER_OVERLAY_HEIGHT, t, n);
                    case l.UploadTypes.GUILD_BANNER:
                        return s(l.GUILD_BANNER_ASPECT_RATIO, l.MAX_GUILD_BANNER_OVERLAY_HEIGHT, t, n);
                    case l.UploadTypes.VIDEO_BACKGROUND:
                        return s(l.VIDEO_BACKGROUND_ASPECT_RATIO, l.MAX_VIDEO_OVERLAY_HEIGHT, t, n);
                    case l.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        return s(l.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO, l.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT, t, n);
                    case l.UploadTypes.HOME_HEADER:
                        return s(l.HOME_HEADER_ASPECT_RATIO, l.MAX_HOME_HEADER_OVERLAY_HEIGHT, t, n)
                }
            }

            function d(e, t, n) {
                let i = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    l = e - n.width,
                    r = t - n.height;
                return 0 !== l && (i.left = -Math.abs(l / 2), i.right = l / 2), 0 !== r && (i.bottom = -Math.abs(r / 2), i.top = r / 2), i
            }

            function f(e, t, n, i) {
                switch (e) {
                    case l.UploadTypes.AVATAR:
                    case l.UploadTypes.AVATAR_DECORATION:
                        let r = Math.min(t, n);
                        return {
                            width: r, height: r
                        };
                    case l.UploadTypes.BANNER:
                        let o = Math.min(t, l.EDITING_CONTAINER_WIDTH);
                        return {
                            width: o, height: o * (1 / l.BANNER_ASPECT_RATIO)
                        };
                    case l.UploadTypes.GUILD_BANNER:
                        let a = Math.min(t, l.EDITING_CONTAINER_WIDTH);
                        return {
                            width: a, height: Math.min(a * (9 / 16), i)
                        };
                    case l.UploadTypes.VIDEO_BACKGROUND:
                        let u = Math.min(t, l.EDITING_CONTAINER_WIDTH);
                        return {
                            width: u, height: u * (9 / 16)
                        };
                    case l.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        let s = Math.min(t, l.EDITING_CONTAINER_WIDTH);
                        return {
                            width: s, height: .4 * s
                        };
                    case l.UploadTypes.HOME_HEADER:
                        let c = Math.min(t, l.EDITING_CONTAINER_WIDTH);
                        return {
                            width: c, height: c * (1 / l.HOME_HEADER_ASPECT_RATIO)
                        }
                }
            }

            function E(e, t, n) {
                let i = e.naturalWidth / e.naturalHeight,
                    l = t,
                    r = n;
                e.naturalWidth > e.naturalHeight ? l /= i : r *= i;
                let o = {
                    height: l,
                    width: r
                };
                return a(e, {
                    width: e.width,
                    height: e.height
                }, {
                    x: 0,
                    y: 0
                }, o)
            }
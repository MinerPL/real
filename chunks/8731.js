            "use strict";
            s.r(t), s.d(t, {
                cropGIF: function() {
                    return i
                },
                cropStaticImage: function() {
                    return r
                },
                getBoundedCoordinates: function() {
                    return o
                },
                adjustImageDimensionsForAspectRatio: function() {
                    return u
                },
                calculateDragBoundaries: function() {
                    return c
                },
                calculateOverlaySize: function() {
                    return E
                },
                downsizeImage: function() {
                    return _
                }
            }), s("511434"), s("313619"), s("654714"), s("287168"), s("956660"), s("222007"), s("70102"), s("311790"), s("477657"), s("811875"), s("90301"), s("652153"), s("28797"), s("817884"), s("597349"), s("667536"), s("690341");
            var a = s("917351"),
                n = s("75015");

            function l(e, t, s, a) {
                let n = e.naturalWidth / e.width,
                    l = t.width / 2,
                    i = t.height / 2,
                    r = (e.width / 2 - l - s.x) * n,
                    o = (e.height / 2 - i - s.y) * n,
                    d = t.width * n,
                    u = t.height * n,
                    c = Math.min(d, a.width),
                    E = Math.min(u, a.height);
                return {
                    x: r,
                    y: o,
                    scaledCropWidth: d,
                    scaledCropHeight: u,
                    canvasWidth: c,
                    canvasHeight: E
                }
            }
            async function i(e, t, a, i, r) {
                let {
                    x: o,
                    y: d,
                    scaledCropWidth: u,
                    scaledCropHeight: c
                } = l(t, a, i, r), E = await e.arrayBuffer(), _ = new Worker(new URL(s.p + s.u("39703"), s.b)), T = new Promise((e, t) => {
                    _.onmessage = s => {
                        let {
                            data: a
                        } = s;
                        if (a.type === n.MessageTypes.CROP_GIF_COMPLETE) {
                            var l;
                            e((l = new Blob([a.result]), new Promise(e => {
                                let t = new FileReader;
                                t.onload = t => {
                                    var s;
                                    let a = null === (s = t.target) || void 0 === s ? void 0 : s.result;
                                    "string" == typeof a ? e(a) : e("")
                                }, t.readAsDataURL(l)
                            }))), _.terminate()
                        } else a.type === n.MessageTypes.CROP_GIF_ERROR && (t(Error("Error cropping GIF")), _.terminate())
                    }
                });
                return _.postMessage({
                    type: n.MessageTypes.CROP_GIF_START,
                    gif: new Uint8Array(E),
                    x: 0 | o,
                    y: 0 | d,
                    width: 0 | u,
                    height: 0 | c
                }), {
                    result: T,
                    cancelFn: () => _.terminate()
                }
            }

            function r(e, t, s, a) {
                let {
                    x: n,
                    y: i,
                    scaledCropWidth: r,
                    scaledCropHeight: o,
                    canvasWidth: d,
                    canvasHeight: u
                } = l(e, t, s, a), c = document.createElement("canvas");
                c.width = d, c.height = u;
                let E = c.getContext("2d");
                return null != E && E.drawImage(e, n, i, r, o, 0, 0, c.width, c.height), c.toDataURL("image/png")
            }

            function o(e, t, s) {
                return {
                    x: (0, a.clamp)(e, s.left, s.right),
                    y: (0, a.clamp)(t, s.bottom, s.top)
                }
            }

            function d(e, t, s, a) {
                let l = s,
                    i = a;
                s > n.EDITING_CONTAINER_WIDTH && (l = n.EDITING_CONTAINER_WIDTH, i = a * (n.EDITING_CONTAINER_WIDTH / s));
                if (s / a < e) return {
                    width: l,
                    height: i
                };
                let r = t / i,
                    o = l * r;
                return {
                    width: o,
                    height: t
                }
            }

            function u(e, t, s) {
                switch (e) {
                    case n.UploadTypes.AVATAR:
                    case n.UploadTypes.AVATAR_DECORATION:
                        return {
                            width: t, height: s
                        };
                    case n.UploadTypes.BANNER:
                        return d(n.BANNER_ASPECT_RATIO, n.MAX_BANNER_OVERLAY_HEIGHT, t, s);
                    case n.UploadTypes.GUILD_BANNER:
                        return d(n.GUILD_BANNER_ASPECT_RATIO, n.MAX_GUILD_BANNER_OVERLAY_HEIGHT, t, s);
                    case n.UploadTypes.VIDEO_BACKGROUND:
                        return d(n.VIDEO_BACKGROUND_ASPECT_RATIO, n.MAX_VIDEO_OVERLAY_HEIGHT, t, s);
                    case n.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        return d(n.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO, n.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT, t, s);
                    case n.UploadTypes.HOME_HEADER:
                        return d(n.HOME_HEADER_ASPECT_RATIO, n.MAX_HOME_HEADER_OVERLAY_HEIGHT, t, s)
                }
            }

            function c(e, t, s) {
                let a = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    n = e - s.width,
                    l = t - s.height;
                return 0 !== n && (a.left = -Math.abs(n / 2), a.right = n / 2), 0 !== l && (a.bottom = -Math.abs(l / 2), a.top = l / 2), a
            }

            function E(e, t, s, a) {
                switch (e) {
                    case n.UploadTypes.AVATAR:
                    case n.UploadTypes.AVATAR_DECORATION:
                        let l = Math.min(t, s);
                        return {
                            width: l, height: l
                        };
                    case n.UploadTypes.BANNER:
                        let i = Math.min(t, n.EDITING_CONTAINER_WIDTH);
                        return {
                            width: i, height: i * (1 / n.BANNER_ASPECT_RATIO)
                        };
                    case n.UploadTypes.GUILD_BANNER:
                        let r = Math.min(t, n.EDITING_CONTAINER_WIDTH);
                        return {
                            width: r, height: Math.min(r * (9 / 16), a)
                        };
                    case n.UploadTypes.VIDEO_BACKGROUND:
                        let o = Math.min(t, n.EDITING_CONTAINER_WIDTH);
                        return {
                            width: o, height: o * (9 / 16)
                        };
                    case n.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        let d = Math.min(t, n.EDITING_CONTAINER_WIDTH);
                        return {
                            width: d, height: .4 * d
                        };
                    case n.UploadTypes.HOME_HEADER:
                        let u = Math.min(t, n.EDITING_CONTAINER_WIDTH);
                        return {
                            width: u, height: u * (1 / n.HOME_HEADER_ASPECT_RATIO)
                        }
                }
            }

            function _(e, t, s) {
                let a = e.naturalWidth / e.naturalHeight,
                    n = t,
                    l = s;
                e.naturalWidth > e.naturalHeight ? n /= a : l *= a;
                let i = {
                    height: n,
                    width: l
                };
                return r(e, {
                    width: e.width,
                    height: e.height
                }, {
                    x: 0,
                    y: 0
                }, i)
            }
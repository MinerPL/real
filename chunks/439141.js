            "use strict";
            n.r(t), n.d(t, {
                applyBackgroundOptionLive: function() {
                    return m
                },
                applyBackgroundOptionPreview: function() {
                    return S
                },
                applyInitialVideoBackgroundOption: function() {
                    return I
                }
            }), n("332822"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
            var i = n("627445"),
                a = n.n(i),
                l = n("773364"),
                s = n("697218"),
                r = n("315102"),
                u = n("659558"),
                o = n("154867"),
                d = n("870879"),
                c = n("239448"),
                _ = n("977801"),
                E = n("512244"),
                f = n("917219"),
                h = n("49111");
            async function p(e) {
                let t = await fetch(e),
                    n = await t.blob();
                return new Uint8ClampedArray(await n.arrayBuffer())
            }

            function T(e, t, n, i, a) {
                (0, o.applyMediaFilterSettings)({
                    [e]: {
                        graph: n,
                        target: t,
                        image: i,
                        blob: a
                    }
                })
            }
            async function C(e, t, n) {
                var i, s;
                let u, d = !1;
                if (null == n) return T(e, t, l.FilterSettingsGraph.NONE);
                if (n === f.BLUR_BACKGROUND_OPTION) return T(e, t, l.FilterSettingsGraph.BACKGROUND_BLUR);
                if ("string" == typeof n || "number" == typeof n) {
                    ;
                    let e = (0, _.default)()[n];
                    d = null !== (i = e.isVideo) && void 0 !== i && i, u = e.source
                } else {
                    let e = n.asset;
                    d = (0, r.isAnimatedIconHash)(e) || (0, r.isVideoAssetHash)(e), u = (0, r.getVideoFilterAssetURL)({
                        userId: n.user_id,
                        assetId: n.id,
                        assetHash: e,
                        size: f.BACKGROUND_REPLACEMENT_SIZE.width
                    })
                }
                if (null != u) try {
                    ;
                    let n = d ? void 0 : await (s = u, new Promise((e, t) => {
                            let n = new Image;
                            n.crossOrigin = "anonymous", n.onload = () => {
                                let t = document.createElement("canvas");
                                t.width = f.BACKGROUND_REPLACEMENT_SIZE.width, t.height = f.BACKGROUND_REPLACEMENT_SIZE.height;
                                let i = t.getContext("2d");
                                a(null != i, "Canvas context is missing");
                                let l = n.height / n.width,
                                    s = f.BACKGROUND_REPLACEMENT_SIZE.height,
                                    r = f.BACKGROUND_REPLACEMENT_SIZE.height / l,
                                    u = (t.width - r) / 2,
                                    o = (t.height - s) / 2;
                                i.drawImage(n, u, o, r, s);
                                let d = i.getImageData(0, 0, t.width, t.height);
                                e({
                                    data: d.data,
                                    width: d.width,
                                    height: d.height,
                                    pixelFormat: "rgba"
                                })
                            }, n.onerror = e => t(e), n.src = s
                        })),
                        i = d ? await p(u) : void 0;
                    T(e, t, l.FilterSettingsGraph.BACKGROUND_REPLACEMENT, n, i)
                } catch (e) {
                    (0, o.errorApplyingMediaFilterSettings)()
                }
            }
            async function m(e, t) {
                let {
                    track: n = !0,
                    location: i
                } = t;
                await C(l.FilterSettingsKey.CAMERA_BACKGROUND_LIVE, {
                    type: l.FilterTargetType.INPUT_DEVICE
                }, e), n && (0, c.trackBackgroundOptionUpdated)(e, i, "Enabled")
            }
            async function S(e, t, n) {
                let {
                    track: i = !0,
                    location: a
                } = n;
                (0, o.startApplyMediaFilterSettings)(), await C(l.FilterSettingsKey.CAMERA_BACKGROUND_PREVIEW, {
                    type: l.FilterTargetType.STREAM,
                    streamId: t
                }, e), i && (0, c.trackBackgroundOptionUpdated)(e, a, "Preview")
            }

            function I() {
                let e = s.default.getCurrentUser();
                if (null == e) return;
                let t = (0, u.getLastUsedVideoBackgroundOption)(e);
                (0, E.default)() && !d.default.hasBeenApplied && null != t && m(t, {
                    track: !1
                }).catch(h.NOOP)
            }
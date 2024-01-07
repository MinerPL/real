            "use strict";
            n.r(e), n.d(e, {
                applyBackgroundOptionLive: function() {
                    return D
                },
                applyBackgroundOptionPreview: function() {
                    return S
                },
                applyInitialVideoBackgroundOption: function() {
                    return T
                }
            }), n("332822"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
            var i = n("627445"),
                u = n.n(i),
                r = n("773364"),
                o = n("697218"),
                a = n("315102"),
                s = n("659558"),
                d = n("154867"),
                l = n("870879"),
                c = n("239448"),
                _ = n("977801"),
                f = n("512244"),
                E = n("917219"),
                p = n("49111");
            async function A(t) {
                let e = await fetch(t),
                    n = await e.blob();
                return new Uint8ClampedArray(await n.arrayBuffer())
            }

            function O(t, e, n, i, u) {
                (0, d.applyMediaFilterSettings)({
                    [t]: {
                        graph: n,
                        target: e,
                        image: i,
                        blob: u
                    }
                })
            }
            async function g(t, e, n) {
                var i, o;
                let s, l = !1;
                if (null == n) return O(t, e, r.FilterSettingsGraph.NONE);
                if (n === E.BLUR_BACKGROUND_OPTION) return O(t, e, r.FilterSettingsGraph.BACKGROUND_BLUR);
                if ("string" == typeof n || "number" == typeof n) {
                    ;
                    let t = (0, _.default)()[n];
                    l = null !== (i = t.isVideo) && void 0 !== i && i, s = t.source
                } else {
                    let t = n.asset;
                    l = (0, a.isAnimatedIconHash)(t) || (0, a.isVideoAssetHash)(t), s = (0, a.getVideoFilterAssetURL)({
                        userId: n.user_id,
                        assetId: n.id,
                        assetHash: t,
                        size: E.BACKGROUND_REPLACEMENT_SIZE.width
                    })
                }
                if (null != s) try {
                    ;
                    let n = l ? void 0 : await (o = s, new Promise((t, e) => {
                            let n = new Image;
                            n.crossOrigin = "anonymous", n.onload = () => {
                                let e = document.createElement("canvas");
                                e.width = E.BACKGROUND_REPLACEMENT_SIZE.width, e.height = E.BACKGROUND_REPLACEMENT_SIZE.height;
                                let i = e.getContext("2d");
                                u(null != i, "Canvas context is missing");
                                let r = n.height / n.width,
                                    o = E.BACKGROUND_REPLACEMENT_SIZE.height,
                                    a = E.BACKGROUND_REPLACEMENT_SIZE.height / r,
                                    s = (e.width - a) / 2,
                                    d = (e.height - o) / 2;
                                i.drawImage(n, s, d, a, o);
                                let l = i.getImageData(0, 0, e.width, e.height);
                                t({
                                    data: l.data,
                                    width: l.width,
                                    height: l.height,
                                    pixelFormat: "rgba"
                                })
                            }, n.onerror = t => e(t), n.src = o
                        })),
                        i = l ? await A(s) : void 0;
                    O(t, e, r.FilterSettingsGraph.BACKGROUND_REPLACEMENT, n, i)
                } catch (t) {
                    (0, d.errorApplyingMediaFilterSettings)()
                }
            }
            async function D(t, e) {
                let {
                    track: n = !0,
                    location: i
                } = e;
                await g(r.FilterSettingsKey.CAMERA_BACKGROUND_LIVE, {
                    type: r.FilterTargetType.INPUT_DEVICE
                }, t), n && (0, c.trackBackgroundOptionUpdated)(t, i, "Enabled")
            }
            async function S(t, e, n) {
                let {
                    track: i = !0,
                    location: u
                } = n;
                (0, d.startApplyMediaFilterSettings)(), await g(r.FilterSettingsKey.CAMERA_BACKGROUND_PREVIEW, {
                    type: r.FilterTargetType.STREAM,
                    streamId: e
                }, t), i && (0, c.trackBackgroundOptionUpdated)(t, u, "Preview")
            }

            function T() {
                let t = o.default.getCurrentUser();
                if (null == t) return;
                let e = (0, s.getLastUsedVideoBackgroundOption)(t);
                (0, f.default)() && !l.default.hasBeenApplied && null != e && D(e, {
                    track: !1
                }).catch(p.NOOP)
            }
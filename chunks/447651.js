            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("404118"),
                s = n("689226"),
                l = n("467475"),
                o = n("599110"),
                u = n("773336"),
                d = n("286235"),
                _ = n("50885"),
                E = n("146574"),
                c = n("49111"),
                I = n("782340");
            let f = "https://media.discordapp.net",
                A = /^.*\.discordapp\.net$/,
                N = "https://cdn.discordapp.com",
                T = "".concat(f, "/stickers"),
                S = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
                R = new Set(["jpg", "jpeg", "png"]),
                O = e => {
                    var t;
                    return null === (t = new URL(e).pathname.split(".").pop()) || void 0 === t ? void 0 : t.toLowerCase()
                };

            function D(e, t) {
                a.default.show({
                    title: I.default.Messages.ERROR,
                    body: e
                }), d.default.captureException(t)
            }

            function h(e, t, n) {
                let a = (0, l.default)(null == t ? void 0 : t.getChannelId());
                if (a || (null == n ? void 0 : n.shouldHideMediaOptions) === !0 || !u.isPlatformEmbedded || null == e || ! function(e) {
                        let t = new URL(e),
                            n = O(e);
                        return (A.test(t.hostname) || t.origin === N) && !e.startsWith(T) && !(0, s.isRoleIconAssetUrl)(e) && null != n && S.has(n)
                    }(e)) return null;
                let d = function(e) {
                        let t = new URL(e);
                        return t.origin === N ? e : t.origin === f ? N + t.pathname : (t.searchParams.delete("width"), t.searchParams.delete("height"), t.searchParams.set("quality", "lossless"), t.toString())
                    }(e),
                    h = async () => {
                        try {
                            await _.default.saveImage(d), o.default.track(c.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVED, {
                                ...(0, E.getNativeContextMenuChannelAnalytics)()
                            })
                        } catch (e) {
                            o.default.track(c.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
                                ...(0, E.getNativeContextMenuChannelAnalytics)()
                            }), D(I.default.Messages.ERROR_SAVING_IMAGE, e)
                        }
                    }, L = async () => {
                        try {
                            await _.default.copyImage(d), o.default.track(c.AnalyticEvents.CONTEXT_MENU_IMAGE_COPIED, {
                                ...(0, E.getNativeContextMenuChannelAnalytics)()
                            })
                        } catch (e) {
                            D(I.default.Messages.ERROR_COPYING_IMAGE, e), o.default.track(c.AnalyticEvents.CONTEXT_MENU_IMAGE_COPY_FAILED, {
                                ...(0, E.getNativeContextMenuChannelAnalytics)()
                            })
                        }
                    };
                return [_.default.canCopyImage() && function(e) {
                    let t = O(e);
                    return null != t && R.has(t)
                }(e) ? (0, r.jsx)(i.MenuItem, {
                    id: "copy-image",
                    label: I.default.Messages.COPY_IMAGE_MENU_ITEM,
                    action: L
                }, "copy-image") : null, (0, r.jsx)(i.MenuItem, {
                    id: "save-image",
                    label: I.default.Messages.SAVE_IMAGE_MENU_ITEM,
                    action: h
                }, "save-image")]
            }
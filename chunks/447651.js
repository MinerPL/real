            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
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
                c = n("50885"),
                _ = n("146574"),
                E = n("49111"),
                f = n("782340");
            let I = "https://media.discordapp.net",
                A = /^.*\.discordapp\.net$/,
                h = "https://cdn.discordapp.com",
                S = "".concat(I, "/stickers"),
                p = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
                R = new Set(["jpg", "jpeg", "png"]),
                N = e => {
                    var t;
                    return null === (t = new URL(e).pathname.split(".").pop()) || void 0 === t ? void 0 : t.toLowerCase()
                };

            function g(e, t) {
                a.default.show({
                    title: f.default.Messages.ERROR,
                    body: e
                }), d.default.captureException(t)
            }

            function T(e, t, n) {
                let a = (0, l.default)(null == t ? void 0 : t.getChannelId());
                if (a || (null == n ? void 0 : n.shouldHideMediaOptions) === !0 || !u.isPlatformEmbedded || null == e || ! function(e) {
                        let t = new URL(e),
                            n = N(e);
                        return (A.test(t.hostname) || t.origin === h) && !e.startsWith(S) && !(0, s.isRoleIconAssetUrl)(e) && null != n && p.has(n)
                    }(e)) return null;
                let d = function(e) {
                        let t = new URL(e);
                        return t.origin === h ? e : t.origin === I ? h + t.pathname : (t.searchParams.delete("width"), t.searchParams.delete("height"), t.searchParams.set("quality", "lossless"), t.toString())
                    }(e),
                    T = async () => {
                        try {
                            await c.default.saveImage(d), o.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVED, {
                                ...(0, _.getNativeContextMenuChannelAnalytics)()
                            })
                        } catch (e) {
                            o.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
                                ...(0, _.getNativeContextMenuChannelAnalytics)()
                            }), g(f.default.Messages.ERROR_SAVING_IMAGE, e)
                        }
                    }, O = async () => {
                        try {
                            await c.default.copyImage(d), o.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_COPIED, {
                                ...(0, _.getNativeContextMenuChannelAnalytics)()
                            })
                        } catch (e) {
                            g(f.default.Messages.ERROR_COPYING_IMAGE, e), o.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_COPY_FAILED, {
                                ...(0, _.getNativeContextMenuChannelAnalytics)()
                            })
                        }
                    };
                return [c.default.canCopyImage() && function(e) {
                    let t = N(e);
                    return null != t && R.has(t)
                }(e) ? (0, r.jsx)(i.MenuItem, {
                    id: "copy-image",
                    label: f.default.Messages.COPY_IMAGE_MENU_ITEM,
                    action: O
                }, "copy-image") : null, (0, r.jsx)(i.MenuItem, {
                    id: "save-image",
                    label: f.default.Messages.SAVE_IMAGE_MENU_ITEM,
                    action: T
                }, "save-image")]
            }
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("404118"),
                s = n("689226"),
                u = n("467475"),
                r = n("599110"),
                d = n("773336"),
                o = n("286235"),
                c = n("50885"),
                f = n("146574"),
                E = n("49111"),
                M = n("782340");
            let m = "https://media.discordapp.net",
                g = /^.*\.discordapp\.net$/,
                I = "https://cdn.discordapp.com",
                p = "".concat(m, "/stickers"),
                S = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
                A = new Set(["jpg", "jpeg", "png"]),
                v = e => {
                    var t;
                    return null === (t = new URL(e).pathname.split(".").pop()) || void 0 === t ? void 0 : t.toLowerCase()
                };

            function _(e, t) {
                l.default.show({
                    title: M.default.Messages.ERROR,
                    body: e
                }), o.default.captureException(t)
            }

            function h(e, t, n) {
                let l = (0, u.default)(null == t ? void 0 : t.getChannelId());
                if (l || (null == n ? void 0 : n.shouldHideMediaOptions) === !0 || !d.isPlatformEmbedded || null == e || ! function(e) {
                        let t = new URL(e),
                            n = v(e);
                        return (g.test(t.hostname) || t.origin === I) && !e.startsWith(p) && !(0, s.isRoleIconAssetUrl)(e) && null != n && S.has(n)
                    }(e)) return null;
                let o = function(e) {
                        let t = new URL(e);
                        return t.origin === I ? e : t.origin === m ? I + t.pathname : (t.searchParams.delete("width"), t.searchParams.delete("height"), t.searchParams.set("quality", "lossless"), t.toString())
                    }(e),
                    h = async () => {
                        try {
                            await c.default.saveImage(o), r.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVED, {
                                ...(0, f.getNativeContextMenuChannelAnalytics)()
                            })
                        } catch (e) {
                            r.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
                                ...(0, f.getNativeContextMenuChannelAnalytics)()
                            }), _(M.default.Messages.ERROR_SAVING_IMAGE, e)
                        }
                    }, T = async () => {
                        try {
                            await c.default.copyImage(o), r.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_COPIED, {
                                ...(0, f.getNativeContextMenuChannelAnalytics)()
                            })
                        } catch (e) {
                            _(M.default.Messages.ERROR_COPYING_IMAGE, e), r.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_COPY_FAILED, {
                                ...(0, f.getNativeContextMenuChannelAnalytics)()
                            })
                        }
                    };
                return [c.default.canCopyImage() && function(e) {
                    let t = v(e);
                    return null != t && A.has(t)
                }(e) ? (0, a.jsx)(i.MenuItem, {
                    id: "copy-image",
                    label: M.default.Messages.COPY_IMAGE_MENU_ITEM,
                    action: T
                }, "copy-image") : null, (0, a.jsx)(i.MenuItem, {
                    id: "save-image",
                    label: M.default.Messages.SAVE_IMAGE_MENU_ITEM,
                    action: h
                }, "save-image")]
            }
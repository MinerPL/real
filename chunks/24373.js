            "use strict";
            n.r(t), n.d(t, {
                getStickerPackPreviewSticker: function() {
                    return C
                },
                getStickerFormatTypeFromFileType: function() {
                    return I
                },
                getFilenameForSticker: function() {
                    return A
                },
                getStickerAssetUrl: function() {
                    return D
                },
                getStickerPackBannerAssetUrl: function() {
                    return N
                },
                isStickerAssetUrl: function() {
                    return O
                },
                isStickerPackAnimated: function() {
                    return b
                },
                createStickerPackCategory: function() {
                    return P
                },
                shouldAnimateSticker: function() {
                    return V
                },
                shouldAttachSticker: function() {
                    return R
                },
                isGuildSticker: function() {
                    return k
                },
                isStandardSticker: function() {
                    return M
                },
                getMessageStickers: function() {
                    return w
                },
                isAvailableGuildSticker: function() {
                    return L
                }
            }), n("70102");
            var s = n("171209"),
                i = n("407063"),
                r = n("305961"),
                a = n("585722"),
                o = n("315102"),
                d = n("773336"),
                u = n("328511"),
                l = n("161585"),
                f = n("560241"),
                _ = n("49111");
            let {
                API_ENDPOINT: c,
                MEDIA_PROXY_ENDPOINT: g,
                PROJECT_ENV: m,
                ASSET_ENDPOINT: h,
                CDN_HOST: v
            } = window.GLOBAL_ENV, E = Object.values(l.StickerExtensions), p = decodeURIComponent(_.Endpoints.STICKER_ASSET("[\\d]+", "(".concat(E.join("|"), ")"))), y = RegExp("(".concat(location.protocol).concat(h, "|").concat(location.protocol).concat(g, ")(").concat(p, ")"), "ig"), T = RegExp("".concat(location.protocol).concat(c, "(").concat(p, ")"), "ig"), C = e => {
                if (null != e.cover_sticker_id) {
                    let t = e.stickers.find(t => t.id === e.cover_sticker_id);
                    if (null != t) return t
                }
                return e.stickers[0]
            }, S = e => {
                switch (e) {
                    case l.StickerFormat.PNG:
                        return o.SUPPORTS_WEBP ? l.StickerExtensions.WEBP : l.StickerExtensions.PNG;
                    case l.StickerFormat.APNG:
                        return l.StickerExtensions.APNG;
                    case l.StickerFormat.LOTTIE:
                        return l.StickerExtensions.LOTTIE;
                    case l.StickerFormat.GIF:
                        return l.StickerExtensions.GIF;
                    default:
                        throw Error("Unexpected format type: ".concat(e))
                }
            }, I = e => {
                switch (e) {
                    case "application/json":
                        return l.StickerFormat.LOTTIE;
                    case "image/apng":
                        return l.StickerFormat.APNG;
                    case "image/png":
                    case "image/webp":
                        return l.StickerFormat.PNG;
                    case "image/gif":
                        return l.StickerFormat.GIF;
                    default:
                        throw Error("Unexpected file type: ".concat(e))
                }
            }, A = e => null == e ? null : "".concat(e.name, ".").concat(S(e.format_type)), D = function(e) {
                let {
                    isPreview: t = !1,
                    size: n = f.DEFAULT_STICKER_DIMENSIONS
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null == e.format_type) return null;
                let s = _.Endpoints.STICKER_ASSET(e.id, S(e.format_type));
                if ("development" !== m) {
                    if (e.format_type === l.StickerFormat.LOTTIE) return "".concat(location.protocol).concat(h).concat(s);
                    let r = e.format_type === l.StickerFormat.APNG && t && !(0, d.isAndroid)() ? "&passthrough=false" : "",
                        a = Math.min(2, (0, i.getDevicePixelRatio)());
                    return "".concat(location.protocol).concat(g).concat(s, "?size=").concat((0, i.getBestMediaProxySize)(n * a)).concat(r)
                }
                return "".concat(location.protocol).concat(c).concat(s)
            }, N = (e, t) => {
                let n;
                let s = e.banner_asset_id;
                if (null == s) return null;
                let r = o.SUPPORTS_WEBP ? "webp" : "png";
                return n = null != v ? "".concat(location.protocol, "//").concat(v, "/app-assets/").concat(f.STICKER_APPLICATION_ID, "/store/").concat(s, ".").concat(r) : "".concat(location.protocol).concat(c).concat(_.Endpoints.STORE_ASSET(f.STICKER_APPLICATION_ID, s, r)), null != t && (n += "?size=".concat((0, i.getBestMediaProxySize)(t))), n
            }, O = e => e.match("development" !== m ? y : T), b = e => e.stickers.some(e => {
                let {
                    format_type: t
                } = e;
                return t === l.StickerFormat.APNG || t === l.StickerFormat.LOTTIE || t === l.StickerFormat.GIF
            }), P = e => ({
                type: l.StickerCategoryTypes.PACK,
                id: e.id,
                name: e.name,
                stickers: e.stickers,
                previewSticker: C(e)
            }), V = (e, t) => e === f.StickerAnimationSettings.ANIMATE_ON_INTERACTION ? t : e !== f.StickerAnimationSettings.NEVER_ANIMATE, R = (e, t, n, i) => {
                let r = a.default.getUploadCount(n, i);
                if (r > 0) return !0;
                let o = u.default.getStickerPreview(n, i),
                    d = null != o && o.length > 0;
                if (d) return !0;
                switch (e) {
                    case l.StickerSelectLocation.STICKER_PICKER:
                        return "" !== t.trim();
                    case l.StickerSelectLocation.AUTOCOMPLETE:
                    case l.StickerSelectLocation.EXPRESSION_SUGGESTIONS:
                        return (0, s.getQueriesFromUserInput)(t).length > 1;
                    default:
                        return !1
                }
            }, k = e => e.type === l.MetaStickerType.GUILD, M = e => e.type === l.MetaStickerType.STANDARD, w = e => e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : [], L = e => {
                if (null === e) return !1;
                let t = e.guild_id;
                return void 0 !== r.default.getGuild(t)
            }
            "use strict";
            n.r(t), n.d(t, {
                getStickerPackPreviewSticker: function() {
                    return g
                },
                getStickerFormatTypeFromFileType: function() {
                    return N
                },
                getFilenameForSticker: function() {
                    return O
                },
                getStickerAssetUrl: function() {
                    return R
                },
                getStickerPackBannerAssetUrl: function() {
                    return y
                },
                isStickerAssetUrl: function() {
                    return v
                },
                isStickerPackAnimated: function() {
                    return M
                },
                createStickerPackCategory: function() {
                    return D
                },
                shouldAnimateSticker: function() {
                    return L
                },
                shouldAttachSticker: function() {
                    return U
                },
                isGuildSticker: function() {
                    return P
                },
                isStandardSticker: function() {
                    return b
                },
                getMessageStickers: function() {
                    return G
                },
                isAvailableGuildSticker: function() {
                    return k
                }
            }), n("70102");
            var i = n("171209"),
                a = n("407063"),
                l = n("305961"),
                s = n("585722"),
                r = n("315102"),
                u = n("773336"),
                o = n("328511"),
                d = n("161585"),
                c = n("560241"),
                _ = n("49111");
            let {
                API_ENDPOINT: E,
                MEDIA_PROXY_ENDPOINT: f,
                PROJECT_ENV: h,
                ASSET_ENDPOINT: p,
                CDN_HOST: T
            } = window.GLOBAL_ENV, C = Object.values(d.StickerExtensions), m = decodeURIComponent(_.Endpoints.STICKER_ASSET("[\\d]+", "(".concat(C.join("|"), ")"))), S = RegExp("(".concat(location.protocol).concat(p, "|").concat(location.protocol).concat(f, ")(").concat(m, ")"), "ig"), I = RegExp("".concat(location.protocol).concat(E, "(").concat(m, ")"), "ig"), g = e => {
                if (null != e.cover_sticker_id) {
                    let t = e.stickers.find(t => t.id === e.cover_sticker_id);
                    if (null != t) return t
                }
                return e.stickers[0]
            }, A = e => {
                switch (e) {
                    case d.StickerFormat.PNG:
                        return r.SUPPORTS_WEBP ? d.StickerExtensions.WEBP : d.StickerExtensions.PNG;
                    case d.StickerFormat.APNG:
                        return d.StickerExtensions.APNG;
                    case d.StickerFormat.LOTTIE:
                        return d.StickerExtensions.LOTTIE;
                    case d.StickerFormat.GIF:
                        return d.StickerExtensions.GIF;
                    default:
                        throw Error("Unexpected format type: ".concat(e))
                }
            }, N = e => {
                switch (e) {
                    case "application/json":
                        return d.StickerFormat.LOTTIE;
                    case "image/apng":
                        return d.StickerFormat.APNG;
                    case "image/png":
                    case "image/webp":
                        return d.StickerFormat.PNG;
                    case "image/gif":
                        return d.StickerFormat.GIF;
                    default:
                        throw Error("Unexpected file type: ".concat(e))
                }
            }, O = e => null == e ? null : "".concat(e.name, ".").concat(A(e.format_type)), R = function(e) {
                let {
                    isPreview: t = !1,
                    size: n = c.DEFAULT_STICKER_DIMENSIONS
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null == e.format_type) return null;
                let i = _.Endpoints.STICKER_ASSET(e.id, A(e.format_type));
                if ("development" !== h) {
                    if (e.format_type === d.StickerFormat.LOTTIE) return "".concat(location.protocol).concat(p).concat(i);
                    let l = e.format_type === d.StickerFormat.APNG && t && !(0, u.isAndroid)() ? "&passthrough=false" : "",
                        s = Math.min(2, (0, a.getDevicePixelRatio)());
                    return "".concat(location.protocol).concat(f).concat(i, "?size=").concat((0, a.getBestMediaProxySize)(n * s)).concat(l)
                }
                return "".concat(location.protocol).concat(E).concat(i)
            }, y = (e, t) => {
                let n;
                let i = e.banner_asset_id;
                if (null == i) return null;
                let l = r.SUPPORTS_WEBP ? "webp" : "png";
                return n = null != T ? "".concat(location.protocol, "//").concat(T, "/app-assets/").concat(c.STICKER_APPLICATION_ID, "/store/").concat(i, ".").concat(l) : "".concat(location.protocol).concat(E).concat(_.Endpoints.STORE_ASSET(c.STICKER_APPLICATION_ID, i, l)), null != t && (n += "?size=".concat((0, a.getBestMediaProxySize)(t))), n
            }, v = e => e.match("development" !== h ? S : I), M = e => e.stickers.some(e => {
                let {
                    format_type: t
                } = e;
                return t === d.StickerFormat.APNG || t === d.StickerFormat.LOTTIE || t === d.StickerFormat.GIF
            }), D = e => ({
                type: d.StickerCategoryTypes.PACK,
                id: e.id,
                name: e.name,
                stickers: e.stickers,
                previewSticker: g(e)
            }), L = (e, t) => e === c.StickerAnimationSettings.ANIMATE_ON_INTERACTION ? t : e !== c.StickerAnimationSettings.NEVER_ANIMATE, U = (e, t, n, a) => {
                let l = s.default.getUploadCount(n, a);
                if (l > 0) return !0;
                let r = o.default.getStickerPreview(n, a),
                    u = null != r && r.length > 0;
                if (u) return !0;
                switch (e) {
                    case d.StickerSelectLocation.STICKER_PICKER:
                        return "" !== t.trim();
                    case d.StickerSelectLocation.AUTOCOMPLETE:
                    case d.StickerSelectLocation.EXPRESSION_SUGGESTIONS:
                        return (0, i.getQueriesFromUserInput)(t).length > 1;
                    default:
                        return !1
                }
            }, P = e => e.type === d.MetaStickerType.GUILD, b = e => e.type === d.MetaStickerType.STANDARD, G = e => e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : [], k = e => {
                if (null === e) return !1;
                let t = e.guild_id;
                return void 0 !== l.default.getGuild(t)
            }
            "use strict";
            s.r(t), s.d(t, {
                uploadEmojiFile: function() {
                    return S
                }
            });
            var a = s("404118"),
                n = s("150021"),
                l = s("8731"),
                i = s("166382"),
                r = s("599110"),
                o = s("402671"),
                d = s("103603"),
                u = s("958706"),
                c = s("49111"),
                E = s("782340"),
                _ = s("446825").Buffer;
            let T = (e, t, s, a) => (r.default.track(c.AnalyticEvents.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                    guild_id: s,
                    file_size: t,
                    upload_id: a
                }), i.ImageInputUploadErrors.TOO_BIG),
                I = (e, t, s) => {
                    r.default.track(c.AnalyticEvents.EMOJI_FILE_RESIZED, {
                        is_animated: !1,
                        file_type: e.type.split("/").pop(),
                        original_file_size_bytes: e.size,
                        resized_file_size_bytes: (0, d.dataUriFileSize)(t),
                        resized_file_too_big: s
                    })
                },
                S = async e => {
                    let {
                        data: t,
                        file: s,
                        guildId: d,
                        uploadId: S,
                        roles: N,
                        image: g,
                        hideErrorModal: f
                    } = e, A = o.default.sanitizeEmojiName(s.name.split(".")[0]), L = o.default.isFileTooBig(s);
                    if (L) {
                        if ("image/gif" === s.type) return T(s.name, s.size, d, S);
                        if (null != g) {
                            let e;
                            t = (0, l.downsizeImage)(g, 128, 128);
                            try {
                                e = o.default.isDataTooBig(t)
                            } catch (e) {
                                return T(s.name, s.size, d, S)
                            }
                            if (I(s, t, e), e) return T(s.name, s.size, d, S)
                        }
                    }
                    try {
                        await (0, n.uploadEmoji)({
                            guildId: d,
                            image: t,
                            name: A,
                            roles: N
                        }), r.default.track(c.AnalyticEvents.EMOJI_UPLOAD_COMPLETED, {
                            guild_id: d,
                            upload_id: S
                        })
                    } catch (o) {
                        let e, s, {
                            body: n,
                            status: l
                        } = o;
                        return null != n && (n.code === c.AbortCodes.TOO_MANY_EMOJI ? (e = E.default.Messages.TOO_MANY_EMOJI, s = i.ImageInputUploadErrors.TOO_MANY_EMOJI) : n.code === c.AbortCodes.TOO_MANY_ANIMATED_EMOJI ? (e = E.default.Messages.TOO_MANY_ANIMATED_EMOJI, s = i.ImageInputUploadErrors.TOO_MANY_ANIMATED_EMOJI) : null != n.image || n.code === c.AbortCodes.INVALID_FILE_ASSET_SIZE ? (r.default.track(c.AnalyticEvents.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                            guild_id: d,
                            file_size: _.byteLength(t),
                            upload_id: S
                        }), e = E.default.Messages.EMOJI_TOO_BIG.format({
                            maxSize: u.EMOJI_MAX_FILESIZE_KB
                        }), s = i.ImageInputUploadErrors.TOO_BIG) : (null != n.image || n.code === c.AbortCodes.INVALID_FILE_ASSET_SIZE_RESIZE_GIF) && (s = i.ImageInputUploadErrors.RESIZE_GIF)), 429 === l && (e = E.default.Messages.RATE_LIMITED, s = i.ImageInputUploadErrors.RATE_LIMIT), null != e && !f && a.default.show({
                            title: E.default.Messages.GENERIC_ERROR_TITLE,
                            body: e
                        }), s
                    }
                }
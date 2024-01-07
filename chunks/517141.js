            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                },
                useCreateForumPost: function() {
                    return C
                }
            });
            var a = n("884691"),
                l = n("16470"),
                s = n("404118"),
                i = n("783480"),
                r = n("681736"),
                o = n("578198"),
                u = n("884351"),
                d = n("474643"),
                c = n("305961"),
                f = n("254490"),
                h = n("730498"),
                p = n("49111"),
                m = n("782340");

            function E(e) {
                let {
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: l,
                    privateThreadMode: s,
                    location: r,
                    onThreadCreated: o,
                    useDefaultThreadName: c
                } = e, f = a.useCallback((e, t, n, a) => {
                    i.default.uploadFiles({
                        channelId: e.id,
                        uploads: t,
                        draftType: d.DraftType.FirstThreadMessage,
                        options: {
                            stickerIds: a
                        },
                        parsedMessage: u.default.parse(e, n)
                    })
                }, []);
                return (0, h.useCreateThreadCommon)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: l,
                    privateThreadMode: s,
                    location: r,
                    onThreadCreated: o,
                    useDefaultThreadName: c,
                    uploadHandler: f
                })
            }

            function C(e) {
                let {
                    parentChannel: t
                } = e, {
                    name: n,
                    appliedTags: a
                } = (0, o.useForumPostComposerStore)(e => {
                    let {
                        name: t,
                        appliedTags: n
                    } = e;
                    return {
                        name: t,
                        appliedTags: n
                    }
                }, l.default);
                return (0, h.useCreateForumPostCommon)({
                    parentChannel: t,
                    name: n,
                    appliedTags: a,
                    upload: function(e, n, a) {
                        return new Promise((l, i) => {
                            let o = new r.default(e);
                            o.on("error", (e, n, a) => {
                                if (n === p.AbortCodes.EXPLICIT_CONTENT) {
                                    var l;
                                    let e = c.default.getGuild(null !== (l = t.getGuildId()) && void 0 !== l ? l : "");
                                    null != e && s.default.show({
                                        title: m.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                        body: m.default.Messages.BOT_GUILD_EXPLICIT_CONTENT.format({
                                            name: e.toString()
                                        })
                                    })
                                } else if (n === p.AbortCodes.ENTITY_TOO_LARGE) {
                                    let e = (0, f.maxFileSize)(t.getGuildId());
                                    s.default.show({
                                        title: m.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                                        body: m.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                                            maxSize: (0, f.sizeString)(e)
                                        })
                                    })
                                } else n === p.AbortCodes.TOO_MANY_ATTACHMENTS && s.default.show({
                                    title: m.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
                                    body: m.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
                                        limit: p.MAX_UPLOAD_COUNT
                                    })
                                });
                                i({
                                    body: a
                                })
                            }), o.on("complete", (e, t) => {
                                l({
                                    body: t
                                })
                            }), o.uploadFiles(a, n, {
                                addFilesTo: "message.attachments"
                            })
                        })
                    }
                })
            }
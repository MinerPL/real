            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return S
                }
            }), a("222007"), a("702976");
            var l = a("77078"),
                n = a("913144"),
                s = a("295426"),
                r = a("819689"),
                o = a("81594"),
                i = a("336522"),
                d = a("448993"),
                u = a("979911"),
                _ = a("282928"),
                f = a("966724"),
                E = a("681736"),
                c = a("600798"),
                p = a("692038"),
                A = a("815297"),
                g = a("168730"),
                L = a("562228"),
                h = a("529805"),
                T = a("685841"),
                m = a("804888"),
                M = a("474643"),
                O = a("585722"),
                P = a("568734"),
                U = a("305515"),
                y = a("49111"),
                D = a("782340");
            async function R(e) {
                var t, a, l;
                let _, {
                        channelId: f,
                        uploads: R,
                        draftType: S,
                        parsedMessage: I,
                        options: C = {},
                        raiseEndpointErrors: v = !1
                    } = e,
                    G = new E.default(y.Endpoints.MESSAGES(f)),
                    F = new U.Future,
                    N = {
                        content: "",
                        nonce: "",
                        channel_id: f,
                        type: y.MessageTypes.DEFAULT,
                        sticker_ids: null == C ? void 0 : C.stickerIds,
                        poll: null == C ? void 0 : C.poll
                    };
                null != I && (N.content = null == I ? void 0 : I.content);
                let w = T.default.getPendingReply(f);
                null != w && (N.type = y.MessageTypes.REPLY, N.message_reference = C.messageReference, N.allowed_mentions = C.allowedMentions, (0, h.deletePendingReply)(f));
                let [b, H] = (0, m.default)(N.content);
                b && (N.content = H, N.flags = (0, P.addFlag)(null !== (t = N.flags) && void 0 !== t ? t : 0, y.MessageFlags.SUPPRESS_NOTIFICATIONS));
                let x = null !== (a = C.nonce) && void 0 !== a ? a : (0, A.createNonce)(),
                    z = (0, A.default)({
                        channelId: f,
                        content: N.content,
                        tts: null !== (l = null == I ? void 0 : I.tts) && void 0 !== l && l,
                        type: N.type,
                        messageReference: N.message_reference,
                        flags: N.flags,
                        nonce: x,
                        poll: (0, L.createPollServerDataFromCreateRequest)(C.poll)
                    });
                return (N.nonce = x, G.on("start", e => {
                    _ = (0, p.createMessageRecord)({
                        ...z,
                        id: e.id
                    }), n.default.dispatch({
                        type: "UPLOAD_START",
                        channelId: f,
                        file: e,
                        message: _,
                        uploader: G
                    })
                }), G.on("progress", e => {
                    n.default.dispatch({
                        type: "UPLOAD_PROGRESS",
                        channelId: f,
                        file: e
                    })
                })), G.on("error", (e, t, a, l) => {
                    if (n.default.dispatch({
                            type: "UPLOAD_FAIL",
                            channelId: f,
                            file: e,
                            messageRecord: _
                        }), (0, g.logMessageSendFailure)({
                            fileItems: e.items,
                            failureCode: t,
                            errorMessage: null == l ? void 0 : l.msg
                        }), t === y.AbortCodes.EXPLICIT_CONTENT) {
                        r.default.sendClydeError(f, t);
                        return
                    }
                    if (t === y.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) {
                        let e = {
                                code: t,
                                message: null == a ? void 0 : a.message
                            },
                            l = null == _ ? null : {
                                type: u.MessageDataType.SEND,
                                message: {
                                    ..._,
                                    channelId: f
                                }
                            };
                        (0, i.openUploadError)({
                            title: D.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                            help: (0, c.getAutomodErrorMessage)(l, e)
                        });
                        return
                    }
                    t !== y.AbortCodes.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS && (v ? F.reject(new d.APIError({
                        status: t,
                        body: null != a ? a : {}
                    }, t)) : (0, i.openUploadError)({
                        title: D.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                        help: D.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
                    }), "" !== N.content && "" === M.default.getDraft(f, S) && s.default.saveDraft(f, N.content, S), 0 === O.default.getUploadCount(f, S) && o.default.setUploads({
                        channelId: f,
                        uploads: R,
                        draftType: S
                    }))
                }), G.on("complete", e => {
                    n.default.dispatch({
                        type: "UPLOAD_COMPLETE",
                        channelId: f,
                        file: e,
                        aborted: G._aborted
                    })
                }), await G.uploadFiles(R, N), F.resolve(), F.promise
            }
            var S = {
                instantBatchUpload: function(e) {
                    let {
                        channelId: t,
                        files: a,
                        draftType: l,
                        isThumbnail: n = !1,
                        filesMetadata: s = []
                    } = e, r = Array.from(a).map((e, a) => {
                        let l = null != s ? s[a] : {};
                        return new _.CloudUpload({
                            file: e,
                            platform: f.UploadPlatform.WEB,
                            isThumbnail: n,
                            ...l
                        }, t)
                    });
                    R({
                        channelId: t,
                        uploads: r,
                        draftType: l
                    })
                },
                upload: function e(t) {
                    let {
                        channelId: a,
                        file: o,
                        draftType: d,
                        message: u,
                        hasSpoiler: _,
                        filename: f
                    } = t, c = {
                        content: "",
                        tts: !1,
                        hasSpoiler: _,
                        filename: f
                    };
                    if (null != u) {
                        c.content = u.content, c.tts = u.tts, c.channel_id = u.channel_id;
                        let e = T.default.getPendingReply(a);
                        if (null != e) {
                            let t = r.default.getSendMessageOptionsForReply(e);
                            c.type = y.MessageTypes.REPLY, c.message_reference = t.messageReference, c.allowed_mentions = t.allowedMentions, (0, h.deletePendingReply)(a)
                        }
                    }
                    let p = new E.default(y.Endpoints.MESSAGES(a));
                    p.on("start", e => {
                        n.default.dispatch({
                            type: "UPLOAD_START",
                            channelId: a,
                            file: e,
                            uploader: p
                        })
                    }), p.on("progress", e => {
                        n.default.dispatch({
                            type: "UPLOAD_PROGRESS",
                            channelId: a,
                            file: e
                        })
                    }), p.on("error", (t, _) => {
                        if (n.default.dispatch({
                                type: "UPLOAD_FAIL",
                                channelId: a,
                                file: t
                            }), (0, g.logMessageSendFailure)({
                                fileItems: t.items,
                                failureCode: _
                            }), _ === y.AbortCodes.EXPLICIT_CONTENT) {
                            r.default.sendClydeError(a, _);
                            return
                        }(0, i.openUploadError)({
                            title: D.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                            help: D.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                                onClick: () => {
                                    (0, l.closeModal)(i.UPLOAD_ERROR_MODAL_KEY), e({
                                        channelId: a,
                                        file: o,
                                        draftType: d,
                                        message: u
                                    })
                                }
                            })
                        }), "" !== c.content && "" === M.default.getDraft(a, d) && s.default.saveDraft(a, c.content, d)
                    }), p.on("complete", e => {
                        n.default.dispatch({
                            type: "UPLOAD_COMPLETE",
                            channelId: a,
                            file: e
                        })
                    }), p.upload(o, c)
                },
                uploadFiles: R,
                cancel(e) {
                    if (n.default.dispatch({
                            type: "UPLOAD_CANCEL_REQUEST",
                            file: e
                        }), null != e.draftContent && null != e.channelId) {
                        let t = M.default.getDraft(e.channelId, M.DraftType.ChannelMessage);
                        "" === t && n.default.dispatch({
                            type: "DRAFT_SAVE",
                            channelId: e.channelId,
                            draft: e.draftContent,
                            draftType: M.DraftType.ChannelMessage
                        })
                    }
                }
            }
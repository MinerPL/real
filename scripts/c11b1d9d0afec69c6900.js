(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["80685"], {
        111633: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t, n;
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), T.test(e) ? e = e.substr(0, e.length - 2) : M.test(e) && (e = e.substr(0, e.length - 1)), (n = A.exec(e)) ? u.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = h.exec(e)) && c.test(n[1]) && (e = n[1], p.test(e) ? e += "e" : L.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = E.exec(e)) && c.test(n[1]) && (e = n[1] + "i"), (n = S.exec(e)) && u.test(n[1]) && (e = n[1] + l[n[2]]), (n = O.exec(e)) && u.test(n[1]) && (e = n[1] + a[n[2]]), (n = R.exec(e)) ? d.test(n[1]) && (e = n[1]) : (n = g.exec(e)) && d.test(n[1]) && (e = n[1]), (n = m.exec(e)) && (d.test(n[1]) || o.test(n[1]) && !f.test(n[1])) && (e = n[1]), _.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
            };
            var l = {
                    ational: "ate",
                    tional: "tion",
                    enci: "ence",
                    anci: "ance",
                    izer: "ize",
                    bli: "ble",
                    alli: "al",
                    entli: "ent",
                    eli: "e",
                    ousli: "ous",
                    ization: "ize",
                    ation: "ate",
                    ator: "ate",
                    alism: "al",
                    iveness: "ive",
                    fulness: "ful",
                    ousness: "ous",
                    aliti: "al",
                    iviti: "ive",
                    biliti: "ble",
                    logi: "log"
                },
                a = {
                    icate: "ic",
                    ative: "",
                    alize: "al",
                    iciti: "ic",
                    ical: "ic",
                    ful: "",
                    ness: ""
                },
                s = "[aeiouy]",
                i = "([^aeiou][^aeiouy]*)",
                r = "(" + s + "[aeiou]*)",
                u = RegExp("^" + i + "?" + r + i),
                o = RegExp("^" + i + "?" + r + i + r + "?$"),
                d = RegExp("^" + i + "?(" + r + i + "){2,}"),
                c = RegExp("^" + i + "?" + s),
                f = RegExp("^" + i + s + "[^aeiouwxy]$"),
                _ = /ll$/,
                m = /^(.+?)e$/,
                E = /^(.+?)y$/,
                g = /^(.+?(s|t))(ion)$/,
                h = /^(.+?)(ed|ing)$/,
                p = /(at|bl|iz)$/,
                A = /^(.+?)eed$/,
                M = /^.+?[^s]s$/,
                T = /^.+?(ss|i)es$/,
                L = /([^aeiouylsz])\1$/,
                S = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                O = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                R = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        949041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("884691");

            function a() {
                let e = (0, l.createContext)(void 0);
                return {
                    Provider: t => {
                        let {
                            initialStore: n,
                            createStore: a,
                            children: s
                        } = t, i = (0, l.useRef)();
                        return !i.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !a && (a = () => n)), i.current = a()), (0, l.createElement)(e.Provider, {
                            value: i.current
                        }, s)
                    },
                    useStore: function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            a = (0, l.useContext)(e);
                        if (!a) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return a(t, n)
                    },
                    useStoreApi: () => {
                        let t = (0, l.useContext)(e);
                        if (!t) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return (0, l.useMemo)(() => ({
                            getState: t.getState,
                            setState: t.setState,
                            subscribe: t.subscribe,
                            destroy: t.destroy
                        }), [t])
                    }
                }
            }
        },
        783480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("77078"),
                a = n("913144"),
                s = n("295426"),
                i = n("819689"),
                r = n("81594"),
                u = n("336522"),
                o = n("979911"),
                d = n("282928"),
                c = n("966724"),
                f = n("681736"),
                _ = n("600798"),
                m = n("692038"),
                E = n("815297"),
                g = n("168730"),
                h = n("529805"),
                p = n("685841"),
                A = n("804888"),
                M = n("474643"),
                T = n("585722"),
                L = n("568734"),
                S = n("49111"),
                O = n("782340");

            function R(e) {
                var t, n, l;
                let d, {
                        channelId: c,
                        uploads: R,
                        draftType: C,
                        parsedMessage: I,
                        options: y = {}
                    } = e,
                    x = new f.default(S.Endpoints.MESSAGES(c)),
                    U = {
                        content: "",
                        nonce: "",
                        channel_id: c,
                        type: S.MessageTypes.DEFAULT,
                        sticker_ids: null == y ? void 0 : y.stickerIds
                    };
                null != I && (U.content = null == I ? void 0 : I.content);
                let v = p.default.getPendingReply(c);
                null != v && (U.type = S.MessageTypes.REPLY, U.message_reference = y.messageReference, U.allowed_mentions = y.allowedMentions, (0, h.deletePendingReply)(c));
                let [D, P] = (0, A.default)(U.content);
                D && (U.content = P, U.flags = (0, L.addFlag)(null !== (t = U.flags) && void 0 !== t ? t : 0, S.MessageFlags.SUPPRESS_NOTIFICATIONS));
                let b = null !== (n = y.nonce) && void 0 !== n ? n : (0, E.createNonce)(),
                    F = (0, E.default)({
                        channelId: c,
                        content: U.content,
                        tts: null !== (l = null == I ? void 0 : I.tts) && void 0 !== l && l,
                        type: U.type,
                        messageReference: U.message_reference,
                        flags: U.flags,
                        nonce: b
                    });
                U.nonce = b, x.on("start", e => {
                    d = (0, m.createMessageRecord)({
                        ...F,
                        id: e.id
                    }), a.default.dispatch({
                        type: "UPLOAD_START",
                        channelId: c,
                        file: e,
                        message: d,
                        uploader: x
                    })
                }), x.on("progress", e => {
                    a.default.dispatch({
                        type: "UPLOAD_PROGRESS",
                        channelId: c,
                        file: e
                    })
                });
                x.on("error", (e, t, n, l) => {
                    if (a.default.dispatch({
                            type: "UPLOAD_FAIL",
                            channelId: c,
                            file: e,
                            messageRecord: d
                        }), (0, g.logMessageSendFailure)({
                            fileItems: e.items,
                            failureCode: t,
                            errorMessage: null == l ? void 0 : l.msg
                        }), t === S.AbortCodes.EXPLICIT_CONTENT) {
                        i.default.sendClydeError(c, t);
                        return
                    }
                    if (t === S.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) {
                        let e = {
                                code: t,
                                message: null == n ? void 0 : n.message
                            },
                            l = null == d ? null : {
                                type: o.MessageDataType.SEND,
                                message: {
                                    ...d,
                                    channelId: c
                                }
                            };
                        (0, u.openUploadError)({
                            title: O.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                            help: (0, _.getAutomodErrorMessage)(l, e)
                        });
                        return
                    }
                    t !== S.AbortCodes.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS && ((0, u.openUploadError)({
                        title: O.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                        help: O.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
                    }), "" !== U.content && "" === M.default.getDraft(c, C) && s.default.saveDraft(c, U.content, C), 0 === T.default.getUploadCount(c, C) && r.default.setUploads({
                        channelId: c,
                        uploads: R,
                        draftType: C
                    }))
                }), x.on("complete", e => {
                    a.default.dispatch({
                        type: "UPLOAD_COMPLETE",
                        channelId: c,
                        file: e,
                        aborted: x._aborted
                    })
                }), x.uploadFiles(R, U)
            }
            var C = {
                instantBatchUpload: function(e) {
                    let {
                        channelId: t,
                        files: n,
                        draftType: l,
                        isThumbnail: a = !1,
                        isClip: s = !1
                    } = e, i = Array.from(n).map(e => new d.CloudUpload({
                        file: e,
                        platform: c.UploadPlatform.WEB,
                        isThumbnail: a,
                        isClip: s
                    }, t));
                    R({
                        channelId: t,
                        uploads: i,
                        draftType: l
                    })
                },
                upload: function e(t) {
                    let {
                        channelId: n,
                        file: r,
                        draftType: o,
                        message: d,
                        hasSpoiler: c,
                        filename: _
                    } = t, m = {
                        content: "",
                        tts: !1,
                        hasSpoiler: c,
                        filename: _
                    };
                    if (null != d) {
                        m.content = d.content, m.tts = d.tts, m.channel_id = d.channel_id;
                        let e = p.default.getPendingReply(n);
                        if (null != e) {
                            let t = i.default.getSendMessageOptionsForReply(e);
                            m.type = S.MessageTypes.REPLY, m.message_reference = t.messageReference, m.allowed_mentions = t.allowedMentions, (0, h.deletePendingReply)(n)
                        }
                    }
                    let E = new f.default(S.Endpoints.MESSAGES(n));
                    E.on("start", e => {
                        a.default.dispatch({
                            type: "UPLOAD_START",
                            channelId: n,
                            file: e,
                            uploader: E
                        })
                    }), E.on("progress", e => {
                        a.default.dispatch({
                            type: "UPLOAD_PROGRESS",
                            channelId: n,
                            file: e
                        })
                    }), E.on("error", (t, c) => {
                        if (a.default.dispatch({
                                type: "UPLOAD_FAIL",
                                channelId: n,
                                file: t
                            }), (0, g.logMessageSendFailure)({
                                fileItems: t.items,
                                failureCode: c
                            }), c === S.AbortCodes.EXPLICIT_CONTENT) {
                            i.default.sendClydeError(n, c);
                            return
                        }(0, u.openUploadError)({
                            title: O.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                            help: O.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                                onClick: () => {
                                    (0, l.closeModal)(u.UPLOAD_ERROR_MODAL_KEY), e({
                                        channelId: n,
                                        file: r,
                                        draftType: o,
                                        message: d
                                    })
                                }
                            })
                        }), "" !== m.content && "" === M.default.getDraft(n, o) && s.default.saveDraft(n, m.content, o)
                    }), E.on("complete", e => {
                        a.default.dispatch({
                            type: "UPLOAD_COMPLETE",
                            channelId: n,
                            file: e
                        })
                    }), E.upload(r, m)
                },
                uploadFiles: R,
                cancel(e) {
                    if (a.default.dispatch({
                            type: "UPLOAD_CANCEL_REQUEST",
                            file: e
                        }), null != e.draftContent && null != e.channelId) {
                        let t = M.default.getDraft(e.channelId, M.DraftType.ChannelMessage);
                        "" === t && a.default.dispatch({
                            type: "DRAFT_SAVE",
                            channelId: e.channelId,
                            draft: e.draftContent,
                            draftType: M.DraftType.ChannelMessage
                        })
                    }
                }
            }
        },
        87657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("77078"),
                i = n("390236"),
                r = a.memo(function(e) {
                    var t, n, r, u;
                    let {
                        user: o,
                        size: d = s.AvatarSizes.SIZE_32,
                        animate: c = !1,
                        "aria-hidden": f = !1,
                        ..._
                    } = e, m = a.useContext(i.default);
                    return (0, l.jsx)(s.Avatar, {
                        src: (t = o, n = (0, s.getAvatarSize)(d), r = c, u = m, t.getAvatarURL(u, n, r)),
                        size: d,
                        "aria-label": f ? void 0 : o.username,
                        "aria-hidden": f,
                        ..._
                    })
                })
        },
        681736: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("872717"),
                a = n("448993"),
                s = n("981112"),
                i = n("966724"),
                r = n("980134"),
                u = n("782340");
            class o extends s.default {
                async uploadFiles(e, t) {
                    let {
                        addFilesTo: n
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    super.upload({
                        name: u.default.Messages.ATTACHMENT_PROCESSING
                    }, t, e);
                    let l = new AbortController;
                    try {
                        if (this.files = e, this._aborted) return;
                        if (this._handleStart(() => l.abort()), !await this.compressAndCheckFileSize()) return;
                        this.setUploadingTextForUI(), await (0, s.stageAttachmentFiles)(this.files, !0, this._recomputeProgress.bind(this))
                    } catch (e) {
                        this._handleException(e)
                    }
                    try {
                        return await this._createMessage(l.signal, t, n)
                    } catch (e) {
                        if (this._raiseEndpointErrors) throw e;
                        this._handleException(e)
                    }
                }
                async _createMessage(e, t, n) {
                    let s;
                    let u = [];
                    this.files.forEach((e, t) => {
                        let n = (0, r.getAttachmentPayload)(e, t);
                        e.item.platform === i.UploadPlatform.WEB && u.push({
                            ...n
                        })
                    }), s = null != n && null != t ? this._addAttachmentsToPayload(t, n, u) : {
                        ...t,
                        attachments: u
                    };
                    let o = {
                            url: this._url,
                            body: s,
                            signal: e
                        },
                        d = "POST" === this._method ? l.default.post : l.default.patch;
                    try {
                        let e = await d(o);
                        return this._handleComplete(e.body), e.body
                    } catch (e) {
                        var c;
                        if (this._raiseEndpointErrors) throw new a.APIError(e);
                        this._handleError({
                            code: null == e ? void 0 : null === (c = e.body) || void 0 === c ? void 0 : c.code,
                            body: null == e ? void 0 : e.body
                        })
                    }
                }
                constructor(e, t = "POST", n) {
                    super(e, t, n)
                }
            }
        },
        612278: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFirstForumPostMessage: function() {
                    return A
                },
                useMostRecentForumMessage: function() {
                    return M
                },
                preloadForumThreads: function() {
                    return L
                }
            });
            var l = n("917351"),
                a = n.n(l),
                s = n("446674"),
                i = n("872717"),
                r = n("913144"),
                u = n("42203"),
                o = n("670902"),
                d = n("349778"),
                c = n("430475"),
                f = n("324261"),
                _ = n("49111");
            class m {
                get(e) {
                    return !this._set.hasOwnProperty(e) && (this._set[e] = this._defaultValueFunc()), this._set[e]
                }
                delete(e) {
                    delete this._set[e]
                }
                hasNext() {
                    return !a.isEmpty(this._set)
                }
                next() {
                    return Object.keys(this._set)[0]
                }
                constructor(e) {
                    this._set = {}, this._defaultValueFunc = e
                }
            }
            let E = new class e {
                    request(e, t) {
                        this.requested.get(e).add(t)
                    }
                    hasRequested(e, t) {
                        return this.requested.get(e).has(t)
                    }
                    finishRequesting(e, t) {
                        let n = this.requested.get(e);
                        t.forEach(e => n.delete(e)), E.compact(e)
                    }
                    getRequested(e) {
                        return this.requested.get(e)
                    }
                    getNextBatch(e, t) {
                        return Array.from(this.requested.get(e)).slice(0, t)
                    }
                    hasNext() {
                        return this.requested.hasNext()
                    }
                    next() {
                        return this.requested.next()
                    }
                    compact(e) {
                        0 === this.requested.get(e).size && this.requested.delete(e)
                    }
                    constructor() {
                        this.requested = new m(() => new Set)
                    }
                },
                g = null;

            function h(e, t) {
                let n = (0, d.isForumActivityExperimentEnabled)(e);
                if (n) {
                    let {
                        loaded: e,
                        message: n
                    } = f.default.getMessageState(t);
                    return !e && null == n
                }
                return !1
            }

            function p(e, t) {
                return !e && null == t
            }

            function A(e) {
                var t, n;
                let {
                    loaded: l,
                    firstMessage: a
                } = (0, s.useStateFromStoresObject)([c.default], () => c.default.getMessage(e.id)), i = (0, s.useStateFromStores)([u.default], () => u.default.getChannel(e.parent_id));
                if (null != i && (t = l, n = a, !t && null == n)) S(i, e.id);
                return {
                    loaded: l,
                    firstMessage: a
                }
            }

            function M(e, t) {
                let {
                    loaded: n,
                    message: l
                } = (0, s.useStateFromStoresObject)([f.default], () => f.default.getMessageState(t.id));
                return null != e && h(t.guild_id, t.id) && S(e, t.id), {
                    loaded: n,
                    mostRecentMessage: l
                }
            }

            function T(e, t) {
                let n = !1;
                t.forEach(t => {
                    var l, a;
                    let {
                        loaded: s,
                        firstMessage: i
                    } = c.default.getMessage(t);
                    if (l = s, a = i, !l && null == a || h(e.guild_id, t)) E.request(e.id, t), n = !0
                }), n && null == g && (g = setTimeout(O, 0))
            }

            function L(e) {
                T(e, (0, o.computeThreadIdsSnapshot)(e.id).slice(0, 10))
            }

            function S(e, t) {
                if (E.hasRequested(e.id, t)) return;
                let n = (0, o.computeThreadIdsSnapshot)(e.id),
                    l = n.findIndex(e => e === t),
                    a = n.slice(l, l + 5).filter(t => !E.hasRequested(e.id, t));
                T(e, a)
            }
            async function O() {
                try {
                    for (; E.hasNext();) await R(E.next())
                } finally {
                    g = null
                }
            }
            async function R(e) {
                let t = E.getNextBatch(e, 10);
                try {
                    var n;
                    if (0 === t.length) return;
                    let l = null === (n = u.default.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
                    if (null == l) return;
                    let {
                        body: {
                            threads: a
                        }
                    } = await i.default.post({
                        url: _.Endpoints.FORUM_POSTS(e),
                        body: {
                            thread_ids: t
                        }
                    });
                    r.default.dispatch({
                        type: "LOAD_FORUM_POSTS",
                        guildId: l,
                        threads: a
                    })
                } catch (e) {} finally {
                    E.finishRequesting(e, t)
                }
            }
        },
        324261: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("446674"),
                a = n("913144"),
                s = n("692038"),
                i = n("42203"),
                r = n("697218"),
                u = n("449008"),
                o = n("299039");
            let d = {};

            function c(e) {
                var t;
                let n = i.default.getChannel(null == e ? void 0 : e.channel_id);
                if (null == n || !n.isForumPost()) return !1;
                let l = d[n.id];
                return o.default.compare(null == e ? void 0 : e.id, null == l ? void 0 : null === (t = l.message) || void 0 === t ? void 0 : t.id) > -1
            }

            function f(e, t) {
                let n = null == t ? null : (0, s.createMessageRecord)(t);
                return d[e] = {
                    loaded: !0,
                    message: n
                }, !0
            }

            function _(e) {
                return d[e]
            }

            function m(e) {
                var t;
                return null === (t = d[e]) || void 0 === t ? void 0 : t.message
            }

            function E(e) {
                let {
                    threads: t,
                    mostRecentMessages: n
                } = e;
                t.forEach(e => f(e.id, null)), null == n || n.filter(u.isNotNullish).forEach(e => {
                    f(e.channel_id, e)
                })
            }
            class g extends l.default.Store {
                initialize() {
                    this.waitFor(i.default, r.default)
                }
                getMessageState(e) {
                    return !(e in d) && (d[e] = {
                        loaded: !1,
                        message: null
                    }), d[e]
                }
            }
            g.displayName = "ForumPostRecentMessageStore";
            var h = new g(a.default, {
                CONNECTION_OPEN: function() {
                    d = {}
                },
                MESSAGE_CREATE: function(e) {
                    if (e.isPushNotification || !c(e.message)) return !1;
                    e.message.channel_id === e.message.id ? f(e.message.channel_id, null) : f(e.message.channel_id, e.message)
                },
                MESSAGE_UPDATE: function(e) {
                    if (!c(e.message) || e.message.channel_id === e.message.id) return !1;
                    ! function(e, t) {
                        let n = function(e) {
                                return d[e]
                            }(e),
                            l = m(e);
                        null != n && null != l && (d[e] = {
                            ...n,
                            message: (0, s.updateMessageRecord)(l, t)
                        })
                    }(e.message.channel_id, e.message)
                },
                MESSAGE_DELETE: function(e) {
                    return function(e, t) {
                        let n = m(e);
                        return (null == n ? void 0 : n.id) === t && (delete d[e], !0)
                    }(e.channelId, e.id)
                },
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        threads: t
                    } = e;
                    for (let e in t) f(e, t[e].most_recent_message)
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: E,
                LOAD_THREADS_SUCCESS: E
            })
        },
        67994: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("404118"),
                u = n("81594"),
                o = n("681736"),
                d = n("694187"),
                c = n("42203"),
                f = n("474643"),
                _ = n("305961"),
                m = n("377253"),
                E = n("476765"),
                g = n("254490"),
                h = n("412861"),
                p = n("834021"),
                A = n("867965"),
                M = n("152637"),
                T = n("578198"),
                L = n("49111"),
                S = n("843455"),
                O = n("782340"),
                R = n("79588");

            function C(e) {
                var t;
                let {
                    threadId: n,
                    attachments: C,
                    sendMessage: I,
                    transitionState: y,
                    onClose: x
                } = e, U = (0, E.useUID)(), v = (0, s.useStateFromStores)([c.default], () => c.default.getChannel(n), [n]), D = (0, s.useStateFromStores)([_.default], () => _.default.getGuild(null == v ? void 0 : v.getGuildId()), [v]), P = (0, s.useStateFromStores)([c.default], () => c.default.getChannel(null == v ? void 0 : v.parent_id), [v]), b = null === (t = C[0]) || void 0 === t ? void 0 : t.item, [F, N] = a.useState(null);
                a.useEffect(() => {
                    null != b && (0, d.processImage)(b.file, (e, t) => N(e), S.NOOP)
                }, [b]);
                let j = null != b && null != F ? {
                        src: F,
                        width: M.MAX_THUMBNAIL_WIDTH,
                        height: M.MAX_THUMBNAIL_HEIGHT,
                        spoiler: C[0].spoiler,
                        alt: C[0].description
                    } : null,
                    [w, G] = a.useState(!1),
                    z = a.useCallback(() => {
                        (0, A.trackForumAddMediaToOriginalPostClicked)({
                            added: !1
                        }), I(), x()
                    }, [I, x]),
                    B = a.useCallback(() => {
                        null != v && null != D && ((0, A.trackForumAddMediaToOriginalPostClicked)({
                            added: !0
                        }), ! function(e) {
                            let {
                                thread: t,
                                attachments: n,
                                setIsUploading: l,
                                guild: a,
                                onClose: s
                            } = e, i = new o.default(L.Endpoints.MESSAGE(t.id, t.id), "PATCH");
                            i.on("start", () => {
                                l(!0)
                            }), i.on("progress", e => {
                                let r = (0, g.maxFileSize)(a.id);
                                e.currentSize > r && (i.cancel(), l(!1), s(), (0, h.showUploadFileSizeExceededError)(t, (0, p.getWebUploadFiles)(n)))
                            }), i.on("error", (e, t) => {
                                l(!1), t === L.AbortCodes.EXPLICIT_CONTENT && (s(), r.default.show({
                                    title: O.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                    body: O.default.Messages.BOT_GUILD_EXPLICIT_CONTENT.format({
                                        name: a.toString()
                                    })
                                }))
                            }), i.on("complete", () => {
                                l(!1), s(), u.default.clearAll(t.id, f.DraftType.ChannelMessage)
                            });
                            let d = m.default.getMessages(t.id).get(t.id),
                                c = null != d ? d.attachments : [];
                            i.uploadFiles(n, {
                                attachments: [...c]
                            }, {
                                addFilesTo: "attachments"
                            })
                        }({
                            thread: v,
                            attachments: C,
                            setIsUploading: G,
                            guild: D,
                            onClose: x
                        }))
                    }, [v, C, G, D, x]);
                return null == P ? null : (0, l.jsxs)(i.ModalRoot, {
                    transitionState: y,
                    size: i.ModalSize.SMALL,
                    className: R.modalRoot,
                    "aria-labelledby": U,
                    children: [(0, l.jsxs)(i.ModalContent, {
                        className: R.modal,
                        children: [(0, l.jsx)(i.Heading, {
                            variant: "heading-md/semibold",
                            className: R.header,
                            id: U,
                            children: O.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_TITLE
                        }), (0, l.jsx)(i.Text, {
                            variant: "text-md/normal",
                            className: R.body,
                            children: O.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DESCRIPTION
                        }), (0, l.jsx)("div", {
                            className: R.forumPost,
                            children: (0, l.jsx)(T.ForumPostComposerStoreProvider, {
                                createStore: () => (0, T.createForumPostComposerStore)(P),
                                children: (0, l.jsx)(M.default, {
                                    threadId: n,
                                    goToThread: S.NOOP,
                                    overrideMedia: j
                                })
                            })
                        })]
                    }), (0, l.jsxs)(i.ModalFooter, {
                        className: R.modalFooter,
                        children: [(0, l.jsx)(i.Button, {
                            look: i.Button.Looks.BLANK,
                            className: R.cancelButton,
                            disabled: w,
                            onClick: x,
                            children: O.default.Messages.CANCEL
                        }), (0, l.jsx)(i.Button, {
                            color: i.Button.Colors.PRIMARY,
                            className: R.dontAddButton,
                            disabled: w,
                            onClick: z,
                            children: O.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DONT_ADD
                        }), (0, l.jsx)(i.Button, {
                            color: i.Button.Colors.BRAND,
                            className: R.button,
                            submitting: w,
                            onClick: B,
                            autoFocus: !0,
                            children: O.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_ADD
                        })]
                    })]
                })
            }
        },
        90625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IncreasedActivityForumTagPill: function() {
                    return p
                },
                IncreasedActivityForumTagOverflow: function() {
                    return A
                },
                default: function() {
                    return M
                },
                ForumTagOverflow: function() {
                    return T
                }
            });
            var l, a, s = n("37983"),
                i = n("884691"),
                r = n("414456"),
                u = n.n(r),
                o = n("974667"),
                d = n("446674"),
                c = n("77078"),
                f = n("430568"),
                _ = n("206230"),
                m = n("385976"),
                E = n("945330"),
                g = n("782340"),
                h = n("951779");

            function p(e) {
                let {
                    tag: t,
                    size: n = a.MEDIUM,
                    disabled: l,
                    className: r,
                    onClick: p,
                    onRemove: A,
                    selected: M,
                    ariaLabel: T
                } = e, {
                    name: L,
                    emojiId: S,
                    emojiName: O
                } = t, R = null != A, [C, I] = i.useState(!1), y = (0, d.useStateFromStores)([m.default], () => null != S ? m.default.getUsableCustomEmojiById(S) : null), x = R || null != p, U = (!R || !C) && (null != S || null != O), v = n === a.SMALL, D = i.useRef(null), P = (0, d.useStateFromStores)([_.default], () => _.default.keyboardModeEnabled), b = (0, s.jsxs)(s.Fragment, {
                    children: [U ? (0, s.jsx)(f.default, {
                        className: u(h.emoji, {
                            [h.small]: v
                        }),
                        emojiId: S,
                        emojiName: O,
                        animated: !!(null == y ? void 0 : y.animated),
                        size: "reaction",
                        alt: ""
                    }) : null, C && R && (0, s.jsx)("div", {
                        className: h.closeCircle,
                        children: (0, s.jsx)(E.default, {
                            className: h.close
                        })
                    }), (0, s.jsx)(c.Text, {
                        className: h.increasedActivityText,
                        variant: "text-xs/medium",
                        lineClamp: 1,
                        children: L
                    })]
                }), F = {
                    key: t.id,
                    className: u(h.pill, h.increasedActivityPill, {
                        [h.disabled]: l,
                        [h.clickable]: x,
                        [h.increasedActivitySmall]: v,
                        [h.selected]: M
                    }, r),
                    onClick: e => {
                        null == p || p(e), null == A || A(t), !P && null != D.current && D.current.blur()
                    },
                    onMouseEnter: () => R && I(!0),
                    onMouseLeave: () => R && I(!1)
                }, N = (0, o.useListItem)("forum-tag-".concat(t.id));
                return x ? (0, s.jsx)(c.Clickable, {
                    ...N,
                    innerRef: D,
                    focusProps: {
                        ringTarget: D
                    },
                    "aria-label": null != T ? T : g.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: L
                    }),
                    role: "button",
                    "aria-pressed": M,
                    ...F,
                    children: b
                }) : (0, s.jsx)("div", {
                    "aria-label": null != T ? T : g.default.Messages.FORUM_TAG_A11Y_TAG_BY.format({
                        tagName: L
                    }),
                    ...F,
                    children: b
                })
            }

            function A(e) {
                let {
                    tags: t,
                    count: n,
                    size: l = a.MEDIUM
                } = e, i = l === a.SMALL;
                return (0, s.jsx)(c.Tooltip, {
                    "aria-label": g.default.Messages.FORUM_TAGS,
                    text: (0, s.jsx)(s.Fragment, {
                        children: t.map(e => (0, s.jsx)(M, {
                            tag: e,
                            className: h.tooltipPill,
                            size: M.Sizes.SMALL
                        }, e.id))
                    }),
                    children: e => (0, s.jsx)("div", {
                        ...e,
                        className: u(h.pill, h.increasedActivityPill, {
                            [h.increasedActivitySmall]: i
                        }),
                        children: (0, s.jsxs)(c.Text, {
                            className: h.increasedActivityText,
                            variant: i ? "text-xs/medium" : "text-sm/medium",
                            children: ["+", n]
                        })
                    })
                })
            }

            function M(e) {
                let {
                    tag: t,
                    size: n = a.MEDIUM,
                    disabled: l,
                    className: r,
                    onClick: p,
                    onRemove: A,
                    selected: M,
                    ariaLabel: T
                } = e, {
                    name: L,
                    emojiId: S,
                    emojiName: O
                } = t, R = null != A, [C, I] = i.useState(!1), y = (0, d.useStateFromStores)([m.default], () => null != S ? m.default.getUsableCustomEmojiById(S) : null), x = R || null != p, U = (!R || !C) && (null != S || null != O), v = n === a.SMALL, D = i.useRef(null), P = (0, d.useStateFromStores)([_.default], () => _.default.keyboardModeEnabled), b = (0, s.jsxs)(s.Fragment, {
                    children: [U ? (0, s.jsx)(f.default, {
                        className: u(h.emoji, {
                            [h.small]: v
                        }),
                        emojiId: S,
                        emojiName: O,
                        animated: !!(null == y ? void 0 : y.animated),
                        size: "reaction"
                    }) : null, C && R && (0, s.jsx)("div", {
                        className: h.closeCircle,
                        children: (0, s.jsx)(E.default, {
                            className: h.close
                        })
                    }), (0, s.jsx)(c.Text, {
                        variant: v ? "text-xs/semibold" : "text-sm/semibold",
                        lineClamp: 1,
                        children: L
                    })]
                }), F = {
                    key: t.id,
                    className: u(h.pill, {
                        [h.disabled]: l,
                        [h.clickable]: x,
                        [h.small]: v,
                        [h.selected]: M
                    }, r),
                    onClick: e => {
                        null == p || p(e), null == A || A(t), !P && null != D.current && D.current.blur()
                    },
                    onMouseEnter: () => R && I(!0),
                    onMouseLeave: () => R && I(!1)
                }, N = (0, o.useListItem)("forum-tag-".concat(t.id));
                return x ? (0, s.jsx)(c.Clickable, {
                    ...N,
                    innerRef: D,
                    focusProps: {
                        ringTarget: D
                    },
                    "aria-label": null != T ? T : g.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: L
                    }),
                    role: "button",
                    "aria-pressed": M,
                    ...F,
                    children: b
                }) : (0, s.jsx)("div", {
                    ...F,
                    children: b
                })
            }

            function T(e) {
                let {
                    tags: t,
                    count: n,
                    size: l = a.MEDIUM
                } = e, i = l === a.SMALL;
                return (0, s.jsx)(c.Tooltip, {
                    "aria-label": g.default.Messages.FORUM_TAGS,
                    text: (0, s.jsx)(s.Fragment, {
                        children: t.map(e => (0, s.jsx)(M, {
                            tag: e,
                            className: h.tooltipPill,
                            size: M.Sizes.SMALL
                        }, e.id))
                    }),
                    children: e => (0, s.jsx)("div", {
                        ...e,
                        className: u(h.pill, {
                            [h.small]: i
                        }),
                        children: (0, s.jsxs)(c.Text, {
                            variant: i ? "text-xs/semibold" : "text-sm/semibold",
                            children: ["+", n]
                        })
                    })
                })
            }(l = a || (a = {}))[l.SMALL = 0] = "SMALL", l[l.MEDIUM = 1] = "MEDIUM", M.Sizes = a
        },
        406043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCurrentUserCommunicationDisabled: function() {
                    return r
                },
                default: function() {
                    return d
                },
                userCommunicationDisabled: function() {
                    return c
                }
            });
            var l = n("446674"),
                a = n("26989"),
                s = n("697218"),
                i = n("509");

            function r(e) {
                let t = (0, l.useStateFromStores)([s.default], () => s.default.getCurrentUser());
                return d(null == t ? void 0 : t.id, e)
            }

            function u(e, t, n) {
                return null != t && null != e ? n.getMember(t, e) : null
            }

            function o(e) {
                var t;
                return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, i.isMemberCommunicationDisabled)(e)]
            }

            function d(e, t) {
                let n = (0, l.useStateFromStores)([a.default], () => u(e, t, a.default), [t, e]);
                return o(n)
            }

            function c(e, t) {
                let n = u(e, t, a.default);
                return o(n)
            }
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return c
                },
                requestMembersForRole: function() {
                    return _
                }
            });
            var l = n("693566"),
                a = n.n(l),
                s = n("872717"),
                i = n("913144"),
                r = n("851387"),
                u = n("36402"),
                o = n("49111");
            async function d(e) {
                try {
                    i.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await s.default.get({
                            url: o.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    i.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    i.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function c(e) {
                u.default.shouldFetch(e) && await d(e)
            }
            let f = new a({
                maxAge: 1e4
            });

            function _(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = "".concat(e, "-").concat(t);
                if (!n || null == f.get(l)) {
                    var a, i;
                    return f.set(l, !0), a = e, i = t, s.default.get({
                        url: o.Endpoints.GUILD_ROLE_MEMBER_IDS(a, i)
                    }).then(e => (r.default.requestMembersById(a, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("446674"),
                a = n("913144");
            let s = {},
                i = {};
            class r extends l.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? s[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = i[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            r.displayName = "GuildRoleMemberCountStore";
            var u = new r(a.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    s[t] = n, i[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: l
                    } = e, a = s[t];
                    if (null == a) return !1;
                    a[n] = l
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: l
                    } = e, a = s[t];
                    if (null == a || null == a[n]) return !1;
                    let i = Object.keys(l).length;
                    a[n] += i
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = s[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = l[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = s[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = Math.max(l[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == s[t] && (s[t] = {}), s[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete s[t.id], delete i[t.id]
                }
            })
        },
        441823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openUserContextMenu: function() {
                    return s
                },
                openModerateUserContextMenu: function() {
                    return i
                },
                openModerateRoleContextMenu: function() {
                    return r
                },
                openModerationRaidContextMenu: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("272030");

            function s(e, t, s) {
                s.isGroupDM() ? (0, a.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("166452").then(n.bind(n, "166452"));
                    return n => (0, l.jsx)(e, {
                        ...n,
                        user: t,
                        channel: s
                    })
                }) : s.isDM() ? (0, a.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("130074").then(n.bind(n, "130074"));
                    return n => (0, l.jsx)(e, {
                        ...n,
                        user: t,
                        channel: s,
                        showMute: !1,
                        targetIsUser: !0
                    })
                }) : null != s.guild_id ? (0, a.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("834247").then(n.bind(n, "834247"));
                    return n => (0, l.jsx)(e, {
                        ...n,
                        user: t,
                        channel: s,
                        guildId: s.guild_id
                    })
                }) : (0, a.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("406784").then(n.bind(n, "406784"));
                    return n => (0, l.jsx)(e, {
                        ...n,
                        user: t
                    })
                })
            }

            function i(e, t) {
                let {
                    user: s,
                    channel: i,
                    moderationAlertId: r,
                    guildId: u,
                    analyticsLocations: o,
                    onCloseContextMenu: d
                } = t;
                if ((null == i ? void 0 : i.isGroupDM()) || (null == i ? void 0 : i.isDM())) throw Error("Cannot moderate user in DM or group DM");
                let c = null != u ? u : null == i ? void 0 : i.getGuildId();
                null != c && (0, a.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("467940").then(n.bind(n, "467940"));
                    return t => (0, l.jsx)(e, {
                        ...t,
                        user: s,
                        channelId: null == i ? void 0 : i.id,
                        guildId: c,
                        moderationAlertId: r,
                        analyticsLocations: o,
                        onCloseContextMenu: d
                    })
                })
            }

            function r(e, t) {
                let {
                    user: s,
                    guildId: i,
                    analyticsLocations: r,
                    onCloseContextMenu: u
                } = t;
                (0, a.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("522651").then(n.bind(n, "522651"));
                    return t => (0, l.jsx)(e, {
                        ...t,
                        user: s,
                        guildId: i,
                        analyticsLocations: r,
                        onCloseContextMenu: u
                    })
                })
            }

            function u(e, t, s) {
                null != s && (0, a.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("701587").then(n.bind(n, "701587"));
                    return t => (0, l.jsx)(e, {
                        ...t,
                        guildId: s
                    })
                })
            }
        },
        412861: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showUploadFileSizeExceededError: function() {
                    return M
                },
                promptToUpload: function() {
                    return T
                }
            });
            var l = n("255397"),
                a = n("81594"),
                s = n("783480"),
                i = n("336522"),
                r = n("966724"),
                u = n("716241"),
                o = n("191145"),
                d = n("585722"),
                c = n("697218"),
                f = n("599110"),
                _ = n("254490"),
                m = n("719923"),
                E = n("834021"),
                g = n("49111"),
                h = n("894488"),
                p = n("646718"),
                A = n("782340");

            function M(e, t) {
                let n = c.default.getCurrentUser(),
                    l = e.getGuildId(),
                    a = _.maxFileSize(l),
                    s = [],
                    r = 0,
                    o = 0,
                    d = 0,
                    f = [];
                for (let e of t) d += 1, r += e.size, s.push(e.size), e.size > o && (o = e.size), null != e.type ? f.push(e.type) : f.push("unknown");
                if (o > a) {
                    (0, u.trackWithMetadata)(g.AnalyticEvents.FILE_SIZE_LIMIT_EXCEEDED, {
                        channel_id: e.id,
                        guild_id: l,
                        user_individual_file_size_limit: a,
                        pre_compression_file_sizes: s,
                        pre_compression_aggregate_file_size: r,
                        num_attachments: d,
                        error_type: h.FileUploadErrorTypes.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
                        attachment_mimetypes: f
                    }), (0, i.openUploadError)({
                        title: A.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                        help: (0, E.getErrorHelp)(n, l),
                        showPremiumUpsell: !(0, m.isPremiumExactly)(n, p.PremiumTypes.TIER_2),
                        fileSize: o
                    });
                    return
                }(0, i.openUploadError)({
                    title: A.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: A.default.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
                        maxSize: _.sizeString(_.getMaxRequestSize())
                    })
                })
            }

            function T(e, t, n) {
                let {
                    requireConfirm: u = !0,
                    showLargeMessageDialog: c = !1,
                    isThumbnail: _ = !1,
                    isClip: m = !1
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (e.length < 1) return;
                let h = t.getGuildId();
                if ((0, E.filesExceedUploadLimits)(e, h)) {
                    M(t, e);
                    return
                }
                if (d.default.getUploadCount(t.id, n) + e.length > g.MAX_UPLOAD_COUNT) {
                    (0, i.openUploadError)({
                        title: A.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
                        help: A.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
                            limit: g.MAX_UPLOAD_COUNT
                        })
                    }), f.default.track(g.AnalyticEvents.UPLOAD_FILE_LIMIT_ERROR, {
                        existing_count: d.default.getUploadCount(t.id, n),
                        new_count: e.length
                    });
                    return
                }
                if ((t.type === g.ChannelTypes.GUILD_VOICE || t.type === g.ChannelTypes.GUILD_STAGE_VOICE) && !o.default.getChatOpen(t.id) && l.default.updateChatOpen(t.id, !0), u) {
                    let l = Array.from(e).map(e => ({
                        file: e,
                        platform: r.UploadPlatform.WEB,
                        isThumbnail: _,
                        isClip: m
                    }));
                    a.default.addFiles({
                        files: l,
                        channelId: t.id,
                        showLargeMessageDialog: c,
                        draftType: n
                    })
                } else s.default.instantBatchUpload({
                    channelId: t.id,
                    files: e,
                    draftType: n,
                    isThumbnail: _,
                    isClip: m
                })
            }
        },
        834021: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getErrorHelp: function() {
                    return u
                },
                filesExceedUploadLimits: function() {
                    return o
                },
                getWebUploadFiles: function() {
                    return d
                }
            });
            var l = n("966724"),
                a = n("254490"),
                s = n("719923"),
                i = n("646718"),
                r = n("782340");

            function u(e, t) {
                let n = a.sizeString(a.maxFileSize(t));
                return s.default.isPremium(e, i.PremiumTypes.TIER_2) ? r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: n
                }) : s.default.isPremium(e, i.PremiumTypes.TIER_1) ? r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({
                    maxSize: n
                }) : r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: n
                })
            }

            function o(e, t) {
                return a.anyFileTooLarge(e, t) || a.uploadSumTooLarge(e)
            }

            function d(e) {
                return e.reduce((e, t) => (t.item.platform === l.UploadPlatform.WEB && e.push(t.item.file), e), [])
            }
        }
    }
]);
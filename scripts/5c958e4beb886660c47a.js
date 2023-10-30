(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["12446"], {
        841362: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                numberParts: function() {
                    return n
                }
            });
            let n = {
                __proto__: null,
                bg: {
                    group: " ",
                    decimal: ","
                },
                cs: {
                    group: " ",
                    decimal: ","
                },
                da: {
                    group: ".",
                    decimal: ","
                },
                de: {
                    group: ".",
                    decimal: ","
                },
                el: {
                    group: ".",
                    decimal: ","
                },
                "en-GB": {
                    group: ",",
                    decimal: "."
                },
                "en-US": {
                    group: ",",
                    decimal: "."
                },
                "es-ES": {
                    group: ".",
                    decimal: ","
                },
                fi: {
                    group: " ",
                    decimal: ","
                },
                fr: {
                    group: " ",
                    decimal: ","
                },
                hi: {
                    group: ",",
                    decimal: "."
                },
                hr: {
                    group: ".",
                    decimal: ","
                },
                hu: {
                    group: " ",
                    decimal: ","
                },
                it: {
                    group: ".",
                    decimal: ","
                },
                ja: {
                    group: ",",
                    decimal: "."
                },
                ko: {
                    group: ",",
                    decimal: "."
                },
                lt: {
                    group: " ",
                    decimal: ","
                },
                nl: {
                    group: ".",
                    decimal: ","
                },
                no: {
                    group: " ",
                    decimal: ","
                },
                pl: {
                    group: " ",
                    decimal: ","
                },
                "pt-BR": {
                    group: ".",
                    decimal: ","
                },
                ro: {
                    group: ".",
                    decimal: ","
                },
                ru: {
                    group: " ",
                    decimal: ","
                },
                "sv-SE": {
                    group: " ",
                    decimal: ","
                },
                th: {
                    group: ",",
                    decimal: "."
                },
                tr: {
                    group: ".",
                    decimal: ","
                },
                uk: {
                    group: " ",
                    decimal: ","
                },
                vi: {
                    group: ".",
                    decimal: ","
                },
                "zh-CN": {
                    group: ",",
                    decimal: "."
                },
                "zh-TW": {
                    group: ",",
                    decimal: "."
                }
            }
        },
        981112: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                },
                stageAttachmentFiles: function() {
                    return h
                }
            });
            var n = l("811022"),
                i = l("994440"),
                o = l("282928"),
                a = l("142852"),
                r = l("402752"),
                s = l("572868"),
                u = l("49111"),
                d = l("894488"),
                c = l("782340");
            let p = new n.default("CloudUploaderBase.tsx");
            class m extends s.default {
                _fileSize() {
                    return this.files.reduce((e, t) => {
                        var l;
                        return e += null !== (l = t.currentSize) && void 0 !== l ? l : 0
                    }, 0)
                }
                async compressAndCheckFileSize() {
                    var e, t;
                    let l = (0, a.getUploadTarget)(null === (t = this.files[0]) || void 0 === t ? void 0 : null === (e = t.item) || void 0 === e ? void 0 : e.target);
                    return this.files.length > l.getMaxAttachmentsCount() ? (p.log("Too many attachments for ".concat(this.id)), this._handleError({
                        code: u.AbortCodes.TOO_MANY_ATTACHMENTS
                    }), !1) : !(this._fileSize() > l.getMaxTotalAttachmentSize()) || (this._handleError({
                        code: u.AbortCodes.ENTITY_TOO_LARGE,
                        reason: {
                            type: d.FileUploadErrorTypes.POSTCOMPRESSION_SUM_TOO_LARGE
                        }
                    }), !1)
                }
                _filesTooLarge() {
                    return this.files.some(e => e.error === u.AbortCodes.ENTITY_TOO_LARGE)
                }
                setUploadingTextForUI() {
                    let e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : c.default.Messages.UPLOADING_FILES.format({
                            count: this.files.length
                        }),
                        t = this.files.some(e => e.isImage),
                        l = this.files.some(e => e.isVideo),
                        n = this._fileSize();
                    p.log("setUploadingTextForUI - total content: ".concat(n, " bytes and ").concat(this.files.length, " attachments for ").concat(this.id)), this._file = {
                        ...this._file,
                        totalPostCompressionSize: n,
                        currentSize: n,
                        name: e,
                        hasVideo: l,
                        hasImage: t,
                        attachmentsCount: this.files.length,
                        items: this.files
                    }
                }
                _recomputeProgress() {
                    let {
                        loaded: e,
                        total: t
                    } = this._recomputeProgressTotal(), l = this._recomputeProgressByFile();
                    this._handleProgress(e, t, l)
                }
                _recomputeProgressTotal() {
                    let e = this._fileSize(),
                        t = this.files.reduce((e, t) => {
                            var l;
                            return e += null !== (l = t.loaded) && void 0 !== l ? l : 0
                        }, 0);
                    return {
                        loaded: t,
                        total: e
                    }
                }
                _recomputeProgressByFile() {
                    let e = {};
                    return this.files.forEach(t => {
                        e[t.id] = (0, r.calculateProgress)(t.loaded, t.currentSize)
                    }), e
                }
                cancel() {
                    p.log("Cancel called for ".concat(this.id)), !this._aborted && (this._aborted = !0, null != this._cancel && this._cancel(), this.files.forEach(e => e.cancel()), this._handleComplete())
                }
                async cancelItem(e) {
                    p.log("Cancel called for ".concat(this.id, " for item ").concat(e));
                    let t = this.files.find(t => t.id === e);
                    if (null == t || t.status === o.CloudUploadStatus.CANCELED) return;
                    let l = this.files.indexOf(t);
                    this.files = [...this.files.slice(0, l), ...this.files.slice(l + 1)], this._file = {
                        ...this._file,
                        items: this.files
                    }, await (0, i.cancelGetAttachmentFile)(t), t.cancel(), this.emit("cancel-upload-item", this._file), 0 === this.files.length && this.cancel()
                }
                failed() {
                    return this.files.some(e => e.status === o.CloudUploadStatus.ERROR)
                }
                _remainingUploadCount() {
                    let e = this.files;
                    return e.length - e.filter(e => e.status === o.CloudUploadStatus.COMPLETED).length
                }
                clear() {
                    this.cancel(), this.files = []
                }
                constructor(...e) {
                    super(...e), this.files = []
                }
            }
            async function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    l = arguments.length > 2 ? arguments[2] : void 0,
                    n = e.map(e => new Promise((n, i) => {
                        switch (e.status) {
                            case o.CloudUploadStatus.NOT_STARTED:
                                e.upload();
                                break;
                            case o.CloudUploadStatus.COMPLETED:
                                n("complete");
                                break;
                            case o.CloudUploadStatus.ERROR:
                                t && e.error !== u.AbortCodes.ENTITY_TOO_LARGE ? e.upload() : i(Error("File failed to upload"));
                                break;
                            case o.CloudUploadStatus.CANCELED:
                                i(Error("Upload is canceled"))
                        }
                        e.on("complete", () => {
                            n("complete")
                        }), e.on("error", () => {
                            i(Error("File ".concat(e.id, " failed to upload")))
                        }), e.on("progress", (e, t) => {
                            null == l || l(e, t)
                        })
                    }));
                await Promise.all(n)
            }
        },
        572868: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var n = l("44170"),
                i = l("917351"),
                o = l.n(i),
                a = l("605250"),
                r = l("402752"),
                s = l("894488");
            let u = new a.default("UploaderBase.tsx");
            class d extends n.EventEmitter {
                _addAttachmentsToPayload(e, t, l) {
                    let n = {
                            ...e
                        },
                        i = [...o.get(n, t, []), ...l];
                    return o.set(n, t, i)
                }
                clearProcessingMessageInterval() {
                    null != this.processingMessageChangeInterval && (clearInterval(this.processingMessageChangeInterval), this.processingMessageChangeInterval = void 0)
                }
                cancel() {
                    u.log("cancel() for ".concat(this.id)), this._aborted = !0, null != this._cancel && this._cancel(), this._handleComplete()
                }
                cancelItem(e) {
                    throw Error("cancelItem() is not implemented on UploaderBase; must implement cancelItem() on subclass")
                }
                upload(e, t, l) {
                    if (null != this._cancel) throw Error("Uploader.upload(...): An upload is already in progress.");
                    this._lastUpdate = Date.now(), this._loaded = 0, this._file = {
                        id: this.id,
                        name: e.name,
                        currentSize: 0,
                        totalPreCompressionSize: 0,
                        compressionProgress: 0,
                        progress: 0,
                        rate: 0,
                        hasImage: !1,
                        hasVideo: !1,
                        attachmentsCount: 0,
                        draftContent: null == t ? void 0 : t.content,
                        channelId: null == t ? void 0 : t.channel_id,
                        items: l
                    }
                }
                constructor(e, t = "POST", l) {
                    var n;
                    super(), this._token = "", this._lastUpdate = 0, this._loaded = 0, this._aborted = !1, this._errored = !1, this._raiseEndpointErrors = !1, this.alreadyStarted = !1, this._handleStart = e => {
                        this._cancel = e, !this.alreadyStarted && this.emit("start", this._file), this.alreadyStarted = !0
                    }, this._handleProgress = (e, t, l) => {
                        let n = Date.now(),
                            i = (0, r.calculateProgress)(e, t),
                            o = Math.floor((e - this._loaded) / ((n - this._lastUpdate) / 1e3));
                        if (null != l) {
                            var a;
                            null === (a = this._file.items) || void 0 === a || a.forEach(e => {
                                e.item.progress = l[e.id]
                            })
                        }
                        this._lastUpdate = n, this._loaded = e, this._file = {
                            ...this._file,
                            currentSize: t,
                            progress: i,
                            rate: o
                        }, this.emit("progress", this._file)
                    }, this._handleException = e => {
                        this._handleError({
                            reason: {
                                type: s.FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN,
                                msg: e.toString()
                            }
                        })
                    }, this._handleAborted = () => {
                        this.clearProcessingMessageInterval()
                    }, this._handleError = e => {
                        let {
                            code: t,
                            reason: l,
                            body: n
                        } = e;
                        this.clearProcessingMessageInterval(), !this._aborted && (this._errored = !0, u.log("_handleError: ".concat(t, " (").concat(JSON.stringify(l), ") for ").concat(this.id)), this.emit("error", this._file, t, n, l), this.removeAllListeners())
                    }, this._handleComplete = e => {
                        this.clearProcessingMessageInterval(), u.log("_handleComplete for ".concat(this.id)), this.emit("complete", this._file, e), this.removeAllListeners()
                    }, this.id = o.uniqueId("Uploader"), this._url = e, this._method = t, this._raiseEndpointErrors = null !== (n = null == l ? void 0 : l.raiseEndpointErrors) && void 0 !== n && n
                }
            }
        },
        118200: function(e, t, l) {
            "use strict";
            let n, i, o;
            l.r(t), l.d(t, {
                filterEmpty: function() {
                    return u
                },
                getString: function() {
                    return d
                },
                getOptionalString: function() {
                    return c
                },
                normalizeNumericString: function() {
                    return p
                },
                getInitialValuesFromInteractionOptions: function() {
                    return m
                }
            }), l("627445");
            var a = l("798609"),
                r = l("841362"),
                s = l("655518");

            function u(e) {
                return null == e ? [] : e.filter((t, l) => "text" !== t.type || (l > 0 && l < e.length - 1 ? "" !== t.text : "" !== t.text.trim()))
            }

            function d(e, t) {
                let l = e[t],
                    n = "";
                for (let e of l) switch (e.type) {
                    case "text":
                    case "textMention":
                        n += e.text;
                        break;
                    case "userMention":
                        n += "<@".concat(e.userId, ">");
                        break;
                    case "channelMention":
                        n += "<#".concat(e.channelId, ">");
                        break;
                    case "roleMention":
                        n += "<@&".concat(e.roleId, ">");
                        break;
                    case "emoji":
                        n += e.surrogate;
                        break;
                    case "customEmoji":
                        n += "<".concat(e.animated ? "a" : "", ":").concat(e.name.replace(/:/g, "").split("~")[0], ":").concat(e.emojiId, ">")
                }
                return n
            }

            function c(e, t) {
                return null == e[t] ? null : d(e, t)
            }

            function p(e, t) {
                if (e !== o) {
                    var l;
                    o = e;
                    let {
                        group: t,
                        decimal: a
                    } = null !== (l = r.numberParts[e]) && void 0 !== l ? l : r.numberParts["en-US"];
                    n = RegExp(s.default.escape(t), "g"), i = RegExp(s.default.escape(a), "g")
                }
                return t.replace(n, "").replace(i, ".")
            }

            function m(e, t) {
                let l = {};
                for (let i of t) {
                    var n;
                    let t = null === (n = e.options) || void 0 === n ? void 0 : n.find(e => e.name === i.name);
                    if (i.type !== a.ApplicationCommandOptionType.ATTACHMENT)(null == t || !t.autocomplete) && (l[i.name] = i)
                }
                return l
            }
            l("317041")
        },
        916565: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return F
                },
                retryCommandMessage: function() {
                    return G
                }
            });
            var n = l("627445"),
                i = l.n(n),
                o = l("913144"),
                a = l("819689"),
                r = l("81594"),
                s = l("798609"),
                u = l("979911"),
                d = l("981112"),
                c = l("716241"),
                p = l("118851"),
                m = l("385976"),
                h = l("274800"),
                f = l("752598"),
                g = l("815297"),
                _ = l("263024"),
                E = l("915639"),
                v = l("305961"),
                y = l("585722"),
                C = l("697218"),
                A = l("254490"),
                T = l("449008"),
                I = l("980134"),
                O = l("507217"),
                M = l("246598"),
                S = l("118200"),
                N = l("240249"),
                x = l("524768"),
                U = l("389153"),
                b = l("317041"),
                P = l("49111"),
                L = l("894488"),
                R = l("782340");
            let D = (e, t) => {
                    var l;
                    return null == e ? void 0 : null === (l = e.find(e => e.displayName === t)) || void 0 === l ? void 0 : l.value
                },
                k = function(e, t, l) {
                    var n, i;
                    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e,
                        a = e.name === (null === (n = l.autocomplete) || void 0 === n ? void 0 : n.name);
                    if (a) return l.autocomplete.query;
                    if ("" === t) return null;
                    let r = M.default.getAutocompleteLastChoices(l.channel.id, e.name);
                    return null != r ? null !== (i = D(r, t)) && void 0 !== i ? i : o(t) : o(t)
                },
                w = e => {
                    let t = e.toLowerCase() === b.TRUE_OPTION_NAME.toLowerCase(),
                        l = e.toLowerCase() === b.FALSE_OPTION_NAME.toLowerCase();
                    return t || l ? t : null
                };
            async function F(e) {
                var t, l, n, a, u, d, m, h, f, g, v, C, A, T, I;
                let {
                    command: M,
                    optionValues: N,
                    context: b,
                    commandTargetId: L,
                    maxSizeCallback: R,
                    commandOrigin: F = x.CommandOrigin.CHAT
                } = e;
                null == b.autocomplete && o.default.dispatch({
                    type: "APPLICATION_COMMAND_USED",
                    context: b,
                    command: M
                }), await _.default.unarchiveThreadIfNecessary(b.channel.id);
                let G = [],
                    B = [],
                    H = (0, U.getCommandAttachmentDraftType)(F);
                if (null != M.options)
                    for (let e of M.options) {
                        if (e.type === s.ApplicationCommandOptionType.SUB_COMMAND || e.type === s.ApplicationCommandOptionType.SUB_COMMAND_GROUP || !(e.name in N)) continue;
                        let t = (null === (n = b.autocomplete) || void 0 === n ? void 0 : n.name) === e.name || void 0,
                            l = null;
                        if (e.type === s.ApplicationCommandOptionType.STRING) {
                            let n = null !== (u = null === (a = S.getOptionalString(N, e.name)) || void 0 === a ? void 0 : a.trim()) && void 0 !== u ? u : "";
                            l = null != e.choices ? D(e.choices, n) : e.autocomplete ? k(e, n, b) : n, i(null != b.autocomplete || null != l, 'Option "'.concat(e.name, '" expects a value')), null != l && G.push({
                                type: e.type,
                                name: e.name,
                                value: l,
                                focused: t
                            });
                            continue
                        }
                        if (e.type === s.ApplicationCommandOptionType.ATTACHMENT) {
                            if (null != b.autocomplete) continue;
                            let n = y.default.getUpload(b.channel.id, e.name, H);
                            if (null == n) continue;
                            let i = y.default.getUploads(b.channel.id, H).findIndex(e => n.id === e.id);
                            B.push(n), l = i, G.push({
                                type: e.type,
                                name: e.name,
                                value: l,
                                focused: t
                            });
                            continue
                        }
                        let o = S.filterEmpty(N[e.name]);
                        if (i(null != b.autocomplete || 1 === o.length, 'Option "'.concat(e.name, '" expects a single option type')), null == o[0] && !t) continue;
                        let r = null !== (d = o[0]) && void 0 !== d ? d : {
                            type: "text",
                            text: ""
                        };
                        switch (e.type) {
                            case s.ApplicationCommandOptionType.CHANNEL:
                                if ("channelMention" === r.type) l = r.channelId;
                                else if ("text" === r.type) {
                                    if ((0, U.isSnowflake)(r.text)) l = r.text.trim();
                                    else {
                                        let e = (0, p.resolveApplicationCommandOption)(r.text, null === (m = b.guild) || void 0 === m ? void 0 : m.id, b.channel.id);
                                        i((null == e ? void 0 : e.type) === "channelMention", "Failed to resolve ".concat(r.text)), l = e.channelId
                                    }
                                }
                                break;
                            case s.ApplicationCommandOptionType.ROLE:
                                if ("roleMention" === r.type) l = r.roleId;
                                else if ("text" === r.type) {
                                    if ((0, U.isSnowflake)(r.text)) l = r.text.trim();
                                    else {
                                        let e = (0, p.resolveApplicationCommandOption)(r.text, null === (h = b.guild) || void 0 === h ? void 0 : h.id, b.channel.id, {
                                            allowUsers: !1
                                        });
                                        i((null == e ? void 0 : e.type) === "roleMention", "Failed to resolve ".concat(r.text)), l = e.roleId
                                    }
                                } else "textMention" === r.type && "@everyone" === r.text && (l = null === (f = b.guild) || void 0 === f ? void 0 : f.id);
                                break;
                            case s.ApplicationCommandOptionType.USER:
                                if ("userMention" === r.type) l = r.userId;
                                else if ("text" === r.type) {
                                    if ((0, U.isSnowflake)(r.text)) l = r.text.trim();
                                    else {
                                        let e = (0, p.resolveApplicationCommandOption)(r.text, null === (g = b.guild) || void 0 === g ? void 0 : g.id, b.channel.id, {
                                            allowRoles: !1
                                        });
                                        i((null == e ? void 0 : e.type) === "userMention", "Failed to resolve ".concat(r.text)), l = e.userId
                                    }
                                }
                                break;
                            case s.ApplicationCommandOptionType.MENTIONABLE:
                                if ("userMention" === r.type) l = r.userId;
                                else if ("roleMention" === r.type) l = r.roleId;
                                else if ("textMention" === r.type && "@everyone" === r.text) l = null === (v = b.guild) || void 0 === v ? void 0 : v.id;
                                else if ("text" === r.type) {
                                    if ((0, U.isSnowflake)(r.text)) l = r.text.trim();
                                    else {
                                        let e = (0, p.resolveApplicationCommandOption)(r.text, null === (C = b.guild) || void 0 === C ? void 0 : C.id, b.channel.id);
                                        (null == e ? void 0 : e.type) === "userMention" ? l = e.userId: (null == e ? void 0 : e.type) === "roleMention" ? l = e.roleId : (null == e ? void 0 : e.type) === "textMention" && "@everyone" === e.text ? l = null === (A = b.guild) || void 0 === A ? void 0 : A.id : i(!1, "Failed to resolve ".concat(r.text))
                                    }
                                }
                                break;
                            case s.ApplicationCommandOptionType.BOOLEAN:
                                "text" === r.type && (l = w(r.text.trim()));
                                break;
                            case s.ApplicationCommandOptionType.INTEGER:
                                if ("text" === r.type) {
                                    let t = r.text.trim();
                                    l = null != e.choices ? Number(D(e.choices, t)) : e.autocomplete ? k(e, t, b, Number) : Number(S.normalizeNumericString(E.default.locale, t))
                                }
                                break;
                            case s.ApplicationCommandOptionType.NUMBER:
                                if ("text" === r.type) {
                                    let t = r.text.trim();
                                    l = null != e.choices ? Number(D(e.choices, t)) : e.autocomplete ? k(e, t, b, Number) : Number(S.normalizeNumericString(E.default.locale, t))
                                }
                                break;
                            default:
                                i(!1, "Unsupported option type: ".concat(e.type));
                                continue
                        }
                        i(null != b.autocomplete || null != l, 'Unexpected value for option "'.concat(e.name, '"')), null != l && G.push({
                            type: e.type,
                            name: e.name,
                            value: l,
                            focused: t
                        })
                    }
                if (null != M.subCommandPath)
                    for (let e = M.subCommandPath.length - 1; e >= 0; e -= 1) {
                        let {
                            name: t,
                            type: l
                        } = M.subCommandPath[e];
                        G = [{
                            type: l,
                            name: t,
                            options: G
                        }]
                    }
                if (null != M.execute) return c.default.trackWithMetadata(P.AnalyticEvents.APPLICATION_COMMAND_USED, {
                    command_id: M.id,
                    application_id: M.applicationId,
                    command_type: M.type
                }), M.execute(G, b);
                if (M.inputType === x.ApplicationCommandInputType.BUILT_IN || M.inputType === x.ApplicationCommandInputType.BUILT_IN_TEXT || M.inputType === x.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return;
                let Y = {
                    version: M.version,
                    id: null !== (T = null === (t = M.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== T ? T : M.id,
                    guild_id: M.guildId,
                    name: null !== (I = null === (l = M.rootCommand) || void 0 === l ? void 0 : l.name) && void 0 !== I ? I : M.name,
                    type: M.type,
                    options: G,
                    application_command: M.rootCommand
                };
                null != L && (Y.target_id = L), null != b.autocomplete ? (0, O.performAutocomplete)(M, b, Y) : (r.default.clearAll(b.channel.id, H), j({
                    applicationId: M.applicationId,
                    data: Y,
                    context: b,
                    attachments: B,
                    maxSizeCallback: R,
                    onMessageSuccess: () => {
                        z(N)
                    },
                    commandDisplayName: M.displayName
                }))
            }
            let z = e => {
                    let t = Object.values(e).flatMap(e => e.map(e => "emoji" === e.type ? {
                        name: e.name.replaceAll(":", "")
                    } : "customEmoji" === e.type ? m.default.getCustomEmojiById(e.emojiId) : null).filter(T.isNotNullish));
                    t.length > 0 && o.default.dispatch({
                        type: "EMOJI_TRACK_USAGE",
                        emojiUsed: t
                    })
                },
                G = (e, t, l) => {
                    if (e.isCommandType()) {
                        let n = t.guild_id;
                        null != e.interactionData && j({
                            applicationId: l,
                            data: e.interactionData,
                            context: {
                                channel: t,
                                guild: null != n ? v.default.getGuild(n) : null
                            }
                        })
                    }
                },
                j = e => {
                    let {
                        applicationId: t,
                        data: l,
                        context: n,
                        attachments: i,
                        maxSizeCallback: r,
                        onMessageSuccess: u,
                        commandDisplayName: d
                    } = e, {
                        channel: c,
                        guild: p
                    } = n, m = c.id, f = null == p ? void 0 : p.id, [_, E] = function(e, t, l) {
                        let n = N.getCachedApplicationSection(e.channel, l, t);
                        if (null != n) {
                            var i, a, r;
                            let e = null !== (a = null === (i = n.application) || void 0 === i ? void 0 : i.bot) && void 0 !== a ? a : {
                                id: n.id,
                                username: n.name,
                                discriminator: "0000",
                                avatar: null,
                                bot: !0
                            };
                            return o.default.dispatch({
                                type: "STORE_APPLICATION_INTERACTION_FAKE_USER",
                                user: e
                            }), [e, null !== (r = n.application) && void 0 !== r ? r : null]
                        }
                        return [null, null]
                    }(n, t, l.type), v = l.type === s.ApplicationCommandType.CHAT ? P.MessageTypes.CHAT_INPUT_COMMAND : P.MessageTypes.CONTEXT_MENU_COMMAND, y = (0, g.default)({
                        channelId: m,
                        content: "",
                        tts: !1,
                        type: v,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: null != _ ? _ : void 0
                    });
                    y.application = null != E ? E : void 0, y.interaction = {
                        id: l.id,
                        name: l.name,
                        name_localized: d,
                        type: s.InteractionTypes.APPLICATION_COMMAND,
                        user: (0, g.userRecordToServer)(C.default.getCurrentUser())
                    }, y.interaction_data = l;
                    let A = {
                            applicationId: t,
                            channelId: m,
                            guildId: f,
                            data: l,
                            nonce: y.id,
                            attachments: i,
                            maxSizeCallback: r
                        },
                        T = (e, t) => {
                            null == t && null != e && a.default.sendClydeError(m, e), o.default.dispatch({
                                type: "MESSAGE_SEND_FAILED",
                                messageId: y.id,
                                channelId: m,
                                reason: t
                            })
                        };
                    a.default.receiveMessage(m, y, !0, {
                        applicationId: t
                    }), h.addQueued(A.nonce, {
                        messageId: y.id,
                        onCreate: e => {
                            null != y.interaction && (y.interaction.id = e)
                        },
                        onFailure: (e, t) => T(e, t),
                        data: {
                            interactionType: s.InteractionTypes.APPLICATION_COMMAND,
                            channelId: m
                        }
                    }), null != i ? Y(i, A.nonce, f, r).then(e => {
                        e && B(A, u)
                    }) : B(A, u)
                };

            function B(e, t) {
                u.default.enqueue({
                    type: u.MessageDataType.COMMAND,
                    message: e
                }, l => {
                    var n;
                    (0, f.handleInteractionResponse)(e.nonce, e.channelId, null !== (n = e.guildId) && void 0 !== n ? n : null, l), l.ok && null != t && t()
                })
            }
            async function H(e, t) {
                let l = 0,
                    n = 0;
                for (let o of e) {
                    var i;
                    let e = t ? null !== (i = o.currentSize) && void 0 !== i ? i : 0 : await o.getSize();
                    e > n && (n = e), l += e
                }
                return {
                    totalSize: l,
                    largestUploadedFileSize: n
                }
            }
            async function Y(e, t, l, n) {
                let i = (0, A.maxFileSize)(l),
                    o = e => {
                        null == n || n(i, e), h.setFailed(t, P.AbortCodes.ENTITY_TOO_LARGE, R.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                            maxSize: (0, A.sizeString)(i)
                        }))
                    },
                    {
                        totalSize: a,
                        largestUploadedFileSize: r
                    } = await H(e, !1);
                if (r > Math.max(i, L.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE) || a > I.MAX_TOTAL_ATTACHMENT_SIZE) return o(r), !1;
                try {
                    await (0, d.stageAttachmentFiles)(e)
                } catch {
                    h.setFailed(t, void 0, R.default.Messages.UPLOADING_FILES_FAILED.format({
                        count: e.length
                    }))
                }({
                    totalSize: a,
                    largestUploadedFileSize: r
                } = await H(e, !0));
                let s = e.some(e => e.error === P.AbortCodes.ENTITY_TOO_LARGE);
                return !s && !(a > I.MAX_TOTAL_ATTACHMENT_SIZE) || (o(r), !1)
            }
        },
        118851: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                resolvePlaintextInlineVoid: function() {
                    return g
                },
                resolveApplicationCommandOption: function() {
                    return _
                }
            });
            var n = l("679653"),
                i = l("980215"),
                o = l("385976"),
                a = l("867805"),
                r = l("401690"),
                s = l("42203"),
                u = l("923959"),
                d = l("26989"),
                c = l("305961"),
                p = l("697218"),
                m = l("25292"),
                h = l("149022"),
                f = l("680894");

            function g(e, t, l, p) {
                let {
                    allowUsers: h = !0,
                    allowRoles: g = !0
                } = null != p ? p : {};
                switch (e[0]) {
                    case "@":
                        return function(e, t, l, n, o) {
                            let [a, r] = e.slice(1).split("#", 2), u = null != t ? c.default.getGuild(t) : null, p = (0, i.getClydeExperimentEnabled)(u);
                            if (o && null == r && null != u) {
                                for (let e of Object.values(u.roles))
                                    if (a === e.name) return {
                                        type: "roleMention",
                                        roleId: e.id,
                                        children: [{
                                            text: ""
                                        }]
                                    }
                            }
                            if (n) {
                                let e = null != l ? s.default.getChannel(l) : null;
                                if (null != e) {
                                    if (e.isPrivate()) {
                                        for (let t of e.recipients)
                                            if (E(a, r, t)) return {
                                                type: "userMention",
                                                userId: t,
                                                children: [{
                                                    text: ""
                                                }]
                                            }
                                    } else {
                                        let e = d.default.getMembers(t);
                                        for (let {
                                                userId: t
                                            }
                                            of e)
                                            if (E(a, r, t)) return {
                                                type: "userMention",
                                                userId: t,
                                                children: [{
                                                    text: ""
                                                }]
                                            };
                                        if (p && E(a, r, f.CLYDE_AI_USER_ID)) return {
                                            type: "userMention",
                                            userId: f.CLYDE_AI_USER_ID,
                                            children: [{
                                                text: ""
                                            }]
                                        }
                                    }
                                }
                            }
                            return null
                        }(e, t, l, h, g);
                    case ":":
                        return function(e, t) {
                            let l = a.default.EMOJI_NAME_RE.exec(e);
                            if (null == l) return null;
                            let n = l[1],
                                i = o.default.getDisambiguatedEmojiContext(t).getCustomEmoji();
                            if (null != i && n in i) {
                                let e = i[n];
                                return {
                                    type: "customEmoji",
                                    emoji: {
                                        emojiId: e.id,
                                        name: "require_colons" in e && e.require_colons ? ":".concat(e.name, ":") : e.name,
                                        animated: !0 === e.animated,
                                        jumboable: !1
                                    },
                                    children: [{
                                        text: ""
                                    }]
                                }
                            }
                            return null
                        }(e, t);
                    case "#":
                        return function(e, t) {
                            let l;
                            if (null == t) return null;
                            l = e.length > 3 && '"' === e[1] && '"' === e[e.length - 1] ? (0, n.unescapeChannelName)(e.slice(2, e.length - 1)) : e.slice(1);
                            let i = u.default.getTextChannelNameDisambiguations(t);
                            for (let e of Object.keys(i))
                                if (i[e].name === l) return {
                                    type: "channelMention",
                                    channelId: e,
                                    children: [{
                                        text: ""
                                    }]
                                };
                            for (let e of m.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS) {
                                if (e === u.GUILD_SELECTABLE_CHANNELS_KEY) continue;
                                let n = u.default.getChannels(t)[e];
                                for (let {
                                        channel: e
                                    }
                                    of n)
                                    if (e.name === l) return {
                                        type: "channelMention",
                                        channelId: e.id,
                                        children: [{
                                            text: ""
                                        }]
                                    }
                            }
                            let o = r.default.getActiveJoinedThreadsForGuild(t);
                            for (let e of Object.keys(o))
                                for (let t of Object.keys(o[e])) {
                                    let {
                                        channel: n
                                    } = o[e][t];
                                    if (n.name === l) return {
                                        type: "channelMention",
                                        channelId: n.id,
                                        children: [{
                                            text: ""
                                        }]
                                    }
                                }
                            return null
                        }(e, t)
                }
                return null
            }

            function _(e, t, l, n) {
                let i = g(e, t, l, n);
                return null == i ? null : (0, h.voidToOptionValue)(i)
            }

            function E(e, t, l) {
                let n = p.default.getUser(l);
                return null != n && (l === f.CLYDE_AI_USER_ID && "clyde" === e.toLowerCase() || n.username === e && n.discriminator === (null != t ? t : "0"))
            }
        }
    }
]);
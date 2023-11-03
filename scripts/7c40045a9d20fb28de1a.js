(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["12446"], {
        841362: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                numberParts: function() {
                    return l
                }
            });
            let l = {
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
        981112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                },
                stageAttachmentFiles: function() {
                    return h
                }
            });
            var l = n("811022"),
                i = n("994440"),
                o = n("282928"),
                a = n("142852"),
                r = n("402752"),
                s = n("572868"),
                d = n("49111"),
                c = n("894488"),
                u = n("782340");
            let p = new l.default("CloudUploaderBase.tsx");
            class m extends s.default {
                _fileSize() {
                    return this.files.reduce((e, t) => {
                        var n;
                        return e += null !== (n = t.currentSize) && void 0 !== n ? n : 0
                    }, 0)
                }
                async compressAndCheckFileSize() {
                    var e, t;
                    let n = (0, a.getUploadTarget)(null === (t = this.files[0]) || void 0 === t ? void 0 : null === (e = t.item) || void 0 === e ? void 0 : e.target);
                    return this.files.length > n.getMaxAttachmentsCount() ? (p.log("Too many attachments for ".concat(this.id)), this._handleError({
                        code: d.AbortCodes.TOO_MANY_ATTACHMENTS
                    }), !1) : !(this._fileSize() > n.getMaxTotalAttachmentSize()) || (this._handleError({
                        code: d.AbortCodes.ENTITY_TOO_LARGE,
                        reason: {
                            type: c.FileUploadErrorTypes.POSTCOMPRESSION_SUM_TOO_LARGE
                        }
                    }), !1)
                }
                _filesTooLarge() {
                    return this.files.some(e => e.error === d.AbortCodes.ENTITY_TOO_LARGE)
                }
                setUploadingTextForUI() {
                    let e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : u.default.Messages.UPLOADING_FILES.format({
                            count: this.files.length
                        }),
                        t = this.files.some(e => e.isImage),
                        n = this.files.some(e => e.isVideo),
                        l = this._fileSize();
                    p.log("setUploadingTextForUI - total content: ".concat(l, " bytes and ").concat(this.files.length, " attachments for ").concat(this.id)), this._file = {
                        ...this._file,
                        totalPostCompressionSize: l,
                        currentSize: l,
                        name: e,
                        hasVideo: n,
                        hasImage: t,
                        attachmentsCount: this.files.length,
                        items: this.files
                    }
                }
                _recomputeProgress() {
                    let {
                        loaded: e,
                        total: t
                    } = this._recomputeProgressTotal(), n = this._recomputeProgressByFile();
                    this._handleProgress(e, t, n)
                }
                _recomputeProgressTotal() {
                    let e = this._fileSize(),
                        t = this.files.reduce((e, t) => {
                            var n;
                            return e += null !== (n = t.loaded) && void 0 !== n ? n : 0
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
                    let n = this.files.indexOf(t);
                    this.files = [...this.files.slice(0, n), ...this.files.slice(n + 1)], this._file = {
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
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    l = e.map(e => new Promise((l, i) => {
                        switch (e.status) {
                            case o.CloudUploadStatus.NOT_STARTED:
                                e.upload();
                                break;
                            case o.CloudUploadStatus.COMPLETED:
                                l("complete");
                                break;
                            case o.CloudUploadStatus.ERROR:
                                t && e.error !== d.AbortCodes.ENTITY_TOO_LARGE ? e.upload() : i(Error("File failed to upload"));
                                break;
                            case o.CloudUploadStatus.CANCELED:
                                i(Error("Upload is canceled"))
                        }
                        e.on("complete", () => {
                            l("complete")
                        }), e.on("error", () => {
                            i(Error("File ".concat(e.id, " failed to upload")))
                        }), e.on("progress", (e, t) => {
                            null == n || n(e, t)
                        })
                    }));
                await Promise.all(l)
            }
        },
        572868: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("44170"),
                i = n("917351"),
                o = n.n(i),
                a = n("605250"),
                r = n("402752"),
                s = n("894488");
            let d = new a.default("UploaderBase.tsx");
            class c extends l.EventEmitter {
                _addAttachmentsToPayload(e, t, n) {
                    let l = {
                            ...e
                        },
                        i = [...o.get(l, t, []), ...n];
                    return o.set(l, t, i)
                }
                clearProcessingMessageInterval() {
                    null != this.processingMessageChangeInterval && (clearInterval(this.processingMessageChangeInterval), this.processingMessageChangeInterval = void 0)
                }
                cancel() {
                    d.log("cancel() for ".concat(this.id)), this._aborted = !0, null != this._cancel && this._cancel(), this._handleComplete()
                }
                cancelItem(e) {
                    throw Error("cancelItem() is not implemented on UploaderBase; must implement cancelItem() on subclass")
                }
                upload(e, t, n) {
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
                        items: n
                    }
                }
                constructor(e, t = "POST", n) {
                    var l;
                    super(), this._token = "", this._lastUpdate = 0, this._loaded = 0, this._aborted = !1, this._errored = !1, this._raiseEndpointErrors = !1, this.alreadyStarted = !1, this._handleStart = e => {
                        this._cancel = e, !this.alreadyStarted && this.emit("start", this._file), this.alreadyStarted = !0
                    }, this._handleProgress = (e, t, n) => {
                        let l = Date.now(),
                            i = (0, r.calculateProgress)(e, t),
                            o = Math.floor((e - this._loaded) / ((l - this._lastUpdate) / 1e3));
                        if (null != n) {
                            var a;
                            null === (a = this._file.items) || void 0 === a || a.forEach(e => {
                                e.item.progress = n[e.id]
                            })
                        }
                        this._lastUpdate = l, this._loaded = e, this._file = {
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
                            reason: n,
                            body: l
                        } = e;
                        this.clearProcessingMessageInterval(), !this._aborted && (this._errored = !0, d.log("_handleError: ".concat(t, " (").concat(JSON.stringify(n), ") for ").concat(this.id)), this.emit("error", this._file, t, l, n), this.removeAllListeners())
                    }, this._handleComplete = e => {
                        this.clearProcessingMessageInterval(), d.log("_handleComplete for ".concat(this.id)), this.emit("complete", this._file, e), this.removeAllListeners()
                    }, this.id = o.uniqueId("Uploader"), this._url = e, this._method = t, this._raiseEndpointErrors = null !== (l = null == n ? void 0 : n.raiseEndpointErrors) && void 0 !== l && l
                }
            }
        },
        118200: function(e, t, n) {
            "use strict";
            let l, i, o;
            n.r(t), n.d(t, {
                filterEmpty: function() {
                    return d
                },
                getString: function() {
                    return c
                },
                getOptionalString: function() {
                    return u
                },
                normalizeNumericString: function() {
                    return p
                },
                getInitialValuesFromInteractionOptions: function() {
                    return m
                }
            }), n("627445");
            var a = n("798609"),
                r = n("841362"),
                s = n("655518");

            function d(e) {
                return null == e ? [] : e.filter((t, n) => "text" !== t.type || (n > 0 && n < e.length - 1 ? "" !== t.text : "" !== t.text.trim()))
            }

            function c(e, t) {
                let n = e[t],
                    l = "";
                for (let e of n) switch (e.type) {
                    case "text":
                    case "textMention":
                        l += e.text;
                        break;
                    case "userMention":
                        l += "<@".concat(e.userId, ">");
                        break;
                    case "channelMention":
                        l += "<#".concat(e.channelId, ">");
                        break;
                    case "roleMention":
                        l += "<@&".concat(e.roleId, ">");
                        break;
                    case "emoji":
                        l += e.surrogate;
                        break;
                    case "customEmoji":
                        l += "<".concat(e.animated ? "a" : "", ":").concat(e.name.replace(/:/g, "").split("~")[0], ":").concat(e.emojiId, ">")
                }
                return l
            }

            function u(e, t) {
                return null == e[t] ? null : c(e, t)
            }

            function p(e, t) {
                if (e !== o) {
                    var n;
                    o = e;
                    let {
                        group: t,
                        decimal: a
                    } = null !== (n = r.numberParts[e]) && void 0 !== n ? n : r.numberParts["en-US"];
                    l = RegExp(s.default.escape(t), "g"), i = RegExp(s.default.escape(a), "g")
                }
                return t.replace(l, "").replace(i, ".")
            }

            function m(e, t) {
                let n = {};
                for (let i of t) {
                    var l;
                    let t = null === (l = e.options) || void 0 === l ? void 0 : l.find(e => e.name === i.name);
                    if (i.type !== a.ApplicationCommandOptionType.ATTACHMENT)(null == t || !t.autocomplete) && (n[i.name] = i)
                }
                return n
            }
            n("317041")
        },
        916565: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                },
                retryCommandMessage: function() {
                    return G
                }
            });
            var l = n("627445"),
                i = n.n(l),
                o = n("913144"),
                a = n("819689"),
                r = n("81594"),
                s = n("798609"),
                d = n("979911"),
                c = n("981112"),
                u = n("716241"),
                p = n("118851"),
                m = n("385976"),
                h = n("274800"),
                f = n("752598"),
                g = n("815297"),
                _ = n("263024"),
                A = n("915639"),
                C = n("305961"),
                E = n("585722"),
                y = n("697218"),
                T = n("254490"),
                v = n("449008"),
                I = n("980134"),
                O = n("507217"),
                M = n("246598"),
                N = n("118200"),
                S = n("240249"),
                x = n("524768"),
                U = n("389153"),
                L = n("317041"),
                P = n("49111"),
                b = n("894488"),
                R = n("782340");
            let D = (e, t) => {
                    var n;
                    return null == e ? void 0 : null === (n = e.find(e => e.displayName === t)) || void 0 === n ? void 0 : n.value
                },
                k = function(e, t, n) {
                    var l, i;
                    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e,
                        a = e.name === (null === (l = n.autocomplete) || void 0 === l ? void 0 : l.name);
                    if (a) return n.autocomplete.query;
                    if ("" === t) return null;
                    let r = M.default.getAutocompleteLastChoices(n.channel.id, e.name);
                    return null != r ? null !== (i = D(r, t)) && void 0 !== i ? i : o(t) : o(t)
                },
                w = e => {
                    let t = e.toLowerCase() === L.TRUE_OPTION_NAME.toLowerCase(),
                        n = e.toLowerCase() === L.FALSE_OPTION_NAME.toLowerCase();
                    return t || n ? t : null
                };
            async function F(e) {
                var t, n, l, a, d, c, m, h, f, g, C, y, T, v, I;
                let {
                    command: M,
                    optionValues: S,
                    context: L,
                    commandTargetId: b,
                    maxSizeCallback: R,
                    commandOrigin: F = x.CommandOrigin.CHAT
                } = e;
                null == L.autocomplete && o.default.dispatch({
                    type: "APPLICATION_COMMAND_USED",
                    context: L,
                    command: M
                }), await _.default.unarchiveThreadIfNecessary(L.channel.id);
                let G = [],
                    H = [],
                    B = (0, U.getCommandAttachmentDraftType)(F);
                if (null != M.options)
                    for (let e of M.options) {
                        if (e.type === s.ApplicationCommandOptionType.SUB_COMMAND || e.type === s.ApplicationCommandOptionType.SUB_COMMAND_GROUP || !(e.name in S)) continue;
                        let t = (null === (l = L.autocomplete) || void 0 === l ? void 0 : l.name) === e.name || void 0,
                            n = null;
                        if (e.type === s.ApplicationCommandOptionType.STRING) {
                            let l = null !== (d = null === (a = N.getOptionalString(S, e.name)) || void 0 === a ? void 0 : a.trim()) && void 0 !== d ? d : "";
                            n = null != e.choices ? D(e.choices, l) : e.autocomplete ? k(e, l, L) : l, i(null != L.autocomplete || null != n, 'Option "'.concat(e.name, '" expects a value')), null != n && G.push({
                                type: e.type,
                                name: e.name,
                                value: n,
                                focused: t
                            });
                            continue
                        }
                        if (e.type === s.ApplicationCommandOptionType.ATTACHMENT) {
                            if (null != L.autocomplete) continue;
                            let l = E.default.getUpload(L.channel.id, e.name, B);
                            if (null == l) continue;
                            let i = E.default.getUploads(L.channel.id, B).findIndex(e => l.id === e.id);
                            H.push(l), n = i, G.push({
                                type: e.type,
                                name: e.name,
                                value: n,
                                focused: t
                            });
                            continue
                        }
                        let o = N.filterEmpty(S[e.name]);
                        if (i(null != L.autocomplete || 1 === o.length, 'Option "'.concat(e.name, '" expects a single option type')), null == o[0] && !t) continue;
                        let r = null !== (c = o[0]) && void 0 !== c ? c : {
                            type: "text",
                            text: ""
                        };
                        switch (e.type) {
                            case s.ApplicationCommandOptionType.CHANNEL:
                                if ("channelMention" === r.type) n = r.channelId;
                                else if ("text" === r.type) {
                                    if ((0, U.isSnowflake)(r.text)) n = r.text.trim();
                                    else {
                                        let e = (0, p.resolveApplicationCommandOption)(r.text, null === (m = L.guild) || void 0 === m ? void 0 : m.id, L.channel.id);
                                        i((null == e ? void 0 : e.type) === "channelMention", "Failed to resolve ".concat(r.text)), n = e.channelId
                                    }
                                }
                                break;
                            case s.ApplicationCommandOptionType.ROLE:
                                if ("roleMention" === r.type) n = r.roleId;
                                else if ("text" === r.type) {
                                    if ((0, U.isSnowflake)(r.text)) n = r.text.trim();
                                    else {
                                        let e = (0, p.resolveApplicationCommandOption)(r.text, null === (h = L.guild) || void 0 === h ? void 0 : h.id, L.channel.id, {
                                            allowUsers: !1
                                        });
                                        i((null == e ? void 0 : e.type) === "roleMention", "Failed to resolve ".concat(r.text)), n = e.roleId
                                    }
                                } else "textMention" === r.type && "@everyone" === r.text && (n = null === (f = L.guild) || void 0 === f ? void 0 : f.id);
                                break;
                            case s.ApplicationCommandOptionType.USER:
                                if ("userMention" === r.type) n = r.userId;
                                else if ("text" === r.type) {
                                    if ((0, U.isSnowflake)(r.text)) n = r.text.trim();
                                    else {
                                        let e = (0, p.resolveApplicationCommandOption)(r.text, null === (g = L.guild) || void 0 === g ? void 0 : g.id, L.channel.id, {
                                            allowRoles: !1
                                        });
                                        i((null == e ? void 0 : e.type) === "userMention", "Failed to resolve ".concat(r.text)), n = e.userId
                                    }
                                }
                                break;
                            case s.ApplicationCommandOptionType.MENTIONABLE:
                                if ("userMention" === r.type) n = r.userId;
                                else if ("roleMention" === r.type) n = r.roleId;
                                else if ("textMention" === r.type && "@everyone" === r.text) n = null === (C = L.guild) || void 0 === C ? void 0 : C.id;
                                else if ("text" === r.type) {
                                    if ((0, U.isSnowflake)(r.text)) n = r.text.trim();
                                    else {
                                        let e = (0, p.resolveApplicationCommandOption)(r.text, null === (y = L.guild) || void 0 === y ? void 0 : y.id, L.channel.id);
                                        (null == e ? void 0 : e.type) === "userMention" ? n = e.userId: (null == e ? void 0 : e.type) === "roleMention" ? n = e.roleId : (null == e ? void 0 : e.type) === "textMention" && "@everyone" === e.text ? n = null === (T = L.guild) || void 0 === T ? void 0 : T.id : i(!1, "Failed to resolve ".concat(r.text))
                                    }
                                }
                                break;
                            case s.ApplicationCommandOptionType.BOOLEAN:
                                "text" === r.type && (n = w(r.text.trim()));
                                break;
                            case s.ApplicationCommandOptionType.INTEGER:
                                if ("text" === r.type) {
                                    let t = r.text.trim();
                                    n = null != e.choices ? Number(D(e.choices, t)) : e.autocomplete ? k(e, t, L, Number) : Number(N.normalizeNumericString(A.default.locale, t))
                                }
                                break;
                            case s.ApplicationCommandOptionType.NUMBER:
                                if ("text" === r.type) {
                                    let t = r.text.trim();
                                    n = null != e.choices ? Number(D(e.choices, t)) : e.autocomplete ? k(e, t, L, Number) : Number(N.normalizeNumericString(A.default.locale, t))
                                }
                                break;
                            default:
                                i(!1, "Unsupported option type: ".concat(e.type));
                                continue
                        }
                        i(null != L.autocomplete || null != n, 'Unexpected value for option "'.concat(e.name, '"')), null != n && G.push({
                            type: e.type,
                            name: e.name,
                            value: n,
                            focused: t
                        })
                    }
                if (null != M.subCommandPath)
                    for (let e = M.subCommandPath.length - 1; e >= 0; e -= 1) {
                        let {
                            name: t,
                            type: n
                        } = M.subCommandPath[e];
                        G = [{
                            type: n,
                            name: t,
                            options: G
                        }]
                    }
                if (null != M.execute) return u.default.trackWithMetadata(P.AnalyticEvents.APPLICATION_COMMAND_USED, {
                    command_id: M.id,
                    application_id: M.applicationId,
                    command_type: M.type,
                    location: F === x.CommandOrigin.APPLICATION_LAUNCHER ? x.ApplicationCommandTriggerLocations.APP_LAUNCHER : x.ApplicationCommandTriggerLocations.SLASH_UI
                }), M.execute(G, L);
                if (M.inputType === x.ApplicationCommandInputType.BUILT_IN || M.inputType === x.ApplicationCommandInputType.BUILT_IN_TEXT || M.inputType === x.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return;
                let Y = {
                    version: M.version,
                    id: null !== (v = null === (t = M.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== v ? v : M.id,
                    guild_id: M.guildId,
                    name: null !== (I = null === (n = M.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== I ? I : M.name,
                    type: M.type,
                    options: G,
                    application_command: M.rootCommand
                };
                null != b && (Y.target_id = b), null != L.autocomplete ? (0, O.performAutocomplete)(M, L, Y) : (r.default.clearAll(L.channel.id, B), j({
                    applicationId: M.applicationId,
                    data: Y,
                    context: L,
                    attachments: H,
                    maxSizeCallback: R,
                    onMessageSuccess: () => {
                        z(S)
                    },
                    commandDisplayName: M.displayName,
                    analytics_location: F === x.CommandOrigin.APPLICATION_LAUNCHER ? x.ApplicationCommandTriggerLocations.APP_LAUNCHER : x.ApplicationCommandTriggerLocations.SLASH_UI
                }))
            }
            let z = e => {
                    let t = Object.values(e).flatMap(e => e.map(e => "emoji" === e.type ? {
                        name: e.name.replaceAll(":", "")
                    } : "customEmoji" === e.type ? m.default.getCustomEmojiById(e.emojiId) : null).filter(v.isNotNullish));
                    t.length > 0 && o.default.dispatch({
                        type: "EMOJI_TRACK_USAGE",
                        emojiUsed: t
                    })
                },
                G = (e, t, n) => {
                    if (e.isCommandType()) {
                        let l = t.guild_id;
                        null != e.interactionData && j({
                            applicationId: n,
                            data: e.interactionData,
                            context: {
                                channel: t,
                                guild: null != l ? C.default.getGuild(l) : null
                            }
                        })
                    }
                },
                j = e => {
                    let {
                        applicationId: t,
                        data: n,
                        context: l,
                        attachments: i,
                        maxSizeCallback: r,
                        onMessageSuccess: d,
                        commandDisplayName: c,
                        analytics_location: u
                    } = e, {
                        channel: p,
                        guild: m
                    } = l, f = p.id, _ = null == m ? void 0 : m.id, [A, C] = function(e, t, n) {
                        let l = S.getCachedApplicationSection(e.channel, n, t);
                        if (null != l) {
                            var i, a, r;
                            let e = null !== (a = null === (i = l.application) || void 0 === i ? void 0 : i.bot) && void 0 !== a ? a : {
                                id: l.id,
                                username: l.name,
                                discriminator: "0000",
                                avatar: null,
                                bot: !0
                            };
                            return o.default.dispatch({
                                type: "STORE_APPLICATION_INTERACTION_FAKE_USER",
                                user: e
                            }), [e, null !== (r = l.application) && void 0 !== r ? r : null]
                        }
                        return [null, null]
                    }(l, t, n.type), E = n.type === s.ApplicationCommandType.CHAT ? P.MessageTypes.CHAT_INPUT_COMMAND : P.MessageTypes.CONTEXT_MENU_COMMAND, T = (0, g.default)({
                        channelId: f,
                        content: "",
                        tts: !1,
                        type: E,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: null != A ? A : void 0
                    });
                    T.application = null != C ? C : void 0, T.interaction = {
                        id: n.id,
                        name: n.name,
                        name_localized: c,
                        type: s.InteractionTypes.APPLICATION_COMMAND,
                        user: (0, g.userRecordToServer)(y.default.getCurrentUser())
                    }, T.interaction_data = n;
                    let v = {
                            applicationId: t,
                            channelId: f,
                            guildId: _,
                            data: n,
                            nonce: T.id,
                            attachments: i,
                            maxSizeCallback: r,
                            analytics_location: u
                        },
                        I = (e, t) => {
                            null == t && null != e && a.default.sendClydeError(f, e), o.default.dispatch({
                                type: "MESSAGE_SEND_FAILED",
                                messageId: T.id,
                                channelId: f,
                                reason: t
                            })
                        };
                    a.default.receiveMessage(f, T, !0, {
                        applicationId: t
                    }), h.addQueued(v.nonce, {
                        messageId: T.id,
                        onCreate: e => {
                            null != T.interaction && (T.interaction.id = e)
                        },
                        onFailure: (e, t) => I(e, t),
                        data: {
                            interactionType: s.InteractionTypes.APPLICATION_COMMAND,
                            channelId: f
                        }
                    }), null != i ? Y(i, v.nonce, _, r).then(e => {
                        e && H(v, d)
                    }) : H(v, d)
                };

            function H(e, t) {
                d.default.enqueue({
                    type: d.MessageDataType.COMMAND,
                    message: e
                }, n => {
                    var l;
                    (0, f.handleInteractionResponse)(e.nonce, e.channelId, null !== (l = e.guildId) && void 0 !== l ? l : null, n), n.ok && null != t && t()
                })
            }
            async function B(e, t) {
                let n = 0,
                    l = 0;
                for (let o of e) {
                    var i;
                    let e = t ? null !== (i = o.currentSize) && void 0 !== i ? i : 0 : await o.getSize();
                    e > l && (l = e), n += e
                }
                return {
                    totalSize: n,
                    largestUploadedFileSize: l
                }
            }
            async function Y(e, t, n, l) {
                let i = (0, T.maxFileSize)(n),
                    o = e => {
                        null == l || l(i, e), h.setFailed(t, P.AbortCodes.ENTITY_TOO_LARGE, R.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                            maxSize: (0, T.sizeString)(i)
                        }))
                    },
                    {
                        totalSize: a,
                        largestUploadedFileSize: r
                    } = await B(e, !1);
                if (r > Math.max(i, b.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE) || a > I.MAX_TOTAL_ATTACHMENT_SIZE) return o(r), !1;
                try {
                    await (0, c.stageAttachmentFiles)(e)
                } catch {
                    h.setFailed(t, void 0, R.default.Messages.UPLOADING_FILES_FAILED.format({
                        count: e.length
                    }))
                }({
                    totalSize: a,
                    largestUploadedFileSize: r
                } = await B(e, !0));
                let s = e.some(e => e.error === P.AbortCodes.ENTITY_TOO_LARGE);
                return !s && !(a > I.MAX_TOTAL_ATTACHMENT_SIZE) || (o(r), !1)
            }
        },
        118851: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolvePlaintextInlineVoid: function() {
                    return g
                },
                resolveApplicationCommandOption: function() {
                    return _
                }
            });
            var l = n("679653"),
                i = n("980215"),
                o = n("385976"),
                a = n("867805"),
                r = n("401690"),
                s = n("42203"),
                d = n("923959"),
                c = n("26989"),
                u = n("305961"),
                p = n("697218"),
                m = n("25292"),
                h = n("149022"),
                f = n("680894");

            function g(e, t, n, p) {
                let {
                    allowUsers: h = !0,
                    allowRoles: g = !0
                } = null != p ? p : {};
                switch (e[0]) {
                    case "@":
                        return function(e, t, n, l, o) {
                            let [a, r] = e.slice(1).split("#", 2), d = null != t ? u.default.getGuild(t) : null, p = (0, i.getClydeExperimentEnabled)(d);
                            if (o && null == r && null != d) {
                                for (let e of Object.values(d.roles))
                                    if (a === e.name) return {
                                        type: "roleMention",
                                        roleId: e.id,
                                        children: [{
                                            text: ""
                                        }]
                                    }
                            }
                            if (l) {
                                let e = null != n ? s.default.getChannel(n) : null;
                                if (null != e) {
                                    if (e.isPrivate()) {
                                        for (let t of e.recipients)
                                            if (A(a, r, t)) return {
                                                type: "userMention",
                                                userId: t,
                                                children: [{
                                                    text: ""
                                                }]
                                            }
                                    } else {
                                        let e = c.default.getMembers(t);
                                        for (let {
                                                userId: t
                                            }
                                            of e)
                                            if (A(a, r, t)) return {
                                                type: "userMention",
                                                userId: t,
                                                children: [{
                                                    text: ""
                                                }]
                                            };
                                        if (p && A(a, r, f.CLYDE_AI_USER_ID)) return {
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
                        }(e, t, n, h, g);
                    case ":":
                        return function(e, t) {
                            let n = a.default.EMOJI_NAME_RE.exec(e);
                            if (null == n) return null;
                            let l = n[1],
                                i = o.default.getDisambiguatedEmojiContext(t).getCustomEmoji();
                            if (null != i && l in i) {
                                let e = i[l];
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
                            let n;
                            if (null == t) return null;
                            n = e.length > 3 && '"' === e[1] && '"' === e[e.length - 1] ? (0, l.unescapeChannelName)(e.slice(2, e.length - 1)) : e.slice(1);
                            let i = d.default.getTextChannelNameDisambiguations(t);
                            for (let e of Object.keys(i))
                                if (i[e].name === n) return {
                                    type: "channelMention",
                                    channelId: e,
                                    children: [{
                                        text: ""
                                    }]
                                };
                            for (let e of m.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS) {
                                if (e === d.GUILD_SELECTABLE_CHANNELS_KEY) continue;
                                let l = d.default.getChannels(t)[e];
                                for (let {
                                        channel: e
                                    }
                                    of l)
                                    if (e.name === n) return {
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
                                        channel: l
                                    } = o[e][t];
                                    if (l.name === n) return {
                                        type: "channelMention",
                                        channelId: l.id,
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

            function _(e, t, n, l) {
                let i = g(e, t, n, l);
                return null == i ? null : (0, h.voidToOptionValue)(i)
            }

            function A(e, t, n) {
                let l = p.default.getUser(n);
                return null != l && (n === f.CLYDE_AI_USER_ID && "clyde" === e.toLowerCase() || l.username === e && l.discriminator === (null != t ? t : "0"))
            }
        }
    }
]);
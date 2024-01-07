            "use strict";
            A.r(t), A.d(t, {
                default: function() {
                    return a
                }
            }), A("424973");
            var a, l = A("872717"),
                n = A("448993"),
                r = A("981112"),
                s = A("966724"),
                o = A("980134"),
                i = A("782340");
            a = class extends r.default {
                async uploadFiles(e, t) {
                    let {
                        addFilesTo: A
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    super.upload({
                        name: i.default.Messages.ATTACHMENT_PROCESSING
                    }, t, e);
                    let a = new AbortController;
                    try {
                        if (this.files = e, this._aborted) return;
                        if (this._handleStart(() => a.abort()), !await this.compressAndCheckFileSize()) return;
                        this.setUploadingTextForUI(), await (0, r.stageAttachmentFiles)(this.files, !0, this._recomputeProgress.bind(this))
                    } catch (e) {
                        this._handleException(e)
                    }
                    try {
                        return await this._createMessage(a.signal, t, A)
                    } catch (e) {
                        if (this._raiseEndpointErrors) throw e;
                        this._handleException(e)
                    }
                }
                async _createMessage(e, t, A) {
                    let a;
                    let r = [];
                    this.files.forEach((e, t) => {
                        let A = (0, o.getAttachmentPayload)(e, t);
                        e.item.platform === s.UploadPlatform.WEB && r.push({
                            ...A
                        })
                    }), a = null != A && null != t ? this._addAttachmentsToPayload(t, A, r) : {
                        ...t,
                        attachments: r
                    };
                    let i = {
                            url: this._url,
                            body: a,
                            signal: e
                        },
                        d = "POST" === this._method ? l.default.post : l.default.patch;
                    try {
                        let e = await d(i);
                        return this._handleComplete(e.body), e.body
                    } catch (e) {
                        var u;
                        if (this._raiseEndpointErrors) throw new n.APIError(e);
                        this._handleError({
                            code: null == e ? void 0 : null === (u = e.body) || void 0 === u ? void 0 : u.code,
                            body: null == e ? void 0 : e.body
                        })
                    }
                }
                constructor(e, t = "POST", A) {
                    super(e, t, A)
                }
            }
            "use strict";
            A.r(t), A.d(t, {
                default: function() {
                    return I
                }
            }), A("70102"), A("222007");
            var a = A("884691"),
                l = A("65597"),
                n = A("819855"),
                r = A("913144"),
                s = A("448993"),
                o = A("282928"),
                i = A("966724"),
                u = A("142852"),
                d = A("793825"),
                c = A("605250"),
                f = A("305961"),
                C = A("572679"),
                g = A("565559"),
                h = A("757515"),
                T = A("49111"),
                m = A("782340");
            let p = new c.default("ProductAttachmentManager");
            class U {
                addAttachment(e, t) {
                    let A = this.target.getMaxAttachmentsCount();
                    if (this.uploads.length >= A) throw n.AccessibilityAnnouncer.announce(m.default.Messages.GUILD_PRODUCT_A11Y_TOO_MANY_ATTACHMENTS.format({
                        maxAttachmentsCount: A
                    })), Error("Too many attachments");
                    e.target = u.UploadTargets.GUILD_PRODUCT_ATTACHMENT;
                    let a = new o.CloudUpload(e, this.guildId);
                    a.upload(), a.on("error", A => {
                        var l;
                        A === T.AbortCodes.ENTITY_TOO_LARGE && this.onFileSizeError();
                        let r = "number" == typeof A && A > 0 ? -A : -1,
                            s = (0, h.describeUploadProgressError)(r),
                            o = null === (l = e.file) || void 0 === l ? void 0 : l.name;
                        null != o ? n.AccessibilityAnnouncer.announce(m.default.Messages.GUILD_PRODUCT_A11Y_NAMED_UPLOAD_FAILED.format({
                            filename: o,
                            reason: s
                        })) : n.AccessibilityAnnouncer.announce(m.default.Messages.GUILD_PRODUCT_A11Y_UPLOAD_FAILED.format({
                            reason: s
                        })), t(e => ({
                            ...e,
                            [a.id]: r
                        }))
                    }), a.on("progress", (e, A) => {
                        t(t => ({
                            ...t,
                            [a.id]: e / A
                        }))
                    }), this.uploads = [...this.uploads, a]
                }
                deleteAttachment(e) {
                    let t = this.uploads.findIndex(t => t.id === e);
                    if (-1 === t) return !1;
                    this.uploads = [...this.uploads];
                    let A = this.uploads.splice(t, 1);
                    return A[0].cancel(), !0
                }
                cancelUnusedUploads() {
                    for (let e of this.uploads) e.cancel();
                    this.uploads = []
                }
                async saveProductWithAttachments(e) {
                    let t, {
                            priceTier: A,
                            createNewRole: a,
                            imageName: l,
                            ...n
                        } = e,
                        s = this.uploads.some(e => e.status === o.CloudUploadStatus.ERROR);
                    if (s) throw Error("Cannot create product with failed attachments");
                    "unlinkRole" in n && (t = n.unlinkRole);
                    let i = this.uploads.filter(e => !this.existingAttachmentIds.has(e.id)),
                        u = this.uploads.filter(e => this.existingAttachmentIds.has(e.id)).map(e => {
                            var t;
                            return {
                                filename: null === (t = e.item.file) || void 0 === t ? void 0 : t.name,
                                id: e.id
                            }
                        }),
                        d = await this.createCloudUploader().uploadFiles(i, {
                            ...n,
                            price_tier: A,
                            create_new_role: a,
                            image_name: l,
                            unlink_role: t,
                            attachments: u.length > 0 ? u : void 0
                        }, {
                            addFilesTo: "attachments"
                        });
                    return p.log("Created/updated product:", d), null != d && (this.isEdit ? await r.default.dispatch({
                        type: "GUILD_PRODUCT_UPDATE",
                        product: d
                    }) : await r.default.dispatch({
                        type: "GUILD_PRODUCT_CREATE",
                        product: d
                    })), d
                }
                constructor({
                    guildId: e,
                    editSkuId: t,
                    onFileSizeError: A
                }) {
                    var a;
                    this.target = new C.default, this.existingAttachmentIds = new Set, this.uploads = [], this.generateInitialProgresses = () => {
                        let e = {};
                        for (let t of this.uploads) e[t.id] = 1;
                        return e
                    }, this.isEdit = null != t;
                    let l = null == t ? T.Endpoints.GUILD_PRODUCTS(e) : T.Endpoints.GUILD_PRODUCT_LISTINGS(e, t),
                        n = null == t ? "POST" : "PATCH";
                    this.createCloudUploader = () => (0, d.createCloudUploader)(l, n), this.guildId = e, this.onFileSizeError = A;
                    let r = null === (a = g.default.getGuildProduct(null != t ? t : "")) || void 0 === a ? void 0 : a.attachments;
                    null != r && (this.uploads = r.map(t => {
                        var A;
                        this.existingAttachmentIds.add(t.id);
                        let a = new o.CloudUpload({
                            id: t.id,
                            platform: i.UploadPlatform.WEB,
                            file: {
                                name: t.filename,
                                lastModified: 0,
                                size: null !== (A = t.size) && void 0 !== A ? A : 0
                            }
                        }, e);
                        return a.status = o.CloudUploadStatus.COMPLETED, a
                    }))
                }
            }

            function I(e, t) {
                var A;
                let {
                    editSkuId: n,
                    onFileSizeError: r
                } = t, o = (0, l.default)([f.default], () => f.default.getGuild(e)), [i, u] = a.useState({
                    editSkuId: n,
                    onFileSizeError: r
                }), d = a.useMemo(() => new U({
                    guildId: e,
                    ...i
                }), [e, i]), [c, C] = a.useState(d.generateInitialProgresses), [, g] = a.useState(null);
                a.useLayoutEffect(() => {
                    C(d.generateInitialProgresses())
                }, [d]);
                let [h, m] = a.useState(), [p, I] = a.useState(), v = a.useCallback(e => {
                    d.deleteAttachment(e) && g({})
                }, [d]), E = a.useCallback(e => {
                    d.addAttachment(e, C), g({})
                }, [d]), x = a.useCallback(async e => {
                    try {
                        m(e), I(void 0);
                        let t = await d.saveProductWithAttachments(e);
                        return null != t && u({
                            editSkuId: t.id,
                            onFileSizeError: r
                        }), g({}), t
                    } catch (e) {
                        I(e instanceof s.APIError ? e : new s.APIError({
                            status: 400,
                            body: {
                                attachments: [e.message]
                            }
                        }))
                    } finally {
                        m(void 0)
                    }
                }, [d, r]), N = a.useCallback(() => {
                    d.cancelUnusedUploads(), g({})
                }, [d]);
                a.useEffect(() => () => {
                    d.cancelUnusedUploads()
                }, [d]);
                let {
                    uploads: q
                } = d, O = !q.every(e => d.existingAttachmentIds.has(e.id)) || q.length !== d.existingAttachmentIds.size;
                return {
                    addAttachment: E,
                    cancelUnusedUploads: N,
                    deleteAttachment: v,
                    fileUploadProgresses: c,
                    uploads: q,
                    saveProductWithAttachments: x,
                    isSaving: null != h,
                    changesSaving: h,
                    saveError: p,
                    hasUnsavedAttachmentChanges: O,
                    canAttachFiles: q.length < d.target.getMaxAttachmentsCount(),
                    canAttachArchives: null !== (A = null == o ? void 0 : o.hasFeature(T.GuildFeatures.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && void 0 !== A && A
                }
            }
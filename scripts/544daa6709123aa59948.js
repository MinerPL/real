(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["55275"], {
        890450: function(A, e, t) {
            "use strict";
            A.exports = t.p + "321a07cbc6f5919dbce9.svg"
        },
        839491: function(A, e, t) {
            "use strict";
            A.exports = t.p + "a826e445dff97cf15335.svg"
        },
        164654: function(A, e, t) {
            "use strict";
            A.exports = t.p + "1f3e315f020ed5635dc1.svg"
        },
        540346: function(A, e, t) {
            "use strict";
            A.exports = t.p + "1af9bdf041e000508e41.svg"
        },
        526094: function(A, e, t) {
            "use strict";
            A.exports = t.p + "7442b576347c1d02886f.svg"
        },
        367469: function(A, e, t) {
            "use strict";
            A.exports = t.p + "3205da2e8f78633583d0.svg"
        },
        23933: function(A, e, t) {
            "use strict";
            A.exports = t.p + "8f581f91e7e650ac87a2.svg"
        },
        283397: function(A, e, t) {
            "use strict";
            A.exports = t.p + "44d5e1639bc492dc8d62.svg"
        },
        45299: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return c
                }
            });
            var a = t("37983"),
                l = t("884691"),
                n = t("301165"),
                s = t("669491"),
                r = t("77078"),
                o = t("659500"),
                i = t("49111"),
                d = t("782340"),
                u = t("317404"),
                c = function(A) {
                    var e;
                    let {
                        message: t,
                        errorMessage: c,
                        submitting: C,
                        onReset: f,
                        onSave: T,
                        onSaveText: g,
                        onResetText: U,
                        onSaveButtonColor: I,
                        disabled: m,
                        saveButtonTooltip: h
                    } = A, E = l.useRef(null), [{
                        spring: p
                    }, q] = (0, n.useSpring)(() => ({
                        spring: 0
                    }));
                    l.useEffect(() => {
                        function A() {
                            q({
                                spring: 1,
                                config: n.config.gentle
                            }), q({
                                spring: 0,
                                config: n.config.gentle,
                                delay: 1e3
                            })
                        }
                        return o.ComponentDispatch.subscribe(i.ComponentActions.EMPHASIZE_NOTICE, A), () => {
                            o.ComponentDispatch.unsubscribe(i.ComponentActions.EMPHASIZE_NOTICE, A)
                        }
                    }, [q]);
                    let N = p.to({
                            range: [0, 1],
                            output: [(0, r.useToken)(s.default.colors.TEXT_NORMAL).hex(), (0, r.useToken)(s.default.unsafe_rawColors.WHITE_500).hex()]
                        }),
                        v = p.to({
                            range: [0, 1],
                            output: [(0, r.useToken)(s.default.colors.BACKGROUND_FLOATING).hex(), (0, r.useToken)(s.default.colors.STATUS_DANGER).hex()]
                        }),
                        O = (0, r.useToken)(s.default.colors.TEXT_DANGER).hex();
                    return (0, a.jsx)(n.animated.div, {
                        className: u.container,
                        style: {
                            backgroundColor: v
                        },
                        children: (0, a.jsx)("div", {
                            className: u.flexContainer,
                            ref: E,
                            children: (0, a.jsxs)(r.FocusRingScope, {
                                containerRef: E,
                                children: [(0, a.jsx)("div", {
                                    className: u.shrinkingContainer,
                                    children: (0, a.jsx)(n.animated.div, {
                                        className: u.message,
                                        style: {
                                            color: null != c ? O : N
                                        },
                                        children: null !== (e = null != c ? c : t) && void 0 !== e ? e : d.default.Messages.SETTINGS_NOTICE_MESSAGE
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: u.actions,
                                    children: [null != f && (0, a.jsx)(r.Button, {
                                        className: u.resetButton,
                                        size: r.Button.Sizes.SMALL,
                                        color: r.Button.Colors.PRIMARY,
                                        look: r.Button.Looks.LINK,
                                        onClick: f,
                                        children: (0, a.jsx)(n.animated.span, {
                                            style: {
                                                color: N
                                            },
                                            children: null != U ? U : d.default.Messages.RESET
                                        })
                                    }), null != T ? (0, a.jsx)(r.Tooltip, {
                                        text: h,
                                        children: A => (0, a.jsx)(r.Button, {
                                            size: r.Button.Sizes.SMALL,
                                            color: null != I ? I : r.Button.Colors.GREEN,
                                            submitting: C,
                                            disabled: m,
                                            onClick: T,
                                            ...A,
                                            children: null != g ? g : d.default.Messages.SAVE_CHANGES
                                        })
                                    }) : null]
                                })]
                            })
                        })
                    })
                }
        },
        248559: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return l
                }
            });
            var a = t("884691"),
                l = () => {
                    let [A, e] = (0, a.useState)(null);
                    return (0, a.useEffect)(() => {
                        var A;
                        (null === (A = window) || void 0 === A ? void 0 : A.EyeDropper) != null && e(new window.EyeDropper)
                    }, []), A
                }
        },
        793825: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                createCloudUploader: function() {
                    return l
                }
            });
            var a = t("681736");

            function l(A) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "POST";
                return new a.default(A, e, {
                    raiseEndpointErrors: !0
                })
            }
        },
        681736: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return i
                }
            });
            var a = t("872717"),
                l = t("448993"),
                n = t("981112"),
                s = t("966724"),
                r = t("980134"),
                o = t("782340");
            class i extends n.default {
                async uploadFiles(A, e) {
                    let {
                        addFilesTo: t
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    super.upload({
                        name: o.default.Messages.ATTACHMENT_PROCESSING
                    }, e, A);
                    let a = new AbortController;
                    try {
                        if (this.files = A, this._aborted) return;
                        if (this._handleStart(() => a.abort()), !await this.compressAndCheckFileSize()) return;
                        this.setUploadingTextForUI(), await (0, n.stageAttachmentFiles)(this.files, !0, this._recomputeProgress.bind(this))
                    } catch (A) {
                        this._handleException(A)
                    }
                    try {
                        return await this._createMessage(a.signal, e, t)
                    } catch (A) {
                        if (this._raiseEndpointErrors) throw A;
                        this._handleException(A)
                    }
                }
                async _createMessage(A, e, t) {
                    let n;
                    let o = [];
                    this.files.forEach((A, e) => {
                        let t = (0, r.getAttachmentPayload)(A, e);
                        A.item.platform === s.UploadPlatform.WEB && o.push({
                            ...t
                        })
                    }), n = null != t && null != e ? this._addAttachmentsToPayload(e, t, o) : {
                        ...e,
                        attachments: o
                    };
                    let i = {
                            url: this._url,
                            body: n,
                            signal: A
                        },
                        d = "POST" === this._method ? a.default.post : a.default.patch;
                    try {
                        let A = await d(i);
                        return this._handleComplete(A.body), A.body
                    } catch (A) {
                        var u;
                        if (this._raiseEndpointErrors) throw new l.APIError(A);
                        this._handleError({
                            code: null == A ? void 0 : null === (u = A.body) || void 0 === u ? void 0 : u.code,
                            body: null == A ? void 0 : A.body
                        })
                    }
                }
                constructor(A, e = "POST", t) {
                    super(A, e, t)
                }
            }
        },
        651057: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return s
                }
            });
            var a = t("872717"),
                l = t("913144"),
                n = t("49111"),
                s = {
                    async createApplication(A) {
                        let {
                            name: e,
                            guildId: t,
                            type: s,
                            teamId: r
                        } = A, o = await a.default.post({
                            url: n.Endpoints.APPLICATIONS,
                            body: {
                                name: e,
                                type: s,
                                guild_id: t,
                                team_id: r
                            }
                        }), i = o.body;
                        return null != t && null != s && l.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: i
                        }), i
                    },
                    async getApplicationsForGuild(A) {
                        let {
                            includeTeam: e,
                            ...t
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = await a.default.get({
                            url: n.Endpoints.GUILD_APPLICATIONS(A),
                            query: {
                                ...t,
                                include_team: e
                            }
                        }), r = s.body;
                        return l.default.dispatch({
                            type: "APPLICATIONS_FETCH_SUCCESS",
                            applications: r
                        }), r
                    },
                    async transferApplication(A) {
                        let {
                            applicationId: e,
                            teamId: t
                        } = A, s = await a.default.post({
                            url: n.Endpoints.APPLICATION_OWNER_TRANSFER(e),
                            body: {
                                team_id: t
                            }
                        }), r = s.body;
                        return l.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: r
                        }), r
                    }
                }
        },
        228100: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return o
                }
            });
            var a = t("884691"),
                l = t("446674"),
                n = t("448993"),
                s = t("651057"),
                r = t("299285");

            function o(A, e) {
                let t = (0, l.useStateFromStores)([r.default], () => r.default.getGuildApplication(A, e)),
                    [o, i] = a.useState(null == t),
                    [d, u] = a.useState(),
                    [c, C] = a.useState(!1),
                    f = a.useCallback(async () => {
                        if (null == t && null != A) {
                            C(!0), i(!0);
                            try {
                                await s.default.getApplicationsForGuild(A, {
                                    type: e,
                                    includeTeam: !0
                                })
                            } catch (A) {
                                u(new n.APIError(A))
                            } finally {
                                i(!1)
                            }
                        }
                    }, [t, e, A]);
                return a.useEffect(() => {
                    !c && f()
                }, [c, f]), {
                    application: t,
                    error: d,
                    loading: o
                }
            }
        },
        172858: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                DUCK_CONFETTI_SPRITE: function() {
                    return n
                },
                COMMON_CONFETTI_COLORS: function() {
                    return s
                },
                COMMON_CONFETTI_SPRITES: function() {
                    return r
                },
                COMMON_CONFETTI_MAX_SPRITE_SIZE: function() {
                    return o
                },
                COMMON_CONFETTI_BASE_CONFIG: function() {
                    return i
                },
                COMMON_CONFETTI_ENVIRONMENT: function() {
                    return d
                }
            });
            var a = t("516555"),
                l = t("839491");
            let n = l,
                s = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                r = [t("890450"), n, t("164654"), t("540346"), t("526094"), t("367469"), t("23933"), {
                    src: t("283397"),
                    colorize: !1
                }],
                o = 28,
                i = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 30,
                            y: -80
                        },
                        maxValue: {
                            x: -30,
                            y: -180
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: 0,
                        maxValue: 360,
                        minAddValue: -25,
                        maxAddValue: 25
                    },
                    size: {
                        type: "static-random",
                        minValue: 14,
                        maxValue: o
                    }
                },
                d = new a.Environment
        },
        931164: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return c
                }
            });
            var a = t("917351"),
                l = t.n(a),
                n = t("270926"),
                s = t("888198"),
                r = t("367376");
            let o = l.omit(s.default.RULES, ["codeBlock", "heading"]),
                i = {
                    ...n.default,
                    parse: function(A, e, t) {
                        var a;
                        let l = n.default.parse(A, e, t),
                            s = null !== (a = t.initialHeaderLevel) && void 0 !== a ? a : 3,
                            r = Math.min(6, s + l.level);
                        return {
                            ...l,
                            level: r
                        }
                    }
                },
                d = r.default.combineAndInjectMentionRule(o, [r.default.createReactRules(r.default.defaultReactRuleOptions), {
                    header: i
                }]),
                u = r.default.reactParserFor(d);
            var c = u
        },
        17692: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return u
                }
            });
            var a = t("37983"),
                l = t("884691"),
                n = t("414456"),
                s = t.n(n),
                r = t("77078"),
                o = t("931164"),
                i = t("289162"),
                d = t("632215");

            function u(A) {
                let {
                    color: e,
                    className: t,
                    variant: n,
                    text: u,
                    lineClamp: c
                } = A, C = (0, r.usePrivateHeadingLevel)(), f = l.useMemo(() => null == u ? null : (0, o.default)(u, !0, {
                    allowHeading: null == c,
                    allowList: null == c,
                    initialHeaderLevel: C
                }), [u, c, C]);
                return (0, a.jsx)(r.Text, {
                    className: s(t, {
                        [d.markup]: null == c,
                        [i.lineClamp2Plus]: null != c && c > 1,
                        [i.lineClamp1]: 1 === c
                    }),
                    color: e,
                    variant: n,
                    lineClamp: c,
                    children: f
                })
            }
        },
        435032: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return E
                }
            });
            var a = t("37983"),
                l = t("884691"),
                n = t("414456"),
                s = t.n(n),
                r = t("748820"),
                o = t("77078"),
                i = t("149022"),
                d = t("681060"),
                u = t("233069"),
                c = t("474643"),
                C = t("49111"),
                f = t("782340"),
                T = t("68233"),
                g = t("253469");
            let U = (0, r.v4)(),
                I = (0, u.createChannelRecord)({
                    id: "1",
                    type: C.ChannelTypes.DM
                });

            function m() {
                return new Promise(A => {
                    A({
                        shouldClear: !1,
                        shouldRefocus: !0
                    })
                })
            }

            function h(A) {
                var e;
                let {
                    hasError: t,
                    maxLength: l,
                    text: n
                } = A;
                return (0, a.jsxs)("div", {
                    className: s(g.maxLength, {
                        [g.errorOverflow]: t
                    }),
                    "aria-hidden": "true",
                    children: [null !== (e = null == n ? void 0 : n.length) && void 0 !== e ? e : 0, " ", null != l && "/ ".concat(l)]
                })
            }

            function E(A) {
                var e;
                let {
                    "aria-labelledby": t,
                    className: n,
                    id: r,
                    autoFocus: u,
                    maxLength: C,
                    onChange: g,
                    onSubmit: E,
                    showCharacterCount: p = !1,
                    placeholder: q,
                    required: N,
                    value: v,
                    enableThemedBackground: O = !1,
                    parentModalKey: R
                } = A, D = (0, o.useFormContext)(), [L, P] = l.useState(() => (0, i.toRichValue)(v)), x = l.useRef(!0 === u), V = null != t ? t : null == D ? void 0 : D.titleId, S = null !== (e = null == D ? void 0 : D.errorId) && void 0 !== e ? e : U, F = l.useMemo(() => ({
                    analyticsName: "simple",
                    autocomplete: {
                        alwaysUseLayer: !0,
                        small: !0
                    },
                    disableAutoFocus: !0 !== u,
                    drafts: {
                        type: c.DraftType.ChannelMessage
                    },
                    emojis: {
                        button: !0
                    },
                    permissions: {
                        requireSendMessages: !1
                    },
                    submit: {
                        useDisabledStylesOnSubmit: !0,
                        disableEnterToSubmit: !0
                    }
                }), [u]);
                return (0, a.jsxs)(d.default, {
                    "aria-describedby": S,
                    "aria-labelledby": V,
                    innerClassName: s(n, T.textArea),
                    id: r,
                    maxCharacterCount: C,
                    onChange: function(A, e, t) {
                        g(e), P(t)
                    },
                    placeholder: q,
                    required: N,
                    channel: I,
                    textValue: v,
                    richValue: L,
                    type: F,
                    onBlur: () => {
                        x.current = !1
                    },
                    onFocus: () => {
                        x.current = !0
                    },
                    focused: x.current,
                    onSubmit: null != E ? E : m,
                    disableThemedBackground: !O,
                    parentModalKey: R,
                    emojiPickerCloseOnModalOuterClick: !0,
                    children: [!0 === p && (0, a.jsx)(h, {
                        hasError: null != D.error || null != C && v.length > C,
                        text: v,
                        maxLength: C
                    }), null != C && (0, a.jsx)(o.HiddenVisually, {
                        id: U,
                        children: f.default.Messages.MAXIMUM_LENGTH.format({
                            maxLength: C
                        })
                    })]
                })
            }
        },
        949435: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                useGuildProductAttachmentManagerContext: function() {
                    return r
                },
                GuildProductAttachmentManagerContextProvider: function() {
                    return o
                }
            });
            var a = t("37983"),
                l = t("884691"),
                n = t("168804");
            let s = l.createContext(void 0);

            function r() {
                let A = l.useContext(s);
                if (null == A) throw Error("No GuildProductAttachmentManagerContextProvider found");
                return A
            }

            function o(A) {
                let {
                    children: e,
                    guildId: t,
                    ...l
                } = A, r = (0, n.default)(t, l);
                return (0, a.jsx)(s.Provider, {
                    value: r,
                    children: e
                })
            }
        },
        740259: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                PRODUCT_IMAGE_PRESETS: function() {
                    return n
                }
            });
            var a = t("410225"),
                l = t("384188");
            let n = [{
                name: "cool-frog",
                alt: "A cool frog",
                data: a.default
            }, {
                name: "cute-bunny",
                alt: "A cute bunny",
                data: l.default
            }]
        },
        410225: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return a
                }
            });
            var a = "data:image/png;base64,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"
        },
        384188: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return a
                }
            });
            var a = "data:image/png;base64,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"
        },
        168804: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return E
                }
            });
            var a = t("884691"),
                l = t("65597"),
                n = t("819855"),
                s = t("913144"),
                r = t("448993"),
                o = t("282928"),
                i = t("966724"),
                d = t("142852"),
                u = t("793825"),
                c = t("605250"),
                C = t("305961"),
                f = t("572679"),
                T = t("565559"),
                g = t("757515"),
                U = t("49111"),
                I = t("782340");
            let m = new c.default("ProductAttachmentManager");
            class h {
                addAttachment(A, e) {
                    let t = this.target.getMaxAttachmentsCount();
                    if (this.uploads.length >= t) throw n.AccessibilityAnnouncer.announce(I.default.Messages.GUILD_PRODUCT_A11Y_TOO_MANY_ATTACHMENTS.format({
                        maxAttachmentsCount: t
                    })), Error("Too many attachments");
                    A.target = d.UploadTargets.GUILD_PRODUCT_ATTACHMENT;
                    let a = new o.CloudUpload(A, this.guildId);
                    a.upload(), a.on("error", t => {
                        var l;
                        t === U.AbortCodes.ENTITY_TOO_LARGE && this.onFileSizeError();
                        let s = "number" == typeof t && t > 0 ? -t : -1,
                            r = (0, g.describeUploadProgressError)(s),
                            o = null === (l = A.file) || void 0 === l ? void 0 : l.name;
                        null != o ? n.AccessibilityAnnouncer.announce(I.default.Messages.GUILD_PRODUCT_A11Y_NAMED_UPLOAD_FAILED.format({
                            filename: o,
                            reason: r
                        })) : n.AccessibilityAnnouncer.announce(I.default.Messages.GUILD_PRODUCT_A11Y_UPLOAD_FAILED.format({
                            reason: r
                        })), e(A => ({
                            ...A,
                            [a.id]: s
                        }))
                    }), a.on("progress", (A, t) => {
                        e(e => ({
                            ...e,
                            [a.id]: A / t
                        }))
                    }), this.uploads = [...this.uploads, a]
                }
                deleteAttachment(A) {
                    let e = this.uploads.findIndex(e => e.id === A);
                    if (-1 === e) return !1;
                    this.uploads = [...this.uploads];
                    let t = this.uploads.splice(e, 1);
                    return t[0].cancel(), !0
                }
                cancelUnusedUploads() {
                    for (let A of this.uploads) A.cancel();
                    this.uploads = []
                }
                async saveProductWithAttachments(A) {
                    let e, {
                            priceTier: t,
                            createNewRole: a,
                            imageName: l,
                            ...n
                        } = A,
                        r = this.uploads.some(A => A.status === o.CloudUploadStatus.ERROR);
                    if (r) throw Error("Cannot create product with failed attachments");
                    "unlinkRole" in n && (e = n.unlinkRole);
                    let i = this.uploads.filter(A => !this.existingAttachmentIds.has(A.id)),
                        d = this.uploads.filter(A => this.existingAttachmentIds.has(A.id)).map(A => {
                            var e;
                            return {
                                filename: null === (e = A.item.file) || void 0 === e ? void 0 : e.name,
                                id: A.id
                            }
                        }),
                        u = await this.createCloudUploader().uploadFiles(i, {
                            ...n,
                            price_tier: t,
                            create_new_role: a,
                            image_name: l,
                            unlink_role: e,
                            attachments: d.length > 0 ? d : void 0
                        }, {
                            addFilesTo: "attachments"
                        });
                    return m.log("Created/updated product:", u), null != u && (this.isEdit ? await s.default.dispatch({
                        type: "GUILD_PRODUCT_UPDATE",
                        product: u
                    }) : await s.default.dispatch({
                        type: "GUILD_PRODUCT_CREATE",
                        product: u
                    })), u
                }
                constructor({
                    guildId: A,
                    editSkuId: e,
                    onFileSizeError: t
                }) {
                    var a;
                    this.target = new f.default, this.existingAttachmentIds = new Set, this.uploads = [], this.generateInitialProgresses = () => {
                        let A = {};
                        for (let e of this.uploads) A[e.id] = 1;
                        return A
                    }, this.isEdit = null != e;
                    let l = null == e ? U.Endpoints.GUILD_PRODUCTS(A) : U.Endpoints.GUILD_PRODUCT_LISTINGS(A, e),
                        n = null == e ? "POST" : "PATCH";
                    this.createCloudUploader = () => (0, u.createCloudUploader)(l, n), this.guildId = A, this.onFileSizeError = t;
                    let s = null === (a = T.default.getGuildProduct(null != e ? e : "")) || void 0 === a ? void 0 : a.attachments;
                    null != s && (this.uploads = s.map(e => {
                        var t;
                        this.existingAttachmentIds.add(e.id);
                        let a = new o.CloudUpload({
                            id: e.id,
                            platform: i.UploadPlatform.WEB,
                            file: {
                                name: e.filename,
                                lastModified: 0,
                                size: null !== (t = e.size) && void 0 !== t ? t : 0
                            }
                        }, A);
                        return a.status = o.CloudUploadStatus.COMPLETED, a
                    }))
                }
            }

            function E(A, e) {
                var t;
                let {
                    editSkuId: n,
                    onFileSizeError: s
                } = e, o = (0, l.default)([C.default], () => C.default.getGuild(A)), [i, d] = a.useState({
                    editSkuId: n,
                    onFileSizeError: s
                }), u = a.useMemo(() => new h({
                    guildId: A,
                    ...i
                }), [A, i]), [c, f] = a.useState(u.generateInitialProgresses), [, T] = a.useState(null);
                a.useLayoutEffect(() => {
                    f(u.generateInitialProgresses())
                }, [u]);
                let [g, I] = a.useState(), [m, E] = a.useState(), p = a.useCallback(A => {
                    u.deleteAttachment(A) && T({})
                }, [u]), q = a.useCallback(A => {
                    u.addAttachment(A, f), T({})
                }, [u]), N = a.useCallback(async A => {
                    try {
                        I(A), E(void 0);
                        let e = await u.saveProductWithAttachments(A);
                        return null != e && d({
                            editSkuId: e.id,
                            onFileSizeError: s
                        }), T({}), e
                    } catch (A) {
                        E(A instanceof r.APIError ? A : new r.APIError({
                            status: 400,
                            body: {
                                attachments: [A.message]
                            }
                        }))
                    } finally {
                        I(void 0)
                    }
                }, [u, s]), v = a.useCallback(() => {
                    u.cancelUnusedUploads(), T({})
                }, [u]);
                a.useEffect(() => () => {
                    u.cancelUnusedUploads()
                }, [u]);
                let {
                    uploads: O
                } = u, R = !O.every(A => u.existingAttachmentIds.has(A.id)) || O.length !== u.existingAttachmentIds.size;
                return {
                    addAttachment: q,
                    cancelUnusedUploads: v,
                    deleteAttachment: p,
                    fileUploadProgresses: c,
                    uploads: O,
                    saveProductWithAttachments: N,
                    isSaving: null != g,
                    changesSaving: g,
                    saveError: m,
                    hasUnsavedAttachmentChanges: R,
                    canAttachFiles: O.length < u.target.getMaxAttachmentsCount(),
                    canAttachArchives: null !== (t = null == o ? void 0 : o.hasFeature(U.GuildFeatures.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && void 0 !== t && t
                }
            }
        },
        492724: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return U
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("414456"),
                n = t.n(l),
                s = t("77078"),
                r = t("17692"),
                o = t("191814"),
                i = t("476765"),
                d = t("538137"),
                u = t("600785"),
                c = t("246421"),
                C = t("782340"),
                f = t("767165");

            function T(A) {
                let {
                    hidePurchaseToUnlockBadge: e,
                    className: t,
                    children: l
                } = A;
                return (0, a.jsxs)("div", {
                    className: n(f.productThumbnailContainer, t),
                    children: [l, !e && (0, a.jsxs)("div", {
                        className: f.purchaseToUnlockBadge,
                        children: [(0, a.jsx)(u.default, {
                            className: f.lockIcon,
                            width: 16,
                            height: 16,
                            color: "currentColor",
                            "aria-hidden": !0
                        }), (0, a.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            className: f.unlockText,
                            children: C.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_TO_UNLOCK
                        })]
                    })]
                })
            }

            function g(A) {
                let {
                    onShowFullDescription: e,
                    variant: t
                } = A, l = (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.Text, {
                        variant: t,
                        color: null != e ? "text-link" : "interactive-hover",
                        children: C.default.Messages.GUILD_PRODUCT_CARD_SEE_FULL_DESCRIPTION
                    }), (0, a.jsx)(d.default, {
                        className: f.arrowIcon,
                        backgroundColor: "currentColor",
                        width: 16,
                        height: 16
                    })]
                });
                return null == e ? (0, a.jsx)("div", {
                    className: f.showMoreButton,
                    children: l
                }) : (0, a.jsx)(s.Clickable, {
                    className: n(f.showMoreButton, f.hasAction),
                    onClick: A => {
                        A.stopPropagation(), null != e && e()
                    },
                    children: l
                })
            }

            function U(A) {
                let {
                    imageUrl: e,
                    name: t,
                    description: l,
                    formattedPrice: d,
                    role: u,
                    ctaComponent: U,
                    shouldShowFullDescriptionButton: I = !0,
                    onShowFullDescription: m,
                    productType: h,
                    onTapCard: E,
                    actionMenu: p,
                    showOpaqueBackground: q = !1,
                    hideRoleTag: N = !1,
                    lineClamp: v = 1,
                    cardWidth: O = 332,
                    cardHeight: R,
                    thumbnailHeight: D = 187,
                    descriptionTextVariant: L = "text-sm/normal"
                } = A, P = (0, i.uid)(), x = (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(T, {
                        hidePurchaseToUnlockBadge: !0,
                        children: (0, a.jsx)("img", {
                            alt: "",
                            src: e,
                            className: f.productThumbnail,
                            style: {
                                height: D
                            }
                        })
                    }), (0, a.jsxs)("div", {
                        className: f.productDetails,
                        children: [(0, a.jsxs)("div", {
                            className: f.productDetailContent,
                            children: [(0, a.jsx)(s.Heading, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                className: f.productName,
                                id: P,
                                children: t
                            }), (0, a.jsx)(s.FocusBlock, {
                                children: (0, a.jsx)(r.default, {
                                    variant: L,
                                    color: "text-muted",
                                    lineClamp: v,
                                    text: l
                                })
                            }), I && (0, a.jsx)(g, {
                                onShowFullDescription: m,
                                variant: L
                            }), N || null == u || "" === u.name ? null : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(o.default, {
                                    size: 16
                                }), (0, a.jsx)(c.default, {
                                    role: u
                                })]
                            })]
                        }), p]
                    }), (0, a.jsxs)("div", {
                        className: f.purchaseDetails,
                        children: [(0, a.jsx)(s.Text, {
                            variant: "text-md/medium",
                            color: "interactive-active",
                            className: f.productPrice,
                            children: null != d ? d : C.default.Messages.GUILD_PRODUCT_CARD_EMPTY_PRICE
                        }), (0, a.jsx)(s.Text, {
                            variant: "text-xxs/normal",
                            color: "text-normal",
                            className: f.productType,
                            children: h
                        }), (0, a.jsx)("div", {
                            className: f.productActionButton,
                            onClick: A => {
                                A.stopPropagation()
                            },
                            children: U
                        })]
                    })]
                });
                return null == E ? (0, a.jsx)("article", {
                    className: n(f.productCard, q ? f.opaqueBackground : f.solidBackground),
                    "aria-labelledby": P,
                    children: x
                }) : (0, a.jsx)("div", {
                    style: {
                        width: O,
                        height: R
                    },
                    children: (0, a.jsx)(s.ClickableContainer, {
                        tag: "article",
                        "aria-label": C.default.Messages.GUILD_SHOP_LISTING_CARD_A11Y_LABEL.format({
                            productName: t
                        }),
                        className: n(f.productCard, q ? f.opaqueBackground : f.solidBackground, f.cardClickableContainer),
                        onClick: E,
                        children: x
                    })
                })
            }
        },
        155539: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                AttachmentsUploadComponent: function() {
                    return v
                }
            });
            var a = t("37983"),
                l = t("884691"),
                n = t("414456"),
                s = t.n(n),
                r = t("77078"),
                o = t("160864"),
                i = t("966724"),
                d = t("20606"),
                u = t("191814"),
                c = t("476765"),
                C = t("857171"),
                f = t("945330"),
                T = t("903635"),
                g = t("696104"),
                U = t("949435"),
                I = t("757515"),
                m = t("527382"),
                h = t("500307"),
                E = t("782340"),
                p = t("616945");
            let q = (0, c.uid)();

            function N(A) {
                var e;
                let {
                    upload: t,
                    progress: n = 0,
                    onDeleteAttachment: o
                } = A, i = l.useCallback(() => {
                    null == o || o(t.id)
                }, [o, t.id]), c = n >= 1, C = n < 0, g = c || C, U = null !== (e = t.filename) && void 0 !== e ? e : t.id, m = (0, I.describeUploadProgressError)(n);
                return (0, a.jsx)(r.TooltipContainer, {
                    text: m,
                    children: (0, a.jsxs)("div", {
                        className: s(p.attachedFileCard, {
                            [p.attachedFileCardError]: C,
                            [p.attachedFileCardUploading]: !g
                        }),
                        children: [(0, a.jsx)(T.default, {
                            width: 16,
                            height: 16,
                            color: d.default.INTERACTIVE_MUTED
                        }), (0, a.jsx)(u.default, {
                            size: 10,
                            horizontal: !0
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            children: U
                        }), !g && (0, a.jsx)(r.Spinner, {
                            className: p.attachedFileCardSpinner,
                            type: r.Spinner.Type.SPINNING_CIRCLE
                        }), g && null != o && (0, a.jsx)(r.Button, {
                            "aria-label": E.default.Messages.GUILD_PRODUCT_DELETE_ATTACHMENT.format({
                                attachment: U
                            }),
                            className: p.deleteButton,
                            innerClassName: p.deleteButtonInner,
                            look: r.Button.Looks.BLANK,
                            size: r.Button.Sizes.NONE,
                            onClick: i,
                            children: (0, a.jsx)(f.default, {
                                width: 12,
                                height: 12,
                                className: p.deleteIcon
                            })
                        })]
                    })
                })
            }

            function v(A) {
                let {
                    onFileAdded: e
                } = A, {
                    uploads: t,
                    canAttachFiles: n,
                    canAttachArchives: s,
                    addAttachment: d,
                    deleteAttachment: c,
                    fileUploadProgresses: f
                } = (0, U.useGuildProductAttachmentManagerContext)(), T = l.useRef(!1);

                function I(A) {
                    try {
                        for (let e of A) d({
                            platform: i.UploadPlatform.WEB,
                            file: e
                        });
                        T.current = !0
                    } catch {}
                }
                return l.useEffect(() => {
                    T.current && (e(), T.current = !1)
                }, [e]), (0, a.jsxs)("div", {
                    className: p.container,
                    children: [(0, a.jsx)(o.default, {
                        className: p.uploadArea,
                        title: E.default.Messages.GUILD_PRODUCT_UPLOAD_AREA_TITLE,
                        description: E.default.Messages.GUILD_PRODUCT_UPLOAD_AREA_INSTRUCTIONS,
                        icons: m.DEFAULT_FILE_UPLOAD_ICONS,
                        onDrop: I
                    }), (0, a.jsxs)(C.default, {
                        className: p.addFileButtonLook,
                        innerClassName: p.addFileButton,
                        color: r.Button.Colors.CUSTOM,
                        disabled: !n,
                        "aria-label": E.default.Messages.GUILD_PRODUCT_UPLOAD_FILE_BUTTON,
                        "aria-describedby": q,
                        multiple: !0,
                        onChange: function(A) {
                            null != A.currentTarget.files && I(A.currentTarget.files)
                        },
                        children: [(0, a.jsx)(g.default, {
                            color: "currentColor",
                            width: 16,
                            height: 16,
                            className: p.addFileButtonIcon,
                            "aria-hidden": !0
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            color: "always-white",
                            children: E.default.Messages.GUILD_PRODUCT_UPLOAD_FILE_BUTTON
                        })]
                    }), (0, a.jsx)(u.default, {
                        size: 12
                    }), (0, a.jsx)(r.Text, {
                        id: q,
                        color: "text-muted",
                        variant: "text-xs/normal",
                        children: s ? E.default.Messages.GUILD_PRODUCT_UPLOAD_ATTACHMENT_INSTRUCTIONS_ARCHIVES_ALLOWED.format({
                            fileUploadLimit: h.GUILD_PRODUCT_MAX_TOTAL_ATTACHMENT_SIZE
                        }) : E.default.Messages.GUILD_PRODUCT_UPLOAD_ATTACHMENT_INSTRUCTIONS.format({
                            fileUploadLimit: h.GUILD_PRODUCT_MAX_TOTAL_ATTACHMENT_SIZE
                        })
                    }), t.length > 0 && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: p.separator
                        }), (0, a.jsx)("ul", {
                            className: p.attachedFilesContainer,
                            "aria-label": E.default.Messages.GUILD_PRODUCT_ATTACHED_FILES_SECTION_LABEL,
                            children: t.map(A => (0, a.jsx)("li", {
                                children: (0, a.jsx)(N, {
                                    upload: A,
                                    onDeleteAttachment: c,
                                    progress: f[A.id]
                                })
                            }, A.id))
                        })]
                    })]
                })
            }
        },
        246421: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return d
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("509043"),
                n = t("77078"),
                s = t("191814"),
                r = t("45029"),
                o = t("782340"),
                i = t("411531");

            function d(A) {
                let {
                    locked: e,
                    role: t,
                    textVariant: d = "text-xs/medium"
                } = A, u = (0, n.useToken)(n.tokens.colors.INTERACTIVE_NORMAL).hex();
                return (0, a.jsx)("div", {
                    className: i.roleTagContainer,
                    children: (0, a.jsxs)("div", {
                        className: i.roleTag,
                        children: [(0, a.jsx)("div", {
                            className: i.roleColor,
                            style: {
                                backgroundColor: (0, l.int2hex)(t.color)
                            }
                        }), (0, a.jsx)(s.default, {
                            size: 8,
                            horizontal: !0
                        }), (0, a.jsxs)(n.Text, {
                            variant: d,
                            color: "text-normal",
                            children: [(0, a.jsx)(n.HiddenVisually, {
                                children: o.default.Messages.GUILD_PRODUCT_CARD_HIDDEN_ROLE_SCREEN_READER
                            }), t.name]
                        }), !0 === e && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(s.default, {
                                size: 8,
                                horizontal: !0
                            }), (0, a.jsx)(r.default, {
                                color: u
                            })]
                        })]
                    })
                })
            }
        },
        83501: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                IconVariant: function() {
                    return l
                },
                default: function() {
                    return c
                }
            });
            var a, l, n = t("37983"),
                s = t("884691"),
                r = t("77078"),
                o = t("191814"),
                i = t("423487"),
                d = t("782340"),
                u = t("55472");
            (a = l || (l = {})).DANGER = "danger", a.WARNING = "warning";

            function c(A) {
                let {
                    transitionState: e,
                    onClose: t,
                    title: a,
                    body: c,
                    cta: C,
                    closeLabel: f,
                    onConfirm: T,
                    iconVariant: g = l.WARNING
                } = A, [U, I] = s.useState(!1), m = async () => {
                    I(!0);
                    try {
                        await T(), t()
                    } finally {
                        I(!1)
                    }
                }, h = null != a ? a : d.default.Messages.GUILD_PRODUCT_SETTINGS_WARNING_MODAL_TITLE;
                return (0, n.jsxs)(r.ModalRoot, {
                    className: u.container,
                    size: r.ModalSize.DYNAMIC,
                    transitionState: e,
                    "aria-label": h,
                    children: [(0, n.jsxs)(r.ModalContent, {
                        className: u.content,
                        children: [(0, n.jsxs)("div", {
                            className: u.header,
                            children: [(0, n.jsx)(i.default, {
                                width: 20,
                                height: 20,
                                className: function(A) {
                                    switch (A) {
                                        case l.DANGER:
                                            return u.dangerIcon;
                                        case l.WARNING:
                                            return u.warningIcon
                                    }
                                }(g)
                            }), (0, n.jsx)(o.default, {
                                size: 8,
                                horizontal: !0
                            }), (0, n.jsx)(r.Heading, {
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: h
                            })]
                        }), (0, n.jsx)(o.default, {
                            size: 12
                        }), (0, n.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            className: u.body,
                            children: c
                        })]
                    }), (0, n.jsxs)(r.ModalFooter, {
                        children: [(0, n.jsx)(r.Button, {
                            color: r.Button.Colors.BRAND,
                            onClick: m,
                            submitting: U,
                            children: C
                        }), (0, n.jsx)(o.default, {
                            size: 12,
                            horizontal: !0
                        }), null != f && (0, n.jsx)(r.Button, {
                            color: r.Button.Colors.PRIMARY,
                            look: r.Button.Looks.OUTLINED,
                            onClick: t,
                            children: f
                        })]
                    })]
                })
            }
        },
        959875: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return n
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("551042");

            function n(A) {
                (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await t.el("83501").then(t.bind(t, "83501"));
                    return t => (0, a.jsx)(e, {
                        ...A,
                        ...t
                    })
                })
            }
        },
        669297: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                openErrorDialog: function() {
                    return r
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("77078"),
                n = t("959875"),
                s = t("782340");

            function r(A, e, t) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                (0, n.default)({
                    title: A,
                    body: "string" == typeof e ? e : e.format({
                        highlightHook: A => (0, a.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "text-normal",
                            style: {
                                display: "inline"
                            },
                            children: A
                        }),
                        ...r
                    }),
                    cta: s.default.Messages.GOT_IT,
                    onConfirm: () => {},
                    iconVariant: t
                })
            }
        },
        836312: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                showPublishErrorDialog: function() {
                    return i
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("551042"),
                n = t("83501"),
                s = t("669297"),
                r = t("49111"),
                o = t("782340");

            function i(A, e, i) {
                var d, u, c;
                switch (A.code) {
                    case r.AbortCodes.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
                        (0, s.openErrorDialog)(o.default.Messages.GUILD_PRODUCT_TOO_MANY_PUBLISHED_PRODUCT_ERROR_TITLE, o.default.Messages.GUILD_PRODUCT_TOO_MANY_PUBLISHED_PRODUCT_ERROR_BODY, n.IconVariant.DANGER);
                        break;
                    case r.AbortCodes.TWO_FA_NOT_ENABLED:
                        (0, s.openErrorDialog)(o.default.Messages.GUILD_PRODUCT_TWO_FA_NOT_ENABLED_ERROR_TITLE, o.default.Messages.GUILD_PRODUCT_TWO_FA_NOT_ENABLED_ERROR_BODY, n.IconVariant.WARNING);
                        break;
                    case r.AbortCodes.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
                        (0, s.openErrorDialog)(o.default.Messages.GUILD_PRODUCT_MISSING_BENEFITS_ERROR_TITLE, o.default.Messages.GUILD_PRODUCT_MISSING_BENEFITS_ERROR_BODY, n.IconVariant.WARNING);
                        break;
                    case r.AbortCodes.MONETIZATION_TERMS_NOT_ACCEPTED:
                        ;
                        d = e, (0, l.openModalLazy)(async () => {
                            let {
                                default: A
                            } = await t.el("300770").then(t.bind(t, "300770"));
                            return e => (0, a.jsx)(A, {
                                guildId: d,
                                ...e
                            })
                        });
                        break;
                    case r.AbortCodes.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
                        (0, s.openErrorDialog)(o.default.Messages.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED_TITLE, o.default.Messages.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED_BODY, n.IconVariant.WARNING);
                        break;
                    case r.AbortCodes.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
                        let C, f;
                        null != i ? (C = o.default.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_BODY_WITH_LINK, f = {
                            url: r.MarketingURLs.DEVELOPER_PORTAL_PAYOUT_SETTINGS(i)
                        }) : C = o.default.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_BODY, (0, s.openErrorDialog)(o.default.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_TITLE, C, n.IconVariant.WARNING, f);
                        break;
                    default:
                        ;
                        let T = null !== (c = A.getFirstFieldErrorMessage(["published"])) && void 0 !== c ? c : (null === (u = A.hasFieldErrors) || void 0 === u ? void 0 : u.call(A)) ? void 0 : A.message;
                        if (null != T)(0, s.openErrorDialog)(o.default.Messages.GUILD_PRODUCT_GENERIC_ERROR_TITLE, T, n.IconVariant.WARNING)
                }
            }
        },
        795785: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return g
                }
            });
            var a = t("37983"),
                l = t("884691"),
                n = t("414456"),
                s = t.n(n),
                r = t("77078"),
                o = t("694187"),
                i = t("818643"),
                d = t("987772"),
                u = t("228220"),
                c = t("782340"),
                C = t("610828");
            let f = "custom-image",
                T = l.forwardRef(function(A, e) {
                    let {
                        selectedImageName: t,
                        onChange: l,
                        disabled: n = !1,
                        name: o,
                        alt: i,
                        data: d
                    } = A, u = o === t, c = (0, r.useRadioItem)({
                        isSelected: u,
                        label: i
                    }), f = n ? void 0 : () => {
                        l(d, o)
                    };
                    return (0, a.jsx)(r.Clickable, {
                        ref: e,
                        className: s(C.radioOption, {
                            [C.selected]: u,
                            [C.disabled]: n
                        }),
                        onClick: f,
                        "aria-disabled": n,
                        ...c,
                        children: (0, a.jsx)("img", {
                            src: d,
                            alt: i,
                            className: C.radioOptionImage
                        })
                    })
                });

            function g(A) {
                let {
                    presetImages: e,
                    image: t,
                    imageName: n,
                    savedImageName: g,
                    onChange: U,
                    uploadButtonLabel: I = c.default.Messages.UPLOAD_IMAGE,
                    radioGroupAriaLabel: m = c.default.Messages.CUSTOM_IMAGE_SELECTOR_RADIO_GROUP_ARIA_LABEL,
                    disabled: h = !1
                } = A, E = n === f, [p, q] = l.useState(E ? t : null), [N, v] = l.useState(null), O = l.useRef(null), R = l.useRef(null);
                l.useEffect(() => {
                    g !== f && (q(null), v(null))
                }, [g]);
                let D = null != N ? c.default.Messages.CUSTOM_IMAGE_SELECTOR_YOUR_CUSTOM_IMAGE_WITH_FILENAME.format({
                        filename: N
                    }) : c.default.Messages.CUSTOM_IMAGE_SELECTOR_YOUR_CUSTOM_IMAGE,
                    L = (0, r.useRadioGroup)({
                        orientation: "horizontal",
                        isDisabled: h
                    }),
                    P = () => {
                        var A;
                        return null === (A = O.current) || void 0 === A ? void 0 : A.activateUploadDialogue()
                    },
                    x = () => {
                        n === f && U(e[0].data, e[0].name), q(null), v(null)
                    };
                return l.useEffect(() => {
                    if (E && null != N) {
                        var A, e;
                        null === (e = R.current) || void 0 === e || null === (A = e.ref) || void 0 === A || A.focus()
                    }
                }, [E, N]), (0, a.jsxs)("div", {
                    className: C.imageSelectionContainer,
                    children: [(0, a.jsx)(r.FocusRing, {
                        within: !0,
                        children: (0, a.jsxs)("div", {
                            className: s(C.uploadButton, {
                                [C.disabled]: h,
                                [C.hidden]: null != p
                            }),
                            "aria-disabled": h,
                            children: [(0, a.jsx)(i.default, {
                                width: 16,
                                height: 16,
                                color: "currentColor",
                                "aria-hidden": !0
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-xxs/normal",
                                color: "text-muted",
                                "aria-hidden": !0,
                                children: I
                            }), (0, a.jsx)(o.default, {
                                ref: O,
                                tabIndex: 0,
                                onChange: (A, e) => {
                                    null != e && (v(e.name), q(A), U(A, f))
                                },
                                "aria-label": I
                            })]
                        })
                    }), null != p && (0, a.jsxs)("div", {
                        className: C.customImageActionContainer,
                        children: [(0, a.jsx)(r.Tooltip, {
                            text: c.default.Messages.CUSTOM_IMAGE_SELECTOR_EDIT_IMAGE_TOOLTIP,
                            hideOnClick: !0,
                            children: A => (0, a.jsx)(r.Clickable, {
                                ...A,
                                className: C.customImageAction,
                                onClick: P,
                                "aria-label": c.default.Messages.CUSTOM_IMAGE_SELECTOR_EDIT_CUSTOM_IMAGE_ARIA_LABEL.format({
                                    filename: N
                                }),
                                children: (0, a.jsx)(d.default, {
                                    className: C.editIcon
                                })
                            })
                        }), (0, a.jsx)(r.Tooltip, {
                            text: c.default.Messages.CUSTOM_IMAGE_SELECTOR_DELETE_IMAGE_TOOLTIP,
                            hideOnClick: !0,
                            children: A => (0, a.jsx)(r.Clickable, {
                                ...A,
                                className: C.customImageAction,
                                onClick: x,
                                "aria-label": c.default.Messages.CUSTOM_IMAGE_SELECTOR_DELETE_CUSTOM_IMAGE_ARIA_LABEL.format({
                                    filename: N
                                }),
                                children: (0, a.jsx)(u.default, {
                                    className: C.deleteIcon
                                })
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        "aria-label": m,
                        ...L,
                        className: C.radioGroup,
                        children: [null != p && (0, a.jsx)(T, {
                            ref: R,
                            selectedImageName: n,
                            onChange: U,
                            disabled: h,
                            name: f,
                            alt: D,
                            data: p
                        }), e.map(A => (0, a.jsx)(T, {
                            selectedImageName: n,
                            onChange: U,
                            disabled: h,
                            ...A
                        }, A.name))]
                    })]
                })
            }
        },
        48175: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                GuildProductEditModalContent: function() {
                    return At
                },
                default: function() {
                    return Aa
                }
            });
            var a, l, n = t("37983"),
                s = t("884691"),
                r = t("414456"),
                o = t.n(r),
                i = t("627445"),
                d = t.n(i),
                u = t("171210"),
                c = t("65597"),
                C = t("266491"),
                f = t("77078"),
                T = t("851387"),
                g = t("45299"),
                U = t("206230"),
                I = t("228100"),
                m = t("741515"),
                h = t("435032"),
                E = t("465869"),
                p = t("424960"),
                q = t("845579"),
                N = t("305961"),
                v = t("181114"),
                O = t("965397"),
                R = t("191814"),
                D = t("476765"),
                L = t("578706"),
                P = t("153160"),
                x = t("271560"),
                V = t("866190"),
                S = t("949435"),
                F = t("565559"),
                b = t("757515"),
                j = t("740259"),
                M = t("492724"),
                G = t("155539"),
                _ = t("959875"),
                K = t("669297"),
                W = t("836312"),
                X = t("795785"),
                B = t("850861"),
                z = t("570114"),
                Q = t("307785"),
                y = t("49111"),
                Z = t("988268"),
                H = t("782340"),
                k = t("496848");
            let Y = (0, D.uid)(),
                w = (0, D.uid)(),
                J = (0, D.uid)();

            function $(A) {
                let {
                    text: e,
                    onChange: t,
                    value: a,
                    disabled: l,
                    warning: s
                } = A, r = (0, D.useUID)();
                return (0, n.jsxs)("label", {
                    className: o(k.benefitToggleContainer, {
                        [k.disabled]: l
                    }),
                    htmlFor: r,
                    children: [(0, n.jsx)(f.Text, {
                        variant: "text-sm/medium",
                        color: l ? "text-muted" : "text-normal",
                        children: e
                    }), null != s && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(R.default, {
                            size: 4,
                            horizontal: !0
                        }), s]
                    }), (0, n.jsx)(R.default, {
                        size: 16,
                        horizontal: !0
                    }), (0, n.jsx)(f.Switch, {
                        onChange: t,
                        checked: a,
                        disabled: l,
                        id: r
                    })]
                })
            }

            function AA(A, e) {
                return A.filter(A => {
                    let {
                        value: t,
                        label: a
                    } = A;
                    return t.toString().includes(e) || a.includes(e)
                })
            }

            function Ae(A) {
                let {
                    guildId: e,
                    selectedPriceTier: t,
                    setPriceTier: a
                } = A, {
                    priceTiers: l
                } = (0, m.usePriceTiers)(e, y.PriceTierTypes.GUILD_PRODUCTS), r = s.useMemo(() => (null != l ? l : null != t ? [t] : []).map(A => ({
                    value: A,
                    label: (0, P.formatPrice)(A, y.CurrencyCodes.USD)
                })), [l, t]);
                return (0, n.jsx)(f.SearchableSelect, {
                    value: t,
                    placeholder: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PRICE_PLACEHOLDER,
                    maxVisibleItems: 5,
                    options: r,
                    onChange: a,
                    filter: AA,
                    "aria-required": !0
                })
            }

            function At(A) {
                var e, a, r, o, i, m, p, D;
                let {
                    guildId: AA,
                    productId: At,
                    transitionState: Al,
                    onClose: An
                } = A, [As, Ar] = s.useState(At), Ao = (0, c.default)([F.default], () => null == As ? null : F.default.getGuildProduct(As), [As]), Ai = (null == Ao ? void 0 : Ao.published) === !0, {
                    application: Ad
                } = (0, I.default)(AA, Z.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS), Au = j.PRODUCT_IMAGE_PRESETS[0], Ac = (0, c.default)([U.default], () => U.default.useReducedMotion), AC = q.GifAutoPlay.useSetting(), Af = (0, V.useIsWindowFocused)(), AT = s.useCallback(() => {
                    var A;
                    return (null == Ao ? void 0 : null === (A = Ao.image_asset) || void 0 === A ? void 0 : A.application_id) == null ? Au.data : (0, x.getAssetURL)(Ao.image_asset.application_id, Ao.image_asset, 600, Af && AC ? void 0 : "webp")
                }, [Au, Ao, Af, AC]), {
                    shouldRestrictUpdatingCreatorMonetizationSettings: Ag
                } = (0, E.useShouldRestrictUpdatingCreatorMonetizationSettings)(AA);
                s.useEffect(() => {
                    Ag && (An(), (0, K.openErrorDialog)(H.default.Messages.CREATOR_MONETIZATION_RESTRICTED_GUILD_CANNOT_EDIT_PRODUCT_TITLE, H.default.Messages.CREATOR_MONETIZATION_RESTRICTED_GUILD_CANNOT_EDIT_PRODUCT_BODY))
                }, [Ag, An]);
                let [AU, AI] = s.useState(null !== (r = null == Ao ? void 0 : Ao.name) && void 0 !== r ? r : ""), [Am, Ah] = s.useState(null !== (o = null == Ao ? void 0 : Ao.description) && void 0 !== o ? o : ""), [AE, Ap] = s.useState(null !== (i = null == Ao ? void 0 : Ao.price_tier) && void 0 !== i ? i : void 0), [Aq, AN] = s.useState(AT), [Av, AO] = s.useState(null !== (m = null == Ao ? void 0 : null === (e = Ao.image_asset) || void 0 === e ? void 0 : e.filename) && void 0 !== m ? m : Au.name), [AR, AD] = s.useState(!1), [AL, AP] = s.useState(), Ax = s.useMemo(() => null != AE ? (0, P.formatPrice)(AE, y.CurrencyCodes.USD) : void 0, [AE]), [AV, AS] = s.useState(!0), {
                    changesSaving: AF,
                    saveError: Ab,
                    saveProductWithAttachments: Aj,
                    hasUnsavedAttachmentChanges: AM,
                    cancelUnusedUploads: AG
                } = (0, S.useGuildProductAttachmentManagerContext)(), A_ = (null == Ao ? void 0 : Ao.attachments) != null && (null == Ao ? void 0 : Ao.attachments.length) > 0, AK = null != Ab ? Ab : AL, AW = null != AF && "published" in AF, AX = null != AF && !AW, AB = null !== (p = null == Ao ? void 0 : Ao.role_id) && void 0 !== p ? p : null, [Az, AQ] = s.useState(), Ay = null != Az || null != AB, AZ = (0, c.default)([N.default], () => {
                    if (null != AB && null !== Az) {
                        let A = N.default.getGuild(AA);
                        return null == A ? void 0 : A.roles[AB]
                    }
                    return null != Az ? Az : void 0
                }, [Az, AB, AA]), AH = "";
                Ay && AV ? AH = H.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE : Ay ? AH = H.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE : AV && (AH = H.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE);
                let Ak = () => {
                        AS(!1), AG()
                    },
                    [AY, Aw] = s.useState(),
                    {
                        changes: AJ,
                        hasUnsavedChanges: A$,
                        canSaveForDraft: A0,
                        canSaveForPublished: A1,
                        canPublishOrUnpublish: A9
                    } = s.useMemo(() => (0, b.computeProductChanges)({
                        guildProductListing: Ao,
                        name: AU,
                        priceTier: AE,
                        description: Am,
                        image: Aq,
                        imageName: Av,
                        isImageChanged: AR,
                        newRoleParams: Az,
                        hasSavedAttachments: A_,
                        hasUnsavedAttachmentChanges: AM
                    }), [Ao, AU, AE, Am, Aq, Av, AR, Az, A_, AM]),
                    A6 = s.useMemo(() => A$ || null == AY || AY === l.PUBLISH || null != AK ? null : (0, n.jsx)(O.default, {
                        className: k.successNotice,
                        children: (0, n.jsx)(g.default, {
                            message: (0, n.jsxs)("div", {
                                className: k.successNoticeMessage,
                                children: [(0, n.jsx)(L.default, {
                                    color: u.default.BUTTON_POSITIVE_BACKGROUND,
                                    backgroundColor: u.default.WHITE
                                }), (0, n.jsx)(f.Text, {
                                    variant: "text-md/medium",
                                    children: AY === l.DRAFT ? H.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_SAVE_DRAFT_SUCCESS : AY === l.UPDATE_PUBLISH ? H.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_MODAL_UPDATE_PUBLISH_SUCCESS : H.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_MODAL_UNPUBLISH_SUCCESS
                                })]
                            }),
                            onReset: () => Aw(void 0),
                            onResetText: H.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_DISMISS
                        })
                    }), [AK, A$, AY]),
                    A7 = s.useCallback(() => {
                        A$ ? (0, _.default)({
                            title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_TITLE,
                            body: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_BODY,
                            cta: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
                            closeLabel: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
                            onConfirm: () => {
                                An()
                            }
                        }) : An()
                    }, [An, A$]);
                s.useEffect(() => {
                    (0, f.updateModal)(Q.GUILD_PRODUCT_EDIT_MODAL_KEY, A => (0, n.jsx)(Aa, {
                        guildId: AA,
                        productId: As,
                        ...A
                    }), A7)
                }, [AA, A7, As]);
                let A3 = async A => {
                    let e = (0, b.describeProductChangeValidation)({
                        newRoleParams: Az
                    });
                    if (AP(e), null != e) return;
                    let t = await Aj(A);
                    if (AD(!1), null != t) {
                        if (null != A.name && AI(t.name), null != A.description && Ah(t.description), null != Az) {
                            let A = t.role_id;
                            d(null != A, "Cannot update role without role ID"), await T.default.updateRole(AA, A, Az)
                        }
                        AQ(void 0), Ar(t.id), "published" in A && !0 === A.published && An()
                    }
                };
                s.useEffect(() => {
                    if (null != AK) {
                        var A;
                        (0, W.showPublishErrorDialog)(AK, AA, null == Ad ? void 0 : null === (A = Ad.team) || void 0 === A ? void 0 : A.id)
                    }
                }, [AK, AA, Ad]), s.useEffect(() => {
                    A$ && Aw(void 0)
                }, [A$]);
                let A5 = s.useRef(null);
                return (0, n.jsxs)(f.ModalRoot, {
                    transitionState: Al,
                    size: f.ModalSize.DYNAMIC,
                    className: k.modalRoot,
                    "aria-labelledby": Y,
                    children: [(0, n.jsxs)(f.ModalHeader, {
                        className: k.modalHeader,
                        separator: !1,
                        children: [(0, n.jsxs)("div", {
                            className: k.headerText,
                            children: [(0, n.jsx)(f.Heading, {
                                id: Y,
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_HEADING
                            }), (0, n.jsx)(f.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION
                            })]
                        }), (0, n.jsx)(f.ModalCloseButton, {
                            onClick: A7,
                            className: k.modalCloseButton
                        })]
                    }), (0, n.jsxs)(f.ModalContent, {
                        className: k.modalContent,
                        scrollbarType: "none",
                        children: [(0, n.jsx)(f.ScrollerThin, {
                            children: (0, n.jsxs)("div", {
                                className: k.productFieldsSection,
                                ref: A5,
                                children: [(0, n.jsx)(f.FormItem, {
                                    title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_NAME_LABEL,
                                    tag: "label",
                                    htmlFor: w,
                                    error: null == AK ? void 0 : AK.getFirstFieldErrorMessage("name"),
                                    children: (0, n.jsx)(f.TextArea, {
                                        value: AU,
                                        onChange: AI,
                                        id: w,
                                        maxLength: 100,
                                        placeholder: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_NAME_PLACEHOLDER,
                                        rows: 1,
                                        autosize: !0,
                                        showCharacterCount: AU.length > 0,
                                        showRemainingCharacterCount: AU.length > 0,
                                        required: !0,
                                        className: AU.length > 0 ? k.nameArea : void 0
                                    })
                                }), (0, n.jsx)(f.FormItem, {
                                    title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION_LABEL,
                                    tag: "label",
                                    error: null == AK ? void 0 : AK.getFirstFieldErrorMessage("description"),
                                    htmlFor: J,
                                    children: (0, n.jsx)(h.default, {
                                        id: J,
                                        className: k.descriptionArea,
                                        value: Am,
                                        onChange: Ah,
                                        maxLength: 1500,
                                        placeholder: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION_PLACEHOLDER,
                                        showCharacterCount: Am.length > 0,
                                        parentModalKey: Q.GUILD_PRODUCT_EDIT_MODAL_KEY,
                                        required: !0
                                    })
                                }), (0, n.jsx)(f.FormItem, {
                                    title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PRICE_LABEL,
                                    tag: "label",
                                    error: null == AK ? void 0 : AK.getFirstFieldErrorMessage("price_tier"),
                                    children: (0, n.jsx)(Ae, {
                                        guildId: AA,
                                        selectedPriceTier: AE,
                                        setPriceTier: Ap
                                    })
                                }), (0, n.jsxs)(f.FormItem, {
                                    title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_LABEL,
                                    tag: "label",
                                    error: null == AK ? void 0 : AK.getFirstFieldErrorMessage("image"),
                                    titleClassName: k.thumbnailLabel,
                                    children: [(0, n.jsx)(f.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_DESCRIPTION
                                    }), (0, n.jsx)(R.default, {
                                        size: 10
                                    }), (0, n.jsx)(X.default, {
                                        presetImages: j.PRODUCT_IMAGE_PRESETS,
                                        radioGroupAriaLabel: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_RADIO_GROUP_ARIA_LABEL,
                                        image: Aq,
                                        imageName: Av,
                                        savedImageName: null == Ao ? void 0 : null === (a = Ao.image_asset) || void 0 === a ? void 0 : a.filename,
                                        onChange: (A, e) => {
                                            if (null != A) {
                                                var t;
                                                AN(A), AO(e), AD(A.startsWith("data:") || e !== (null == Ao ? void 0 : null === (t = Ao.image_asset) || void 0 === t ? void 0 : t.filename))
                                            }
                                        }
                                    })]
                                }), AV ? (0, n.jsx)(f.FormItem, {
                                    title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_ATTACHMENTS_LABEL,
                                    error: null == AK ? void 0 : AK.getFirstFieldErrorMessage("attachments"),
                                    children: (0, n.jsx)(G.AttachmentsUploadComponent, {
                                        onFileAdded: () => {
                                            var A;
                                            null === (A = A5.current) || void 0 === A || A.scrollIntoView({
                                                behavior: "smooth",
                                                block: "end"
                                            })
                                        }
                                    })
                                }) : null, Ay ? (0, n.jsx)(z.default, {
                                    error: null !== (D = null == AK ? void 0 : AK.getFirstFieldErrorMessage(b.ROLE_FIELD_NAME)) && void 0 !== D ? D : void 0,
                                    newRoleParams: Az,
                                    setNewRoleParams: AQ,
                                    guildId: AA,
                                    listingRoleId: AB,
                                    productId: As
                                }) : null]
                            })
                        }), (0, n.jsx)("div", {
                            className: k.horizontalSeparator
                        }), (0, n.jsx)(f.ScrollerThin, {
                            children: (0, n.jsxs)("div", {
                                className: k.productPreview,
                                children: [(0, n.jsx)(B.default, {
                                    disabled: !A9,
                                    disabledTooltip: Ai ? H.default.Messages.GUILD_PRODUCT_UNPUBLISH_REQUIRES_SAVE : H.default.Messages.GUILD_PRODUCT_PUBLISH_REQUIRES_SAVE,
                                    published: Ai,
                                    onClick: () => {
                                        d(A9, "Attempting to publish/unpublish when not allowed"), Aw(Ai ? l.UNPUBLISH : l.PUBLISH), A3({
                                            ...AJ,
                                            published: !Ai
                                        })
                                    },
                                    submitting: AW
                                }), (0, n.jsx)("div", {
                                    className: k.verticalSeparator
                                }), (0, n.jsx)(f.Heading, {
                                    variant: "text-xs/bold",
                                    color: "header-secondary",
                                    className: k.previewHeading,
                                    children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_CARD_PREVIEW_HEADING
                                }), (0, n.jsx)(R.default, {
                                    size: 4
                                }), (0, n.jsx)(f.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_CARD_PREVIEW_DESCRIPTION
                                }), (0, n.jsx)(R.default, {
                                    size: 16
                                }), (0, n.jsx)(M.default, {
                                    imageUrl: Aq,
                                    name: "" === AU ? H.default.Messages.GUILD_PRODUCT_CARD_EMPTY_NAME : AU,
                                    description: "" === Am ? H.default.Messages.GUILD_PRODUCT_CARD_EMPTY_DESCRIPTION : Am,
                                    formattedPrice: Ax,
                                    role: AZ,
                                    productType: AH,
                                    ctaComponent: (0, n.jsx)(v.default, {
                                        shineSize: v.default.ShineSizes.SMALL,
                                        pauseAnimation: Ac || !Af,
                                        className: k.productPreviewCtaButton,
                                        children: H.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
                                    }),
                                    cardWidth: 340,
                                    thumbnailHeight: 190
                                })]
                            })
                        })]
                    }), (0, n.jsx)(f.ModalFooter, {
                        children: (0, n.jsxs)("div", {
                            className: k.footerActionButtons,
                            children: [(0, n.jsxs)("div", {
                                className: k.footerActionLeftButtons,
                                children: [(0, n.jsx)($, {
                                    text: H.default.Messages.GUILD_PRODUCT_SETTINGS_INCLUDE_ROLE_TOGGLE_LABEL,
                                    value: Ay,
                                    onChange: A => {
                                        A ? AQ((0, z.getInitialNewRoleParams)()) : AQ(void 0)
                                    },
                                    warning: null === Az ? (0, n.jsx)(z.WarningIcon, {}) : void 0,
                                    disabled: null != AB
                                }), (0, n.jsx)($, {
                                    text: H.default.Messages.GUILD_PRODUCT_SETTINGS_INCLUDE_ATTACHMENTS_TOGGLE_LABEL,
                                    value: AV,
                                    onChange: A => {
                                        A ? AS(!0) : AM ? (0, f.openModalLazy)(async () => {
                                            let {
                                                ConfirmModal: A
                                            } = await t.el("77078").then(t.bind(t, "77078"));
                                            return e => (0, n.jsx)(A, {
                                                ...e,
                                                header: H.default.Messages.GUILD_PRODUCT_CANCEL_ATTACHMENTS_CONFIRMATION_HEADER,
                                                confirmText: H.default.Messages.REMOVE,
                                                cancelText: H.default.Messages.CANCEL,
                                                onConfirm: Ak,
                                                children: (0, n.jsx)(f.Text, {
                                                    variant: "text-md/normal",
                                                    children: H.default.Messages.GUILD_PRODUCT_CANCEL_ATTACHMENTS_CONFIRMATION_BODY
                                                })
                                            })
                                        }) : Ak()
                                    },
                                    disabled: A_
                                })]
                            }), (0, n.jsx)("div", {
                                className: k.footerActionRightButtons,
                                children: Ai ? (0, n.jsx)(f.Button, {
                                    color: f.Button.Colors.PRIMARY,
                                    disabled: !A1,
                                    submitting: AX,
                                    onClick: () => {
                                        d(A1, "cannot save changes for published product without adding all fields"), Aw(l.UPDATE_PUBLISH), A3(AJ)
                                    },
                                    children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_SAVE_CHANGES_BUTTON
                                }) : (0, n.jsx)(n.Fragment, {
                                    children: (0, n.jsx)(f.Button, {
                                        color: f.Button.Colors.PRIMARY,
                                        disabled: !A0,
                                        submitting: AX,
                                        onClick: () => {
                                            d(A0, "cannot save changes without name or price tier"), Aw(l.DRAFT), A3(AJ)
                                        },
                                        children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_SAVE_DRAFT_BUTTON
                                    })
                                })
                            })]
                        })
                    }), (0, n.jsx)(C.default, {
                        component: "div",
                        className: k.successNoticeContainer,
                        children: A6
                    })]
                })
            }

            function Aa(A) {
                var e;
                return (0, n.jsx)(S.GuildProductAttachmentManagerContextProvider, {
                    guildId: A.guildId,
                    editSkuId: null !== (e = A.productId) && void 0 !== e ? e : void 0,
                    onFileSizeError: () => (0, p.default)(Q.MAX_ATTACHMENT_UPLOAD_FILESIZE_BYTES),
                    children: (0, n.jsx)(At, {
                        ...A
                    })
                })
            }(a = l || (l = {})).DRAFT = "draft", a.PUBLISH = "publish", a.UPDATE_PUBLISH = "update_publish", a.UNPUBLISH = "unpublish"
        },
        850861: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return C
                }
            });
            var a = t("37983"),
                l = t("884691"),
                n = t("414456"),
                s = t.n(n),
                r = t("77078"),
                o = t("476765"),
                i = t("952479"),
                d = t("867544"),
                u = t("782340"),
                c = t("972623");

            function C(A) {
                let {
                    disabled: e = !1,
                    disabledTooltip: t,
                    published: n,
                    submitting: C = !1,
                    onClick: f
                } = A, T = (0, o.useUID)(), [g, U] = l.useState(n);
                return l.useEffect(() => {
                    U(A => A || n)
                }, [n]), (0, a.jsxs)("div", {
                    className: s({
                        [c.publishable]: !e && !n,
                        [c.wasEverPublished]: g
                    }, c.container),
                    children: [(0, a.jsxs)("div", {
                        className: c.explanationColumn,
                        children: [(0, a.jsx)(r.Heading, {
                            variant: "text-sm/semibold",
                            color: "header-primary",
                            children: n ? u.default.Messages.GUILD_PRODUCT_UNPUBLISH_TITLE : u.default.Messages.GUILD_PRODUCT_PUBLISH_TITLE
                        }), (0, a.jsx)(r.Text, {
                            id: T,
                            variant: "text-sm/normal",
                            color: "text-normal",
                            children: n ? u.default.Messages.GUILD_PRODUCT_UNPUBLISH_DESCRIPTION : u.default.Messages.GUILD_PRODUCT_PUBLISH_DESCRIPTION
                        })]
                    }), (0, a.jsx)(r.Tooltip, {
                        text: e ? t : void 0,
                        children: A => (0, a.jsxs)(r.Button, {
                            ...A,
                            className: s(c.button, {
                                [c.wasEverPublished]: g,
                                [c.publishButton]: !n,
                                [c.disabledPublishButton]: e
                            }),
                            innerClassName: c.buttonContents,
                            color: n ? r.Button.Colors.RED : r.Button.Colors.CUSTOM,
                            "aria-describedby": T,
                            "aria-disabled": e,
                            grow: !1,
                            onClick: e ? void 0 : f,
                            submitting: C,
                            children: [n ? u.default.Messages.GUILD_PRODUCT_EDIT_MODAL_UNPUBLISH_BUTTON : u.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PUBLISH_BUTTON, n ? (0, a.jsx)(d.default, {
                                className: c.buttonIcon,
                                color: "currentColor",
                                foregroundColor: "currentColor"
                            }) : (0, a.jsx)(i.default, {
                                className: c.buttonIcon
                            })]
                        })
                    })]
                })
            }
        },
        570114: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                getInitialNewRoleParams: function() {
                    return h
                },
                WarningIcon: function() {
                    return p
                },
                default: function() {
                    return N
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("627445"),
                n = t.n(l),
                s = t("509043"),
                r = t("65597"),
                o = t("77078"),
                i = t("305961"),
                d = t("191814"),
                u = t("945330"),
                c = t("152224"),
                C = t("228220"),
                f = t("204203"),
                T = t("423487"),
                g = t("373996"),
                U = t("49111"),
                I = t("782340"),
                m = t("60957");

            function h() {
                return {
                    name: "",
                    color: U.DEFAULT_ROLE_COLOR
                }
            }

            function E(A) {
                let e, {
                    onRemove: t,
                    role: l
                } = A;
                return e = null != l ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(o.HiddenVisually, {
                        children: I.default.Messages.GUILD_PRODUCT_SETTINGS_ROLE_COLOR_ARIA.format({
                            color: (0, s.int2hex)(l.color)
                        })
                    }), (0, a.jsx)("div", {
                        className: m.attachedRoleColor,
                        style: {
                            backgroundColor: (0, s.int2hex)(l.color)
                        }
                    }), (0, a.jsx)(d.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-normal",
                        children: l.name
                    }), null != t && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(d.default, {
                            size: 12,
                            horizontal: !0
                        }), (0, a.jsx)(o.Clickable, {
                            "aria-label": I.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ATTACHED_ROLE_ARIA,
                            onClick: t,
                            className: m.attachedRoleClose,
                            children: (0, a.jsx)(u.default, {
                                width: 16,
                                height: 16,
                                className: m.attachedRoleCloseIcon
                            })
                        })]
                    })]
                }) : (0, a.jsx)(o.Spinner, {
                    type: o.Spinner.Type.PULSING_ELLIPSIS
                }), (0, a.jsx)("div", {
                    className: m.attachedRoleContainer,
                    children: e
                })
            }

            function p() {
                return (0, a.jsx)(T.default, {
                    className: m.warningIcon,
                    width: 16,
                    height: 16
                })
            }

            function q(A) {
                let {
                    roleName: e
                } = A;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: I.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_BODY.format({
                            roleName: e,
                            emphasisHook: A => (0, a.jsx)(o.Text, {
                                tag: "span",
                                variant: "text-md/semibold",
                                color: "text-normal",
                                children: A
                            })
                        })
                    }), (0, a.jsxs)(o.Heading, {
                        className: m.detachWarningHeading,
                        variant: "text-md/medium",
                        color: "text-normal",
                        children: [(0, a.jsx)(c.default, {
                            height: 18,
                            width: 18
                        }), (0, a.jsx)(d.default, {
                            horizontal: !0,
                            size: 8
                        }), I.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_1_TITLE]
                    }), (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: I.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_1_DETAIL
                    }), (0, a.jsxs)(o.Heading, {
                        className: m.detachWarningHeading,
                        variant: "text-md/medium",
                        color: "text-normal",
                        children: [(0, a.jsx)(C.default, {
                            height: 18,
                            width: 18
                        }), (0, a.jsx)(d.default, {
                            horizontal: !0,
                            size: 8
                        }), I.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_2_TITLE]
                    }), (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: I.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_2_DETAIL
                    })]
                })
            }

            function N(A) {
                let {
                    newRoleParams: e,
                    setNewRoleParams: l,
                    guildId: s,
                    productId: u,
                    listingRoleId: c,
                    error: C
                } = A, T = (0, r.default)([i.default], () => {
                    if (null != c) {
                        let A = i.default.getGuild(s);
                        return null == A ? void 0 : A.roles[c]
                    }
                }, [c, s]);
                return null === e ? (0, a.jsxs)(o.FormItem, {
                    title: (0, a.jsxs)("div", {
                        className: m.warningTitle,
                        children: [(0, a.jsx)(p, {}), (0, a.jsx)(d.default, {
                            horizontal: !0,
                            size: 4
                        }), I.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_HEADER]
                    }),
                    tag: "label",
                    error: C,
                    titleClassName: m.roleHeader,
                    children: [(0, a.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: I.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_DESCRIPTION
                    }), (0, a.jsx)(d.default, {
                        size: 8
                    }), (0, a.jsxs)("div", {
                        className: m.reattachRoleRow,
                        children: [(0, a.jsx)(E, {
                            role: T,
                            onRemove: void 0
                        }), (0, a.jsx)(d.default, {
                            horizontal: !0,
                            size: 8
                        }), (0, a.jsxs)(o.Button, {
                            innerClassName: m.restoreDetachedRoleButtonInner,
                            color: o.Button.Colors.PRIMARY,
                            onClick: () => {
                                l(void 0)
                            },
                            children: [(0, a.jsx)(o.Text, {
                                variant: "text-md/normal",
                                color: "none",
                                children: I.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_UNDO_CTA
                            }), (0, a.jsx)(d.default, {
                                horizontal: !0,
                                size: 8
                            }), (0, a.jsx)(f.default, {
                                width: 16,
                                height: 16
                            })]
                        })]
                    })]
                }) : null != c ? (0, a.jsxs)(o.FormItem, {
                    title: I.default.Messages.GUILD_PRODUCT_SETTINGS_ATTACHED_ROLE_HEADER,
                    tag: "label",
                    error: C,
                    titleClassName: m.roleHeader,
                    children: [(0, a.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: I.default.Messages.GUILD_PRODUCT_SETTINGS_ATTACHED_ROLE_DESCRIPTION
                    }), (0, a.jsx)(d.default, {
                        size: 8
                    }), (0, a.jsx)(E, {
                        role: T,
                        onRemove: () => {
                            n(null != u, "productId cannot be null"), n(null != T, "no role attached"), ! function(A) {
                                let {
                                    onConfirm: e,
                                    roleName: l
                                } = A;
                                (0, o.openModalLazy)(async () => {
                                    let {
                                        default: A
                                    } = await t.el("83501").then(t.bind(t, "83501"));
                                    return t => (0, a.jsx)(A, {
                                        title: I.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_TITLE,
                                        body: (0, a.jsx)(q, {
                                            roleName: l
                                        }),
                                        cta: I.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_REMOVE_CTA,
                                        closeLabel: I.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_REMOVE_CLOSE_LABEL,
                                        onConfirm: e,
                                        ...t
                                    })
                                })
                            }({
                                roleName: T.name,
                                onConfirm: () => l(null)
                            })
                        }
                    })]
                }) : (n(null != e, "newRoleParams cannot be null at this point"), (0, a.jsxs)(o.FormItem, {
                    required: !0,
                    title: I.default.Messages.GUILD_PRODUCT_SETTINGS_ADD_ROLE_HEADER,
                    tag: "label",
                    error: C,
                    titleClassName: m.roleHeader,
                    children: [(0, a.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: I.default.Messages.GUILD_PRODUCT_SETTINGS_ADD_ROLE_DESCRIPTION
                    }), (0, a.jsx)(d.default, {
                        size: 8
                    }), (0, a.jsx)(g.default, {
                        newRoleParams: e,
                        setNewRoleParams: l
                    })]
                }))
            }
        },
        373996: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return g
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("627445"),
                n = t.n(l),
                s = t("509043"),
                r = t("77078"),
                o = t("973262"),
                i = t("191814"),
                d = t("476765"),
                u = t("422403"),
                c = t("49111"),
                C = t("782340"),
                f = t("513706");
            let T = (0, d.uid)();

            function g(A) {
                let {
                    newRoleParams: e,
                    setNewRoleParams: t
                } = A, {
                    name: l,
                    color: d
                } = e, g = A => t(e => (n(null != e, "newRoleParams should be defined"), {
                    ...e,
                    color: A
                }));
                return (0, a.jsxs)("div", {
                    className: f.roleInputContainer,
                    children: [(0, a.jsx)(r.TextInput, {
                        autoFocus: !0,
                        value: l,
                        onChange: A => t(e => (n(null != e, "newRoleParams should be defined"), {
                            ...e,
                            name: A
                        })),
                        id: T,
                        placeholder: C.default.Messages.GUILD_PRODUCT_SETTINGS_CREATE_ROLE_NAME_PLACEHOLDER,
                        maxLength: c.ROLE_NAME_MAX_LENGTH,
                        inputClassName: f.input
                    }), (0, a.jsxs)("div", {
                        className: f.roleColorContainer,
                        children: [(0, a.jsx)(r.HiddenVisually, {
                            children: C.default.Messages.GUILD_PRODUCT_SETTINGS_SELECT_ROLE_COLOR_ARIA.format({
                                color: (0, s.int2hex)(d)
                            })
                        }), (0, a.jsx)("div", {
                            className: f.roleColorPreview,
                            style: {
                                backgroundColor: (0, s.int2hex)(d)
                            }
                        }), (0, a.jsx)(i.default, {
                            size: 8,
                            horizontal: !0
                        }), (0, a.jsx)(r.Popout, {
                            renderPopout: A => (0, a.jsx)(o.CustomColorPicker, {
                                ...A,
                                value: d,
                                onChange: g
                            }),
                            children: A => (0, a.jsx)(r.Clickable, {
                                ...A,
                                tag: "span",
                                "aria-label": C.default.Messages.GUILD_PRODUCT_SETTINGS_CREATE_ROLE_SELECT_COLOR_ARIA,
                                className: f.dropperIconContainer,
                                children: (0, a.jsx)(u.default, {
                                    width: 16,
                                    height: 16,
                                    className: f.dropperIcon
                                })
                            })
                        })]
                    })]
                })
            }
        },
        424960: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return s
                }
            });
            var a = t("336522"),
                l = t("254490"),
                n = t("782340");

            function s(A) {
                (0, a.openUploadError)({
                    title: n.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: n.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                        maxSize: (0, l.sizeString)(A)
                    })
                })
            }
        }
    }
]);
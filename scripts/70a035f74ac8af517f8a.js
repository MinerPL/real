(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["27545"], {
        741161: function(e, t, a) {
            "use strict";
            e.exports = a.p + "58bf98682d30fb823326.svg"
        },
        687444: function(e, t, a) {
            "use strict";
            e.exports = a.p + "090a89c5314322102655.svg"
        },
        869586: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                BlindID: function() {
                    return i
                }
            });
            var n = a("605250"),
                l = a("446825").Buffer;
            let o = new n.default("BlindID");
            class i {
                async blind(e) {
                    let t = await this.key,
                        a = new BigUint64Array([BigInt(e)]),
                        n = await crypto.subtle.sign("HMAC", t, a.buffer);
                    return i.truncate(n).toString()
                }
                static truncate(e) {
                    let t = new Uint8Array(e);
                    return t.length < 8 ? (o.error("Unexpected byte length ".concat(t.length)), BigInt(0)) : BigInt(t[0]) | BigInt(t[1]) << BigInt(8) | BigInt(t[2]) << BigInt(16) | BigInt(t[3]) << BigInt(24) | BigInt(t[4]) << BigInt(32) | BigInt(t[5]) << BigInt(40) | BigInt(t[6]) << BigInt(48) | BigInt(t[7]) << BigInt(56)
                }
                constructor(e) {
                    let t = l.from(e, "hex");
                    this.key = crypto.subtle.importKey("raw", t, {
                        name: "HMAC",
                        hash: "SHA-512"
                    }, !1, ["sign"])
                }
            }
        },
        890747: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                uploadRtcLogFiles: function() {
                    return d
                }
            });
            var n = a("811022"),
                l = a("872717"),
                o = a("448993"),
                i = a("42887"),
                r = a("254490"),
                s = a("49671"),
                c = a("49111");
            let u = new n.default("uploadRtcLogFiles");
            async function d(e, t) {
                let a;
                if (null == s.default.fileManager.readLogFiles) throw new o.UploadVoiceDebugLogsError(o.UploadErrorCodes.GENERAL);
                let n = [];
                try {
                    n = (n = await s.default.fileManager.readLogFiles(e)).map(e => (0, r.transformNativeFile)(e, "application/octet-stream"))
                } catch (e) {
                    throw u.error("uploadDebugFiles: read error '".concat(e, "'")), new o.UploadVoiceDebugLogsError(o.UploadErrorCodes.READ)
                }
                if (0 === n.length) throw new o.UploadVoiceDebugLogsError(o.UploadErrorCodes.NO_FILE);
                try {
                    let e = {
                        extraInfo: t,
                        mediaEngineState: i.default.getState()
                    };
                    a = await l.default.post({
                        url: c.Endpoints.DEBUG_LOGS(c.DebugLogCategory.RTC),
                        attachments: [...n.map(e => ({
                            name: e.name,
                            file: e,
                            filename: e.name
                        })), {
                            name: "media_engine_state.json",
                            filename: "media_engine_state.json",
                            file: new Blob([JSON.stringify(e, void 0, 2)])
                        }]
                    })
                } catch (e) {
                    if (429 === e.status) throw new o.UploadVoiceDebugLogsError(o.UploadErrorCodes.PROGRESS);
                    throw u.error("Debug log upload error: status: ".concat(e.status, ", message: ").concat(e.message)), new o.UploadVoiceDebugLogsError(o.UploadErrorCodes.UPLOAD)
                }
                let d = n.length + 1;
                if ("success_count" in a.body && a.body.success_count !== d) throw u.error("Debug log upload: stored files ".concat(a.body.success_count, " !== ").concat(d)), new o.UploadVoiceDebugLogsError(o.UploadErrorCodes.GENERAL);
                if ("store_success" in a.body && !a.body.store_success || "id_match" in a.body && !a.body.id_match || "all_success" in a.body && !a.body.all_success) throw u.error("Debug log upload: store_success: ".concat(a.body.store_success, " / ") + "id_match: ".concat(a.body.id_match, " / ") + "all_success: ".concat(a.body.all_success)), new o.UploadVoiceDebugLogsError(o.UploadErrorCodes.GENERAL)
            }
        },
        367632: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                fetchBugReportConfig: function() {
                    return c
                },
                getFeatureId: function() {
                    return u
                },
                getPriorities: function() {
                    return d
                },
                submitReport: function() {
                    return m
                }
            });
            var n = a("759843"),
                l = a("872717"),
                o = a("147746");
            a("773336");
            var i = a("840707"),
                r = a("49111"),
                s = a("782340");
            async function c() {
                let e = await l.default.get({
                    url: r.Endpoints.BUG_REPORTS
                });
                return e.body
            }

            function u(e) {
                var t, a;
                return null !== (a = null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : "" + (null == e ? void 0 : e.squad)) && void 0 !== a ? a : ""
            }

            function d() {
                return [{
                    title: s.default.Messages.BUG_REPORT_PRIORITY_CRITICAL_TITLE,
                    description: s.default.Messages.BUG_REPORT_PRIORITY_CRITICAL_DESCRIPTION.format(),
                    emoji: "801497159479722084",
                    value: 0
                }, {
                    title: s.default.Messages.BUG_REPORT_PRIORITY_HIGH_TITLE,
                    description: s.default.Messages.BUG_REPORT_PRIORITY_HIGH_DESCRIPTION.format(),
                    emoji: "410336837563973632",
                    value: 1
                }, {
                    title: s.default.Messages.BUG_REPORT_PRIORITY_LOW_TITLE,
                    description: s.default.Messages.BUG_REPORT_PRIORITY_LOW_DESCRIPTION.format(),
                    emoji: "841420679643529296",
                    value: 2
                }, {
                    title: s.default.Messages.BUG_REPORT_PRIORITY_VERY_LOW_TITLE,
                    description: s.default.Messages.BUG_REPORT_PRIORITY_VERY_LOW_DESCRIPTION.format(),
                    emoji: "827645852352512021",
                    value: 3
                }]
            }
            async function m(e, t, a) {
                var l, s;
                let c = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                    u = [{
                        name: "name",
                        value: e.name
                    }, {
                        name: "priority",
                        value: "".concat(e.priority)
                    }, {
                        name: "override_platform_information",
                        value: "".concat(t.overridePlatformInformation)
                    }];
                "" !== e.description && u.push({
                    name: "description",
                    value: e.description
                }), "" !== e.url && u.push({
                    name: "external_url",
                    value: e.url
                });
                let d = null === (l = e.feature) || void 0 === l ? void 0 : l.asana_inbox_id;
                null != d && "" !== d && u.push({
                    name: "asana_inbox_id",
                    value: "".concat(d)
                });
                let m = null === (s = e.feature) || void 0 === s ? void 0 : s.name;
                null != m && "" !== m && u.push({
                    name: "feature_name",
                    value: m
                }), t.overridePlatformInformation && (u.push({
                    name: "device",
                    value: t.device
                }), u.push({
                    name: "os",
                    value: t.operatingSystem
                }), u.push({
                    name: "os_version",
                    value: t.operatingSystemVersion
                }), u.push({
                    name: "client_version",
                    value: t.clientVersion
                }), u.push({
                    name: "client_build_number",
                    value: t.clientBuildNumber
                }), u.push({
                    name: "release_channel",
                    value: window.GLOBAL_ENV.RELEASE_CHANNEL
                }), u.push({
                    name: "locale",
                    value: t.locale
                })), c && (0, o.uploadDebugLogFiles)(r.DebugLogCategory.WEB_APP);
                try {
                    return await i.default.post({
                        url: r.Endpoints.BUG_REPORTS,
                        attachments: a,
                        fields: u,
                        trackedActionData: {
                            event: n.NetworkActionNames.BUG_REPORT_SUBMIT,
                            properties: {
                                priority: e.priority,
                                asana_inbox_id: d
                            }
                        }
                    })
                } catch (e) {
                    return e
                }
            }
        },
        374159: function(e, t, a) {
            "use strict";

            function n(e) {
                var t;
                return e.map((e, a) => {
                    var n;
                    return {
                        file: e.file,
                        name: null !== (t = e.id) && void 0 !== t ? t : "attachment_".concat(a),
                        filename: null === (n = e.file) || void 0 === n ? void 0 : n.name
                    }
                })
            }
            a.r(t), a.d(t, {
                getAttachments: function() {
                    return n
                }
            })
        },
        323518: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return L
                }
            });
            var n = a("37983"),
                l = a("884691"),
                o = a("748820"),
                i = a("446674"),
                r = a("819855"),
                s = a("77078"),
                c = a("371642"),
                u = a("966724"),
                d = a("9560"),
                m = a("761354"),
                g = a("161778"),
                f = a("228220"),
                p = a("258078"),
                h = a("149279"),
                _ = a("315102"),
                v = a("773336"),
                E = a("367632"),
                I = a("374159"),
                R = a("782340"),
                x = a("301410"),
                T = a("741161"),
                C = a("687444");
            let S = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map(e => ({
                label: e,
                value: e
            }));

            function L(e) {
                var t, L, N, b, O, y;
                let {
                    transitionState: j,
                    onClose: B
                } = e, U = l.useRef(null), w = l.useRef(null), [P, F] = l.useState(""), [M, D] = l.useState(""), [A, G] = l.useState(), [V, k] = l.useState(""), [H, Y] = l.useState([]), [W, K] = l.useState(), [z, J] = l.useState(), [X, Q] = l.useState(!1), [$, q] = l.useState(""), [Z, ee] = l.useState(function(e) {
                    switch (e) {
                        case "windows":
                            return "Windows";
                        case "macos":
                            return "Mac OS X";
                        case "linux":
                            return "Linux"
                    }
                    return ""
                }((0, v.getOS)())), [et, ea] = l.useState(""), [en, el] = l.useState(""), [eo, ei] = l.useState(""), [er, es] = l.useState(""), [ec, eu] = l.useState(!1), [ed, em] = l.useState(!1), [eg, ef] = l.useState(!1), ep = () => {
                    null == B || B()
                }, eh = e => {
                    Y(H.filter(t => t.id !== e))
                };
                async function e_() {
                    var e;
                    if (ef(!1), "" === P || null == A) {
                        eu(!0);
                        return
                    }
                    let t = null == W ? void 0 : null === (e = W.features) || void 0 === e ? void 0 : e.find(e => (0, E.getFeatureId)(e) === z);
                    em(!0), eu(!1);
                    let l = (0, I.getAttachments)(H.map(e => {
                            let {
                                item: t
                            } = e;
                            return t
                        })),
                        o = !0 === X ? {
                            overridePlatformInformation: X,
                            device: $,
                            operatingSystem: Z,
                            operatingSystemVersion: et,
                            clientVersion: en,
                            clientBuildNumber: eo,
                            locale: er
                        } : {
                            overridePlatformInformation: X
                        },
                        i = await (0, E.submitReport)({
                            name: P,
                            description: M,
                            priority: A,
                            feature: t,
                            url: V
                        }, o, l).catch(() => ef(!0));
                    em(!1), null != i && i.ok ? (window.open(i.body.permalink_url, "_blank"), ep(), (0, s.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("223993").then(a.bind(a, "223993"));
                        return t => (0, n.jsx)(e, {
                            ...t,
                            asanaTask: i.body
                        })
                    })) : ef(!0)
                }
                l.useEffect(() => {
                    (async function e() {
                        let e = await (0, E.fetchBugReportConfig)();
                        K(e)
                    })()
                }, []), l.useEffect(() => {
                    if (H.length > 0) {
                        var e;
                        null === (e = w.current) || void 0 === e || e.scrollIntoView({
                            behavior: "smooth",
                            block: "end"
                        })
                    }
                }, [H]);
                let ev = (0, i.useStateFromStores)([g.default], () => g.default.theme),
                    eE = (0, r.isThemeDark)(ev) ? T : C;
                return (0, n.jsx)(s.ModalRoot, {
                    className: x.modalRoot,
                    transitionState: j,
                    "aria-label": R.default.Messages.SUBMIT_BUG,
                    children: (0, n.jsx)(s.ModalContent, {
                        className: x.modalContent,
                        paddingFix: !1,
                        children: (0, n.jsx)("div", {
                            className: x.container,
                            children: (0, n.jsx)(s.HeadingLevel, {
                                forceLevel: 1,
                                component: (0, n.jsx)("div", {
                                    className: x.sidebarContainer,
                                    children: (0, n.jsx)(p.default, {
                                        strong: !0,
                                        color: p.default.Colors.HEADER_PRIMARY,
                                        size: p.default.Sizes.SIZE_24,
                                        children: (0, n.jsx)(s.H, {
                                            children: R.default.Messages.BUG_REPORT_TITLE
                                        })
                                    })
                                }),
                                children: (0, n.jsxs)("div", {
                                    className: x.contentContainer,
                                    children: [(0, n.jsx)("img", {
                                        className: x.contentIcon,
                                        alt: "",
                                        src: eE
                                    }), (0, n.jsxs)("form", {
                                        className: x.form,
                                        onSubmit: e_,
                                        children: [(0, n.jsx)(s.FormItem, {
                                            error: ec && "" === P ? R.default.Messages.REQUIRED : null,
                                            title: R.default.Messages.BUG_REPORT_NAME,
                                            className: x.formInput,
                                            children: (0, n.jsx)(s.TextInput, {
                                                placeholder: "Something is broken on this screen.",
                                                type: "text",
                                                value: P,
                                                maxLength: 100,
                                                onChange: F
                                            })
                                        }), (0, n.jsxs)(s.FormItem, {
                                            title: R.default.Messages.BUG_REPORT_DESCRIPTION,
                                            className: x.formInput,
                                            children: [(0, n.jsx)(s.TextArea, {
                                                placeholder: "What did you expect to see?",
                                                value: M,
                                                onChange: D
                                            }), (0, n.jsx)(s.Text, {
                                                variant: "text-sm/normal",
                                                color: "info-help-text",
                                                children: "You can add additional information/media on the ticket after submitting"
                                            })]
                                        }), (0, n.jsx)(s.FormItem, {
                                            error: ec && void 0 === A ? R.default.Messages.REQUIRED : null,
                                            title: R.default.Messages.BUG_REPORT_PRIORITY,
                                            className: x.formInput,
                                            children: (0, n.jsx)(s.SingleSelect, {
                                                renderOptionLabel: e => (function(e) {
                                                    let t = e.priority;
                                                    return (0, n.jsxs)("div", {
                                                        className: x.formPriorityImageContainer,
                                                        children: [(0, n.jsxs)("div", {
                                                            className: x.formPriorityTitleContainer,
                                                            children: [(0, n.jsx)("img", {
                                                                alt: "",
                                                                className: x.formPriorityImage,
                                                                src: (0, _.getEmojiURL)({
                                                                    id: t.emoji,
                                                                    animated: !0,
                                                                    size: 48
                                                                })
                                                            }), (0, n.jsx)(s.Text, {
                                                                color: "header-primary",
                                                                variant: "text-sm/semibold",
                                                                className: x.formPriorityTitle,
                                                                children: t.title
                                                            })]
                                                        }), (0, n.jsx)(s.Text, {
                                                            color: "header-secondary",
                                                            variant: "text-xs/normal",
                                                            className: x.formPriorityDescription,
                                                            children: t.description
                                                        })]
                                                    })
                                                })(e),
                                                onChange: G,
                                                options: (0, E.getPriorities)().map(e => ({
                                                    priority: e,
                                                    value: e.value,
                                                    label: e.title
                                                })),
                                                value: A,
                                                maxVisibleItems: 3,
                                                closeOnSelect: !0
                                            })
                                        }), (0, n.jsx)(s.FormItem, {
                                            title: R.default.Messages.BUG_REPORT_FEATURE_AREA,
                                            className: x.formInput,
                                            children: (0, n.jsx)(s.SearchableSelect, {
                                                value: z,
                                                options: null !== (y = null == (t = W) ? void 0 : null === (b = t.features) || void 0 === b ? void 0 : null === (N = b.filter(e => "" !== (0, E.getFeatureId)(e))) || void 0 === N ? void 0 : null === (L = N.map(e => ({
                                                    label: null !== (O = e.name) && void 0 !== O ? O : "",
                                                    value: (0, E.getFeatureId)(e)
                                                }))) || void 0 === L ? void 0 : L.sort((e, t) => e.label.localeCompare(t.label))) && void 0 !== y ? y : [],
                                                isDisabled: null == W,
                                                onChange: e => J(e)
                                            })
                                        }), (0, n.jsx)(s.FormItem, {
                                            title: R.default.Messages.BUG_REPORT_URL,
                                            className: x.formInput,
                                            children: (0, n.jsx)(s.TextInput, {
                                                placeholder: R.default.Messages.BUG_REPORT_EXTERNAL_SOURCE,
                                                type: "text",
                                                value: V,
                                                maxLength: 5e3,
                                                onChange: k
                                            })
                                        }), (0, n.jsx)(s.FormItem, {
                                            className: x.formInput,
                                            children: (0, n.jsx)(s.Checkbox, {
                                                value: X,
                                                onChange: (e, t) => Q(t),
                                                children: (0, n.jsx)(s.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "info-help-text",
                                                    children: R.default.Messages.BUG_REPORT_OVERRIDE_PLATFORM_INFORMATION
                                                })
                                            })
                                        }), X ? (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsx)(s.FormItem, {
                                                title: R.default.Messages.BUG_REPORT_DEVICE,
                                                className: x.formInput,
                                                children: (0, n.jsx)(s.TextInput, {
                                                    placeholder: "Device",
                                                    value: $,
                                                    onChange: e => q(e)
                                                })
                                            }), (0, n.jsx)(s.FormItem, {
                                                title: R.default.Messages.BUG_REPORT_OS,
                                                className: x.formInput,
                                                children: (0, n.jsx)(s.SingleSelect, {
                                                    value: Z,
                                                    options: S,
                                                    onChange: e => ee(e)
                                                })
                                            }), (0, n.jsx)(s.FormItem, {
                                                title: R.default.Messages.BUG_REPORT_OS_VERSION,
                                                className: x.formInput,
                                                children: (0, n.jsx)(s.TextInput, {
                                                    placeholder: "Operating System Version",
                                                    value: et,
                                                    onChange: e => ea(e)
                                                })
                                            }), (0, n.jsx)(s.FormItem, {
                                                title: R.default.Messages.BUG_REPORT_CLIENT_VERSION,
                                                className: x.formInput,
                                                children: (0, n.jsx)(s.TextInput, {
                                                    placeholder: "Client Version",
                                                    value: en,
                                                    onChange: e => el(e)
                                                })
                                            }), (0, n.jsx)(s.FormItem, {
                                                title: R.default.Messages.BUG_REPORT_CLIENT_BUILD_NUMBER,
                                                className: x.formInput,
                                                children: (0, n.jsx)(s.TextInput, {
                                                    placeholder: "Client Build Number",
                                                    value: eo,
                                                    onChange: e => ei(e)
                                                })
                                            }), (0, n.jsx)(s.FormItem, {
                                                title: R.default.Messages.BUG_REPORT_LOCALE,
                                                className: x.formInput,
                                                children: (0, n.jsx)(s.TextInput, {
                                                    placeholder: "Locale",
                                                    value: er,
                                                    onChange: e => es(e)
                                                })
                                            })]
                                        }) : null, (0, n.jsxs)(s.Button, {
                                            className: x.uploadButton,
                                            children: [R.default.Messages.BUG_REPORT_ADD_ATTACHMENTS, (0, n.jsx)(c.default, {
                                                ref: U,
                                                onChange: e => {
                                                    var t, a;
                                                    if ((null === (a = e.currentTarget) || void 0 === a ? void 0 : null === (t = a.files) || void 0 === t ? void 0 : t[0]) != null) {
                                                        let t = Array.from(e.currentTarget.files).map(e => new u.default({
                                                            id: (0, o.v4)(),
                                                            file: e,
                                                            platform: u.UploadPlatform.WEB
                                                        }));
                                                        Y([...H, ...t])
                                                    }
                                                },
                                                multiple: !0
                                            })]
                                        }), H.length > 0 ? (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsx)("div", {
                                                className: x.imageOptionsContainer,
                                                children: (0, n.jsx)(s.FormTitle, {
                                                    children: "Preview"
                                                })
                                            }), (0, n.jsx)("div", {
                                                ref: w,
                                                className: x.attachmentsGrid,
                                                children: H.length > 0 && H.map(e => (0, n.jsxs)("div", {
                                                    className: x.attachmentsGridItem,
                                                    children: [(0, n.jsx)(s.Text, {
                                                        variant: "text-sm/normal",
                                                        children: e.filename
                                                    }), (0, n.jsxs)("div", {
                                                        className: x.attachmentContainer,
                                                        children: [(0, n.jsx)(m.UploadIcon, {
                                                            upload: e
                                                        }), (0, n.jsx)("div", {
                                                            className: x.toolBar,
                                                            children: (0, n.jsx)(h.default, {
                                                                children: (0, n.jsx)(d.default, {
                                                                    tooltip: R.default.Messages.ATTACHMENT_UTILITIES_REMOVE,
                                                                    onClick: () => eh(e.id),
                                                                    dangerous: !0,
                                                                    children: (0, n.jsx)(f.default, {})
                                                                })
                                                            })
                                                        })]
                                                    })]
                                                }, e.id))
                                            })]
                                        }) : null, eg ? (0, n.jsx)(s.Text, {
                                            color: "text-danger",
                                            variant: "text-sm/normal",
                                            children: "Something went wrong, try again!"
                                        }) : null]
                                    }), (0, n.jsxs)(s.ModalFooter, {
                                        className: x.submitContainer,
                                        children: [(0, n.jsx)(s.Button, {
                                            className: x.formButton,
                                            look: s.ButtonLooks.BLANK,
                                            onClick: ep,
                                            children: (0, n.jsx)(s.Text, {
                                                variant: "text-sm/normal",
                                                children: R.default.Messages.CANCEL
                                            })
                                        }), (0, n.jsx)(s.Button, {
                                            submitting: ed,
                                            className: x.formButton,
                                            onClick: e_,
                                            children: "Submit and Open Report"
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                })
            }
        },
        147746: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                uploadDebugLogFiles: function() {
                    return p
                },
                getBlindIds: function() {
                    return _
                },
                uploadCallscopeLogs: function() {
                    return v
                },
                uploadCallscopeLogFiles: function() {
                    return E
                }
            });
            var n = a("872717"),
                l = a("869586"),
                o = a("49671"),
                i = a("890747"),
                r = a("254490"),
                s = a("821316"),
                c = a("605250"),
                u = a("836403"),
                d = a("825287"),
                m = a("929331"),
                g = a("49111");
            let f = new c.default("DebugUploadManager");
            async function p(e, t) {
                await I(e), await (0, i.uploadRtcLogFiles)(3670016, t)
            }
            class h {
                static getTrimmedFilename(e) {
                    let t = /^channel\.\d+\.(.+)$/.exec(e);
                    return null == t || t.length < 2 || null == t[1] ? "unknown" : t[1]
                }
                static getChannelId(e) {
                    let t = /channel\.(\d+)\..+(?:tsi|tsd)$/.exec(e);
                    return null == t || t.length < 2 || null == t[1] ? "unknown" : t[1]
                }
            }
            async function _(e, t, a) {
                let n = new l.BlindID(a),
                    o = await n.blind(e),
                    i = await n.blind(t);
                return {
                    blindChannelId: o,
                    blindUserId: i
                }
            }
            async function v(e, t, a, n) {
                var l, i;
                if (!__OVERLAY__) {
                    if ((null === (i = o.default) || void 0 === i ? void 0 : null === (l = i.fileManager) || void 0 === l ? void 0 : l.getCallscopeLogFiles) == null) {
                        f.error("uploadCallscopeLogs: Upload RTC logs failed because native is out of date (getCallscopeLogFiles).");
                        return
                    }
                    if (!("crypto" in window)) {
                        f.error("uploadCallscopeLogs: Upload RTC logs failed because crypto is not supported.");
                        return
                    }
                    try {
                        let {
                            blindChannelId: l,
                            blindUserId: i
                        } = await _(e, t, a), r = "channel blind(".concat(e, "): ").concat(l, ", user blind(").concat(t, "): ").concat(i);
                        f.info("uploadCallscopeLogs: Uploading callscope logs for context: ".concat(n, ", ").concat(r));
                        let s = await o.default.fileManager.getCallscopeLogFiles(l);
                        await E(i, s)
                    } catch (e) {
                        f.error("uploadCallscopeLogs: Error uploading logs ".concat(null == e ? void 0 : e.text), e)
                    }
                }
            }
            async function E(e, t) {
                try {
                    if (0 === t.length) {
                        f.error("uploadCallscopeLogFiles: No files found.");
                        return
                    }
                    for (let a of t.map(e => r.transformNativeFile(e, "application/octet-stream"))) {
                        f.log("uploadCallscopeLogFiles: Uploading ".concat(a.name));
                        let t = h.getChannelId(a.name);
                        try {
                            let l = await n.default.post({
                                    url: g.Endpoints.CALLSCOPE_LOGS(t, e, h.getTrimmedFilename(a.name)),
                                    headers: {
                                        "Content-Type": "application/octet-stream"
                                    },
                                    body: a
                                }),
                                o = l.status >= 200 && l.status <= 299;
                            !o && f.error("uploadCallscopeLogFiles: Failed to upload ".concat(a.name, " with status ").concat(l.status, ", ").concat(l.text))
                        } catch (e) {
                            f.error("uploadCallscopeLogFiles: Error uploading file ".concat(a.name, " ").concat(null == e ? void 0 : e.text), e)
                        }
                    }
                } catch (e) {
                    f.error("uploadCallscopeLogFiles: Error uploading logs ".concat(null == e ? void 0 : e.text), e)
                }
            }
            async function I(e) {
                try {
                    let t = s.stringify(),
                        a = "",
                        l = await (0, u.getPushNotificationLogs)().then(e => (0, u.serializePushNotificationLogs)(e)),
                        o = t.length + a.length + l.length;
                    if (o > 9437184) {
                        let e = 1 - 9437184 / o;
                        t = t.slice(t.length - Math.floor(t.length * e)), a = a.slice(a.length - Math.floor(a.length * e)), l = l.slice(l.length - Math.floor(l.length * e))
                    }
                    let i = null,
                        r = "\n    ".concat((0, m.default)(i), "\n\n    ").concat(JSON.stringify((0, d.default)(), void 0, 2), "\n    Logs:\n    ").concat(t, "\n\n    System logs:\n    ").concat(a, "\n\n    Push Notifications:\n    ").concat(l, "\n    ");
                    s.clear();
                    let c = g.Endpoints.DEBUG_LOG(e, "discord_app_logs");
                    await n.default.post({
                        url: c,
                        body: r,
                        retries: 3,
                        headers: {
                            "Content-Type": "text/plain"
                        },
                        oldFormErrors: !0
                    })
                } catch (e) {
                    f.error("uploadAppLogFiles: upload app log files error ".concat(e.message))
                }
            }
        },
        836403: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                serializePushNotificationLogs: function() {
                    return i
                },
                getPushNotificationLogs: function() {
                    return r
                }
            });
            var n = a("95410"),
                l = a("271938"),
                o = a("49111");

            function i(e) {
                if (0 === e.length) return "No logs";
                let t = n.default.get(o.DEVICE_TOKEN),
                    a = n.default.get(o.DEVICE_VOIP_TOKEN),
                    l = null != a ? "Device Voip Token: ".concat(a) : "",
                    i = e.map(e => {
                        let t = "Displayed";
                        return e.silent && (t = "Silent"), "".concat(new Date(e.receivedTimestamp).toISOString(), " [").concat(e.type, "] ").concat(t, " - ").concat(e.title, " - ").concat(e.content, " ")
                    }).join("\n");
                return "".concat(null != t ? "Device Token: ".concat(t) : "", "\n").concat(l, "\n\n").concat(i)
            }
            async function r() {
                let e = l.default.getId(),
                    t = [];
                return t
            }
        },
        825287: function(e, t, a) {
            "use strict";

            function n() {
                return {
                    logsUploaded: new Date().toISOString(),
                    releaseChannel: window.GLOBAL_ENV.RELEASE_CHANNEL,
                    buildNumber: "241782",
                    versionHash: "63a7a2a6684b6abf46568922a9dee7a606a676d4"
                }
            }
            a.r(t), a.d(t, {
                default: function() {
                    return n
                }
            })
        },
        929331: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("917351"),
                l = a.n(n),
                o = a("102053"),
                i = a("487269");

            function r(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return o.default.logGroups.map(a => {
                    var n, o;
                    let {
                        index: r,
                        timestamp: c,
                        logs: u,
                        nativeLogs: d,
                        serverTrace: m
                    } = a, g = 0 === r ? null !== (o = null === (n = l.find(u, e => e.log.indexOf("Logger loaded") >= 0)) || void 0 === n ? void 0 : n.timestamp) && void 0 !== o ? o : e : c, f = function(e, t) {
                        var a, n;
                        let o = (function(e) {
                                let t = [];
                                for (let a = 0; a < e.length; a++) {
                                    let n = e[a],
                                        l = e[a + 1];
                                    null != l && l.log === n.log.replace("Start ", "Finish ") ? (l.log = l.log.replace("Finish ", ""), t.push(l), a++) : t.push(n)
                                }
                                return t
                            })(e).map(e => {
                                let a = null == e.timestamp ? "" : ((e.timestamp - t) / 1e3).toFixed(3),
                                    n = null == e.delta ? "" : String(Math.round(e.delta));
                                return {
                                    totalTime: a,
                                    deltaTime: n,
                                    log: "".concat(e.emoji.length > 0 ? "".concat(e.emoji, " ") : "").concat(e.prefix).concat(e.log, "\n")
                                }
                            }),
                            i = null !== (a = l.max(o.map(e => e.totalTime.length))) && void 0 !== a ? a : 0,
                            r = null !== (n = l.max(o.map(e => e.deltaTime.length))) && void 0 !== n ? n : 0;
                        return o.map(e => {
                            let {
                                totalTime: t,
                                deltaTime: a,
                                log: n
                            } = e;
                            return "".concat(l.padStart(t, i), " ").concat(l.padStart(a, r), " ").concat(n)
                        }).join("")
                    }(function(e, t, a) {
                        e = e.slice();
                        let n = new Set(t.map(s)),
                            l = "",
                            o = [];
                        return t.forEach(t => {
                            let i = s(t),
                                r = 0,
                                c = a || !t.autoGenerated,
                                u = i.startsWith("Start ") && !i.includes("RUN_JS_BUNDLE") && n.has(i.replace("Start ", "Finish ")),
                                d = i.startsWith("Finish ") && !i.includes("RUN_JS_BUNDLE") && n.has(i.replace("Finish ", "Start "));
                            if (d) {
                                l = l.substring(2);
                                let e = o.pop();
                                null != e && (r = t.timestamp - e.timestamp, c = c || r > 5 && ! function(e) {
                                    return ["GET_CONSTANTS", "CONVERT_CONSTANTS"].some(t => e.includes(t))
                                }(i), e.shouldKeep = e.shouldKeep || c)
                            }
                            let m = {
                                emoji: "☕",
                                timestamp: t.timestamp,
                                delta: r > 0 ? r : void 0,
                                prefix: l,
                                log: i,
                                shouldKeep: c
                            };
                            (function(e, t) {
                                let a = 0;
                                for (; a < e.length; a++) {
                                    let {
                                        timestamp: n
                                    } = e[a];
                                    if (null != n && n > t.timestamp) break
                                }
                                e.splice(a, 0, t)
                            })(e, m), u && (l += "| ", o.push(m))
                        }), e.filter(e => !1 !== e.shouldKeep)
                    }(u, d, t), g), p = "Trace #".concat(r + 1, " started ").concat((0, i.getTimestampString)(c), "\n").concat(f);
                    return null != m && (p += "\n Server trace for trace #".concat(r + 1).concat(m)), p
                }).join("\n\n")
            }

            function s(e) {
                let t = null == e.tag ? e.label : "".concat(e.label, " ").concat(e.tag);
                return t.includes("_START") && (t = "Start " + t.replace("_START", "")), t.includes("_END") && (t = "Finish " + t.replace("_END", "")), t
            }
        }
    }
]);
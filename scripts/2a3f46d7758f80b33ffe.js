(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["27545"], {
        741161: function(e, t, n) {
            "use strict";
            e.exports = n.p + "58bf98682d30fb823326.svg"
        },
        687444: function(e, t, n) {
            "use strict";
            e.exports = n.p + "090a89c5314322102655.svg"
        },
        869586: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BlindID: function() {
                    return i
                }
            });
            var a = n("605250"),
                l = n("992582").Buffer;
            let o = new a.default("BlindID");
            class i {
                async blind(e) {
                    let t = await this.key,
                        n = new BigUint64Array([BigInt(e)]),
                        a = await crypto.subtle.sign("HMAC", t, n.buffer);
                    return i.truncate(a).toString()
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
        890747: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uploadRtcLogFiles: function() {
                    return d
                }
            });
            var a = n("307391"),
                l = n("990746"),
                o = n("448993"),
                i = n("42887"),
                r = n("254490"),
                s = n("49671"),
                c = n("49111");
            let u = new a.default("uploadRtcLogFiles");
            async function d(e, t) {
                let n;
                if (null == s.default.fileManager.readLogFiles) throw new o.UploadVoiceDebugLogsError(o.UploadErrorCodes.GENERAL);
                let a = [];
                try {
                    a = (a = await s.default.fileManager.readLogFiles(e)).map(e => (0, r.transformNativeFile)(e, "application/octet-stream"))
                } catch (e) {
                    throw u.error("uploadDebugFiles: read error '".concat(e, "'")), new o.UploadVoiceDebugLogsError(o.UploadErrorCodes.READ)
                }
                if (0 === a.length) throw new o.UploadVoiceDebugLogsError(o.UploadErrorCodes.NO_FILE);
                try {
                    let e = {
                        extraInfo: t,
                        mediaEngineState: i.default.getState()
                    };
                    n = await l.default.post({
                        url: c.Endpoints.DEBUG_LOGS(c.DebugLogCategory.RTC),
                        attachments: [...a.map(e => ({
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
                let d = a.length + 1;
                if ("success_count" in n.body && n.body.success_count !== d) throw u.error("Debug log upload: stored files ".concat(n.body.success_count, " !== ").concat(d)), new o.UploadVoiceDebugLogsError(o.UploadErrorCodes.GENERAL);
                if ("store_success" in n.body && !n.body.store_success || "id_match" in n.body && !n.body.id_match || "all_success" in n.body && !n.body.all_success) throw u.error("Debug log upload: store_success: ".concat(n.body.store_success, " / ") + "id_match: ".concat(n.body.id_match, " / ") + "all_success: ".concat(n.body.all_success)), new o.UploadVoiceDebugLogsError(o.UploadErrorCodes.GENERAL)
            }
        },
        367632: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
            var a = n("64379"),
                l = n("990746"),
                o = n("147746");
            n("773336");
            var i = n("840707"),
                r = n("49111"),
                s = n("782340");
            async function c() {
                let e = await l.default.get({
                    url: r.Endpoints.BUG_REPORTS
                });
                return e.body
            }

            function u(e) {
                var t, n;
                return null !== (n = null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : "" + (null == e ? void 0 : e.squad)) && void 0 !== n ? n : ""
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
            async function m(e, t, n) {
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
                        attachments: n,
                        fields: u,
                        trackedActionData: {
                            event: a.NetworkActionNames.BUG_REPORT_SUBMIT,
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
        374159: function(e, t, n) {
            "use strict";

            function a(e) {
                var t;
                return e.map((e, n) => {
                    var a;
                    return {
                        file: e.file,
                        name: null !== (t = e.id) && void 0 !== t ? t : "attachment_".concat(n),
                        filename: null === (a = e.file) || void 0 === a ? void 0 : a.name
                    }
                })
            }
            n.r(t), n.d(t, {
                getAttachments: function() {
                    return a
                }
            })
        },
        323518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var a = n("920040"),
                l = n("773670"),
                o = n("462567"),
                i = n("498225"),
                r = n("819855"),
                s = n("77078"),
                c = n("371642"),
                u = n("966724"),
                d = n("9560"),
                m = n("761354"),
                g = n("161778"),
                f = n("228220"),
                p = n("258078"),
                h = n("149279"),
                _ = n("315102"),
                v = n("773336"),
                E = n("367632"),
                I = n("374159"),
                R = n("782340"),
                x = n("313391"),
                T = n("741161"),
                C = n("687444");
            let S = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map(e => ({
                label: e,
                value: e
            }));

            function L(e) {
                var t, L, b, N, O, y;
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
                }((0, v.getOS)())), [et, en] = l.useState(""), [ea, el] = l.useState(""), [eo, ei] = l.useState(""), [er, es] = l.useState(""), [ec, eu] = l.useState(!1), [ed, em] = l.useState(!1), [eg, ef] = l.useState(!1), ep = () => {
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
                            clientVersion: ea,
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
                        } = await n.el("223993").then(n.bind(n, "223993"));
                        return t => (0, a.jsx)(e, {
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
                return (0, a.jsx)(s.ModalRoot, {
                    className: x.modalRoot,
                    transitionState: j,
                    "aria-label": R.default.Messages.SUBMIT_BUG,
                    children: (0, a.jsx)(s.ModalContent, {
                        className: x.modalContent,
                        paddingFix: !1,
                        children: (0, a.jsx)("div", {
                            className: x.container,
                            children: (0, a.jsx)(s.HeadingLevel, {
                                forceLevel: 1,
                                component: (0, a.jsx)("div", {
                                    className: x.sidebarContainer,
                                    children: (0, a.jsx)(p.default, {
                                        strong: !0,
                                        color: p.default.Colors.HEADER_PRIMARY,
                                        size: p.default.Sizes.SIZE_24,
                                        children: (0, a.jsx)(s.H, {
                                            children: R.default.Messages.BUG_REPORT_TITLE
                                        })
                                    })
                                }),
                                children: (0, a.jsxs)("div", {
                                    className: x.contentContainer,
                                    children: [(0, a.jsx)("img", {
                                        className: x.contentIcon,
                                        alt: "",
                                        src: eE
                                    }), (0, a.jsxs)("form", {
                                        className: x.form,
                                        onSubmit: e_,
                                        children: [(0, a.jsx)(s.FormItem, {
                                            error: ec && "" === P ? R.default.Messages.REQUIRED : null,
                                            title: R.default.Messages.BUG_REPORT_NAME,
                                            className: x.formInput,
                                            children: (0, a.jsx)(s.TextInput, {
                                                placeholder: "Something is broken on this screen.",
                                                type: "text",
                                                value: P,
                                                maxLength: 100,
                                                onChange: F
                                            })
                                        }), (0, a.jsxs)(s.FormItem, {
                                            title: R.default.Messages.BUG_REPORT_DESCRIPTION,
                                            className: x.formInput,
                                            children: [(0, a.jsx)(s.TextArea, {
                                                placeholder: "What did you expect to see?",
                                                value: M,
                                                onChange: D
                                            }), (0, a.jsx)(s.Text, {
                                                variant: "text-sm/normal",
                                                color: "info-help-text",
                                                children: "You can add additional information/media on the ticket after submitting"
                                            })]
                                        }), (0, a.jsx)(s.FormItem, {
                                            error: ec && void 0 === A ? R.default.Messages.REQUIRED : null,
                                            title: R.default.Messages.BUG_REPORT_PRIORITY,
                                            className: x.formInput,
                                            children: (0, a.jsx)(s.SingleSelect, {
                                                renderOptionLabel: e => (function(e) {
                                                    let t = e.priority;
                                                    return (0, a.jsxs)("div", {
                                                        className: x.formPriorityImageContainer,
                                                        children: [(0, a.jsxs)("div", {
                                                            className: x.formPriorityTitleContainer,
                                                            children: [(0, a.jsx)("img", {
                                                                alt: "",
                                                                className: x.formPriorityImage,
                                                                src: (0, _.getEmojiURL)({
                                                                    id: t.emoji,
                                                                    animated: !0,
                                                                    size: 48
                                                                })
                                                            }), (0, a.jsx)(s.Text, {
                                                                color: "header-primary",
                                                                variant: "text-sm/semibold",
                                                                className: x.formPriorityTitle,
                                                                children: t.title
                                                            })]
                                                        }), (0, a.jsx)(s.Text, {
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
                                        }), (0, a.jsx)(s.FormItem, {
                                            title: R.default.Messages.BUG_REPORT_FEATURE_AREA,
                                            className: x.formInput,
                                            children: (0, a.jsx)(s.SearchableSelect, {
                                                value: z,
                                                options: null !== (y = null == (t = W) ? void 0 : null === (N = t.features) || void 0 === N ? void 0 : null === (b = N.filter(e => "" !== (0, E.getFeatureId)(e))) || void 0 === b ? void 0 : null === (L = b.map(e => ({
                                                    label: null !== (O = e.name) && void 0 !== O ? O : "",
                                                    value: (0, E.getFeatureId)(e)
                                                }))) || void 0 === L ? void 0 : L.sort((e, t) => e.label.localeCompare(t.label))) && void 0 !== y ? y : [],
                                                isDisabled: null == W,
                                                onChange: e => J(e)
                                            })
                                        }), (0, a.jsx)(s.FormItem, {
                                            title: R.default.Messages.BUG_REPORT_URL,
                                            className: x.formInput,
                                            children: (0, a.jsx)(s.TextInput, {
                                                placeholder: R.default.Messages.BUG_REPORT_EXTERNAL_SOURCE,
                                                type: "text",
                                                value: V,
                                                maxLength: 5e3,
                                                onChange: k
                                            })
                                        }), (0, a.jsx)(s.FormItem, {
                                            className: x.formInput,
                                            children: (0, a.jsx)(s.Checkbox, {
                                                value: X,
                                                onChange: (e, t) => Q(t),
                                                children: (0, a.jsx)(s.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "info-help-text",
                                                    children: R.default.Messages.BUG_REPORT_OVERRIDE_PLATFORM_INFORMATION
                                                })
                                            })
                                        }), X ? (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)(s.FormItem, {
                                                title: R.default.Messages.BUG_REPORT_DEVICE,
                                                className: x.formInput,
                                                children: (0, a.jsx)(s.TextInput, {
                                                    placeholder: "Device",
                                                    value: $,
                                                    onChange: e => q(e)
                                                })
                                            }), (0, a.jsx)(s.FormItem, {
                                                title: R.default.Messages.BUG_REPORT_OS,
                                                className: x.formInput,
                                                children: (0, a.jsx)(s.SingleSelect, {
                                                    value: Z,
                                                    options: S,
                                                    onChange: e => ee(e)
                                                })
                                            }), (0, a.jsx)(s.FormItem, {
                                                title: R.default.Messages.BUG_REPORT_OS_VERSION,
                                                className: x.formInput,
                                                children: (0, a.jsx)(s.TextInput, {
                                                    placeholder: "Operating System Version",
                                                    value: et,
                                                    onChange: e => en(e)
                                                })
                                            }), (0, a.jsx)(s.FormItem, {
                                                title: R.default.Messages.BUG_REPORT_CLIENT_VERSION,
                                                className: x.formInput,
                                                children: (0, a.jsx)(s.TextInput, {
                                                    placeholder: "Client Version",
                                                    value: ea,
                                                    onChange: e => el(e)
                                                })
                                            }), (0, a.jsx)(s.FormItem, {
                                                title: R.default.Messages.BUG_REPORT_CLIENT_BUILD_NUMBER,
                                                className: x.formInput,
                                                children: (0, a.jsx)(s.TextInput, {
                                                    placeholder: "Client Build Number",
                                                    value: eo,
                                                    onChange: e => ei(e)
                                                })
                                            }), (0, a.jsx)(s.FormItem, {
                                                title: R.default.Messages.BUG_REPORT_LOCALE,
                                                className: x.formInput,
                                                children: (0, a.jsx)(s.TextInput, {
                                                    placeholder: "Locale",
                                                    value: er,
                                                    onChange: e => es(e)
                                                })
                                            })]
                                        }) : null, (0, a.jsxs)(s.Button, {
                                            className: x.uploadButton,
                                            children: [R.default.Messages.BUG_REPORT_ADD_ATTACHMENTS, (0, a.jsx)(c.default, {
                                                ref: U,
                                                onChange: e => {
                                                    var t, n;
                                                    if ((null === (n = e.currentTarget) || void 0 === n ? void 0 : null === (t = n.files) || void 0 === t ? void 0 : t[0]) != null) {
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
                                        }), H.length > 0 ? (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)("div", {
                                                className: x.imageOptionsContainer,
                                                children: (0, a.jsx)(s.FormTitle, {
                                                    children: "Preview"
                                                })
                                            }), (0, a.jsx)("div", {
                                                ref: w,
                                                className: x.attachmentsGrid,
                                                children: H.length > 0 && H.map(e => (0, a.jsxs)("div", {
                                                    className: x.attachmentsGridItem,
                                                    children: [(0, a.jsx)(s.Text, {
                                                        variant: "text-sm/normal",
                                                        children: e.filename
                                                    }), (0, a.jsxs)("div", {
                                                        className: x.attachmentContainer,
                                                        children: [(0, a.jsx)(m.UploadIcon, {
                                                            upload: e
                                                        }), (0, a.jsx)("div", {
                                                            className: x.toolBar,
                                                            children: (0, a.jsx)(h.default, {
                                                                children: (0, a.jsx)(d.default, {
                                                                    tooltip: R.default.Messages.ATTACHMENT_UTILITIES_REMOVE,
                                                                    onClick: () => eh(e.id),
                                                                    dangerous: !0,
                                                                    children: (0, a.jsx)(f.default, {})
                                                                })
                                                            })
                                                        })]
                                                    })]
                                                }, e.id))
                                            })]
                                        }) : null, eg ? (0, a.jsx)(s.Text, {
                                            color: "text-danger",
                                            variant: "text-sm/normal",
                                            children: "Something went wrong, try again!"
                                        }) : null]
                                    }), (0, a.jsxs)(s.ModalFooter, {
                                        className: x.submitContainer,
                                        children: [(0, a.jsx)(s.Button, {
                                            className: x.formButton,
                                            look: s.ButtonLooks.BLANK,
                                            onClick: ep,
                                            children: (0, a.jsx)(s.Text, {
                                                variant: "text-sm/normal",
                                                children: R.default.Messages.CANCEL
                                            })
                                        }), (0, a.jsx)(s.Button, {
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
        147746: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
            var a = n("990746"),
                l = n("869586"),
                o = n("49671"),
                i = n("890747"),
                r = n("254490"),
                s = n("821316"),
                c = n("605250"),
                u = n("836403"),
                d = n("825287"),
                m = n("929331"),
                g = n("49111");
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
            async function _(e, t, n) {
                let a = new l.BlindID(n),
                    o = await a.blind(e),
                    i = await a.blind(t);
                return {
                    blindChannelId: o,
                    blindUserId: i
                }
            }
            async function v(e, t, n, a) {
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
                        } = await _(e, t, n), r = "channel blind(".concat(e, "): ").concat(l, ", user blind(").concat(t, "): ").concat(i);
                        f.info("uploadCallscopeLogs: Uploading callscope logs for context: ".concat(a, ", ").concat(r));
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
                    for (let n of t.map(e => r.transformNativeFile(e, "application/octet-stream"))) {
                        f.log("uploadCallscopeLogFiles: Uploading ".concat(n.name));
                        let t = h.getChannelId(n.name);
                        try {
                            let l = await a.default.post({
                                    url: g.Endpoints.CALLSCOPE_LOGS(t, e, h.getTrimmedFilename(n.name)),
                                    headers: {
                                        "Content-Type": "application/octet-stream"
                                    },
                                    body: n
                                }),
                                o = l.status >= 200 && l.status <= 299;
                            !o && f.error("uploadCallscopeLogFiles: Failed to upload ".concat(n.name, " with status ").concat(l.status, ", ").concat(l.text))
                        } catch (e) {
                            f.error("uploadCallscopeLogFiles: Error uploading file ".concat(n.name, " ").concat(null == e ? void 0 : e.text), e)
                        }
                    }
                } catch (e) {
                    f.error("uploadCallscopeLogFiles: Error uploading logs ".concat(null == e ? void 0 : e.text), e)
                }
            }
            async function I(e) {
                try {
                    let t = s.stringify(),
                        n = "",
                        l = await (0, u.getPushNotificationLogs)().then(e => (0, u.serializePushNotificationLogs)(e)),
                        o = t.length + n.length + l.length;
                    if (o > 9437184) {
                        let e = 1 - 9437184 / o;
                        t = t.slice(t.length - Math.floor(t.length * e)), n = n.slice(n.length - Math.floor(n.length * e)), l = l.slice(l.length - Math.floor(l.length * e))
                    }
                    let i = null,
                        r = "\n    ".concat((0, m.default)(i), "\n\n    ").concat(JSON.stringify((0, d.default)(), void 0, 2), "\n    Logs:\n    ").concat(t, "\n\n    System logs:\n    ").concat(n, "\n\n    Push Notifications:\n    ").concat(l, "\n    ");
                    s.clear();
                    let c = g.Endpoints.DEBUG_LOG(e, "discord_app_logs");
                    await a.default.post({
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
        836403: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                serializePushNotificationLogs: function() {
                    return i
                },
                getPushNotificationLogs: function() {
                    return r
                }
            });
            var a = n("173333"),
                l = n("271938"),
                o = n("49111");

            function i(e) {
                if (0 === e.length) return "No logs";
                let t = a.default.get(o.DEVICE_TOKEN),
                    n = a.default.get(o.DEVICE_VOIP_TOKEN),
                    l = null != n ? "Device Voip Token: ".concat(n) : "",
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
        825287: function(e, t, n) {
            "use strict";

            function a() {
                return {
                    logsUploaded: new Date().toISOString(),
                    releaseChannel: window.GLOBAL_ENV.RELEASE_CHANNEL,
                    buildNumber: "240615",
                    versionHash: "71b6fb44ec2f37edc689e1f21652713f256b1211"
                }
            }
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            })
        },
        929331: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("427964"),
                l = n.n(a),
                o = n("379279"),
                i = n("487269");

            function r(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return o.default.logGroups.map(n => {
                    var a, o;
                    let {
                        index: r,
                        timestamp: c,
                        logs: u,
                        nativeLogs: d,
                        serverTrace: m
                    } = n, g = 0 === r ? null !== (o = null === (a = l.find(u, e => e.log.indexOf("Logger loaded") >= 0)) || void 0 === a ? void 0 : a.timestamp) && void 0 !== o ? o : e : c, f = function(e, t) {
                        var n, a;
                        let o = (function(e) {
                                let t = [];
                                for (let n = 0; n < e.length; n++) {
                                    let a = e[n],
                                        l = e[n + 1];
                                    null != l && l.log === a.log.replace("Start ", "Finish ") ? (l.log = l.log.replace("Finish ", ""), t.push(l), n++) : t.push(a)
                                }
                                return t
                            })(e).map(e => {
                                let n = null == e.timestamp ? "" : ((e.timestamp - t) / 1e3).toFixed(3),
                                    a = null == e.delta ? "" : String(Math.round(e.delta));
                                return {
                                    totalTime: n,
                                    deltaTime: a,
                                    log: "".concat(e.emoji.length > 0 ? "".concat(e.emoji, " ") : "").concat(e.prefix).concat(e.log, "\n")
                                }
                            }),
                            i = null !== (n = l.max(o.map(e => e.totalTime.length))) && void 0 !== n ? n : 0,
                            r = null !== (a = l.max(o.map(e => e.deltaTime.length))) && void 0 !== a ? a : 0;
                        return o.map(e => {
                            let {
                                totalTime: t,
                                deltaTime: n,
                                log: a
                            } = e;
                            return "".concat(l.padStart(t, i), " ").concat(l.padStart(n, r), " ").concat(a)
                        }).join("")
                    }(function(e, t, n) {
                        e = e.slice();
                        let a = new Set(t.map(s)),
                            l = "",
                            o = [];
                        return t.forEach(t => {
                            let i = s(t),
                                r = 0,
                                c = n || !t.autoGenerated,
                                u = i.startsWith("Start ") && !i.includes("RUN_JS_BUNDLE") && a.has(i.replace("Start ", "Finish ")),
                                d = i.startsWith("Finish ") && !i.includes("RUN_JS_BUNDLE") && a.has(i.replace("Finish ", "Start "));
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
                                let n = 0;
                                for (; n < e.length; n++) {
                                    let {
                                        timestamp: a
                                    } = e[n];
                                    if (null != a && a > t.timestamp) break
                                }
                                e.splice(n, 0, t)
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
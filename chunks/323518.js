            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return N
                }
            }), a("222007");
            var n = a("37983"),
                l = a("884691"),
                s = a("748820"),
                i = a("446674"),
                r = a("819855"),
                o = a("77078"),
                u = a("371642"),
                d = a("966724"),
                c = a("9560"),
                m = a("761354"),
                f = a("161778"),
                h = a("228220"),
                p = a("258078"),
                R = a("149279"),
                v = a("315102"),
                x = a("773336"),
                _ = a("367632"),
                I = a("374159"),
                g = a("782340"),
                T = a("301410"),
                E = a("741161"),
                j = a("687444");
            let O = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map(e => ({
                label: e,
                value: e
            }));

            function N(e) {
                var t, N, S, P, C;
                let {
                    transitionState: B,
                    onClose: M
                } = e, b = l.useRef(null), U = l.useRef(null), [L, y] = l.useState(""), [G, A] = l.useState(""), [F, w] = l.useState(), [k, D] = l.useState(""), [V, Y] = l.useState([]), [H, W] = l.useState(), [z, X] = l.useState(), [Q, q] = l.useState(!1), [K, Z] = l.useState(""), [J, $] = l.useState(function(e) {
                    switch (e) {
                        case "windows":
                            return "Windows";
                        case "macos":
                            return "Mac OS X";
                        case "linux":
                            return "Linux"
                    }
                    return ""
                }((0, x.getOS)())), [ee, et] = l.useState(""), [ea, en] = l.useState(""), [el, es] = l.useState(""), [ei, er] = l.useState(""), [eo, eu] = l.useState(!1), [ed, ec] = l.useState(!1), [em, ef] = l.useState(!1), eh = () => {
                    null == M || M()
                }, ep = e => {
                    Y(V.filter(t => t.id !== e))
                };
                async function eR() {
                    var e;
                    if (ef(!1), "" === L || null == F) {
                        eu(!0);
                        return
                    }
                    let t = null == H ? void 0 : null === (e = H.features) || void 0 === e ? void 0 : e.find(e => (0, _.getFeatureId)(e) === z);
                    ec(!0), eu(!1);
                    let l = (0, I.getAttachments)(V.map(e => {
                            let {
                                item: t
                            } = e;
                            return t
                        })),
                        s = !0 === Q ? {
                            overridePlatformInformation: Q,
                            device: K,
                            operatingSystem: J,
                            operatingSystemVersion: ee,
                            clientVersion: ea,
                            clientBuildNumber: el,
                            locale: ei
                        } : {
                            overridePlatformInformation: Q
                        },
                        i = await (0, _.submitReport)({
                            name: L,
                            description: G,
                            priority: F,
                            feature: t,
                            url: k
                        }, s, l).catch(() => ef(!0));
                    ec(!1), null != i && i.ok ? (window.open(i.body.permalink_url, "_blank"), eh(), (0, o.openModalLazy)(async () => {
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
                        let e = await (0, _.fetchBugReportConfig)();
                        W(e)
                    })()
                }, []), l.useEffect(() => {
                    if (V.length > 0) {
                        var e;
                        null === (e = U.current) || void 0 === e || e.scrollIntoView({
                            behavior: "smooth",
                            block: "end"
                        })
                    }
                }, [V]);
                let ev = (0, i.useStateFromStores)([f.default], () => f.default.theme),
                    ex = (0, r.isThemeDark)(ev) ? E : j;
                return (0, n.jsx)(o.ModalRoot, {
                    className: T.modalRoot,
                    transitionState: B,
                    "aria-label": g.default.Messages.SUBMIT_BUG,
                    children: (0, n.jsx)(o.ModalContent, {
                        className: T.modalContent,
                        paddingFix: !1,
                        children: (0, n.jsx)("div", {
                            className: T.container,
                            children: (0, n.jsx)(o.HeadingLevel, {
                                forceLevel: 1,
                                component: (0, n.jsx)("div", {
                                    className: T.sidebarContainer,
                                    children: (0, n.jsx)(p.default, {
                                        strong: !0,
                                        color: p.default.Colors.HEADER_PRIMARY,
                                        size: p.default.Sizes.SIZE_24,
                                        children: (0, n.jsx)(o.H, {
                                            children: g.default.Messages.BUG_REPORT_TITLE
                                        })
                                    })
                                }),
                                children: (0, n.jsxs)("div", {
                                    className: T.contentContainer,
                                    children: [(0, n.jsx)("img", {
                                        className: T.contentIcon,
                                        alt: "",
                                        src: ex
                                    }), (0, n.jsxs)("form", {
                                        className: T.form,
                                        onSubmit: eR,
                                        children: [(0, n.jsx)(o.FormItem, {
                                            error: eo && "" === L ? g.default.Messages.REQUIRED : null,
                                            title: g.default.Messages.BUG_REPORT_NAME,
                                            className: T.formInput,
                                            children: (0, n.jsx)(o.TextInput, {
                                                placeholder: "Something is broken on this screen.",
                                                type: "text",
                                                value: L,
                                                maxLength: 100,
                                                onChange: y
                                            })
                                        }), (0, n.jsxs)(o.FormItem, {
                                            title: g.default.Messages.BUG_REPORT_DESCRIPTION,
                                            className: T.formInput,
                                            children: [(0, n.jsx)(o.TextArea, {
                                                placeholder: "What did you expect to see?",
                                                value: G,
                                                onChange: A
                                            }), (0, n.jsx)(o.Text, {
                                                variant: "text-sm/normal",
                                                color: "info-help-text",
                                                children: "You can add additional information/media on the ticket after submitting"
                                            })]
                                        }), (0, n.jsx)(o.FormItem, {
                                            error: eo && void 0 === F ? g.default.Messages.REQUIRED : null,
                                            title: g.default.Messages.BUG_REPORT_PRIORITY,
                                            className: T.formInput,
                                            children: (0, n.jsx)(o.SingleSelect, {
                                                renderOptionLabel: e => (function(e) {
                                                    let t = e.priority;
                                                    return (0, n.jsxs)("div", {
                                                        className: T.formPriorityImageContainer,
                                                        children: [(0, n.jsxs)("div", {
                                                            className: T.formPriorityTitleContainer,
                                                            children: [(0, n.jsx)("img", {
                                                                alt: "",
                                                                className: T.formPriorityImage,
                                                                src: (0, v.getEmojiURL)({
                                                                    id: t.emoji,
                                                                    animated: !0,
                                                                    size: 48
                                                                })
                                                            }), (0, n.jsx)(o.Text, {
                                                                color: "header-primary",
                                                                variant: "text-sm/semibold",
                                                                className: T.formPriorityTitle,
                                                                children: t.title
                                                            })]
                                                        }), (0, n.jsx)(o.Text, {
                                                            color: "header-secondary",
                                                            variant: "text-xs/normal",
                                                            className: T.formPriorityDescription,
                                                            children: t.description
                                                        })]
                                                    })
                                                })(e),
                                                onChange: w,
                                                options: (0, _.getPriorities)().map(e => ({
                                                    priority: e,
                                                    value: e.value,
                                                    label: e.title
                                                })),
                                                value: F,
                                                maxVisibleItems: 3,
                                                closeOnSelect: !0
                                            })
                                        }), (0, n.jsx)(o.FormItem, {
                                            title: g.default.Messages.BUG_REPORT_FEATURE_AREA,
                                            className: T.formInput,
                                            children: (0, n.jsx)(o.SearchableSelect, {
                                                value: z,
                                                options: null !== (C = null == (t = H) ? void 0 : null === (P = t.features) || void 0 === P ? void 0 : null === (S = P.filter(e => "" !== (0, _.getFeatureId)(e))) || void 0 === S ? void 0 : null === (N = S.map(e => {
                                                    var t;
                                                    return {
                                                        label: null !== (t = e.name) && void 0 !== t ? t : "",
                                                        value: (0, _.getFeatureId)(e)
                                                    }
                                                })) || void 0 === N ? void 0 : N.sort((e, t) => e.label.localeCompare(t.label))) && void 0 !== C ? C : [],
                                                isDisabled: null == H,
                                                onChange: e => X(e)
                                            })
                                        }), (0, n.jsx)(o.FormItem, {
                                            title: g.default.Messages.BUG_REPORT_URL,
                                            className: T.formInput,
                                            children: (0, n.jsx)(o.TextInput, {
                                                placeholder: g.default.Messages.BUG_REPORT_EXTERNAL_SOURCE,
                                                type: "text",
                                                value: k,
                                                maxLength: 5e3,
                                                onChange: D
                                            })
                                        }), (0, n.jsx)(o.FormItem, {
                                            className: T.formInput,
                                            children: (0, n.jsx)(o.Checkbox, {
                                                value: Q,
                                                onChange: (e, t) => q(t),
                                                children: (0, n.jsx)(o.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "info-help-text",
                                                    children: g.default.Messages.BUG_REPORT_OVERRIDE_PLATFORM_INFORMATION
                                                })
                                            })
                                        }), Q ? (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsx)(o.FormItem, {
                                                title: g.default.Messages.BUG_REPORT_DEVICE,
                                                className: T.formInput,
                                                children: (0, n.jsx)(o.TextInput, {
                                                    placeholder: "Device",
                                                    value: K,
                                                    onChange: e => Z(e)
                                                })
                                            }), (0, n.jsx)(o.FormItem, {
                                                title: g.default.Messages.BUG_REPORT_OS,
                                                className: T.formInput,
                                                children: (0, n.jsx)(o.SingleSelect, {
                                                    value: J,
                                                    options: O,
                                                    onChange: e => $(e)
                                                })
                                            }), (0, n.jsx)(o.FormItem, {
                                                title: g.default.Messages.BUG_REPORT_OS_VERSION,
                                                className: T.formInput,
                                                children: (0, n.jsx)(o.TextInput, {
                                                    placeholder: "Operating System Version",
                                                    value: ee,
                                                    onChange: e => et(e)
                                                })
                                            }), (0, n.jsx)(o.FormItem, {
                                                title: g.default.Messages.BUG_REPORT_CLIENT_VERSION,
                                                className: T.formInput,
                                                children: (0, n.jsx)(o.TextInput, {
                                                    placeholder: "Client Version",
                                                    value: ea,
                                                    onChange: e => en(e)
                                                })
                                            }), (0, n.jsx)(o.FormItem, {
                                                title: g.default.Messages.BUG_REPORT_CLIENT_BUILD_NUMBER,
                                                className: T.formInput,
                                                children: (0, n.jsx)(o.TextInput, {
                                                    placeholder: "Client Build Number",
                                                    value: el,
                                                    onChange: e => es(e)
                                                })
                                            }), (0, n.jsx)(o.FormItem, {
                                                title: g.default.Messages.BUG_REPORT_LOCALE,
                                                className: T.formInput,
                                                children: (0, n.jsx)(o.TextInput, {
                                                    placeholder: "Locale",
                                                    value: ei,
                                                    onChange: e => er(e)
                                                })
                                            })]
                                        }) : null, (0, n.jsxs)(o.Button, {
                                            className: T.uploadButton,
                                            children: [g.default.Messages.BUG_REPORT_ADD_ATTACHMENTS, (0, n.jsx)(u.default, {
                                                ref: b,
                                                onChange: e => {
                                                    var t, a;
                                                    if ((null === (a = e.currentTarget) || void 0 === a ? void 0 : null === (t = a.files) || void 0 === t ? void 0 : t[0]) != null) {
                                                        let t = Array.from(e.currentTarget.files).map(e => new d.default({
                                                            id: (0, s.v4)(),
                                                            file: e,
                                                            platform: d.UploadPlatform.WEB
                                                        }));
                                                        Y([...V, ...t])
                                                    }
                                                },
                                                multiple: !0
                                            })]
                                        }), V.length > 0 ? (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsx)("div", {
                                                className: T.imageOptionsContainer,
                                                children: (0, n.jsx)(o.FormTitle, {
                                                    children: "Preview"
                                                })
                                            }), (0, n.jsx)("div", {
                                                ref: U,
                                                className: T.attachmentsGrid,
                                                children: V.length > 0 && V.map(e => (0, n.jsxs)("div", {
                                                    className: T.attachmentsGridItem,
                                                    children: [(0, n.jsx)(o.Text, {
                                                        variant: "text-sm/normal",
                                                        children: e.filename
                                                    }), (0, n.jsxs)("div", {
                                                        className: T.attachmentContainer,
                                                        children: [(0, n.jsx)(m.UploadIcon, {
                                                            upload: e
                                                        }), (0, n.jsx)("div", {
                                                            className: T.toolBar,
                                                            children: (0, n.jsx)(R.default, {
                                                                children: (0, n.jsx)(c.default, {
                                                                    tooltip: g.default.Messages.ATTACHMENT_UTILITIES_REMOVE,
                                                                    onClick: () => ep(e.id),
                                                                    dangerous: !0,
                                                                    children: (0, n.jsx)(h.default, {})
                                                                })
                                                            })
                                                        })]
                                                    })]
                                                }, e.id))
                                            })]
                                        }) : null, em ? (0, n.jsx)(o.Text, {
                                            color: "text-danger",
                                            variant: "text-sm/normal",
                                            children: "Something went wrong, try again!"
                                        }) : null]
                                    }), (0, n.jsxs)(o.ModalFooter, {
                                        className: T.submitContainer,
                                        children: [(0, n.jsx)(o.Button, {
                                            className: T.formButton,
                                            look: o.ButtonLooks.BLANK,
                                            onClick: eh,
                                            children: (0, n.jsx)(o.Text, {
                                                variant: "text-sm/normal",
                                                children: g.default.Messages.CANCEL
                                            })
                                        }), (0, n.jsx)(o.Button, {
                                            submitting: ed,
                                            className: T.formButton,
                                            onClick: eR,
                                            children: "Submit and Open Report"
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                })
            }
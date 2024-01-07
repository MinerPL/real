            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return L
                }
            }), a("222007"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
            var l = a("37983"),
                s = a("884691"),
                n = a("414456"),
                i = a.n(n),
                r = a("77078"),
                o = a("81594"),
                d = a("966724"),
                u = a("149022"),
                c = a("217535"),
                m = a("474643"),
                h = a("599110"),
                p = a("773336"),
                f = a("50885"),
                g = a("49111"),
                v = a("782340"),
                x = a("831839"),
                M = a("926622");

            function E(e) {
                var t, a, n, r;
                let {
                    file: o
                } = e, [d, u] = s.useState(), [c, m] = s.useState(!1), [h, p] = s.useState({}), f = s.useRef(null);
                s.useEffect(() => {
                    let e = f.current;
                    if (null != e && m(!1), null == o) return;
                    let t = URL.createObjectURL(o);
                    return u(t), () => {
                        u(void 0), URL.revokeObjectURL(t)
                    }
                }, [o]), s.useLayoutEffect(() => {
                    let e = f.current;
                    null != e && (e.onload = () => {
                        let t = e.naturalWidth / e.naturalHeight,
                            a = Math.max(.66, Math.min(t, 4));
                        1 === a ? p({
                            width: 104,
                            height: 104
                        }) : a > 1 ? p({
                            width: 104 * a,
                            height: void 0
                        }) : p({
                            width: void 0,
                            height: 104 / a
                        }), m(!0)
                    })
                }, []);
                let g = Math.max(16, (120 - (null !== (a = null === (t = f.current) || void 0 === t ? void 0 : t.width) && void 0 !== a ? a : 0)) / 2);
                return (0, l.jsx)("img", {
                    ref: f,
                    src: d,
                    className: i(x.icon, {
                        [x.image]: !c
                    }),
                    "aria-hidden": !0,
                    alt: "",
                    style: {
                        width: null !== (n = h.width) && void 0 !== n ? n : "initial",
                        height: null !== (r = h.height) && void 0 !== r ? r : 104,
                        marginLeft: g,
                        marginRight: g,
                        marginTop: null != h.height ? 104 - h.height - 33 : -33
                    }
                })
            }
            class j extends s.Component {
                render() {
                    var e;
                    if (this.props.upload.item.platform !== d.UploadPlatform.WEB) return null;
                    if (this.props.upload.isImage) return (0, l.jsx)(E, {
                        file: this.props.upload.item.file
                    });
                    return (0, l.jsx)("div", {
                        className: i(x.icon, {
                            [x[null !== (e = this.props.upload.classification) && void 0 !== e ? e : ""]]: !0
                        })
                    })
                }
            }
            class A extends s.Component {
                componentDidMount() {
                    var e;
                    (null === (e = this.props.upload) || void 0 === e ? void 0 : e.showLargeMessageDialog) && this.props.upload.item.platform === d.UploadPlatform.WEB && h.default.track(g.AnalyticEvents.OPEN_MODAL, {
                        type: "Upload Large Message",
                        message_content_length: this.props.upload.item.file.size
                    }), p.isPlatformEmbedded && f.default.focus()
                }
                shouldComponentUpdate(e) {
                    return null != e.upload
                }
                componentDidUpdate(e) {
                    var t, a, l, s;
                    (null === (t = e.upload) || void 0 === t ? void 0 : t.filename) !== (null === (a = this.props.upload) || void 0 === a ? void 0 : a.filename) && this.setState({
                        filename: null !== (s = null === (l = this.props.upload) || void 0 === l ? void 0 : l.filename) && void 0 !== s ? s : ""
                    })
                }
                render() {
                    let {
                        upload: e,
                        transitionState: t,
                        messageMaxLength: a,
                        disableSpoiler: n
                    } = this.props, {
                        hasSpoiler: o
                    } = this.state;
                    return (0, l.jsxs)(r.ModalRoot, {
                        "aria-label": v.default.Messages.ATTACH_FILES,
                        size: r.ModalSize.DYNAMIC,
                        transitionState: t,
                        className: i(x.uploadModal),
                        children: [(0, l.jsxs)("div", {
                            className: x.inner,
                            children: [(0, l.jsxs)("div", {
                                className: i(x.file, {
                                    [x.expandable]: e.isImage
                                }),
                                children: [(0, l.jsx)(j, {
                                    upload: e
                                }), (0, l.jsxs)("div", {
                                    className: x.description,
                                    children: [(0, l.jsx)("div", {
                                        className: x.filename,
                                        children: e.showLargeMessageDialog ? v.default.Messages.LARGE_MESSAGE_UPLOAD_TITLE_MAX_LENGTH.format({
                                            maxLength: a
                                        }) : e.filename
                                    }), e.showLargeMessageDialog ? (0, l.jsx)("div", {
                                        className: x.subtitle,
                                        children: v.default.Messages.LARGE_MESSAGE_UPLOAD_SUBTITLE
                                    }) : null]
                                })]
                            }), (0, l.jsx)("div", {
                                className: x.comment,
                                children: (0, l.jsxs)(s.Fragment, {
                                    children: [(0, l.jsx)("div", {
                                        className: x.label,
                                        children: (0, l.jsx)("span", {
                                            children: v.default.Messages.UPLOAD_AREA_FILENAME
                                        })
                                    }), (0, l.jsx)(r.TextInput, {
                                        className: i(x.channelTextAreaUpload, M.marginTop8),
                                        value: this.state.filename,
                                        onChange: e => this.setState({
                                            filename: e
                                        }),
                                        onKeyDown: e => {
                                            if (e.which === g.KeyboardKeys.ENTER) return this.handleSubmit()
                                        }
                                    }), e.isImage ? (0, l.jsxs)(s.Fragment, {
                                        children: [(0, l.jsx)("div", {
                                            className: x.label,
                                            children: (0, l.jsx)("span", {
                                                children: v.default.Messages.ATTACHMENT_MODAL_IMAGE_DESCRIPTION_LABEL
                                            })
                                        }), (0, l.jsx)(r.TextInput, {
                                            className: i(x.channelTextAreaUpload, M.marginTop8),
                                            placeholder: v.default.Messages.ATTACHMENT_MODAL_IMAGE_DESCRIPTION_PLACEHOLDER,
                                            value: this.state.description,
                                            onChange: e => this.setState({
                                                description: e
                                            }),
                                            onKeyDown: e => {
                                                if (e.which === g.KeyboardKeys.ENTER) return this.handleSubmit()
                                            }
                                        })]
                                    }) : null, !0 !== n && (0, l.jsx)(r.Checkbox, {
                                        className: M.marginBottom20,
                                        value: o,
                                        onChange: (e, t) => this.setState({
                                            hasSpoiler: t
                                        }),
                                        children: (0, l.jsx)(r.Text, {
                                            variant: "text-sm/normal",
                                            children: v.default.Messages.SPOILER_MARK_SELECTED
                                        })
                                    })]
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: x.footer,
                            children: (0, l.jsxs)("div", {
                                className: i(x.hasSpoilers, x.footerRightAlign),
                                children: [(0, l.jsx)(r.Button, {
                                    type: "button",
                                    look: r.Button.Looks.LINK,
                                    color: r.Button.Colors.PRIMARY,
                                    onClick: this.cancel,
                                    children: (0, l.jsx)("span", {
                                        children: v.default.Messages.CANCEL
                                    })
                                }), (0, l.jsx)(r.Button, {
                                    type: "submit",
                                    onClick: this.handleSubmit,
                                    children: (0, l.jsx)("span", {
                                        children: v.default.Messages.ATTACHMENT_MODAL_SAVE
                                    })
                                })]
                            })
                        })]
                    })
                }
                constructor(e) {
                    var t, a, l, s, n, i;
                    super(e), this.cancelAll = () => {
                        o.default.clearAll(this.props.channelId, this.props.draftType), this.props.onClose()
                    }, this.cancel = () => {
                        this.props.onClose()
                    }, this.handleTextChange = (e, t, a) => {
                        this.setState({
                            textValue: t,
                            richValue: a
                        })
                    }, this.handleSubmit = () => {
                        let {
                            upload: e,
                            onClose: t,
                            onSubmit: a
                        } = this.props, {
                            filename: l,
                            description: s,
                            hasSpoiler: n
                        } = this.state;
                        a({
                            upload: e,
                            name: l,
                            description: s,
                            spoiler: n
                        }), t()
                    };
                    let r = e.ignoreDraft ? "" : m.default.getDraft(this.props.channelId, e.draftType);
                    this.state = {
                        ...(0, u.createState)(r),
                        textFocused: !0,
                        hasSpoiler: null !== (s = null === (t = e.upload) || void 0 === t ? void 0 : t.spoiler) && void 0 !== s && s,
                        filename: null !== (n = null === (a = e.upload) || void 0 === a ? void 0 : a.filename) && void 0 !== n ? n : "",
                        contentWarningProps: null,
                        description: null !== (i = null === (l = e.upload) || void 0 === l ? void 0 : l.description) && void 0 !== i ? i : ""
                    }
                }
            }

            function L(e) {
                let t = (0, c.default)();
                return e.upload.item.platform !== d.UploadPlatform.WEB ? null : (0, l.jsx)(A, {
                    ...e,
                    file: e.upload.item.file,
                    messageMaxLength: t
                })
            }
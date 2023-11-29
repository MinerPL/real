(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["21936"], {
        467339: function(e, t, a) {
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
                M = a("831839"),
                x = a("926622");

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
                    className: i(M.icon, {
                        [M.image]: !c
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
                        className: i(M.icon, {
                            [M[null !== (e = this.props.upload.classification) && void 0 !== e ? e : ""]]: !0
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
                        className: i(M.uploadModal),
                        children: [(0, l.jsxs)("div", {
                            className: M.inner,
                            children: [(0, l.jsxs)("div", {
                                className: i(M.file, {
                                    [M.expandable]: e.isImage
                                }),
                                children: [(0, l.jsx)(j, {
                                    upload: e
                                }), (0, l.jsxs)("div", {
                                    className: M.description,
                                    children: [(0, l.jsx)("div", {
                                        className: M.filename,
                                        children: e.showLargeMessageDialog ? v.default.Messages.LARGE_MESSAGE_UPLOAD_TITLE_MAX_LENGTH.format({
                                            maxLength: a
                                        }) : e.filename
                                    }), e.showLargeMessageDialog ? (0, l.jsx)("div", {
                                        className: M.subtitle,
                                        children: v.default.Messages.LARGE_MESSAGE_UPLOAD_SUBTITLE
                                    }) : null]
                                })]
                            }), (0, l.jsx)("div", {
                                className: M.comment,
                                children: (0, l.jsxs)(s.Fragment, {
                                    children: [(0, l.jsx)("div", {
                                        className: M.label,
                                        children: (0, l.jsx)("span", {
                                            children: v.default.Messages.UPLOAD_AREA_FILENAME
                                        })
                                    }), (0, l.jsx)(r.TextInput, {
                                        className: i(M.channelTextAreaUpload, x.marginTop8),
                                        value: this.state.filename,
                                        onChange: e => this.setState({
                                            filename: e
                                        }),
                                        onKeyDown: e => {
                                            if (e.which === g.KeyboardKeys.ENTER) return this.handleSubmit()
                                        }
                                    }), e.isImage ? (0, l.jsxs)(s.Fragment, {
                                        children: [(0, l.jsx)("div", {
                                            className: M.label,
                                            children: (0, l.jsx)("span", {
                                                children: v.default.Messages.ATTACHMENT_MODAL_IMAGE_DESCRIPTION_LABEL
                                            })
                                        }), (0, l.jsx)(r.TextInput, {
                                            className: i(M.channelTextAreaUpload, x.marginTop8),
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
                                        className: x.marginBottom20,
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
                            className: M.footer,
                            children: (0, l.jsxs)("div", {
                                className: i(M.hasSpoilers, M.footerRightAlign),
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
        },
        9560: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var l = a("37983"),
                s = a("884691"),
                n = a("414456"),
                i = a.n(n),
                r = a("77078"),
                o = a("149279"),
                d = a("302949");

            function u(e) {
                let {
                    onClick: t,
                    children: a,
                    tooltip: n,
                    dangerous: u = !1,
                    className: c
                } = e;
                return (0, l.jsx)(r.Tooltip, {
                    text: n,
                    hideOnClick: !0,
                    children: e => {
                        let {
                            onMouseEnter: r,
                            onMouseLeave: m,
                            onClick: h
                        } = e;
                        return (0, l.jsx)(o.Button, {
                            onMouseEnter: r,
                            onMouseLeave: m,
                            onClick: e => {
                                e.stopPropagation(), null == h || h(), t(e)
                            },
                            dangerous: u,
                            "aria-label": n,
                            className: c,
                            children: s.Children.map(a, e => s.isValidElement(e) ? s.cloneElement(e, {
                                className: i(e.props.className, d.actionBarIcon)
                            }) : e)
                        })
                    }
                })
            }
        },
        271972: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                AttachmentListItemSizes: function() {
                    return s
                },
                default: function() {
                    return x
                }
            });
            var l, s, n = a("37983"),
                i = a("884691"),
                r = a("414456"),
                o = a.n(r),
                d = a("974667"),
                u = a("77078"),
                c = a("81594"),
                m = a("149279"),
                h = a("659500"),
                p = a("645406"),
                f = a("49111"),
                g = a("782340"),
                v = a("864147");

            function M(e) {
                e.stopPropagation()
            }(l = s || (s = {}))[l.SMALL = 0] = "SMALL", l[l.MEDIUM = 1] = "MEDIUM";
            var x = i.forwardRef(function(e, t) {
                let {
                    id: a,
                    channelId: l,
                    className: s,
                    children: i,
                    actions: r,
                    handleEditModal: x,
                    keyboardModeEnabled: E,
                    onKeyDown: j,
                    draftType: A,
                    size: L = 1
                } = e, {
                    onFocus: N,
                    ...S
                } = (0, d.useListItem)(a), {
                    handleFocus: T,
                    handleBlur: I
                } = (0, p.useFocusInside)(N), C = 0 === L, b = null != r;
                return (0, n.jsx)(u.FocusRing, {
                    children: (0, n.jsx)("li", {
                        ...S,
                        onFocus: T,
                        onBlur: I,
                        onKeyDown: e => {
                            if (E) {
                                switch (e.which) {
                                    case f.KeyboardKeys.D:
                                        e.preventDefault(), c.default.remove(l, a, A);
                                        return;
                                    case f.KeyboardKeys.E:
                                        null != x && (e.preventDefault(), x(e));
                                        return;
                                    case f.KeyboardKeys.BACKSPACE:
                                        e.ctrlKey ? (e.preventDefault(), c.default.clearAll(l, A)) : (e.preventDefault(), c.default.remove(l, a, A));
                                        return;
                                    case f.KeyboardKeys.ARROW_UP:
                                        let t = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey;
                                        if (t) return;
                                        e.preventDefault(), h.ComponentDispatch.dispatchToLastSubscribed(f.ComponentActions.FOCUS_MESSAGES, {
                                            atEnd: !0
                                        })
                                }
                                null == j || j(e)
                            }
                        },
                        className: o(v.upload, s),
                        ref: t,
                        children: (0, n.jsxs)("div", {
                            className: v.uploadContainer,
                            children: [i, b ? (0, n.jsx)("div", {
                                className: v.actionBarContainer,
                                children: (0, n.jsx)("div", {
                                    className: o(v.actionBar, {
                                        [v.smallActionBar]: C
                                    }),
                                    onContextMenu: M,
                                    "aria-label": g.default.Messages.ATTACHMENT_UTILITIES,
                                    children: (0, n.jsx)(m.default, {
                                        className: o({
                                            [v.miniPopover]: C
                                        }),
                                        children: r
                                    })
                                })
                            }) : null]
                        })
                    })
                })
            })
        },
        645406: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useFocusInside: function() {
                    return s
                }
            }), a("222007");
            var l = a("884691");

            function s(e, t) {
                let [a, s] = (0, l.useState)(!1), n = (0, l.useCallback)(t => {
                    (t.target === t.currentTarget || t.currentTarget.contains(document.activeElement)) && s(!0), null != e && e(t)
                }, [e]), i = (0, l.useCallback)(e => {
                    (e.target === e.currentTarget || !e.currentTarget.contains(document.activeElement)) && s(!1), null != t && t(e)
                }, [t]);
                return {
                    handleFocus: n,
                    handleBlur: i,
                    isFocused: a
                }
            }
        },
        761354: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                UploadIcon: function() {
                    return I
                },
                default: function() {
                    return C
                }
            }), a("222007"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
            var l = a("37983"),
                s = a("884691"),
                n = a("414456"),
                i = a.n(n),
                r = a("77078"),
                o = a("81594"),
                d = a("467339"),
                u = a("966724"),
                c = a("474643"),
                m = a("505684"),
                h = a("462579"),
                p = a("867544"),
                f = a("987772"),
                g = a("228220"),
                v = a("58608"),
                M = a("103603"),
                x = a("9560"),
                E = a("271972"),
                j = a("782340"),
                A = a("454101");
            let L = ["image/jpeg", "image/png", "image/webp", "image/gif", "video/quicktime", "video/mp4"];

            function N(e) {
                let {
                    alt: t,
                    spoiler: a,
                    renderContent: n
                } = e, [i, r] = s.useState(!1);
                return (0, l.jsx)(m.ObscuredDisplayContext.Provider, {
                    value: !a,
                    children: (0, l.jsx)(m.default, {
                        type: m.default.Types.ATTACHMENT,
                        onReveal: () => r(!0),
                        className: A.spoilerContainer,
                        children: e => (0, l.jsxs)("div", {
                            className: A.spoilerWrapper,
                            children: [n(e), (0, l.jsxs)("div", {
                                className: A.tags,
                                children: [null != t && "" !== t ? (0, l.jsx)("span", {
                                    className: A.altTag,
                                    children: j.default.Messages.IMAGE_ALT
                                }) : null, i && a ? (0, l.jsx)("span", {
                                    className: A.altTag,
                                    children: j.default.Messages.SPOILER
                                }) : null]
                            })]
                        })
                    })
                })
            }

            function S(e) {
                let {
                    file: t,
                    alt: a,
                    spoiler: n,
                    size: o = E.AttachmentListItemSizes.MEDIUM,
                    onMouseEnter: d
                } = e, [u, c] = s.useState(), [m, h] = s.useState({
                    width: 0,
                    height: 0
                }), p = o === E.AttachmentListItemSizes.SMALL;
                s.useEffect(() => {
                    if (null == t || !1 === L.includes(t.type)) return;
                    let e = URL.createObjectURL(t);
                    c(e);
                    let a = new Image;
                    return a.onload = () => {
                        let {
                            width: e,
                            height: t
                        } = (0, M.zoomFit)(a.width, a.height);
                        h({
                            width: e,
                            height: t
                        })
                    }, a.src = e, () => {
                        c(void 0), h({
                            width: 0,
                            height: 0
                        }), URL.revokeObjectURL(e)
                    }
                }, [t]);
                let f = s.useCallback(function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return null == u ? (0, l.jsx)(l.Fragment, {}) : (0, l.jsx)("img", {
                            src: u,
                            className: i(A.media, {
                                [A.spoiler]: e,
                                [A.imageSmall]: p
                            }),
                            "aria-hidden": !0,
                            alt: null != a ? a : "",
                            style: t ? m : {}
                        })
                    }, [u, p, a, m]),
                    g = s.useCallback(() => {
                        null != u && (0, r.openModal)(e => (0, l.jsx)(r.ModalRoot, {
                            className: A.modal,
                            ...e,
                            size: r.ModalSize.DYNAMIC,
                            "aria-label": j.default.Messages.IMAGE,
                            children: f(!1, !0)
                        }))
                    }, [u, f]);
                return (0, l.jsx)("div", {
                    onMouseEnter: d,
                    className: i(A.mediaContainer, {
                        [A.imageSmall]: p
                    }),
                    children: (0, l.jsx)(r.Clickable, {
                        onClick: g,
                        className: A.clickableMedia,
                        children: (0, l.jsx)(N, {
                            alt: a,
                            spoiler: n,
                            renderContent: f
                        })
                    })
                })
            }

            function T(e) {
                let {
                    file: t,
                    alt: a,
                    spoiler: n,
                    onMouseEnter: r,
                    onVideoLoadError: o
                } = e, [d, u] = s.useState(), c = s.useRef(null);
                return s.useEffect(() => {
                    if (null == t) return;
                    let e = URL.createObjectURL(t);
                    return u(e), () => {
                        u(void 0), URL.revokeObjectURL(e)
                    }
                }, [t]), (0, l.jsx)("div", {
                    onMouseEnter: r,
                    className: A.mediaContainer,
                    children: (0, l.jsx)(N, {
                        alt: a,
                        spoiler: n,
                        renderContent: e => (0, l.jsx)(v.default, {
                            ref: c,
                            src: d,
                            className: i(A.media, {
                                [A.spoiler]: e
                            }),
                            onError: o,
                            preload: "none",
                            "aria-hidden": !0
                        })
                    })
                })
            }

            function I(e) {
                var t;
                let {
                    upload: a,
                    size: n = E.AttachmentListItemSizes.MEDIUM,
                    onMouseEnter: r
                } = e, [o, d] = s.useState(!1), c = n === E.AttachmentListItemSizes.SMALL;
                return a.isImage && a.item.platform === u.UploadPlatform.WEB ? (0, l.jsx)(S, {
                    file: a.item.file,
                    alt: a.description,
                    spoiler: a.spoiler,
                    size: n,
                    onMouseEnter: r
                }) : !o && a.isVideo && a.item.platform === u.UploadPlatform.WEB ? (0, l.jsx)(T, {
                    file: a.item.file,
                    alt: a.description,
                    spoiler: a.spoiler,
                    onMouseEnter: r,
                    onVideoLoadError: () => d(!0)
                }) : (0, l.jsx)("div", {
                    onMouseEnter: r,
                    className: i(A.icon, A.imageContainer, {
                        [A[null !== (t = a.classification) && void 0 !== t ? t : ""]]: !0,
                        [A.imageSmall]: c
                    }),
                    children: (0, l.jsx)("div", {
                        className: A.tags,
                        children: a.spoiler ? (0, l.jsx)("span", {
                            className: A.altTag,
                            children: j.default.Messages.SPOILER
                        }) : null
                    })
                })
            }

            function C(e) {
                let {
                    channelId: t,
                    draftType: a,
                    upload: n,
                    keyboardModeEnabled: u,
                    label: m,
                    size: v = E.AttachmentListItemSizes.MEDIUM,
                    canEdit: M = !0,
                    hideFileName: L = !1
                } = e, N = v === E.AttachmentListItemSizes.SMALL, S = e => {
                    e.stopPropagation(), (0, r.openModal)(e => (0, l.jsx)(d.default, {
                        ...e,
                        draftType: c.DraftType.ChannelMessage,
                        upload: n,
                        channelId: t,
                        onSubmit: e => {
                            let {
                                name: l,
                                description: s,
                                spoiler: i
                            } = e;
                            o.default.update(t, n.id, a, {
                                filename: l,
                                description: s,
                                spoiler: i
                            })
                        }
                    }))
                };
                return (0, l.jsxs)(E.default, {
                    actions: (0, l.jsxs)(s.Fragment, {
                        children: [M ? (0, l.jsx)(x.default, {
                            className: i({
                                [A.action]: N
                            }),
                            tooltip: j.default.Messages.ATTACHMENT_UTILITIES_SPOILER,
                            onClick: () => o.default.update(t, n.id, a, {
                                spoiler: !n.spoiler
                            }),
                            children: n.spoiler ? (0, l.jsx)(p.default, {
                                className: i({
                                    [A.actionBarIcon]: N
                                })
                            }) : (0, l.jsx)(h.default, {
                                className: i({
                                    [A.actionBarIcon]: N
                                })
                            })
                        }) : null, M ? (0, l.jsx)(x.default, {
                            className: i({
                                [A.action]: N
                            }),
                            tooltip: j.default.Messages.ATTACHMENT_UTILITIES_MODIFY,
                            onClick: S,
                            children: (0, l.jsx)(f.default, {
                                className: i({
                                    [A.actionBarIcon]: N
                                })
                            })
                        }) : null, (0, l.jsx)(x.default, {
                            className: i({
                                [A.action]: N
                            }),
                            tooltip: j.default.Messages.ATTACHMENT_UTILITIES_REMOVE,
                            onClick: () => o.default.remove(t, n.id, a),
                            dangerous: !0,
                            children: (0, l.jsx)(g.default, {
                                className: i({
                                    [A.actionBarIcon]: N
                                })
                            })
                        })]
                    }),
                    draftType: a,
                    id: n.id,
                    channelId: t,
                    handleEditModal: S,
                    keyboardModeEnabled: u,
                    size: v,
                    className: i({
                        [A.attachmentItemSmall]: N
                    }),
                    children: [(0, l.jsx)(I, {
                        upload: n,
                        size: v
                    }), !L && (0, l.jsx)("div", {
                        className: A.filenameContainer,
                        children: (0, l.jsx)(r.Text, {
                            className: A.filename,
                            variant: "text-sm/normal",
                            children: null != m ? m : n.filename
                        })
                    })]
                })
            }
        },
        217535: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var l = a("446674"),
                s = a("697218"),
                n = a("719923"),
                i = a("49111");

            function r() {
                let e = (0, l.useStateFromStores)([s.default], () => n.default.canUseIncreasedMessageLength(s.default.getCurrentUser()));
                return e ? i.MAX_MESSAGE_LENGTH_PREMIUM : i.MAX_MESSAGE_LENGTH
            }
        },
        149279: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                Separator: function() {
                    return o
                },
                Button: function() {
                    return d
                },
                default: function() {
                    return u
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("414456"),
                n = a.n(s),
                i = a("77078"),
                r = a("412066");

            function o(e) {
                let {
                    className: t
                } = e;
                return (0, l.jsx)("div", {
                    className: n(t, r.separator)
                })
            }

            function d(e) {
                let {
                    onClick: t,
                    onContextMenu: a,
                    className: s,
                    selected: o = !1,
                    children: d,
                    disabled: u = !1,
                    dangerous: c,
                    ...m
                } = e;
                return (0, l.jsx)(i.Clickable, {
                    onClick: u ? void 0 : t,
                    onContextMenu: u ? void 0 : a,
                    className: n(s, {
                        [r.button]: !0,
                        [r.selected]: o,
                        [r.disabled]: u,
                        [r.dangerous]: c
                    }),
                    ...m,
                    children: d
                })
            }
            var u = function(e) {
                let {
                    className: t,
                    children: a
                } = e;
                return (0, l.jsx)("div", {
                    className: n(t, r.wrapper),
                    children: a
                })
            }
        }
    }
]);
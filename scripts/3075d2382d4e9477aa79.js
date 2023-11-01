(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["21936"], {
        467339: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return j
                }
            });
            var s = a("37983"),
                l = a("884691"),
                n = a("414456"),
                i = a.n(n),
                r = a("77078"),
                o = a("81594"),
                d = a("966724"),
                u = a("149022"),
                c = a("217535"),
                m = a("474643"),
                p = a("599110"),
                h = a("773336"),
                f = a("50885"),
                g = a("49111"),
                E = a("782340"),
                v = a("831839"),
                M = a("926622");

            function x(e) {
                var t, a, n, r;
                let {
                    file: o
                } = e, [d, u] = l.useState(), [c, m] = l.useState(!1), [p, h] = l.useState({}), f = l.useRef(null);
                l.useEffect(() => {
                    let e = f.current;
                    if (null != e && m(!1), null == o) return;
                    let t = URL.createObjectURL(o);
                    return u(t), () => {
                        u(void 0), URL.revokeObjectURL(t)
                    }
                }, [o]), l.useLayoutEffect(() => {
                    let e = f.current;
                    null != e && (e.onload = () => {
                        let t = e.naturalWidth / e.naturalHeight,
                            a = Math.max(.66, Math.min(t, 4));
                        1 === a ? h({
                            width: 104,
                            height: 104
                        }) : a > 1 ? h({
                            width: 104 * a,
                            height: void 0
                        }) : h({
                            width: void 0,
                            height: 104 / a
                        }), m(!0)
                    })
                }, []);
                let g = Math.max(16, (120 - (null !== (a = null === (t = f.current) || void 0 === t ? void 0 : t.width) && void 0 !== a ? a : 0)) / 2);
                return (0, s.jsx)("img", {
                    ref: f,
                    src: d,
                    className: i(v.icon, {
                        [v.image]: !c
                    }),
                    "aria-hidden": !0,
                    alt: "",
                    style: {
                        width: null !== (n = p.width) && void 0 !== n ? n : "initial",
                        height: null !== (r = p.height) && void 0 !== r ? r : 104,
                        marginLeft: g,
                        marginRight: g,
                        marginTop: null != p.height ? 104 - p.height - 33 : -33
                    }
                })
            }
            class L extends l.Component {
                render() {
                    var e;
                    if (this.props.upload.item.platform !== d.UploadPlatform.WEB) return null;
                    if (this.props.upload.isImage) return (0, s.jsx)(x, {
                        file: this.props.upload.item.file
                    });
                    return (0, s.jsx)("div", {
                        className: i(v.icon, {
                            [v[null !== (e = this.props.upload.classification) && void 0 !== e ? e : ""]]: !0
                        })
                    })
                }
            }
            class A extends l.Component {
                componentDidMount() {
                    var e;
                    (null === (e = this.props.upload) || void 0 === e ? void 0 : e.showLargeMessageDialog) && this.props.upload.item.platform === d.UploadPlatform.WEB && p.default.track(g.AnalyticEvents.OPEN_MODAL, {
                        type: "Upload Large Message",
                        message_content_length: this.props.upload.item.file.size
                    }), h.isPlatformEmbedded && f.default.focus()
                }
                shouldComponentUpdate(e) {
                    return null != e.upload
                }
                componentDidUpdate(e) {
                    var t, a, s, l;
                    (null === (t = e.upload) || void 0 === t ? void 0 : t.filename) !== (null === (a = this.props.upload) || void 0 === a ? void 0 : a.filename) && this.setState({
                        filename: null !== (l = null === (s = this.props.upload) || void 0 === s ? void 0 : s.filename) && void 0 !== l ? l : ""
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
                    return (0, s.jsxs)(r.ModalRoot, {
                        "aria-label": E.default.Messages.ATTACH_FILES,
                        size: r.ModalSize.DYNAMIC,
                        transitionState: t,
                        className: i(v.uploadModal),
                        children: [(0, s.jsxs)("div", {
                            className: v.inner,
                            children: [(0, s.jsxs)("div", {
                                className: i(v.file, {
                                    [v.expandable]: e.isImage
                                }),
                                children: [(0, s.jsx)(L, {
                                    upload: e
                                }), (0, s.jsxs)("div", {
                                    className: v.description,
                                    children: [(0, s.jsx)("div", {
                                        className: v.filename,
                                        children: e.showLargeMessageDialog ? E.default.Messages.LARGE_MESSAGE_UPLOAD_TITLE_MAX_LENGTH.format({
                                            maxLength: a
                                        }) : e.filename
                                    }), e.showLargeMessageDialog ? (0, s.jsx)("div", {
                                        className: v.subtitle,
                                        children: E.default.Messages.LARGE_MESSAGE_UPLOAD_SUBTITLE
                                    }) : null]
                                })]
                            }), (0, s.jsx)("div", {
                                className: v.comment,
                                children: (0, s.jsxs)(l.Fragment, {
                                    children: [(0, s.jsx)("div", {
                                        className: v.label,
                                        children: (0, s.jsx)("span", {
                                            children: E.default.Messages.UPLOAD_AREA_FILENAME
                                        })
                                    }), (0, s.jsx)(r.TextInput, {
                                        className: i(v.channelTextAreaUpload, M.marginTop8),
                                        value: this.state.filename,
                                        onChange: e => this.setState({
                                            filename: e
                                        }),
                                        onKeyDown: e => {
                                            if (e.which === g.KeyboardKeys.ENTER) return this.handleSubmit()
                                        }
                                    }), e.isImage ? (0, s.jsxs)(l.Fragment, {
                                        children: [(0, s.jsx)("div", {
                                            className: v.label,
                                            children: (0, s.jsx)("span", {
                                                children: E.default.Messages.ATTACHMENT_MODAL_IMAGE_DESCRIPTION_LABEL
                                            })
                                        }), (0, s.jsx)(r.TextInput, {
                                            className: i(v.channelTextAreaUpload, M.marginTop8),
                                            placeholder: E.default.Messages.ATTACHMENT_MODAL_IMAGE_DESCRIPTION_PLACEHOLDER,
                                            value: this.state.description,
                                            onChange: e => this.setState({
                                                description: e
                                            }),
                                            onKeyDown: e => {
                                                if (e.which === g.KeyboardKeys.ENTER) return this.handleSubmit()
                                            }
                                        })]
                                    }) : null, !0 !== n && (0, s.jsx)(r.Checkbox, {
                                        className: M.marginBottom20,
                                        value: o,
                                        onChange: (e, t) => this.setState({
                                            hasSpoiler: t
                                        }),
                                        children: (0, s.jsx)(r.Text, {
                                            variant: "text-sm/normal",
                                            children: E.default.Messages.SPOILER_MARK_SELECTED
                                        })
                                    })]
                                })
                            })]
                        }), (0, s.jsx)("div", {
                            className: v.footer,
                            children: (0, s.jsxs)("div", {
                                className: i(v.hasSpoilers, v.footerRightAlign),
                                children: [(0, s.jsx)(r.Button, {
                                    type: "button",
                                    look: r.Button.Looks.LINK,
                                    color: r.Button.Colors.PRIMARY,
                                    onClick: this.cancel,
                                    children: (0, s.jsx)("span", {
                                        children: E.default.Messages.CANCEL
                                    })
                                }), (0, s.jsx)(r.Button, {
                                    type: "submit",
                                    onClick: this.handleSubmit,
                                    children: (0, s.jsx)("span", {
                                        children: E.default.Messages.ATTACHMENT_MODAL_SAVE
                                    })
                                })]
                            })
                        })]
                    })
                }
                constructor(e) {
                    var t, a, s, l, n, i;
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
                            filename: s,
                            description: l,
                            hasSpoiler: n
                        } = this.state;
                        a({
                            upload: e,
                            name: s,
                            description: l,
                            spoiler: n
                        }), t()
                    };
                    let r = e.ignoreDraft ? "" : m.default.getDraft(this.props.channelId, e.draftType);
                    this.state = {
                        ...(0, u.createState)(r),
                        textFocused: !0,
                        hasSpoiler: null !== (l = null === (t = e.upload) || void 0 === t ? void 0 : t.spoiler) && void 0 !== l && l,
                        filename: null !== (n = null === (a = e.upload) || void 0 === a ? void 0 : a.filename) && void 0 !== n ? n : "",
                        contentWarningProps: null,
                        description: null !== (i = null === (s = e.upload) || void 0 === s ? void 0 : s.description) && void 0 !== i ? i : ""
                    }
                }
            }

            function j(e) {
                let t = (0, c.default)();
                return e.upload.item.platform !== d.UploadPlatform.WEB ? null : (0, s.jsx)(A, {
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
            var s = a("37983"),
                l = a("884691"),
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
                return (0, s.jsx)(r.Tooltip, {
                    text: n,
                    hideOnClick: !0,
                    children: e => {
                        let {
                            onMouseEnter: r,
                            onMouseLeave: m,
                            onClick: p
                        } = e;
                        return (0, s.jsx)(o.Button, {
                            onMouseEnter: r,
                            onMouseLeave: m,
                            onClick: e => {
                                e.stopPropagation(), null == p || p(), t(e)
                            },
                            dangerous: u,
                            "aria-label": n,
                            className: c,
                            children: l.Children.map(a, e => l.isValidElement(e) ? l.cloneElement(e, {
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
                    return l
                },
                default: function() {
                    return M
                }
            });
            var s, l, n = a("37983"),
                i = a("884691"),
                r = a("414456"),
                o = a.n(r),
                d = a("974667"),
                u = a("77078"),
                c = a("81594"),
                m = a("149279"),
                p = a("659500"),
                h = a("645406"),
                f = a("49111"),
                g = a("782340"),
                E = a("864147");

            function v(e) {
                e.stopPropagation()
            }(s = l || (l = {}))[s.SMALL = 0] = "SMALL", s[s.MEDIUM = 1] = "MEDIUM";
            var M = i.forwardRef(function(e, t) {
                let {
                    id: a,
                    channelId: s,
                    className: i,
                    children: r,
                    actions: M,
                    handleEditModal: x,
                    keyboardModeEnabled: L,
                    onKeyDown: A,
                    draftType: j,
                    size: T = l.MEDIUM
                } = e, {
                    onFocus: S,
                    ...I
                } = (0, d.useListItem)(a), {
                    handleFocus: N,
                    handleBlur: C
                } = (0, h.useFocusInside)(S), _ = T === l.SMALL;
                return (0, n.jsx)(u.FocusRing, {
                    children: (0, n.jsx)("li", {
                        ...I,
                        onFocus: N,
                        onBlur: C,
                        onKeyDown: e => {
                            if (L) {
                                switch (e.which) {
                                    case f.KeyboardKeys.D:
                                        e.preventDefault(), c.default.remove(s, a, j);
                                        return;
                                    case f.KeyboardKeys.E:
                                        null != x && (e.preventDefault(), x(e));
                                        return;
                                    case f.KeyboardKeys.BACKSPACE:
                                        e.ctrlKey ? (e.preventDefault(), c.default.clearAll(s, j)) : (e.preventDefault(), c.default.remove(s, a, j));
                                        return;
                                    case f.KeyboardKeys.ARROW_UP:
                                        let t = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey;
                                        if (t) return;
                                        e.preventDefault(), p.ComponentDispatch.dispatchToLastSubscribed(f.ComponentActions.FOCUS_MESSAGES, {
                                            atEnd: !0
                                        })
                                }
                                null == A || A(e)
                            }
                        },
                        className: o(E.upload, i),
                        ref: t,
                        children: (0, n.jsxs)("div", {
                            className: E.uploadContainer,
                            children: [r, null != M ? (0, n.jsx)("div", {
                                className: E.actionBarContainer,
                                children: (0, n.jsx)("div", {
                                    className: o(E.actionBar, {
                                        [E.smallActionBar]: _
                                    }),
                                    onContextMenu: v,
                                    "aria-label": g.default.Messages.ATTACHMENT_UTILITIES,
                                    children: (0, n.jsx)(m.default, {
                                        className: o({
                                            [E.miniPopover]: _
                                        }),
                                        children: M
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
                    return l
                }
            });
            var s = a("884691");

            function l(e, t) {
                let [a, l] = (0, s.useState)(!1), n = (0, s.useCallback)(t => {
                    (t.target === t.currentTarget || t.currentTarget.contains(document.activeElement)) && l(!0), null != e && e(t)
                }, [e]), i = (0, s.useCallback)(e => {
                    (e.target === e.currentTarget || !e.currentTarget.contains(document.activeElement)) && l(!1), null != t && t(e)
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
                    return N
                }
            });
            var s = a("37983"),
                l = a("884691"),
                n = a("414456"),
                i = a.n(n),
                r = a("77078"),
                o = a("81594"),
                d = a("467339"),
                u = a("966724"),
                c = a("474643"),
                m = a("505684"),
                p = a("462579"),
                h = a("867544"),
                f = a("987772"),
                g = a("228220"),
                E = a("58608"),
                v = a("9560"),
                M = a("271972"),
                x = a("782340"),
                L = a("454101");
            let A = ["image/jpeg", "image/png", "image/webp", "image/gif", "video/quicktime", "video/mp4"];

            function j(e) {
                let {
                    alt: t,
                    spoiler: a,
                    renderContent: n
                } = e, [i, r] = l.useState(!1);
                return (0, s.jsx)(m.ObscuredDisplayContext.Provider, {
                    value: !a,
                    children: (0, s.jsx)(m.default, {
                        type: m.default.Types.ATTACHMENT,
                        onReveal: () => r(!0),
                        className: L.spoilerContainer,
                        children: e => (0, s.jsxs)("div", {
                            className: L.spoilerWrapper,
                            children: [n(e), (0, s.jsxs)("div", {
                                className: L.tags,
                                children: [null != t && "" !== t ? (0, s.jsx)("span", {
                                    className: L.altTag,
                                    children: x.default.Messages.IMAGE_ALT
                                }) : null, i && a ? (0, s.jsx)("span", {
                                    className: L.altTag,
                                    children: x.default.Messages.SPOILER
                                }) : null]
                            })]
                        })
                    })
                })
            }

            function T(e) {
                let {
                    file: t,
                    alt: a,
                    spoiler: n,
                    size: r = M.AttachmentListItemSizes.MEDIUM,
                    onMouseEnter: o
                } = e, [d, u] = l.useState(), c = l.useRef(null), m = r === M.AttachmentListItemSizes.SMALL;
                return l.useEffect(() => {
                    if (null == t || !1 === A.includes(t.type)) return;
                    let e = URL.createObjectURL(t);
                    return u(e), () => {
                        u(void 0), URL.revokeObjectURL(e)
                    }
                }, [t]), (0, s.jsx)("div", {
                    onMouseEnter: o,
                    className: i(L.mediaContainer, {
                        [L.imageSmall]: m
                    }),
                    children: (0, s.jsx)(j, {
                        alt: a,
                        spoiler: n,
                        renderContent: e => (0, s.jsx)("img", {
                            ref: c,
                            src: d,
                            className: i(L.media, {
                                [L.spoiler]: e,
                                [L.imageSmall]: m
                            }),
                            "aria-hidden": !0,
                            alt: null != a ? a : ""
                        })
                    })
                })
            }

            function S(e) {
                let {
                    file: t,
                    alt: a,
                    spoiler: n,
                    onMouseEnter: r,
                    onVideoLoadError: o
                } = e, [d, u] = l.useState(), c = l.useRef(null);
                return l.useEffect(() => {
                    if (null == t) return;
                    let e = URL.createObjectURL(t);
                    return u(e), () => {
                        u(void 0), URL.revokeObjectURL(e)
                    }
                }, [t]), (0, s.jsx)("div", {
                    onMouseEnter: r,
                    className: L.mediaContainer,
                    children: (0, s.jsx)(j, {
                        alt: a,
                        spoiler: n,
                        renderContent: e => (0, s.jsx)(E.default, {
                            ref: c,
                            src: d,
                            className: i(L.media, {
                                [L.spoiler]: e
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
                    size: n = M.AttachmentListItemSizes.MEDIUM,
                    onMouseEnter: r
                } = e, [o, d] = l.useState(!1), c = n === M.AttachmentListItemSizes.SMALL;
                return a.isImage && a.item.platform === u.UploadPlatform.WEB ? (0, s.jsx)(T, {
                    file: a.item.file,
                    alt: a.description,
                    spoiler: a.spoiler,
                    size: n,
                    onMouseEnter: r
                }) : !o && a.isVideo && a.item.platform === u.UploadPlatform.WEB ? (0, s.jsx)(S, {
                    file: a.item.file,
                    alt: a.description,
                    spoiler: a.spoiler,
                    onMouseEnter: r,
                    onVideoLoadError: () => d(!0)
                }) : (0, s.jsx)("div", {
                    onMouseEnter: r,
                    className: i(L.icon, L.imageContainer, {
                        [L[null !== (t = a.classification) && void 0 !== t ? t : ""]]: !0,
                        [L.imageSmall]: c
                    }),
                    children: (0, s.jsx)("div", {
                        className: L.tags,
                        children: a.spoiler ? (0, s.jsx)("span", {
                            className: L.altTag,
                            children: x.default.Messages.SPOILER
                        }) : null
                    })
                })
            }

            function N(e) {
                let {
                    channelId: t,
                    draftType: a,
                    upload: n,
                    keyboardModeEnabled: u,
                    label: m,
                    size: E = M.AttachmentListItemSizes.MEDIUM,
                    canEdit: A = !0,
                    hideFileName: j = !1
                } = e, T = E === M.AttachmentListItemSizes.SMALL, S = e => {
                    e.stopPropagation(), (0, r.openModal)(e => (0, s.jsx)(d.default, {
                        ...e,
                        draftType: c.DraftType.ChannelMessage,
                        upload: n,
                        channelId: t,
                        onSubmit: e => {
                            let {
                                name: s,
                                description: l,
                                spoiler: i
                            } = e;
                            o.default.update(t, n.id, a, {
                                filename: s,
                                description: l,
                                spoiler: i
                            })
                        }
                    }))
                };
                return (0, s.jsxs)(M.default, {
                    actions: (0, s.jsxs)(l.Fragment, {
                        children: [A ? (0, s.jsx)(v.default, {
                            className: i({
                                [L.action]: T
                            }),
                            tooltip: x.default.Messages.ATTACHMENT_UTILITIES_SPOILER,
                            onClick: () => o.default.update(t, n.id, a, {
                                spoiler: !n.spoiler
                            }),
                            children: n.spoiler ? (0, s.jsx)(h.default, {
                                className: i({
                                    [L.actionBarIcon]: T
                                })
                            }) : (0, s.jsx)(p.default, {
                                className: i({
                                    [L.actionBarIcon]: T
                                })
                            })
                        }) : null, A ? (0, s.jsx)(v.default, {
                            className: i({
                                [L.action]: T
                            }),
                            tooltip: x.default.Messages.ATTACHMENT_UTILITIES_MODIFY,
                            onClick: S,
                            children: (0, s.jsx)(f.default, {
                                className: i({
                                    [L.actionBarIcon]: T
                                })
                            })
                        }) : null, (0, s.jsx)(v.default, {
                            className: i({
                                [L.action]: T
                            }),
                            tooltip: x.default.Messages.ATTACHMENT_UTILITIES_REMOVE,
                            onClick: () => o.default.remove(t, n.id, a),
                            dangerous: !0,
                            children: (0, s.jsx)(g.default, {
                                className: i({
                                    [L.actionBarIcon]: T
                                })
                            })
                        })]
                    }),
                    draftType: a,
                    id: n.id,
                    channelId: t,
                    handleEditModal: S,
                    keyboardModeEnabled: u,
                    size: E,
                    className: i({
                        [L.attachmentItemSmall]: T
                    }),
                    children: [(0, s.jsx)(I, {
                        upload: n,
                        size: E
                    }), !j && (0, s.jsx)("div", {
                        className: L.filenameContainer,
                        children: (0, s.jsx)(r.Text, {
                            className: L.filename,
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
            var s = a("446674"),
                l = a("697218"),
                n = a("719923"),
                i = a("49111");

            function r() {
                let e = (0, s.useStateFromStores)([l.default], () => n.default.canUseIncreasedMessageLength(l.default.getCurrentUser()));
                return e ? i.MAX_MESSAGE_LENGTH_PREMIUM : i.MAX_MESSAGE_LENGTH
            }
        }
    }
]);
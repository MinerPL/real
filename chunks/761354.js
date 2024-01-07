            "use strict";
            a.r(t), a.d(t, {
                UploadIcon: function() {
                    return T
                },
                default: function() {
                    return I
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
                c = a("505684"),
                m = a("462579"),
                h = a("867544"),
                p = a("987772"),
                f = a("228220"),
                g = a("58608"),
                v = a("103603"),
                x = a("9560"),
                M = a("271972"),
                E = a("782340"),
                j = a("454101");
            let A = ["image/jpeg", "image/png", "image/webp", "image/gif", "video/quicktime", "video/mp4"];

            function L(e) {
                let {
                    alt: t,
                    spoiler: a,
                    renderContent: n
                } = e, [i, r] = s.useState(!1);
                return (0, l.jsx)(c.ObscuredDisplayContext.Provider, {
                    value: !a,
                    children: (0, l.jsx)(c.default, {
                        type: c.default.Types.ATTACHMENT,
                        onReveal: () => r(!0),
                        className: j.spoilerContainer,
                        children: e => (0, l.jsxs)("div", {
                            className: j.spoilerWrapper,
                            children: [n(e), (0, l.jsxs)("div", {
                                className: j.tags,
                                children: [null != t && "" !== t ? (0, l.jsx)("span", {
                                    className: j.altTag,
                                    children: E.default.Messages.IMAGE_ALT
                                }) : null, i && a ? (0, l.jsx)("span", {
                                    className: j.altTag,
                                    children: E.default.Messages.SPOILER
                                }) : null]
                            })]
                        })
                    })
                })
            }

            function N(e) {
                let {
                    file: t,
                    alt: a,
                    spoiler: n,
                    size: o = M.AttachmentListItemSizes.MEDIUM,
                    onMouseEnter: d
                } = e, [u, c] = s.useState(), [m, h] = s.useState({
                    width: 0,
                    height: 0
                }), p = o === M.AttachmentListItemSizes.SMALL;
                s.useEffect(() => {
                    if (null == t || !1 === A.includes(t.type)) return;
                    let e = URL.createObjectURL(t);
                    c(e);
                    let a = new Image;
                    return a.onload = () => {
                        let {
                            width: e,
                            height: t
                        } = (0, v.zoomFit)(a.width, a.height);
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
                            className: i(j.media, {
                                [j.spoiler]: e,
                                [j.imageSmall]: p
                            }),
                            "aria-hidden": !0,
                            alt: null != a ? a : "",
                            style: t ? m : {}
                        })
                    }, [u, p, a, m]),
                    g = s.useCallback(() => {
                        null != u && (0, r.openModal)(e => (0, l.jsx)(r.ModalRoot, {
                            className: j.modal,
                            ...e,
                            size: r.ModalSize.DYNAMIC,
                            "aria-label": E.default.Messages.IMAGE,
                            children: f(!1, !0)
                        }))
                    }, [u, f]);
                return (0, l.jsx)("div", {
                    onMouseEnter: d,
                    className: i(j.mediaContainer, {
                        [j.imageSmall]: p
                    }),
                    children: (0, l.jsx)(r.Clickable, {
                        onClick: g,
                        className: j.clickableMedia,
                        children: (0, l.jsx)(L, {
                            alt: a,
                            spoiler: n,
                            renderContent: f
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
                } = e, [d, u] = s.useState(), c = s.useRef(null);
                return s.useEffect(() => {
                    if (null == t) return;
                    let e = URL.createObjectURL(t);
                    return u(e), () => {
                        u(void 0), URL.revokeObjectURL(e)
                    }
                }, [t]), (0, l.jsx)("div", {
                    onMouseEnter: r,
                    className: j.mediaContainer,
                    children: (0, l.jsx)(L, {
                        alt: a,
                        spoiler: n,
                        renderContent: e => (0, l.jsx)(g.default, {
                            ref: c,
                            src: d,
                            className: i(j.media, {
                                [j.spoiler]: e
                            }),
                            onError: o,
                            preload: "none",
                            "aria-hidden": !0
                        })
                    })
                })
            }

            function T(e) {
                var t;
                let {
                    upload: a,
                    size: n = M.AttachmentListItemSizes.MEDIUM,
                    onMouseEnter: r
                } = e, [o, d] = s.useState(!1), c = n === M.AttachmentListItemSizes.SMALL;
                return a.isImage && a.item.platform === u.UploadPlatform.WEB ? (0, l.jsx)(N, {
                    file: a.item.file,
                    alt: a.description,
                    spoiler: a.spoiler,
                    size: n,
                    onMouseEnter: r
                }) : !o && a.isVideo && a.item.platform === u.UploadPlatform.WEB ? (0, l.jsx)(S, {
                    file: a.item.file,
                    alt: a.description,
                    spoiler: a.spoiler,
                    onMouseEnter: r,
                    onVideoLoadError: () => d(!0)
                }) : (0, l.jsx)("div", {
                    onMouseEnter: r,
                    className: i(j.icon, j.imageContainer, {
                        [j[null !== (t = a.classification) && void 0 !== t ? t : ""]]: !0,
                        [j.imageSmall]: c
                    }),
                    children: (0, l.jsx)("div", {
                        className: j.tags,
                        children: a.spoiler ? (0, l.jsx)("span", {
                            className: j.altTag,
                            children: E.default.Messages.SPOILER
                        }) : null
                    })
                })
            }

            function I(e) {
                let {
                    channelId: t,
                    draftType: a,
                    upload: n,
                    keyboardModeEnabled: u,
                    label: c,
                    size: g = M.AttachmentListItemSizes.MEDIUM,
                    canEdit: v = !0,
                    hideFileName: A = !1
                } = e, L = g === M.AttachmentListItemSizes.SMALL, N = e => {
                    e.stopPropagation(), (0, r.openModal)(e => (0, l.jsx)(d.default, {
                        ...e,
                        draftType: a,
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
                return (0, l.jsxs)(M.default, {
                    actions: (0, l.jsxs)(s.Fragment, {
                        children: [v ? (0, l.jsx)(x.default, {
                            className: i({
                                [j.action]: L
                            }),
                            tooltip: E.default.Messages.ATTACHMENT_UTILITIES_SPOILER,
                            onClick: () => o.default.update(t, n.id, a, {
                                spoiler: !n.spoiler
                            }),
                            children: n.spoiler ? (0, l.jsx)(h.default, {
                                className: i({
                                    [j.actionBarIcon]: L
                                })
                            }) : (0, l.jsx)(m.default, {
                                className: i({
                                    [j.actionBarIcon]: L
                                })
                            })
                        }) : null, v ? (0, l.jsx)(x.default, {
                            className: i({
                                [j.action]: L
                            }),
                            tooltip: E.default.Messages.ATTACHMENT_UTILITIES_MODIFY,
                            onClick: N,
                            children: (0, l.jsx)(p.default, {
                                className: i({
                                    [j.actionBarIcon]: L
                                })
                            })
                        }) : null, (0, l.jsx)(x.default, {
                            className: i({
                                [j.action]: L
                            }),
                            tooltip: E.default.Messages.ATTACHMENT_UTILITIES_REMOVE,
                            onClick: () => o.default.remove(t, n.id, a),
                            dangerous: !0,
                            children: (0, l.jsx)(f.default, {
                                className: i({
                                    [j.actionBarIcon]: L
                                })
                            })
                        })]
                    }),
                    draftType: a,
                    id: n.id,
                    channelId: t,
                    handleEditModal: N,
                    keyboardModeEnabled: u,
                    size: g,
                    className: i({
                        [j.attachmentItemSmall]: L
                    }),
                    children: [(0, l.jsx)(T, {
                        upload: n,
                        size: g
                    }), !A && (0, l.jsx)("div", {
                        className: j.filenameContainer,
                        children: (0, l.jsx)(r.Text, {
                            className: j.filename,
                            variant: "text-sm/normal",
                            children: null != c ? c : n.filename
                        })
                    })]
                })
            }
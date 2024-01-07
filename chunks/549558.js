            "use strict";
            a.r(t), a.d(t, {
                MediaPostThumbnail: function() {
                    return b
                }
            });
            var s = a("37983"),
                n = a("884691"),
                l = a("414456"),
                r = a.n(l),
                i = a("627445"),
                o = a.n(i),
                u = a("65597"),
                d = a("77078"),
                c = a("81594"),
                m = a("206230"),
                h = a("850391"),
                f = a("9560"),
                g = a("271972"),
                x = a("578198"),
                C = a("855455"),
                T = a("476765"),
                _ = a("857171"),
                S = a("832132"),
                p = a("808404"),
                E = a("987772"),
                N = a("228220"),
                M = a("58608"),
                A = a("412861"),
                v = a("42418"),
                I = a("782340"),
                j = a("73386");
            let R = [{
                    name: "Media Post Thumbnail",
                    extensions: ["jpg", "jpeg", "png", "gif", "webp"]
                }],
                O = (0, T.uid)();

            function F(e) {
                let {
                    mediaAttachments: t,
                    containerWidth: a,
                    containerHeight: n
                } = e, l = (0, C.useImageContainerStyles)({
                    numAttachments: t.length,
                    containerWidth: a,
                    containerHeight: n
                });
                return (0, s.jsx)(s.Fragment, {
                    children: t.map((e, t) => {
                        var a;
                        return (0, s.jsx)("div", {
                            style: l[t],
                            children: !0 === e.isVideo ? (0, s.jsx)(M.default, {
                                src: e.src,
                                className: j.thumbnail,
                                "aria-hidden": !0
                            }) : (0, s.jsx)("img", {
                                src: e.src,
                                className: j.thumbnail,
                                "aria-hidden": !0,
                                alt: null !== (a = null == e ? void 0 : e.alt) && void 0 !== a ? a : ""
                            })
                        }, e.src)
                    })
                })
            }
            let b = e => {
                var t;
                let {
                    parentChannel: l
                } = e, {
                    textAreaState: i
                } = (0, x.useForumPostComposerStore)(e => {
                    let {
                        textAreaState: t
                    } = e;
                    return {
                        textAreaState: t
                    }
                }), C = (0, u.default)([m.default], () => m.default.keyboardModeEnabled), T = (0, v.default)(l, null === (t = i.textValue) || void 0 === t ? void 0 : t.trim()), M = n.useMemo(() => T.find(e => e.isThumbnail), [T]), b = null != T && T.length > 0, L = n.useMemo(() => {
                    let e = (null == T ? void 0 : T.length) > 1 ? 1.15 : 1;
                    return {
                        width: 153 * e,
                        height: 86 * e
                    }
                }, [T]), P = n.useCallback(e => {
                    null != M && c.default.remove(l.id, M.id, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type), (0, A.promptToUpload)(e.currentTarget.files, l, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type, {
                        requireConfirm: !0,
                        isThumbnail: !0
                    }), e.currentTarget.value = null
                }, [l, M]), y = e => {
                    e.stopPropagation(), (null == M ? void 0 : M.upload) != null && (0, d.openModalLazy)(async () => {
                        let e = M.upload;
                        o(null != e, "upload should not be null");
                        let {
                            default: t
                        } = await a.el("467339").then(a.bind(a, "467339"));
                        return a => (0, s.jsx)(t, {
                            ...a,
                            upload: e,
                            channelId: l.id,
                            draftType: h.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
                            onSubmit: t => {
                                let {
                                    name: a,
                                    description: s,
                                    spoiler: n
                                } = t;
                                c.default.update(l.id, e.id, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type, {
                                    filename: a,
                                    description: s,
                                    spoiler: n
                                })
                            },
                            disableSpoiler: !0
                        })
                    })
                }, D = (0, s.jsx)(_.default, {
                    color: d.ButtonColors.CUSTOM,
                    className: r(j.uploadFileInputContainer),
                    innerClassName: j.uploadThumbnailContainer,
                    onChange: P,
                    multiple: !1,
                    "aria-hidden": !0,
                    filters: R,
                    "aria-describedby": O,
                    "aria-label": b ? I.default.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL : I.default.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL,
                    children: b ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(F, {
                            mediaAttachments: T,
                            containerWidth: L.width,
                            containerHeight: L.height
                        }), (0, s.jsxs)("div", {
                            className: r(j.changeThumbnailLabelContainer, {
                                [j.changeThumbnailLabelOverflow]: (null == T ? void 0 : T.length) > 2
                            }),
                            children: [(0, s.jsx)(d.Text, {
                                variant: "text-xs/medium",
                                color: "header-secondary",
                                children: I.default.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL
                            }), null == M && (0, s.jsx)(S.default, {
                                className: j.editIcon,
                                width: 16,
                                height: 16
                            })]
                        })]
                    }) : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(p.default, {
                            className: j.uploadIcon
                        }), (0, s.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: I.default.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL
                        })]
                    })
                });
                return (0, s.jsx)("div", {
                    className: j.thumbnailContainer,
                    style: L,
                    children: null != M ? (0, s.jsx)(g.default, {
                        actions: (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(f.default, {
                                className: j.action,
                                tooltip: I.default.Messages.ATTACHMENT_UTILITIES_MODIFY,
                                onClick: y,
                                children: (0, s.jsx)(E.default, {})
                            }), (0, s.jsx)(f.default, {
                                className: j.action,
                                tooltip: I.default.Messages.ATTACHMENT_UTILITIES_REMOVE,
                                onClick: () => c.default.remove(l.id, M.id, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type),
                                dangerous: !0,
                                children: (0, s.jsx)(N.default, {})
                            })]
                        }),
                        draftType: h.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
                        id: M.id,
                        channelId: l.id,
                        handleEditModal: y,
                        keyboardModeEnabled: C,
                        size: g.AttachmentListItemSizes.SMALL,
                        className: j.attachmentListItem,
                        children: D
                    }) : (0, s.jsx)(s.Fragment, {
                        children: D
                    })
                })
            }
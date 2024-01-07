            "use strict";
            A.r(t), A.d(t, {
                AttachmentsUploadComponent: function() {
                    return N
                }
            }), A("222007");
            var a = A("37983"),
                l = A("884691"),
                n = A("414456"),
                r = A.n(n),
                s = A("77078"),
                o = A("160864"),
                i = A("966724"),
                d = A("20606"),
                u = A("191814"),
                c = A("476765"),
                f = A("857171"),
                C = A("945330"),
                g = A("903635"),
                h = A("696104"),
                T = A("949435"),
                m = A("757515"),
                p = A("527382"),
                U = A("500307"),
                I = A("782340"),
                v = A("245793");
            let E = (0, c.uid)();

            function x(e) {
                var t;
                let {
                    upload: A,
                    progress: n = 0,
                    onDeleteAttachment: o
                } = e, i = l.useCallback(() => {
                    null == o || o(A.id)
                }, [o, A.id]), c = n >= 1, f = n < 0, h = c || f, T = null !== (t = A.filename) && void 0 !== t ? t : A.id, p = (0, m.describeUploadProgressError)(n);
                return (0, a.jsx)(s.TooltipContainer, {
                    text: p,
                    children: (0, a.jsxs)("div", {
                        className: r(v.attachedFileCard, {
                            [v.attachedFileCardError]: f,
                            [v.attachedFileCardUploading]: !h
                        }),
                        children: [(0, a.jsx)(g.default, {
                            width: 16,
                            height: 16,
                            color: d.default.INTERACTIVE_MUTED
                        }), (0, a.jsx)(u.default, {
                            size: 10,
                            horizontal: !0
                        }), (0, a.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: T
                        }), !h && (0, a.jsx)(s.Spinner, {
                            className: v.attachedFileCardSpinner,
                            type: s.Spinner.Type.SPINNING_CIRCLE
                        }), h && null != o && (0, a.jsx)(s.Button, {
                            "aria-label": I.default.Messages.GUILD_PRODUCT_DELETE_ATTACHMENT.format({
                                attachment: T
                            }),
                            className: v.deleteButton,
                            innerClassName: v.deleteButtonInner,
                            look: s.Button.Looks.BLANK,
                            size: s.Button.Sizes.NONE,
                            onClick: i,
                            children: (0, a.jsx)(C.default, {
                                width: 12,
                                height: 12,
                                className: v.deleteIcon
                            })
                        })]
                    })
                })
            }

            function N(e) {
                let {
                    onFileAdded: t
                } = e, {
                    uploads: A,
                    canAttachFiles: n,
                    canAttachArchives: r,
                    addAttachment: d,
                    deleteAttachment: c,
                    fileUploadProgresses: C
                } = (0, T.useGuildProductAttachmentManagerContext)(), g = l.useRef(!1);

                function m(e) {
                    try {
                        for (let t of e) d({
                            platform: i.UploadPlatform.WEB,
                            file: t
                        });
                        g.current = !0
                    } catch {}
                }
                return l.useEffect(() => {
                    g.current && (t(), g.current = !1)
                }, [t]), (0, a.jsxs)("div", {
                    className: v.container,
                    children: [(0, a.jsx)(o.default, {
                        className: v.uploadArea,
                        title: I.default.Messages.GUILD_PRODUCT_UPLOAD_AREA_TITLE,
                        description: I.default.Messages.GUILD_PRODUCT_UPLOAD_AREA_INSTRUCTIONS,
                        icons: p.DEFAULT_FILE_UPLOAD_ICONS,
                        onDrop: m
                    }), (0, a.jsxs)(f.default, {
                        className: v.addFileButtonLook,
                        innerClassName: v.addFileButton,
                        color: s.Button.Colors.CUSTOM,
                        disabled: !n,
                        "aria-label": I.default.Messages.GUILD_PRODUCT_UPLOAD_FILE_BUTTON,
                        "aria-describedby": E,
                        multiple: !0,
                        onChange: function(e) {
                            null != e.currentTarget.files && m(e.currentTarget.files)
                        },
                        children: [(0, a.jsx)(h.default, {
                            color: "currentColor",
                            width: 16,
                            height: 16,
                            className: v.addFileButtonIcon,
                            "aria-hidden": !0
                        }), (0, a.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "always-white",
                            children: I.default.Messages.GUILD_PRODUCT_UPLOAD_FILE_BUTTON
                        })]
                    }), (0, a.jsx)(u.default, {
                        size: 12
                    }), (0, a.jsx)(s.Text, {
                        id: E,
                        color: "text-muted",
                        variant: "text-xs/normal",
                        children: r ? I.default.Messages.GUILD_PRODUCT_UPLOAD_ATTACHMENT_INSTRUCTIONS_ARCHIVES_ALLOWED.format({
                            fileUploadLimit: U.GUILD_PRODUCT_MAX_TOTAL_ATTACHMENT_SIZE
                        }) : I.default.Messages.GUILD_PRODUCT_UPLOAD_ATTACHMENT_INSTRUCTIONS.format({
                            fileUploadLimit: U.GUILD_PRODUCT_MAX_TOTAL_ATTACHMENT_SIZE
                        })
                    }), A.length > 0 && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: v.separator
                        }), (0, a.jsx)("ul", {
                            className: v.attachedFilesContainer,
                            "aria-label": I.default.Messages.GUILD_PRODUCT_ATTACHED_FILES_SECTION_LABEL,
                            children: A.map(e => (0, a.jsx)("li", {
                                children: (0, a.jsx)(x, {
                                    upload: e,
                                    onDeleteAttachment: c,
                                    progress: C[e.id]
                                })
                            }, e.id))
                        })]
                    })]
                })
            }
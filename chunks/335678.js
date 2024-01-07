            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return T
                }
            });
            var s = a("37983"),
                l = a("884691"),
                i = a("77078"),
                n = a("79112"),
                o = a("545158"),
                d = a("775032"),
                r = a("701909"),
                c = a("447435"),
                u = a("49111"),
                E = a("782340"),
                _ = a("283981"),
                M = a("461757"),
                T = e => {
                    let {
                        channelId: t,
                        messageId: T,
                        transitionState: I,
                        onClose: C
                    } = e, R = (0, d.default)(), A = l.useCallback(e => {
                        (0, c.trackMediaRedactionAction)({
                            action: e,
                            channelId: t,
                            messageId: T
                        })
                    }, [t, T]);
                    return l.useEffect(() => {
                        (0, c.trackMediaRedactionAction)({
                            action: c.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
                            channelId: t,
                            messageId: T
                        })
                    }, [t, T]), (0, s.jsxs)(i.ModalRoot, {
                        transitionState: I,
                        "aria-label": E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_MODAL_LABEL,
                        children: [(0, s.jsx)(i.ModalHeader, {
                            separator: !1,
                            className: _.modalHeader,
                            children: (0, s.jsx)("img", {
                                src: M,
                                alt: E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER_IMAGE_ALT,
                                className: _.headerImg
                            })
                        }), (0, s.jsxs)(i.ModalContent, {
                            className: _.modalBody,
                            children: [(0, s.jsx)(i.Heading, {
                                variant: "heading-lg/bold",
                                className: _.modalInteriorHeader,
                                children: E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER
                            }), (0, s.jsx)(i.Text, {
                                variant: "text-md/normal",
                                color: "header-secondary",
                                children: R ? E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_ADULT : E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_TEEN
                            }), (0, s.jsxs)("div", {
                                className: _.buttonContainer,
                                children: [R ? (0, s.jsx)(i.Button, {
                                    color: i.Button.Colors.BRAND,
                                    onClick: function() {
                                        A(c.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), n.default.open(u.UserSettingsSections.PRIVACY_AND_SAFETY), C()
                                    },
                                    fullWidth: !0,
                                    children: E.default.Messages.OBSCURED_CONTENT_UPDATE_SETTINGS_CTA
                                }) : (0, s.jsx)(i.Button, {
                                    color: i.Button.Colors.BRAND,
                                    onClick: () => {
                                        (0, o.default)(r.default.getArticleURL(u.HelpdeskArticles.EXPLICIT_MEDIA_REDACTION))
                                    },
                                    fullWidth: !0,
                                    children: E.default.Messages.LEARN_MORE
                                }), (0, s.jsx)(i.Button, {
                                    color: i.Button.Colors.PRIMARY,
                                    onClick: function() {
                                        C(), A(c.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS)
                                    },
                                    fullWidth: !0,
                                    children: E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_DISMISS
                                }), (0, s.jsx)(i.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-secondary",
                                    children: E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format({
                                        handleFalsePositiveHook: () => {
                                            C(), A(c.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE), (0, i.openModalLazy)(async () => {
                                                let {
                                                    default: e
                                                } = await a("723653");
                                                return a => (0, s.jsx)(e, {
                                                    channelId: t,
                                                    messageId: T,
                                                    ...a
                                                })
                                            })
                                        }
                                    })
                                })]
                            })]
                        })]
                    })
                }
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["71314"], {
        461757: function(e, t, a) {
            "use strict";
            e.exports = a.p + "fc684abfc7369958435c.svg"
        },
        612920: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                SUPPORTED_EMBED_TYPES: function() {
                    return l
                }
            }), a("222007");
            var s = a("246111");
            let l = new Set([s.MessageEmbedTypes.IMAGE, s.MessageEmbedTypes.VIDEO, s.MessageEmbedTypes.GIFV])
        },
        908480: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useExplicitMediaActions: function() {
                    return n
                }
            }), a("222007");
            var s = a("884691"),
                l = a("448993"),
                i = a("695681");

            function n(e) {
                let {
                    onError: t,
                    onSuccess: a
                } = null != e ? e : {}, [n, o] = s.useState(!1), d = s.useCallback(async (e, s, d, r) => {
                    if (!n) {
                        o(!0);
                        try {
                            await (0, i.reportFalsePositive)(e, s, d, r), null == a || a()
                        } catch (a) {
                            let e = new l.APIError(a);
                            null == t || t(e)
                        } finally {
                            o(!1)
                        }
                    }
                }, [n, t, a]);
                return {
                    reportFalsePositive: d,
                    isReportFalsePositiveLoading: n
                }
            }
        },
        39393: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useExplicitMediaAttachmentsForMessage: function() {
                    return n
                },
                useExplicitMediaEmbedsForMessage: function() {
                    return o
                }
            });
            var s = a("65597"),
                l = a("377253"),
                i = a("793441");
            let n = (e, t, a) => {
                    var n, o;
                    let d = (0, s.default)([l.default], () => l.default.getMessage(e, t));
                    if (null == d) return [];
                    let r = void 0 !== a ? e => e.id === a : e => (0, i.isMediaObscured)({
                        type: i.ObscuredMediaTypes.Attachment,
                        media: e
                    }, (0, i.shouldRedactExplicitContent)(d));
                    return null !== (o = null == d ? void 0 : null === (n = d.attachments) || void 0 === n ? void 0 : n.filter(r)) && void 0 !== o ? o : []
                },
                o = (e, t, a) => {
                    var n, o;
                    let d = (0, s.default)([l.default], () => l.default.getMessage(e, t));
                    if (null == d) return [];
                    let r = void 0 !== a ? e => e.id === a : e => (0, i.isMediaObscured)({
                        type: i.ObscuredMediaTypes.Embed,
                        media: e
                    }, (0, i.shouldRedactExplicitContent)(d));
                    return null !== (o = null == d ? void 0 : null === (n = d.embeds) || void 0 === n ? void 0 : n.filter(r)) && void 0 !== o ? o : []
                }
        },
        723653: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return O
                }
            });
            var s = a("37983"),
                l = a("884691"),
                i = a("414456"),
                n = a.n(i),
                o = a("246111"),
                d = a("77078"),
                r = a("772017"),
                c = a("651693"),
                u = a("476765"),
                E = a("58608"),
                _ = a("457971"),
                M = a("793441"),
                T = a("908480"),
                I = a("39393"),
                C = a("612920"),
                R = a("782340"),
                A = a("629325");
            let f = e => {
                    let {
                        attachment: t
                    } = e, {
                        url: a,
                        description: l
                    } = t;
                    return null == a ? null : (0, s.jsx)(S, {
                        url: a,
                        description: l
                    })
                },
                N = e => {
                    var t, a, l;
                    let {
                        embed: i
                    } = e;
                    if (!C.SUPPORTED_EMBED_TYPES.has(i.type)) return null;
                    let n = void 0 !== i.video && i.type !== o.MessageEmbedTypes.GIFV ? i.video.url : null !== (l = null === (t = i.thumbnail) || void 0 === t ? void 0 : t.url) && void 0 !== l ? l : null === (a = i.image) || void 0 === a ? void 0 : a.url;
                    return null == n ? null : (0, s.jsx)(S, {
                        url: n
                    })
                },
                S = e => {
                    let {
                        url: t,
                        description: a
                    } = e, l = (0, c.isVideoUrl)(t);
                    return (0, s.jsx)("div", {
                        className: A.mediaContainer,
                        children: l ? (0, s.jsx)(E.default, {
                            className: n(A.video, A.media),
                            controls: !0,
                            src: t
                        }) : (0, s.jsx)("img", {
                            className: n(A.image, A.media),
                            src: t,
                            alt: a
                        })
                    })
                };

            function O(e) {
                let {
                    channelId: t,
                    messageId: a,
                    attachmentId: i,
                    embedId: n,
                    transitionState: o,
                    onClose: c
                } = e, E = (0, u.useUID)(), C = (0, _.useIsEligibleForExplicitMediaRedaction)(), S = (0, I.useExplicitMediaAttachmentsForMessage)(t, a, i), O = (0, I.useExplicitMediaEmbedsForMessage)(t, a, n), m = l.useCallback(() => {
                    r.default.pop(), (0, d.showToast)((0, d.createToast)(R.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_SUCCESS, d.ToastType.CUSTOM)), c()
                }, [c]), {
                    reportFalsePositive: h,
                    isReportFalsePositiveLoading: g
                } = (0, T.useExplicitMediaActions)({
                    onSuccess: m,
                    onError: () => {
                        (0, d.showToast)((0, d.createToast)(R.default.Messages.ERROR_GENERIC_TITLE, d.ToastType.FAILURE))
                    }
                }), p = () => {
                    (0, M.trackMediaRedactionAction)({
                        action: M.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                        channelId: t,
                        messageId: a
                    }), c()
                }, L = C && (S.length > 0 || O.length > 0);
                return l.useEffect(() => {
                    L && (0, M.trackMediaRedactionAction)({
                        action: M.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                        channelId: t,
                        messageId: a
                    })
                }, [t, a, L]), !L && p(), (0, s.jsxs)(d.ModalRoot, {
                    transitionState: o,
                    "aria-labelledby": E,
                    size: d.ModalSize.SMALL,
                    children: [(0, s.jsxs)(d.ModalContent, {
                        children: [(0, s.jsx)(d.ModalCloseButton, {
                            onClick: p,
                            className: A.closeButton
                        }), (0, s.jsx)(d.Heading, {
                            id: E,
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            className: A.header,
                            children: R.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_HEADER
                        }), (0, s.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: A.subheader,
                            children: R.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_DESCRIPTION
                        }), 1 === S.length && 0 === O.length ? (0, s.jsx)(f, {
                            attachment: S[0]
                        }) : null, 1 === O.length && 0 === S.length ? (0, s.jsx)(N, {
                            embed: O[0]
                        }) : null]
                    }), (0, s.jsxs)(d.ModalFooter, {
                        children: [(0, s.jsx)(d.Button, {
                            className: A.button,
                            disabled: g,
                            submitting: g,
                            size: d.Button.Sizes.MEDIUM,
                            color: d.Button.Colors.BRAND,
                            onClick: () => {
                                h(t, a, S.map(e => e.id), O.map(e => e.id)), (0, M.trackMediaRedactionAction)({
                                    action: M.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                                    channelId: t,
                                    messageId: a
                                })
                            },
                            children: R.default.Messages.CONFIRM
                        }), (0, s.jsx)(d.Button, {
                            className: A.button,
                            disabled: g,
                            color: d.Button.Colors.TRANSPARENT,
                            size: d.Button.Sizes.MEDIUM,
                            onClick: p,
                            children: R.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        335678: function(e, t, a) {
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
                c = a("793441"),
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
        },
        775032: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var s = a("446674"),
                l = a("697218");

            function i() {
                let e = (0, s.useStateFromStores)([l.default], () => {
                    var e;
                    return null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
                });
                return e
            }
        }
    }
]);
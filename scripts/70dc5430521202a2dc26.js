(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["71314"], {
        461757: function(e, t, a) {
            "use strict";
            e.exports = a.p + "fc684abfc7369958435c.svg"
        },
        695681: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                reportFalsePositive: function() {
                    return n
                },
                sendMessagesForScanning: function() {
                    return l
                }
            });
            var s = a("990746"),
                i = a("49111");

            function n(e, t, a, n) {
                return s.default.post({
                    url: i.Endpoints.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE,
                    body: {
                        channel_id: e,
                        message_id: t,
                        attachment_ids: a,
                        embed_ids: n
                    }
                })
            }

            function l(e, t) {
                return s.default.put({
                    url: i.Endpoints.EXPLICIT_MEDIA_SCAN_MESSAGES(e),
                    body: {
                        message_ids: t
                    }
                })
            }
        },
        612920: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                SUPPORTED_EMBED_TYPES: function() {
                    return i
                }
            });
            var s = a("805119");
            let i = new Set([s.MessageEmbedTypes.IMAGE, s.MessageEmbedTypes.VIDEO, s.MessageEmbedTypes.GIFV])
        },
        908480: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useExplicitMediaActions: function() {
                    return l
                }
            });
            var s = a("773670"),
                i = a("448993"),
                n = a("695681");

            function l(e) {
                let {
                    onError: t,
                    onSuccess: a
                } = null != e ? e : {}, [l, d] = s.useState(!1), o = s.useCallback(async (e, s, o, r) => {
                    if (!l) {
                        d(!0);
                        try {
                            await (0, n.reportFalsePositive)(e, s, o, r), null == a || a()
                        } catch (a) {
                            let e = new i.APIError(a);
                            null == t || t(e)
                        } finally {
                            d(!1)
                        }
                    }
                }, [l, t, a]);
                return {
                    reportFalsePositive: o,
                    isReportFalsePositiveLoading: l
                }
            }
        },
        39393: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useExplicitMediaAttachmentsForMessage: function() {
                    return d
                },
                useExplicitMediaEmbedsForMessage: function() {
                    return o
                }
            });
            var s = a("744196"),
                i = a("377253"),
                n = a("457971"),
                l = a("793441");
            let d = (e, t, a) => {
                    var d, o;
                    let r = (0, s.default)([i.default], () => i.default.getMessage(e, t)),
                        c = (0, n.useIsEligibleForExplicitMediaRedaction)();
                    if (null == r) return [];
                    let u = void 0 !== a ? e => e.id === a : e => (0, l.isMediaObscured)({
                        type: l.ObscuredMediaTypes.Attachment,
                        media: e
                    }, c);
                    return null !== (o = null == r ? void 0 : null === (d = r.attachments) || void 0 === d ? void 0 : d.filter(u)) && void 0 !== o ? o : []
                },
                o = (e, t, a) => {
                    var d, o;
                    let r = (0, s.default)([i.default], () => i.default.getMessage(e, t)),
                        c = (0, n.useIsEligibleForExplicitMediaRedaction)();
                    if (null == r) return [];
                    let u = void 0 !== a ? e => e.id === a : e => (0, l.isMediaObscured)({
                        type: l.ObscuredMediaTypes.Embed,
                        media: e
                    }, c);
                    return null !== (o = null == r ? void 0 : null === (d = r.embeds) || void 0 === d ? void 0 : d.filter(u)) && void 0 !== o ? o : []
                }
        },
        723653: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return O
                }
            });
            var s = a("920040"),
                i = a("773670"),
                n = a("575482"),
                l = a.n(n),
                d = a("805119"),
                o = a("77078"),
                r = a("772017"),
                c = a("651693"),
                u = a("476765"),
                E = a("58608"),
                _ = a("457971"),
                M = a("793441"),
                T = a("908480"),
                I = a("39393"),
                A = a("612920"),
                R = a("782340"),
                C = a("875418");
            let f = e => {
                    let {
                        attachment: t
                    } = e, {
                        url: a,
                        description: i
                    } = t;
                    return null == a ? null : (0, s.jsx)(N, {
                        url: a,
                        description: i
                    })
                },
                S = e => {
                    var t, a, i;
                    let {
                        embed: n
                    } = e;
                    if (!A.SUPPORTED_EMBED_TYPES.has(n.type)) return null;
                    let l = void 0 !== n.video && n.type !== d.MessageEmbedTypes.GIFV ? n.video.url : null !== (i = null === (t = n.thumbnail) || void 0 === t ? void 0 : t.url) && void 0 !== i ? i : null === (a = n.image) || void 0 === a ? void 0 : a.url;
                    return null == l ? null : (0, s.jsx)(N, {
                        url: l
                    })
                },
                N = e => {
                    let {
                        url: t,
                        description: a
                    } = e, i = (0, c.isVideoUrl)(t);
                    return (0, s.jsx)("div", {
                        className: C.mediaContainer,
                        children: i ? (0, s.jsx)(E.default, {
                            className: l(C.video, C.media),
                            controls: !0,
                            src: t
                        }) : (0, s.jsx)("img", {
                            className: l(C.image, C.media),
                            src: t,
                            alt: a
                        })
                    })
                };

            function O(e) {
                let {
                    channelId: t,
                    messageId: a,
                    attachmentId: n,
                    embedId: l,
                    transitionState: d,
                    onClose: c
                } = e, E = (0, u.useUID)(), A = (0, _.useIsEligibleForExplicitMediaRedaction)(), N = (0, I.useExplicitMediaAttachmentsForMessage)(t, a, n), O = (0, I.useExplicitMediaEmbedsForMessage)(t, a, l), m = i.useCallback(() => {
                    r.default.pop(), (0, o.showToast)((0, o.createToast)(R.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_SUCCESS, o.ToastType.CUSTOM)), c()
                }, [c]), {
                    reportFalsePositive: g,
                    isReportFalsePositiveLoading: h
                } = (0, T.useExplicitMediaActions)({
                    onSuccess: m,
                    onError: () => {
                        (0, o.showToast)((0, o.createToast)(R.default.Messages.ERROR_GENERIC_TITLE, o.ToastType.FAILURE))
                    }
                }), p = () => {
                    (0, M.trackMediaRedactionAction)({
                        action: M.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                        channelId: t,
                        messageId: a
                    }), c()
                }, L = A && (N.length > 0 || O.length > 0);
                return i.useEffect(() => {
                    L && (0, M.trackMediaRedactionAction)({
                        action: M.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                        channelId: t,
                        messageId: a
                    })
                }, [t, a, L]), !L && p(), (0, s.jsxs)(o.ModalRoot, {
                    transitionState: d,
                    "aria-labelledby": E,
                    size: o.ModalSize.SMALL,
                    children: [(0, s.jsxs)(o.ModalContent, {
                        children: [(0, s.jsx)(o.ModalCloseButton, {
                            onClick: p,
                            className: C.closeButton
                        }), (0, s.jsx)(o.Heading, {
                            id: E,
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            className: C.header,
                            children: R.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_HEADER
                        }), (0, s.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: C.subheader,
                            children: R.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_DESCRIPTION
                        }), 1 === N.length && 0 === O.length ? (0, s.jsx)(f, {
                            attachment: N[0]
                        }) : null, 1 === O.length && 0 === N.length ? (0, s.jsx)(S, {
                            embed: O[0]
                        }) : null]
                    }), (0, s.jsxs)(o.ModalFooter, {
                        children: [(0, s.jsx)(o.Button, {
                            className: C.button,
                            disabled: h,
                            submitting: h,
                            size: o.Button.Sizes.MEDIUM,
                            color: o.Button.Colors.BRAND,
                            onClick: () => {
                                g(t, a, N.map(e => e.id), O.map(e => e.id)), (0, M.trackMediaRedactionAction)({
                                    action: M.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                                    channelId: t,
                                    messageId: a
                                })
                            },
                            children: R.default.Messages.CONFIRM
                        }), (0, s.jsx)(o.Button, {
                            className: C.button,
                            disabled: h,
                            color: o.Button.Colors.TRANSPARENT,
                            size: o.Button.Sizes.MEDIUM,
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
            var s = a("920040"),
                i = a("773670"),
                n = a("77078"),
                l = a("79112"),
                d = a("545158"),
                o = a("775032"),
                r = a("701909"),
                c = a("793441"),
                u = a("49111"),
                E = a("782340"),
                _ = a("532893"),
                M = a("461757"),
                T = e => {
                    let {
                        channelId: t,
                        messageId: T,
                        transitionState: I,
                        onClose: A
                    } = e, R = (0, o.default)(), C = i.useCallback(e => {
                        (0, c.trackMediaRedactionAction)({
                            action: e,
                            channelId: t,
                            messageId: T
                        })
                    }, [t, T]);
                    return i.useEffect(() => {
                        (0, c.trackMediaRedactionAction)({
                            action: c.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
                            channelId: t,
                            messageId: T
                        })
                    }, [t, T]), (0, s.jsxs)(n.ModalRoot, {
                        transitionState: I,
                        "aria-label": E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_MODAL_LABEL,
                        children: [(0, s.jsx)(n.ModalHeader, {
                            separator: !1,
                            className: _.modalHeader,
                            children: (0, s.jsx)("img", {
                                src: M,
                                alt: E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER_IMAGE_ALT,
                                className: _.headerImg
                            })
                        }), (0, s.jsxs)(n.ModalContent, {
                            className: _.modalBody,
                            children: [(0, s.jsx)(n.Heading, {
                                variant: "heading-lg/bold",
                                className: _.modalInteriorHeader,
                                children: E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER
                            }), (0, s.jsx)(n.Text, {
                                variant: "text-md/normal",
                                color: "header-secondary",
                                children: R ? E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_ADULT : E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_TEEN
                            }), (0, s.jsxs)("div", {
                                className: _.buttonContainer,
                                children: [R ? (0, s.jsx)(n.Button, {
                                    color: n.Button.Colors.BRAND,
                                    onClick: function() {
                                        C(c.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), l.default.open(u.UserSettingsSections.PRIVACY_AND_SAFETY), A()
                                    },
                                    fullWidth: !0,
                                    children: E.default.Messages.OBSCURED_CONTENT_UPDATE_SETTINGS_CTA
                                }) : (0, s.jsx)(n.Button, {
                                    color: n.Button.Colors.BRAND,
                                    onClick: () => {
                                        (0, d.default)(r.default.getArticleURL(u.HelpdeskArticles.EXPLICIT_MEDIA_REDACTION))
                                    },
                                    fullWidth: !0,
                                    children: E.default.Messages.LEARN_MORE
                                }), (0, s.jsx)(n.Button, {
                                    color: n.Button.Colors.PRIMARY,
                                    onClick: function() {
                                        A(), C(c.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS)
                                    },
                                    fullWidth: !0,
                                    children: E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_DISMISS
                                }), (0, s.jsx)(n.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-secondary",
                                    children: E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format({
                                        handleFalsePositiveHook: () => {
                                            A(), C(c.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE), (0, n.openModalLazy)(async () => {
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
                    return n
                }
            });
            var s = a("498225"),
                i = a("697218");

            function n() {
                let e = (0, s.useStateFromStores)([i.default], () => {
                    var e;
                    return null === (e = i.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
                });
                return e
            }
        }
    }
]);
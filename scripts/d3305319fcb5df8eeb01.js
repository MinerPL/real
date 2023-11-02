(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["61166"], {
        897176: function(e, t, n) {
            "use strict";
            e.exports = n.p + "11d9a2fd2ce69fbcfb9a.svg"
        },
        376180: function(e, t, n) {
            "use strict";
            e.exports = n.p + "382dcedd5055b971ad53.svg"
        },
        978834: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c86d1e3ed620d49e41d6.svg"
        },
        757e3: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e49c372705a84e02772c.svg"
        },
        958347: function(e, t, n) {
            "use strict";
            e.exports = n.p + "0ca26e39ac9d9e0b26ff.svg"
        },
        172522: function(e, t, n) {
            "use strict";
            e.exports = n.p + "71c5a5f763fc47181bbd.svg"
        },
        356451: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c4cf1bcd505f7cc22300.svg"
        },
        852743: function(e, t, n) {
            "use strict";
            e.exports = n.p + "bfba1f104721c7575159.svg"
        },
        862888: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1b60cdb56c8c081495ac.svg"
        },
        228055: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c4f5ae4d8c171de59f01.svg"
        },
        238032: function(e, t, n) {
            "use strict";
            e.exports = n.p + "141bfc7aec238edeeb60.svg"
        },
        243826: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c5eb15a73957da1bb6e9.svg"
        },
        215036: function(e, t, n) {
            "use strict";
            e.exports = n.p + "00bc91145392d3941bf7.svg"
        },
        505873: function(e, t, n) {
            "use strict";
            e.exports = n.p + "0160dd25b3ba785c6008.svg"
        },
        352320: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c3859ebb6176ea76913f.svg"
        },
        561537: function(e, t, n) {
            "use strict";
            e.exports = n.p + "0a3a4d76bddeb746b3ae.png"
        },
        145680: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5b1b278764be59a15315.png"
        },
        59407: function(e, t, n) {
            "use strict";
            e.exports = n.p + "9e81dce3b3235147e088.svg"
        },
        609872: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d2957a53837bc444a305.svg"
        },
        407648: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5161f8a4f8050a34ef98.svg"
        },
        95358: function(e, t, n) {
            "use strict";
            e.exports = n.p + "2b7cbcd05ffd2e86ba7a.svg"
        },
        748785: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6e910d869a4ddca77fe2.svg"
        },
        984467: function(e, t, n) {
            "use strict";
            e.exports = n.p + "113468fc290deb0a4e2e.svg"
        },
        178725: function(e, t, n) {
            "use strict";
            e.exports = n.p + "9aefe3a72cc823ee54cd.svg"
        },
        849938: function(e, t, n) {
            "use strict";
            e.exports = n.p + "bf7113d05392359606b7.svg"
        },
        222223: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e2c8daaf545d35a761cc.svg"
        },
        181104: function(e, t, n) {
            "use strict";
            e.exports = n.p + "84de06846a24f54d6aba.svg"
        },
        581752: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5d0ecd3e2fd985b1bc06.jpg"
        },
        911005: function(e, t, n) {
            "use strict";
            e.exports = n.p + "2b9987c65e76770df02a.jpg"
        },
        345037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("872717"),
                s = n("913144"),
                l = n("49111"),
                i = {
                    show(e, t) {
                        s.default.wait(() => s.default.dispatch({
                            type: "TUTORIAL_INDICATOR_SHOW",
                            tutorialId: e,
                            renderData: t
                        }))
                    },
                    hide(e) {
                        s.default.wait(() => s.default.dispatch({
                            type: "TUTORIAL_INDICATOR_HIDE",
                            tutorialId: e
                        }))
                    },
                    dismiss(e) {
                        s.default.wait(() => s.default.dispatch({
                            type: "TUTORIAL_INDICATOR_DISMISS",
                            tutorialId: e
                        })), a.default.put({
                            url: l.Endpoints.TUTORIAL_INDICATOR(e),
                            oldFormErrors: !0
                        })
                    },
                    suppressAll() {
                        s.default.dispatch({
                            type: "TUTORIAL_INDICATOR_SUPPRESS_ALL"
                        }), a.default.post({
                            url: l.Endpoints.TUTORIAL_INDICATORS_SUPPRESS,
                            oldFormErrors: !0
                        })
                    }
                }
        },
        783480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var a = n("77078"),
                s = n("913144"),
                l = n("295426"),
                i = n("819689"),
                r = n("81594"),
                o = n("336522"),
                u = n("979911"),
                d = n("282928"),
                c = n("966724"),
                f = n("681736"),
                h = n("600798"),
                C = n("692038"),
                E = n("815297"),
                p = n("168730"),
                m = n("529805"),
                g = n("685841"),
                _ = n("804888"),
                S = n("474643"),
                A = n("585722"),
                T = n("568734"),
                M = n("49111"),
                I = n("782340");

            function N(e) {
                var t, n, a;
                let d, {
                        channelId: c,
                        uploads: N,
                        draftType: L,
                        parsedMessage: R,
                        options: v = {}
                    } = e,
                    y = new f.default(M.Endpoints.MESSAGES(c)),
                    x = {
                        content: "",
                        nonce: "",
                        channel_id: c,
                        type: M.MessageTypes.DEFAULT,
                        sticker_ids: null == v ? void 0 : v.stickerIds
                    };
                null != R && (x.content = null == R ? void 0 : R.content);
                let O = g.default.getPendingReply(c);
                null != O && (x.type = M.MessageTypes.REPLY, x.message_reference = v.messageReference, x.allowed_mentions = v.allowedMentions, (0, m.deletePendingReply)(c));
                let [D, P] = (0, _.default)(x.content);
                D && (x.content = P, x.flags = (0, T.addFlag)(null !== (t = x.flags) && void 0 !== t ? t : 0, M.MessageFlags.SUPPRESS_NOTIFICATIONS));
                let b = null !== (n = v.nonce) && void 0 !== n ? n : (0, E.createNonce)(),
                    j = (0, E.default)({
                        channelId: c,
                        content: x.content,
                        tts: null !== (a = null == R ? void 0 : R.tts) && void 0 !== a && a,
                        type: x.type,
                        messageReference: x.message_reference,
                        flags: x.flags,
                        nonce: b
                    });
                x.nonce = b, y.on("start", e => {
                    d = (0, C.createMessageRecord)({
                        ...j,
                        id: e.id
                    }), s.default.dispatch({
                        type: "UPLOAD_START",
                        channelId: c,
                        file: e,
                        message: d,
                        uploader: y
                    })
                }), y.on("progress", e => {
                    s.default.dispatch({
                        type: "UPLOAD_PROGRESS",
                        channelId: c,
                        file: e
                    })
                });
                y.on("error", (e, t, n, a) => {
                    if (s.default.dispatch({
                            type: "UPLOAD_FAIL",
                            channelId: c,
                            file: e,
                            messageRecord: d
                        }), (0, p.logMessageSendFailure)({
                            fileItems: e.items,
                            failureCode: t,
                            errorMessage: null == a ? void 0 : a.msg
                        }), t === M.AbortCodes.EXPLICIT_CONTENT) {
                        i.default.sendClydeError(c, t);
                        return
                    }
                    if (t === M.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) {
                        let e = {
                                code: t,
                                message: null == n ? void 0 : n.message
                            },
                            a = null == d ? null : {
                                type: u.MessageDataType.SEND,
                                message: {
                                    ...d,
                                    channelId: c
                                }
                            };
                        (0, o.openUploadError)({
                            title: I.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                            help: (0, h.getAutomodErrorMessage)(a, e)
                        });
                        return
                    }
                    t !== M.AbortCodes.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS && ((0, o.openUploadError)({
                        title: I.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                        help: I.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
                    }), "" !== x.content && "" === S.default.getDraft(c, L) && l.default.saveDraft(c, x.content, L), 0 === A.default.getUploadCount(c, L) && r.default.setUploads({
                        channelId: c,
                        uploads: N,
                        draftType: L
                    }))
                }), y.on("complete", e => {
                    s.default.dispatch({
                        type: "UPLOAD_COMPLETE",
                        channelId: c,
                        file: e,
                        aborted: y._aborted
                    })
                }), y.uploadFiles(N, x)
            }
            var L = {
                instantBatchUpload: function(e) {
                    let {
                        channelId: t,
                        files: n,
                        draftType: a,
                        isThumbnail: s = !1,
                        isClip: l = !1
                    } = e, i = Array.from(n).map(e => new d.CloudUpload({
                        file: e,
                        platform: c.UploadPlatform.WEB,
                        isThumbnail: s,
                        isClip: l
                    }, t));
                    N({
                        channelId: t,
                        uploads: i,
                        draftType: a
                    })
                },
                upload: function e(t) {
                    let {
                        channelId: n,
                        file: r,
                        draftType: u,
                        message: d,
                        hasSpoiler: c,
                        filename: h
                    } = t, C = {
                        content: "",
                        tts: !1,
                        hasSpoiler: c,
                        filename: h
                    };
                    if (null != d) {
                        C.content = d.content, C.tts = d.tts, C.channel_id = d.channel_id;
                        let e = g.default.getPendingReply(n);
                        if (null != e) {
                            let t = i.default.getSendMessageOptionsForReply(e);
                            C.type = M.MessageTypes.REPLY, C.message_reference = t.messageReference, C.allowed_mentions = t.allowedMentions, (0, m.deletePendingReply)(n)
                        }
                    }
                    let E = new f.default(M.Endpoints.MESSAGES(n));
                    E.on("start", e => {
                        s.default.dispatch({
                            type: "UPLOAD_START",
                            channelId: n,
                            file: e,
                            uploader: E
                        })
                    }), E.on("progress", e => {
                        s.default.dispatch({
                            type: "UPLOAD_PROGRESS",
                            channelId: n,
                            file: e
                        })
                    }), E.on("error", (t, c) => {
                        if (s.default.dispatch({
                                type: "UPLOAD_FAIL",
                                channelId: n,
                                file: t
                            }), (0, p.logMessageSendFailure)({
                                fileItems: t.items,
                                failureCode: c
                            }), c === M.AbortCodes.EXPLICIT_CONTENT) {
                            i.default.sendClydeError(n, c);
                            return
                        }(0, o.openUploadError)({
                            title: I.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                            help: I.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                                onClick: () => {
                                    (0, a.closeModal)(o.UPLOAD_ERROR_MODAL_KEY), e({
                                        channelId: n,
                                        file: r,
                                        draftType: u,
                                        message: d
                                    })
                                }
                            })
                        }), "" !== C.content && "" === S.default.getDraft(n, u) && l.default.saveDraft(n, C.content, u)
                    }), E.on("complete", e => {
                        s.default.dispatch({
                            type: "UPLOAD_COMPLETE",
                            channelId: n,
                            file: e
                        })
                    }), E.upload(r, C)
                },
                uploadFiles: N,
                cancel(e) {
                    if (s.default.dispatch({
                            type: "UPLOAD_CANCEL_REQUEST",
                            file: e
                        }), null != e.draftContent && null != e.channelId) {
                        let t = S.default.getDraft(e.channelId, S.DraftType.ChannelMessage);
                        "" === t && s.default.dispatch({
                            type: "DRAFT_SAVE",
                            channelId: e.channelId,
                            draft: e.draftContent,
                            draftType: S.DraftType.ChannelMessage
                        })
                    }
                }
            }
        },
        413427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("49111"),
                o = n("624067");
            class u extends s.Component {
                componentDidUpdate(e, t) {
                    if (t.focused !== this.state.focused && this.state.focused) {
                        var n;
                        null === (n = this.inputRef.current) || void 0 === n || n.focus()
                    }
                    null !== this.props.value && this.props.value !== e.value && this.props.value !== this.state.value && d(this.props.value, this.props, this.state) && this.setState({
                        value: this.props.value
                    })
                }
                render() {
                    let e;
                    let {
                        className: t,
                        name: n,
                        autoComplete: s,
                        maxLen: l
                    } = this.props, r = {
                        position: "absolute",
                        left: 0,
                        width: "100%",
                        opacity: 1
                    };
                    return this.state.focused ? e = {
                        visibility: "hidden",
                        pointerEvents: "none"
                    } : r.opacity = 0, (0, a.jsx)("div", {
                        className: i(o.outer, t),
                        children: (0, a.jsxs)("div", {
                            className: o.container,
                            children: [(0, a.jsx)("input", {
                                type: "text",
                                className: o.input,
                                ref: this.inputRef,
                                style: r,
                                value: this.state.value,
                                name: n,
                                maxLength: l,
                                autoComplete: s,
                                onKeyPress: this.handleKeyPress,
                                onChange: this.handleChange,
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur
                            }), (0, a.jsx)("div", {
                                className: o.input,
                                style: e,
                                children: this.state.value
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = s.createRef(), this.state = {
                        focused: !1,
                        lastGoodValue: this.props.value,
                        value: this.props.value
                    }, this.handleChange = e => {
                        let {
                            onChange: t
                        } = this.props;
                        this.setState({
                            value: e.currentTarget.value
                        }), null == t || t(e)
                    }, this.handleFocus = e => {
                        let {
                            onFocus: t
                        } = this.props;
                        this.setState({
                            focused: !0,
                            lastGoodValue: e.currentTarget.value
                        }), null == t || t(e)
                    }, this.handleBlur = e => {
                        if (d("", this.props, this.state)) {
                            this.setState({
                                focused: !1
                            });
                            let {
                                onBlur: t
                            } = this.props;
                            null == t || t(e)
                        } else this.setState({
                            focused: !1,
                            value: this.state.lastGoodValue
                        })
                    }, this.handleKeyPress = e => {
                        if (e.which === r.KeyboardKeys.ENTER) {
                            var t;
                            null === (t = this.inputRef.current) || void 0 === t || t.blur()
                        }
                    }
                }
            }

            function d() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    a = "" !== e ? e : null != n.value && "" !== n.value ? n.value : "";
                return (null == t.minLen || !(a.length < t.minLen)) && (null == t.maxLen || !(a.length > t.maxLen)) && !0
            }
        },
        779454: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                o = n("145131"),
                u = n("9461");
            class d extends s.PureComponent {
                render() {
                    let e;
                    let {
                        renderFooter: t,
                        selectable: n,
                        renderHeader: s,
                        className: l,
                        onClose: d,
                        children: c
                    } = this.props;
                    return null != t && (e = (0, a.jsx)(r.ModalFooter, {
                        direction: o.default.Direction.HORIZONTAL,
                        children: t()
                    })), (0, a.jsx)(r.Modal, {
                        onCloseRequest: d,
                        renderModal: t => {
                            let {
                                onClose: f,
                                ...h
                            } = t;
                            return (0, a.jsxs)(r.ModalRoot, {
                                className: u.modal,
                                ...h,
                                children: [(0, a.jsxs)(r.ModalHeader, {
                                    align: o.default.Justify.BETWEEN,
                                    separator: !1,
                                    children: [s(), (0, a.jsx)(o.default.Child, {
                                        grow: 0,
                                        children: (0, a.jsx)(r.ModalCloseButton, {
                                            onClick: () => {
                                                null != d && d(), f()
                                            }
                                        })
                                    })]
                                }), (0, a.jsx)(r.ModalContent, {
                                    className: i(l, u.content, {
                                        selectable: n
                                    }),
                                    scrollerRef: this.scrollerRef,
                                    onScroll: this.handleScroll,
                                    children: c
                                }), e]
                            })
                        }
                    })
                }
                constructor(...e) {
                    super(...e), this.scrollerRef = s.createRef(), this.handleScroll = () => {
                        let {
                            current: e
                        } = this.scrollerRef;
                        if (null != e) {
                            var t, n;
                            null === (t = (n = this.props).onScroll) || void 0 === t || t.call(n, e)
                        }
                    }
                }
            }
            d.defaultProps = {
                selectable: !1
            };
            var c = d
        },
        767993: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("669491"),
                i = n("819855"),
                r = n("77078"),
                o = n("716241"),
                u = n("161778"),
                d = n("925877"),
                c = n("599110"),
                f = n("49111"),
                h = n("782340"),
                C = n("578000"),
                E = n("632215");

            function p(e) {
                let {
                    onClose: t,
                    onConfirm: p,
                    onCancel: m,
                    channel: g,
                    analyticsType: _,
                    popoutText: S,
                    animation: A
                } = e;
                s.useEffect(() => {
                    c.default.track(f.AnalyticEvents.OPEN_POPOUT, {
                        type: _,
                        ...(0, o.collectChannelAnalyticsMetadata)(g)
                    })
                }, [_, g]);
                let T = s.useCallback(() => {
                        null == p || p(), t()
                    }, [p, t]),
                    M = s.useCallback(() => {
                        null == m || m(), t()
                    }, [m, t]),
                    I = s.useRef(null);
                return s.useEffect(() => {
                    let e;
                    let t = u.default.theme,
                        a = !1;
                    return null != A && (async () => {
                        let [{
                            default: s
                        }, l] = await Promise.all([n.el("230265").then(n.t.bind(n, "230265", 21)), (0, i.isThemeDark)(t) ? A.dark() : A.light()]);
                        !a && (e = s.loadAnimation({
                            container: I.current,
                            renderer: "svg",
                            loop: !0,
                            autoplay: !0,
                            animationData: l
                        }))
                    })(), () => {
                        a = !0, null != e && (e.destroy(), e = void 0)
                    }
                }, [A]), (0, a.jsx)(r.Dialog, {
                    "aria-labelledby": "content-warning-popout-label",
                    children: (0, a.jsxs)("form", {
                        className: C.contentWarningPopout,
                        onSubmit: T,
                        children: [(0, a.jsxs)("div", {
                            className: C.body,
                            children: [null != A && (0, a.jsx)("div", {
                                className: C.animation,
                                ref: I
                            }), (0, a.jsxs)("div", {
                                className: C.content,
                                children: [(0, a.jsx)("div", {
                                    className: C.header,
                                    children: h.default.Messages.SELF_XSS_HEADER
                                }), (0, a.jsx)(r.Text, {
                                    id: "content-warning-popout-label",
                                    className: E.markup,
                                    variant: "text-sm/normal",
                                    children: S.body
                                }), (0, a.jsxs)("div", {
                                    className: C.buttonWrapper,
                                    children: [(0, a.jsxs)("div", {
                                        className: C.buttonContainer,
                                        children: [(0, a.jsx)(r.Button, {
                                            className: C.button,
                                            color: r.Button.Colors.PRIMARY,
                                            onClick: M,
                                            children: h.default.Messages.EDIT_MESSAGE
                                        }), (0, a.jsx)(r.Text, {
                                            variant: "text-xs/normal",
                                            className: C.buttonHint,
                                            children: h.default.Messages.EVERYONE_POPOUT_ESC.format()
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: C.buttonContainer,
                                        children: [(0, a.jsx)(r.Button, {
                                            className: C.button,
                                            onClick: T,
                                            type: "submit",
                                            autoFocus: !0,
                                            children: h.default.Messages.EVERYONE_POPOUT_SEND_NOW
                                        }), (0, a.jsx)(r.Text, {
                                            variant: "text-xs/normal",
                                            className: C.buttonHint,
                                            children: h.default.Messages.EVERYONE_POPOUT_ENTER.format()
                                        })]
                                    })]
                                })]
                            })]
                        }), null != S.footer && "" !== S.footer ? (0, a.jsxs)("div", {
                            className: C.footer,
                            children: [(0, a.jsx)(d.default, {
                                color: l.default.unsafe_rawColors.PRIMARY_400.css,
                                className: C.icon
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: S.footer
                            })]
                        }) : null]
                    })
                })
            }
        },
        264732: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("446674"),
                i = n("383018"),
                r = n("679653"),
                o = n("474643"),
                u = n("247013"),
                d = n("88093"),
                c = n("778588"),
                f = n("957255"),
                h = n("27618"),
                C = n("697218"),
                E = n("659500"),
                p = n("412861"),
                m = n("160864"),
                g = n("527382"),
                _ = n("49111"),
                S = n("782340"),
                A = function(e) {
                    let {
                        className: t,
                        style: n,
                        channel: A,
                        draftType: T
                    } = e, [M, I] = s.useState(!0), N = (0, l.useStateFromStores)([c.default], () => c.default.hasLayers()), L = (0, l.useStateFromStores)([f.default], () => null != A && f.default.can(_.Permissions.ATTACH_FILES, A), [A]), R = (0, l.useStateFromStores)([i.default], () => i.default.getActiveCommand(A.id)), v = null != R, y = A.getGuildId(), x = T === o.DraftType.FirstThreadMessage, O = (0, l.useStateFromStores)([C.default], () => {
                        var e;
                        return !0 == !(null === (e = C.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed)
                    }), D = (0, l.useStateFromStores)([u.default], () => u.default.didAgree(y)), P = D && !O, b = s.useMemo(() => !N && (A.isPrivate() && !A.isManaged() || null != y && (!A.isNSFW() || P) && L && d.default.canChatInGuild(y)), [L, P, A, y, N]), j = x ? _.ChannelTypesSets.GUILD_THREADS_ONLY.has(A.type) ? S.default.Messages.UPLOAD_TO_NEW_POST : S.default.Messages.UPLOAD_TO_NEW_THREAD : M ? S.default.Messages.UPLOAD_TO.format({
                        destination: (0, r.computeChannelName)(A, C.default, h.default, !0)
                    }) : S.default.Messages.UPLOAD_AREA_TITLE_NO_CONFIRMATION;
                    return v || !b ? null : (0, a.jsx)(m.default, {
                        className: t,
                        style: n,
                        title: j,
                        description: x ? S.default.Messages.UPLOAD_AREA_NEW_THREAD_HELP : S.default.Messages.UPLOAD_AREA_HELP,
                        icons: g.DEFAULT_FILE_UPLOAD_ICONS,
                        onDrop: e => {
                            if (v) return !1;
                            b && null != A && ((0, p.promptToUpload)(e, A, T, {
                                requireConfirm: M,
                                showLargeMessageDialog: !1
                            }), E.ComponentDispatch.dispatchToLastSubscribed(_.ComponentActions.TEXTAREA_FOCUS))
                        },
                        onDragClear: () => I(!0),
                        onDragOver: e => {
                            if (v) return !1;
                            !x && e.shiftKey === M && I(!e.shiftKey)
                        }
                    })
                }
        },
        532760: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("862205");
            let s = (0, a.createExperiment)({
                kind: "user",
                id: "2023-02_mfa_remove_phone",
                label: "Safety Experience MFA Remove Phone",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var l = s
        },
        713569: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsInboxesV2Enabled: function() {
                    return l
                }
            });
            var a = n("862205");
            let s = (0, a.createExperiment)({
                kind: "user",
                id: "2022-09_inboxes_v2_frontend",
                label: "Safety Integrity Platform Inboxes V2",
                defaultConfig: {
                    enabled: !1,
                    forceConfirmationOnAccept: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0,
                        forceConfirmationOnAccept: !1
                    }
                }]
            });

            function l() {
                return s.useExperiment({
                    location: "cdbaa7_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        681736: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("872717"),
                s = n("448993"),
                l = n("981112"),
                i = n("966724"),
                r = n("980134"),
                o = n("782340");
            class u extends l.default {
                async uploadFiles(e, t) {
                    let {
                        addFilesTo: n
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    super.upload({
                        name: o.default.Messages.ATTACHMENT_PROCESSING
                    }, t, e);
                    let a = new AbortController;
                    try {
                        if (this.files = e, this._aborted) return;
                        if (this._handleStart(() => a.abort()), !await this.compressAndCheckFileSize()) return;
                        this.setUploadingTextForUI(), await (0, l.stageAttachmentFiles)(this.files, !0, this._recomputeProgress.bind(this))
                    } catch (e) {
                        this._handleException(e)
                    }
                    try {
                        return await this._createMessage(a.signal, t, n)
                    } catch (e) {
                        if (this._raiseEndpointErrors) throw e;
                        this._handleException(e)
                    }
                }
                async _createMessage(e, t, n) {
                    let l;
                    let o = [];
                    this.files.forEach((e, t) => {
                        let n = (0, r.getAttachmentPayload)(e, t);
                        e.item.platform === i.UploadPlatform.WEB && o.push({
                            ...n
                        })
                    }), l = null != n && null != t ? this._addAttachmentsToPayload(t, n, o) : {
                        ...t,
                        attachments: o
                    };
                    let u = {
                            url: this._url,
                            body: l,
                            signal: e
                        },
                        d = "POST" === this._method ? a.default.post : a.default.patch;
                    try {
                        let e = await d(u);
                        return this._handleComplete(e.body), e.body
                    } catch (e) {
                        var c;
                        if (this._raiseEndpointErrors) throw new s.APIError(e);
                        this._handleError({
                            code: null == e ? void 0 : null === (c = e.body) || void 0 === c ? void 0 : c.code,
                            body: null == e ? void 0 : e.body
                        })
                    }
                }
                constructor(e, t = "POST", n) {
                    super(e, t, n)
                }
            }
        },
        685888: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("679653"),
                s = n("49111"),
                l = n("782340");

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = (0, a.default)(e, !0),
                    i = (0, a.default)(e, !1);
                if (null == e || null == n) return {
                    placeholder: "",
                    accessibilityLabel: ""
                };
                if (t) return {
                    placeholder: l.default.Messages.READ_ONLY_CHANNEL,
                    accessibilityLabel: l.default.Messages.READ_ONLY_CHANNEL
                };
                if (e.isForumPost()) return {
                    placeholder: l.default.Messages.FORUM_POST_TEXTAREA_PLACEHOLDER.format({
                        channel: n
                    }),
                    accessibilityLabel: l.default.Messages.TEXTAREA_FORUM_POST_A11Y_LABEL.format({
                        channel: i
                    })
                };
                if (s.ChannelTypesSets.THREADS.has(e.type)) return {
                    placeholder: l.default.Messages.TEXTAREA_PLACEHOLDER.format({
                        channel: n
                    }),
                    accessibilityLabel: l.default.Messages.TEXTAREA_THREAD_A11Y_LABEL.format({
                        channel: i
                    })
                };
                if (e.type === s.ChannelTypes.DM) return {
                    placeholder: l.default.Messages.DM_TEXTAREA_PLACEHOLDER.format({
                        channel: n
                    }),
                    accessibilityLabel: l.default.Messages.TEXTAREA_TEXT_DM_A11Y_LABEL.format({
                        channel: i
                    })
                };
                return {
                    placeholder: l.default.Messages.TEXTAREA_PLACEHOLDER.format({
                        channel: n
                    }),
                    accessibilityLabel: l.default.Messages.TEXTAREA_TEXT_CHANNEL_A11Y_LABEL.format({
                        channel: i
                    })
                }
            }
        },
        176347: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eU
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("627445"),
                i = n.n(l),
                r = n("394846"),
                o = n("298386"),
                u = n("249654"),
                d = n("446674"),
                c = n("77078"),
                f = n("295426"),
                h = n("819689"),
                C = n("352674"),
                E = n("81594"),
                p = n("783480"),
                m = n("125667"),
                g = n("901582"),
                _ = n("767993"),
                S = n("713569"),
                A = n("180748"),
                T = n("206230"),
                M = n("716241"),
                I = n("507217"),
                N = n("118200"),
                L = n("240249"),
                R = n("524768"),
                v = n("389153"),
                y = n("916565"),
                x = n("850391"),
                O = n("149022"),
                D = n("998415"),
                P = n("228800"),
                b = n("681060"),
                j = n("939563"),
                F = n("488049"),
                U = n("607474"),
                H = n("538282"),
                k = n("956967"),
                G = n("952104"),
                B = n("509"),
                w = n("406043"),
                V = n("68895"),
                W = n("934288"),
                z = n("87635"),
                K = n("888296"),
                Y = n("986975"),
                Z = n("734570"),
                q = n("884351"),
                X = n("818950"),
                Q = n("28007"),
                J = n("880731"),
                $ = n("943551"),
                ee = n("667137"),
                et = n("445499"),
                en = n("319939"),
                ea = n("529805"),
                es = n("685841"),
                el = n("467094"),
                ei = n("12896"),
                er = n("271938"),
                eo = n("982108"),
                eu = n("474643"),
                ed = n("836417"),
                ec = n("26989"),
                ef = n("377253"),
                eh = n("957255"),
                eC = n("18494"),
                eE = n("585722"),
                ep = n("697218"),
                em = n("659186"),
                eg = n("599110"),
                e_ = n("378765"),
                eS = n("659500"),
                eA = n("718422"),
                eT = n("563680"),
                eM = n("412861"),
                eI = n("834021"),
                eN = n("685888"),
                eL = n("710216"),
                eR = n("348652"),
                ev = n("306588"),
                ey = n("49111"),
                ex = n("782340"),
                eO = n("305794");

            function eD(e) {
                e.preventDefault()
            }
            let eP = /^\+(?!\w+):?(?!:)(\w+)?:?$/;

            function eb(e) {
                let {
                    isSidebar: t,
                    ...n
                } = e;
                return t ? (0, a.jsx)("section", {
                    ...n,
                    role: "complementary"
                }) : (0, a.jsx)("main", {
                    ...n
                })
            }
            class ej extends s.PureComponent {
                componentDidMount() {
                    eu.default.addChangeListener(this.draftDidChange)
                }
                componentWillUnmount() {
                    eu.default.removeChangeListener(this.draftDidChange)
                }
                componentDidUpdate(e, t) {
                    let {
                        channel: n
                    } = this.props, {
                        textValue: a
                    } = this.state;
                    if (e.channel.id !== n.id) {
                        this.draftDidChange(this.props);
                        return
                    }
                    if (e.hasModalOpen && !this.props.hasModalOpen) {
                        let e = eu.default.getDraft(n.id, eu.DraftType.ChannelMessage);
                        e !== a && this.setState((0, O.createState)(e))
                    }
                    t.textValue.length < ey.MAX_MESSAGE_LENGTH && a.length >= ey.MAX_MESSAGE_LENGTH && eg.default.track(ey.AnalyticEvents.MESSAGE_LENGTH_LIMIT_REACHED, {})
                }
                handleEditLastMessage(e) {
                    let {
                        channel: t
                    } = this.props;
                    h.default.startEditMessage(t.id, e.id, e.content), M.default.trackWithMetadata(ey.AnalyticEvents.MESSAGE_EDIT_UP_ARROW)
                }
                handleRecallLastCommand(e) {
                    if (null == e.interactionData) return;
                    let {
                        channel: t
                    } = this.props, {
                        commandKey: n,
                        interactionOptions: a
                    } = (0, v.extractInteractionDataProps)(e.interactionData), {
                        command: s,
                        application: l
                    } = L.getCachedCommand(t, n);
                    if (null != s) {
                        var i, r;
                        let e = null != l ? {
                            type: R.ApplicationCommandSectionType.APPLICATION,
                            id: l.id,
                            icon: null !== (r = null == l ? void 0 : null === (i = l.bot) || void 0 === i ? void 0 : i.username) && void 0 !== r ? r : l.icon,
                            name: l.name,
                            application: l
                        } : null;
                        I.setActiveCommand({
                            channelId: t.id,
                            command: s,
                            section: e,
                            location: R.ApplicationCommandTriggerLocations.RECALL,
                            initialValues: (0, N.getInitialValuesFromInteractionOptions)(s, null != a ? a : [])
                        })
                    }
                }
                render() {
                    let {
                        channel: e,
                        focused: t,
                        onResize: n,
                        onBlur: s,
                        onFocus: l,
                        highlighted: r,
                        pendingReply: o,
                        chatInputType: u,
                        placeholder: d,
                        accessibilityLabel: f,
                        shakeIntensity: h,
                        poggermodeEnabled: C
                    } = this.props, {
                        contentWarningProps: E
                    } = this.state, p = (0, a.jsx)(b.default, {
                        textValue: this.state.textValue,
                        richValue: this.state.richValue,
                        focused: t,
                        className: eO.channelTextArea,
                        channel: e,
                        placeholder: d,
                        accessibilityLabel: f,
                        pendingReply: o,
                        type: u,
                        onChange: this.handleTextareaChange,
                        onSubmit: this.handleSendMessage,
                        onResize: n,
                        onFocus: l,
                        onBlur: s,
                        onKeyDown: this.handleKeyDown,
                        renderAttachButton: this.renderAttachButton,
                        renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                        promptToUpload: eM.promptToUpload,
                        highlighted: r,
                        setEditorRef: e => this.editorRef = e
                    });
                    return (0, a.jsx)(c.Popout, {
                        position: "top",
                        onRequestClose: () => {
                            var e;
                            null == E || null === (e = E.onCancel) || void 0 === e || e.call(E), this.setState({
                                contentWarningProps: null
                            })
                        },
                        shouldShow: null != E,
                        renderPopout: e => {
                            let {
                                closePopout: t
                            } = e;
                            return i(null != E, "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"), (0, a.jsx)(_.default, {
                                onClose: t,
                                ...E
                            })
                        },
                        children: () => C ? (0, a.jsx)(c.Shaker, {
                            isShaking: h > 0,
                            intensity: h,
                            children: p
                        }) : p
                    })
                }
                constructor(...e) {
                    var t;
                    super(...e), t = this, this.isFirstChange = !0, this.editorRef = null, this.state = {
                        ...(0, O.createState)(eu.default.getDraft(this.props.channel.id, eu.DraftType.ChannelMessage)),
                        contentWarningProps: null
                    }, this.draftDidChange = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                            {
                                textValue: n
                            } = t.state,
                            a = eu.default.getDraft(e.channel.id, eu.DraftType.ChannelMessage);
                        n !== a && ("" === a || "" === n) && t.setState((0, O.createState)(a), () => {
                            if (n !== a) {
                                let {
                                    onFocus: e
                                } = t.props;
                                null == e || e()
                            }
                        })
                    }, this.handleKeyDown = e => {
                        let {
                            keyboardModeEnabled: t,
                            onKeyDown: n,
                            channel: a
                        } = this.props, s = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey, l = 0 !== this.state.textValue.length;
                        switch (e.which) {
                            case ey.KeyboardKeys.DELETE:
                            case ey.KeyboardKeys.BACKSPACE:
                                this.handleIncrementCombo("", 1);
                                return;
                            case ey.KeyboardKeys.ARROW_UP:
                                if (s || l) return;
                                if (e.preventDefault(), t) eE.default.getUploadCount(a.id, eu.DraftType.ChannelMessage) > 0 ? eS.ComponentDispatch.dispatchToLastSubscribed(ey.ComponentActions.FOCUS_ATTACHMENT_AREA) : eS.ComponentDispatch.dispatchToLastSubscribed(ey.ComponentActions.FOCUS_MESSAGES, {
                                    atEnd: !0
                                });
                                else {
                                    let {
                                        channel: e
                                    } = this.props, t = ef.default.getLastCommandMessage(e.id), n = ef.default.getLastEditableMessage(e.id);
                                    null != t && null != n ? u.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n)
                                }
                                return;
                            case ey.KeyboardKeys.ESCAPE:
                                if (s || e.target !== e.currentTarget) return;
                                if (e.preventDefault(), t) {
                                    (0, A.disableKeyboardMode)();
                                    return
                                }
                                if (eE.default.getUploadCount(a.id, eu.DraftType.ChannelMessage) > 0) {
                                    E.default.clearAll(a.id, eu.DraftType.ChannelMessage);
                                    return
                                }
                        }
                        null == n || n(e, l)
                    }, this.handleIncrementCombo = (e, t) => {
                        var n;
                        if (!this.props.poggermodeEnabled) return;
                        let a = this.props.channel.id,
                            s = er.default.getId(),
                            l = $.default.getUserCombo(s, a),
                            i = (null !== (n = null == l ? void 0 : l.value) && void 0 !== n ? n : 0) + 1;
                        (0, Q.updateCombo)({
                            channelId: a,
                            userId: s,
                            value: null != e ? e.length : i,
                            multiplier: t
                        })
                    }, this.handleTextareaChange = (e, t, n) => {
                        let {
                            keyboardModeEnabled: a,
                            channel: {
                                id: s
                            }
                        } = this.props;
                        f.default.changeDraft(s, t, eu.DraftType.ChannelMessage);
                        let l = "" !== t && n !== this.state.richValue,
                            i = l && !eP.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
                        this.isFirstChange = !1, i && this.state.textValue.length < t.length && this.handleIncrementCombo(), i ? C.default.startTyping(s) : "" === t && C.default.stopTyping(s), l && a && (0, A.disableKeyboardMode)(), this.setState({
                            textValue: t,
                            richValue: n
                        })
                    }, this.handleSendMessage = async e => {
                        let {
                            value: t,
                            uploads: n,
                            stickers: a,
                            command: s,
                            commandOptionValues: l,
                            isGif: i
                        } = e;
                        if (0 === (t = t.trim()).length && (null == a || 0 === a.length) && (null == n || 0 === n.length)) return Promise.resolve({
                            shouldClear: !1,
                            shouldRefocus: !0
                        });
                        let {
                            guild: r,
                            channel: o,
                            pendingReply: u,
                            chatInputType: d
                        } = this.props, c = !1;
                        if (null != s) {
                            if (s.inputType === R.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return eS.ComponentDispatch.dispatch(ey.ComponentActions.SHAKE_APP, {
                                duration: 200,
                                intensity: 2
                            }), Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                            let e = await (0, y.default)({
                                command: s,
                                optionValues: null != l ? l : {},
                                context: {
                                    guild: r,
                                    channel: o
                                }
                            });
                            if (s.inputType !== R.ApplicationCommandInputType.BUILT_IN_TEXT) return Promise.resolve({
                                shouldClear: !0,
                                shouldRefocus: !0
                            });
                            null != e && (t = null != e.content && "" !== e.content ? e.content : t, c = !0 === e.tts)
                        }
                        return (0, eA.applyChatRestrictions)({
                            openWarningPopout: e => this.setState({
                                contentWarningProps: e
                            }),
                            type: this.props.chatInputType,
                            content: t,
                            stickers: a,
                            uploads: n,
                            channel: o
                        }).then(e => {
                            let {
                                valid: s,
                                failureReason: l
                            } = e;
                            if (!s) return l === ey.MessageRestrictionTypes.SLOWMODE_COOLDOWN ? (eS.ComponentDispatch.dispatch(ey.ComponentActions.SHAKE_APP, {
                                duration: 200,
                                intensity: 2
                            }), eS.ComponentDispatch.dispatch(ey.ComponentActions.EMPHASIZE_SLOWMODE_COOLDOWN), {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }) : {
                                shouldClear: !1,
                                shouldRefocus: !1
                            };
                            let f = (0, Z.handleLegacyCommands)(t, {
                                channel: o,
                                isEdit: !1
                            });
                            null != f && (null != f.content && (t = f.content), null != f.tts && (c = f.tts));
                            let C = q.default.parse(o, t);
                            C.tts = C.tts || c;
                            let m = h.default.getSendMessageOptionsForReply(u);
                            if (i) return h.default.sendMessage(o.id, C, void 0, m), (0, ea.deletePendingReply)(o.id), {
                                shouldClear: !1,
                                shouldRefocus: !0
                            };
                            if (null != n && n.length > 0) {
                                let e = (0, eI.getWebUploadFiles)(n);
                                if ((0, eI.filesExceedUploadLimits)(e, null == r ? void 0 : r.id)) return (0, eM.showUploadFileSizeExceededError)(o, e), {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                };
                                p.default.uploadFiles({
                                    channelId: o.id,
                                    uploads: n,
                                    draftType: eu.DraftType.ChannelMessage,
                                    parsedMessage: C,
                                    options: {
                                        ...m,
                                        stickerIds: a
                                    }
                                }), E.default.clearAll(o.id, eu.DraftType.ChannelMessage)
                            } else null != a && a.length > 0 ? "" !== t ? h.default.sendMessage(o.id, C, void 0, {
                                ...m,
                                stickerIds: a
                            }) : h.default.sendStickers(o.id, a, t, m, C.tts) : h.default.sendMessage(o.id, C, void 0, m);
                            return this.setState((0, O.createEmptyState)()), (0, ea.deletePendingReply)(o.id), (0, el.clearStickerPreview)(o.id, d.drafts.type), {
                                shouldClear: !0,
                                shouldRefocus: !0
                            }
                        })
                    }, this.handleSetValue = e => {
                        var t, n;
                        let a = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
                        null != a && (j.SlateTransforms.select(a, []), a.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus())
                    }, this.renderAttachButton = (e, t, n) => (0, a.jsx)(P.default, {
                        className: n,
                        channel: this.props.channel,
                        draftType: eu.DraftType.ChannelMessage,
                        editorTextContent: this.state.textValue,
                        setValue: this.handleSetValue,
                        canShowPremiumTutorial: e,
                        canOnlyUseTextCommands: t
                    }), this.renderApplicationCommandIcon = (e, t, n) => (0, a.jsx)(D.default, {
                        className: n,
                        command: e,
                        section: t,
                        channel: this.props.channel
                    })
                }
            }
            class eF extends s.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    let {
                        channel: n
                    } = e, {
                        currentChannelId: a
                    } = t;
                    return n.id !== a ? {
                        textAreaFocused: null != n && !r.isMobile && eh.default.can(ey.Permissions.SEND_MESSAGES, n),
                        currentChannelId: n.id
                    } : null
                }
                componentDidMount() {
                    eS.ComponentDispatch.subscribe(ey.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus)
                }
                componentDidUpdate(e) {
                    (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus())
                }
                componentWillUnmount() {
                    eS.ComponentDispatch.unsubscribe(ey.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus)
                }
                render() {
                    var e;
                    let t;
                    let {
                        channel: n,
                        guild: s,
                        keyboardModeEnabled: l,
                        hasModalOpen: i,
                        pendingReply: r,
                        chatInputType: u,
                        placeholder: d,
                        accessibilityLabel: f,
                        showQuarantinedUserBanner: h,
                        filterAfterTimestamp: C,
                        showSpamBanner: E,
                        showMessageRequestBanner: p,
                        communicationDisabledUntil: _,
                        shakeIntensity: S,
                        poggermodeEnabled: A,
                        isSelectedResourceChannel: T,
                        showAutomodUserProfileChatBlocker: M
                    } = this.props, {
                        textAreaFocused: I,
                        textAreaHighlighted: N
                    } = this.state, L = u === x.ChatInputTypes.SIDEBAR;
                    t = L && n.type === ey.ChannelTypes.GUILD_VOICE ? ex.default.Messages.TEXT_IN_VOICE_A11Y_LABEL : L && n.type === ey.ChannelTypes.GUILD_STAGE_VOICE ? ex.default.Messages.TEXT_IN_STAGE_A11Y_LABEL : o.ChannelTypesSets.THREADS.has(n.type) ? ex.default.Messages.THREAD_A11Y_LABEL : ex.default.Messages.CHANNEL_A11Y_LABEL;
                    let R = (0, a.jsx)(ei.default, {
                        tutorialId: "writing-messages",
                        position: "left",
                        offsetX: 75,
                        children: (0, a.jsx)(ej, {
                            focused: I,
                            highlighted: N,
                            channel: n,
                            guild: s,
                            keyboardModeEnabled: l,
                            onFocus: this.handleInputFocus,
                            onBlur: this.handleInputBlur,
                            onKeyDown: this.handleInputKeyDown,
                            hasModalOpen: i,
                            pendingReply: r,
                            chatInputType: u,
                            placeholder: d,
                            accessibilityLabel: f,
                            shakeIntensity: S,
                            poggermodeEnabled: A
                        })
                    });
                    return (0, a.jsx)(g.default, {
                        page: this.getAnalyticsPage(),
                        children: (0, a.jsx)(em.ChatLayerProvider, {
                            children: (0, a.jsxs)(e_.ComponentDispatchGroupProvider, {
                                ref: this.dispatchGroupRef,
                                children: [(0, a.jsx)(e_.ComponentAction, {
                                    event: ey.ComponentActions.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus
                                }), (0, a.jsx)(e_.ComponentAction, {
                                    event: ey.ComponentActions.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur
                                }), (0, a.jsx)(e_.ComponentAction, {
                                    event: ey.ComponentActions.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker
                                }), (0, a.jsxs)(eb, {
                                    isSidebar: L,
                                    className: eO.chatContent,
                                    "aria-label": t.format({
                                        channelName: n.name
                                    }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [(0, a.jsx)(eL.default, {
                                        channel: n,
                                        guild: s,
                                        narrow: L
                                    }), (0, a.jsxs)(c.HeadingLevel, {
                                        component: (0, a.jsx)(c.HiddenVisually, {
                                            children: (0, a.jsx)(c.H, {
                                                children: ex.default.Messages.CHANNEL_CHAT_HEADING.format({
                                                    channelName: n.name
                                                })
                                            })
                                        }),
                                        children: [(0, a.jsx)(X.default, {
                                            channel: n,
                                            forceCozy: T,
                                            filterAfterTimestamp: C,
                                            showingSpamBanner: E,
                                            showingQuarantineBanner: h
                                        }), null == n.guild_id || L ? null : (0, a.jsx)(z.default, {
                                            guildId: n.guild_id,
                                            channel: n
                                        }), T ? null : null !== (e = this.renderMessageBanner({
                                            channel: n,
                                            showSpamBanner: E,
                                            showQuarantinedUserBanner: h,
                                            showMessageRequestBanner: p,
                                            guild: s,
                                            communicationDisabledUntil: _,
                                            showAutomodUserProfileChatBlocker: M
                                        })) && void 0 !== e ? e : (0, a.jsxs)("form", {
                                            ref: this.inputFormRef,
                                            onSubmit: eD,
                                            className: eO.form,
                                            children: [A && (0, a.jsx)(ee.default, {
                                                channelId: n.id
                                            }), n.isPrivate() ? (0, a.jsx)(eR.default, {
                                                channel: n,
                                                children: R
                                            }) : (0, a.jsx)(ev.default, {
                                                channel: n,
                                                children: R
                                            }), (0, a.jsx)(m.default, {
                                                channel: n,
                                                poggermodeEnabled: A
                                            })]
                                        }), (0, a.jsx)(em.ChatLayerContainer, {})]
                                    })]
                                })]
                            })
                        })
                    }, "messages-".concat(n.id))
                }
                constructor(...e) {
                    super(...e), this.inputFormRef = s.createRef(), this.state = {
                        textAreaFocused: !1,
                        textAreaHighlighted: !1,
                        currentChannelId: this.props.channel.id
                    }, this.dispatchGroupRef = s.createRef(), this.handleRequestFocus = e => {
                        e.channelId === this.props.channel.id && this.setState({
                            textAreaFocused: !0
                        })
                    }, this.getAnalyticsPage = () => {
                        let {
                            channel: e
                        } = this.props;
                        if (null == e) return null;
                        switch (e.type) {
                            case ey.ChannelTypes.GUILD_ANNOUNCEMENT:
                            case ey.ChannelTypes.GUILD_TEXT:
                            case ey.ChannelTypes.GUILD_FORUM:
                            case ey.ChannelTypes.GUILD_MEDIA:
                                return g.default.Pages.GUILD_CHANNEL;
                            case ey.ChannelTypes.GROUP_DM:
                            case ey.ChannelTypes.DM:
                                return g.default.Pages.DM_CHANNEL;
                            default:
                                return null
                        }
                    }, this.handleInputFocus = e => {
                        var t;
                        null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(), !(0, eT.isFullScreen)() && ((null == e ? void 0 : e.highlight) != null ? this.setState({
                            textAreaFocused: !0,
                            textAreaHighlighted: null == e ? void 0 : e.highlight
                        }) : this.setState({
                            textAreaFocused: !0
                        }))
                    }, this.handleInputBlur = () => {
                        (document.hasFocus() || this.props.hasModalOpen) && this.setState({
                            textAreaFocused: !1,
                            textAreaHighlighted: !1
                        })
                    }, this.handleInputKeyDown = (e, t) => {
                        this.state.textAreaHighlighted && this.setState({
                            textAreaHighlighted: !1
                        }), !t && this._handleMoveToPane(e)
                    }, this.handleKeyDown = e => {
                        var t;
                        (null === (t = this.inputFormRef.current) || void 0 === t || !t.contains(e.target)) && this._handleMoveToPane(e)
                    }, this._handleMoveToPane = e => {
                        let {
                            keyboardModeEnabled: t,
                            chatInputType: n,
                            channel: a
                        } = this.props;
                        if (t) switch (e.which) {
                            case ey.KeyboardKeys.ARROW_LEFT:
                                n === x.ChatInputTypes.SIDEBAR && eS.ComponentDispatch.dispatch(ey.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                                    channelId: eC.default.getChannelId()
                                });
                                return;
                            case ey.KeyboardKeys.ARROW_RIGHT:
                                n === x.ChatInputTypes.NORMAL && eS.ComponentDispatch.dispatch(ey.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                                    channelId: eo.default.getCurrentSidebarChannelId(a.id)
                                })
                        }
                    }, this.handleOpenExpressionPicker = e => {
                        let {
                            activeView: t
                        } = e;
                        (0, H.openExpressionPicker)(t, this.props.chatInputType)
                    }, this.handleChatInteract = () => {
                        var e;
                        null === (e = this.dispatchGroupRef.current) || void 0 === e || e.bumpDispatchPriority()
                    }, this.renderMessageBanner = e => {
                        let {
                            channel: t,
                            showSpamBanner: n,
                            showQuarantinedUserBanner: s,
                            showMessageRequestBanner: l,
                            guild: i,
                            communicationDisabledUntil: r,
                            showAutomodUserProfileChatBlocker: o
                        } = e;
                        if (t.type === ey.ChannelTypes.DM) {
                            if (n) return (0, a.jsx)(U.SenderSpammerBanner, {
                                channel: t
                            });
                            if (s) return (0, a.jsx)(en.default, {});
                            if (l) return (0, a.jsx)(Y.MessageRequestDMBanner, {
                                channelId: t.id
                            })
                        }
                        return null != r && (0, B.isCommunicationDisabled)(r) && null != i && !eh.default.can(ey.Permissions.ADMINISTRATOR, i) ? (0, a.jsx)(V.CommunicationDisabledBanner, {
                            guild: i,
                            disabledUntil: r
                        }) : o ? (0, a.jsx)(G.AutomodUserProfileQuarantineChatInputNotice, {
                            guild: i
                        }) : null
                    }
                }
            }
            var eU = s.memo(function(e) {
                var t, n;
                let {
                    channel: s,
                    guild: l,
                    chatInputType: i,
                    filterAfterTimestamp: r
                } = e, o = (0, S.useIsInboxesV2Enabled)(), {
                    placeholder: u,
                    accessibilityLabel: f
                } = (0, eN.default)(s), h = (0, F.useDisplayDMSpamBanner)(s) && !o, C = (0, en.useShouldBlockDMInputForQuarantinedUser)(ep.default.getCurrentUser(), s), [E] = (0, w.useCurrentUserCommunicationDisabled)(null == l ? void 0 : l.id), p = (0, k.useCurrentUserHasAutomodQuarantinedProfile)(null == l ? void 0 : l.id), m = (0, d.useStateFromStores)([ep.default], () => ep.default.getCurrentUser()), g = (0, d.useStateFromStores)([ec.default], () => {
                    var e;
                    return null != m && null !== (n = null === (e = ec.default.getMember(null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "", null == m ? void 0 : m.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n
                }), _ = (0, K.useShouldShowMessageRequestBanner)(s.id) && !o, A = (0, d.useStateFromStores)([J.default], () => J.default.isEnabled()), M = (0, et.default)(s.id), I = (0, W.default)(s.id);
                return (0, a.jsx)(eF, {
                    channel: s,
                    isEditing: null != (0, d.useStateFromStores)([ed.default], () => ed.default.getEditingMessageId(s.id)),
                    hasModalOpen: (0, c.useModalsStore)(c.hasAnyModalOpenSelector),
                    guild: l,
                    keyboardModeEnabled: (0, d.useStateFromStores)([T.default], () => T.default.keyboardModeEnabled),
                    pendingReply: (0, d.useStateFromStores)([es.default], () => es.default.getPendingReply(s.id)),
                    chatInputType: i,
                    placeholder: u,
                    accessibilityLabel: f,
                    filterAfterTimestamp: r,
                    showSpamBanner: h,
                    showQuarantinedUserBanner: C,
                    communicationDisabledUntil: E,
                    showMessageRequestBanner: _,
                    shakeIntensity: M,
                    poggermodeEnabled: A,
                    isSelectedResourceChannel: I,
                    showAutomodUserProfileChatBlocker: p && !g
                })
            })
        },
        710216: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("277420"),
                i = n("396856"),
                r = n("549077"),
                o = n("208127"),
                u = n("809168"),
                d = n("182766"),
                c = n("724210"),
                f = s.memo(function(e) {
                    let {
                        channel: t,
                        guild: n,
                        narrow: s
                    } = e, f = (0, i.default)(t), h = !t.isPrivate() && t.hasFlag(c.ChannelFlags.CLYDE_AI);
                    return t.isArchivedLockedThread() ? (0, a.jsx)(u.ArchivedLockedThreadNotice, {
                        channel: t,
                        narrow: s
                    }) : t.isLockedThread() ? (0, a.jsx)(u.LockedThreadNotice, {
                        channel: t,
                        narrow: s
                    }) : h ? (0, a.jsx)(l.ClydeNotice, {
                        narrow: s
                    }) : f ? (0, a.jsx)(r.default, {
                        channel: t,
                        narrow: s
                    }) : (0, o.isReadStateStaffExperimentEnabled)() ? (0, a.jsx)(d.default, {
                        guild: n,
                        channel: t
                    }) : null
                })
        },
        182766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("446674"),
                i = n("77078"),
                r = n("519705"),
                o = n("716241"),
                u = n("233069"),
                d = n("42203"),
                c = n("282109"),
                f = n("998650"),
                h = n("599110"),
                C = n("679653"),
                E = n("49111"),
                p = n("782340"),
                m = n("202632");

            function g(e) {
                let t, n, g, {
                        guild: _,
                        channel: S
                    } = e,
                    {
                        category: A,
                        isGuildMuted: T,
                        isCategoryMuted: M,
                        isChannelMuted: I,
                        messageNotifications: N
                    } = (0, l.useStateFromStoresObject)([d.default, c.default], () => ({
                        category: null != S.parent_id ? d.default.getChannel(S.parent_id) : null,
                        isGuildMuted: c.default.isMuted(S.getGuildId()),
                        isCategoryMuted: null != S.parent_id && c.default.isChannelMuted(S.getGuildId(), S.parent_id),
                        isChannelMuted: c.default.isChannelMuted(S.getGuildId(), S.id),
                        messageNotifications: c.default.resolvedMessageNotifications(S)
                    })),
                    L = (0, C.default)(S, !0);
                if (s.useEffect(() => {
                        h.default.track(E.AnalyticEvents.CHANNEL_BANNER_VIEWED, {
                            ...(0, o.collectGuildAnalyticsMetadata)(S.getGuildId()),
                            ...(0, o.collectChannelAnalyticsMetadata)(S),
                            banner_type: "chat_notification_settings"
                        })
                    }, [S]), !(0, u.isTextChannel)(S.type) || S.isThread()) return null;
                let R = T || M || I;
                if (R) {
                    var v, y;
                    let e;
                    T ? (e = null !== (v = null == _ ? void 0 : _.name) && void 0 !== v ? v : "???", g = () => {
                        h.default.track(E.AnalyticEvents.CHANNEL_BANNER_CTA_CLICKED, {
                            ...(0, o.collectGuildAnalyticsMetadata)(S.getGuildId()),
                            ...(0, o.collectChannelAnalyticsMetadata)(S),
                            banner_type: "chat_notification_settings",
                            cta_type: "unmute guild"
                        }), r.default.updateGuildNotificationSettings(S.getGuildId(), {
                            muted: !1
                        })
                    }) : M ? (e = null !== (y = null == A ? void 0 : A.name) && void 0 !== y ? y : "???", g = () => {
                        h.default.track(E.AnalyticEvents.CHANNEL_BANNER_CTA_CLICKED, {
                            ...(0, o.collectGuildAnalyticsMetadata)(S.getGuildId()),
                            ...(0, o.collectChannelAnalyticsMetadata)(S),
                            banner_type: "chat_notification_settings",
                            cta_type: "unmute parent"
                        }), r.default.updateChannelOverrideSettings(S.getGuildId(), S.parent_id, {
                            muted: !1
                        })
                    }) : (e = L, g = () => {
                        h.default.track(E.AnalyticEvents.CHANNEL_BANNER_CTA_CLICKED, {
                            ...(0, o.collectGuildAnalyticsMetadata)(S.getGuildId()),
                            ...(0, o.collectChannelAnalyticsMetadata)(S),
                            banner_type: "chat_notification_settings",
                            cta_type: "unmute channel"
                        }), r.default.updateChannelOverrideSettings(S.getGuildId(), S.id, {
                            muted: !1
                        })
                    }), t = p.default.Messages.CHANNEL_CHAT_NOTIFICATION_SETTINGS_NOTICE_MUTED.format({
                        name: e
                    }), n = p.default.Messages.UNMUTE
                } else {
                    if (N === E.UserNotificationSettings.ALL_MESSAGES) return null;
                    t = p.default.Messages.CHANNEL_CHAT_NOTIFICATION_SETTINGS_NOTICE_ONLY_MENTIONS.format({
                        name: L
                    }), n = p.default.Messages.ENABLE_NOTIFICATIONS_TITLECASE, g = () => {
                        h.default.track(E.AnalyticEvents.CHANNEL_BANNER_CTA_CLICKED, {
                            ...(0, o.collectGuildAnalyticsMetadata)(S.getGuildId()),
                            ...(0, o.collectChannelAnalyticsMetadata)(S),
                            banner_type: "chat_notification_settings",
                            cta_type: "enable all messages"
                        }), r.default.updateChannelOverrideSettings(S.getGuildId(), S.id, {
                            message_notifications: E.UserNotificationSettings.ALL_MESSAGES
                        })
                    }
                }
                return (0, a.jsxs)("div", {
                    className: m.chatHeaderBar,
                    children: [(0, a.jsx)(f.default, {
                        className: m.chatHeaderBarIcon,
                        foreground: R ? m.chatHeaderBarIconStrikethrough : void 0
                    }), (0, a.jsx)(i.Text, {
                        className: m.chatHeaderBarText,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: t
                    }), (0, a.jsx)(i.Button, {
                        size: i.Button.Sizes.TINY,
                        color: i.Button.Colors.PRIMARY,
                        className: m.chatHeaderBarButton,
                        onClick: g,
                        children: n
                    })]
                })
            }
        },
        665182: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatSidebarType: function() {
                    return s
                },
                default: function() {
                    return m
                }
            });
            var a, s, l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                u = n("917351"),
                d = n("669491"),
                c = n("452804"),
                f = n("594203"),
                h = n("168973"),
                C = n("332374"),
                E = n("207058");
            (a = s || (s = {}))[a.PostSidebar = 0] = "PostSidebar", a[a.ThreadSidebar = 1] = "ThreadSidebar", a[a.CallChatSidebar = 2] = "CallChatSidebar", a[a.MessageRequestSidebar = 3] = "MessageRequestSidebar", a[a.HomeSidebar = 4] = "HomeSidebar";

            function p(e) {
                let {
                    resizableNode: t,
                    onResize: n,
                    onResizeEnd: a,
                    maxWidth: s
                } = e, i = (0, f.default)({
                    minDimension: C.MIN_CHAT_SIDEBAR_WIDTH,
                    maxDimension: s,
                    resizableDomNodeRef: t,
                    onElementResize: n,
                    onElementResizeEnd: a,
                    orientation: f.ResizeOrientation.HORIZONTAL_LEFT
                });
                return (0, l.jsx)("div", {
                    onMouseDown: i,
                    className: E.resizeHandle
                })
            }

            function m(e) {
                let {
                    sidebarType: t,
                    maxWidth: n,
                    onWidthChange: a,
                    children: r,
                    floatingLayer: f
                } = e, m = i.useRef(null), g = function(e) {
                    switch (e) {
                        case s.PostSidebar:
                            return "postSidebarWidth";
                        case s.ThreadSidebar:
                            return "threadSidebarWidth";
                        case s.CallChatSidebar:
                            return "callChatSidebarWidth";
                        case s.MessageRequestSidebar:
                            return "messageRequestSidebarWidth";
                        case s.HomeSidebar:
                            return "homeSidebarWidth"
                    }
                }(t), [_, S] = i.useState(h.default[g]), A = i.useCallback(e => {
                    c.default.updatedUnsyncedSettings({
                        [g]: e
                    })
                }, [g]), T = (0, C.shouldChannelChatFloat)({
                    maxWidth: n
                }), M = (0, u.clamp)(_, C.MIN_CHAT_SIDEBAR_WIDTH, n), I = T ? M : M + d.default.modules.chat.RESIZE_HANDLE_WIDTH;
                i.useEffect(() => {
                    null == a || a(M, T)
                }, [M, a, T]);
                let N = (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: o(E.chatTarget, {
                            [E.floating]: T,
                            [E.notFloating]: !T
                        }),
                        style: {
                            width: I
                        }
                    }), !T && (0, l.jsx)(p, {
                        maxWidth: n,
                        resizableNode: m,
                        onResize: S,
                        onResizeEnd: A
                    }), (0, l.jsx)("div", {
                        ref: m,
                        className: o(E.container, {
                            [E.floating]: T
                        }),
                        style: {
                            width: M
                        },
                        children: r
                    })]
                });
                if (T) {
                    let e = null != f ? f : i.Fragment;
                    return (0, l.jsx)(e, {
                        children: (0, l.jsx)("div", {
                            className: E.chatLayerWrapper,
                            children: N
                        })
                    })
                }
                return (0, l.jsx)(l.Fragment, {
                    children: N
                })
            }
        },
        361528: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("394846"),
                i = n("446674"),
                r = n("77078"),
                o = n("982108"),
                u = n("91551"),
                d = n("491605"),
                c = n("327827"),
                f = s.memo(function(e) {
                    let {
                        message: t,
                        subtitle: n,
                        countdown: f,
                        buttonText: h,
                        buttonColor: C,
                        buttonSubmitting: E,
                        onButtonClick: p,
                        imageSrc: m,
                        animationSrc: g,
                        secondaryButtonText: _,
                        onSecondaryButtonClick: S,
                        children: A,
                        useReducedMotion: T = !1
                    } = e, M = (0, i.useStateFromStores)([o.default], () => o.default.getState().isMembersOpen);
                    if (l.isMobile && M) return null;
                    if (null == t) return (0, a.jsx)(a.Fragment, {
                        children: s.Children.only(A)
                    });
                    let I = null;
                    return null != m ? I = (0, a.jsx)("img", {
                        alt: "",
                        src: m,
                        className: c.image
                    }) : null != g && (I = (0, a.jsx)(d.default, {
                        importData: g,
                        shouldAnimate: !T,
                        className: c.animation
                    })), (0, a.jsxs)("div", {
                        className: c.wrapper,
                        children: [(0, a.jsxs)("div", {
                            className: c.content,
                            children: [I, (0, a.jsxs)("div", {
                                className: c.text,
                                children: [(0, a.jsx)(r.Heading, {
                                    variant: "heading-md/semibold",
                                    className: c.title,
                                    children: t
                                }), null != n && (0, a.jsx)(r.Text, {
                                    color: "text-muted",
                                    variant: "text-xs/normal",
                                    children: n
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: c.buttonContainer,
                            children: [null != _ && (0, a.jsx)(r.Button, {
                                className: c.button,
                                size: r.Button.Sizes.SMALL,
                                onClick: S,
                                look: r.Button.Looks.LINK,
                                color: r.Button.Colors.PRIMARY,
                                submitting: E,
                                children: _
                            }), null != h && (0, a.jsx)(r.Button, {
                                className: c.button,
                                size: r.Button.Sizes.SMALL,
                                onClick: p,
                                submitting: E,
                                color: null != C ? C : r.Button.Colors.PRIMARY,
                                children: h
                            })]
                        }), null != f && (0, a.jsx)(u.default, {
                            className: c.countdown,
                            deadline: f
                        })]
                    })
                })
        },
        348652: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("736964"),
                i = n("27618"),
                r = n("701909"),
                o = n("361528"),
                u = n("49111"),
                d = n("782340");

            function c(e) {
                let {
                    channel: t,
                    children: c
                } = e, f = (0, s.useStateFromStores)([i.default], () => i.default.isBlocked(t.getRecipientId())), h = t.isSystemDM(), C = f && !h && !t.isMultiUserDM(), E = {};
                return h ? (E.message = d.default.Messages.SYSTEM_DM_CHANNEL_DESCRIPTION, E.subtitle = d.default.Messages.SYSTEM_DM_CHANNEL_DESCRIPTION_SUBTEXT, E.buttonText = d.default.Messages.LEARN_MORE, E.onButtonClick = () => open(r.default.getArticleURL(u.HelpdeskArticles.SYSTEM_DMS)), E.imageSrc = n("172522")) : C && (E.message = d.default.Messages.DM_VERIFICATION_TEXT_BLOCKED, E.buttonText = d.default.Messages.UNBLOCK, E.onButtonClick = () => {
                    l.default.unblockUser(t.getRecipientId())
                }), (0, a.jsx)(o.default, {
                    ...E,
                    children: c
                })
            }
        },
        306588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("627445"),
                i = n.n(l),
                r = n("446674"),
                o = n("77078"),
                u = n("437822"),
                d = n("429224"),
                c = n("851387"),
                f = n("206230"),
                h = n("774146"),
                C = n("549103"),
                E = n("591023"),
                p = n("233322"),
                m = n("567054"),
                g = n("982527"),
                _ = n("388166"),
                S = n("631360"),
                A = n("267567"),
                T = n("88187"),
                M = n("13066"),
                I = n("878720"),
                N = n("393414"),
                L = n("161778"),
                R = n("935692"),
                v = n("26989"),
                y = n("305961"),
                x = n("88093"),
                O = n("957255"),
                D = n("697218"),
                P = n("991170"),
                b = n("361528"),
                j = n("49111"),
                F = n("482931"),
                U = n("782340"),
                H = n("334831");
            class k extends s.PureComponent {
                componentDidMount() {
                    let {
                        isFollowable: e,
                        channelFollowingUsersSeen: t,
                        channel: n
                    } = this.props;
                    e && null == t && d.default.fetchChannelFollowerStats(n.id)
                }
                componentDidUpdate(e) {
                    let {
                        shouldShowLurkerModeSuccessPopout: t,
                        guild: n,
                        showMemberVerificationModal: a
                    } = this.props;
                    !a && !e.shouldShowLurkerModeSuccessPopout && t && null != n && this.setState({
                        shouldShowLurkerModeSuccessPopout: !0
                    })
                }
                render() {
                    let {
                        isFollowable: e,
                        isLurking: t,
                        notClaimed: l,
                        notPhoneVerified: i,
                        notEmailVerified: r,
                        newMember: u,
                        memberDeadline: d,
                        newAccount: c,
                        accountDeadline: f,
                        theme: h,
                        children: C,
                        canSendMessages: E,
                        channelFollowingUsersSeen: p,
                        showLurkerModeUpsellPopout: g,
                        showMemberVerificationModal: _,
                        useReducedMotion: S,
                        isStaff: A,
                        guildJoinRequest: T
                    } = this.props, {
                        shouldShowLurkerModeUpsellPopout: M,
                        shouldShowLurkerModeSuccessPopout: I
                    } = this.state, N = {
                        theme: h,
                        useReducedMotion: S
                    };
                    if (e && !E) N.message = U.default.Messages.FOLLOW_NEWS_CHAT_INPUT_MESSAGE, null != p && p >= 1e3 && (N.subtitle = U.default.Messages.FOLLOW_NEWS_CHAT_INPUT_SUBTITLE.format({
                        count: (1e3 * Math.floor(p / 1e3)).toLocaleString()
                    })), N.buttonText = U.default.Messages.FOLLOW, N.onButtonClick = this.handleFollowAnnouncement, N.imageSrc = n("757000"), t && (N.onSecondaryButtonClick = this.handleJoinServer, N.secondaryButtonText = U.default.Messages.LURKER_MODE_CHAT_INPUT_BUTTON);
                    else if (l) N.message = U.default.Messages.GUILD_VERIFICATION_TEXT_NOT_CLAIMED, N.buttonText = U.default.Messages.CLAIM_ACCOUNT, N.onButtonClick = _ ? this.handleShowMemberVerification : this.handleClaimAccount, N.imageSrc = n("978834");
                    else if (_) switch (null == T ? void 0 : T.applicationStatus) {
                        case m.GuildJoinRequestApplicationStatuses.SUBMITTED:
                            N.message = U.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE, N.subtitle = U.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_SUBTITLE, N.buttonText = U.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION, N.onButtonClick = this.handleCancelApplication, N.imageSrc = n("897176");
                            break;
                        case m.GuildJoinRequestApplicationStatuses.REJECTED:
                            N.message = U.default.Messages.MEMBER_VERIFICATION_REJECTED_TITLE, N.buttonText = U.default.Messages.MEMBER_VERIFICATION_LEARN_MORE, N.onButtonClick = this.handleViewApplicationRejection, N.imageSrc = n("376180");
                            break;
                        default:
                            N.message = U.default.Messages.MEMBER_VERIFICATION_CHAT_BLOCKER_TEXT, N.buttonText = U.default.Messages.MEMBER_VERIFICATION_NOTICE_CTA, N.buttonColor = o.ButtonColors.BRAND, N.onButtonClick = this.handleShowMemberVerification;
                            N.animationSrc = () => n.el("170206").then(n.t.bind(n, "170206", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            })
                    } else i && !A ? (N.message = U.default.Messages.GUILD_VERIFICATION_TEXT_NOT_PHONE_VERIFIED, N.buttonText = U.default.Messages.VERIFY_PHONE, N.onButtonClick = this.handleVerifyPhone, N.imageSrc = n("958347")) : r ? (N.message = U.default.Messages.GUILD_VERIFICATION_TEXT_NOT_VERIFIED, N.buttonText = U.default.Messages.RESEND_VERIFICATION_EMAIL, N.onButtonClick = this.handleResendVerification, N.imageSrc = n("978834")) : u ? (N.message = U.default.Messages.GUILD_VERIFICATION_TEXT_MEMBER_AGE.format({
                        min: j.VerificationCriteria.MEMBER_AGE
                    }), N.countdown = d) : c && (N.message = U.default.Messages.GUILD_VERIFICATION_TEXT_ACCOUNT_AGE.format({
                        min: j.VerificationCriteria.ACCOUNT_AGE
                    }), N.countdown = f);
                    return (0, a.jsx)(o.Popout, {
                        position: "top",
                        align: "left",
                        shouldShow: I,
                        onRequestClose: () => this.setState({
                            shouldShowLurkerModeSuccessPopout: !1
                        }),
                        renderPopout: this.renderSuccessPopout,
                        children: e => (0, a.jsx)(b.default, {
                            ...N,
                            children: (0, a.jsxs)(s.Fragment, {
                                children: [this.renderMemberVerificationSuccessModal(), g ? (0, a.jsx)(o.Popout, {
                                    renderPopout: this.renderLurkerModeUpsellPopout,
                                    shouldShow: M,
                                    position: "top",
                                    children: e => (0, a.jsx)(o.Clickable, {
                                        ...e,
                                        className: H.clickableChannelTextArea,
                                        onClick: this.handleTextAreaClick,
                                        children: C
                                    })
                                }) : C]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        submitting: !1,
                        shouldShowLurkerModeUpsellPopout: !1,
                        shouldShowLurkerModeSuccessPopout: !1
                    }, this.renderSuccessPopout = e => {
                        let {
                            closePopout: t
                        } = e, {
                            guild: n
                        } = this.props;
                        return i(null != n, "This guildID cannot be null"), (0, a.jsx)(T.default, {
                            onClose: t,
                            guild: n
                        })
                    }, this.handleCancelApplication = () => {
                        let {
                            guild: e
                        } = this.props;
                        null != e && (0, o.openModal)(t => (0, a.jsx)(o.ConfirmModal, {
                            header: U.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                            confirmText: U.default.Messages.CONFIRM,
                            cancelText: U.default.Messages.CANCEL,
                            onConfirm: () => C.default.removeGuildJoinRequest(e.id),
                            confirmButtonColor: o.Button.Colors.BRAND,
                            ...t,
                            children: (0, a.jsx)(o.Text, {
                                variant: "text-md/normal",
                                children: U.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION_SUBTITLE
                            })
                        }))
                    }, this.handleViewApplicationRejection = () => {
                        let {
                            guild: e
                        } = this.props;
                        null != e && (0, o.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("388435").then(n.bind(n, "388435"));
                            return n => (0, a.jsx)(t, {
                                guildId: e.id,
                                ...n
                            })
                        })
                    }, this.handleShowMemberVerification = () => {
                        let {
                            guild: e
                        } = this.props;
                        null != e && (0, p.openMemberVerificationModal)(e.id)
                    }, this.handleClaimAccount = () => {
                        h.openClaimAccountModal()
                    }, this.handleVerifyPhone = () => {
                        (0, o.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("601745").then(n.bind(n, "601745"));
                            return t => (0, a.jsx)(e, {
                                reason: I.ChangePhoneReason.GUILD_PHONE_REQUIRED,
                                ...t
                            })
                        }, {
                            modalKey: F.PHONE_VERIFICATION_MODAL_KEY
                        })
                    }, this.handleResendVerification = () => {
                        var e;
                        u.default.verifyResend();
                        let t = null === (e = D.default.getCurrentUser()) || void 0 === e ? void 0 : e.email;
                        null != t && (0, o.openModal)(e => (0, a.jsx)(o.ConfirmModal, {
                            ...e,
                            header: U.default.Messages.VERIFICATION_EMAIL_TITLE,
                            confirmText: U.default.Messages.OKAY,
                            confirmButtonColor: o.Button.Colors.BRAND,
                            children: (0, a.jsx)(o.Text, {
                                variant: "text-md/normal",
                                children: U.default.Messages.VERIFICATION_EMAIL_BODY.format({
                                    email: t
                                })
                            })
                        }))
                    }, this.handleTextAreaClick = () => {
                        let {
                            showLurkerModeUpsellPopout: e
                        } = this.props;
                        this.setState({
                            shouldShowLurkerModeUpsellPopout: e
                        })
                    }, this.handleJoinServer = async () => {
                        this.setState({
                            submitting: !0
                        });
                        let e = this.props.channel.getGuildId();
                        try {
                            await c.default.joinGuild(e, {
                                source: j.JoinGuildSources.CHAT_INPUT_BLOCKER
                            })
                        } catch {
                            this.setState({
                                submitting: !1
                            })
                        }
                    }, this.handleGoBack = () => {
                        this.setState({
                            submitting: !0
                        });
                        let e = (0, N.getHistory)();
                        e.goBack()
                    }, this.handleFollowAnnouncement = () => {
                        let {
                            channel: e
                        } = this.props;
                        (0, o.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("996177").then(n.bind(n, "996177"));
                            return n => (0, a.jsx)(t, {
                                channel: e,
                                ...n
                            })
                        })
                    }, this.closeLurkerModeUpsellPopout = () => {
                        this.setState({
                            shouldShowLurkerModeUpsellPopout: !1
                        })
                    }, this.renderLurkerModeUpsellPopout = () => {
                        let {
                            guild: e
                        } = this.props;
                        return i(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"), (0, a.jsx)(M.default, {
                            type: M.LurkerModeUpsellPopoutTypes.CHAT,
                            guild: e,
                            closePopout: this.closeLurkerModeUpsellPopout
                        })
                    }, this.renderMemberVerificationSuccessModal = () => {
                        let {
                            guild: e,
                            guildJoinRequest: t
                        } = this.props, n = (null == t ? void 0 : t.applicationStatus) === m.GuildJoinRequestApplicationStatuses.APPROVED;
                        if (null == e || null == t || !n || (0, E.isApprovedAndAcked)(t)) return null;
                        let s = () => C.default.ackUserGuildJoinRequest(e.id, t.id);
                        return (0, a.jsx)(o.Modal, {
                            renderModal: t => (0, a.jsx)(_.default, {
                                ...t,
                                onAccept: s,
                                guildName: e.name
                            }),
                            onCloseRequest: s
                        })
                    }
                }
            }

            function G(e) {
                var t, n, s;
                let {
                    channel: l,
                    children: i
                } = e, o = l.getGuildId(), u = (0, r.useStateFromStores)([y.default], () => y.default.getGuild(o)), d = (0, r.useStateFromStores)([x.default], () => x.default.getCheck(o)), c = l.type === j.ChannelTypes.GUILD_ANNOUNCEMENT && null != u && u.hasFeature(j.GuildFeatures.NEWS), h = (0, r.useStateFromStores)([R.default], () => c ? R.default.getFollowerStatsForChannel(l.id) : null), C = (0, r.useStateFromStores)([A.default], () => A.default.isLurking(o)), E = (0, r.useStateFromStores)([D.default], () => D.default.getCurrentUser()), p = null !== (t = null == E ? void 0 : E.isStaff()) && void 0 !== t && t, _ = (0, r.useStateFromStores)([v.default], () => {
                    var e;
                    return null != E && null !== (n = null === (e = v.default.getMember(o, E.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n
                }), T = !!(null == u ? void 0 : u.hasVerificationGate()), M = (_ || d.notClaimed) && T, I = (0, r.useStateFromStores)([S.default], () => S.default.shouldShowPopout(o)), N = (0, r.useStateFromStores)([O.default], () => O.default.can(j.Permissions.SEND_MESSAGES, l)), b = (0, r.useStateFromStores)([g.default], () => g.default.getRequest(o)), F = {
                    ...d,
                    guild: u,
                    isLurking: C,
                    isFollowable: c,
                    shouldShowLurkerModeSuccessPopout: I,
                    showLurkerModeUpsellPopout: C && null != u && P.default.canEveryoneRole(j.Permissions.SEND_MESSAGES, l),
                    theme: L.default.theme,
                    canSendMessages: N,
                    channelFollowingUsersSeen: null != h ? h.usersSeenEver : null,
                    hasVerificationGate: T,
                    showMemberVerificationModal: M,
                    guildJoinRequestStatus: null !== (s = null == b ? void 0 : b.applicationStatus) && void 0 !== s ? s : m.GuildJoinRequestApplicationStatuses.STARTED,
                    guildJoinRequest: b,
                    useReducedMotion: f.default.useReducedMotion,
                    isStaff: p
                };
                return (0, a.jsx)(k, {
                    ...F,
                    channel: l,
                    children: i
                })
            }
        },
        788794: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useHighlightColor: function() {
                    return r
                }
            });
            var a = n("819855"),
                s = n("841098"),
                l = n("449918"),
                i = n("49111");

            function r() {
                let e = (0, s.default)();
                return (0, l.getColor)((0, a.isThemeDark)(e) ? i.Color.BRAND_330 : i.Color.BRAND_530)
            }
        },
        37930: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("75196"),
                l = n("788794");

            function i(e) {
                let {
                    width: t = 16,
                    height: n = 16,
                    ...i
                } = e, r = (0, l.useHighlightColor)();
                return (0, a.jsxs)("svg", {
                    ...(0, s.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 16 16",
                    children: [(0, a.jsx)("path", {
                        d: "M11.7791 8.47509L9.24568 7.08859C9.10351 7.00927 8.98757 6.89018 8.91209 6.74591L7.52592 4.22089C7.49677 4.16776 7.45388 4.12344 7.40174 4.09257C7.3496 4.0617 7.29012 4.04541 7.22953 4.04541C7.16893 4.04541 7.10946 4.0617 7.05731 4.09257C7.00517 4.12344 6.96228 4.16776 6.93313 4.22089L5.5447 6.74591C5.46783 6.88684 5.35203 7.00268 5.21112 7.07957L2.67544 8.47509C2.62232 8.50425 2.57801 8.54715 2.54715 8.5993C2.51628 8.65146 2.5 8.71095 2.5 8.77156C2.5 8.83216 2.51628 8.89165 2.54715 8.94381C2.57801 8.99596 2.62232 9.03886 2.67544 9.06802L5.21112 10.4545C5.35187 10.5316 5.46763 10.6474 5.5447 10.7882L6.93088 13.3245C6.96003 13.3776 7.00292 13.4219 7.05506 13.4528C7.1072 13.4837 7.16668 13.5 7.22727 13.5C7.28786 13.5 7.34734 13.4837 7.39948 13.4528C7.45163 13.4219 7.49452 13.3776 7.52367 13.3245L8.90984 10.7882C8.98682 10.6473 9.10259 10.5315 9.24342 10.4545L11.7791 9.06802C11.8322 9.03886 11.8765 8.99596 11.9074 8.94381C11.9383 8.89165 11.9545 8.83216 11.9545 8.77156C11.9545 8.71095 11.9383 8.65146 11.9074 8.5993C11.8765 8.54715 11.8322 8.50425 11.7791 8.47509Z",
                        fill: r
                    }), (0, a.jsx)("path", {
                        d: "M15.3186 2.57078L14.1492 1.92939C14.1147 1.90911 14.0863 1.87988 14.067 1.84477L13.4267 0.673342C13.398 0.620858 13.3557 0.577078 13.3042 0.546584C13.2528 0.516089 13.1941 0.5 13.1344 0.5C13.0746 0.5 13.0159 0.516089 12.9645 0.546584C12.9131 0.577078 12.8708 0.620858 12.842 0.673342L12.1996 1.84699C12.1796 1.88239 12.1504 1.91166 12.1151 1.93162L10.9457 2.57301C10.8933 2.60181 10.8496 2.64419 10.8192 2.69571C10.7888 2.74723 10.7727 2.80599 10.7727 2.86586C10.7727 2.92573 10.7888 2.9845 10.8192 3.03602C10.8496 3.08754 10.8933 3.12992 10.9457 3.15872L12.1173 3.80011C12.152 3.81912 12.1806 3.84772 12.1996 3.88251L12.8398 5.05393C12.8686 5.10641 12.9109 5.15019 12.9623 5.18069C13.0137 5.21118 13.0724 5.22727 13.1322 5.22727C13.1919 5.22727 13.2506 5.21118 13.302 5.18069C13.3534 5.15019 13.3957 5.10641 13.4245 5.05393L14.0647 3.88251C14.0841 3.84666 14.1134 3.81725 14.1492 3.79788L15.3186 3.1654C15.3732 3.13737 15.419 3.09478 15.451 3.04232C15.483 2.98986 15.5 2.92957 15.5 2.86809C15.5 2.80661 15.483 2.74632 15.451 2.69386C15.419 2.6414 15.3732 2.59881 15.3186 2.57078Z",
                        fill: r
                    })]
                })
            }
        },
        998415: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                o = n("355263"),
                u = n("343599"),
                d = s.memo(function(e) {
                    var t;
                    let {
                        className: n,
                        channel: s,
                        section: l
                    } = e, d = null != l ? (0, o.getIconComponent)(l) : null;
                    return (0, a.jsx)("div", {
                        className: i(n, u.wrapper),
                        children: (0, a.jsx)("div", {
                            className: u.icon,
                            children: null != d ? (0, a.jsx)(r.Tooltip, {
                                text: null !== (t = null == l ? void 0 : l.name) && void 0 !== t ? t : "",
                                position: "top",
                                children: e => (0, a.jsx)(d, {
                                    ...e,
                                    channel: s,
                                    section: l,
                                    width: 24,
                                    height: 24
                                })
                            }) : null
                        })
                    })
                })
        },
        228800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return V
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("446674"),
                o = n("151426"),
                u = n("77078"),
                d = n("371642"),
                c = n("84339"),
                f = n("871388"),
                h = n("389153"),
                C = n("56947"),
                E = n("386045"),
                p = n("734217"),
                m = n("10641"),
                g = n("139321"),
                _ = n("824986"),
                S = n("921228"),
                A = n("929531"),
                T = n("848877"),
                M = n("140596"),
                I = n("300322"),
                N = n("845579"),
                L = n("982108"),
                R = n("778588"),
                v = n("957255"),
                y = n("101125"),
                x = n("791106"),
                O = n("351825"),
                D = n("738602"),
                P = n("430025"),
                b = n("659500"),
                j = n("773336"),
                F = n("412861"),
                U = n("79254"),
                H = n("64096"),
                k = n("49111"),
                G = n("80028"),
                B = n("782340"),
                w = n("381769"),
                V = s.memo(function(e) {
                    var t, l;
                    let V, {
                            className: W,
                            channel: z,
                            draftType: K,
                            editorTextContent: Y,
                            setValue: Z,
                            canShowPremiumTutorial: q,
                            canOnlyUseTextCommands: X
                        } = e,
                        Q = s.useRef(null),
                        J = (0, r.useStateFromStores)([y.default], () => y.default.getActivities()),
                        $ = (0, r.useStateFromStores)([E.default], () => E.default.getSettings().clipsEnabled),
                        ee = (0, r.useStateFromStores)([E.default], () => E.default.getLastClipsSession()),
                        et = (0, r.useStateFromStores)([E.default], () => E.default.getState().newClipIds),
                        en = (0, r.useStateFromStores)([L.default], () => null == L.default.getCurrentSidebarChannelId(z.id)),
                        ea = (0, r.useStateFromStores)([g.HotspotStore], () => g.HotspotStore.hasHotspot(g.HotspotLocations.CLIPS_CHANNEL_ATTACH_REMINDER)),
                        es = (0, u.useModalsStore)(e => (0, u.hasModalOpenSelector)(e, G.CLIPS_GALLERY_MODAL_KEY)),
                        el = (0, r.useStateFromStores)([R.default], () => R.default.hasLayers()),
                        ei = (0, r.useStateFromStores)([E.default], () => E.default.hasClips()),
                        [er, eo] = s.useState(null),
                        eu = (0, C.useEnableClips)() && ($ || ei),
                        ed = z.isPrivate(),
                        ec = (0, r.useStateFromStores)([v.default], () => ed || v.default.can(k.Permissions.ATTACH_FILES, z) && v.default.can(k.Permissions.SEND_MESSAGES, z)),
                        ef = (0, c.default)(ee);
                    (null == ef ? void 0 : ef.newClipIds.length) !== (null == ee ? void 0 : ee.newClipIds.length) && (null !== (t = null == ee ? void 0 : ee.newClipIds.length) && void 0 !== t ? t : 0) > 0 && null == er && ea && en && !es && !el && eo("recentClips");
                    let eh = (e, t, n) => {
                        null != t && "ETOOLARGE" === t.code ? (0, F.showUploadFileSizeExceededError)(z, []) : (0, F.promptToUpload)(e, z, K, {
                            requireConfirm: !0,
                            showLargeMessageDialog: n
                        }), b.ComponentDispatch.dispatchToLastSubscribed(k.ComponentActions.TEXTAREA_FOCUS)
                    };

                    function eC() {
                        (0, u.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("167573").then(n.bind(n, "167573"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                channelId: z.id
                            })
                        }, {
                            modalKey: G.CLIPS_GALLERY_MODAL_KEY
                        }), eo(null)
                    }
                    s.useEffect(() => {
                        let e = () => {
                            var e;
                            return null === (e = Q.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
                        };
                        return b.ComponentDispatch.subscribe(k.ComponentActions.UPLOAD_FILE, e), () => {
                            b.ComponentDispatch.unsubscribe(k.ComponentActions.UPLOAD_FILE, e)
                        }
                    });
                    let eE = (0, I.useCanStartPublicThread)(z),
                        ep = (0, I.useCanStartPrivateThread)(z),
                        em = eE || ep,
                        eg = !N.UseLegacyChatInput.useSetting() && !(0, j.isAndroidWeb)() && null != window.ResizeObserver,
                        e_ = (0, r.useStateFromStores)([v.default, M.default], () => (0, h.canUseApplicationCommands)(v.default, M.default, X, z)),
                        eS = null !== (l = null == et ? void 0 : et.length) && void 0 !== l ? l : 0,
                        eA = (0, H.default)({
                            canAttachFiles: ec,
                            canStartThreads: em,
                            useSlate: eg,
                            hasClips: eu,
                            canUseApplicationCommands: e_,
                            channel: z,
                            activities: J,
                            newClipsCount: eS
                        }),
                        eT = (0, m.useIsDismissibleContentDismissed)(o.DismissibleContent.PREMIUM_TUTORIAL_FILE_UPLOAD_COMPOSER_TOOLTIP),
                        eM = (0, S.useIsPremiumTutorialEnabled)("ChannelAttachButton"),
                        eI = eM && q && !eT;
                    if (0 === eA.length) return null;
                    let eN = J.some(e => (0, f.default)(e, k.ActivityFlags.SYNC)),
                        eL = J.some(e => (0, f.default)(e, k.ActivityFlags.JOIN) && !(0, f.default)(e, k.ActivityFlags.EMBEDDED)) || eN;
                    V = eL ? (0, a.jsx)(P.default, {
                        className: w.attachButtonIcon,
                        foreground: w.attachButtonPlay,
                        background: eI ? w.attachButtonPlusGradient : w.attachButtonPlus,
                        width: 24,
                        height: 24,
                        color: eI ? x.GradientCssUrls.PREMIUM_TRIAL_TUTORIAL : "currentColor"
                    }) : eS > 0 ? (0, a.jsx)(D.default, {
                        className: w.attachButtonIcon,
                        foreground: w.attachButtonClip,
                        background: eI ? w.attachButtonPlusGradient : w.attachButtonPlus,
                        width: 24,
                        height: 24,
                        color: eI ? x.GradientCssUrls.PREMIUM_TRIAL_TUTORIAL : "currentColor"
                    }) : (0, a.jsx)(O.default, {
                        className: w.attachButtonIcon,
                        foreground: eI ? w.attachButtonPlusNoFill : w.attachButtonPlus,
                        width: 24,
                        height: 24,
                        color: eI ? x.GradientCssUrls.PREMIUM_TRIAL_TUTORIAL : "currentColor"
                    });
                    let eR = (0, a.jsx)(u.Popout, {
                        shouldShow: null != er,
                        animation: u.Popout.Animation.NONE,
                        align: "recentClips" === er ? "center" : "left",
                        position: "top",
                        positionKey: null != er ? er : "null",
                        onRequestOpen: () => eo("attachMenu"),
                        onRequestClose: () => {
                            !(0, u.hasAnyModalOpen)() && eo(null)
                        },
                        renderPopout: e => {
                            switch (er) {
                                case "recentClips":
                                    return (0, a.jsx)(p.default, {
                                        ...e,
                                        onOpenClips: eC,
                                        lastClipsSession: ee
                                    });
                                case "attachMenu":
                                    return (0, T.dismissPremiumTutorialTooltip)(o.DismissibleContent.PREMIUM_TUTORIAL_FILE_UPLOAD_COMPOSER_TOOLTIP), (0, a.jsx)(U.default, {
                                        ...e,
                                        onClose: () => eo(null),
                                        options: eA,
                                        channel: z,
                                        onFileUpload: () => {
                                            var e;
                                            return null === (e = Q.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
                                        },
                                        draftType: K,
                                        editorTextContent: Y,
                                        setValue: Z,
                                        openClips: eC
                                    });
                                default:
                                    throw Error("Invalid popout type provided")
                            }
                        },
                        children: e => (0, a.jsx)(u.Button, {
                            look: u.Button.Looks.BLANK,
                            size: u.Button.Sizes.NONE,
                            className: i(w.attachButton, W),
                            innerClassName: w.attachButtonInner,
                            "aria-label": B.default.Messages.CHAT_ATTACH_UPLOAD_OR_INVITE,
                            onDoubleClick: ec ? () => {
                                var e;
                                return null === (e = Q.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
                            } : void 0,
                            ...e,
                            children: eI ? (0, a.jsx)(A.default, {
                                tutorialType: _.PremiumTutorialTooltips.FILE_UPLOAD,
                                text: B.default.Messages.PREMIUM_TRIAL_TUTORIAL_FILE_UPLOAD_TOOLTIP,
                                children: V
                            }) : V
                        })
                    });
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: w.uploadInput,
                            children: (0, a.jsx)(d.default, {
                                ref: Q,
                                onChange: e => {
                                    eh(e.currentTarget.files, e.currentTarget.err), e.currentTarget.value = ""
                                },
                                multiple: z.rateLimitPerUser <= 0,
                                tabIndex: -1,
                                "aria-hidden": !0
                            })
                        }), (0, a.jsx)("div", {
                            className: w.attachWrapper,
                            children: eR
                        })]
                    })
                })
        },
        79254: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("171210"),
                i = n("77078"),
                r = n("685665"),
                o = n("716849"),
                u = n("552917"),
                d = n("967241"),
                c = n("351825"),
                f = n("956089"),
                h = n("599110"),
                C = n("659500"),
                E = n("254490"),
                p = n("412861"),
                m = n("149022"),
                g = n("64096"),
                _ = n("49111"),
                S = n("782340"),
                A = n("648198");

            function T(e, t, s, l) {
                (0, i.openModalLazy)(async () => {
                    let {
                        default: i
                    } = await n.el("811475").then(n.bind(n, "811475"));
                    return n => (0, a.jsx)(i, {
                        ...n,
                        activity: e,
                        channel: t,
                        activityActionType: s,
                        analyticsLocations: l
                    })
                })
            }
            let M = /(.*)```(\w+)\n(.*)```(.*)/s;

            function I(e) {
                let {
                    channel: t,
                    options: n,
                    onFileUpload: I,
                    onClose: N,
                    onSelect: L,
                    draftType: R,
                    editorTextContent: v,
                    setValue: y,
                    openClips: x
                } = e;
                (0, o.useMaybeFetchPremiumLikelihood)(u.default);
                let {
                    analyticsLocations: O
                } = (0, r.default)();
                s.useEffect(() => {
                    h.default.track(_.AnalyticEvents.OPEN_POPOUT, {
                        type: "Send Attachment",
                        channel_id: t.id,
                        guild_id: t.guild_id
                    })
                }, [t.guild_id, t.id]);

                function D() {
                    (0, d.openThreadSidebarForCreating)(t, void 0, "Plus Button")
                }

                function P() {
                    h.default.track(_.AnalyticEvents.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), y("/", (0, m.toRichValue)("/"))
                }

                function b() {
                    x()
                }

                function j() {
                    let e = v,
                        n = "txt",
                        a = "",
                        s = v.match(M);
                    null != s && (a = s[1], n = s[2], e = s[3], a += s[4]), (0, p.promptToUpload)([(0, E.makeFile)(new Blob([e], {
                        type: "text/plain"
                    }), "message.".concat(n))], t, R), C.ComponentDispatch.dispatchToLastSubscribed(_.ComponentActions.CLEAR_TEXT), "" !== a && C.ComponentDispatch.dispatchToLastSubscribed(_.ComponentActions.INSERT_TEXT, {
                        plainText: a
                    })
                }
                return (0, a.jsx)(i.Menu, {
                    onSelect: L,
                    navId: "channel-attach",
                    onClose: N,
                    "aria-label": S.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    className: A.menu,
                    children: n.map(function(e) {
                        var n;
                        let s = (0, a.jsxs)("div", {
                            className: A.optionLabel,
                            children: [(0, a.jsx)(e.icon, {
                                className: A.optionIcon
                            }), (0, a.jsx)("div", {
                                className: A.optionName,
                                children: e.display
                            }), null != e.badgeVal && e.badgeVal > 0 && (0, a.jsx)(f.NumberBadge, {
                                className: A.badge,
                                color: null !== (n = e.badgeColor) && void 0 !== n ? n : l.default.STATUS_DANGER,
                                count: e.badgeVal
                            })]
                        });
                        switch (e.type) {
                            case g.AttachmentTypes.UPLOAD_A_FILE:
                                return (0, a.jsx)(i.MenuItem, {
                                    id: "upload-file",
                                    label: s,
                                    subtext: (0, a.jsx)("span", {
                                        className: A.tipSubtext,
                                        children: S.default.Messages.UPLOAD_FILE_SUBTEXT.format({
                                            icon: (e, t) => (0, a.jsx)(c.default, {
                                                className: A.tipIcon
                                            }, t)
                                        })
                                    }),
                                    action: I
                                }, "upload-file");
                            case g.AttachmentTypes.UPLOAD_TEXT_AS_FILE:
                                if ("" === v) return null;
                                return (0, a.jsx)(i.MenuItem, {
                                    id: "upload-text-as-file",
                                    label: s,
                                    action: j
                                }, "upload-text-as-file");
                            case g.AttachmentTypes.CLIPS:
                                return (0, a.jsx)(i.MenuItem, {
                                    id: "clips",
                                    label: s,
                                    action: b
                                }, "clips");
                            case g.AttachmentTypes.INVITE_TO_PLAY_GAME:
                                return (0, a.jsx)(i.MenuItem, {
                                    id: "play",
                                    label: s,
                                    action: () => {
                                        var n;
                                        return n = e.activity, void(h.default.track(_.AnalyticEvents.OPEN_MODAL, {
                                            type: "Send Join Invite",
                                            application_id: n.application_id,
                                            location: _.AnalyticsSections.CHANNEL_TEXT_AREA
                                        }), T(n, t, _.ActivityActionTypes.JOIN, O))
                                    }
                                }, "play");
                            case g.AttachmentTypes.INVITE_TO_LISTEN:
                                return (0, a.jsx)(i.MenuItem, {
                                    id: "listen",
                                    label: s,
                                    action: () => {
                                        var n;
                                        return n = e.activity, void(h.default.track(_.AnalyticEvents.OPEN_MODAL, {
                                            type: "Send Listen Invite",
                                            location: _.AnalyticsSections.CHANNEL_TEXT_AREA
                                        }), T(n, t, _.ActivityActionTypes.LISTEN, O))
                                    }
                                }, "listen");
                            case g.AttachmentTypes.INVITE_TO_WATCH:
                                return (0, a.jsx)(i.MenuItem, {
                                    id: "watch",
                                    label: s,
                                    action: () => {
                                        var n;
                                        return n = e.activity, void(h.default.track(_.AnalyticEvents.OPEN_MODAL, {
                                            type: "Send Watch Invite",
                                            location: _.AnalyticsSections.CHANNEL_TEXT_AREA
                                        }), T(n, t, _.ActivityActionTypes.WATCH, O))
                                    }
                                }, "watch");
                            case g.AttachmentTypes.CREATE_THREAD:
                                return (0, a.jsx)(i.MenuItem, {
                                    id: "THREAD",
                                    label: s,
                                    action: D
                                }, "THREAD");
                            case g.AttachmentTypes.SLASH_COMMAND:
                                return (0, a.jsx)(i.MenuItem, {
                                    id: "SLASH_COMMAND",
                                    label: s,
                                    action: P
                                }, "SLASH_COMMAND");
                            default:
                                return null
                        }
                    })
                })
            }
        },
        64096: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AttachmentTypes: function() {
                    return s
                },
                default: function() {
                    return S
                }
            });
            var a, s, l = n("871388"),
                i = n("679653"),
                r = n("20606"),
                o = n("27618"),
                u = n("697218"),
                d = n("83910"),
                c = n("522049"),
                f = n("462579"),
                h = n("824326"),
                C = n("616225"),
                E = n("12724"),
                p = n("959097"),
                m = n("507491"),
                g = n("49111"),
                _ = n("782340");

            function S(e) {
                let {
                    canAttachFiles: t,
                    canStartThreads: n,
                    useSlate: a,
                    canUseApplicationCommands: S,
                    hasClips: A,
                    channel: T,
                    activities: M,
                    newClipsCount: I
                } = e, N = [];
                return t && (N.push({
                    type: s.UPLOAD_A_FILE,
                    icon: m.default,
                    display: _.default.Messages.CHAT_ATTACH_UPLOAD_A_FILE
                }), N.push({
                    type: s.UPLOAD_TEXT_AS_FILE,
                    icon: E.default,
                    display: _.default.Messages.CHAT_ATTACH_UPLOAD_TEXT_AS_FILE
                })), A && N.push({
                    type: s.CLIPS,
                    icon: c.default,
                    display: _.default.Messages.CLIPS_SHARE_A_CLIP,
                    badgeVal: I,
                    badgeColor: r.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND
                }), n && N.push({
                    type: s.CREATE_THREAD,
                    icon: p.default,
                    display: _.default.Messages.CREATE_THREAD
                }), a && S && N.push({
                    type: s.SLASH_COMMAND,
                    icon: d.default,
                    display: _.default.Messages.CHAT_ATTACH_USE_SLASH_COMMAND
                }), M.forEach(e => {
                    !(0, l.default)(e, g.ActivityFlags.EMBEDDED) && (e.type === g.ActivityTypes.PLAYING && (0, l.default)(e, g.ActivityFlags.JOIN) && N.push({
                        type: s.INVITE_TO_PLAY_GAME,
                        icon: h.default,
                        display: _.default.Messages.CHAT_ATTACH_INVITE_TO_PLAY_GAME.format({
                            channel: (0, i.computeChannelName)(T, u.default, o.default, !0),
                            game: null != e ? e.name : ""
                        }),
                        activity: e
                    }), e.type === g.ActivityTypes.LISTENING && (0, l.default)(e, g.ActivityFlags.SYNC) && N.push({
                        type: s.INVITE_TO_LISTEN,
                        icon: C.default,
                        display: _.default.Messages.CHAT_ATTACH_INVITE_TO_LISTEN.format({
                            channel: (0, i.computeChannelName)(T, u.default, o.default, !0),
                            name: null != e ? e.name : ""
                        }),
                        activity: e
                    }), e.type === g.ActivityTypes.WATCHING && (0, l.default)(e, g.ActivityFlags.SYNC) && N.push({
                        type: s.INVITE_TO_WATCH,
                        icon: f.default,
                        display: _.default.Messages.CHAT_ATTACH_INVITE_TO_WATCH.format({
                            channel: (0, i.computeChannelName)(T, u.default, o.default, !0),
                            name: null != e ? e.name : ""
                        }),
                        activity: e
                    }))
                }), N
            }(a = s || (s = {})).UPLOAD_A_FILE = "UPLOAD_A_FILE", a.UPLOAD_TEXT_AS_FILE = "UPLOAD_TEXT_AS_FILE", a.INVITE_TO_PLAY_GAME = "INVITE_TO_GAME", a.INVITE_TO_LISTEN = "INVITE_TO_LISTEN", a.INVITE_TO_WATCH = "INVITE_TO_WATCH", a.CREATE_THREAD = "CREATE_THREAD", a.SLASH_COMMAND = "SLASH_COMMAND", a.CLIPS = "CLIPS"
        },
        734217: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("759843"),
                i = n("446674"),
                r = n("77078"),
                o = n("428958"),
                u = n("139321"),
                d = n("386045"),
                c = n("803725"),
                f = n("782340"),
                h = n("367424");

            function C(e) {
                let {
                    onOpenClips: t,
                    lastClipsSession: n,
                    closePopout: C
                } = e, p = (0, i.useStateFromStoresArray)([d.default], () => {
                    var e;
                    let t = null === (e = d.default.getLastClipsSession()) || void 0 === e ? void 0 : e.newClipIds;
                    return null == t ? [] : d.default.getClips().slice(0, 4).filter(e => t.includes(e.id))
                });
                return (s.useEffect(() => () => {
                    (0, c.clearClipsSession)()
                }, []), (0, o.default)({
                    type: l.ImpressionTypes.VIEW,
                    name: l.ImpressionNames.HOTSPOT,
                    properties: {
                        hotspot_location: u.HotspotLocations.CLIPS_CHANNEL_ATTACH_REMINDER
                    }
                }), null == n) ? (0, a.jsx)(a.Fragment, {}) : (0, a.jsxs)("div", {
                    className: h.recentClipsPopout,
                    children: [(0, a.jsx)(E, {
                        clips: p
                    }), (0, a.jsx)(r.Heading, {
                        className: h.header,
                        color: "header-primary",
                        variant: "heading-md/extrabold",
                        children: f.default.Messages.CLIPS_SESSION_ENDED_TOOLTIP_HEADER.format({
                            count: n.newClipIds.length
                        })
                    }), (0, a.jsx)(r.Text, {
                        color: "text-normal",
                        className: h.content,
                        variant: "text-sm/medium",
                        children: f.default.Messages.CLIPS_SESSION_ENDED_TOOLTIP_BODY.format({
                            applicationName: n.applicationName
                        })
                    }), (0, a.jsxs)("div", {
                        className: h.buttonsContainer,
                        children: [(0, a.jsx)(r.Button, {
                            color: r.Button.Colors.PRIMARY,
                            look: r.Button.Looks.LINK,
                            onClick: function() {
                                (0, u.hideHotspot)(u.HotspotLocations.CLIPS_CHANNEL_ATTACH_REMINDER), C()
                            },
                            children: f.default.Messages.CLIPS_SESSION_ENDED_TOOLTIP_SECONDARY_CTA
                        }), (0, a.jsx)(r.Button, {
                            color: r.Button.Colors.BRAND,
                            onClick: t,
                            children: f.default.Messages.CLIPS_SESSION_ENDED_TOOLTIP_PRIMARY_CTA
                        })]
                    })]
                })
            }

            function E(e) {
                let {
                    clips: t
                } = e;
                return (0, a.jsx)("div", {
                    className: h.thumbnailStack,
                    children: Array.from({
                        ...t,
                        length: 4
                    }).map((e, t) => null != e ? (0, a.jsx)("img", {
                        alt: "",
                        className: h.thumbnail,
                        src: e.thumbnail
                    }, e.id) : (0, a.jsx)("div", {}, "placeholder-".concat(t))).reverse()
                })
            }
        },
        277420: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClydeNotice: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("77078"),
                r = n("701909"),
                o = n("49111"),
                u = n("782340"),
                d = n("455841");

            function c(e) {
                let {
                    narrow: t
                } = e, n = r.default.getArticleURL(o.HelpdeskArticles.CLYDE_AI);
                return (0, a.jsx)("div", {
                    className: l(d.chatHeaderBar, {
                        [d.narrow]: t
                    }),
                    children: (0, a.jsx)(i.Text, {
                        className: d.chatHeaderBarText,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: u.default.Messages.CLYDE_NOTICE.format({
                            learnMoreUrl: n
                        })
                    })
                })
            }
        },
        189318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openClydeFeedbackModal: function() {
                    return C
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("194141"),
                i = n("599110"),
                r = n("680894"),
                o = n("49111"),
                u = n("200521"),
                d = n("782340"),
                c = n("693268");
            let f = [{
                className: c.emojiThumbsUp,
                rating: u.FeedbackRating.GOOD,
                classNameSelected: c.selected
            }, {
                className: c.emojiThumbsDown,
                rating: u.FeedbackRating.BAD,
                classNameSelected: c.selected
            }];

            function h(e) {
                let {
                    transitionState: t,
                    onClose: n,
                    onSubmit: s
                } = e;
                return (0, a.jsx)(l.default, {
                    header: d.default.Messages.CLYDE_FEEDBACK_HEADER,
                    body: d.default.Messages.CLYDE_FEEDBACK_BODY,
                    problemTitle: d.default.Messages.CLYDE_FEEDBACK_PROBLEM_TITLE,
                    onSubmit: s,
                    onClose: n,
                    ratingConfigs: f,
                    transitionState: t,
                    problems: (0, r.getClydeFeedbackReasons)(),
                    ratingsSelectorClassName: c.ratingsSelector,
                    feedbackProblems: [r.ClydeFeedbackReasons.OTHER],
                    otherKey: r.ClydeFeedbackReasons.OTHER,
                    startRating: u.FeedbackRating.BAD,
                    hideDontShowCheckbox: !0
                })
            }
            let C = (e, t, n, l) => {
                let d = a => {
                    let {
                        rating: d,
                        problem: c,
                        feedback: f
                    } = a;
                    d === u.FeedbackRating.GOOD && (n(!0), l(!1)), i.default.track(o.AnalyticEvents.CLYDE_AI_MESSAGE_RATED, {
                        reason: c,
                        location,
                        rating: (e => {
                            switch (e) {
                                case u.FeedbackRating.GOOD:
                                    return 1;
                                case u.FeedbackRating.BAD:
                                    return -1;
                                default:
                                    return 0
                            }
                        })(d),
                        feedback: f,
                        message_id: e,
                        has_custom_personality: t
                    }), (0, s.showToast)((0, s.createToast)((0, r.randomClydeThanks)(), s.ToastType.SUCCESS))
                };
                (0, s.openModalLazy)(() => new Promise(e => {
                    e(e => (0, a.jsx)(h, {
                        ...e,
                        onSubmit: d
                    }))
                }))
            }
        },
        145375: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                allowMessagesFromSpamUser: function() {
                    return s
                }
            });
            var a = n("913144");

            function s(e) {
                a.default.dispatch({
                    type: "ALLOW_SPAM_MESSAGES_FOR_USER",
                    userId: e
                })
            }
        },
        636417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("446674"),
                s = n("913144");
            let l = new Set;
            class i extends a.default.PersistedStore {
                initialize(e) {
                    null != e && (l = new Set(e))
                }
                hasAllowedSpamUser(e) {
                    return l.has(e)
                }
                getState() {
                    return l
                }
            }
            i.displayName = "SpamMessageAcceptStore", i.persistKey = "SpamMessageAcceptStore";
            var r = new i(s.default, {
                ALLOW_SPAM_MESSAGES_FOR_USER: function(e) {
                    let {
                        userId: t
                    } = e;
                    l.add(t)
                },
                HIDE_SPAM_MESSAGES_FOR_USER: function(e) {
                    let {
                        userId: t
                    } = e;
                    l.delete(t)
                }
            })
        },
        488049: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useDisplayDMSpamBanner: function() {
                    return u
                }
            });
            var a = n("446674"),
                s = n("377253"),
                l = n("697218"),
                i = n("636417"),
                r = n("49111"),
                o = n("724210");

            function u(e) {
                let t = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some(e => e.bot),
                    n = e.isPrivate() ? e.getRecipientId() : null,
                    u = (0, a.useStateFromStores)([l.default], () => {
                        var e;
                        return (null === (e = l.default.getUser(n)) || void 0 === e ? void 0 : e.hasFlag(r.UserFlags.SPAMMER)) === !0
                    }, [n]),
                    d = e.hasFlag(o.ChannelFlags.IS_SPAM),
                    [c, f] = (0, a.useStateFromStoresArray)([s.default], () => {
                        let t = s.default.getMessages(e.id);
                        return [t.length > 0, t.toArray().some(e => e.author.id === n)]
                    }, [e.id, n]),
                    h = (0, a.useStateFromStores)([i.default], () => null != n && i.default.hasAllowedSpamUser(n), [n]);
                return t && (u && c || d && f) && !h
            }
        },
        324051: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RedactedMessages: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("97810"),
                i = n("381546"),
                r = n("599110"),
                o = n("49111"),
                u = n("782340"),
                d = n("926477");

            function c(e) {
                let {
                    channel: t,
                    count: n,
                    showRedactedMessages: c
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.default, {}), (0, a.jsxs)("div", {
                        className: d.redactedMessages,
                        children: [(0, a.jsx)(i.default, {
                            className: d.redactedMessageIcon
                        }), (0, a.jsx)("div", {
                            className: d.redactedMessageText,
                            children: u.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT.format({
                                count: n
                            })
                        }), (0, a.jsx)(s.Button, {
                            size: s.Button.Sizes.MIN,
                            look: s.Button.Looks.LINK,
                            color: s.Button.Colors.LINK,
                            onClick: () => {
                                r.default.track(o.AnalyticEvents.DM_SAFETY, {
                                    channel_id: t.id,
                                    channel_type: t.type,
                                    safety_prompt: "DMSpamExperiment",
                                    response: "show_redacted_messages"
                                }), c()
                            },
                            className: d.showRedactedMessagesButton,
                            children: u.default.Messages.BLOCKED_MESSAGES_SHOW.format({
                                count: n
                            })
                        })]
                    })]
                })
            }
        },
        607474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SenderSpammerBanner: function() {
                    return A
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                i = n("404118"),
                r = n("450911"),
                o = n("736964"),
                u = n("377114"),
                d = n("949067"),
                c = n("594864"),
                f = n("697218"),
                h = n("599110"),
                C = n("145375"),
                E = n("49111"),
                p = n("724210"),
                m = n("782340"),
                g = n("167296"),
                _ = n("46716");
            let S = n("648529");

            function A(e) {
                let {
                    channel: t
                } = e, n = t.getRecipientId(), A = (0, s.useStateFromStores)([f.default], () => {
                    let e = f.default.getUser(n);
                    return null != e ? e.username : null
                }), T = (0, d.useLongestChannelMessageBeforeReply)(t.id, n), M = async () => {
                    h.default.track(E.AnalyticEvents.DM_SAFETY, {
                        channel_id: t.id,
                        channel_type: t.type,
                        safety_prompt: "DMSpamExperiment",
                        response: "block_modal_cancel_click"
                    }), await r.default.closePrivateChannel(t.id, !0)
                }, I = async () => {
                    h.default.track(E.AnalyticEvents.DM_SAFETY, {
                        channel_id: t.id,
                        channel_type: t.type,
                        safety_prompt: "DMSpamExperiment",
                        response: "block_modal_block_click"
                    }), await o.default.addRelationship({
                        userId: n,
                        context: {
                            location: "DMSpamModal"
                        },
                        type: E.RelationshipTypes.BLOCKED
                    }), await r.default.closePrivateChannel(t.id, !0), (0, l.showToast)((0, l.createToast)(m.default.Messages.SPAMMER_BLOCKED.format({
                        username: A
                    }), l.ToastType.SUCCESS))
                }, N = () => {
                    (0, C.allowMessagesFromSpamUser)(n), null != T && t.hasFlag(p.ChannelFlags.IS_SPAM) && (0, u.submitHamReportForFirstDM)(T), h.default.track(E.AnalyticEvents.DM_SAFETY, {
                        channel_id: t.id,
                        channel_type: t.type,
                        safety_prompt: "DMSpamExperiment",
                        response: "not_spam"
                    })
                };
                return (0, a.jsxs)(c.MessageNoticeBanner, {
                    bannerIcon: S,
                    bannerHeader: m.default.Messages.ACCEPT_SPAM_DM_HEADER,
                    bannerSubtext: m.default.Messages.ACCEPT_SPAM_DM_SUBTEXT,
                    children: [(0, a.jsx)(l.Tooltip, {
                        text: m.default.Messages.REPORT_NOT_SPAM_TOOLTIP,
                        color: l.Tooltip.Colors.BRAND,
                        tooltipClassName: g.notSpamTooltip,
                        children: e => (0, a.jsx)(l.Button, {
                            ...e,
                            className: _.largeButton,
                            look: l.Button.Looks.FILLED,
                            size: l.Button.Sizes.SMALL,
                            color: l.Button.Colors.PRIMARY,
                            onClick: N,
                            children: m.default.Messages.REPORT_NOT_SPAM
                        })
                    }), (0, a.jsx)(l.Button, {
                        className: _.largeButton,
                        look: l.Button.Looks.FILLED,
                        size: l.Button.Sizes.SMALL,
                        color: l.Button.Colors.RED,
                        onClick: () => {
                            h.default.track(E.AnalyticEvents.DM_SAFETY, {
                                channel_id: t.id,
                                channel_type: t.type,
                                safety_prompt: "DMSpamExperiment",
                                response: "close_channel_click"
                            }), i.default.show({
                                title: m.default.Messages.BLOCK_SPAMMER_HEADER,
                                body: m.default.Messages.BLOCK_SPAMMER_SUBHEADER.format({
                                    username: A
                                }),
                                onCancel: M,
                                cancelText: m.default.Messages.CANCEL,
                                onConfirm: I,
                                confirmText: m.default.Messages.BLOCK
                            }), r.default.closePrivateChannel(t.id, !0)
                        },
                        children: m.default.Messages.CLOSE_DM
                    })]
                })
            }
        },
        938244: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("145131"),
                i = n("178616");

            function r(e) {
                let {
                    icon: t,
                    onClick: n,
                    label: r
                } = e;
                return (0, a.jsx)(s.Button, {
                    look: s.Button.Looks.BLANK,
                    size: s.Button.Sizes.MIN,
                    className: i.button,
                    onClick: n,
                    children: (0, a.jsxs)(l.default, {
                        align: l.default.Align.CENTER,
                        children: [(0, a.jsx)("div", {
                            className: i.buttonIcon,
                            children: t
                        }), (0, a.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            children: r
                        })]
                    })
                })
            }
        },
        19846: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("394846"),
                i = n("446674"),
                r = n("77078"),
                o = n("736964"),
                u = n("486503"),
                d = n("7643"),
                c = n("785770"),
                f = n("28424"),
                h = n("208021"),
                C = n("713135"),
                E = n("401642"),
                p = n("982108"),
                m = n("27618"),
                g = n("697218"),
                _ = n("587974"),
                S = n("315102"),
                A = n("841397"),
                T = n("49111"),
                M = n("680894"),
                I = n("590456"),
                N = n("782340"),
                L = n("977393");
            let R = e => {
                    let {
                        userId: t
                    } = e, n = (0, i.useStateFromStores)([C.default], () => C.default.getMutualGuilds(t), [t]), l = s.useMemo(() => null != n ? n.slice(0, 3).map((e, t) => {
                        let {
                            guild: s
                        } = e, l = null != s ? S.default.getGuildIconURL({
                            id: s.id,
                            icon: s.icon,
                            size: 24
                        }) : null;
                        if (null == l) return null;
                        let i = t === (n.length > 3 ? 3 : n.length) - 1,
                            r = (0, a.jsx)("img", {
                                src: l,
                                alt: "",
                                className: L.avatar
                            }, t);
                        return i ? r : (0, a.jsx)(_.default, {
                            className: L.avatarMask,
                            mask: _.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            width: 24,
                            height: 24,
                            children: r
                        }, t)
                    }).filter(e => null != e) : [], [n]);
                    return null == n || 0 === n.length ? (0, a.jsx)(r.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: N.default.Messages.NO_MUTUAL_GUILDS
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: L.avatarContainer,
                            children: l
                        }), (0, a.jsx)(r.Clickable, {
                            onClick: () => {
                                (0, E.openUserProfileModal)({
                                    userId: t,
                                    section: I.UserProfileSections.MUTUAL_GUILDS,
                                    analyticsLocation: {
                                        section: T.AnalyticsSections.DIRECT_MESSAGE
                                    }
                                })
                            },
                            children: (0, a.jsx)(r.Text, {
                                className: L.mutualGuilds,
                                variant: "text-sm/normal",
                                children: N.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
                                    count: n.length
                                })
                            })
                        })]
                    })
                },
                v = e => {
                    var t;
                    let {
                        relationshipType: n,
                        userId: s,
                        showingBanner: l
                    } = e, i = null === (t = g.default.getUser(s)) || void 0 === t ? void 0 : t.bot, u = () => {
                        o.default.addRelationship({
                            userId: s,
                            context: {
                                location: T.AnalyticsPages.DM_CHANNEL
                            }
                        })
                    }, d = (0, a.jsx)(r.Button, {
                        className: L.action,
                        size: r.Button.Sizes.TINY,
                        color: r.Button.Colors.PRIMARY,
                        onClick: () => {
                            o.default.addRelationship({
                                userId: s,
                                context: {
                                    location: T.AnalyticsPages.DM_CHANNEL
                                },
                                type: T.RelationshipTypes.BLOCKED
                            })
                        },
                        children: N.default.Messages.BLOCK
                    });
                    switch (n) {
                        case T.RelationshipTypes.NONE:
                            return (0, a.jsxs)(a.Fragment, {
                                children: [!i && !l && (0, a.jsx)(r.Button, {
                                    className: L.action,
                                    size: r.Button.Sizes.TINY,
                                    onClick: u,
                                    children: N.default.Messages.ADD_FRIEND
                                }), d]
                            });
                        case T.RelationshipTypes.FRIEND:
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(r.Button, {
                                    className: L.action,
                                    size: r.Button.Sizes.TINY,
                                    onClick: () => {
                                        o.default.removeFriend(s, {
                                            location: T.AnalyticsPages.DM_CHANNEL
                                        })
                                    },
                                    color: r.Button.Colors.PRIMARY,
                                    children: N.default.Messages.REMOVE_FRIEND
                                }), d]
                            });
                        case T.RelationshipTypes.BLOCKED:
                            return (0, a.jsx)(r.Button, {
                                className: L.action,
                                size: r.Button.Sizes.TINY,
                                onClick: () => {
                                    o.default.unblockUser(s, {
                                        location: T.AnalyticsPages.DM_CHANNEL
                                    })
                                },
                                color: r.Button.Colors.PRIMARY,
                                children: N.default.Messages.UNBLOCK
                            });
                        case T.RelationshipTypes.PENDING_INCOMING:
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(r.Text, {
                                    className: L.action,
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: N.default.Messages.FRIEND_REQUEST_RECEIVED
                                }), (0, a.jsx)(r.Button, {
                                    className: L.action,
                                    size: r.Button.Sizes.TINY,
                                    onClick: u,
                                    children: N.default.Messages.FRIEND_REQUEST_ACCEPT
                                }), (0, a.jsx)(r.Button, {
                                    className: L.action,
                                    size: r.Button.Sizes.TINY,
                                    color: r.Button.Colors.PRIMARY,
                                    onClick: () => {
                                        o.default.cancelFriendRequest(s, {
                                            location: T.AnalyticsPages.DM_CHANNEL
                                        })
                                    },
                                    children: N.default.Messages.FRIEND_REQUEST_IGNORE
                                }), d]
                            });
                        case T.RelationshipTypes.PENDING_OUTGOING:
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(r.Button, {
                                    className: L.action,
                                    size: r.Button.Sizes.TINY,
                                    disabled: !0,
                                    children: N.default.Messages.ADD_FRIEND_BUTTON_AFTER
                                }), d]
                            });
                        default:
                            return null
                    }
                },
                y = e => {
                    let {
                        channelId: t,
                        otherUserId: n
                    } = e, l = s.useCallback(() => {
                        (0, r.showToast)((0, r.createToast)(N.default.Messages.MESSAGE_REQUESTS_SPAM_REQUEST_ERROR_ALERT_TITLE, r.ToastType.FAILURE))
                    }, []), i = s.useCallback(() => {
                        h.default.closeChannelSidebar(p.MESSAGE_REQUESTS_BASE_CHANNEL_ID)
                    }, []), o = s.useCallback(() => {
                        h.default.closeChannelSidebar(p.MESSAGE_REQUESTS_BASE_CHANNEL_ID)
                    }, []), {
                        acceptMessageRequest: u,
                        rejectMessageRequest: c,
                        isAcceptLoading: f,
                        isRejectLoading: C,
                        isOptimisticAccepted: E,
                        isOptimisticRejected: m
                    } = (0, d.useMessageRequestActions)({
                        user: g.default.getUser(n),
                        onError: l,
                        onAcceptSuccess: o,
                        onRejectSuccess: i
                    }), _ = f || C || E || m;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(r.Button, {
                            className: L.action,
                            size: r.Button.Sizes.TINY,
                            onClick: () => u(t),
                            disabled: _,
                            submitting: f,
                            children: N.default.Messages.MESSAGE_REQUEST_ACCEPT
                        }), (0, a.jsx)(r.Button, {
                            className: L.action,
                            size: r.Button.Sizes.TINY,
                            onClick: () => c(t),
                            color: r.Button.Colors.PRIMARY,
                            disabled: _,
                            submitting: C,
                            children: N.default.Messages.MESSAGE_REQUEST_IGNORE
                        })]
                    })
                };
            var x = e => {
                let {
                    userId: t,
                    channel: n,
                    showingBanner: s
                } = e, {
                    channelId: r
                } = (0, c.useMessageRequestSidebarState)(), o = (0, i.useStateFromStores)([u.default], () => null != r && u.default.isSpam(r), [r]), d = (0, i.useStateFromStores)([m.default], () => m.default.getRelationshipType(t), [t]), h = n.id === r;
                return t === M.CLYDE_AI_USER_ID ? null : o || h ? (0, a.jsxs)("div", {
                    className: L.mobileContainer,
                    children: [(0, a.jsx)("div", {
                        className: L.mobileMutualGuilds,
                        children: (0, a.jsx)(R, {
                            userId: t
                        })
                    }), (0, a.jsxs)("div", {
                        className: L.mobileButtons,
                        children: [(0, a.jsx)(y, {
                            channelId: n.id,
                            otherUserId: t
                        }), (0, a.jsx)(f.default, {
                            channel: n
                        })]
                    })]
                }) : !0 === l.isMobile || h ? (0, a.jsxs)("div", {
                    className: L.mobileContainer,
                    children: [(0, a.jsx)("div", {
                        className: L.mobileMutualGuilds,
                        children: (0, a.jsx)(R, {
                            userId: t
                        })
                    }), (0, a.jsxs)("div", {
                        className: L.mobileButtons,
                        children: [(0, a.jsx)(v, {
                            relationshipType: d,
                            userId: t,
                            showingBanner: s
                        }), !s && (0, a.jsx)(A.default, {
                            otherUserId: t,
                            channel: n,
                            navigateAwayOnReportSuccess: !1
                        })]
                    })]
                }) : (0, a.jsxs)("div", {
                    className: L.container,
                    children: [(0, a.jsx)(R, {
                        userId: t
                    }), (0, a.jsx)("div", {
                        className: L.divider
                    }), (0, a.jsx)(v, {
                        relationshipType: d,
                        userId: t,
                        showingBanner: s
                    }), !s && (0, a.jsx)(A.default, {
                        otherUserId: t,
                        channel: n
                    })]
                })
            }
        },
        172554: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                },
                EmptyMessageIcon: function() {
                    return d
                },
                EmptyMessageHeader: function() {
                    return c
                },
                EmptyMessageBody: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("77078"),
                r = n("154864"),
                o = n("49111"),
                u = n("898771");

            function d(e) {
                let {
                    locked: t = !1,
                    channelType: n
                } = e;
                return (0, a.jsx)("div", {
                    className: l(u.emptyChannelIcon, {
                        [u.locked]: t,
                        [u.voiceChat]: n === o.ChannelTypes.GUILD_VOICE || n === o.ChannelTypes.GUILD_STAGE_VOICE
                    })
                })
            }

            function c(e) {
                let {
                    children: t,
                    className: n
                } = e;
                return (0, a.jsx)(i.Heading, {
                    "aria-hidden": "true",
                    className: l(n, u.header),
                    variant: "heading-xxl/extrabold",
                    children: t
                })
            }

            function f(e) {
                let {
                    children: t
                } = e;
                return (0, a.jsx)(i.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: u.description,
                    children: t
                })
            }
            var h = function(e) {
                let {
                    className: t,
                    channelId: n,
                    children: s,
                    ...i
                } = e;
                return (0, a.jsx)("div", {
                    className: l(t, u.container),
                    id: (0, r.getMessageDOMId)(n, n),
                    ...i,
                    children: s
                })
            }
        },
        34695: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("446674"),
                i = n("77078"),
                r = n("913144"),
                o = n("679653"),
                u = n("454273"),
                d = n("934288"),
                c = n("262973"),
                f = n("713135"),
                h = n("506885"),
                C = n("233069"),
                E = n("923959"),
                p = n("957255"),
                m = n("697218"),
                g = n("158998"),
                _ = n("19846"),
                S = n("172554"),
                A = n("172643"),
                T = n("710357"),
                M = n("931922"),
                I = n("582724"),
                N = n("834744"),
                L = n("372912"),
                R = n("952999"),
                v = n("49111"),
                y = n("782340"),
                x = n("926622");

            function O(e) {
                let {
                    canManageRoles: t,
                    channel: n
                } = e, s = t && (0, u.isPrivateGuildChannel)(n), i = (0, l.useStateFromStores)([E.default], () => null != n.guild_id && n === E.default.getDefaultChannel(n.guild_id), [n]), r = (0, d.default)(n.id);
                if (r) return null;
                if (n.isForumPost()) return (0, a.jsx)(A.default, {
                    channel: n
                });
                if (C.THREAD_CHANNEL_TYPES.has(n.type)) return (0, a.jsx)(L.default, {
                    channel: n
                });
                else if (i) return (0, a.jsx)(R.default, {
                    channel: n
                });
                else if (s) return (0, a.jsx)(M.default, {
                    channel: n
                });
                return (0, a.jsx)(N.default, {
                    channel: n
                })
            }

            function D(e) {
                var t;
                let {
                    channel: n,
                    showingBanner: u
                } = e, d = (0, o.default)(n), {
                    type: C
                } = n, E = (0, l.useStateFromStores)([m.default], () => n.isPrivate() ? m.default.getUser(n.getRecipientId()) : null), A = g.default.useUserTag(E), {
                    canManageRoles: M,
                    canReadMessageHistory: N
                } = (0, l.useStateFromStoresObject)([p.default], () => ({
                    canManageRoles: p.default.can(v.Permissions.MANAGE_ROLES, n),
                    canReadMessageHistory: p.default.can(v.Permissions.READ_MESSAGE_HISTORY, n)
                })), L = (0, l.useStateFromStores)([f.default], () => C === v.ChannelTypes.DM ? f.default.getMutualGuilds(n.getRecipientId()) : null, [n, C]), {
                    systemDMRedesignEnabled: R
                } = c.default.useExperiment({
                    location: "bf1a4f_1"
                }, {
                    autoTrackExposure: null !== (t = n.isSystemDM()) && void 0 !== t && t
                });
                if (s.useEffect(() => {
                        C === v.ChannelTypes.DM && null == L && null != E && r.default.wait(() => (0, h.default)(n.getRecipientId(), E.getAvatarURL(null, 80), {
                            withMutualGuilds: !0
                        }))
                    }, [L, C, n, E]), n.isSystemDM()) return R ? (0, a.jsx)(I.default, {
                    channel: n
                }) : (0, a.jsx)(T.default, {
                    channel: n,
                    children: y.default.Messages.SYSTEM_DM_EMPTY_MESSAGE
                });
                if (C === v.ChannelTypes.DM) return (0, a.jsxs)(T.default, {
                    channel: n,
                    user: E,
                    children: [null != E && (0, a.jsx)(i.Heading, {
                        variant: "heading-xl/medium",
                        className: x.marginBottom20,
                        children: A
                    }), y.default.Messages.BEGINNING_DM.format({
                        username: d
                    }), (0, a.jsx)(_.default, {
                        userId: n.getRecipientId(),
                        channel: n,
                        showingBanner: u
                    })]
                });
                if (n.isMultiUserDM()) return n.isManaged() ? (0, a.jsxs)(S.default, {
                    channelId: n.id,
                    children: [(0, a.jsx)(S.EmptyMessageHeader, {
                        children: y.default.Messages.BEGINNING_CHANNEL_WELCOME.format({
                            channelName: d
                        })
                    }), (0, a.jsx)(S.EmptyMessageBody, {
                        children: y.default.Messages.BEGINNING_GROUP_DM_MANAGED
                    })]
                }) : (0, a.jsx)(T.default, {
                    channel: n,
                    children: y.default.Messages.BEGINNING_GROUP_DM.format({
                        name: d
                    })
                });
                return N ? (0, a.jsx)(O, {
                    channel: n,
                    canManageRoles: M
                }) : (0, a.jsx)(S.default, {
                    channelId: n.id,
                    children: (0, a.jsx)(S.EmptyMessageBody, {
                        children: y.default.Messages.BEGINNING_CHANNEL_NO_HISTORY.format({
                            channelName: d
                        })
                    })
                })
            }
        },
        172643: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                i = n("619335"),
                r = n("680986"),
                o = n("430475"),
                u = n("121308"),
                d = n("660074"),
                c = n("172554"),
                f = n("782340"),
                h = n("851341");

            function C(e) {
                var t;
                let {
                    channel: n
                } = e, C = (0, r.useAppliedTags)(n), {
                    firstMessage: E
                } = (0, s.useStateFromStoresObject)([o.default], () => o.default.getMessage(n.id)), p = new Set((0, r.useVisibleAppliedForumTags)(n, C)), m = null !== (t = (0, i.default)(n)) && void 0 !== t ? t : d.default;
                return (0, a.jsxs)(c.default, {
                    channelId: n.id,
                    className: h.container,
                    children: [(0, a.jsx)("div", {
                        className: h.iconWrapper,
                        children: (0, a.jsx)(m, {
                            className: h.icon,
                            strokeWidth: 1.75
                        })
                    }), (0, a.jsx)(c.EmptyMessageHeader, {
                        className: h.header,
                        children: n.name
                    }), null == E && (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: f.default.Messages.REPLY_QUOTE_MESSAGE_DELETED
                    }), (0, a.jsx)(u.default, {
                        appliedTags: p
                    })]
                })
            }
        },
        710357: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                i = n("206230"),
                r = n("843962"),
                o = n("679653"),
                u = n("106435"),
                d = n("172554");

            function c(e) {
                var t;
                let {
                    channel: n,
                    children: c,
                    user: f
                } = e, h = (0, s.useStateFromStores)([i.default], () => i.default.useReducedMotion), C = null !== (t = (0, o.default)(n)) && void 0 !== t ? t : "", {
                    avatarDecorationSrc: E,
                    eventHandlers: p,
                    isAnimating: m
                } = (0, u.default)({
                    user: f,
                    size: l.AvatarSizes.SIZE_80,
                    animateOnHover: !0
                });
                return (0, a.jsxs)(d.default, {
                    channelId: n.id,
                    ...p,
                    children: [(0, a.jsx)(l.Avatar, {
                        "aria-label": C,
                        size: l.AvatarSizes.SIZE_80,
                        src: (0, r.getChannelIconURL)(n, 80, !h && m),
                        avatarDecoration: E
                    }), (0, a.jsx)(d.EmptyMessageHeader, {
                        children: C
                    }), (0, a.jsx)(d.EmptyMessageBody, {
                        children: c
                    })]
                })
            }
        },
        841397: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("450911"),
                i = n("377114"),
                r = n("61505"),
                o = n("949067"),
                u = n("782340");

            function d(e) {
                let {
                    otherUserId: t,
                    channel: n,
                    buttonSize: d = s.ButtonSizes.TINY,
                    className: c,
                    buttonText: f,
                    navigateAwayOnReportSuccess: h = !0,
                    onReportClick: C,
                    onReportSubmit: E,
                    onMouseEnter: p,
                    onMouseLeave: m
                } = e, g = (0, r.useIsRelationshipTypeSpamReportable)(t), _ = (0, o.useLongestChannelMessageBeforeReply)(n.id, t);
                if (!g || null == _) return null;
                let S = () => {
                    null == E || E(), l.default.closePrivateChannel(n.id, h)
                };
                return (0, a.jsx)(s.Button, {
                    className: c,
                    size: d,
                    color: s.Button.Colors.RED,
                    disabled: null == _,
                    onClick: () => {
                        null == C || C(), (0, i.showReportModalForFirstDM)(_, S)
                    },
                    onMouseEnter: p,
                    onMouseLeave: m,
                    children: null != f ? f : u.default.Messages.REPORT_SPAM
                })
            }
        },
        931922: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("917351"),
                o = n.n(r),
                u = n("316693"),
                d = n("509043"),
                c = n("446674"),
                f = n("77078"),
                h = n("18054"),
                C = n("798609"),
                E = n("679653"),
                p = n("462430"),
                m = n("592407"),
                g = n("367376"),
                _ = n("305961"),
                S = n("957255"),
                A = n("697218"),
                T = n("987772"),
                M = n("155207"),
                I = n("917686"),
                N = n("317134"),
                L = n("991170"),
                R = n("158998"),
                v = n("938244"),
                y = n("172554"),
                x = n("730859"),
                O = n("49111"),
                D = n("782340"),
                P = n("935107");

            function b(e) {
                let {
                    channel: t
                } = e, [n, l] = s.useState(!1), r = (0, E.default)(t, !0), b = (0, c.useStateFromStores)([_.default], () => _.default.getGuild(t.guild_id)), j = (0, c.useStateFromStores)([A.default], () => A.default.getUser(null == b ? void 0 : b.ownerId)), F = s.useMemo(() => null != b ? o(b.roles).sortBy(e => -e.position).filter(e => e.id !== b.id).value() : [], [b]), U = s.useMemo(() => o(F).filter(e => {
                    if (null == b) return !1;
                    let n = L.default.computePermissionsForRoles({
                        forceRoles: {
                            [e.id]: e
                        },
                        context: t
                    });
                    return u.default.has(n, O.Permissions.ADMINISTRATOR) || u.default.has(n, O.Permissions.VIEW_CHANNEL)
                }).value(), [t, b, F]), H = (0, c.useStateFromStoresArray)([A.default], () => {
                    let e = {};
                    for (let n of (null != j && (e[j.id] = j), Object.values(t.permissionOverwrites))) {
                        if (n.type !== C.PermissionOverwriteType.MEMBER || null != e[n.id]) continue;
                        let t = A.default.getUser(n.id);
                        null != t && (e[t.id] = t)
                    }
                    return o(e).filter(e => {
                        var n;
                        let a = L.default.can({
                                permission: O.Permissions.ADMINISTRATOR,
                                user: e,
                                context: t
                            }),
                            s = null !== (n = t.permissionOverwrites[e.id]) && void 0 !== n ? n : L.default.NONE,
                            l = u.default.has(s.allow, O.Permissions.VIEW_CHANNEL);
                        return a || l
                    }).value()
                }, [t, j]), k = S.default.can(O.Permissions.MANAGE_CHANNELS, t) || S.default.can(O.Permissions.MANAGE_ROLES, t);

                function G() {
                    h.default.open(t.id)
                }
                let B = s.useCallback(() => l(!1), []);
                return (0, a.jsxs)(y.default, {
                    channelId: t.id,
                    children: [(0, a.jsx)(y.EmptyMessageIcon, {
                        locked: !0,
                        channelType: t.type
                    }), (0, a.jsx)(y.EmptyMessageHeader, {
                        children: D.default.Messages.BEGINNING_CHANNEL_WELCOME.format({
                            channelName: r
                        })
                    }), (0, a.jsx)(y.EmptyMessageBody, {
                        children: D.default.Messages.BEGINNING_ROLE_REQUIRED_CHANNEL_DESCRIPTION.format({
                            channelName: r,
                            topicHook: () => g.default.parseTopic(t.topic, !0, {
                                channelId: t.id
                            })
                        })
                    }), k ? (0, a.jsxs)("div", {
                        className: P.channelSettingButtons,
                        children: [(0, a.jsx)(v.default, {
                            label: D.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE,
                            onClick: () => l(!0),
                            icon: (0, a.jsx)(M.default, {
                                width: 16,
                                height: 16
                            })
                        }), (0, a.jsx)(v.default, {
                            label: D.default.Messages.EDIT_CHANNEL,
                            onClick: G,
                            icon: (0, a.jsx)(T.default, {
                                width: 16,
                                height: 16
                            })
                        })]
                    }) : null, (0, a.jsxs)("div", {
                        className: P.members,
                        children: [function() {
                            if (1 !== H.length || U.length > 0) return (0, a.jsx)(x.default, {
                                guildId: t.guild_id,
                                className: P.avatars,
                                maxUsers: 5,
                                users: H
                            });
                            let e = H[0],
                                n = R.default.getName(e);
                            return (0, a.jsxs)("div", {
                                className: P.avatars,
                                children: [(0, a.jsx)(f.Avatar, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    "aria-label": n,
                                    size: f.AvatarSizes.SIZE_24
                                }), (0, a.jsx)(f.Text, {
                                    tag: "span",
                                    className: P.singleUserName,
                                    variant: "text-md/normal",
                                    children: n
                                }), "\xa0", (0, a.jsx)(f.Text, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: D.default.Messages.ROLE_REQUIRED_SINGLE_USER_MESSAGE
                                })]
                            })
                        }(), U.map((e, n) => {
                            var s, l;
                            let r = null !== (l = e.colorString) && void 0 !== l ? l : (0, d.int2hex)(O.DEFAULT_ROLE_COLOR),
                                o = (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) !== void 0;
                            return k ? (0, a.jsx)(I.default, {
                                className: i(P.role, {
                                    [P.last]: n === U.length - 1
                                }),
                                roleName: e.name,
                                roleColor: r,
                                disabled: !k,
                                verified: o,
                                onClick: () => {
                                    m.default.open(t.guild_id, O.GuildSettingsSections.MEMBERS), m.default.selectRole(e.id)
                                }
                            }, e.id) : (0, a.jsx)(N.default, {
                                className: i(P.role, {
                                    [P.last]: n === U.length - 1
                                }),
                                roleName: e.name,
                                roleColor: r,
                                verified: o
                            }, e.id)
                        })]
                    }), n ? (0, a.jsx)(f.Modal, {
                        renderModal: e => (0, a.jsx)(p.default, {
                            ...e,
                            onClose: () => (B(), e.onClose()),
                            channelId: t.id
                        }),
                        onCloseRequest: () => l(!1)
                    }) : null]
                })
            }
        },
        730859: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("917351"),
                o = n.n(r),
                u = n("77078"),
                d = n("272030"),
                c = n("427302"),
                f = n("158998"),
                h = n("378451");

            function C(e) {
                let {
                    className: t,
                    maxUsers: l,
                    users: r,
                    guildId: C
                } = e, [E, p] = s.useState(!1);

                function m() {
                    return (0, a.jsx)(u.Dialog, {
                        className: h.popoutWrapper,
                        children: (0, a.jsx)(u.Scroller, {
                            className: h.scroller,
                            children: r.map(e => (0, a.jsx)(c.default, {
                                guildId: C,
                                user: e,
                                nick: f.default.getName(e),
                                onContextMenu: t => (0, d.openContextMenuLazy)(t, async () => {
                                    let {
                                        default: t
                                    } = await n.el("406784").then(n.bind(n, "406784"));
                                    return n => (0, a.jsx)(t, {
                                        ...n,
                                        user: e
                                    })
                                }, {
                                    onClose: () => p(!1)
                                })
                            }, e.id))
                        })
                    })
                }
                return r.length <= 0 ? null : (0, a.jsx)("div", {
                    className: i(t, h.avatars),
                    children: function() {
                        let e = o(r).take(l).map(e => {
                                let t = f.default.getName(e);
                                return (0, a.jsx)(u.TooltipContainer, {
                                    text: t,
                                    className: h.avatar,
                                    children: (0, a.jsx)(u.Avatar, {
                                        src: e.getAvatarURL(C, 24),
                                        "aria-label": t,
                                        size: u.AvatarSizes.SIZE_24
                                    })
                                }, e.id)
                            }).value(),
                            t = r.length - l;
                        return t > 0 && (e[e.length - 1] = (0, a.jsx)(u.Popout, {
                            renderPopout: m,
                            shouldShow: E,
                            position: "bottom",
                            onRequestClose: () => p(!1),
                            children: () => (0, a.jsxs)(u.Button, {
                                className: i(h.avatar, h.overflow),
                                onClick: () => p(!0),
                                look: u.Button.Looks.BLANK,
                                size: u.Button.Sizes.NONE,
                                children: ["+", t + 1]
                            })
                        }, "overflow")), e
                    }()
                })
            }
        },
        582724: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("843962"),
                i = n("679653"),
                r = n("154864"),
                o = n("931138"),
                u = n("486952"),
                d = n("172554"),
                c = n("782340"),
                f = n("829531"),
                h = n("561537");
            let C = () => (0, a.jsx)("svg", {
                width: "46",
                height: "34",
                viewBox: "0 0 46 34",
                className: f.chatBubbleLip,
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, a.jsx)("path", {
                    d: "M0 33.4637C16.1697 28.954 21.1764 9.59155 19.2146 0L45.681 0.000148089C45.681 0.000148089 44.681 9.14498 40.1914 18.3023C34.4077 30.0996 6.2893 33.1232 0 33.4637Z"
                })
            });

            function E(e) {
                var t;
                let {
                    channel: n
                } = e, E = null !== (t = (0, i.default)(n)) && void 0 !== t ? t : "";
                return (0, a.jsxs)("div", {
                    id: (0, r.getMessageDOMId)(n.id, n.id),
                    className: f.headerContainer,
                    children: [(0, a.jsx)("img", {
                        src: h,
                        className: f.wumpusImage,
                        alt: ""
                    }), (0, a.jsxs)("div", {
                        className: f.chatBubbleContainer,
                        children: [(0, a.jsx)(C, {}), (0, a.jsxs)("div", {
                            className: f.chatBubble,
                            children: [(0, a.jsx)(s.Avatar, {
                                "aria-label": E,
                                size: s.AvatarSizes.SIZE_80,
                                src: (0, l.getChannelIconURL)(n, 80, !1)
                            }), (0, a.jsxs)(d.EmptyMessageHeader, {
                                className: f.emptyMessageHeader,
                                children: [E, (0, a.jsx)(o.default, {
                                    className: f.flowerStar,
                                    size: 24,
                                    children: (0, a.jsx)(u.default, {
                                        className: f.verified,
                                        width: 24,
                                        height: 24
                                    })
                                })]
                            }), (0, a.jsx)(d.EmptyMessageBody, {
                                children: c.default.Messages.SYSTEM_DM_EMPTY_MESSAGE
                            })]
                        })]
                    })]
                })
            }
        },
        834744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("18054"),
                i = n("679653"),
                r = n("367376"),
                o = n("233069"),
                u = n("957255"),
                d = n("987772"),
                c = n("938244"),
                f = n("172554"),
                h = n("49111"),
                C = n("782340"),
                E = n("212697");

            function p(e) {
                let {
                    channel: t
                } = e, n = (0, i.default)(t, !0), p = (0, s.useStateFromStores)([u.default], () => u.default.can(h.Permissions.MANAGE_CHANNELS, t) && o.EDITABLE_CHANNEL_TYPES.has(t.type));
                return (0, a.jsxs)(f.default, {
                    channelId: t.id,
                    children: [(0, a.jsx)(f.EmptyMessageIcon, {
                        channelType: t.type
                    }), (0, a.jsx)(f.EmptyMessageHeader, {
                        children: C.default.Messages.BEGINNING_CHANNEL_WELCOME.format({
                            channelName: n
                        })
                    }), (0, a.jsx)(f.EmptyMessageBody, {
                        children: C.default.Messages.BEGINNING_CHANNEL_DESCRIPTION.format({
                            channelName: n,
                            topicHook: () => r.default.parseTopic(t.topic, !0, {
                                channelId: t.id
                            })
                        })
                    }), p ? (0, a.jsx)("div", {
                        className: E.buttonContainer,
                        children: (0, a.jsx)(c.default, {
                            label: C.default.Messages.EDIT_CHANNEL,
                            onClick: () => {
                                l.default.open(t.id)
                            },
                            icon: (0, a.jsx)(d.default, {
                                width: 16,
                                height: 16
                            })
                        })
                    }) : null]
                })
            }
        },
        372912: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("446674"),
                r = n("77078"),
                o = n("272030"),
                u = n("619335"),
                d = n("506885"),
                c = n("981601"),
                f = n("26989"),
                h = n("697218"),
                C = n("959097"),
                E = n("158998"),
                p = n("172554"),
                m = n("49111"),
                g = n("782340"),
                _ = n("881812");

            function S(e) {
                var t, s;
                let {
                    userId: u,
                    channel: C
                } = e, p = (0, i.useStateFromStores)([h.default], () => h.default.getUser(u)), m = (0, i.useStateFromStores)([f.default], () => null != u ? f.default.getMember(C.guild_id, u) : null);

                function g(e) {
                    if (null == p) return null;
                    (0, o.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("721429").then(n.bind(n, "721429"));
                        return t => (0, a.jsx)(e, {
                            ...t,
                            user: p,
                            guildId: C.guild_id,
                            channel: C
                        })
                    })
                }
                let S = null !== (s = null !== (t = null == m ? void 0 : m.nick) && void 0 !== t ? t : E.default.getName(p)) && void 0 !== s ? s : "???",
                    A = null == m ? void 0 : m.colorString;
                return null == p ? (0, a.jsx)("span", {
                    className: l(_.threadCreatorName, _.unknownCreatorName),
                    children: S
                }) : (0, a.jsx)(r.Popout, {
                    preload: () => (0, d.default)(p.id, p.getAvatarURL(C.guild_id, 80), {
                        guildId: C.guild_id,
                        channelId: C.id
                    }),
                    renderPopout: e => (0, a.jsx)(c.default, {
                        userId: p.id,
                        guildId: C.guild_id,
                        channelId: C.id,
                        ...e
                    }),
                    position: "right",
                    children: e => (0, a.jsx)(r.Clickable, {
                        ...e,
                        tag: "span",
                        className: _.threadCreatorName,
                        onContextMenu: g,
                        children: (0, a.jsx)(r.NameWithRole, {
                            name: S,
                            color: null != A ? A : void 0
                        })
                    })
                })
            }

            function A(e) {
                let {
                    channel: t
                } = e, {
                    threadMetadata: n
                } = t;
                return null == n ? (0, a.jsx)("div", {
                    style: {
                        marginTop: -8
                    }
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: (0, a.jsx)("div", {
                            className: _.subtitle,
                            children: g.default.Messages.THREAD_STARTED_BY.format({
                                usernameHook: (e, n) => (0, a.jsx)(S, {
                                    userId: t.ownerId,
                                    channel: t
                                }, n)
                            })
                        })
                    }), t.type === m.ChannelTypes.PRIVATE_THREAD ? (0, a.jsx)(r.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: g.default.Messages.EMPTY_MESSAGE_PRIVATE_THREAD_INSTRUCTIONS
                    }) : null]
                })
            }

            function T(e) {
                var t;
                let {
                    channel: n
                } = e, s = null !== (t = (0, u.default)(n)) && void 0 !== t ? t : C.default;
                return (0, a.jsxs)(p.default, {
                    channelId: n.id,
                    children: [(0, a.jsx)("div", {
                        className: _.iconWrapper,
                        children: (0, a.jsx)(s, {
                            className: _.icon
                        })
                    }), (0, a.jsx)(p.EmptyMessageHeader, {
                        children: n.name
                    }), (0, a.jsx)(A, {
                        channel: n
                    })]
                })
            }
        },
        952999: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                WelcomeMessageCTA: function() {
                    return D
                },
                default: function() {
                    return P
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("775560"),
                o = n("458960"),
                u = n("446674"),
                d = n("151426"),
                c = n("77078"),
                f = n("634634"),
                h = n("716241"),
                C = n("299285"),
                E = n("983444"),
                p = n("592407"),
                m = n("970700"),
                g = n("271938"),
                _ = n("305961"),
                S = n("697218"),
                A = n("461380"),
                T = n("36694"),
                M = n("659500"),
                I = n("701909"),
                N = n("773336"),
                L = n("299039"),
                R = n("172554"),
                v = n("49111"),
                y = n("188631"),
                x = n("782340"),
                O = n("508328");

            function D(e) {
                let {
                    className: t,
                    iconUrl: n,
                    icon: l,
                    header: r,
                    completed: o,
                    onClick: u
                } = e, [d, h] = s.useState(!1), C = (0, f.default)(o);
                return s.useEffect(() => {
                    null != C && o !== C && (h(!0), setTimeout(() => h(!1), 1e3))
                }, [o, C]), (0, a.jsxs)(c.Clickable, {
                    className: i(t, O.card, {
                        [O.completed]: o
                    }),
                    onClick: u,
                    children: [null != l ? l : (0, a.jsx)("div", {
                        className: O.icon,
                        style: {
                            backgroundImage: "url('".concat(n, "')")
                        }
                    }), (0, a.jsx)(c.Text, {
                        color: "header-primary",
                        className: i(O.cardTextContainer, O.cardHeader),
                        variant: "text-sm/normal",
                        children: r
                    }), o ? (0, a.jsx)(T.default, {
                        className: i(O.checkmark, {
                            [O.animate]: d
                        })
                    }) : (0, a.jsx)(A.default, {
                        className: O.arrow,
                        direction: A.default.Directions.RIGHT
                    })]
                })
            }

            function P(e) {
                let {
                    channel: t
                } = e, l = (0, u.useStateFromStores)([_.default], () => null != t ? _.default.getGuild(t.getGuildId()) : null, [t]), f = null != l && L.default.extractTimestamp(l.id) < Date.now() - v.WELCOME_OLD_GUILD_AGE_THRESHOLD, A = (0, u.useStateFromStores)([g.default], () => (null == l ? void 0 : l.ownerId) === g.default.getId(), [l]), {
                    canInvite: T,
                    canManageGuild: P,
                    canMessage: b
                } = (0, E.usePermissions)(t, l), j = (0, u.useStateFromStores)([S.default], () => {
                    var e, t;
                    return (null === (e = S.default.getCurrentUser()) || void 0 === e ? void 0 : e.desktop) === !0 || (null === (t = S.default.getCurrentUser()) || void 0 === t ? void 0 : t.mobile) === !0
                }), {
                    guildPopulated: F,
                    guildMessaged: U,
                    guildPersonalized: H
                } = (0, E.useCompletedStates)(l), {
                    handleInvite: k,
                    handleMessage: G,
                    handlePersonalize: B,
                    handleDownload: w,
                    handleAddApplication: V
                } = function(e) {
                    let t = s.useCallback(() => {
                            h.default.trackWithMetadata(v.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
                                setup_type: y.AnalyticsSetupTypes.CHANNEL_WELCOME,
                                action: y.AnalyticsActions.INVITE
                            }), null != e && (0, c.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await n.el("310688").then(n.bind(n, "310688"));
                                return n => (0, a.jsx)(t, {
                                    ...n,
                                    guild: e,
                                    source: v.InstantInviteSources.CHANNEL_WELCOME,
                                    analyticsLocation: {
                                        section: v.AnalyticsSections.CHANNEL_WELCOME_CTA
                                    }
                                })
                            })
                        }, [e]),
                        l = s.useCallback(() => {
                            h.default.trackWithMetadata(v.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
                                setup_type: y.AnalyticsSetupTypes.CHANNEL_WELCOME,
                                action: y.AnalyticsActions.SEND_MESSAGE
                            }), M.ComponentDispatch.dispatch(v.ComponentActions.TEXTAREA_FOCUS, {
                                highlight: !0
                            })
                        }, []),
                        i = s.useCallback(() => {
                            h.default.trackWithMetadata(v.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
                                setup_type: y.AnalyticsSetupTypes.CHANNEL_WELCOME,
                                action: y.AnalyticsActions.PERSONALIZE_SERVER
                            }), null != e && p.default.open(e.id, v.GuildSettingsSections.OVERVIEW, {
                                section: v.AnalyticsSections.CHANNEL_WELCOME_CTA
                            })
                        }, [e]),
                        r = s.useCallback(() => {
                            h.default.trackWithMetadata(v.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
                                setup_type: y.AnalyticsSetupTypes.CHANNEL_WELCOME,
                                action: y.AnalyticsActions.DOWNLOAD
                            }), (0, c.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("649486").then(n.bind(n, "649486"));
                                return t => (0, a.jsx)(e, {
                                    source: v.AnalyticsSections.CHANNEL_WELCOME_CTA,
                                    ...t
                                })
                            })
                        }, []),
                        o = s.useCallback(() => {
                            null != e && (h.default.trackWithMetadata(v.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
                                setup_type: y.AnalyticsSetupTypes.CHANNEL_WELCOME,
                                action: y.AnalyticsActions.ADD_APP
                            }), (0, c.openModalLazy)(async () => {
                                var t;
                                let {
                                    default: s
                                } = await n.el("881892").then(n.bind(n, "881892"));
                                return n => (0, a.jsx)(s, {
                                    guildId: null !== (t = e.id) && void 0 !== t ? t : "",
                                    ...n,
                                    analyticsType: d.DismissibleContent.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL
                                })
                            }))
                        }, [e]);
                    return {
                        handleInvite: t,
                        handleMessage: l,
                        handlePersonalize: i,
                        handleDownload: r,
                        handleAddApplication: o
                    }
                }(l), W = !(j || F || U || H), {
                    titleAnimatedStyle: z,
                    opacities: K
                } = function(e) {
                    let t = (0, r.useLazyValue)(() => new o.default.Value(0)),
                        n = (0, r.useLazyValue)(() => new o.default.Value(0)),
                        a = [];
                    a.push((0, r.useLazyValue)(() => new o.default.Value(0))), a.push((0, r.useLazyValue)(() => new o.default.Value(0))), a.push((0, r.useLazyValue)(() => new o.default.Value(0))), a.push((0, r.useLazyValue)(() => new o.default.Value(0))), s.useEffect(() => {
                        o.default.stagger(300, [o.default.parallel([o.default.timing(n, {
                            toValue: 1,
                            duration: 450
                        }), o.default.timing(t, {
                            toValue: 1,
                            duration: 450
                        })]), o.default.stagger(100, [o.default.timing(a[0], {
                            toValue: 1,
                            duration: 300
                        }), o.default.timing(a[1], {
                            toValue: 1,
                            duration: 300
                        }), o.default.timing(a[2], {
                            toValue: 1,
                            duration: 300
                        }), o.default.timing(a[3], {
                            toValue: 1,
                            duration: 300
                        })])]).start()
                    }, [n, t, a]);
                    let l = e ? {
                        transform: [{
                            translateY: t.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["-20px", "0px"]
                            })
                        }],
                        opacity: n
                    } : {};
                    return {
                        titleAnimatedStyle: l,
                        opacities: a
                    }
                }(W), Y = (0, u.useStateFromStores)([C.default], () => C.default.getGuildApplications(null == l ? void 0 : l.id)), Z = void 0 !== Y && Y.length > 0;
                if (s.useEffect(() => {
                        var e;
                        (0, m.fetchGuildIntegrationsApplications)(null !== (e = null == l ? void 0 : l.id) && void 0 !== e ? e : "")
                    }, [l]), null == l) return null;
                let q = [];
                !f && (T && q.push((0, a.jsx)(o.default.div, {
                    className: O.cardWrapper,
                    style: W ? {
                        opacity: K[q.length]
                    } : {},
                    children: (0, a.jsx)(D, {
                        iconUrl: n("243826"),
                        header: x.default.Messages.WELCOME_CTA_INVITE_TITLE,
                        completed: F,
                        onClick: k
                    })
                }, "invite")), P && q.push((0, a.jsx)(o.default.div, {
                    className: O.cardWrapper,
                    style: W ? {
                        opacity: K[q.length]
                    } : {},
                    children: (0, a.jsx)(D, {
                        iconUrl: n("215036"),
                        header: x.default.Messages.WELCOME_CTA_PERSONALIZE_TITLE,
                        completed: H,
                        onClick: B
                    })
                }, "customize")), b && q.push((0, a.jsx)(o.default.div, {
                    className: O.cardWrapper,
                    style: W ? {
                        opacity: K[q.length]
                    } : {},
                    children: (0, a.jsx)(D, {
                        iconUrl: n("505873"),
                        header: x.default.Messages.WELCOME_CTA_MESSAGE_TITLE,
                        completed: U,
                        onClick: G
                    })
                }, "message")), (0, N.isWeb)() && q.push((0, a.jsx)(o.default.div, {
                    className: O.cardWrapper,
                    style: W ? {
                        opacity: K[q.length]
                    } : {},
                    children: (0, a.jsx)(D, {
                        iconUrl: n("238032"),
                        header: x.default.Messages.WELCOME_CTA_DOWNLOAD_TITLE,
                        completed: j,
                        onClick: w
                    })
                }, "download")), q.push((0, a.jsx)(o.default.div, {
                    className: O.cardWrapper,
                    style: W ? {
                        opacity: K[q.length]
                    } : {},
                    children: (0, a.jsx)(D, {
                        iconUrl: n("356451"),
                        header: x.default.Messages.WELCOME_CTA_APPS_RECOMMENDATION_TITLE,
                        completed: Z,
                        onClick: V
                    })
                }, "addapp")));
                let X = A ? x.default.Messages.WELCOME_CTA_SUBTITLE_OWNER : x.default.Messages.WELCOME_CTA_SUBTITLE_MEMBER;
                f && (X = x.default.Messages.WELCOME_CTA_SUBTITLE_EXISTING_SERVER);
                let Q = "".concat(I.default.getArticleURL(v.HelpdeskArticles.GUILD_GETTING_STARTED), "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm");
                return (0, a.jsx)(R.default, {
                    channelId: t.id,
                    children: (0, a.jsx)("div", {
                        className: O.container,
                        children: (0, a.jsxs)("div", {
                            className: O.inner,
                            children: [(0, a.jsxs)(o.default.div, {
                                style: z,
                                children: [(0, a.jsx)(c.Heading, {
                                    className: O.titleName,
                                    variant: "heading-xxl/semibold",
                                    children: x.default.Messages.WELCOME_CTA_TITLE.format({
                                        guildName: l.name
                                    })
                                }), (0, a.jsxs)(c.Text, {
                                    color: "header-secondary",
                                    className: i({
                                        [O.subtitle]: !0,
                                        [O.noChildren]: 0 === q.length
                                    }),
                                    variant: "text-sm/normal",
                                    children: [X, " ", q.length > 0 ? x.default.Messages.WELCOME_CTA_SUBTITLE_ACTION_WITH_GUIDE.format({
                                        guideURL: Q
                                    }) : null]
                                })]
                            }), q]
                        })
                    })
                })
            }
        },
        200008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addFavoriteChannel: function() {
                    return f
                },
                removeFavoriteChannel: function() {
                    return h
                },
                setFavoriteChannelNickname: function() {
                    return C
                },
                addFavoriteCategory: function() {
                    return E
                },
                removeFavoriteCategory: function() {
                    return p
                },
                updateFavoriteChannels: function() {
                    return m
                },
                toggleFavoriteServerMuted: function() {
                    return g
                }
            });
            var a = n("249654"),
                s = n("151426"),
                l = n("872173"),
                i = n("42203"),
                r = n("957255"),
                o = n("379881"),
                u = n("843455");

            function d() {
                let e = o.default.getFavoriteChannels(),
                    t = 1;
                for (let n in e) t = Math.max(t, e[n].order);
                return t + 1
            }

            function c(e) {
                for (let t in e) {
                    let n = e[t];
                    if (null == n) {
                        delete e[t];
                        continue
                    }
                    if (n.type === s.FavoriteChannelType.CATEGORY) continue;
                    let a = i.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !r.default.can(u.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function f(e, t) {
                let n = o.default.isFavorite(e);
                !n && l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = s.FavoriteChannel.create({
                        nickname: "",
                        type: s.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: d(),
                        parentId: null != t ? t : "0"
                    }), c(n.favoriteChannels)
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function h(e) {
                let t = o.default.getFavorite(e);
                null != t && l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === s.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    c(n.favoriteChannels)
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function C(e, t) {
                let n = o.default.isFavorite(e);
                n && l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e) {
                let t = a.default.fromTimestamp(Date.now());
                l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = s.FavoriteChannel.create({
                        nickname: e,
                        type: s.FavoriteChannelType.CATEGORY,
                        position: d(),
                        parentId: "0"
                    })
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function p(e) {
                h(e)
            }

            function m(e) {
                l.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let a of e)
                        if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
                            var n;
                            t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
                        }
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function g() {
                l.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, l.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        713640: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                shuffleProblems: function() {
                    return l
                }
            });
            var a = n("917351"),
                s = n.n(a);
            let l = (e, t) => {
                let n = s.shuffle(e),
                    a = n.findIndex(e => e.value === t);
                if (a > -1) {
                    let e = n[a];
                    n.splice(a, 1), n.push(e)
                }
                return n
            }
        },
        194141: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RatingsSelector: function() {
                    return A
                },
                default: function() {
                    return M
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("917351"),
                o = n.n(r),
                u = n("77078"),
                d = n("84339"),
                c = n("229850"),
                f = n("145131"),
                h = n("476765"),
                C = n("561744"),
                E = n("701909"),
                p = n("713640"),
                m = n("200521"),
                g = n("782340"),
                _ = n("279537");
            let S = [{
                className: _.emojiSad,
                rating: m.FeedbackRating.BAD,
                classNameSelected: _.selected
            }, {
                className: _.emojiNeutral,
                rating: m.FeedbackRating.NEUTRAL,
                classNameSelected: _.selected
            }, {
                className: _.emojiHappy,
                rating: m.FeedbackRating.GOOD,
                classNameSelected: _.selected
            }];

            function A(e) {
                let {
                    className: t,
                    selectedRating: n,
                    ratingConfigs: s,
                    onChangeRating: l
                } = e;
                return (0, a.jsx)(f.default, {
                    justify: f.default.Justify.BETWEEN,
                    align: f.default.Align.CENTER,
                    className: i(_.ratingsSelector, t),
                    children: (null != s ? s : S).map(e => {
                        let {
                            rating: t,
                            className: s,
                            classNameSelected: r
                        } = e;
                        return (0, a.jsx)(u.Clickable, {
                            onClick: () => l(t),
                            "aria-label": t,
                            children: (0, a.jsx)("div", {
                                className: i(s, n === t ? r : null)
                            })
                        }, t)
                    })
                })
            }

            function T() {
                return (0, a.jsx)(u.Text, {
                    className: _.helpdeskLink,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: g.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
                        helpdeskURL: E.default.getSubmitRequestURL()
                    })
                })
            }

            function M(e) {
                let {
                    header: t,
                    body: n,
                    problemTitle: l,
                    problems: r,
                    transitionState: E,
                    ratingConfigs: S,
                    feedbackProblems: M = [],
                    otherKey: I,
                    ratingsSelectorClassName: N,
                    hideDontShowCheckbox: L,
                    startRating: R = null,
                    onSubmit: v,
                    onClose: y
                } = e, x = (0, d.default)(r), [O, D] = s.useState(!1), [P, b] = s.useState(R), [j, F] = s.useState(null), [U, H] = s.useState(o.shuffle(r)), [k, G] = s.useState(""), B = (0, h.useUID)(), w = (0, C.default)(P), V = (0, C.default)(O), W = (0, C.default)(j), z = (0, C.default)(v), K = (0, C.default)(k), Y = null != j && M.includes(j);
                return s.useEffect(() => {
                    !o.isEqual(x, r) && H((0, p.shuffleProblems)(r, I))
                }, [r, x, I]), s.useEffect(() => () => {
                    z.current({
                        rating: w.current,
                        problem: W.current,
                        dontShowAgain: V.current,
                        feedback: K.current
                    })
                }, []), (0, a.jsxs)(u.ModalRoot, {
                    transitionState: E,
                    className: _.modalRoot,
                    "aria-labelledby": B,
                    children: [(0, a.jsxs)(u.ModalHeader, {
                        separator: !1,
                        className: _.headerContainer,
                        children: [(0, a.jsx)(u.Heading, {
                            id: B,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: t
                        }), (0, a.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: _.ratingBody,
                            children: n
                        }), Y ? null : (0, a.jsx)(A, {
                            className: i(_.emojis, N),
                            selectedRating: P,
                            onChangeRating: function(e) {
                                b(e), e === m.FeedbackRating.GOOD && y()
                            },
                            ratingConfigs: S
                        })]
                    }), (0, a.jsxs)(u.ModalContent, {
                        className: _.content,
                        children: [null == P || P === m.FeedbackRating.GOOD || Y ? null : (0, a.jsx)(u.FormItem, {
                            title: l,
                            className: _.problemInfo,
                            children: (0, a.jsx)(c.default, {
                                options: U,
                                onClick: function(e) {
                                    let {
                                        value: t
                                    } = e;
                                    F(t), !M.includes(t) && y()
                                },
                                hideCaret: e => {
                                    let {
                                        value: t
                                    } = e;
                                    return !M.includes(t)
                                }
                            })
                        }), Y ? (0, a.jsxs)(u.FormItem, {
                            title: g.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                            className: _.problemInfo,
                            children: [(0, a.jsx)(u.TextArea, {
                                value: k,
                                maxLength: m.FEEDBACK_FREEFORM_LENGTH,
                                onChange: G
                            }), (0, a.jsx)(T, {})]
                        }) : null]
                    }), (Y || !L) && (0, a.jsx)(u.ModalFooter, {
                        className: _.footer,
                        direction: f.default.Direction.HORIZONTAL,
                        children: Y ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(u.Button, {
                                size: u.Button.Sizes.SMALL,
                                look: u.Button.Looks.LINK,
                                color: u.Button.Colors.PRIMARY,
                                onClick: () => {
                                    F(null), G("")
                                },
                                children: g.default.Messages.BACK
                            }), (0, a.jsx)(u.Button, {
                                size: u.Button.Sizes.SMALL,
                                onClick: y,
                                children: g.default.Messages.SUBMIT
                            })]
                        }) : (0, a.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            size: 18,
                            value: O,
                            onChange: () => D(!O),
                            children: (0, a.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                children: g.default.Messages.DONT_SHOW_AGAIN
                            })
                        })
                    })]
                })
            }
        },
        121308: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("90625"),
                l = n("389498");

            function i(e) {
                let {
                    appliedTags: t,
                    setAppliedTags: n
                } = e, i = null != n ? e => {
                    t.has(e) && (t.delete(e), n(new Set(t)))
                } : void 0;
                return (0, a.jsx)("div", {
                    className: l.tags,
                    children: Array.from(t).map(e => (0, a.jsx)(s.default, {
                        tag: e,
                        onRemove: i,
                        size: null == i ? s.default.Sizes.SMALL : s.default.Sizes.MEDIUM
                    }, e.id))
                })
            }
        },
        554393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("281071"),
                o = n("446674"),
                u = n("77078"),
                d = n("225664"),
                c = n("731898"),
                f = n("612039"),
                h = n("275318"),
                C = n("762147"),
                E = n("692171"),
                p = n("875978"),
                m = n("359132"),
                g = n("836943"),
                _ = n("92981"),
                S = n("592707"),
                A = n("350134"),
                T = n("755624"),
                M = n("263024"),
                I = n("42203"),
                N = n("660279"),
                L = n("36694"),
                R = n("83900"),
                v = n("404008"),
                y = n("680986"),
                x = n("612278"),
                O = n("867965"),
                D = n("688169"),
                P = n("49111"),
                b = n("782340"),
                j = n("827152"),
                F = n("550244");

            function U(e) {
                let {
                    postId: t,
                    isFirstMessage: n,
                    isLastItem: l = !1,
                    parentChannelId: U
                } = e, {
                    ref: H,
                    width: k
                } = (0, c.default)(), [G, B] = s.useState(3), [w, V] = s.useState(!n), [W, z] = (0, f.default)(!1, 2e3), K = (0, o.useStateFromStores)([I.default], () => I.default.getChannel(t), [t]), {
                    firstMessage: Y
                } = (0, x.useFirstForumPostMessage)(K), Z = (0, o.useStateFromStores)([T.default], () => T.default.hasJoined(t)), {
                    disableReactionUpdates: q,
                    disableReactionCreates: X,
                    isLurking: Q,
                    isGuest: J,
                    isPendingMember: $
                } = (0, m.default)(K), ee = (0, D.useForumActivityExperiment)(null == K ? void 0 : K.guild_id), et = (0, o.useStateFromStores)([I.default], () => I.default.getChannel(U)), en = (0, y.useDefaultReactionEmoji)(et), ea = (0, o.useStateFromStores)([h.default], () => h.default.shouldDisplayPrompt(t) && !0 === n, [t, n]), es = s.useCallback(e => {
                    let t = e[0];
                    if (null != t && n) {
                        let e = t.intersectionRect,
                            n = t.boundingClientRect,
                            a = (e.bottom - e.top) / (n.bottom - n.top);
                        V(a < 1)
                    }
                }, [n]);
                s.useLayoutEffect(() => {
                    let e = H.current;
                    if (null == e || !n) return;
                    let t = new IntersectionObserver(es, {
                        threshold: 1
                    });
                    return t.observe(e), () => {
                        t.disconnect()
                    }
                });
                let [el, ei] = s.useState(!0);
                s.useEffect(() => {
                    if (null == k) return;
                    let e = Math.floor((k - 280) / 58);
                    B(e), ei(!1)
                }, [k]);
                let {
                    enabled: er,
                    hasTwoButtonEntryPoint: eo
                } = (0, d.useBurstReactionsExperiment)(null == K ? void 0 : K.guild_id), eu = (0, o.useStateFromStores)([E.default], () => E.default.remainingBurstCurrency);
                if (null == K || null == Y) return null;
                let ed = Y.reactions.length > 0,
                    ec = () => {
                        Z ? M.default.leaveThread(K, "Forum Toolbar") : M.default.joinThread(K, "Forum Toolbar")
                    },
                    ef = () => {
                        (0, O.trackForumPostLinkCopied)({
                            postId: K.id,
                            location: {
                                section: P.AnalyticsSections.CHANNEL_HEADER
                            }
                        }), (0, r.copy)((0, v.getChannelLinkToCopy)(K, et)), z(!0)
                    },
                    eh = Z ? L.default : N.default;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: i(j.container, {
                            [j.header]: w
                        }),
                        ref: H,
                        children: [(0, a.jsxs)("div", {
                            className: i(j.reactButtons, {
                                [j.loading]: el
                            }),
                            children: [!ed && !X && null != en && (0, a.jsx)("div", {
                                className: F.reactions,
                                children: (0, a.jsx)(A.Reaction, {
                                    message: Y,
                                    readOnly: !1,
                                    useChatFontScaling: !1,
                                    isLurking: Q,
                                    isGuest: J,
                                    isPendingMember: $,
                                    emoji: en,
                                    type: p.ReactionTypes.NORMAL,
                                    hideCount: !0,
                                    count: 0,
                                    me: !1,
                                    burst_count: 0,
                                    me_burst: !1
                                })
                            }), (0, a.jsx)(S.default, {
                                message: Y,
                                channel: K,
                                disableReactionCreates: !ee || X,
                                disableReactionUpdates: q,
                                isLurking: Q,
                                isGuest: J,
                                isPendingMember: $,
                                maxReactions: G,
                                className: j.reactions,
                                useChatFontScaling: !1,
                                isForumToolbar: !0,
                                forceHideReactionCreates: !0
                            }), !X && (0, a.jsx)(g.ButtonAddReaction, {
                                type: p.ReactionTypes.NORMAL,
                                message: Y,
                                channel: K,
                                useChatFontScaling: !1,
                                className: j.addReactButton,
                                isForumToolbar: !0,
                                children: !ed && b.default.Messages.FORUM_REACT_TO_POST
                            }), !X && er && eo && (0, a.jsx)(g.ButtonAddReaction, {
                                type: p.ReactionTypes.BURST,
                                remainingBurstCurrency: eu,
                                message: Y,
                                channel: K,
                                useChatFontScaling: !1,
                                isForumToolbar: !0,
                                className: j.addReactButton
                            })]
                        }), (0, a.jsxs)("div", {
                            className: j.buttons,
                            children: [(0, a.jsx)(u.Tooltip, {
                                text: b.default.Messages.FORUM_FOLLOW_TOOLTIP,
                                children: e => (0, a.jsxs)(u.Button, {
                                    ...e,
                                    look: u.Button.Looks.BLANK,
                                    size: u.Button.Sizes.SMALL,
                                    onClick: ec,
                                    className: j.button,
                                    innerClassName: i(j.buttonInner, {
                                        [j.active]: Z
                                    }),
                                    children: [(0, a.jsx)(eh, {
                                        width: 16,
                                        height: 16
                                    }), Z ? b.default.Messages.FORUM_FOLLOWING_POST : b.default.Messages.FOLLOW]
                                })
                            }), (0, a.jsx)(u.Tooltip, {
                                text: b.default.Messages.COPY_LINK,
                                children: e => (0, a.jsxs)(u.Button, {
                                    ...e,
                                    look: u.Button.Looks.BLANK,
                                    size: u.Button.Sizes.SMALL,
                                    onClick: ef,
                                    className: j.button,
                                    innerClassName: j.buttonInner,
                                    children: [W ? (0, a.jsx)(L.default, {
                                        width: 16,
                                        height: 16
                                    }) : (0, a.jsx)(R.default, {
                                        width: 16,
                                        height: 16
                                    }), W ? b.default.Messages.COPIED : null]
                                })
                            })]
                        })]
                    }), ea && (0, a.jsx)(C.default, {
                        threadId: t
                    }), (0, a.jsx)(_.default, {
                        channel: K,
                        isLastItem: l
                    })]
                })
            }
        },
        956967: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCurrentUserHasAutomodQuarantinedProfile: function() {
                    return g
                },
                useGuildAutomodProfileQuarantineErrors: function() {
                    return _
                },
                useOpenFixQuarantinedProfileModal: function() {
                    return S
                }
            });
            var a = n("884691"),
                s = n("65597"),
                l = n("79112"),
                i = n("685665"),
                r = n("929423"),
                o = n("271938"),
                u = n("26989"),
                d = n("305961"),
                c = n("957255"),
                f = n("162771"),
                h = n("681937"),
                C = n("49111"),
                E = n("657944"),
                p = n("397336"),
                m = n("782340");

            function g(e) {
                return (0, s.default)([o.default, u.default], () => {
                    if (null == e) return !1;
                    let t = o.default.getId();
                    return (0, h.hasAutomodQuarantinedProfile)(u.default.getMember(e, t))
                }, [e])
            }

            function _(e) {
                return (0, s.useStateFromStoresObject)([o.default, u.default, f.default, d.default], () => {
                    var t;
                    let n = {
                            nick: void 0,
                            bio: void 0
                        },
                        a = f.default.getGuildId(),
                        s = null != e ? e : a,
                        l = d.default.getGuild(s);
                    if (null == l || null == s) return n;
                    let i = o.default.getId(),
                        r = u.default.getMember(s, i),
                        c = (0, h.getAutomodQuarantinedProfileFlags)(null == r ? void 0 : r.flags);
                    return 0 === c.size ? n : (c.has(E.GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) && (null == e ? n.nick = [m.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME_IN_GUILD.format({
                        guildName: null !== (t = l.name) && void 0 !== t ? t : ""
                    })] : n.nick = [m.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME]), c.has(E.GuildMemberFlags.AUTOMOD_QUARANTINED_BIO) && (n.bio = [m.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_BIO]), n)
                }, [e])
            }

            function S(e) {
                let {
                    guildId: t,
                    scrollPosition: n,
                    analyticsLocation: o,
                    analyticsLocations: u,
                    openWithoutBackstack: f
                } = e, {
                    analyticsLocations: h
                } = (0, i.default)(), E = (0, s.default)([d.default], () => d.default.getGuild(t), [t]), m = (0, s.default)([c.default], () => null != E && c.default.can(C.Permissions.CHANGE_NICKNAME, E), [E]), g = a.useCallback(() => {
                    if (null == E) return;
                    let e = C.UserSettingsSections.PROFILE_CUSTOMIZATION,
                        t = p.ProfileCustomizationSubsection.GUILD;
                    m ? (0, r.initGuildIdentitySettings)(E, null != u ? u : h) : t = p.ProfileCustomizationSubsection.USER_PROFILE, l.default.open(e, t, {
                        scrollPosition: n,
                        analyticsLocation: o,
                        analyticsLocations: u,
                        openWithoutBackstack: f
                    })
                }, [m, n, o, u, f, E, h]);
                return [g, m]
            }
        },
        260526: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                removeAutomodMessageNotice: function() {
                    return s
                }
            });
            var a = n("913144");

            function s(e) {
                a.default.dispatch({
                    type: "REMOVE_AUTOMOD_MESSAGE_NOTICE",
                    messageId: e
                })
            }
        },
        952104: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AutomodUserProfileQuarantineChatInputNotice: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("812204"),
                i = n("685665"),
                r = n("594864"),
                o = n("533930"),
                u = n("956967"),
                d = n("782340"),
                c = n("382814");

            function f(e) {
                var t, n;
                let {
                    guild: f
                } = e, {
                    analyticsLocations: h
                } = (0, i.default)(l.default.AUTOMOD_PROFILE_QUARANTINE_ALERT), [C, E] = (0, u.useOpenFixQuarantinedProfileModal)({
                    guildId: null !== (t = null == f ? void 0 : f.id) && void 0 !== t ? t : "",
                    analyticsLocations: h,
                    openWithoutBackstack: !0
                }), p = E ? d.default.Messages.GUILD_AUTOMOD_PROFILE_INVALID_DESCRIPTION : d.default.Messages.GUILD_AUTOMOD_PROFILE_INVALID_NO_PERMS_DESCRIPTION, m = E ? d.default.Messages.GUILD_AUTOMOD_UPDATE_PROFILE_CTA : d.default.Messages.GUILD_AUTOMOD_UPDATE_ACCOUNT_USERNAME_CTA;
                return (0, a.jsx)("div", {
                    children: (0, a.jsx)(r.MessageNoticeBanner, {
                        bannerIcon: (0, a.jsx)(o.default, {
                            className: c.bannerIcon,
                            width: 32,
                            height: 32
                        }),
                        bannerHeader: d.default.Messages.GUILD_AUTOMOD_PROFILE_INVALID_MODAL_TITLE_MOBILE.format({
                            guildName: null !== (n = null == f ? void 0 : f.name) && void 0 !== n ? n : ""
                        }),
                        bannerSubtext: p,
                        containerStyles: c.bannerContainer,
                        headerStyles: c.bannerHeader,
                        children: (0, a.jsx)(s.Button, {
                            onClick: () => {
                                C()
                            },
                            size: s.Button.Sizes.SMALL,
                            children: m
                        })
                    })
                })
            }
        },
        637695: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCommunicationDisabledCountdownCleanup: function() {
                    return i
                }
            });
            var a = n("884691"),
                s = n("174727"),
                l = n("658536");

            function i(e) {
                let {
                    communicationDisabledUntil: t,
                    userId: n,
                    guildId: i
                } = null != e ? e : {}, r = (0, s.default)(null != t ? Date.parse(t) : Date.now()), o = r.seconds, u = (0, a.useRef)(null);
                return (0, a.useEffect)(() => {
                    if (null == e || null == i || null == n) {
                        clearTimeout(u.current);
                        return
                    }
                    return o <= 0 && null == u.current && (u.current = setTimeout(() => {
                        l.default.clearGuildMemberTimeout(i, n)
                    }, 1e3)), () => {
                        null != u.current && (clearTimeout(u.current), u.current = null)
                    }
                }, [i, n, o, t, e]), r
            }
        },
        68895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CommunicationDisabledBanner: function() {
                    return m
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                i = n("594864"),
                r = n("271938"),
                o = n("26989"),
                u = n("91551"),
                d = n("491401"),
                c = n("637695"),
                f = n("564568"),
                h = n("919398"),
                C = n("903639"),
                E = n("782340"),
                p = n("222415");

            function m(e) {
                let {
                    guild: t,
                    disabledUntil: n
                } = e, [m, g] = (0, f.useCommunicationDisabledNoticeStore)(t.id), _ = (0, s.useStateFromStores)([o.default, r.default], () => o.default.getMember(t.id, r.default.getId()), [t.id]);
                return (0, c.useCommunicationDisabledCountdownCleanup)(_), (0, a.jsxs)("div", {
                    children: [m ? (0, a.jsx)(h.default, {
                        onClose: () => g(t.id),
                        guildName: t.name
                    }) : null, (0, a.jsx)(i.MessageNoticeBanner, {
                        bannerIcon: (0, a.jsx)(d.default, {
                            className: p.bannerIcon
                        }),
                        bannerHeader: E.default.Messages.GUILD_COMMUNICATION_DISABLED_NOTICE_HEADER,
                        bannerSubtext: E.default.Messages.GUILD_COMMUNICATION_DISABLED_CHAT_NOTICE_DESCRIPTION.format({
                            link: C.GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK
                        }),
                        containerStyles: p.bannerContainer,
                        headerStyles: p.bannerHeader,
                        children: (0, a.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            children: (0, a.jsx)(u.default, {
                                deadline: new Date(n),
                                showUnits: !0,
                                stopAtOneSec: !0
                            })
                        })
                    })]
                })
            }
        },
        919398: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("491401"),
                i = n("782340"),
                r = n("241379");

            function o(e) {
                let {
                    onClose: t,
                    guildName: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: r.container,
                    children: [(0, a.jsx)("div", {
                        className: r.iconContainer,
                        children: (0, a.jsx)(l.default, {
                            className: r.icon,
                            width: 20,
                            height: 20
                        })
                    }), (0, a.jsxs)("div", {
                        className: r.header,
                        children: [(0, a.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            className: r.headerText,
                            children: i.default.Messages.GUILD_COMMUNICATION_DISABLED_POPOUT_HEADER
                        }), (0, a.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: i.default.Messages.GUILD_COMMUNICATION_DISABLED_POPOUT_SUBHEADER.format({
                                guildName: n
                            })
                        }), (0, a.jsx)(s.Button, {
                            onClick: t,
                            className: r.button,
                            children: i.default.Messages.OKAY
                        })]
                    })]
                })
            }
        },
        549103: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("872717"),
                s = n("913144"),
                l = n("567054"),
                i = n("982527"),
                r = n("49111");
            let o = async e => {
                let {
                    guildId: t,
                    status: n = l.GuildJoinRequestApplicationStatuses.SUBMITTED,
                    before: o,
                    after: u,
                    limit: d = l.MAX_RESULTS_PER_PAGE
                } = e;
                s.default.dispatch({
                    type: "GUILD_JOIN_REQUESTS_FETCH_START"
                });
                try {
                    var c;
                    let e = await a.default.get({
                            url: r.Endpoints.GUILD_JOIN_REQUESTS(t),
                            query: {
                                status: n,
                                limit: d,
                                before: o,
                                after: u
                            }
                        }),
                        l = e.body.total,
                        f = null !== (c = e.body.guild_join_requests) && void 0 !== c ? c : [],
                        h = f.map(i.joinRequestFromServer);
                    return s.default.dispatch({
                        type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS",
                        status: n,
                        requests: h,
                        total: l,
                        limit: d,
                        guildId: t
                    }), e
                } catch (e) {
                    throw s.default.dispatch({
                        type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE"
                    }), e
                }
            }, u = async e => {
                try {
                    let t = await a.default.delete({
                        url: r.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e)
                    });
                    return s.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: null
                    }), t
                } catch (e) {
                    throw e
                }
            }, d = async (e, t) => {
                try {
                    let n = await a.default.post({
                        url: r.Endpoints.GUILD_JOIN_REQUEST_ACK(e, t)
                    });
                    return n
                } catch (e) {} finally {
                    s.default.dispatch({
                        type: "ACK_APPROVED_GUILD_JOIN_REQUEST",
                        id: t,
                        guildId: e
                    })
                }
            }, c = async function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.GuildJoinRequestApplicationStatuses.APPROVED,
                    i = arguments.length > 3 ? arguments[3] : void 0,
                    o = await a.default.patch({
                        url: r.Endpoints.GUILD_JOIN_REQUEST(e, t),
                        body: {
                            action: n,
                            rejection_reason: i
                        }
                    });
                s.default.dispatch({
                    type: "GUILD_JOIN_REQUEST_UPDATE",
                    guildId: e,
                    status: o.body.application_status,
                    request: o.body
                })
            }, f = async (e, t) => {
                let n = await a.default.patch({
                    url: r.Endpoints.GUILD_JOIN_REQUESTS(e),
                    body: {
                        action: t
                    }
                });
                return s.default.dispatch({
                    type: "GUILD_JOIN_REQUESTS_BULK_ACTION",
                    guildId: e,
                    action: t
                }), n.body
            }, h = async e => {
                try {
                    let t = await a.default.post({
                            url: r.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e)
                        }),
                        {
                            body: n
                        } = t;
                    return s.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: n
                    }), n
                } catch (e) {
                    throw e
                }
            }, C = async () => {
                let e = await a.default.get({
                    url: r.Endpoints.USER_JOIN_REQUEST_GUILDS
                });
                s.default.dispatch({
                    type: "USER_JOIN_REQUEST_GUILDS_FETCH",
                    guilds: e.body
                })
            };
            var E = {
                fetchGuildJoinRequests: o,
                ackUserGuildJoinRequest: d,
                removeGuildJoinRequest: u,
                updateGuildJoinRequest: c,
                actionAllPendingJoinRequests: f,
                resetGuildJoinRequest: h,
                fetchRequestToJoinGuilds: C,
                setSelectedApplicationStatus: (e, t) => {
                    s.default.dispatch({
                        type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_STATUS",
                        guildId: e,
                        applicationStatus: t
                    })
                },
                setSelectedSortOrder: (e, t) => {
                    s.default.dispatch({
                        type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER",
                        guildId: e,
                        sortOrder: t
                    })
                },
                setSelectedGuildJoinRequest: (e, t) => {
                    s.default.dispatch({
                        type: "GUILD_JOIN_REQUESTS_SET_SELECTED",
                        guildId: e,
                        request: t
                    })
                }
            }
        },
        388166: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("491605"),
                i = n("476765"),
                r = n("782340"),
                o = n("526073");
            let u = () => n.el("672332").then(n.t.bind(n, "672332", 19)).then(e => {
                let {
                    default: t
                } = e;
                return t
            });
            var d = e => {
                let t = (0, i.useUID)();
                return (0, a.jsxs)(s.ModalRoot, {
                    ...e,
                    transitionState: e.transitionState,
                    "aria-labelledby": t,
                    children: [(0, a.jsx)("div", {
                        className: o.animationContainer,
                        children: (0, a.jsx)(l.default, {
                            importData: u,
                            className: o.animationMiddle
                        })
                    }), (0, a.jsx)(s.ModalContent, {
                        children: (0, a.jsxs)("div", {
                            className: o.container,
                            children: [(0, a.jsx)(s.Heading, {
                                variant: "heading-xl/semibold",
                                className: o.header,
                                id: t,
                                children: r.default.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_TITLE.format({
                                    guildName: e.guildName
                                })
                            }), (0, a.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: r.default.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_DESC
                            }), (0, a.jsx)(s.Button, {
                                className: o.button,
                                onClick: () => {
                                    e.onAccept(), e.onClose()
                                },
                                children: r.default.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_CONFIRM
                            })]
                        })
                    })]
                })
            }
        },
        86415: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("446674"),
                s = n("913144"),
                l = n("42203"),
                i = n("724210");
            let r = {},
                o = {};
            class u extends a.default.PersistedStore {
                initialize(e) {
                    var t;
                    r = null !== (t = null == e ? void 0 : e.selectedResourceChannelIdByGuildId) && void 0 !== t ? t : {}
                }
                getState() {
                    return {
                        selectedResourceChannelIdByGuildId: r
                    }
                }
                getSelectedResourceChannelId(e) {
                    return null == e ? null : r[e]
                }
                getHomeNavigationChannelId(e) {
                    var t;
                    return null == e ? null : null !== (t = r[e]) && void 0 !== t ? t : o[e]
                }
            }
            u.displayName = "GuildOnboardingHomeNavigationStore", u.persistKey = "GuildOnboardingHomeNavigationStore";
            var d = new u(s.default, {
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t,
                        guildId: n
                    } = e;
                    if (null == n || t === i.StaticChannelRoute.GUILD_HOME) return;
                    let a = l.default.getChannel(t),
                        s = r[n],
                        u = o[n];
                    !((null == a ? void 0 : a.isThread()) && (null == a ? void 0 : a.parent_id) != null && [u, s].includes(null == a ? void 0 : a.parent_id)) && (t !== s && delete r[n], t !== u && delete o[n])
                },
                SELECT_HOME_RESOURCE_CHANNEL: function(e) {
                    let {
                        channelId: t,
                        guildId: n
                    } = e;
                    null == t ? delete o[n] : r[n] = t, delete o[n]
                },
                SELECT_NEW_MEMBER_ACTION_CHANNEL: function(e) {
                    let {
                        channelId: t,
                        guildId: n
                    } = e;
                    delete r[n], o[n] = t
                }
            })
        },
        726274: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberActionsForChannel: function() {
                    return d
                },
                useNextMemberAction: function() {
                    return c
                },
                useAllActionsCompleted: function() {
                    return f
                }
            });
            var a = n("65597"),
                s = n("26989"),
                l = n("568734"),
                i = n("698882"),
                r = n("675305"),
                o = n("363176"),
                u = n("657944");

            function d(e, t) {
                var n;
                let s = (0, o.default)(e),
                    l = (0, a.default)([i.default], () => i.default.getNewMemberActions(e), [e]),
                    u = (0, a.default)([r.default], () => r.default.getCompletedActions(e));
                if (!s) return {};
                let d = null !== (n = null == l ? void 0 : l.findIndex(e => e.channelId === t.id)) && void 0 !== n ? n : 0,
                    c = d >= 0 && null != l ? l[d] : null,
                    f = null != c && (null == u ? void 0 : u[c.channelId]) === !0;
                return {
                    channelAction: c,
                    completed: f
                }
            }

            function c(e, t) {
                let n = (0, a.default)([i.default], () => i.default.getNewMemberActions(e)),
                    s = (0, a.default)([r.default], () => r.default.getCompletedActions(e)),
                    l = null == n ? void 0 : n.find(e => (null == s ? void 0 : s[e.channelId]) !== !0 && e.channelId !== t);
                return l
            }

            function f(e) {
                var t;
                let n = (0, a.default)([s.default], () => s.default.getSelfMember(e));
                return (0, l.hasFlag)(null !== (t = null == n ? void 0 : n.flags) && void 0 !== t ? t : 0, u.GuildMemberFlags.COMPLETED_HOME_ACTIONS)
            }
        },
        934288: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("65597"),
                s = n("42203"),
                l = n("568734"),
                i = n("86415"),
                r = n("290886"),
                o = n("724210");

            function u(e) {
                var t;
                let n = (0, a.default)([s.default], () => s.default.getChannel(e)),
                    u = null != n && (0, l.hasFlag)(n.flags, o.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL),
                    d = (0, a.default)([i.default], () => i.default.getSelectedResourceChannelId(null == n ? void 0 : n.guild_id)),
                    c = (0, r.useCanSeeOnboardingHome)(null !== (t = null == n ? void 0 : n.guild_id) && void 0 !== t ? t : "");
                return null != n && c && u && d === n.id
            }
        },
        87635: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("458960"),
                o = n("65597"),
                u = n("77078"),
                d = n("206230"),
                c = n("679653"),
                f = n("419830"),
                h = n("42203"),
                C = n("26989"),
                E = n("538137"),
                p = n("593195"),
                m = n("578706"),
                g = n("347895"),
                _ = n("129092"),
                S = n("726274"),
                A = n("290886"),
                T = n("205454"),
                M = n("782340"),
                I = n("719832");

            function N(e) {
                let {
                    action: t
                } = e, n = (0, o.default)([h.default], () => h.default.getChannel(t.channelId)), s = (0, c.default)(n, !0);
                return null == n ? (0, a.jsx)(u.Text, {
                    variant: "text-xxs/normal",
                    color: "header-secondary",
                    children: M.default.Messages.IN_CHANNEL.format({
                        channelName: M.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER
                    })
                }) : (0, a.jsx)(u.Text, {
                    variant: "text-xxs/normal",
                    color: "header-secondary",
                    children: M.default.Messages.IN_CHANNEL.format({
                        channelName: s
                    })
                })
            }

            function L(e) {
                var t;
                let {
                    channelId: n,
                    emojiId: s,
                    emojiName: l
                } = e, i = (0, o.default)([h.default], () => h.default.getChannel(n));
                if (null == i) return null;
                let r = null !== (t = (0, f.getChannelIconComponent)(i)) && void 0 !== t ? t : p.default;
                return (0, a.jsx)(T.default, {
                    emojiId: s,
                    emojiName: l,
                    size: T.CTAEmojiSize.MEDIUM,
                    defaultComponent: (0, a.jsx)(r, {
                        className: I.channelIcon
                    })
                })
            }

            function R(e) {
                var t, n, l, c;
                let {
                    guildId: f,
                    channel: h,
                    className: C
                } = e, {
                    channelAction: p,
                    completed: A
                } = (0, S.useMemberActionsForChannel)(f, h), T = (0, S.useNextMemberAction)(f, null == p ? void 0 : p.channelId), R = (0, o.default)([d.default], () => d.default.useReducedMotion), v = (null == p ? void 0 : p.actionType) === _.NewMemberActionTypes.VIEW, y = (0, u.useToken)(u.tokens.colors.WHITE), [x, O] = s.useState(!1), [D] = s.useState(new r.default.Value(0)), [P] = s.useState(new r.default.Value(0));
                s.useEffect(() => {
                    A ? r.default.timing(D, {
                        toValue: 0,
                        duration: R ? 1 : 350,
                        easing: r.default.Easing.quad,
                        delay: v ? 0 : 500
                    }).start(() => O(!0)) : r.default.timing(D, {
                        toValue: 1,
                        duration: R ? 1 : 350,
                        easing: r.default.Easing.quad,
                        delay: 400
                    }).start()
                }, [A, D, v, R]), s.useEffect(() => {
                    A && x && r.default.timing(P, {
                        toValue: 1,
                        duration: R ? 0 : 350,
                        easing: r.default.Easing.quad,
                        delay: 400
                    }).start()
                }, [A, P, x, R]);
                let b = s.useCallback(() => {
                    null != T && (0, g.selectNewMemberActionChannel)(f, T.channelId)
                }, [f, T]);
                return null == p || v && !x ? null : (0, a.jsx)("div", {
                    className: i(I.container, C),
                    children: x && null != T ? (0, a.jsx)(r.default.div, {
                        style: {
                            marginBottom: P.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-60, 0]
                            })
                        },
                        children: (0, a.jsxs)(u.Clickable, {
                            className: i(I.banner, I.clickable),
                            onClick: b,
                            children: [(0, a.jsx)(L, {
                                channelId: T.channelId,
                                emojiId: null === (t = T.emoji) || void 0 === t ? void 0 : t.id,
                                emojiName: null == T ? void 0 : null === (n = T.emoji) || void 0 === n ? void 0 : n.name
                            }), (0, a.jsxs)("div", {
                                className: I.text,
                                children: [(0, a.jsx)(u.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: M.default.Messages.MEMBER_ACTIONS_NEXT_STEP.format({
                                        step: T.title
                                    })
                                }), (0, a.jsx)(N, {
                                    action: T
                                })]
                            }), (0, a.jsx)("div", {
                                className: I.iconCircle,
                                children: (0, a.jsx)(E.default, {
                                    width: 16,
                                    height: 16,
                                    color: y.hex(),
                                    className: I.nextIcon
                                })
                            })]
                        })
                    }) : (0, a.jsxs)(r.default.div, {
                        className: I.banner,
                        style: {
                            marginBottom: D.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-60, 0]
                            })
                        },
                        children: [(0, a.jsx)(L, {
                            channelId: p.channelId,
                            emojiId: null === (l = p.emoji) || void 0 === l ? void 0 : l.id,
                            emojiName: null == p ? void 0 : null === (c = p.emoji) || void 0 === c ? void 0 : c.name
                        }), (0, a.jsxs)("div", {
                            className: I.text,
                            children: [(0, a.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: p.title
                            }), (0, a.jsx)(u.Text, {
                                variant: "text-xxs/normal",
                                color: "text-muted",
                                children: M.default.Messages.MEMBER_ACTION_CHAT
                            })]
                        }), A ? (0, a.jsx)(m.default, {
                            className: I.completed,
                            backgroundColor: y.hex(),
                            width: 20,
                            height: 20
                        }) : null]
                    })
                })
            }

            function v(e) {
                let {
                    guildId: t,
                    channel: n,
                    className: s
                } = e, l = (0, A.useCanSeeOnboardingHome)(t), i = (0, o.default)([C.default], () => {
                    var e;
                    return (null === (e = C.default.getSelfMember(t)) || void 0 === e ? void 0 : e.isPending) === !0
                }), r = (0, S.useAllActionsCompleted)(t);
                return r || i || !l ? null : (0, a.jsx)(R, {
                    guildId: t,
                    channel: n,
                    className: s
                })
            }
        },
        188631: function(e, t, n) {
            "use strict";
            var a, s, l, i, r, o;
            n.r(t), n.d(t, {
                Steps: function() {
                    return a
                },
                AnalyticsActions: function() {
                    return s
                },
                AnalyticsSetupTypes: function() {
                    return l
                }
            }), (i = a || (a = {})).INVITE = "member_joined", i.CHANNEL = "create_channel", i.AVATAR = "avatar", i.MESSAGE = "send_message", i.COMPLETED = "completed", i.DISMISSED = "dismissed", (r = s || (s = {})).PERSONALIZE_SERVER = "Personalize Server", r.INVITE = "Invite Friends", r.CREATE_CHANNEL = "Create Channel", r.SEND_MESSAGE = "Send Message", r.DOWNLOAD = "Download", r.ADD_APP = "Add App", r.DISMISS_GUILD_PROGRESS = "Dismiss Guild Progress", r.DISCORD_OVERVIEW_VIDEO = "Discord Overview Video", r.JOIN_GUILD = "Join Guild", r.CONTACT_SYNC = "Sync Contacts", r.DISMISS = "Dismiss", (o = l || (l = {})).CHANNEL_WELCOME = "Channel Welcome CTA", o.GUILD_PROGRESS = "Guild Progress", o.HUB_PROGRESS = "Hub Progress"
        },
        983444: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePermissions: function() {
                    return _
                },
                useCompletedStates: function() {
                    return S
                }
            });
            var a = n("884691"),
                s = n("917351"),
                l = n.n(s),
                i = n("446674"),
                r = n("242757"),
                o = n("913491"),
                u = n("271938"),
                d = n("42203"),
                c = n("923959"),
                f = n("525065"),
                h = n("305961"),
                C = n("778588"),
                E = n("377253"),
                p = n("957255"),
                m = n("299039"),
                g = n("49111");

            function _(e, t) {
                return (0, i.useStateFromStoresObject)([p.default], () => ({
                    canInvite: (0, r.canViewInviteModal)(p.default, t, e),
                    canManageGuild: null != t && p.default.can(g.Permissions.MANAGE_GUILD, t),
                    canMessage: null != e && p.default.can(g.Permissions.SEND_MESSAGES, e),
                    canCreateChannel: null != t && p.default.can(g.Permissions.MANAGE_CHANNELS, t)
                }), [t, e])
            }

            function S(e) {
                var t;
                return {
                    guildPopulated: function(e) {
                        let t = (0, i.useStateFromStores)([d.default], () => d.default.getChannel(null == e ? void 0 : e.systemChannelId)),
                            n = (0, i.useStateFromStoresArray)([E.default], () => null != t ? E.default.getMessages(t.id).toArray() : []);
                        return (0, i.useStateFromStores)([f.default], () => {
                            var t;
                            let a = null !== (t = f.default.getMemberCount(null == e ? void 0 : e.id)) && void 0 !== t ? t : 0,
                                s = n.some(e => e.type === g.MessageTypes.USER_JOIN);
                            return a > 1 || s
                        }, [e, n])
                    }(e),
                    guildMessaged: function(e) {
                        let t = (0, i.useStateFromStores)([d.default], () => null != e ? d.default.getMutableBasicGuildChannelsForGuild(e.id) : null),
                            n = a.useMemo(() => null == t ? [] : l.values(t), [t]);
                        return function(e) {
                            let t = (0, i.useStateFromStores)([u.default], () => u.default.getId());
                            return (0, i.useStateFromStores)([E.default], () => l.some(e, e => {
                                let n = E.default.getMessages(e.id).toArray();
                                return l.some(n, e => e.author.id === t && !(0, o.default)(e))
                            }))
                        }(n)
                    }(e),
                    guildPersonalized: function(e) {
                        let t = (0, i.useStateFromStores)([C.default], () => C.default.hasLayers()),
                            n = (0, i.useStateFromStores)([h.default], () => h.default.getGuild(null == e ? void 0 : e.id));
                        return (null == n ? void 0 : n.icon) != null && !t
                    }(e),
                    guildChannelCreated: (t = e, (0, i.useStateFromStores)([c.default], () => {
                        let e = c.default.getChannels(null == t ? void 0 : t.id),
                            n = e[c.GUILD_VOCAL_CHANNELS_KEY];

                        function a(e) {
                            return null != t && m.default.extractTimestamp(e.channel.id) - m.default.extractTimestamp(t.id) > 500
                        }
                        return e[0, c.GUILD_SELECTABLE_CHANNELS_KEY].some(a) || n.some(a)
                    }, [t]))
                }
            }
        },
        718490: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("917351"),
                i = n.n(l),
                r = n("446674"),
                o = n("77078"),
                u = n("906932"),
                d = n("401642"),
                c = n("26989"),
                f = n("305961"),
                h = n("697218"),
                C = n("98292"),
                E = n("351825"),
                p = n("956089"),
                m = n("664336"),
                g = n("811305"),
                _ = n("117362"),
                S = n("449008"),
                A = n("49111"),
                T = n("590456"),
                M = n("782340"),
                I = n("961282");
            class N {
                updateData(e, t) {
                    this.userId = e, this.user = t
                }
                getNicknameGuildPairs() {
                    return this.generateNicknameGuildPairs(this.user)
                }
                renderNicknamePairs() {
                    return this.getNicknameGuildPairs().map((e, t) => {
                        let [n, l] = e, i = (0, a.jsx)(o.Clickable, {
                            tag: "span",
                            onClick: this.handleClick,
                            children: n
                        });
                        return l.length > 0 && (i = (0, a.jsx)(o.TooltipContainer, {
                            className: I.tooltip,
                            text: l.join(", "),
                            position: "bottom",
                            children: i
                        })), (0, a.jsxs)(s.Fragment, {
                            children: [0 !== t ? ", " : null, i]
                        }, t)
                    })
                }
                constructor(e, t) {
                    this.generateNicknameGuildPairs = (0, _.cachedFunction)(e => {
                        var t;
                        let n = i(c.default.getNicknameGuildsMapping(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : this.userId)).toPairs().map(e => {
                            let [t, n] = e;
                            return [t, n.map(e => {
                                var t;
                                return null === (t = f.default.getGuild(e)) || void 0 === t ? void 0 : t.name
                            }).filter(S.isNotNullish)]
                        }).value();
                        return n
                    }), this.renderMoreAvatars = () => (0, a.jsx)(o.TooltipContainer, {
                        text: M.default.Messages.AKA_MORE_AVATARS_OVERFLOW,
                        position: "bottom",
                        children: (0, a.jsx)(o.Clickable, {
                            className: I.moreAvatars,
                            onClick: this.handleClick,
                            children: (0, a.jsx)(E.default, {
                                className: I.plusIcon
                            })
                        })
                    }, "more-avatars"), this.handleClick = () => {
                        (0, d.openUserProfileModal)({
                            userId: this.userId,
                            section: T.UserProfileSections.MUTUAL_GUILDS,
                            analyticsLocation: {
                                section: A.AnalyticsSections.CHANNEL_HEADER
                            }
                        })
                    }, this.userId = e, this.user = t
                }
            }

            function L(e) {
                let {
                    channel: t
                } = e, n = t.getRecipientId(), l = (0, u.useAvatarsWithGuilds)(n), i = Array(l.length).fill(null), d = function(e) {
                    let t = (0, r.useStateFromStores)([h.default], () => h.default.getUser(e), [e]),
                        [n] = s.useState(() => new N(e, null != t ? t : void 0));
                    return n.updateData(e, null != t ? t : void 0), n
                }(n);
                return 0 === d.getNicknameGuildPairs().length && 0 === l.length ? (0, a.jsx)("div", {
                    className: I.spacer
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(m.Divider, {}), (0, a.jsx)(p.TextBadge, {
                        text: M.default.Messages.AKA,
                        disableColor: !0,
                        className: I.akaBadge
                    }), l.length > 0 ? (0, a.jsx)(g.default, {
                        size: 16,
                        users: i,
                        showUserPopout: !1,
                        renderUser: (e, t, n) => {
                            var s;
                            let i = d.user,
                                r = l[n];
                            return null == r || null == i ? null : (0, a.jsx)(o.TooltipContainer, {
                                text: null === (s = f.default.getGuild(r)) || void 0 === s ? void 0 : s.name,
                                position: "bottom",
                                children: (0, a.jsx)("img", {
                                    alt: "",
                                    className: I.avatar,
                                    onClick: d.handleClick,
                                    src: i.getAvatarURL(r, 16),
                                    "aria-hidden": !0
                                })
                            }, r[1])
                        },
                        renderMoreUsers: d.renderMoreAvatars,
                        guildId: void 0,
                        max: 3,
                        className: I.avatars
                    }) : null, d.getNicknameGuildPairs().length > 0 ? (0, a.jsx)(C.default, {
                        position: "bottom",
                        className: I.nicknames,
                        children: d.renderNicknamePairs()
                    }) : null]
                })
            }
        },
        960454: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("450911"),
                l = n("413427"),
                i = n("274870"),
                r = n("679653"),
                o = n("49111"),
                u = n("6291"),
                d = e => {
                    let {
                        channel: t
                    } = e, n = (0, r.default)(t), d = (0, i.useIsBroadcastingGDM)(t.id);
                    return (0, a.jsx)("div", {
                        className: u.container,
                        onDoubleClick: e => e.stopPropagation(),
                        children: d ? (0, a.jsx)("div", {
                            className: u.channelName,
                            children: n
                        }) : (0, a.jsx)(l.default, {
                            minLen: 1,
                            maxLen: o.MAX_CHANNEL_NAME_LENGTH,
                            className: u.channelName,
                            name: "channel_name",
                            autoComplete: "off",
                            value: null != n ? n : "",
                            onBlur: e => {
                                n !== e.currentTarget.value && s.default.setName(t.id, e.currentTarget.value)
                            }
                        })
                    })
                }
        },
        740961: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("118810"),
                o = n("77078"),
                u = n("272030"),
                d = n("779454"),
                c = n("679653"),
                f = n("367376"),
                h = n("539938"),
                C = n("49111"),
                E = n("782340"),
                p = n("887960");

            function m(e) {
                let {
                    channel: t,
                    onClose: n,
                    transitionState: s
                } = e, l = (0, c.default)(t, !0);
                return (0, a.jsx)(o.ModalRoot, {
                    transitionState: s,
                    "aria-label": E.default.Messages.FORM_LABEL_CHANNEL_TOPIC,
                    children: (0, a.jsx)(o.ModalContent, {
                        children: (0, a.jsx)(d.default, {
                            selectable: !0,
                            onClose: n,
                            renderHeader: () => (0, a.jsx)(o.Heading, {
                                variant: "heading-lg/semibold",
                                children: l
                            }),
                            children: (0, a.jsx)(o.Text, {
                                selectable: !0,
                                variant: "text-md/normal",
                                className: p.content,
                                children: f.default.parseTopic(t.topic, !0, {
                                    channelId: t.id
                                })
                            })
                        })
                    })
                })
            }

            function g(e) {
                return e.matches("a") || "highlight" === e.className || e.className.includes("mention")
            }
            class _ extends s.Component {
                render() {
                    let {
                        channel: e
                    } = this.props;
                    return e.isMultiUserDM() || null == e.topic || 0 === e.topic.length ? null : (0, a.jsxs)(s.Fragment, {
                        children: [(0, a.jsx)(h.default.Divider, {}), (0, a.jsxs)("div", {
                            className: i(p.topic, p.expandable),
                            onMouseDown: this.onMouseDown,
                            onMouseMove: this.onMouseMove,
                            onMouseUp: this.onMouseUp,
                            onContextMenu: this.handleContextMenu,
                            onClick: this.handleClick,
                            children: [(0, a.jsx)(o.Clickable, {
                                onClick: this.handleClick,
                                "aria-label": E.default.Messages.OPEN_CHANNEL_TOPIC,
                                className: p.topicClickTarget
                            }), f.default.parseTopic(e.topic, !0, {
                                channelId: e.id
                            })]
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this._mouseDown = !1, this._mouseUp = !1, this.handleOpenTopic = e => {
                        let t = e.target;
                        if ((0, r.isElement)(t)) {
                            if (g(t)) return;
                            let e = t.parentNode;
                            if ((0, r.isElement)(e) && g(e)) return
                        }(0, o.openModal)(e => (0, a.jsx)(m, {
                            ...e,
                            ...this.props
                        }))
                    }, this.onMouseDown = () => {
                        this._mouseDown = !0
                    }, this.onMouseMove = () => {
                        this._mouseDown && (this._mouseDown = !1)
                    }, this.onMouseUp = e => {
                        this._mouseDown && e.button !== C.MouseButtons.SECONDARY && this.handleOpenTopic(e), this._mouseUp = !0, this._mouseDown = !1
                    }, this.handleContextMenu = e => {
                        let {
                            channel: t,
                            guild: s
                        } = this.props;
                        (0, u.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("229233").then(n.bind(n, "229233"));
                            return n => (0, a.jsx)(e, {
                                ...n,
                                channel: t,
                                guild: s,
                                includeTopic: !0
                            })
                        })
                    }, this.handleClick = e => {
                        if (this._mouseUp) {
                            this._mouseUp = !1;
                            return
                        }
                        this.handleOpenTopic(e)
                    }
                }
            }
            var S = _
        },
        540853: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("65597"),
                l = n("77078"),
                i = n("824563"),
                r = n("27618"),
                o = n("697218"),
                u = n("158998"),
                d = n("539938"),
                c = n("782340"),
                f = n("305794");

            function h(e) {
                let t = e.channel.getRecipientId(),
                    n = e.channel.isSystemDM(),
                    h = (0, s.default)([o.default], () => o.default.getUser(t)),
                    C = (0, s.default)([i.default], () => i.default.getStatus(t)),
                    E = (0, s.default)([i.default], () => i.default.isMobileOnline(t)),
                    p = (0, s.default)([r.default], () => r.default.getNickname(t)),
                    m = u.default.useUserTag(h);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.HiddenVisually, {
                        children: c.default.Messages.DIRECT_MESSAGE
                    }), null != h && !n && (0, a.jsx)("div", {
                        children: (0, a.jsx)(l.Avatar, {
                            status: C,
                            isMobile: E,
                            className: f.avatar,
                            size: l.AvatarSizes.SIZE_24,
                            "aria-label": u.default.getName(h),
                            src: h.getAvatarURL(void 0, 24)
                        })
                    }), (0, a.jsx)(d.default.Title, {
                        level: e.level,
                        onClick: e.handleClick,
                        onContextMenu: e.handleContextMenu,
                        className: null != e.handleClick ? f.cursorPointer : null,
                        children: (0, a.jsx)(l.TooltipContainer, {
                            text: m,
                            position: "bottom",
                            children: null != p ? p : u.default.getName(h)
                        })
                    })]
                })
            }
        },
        557809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                renderTitle: function() {
                    return x
                },
                renderTopic: function() {
                    return D
                },
                HeaderGuildBreadcrumb: function() {
                    return b
                },
                ChannelEmoji: function() {
                    return j
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("446674"),
                o = n("77078"),
                u = n("430568"),
                d = n("789394"),
                c = n("843962"),
                f = n("679653"),
                h = n("619335"),
                C = n("965381"),
                E = n("393414"),
                p = n("506885"),
                m = n("27618"),
                g = n("162771"),
                _ = n("697218"),
                S = n("79798"),
                A = n("109024"),
                T = n("718490"),
                M = n("960454"),
                I = n("740961"),
                N = n("539938"),
                L = n("540853"),
                R = n("49111"),
                v = n("782340"),
                y = n("305794");

            function x(e) {
                let {
                    channel: t,
                    channelName: n,
                    parentChannel: l,
                    guild: r,
                    inSidebar: u = !1,
                    handleClick: d,
                    handleContextMenu: C,
                    handleParentClick: E,
                    handleParentContextMenu: p,
                    renderFollowButton: g,
                    channelEmojiLeftOfIcon: S
                } = e, A = (0, h.default)(t, r), {
                    prefix: T,
                    level: I
                } = function(e, t) {
                    var n, a;
                    switch (e) {
                        case R.ChannelTypes.DM:
                            return {
                                prefix: v.default.Messages.DIRECT_MESSAGE, level: 1
                            };
                        case R.ChannelTypes.GROUP_DM:
                            return {
                                prefix: v.default.Messages.GROUP_DM, level: 1
                            };
                        case R.ChannelTypes.GUILD_DIRECTORY:
                            return {
                                prefix: null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : "", level: 1
                            };
                        case R.ChannelTypes.GUILD_ANNOUNCEMENT:
                        case R.ChannelTypes.GUILD_TEXT:
                        case R.ChannelTypes.GUILD_FORUM:
                        case R.ChannelTypes.GUILD_MEDIA:
                        case R.ChannelTypes.GUILD_STAGE_VOICE:
                        case R.ChannelTypes.GUILD_VOICE:
                            return {
                                prefix: null !== (a = null == t ? void 0 : t.name) && void 0 !== a ? a : "", level: 1
                            };
                        case R.ChannelTypes.ANNOUNCEMENT_THREAD:
                        case R.ChannelTypes.PUBLIC_THREAD:
                        case R.ChannelTypes.PRIVATE_THREAD:
                            return {
                                prefix: v.default.Messages.THREAD, level: 2
                            };
                        default:
                            return {
                                prefix: null, level: 1
                            }
                    }
                }(t.type, r), x = (0, a.jsxs)(a.Fragment, {
                    children: [null != T ? (0, a.jsxs)(o.HiddenVisually, {
                        children: [T, ":"]
                    }) : null, " ", n]
                }), O = (0, a.jsx)(j, {
                    channel: t
                });
                switch (t.type) {
                    case R.ChannelTypes.DM:
                        return (0, a.jsx)(L.default, {
                            level: I,
                            channel: t,
                            handleClick: d,
                            handleContextMenu: C
                        });
                    case R.ChannelTypes.GROUP_DM:
                        if (t.isManaged()) return x;
                        return (0, a.jsxs)(s.Fragment, {
                            children: [(0, a.jsx)(o.HiddenVisually, {
                                children: v.default.Messages.GROUP_DM
                            }), (0, a.jsx)("div", {
                                children: (0, a.jsx)(o.Avatar, {
                                    "aria-hidden": !0,
                                    className: y.avatar,
                                    size: o.AvatarSizes.SIZE_24,
                                    src: (0, c.getChannelIconURL)(t, 80, !1)
                                })
                            }), (0, a.jsx)(M.default, {
                                channel: t
                            }, "channel-".concat(t.id))]
                        });
                    case R.ChannelTypes.GUILD_ANNOUNCEMENT:
                    case R.ChannelTypes.GUILD_TEXT:
                    case R.ChannelTypes.GUILD_FORUM:
                    case R.ChannelTypes.GUILD_MEDIA:
                        return (0, a.jsxs)(s.Fragment, {
                            children: [S && O, P(A, t.type === R.ChannelTypes.GUILD_ANNOUNCEMENT ? v.default.Messages.NEWS_CHANNEL : v.default.Messages.TEXT_CHANNEL), !S && O, (0, a.jsx)(N.default.Title, {
                                level: I,
                                onContextMenu: C,
                                onClick: d,
                                children: x
                            }), null != g ? g() : null]
                        });
                    case R.ChannelTypes.GUILD_VOICE:
                        return (0, a.jsxs)(s.Fragment, {
                            children: [S && O, P(A, v.default.Messages.VOICE_CHANNEL), !S && O, (0, a.jsx)(N.default.Title, {
                                level: I,
                                onContextMenu: C,
                                onClick: d,
                                children: x
                            })]
                        });
                    case R.ChannelTypes.GUILD_STAGE_VOICE:
                        return (0, a.jsxs)(s.Fragment, {
                            children: [S && O, P(A, v.default.Messages.STAGE_CHANNEL), !S && O, (0, a.jsx)(N.default.Title, {
                                level: I,
                                onContextMenu: C,
                                onClick: d,
                                children: x
                            })]
                        });
                    case R.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case R.ChannelTypes.PUBLIC_THREAD:
                    case R.ChannelTypes.PRIVATE_THREAD:
                        let D = null;
                        if (!u && null != l) {
                            let e = (0, h.default)(l, r);
                            D = (0, a.jsxs)(s.Fragment, {
                                children: [P(e, v.default.Messages.TEXT_CHANNEL), (0, a.jsx)(N.default.Title, {
                                    level: I,
                                    onContextMenu: p,
                                    onClick: E,
                                    className: i(y.parentChannelName, y.cursorPointer),
                                    children: (0, f.computeChannelName)(l, _.default, m.default)
                                }), (0, a.jsx)(N.default.Caret, {})]
                            })
                        }
                        let b = (null == l ? void 0 : l.type) != null && R.ChannelTypesSets.GUILD_THREADS_ONLY.has(l.type);
                        return (0, a.jsxs)(s.Fragment, {
                            children: [D, P(b ? null : A, v.default.Messages.THREAD), (0, a.jsx)(N.default.Title, {
                                level: I,
                                onContextMenu: C,
                                onClick: d,
                                className: i({
                                    [y.cursorPointer]: u,
                                    [y.forumPostTitle]: b
                                }),
                                children: x
                            })]
                        });
                    case R.ChannelTypes.GUILD_DIRECTORY:
                        let F = (null == r ? void 0 : r.hasFeature(R.GuildFeatures.HUB)) ? v.default.Messages.HUB_DIRECTORY_CHANNEL_TITLE.format({
                            guildName: n
                        }) : n;
                        return (0, a.jsxs)(s.Fragment, {
                            children: [null !== A ? (0, a.jsx)(N.default.Icon, {
                                iconClassName: y.icon,
                                icon: A,
                                "aria-hidden": !0
                            }) : null, (0, a.jsxs)(N.default.Title, {
                                level: I,
                                onContextMenu: C,
                                onClick: d,
                                children: [null != T ? (0, a.jsxs)(o.HiddenVisually, {
                                    children: [T, ":"]
                                }) : null, " ", F]
                            })]
                        });
                    default:
                        return null
                }
            }
            let O = e => {
                let {
                    channel: t
                } = e, n = (0, r.useStateFromStores)([_.default], () => _.default.getCurrentUser()), l = (0, r.useStateFromStores)([_.default], () => _.default.getUser(t.getRecipientId()));
                return (s.useEffect(() => {
                    (null == n ? void 0 : n.isStaff()) && (0, p.default)(l.id, l.getAvatarURL(void 0, 80), {
                        dispatchWait: !0,
                        withMutualGuilds: !0,
                        withMutualFriendsCount: !0
                    })
                }, [n, l]), t.isDM() && (null == n ? void 0 : n.isStaff()) && (null == l ? void 0 : l.isStaff())) ? (0, a.jsx)(S.default, {
                    type: S.default.Types.STAFF_ONLY_DM
                }) : null
            };

            function D(e, t) {
                switch (e.type) {
                    case R.ChannelTypes.DM:
                        return (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(O, {
                                channel: e
                            }), (0, a.jsx)(T.default, {
                                channel: e
                            }, e.id)]
                        });
                    case R.ChannelTypes.GUILD_ANNOUNCEMENT:
                    case R.ChannelTypes.GUILD_TEXT:
                    case R.ChannelTypes.GUILD_VOICE:
                    case R.ChannelTypes.GUILD_STAGE_VOICE:
                    case R.ChannelTypes.GROUP_DM:
                        return null != t ? (0, a.jsx)(I.default, {
                            channel: e,
                            guild: t
                        }, e.id) : null;
                    default:
                        return null
                }
            }

            function P(e, t) {
                return (0, a.jsxs)(a.Fragment, {
                    children: [null !== e && (0, a.jsx)(N.default.Icon, {
                        iconClassName: y.icon,
                        icon: e,
                        "aria-hidden": !0
                    }), (0, a.jsx)(o.HiddenVisually, {
                        children: t
                    })]
                })
            }

            function b(e) {
                let {
                    guild: t,
                    channel: n
                } = e, s = (0, r.useStateFromStores)([g.default], () => g.default.getGuildId());
                return s !== R.FAVORITES || null == t ? null : (0, a.jsxs)("div", {
                    className: y.guildBreadcrumbContainer,
                    children: [(0, a.jsx)(N.default.Caret, {
                        direction: "left"
                    }), (0, a.jsx)(A.default, {
                        guild: t,
                        size: A.default.Sizes.SMALLER,
                        className: y.guildBreadcrumbIcon,
                        active: !0
                    }), (0, a.jsx)(N.default.Title, {
                        onClick: () => {
                            (0, E.transitionToGuild)(t.id, n.id)
                        },
                        className: i(y.parentChannelName, y.cursorPointer),
                        children: t.name
                    })]
                })
            }
            let j = s.memo(function(e) {
                let {
                    channel: t
                } = e, {
                    enabled: n,
                    left: s
                } = d.ChannelEmojisExperiment.useExperiment({
                    location: "f2c6da_2"
                }, {
                    autoTrackExposure: !1
                }), {
                    emoji: l,
                    color: r
                } = (0, C.useChannelEmojiAndColor)(t);
                return n ? (0, a.jsx)("div", {
                    className: i(y.channelEmoji, s ? y.channelEmojiLeftOfIcon : y.channelEmojiRightOfIcon),
                    style: {
                        backgroundColor: r
                    },
                    children: (0, a.jsx)(u.default, {
                        className: y.twemoji,
                        emojiName: l.name,
                        emojiId: l.id,
                        src: l.url
                    })
                }) : null
            })
        },
        631360: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("446674"),
                s = n("913144"),
                l = n("267567");
            let i = null,
                r = null;

            function o() {
                let e = l.default.mostRecentLurkedGuildId();
                null != e ? (i = e, r = null) : (null != i ? r = i : r = null, i = null)
            }
            class u extends a.default.Store {
                initialize() {
                    this.syncWith([l.default], o)
                }
                shouldShowPopout(e) {
                    return r === e
                }
            }
            u.displayName = "LurkerModePopoutStore";
            var d = new u(s.default)
        },
        88187: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("782340"),
                i = n("404637"),
                r = e => {
                    let {
                        guild: t,
                        onClose: r
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: i.container,
                        children: [(0, a.jsx)("img", {
                            alt: "",
                            className: i.image,
                            src: n("984467")
                        }), (0, a.jsxs)("div", {
                            className: i.content,
                            children: [(0, a.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                children: l.default.Messages.LURKER_MODE_POPOUT_SUCCESS_HEADER.format({
                                    guild: t.name
                                })
                            }), (0, a.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: l.default.Messages.LURKER_MODE_POPOUT_SUCCESS_BODY
                            }), (0, a.jsx)("div", {
                                className: i.buttonContainer,
                                children: (0, a.jsx)(s.Button, {
                                    onClick: r,
                                    children: l.default.Messages.LURKER_MODE_POPOUT_SUCCESS_BUTTON
                                })
                            })]
                        })]
                    })
                }
        },
        275318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("35092"),
                s = n("913144"),
                l = n("203288"),
                i = n("271938"),
                r = n("42203"),
                o = n("911162");
            let u = new Set;
            class d extends a.default.Store {
                shouldDisplayPrompt(e) {
                    return u.has(e)
                }
            }
            d.displayName = "MediaPostSharePromptStore";
            var c = new d(s.default, {
                CONNECTION_OPEN: function() {
                    u = new Set
                },
                MESSAGE_CREATE: function(e) {
                    var t;
                    if (e.isPushNotification) return;
                    let n = e.message;
                    if (i.default.getId() !== (null === (t = n.author) || void 0 === t ? void 0 : t.id) || !(0, o.isFirstMessageIdInMediaPost)(n.id, n.channel_id)) return;
                    let a = r.default.getChannel(n.channel_id);
                    if (null == a || null == a.parent_id) return;
                    let s = l.default.isChannelGated(a.guild_id, a.parent_id);
                    s && u.add(e.message.id)
                },
                DISMISS_MEDIA_POST_SHARE_PROMPT: function(e) {
                    let {
                        threadId: t
                    } = e;
                    u.delete(t)
                },
                LOGOUT: function(e) {
                    u.clear()
                }
            })
        },
        911162: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isFirstMessageIdInMediaPost: function() {
                    return s
                }
            }), n("65597");
            var a = n("42203");

            function s(e, t) {
                if (e !== t) return !1;
                let n = a.default.getChannel(t);
                if (null == n || !n.isForumPost()) return !1;
                let s = a.default.getChannel(n.parent_id);
                return (null == s ? void 0 : s.isMediaChannel()) === !0
            }
        },
        762147: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("281071"),
                i = n("65597"),
                r = n("77078"),
                o = n("716241"),
                u = n("42203"),
                d = n("191814"),
                c = n("945330"),
                f = n("83900"),
                h = n("404008"),
                C = n("701909"),
                E = n("639440"),
                p = n("673844"),
                m = n("49111"),
                g = n("782340"),
                _ = n("64664");

            function S(e) {
                let {
                    threadId: t
                } = e, n = (0, i.default)([u.default], () => u.default.getChannel(t)), S = (0, i.default)([u.default], () => u.default.getChannel(null == n ? void 0 : n.parent_id)), A = s.useCallback(() => {
                    null != n && null != S && ((0, o.trackWithMetadata)(m.AnalyticEvents.MEDIA_POST_SHARE_PROMPT_CLICKED, {
                        media_post_id: n.id
                    }), (0, l.copy)((0, h.getChannelLinkToCopy)(n, S)))
                }, [n, S]);
                return (0, a.jsxs)("div", {
                    className: _.sharePromptContainer,
                    children: [(0, a.jsx)(p.default, {}), (0, a.jsxs)("div", {
                        className: _.sharePromptContent,
                        children: [(0, a.jsx)(r.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: g.default.Messages.MEDIA_POST_SHARE_PROMPT_TITLE
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            color: "text-normal",
                            children: g.default.Messages.MEDIA_POST_SHARE_PROMPT_SUBTITLE.format({
                                helpArticleUrl: C.default.getCreatorSupportArticleURL(m.HelpdeskArticles.MEDIA_CHANNEL)
                            })
                        }), (0, a.jsx)(d.default, {
                            size: 4
                        }), (0, a.jsxs)(r.Button, {
                            className: _.sharePromptCta,
                            innerClassName: _.ctaContent,
                            onClick: A,
                            children: [(0, a.jsx)(f.default, {
                                height: "16px",
                                width: "16px"
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: g.default.Messages.MEDIA_POST_SHARE_PROMPT_CTA
                            })]
                        })]
                    }), (0, a.jsx)(r.Clickable, {
                        className: _.closeButton,
                        onClick: () => {
                            (0, E.dismissMediaPostSharePrompt)(t)
                        },
                        "aria-label": g.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
                        children: (0, a.jsx)(c.default, {
                            height: "15px",
                            width: "15px"
                        })
                    })]
                })
            }
        },
        673844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("75196");

            function l(e) {
                let {
                    width: t = 45,
                    height: n = 46,
                    ...l
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, s.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 49 50",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, a.jsx)("path", {
                        d: "M29.424 22.375L30.9908 17.9974C31.6183 16.242 32.8917 14.792 34.5514 13.943L46.105 8.03515C47.7328 7.19988 49.3851 9.15697 48.2694 10.6141C47.1536 12.0713 45.1905 13.7662 42.0689 15.0465L45.5563 15.0222C46.9464 15.01 47.4829 16.8268 46.3123 17.5767C44.3247 18.8632 41.3372 19.924 37.4962 18.8144L38.9229 20.1557C39.6728 20.863 39.1119 22.1128 38.0815 22.0397C36.6183 21.9238 34.8746 21.4909 33.6857 20.2106C33.6857 20.2106 32.8992 22.375 30.8201 23.5639C30.0397 24.0089 29.1252 23.2224 29.424 22.375Z",
                        fill: "white"
                    }), (0, a.jsx)("path", {
                        d: "M19.5767 46.8513C20.112 45.2515 18.84 43.3838 16.7357 42.6798C14.6314 41.9757 12.4916 42.7018 11.9563 44.3016C11.421 45.9014 12.6929 47.769 14.7973 48.4731C16.9016 49.1772 19.0414 48.4511 19.5767 46.8513Z",
                        fill: "#66B9FF"
                    }), (0, a.jsx)("path", {
                        d: "M25.2658 39.551C25.0403 40.2339 24.4915 40.7521 23.7172 41.0996C23.9001 41.6423 23.9184 42.1788 23.7477 42.6848C23.577 43.1909 23.1685 43.6847 22.6198 44.0261C22.7379 44.4329 22.7336 44.8655 22.6076 45.2699C21.9918 47.0929 18.791 47.666 15.456 46.5441C12.121 45.4223 9.90783 43.0384 10.5175 41.2155C10.6648 40.8046 10.9325 40.4476 11.2857 40.1912C11.0662 39.6059 11.0236 39.0206 11.2065 38.478C11.3894 37.9354 11.7186 37.5574 12.1881 37.2342C11.7796 36.4904 11.6576 35.7405 11.8832 35.0637C12.56 33.0457 16.1083 32.4116 19.803 33.6493C23.4978 34.8869 25.9426 37.533 25.2658 39.551Z",
                        fill: "#89D6FF"
                    }), (0, a.jsx)("path", {
                        d: "M9.76155 19.8454C11.6089 14.3277 19.0166 11.8341 26.2963 14.279C33.5759 16.7238 37.984 23.1743 36.1366 28.692C34.9294 32.2891 31.3628 34.5998 27.0096 35.0998C26.5376 35.1499 26.0849 35.3144 25.6908 35.5789C25.2966 35.8435 24.9729 36.2001 24.7477 36.6179L23.9855 38.0506C23.1686 39.3737 20.6079 39.7517 17.9557 38.8615C15.1146 37.9104 13.2368 35.868 13.694 34.2584L13.9318 33.0207C14.0215 32.5411 13.9898 32.0467 13.8397 31.5824C13.6895 31.1181 13.4257 30.6988 13.0722 30.3625C9.97494 27.3506 8.56657 23.406 9.76155 19.8454Z",
                        fill: "#FFEFA3"
                    }), (0, a.jsx)("path", {
                        d: "M21.0407 42.2577C19.8335 42.2577 18.5166 42.0321 17.2119 41.5932C15.1755 40.9164 13.4013 39.7763 12.3344 38.4716C12.2837 38.4193 12.2444 38.3572 12.2191 38.289C12.1938 38.2207 12.1829 38.148 12.1872 38.0754C12.1915 38.0027 12.2109 37.9318 12.2441 37.8671C12.2773 37.8023 12.3236 37.7452 12.3801 37.6993C12.4366 37.6535 12.502 37.6199 12.5722 37.6006C12.6423 37.5814 12.7158 37.577 12.7877 37.5877C12.8597 37.5984 12.9287 37.624 12.9902 37.6628C13.0518 37.7016 13.1046 37.7528 13.1453 37.8131C14.0903 38.9654 15.6938 39.9836 17.5411 40.6055C19.2848 41.1908 21.0895 41.3615 22.504 41.0749C22.5736 41.0547 22.6467 41.0491 22.7186 41.0586C22.7905 41.068 22.8597 41.0923 22.9217 41.1298C22.9838 41.1674 23.0374 41.2174 23.0791 41.2767C23.1208 41.336 23.1498 41.4033 23.1642 41.4744C23.1786 41.5455 23.1781 41.6188 23.1627 41.6897C23.1473 41.7605 23.1174 41.8275 23.0748 41.8862C23.0322 41.9449 22.9779 41.9941 22.9154 42.0308C22.8528 42.0675 22.7833 42.0908 22.7113 42.0992C22.1613 42.2092 21.6015 42.2623 21.0407 42.2577V42.2577ZM20.8761 45.0745C21.0147 45.062 21.1429 44.9956 21.233 44.8896C21.3231 44.7835 21.3679 44.6463 21.3577 44.5075C21.3453 44.3693 21.2787 44.2417 21.1725 44.1526C21.0662 44.0635 20.9289 44.0201 20.7907 44.0319C19.5043 44.1416 17.9862 43.9283 16.5229 43.4344C14.9377 42.904 13.5233 42.0931 12.5478 41.1481C12.4458 41.0675 12.3175 41.0276 12.1878 41.0362C12.058 41.0448 11.9361 41.1014 11.8457 41.1948C11.7553 41.2882 11.7029 41.4119 11.6985 41.5419C11.6942 41.6718 11.7383 41.7987 11.8222 41.898C12.9075 42.9528 14.4622 43.849 16.1876 44.4282C17.5228 44.8733 18.858 45.105 20.0957 45.105C20.364 45.105 20.62 45.0928 20.8761 45.0745V45.0745Z",
                        fill: "#3F96EF"
                    }), (0, a.jsx)("path", {
                        d: "M11.6396 20.8698C13.2065 16.1813 19.4924 14.0657 25.6746 16.1386C31.8568 18.2116 35.5942 23.6865 34.0212 28.375C32.9969 31.4296 29.9729 33.3867 26.2782 33.8074C25.8773 33.851 25.493 33.9914 25.1584 34.2166C24.8238 34.4418 24.549 34.7449 24.3577 35.0999L23.7114 36.3193C23.0163 37.4411 20.8459 37.7642 18.59 37.0082C16.1817 36.1973 14.5844 34.4658 14.9746 33.1001L15.1819 32.0454C15.2562 31.6382 15.2283 31.2189 15.1006 30.8252C14.9729 30.4314 14.7494 30.0756 14.4502 29.7895C11.8164 27.2349 10.6275 23.8877 11.6396 20.8698Z",
                        fill: "url(#paint0_linear_859_60333)"
                    }), (0, a.jsx)("path", {
                        d: "M18.8521 39.1186C19.1939 39.1973 19.54 39.2563 19.8886 39.2954C21.5042 33.412 23.2053 28.7905 24.7234 26.0652C28.1254 27.1627 29.3875 26.6993 29.8387 26.1018C30.2898 25.5043 30.1374 24.6691 29.3875 23.5838C28.6376 22.4986 27.9121 22.151 27.0341 22.3096C26.1562 22.4681 25.2111 23.2851 24.2539 24.8032C23.3483 24.4754 22.4627 24.0947 21.6018 23.6631C21.7908 21.6572 21.553 20.3098 20.9007 19.5965C20.5105 19.1697 19.7666 18.749 18.468 19.1575C17.1694 19.566 16.9316 20.2305 16.9255 20.7183C16.9072 21.9072 18.5351 23.1997 20.48 24.2545C19.9617 28.0589 18.1571 33.6985 16.4377 38.2041C16.7412 38.3718 17.0547 38.5205 17.3767 38.6492C18.0412 36.8933 18.9801 34.3021 19.8032 31.6073C20.6263 28.9125 21.1994 26.5896 21.4677 24.7605C22.2298 25.1263 22.998 25.4495 23.7174 25.7177C22.9187 27.1688 22.0895 29.0954 21.2421 31.4549C20.6507 33.0949 19.7971 35.6556 18.8521 39.1186ZM27.217 23.3399C27.3816 23.3095 27.8694 23.2241 28.5278 24.1752C29.0766 24.9739 29.0887 25.3641 29.0095 25.4677C28.8022 25.7421 27.6133 25.8579 25.2782 25.1446C25.9854 24.0655 26.6439 23.4375 27.217 23.3399ZM20.6019 23.1204C18.9862 22.1876 17.962 21.2548 17.9681 20.7366C17.9742 20.4439 18.5412 20.2366 18.785 20.1574C19.0013 20.0837 19.2273 20.0426 19.4557 20.0354C19.8825 20.0354 20.0593 20.2244 20.1263 20.3037C20.5653 20.7793 20.6995 21.7791 20.6019 23.1204Z",
                        fill: "#FFC31A"
                    }), (0, a.jsx)("path", {
                        d: "M32.5883 3.43255C32.9256 3.21613 33.2127 2.93007 33.4304 2.59358C33.648 2.25708 33.7912 1.87793 33.8503 1.48156L34.0515 0.115857C34.0573 0.0830328 34.0746 0.0533456 34.1003 0.0321176C34.126 0.0108896 34.1584 -0.000490999 34.1918 1.62532e-05C34.2244 -0.000288277 34.256 0.0113057 34.2807 0.032628C34.3054 0.0539503 34.3215 0.0835394 34.3259 0.115857L34.5271 1.48156C34.5862 1.87793 34.7294 2.25708 34.9471 2.59358C35.1647 2.93007 35.4519 3.21613 35.7892 3.43255L35.966 3.54839C35.9867 3.55964 36.004 3.57641 36.0158 3.59685C36.0277 3.6173 36.0336 3.64062 36.033 3.66423C36.0336 3.68785 36.0277 3.71117 36.0158 3.73162C36.004 3.75206 35.9867 3.76883 35.966 3.78007L35.7892 3.90201C35.4524 4.11903 35.1657 4.40525 34.9481 4.74163C34.7305 5.07802 34.587 5.45688 34.5271 5.85301L34.3259 7.21871C34.3216 7.25162 34.3057 7.28194 34.2812 7.30426C34.2566 7.32659 34.2249 7.33948 34.1918 7.34065V7.34065C34.1579 7.33971 34.1254 7.32703 34.0998 7.30479C34.0742 7.28256 34.0572 7.25213 34.0515 7.21871L33.8503 5.85301C33.7905 5.45688 33.647 5.07802 33.4294 4.74163C33.2118 4.40525 32.9251 4.11903 32.5883 3.90201L32.4115 3.78617C32.3918 3.77413 32.3758 3.75702 32.3651 3.73663C32.3543 3.71624 32.3493 3.69334 32.3505 3.67033V3.67033C32.3493 3.64732 32.3543 3.62442 32.3651 3.60403C32.3758 3.58364 32.3918 3.56653 32.4115 3.55449L32.5883 3.43255Z",
                        fill: "#55EF84"
                    }), (0, a.jsx)("path", {
                        d: "M39.3804 39.3185C39.7181 39.1011 40.0054 38.8141 40.2231 38.4765C40.4408 38.139 40.5837 37.7588 40.6424 37.3614L40.8497 35.9957C40.8541 35.9634 40.8702 35.9338 40.8949 35.9125C40.9196 35.8912 40.9512 35.8796 40.9838 35.8799V35.8799C41.0165 35.8796 41.0481 35.8912 41.0728 35.9125C41.0974 35.9338 41.1135 35.9634 41.118 35.9957L41.3253 37.3614C41.3851 37.7584 41.5285 38.1382 41.7461 38.4755C41.9636 38.8129 42.2504 39.1003 42.5873 39.3185L42.7641 39.4283C42.7826 39.4415 42.7977 39.4589 42.8083 39.479C42.8189 39.4991 42.8246 39.5214 42.8251 39.5441V39.5563C42.8246 39.5782 42.8189 39.5996 42.8082 39.6187C42.7976 39.6379 42.7825 39.6541 42.7641 39.666L42.5873 39.7819C42.2498 39.9996 41.9627 40.2867 41.7451 40.6242C41.5274 40.9617 41.3843 41.3418 41.3253 41.739L41.118 43.0986C41.1137 43.1315 41.0978 43.1618 41.0733 43.1841C41.0487 43.2065 41.017 43.2194 40.9838 43.2205V43.2205C40.9507 43.2194 40.919 43.2065 40.8944 43.1841C40.8699 43.1618 40.854 43.1315 40.8497 43.0986L40.6424 41.739C40.5845 41.3414 40.4419 40.9609 40.2241 40.6233C40.0064 40.2856 39.7186 39.9987 39.3804 39.7819L39.2035 39.666C39.1852 39.6541 39.1701 39.6379 39.1594 39.6187C39.1488 39.5996 39.143 39.5782 39.1426 39.5563V39.5441C39.143 39.5214 39.1488 39.4991 39.1594 39.479C39.17 39.4589 39.1851 39.4415 39.2035 39.4283L39.3804 39.3185Z",
                        fill: "#FF78B5"
                    }), (0, a.jsx)("path", {
                        d: "M26.5035 8.52263C26.7308 8.37742 26.9245 8.18538 27.0717 7.95934C27.2189 7.73329 27.3162 7.47844 27.3571 7.2118L27.4912 6.29118C27.4953 6.2696 27.5065 6.25004 27.5231 6.23565C27.5397 6.22127 27.5607 6.21291 27.5826 6.21192V6.21192C27.6049 6.21172 27.6265 6.21966 27.6433 6.23426C27.6602 6.24885 27.6711 6.26909 27.6741 6.29118L27.8143 7.2118C27.8541 7.47805 27.9503 7.73273 28.0964 7.95879C28.2426 8.18486 28.4353 8.37709 28.6618 8.52263L28.7776 8.60189C28.7914 8.60981 28.8027 8.62143 28.8103 8.63544C28.8178 8.64944 28.8213 8.66527 28.8203 8.68115C28.8208 8.69613 28.8171 8.71096 28.8096 8.72391C28.802 8.73686 28.7909 8.7474 28.7776 8.75431L28.6618 8.83357C28.4353 8.97911 28.2426 9.17135 28.0964 9.39741C27.9503 9.62348 27.8541 9.87815 27.8143 10.1444L27.6741 11.065C27.6711 11.0871 27.6602 11.1074 27.6433 11.1219C27.6265 11.1365 27.6049 11.1445 27.5826 11.1443V11.1443C27.5607 11.1433 27.5397 11.1349 27.5231 11.1206C27.5065 11.1062 27.4953 11.0866 27.4912 11.065L27.3571 10.1444C27.3162 9.87776 27.2189 9.62291 27.0717 9.39686C26.9245 9.17082 26.7308 8.97878 26.5035 8.83357L26.3876 8.75431C26.3752 8.74646 26.3648 8.73571 26.3573 8.72297C26.3499 8.71023 26.3457 8.69588 26.345 8.68115V8.68115C26.3452 8.66548 26.3492 8.6501 26.3566 8.6363C26.364 8.62251 26.3747 8.6107 26.3876 8.60189L26.5035 8.52263Z",
                        fill: "#89D6FF"
                    }), (0, a.jsx)("path", {
                        d: "M0.524839 29.6125C0.752168 29.4673 0.945898 29.2752 1.09309 29.0492C1.24028 28.8231 1.33755 28.5683 1.3784 28.3016L1.51253 27.381C1.51663 27.3594 1.52789 27.3399 1.54448 27.3255C1.56108 27.3111 1.58204 27.3027 1.60399 27.3018V27.3018C1.62627 27.3016 1.64786 27.3095 1.6647 27.3241C1.68154 27.3387 1.69247 27.3589 1.69544 27.381L1.83567 28.3016C1.87543 28.5679 1.9716 28.8226 2.11776 29.0486C2.26391 29.2747 2.45667 29.4669 2.68313 29.6125L2.79897 29.6917C2.81276 29.6997 2.82407 29.7113 2.83161 29.7253C2.83915 29.7393 2.84263 29.7551 2.84165 29.771V29.771C2.84218 29.786 2.83846 29.8008 2.8309 29.8138C2.82335 29.8267 2.81228 29.8372 2.79897 29.8442L2.68313 29.9295C2.45667 30.0751 2.26391 30.2673 2.11776 30.4934C1.9716 30.7194 1.87543 30.9741 1.83567 31.2403L1.69544 32.161C1.69247 32.1831 1.68154 32.2033 1.6647 32.2179C1.64786 32.2325 1.62627 32.2404 1.60399 32.2402C1.58204 32.2392 1.56108 32.2309 1.54448 32.2165C1.52789 32.2021 1.51663 32.1825 1.51253 32.161L1.3784 31.2403C1.33755 30.9737 1.24028 30.7189 1.09309 30.4928C0.945898 30.2668 0.752168 30.0747 0.524839 29.9295L0.408999 29.8503C0.396513 29.8424 0.386111 29.8317 0.378679 29.8189C0.371248 29.8062 0.367008 29.7918 0.366321 29.7771V29.7771C0.365528 29.7604 0.369036 29.7438 0.37651 29.7288C0.383983 29.7139 0.39517 29.7011 0.408999 29.6917L0.524839 29.6125Z",
                        fill: "#3541D6"
                    }), (0, a.jsx)("path", {
                        d: "M14.5781 21.0834L14.8647 16.6449C14.9792 14.8659 14.41 13.1103 13.2734 11.7369L5.37186 2.17094C4.25003 0.823536 2.06735 1.91488 2.49413 3.6159C2.92091 5.31693 3.99396 7.55448 6.2559 9.8591L3.20137 8.51778C1.98809 7.98126 0.829688 9.37135 1.57351 10.4749C2.83556 12.3527 5.05482 14.4135 8.84707 14.8951L7.08508 15.5353C6.15835 15.8706 6.17664 17.1814 7.10946 17.5046C8.43858 17.9618 10.1335 18.2423 11.6638 17.5655C11.6638 17.5655 11.5297 19.7604 12.9076 21.5956C13.4258 22.2845 14.5233 21.9431 14.5781 21.0834Z",
                        fill: "white"
                    }), (0, a.jsx)("path", {
                        d: "M32.7407 25.4545C32.9236 27.1067 32.9663 28.3992 33.6369 28.3261C34.3076 28.2529 35.3441 26.8384 35.1611 25.1862C34.9782 23.5339 33.643 22.2658 32.9724 22.339C32.3017 22.4121 32.5578 23.8022 32.7407 25.4545Z",
                        fill: "white"
                    }), (0, a.jsx)("defs", {
                        children: (0, a.jsxs)("linearGradient", {
                            id: "paint0_linear_859_60333",
                            x1: "34.2419",
                            y1: "5.70262",
                            x2: "5.61649",
                            y2: "53.1558",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, a.jsx)("stop", {
                                offset: "0.14",
                                "stop-color": "#FFE45C"
                            }), (0, a.jsx)("stop", {
                                offset: "0.83",
                                "stop-color": "#FFC31A"
                            })]
                        })
                    })]
                })
            }
        },
        16108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                acceptMessageRequest: function() {
                    return o
                },
                clearMessageRequestState: function() {
                    return u
                },
                markAsMessageRequest: function() {
                    return d
                },
                rejectMessageRequest: function() {
                    return c
                },
                rejectMessageRequestBatch: function() {
                    return f
                },
                fetchUserCountryCode: function() {
                    return h
                }
            });
            var a = n("872717"),
                s = n("913144"),
                l = n("437822"),
                i = n("773163"),
                r = n("49111");
            async function o(e) {
                await a.default.put({
                    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: i.MessageRequestConsentStatusTypes.ACCEPTED
                    }
                }), s.default.dispatch({
                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                    channelId: e
                })
            }

            function u(e) {
                return a.default.put({
                    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: i.MessageRequestConsentStatusTypes.UNSPECIFIED
                    }
                })
            }

            function d(e) {
                return a.default.put({
                    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: i.MessageRequestConsentStatusTypes.PENDING
                    }
                })
            }

            function c(e) {
                return a.default.delete({
                    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
                })
            }

            function f(e) {
                return a.default.put({
                    url: r.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
                    body: {
                        channel_ids: e
                    }
                })
            }

            function h() {
                l.default.getLocationMetadata()
            }
        },
        973199: function(e, t, n) {
            "use strict";
            var a, s, l, i;
            n.r(t), n.d(t, {
                MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL: function() {
                    return r
                },
                MessageRequestAnalyticsAction: function() {
                    return a
                },
                LIST_ROW_HEIGHT: function() {
                    return o
                },
                LIST_SECTION_HEIGHT: function() {
                    return u
                },
                BATCH_REJECT_LIMIT: function() {
                    return d
                },
                MessageRequestSections: function() {
                    return s
                }
            });
            let r = "Message Request Accept Confirmation";
            (l = a || (a = {}))[l.ACCEPT = 0] = "ACCEPT", l[l.REJECT = 1] = "REJECT", l[l.ACCEPT_CONFIRMATION_PROMPT = 2] = "ACCEPT_CONFIRMATION_PROMPT", l[l.DISMISS_CONFIRMATION_PROMPT = 3] = "DISMISS_CONFIRMATION_PROMPT", l[l.ACCEPT_HAM_CONFIRMATION_PROMPT = 4] = "ACCEPT_HAM_CONFIRMATION_PROMPT", l[l.DISMISS_HAM_CONFIRMATION_PROMPT = 5] = "DISMISS_HAM_CONFIRMATION_PROMPT";
            let o = 73,
                u = 26,
                d = 100;
            (i = s || (s = {})).REQUESTS = "REQUESTS", i.SPAM = "SPAM"
        },
        997011: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openAcceptMessageRequestConfirmModal: function() {
                    return o
                },
                onMarkAsNotSpamConfirmationModal: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("599110"),
                i = n("973199"),
                r = n("49111");

            function o(e) {
                let {
                    channelId: t,
                    onConfirm: o,
                    onCancel: u
                } = e;
                l.default.track(r.AnalyticEvents.OPEN_MODAL, {
                    type: i.MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL,
                    channel_id: t
                }), (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("950535").then(n.bind(n, "950535"));
                    return t => (0, a.jsx)(e, {
                        onConfirm: o,
                        onDismiss: u,
                        ...t
                    })
                })
            }

            function u(e) {
                let {
                    onConfirm: t,
                    onCancel: l
                } = e;
                (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("909971").then(n.bind(n, "909971"));
                    return n => (0, a.jsx)(e, {
                        onConfirm: t,
                        onDismiss: l,
                        ...n
                    })
                })
            }
        },
        83722: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n("446674"),
                s = n("913144"),
                l = n("692038"),
                i = n("697218"),
                r = n("288518"),
                o = n("486503");
            let u = {},
                d = new Set;

            function c(e) {
                return r.default.isMessageRequest(e) || o.default.isSpam(e)
            }

            function f(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!c(e) || null != t && e !== (null == t ? void 0 : t.channel_id)) return;
                let a = null == t ? null : (0, l.createMessageRecord)(t);
                u[e] = {
                    loaded: !0,
                    error: n,
                    message: a
                }
            }
            class h extends a.default.Store {
                initialize() {
                    this.waitFor(r.default, o.default, i.default)
                }
                shouldLoadMessageRequestPreview(e) {
                    return !d.has(e)
                }
                getMessageRequestPreview(e) {
                    return !(e in u) && (u[e] = {
                        loaded: !1,
                        error: !1,
                        message: null
                    }), u[e]
                }
            }
            h.displayName = "MessageRequestPreviewStore";
            var C = new h(s.default, {
                CONNECTION_OPEN: function() {
                    u = {}, d.clear()
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    c(t.id) && d.add(t.id)
                },
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    for (let e of t) !c(e.id) && (d.delete(e.id), delete u[e.id])
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    d.delete(t.id), delete u[t.id]
                },
                MESSAGE_CREATE: function(e) {
                    if (e.isPushNotification) return !1;
                    f(e.message.channel_id, e.message)
                },
                MESSAGE_UPDATE: function(e) {
                    let t = e.message.channel_id;
                    if (null == t) return !1;
                    let n = u[t];
                    if (null == n || null == n.message) return !1;
                    u[t] = {
                        ...n,
                        message: (0, l.updateMessageRecord)(n.message, e.message)
                    }
                },
                MESSAGE_DELETE: function(e) {
                    if (!c(e.channelId)) return !1;
                    u[e.channelId] = {
                        loaded: !0,
                        error: !1,
                        message: null
                    }
                },
                LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function(e) {
                    let {
                        requestedChannelIds: t,
                        supplementalData: n
                    } = e, a = new Set([...t]);
                    for (let e of (n.forEach(e => {
                            f(e.channel_id, e.message_preview), a.delete(e.channel_id)
                        }), Array.from(a))) f(e, null)
                },
                LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR: function(e) {
                    let {
                        requestedChannelIds: t
                    } = e;
                    t.forEach(e => {
                        f(e, null, !0)
                    })
                }
            })
        },
        773163: function(e, t, n) {
            "use strict";
            var a, s;
            n.r(t), n.d(t, {
                MessageRequestConsentStatusTypes: function() {
                    return a
                }
            }), (s = a || (a = {}))[s.UNSPECIFIED = 0] = "UNSPECIFIED", s[s.PENDING = 1] = "PENDING", s[s.ACCEPTED = 2] = "ACCEPTED", s[s.REJECTED = 3] = "REJECTED"
        },
        674015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsMessageRequest: function() {
                    return l
                }
            });
            var a = n("446674"),
                s = n("288518");

            function l(e) {
                return (0, a.useStateFromStores)([s.default], () => s.default.isMessageRequest(e), [e])
            }
        },
        228430: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsSpamMessageRequest: function() {
                    return l
                }
            });
            var a = n("446674"),
                s = n("486503");

            function l(e) {
                return (0, a.useStateFromStores)([s.default], () => s.default.isSpam(e), [e])
            }
        },
        916650: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("884691"),
                s = n("446674"),
                l = n("697218"),
                i = n("16108"),
                r = n("288518");
            let o = new Set(["GB"]);

            function u() {
                let e = (0, s.useStateFromStores)([r.default], () => r.default.getUserCountryCode()),
                    t = !1 === (0, s.useStateFromStores)([l.default], () => {
                        var e;
                        return null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
                    });
                return a.useEffect(() => {
                    null == e && (0, i.fetchUserCountryCode)()
                }, [e]), !!(null != e && o.has(e.alpha2)) && !!t || !1
            }
        },
        7643: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMessageRequestActions: function() {
                    return m
                }
            });
            var a = n("884691"),
                s = n("767590"),
                l = n.n(s),
                i = n("448993"),
                r = n("377114"),
                o = n("713135"),
                u = n("506885"),
                d = n("845579"),
                c = n("599110"),
                f = n("16108"),
                h = n("997011"),
                C = n("541881"),
                E = n("973199"),
                p = n("49111");

            function m(e) {
                let {
                    user: t,
                    onAcceptSuccess: n,
                    onRejectSuccess: s,
                    onError: m
                } = e, g = (0, C.default)(), [_, S] = a.useState(!1), [A, T] = a.useState(!1), [M, I] = a.useState(!1), [N, L] = a.useState(!1), [R, v] = a.useState(!1), y = _ || A || M, x = a.useCallback(async e => {
                    if (!y) {
                        S(!0);
                        try {
                            await (0, f.acceptMessageRequest)(e), L(!0), null == n || n()
                        } catch (t) {
                            let e = new i.APIError(t);
                            null == m || m(e)
                        } finally {
                            S(!1)
                        }
                    }
                }, [y, n, m]), O = a.useCallback(async e => {
                    if (!y) {
                        T(!0);
                        try {
                            await (0, f.rejectMessageRequest)(e), v(!0), null == s || s()
                        } catch (t) {
                            let e = new i.APIError(t);
                            null == m || m(e)
                        } finally {
                            T(!1)
                        }
                    }
                }, [y, s, m]), D = a.useCallback(async e => {
                    if (y) return;
                    T(!0);
                    let t = l(e, E.BATCH_REJECT_LIMIT);
                    try {
                        for (let e of t) await (0, f.rejectMessageRequestBatch)(e);
                        v(!0), null == s || s()
                    } catch (t) {
                        let e = new i.APIError(t);
                        null == m || m(e)
                    } finally {
                        T(!1)
                    }
                }, [y, s, m]), P = a.useCallback(async e => {
                    if (y) return;
                    if (null != t && null == o.default.getMutualGuilds(t.id)) {
                        I(!0);
                        try {
                            await (0, u.default)(t.id, t.getAvatarURL(void 0, 80), {
                                withMutualGuilds: !0,
                                withMutualFriendsCount: !0
                            })
                        } catch (e) {} finally {
                            I(!1)
                        }
                    }
                    let n = async () => {
                        var n;
                        let a = null != t ? null === (n = o.default.getMutualGuilds(t.id)) || void 0 === n ? void 0 : n.map(e => e.guild.id) : [];
                        c.default.track(p.AnalyticEvents.MESSAGE_REQUEST_ACTION, {
                            action: E.MessageRequestAnalyticsAction.ACCEPT_CONFIRMATION_PROMPT,
                            channel_id: e,
                            mutual_guild_ids: null != a ? a : [],
                            other_user_id: null == t ? void 0 : t.id
                        }), await x(e)
                    };
                    (0, h.openAcceptMessageRequestConfirmModal)({
                        channelId: e,
                        onConfirm: n,
                        onCancel: () => {
                            var n;
                            let a = null != t ? null === (n = o.default.getMutualGuilds(t.id)) || void 0 === n ? void 0 : n.map(e => e.guild.id) : [];
                            c.default.track(p.AnalyticEvents.MESSAGE_REQUEST_ACTION, {
                                action: E.MessageRequestAnalyticsAction.DISMISS_CONFIRMATION_PROMPT,
                                channel_id: e,
                                mutual_guild_ids: null != a ? a : [],
                                other_user_id: null == t ? void 0 : t.id
                            })
                        }
                    })
                }, [x, y, t]), b = a.useCallback((e, t) => {
                    let n = (n, a) => {
                            a && d.NonSpamRetrainingOptIn.updateSetting(n), n && null != t && (0, r.submitHamReportForFirstDM)(t), x(e.id), c.default.track(p.AnalyticEvents.MESSAGE_REQUEST_ACTION, {
                                action: E.MessageRequestAnalyticsAction.ACCEPT_HAM_CONFIRMATION_PROMPT,
                                channel_id: e.id,
                                is_dont_show_again_checked: a,
                                non_spam_retraining_opt_in: n
                            })
                        },
                        a = d.NonSpamRetrainingOptIn.getSetting();
                    null == a ? (0, h.onMarkAsNotSpamConfirmationModal)({
                        channel: e,
                        onConfirm: n,
                        onCancel: () => {
                            c.default.track(p.AnalyticEvents.MESSAGE_REQUEST_ACTION, {
                                action: E.MessageRequestAnalyticsAction.DISMISS_HAM_CONFIRMATION_PROMPT,
                                channel_id: e.id
                            })
                        }
                    }) : n(a)
                }, [x]);
                return {
                    acceptMessageRequest: g ? P : x,
                    rejectMessageRequest: O,
                    rejectAll: D,
                    markAsNotSpam: b,
                    isAcceptLoading: _,
                    isRejectLoading: A,
                    isUserProfileLoading: M,
                    isOptimisticAccepted: N,
                    isOptimisticRejected: R
                }
            }
        },
        389495: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMessageRequestPreview: function() {
                    return C
                }
            });
            var a = n("917351"),
                s = n.n(a),
                l = n("446674"),
                i = n("872717"),
                r = n("913144"),
                o = n("377253"),
                u = n("660478"),
                d = n("83722"),
                c = n("49111");
            let f = new Set,
                h = null;

            function C(e) {
                let {
                    id: t
                } = e, {
                    loaded: n,
                    message: a,
                    error: s
                } = (0, l.useStateFromStoresObject)([d.default, o.default, u.default], () => {
                    let e = u.default.lastMessageId(t),
                        n = d.default.getMessageRequestPreview(t);
                    if (null == n.message && null != e) {
                        let n = o.default.getMessage(t, e);
                        if (null != n) return {
                            loaded: !0,
                            error: !1,
                            message: n
                        }
                    }
                    return n
                }, [t]), i = (0, l.useStateFromStores)([d.default], () => d.default.shouldLoadMessageRequestPreview(t), [t]);
                return !n && null == a && i && function(e) {
                    f.add(e), null == h && (h = setTimeout(E, 0))
                }(t), {
                    loaded: n,
                    error: s,
                    message: a
                }
            }
            async function E() {
                try {
                    for (; !s.isEmpty(f);) await p()
                } finally {
                    h = null
                }
            }
            async function p() {
                let e = Array.from(f).slice(0, 25);
                try {
                    let t = await i.default.get({
                        url: c.Endpoints.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA,
                        query: {
                            channel_ids: e
                        }
                    });
                    r.default.dispatch({
                        type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS",
                        requestedChannelIds: e,
                        supplementalData: t.body
                    })
                } catch (t) {
                    r.default.dispatch({
                        type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR",
                        requestedChannelIds: e
                    })
                } finally {
                    for (let t of e) f.delete(t)
                }
            }
        },
        785770: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMessageRequestSidebarState: function() {
                    return i
                }
            });
            var a = n("446674"),
                s = n("582713"),
                l = n("982108");

            function i() {
                let e = (0, a.useStateFromStores)([l.default], () => l.default.getSidebarState(l.MESSAGE_REQUESTS_BASE_CHANNEL_ID)),
                    t = (null == e ? void 0 : e.type) === s.SidebarType.VIEW_MESSAGE_REQUEST ? e : null,
                    n = null == t ? void 0 : t.channelId,
                    i = (null == t ? void 0 : t.details) != null && t.details.type === s.SidebarOpenDetailsType.MESSAGE_REQUEST && t.details.hasSingleMessageRequest;
                return {
                    channelId: n,
                    hasSingleMessageRequest: i
                }
            }
        },
        541881: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("916650");

            function s() {
                let e = (0, a.default)();
                return e
            }
        },
        888296: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShouldShowMessageRequestBanner: function() {
                    return i
                }
            });
            var a = n("446674"),
                s = n("288518"),
                l = n("674015");

            function i(e) {
                let t = (0, l.useIsMessageRequest)(e),
                    n = (0, a.useStateFromStores)([s.default], () => s.default.isAcceptedOptimistic(e), [e]);
                return t && !n
            }
        },
        986975: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessageRequestDMBanner: function() {
                    return _
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("446674"),
                i = n("77078"),
                r = n("594864"),
                o = n("144491"),
                u = n("208021"),
                d = n("982108"),
                c = n("42203"),
                f = n("697218"),
                h = n("7643"),
                C = n("785770"),
                E = n("782340"),
                p = n("46716");
            let m = n("648529");

            function g(e) {
                let {
                    channel: t
                } = e, n = t.id, r = (0, l.useStateFromStores)([f.default], () => f.default.getUser(t.recipients[0]), [t]), c = s.useCallback(() => {
                    (0, i.showToast)((0, i.createToast)(E.default.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, i.ToastType.FAILURE))
                }, []), {
                    hasSingleMessageRequest: m
                } = (0, C.useMessageRequestSidebarState)(), g = s.useCallback(() => {
                    u.default.closeChannelSidebar(d.MESSAGE_REQUESTS_BASE_CHANNEL_ID)
                }, []), _ = s.useCallback(() => {
                    u.default.closeChannelSidebar(d.MESSAGE_REQUESTS_BASE_CHANNEL_ID), !0 === m && (0, o.transitionToChannel)(n)
                }, [n, m]), {
                    acceptMessageRequest: S,
                    rejectMessageRequest: A,
                    isAcceptLoading: T,
                    isRejectLoading: M,
                    isUserProfileLoading: I,
                    isOptimisticAccepted: N,
                    isOptimisticRejected: L
                } = (0, h.useMessageRequestActions)({
                    user: r,
                    onAcceptSuccess: _,
                    onRejectSuccess: g,
                    onError: c
                }), R = T || M || I || N || L;
                return null == r ? null : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i.Button, {
                        className: p.largeButton,
                        look: i.Button.Looks.LINK,
                        size: i.Button.Sizes.SMALL,
                        color: i.ButtonColors.PRIMARY,
                        submitting: M || L,
                        disabled: R,
                        onClick: e => {
                            e.stopPropagation(), A(n)
                        },
                        children: E.default.Messages.MESSAGE_REQUEST_IGNORE
                    }), (0, a.jsx)(i.Button, {
                        className: p.largeButton,
                        look: i.Button.Looks.FILLED,
                        size: i.Button.Sizes.SMALL,
                        color: i.Button.Colors.BRAND,
                        disabled: R,
                        submitting: T || I || N,
                        onClick: e => {
                            e.stopPropagation(), S(n)
                        },
                        children: E.default.Messages.MESSAGE_REQUEST_ACCEPT
                    })]
                })
            }

            function _(e) {
                let {
                    channelId: t
                } = e, n = (0, l.useStateFromStores)([c.default], () => c.default.getChannel(t), [t]);
                return (0, a.jsx)(r.MessageNoticeBanner, {
                    bannerIcon: m,
                    bannerHeader: E.default.Messages.MESSAGE_REQUEST_BANNER_TITLE,
                    bannerSubtext: E.default.Messages.MESSAGE_REQUEST_BANNER_SUBTITLE,
                    children: (null == n ? void 0 : n.isPrivate()) ? (0, a.jsx)(g, {
                        channel: n
                    }) : null
                })
            }
        },
        28424: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("450911"),
                i = n("377114"),
                r = n("949067"),
                o = n("389495"),
                u = n("782340");

            function d(e) {
                let {
                    channel: t,
                    buttonSize: n = s.ButtonSizes.TINY,
                    className: d,
                    onReportClick: c,
                    onReportSubmit: f,
                    onMouseEnter: h,
                    onMouseLeave: C
                } = e, {
                    error: E,
                    loaded: p
                } = (0, o.useMessageRequestPreview)(t), m = t.isDM() ? t.getRecipientId() : null, g = (0, r.useLongestChannelMessageBeforeReply)(t.id, m);
                if (null == g && (p || E)) return null;
                let _ = () => {
                    null == f || f(), l.default.closePrivateChannel(t.id)
                };
                return (0, a.jsx)(s.Button, {
                    className: d,
                    size: n,
                    color: s.Button.Colors.RED,
                    disabled: null == g,
                    onClick: e => {
                        e.stopPropagation(), null == c || c(), null != g && (0, i.showReportModalForFirstDM)(g, _)
                    },
                    onMouseEnter: h,
                    onMouseLeave: C,
                    children: u.default.Messages.REPORT
                })
            }
        },
        734570: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                handleLegacyCommands: function() {
                    return m
                }
            });
            var a = n("132710"),
                s = n.n(a),
                l = n("223468"),
                i = n("819689"),
                r = n("716241"),
                o = n("385976"),
                u = n("166257"),
                d = n("432173"),
                c = n("845579"),
                f = n("377253"),
                h = n("49111");
            let C = /\\([*?+/])/g,
                E = {
                    tts: {
                        action: () => ({
                            tts: c.EnableTTSCommand.getSetting()
                        })
                    },
                    me: {
                        action: e => ({
                            content: "_".concat(e, "_")
                        })
                    },
                    tableflip: {
                        action: e => ({
                            content: "".concat(e, " (╯\xb0□\xb0)╯︵ ┻━┻").trim()
                        })
                    },
                    unflip: {
                        action: e => ({
                            content: "".concat(e, " ┬─┬ノ( \xba _ \xbaノ)").trim()
                        })
                    },
                    shrug: {
                        action: e => ({
                            content: "".concat(e, " \xaf\\_(ツ)_/\xaf").trim()
                        })
                    },
                    nick: {
                        action(e, t) {
                            let {
                                channel: n
                            } = t;
                            if (null != n.guild_id) return l.default.changeNickname(n.guild_id, n.id, h.ME, e), {
                                content: ""
                            }
                        }
                    },
                    reaction: {
                        match: s.anyScopeRegex(/^\+:(.+?): *$/),
                        action(e, t) {
                            let {
                                isEdit: n,
                                channel: a
                            } = t;
                            if (n || !f.default.hasPresent(a.id)) return;
                            let s = f.default.getMessages(a.id).last();
                            if (null == s || null == s.id) return;
                            let l = o.default.getDisambiguatedEmojiContext(a.guild_id).getByName(e.trim().slice(2, -1));
                            if (null != l) return (0, u.addReaction)(a.id, s.id, (0, d.toReactionEmoji)(l)), {
                                content: ""
                            }
                        }
                    },
                    searchReplace: {
                        match: s.anyScopeRegex(/^s\/((?:.+?)[^\\]|.)\/(.*)/),
                        action(e, t) {
                            var n;
                            let {
                                isEdit: a,
                                channel: s
                            } = t;
                            if (a) return;
                            let l = f.default.getLastEditableMessage(s.id);
                            if (null == l || null == l.id) return {
                                content: ""
                            };
                            let [, r, o] = Array.from(null !== (n = e.match(this.match.regex)) && void 0 !== n ? n : []);
                            r = r.replace(C, (e, t) => t), o = o.replace(C, (e, t) => t);
                            let u = l.content.replace(r, o);
                            return (null == u || "" === u) && 0 === l.attachments.length ? i.default.deleteMessage(s.id, l.id) : e !== l.content && i.default.editMessage(s.id, l.id, {
                                content: u
                            }), {
                                content: ""
                            }
                        }
                    },
                    spoiler: {
                        action: e => ({
                            content: (0, h.MARKDOWN_SPOILER_WRAPPER)(e).trim()
                        })
                    }
                };

            function p(e, t, n, a) {
                return r.default.trackWithMetadata(h.AnalyticEvents.SLASH_COMMAND_USED, {
                    command: e
                }), t.action(n, a)
            }

            function m(e, t) {
                for (let a in E) {
                    let s = E[a];
                    if (null != s.match) {
                        var n;
                        if (null === (n = s.match.regex) || void 0 === n ? void 0 : n.test(e)) return p(a, s, e, t);
                        continue
                    }
                    if (c.UseLegacyChatInput.getSetting() && "/" === e[0]) {
                        let n = e.split(" "),
                            l = n[0].slice(1);
                        if (a === l && null != s.action) return p(a, s, n.slice(1).join(" "), t)
                    }
                }
            }
            Object.setPrototypeOf(E, null)
        },
        51714: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("852303"),
                s = n.n(a),
                l = n("637612"),
                i = n("336696"),
                r = n("888400"),
                o = n("299039"),
                u = n("459776"),
                d = n("654017"),
                c = n("894488"),
                f = n("49111");

            function h(e) {
                let t, n, a, {
                        channel: h,
                        messages: C,
                        highlightedMessageIds: E,
                        oldestUnreadMessageId: p,
                        treatSpam: m,
                        summaries: g,
                        selectedSummary: _
                    } = e,
                    S = [],
                    A = s(E),
                    T = !1,
                    M = 0,
                    I = null != p ? o.default.extractTimestamp(p) : null,
                    N = null;
                return C.forEach(e => {
                    if (null != g && g.length > 0) {
                        let t = o.default.extractTimestamp(e.id);
                        for (let e = 0; w = e < (null == g ? void 0 : g.length), w; e++) {
                            if (null == g[e]) continue;
                            let n = o.default.extractTimestamp(g[e].startId),
                                a = o.default.extractTimestamp(g[e].endId);
                            if (t >= n && t <= a) {
                                if (N === g[e].id) break;
                                S.push({
                                    type: f.ChannelStreamTypes.DIVIDER,
                                    content: g[e].topic,
                                    contentKey: g[e].id
                                }), N = g[e].id;
                                break
                            }
                        }
                    }
                    let s = (0, r.dateFormat)(e.timestamp, "LL");
                    s !== t && null == N && (S.push({
                        type: f.ChannelStreamTypes.DIVIDER,
                        content: s,
                        contentKey: s
                    }), t = s);
                    let i = S[S.length - 1],
                        E = null,
                        L = (0, d.isSpam)(e);
                    T = T || L;
                    let R = function(e, t, n) {
                        if (l.MessageTypesSets.NON_COLLAPSIBLE.has(t.type));
                        else if (t.blocked) return f.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED;
                        else if ((0, d.isSpamSupported)(e) && n) return f.ChannelStreamTypes.MESSAGE_GROUP_SPAMMER;
                        return null
                    }(h, e, L && m);
                    if (null !== R) {
                        ;
                        let t, n;
                        [E, i] = (P = S, b = e, j = R, n = F = i, null == F || F.type !== j ? (t = {
                            type: j,
                            content: [],
                            key: b.id,
                            isHighlight: !1
                        }, P.push(t)) : n = (t = F).content[t.content.length - 1], [t, n])
                    }
                    if (p === e.id && null != I) {
                        if (null != i && i.type === f.ChannelStreamTypes.DIVIDER) i.unreadId = e.id, I = null;
                        else if (null !== E) {
                            ;
                            U = E, H = h, (k = e).isFirstMessageInForumPost(H) || U.content.push({
                                type: f.ChannelStreamTypes.DIVIDER,
                                unreadId: k.id
                            }), U.hasUnread = !0, I = null
                        } else !e.isFirstMessageInForumPost(h) && S.push({
                            type: f.ChannelStreamTypes.DIVIDER,
                            unreadId: e.id
                        }), I = null
                    } else null != I && o.default.extractTimestamp(e.id) > I && (!e.isFirstMessageInForumPost(h) && S.push({
                        type: f.ChannelStreamTypes.DIVIDER,
                        unreadId: e.id
                    }), I = null);
                    let v = (null === (G = i) || void 0 === G ? void 0 : G.type) === f.ChannelStreamTypes.MESSAGE ? a : i;
                    (0, u.isNewGroupItem)(h, v, e) && (n = e.id);
                    let y = {
                        type: e.type === f.MessageTypes.THREAD_STARTER_MESSAGE ? f.ChannelStreamTypes.THREAD_STARTER_MESSAGE : f.ChannelStreamTypes.MESSAGE,
                        content: e,
                        groupId: n,
                        isHighlight: null != A[e.id] || n !== e.id && (null === (B = a) || void 0 === B ? void 0 : B.isHighlight)
                    };
                    n === e.id && (a = y, M = S.length);
                    let {
                        jumpSequenceId: x,
                        jumpFlash: O,
                        jumpTargetId: D
                    } = C;
                    if (O && e.id === D && null != x && (y.flashKey = x), C.jumpTargetId === e.id && (y.jumpTarget = !0), null != _ && e.id === _.startId && _.count > 1 && S.push({
                            type: f.ChannelStreamTypes.DIVIDER,
                            content: _.topic,
                            contentKey: _.startId,
                            isSummaryDivider: !0
                        }), null !== E) E.content.push(y), y.jumpTarget && (E.hasJumpTarget = !0);
                    else {
                        if (y.isHighlight) {
                            a.isHighlight = !0;
                            for (var P, b, j, F, U, H, k, G, B, w, V = S.length - 1; V > M; V--) {
                                let e = S[V];
                                (0, c.isChannelStreamMessage)(e) && (e.isHighlight = !0)
                            }
                        }
                        S.push(y)
                    }
                    e.isFirstMessageInForumPost(h) && S.push({
                        type: f.ChannelStreamTypes.FORUM_POST_ACTION_BAR
                    }), null != _ && e.id === _.endId && _.count > 1 && S.push({
                        type: f.ChannelStreamTypes.DIVIDER,
                        contentKey: _.endId,
                        isSummaryDivider: !0
                    })
                }), T && (0, d.isSpamSupported)(h) && i.default.trackExposure({
                    location: "416cc9_1"
                }), S
            }
        },
        154864: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MESSAGE_ID_PREFIX: function() {
                    return a
                },
                getMessageDOMId: function() {
                    return s
                }
            });
            let a = "chat-messages";

            function s(e, t) {
                return "".concat(a, "-").concat(e, "-").concat(t)
            }
        },
        384996: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("884691"),
                s = n("716241"),
                l = n("599110"),
                i = n("299039"),
                r = n("49111");

            function o(e) {
                let {
                    guildId: t,
                    channelId: n,
                    highlightedMessageIds: o,
                    setNumHighlightsVisited: u,
                    topVisibleMessage: d,
                    middleVisibleMessage: c
                } = e, [f, h] = a.useState(!1), [C, E] = a.useState(!1);
                return a.useEffect(() => {
                    !C && null != d && null != c && E(!0)
                }, [d, c, C, E]), a.useEffect(() => {
                    if (!f && o.length > 0 && C) {
                        let e = o.filter(e => i.default.compare(e, d) >= 0 && i.default.compare(c, e) >= 0).length;
                        if (e > 0) {
                            for (let a = 0; a < e; a++) l.default.track(r.AnalyticEvents.CHANNEL_HIGHLIGHTS_ACKED, {
                                ...(0, s.collectGuildAnalyticsMetadata)(t),
                                ...(0, s.collectChannelAnalyticsMetadataFromId)(n),
                                message_id: o[a],
                                index: a,
                                ack_type: "landing"
                            });
                            u(e)
                        }
                        h(!0)
                    }
                }, [o, C, d, c, f, h, u, t, n]), a.useEffect(() => {
                    if (null == d) return;
                    let e = o.filter(e => i.default.compare(d, e) > 0).length;
                    u(a => {
                        if (e > a)
                            for (let i = a; i < e; i++) l.default.track(r.AnalyticEvents.CHANNEL_HIGHLIGHTS_ACKED, {
                                ...(0, s.collectGuildAnalyticsMetadata)(t),
                                ...(0, s.collectChannelAnalyticsMetadataFromId)(n),
                                message_id: o[i],
                                index: i,
                                ack_type: "scroll"
                            });
                        return Math.max(a, e)
                    })
                }, [d, o, u, t, n]), f
            }
        },
        61505: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsRelationshipTypeSpamReportable: function() {
                    return i
                }
            });
            var a = n("446674"),
                s = n("27618"),
                l = n("49111");

            function i(e) {
                let t = (0, a.useStateFromStores)([s.default], () => s.default.getRelationshipType(e), [e]);
                return t === l.RelationshipTypes.NONE || t === l.RelationshipTypes.BLOCKED || t === l.RelationshipTypes.PENDING_INCOMING
            }
        },
        949067: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useLongestChannelMessageBeforeReply: function() {
                    return l
                }
            });
            var a = n("446674"),
                s = n("377253");

            function l(e, t) {
                return (0, a.useStateFromStores)([s.default], () => {
                    if (null == t) return;
                    let n = s.default.getMessages(e),
                        a = n.findOldest(e => e.author.id === t);
                    if (null == a) return;
                    let l = n.toArray();
                    for (let e of l) {
                        var i;
                        if (e.author.id !== t) break;
                        e.content.length > (null === (i = a) || void 0 === i ? void 0 : i.content.length) && (a = e)
                    }
                    return a
                }, [e, t])
            }
        },
        366757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShowConvoStarterInDM: function() {
                    return u
                }
            });
            var a = n("446674"),
                s = n("288518"),
                l = n("933152"),
                i = n("377253"),
                r = n("27618"),
                o = n("49111");

            function u(e) {
                let t = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some(e => e.bot),
                    n = t ? e.getRecipientId() : null,
                    u = (0, l.useStrangerDangerWarning)(e.id, "dm_convo_starter");
                return (0, a.useStateFromStores)([i.default, s.default, r.default], () => {
                    if (null != u || !t || s.default.isMessageRequest(e.id) || null != n && r.default.getRelationshipType(n) === o.RelationshipTypes.BLOCKED) return !1;
                    let a = i.default.getMessages(e.id),
                        l = a.ready && !a.hasMoreBefore && !a.hasMoreAfter && a.length < 25;
                    return l && !i.default.hasCurrentUserSentMessage(e.id)
                }, [u, t, e.id, n])
            }
        },
        738352: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("301165"),
                i = n("77078");

            function r(e) {
                let {
                    children: t,
                    className: n,
                    flashKey: r
                } = e, o = (0, i.useToken)(i.tokens.colors.BACKGROUND_MESSAGE_HIGHLIGHT).spring({
                    opacity: 1
                }), u = (0, i.useToken)(i.tokens.colors.BACKGROUND_MESSAGE_HIGHLIGHT).spring({
                    opacity: 0
                }), [d, c] = (0, l.useSpring)(() => ({
                    immediate: !0,
                    from: {
                        backgroundColor: o
                    }
                }));
                return s.useEffect(() => {
                    c({
                        reset: !0,
                        immediate: !0,
                        to: {
                            backgroundColor: o
                        }
                    }), c({
                        delay: 1e3,
                        immediate: !1,
                        to: {
                            backgroundColor: u
                        }
                    })
                }, [r, c]), (0, a.jsx)(l.animated.div, {
                    style: d,
                    className: n,
                    children: t
                })
            }
        },
        556118: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getElementFromMessage: function() {
                    return Z
                },
                ThreadStarterChatMessage: function() {
                    return q
                },
                default: function() {
                    return Q
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("627445"),
                o = n.n(r),
                u = n("974667"),
                d = n("446674"),
                c = n("77078"),
                f = n("206230"),
                h = n("193865"),
                C = n("788794"),
                E = n("37930"),
                p = n("619259"),
                m = n("405645"),
                g = n("685841"),
                _ = n("256572"),
                S = n("393414"),
                A = n("845579"),
                T = n("42203"),
                M = n("836417"),
                I = n("780571"),
                N = n("568734"),
                L = n("154864"),
                R = n("913491"),
                v = n("574073"),
                y = n("738352"),
                x = n("865343"),
                O = n("380986"),
                D = n("85470"),
                P = n("969706"),
                b = n("39331"),
                j = n("68480"),
                F = n("115859"),
                U = n("922177"),
                H = n("789790"),
                k = n("227984"),
                G = n("82080"),
                B = n("535993"),
                w = n("144553"),
                V = n("702905"),
                W = n("894488"),
                z = n("49111"),
                K = n("782340"),
                Y = n("877671");

            function Z(e, t, n) {
                return e.getElementById((0, L.getMessageDOMId)(t, n))
            }

            function q(e) {
                var t;
                let {
                    id: n,
                    message: s,
                    message: {
                        messageReference: l
                    },
                    compact: r = !1,
                    className: c
                } = e;
                o(s.type === z.MessageTypes.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
                let {
                    ...f
                } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""), h = (0, d.useStateFromStores)([_.default], () => _.default.getMessageByReference(l)), {
                    popouts: C,
                    setPopout: E
                } = (0, P.default)(s.id, W.DEFAULT_POPOUTS), p = (0, v.default)(s), m = (0, x.getMessageAriaLabelledBy)(s), g = (0, x.getMessageAriaDescribedBy)(s);
                return s.type === z.MessageTypes.THREAD_STARTER_MESSAGE && null != h && h.state === _.ReferencedMessageState.LOADED ? (0, a.jsx)(X, {
                    ...e,
                    message: h.message,
                    groupId: h.message.id
                }) : (0, a.jsx)(I.default, {
                    ...f,
                    id: n,
                    compact: r,
                    className: i(c, {
                        [Y.message]: !0,
                        [Y.cozyMessage]: !r,
                        [Y.systemMessage]: !0,
                        [Y.groupStart]: !0
                    }),
                    childrenHeader: (0, k.default)({
                        messageProps: e,
                        setPopout: E,
                        messagePopouts: C,
                        replyReference: l,
                        author: p
                    }),
                    childrenSystemMessage: (0, V.default)(e),
                    childrenMessageContent: null,
                    "aria-labelledby": m,
                    "aria-describedby": g,
                    hasThread: !1
                })
            }

            function X(e) {
                var t, n, l, r, o;
                let {
                    id: C,
                    message: E,
                    message: {
                        id: p,
                        channel_id: g
                    },
                    channel: {
                        guild_id: T
                    },
                    compact: M = !1,
                    className: L,
                    groupId: y
                } = e, j = E.type === z.MessageTypes.REPLY ? E.messageReference : void 0, {
                    onFocus: U,
                    ...H
                } = (0, u.useListItem)(null !== (n = e.id) && void 0 !== n ? n : ""), {
                    isFocused: B,
                    handleFocus: Z,
                    handleBlur: q
                } = (0, O.useFocusInside)(U), {
                    popouts: X,
                    selected: Q,
                    setPopout: J
                } = (0, P.default)(E.id, W.DEFAULT_POPOUTS), $ = A.InlineEmbedMedia.useSetting(), ee = A.RenderEmbeds.useSetting(), et = $ && ee, en = (0, d.useStateFromStores)([_.default], () => _.default.getMessageByReference(j)), ea = (0, h.useShowImprovedMarkdownUserExperimentConfig)((null !== (l = E.editedTimestamp) && void 0 !== l ? l : E.timestamp).valueOf()), es = (0, h.useShowImprovedMarkdownGuildExperimentConfig)(null !== (r = null === (t = e.channel) || void 0 === t ? void 0 : t.guild_id) && void 0 !== r ? r : "", (null !== (o = E.editedTimestamp) && void 0 !== o ? o : E.timestamp).valueOf()), {
                    handleMouseEnter: el,
                    handleMouseLeave: ei,
                    isHovered: er
                } = (0, O.useHoveredMessage)(y, E.author.id, Q), eo = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled), eu = Q || eo && B, ed = eu || er, {
                    content: ec,
                    hasSpoilerEmbeds: ef
                } = (0, b.default)(E, {
                    hideSimpleEmbedContent: et,
                    isInteracting: ed,
                    formatInline: !1,
                    allowList: ea.showListsAndHeaders || es.showListsAndHeaders,
                    allowHeading: ea.showListsAndHeaders || es.showListsAndHeaders,
                    allowLinks: ea.showMaskedLinks || es.showMaskedLinks,
                    previewLinkTarget: ea.showMaskedLinks || es.showMaskedLinks
                }), eh = (0, D.default)(p, g, eo), eC = (0, v.default)(E), eE = (0, x.getMessageAriaLabelledBy)(E, y), ep = (0, x.getMessageAriaDescribedBy)(E), em = (0, G.default)(e, ec, !1), eg = s.useCallback(() => (0, S.transitionToGuild)(T, g, p), [T, g, p]), e_ = (0, m.useRoleIcon)({
                    guildId: T,
                    roleId: eC.iconRoleId
                });
                return (0, a.jsxs)("div", {
                    className: Y.quotedChatMessage,
                    children: [(0, a.jsx)(c.Clickable, {
                        className: Y.jump,
                        onClick: eg,
                        "aria-label": K.default.Messages.JUMP,
                        children: K.default.Messages.JUMP
                    }), (0, a.jsx)(I.default, {
                        ...H,
                        id: C,
                        compact: M,
                        className: i(L, {
                            [Y.message]: !0,
                            [Y.cozyMessage]: !M,
                            [Y.mentioned]: E.mentioned && !(0, R.default)(E),
                            [Y.ephemeral]: (0, N.hasFlag)(E.flags, z.MessageFlags.EPHEMERAL),
                            [Y.systemMessage]: (0, R.default)(E),
                            [Y.groupStart]: E.id === y || E.type === z.MessageTypes.REPLY,
                            [Y.selected]: eu
                        }),
                        zalgo: !0,
                        onKeyDown: eh,
                        onFocus: Z,
                        onBlur: q,
                        childrenRepliedMessage: (0, w.default)(e, J, X, j, en),
                        childrenHeader: (0, k.default)({
                            messageProps: e,
                            setPopout: J,
                            messagePopouts: X,
                            replyReference: j,
                            author: eC,
                            repliedMessage: en,
                            roleIcon: e_
                        }),
                        childrenAccessories: (0, F.default)({
                            channelMessageProps: e,
                            hasSpoilerEmbeds: ef,
                            isInteracting: ed,
                            renderThreadAccessory: !1,
                            renderComponentAccessory: !1,
                            renderSuppressEmbeds: !1
                        }),
                        childrenSystemMessage: (0, V.default)(e),
                        childrenMessageContent: em,
                        onMouseMove: el,
                        onMouseLeave: ei,
                        "aria-labelledby": eE,
                        "aria-describedby": ep,
                        hasThread: !1
                    })]
                })
            }
            var Q = s.memo(function(e) {
                var t, n, l;
                let r;
                let {
                    id: S,
                    message: L,
                    message: {
                        id: Z
                    },
                    channel: q,
                    channel: {
                        id: X
                    },
                    compact: Q = !1,
                    className: J,
                    flashKey: $,
                    groupId: ee,
                    isHighlight: et,
                    renderContentOnly: en
                } = e;
                o(L.type !== z.MessageTypes.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
                let ea = z.MessageTypesWithLazyLoadedReferences.has(L.type) ? L.messageReference : void 0,
                    {
                        onFocus: es,
                        ...el
                    } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""),
                    ei = A.InlineEmbedMedia.useSetting(),
                    er = A.RenderEmbeds.useSetting(),
                    eo = ei && er,
                    eu = (0, d.useStateFromStores)([_.default], () => _.default.getMessageByReference(ea)),
                    {
                        popouts: ed,
                        selected: ec,
                        setPopout: ef
                    } = (0, P.default)(L.id, W.DEFAULT_POPOUTS),
                    eh = (0, O.useContextMenuMessage)(L, q, ef),
                    eC = (0, O.useClickMessage)(L, q),
                    {
                        handleMouseEnter: eE,
                        handleMouseLeave: ep,
                        hasHovered: em,
                        isHovered: eg
                    } = (0, O.useHoveredMessage)(ee, L.author.id, ec),
                    {
                        isFocused: e_,
                        hasFocused: eS,
                        handleFocus: eA,
                        handleBlur: eT
                    } = (0, O.useFocusInside)(es),
                    eM = (0, d.useStateFromStores)([M.default], () => M.default.isEditing(X, Z), [X, Z]),
                    eI = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled),
                    eN = ec || eM || eI && e_,
                    eL = eN || eg,
                    eR = (0, d.useStateFromStores)([T.default], () => L.hasFlag(z.MessageFlags.HAS_THREAD) && T.default.getChannel(L.id)),
                    ev = L.isFirstMessageInForumPost(q),
                    ey = (0, h.useShowImprovedMarkdownUserExperimentConfig)((null !== (n = L.editedTimestamp) && void 0 !== n ? n : L.timestamp).valueOf()),
                    ex = (0, h.useShowImprovedMarkdownGuildExperimentConfig)(q.guild_id, (null !== (l = L.editedTimestamp) && void 0 !== l ? l : L.timestamp).valueOf()),
                    {
                        content: eO,
                        hasSpoilerEmbeds: eD
                    } = (0, b.default)(L, {
                        hideSimpleEmbedContent: eo,
                        isInteracting: eL,
                        formatInline: !1,
                        allowList: ev || ey.showListsAndHeaders || ex.showListsAndHeaders,
                        allowHeading: ev || ey.showListsAndHeaders || ex.showListsAndHeaders,
                        allowLinks: ey.showMaskedLinks || ex.showMaskedLinks,
                        previewLinkTarget: ey.showMaskedLinks || ex.showMaskedLinks
                    }),
                    eP = (0, D.default)(Z, X, eI),
                    eb = (0, v.default)(L),
                    ej = (0, d.useStateFromStores)([g.default], () => g.default.getPendingReply(X)),
                    eF = function(e) {
                        let t = s.useRef(e);
                        return s.useEffect(() => void(t.current = null != e ? e : t.current)), null != e ? e : t.current
                    }($),
                    eU = (0, m.useRoleIcon)({
                        guildId: q.guild_id,
                        roleId: eb.iconRoleId
                    }),
                    eH = (0, x.getMessageAriaLabelledBy)(L, ee),
                    ek = (0, x.getMessageAriaDescribedBy)(L),
                    eG = (0, d.useStateFromStores)([p.default], () => p.default.getMessage(Z), [Z]),
                    [eB, ew] = s.useState(!1),
                    eV = (0, j.default)({
                        message: L,
                        channel: q
                    }),
                    eW = null != eG;
                r = L.type === z.MessageTypes.CUSTOM_GIFT ? "" : !eM && eW ? (0, U.default)(e, eO) : (0, G.default)(e, eO, eM);
                let ez = L.id === ee,
                    eK = (0, C.useHighlightColor)(),
                    eY = et && ez ? (0, a.jsxs)("div", {
                        className: Y.highlightContainer,
                        children: [(0, a.jsx)(E.default, {
                            className: Y.highlightIcon,
                            width: 10,
                            height: 10
                        }), (0, a.jsx)(c.Text, {
                            style: {
                                color: eK
                            },
                            variant: "text-sm/medium",
                            children: K.default.Messages.HIGHLIGHT
                        })]
                    }) : null,
                    eZ = (0, a.jsx)(c.FocusRing, {
                        offset: {
                            left: 4,
                            right: 4
                        },
                        children: (0, a.jsx)("li", {
                            id: S,
                            className: Y.messageListItem,
                            "aria-setsize": -1,
                            children: (0, a.jsx)(I.default, {
                                ...el,
                                "aria-setsize": -1,
                                "aria-roledescription": K.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION,
                                "aria-labelledby": eH,
                                "aria-describedby": ek,
                                onFocus: eA,
                                onBlur: eT,
                                onContextMenu: eh,
                                onKeyDown: eP,
                                onClick: eC,
                                compact: Q,
                                contentOnly: en,
                                className: i(J, {
                                    [Y.message]: !0,
                                    [Y.cozyMessage]: !Q,
                                    [Y.mentioned]: L.mentioned && !(0, R.default)(L),
                                    [Y.highlighted]: et,
                                    [Y.ephemeral]: (0, N.hasFlag)(L.flags, z.MessageFlags.EPHEMERAL),
                                    [Y.systemMessage]: (0, R.default)(L),
                                    [Y.groupStart]: !en && (ez || L.type === z.MessageTypes.REPLY),
                                    [Y.selected]: eN,
                                    [Y.replying]: (null == ej ? void 0 : ej.message.id) === L.id,
                                    [Y.interactionSending]: L.isCommandType() && L.state === z.MessageStates.SENDING,
                                    [Y.automodMessage]: eW
                                }),
                                zalgo: !eM,
                                childrenHighlight: eY,
                                childrenRepliedMessage: en ? void 0 : (0, w.default)(e, ef, ed, ea, eu),
                                childrenExecutedCommand: (0, B.default)(e, ef, ed),
                                childrenHeader: en ? void 0 : (0, k.default)({
                                    messageProps: e,
                                    setPopout: ef,
                                    messagePopouts: ed,
                                    replyReference: ea,
                                    author: eb,
                                    repliedMessage: eu,
                                    roleIcon: eU
                                }),
                                childrenAccessories: (0, F.default)({
                                    channelMessageProps: e,
                                    hasSpoilerEmbeds: eD,
                                    handleContextMenu: eh,
                                    isInteracting: eL,
                                    isAutomodBlockedMessage: eW,
                                    showClydeAiEmbeds: eB
                                }),
                                childrenButtons: em || eS ? (0, H.default)({
                                    buttonProps: e,
                                    setPopout: ef,
                                    messagePopouts: ed,
                                    showClydeAiEmbeds: eB,
                                    setShowClydeAiEmbeds: ew,
                                    isFocused: eg || e_
                                }) : void 0,
                                childrenSystemMessage: (0, V.default)(e),
                                childrenMessageContent: r,
                                onMouseMove: eE,
                                onMouseLeave: ep,
                                hasThread: !en && L.hasFlag(z.MessageFlags.HAS_THREAD) && null != eR,
                                isSystemMessage: (0, R.default)(L),
                                hasReply: L.type === z.MessageTypes.REPLY,
                                messageRef: eV
                            })
                        })
                    });
                return null != eF ? (0, a.jsx)(y.default, {
                    flashKey: eF,
                    className: i({
                        [Y.backgroundFlash]: !0,
                        [Y.groupStart]: !Q && L.id === ee
                    }),
                    children: eZ
                }, "bg-flash-".concat(S)) : eZ
            })
        },
        342009: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                o = n("945330"),
                u = n("780571"),
                d = n("304198"),
                c = n("556118"),
                f = n("97810"),
                h = n("49111"),
                C = n("782340"),
                E = n("555821"),
                p = n("877671");

            function m(e) {
                let {
                    expanded: t,
                    onClick: n,
                    count: s,
                    compact: l,
                    collapsedReason: i
                } = e;
                return (0, a.jsx)(u.default, {
                    compact: l,
                    role: "group",
                    childrenMessageContent: (0, a.jsx)(d.default, {
                        compact: l,
                        className: E.blockedSystemMessage,
                        iconNode: (0, a.jsx)(o.default, {
                            className: E.blockedIcon
                        }),
                        children: (0, a.jsxs)("div", {
                            className: E.blockedMessageText,
                            children: [i.format({
                                count: s
                            }), " —", " ", (0, a.jsx)(r.Clickable, {
                                tag: "span",
                                onClick: n,
                                className: E.blockedAction,
                                children: t ? C.default.Messages.BLOCKED_MESSAGES_HIDE.format({
                                    count: s
                                }) : C.default.Messages.BLOCKED_MESSAGES_SHOW.format({
                                    count: s
                                })
                            })]
                        })
                    })
                })
            }
            var g = s.memo(function(e) {
                var t;
                let {
                    messages: n,
                    channel: l,
                    compact: r = !1,
                    unreadId: o,
                    collapsedReason: u
                } = e, {
                    hasJumpTarget: d = !1
                } = n, [C, g] = s.useState(d), _ = s.useCallback(() => g(e => !e), []), S = n.hasUnread ? n.content.length - 1 : n.content.length;
                return (0, a.jsxs)("div", {
                    className: i({
                        [p.groupStart]: !0,
                        [E.expanded]: C
                    }),
                    children: [n.hasUnread && (!C || (null === (t = n.content[0]) || void 0 === t ? void 0 : t.type) === h.ChannelStreamTypes.DIVIDER) ? (0, a.jsx)(f.default, {
                        isUnread: !0,
                        id: o
                    }, "divider") : null, (0, a.jsx)(m, {
                        count: S,
                        compact: r,
                        expanded: C,
                        onClick: _,
                        collapsedReason: u
                    }, "collapsed-message-item"), C ? n.content.map((e, t) => {
                        if (e.type === h.ChannelStreamTypes.DIVIDER && t > 0) {
                            var s, i;
                            let e = null !== (i = null === (s = n.content[t + 1]) || void 0 === s ? void 0 : s.isGroupStart) && void 0 !== i && i;
                            return (0, a.jsx)(f.default, {
                                isUnread: !0,
                                isBeforeGroup: e,
                                id: o
                            }, "divider")
                        }
                        if (e.type === h.ChannelStreamTypes.MESSAGE || e.type === h.ChannelStreamTypes.THREAD_STARTER_MESSAGE) {
                            let t = e.type === h.ChannelStreamTypes.THREAD_STARTER_MESSAGE ? c.ThreadStarterChatMessage : c.default;
                            return (0, a.jsx)(t, {
                                className: E.blocked,
                                compact: r,
                                channel: l,
                                message: e.content,
                                groupId: e.groupId,
                                flashKey: e.flashKey,
                                isLastItem: !1,
                                isHighlight: !1,
                                renderContentOnly: !1
                            }, e.content.id)
                        }
                    }) : null]
                })
            })
        },
        97810: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("898260"),
                o = n("877671");
            let u = s.forwardRef(function(e, t) {
                let {
                    className: n,
                    isBeforeGroup: s = !1,
                    ...l
                } = e, {
                    children: u
                } = l;
                return (0, a.jsx)(r.default, {
                    ...l,
                    ref: t,
                    role: "separator",
                    "aria-label": "string" == typeof u ? u : void 0,
                    className: i(n, {
                        [o.divider]: !0,
                        [o.hasContent]: null != u,
                        [o.beforeGroup]: s
                    })
                })
            });
            var d = s.memo(u)
        },
        92981: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("446674"),
                i = n("77078"),
                r = n("206230"),
                o = n("300322"),
                u = n("271938"),
                d = n("957255"),
                c = n("491605"),
                f = n("49111"),
                h = n("782340"),
                C = n("50435");
            let E = () => n.el("170206").then(n.t.bind(n, "170206", 19)).then(e => {
                let {
                    default: t
                } = e;
                return t
            });
            var p = s.memo(function(e) {
                let {
                    channel: t,
                    isLastItem: n
                } = e, s = (0, l.useStateFromStores)([r.default], () => r.default.useReducedMotion), p = (0, l.useStateFromStores)([d.default], () => d.default.can(f.Permissions.SEND_MESSAGES_IN_THREADS, t)), m = (0, o.useIsNonModInLockedThread)(t), g = (0, l.useStateFromStores)([u.default], () => u.default.getId());
                return n ? p && !m && t.ownerId !== g ? (0, a.jsxs)("div", {
                    className: C.box,
                    children: [(0, a.jsx)(c.default, {
                        importData: E,
                        shouldAnimate: !s,
                        className: C.animation
                    }), (0, a.jsxs)("div", {
                        className: C.textContainer,
                        children: [(0, a.jsx)(i.Heading, {
                            variant: "heading-md/semibold",
                            children: h.default.Messages.FORUM_START_THE_CONVERSATION_HEADER
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: h.default.Messages.FORUM_START_THE_CONVERSATION_DESCRIPTION
                        })]
                    })]
                }) : null : (0, a.jsx)("div", {
                    className: C.divider
                })
            })
        },
        268739: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("775560"),
                i = n("458960"),
                r = n("446674"),
                o = n("77078"),
                u = n("267363"),
                d = n("206230"),
                c = n("716241"),
                f = n("358269"),
                h = n("884422"),
                C = n("37930"),
                E = n("512395"),
                p = n("660478"),
                m = n("472505"),
                g = n("837899"),
                _ = n("384996"),
                S = n("49111"),
                A = n("782340"),
                T = n("27885");

            function M(e) {
                let {
                    numHighlights: t,
                    visible: n,
                    disableAnimation: r,
                    navigateToNextHighlight: u,
                    isLoading: d,
                    channelId: c
                } = e, f = (0, l.useLazyValue)(() => new i.default.Value(0)), h = (0, l.useLazyValue)(() => new i.default.Value(0)), E = (0, l.useLazyValue)(() => new i.default.Value(0)), p = s.useRef(null), [m, _] = s.useState(200), S = s.useRef(null), [M, I] = s.useState("inherit"), [N, L] = s.useState(!1);
                s.useEffect(() => {
                    t > 1 && L(!0)
                }, [c, t]);
                let R = s.useCallback(() => {
                    u(), E.setValue(0)
                }, [E, u]);
                s.useLayoutEffect(() => {
                    let {
                        current: e
                    } = p;
                    null != e && _(e.clientWidth)
                }, [p, _]), s.useEffect(() => {
                    null != S.current && I(S.current.clientWidth + 1)
                }, [S, I, c]), s.useEffect(() => {
                    n ? i.default.parallel([i.default.timing(f, {
                        toValue: 1,
                        duration: N ? 500 : 0
                    }), i.default.timing(h, {
                        toValue: 1,
                        duration: N ? 500 : 0
                    })]).start() : i.default.parallel([i.default.timing(f, {
                        toValue: 0,
                        duration: 300,
                        delay: 500
                    }), i.default.timing(h, {
                        toValue: 0,
                        duration: 100,
                        delay: 500
                    })]).start()
                }, [f, h, n]), s.useEffect(() => {
                    t > 0 && !d && i.default.timing(E, {
                        toValue: 1,
                        duration: N ? 300 : 0
                    }).start()
                }, [E, t, d]);
                let v = n ? 1 : 0,
                    y = n ? 0 : -m;
                return N ? (0, a.jsx)("div", {
                    children: (0, a.jsx)(i.default.div, {
                        style: {
                            opacity: r ? v : h,
                            marginLeft: r ? y : f.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-m, 0]
                            })
                        },
                        children: (0, a.jsx)(o.Clickable, {
                            "aria-label": A.default.Messages.CHANNEL_HIGHLIGHT_NAVIGATOR_NEXT,
                            className: T.navigator,
                            onClick: R,
                            children: (0, a.jsxs)("div", {
                                className: T.highlightsCountContainer,
                                ref: p,
                                children: [d ? (0, a.jsx)(o.Spinner, {
                                    type: o.Spinner.Type.SPINNING_CIRCLE,
                                    className: T.spinner
                                }) : (0, a.jsx)(C.default, {
                                    className: T.highlightIcon,
                                    width: 16,
                                    height: 16
                                }), (0, a.jsx)("div", {
                                    className: T.rollingText,
                                    children: (0, a.jsx)(i.default.div, {
                                        style: {
                                            marginTop: r ? -18 : E.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, -18]
                                            })
                                        },
                                        children: (0, a.jsxs)("div", {
                                            ref: S,
                                            style: {
                                                width: M
                                            },
                                            children: [(0, a.jsx)(o.Text, {
                                                className: T.oldText,
                                                variant: "text-sm/medium",
                                                children: A.default.Messages.CHANNEL_HIGHLIGHTS_COUNT.format({
                                                    count: t + 1
                                                })
                                            }), (0, a.jsx)(o.Text, {
                                                className: T.newText,
                                                variant: "text-sm/medium",
                                                children: A.default.Messages.CHANNEL_HIGHLIGHTS_COUNT.format({
                                                    count: Math.max(t, 1)
                                                })
                                            })]
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: T.button,
                                    children: (0, a.jsx)(g.default, {
                                        className: T.icon
                                    })
                                })]
                            })
                        })
                    })
                }) : null
            }

            function I(e) {
                let {
                    channelId: t,
                    guildId: n,
                    hasMoreAfter: l,
                    isAtBottom: i,
                    isLoading: C,
                    isJumpingToBottom: g,
                    messages: I,
                    scrollManager: N,
                    jumpToPresent: L
                } = e, [R, v] = s.useState(p.default.ackMessageId(t));
                s.useEffect(() => {
                    v(p.default.ackMessageId(t))
                }, [t]);
                let y = (0, f.useUnreadChannelHighlights)(t, R),
                    [x, O] = s.useState(0),
                    D = y.length - x,
                    P = y.length > 0 && I.jumpTargetId === y[0];
                s.useEffect(() => {
                    D > 0 && c.default.trackWithMetadata(S.AnalyticEvents.CHANNEL_HIGHLIGHTS_VIEWED, {
                        num_unread_highlights: D,
                        did_jump_to_first_unread_highlight: P
                    })
                }, [t]);
                let {
                    scrolledFarBack: b
                } = function(e) {
                    let {
                        guildId: t,
                        channelId: n,
                        highlightedMessageIds: a,
                        setNumHighlightsVisited: l,
                        messages: i,
                        scrollManager: r
                    } = e, [o, u] = s.useState(null), [d, c] = s.useState(null), f = s.useCallback((e, t) => {
                        var n, a;
                        u(null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null), c(null !== (a = null == t ? void 0 : t.id) && void 0 !== a ? a : null)
                    }, [u, c]);
                    s.useEffect(() => (r.addAutomaticAnchorCallback(f), () => {
                        r.removeAutomaticAnchorCallback(f)
                    }), [r, f]);
                    let h = null;
                    if (null != o && null != d) {
                        var C, E;
                        let e = i.indexOf(o),
                            t = i.indexOf(d);
                        h = null !== (E = null === (C = i.getByIndex(e + Math.floor(t - e))) || void 0 === C ? void 0 : C.id) && void 0 !== E ? E : null
                    }(0, _.default)({
                        guildId: t,
                        channelId: n,
                        highlightedMessageIds: a,
                        setNumHighlightsVisited: l,
                        topVisibleMessage: o,
                        middleVisibleMessage: h
                    });
                    let [p, m] = s.useState(!1);
                    return s.useEffect(() => {
                        null != o && i.indexOf(o) >= 0 && (i.length - i.indexOf(o) > 50 ? m(!0) : m(!1))
                    }, [i, o, m]), {
                        scrolledFarBack: p
                    }
                }({
                    guildId: n,
                    channelId: t,
                    highlightedMessageIds: y,
                    setNumHighlightsVisited: O,
                    messages: I,
                    scrollManager: N
                }), j = s.useCallback(() => {
                    u.ack(t, !0), L()
                }, [L, t]), F = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion);
                return (0, E.useChannelHighlightsEnabledForGuild)(n) && (0 !== y.length || l || b) ? (0, a.jsxs)("div", {
                    className: T.container,
                    style: {
                        visibility: i && 0 === D ? "hidden" : "inherit"
                    },
                    children: [g ? (0, a.jsx)("div", {
                        className: T.highlightsCountContainer
                    }) : (0, a.jsx)(M, {
                        visible: D > 0,
                        numHighlights: D,
                        disableAnimation: F,
                        navigateToNextHighlight: () => {
                            let e = y[x];
                            null != e && (h.jumpToHighlight({
                                guildId: n,
                                channelId: t,
                                targetMessageId: e,
                                highlightedMessageIds: y,
                                numHighlightsVisited: x
                            }), O(e => e + 1))
                        },
                        isLoading: C,
                        channelId: t
                    }, t), (0, a.jsx)(o.Clickable, {
                        "aria-label": A.default.Messages.JUMP_TO_BOTTOM,
                        className: T.navigator,
                        onClick: j,
                        children: (0, a.jsx)("div", {
                            className: T.button,
                            children: g && C ? (0, a.jsx)(o.Spinner, {
                                type: o.Spinner.Type.SPINNING_CIRCLE,
                                className: T.jumpSpinner
                            }) : (0, a.jsx)(m.default, {
                                className: T.icon
                            })
                        })
                    })]
                }) : null
            }
        },
        594864: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessageNoticeBanner: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("46716");

            function r(e) {
                let {
                    bannerIcon: t,
                    bannerHeader: n,
                    bannerSubtext: s,
                    containerStyles: r,
                    headerStyles: o,
                    children: u
                } = e;
                return (0, a.jsxs)("div", {
                    className: i.spamBanner,
                    children: [(0, a.jsxs)("div", {
                        className: l(i.bannerTextContainer, r),
                        children: ["string" == typeof t ? (0, a.jsx)("img", {
                            src: t,
                            alt: "",
                            className: i.bannerIcon
                        }) : t, (0, a.jsxs)("div", {
                            className: i.bannerText,
                            children: [(0, a.jsx)("div", {
                                className: l(i.bannerHeader, o),
                                children: n
                            }), (0, a.jsx)("div", {
                                className: i.bannerSubtext,
                                children: s
                            })]
                        })]
                    }), (0, a.jsx)("div", {
                        className: i.actionButtons,
                        children: u
                    })]
                })
            }
        },
        88243: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateAttachmentSpec: function() {
                    return d
                },
                generateMessageSpecs: function() {
                    return c
                },
                default: function() {
                    return f
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("917351"),
                i = n.n(l),
                r = n("67602"),
                o = n("49111"),
                u = n("563166");

            function d() {
                return {
                    width: i.random(140, 400),
                    height: i.random(100, 320)
                }
            }

            function c(e) {
                let {
                    compact: t,
                    messageGroups: n,
                    groupRange: a,
                    attachments: s,
                    fontSize: l,
                    groupSpacing: u
                } = e;
                if (s > n) throw Error("generateMessageSpecs: too many attachments relative to messageGroups: ".concat(n, ", ").concat(s));
                let c = l / o.Accessibility.FONT_SIZE_DEFAULT,
                    f = t ? r.HEIGHT_COMPACT_MESSAGE_START : r.HEIGHT_COZY_MESSAGE_START,
                    h = t ? r.HEIGHT_COMPACT_MESSAGE : r.HEIGHT_COZY_MESSAGE,
                    C = 0,
                    E = Array(n).fill(null).map(() => {
                        let e = i.random(1, a);
                        return C += u * c + f * c + (e - 1) * h * c, e
                    }),
                    p = E.map((e, t) => t),
                    m = [];
                for (; m.length < s;) {
                    let e = d();
                    m.push([p.splice(i.random(0, p.length - 1), 1)[0], e]), C += e.height + r.HEIGHT_ATTACHMEMT_PADDING * c
                }
                return {
                    messages: E,
                    attachmentSpecs: m,
                    totalHeight: C,
                    groupSpacing: u
                }
            }

            function f(e) {
                let {
                    compact: t,
                    messages: n,
                    attachmentSpecs: l,
                    totalHeight: i,
                    groupSpacing: o
                } = e;
                return s.useMemo(() => {
                    let e = Array(n.length).fill(void 0);
                    for (let [t, n] of l) e[t] = n;
                    return (0, a.jsx)("div", {
                        className: u.wrapper,
                        style: {
                            height: i
                        },
                        children: n.map((n, s) => (0, a.jsx)(r.default, {
                            groupSpacing: o,
                            compact: t,
                            messages: n,
                            attachmentSpecs: e[s]
                        }, s))
                    })
                }, [t, n, l, i, o])
            }
        },
        753089: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("917351"),
                i = n.n(l),
                r = n("446674"),
                o = n("77078"),
                u = n("819689"),
                d = n("467094"),
                c = n("364685"),
                f = n("41170"),
                h = n("271938"),
                C = n("377253"),
                E = n("697218"),
                p = n("599110"),
                m = n("913491"),
                g = n("49111"),
                _ = n("782340"),
                S = n("649755");
            let A = "749054660769218631";

            function T(e) {
                var t;
                let {
                    channel: n
                } = e, [l, T] = s.useState("");
                s.useEffect(() => {
                    (0, d.fetchStickerPack)("847199849233514549", !0)
                }, []);
                let M = (0, r.useStateFromStores)([C.default, h.default], () => !!i(C.default.getMessages(n.id).toArray()).reverse().find(e => e.author.id !== h.default.getId() && e.state === g.MessageStates.SENT && !(0, m.default)(e))),
                    I = (0, r.useStateFromStores)([E.default], () => {
                        var e;
                        return null !== (t = null === (e = E.default.getUser(n.isPrivate() ? n.getRecipientId() : null)) || void 0 === e ? void 0 : e.username) && void 0 !== t ? t : _.default.Messages.WAVE_DEFAULT_RECIPIENT
                    }),
                    N = (0, r.useStateFromStores)([c.default], () => c.default.getStickerById(A)),
                    L = s.useCallback(async () => {
                        if (null == l || "" === l) try {
                            await u.default.sendGreetMessage(n.id, A), p.default.track(g.AnalyticEvents.DM_EMPTY_ACTION, {
                                channel_id: n.id,
                                channel_type: n.type,
                                source: "Wave",
                                type: "Send wave"
                            })
                        } catch (e) {
                            !e.ok && 429 === e.status && T(_.default.Messages.RATE_LIMITED)
                        }
                    }, [n.id, n.type, l]),
                    R = _.default.Messages.WAVE_TO.format({
                        username: I
                    }),
                    v = null != l && "" !== l ? (0, a.jsx)(o.Text, {
                        className: S.error,
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: l
                    }) : null;
                return M ? (0, a.jsxs)("div", {
                    className: S.containerCompact,
                    children: [(0, a.jsxs)(o.Clickable, {
                        className: null != l && "" !== l ? S.compactButtonDisabled : S.compactButton,
                        "aria-label": _.default.Messages.SEND_WAVE,
                        onClick: L,
                        children: [(0, a.jsx)(f.default, {
                            sticker: N,
                            size: 24
                        }), (0, a.jsx)(o.Text, {
                            className: S.text,
                            variant: "text-md/medium",
                            children: R
                        })]
                    }), v]
                }) : (0, a.jsxs)("div", {
                    className: S.containerExpanded,
                    children: [(0, a.jsx)(f.default, {
                        sticker: N,
                        size: 160
                    }), (0, a.jsx)(o.Button, {
                        className: S.button,
                        onClick: L,
                        disabled: !!l,
                        children: R
                    }), v]
                })
            }
        },
        823674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eA
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("483366"),
                o = n.n(r),
                u = n("446674"),
                d = n("151426"),
                c = n("77078"),
                f = n("225664"),
                h = n("206230"),
                C = n("563143"),
                E = n("189318"),
                p = n("449918"),
                m = n("619259"),
                g = n("752598"),
                _ = n("267567"),
                S = n("979268"),
                A = n("520899"),
                T = n("166257"),
                M = n("432173"),
                I = n("219013"),
                N = n("625149"),
                L = n("300322"),
                R = n("845579"),
                v = n("271938"),
                y = n("836417"),
                x = n("26989"),
                O = n("305961"),
                D = n("88093"),
                P = n("957255"),
                b = n("886074"),
                j = n("36562"),
                F = n("662255"),
                U = n("85175"),
                H = n("68238"),
                k = n("83900"),
                G = n("993477"),
                B = n("733160"),
                w = n("100300"),
                V = n("433487"),
                W = n("987772"),
                z = n("566998"),
                K = n("516358"),
                Y = n("550515"),
                Z = n("959097"),
                q = n("251144"),
                X = n("20662"),
                Q = n("228220"),
                J = n("149279"),
                $ = n("599110"),
                ee = n("306160"),
                et = n("240873"),
                en = n("870190"),
                ea = n("875978"),
                es = n("61400"),
                el = n("327054"),
                ei = n("583022"),
                er = n("363396"),
                eo = n("891405"),
                eu = n("261649"),
                ed = n("739034"),
                ec = n("49111"),
                ef = n("680894"),
                eh = n("782340"),
                eC = n("346762");

            function eE(e) {
                e.stopPropagation()
            }

            function ep(e) {
                let {
                    message: t,
                    channel: n,
                    canReport: a,
                    onClose: s,
                    updatePosition: l
                } = e;
                return (0, eu.useMessageMenu)({
                    message: t,
                    channel: n,
                    textSelection: "",
                    favoriteableType: null,
                    favoriteableId: null,
                    favoriteableName: null,
                    itemHref: void 0,
                    itemSrc: void 0,
                    itemSafeSrc: void 0,
                    itemTextContent: void 0,
                    canReport: a,
                    onHeightUpdate: l,
                    onClose: s,
                    navId: "message-actions",
                    ariaLabel: eh.default.Messages.MESSAGE_UTILITIES_A11Y_LABEL
                })
            }

            function em(e) {
                let {
                    label: t,
                    ariaLabel: n,
                    tooltipText: s,
                    tooltipColor: l,
                    icon: i,
                    iconProps: r,
                    channel: o,
                    message: u,
                    onClick: d,
                    key: f,
                    disabled: h,
                    dangerous: C,
                    separator: E,
                    sparkle: p,
                    ...m
                } = e;
                return (0, a.jsx)(c.Tooltip, {
                    text: null != s ? s : t,
                    color: null != l ? l : c.TooltipColors.PRIMARY,
                    "aria-label": t,
                    hideOnClick: !0,
                    tooltipClassName: eC.tooltip,
                    children: e => {
                        let {
                            onMouseEnter: s,
                            onMouseLeave: l,
                            onClick: c
                        } = e;
                        return (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)(J.Button, {
                                onMouseEnter: s,
                                onMouseLeave: l,
                                onClick: e => {
                                    null == c || c(), d(o, u, e)
                                },
                                "aria-label": null != n ? n : t,
                                disabled: h,
                                dangerous: C,
                                ...m,
                                children: [(0, a.jsx)(i, {
                                    className: eC.icon,
                                    ...r
                                }), p && (0, a.jsx)(b.default, {})]
                            }), E && (0, a.jsx)(J.Separator, {})]
                        })
                    }
                }, f)
            }

            function eg(e) {
                let {
                    channel: t,
                    message: n,
                    canCopy: l,
                    canPin: i,
                    canDelete: r,
                    canReport: o,
                    canEdit: m,
                    canPublish: g,
                    canReact: T,
                    canConfigureJoin: M,
                    canReply: I,
                    canStartThread: y,
                    canViewThread: b,
                    isExpanded: Y,
                    showMoreUtilities: J,
                    showEmojiPicker: eu,
                    showEmojiBurstPicker: eC,
                    showMessageRemindersActions: eE,
                    isMessageReminder: eg,
                    setPopout: e_,
                    showClydeAiEmbeds: eA,
                    setShowClydeAiEmbeds: eT,
                    isClydePersonalityModified: eM,
                    hasDeveloperMode: eI,
                    isGuildInviteReminder: eN,
                    isFocused: eL
                } = function(e) {
                    let {
                        channel: t,
                        message: n,
                        showEmojiPicker: a,
                        showEmojiBurstPicker: s,
                        showMoreUtilities: l,
                        setPopout: i,
                        showClydeAiEmbeds: r,
                        setShowClydeAiEmbeds: o,
                        isFocused: d
                    } = e, {
                        author: c
                    } = n, f = (0, u.useStateFromStores)([O.default], () => O.default.getGuild(t.guild_id), [t.guild_id]), E = (0, u.useStateFromStores)([v.default], () => v.default.getId()), p = (0, L.useIsActiveChannelOrUnarchivableThread)(t), m = (0, L.useIsNonModInLockedThread)(t), g = R.RenderReactions.useSetting(), T = R.DeveloperMode.useSetting(), M = (0, u.useStateFromStores)([D.default], () => null == t.guild_id || D.default.canChatInGuild(t.guild_id), [t]), {
                        canManageMessages: I,
                        canAddNewReactions: y
                    } = (0, u.useStateFromStoresObject)([P.default], () => ({
                        canAddNewReactions: M && P.default.can(ec.Permissions.ADD_REACTIONS, t),
                        canManageMessages: P.default.can(ec.Permissions.MANAGE_MESSAGES, t)
                    }), [t, M]), b = (0, N.useCanReplyToMessage)(t, n), j = (0, L.useCanStartPublicThread)(t, n), F = (0, L.useCanViewThreadForMessage)(n), U = (0, u.useStateFromStores)([_.default], () => null != t.guild_id && _.default.isLurking(t.guild_id), [t]), H = (0, u.useStateFromStores)([x.default], () => null != t.guild_id && x.default.isCurrentUserGuest(t.guild_id), [t]), k = c.id === E, G = (I || k) && p && n.type in ec.MessageTypesDeletable;
                    n.type === ec.MessageTypes.AUTO_MODERATION_ACTION && (G = G && I);
                    let B = (0, en.canReportMessage)(n),
                        w = (0, el.default)(n, t, I),
                        V = !t.isSystemDM() && (0, es.default)(n, E) && p && !m,
                        {
                            disableReactionCreates: W
                        } = (0, ei.default)({
                            channel: t,
                            canChat: M,
                            renderReactions: g,
                            canAddNewReactions: y,
                            isLurking: U,
                            isGuest: H,
                            isActiveChannelOrUnarchivableThread: p
                        }),
                        z = t.type === ec.ChannelTypes.GUILD_ANNOUNCEMENT && null != f && f.hasFeature(ec.GuildFeatures.NEWS) && (k || I) && n.type === ec.MessageTypes.DEFAULT,
                        K = t.getGuildId(),
                        Y = null != K && (n.type === ec.MessageTypes.USER_JOIN || n.type === ec.MessageTypes.GUILD_INVITE_REMINDER) && P.default.canWithPartialContext(ec.Permissions.MANAGE_GUILD, {
                            guildId: K
                        }),
                        {
                            showReminders: Z
                        } = S.default.useExperiment({
                            location: "9bfedc_1"
                        }, {
                            autoTrackExposure: !1
                        }),
                        q = (0, u.useStateFromStores)([A.default], () => null != A.default.getMessageReminders().find(e => e.messageId === n.id)),
                        X = (0, ed.default)(),
                        Q = (0, u.useStateFromStores)([h.default], () => h.default.keyboardModeEnabled),
                        J = (0, C.useIsClydePersonalityModified)(t.getGuildId(), n.author.isClyde());
                    return {
                        channel: t,
                        message: n,
                        canPin: w,
                        canEdit: V,
                        canDelete: G,
                        canReport: B,
                        canReply: b,
                        canStartThread: j,
                        canViewThread: F,
                        canCopy: ee.SUPPORTS_COPY,
                        hasDeveloperMode: T,
                        canReact: !W && g,
                        canPublish: z,
                        canConfigureJoin: Y,
                        isExpanded: X && !Q && !a && !s && !l,
                        showEmojiPicker: a,
                        showEmojiBurstPicker: s,
                        showMoreUtilities: l,
                        showMessageRemindersActions: Z,
                        isMessageReminder: q,
                        setPopout: i,
                        showClydeAiEmbeds: r,
                        setShowClydeAiEmbeds: o,
                        isClydePersonalityModified: J,
                        isFocused: d,
                        isGuildInviteReminder: n.type === ec.MessageTypes.GUILD_INVITE_REMINDER
                    }
                }(e), [eR, ev] = s.useState(!1), [ey, ex] = s.useState(!1), eO = s.useCallback(() => {
                    !J && $.default.track(ec.AnalyticEvents.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                        message_id: n.id,
                        channel: n.channel_id
                    }), e_({
                        moreUtilities: !J
                    })
                }, [J, e_, n]), eD = s.useCallback(() => {
                    e_({
                        emojiPicker: !eu
                    })
                }, [eu, e_]), eP = s.useCallback(() => {
                    e_({
                        emojiBurstPicker: !eC
                    })
                }, [eC, e_]), {
                    enabled: eb,
                    hasTwoButtonEntryPoint: ej
                } = (0, f.useBurstReactionsExperiment)(t.getGuildId()), eF = (0, L.useIsActiveChannelOrUnarchivableThread)(t), eU = n.hasFlag(ec.MessageFlags.CROSSPOSTED);
                return eb && !ej && [].push(d.DismissibleContent.BURST_REACTION_BUTTON_SPARKLE), (0, a.jsxs)(a.Fragment, {
                    children: [Y ? (0, a.jsxs)(a.Fragment, {
                        children: [l && eI ? em({
                            key: "copy-id",
                            channel: t,
                            message: n,
                            label: eh.default.Messages.COPY_ID_MESSAGE,
                            icon: F.default,
                            onClick: er.copyId
                        }) : null, l && !eN ? em({
                            key: "copy-link",
                            channel: t,
                            message: n,
                            label: eh.default.Messages.COPY_LINK,
                            icon: k.default,
                            onClick: er.copyLink
                        }) : null, M ? em({
                            key: "configure",
                            channel: t,
                            message: n,
                            label: eh.default.Messages.CONFIGURE,
                            icon: U.default,
                            onClick: er.configureJoin
                        }) : null, eE ? em({
                            key: "mark-reminder",
                            channel: t,
                            message: n,
                            label: eg ? eh.default.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : eh.default.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
                            icon: eg ? j.default : w.default,
                            onClick: eg ? er.markMessageRemindersAsComplete : er.markMessageAsReminder
                        }) : null, eF ? em({
                            key: "mark-unread",
                            channel: t,
                            message: n,
                            label: eh.default.Messages.MARK_UNREAD,
                            icon: G.default,
                            onClick: er.markMessageUnread
                        }) : null, i ? em({
                            key: "pin",
                            channel: t,
                            message: n,
                            label: n.pinned ? eh.default.Messages.UNPIN_MESSAGE : eh.default.Messages.PIN_MESSAGE,
                            icon: z.default,
                            onClick: er.pinMessage
                        }) : null, I && m ? em({
                            key: "reply-self",
                            channel: t,
                            message: n,
                            label: eh.default.Messages.MESSAGE_ACTION_REPLY,
                            icon: K.default,
                            onClick: er.replyToMessage
                        }) : null]
                    }) : null, (0, et.hasClydeAiThoughtsEmbed)(n) ? em({
                        key: "clyde-view-source",
                        channel: t,
                        message: n,
                        label: eA ? eh.default.Messages.CLYDE_VIEW_SOURCE_HIDE_TOOLTIP : eh.default.Messages.CLYDE_VIEW_SOURCE_SHOW_TOOLTIP,
                        icon: H.default,
                        onClick: () => {
                            eT(!eA), $.default.track(ec.AnalyticEvents.CLYDE_AI_THOUGHTS_VIEWED, {
                                message_id: n.id
                            })
                        }
                    }) : null, n.author.isClyde() ? em({
                        key: "clyde-good",
                        channel: t,
                        message: n,
                        label: eh.default.Messages.CLYDE_USER_RATING_TOOLTIP_GOOD,
                        icon: X.default,
                        iconProps: {
                            color: eR ? (0, p.getColor)(ec.Color.GREEN_360) : void 0
                        },
                        onClick: () => {
                            let e = !eR;
                            ev(e), ex(!1), e && ($.default.track(ec.AnalyticEvents.CLYDE_AI_MESSAGE_RATED, {
                                message_id: n.id,
                                rating: 1,
                                has_custom_personality: eM
                            }), (0, c.showToast)((0, c.createToast)((0, ef.randomClydeThanks)(), c.ToastType.SUCCESS)))
                        }
                    }) : null, n.author.isClyde() ? em({
                        key: "clyde-bad",
                        channel: t,
                        message: n,
                        label: eh.default.Messages.CLYDE_USER_RATING_TOOLTIP_BAD,
                        icon: q.default,
                        iconProps: {
                            color: ey ? (0, p.getColor)(ec.Color.RED_360) : void 0
                        },
                        onClick: () => {
                            let e = !ey;
                            ex(e), ev(!1), e && (0, E.openClydeFeedbackModal)(n.id, eM, ev, ex)
                        }
                    }) : null, T && !eN ? (0, a.jsx)(eo.default, {
                        channel: t,
                        message: n,
                        togglePopout: eD,
                        renderEmojiPicker: eS,
                        shouldShow: eu,
                        isFocused: eL
                    }) : null, T && !eN && eb && ej ? (0, a.jsx)(eo.default, {
                        channel: t,
                        message: n,
                        togglePopout: eP,
                        renderEmojiPicker: eS,
                        shouldShow: eC,
                        isFocused: eL,
                        type: ea.ReactionTypes.BURST
                    }) : null, I && !m ? em({
                        key: "reply-other",
                        channel: t,
                        message: n,
                        label: eh.default.Messages.MESSAGE_ACTION_REPLY,
                        icon: K.default,
                        onClick: er.replyToMessage
                    }) : null, m ? em({
                        key: "edit",
                        channel: t,
                        message: n,
                        label: eh.default.Messages.EDIT,
                        icon: W.default,
                        onClick: er.editMessage
                    }) : null, y ? em({
                        key: "thread",
                        channel: t,
                        message: n,
                        label: eh.default.Messages.CREATE_THREAD,
                        icon: Z.default,
                        onClick: er.createThread
                    }) : null, !y && b ? em({
                        key: "view-thread",
                        channel: t,
                        message: n,
                        label: eh.default.Messages.VIEW_THREAD,
                        icon: Z.default,
                        onClick: er.goToThread
                    }) : null, g ? em({
                        key: "publish",
                        channel: t,
                        message: n,
                        label: eU ? eh.default.Messages.NEWS_CHANNEL_PUBLISHED : eh.default.Messages.NEWS_CHANNEL_PUBLISH,
                        icon: B.default,
                        onClick: er.publishMessage,
                        disabled: eU
                    }) : null, r && (eN || Y) ? em({
                        key: "delete",
                        channel: t,
                        message: n,
                        label: eh.default.Messages.DELETE,
                        icon: Q.default,
                        onClick: er.deleteMessage,
                        dangerous: !0,
                        separator: !Y
                    }) : null, Y && r ? null : (0, a.jsx)(c.Popout, {
                        renderPopout: e => {
                            let {
                                updatePosition: s,
                                closePopout: l
                            } = e;
                            return (0, a.jsx)(ep, {
                                channel: t,
                                message: n,
                                canReport: o,
                                onClose: l,
                                updatePosition: s
                            })
                        },
                        shouldShow: J,
                        onRequestClose: eO,
                        position: "left",
                        align: "top",
                        animation: c.Popout.Animation.NONE,
                        children: (e, a) => {
                            let {
                                onClick: s,
                                ...l
                            } = e, {
                                isShown: i
                            } = a;
                            return em({
                                key: "more",
                                label: eh.default.Messages.MORE,
                                icon: V.default,
                                channel: t,
                                message: n,
                                selected: i,
                                onClick: eO,
                                ...l
                            })
                        }
                    })]
                })
            }

            function e_(e) {
                let {
                    channel: t,
                    message: n
                } = e, s = (0, u.useStateFromStores)([m.default], () => null != m.default.getMessage(n.id), [n.id]), l = null == n.interaction || null != n.interactionData && (0, g.canRetryInteractionData)(n.interactionData);
                return (0, a.jsxs)(a.Fragment, {
                    children: [!s && l && em({
                        key: "retry",
                        label: eh.default.Messages.RETRY,
                        icon: Y.default,
                        channel: t,
                        message: n,
                        onClick: er.retrySendMessage
                    }), em({
                        key: "delete-usent",
                        label: eh.default.Messages.DELETE,
                        icon: Q.default,
                        channel: t,
                        message: n,
                        onClick: er.deleteMessage
                    })]
                })
            }

            function eS(e, t, n) {
                let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    l = {
                        openPopoutType: "message_reaction_emoji_picker",
                        ...s && {
                            openPopoutType: "message_super_reaction_emoji_picker",
                            page: null != e.getGuildId() ? ec.AnalyticsPages.GUILD_CHANNEL : ec.AnalyticsPages.DM_CHANNEL,
                            section: (0, M.getBurstAnalyticsSection)(e),
                            object: ec.AnalyticsObjects.EMOJI_REACTION_PICKER_POPOUT
                        }
                    };
                return (0, a.jsx)(I.ReactionPicker, {
                    channel: e,
                    closePopout: n,
                    onSelectEmoji: (a, s, l) => {
                        ! function(e, t, n) {
                            let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                            null != e && (0, T.addReaction)(t.id, n.id, (0, M.toReactionEmoji)(e), void 0, {
                                burst: a
                            })
                        }(a, e, t, l), s && (l ? o(n, 150)() : n())
                    },
                    analyticsOverride: l,
                    isBurstReaction: s,
                    messageId: t.id
                })
            }
            var eA = s.memo(function(e) {
                let {
                    channel: t,
                    message: n,
                    isHeader: s
                } = e, l = (0, u.useStateFromStores)([y.default], () => y.default.isEditing(t.id, n.id), [t.id, n.id]), r = function(e) {
                    let {
                        channel: t,
                        message: n
                    } = e;
                    return n.state === ec.MessageStates.SEND_FAILED ? (0, a.jsx)(e_, {
                        channel: t,
                        message: n
                    }) : null
                }(e), o = function(e) {
                    let {
                        message: t
                    } = e;
                    return t.state !== ec.MessageStates.SEND_FAILED ? (0, a.jsx)(eg, {
                        ...e
                    }) : null
                }(e);
                return l || null == r && null == o ? null : (0, a.jsx)("div", {
                    className: i(e.className, {
                        [eC.container]: !0,
                        [eC.isHeader]: s
                    }),
                    onClick: eE,
                    onContextMenu: eE,
                    role: "group",
                    "aria-label": eh.default.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
                    children: (0, a.jsxs)(J.default, {
                        className: e.innerClassName,
                        children: [r, o]
                    })
                })
            })
        },
        818950: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("974667"),
                o = n("446674"),
                u = n("77078"),
                d = n("819689"),
                c = n("734575"),
                f = n("206230"),
                h = n("483038"),
                C = n("890503"),
                E = n("336696"),
                p = n("38654"),
                m = n("512395"),
                g = n("347738"),
                _ = n("845579"),
                S = n("271938"),
                A = n("836417"),
                T = n("88093"),
                M = n("377253"),
                I = n("957255"),
                N = n("660478"),
                L = n("462495"),
                R = n("697218"),
                v = n("505684"),
                y = n("378765"),
                x = n("70845"),
                O = n("51714"),
                D = n("88243"),
                P = n("31511"),
                b = n("120379"),
                j = n("221068"),
                F = n("49111"),
                U = n("782340"),
                H = n("278224");
            let k = s.memo(function(e) {
                var t, n;
                let {
                    className: l,
                    messageGroupSpacing: c,
                    scrollerClassName: h,
                    channel: C,
                    messages: E,
                    unreadCount: m,
                    showNewMessagesBar: g,
                    messageDisplayCompact: _,
                    channelStream: S,
                    uploads: A,
                    hasUnreads: T,
                    editingMessageId: M,
                    fontSize: N,
                    keyboardModeEnabled: L,
                    filterAfterTimestamp: R,
                    showingSpamBanner: v,
                    showingQuarantineBanner: x
                } = e, [O, k] = s.useState(!1), G = s.useMemo(() => _ ? (0, D.generateMessageSpecs)({
                    compact: !0,
                    messageGroups: 30,
                    groupRange: 4,
                    attachments: 8,
                    fontSize: N,
                    groupSpacing: c
                }) : (0, D.generateMessageSpecs)({
                    compact: !1,
                    messageGroups: 26,
                    groupRange: 4,
                    attachments: 8,
                    fontSize: N,
                    groupSpacing: c
                }), [_, N, c]), B = (0, b.default)({
                    messages: E,
                    channel: C,
                    compact: _,
                    hasUnreads: T,
                    focusId: M,
                    placeholderHeight: G.totalHeight,
                    canLoadMore: null == R,
                    handleScrollToBottom: s.useCallback(() => k(!0), [k]),
                    handleScrollFromBottom: s.useCallback(() => k(!1), [k])
                }), w = (0, P.default)({
                    scrollerRef: B.ref,
                    isEditing: null != M,
                    keyboardModeEnabled: L,
                    hasMoreAfter: E.hasMoreAfter
                });
                let V = (n = C, (0, o.useStateFromStores)([p.default], () => {
                        let e = I.default.can(F.Permissions.READ_MESSAGE_HISTORY, n);
                        return e ? null : p.default.getViewingRolesTimestamp(n.getGuildId())
                    })),
                    {
                        channelStreamMarkup: W,
                        newMessagesBar: z,
                        jumpToPresentBar: K,
                        forumPostActionBar: Y,
                        strangerDangerWarningBanner: Z
                    } = (0, j.default)({
                        channel: C,
                        messages: E,
                        unreadCount: m,
                        showNewMessagesBar: g,
                        messageDisplayCompact: _,
                        channelStream: S,
                        uploads: A,
                        loadMore: B.loadMore,
                        scrollManager: B,
                        specs: G,
                        filterAfterTimestamp: null != R ? R : V,
                        showingSpamBanner: v,
                        showingQuarantineBanner: x,
                        isAtBottom: O,
                        jumpToPresent: () => {
                            if (E.hasPresent()) {
                                var e;
                                null === (e = B.ref.current) || void 0 === e || e.scrollToBottom({
                                    animate: !f.default.useReducedMotion
                                })
                            } else d.default.jumpToPresent(C.id, F.MAX_MESSAGES_PER_CHANNEL)
                        }
                    });
                ! function(e) {
                    let t = s.useCallback(() => {
                            var t;
                            return null === (t = e.current) || void 0 === t ? void 0 : t.scrollToBottom()
                        }, [e]),
                        n = s.useCallback(() => {
                            var t;
                            return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageUp({
                                animate: !f.default.useReducedMotion
                            })
                        }, [e]),
                        a = s.useCallback(() => {
                            var t;
                            return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageDown({
                                animate: !f.default.useReducedMotion
                            })
                        }, [e]);
                    (0, y.useComponentAction)({
                        event: F.ComponentActions.SCROLLTO_PRESENT,
                        handler: t
                    }), (0, y.useComponentAction)({
                        event: F.ComponentActions.SCROLL_PAGE_UP,
                        handler: n
                    }), (0, y.useComponentAction)({
                        event: F.ComponentActions.SCROLL_PAGE_DOWN,
                        handler: a
                    })
                }(B.ref);
                let q = (0, u.useFocusJumpSection)(),
                    {
                        ref: X,
                        ...Q
                    } = (0, r.getContainerPropsFromNavigator)(w),
                    J = s.useCallback(e => {
                        var t;
                        B.ref.current = e, X.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
                    }, []);
                return (0, a.jsx)(r.ListNavigatorProvider, {
                    navigator: w,
                    children: (0, a.jsxs)("div", {
                        className: i(H.messagesWrapper, l, "group-spacing-".concat(c)),
                        children: [null != Z ? Z : z, (0, a.jsxs)(u.PinToBottomScrollerAuto, {
                            ref: J,
                            customTheme: !0,
                            className: i(h, H.scroller),
                            contentClassName: H.scrollerContent,
                            onResize: B.handleResize,
                            onScroll: B.handleScroll,
                            onMouseDown: B.handleMouseDown,
                            onMouseUp: B.handleMouseUp,
                            ...q,
                            tabIndex: -1,
                            role: "group",
                            children: [Y, (0, a.jsxs)("ol", {
                                className: H.scrollerInner,
                                "aria-label": U.default.Messages.CHANNEL_MESSAGES_A11Y_LABEL.format({
                                    channelName: C.name
                                }),
                                ...Q,
                                children: [(0, a.jsx)("span", {
                                    className: H.navigationDescription,
                                    id: "messagesNavigationDescription",
                                    "aria-hidden": !0,
                                    children: U.default.Messages.CHANNEL_MESSAGES_A11Y_DESCRIPTION
                                }), W, (0, a.jsx)("div", {
                                    className: i({
                                        [H.scrollerSpacer]: !v && !x,
                                        [H.empty]: 0 === E.length && !E.loadingMore,
                                        [H.emptyForum]: 1 === E.length && !E.loadingMore && C.isForumPost() && (null === (t = E.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(C))
                                    })
                                })]
                            })]
                        }), K]
                    })
                })
            }, (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden);
            var G = s.memo(function(e) {
                let {
                    channel: t,
                    showingSpamBanner: n,
                    showingQuarantineBanner: l,
                    forceCompact: i = !1,
                    forceCozy: r = !1,
                    ...u
                } = e, {
                    canManageMessages: d,
                    permissionVersion: p,
                    canChat: y
                } = function(e) {
                    let t = e.getGuildId(),
                        n = (0, o.useStateFromStores)([T.default], () => null == t || T.default.canChatInGuild(t), [t]),
                        {
                            canManageMessages: a,
                            permissionVersion: s
                        } = (0, o.useStateFromStoresObject)([I.default], () => ({
                            canManageMessages: I.default.can(F.Permissions.MANAGE_MESSAGES, e),
                            permissionVersion: null != t ? I.default.getGuildVersion(t) : null
                        }), [e, t]);
                    return {
                        canChat: n,
                        permissionVersion: s,
                        canManageMessages: a
                    }
                }(t), {
                    messageGroupSpacing: D,
                    fontSize: P,
                    messageDisplayCompact: b,
                    renderSpoilers: j,
                    keyboardModeEnabled: U
                } = function() {
                    let e = _.MessageDisplayCompact.useSetting(),
                        t = _.RenderSpoilers.useSetting(),
                        {
                            messageGroupSpacing: n,
                            fontSize: a,
                            keyboardModeEnabled: s
                        } = (0, o.useStateFromStoresObject)([f.default], () => {
                            let {
                                messageGroupSpacing: e,
                                fontSize: t,
                                keyboardModeEnabled: n
                            } = f.default;
                            return {
                                messageGroupSpacing: e,
                                fontSize: t,
                                keyboardModeEnabled: n
                            }
                        });
                    return {
                        messageGroupSpacing: n,
                        messageDisplayCompact: e,
                        renderSpoilers: t,
                        fontSize: a,
                        keyboardModeEnabled: s
                    }
                }(), {
                    messages: H,
                    channelStream: G,
                    oldestUnreadMessageId: B,
                    editingMessageId: w
                } = function(e) {
                    var t, n, a, l;
                    let i = (0, o.useStateFromStores)([M.default], () => M.default.getMessages(e.id), [e.id]),
                        r = (0, o.useStateFromStores)([N.default], () => null !== (n = N.default.getOldestUnreadMessageId(e.id)) && void 0 !== n ? n : null, [e.id]),
                        u = (0, m.useChannelHighlightsEnabledForGuild)(e.guild_id),
                        d = (0, o.useStateFromStoresArray)([h.default], () => {
                            if (!u) return [];
                            let t = h.default.getHighlightedMessageIds(e.id),
                                n = h.default.getTempHighlightedMessageIds(e.guild_id);
                            return Array.from([...n, ...t])
                        }),
                        {
                            enabled: f
                        } = E.default.useExperiment({
                            location: "41de6d_1"
                        }, {
                            autoTrackExposure: !1
                        }),
                        p = null !== (a = null === (t = R.default.getUser(S.default.getId())) || void 0 === t ? void 0 : t.hasFlag(F.UserFlags.SPAMMER)) && void 0 !== a && a,
                        _ = (0, c.useChannelSummariesExperiment)(e),
                        T = (0, C.default)("use_topic_dividers_in_chat"),
                        I = (0, o.useStateFromStoresArray)([g.default], () => _ && T && null !== (l = g.default.summaries(e.id)) && void 0 !== l ? l : [], [_, e.id, T]),
                        L = (0, o.useStateFromStores)([g.default], () => _ ? g.default.selectedSummary(e.id) : null, [_, e.id]),
                        v = s.useMemo(() => (0, O.default)({
                            channel: e,
                            messages: i,
                            highlightedMessageIds: d,
                            oldestUnreadMessageId: r,
                            treatSpam: f && !p,
                            summaries: I,
                            selectedSummary: L
                        }), [i, e, r, f, d, I, L]),
                        y = (0, o.useStateFromStores)([A.default], () => {
                            var t;
                            return null === (t = A.default.getEditingMessage(e.id)) || void 0 === t ? void 0 : t.id
                        });
                    return {
                        messages: i,
                        channelStream: v,
                        oldestUnreadMessageId: r,
                        editingMessageId: y
                    }
                }(t);
                return (0, a.jsx)(v.ObscuredDisplayContext.Provider, {
                    value: (0, x.default)(j, d),
                    children: (0, a.jsx)(k, {
                        ...u,
                        messageGroupSpacing: D,
                        showNewMessagesBar: !0,
                        channel: t,
                        messageDisplayCompact: !r && (i || b),
                        messages: H,
                        channelStream: G,
                        permissionVersion: p,
                        uploads: (0, o.useStateFromStores)([L.default], () => L.default.getFiles(t.id), [t]),
                        unreadCount: (0, o.useStateFromStores)([N.default], () => N.default.getUnreadCount(t.id), [t]),
                        hasUnreads: null != B,
                        canChat: y,
                        editingMessageId: w,
                        fontSize: P,
                        keyboardModeEnabled: U,
                        showingSpamBanner: n,
                        showingQuarantineBanner: l
                    })
                })
            })
        },
        891405: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("394846"),
                l = n("446674"),
                i = n("151426"),
                r = n("77078"),
                o = n("225664"),
                u = n("509802"),
                d = n("765969"),
                c = n("557562"),
                f = n("62587"),
                h = n("697218"),
                C = n("886074"),
                E = n("79945"),
                p = n("790950"),
                m = n("149279"),
                g = n("719923"),
                _ = n("590527"),
                S = n("692171"),
                A = n("875978"),
                T = n("782340"),
                M = n("868689");

            function I(e) {
                var t;
                let {
                    channel: n,
                    message: I,
                    togglePopout: N,
                    renderEmojiPicker: L,
                    shouldShow: R,
                    isFocused: v,
                    type: y = A.ReactionTypes.NORMAL
                } = e, {
                    hasTwoButtonEntryPoint: x
                } = (0, o.useBurstReactionsExperiment)(null !== (t = n.getGuildId()) && void 0 !== t ? t : "", !1), O = (0, l.useStateFromStores)([S.default], () => S.default.remainingBurstCurrency), D = (0, l.useStateFromStores)([h.default], () => h.default.getCurrentUser()), P = (0, g.isPremium)(D), b = y === A.ReactionTypes.BURST, j = !x || b;
                return (0, a.jsx)(u.default, {
                    contentTypes: [],
                    children: e => {
                        let t, {
                                visibleContent: l
                            } = e,
                            o = T.default.Messages.ADD_REACTION;
                        b && (o = P ? T.default.Messages.ADD_BURST_REACTION : (0, a.jsx)(f.NitroTooltipLabel, {
                            tooltipText: T.default.Messages.ADD_BURST_REACTION
                        }));
                        let u = r.TooltipColors.PRIMARY;
                        if (l === i.DismissibleContent.BURST_REACTION_BUTTON_SPARKLE) t = !!v && j;
                        return (0, a.jsx)(r.Popout, {
                            renderPopout: e => {
                                let {
                                    closePopout: t
                                } = e;
                                return L(n, I, t, b)
                            },
                            shouldShow: R,
                            onRequestClose: N,
                            position: s.isMobile ? "top" : "left",
                            align: s.isMobile ? "center" : "top",
                            children: (e, n) => {
                                let {
                                    onClick: s,
                                    ...l
                                } = e, {
                                    isShown: i
                                } = n;
                                return (0, a.jsx)(r.Tooltip, {
                                    disableTooltipPointerEvents: !1,
                                    text: o,
                                    color: u,
                                    "aria-label": T.default.Messages.ADD_BURST_REACTION_A11Y.format({
                                        n: O
                                    }),
                                    hideOnClick: !0,
                                    tooltipClassName: M.tooltip,
                                    children: e => {
                                        let {
                                            onMouseEnter: n,
                                            onMouseLeave: s,
                                            onClick: r
                                        } = e;
                                        return (0, a.jsx)(a.Fragment, {
                                            children: (0, a.jsxs)(m.Button, {
                                                onMouseEnter: () => {
                                                    null == n || n(), (0, c.maybeGetPacksForUser)("message context menu mouse enter"), (0, d.maybeGetEmojiCaptionsForUser)("message context menu mouse enter")
                                                },
                                                onMouseLeave: s,
                                                onClick: () => {
                                                    N(), (0, _.toggleBurstReactionPicker)(b), null == r || r()
                                                },
                                                "aria-label": b ? T.default.Messages.ADD_BURST_REACTION : T.default.Messages.ADD_REACTION,
                                                selected: i,
                                                ...l,
                                                children: [b ? (0, a.jsx)(p.default, {
                                                    className: M.icon
                                                }) : (0, a.jsx)(E.default, {
                                                    className: M.icon
                                                }), t && (0, a.jsx)(C.default, {})]
                                            })
                                        })
                                    }
                                }, b ? "add-burst-reaction" : "add-reaction")
                            }
                        })
                    }
                })
            }
        },
        777484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("118810");

            function s(e, t) {
                let n = e.offsetTop,
                    s = e.offsetParent;
                for (; null != s;) {
                    var l;
                    if (s === t || !(0, a.isElement)(s, HTMLElement)) break;
                    n += null !== (l = s.offsetTop) && void 0 !== l ? l : 0, s = s.offsetParent
                }
                return n
            }
        },
        31511: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("884691"),
                s = n("974667"),
                l = n("378765"),
                i = n("659500"),
                r = n("154864"),
                o = n("894488"),
                u = n("49111");

            function d(e) {
                let {
                    scrollerRef: t,
                    ...n
                } = e, d = a.useCallback(() => {
                    let e = t.current;
                    return null == e ? Promise.resolve() : new Promise(t => {
                        e.scrollToBottom({
                            callback: () => requestAnimationFrame(t)
                        })
                    })
                }, []), c = a.useCallback(() => {
                    let e = t.current;
                    return null == e ? Promise.resolve() : new Promise(t => {
                        e.scrollToTop({
                            callback: () => requestAnimationFrame(t)
                        })
                    })
                }, []), f = a.useCallback(e => {
                    var a, s, l;
                    if (!n.keyboardModeEnabled) return;
                    let i = null === (s = t.current) || void 0 === s ? void 0 : null === (a = s.getScrollerNode()) || void 0 === a ? void 0 : a.ownerDocument,
                        r = null == i ? void 0 : i.querySelector(e);
                    null != r && (null === (l = t.current) || void 0 === l || l.scrollIntoViewNode({
                        node: r,
                        padding: 4 * o.MESSAGE_PADDING,
                        callback: () => null == r ? void 0 : r.focus()
                    }))
                }, [n.keyboardModeEnabled]), h = a.useCallback(() => {
                    !n.hasMoreAfter && i.ComponentDispatch.dispatchToLastSubscribed(u.ComponentActions.TEXTAREA_FOCUS)
                }, [n.hasMoreAfter]), C = (0, s.default)({
                    id: r.MESSAGE_ID_PREFIX,
                    preserveFocusPosition: !1,
                    setFocus: f,
                    isEnabled: n.keyboardModeEnabled && !n.isEditing,
                    scrollToStart: c,
                    scrollToEnd: d,
                    onNavigateNextAtEnd: h
                }), E = a.useCallback(e => {
                    let {
                        atEnd: t = !1
                    } = e;
                    t ? C.focusLastVisibleItem() : C.focusFirstVisibleItem()
                }, [C]);
                return (0, l.useComponentAction)({
                    event: u.ComponentActions.FOCUS_MESSAGES,
                    handler: E
                }), C
            }
        },
        210062: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("884691"),
                s = n("65597"),
                l = n("913144"),
                i = n("225664"),
                r = n("206230"),
                o = n("166257"),
                u = n("845579"),
                d = n("15935");

            function c() {
                let {
                    enabled: e
                } = (0, i.useBurstReactionsExperiment)(), t = u.AnimateEmoji.useSetting(), n = (0, s.default)([r.default], () => r.default.useReducedMotion);
                a.useEffect(() => {
                    function a(e) {
                        let {
                            messageId: a,
                            channelId: s,
                            emoji: l,
                            optimistic: i,
                            burst: r
                        } = e;
                        !i && r && t && !n && (0, o.playBurstReaction)({
                            channelId: s,
                            messageId: a,
                            emoji: l,
                            key: d.BurstReactionEffectSource.EXTERNAL
                        })
                    }
                    return e && l.default.subscribe("MESSAGE_REACTION_ADD", a), () => {
                        l.default.unsubscribe("MESSAGE_REACTION_ADD", a)
                    }
                }, [t, e, n])
            }
        },
        85470: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var a = n("884691"),
                s = n("819689"),
                l = n("267567"),
                i = n("625149"),
                r = n("300322"),
                o = n("967241"),
                u = n("845579"),
                d = n("271938"),
                c = n("42203"),
                f = n("836417"),
                h = n("26989"),
                C = n("88093"),
                E = n("377253"),
                p = n("957255"),
                m = n("306160"),
                g = n("659500"),
                _ = n("773336"),
                S = n("61400"),
                A = n("913491"),
                T = n("583022"),
                M = n("363396"),
                I = n("49111");

            function N(e) {
                return p.default.can(I.Permissions.MANAGE_MESSAGES, e)
            }
            var L = function(e, t, n) {
                let L = a.useRef(n);
                return L.current = n, a.useCallback(n => {
                    var a, R, v, y, x;
                    if (!L.current || n.target !== n.currentTarget) return;
                    let O = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                        D = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                        P = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                        b = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                        j = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                        F = E.default.getMessage(t, e),
                        U = c.default.getChannel(t);
                    if (null == F || null == U) return;
                    let H = d.default.getId(),
                        k = F.author.id === H;
                    switch (n.key.toLowerCase()) {
                        case "backspace":
                            O && (N(U) || k) && (n.preventDefault(), (0, M.deleteMessage)(U, F, n));
                            break;
                        case "c":
                            ((0, _.isMac)() ? b : P) && m.SUPPORTS_COPY && (n.preventDefault(), (0, m.copy)(F.content));
                            break;
                        case "e":
                            if (O) {
                                ;
                                if (a = H, R = U, v = F, !R.isSystemDM() && (0, S.default)(v, a)) n.preventDefault(), (0, M.editMessage)(U, F)
                            }
                            break;
                        case "p":
                            if (O || j) {
                                ;
                                if (y = U, x = F, !y.isSystemDM() && !(0, A.default)(x) && (N(y) || y.isPrivate())) n.preventDefault(), (0, M.pinMessage)(U, F, n)
                            }
                            break;
                        case "+":
                            (O || j) && function(e) {
                                let t = null == e.guild_id || C.default.canChatInGuild(e.guild_id),
                                    n = u.RenderReactions.getSetting(),
                                    {
                                        disableReactionCreates: a
                                    } = (0, T.default)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && p.default.can(I.Permissions.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && l.default.isLurking(e.guild_id),
                                        isGuest: null != e.guild_id && h.default.isCurrentUserGuest(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, r.getIsActiveChannelOrUnarchivableThread)(e)
                                    });
                                return !a && n
                            }(U) && (n.preventDefault(), g.ComponentDispatch.dispatchKeyed(I.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, F.id, {
                                emojiPicker: !0
                            }));
                            break;
                        case "r":
                            (O || j) && (0, i.canReplyToMessage)(U, F) && (n.preventDefault(), (0, M.replyToMessage)(U, F, n));
                            break;
                        case "t":
                            if (O && (0, r.computeCanStartPublicThread)(U, F)) n.preventDefault(), (0, o.openThreadSidebarForCreating)(U, F, "Message Shortcut");
                            else if (F.hasFlag(I.MessageFlags.HAS_THREAD)) {
                                let e = c.default.getChannel(F.id);
                                null != e && (O || j) && (n.preventDefault(), (0, o.openThreadSidebarForViewing)(e, j))
                            }
                            break;
                        case "enter":
                            D && (n.preventDefault(), (0, M.markMessageUnread)(U, F));
                            break;
                        case "escape":
                            f.default.isEditing(U.id, F.id) ? s.default.endEditMessage(U.id) : g.ComponentDispatch.dispatch(I.ComponentActions.TEXTAREA_FOCUS)
                    }
                }, [e, t])
            }
        },
        120379: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var a = n("884691"),
                s = n("917351"),
                l = n.n(s),
                i = n("118810"),
                r = n("406189"),
                o = n("819689"),
                u = n("267363"),
                d = n("244201"),
                c = n("206230"),
                f = n("393414"),
                h = n("793237"),
                C = n("162805"),
                E = n("299039"),
                p = n("556118"),
                m = n("777484"),
                g = n("894488"),
                _ = n("49111");

            function S(e) {
                var t, n;
                if (null == e.jumpTargetId || !e.ready) return null;
                let {
                    jumpTargetId: a,
                    jumpTargetOffset: s
                } = e;
                if (e.has(a) || !e.hasMoreBefore && a === e.channelId) {
                    if (0 === s) return a;
                    let n = e.getByIndex(e.indexOf(a) + s);
                    return null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : a
                }
                let l = [a, ...e.map(e => {
                        let {
                            id: t
                        } = e;
                        return t
                    })].sort(E.default.compare),
                    i = l.indexOf(a),
                    r = null !== (n = l[i + (Math.abs(s) > 0 ? s : 1)]) && void 0 !== n ? n : l[i - 1];
                return null != r ? r : null
            }
            let A = {
                scrollTop: 0,
                scrollHeight: 0,
                offsetHeight: 0
            };
            class T {
                isReady() {
                    return this.props.messages.ready
                }
                isLoading() {
                    return this.loading || this.props.messages.loadingMore
                }
                isPinned() {
                    return this.pinned
                }
                isJumping() {
                    return this.jumping
                }
                isDragging() {
                    return this.dragging
                }
                isInitialized() {
                    return void 0 === this.initialScrollTop
                }
                isScrollLoadingDisabled() {
                    return this.isLoading() || !this.isInitialized() || this.isJumping() || this.isDragging() || !this.props.canLoadMore
                }
                isActivelyScrolling() {
                    return this.scrollCounter >= 5
                }
                getDocument() {
                    var e, t;
                    return null === (t = this.ref.current) || void 0 === t ? void 0 : null === (e = t.getScrollerNode()) || void 0 === e ? void 0 : e.ownerDocument
                }
                getElementFromMessageId(e) {
                    let t = this.getDocument(),
                        {
                            channel: {
                                id: n
                            }
                        } = this.props;
                    return null == t ? null : (0, p.getElementFromMessage)(t, n, e)
                }
                isScrolledToBottom() {
                    let {
                        scrollTop: e,
                        scrollHeight: t,
                        offsetHeight: n
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getScrollerState();
                    return e >= t - n - g.MESSAGE_PADDING && !this.props.messages.hasMoreAfter
                }
                mergePropsAndUpdate(e) {
                    this.mergePropsAndUpdate_(e), this.props.messages.ready && this.enableAutomaticAck()
                }
                mergePropsAndUpdate_(e) {
                    var t;
                    let n = this.props.messages,
                        a = this.props.focusId;
                    this.props = {
                        ...e
                    };
                    let {
                        offsetHeight: s,
                        scrollHeight: l
                    } = this.getScrollerState(), i = this.isHeightChange(s, l);
                    if (this.offsetHeightCache = s, this.scrollHeightCache = l, this.loading = e.messages.loadingMore, this.isInitialized() || this.isReady()) {
                        if (!this.isInitialized()) {
                            this.restoreScroll();
                            return
                        }
                    } else {
                        null == e.messages.jumpTargetId && this.scrollTo(Number.MAX_SAFE_INTEGER);
                        return
                    }
                    if (null != e.messages.jumpTargetId) {
                        if (this.isLoading()) return;
                        let t = S(e.messages);
                        if (null == t || this.isJumping() || e.messages.jumpSequenceId === n.jumpSequenceId) {
                            if (this.isJumping()) {
                                null != t ? this.scrollToMessage(t, !0) : this.jumping = !1;
                                return
                            }
                        } else {
                            let a;
                            let s = n.first();
                            null != s && e.messages.last() !== n.last() && e.messages.first() !== n.first() && (a = E.default.extractTimestamp(s.id)), this.scrollToMessage(t, !0, a);
                            return
                        }
                    }
                    if (e.messages.jumpedToPresent && n.jumpSequenceId !== e.messages.jumpSequenceId) {
                        this.jumping = !0, this.scrollTo(0), this.setScrollToBottom(!0);
                        return
                    }
                    let r = e.messages.last(),
                        o = n.last();
                    if (null != r && r.state === _.MessageStates.SENDING && (null == o ? void 0 : o.id) !== r.id) {
                        this.setScrollToBottom();
                        return
                    }
                    let {
                        focusId: u
                    } = this.props;
                    if (null != u && a !== u) {
                        let e = this.getElementFromMessageId(u);
                        if (null != e) {
                            null === (t = this.ref.current) || void 0 === t || t.scrollIntoViewNode({
                                node: e,
                                padding: g.MESSAGE_PADDING,
                                callback: this.handleScroll
                            });
                            return
                        }
                    }
                    i && this.fixScrollPosition(s, l)
                }
                getAnchorData(e, t, n) {
                    var a;
                    let s = this.getElementFromMessageId(e),
                        l = null === (a = this.ref.current) || void 0 === a ? void 0 : a.getScrollerNode();
                    if (!(0, i.isElement)(s) || null == l) return null;
                    let {
                        offsetHeight: r
                    } = s, o = (0, m.default)(s, l), u = o - t;
                    return null != n && (u = Math.max(-r, Math.min(n, u))), {
                        id: e,
                        offsetFromTop: u,
                        offsetTop: o,
                        offsetHeight: r,
                        clamped: null != u
                    }
                }
                cleanAutomaticAnchor() {
                    this.setAutomaticAnchor(null)
                }
                newMessageBarBuffer() {
                    return this.props.channel.isForumPost() ? g.NEW_MESSAGE_BAR_BUFFER_LARGE : g.NEW_MESSAGE_BAR_BUFFER
                }
                findAnchor() {
                    let {
                        messages: e,
                        hasUnreads: t,
                        channel: n
                    } = this.props, a = this.getScrollerState(), {
                        scrollTop: s
                    } = a, l = t && s >= this.newMessageBarBuffer() ? this.newMessageBarBuffer() : 0, i = null, r = t => {
                        var a;
                        return -1 === t ? n.id : null === (a = e._array[t]) || void 0 === a ? void 0 : a.id
                    }, o = -1, u = !1;
                    for (;;) {
                        let t = r(o);
                        if (null == t) break;
                        let n = this.getAnchorData(t, s);
                        if (this._bottomAnchor = n, u && null != n && n.offsetTop > s + l + a.offsetHeight) break;
                        if (u) {
                            o++;
                            continue
                        }
                        null != n && (n.offsetTop >= s + l || o === e.length - 1) && (i = n, u = !0), o++
                    }
                    return i
                }
                findFetchAnchor(e) {
                    let {
                        messages: t
                    } = this.props, {
                        scrollTop: n
                    } = this.getScrollerState(), a = e ? -1 : 1, s = null, l = t._array.length - 1;
                    for (let i = e ? l : 0; null != t._array[i]; i += a) {
                        let e = t._array[i],
                            a = this.getAnchorData(e.id, n);
                        if (null != a) {
                            s = a;
                            break
                        }
                    }
                    return s
                }
                getAnchorFixData() {
                    let e = [this.focusAnchor, this.isLoading() ? null : this.messageFetchAnchor, this.automaticAnchor];
                    for (let t of e) {
                        if (null == t) continue;
                        let e = this.getElementFromMessageId(t.id);
                        if (!(0, i.isElement)(e)) continue;
                        let n = t === this.messageFetchAnchor ? t.offsetHeight - e.offsetHeight : 0;
                        return {
                            node: e,
                            fixedScrollTop: e.offsetTop - (t.offsetFromTop + n)
                        }
                    }
                    return null
                }
                fixAnchorScrollPosition() {
                    let e = this.getAnchorFixData();
                    if (null == e) {
                        this.handleScroll();
                        return
                    }
                    let {
                        node: t,
                        fixedScrollTop: n
                    } = e;
                    if (null != this.focusAnchor) {
                        var a;
                        this.isPinned() ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll) : this.mergeTo(n, this.handleScroll), null === (a = this.ref.current) || void 0 === a || a.scrollIntoViewNode({
                            node: t,
                            padding: g.MESSAGE_PADDING,
                            callback: this.handleScroll
                        })
                    } else this.mergeTo(n, this.handleScroll);
                    this.isActivelyScrolling() ? this.setAutomaticAnchor(null) : this.setAutomaticAnchor(this.findAnchor()), !this.isLoading() && (this.messageFetchAnchor = null)
                }
                hasAnchor() {
                    return null != this.focusAnchor || null != this.messageFetchAnchor || null != this.automaticAnchor
                }
                updateFocusAnchor(e, t, n) {
                    let a = this.focusAnchor = null != e ? this.getAnchorData(e, t) : null;
                    null != a && (a.offsetFromTop >= n || t > a.offsetTop + a.offsetHeight) && (this.focusAnchor = null)
                }
                handleFocusAnchorScroll(e, t) {
                    var n;
                    this.updateFocusAnchor(null === (n = this.focusAnchor) || void 0 === n ? void 0 : n.id, e, t)
                }
                updateFetchAnchor(e, t, n) {
                    var a;
                    let s = null === (a = this.ref.current) || void 0 === a ? void 0 : a.getScrollerNode();
                    null != this.messageFetchAnchor && null != s && (this.messageFetchAnchor = this.getAnchorData(this.messageFetchAnchor.id, e, this.isInPlaceholderRegion({
                        scrollTop: e,
                        offsetHeight: t,
                        scrollHeight: n
                    }) > 0 ? t : void 0))
                }
                updateAutomaticAnchor(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        a = null === (t = this.ref.current) || void 0 === t ? void 0 : t.getScrollerNode();
                    if (null == this.automaticAnchor || null == a) return;
                    let s = this.getAnchorData(this.automaticAnchor.id, e);
                    n && null != s && null != this.automaticAnchor && (s.offsetFromTop = this.automaticAnchor.offsetFromTop), this.setAutomaticAnchor(s)
                }
                setAutomaticAnchor(e) {
                    var t, n;
                    this.automaticAnchor = e, null === (t = this._automaticAnchorCallbacks) || void 0 === t || t.forEach(e => e(this.automaticAnchor, this._bottomAnchor)), this.updateVisibleMessagesDebounced(null == e ? void 0 : e.id, null === (n = this._bottomAnchor) || void 0 === n ? void 0 : n.id)
                }
                getScrollerState() {
                    var e, t;
                    return null !== (t = null === (e = this.ref.current) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : A
                }
                isHeightChange(e, t) {
                    return e !== this.offsetHeightCache || t !== this.scrollHeightCache
                }
                isInPlaceholderRegion(e) {
                    let {
                        scrollTop: t,
                        offsetHeight: n,
                        scrollHeight: a
                    } = e, {
                        messages: s,
                        placeholderHeight: l
                    } = this.props;
                    return s.hasMoreBefore && t < l && a > n ? 1 : s.hasMoreAfter && t >= a - n - l ? 2 : 0
                }
                isInScrollTriggerLoadingRegion(e) {
                    let {
                        scrollTop: t,
                        offsetHeight: n,
                        scrollHeight: a
                    } = e, {
                        messages: s
                    } = this.props;
                    return s.hasMoreBefore && t <= this.getOffsetToTriggerLoading("top", e) && a > n ? 1 : s.hasMoreAfter && t >= this.getOffsetToTriggerLoading("bottom", e) ? 2 : 0
                }
                handleScrollSpeed(e) {
                    if (this.isJumping() || this.isDragging() || !this.props.canLoadMore) return;
                    let {
                        scrollTop: t,
                        offsetHeight: n,
                        scrollHeight: a
                    } = e, {
                        prevScrollTop: s,
                        props: {
                            placeholderHeight: l
                        }
                    } = this;
                    if (this.prevScrollTop = t, null == s) return;
                    let i = this.isInPlaceholderRegion(e),
                        r = t - s;
                    0 !== i && (1 === i && t + r <= 0 ? (this.mergeTo(l - n), this.prevScrollTop = l - n) : 2 === i && t + r >= a - n && (this.mergeTo(a - l), this.prevScrollTop = a - l))
                }
                enableAutomaticAck() {
                    this.isInitialized() && !this.acking && (this.acking = !0, this.updateStoreDimensions(() => {
                        (0, u.enableAutomaticAck)(this.props.channel.id, this.props.windowId)
                    }))
                }
                fixScrollPosition(e, t) {
                    this.offsetHeightCache = e, this.scrollHeightCache = t, this.fixJumpTarget(), this.isPinned() && null == this.messageFetchAnchor && null == this.focusAnchor ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll) : this.fixAnchorScrollPosition()
                }
                fixJumpTarget() {
                    if (!this.isJumping()) return;
                    let {
                        messages: e,
                        hasUnreads: t
                    } = this.props;
                    if (null != e.jumpTargetId) {
                        let n = S(e);
                        if (null == n) return;
                        let a = this.getElementFromMessageId(n);
                        (0, i.isElement)(a) ? this.scrollTo(this.getOffsetOrientationFromNode(a, "middle", t ? this.newMessageBarBuffer() : g.MESSAGE_PADDING), !0): this.scrollToNewMessages(!0, "middle")
                    } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0)
                }
                scrollToNewMessages() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                        a = arguments.length > 2 ? arguments[2] : void 0,
                        s = null === (e = this.getDocument()) || void 0 === e ? void 0 : e.getElementById(g.NEW_MESSAGE_BAR_ID),
                        l = () => {
                            this.jumping = !1, this.setAutomaticAnchor(this.findAnchor()), null != a && a(), this.handleScroll()
                        };
                    this.pinned = !1, this.jumping = t, null != s ? this.scrollTo(this.getOffsetOrientationFromNode(s, n, this.newMessageBarBuffer()), t, l) : this.scrollTo(this.getOffsetToPreventLoading("top"), t, l)
                }
                getOffsetOrientationFromNode(e, t) {
                    var n;
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        s = null === (n = this.ref.current) || void 0 === n ? void 0 : n.getScrollerNode();
                    if (null == s) return 0;
                    let l = this.getScrollerState(),
                        i = (0, m.default)(e, s);
                    return "middle" === t ? Math.min(i - .5 * l.offsetHeight + .5 * e.offsetHeight + -8, i - a) : i - a
                }
                restoreScroll() {
                    if (this.isInitialized()) return;
                    let {
                        initialScrollTop: e
                    } = this;
                    this.initialScrollTop = void 0;
                    let t = S(this.props.messages);
                    null != t ? this.scrollToMessage(t, !1) : this.props.hasUnreads && this.props.channel.type !== _.ChannelTypes.GUILD_VOICE && this.props.channel.type !== _.ChannelTypes.GUILD_STAGE_VOICE ? this.scrollToNewMessages() : null != e ? this.scrollTo(e + this.props.placeholderHeight, !1, this.handleScroll) : this.setScrollToBottom()
                }
                scrollTo(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        a = arguments.length > 2 ? arguments[2] : void 0;
                    null === (t = this.ref.current) || void 0 === t || t.scrollTo({
                        to: e,
                        animate: !c.default.useReducedMotion && n,
                        callback: a
                    }), this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced()
                }
                mergeTo(e, t) {
                    var n;
                    null === (n = this.ref.current) || void 0 === n || n.mergeTo({
                        to: e,
                        callback: t
                    }), this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced()
                }
                setScrollToBottom() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        {
                            messages: t,
                            channel: n
                        } = this.props;
                    if (t.hasMoreAfter) {
                        var a, s;
                        a = n, o.default.jumpToPresent(a.id, _.MAX_MESSAGES_PER_CHANNEL), (0, f.transitionToGuild)(null !== (s = a.getGuildId()) && void 0 !== s ? s : _.ME, a.id)
                    } else this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
                        this.jumping = !1, this.handleScroll()
                    })
                }
                updateStoreDimensions(e) {
                    if (this.isJumping() || !this.isInitialized()) return;
                    let {
                        channel: t
                    } = this.props;
                    if (this.isPinned()) r.default.clearChannelDimensions(t.id, e);
                    else {
                        let {
                            placeholderHeight: n
                        } = this.props, {
                            scrollTop: a,
                            scrollHeight: s,
                            offsetHeight: l
                        } = this.getScrollerState();
                        r.default.updateChannelDimensions(t.id, a - n, s - n, l, e)
                    }
                }
                scrollIntoViewRect() {}
                scrollPageUp() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    null === (e = this.ref.current) || void 0 === e || e.scrollPageUp({
                        animate: t
                    })
                }
                scrollPageDown() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    null === (e = this.ref.current) || void 0 === e || e.scrollPageDown({
                        animate: t
                    })
                }
                scrollToMessage(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    if (null == this.ref.current) return;
                    if (e === this.props.channel.id) {
                        this.scrollTo(0);
                        return
                    }
                    let a = this.getElementFromMessageId(e);
                    if (!this.isJumping() && t && null != n && !c.default.useReducedMotion) {
                        let t = E.default.extractTimestamp(e);
                        t > n ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)
                    }
                    this.pinned = !1, this.jumping = !0;
                    let s = () => {
                        this.jumping = !1, (0, i.isElement)(a) && c.default.keyboardModeEnabled && a.focus({
                            preventScroll: !0
                        }), this.scrollCounter = 0, this.handleScroll(), this._scrollCompleteCallbacks.forEach(e => e())
                    };
                    (0, i.isElement)(a) ? this.scrollTo(this.getOffsetOrientationFromNode(a, "middle", this.props.hasUnreads ? this.newMessageBarBuffer() : g.MESSAGE_PADDING), t, s): this.scrollToNewMessages(t, "middle", s)
                }
                getOffsetToTriggerLoading(e, t) {
                    let {
                        scrollHeight: n,
                        offsetHeight: a
                    } = t, {
                        messages: s,
                        hasUnreads: l,
                        placeholderHeight: i
                    } = this.props;
                    if ("top" === e) return s.hasMoreBefore ? l ? i - g.PLACEHOLDER_BUFFER - 2 : i + 500 : 0;
                    return s.hasMoreAfter ? n - a - i - 500 : n - a
                }
                getOffsetToPreventLoading(e) {
                    let {
                        messages: t
                    } = this.props, n = 0;
                    return "top" === e && t.hasMoreBefore ? n = 2 : "bottom" === e && t.hasMoreAfter && (n = -2), this.getOffsetToTriggerLoading(e, this.getScrollerState()) + n
                }
                getSnapshotBeforeUpdate(e) {
                    if (this.hasAnchor() || null != e) {
                        let {
                            scrollTop: t,
                            offsetHeight: n,
                            scrollHeight: a
                        } = this.getScrollerState();
                        this.updateFocusAnchor(e, t, n), this.updateFetchAnchor(t, n, a), this.updateAutomaticAnchor(t)
                    }
                }
                addAutomaticAnchorCallback(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    this._automaticAnchorCallbacks.push(e), this._automaticAnchorCallbacks = l.uniq(this._automaticAnchorCallbacks), !0 === t && this.setAutomaticAnchor(this.findAnchor())
                }
                removeAutomaticAnchorCallback(e) {
                    this._automaticAnchorCallbacks = l.without(this._automaticAnchorCallbacks, e)
                }
                addScrollCompleteCallback(e) {
                    this._scrollCompleteCallbacks.push(e), this._scrollCompleteCallbacks = l.uniq(this._scrollCompleteCallbacks)
                }
                removeScrollCompleteCallback(e) {
                    this._scrollCompleteCallbacks = l.without(this._scrollCompleteCallbacks, e)
                }
                cleanup() {
                    this.acking = !1, this.updateStoreDimensionsDebounced.cancel(), this._automaticAnchorCallbacks.forEach(e => this.removeAutomaticAnchorCallback(e)), (0, u.disableAutomaticAck)(this.props.channel.id, this.props.windowId)
                }
                constructor(e) {
                    var t, n = this;
                    this.ref = a.createRef(), this.automaticAnchor = null, this.messageFetchAnchor = null, this.focusAnchor = null, this.jumping = !1, this.dragging = !1, this.isAtBottom = !1, this.prevScrollTop = null, this.anchorTimeout = null, this.initialScrollTop = null, this.acking = !1, this.scrollCounter = 0, this.offsetHeightCache = 0, this.scrollHeightCache = 0, this.scrollTopCache = -1, this._bottomAnchor = null, this._automaticAnchorCallbacks = [], this._scrollCompleteCallbacks = [], this.updateVisibleMessagesDebounced = l.debounce(h.updateVisibleMessages, 300), this.handleScroll = e => {
                        var t;
                        if (!this.isInitialized()) return;
                        let n = this.getScrollerState(),
                            a = this.isScrolledToBottom(n);
                        if (a !== this.isAtBottom && (a ? (this.isAtBottom = !0, this.props.handleScrollToBottom()) : (this.isAtBottom = !1, this.props.handleScrollFromBottom())), n.offsetHeight !== this.offsetHeightCache || n.scrollHeight !== this.scrollHeightCache) this.scrollCounter = 0, clearTimeout(this.anchorTimeout), !this.isPinned() && (null == this.automaticAnchor ? this.setAutomaticAnchor(this.findAnchor()) : this.updateAutomaticAnchor(n.scrollTop, !0)), clearTimeout(this.anchorTimeout), this.fixScrollPosition(n.offsetHeight, n.scrollHeight), this.scrollTopCache = n.scrollTop;
                        else {
                            if (null != e && e.target !== (null === (t = this.ref.current) || void 0 === t ? void 0 : t.getScrollerNode())) return;
                            this.scrollTopCache !== n.scrollTop && (this.pinned = a, this.scrollCounter = Math.min(this.scrollCounter + 1, 5), this.pinned ? this.cleanAutomaticAnchor() : null != this.automaticAnchor ? this.updateAutomaticAnchor(n.scrollTop, !0) : this.setAutomaticAnchor(this.findAnchor()), this.scrollTopCache = n.scrollTop, clearTimeout(this.anchorTimeout), this.anchorTimeout = setTimeout(() => {
                                this.scrollCounter = 0, this.anchorTimeout = null, this.prevScrollTop = null;
                                let {
                                    scrollHeight: e,
                                    offsetHeight: t
                                } = this.getScrollerState();
                                this.isHeightChange(t, e) ? this.handleScroll() : (this.cleanAutomaticAnchor(), !this.isPinned() && this.setAutomaticAnchor(this.findAnchor()))
                            }, 35))
                        }
                        if (this.handleFocusAnchorScroll(n.scrollTop, n.offsetHeight), this.updateStoreDimensionsDebounced(), this.isScrollLoadingDisabled()) return !this.props.canLoadMore && this.enableAutomaticAck(), this.handleScrollSpeed(n);
                        let s = this.isInScrollTriggerLoadingRegion(n);
                        1 === s ? this.loadMore() : 2 === s ? this.loadMore(!0) : this.enableAutomaticAck(), this.handleScrollSpeed(n)
                    }, this.handleResize = (e, t) => {
                        let {
                            offsetHeightCache: n,
                            scrollHeightCache: a
                        } = this;
                        "container" === t ? n = e.contentRect.height : "content" === t && (a = e.contentRect.height), this.isHeightChange(n, a) && this.fixScrollPosition(n, a)
                    }, this.handleMouseDown = e => {
                        e.target === e.currentTarget && (this.dragging = !0)
                    }, this.handleMouseUp = () => {
                        this.dragging = !1, this.handleScroll()
                    }, this.loadMore = function() {
                        let e, t, a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            {
                                messages: s
                            } = n.props;
                        if (a) {
                            let e = s.last();
                            null != e && (t = e.id)
                        } else {
                            let t = s.first();
                            null != t && (e = t.id)
                        }
                        n.messageFetchAnchor = n.findFetchAnchor(a), n.loading = !0, o.default.fetchMessages({
                            channelId: n.props.channel.id,
                            before: e,
                            after: t,
                            limit: _.MAX_MESSAGES_PER_CHANNEL,
                            truncate: !0
                        })
                    }, this.updateStoreDimensionsDebounced = l.debounce(this.updateStoreDimensions, 200), this.props = e, this.loading = e.messages.loadingMore;
                    let s = C.default.getChannelDimensions(e.channel.id);
                    null != e.messages.jumpTargetId ? this.pinned = !1 : (this.initialScrollTop = null !== (t = null == s ? void 0 : s.scrollTop) && void 0 !== t ? t : null, this.pinned = null == s)
                }
            }

            function M(e) {
                let {
                    messages: t,
                    channel: n,
                    compact: s,
                    hasUnreads: l,
                    focusId: i,
                    placeholderHeight: r,
                    canLoadMore: o = !0,
                    handleScrollToBottom: u,
                    handleScrollFromBottom: c
                } = e, {
                    windowId: f
                } = a.useContext(d.default), [h] = a.useState(() => new T({
                    messages: t,
                    channel: n,
                    compact: s,
                    hasUnreads: l,
                    focusId: i,
                    placeholderHeight: r,
                    canLoadMore: o,
                    windowId: f,
                    handleScrollToBottom: u,
                    handleScrollFromBottom: c
                }));
                return h.getSnapshotBeforeUpdate(i), a.useLayoutEffect(() => h.mergePropsAndUpdate({
                    messages: t,
                    channel: n,
                    compact: s,
                    hasUnreads: l,
                    focusId: i,
                    placeholderHeight: r,
                    canLoadMore: o,
                    windowId: f,
                    handleScrollToBottom: u,
                    handleScrollFromBottom: c
                })), a.useLayoutEffect(() => () => h.cleanup(), [h]), h
            }
        },
        221068: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return $
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("866227"),
                i = n.n(l),
                r = n("446674"),
                o = n("819689"),
                u = n("783480"),
                d = n("734575"),
                c = n("206230"),
                f = n("716241"),
                h = n("324051"),
                C = n("34695"),
                E = n("554393"),
                p = n("120027"),
                m = n("934288"),
                g = n("512395"),
                _ = n("144491"),
                S = n("933152"),
                A = n("820899"),
                T = n("347738"),
                M = n("339670"),
                I = n("21763"),
                N = n("719926"),
                L = n("957255"),
                R = n("660478"),
                v = n("18494"),
                y = n("697218"),
                x = n("410889"),
                O = n("888400"),
                D = n("299039"),
                P = n("154864"),
                b = n("383667"),
                j = n("459776"),
                F = n("366757"),
                U = n("699473"),
                H = n("556118"),
                k = n("342009"),
                G = n("97810"),
                B = n("268739"),
                w = n("933629"),
                V = n("88243"),
                W = n("753089"),
                z = n("210062"),
                K = n("894488"),
                Y = n("49111"),
                Z = n("964974"),
                q = n("782340");

            function X(e) {
                return null != e && e.type === Y.ChannelStreamTypes.MESSAGE && e.content.id === e.groupId
            }

            function Q(e, t) {
                o.default.jumpToMessage({
                    channelId: e.id,
                    messageId: t,
                    flash: !0
                })
            }
            let J = s.memo(function(e) {
                let {
                    file: t,
                    channel: n,
                    user: s,
                    isGroupStart: l
                } = e;
                return (0, a.jsx)(U.default, {
                    isGroupStart: l,
                    channel: n,
                    message: new N.default({
                        id: t.id,
                        key: "pending-upload-".concat(t.id),
                        type: Y.MessageTypes.DEFAULT,
                        author: s,
                        channel_id: n.id,
                        customRenderedContent: {
                            hasSpoilerEmbeds: !1,
                            content: (0, a.jsx)(x.AttachmentUpload, {
                                filename: t.name,
                                progress: null != t.progress ? t.progress : 0,
                                size: t.currentSize,
                                onCancelUpload: () => {
                                    u.default.cancel(t)
                                }
                            })
                        }
                    })
                })
            });

            function $(e) {
                var t;
                let n, l, u, {
                        channel: x,
                        messages: U,
                        unreadCount: $,
                        showNewMessagesBar: ee,
                        messageDisplayCompact: et,
                        channelStream: en,
                        uploads: ea,
                        scrollManager: es,
                        specs: el,
                        filterAfterTimestamp: ei,
                        showingSpamBanner: er,
                        showingQuarantineBanner: eo,
                        isAtBottom: eu,
                        jumpToPresent: ed
                    } = e,
                    ec = (0, g.useChannelHighlightsEnabledForGuild)(x.guild_id),
                    ef = y.default.getCurrentUser(),
                    eh = () => es.isInitialized() || U.ready,
                    eC = (0, F.useShowConvoStarterInDM)(x),
                    [eE, ep] = s.useState(!1),
                    em = U.length > 0 && (null === (t = U.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(x)),
                    eg = (0, d.useChannelSummariesExperiment)(x),
                    e_ = (0, r.useStateFromStores)([T.default], () => T.default.shouldShowTopicsBar()),
                    eS = (0, S.useStrangerDangerWarning)(x.id, Z.LOCATION_CONTEXT_WEB);
                x.isDM() && null != eS && (n = (0, a.jsx)(A.StrangerDangerWarningBanner, {
                    channelId: x.id,
                    warningId: eS.id,
                    senderId: x.getRecipientId()
                }));
                let eA = x.isForumPost() && !em ? (0, a.jsx)(E.default, {
                        postId: x.id
                    }) : null,
                    eT = (0, m.default)(x.id);
                (0, z.default)();
                let eM = null,
                    eI = [];
                if (!eE && er) eI.push((0, a.jsx)(h.RedactedMessages, {
                    channel: x,
                    count: U.length,
                    showRedactedMessages: () => ep(!0)
                }));
                else {
                    let e = en.map((e, t) => {
                        var n, s, l;
                        if (e.type === Y.ChannelStreamTypes.DIVIDER) {
                            let n = null != e.unreadId;
                            return null != ei ? null : e.isSummaryDivider ? (0, a.jsx)(I.default, {
                                index: t,
                                item: e,
                                channel: x,
                                isBeforeGroup: null == e.content && X(en[t + 1])
                            }) : (0, a.jsx)(G.default, {
                                isUnread: n,
                                isBeforeGroup: null == e.content && X(en[t + 1]),
                                id: n ? K.NEW_MESSAGE_BAR_ID : void 0,
                                children: e.content
                            }, "divider-".concat(null !== (l = null !== (s = e.contentKey) && void 0 !== s ? s : e.unreadId) && void 0 !== l ? l : t))
                        }
                        if (e.type === Y.ChannelStreamTypes.FORUM_POST_ACTION_BAR) return (0, a.jsx)(E.default, {
                            parentChannelId: x.parent_id,
                            postId: x.id,
                            isLastItem: t + 1 === en.length,
                            isFirstMessage: !0
                        }, "forum-post-action-bar-".concat(x.id));
                        if (e.type === Y.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED || e.type === Y.ChannelStreamTypes.MESSAGE_GROUP_SPAMMER) {
                            let t;
                            return t = e.type === Y.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED ? q.default.Messages.BLOCKED_MESSAGE_COUNT : q.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT, (0, a.jsx)(k.default, {
                                unreadId: K.NEW_MESSAGE_BAR_ID,
                                messages: e,
                                channel: x,
                                compact: et,
                                collapsedReason: t
                            }, e.key)
                        }
                        if (null != ei && ei > 1e3 * e.content.timestamp.unix()) return;
                        let i = L.default.can(Y.Permissions.CREATE_INSTANT_INVITE, x);
                        if ((0, b.default)(e.content, i)) return;
                        e.type === Y.ChannelStreamTypes.MESSAGE && null == eM && (eM = e);
                        let r = e.groupId === (null === (n = eM) || void 0 === n ? void 0 : n.groupId) ? eM.content.id : e.groupId,
                            o = e.type === Y.ChannelStreamTypes.THREAD_STARTER_MESSAGE ? H.ThreadStarterChatMessage : H.default;
                        return (0, a.jsx)(o, {
                            compact: et,
                            channel: x,
                            message: e.content,
                            groupId: r,
                            flashKey: e.flashKey,
                            id: (0, P.getMessageDOMId)(x.id, e.content.id),
                            isLastItem: t >= en.length - 1,
                            isHighlight: e.isHighlight,
                            renderContentOnly: eT
                        }, e.content.id)
                    });
                    eI.push(...e)
                }
                let eN = en[en.length - 1];
                if (null != ef && ea.forEach((e, t) => {
                        let n = 0 === t && (0, j.isNewGroupItem)(x, eN, new N.default({
                            type: Y.MessageTypes.DEFAULT,
                            author: ef
                        }));
                        eI.push((0, a.jsx)(J, {
                            file: e,
                            channel: x,
                            user: ef,
                            isGroupStart: n
                        }, "upload-".concat(e.id)))
                    }), U.hasMoreBefore && null == ei) {
                    U.length > 0 && eI.unshift((0, a.jsx)("div", {
                        style: {
                            height: K.PLACEHOLDER_BUFFER,
                            flex: "0 0 auto"
                        }
                    }, "buffer"));
                    let {
                        useReducedMotion: e
                    } = c.default;
                    (e && eh() || !e) && eI.unshift((0, a.jsx)(V.default, {
                        compact: et,
                        ...el
                    }, "has-more"))
                }
                if ((!U.hasMoreBefore || null != ei) && eI.unshift((0, a.jsx)(C.default, {
                        channel: x,
                        showingBanner: er || eo
                    }, "empty-message")), U.hasMoreAfter && eI.push((0, a.jsx)(V.default, {
                        compact: et,
                        ...el
                    }, "has-more-after")), !er && !eo && eC && eh() && eI.push((0, a.jsx)(W.default, {
                        channel: x
                    })), $ > 0 && ee && eh()) {
                    let e, t, n;
                    let s = R.default.getOldestUnreadTimestamp(x.id),
                        r = 0 !== s ? s : D.default.extractTimestamp(x.id),
                        o = (0, O.isSameDay)(i(), i(new Date(r)));
                    if (R.default.isEstimated(x.id) ? (e = o ? q.default.Messages.NEW_MESSAGES_ESTIMATED : q.default.Messages.NEW_MESSAGES_ESTIMATED_WITH_DATE, t = q.default.Messages.NEW_MESSAGES_PILL_ESTIMATED, n = q.default.Messages.NEW_MESSAGES_ESTIMATED_SUMMARIES) : (e = o ? q.default.Messages.NEW_MESSAGES : q.default.Messages.NEW_MESSAGES_WITH_DATE, t = q.default.Messages.NEW_MESSAGES_PILL, n = q.default.Messages.NEW_MESSAGES_SUMMARIES), eg && (0, d.channelEligibleForSummaries)(x)) {
                        let t = R.default.ackMessageId(x.id),
                            s = (0, M.getUnreadTopicsCount)(x.id, R.default.getOldestUnreadMessageId(x.id));
                        if ((0, f.trackWithMetadata)(Y.AnalyticEvents.SUMMARIES_UNREAD_BAR_VIEWED, {
                                num_unread_summaries: s,
                                num_unread_messages: $,
                                last_ack_message_id: t,
                                summaries_enabled_by_user: e_,
                                summaries_enabled_for_channel: (0, d.canSeeChannelSummaries)(x)
                            }), (0, d.canSeeChannelSummaries)(x)) {
                            let t = e_ ? n.format({
                                count: $
                            }) : e.format({
                                count: $,
                                timestamp: r
                            });
                            if (e_) {
                                let e = s > 0 ? (0, a.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        textTransform: "none",
                                        alignItems: "center",
                                        position: "absolute",
                                        left: "40%"
                                    },
                                    children: [n.format({
                                        count: $
                                    }), (0, a.jsx)(p.default, {
                                        style: {
                                            paddingLeft: 8,
                                            paddingRight: 8
                                        },
                                        height: 4,
                                        width: 4
                                    }), q.default.Messages.NEW_SUMMARIES.format({
                                        count: s
                                    })]
                                }) : (0, a.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        textTransform: "none",
                                        alignItems: "center",
                                        position: "absolute",
                                        left: "45%"
                                    },
                                    children: t
                                });
                                l = (0, a.jsx)(w.NewTopicsBar, {
                                    scrollManager: es,
                                    content: e,
                                    channel: x
                                })
                            } else {
                                let e = (0, a.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        textTransform: "none",
                                        alignItems: "center"
                                    },
                                    children: s > 0 ? (0, a.jsxs)(a.Fragment, {
                                        children: [n.format({
                                            count: $
                                        }), (0, a.jsx)(p.default, {
                                            style: {
                                                paddingLeft: 8,
                                                paddingRight: 8
                                            },
                                            height: 4,
                                            width: 4
                                        }), q.default.Messages.NEW_SUMMARIES.format({
                                            count: s
                                        })]
                                    }) : (0, a.jsx)(a.Fragment, {
                                        children: t
                                    })
                                });
                                l = (0, a.jsx)(w.NewMessagesBar, {
                                    content: e,
                                    channelId: x.id
                                })
                            }
                        }
                    } else l = ec ? (0, a.jsx)(w.NewMessagesPill, {
                        content: t.format({
                            count: $
                        }),
                        channelId: x.id,
                        hasNoticeAbove: x.isForumPost() && !em
                    }) : (0, a.jsx)(w.NewMessagesBar, {
                        content: e.format({
                            count: $,
                            timestamp: r
                        }),
                        channelId: x.id
                    })
                }
                if (null == l && (0, d.canSeeChannelSummaries)(x) && e_ && (l = (0, a.jsx)(w.TopicsPill, {
                        channel: x,
                        scrollManager: es
                    })), U.error) u = (0, a.jsx)(w.ErrorLoadingBar, {
                    loading: U.loadingMore,
                    onClick: () => {
                        var e;
                        return e = x.id, void o.default.fetchMessages({
                            channelId: e,
                            limit: Y.MAX_MESSAGES_PER_CHANNEL,
                            truncate: !0
                        })
                    }
                });
                else if (ec && eh()) {
                    let {
                        jumpReturnTargetId: e
                    } = U, t = ed;
                    null != e && (t = () => Q(x, e)), u = (0, a.jsx)(B.default, {
                        channelId: x.id,
                        guildId: x.guild_id,
                        messages: U,
                        scrollManager: es,
                        isAtBottom: eu,
                        hasMoreAfter: U.hasMoreAfter,
                        isLoading: U.loadingMore,
                        isJumpingToBottom: U.jumpedToPresent,
                        jumpToPresent: t
                    }, x.id)
                } else if (!ec && U.hasMoreAfter && eh()) {
                    let {
                        jumpReturnTargetId: e
                    } = U;
                    u = U.loadingMore && U.jumpedToPresent ? (0, a.jsx)(w.JumpToPresentBar, {}) : null != e ? (0, a.jsx)(w.JumpToPresentBar, {
                        type: w.JumpBarType.REPLY,
                        onClick: () => Q(x, e)
                    }) : (0, a.jsx)(w.JumpToPresentBar, {
                        onClick: () => (function(e) {
                            o.default.jumpToPresent(e.id, Y.MAX_MESSAGES_PER_CHANNEL);
                            let t = v.default.getChannelId();
                            e.id === t && (0, _.transitionToChannel)(e.id)
                        })(x)
                    })
                }
                return {
                    channelStreamMarkup: eI,
                    newMessagesBar: l,
                    jumpToPresentBar: u,
                    forumPostActionBar: eA,
                    strangerDangerWarningBanner: n
                }
            }
        },
        922177: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("324898");

            function l(e, t) {
                let {
                    message: n,
                    compact: l
                } = e;
                return (0, a.jsx)(s.default, {
                    message: n,
                    content: t,
                    compact: l
                })
            }
        },
        789790: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("568734"),
                l = n("913491"),
                i = n("823674"),
                r = n("49111"),
                o = n("877671");

            function u(e) {
                let {
                    setPopout: t,
                    messagePopouts: {
                        emojiPicker: n,
                        emojiBurstPicker: u,
                        moreUtilities: d
                    },
                    showClydeAiEmbeds: c,
                    setShowClydeAiEmbeds: f,
                    isFocused: h,
                    buttonProps: {
                        message: C,
                        channel: E,
                        groupId: p,
                        compact: m = !1
                    }
                } = e, g = C.state === r.MessageStates.SENDING, _ = C.id === p, S = (0, s.hasFlag)(C.flags, r.MessageFlags.EPHEMERAL), A = C.state === r.MessageStates.SEND_FAILED;
                return g || S && !A ? null : (0, a.jsx)(i.default, {
                    className: o.buttons,
                    innerClassName: o.buttonsInner,
                    isHeader: !m && _ && !(0, l.default)(C),
                    channel: E,
                    message: C,
                    setPopout: t,
                    showEmojiPicker: n,
                    showEmojiBurstPicker: u,
                    showMoreUtilities: d,
                    showClydeAiEmbeds: c,
                    setShowClydeAiEmbeds: f,
                    isFocused: h
                })
            }
        },
        227984: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("93332"),
                i = n("587904"),
                r = n("913491"),
                o = n("865343"),
                u = n("909917"),
                d = n("380986"),
                c = n("49111");
            let f = s.memo(function(e) {
                    let {
                        message: t,
                        channel: n,
                        compact: i = !1,
                        groupId: r,
                        isGroupStart: o,
                        usernameProfile: f,
                        avatarProfile: h,
                        setPopout: C,
                        author: E,
                        repliedMessage: p,
                        roleIcon: m
                    } = e, g = (0, d.useContextMenuUser)(t.author.id, n.id), _ = (0, d.useClickMessageAuthorUsername)(t, n, f, C), S = (0, d.useClickMessageAuthorAvatar)(h, C), A = s.useCallback(() => C({
                        usernameProfile: !1,
                        avatarProfile: !1,
                        referencedUsernameProfile: !1
                    }), [C]);
                    return (0, a.jsx)(l.default, {
                        guildId: n.guild_id,
                        message: t,
                        channel: n,
                        repliedMessage: p,
                        author: E,
                        compact: i,
                        subscribeToGroupId: r,
                        showTimestampOnHover: !o && i && t.type !== c.MessageTypes.REPLY,
                        renderPopout: u.default,
                        showAvatarPopout: h,
                        showUsernamePopout: f,
                        onClickAvatar: S,
                        onClickUsername: _,
                        onContextMenu: g,
                        onPopoutRequestClose: A,
                        roleIcon: m
                    })
                }),
                h = s.memo(i.default);

            function C(e) {
                let {
                    messageProps: t,
                    setPopout: n,
                    messagePopouts: s,
                    replyReference: l,
                    author: i,
                    repliedMessage: u,
                    roleIcon: d
                } = e, {
                    message: c,
                    compact: C,
                    channel: E,
                    groupId: p
                } = t, {
                    usernameProfile: m,
                    avatarProfile: g
                } = s;
                if ((0, r.default)(c)) return null;
                let _ = c.id === p;
                return _ || C || null != l ? (0, a.jsx)(f, {
                    message: c,
                    channel: E,
                    compact: C,
                    subscribeToGroupId: p,
                    isGroupStart: _,
                    groupId: p,
                    setPopout: n,
                    usernameProfile: m,
                    avatarProfile: g,
                    author: i,
                    repliedMessage: u,
                    roleIcon: d
                }) : (0, a.jsx)(h, {
                    compact: !0,
                    timestamp: c.timestamp,
                    isInline: !1,
                    id: (0, o.getMessageTimestampId)(c),
                    isVisibleOnlyOnHover: !0,
                    cozyAlt: !0
                })
            }
        },
        82080: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("446674"),
                i = n("819689"),
                r = n("249561"),
                o = n("850391"),
                u = n("681060"),
                d = n("271938"),
                c = n("836417"),
                f = n("305961"),
                h = n("957255"),
                C = n("497880"),
                E = n("851220"),
                p = n("659500"),
                m = n("568734"),
                g = n("718422"),
                _ = n("49111"),
                S = n("877671");

            function A(e) {
                let {
                    value: t,
                    channel: n
                } = e;
                return (0, g.applyChatRestrictions)({
                    type: o.ChatInputTypes.EDIT,
                    content: t,
                    channel: n,
                    restrictMentions: !1,
                    respectCooldown: !1
                })
            }

            function T(e) {
                let {
                    channel: t,
                    message: n
                } = e, {
                    id: o
                } = t, {
                    id: u
                } = n, C = t.getGuildId(), p = (0, l.useStateFromStores)([f.default], () => f.default.getGuild(C), [C]), g = t.type === _.ChannelTypes.GUILD_ANNOUNCEMENT, T = null != p && p.hasFeature(_.GuildFeatures.NEWS), I = g && T, {
                    editingMessage: N,
                    editingTextValue: L,
                    editingRichValue: R
                } = (0, l.useStateFromStoresObject)([c.default], () => ({
                    editingMessage: c.default.getEditingMessage(o),
                    editingTextValue: c.default.getEditingTextValue(o),
                    editingRichValue: c.default.getEditingRichValue(o)
                }), [o]), v = (0, l.useStateFromStores)([d.default], () => d.default.getId()), y = s.useCallback((e, n, a) => {
                    let {
                        content: s
                    } = a, l = h.default.can(_.Permissions.MANAGE_MESSAGES, t), o = null != N && null != N.author ? N.author.id : null, u = I && (o === v || l);
                    return u && null != N && (0, m.hasFlag)(N.flags, _.MessageFlags.CROSSPOSTED) ? r.default.confirmEdit(e, n, s) : i.default.editMessage(e, n, {
                        content: s
                    }), Promise.resolve()
                }, [N, I, v, t]), x = s.useCallback(e => (0, s.createElement)(M, {
                    ...e,
                    className: S.channelTextArea,
                    key: u
                }), [u]);
                return null != L && null != R ? (0, a.jsx)(E.default, {
                    ref: void 0,
                    channel: t,
                    message: n,
                    textValue: L,
                    richValue: R,
                    onCancel: i.default.endEditMessage,
                    onChange: i.default.updateEditMessage,
                    onConfirmDelete: r.default.confirmDelete,
                    saveMessage: y,
                    validateEdit: A,
                    children: x
                }) : null
            }

            function M(e) {
                let {
                    textValue: t,
                    richValue: n,
                    message: l,
                    channel: i,
                    onChange: r,
                    onSubmit: d,
                    onKeyDown: c
                } = e, [f, h] = s.useState(!0), C = s.useCallback(() => h(!0), []), E = s.useCallback(() => h(!1), []);
                return s.useEffect(() => (p.ComponentDispatch.subscribe(_.ComponentActions.TEXTAREA_FOCUS, C), p.ComponentDispatch.subscribe(_.ComponentActions.TEXTAREA_BLUR, E), () => {
                    p.ComponentDispatch.unsubscribe(_.ComponentActions.TEXTAREA_FOCUS, C), p.ComponentDispatch.unsubscribe(_.ComponentActions.TEXTAREA_BLUR, E)
                }), [C, E]), (0, a.jsx)(u.default, {
                    className: S.channelTextArea,
                    textValue: t,
                    richValue: n,
                    channel: i,
                    type: o.ChatInputTypes.EDIT,
                    onChange: r,
                    onSubmit: e => {
                        let {
                            value: t
                        } = e;
                        return d(t)
                    },
                    onKeyDown: c,
                    focused: f,
                    onFocus: C,
                    onBlur: E
                }, l.id)
            }

            function I(e, t, n) {
                let {
                    message: s,
                    channel: l
                } = e;
                return n ? (0, a.jsx)(T, {
                    channel: l,
                    message: s
                }) : (0, a.jsx)(C.default, {
                    message: s,
                    content: t
                })
            }
        },
        535993: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("446674"),
                i = n("27618"),
                r = n("341716"),
                o = n("380986");
            let u = s.memo(function(e) {
                var t;
                let {
                    message: n,
                    channel: u,
                    compact: d = !1,
                    interactionUsernameProfile: c,
                    interactionAvatarProfile: f,
                    interactionData: h,
                    setPopout: C
                } = e, E = (0, l.useStateFromStores)([i.default], () => null != n.interaction && i.default.isBlocked(n.interaction.user.id), [n.interaction]), p = (0, o.useContextMenuUser)(null === (t = n.interaction) || void 0 === t ? void 0 : t.user.id, u.id), m = (0, o.useClickInteractionUserUsername)(n.interaction, u, c, C), g = (0, o.useClickInteractionUserAvatar)(f, C), _ = (0, o.useClickInteractionCommandName)(h, C), S = s.useCallback(() => C({
                    interactionUsernameProfile: !1,
                    interactionAvatarProfile: !1,
                    interactionData: !1
                }), [C]);
                return (0, a.jsx)(r.default, {
                    message: n,
                    channel: u,
                    compact: d,
                    isInteractionUserBlocked: E,
                    showAvatarPopout: f,
                    showUsernamePopout: c,
                    showDataPopout: h,
                    onClickAvatar: g,
                    onClickUsername: m,
                    onClickCommand: _,
                    onUserContextMenu: p,
                    onPopoutRequestClose: S
                })
            });

            function d(e, t, n) {
                let {
                    message: s,
                    channel: l,
                    compact: i
                } = e, {
                    interactionUsernameProfile: r,
                    interactionAvatarProfile: o,
                    interactionData: d
                } = n;
                return null != s.interaction && "" !== s.interaction.displayName ? (0, a.jsx)(u, {
                    message: s,
                    channel: l,
                    compact: i,
                    setPopout: t,
                    interactionUsernameProfile: r,
                    interactionAvatarProfile: o,
                    interactionData: d
                }) : null
            }
        },
        144553: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("446674"),
                i = n("176309"),
                r = n("409129"),
                o = n("193865"),
                u = n("843257"),
                d = n("950576"),
                c = n("256572"),
                f = n("27618"),
                h = n("93427"),
                C = n("700097"),
                E = n("95045"),
                p = n("574073"),
                m = n("909917"),
                g = n("380986"),
                _ = n("49111"),
                S = n("782340");
            let A = s.memo(function(e) {
                var t, n, A;
                let {
                    baseMessage: T,
                    referencedMessage: M,
                    channel: I,
                    compact: N = !1,
                    referencedUsernameProfile: L,
                    referencedAvatarProfile: R,
                    setPopout: v
                } = e, y = M.state === c.ReferencedMessageState.LOADED ? M.message : void 0, x = (0, p.useNullableMessageAuthor)(y), O = (0, o.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = T.editedTimestamp) && void 0 !== t ? t : T.timestamp).valueOf()), D = (0, o.useShowImprovedMarkdownGuildExperimentConfig)(null !== (n = null == I ? void 0 : I.guild_id) && void 0 !== n ? n : "", (null !== (A = T.editedTimestamp) && void 0 !== A ? A : T.timestamp).valueOf()), P = s.useMemo(() => {
                    if (null == y) return null;
                    if (y.type === _.MessageTypes.USER_JOIN) return (0, i.astToString)(C.default.getSystemMessageUserJoin(y.id).astFormat({
                        username: null != x ? x.nick : y.author.username,
                        usernameHook: e => e
                    }));
                    if (y.type === _.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE) return (0, i.astToString)((0, u.getRoleSubscriptionPurchaseSystemMessageAstFormattedContent)({
                        username: null != x ? x.nick : y.author.username,
                        guildId: null == I ? void 0 : I.guild_id,
                        roleSubscriptionData: y.roleSubscriptionData
                    }));
                    if (y.type === _.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, i.astToString)((0, r.getApplicationSubscriptionSystemMessageASTContent)({
                        application: null == y ? void 0 : y.application,
                        username: null == x ? void 0 : x.nick
                    }));
                    else if (y.type === _.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED) return (0, i.astToString)((0, d.getPrivateChannelIntegrationAddedSystemMessageASTContent)({
                        application: null == y ? void 0 : y.application,
                        username: null == x ? void 0 : x.nick
                    }));
                    else if (y.type === _.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED) return (0, i.astToString)((0, d.getPrivateChannelIntegrationRemovedSystemMessageASTContent)({
                        application: null == y ? void 0 : y.application,
                        username: null == x ? void 0 : x.nick
                    }));
                    else if (y.type === _.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT) return "" !== y.content ? y.content : S.default.Messages.DEADCHAT_PROMPT_1;
                    if (null != y.content && "" !== y.content) {
                        let e = y.isFirstMessageInForumPost(I) ? {
                            formatInline: !0,
                            noStyleAndInteraction: !0,
                            allowHeading: !0,
                            allowList: !0,
                            allowLinks: O.showMaskedLinks || D.showMaskedLinks
                        } : {
                            formatInline: !0,
                            allowHeading: O.showListsAndHeaders || D.showListsAndHeaders,
                            allowList: O.showListsAndHeaders || D.showListsAndHeaders,
                            allowLinks: O.showMaskedLinks || D.showMaskedLinks
                        };
                        return (0, E.default)(y, e).content
                    }
                    return null
                }, [y, x, I, O, D]), b = (0, l.useStateFromStores)([f.default], () => null != y && f.default.isBlocked(y.author.id), [y]), j = (0, g.useContextMenuUser)(null == y ? void 0 : y.author.id, I.id), F = (0, g.useClickReply)(T, y, b), U = (0, g.useClickReferencedMessageAuthorUsername)(y, I, L, v), H = (0, g.useClickReferencedMessageAuthorAvatar)(R, v), k = s.useCallback(() => v({
                    referencedUsernameProfile: !1,
                    referencedAvatarProfile: !1
                }), [v]), G = (0, p.useNullableMessageAuthor)(T);
                return (0, a.jsx)(h.default, {
                    repliedAuthor: x,
                    baseMessage: T,
                    channel: I,
                    baseAuthor: G,
                    referencedMessage: M,
                    content: P,
                    compact: N,
                    isReplyAuthorBlocked: b,
                    showAvatarPopout: R,
                    showUsernamePopout: L,
                    renderPopout: m.default,
                    onClickAvatar: H,
                    onClickUsername: U,
                    onClickReply: F,
                    onContextMenu: j,
                    onPopoutRequestClose: k
                })
            });

            function T(e, t, n, s, l) {
                let {
                    message: i,
                    channel: r,
                    compact: o
                } = e, {
                    referencedUsernameProfile: u,
                    referencedAvatarProfile: d
                } = n, c = i.type === _.MessageTypes.REPLY && null != s && (0, a.jsx)(A, {
                    baseMessage: i,
                    replyReference: s,
                    referencedMessage: l,
                    channel: r,
                    compact: o,
                    setPopout: t,
                    referencedUsernameProfile: u,
                    referencedAvatarProfile: d
                });
                return (0, a.jsx)(a.Fragment, {
                    children: c
                })
            }
        },
        396856: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("446674"),
                s = n("290886"),
                l = n("282109"),
                i = n("512395"),
                r = n("724210");

            function o(e) {
                var t;
                let n = (0, i.useOptInEnabledForGuild)((null == e ? void 0 : e.getGuildId()) != null ? e.guild_id : "null"),
                    o = (0, a.useStateFromStores)([l.default], () => null != e && l.default.isChannelRecordOrParentOptedIn(e)),
                    u = (0, s.useCanSeeOnboardingHome)(null !== (t = null == e ? void 0 : e.guild_id) && void 0 !== t ? t : "null");
                if (null == e) return !1;
                let d = u && e.hasFlag(r.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL);
                return n && !d && !o && !e.isThread()
            }
        },
        549077: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                o = n("716241"),
                u = n("689476"),
                d = n("599110"),
                c = n("629220"),
                f = n("49111"),
                h = n("782340"),
                C = n("942884");

            function E(e) {
                let {
                    channel: t,
                    narrow: n
                } = e;
                return s.useEffect(() => {
                    d.default.track(f.AnalyticEvents.CHANNEL_BANNER_VIEWED, {
                        ...(0, o.collectGuildAnalyticsMetadata)(t.getGuildId()),
                        ...(0, o.collectChannelAnalyticsMetadata)(t),
                        banner_type: "channel_opt_in"
                    })
                }, [t]), (0, a.jsxs)("div", {
                    className: i(C.chatHeaderBar, {
                        [C.narrow]: n
                    }),
                    children: [(0, a.jsx)(r.Text, {
                        className: C.chatHeaderBarText,
                        variant: "text-sm/normal",
                        color: "text-normal",
                        children: h.default.Messages.OPT_IN_CHANNEL_NOTICE
                    }), (0, a.jsxs)(r.Button, {
                        size: r.Button.Sizes.TINY,
                        className: C.chatHeaderBarButton,
                        innerClassName: C.chatHeaderBarButtonInner,
                        color: r.Button.Colors.BRAND,
                        onClick: () => {
                            d.default.track(f.AnalyticEvents.CHANNEL_BANNER_CTA_CLICKED, {
                                ...(0, o.collectGuildAnalyticsMetadata)(t.getGuildId()),
                                ...(0, o.collectChannelAnalyticsMetadata)(t),
                                banner_type: "channel_opt_in",
                                cta_type: "add channel"
                            }), (0, c.setOptInChannel)(t.guild_id, t.id, !0, {
                                section: f.AnalyticsSections.CHANNEL
                            })
                        },
                        children: [(0, a.jsx)(u.default, {
                            width: 14,
                            height: 14
                        }), h.default.Messages.OPT_IN_CHANNEL_NOTICE_CTA]
                    })]
                })
            }
        },
        878720: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChangePhoneReason: function() {
                    return s
                },
                default: function() {
                    return E
                }
            });
            var a, s, l = n("759843"),
                i = n("872717"),
                r = n("913144"),
                o = n("532760"),
                u = n("271938"),
                d = n("730622"),
                c = n("840707"),
                f = n("482931"),
                h = n("49111"),
                C = n("782340");
            (a = s || (s = {})).USER_ACTION_REQUIRED = "user_action_required", a.USER_SETTINGS_UPDATE = "user_settings_update", a.GUILD_PHONE_REQUIRED = "guild_phone_required", a.MFA_PHONE_UPDATE = "mfa_phone_update", a.CONTACT_SYNC = "contact_sync";
            var E = {
                setCountryCode(e) {
                    r.default.dispatch({
                        type: "PHONE_SET_COUNTRY_CODE",
                        countryCode: e
                    })
                },
                removePhone: (e, t) => o.default.getCurrentConfig({
                    location: "81427d_1"
                }, {
                    autoTrackExposure: !1
                }).enabled ? (0, d.default)(n => i.default.delete({
                    url: h.Endpoints.PHONE,
                    body: {
                        password: e,
                        change_phone_reason: t,
                        ...n
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: C.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_BUTTON,
                        actionText: C.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_BUTTON
                    },
                    checkEnabled: !1
                }) : i.default.delete({
                    url: h.Endpoints.PHONE,
                    body: {
                        password: e,
                        change_phone_reason: t
                    },
                    oldFormErrors: !0
                }),
                resendCode(e) {
                    let t = {},
                        n = u.default.getFingerprint();
                    return null != n && "" !== n && (t["X-Fingerprint"] = n), i.default.post({
                        url: h.Endpoints.RESEND_PHONE,
                        headers: t,
                        body: {
                            phone: e
                        }
                    })
                },
                beginAddPhone: (e, t) => i.default.post({
                    url: h.Endpoints.PHONE,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                addPhone: (e, t, n) => i.default.post({
                    url: h.Endpoints.PHONE,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                addPhoneWithoutPassword: e => i.default.post({
                    url: h.Endpoints.PHONE_VERIFY_NO_PASSWORD,
                    body: {
                        code: e
                    }
                }),
                beginReverifyPhone: (e, t) => i.default.post({
                    url: h.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                reverifyPhone: (e, t, n) => i.default.post({
                    url: h.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                validatePhoneForSupport: e => i.default.post({
                    url: h.Endpoints.VERIFY_PHONE_FOR_TICKET,
                    body: {
                        token: e
                    },
                    oldFormErrors: !0
                }),
                async verifyPhone(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        s = {},
                        i = u.default.getFingerprint();
                    null != i && "" !== i && (s["X-Fingerprint"] = i), a && (s.authorization = "");
                    let o = await c.default.post({
                        url: h.Endpoints.VERIFY_PHONE,
                        headers: s,
                        body: {
                            phone: e,
                            code: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.USER_VERIFY_PHONE
                        }
                    });
                    return n && r.default.dispatch({
                        type: "MODAL_POP",
                        key: f.PHONE_VERIFICATION_MODAL_KEY
                    }), o.body
                }
            }
        },
        482931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PHONE_VERIFICATION_MODAL_KEY: function() {
                    return a
                },
                PHONE_VERIFICATION_CODE_NUM_DIGITS: function() {
                    return s
                }
            });
            let a = "PHONE_VERIFICATION_MODAL_KEY",
                s = 6
        },
        667137: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("301165"),
                o = n("446674"),
                u = n("77078"),
                d = n("731898"),
                c = n("206230"),
                f = n("449918"),
                h = n("271938"),
                C = n("191542"),
                E = n("451166"),
                p = n("28007"),
                m = n("880731"),
                g = n("943551"),
                _ = n("119035"),
                S = n("65626"),
                A = n("782340"),
                T = n("930752");
            let M = s.memo(function(e) {
                    let {
                        channelId: t,
                        width: n
                    } = e, l = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), i = (0, o.useStateFromStores)([g.default], () => g.default.getMostRecentMessageCombo(t), [t]), [d, f] = s.useState(!1);
                    s.useEffect(() => {
                        if (null == i ? void 0 : i.displayed) return;
                        f(!1), setImmediate(() => {
                            let e = null != i ? (0, _.getComboScore)(i.combo) : 0;
                            f(e > 0)
                        });
                        let e = setTimeout(() => {
                            f(!1), null != i && (0, p.clearMessageCombo)(i)
                        }, 2e3);
                        return () => clearTimeout(e)
                    }, [i]);
                    let h = null != i ? "100%" : "200%",
                        C = (0, r.useSpring)({
                            opacity: d ? 1 : 0,
                            translateY: d ? "0" : h,
                            pointerEvents: "none",
                            width: n,
                            config: l ? r.config.stiff : r.config.slow
                        });
                    return (0, a.jsx)(a.Fragment, {
                        children: null != i && (0, a.jsx)(r.animated.div, {
                            className: T.messageComboScore,
                            style: C,
                            children: (0, a.jsx)(u.Text, {
                                className: T.comboScore,
                                variant: "text-sm/bold",
                                children: (0, _.getComboScore)(i.combo)
                            })
                        })
                    })
                }),
                I = s.memo(function(e) {
                    let {
                        value: t,
                        multiplier: n
                    } = e, {
                        color: l,
                        square: r,
                        flair: o
                    } = s.useMemo(() => (0, _.getComboStyles)(n), [n]), d = (0, f.getColor)(l);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(u.Text, {
                            className: T.comboValue,
                            variant: "text-sm/bold",
                            children: t
                        }), (0, a.jsxs)("div", {
                            className: T.comboNameplate,
                            style: {
                                color: d
                            },
                            children: [(0, a.jsx)(u.Text, {
                                className: T.comboMultiplier,
                                style: {
                                    color: d
                                },
                                variant: "text-sm/bold",
                                children: A.default.Messages.POGGERMODE_COMBO.format({
                                    multiplier: n
                                })
                            }), r && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: i(T.comboSquare, T.left),
                                    style: {
                                        backgroundColor: d
                                    }
                                }), (0, a.jsx)("div", {
                                    className: i(T.comboSquare, T.right),
                                    style: {
                                        backgroundColor: d
                                    }
                                })]
                            }), o && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: i(T.confettiIcon, T.left),
                                    children: (0, a.jsx)(E.default, {
                                        width: 24,
                                        height: 24
                                    })
                                }), (0, a.jsx)("div", {
                                    className: i(T.confettiIcon, T.right),
                                    children: (0, a.jsx)(E.default, {
                                        width: 24,
                                        height: 24
                                    })
                                })]
                            }), 1 === n && (0, a.jsx)(u.Text, {
                                className: T.tip,
                                variant: "text-sm/bold",
                                children: A.default.Messages.POGGERMODE_COMBO_TIP
                            })]
                        })]
                    })
                });
            var N = s.memo(function(e) {
                let {
                    channelId: t
                } = e, n = (0, o.useStateFromStores)([h.default], () => h.default.getId()), l = (0, o.useStateFromStores)([C.default], () => C.default.isTyping(t, n), [t, n]), i = (0, o.useStateFromStores)([m.default], () => m.default.isEnabled()), u = (0, o.useStateFromStores)([g.default], () => g.default.isComboing(n, t), [t, n]), {
                    ref: f,
                    width: E = 0
                } = (0, d.default)(), p = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), [_, A] = s.useState(!1), N = (0, S.default)(t), L = i && u && l;
                s.useEffect(() => {
                    L && A(!0);
                    let e = setTimeout(() => A(L), 1e3);
                    return () => clearTimeout(e)
                }, [L]);
                let R = (0, r.useSpring)({
                        opacity: _ ? 1 : 0,
                        transform: _ ? "translateY(0)" : "translateY(100%)",
                        pointerEvents: "none",
                        config: r.config.stiff,
                        immediate: p
                    }),
                    v = s.useMemo(() => null != N ? N : {
                        value: 0,
                        multiplier: 1
                    }, [N]),
                    y = s.useRef(v);
                s.useEffect(() => {
                    (v.multiplier > 1 || v.value > 0) && (y.current = v)
                }, [v]);
                let {
                    multiplier: x,
                    value: O
                } = s.useMemo(() => ({
                    value: L ? v.value : y.current.value,
                    multiplier: L ? v.multiplier : y.current.multiplier
                }), [L, v, y]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(M, {
                        channelId: t,
                        width: E
                    }), (0, a.jsx)(r.animated.div, {
                        ref: f,
                        className: T.combo,
                        style: R,
                        children: (0, a.jsx)(I, {
                            value: O,
                            multiplier: x
                        })
                    })]
                })
            })
        },
        445499: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("446674"),
                s = n("271938"),
                l = n("191542"),
                i = n("880731"),
                r = n("943551"),
                o = n("300586"),
                u = n("39141");

            function d(e) {
                let t = (0, o.default)(u.ShakeLocation.CHAT_INPUT),
                    n = (0, a.useStateFromStores)([i.default], () => i.default.isEnabled({
                        shakeLocation: u.ShakeLocation.CHAT_INPUT
                    }));
                return (0, a.useStateFromStores)([l.default, r.default, s.default], () => n && l.default.isTyping(e, s.default.getId()) ? r.default.getUserComboShakeIntensity(s.default.getId(), e, t) : 0)
            }
        },
        300586: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("446674"),
                s = n("471671"),
                l = n("880731");

            function i(e) {
                let t = (0, a.useStateFromStores)([s.default], () => s.default.isFocused());
                return (0, a.useStateFromStores)([l.default], () => l.default.isEnabled({
                    shakeLocation: e
                }) && t ? l.default.shakeIntensity : 0)
            }
        },
        586269: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                QUARANTINE_APPEAL_LINK: function() {
                    return a
                }
            });
            let a = "https://dis.gd/appeal"
        },
        293322: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("446674"),
                s = n("366757"),
                l = n("377253"),
                i = n("49111"),
                r = (e, t) => {
                    let n = (0, s.useShowConvoStarterInDM)(t),
                        r = (0, a.useStateFromStores)([l.default], () => l.default.getMessages(t.id).length > 0, [t]);
                    return null != e && e.hasFlag(i.UserFlags.QUARANTINED) && n && !r
                }
        },
        319939: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShouldBlockDMInputForQuarantinedUser: function() {
                    return l.default
                },
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("594864"),
                l = n("293322"),
                i = n("586269"),
                r = n("782340");
            let o = n("648529");
            var u = () => (0, a.jsx)(s.MessageNoticeBanner, {
                bannerIcon: o,
                bannerHeader: r.default.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING,
                bannerSubtext: r.default.Messages.LIMITED_ACCESS_DM_BAR_SUBTEXT.format({
                    appealLink: i.QUARANTINE_APPEAL_LINK
                })
            })
        },
        277734: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                dismissChannelSafetyWarnings: function() {
                    return i
                },
                setChannelSafetyWarningFeedback: function() {
                    return r
                },
                clearChannelSafetyWarnings: function() {
                    return o
                }
            });
            var a = n("872717"),
                s = n("913144"),
                l = n("49111");

            function i(e, t) {
                return s.default.dispatch({
                    type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
                    channelId: e,
                    warningIds: t
                }), a.default.post({
                    url: l.Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(e),
                    body: {
                        warning_ids: t
                    },
                    oldFormErrors: !0
                })
            }

            function r(e, t, n) {
                s.default.dispatch({
                    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
                    channelId: e,
                    warningId: t,
                    feedbackType: n
                })
            }

            function o(e) {
                s.default.dispatch({
                    type: "CLEAR_CHANNEL_SAFETY_WARNINGS",
                    channelId: e
                })
            }
        },
        764828: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SafetyWarningTypes: function() {
                    return l
                },
                SafetyWarningFeedbackTypes: function() {
                    return i
                },
                default: function() {
                    return C
                }
            });
            var a, s, l, i, r = n("446674"),
                o = n("913144"),
                u = n("42203");
            (a = l || (l = {}))[a.STRANGER_DANGER = 1] = "STRANGER_DANGER", (s = i || (i = {}))[s.UPVOTE = 0] = "UPVOTE", s[s.DOWNVOTE = 1] = "DOWNVOTE";
            let d = {};

            function c(e) {
                let {
                    safetyWarnings: t
                } = e;
                null != t && (d[e.id] = t), null == t && null != d[e.id] && delete d[e.id]
            }

            function f() {
                d = {}, Object.values(u.default.getMutablePrivateChannels()).forEach(e => {
                    c(e)
                })
            }
            class h extends r.default.Store {
                initialize() {
                    this.waitFor(u.default)
                }
                getChannelSafetyWarning(e, t) {
                    var n;
                    return null === (n = d[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
                }
                getChannelSafetyWarnings(e) {
                    return d[e]
                }
                getSafetyWarningForType(e, t) {
                    var n;
                    return null === (n = d[e]) || void 0 === n ? void 0 : n.find(e => e.type === t && null == e.dismiss_timestamp)
                }
            }
            var C = new h(o.default, {
                CHANNEL_CREATE: function(e) {
                    c(e.channel)
                },
                CHANNEL_DELETE: function(e) {
                    null != d[e.channel.id] && delete d[e.channel.id]
                },
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach(e => {
                        c(e)
                    })
                },
                CONNECTION_OPEN: f,
                CONNECTION_OPEN_SUPPLEMENTAL: f,
                CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
                    let {
                        channelId: t,
                        warningId: n,
                        feedbackType: a
                    } = e, s = d[t];
                    null != s && (d[t] = s.map(e => e.id === n ? {
                        ...e,
                        feedback_type: a
                    } : e))
                },
                CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t
                    } = e, n = d[t];
                    null != n && (d[t] = n.map(e => ({
                        ...e,
                        dismiss_timestamp: void 0
                    })))
                },
                DISMISS_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t,
                        warningIds: n
                    } = e, a = d[t];
                    if (null == a) return;
                    let s = Date.now().toString();
                    d[t] = a.map(e => n.includes(e.id) ? {
                        ...e,
                        dismiss_timestamp: s
                    } : e)
                }
            })
        },
        499799: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useStaffTeenSafetyAssistAgeBypass: function() {
                    return l
                }
            });
            var a = n("862205");
            let s = (0, a.createExperiment)({
                kind: "user",
                id: "2023-10_staff_teen_safety_assist_age_bypass",
                label: "Staff Teen Safety Assist Age Bypass",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable staff teen safety assist age bypass (your account will behave as a teen user)",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function l(e) {
                return s.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        533855: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelSafetyWarning: function() {
                    return l
                }
            });
            var a = n("446674"),
                s = n("764828");

            function l(e, t) {
                return (0, a.useStateFromStores)([s.default], () => s.default.getSafetyWarningForType(e, t), [e, t])
            }
        },
        908041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useUserIsTeen: function() {
                    return i
                }
            });
            var a = n("446674"),
                s = n("697218"),
                l = n("499799");

            function i(e) {
                let t = (0, a.useStateFromStores)([s.default], () => {
                        var e;
                        return null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
                    }),
                    n = (0, l.useStaffTeenSafetyAssistAgeBypass)(e);
                return !1 === t || n
            }
        },
        964974: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LOCATION_CONTEXT_WEB: function() {
                    return s
                },
                getSafetyTips: function() {
                    return l
                }
            });
            var a = n("782340");
            let s = "STRANGER_DANGER_WARNING_BANNER_WEB",
                l = () => [a.default.Messages.STRANGER_DANGER_TIPS_1, a.default.Messages.STRANGER_DANGER_TIPS_2, a.default.Messages.STRANGER_DANGER_TIPS_3]
        },
        13427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsEligibleForStrangerDangerTeens: function() {
                    return l
                }
            });
            var a = n("862205");
            let s = (0, a.createExperiment)({
                kind: "user",
                id: "2023-08_self_mod_stranger_danger_teens",
                label: "Stranger Danger Teens",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable stranger danger for teens",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function l(e) {
                return s.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        844911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackViewedEvent: function() {
                    return o
                },
                CtaEventTypes: function() {
                    return s
                },
                trackCtaEvent: function() {
                    return u
                }
            });
            var a, s, l = n("599110"),
                i = n("764828"),
                r = n("49111");

            function o(e, t) {
                let {
                    channelId: n,
                    warningId: a,
                    senderId: s
                } = t;
                l.default.track(e, {
                    channel_id: n,
                    warning_id: parseInt(a),
                    warning_type: i.SafetyWarningTypes.STRANGER_DANGER,
                    other_user_id: s
                })
            }

            function u(e) {
                let {
                    channelId: t,
                    warningId: n,
                    senderId: a,
                    cta: s
                } = e;
                l.default.track(r.AnalyticEvents.SAFETY_WARNING_CTA_CLICKED, {
                    channel_id: t,
                    warning_id: parseInt(n),
                    warning_type: i.SafetyWarningTypes.STRANGER_DANGER,
                    other_user_id: a,
                    cta: s
                })
            }(a = s || (s = {})).DISMISS = "dismiss", a.OPEN_MORE_TIPS = "open_more_tips", a.USER_BANNER_BLOCK_CONFIRM = "user_banner_block_confirm", a.USER_BANNER_BLOCK_CANCEL = "user_banner_block_cancel", a.USER_MODAL_BLOCK_CONFIRM = "user_modal_block_confirm", a.USER_MODAL_BLOCK_CANCEL = "user_modal_block_cancel", a.USER_MODAL_MUTE = "user_modal_mute", a.USER_MODAL_UNMUTE = "user_modal_unmute", a.FEEDBACK_UPVOTE = "feedback_upvote", a.FEEDBACK_DOWNVOTE = "feedback_downvote"
        },
        933152: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useStrangerDangerWarning: function() {
                    return u
                }
            });
            var a = n("674015"),
                s = n("228430"),
                l = n("764828"),
                i = n("533855"),
                r = n("908041"),
                o = n("13427");

            function u(e, t) {
                let n = (0, s.useIsSpamMessageRequest)(e),
                    u = (0, a.useIsMessageRequest)(e),
                    d = (0, i.useChannelSafetyWarning)(e, l.SafetyWarningTypes.STRANGER_DANGER),
                    c = (0, r.useUserIsTeen)(t),
                    f = (0, o.useIsEligibleForStrangerDangerTeens)(t);
                if (f && c && !n && !u) return d
            }
        },
        820899: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StrangerDangerWarningBanner: function() {
                    return E
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("77078"),
                i = n("736964"),
                r = n("945330"),
                o = n("277734"),
                u = n("844911"),
                d = n("964974"),
                c = n("49111"),
                f = n("782340"),
                h = n("921548"),
                C = n("145680");

            function E(e) {
                let {
                    channelId: t,
                    warningId: E,
                    senderId: p
                } = e, m = s.useCallback(() => {
                    (0, o.dismissChannelSafetyWarnings)(t, [E])
                }, [t, E]), g = s.useCallback(() => {
                    m(), (0, u.trackCtaEvent)({
                        channelId: t,
                        warningId: E,
                        senderId: p,
                        cta: u.CtaEventTypes.DISMISS
                    })
                }, [m, t, E, p]), _ = s.useCallback(e => () => {
                    i.default.addRelationship({
                        userId: p,
                        context: {
                            location: d.LOCATION_CONTEXT_WEB
                        },
                        type: c.RelationshipTypes.BLOCKED
                    }), m(), (0, l.showToast)((0, l.createToast)(f.default.Messages.STRANGER_DANGER_BLOCK_CONFIRM, l.ToastType.SUCCESS)), (0, u.trackCtaEvent)({
                        channelId: t,
                        warningId: E,
                        senderId: p,
                        cta: e
                    })
                }, [m, t, E, p]);
                s.useEffect(() => {
                    (0, u.trackViewedEvent)(c.AnalyticEvents.SAFETY_WARNING_VIEWED, {
                        channelId: t,
                        warningId: E,
                        senderId: p
                    })
                }, [t, E, p]);
                let S = () => {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("664639").then(n.bind(n, "664639"));
                            return n => {
                                let {
                                    transitionState: s,
                                    onClose: l
                                } = n;
                                return (0, a.jsx)(e, {
                                    transitionState: s,
                                    onClose: l,
                                    channelId: t,
                                    warningId: E,
                                    senderId: p,
                                    handleBlock: () => {
                                        A(u.CtaEventTypes.USER_MODAL_BLOCK_CONFIRM, u.CtaEventTypes.USER_MODAL_BLOCK_CANCEL, S)
                                    }
                                })
                            }
                        })
                    },
                    A = (e, s, i) => {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: l
                            } = await n.el("968710").then(n.bind(n, "968710"));
                            return n => (0, a.jsx)(l, {
                                ...n,
                                userId: p,
                                confirmBlock: _(e),
                                onCancel: () => {
                                    null == i || i(), (0, u.trackCtaEvent)({
                                        channelId: t,
                                        warningId: E,
                                        senderId: p,
                                        cta: s
                                    })
                                }
                            })
                        })
                    };
                return (0, a.jsxs)("div", {
                    className: h.strangerDangerBanner,
                    children: [(0, a.jsxs)("div", {
                        className: h.shieldAndHeading,
                        children: [(0, a.jsx)("img", {
                            className: h.safetyShieldIcon,
                            src: C,
                            alt: ""
                        }), (0, a.jsxs)("div", {
                            children: [(0, a.jsx)(l.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-primary",
                                children: f.default.Messages.STRANGER_DANGER_BANNER_HEADER
                            }), (0, a.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "text-primary",
                                children: f.default.Messages.STRANGER_DANGER_BANNER_DESCRIPTION
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: h.buttons,
                        children: [(0, a.jsx)(l.Button, {
                            size: l.Button.Sizes.SMALL,
                            color: l.Button.Colors.BRAND,
                            "aria-label": f.default.Messages.STRANGER_DANGER_BANNER_MORE_TIPS,
                            onClick: () => {
                                S(), (0, u.trackCtaEvent)({
                                    channelId: t,
                                    warningId: E,
                                    senderId: p,
                                    cta: u.CtaEventTypes.OPEN_MORE_TIPS
                                })
                            },
                            children: f.default.Messages.STRANGER_DANGER_BANNER_MORE_TIPS
                        }), (0, a.jsx)(l.Button, {
                            size: l.Button.Sizes.SMALL,
                            color: l.Button.Colors.RED,
                            "aria-label": f.default.Messages.STRANGER_DANGER_BANNER_BLOCK,
                            onClick: () => A(u.CtaEventTypes.USER_BANNER_BLOCK_CONFIRM, u.CtaEventTypes.USER_BANNER_BLOCK_CANCEL),
                            children: f.default.Messages.STRANGER_DANGER_BANNER_BLOCK
                        })]
                    }), (0, a.jsx)(l.Clickable, {
                        className: h.closeButton,
                        onClick: g,
                        role: "button",
                        "aria-label": f.default.Messages.DISMISS,
                        children: (0, a.jsx)(r.default, {
                            width: 24,
                            height: 24,
                            className: h.closeButton
                        })
                    })]
                })
            }
        },
        339670: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getUnreadTopicsCount: function() {
                    return l
                }
            });
            var a = n("249654"),
                s = n("347738");

            function l(e, t) {
                var n;
                let l = null !== (n = s.default.summaries(e)) && void 0 !== n ? n : [],
                    i = 0;
                for (let e of l) a.default.compare(e.endId, t) > 0 && (i += 1);
                return i
            }
        },
        21763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("301165"),
                r = n("65597"),
                o = n("77078"),
                u = n("97810"),
                d = n("909004"),
                c = n("251144"),
                f = n("20662"),
                h = n("347738"),
                C = n("118094"),
                E = n("200521"),
                p = n("894488"),
                m = n("782340"),
                g = n("339723");

            function _(e) {
                let {
                    summary: t,
                    channel: n
                } = e, s = (0, r.default)([h.default], () => h.default.summaryFeedback(t)), l = (e, a) => {
                    e.stopPropagation(), (0, C.default)({
                        summary: t,
                        channel: n,
                        rating: a
                    })
                }, u = (0, i.useTransition)(null == s, {
                    enter: {
                        from: {
                            opacity: 0
                        },
                        to: {
                            opacity: 1
                        }
                    },
                    leave: {
                        opacity: 0
                    },
                    config: {
                        mass: 1,
                        tension: 500,
                        friction: 18,
                        clamp: !0
                    }
                });
                return (0, a.jsx)(a.Fragment, {
                    children: u((e, t) => t ? (0, a.jsx)("div", {
                        className: g.summaryFeedbackWrapper,
                        children: (0, a.jsxs)(i.animated.div, {
                            style: e,
                            className: g.summaryFeedback,
                            children: [(0, a.jsx)(o.Text, {
                                variant: "text-xs/medium",
                                color: "interactive-normal",
                                children: m.default.Messages.SUMMARY_FEEDBACK
                            }), (0, a.jsx)(o.Clickable, {
                                onClick: e => l(e, E.FeedbackRating.GOOD),
                                children: (0, a.jsx)(f.default, {
                                    className: g.thumbIcon,
                                    width: 12,
                                    height: 12
                                })
                            }), (0, a.jsx)(o.Clickable, {
                                onClick: e => l(e, E.FeedbackRating.BAD),
                                children: (0, a.jsx)(c.default, {
                                    className: g.thumbIcon,
                                    width: 12,
                                    height: 12
                                })
                            })]
                        })
                    }) : null)
                })
            }

            function S(e) {
                var t, n;
                let s, {
                        item: i,
                        channel: o,
                        index: c
                    } = e,
                    f = (0, r.default)([h.default], () => h.default.selectedSummary(o.id));
                if (null == f) return null;
                let C = null != i.unreadId,
                    E = null != i.content;
                return s = E ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(d.default, {
                        className: g.summaryStartIcon,
                        width: 16,
                        height: 16
                    }), i.content]
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(_, {
                        summary: f,
                        channel: o
                    }), (0, a.jsx)(d.default, {
                        className: g.summaryEndIcon,
                        width: 16,
                        height: 16
                    })]
                }), (0, a.jsx)(u.default, {
                    className: l(g.summaryDivider, E ? g.summaryDividerStart : g.summaryDividerEnd),
                    contentClassName: E ? g.summaryStartContent : g.summaryEndContent,
                    isUnread: C,
                    id: C ? p.NEW_MESSAGE_BAR_ID : void 0,
                    children: s
                }, "divider-".concat(null !== (n = null !== (t = i.contentKey) && void 0 !== t ? t : i.unreadId) && void 0 !== n ? n : c))
            }
        },
        262973: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                },
                systemDMRedesignEnabled: function() {
                    return i
                }
            });
            var a = n("862205");
            let s = (0, a.createExperiment)({
                kind: "user",
                id: "2022-07_system_dm_safety_onboarding",
                label: "System DM Safety Onboarding",
                defaultConfig: {
                    systemDMRedesignEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled, v1 copy",
                    config: {
                        systemDMRedesignEnabled: !0
                    }
                }, {
                    id: 2,
                    label: "Enabled, v2 copy",
                    config: {
                        systemDMRedesignEnabled: !0
                    }
                }]
            });
            var l = s;

            function i() {
                return s.getCurrentConfig({
                    location: "0a5674_1"
                }, {
                    autoTrackExposure: !1
                }).systemDMRedesignEnabled
            }
        },
        809168: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ArchivedLockedThreadNotice: function() {
                    return E
                },
                LockedThreadNotice: function() {
                    return p
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                o = n("716241"),
                u = n("599110"),
                d = n("263024"),
                c = n("300322"),
                f = n("49111"),
                h = n("782340"),
                C = n("112918");

            function E(e) {
                let {
                    channel: t,
                    narrow: n
                } = e, l = (0, c.useCanUnarchiveThread)(t);
                return s.useEffect(() => {
                    u.default.track(f.AnalyticEvents.CHANNEL_BANNER_VIEWED, {
                        ...(0, o.collectGuildAnalyticsMetadata)(t.getGuildId()),
                        ...(0, o.collectChannelAnalyticsMetadata)(t),
                        banner_type: "thread"
                    })
                }, [t]), (0, a.jsxs)("div", {
                    className: i(C.chatHeaderBar, {
                        [C.narrow]: n
                    }),
                    children: [(0, a.jsx)(r.Text, {
                        className: C.chatHeaderBarText,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: t.isForumPost() ? h.default.Messages.FORUM_POST_HEADER_NOTICE_LOCKED : h.default.Messages.THREAD_HEADER_NOTICE_LOCKED
                    }), l ? (0, a.jsx)(r.Button, {
                        size: n ? r.Button.Sizes.SMALL : r.Button.Sizes.TINY,
                        className: C.chatHeaderBarButton,
                        color: r.Button.Colors.PRIMARY,
                        onClick: () => {
                            u.default.track(f.AnalyticEvents.CHANNEL_BANNER_CTA_CLICKED, {
                                ...(0, o.collectGuildAnalyticsMetadata)(t.getGuildId()),
                                ...(0, o.collectChannelAnalyticsMetadata)(t),
                                banner_type: "thread",
                                cta_type: "unarchive"
                            }), d.default.unarchiveThread(t, !1)
                        },
                        children: h.default.Messages.UNARCHIVE
                    }) : null]
                })
            }

            function p(e) {
                let {
                    channel: t,
                    narrow: n
                } = e, l = (0, c.useIsThreadModerator)(t);
                return s.useEffect(() => {
                    u.default.track(f.AnalyticEvents.CHANNEL_BANNER_VIEWED, {
                        ...(0, o.collectGuildAnalyticsMetadata)(t.getGuildId()),
                        ...(0, o.collectChannelAnalyticsMetadata)(t),
                        banner_type: "thread"
                    })
                }, [t]), (0, a.jsxs)("div", {
                    className: i(C.chatHeaderBar, {
                        [C.narrow]: n
                    }),
                    children: [(0, a.jsx)(r.Text, {
                        className: C.chatHeaderBarText,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: t.isForumPost() ? h.default.Messages.FORUM_POST_HEADER_NOTICE_ACTIVE_LOCKED : h.default.Messages.THREAD_HEADER_NOTICE_ACTIVE_LOCKED
                    }), l ? (0, a.jsx)(r.Button, {
                        size: n ? r.Button.Sizes.SMALL : r.Button.Sizes.TINY,
                        className: C.chatHeaderBarButton,
                        color: r.Button.Colors.PRIMARY,
                        onClick: () => {
                            u.default.track(f.AnalyticEvents.CHANNEL_BANNER_CTA_CLICKED, {
                                ...(0, o.collectGuildAnalyticsMetadata)(t.getGuildId()),
                                ...(0, o.collectChannelAnalyticsMetadata)(t),
                                banner_type: "thread",
                                cta_type: "unlock"
                            }), d.default.unlockThread(t)
                        },
                        children: h.default.Messages.UNLOCK
                    }) : null]
                })
            }
        },
        714307: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("902348"),
                l = n("581752"),
                i = n("911005");

            function r() {
                return (0, a.jsx)("div", {
                    className: s.container,
                    children: (0, a.jsxs)("svg", {
                        width: "224",
                        height: "148",
                        viewBox: "0 0 224 148",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, a.jsx)("path", {
                            d: "M0.5 33.5H223.5V140C223.5 144.142 220.142 147.5 216 147.5H8C3.85786 147.5 0.5 144.142 0.5 140V33.5Z",
                            fill: "#F2F3F4",
                            stroke: "#E3E5E8"
                        }), (0, a.jsx)("circle", {
                            cx: "28",
                            cy: "120",
                            r: "16",
                            fill: "url(#tutorial-media-channels-image1)"
                        }), (0, a.jsx)("path", {
                            d: "M62.104 116L61.468 107.72H59.488L57.4 113.96L55.3 107.72H53.284L52.648 116H54.076L54.496 109.892L56.584 116.024H58L60.076 109.892L60.52 116H62.104ZM65.7704 111.08C66.4664 111.08 66.8264 111.584 66.9224 112.484H64.6064C64.7144 111.548 65.1944 111.08 65.7704 111.08ZM68.3144 115.412L68.1464 114.284C67.5104 114.728 66.8984 115.004 66.1544 115.004C65.2664 115.004 64.6544 114.512 64.5944 113.384H68.3144C68.3144 113.3 68.3264 113.156 68.3264 113.036C68.3264 111.392 67.5464 110.084 65.8064 110.084C64.2944 110.084 63.1664 111.224 63.1664 113.108C63.1664 115.196 64.3784 116.12 65.9984 116.12C66.9344 116.12 67.6904 115.844 68.3144 115.412ZM72.6338 112.088C72.6338 112.724 72.2498 113.192 71.6138 113.192C70.9898 113.192 70.6058 112.736 70.6058 112.136C70.6058 111.5 70.9778 111.008 71.6138 111.008C72.2258 111.008 72.6338 111.476 72.6338 112.088ZM74.6858 116.24C74.6858 115.352 73.9418 114.98 72.7538 114.812L72.0098 114.74C71.1098 114.608 70.9298 114.56 70.9298 114.368C70.9298 114.272 71.0258 114.164 71.1698 114.056C71.3138 114.08 71.4698 114.092 71.6378 114.092C72.8858 114.092 73.9538 113.348 73.9538 112.1C73.9538 111.836 73.9058 111.572 73.7978 111.344L74.8538 111.272L74.6618 110.12L73.2458 110.624C72.8258 110.276 72.2738 110.084 71.6018 110.084C70.3058 110.084 69.2738 110.864 69.2738 112.136C69.2738 112.904 69.6818 113.504 70.3658 113.828C69.8858 114.116 69.6338 114.428 69.6338 114.752C69.6338 114.98 69.7418 115.196 69.9698 115.376C69.2498 115.784 68.8778 116.204 68.8778 116.744C68.8778 117.704 70.0658 118.184 71.6378 118.184C73.3178 118.184 74.6858 117.488 74.6858 116.24ZM71.7338 117.332C70.6418 117.332 70.1258 117.02 70.1258 116.588C70.1258 116.288 70.3178 116.012 70.7378 115.712C71.0258 115.772 71.2058 115.808 71.6018 115.856L72.3818 115.952C73.1018 116.06 73.3538 116.24 73.3538 116.552C73.3538 116.984 72.7658 117.332 71.7338 117.332ZM78.8219 114.404C78.4259 114.788 77.9579 115.028 77.4659 115.028C77.0219 115.028 76.7579 114.776 76.7579 114.356C76.7579 113.804 77.1539 113.312 78.8219 113.108V114.404ZM80.2619 116V112.028C80.2619 110.636 79.5179 110.084 78.0179 110.084C77.0939 110.084 76.3859 110.288 75.7139 110.552L75.8939 111.704C76.5179 111.428 77.1539 111.236 77.8259 111.236C78.4619 111.236 78.8219 111.476 78.8219 112.1V112.268C76.4819 112.496 75.3299 113.108 75.3299 114.512C75.3299 115.52 75.9899 116.12 76.9739 116.12C77.8379 116.12 78.4379 115.736 78.9059 115.244L79.0259 116H80.2619ZM86.633 116V111.824C86.633 110.744 86.057 110.084 84.977 110.084C84.197 110.084 83.585 110.504 83.045 111.02L82.913 110.204H81.689V116H83.129V112.088C83.549 111.644 84.005 111.356 84.449 111.356C84.977 111.356 85.193 111.704 85.193 112.208V116H86.633Z",
                            fill: "#060607"
                        }), (0, a.jsx)("path", {
                            d: "M62.02 132L61.372 123.72H59.992L57.412 130.512L54.832 123.72H53.44L52.78 132H53.836L54.34 125.316L56.932 132.036H57.832L60.424 125.316L60.94 132H62.02ZM65.8287 126.996C66.6567 126.996 67.0647 127.524 67.1967 128.448H64.4367C64.6047 127.476 65.1687 126.996 65.8287 126.996ZM68.2647 131.352L68.1087 130.392C67.4847 130.884 66.8847 131.208 66.0567 131.208C65.0607 131.208 64.4367 130.584 64.3887 129.252H68.2767V129.024C68.2767 127.44 67.5087 126.156 65.8407 126.156C64.4007 126.156 63.3207 127.284 63.3207 129.12C63.3207 131.22 64.4847 132.12 65.9727 132.12C66.9207 132.12 67.6527 131.832 68.2647 131.352ZM71.073 123.72H69.789L70.077 129.54L70.773 129.384L71.073 123.72ZM71.025 132V130.572H69.825V132H71.025ZM84.7192 132L84.0712 123.72H82.6912L80.1112 130.512L77.5312 123.72H76.1392L75.4792 132H76.5352L77.0392 125.316L79.6312 132.036H80.5312L83.1232 125.316L83.6392 132H84.7192ZM89.6079 130.428C89.1279 130.92 88.5279 131.232 87.9039 131.232C87.3639 131.232 87.0519 130.932 87.0519 130.464C87.0519 129.876 87.4959 129.3 89.6079 129.096V130.428ZM90.6759 132V127.992C90.6759 126.72 90.0039 126.156 88.6119 126.156C87.7239 126.156 87.0759 126.36 86.3919 126.636L86.5359 127.56C87.1599 127.284 87.8199 127.068 88.5159 127.068C89.1759 127.068 89.6079 127.32 89.6079 128.04V128.28C87.2199 128.532 85.9959 129.096 85.9959 130.524C85.9959 131.496 86.6439 132.12 87.6759 132.12C88.6119 132.12 89.2359 131.7 89.6919 131.232L89.8119 132H90.6759ZM92.6347 134.184C93.4747 134.184 94.0987 133.872 94.5667 132.6L96.9067 126.276H95.7907L94.2907 130.728L92.7547 126.192L91.6747 126.36L93.7627 132.024L93.6187 132.408C93.3907 133.02 93.0667 133.248 92.5867 133.248C92.4187 133.248 92.2027 133.212 92.0227 133.164L92.1787 134.136C92.2867 134.16 92.4067 134.184 92.6347 134.184ZM103.068 128.976C103.068 127.068 102.048 126.156 100.812 126.156C100.032 126.156 99.4795 126.552 99.0955 126.948V123.336L98.0275 123.504V131.712C98.7835 131.94 99.3955 132.072 100.26 132.072C101.916 132.072 103.068 131.064 103.068 128.976ZM101.988 129.024C101.988 130.5 101.364 131.16 100.248 131.16C99.7195 131.16 99.4555 131.1 99.0955 130.968V128.04C99.5275 127.5 100.056 127.104 100.656 127.104C101.424 127.104 101.988 127.776 101.988 129.024ZM106.61 126.996C107.438 126.996 107.846 127.524 107.978 128.448H105.218C105.386 127.476 105.95 126.996 106.61 126.996ZM109.046 131.352L108.89 130.392C108.266 130.884 107.666 131.208 106.838 131.208C105.842 131.208 105.218 130.584 105.17 129.252H109.058V129.024C109.058 127.44 108.29 126.156 106.622 126.156C105.182 126.156 104.102 127.284 104.102 129.12C104.102 131.22 105.266 132.12 106.754 132.12C107.702 132.12 108.434 131.832 109.046 131.352ZM117.779 129.768C117.779 128.52 117.227 127.968 115.619 127.236C114.359 126.66 114.047 126.36 114.047 125.724C114.047 125.112 114.467 124.608 115.415 124.608C116.075 124.608 116.699 124.872 117.155 125.22L117.335 124.092C116.855 123.816 116.255 123.624 115.451 123.624C113.951 123.624 112.931 124.476 112.931 125.808C112.931 126.996 113.519 127.512 115.079 128.22C116.327 128.784 116.663 129.096 116.663 129.852C116.663 130.656 116.051 131.112 115.187 131.112C114.359 131.112 113.579 130.776 113.015 130.404L112.847 131.556C113.459 131.88 114.263 132.096 115.163 132.096C116.711 132.096 117.779 131.196 117.779 129.768ZM122.456 130.428C121.976 130.92 121.376 131.232 120.752 131.232C120.212 131.232 119.9 130.932 119.9 130.464C119.9 129.876 120.344 129.3 122.456 129.096V130.428ZM123.524 132V127.992C123.524 126.72 122.852 126.156 121.46 126.156C120.572 126.156 119.924 126.36 119.24 126.636L119.384 127.56C120.008 127.284 120.668 127.068 121.364 127.068C122.024 127.068 122.456 127.32 122.456 128.04V128.28C120.068 128.532 118.844 129.096 118.844 130.524C118.844 131.496 119.492 132.12 120.524 132.12C121.46 132.12 122.084 131.7 122.54 131.232L122.66 132H123.524ZM127.928 132.024L127.784 131.112C127.652 131.136 127.484 131.148 127.292 131.148C126.692 131.148 126.5 130.86 126.5 130.392V127.176H127.88L127.736 126.276H126.5V124.212L125.456 124.368V126.276H124.592V127.176H125.456V130.584C125.456 131.736 126.116 132.096 127.124 132.096C127.496 132.096 127.748 132.06 127.928 132.024ZM129.199 126.276V130.44C129.199 131.472 129.763 132.12 130.855 132.12C131.659 132.12 132.343 131.676 132.883 131.172L133.015 132H133.867V126.276H132.799V130.236C132.283 130.788 131.707 131.16 131.143 131.16C130.519 131.16 130.267 130.764 130.267 130.176V126.276H129.199ZM138.755 127.176L138.587 126.156C137.651 126.204 136.991 126.792 136.583 127.44L136.403 126.276H135.551V132H136.619V128.616C137.003 127.86 137.807 127.224 138.755 127.176ZM140.397 129.252C140.397 127.836 141.045 127.104 141.945 127.104C142.557 127.104 142.905 127.2 143.349 127.428V130.164C142.893 130.776 142.389 131.172 141.729 131.172C140.961 131.172 140.397 130.512 140.397 129.252ZM139.317 129.3C139.317 131.22 140.337 132.12 141.573 132.12C142.413 132.12 143.001 131.688 143.433 131.172L143.565 132H144.417V123.336L143.349 123.504V126.456C142.989 126.312 142.473 126.204 141.909 126.204C140.517 126.204 139.317 127.212 139.317 129.3ZM149.362 130.428C148.882 130.92 148.282 131.232 147.658 131.232C147.118 131.232 146.806 130.932 146.806 130.464C146.806 129.876 147.25 129.3 149.362 129.096V130.428ZM150.43 132V127.992C150.43 126.72 149.758 126.156 148.366 126.156C147.478 126.156 146.83 126.36 146.146 126.636L146.29 127.56C146.914 127.284 147.574 127.068 148.27 127.068C148.93 127.068 149.362 127.32 149.362 128.04V128.28C146.974 128.532 145.75 129.096 145.75 130.524C145.75 131.496 146.398 132.12 147.43 132.12C148.366 132.12 148.99 131.7 149.446 131.232L149.566 132H150.43ZM152.389 134.184C153.229 134.184 153.853 133.872 154.321 132.6L156.661 126.276H155.545L154.045 130.728L152.509 126.192L151.429 126.36L153.517 132.024L153.373 132.408C153.145 133.02 152.821 133.248 152.341 133.248C152.173 133.248 151.957 133.212 151.777 133.164L151.933 134.136C152.041 134.16 152.161 134.184 152.389 134.184ZM159.19 129.54L159.886 129.384L159.994 128.196C161.422 127.548 162.286 126.984 162.286 125.688C162.286 124.38 161.29 123.564 159.826 123.564C158.842 123.564 157.99 123.912 157.258 124.452L157.414 125.556C158.086 125.004 158.83 124.584 159.766 124.584C160.57 124.584 161.158 125.004 161.158 125.736C161.158 126.504 160.654 126.888 159.526 127.356L159.034 127.56L159.19 129.54ZM158.938 132H160.138V130.572H158.938V132Z",
                            fill: "#2E3338"
                        }), (0, a.jsx)("path", {
                            d: "M0.5 8C0.5 3.85786 3.85786 0.5 8 0.5H216C220.142 0.5 223.5 3.85786 223.5 8V33.5H0.5V8Z",
                            fill: "#F2F3F4",
                            stroke: "#E3E5E8"
                        }), (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12.5641 23.75C12.253 23.75 12.0174 23.4689 12.0718 23.1626L12.5 20.75H10.0951C9.78449 20.75 9.54905 20.4698 9.60259 20.1638L9.69009 19.6638C9.73196 19.4246 9.93972 19.25 10.1826 19.25H12.7625L13.5575 14.75H11.1526C10.842 14.75 10.6065 14.4698 10.6601 14.1638L10.7476 13.6638C10.7895 13.4246 10.9972 13.25 11.2401 13.25H13.82L14.2793 10.6626C14.3216 10.4239 14.5291 10.25 14.7716 10.25H15.2559C15.567 10.25 15.8026 10.5311 15.7482 10.8374L15.32 13.25H19.82L20.2793 10.6626C20.3216 10.4239 20.5291 10.25 20.7716 10.25H21.2559C21.567 10.25 21.8026 10.5311 21.7482 10.8374L21.32 13.25H23.7249C24.0355 13.25 24.271 13.5302 24.2174 13.8362L24.1299 14.3362C24.0881 14.5754 23.8803 14.75 23.6374 14.75H21.0575L20.2625 19.25H22.6674C22.978 19.25 23.2135 19.5302 23.1599 19.8362L23.0724 20.3362C23.0306 20.5754 22.8228 20.75 22.5799 20.75H20L19.5407 23.3374C19.4984 23.5761 19.2909 23.75 19.0484 23.75H18.5641C18.253 23.75 18.0174 23.4689 18.0718 23.1626L18.5 20.75H14L13.5407 23.3374C13.4984 23.5761 13.2909 23.75 13.0484 23.75H12.5641ZM15.0578 14.75L14.2628 19.25H18.7628L19.5578 14.75H15.0578Z",
                            fill: "#4F5660"
                        }), (0, a.jsx)("path", {
                            d: "M41.014 22V17.128C41.014 15.868 40.384 15.098 39.11 15.098C38.2 15.098 37.458 15.588 36.856 16.19C36.604 15.532 36.086 15.098 35.12 15.098C34.21 15.098 33.524 15.588 32.894 16.19L32.74 15.238H31.312V22H32.992V17.422C33.482 16.918 33.972 16.582 34.49 16.582C35.106 16.582 35.33 16.988 35.33 17.576V22H37.01V17.422C37.5 16.918 37.99 16.582 38.508 16.582C39.124 16.582 39.334 16.988 39.334 17.576V22H41.014ZM46.3967 20.138C45.9347 20.586 45.3887 20.866 44.8147 20.866C44.2967 20.866 43.9887 20.572 43.9887 20.082C43.9887 19.438 44.4507 18.864 46.3967 18.626V20.138ZM48.0767 22V17.366C48.0767 15.742 47.2087 15.098 45.4587 15.098C44.3807 15.098 43.5547 15.336 42.7707 15.644L42.9807 16.988C43.7087 16.666 44.4507 16.442 45.2347 16.442C45.9767 16.442 46.3967 16.722 46.3967 17.45V17.646C43.6667 17.912 42.3227 18.626 42.3227 20.264C42.3227 21.44 43.0927 22.14 44.2407 22.14C45.2487 22.14 45.9487 21.692 46.4947 21.118L46.6347 22H48.0767ZM53.8857 22.098L55.6777 21.832L53.0317 18.29L55.5237 15.238H53.6197L51.4217 18.038V11.892L49.7417 12.158V22H51.4217V18.64L53.8857 22.098ZM59.1699 16.26C59.9819 16.26 60.4019 16.848 60.5139 17.898H57.8119C57.9379 16.806 58.4979 16.26 59.1699 16.26ZM62.1379 21.314L61.9419 19.998C61.1999 20.516 60.4859 20.838 59.6179 20.838C58.5819 20.838 57.8679 20.264 57.7979 18.948H62.1379C62.1379 18.85 62.1519 18.682 62.1519 18.542C62.1519 16.624 61.2419 15.098 59.2119 15.098C57.4479 15.098 56.1319 16.428 56.1319 18.626C56.1319 21.062 57.5459 22.14 59.4359 22.14C60.5279 22.14 61.4099 21.818 62.1379 21.314ZM66.9533 18.78V17.156H63.3133V18.78H66.9533ZM72.9665 18.528C72.9665 20.012 72.3085 20.726 71.4405 20.726C70.8665 20.726 70.5445 20.628 70.1385 20.432V17.534C70.5865 16.96 71.0625 16.582 71.6645 16.582C72.4205 16.582 72.9665 17.226 72.9665 18.528ZM74.6605 18.43C74.6605 16.162 73.5265 15.098 72.1125 15.098C71.1745 15.098 70.5165 15.616 70.0405 16.162L69.8865 15.238H68.4585V24.604L70.1385 24.352V21.804C70.5445 21.958 71.0625 22.07 71.7065 22.07C73.2605 22.07 74.6605 20.95 74.6605 18.43ZM77.7827 22V11.892L76.1027 12.158V22H77.7827ZM83.2561 20.138C82.7941 20.586 82.2481 20.866 81.6741 20.866C81.1561 20.866 80.8481 20.572 80.8481 20.082C80.8481 19.438 81.3101 18.864 83.2561 18.626V20.138ZM84.9361 22V17.366C84.9361 15.742 84.0681 15.098 82.3181 15.098C81.2401 15.098 80.4141 15.336 79.6301 15.644L79.8401 16.988C80.5681 16.666 81.3101 16.442 82.0941 16.442C82.8361 16.442 83.2561 16.722 83.2561 17.45V17.646C80.5261 17.912 79.1821 18.626 79.1821 20.264C79.1821 21.44 79.9521 22.14 81.1001 22.14C82.1081 22.14 82.8081 21.692 83.3541 21.118L83.4941 22H84.9361ZM92.3691 22V17.128C92.3691 15.868 91.6971 15.098 90.4371 15.098C89.5271 15.098 88.8131 15.588 88.1831 16.19L88.0291 15.238H86.6011V22H88.2811V17.436C88.7711 16.918 89.3031 16.582 89.8211 16.582C90.4371 16.582 90.6891 16.988 90.6891 17.576V22H92.3691ZM99.0642 20.012C99.0642 18.738 98.3782 18.262 96.6282 17.814C95.6202 17.548 95.3682 17.338 95.3682 16.974C95.3682 16.61 95.6762 16.358 96.3062 16.358C96.9782 16.358 97.7762 16.596 98.4482 16.974L98.6722 15.574C98.0002 15.28 97.1882 15.098 96.3062 15.098C94.7382 15.098 93.8142 15.924 93.8142 17.1C93.8142 18.332 94.5002 18.808 96.1382 19.228C97.2162 19.494 97.5102 19.69 97.5102 20.166C97.5102 20.614 97.1182 20.88 96.3902 20.88C95.5502 20.88 94.6542 20.558 93.9262 20.082L93.7022 21.482C94.3462 21.832 95.3542 22.14 96.3342 22.14C98.1122 22.14 99.0642 21.342 99.0642 20.012Z",
                            fill: "#060607"
                        }), (0, a.jsx)("circle", {
                            cx: "28",
                            cy: "62",
                            r: "16",
                            fill: "url(#tutorial-media-channels-image2)"
                        }), (0, a.jsx)("path", {
                            d: "M59.572 60V51.72H58.096V57.144L54.376 51.72H52.876V60H54.352V54.3L58.252 60H59.572ZM63.4852 55.08C64.1812 55.08 64.5412 55.584 64.6372 56.484H62.3212C62.4292 55.548 62.9092 55.08 63.4852 55.08ZM66.0292 59.412L65.8612 58.284C65.2252 58.728 64.6132 59.004 63.8692 59.004C62.9812 59.004 62.3692 58.512 62.3092 57.384H66.0292C66.0292 57.3 66.0412 57.156 66.0412 57.036C66.0412 55.392 65.2612 54.084 63.5212 54.084C62.0092 54.084 60.8812 55.224 60.8812 57.108C60.8812 59.196 62.0932 60.12 63.7132 60.12C64.6492 60.12 65.4052 59.844 66.0292 59.412ZM68.7047 60V51.336L67.2647 51.564V60H68.7047ZM71.7281 60V51.336L70.2881 51.564V60H71.7281ZM73.8635 62.184C74.9075 62.184 75.5795 61.764 76.0715 60.372L78.2915 54.204H76.8395L75.5435 58.284L74.2235 54.12L72.7235 54.312L74.8235 59.988L74.7755 60.156C74.5835 60.78 74.1995 60.996 73.7195 60.996C73.4675 60.996 73.2635 60.96 73.0835 60.912L73.2755 62.124C73.4075 62.16 73.5515 62.184 73.8635 62.184Z",
                            fill: "#060607"
                        }), (0, a.jsx)("path", {
                            d: "M58.792 76.084L59.908 75.844L56.716 67.684H55.588L52.348 76H53.524L54.448 73.516H57.82L58.792 76.084ZM56.128 69.004L57.448 72.52H54.82L56.128 69.004ZM65.7697 76V71.836C65.7697 70.804 65.1937 70.156 64.1137 70.156C63.2977 70.156 62.6257 70.612 62.0857 71.104L61.9537 70.276H61.1017V76H62.1697V72.04C62.6857 71.488 63.2617 71.116 63.8257 71.116C64.4497 71.116 64.7017 71.512 64.7017 72.1V76H65.7697ZM67.7558 78.184C68.5958 78.184 69.2198 77.872 69.6878 76.6L72.0278 70.276H70.9118L69.4118 74.728L67.8758 70.192L66.7958 70.36L68.8838 76.024L68.7398 76.408C68.5118 77.02 68.1878 77.248 67.7078 77.248C67.5398 77.248 67.3238 77.212 67.1438 77.164L67.2998 78.136C67.4078 78.16 67.5278 78.184 67.7558 78.184ZM77.9291 73.144C77.9291 71.26 76.8011 70.156 75.2651 70.156C73.7411 70.156 72.6371 71.26 72.6371 73.144C72.6371 75.028 73.7411 76.12 75.2651 76.12C76.8011 76.12 77.9291 75.028 77.9291 73.144ZM76.8491 73.144C76.8491 74.344 76.3211 75.232 75.2651 75.232C74.2571 75.232 73.7171 74.32 73.7171 73.144C73.7171 71.944 74.2331 71.044 75.2651 71.044C76.2971 71.044 76.8491 71.968 76.8491 73.144ZM83.9572 76V71.836C83.9572 70.804 83.3812 70.156 82.3012 70.156C81.4852 70.156 80.8132 70.612 80.2732 71.104L80.1412 70.276H79.2892V76H80.3572V72.04C80.8732 71.488 81.4492 71.116 82.0132 71.116C82.6372 71.116 82.8892 71.512 82.8892 72.1V76H83.9572ZM87.8013 70.996C88.6293 70.996 89.0373 71.524 89.1693 72.448H86.4093C86.5773 71.476 87.1413 70.996 87.8013 70.996ZM90.2373 75.352L90.0813 74.392C89.4573 74.884 88.8573 75.208 88.0293 75.208C87.0333 75.208 86.4093 74.584 86.3613 73.252H90.2493V73.024C90.2493 71.44 89.4813 70.156 87.8133 70.156C86.3733 70.156 85.2933 71.284 85.2933 73.12C85.2933 75.22 86.4573 76.12 87.9453 76.12C88.8933 76.12 89.6253 75.832 90.2373 75.352ZM101.73 70.276H100.662L99.4503 74.512L98.1903 70.276H97.2903L96.0303 74.512L94.7823 70.192L93.7383 70.36L95.5743 76.024H96.4623L97.7223 71.704L98.9943 76.024H99.8943L101.73 70.276ZM106.014 74.428C105.534 74.92 104.934 75.232 104.31 75.232C103.77 75.232 103.458 74.932 103.458 74.464C103.458 73.876 103.902 73.3 106.014 73.096V74.428ZM107.082 76V71.992C107.082 70.72 106.41 70.156 105.018 70.156C104.13 70.156 103.482 70.36 102.798 70.636L102.942 71.56C103.566 71.284 104.226 71.068 104.922 71.068C105.582 71.068 106.014 71.32 106.014 72.04V72.28C103.626 72.532 102.402 73.096 102.402 74.524C102.402 75.496 103.05 76.12 104.082 76.12C105.018 76.12 105.642 75.7 106.098 75.232L106.218 76H107.082ZM113.406 76V71.836C113.406 70.804 112.83 70.156 111.75 70.156C110.934 70.156 110.262 70.612 109.722 71.104L109.59 70.276H108.738V76H109.806V72.04C110.322 71.488 110.898 71.116 111.462 71.116C112.086 71.116 112.338 71.512 112.338 72.1V76H113.406ZM117.815 76.024L117.671 75.112C117.539 75.136 117.371 75.148 117.179 75.148C116.579 75.148 116.387 74.86 116.387 74.392V71.176H117.767L117.623 70.276H116.387V68.212L115.343 68.368V70.276H114.479V71.176H115.343V74.584C115.343 75.736 116.003 76.096 117.011 76.096C117.383 76.096 117.635 76.06 117.815 76.024ZM124.494 76.024L124.35 75.112C124.218 75.136 124.05 75.148 123.858 75.148C123.258 75.148 123.066 74.86 123.066 74.392V71.176H124.446L124.302 70.276H123.066V68.212L122.022 68.368V70.276H121.158V71.176H122.022V74.584C122.022 75.736 122.682 76.096 123.69 76.096C124.062 76.096 124.314 76.06 124.494 76.024ZM130.71 73.144C130.71 71.26 129.582 70.156 128.046 70.156C126.522 70.156 125.418 71.26 125.418 73.144C125.418 75.028 126.522 76.12 128.046 76.12C129.582 76.12 130.71 75.028 130.71 73.144ZM129.63 73.144C129.63 74.344 129.102 75.232 128.046 75.232C127.038 75.232 126.498 74.32 126.498 73.144C126.498 71.944 127.014 71.044 128.046 71.044C129.078 71.044 129.63 71.968 129.63 73.144ZM139.375 76V71.836C139.375 70.804 138.799 70.156 137.719 70.156C136.903 70.156 136.243 70.612 135.775 71.032V67.336L134.707 67.504V76H135.775V72.04C136.291 71.488 136.867 71.116 137.431 71.116C138.055 71.116 138.307 71.512 138.307 72.1V76H139.375ZM144.299 74.428C143.819 74.92 143.219 75.232 142.595 75.232C142.055 75.232 141.743 74.932 141.743 74.464C141.743 73.876 142.187 73.3 144.299 73.096V74.428ZM145.367 76V71.992C145.367 70.72 144.695 70.156 143.303 70.156C142.415 70.156 141.767 70.36 141.083 70.636L141.227 71.56C141.851 71.284 142.511 71.068 143.207 71.068C143.867 71.068 144.299 71.32 144.299 72.04V72.28C141.911 72.532 140.687 73.096 140.687 74.524C140.687 75.496 141.335 76.12 142.367 76.12C143.303 76.12 143.927 75.7 144.383 75.232L144.503 76H145.367ZM151.692 76V71.836C151.692 70.804 151.116 70.156 150.036 70.156C149.22 70.156 148.548 70.612 148.008 71.104L147.876 70.276H147.024V76H148.092V72.04C148.608 71.488 149.184 71.116 149.748 71.116C150.372 71.116 150.624 71.512 150.624 72.1V76H151.692ZM156.484 72.136C156.484 72.82 156.028 73.36 155.296 73.36C154.588 73.36 154.132 72.844 154.132 72.184C154.132 71.488 154.576 70.936 155.296 70.936C156.004 70.936 156.484 71.452 156.484 72.136ZM158.188 76.42C158.188 75.532 157.432 75.148 156.22 74.932L155.812 74.86C154.804 74.68 154.6 74.632 154.6 74.428C154.6 74.32 154.72 74.188 154.888 74.08C155.032 74.104 155.176 74.116 155.32 74.116C156.484 74.116 157.516 73.372 157.516 72.148C157.516 71.824 157.444 71.524 157.288 71.26L158.38 71.152L158.224 70.192L156.772 70.636C156.376 70.324 155.872 70.156 155.296 70.156C154.132 70.156 153.1 70.912 153.1 72.148C153.1 72.928 153.532 73.528 154.168 73.852C153.784 74.08 153.568 74.356 153.568 74.632C153.568 74.848 153.676 75.052 153.928 75.232C153.124 75.664 152.716 76.12 152.716 76.708C152.716 77.716 153.904 78.184 155.392 78.184C156.88 78.184 158.188 77.62 158.188 76.42ZM155.44 77.416C154.324 77.416 153.736 77.08 153.736 76.624C153.736 76.228 154.036 75.892 154.708 75.556C154.936 75.604 155.104 75.64 155.416 75.7L156.1 75.82C156.916 75.964 157.18 76.204 157.18 76.552C157.18 77.032 156.556 77.416 155.44 77.416ZM167.003 73.144C167.003 71.26 165.875 70.156 164.339 70.156C162.815 70.156 161.711 71.26 161.711 73.144C161.711 75.028 162.815 76.12 164.339 76.12C165.875 76.12 167.003 75.028 167.003 73.144ZM165.923 73.144C165.923 74.344 165.395 75.232 164.339 75.232C163.331 75.232 162.791 74.32 162.791 73.144C162.791 71.944 163.307 71.044 164.339 71.044C165.371 71.044 165.923 71.968 165.923 73.144ZM168.339 70.276V74.44C168.339 75.472 168.903 76.12 169.995 76.12C170.799 76.12 171.483 75.676 172.023 75.172L172.155 76H173.007V70.276H171.939V74.236C171.423 74.788 170.847 75.16 170.283 75.16C169.659 75.16 169.407 74.764 169.407 74.176V70.276H168.339ZM177.44 76.024L177.296 75.112C177.164 75.136 176.996 75.148 176.804 75.148C176.204 75.148 176.012 74.86 176.012 74.392V71.176H177.392L177.248 70.276H176.012V68.212L174.968 68.368V70.276H174.104V71.176H174.968V74.584C174.968 75.736 175.628 76.096 176.636 76.096C177.008 76.096 177.26 76.06 177.44 76.024ZM184.119 76.024L183.975 75.112C183.843 75.136 183.675 75.148 183.483 75.148C182.883 75.148 182.691 74.86 182.691 74.392V71.176H184.071L183.927 70.276H182.691V68.212L181.647 68.368V70.276H180.783V71.176H181.647V74.584C181.647 75.736 182.307 76.096 183.315 76.096C183.687 76.096 183.939 76.06 184.119 76.024ZM190.082 76V71.836C190.082 70.804 189.506 70.156 188.426 70.156C187.61 70.156 186.95 70.612 186.482 71.032V67.336L185.414 67.504V76H186.482V72.04C186.998 71.488 187.574 71.116 188.138 71.116C188.762 71.116 189.014 71.512 189.014 72.1V76H190.082ZM193.038 68.452C193.038 68.08 192.738 67.768 192.366 67.768C191.994 67.768 191.682 68.08 191.682 68.452C191.682 68.824 191.994 69.124 192.366 69.124C192.738 69.124 193.038 68.824 193.038 68.452ZM192.894 76V70.276H191.826V76H192.894ZM198.656 74.404C198.656 73.312 198.02 72.904 196.604 72.544C195.704 72.316 195.416 72.1 195.416 71.716C195.416 71.308 195.752 71.056 196.4 71.056C197 71.056 197.636 71.26 198.14 71.548L198.308 70.54C197.768 70.3 197.132 70.156 196.424 70.156C195.176 70.156 194.408 70.828 194.408 71.74C194.408 72.76 194.948 73.168 196.292 73.504C197.324 73.756 197.648 73.948 197.648 74.476C197.648 74.956 197.216 75.232 196.484 75.232C195.704 75.232 195.008 74.944 194.468 74.572L194.312 75.58C194.804 75.856 195.644 76.12 196.4 76.12C197.876 76.12 198.656 75.448 198.656 74.404ZM60.328 86.276H59.26L58.048 90.512L56.788 86.276H55.888L54.628 90.512L53.38 86.192L52.336 86.36L54.172 92.024H55.06L56.32 87.704L57.592 92.024H58.492L60.328 86.276ZM63.5318 86.996C64.3598 86.996 64.7678 87.524 64.8998 88.448H62.1398C62.3078 87.476 62.8718 86.996 63.5318 86.996ZM65.9678 91.352L65.8118 90.392C65.1878 90.884 64.5878 91.208 63.7598 91.208C62.7638 91.208 62.1398 90.584 62.0918 89.252H65.9798V89.024C65.9798 87.44 65.2118 86.156 63.5438 86.156C62.1038 86.156 61.0238 87.284 61.0238 89.12C61.0238 91.22 62.1878 92.12 63.6758 92.12C64.6238 92.12 65.3558 91.832 65.9678 91.352ZM69.5201 86.996C70.3481 86.996 70.7561 87.524 70.8881 88.448H68.1281C68.2961 87.476 68.8601 86.996 69.5201 86.996ZM71.9561 91.352L71.8001 90.392C71.1761 90.884 70.5761 91.208 69.7481 91.208C68.7521 91.208 68.1281 90.584 68.0801 89.252H71.9681V89.024C71.9681 87.44 71.2001 86.156 69.5321 86.156C68.0921 86.156 67.0121 87.284 67.0121 89.12C67.0121 91.22 68.1761 92.12 69.6641 92.12C70.6121 92.12 71.3441 91.832 71.9561 91.352ZM76.9364 92.084L78.1004 91.904L75.4844 88.808L77.8964 86.276H76.6124L74.3924 88.676V83.336L73.3244 83.504V92H74.3924V89L76.9364 92.084ZM81.1099 86.996C81.9379 86.996 82.3459 87.524 82.4779 88.448H79.7179C79.8859 87.476 80.4499 86.996 81.1099 86.996ZM83.5459 91.352L83.3899 90.392C82.7659 90.884 82.1659 91.208 81.3379 91.208C80.3419 91.208 79.7179 90.584 79.6699 89.252H83.5579V89.024C83.5579 87.44 82.7899 86.156 81.1219 86.156C79.6819 86.156 78.6019 87.284 78.6019 89.12C78.6019 91.22 79.7659 92.12 81.2539 92.12C82.2019 92.12 82.9339 91.832 83.5459 91.352ZM89.5822 92V87.836C89.5822 86.804 89.0062 86.156 87.9262 86.156C87.1102 86.156 86.4382 86.612 85.8982 87.104L85.7662 86.276H84.9142V92H85.9822V88.04C86.4982 87.488 87.0742 87.116 87.6382 87.116C88.2622 87.116 88.5142 87.512 88.5142 88.1V92H89.5822ZM91.9983 89.252C91.9983 87.836 92.6463 87.104 93.5463 87.104C94.1583 87.104 94.5063 87.2 94.9503 87.428V90.164C94.4943 90.776 93.9903 91.172 93.3303 91.172C92.5623 91.172 91.9983 90.512 91.9983 89.252ZM90.9183 89.3C90.9183 91.22 91.9383 92.12 93.1743 92.12C94.0143 92.12 94.6023 91.688 95.0343 91.172L95.1663 92H96.0183V83.336L94.9503 83.504V86.456C94.5903 86.312 94.0743 86.204 93.5103 86.204C92.1183 86.204 90.9183 87.212 90.9183 89.3ZM99.3194 89.54L100.015 89.384L100.123 88.196C101.551 87.548 102.415 86.984 102.415 85.688C102.415 84.38 101.419 83.564 99.9554 83.564C98.9714 83.564 98.1194 83.912 97.3874 84.452L97.5434 85.556C98.2154 85.004 98.9594 84.584 99.8954 84.584C100.699 84.584 101.287 85.004 101.287 85.736C101.287 86.504 100.783 86.888 99.6554 87.356L99.1634 87.56L99.3194 89.54ZM99.0674 92H100.267V90.572H99.0674V92Z",
                            fill: "#2E3338"
                        }), (0, a.jsxs)("defs", {
                            children: [(0, a.jsx)("pattern", {
                                id: "tutorial-media-channels-image1",
                                x: "0",
                                y: "0",
                                patternUnits: "objectBoundingBox",
                                height: "1",
                                width: "1",
                                children: (0, a.jsx)("image", {
                                    x: "0",
                                    y: "0",
                                    height: "32",
                                    width: "32",
                                    href: l
                                })
                            }), (0, a.jsx)("pattern", {
                                id: "tutorial-media-channels-image2",
                                x: "0",
                                y: "0",
                                patternUnits: "objectBoundingBox",
                                height: "1",
                                width: "1",
                                children: (0, a.jsx)("image", {
                                    x: "0",
                                    y: "0",
                                    height: "32",
                                    width: "32",
                                    href: i
                                })
                            })]
                        })]
                    })
                })
            }
        },
        894383: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("135108"),
                l = n("581752"),
                i = n("911005");

            function r() {
                return (0, a.jsx)("div", {
                    className: s.container,
                    children: (0, a.jsxs)("svg", {
                        width: "248",
                        height: "67",
                        viewBox: "0 0 248 67",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, a.jsx)("path", {
                            d: "M1.91937 22.0819L0.353585 25.3514C0.282937 25.5093 0.265227 25.6857 0.303076 25.8544C0.311999 25.943 0.339002 26.0288 0.382429 26.1067C0.425856 26.1845 0.484791 26.2527 0.555622 26.3071C0.607907 26.38 0.675826 26.4403 0.754452 26.4838C0.833079 26.5273 0.920441 26.5529 1.0102 26.5586C1.19659 26.5915 1.38843 26.5741 1.5658 26.5083L4.74788 24.949L5.15196 24.8484L5.55603 24.949L8.73811 26.5083H9.29371L9.74829 26.2568C9.85659 26.1275 9.92655 25.9707 9.95033 25.8041C9.98818 25.6354 9.97046 25.459 9.89982 25.3011L8.33403 22.0315C8.2926 21.919 8.27539 21.799 8.28352 21.6794C8.27533 21.5434 8.29245 21.4069 8.33403 21.277L9.89982 18.1081C9.94425 18.0329 9.97177 17.949 9.98049 17.8621C9.98921 17.7753 9.97892 17.6876 9.95033 17.6051C9.93611 17.4208 9.86561 17.2453 9.74829 17.1021C9.60449 16.9853 9.42824 16.9151 9.2432 16.9009C9.16036 16.8724 9.07231 16.8622 8.98511 16.8709C8.89791 16.8796 8.81364 16.907 8.73811 16.9512L5.50552 18.5105L5.10145 18.6111L4.69737 18.5105L1.5153 16.9512C1.43095 16.9057 1.3382 16.8778 1.24269 16.8692C1.14717 16.8605 1.05089 16.8713 0.959695 16.9009C0.792331 16.9246 0.634911 16.9943 0.505112 17.1021C0.372179 17.2408 0.284186 17.416 0.252566 17.6051C0.236844 17.779 0.271925 17.9537 0.353585 18.1081L1.86886 21.3273C1.94921 21.4454 1.98499 21.5879 1.96988 21.7297C1.98577 21.7888 1.98948 21.8504 1.9808 21.9109C1.97212 21.9715 1.95122 22.0296 1.91937 22.0819Z",
                            fill: "#AEC7FF"
                        }), (0, a.jsx)("path", {
                            d: "M205.949 47.6259C218.112 47.6259 227.971 37.8071 227.971 25.695C227.971 13.5829 218.112 3.76405 205.949 3.76405C193.787 3.76405 183.927 13.5829 183.927 25.695C183.927 37.8071 193.787 47.6259 205.949 47.6259Z",
                            fill: "url(#tutorial-media-voice-channels-image2)"
                        }), (0, a.jsx)("path", {
                            d: "M206.106 47.5713C218.256 47.5713 228.106 37.7216 228.106 25.5713C228.106 13.4211 218.256 3.57133 206.106 3.57133C193.956 3.57133 184.106 13.4211 184.106 25.5713C184.106 37.7216 193.956 47.5713 206.106 47.5713Z",
                            stroke: "#3ba55c",
                            strokeWidth: "3"
                        }), (0, a.jsx)("path", {
                            d: "M43.8822 66.4461C56.0446 66.4461 65.9042 56.6273 65.9042 44.5152C65.9042 32.4031 56.0446 22.5843 43.8822 22.5843C31.7198 22.5843 21.8602 32.4031 21.8602 44.5152C21.8602 56.6273 31.7198 66.4461 43.8822 66.4461Z",
                            fill: "url(#tutorial-media-voice-channels-image1)"
                        }), (0, a.jsx)("path", {
                            d: "M43.6684 66.0315C55.8187 66.0315 65.6684 56.1818 65.6684 44.0315C65.6684 31.8813 55.8187 22.0315 43.6684 22.0315C31.5181 22.0315 21.6684 31.8813 21.6684 44.0315C21.6684 56.1818 31.5181 66.0315 43.6684 66.0315Z",
                            stroke: "#3ba55c",
                            strokeWidth: "3"
                        }), (0, a.jsx)("path", {
                            d: "M138.597 43.8116C134.96 31.857 134.96 19.0973 138.597 7.14265",
                            stroke: "#FF6E5C",
                            strokeWidth: "5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round"
                        }), (0, a.jsx)("path", {
                            d: "M111.562 25.5955C115.2 37.5501 115.2 50.3098 111.562 62.2644",
                            stroke: "#FFED00",
                            strokeWidth: "5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round"
                        }), (0, a.jsx)("path", {
                            d: "M159.71 37.6246C158.509 33.6948 157.896 29.6101 157.892 25.5023C157.9 21.3782 158.513 17.2775 159.71 13.3296",
                            stroke: "#FF6E5C",
                            strokeWidth: "5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round"
                        }), (0, a.jsx)("path", {
                            d: "M149.154 10.2613C146.124 20.198 146.124 30.8065 149.154 40.7433",
                            stroke: "#FF6E5C",
                            strokeWidth: "5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round"
                        }), (0, a.jsx)("path", {
                            d: "M170.266 16.4482C169.347 19.3785 168.887 22.4324 168.903 25.5023C168.887 28.5721 169.347 31.626 170.266 34.5563",
                            stroke: "#FF6E5C",
                            strokeWidth: "5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round"
                        }), (0, a.jsx)("path", {
                            d: "M90.0579 56.1351C91.2957 52.1951 91.9258 48.0908 91.9267 43.9625C91.9301 39.8503 91.2999 35.7619 90.0579 31.8401",
                            stroke: "#FFED00",
                            strokeWidth: "5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round"
                        }), (0, a.jsx)("path", {
                            d: "M100.614 28.6068C103.644 38.5435 103.644 49.152 100.614 59.0887",
                            stroke: "#FFED00",
                            strokeWidth: "5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round"
                        }), (0, a.jsx)("path", {
                            d: "M79.5015 34.9084C81.3857 40.7986 81.3857 47.1263 79.5015 53.0165",
                            stroke: "#FFED00",
                            strokeWidth: "5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round"
                        }), (0, a.jsx)("path", {
                            d: "M182.237 57.1914L184.257 56.4872C184.354 56.4431 184.436 56.3722 184.494 56.2831C184.551 56.1939 184.582 56.0902 184.582 55.9842C184.582 55.8783 184.551 55.7746 184.494 55.6854C184.436 55.5962 184.354 55.5254 184.257 55.4812L182.237 54.777C182.16 54.7552 182.088 54.7169 182.027 54.6648C181.966 54.6127 181.917 54.548 181.884 54.4752L181.176 52.4632C181.143 52.3626 181.079 52.275 180.993 52.2128C180.907 52.1507 180.803 52.1173 180.697 52.1173C180.59 52.1173 180.487 52.1507 180.4 52.2128C180.314 52.275 180.25 52.3626 180.217 52.4632L179.51 54.4752C179.476 54.548 179.427 54.6127 179.366 54.6648C179.305 54.7169 179.233 54.7552 179.156 54.777L177.186 55.4812C177.052 55.4812 176.924 55.5342 176.829 55.6286C176.734 55.7229 176.681 55.8508 176.681 55.9842C176.681 56.1176 176.734 56.2456 176.829 56.3399C176.924 56.4343 177.052 56.4872 177.186 56.4872L179.156 57.1914C179.233 57.2133 179.305 57.2516 179.366 57.3037C179.427 57.3558 179.476 57.4205 179.51 57.4933L180.217 59.5053C180.25 59.6059 180.314 59.6935 180.4 59.7556C180.487 59.8178 180.59 59.8512 180.697 59.8512C180.803 59.8512 180.907 59.8178 180.993 59.7556C181.079 59.6935 181.143 59.6059 181.176 59.5053L181.884 57.4933C181.917 57.4205 181.966 57.3558 182.027 57.3037C182.088 57.2516 182.16 57.2133 182.237 57.1914Z",
                            fill: "#EC7DF7"
                        }), (0, a.jsx)("path", {
                            d: "M242.696 1.35812C242.696 0.746955 242.199 0.251511 241.585 0.251511C240.972 0.251511 240.474 0.746955 240.474 1.35812V2.4949C240.474 3.10607 240.972 3.60151 241.585 3.60151C242.199 3.60151 242.696 3.10607 242.696 2.4949V1.35812Z",
                            fill: "#7196FF"
                        }), (0, a.jsx)("path", {
                            d: "M242.696 10.2613C242.696 9.65011 242.199 9.15466 241.585 9.15466C240.972 9.15466 240.474 9.65011 240.474 10.2613V11.3981C240.474 12.0092 240.972 12.5047 241.585 12.5047C242.199 12.5047 242.696 12.0092 242.696 11.3981V10.2613Z",
                            fill: "#7196FF"
                        }), (0, a.jsx)("path", {
                            d: "M246.636 7.49476C247.25 7.49476 247.747 6.99933 247.747 6.38817C247.747 5.77701 247.25 5.28156 246.636 5.28156H245.495C244.881 5.28156 244.384 5.77701 244.384 6.38817C244.384 6.99933 244.881 7.49476 245.495 7.49476H246.636Z",
                            fill: "#7196FF"
                        }), (0, a.jsx)("path", {
                            d: "M237.696 7.49477C238.31 7.49477 238.807 6.99931 238.807 6.38815C238.807 5.77699 238.31 5.28154 237.696 5.28154H236.555C235.941 5.28154 235.443 5.77699 235.443 6.38815C235.443 6.99931 235.941 7.49477 236.555 7.49477H237.696Z",
                            fill: "#7196FF"
                        }), (0, a.jsx)("path", {
                            d: "M25.2929 2.23526C24.8786 1.82274 24.207 1.82274 23.7928 2.23526C23.3786 2.64777 23.3786 3.31659 23.7928 3.7291L24.5535 4.48669C24.9678 4.8992 25.6394 4.8992 26.0536 4.48669C26.4678 4.07418 26.4678 3.40536 26.0536 2.99285L25.2929 2.23526Z",
                            fill: "#F7D036"
                        }), (0, a.jsx)("path", {
                            d: "M31.3539 8.25656C30.9397 7.84404 30.2681 7.84404 29.8538 8.25656C29.4396 8.66907 29.4396 9.33789 29.8538 9.7504L30.6146 10.508C31.0288 10.9205 31.7004 10.9205 32.1146 10.508C32.5289 10.0955 32.5289 9.42666 32.1146 9.01415L31.3539 8.25656Z",
                            fill: "#F7D036"
                        }), (0, a.jsx)("path", {
                            d: "M32.109 3.71739C32.5233 3.30488 32.5233 2.63606 32.109 2.22354C31.6948 1.81103 31.0232 1.81103 30.609 2.22355L29.8482 2.98114C29.434 3.39365 29.434 4.06247 29.8482 4.47498C30.2625 4.88749 30.9341 4.88749 31.3483 4.47498L32.109 3.71739Z",
                            fill: "#F7D036"
                        }), (0, a.jsx)("path", {
                            d: "M26.0985 9.73869C26.5128 9.32618 26.5128 8.65736 26.0985 8.24485C25.6843 7.83233 25.0127 7.83233 24.5985 8.24485L23.8378 9.00244C23.4235 9.41495 23.4235 10.0838 23.8378 10.4963C24.252 10.9088 24.9236 10.9088 25.3378 10.4963L26.0985 9.73869Z",
                            fill: "#F7D036"
                        }), (0, a.jsxs)("defs", {
                            children: [(0, a.jsx)("pattern", {
                                id: "tutorial-media-voice-channels-image1",
                                x: "0",
                                y: "0",
                                patternUnits: "objectBoundingBox",
                                height: "1",
                                width: "1",
                                children: (0, a.jsx)("image", {
                                    x: "0",
                                    y: "0",
                                    height: "44",
                                    width: "44",
                                    href: l
                                })
                            }), (0, a.jsx)("pattern", {
                                id: "tutorial-media-voice-channels-image2",
                                x: "0",
                                y: "0",
                                patternUnits: "objectBoundingBox",
                                height: "1",
                                width: "1",
                                children: (0, a.jsx)("image", {
                                    x: "0",
                                    y: "0",
                                    height: "44",
                                    width: "44",
                                    href: i
                                })
                            })]
                        })]
                    })
                })
            }
        },
        556684: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("16470"),
                l = n("446674"),
                i = n("77078"),
                r = n("843962"),
                o = n("393027"),
                u = n("42203"),
                d = n("305961"),
                c = n("697218"),
                f = n("109024"),
                h = n("315102"),
                C = n("3989");

            function E() {
                let {
                    guildId: e,
                    channelId: t
                } = (0, o.default)(e => {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    return {
                        guildId: t,
                        channelId: n
                    }
                }, s.default), n = (0, l.useStateFromStores)([d.default], () => d.default.getGuild(e)), E = (0, l.useStateFromStores)([u.default], () => null == n ? u.default.getChannel(t) : null), p = (0, l.useStateFromStores)([c.default], () => c.default.getCurrentUser()), m = null != E ? (0, r.getChannelIconURL)(E) : null, g = null != p ? p.getAvatarURL(e, 80) : h.DEFAULT_AVATARS[0], _ = (0, a.jsx)(i.Avatar, {
                    src: g,
                    "aria-hidden": !0,
                    size: i.AvatarSizes.SIZE_80,
                    className: C.avatarSizeOverride
                }), S = null;
                return S = null != n ? (0, a.jsx)(f.default, {
                    guild: n
                }) : null != m ? (0, a.jsx)(i.Avatar, {
                    "aria-hidden": !0,
                    src: m,
                    size: i.AvatarSizes.SIZE_80,
                    className: C.avatarSizeOverride
                }) : _, (0, a.jsxs)("div", {
                    className: C.container,
                    children: [(0, a.jsx)("div", {
                        className: C.personAvatar,
                        children: _
                    }), (0, a.jsx)("div", {
                        className: C.guildAvatar,
                        children: S
                    }), (0, a.jsx)("svg", {
                        className: C.illustration,
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "156",
                        height: "70",
                        viewBox: "0 0 123 55",
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("path", {
                                fill: "#D3D6ED",
                                d: "M7.6003,3.7337 C7.6003,3.1817 7.1533,2.7337 6.6003,2.7337 C5.7663,2.7337 5.0903,2.0577 5.0903,1.2237 C5.0903,0.6717 4.6423,0.2237 4.0903,0.2237 C3.5383,0.2237 3.0903,0.6717 3.0903,1.2237 C3.0903,2.0577 2.4133,2.7337 1.5803,2.7337 C1.0283,2.7337 0.5803,3.1817 0.5803,3.7337 C0.5803,4.2857 1.0283,4.7337 1.5803,4.7337 C2.4133,4.7337 3.0903,5.4097 3.0903,6.2437 C3.0903,6.7967 3.5383,7.2437 4.0903,7.2437 C4.6423,7.2437 5.0903,6.7967 5.0903,6.2437 C5.0903,5.4097 5.7663,4.7337 6.6003,4.7337 C7.1533,4.7337 7.6003,4.2857 7.6003,3.7337"
                            }), (0, a.jsx)("path", {
                                fill: "#ACB0FF",
                                d: "M96.6157,5.4263 C96.6157,4.8743 96.1687,4.4263 95.6157,4.4263 C95.0627,4.4263 94.6157,4.8743 94.6157,5.4263 C94.6157,6.2603 93.9397,6.9363 93.1057,6.9363 C92.5537,6.9363 92.1057,7.3843 92.1057,7.9363 C92.1057,8.4883 92.5537,8.9363 93.1057,8.9363 C93.9397,8.9363 94.6157,9.6123 94.6157,10.4463 C94.6157,10.9983 95.0627,11.4463 95.6157,11.4463 C96.1687,11.4463 96.6157,10.9983 96.6157,10.4463 C96.6157,9.6123 97.2917,8.9363 98.1257,8.9363 C98.6787,8.9363 99.1257,8.4883 99.1257,7.9363 C99.1257,7.3843 98.6787,6.9363 98.1257,6.9363 C97.2917,6.9363 96.6157,6.2603 96.6157,5.4263 Z"
                            }), (0, a.jsx)("path", {
                                fill: "#FFF",
                                d: "M120.7351 14.0452L119.5511 15.2282C119.1611 15.6182 119.1611 16.2512 119.5511 16.6422 119.7471 16.8372 120.0031 16.9352 120.2581 16.9352 120.5141 16.9352 120.7701 16.8372 120.9651 16.6422L122.1491 15.4592C122.5401 15.0682 122.5401 14.4362 122.1491 14.0452 121.7581 13.6542 121.1261 13.6542 120.7351 14.0452zM113.635 21.1452C113.245 21.5352 113.245 22.1682 113.635 22.5592 113.831 22.7542 114.087 22.8522 114.342 22.8522 114.598 22.8522 114.855 22.7542 115.049 22.5592L116.233 21.3752C116.624 20.9842 116.624 20.3522 116.233 19.9612 115.842 19.5702 115.209 19.5702 114.819 19.9612L113.635 21.1452zM120.9655 19.9612C120.5745 19.5702 119.9425 19.5702 119.5515 19.9612 119.1605 20.3522 119.1605 20.9842 119.5515 21.3752L120.7355 22.5592C120.9305 22.7542 121.1865 22.8522 121.4425 22.8522 121.6975 22.8522 121.9535 22.7542 122.1495 22.5592 122.5395 22.1682 122.5395 21.5352 122.1495 21.1452L120.9655 19.9612zM115.0491 14.0449C114.6591 13.6549 114.0251 13.6549 113.6351 14.0449 113.2451 14.4359 113.2451 15.0689 113.6351 15.4589L114.8191 16.6419C115.0141 16.8369 115.2701 16.9349 115.5261 16.9349 115.7821 16.9349 116.0381 16.8369 116.2331 16.6419 116.6241 16.2509 116.6241 15.6189 116.2331 15.2279L115.0491 14.0449z"
                            }), (0, a.jsx)("rect", {
                                width: "40",
                                height: "25",
                                x: "68",
                                y: "22",
                                fill: "#999CF4",
                                fillRule: "nonzero",
                                rx: "3"
                            }), (0, a.jsx)("path", {
                                fill: "#999CF4",
                                fillRule: "nonzero",
                                d: "M90,46 L90,53.8100983 C90,54.362383 90.4477153,54.8100983 91,54.8100983 C91.2501917,54.8100983 91.4912948,54.7163131 91.6757246,54.5472524 L101,46 L90,46 Z",
                                transform: "matrix(-1 0 0 1 191 0)"
                            }), (0, a.jsxs)("g", {
                                fill: "#FFF",
                                fillRule: "nonzero",
                                opacity: ".902",
                                transform: "translate(78 32)",
                                children: [(0, a.jsx)("circle", {
                                    cx: "2.5",
                                    cy: "2.5",
                                    r: "2.5"
                                }), (0, a.jsx)("circle", {
                                    cx: "10.5",
                                    cy: "2.5",
                                    r: "2.5"
                                }), (0, a.jsx)("circle", {
                                    cx: "18.5",
                                    cy: "2.5",
                                    r: "2.5"
                                })]
                            }), (0, a.jsx)("rect", {
                                width: "40",
                                height: "25",
                                x: "13",
                                y: "9",
                                fill: "#5865f2",
                                fillRule: "nonzero",
                                rx: "3"
                            }), (0, a.jsx)("path", {
                                fill: "#5865f2",
                                fillRule: "nonzero",
                                d: "M20,33 L20,40.8100983 C20,41.362383 20.4477153,41.8100983 21,41.8100983 C21.2501917,41.8100983 21.4912948,41.7163131 21.6757246,41.5472524 L31,33 L20,33 Z"
                            }), (0, a.jsxs)("g", {
                                fill: "#FFF",
                                fillRule: "nonzero",
                                opacity: ".902",
                                transform: "translate(23 19)",
                                children: [(0, a.jsx)("circle", {
                                    cx: "2.5",
                                    cy: "2.5",
                                    r: "2.5"
                                }), (0, a.jsx)("circle", {
                                    cx: "10.5",
                                    cy: "2.5",
                                    r: "2.5"
                                }), (0, a.jsx)("circle", {
                                    cx: "18.5",
                                    cy: "2.5",
                                    r: "2.5"
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        12896: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("817736"),
                i = n("118810"),
                r = n("446674"),
                o = n("345037"),
                u = n("471671"),
                d = n("53889"),
                c = n("612246");
            class f extends s.Component {
                componentDidMount() {
                    let {
                        visible: e,
                        inlineSpecs: t
                    } = this.props;
                    null == t && this.show(e)
                }
                componentWillUnmount() {
                    let {
                        inlineSpecs: e
                    } = this.props;
                    null == e && this.show(!1)
                }
                componentDidUpdate(e) {
                    let {
                        position: t,
                        offsetX: n,
                        offsetY: a,
                        tutorialId: s,
                        visible: l,
                        windowSize: i
                    } = e;
                    s !== this.props.tutorialId ? o.default.hide(s) : (l !== this.props.visible || t !== this.props.position || n !== this.props.offsetX || a !== this.props.offsetY || i !== this.props.windowSize) && this.show(this.props.visible)
                }
                show(e) {
                    let {
                        tutorialId: t,
                        position: n,
                        offsetX: a,
                        offsetY: s,
                        visible: r,
                        inlineSpecs: u,
                        autoInvert: d
                    } = this.props;
                    if (e && null == u) {
                        let e = (0, l.findDOMNode)(this);
                        if (!(0, i.isElement)(e)) return;
                        let {
                            top: r,
                            left: u,
                            right: c,
                            bottom: f
                        } = e.getBoundingClientRect();
                        o.default.show(t, {
                            position: n,
                            targetWidth: c - u,
                            targetHeight: f - r,
                            autoInvert: d,
                            origin: {
                                x: u,
                                y: r
                            },
                            offset: {
                                x: a,
                                y: s
                            }
                        })
                    } else r && o.default.hide(t)
                }
                render() {
                    let {
                        inlineSpecs: e,
                        tutorialId: t,
                        children: n,
                        visible: l,
                        windowFocused: i,
                        position: r,
                        autoInvert: o
                    } = this.props, u = c.default.getData()[t];
                    return null != e && null != u ? (0, a.jsxs)(a.Fragment, {
                        children: [n, l && (0, a.jsx)(d.TutorialIndicator, {
                            autoInvert: o,
                            position: r,
                            tutorialId: t,
                            tutorialDefinition: u,
                            focused: i,
                            ...e
                        })]
                    }) : s.Children.only(n)
                }
            }

            function h(e) {
                let {
                    tutorialId: t
                } = e, n = (0, r.useStateFromStores)([c.default], () => c.default.shouldShow(t), [t]), s = (0, r.useStateFromStores)([u.default], () => u.default.isFocused()), l = (0, r.useStateFromStores)([u.default], () => u.default.windowSize(), []);
                return (0, a.jsx)(f, {
                    ...e,
                    visible: n,
                    windowFocused: s,
                    windowSize: l
                })
            }
            f.defaultProps = {
                position: "top",
                offsetX: 0,
                offsetY: 0,
                autoInvert: !0
            }
        },
        53889: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TutorialIndicator: function() {
                    return T
                },
                default: function() {
                    return M
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("627445"),
                o = n.n(r),
                u = n("817736"),
                d = n("118810"),
                c = n("446674"),
                f = n("77078"),
                h = n("345037"),
                C = n("778588"),
                E = n("471671"),
                p = n("808072"),
                m = n("807061"),
                g = n("826431"),
                _ = n("612246"),
                S = n("49111"),
                A = n("933934");
            class T extends s.PureComponent {
                componentDidMount() {
                    this.updateCache()
                }
                componentDidUpdate(e) {
                    let {
                        tutorialId: t,
                        origin: {
                            x: n,
                            y: a
                        },
                        targetWidth: s,
                        targetHeight: l,
                        position: i,
                        offset: r
                    } = e;
                    (this.props.tutorialId !== t || this.props.origin.x !== n || this.props.origin.y !== a || this.props.targetWidth !== s || this.props.targetHeight !== l || this.props.position !== i || this.props.offset.x !== r.x || this.props.offset.y !== r.y) && this.updateCache()
                }
                updateCache() {
                    var e, t;
                    let n = (0, u.findDOMNode)(this);
                    if (null == n || !(0, d.isElement)(n, HTMLElement)) return;
                    let {
                        offsetWidth: a,
                        offsetHeight: s
                    } = n, l = {
                        offsetX: (this.props.targetWidth - a) / 2,
                        offsetY: (this.props.targetHeight - s) / 2
                    }, i = this.props.position;
                    switch (i) {
                        case "left":
                            l.offsetX = -a;
                            break;
                        case "right":
                            l.offsetX = this.props.targetWidth;
                            break;
                        case "bottom":
                            l.offsetY = this.props.targetHeight;
                            break;
                        default:
                            l.offsetY = -s
                    }
                    l.offsetX += null !== (e = this.props.offset.x) && void 0 !== e ? e : 0, l.offsetY += null !== (t = this.props.offset.y) && void 0 !== t ? t : 0, this.setState(l)
                }
                handleSkipTips() {
                    h.default.suppressAll()
                }
                getTutorialPopoutText() {
                    let {
                        tutorialId: e
                    } = this.props;
                    return (0, g.getTutorialPopoutText)(e)
                }
                render() {
                    let {
                        tutorialId: e,
                        autoInvert: t,
                        focused: n,
                        origin: s
                    } = this.props, l = (0, m.getTutorialPopoutAttributes)(e);
                    if (null == l) return null;
                    let {
                        media: r,
                        textAlign: o,
                        isLongText: u,
                        highPriority: d,
                        spacing: c,
                        arrowAlignment: h = p.ArrowAlignments.TOP,
                        popoutPosition: C
                    } = l, {
                        offsetX: E,
                        offsetY: g
                    } = this.state, _ = {
                        left: null != E ? s.x + E : void 0,
                        top: null != g ? s.y + g : void 0
                    }, T = e => {
                        let t = n && !e;
                        return !0 !== d ? null : (0, a.jsxs)("div", {
                            children: [(0, a.jsx)("div", {
                                className: i(A.top, {
                                    [A.animating]: t,
                                    [A.notAnimating]: !t
                                })
                            }), (0, a.jsx)("div", {
                                className: i(A.bottom, {
                                    [A.animating]: t,
                                    [A.notAnimating]: !t
                                })
                            })]
                        })
                    }, M = e => {
                        let t = n && !e;
                        return {
                            [A.animating]: t,
                            [A.notAnimating]: !t,
                            [A.highPriority]: d
                        }
                    }, I = this.getTutorialPopoutText();
                    return (0, a.jsx)(p.default, {
                        position: C,
                        renderMedia: r,
                        textAlign: o,
                        spacing: c,
                        isLongText: u,
                        uniqueId: e,
                        autoInvert: t,
                        arrowAlignment: h,
                        forceTheme: S.ThemeTypes.LIGHT,
                        onSkipAll: this.handleSkipTips,
                        onComplete: this.handleDismiss,
                        ...I,
                        children: (e, t) => {
                            let {
                                isShown: n
                            } = t;
                            return (0, a.jsx)(f.Clickable, {
                                ...e,
                                className: A.indicator,
                                style: _,
                                children: (0, a.jsxs)("div", {
                                    className: i(A.animationContainer, M(n)),
                                    children: [T(n), (0, a.jsx)("div", {
                                        className: i(A.innerCircle, M(n))
                                    }), (0, a.jsx)("div", {
                                        className: i(A.outerCircle, M(n))
                                    })]
                                })
                            })
                        }
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        offsetX: null,
                        offsetY: null
                    }, this.handleDismiss = () => {
                        h.default.dismiss(this.props.tutorialId)
                    }
                }
            }
            var M = function() {
                let {
                    indicators: e,
                    tutorialData: t,
                    windowFocused: n,
                    shouldShowAny: s
                } = (0, c.useStateFromStoresObject)([_.default, E.default, C.default], () => ({
                    indicators: _.default.getIndicators(),
                    tutorialData: _.default.getData(),
                    shouldShowAny: _.default.shouldShowAnyIndicators() && !C.default.hasLayers(),
                    windowFocused: E.default.isFocused()
                }));
                return s ? (0, a.jsx)(a.Fragment, {
                    children: Object.entries(e).map(e => {
                        let [s, l] = e, i = t[s];
                        return o(null != i, "Missing tutorial definition for ".concat(s)), (0, a.jsx)(T, {
                            tutorialId: s,
                            tutorialDefinition: i,
                            focused: n,
                            ...l
                        }, s)
                    })
                }) : null
            }
        },
        807061: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getTutorialPopoutAttributes: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("808072"),
                l = n("714307"),
                i = n("894383"),
                r = n("556684");
            let o = Object.freeze({
                    "voice-conversations": {
                        popoutPosition: "right",
                        highPriority: !0,
                        textAlign: s.TextAlignments.CENTER,
                        media: () => (0, a.jsx)(i.default, {})
                    },
                    "writing-messages": {
                        popoutPosition: "top",
                        highPriority: !0,
                        textAlign: s.TextAlignments.CENTER,
                        spacing: 10,
                        media: () => (0, a.jsx)(r.default, {})
                    },
                    "direct-messages": {
                        popoutPosition: "right"
                    },
                    "create-first-server": {
                        popoutPosition: "right",
                        highPriority: !0
                    },
                    "organize-by-topic": {
                        popoutPosition: "right",
                        textAlign: s.TextAlignments.CENTER,
                        spacing: 8,
                        media: () => (0, a.jsx)(l.default, {})
                    },
                    "instant-invite": {
                        popoutPosition: "right",
                        spacing: 24,
                        highPriority: !0
                    },
                    "whos-online": {
                        spacing: 16,
                        popoutPosition: "left"
                    },
                    "server-settings": {
                        popoutPosition: "bottom",
                        spacing: 10
                    },
                    "friends-list": {
                        spacing: 8,
                        popoutPosition: "right"
                    },
                    "create-more-servers": {
                        spacing: 8,
                        popoutPosition: "right"
                    }
                }),
                u = e => e in o ? o[e] : null
        },
        826431: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getTutorialPopoutText: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("305961"),
                i = n("162771"),
                r = n("76539"),
                o = n("782340"),
                u = n("141987");
            let d = () => (0, a.jsx)(a.Fragment, {
                    children: o.default.Messages.TIP_INSTANT_INVITE_BODY3.format({
                        shareIcon: o.default.Messages.INSTANT_INVITE,
                        shareIconHook: () => (0, a.jsx)(r.default, {
                            className: u.icon
                        }, "icon")
                    })
                }),
                c = () => {
                    let e = (0, s.useStateFromStores)([l.default, i.default], () => l.default.getGuild(i.default.getGuildId()), []),
                        t = null == e ? void 0 : e.name;
                    return (0, a.jsx)(a.Fragment, {
                        children: o.default.Messages.TIP_WRITING_MESSAGES_BODY3.format({
                            serverName: t
                        })
                    })
                },
                f = e => {
                    var t, n;
                    let s = {
                            VOICE_CONVERSATIONS: {
                                title: (0, a.jsx)("div", {
                                    className: u.voiceChannelsTitle,
                                    children: o.default.Messages.NUF_VOICE_CHANNELS_TITLE
                                }),
                                body: o.default.Messages.NUF_VOICE_CHANNELS_DESCRIPTION
                            },
                            WRITING_MESSAGES: {
                                title: (0, a.jsx)("div", {
                                    className: u.writingMessagesTitle,
                                    children: o.default.Messages.TIP_WRITING_MESSAGES_TITLE3
                                }),
                                body: (0, a.jsx)(c, {})
                            },
                            ORGANIZE_BY_TOPIC: {
                                title: (0, a.jsx)("div", {
                                    className: u.channelsTitle,
                                    children: o.default.Messages.NUF_CHANNELS_TITLE
                                }),
                                body: o.default.Messages.NUF_CHANNELS_DESCRIPTION
                            },
                            WHOS_ONLINE: {
                                title: o.default.Messages.TIP_WHOS_ONLINE_TITLE3,
                                body: o.default.Messages.TIP_WHOS_ONLINE_BODY3.format()
                            },
                            INSTANT_INVITE: {
                                title: o.default.Messages.TIP_INSTANT_INVITE_TITLE3,
                                body: (0, a.jsx)(d, {})
                            },
                            SERVER_SETTINGS: {
                                title: o.default.Messages.TIP_SERVER_SETTINGS_TITLE3,
                                body: o.default.Messages.TIP_SERVER_SETTINGS_BODY3.format()
                            },
                            DIRECT_MESSAGES: {
                                title: o.default.Messages.TIP_DIRECT_MESSAGES_TITLE3,
                                body: o.default.Messages.TIP_DIRECT_MESSAGES_BODY3.format()
                            },
                            CREATE_MORE_SERVERS: {
                                title: o.default.Messages.TIP_CREATE_MORE_SERVERS_TITLE3,
                                body: o.default.Messages.TIP_CREATE_MORE_SERVERS_BODY3.format()
                            },
                            CREATE_FIRST_SERVER: {
                                title: o.default.Messages.TIP_CREATE_FIRST_SERVER_TITLE3,
                                body: o.default.Messages.TIP_CREATE_FIRST_SERVER_BODY3.format()
                            },
                            FRIENDS_LIST: {
                                title: o.default.Messages.TIP_FRIENDS_LIST_TITLE3,
                                body: o.default.Messages.TIP_FRIENDS_LIST_BODY3.format()
                            }
                        },
                        l = e.replace(/-/g, "_").toUpperCase(),
                        i = null !== (t = s[l]) && void 0 !== t ? t : {};
                    return {
                        title: i.title,
                        body: i.body,
                        isLongText: null !== (n = i.isLongText) && void 0 !== n && n
                    }
                }
        },
        612246: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("394846"),
                s = n("446674"),
                l = n("913144"),
                i = n("619443"),
                r = n("624309"),
                o = n("492397");
            let u = {},
                d = {},
                c = !0,
                f = {},
                h = !1;

            function C() {
                return r.default
            }

            function E() {
                if (f = {}, c) return;
                let e = r.default;
                for (let [t, n] of Object.entries(e)) {
                    let e = !1 !== u[t];
                    if (f[t] = e, e && null != n.prerequisites)
                        for (let e of n.prerequisites) {
                            let n = !1 === u[e];
                            !n && (f[t] = !1)
                        }
                }
            }
            class p extends s.default.Store {
                initialize() {
                    E(), this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type), this.waitFor(i.default)
                }
                shouldShow(e) {
                    var t;
                    return !(!h || c || o.CONFERENCE_MODE_ENABLED || (t = e, a.isMobile && ["writing-messages", "organize-by-topic"].includes(t))) && (f[e] || !1)
                }
                shouldShowAnyIndicators() {
                    return !c
                }
                getIndicators() {
                    return d
                }
                getData() {
                    return r.default
                }
                getDefinition(e) {
                    let t = this.getData();
                    return null != t ? t[e] : null
                }
            }
            p.displayName = "TutorialIndicatorStore";
            var m = new p(l.default, {
                CONNECTION_OPEN: function(e) {
                    let {
                        tutorial: t
                    } = e;
                    h = !0, c = !0, u = {}, null != t && (c = t.indicators_suppressed, t.indicators_confirmed.forEach(e => u[e] = !1)), E()
                },
                CONNECTION_CLOSED: function() {
                    h = !1
                },
                TUTORIAL_INDICATOR_DISMISS: function(e) {
                    u = {
                        ...u,
                        [e.tutorialId]: !1
                    }, d = {
                        ...d
                    }, delete d[e.tutorialId], E()
                },
                TUTORIAL_INDICATOR_SHOW: function(e) {
                    d = {
                        ...d,
                        [e.tutorialId]: e.renderData
                    }
                },
                TUTORIAL_INDICATOR_HIDE: function(e) {
                    d = {
                        ...d
                    }, delete d[e.tutorialId]
                },
                TUTORIAL_INDICATOR_SUPPRESS_ALL: function() {
                    c = !0
                }
            })
        },
        624309: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a = Object.freeze({
                "voice-conversations": {
                    popoutOffset: {
                        x: 45,
                        y: 0
                    }
                },
                "writing-messages": {
                    prerequisites: ["voice-conversations"],
                    popoutOffset: {
                        x: -36,
                        y: 0
                    }
                },
                "direct-messages": {
                    popoutOffset: {
                        x: 50,
                        y: 0
                    }
                },
                "create-first-server": {
                    popoutOffset: {
                        x: 45,
                        y: 0
                    }
                },
                "organize-by-topic": {
                    popoutOffset: {
                        x: 50,
                        y: 0
                    }
                },
                "instant-invite": {
                    prerequisites: ["organize-by-topic"],
                    popoutOffset: {
                        x: -10,
                        y: 0
                    }
                },
                "whos-online": {
                    prerequisites: ["instant-invite"],
                    popoutOffset: {
                        x: -50,
                        y: 0
                    }
                },
                "server-settings": {
                    prerequisites: ["instant-invite"],
                    popoutOffset: {
                        y: 32,
                        x: 0
                    }
                },
                "friends-list": {
                    prerequisites: ["instant-invite"],
                    popoutOffset: {
                        x: 45,
                        y: 0
                    }
                },
                "create-more-servers": {
                    prerequisites: ["server-settings"],
                    popoutOffset: {
                        x: 45,
                        y: 0
                    }
                }
            })
        },
        935692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a, s, l = n("446674"),
                i = n("913144");
            (a = s || (s = {})).FAILED = "failed", a.SUCCEEDED = "succeeded";
            let r = {};
            class o extends l.default.Store {
                getFollowerStatsForChannel(e) {
                    return r[e]
                }
            }
            o.displayName = "ChannelFollowerStatsStore";
            var u = new o(i.default, {
                CONNECTION_OPEN: function() {
                    r = {}
                },
                CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        stats: n
                    } = e;
                    n = null != n ? n : {}, r[t] = {
                        loadingStatus: s.SUCCEEDED,
                        lastFetched: Date.now(),
                        channelsFollowing: n.channels_following,
                        guildMembers: n.guild_members,
                        guildsFollowing: n.guilds_following,
                        usersSeenEver: n.users_seen_ever,
                        subscribersGainedSinceLastPost: n.subscribers_gained_since_last_post,
                        subscribersLostSinceLastPost: n.subscribers_lost_since_last_post
                    }
                },
                CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    r[t] = {
                        loadingStatus: s.FAILED,
                        lastFetched: Date.now(),
                        channelsFollowing: 0,
                        guildMembers: 0,
                        guildsFollowing: 0,
                        usersSeenEver: 0,
                        subscribersGainedSinceLastPost: 0,
                        subscribersLostSinceLastPost: 0
                    }
                }
            })
        },
        462495: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("446674"),
                s = n("913144"),
                l = n("377253");
            let i = Object.freeze([]),
                r = {},
                o = {},
                u = {},
                d = {},
                c = {};

            function f(e, t) {}

            function h() {
                c = {}
            }

            function C(e, t) {
                let n = r[e];
                return null != n && (r[e] = n.filter(e => e.id !== t), delete o[t], delete u[t], n.length !== r[e].length)
            }

            function E(e, t) {
                let n = r[e];
                if (null == n) return !1;
                r[e] = n.map(e => e.id === t.id ? {
                    ...e,
                    ...t
                } : e);
                let a = u[t.id];
                null != a && null != d[a.id] && (d[a.id] = {
                    ...d[a.id],
                    ...t
                })
            }
            class p extends a.default.Store {
                initialize() {
                    this.waitFor(l.default)
                }
                getFiles(e) {
                    var t;
                    return null !== (t = r[e]) && void 0 !== t ? t : i
                }
                getMessageForFile(e) {
                    return u[e]
                }
                getUploaderFileForMessageId(e) {
                    return d[e]
                }
                getUploadAttachments(e) {
                    if (null != e) return c[e]
                }
            }
            p.displayName = "UploadStore";
            var m = new p(s.default, {
                CONNECTION_OPEN: function() {
                    c = {}
                },
                LOGOUT: function() {
                    c = {}
                },
                UPLOAD_START: function(e) {
                    var t;
                    let {
                        channelId: n,
                        file: a,
                        uploader: s,
                        message: l
                    } = e;
                    if (s._aborted || s._errored) return;
                    let c = null !== (t = r[n]) && void 0 !== t ? t : i;
                    o[a.id] = s, r[n] = [...c, a], u[a.id] = l;
                    let {
                        items: f
                    } = a;
                    null != f && (d[l.id] = {
                        ...a,
                        items: f
                    }), l.nonce
                },
                UPLOAD_COMPRESSION_PROGRESS: function(e) {
                    let {
                        channelId: t,
                        file: n
                    } = e;
                    E(t, n)
                },
                UPLOAD_PROGRESS: function(e) {
                    let {
                        channelId: t,
                        file: n
                    } = e;
                    E(t, n)
                },
                UPLOAD_COMPLETE: function(e) {
                    let {
                        channelId: t,
                        file: n
                    } = e;
                    return C(t, n.id)
                },
                UPLOAD_FAIL: function(e) {
                    let {
                        channelId: t,
                        file: n
                    } = e;
                    return C(t, n.id)
                },
                UPLOAD_CANCEL_REQUEST: function(e) {
                    let {
                        file: t
                    } = e, n = o[t.id];
                    if (null == n) return !1;
                    setImmediate(() => {
                        var e;
                        return null === (e = n.cancel) || void 0 === e ? void 0 : e.call(n)
                    })
                },
                UPLOAD_ITEM_CANCEL_REQUEST: function(e) {
                    let {
                        file: t,
                        itemId: n
                    } = e, a = o[t.id];
                    if (null == a) return !1;
                    setImmediate(() => a.cancelItem(n))
                },
                UPLOAD_FILE_UPDATE: function(e) {
                    let {
                        channelId: t,
                        file: n
                    } = e, a = u[n.id];
                    null != a && a.nonce, E(t, n)
                },
                UPLOAD_RESTORE_FAILED_UPLOAD: function(e) {
                    let {
                        file: t,
                        messageId: n
                    } = e;
                    d[n] = t
                }
            })
        },
        332374: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MIN_CHAT_SIDEBAR_WIDTH: function() {
                    return a
                },
                shouldChannelChatFloat: function() {
                    return s
                }
            });
            let a = 450,
                s = e => {
                    let {
                        maxWidth: t
                    } = e;
                    return t <= a
                }
        },
        412861: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showUploadFileSizeExceededError: function() {
                    return S
                },
                promptToUpload: function() {
                    return A
                }
            });
            var a = n("255397"),
                s = n("81594"),
                l = n("783480"),
                i = n("336522"),
                r = n("966724"),
                o = n("716241"),
                u = n("191145"),
                d = n("585722"),
                c = n("697218"),
                f = n("599110"),
                h = n("254490"),
                C = n("719923"),
                E = n("834021"),
                p = n("49111"),
                m = n("894488"),
                g = n("646718"),
                _ = n("782340");

            function S(e, t) {
                let n = c.default.getCurrentUser(),
                    a = e.getGuildId(),
                    s = h.maxFileSize(a),
                    l = [],
                    r = 0,
                    u = 0,
                    d = 0,
                    f = [];
                for (let e of t) d += 1, r += e.size, l.push(e.size), e.size > u && (u = e.size), null != e.type ? f.push(e.type) : f.push("unknown");
                if (u > s) {
                    (0, o.trackWithMetadata)(p.AnalyticEvents.FILE_SIZE_LIMIT_EXCEEDED, {
                        channel_id: e.id,
                        guild_id: a,
                        user_individual_file_size_limit: s,
                        pre_compression_file_sizes: l,
                        pre_compression_aggregate_file_size: r,
                        num_attachments: d,
                        error_type: m.FileUploadErrorTypes.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
                        attachment_mimetypes: f
                    }), (0, i.openUploadError)({
                        title: _.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                        help: (0, E.getErrorHelp)(n, a),
                        showPremiumUpsell: !(0, C.isPremiumExactly)(n, g.PremiumTypes.TIER_2),
                        fileSize: u
                    });
                    return
                }(0, i.openUploadError)({
                    title: _.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: _.default.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
                        maxSize: h.sizeString(h.getMaxRequestSize())
                    })
                })
            }

            function A(e, t, n) {
                let {
                    requireConfirm: o = !0,
                    showLargeMessageDialog: c = !1,
                    isThumbnail: h = !1,
                    isClip: C = !1
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (e.length < 1) return;
                let m = t.getGuildId();
                if ((0, E.filesExceedUploadLimits)(e, m)) {
                    S(t, e);
                    return
                }
                if (d.default.getUploadCount(t.id, n) + e.length > p.MAX_UPLOAD_COUNT) {
                    (0, i.openUploadError)({
                        title: _.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
                        help: _.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
                            limit: p.MAX_UPLOAD_COUNT
                        })
                    }), f.default.track(p.AnalyticEvents.UPLOAD_FILE_LIMIT_ERROR, {
                        existing_count: d.default.getUploadCount(t.id, n),
                        new_count: e.length
                    });
                    return
                }
                if ((t.type === p.ChannelTypes.GUILD_VOICE || t.type === p.ChannelTypes.GUILD_STAGE_VOICE) && !u.default.getChatOpen(t.id) && a.default.updateChatOpen(t.id, !0), o) {
                    let a = Array.from(e).map(e => ({
                        file: e,
                        platform: r.UploadPlatform.WEB,
                        isThumbnail: h,
                        isClip: C
                    }));
                    s.default.addFiles({
                        files: a,
                        channelId: t.id,
                        showLargeMessageDialog: c,
                        draftType: n
                    })
                } else l.default.instantBatchUpload({
                    channelId: t.id,
                    files: e,
                    draftType: n,
                    isThumbnail: h,
                    isClip: C
                })
            }
        },
        834021: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getErrorHelp: function() {
                    return o
                },
                filesExceedUploadLimits: function() {
                    return u
                },
                getWebUploadFiles: function() {
                    return d
                }
            });
            var a = n("966724"),
                s = n("254490"),
                l = n("719923"),
                i = n("646718"),
                r = n("782340");

            function o(e, t) {
                let n = s.sizeString(s.maxFileSize(t));
                return l.default.isPremium(e, i.PremiumTypes.TIER_2) ? r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: n
                }) : l.default.isPremium(e, i.PremiumTypes.TIER_1) ? r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({
                    maxSize: n
                }) : r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: n
                })
            }

            function u(e, t) {
                return s.anyFileTooLarge(e, t) || s.uploadSumTooLarge(e)
            }

            function d(e) {
                return e.reduce((e, t) => (t.item.platform === a.UploadPlatform.WEB && e.push(t.item.file), e), [])
            }
        }
    }
]);
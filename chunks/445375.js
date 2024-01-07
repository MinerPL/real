            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Z
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                o = n("77078"),
                u = n("295426"),
                d = n("352674"),
                c = n("125667"),
                f = n("264732"),
                h = n("206230"),
                p = n("812204"),
                m = n("685665"),
                E = n("850391"),
                C = n("149022"),
                g = n("681060"),
                S = n("376215"),
                _ = n("172554"),
                I = n("699473"),
                T = n("328511"),
                v = n("467094"),
                x = n("845579"),
                N = n("42203"),
                A = n("474643"),
                M = n("377253"),
                R = n("957255"),
                j = n("585722"),
                L = n("476765"),
                O = n("945330"),
                y = n("745183"),
                b = n("959097"),
                P = n("664336"),
                D = n("378765"),
                U = n("718422"),
                w = n("412861"),
                F = n("910927"),
                k = n("730498"),
                V = n("24337"),
                B = n("967241"),
                H = n("517141"),
                G = n("49111"),
                W = n("782340"),
                Y = n("276159"),
                z = n("881812");
            let K = E.ChatInputTypes.THREAD_CREATION;

            function Z(e) {
                let {
                    parentChannelId: t,
                    parentMessageId: n,
                    location: l
                } = e, s = (0, r.useStateFromStores)([N.default], () => N.default.getChannel(t)), {
                    AnalyticsLocationProvider: i
                } = (0, m.default)(p.default.CREATE_THREAD);
                return null == s ? null : (0, a.jsx)(i, {
                    children: (0, a.jsx)(D.ComponentDispatchGroupProvider, {
                        children: (0, a.jsxs)("section", {
                            "aria-label": W.default.Messages.CREATE_THREAD,
                            className: Y.container,
                            children: [(0, a.jsx)(f.default, {
                                channel: s,
                                draftType: A.DraftType.FirstThreadMessage
                            }), (0, a.jsxs)(P.default, {
                                toolbar: (0, a.jsx)(P.default.Icon, {
                                    icon: O.default,
                                    tooltip: W.default.Messages.CLOSE,
                                    onClick: () => (0, B.closeAndClearThreadSidebar)(t)
                                }),
                                children: [(0, a.jsx)(P.default.Icon, {
                                    icon: b.default,
                                    disabled: !0,
                                    "aria-label": W.default.Messages.THREAD
                                }), (0, a.jsx)(P.default.Title, {
                                    children: W.default.Messages.NEW_THREAD
                                })]
                            }), (0, a.jsx)(X, {
                                parentChannel: s,
                                parentMessageId: n,
                                location: l
                            })]
                        })
                    })
                })
            }

            function X(e) {
                let {
                    parentChannel: t,
                    parentMessageId: n,
                    location: s
                } = e, d = (0, r.useStateFromStores)([h.default], () => h.default.messageGroupSpacing), f = function() {
                    let e = l.useContext(D.ComponentDispatchGroupContext);
                    return l.useCallback(() => {
                        e.bumpDispatchPriority()
                    }, [e])
                }(), {
                    threadSettings: p,
                    setThreadSettings: m,
                    updateThreadSettings: E
                } = function(e, t) {
                    let [n, a] = l.useState({}), s = l.useCallback(n => {
                        a(e => ({
                            ...e,
                            ...n
                        })), u.default.changeThreadSettings(e.id, {
                            ...n,
                            parentMessageId: t
                        })
                    }, [e.id, t]);
                    return {
                        threadSettings: n,
                        setThreadSettings: a,
                        updateThreadSettings: s
                    }
                }(t, n), {
                    textAreaState: g,
                    setTextAreaState: S
                } = function(e, t) {
                    let [n, a] = l.useState((0, C.createEmptyState)());
                    return l.useEffect(() => {
                        function n(n) {
                            var l;
                            let s = A.default.getDraft(e.id, A.DraftType.FirstThreadMessage);
                            (0 === s.length || !0 === n) && a((0, C.createState)(s)), t(null !== (l = A.default.getThreadSettings(e.id)) && void 0 !== l ? l : {})
                        }
                        return n(!0), A.default.addChangeListener(n), () => {
                            A.default.removeChangeListener(n)
                        }
                    }, [e.id, t]), {
                        textAreaState: n,
                        setTextAreaState: a
                    }
                }(t, m), I = (0, k.usePrivateThreadMode)(t), {
                    nameError: x,
                    messageError: N,
                    submit: M
                } = function(e) {
                    let {
                        parentChannel: t,
                        parentMessageId: n,
                        threadSettings: a,
                        privateThreadMode: s,
                        textAreaState: i,
                        location: r
                    } = e, [o, u] = l.useState(null), [d, c] = l.useState(null), f = (0, H.default)({
                        parentChannel: t,
                        parentMessageId: n,
                        threadSettings: a,
                        privateThreadMode: s,
                        location: r,
                        onThreadCreated: B.openThreadSidebarForViewing,
                        useDefaultThreadName: !0
                    }), h = l.useCallback(async (e, l, s) => {
                        var r, o, d;
                        null == e && (e = i.textValue), e = e.trim(), (null == l || 0 === l.length) && (l = null === (r = T.default.getStickerPreview(t.id, K.drafts.type)) || void 0 === r ? void 0 : r.map(e => e.id)), (null == s || 0 === s.length) && (s = j.default.getUploads(t.id, A.DraftType.FirstThreadMessage));
                        let h = null !== (o = a.name) && void 0 !== o ? o : "",
                            p = null == n && 0 === h.length,
                            m = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (u(p ? (0, F.makeEmptyTitleError)() : null), c(m ? (0, F.makeEmptyMessageError)() : null), p || m) return {
                            shouldClear: !1,
                            shouldRefocus: !0
                        };
                        if (null == n) {
                            let {
                                valid: n
                            } = await (0, U.applyChatRestrictions)({
                                content: e,
                                stickers: l,
                                uploads: s,
                                type: K,
                                channel: t
                            });
                            if (!n) return {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        }
                        try {
                            await f(e, l, s)
                        } catch (e) {
                            return (null === (d = e.body) || void 0 === d ? void 0 : d.code) === G.AbortCodes.AUTOMOD_TITLE_BLOCKED && u((0, F.makeAutomodViolationError)(e.body, t)), {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        }
                        return (0, v.clearStickerPreview)(t.id, K.drafts.type), {
                            shouldClear: !0,
                            shouldRefocus: !1
                        }
                    }, [f, i.textValue, a.name, n, t]);
                    return {
                        nameError: o,
                        messageError: d,
                        submit: h
                    }
                }({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: p,
                    privateThreadMode: I,
                    textAreaState: g,
                    location: s
                }), R = (0, k.getIsPrivate)(p, I) ? y.default : b.default;
                return (0, a.jsx)("div", {
                    className: Y.chat,
                    onMouseDown: f,
                    onFocus: f,
                    children: (0, a.jsx)("div", {
                        className: i(Y.messagesWrapper, "group-spacing-".concat(d)),
                        children: (0, a.jsxs)("form", {
                            onSubmit: e => {
                                e.preventDefault(), M()
                            },
                            className: Y.form,
                            children: [(0, a.jsx)(o.Scroller, {
                                className: Y.scroller,
                                fade: !0,
                                children: (0, a.jsxs)("div", {
                                    className: Y.scrollerInner,
                                    children: [(0, a.jsxs)(_.default, {
                                        channelId: "create-thread-null",
                                        children: [(0, a.jsx)("div", {
                                            className: z.iconWrapper,
                                            children: (0, a.jsx)(R, {
                                                className: z.icon
                                            })
                                        }), (0, a.jsx)(q, {
                                            parentChannel: t,
                                            parentMessageId: n,
                                            threadSettings: p,
                                            updateThreadSettings: E,
                                            error: x
                                        }), t.type === G.ChannelTypes.GUILD_TEXT ? (0, a.jsx)(J, {
                                            startedFromMessage: null != n,
                                            threadSettings: p,
                                            updateThreadSettings: E,
                                            privateThreadMode: I
                                        }) : null]
                                    }), (0, a.jsx)($, {
                                        parentChannel: t,
                                        parentMessageId: n
                                    })]
                                })
                            }), (0, a.jsxs)("div", {
                                className: Y.submitContainer,
                                children: [(0, a.jsx)(Q, {
                                    parentChannel: t,
                                    textAreaState: g,
                                    setTextAreaState: S,
                                    submit: M,
                                    error: N
                                }), (0, a.jsx)(c.default, {
                                    channel: t,
                                    isThreadCreation: !0
                                })]
                            })]
                        })
                    })
                })
            }

            function J(e) {
                let {
                    startedFromMessage: t,
                    threadSettings: n,
                    updateThreadSettings: l,
                    privateThreadMode: s
                } = e, r = (0, k.getIsPrivate)(n, s), u = (0, a.jsx)("div", {
                    className: Y.privateThreadFormTitle,
                    children: (0, a.jsx)("span", {
                        className: Y.privateThreadFormTitleText,
                        children: W.default.Messages.PRIVATE_THREAD
                    })
                }), d = (0, a.jsx)(o.Checkbox, {
                    className: i(Y.checkbox),
                    type: o.Checkbox.Types.INVERTED,
                    disabled: s === k.PrivateThreadMode.PrivateOnly,
                    value: r,
                    onChange: (e, t) => l({
                        isPrivate: t
                    }),
                    children: (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "none",
                        children: W.default.Messages.FORM_THREAD_PRIVATE_THREAD_SECTION_LABEL
                    })
                });
                return t || s === k.PrivateThreadMode.Disabled ? null : (0, a.jsxs)(o.FormSection, {
                    title: u,
                    className: Y.formSection,
                    children: [d, r ? (0, a.jsx)(o.Text, {
                        className: Y.privateThreadDescription,
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: W.default.Messages.FORM_THREAD_PRIVATE_THREAD_DESCRIPTION
                    }) : null]
                })
            }

            function q(e) {
                var t;
                let {
                    parentChannel: n,
                    parentMessageId: l,
                    threadSettings: s,
                    updateThreadSettings: i,
                    error: r
                } = e, u = null !== (t = s.name) && void 0 !== t ? t : "", c = (0, F.renderError)(r, {
                    content: u
                }), f = (0, k.getDefaultThreadName)(n, l), h = null != l, p = (0, L.useUID)();
                return (0, a.jsx)(o.FormSection, {
                    tag: "label",
                    htmlFor: p,
                    title: W.default.Messages.THREAD_NAME + (h ? " (Optional)" : ""),
                    className: Y.formSection,
                    children: (0, a.jsx)(o.TextInput, {
                        value: u,
                        id: p,
                        placeholder: "" !== f ? f : W.default.Messages.FORM_THREAD_NAME_PLACEHOLDER,
                        maxLength: G.MAX_CHANNEL_NAME_LENGTH,
                        onChange: e => {
                            i({
                                name: (0, V.default)(e, !1)
                            }), "" !== e ? d.default.startTyping(n.id) : d.default.stopTyping(n.id)
                        },
                        onBlur: () => {
                            let e = (0, V.default)(u, !0);
                            e !== u && i({
                                name: e
                            })
                        },
                        error: c
                    })
                })
            }

            function Q(e) {
                let {
                    parentChannel: t,
                    textAreaState: n,
                    setTextAreaState: s,
                    submit: c,
                    error: f
                } = e, [h, p] = l.useState(!0), m = l.useCallback(() => p(!0), []), E = l.useCallback(() => p(!1), []), C = l.useCallback((e, n, a) => {
                    u.default.saveDraft(t.id, n, A.DraftType.FirstThreadMessage), s(e => ("" !== n && e.textValue !== n ? d.default.startTyping(t.id) : "" === n && d.default.stopTyping(t.id), {
                        textValue: n,
                        richValue: a
                    }))
                }, [t.id, s]), _ = l.useCallback(e => {
                    let {
                        value: t,
                        uploads: n,
                        stickers: a
                    } = e;
                    return c(t, a, n)
                }, [c]);
                (0, D.useComponentAction)({
                    event: G.ComponentActions.TEXTAREA_FOCUS,
                    handler: m
                }), (0, D.useComponentAction)({
                    event: G.ComponentActions.TEXTAREA_BLUR,
                    handler: E
                });
                let I = (0, r.useStateFromStores)([R.default], () => R.default.can(G.Permissions.ATTACH_FILES, t)),
                    T = (0, F.renderError)(f, {
                        content: n.textValue
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(S.default, {
                        channelId: t.id,
                        type: K,
                        canAttachFiles: I
                    }), (0, a.jsx)("div", {
                        className: Y.starterMessageError,
                        children: (0, a.jsx)(o.InputError, {
                            error: T
                        })
                    }), (0, a.jsx)(g.default, {
                        type: K,
                        channel: t,
                        placeholder: W.default.Messages.FORM_THREAD_STARTER_MESSAGE_PLACEHOLDER,
                        textValue: n.textValue,
                        richValue: n.richValue,
                        focused: h,
                        className: Y.channelTextArea,
                        innerClassName: i(Y.channelTextAreaInner, {
                            [Y.channelTextAreaInnerError]: null != T
                        }),
                        onFocus: m,
                        onBlur: E,
                        onChange: C,
                        onSubmit: _,
                        promptToUpload: w.promptToUpload
                    })]
                })
            }

            function $(e) {
                let {
                    parentChannel: t,
                    parentMessageId: n
                } = e, l = (0, r.useStateFromStores)([M.default], () => null == n ? null : M.default.getMessage(t.id, n)), s = x.MessageDisplayCompact.useSetting();
                return null != l ? (0, a.jsx)(I.default, {
                    className: Y.messagePreview,
                    message: l,
                    channel: t,
                    compact: s,
                    renderThreadAccessory: !1,
                    trackAnnouncementViews: !0
                }) : null
            }
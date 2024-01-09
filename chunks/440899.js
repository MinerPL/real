            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ea
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                s = n.n(l),
                o = n("627445"),
                r = n.n(o),
                d = n("446674"),
                u = n("77078"),
                c = n("272030"),
                f = n("295426"),
                h = n("819689"),
                p = n("539405"),
                g = n("352674"),
                m = n("125667"),
                E = n("767993"),
                S = n("738073"),
                v = n("685888"),
                y = n("533466"),
                C = n("710216"),
                N = n("348652"),
                O = n("306588"),
                T = n("850391"),
                I = n("149022"),
                _ = n("228800"),
                A = n("681060"),
                x = n("884351"),
                R = n("818950"),
                M = n("529805"),
                L = n("685841"),
                D = n("42203"),
                j = n("474643"),
                w = n("247013"),
                k = n("305961"),
                b = n("377253"),
                P = n("18494"),
                V = n("162771"),
                U = n("697218"),
                B = n("227602"),
                H = n("901165"),
                F = n("959479"),
                G = n("62843"),
                W = n("560995"),
                Y = n("659500"),
                z = n("718422"),
                K = n("13798"),
                Z = n("117026"),
                X = n("880584"),
                J = n("839878"),
                Q = n("6791"),
                q = n("49111"),
                $ = n("782340"),
                ee = n("126419");
            let et = Q.OpacityBounds.TOP;
            class en extends a.Component {
                componentDidUpdate(e) {
                    e.channel.id !== this.props.channel.id && this.draftDidChange(this.props), (this.props.channel !== e.channel || this.props.isTemporarilyActive && !e.isTemporarilyActive) && this.setState({
                        focused: !0
                    })
                }
                componentWillUnmount() {
                    j.default.removeChangeListener(this.draftDidChange), Y.ComponentDispatch.unsubscribe(q.ComponentActions.TEXTAREA_FOCUS, this.focusInput), Y.ComponentDispatch.unsubscribe(q.ComponentActions.TEXTAREA_BLUR, this.blurInput)
                }
                render() {
                    let {
                        channel: e,
                        placeholder: t,
                        ...n
                    } = this.props, {
                        focused: a,
                        textValue: l,
                        contentWarningProps: s,
                        richValue: o
                    } = this.state, d = (0, i.jsx)(u.Popout, {
                        position: "top",
                        onRequestClose: () => {
                            var e;
                            null == s || null === (e = s.onCancel) || void 0 === e || e.call(s), this.setState({
                                contentWarningProps: null
                            })
                        },
                        shouldShow: null != s,
                        renderPopout: e => {
                            let {
                                closePopout: t
                            } = e;
                            return r(null != s, "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null"), (0, i.jsx)(E.default, {
                                onClose: t,
                                ...s
                            })
                        },
                        children: () => (0, i.jsx)(A.default, {
                            ...n,
                            renderAttachButton: this.renderAttachButton,
                            channel: e,
                            type: T.ChatInputTypes.OVERLAY,
                            onFocus: () => this.setState({
                                focused: !0
                            }),
                            onBlur: () => this.setState({
                                focused: !1
                            }),
                            placeholder: t,
                            textValue: l,
                            richValue: o,
                            onSubmit: this.handleSendMessage,
                            onChange: this.handleTextareaChange,
                            onKeyDown: this.handleTextareaKeyDown,
                            focused: a
                        })
                    });
                    return e.isPrivate() ? (0, i.jsx)(N.default, {
                        channel: e,
                        children: d
                    }, e.id) : (0, i.jsx)(O.default, {
                        channel: e,
                        children: d
                    }, e.id)
                }
                constructor(e) {
                    var t;
                    super(e), t = this, this.draftDidChange = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                            {
                                textValue: n
                            } = t.state,
                            i = j.default.getDraft(e.channel.id, j.DraftType.ChannelMessage);
                        n !== i && "" === i && t.setState((0, I.createState)(i))
                    }, this.handleTextareaKeyDown = e => {
                        if (e.which === q.KeyboardKeys.ARROW_UP && !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey && 0 === this.state.textValue.length) {
                            e.preventDefault();
                            let {
                                channel: t
                            } = this.props, n = b.default.getLastEditableMessage(t.id);
                            null != n && h.default.startEditMessage(t.id, n.id, n.content)
                        }
                    }, this.handleTextareaChange = (e, t, n) => {
                        let {
                            channel: {
                                id: i
                            }
                        } = this.props;
                        f.default.changeDraft(i, this.state.textValue, j.DraftType.ChannelMessage), "" !== t ? g.default.startTyping(i) : g.default.stopTyping(i), this.setState({
                            textValue: t,
                            richValue: n
                        })
                    }, this.handleSendMessage = e => {
                        let {
                            value: t
                        } = e, {
                            channel: n,
                            pendingReply: i,
                            isTemporarilyActive: a
                        } = this.props;
                        return 0 === t.length ? Promise.resolve({
                            shouldClear: !1,
                            shouldRefocus: !0
                        }) : (0, z.applyChatRestrictions)({
                            openWarningPopout: e => this.setState({
                                contentWarningProps: e
                            }),
                            type: T.ChatInputTypes.OVERLAY,
                            content: t,
                            channel: n
                        }).then(e => {
                            let {
                                valid: l,
                                failureReason: s
                            } = e;
                            if (!l) return s === q.MessageRestrictionTypes.SLOWMODE_COOLDOWN ? (Y.ComponentDispatch.dispatch(q.ComponentActions.EMPHASIZE_SLOWMODE_COOLDOWN), {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }) : {
                                shouldClear: !1,
                                shouldRefocus: !1
                            };
                            let o = h.default.getSendMessageOptionsForReply(i);
                            return (h.default.sendMessage(n.id, x.default.parse(n, t), !0, o), this.setState((0, I.createEmptyState)()), (0, M.deletePendingReply)(n.id), a) ? (p.default.deactivateAllRegions(), {
                                shouldClear: !1,
                                shouldRefocus: !1
                            }) : {
                                shouldClear: !0,
                                shouldRefocus: !0
                            }
                        })
                    }, this.focusInput = () => {
                        this.setState({
                            focused: !0
                        })
                    }, this.blurInput = () => {
                        this.setState({
                            focused: !1
                        })
                    }, this.renderAttachButton = (e, t) => (0, i.jsx)(_.default, {
                        className: t,
                        channel: this.props.channel,
                        draftType: j.DraftType.ChannelMessage,
                        editorTextContent: this.state.textValue,
                        setValue: e => this.handleTextareaChange(null, e, (0, I.toRichValue)(e)),
                        canOnlyUseTextCommands: e
                    }), j.default.addChangeListener(this.draftDidChange);
                    let n = j.default.getDraft(e.channel.id, j.DraftType.ChannelMessage);
                    this.state = {
                        ...(0, I.createState)(n),
                        focused: !1,
                        contentWarningProps: null
                    }, Y.ComponentDispatch.subscribe(q.ComponentActions.TEXTAREA_FOCUS, this.focusInput), Y.ComponentDispatch.subscribe(q.ComponentActions.TEXTAREA_BLUR, this.blurInput)
                }
            }
            class ei extends a.PureComponent {
                componentDidUpdate(e) {
                    let {
                        channel: t,
                        activated: n
                    } = this.props;
                    (0, X.dispatchOverlayWidgetIfChanged)(e, this.props, this.shouldDisplay), null != t && n && !e.activated && p.default.track(q.AnalyticEvents.OVERLAY_UNLOCKED, {
                        channel_id: t.id,
                        channel_type: t.type,
                        guild_id: t.guild_id
                    })
                }
                componentDidMount() {
                    (0, X.dispatchOverlayWidgetChanged)(this.props, this.shouldDisplay())
                }
                getOpacity() {
                    let e;
                    let {
                        locked: t,
                        activated: n,
                        opacity: i,
                        isPreviewingInGame: a
                    } = this.props;
                    return e = t && !n || a ? i / 100 : n || !t ? Math.min(1, (i + 25) / 100) : W.DEFAULT_OPACITY
                }
                renderContent() {
                    let e;
                    let {
                        channel: t,
                        placeholder: n,
                        nsfwAgree: l,
                        guild: o,
                        locked: r,
                        activated: d,
                        chatKeybind: u,
                        pinned: c,
                        isPreviewingInGame: f,
                        dragging: h,
                        pendingReply: p
                    } = this.props;
                    if (null == t) return null;
                    let g = r || f,
                        E = !l && null != t && t.isNSFW(),
                        v = !g || d;
                    return e = E && null != o ? (0, i.jsx)(S.default, {
                        guild: o
                    }) : (0, i.jsx)(R.default, {
                        channel: t,
                        className: ee.messages,
                        forceCompact: c,
                        showNewMessagesBar: !g,
                        scrollerClassName: c ? ee.scroller : void 0,
                        showingQuarantineBanner: !1
                    }, t.id), (0, i.jsx)(G.MessagesInteractionContext.Provider, {
                        value: {
                            disableInteractions: c && r && !d,
                            disableAnimations: c && g && !d
                        },
                        children: (0, i.jsxs)(a.Fragment, {
                            children: [!r && !f && (0, i.jsx)(C.default, {
                                channel: t,
                                guild: o
                            }), (0, i.jsx)(W.default.Background, {
                                opacityOverride: r || f ? null : et,
                                children: (0, i.jsx)("div", {
                                    className: s(ee.messagesContainer, {
                                        [ee.isDragging]: h,
                                        [ee.disableHoverStates]: c && r && !d
                                    }),
                                    children: e
                                })
                            }), E ? null : (0, i.jsx)("div", {
                                children: v ? (0, i.jsx)(W.default.Background, {
                                    opacityOverride: r || f ? null : et,
                                    children: (0, i.jsxs)("div", {
                                        className: ee.footerContent,
                                        children: [(0, i.jsx)(en, {
                                            channel: t,
                                            placeholder: n,
                                            isTemporarilyActive: d,
                                            pendingReply: p
                                        }), (0, i.jsx)("div", {
                                            className: ee.typingWrapper,
                                            children: (0, i.jsx)(m.default, {
                                                channel: t,
                                                className: ee.typing
                                            })
                                        })]
                                    })
                                }) : (0, i.jsx)("div", {
                                    className: ee.activateContainer,
                                    children: (0, i.jsx)(W.default.Background, {
                                        opacityOverride: Q.OpacityBounds.LOWER,
                                        children: (0, i.jsx)("div", {
                                            className: s(ee.activateKeybind, ee.mediumBackgroundOpacity),
                                            children: null != t.name && t.name.length > 0 ? $.default.Messages.OVERLAY_CHANNEL_CHAT_HOTKEY.format({
                                                keybind: u,
                                                channelName: t.isMultiUserDM() ? t.name : "#".concat(t.name)
                                            }) : $.default.Messages.OVERLAY_USER_CHAT_HOTKEY.format({
                                                keybind: u
                                            })
                                        })
                                    })
                                })
                            })]
                        })
                    })
                }
                renderWidgetWrapper(e) {
                    let {
                        locked: t,
                        pinned: n,
                        activated: a,
                        isPreviewingInGame: l,
                        opacity: o
                    } = this.props, r = q.OverlayWidgetTypes.UNPINNED;
                    a ? r = q.OverlayWidgetTypes.IN_GAME_ACTIVE : n && t || l ? r = q.OverlayWidgetTypes.IN_GAME_TEXT : n && (r = q.OverlayWidgetTypes.PINNED);
                    let d = t && !a || l,
                        u = n && (d || a),
                        c = n && a,
                        f = n && d && !a,
                        h = (0, Z.default)(o);
                    return (0, i.jsx)(W.default, {
                        className: s(h, {
                            [ee.widgetWrapper]: !n,
                            [ee.widgetWrapperPinned]: n,
                            [ee.locked]: f,
                            [ee.inGame]: u,
                            [ee.inGameActive]: c,
                            [ee.pinned]: n,
                            "overlay-unlocked": !t
                        }),
                        type: r,
                        opacity: o,
                        children: e
                    })
                }
                renderContainedWrapper(e) {
                    return (0, i.jsx)("div", {
                        className: ee.contained,
                        children: e
                    })
                }
                shouldDisplay() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                    return null != e.channel
                }
                render() {
                    let {
                        locked: e,
                        channel: t,
                        pinned: n,
                        isPreviewingInGame: l,
                        contained: s
                    } = this.props;
                    if (null == t || !this.shouldDisplay()) return null;
                    let o = (0, i.jsxs)(a.Fragment, {
                        children: [(0, i.jsx)(J.default, {
                            draggableClassName: ee.draggableStartArea,
                            className: ee.headerDefault,
                            channel: t,
                            locked: e,
                            pinned: n,
                            disableDragIndicator: s,
                            isPreviewingInGame: l,
                            handlePin: this.handlePin,
                            onContextMenu: this.handleContextMenu,
                            onMouseDown: this.moveDragStart
                        }), this.renderContent(), e || l ? null : (0, i.jsx)("div", {
                            className: ee.resizeIcon,
                            onMouseDown: this.resizeDragStart
                        })]
                    });
                    return s ? this.renderContainedWrapper(o) : this.renderWidgetWrapper(o)
                }
                constructor(...e) {
                    super(...e), this.handlePin = () => {
                        var e, t, n;
                        let i = !this.props.pinned;
                        p.default.track(q.AnalyticEvents.OVERLAY_PIN_TOGGLED, {
                            pinned: i,
                            guild_id: null === (e = this.props.channel) || void 0 === e ? void 0 : e.guild_id,
                            channel_id: null === (t = this.props.channel) || void 0 === t ? void 0 : t.id,
                            channel_type: null === (n = this.props.channel) || void 0 === n ? void 0 : n.type,
                            widget_type: q.OverlayWidgets.TEXT
                        }), p.default.setPinChat(i)
                    }, this.handleContextMenu = e => {
                        let {
                            channel: t,
                            user: a
                        } = this.props;
                        null != t && null != a && (0, c.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("130074").then(n.bind(n, "130074"));
                            return n => (0, i.jsx)(e, {
                                ...n,
                                user: a,
                                channelSelected: !0,
                                channel: t
                            })
                        })
                    }, this.moveDragStart = e => {
                        let {
                            dragStart: t
                        } = this.props;
                        t(F.Operations.MOVE, e.clientX, e.clientY)
                    }, this.resizeDragStart = e => {
                        let {
                            dragStart: t
                        } = this.props;
                        t(F.Operations.RESIZE_SOUTH_EAST, e.clientX, e.clientY)
                    }
                }
            }

            function ea(e) {
                let {
                    contained: t = !1,
                    ...n
                } = e, a = (0, d.useStateFromStores)([V.default], () => V.default.getGuildId()), l = (0, d.useStateFromStores)([P.default], () => P.default.getChannelId(a)), s = (0, d.useStateFromStores)([D.default], () => D.default.getChannel(l)), o = (0, d.useStateFromStores)([B.default], () => B.default.getOverlayChatKeybind()), r = null != o ? (0, K.toString)(o.shortcut, !0) : "]", [u, c, f] = (0, d.useStateFromStoresArray)([H.default], () => [H.default.getTextWidgetOpacity(), H.default.getActiveRegions(), !t && H.default.isPreviewingInGame()]), h = (0, d.useStateFromStores)([k.default], () => k.default.getGuild(a)), p = (0, d.useStateFromStores)([w.default], () => null != a && w.default.didAgree(a)), g = null != s && s.isPrivate() ? s.getRecipientId() : null, m = (0, d.useStateFromStores)([L.default], () => null != l ? L.default.getPendingReply(l) : void 0), E = (0, d.useStateFromStores)([U.default], () => null != g ? U.default.getUser(g) : null), {
                    placeholder: S
                } = (0, v.default)(s);
                return null != s && null != h && q.ChannelTypesSets.GUILD_THREADS_ONLY.has(s.type) ? (0, i.jsx)(y.default, {}) : (0, i.jsx)(ei, {
                    guild: h,
                    channel: s,
                    user: E,
                    opacity: u,
                    nsfwAgree: p,
                    chatKeybind: r,
                    activated: c.has(q.OverlayActiveRegions.TEXT_WIDGET),
                    isPreviewingInGame: f,
                    pendingReply: m,
                    contained: t,
                    placeholder: S,
                    widget: q.OverlayWidgets.TEXT,
                    ...n
                })
            }
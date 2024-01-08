            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ej
                }
            }), n("222007");
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
                p = n("81594"),
                m = n("783480"),
                E = n("125667"),
                g = n("901582"),
                S = n("767993"),
                A = n("180748"),
                _ = n("206230"),
                T = n("716241"),
                M = n("507217"),
                I = n("118200"),
                N = n("240249"),
                v = n("524768"),
                L = n("389153"),
                x = n("916565"),
                R = n("850391"),
                y = n("149022"),
                D = n("159492"),
                O = n("998415"),
                j = n("228800"),
                P = n("681060"),
                b = n("939563"),
                F = n("538282"),
                U = n("956967"),
                H = n("952104"),
                k = n("509"),
                G = n("406043"),
                w = n("68895"),
                B = n("934288"),
                V = n("87635"),
                W = n("734570"),
                Z = n("884351"),
                z = n("818950"),
                K = n("28007"),
                Y = n("880731"),
                q = n("943551"),
                X = n("667137"),
                Q = n("445499"),
                J = n("319939"),
                $ = n("529805"),
                ee = n("685841"),
                et = n("467094"),
                en = n("12896"),
                ea = n("271938"),
                es = n("982108"),
                el = n("474643"),
                ei = n("836417"),
                er = n("26989"),
                eo = n("377253"),
                eu = n("957255"),
                ed = n("18494"),
                ec = n("585722"),
                ef = n("697218"),
                eh = n("659186"),
                eC = n("599110"),
                ep = n("378765"),
                em = n("659500"),
                eE = n("718422"),
                eg = n("563680"),
                eS = n("412861"),
                eA = n("834021"),
                e_ = n("685888"),
                eT = n("710216"),
                eM = n("348652"),
                eI = n("306588"),
                eN = n("49111"),
                ev = n("782340"),
                eL = n("305794");

            function ex(e) {
                e.preventDefault()
            }
            let eR = /^\+(?!\w+):?(?!:)(\w+)?:?$/;

            function ey(e) {
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
            class eD extends s.PureComponent {
                componentDidMount() {
                    el.default.addChangeListener(this.draftDidChange)
                }
                componentWillUnmount() {
                    el.default.removeChangeListener(this.draftDidChange)
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
                        let e = el.default.getDraft(n.id, el.DraftType.ChannelMessage);
                        e !== a && this.setState((0, y.createState)(e))
                    }
                    t.textValue.length < eN.MAX_MESSAGE_LENGTH && a.length >= eN.MAX_MESSAGE_LENGTH && eC.default.track(eN.AnalyticEvents.MESSAGE_LENGTH_LIMIT_REACHED, {})
                }
                handleEditLastMessage(e) {
                    let {
                        channel: t
                    } = this.props;
                    h.default.startEditMessage(t.id, e.id, e.content), T.default.trackWithMetadata(eN.AnalyticEvents.MESSAGE_EDIT_UP_ARROW)
                }
                handleRecallLastCommand(e) {
                    if (null == e.interactionData) return;
                    let {
                        channel: t
                    } = this.props, {
                        commandKey: n,
                        interactionOptions: a
                    } = (0, L.extractInteractionDataProps)(e.interactionData), {
                        command: s,
                        application: l
                    } = N.getCachedCommand(t, n);
                    if (null != s) {
                        var i, r;
                        let e = null != l ? {
                            type: v.ApplicationCommandSectionType.APPLICATION,
                            id: l.id,
                            icon: null !== (r = null == l ? void 0 : null === (i = l.bot) || void 0 === i ? void 0 : i.username) && void 0 !== r ? r : l.icon,
                            name: l.name,
                            application: l
                        } : null;
                        M.setActiveCommand({
                            channelId: t.id,
                            command: s,
                            section: e,
                            location: v.ApplicationCommandTriggerLocations.RECALL,
                            initialValues: (0, I.getInitialValuesFromInteractionOptions)(s, null != a ? a : [])
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
                        contentWarningProps: p
                    } = this.state, m = (0, a.jsx)(P.default, {
                        textValue: this.state.textValue,
                        richValue: this.state.richValue,
                        focused: t,
                        className: eL.channelTextArea,
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
                        renderAppLauncherButton: this.renderAppLauncherButton,
                        renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                        promptToUpload: eS.promptToUpload,
                        highlighted: r,
                        setEditorRef: e => this.editorRef = e
                    });
                    return (0, a.jsx)(c.Popout, {
                        position: "top",
                        onRequestClose: () => {
                            var e;
                            null == p || null === (e = p.onCancel) || void 0 === e || e.call(p), this.setState({
                                contentWarningProps: null
                            })
                        },
                        shouldShow: null != p,
                        renderPopout: e => {
                            let {
                                closePopout: t
                            } = e;
                            return i(null != p, "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"), (0, a.jsx)(S.default, {
                                onClose: t,
                                ...p
                            })
                        },
                        children: () => C ? (0, a.jsx)(c.Shaker, {
                            isShaking: h > 0,
                            intensity: h,
                            children: m
                        }) : m
                    })
                }
                constructor(...e) {
                    var t;
                    super(...e), t = this, this.isFirstChange = !0, this.editorRef = null, this.state = {
                        ...(0, y.createState)(el.default.getDraft(this.props.channel.id, el.DraftType.ChannelMessage)),
                        contentWarningProps: null
                    }, this.draftDidChange = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                            {
                                textValue: n
                            } = t.state,
                            a = el.default.getDraft(e.channel.id, el.DraftType.ChannelMessage);
                        n !== a && ("" === a || "" === n) && t.setState((0, y.createState)(a), () => {
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
                            case eN.KeyboardKeys.DELETE:
                            case eN.KeyboardKeys.BACKSPACE:
                                this.handleIncrementCombo("", 1);
                                return;
                            case eN.KeyboardKeys.ARROW_UP:
                                if (s || l) return;
                                if (e.preventDefault(), t) ec.default.getUploadCount(a.id, el.DraftType.ChannelMessage) > 0 ? em.ComponentDispatch.dispatchToLastSubscribed(eN.ComponentActions.FOCUS_ATTACHMENT_AREA) : em.ComponentDispatch.dispatchToLastSubscribed(eN.ComponentActions.FOCUS_MESSAGES, {
                                    atEnd: !0
                                });
                                else {
                                    let {
                                        channel: e
                                    } = this.props, t = eo.default.getLastCommandMessage(e.id), n = eo.default.getLastEditableMessage(e.id);
                                    null != t && null != n ? u.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n)
                                }
                                return;
                            case eN.KeyboardKeys.ESCAPE:
                                if (s || e.target !== e.currentTarget) return;
                                if (e.preventDefault(), t) {
                                    (0, A.disableKeyboardMode)();
                                    return
                                }
                                if (ec.default.getUploadCount(a.id, el.DraftType.ChannelMessage) > 0) {
                                    p.default.clearAll(a.id, el.DraftType.ChannelMessage);
                                    return
                                }
                        }
                        null == n || n(e, l)
                    }, this.handleIncrementCombo = (e, t) => {
                        var n;
                        if (!this.props.poggermodeEnabled) return;
                        let a = this.props.channel.id,
                            s = ea.default.getId(),
                            l = q.default.getUserCombo(s, a),
                            i = (null !== (n = null == l ? void 0 : l.value) && void 0 !== n ? n : 0) + 1;
                        (0, K.updateCombo)({
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
                        f.default.changeDraft(s, t, el.DraftType.ChannelMessage);
                        let l = "" !== t && n !== this.state.richValue,
                            i = l && !eR.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
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
                            if (s.inputType === v.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return em.ComponentDispatch.dispatch(eN.ComponentActions.SHAKE_APP, {
                                duration: 200,
                                intensity: 2
                            }), Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                            let e = await (0, x.default)({
                                command: s,
                                optionValues: null != l ? l : {},
                                context: {
                                    guild: r,
                                    channel: o
                                }
                            });
                            if (s.inputType !== v.ApplicationCommandInputType.BUILT_IN_TEXT) return Promise.resolve({
                                shouldClear: !0,
                                shouldRefocus: !0
                            });
                            null != e && (t = null != e.content && "" !== e.content ? e.content : t, c = !0 === e.tts)
                        }
                        return (0, eE.applyChatRestrictions)({
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
                            if (!s) return l === eN.MessageRestrictionTypes.SLOWMODE_COOLDOWN ? (em.ComponentDispatch.dispatch(eN.ComponentActions.SHAKE_APP, {
                                duration: 200,
                                intensity: 2
                            }), em.ComponentDispatch.dispatch(eN.ComponentActions.EMPHASIZE_SLOWMODE_COOLDOWN), {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }) : {
                                shouldClear: !1,
                                shouldRefocus: !1
                            };
                            let f = (0, W.handleLegacyCommands)(t, {
                                channel: o,
                                isEdit: !1
                            });
                            null != f && (null != f.content && (t = f.content), null != f.tts && (c = f.tts));
                            let C = Z.default.parse(o, t);
                            C.tts = C.tts || c;
                            let E = h.default.getSendMessageOptionsForReply(u);
                            if (i) return h.default.sendMessage(o.id, C, void 0, E), (0, $.deletePendingReply)(o.id), {
                                shouldClear: !1,
                                shouldRefocus: !0
                            };
                            if (null != n && n.length > 0) {
                                let e = (0, eA.getWebUploadFiles)(n);
                                if ((0, eA.filesExceedUploadLimits)(e, null == r ? void 0 : r.id)) return (0, eS.showUploadFileSizeExceededError)(o, e), {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                };
                                m.default.uploadFiles({
                                    channelId: o.id,
                                    uploads: n,
                                    draftType: el.DraftType.ChannelMessage,
                                    parsedMessage: C,
                                    options: {
                                        ...E,
                                        stickerIds: a
                                    }
                                }), p.default.clearAll(o.id, el.DraftType.ChannelMessage)
                            } else null != a && a.length > 0 ? "" !== t ? h.default.sendMessage(o.id, C, void 0, {
                                ...E,
                                stickerIds: a
                            }) : h.default.sendStickers(o.id, a, t, E, C.tts) : h.default.sendMessage(o.id, C, void 0, E);
                            return this.setState((0, y.createEmptyState)()), (0, $.deletePendingReply)(o.id), (0, et.clearStickerPreview)(o.id, d.drafts.type), {
                                shouldClear: !0,
                                shouldRefocus: !0
                            }
                        })
                    }, this.handleSetValue = e => {
                        var t, n;
                        let a = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
                        null != a && (b.SlateTransforms.select(a, []), a.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus())
                    }, this.renderAttachButton = (e, t) => (0, a.jsx)(j.default, {
                        className: t,
                        channel: this.props.channel,
                        draftType: el.DraftType.ChannelMessage,
                        editorTextContent: this.state.textValue,
                        setValue: this.handleSetValue,
                        canOnlyUseTextCommands: e
                    }), this.renderAppLauncherButton = () => (0, a.jsx)(D.default, {}), this.renderApplicationCommandIcon = (e, t, n) => (0, a.jsx)(O.default, {
                        className: n,
                        command: e,
                        section: t,
                        channel: this.props.channel
                    })
                }
            }
            class eO extends s.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    let {
                        channel: n
                    } = e, {
                        currentChannelId: a
                    } = t;
                    return n.id !== a ? {
                        textAreaFocused: null != n && !r.isMobile && eu.default.can(eN.Permissions.SEND_MESSAGES, n),
                        currentChannelId: n.id
                    } : null
                }
                componentDidMount() {
                    em.ComponentDispatch.subscribe(eN.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus)
                }
                componentDidUpdate(e) {
                    (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus())
                }
                componentWillUnmount() {
                    em.ComponentDispatch.unsubscribe(eN.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus)
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
                        communicationDisabledUntil: p,
                        shakeIntensity: m,
                        poggermodeEnabled: S,
                        isSelectedResourceChannel: A,
                        showAutomodUserProfileChatBlocker: _
                    } = this.props, {
                        textAreaFocused: T,
                        textAreaHighlighted: M
                    } = this.state, I = u === R.ChatInputTypes.SIDEBAR;
                    t = I && n.type === eN.ChannelTypes.GUILD_VOICE ? ev.default.Messages.TEXT_IN_VOICE_A11Y_LABEL : I && n.type === eN.ChannelTypes.GUILD_STAGE_VOICE ? ev.default.Messages.TEXT_IN_STAGE_A11Y_LABEL : o.ChannelTypesSets.THREADS.has(n.type) ? ev.default.Messages.THREAD_A11Y_LABEL : ev.default.Messages.CHANNEL_A11Y_LABEL;
                    let N = (0, a.jsx)(en.default, {
                        tutorialId: "writing-messages",
                        position: "left",
                        offsetX: 75,
                        children: (0, a.jsx)(eD, {
                            focused: T,
                            highlighted: M,
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
                            shakeIntensity: m,
                            poggermodeEnabled: S
                        })
                    });
                    return (0, a.jsx)(g.default, {
                        page: this.getAnalyticsPage(),
                        children: (0, a.jsx)(eh.ChatLayerProvider, {
                            children: (0, a.jsxs)(ep.ComponentDispatchGroupProvider, {
                                ref: this.dispatchGroupRef,
                                children: [(0, a.jsx)(ep.ComponentAction, {
                                    event: eN.ComponentActions.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus
                                }), (0, a.jsx)(ep.ComponentAction, {
                                    event: eN.ComponentActions.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur
                                }), (0, a.jsx)(ep.ComponentAction, {
                                    event: eN.ComponentActions.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker
                                }), (0, a.jsxs)(ey, {
                                    isSidebar: I,
                                    className: eL.chatContent,
                                    "aria-label": t.format({
                                        channelName: n.name
                                    }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [(0, a.jsx)(eT.default, {
                                        channel: n,
                                        guild: s,
                                        narrow: I
                                    }), (0, a.jsxs)(c.HeadingLevel, {
                                        component: (0, a.jsx)(c.HiddenVisually, {
                                            children: (0, a.jsx)(c.H, {
                                                children: ev.default.Messages.CHANNEL_CHAT_HEADING.format({
                                                    channelName: n.name
                                                })
                                            })
                                        }),
                                        children: [(0, a.jsx)(z.default, {
                                            channel: n,
                                            forceCozy: A,
                                            filterAfterTimestamp: C,
                                            showingQuarantineBanner: h
                                        }), null == n.guild_id || I ? null : (0, a.jsx)(V.default, {
                                            guildId: n.guild_id,
                                            channel: n
                                        }), A ? null : null !== (e = this.renderMessageBanner({
                                            channel: n,
                                            showQuarantinedUserBanner: h,
                                            guild: s,
                                            communicationDisabledUntil: p,
                                            showAutomodUserProfileChatBlocker: _
                                        })) && void 0 !== e ? e : (0, a.jsxs)("form", {
                                            ref: this.inputFormRef,
                                            onSubmit: ex,
                                            className: eL.form,
                                            children: [S && (0, a.jsx)(X.default, {
                                                channelId: n.id
                                            }), n.isPrivate() ? (0, a.jsx)(eM.default, {
                                                channel: n,
                                                children: N
                                            }) : (0, a.jsx)(eI.default, {
                                                channel: n,
                                                children: N
                                            }), (0, a.jsx)(E.default, {
                                                channel: n,
                                                poggermodeEnabled: S
                                            })]
                                        }), (0, a.jsx)(eh.ChatLayerContainer, {})]
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
                            case eN.ChannelTypes.GUILD_ANNOUNCEMENT:
                            case eN.ChannelTypes.GUILD_TEXT:
                            case eN.ChannelTypes.GUILD_FORUM:
                            case eN.ChannelTypes.GUILD_MEDIA:
                                return g.default.Pages.GUILD_CHANNEL;
                            case eN.ChannelTypes.GROUP_DM:
                            case eN.ChannelTypes.DM:
                                return g.default.Pages.DM_CHANNEL;
                            default:
                                return null
                        }
                    }, this.handleInputFocus = e => {
                        var t;
                        null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(), !(0, eg.isFullScreen)() && ((null == e ? void 0 : e.highlight) != null ? this.setState({
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
                            case eN.KeyboardKeys.ARROW_LEFT:
                                n === R.ChatInputTypes.SIDEBAR && em.ComponentDispatch.dispatch(eN.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                                    channelId: ed.default.getChannelId()
                                });
                                return;
                            case eN.KeyboardKeys.ARROW_RIGHT:
                                n === R.ChatInputTypes.NORMAL && em.ComponentDispatch.dispatch(eN.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                                    channelId: es.default.getCurrentSidebarChannelId(a.id)
                                })
                        }
                    }, this.handleOpenExpressionPicker = e => {
                        let {
                            activeView: t
                        } = e;
                        (0, F.openExpressionPicker)(t, this.props.chatInputType)
                    }, this.handleChatInteract = () => {
                        var e;
                        null === (e = this.dispatchGroupRef.current) || void 0 === e || e.bumpDispatchPriority()
                    }, this.renderMessageBanner = e => {
                        let {
                            channel: t,
                            showQuarantinedUserBanner: n,
                            guild: s,
                            communicationDisabledUntil: l,
                            showAutomodUserProfileChatBlocker: i
                        } = e;
                        return t.type === eN.ChannelTypes.DM && n ? (0, a.jsx)(J.default, {}) : null != l && (0, k.isCommunicationDisabled)(l) && null != s && !eu.default.can(eN.Permissions.ADMINISTRATOR, s) ? (0, a.jsx)(w.CommunicationDisabledBanner, {
                            guild: s,
                            disabledUntil: l
                        }) : i ? (0, a.jsx)(H.AutomodUserProfileQuarantineChatInputNotice, {
                            guild: s
                        }) : null
                    }
                }
            }
            var ej = s.memo(function(e) {
                let {
                    channel: t,
                    guild: n,
                    chatInputType: s,
                    filterAfterTimestamp: l
                } = e, {
                    placeholder: i,
                    accessibilityLabel: r
                } = (0, e_.default)(t), o = (0, J.useShouldBlockDMInputForQuarantinedUser)(ef.default.getCurrentUser(), t), [u] = (0, G.useCurrentUserCommunicationDisabled)(null == n ? void 0 : n.id), f = (0, U.useCurrentUserHasAutomodQuarantinedProfile)(null == n ? void 0 : n.id), h = (0, d.useStateFromStores)([ef.default], () => ef.default.getCurrentUser()), C = (0, d.useStateFromStores)([er.default], () => {
                    var e, t, a;
                    return null != h && null !== (a = null === (e = er.default.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : "", null == h ? void 0 : h.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== a && a
                }), p = (0, d.useStateFromStores)([Y.default], () => Y.default.isEnabled()), m = (0, Q.default)(t.id), E = (0, B.default)(t.id);
                return (0, a.jsx)(eO, {
                    channel: t,
                    isEditing: null != (0, d.useStateFromStores)([ei.default], () => ei.default.getEditingMessageId(t.id)),
                    hasModalOpen: (0, c.useModalsStore)(c.hasAnyModalOpenSelector),
                    guild: n,
                    keyboardModeEnabled: (0, d.useStateFromStores)([_.default], () => _.default.keyboardModeEnabled),
                    pendingReply: (0, d.useStateFromStores)([ee.default], () => ee.default.getPendingReply(t.id)),
                    chatInputType: s,
                    placeholder: i,
                    accessibilityLabel: r,
                    filterAfterTimestamp: l,
                    showQuarantinedUserBanner: o,
                    communicationDisabledUntil: u,
                    shakeIntensity: m,
                    poggermodeEnabled: p,
                    isSelectedResourceChannel: E,
                    showAutomodUserProfileChatBlocker: f && !C
                })
            })
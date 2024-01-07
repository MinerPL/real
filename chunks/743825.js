            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007"), n("424973");
            var l, i = n("37983"),
                r = n("884691"),
                o = n("414456"),
                s = n.n(o),
                a = n("917351"),
                u = n.n(a),
                d = n("87682"),
                c = n.n(d),
                f = n("746379"),
                p = n.n(f),
                m = n("394846"),
                h = n("295426"),
                E = n("81594"),
                S = n("798609"),
                g = n("966724"),
                C = n("383018"),
                T = n("605250"),
                v = n("585722"),
                y = n("378765"),
                x = n("254490"),
                I = n("850391"),
                N = n("149022"),
                _ = n("296141"),
                A = n("606013"),
                R = n("32647"),
                O = n("970153"),
                M = n("49111"),
                k = n("782340"),
                b = n("537461");
            new T.default("ChannelEditor.tsx");
            let P = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]
                },
                L = {
                    12: b.fontSize12Padding,
                    14: b.fontSize14Padding,
                    15: b.fontSize15Padding,
                    16: b.fontSize16Padding,
                    18: b.fontSize18Padding,
                    20: b.fontSize20Padding,
                    24: b.fontSize24Padding
                };
            l = class extends r.Component {
                componentDidMount() {
                    this.props.focused && requestAnimationFrame(() => this.focus()), document.addEventListener("selectionchange", this.handleSelectionChange), window.addEventListener("beforeunload", this.handleBeforeUnload)
                }
                componentDidUpdate(e) {
                    if (this.fixFocus(e), this.props.useSlate !== e.useSlate) {
                        var t, n;
                        let e;
                        e = this.props.useSlate ? this.props.textValue : (0, O.toTextValue)(this.props.richValue, {
                            mode: "plain"
                        }), null === (t = (n = this.props).onChange) || void 0 === t || t.call(n, null, e, (0, N.toRichValue)(e))
                    } else this.props.textValue !== e.textValue && this.saveCurrentTextThrottled()
                }
                componentWillUnmount() {
                    var e;
                    this.saveCurrentText(), null === (e = this._unsubscribe) || void 0 === e || e.call(this), window.removeEventListener("beforeunload", this.handleBeforeUnload), document.removeEventListener("selectionchange", this.handleSelectionChange), this._focusBlurQueue = null, this._unsubscribe = null
                }
                blur() {
                    let e = this.ref.current;
                    null != e && e.blur()
                }
                submit(e) {
                    var t;
                    null === (t = this.ref.current) || void 0 === t || t.submit(e)
                }
                insertEmoji(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        {
                            textValue: l
                        } = this.props,
                        i = this.ref.current;
                    null != e && null != i && (n && !l.endsWith(" ") && i.insertText(" ", void 0, !1), i.insertEmoji(e, t), t && this.focus())
                }
                insertGIF(e) {
                    let {
                        textValue: t
                    } = this.props, n = this.ref.current;
                    null != e && null != n && (!t.endsWith(" ") && n.insertText(" ", void 0, !1), n.insertText(e.url))
                }
                insertSound(e) {
                    let {
                        textValue: t
                    } = this.props, n = this.ref.current;
                    null != e && null != n && (!t.endsWith(" ") && n.insertText(" ", void 0, !1), n.insertText("<sound:" + e.soundId + ">"))
                }
                handleOuterClick() {
                    this.focus()
                }
                clearValue() {
                    let {
                        channel: e,
                        type: t
                    } = this.props;
                    this.setState({
                        focused: !0,
                        submitting: !1
                    }), h.default.saveDraft(e.id, "", t.drafts.type)
                }
                getCurrentWord() {
                    var e;
                    let t = this.ref.current;
                    return null !== (e = null == t ? void 0 : t.getCurrentWord()) && void 0 !== e ? e : {
                        word: null,
                        isAtStart: !1
                    }
                }
                insertAutocomplete(e, t, n) {
                    let l = this.ref.current;
                    return null == l ? void 0 : l.insertAutocomplete(e, t, n)
                }
                getCurrentCommandOption() {
                    var e, t;
                    let n = this.ref.current;
                    return null !== (t = null == n ? void 0 : null === (e = n.getCurrentCommandOption) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : null
                }
                getCurrentCommandOptionValue() {
                    var e, t;
                    let n = this.ref.current;
                    return null !== (t = null == n ? void 0 : null === (e = n.getCurrentCommandOptionValue) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : []
                }
                getCommandOptionValues() {
                    var e, t;
                    let n = this.ref.current;
                    return null !== (t = null == n ? void 0 : null === (e = n.getCommandOptionValues) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : {}
                }
                getFirstText() {
                    var e;
                    let t = this.ref.current;
                    return null !== (e = null == t ? void 0 : t.getFirstText()) && void 0 !== e ? e : null
                }
                getSlateEditor() {
                    var e, t;
                    let n = this.ref.current;
                    return null !== (t = null == n ? void 0 : null === (e = n.getSlateEditor) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : null
                }
                fixFocus(e) {
                    e.focused && !this.props.focused ? this.blur() : !e.focused && this.props.focused && this.focus()
                }
                appendText(e, t) {
                    var n;
                    let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    null === (n = this.ref.current) || void 0 === n || n.insertText(e, t, l)
                }
                getPlaceholder() {
                    let {
                        disabled: e,
                        placeholder: t,
                        isPreviewing: n
                    } = this.props;
                    return e && !n ? k.default.Messages.NO_SEND_MESSAGES_PERMISSION_PLACEHOLDER : t
                }
                render() {
                    var e, t, n, l, r, o;
                    let {
                        textValue: a,
                        richValue: u,
                        disabled: d,
                        onChange: c,
                        onKeyDown: f,
                        onResize: p,
                        onSubmit: h,
                        channel: E,
                        type: S,
                        fontSize: g,
                        useSlate: C,
                        spellcheckEnabled: T,
                        useNewSlashCommands: v,
                        canOnlyUseTextCommands: x,
                        className: _,
                        id: O,
                        required: k,
                        maxCharacterCount: P,
                        allowNewLines: U,
                        "aria-describedby": j,
                        "aria-labelledby": D,
                        accessibilityLabel: w
                    } = this.props, {
                        submitting: B,
                        popup: H
                    } = this.state, F = {
                        channel: E,
                        className: s(_, b.textArea, {
                            [b.textAreaSlate]: C,
                            [b.textAreaDisabled]: d || B
                        }),
                        id: O,
                        placeholder: this.getPlaceholder(),
                        required: k,
                        accessibilityLabel: w,
                        disabled: d || !1,
                        submitting: B,
                        isEdit: S === I.ChatInputTypes.EDIT,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        onPaste: this.handlePaste,
                        onTab: this.handleTab,
                        onEnter: this.handleEnter,
                        moveSelection: this.handleMoveSelection,
                        maybeShowAutocomplete: this.maybeShowAutocomplete,
                        hideAutocomplete: this.hideAutocomplete,
                        allowNewLines: U,
                        onChange: c,
                        onResize: p,
                        onKeyDown: f,
                        onSubmit: h,
                        textAreaPaddingClassName: s(L[g], {
                            [b.textAreaWithoutAttachmentButton]: S !== I.ChatInputTypes.NORMAL && S !== I.ChatInputTypes.OVERLAY && S !== I.ChatInputTypes.THREAD_CREATION && S !== I.ChatInputTypes.SIDEBAR,
                            [b.textAreaForPostCreation]: S === I.ChatInputTypes.CREATE_FORUM_POST,
                            [b.textAreaCustomGift]: S === I.ChatInputTypes.CUSTOM_GIFT
                        }),
                        spellcheckEnabled: T,
                        useNewSlashCommands: v,
                        disableAutoFocus: m.isMobile || null !== (n = S.disableAutoFocus) && void 0 !== n && n,
                        disableEnterToSubmit: null !== (l = null === (e = S.submit) || void 0 === e ? void 0 : e.disableEnterToSubmit) && void 0 !== l && l,
                        "aria-controls": null !== (r = H.id) && void 0 !== r ? r : void 0,
                        "aria-haspopup": "listbox",
                        "aria-expanded": null !== H.id || void 0,
                        "aria-activedescendant": null !== (o = H.activeDescendant) && void 0 !== o ? o : void 0,
                        "aria-invalid": a.length > P,
                        "aria-describedby": j,
                        "aria-labelledby": D,
                        "aria-autocomplete": "list"
                    }, G = C ? (0, i.jsx)(R.default, {
                        ref: this.ref,
                        ...F,
                        type: S,
                        value: d ? (0, N.toRichValue)("") : u,
                        canUseCommands: null === (t = S.commands) || void 0 === t ? void 0 : t.enabled,
                        canOnlyUseTextCommands: x
                    }) : (0, i.jsx)(A.default, {
                        ref: this.ref,
                        ...F,
                        value: d ? "" : a
                    });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(y.ComponentAction, {
                            event: M.ComponentActions.INSERT_TEXT,
                            handler: this.handleInsertText
                        }), (0, i.jsx)(y.ComponentAction, {
                            event: M.ComponentActions.CLEAR_TEXT,
                            handler: this.handleClearText
                        }), G]
                    })
                }
                constructor(e) {
                    var t;
                    super(e), t = this, this.ref = r.createRef(), this._focusBlurQueue = Promise.resolve(), this.handleSelectionChange = () => {
                        if (this.props.focused) {
                            var e, t, n;
                            this.props.onSelectionChanged(null === (t = (n = document).getSelection) || void 0 === t ? void 0 : null === (e = t.call(n)) || void 0 === e ? void 0 : e.toString())
                        }
                    }, this.focus = () => {
                        var e;
                        null === (e = this._focusBlurQueue) || void 0 === e || e.then(() => {
                            this.setState({
                                focused: !0
                            }, () => {
                                let e = this.ref.current;
                                null != e && e.focus()
                            })
                        })
                    }, this.saveCurrentText = function() {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            {
                                type: n,
                                channel: l
                            } = t.props;
                        n.drafts.autoSave && (e && t.saveCurrentTextThrottled.cancel(), t.handleSaveCurrentText(l.id))
                    }, this.handleBeforeUnload = () => this.saveCurrentText(), this.saveCurrentTextThrottled = u.throttle(this.saveCurrentText.bind(this, !1), 500), this.handleEnter = e => {
                        var t, n;
                        return null === (t = (n = this.props).onEnter) || void 0 === t ? void 0 : t.call(n, e)
                    }, this.handleTab = () => {
                        var e, t;
                        return null === (e = (t = this.props).onTab) || void 0 === e ? void 0 : e.call(t)
                    }, this.handleMoveSelection = e => {
                        var t, n;
                        return null === (t = (n = this.props).onMoveSelection) || void 0 === t ? void 0 : t.call(n, e)
                    }, this.maybeShowAutocomplete = () => {
                        var e, t;
                        return null === (e = (t = this.props).onMaybeShowAutocomplete) || void 0 === e ? void 0 : e.call(t)
                    }, this.hideAutocomplete = () => {
                        var e, t;
                        return null === (e = (t = this.props).onHideAutocomplete) || void 0 === e ? void 0 : e.call(t)
                    }, this.handleSaveCurrentText = e => {
                        h.default.saveDraft(e, this.props.textValue, this.props.type.drafts.type)
                    }, this.handleClearText = () => {
                        var e, t;
                        null === (e = (t = this.props).onChange) || void 0 === e || e.call(t, null, "", (0, N.toRichValue)(""))
                    }, this.handleInsertText = e => {
                        let {
                            plainText: t,
                            rawText: n,
                            addSpace: l = !1
                        } = e;
                        !this.props.disabled && (this.appendText(t, n, l), this.focus())
                    }, this.handleFocus = e => {
                        let {
                            onFocus: t
                        } = this.props, {
                            focused: n
                        } = this.state;
                        null == t || t(e), !n && this.setState({
                            focused: !0
                        })
                    }, this.handleBlur = e => {
                        let {
                            onBlur: t
                        } = this.props, {
                            focused: n
                        } = this.state;
                        null == t || t(e), n && this.setState({
                            focused: !1
                        })
                    }, this.handlePaste = e => {
                        let {
                            channel: t,
                            canPasteFiles: n,
                            uploadPromptCharacterCount: l,
                            promptToUpload: i,
                            maxCharacterCount: r,
                            type: o
                        } = this.props;
                        if (null == i || !t.isPrivate() && !n || t.isPrivate() && t.isManaged()) return !1;
                        let {
                            files: s
                        } = function(e, t) {
                            let n = [],
                                l = [],
                                i = null,
                                r = null;
                            for (let t of e.items)
                                if ("file" === t.kind) {
                                    let e = t.getAsFile();
                                    if (null == e) continue;
                                    null != e.path && e.path.length > 0 ? n.push(e) : l.push(e)
                                } else "string" === t.kind && ("text/plain" === t.type && null == i ? i = t : "text/html" === t.type && null == r && (r = t));
                            if (n.length > 0) return {
                                files: n
                            };
                            if (l.length > 0) {
                                if (1 === l.length && "image/png" === l[0].type && null != r) {
                                    var o;
                                    let t = l[0],
                                        n = e.getData(r.type),
                                        i = null !== (o = function(e) {
                                            let t = new DOMParser,
                                                n = t.parseFromString(e, "text/html"),
                                                l = n.querySelector("img");
                                            if (null != l) {
                                                let e;
                                                try {
                                                    let {
                                                        pathname: t
                                                    } = p.parse(l.src);
                                                    null != t && t.length > 0 && (e = c.basename(t).split(".")[0])
                                                } catch (e) {}
                                                if (null != e && e.length > 0) return "".concat(e, ".png")
                                            }
                                        }(n)) && void 0 !== o ? o : t.name;
                                    return {
                                        files: [(0, x.makeFile)(t, i, t.type)]
                                    }
                                }
                                return {
                                    files: l
                                }
                            }
                            if (null != i && null != t) {
                                let n = e.getData(i.type);
                                if (n.length > t) {
                                    let e = new Blob([n], {
                                        type: "text/plain"
                                    });
                                    return {
                                        files: [(0, x.makeFile)(e, "message.txt")],
                                        convertedStringToFile: !0
                                    }
                                }
                            }
                            return {
                                files: []
                            }
                        }(e.clipboardData, o.uploadLongMessages ? null != l ? l : r : null);
                        return P("onPaste", [...e.clipboardData.items].map(e => {
                            if ("file" !== e.kind) return {
                                kind: e.kind,
                                type: e.type
                            };
                            {
                                let t = e.getAsFile();
                                return {
                                    kind: e.kind,
                                    type: e.type,
                                    name: null == t ? void 0 : t.name,
                                    path: null == t ? void 0 : t.path
                                }
                            }
                        })), 0 !== s.length && (e.preventDefault(), e.stopPropagation(), this.saveCurrentText(), ((e, n) => {
                            var l;
                            let r = C.default.getActiveCommand(t.id);
                            if (null == r) return i(e, t, o.drafts.type, {
                                requireConfirm: !0,
                                showLargeMessageDialog: void 0
                            });
                            let s = null === (l = r.options) || void 0 === l ? void 0 : l.find(e => e.type === S.ApplicationCommandOptionType.ATTACHMENT && null == v.default.getUpload(t.id, e.name, o.drafts.type));
                            null != s && E.default.setFile({
                                channelId: t.id,
                                id: s.name,
                                draftType: o.drafts.type,
                                file: {
                                    id: s.name,
                                    platform: g.UploadPlatform.WEB,
                                    file: e[0]
                                }
                            })
                        })(s), this.focus(), !0)
                    }, this._unsubscribe = _.channelEditorPopupStore.subscribe(e => {
                        requestAnimationFrame(() => {
                            this.setState({
                                popup: e
                            })
                        })
                    }), this.state = {
                        focused: !1,
                        submitting: !1,
                        popup: _.channelEditorPopupStore.getState()
                    }
                }
            }
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return H
                }
            }), n("70102"), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("394846"),
                o = n("446674"),
                u = n("77078"),
                d = n("272030"),
                c = n("454286"),
                f = n("485328"),
                h = n("123225"),
                C = n("940365"),
                p = n("42203"),
                m = n("952451"),
                E = n("305961"),
                g = n("660478"),
                I = n("18494"),
                S = n("316133"),
                _ = n("822332"),
                N = n("409082"),
                T = n("476765"),
                A = n("659500"),
                L = n("701909"),
                v = n("104589"),
                x = n("116460"),
                R = n("139038"),
                M = n("49111"),
                O = n("782340"),
                y = n("587572");
            let D = {
                    bottom: 10
                },
                b = () => (0, l.jsxs)("div", {
                    className: y.emptyState,
                    children: [(0, l.jsx)("div", {
                        className: y.emptyStateNote,
                        children: O.default.Messages.QUICKSWITCHER_EMPTY_TEXT
                    }), (0, l.jsx)("div", {
                        className: y.emptyStateCTA,
                        children: (0, l.jsx)(u.Anchor, {
                            href: L.default.getArticleURL(M.HelpdeskArticles.QUICK_SWITCHER_TUTORIAL),
                            children: O.default.Messages.QUICKSWITCHER_EMPTY_CTA
                        })
                    })]
                });
            class j extends a.Component {
                render() {
                    let e = E.default.getGuild(this.props.channel.guild_id);
                    return (0, l.jsx)(N.Channel, {
                        ...this.props,
                        children: (0, l.jsx)("div", {
                            className: y.miscContainer,
                            children: null != e ? e.name : null
                        })
                    })
                }
            }
            j.defaultProps = {
                unread: !1
            };
            let G = o.default.connectStores([g.default, p.default], e => {
                    let {
                        channel: t
                    } = e;
                    return {
                        unread: g.default.hasUnread(t.id),
                        mentions: g.default.getMentionCount(t.id),
                        category: p.default.getChannel(t.parent_id)
                    }
                })(j),
                U = o.default.connectStores([S.default], e => {
                    let {
                        channel: t
                    } = e;
                    if (null == t.guild_id) throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
                    return {
                        voiceStates: S.default.getVoiceStates(t.guild_id)[t.id]
                    }
                })(j),
                P = o.default.connectStores([m.default], e => {
                    let {
                        guild: t
                    } = e;
                    return {
                        unread: m.default.hasUnread(t.id)
                    }
                })(N.Guild),
                w = o.default.connectStores([g.default], e => {
                    let {
                        channel: t
                    } = e;
                    return {
                        mentions: g.default.getMentionCount(t.id)
                    }
                })(N.GroupDM),
                F = o.default.connectStores([p.default, g.default], e => {
                    let {
                        user: t
                    } = e, n = p.default.getDMFromUserId(t.id);
                    return {
                        mentions: null != n ? g.default.getMentionCount(n) : 0
                    }
                })(N.User);

            function B(e, t, n) {
                return (0, l.jsx)(u.Tooltip, {
                    text: n,
                    children: e => (0, l.jsx)("span", {
                        ...e,
                        className: y.autocompleteQuerySymbol,
                        children: t
                    })
                }, e)
            }
            class V extends a.PureComponent {
                componentDidMount() {
                    f.default.disable(), f.default.enableTemp(c.SETTINGS_LAYERS_LAYOUT)
                }
                componentWillUnmount() {
                    f.default.disableTemp(), f.default.enable()
                }
                componentDidUpdate(e, t) {
                    let {
                        mouseFocusDisabled: n,
                        query: l
                    } = this.state, {
                        selectedIndex: a
                    } = this.props, {
                        current: s
                    } = this.scrollerRef;
                    null != s && (l !== t.query ? s.scrollTo({
                        to: 0
                    }) : n && a >= 0 && s.scrollToIndex({
                        section: 0,
                        row: a,
                        padding: 10
                    }))
                }
                close() {
                    (0, v.hide)()
                }
                search(e) {
                    this.setState({
                        query: e
                    }), (0, v.search)(e)
                }
                renderInput() {
                    let {
                        selectedIndex: e,
                        results: t
                    } = this.props, {
                        query: n
                    } = this.state, a = t.length > 0 && "" !== n;
                    return (0, l.jsx)(u.FocusRing, {
                        children: (0, l.jsx)("input", {
                            className: y.input,
                            "aria-label": O.default.Messages.QUICK_SWITCHER,
                            ref: this.inputRef,
                            type: "text",
                            role: "combobox",
                            "aria-controls": this._listId,
                            "aria-expanded": a,
                            "aria-activedescendant": a ? this.getRowId(e) : void 0,
                            "aria-autocomplete": "list",
                            placeholder: O.default.Messages.QUICKSWITCHER_PLACEHOLDER,
                            onChange: this.handleInputChange,
                            onKeyDown: this.handleKeyDown,
                            value: this.state.query,
                            spellCheck: !1,
                            autoFocus: !0
                        })
                    })
                }
                renderSection() {
                    return null
                }
                renderResults() {
                    let {
                        query: e
                    } = this.state, {
                        results: t
                    } = this.props;
                    return 0 === t.length && e.length > 0 ? (0, l.jsx)(b, {}) : 0 === t.length ? null : (0, l.jsx)(u.ListAuto, {
                        innerId: this._listId,
                        innerRole: "listbox",
                        "aria-label": O.default.Messages.QUICK_SWITCHER_RESULTS_LABEL,
                        ref: this.scrollerRef,
                        sectionHeight: 0,
                        rowHeight: 34,
                        paddingBottom: D.bottom,
                        sections: [t.length],
                        className: y.scroller,
                        renderRow: this.renderRow,
                        renderSection: this.renderSection
                    })
                }
                focusNode(e) {
                    A.ComponentDispatch.dispatch(M.ComponentActions.QUICKSWITCHER_RESULT_FOCUS, {
                        node: e
                    })
                }
                getRowId(e) {
                    return "quick-switcher-".concat(this._listId, "-item-").concat(e)
                }
                renderProtip() {
                    return (0, l.jsx)(_.default, {
                        className: i(y.protip, {
                            [y.hasContent]: this.state.query.length > 0
                        }),
                        type: _.default.Types.INLINE,
                        children: O.default.Messages.QUICKSWITCHER_PROTIP.format({
                            userSymbolHook: (e, t) => B(t, h.AutocompleterQuerySymbols.USER, O.default.Messages.QUICKSWITCHER_PROTIP_USERNAMES),
                            textChannelSymbolHook: (e, t) => B(t, h.AutocompleterQuerySymbols.TEXT_CHANNEL, O.default.Messages.QUICKSWITCHER_PROTIP_TEXT_CHANNELS),
                            voiceChannelSymbolHook: (e, t) => B(t, h.AutocompleterQuerySymbols.VOICE_CHANNEL, O.default.Messages.QUICKSWITCHER_PROTIP_VOICE_CHANNELS),
                            guildSymbolHook: (e, t) => B(t, h.AutocompleterQuerySymbols.GUILD, O.default.Messages.QUICKSWITCHER_PROTIP_GUILDS),
                            helpdeskArticle: L.default.getArticleURL(M.HelpdeskArticles.QUICK_SWITCHER_TUTORIAL)
                        })
                    })
                }
                renderTutorial() {
                    let {
                        query: e
                    } = this.state, {
                        seenTutorial: t,
                        results: n
                    } = this.props;
                    return t ? null : (0, l.jsx)(R.default, {
                        hasQuery: e.length > 0 && n.length > 0
                    })
                }
                render() {
                    return (0, l.jsx)(u.ModalRoot, {
                        "aria-label": O.default.Messages.QUICK_SWITCHER,
                        size: u.ModalSize.DYNAMIC,
                        transitionState: this.props.transitionState,
                        className: i(y.container, r.isMobile && y.mobileContainer),
                        fullscreenOnMobile: !1,
                        children: (0, l.jsxs)("div", {
                            className: i(y.quickswitcher, r.isMobile && y.mobileQuickswitcher),
                            onMouseMove: this.handleMouseMove,
                            children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.scrollerRef = a.createRef(), this.inputRef = a.createRef(), this._listId = (0, T.uid)(), this.state = {
                        query: this.props.query,
                        mouseFocusDisabled: !0
                    }, this.handleInputChange = () => {
                        let {
                            current: e
                        } = this.inputRef;
                        null != e && this.search(e.value)
                    }, this.handleMouseMove = () => {
                        let {
                            mouseFocusDisabled: e
                        } = this.state;
                        !1 !== e && this.setState({
                            mouseFocusDisabled: !1
                        })
                    }, this.focusResult = e => {
                        !this.state.mouseFocusDisabled && (0, v.selectResult)(this.props.results.indexOf(e))
                    }, this.selectResult = e => {
                        (0, v.switchToResult)(e, this.props.queryMode === h.AutocompleterResultTypes.TEXT_CHANNEL)
                    }, this.handleContextMenu = e => {
                        let t = this.props.results[this.props.selectedIndex];
                        switch (t.type) {
                            case h.AutocompleterResultTypes.GUILD:
                                return (0, d.openContextMenuLazy)(e, async () => {
                                    let {
                                        default: e
                                    } = await n.el("374705").then(n.bind(n, "374705"));
                                    return n => (0, l.jsx)(e, {
                                        ...n,
                                        guild: t.record,
                                        onSelect: v.hide,
                                        hideSettings: !0
                                    })
                                });
                            case h.AutocompleterResultTypes.TEXT_CHANNEL:
                            case h.AutocompleterResultTypes.VOICE_CHANNEL:
                                let a = t.record,
                                    s = E.default.getGuild(a.getGuildId());
                                if (null == s) return;
                                switch (a.type) {
                                    case M.ChannelTypes.GUILD_TEXT:
                                    case M.ChannelTypes.GUILD_ANNOUNCEMENT:
                                    case M.ChannelTypes.GUILD_FORUM:
                                    case M.ChannelTypes.GUILD_MEDIA:
                                        return (0, d.openContextMenuLazy)(e, async () => {
                                            let {
                                                default: e
                                            } = await n.el("327241").then(n.bind(n, "327241"));
                                            return t => (0, l.jsx)(e, {
                                                ...t,
                                                channel: a,
                                                guild: s,
                                                onSelect: v.hide
                                            })
                                        });
                                    case M.ChannelTypes.GUILD_VOICE:
                                    case M.ChannelTypes.GUILD_STAGE_VOICE:
                                        return (0, d.openContextMenuLazy)(e, async () => {
                                            let {
                                                default: e
                                            } = await n.el("168003").then(n.bind(n, "168003"));
                                            return t => (0, l.jsx)(e, {
                                                ...t,
                                                channel: a,
                                                guild: s,
                                                onSelect: v.hide
                                            })
                                        });
                                    case M.ChannelTypes.ANNOUNCEMENT_THREAD:
                                    case M.ChannelTypes.PUBLIC_THREAD:
                                    case M.ChannelTypes.PRIVATE_THREAD:
                                        return (0, d.openContextMenuLazy)(e, async () => {
                                            let {
                                                default: e
                                            } = await n.el("994827").then(n.bind(n, "994827"));
                                            return t => (0, l.jsx)(e, {
                                                ...t,
                                                channel: a,
                                                onSelect: v.hide
                                            })
                                        });
                                    case M.ChannelTypes.GUILD_STORE:
                                        return (0, d.openContextMenuLazy)(e, async () => {
                                            let {
                                                default: e
                                            } = await n.el("599943").then(n.bind(n, "599943"));
                                            return t => (0, l.jsx)(e, {
                                                ...t,
                                                channel: a,
                                                guild: s,
                                                onSelect: v.hide
                                            })
                                        });
                                    case M.ChannelTypes.GUILD_DIRECTORY:
                                        return (0, d.openContextMenuLazy)(e, async () => {
                                            let {
                                                default: e
                                            } = await n.el("425630").then(n.bind(n, "425630"));
                                            return t => (0, l.jsx)(e, {
                                                ...t,
                                                channel: a
                                            })
                                        })
                                }
                                break;
                            case h.AutocompleterResultTypes.GROUP_DM:
                                return (0, d.openContextMenuLazy)(e, async () => {
                                    let {
                                        default: e
                                    } = await n.el("493015").then(n.bind(n, "493015"));
                                    return n => (0, l.jsx)(e, {
                                        ...n,
                                        channel: t.record,
                                        selected: I.default.getChannelId() === t.record.id,
                                        onSelect: v.hide
                                    })
                                });
                            case h.AutocompleterResultTypes.USER:
                                return (0, d.openContextMenuLazy)(e, async () => {
                                    let {
                                        default: e
                                    } = await n.el("406784").then(n.bind(n, "406784"));
                                    return n => (0, l.jsx)(e, {
                                        ...n,
                                        user: t.record,
                                        onSelect: v.hide
                                    })
                                })
                        }
                    }, this.handleKeyDown = e => {
                        let {
                            mouseFocusDisabled: t,
                            query: n
                        } = this.state, {
                            results: l
                        } = this.props;
                        !1 === t && this.setState({
                            mouseFocusDisabled: !0
                        });
                        let a = e.key.toLowerCase(),
                            {
                                selectedIndex: s
                            } = this.props;
                        switch (a) {
                            case "escape":
                                e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search("") : (0, v.hide)();
                                return;
                            case "k":
                                (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, v.hide)());
                                return;
                            case "enter": {
                                if (-1 === s) return;
                                if (e.preventDefault(), e.altKey) return this.handleContextMenu(e);
                                let t = l[s];
                                null != t && this.selectResult(t);
                                return
                            }
                            case "arrowup":
                                s = (0, h.findNextSelectedResult)(h.FindResultDirections.UP, s, l);
                                break;
                            case "arrowdown":
                                s = (0, h.findNextSelectedResult)(h.FindResultDirections.DOWN, s, l);
                                break;
                            case "n":
                                if (!e.ctrlKey) return;
                                s = (0, h.findNextSelectedResult)(h.FindResultDirections.DOWN, s, l);
                                break;
                            case "p":
                                if (!e.ctrlKey) return;
                                s = (0, h.findNextSelectedResult)(h.FindResultDirections.UP, s, l);
                                break;
                            default:
                                return
                        }
                        e.preventDefault(), (0, v.selectResult)(s)
                    }, this.renderRow = e => {
                        let {
                            row: t
                        } = e, n = this.props.results[t], {
                            selectedIndex: a
                        } = this.props, {
                            showScores: s
                        } = C.default.getCurrentConfig({
                            location: "62f4be_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        switch (n.type) {
                            case h.AutocompleterResultTypes.HEADER:
                                return (0, l.jsx)(N.Header, {
                                    children: n.record.text
                                }, "".concat(n.type, "-").concat(n.record.id));
                            case h.AutocompleterResultTypes.TEXT_CHANNEL:
                                return (0, l.jsx)(G, {
                                    id: this.getRowId(t),
                                    focused: a >= 0 && t === a,
                                    onClick: () => this.selectResult(n),
                                    onMouseEnter: () => this.focusResult(n),
                                    onFocus: this.focusNode,
                                    onContextMenu: this.handleContextMenu,
                                    channel: n.record,
                                    score: s ? n.score : void 0
                                }, "".concat(n.type, "-").concat(n.record.id));
                            case h.AutocompleterResultTypes.VOICE_CHANNEL:
                                return (0, l.jsx)(U, {
                                    id: this.getRowId(t),
                                    focused: a >= 0 && t === a,
                                    onClick: () => this.selectResult(n),
                                    onMouseEnter: () => this.focusResult(n),
                                    onFocus: this.focusNode,
                                    onContextMenu: this.handleContextMenu,
                                    channel: n.record,
                                    score: s ? n.score : void 0
                                }, "".concat(n.type, "-").concat(n.record.id));
                            case h.AutocompleterResultTypes.GUILD:
                                return (0, l.jsx)(P, {
                                    id: this.getRowId(t),
                                    focused: a >= 0 && t === a,
                                    onClick: () => this.selectResult(n),
                                    onMouseEnter: () => this.focusResult(n),
                                    onFocus: this.focusNode,
                                    onContextMenu: this.handleContextMenu,
                                    guild: n.record,
                                    score: s ? n.score : void 0
                                }, "".concat(n.type, "-").concat(n.record.id));
                            case h.AutocompleterResultTypes.USER:
                                return (0, l.jsx)(F, {
                                    id: this.getRowId(t),
                                    focused: a >= 0 && t === a,
                                    onClick: () => this.selectResult(n),
                                    onMouseEnter: () => this.focusResult(n),
                                    onFocus: this.focusNode,
                                    onContextMenu: this.handleContextMenu,
                                    user: n.record,
                                    comparator: n.comparator,
                                    score: s ? n.score : void 0
                                }, "".concat(n.type, "-").concat(n.record.id));
                            case h.AutocompleterResultTypes.GROUP_DM:
                                return (0, l.jsx)(w, {
                                    id: this.getRowId(t),
                                    focused: a >= 0 && t === a,
                                    onClick: () => this.selectResult(n),
                                    onMouseEnter: () => this.focusResult(n),
                                    onFocus: this.focusNode,
                                    onContextMenu: this.handleContextMenu,
                                    channel: n.record,
                                    score: s ? n.score : void 0
                                }, "".concat(n.type, "-").concat(n.record.id));
                            case h.AutocompleterResultTypes.APPLICATION:
                                return (0, l.jsx)(N.Application, {
                                    id: this.getRowId(t),
                                    focused: a >= 0 && t === a,
                                    onClick: () => this.selectResult(n),
                                    onMouseEnter: () => this.focusResult(n),
                                    onFocus: this.focusNode,
                                    application: n.record
                                }, "".concat(n.type, "-").concat(n.record.id));
                            case h.AutocompleterResultTypes.LINK:
                                return (0, l.jsx)(N.Link, {
                                    focused: a >= 0 && t === a,
                                    onClick: () => this.selectResult(n),
                                    onMouseEnter: () => this.focusResult(n),
                                    onFocus: this.focusNode,
                                    onContextMenu: this.handleContextMenu,
                                    link: n.record,
                                    score: s ? n.score : void 0,
                                    id: this.getRowId(t)
                                }, "".concat(n.type, "-").concat(n.record.id));
                            default:
                                return null
                        }
                    }
                }
            }

            function H(e) {
                let t = (0, o.useStateFromStoresObject)([x.default], () => x.default.getProps());
                return (0, l.jsx)(V, {
                    ...t,
                    ...e
                })
            }
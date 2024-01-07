            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return V
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("817736"),
                o = s.n(r),
                d = s("974667"),
                u = s("118810"),
                c = s("446674"),
                E = s("77078"),
                _ = s("252073"),
                T = s("272030"),
                I = s("642950"),
                S = s("465395"),
                N = s("510889"),
                g = s("161778"),
                f = s("242020"),
                A = s("766274"),
                L = s("42203"),
                m = s("305961"),
                C = s("102985"),
                O = s("697218"),
                h = s("941886"),
                R = s("155207"),
                D = s("987663"),
                M = s("449008"),
                G = s("158998"),
                x = s("287103"),
                p = s("900938"),
                U = s("347584"),
                v = s("49111"),
                j = s("782340"),
                P = s("800755"),
                y = s("241372"),
                b = s("212029");
            class B extends n.PureComponent {
                render() {
                    let {
                        onHeaderClick: e,
                        guildId: t,
                        guild: s,
                        ...n
                    } = this.props;
                    return null == t ? null : (0, a.jsx)(U.default, {
                        ...n,
                        guildId: t,
                        guild: s,
                        onHeaderClick: this.handleHeaderClick,
                        onUserContextMenu: this.handleUserContextMenu,
                        onChannelContextMenu: this.handleChannelContextMenu,
                        onTargetContextMenu: this.handleTargetContextMenu
                    })
                }
                constructor(...e) {
                    super(...e), this.handleHeaderClick = () => {
                        let {
                            onHeaderClick: e,
                            log: t
                        } = this.props;
                        null == e || e(t)
                    }, this.handleUserContextMenu = e => {
                        let {
                            log: t,
                            guildId: n
                        } = this.props, {
                            user: l
                        } = t;
                        null != l && null != n && (0, T.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await s.el("471085").then(s.bind(s, "471085"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                guildId: n,
                                user: l
                            })
                        })
                    }, this.handleChannelContextMenu = e => {
                        let {
                            log: t,
                            guildId: n
                        } = this.props, l = m.default.getGuild(n);
                        null != t.options.channel && null != l && (0, T.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await s.el("887127").then(s.bind(s, "887127"));
                            return s => (0, a.jsx)(e, {
                                ...s,
                                channel: t.options.channel
                            })
                        })
                    }, this.handleTargetContextMenu = e => {
                        let {
                            log: t,
                            guildId: n
                        } = this.props;
                        switch (t.targetType) {
                            case v.AuditLogTargetTypes.CHANNEL:
                            case v.AuditLogTargetTypes.CHANNEL_OVERWRITE:
                                let l = L.default.getChannel(t.targetId),
                                    i = m.default.getGuild(n);
                                if (null != l && null != i) return (0, T.openContextMenuLazy)(e, async () => {
                                    let {
                                        default: e
                                    } = await s.el("887127").then(s.bind(s, "887127"));
                                    return t => (0, a.jsx)(e, {
                                        ...t,
                                        channel: l
                                    })
                                });
                                return (0, T.openContextMenuLazy)(e, async () => {
                                    let {
                                        default: e
                                    } = await s.el("443070").then(s.bind(s, "443070"));
                                    return s => (0, a.jsx)(e, {
                                        ...s,
                                        id: t.targetId,
                                        label: j.default.Messages.COPY_ID_UNKNOWN
                                    })
                                });
                            case v.AuditLogTargetTypes.USER:
                                let r = O.default.getUser(t.targetId);
                                if (null != r && null != n) return (0, T.openContextMenuLazy)(e, async () => {
                                    let {
                                        default: e
                                    } = await s.el("471085").then(s.bind(s, "471085"));
                                    return t => (0, a.jsx)(e, {
                                        ...t,
                                        guildId: n,
                                        user: r
                                    })
                                })
                        }
                        return null
                    }
                }
            }

            function F(e) {
                let {
                    logs: t,
                    guildId: s,
                    guild: l,
                    expandedId: i,
                    lastExpandedId: r,
                    scroller: o,
                    setExpandedRef: u,
                    setLastExpandedRef: c,
                    onHeaderClick: E,
                    onContentClick: _
                } = e, T = n.useRef(o);
                n.useEffect(() => {
                    T.current = o
                }, [o]);
                let I = (0, N.default)("audit-log", T);
                return (0, a.jsx)(d.ListNavigatorProvider, {
                    navigator: I,
                    children: (0, a.jsx)(d.ListNavigatorContainer, {
                        children: e => {
                            let {
                                ref: n,
                                ...o
                            } = e;
                            return (0, a.jsx)("div", {
                                ref: n,
                                ...o,
                                children: t.map(e => {
                                    let t = i === e.id,
                                        n = r === e.id;
                                    return (0, a.jsx)(B, {
                                        guildId: s,
                                        guild: l,
                                        ref: t ? u : n ? c : null,
                                        className: P.row,
                                        onHeaderClick: E,
                                        onContentClick: _,
                                        log: e,
                                        expanded: t
                                    }, e.id)
                                })
                            })
                        }
                    })
                })
            }
            class H extends n.PureComponent {
                componentDidMount() {
                    (0, _.fetchLogs)(this.props.guildId), document.addEventListener("click", this.handleOutsideClick)
                }
                componentWillUnmount() {
                    document.removeEventListener("click", this.handleOutsideClick)
                }
                componentDidUpdate(e, t) {
                    this.state.expandedId !== t.expandedId && this.fixScroll(), !this.props.showLoadMore && this.props.logs.length !== e.logs.length && null != this._scrollerRef && this.isScrollerAtBottom() && (0, _.fetchNextLogPage)(this.props.guildId, !0)
                }
                isScrollerAtBottom() {
                    var e;
                    return (null === (e = this._scrollerRef) || void 0 === e ? void 0 : e.isScrolledToBottom()) || !1
                }
                fixScroll() {
                    let e = this._scrollerRef;
                    if (null == e) return;
                    let t = this.getRects(),
                        s = this._prevRects;
                    if (null == t.expanded || null == t.lastExpanded || null == s.expanded || t.expanded.top < t.lastExpanded.top) return;
                    let a = s.expanded.height - t.lastExpanded.height,
                        n = e.getScrollerState(),
                        l = n.scrollTop - a;
                    e.scrollTo({
                        to: l
                    })
                }
                getRects() {
                    let e = {
                        lastExpanded: null,
                        expanded: null
                    };
                    if (null != this._lastExpandedRef) {
                        let t = o.findDOMNode(this._lastExpandedRef);
                        (0, u.isElement)(t) && (e.lastExpanded = t.getBoundingClientRect())
                    }
                    if (null != this._expandedRef) {
                        let t = o.findDOMNode(this._expandedRef);
                        (0, u.isElement)(t) && (e.expanded = t.getBoundingClientRect())
                    }
                    return e
                }
                renderUserQuickSelectValue(e) {
                    var t;
                    return null !== (t = e.valueLabel) && void 0 !== t ? t : e.label
                }
                renderActionQuickSelectValue(e) {
                    var t;
                    return null !== (t = e.valueLabel) && void 0 !== t ? t : e.label
                }
                renderHeader() {
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("div", {
                            className: P.customHeader,
                            children: [(0, a.jsx)(E.FormTitle, {
                                tag: E.FormTitleTags.H1,
                                className: P.formTitle,
                                children: j.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG
                            }), this.renderHeaderDropdowns()]
                        }), (0, a.jsx)(E.FormDivider, {
                            className: P.divider
                        })]
                    })
                }
                renderSpinner() {
                    return (0, a.jsx)(E.Spinner, {
                        type: E.Spinner.Type.SPINNING_CIRCLE
                    })
                }
                renderContent() {
                    let {
                        expandedId: e,
                        lastExpandedId: t
                    } = this.state, {
                        logs: n,
                        theme: l,
                        hide: i,
                        isInitialLoading: r,
                        isLoading: o,
                        hasError: d,
                        guildId: u,
                        guild: c
                    } = this.props;
                    if (i) return (0, a.jsx)(I.default, {});
                    if (o || r) return this.renderSpinner();
                    if (0 === n.length) {
                        let e = d ? j.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_ERROR_BODY : j.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_EMPTY_BODY,
                            t = d ? j.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_ERROR_TITLE : j.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_EMPTY_TITLE;
                        return (0, a.jsxs)(h.default, {
                            theme: l,
                            className: P.empty,
                            children: [(0, a.jsx)(h.EmptyStateImage, {
                                darkSrc: s("935855"),
                                lightSrc: s("847598"),
                                width: 272,
                                height: 130
                            }), (0, a.jsx)(h.EmptyStateText, {
                                note: e,
                                style: {
                                    maxWidth: 300
                                },
                                children: t
                            })]
                        })
                    }
                    return (0, a.jsx)(F, {
                        logs: n,
                        guildId: u,
                        guild: c,
                        expandedId: e,
                        lastExpandedId: t,
                        setExpandedRef: this.handleSetExpandedRef,
                        setLastExpandedRef: this.handleSetLastExpandedRef,
                        onHeaderClick: this.handleHeaderClick,
                        onContentClick: this.handleContentClick,
                        scroller: this._scrollerRef
                    })
                }
                render() {
                    let {
                        isLoadingNextPage: e,
                        hide: t,
                        isLoading: s
                    } = this.props;
                    return (0, a.jsx)("div", {
                        className: y.customColumn,
                        children: (0, a.jsx)("div", {
                            className: y.customContainer,
                            children: (0, a.jsx)(E.AdvancedScrollerAuto, {
                                className: i(y.customScroller, P.scroller),
                                onScroll: this.handleOnScroll,
                                ref: this.handleSetScrollerRef,
                                children: (0, a.jsx)("div", {
                                    className: P.content,
                                    ref: this._contentRef,
                                    children: (0, a.jsxs)(E.FocusRingScope, {
                                        containerRef: this._contentRef,
                                        children: [this.renderHeader(), this.renderContent(), this.renderLoadMore(), !e || t || s ? null : this.renderSpinner()]
                                    })
                                })
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._clickedInside = !1, this._scrollerRef = null, this._prevRects = this.getRects(), this._contentRef = n.createRef(), this.state = {
                        expandedId: null,
                        lastExpandedId: null,
                        actionFilterQuery: ""
                    }, this.renderActionQuickSelectItem = (e, t) => {
                        var s;
                        let {
                            actionFilter: n
                        } = this.props, l = (0, f.getActionType)(e.value), i = (0, f.getTargetType)(e.value), r = e.value === n;
                        return (0, a.jsxs)(E.ComboboxItem, {
                            value: e.value,
                            selectedColor: E.ComboboxItem.Colors.BRAND,
                            children: [(0, a.jsx)(E.ComboboxItem.Icon, {
                                children: (0, a.jsx)(U.AuditLogIcon, {
                                    themeOverride: r ? v.ThemeTypes.DARK : null,
                                    actionType: l,
                                    targetType: i,
                                    action: e.value
                                })
                            }), (0, a.jsx)(E.ComboboxItem.Label, {
                                children: e.label
                            }), (0, a.jsx)(E.ComboboxItem.Checkmark, {})]
                        }, null !== (s = e.key) && void 0 !== s ? s : t)
                    }, this.renderUserQuickSelectItem = (e, t) => {
                        var s;
                        if (e.user instanceof A.default) {
                            let t = e.user;
                            return (0, a.jsxs)(E.ComboboxItem, {
                                value: t.id,
                                selectedColor: E.ComboboxItem.Colors.BRAND,
                                children: [(0, a.jsx)(E.ComboboxItem.Icon, {
                                    children: (0, a.jsx)(E.Avatar, {
                                        size: E.AvatarSizes.SIZE_32,
                                        src: t.getAvatarURL(this.props.guildId, 32),
                                        "aria-label": t.username,
                                        className: P.avatar
                                    })
                                }), (0, a.jsxs)(E.ComboboxItem.Label, {
                                    children: [(0, a.jsx)(E.Text, {
                                        variant: "text-sm/normal",
                                        children: G.default.getUserTag(t, {
                                            mode: "username"
                                        })
                                    }), !t.isPomelo() && (0, a.jsxs)(E.Text, {
                                        variant: "text-xs/normal",
                                        className: P.discriminator,
                                        children: ["#", t.discriminator]
                                    })]
                                }), (0, a.jsx)(E.ComboboxItem.Checkmark, {})]
                            }, t.id)
                        }
                        return (0, a.jsxs)(E.ComboboxItem, {
                            value: e.value,
                            selectedColor: E.ComboboxItem.Colors.BRAND,
                            children: [(0, a.jsx)(E.ComboboxItem.Icon, {
                                children: (0, a.jsx)(R.default, {
                                    width: 30,
                                    height: 30
                                })
                            }), (0, a.jsx)(E.ComboboxItem.Label, {
                                children: e.label
                            }), (0, a.jsx)(E.ComboboxItem.Checkmark, {})]
                        }, null !== (s = e.key) && void 0 !== s ? s : t)
                    }, this.renderHeaderDropdowns = () => {
                        var e, t;
                        let {
                            actionFilter: s,
                            hide: n,
                            userIdFilter: l,
                            moderators: r
                        } = this.props;
                        if (n) return null;
                        let o = D.ACTION_FILTER_ITEMS(),
                            d = null !== (e = o.find(e => {
                                let {
                                    value: t
                                } = e;
                                return s === t
                            })) && void 0 !== e ? e : o[0],
                            u = {
                                label: j.default.Messages.GUILD_SETTINGS_FILTER_ALL_USERS,
                                valueLabel: j.default.Messages.GUILD_SETTINGS_FILTER_ALL,
                                value: null
                            },
                            c = [u, ...r].map(e => {
                                var t;
                                if (!(e instanceof A.default)) return e;
                                return {
                                    label: (t = e).username,
                                    value: t.id,
                                    user: t
                                }
                            }),
                            E = null !== (t = c.find(e => {
                                let {
                                    value: t
                                } = e;
                                return t === l
                            })) && void 0 !== t ? t : u;
                        return (0, a.jsxs)("div", {
                            className: P.quickSelect,
                            children: [(0, a.jsx)(S.default, {
                                popoutClassName: i(P.selectFilterPopout, b.elevationBorderHigh),
                                items: c,
                                renderItem: this.renderUserQuickSelectItem,
                                renderValue: this.renderUserQuickSelectValue,
                                value: E,
                                onChange: this.handleFilterUserChange,
                                label: j.default.Messages.GUILD_SETTINGS_FILTER_USER,
                                placeholder: j.default.Messages.SEARCH_MEMBERS,
                                popoutProps: {
                                    autoInvert: !1,
                                    position: "bottom"
                                }
                            }), (0, a.jsx)(S.default, {
                                placeholder: j.default.Messages.SEARCH_ACTIONS,
                                label: j.default.Messages.GUILD_SETTINGS_FILTER_ACTION,
                                popoutClassName: i(P.selectFilterPopout, b.elevationBorderLow),
                                items: o,
                                renderItem: this.renderActionQuickSelectItem,
                                renderValue: this.renderActionQuickSelectValue,
                                value: d,
                                onChange: this.handleFilterActionChange,
                                popoutProps: {
                                    autoInvert: !1,
                                    position: "bottom"
                                }
                            })]
                        })
                    }, this.renderLoadMore = () => {
                        let {
                            showLoadMore: e,
                            hasOlderLogs: t,
                            hide: s
                        } = this.props;
                        if (e && t && !s) return (0, a.jsx)(E.Button, {
                            color: E.Button.Colors.PRIMARY,
                            className: P.loadMore,
                            onClick: this.handleFetchNextPage,
                            children: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_LOAD_MORE
                        })
                    }, this.handleFilterActionChange = e => {
                        (0, _.filterByAction)(e, this.props.guildId)
                    }, this.handleFilterUserChange = e => {
                        (0, _.filterByUserId)(e, this.props.guildId)
                    }, this.handleHeaderClick = e => {
                        let {
                            expandedId: t
                        } = this.state;
                        t !== e.id ? (this._clickedInside = !0, this.setState({
                            expandedId: e.id,
                            lastExpandedId: t
                        }), this._prevRects = this.getRects()) : (this._expandedRef = null, this._lastExpandedRef = null, null != t && (this._prevRects = this.getRects()), this.setState({
                            expandedId: null,
                            lastExpandedId: null
                        }))
                    }, this.handleOutsideClick = () => {
                        null == this.state.expandedId || this._clickedInside ? null != this.state.expandedId && (this._clickedInside = !1) : (this._expandedRef = null, this._lastExpandedRef = null, this.setState({
                            expandedId: null,
                            lastExpandedId: null
                        }), this._prevRects = this.getRects())
                    }, this.handleContentClick = e => {
                        this._clickedInside = !0, e.stopPropagation()
                    }, this.handleSetScrollerRef = e => {
                        this._scrollerRef = e
                    }, this.handleOnScroll = () => {
                        this.isScrollerAtBottom() && this.handleFetchNextPage()
                    }, this.handleFetchNextPage = () => {
                        (0, _.fetchNextLogPage)(this.props.guildId)
                    }, this.handleActionFilterQueryChange = e => {
                        this.setState({
                            actionFilterQuery: e
                        })
                    }, this.handleActionFilterQueryClear = () => {
                        this.setState({
                            actionFilterQuery: ""
                        })
                    }, this.handleSetExpandedRef = e => {
                        this._expandedRef = e
                    }, this.handleSetLastExpandedRef = e => {
                        this._lastExpandedRef = e
                    }
                }
            }
            var V = c.default.connectStores([x.default, p.default, m.default, g.default, C.default, O.default], () => {
                let e = p.default.getGuildId(),
                    t = m.default.getGuild(e),
                    s = x.default.logs,
                    a = x.default.userIds.map(e => O.default.getUser(e)).filter(M.isNotNullish);
                return {
                    guildId: e,
                    guild: t,
                    moderators: a,
                    isInitialLoading: x.default.isInitialLoading,
                    isLoading: x.default.isLoading,
                    isLoadingNextPage: x.default.isLoadingNextPage,
                    showLoadMore: x.default.groupedFetchCount > 2,
                    hasError: x.default.hasError,
                    hasOlderLogs: x.default.hasOlderLogs,
                    logs: null != s && null != t ? D.transformLogs(s, t) : [],
                    actionFilter: x.default.actionFilter,
                    userIdFilter: x.default.userIdFilter,
                    theme: g.default.theme,
                    hide: C.default.enabled
                }
            })(H)
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["22794"], {
        58682: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var n = s("37983"),
                a = s("884691"),
                l = s("446674"),
                r = s("77078"),
                i = s("157552"),
                d = s("677114"),
                o = s("782340");
            class u extends a.Component {
                componentDidMount() {
                    let {
                        applicationId: e,
                        branches: t,
                        onHasBranchesChange: s
                    } = this.props;
                    (0, i.fetchBranchesForApplication)(e), null == s || s(t.length > 0)
                }
                componentDidUpdate(e) {
                    let {
                        onHasBranchesChange: t,
                        branches: s
                    } = this.props, n = s.length > 0;
                    null != t && n !== e.branches.length > 0 && t(n)
                }
                render() {
                    let {
                        branches: e,
                        selectedBranchId: t,
                        applicationId: s,
                        includeMaster: a,
                        hide: l,
                        className: i
                    } = this.props;
                    if (0 === e.length || l) return null;
                    let d = a ? e : e.filter(e => e.id !== s);
                    return (0, n.jsx)(r.SingleSelect, {
                        options: d.map(e => ({
                            label: e.getName(s),
                            value: e.id
                        })),
                        placeholder: o.default.Messages.CREATE_STORE_CHANNEL_SELECT_BRANCH,
                        value: t,
                        onChange: this.handleChange,
                        className: i
                    })
                }
                constructor(...e) {
                    super(...e), this.handleChange = e => {
                        this.props.onChange(e)
                    }
                }
            }
            u.defaultProps = {
                includeMaster: !1
            };
            var h = l.default.connectStores([d.default], e => {
                let {
                    applicationId: t
                } = e;
                return {
                    branches: d.default.getBranches(t)
                }
            })(u)
        },
        932577: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var n = s("37983"),
                a = s("884691"),
                l = s("446674"),
                r = s("77078"),
                i = s("465527"),
                d = s("552712"),
                o = s("782340");
            class u extends a.Component {
                componentDidMount() {
                    let {
                        applicationId: e,
                        skus: t,
                        selectedSkuId: s,
                        onChange: n
                    } = this.props;
                    null == t || 0 === t.length ? (0, i.fetchSKUsForApplication)(e, !1) : 1 === t.length && null == s && n(t[0].id)
                }
                componentDidUpdate() {
                    let {
                        skus: e,
                        selectedSkuId: t,
                        onChange: s
                    } = this.props;
                    null != e && 1 === e.length && null == t && s(e[0].id)
                }
                render() {
                    let {
                        skus: e,
                        selectedSkuId: t,
                        className: s
                    } = this.props, a = null != e && 0 === e.length;
                    return (0, n.jsx)(r.SingleSelect, {
                        options: null != e ? e.map(e => ({
                            label: e.name,
                            value: e.id
                        })) : [],
                        placeholder: a ? o.default.Messages.CREATE_STORE_CHANNEL_NO_SKUS : o.default.Messages.CREATE_STORE_CHANNEL_SELECT_SKU,
                        value: t,
                        onChange: this.handleChange,
                        className: s,
                        isDisabled: a
                    })
                }
                constructor(...e) {
                    super(...e), this.handleChange = e => {
                        this.props.onChange(e)
                    }
                }
            }
            var h = l.default.connectStores([d.default], e => {
                let {
                    applicationId: t
                } = e;
                return {
                    skus: d.default.getForApplication(t)
                }
            })(u)
        },
        581354: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ChannelTypeBadge: function() {
                    return eh
                },
                AddMembers: function() {
                    return ec
                },
                default: function() {
                    return eC
                }
            });
            var n, a, l = s("37983"),
                r = s("884691"),
                i = s("414456"),
                d = s.n(i),
                o = s("627445"),
                u = s.n(o),
                h = s("917351"),
                c = s.n(h),
                E = s("759843"),
                C = s("171210"),
                N = s("446674"),
                p = s("77078"),
                _ = s("437140"),
                T = s("851387"),
                m = s("58682"),
                A = s("932577"),
                f = s("798609"),
                g = s("716241"),
                I = s("679653"),
                M = s("454273"),
                S = s("462430"),
                O = s("298878"),
                L = s("680986"),
                R = s("690563"),
                x = s("393414"),
                v = s("923510"),
                y = s("178225"),
                D = s("286470"),
                P = s("233069"),
                G = s("42203"),
                b = s("546463"),
                j = s("26989"),
                U = s("305961"),
                H = s("957255"),
                F = s("27618"),
                B = s("697218"),
                w = s("555158"),
                k = s("476765"),
                Y = s("593195"),
                V = s("361777"),
                K = s("991497"),
                z = s("393621"),
                W = s("178837"),
                X = s("45029"),
                q = s("990745"),
                J = s("190986"),
                Q = s("733160"),
                Z = s("368121"),
                $ = s("944633"),
                ee = s("228427"),
                et = s("547896"),
                es = s("956089"),
                en = s("404008"),
                ea = s("701909"),
                el = s("49111"),
                er = s("606762"),
                ei = s("953371"),
                ed = s("843455"),
                eo = s("782340"),
                eu = s("935518");

            function eh(e) {
                let {
                    isNew: t,
                    isBeta: s
                } = e, n = null;
                return !0 === t ? n = (0, l.jsx)(es.TextBadge, {
                    text: eo.default.Messages.CHANNEL_TYPE_NEW,
                    className: eu.newBadge,
                    color: C.default.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER
                }) : !0 === s && (n = (0, l.jsx)(O.default, {
                    className: eu.newBadge
                })), n
            }

            function ec(e) {
                let {
                    onChange: t,
                    guildId: s,
                    channelType: n,
                    description: a
                } = e, [i, d] = r.useState({}), o = (0, N.useStateFromStores)([U.default], () => U.default.getGuild(s)), u = n === el.ChannelTypes.GUILD_STAGE_VOICE;
                return (r.useEffect(() => {
                    t(i)
                }, [i, t]), null == o) ? null : (0, l.jsx)(p.ModalContent, {
                    className: eu.addMembersContainer,
                    children: (0, l.jsx)(S.AddMembersBody, {
                        guild: o,
                        channel: null,
                        permission: u ? v.MODERATE_STAGE_CHANNEL_PERMISSIONS : (0, P.getAccessPermissions)(n),
                        pendingAdditions: i,
                        setPendingAdditions: d,
                        isStageChannel: u,
                        description: a
                    })
                })
            }(n = a || (a = {})).CHANNEL_INFO = "CHANNEL_INFO", n.ADD_MEMBERS = "ADD_MEMBERS";
            class eE extends r.PureComponent {
                componentDidMount() {
                    let {
                        _input: e
                    } = this;
                    null != e && e.select();
                    let {
                        guildId: t,
                        applications: s,
                        canCreateStoreChannel: n
                    } = this.props;
                    n && null == s && T.default.fetchApplications(t), g.default.trackWithMetadata(el.AnalyticEvents.OPEN_MODAL, {
                        type: "Create Channel"
                    }), L.GuildForumExperiment.trackExposure({
                        guildId: t,
                        location: "45d324_1"
                    })
                }
                componentDidUpdate(e, t) {
                    !t.isPrivate && this.state.isPrivate && this.state.channelType === el.ChannelTypes.GUILD_ANNOUNCEMENT && this.setState({
                        channelType: el.ChannelTypes.GUILD_TEXT
                    }), !t.isPrivate && this.state.isPrivate && g.default.trackWithMetadata(el.AnalyticEvents.OPEN_MODAL, {
                        type: "Create Private Channel"
                    })
                }
                getGuildId() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                    return e.guildId
                }
                canSubmit() {
                    let {
                        canViewChannels: e,
                        canConnect: t
                    } = this.props, {
                        isPrivate: s,
                        channelType: n,
                        skuId: a,
                        name: l
                    } = this.state;
                    return "" !== l && "" !== l.trim() && (!s || !!(0, M.canCreatePrivateChannel)(n, e, t)) && (n !== el.ChannelTypes.GUILD_STORE || null != a) && !0
                }
                getIconComponent() {
                    let {
                        isPrivate: e,
                        channelType: t
                    } = this.state;
                    switch (t) {
                        case el.ChannelTypes.GUILD_TEXT:
                            return e ? V.default : Y.default;
                        case el.ChannelTypes.GUILD_FORUM:
                            return K.default;
                        case el.ChannelTypes.GUILD_MEDIA:
                            return q.default;
                        case el.ChannelTypes.GUILD_VOICE:
                            return e ? $.default : Z.default;
                        case el.ChannelTypes.GUILD_STORE:
                            return et.default;
                        case el.ChannelTypes.GUILD_ANNOUNCEMENT:
                            return Q.default;
                        case el.ChannelTypes.GUILD_STAGE_VOICE:
                            return ee.default;
                        default:
                            return (0, P.isGuildTextChannelType)(t) ? Y.default : ed.NOOP_NULL
                    }
                }
                renderHeader() {
                    var e, t, s;
                    let n;
                    let {
                        cloneChannel: a,
                        categoryId: r,
                        onClose: i
                    } = this.props, {
                        channelType: d
                    } = this.state;
                    let o = (e = a, t = d, null != e ? eo.default.Messages.CLONE_CHANNEL : t === el.ChannelTypes.GUILD_CATEGORY ? eo.default.Messages.CREATE_CATEGORY : eo.default.Messages.CREATE_CHANNEL);
                    if (null != r) {
                        ;
                        let e = G.default.getChannel(r);
                        n = (0, l.jsx)(p.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: eu.subtitle,
                            children: eo.default.Messages.IN_CATEGORY.format({
                                categoryName: null !== (s = null == e ? void 0 : e.name) && void 0 !== s ? s : ""
                            })
                        })
                    }
                    return (0, l.jsxs)(p.ModalHeader, {
                        separator: !1,
                        children: [(0, l.jsxs)("div", {
                            className: eu.header,
                            children: [(0, l.jsx)(p.Heading, {
                                id: this.headerId,
                                variant: "heading-lg/semibold",
                                className: eu.title,
                                children: o
                            }), n]
                        }), (0, l.jsx)(p.ModalCloseButton, {
                            onClick: i,
                            className: eu.closeButton
                        })]
                    })
                }
                renderName() {
                    let e;
                    let {
                        cloneChannel: t,
                        guildId: n
                    } = this.props, {
                        errors: a,
                        channelType: r
                    } = this.state;
                    (null == a ? void 0 : a.name) != null && (e = (0, l.jsx)(p.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        className: eu.error,
                        children: a.name
                    }));
                    let i = r === el.ChannelTypes.GUILD_CATEGORY,
                        d = i ? eo.default.Messages.CATEGORY_NAME : eo.default.Messages.FORM_LABEL_CHANNEL_NAME,
                        o = null != t ? (0, l.jsx)(p.FormText, {
                            className: eu.channelNameNote,
                            type: p.FormText.Types.DESCRIPTION,
                            children: eo.default.Messages.CLONE_CHANNEL_HELP.format({
                                name: (0, I.computeChannelName)(t, B.default, F.default, !0)
                            })
                        }) : r === el.ChannelTypes.GUILD_FORUM ? (0, l.jsx)(p.FormText, {
                            className: eu.channelNameNote,
                            type: p.FormText.Types.DESCRIPTION,
                            children: eo.default.Messages.FORUM_CHANNEL_NAME_NOTE.format({
                                forumUpsellHook: (e, t) => (0, l.jsx)(p.Anchor, {
                                    onClick: () => (0, p.openModalLazy)(async () => {
                                        let {
                                            default: e
                                        } = await s.el("135430").then(s.bind(s, "135430"));
                                        return t => (0, l.jsx)(e, {
                                            ...t,
                                            guildId: n
                                        })
                                    }),
                                    children: e
                                }, t)
                            })
                        }) : null,
                        u = this.getIconComponent();
                    return (0, l.jsx)(k.UID, {
                        children: t => (0, l.jsxs)(p.FormItem, {
                            title: d,
                            tag: "label",
                            htmlFor: t,
                            titleClassName: eu.sectionTitle,
                            className: eu.name,
                            children: [(0, l.jsx)(p.TextInput, {
                                value: this.state.name,
                                onChange: this.handleNameChange,
                                id: t,
                                inputRef: this.setInputRef,
                                maxLength: 100,
                                placeholder: function(e) {
                                    switch (e) {
                                        case el.ChannelTypes.GUILD_CATEGORY:
                                            return eo.default.Messages.CATEGORY_NAME_PLACEHOLDER;
                                        case el.ChannelTypes.GUILD_FORUM:
                                            return eo.default.Messages.FORUM_CHANNEL_NAME_PLACEHOLDER;
                                        default:
                                            return eo.default.Messages.CHANNEL_NAME_PLACEHOLDER
                                    }
                                }(r),
                                className: eu.inputWrapper,
                                inputClassName: i ? void 0 : eu.inputInner,
                                prefixElement: i ? null : (0, l.jsx)(u, {
                                    className: eu.inputPrefix,
                                    width: 16,
                                    height: 16
                                }),
                                autoFocus: !0
                            }), e, o]
                        })
                    })
                }
                renderType() {
                    let {
                        cloneChannel: e,
                        applications: t,
                        canCreateStoreChannel: s,
                        canCreateAnnouncementChannel: n,
                        canCreateStageChannel: a,
                        canCreateForumChannel: r,
                        canCreateMediaChannel: i
                    } = this.props, {
                        channelType: d,
                        isPrivate: o
                    } = this.state;
                    if (null != e || d === el.ChannelTypes.GUILD_CATEGORY) return;
                    let u = null != t && t.length > 0;
                    return (0, l.jsx)(p.FormItem, {
                        className: eu.type,
                        title: eo.default.Messages.CHANNEL_TYPE,
                        children: (0, l.jsx)(p.RadioGroup, {
                            options: function(e) {
                                let {
                                    isPrivate: t,
                                    showStoreChannelOption: s,
                                    showAnnouncementChannelOption: n,
                                    canCreateStageChannel: a,
                                    canCreateForumChannel: r,
                                    canCreateMediaChannel: i
                                } = e, d = [{
                                    icon: t ? V.default : Y.default,
                                    label: eo.default.Messages.TEXT_CHANNEL_TYPE,
                                    value: el.ChannelTypes.GUILD_TEXT,
                                    description: eo.default.Messages.CREATE_TEXT_CHANNEL_DESCRIPTION
                                }];
                                return d.push({
                                    icon: t ? $.default : Z.default,
                                    label: eo.default.Messages.VOICE_CHANNEL_TYPE,
                                    value: el.ChannelTypes.GUILD_VOICE,
                                    description: eo.default.Messages.CREATE_VOICE_CHANNEL_DESCRIPTION
                                }), r && d.push({
                                    icon: t ? z.default : K.default,
                                    label: eo.default.Messages.FORUM_CHANNEL_TYPE,
                                    value: el.ChannelTypes.GUILD_FORUM,
                                    description: (0, l.jsxs)(p.Text, {
                                        variant: "text-sm/normal",
                                        color: "header-secondary",
                                        className: eu.radioLabelDescription,
                                        children: [eo.default.Messages.FORUM_CHANNEL_DESCRIPTION, (0, l.jsx)("br", {}), eo.default.Messages.LEARN_MORE_CLICK.format({
                                            onClick: () => {
                                                open(ei.COMMUNITY_PORTAL_FORUM_PAGE)
                                            }
                                        })]
                                    })
                                }), i && d.push({
                                    icon: t ? J.default : q.default,
                                    label: eo.default.Messages.MEDIA_CHANNEL_TYPE,
                                    value: el.ChannelTypes.GUILD_MEDIA,
                                    description: (0, l.jsxs)(p.Text, {
                                        variant: "text-sm/normal",
                                        color: "header-secondary",
                                        className: eu.radioLabelDescription,
                                        children: [eo.default.Messages.CREATE_MEDIA_CHANNEL_DESCRIPTION, (0, l.jsx)("br", {}), eo.default.Messages.LEARN_MORE_CLICK.format({
                                            onClick: () => {
                                                open(ea.default.getCreatorSupportArticleURL(el.HelpdeskArticles.MEDIA_CHANNEL))
                                            }
                                        })]
                                    }),
                                    isBeta: !0
                                }), n && d.push({
                                    icon: Q.default,
                                    iconSize: 24,
                                    label: eo.default.Messages.NEWS_CHANNEL_TYPE,
                                    value: el.ChannelTypes.GUILD_ANNOUNCEMENT,
                                    description: eo.default.Messages.CREATE_NEWS_CHANNEL_DESCRIPTION
                                }), s && d.push({
                                    icon: et.default,
                                    iconSize: 24,
                                    label: eo.default.Messages.STORE_CHANNEL_TYPE,
                                    value: el.ChannelTypes.GUILD_STORE,
                                    description: eo.default.Messages.CREATE_STORE_CHANNEL_DESCRIPTION
                                }), a && d.push({
                                    icon: ee.default,
                                    iconSize: 24,
                                    label: eo.default.Messages.STAGE_VOICE_CHANNEL_TYPE,
                                    value: el.ChannelTypes.GUILD_STAGE_VOICE,
                                    description: eo.default.Messages.CREATE_STAGE_CHANNEL_DESCRIPTION
                                }), d.map(e => {
                                    let {
                                        icon: t,
                                        iconSize: s,
                                        label: n,
                                        value: a,
                                        description: r,
                                        isNew: i,
                                        isBeta: d
                                    } = e;
                                    return {
                                        name: (0, l.jsxs)("div", {
                                            className: eu.radioItemName,
                                            children: [(0, l.jsx)(t, {
                                                ...null != s ? {
                                                    width: s,
                                                    height: s
                                                } : null,
                                                className: eu.icon,
                                                background: eu.background,
                                                foreground: eu.foreground
                                            }), (0, l.jsxs)("div", {
                                                children: [(0, l.jsxs)(p.Text, {
                                                    variant: "text-md/medium",
                                                    className: eu.radioLabelName,
                                                    children: [n, (0, l.jsx)(eh, {
                                                        isNew: i,
                                                        isBeta: d
                                                    })]
                                                }), "string" == typeof r ? (0, l.jsx)(p.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "header-secondary",
                                                    className: eu.radioLabelDescription,
                                                    children: r
                                                }) : r]
                                            })]
                                        }),
                                        value: a,
                                        radioBarClassName: eu.radioBar,
                                        radioItemIconClassName: eu.radioBarIcon
                                    }
                                })
                            }({
                                isPrivate: o,
                                showStoreChannelOption: s && u,
                                showAnnouncementChannelOption: n,
                                canCreateStageChannel: a,
                                canCreateForumChannel: r,
                                canCreateMediaChannel: i
                            }),
                            value: d,
                            size: p.RadioGroup.Sizes.NOT_SET,
                            onChange: this.handleTypeChange,
                            itemInfoClassName: eu.radioBarLabel
                        })
                    })
                }
                renderChannelTypeDescription(e) {
                    let t;
                    return (e === el.ChannelTypes.GUILD_ANNOUNCEMENT && (t = eo.default.Messages.FORM_HELP_NEWS.format({
                        documentationLink: ea.default.getArticleURL(el.HelpdeskArticles.ANNOUNCEMENT_CHANNELS)
                    })), null == t) ? null : (0, l.jsx)(p.FormText, {
                        className: eu.channelTypeDescription,
                        type: p.FormText.Types.DESCRIPTION,
                        children: t
                    })
                }
                renderStoreOptions() {
                    let {
                        applications: e
                    } = this.props, {
                        applicationId: t,
                        skuId: s,
                        branchId: n,
                        showBranches: a,
                        hasBranches: i
                    } = this.state;
                    if (null == e || 0 === e.length) throw Error("Unexpected empty applications");
                    return (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(p.FormTitle, {
                            tag: "h5",
                            children: eo.default.Messages.CREATE_STORE_CHANNEL_APPLICATION
                        }), (0, l.jsx)(p.SingleSelect, {
                            options: e.map(e => ({
                                label: e.name,
                                value: e.id
                            })),
                            placeholder: eo.default.Messages.CREATE_STORE_CHANNEL_SELECT_APPLICATION,
                            value: t,
                            onChange: this.handleApplicationChange,
                            className: eu.storeChannelOptionSelector
                        }), null != t ? (0, l.jsxs)(r.Fragment, {
                            children: [(0, l.jsx)(p.FormTitle, {
                                tag: "h5",
                                children: eo.default.Messages.CREATE_STORE_CHANNEL_SKU
                            }), (0, l.jsx)(A.default, {
                                applicationId: t,
                                onChange: this.handleSKUChange,
                                selectedSkuId: s,
                                className: eu.storeChannelOptionSelector
                            }, t)]
                        }) : null, null != t && i ? (0, l.jsxs)(p.FormSwitch, {
                            hideBorder: !0,
                            onChange: this.handleShowBranchesToggle,
                            value: a,
                            note: eo.default.Messages.CREATE_STORE_CHANNEL_BETA_NOTE.format({
                                devPortalUrl: el.MarketingURLs.API_DOCS_GAME_AND_SERVER_MANAGEMENT
                            }),
                            children: [(0, l.jsx)(W.default, {
                                className: eu.switchIcon
                            }), eo.default.Messages.CREATE_STORE_CHANNEL_BETA_TITLE]
                        }) : null, null != t ? (0, l.jsxs)(r.Fragment, {
                            children: [a ? (0, l.jsx)(p.FormTitle, {
                                tag: "h5",
                                children: eo.default.Messages.CREATE_STORE_CHANNEL_BRANCH
                            }) : null, (0, l.jsx)(m.default, {
                                applicationId: t,
                                onChange: this.handleBranchChange,
                                selectedBranchId: n,
                                hide: !a,
                                onHasBranchesChange: this.handleHasBranchesChange,
                                className: eu.storeChannelOptionSelector
                            }, t)]
                        }) : null]
                    })
                }
                renderPrivacyOptions() {
                    let {
                        cloneChannel: e
                    } = this.props, {
                        channelType: t,
                        isPrivate: s
                    } = this.state;
                    if (null != e || t === el.ChannelTypes.GUILD_ANNOUNCEMENT) return null;
                    let n = t === el.ChannelTypes.GUILD_CATEGORY ? eo.default.Messages.PRIVATE_CATEGORY : eo.default.Messages.PRIVATE_CHANNEL,
                        a = t === el.ChannelTypes.GUILD_CATEGORY ? eo.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CATEGORY_DESCRIPTION : eo.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION_NEW;
                    return (0, l.jsx)(p.FormItem, {
                        children: (0, l.jsxs)(p.FormSwitch, {
                            hideBorder: !0,
                            onChange: this.handlePrivacyChange,
                            value: s,
                            note: a,
                            children: [(0, l.jsx)(X.default, {
                                className: eu.switchIcon
                            }), n]
                        })
                    }, "privacy-switch")
                }
                renderError(e) {
                    let t;
                    let {
                        channelType: s,
                        isPrivate: n,
                        errors: a
                    } = this.state, {
                        canConnect: r,
                        canViewChannels: i
                    } = this.props;
                    if (Object.values(a).length > 0) {
                        if (null != a.message && "" !== a.message) t = a.message;
                        else if (e || null == a.name) {
                            let e = Object.values(a)[0];
                            e.length > 0 && (t = e)
                        }
                    } else n && !(0, M.canCreatePrivateChannel)(s, i, r) && (t = (0, M.getPrivateChannelHintText)(s));
                    if (null != t) return (0, l.jsx)("div", {
                        className: d(eu.createError, {
                            [eu.addMemberError]: e
                        }),
                        children: (0, l.jsx)(w.default, {
                            messageType: w.HelpMessageTypes.ERROR,
                            children: t
                        })
                    })
                }
                renderFooter() {
                    let e;
                    let {
                        channelType: t,
                        onClose: s
                    } = this.props, {
                        channelType: n
                    } = this.state, {
                        isPrivate: r
                    } = this.state;
                    e = t === el.ChannelTypes.GUILD_CATEGORY ? eo.default.Messages.CREATE_CATEGORY : eo.default.Messages.CREATE_CHANNEL;
                    let i = r || n === el.ChannelTypes.GUILD_STAGE_VOICE;
                    return (0, l.jsxs)(p.ModalFooter, {
                        className: eu.modalFooter,
                        children: [i ? (0, l.jsx)(p.Button, {
                            type: "button",
                            onClick: () => {
                                this.setState({
                                    slide: a.ADD_MEMBERS,
                                    errors: {}
                                })
                            },
                            disabled: !this.canSubmit(),
                            children: eo.default.Messages.NEXT
                        }) : (0, l.jsx)(p.Button, {
                            type: "submit",
                            disabled: !this.canSubmit(),
                            children: e
                        }), (0, l.jsx)(p.Button, {
                            onClick: s,
                            look: p.Button.Looks.LINK,
                            color: p.Button.Colors.PRIMARY,
                            children: eo.default.Messages.CANCEL
                        })]
                    })
                }
                renderAddMemberFooter() {
                    let e;
                    let {
                        channelType: t
                    } = this.props, {
                        pendingPermissionOverwrites: s
                    } = this.state;
                    return e = 0 === Object.keys(s).length ? eo.default.Messages.SKIP : t === el.ChannelTypes.GUILD_CATEGORY ? eo.default.Messages.CREATE_CATEGORY : eo.default.Messages.CREATE_CHANNEL, (0, l.jsxs)(p.ModalFooter, {
                        children: [(0, l.jsx)(p.Button, {
                            type: "submit",
                            disabled: !this.canSubmit(),
                            children: e
                        }), (0, l.jsx)(p.Button, {
                            onClick: () => {
                                this.setState({
                                    slide: a.CHANNEL_INFO
                                })
                            },
                            look: p.Button.Looks.LINK,
                            color: p.Button.Colors.PRIMARY,
                            children: eo.default.Messages.BACK
                        })]
                    })
                }
                handlePermissionOverwriteChange(e) {
                    this.setState({
                        pendingPermissionOverwrites: e
                    })
                }
                renderCreateChannelContent() {
                    let {
                        channelType: e
                    } = this.state;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [this.renderHeader(), (0, l.jsxs)(p.ModalContent, {
                            className: eu.modalContent,
                            children: [this.renderType(), this.renderName(), e === el.ChannelTypes.GUILD_STORE ? this.renderStoreOptions() : null, this.renderChannelTypeDescription(e), e === el.ChannelTypes.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions()]
                        }), this.renderError(), this.renderFooter()]
                    })
                }
                renderAddMemberSlideContent() {
                    let {
                        name: e,
                        channelType: t
                    } = this.state, {
                        guildId: s,
                        onClose: n
                    } = this.props, a = this.getIconComponent(), r = t === el.ChannelTypes.GUILD_STAGE_VOICE;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)(p.ModalHeader, {
                            separator: !1,
                            children: [(0, l.jsxs)("div", {
                                className: eu.header,
                                children: [(0, l.jsx)(p.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: eu.title,
                                    children: r ? eo.default.Messages.CHANNEL_PERMISSIONS_ADD_MODERATOR_TITLE : eo.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
                                }), (0, l.jsxs)(p.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    className: eu.subtitle,
                                    children: [(0, l.jsx)(a, {
                                        height: 16,
                                        width: 16,
                                        className: eu.subtitleIcon
                                    }), e]
                                })]
                            }), (0, l.jsx)(p.ModalCloseButton, {
                                onClick: n,
                                className: eu.closeButton
                            })]
                        }), this.renderError(!0), (0, l.jsx)(ec, {
                            onChange: this.handlePermissionOverwriteChange,
                            guildId: s,
                            channelType: t
                        }), this.renderAddMemberFooter()]
                    })
                }
                renderSlides() {
                    let {
                        slide: e
                    } = this.state, t = {
                        impression_group: E.ImpressionGroups.CHANNEL_ADD_FLOW
                    };
                    return (0, l.jsx)("div", {
                        children: (0, l.jsxs)(p.Slides, {
                            activeSlide: e,
                            width: 460,
                            children: [(0, l.jsx)(p.Slide, {
                                id: a.CHANNEL_INFO,
                                impressionName: E.ImpressionNames.CHANNEL_ADD_INFO,
                                impressionProperties: t,
                                children: this.renderCreateChannelContent()
                            }), (0, l.jsx)(p.Slide, {
                                id: a.ADD_MEMBERS,
                                impressionName: E.ImpressionNames.CHANNEL_ADD_MEMBERS,
                                impressionProperties: t,
                                children: this.renderAddMemberSlideContent()
                            })]
                        })
                    })
                }
                render() {
                    let {
                        transitionState: e
                    } = this.props;
                    return (0, l.jsx)(p.ModalRoot, {
                        transitionState: e,
                        className: eu.modal,
                        "aria-labelledby": this.headerId,
                        size: p.ModalSize.DYNAMIC,
                        children: (0, l.jsx)("form", {
                            onSubmit: this.handleSubmit,
                            children: this.renderSlides()
                        })
                    })
                }
                constructor(e) {
                    super(e), this.headerId = (0, k.uid)(), this.setInputRef = e => {
                        this._input = e
                    }, this.handleNameChange = e => {
                        let {
                            channelType: t
                        } = this.state;
                        P.CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES.has(t) && (e = (0, en.sanitizeGuildTextChannelName)(e)), this.setState({
                            name: e
                        })
                    }, this.handleTypeChange = e => {
                        let {
                            value: t
                        } = e, {
                            name: s
                        } = this.state;
                        P.CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES.has(t) && (s = (0, en.sanitizeGuildTextChannelName)(s)), t === el.ChannelTypes.GUILD_STAGE_VOICE && this.setState({
                            isPrivate: !1
                        }), this.setState({
                            channelType: t,
                            name: s
                        })
                    }, this.handlePrivacyChange = e => {
                        this.setState({
                            isPrivate: e
                        })
                    }, this.handleApplicationChange = e => {
                        this.setState({
                            applicationId: e
                        })
                    }, this.handleSKUChange = e => {
                        this.setState({
                            skuId: e
                        })
                    }, this.handleShowBranchesToggle = e => {
                        this.setState({
                            showBranches: e,
                            branchId: null
                        })
                    }, this.handleBranchChange = e => {
                        this.setState({
                            branchId: e
                        })
                    }, this.handleHasBranchesChange = e => {
                        this.setState({
                            hasBranches: e
                        })
                    }, this.handleSubmit = async e => {
                        let t, s, n;
                        e.preventDefault();
                        let {
                            cloneChannel: a,
                            categoryId: l,
                            user: r,
                            memberRoleIds: i,
                            isAdmin: d,
                            onClose: o,
                            owner: u
                        } = this.props, {
                            name: h,
                            pendingPermissionOverwrites: E,
                            channelType: C,
                            skuId: N,
                            branchId: p,
                            isPrivate: T
                        } = this.state, m = this.getGuildId();
                        if (null != m) {
                            if (null != a) t = c.values(a.permissionOverwrites), s = a.bitrate, n = a.userLimit;
                            else if (C === el.ChannelTypes.GUILD_ANNOUNCEMENT) t = (0, en.permissionOverwritesForAnnouncement)(m);
                            else {
                                if (T) {
                                    t = (0, en.permissionOverwritesForRoles)(m, C, [], !0);
                                    let e = (0, M.extractPermissionOverwrites)(E, C);
                                    e.length > 0 && (t = t.concat(e));
                                    let s = null != u && r.id === u.id,
                                        n = t.some(e => i.has(e.id)) || d || s;
                                    !n && t.push((0, en.permissionOverwriteForUser)(r.id, C))
                                }
                                C === el.ChannelTypes.GUILD_STAGE_VOICE && (t = [], Object.values(E).forEach(e => {
                                    let {
                                        row: s
                                    } = e;
                                    null != s.id && "" !== s.id && (s.rowType === er.RowType.ROLE ? t.push((0, D.createModeratorOverwrite)(s.id, f.PermissionOverwriteType.ROLE)) : s.rowType === er.RowType.MEMBER && t.push((0, D.createModeratorOverwrite)(s.id, f.PermissionOverwriteType.MEMBER)))
                                }))
                            }
                            this.setState({
                                errors: {}
                            });
                            try {
                                let e = await _.default.createChannel({
                                    guildId: m,
                                    type: C,
                                    name: h,
                                    permissionOverwrites: t,
                                    bitrate: s,
                                    userLimit: n,
                                    parentId: C !== el.ChannelTypes.GUILD_CATEGORY ? l : null,
                                    skuId: N,
                                    branchId: p
                                });
                                if (null == e || 201 !== e.status) return;
                                let a = e.body;
                                P.CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES.has(C) && (0, x.transitionToGuild)(a.guild_id, a.id), o()
                            } catch (e) {
                                null != e.body && "object" == typeof e.body ? this.setState({
                                    errors: e.body
                                }) : this.setState({
                                    errors: {
                                        message: eo.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                                    }
                                })
                            }
                        }
                    };
                    let {
                        channelType: t,
                        cloneChannel: s,
                        prefillChannelName: n
                    } = e;
                    this.state = {
                        channelType: null != t ? t : el.ChannelTypes.GUILD_TEXT,
                        name: null != s ? (0, I.computeChannelName)(s, B.default, F.default) : null != n ? n : "",
                        pendingPermissionOverwrites: {},
                        isPrivate: !1,
                        prevGuildId: e.guildId,
                        applicationId: null,
                        skuId: null,
                        branchId: null,
                        showBranches: !1,
                        hasBranches: !1,
                        slide: a.CHANNEL_INFO,
                        errors: {}
                    }, this.handlePermissionOverwriteChange = this.handlePermissionOverwriteChange.bind(this)
                }
            }
            var eC = r.forwardRef(function(e, t) {
                let {
                    channelType: s,
                    guildId: n,
                    cloneChannelId: a
                } = e, r = (0, N.useStateFromStoresObject)([U.default, B.default, H.default, G.default, b.default, j.default], () => {
                    var e, t, l;
                    let r = U.default.getGuild(n),
                        i = B.default.getCurrentUser();
                    u(null != i, "CreateChannel: user cannot be undefined");
                    let d = null != r && null != r.ownerId ? B.default.getUser(r.ownerId) : null,
                        o = new Set(null !== (t = null === (e = j.default.getMember(n, i.id)) || void 0 === e ? void 0 : e.roles) && void 0 !== t ? t : []),
                        h = H.default.can(el.Permissions.ADMINISTRATOR, r),
                        c = G.default.getChannel(a);
                    return {
                        guild: r,
                        applications: b.default.getApplicationsForGuild(n),
                        canCreateStoreChannel: null != r && r.hasFeature(el.GuildFeatures.COMMERCE),
                        canCreateAnnouncementChannel: null != r && r.hasFeature(el.GuildFeatures.NEWS),
                        user: i,
                        owner: d,
                        memberRoleIds: o,
                        canViewChannels: H.default.can(el.Permissions.VIEW_CHANNEL, r),
                        canConnect: H.default.can(el.Permissions.CONNECT, r),
                        isAdmin: h,
                        cloneChannel: c,
                        channelType: null !== (l = null == c ? void 0 : c.type) && void 0 !== l ? l : s,
                        canManageRoles: H.default.can(el.Permissions.MANAGE_ROLES, r),
                        canManageChannels: H.default.can(el.Permissions.MANAGE_CHANNELS, r)
                    }
                }), {
                    canManageRoles: i,
                    canManageChannels: d
                } = r, o = (0, y.useGuildEligibleForStageChannels)(n) && i && d, h = (0, L.useCanCreateForumChannel)(n), c = (0, R.useGuildEligibleForMediaChannels)(null == r ? void 0 : r.guild);
                return (0, l.jsx)(eE, {
                    ...e,
                    ...r,
                    canCreateStageChannel: o,
                    canCreateForumChannel: h,
                    canCreateMediaChannel: c,
                    ref: t
                })
            })
        },
        690563: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useGuildEligibleForMediaChannels: function() {
                    return l
                },
                useEligibleForGuildMediaChannelPostPreviewEmbed: function() {
                    return i
                }
            });
            var n = s("862205");
            let a = (0, n.createExperiment)({
                kind: "guild",
                id: "2023-03_guild_media_channel",
                label: "Media Channel",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enables guild to create a media channel",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function l(e) {
                var t;
                let {
                    enabled: s
                } = a.useExperiment({
                    guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    location: "96e84c_1"
                }, {
                    autoTrackExposure: !0
                });
                return (null == e ? void 0 : e.id) != null && s
            }
            let r = (0, n.createExperiment)({
                kind: "user",
                id: "2023-04_guild_media_channel_post_preview_embed_users",
                label: "Guild Role Subscription Users",
                defaultConfig: {
                    enabledForUser: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enables for users Guild Media Post Preview Embeds",
                    config: {
                        enabledForUser: !0
                    }
                }]
            });

            function i() {
                let {
                    enabledForUser: e
                } = r.useExperiment({
                    location: "96e84c_2"
                }, {
                    autoTrackExposure: !0
                });
                return e
            }
        },
        286470: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                createModeratorOverwrite: function() {
                    return f
                },
                default: function() {
                    return g
                }
            });
            var n = s("37983"),
                a = s("884691"),
                l = s("446674"),
                r = s("77078"),
                i = s("318738"),
                d = s("448993"),
                o = s("798609"),
                u = s("462430"),
                h = s("42203"),
                c = s("305961"),
                E = s("145131"),
                C = s("476765"),
                N = s("228427"),
                p = s("991170"),
                _ = s("923510"),
                T = s("606762"),
                m = s("782340"),
                A = s("514659");

            function f(e, t) {
                return {
                    id: e,
                    type: t,
                    deny: p.default.NONE,
                    allow: _.MODERATE_STAGE_CHANNEL_PERMISSIONS
                }
            }

            function g(e) {
                let {
                    transitionState: t,
                    onClose: s,
                    channelId: p
                } = e, g = (0, C.useUID)(), I = (0, l.useStateFromStores)([h.default], () => h.default.getChannel(p)), M = (0, l.useStateFromStores)([c.default], () => c.default.getGuild(null == I ? void 0 : I.getGuildId())), [S, O] = a.useState({}), [L, R] = a.useState(!1), [x, v] = a.useState(null);
                if (null == I || null == M) return null;
                let y = async () => {
                    R(!0);
                    try {
                        await
                        function(e, t) {
                            let s = Object.values(t).filter(e => {
                                let {
                                    row: t
                                } = e;
                                return null != t.id
                            }).map(e => {
                                let {
                                    row: t
                                } = e;
                                return t.rowType === T.RowType.ROLE ? f(t.id, o.PermissionOverwriteType.ROLE) : f(t.id, o.PermissionOverwriteType.MEMBER)
                            });
                            return (0, i.savePermissionUpdates)(e.id, s, !0)
                        }(I, S), s()
                    } catch (t) {
                        let e = new d.APIError(t);
                        R(!1), v(e)
                    }
                };
                return (0, n.jsxs)(r.ModalRoot, {
                    transitionState: t,
                    "aria-labelledby": g,
                    size: r.ModalSize.SMALL,
                    className: A.modalRoot,
                    children: [(0, n.jsxs)(r.ModalHeader, {
                        separator: !1,
                        direction: E.default.Direction.VERTICAL,
                        align: E.default.Align.CENTER,
                        className: A.header,
                        children: [(0, n.jsx)(r.Heading, {
                            variant: "heading-xl/semibold",
                            children: m.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
                        }), (0, n.jsxs)(r.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: A.headerSubtitle,
                            children: [(0, n.jsx)(N.default, {
                                height: 16,
                                width: 16,
                                className: A.headerSubtitleIcon
                            }), I.name]
                        })]
                    }), (0, n.jsx)(u.AddMembersBody, {
                        guild: M,
                        channel: I,
                        permission: _.MODERATE_STAGE_CHANNEL_PERMISSIONS,
                        pendingAdditions: S,
                        setPendingAdditions: O
                    }), null != x ? (0, n.jsx)(r.Text, {
                        className: A.error,
                        variant: "text-xs/normal",
                        color: "text-danger",
                        children: x.getAnyErrorMessage()
                    }) : null, (0, n.jsxs)(r.ModalFooter, {
                        children: [(0, n.jsx)(r.Button, {
                            onClick: y,
                            submitting: L,
                            children: m.default.Messages.ADD
                        }), (0, n.jsx)(r.Button, {
                            look: r.Button.Looks.LINK,
                            color: r.Button.Colors.PRIMARY,
                            onClick: s,
                            children: m.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        677114: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var n = s("446674"),
                a = s("913144");
            let l = {};
            class r extends n.default.Store {
                getBranches(e) {
                    var t;
                    return null !== (t = l[e]) && void 0 !== t ? t : []
                }
            }
            r.displayName = "ApplicationBranchStore";
            var i = new r(a.default, {
                OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function(e) {
                    let {
                        applicationId: t,
                        branches: s
                    } = e;
                    l[t] = s
                },
                LOGOUT: function() {
                    l = {}
                }
            })
        }
    }
]);
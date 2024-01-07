            "use strict";
            s.r(t), s.d(t, {
                ChannelTypeBadge: function() {
                    return ec
                },
                AddMembers: function() {
                    return eE
                },
                default: function() {
                    return eN
                }
            }), s("424973"), s("222007"), s("70102");
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
                I = s("299285"),
                M = s("679653"),
                S = s("454273"),
                O = s("462430"),
                L = s("298878"),
                R = s("680986"),
                x = s("690563"),
                v = s("393414"),
                y = s("923510"),
                D = s("178225"),
                P = s("286470"),
                G = s("233069"),
                b = s("42203"),
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
                ea = s("449008"),
                el = s("701909"),
                er = s("49111"),
                ei = s("606762"),
                ed = s("953371"),
                eo = s("843455"),
                eu = s("782340"),
                eh = s("935518");

            function ec(e) {
                let {
                    isNew: t,
                    isBeta: s
                } = e, n = null;
                return !0 === t ? n = (0, l.jsx)(es.TextBadge, {
                    text: eu.default.Messages.CHANNEL_TYPE_NEW,
                    className: eh.newBadge,
                    color: C.default.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER
                }) : !0 === s && (n = (0, l.jsx)(L.default, {
                    className: eh.newBadge
                })), n
            }

            function eE(e) {
                let {
                    onChange: t,
                    guildId: s,
                    channelType: n,
                    description: a
                } = e, [i, d] = r.useState({}), o = (0, N.useStateFromStores)([U.default], () => U.default.getGuild(s)), u = n === er.ChannelTypes.GUILD_STAGE_VOICE;
                return (r.useEffect(() => {
                    t(i)
                }, [i, t]), null == o) ? null : (0, l.jsx)(p.ModalContent, {
                    className: eh.addMembersContainer,
                    children: (0, l.jsx)(O.AddMembersBody, {
                        guild: o,
                        channel: null,
                        permission: u ? y.MODERATE_STAGE_CHANNEL_PERMISSIONS : (0, G.getAccessPermissions)(n),
                        pendingAdditions: i,
                        setPendingAdditions: d,
                        isStageChannel: u,
                        description: a
                    })
                })
            }(a = n || (n = {})).CHANNEL_INFO = "CHANNEL_INFO", a.ADD_MEMBERS = "ADD_MEMBERS";
            class eC extends r.PureComponent {
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
                    n && null == s && T.default.fetchApplications(t), g.default.trackWithMetadata(er.AnalyticEvents.OPEN_MODAL, {
                        type: "Create Channel"
                    }), R.GuildForumExperiment.trackExposure({
                        guildId: t,
                        location: "45d324_1"
                    })
                }
                componentDidUpdate(e, t) {
                    !t.isPrivate && this.state.isPrivate && this.state.channelType === er.ChannelTypes.GUILD_ANNOUNCEMENT && this.setState({
                        channelType: er.ChannelTypes.GUILD_TEXT
                    }), !t.isPrivate && this.state.isPrivate && g.default.trackWithMetadata(er.AnalyticEvents.OPEN_MODAL, {
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
                    return "" !== l && "" !== l.trim() && (!s || !!(0, S.canCreatePrivateChannel)(n, e, t)) && (n !== er.ChannelTypes.GUILD_STORE || null != a) && !0
                }
                getIconComponent() {
                    let {
                        isPrivate: e,
                        channelType: t
                    } = this.state;
                    switch (t) {
                        case er.ChannelTypes.GUILD_TEXT:
                            return e ? V.default : Y.default;
                        case er.ChannelTypes.GUILD_FORUM:
                            return K.default;
                        case er.ChannelTypes.GUILD_MEDIA:
                            return q.default;
                        case er.ChannelTypes.GUILD_VOICE:
                            return e ? $.default : Z.default;
                        case er.ChannelTypes.GUILD_STORE:
                            return et.default;
                        case er.ChannelTypes.GUILD_ANNOUNCEMENT:
                            return Q.default;
                        case er.ChannelTypes.GUILD_STAGE_VOICE:
                            return ee.default;
                        default:
                            return (0, G.isGuildTextChannelType)(t) ? Y.default : eo.NOOP_NULL
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
                    let o = (e = a, t = d, null != e ? eu.default.Messages.CLONE_CHANNEL : t === er.ChannelTypes.GUILD_CATEGORY ? eu.default.Messages.CREATE_CATEGORY : eu.default.Messages.CREATE_CHANNEL);
                    if (null != r) {
                        ;
                        let e = b.default.getChannel(r);
                        n = (0, l.jsx)(p.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: eh.subtitle,
                            children: eu.default.Messages.IN_CATEGORY.format({
                                categoryName: null !== (s = null == e ? void 0 : e.name) && void 0 !== s ? s : ""
                            })
                        })
                    }
                    return (0, l.jsxs)(p.ModalHeader, {
                        separator: !1,
                        children: [(0, l.jsxs)("div", {
                            className: eh.header,
                            children: [(0, l.jsx)(p.Heading, {
                                id: this.headerId,
                                variant: "heading-lg/semibold",
                                className: eh.title,
                                children: o
                            }), n]
                        }), (0, l.jsx)(p.ModalCloseButton, {
                            onClick: i,
                            className: eh.closeButton
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
                        className: eh.error,
                        children: a.name
                    }));
                    let i = r === er.ChannelTypes.GUILD_CATEGORY,
                        d = i ? eu.default.Messages.CATEGORY_NAME : eu.default.Messages.FORM_LABEL_CHANNEL_NAME,
                        o = null != t ? (0, l.jsx)(p.FormText, {
                            className: eh.channelNameNote,
                            type: p.FormText.Types.DESCRIPTION,
                            children: eu.default.Messages.CLONE_CHANNEL_HELP.format({
                                name: (0, M.computeChannelName)(t, B.default, F.default, !0)
                            })
                        }) : r === er.ChannelTypes.GUILD_FORUM ? (0, l.jsx)(p.FormText, {
                            className: eh.channelNameNote,
                            type: p.FormText.Types.DESCRIPTION,
                            children: eu.default.Messages.FORUM_CHANNEL_NAME_NOTE.format({
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
                            titleClassName: eh.sectionTitle,
                            className: eh.name,
                            children: [(0, l.jsx)(p.TextInput, {
                                value: this.state.name,
                                onChange: this.handleNameChange,
                                id: t,
                                inputRef: this.setInputRef,
                                maxLength: 100,
                                placeholder: function(e) {
                                    switch (e) {
                                        case er.ChannelTypes.GUILD_CATEGORY:
                                            return eu.default.Messages.CATEGORY_NAME_PLACEHOLDER;
                                        case er.ChannelTypes.GUILD_FORUM:
                                            return eu.default.Messages.FORUM_CHANNEL_NAME_PLACEHOLDER;
                                        default:
                                            return eu.default.Messages.CHANNEL_NAME_PLACEHOLDER
                                    }
                                }(r),
                                className: eh.inputWrapper,
                                inputClassName: i ? void 0 : eh.inputInner,
                                prefixElement: i ? null : (0, l.jsx)(u, {
                                    className: eh.inputPrefix,
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
                    if (null != e || d === er.ChannelTypes.GUILD_CATEGORY) return;
                    let u = null != t && t.length > 0;
                    return (0, l.jsx)(p.FormItem, {
                        className: eh.type,
                        title: eu.default.Messages.CHANNEL_TYPE,
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
                                    label: eu.default.Messages.TEXT_CHANNEL_TYPE,
                                    value: er.ChannelTypes.GUILD_TEXT,
                                    description: eu.default.Messages.CREATE_TEXT_CHANNEL_DESCRIPTION
                                }];
                                return d.push({
                                    icon: t ? $.default : Z.default,
                                    label: eu.default.Messages.VOICE_CHANNEL_TYPE,
                                    value: er.ChannelTypes.GUILD_VOICE,
                                    description: eu.default.Messages.CREATE_VOICE_CHANNEL_DESCRIPTION
                                }), r && d.push({
                                    icon: t ? z.default : K.default,
                                    label: eu.default.Messages.FORUM_CHANNEL_TYPE,
                                    value: er.ChannelTypes.GUILD_FORUM,
                                    description: (0, l.jsxs)(p.Text, {
                                        variant: "text-sm/normal",
                                        color: "header-secondary",
                                        className: eh.radioLabelDescription,
                                        children: [eu.default.Messages.FORUM_CHANNEL_DESCRIPTION, (0, l.jsx)("br", {}), eu.default.Messages.LEARN_MORE_CLICK.format({
                                            onClick: () => {
                                                open(ed.COMMUNITY_PORTAL_FORUM_PAGE)
                                            }
                                        })]
                                    })
                                }), i && d.push({
                                    icon: t ? J.default : q.default,
                                    label: eu.default.Messages.MEDIA_CHANNEL_TYPE,
                                    value: er.ChannelTypes.GUILD_MEDIA,
                                    description: (0, l.jsxs)(p.Text, {
                                        variant: "text-sm/normal",
                                        color: "header-secondary",
                                        className: eh.radioLabelDescription,
                                        children: [eu.default.Messages.CREATE_MEDIA_CHANNEL_DESCRIPTION, (0, l.jsx)("br", {}), eu.default.Messages.LEARN_MORE_CLICK.format({
                                            onClick: () => {
                                                open(el.default.getCreatorSupportArticleURL(er.HelpdeskArticles.MEDIA_CHANNEL))
                                            }
                                        })]
                                    }),
                                    isBeta: !0
                                }), n && d.push({
                                    icon: Q.default,
                                    iconSize: 24,
                                    label: eu.default.Messages.NEWS_CHANNEL_TYPE,
                                    value: er.ChannelTypes.GUILD_ANNOUNCEMENT,
                                    description: eu.default.Messages.CREATE_NEWS_CHANNEL_DESCRIPTION
                                }), s && d.push({
                                    icon: et.default,
                                    iconSize: 24,
                                    label: eu.default.Messages.STORE_CHANNEL_TYPE,
                                    value: er.ChannelTypes.GUILD_STORE,
                                    description: eu.default.Messages.CREATE_STORE_CHANNEL_DESCRIPTION
                                }), a && d.push({
                                    icon: ee.default,
                                    iconSize: 24,
                                    label: eu.default.Messages.STAGE_VOICE_CHANNEL_TYPE,
                                    value: er.ChannelTypes.GUILD_STAGE_VOICE,
                                    description: eu.default.Messages.CREATE_STAGE_CHANNEL_DESCRIPTION
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
                                            className: eh.radioItemName,
                                            children: [(0, l.jsx)(t, {
                                                ...null != s ? {
                                                    width: s,
                                                    height: s
                                                } : null,
                                                className: eh.icon,
                                                background: eh.background,
                                                foreground: eh.foreground
                                            }), (0, l.jsxs)("div", {
                                                children: [(0, l.jsxs)(p.Text, {
                                                    variant: "text-md/medium",
                                                    className: eh.radioLabelName,
                                                    children: [n, (0, l.jsx)(ec, {
                                                        isNew: i,
                                                        isBeta: d
                                                    })]
                                                }), "string" == typeof r ? (0, l.jsx)(p.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "header-secondary",
                                                    className: eh.radioLabelDescription,
                                                    children: r
                                                }) : r]
                                            })]
                                        }),
                                        value: a,
                                        radioBarClassName: eh.radioBar,
                                        radioItemIconClassName: eh.radioBarIcon
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
                            itemInfoClassName: eh.radioBarLabel
                        })
                    })
                }
                renderChannelTypeDescription(e) {
                    let t;
                    return (e === er.ChannelTypes.GUILD_ANNOUNCEMENT && (t = eu.default.Messages.FORM_HELP_NEWS.format({
                        documentationLink: el.default.getArticleURL(er.HelpdeskArticles.ANNOUNCEMENT_CHANNELS)
                    })), null == t) ? null : (0, l.jsx)(p.FormText, {
                        className: eh.channelTypeDescription,
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
                            children: eu.default.Messages.CREATE_STORE_CHANNEL_APPLICATION
                        }), (0, l.jsx)(p.SingleSelect, {
                            options: e.map(e => ({
                                label: e.name,
                                value: e.id
                            })),
                            placeholder: eu.default.Messages.CREATE_STORE_CHANNEL_SELECT_APPLICATION,
                            value: t,
                            onChange: this.handleApplicationChange,
                            className: eh.storeChannelOptionSelector
                        }), null != t ? (0, l.jsxs)(r.Fragment, {
                            children: [(0, l.jsx)(p.FormTitle, {
                                tag: "h5",
                                children: eu.default.Messages.CREATE_STORE_CHANNEL_SKU
                            }), (0, l.jsx)(A.default, {
                                applicationId: t,
                                onChange: this.handleSKUChange,
                                selectedSkuId: s,
                                className: eh.storeChannelOptionSelector
                            }, t)]
                        }) : null, null != t && i ? (0, l.jsxs)(p.FormSwitch, {
                            hideBorder: !0,
                            onChange: this.handleShowBranchesToggle,
                            value: a,
                            note: eu.default.Messages.CREATE_STORE_CHANNEL_BETA_NOTE.format({
                                devPortalUrl: er.MarketingURLs.API_DOCS_GAME_AND_SERVER_MANAGEMENT
                            }),
                            children: [(0, l.jsx)(W.default, {
                                className: eh.switchIcon
                            }), eu.default.Messages.CREATE_STORE_CHANNEL_BETA_TITLE]
                        }) : null, null != t ? (0, l.jsxs)(r.Fragment, {
                            children: [a ? (0, l.jsx)(p.FormTitle, {
                                tag: "h5",
                                children: eu.default.Messages.CREATE_STORE_CHANNEL_BRANCH
                            }) : null, (0, l.jsx)(m.default, {
                                applicationId: t,
                                onChange: this.handleBranchChange,
                                selectedBranchId: n,
                                hide: !a,
                                onHasBranchesChange: this.handleHasBranchesChange,
                                className: eh.storeChannelOptionSelector
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
                    if (null != e || t === er.ChannelTypes.GUILD_ANNOUNCEMENT) return null;
                    let n = t === er.ChannelTypes.GUILD_CATEGORY ? eu.default.Messages.PRIVATE_CATEGORY : eu.default.Messages.PRIVATE_CHANNEL,
                        a = t === er.ChannelTypes.GUILD_CATEGORY ? eu.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CATEGORY_DESCRIPTION : eu.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION_NEW;
                    return (0, l.jsx)(p.FormItem, {
                        children: (0, l.jsxs)(p.FormSwitch, {
                            hideBorder: !0,
                            onChange: this.handlePrivacyChange,
                            value: s,
                            note: a,
                            children: [(0, l.jsx)(X.default, {
                                className: eh.switchIcon
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
                    } else n && !(0, S.canCreatePrivateChannel)(s, i, r) && (t = (0, S.getPrivateChannelHintText)(s));
                    if (null != t) return (0, l.jsx)("div", {
                        className: d(eh.createError, {
                            [eh.addMemberError]: e
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
                        isPrivate: a
                    } = this.state;
                    e = t === er.ChannelTypes.GUILD_CATEGORY ? eu.default.Messages.CREATE_CATEGORY : eu.default.Messages.CREATE_CHANNEL;
                    let r = a || n === er.ChannelTypes.GUILD_STAGE_VOICE;
                    return (0, l.jsxs)(p.ModalFooter, {
                        className: eh.modalFooter,
                        children: [r ? (0, l.jsx)(p.Button, {
                            type: "button",
                            onClick: () => {
                                this.setState({
                                    slide: "ADD_MEMBERS",
                                    errors: {}
                                })
                            },
                            disabled: !this.canSubmit(),
                            children: eu.default.Messages.NEXT
                        }) : (0, l.jsx)(p.Button, {
                            type: "submit",
                            disabled: !this.canSubmit(),
                            children: e
                        }), (0, l.jsx)(p.Button, {
                            onClick: s,
                            look: p.Button.Looks.LINK,
                            color: p.Button.Colors.PRIMARY,
                            children: eu.default.Messages.CANCEL
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
                    return e = 0 === Object.keys(s).length ? eu.default.Messages.SKIP : t === er.ChannelTypes.GUILD_CATEGORY ? eu.default.Messages.CREATE_CATEGORY : eu.default.Messages.CREATE_CHANNEL, (0, l.jsxs)(p.ModalFooter, {
                        children: [(0, l.jsx)(p.Button, {
                            type: "submit",
                            disabled: !this.canSubmit(),
                            children: e
                        }), (0, l.jsx)(p.Button, {
                            onClick: () => {
                                this.setState({
                                    slide: "CHANNEL_INFO"
                                })
                            },
                            look: p.Button.Looks.LINK,
                            color: p.Button.Colors.PRIMARY,
                            children: eu.default.Messages.BACK
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
                            className: eh.modalContent,
                            children: [this.renderType(), this.renderName(), e === er.ChannelTypes.GUILD_STORE ? this.renderStoreOptions() : null, this.renderChannelTypeDescription(e), e === er.ChannelTypes.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions()]
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
                    } = this.props, a = this.getIconComponent(), r = t === er.ChannelTypes.GUILD_STAGE_VOICE;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)(p.ModalHeader, {
                            separator: !1,
                            children: [(0, l.jsxs)("div", {
                                className: eh.header,
                                children: [(0, l.jsx)(p.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: eh.title,
                                    children: r ? eu.default.Messages.CHANNEL_PERMISSIONS_ADD_MODERATOR_TITLE : eu.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
                                }), (0, l.jsxs)(p.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    className: eh.subtitle,
                                    children: [(0, l.jsx)(a, {
                                        height: 16,
                                        width: 16,
                                        className: eh.subtitleIcon
                                    }), e]
                                })]
                            }), (0, l.jsx)(p.ModalCloseButton, {
                                onClick: n,
                                className: eh.closeButton
                            })]
                        }), this.renderError(!0), (0, l.jsx)(eE, {
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
                                id: "CHANNEL_INFO",
                                impressionName: E.ImpressionNames.CHANNEL_ADD_INFO,
                                impressionProperties: t,
                                children: this.renderCreateChannelContent()
                            }), (0, l.jsx)(p.Slide, {
                                id: "ADD_MEMBERS",
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
                        className: eh.modal,
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
                        G.CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES.has(t) && (e = (0, en.sanitizeGuildTextChannelName)(e)), this.setState({
                            name: e
                        })
                    }, this.handleTypeChange = e => {
                        let {
                            value: t
                        } = e, {
                            name: s
                        } = this.state;
                        G.CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES.has(t) && (s = (0, en.sanitizeGuildTextChannelName)(s)), t === er.ChannelTypes.GUILD_STAGE_VOICE && this.setState({
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
                            else if (C === er.ChannelTypes.GUILD_ANNOUNCEMENT) t = (0, en.permissionOverwritesForAnnouncement)(m);
                            else {
                                if (T) {
                                    t = (0, en.permissionOverwritesForRoles)(m, C, [], !0);
                                    let e = (0, S.extractPermissionOverwrites)(E, C);
                                    e.length > 0 && (t = t.concat(e));
                                    let s = null != u && r.id === u.id,
                                        n = t.some(e => i.has(e.id)) || d || s;
                                    !n && t.push((0, en.permissionOverwriteForUser)(r.id, C))
                                }
                                C === er.ChannelTypes.GUILD_STAGE_VOICE && (t = [], Object.values(E).forEach(e => {
                                    let {
                                        row: s
                                    } = e;
                                    null != s.id && "" !== s.id && (s.rowType === ei.RowType.ROLE ? t.push((0, P.createModeratorOverwrite)(s.id, f.PermissionOverwriteType.ROLE)) : s.rowType === ei.RowType.MEMBER && t.push((0, P.createModeratorOverwrite)(s.id, f.PermissionOverwriteType.MEMBER)))
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
                                    parentId: C !== er.ChannelTypes.GUILD_CATEGORY ? l : null,
                                    skuId: N,
                                    branchId: p
                                });
                                if (null == e || 201 !== e.status) return;
                                let a = e.body;
                                G.CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES.has(C) && (0, v.transitionToGuild)(a.guild_id, a.id), o()
                            } catch (e) {
                                null != e.body && "object" == typeof e.body ? this.setState({
                                    errors: e.body
                                }) : this.setState({
                                    errors: {
                                        message: eu.default.Messages.ERROR_OCCURRED_TRY_AGAIN
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
                        channelType: null != t ? t : er.ChannelTypes.GUILD_TEXT,
                        name: null != s ? (0, M.computeChannelName)(s, B.default, F.default) : null != n ? n : "",
                        pendingPermissionOverwrites: {},
                        isPrivate: !1,
                        prevGuildId: e.guildId,
                        applicationId: null,
                        skuId: null,
                        branchId: null,
                        showBranches: !1,
                        hasBranches: !1,
                        slide: "CHANNEL_INFO",
                        errors: {}
                    }, this.handlePermissionOverwriteChange = this.handlePermissionOverwriteChange.bind(this)
                }
            }
            var eN = r.forwardRef(function(e, t) {
                let {
                    channelType: s,
                    guildId: n,
                    cloneChannelId: a
                } = e, r = (0, N.useStateFromStoresObject)([U.default, B.default, H.default, b.default, I.default, j.default], () => {
                    var e, t, l;
                    let r = U.default.getGuild(n),
                        i = B.default.getCurrentUser();
                    u(null != i, "CreateChannel: user cannot be undefined");
                    let d = null != r && null != r.ownerId ? B.default.getUser(r.ownerId) : null,
                        o = new Set(null !== (t = null === (e = j.default.getMember(n, i.id)) || void 0 === e ? void 0 : e.roles) && void 0 !== t ? t : []),
                        h = H.default.can(er.Permissions.ADMINISTRATOR, r),
                        c = b.default.getChannel(a);
                    return {
                        guild: r,
                        applications: I.default.getGuildApplicationIds(n).map(e => I.default.getApplication(e)).filter(ea.isNotNullish),
                        canCreateStoreChannel: null != r && r.hasFeature(er.GuildFeatures.COMMERCE),
                        canCreateAnnouncementChannel: null != r && r.hasFeature(er.GuildFeatures.NEWS),
                        user: i,
                        owner: d,
                        memberRoleIds: o,
                        canViewChannels: H.default.can(er.Permissions.VIEW_CHANNEL, r),
                        canConnect: H.default.can(er.Permissions.CONNECT, r),
                        isAdmin: h,
                        cloneChannel: c,
                        channelType: null !== (l = null == c ? void 0 : c.type) && void 0 !== l ? l : s,
                        canManageRoles: H.default.can(er.Permissions.MANAGE_ROLES, r),
                        canManageChannels: H.default.can(er.Permissions.MANAGE_CHANNELS, r)
                    }
                }), {
                    canManageRoles: i,
                    canManageChannels: d
                } = r, o = (0, D.useGuildEligibleForStageChannels)(n) && i && d, h = (0, R.useCanCreateForumChannel)(n), c = (0, x.useGuildEligibleForMediaChannels)(null == r ? void 0 : r.guild);
                return (0, l.jsx)(eC, {
                    ...e,
                    ...r,
                    canCreateStageChannel: o,
                    canCreateForumChannel: h,
                    canCreateMediaChannel: c,
                    ref: t
                })
            })
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return e1
                }
            }), n("222007"), n("424973");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("627445"),
                u = n.n(r),
                o = n("917351"),
                d = n.n(o),
                c = n("90915"),
                f = n("446674"),
                h = n("151426"),
                p = n("551042"),
                m = n("77078"),
                E = n("272030"),
                C = n("942722"),
                S = n("561963"),
                g = n("264732"),
                _ = n("738073"),
                I = n("737960"),
                T = n("789394"),
                v = n("734575"),
                x = n("84339"),
                N = n("191225"),
                A = n("169920"),
                M = n("420444"),
                R = n("191145"),
                j = n("494286"),
                L = n("850391"),
                O = n("992207"),
                y = n("269936"),
                b = n("69927"),
                P = n("40635"),
                D = n("10641"),
                U = n("327432"),
                w = n("336804"),
                F = n("928265"),
                k = n("744568"),
                V = n("257869"),
                B = n("848848"),
                H = n("93252"),
                G = n("661455"),
                W = n("230035"),
                Y = n("155832"),
                z = n("353054"),
                K = n("262956"),
                Z = n("723431"),
                X = n("977983"),
                J = n("539938"),
                q = n("557809"),
                Q = n("853189"),
                $ = n("718091"),
                ee = n("922164"),
                et = n("148205"),
                en = n("969103"),
                ea = n("361572"),
                el = n("267567"),
                es = n("393414"),
                ei = n("144491"),
                er = n("56778"),
                eu = n("208021"),
                eo = n("582713"),
                ed = n("716214"),
                ec = n("58343"),
                ef = n("445375"),
                eh = n("38861"),
                ep = n("31673"),
                em = n("338273"),
                eE = n("861570"),
                eC = n("970366"),
                eS = n("401642"),
                eg = n("514917"),
                e_ = n("223170"),
                eI = n("59811"),
                eT = n("824135"),
                ev = n("982108"),
                ex = n("42203"),
                eN = n("474643"),
                eA = n("341542"),
                eM = n("247013"),
                eR = n("305961"),
                ej = n("824563"),
                eL = n("744983"),
                eO = n("18494"),
                ey = n("162771"),
                eb = n("697218"),
                eP = n("800762"),
                eD = n("980423"),
                eU = n("439932"),
                ew = n("679653"),
                eF = n("176347"),
                ek = n("665182"),
                eV = n("681393"),
                eB = n("61918"),
                eH = n("656612"),
                eG = n("624027"),
                eW = n("49111"),
                eY = n("272505"),
                ez = n("99795"),
                eK = n("994428"),
                eZ = n("237542"),
                eX = n("837979"),
                eJ = n("782340"),
                eq = n("305794");
            let eQ = (0, y.makeLazy)({
                createPromise: () => n.el("479273").then(n.bind(n, "479273")),
                webpackId: "479273",
                renderLoader: () => (0, a.jsx)("div", {
                    className: eq.loader,
                    children: (0, a.jsx)(m.Spinner, {})
                }),
                name: "ForumChannel"
            });
            class e$ extends l.PureComponent {
                componentDidMount() {
                    (0, eC.trackAppUIViewed)("guild_channel")
                }
                componentDidUpdate(e) {
                    null != this.props.channel && null != e.channel && this.props.channel.id !== e.channel.id && this.state.topicExpanded && this.setState({
                        topicExpanded: !1
                    }), this.openChannelModal()
                }
                openChannelContextMenu(e, t) {
                    let {
                        guild: l
                    } = this.props;
                    u(null != t, "Missing channel in Channel.openChannelContextMenu"), u(null != l, "Missing guild in Channel.openChannelContextMenu"), (0, E.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("229233").then(n.bind(n, "229233"));
                        return n => (0, a.jsx)(e, {
                            ...n,
                            channel: t,
                            guild: l
                        })
                    })
                }
                openThreadContextMenu(e, t) {
                    u(null != t, "Missing channel in Channel.openChannelContextMenu"), (0, E.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("994827").then(n.bind(n, "994827"));
                        return n => (0, a.jsx)(e, {
                            ...n,
                            channel: t
                        })
                    })
                }
                openDMContextMenu(e, t) {
                    u(null != t, "Missing channel in Channel.openDMContextMenu");
                    let l = eb.default.getUser(t.getRecipientId());
                    u(null != l, "Missing user in Channel.openDMContextMenu"), (0, E.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("130074").then(n.bind(n, "130074"));
                        return n => (0, a.jsx)(e, {
                            ...n,
                            user: l,
                            channelSelected: !0,
                            channel: t
                        })
                    })
                }
                renderCall() {
                    let {
                        channel: e,
                        showCall: t,
                        nsfwAllowed: n,
                        nsfwAgree: l
                    } = this.props;
                    if (u(null != e, "Missing channel in Channel.renderCall"), (null == e ? void 0 : e.isNSFW()) && (!n || !l) || !t) return null;
                    switch (e.type) {
                        case eW.ChannelTypes.GUILD_STAGE_VOICE:
                            return (0, a.jsx)(ec.default, {
                                channel: e
                            }, e.id);
                        case eW.ChannelTypes.GUILD_VOICE:
                        case eW.ChannelTypes.DM:
                        case eW.ChannelTypes.GROUP_DM:
                        case eW.ChannelTypes.PUBLIC_THREAD:
                        case eW.ChannelTypes.PRIVATE_THREAD:
                            let s = this.props.height - 200;
                            return (0, a.jsx)(j.default, {
                                channel: e,
                                renderExternalHeader: this.renderHeaderBar,
                                maxHeight: s
                            }, "call-".concat(e.id));
                        default:
                            return null
                    }
                }
                renderEmbeddedActivityPanel() {
                    let e = this.props.height - 200;
                    return (0, a.jsx)(A.default, {
                        maxHeight: e
                    })
                }
                renderChat() {
                    let {
                        channel: e,
                        nsfwAgree: t,
                        guild: n,
                        nsfwAllowed: l,
                        needSubscriptionToAccess: s
                    } = this.props;
                    if (u(null != e, "Missing channel in Channel.renderChat"), s) return (u(null != n, "premium channels must exist within a guild"), null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel()) ? (0, a.jsx)(H.default, {
                        guildId: n.id
                    }) : (0, a.jsx)(V.GroupListingsFetchContextProvider, {
                        guildId: n.id,
                        children: (0, a.jsx)(G.default, {
                            channelId: e.id,
                            guildId: n.id
                        })
                    });
                    if (e.isNSFW() && (!l || !t)) return (0, a.jsx)(_.default, {
                        guild: n
                    });
                    if (e.isGuildVocal()) return null;
                    if (e.isDirectory()) return u(null != n, "directory channels must exist within a guild"), (0, a.jsx)(P.default, {
                        channel: e,
                        guild: n
                    });
                    if (e.isForumLikeChannel()) {
                        u(null != n, "forum channels must exist within a guild");
                        let t = {
                            isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                            threadSidebarWidth: this.state.threadSidebarWidth
                        };
                        return (0, a.jsx)(eQ, {
                            channel: e,
                            guild: n,
                            sidebarState: t
                        }, e.id)
                    }
                    return (0, a.jsx)(eF.default, {
                        channel: e,
                        guild: n,
                        chatInputType: L.ChatInputTypes.NORMAL
                    }, null != n ? n.id : "home")
                }
                renderSidebar() {
                    let {
                        searchId: e,
                        channel: t,
                        parentChannel: n,
                        guild: l,
                        needSubscriptionToAccess: s,
                        section: i,
                        showCall: r
                    } = this.props;
                    if (u(null != t, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || s);
                    else if (i === eW.ChannelSections.PROFILE && t.isPrivate()) return (0, a.jsx)(eg.default, {
                        channel: t,
                        showCall: r
                    }, "private-channel-profile-".concat(t.id));
                    else if (i === eW.ChannelSections.MEMBERS) switch (t.type) {
                        case eW.ChannelTypes.GROUP_DM:
                            return (0, a.jsx)(C.default, {
                                channel: t
                            }, "private-channel-recipients-".concat(t.id));
                        case eW.ChannelTypes.GUILD_DIRECTORY:
                        case eW.ChannelTypes.GUILD_FORUM:
                        case eW.ChannelTypes.GUILD_MEDIA:
                        case eW.ChannelTypes.GUILD_ANNOUNCEMENT:
                        case eW.ChannelTypes.GUILD_TEXT:
                            var o;
                            let d = !0 === eW.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? t.id : null !== (o = t.guild_id) && void 0 !== o ? o : t.id;
                            return (0, a.jsx)(eB.default, {
                                channel: t
                            }, "channel-members-".concat(d));
                        case eW.ChannelTypes.ANNOUNCEMENT_THREAD:
                            if (null != n) return (0, a.jsx)(eB.default, {
                                channel: n
                            }, "channel-members-".concat(n.id));
                            break;
                        case eW.ChannelTypes.PUBLIC_THREAD:
                        case eW.ChannelTypes.PRIVATE_THREAD:
                            if (!t.isArchivedThread() && null != l) return (0, a.jsx)(S.default, {
                                channel: t,
                                guild: l
                            }, "channel-members-".concat(t.id))
                    } else if (i === eW.ChannelSections.SEARCH && null != e) return (0, a.jsx)(er.default, {
                        searchId: e
                    });
                    return null
                }
                openChannelModal() {
                    let {
                        channel: e,
                        guildId: t,
                        hasModalOpen: l,
                        showWelcomeModal: s,
                        isLurking: i,
                        isUnavailable: r,
                        showRealNameModal: u
                    } = this.props;
                    return null == e || null == t || r || l ? null : (u && (0, m.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("278999").then(n.bind(n, "278999"));
                        return n => (0, a.jsx)(e, {
                            ...n,
                            guildId: t
                        })
                    }, {
                        onCloseCallback: () => F.default.viewPrompt(eZ.GuildPrompts.REAL_NAME_PROMPT, t),
                        modalKey: "Guild Hub Real Name Modal"
                    }), s && (0, m.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("900257").then(n.bind(n, "900257"));
                        return n => (0, a.jsx)(e, {
                            ...n,
                            guildId: t
                        })
                    }, {
                        onCloseCallback: () => (0, e_.welcomeScreenViewed)(t, i),
                        modalKey: "Guild Welcome Screen Modal"
                    }), null)
                }
                renderThreadSidebar() {
                    let e;
                    let {
                        channel: t,
                        section: n,
                        channelSidebarState: l,
                        guildSidebarState: s,
                        nsfwAgree: i,
                        nsfwAllowed: r,
                        width: u
                    } = this.props;
                    if (null == s && null == l) return null;
                    if (n === eW.ChannelSections.SIDEBAR_CHAT && null != l) {
                        if ((null == t ? void 0 : t.isNSFW()) && (!r || !i)) return null;
                        switch (l.type) {
                            case eo.SidebarType.CREATE_THREAD:
                                if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                                e = (0, a.jsx)(ef.default, {
                                    parentChannelId: l.parentChannelId,
                                    parentMessageId: l.parentMessageId,
                                    location: l.location
                                });
                                break;
                            case eo.SidebarType.VIEW_THREAD:
                                let n = (null == t ? void 0 : t.isForumLikeChannel()) ? U.default : eE.default;
                                e = (0, a.jsx)(n, {
                                    channelId: l.channelId
                                });
                                break;
                            case eo.SidebarType.VIEW_CHANNEL:
                            case eo.SidebarType.VIEW_MESSAGE_REQUEST:
                            default:
                                return null
                        }
                    }
                    if (null != s && null == e) {
                        if (s.type === eo.GuildSidebarType.GUILD_MEMBER_MOD_VIEW) {
                            let {
                                guildId: e,
                                userId: t
                            } = s.details;
                            return (0, a.jsx)("div", {
                                style: {
                                    width: eW.DEFAULT_CHAT_SIDEBAR_WIDTH
                                },
                                children: (0, a.jsx)(k.default, {
                                    guildId: e,
                                    userId: t,
                                    onClose: () => eu.default.closeGuildSidebar(e)
                                })
                            })
                        } else return null
                    }
                    if (null == e) return null;
                    let o = (null == t ? void 0 : t.type) != null && eW.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
                        d = u - eW.CHANNEL_SIDEBAR_WIDTH - o;
                    return (0, a.jsx)(ek.default, {
                        sidebarType: (null == t ? void 0 : t.type) != null && eW.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? ek.ChatSidebarType.PostSidebar : ek.ChatSidebarType.ThreadSidebar,
                        maxWidth: d,
                        onWidthChange: this.handleThreadSidebarResize,
                        children: e
                    })
                }
                render() {
                    let {
                        channel: e,
                        guild: t,
                        formattedChannelName: n,
                        showCall: l,
                        isUnavailable: s,
                        layout: r,
                        section: u,
                        hasModalOpen: o,
                        guildSidebarState: d
                    } = this.props, {
                        threadSidebarWidth: c,
                        isThreadSidebarFloating: f
                    } = this.state;
                    if (s) return (0, a.jsx)(eH.default, {});
                    if (null == e) return (0, a.jsx)(eG.default, {
                        channelId: this.props.channelId
                    });
                    let h = u === eW.ChannelSections.SIDEBAR_CHAT,
                        p = null != d && !h,
                        m = !e.isForumLikeChannel() && !o,
                        E = null == t ? void 0 : t.name;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(b.AppPageTitle, {
                            location: E,
                            subsection: null != n ? n : void 0
                        }), (0, a.jsxs)("div", {
                            className: i(eq.chat, {
                                [eq.threadSidebarOpen]: h || p,
                                [eq.threadSidebarFloating]: h && f
                            }),
                            children: [m ? (0, a.jsx)(g.default, {
                                style: {
                                    right: h ? c : void 0
                                },
                                className: eq.uploadArea,
                                channel: e,
                                draftType: eN.DraftType.ChannelMessage
                            }) : null, l ? null : this.renderHeaderBar(), this.renderCall(), this.renderEmbeddedActivityPanel(), (0, a.jsxs)("div", {
                                className: i(eq.content, {
                                    [eq.noChat]: r === eW.ChannelLayouts.NO_CHAT
                                }),
                                children: [(0, a.jsx)(eV.default, {
                                    children: this.renderChat()
                                }), this.renderSidebar()]
                            })]
                        }), this.renderThreadSidebar(), (0, a.jsx)(W.default, {})]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        topicExpanded: !1,
                        threadSidebarWidth: void 0,
                        isThreadSidebarFloating: !1
                    }, this.handleTitleParentClick = () => {
                        let {
                            parentChannel: e
                        } = this.props;
                        null != e && (0, ei.transitionToChannel)(e.id)
                    }, this._handleContextMenu = (e, t) => {
                        switch (t.type) {
                            case eW.ChannelTypes.GUILD_VOICE:
                            case eW.ChannelTypes.GUILD_ANNOUNCEMENT:
                            case eW.ChannelTypes.GUILD_TEXT:
                            case eW.ChannelTypes.GUILD_FORUM:
                            case eW.ChannelTypes.GUILD_MEDIA:
                                this.openChannelContextMenu(e, t);
                                break;
                            case eW.ChannelTypes.ANNOUNCEMENT_THREAD:
                            case eW.ChannelTypes.PUBLIC_THREAD:
                            case eW.ChannelTypes.PRIVATE_THREAD:
                                this.openThreadContextMenu(e, t);
                                break;
                            case eW.ChannelTypes.DM:
                                this.openDMContextMenu(e, t)
                        }
                    }, this.handleContextMenu = e => {
                        u(null != this.props.channel, "Missing channel in Channel.handleContextMenu"), this._handleContextMenu(e, this.props.channel)
                    }, this.handleParentContextMenu = e => {
                        u(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"), this._handleContextMenu(e, this.props.parentChannel)
                    }, this.handleThreadSidebarResize = (e, t) => {
                        this.setState({
                            threadSidebarWidth: e,
                            isThreadSidebarFloating: t
                        })
                    }, this.openUserProfile = () => {
                        let {
                            channel: e
                        } = this.props;
                        u(null == e ? void 0 : e.isPrivate(), "Missing private channel in Channel.openUserProfile"), (0, eS.openUserProfileModal)({
                            userId: e.getRecipientId(),
                            guildId: e.guild_id,
                            channelId: e.id,
                            analyticsLocation: {
                                section: eW.AnalyticsSections.CHANNEL_HEADER
                            }
                        })
                    }, this.renderClipsEnabledIndicatorToolbarItem = () => {
                        let {
                            inCall: e,
                            voiceChannel: t
                        } = this.props;
                        return e ? (0, a.jsx)(O.default, {
                            channelId: null != t ? t.id : null
                        }) : null
                    }, this.renderStreamQualityLiveIndicatorToolbarItem = () => {
                        let {
                            selectedParticipant: e
                        } = this.props;
                        return (null == e ? void 0 : e.type) !== ez.ParticipantTypes.STREAM ? null : (0, a.jsx)(w.default, {
                            size: eD.default.Sizes.LARGE,
                            participant: e,
                            showQuality: !0
                        }, "live-indicator")
                    }, this.renderHeaderToolbar = () => {
                        let {
                            channel: e,
                            parentChannel: t,
                            isLurking: n,
                            showCall: l
                        } = this.props;
                        u(null != e, "Missing channel in Channel.renderHeaderToolbar");
                        let s = [];
                        if (e.isSystemDM()) return s;
                        switch (e.type) {
                            case eW.ChannelTypes.GUILD_STAGE_VOICE:
                            case eW.ChannelTypes.GUILD_VOICE:
                                break;
                            case eW.ChannelTypes.DM:
                                s.push(this.renderClipsEnabledIndicatorToolbarItem()), s.push(this.renderStreamQualityLiveIndicatorToolbarItem()), s.push((0, a.jsx)(Q.default, {
                                    channel: e
                                }, "calls")), s.push((0, a.jsx)(K.default, {
                                    channel: e
                                }, "pins")), s.push((0, a.jsx)($.default, {
                                    channel: e,
                                    tooltip: eJ.default.Messages.GROUP_DM_ADD_FRIENDS
                                }, "invite")), s.push((0, a.jsx)(ee.default, {
                                    channel: e,
                                    showCall: l
                                }, "profile"));
                                break;
                            case eW.ChannelTypes.GROUP_DM:
                                if (s.push(this.renderClipsEnabledIndicatorToolbarItem()), s.push(this.renderStreamQualityLiveIndicatorToolbarItem()), s.push((0, a.jsx)(Q.default, {
                                        channel: e
                                    }, "calls")), s.push((0, a.jsx)(K.default, {
                                        channel: e
                                    }, "pins")), !e.isManaged()) {
                                    let t = eJ.default.Messages.GROUP_DM_ADD_FRIENDS;
                                    s.push((0, a.jsx)($.default, {
                                        channel: e,
                                        tooltip: t
                                    }, "invite"))
                                }
                                s.push((0, a.jsx)(Y.default, {
                                    channelId: e.id
                                }, "members"));
                                break;
                            case eW.ChannelTypes.ANNOUNCEMENT_THREAD:
                            case eW.ChannelTypes.PRIVATE_THREAD:
                            case eW.ChannelTypes.PUBLIC_THREAD:
                                null != t && !t.isForumLikeChannel() && s.push((0, a.jsx)(eh.default, {
                                    channel: t
                                }, "browser")), e.isVocalThread() && s.push((0, a.jsx)(et.default, {
                                    channel: e
                                }, "thread-call")), s.push((0, a.jsx)(ep.default, {
                                    channel: e
                                }, "notifications")), s.push((0, a.jsx)(K.default, {
                                    channel: e
                                }, "pins")), !e.isArchivedThread() && s.push((0, a.jsx)(Y.default, {
                                    channelId: e.id
                                }, "members")), null != t && (0, v.canSeeChannelSummaries)(e) && s.push((0, a.jsx)(Z.default, {
                                    channel: e
                                }, "summaries")), s.push((0, a.jsx)(em.default, {
                                    channel: e
                                }, "threads-overflow"));
                                break;
                            case eW.ChannelTypes.GUILD_ANNOUNCEMENT:
                            case eW.ChannelTypes.GUILD_TEXT:
                                s.push((0, a.jsx)(eh.default, {
                                    channel: e
                                }, "browser")), !n && s.push((0, a.jsx)(z.default, {
                                    channel: e
                                }, "notifications")), s.push((0, a.jsx)(K.default, {
                                    channel: e
                                }, "pins")), s.push((0, a.jsx)(Y.default, {
                                    channelId: e.id
                                }, "members")), (0, v.canSeeChannelSummaries)(e) && s.push((0, a.jsx)(Z.default, {
                                    channel: e
                                }, "summaries"));
                                break;
                            case eW.ChannelTypes.GUILD_FORUM:
                            case eW.ChannelTypes.GUILD_MEDIA:
                                !n && (s.push((0, a.jsx)(X.default, {
                                    channel: e
                                }, "forum-onboarding")), s.push((0, a.jsx)(z.default, {
                                    channel: e
                                }, "notifications"))), !__OVERLAY__ && s.push((0, a.jsx)(Y.default, {
                                    channelId: e.id
                                }, "members"));
                                break;
                            case eW.ChannelTypes.GUILD_DIRECTORY:
                                s.push((0, a.jsx)(Y.default, {
                                    channelId: e.id
                                }, "members"))
                        }
                        return s
                    }, this.renderMobileToolbar = () => {
                        let {
                            channel: e
                        } = this.props;
                        u(null != e, "Missing channel in Channel.renderHeaderToolbar");
                        let t = [];
                        if (e.isSystemDM()) return t;
                        switch (e.type) {
                            case eW.ChannelTypes.GUILD_STAGE_VOICE:
                            case eW.ChannelTypes.GUILD_VOICE:
                            case eW.ChannelTypes.DM:
                                break;
                            case eW.ChannelTypes.GROUP_DM:
                                t.push((0, a.jsx)(Y.default, {
                                    channelId: e.id
                                }, "members"));
                                break;
                            case eW.ChannelTypes.ANNOUNCEMENT_THREAD:
                            case eW.ChannelTypes.PRIVATE_THREAD:
                            case eW.ChannelTypes.PUBLIC_THREAD:
                                !e.isArchivedThread() && t.push((0, a.jsx)(Y.default, {
                                    channelId: e.id
                                }, "members"));
                                break;
                            case eW.ChannelTypes.GUILD_ANNOUNCEMENT:
                            case eW.ChannelTypes.GUILD_TEXT:
                            case eW.ChannelTypes.GUILD_FORUM:
                            case eW.ChannelTypes.GUILD_MEDIA:
                            case eW.ChannelTypes.GUILD_DIRECTORY:
                                t.push((0, a.jsx)(Y.default, {
                                    channelId: e.id
                                }, "members"))
                        }
                        return t
                    }, this.renderFollowButton = () => {
                        let {
                            showFollowButton: e,
                            channel: t
                        } = this.props;
                        return e ? (0, a.jsx)(m.Button, {
                            size: m.Button.Sizes.MIN,
                            color: m.Button.Colors.PRIMARY,
                            className: eq.followButton,
                            onClick: () => (0, m.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("996177").then(n.bind(n, "996177"));
                                return n => (0, a.jsx)(e, {
                                    channel: t,
                                    ...n
                                })
                            }),
                            children: eJ.default.Messages.FOLLOW
                        }) : null
                    }, this.renderHeaderBar = () => {
                        let {
                            channel: e,
                            channelName: t,
                            parentChannel: n,
                            guild: l,
                            guildId: s,
                            showCall: r,
                            hasVideo: o,
                            channelEmojiLeftOfIcon: d,
                            headerGuildBreadcrumbPosition: c
                        } = this.props;
                        u(null != e, "Missing channel in Channel.renderHeaderBar"), u(null != t, "Should not be null if channel is not null.");
                        let f = e.isDM() && !e.isSystemDM() ? this.openUserProfile : void 0,
                            h = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
                        return (0, a.jsxs)(J.default, {
                            guildId: s,
                            channelId: e.id,
                            channelType: e.type,
                            hideSearch: e.isDirectory(),
                            toolbar: this.renderHeaderToolbar(),
                            mobileToolbar: this.renderMobileToolbar(),
                            className: i(eq.title, o && r ? (0, eU.getThemeClass)(eW.ThemeTypes.DARK) : null),
                            transparent: r,
                            "aria-label": eJ.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
                            children: ["left" === c && (0, a.jsx)(q.HeaderGuildBreadcrumb, {
                                channel: e,
                                guild: l,
                                caretPosition: "right"
                            }), (0, q.renderTitle)({
                                channel: e,
                                channelName: t,
                                parentChannel: n,
                                guild: l,
                                hasVideo: o,
                                handleContextMenu: this.handleContextMenu,
                                handleParentContextMenu: this.handleParentContextMenu,
                                handleClick: f,
                                handleParentClick: h,
                                renderFollowButton: this.renderFollowButton,
                                channelEmojiLeftOfIcon: d
                            }), "right" === c && (0, a.jsx)(q.HeaderGuildBreadcrumb, {
                                channel: e,
                                guild: l,
                                caretPosition: "left"
                            }), (0, q.renderTopic)(e, l)]
                        }, "header-".concat(e.id))
                    }
                }
            }
            let e0 = (0, I.default)(e$);
            var e1 = l.memo(function(e) {
                var t;
                let {
                    providedChannel: n
                } = e, [s, i] = l.useState(null), r = (0, f.useStateFromStores)([eO.default], () => eO.default.getChannelId()), u = (0, f.useStateFromStores)([eO.default], () => eO.default.getVoiceChannelId()), o = (0, f.useStateFromStores)([ex.default], () => null != n ? n : ex.default.getChannel(r), [r, n]), m = (0, f.useStateFromStores)([ex.default], () => ex.default.getChannel(u), [u]), E = null == o ? void 0 : o.parent_id, C = (0, f.useStateFromStores)([ex.default], () => ex.default.getChannel(E), [E]), S = (0, f.useStateFromStores)([eR.default], () => eR.default.getGuild(null == o ? void 0 : o.guild_id), [o]), {
                    needSubscriptionToAccess: g
                } = (0, B.default)(null !== (t = null == o ? void 0 : o.id) && void 0 !== t ? t : void 0), _ = (0, f.useStateFromStores)([R.default], () => {
                    let e = null != r ? R.default.getParticipants(r) : [],
                        t = null != r ? R.default.getActivityParticipants(r) : [];
                    return e.length - t.length > 0
                }, [r]), I = (0, f.useStateFromStores)([N.default], () => {
                    var e;
                    return N.default.getSelfEmbeddedActivityForChannel(null !== (e = null == o ? void 0 : o.id) && void 0 !== e ? e : "")
                }), A = (0, f.useStateFromStores)([N.default], () => N.default.getActivityPanelMode()), j = null != I && !(0, M.default)(null == o ? void 0 : o.id) && A === eY.ActivityPanelModes.PANEL, L = (0, f.useStateFromStores)([eP.default], () => null != o && o.isVocalThread() && !d.isEmpty(eP.default.getVoiceStatesForChannel(o.id)), [o]), O = (null == o ? void 0 : o.isGuildVocal()) || j || _ || L, {
                    welcomeModalChannelId: y
                } = (0, c.useLocation)(), b = (0, f.useStateFromStores)([el.default], () => null != o && el.default.isLurking(o.guild_id), [o]), P = (0, f.useStateFromStores)([eI.default], () => eI.default.hasSeen(null == o ? void 0 : o.guild_id, b), [o, b]), U = (0, f.useStateFromStores)([R.default, N.default], () => null != N.default.getConnectedActivityChannelId() && N.default.getActivityPanelMode() === eY.ActivityPanelModes.PANEL ? N.default.getFocusedLayout() === eY.FocusedActivityLayouts.NO_CHAT ? eW.ChannelLayouts.NO_CHAT : eW.ChannelLayouts.NORMAL : null != r ? R.default.getLayout(r) : eW.ChannelLayouts.NORMAL, [r]), w = (0, f.useStateFromStores)([R.default], () => null != o ? R.default.getSelectedParticipant(o.id) : null), F = (0, f.useStateFromStores)([eb.default], () => eb.default.getCurrentUser()), k = (0, en.default)(S), V = (0, eT.default)(y, null == S ? void 0 : S.id), {
                    section: H,
                    channelSidebarState: G
                } = (0, f.useStateFromStoresObject)([ev.default], () => ({
                    section: ev.default.getSection(r, null == o ? void 0 : o.isDM()),
                    channelSidebarState: ev.default.getSidebarState(r)
                }), [r, o]), W = null == S ? void 0 : S.id, Y = (0, f.useStateFromStores)([ev.default], () => ev.default.getGuildSidebarState(W), [W]), z = (0, f.useStateFromStores)([ey.default], () => ey.default.getGuildId()), K = z === eW.FAVORITES, Z = (0, ew.default)(o), X = (0, ew.default)(o, !0), J = null != o && u === o.id, q = null != o && o.isGuildStageVoice();
                l.useEffect(() => {
                    var e, t, n;
                    let a = (0, es.getHistory)();
                    if ((null == a ? void 0 : null === (e = a.location) || void 0 === e ? void 0 : e.state) === eX.STAGE_INVITE_STATE_KEY) {
                        let {
                            channelId: e
                        } = null !== (n = (0, ea.tryParseChannelPath)(null == a ? void 0 : null === (t = a.location) || void 0 === t ? void 0 : t.pathname)) && void 0 !== n ? n : {};
                        null != e && i(e)
                    }
                }, []), l.useEffect(() => {
                    null != s && null != o && q && o.id === s && !J && ((0, ed.connectAndOpen)(o), i(null))
                }, [s, q]);
                let Q = (0, v.useChannelSummariesExperiment)(o),
                    $ = null != o && o.isPrivate(),
                    ee = (0, x.default)($),
                    et = (0, x.default)(null == o ? void 0 : o.id);
                l.useEffect(() => {
                    let e = ee && !$,
                        t = ee && $ && (null == o ? void 0 : o.id) !== et;
                    (e || t) && (0, D.markDismissibleContentAsDismissed)(h.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, {
                        dismissAction: eK.ContentDismissActionType.AUTO
                    })
                }, [null == o ? void 0 : o.id, et, $, ee]);
                let {
                    left: ei
                } = T.ChannelEmojisExperiment.useExperiment({
                    location: "781dc9_2"
                }, {
                    autoTrackExposure: !1
                }), er = (0, p.useHasAnyModalOpen)();
                return (0, a.jsx)(e0, {
                    guildId: null == o ? void 0 : o.guild_id,
                    channelId: r,
                    channel: o,
                    channelName: Z,
                    formattedChannelName: X,
                    parentChannel: C,
                    voiceChannel: m,
                    layout: U,
                    needSubscriptionToAccess: g,
                    isLurking: b,
                    hasModalOpen: er,
                    section: H,
                    channelSidebarState: G,
                    guildSidebarState: Y,
                    guild: S,
                    searchId: (0, f.useStateFromStores)([eL.default], () => eL.default.getCurrentSearchId()),
                    showCall: !g && O,
                    nsfwAgree: (0, f.useStateFromStores)([eM.default], () => eM.default.didAgree(null == o ? void 0 : o.guild_id)),
                    isMobile: (0, f.useStateFromStores)([ej.default], () => (null == o ? void 0 : o.type) === eW.ChannelTypes.DM && ej.default.isMobileOnline(o.getRecipientId()), [o]),
                    isUnavailable: (0, f.useStateFromStores)([eA.default], () => (null == o ? void 0 : o.guild_id) != null && eA.default.isUnavailable(o.guild_id), [o]),
                    showRealNameModal: k,
                    showWelcomeModal: !P && V,
                    showFollowButton: (null == o ? void 0 : o.type) === eW.ChannelTypes.GUILD_ANNOUNCEMENT && (null == S ? void 0 : S.hasFeature(eW.GuildFeatures.NEWS)) || !1,
                    ...(0, f.useStateFromStoresObject)([eP.default], () => ({
                        hasVideo: null != o && eP.default.hasVideo(o.id)
                    }), [o]),
                    inCall: J,
                    selectedParticipant: w,
                    nsfwAllowed: (null == F ? void 0 : F.nsfwAllowed) === !0,
                    showChannelSummaries: Q,
                    channelEmojiLeftOfIcon: ei,
                    headerGuildBreadcrumbPosition: K ? "left" : "right"
                })
            })
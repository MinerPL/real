            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ep
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                a = n.n(r),
                s = n("627445"),
                o = n.n(s),
                u = n("917351"),
                d = n.n(u),
                c = n("759843"),
                f = n("498574"),
                h = n("446674"),
                g = n("669491"),
                p = n("77078"),
                m = n("970728"),
                v = n("685073"),
                I = n("84339"),
                E = n("812204"),
                _ = n("685665"),
                T = n("442939"),
                N = n("656038"),
                C = n("419830"),
                S = n("262362"),
                x = n("582415"),
                w = n("385042"),
                A = n("87241"),
                M = n("155996"),
                R = n("834052"),
                y = n("373469"),
                L = n("19766"),
                b = n("42203"),
                O = n("923959"),
                U = n("330154"),
                V = n("705955"),
                F = n("957255"),
                j = n("824563"),
                D = n("18494"),
                G = n("697218"),
                k = n("316133"),
                P = n("941886"),
                H = n("145131"),
                B = n("810567"),
                W = n("474571"),
                z = n("423487"),
                K = n("599110"),
                Z = n("568734"),
                Y = n("354023"),
                q = n("9294"),
                X = n("512027"),
                Q = n("234919"),
                J = n("52393"),
                $ = n("216463"),
                ee = n("474592"),
                et = n("652453"),
                en = n("470259"),
                el = n("91366"),
                ei = n("49111"),
                er = n("724210"),
                ea = n("782340"),
                es = n("435808"),
                eo = n("926622"),
                eu = n("486425"),
                ed = n("56585");
            let {
                INVITE_OPTIONS_FOREVER: ec,
                INVITE_OPTIONS_7_DAYS: ef,
                INVITE_OPTIONS_UNLIMITED: eh
            } = Y.default;
            class eg extends i.PureComponent {
                componentDidMount() {
                    let {
                        inviteChannel: e,
                        code: t,
                        guild: n,
                        source: l,
                        canCreateInvites: i,
                        analyticsLocation: r,
                        streamUserId: a,
                        targetType: s,
                        targetUserId: o,
                        application: u,
                        initialCounts: d,
                        rows: c,
                        showFriends: f,
                        modalState: h,
                        setModalState: g
                    } = this.props, {
                        maxAge: p,
                        maxUses: v,
                        temporary: I
                    } = h;
                    if (i) {
                        let n = null == e ? void 0 : e.id;
                        if (null == n) return;
                        g({
                            networkError: void 0
                        }), m.default.createInvite(n, {
                            validate: null != t ? t : null,
                            max_age: p,
                            max_uses: v,
                            target_user_id: o,
                            target_type: s,
                            target_application_id: null == u ? void 0 : u.id,
                            temporary: I
                        }, l).catch(e => g({
                            networkError: e
                        }))
                    }
                    if (f && K.default.track(ei.AnalyticEvents.INVITE_SUGGESTION_OPENED, {
                            location: l,
                            num_suggestions: c.length,
                            num_friends: d.numFriends,
                            num_dms: d.numDms,
                            num_group_dms: d.numGroupDms,
                            guild_id: n.id
                        }), Q.default.trackExposure({
                            guildId: null == n ? void 0 : n.id,
                            location: "acc417_1"
                        }), null != a) {
                        let e = y.default.getStreamForUser(a, n.id),
                            t = (0, x.getStreamerApplication)(e, j.default);
                        K.default.track(ei.AnalyticEvents.OPEN_MODAL, {
                            type: "Send Stream Invite",
                            source: l,
                            location: r,
                            other_user_id: a,
                            application_id: null != t ? t.id : null,
                            application_name: null != t ? t.name : null,
                            game_id: null != t ? t.id : null
                        })
                    } else(null == u ? void 0 : u.id) != null || K.default.track(ei.AnalyticEvents.OPEN_MODAL, {
                        type: "Instant Invite Modal",
                        source: l,
                        location: r
                    })
                }
                componentWillUnmount() {
                    let {
                        inviteChannel: e,
                        inviteFlags: t,
                        setInviteFlags: n
                    } = this.props;
                    (0, Z.hasFlag)(t, f.GuildInviteFlags.IS_GUEST_INVITE) && null != e && (n((0, Z.removeFlag)(t, f.GuildInviteFlags.IS_GUEST_INVITE)), m.default.clearInviteFromStore(e.id))
                }
                getInviteKey() {
                    let {
                        code: e,
                        vanityURLCode: t,
                        guildScheduledEvent: n,
                        modalState: l
                    } = this.props, {
                        showVanityURL: i
                    } = l, r = i ? t : null != e ? e : t;
                    return null == r ? r : (0, q.generateInviteKeyFromExtraData)({
                        baseCode: r,
                        guildScheduledEventId: null == n ? void 0 : n.id
                    })
                }
                renderChannelWarning() {
                    let {
                        inviteChannel: e
                    } = this.props;
                    return (0, N.default)(e) ? (0, l.jsxs)("div", {
                        className: es.warningContainer,
                        children: [(0, l.jsx)(z.default, {
                            className: es.warningIcon,
                            color: g.default.unsafe_rawColors.YELLOW_300.css,
                            width: 12
                        }), (0, l.jsx)(p.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: ea.default.Messages.INVITE_PRIVATE_CHANNEL_WARNING
                        })]
                    }) : null
                }
                renderHeader() {
                    let e;
                    let {
                        guild: t,
                        showFriends: n,
                        guildScheduledEvent: i,
                        streamUserId: r,
                        application: s,
                        welcomeToServer: o,
                        inviteChannel: u,
                        modalState: d,
                        handleDone: c
                    } = this.props, {
                        query: f
                    } = d, h = null, g = null;
                    if (e = o ? null : null != r ? ea.default.Messages.INVITE_STREAM_HEADER : null != s ? ea.default.Messages.EMBEDDED_ACTIVITIES_INVITE_FRIENDS_TO_ACTIVITY_NAME.format({
                            applicationName: s.name
                        }) : null != i ? ea.default.Messages.GUILD_EVENT_INVITE_MODAL_TITLE : (null == u ? void 0 : u.isGuildStageVoice()) ? ea.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_HEADER : ea.default.Messages.INVITE_TO_SERVER_NAME.format({
                            name: t.toString()
                        }), null != u) {
                        let e = (0, C.getChannelIconComponent)(u, t);
                        null != e && (g = (0, l.jsxs)("div", {
                            className: es.headerChannelContainer,
                            children: [(0, l.jsx)(e, {
                                className: es.channelIcon
                            }), (0, l.jsx)(p.Text, {
                                color: "interactive-normal",
                                variant: "text-md/normal",
                                children: u.name
                            })]
                        }))
                    }
                    return h = t.hasFeature(ei.GuildFeatures.HUB) ? (0, l.jsxs)("div", {
                        className: es.hubHeader,
                        children: [(0, l.jsx)(p.Heading, {
                            className: a(es.hubInviteTitle, es.headerCloseButtonSpacing),
                            id: this._headerId,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            children: ea.default.Messages.HUB_INVITE_HEADER
                        }), (0, l.jsx)(p.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: ea.default.Messages.HUB_INVITE_SUBHEADER
                        }), n && (0, l.jsx)(B.default, {
                            query: f,
                            className: es.hubFriendSearch,
                            onChange: this.handleQueryChange,
                            placeholder: ea.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
                            "aria-label": ea.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
                            autoFocus: !0,
                            onClear: this.handleClearSearch
                        })]
                    }) : n ? (0, l.jsxs)("div", {
                        className: es.header,
                        children: [(0, l.jsx)("div", {
                            className: es.headerTopRow,
                            children: (0, l.jsx)(p.FormTitle, {
                                id: this._headerId,
                                tag: "h2",
                                className: a(eo.marginBottom4, es.headerCloseButtonSpacing, es.headerText),
                                children: e
                            })
                        }), g, (0, l.jsx)(B.default, {
                            query: f,
                            className: es.searchBar,
                            onChange: this.handleQueryChange,
                            placeholder: ea.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
                            autoFocus: !0,
                            onClear: this.handleClearSearch
                        }), (0, l.jsx)("div", {
                            className: eo.marginTop8,
                            children: this.renderChannelWarning()
                        })]
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(p.FormTitle, {
                            id: this._headerId,
                            tag: "h2",
                            className: a(eo.marginReset, es.headerCloseButtonSpacing, es.headerText),
                            children: e
                        }), g, this.renderChannelWarning()]
                    }), (0, l.jsxs)(p.ModalHeader, {
                        separator: n,
                        children: [(0, l.jsx)(p.ModalCloseButton, {
                            className: es.closeButton,
                            onClick: c
                        }), (0, l.jsxs)("div", {
                            className: es.headerContainer,
                            children: [o && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)("img", {
                                    className: es.welcomeImage,
                                    src: ed,
                                    alt: ""
                                }), (0, l.jsx)(p.H, {
                                    className: es.welcomeHeading,
                                    children: ea.default.Messages.INVITE_WELCOME_HEADING
                                }), (0, l.jsx)("p", {
                                    className: es.welcomeSubheading,
                                    children: ea.default.Messages.INVITE_WELCOME_SUBHEADING
                                })]
                            }), null != r ? (0, l.jsx)(w.default, {}) : null, h]
                        })]
                    })
                }
                renderFriendsBody() {
                    let {
                        rows: e
                    } = this.props, t = this.getInviteKey();
                    return 0 === e.length ? (0, l.jsx)(p.ModalContent, {
                        className: a(es.inviteRowEmptyState),
                        children: (0, l.jsx)(P.EmptyStateText, {
                            children: ea.default.Messages.INVITE_FRIEND_MODAL_NO_RESULTS
                        })
                    }) : null == t ? (0, l.jsx)(p.ModalContent, {
                        className: a(es.inviteRowEmptyState),
                        children: (0, l.jsx)(P.EmptyStateText, {
                            children: ea.default.Messages.INVITE_FRIEND_MODAL_LOADING
                        })
                    }) : (0, l.jsx)(p.ModalListContent, {
                        className: es.scroller,
                        sections: [e.length],
                        renderSection: this.renderSection,
                        sectionHeight: 0,
                        renderRow: this.renderRow,
                        rowHeight: this.getRowHeight,
                        paddingBottom: 16
                    })
                }
                renderSection() {
                    return null
                }
                renderBody() {
                    var e;
                    let {
                        guild: t,
                        showFriends: n,
                        streamUserId: i,
                        application: r
                    } = this.props;
                    if (n) return this.renderFriendsBody();
                    let a = (0, J.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : ""),
                        s = G.default.getCurrentUser();
                    o(null != s, "InstantInviteModal: user cannot be undefined");
                    let u = t.isOwner(s),
                        d = u ? ea.default.Messages.INVITE_SHARE_LINK_OWN_SERVER : ea.default.Messages.SHARE_INVITE_LINK_FOR_ACCESS;
                    return null != i ? d = ea.default.Messages.INVITE_SHARE_LINK_TO_STREAM : null != r && (d = ea.default.Messages.EMBEDDED_ACTIVITIES_SHARE_LINK_TO_ACTIVITY), (0, l.jsx)(p.ModalContent, {
                        className: es.noScroll,
                        children: (0, l.jsxs)(H.default, {
                            direction: H.default.Direction.VERTICAL,
                            className: eo.marginBottom20,
                            children: [(0, l.jsx)(p.Text, {
                                className: es.subText,
                                variant: "text-sm/normal",
                                children: d
                            }), (0, l.jsx)(et.InviteCopyInput, {
                                ...this.props,
                                copyValue: a
                            })]
                        })
                    })
                }
                renderFooter() {
                    var e;
                    let {
                        noInvitesAvailable: t,
                        showFriends: n,
                        guildScheduledEvent: i,
                        streamUserId: r,
                        application: s,
                        inviteChannel: o,
                        modalState: u
                    } = this.props, {
                        maxAge: d
                    } = u, c = null, f = (0, J.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : "");
                    if (n) {
                        let e = ea.default.Messages.INVITE_FOOTER_LINK_HEADER;
                        null != r ? e = ea.default.Messages.INVITE_STREAM_FOOTER_LINK_HEADER : null != s ? e = ea.default.Messages.EMBEDDED_ACTIVITIES_INVITE_ACTIVITY_FOOTER_LINK_HEADER : null != i ? e = ea.default.Messages.GUILD_EVENT_INVITE_MODAL_FOOTER : (null == o ? void 0 : o.isGuildStageVoice()) && (e = ea.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_FOOTER), c = (0, l.jsxs)(H.default, {
                            direction: H.default.Direction.VERTICAL,
                            className: es.content,
                            children: [(0, l.jsx)(p.FormTitle, {
                                tag: "h5",
                                className: eo.marginBottom8,
                                children: e
                            }), (0, l.jsx)(et.InviteCopyInput, {
                                ...this.props,
                                copyValue: f
                            })]
                        })
                    } else !t && (c = (0, l.jsxs)(H.default, {
                        justify: H.default.Justify.BETWEEN,
                        className: eo.marginTop20,
                        children: [(0, l.jsx)(p.Checkbox, {
                            size: 18,
                            type: p.Checkbox.Types.INVERTED,
                            value: d === ec.value,
                            onChange: this.handleToggleMaxAge,
                            children: (0, l.jsx)(p.Text, {
                                className: es.checkBoxLabel,
                                variant: "text-sm/normal",
                                children: ea.default.Messages.SET_INVITE_LINK_NEVER_EXPIRE
                            })
                        }), (0, l.jsx)(p.Tooltip, {
                            text: ea.default.Messages.LINK_SETTINGS,
                            children: e => {
                                let {
                                    onMouseEnter: t,
                                    onMouseLeave: n
                                } = e;
                                return (0, l.jsx)(p.Clickable, {
                                    onClick: this.openSettings,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    className: eu.cursorPointer,
                                    children: (0, l.jsx)(W.default, {
                                        width: 18,
                                        height: 18,
                                        color: g.default.unsafe_rawColors.PRIMARY_400.css
                                    })
                                })
                            }
                        })]
                    }));
                    return null != c ? (0, l.jsx)(p.ModalFooter, {
                        className: a({
                            [es.noPadding]: !n,
                            [es.footer]: n
                        }),
                        children: c
                    }) : null
                }
                getModalContent() {
                    let {
                        modalState: e,
                        handleDone: t
                    } = this.props, {
                        currentPage: n
                    } = e;
                    switch (n) {
                        case el.InstantInviteModalPages.MAIN:
                            return (0, l.jsxs)(l.Fragment, {
                                children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
                            });
                        case el.InstantInviteModalPages.SETTINGS:
                            return (0, l.jsx)(ee.InstantInviteSettingsPage, {
                                ...this.props,
                                headerId: this._headerId,
                                onSelectMaxAge: this.handleSelectMaxAge,
                                onSelectMaxUses: this.handleSelectMaxUses,
                                onToggleTemporary: this.handleToggleTemporary,
                                handleDone: t
                            });
                        case el.InstantInviteModalPages.GUEST:
                            var i;
                            let r = (0, J.default)(null !== (i = this.getInviteKey()) && void 0 !== i ? i : "");
                            return (0, l.jsx)($.InstantInviteGuestPage, {
                                ...this.props,
                                headerId: this._headerId,
                                handleDone: t,
                                copyValue: r
                            });
                        default:
                            return null
                    }
                }
                render() {
                    let {
                        transitionState: e,
                        inviteChannel: t,
                        guild: n
                    } = this.props;
                    return (0, l.jsx)("div", {
                        className: this.props.showFriends ? es.wrapper : void 0,
                        children: (0, l.jsx)(p.ModalRoot, {
                            impression: {
                                impressionName: c.ImpressionNames.GUILD_INVITE,
                                impressionProperties: {
                                    invite_channel_id: null == t ? void 0 : t.id,
                                    invite_guild_id: n.id
                                }
                            },
                            "aria-labelledby": this._headerId,
                            transitionState: e,
                            className: es.modal,
                            children: this.getModalContent()
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._scroller = null, this._headerId = d.uniqueId(), this.openSettings = () => {
                        let {
                            changePage: e
                        } = this.props;
                        e(el.InstantInviteModalPages.SETTINGS)
                    }, this.handleSelectMaxAge = e => {
                        let {
                            modalState: t,
                            setModalState: n
                        } = this.props;
                        n({
                            maxAge: e,
                            savedMaxAge: t.maxAge
                        })
                    }, this.handleSelectMaxUses = e => {
                        let {
                            setModalState: t
                        } = this.props;
                        t({
                            maxUses: e
                        })
                    }, this.handleToggleTemporary = e => {
                        let {
                            setModalState: t
                        } = this.props;
                        t({
                            temporary: e
                        })
                    }, this.handleToggleGuest = e => {
                        let {
                            inviteFlags: t,
                            setInviteFlags: n
                        } = this.props;
                        n((0, Z.setFlag)(t, f.GuildInviteFlags.IS_GUEST_INVITE, e))
                    }, this.handleQueryChange = e => {
                        var t;
                        let {
                            setModalState: n
                        } = this.props;
                        null === (t = this._scroller) || void 0 === t || t.scrollTo({
                            to: 0
                        }), (0, v.searchInviteSuggestions)(e), n({
                            query: e
                        })
                    }, this.handleClearSearch = () => {
                        this.handleQueryChange("")
                    }, this.handleToggleMaxAge = () => {
                        let {
                            modalState: e,
                            setModalState: t
                        } = this.props, {
                            maxAge: n,
                            savedMaxAge: l
                        } = e;
                        t({
                            maxAge: l,
                            savedMaxAge: n
                        })
                    }, this.getRowHeight = (e, t) => {
                        if (e > 0) return 0;
                        let n = this.props.rows[t];
                        switch (n.type) {
                            case Y.RowTypes.CHANNEL:
                            case Y.RowTypes.GROUP_DM:
                            case Y.RowTypes.DM:
                            case Y.RowTypes.FRIEND:
                                return en.INVITE_ROW_HEIGHT;
                            default:
                                return 0
                        }
                    }, this.renderRow = e => {
                        let {
                            section: t,
                            row: n
                        } = e;
                        if (t > 0) return null;
                        let {
                            analyticsLocation: i
                        } = this.props, r = this.getInviteKey(), a = this.props.rows[n], s = "".concat(a.type, "-").concat(a.item.id);
                        switch (a.type) {
                            case Y.RowTypes.GROUP_DM:
                            case Y.RowTypes.CHANNEL:
                                return (0, l.jsx)(en.InviteRow, {
                                    row: a,
                                    channel: a.item,
                                    inviteKey: r,
                                    location: i
                                }, s);
                            case Y.RowTypes.DM:
                            case Y.RowTypes.FRIEND:
                                return (0, l.jsx)(en.InviteRow, {
                                    row: a,
                                    user: a.item,
                                    inviteKey: r,
                                    location: i
                                }, s);
                            default:
                                return null
                        }
                    }
                }
            }
            eg.defaultProps = {
                analyticsLocation: ei.AnalyticsLocations.GUILD_CREATE_INVITE_SUGGESTION,
                defaultMaxAge: ef.value
            };
            var ep = i.forwardRef(function(e, t) {
                var n, r, a, s;
                let {
                    channel: o,
                    guild: u,
                    source: d,
                    guildScheduledEvent: c,
                    streamUserId: g,
                    applicationId: p,
                    transitionState: C,
                    onClose: x,
                    welcomeToServer: w,
                    page: y,
                    analyticsLocation: j
                } = e, [G, P] = i.useState(y === el.InstantInviteModalPages.GUEST ? f.GuildInviteFlags.IS_GUEST_INVITE : 0), {
                    AnalyticsLocationProvider: H,
                    analyticsLocations: B
                } = (0, _.default)(E.default.INSTANT_INVITE_MODAL), W = (0, h.useStateFromStores)([b.default, D.default], () => {
                    let e = D.default.getVoiceChannelId();
                    if (null == e) return null;
                    let t = b.default.getChannel(e);
                    return (null == t ? void 0 : t.guild_id) === u.id ? t : null
                }), z = null != W && !(0, N.default)(W) && [ei.InstantInviteSources.GUILD_CONTEXT_MENU, ei.InstantInviteSources.GUILD_HEADER].includes(d), K = (0, M.default)(u.id), Y = (0, h.useStateFromStores)([D.default, b.default, O.default], () => {
                    if (z && ((0, Z.hasFlag)(G, f.GuildInviteFlags.IS_GUEST_INVITE) || y === el.InstantInviteModalPages.GUEST)) return W;
                    if (y === el.InstantInviteModalPages.GUEST) return 1 === K.length ? K[0] : void 0;
                    if (null != o) return o;
                    let e = D.default.getChannelId(),
                        t = null == e || (0, er.isStaticChannelRoute)(e) ? void 0 : b.default.getChannel(e);
                    return (null == t ? void 0 : t.isThread()) && (t = b.default.getChannel(t.parent_id)), null != t ? t : O.default.getDefaultChannel(u.id, !0, ei.Permissions.CREATE_INSTANT_INVITE)
                }, [z, G, y, o, u.id, W, K]), [q, Q] = i.useState(null), J = null != q ? q : Y, $ = null;
                null != g ? $ = el.InviteTargetTypes.STREAM : null != p && ($ = el.InviteTargetTypes.EMBEDDED_APPLICATION);
                let ee = null != o ? o.getGuildId() : null != u ? u.id : null,
                    et = (0, h.useStateFromStores)([U.default], () => {
                        let e = null != J ? J.id : null;
                        return null == e ? null : U.default.getInvite(e, {
                            targetType: $,
                            targetUserId: g,
                            targetApplicationId: p
                        })
                    }, [J, $, g, p]),
                    [en, ea, es, eo, eu] = (0, h.useStateFromStoresArray)([V.default, k.default, L.default], () => {
                        let e = null != J ? J.id : null;
                        return [V.default.getInviteSuggestionRows(), V.default.getTotalSuggestionsCount() >= 1, V.default.getInitialCounts(), null != o && null != J ? k.default.getVoiceStatesForChannel(J) : null, null != ee ? L.default.getProps(ee, e) : null]
                    }, [J, o, ee]),
                    ed = (0, h.useStateFromStores)([F.default], () => null != J && F.default.can(ei.Permissions.CREATE_INSTANT_INVITE, J), [J]),
                    ep = null === et || !ed,
                    [em] = i.useState(() => {
                        let e = new Set;
                        return null != g && null != eo ? eo.forEach(t => {
                            let {
                                user: n
                            } = t;
                            e.add(n.id)
                        }) : null != ee && null != eu && $ !== el.InviteTargetTypes.EMBEDDED_APPLICATION && eu.rows.forEach(t => {
                            t.type === L.MemberListRowTypes.MEMBER && e.add(t.userId)
                        }), e
                    }),
                    ev = null == o ? void 0 : o.id,
                    eI = (0, h.useStateFromStores)([R.default], () => R.default.getStageInstanceByChannel(ev), [ev]);
                i.useEffect(() => {
                    (0, v.loadInviteSuggestions)({
                        omitUserIds: em,
                        guild: u,
                        channel: o,
                        applicationId: p,
                        inviteTargetType: $
                    }).catch(ei.NOOP_NULL)
                }, [em, o, u, p, $]);
                let [eE] = (0, T.default)(null != p ? [p] : []), e_ = (0, S.default)({
                    guildId: ee
                }), eT = null != et ? et.code : void 0, eN = null == et ? void 0 : et.maxAge, eC = null == et ? void 0 : et.maxUses, eS = null == et ? void 0 : et.temporary, ex = u.vanityURLCode, ew = null != ex && ex.length > 0, {
                    enabled: eA
                } = X.default.useExperiment({
                    guildId: null !== (a = null !== (r = null !== (n = u.id) && void 0 !== n ? n : null == et ? void 0 : et.guild.id) && void 0 !== r ? r : ee) && void 0 !== a ? a : "",
                    location: "acc417_2"
                }, {
                    autoTrackExposure: ew
                }), eM = eA && !(null == J ? void 0 : J.isGuildVocal()) && ew, eR = (null == J ? void 0 : J.type) === ei.ChannelTypes.GUILD_VOICE, ey = (0, N.default)(J);
                !ed && (null == eI ? void 0 : eI.invite_code) != null && (eT = eI.invite_code);
                let [eL, eb] = i.useState({
                    query: "",
                    maxAge: null !== (s = null != eN ? eN : e_) && void 0 !== s ? s : ef.value,
                    savedMaxAge: eN === ec.value ? null != e_ ? e_ : ef.value : ec.value,
                    maxUses: null != eC && 0 !== eC ? eC : eh.value,
                    temporary: null != eS && eS,
                    networkError: void 0,
                    showVanityURL: eM,
                    currentPage: null != y ? y : el.InstantInviteModalPages.MAIN,
                    lastPage: void 0
                }), eO = i.useCallback(e => {
                    eb(t => ({
                        ...t,
                        ...e
                    }))
                }, []), eU = i.useCallback(e => {
                    eO({
                        currentPage: e,
                        lastPage: eL.currentPage
                    })
                }, [eL.currentPage, eO]), eV = (eR || z) && y !== el.InstantInviteModalPages.GUEST && !eM && !ep && !ey, {
                    enabled: eF
                } = A.GuestVoiceInvitesExperiment.useExperiment({
                    guildId: null == u ? void 0 : u.id,
                    location: "acc417_3"
                }, {
                    autoTrackExposure: eV
                }), {
                    maxAge: ej,
                    maxUses: eD,
                    temporary: eG,
                    savedMaxAge: ek
                } = eL, eP = i.useCallback(() => {
                    let {
                        currentPage: e,
                        lastPage: t
                    } = eL;
                    e === el.InstantInviteModalPages.SETTINGS && null != t ? eU(t) : x()
                }, [eU, eL, x]), eH = i.useCallback(() => {
                    let e = null == J ? void 0 : J.id;
                    0 === eD && 0 === ej && !eG && eM ? eO({
                        networkError: void 0,
                        showVanityURL: !0
                    }) : null != e && (eO({
                        networkError: void 0,
                        showVanityURL: !1
                    }), m.default.createInvite(e, {
                        max_age: ej,
                        max_uses: eD,
                        target_type: $,
                        target_user_id: g,
                        target_application_id: null == eE ? void 0 : eE.id,
                        temporary: eG,
                        flags: G
                    }, d).catch(e => eO({
                        networkError: e,
                        showVanityURL: eM
                    }))), ej !== ec.value && ek !== ec.value && eO({
                        savedMaxAge: ec.value
                    })
                }, [eM, J, d, null == eE ? void 0 : eE.id, $, g, ej, eD, eG, G, eO, ek]), eB = (0, I.default)(J), eW = (0, I.default)(G), ez = eB !== J, eK = eW !== G;
                return i.useEffect(() => {
                    (ez || eK) && eH()
                }, [eH, ez, eK]), (0, l.jsx)(H, {
                    children: (0, l.jsx)(eg, {
                        ref: t,
                        canCreateInvites: ed,
                        noInvitesAvailable: ep,
                        inviteChannel: J,
                        guild: u,
                        guildScheduledEvent: c,
                        streamUserId: g,
                        vanityURLCode: ex,
                        targetType: $,
                        targetUserId: g,
                        application: eE,
                        rows: en,
                        showFriends: ea,
                        initialCounts: es,
                        code: eT,
                        source: d,
                        welcomeToServer: w,
                        analyticsLocations: B,
                        analyticsLocation: j,
                        transitionState: C,
                        onClose: x,
                        canShowVanityURL: eM,
                        isGuestInviteCreationToggleEnabled: eF && eV,
                        shouldHideTemporaryInviteToggle: eF && eV || y === el.InstantInviteModalPages.GUEST,
                        modalState: eL,
                        setModalState: eO,
                        changePage: eU,
                        onGenerateNewLink: eH,
                        inviteFlags: G,
                        setInviteFlags: P,
                        showGuestInviteToggleForCurrentVoiceChannel: z,
                        setInviteChannel: Q,
                        handleDone: eP
                    })
                })
            })
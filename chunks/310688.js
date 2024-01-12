            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return em
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("627445"),
                u = n.n(a),
                o = n("917351"),
                d = n.n(o),
                c = n("759843"),
                f = n("498574"),
                h = n("446674"),
                g = n("669491"),
                m = n("77078"),
                p = n("970728"),
                I = n("685073"),
                v = n("84339"),
                E = n("812204"),
                _ = n("685665"),
                T = n("442939"),
                N = n("656038"),
                S = n("419830"),
                C = n("262362"),
                w = n("582415"),
                x = n("385042"),
                A = n("87241"),
                M = n("155996"),
                L = n("834052"),
                y = n("373469"),
                R = n("19766"),
                b = n("42203"),
                O = n("923959"),
                U = n("330154"),
                V = n("705955"),
                F = n("957255"),
                D = n("824563"),
                j = n("18494"),
                G = n("697218"),
                P = n("316133"),
                k = n("941886"),
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
                es = n("782340"),
                ea = n("435808"),
                eu = n("926622"),
                eo = n("486425"),
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
                        streamUserId: s,
                        targetType: a,
                        targetUserId: u,
                        application: o,
                        initialCounts: d,
                        rows: c,
                        showFriends: f,
                        modalState: h,
                        setModalState: g
                    } = this.props, {
                        maxAge: m,
                        maxUses: I,
                        temporary: v
                    } = h;
                    if (i) {
                        let n = null == e ? void 0 : e.id;
                        if (null == n) return;
                        g({
                            networkError: void 0
                        }), p.default.createInvite(n, {
                            validate: null != t ? t : null,
                            max_age: m,
                            max_uses: I,
                            target_user_id: u,
                            target_type: a,
                            target_application_id: null == o ? void 0 : o.id,
                            temporary: v
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
                        }), null != s) {
                        let e = y.default.getStreamForUser(s, n.id),
                            t = (0, w.getStreamerApplication)(e, D.default);
                        K.default.track(ei.AnalyticEvents.OPEN_MODAL, {
                            type: "Send Stream Invite",
                            source: l,
                            location: r,
                            other_user_id: s,
                            application_id: null != t ? t.id : null,
                            application_name: null != t ? t.name : null,
                            game_id: null != t ? t.id : null
                        })
                    } else(null == o ? void 0 : o.id) != null || K.default.track(ei.AnalyticEvents.OPEN_MODAL, {
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
                    (0, Z.hasFlag)(t, f.GuildInviteFlags.IS_GUEST_INVITE) && null != e && (n((0, Z.removeFlag)(t, f.GuildInviteFlags.IS_GUEST_INVITE)), p.default.clearInviteFromStore(e.id))
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
                        className: ea.warningContainer,
                        children: [(0, l.jsx)(z.default, {
                            className: ea.warningIcon,
                            color: g.default.unsafe_rawColors.YELLOW_300.css,
                            width: 12
                        }), (0, l.jsx)(m.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: es.default.Messages.INVITE_PRIVATE_CHANNEL_WARNING
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
                        application: a,
                        welcomeToServer: u,
                        inviteChannel: o,
                        modalState: d,
                        handleDone: c
                    } = this.props, {
                        query: f
                    } = d, h = null, g = null;
                    if (e = u ? null : null != r ? es.default.Messages.INVITE_STREAM_HEADER : null != a ? es.default.Messages.EMBEDDED_ACTIVITIES_INVITE_FRIENDS_TO_ACTIVITY_NAME.format({
                            applicationName: a.name
                        }) : null != i ? es.default.Messages.GUILD_EVENT_INVITE_MODAL_TITLE : (null == o ? void 0 : o.isGuildStageVoice()) ? es.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_HEADER : es.default.Messages.INVITE_TO_SERVER_NAME.format({
                            name: t.toString()
                        }), null != o) {
                        let e = (0, S.getChannelIconComponent)(o, t);
                        null != e && (g = (0, l.jsxs)("div", {
                            className: ea.headerChannelContainer,
                            children: [(0, l.jsx)(e, {
                                className: ea.channelIcon
                            }), (0, l.jsx)(m.Text, {
                                color: "interactive-normal",
                                variant: "text-md/normal",
                                children: o.name
                            })]
                        }))
                    }
                    return h = t.hasFeature(ei.GuildFeatures.HUB) ? (0, l.jsxs)("div", {
                        className: ea.hubHeader,
                        children: [(0, l.jsx)(m.Heading, {
                            className: s(ea.hubInviteTitle, ea.headerCloseButtonSpacing),
                            id: this._headerId,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            children: es.default.Messages.HUB_INVITE_HEADER
                        }), (0, l.jsx)(m.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: es.default.Messages.HUB_INVITE_SUBHEADER
                        }), n && (0, l.jsx)(B.default, {
                            query: f,
                            className: ea.hubFriendSearch,
                            onChange: this.handleQueryChange,
                            placeholder: es.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
                            "aria-label": es.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
                            autoFocus: !0,
                            onClear: this.handleClearSearch
                        })]
                    }) : n ? (0, l.jsxs)("div", {
                        className: ea.header,
                        children: [(0, l.jsx)("div", {
                            className: ea.headerTopRow,
                            children: (0, l.jsx)(m.FormTitle, {
                                id: this._headerId,
                                tag: "h2",
                                className: s(eu.marginBottom4, ea.headerCloseButtonSpacing, ea.headerText),
                                children: e
                            })
                        }), g, (0, l.jsx)(B.default, {
                            query: f,
                            className: ea.searchBar,
                            onChange: this.handleQueryChange,
                            placeholder: es.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
                            autoFocus: !0,
                            onClear: this.handleClearSearch
                        }), (0, l.jsx)("div", {
                            className: eu.marginTop8,
                            children: this.renderChannelWarning()
                        })]
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(m.FormTitle, {
                            id: this._headerId,
                            tag: "h2",
                            className: s(eu.marginReset, ea.headerCloseButtonSpacing, ea.headerText),
                            children: e
                        }), g, this.renderChannelWarning()]
                    }), (0, l.jsxs)(m.ModalHeader, {
                        separator: n,
                        children: [(0, l.jsx)(m.ModalCloseButton, {
                            className: ea.closeButton,
                            onClick: c
                        }), (0, l.jsxs)("div", {
                            className: ea.headerContainer,
                            children: [u && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)("img", {
                                    className: ea.welcomeImage,
                                    src: ed,
                                    alt: ""
                                }), (0, l.jsx)(m.H, {
                                    className: ea.welcomeHeading,
                                    children: es.default.Messages.INVITE_WELCOME_HEADING
                                }), (0, l.jsx)("p", {
                                    className: ea.welcomeSubheading,
                                    children: es.default.Messages.INVITE_WELCOME_SUBHEADING
                                })]
                            }), null != r ? (0, l.jsx)(x.default, {}) : null, h]
                        })]
                    })
                }
                renderFriendsBody() {
                    let {
                        rows: e
                    } = this.props, t = this.getInviteKey();
                    return 0 === e.length ? (0, l.jsx)(m.ModalContent, {
                        className: s(ea.inviteRowEmptyState),
                        children: (0, l.jsx)(k.EmptyStateText, {
                            children: es.default.Messages.INVITE_FRIEND_MODAL_NO_RESULTS
                        })
                    }) : null == t ? (0, l.jsx)(m.ModalContent, {
                        className: s(ea.inviteRowEmptyState),
                        children: (0, l.jsx)(k.EmptyStateText, {
                            children: es.default.Messages.INVITE_FRIEND_MODAL_LOADING
                        })
                    }) : (0, l.jsx)(m.ModalListContent, {
                        className: ea.scroller,
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
                    let s = (0, J.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : ""),
                        a = G.default.getCurrentUser();
                    u(null != a, "InstantInviteModal: user cannot be undefined");
                    let o = t.isOwner(a),
                        d = o ? es.default.Messages.INVITE_SHARE_LINK_OWN_SERVER : es.default.Messages.SHARE_INVITE_LINK_FOR_ACCESS;
                    return null != i ? d = es.default.Messages.INVITE_SHARE_LINK_TO_STREAM : null != r && (d = es.default.Messages.EMBEDDED_ACTIVITIES_SHARE_LINK_TO_ACTIVITY), (0, l.jsx)(m.ModalContent, {
                        className: ea.noScroll,
                        children: (0, l.jsxs)(H.default, {
                            direction: H.default.Direction.VERTICAL,
                            className: eu.marginBottom20,
                            children: [(0, l.jsx)(m.Text, {
                                className: ea.subText,
                                variant: "text-sm/normal",
                                children: d
                            }), (0, l.jsx)(et.InviteCopyInput, {
                                ...this.props,
                                copyValue: s
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
                        application: a,
                        inviteChannel: u,
                        modalState: o
                    } = this.props, {
                        maxAge: d
                    } = o, c = null, f = (0, J.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : "");
                    if (n) {
                        let e = es.default.Messages.INVITE_FOOTER_LINK_HEADER;
                        null != r ? e = es.default.Messages.INVITE_STREAM_FOOTER_LINK_HEADER : null != a ? e = es.default.Messages.EMBEDDED_ACTIVITIES_INVITE_ACTIVITY_FOOTER_LINK_HEADER : null != i ? e = es.default.Messages.GUILD_EVENT_INVITE_MODAL_FOOTER : (null == u ? void 0 : u.isGuildStageVoice()) && (e = es.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_FOOTER), c = (0, l.jsxs)(H.default, {
                            direction: H.default.Direction.VERTICAL,
                            className: ea.content,
                            children: [(0, l.jsx)(m.FormTitle, {
                                tag: "h5",
                                className: eu.marginBottom8,
                                children: e
                            }), (0, l.jsx)(et.InviteCopyInput, {
                                ...this.props,
                                copyValue: f
                            })]
                        })
                    } else !t && (c = (0, l.jsxs)(H.default, {
                        justify: H.default.Justify.BETWEEN,
                        className: eu.marginTop20,
                        children: [(0, l.jsx)(m.Checkbox, {
                            size: 18,
                            type: m.Checkbox.Types.INVERTED,
                            value: d === ec.value,
                            onChange: this.handleToggleMaxAge,
                            children: (0, l.jsx)(m.Text, {
                                className: ea.checkBoxLabel,
                                variant: "text-sm/normal",
                                children: es.default.Messages.SET_INVITE_LINK_NEVER_EXPIRE
                            })
                        }), (0, l.jsx)(m.Tooltip, {
                            text: es.default.Messages.LINK_SETTINGS,
                            children: e => {
                                let {
                                    onMouseEnter: t,
                                    onMouseLeave: n
                                } = e;
                                return (0, l.jsx)(m.Clickable, {
                                    onClick: this.openSettings,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    className: eo.cursorPointer,
                                    children: (0, l.jsx)(W.default, {
                                        width: 18,
                                        height: 18,
                                        color: g.default.unsafe_rawColors.PRIMARY_400.css
                                    })
                                })
                            }
                        })]
                    }));
                    return null != c ? (0, l.jsx)(m.ModalFooter, {
                        className: s({
                            [ea.noPadding]: !n,
                            [ea.footer]: n
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
                        className: this.props.showFriends ? ea.wrapper : void 0,
                        children: (0, l.jsx)(m.ModalRoot, {
                            impression: {
                                impressionName: c.ImpressionNames.GUILD_INVITE,
                                impressionProperties: {
                                    invite_channel_id: null == t ? void 0 : t.id,
                                    invite_guild_id: n.id
                                }
                            },
                            "aria-labelledby": this._headerId,
                            transitionState: e,
                            className: ea.modal,
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
                        }), (0, I.searchInviteSuggestions)(e), n({
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
                        } = this.props, r = this.getInviteKey(), s = this.props.rows[n], a = "".concat(s.type, "-").concat(s.item.id);
                        switch (s.type) {
                            case Y.RowTypes.GROUP_DM:
                            case Y.RowTypes.CHANNEL:
                                return (0, l.jsx)(en.InviteRow, {
                                    row: s,
                                    channel: s.item,
                                    inviteKey: r,
                                    location: i
                                }, a);
                            case Y.RowTypes.DM:
                            case Y.RowTypes.FRIEND:
                                return (0, l.jsx)(en.InviteRow, {
                                    row: s,
                                    user: s.item,
                                    inviteKey: r,
                                    location: i
                                }, a);
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
            var em = i.forwardRef(function(e, t) {
                var n, r, s, a;
                let {
                    channel: u,
                    guild: o,
                    source: d,
                    guildScheduledEvent: c,
                    streamUserId: g,
                    applicationId: m,
                    transitionState: S,
                    onClose: w,
                    welcomeToServer: x,
                    page: y,
                    analyticsLocation: D
                } = e, [G, k] = i.useState(y === el.InstantInviteModalPages.GUEST ? f.GuildInviteFlags.IS_GUEST_INVITE : 0), {
                    AnalyticsLocationProvider: H,
                    analyticsLocations: B
                } = (0, _.default)(E.default.INSTANT_INVITE_MODAL), W = (0, h.useStateFromStores)([b.default, j.default], () => {
                    let e = j.default.getVoiceChannelId();
                    if (null == e) return null;
                    let t = b.default.getChannel(e);
                    return (null == t ? void 0 : t.guild_id) === o.id ? t : null
                }), z = null != W && !(0, N.default)(W) && [ei.InstantInviteSources.GUILD_CONTEXT_MENU, ei.InstantInviteSources.GUILD_HEADER].includes(d), K = (0, M.default)(o.id), Y = (0, h.useStateFromStores)([j.default, b.default, O.default], () => {
                    if (z && ((0, Z.hasFlag)(G, f.GuildInviteFlags.IS_GUEST_INVITE) || y === el.InstantInviteModalPages.GUEST)) return W;
                    if (y === el.InstantInviteModalPages.GUEST) return 1 === K.length ? K[0] : void 0;
                    if (null != u) return u;
                    let e = j.default.getChannelId(),
                        t = null == e || (0, er.isStaticChannelRoute)(e) ? void 0 : b.default.getChannel(e);
                    return (null == t ? void 0 : t.isThread()) && (t = b.default.getChannel(t.parent_id)), null != t ? t : O.default.getDefaultChannel(o.id, !0, ei.Permissions.CREATE_INSTANT_INVITE)
                }, [z, G, y, u, o.id, W, K]), [q, Q] = i.useState(null), J = null != q ? q : Y, $ = null;
                null != g ? $ = el.InviteTargetTypes.STREAM : null != m && ($ = el.InviteTargetTypes.EMBEDDED_APPLICATION);
                let ee = null != u ? u.getGuildId() : null != o ? o.id : null,
                    et = (0, h.useStateFromStores)([U.default], () => {
                        let e = null != J ? J.id : null;
                        return null == e ? null : U.default.getInvite(e, {
                            targetType: $,
                            targetUserId: g,
                            targetApplicationId: m
                        })
                    }, [J, $, g, m]),
                    [en, es, ea, eu, eo] = (0, h.useStateFromStoresArray)([V.default, P.default, R.default], () => {
                        let e = null != J ? J.id : null;
                        return [V.default.getInviteSuggestionRows(), V.default.getTotalSuggestionsCount() >= 1, V.default.getInitialCounts(), null != u && null != J ? P.default.getVoiceStatesForChannel(J) : null, null != ee ? R.default.getProps(ee, e) : null]
                    }, [J, u, ee]),
                    ed = (0, h.useStateFromStores)([F.default], () => null != J && F.default.can(ei.Permissions.CREATE_INSTANT_INVITE, J), [J]),
                    em = null === et || !ed,
                    [ep] = i.useState(() => {
                        let e = new Set;
                        return null != g && null != eu ? eu.forEach(t => {
                            let {
                                user: n
                            } = t;
                            e.add(n.id)
                        }) : null != ee && null != eo && $ !== el.InviteTargetTypes.EMBEDDED_APPLICATION && eo.rows.forEach(t => {
                            t.type === R.MemberListRowTypes.MEMBER && e.add(t.userId)
                        }), e
                    }),
                    eI = null == u ? void 0 : u.id,
                    ev = (0, h.useStateFromStores)([L.default], () => L.default.getStageInstanceByChannel(eI), [eI]);
                i.useEffect(() => {
                    (0, I.loadInviteSuggestions)({
                        omitUserIds: ep,
                        guild: o,
                        channel: u,
                        applicationId: m,
                        inviteTargetType: $
                    }).catch(ei.NOOP_NULL)
                }, [ep, u, o, m, $]);
                let [eE] = (0, T.default)(null != m ? [m] : []), e_ = (0, C.default)({
                    guildId: ee
                }), eT = null != et ? et.code : void 0, eN = null == et ? void 0 : et.maxAge, eS = null == et ? void 0 : et.maxUses, eC = null == et ? void 0 : et.temporary, ew = o.vanityURLCode, ex = null != ew && ew.length > 0, {
                    enabled: eA
                } = X.default.useExperiment({
                    guildId: null !== (s = null !== (r = null !== (n = o.id) && void 0 !== n ? n : null == et ? void 0 : et.guild.id) && void 0 !== r ? r : ee) && void 0 !== s ? s : "",
                    location: "acc417_2"
                }, {
                    autoTrackExposure: ex
                }), eM = eA && !(null == J ? void 0 : J.isGuildVocal()) && ex, eL = (null == J ? void 0 : J.type) === ei.ChannelTypes.GUILD_VOICE, ey = (0, N.default)(J);
                !ed && (null == ev ? void 0 : ev.invite_code) != null && (eT = ev.invite_code);
                let [eR, eb] = i.useState({
                    query: "",
                    maxAge: null !== (a = null != eN ? eN : e_) && void 0 !== a ? a : ef.value,
                    savedMaxAge: eN === ec.value ? null != e_ ? e_ : ef.value : ec.value,
                    maxUses: null != eS && 0 !== eS ? eS : eh.value,
                    temporary: null != eC && eC,
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
                        lastPage: eR.currentPage
                    })
                }, [eR.currentPage, eO]), eV = (eL || z) && y !== el.InstantInviteModalPages.GUEST && !eM && !em && !ey, {
                    enabled: eF
                } = A.GuestVoiceInvitesExperiment.useExperiment({
                    guildId: null == o ? void 0 : o.id,
                    location: "acc417_3"
                }, {
                    autoTrackExposure: eV
                }), {
                    maxAge: eD,
                    maxUses: ej,
                    temporary: eG,
                    savedMaxAge: eP
                } = eR, ek = i.useCallback(() => {
                    let {
                        currentPage: e,
                        lastPage: t
                    } = eR;
                    e === el.InstantInviteModalPages.SETTINGS && null != t ? eU(t) : w()
                }, [eU, eR, w]), eH = i.useCallback(() => {
                    let e = null == J ? void 0 : J.id;
                    0 === ej && 0 === eD && !eG && eM ? eO({
                        networkError: void 0,
                        showVanityURL: !0
                    }) : null != e && (eO({
                        networkError: void 0,
                        showVanityURL: !1
                    }), p.default.createInvite(e, {
                        max_age: eD,
                        max_uses: ej,
                        target_type: $,
                        target_user_id: g,
                        target_application_id: null == eE ? void 0 : eE.id,
                        temporary: eG,
                        flags: G
                    }, d).catch(e => eO({
                        networkError: e,
                        showVanityURL: eM
                    }))), eD !== ec.value && eP !== ec.value && eO({
                        savedMaxAge: ec.value
                    })
                }, [eM, J, d, null == eE ? void 0 : eE.id, $, g, eD, ej, eG, G, eO, eP]), eB = (0, v.default)(J), eW = (0, v.default)(G), ez = eB !== J, eK = eW !== G;
                return i.useEffect(() => {
                    (ez || eK) && eH()
                }, [eH, ez, eK]), (0, l.jsx)(H, {
                    children: (0, l.jsx)(eg, {
                        ref: t,
                        canCreateInvites: ed,
                        noInvitesAvailable: em,
                        inviteChannel: J,
                        guild: o,
                        guildScheduledEvent: c,
                        streamUserId: g,
                        vanityURLCode: ew,
                        targetType: $,
                        targetUserId: g,
                        application: eE,
                        rows: en,
                        showFriends: es,
                        initialCounts: ea,
                        code: eT,
                        source: d,
                        welcomeToServer: x,
                        analyticsLocations: B,
                        analyticsLocation: D,
                        transitionState: S,
                        onClose: w,
                        canShowVanityURL: eM,
                        isGuestInviteCreationToggleEnabled: eF && eV,
                        shouldHideTemporaryInviteToggle: eF && eV || y === el.InstantInviteModalPages.GUEST,
                        modalState: eR,
                        setModalState: eO,
                        changePage: eU,
                        onGenerateNewLink: eH,
                        inviteFlags: G,
                        setInviteFlags: k,
                        showGuestInviteToggleForCurrentVoiceChannel: z,
                        setInviteChannel: Q,
                        handleDone: ek
                    })
                })
            })
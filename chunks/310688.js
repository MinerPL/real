            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eI
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("627445"),
                o = n.n(a),
                u = n("917351"),
                d = n.n(u),
                c = n("759843"),
                E = n("498574"),
                _ = n("446674"),
                f = n("669491"),
                I = n("77078"),
                h = n("970728"),
                g = n("685073"),
                N = n("84339"),
                T = n("812204"),
                A = n("685665"),
                p = n("442939"),
                S = n("656038"),
                m = n("419830"),
                v = n("262362"),
                C = n("582415"),
                R = n("385042"),
                L = n("87241"),
                O = n("155996"),
                D = n("834052"),
                M = n("373469"),
                U = n("19766"),
                y = n("42203"),
                P = n("923959"),
                x = n("330154"),
                w = n("705955"),
                G = n("957255"),
                b = n("824563"),
                F = n("18494"),
                V = n("697218"),
                B = n("316133"),
                H = n("941886"),
                j = n("145131"),
                k = n("810567"),
                W = n("474571"),
                Y = n("423487"),
                K = n("599110"),
                z = n("568734"),
                Z = n("354023"),
                X = n("9294"),
                Q = n("512027"),
                q = n("234919"),
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
                eo = n("926622"),
                eu = n("486425"),
                ed = n("56585");
            let {
                INVITE_OPTIONS_FOREVER: ec,
                INVITE_OPTIONS_7_DAYS: eE,
                INVITE_OPTIONS_UNLIMITED: e_
            } = Z.default;
            class ef extends i.PureComponent {
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
                        targetUserId: o,
                        application: u,
                        initialCounts: d,
                        rows: c,
                        showFriends: E,
                        modalState: _,
                        setModalState: f
                    } = this.props, {
                        maxAge: I,
                        maxUses: g,
                        temporary: N
                    } = _;
                    if (i) {
                        let n = null == e ? void 0 : e.id;
                        if (null == n) return;
                        f({
                            networkError: void 0
                        }), h.default.createInvite(n, {
                            validate: null != t ? t : null,
                            max_age: I,
                            max_uses: g,
                            target_user_id: o,
                            target_type: a,
                            target_application_id: null == u ? void 0 : u.id,
                            temporary: N
                        }, l).catch(e => f({
                            networkError: e
                        }))
                    }
                    if (E && K.default.track(ei.AnalyticEvents.INVITE_SUGGESTION_OPENED, {
                            location: l,
                            num_suggestions: c.length,
                            num_friends: d.numFriends,
                            num_dms: d.numDms,
                            num_group_dms: d.numGroupDms,
                            guild_id: n.id
                        }), q.default.trackExposure({
                            guildId: null == n ? void 0 : n.id,
                            location: "acc417_1"
                        }), null != s) {
                        let e = M.default.getStreamForUser(s, n.id),
                            t = (0, C.getStreamerApplication)(e, b.default);
                        K.default.track(ei.AnalyticEvents.OPEN_MODAL, {
                            type: "Send Stream Invite",
                            source: l,
                            location: r,
                            other_user_id: s,
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
                    (0, z.hasFlag)(t, E.GuildInviteFlags.IS_GUEST_INVITE) && null != e && (n((0, z.removeFlag)(t, E.GuildInviteFlags.IS_GUEST_INVITE)), h.default.clearInviteFromStore(e.id))
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
                    return null == r ? r : (0, X.generateInviteKeyFromExtraData)({
                        baseCode: r,
                        guildScheduledEventId: null == n ? void 0 : n.id
                    })
                }
                renderChannelWarning() {
                    let {
                        inviteChannel: e
                    } = this.props;
                    return (0, S.default)(e) ? (0, l.jsxs)("div", {
                        className: ea.warningContainer,
                        children: [(0, l.jsx)(Y.default, {
                            className: ea.warningIcon,
                            color: f.default.unsafe_rawColors.YELLOW_300.css,
                            width: 12
                        }), (0, l.jsx)(I.Text, {
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
                        welcomeToServer: o,
                        inviteChannel: u,
                        modalState: d,
                        handleDone: c
                    } = this.props, {
                        query: E
                    } = d, _ = null, f = null;
                    if (e = o ? null : null != r ? es.default.Messages.INVITE_STREAM_HEADER : null != a ? es.default.Messages.EMBEDDED_ACTIVITIES_INVITE_FRIENDS_TO_ACTIVITY_NAME.format({
                            applicationName: a.name
                        }) : null != i ? es.default.Messages.GUILD_EVENT_INVITE_MODAL_TITLE : (null == u ? void 0 : u.isGuildStageVoice()) ? es.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_HEADER : es.default.Messages.INVITE_TO_SERVER_NAME.format({
                            name: t.toString()
                        }), null != u) {
                        let e = (0, m.getChannelIconComponent)(u, t);
                        null != e && (f = (0, l.jsxs)("div", {
                            className: ea.headerChannelContainer,
                            children: [(0, l.jsx)(e, {
                                className: ea.channelIcon
                            }), (0, l.jsx)(I.Text, {
                                color: "interactive-normal",
                                variant: "text-md/normal",
                                children: u.name
                            })]
                        }))
                    }
                    return _ = t.hasFeature(ei.GuildFeatures.HUB) ? (0, l.jsxs)("div", {
                        className: ea.hubHeader,
                        children: [(0, l.jsx)(I.Heading, {
                            className: s(ea.hubInviteTitle, ea.headerCloseButtonSpacing),
                            id: this._headerId,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            children: es.default.Messages.HUB_INVITE_HEADER
                        }), (0, l.jsx)(I.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: es.default.Messages.HUB_INVITE_SUBHEADER
                        }), n && (0, l.jsx)(k.default, {
                            query: E,
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
                            children: (0, l.jsx)(I.FormTitle, {
                                id: this._headerId,
                                tag: "h2",
                                className: s(eo.marginBottom4, ea.headerCloseButtonSpacing, ea.headerText),
                                children: e
                            })
                        }), f, (0, l.jsx)(k.default, {
                            query: E,
                            className: ea.searchBar,
                            onChange: this.handleQueryChange,
                            placeholder: es.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
                            autoFocus: !0,
                            onClear: this.handleClearSearch
                        }), (0, l.jsx)("div", {
                            className: eo.marginTop8,
                            children: this.renderChannelWarning()
                        })]
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(I.FormTitle, {
                            id: this._headerId,
                            tag: "h2",
                            className: s(eo.marginReset, ea.headerCloseButtonSpacing, ea.headerText),
                            children: e
                        }), f, this.renderChannelWarning()]
                    }), (0, l.jsxs)(I.ModalHeader, {
                        separator: n,
                        children: [(0, l.jsx)(I.ModalCloseButton, {
                            className: ea.closeButton,
                            onClick: c
                        }), (0, l.jsxs)("div", {
                            className: ea.headerContainer,
                            children: [o && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)("img", {
                                    className: ea.welcomeImage,
                                    src: ed,
                                    alt: ""
                                }), (0, l.jsx)(I.H, {
                                    className: ea.welcomeHeading,
                                    children: es.default.Messages.INVITE_WELCOME_HEADING
                                }), (0, l.jsx)("p", {
                                    className: ea.welcomeSubheading,
                                    children: es.default.Messages.INVITE_WELCOME_SUBHEADING
                                })]
                            }), null != r ? (0, l.jsx)(R.default, {}) : null, _]
                        })]
                    })
                }
                renderFriendsBody() {
                    let {
                        rows: e
                    } = this.props, t = this.getInviteKey();
                    return 0 === e.length ? (0, l.jsx)(I.ModalContent, {
                        className: s(ea.inviteRowEmptyState),
                        children: (0, l.jsx)(H.EmptyStateText, {
                            children: es.default.Messages.INVITE_FRIEND_MODAL_NO_RESULTS
                        })
                    }) : null == t ? (0, l.jsx)(I.ModalContent, {
                        className: s(ea.inviteRowEmptyState),
                        children: (0, l.jsx)(H.EmptyStateText, {
                            children: es.default.Messages.INVITE_FRIEND_MODAL_LOADING
                        })
                    }) : (0, l.jsx)(I.ModalListContent, {
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
                        a = V.default.getCurrentUser();
                    o(null != a, "InstantInviteModal: user cannot be undefined");
                    let u = t.isOwner(a),
                        d = u ? es.default.Messages.INVITE_SHARE_LINK_OWN_SERVER : es.default.Messages.SHARE_INVITE_LINK_FOR_ACCESS;
                    return null != i ? d = es.default.Messages.INVITE_SHARE_LINK_TO_STREAM : null != r && (d = es.default.Messages.EMBEDDED_ACTIVITIES_SHARE_LINK_TO_ACTIVITY), (0, l.jsx)(I.ModalContent, {
                        className: ea.noScroll,
                        children: (0, l.jsxs)(j.default, {
                            direction: j.default.Direction.VERTICAL,
                            className: eo.marginBottom20,
                            children: [(0, l.jsx)(I.Text, {
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
                        inviteChannel: o,
                        modalState: u
                    } = this.props, {
                        maxAge: d
                    } = u, c = null, E = (0, J.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : "");
                    if (n) {
                        let e = es.default.Messages.INVITE_FOOTER_LINK_HEADER;
                        null != r ? e = es.default.Messages.INVITE_STREAM_FOOTER_LINK_HEADER : null != a ? e = es.default.Messages.EMBEDDED_ACTIVITIES_INVITE_ACTIVITY_FOOTER_LINK_HEADER : null != i ? e = es.default.Messages.GUILD_EVENT_INVITE_MODAL_FOOTER : (null == o ? void 0 : o.isGuildStageVoice()) && (e = es.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_FOOTER), c = (0, l.jsxs)(j.default, {
                            direction: j.default.Direction.VERTICAL,
                            className: ea.content,
                            children: [(0, l.jsx)(I.FormTitle, {
                                tag: "h5",
                                className: eo.marginBottom8,
                                children: e
                            }), (0, l.jsx)(et.InviteCopyInput, {
                                ...this.props,
                                copyValue: E
                            })]
                        })
                    } else !t && (c = (0, l.jsxs)(j.default, {
                        justify: j.default.Justify.BETWEEN,
                        className: eo.marginTop20,
                        children: [(0, l.jsx)(I.Checkbox, {
                            size: 18,
                            type: I.Checkbox.Types.INVERTED,
                            value: d === ec.value,
                            onChange: this.handleToggleMaxAge,
                            children: (0, l.jsx)(I.Text, {
                                className: ea.checkBoxLabel,
                                variant: "text-sm/normal",
                                children: es.default.Messages.SET_INVITE_LINK_NEVER_EXPIRE
                            })
                        }), (0, l.jsx)(I.Tooltip, {
                            text: es.default.Messages.LINK_SETTINGS,
                            children: e => {
                                let {
                                    onMouseEnter: t,
                                    onMouseLeave: n
                                } = e;
                                return (0, l.jsx)(I.Clickable, {
                                    onClick: this.openSettings,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    className: eu.cursorPointer,
                                    children: (0, l.jsx)(W.default, {
                                        width: 18,
                                        height: 18,
                                        color: f.default.unsafe_rawColors.PRIMARY_400.css
                                    })
                                })
                            }
                        })]
                    }));
                    return null != c ? (0, l.jsx)(I.ModalFooter, {
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
                        children: (0, l.jsx)(I.ModalRoot, {
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
                        n((0, z.setFlag)(t, E.GuildInviteFlags.IS_GUEST_INVITE, e))
                    }, this.handleQueryChange = e => {
                        var t;
                        let {
                            setModalState: n
                        } = this.props;
                        null === (t = this._scroller) || void 0 === t || t.scrollTo({
                            to: 0
                        }), (0, g.searchInviteSuggestions)(e), n({
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
                            case Z.RowTypes.CHANNEL:
                            case Z.RowTypes.GROUP_DM:
                            case Z.RowTypes.DM:
                            case Z.RowTypes.FRIEND:
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
                            case Z.RowTypes.GROUP_DM:
                            case Z.RowTypes.CHANNEL:
                                return (0, l.jsx)(en.InviteRow, {
                                    row: s,
                                    channel: s.item,
                                    inviteKey: r,
                                    location: i
                                }, a);
                            case Z.RowTypes.DM:
                            case Z.RowTypes.FRIEND:
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
            ef.defaultProps = {
                analyticsLocation: ei.AnalyticsLocations.GUILD_CREATE_INVITE_SUGGESTION,
                defaultMaxAge: eE.value
            };
            var eI = i.forwardRef(function(e, t) {
                var n, r, s, a;
                let {
                    channel: o,
                    guild: u,
                    source: d,
                    guildScheduledEvent: c,
                    streamUserId: f,
                    applicationId: I,
                    transitionState: m,
                    onClose: C,
                    welcomeToServer: R,
                    page: M,
                    analyticsLocation: b
                } = e, [V, H] = i.useState(M === el.InstantInviteModalPages.GUEST ? E.GuildInviteFlags.IS_GUEST_INVITE : 0), {
                    AnalyticsLocationProvider: j,
                    analyticsLocations: k
                } = (0, A.default)(T.default.INSTANT_INVITE_MODAL), W = (0, _.useStateFromStores)([y.default, F.default], () => {
                    let e = F.default.getVoiceChannelId();
                    if (null == e) return null;
                    let t = y.default.getChannel(e);
                    return (null == t ? void 0 : t.guild_id) === u.id ? t : null
                }), Y = null != W && !(0, S.default)(W) && [ei.InstantInviteSources.GUILD_CONTEXT_MENU, ei.InstantInviteSources.GUILD_HEADER].includes(d), K = (0, O.default)(u.id), Z = (0, _.useStateFromStores)([F.default, y.default, P.default], () => {
                    if (Y && ((0, z.hasFlag)(V, E.GuildInviteFlags.IS_GUEST_INVITE) || M === el.InstantInviteModalPages.GUEST)) return W;
                    if (M === el.InstantInviteModalPages.GUEST) return 1 === K.length ? K[0] : void 0;
                    if (null != o) return o;
                    let e = F.default.getChannelId(),
                        t = null == e || (0, er.isStaticChannelRoute)(e) ? void 0 : y.default.getChannel(e);
                    return (null == t ? void 0 : t.isThread()) && (t = y.default.getChannel(t.parent_id)), null != t ? t : P.default.getDefaultChannel(u.id, !0, ei.Permissions.CREATE_INSTANT_INVITE)
                }, [Y, V, M, o, u.id, W, K]), [X, q] = i.useState(null), J = null != X ? X : Z, $ = null;
                null != f ? $ = el.InviteTargetTypes.STREAM : null != I && ($ = el.InviteTargetTypes.EMBEDDED_APPLICATION);
                let ee = null != o ? o.getGuildId() : null != u ? u.id : null,
                    et = (0, _.useStateFromStores)([x.default], () => {
                        let e = null != J ? J.id : null;
                        return null == e ? null : x.default.getInvite(e, {
                            targetType: $,
                            targetUserId: f,
                            targetApplicationId: I
                        })
                    }, [J, $, f, I]),
                    [en, es, ea, eo, eu] = (0, _.useStateFromStoresArray)([w.default, B.default, U.default], () => {
                        let e = null != J ? J.id : null;
                        return [w.default.getInviteSuggestionRows(), w.default.getTotalSuggestionsCount() >= 1, w.default.getInitialCounts(), null != o && null != J ? B.default.getVoiceStatesForChannel(J) : null, null != ee ? U.default.getProps(ee, e) : null]
                    }, [J, o, ee]),
                    ed = (0, _.useStateFromStores)([G.default], () => null != J && G.default.can(ei.Permissions.CREATE_INSTANT_INVITE, J), [J]),
                    eI = null === et || !ed,
                    [eh] = i.useState(() => {
                        let e = new Set;
                        return null != f && null != eo ? eo.forEach(t => {
                            let {
                                user: n
                            } = t;
                            e.add(n.id)
                        }) : null != ee && null != eu && $ !== el.InviteTargetTypes.EMBEDDED_APPLICATION && eu.rows.forEach(t => {
                            t.type === U.MemberListRowTypes.MEMBER && e.add(t.userId)
                        }), e
                    }),
                    eg = null == o ? void 0 : o.id,
                    eN = (0, _.useStateFromStores)([D.default], () => D.default.getStageInstanceByChannel(eg), [eg]);
                i.useEffect(() => {
                    (0, g.loadInviteSuggestions)({
                        omitUserIds: eh,
                        guild: u,
                        channel: o,
                        applicationId: I,
                        inviteTargetType: $
                    }).catch(ei.NOOP_NULL)
                }, [eh, o, u, I, $]);
                let [eT] = (0, p.default)(null != I ? [I] : []), eA = (0, v.default)({
                    guildId: ee
                }), ep = null != et ? et.code : void 0, eS = null == et ? void 0 : et.maxAge, em = null == et ? void 0 : et.maxUses, ev = null == et ? void 0 : et.temporary, eC = u.vanityURLCode, eR = null != eC && eC.length > 0, {
                    enabled: eL
                } = Q.default.useExperiment({
                    guildId: null !== (s = null !== (r = null !== (n = u.id) && void 0 !== n ? n : null == et ? void 0 : et.guild.id) && void 0 !== r ? r : ee) && void 0 !== s ? s : "",
                    location: "acc417_2"
                }, {
                    autoTrackExposure: eR
                }), eO = eL && !(null == J ? void 0 : J.isGuildVocal()) && eR, eD = (null == J ? void 0 : J.type) === ei.ChannelTypes.GUILD_VOICE, eM = (0, S.default)(J);
                !ed && (null == eN ? void 0 : eN.invite_code) != null && (ep = eN.invite_code);
                let [eU, ey] = i.useState({
                    query: "",
                    maxAge: null !== (a = null != eS ? eS : eA) && void 0 !== a ? a : eE.value,
                    savedMaxAge: eS === ec.value ? null != eA ? eA : eE.value : ec.value,
                    maxUses: null != em && 0 !== em ? em : e_.value,
                    temporary: null != ev && ev,
                    networkError: void 0,
                    showVanityURL: eO,
                    currentPage: null != M ? M : el.InstantInviteModalPages.MAIN,
                    lastPage: void 0
                }), eP = i.useCallback(e => {
                    ey(t => ({
                        ...t,
                        ...e
                    }))
                }, []), ex = i.useCallback(e => {
                    eP({
                        currentPage: e,
                        lastPage: eU.currentPage
                    })
                }, [eU.currentPage, eP]), ew = (eD || Y) && M !== el.InstantInviteModalPages.GUEST && !eO && !eI && !eM, {
                    enabled: eG
                } = L.GuestVoiceInvitesExperiment.useExperiment({
                    guildId: null == u ? void 0 : u.id,
                    location: "acc417_3"
                }, {
                    autoTrackExposure: ew
                }), {
                    maxAge: eb,
                    maxUses: eF,
                    temporary: eV,
                    savedMaxAge: eB
                } = eU, eH = i.useCallback(() => {
                    let {
                        currentPage: e,
                        lastPage: t
                    } = eU;
                    e === el.InstantInviteModalPages.SETTINGS && null != t ? ex(t) : C()
                }, [ex, eU, C]), ej = i.useCallback(() => {
                    let e = null == J ? void 0 : J.id;
                    0 === eF && 0 === eb && !eV && eO ? eP({
                        networkError: void 0,
                        showVanityURL: !0
                    }) : null != e && (eP({
                        networkError: void 0,
                        showVanityURL: !1
                    }), h.default.createInvite(e, {
                        max_age: eb,
                        max_uses: eF,
                        target_type: $,
                        target_user_id: f,
                        target_application_id: null == eT ? void 0 : eT.id,
                        temporary: eV,
                        flags: V
                    }, d).catch(e => eP({
                        networkError: e,
                        showVanityURL: eO
                    }))), eb !== ec.value && eB !== ec.value && eP({
                        savedMaxAge: ec.value
                    })
                }, [eO, J, d, null == eT ? void 0 : eT.id, $, f, eb, eF, eV, V, eP, eB]), ek = (0, N.default)(J), eW = (0, N.default)(V), eY = ek !== J, eK = eW !== V;
                return i.useEffect(() => {
                    (eY || eK) && ej()
                }, [ej, eY, eK]), (0, l.jsx)(j, {
                    children: (0, l.jsx)(ef, {
                        ref: t,
                        canCreateInvites: ed,
                        noInvitesAvailable: eI,
                        inviteChannel: J,
                        guild: u,
                        guildScheduledEvent: c,
                        streamUserId: f,
                        vanityURLCode: eC,
                        targetType: $,
                        targetUserId: f,
                        application: eT,
                        rows: en,
                        showFriends: es,
                        initialCounts: ea,
                        code: ep,
                        source: d,
                        welcomeToServer: R,
                        analyticsLocations: k,
                        analyticsLocation: b,
                        transitionState: m,
                        onClose: C,
                        canShowVanityURL: eO,
                        isGuestInviteCreationToggleEnabled: eG && ew,
                        shouldHideTemporaryInviteToggle: eG && ew || M === el.InstantInviteModalPages.GUEST,
                        modalState: eU,
                        setModalState: eP,
                        changePage: ex,
                        onGenerateNewLink: ej,
                        inviteFlags: V,
                        setInviteFlags: H,
                        showGuestInviteToggleForCurrentVoiceChannel: Y,
                        setInviteChannel: q,
                        handleDone: eH
                    })
                })
            })
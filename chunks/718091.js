            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ed
                }
            }), n("70102"), n("424973"), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("917351"),
                u = n.n(r),
                o = n("866227"),
                d = n.n(o),
                c = n("394846"),
                f = n("249654"),
                h = n("446674"),
                p = n("77078"),
                m = n("913144"),
                E = n("561288"),
                C = n("450911"),
                S = n("630086"),
                g = n("970728"),
                _ = n("369008"),
                I = n("736964"),
                T = n("304580"),
                v = n("137223"),
                x = n("244201"),
                N = n("716241"),
                A = n("274870"),
                M = n("843962"),
                R = n("679653"),
                j = n("52393"),
                L = n("393414"),
                O = n("233069"),
                y = n("42203"),
                b = n("330154"),
                P = n("501090"),
                D = n("945956"),
                U = n("660478"),
                w = n("27618"),
                F = n("102985"),
                k = n("697218"),
                V = n("145131"),
                B = n("476765"),
                H = n("570443"),
                G = n("76539"),
                W = n("664336"),
                Y = n("599110"),
                z = n("306160"),
                K = n("659500"),
                Z = n("449008"),
                X = n("158998"),
                J = n("993063"),
                q = n("849324"),
                Q = n("49111"),
                $ = n("782340"),
                ee = n("629722"),
                et = n("905518"),
                en = n("926622");
            let ea = (0, B.uid)(),
                el = (0, B.uid)();

            function es(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, a.jsxs)(V.default, {
                    align: V.default.Align.CENTER,
                    justify: V.default.Justify.CENTER,
                    direction: V.default.Direction.VERTICAL,
                    className: i(ee.errorState, t),
                    children: [(0, a.jsx)("div", {
                        className: i(ee.errorStateIcon, en.marginBottom20)
                    }), n]
                })
            }
            let ei = e => {
                    var t;
                    let {
                        channel: n,
                        onClose: l
                    } = e, s = null !== (t = (0, R.default)(n)) && void 0 !== t ? t : "", i = (0, h.useStateFromStores)([U.default], () => {
                        var e;
                        return null !== (e = U.default.lastMessageId(n.id)) && void 0 !== e ? e : n.id
                    });
                    return (0, a.jsx)(p.Clickable, {
                        onClick: () => {
                            (0, L.transitionToGuild)(Q.ME, n.id), l()
                        },
                        children: (0, a.jsxs)("div", {
                            className: ee.confirmChannelItemContainer,
                            children: [(0, a.jsx)(p.Avatar, {
                                src: (0, M.getChannelIconURL)(n),
                                size: p.AvatarSizes.SIZE_24,
                                "aria-label": s
                            }), (0, a.jsx)("span", {
                                className: ee.confirmChannelName,
                                children: s
                            }), (0, a.jsx)("span", {
                                className: ee.lastActiveTimestamp,
                                children: d(f.default.extractTimestamp(i)).fromNow()
                            })]
                        })
                    })
                },
                er = e => {
                    let {
                        onConfirm: t,
                        channelIds: n,
                        ...l
                    } = e, s = (0, h.useStateFromStoresArray)([y.default], () => Array.from(n).map(y.default.getChannel), [n]);
                    return (0, a.jsxs)(p.ConfirmModal, {
                        header: $.default.Messages.GROUP_DM_INVITE_CONFIRM,
                        confirmText: $.default.Messages.GROUP_DM_INVITE_CONFIRM_BUTTON,
                        cancelText: $.default.Messages.CANCEL,
                        onConfirm: t,
                        confirmButtonColor: p.Button.Colors.BRAND,
                        ...l,
                        children: [(0, a.jsx)(p.Text, {
                            variant: "text-md/normal",
                            children: $.default.Messages.GROUP_DM_INVITE_CONFIRM_DESCRIPTION
                        }), (0, a.jsx)(p.FormTitle, {
                            className: ee.selectExistingFormHeader,
                            children: $.default.Messages.GROUP_DM_INVITE_SELECT_EXISTING
                        }), (0, a.jsx)(p.Scroller, {
                            className: ee.confirmInviteScroller,
                            children: s.filter(Z.isNotNullish).sort((e, t) => {
                                var n, a;
                                let l = null !== (n = e.lastMessageId) && void 0 !== n ? n : e.id,
                                    s = null !== (a = t.lastMessageId) && void 0 !== a ? a : t.id;
                                return f.default.compare(s, l)
                            }).map(e => (0, a.jsx)(ei, {
                                onClose: l.onClose,
                                channel: e
                            }, e.id))
                        })]
                    })
                };
            class eu extends l.PureComponent {
                componentDidMount() {
                    let {
                        channel: e
                    } = this.props;
                    m.default.wait(() => _.default.open(null == e ? void 0 : e.id));
                    let t = (0, N.collectChannelAnalyticsMetadata)(e);
                    null != e ? e.isDM() ? Y.default.track(Q.AnalyticEvents.OPEN_POPOUT, {
                        ...t,
                        type: "Add Friends to DM",
                        source: "DM",
                        is_friend: !this.isNotFriends()
                    }) : Y.default.track(Q.AnalyticEvents.OPEN_POPOUT, {
                        ...t,
                        type: "Add Friends to DM",
                        source: "Group DM"
                    }) : Y.default.track(Q.AnalyticEvents.OPEN_POPOUT, {
                        ...t,
                        type: "New Group DM",
                        source: "Friends List"
                    }), K.ComponentDispatch.subscribe(Q.ComponentActions.SCROLL_PAGE_UP, this.scrollPageUp), K.ComponentDispatch.subscribe(Q.ComponentActions.SCROLL_PAGE_DOWN, this.scrollPageDown)
                }
                componentWillUnmount() {
                    K.ComponentDispatch.unsubscribe(Q.ComponentActions.SCROLL_PAGE_UP, this.scrollPageUp), K.ComponentDispatch.unsubscribe(Q.ComponentActions.SCROLL_PAGE_DOWN, this.scrollPageDown), null != this.copyTimeout && clearTimeout(this.copyTimeout), m.default.wait(() => _.default.close())
                }
                isNotFriends() {
                    let {
                        channel: e
                    } = this.props;
                    if (null == e || !e.isDM()) return !1;
                    let t = e.getRecipientId();
                    if (null == t) throw Error("no recipient in DM");
                    return !w.default.isFriend(t)
                }
                createInvite() {
                    let {
                        channel: e
                    } = this.props;
                    if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
                    let {
                        inviteMaxAgeSeconds: t
                    } = J.default.getCurrentConfig({
                        location: "5326c5_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    g.default.createInvite(e.id, {
                        max_age: t
                    }, Q.InstantInviteSources.GROUP_DM)
                }
                isPartyFull() {
                    let {
                        channel: e
                    } = this.props;
                    return null != e && e.recipients.length + 1 >= this.getMaxParticipants()
                }
                getMaxParticipants() {
                    let {
                        channel: e
                    } = this.props, t = k.default.getCurrentUser();
                    return null != t && t.isStaff() ? Q.MAX_GROUP_DM_STAFF_PARTICIPANTS : null != e && e.isBroadcastChannel() ? Q.MAX_GROUP_DM_BROADCAST_PARTICIPANTS : null != e && e.userLimit > 0 ? e.userLimit : Q.MAX_GROUP_DM_PARTICIPANTS
                }
                getRemaining() {
                    let {
                        channel: e,
                        selectedUsers: t
                    } = this.props, n = (null == e ? 0 : e.recipients.length) + 1;
                    return this.getMaxParticipants() - t.size - n
                }
                renderCreateGroupButton() {
                    let {
                        channel: e,
                        selectedUsers: t
                    } = this.props, n = this.getRemaining(), l = null != e && 0 === t.size || n < 0, s = t.size > 1 ? $.default.Messages.CREATE_GROUP_DM : $.default.Messages.CREATE_DM;
                    return (0, a.jsx)(p.Button, {
                        fullWidth: !0,
                        disabled: l,
                        onClick: this.handleInviteUsers,
                        children: s
                    })
                }
                renderAddUsersButton() {
                    let {
                        channel: e,
                        selectedUsers: t
                    } = this.props;
                    if (null == e || e.isDM()) return;
                    let n = this.getRemaining(),
                        l = 0 === t.size || n < 0;
                    return (0, a.jsx)("div", {
                        className: ee.addButton,
                        children: (0, a.jsx)(p.Button, {
                            size: p.Button.Sizes.SMALL,
                            disabled: l,
                            onClick: this.handleInviteUsers,
                            children: $.default.Messages.ADD
                        })
                    })
                }
                renderSubtitle() {
                    if (!this.props.hasFriends || this.isNotFriends() || this.isPartyFull()) return null;
                    let e = this.getRemaining(),
                        t = e <= 0 ? $.default.Messages.GROUP_DM_INVITE_FULL_SUB2.format({
                            number: this.getMaxParticipants()
                        }) : $.default.Messages.GROUP_DM_INVITE_REMAINING.format({
                            number: e
                        });
                    return (0, a.jsx)(p.Text, {
                        variant: "text-xs/normal",
                        className: i(ee.subtitle, {
                            [ee.subtitleWarning]: e < 0
                        }, en.marginTop4),
                        children: t
                    })
                }
                renderSearchBar() {
                    var e;
                    let {
                        query: t,
                        hasFriends: n,
                        results: l,
                        selectedRow: s,
                        selectedUsers: r
                    } = this.props;
                    if (!n || this.isNotFriends()) return null;
                    let u = [];
                    return r.forEach(e => {
                        let t = k.default.getUser(e);
                        null != t && u.push(X.default.getName(t))
                    }), (0, a.jsxs)(V.default, {
                        className: i(ee.searchBar, en.marginTop20),
                        children: [(0, a.jsx)(v.default, {
                            ref: this.searchBarRef,
                            className: ee.searchBarComponent,
                            autoFocus: !0,
                            placeholder: 0 === r.size ? $.default.Messages.GROUP_DM_SEARCH_PLACEHOLDER : void 0,
                            disabled: this.isPartyFull(),
                            size: v.default.Sizes.MEDIUM,
                            query: t,
                            selectedRow: s,
                            sections: [null !== (e = null == l ? void 0 : l.length) && void 0 !== e ? e : 0],
                            tags: u,
                            onSelect: this.handleSelect,
                            onSelectionChange: this.handleSelectionChange,
                            onQueryChange: this.handleQueryChange,
                            onRemoveTag: this.handleRemoveUser,
                            inputProps: {
                                "aria-labelledby": ea,
                                "aria-controls": el,
                                "aria-expanded": !0,
                                "aria-activedescendant": "user-row-".concat(s)
                            }
                        }), this.renderAddUsersButton()]
                    })
                }
                renderHeader() {
                    let e = null != this.scrollerRef.current && this.state.separator,
                        t = this.isNotFriends() ? $.default.Messages.GROUP_DM_ADD_FRIENDS : $.default.Messages.GROUP_DM_HEADER;
                    return (0, a.jsxs)(p.ModalHeader, {
                        direction: V.default.Direction.VERTICAL,
                        align: V.default.Align.STRETCH,
                        className: ee.header,
                        separator: e,
                        children: [c.isMobile ? this.renderMobileCloseButton() : null, (0, a.jsx)(p.Heading, {
                            id: ea,
                            variant: "heading-lg/semibold",
                            children: t
                        }), this.renderSubtitle(), this.renderSearchBar()]
                    })
                }
                renderBody() {
                    let {
                        channel: e,
                        hasFriends: t,
                        results: n
                    } = this.props;
                    if (this.isNotFriends()) {
                        let t = null != e ? e.getRecipientId() : null;
                        if (null == t) throw Error("no recipient in DM");
                        let n = k.default.getUser(t),
                            l = null != n ? n.username : "",
                            s = null != n && w.default.getRelationshipType(n.id) === Q.RelationshipTypes.PENDING_OUTGOING;
                        return (0, a.jsxs)(es, {
                            className: ee.notFriends,
                            children: [(0, a.jsx)("div", {
                                children: $.default.Messages.GROUP_DM_INVITE_NOT_FRIENDS.format({
                                    username: l
                                })
                            }), (0, a.jsx)(p.Button, {
                                disabled: s,
                                size: p.Button.Sizes.SMALL,
                                onClick: () => null != n ? this.handleAddFriend(n) : null,
                                className: en.marginTop20,
                                children: s ? $.default.Messages.ADD_FRIEND_BUTTON_AFTER : $.default.Messages.ADD_FRIEND_BUTTON
                            })]
                        })
                    }
                    return t ? this.isPartyFull() ? (0, a.jsxs)(es, {
                        className: ee.partyFull,
                        children: [(0, a.jsx)("div", {
                            children: $.default.Messages.GROUP_DM_INVITE_FULL_MAIN
                        }), (0, a.jsx)("div", {
                            children: $.default.Messages.GROUP_DM_INVITE_FULL_SUB2.format({
                                number: this.getMaxParticipants()
                            })
                        })]
                    }) : 0 === n.length ? (0, a.jsx)(es, {
                        className: i(ee.noResults, en.marginBottom20),
                        children: (0, a.jsx)("div", {
                            children: $.default.Messages.GROUP_DM_INVITE_EMPTY
                        })
                    }) : (0, a.jsx)(p.List, {
                        ref: this.scrollerRef,
                        sections: [n.length],
                        className: ee.scroller,
                        renderRow: this.renderRow,
                        rowHeight: this.getRowHeight,
                        renderSection: this.renderSection,
                        sectionHeight: 0,
                        onScroll: this.handleScroll,
                        paddingTop: 0,
                        paddingBottom: 14,
                        fade: !0,
                        role: void 0,
                        innerRole: "listbox",
                        innerId: el,
                        innerAriaMultiselectable: !0,
                        innerAriaOrientation: "vertical"
                    }) : (0, a.jsxs)(es, {
                        className: ee.noFriends,
                        children: [(0, a.jsx)("div", {
                            children: $.default.Messages.GROUP_DM_INVITE_NO_FRIENDS
                        }), (0, a.jsx)(p.Button, {
                            autoFocus: !0,
                            color: p.Button.Colors.GREEN,
                            fullWidth: !0,
                            size: p.Button.Sizes.SMALL,
                            onClick: this.handleAddFriendNavigation,
                            className: en.marginTop20,
                            children: $.default.Messages.ADD_FRIEND
                        })]
                    })
                }
                renderSection() {
                    return null
                }
                renderInviteLink() {
                    let {
                        channel: e,
                        invite: t,
                        hideInstantInvites: n
                    } = this.props, {
                        copied: s
                    } = this.state;
                    if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
                    let r = null != t ? (0, j.default)(t.code) : "";
                    return (0, a.jsxs)(l.Fragment, {
                        children: [(0, a.jsx)(p.FormTitle, {
                            tag: "h5",
                            className: en.marginBottom8,
                            children: $.default.Messages.GROUP_DM_INVITE_LINK_TITLE
                        }), (0, a.jsxs)(V.default, {
                            className: i(et.input, {
                                [et.success]: s
                            }),
                            justify: V.default.Justify.BETWEEN,
                            align: V.default.Align.CENTER,
                            children: [r.length > 0 ? (0, a.jsx)(p.TextInput, {
                                className: ee.copyInput,
                                name: "invite",
                                value: n ? $.default.Messages.INSTANT_INVITE_HIDDEN : r,
                                editable: !1,
                                inputClassName: ee.noBorder,
                                spellCheck: "false",
                                onClick: e => e.currentTarget.select()
                            }) : (0, a.jsx)(p.TextInput, {
                                className: ee.copyInput,
                                name: "invite",
                                value: r,
                                placeholder: (0, j.default)($.default.Messages.GROUP_DM_INVITE_LINK_EXAMPLE),
                                editable: !1,
                                inputClassName: ee.noBorder,
                                spellCheck: "false",
                                onClick: () => this.createInvite()
                            }), z.SUPPORTS_COPY && r.length > 0 ? (0, a.jsx)(p.Button, {
                                size: p.Button.Sizes.SMALL,
                                color: s ? p.Button.Colors.GREEN : p.Button.Colors.BRAND,
                                className: ee.copyButton,
                                onClick: () => this.handleCopyInvite(r),
                                children: s ? $.default.Messages.INVITE_COPIED : $.default.Messages.COPY
                            }) : null, 0 === r.length ? (0, a.jsx)(p.Button, {
                                size: p.Button.Sizes.SMALL,
                                color: p.Button.Colors.BRAND,
                                className: ee.copyButton,
                                onClick: () => this.createInvite(),
                                children: $.default.Messages.GROUP_DM_INVITE_LINK_CREATE
                            }) : null]
                        }), r.length > 0 ? (0, a.jsx)(p.Text, {
                            variant: "text-xs/normal",
                            className: i(en.marginTop8, ee.footerText),
                            children: $.default.Messages.INVITE_EXPIRES_HOURS.format({
                                numHours: "".concat(24)
                            })
                        }) : null]
                    })
                }
                renderFooter() {
                    let {
                        hasFriends: e,
                        channel: t
                    } = this.props;
                    if (this.isNotFriends() || !e || this.isPartyFull()) return null;
                    let n = null == t || t.isDM() ? this.renderCreateGroupButton() : this.renderInviteLink();
                    if (null != n) return (0, a.jsxs)(l.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: ee.footerSeparator
                        }), (0, a.jsx)(V.default, {
                            direction: V.default.Direction.VERTICAL,
                            className: ee.footer,
                            children: n
                        })]
                    })
                }
                render() {
                    let {
                        transitionState: e
                    } = this.props;
                    return (0, a.jsxs)(p.ModalRoot, {
                        transitionState: null != e ? e : p.ModalTransitionState.ENTERED,
                        className: ee.popout,
                        children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
                    })
                }
                handleAddFriend(e) {
                    this.props.onClose(), I.default.sendRequest({
                        discordTag: X.default.getUserTag(e, {
                            identifiable: "always"
                        }),
                        context: {
                            location: "Group DM"
                        }
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        separator: !1,
                        copied: !1
                    }, this.scrollerRef = l.createRef(), this.searchBarRef = l.createRef(), this._mobileCloseRef = l.createRef(), this.scrollPageUp = () => {
                        var e;
                        null === (e = this.scrollerRef.current) || void 0 === e || e.scrollPageUp({
                            animate: !0
                        })
                    }, this.scrollPageDown = () => {
                        var e;
                        null === (e = this.scrollerRef.current) || void 0 === e || e.scrollPageDown({
                            animate: !0
                        })
                    }, this.renderMobileCloseButton = () => (0, a.jsx)("div", {
                        className: i(ee.mobileToolsContainer),
                        ref: this._mobileCloseRef,
                        children: (0, a.jsx)(p.FocusRingScope, {
                            containerRef: this._mobileCloseRef,
                            children: (0, a.jsx)("div", {
                                children: (0, a.jsx)(T.default, {
                                    className: ee.mobileToolsCloseIcon,
                                    closeAction: this.props.onClose,
                                    keybind: "ESC"
                                })
                            })
                        })
                    }), this.getRowHeight = (e, t) => {
                        if (e > 0) return 0;
                        let {
                            results: n
                        } = this.props, a = n[t];
                        return null != a ? 42 : 0
                    }, this.renderRow = e => {
                        let {
                            section: t,
                            row: n
                        } = e;
                        if (t > 0) return null;
                        let {
                            results: l,
                            selectedUsers: s,
                            selectedRow: i,
                            hideDiscriminator: r
                        } = this.props, u = l[n];
                        if (null == u) return null;
                        let {
                            user: o,
                            comparator: d
                        } = u, c = s.has(o.id);
                        return (0, a.jsx)(q.default, {
                            row: n,
                            user: o,
                            hideDiscriminator: r,
                            comparator: d,
                            checked: c,
                            selected: n === i,
                            onClick: this.handleClick,
                            onMouseEnter: this.focusResult,
                            "aria-posinset": n + 1,
                            "aria-setsize": l.length
                        }, o.id)
                    }, this.forceFocus = () => {
                        let e = this.searchBarRef.current;
                        null == e || e.focus()
                    }, this.focusResult = e => {
                        _.default.select(e)
                    }, this.handleSelect = (e, t) => {
                        let {
                            results: n,
                            channel: a
                        } = this.props;
                        null == t ? _.default.clear(null == a ? void 0 : a.id) : null != n && this.handleClick(n[t].user.id)
                    }, this.handleSelectionChange = (e, t) => {
                        _.default.select(t);
                        let n = this.scrollerRef.current;
                        null != n && n.scrollToIndex({
                            section: e,
                            row: t,
                            padding: 8
                        })
                    }, this.handleQueryChange = e => {
                        let {
                            channel: t
                        } = this.props;
                        _.default.search(e, null == t ? void 0 : t.id)
                    }, this.handleRemoveUser = e => {
                        let t = Array.from(this.props.selectedUsers);
                        _.default.removeUser(t[e]), this.forceFocus()
                    }, this.handleClick = e => {
                        let {
                            selectedUsers: t,
                            query: n,
                            channel: a
                        } = this.props, l = !t.has(e);
                        l ? (_.default.addUser(e), n.length > 0 && _.default.clear(null == a ? void 0 : a.id)) : _.default.removeUser(e), this.forceFocus()
                    }, this.handleAddFriendNavigation = () => {
                        (0, L.transitionTo)(Q.Routes.FRIENDS), S.default.setSection(Q.FriendsSections.ADD_FRIEND), this.props.onClose()
                    }, this.handleScroll = () => {
                        let e = this.scrollerRef.current;
                        null != e && this.setState({
                            separator: !e.isScrolledToTop()
                        })
                    }, this.createNewDM = e => {
                        C.default.openPrivateChannel(e, !1, !1, "New Group DM")
                    }, this.pushToExistingDM = (e, t) => {
                        let n = D.default.getChannelId() === e.id;
                        C.default.addRecipients(e.id, t, Q.AnalyticsLocations.ADD_FRIENDS_TO_DM).then(a => {
                            if (n) {
                                if (e.isDM() && a !== e.id) {
                                    E.default.call(a, !1, !0);
                                    return
                                }
                                E.default.ring(a, t)
                            }
                        })
                    }, this.handleInviteUsers = () => {
                        let {
                            channel: e,
                            selectedUsers: t,
                            onClose: n
                        } = this.props, l = Array.from(t);
                        if (null != e) {
                            let t = ec(Array.from(new Set([...e.recipients, ...l])));
                            t.size > 0 ? (0, p.openModal)(n => (0, a.jsx)(er, {
                                ...n,
                                onConfirm: () => this.pushToExistingDM(e, l),
                                channelIds: t
                            }), {}, (0, p.modalContextFromAppContext)(this.context.appContext)) : this.pushToExistingDM(e, l)
                        } else {
                            let e = ec(l);
                            l.length > 1 && e.size > 0 ? (0, p.openModal)(t => (0, a.jsx)(er, {
                                ...t,
                                onConfirm: () => this.createNewDM(l),
                                channelIds: e
                            }), {}, (0, p.modalContextFromAppContext)(this.context.appContext)) : this.createNewDM(l)
                        }
                        n()
                    }, this.handleCopyInvite = e => {
                        let {
                            channel: t,
                            invite: n
                        } = this.props;
                        null != n && (0, z.copy)(e), null != this.copyTimeout && clearTimeout(this.copyTimeout), this.setState({
                            copied: !0
                        }), this.copyTimeout = setTimeout(() => {
                            this.setState({
                                copied: !1
                            })
                        }, 1e3), Y.default.track(Q.AnalyticEvents.COPY_INSTANT_INVITE, {
                            server: null,
                            channel: null != t ? t.id : null,
                            channel_type: null != t ? t.type : null,
                            location: Q.AnalyticsLocations.ADD_FRIENDS_TO_DM,
                            code: null != n ? n.code : null
                        })
                    }
                }
            }
            eu.contextType = x.default;
            let eo = h.default.connectStores([P.default, b.default, F.default], e => {
                let t, {
                    channel: n
                } = e;
                return null != n && null != (t = b.default.getInvite(n.id)) && t.isExpired() && (t = null), {
                    ...P.default.getState(),
                    invite: t,
                    hideDiscriminator: F.default.hidePersonalInformation,
                    hideInstantInvites: F.default.hideInstantInvites
                }
            })(eu);

            function ed(e) {
                let {
                    channel: t,
                    iconClassName: n,
                    icon: s,
                    tooltip: i,
                    tooltipPosition: r = "bottom",
                    popoutPosition: u = "bottom",
                    popoutAlign: o = "right",
                    subscribeToGlobalHotkey: d = !1
                } = e, [c, f] = l.useState(null != t && t.isGroupDM() && 0 === t.recipients.length), h = (0, A.useIsBroadcastingGDM)(null == t ? void 0 : t.id), m = l.useCallback(() => f(e => !e), []);
                return (l.useEffect(() => (d && K.ComponentDispatch.subscribe(Q.ComponentActions.TOGGLE_DM_CREATE, m), () => {
                    K.ComponentDispatch.unsubscribe(Q.ComponentActions.TOGGLE_DM_CREATE, m)
                }), [d, m]), h) ? null : (0, a.jsx)(p.Popout, {
                    renderPopout: e => (0, a.jsx)(eo, {
                        ...e,
                        onClose: e.closePopout,
                        channel: t
                    }),
                    position: u,
                    shouldShow: c,
                    align: o,
                    onRequestClose: () => f(!1),
                    animation: p.Popout.Animation.NONE,
                    children: e => (0, a.jsx)(W.default.Icon, {
                        ...e,
                        onClick: m,
                        icon: null != s ? s : null == t ? H.default : G.default,
                        className: n,
                        iconClassName: n,
                        tooltip: i,
                        tooltipPosition: r
                    })
                })
            }

            function ec(e) {
                let t = ef(e);
                return new Set(u(y.default.getMutablePrivateChannels()).values().filter(e => (0, O.isMultiUserDM)(e.type)).filter(e => ef(e.recipients) === t).map(e => e.id).value())
            }

            function ef(e) {
                return JSON.stringify(e.sort())
            }
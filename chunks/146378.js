            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("917351"),
                l = n.n(i),
                r = n("446674"),
                o = n("77078"),
                u = n("450911"),
                d = n("272030"),
                c = n("736964"),
                E = n("393414"),
                f = n("42203"),
                _ = n("42887"),
                h = n("109264"),
                C = n("663745"),
                T = n("158998"),
                I = n("371449"),
                S = n("224978"),
                N = n("83916"),
                A = n("559541"),
                p = n("49111"),
                m = n("353927"),
                g = n("782340"),
                R = n("889195");

            function O(e) {
                let {
                    user: t,
                    onSelect: n
                } = e, s = () => {
                    c.default.removeFriend(t.id, {
                        location: "Friends"
                    })
                }, i = (0, r.useStateFromStores)([_.default], () => _.default.supports(m.Features.VIDEO));
                return (0, a.jsxs)(o.Menu, {
                    navId: "friend-row",
                    "aria-label": g.default.Messages.USER_ACTIONS_MENU_LABEL,
                    onClose: d.closeContextMenu,
                    onSelect: n,
                    children: [i ? (0, a.jsx)(o.MenuItem, {
                        id: "start-video-call",
                        label: g.default.Messages.START_VIDEO_CALL,
                        action: function() {
                            u.default.openPrivateChannel(t.id, !0, !0)
                        }
                    }) : null, (0, a.jsx)(o.MenuItem, {
                        id: "start-voice-call",
                        label: g.default.Messages.START_VOICE_CALL,
                        action: () => {
                            u.default.openPrivateChannel(t.id, !0)
                        }
                    }), (0, a.jsx)(o.MenuItem, {
                        id: "remove-friend",
                        label: g.default.Messages.REMOVE_FRIEND,
                        action: () => {
                            (0, o.openModal)(e => (0, a.jsx)(o.ConfirmModal, {
                                header: g.default.Messages.REMOVE_FRIEND_TITLE.format({
                                    name: T.default.getName(t)
                                }),
                                confirmText: g.default.Messages.REMOVE_FRIEND,
                                cancelText: g.default.Messages.CANCEL,
                                onConfirm: s,
                                ...e,
                                children: (0, a.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    children: g.default.Messages.REMOVE_FRIEND_BODY.format({
                                        name: T.default.getName(t)
                                    })
                                })
                            }))
                        },
                        color: "danger"
                    })]
                })
            }
            class L extends s.PureComponent {
                componentWillLeave(e) {
                    null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillLeave(e)
                }
                componentWillEnter(e) {
                    null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillEnter(e)
                }
                render() {
                    let {
                        user: e,
                        isFocused: t,
                        activities: n,
                        applicationStream: s,
                        status: i,
                        isMobile: l
                    } = this.props, {
                        isActiveRow: r
                    } = this.state;
                    return (0, a.jsx)(S.default, {
                        ref: this.peopleListItemRef,
                        isFocused: t,
                        isActive: r,
                        user: e,
                        onOtherHover: () => r ? null : (0, d.closeContextMenu)(),
                        onClick: this.handleOpenPrivateChannel,
                        children: t => (0, a.jsxs)("div", {
                            className: R.listItemContents,
                            children: [(0, a.jsx)(A.default, {
                                user: e,
                                status: i,
                                isMobile: l,
                                subText: (0, a.jsx)(N.default, {
                                    hovered: t,
                                    activities: n,
                                    applicationStream: s,
                                    status: i,
                                    user: e
                                }),
                                hovered: t,
                                showAccountIdentifier: !0
                            }), (0, a.jsxs)("div", {
                                className: R.actions,
                                children: [(0, a.jsx)(I.default, {
                                    icon: h.default,
                                    tooltip: g.default.Messages.SEND_DM,
                                    onClick: this.handleOpenPrivateChannel,
                                    shouldHighlight: t
                                }), (0, a.jsx)(I.default, {
                                    icon: C.default,
                                    tooltip: g.default.Messages.MORE,
                                    onClick: this.handleOpenActionsMenu,
                                    shouldHighlight: t
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.peopleListItemRef = s.createRef(), this.state = {
                        isActiveRow: !1
                    }, this.handleOpenPrivateChannel = e => {
                        let {
                            user: t
                        } = this.props;
                        e.stopPropagation();
                        let n = l.find(f.default.getMutablePrivateChannels(), e => e.type === p.ChannelTypes.DM && e.getRecipientId() === t.id);
                        null != n ? (0, E.transitionTo)(p.Routes.CHANNEL(p.ME, n.id)) : u.default.openPrivateChannel(t.id)
                    }, this.handleOpenActionsMenu = e => {
                        let {
                            user: t
                        } = this.props;
                        (0, d.openContextMenu)(e, e => (0, a.jsx)(O, {
                            ...e,
                            user: t
                        }), {
                            onClose: () => {
                                this.setState({
                                    isActiveRow: !1
                                })
                            }
                        }), this.setState({
                            isActiveRow: !0
                        })
                    }
                }
            }
            var v = L
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return k
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                r = s("414456"),
                i = s.n(r),
                l = s("917351"),
                d = s.n(l),
                o = s("446674"),
                u = s("872717"),
                c = s("77078"),
                h = s("970728"),
                f = s("133403"),
                m = s("145079"),
                p = s("87657"),
                x = s("716241"),
                T = s("161778"),
                N = s("517763"),
                I = s("766274"),
                g = s("42203"),
                v = s("102985"),
                E = s("91551"),
                C = s("941886"),
                j = s("145131"),
                S = s("599110"),
                _ = s("49111"),
                A = s("782340"),
                D = s("578840"),
                M = s("405879"),
                y = s("926622");
            class R extends n.PureComponent {
                render() {
                    let {
                        invite: e,
                        hideDiscriminator: t,
                        hideInviteCode: s
                    } = this.props, n = new I.default(e.inviter);
                    return (0, a.jsxs)(j.default, {
                        className: i(D.row, M.card),
                        children: [(0, a.jsxs)(j.default, {
                            align: j.default.Align.CENTER,
                            className: D.userColumn,
                            children: [(0, a.jsx)(p.default, {
                                user: n,
                                size: c.AvatarSizes.SIZE_24,
                                className: D.avatar
                            }), (0, a.jsx)(m.default, {
                                user: n,
                                hideDiscriminator: t,
                                usernameClass: D.username,
                                discriminatorClass: D.discrimClass
                            })]
                        }), (0, a.jsx)(j.default, {
                            align: j.default.Align.CENTER,
                            grow: 0,
                            shrink: 0,
                            basis: 100,
                            className: D.boostZIndex,
                            children: (0, a.jsx)(c.Text, {
                                className: D.code,
                                variant: "text-sm/normal",
                                children: s ? "..." : e.code
                            })
                        }), (0, a.jsxs)(j.default, {
                            basis: 100,
                            grow: 0,
                            shrink: 0,
                            align: j.default.Align.CENTER,
                            justify: j.default.Justify.END,
                            className: D.boostZIndex,
                            children: [(0, a.jsx)(c.Text, {
                                className: D.countdown,
                                variant: "text-sm/normal",
                                children: (0, a.jsx)(E.default, {
                                    deadline: e.getExpiresAt(),
                                    showDays: !1
                                })
                            }), (0, a.jsx)(f.default, {
                                className: D.revokeInvite,
                                onClick: this.handleRevokeInvite
                            })]
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleRevokeInvite = () => {
                        let {
                            onRevoke: e,
                            invite: t
                        } = this.props;
                        null != e && e(t)
                    }
                }
            }
            class b extends n.PureComponent {
                componentDidMount() {
                    let {
                        channelId: e
                    } = this.props;
                    u.default.get({
                        url: _.Endpoints.INSTANT_INVITES(e),
                        retries: 3,
                        oldFormErrors: !0
                    }).then(e => {
                        let t = e.body.map(e => new N.default({
                            ...e,
                            maxUses: e.max_uses,
                            maxAge: e.max_age,
                            createdAt: e.created_at
                        }));
                        this.setState({
                            loading: !1,
                            invites: t
                        })
                    }), S.default.track(_.AnalyticEvents.OPEN_MODAL, {
                        ...(0, x.collectChannelAnalyticsMetadata)(g.default.getChannel(e)),
                        type: "Group DM Invites",
                        source: "Group DM Menu"
                    })
                }
                renderContent() {
                    let {
                        loading: e,
                        invites: t
                    } = this.state;
                    return e || null == t ? (0, a.jsx)(c.Spinner, {
                        className: y.marginTop20,
                        type: c.Spinner.Type.SPINNING_CIRCLE
                    }) : d.isEmpty(t) ? this.renderEmpty() : (0, a.jsxs)("div", {
                        className: D.container,
                        children: [this.renderHeader(), this.renderInvites()]
                    })
                }
                renderEmpty() {
                    return (0, a.jsxs)(C.default, {
                        theme: this.props.theme,
                        children: [(0, a.jsx)(C.EmptyStateImage, {
                            darkSrc: s("553021"),
                            lightSrc: s("752499"),
                            width: 256,
                            height: 130,
                            style: {
                                marginBottom: 0
                            }
                        }), (0, a.jsx)(C.EmptyStateText, {
                            className: y.marginTop20,
                            children: A.default.Messages.NO_INVITES_CAPTION
                        })]
                    })
                }
                renderHeader() {
                    return (0, a.jsxs)(j.default, {
                        children: [(0, a.jsx)(j.default.Child, {
                            wrap: !0,
                            children: (0, a.jsx)(c.FormTitle, {
                                children: A.default.Messages.INSTANT_INVITE_INVITER
                            })
                        }), (0, a.jsx)(j.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            basis: 100,
                            children: (0, a.jsx)(c.FormTitle, {
                                children: A.default.Messages.INSTANT_INVITE_INVITE_CODE
                            })
                        }), (0, a.jsx)(j.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            basis: 100,
                            children: (0, a.jsx)(c.FormTitle, {
                                className: D.alignRight,
                                children: A.default.Messages.INSTANT_INVITE_EXPIRES
                            })
                        })]
                    })
                }
                renderInvites() {
                    let {
                        hideDiscriminators: e,
                        hideInviteCodes: t
                    } = this.props;
                    return d(this.state.invites).sortBy(e => {
                        var t;
                        return (null !== (t = e.inviter.username) && void 0 !== t ? t : "").toLocaleLowerCase()
                    }).map(s => (0, a.jsx)(R, {
                        invite: s,
                        hideDiscriminator: e,
                        hideInviteCode: t,
                        onRevoke: this.handleRevoke
                    }, s.code)).value()
                }
                render() {
                    return (0, a.jsxs)(c.ModalRoot, {
                        transitionState: this.props.transitionState,
                        "aria-label": A.default.Messages.INVITES,
                        size: c.ModalSize.MEDIUM,
                        children: [(0, a.jsxs)(c.ModalHeader, {
                            direction: j.default.Direction.VERTICAL,
                            align: j.default.Align.START,
                            separator: !1,
                            children: [(0, a.jsx)(c.FormTitle, {
                                tag: c.FormTitleTags.H1,
                                children: A.default.Messages.INVITES
                            }), (0, a.jsx)(c.FormText, {
                                type: c.FormTextTypes.DESCRIPTION,
                                children: A.default.Messages.SETTINGS_INVITE_TIP_WITHOUT_CREATE
                            })]
                        }), (0, a.jsx)(c.ModalContent, {
                            children: this.renderContent()
                        }), (0, a.jsx)(c.ModalFooter, {
                            children: (0, a.jsx)(c.Button, {
                                onClick: this.handleClose,
                                children: A.default.Messages.DONE
                            })
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        loading: !0,
                        invites: null
                    }, this.handleRevoke = e => {
                        h.default.revokeInvite(e), this.setState({
                            invites: this.state.invites.filter(t => t !== e)
                        })
                    }, this.handleClose = () => {
                        let {
                            onClose: e
                        } = this.props;
                        null == e || e()
                    }
                }
            }
            var k = o.default.connectStores([v.default, T.default], () => ({
                hideDiscriminators: v.default.hidePersonalInformation,
                hideInviteCodes: v.default.hideInstantInvites,
                theme: T.default.theme
            }))(b)
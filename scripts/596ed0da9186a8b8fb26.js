(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["26703"], {
        553021: function(e, t, s) {
            "use strict";
            e.exports = s.p + "c7c4065874955761be3b.svg"
        },
        752499: function(e, t, s) {
            "use strict";
            e.exports = s.p + "a1b0a14d2f22c155a2b3.svg"
        },
        856670: function(e, t, s) {
            "use strict";
            e.exports = s.p + "018197f71e03e53562e7.svg"
        },
        693029: function(e, t, s) {
            "use strict";
            e.exports = s.p + "7e5dd7f59f96cc264184.svg"
        },
        133403: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var a = s("37983");
            s("884691");
            var r = s("414456"),
                i = s.n(r),
                n = s("77078"),
                l = s("782340"),
                d = s("239636");
            let o = Object.freeze({
                DEFAULT: d.default,
                FILLED: d.filled
            });

            function u(e) {
                let {
                    className: t,
                    onClick: s,
                    "aria-label": r,
                    look: u = o.DEFAULT
                } = e;
                return (0, a.jsx)(n.Clickable, {
                    "aria-label": null != r ? r : l.default.Messages.REMOVE,
                    className: i(d.button, u, t),
                    onClick: s
                })
            }
            u.Looks = o
        },
        87657: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var a = s("37983"),
                r = s("884691"),
                i = s("77078"),
                n = s("390236"),
                l = r.memo(function(e) {
                    var t, s, l, d;
                    let {
                        user: o,
                        size: u = i.AvatarSizes.SIZE_32,
                        animate: c = !1,
                        "aria-hidden": h = !1,
                        ...f
                    } = e, m = r.useContext(n.default);
                    return (0, a.jsx)(i.Avatar, {
                        src: (t = o, s = (0, i.getAvatarSize)(u), l = c, d = m, t.getAvatarURL(d, s, l)),
                        size: u,
                        "aria-label": h ? void 0 : o.username,
                        "aria-hidden": h,
                        ...f
                    })
                })
        },
        84279: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return D
                }
            });
            var a = s("37983"),
                r = s("884691"),
                i = s("414456"),
                n = s.n(i),
                l = s("917351"),
                d = s.n(l),
                o = s("446674"),
                u = s("872717"),
                c = s("77078"),
                h = s("970728"),
                f = s("133403"),
                m = s("145079"),
                p = s("87657"),
                I = s("716241"),
                x = s("161778"),
                T = s("517763"),
                v = s("766274"),
                E = s("42203"),
                g = s("102985"),
                N = s("91551"),
                C = s("941886"),
                j = s("145131"),
                S = s("599110"),
                A = s("49111"),
                M = s("782340"),
                _ = s("578840"),
                k = s("405879"),
                b = s("926622");
            class R extends r.PureComponent {
                render() {
                    let {
                        invite: e,
                        hideDiscriminator: t,
                        hideInviteCode: s
                    } = this.props, r = new v.default(e.inviter);
                    return (0, a.jsxs)(j.default, {
                        className: n(_.row, k.card),
                        children: [(0, a.jsxs)(j.default, {
                            align: j.default.Align.CENTER,
                            className: _.userColumn,
                            children: [(0, a.jsx)(p.default, {
                                user: r,
                                size: c.AvatarSizes.SIZE_24,
                                className: _.avatar
                            }), (0, a.jsx)(m.default, {
                                user: r,
                                hideDiscriminator: t,
                                usernameClass: _.username,
                                discriminatorClass: _.discrimClass
                            })]
                        }), (0, a.jsx)(j.default, {
                            align: j.default.Align.CENTER,
                            grow: 0,
                            shrink: 0,
                            basis: 100,
                            className: _.boostZIndex,
                            children: (0, a.jsx)(c.Text, {
                                className: _.code,
                                variant: "text-sm/normal",
                                children: s ? "..." : e.code
                            })
                        }), (0, a.jsxs)(j.default, {
                            basis: 100,
                            grow: 0,
                            shrink: 0,
                            align: j.default.Align.CENTER,
                            justify: j.default.Justify.END,
                            className: _.boostZIndex,
                            children: [(0, a.jsx)(c.Text, {
                                className: _.countdown,
                                variant: "text-sm/normal",
                                children: (0, a.jsx)(N.default, {
                                    deadline: e.getExpiresAt(),
                                    showDays: !1
                                })
                            }), (0, a.jsx)(f.default, {
                                className: _.revokeInvite,
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
            class y extends r.PureComponent {
                componentDidMount() {
                    let {
                        channelId: e
                    } = this.props;
                    u.default.get({
                        url: A.Endpoints.INSTANT_INVITES(e),
                        retries: 3,
                        oldFormErrors: !0
                    }).then(e => {
                        let t = e.body.map(e => new T.default({
                            ...e,
                            maxUses: e.max_uses,
                            maxAge: e.max_age,
                            createdAt: e.created_at
                        }));
                        this.setState({
                            loading: !1,
                            invites: t
                        })
                    }), S.default.track(A.AnalyticEvents.OPEN_MODAL, {
                        ...(0, I.collectChannelAnalyticsMetadata)(E.default.getChannel(e)),
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
                        className: b.marginTop20,
                        type: c.Spinner.Type.SPINNING_CIRCLE
                    }) : d.isEmpty(t) ? this.renderEmpty() : (0, a.jsxs)("div", {
                        className: _.container,
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
                            className: b.marginTop20,
                            children: M.default.Messages.NO_INVITES_CAPTION
                        })]
                    })
                }
                renderHeader() {
                    return (0, a.jsxs)(j.default, {
                        children: [(0, a.jsx)(j.default.Child, {
                            wrap: !0,
                            children: (0, a.jsx)(c.FormTitle, {
                                children: M.default.Messages.INSTANT_INVITE_INVITER
                            })
                        }), (0, a.jsx)(j.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            basis: 100,
                            children: (0, a.jsx)(c.FormTitle, {
                                children: M.default.Messages.INSTANT_INVITE_INVITE_CODE
                            })
                        }), (0, a.jsx)(j.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            basis: 100,
                            children: (0, a.jsx)(c.FormTitle, {
                                className: _.alignRight,
                                children: M.default.Messages.INSTANT_INVITE_EXPIRES
                            })
                        })]
                    })
                }
                renderInvites() {
                    var e;
                    let {
                        hideDiscriminators: t,
                        hideInviteCodes: s
                    } = this.props;
                    return d(this.state.invites).sortBy(t => (null !== (e = t.inviter.username) && void 0 !== e ? e : "").toLocaleLowerCase()).map(e => (0, a.jsx)(R, {
                        invite: e,
                        hideDiscriminator: t,
                        hideInviteCode: s,
                        onRevoke: this.handleRevoke
                    }, e.code)).value()
                }
                render() {
                    return (0, a.jsxs)(c.ModalRoot, {
                        transitionState: this.props.transitionState,
                        "aria-label": M.default.Messages.INVITES,
                        size: c.ModalSize.MEDIUM,
                        children: [(0, a.jsxs)(c.ModalHeader, {
                            direction: j.default.Direction.VERTICAL,
                            align: j.default.Align.START,
                            separator: !1,
                            children: [(0, a.jsx)(c.FormTitle, {
                                tag: c.FormTitleTags.H1,
                                children: M.default.Messages.INVITES
                            }), (0, a.jsx)(c.FormText, {
                                type: c.FormTextTypes.DESCRIPTION,
                                children: M.default.Messages.SETTINGS_INVITE_TIP_WITHOUT_CREATE
                            })]
                        }), (0, a.jsx)(c.ModalContent, {
                            children: this.renderContent()
                        }), (0, a.jsx)(c.ModalFooter, {
                            children: (0, a.jsx)(c.Button, {
                                onClick: this.handleClose,
                                children: M.default.Messages.DONE
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
            var D = o.default.connectStores([g.default, x.default], () => ({
                hideDiscriminators: g.default.hidePersonalInformation,
                hideInviteCodes: g.default.hideInstantInvites,
                theme: x.default.theme
            }))(y)
        }
    }
]);
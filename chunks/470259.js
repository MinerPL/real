            "use strict";
            n.r(t), n.d(t, {
                INVITE_ROW_HEIGHT: function() {
                    return N
                },
                InviteRow: function() {
                    return S
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("819855"),
                s = n("77078"),
                a = n("148387"),
                o = n("843962"),
                u = n("679653"),
                d = n("161778"),
                c = n("305961"),
                f = n("705955"),
                E = n("27618"),
                _ = n("697218"),
                I = n("315102"),
                h = n("159885"),
                g = n("158998"),
                p = n("782340"),
                m = n("435808");
            let N = 44;
            class S extends i.Component {
                shouldComponentUpdate(e, t) {
                    return this.state.sending !== t.sending || this.state.invited !== t.invited || this.state.hovered !== t.hovered || this.props.user !== e.user || this.props.channel !== e.channel
                }
                renderUserOrChannel() {
                    let e, t, n;
                    let {
                        user: i,
                        channel: r
                    } = this.props;
                    if (null != i) t = i.getAvatarURL(null == r ? void 0 : r.guild_id, 32), n = g.default.getName(i);
                    else if (null != r && (t = (0, o.getChannelIconURL)(r), n = (0, u.computeChannelName)(r, _.default, E.default), null == t && null != r.guild_id)) {
                        let n = c.default.getGuild(r.guild_id);
                        null != n && (null != n.icon ? t = I.default.getGuildIconURL({
                            id: r.guild_id,
                            icon: n.icon,
                            size: 32
                        }) : e = (0, h.getAcronym)(n.name))
                    }
                    if (null == t || null == n) return null != e ? (0, l.jsx)("div", {
                        className: m.acronym,
                        "aria-hidden": !0,
                        children: e
                    }) : null;
                    return (0, l.jsx)(s.Avatar, {
                        src: t,
                        "aria-label": n,
                        size: s.AvatarSizes.SIZE_32,
                        className: m.inviteRowAvatar
                    })
                }
                render() {
                    let e;
                    let {
                        user: t,
                        channel: n
                    } = this.props, {
                        sending: i,
                        invited: a,
                        hovered: o
                    } = this.state;
                    return e = a ? (0, l.jsx)(s.Button, {
                        look: s.Button.Looks.LINK,
                        size: s.Button.Sizes.SMALL,
                        disabled: !0,
                        color: (0, r.isThemeDark)(d.default.theme) ? s.Button.Colors.WHITE : s.Button.Colors.BLACK,
                        children: p.default.Messages.INVITE_FRIEND_MODAL_SENT
                    }) : (0, l.jsx)(s.Button, {
                        color: s.Button.Colors.GREEN,
                        look: o ? s.Button.Looks.FILLED : s.Button.Looks.OUTLINED,
                        className: m.inviteRowButton,
                        size: s.Button.Sizes.SMALL,
                        submitting: i,
                        onClick: this.handleClickInvite,
                        children: p.default.Messages.INVITE_FRIEND_MODAL_INVITE
                    }), (0, l.jsxs)("div", {
                        className: m.inviteRow,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: [(0, l.jsxs)("div", {
                            className: m.inviteRowInfo,
                            children: [this.renderUserOrChannel(), (0, l.jsxs)("div", {
                                className: m.inviteRowName,
                                children: [g.default.getName(t), null != n ? (0, u.computeChannelName)(n, _.default, E.default, !0) : null]
                            })]
                        }), e]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        sending: !1,
                        invited: !1,
                        hovered: !1
                    }, this.handleMouseEnter = () => {
                        this.setState({
                            hovered: !0
                        })
                    }, this.handleMouseLeave = () => {
                        this.setState({
                            hovered: !1
                        })
                    }, this.getSuggestedProps = () => {
                        var e;
                        let {
                            row: t
                        } = this.props;
                        return null !== (e = null != t ? f.default.getSelectedInviteMetadata(t) : null) && void 0 !== e ? e : null
                    }, this.handleClickInvite = () => {
                        let {
                            user: e,
                            channel: t,
                            inviteKey: n,
                            location: l
                        } = this.props;
                        null != n && (null != t ? (this.setState({
                            sending: !0
                        }), a.default.enqueue({
                            type: a.InvitePropertiesType.GROUP_DM,
                            channel: t,
                            inviteKey: n,
                            location: l,
                            suggested: this.getSuggestedProps()
                        }, e => {
                            this.setState({
                                sending: !1,
                                invited: e
                            })
                        })) : null != e && (this.setState({
                            sending: !0
                        }), a.default.enqueue({
                            type: a.InvitePropertiesType.USER,
                            user: e,
                            inviteKey: n,
                            location: l,
                            suggested: this.getSuggestedProps()
                        }, e => {
                            this.setState({
                                sending: !1,
                                invited: e
                            })
                        })))
                    }
                }
            }
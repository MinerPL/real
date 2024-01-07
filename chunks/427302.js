            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                a = n.n(l),
                o = n("77078"),
                s = n("145079"),
                u = n("86621"),
                c = n("506885"),
                d = n("981601"),
                f = n("145131"),
                E = n("49111"),
                _ = n("123106");
            class p extends r.Component {
                render() {
                    let {
                        popoutOpen: e
                    } = this.state, {
                        user: t,
                        analyticsContext: n,
                        disablePopout: r,
                        guildId: l
                    } = this.props, a = {
                        location: {
                            ...n.location,
                            object: E.AnalyticsObjects.LIST_ITEM
                        }
                    };
                    return (0, i.jsx)(o.Popout, {
                        preload: () => (0, c.default)(t.id, t.getAvatarURL(l, 80), {
                            guildId: l
                        }),
                        renderPopout: e => (0, i.jsx)(d.default, {
                            ...e,
                            guildId: l,
                            userId: t.id,
                            analyticsParams: a
                        }),
                        position: "left",
                        onRequestClose: this.handleUserPopoutClose,
                        shouldShow: !r && e,
                        children: e => this.renderUserPopout(e)
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutOpen: !1
                    }, this.handleClickUser = () => {
                        let {
                            onPopoutOpen: e
                        } = this.props;
                        this.setState({
                            popoutOpen: !this.state.popoutOpen
                        }), null == e || e()
                    }, this.handleUserPopoutClose = () => {
                        let {
                            onPopoutClose: e
                        } = this.props;
                        this.setState({
                            popoutOpen: !1
                        }), null == e || e()
                    }, this.renderUserPopout = e => {
                        let {
                            className: t,
                            disablePopout: n,
                            onContextMenu: r,
                            user: l,
                            status: u,
                            textClassName: c,
                            nick: d,
                            guildId: E
                        } = this.props;
                        return (0, i.jsxs)(f.default, {
                            align: f.default.Align.CENTER,
                            className: a(_.memberListItem, t, {
                                [_.popoutDisabled]: n
                            }),
                            onContextMenu: r,
                            onMouseDown: e.onMouseDown,
                            onKeyDown: e.onKeyDown,
                            onClick: this.handleClickUser,
                            children: [(0, i.jsx)(o.Avatar, {
                                src: l.getAvatarURL(E, 24),
                                className: _.avatar,
                                "aria-label": l.username,
                                size: o.AvatarSizes.SIZE_24,
                                status: u
                            }), (0, i.jsx)(o.Text, {
                                className: a(_.memberListItemTag, c),
                                variant: "text-sm/normal",
                                children: (0, i.jsx)(s.default, {
                                    user: l,
                                    nick: d,
                                    usernameClass: _.username,
                                    hideDiscriminator: !0
                                })
                            })]
                        })
                    }
                }
            }
            p.defaultProps = {
                disablePopout: !1
            };
            var h = (0, u.default)(p)
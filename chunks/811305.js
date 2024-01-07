            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return S
                },
                default: function() {
                    return h
                }
            }), n("424973"), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                u = n.n(l),
                o = n("627445"),
                a = n.n(o),
                s = n("77078"),
                c = n("506885"),
                d = n("981601"),
                f = n("766274"),
                E = n("697218"),
                _ = n("368121"),
                I = n("523096"),
                T = n("587974"),
                p = n("494101");
            let S = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function N(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class C extends i.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: i,
                        extraDetail: l
                    } = this.props, u = [], o = e.length === t ? e.length : t - 1, a = this.renderMoreUsers(o), s = 0;
                    for (; s < o && s < e.length;) {
                        var c;
                        let t = null == a && null == l && s === e.length - 1,
                            o = n(e[s], t, s);
                        u.push(t ? (0, r.jsx)("div", {
                            className: p.avatarContainer,
                            children: o
                        }, N(null !== (c = e[s]) && void 0 !== c ? c : null, s)) : (0, r.jsx)(T.default, {
                            className: p.avatarContainerMasked,
                            height: i,
                            width: i,
                            mask: T.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: o
                        }, N(e[s], s))), s++
                    }
                    return null != l ? u.push(l) : null != a && u.push(a), u
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: l,
                        renderMoreUsers: u,
                        users: o
                    } = this.props, a = Math.min(e, o.length);
                    if (!l) {
                        if (null != n) {
                            if (n >= t) return (0, r.jsx)(i.Fragment, {
                                children: u("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > o.length) {
                                let e = n - o.length;
                                return (0, r.jsx)(i.Fragment, {
                                    children: u("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (a < o.length) {
                            let e = Math.min(o.length - a, 99);
                            return (0, r.jsx)(i.Fragment, {
                                children: u("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, r.jsx)(_.default, {
                        foreground: p.foreground,
                        className: p.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: i,
                        showUserPopout: l,
                        useFallbackUserForPopout: o
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, _ = n.find(e => null != e && e.id === f), I = o && null == E.default.getUser(f);
                    return (0, r.jsx)(s.Popout, {
                        position: "right",
                        preload: null == _ ? void 0 : () => (0, c.default)(_.id, _.getAvatarURL(i, 80), {
                            guildId: i
                        }),
                        shouldShow: !0 === l && null != f,
                        fixed: !0,
                        renderPopout: e => (a(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, r.jsx)(d.default, {
                            ...this.props,
                            user: I && null != _ ? _ : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, r.jsxs)("div", {
                            className: u(e, p.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.SIZE_24;
                                switch (e) {
                                    case S.SIZE_16:
                                        return p.size16;
                                    case S.SIZE_24:
                                        return p.size24;
                                    case S.SIZE_32:
                                        return p.size32;
                                    case S.SIZE_56:
                                        return p.size56;
                                    default:
                                        return p.size24
                                }
                            }(t)),
                            ref: this._ref,
                            ...n,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutUserId: null
                    }, this._ref = i.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: i,
                            guildId: l,
                            size: u
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, r.jsx)("div", {
                                className: p.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % I.default.DEFAULT_AVATARS.length,
                                    t = I.default.DEFAULT_AVATARS[e];
                                return (0, r.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: p.avatar
                                })
                            }
                        }
                        let o = (0, r.jsx)("img", {
                            src: e.getAvatarURL(l, u),
                            alt: e.username,
                            className: p.avatar
                        }, e.id);
                        return i ? (0, r.jsx)(s.Clickable, {
                            className: p.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: o
                        }, e.id) : o
                    }
                }
            }
            C.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, r.jsx)("div", {
                        className: p.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: S.SIZE_24
            };
            var h = C
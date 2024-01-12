            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return S
                },
                default: function() {
                    return v
                }
            }), n("424973"), n("222007");
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                o = n.n(l),
                s = n("627445"),
                u = n.n(s),
                a = n("77078"),
                c = n("506885"),
                d = n("981601"),
                f = n("766274"),
                E = n("697218"),
                p = n("368121"),
                _ = n("523096"),
                h = n("587974"),
                I = n("494101");
            let S = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function C(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class T extends r.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: r,
                        extraDetail: l
                    } = this.props, o = [], s = e.length === t ? e.length : t - 1, u = this.renderMoreUsers(s), a = 0;
                    for (; a < s && a < e.length;) {
                        var c;
                        let t = null == u && null == l && a === e.length - 1,
                            s = n(e[a], t, a);
                        o.push(t ? (0, i.jsx)("div", {
                            className: I.avatarContainer,
                            children: s
                        }, C(null !== (c = e[a]) && void 0 !== c ? c : null, a)) : (0, i.jsx)(h.default, {
                            className: I.avatarContainerMasked,
                            height: r,
                            width: r,
                            mask: h.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: s
                        }, C(e[a], a))), a++
                    }
                    return null != l ? o.push(l) : null != u && o.push(u), o
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: l,
                        renderMoreUsers: o,
                        users: s
                    } = this.props, u = Math.min(e, s.length);
                    if (!l) {
                        if (null != n) {
                            if (n >= t) return (0, i.jsx)(r.Fragment, {
                                children: o("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > s.length) {
                                let e = n - s.length;
                                return (0, i.jsx)(r.Fragment, {
                                    children: o("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (u < s.length) {
                            let e = Math.min(s.length - u, 99);
                            return (0, i.jsx)(r.Fragment, {
                                children: o("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, i.jsx)(p.default, {
                        foreground: I.foreground,
                        className: I.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: r,
                        showUserPopout: l,
                        useFallbackUserForPopout: s
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, p = n.find(e => null != e && e.id === f), _ = s && null == E.default.getUser(f);
                    return (0, i.jsx)(a.Popout, {
                        position: "right",
                        preload: null == p ? void 0 : () => (0, c.default)(p.id, p.getAvatarURL(r, 80), {
                            guildId: r
                        }),
                        shouldShow: !0 === l && null != f,
                        fixed: !0,
                        renderPopout: e => (u(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, i.jsx)(d.default, {
                            ...this.props,
                            user: _ && null != p ? p : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, i.jsxs)("div", {
                            className: o(e, I.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.SIZE_24;
                                switch (e) {
                                    case S.SIZE_16:
                                        return I.size16;
                                    case S.SIZE_24:
                                        return I.size24;
                                    case S.SIZE_32:
                                        return I.size32;
                                    case S.SIZE_56:
                                        return I.size56;
                                    default:
                                        return I.size24
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
                    }, this._ref = r.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: r,
                            guildId: l,
                            size: o
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, i.jsx)("div", {
                                className: I.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % _.default.DEFAULT_AVATARS.length,
                                    t = _.default.DEFAULT_AVATARS[e];
                                return (0, i.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: I.avatar
                                })
                            }
                        }
                        let s = (0, i.jsx)("img", {
                            src: e.getAvatarURL(l, o),
                            alt: e.username,
                            className: I.avatar
                        }, e.id);
                        return r ? (0, i.jsx)(a.Clickable, {
                            className: I.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: s
                        }, e.id) : s
                    }
                }
            }
            T.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, i.jsx)("div", {
                        className: I.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: S.SIZE_24
            };
            var v = T
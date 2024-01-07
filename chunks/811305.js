            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return h
                },
                default: function() {
                    return C
                }
            }), n("424973"), n("222007");
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("627445"),
                u = n.n(s),
                a = n("77078"),
                c = n("506885"),
                d = n("981601"),
                f = n("766274"),
                E = n("697218"),
                _ = n("368121"),
                p = n("523096"),
                I = n("587974"),
                S = n("494101");
            let h = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function T(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class N extends l.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: l,
                        extraDetail: r
                    } = this.props, o = [], s = e.length === t ? e.length : t - 1, u = this.renderMoreUsers(s), a = 0;
                    for (; a < s && a < e.length;) {
                        var c;
                        let t = null == u && null == r && a === e.length - 1,
                            s = n(e[a], t, a);
                        o.push(t ? (0, i.jsx)("div", {
                            className: S.avatarContainer,
                            children: s
                        }, T(null !== (c = e[a]) && void 0 !== c ? c : null, a)) : (0, i.jsx)(I.default, {
                            className: S.avatarContainerMasked,
                            height: l,
                            width: l,
                            mask: I.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: s
                        }, T(e[a], a))), a++
                    }
                    return null != r ? o.push(r) : null != u && o.push(u), o
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: r,
                        renderMoreUsers: o,
                        users: s
                    } = this.props, u = Math.min(e, s.length);
                    if (!r) {
                        if (null != n) {
                            if (n >= t) return (0, i.jsx)(l.Fragment, {
                                children: o("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > s.length) {
                                let e = n - s.length;
                                return (0, i.jsx)(l.Fragment, {
                                    children: o("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (u < s.length) {
                            let e = Math.min(s.length - u, 99);
                            return (0, i.jsx)(l.Fragment, {
                                children: o("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, i.jsx)(_.default, {
                        foreground: S.foreground,
                        className: S.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: l,
                        showUserPopout: r,
                        useFallbackUserForPopout: s
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, _ = n.find(e => null != e && e.id === f), p = s && null == E.default.getUser(f);
                    return (0, i.jsx)(a.Popout, {
                        position: "right",
                        preload: null == _ ? void 0 : () => (0, c.default)(_.id, _.getAvatarURL(l, 80), {
                            guildId: l
                        }),
                        shouldShow: !0 === r && null != f,
                        fixed: !0,
                        renderPopout: e => (u(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, i.jsx)(d.default, {
                            ...this.props,
                            user: p && null != _ ? _ : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, i.jsxs)("div", {
                            className: o(e, S.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.SIZE_24;
                                switch (e) {
                                    case h.SIZE_16:
                                        return S.size16;
                                    case h.SIZE_24:
                                        return S.size24;
                                    case h.SIZE_32:
                                        return S.size32;
                                    case h.SIZE_56:
                                        return S.size56;
                                    default:
                                        return S.size24
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
                    }, this._ref = l.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: l,
                            guildId: r,
                            size: o
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, i.jsx)("div", {
                                className: S.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % p.default.DEFAULT_AVATARS.length,
                                    t = p.default.DEFAULT_AVATARS[e];
                                return (0, i.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: S.avatar
                                })
                            }
                        }
                        let s = (0, i.jsx)("img", {
                            src: e.getAvatarURL(r, o),
                            alt: e.username,
                            className: S.avatar
                        }, e.id);
                        return l ? (0, i.jsx)(a.Clickable, {
                            className: S.clickableAvatar,
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
            N.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, i.jsx)("div", {
                        className: S.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: h.SIZE_24
            };
            var C = N
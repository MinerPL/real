            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return m
                },
                default: function() {
                    return C
                }
            }), n("424973"), n("222007");
            var r = n("37983"),
                u = n("884691"),
                s = n("414456"),
                l = n.n(s),
                i = n("627445"),
                o = n.n(i),
                a = n("77078"),
                c = n("506885"),
                d = n("981601"),
                f = n("766274"),
                h = n("697218"),
                p = n("368121"),
                v = n("523096"),
                S = n("587974"),
                E = n("494101");
            let m = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function x(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class I extends u.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: u,
                        extraDetail: s
                    } = this.props, l = [], i = e.length === t ? e.length : t - 1, o = this.renderMoreUsers(i), a = 0;
                    for (; a < i && a < e.length;) {
                        var c;
                        let t = null == o && null == s && a === e.length - 1,
                            i = n(e[a], t, a);
                        l.push(t ? (0, r.jsx)("div", {
                            className: E.avatarContainer,
                            children: i
                        }, x(null !== (c = e[a]) && void 0 !== c ? c : null, a)) : (0, r.jsx)(S.default, {
                            className: E.avatarContainerMasked,
                            height: u,
                            width: u,
                            mask: S.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: i
                        }, x(e[a], a))), a++
                    }
                    return null != s ? l.push(s) : null != o && l.push(o), l
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: s,
                        renderMoreUsers: l,
                        users: i
                    } = this.props, o = Math.min(e, i.length);
                    if (!s) {
                        if (null != n) {
                            if (n >= t) return (0, r.jsx)(u.Fragment, {
                                children: l("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > i.length) {
                                let e = n - i.length;
                                return (0, r.jsx)(u.Fragment, {
                                    children: l("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (o < i.length) {
                            let e = Math.min(i.length - o, 99);
                            return (0, r.jsx)(u.Fragment, {
                                children: l("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, r.jsx)(p.default, {
                        foreground: E.foreground,
                        className: E.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: u,
                        showUserPopout: s,
                        useFallbackUserForPopout: i
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, p = n.find(e => null != e && e.id === f), v = i && null == h.default.getUser(f);
                    return (0, r.jsx)(a.Popout, {
                        position: "right",
                        preload: null == p ? void 0 : () => (0, c.default)(p.id, p.getAvatarURL(u, 80), {
                            guildId: u
                        }),
                        shouldShow: !0 === s && null != f,
                        fixed: !0,
                        renderPopout: e => (o(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, r.jsx)(d.default, {
                            ...this.props,
                            user: v && null != p ? p : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, r.jsxs)("div", {
                            className: l(e, E.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.SIZE_24;
                                switch (e) {
                                    case m.SIZE_16:
                                        return E.size16;
                                    case m.SIZE_24:
                                        return E.size24;
                                    case m.SIZE_32:
                                        return E.size32;
                                    case m.SIZE_56:
                                        return E.size56;
                                    default:
                                        return E.size24
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
                    }, this._ref = u.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: u,
                            guildId: s,
                            size: l
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, r.jsx)("div", {
                                className: E.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % v.default.DEFAULT_AVATARS.length,
                                    t = v.default.DEFAULT_AVATARS[e];
                                return (0, r.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: E.avatar
                                })
                            }
                        }
                        let i = (0, r.jsx)("img", {
                            src: e.getAvatarURL(s, l),
                            alt: e.username,
                            className: E.avatar
                        }, e.id);
                        return u ? (0, r.jsx)(a.Clickable, {
                            className: E.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: i
                        }, e.id) : i
                    }
                }
            }
            I.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, r.jsx)("div", {
                        className: E.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: m.SIZE_24
            };
            var C = I
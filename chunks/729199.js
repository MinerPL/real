            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return M
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                r = s("414456"),
                l = s.n(r),
                i = s("730290"),
                u = s("446674"),
                o = s("77078"),
                d = s("851387"),
                c = s("55620"),
                _ = s("984376"),
                E = s("267567"),
                I = s("393414"),
                T = s("239380"),
                f = s("813006"),
                S = s("305961"),
                R = s("895530"),
                p = s("145131"),
                m = s("476263"),
                N = s("36694"),
                A = s("75576"),
                g = s("49111"),
                P = s("782340"),
                C = s("214197");
            class O extends n.PureComponent {
                renderMemberInfo() {
                    let {
                        approximateMemberCount: e,
                        approximatePresenceCount: t
                    } = this.props.guild;
                    return null == e || null == t ? null : (0, a.jsxs)(p.default, {
                        className: C.memberInfo,
                        align: p.default.Align.CENTER,
                        children: [(0, a.jsx)("div", {
                            className: C.dotOnline
                        }), (0, a.jsx)("span", {
                            className: C.memberText,
                            children: P.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: t
                            })
                        }), (0, a.jsx)("div", {
                            className: C.dotOffline
                        }), (0, a.jsx)("span", {
                            className: C.memberText,
                            children: P.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                count: e
                            })
                        })]
                    })
                }
                render() {
                    let {
                        guild: e,
                        inChannel: t,
                        isInGuild: s,
                        isLurking: n,
                        isAuthenticated: r,
                        className: i,
                        pageSize: u
                    } = this.props;
                    if (t && s) return null;
                    let d = new f.default(e),
                        c = P.default.Messages.LURKER_MODE_VIEW_GUILD,
                        _ = this.handleJoinOrView,
                        E = o.Button.Looks.FILLED,
                        I = o.Button.Colors.PRIMARY;
                    return r ? s ? (E = o.Button.Looks.OUTLINED, I = C.buttonColorInGuild, c = (0, a.jsxs)(p.default, {
                        align: p.default.Align.CENTER,
                        children: [(0, a.jsx)("div", {
                            children: P.default.Messages.JOINED_GUILD
                        }), (0, a.jsx)(N.default, {
                            className: C.joinedCheckmark
                        })]
                    })) : n && t && (c = P.default.Messages.JOIN_GUILD) : (c = P.default.Messages._LOGIN, _ = this.handleLogin), (0, a.jsxs)("div", {
                        className: l(i, u === A.PageSizes.SMALL ? C.inviteSmall : C.inviteLarge),
                        children: [(0, a.jsx)(R.default, {
                            children: P.default.Messages.APPLICATION_STORE_SECTION_TITLE_VERIFIED_GUILD
                        }), (0, a.jsxs)("div", {
                            className: C.content,
                            children: [(0, a.jsxs)("div", {
                                className: C.info,
                                children: [(0, a.jsx)(m.default, {
                                    guild: d,
                                    active: !0,
                                    size: m.default.Sizes.LARGE,
                                    className: C.guildIcon
                                }), (0, a.jsxs)("div", {
                                    className: C.infoText,
                                    children: [(0, a.jsx)("div", {
                                        className: C.name,
                                        children: e.name
                                    }), this.renderMemberInfo()]
                                })]
                            }), (0, a.jsx)(o.Button, {
                                size: o.Button.Sizes.SMALL,
                                className: C.actionButton,
                                fullWidth: !0,
                                color: I,
                                look: E,
                                onClick: _,
                                children: c
                            })]
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleJoinOrView = async () => {
                        let {
                            guild: e,
                            skuId: t,
                            isInGuild: s,
                            isLurking: a
                        } = this.props, n = () => (0, T.transitionToGuild)(e.id);
                        if (a)(0, c.joinPublishedStoreListingSkuGuild)(t).then(n);
                        else if (s) n();
                        else try {
                            await d.default.joinGuild(e.id, {
                                lurker: !0,
                                source: g.JoinGuildSources.APPLICATION_STORE
                            }), n()
                        } catch {}
                    }, this.handleLogin = () => {
                        let e = {
                            redirect_to: g.Routes.APPLICATION_STORE_LISTING_SKU(this.props.skuId)
                        };
                        (0, I.transitionTo)(g.Routes.LOGIN, {
                            search: (0, i.stringify)(e)
                        })
                    }
                }
            }
            var M = (0, _.default)(u.default.connectStores([S.default, E.default], e => {
                let {
                    guild: t
                } = e, s = E.default.isLurking(t.id);
                return {
                    isInGuild: null != S.default.getGuild(t.id) && !s,
                    isLurking: s
                }
            })(O))
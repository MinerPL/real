            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                l = n("907002"),
                s = n("446674"),
                o = n("77078"),
                r = n("575136"),
                d = n("534222"),
                u = n("120817"),
                c = n("637667"),
                f = n("699209"),
                h = n("934743"),
                p = n("393027"),
                g = n("870691"),
                m = n("816092"),
                E = n("162805"),
                S = n("245997"),
                v = n("923959"),
                y = n("952451"),
                C = n("305961"),
                N = n("957255"),
                O = n("18494"),
                T = n("282109"),
                I = n("316133"),
                _ = n("474571"),
                A = n("560995"),
                x = n("637842"),
                R = n("758547"),
                M = n("49111"),
                L = n("695838"),
                D = n("782340"),
                j = n("718394");
            let w = 54;
            class k extends a.PureComponent {
                static getDerivedStateFromProps(e) {
                    let {
                        guild: t
                    } = e;
                    return null == t || null == t.banner ? {
                        renderBanner: !1,
                        bannerVisible: !1
                    } : null
                }
                componentDidMount() {
                    let {
                        guildId: e
                    } = this.props, {
                        scrollTop: t
                    } = E.default.getGuildDimensions(e);
                    this.setAnimatedValue(null != t ? t : 0)
                }
                componentDidUpdate(e) {
                    let {
                        guild: t,
                        guildId: n
                    } = this.props;
                    if (e.guild !== t) {
                        let {
                            scrollTop: e
                        } = E.default.getGuildDimensions(n);
                        this.setAnimatedValue(null != e ? e : 0)
                    }
                }
                renderSettings(e) {
                    let {
                        closePopout: t
                    } = e;
                    return (0, i.jsx)(x.default, {
                        onClose: t
                    })
                }
                setAnimatedValue(e) {
                    let {
                        guild: t
                    } = this.props, n = null == t ? void 0 : t.hasCommunityInfoSubheader();
                    null != t && (null != t.banner || n) && (null != t.banner ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForCommunityInfo(e))
                }
                setAnimatedValueForBanner(e) {
                    let {
                        renderBanner: t,
                        communityInfoVisible: n,
                        bannerVisible: i,
                        controller: a
                    } = this.state;
                    (e >= w && i || e < w && !i) && (i = !i), (e >= 78 && !t || e < 78 && t) && (t = !t), n = i, (t !== this.state.renderBanner || i !== this.state.bannerVisible || n !== this.state.communityInfoVisible) && this.setState({
                        renderBanner: t,
                        bannerVisible: i,
                        communityInfoVisible: n
                    }), a.update({
                        value: Math.min(1, Math.max(0, 1 - e / 78)),
                        immediate: !0
                    }).start()
                }
                setAnimatedValueForCommunityInfo(e) {
                    let {
                        communityInfoVisible: t,
                        controller: n
                    } = this.state;
                    (e >= 20 && t || e < 20 && !t) && this.setState({
                        communityInfoVisible: !t
                    }), n.update({
                        value: Math.min(1, Math.max(0, 1 - e / 20)),
                        immediate: !0
                    }).start()
                }
                render() {
                    let {
                        onDragStart: e,
                        ...t
                    } = this.props, {
                        guild: n
                    } = t, {
                        controller: a,
                        renderBanner: l,
                        bannerVisible: s,
                        communityInfoVisible: r
                    } = this.state, d = n.id === L.FAVORITES_RAW_GUILD_ID ? u.FavoritesChannelList : u.GuildChannelList;
                    return (0, i.jsxs)(R.default, {
                        header: (0, i.jsx)(c.default, {
                            guild: n,
                            controller: a,
                            renderBanner: l,
                            bannerVisible: s,
                            className: j.guildHeader,
                            headerClassName: j.guildHeaderInner,
                            onMouseDown: e,
                            disableBannerAnimation: !1,
                            communityInfoVisible: r,
                            children: (0, i.jsx)(o.Popout, {
                                position: "right",
                                renderPopout: this.renderSettings,
                                children: e => (0, i.jsx)(A.default.Icon, {
                                    icon: _.default,
                                    label: D.default.Messages.SETTINGS,
                                    ...e
                                })
                            })
                        }),
                        children: [(0, i.jsx)("div", {
                            className: j.channelList,
                            children: (0, i.jsx)(d, {
                                ...t,
                                guild: n,
                                disableManageChannels: !0,
                                onScroll: null != n && null != n.banner ? this.handleScroll : null
                            })
                        }), (0, i.jsx)("section", {
                            className: j.panels,
                            "aria-label": D.default.Messages.ACCOUNT_A11Y_LABEL,
                            children: (0, i.jsx)(h.default, {
                                guildId: n.id
                            })
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        controller: new l.Controller({
                            value: 1,
                            immediate: !0
                        }),
                        renderBanner: !1,
                        bannerVisible: !1,
                        communityInfoVisible: !1
                    }, this.handleScroll = e => {
                        let {
                            scrollTop: t
                        } = e;
                        this.setAnimatedValue(t)
                    }
                }
            }

            function b(e) {
                var t;
                let {
                    guildId: n
                } = e, a = (0, s.useStateFromStores)([C.default], () => C.default.getGuild(n)), l = (0, s.useStateFromStores)([v.default], () => v.default.getChannels(n)), o = (0, s.useStateFromStores)([S.default], () => S.default.getCategories(n)), {
                    mutedChannels: u,
                    collapseMuted: c
                } = (0, s.useStateFromStoresObject)([T.default], () => ({
                    mutedChannels: T.default.getMutedChannels(n),
                    collapseMuted: T.default.isGuildCollapsed(n)
                })), h = (0, s.useStateFromStores)([I.default], () => I.default.getVoiceStates(n)), _ = (0, s.useStateFromStores)([m.default], () => m.default.getCollapsed()), {
                    scrollTo: A
                } = (0, s.useStateFromStores)([E.default], () => E.default.getGuildDimensions(n)), x = (0, p.default)(e => {
                    let {
                        channelId: t
                    } = e;
                    return t
                }), R = (0, s.useStateFromStores)([O.default], () => O.default.getVoiceChannelId()), L = (0, s.useStateFromStores)([N.default], () => N.default.getGuildVersion(n)), D = (0, s.useStateFromStores)([g.default], () => g.default.version), j = (0, s.useStateFromStores)([y.default], () => y.default.getGuildChangeSentinel(n)), {
                    enableHangStatus: w
                } = f.HangStatusExperiment.useExperiment({
                    guildId: n,
                    location: "GuildSidebar"
                }), b = (0, r.useEmbeddedAppsByChannel)(null == a ? void 0 : a.id), P = (0, d.useActiveEventsByChannel)(null == a ? void 0 : a.id), V = null !== (t = null == a ? void 0 : a.hasFeature(M.GuildFeatures.COMMUNITY)) && void 0 !== t && t;
                return (0, i.jsx)(k, {
                    guildId: n,
                    guild: a,
                    channels: l,
                    categories: o,
                    mutedChannels: u,
                    scrollToChannel: A,
                    selectedChannelId: x,
                    selectedVoiceChannelId: R,
                    voiceStates: h,
                    collapsedChannels: _,
                    collapseMuted: c,
                    guildReadStateSentinel: j,
                    permissionVersion: L,
                    categoryCollapseVersion: D,
                    embeddedAppsByChannel: b,
                    activeEventsByChannel: P,
                    showNewUnreadsBar: V,
                    optInEnabled: !1,
                    enableHangStatus: w
                })
            }
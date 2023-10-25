(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["79142"], {
        178225: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                isGuildEligibleForStageChannels: function() {
                    return l
                },
                useGuildEligibleForStageChannels: function() {
                    return i
                }
            });
            var n = s("498225"),
                a = s("305961"),
                r = s("49111");

            function l(e) {
                var t;
                let [s] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.default];
                return !!(null === (t = s.getGuild(e)) || void 0 === t ? void 0 : t.hasFeature(r.GuildFeatures.COMMUNITY))
            }

            function i(e) {
                return (0, n.useStateFromStores)([a.default], () => l(e, [a.default]), [e])
            }
        },
        158352: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            });
            var n = s("920040"),
                a = s("773670"),
                r = s("575482"),
                l = s.n(r),
                i = s("77078"),
                S = s("837899"),
                o = s("425190"),
                E = s("49111"),
                u = s("986315");
            let d = e => (0, n.jsx)("div", {
                    className: e.className,
                    children: e.children
                }),
                I = e => (0, n.jsx)("div", {
                    className: e.className,
                    children: e.children
                }),
                c = e => (0, n.jsx)("div", {
                    className: e.className,
                    children: e.children
                });
            class C extends a.PureComponent {
                isSortable(e) {
                    return null != e.sort && !1 !== e.sort
                }
                getDefaultSort(e) {
                    return (t, s) => {
                        let n = t[e],
                            a = s[e];
                        return null != n && null != a ? n === a ? 0 : n < a ? -1 : 1 : 0
                    }
                }
                renderHeader() {
                    let {
                        columns: e,
                        data: t,
                        sortDirection: s,
                        sortKey: a,
                        headerCellClassName: r,
                        headerClassName: I,
                        sortedHeaderCellClassName: c,
                        stickyHeader: C
                    } = this.props, _ = e.map(e => {
                        let d = null != e.renderHeader ? e.renderHeader(e, t) : e.key,
                            I = s === E.TableSortDirections.ASCENDING ? o.default : S.default;
                        return (0, n.jsx)(i.Clickable, {
                            className: l(u.headerCell, r, e.headerCellClassName, e.cellClassName, a === e.key && c, {
                                [u.clickable]: this.isSortable(e)
                            }),
                            onClick: this.isSortable(e) ? () => this.handleSort(e.key) : void 0,
                            children: (0, n.jsxs)("div", {
                                className: u.headerCellContent,
                                children: [d, this.isSortable(e) && a === e.key ? (0, n.jsx)(I, {
                                    className: u.sortIcon
                                }) : null]
                            })
                        }, e.key)
                    });
                    return (0, n.jsx)(d, {
                        className: l(I, u.row, {
                            [u.stickyHeader]: C
                        }),
                        children: _
                    })
                }
                renderBody() {
                    let {
                        columns: e,
                        data: t,
                        sortData: s,
                        sortKey: n,
                        sortDirection: r,
                        bodyCellClassName: i,
                        rowClassName: S,
                        cellProps: o,
                        rowProps: d,
                        rowComponent: I,
                        cellComponent: c
                    } = this.props, C = t;
                    if (s) {
                        let s = null != n ? e.find(e => {
                                let {
                                    key: t
                                } = e;
                                return t === n
                            }) : null,
                            a = [...t],
                            l = null != s && s.sort,
                            i = null != s && null != n && this.isSortable(s) ? a.sort("function" == typeof l ? (e, t) => l(e, t, r) : this.getDefaultSort(n)) : a;
                        C = null != s && r === E.TableSortDirections.DESCENDING ? i.reverse() : i
                    }
                    return C.map((t, s) => {
                        let n = e.map(e => (0, a.createElement)(c, {
                            ...o,
                            key: e.key,
                            item: t,
                            className: l(i, e.bodyCellClassName, e.cellClassName)
                        }, null != e.render ? e.render(t, o, s) : t[e.key]));
                        return (0, a.createElement)(I, {
                            ...d,
                            key: t.key,
                            item: t,
                            className: l(u.row, S)
                        }, n)
                    })
                }
                render() {
                    let {
                        className: e,
                        hasHeader: t
                    } = this.props;
                    return (0, n.jsxs)("div", {
                        className: e,
                        children: [t ? this.renderHeader() : null, this.renderBody()]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleSort = e => {
                        let {
                            sortKey: t,
                            sortDirection: s,
                            onSort: n
                        } = this.props;
                        null != n && n(e, t === e ? s === E.TableSortDirections.ASCENDING ? E.TableSortDirections.DESCENDING : E.TableSortDirections.ASCENDING : E.TableSortDirections.ASCENDING)
                    }
                }
            }
            C.SortDirection = E.TableSortDirections, C.defaultProps = {
                initialSortDirection: E.TableSortDirections.ASCENDING,
                rowHeaderComponent: d,
                rowComponent: I,
                cellComponent: c,
                hasHeader: !0,
                sortData: !0,
                stickyHeader: !1
            };
            var _ = C
        },
        756609: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var n = s("920040");
            s("773670");
            var a = s("469563"),
                r = s("308472"),
                l = s("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 18,
                        height: s = 18,
                        color: a = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, l.default)(i),
                        width: t,
                        height: s,
                        viewBox: "0 0 18 18",
                        children: [(0, n.jsx)("path", {
                            fill: a,
                            className: r,
                            d: "M4.5,16.5v-3H3A1.5,1.5,0,0,1,1.5,12V3A1.5,1.5,0,0,1,3,1.5H15A1.5,1.5,0,0,1,16.5,3v9A1.5,1.5,0,0,1,15,13.5H8.5ZM3,3v9H6v1.5L8,12h7V3Z"
                        }), (0, n.jsx)("path", {
                            fill: a,
                            className: r,
                            d: "M6.75,4.5H5.25v6h1.5Z"
                        }), (0, n.jsx)("path", {
                            fill: a,
                            className: r,
                            d: "M9.75,7.5H8.25v3h1.5Z"
                        }), (0, n.jsx)("path", {
                            fill: a,
                            className: r,
                            d: "M12.75,6h-1.5v4.5h1.5Z"
                        })]
                    })
                }, r.AnalyticsIcon)
        },
        315585: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var n = s("920040");
            s("773670");
            var a = s("75196");

            function r(e) {
                let {
                    width: t = 14,
                    height: s = 14,
                    color: r = "currentColor",
                    foreground: l,
                    ...i
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(i),
                    width: t,
                    height: s,
                    viewBox: "0 0 14 14",
                    children: (0, n.jsx)("path", {
                        className: l,
                        fill: r,
                        d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z"
                    })
                })
            }
        },
        465305: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return T
                }
            });
            var n = s("478100"),
                a = s("79112"),
                r = s("746164"),
                l = s("980215"),
                i = s("250666"),
                S = s("154695"),
                o = s("867965"),
                E = s("348934"),
                u = s("520141"),
                d = s("592407"),
                I = s("819450"),
                c = s("178225"),
                C = s("300322"),
                _ = s("233069"),
                N = s("305961"),
                O = s("701909"),
                h = s("49111"),
                M = s("606762"),
                g = s("782340");

            function R(e) {
                let t = (0, c.isGuildEligibleForStageChannels)(e),
                    s = (0, S.getEnableForumPermissions)(e),
                    n = (0, u.isMemberVerificationManualApproval)(e),
                    o = N.default.getGuild(e),
                    E = null != o && (0, i.isCreatorMonetizationEnabledGuild)(o),
                    d = (0, l.getClydeExperimentEnabled)(o),
                    I = r.default.getCurrentConfig({
                        guildId: e,
                        location: "permission_spec_utils"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return {
                    PRIORITY_SPEAKER_DESCRIPTION: g.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_APP.format({
                        keybind: g.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
                        onClick: () => {
                            a.default.open(h.UserSettingsSections.KEYBINDS)
                        }
                    }),
                    SOUNDBOARD_DESCRIPTION: g.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_LEARN_MORE.format({
                        helpCenterArticle: O.default.getArticleURL(h.HelpdeskArticles.SOUNDBOARD)
                    }),
                    showStageChannelPermissions: t,
                    showExperimental: !0,
                    showForumPermissions: s,
                    showMembershipManualApprovalPermissions: n,
                    showCreatorMonetizationAnalyticsPermission: E,
                    showClydeAIPermissions: d,
                    showVoiceChannelStatusPermission: I
                }
            }

            function f(e, t) {
                return e ? [t()] : []
            }
            var T = {
                generateChannelPermissionSpec: function(e, t, s, a) {
                    var r, i, u, c, O, f;
                    let T = (0, S.getEnableForumPermissions)(e),
                        m = (0, M.getChannelPermissionSpecMap)(t, s, T, a),
                        p = R(e),
                        P = C.VoiceInThreadsExperiment.getCurrentConfig({
                            guildId: e,
                            location: "3ad37d_1"
                        }).enabled && _.VOICE_THREAD_PARENT_CHANNEL_TYPES.has(t.type),
                        L = (0, I.isStageVideoEnabled)(e),
                        A = (0, E.canCurrentUserManageMessageFilters)(e),
                        D = t.isMediaChannel(),
                        G = N.default.getGuild(e),
                        v = (0, l.getClydeExperimentEnabled)(G);
                    switch (t.type) {
                        case h.ChannelTypes.GUILD_CATEGORY:
                            ;
                            return [n.generateChannelGeneralSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CATEGORY), n.generateChannelMembershipSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), n.generateChannelTextSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
                                showPrivateThreads: !0,
                                showCreateThreads: !0,
                                showClydeAIPermissions: v
                            }), n.generateChannelVoiceSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, {
                                showVoiceChannelStatusPermission: p.showVoiceChannelStatusPermission
                            }), ...(r = p.showStageChannelPermissions, i = () => n.generateChannelStageSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), r ? [i()] : []), n.generateChannelEventsSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
                        case h.ChannelTypes.GUILD_VOICE:
                            return [n.generateChannelGeneralSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
                                showManageWebhooks: !0
                            }), n.generateChannelMembershipSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), n.generateChannelVoiceSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, {
                                showVoiceChannelStatusPermission: p.showVoiceChannelStatusPermission
                            }), n.generateChannelVoiceChatSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
                                sectionDescription: A ? g.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
                                    setUpAutomod: () => {
                                        d.default.open(e, h.GuildSettingsSections.GUILD_AUTOMOD)
                                    }
                                }) : void 0
                            }), n.generateChannelEventsSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
                        case h.ChannelTypes.GUILD_STAGE_VOICE:
                            return [n.generateChannelGeneralSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
                                showManageWebhooks: !1
                            }), n.generateChannelMembershipSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), n.generateChannelStageVoiceSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, L), n.generateChannelStageSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), n.generateChannelEventsSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS), n.generateChannelVoiceChatSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
                                sectionDescription: A ? g.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
                                    setUpAutomod: () => {
                                        d.default.open(e, h.GuildSettingsSections.GUILD_AUTOMOD)
                                    }
                                }) : void 0
                            })];
                        case h.ChannelTypes.GUILD_FORUM:
                        case h.ChannelTypes.GUILD_MEDIA:
                            ;
                            let b = D ? g.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL : g.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS,
                                V = D ? g.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL_DESCRIPTION : g.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS_DESCRIPTION;
                            return [n.generateChannelGeneralSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), n.generateChannelMembershipSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), n.generateChannelTextSection(m, b, {
                                showPrivateThreads: !1,
                                showCreateThreads: !1,
                                sectionDescription: A ? V.format({
                                    setUpAutomod: () => {
                                        !D && (0, o.trackForumEnableAutomodClicked)(), d.default.open(e, h.GuildSettingsSections.GUILD_AUTOMOD)
                                    }
                                }) : void 0,
                                showClydeAIPermissions: v
                            }), ...(u = P, c = () => n.generateChannelVoiceSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, {
                                showVoiceChannelStatusPermission: !1
                            }), u ? [c()] : [])];
                        default:
                            ;
                            return [n.generateChannelGeneralSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), n.generateChannelMembershipSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), n.generateChannelTextSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
                                showPrivateThreads: t.type !== h.ChannelTypes.GUILD_ANNOUNCEMENT,
                                showCreateThreads: !0,
                                showClydeAIPermissions: v
                            }), ...(O = P, f = () => n.generateChannelVoiceSection(m, g.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, {
                                showVoiceChannelStatusPermission: !1
                            }), O ? [f()] : [])]
                    }
                },
                generateGuildPermissionSpec: function(e) {
                    var t, s;
                    let a = new Set,
                        r = e.hasFeature(h.GuildFeatures.COMMUNITY);
                    return !r && a.add(h.Permissions.VIEW_GUILD_ANALYTICS.toString()), t = n.generateGuildPermissionSpec(g.default.Messages, R(e.id)), 0 === (s = a).size ? t : t.map(e => ({
                        ...e,
                        permissions: e.permissions.filter(e => !s.has(e.flag.toString()))
                    }))
                },
                getGuildPermissionSpecMap: function(e) {
                    return n.getGuildPermissionSpec(g.default.Messages, R(e.id))
                }
            }
        }
    }
]);
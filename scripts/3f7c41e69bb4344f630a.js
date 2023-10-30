(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["79142"], {
        178225: function(E, s, e) {
            "use strict";
            e.r(s), e.d(s, {
                isGuildEligibleForStageChannels: function() {
                    return _
                },
                useGuildEligibleForStageChannels: function() {
                    return t
                }
            });
            var S = e("446674"),
                i = e("305961"),
                n = e("49111");

            function _(E) {
                var s;
                let [e] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default];
                return !!(null === (s = e.getGuild(E)) || void 0 === s ? void 0 : s.hasFeature(n.GuildFeatures.COMMUNITY))
            }

            function t(E) {
                return (0, S.useStateFromStores)([i.default], () => _(E, [i.default]), [E])
            }
        },
        158352: function(E, s, e) {
            "use strict";
            e.r(s), e.d(s, {
                default: function() {
                    return T
                }
            });
            var S = e("37983"),
                i = e("884691"),
                n = e("414456"),
                _ = e.n(n),
                t = e("77078"),
                r = e("837899"),
                I = e("425190"),
                o = e("49111"),
                N = e("46583");
            let R = E => (0, S.jsx)("div", {
                    className: E.className,
                    children: E.children
                }),
                A = E => (0, S.jsx)("div", {
                    className: E.className,
                    children: E.children
                }),
                O = E => (0, S.jsx)("div", {
                    className: E.className,
                    children: E.children
                });
            class P extends i.PureComponent {
                isSortable(E) {
                    return null != E.sort && !1 !== E.sort
                }
                getDefaultSort(E) {
                    return (s, e) => {
                        let S = s[E],
                            i = e[E];
                        return null != S && null != i ? S === i ? 0 : S < i ? -1 : 1 : 0
                    }
                }
                renderHeader() {
                    let {
                        columns: E,
                        data: s,
                        sortDirection: e,
                        sortKey: i,
                        headerCellClassName: n,
                        headerClassName: A,
                        sortedHeaderCellClassName: O,
                        stickyHeader: P
                    } = this.props, T = E.map(E => {
                        let R = null != E.renderHeader ? E.renderHeader(E, s) : E.key,
                            A = e === o.TableSortDirections.ASCENDING ? I.default : r.default;
                        return (0, S.jsx)(t.Clickable, {
                            className: _(N.headerCell, n, E.headerCellClassName, E.cellClassName, i === E.key && O, {
                                [N.clickable]: this.isSortable(E)
                            }),
                            onClick: this.isSortable(E) ? () => this.handleSort(E.key) : void 0,
                            children: (0, S.jsxs)("div", {
                                className: N.headerCellContent,
                                children: [R, this.isSortable(E) && i === E.key ? (0, S.jsx)(A, {
                                    className: N.sortIcon
                                }) : null]
                            })
                        }, E.key)
                    });
                    return (0, S.jsx)(R, {
                        className: _(A, N.row, {
                            [N.stickyHeader]: P
                        }),
                        children: T
                    })
                }
                renderBody() {
                    let {
                        columns: E,
                        data: s,
                        sortData: e,
                        sortKey: S,
                        sortDirection: n,
                        bodyCellClassName: t,
                        rowClassName: r,
                        cellProps: I,
                        rowProps: R,
                        rowComponent: A,
                        cellComponent: O
                    } = this.props, P = s;
                    if (e) {
                        let e = null != S ? E.find(E => {
                                let {
                                    key: s
                                } = E;
                                return s === S
                            }) : null,
                            i = [...s],
                            _ = null != e && e.sort,
                            t = null != e && null != S && this.isSortable(e) ? i.sort("function" == typeof _ ? (E, s) => _(E, s, n) : this.getDefaultSort(S)) : i;
                        P = null != e && n === o.TableSortDirections.DESCENDING ? t.reverse() : t
                    }
                    return P.map((s, e) => {
                        let S = E.map(E => (0, i.createElement)(O, {
                            ...I,
                            key: E.key,
                            item: s,
                            className: _(t, E.bodyCellClassName, E.cellClassName)
                        }, null != E.render ? E.render(s, I, e) : s[E.key]));
                        return (0, i.createElement)(A, {
                            ...R,
                            key: s.key,
                            item: s,
                            className: _(N.row, r)
                        }, S)
                    })
                }
                render() {
                    let {
                        className: E,
                        hasHeader: s
                    } = this.props;
                    return (0, S.jsxs)("div", {
                        className: E,
                        children: [s ? this.renderHeader() : null, this.renderBody()]
                    })
                }
                constructor(...E) {
                    super(...E), this.handleSort = E => {
                        let {
                            sortKey: s,
                            sortDirection: e,
                            onSort: S
                        } = this.props;
                        null != S && S(E, s === E ? e === o.TableSortDirections.ASCENDING ? o.TableSortDirections.DESCENDING : o.TableSortDirections.ASCENDING : o.TableSortDirections.ASCENDING)
                    }
                }
            }
            P.SortDirection = o.TableSortDirections, P.defaultProps = {
                initialSortDirection: o.TableSortDirections.ASCENDING,
                rowHeaderComponent: R,
                rowComponent: A,
                cellComponent: O,
                hasHeader: !0,
                sortData: !0,
                stickyHeader: !1
            };
            var T = P
        },
        756609: function(E, s, e) {
            "use strict";
            e.r(s), e.d(s, {
                default: function() {
                    return t
                }
            });
            var S = e("37983");
            e("884691");
            var i = e("469563"),
                n = e("308472"),
                _ = e("75196"),
                t = (0, i.replaceIcon)(function(E) {
                    let {
                        width: s = 18,
                        height: e = 18,
                        color: i = "currentColor",
                        foreground: n,
                        ...t
                    } = E;
                    return (0, S.jsxs)("svg", {
                        ...(0, _.default)(t),
                        width: s,
                        height: e,
                        viewBox: "0 0 18 18",
                        children: [(0, S.jsx)("path", {
                            fill: i,
                            className: n,
                            d: "M4.5,16.5v-3H3A1.5,1.5,0,0,1,1.5,12V3A1.5,1.5,0,0,1,3,1.5H15A1.5,1.5,0,0,1,16.5,3v9A1.5,1.5,0,0,1,15,13.5H8.5ZM3,3v9H6v1.5L8,12h7V3Z"
                        }), (0, S.jsx)("path", {
                            fill: i,
                            className: n,
                            d: "M6.75,4.5H5.25v6h1.5Z"
                        }), (0, S.jsx)("path", {
                            fill: i,
                            className: n,
                            d: "M9.75,7.5H8.25v3h1.5Z"
                        }), (0, S.jsx)("path", {
                            fill: i,
                            className: n,
                            d: "M12.75,6h-1.5v4.5h1.5Z"
                        })]
                    })
                }, n.AnalyticsIcon)
        },
        315585: function(E, s, e) {
            "use strict";
            e.r(s), e.d(s, {
                default: function() {
                    return n
                }
            });
            var S = e("37983");
            e("884691");
            var i = e("75196");

            function n(E) {
                let {
                    width: s = 14,
                    height: e = 14,
                    color: n = "currentColor",
                    foreground: _,
                    ...t
                } = E;
                return (0, S.jsx)("svg", {
                    ...(0, i.default)(t),
                    width: s,
                    height: e,
                    viewBox: "0 0 14 14",
                    children: (0, S.jsx)("path", {
                        className: _,
                        fill: n,
                        d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z"
                    })
                })
            }
        },
        465305: function(E, s, e) {
            "use strict";
            e.r(s), e.d(s, {
                default: function() {
                    return L
                }
            });
            var S = e("200900"),
                i = e("79112"),
                n = e("746164"),
                _ = e("980215"),
                t = e("250666"),
                r = e("680986"),
                I = e("867965"),
                o = e("348934"),
                N = e("520141"),
                R = e("592407"),
                A = e("819450"),
                O = e("178225"),
                P = e("300322"),
                T = e("233069"),
                M = e("305961"),
                a = e("701909"),
                l = e("49111"),
                C = e("606762"),
                m = e("782340");

            function D(E) {
                let s = (0, O.isGuildEligibleForStageChannels)(E),
                    e = (0, r.getEnableForumPermissions)(E),
                    S = (0, N.isMemberVerificationManualApproval)(E),
                    I = M.default.getGuild(E),
                    o = null != I && (0, t.isCreatorMonetizationEnabledGuild)(I),
                    R = (0, _.getClydeExperimentEnabled)(I),
                    A = n.default.getCurrentConfig({
                        guildId: E,
                        location: "permission_spec_utils"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return {
                    PRIORITY_SPEAKER_DESCRIPTION: m.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_APP.format({
                        keybind: m.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
                        onClick: () => {
                            i.default.open(l.UserSettingsSections.KEYBINDS)
                        }
                    }),
                    SOUNDBOARD_DESCRIPTION: m.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_LEARN_MORE.format({
                        helpCenterArticle: a.default.getArticleURL(l.HelpdeskArticles.SOUNDBOARD)
                    }),
                    showStageChannelPermissions: s,
                    showExperimental: !0,
                    showForumPermissions: e,
                    showMembershipManualApprovalPermissions: S,
                    showCreatorMonetizationAnalyticsPermission: o,
                    showClydeAIPermissions: R,
                    showVoiceChannelStatusPermission: A
                }
            }

            function c(E, s) {
                return E ? [s()] : []
            }
            var L = {
                generateChannelPermissionSpec: function(E, s, e, i) {
                    var n, t, N, O, a, c;
                    let L = (0, r.getEnableForumPermissions)(E),
                        u = (0, C.getChannelPermissionSpecMap)(s, e, L, i),
                        d = D(E),
                        g = P.VoiceInThreadsExperiment.getCurrentConfig({
                            guildId: E,
                            location: "3ad37d_1"
                        }).enabled && T.VOICE_THREAD_PARENT_CHANNEL_TYPES.has(s.type),
                        f = (0, A.isStageVideoEnabled)(E),
                        h = (0, o.canCurrentUserManageMessageFilters)(E),
                        G = s.isMediaChannel(),
                        p = M.default.getGuild(E),
                        U = (0, _.getClydeExperimentEnabled)(p);
                    switch (s.type) {
                        case l.ChannelTypes.GUILD_CATEGORY:
                            ;
                            return [S.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CATEGORY), S.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), S.generateChannelTextSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
                                showPrivateThreads: !0,
                                showCreateThreads: !0,
                                showClydeAIPermissions: U
                            }), S.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, {
                                showVoiceChannelStatusPermission: d.showVoiceChannelStatusPermission
                            }), ...(n = d.showStageChannelPermissions, t = () => S.generateChannelStageSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), n ? [t()] : []), S.generateChannelEventsSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
                        case l.ChannelTypes.GUILD_VOICE:
                            return [S.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
                                showManageWebhooks: !0
                            }), S.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), S.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, {
                                showVoiceChannelStatusPermission: d.showVoiceChannelStatusPermission
                            }), S.generateChannelVoiceChatSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
                                sectionDescription: h ? m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
                                    setUpAutomod: () => {
                                        R.default.open(E, l.GuildSettingsSections.GUILD_AUTOMOD)
                                    }
                                }) : void 0
                            }), S.generateChannelEventsSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
                        case l.ChannelTypes.GUILD_STAGE_VOICE:
                            return [S.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
                                showManageWebhooks: !1
                            }), S.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), S.generateChannelStageVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, f), S.generateChannelStageSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), S.generateChannelEventsSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS), S.generateChannelVoiceChatSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
                                sectionDescription: h ? m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
                                    setUpAutomod: () => {
                                        R.default.open(E, l.GuildSettingsSections.GUILD_AUTOMOD)
                                    }
                                }) : void 0
                            })];
                        case l.ChannelTypes.GUILD_FORUM:
                        case l.ChannelTypes.GUILD_MEDIA:
                            ;
                            let V = G ? m.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL : m.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS,
                                H = G ? m.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL_DESCRIPTION : m.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS_DESCRIPTION;
                            return [S.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), S.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), S.generateChannelTextSection(u, V, {
                                showPrivateThreads: !1,
                                showCreateThreads: !1,
                                sectionDescription: h ? H.format({
                                    setUpAutomod: () => {
                                        !G && (0, I.trackForumEnableAutomodClicked)(), R.default.open(E, l.GuildSettingsSections.GUILD_AUTOMOD)
                                    }
                                }) : void 0,
                                showClydeAIPermissions: U
                            }), ...(N = g, O = () => S.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, {
                                showVoiceChannelStatusPermission: !1
                            }), N ? [O()] : [])];
                        default:
                            ;
                            return [S.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), S.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), S.generateChannelTextSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
                                showPrivateThreads: s.type !== l.ChannelTypes.GUILD_ANNOUNCEMENT,
                                showCreateThreads: !0,
                                showClydeAIPermissions: U
                            }), ...(a = g, c = () => S.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, {
                                showVoiceChannelStatusPermission: !1
                            }), a ? [c()] : [])]
                    }
                },
                generateGuildPermissionSpec: function(E) {
                    var s, e;
                    let i = new Set,
                        n = E.hasFeature(l.GuildFeatures.COMMUNITY);
                    return !n && i.add(l.Permissions.VIEW_GUILD_ANALYTICS.toString()), s = S.generateGuildPermissionSpec(m.default.Messages, D(E.id)), 0 === (e = i).size ? s : s.map(E => ({
                        ...E,
                        permissions: E.permissions.filter(E => !e.has(E.flag.toString()))
                    }))
                },
                getGuildPermissionSpecMap: function(E) {
                    return S.getGuildPermissionSpec(m.default.Messages, D(E.id))
                }
            }
        },
        200900: function(E, s, e) {
            "use strict";
            e.r(s), e.d(s, {
                getGuildPermissionSpec: function() {
                    return _
                },
                generateGuildPermissionSpec: function() {
                    return t
                },
                generateChannelGeneralSection: function() {
                    return r
                },
                generateChannelMembershipSection: function() {
                    return I
                },
                generateChannelTextSection: function() {
                    return o
                },
                generateChannelVoiceSection: function() {
                    return N
                },
                generateChannelVoiceChatSection: function() {
                    return R
                },
                generateChannelStageVoiceSection: function() {
                    return A
                },
                generateChannelStageSection: function() {
                    return O
                },
                generateChannelEventsSection: function() {
                    return P
                },
                renderDescription: function() {
                    return T
                }
            });
            var S = e("843455");

            function i(E) {
                let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return !s && (E.permissions = E.permissions.filter(E => {
                    let {
                        isExperimental: s
                    } = E;
                    return !s
                })), E
            }

            function n(E, s) {
                return E.map(E => s[E.toString()])
            }

            function _(E, s) {
                return {
                    [S.Permissions.VIEW_CHANNEL.toString()]: {
                        title: E.ROLE_PERMISSIONS_VIEW_CHANNEL,
                        description: E.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION,
                        flag: S.Permissions.VIEW_CHANNEL
                    },
                    [S.Permissions.MANAGE_CHANNELS.toString()]: {
                        title: E.MANAGE_CHANNELS,
                        description: E.ROLE_PERMISSIONS_MANAGE_CHANNELS_DESCRIPTION,
                        flag: S.Permissions.MANAGE_CHANNELS
                    },
                    [S.Permissions.MANAGE_ROLES.toString()]: {
                        title: E.MANAGE_ROLES,
                        description: E.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION,
                        flag: S.Permissions.MANAGE_ROLES
                    },
                    [S.Permissions.MANAGE_GUILD_EXPRESSIONS.toString()]: {
                        title: E.MANAGE_EXPRESSIONS,
                        description: E.ROLE_PERMISSIONS_MANAGE_EXPRESSIONS_DESCRIPTION,
                        flag: S.Permissions.MANAGE_GUILD_EXPRESSIONS
                    },
                    [S.Permissions.CREATE_GUILD_EXPRESSIONS.toString()]: {
                        title: E.CREATE_EXPRESSIONS,
                        description: E.ROLE_PERMISSIONS_CREATE_EXPRESSIONS_DESCRIPTION,
                        flag: S.Permissions.CREATE_GUILD_EXPRESSIONS
                    },
                    [S.Permissions.VIEW_AUDIT_LOG.toString()]: {
                        title: E.VIEW_AUDIT_LOG,
                        description: E.ROLE_PERMISSIONS_VIEW_AUDIT_LOG_DESCRIPTION,
                        flag: S.Permissions.VIEW_AUDIT_LOG
                    },
                    [S.Permissions.VIEW_GUILD_ANALYTICS.toString()]: {
                        title: E.VIEW_GUILD_ANALYTICS,
                        description: E.ROLE_PERMISSIONS_VIEW_GUILD_ANALYTICS_DESCRIPTION,
                        flag: S.Permissions.VIEW_GUILD_ANALYTICS
                    },
                    [S.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
                        title: E.VIEW_CREATOR_MONETIZATION_ANALYTICS,
                        description: E.ROLE_PERMISSIONS_VIEW_CREATOR_MONETIZATION_ANALYTICS_DESCRIPTION,
                        flag: S.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS
                    },
                    [S.Permissions.MANAGE_WEBHOOKS.toString()]: {
                        title: E.MANAGE_WEBHOOKS,
                        description: E.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION,
                        flag: S.Permissions.MANAGE_WEBHOOKS
                    },
                    [S.Permissions.MANAGE_GUILD.toString()]: {
                        title: E.MANAGE_SERVER,
                        description: E.ROLE_PERMISSIONS_MANAGE_SERVER_DESCRIPTION,
                        flag: S.Permissions.MANAGE_GUILD
                    },
                    [S.Permissions.CREATE_INSTANT_INVITE.toString()]: {
                        title: E.CREATE_INSTANT_INVITE,
                        description: E.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION,
                        flag: S.Permissions.CREATE_INSTANT_INVITE
                    },
                    [S.Permissions.CHANGE_NICKNAME.toString()]: {
                        title: E.CHANGE_NICKNAME,
                        description: E.ROLE_PERMISSIONS_CHANGE_NICKNAME_DESCRIPTION,
                        flag: S.Permissions.CHANGE_NICKNAME
                    },
                    [S.Permissions.MANAGE_NICKNAMES.toString()]: {
                        title: E.MANAGE_NICKNAMES,
                        description: E.ROLE_PERMISSIONS_MANAGE_NICKNAMES_DESCRIPTION,
                        flag: S.Permissions.MANAGE_NICKNAMES
                    },
                    [S.Permissions.KICK_MEMBERS.toString()]: {
                        title: s.showMembershipManualApprovalPermissions ? E.KICK_MEMBERS_AND_REVIEW_APPLICATIONS : E.KICK_MEMBERS,
                        description: s.showMembershipManualApprovalPermissions ? E.ROLE_PERMISSIONS_KICK_MEMBERS_AND_REVIEW_APPLICATION_DESCRIPTION : E.ROLE_PERMISSIONS_KICK_MEMBERS_DESCRIPTION,
                        flag: S.Permissions.KICK_MEMBERS
                    },
                    [S.Permissions.BAN_MEMBERS.toString()]: {
                        title: E.BAN_MEMBERS,
                        description: E.ROLE_PERMISSIONS_BAN_MEMBERS_DESCRIPTION,
                        flag: S.Permissions.BAN_MEMBERS
                    },
                    [S.Permissions.MODERATE_MEMBERS.toString()]: {
                        title: E.MODERATE_MEMBER,
                        description: E.ROLE_PERMISSIONS_MODERATE_MEMBER_DESCRIPTION,
                        flag: S.Permissions.MODERATE_MEMBERS
                    },
                    [S.Permissions.SEND_MESSAGES.toString()]: {
                        title: s.showForumPermissions ? E.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : E.SEND_MESSAGES,
                        description: s.showForumPermissions ? E.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION : E.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION,
                        flag: S.Permissions.SEND_MESSAGES
                    },
                    [S.Permissions.EMBED_LINKS.toString()]: {
                        title: E.EMBED_LINKS,
                        description: E.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION,
                        flag: S.Permissions.EMBED_LINKS
                    },
                    [S.Permissions.ATTACH_FILES.toString()]: {
                        title: E.ATTACH_FILES,
                        description: E.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION,
                        flag: S.Permissions.ATTACH_FILES
                    },
                    [S.Permissions.ADD_REACTIONS.toString()]: {
                        title: E.ADD_REACTIONS,
                        description: E.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION,
                        flag: S.Permissions.ADD_REACTIONS
                    },
                    [S.Permissions.USE_EXTERNAL_EMOJIS.toString()]: {
                        title: E.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
                        description: E.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION,
                        flag: S.Permissions.USE_EXTERNAL_EMOJIS
                    },
                    [S.Permissions.USE_EXTERNAL_STICKERS.toString()]: {
                        title: E.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
                        description: E.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION,
                        flag: S.Permissions.USE_EXTERNAL_STICKERS
                    },
                    [S.Permissions.MENTION_EVERYONE.toString()]: {
                        title: E.MENTION_EVERYONE,
                        description: E.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION,
                        flag: S.Permissions.MENTION_EVERYONE
                    },
                    [S.Permissions.MANAGE_MESSAGES.toString()]: {
                        title: E.MANAGE_MESSAGES,
                        description: E.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION,
                        flag: S.Permissions.MANAGE_MESSAGES
                    },
                    [S.Permissions.READ_MESSAGE_HISTORY.toString()]: {
                        title: E.READ_MESSAGE_HISTORY,
                        description: E.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION,
                        flag: S.Permissions.READ_MESSAGE_HISTORY
                    },
                    [S.Permissions.SEND_TTS_MESSAGES.toString()]: {
                        title: E.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
                        description: E.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION,
                        flag: S.Permissions.SEND_TTS_MESSAGES
                    },
                    [S.Permissions.USE_APPLICATION_COMMANDS.toString()]: {
                        title: E.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
                        description: E.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_GUILD_DESCRIPTION,
                        flag: S.Permissions.USE_APPLICATION_COMMANDS
                    },
                    [S.Permissions.SEND_VOICE_MESSAGES.toString()]: {
                        title: E.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
                        description: E.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE_GUILD_DESCRIPTION,
                        flag: S.Permissions.SEND_VOICE_MESSAGES
                    },
                    [S.Permissions.USE_CLYDE_AI.toString()]: {
                        title: E.ROLE_PERMISSIONS_USE_CLYDE_AI,
                        description: E.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
                        flag: S.Permissions.USE_CLYDE_AI
                    },
                    [S.Permissions.CONNECT.toString()]: {
                        title: E.CONNECT,
                        description: E.ROLE_PERMISSIONS_CONNECT_DESCRIPTION,
                        flag: S.Permissions.CONNECT
                    },
                    [S.Permissions.SPEAK.toString()]: {
                        title: E.SPEAK,
                        description: E.ROLE_PERMISSIONS_SPEAK_DESCRIPTION,
                        flag: S.Permissions.SPEAK
                    },
                    [S.Permissions.STREAM.toString()]: {
                        title: E.VIDEO,
                        description: E.ROLE_PERMISSIONS_STREAM_DESCRIPTION,
                        flag: S.Permissions.STREAM
                    },
                    [S.Permissions.USE_EMBEDDED_ACTIVITIES.toString()]: {
                        title: E.USE_EMBEDDED_ACTIVITIES,
                        description: E.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION,
                        flag: S.Permissions.USE_EMBEDDED_ACTIVITIES
                    },
                    [S.Permissions.USE_SOUNDBOARD.toString()]: {
                        title: E.USE_SOUNDBOARD,
                        description: (null == s ? void 0 : s.SOUNDBOARD_DESCRIPTION) || E.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION,
                        flag: S.Permissions.USE_SOUNDBOARD
                    },
                    [S.Permissions.USE_EXTERNAL_SOUNDS.toString()]: {
                        title: E.USE_EXTERNAL_SOUNDS,
                        description: E.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
                        flag: S.Permissions.USE_EXTERNAL_SOUNDS
                    },
                    [S.Permissions.USE_VAD.toString()]: {
                        title: E.USE_VAD,
                        description: E.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION,
                        flag: S.Permissions.USE_VAD
                    },
                    [S.Permissions.PRIORITY_SPEAKER.toString()]: {
                        title: E.PRIORITY_SPEAKER,
                        description: (null == s ? void 0 : s.PRIORITY_SPEAKER_DESCRIPTION) || E.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION,
                        flag: S.Permissions.PRIORITY_SPEAKER
                    },
                    [S.Permissions.MUTE_MEMBERS.toString()]: {
                        title: E.MUTE_MEMBERS,
                        description: E.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION,
                        flag: S.Permissions.MUTE_MEMBERS
                    },
                    [S.Permissions.DEAFEN_MEMBERS.toString()]: {
                        title: E.DEAFEN_MEMBERS,
                        description: E.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION,
                        flag: S.Permissions.DEAFEN_MEMBERS
                    },
                    [S.Permissions.MOVE_MEMBERS.toString()]: {
                        title: E.MOVE_MEMBERS,
                        description: E.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION,
                        flag: S.Permissions.MOVE_MEMBERS
                    },
                    [S.Permissions.REQUEST_TO_SPEAK.toString()]: {
                        title: E.REQUEST_TO_SPEAK,
                        description: E.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION,
                        flag: S.Permissions.REQUEST_TO_SPEAK,
                        isExperimental: !0
                    },
                    [S.Permissions.ADMINISTRATOR.toString()]: {
                        title: E.ADMINISTRATOR,
                        description: "string" == typeof E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION ? E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION : E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION.format(),
                        flag: S.Permissions.ADMINISTRATOR
                    },
                    [S.Permissions.MANAGE_EVENTS.toString()]: {
                        title: E.MANAGE_EVENTS,
                        description: E.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION,
                        flag: S.Permissions.MANAGE_EVENTS
                    },
                    [S.Permissions.CREATE_EVENTS.toString()]: {
                        title: E.CREATE_EVENTS,
                        description: E.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION,
                        flag: S.Permissions.CREATE_EVENTS
                    },
                    [S.Permissions.MANAGE_THREADS.toString()]: {
                        title: s.showForumPermissions ? E.MANAGE_THREADS_AND_FORUM_POSTS : E.MANAGE_THREADS,
                        description: s.showForumPermissions ? E.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION : E.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION,
                        flag: S.Permissions.MANAGE_THREADS
                    },
                    [S.Permissions.CREATE_PUBLIC_THREADS.toString()]: {
                        title: E.CREATE_PUBLIC_THREADS,
                        description: E.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION,
                        flag: S.Permissions.CREATE_PUBLIC_THREADS
                    },
                    [S.Permissions.CREATE_PRIVATE_THREADS.toString()]: {
                        title: E.CREATE_PRIVATE_THREADS,
                        description: E.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION,
                        flag: S.Permissions.CREATE_PRIVATE_THREADS
                    },
                    [S.Permissions.SEND_MESSAGES_IN_THREADS.toString()]: {
                        title: s.showForumPermissions ? E.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : E.SEND_MESSAGES_IN_THREADS,
                        description: s.showForumPermissions ? E.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION : E.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION,
                        flag: S.Permissions.SEND_MESSAGES_IN_THREADS
                    },
                    [S.Permissions.USE_CLYDE_AI.toString()]: {
                        title: E.ROLE_PERMISSIONS_USE_CLYDE_AI,
                        description: E.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
                        flag: S.Permissions.USE_CLYDE_AI
                    },
                    [S.Permissions.SET_VOICE_CHANNEL_STATUS.toString()]: {
                        title: E.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
                        description: E.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
                        flag: S.Permissions.SET_VOICE_CHANNEL_STATUS
                    }
                }
            }

            function t(E, s) {
                var e;
                let t = _(E, s),
                    r = [function(E, s, e) {
                        let _ = [S.Permissions.VIEW_CHANNEL, S.Permissions.MANAGE_CHANNELS, S.Permissions.MANAGE_ROLES, S.Permissions.CREATE_GUILD_EXPRESSIONS, S.Permissions.MANAGE_GUILD_EXPRESSIONS, S.Permissions.VIEW_AUDIT_LOG, S.Permissions.VIEW_GUILD_ANALYTICS];
                        return e.showCreatorMonetizationAnalyticsPermission && _.push(S.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS), _.push(S.Permissions.MANAGE_WEBHOOKS), _.push(S.Permissions.MANAGE_GUILD), i({
                            title: s.ROLE_PERMISSIONS_SECTION_GENERAL_GUILD,
                            permissions: n(_, E)
                        })
                    }(t, E, s), function(E, s) {
                        let e = [S.Permissions.CREATE_INSTANT_INVITE, S.Permissions.CHANGE_NICKNAME, S.Permissions.MANAGE_NICKNAMES, S.Permissions.KICK_MEMBERS, S.Permissions.BAN_MEMBERS, S.Permissions.MODERATE_MEMBERS];
                        return i({
                            title: s.ROLE_PERMISSIONS_SECTION_MEMBERSHIP,
                            permissions: n(e, E)
                        })
                    }(t, E), function(E, s, e) {
                        let _ = [S.Permissions.SEND_MESSAGES, S.Permissions.SEND_MESSAGES_IN_THREADS, S.Permissions.CREATE_PUBLIC_THREADS, S.Permissions.CREATE_PRIVATE_THREADS, S.Permissions.EMBED_LINKS, S.Permissions.ATTACH_FILES, S.Permissions.ADD_REACTIONS, S.Permissions.USE_EXTERNAL_EMOJIS, S.Permissions.USE_EXTERNAL_STICKERS, S.Permissions.MENTION_EVERYONE, S.Permissions.MANAGE_MESSAGES, S.Permissions.MANAGE_THREADS, S.Permissions.READ_MESSAGE_HISTORY, S.Permissions.SEND_TTS_MESSAGES, S.Permissions.USE_APPLICATION_COMMANDS, S.Permissions.SEND_VOICE_MESSAGES, S.Permissions.USE_CLYDE_AI];
                        !e.showClydeAIPermissions && (_ = _.filter(E => E !== S.Permissions.USE_CLYDE_AI));
                        let t = {
                            title: s.ROLE_PERMISSIONS_SECTION_TEXT,
                            permissions: n(_, E)
                        };
                        return i(t)
                    }(t, E, s), function(E, s, e) {
                        let _ = [S.Permissions.CONNECT, S.Permissions.SPEAK, S.Permissions.STREAM, S.Permissions.USE_EMBEDDED_ACTIVITIES, S.Permissions.USE_SOUNDBOARD, S.Permissions.USE_EXTERNAL_SOUNDS, S.Permissions.USE_VAD, S.Permissions.PRIORITY_SPEAKER, S.Permissions.MUTE_MEMBERS, S.Permissions.DEAFEN_MEMBERS, S.Permissions.MOVE_MEMBERS];
                        e.showVoiceChannelStatusPermission && _.push(S.Permissions.SET_VOICE_CHANNEL_STATUS);
                        let t = {
                            title: s.ROLE_PERMISSIONS_SECTION_VOICE,
                            permissions: n(_, E)
                        };
                        return i(t)
                    }(t, E, s)];
                return s.showStageChannelPermissions && r.push(function(E, s, e) {
                    let _ = {
                        title: s.ROLE_PERMISSIONS_SECTION_STAGE,
                        permissions: n([S.Permissions.REQUEST_TO_SPEAK], E)
                    };
                    return i(_, e.showExperimental)
                }(t, E, s)), r.push(function(E, s, e) {
                    let _ = {
                        title: s.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS,
                        permissions: n([S.Permissions.CREATE_EVENTS, S.Permissions.MANAGE_EVENTS], E)
                    };
                    return i(_, e.showExperimental)
                }(t, E, s)), r.push((e = t, i({
                    title: E.ROLE_PERMISSIONS_SECTION_ADVANCED,
                    permissions: n([S.Permissions.ADMINISTRATOR], e)
                }))), r
            }

            function r(E, s) {
                let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    showManageWebhooks: !0
                };
                return {
                    title: s,
                    permissions: n((null == e ? void 0 : e.showManageWebhooks) ? [S.Permissions.VIEW_CHANNEL, S.Permissions.MANAGE_CHANNELS, S.Permissions.MANAGE_ROLES, S.Permissions.MANAGE_WEBHOOKS] : [S.Permissions.VIEW_CHANNEL, S.Permissions.MANAGE_CHANNELS, S.Permissions.MANAGE_ROLES], E)
                }
            }

            function I(E, s) {
                return {
                    title: s,
                    permissions: n([S.Permissions.CREATE_INSTANT_INVITE], E)
                }
            }

            function o(E, s, e) {
                let i = [S.Permissions.SEND_MESSAGES, S.Permissions.SEND_MESSAGES_IN_THREADS, S.Permissions.CREATE_PUBLIC_THREADS, S.Permissions.CREATE_PRIVATE_THREADS, S.Permissions.EMBED_LINKS, S.Permissions.ATTACH_FILES, S.Permissions.ADD_REACTIONS, S.Permissions.USE_EXTERNAL_EMOJIS, S.Permissions.USE_EXTERNAL_STICKERS, S.Permissions.MENTION_EVERYONE, S.Permissions.MANAGE_MESSAGES, S.Permissions.MANAGE_THREADS, S.Permissions.READ_MESSAGE_HISTORY, S.Permissions.SEND_TTS_MESSAGES, S.Permissions.USE_APPLICATION_COMMANDS, S.Permissions.SEND_VOICE_MESSAGES, S.Permissions.USE_CLYDE_AI, S.Permissions.USE_EMBEDDED_ACTIVITIES];
                return (!e.showPrivateThreads || !e.showCreateThreads) && (i = i.filter(E => E !== S.Permissions.CREATE_PRIVATE_THREADS)), !e.showCreateThreads && (i = i.filter(E => E !== S.Permissions.CREATE_PUBLIC_THREADS)), !e.showClydeAIPermissions && (i = i.filter(E => E !== S.Permissions.USE_CLYDE_AI)), {
                    title: s,
                    description: e.sectionDescription,
                    permissions: n(i, E)
                }
            }

            function N(E, s, e) {
                let i = [S.Permissions.CONNECT, S.Permissions.SPEAK, S.Permissions.STREAM, S.Permissions.USE_EMBEDDED_ACTIVITIES, S.Permissions.USE_SOUNDBOARD, S.Permissions.USE_EXTERNAL_SOUNDS, S.Permissions.USE_VAD, S.Permissions.PRIORITY_SPEAKER, S.Permissions.MUTE_MEMBERS, S.Permissions.DEAFEN_MEMBERS, S.Permissions.MOVE_MEMBERS];
                return e.showVoiceChannelStatusPermission && i.push(S.Permissions.SET_VOICE_CHANNEL_STATUS), {
                    title: s,
                    permissions: n(i, E)
                }
            }

            function R(E, s, e) {
                let i = [S.Permissions.SEND_MESSAGES, S.Permissions.EMBED_LINKS, S.Permissions.ATTACH_FILES, S.Permissions.ADD_REACTIONS, S.Permissions.USE_EXTERNAL_EMOJIS, S.Permissions.USE_EXTERNAL_STICKERS, S.Permissions.MENTION_EVERYONE, S.Permissions.MANAGE_MESSAGES, S.Permissions.READ_MESSAGE_HISTORY, S.Permissions.SEND_TTS_MESSAGES, S.Permissions.USE_APPLICATION_COMMANDS];
                return {
                    title: s,
                    description: e.sectionDescription,
                    permissions: n(i, E)
                }
            }

            function A(E, s, e) {
                return {
                    title: s,
                    permissions: n(e ? [S.Permissions.CONNECT, S.Permissions.STREAM, S.Permissions.MUTE_MEMBERS, S.Permissions.MOVE_MEMBERS] : [S.Permissions.CONNECT, S.Permissions.MUTE_MEMBERS, S.Permissions.MOVE_MEMBERS], E)
                }
            }

            function O(E, s) {
                return {
                    title: s,
                    permissions: n([S.Permissions.REQUEST_TO_SPEAK, S.Permissions.MENTION_EVERYONE], E)
                }
            }

            function P(E, s) {
                let e = [S.Permissions.CREATE_EVENTS, S.Permissions.MANAGE_EVENTS],
                    i = {
                        title: s,
                        permissions: n(e, E)
                    };
                return i
            }

            function T(E) {
                return null == E ? E : "string" == typeof E ? E.trim() : "function" == typeof E.format ? E.format() : E
            }
        }
    }
]);